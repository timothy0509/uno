import { internalMutationGeneric } from "convex/server";

export const backfillIsBot = internalMutationGeneric({
  args: {},
  handler: async (ctx) => {
    const players = await ctx.db.query("gamePlayers").collect();
    let updated = 0;
    for (const player of players) {
      if (player.isBot === undefined) {
        await ctx.db.patch(player._id, { isBot: false });
        updated++;
      }
    }
    return { updated, total: players.length };
  },
});
