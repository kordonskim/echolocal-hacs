import amber from "./devices/amber.svg";
import blueberry from "./devices/blueberry.svg";
import ivy from "./devices/ivy.svg";
import opal from "./devices/opal.svg";
import penghu from "./devices/penghu.svg";

export type Lens = "round" | "square" | "wide";

export type Look =
  | { shape: "dot" }
  | { shape: "show"; lens: Lens; width: number }
  | { shape: "panel"; picture: string; width: number };

const LOOKS: Record<string, Look> = {
  athena: { shape: "show", lens: "wide", width: 360 },
  biscuit: { shape: "dot" },
  checkers: { shape: "show", lens: "round", width: 300 },
  cronos: { shape: "show", lens: "square", width: 300 },
  crown: { shape: "show", lens: "round", width: 360 },
  amber: { shape: "panel", picture: amber, width: 340 },
  blueberry: { shape: "panel", picture: blueberry, width: 380 },
  ivy: { shape: "panel", picture: ivy, width: 320 },
  opal: { shape: "panel", picture: opal, width: 340 },
  penghu: { shape: "panel", picture: penghu, width: 380 },
};

export function lookOf(board: string): Look {
  return LOOKS[board] ?? LOOKS.biscuit;
}

export function isBoard(name?: string | null): name is string {
  return !!name && name in LOOKS;
}
