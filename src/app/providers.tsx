"use client";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { ReactNode } from "react";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";

import { authClient } from "~/lib/auth-client";
import { convex } from "~/lib/convex-client";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ConvexBetterAuthProvider client={convex} authClient={authClient}>
      {children}
    </ConvexBetterAuthProvider>
  );
}
