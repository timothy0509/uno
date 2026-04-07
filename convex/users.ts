import { queryGeneric } from "convex/server";

import { requireUserId } from "./lib/auth";

export const me = queryGeneric({
  args: {},
  handler: async (ctx) => {
    const userId = await requireUserId(ctx);
    return { id: userId };
  },
});
