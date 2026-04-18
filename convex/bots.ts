import { mutationGeneric, internalMutationGeneric } from "convex/server";
import { ConvexError, v } from "convex/values";
import type { Color, GameState } from "../src/types/game";
import {
  callUno as callUnoEngine,
  chooseRouletteColor,
  drawCardsFromDeck,
  playCard as playCardEngine,
} from "../src/lib/game/engine";
import { chooseBotMove } from "../src/lib/game/bot";
import { requireUserId } from "./lib/auth";

function now() {
  return Date.now();
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
    // Ignore
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
    players: players.map((p: any) => ({
      id: p.userId,
      userId: p.userId,
      name: p.name,
      position: p.position,
      cards: p.cards,
      isKnockedOut: p.isKnockedOut,
      calledUno: p.calledUno,
      isBot: p.isBot,
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

function getNextPlayerIndex(state: GameState): number {
  let nextIndex = state.currentPlayerIndex;
  do {
    nextIndex =
      (nextIndex + state.direction + state.players.length) %
      state.players.length;
  } while (state.players[nextIndex]?.isKnockedOut);
  return nextIndex;
}

async function patchGameFromState(ctx: { db: any }, game: any, players: any[], state: GameState) {
  await ctx.db.patch(game._id, {
    status: state.status,
    deck: state.deck,
    knockedOutCards: state.knockedOutCards,
    discardPile: state.discardPile,
    currentPlayerIndex: state.currentPlayerIndex,
    direction: state.direction,
    drawPenalty: state.drawPenalty,
    drawPenaltySetBy: state.drawPenaltySetBy,
    pendingRoulette: state.pendingRoulette,
    currentColor: state.currentColor,
    lastPlayedCard: state.lastPlayedCard,
    lastPlayedBy: state.lastPlayedBy,
    winner: state.winner,
    updatedAt: now(),
  });

  for (const player of state.players) {
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

  if (state.winner) {
    await ctx.db.insert("gameActions", {
      gameId: game._id,
      actorUserId: state.winner,
      type: "win",
      payload: undefined,
      createdAt: now(),
    });
  }
}

export const addBot = mutationGeneric({
  args: { gameId: v.string() },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx);
    const game = await getGameByIdentifier(ctx, args.gameId);
    if (!game) {
      throw new ConvexError("Game not found");
    }
    if (game.status !== "WAITING") {
      throw new ConvexError("Game already started");
    }
    if (game.createdByUserId !== userId) {
      throw new ConvexError("Only the room creator can add bots");
    }

    const players = await loadPlayers(ctx, game._id);
    if (players.length >= 6) {
      throw new ConvexError("Game is full");
    }

    const botCount = players.filter((p: any) => p.isBot).length;
    const botUserId = `bot:${botCount}`;
    const botName = `Bot ${botCount + 1}`;

    await ctx.db.insert("gamePlayers", {
      gameId: game._id,
      userId: botUserId,
      name: botName,
      position: players.length,
      cards: [],
      isKnockedOut: false,
      calledUno: false,
      isBot: true,
    });

    const updatedPlayers = await loadPlayers(ctx, game._id);
    return toGameState(game, updatedPlayers);
  },
});

export const removeBot = mutationGeneric({
  args: { gameId: v.string(), botUserId: v.string() },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx);
    const game = await getGameByIdentifier(ctx, args.gameId);
    if (!game) {
      throw new ConvexError("Game not found");
    }
    if (game.status !== "WAITING") {
      throw new ConvexError("Game already started");
    }
    if (game.createdByUserId !== userId) {
      throw new ConvexError("Only the room creator can remove bots");
    }

    const players = await loadPlayers(ctx, game._id);
    const botPlayer = players.find(
      (p: any) => p.userId === args.botUserId && p.isBot,
    );
    if (!botPlayer) {
      throw new ConvexError("Bot not found");
    }

    await ctx.db.delete(botPlayer._id);

    const updatedPlayers = await loadPlayers(ctx, game._id);
    const repositioned = updatedPlayers.map((p: any, idx: number) => ({
      ...p,
      position: idx,
    }));

    for (const player of repositioned) {
      const dbPlayer = updatedPlayers.find((p: any) => p._id === player._id);
      if (dbPlayer && dbPlayer.position !== player.position) {
        await ctx.db.patch(dbPlayer._id, { position: player.position });
      }
    }

    const finalPlayers = await loadPlayers(ctx, game._id);
    return toGameState(game, finalPlayers);
  },
});

export const processBotTurns = internalMutationGeneric({
  args: { gameId: v.string() },
  handler: async (ctx, args) => {
    const game = await getGameByIdentifier(ctx, args.gameId);
    if (!game) {
      throw new ConvexError("Game not found");
    }
    if (game.status !== "PLAYING") {
      return null;
    }

    let maxIterations = 20;
    while (maxIterations-- > 0) {
      const players = await loadPlayers(ctx, game._id);
      const state = toGameState(game, players);

      if (state.status !== "PLAYING") {
        return toGameState(game, players);
      }

      const currentPlayer = state.players[state.currentPlayerIndex];
      if (!currentPlayer || !currentPlayer.isBot || currentPlayer.isKnockedOut) {
        return toGameState(game, players);
      }

      if (state.pendingRoulette && state.pendingRoulette.chooserPlayerId === currentPlayer.id) {
        const colorCounts: Record<string, number> = { red: 0, blue: 0, green: 0, yellow: 0 };
        for (const card of currentPlayer.cards) {
          if (card.type !== "wild" && "color" in card) {
            colorCounts[card.color as string] = (colorCounts[card.color as string] || 0) + 1;
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

        const rouletteResult = chooseRouletteColor(state, currentPlayer.id, bestColor);
        if ("error" in rouletteResult) {
          return toGameState(game, players);
        }

        await ctx.db.insert("gameActions", {
          gameId: game._id,
          actorUserId: currentPlayer.id,
          type: "roulette",
          payload: { selectedColor: bestColor },
          createdAt: now(),
        });

        await patchGameFromState(ctx, game, players, rouletteResult.gameState);

        const updatedGame = await ctx.db.get(game._id);
        if (!updatedGame) {
          throw new ConvexError("Failed to update game");
        }
        Object.assign(game, updatedGame);
        continue;
      }

      const move = chooseBotMove(state, currentPlayer.id);

      if (move) {
        const result = playCardEngine(
          state,
          currentPlayer.id,
          move.cardId,
          move.selectedColor,
          move.targetPlayerId,
        );

        if (!result.success || !result.gameState) {
          const drawResult = drawCardsFromDeck(state, currentPlayer.id);
          if ("error" in drawResult) {
            return toGameState(game, players);
          }

          await ctx.db.insert("gameActions", {
            gameId: game._id,
            actorUserId: currentPlayer.id,
            type: "draw",
            payload: { drawPenalty: state.drawPenalty },
            createdAt: now(),
          });

          await patchGameFromState(ctx, game, players, drawResult.gameState);
        } else {
          await ctx.db.insert("gameActions", {
            gameId: game._id,
            actorUserId: currentPlayer.id,
            type: "play",
            payload: {
              cardId: move.cardId,
              selectedColor: move.selectedColor,
              targetPlayerId: move.targetPlayerId,
            },
            createdAt: now(),
          });

          await patchGameFromState(ctx, game, players, result.gameState);
        }
      } else {
        const drawResult = drawCardsFromDeck(state, currentPlayer.id);
        if ("error" in drawResult) {
          return toGameState(game, players);
        }

        await ctx.db.insert("gameActions", {
          gameId: game._id,
          actorUserId: currentPlayer.id,
          type: "draw",
          payload: { drawPenalty: state.drawPenalty },
          createdAt: now(),
        });

        await patchGameFromState(ctx, game, players, drawResult.gameState);
      }

      const updatedGame = await ctx.db.get(game._id);
      if (!updatedGame) {
        throw new ConvexError("Failed to update game");
      }
      Object.assign(game, updatedGame);
    }

    const finalPlayers = await loadPlayers(ctx, game._id);
    return toGameState(game, finalPlayers);
  },
});
