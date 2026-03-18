import type {
  Card,
  NumberedCard,
  ActionCard,
  WildCard,
  Color,
  NumberValue,
  ActionValue,
} from "~/types/game";
import { CARD_COLORS } from "~/types/game";

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

function createNumberedCards(): NumberedCard[] {
  const cards: NumberedCard[] = [];
  for (const color of CARD_COLORS) {
    cards.push({
      id: generateId(),
      type: "numbered",
      color,
      value: "0" as NumberValue,
    });
    for (let i = 1; i <= 9; i++) {
      for (let j = 0; j < 2; j++) {
        cards.push({
          id: generateId(),
          type: "numbered",
          color,
          value: String(i) as NumberValue,
        });
      }
    }
  }
  return cards;
}

function createActionCards(): ActionCard[] {
  const cards: ActionCard[] = [];
  const actionTypes: ActionValue[] = ["Draw2", "Skip", "Reverse"];
  for (const color of CARD_COLORS) {
    for (const action of actionTypes) {
      for (let i = 0; i < 2; i++) {
        cards.push({
          id: generateId(),
          type: "action",
          color,
          value: action,
        });
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    cards.push({
      id: generateId(),
      type: "action",
      color: CARD_COLORS[i % 4]!,
      value: "SkipEveryone",
    });
  }
  for (let i = 0; i < 4; i++) {
    cards.push({
      id: generateId(),
      type: "action",
      color: CARD_COLORS[i % 4]!,
      value: "Draw4",
    });
  }
  for (let i = 0; i < 4; i++) {
    cards.push({
      id: generateId(),
      type: "action",
      color: CARD_COLORS[i % 4]!,
      value: "DiscardAll",
    });
  }
  return cards;
}

function createWildCards(): WildCard[] {
  const cards: WildCard[] = [];
  for (let i = 0; i < 4; i++) {
    cards.push({
      id: generateId(),
      type: "wild",
      value: "WildDraw6",
    });
  }
  for (let i = 0; i < 4; i++) {
    cards.push({
      id: generateId(),
      type: "wild",
      value: "WildDraw10",
    });
  }
  for (let i = 0; i < 4; i++) {
    cards.push({
      id: generateId(),
      type: "wild",
      value: "WildReverseDraw4",
    });
  }
  for (let i = 0; i < 4; i++) {
    cards.push({
      id: generateId(),
      type: "wild",
      value: "WildColorRoulette",
    });
  }
  return cards;
}

export function createDeck(): Card[] {
  const deck: Card[] = [
    ...createNumberedCards(),
    ...createActionCards(),
    ...createWildCards(),
  ];
  return deck;
}

export function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck];
  let i = shuffled.length;
  while (i > 0) {
    const j = Math.floor(Math.random() * i);
    i--;
    const temp = shuffled[i];
    shuffled[i] = shuffled[j]!;
    shuffled[j] = temp!;
  }
  return shuffled;
}

export function dealCards(
  deck: Card[],
  playerCount: number,
  cardsPerPlayer = 7,
): { hands: Card[][]; remainingDeck: Card[] } {
  const shuffled = shuffleDeck(deck);
  const hands: Card[][] = [];

  for (let i = 0; i < playerCount; i++) {
    hands.push([]);
  }
  for (let i = 0; i < cardsPerPlayer; i++) {
    for (let p = 0; p < playerCount; p++) {
      if (shuffled.length > 0) {
        hands[p]?.push(shuffled.pop()!);
      }
    }
  }
  return { hands, remainingDeck: shuffled };
}

export function drawCards(
  deck: Card[],
  count: number,
): { drawn: Card[]; remainingDeck: Card[] } {
  const drawn = deck.slice(0, count);
  const remainingDeck = deck.slice(count);
  return { drawn, remainingDeck };
}

export function findPlayableCard(
  hand: Card[],
  topCard: Card,
  currentColor: Color | null,
  drawPenalty: number,
): Card | undefined {
  for (const card of hand) {
    if (canPlayCard(card, topCard, currentColor, drawPenalty, hand)) {
      return card;
    }
  }
  return undefined;
}

export function canPlayCard(
  card: Card,
  topCard: Card,
  currentColor: Color | null,
  drawPenalty: number,
  hand: Card[],
): boolean {
  if (drawPenalty > 0) {
    return canStackCard(card, topCard, drawPenalty, hand);
  }
  return canMatchCard(card, topCard, currentColor);
}

function canMatchCard(
  card: Card,
  topCard: Card,
  currentColor: Color | null,
): boolean {
  if (card.type === "wild") {
    return true;
  }
  const effectiveColor =
    currentColor ?? (topCard.type !== "wild" ? topCard.color : null);
  if (effectiveColor && "color" in card && card.color === effectiveColor) {
    return true;
  }
  if (
    card.type === "numbered" &&
    topCard.type === "numbered" &&
    card.value === topCard.value
  ) {
    return true;
  }
  if (
    card.type === "action" &&
    topCard.type === "action" &&
    card.value === topCard.value
  ) {
    return true;
  }
  return false;
}

function canStackCard(
  card: Card,
  _topCard: Card,
  drawPenalty: number,
  _hand: Card[],
): boolean {
  const drawCards = [
    "Draw2",
    "Draw4",
    "WildDraw6",
    "WildDraw10",
    "WildReverseDraw4",
  ] as const;

  if (card.type === "wild") {
    if (card.value === "WildColorRoulette") return false;
    const cardDraw = getDrawAmount(card);
    return cardDraw >= drawPenalty;
  }
  if (
    card.type === "action" &&
    drawCards.includes(card.value as (typeof drawCards)[number])
  ) {
    const cardDraw = getDrawAmount(card);
    return cardDraw >= drawPenalty;
  }
  return false;
}

export function getDrawAmount(card: Card): number {
  if (card.type === "action") {
    switch (card.value) {
      case "Draw2":
        return 2;
      case "Draw4":
        return 4;
      default:
        return 0;
    }
  }
  if (card.type === "wild") {
    switch (card.value) {
      case "WildDraw6":
        return 6;
      case "WildDraw10":
        return 10;
      case "WildReverseDraw4":
        return 4;
      default:
        return 0;
    }
  }
  return 0;
}

export function requiresColorSelection(card: Card): boolean {
  return card.type === "wild";
}

export function requiresTargetSelection(card: Card): boolean {
  if (card.type === "action" && card.value === "DiscardAll") {
    return false;
  }
  return card.type === "numbered" && card.value === "7";
}

export function getCardColor(card: Card): Color | undefined {
  if (card.type === "wild") {
    return card.color;
  }
  return card.color;
}
