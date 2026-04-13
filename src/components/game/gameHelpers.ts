import type { Card, Color, PlayerState } from "~/types/game";

export type ToastMessage = {
  id: number;
  text: string;
  type: "info" | "success" | "warning" | "danger";
};

export function getCardColor(card: Card): string {
  if (card.type === "wild") return "card-wild";
  switch (card.color) {
    case "red":
      return "card-red";
    case "blue":
      return "card-blue";
    case "green":
      return "card-green";
    case "yellow":
      return "card-yellow";
    default:
      return "card-wild";
  }
}

export function getCardValue(card: Card): string {
  if (card.type === "numbered") return card.value;
  if (card.type === "action") {
    if (card.type === "action") {
      const v = card.value;
      switch (v) {
        case "Draw2":
          return "+2";
        case "Draw4":
          return "+4";
        case "Skip":
          return "\u2298";
        case "SkipEveryone":
          return "\u2298\u2298";
        case "Reverse":
          return "\u27F2";
        case "DiscardAll":
          return "DISC";
      }
    }
  }
  if (card.type === "wild") {
    switch (card.value) {
      case "WildDraw6":
        return "+6";
      case "WildDraw10":
        return "+10";
      case "WildReverseDraw4":
        return "\u27F2+4";
      case "WildColorRoulette":
        return "?";
      default:
        return "W";
    }
  }
  return "?";
}

export function getCardCornerLabel(card: Card): string {
  if (card.type === "wild") return "W";
  return card.color?.[0]?.toUpperCase() ?? "?";
}

export function getCardCountBadge(
  count: number,
  isKnockedOut: boolean,
): { text: string; className: string } {
  if (isKnockedOut) return { text: "OUT", className: "badge-out" };
  if (count === 1) return { text: "UNO!", className: "badge-uno" };
  if (count <= 4) return { text: `${count}`, className: "badge-low" };
  if (count >= 20) return { text: `${count}`, className: "badge-danger" };
  return { text: `${count}`, className: "badge-neutral" };
}

export function formatActionText(
  action: { type: string; actorUserId: string; payload?: unknown },
  players: PlayerState[],
  currentUserId: string | null,
): string {
  const actor = players.find((p) => p.id === action.actorUserId);
  const name = actor?.id === currentUserId ? "You" : (actor?.name ?? "Someone");

  switch (action.type) {
    case "play":
      return `${name} played a card`;
    case "draw":
      return `${name} drew cards`;
    case "call_uno":
      return `${name} called UNO!`;
    case "knockout":
      return `${name} was knocked out!`;
    case "win":
      return `${name} won the game!`;
    case "roulette":
      return `${name} chose a color for roulette`;
    default:
      return `${name} did something`;
  }
}

export function getActionIcon(type: string): string {
  switch (type) {
    case "play":
      return "\ud83c\udccf";
    case "draw":
      return "\ud83d\udcc4";
    case "call_uno":
      return "\ud83d\udce2";
    case "knockout":
      return "\u26a0\ufe0f";
    case "win":
      return "\ud83c\udfc6";
    case "roulette":
      return "\ud83c\udfb2";
    default:
      return "\u2022";
  }
}

export const HELP_CARDS = [
  {
    value: "+2",
    desc: "Next player draws 2 \u2014 stackable",
    color: "card-red",
  },
  {
    value: "+4",
    desc: "Next player draws 4 \u2014 stackable, colored",
    color: "card-blue",
  },
  { value: "\u2298", desc: "Skip next player", color: "card-green" },
  {
    value: "\u2298\u2298",
    desc: "Skip everyone \u2014 you go again",
    color: "card-yellow",
  },
  { value: "\u27F2", desc: "Reverse play direction", color: "card-red" },
  {
    value: "DISC",
    desc: "Discard all cards of this color from your hand",
    color: "card-blue",
  },
  {
    value: "+6",
    desc: "Wild \u2014 next player draws 6, stackable",
    color: "card-wild",
  },
  {
    value: "+10",
    desc: "Wild \u2014 next player draws 10, stackable",
    color: "card-wild",
  },
  {
    value: "\u27F2+4",
    desc: "Wild \u2014 reverse + next player draws 4",
    color: "card-wild",
  },
  {
    value: "?",
    desc: "Wild \u2014 Color Roulette: next player draws until chosen color",
    color: "card-wild",
  },
  { value: "7", desc: "Swap hands with a chosen player", color: "card-green" },
  {
    value: "0",
    desc: "All players pass hands in play direction",
    color: "card-yellow",
  },
  { value: "25+", desc: "Mercy Rule: 25+ cards = knockout", color: "card-red" },
];

export const CARD_COLORS: Color[] = ["red", "blue", "green", "yellow"];
