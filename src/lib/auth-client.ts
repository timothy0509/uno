"use client";

import { createAuthClient } from "better-auth/react";
import { anonymousClient } from "better-auth/client/plugins";
import { convexClient } from "@convex-dev/better-auth/client/plugins";

const rawAuthClient: unknown = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_CONVEX_SITE_URL,
  plugins: [anonymousClient(), convexClient()],
});

type SessionSnapshot = {
  data: {
    session?: unknown;
    user?: { id?: string | null } | null;
  } | null;
  isPending: boolean;
};

type AuthClientContract = {
  useSession: () => SessionSnapshot;
  signIn?: {
    anonymous?: () => Promise<unknown>;
  };
};

export const authClient = rawAuthClient as AuthClientContract;

export function useAuthSession() {
  return authClient.useSession();
}

export async function signInAnonymous() {
  await authClient.signIn?.anonymous?.();
}
