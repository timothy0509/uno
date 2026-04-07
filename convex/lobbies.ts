import { mutationGeneric, queryGeneric } from "convex/server";
import { v } from "convex/values";

export const listOpen = queryGeneric({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("lobbies")
      .filter((q: any) => q.eq(q.field("status"), "waiting"))
      .collect();
  },
});

export const create = mutationGeneric({
  args: {
    code: v.string(),
    hostUserId: v.string(),
    maxPlayers: v.number(),
  },
  handler: async (ctx, args) => {
    const timestamp = Date.now();
    return await ctx.db.insert("lobbies", {
      code: args.code,
      hostUserId: args.hostUserId,
      status: "waiting",
      maxPlayers: args.maxPlayers,
      createdAt: timestamp,
      updatedAt: timestamp,
    });
  },
});
