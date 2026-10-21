import { LitElement, html, nothing, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { labels } from "../groups";
import { register } from "../nav";
import pills from "../pills.css";
import type { HassLabel, HomeAssistant } from "../types";

import styles from "./fleet.css";

register({
  path: "fleet",
  title: "Fleet",
  icon: "mdi:compare-horizontal",
  element: "echolocal-fleet",
  order: 32,
  admin: true,
});

interface Setting {
  domain: string;
  section: string;
  group: string;
  name: string;
  title: string;
  kind: string;
  value: string;
  choices?: string[];
}

interface Device {
  id: string;
  name: string;
  online: boolean;
  settings: Setting[];
  error: string | null;
}

interface Fleet {
  devices: Device[];
  local: string[];
}

interface Skipped {
  domain: string;
  name: string;
  why: string;
}

interface Result {
  id: string;
  changed: number;
  skipped: Skipped[];
  errors: string[];
}

interface Column {
  key: string;
  setting: Setting;
}

interface Section {
  title: string;
  columns: Column[];
}

type Mark = "match" | "differs" | "na";

const ICONS: Record<Mark, string> = {
  match: "mdi:check",
  differs: "mdi:not-equal-variant",
  na: "mdi:minus",
};

const LABELS: Record<Mark, string> = {
  match: "Matches",
  differs: "Differs",
  na: "Doesn't apply",
};

function keyOf(s: Setting): string {
  return `${s.domain}.${s.name}`;
}

@customElement("echolocal-fleet")
export class EchoLocalFleet extends LitElement {
  static styles = [unsafeCSS(pills), unsafeCSS(styles)];

  @property({ attribute: false }) hass!: HomeAssistant;

  @state() private fleet?: Fleet;
  @state() private failed = "";
  @state() private said = "";
  @state() private master = "";
  @state() private scope = "";
  @state() private known: HassLabel[] = [];
  @state() private columns = new Set<string>();
  @state() private rows = new Set<string>();
  @state() private ignored = new Set<string>();
  @state() private folded = new Set<string>();
  @state() private everything = false;
  @state() private picking = false;
  @state() private search = "";
  @state() private busy = false;
  @state() private results = new Map<string, Result>();

  private asked = false;

  protected updated() {
    if (this.asked || !this.hass) return;
    this.asked = true;
    void this.load();
    void labels(this.hass).then((known) => (this.known = known));
  }

  render() {
    if (!this.hass) return nothing;
    if (this.failed) return html`<div class="spare">${this.failed}</div>`;
    if (!this.fleet) return html`<div class="spare">Reading every device…</div>`;

    const master = this.masterDevice();
    const sources = this.sources();
    if (!master) {
      return html`<div class="spare">No device is online to compare against.</div>`;
    }

    const sections = this.sections(master);
    const others = this.others(master);

    return html`
      <div class="top">
        <ha-select
          class="primary"
          label="Primary"
          .value=${master.id}
          .options=${sources.map((d) => ({ value: d.id, label: d.name }))}
          @selected=${(e: CustomEvent<{ value?: string }>) => e.detail.value && this.choose(e.detail.value)}
        ></ha-select>
        ${this.renderScope()}
        <div class="spacer"></div>
        <label class="toggle">
          <ha-switch
            .checked=${this.everything}
            @change=${(e: Event) => (this.everything = (e.target as HTMLInputElement).checked)}
          ></ha-switch>
          Show matching
        </label>
        <button class="local" @click=${() => (this.picking = !this.picking)}>
          <ha-icon icon="mdi:pin-outline"></ha-icon>
          Local${this.fleet.local.length ? ` (${this.fleet.local.length})` : ""}
        </button>
        ${this.picking ? this.renderLocal(master) : nothing}
      </div>

      <div class="scroll">${this.renderTable(master, sections, others)}</div>

      <div class="bottom">
        ${this.said ? html`<span class="differs">${this.said}</span>` : nothing}
        <span class="quiet">
          ${this.chosenColumns(sections).length} settings to ${this.rows.size}
          ${this.rows.size === 1 ? "device" : "devices"}
        </span>
        <ha-button
          .disabled=${this.busy || !this.rows.size || !this.chosenColumns(sections).length}
          .loading=${this.busy}
          @click=${() => this.sync(master, sections)}
        >
          Sync
        </ha-button>
      </div>
    `;
  }

  private renderScope() {
    const used = new Set(this.fleet!.devices.flatMap((d) => this.hass.devices?.[d.id]?.labels ?? []));
    const shown = this.known.filter((l) => used.has(l.label_id));
    if (!shown.length) return nothing;
    return html`<div class="pills">
      <button class="pill" data-on=${String(!this.scope)} @click=${() => this.scopeTo("")}>All</button>
      ${shown.map(
        (l) => html`<button
          class="pill"
          data-on=${String(this.scope === l.label_id)}
          @click=${() => this.scopeTo(l.label_id)}
        >
          ${l.name}
        </button>`
      )}
    </div>`;
  }

  private renderLocal(master: Device) {
    const local = new Set(this.fleet!.local);
    const all = new Map<string, string>();
    for (const s of master.settings) all.set(keyOf(s), this.fullTitle(s));
    for (const key of local) if (!all.has(key)) all.set(key, key);
    const wanted = this.search.trim().toLowerCase();
    const listed = [...all.entries()]
      .filter(([key, title]) => !wanted || title.toLowerCase().includes(wanted) || key.includes(wanted))
      .sort((a, b) => Number(local.has(b[0])) - Number(local.has(a[0])) || a[1].localeCompare(b[1]));

    return html`<div class="popover">
      <input
        class="search"
        placeholder="Search settings"
        .value=${this.search}
        @input=${(e: Event) => (this.search = (e.target as HTMLInputElement).value)}
      />
      <div class="hint">Checked settings are never synced.</div>
      <div class="options">
        ${listed.map(
          ([key, title]) => html`<label>
            <ha-checkbox
              .checked=${local.has(key)}
              @change=${(e: Event) => this.setLocal(key, (e.target as HTMLInputElement).checked)}
            ></ha-checkbox>
            <span>${title}</span>
          </label>`
        )}
      </div>
    </div>`;
  }

  private renderTable(master: Device, sections: Section[], others: Device[]) {
    const online = others.filter((d) => this.selectable(d));
    const all = online.length > 0 && online.every((d) => this.rows.has(d.id));

    return html`<table>
      <thead>
        <tr>
          <th class="corner" rowspan="2">
            <ha-checkbox
              aria-label="Every device"
              .checked=${all}
              .indeterminate=${!all && this.rows.size > 0}
              @change=${(e: Event) => this.allRows(online, (e.target as HTMLInputElement).checked)}
            ></ha-checkbox>
          </th>
          ${sections.length
            ? sections.map((s) => this.renderSectionHead(s))
            : html`<th class="note" rowspan="2">
                ${this.everything ? "Nothing to compare" : "Every device matches the primary"}
              </th>`}
          <th class="result" rowspan="2"></th>
        </tr>
        <tr>
          ${sections.map((s) =>
            this.folded.has(s.title)
              ? this.renderGroupHead(s)
              : s.columns.map((c) => this.renderColumnHead(c))
          )}
        </tr>
      </thead>
      <tbody>
        <tr class="master-row">
          <th class="who">${master.name}<span class="tag">primary</span></th>
          ${sections.length ? nothing : html`<td></td>`}
          ${sections.map((s) =>
            this.folded.has(s.title)
              ? html`<td class="summary"></td>`
              : s.columns.map(() => html`<td></td>`)
          )}
          <td class="result"></td>
        </tr>
        ${others.map((d) => this.renderRow(d, sections))}
      </tbody>
    </table>`;
  }

  private renderSectionHead(s: Section) {
    const folded = this.folded.has(s.title);
    return html`<th class="section" colspan=${folded ? 1 : s.columns.length}>
      <button @click=${() => this.fold(s.title)}>
        <ha-icon icon=${folded ? "mdi:chevron-right" : "mdi:chevron-down"}></ha-icon>
        <span>${s.title}</span>
      </button>
    </th>`;
  }

  private renderColumnHead(c: Column) {
    return html`<th class="column" title=${this.fullTitle(c.setting)}>
      <div class="head">
        <span class="label">${this.shortTitle(c.setting)}</span>
        <ha-checkbox
          aria-label=${this.fullTitle(c.setting)}
          .checked=${this.columns.has(c.key)}
          @change=${(e: Event) => this.toggle("columns", c.key, (e.target as HTMLInputElement).checked)}
        ></ha-checkbox>
      </div>
    </th>`;
  }

  private renderGroupHead(s: Section) {
    const on = s.columns.filter((c) => this.columns.has(c.key)).length;
    const label = `${s.columns.length} ${s.columns.length === 1 ? "setting" : "settings"}`;
    return html`<th class="column summary" title=${`${s.title}: ${on} of ${label}`}>
      <div class="head">
        <span class="label">${label}</span>
        <ha-checkbox
          aria-label=${`Every setting in ${s.title}`}
          .checked=${on === s.columns.length}
          .indeterminate=${on > 0 && on < s.columns.length}
          @change=${(e: Event) => this.group(s, (e.target as HTMLInputElement).checked)}
        ></ha-checkbox>
      </div>
    </th>`;
  }

  private renderRow(d: Device, sections: Section[]) {
    const result = this.results.get(d.id);
    const ignored = this.ignored.has(d.id);
    return html`<tr data-offline=${String(!this.selectable(d))}>
      <th class="who">
        <div class="name">
          <label>
            <ha-checkbox
              .disabled=${!this.selectable(d)}
              .checked=${this.rows.has(d.id)}
              @change=${(e: Event) => this.toggle("rows", d.id, (e.target as HTMLInputElement).checked)}
            ></ha-checkbox>
            <span>${d.name}</span>
          </label>
          ${!d.online
            ? html`<span class="tag">offline</span>`
            : d.error === "update"
              ? html`<span class="tag">needs an update</span>`
              : d.error
                ? html`<span class="tag">unreadable</span>`
                : nothing}
          <button
            class="ignore"
            data-on=${String(ignored)}
            title=${ignored ? `Compare ${d.name}` : `Ignore ${d.name}`}
            aria-label=${ignored ? `Compare ${d.name}` : `Ignore ${d.name}`}
            @click=${() => this.ignore(d.id, !ignored)}
          >
            <ha-icon icon=${ignored ? "mdi:eye-off-outline" : "mdi:eye-outline"}></ha-icon>
          </button>
        </div>
      </th>
      ${sections.length ? nothing : html`<td></td>`}
      ${sections.map((s) =>
        this.folded.has(s.title) ? this.renderSummary(d, s) : s.columns.map((c) => this.renderCell(this.mark(d, c)))
      )}
      <td class="result">${result ? this.renderResult(result) : nothing}</td>
    </tr>`;
  }

  private renderCell(mark: Mark) {
    return html`<td>
      <span class="cell ${mark}" title=${LABELS[mark]}><ha-icon icon=${ICONS[mark]}></ha-icon></span>
    </td>`;
  }

  private renderSummary(d: Device, s: Section) {
    const marks = s.columns.map((c) => this.mark(d, c));
    const differs = marks.filter((m) => m === "differs").length;
    if (differs) {
      return html`<td class="summary"><span class="count">${differs} differ</span></td>`;
    }
    return this.renderCell(marks.includes("match") ? "match" : "na");
  }

  private renderResult(r: Result) {
    if (r.errors.length) return html`<span class="differs" title=${r.errors.join("\n")}>${r.errors[0]}</span>`;
    const skipped = r.skipped.length ? `, ${r.skipped.length} skipped` : "";
    return html`<span class="match">${r.changed} changed${skipped}</span>`;
  }

  private syncable(d: Device): boolean {
    return d.online && !d.error;
  }

  private selectable(d: Device): boolean {
    return this.syncable(d) && !this.ignored.has(d.id);
  }

  private sources(): Device[] {
    return (this.fleet?.devices ?? [])
      .filter((d) => this.syncable(d) && d.settings.length)
      .sort((a, b) => b.settings.length - a.settings.length || a.name.localeCompare(b.name));
  }

  private masterDevice(): Device | undefined {
    const sources = this.sources();
    return sources.find((d) => d.id === this.master) ?? sources[0];
  }

  private others(master: Device): Device[] {
    return this.fleet!.devices
      .filter((d) => d.id !== master.id)
      .filter((d) => !this.scope || (this.hass.devices?.[d.id]?.labels ?? []).includes(this.scope))
      .sort((a, b) => Number(b.online) - Number(a.online) || a.name.localeCompare(b.name));
  }

  private mark(d: Device, c: Column): Mark {
    if (!d.online) return "na";
    const theirs = d.settings.find((s) => keyOf(s) === c.key);
    if (!theirs) return "na";
    if (theirs.choices && !theirs.choices.includes(c.setting.value)) return "na";
    return theirs.value === c.setting.value ? "match" : "differs";
  }

  private differs(c: Column, master: Device): boolean {
    return this.others(master).some((d) => !this.ignored.has(d.id) && this.mark(d, c) === "differs");
  }

  private ignore(id: string, on: boolean) {
    const ignored = new Set(this.ignored);
    const rows = new Set(this.rows);
    if (on) {
      ignored.add(id);
      rows.delete(id);
    } else {
      ignored.delete(id);
    }
    this.ignored = ignored;
    this.rows = rows;
    this.defaults();
  }

  private sections(master: Device): Section[] {
    const local = new Set(this.fleet!.local);
    const out = new Map<string, Section>();
    for (const s of master.settings) {
      const key = keyOf(s);
      if (local.has(key)) continue;
      const column = { key, setting: s };
      if (!this.everything && !this.differs(column, master)) continue;
      const section = out.get(s.section) ?? { title: s.section, columns: [] };
      section.columns.push(column);
      out.set(s.section, section);
    }
    return [...out.values()];
  }

  private chosenColumns(sections: Section[]): string[] {
    return sections.flatMap((s) => s.columns.map((c) => c.key)).filter((k) => this.columns.has(k));
  }

  private shortTitle(s: Setting): string {
    return s.group && s.group !== s.section && /\d/.test(s.group) ? `${s.title} ${s.group.replace(/\D+/g, "")}` : s.title;
  }

  private fullTitle(s: Setting): string {
    return s.group && s.group !== s.section ? `${s.section} › ${s.group} › ${s.title}` : `${s.section} › ${s.title}`;
  }

  private choose(id: string) {
    this.master = id;
    this.results = new Map();
    this.rows = new Set();
    this.defaults();
  }

  private scopeTo(label: string) {
    this.scope = label;
    const shown = new Set(this.others(this.masterDevice()!).map((d) => d.id));
    this.rows = new Set([...this.rows].filter((id) => shown.has(id)));
  }

  private fold(title: string) {
    const next = new Set(this.folded);
    if (!next.delete(title)) next.add(title);
    this.folded = next;
  }

  private toggle(which: "columns" | "rows", key: string, on: boolean) {
    const next = new Set(this[which]);
    if (on) next.add(key);
    else next.delete(key);
    this[which] = next;
  }

  private group(s: Section, on: boolean) {
    const next = new Set(this.columns);
    for (const c of s.columns) {
      if (on) next.add(c.key);
      else next.delete(c.key);
    }
    this.columns = next;
  }

  private allRows(online: Device[], on: boolean) {
    this.rows = on ? new Set(online.map((d) => d.id)) : new Set();
  }

  private defaults() {
    const master = this.masterDevice();
    if (!master) return;
    const columns = master.settings
      .map((s) => ({ key: keyOf(s), setting: s }))
      .filter((c) => this.differs(c, master))
      .map((c) => c.key);
    this.columns = new Set(columns);
  }

  private async load() {
    try {
      this.fleet = await this.hass.callWS<Fleet>({ type: "echolocal/fleet" });
      this.failed = "";
      this.defaults();
    } catch (err) {
      this.failed = `Couldn't read the devices: ${(err as Error).message ?? err}`;
    }
  }

  private async setLocal(key: string, on: boolean) {
    const local = new Set(this.fleet!.local);
    if (on) local.add(key);
    else local.delete(key);
    const saved = await this.hass.callWS<{ local: string[] }>({
      type: "echolocal/fleet/local",
      local: [...local],
    });
    this.fleet = { ...this.fleet!, local: saved.local };
    const columns = new Set(this.columns);
    if (on) columns.delete(key);
    this.columns = columns;
  }

  private async sync(master: Device, sections: Section[]) {
    this.busy = true;
    this.said = "";
    try {
      const reply = await this.hass.callWS<{ results: Result[] }>({
        type: "echolocal/fleet/sync",
        primary: master.id,
        targets: [...this.rows],
        keys: this.chosenColumns(sections),
      });
      this.results = new Map(reply.results.map((r) => [r.id, r]));
      const kept = this.columns;
      this.fleet = await this.hass.callWS<Fleet>({ type: "echolocal/fleet" });
      this.columns = kept;
    } catch (err) {
      this.said = `Sync failed: ${(err as Error).message ?? err}`;
    } finally {
      this.busy = false;
    }
  }
}
