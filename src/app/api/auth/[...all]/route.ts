import { convexBetterAuthNextJs } from "@convex-dev/better-auth/nextjs";

function getHandler() {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
  const convexSiteUrl = process.env.NEXT_PUBLIC_CONVEX_SITE_URL;

  if (!convexUrl || !convexSiteUrl) {
    throw new Error(
      "Missing NEXT_PUBLIC_CONVEX_URL or NEXT_PUBLIC_CONVEX_SITE_URL",
    );
  }

  return convexBetterAuthNextJs({
    convexUrl,
    convexSiteUrl,
  }).handler;
}

export async function GET(request: Request) {
  return await getHandler().GET(request);
}

export async function POST(request: Request) {
  return await getHandler().POST(request);
}
