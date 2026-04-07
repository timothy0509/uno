import type { GameState, Color } from "~/types/game";
import {
  initializeGame,
  playCard as playCardEngine,
  drawCardsFromDeck,
  callUno as callUnoEngine,
} from "~/lib/game/engine";

declare global {
  var gamesStore: Map<string, GameState> | undefined;
}

function getGamesStore(): Map<string, GameState> {
  if (typeof globalThis.gamesStore === "undefined") {
    globalThis.gamesStore = new Map<string, GameState>();
  }
  return globalThis.gamesStore;
}

export const games = getGamesStore();

export function createGame(): GameState {
  const gameId = crypto.randomUUID();
  const gameState: GameState = {
    id: gameId,
    status: "WAITING",
    deck: [],
    discardPile: [],
    setAsidePile: [],
    currentPlayerIndex: 0,
    direction: 1,
    players: [],
    drawPenalty: 0,
    currentColor: null,
    pendingColorRoulette: null,
    lastPlayedCard: null,
    winner: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  games.set(gameId, gameState);
  return gameState;
}

export function getGame(gameId: string): GameState | undefined {
  return games.get(gameId);
}

export function joinGame(
  gameId: string,
  playerId: string,
  playerName: string,
): GameState | { error: string } {
  const game = games.get(gameId);
  if (!game) {
    return { error: "Game not found" };
  }

  if (game.status !== "WAITING") {
    return { error: "Game already started" };
  }

  if (game.players.length >= 6) {
    return { error: "Game is full" };
  }

  const existingPlayer = game.players.find((p) => p.id === playerId);
  if (existingPlayer) {
    return game;
  }

  game.players.push({
    id: playerId,
    userId: playerId,
    name: playerName ?? `Player ${game.players.length + 1}`,
    position: game.players.length,
    cards: [],
    isKnockedOut: false,
    calledUno: false,
  });
  game.updatedAt = new Date();
  return game;
}

export function startGame(gameId: string): GameState | { error: string } {
  const game = games.get(gameId);
  if (!game) {
    return { error: "Game not found" };
  }

  if (game.players.length < 2) {
    return { error: "Need at least 2 players to start" };
  }

  const playerIds = game.players.map((p) => p.id);
  const playerNames = game.players.map((p) => p.name);
  const newGameState = initializeGame(playerIds, playerNames);
  newGameState.id = gameId;
  games.set(gameId, newGameState);
  return newGameState;
}

export function playCardAction(
  gameId: string,
  playerId: string,
  cardId: string,
  selectedColor?: string,
  targetPlayerId?: string,
): GameState | { error: string } {
  const game = games.get(gameId);
  if (!game) {
    return { error: "Game not found" };
  }

  const result = playCardEngine(
    game,
    playerId,
    cardId,
    selectedColor as Color | undefined,
    targetPlayerId,
  );

  if (result.success && result.gameState) {
    games.set(gameId, result.gameState);
    return result.gameState;
  }

  return { error: result.error ?? "Cannot play this card" };
}

export function drawCardsAction(
  gameId: string,
  playerId: string,
): GameState | { error: string } {
  const game = games.get(gameId);
  if (!game) {
    return { error: "Game not found" };
  }

  const result = drawCardsFromDeck(game, playerId);

  if ("gameState" in result) {
    games.set(gameId, result.gameState);
    return result.gameState;
  }

  return { error: result.error ?? "Cannot draw cards" };
}

export function callUnoAction(
  gameId: string,
  playerId: string,
): GameState | { error: string } {
  const game = games.get(gameId);
  if (!game) {
    return { error: "Game not found" };
  }

  const newGameState = callUnoEngine(game, playerId);
  games.set(gameId, newGameState);
  return newGameState;
}

export function generateGameCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}
