import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { startGame } from "~/lib/game/store";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const result = startGame(id);

  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ game: result });
}
