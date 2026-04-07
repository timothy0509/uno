import { convexBetterAuthNextJs } from "@convex-dev/better-auth/nextjs";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const convexSiteUrl = process.env.NEXT_PUBLIC_CONVEX_SITE_URL;

if (!convexUrl) {
  throw new Error(
    "Missing NEXT_PUBLIC_CONVEX_URL for auth proxy route configuration.",
  );
}

if (!convexSiteUrl) {
  throw new Error(
    "Missing NEXT_PUBLIC_CONVEX_SITE_URL for auth proxy route configuration.",
  );
}

let parsedSiteUrl: URL;

try {
  parsedSiteUrl = new URL(convexSiteUrl);
} catch {
  throw new Error("NEXT_PUBLIC_CONVEX_SITE_URL must be a valid URL.");
}

if (!parsedSiteUrl.hostname.endsWith(".convex.site")) {
  throw new Error(
    "NEXT_PUBLIC_CONVEX_SITE_URL must use a .convex.site domain.",
  );
}

if (parsedSiteUrl.pathname !== "/") {
  throw new Error(
    "NEXT_PUBLIC_CONVEX_SITE_URL must not include a path. Use format: https://<deployment>.convex.site",
  );
}

const { handler } = convexBetterAuthNextJs({
  convexUrl,
  convexSiteUrl: parsedSiteUrl.origin,
});

export async function GET(request: Request) {
  return handler.GET(request);
}

export async function POST(request: Request) {
  return handler.POST(request);
}
