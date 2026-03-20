import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { callUnoAction } from "~/lib/game/db";

interface UnoRequestBody {
  playerId: string;
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = (await request.json()) as UnoRequestBody;
  const { playerId } = body;

  const result = await callUnoAction(id, playerId);

  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ game: result.game });
}
