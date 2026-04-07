import { componentsGeneric, httpRouter } from "convex/server";
import { createClient } from "@convex-dev/better-auth";
import { betterAuth } from "better-auth";
import { convex as convexPlugin } from "@convex-dev/better-auth/plugins";

import authConfig from "./auth.config";
const components = componentsGeneric();

const http = httpRouter();
const authClient = createClient(components.betterAuth as never);

function createAuth(ctx: object) {
  return betterAuth({
    basePath: "/api/auth",
    emailAndPassword: {
      enabled: false,
    },
    plugins: [
      convexPlugin({
        authConfig,
      }),
    ],
    database: authClient.adapter(ctx as never),
  });
}

authClient.registerRoutesLazy(http, createAuth, {
  basePath: "/api/auth",
});

export default http;
