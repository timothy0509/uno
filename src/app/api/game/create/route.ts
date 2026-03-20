import { NextResponse } from "next/server";
import { createGame, getGameById } from "~/lib/game/db";

export async function POST() {
  try {
    const gameState = await createGame();

    return NextResponse.json({
      game: gameState,
      code: gameState.id.slice(0, 6).toUpperCase(),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to create game" },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const game = await getGameById(code);
    if (!game) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 });
    }
    return NextResponse.json({ game });
  }

  return NextResponse.json({ error: "Game code required" }, { status: 400 });
}
