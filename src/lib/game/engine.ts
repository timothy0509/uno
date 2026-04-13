import type {
  GameState,
  PlayerState,
  Card,
  Color,
  PlayCardResult,
} from "../../types/game";
import { createDeck, dealCards, getDrawAmount, canPlayCard } from "./deck";

export function initializeGame(
  playerIds: string[],
  playerNames: string[],
): GameState {
  const deck = createDeck();
  const { hands, remainingDeck } = dealCards(deck, playerIds.length);
  const players: PlayerState[] = playerIds.map((id, index) => ({
    id: id,
    userId: id,
    name: playerNames[index] ?? `Player ${index + 1}`,
    position: index,
    cards: hands[index] ?? [],
    isKnockedOut: false,
    calledUno: false,
  }));
  const discardPile: Card[] = [];
  const startDeck = remainingDeck;
  while (startDeck.length > 0) {
    const card = startDeck.pop()!;
    if (card.type === "numbered") {
      discardPile.push(card);
      break;
    } else {
      startDeck.unshift(card);
    }
  }
  if (discardPile.length === 0) {
    const card = startDeck.pop()!;
    discardPile.push(card);
  }
  const topCard = discardPile[discardPile.length - 1];
  if (!topCard) {
    throw new Error("Failed to initialize discard pile");
  }
  const currentColor = topCard.type !== "wild" ? topCard.color : null;
  const gameState: GameState = {
    id: crypto.randomUUID(),
    status: "PLAYING",
    deck: startDeck,
    knockedOutCards: [],
    discardPile,
    currentPlayerIndex: 0,
    direction: 1,
    players,
    drawPenalty: 0,
    drawPenaltySetBy: null,
    pendingRoulette: null,
    currentColor,
    lastPlayedCard: null,
    lastPlayedBy: null,
    winner: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return gameState;
}

export function playCard(
  gameState: GameState,
  playerId: string,
  cardId: string,
  selectedColor?: Color,
  targetPlayerId?: string,
): PlayCardResult {
  const playerIndex = gameState.players.findIndex((p) => p.id === playerId);
  if (playerIndex === -1) {
    return { success: false, error: "Player not found" };
  }
  if (playerIndex !== gameState.currentPlayerIndex) {
    return { success: false, error: "Not your turn" };
  }
  if (gameState.pendingRoulette) {
    return { success: false, error: "Waiting for roulette color selection" };
  }
  const player = gameState.players[playerIndex];
  if (!player) {
    return { success: false, error: "Player not found" };
  }
  const cardIndex = player.cards.findIndex((c) => c.id === cardId);
  if (cardIndex === -1) {
    return { success: false, error: "Card not in hand" };
  }
  const card = player.cards[cardIndex];
  if (!card) {
    return { success: false, error: "Card not found" };
  }
  const topCard = gameState.discardPile[gameState.discardPile.length - 1];
  if (!topCard) {
    return { success: false, error: "No card on discard pile" };
  }
  if (
    !canPlayCard(
      card,
      topCard,
      gameState.currentColor,
      gameState.drawPenalty,
      player.cards,
    )
  ) {
    return { success: false, error: "Cannot play this card" };
  }
  if (
    gameState.drawPenalty > 0 &&
    gameState.drawPenaltySetBy === playerId &&
    getDrawAmount(card) > 0
  ) {
    return {
      success: false,
      error: "Cannot stack on a penalty you created",
    };
  }
  if (
    card.type === "wild" &&
    card.value !== "WildColorRoulette" &&
    !selectedColor
  ) {
    return {
      success: false,
      error: "Color selection required",
      requiresColorSelect: true,
    };
  }
  if (card.type === "numbered" && card.value === "7" && !targetPlayerId) {
    const validTargets = gameState.players
      .filter((p) => p.id !== playerId && !p.isKnockedOut)
      .map((p) => p.id);
    return {
      success: false,
      error: "Target player required for 7 card",
      requiresTargetSelect: true,
      validTargets,
    };
  }
  const newState = { ...gameState };
  newState.players = gameState.players.map((p) => ({
    ...p,
    cards: [...p.cards],
  }));
  newState.deck = [...gameState.deck];
  newState.knockedOutCards = [...gameState.knockedOutCards];
  newState.discardPile = [...gameState.discardPile];
  const currentPlayer = newState.players[playerIndex];
  if (!currentPlayer) {
    return { success: false, error: "Current player not found" };
  }
  currentPlayer.cards.splice(cardIndex, 1);
  let playedCard = card;
  if (card.type === "wild" && selectedColor) {
    playedCard = { ...card, color: selectedColor };
  }
  newState.discardPile.push(playedCard);
  newState.lastPlayedCard = playedCard;
  if (playedCard.type !== "wild") {
    newState.currentColor = playedCard.color;
  } else if (selectedColor) {
    newState.currentColor = selectedColor;
  }
  if (gameState.drawPenalty > 0) {
    const cardDraw = getDrawAmount(card);
    newState.drawPenalty = gameState.drawPenalty + cardDraw;
  } else {
    newState.drawPenalty = getDrawAmount(card);
  }
  newState.drawPenaltySetBy = playerId;
  if (currentPlayer.cards.length === 0) {
    newState.status = "FINISHED";
    newState.winner = playerId;
    return { success: true, gameState: newState };
  }
  normalizeUnoFlags(newState);
  const skipNextPlayer = applyCardEffect(newState, playerIndex, targetPlayerId);
  if (!skipNextPlayer) {
    advanceTurn(newState);
  }
  checkMercyRule(newState);
  newState.updatedAt = new Date();
  return { success: true, gameState: newState };
}

function applyCardEffect(
  state: GameState,
  playerIndex: number,
  targetPlayerId?: string,
): boolean {
  const lastCard = state.discardPile[state.discardPile.length - 1];
  if (!lastCard) return false;
  if (lastCard.type === "action") {
    switch (lastCard.value) {
      case "Skip":
        advanceTurn(state);
        return true;
      case "SkipEveryone":
        return true;
      case "Reverse":
        state.direction = state.direction === 1 ? -1 : 1;
        if (state.players.length === 2) {
          return true;
        }
        return false;
      case "Draw2":
      case "Draw4":
        return false;
      case "DiscardAll":
        const currentPlayer = state.players[playerIndex];
        if (currentPlayer && lastCard.type === "action") {
          const discardColor = lastCard.color;
          const cardsToDiscard = currentPlayer.cards.filter(
            (c) => c.type !== "wild" && c.color === discardColor,
          );
          currentPlayer.cards = currentPlayer.cards.filter(
            (c) => c.type === "wild" || c.color !== discardColor,
          );
          const discardAllCard = state.discardPile.pop();
          state.discardPile.push(...cardsToDiscard);
          if (discardAllCard) {
            state.discardPile.push(discardAllCard);
          }
        }
        return false;
    }
  }
  if (lastCard.type === "wild") {
    switch (lastCard.value) {
      case "WildDraw6":
      case "WildDraw10":
        return false;
      case "WildReverseDraw4":
        state.direction = state.direction === 1 ? -1 : 1;
        return false;
      case "WildColorRoulette":
        const nextPlayerIndex = getNextPlayerIndex(state);
        const nextPlayer = state.players[nextPlayerIndex];
        if (nextPlayer) {
          state.pendingRoulette = { chooserPlayerId: nextPlayer.id };
        }
        return false;
    }
  }
  if (lastCard.type === "numbered") {
    if (lastCard.value === "7" && targetPlayerId) {
      const targetIndex = state.players.findIndex(
        (p) => p.id === targetPlayerId,
      );
      if (targetIndex !== -1 && targetIndex !== playerIndex) {
        const currentPlayer = state.players[playerIndex];
        const targetPlayer = state.players[targetIndex];
        if (currentPlayer && targetPlayer) {
          const tempCards = currentPlayer.cards;
          currentPlayer.cards = targetPlayer.cards;
          targetPlayer.cards = tempCards;
        }
      }
      return false;
    }
    if (lastCard.value === "0") {
      const activePlayers = state.players.filter((p) => !p.isKnockedOut);
      const hands = activePlayers.map((p) => [...p.cards]);
      for (let i = 0; i < activePlayers.length; i++) {
        const nextIndex =
          (i + state.direction + activePlayers.length) % activePlayers.length;
        const player = activePlayers[i];
        const nextPlayer = activePlayers[nextIndex];
        if (player && nextPlayer) {
          const nextHand = hands[nextIndex];
          if (nextHand) {
            player.cards = nextHand;
          }
        }
      }
      return false;
    }
  }
  return false;
}

function advanceTurn(state: GameState): void {
  let nextIndex = state.currentPlayerIndex;
  let attempts = 0;
  do {
    nextIndex =
      (nextIndex + state.direction + state.players.length) %
      state.players.length;
    attempts++;
  } while (
    state.players[nextIndex]?.isKnockedOut &&
    attempts < state.players.length
  );
  state.currentPlayerIndex = nextIndex;
}

export function drawCardsFromDeck(
  gameState: GameState,
  playerId: string,
  count?: number,
): { gameState: GameState; drawnCards: Card[] } | { error: string } {
  const playerIndex = gameState.players.findIndex((p) => p.id === playerId);
  if (playerIndex === -1) {
    return { error: "Player not found" };
  }
  if (playerIndex !== gameState.currentPlayerIndex) {
    return { error: "Not your turn" };
  }
  if (!gameState.players[playerIndex]) {
    return { error: "Player not found" };
  }
  const newState = { ...gameState };
  newState.players = gameState.players.map((p) => ({
    ...p,
    cards: [...p.cards],
  }));
  newState.deck = [...gameState.deck];
  newState.knockedOutCards = [...gameState.knockedOutCards];
  newState.discardPile = [...gameState.discardPile];
  if (gameState.pendingRoulette) {
    return { error: "Waiting for roulette color selection" };
  }
  let drawCount = count ?? 1;
  if (gameState.drawPenalty > 0) {
    drawCount = gameState.drawPenalty;
    newState.drawPenalty = 0;
    newState.drawPenaltySetBy = null;
  }
  const drawn: Card[] = [];
  if (gameState.drawPenalty > 0) {
    for (let i = 0; i < drawCount; i++) {
      const nextCard = drawOneCard(newState);
      if (!nextCard) break;
      drawn.push(nextCard);
    }
  } else {
    const nextCard = drawOneCard(newState);
    if (nextCard) {
      drawn.push(nextCard);
    }
  }
  const currentPlayer = newState.players[playerIndex];
  if (currentPlayer) {
    currentPlayer.cards.push(...drawn);
  }
  advanceTurn(newState);
  normalizeUnoFlags(newState);
  checkMercyRule(newState);
  newState.updatedAt = new Date();
  return { gameState: newState, drawnCards: drawn };
}

export function chooseRouletteColor(
  gameState: GameState,
  playerId: string,
  selectedColor: Color,
): { gameState: GameState; drawnCards: Card[] } | { error: string } {
  const pending = gameState.pendingRoulette;
  if (!pending) {
    return { error: "No roulette selection pending" };
  }
  if (pending.chooserPlayerId !== playerId) {
    return { error: "Only the chosen player can select roulette color" };
  }
  const playerIndex = gameState.players.findIndex((p) => p.id === playerId);
  if (playerIndex === -1) {
    return { error: "Player not found" };
  }
  if (playerIndex !== gameState.currentPlayerIndex) {
    return { error: "Not your turn" };
  }

  const newState = { ...gameState };
  newState.players = gameState.players.map((p) => ({
    ...p,
    cards: [...p.cards],
  }));
  newState.deck = [...gameState.deck];
  newState.knockedOutCards = [...gameState.knockedOutCards];
  newState.discardPile = [...gameState.discardPile];
  newState.pendingRoulette = null;
  newState.currentColor = selectedColor;

  const currentPlayer = newState.players[playerIndex];
  if (!currentPlayer) {
    return { error: "Player not found" };
  }

  const drawnCards: Card[] = [];
  while (true) {
    const card = drawOneCard(newState);
    if (!card) break;
    drawnCards.push(card);
    if (card.type !== "wild" && card.color === selectedColor) {
      break;
    }
  }

  currentPlayer.cards.push(...drawnCards);
  normalizeUnoFlags(newState);
  checkMercyRule(newState);
  advanceTurn(newState);
  newState.updatedAt = new Date();

  return { gameState: newState, drawnCards };
}

function drawOneCard(state: GameState): Card | null {
  if (state.deck.length === 0) {
    refillDeckFromDiscard(state);
  }
  if (state.deck.length === 0) {
    return null;
  }
  const card = state.deck.shift();
  return card ?? null;
}

function refillDeckFromDiscard(state: GameState): void {
  const top = state.discardPile.pop();
  const refillPool = [...state.discardPile, ...state.knockedOutCards];
  state.knockedOutCards = [];
  state.deck = shuffleDeck(refillPool);
  state.discardPile = top ? [top] : [];
}

function shuffleDeck(deck: Card[]): Card[] {
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

function checkMercyRule(state: GameState): void {
  for (const player of state.players) {
    if (player.cards.length >= 25 && !player.isKnockedOut) {
      player.isKnockedOut = true;
      state.knockedOutCards.push(...player.cards);
      player.cards = [];
      player.calledUno = false;
    }
  }
  const activePlayers = state.players.filter((p) => !p.isKnockedOut);
  if (activePlayers.length === 1) {
    state.status = "FINISHED";
    state.winner = activePlayers[0]?.id ?? null;
  }
}

export function callUno(gameState: GameState, playerId: string): GameState {
  const playerIndex = gameState.players.findIndex((p) => p.id === playerId);
  if (playerIndex === -1) return gameState;
  const newState = { ...gameState };
  newState.players = gameState.players.map((p) => ({ ...p }));
  const player = newState.players[playerIndex];
  if (player?.cards.length === 1) {
    player.calledUno = true;
  }
  normalizeUnoFlags(newState);
  return newState;
}

function normalizeUnoFlags(state: GameState): void {
  for (const player of state.players) {
    if (player.cards.length !== 1) {
      player.calledUno = false;
    }
  }
}

export function getNextPlayerIndex(state: GameState): number {
  let nextIndex = state.currentPlayerIndex;
  do {
    nextIndex =
      (nextIndex + state.direction + state.players.length) %
      state.players.length;
  } while (state.players[nextIndex]?.isKnockedOut);
  return nextIndex;
}
