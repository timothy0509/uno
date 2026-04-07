"use client";

import { convexClient } from "@convex-dev/better-auth/client/plugins";
import type { AuthClient } from "@convex-dev/better-auth/react";
import { createAuthClient } from "better-auth/react";
import { anonymousClient } from "better-auth/client/plugins";

const rawAuthClient: unknown = createAuthClient({
  basePath: "/api/auth",
  plugins: [convexClient(), anonymousClient()],
});

export type SessionSnapshot = {
  data: {
    session?: unknown;
    user?: { id?: string | null } | null;
  } | null;
  isPending: boolean;
};

type AuthClientContract = {
  useSession: () => SessionSnapshot;
  signIn: {
    anonymous: () => Promise<unknown>;
    email: (credentials: {
      email: string;
      password: string;
    }) => Promise<{ error?: { message: string } | null }>;
  };
  signUp: {
    email: (credentials: {
      email: string;
      password: string;
      name: string;
    }) => Promise<{
      error?: { message: string } | null;
      data?: { user?: { id: string } | null } | null;
    }>;
  };
};

const appAuthClient = rawAuthClient as AuthClientContract;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const authClient = rawAuthClient as AuthClient;

export function useAuthSession() {
  return appAuthClient.useSession();
}

function extractAuthErrorMessage(value: unknown, fallback: string): string {
  if (value instanceof Error) {
    return value.message;
  }

  if (
    typeof value === "object" &&
    value !== null &&
    "error" in value &&
    typeof value.error === "object" &&
    value.error !== null &&
    "message" in value.error &&
    typeof value.error.message === "string"
  ) {
    return value.error.message;
  }

  return fallback;
}

export async function signInAnonymous(): Promise<{ error?: string | null }> {
  try {
    await appAuthClient.signIn.anonymous();
    return { error: null };
  } catch (e) {
    return {
      error: e instanceof Error ? e.message : "Anonymous sign-in failed",
    };
  }
}

export async function signInWithEmail(
  email: string,
  password: string,
): Promise<{ error?: string | null }> {
  try {
    const result = await appAuthClient.signIn.email({ email, password });
    if (result.error) {
      return { error: result.error.message };
    }
    return { error: null };
  } catch (e) {
    return {
      error: extractAuthErrorMessage(e, "Email sign-in failed"),
    };
  }
}

export async function signUpWithEmail(
  email: string,
  password: string,
  name: string,
): Promise<{ error?: string | null; userId?: string | null }> {
  try {
    const result = await appAuthClient.signUp.email({ email, password, name });
    if (result.error) {
      return { error: result.error.message };
    }
    return { error: null, userId: result.data?.user?.id ?? null };
  } catch (e) {
    return {
      error: extractAuthErrorMessage(e, "Email sign-up failed"),
      userId: null,
    };
  }
}
