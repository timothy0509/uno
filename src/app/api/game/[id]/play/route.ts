import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { playCardAction } from "~/lib/game/db";

interface PlayRequestBody {
  playerId: string;
  cardId: string;
  selectedColor?: string;
  targetPlayerId?: string;
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = (await request.json()) as PlayRequestBody;
  const { playerId, cardId, selectedColor, targetPlayerId } = body;

  const result = await playCardAction(
    id,
    playerId,
    cardId,
    selectedColor,
    targetPlayerId,
  );

  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ game: result.game });
}
