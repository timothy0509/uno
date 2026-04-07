import { componentsGeneric, httpRouter } from "convex/server";
import { createClient } from "@convex-dev/better-auth";
import { betterAuth } from "better-auth";
import { convex as convexPlugin } from "@convex-dev/better-auth/plugins";

import authConfig from "./auth.config";
const components = componentsGeneric();

const http = httpRouter();
const authClient = createClient(components.betterAuth as never);

function assertAuthSecretsConfigured() {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  const hasSecret =
    Boolean(process.env.BETTER_AUTH_SECRET) ||
    Boolean(process.env.AUTH_SECRET) ||
    Boolean(process.env.BETTER_AUTH_SECRETS);

  if (!hasSecret) {
    throw new Error(
      "Missing BETTER_AUTH_SECRET (or AUTH_SECRET/BETTER_AUTH_SECRETS) in production Convex environment.",
    );
  }
}

function createAuth(ctx: object) {
  assertAuthSecretsConfigured();

  return betterAuth({
    basePath: "/api/auth",
    emailAndPassword: {
      enabled: true,
      minPasswordLength: 6,
      maxPasswordLength: 128,
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
