"use client";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { ReactNode } from "react";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import type { AuthClient } from "@convex-dev/better-auth/react";

import { authClient } from "~/lib/auth-client";
import { convex } from "~/lib/convex-client";

const providerAuthClient = authClient as unknown as AuthClient;

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ConvexBetterAuthProvider client={convex} authClient={providerAuthClient}>
      {children}
    </ConvexBetterAuthProvider>
  );
}
