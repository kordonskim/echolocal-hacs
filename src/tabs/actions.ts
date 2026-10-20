import { LitElement, html, nothing, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

import { lookOf } from "../boards";
import { register } from "../nav";
import { deviceName } from "../satellite";
import type { HomeAssistant } from "../types";

import styles from "./actions.css";

register({
  path: "actions",
  title: "Voice actions",
  icon: "mdi:gesture-tap-button",
  element: "echolocal-actions",
  order: 12,
});

interface Arg {
  name: string;
  type: string;
}

interface Trigger {
  sentence: string;
  args?: Record<string, string>;
}

interface Action {
  name: string;
  title: string;
  args: Arg[];
  triggers?: Trigger[];
  switch?: string;
  entity?: string | null;
}

interface Match {
  at: number;
  sentence: string;
  action: string;
  device_id: string | null;
  reply: string;
}

interface Snapshot {
  devices: Record<string, { at: number; actions: Action[] }>;
  history: Match[];
}

interface Holder {
  id: string;
  voiced: boolean;
  declared: boolean;
  entity?: string;
}

interface Shared {
  action: Action;
  sentences: Map<string, Trigger>;
  holders: Holder[];
}

function sentenceKey(t: Trigger): string {
  return `${t.sentence}|${JSON.stringify(t.args ?? {})}`;
}

@customElement("echolocal-actions")
export class EchoLocalActions extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ attribute: false }) hass!: HomeAssistant;

  @state() private snapshot?: Snapshot;
  @state() private open = "";

  private stop?: Promise<() => void>;

  disconnectedCallback() {
    super.disconnectedCallback();
    void this.stop?.then((stop) => stop());
    this.stop = undefined;
  }

  protected updated() {
    if (this.stop || !this.hass?.connection) return;
    this.stop = this.hass.connection.subscribeMessage<Snapshot>(
      (snapshot) => (this.snapshot = snapshot),
      { type: "echolocal/actions" }
    );
  }

  render() {
    if (!this.hass) return nothing;
    const actions = this.byAction();

    return html`
      <h2 class="first">Voice actions</h2>
      ${actions.length
        ? html`<div class="list">${actions.map((a) => this.renderAction(a))}</div>`
        : html`<div class="spare">No device has declared any actions yet.</div>`}
      <h2>Heard</h2>
      ${this.snapshot?.history.length
        ? html`<div class="list">${this.snapshot.history.map((m) => this.renderMatch(m))}</div>`
        : html`<div class="spare">Nothing heard yet.</div>`}
    `;
  }

  private byAction(): Shared[] {
    const out = new Map<string, Shared>();
    for (const [id, d] of Object.entries(this.snapshot?.devices ?? {})) {
      for (const a of d.actions) {
        const shared: Shared = out.get(a.name) ?? { action: a, sentences: new Map(), holders: [] };
        for (const t of a.triggers ?? []) shared.sentences.set(sentenceKey(t), t);
        shared.holders.push({
          id,
          voiced: (a.triggers?.length ?? 0) > 0,
          declared: Boolean(a.switch),
          entity: a.entity ?? undefined,
        });
        out.set(a.name, shared);
      }
    }
    for (const shared of out.values()) {
      shared.holders.sort((x, y) => this.name(x.id).localeCompare(this.name(y.id)));
    }
    return [...out.values()].sort((x, y) =>
      (x.action.title || x.action.name).localeCompare(y.action.title || y.action.name)
    );
  }

  private renderAction(shared: Shared) {
    const { action } = shared;
    const args = action.args.map((a) => `${a.name}: ${a.type}`).join(", ");
    const sentences = [...shared.sentences.values()];
    const listening = shared.holders.filter((h) => this.voiced(h));
    return html`
      <div class="action">
        <div class="row">
          <span class="title">${action.title || action.name}</span>
          <code>${action.name}(${args})</code>
        </div>
        ${sentences.length
          ? html`<ul>
              ${sentences.map(
                (t) =>
                  html`<li>
                    “${t.sentence}”${t.args
                      ? html`<span class="fixed">
                          ${Object.entries(t.args)
                            .map(([k, v]) => `${k}=${v}`)
                            .join(" ")}</span
                        >`
                      : nothing}
                  </li>`
              )}
            </ul>`
          : html`<div class="quiet">No voice triggers</div>`}
        <button class="devices" @click=${() => (this.open = this.open === action.name ? "" : action.name)}>
          <ha-icon icon="mdi:speaker-multiple"></ha-icon>
          <span>
            ${listening.length} of ${shared.holders.length}
            ${shared.holders.length === 1 ? "device" : "devices"} listening
          </span>
          <ha-icon icon=${this.open === action.name ? "mdi:chevron-up" : "mdi:chevron-down"}></ha-icon>
        </button>
        ${this.open === action.name
          ? html`<div class="picker">${shared.holders.map((h) => this.renderHolder(h))}</div>`
          : nothing}
      </div>
    `;
  }

  private renderHolder(holder: Holder) {
    const look = lookOf(this.hass.devices?.[holder.id]?.model ?? "");
    const entity = holder.entity;
    return html`
      <label class="device" data-offline=${String(!entity)}>
        <input
          type="checkbox"
          .checked=${this.voiced(holder)}
          ?disabled=${!entity || !this.hass.user?.is_admin}
          @change=${(e: Event) => void this.setVoiced(entity!, (e.target as HTMLInputElement).checked)}
        />
        ${look.shape === "panel"
          ? html`<span class="picture">${unsafeSVG(look.picture)}</span>`
          : html`<ha-icon icon=${look.shape === "dot" ? "mdi:speaker" : "mdi:tablet"}></ha-icon>`}
        <span>${this.name(holder.id)}</span>
        ${entity
          ? nothing
          : html`<span class="state">${holder.declared ? "switch not found" : "needs an update"}</span>`}
      </label>
    `;
  }

  private voiced(holder: Holder): boolean {
    const state = holder.entity ? this.hass.states[holder.entity]?.state : undefined;
    return state === undefined || state === "unavailable" ? holder.voiced : state === "on";
  }

  private async setVoiced(entity: string, on: boolean) {
    await this.hass.callService("switch", on ? "turn_on" : "turn_off", { entity_id: entity });
  }

  private renderMatch(m: Match) {
    return html`
      <div class="match">
        <span class="when">${new Date(m.at * 1000).toLocaleTimeString()}</span>
        <span class="name">${m.device_id ? this.name(m.device_id) : "Unknown device"}</span>
        <span class="said">“${m.sentence}”</span>
        <code>${m.action}</code>
        <span class="reply">${m.reply || "silent"}</span>
      </div>
    `;
  }

  private name(id: string): string {
    return deviceName(this.hass.devices?.[id]) || id;
  }
}
