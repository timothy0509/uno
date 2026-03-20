import { db } from "~/server/db";
import type { GameState, Card, Color } from "~/types/game";
import {
  initializeGame,
  playCard as playCardEngine,
  drawCardsFromDeck,
  callUno as callUnoEngine,
} from "~/lib/game/engine";

export function generateGameCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function parseCards(json: string): Card[] {
  try {
    return JSON.parse(json) as Card[];
  } catch {
    return [];
  }
}

function gameToGameState(game: {
  id: string;
  code: string | null;
  status: "WAITING" | "PLAYING" | "FINISHED";
  maxPlayers: number;
  createdAt: Date;
  updatedAt: Date;
  startedAt: Date | null;
  endedAt: Date | null;
  deck: string;
  discardPile: string;
  currentPlayerIndex: number;
  direction: number;
  drawPenalty: number;
  currentColor: string | null;
  lastPlayedCard: string | null;
  winner: string | null;
  players: Array<{
    id: string;
    userId: string;
    name: string;
    position: number;
    cards: string;
    isKnockedOut: boolean;
    calledUno: boolean;
  }>;
}): GameState {
  return {
    id: game.id,
    status: game.status,
    deck: parseCards(game.deck),
    discardPile: parseCards(game.discardPile),
    currentPlayerIndex: game.currentPlayerIndex,
    direction: game.direction as 1 | -1,
    players: game.players.map((p) => ({
      id: p.id,
      userId: p.userId,
      name: p.name,
      position: p.position,
      cards: parseCards(p.cards),
      isKnockedOut: p.isKnockedOut,
      calledUno: p.calledUno,
    })),
    drawPenalty: game.drawPenalty,
    currentColor: game.currentColor as Color | null,
    lastPlayedCard: game.lastPlayedCard
      ? (JSON.parse(game.lastPlayedCard) as Card)
      : null,
    winner: game.winner,
    createdAt: game.createdAt,
    updatedAt: game.updatedAt,
  };
}

export async function createGame(): Promise<GameState> {
  const code = generateGameCode();

  const game = await db.game.create({
    data: {
      code,
      status: "WAITING",
      deck: "[]",
      discardPile: "[]",
      currentPlayerIndex: 0,
      direction: 1,
      drawPenalty: 0,
    },
    include: {
      players: true,
    },
  });

  return gameToGameState(game);
}

export async function getGameById(gameId: string): Promise<GameState | null> {
  const game = await db.game.findUnique({
    where: { id: gameId },
    include: {
      players: {
        orderBy: { position: "asc" },
      },
    },
  });

  if (!game) return null;
  return gameToGameState(game);
}

export async function getGameByCode(code: string): Promise<GameState | null> {
  const game = await db.game.findUnique({
    where: { code: code.toUpperCase() },
    include: {
      players: {
        orderBy: { position: "asc" },
      },
    },
  });

  if (!game) return null;
  return gameToGameState(game);
}

export async function joinGame(
  gameId: string,
  playerId: string,
  playerName: string,
): Promise<{ game?: GameState; error?: string }> {
  const game = await db.game.findUnique({
    where: { id: gameId },
    include: { players: true },
  });

  if (!game) {
    return { error: "Game not found" };
  }

  if (game.status !== "WAITING") {
    return { error: "Game already started" };
  }

  if (game.players.length >= game.maxPlayers) {
    return { error: "Game is full" };
  }

  const existingPlayer = game.players.find((p) => p.userId === playerId);
  if (existingPlayer) {
    const fullGame = await getGameById(gameId);
    return { game: fullGame! };
  }

  const position = game.players.length;

  await db.gamePlayer.create({
    data: {
      gameId,
      userId: playerId,
      name: playerName,
      position,
      cards: "[]",
    },
  });

  const fullGame = await getGameById(gameId);
  return { game: fullGame! };
}

export async function startGame(
  gameId: string,
): Promise<{ game?: GameState; error?: string }> {
  const game = await db.game.findUnique({
    where: { id: gameId },
    include: { players: true },
  });

  if (!game) {
    return { error: "Game not found" };
  }

  if (game.players.length < 2) {
    return { error: "Need at least 2 players to start" };
  }

  const playerIds = game.players.map((p) => p.userId);
  const playerNames = game.players.map(
    (p) => p.name ?? `Player ${p.position + 1}`,
  );
  const newGameState = initializeGame(playerIds, playerNames);

  await db.game.update({
    where: { id: gameId },
    data: {
      status: "PLAYING",
      startedAt: new Date(),
      deck: JSON.stringify(newGameState.deck),
      discardPile: JSON.stringify(newGameState.discardPile),
      currentPlayerIndex: 0,
      direction: 1,
      drawPenalty: 0,
      currentColor: newGameState.currentColor,
      lastPlayedCard: newGameState.lastPlayedCard
        ? JSON.stringify(newGameState.lastPlayedCard)
        : null,
    },
  });

  for (let i = 0; i < newGameState.players.length; i++) {
    const player = newGameState.players[i];
    const dbPlayer = game.players[i];
    if (player && dbPlayer) {
      await db.gamePlayer.update({
        where: { id: dbPlayer.id },
        data: {
          cards: JSON.stringify(player.cards),
          isKnockedOut: player.isKnockedOut,
          calledUno: player.calledUno,
        },
      });
    }
  }

  const fullGame = await getGameById(gameId);
  return { game: fullGame! };
}

export async function playCardAction(
  gameId: string,
  playerId: string,
  cardId: string,
  selectedColor?: string,
  targetPlayerId?: string,
): Promise<{ game?: GameState; error?: string }> {
  const game = await getGameById(gameId);
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

  if (!result.success || !result.gameState) {
    return { error: result.error ?? "Cannot play this card" };
  }

  await db.game.update({
    where: { id: gameId },
    data: {
      deck: JSON.stringify(result.gameState.deck),
      discardPile: JSON.stringify(result.gameState.discardPile),
      currentPlayerIndex: result.gameState.currentPlayerIndex,
      direction: result.gameState.direction,
      drawPenalty: result.gameState.drawPenalty,
      currentColor: result.gameState.currentColor,
      lastPlayedCard: result.gameState.lastPlayedCard
        ? JSON.stringify(result.gameState.lastPlayedCard)
        : null,
      winner: result.gameState.winner,
      status: result.gameState.status,
      endedAt: result.gameState.status === "FINISHED" ? new Date() : null,
    },
  });

  for (const player of result.gameState.players) {
    const dbPlayer = await db.gamePlayer.findFirst({
      where: { gameId, userId: player.id },
    });
    if (dbPlayer) {
      await db.gamePlayer.update({
        where: { id: dbPlayer.id },
        data: {
          cards: JSON.stringify(player.cards),
          isKnockedOut: player.isKnockedOut,
          calledUno: player.calledUno,
        },
      });
    }
  }

  const fullGame = await getGameById(gameId);
  return { game: fullGame! };
}

export async function drawCardsAction(
  gameId: string,
  playerId: string,
): Promise<{ game?: GameState; error?: string }> {
  const game = await getGameById(gameId);
  if (!game) {
    return { error: "Game not found" };
  }

  const result = drawCardsFromDeck(game, playerId);

  if ("error" in result) {
    return { error: result.error };
  }

  await db.game.update({
    where: { id: gameId },
    data: {
      deck: JSON.stringify(result.gameState.deck),
      discardPile: JSON.stringify(result.gameState.discardPile),
      currentPlayerIndex: result.gameState.currentPlayerIndex,
      direction: result.gameState.direction,
      drawPenalty: result.gameState.drawPenalty,
      currentColor: result.gameState.currentColor,
    },
  });

  for (const player of result.gameState.players) {
    const dbPlayer = await db.gamePlayer.findFirst({
      where: { gameId, userId: player.id },
    });
    if (dbPlayer) {
      await db.gamePlayer.update({
        where: { id: dbPlayer.id },
        data: {
          cards: JSON.stringify(player.cards),
          isKnockedOut: player.isKnockedOut,
          calledUno: player.calledUno,
        },
      });
    }
  }

  const fullGame = await getGameById(gameId);
  return { game: fullGame! };
}

export async function callUnoAction(
  gameId: string,
  playerId: string,
): Promise<{ game?: GameState; error?: string }> {
  const game = await getGameById(gameId);
  if (!game) {
    return { error: "Game not found" };
  }

  callUnoEngine(game, playerId);

  const dbPlayer = await db.gamePlayer.findFirst({
    where: { gameId, userId: playerId },
  });

  if (dbPlayer) {
    await db.gamePlayer.update({
      where: { id: dbPlayer.id },
      data: {
        calledUno: true,
      },
    });
  }

  const fullGame = await getGameById(gameId);
  return { game: fullGame! };
}
