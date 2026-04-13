import { queryGeneric, mutationGeneric } from "convex/server";
import { ConvexError, v } from "convex/values";
import type { Color, GameState } from "../src/types/game";
import {
  callUno as callUnoEngine,
  chooseRouletteColor,
  drawCardsFromDeck,
  initializeGame,
  playCard as playCardEngine,
} from "../src/lib/game/engine";
import { requireUserId } from "./lib/auth";

function now() {
  return Date.now();
}

function generateGameCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

async function getGameByIdentifier(ctx: { db: any }, identifier: string) {
  const normalized = identifier.trim().toUpperCase();
  const byCode = await ctx.db
    .query("games")
    .withIndex("by_code", (q: any) => q.eq("code", normalized))
    .unique();
  if (byCode) {
    return byCode;
  }
  try {
    const byId = await ctx.db.get(identifier);
    if (byId) {
      return byId;
    }
  } catch {
    // Ignore invalid id shape and continue.
  }
  return null;
}

async function loadPlayers(ctx: { db: any }, gameId: string) {
  const players = await ctx.db
    .query("gamePlayers")
    .withIndex("by_game", (q: any) => q.eq("gameId", gameId))
    .collect();
  players.sort((a: any, b: any) => a.position - b.position);
  return players;
}

function toGameState(game: any, players: any[]): GameState {
  return {
    id: game.code,
    createdByUserId: game.createdByUserId ?? null,
    status: game.status,
    deck: game.deck,
    knockedOutCards: game.knockedOutCards ?? [],
    discardPile: game.discardPile,
    currentPlayerIndex: game.currentPlayerIndex,
    direction: game.direction,
    players: players.map((p) => ({
      id: p.userId,
      userId: p.userId,
      name: p.name,
      position: p.position,
      cards: p.cards,
      isKnockedOut: p.isKnockedOut,
      calledUno: p.calledUno,
    })),
    drawPenalty: game.drawPenalty,
    drawPenaltySetBy: game.drawPenaltySetBy ?? null,
    pendingRoulette: game.pendingRoulette ?? null,
    currentColor: game.currentColor,
    lastPlayedCard: game.lastPlayedCard,
    lastPlayedBy: game.lastPlayedBy ?? null,
    winner: game.winner,
    createdAt: game.createdAt,
    updatedAt: game.updatedAt,
  };
}

export const get = queryGeneric({
  args: { gameId: v.string() },
  handler: async (ctx, args) => {
    const game = await getGameByIdentifier(ctx, args.gameId);
    if (!game) {
      return null;
    }
    const players = await loadPlayers(ctx, game._id);
    return toGameState(game, players);
  },
});

export const create = mutationGeneric({
  args: {},
  handler: async (ctx) => {
    const userId = await requireUserId(ctx);
    let code = generateGameCode();
    while (
      await ctx.db
        .query("games")
        .withIndex("by_code", (q: any) => q.eq("code", code))
        .unique()
    ) {
      code = generateGameCode();
    }

    const timestamp = now();
    const gameId = await ctx.db.insert("games", {
      code,
      createdByUserId: userId,
      status: "WAITING",
      deck: [],
      knockedOutCards: [],
      discardPile: [],
      currentPlayerIndex: 0,
      direction: 1,
      drawPenalty: 0,
      drawPenaltySetBy: null,
      pendingRoulette: null,
      currentColor: null,
      lastPlayedCard: null,
      lastPlayedBy: null,
      winner: null,
      createdAt: timestamp,
      updatedAt: timestamp,
    });

    const game = await ctx.db.get(gameId);
    if (!game) {
      throw new ConvexError("Failed to create game");
    }

    return {
      gameId: game.code,
      gameState: toGameState(game, []),
    };
  },
});

export const join = mutationGeneric({
  args: { gameId: v.string(), playerName: v.string() },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx);
    const game = await getGameByIdentifier(ctx, args.gameId);
    if (!game) {
      throw new ConvexError("Game not found");
    }
    if (game.status !== "WAITING") {
      throw new ConvexError("Game already started");
    }

    const players = await loadPlayers(ctx, game._id);
    const existing = players.find((p: any) => p.userId === userId);
    if (!existing) {
      if (players.length >= 6) {
        throw new ConvexError("Game is full");
      }
      await ctx.db.insert("gamePlayers", {
        gameId: game._id,
        userId,
        name: args.playerName.trim().slice(0, 20) || "Player",
        position: players.length,
        cards: [],
        isKnockedOut: false,
        calledUno: false,
      });
    }

    const updatedPlayers = await loadPlayers(ctx, game._id);
    return toGameState(game, updatedPlayers);
  },
});

export const start = mutationGeneric({
  args: { gameId: v.string() },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx);
    const game = await getGameByIdentifier(ctx, args.gameId);
    if (!game) {
      throw new ConvexError("Game not found");
    }

    const players = await loadPlayers(ctx, game._id);
    const creatorId =
      game.createdByUserId ??
      players.find((player: any) => player.position === 0)?.userId ??
      players[0]?.userId ??
      null;
    if (!creatorId || creatorId !== userId) {
      throw new ConvexError("Only the room creator can start the game");
    }
    if (players.length < 2) {
      throw new ConvexError("Need at least 2 players to start");
    }

    const playerIds = players.map((p: any) => p.userId);
    const playerNames = players.map((p: any) => p.name);
    const initialized = initializeGame(playerIds, playerNames);

    const timestamp = now();
    await ctx.db.patch(game._id, {
      status: "PLAYING",
      deck: initialized.deck,
      knockedOutCards: initialized.knockedOutCards,
      discardPile: initialized.discardPile,
      currentPlayerIndex: initialized.currentPlayerIndex,
      direction: initialized.direction,
      drawPenalty: initialized.drawPenalty,
      drawPenaltySetBy: initialized.drawPenaltySetBy,
      pendingRoulette: initialized.pendingRoulette,
      currentColor: initialized.currentColor,
      lastPlayedCard: initialized.lastPlayedCard,
      winner: initialized.winner,
      updatedAt: timestamp,
    });

    for (const player of initialized.players) {
      const dbPlayer = players.find((p: any) => p.userId === player.id);
      if (dbPlayer) {
        await ctx.db.patch(dbPlayer._id, {
          cards: player.cards,
          isKnockedOut: player.isKnockedOut,
          calledUno: player.calledUno,
        });
      }
    }

    const updatedGame = await ctx.db.get(game._id);
    const updatedPlayers = await loadPlayers(ctx, game._id);
    if (!updatedGame) {
      throw new ConvexError("Failed to update game");
    }
    return toGameState(updatedGame, updatedPlayers);
  },
});

export const getActions = queryGeneric({
  args: { gameId: v.string(), limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const game = await getGameByIdentifier(ctx, args.gameId);
    if (!game) {
      return [];
    }
    const actions = await ctx.db
      .query("gameActions")
      .withIndex("by_game", (q: any) => q.eq("gameId", game._id))
      .order("desc")
      .take(args.limit ?? 30);
    return actions.reverse();
  },
});

export const playCard = mutationGeneric({
  args: {
    gameId: v.string(),
    cardId: v.string(),
    selectedColor: v.optional(
      v.union(
        v.literal("red"),
        v.literal("blue"),
        v.literal("green"),
        v.literal("yellow"),
      ),
    ),
    targetPlayerId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx);
    const game = await getGameByIdentifier(ctx, args.gameId);
    if (!game) {
      throw new ConvexError("Game not found");
    }

    const players = await loadPlayers(ctx, game._id);
    const state = toGameState(game, players);
    const result = playCardEngine(
      state,
      userId,
      args.cardId,
      args.selectedColor as Color | undefined,
      args.targetPlayerId,
    );

    if (!result.success || !result.gameState) {
      throw new ConvexError(result.error ?? "Cannot play this card");
    }

    await ctx.db.insert("gameActions", {
      gameId: game._id,
      actorUserId: userId,
      type: "play",
      payload: {
        cardId: args.cardId,
        selectedColor: args.selectedColor,
        targetPlayerId: args.targetPlayerId,
      },
      createdAt: now(),
    });

    await ctx.db.patch(game._id, {
      status: result.gameState.status,
      deck: result.gameState.deck,
      knockedOutCards: result.gameState.knockedOutCards,
      discardPile: result.gameState.discardPile,
      currentPlayerIndex: result.gameState.currentPlayerIndex,
      direction: result.gameState.direction,
      drawPenalty: result.gameState.drawPenalty,
      drawPenaltySetBy: result.gameState.drawPenaltySetBy,
      pendingRoulette: result.gameState.pendingRoulette,
      currentColor: result.gameState.currentColor,
      lastPlayedCard: result.gameState.lastPlayedCard,
      lastPlayedBy: userId,
      winner: result.gameState.winner,
      updatedAt: now(),
    });

    for (const player of result.gameState.players) {
      const dbPlayer = players.find((p: any) => p.userId === player.id);
      if (dbPlayer) {
        const wasKnockedOut = dbPlayer.isKnockedOut;
        await ctx.db.patch(dbPlayer._id, {
          cards: player.cards,
          isKnockedOut: player.isKnockedOut,
          calledUno: player.calledUno,
        });
        if (player.isKnockedOut && !wasKnockedOut) {
          await ctx.db.insert("gameActions", {
            gameId: game._id,
            actorUserId: player.id,
            type: "knockout",
            payload: { cardCount: player.cards.length },
            createdAt: now(),
          });
        }
      }
    }

    if (result.gameState.winner) {
      await ctx.db.insert("gameActions", {
        gameId: game._id,
        actorUserId: result.gameState.winner,
        type: "win",
        payload: undefined,
        createdAt: now(),
      });
    }

    const updatedGame = await ctx.db.get(game._id);
    const updatedPlayers = await loadPlayers(ctx, game._id);
    if (!updatedGame) {
      throw new ConvexError("Failed to update game");
    }
    return toGameState(updatedGame, updatedPlayers);
  },
});

export const draw = mutationGeneric({
  args: { gameId: v.string() },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx);
    const game = await getGameByIdentifier(ctx, args.gameId);
    if (!game) {
      throw new ConvexError("Game not found");
    }

    const players = await loadPlayers(ctx, game._id);
    const state = toGameState(game, players);
    const result = drawCardsFromDeck(state, userId);
    if ("error" in result) {
      throw new ConvexError(result.error);
    }

    await ctx.db.insert("gameActions", {
      gameId: game._id,
      actorUserId: userId,
      type: "draw",
      payload: { drawPenalty: state.drawPenalty },
      createdAt: now(),
    });

    await ctx.db.patch(game._id, {
      status: result.gameState.status,
      deck: result.gameState.deck,
      knockedOutCards: result.gameState.knockedOutCards,
      discardPile: result.gameState.discardPile,
      currentPlayerIndex: result.gameState.currentPlayerIndex,
      direction: result.gameState.direction,
      drawPenalty: result.gameState.drawPenalty,
      drawPenaltySetBy: result.gameState.drawPenaltySetBy,
      pendingRoulette: result.gameState.pendingRoulette,
      currentColor: result.gameState.currentColor,
      lastPlayedCard: result.gameState.lastPlayedCard,
      lastPlayedBy: game.lastPlayedBy,
      winner: result.gameState.winner,
      updatedAt: now(),
    });

    for (const player of result.gameState.players) {
      const dbPlayer = players.find((p: any) => p.userId === player.id);
      if (dbPlayer) {
        const wasKnockedOut = dbPlayer.isKnockedOut;
        await ctx.db.patch(dbPlayer._id, {
          cards: player.cards,
          isKnockedOut: player.isKnockedOut,
          calledUno: player.calledUno,
        });
        if (player.isKnockedOut && !wasKnockedOut) {
          await ctx.db.insert("gameActions", {
            gameId: game._id,
            actorUserId: player.id,
            type: "knockout",
            payload: { cardCount: player.cards.length },
            createdAt: now(),
          });
        }
      }
    }

    if (result.gameState.winner) {
      await ctx.db.insert("gameActions", {
        gameId: game._id,
        actorUserId: result.gameState.winner,
        type: "win",
        payload: undefined,
        createdAt: now(),
      });
    }

    const updatedGame = await ctx.db.get(game._id);
    const updatedPlayers = await loadPlayers(ctx, game._id);
    if (!updatedGame) {
      throw new ConvexError("Failed to update game");
    }
    return toGameState(updatedGame, updatedPlayers);
  },
});

export const callUno = mutationGeneric({
  args: { gameId: v.string() },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx);
    const game = await getGameByIdentifier(ctx, args.gameId);
    if (!game) {
      throw new ConvexError("Game not found");
    }

    const players = await loadPlayers(ctx, game._id);
    const state = toGameState(game, players);
    const updatedState = callUnoEngine(state, userId);

    await ctx.db.insert("gameActions", {
      gameId: game._id,
      actorUserId: userId,
      type: "call_uno",
      payload: undefined,
      createdAt: now(),
    });

    for (const player of updatedState.players) {
      const dbPlayer = players.find((p: any) => p.userId === player.id);
      if (dbPlayer) {
        await ctx.db.patch(dbPlayer._id, {
          cards: player.cards,
          isKnockedOut: player.isKnockedOut,
          calledUno: player.calledUno,
        });
      }
    }

    await ctx.db.patch(game._id, { updatedAt: now() });

    const updatedGame = await ctx.db.get(game._id);
    const updatedPlayers = await loadPlayers(ctx, game._id);
    if (!updatedGame) {
      throw new ConvexError("Failed to update game");
    }

    return toGameState(updatedGame, updatedPlayers);
  },
});

export const chooseRoulette = mutationGeneric({
  args: {
    gameId: v.string(),
    selectedColor: v.union(
      v.literal("red"),
      v.literal("blue"),
      v.literal("green"),
      v.literal("yellow"),
    ),
  },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx);
    const game = await getGameByIdentifier(ctx, args.gameId);
    if (!game) {
      throw new ConvexError("Game not found");
    }

    const players = await loadPlayers(ctx, game._id);
    const state = toGameState(game, players);
    const result = chooseRouletteColor(state, userId, args.selectedColor);
    if ("error" in result) {
      throw new ConvexError(result.error);
    }

    await ctx.db.insert("gameActions", {
      gameId: game._id,
      actorUserId: userId,
      type: "roulette",
      payload: { selectedColor: args.selectedColor },
      createdAt: now(),
    });

    await ctx.db.patch(game._id, {
      status: result.gameState.status,
      deck: result.gameState.deck,
      knockedOutCards: result.gameState.knockedOutCards,
      discardPile: result.gameState.discardPile,
      currentPlayerIndex: result.gameState.currentPlayerIndex,
      direction: result.gameState.direction,
      drawPenalty: result.gameState.drawPenalty,
      drawPenaltySetBy: result.gameState.drawPenaltySetBy,
      pendingRoulette: result.gameState.pendingRoulette,
      currentColor: result.gameState.currentColor,
      lastPlayedCard: result.gameState.lastPlayedCard,
      lastPlayedBy: game.lastPlayedBy,
      winner: result.gameState.winner,
      updatedAt: now(),
    });

    for (const player of result.gameState.players) {
      const dbPlayer = players.find((p: any) => p.userId === player.id);
      if (dbPlayer) {
        const wasKnockedOut = dbPlayer.isKnockedOut;
        await ctx.db.patch(dbPlayer._id, {
          cards: player.cards,
          isKnockedOut: player.isKnockedOut,
          calledUno: player.calledUno,
        });
        if (player.isKnockedOut && !wasKnockedOut) {
          await ctx.db.insert("gameActions", {
            gameId: game._id,
            actorUserId: player.id,
            type: "knockout",
            payload: { cardCount: player.cards.length },
            createdAt: now(),
          });
        }
      }
    }

    if (result.gameState.winner) {
      await ctx.db.insert("gameActions", {
        gameId: game._id,
        actorUserId: result.gameState.winner,
        type: "win",
        payload: undefined,
        createdAt: now(),
      });
    }

    const updatedGame = await ctx.db.get(game._id);
    const updatedPlayers = await loadPlayers(ctx, game._id);
    if (!updatedGame) {
      throw new ConvexError("Failed to update game");
    }
    return toGameState(updatedGame, updatedPlayers);
  },
});
