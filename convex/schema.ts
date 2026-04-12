import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  games: defineTable({
    code: v.string(),
    createdByUserId: v.optional(v.string()),
    status: v.union(
      v.literal("WAITING"),
      v.literal("PLAYING"),
      v.literal("FINISHED"),
    ),
    deck: v.array(v.any()),
    knockedOutCards: v.optional(v.array(v.any())),
    discardPile: v.array(v.any()),
    currentPlayerIndex: v.number(),
    direction: v.union(v.literal(1), v.literal(-1)),
    drawPenalty: v.number(),
    pendingRoulette: v.optional(
      v.union(v.object({ chooserPlayerId: v.string() }), v.null()),
    ),
    currentColor: v.union(
      v.literal("red"),
      v.literal("blue"),
      v.literal("green"),
      v.literal("yellow"),
      v.null(),
    ),
    lastPlayedCard: v.union(v.any(), v.null()),
    lastPlayedBy: v.optional(v.union(v.string(), v.null())),
    winner: v.union(v.string(), v.null()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_code", ["code"]),

  gamePlayers: defineTable({
    gameId: v.id("games"),
    userId: v.string(),
    name: v.string(),
    position: v.number(),
    cards: v.array(v.any()),
    isKnockedOut: v.boolean(),
    calledUno: v.boolean(),
  })
    .index("by_game", ["gameId"])
    .index("by_game_user", ["gameId", "userId"]),

  gameActions: defineTable({
    gameId: v.id("games"),
    actorUserId: v.string(),
    type: v.string(),
    payload: v.optional(v.any()),
    createdAt: v.number(),
  }).index("by_game", ["gameId"]),

  lobbies: defineTable({
    code: v.string(),
    status: v.string(),
    hostUserId: v.string(),
    maxPlayers: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_code", ["code"])
    .index("by_host", ["hostUserId"]),

  lobbyPlayers: defineTable({
    lobbyId: v.id("lobbies"),
    userId: v.string(),
    name: v.string(),
    isReady: v.boolean(),
    joinedAt: v.number(),
  })
    .index("by_lobby", ["lobbyId"])
    .index("by_lobby_user", ["lobbyId", "userId"]),

  userStats: defineTable({
    userId: v.string(),
    gamesPlayed: v.number(),
    wins: v.number(),
    losses: v.number(),
    unoCalls: v.number(),
    cardsPlayed: v.number(),
    updatedAt: v.number(),
  }).index("by_user", ["userId"]),
});
