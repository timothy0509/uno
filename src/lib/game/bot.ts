import type { Card, Color, GameState } from "../../types/game";
import { canPlayCard, getDrawAmount } from "./deck";

export interface BotMove {
  cardId: string;
  selectedColor?: Color;
  targetPlayerId?: string;
}

export function chooseBotMove(gameState: GameState, botId: string): BotMove | null {
  const botPlayer = gameState.players.find((p) => p.id === botId);
  if (!botPlayer) return null;

  const topCard = gameState.discardPile[gameState.discardPile.length - 1];
  if (!topCard) return null;

  const playableCards = botPlayer.cards.filter((card) =>
    canPlayCard(card, topCard, gameState.currentColor, gameState.drawPenalty, botPlayer.cards),
  );

  if (playableCards.length === 0) {
    return null;
  }

  const bestCard = selectBestCard(gameState, botPlayer, playableCards);
  const move: BotMove = { cardId: bestCard.id };

  if (bestCard.type === "wild" && bestCard.value !== "WildColorRoulette") {
    move.selectedColor = chooseBestColor(botPlayer.cards);
  }

  if (bestCard.type === "numbered" && bestCard.value === "7") {
    move.targetPlayerId = chooseTargetPlayer(gameState, botId);
  }

  return move;
}

function selectBestCard(
  gameState: GameState,
  botPlayer: GameState["players"][number],
  playableCards: Card[],
): Card {
  if (gameState.drawPenalty > 0) {
    const stackingCards = playableCards.filter((c) => getDrawAmount(c) > 0);
    if (stackingCards.length > 0) {
      return stackingCards.reduce((best, current) =>
        getDrawAmount(current) > getDrawAmount(best) ? current : best,
      );
    }
    return playableCards[0]!;
  }

  const numberedCards = playableCards.filter((c) => c.type === "numbered");
  const actionCards = playableCards.filter(
    (c) => c.type === "action" && c.value !== "SkipEveryone" && c.value !== "DiscardAll",
  );
  const wildCards = playableCards.filter((c) => c.type === "wild" && c.value !== "WildColorRoulette");

  if (numberedCards.length > 0) {
    return numberedCards[0]!;
  }

  if (actionCards.length > 0) {
    const priorityOrder = ["Draw4", "Draw2", "Skip", "Reverse"] as const;
    for (const value of priorityOrder) {
      const found = actionCards.find((c) => c.type === "action" && c.value === value);
      if (found) return found;
    }
    return actionCards[0]!;
  }

  if (wildCards.length > 0) {
    const wildPriority = ["WildDraw10", "WildDraw6", "WildReverseDraw4"] as const;
    for (const value of wildPriority) {
      const found = wildCards.find((c) => c.type === "wild" && c.value === value);
      if (found) return found;
    }
    return wildCards[0]!;
  }

  return playableCards[0]!;
}

function chooseBestColor(cards: Card[]): Color {
  const colorCounts: Record<Color, number> = { red: 0, blue: 0, green: 0, yellow: 0 };

  for (const card of cards) {
    if (card.type !== "wild" && "color" in card) {
      colorCounts[card.color] = (colorCounts[card.color] || 0) + 1;
    }
  }

  let bestColor: Color = "red";
  let maxCount = 0;

  for (const [color, count] of Object.entries(colorCounts)) {
    if (count > maxCount) {
      maxCount = count;
      bestColor = color as Color;
    }
  }

  return bestColor;
}

function chooseTargetPlayer(gameState: GameState, botId: string): string | undefined {
  const targets = gameState.players.filter(
    (p) => p.id !== botId && !p.isKnockedOut && !p.isBot,
  );

  if (targets.length === 0) {
    const allTargets = gameState.players.filter(
      (p) => p.id !== botId && !p.isKnockedOut,
    );
    allTargets.sort((a, b) => a.cards.length - b.cards.length);
    return allTargets[0]?.id;
  }

  targets.sort((a, b) => a.cards.length - b.cards.length);
  return targets[0]?.id;
}
