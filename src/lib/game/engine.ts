import type {
  Card,
  Color,
  GameState,
  PlayCardResult,
  PlayerState,
} from "../../types/game";
import {
  canPlayCard,
  createDeck,
  dealCards,
  getDrawAmount,
  shuffleDeck,
} from "./deck";

type CardPlayDirective = {
  advanceBy: number;
  keepTurn: boolean;
};

function cloneState(gameState: GameState): GameState {
  return {
    ...gameState,
    players: gameState.players.map((player) => ({
      ...player,
      cards: [...player.cards],
    })),
    deck: [...gameState.deck],
    discardPile: [...gameState.discardPile],
    setAsidePile: [...gameState.setAsidePile],
    pendingColorRoulette: gameState.pendingColorRoulette
      ? { ...gameState.pendingColorRoulette }
      : null,
  };
}

function activePlayerCount(state: GameState): number {
  return state.players.filter((player) => !player.isKnockedOut).length;
}

function getNextActivePlayerIndex(state: GameState, fromIndex: number): number {
  let nextIndex = fromIndex;
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
  return nextIndex;
}

function advanceTurnBy(state: GameState, count: number): void {
  for (let i = 0; i < count; i++) {
    advanceTurn(state);
  }
}

function recycleDeck(state: GameState): void {
  const topCard = state.discardPile[state.discardPile.length - 1] ?? null;
  const recyclableCards = [
    ...state.discardPile.slice(0, -1),
    ...state.setAsidePile,
  ];
  if (recyclableCards.length === 0) {
    return;
  }
  state.deck = shuffleDeck(recyclableCards);
  state.discardPile = topCard ? [topCard] : [];
  state.setAsidePile = [];
}

function drawSingleCard(state: GameState): Card | null {
  if (state.deck.length === 0) {
    recycleDeck(state);
  }
  const card = state.deck.shift();
  return card ?? null;
}

export function initializeGame(
  playerIds: string[],
  playerNames: string[],
): GameState {
  const deck = createDeck();
  const { hands, remainingDeck } = dealCards(deck, playerIds.length);
  const players: PlayerState[] = playerIds.map((id, index) => ({
    id,
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
    const card = startDeck.pop();
    if (!card) {
      break;
    }
    if (card.type === "numbered") {
      discardPile.push(card);
      break;
    }
    startDeck.unshift(card);
  }

  if (discardPile.length === 0) {
    const card = startDeck.pop();
    if (!card) {
      throw new Error("Failed to initialize discard pile");
    }
    discardPile.push(card);
  }

  const topCard = discardPile[discardPile.length - 1];
  if (!topCard) {
    throw new Error("Failed to initialize discard pile");
  }

  const currentColor = topCard.type !== "wild" ? topCard.color : null;

  return {
    id: crypto.randomUUID(),
    status: "PLAYING",
    deck: startDeck,
    discardPile,
    setAsidePile: [],
    currentPlayerIndex: 0,
    direction: 1,
    players,
    drawPenalty: 0,
    currentColor,
    pendingColorRoulette: null,
    lastPlayedCard: null,
    winner: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export function playCard(
  gameState: GameState,
  playerId: string,
  cardId: string,
  selectedColor?: Color,
  targetPlayerId?: string,
): PlayCardResult {
  if (gameState.pendingColorRoulette) {
    return { success: false, error: "Resolve color roulette first" };
  }

  const playerIndex = gameState.players.findIndex(
    (player) => player.id === playerId,
  );
  if (playerIndex === -1) {
    return { success: false, error: "Player not found" };
  }
  if (playerIndex !== gameState.currentPlayerIndex) {
    return { success: false, error: "Not your turn" };
  }

  const player = gameState.players[playerIndex];
  if (!player) {
    return { success: false, error: "Player not found" };
  }

  const cardIndex = player.cards.findIndex((card) => card.id === cardId);
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
    card.type === "wild" &&
    card.value !== "WildColorRoulette" &&
    !selectedColor
  ) {
    return { success: false, requiresColorSelect: true };
  }

  if (card.type === "numbered" && card.value === "7" && !targetPlayerId) {
    const validTargets = gameState.players
      .filter((p) => p.id !== playerId && !p.isKnockedOut)
      .map((p) => p.id);
    return { success: false, requiresTargetSelect: true, validTargets };
  }

  if (card.type === "numbered" && card.value === "7" && targetPlayerId) {
    const isValidTarget = gameState.players.some(
      (p) => p.id === targetPlayerId && p.id !== playerId && !p.isKnockedOut,
    );
    if (!isValidTarget) {
      return { success: false, error: "Invalid target player" };
    }
  }

  const newState = cloneState(gameState);
  const currentPlayer = newState.players[playerIndex];
  if (!currentPlayer) {
    return { success: false, error: "Current player not found" };
  }

  currentPlayer.cards.splice(cardIndex, 1);
  let playedCard = card;
  if (
    card.type === "wild" &&
    card.value !== "WildColorRoulette" &&
    selectedColor
  ) {
    playedCard = { ...card, color: selectedColor };
  }

  newState.discardPile.push(playedCard);
  newState.lastPlayedCard = playedCard;
  if (playedCard.type !== "wild") {
    newState.currentColor = playedCard.color;
  } else if (playedCard.value === "WildColorRoulette") {
    newState.currentColor = null;
  } else if (selectedColor) {
    newState.currentColor = selectedColor;
  }
  newState.pendingColorRoulette = null;

  const cardDraw = getDrawAmount(card);
  if (gameState.drawPenalty > 0) {
    if (cardDraw === 0) {
      return {
        success: false,
        error: "Cannot play this card while drawing penalty",
      };
    }
    newState.drawPenalty = gameState.drawPenalty + cardDraw;
  } else {
    newState.drawPenalty = cardDraw;
  }

  if (currentPlayer.cards.length === 0) {
    newState.status = "FINISHED";
    newState.winner = playerId;
    return { success: true, gameState: newState };
  }

  const directive = applyCardEffect(newState, playerIndex, targetPlayerId);
  if (!directive.keepTurn) {
    advanceTurnBy(newState, directive.advanceBy);
  }

  checkMercyRule(newState);
  newState.updatedAt = new Date();
  return { success: true, gameState: newState };
}

function applyCardEffect(
  state: GameState,
  playerIndex: number,
  targetPlayerId?: string,
): CardPlayDirective {
  const lastCard = state.discardPile[state.discardPile.length - 1];
  if (!lastCard) {
    return { advanceBy: 1, keepTurn: false };
  }

  if (lastCard.type === "action") {
    switch (lastCard.value) {
      case "Skip":
        return { advanceBy: 2, keepTurn: false };
      case "SkipEveryone":
        return { advanceBy: 0, keepTurn: false };
      case "Reverse":
        state.direction = state.direction === 1 ? -1 : 1;
        return { advanceBy: 1, keepTurn: false };
      case "Draw2":
      case "Draw4":
        return { advanceBy: 1, keepTurn: false };
      case "DiscardAll": {
        const currentPlayer = state.players[playerIndex];
        if (currentPlayer) {
          const discardColor = lastCard.color;
          const cardsToDiscard = currentPlayer.cards.filter(
            (card) => card.type !== "wild" && card.color === discardColor,
          );
          currentPlayer.cards = currentPlayer.cards.filter(
            (card) => card.type === "wild" || card.color !== discardColor,
          );
          state.discardPile.splice(
            state.discardPile.length - 1,
            0,
            ...cardsToDiscard,
          );
        }
        return { advanceBy: 1, keepTurn: false };
      }
    }
  }

  if (lastCard.type === "wild") {
    switch (lastCard.value) {
      case "WildDraw6":
      case "WildDraw10":
        return { advanceBy: 1, keepTurn: false };
      case "WildReverseDraw4":
        state.direction = state.direction === 1 ? -1 : 1;
        if (activePlayerCount(state) === 2) {
          return { advanceBy: 0, keepTurn: true };
        }
        return { advanceBy: 1, keepTurn: false };
      case "WildColorRoulette": {
        const chooserIndex = getNextActivePlayerIndex(
          state,
          state.currentPlayerIndex,
        );
        const chooser = state.players[chooserIndex];
        const source = state.players[playerIndex];
        if (chooser && source) {
          state.pendingColorRoulette = {
            chooserPlayerId: chooser.id,
            sourcePlayerId: source.id,
          };
        }
        return { advanceBy: 1, keepTurn: false };
      }
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
      return { advanceBy: 1, keepTurn: false };
    }

    if (lastCard.value === "0") {
      const activePlayers = state.players.filter(
        (player) => !player.isKnockedOut,
      );
      const hands = activePlayers.map((player) => [...player.cards]);
      for (let i = 0; i < activePlayers.length; i++) {
        const nextIndex =
          (i + state.direction + activePlayers.length) % activePlayers.length;
        const player = activePlayers[i];
        const nextHand = hands[nextIndex];
        if (player && nextHand) {
          player.cards = nextHand;
        }
      }
      return { advanceBy: 1, keepTurn: false };
    }
  }

  return { advanceBy: 1, keepTurn: false };
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
  if (gameState.pendingColorRoulette) {
    return { error: "Resolve color roulette first" };
  }

  const playerIndex = gameState.players.findIndex(
    (player) => player.id === playerId,
  );
  if (playerIndex === -1) {
    return { error: "Player not found" };
  }
  if (playerIndex !== gameState.currentPlayerIndex) {
    return { error: "Not your turn" };
  }

  const newState = cloneState(gameState);
  const currentPlayer = newState.players[playerIndex];
  if (!currentPlayer) {
    return { error: "Player not found" };
  }

  const drawn: Card[] = [];

  if (gameState.drawPenalty > 0) {
    const drawCount = gameState.drawPenalty;
    for (let i = 0; i < drawCount; i++) {
      const card = drawSingleCard(newState);
      if (!card) {
        break;
      }
      drawn.push(card);
    }
    currentPlayer.cards.push(...drawn);
    newState.drawPenalty = 0;
    advanceTurn(newState);
    checkMercyRule(newState);
    newState.updatedAt = new Date();
    return { gameState: newState, drawnCards: drawn };
  }

  if (typeof count === "number" && count > 0) {
    for (let i = 0; i < count; i++) {
      const card = drawSingleCard(newState);
      if (!card) {
        break;
      }
      drawn.push(card);
      currentPlayer.cards.push(card);
    }

    const topCard = newState.discardPile[newState.discardPile.length - 1];
    const hasPlayable = drawn.some(
      (card) =>
        topCard != null &&
        canPlayCard(
          card,
          topCard,
          newState.currentColor,
          0,
          currentPlayer.cards,
        ),
    );
    if (!hasPlayable) {
      advanceTurn(newState);
    }

    checkMercyRule(newState);
    newState.updatedAt = new Date();
    return { gameState: newState, drawnCards: drawn };
  }

  let foundPlayable = false;
  while (!foundPlayable) {
    const card = drawSingleCard(newState);
    if (!card) {
      break;
    }
    drawn.push(card);
    currentPlayer.cards.push(card);

    const topCard = newState.discardPile[newState.discardPile.length - 1];
    if (
      topCard &&
      canPlayCard(card, topCard, newState.currentColor, 0, currentPlayer.cards)
    ) {
      foundPlayable = true;
    }
  }

  if (!foundPlayable) {
    advanceTurn(newState);
  }

  checkMercyRule(newState);
  newState.updatedAt = new Date();
  return { gameState: newState, drawnCards: drawn };
}

export function resolveColorRouletteChoice(
  gameState: GameState,
  playerId: string,
  color: Color,
): { gameState: GameState; drawnCards: Card[] } | { error: string } {
  const pending = gameState.pendingColorRoulette;
  if (!pending) {
    return { error: "No pending color roulette" };
  }
  if (pending.chooserPlayerId !== playerId) {
    return { error: "Only the targeted player can choose roulette color" };
  }

  const chooserIndex = gameState.players.findIndex(
    (player) => player.id === playerId,
  );
  if (chooserIndex === -1 || chooserIndex !== gameState.currentPlayerIndex) {
    return { error: "Not your turn" };
  }

  const newState = cloneState(gameState);
  const chooser = newState.players[chooserIndex];
  if (!chooser) {
    return { error: "Player not found" };
  }

  newState.pendingColorRoulette = null;
  newState.currentColor = color;

  const drawn: Card[] = [];
  while (true) {
    const card = drawSingleCard(newState);
    if (!card) {
      break;
    }
    drawn.push(card);
    if (card.type !== "wild" && card.color === color) {
      break;
    }
  }

  chooser.cards.push(...drawn);
  advanceTurn(newState);
  checkMercyRule(newState);
  newState.updatedAt = new Date();
  return { gameState: newState, drawnCards: drawn };
}

function checkMercyRule(state: GameState): void {
  for (const player of state.players) {
    if (player.cards.length >= 25 && !player.isKnockedOut) {
      player.isKnockedOut = true;
      state.setAsidePile.push(...player.cards);
      player.cards = [];
    }
  }

  const activePlayers = state.players.filter((player) => !player.isKnockedOut);
  if (activePlayers.length === 1) {
    state.status = "FINISHED";
    state.winner = activePlayers[0]?.id ?? null;
    return;
  }

  if (state.players[state.currentPlayerIndex]?.isKnockedOut) {
    advanceTurn(state);
  }
}

export function callUno(gameState: GameState, playerId: string): GameState {
  const playerIndex = gameState.players.findIndex(
    (player) => player.id === playerId,
  );
  if (playerIndex === -1) {
    return gameState;
  }

  const newState = cloneState(gameState);
  const player = newState.players[playerIndex];
  if (player) {
    player.calledUno = true;
  }
  return newState;
}

export function getNextPlayerIndex(state: GameState): number {
  return getNextActivePlayerIndex(state, state.currentPlayerIndex);
}
