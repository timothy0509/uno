import { NextResponse } from "next/server";
import { createGame, generateGameCode } from "~/lib/game/store";

export async function POST() {
  try {
    const gameState = createGame();
    const code = generateGameCode();

    return NextResponse.json({
      game: gameState,
      code,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to create game" },
      { status: 500 },
    );
  }
}
