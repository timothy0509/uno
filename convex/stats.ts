import { queryGeneric } from "convex/server";
import { v } from "convex/values";

export const getForUser = queryGeneric({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("userStats")
      .withIndex("by_user", (q: any) => q.eq("userId", args.userId))
      .unique();
  },
});
