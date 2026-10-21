import { LitElement, html, nothing, unsafeCSS } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";

import type { HomeAssistant } from "./types";

import styles from "./call.css";

type Phase = "choose" | "calling" | "ringing" | "talking" | "ended";

type Signal =
  | { type: "ringing" }
  | { type: "answer"; sdp: string }
  | { type: "end"; reason?: string };

const GATHER_MOST = 3000;

const ENDED: Record<string, string> = {
  hangup: "Call ended",
  declined: "Declined",
  busy: "Busy",
  unanswered: "No answer",
  refused: "Not taking calls",
  unavailable: "Not taking calls",
  failed: "Call failed",
  dropped: "Connection lost",
};

function gathered(pc: RTCPeerConnection): Promise<void> {
  if (pc.iceGatheringState === "complete") return Promise.resolve();
  return new Promise((done) => {
    const timer = window.setTimeout(done, GATHER_MOST);
    pc.addEventListener("icegatheringstatechange", () => {
      if (pc.iceGatheringState === "complete") {
        clearTimeout(timer);
        done();
      }
    });
  });
}

function preferH264(transceiver: RTCRtpTransceiver) {
  const codecs = RTCRtpReceiver.getCapabilities("video")?.codecs ?? [];
  const h264 = codecs.filter((c) => c.mimeType === "video/H264");
  if (h264.length && transceiver.setCodecPreferences) {
    transceiver.setCodecPreferences([...h264, ...codecs.filter((c) => c.mimeType !== "video/H264")]);
  }
}

@customElement("echolocal-call")
export class EchoLocalCall extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ attribute: false }) hass!: HomeAssistant;
  @property() deviceId = "";
  @property() name = "";
  @property({ type: Boolean }) camera = false;

  @state() private phase: Phase = "choose";
  @state() private reason = "";
  @state() private video = false;
  @state() private muted = false;
  @state() private blind = false;
  @state() private full = false;

  @query("#far") private far?: HTMLVideoElement;
  @query("#near") private near?: HTMLVideoElement;
  @query(".sheet") private sheet?: HTMLElement;

  private pc?: RTCPeerConnection;
  private local?: MediaStream;
  private remote?: MediaStream;
  private unsubscribe?: () => void;

  private readonly resized = () => {
    this.full = !!this.sheet && this.shadowRoot?.fullscreenElement === this.sheet;
  };

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("fullscreenchange", this.resized);
  }

  disconnectedCallback() {
    document.removeEventListener("fullscreenchange", this.resized);
    if (this.full) void document.exitFullscreen();
    this.hangUp();
    super.disconnectedCallback();
  }

  private async start(video: boolean) {
    this.video = video;
    this.phase = "calling";
    this.reason = "";
    try {
      this.local = await navigator.mediaDevices.getUserMedia({ audio: true, video });
      const pc = new RTCPeerConnection();
      this.pc = pc;
      this.remote = new MediaStream();
      pc.ontrack = (e) => {
        this.remote?.addTrack(e.track);
        this.attach();
      };
      pc.onconnectionstatechange = () => {
        if (pc.connectionState === "failed") this.ended("dropped");
      };
      for (const track of this.local.getTracks()) pc.addTrack(track, this.local);
      const sending = pc.getTransceivers().find((t) => t.sender.track?.kind === "video");
      if (sending) preferH264(sending);
      if (!video && this.camera) pc.addTransceiver("video", { direction: "recvonly" });

      await pc.setLocalDescription(await pc.createOffer());
      await gathered(pc);
      if (this.phase !== "calling" || !this.hass.connection) return;

      const size = this.local.getVideoTracks()[0]?.getSettings();

      this.unsubscribe = await this.hass.connection.subscribeMessage<Signal>(
        (signal) => void this.heard(signal),
        {
          type: "echolocal/call",
          device_id: this.deviceId,
          sdp: pc.localDescription?.sdp ?? "",
          video,
          width: size?.width ?? 0,
          height: size?.height ?? 0,
        }
      );
      this.attach();
    } catch (err) {
      console.warn("echolocal call failed", err);
      this.ended("failed");
    }
  }

  private async heard(signal: Signal) {
    switch (signal.type) {
      case "ringing":
        this.phase = "ringing";
        return;
      case "answer":
        try {
          await this.pc?.setRemoteDescription({ type: "answer", sdp: signal.sdp });
          this.phase = "talking";
          this.attach();
        } catch (err) {
          console.warn("echolocal call answer rejected", err);
          this.ended("failed");
        }
        return;
      case "end":
        this.ended(signal.reason || "hangup");
    }
  }

  private attach() {
    void this.updateComplete.then(() => {
      if (this.far && this.remote && this.far.srcObject !== this.remote) {
        this.far.srcObject = this.remote;
      }
      if (this.near && this.local && this.near.srcObject !== this.local) {
        this.near.srcObject = this.local;
      }
    });
  }

  private release() {
    this.pc?.close();
    this.pc = undefined;
    for (const track of this.local?.getTracks() ?? []) track.stop();
    this.local = undefined;
    this.remote = undefined;
  }

  private ended(reason: string) {
    this.unsubscribe = undefined;
    this.release();
    this.reason = reason;
    this.phase = "ended";
  }

  private hangUp() {
    const stop = this.unsubscribe;
    this.unsubscribe = undefined;
    stop?.();
    this.release();
  }

  private toggleMute() {
    this.muted = !this.muted;
    for (const track of this.local?.getAudioTracks() ?? []) track.enabled = !this.muted;
  }

  private toggleCamera() {
    this.blind = !this.blind;
    for (const track of this.local?.getVideoTracks() ?? []) track.enabled = !this.blind;
  }

  private toggleFull() {
    if (this.full) {
      void document.exitFullscreen();
      return;
    }
    this.sheet?.requestFullscreen().catch((err) => console.warn("echolocal fullscreen refused", err));
  }

  private close() {
    if (this.full) void document.exitFullscreen();
    this.hangUp();
    this.dispatchEvent(new CustomEvent("closed", { bubbles: true, composed: true }));
  }

  private status(): string {
    switch (this.phase) {
      case "calling":
        return "Calling…";
      case "ringing":
        return "Ringing…";
      case "talking":
        return this.video ? "Video call" : "On a call";
      case "ended":
        return ENDED[this.reason] ?? "Call ended";
    }
    return "";
  }

  render() {
    const live = this.phase === "calling" || this.phase === "ringing" || this.phase === "talking";

    return html`
      <ha-dialog open hideActions width=${this.video ? "large" : "medium"} @closed=${this.close}>
        <div class="sheet">
          <div class="head">
            <div class="crest"><ha-icon icon="mdi:phone"></ha-icon></div>
            <div class="titles">
              <div class="title">${this.name}</div>
              <div class="subtitle">${this.status()}</div>
            </div>
          </div>

          ${live
            ? html`<div
                class="stage"
                data-video=${String(this.camera || this.video)}
                @dblclick=${this.video ? this.toggleFull : nothing}
              >
                <video id="far" autoplay playsinline></video>
                ${this.video ? html`<video id="near" autoplay playsinline muted></video>` : nothing}
              </div>`
            : nothing}

          <div class="controls">
            ${this.phase === "choose" || this.phase === "ended"
              ? html`
                  <button class="round go" @click=${() => this.start(false)}>
                    <ha-icon icon="mdi:phone"></ha-icon><span>Call</span>
                  </button>
                  ${this.camera
                    ? html`<button class="round go" @click=${() => this.start(true)}>
                        <ha-icon icon="mdi:video"></ha-icon><span>Video</span>
                      </button>`
                    : nothing}
                `
              : html`
                  <button class="round" data-on=${String(this.muted)} @click=${this.toggleMute}>
                    <ha-icon icon=${this.muted ? "mdi:microphone-off" : "mdi:microphone"}></ha-icon>
                  </button>
                  ${this.video
                    ? html`<button
                        class="round"
                        data-on=${String(this.blind)}
                        @click=${this.toggleCamera}
                      >
                        <ha-icon icon=${this.blind ? "mdi:video-off" : "mdi:video"}></ha-icon>
                      </button>`
                    : nothing}
                  ${this.video
                    ? html`<button class="round" @click=${this.toggleFull}>
                        <ha-icon icon=${this.full ? "mdi:fullscreen-exit" : "mdi:fullscreen"}></ha-icon>
                      </button>`
                    : nothing}
                  <button class="round stop" @click=${this.close}>
                    <ha-icon icon="mdi:phone-hangup"></ha-icon>
                  </button>
                `}
          </div>
        </div>
      </ha-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "echolocal-call": EchoLocalCall;
  }
}
