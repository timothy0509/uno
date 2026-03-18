import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getGame, joinGame } from "~/lib/game/store";

interface JoinRequestBody {
  playerId: string;
  playerName: string;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const game = getGame(id);

  if (!game) {
    return NextResponse.json({ error: "Game not found" }, { status: 404 });
  }

  return NextResponse.json({ game });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = (await request.json()) as JoinRequestBody;
  const { playerId, playerName } = body;

  const result = joinGame(id, playerId, playerName);

  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ game: result });
}
