from __future__ import annotations

import asyncio
import logging
from typing import Any

import voluptuous as vol
from homeassistant.components.camera.helper import get_camera_from_entity_id
from homeassistant.components.camera.webrtc import (
    WebRTCAnswer,
    WebRTCCandidate,
    WebRTCError,
    WebRTCMessage,
)
from homeassistant.core import (
    HomeAssistant,
    ServiceCall,
    ServiceResponse,
    SupportsResponse,
    callback,
)
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers import config_validation as cv
from homeassistant.util.ulid import ulid

from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)

ANSWER_WAIT = 10.0
CANDIDATE_QUIET = 0.4
CANDIDATE_MOST = 3.0
SESSION_MOST = 30 * 60

OPEN_SCHEMA = vol.Schema({vol.Required("entity_id"): cv.entity_id, vol.Required("offer"): str})
CLOSE_SCHEMA = vol.Schema({vol.Required("entity_id"): cv.entity_id, vol.Required("session"): str})


class Session:
    def __init__(self) -> None:
        self.answer: asyncio.Future[str] = asyncio.get_running_loop().create_future()
        self.candidates: list[dict[str, Any]] = []
        self.heard = asyncio.Event()

    @callback
    def receive(self, message: WebRTCMessage) -> None:
        if isinstance(message, WebRTCAnswer):
            if not self.answer.done():
                self.answer.set_result(message.answer)
        elif isinstance(message, WebRTCCandidate):
            self.candidates.append(message.candidate.to_dict())
            self.heard.set()
        elif isinstance(message, WebRTCError) and not self.answer.done():
            self.answer.set_exception(HomeAssistantError(f"{message.code}: {message.message}"))

    async def settle(self) -> None:
        loop = asyncio.get_running_loop()
        end = loop.time() + CANDIDATE_MOST
        while (left := end - loop.time()) > 0:
            self.heard.clear()
            try:
                await asyncio.wait_for(self.heard.wait(), min(CANDIDATE_QUIET, left))
            except TimeoutError:
                return


def merged(answer: str, candidates: list[dict[str, Any]]) -> str:
    if not candidates:
        return answer
    lines = answer.replace("\r\n", "\n").rstrip("\n").split("\n")
    sections: list[list[str]] = [[]]
    for line in lines:
        if line.startswith("m="):
            sections.append([])
        sections[-1].append(line)
    for index, section in enumerate(sections[1:]):
        mid = next((s[len("a=mid:") :] for s in section if s.startswith("a=mid:")), None)
        for c in candidates:
            text = c.get("candidate", "")
            if not text:
                continue
            target = c.get("sdpMid")
            line_index = c.get("sdpMLineIndex")
            if target is not None and target != mid:
                continue
            if target is None and line_index is not None and line_index != index:
                continue
            entry = text if text.startswith("a=") else f"a={text}"
            if entry not in section:
                section.append(entry)
    return "\r\n".join(line for part in sections for line in part) + "\r\n"


def async_setup(hass: HomeAssistant) -> None:
    open_sessions: dict[str, asyncio.TimerHandle] = {}

    def close(camera: Any, session: str) -> None:
        if (timer := open_sessions.pop(session, None)) is not None:
            timer.cancel()
        camera.close_webrtc_session(session)

    async def camera_webrtc(call: ServiceCall) -> ServiceResponse:
        try:
            camera = get_camera_from_entity_id(hass, call.data["entity_id"])
        except HomeAssistantError as err:
            raise HomeAssistantError(f"no camera {call.data['entity_id']}: {err}") from err
        session_id = ulid()
        session = Session()
        try:
            await camera.async_handle_async_webrtc_offer(
                call.data["offer"], session_id, session.receive
            )
            answer = await asyncio.wait_for(session.answer, ANSWER_WAIT)
            await session.settle()
        except (HomeAssistantError, TimeoutError) as err:
            camera.close_webrtc_session(session_id)
            raise HomeAssistantError(f"webrtc for {call.data['entity_id']} failed: {err}") from err
        open_sessions[session_id] = hass.loop.call_later(SESSION_MOST, close, camera, session_id)
        _LOGGER.debug(
            "webrtc session %s for %s with %d candidates",
            session_id,
            call.data["entity_id"],
            len(session.candidates),
        )
        return {"session": session_id, "answer": merged(answer, session.candidates)}

    async def camera_webrtc_close(call: ServiceCall) -> ServiceResponse:
        try:
            camera = get_camera_from_entity_id(hass, call.data["entity_id"])
        except HomeAssistantError:
            open_sessions.pop(call.data["session"], None)
            return {"closed": False}
        close(camera, call.data["session"])
        return {"closed": True}

    hass.services.async_register(
        DOMAIN,
        "camera_webrtc",
        camera_webrtc,
        schema=OPEN_SCHEMA,
        supports_response=SupportsResponse.ONLY,
    )
    hass.services.async_register(
        DOMAIN,
        "camera_webrtc_close",
        camera_webrtc_close,
        schema=CLOSE_SCHEMA,
        supports_response=SupportsResponse.OPTIONAL,
    )
