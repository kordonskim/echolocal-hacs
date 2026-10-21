from __future__ import annotations

import asyncio
import logging
from dataclasses import dataclass
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.components.esphome import DOMAIN as ESPHOME_DOMAIN
from homeassistant.core import HomeAssistant, ServiceCall, callback
from homeassistant.exceptions import HomeAssistantError
from homeassistant.util.ulid import ulid

from .const import DOMAIN
from .triggers import _node

_LOGGER = logging.getLogger(__name__)

RING_MOST = 90.0

ANSWER_SCHEMA = vol.Schema({vol.Required("session"): str, vol.Required("sdp"): str})
END_SCHEMA = vol.Schema({vol.Required("session"): str, vol.Optional("reason", default=""): str})


@dataclass
class Leg:
    connection: websocket_api.ActiveConnection
    msg_id: int
    node: str
    timer: asyncio.TimerHandle | None = None


def _status(response: Any) -> str | None:
    if not isinstance(response, dict):
        return None
    if isinstance(response.get("status"), str):
        return response["status"]
    inner = response.get("response")
    if isinstance(inner, dict) and isinstance(inner.get("status"), str):
        return inner["status"]
    return None


def async_setup(hass: HomeAssistant) -> None:
    legs: dict[str, Leg] = {}

    def tell(session: str, message: dict[str, Any]) -> None:
        leg = legs.get(session)
        if leg is not None:
            leg.connection.send_message(websocket_api.event_message(leg.msg_id, message))

    def drop(session: str) -> Leg | None:
        leg = legs.pop(session, None)
        if leg is not None and leg.timer is not None:
            leg.timer.cancel()
        return leg

    def finish(session: str, reason: str) -> None:
        tell(session, {"type": "end", "reason": reason})
        drop(session)

    async def hang_up(node: str, session: str) -> None:
        try:
            await hass.services.async_call(
                ESPHOME_DOMAIN, f"{node}_call_end", {"session": session}, blocking=True
            )
        except HomeAssistantError as err:
            _LOGGER.debug("ending call %s on %s failed: %s", session, node, err)

    @websocket_api.websocket_command(
        {
            vol.Required("type"): "echolocal/call",
            vol.Required("device_id"): str,
            vol.Required("sdp"): str,
            vol.Optional("video", default=False): bool,
            vol.Optional("width", default=0): int,
            vol.Optional("height", default=0): int,
        }
    )
    @websocket_api.async_response
    async def ws_call(
        hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
    ) -> None:
        node = _node(hass, msg["device_id"])
        if node is None:
            connection.send_error(msg["id"], "not_found", "Not an EchoLocal device")
            return
        session = ulid()
        leg = Leg(connection, msg["id"], node)
        legs[session] = leg

        @callback
        def unsubscribe() -> None:
            if drop(session) is not None:
                hass.async_create_task(hang_up(node, session))

        connection.subscriptions[msg["id"]] = unsubscribe
        connection.send_result(msg["id"])

        try:
            response = await hass.services.async_call(
                ESPHOME_DOMAIN,
                f"{node}_call_offer",
                {
                    "session": session,
                    "sdp": msg["sdp"],
                    "video": msg["video"],
                    "from": connection.user.name,
                    "user": connection.user.id,
                    "width": msg["width"],
                    "height": msg["height"],
                },
                blocking=True,
                return_response=True,
            )
        except HomeAssistantError as err:
            _LOGGER.warning("calling %s failed: %s", node, err)
            finish(session, "failed")
            return
        status = _status(response)
        if status != "ringing":
            finish(session, status or "failed")
            return
        if session in legs:
            leg.timer = hass.loop.call_later(RING_MOST, finish, session, "unanswered")
            tell(session, {"type": "ringing"})

    async def call_answer(call: ServiceCall) -> None:
        session = call.data["session"]
        leg = legs.get(session)
        if leg is None:
            return
        if leg.timer is not None:
            leg.timer.cancel()
            leg.timer = None
        tell(session, {"type": "answer", "sdp": call.data["sdp"]})

    async def call_end(call: ServiceCall) -> None:
        finish(call.data["session"], call.data["reason"] or "hangup")

    websocket_api.async_register_command(hass, ws_call)
    hass.services.async_register(DOMAIN, "call_answer", call_answer, schema=ANSWER_SCHEMA)
    hass.services.async_register(DOMAIN, "call_end", call_end, schema=END_SCHEMA)
