"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGame } from "~/hooks/useGame";

export default function LobbyPage() {
  const router = useRouter();
  const { createGame, joinGame, error, setError } = useGame(null);
  const [playerName, setPlayerName] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("uno-player-name");
    if (savedName) {
      setPlayerName(savedName);
    }
  }, []);

  const handleCreateGame = async () => {
    if (!playerName.trim()) {
      setError("Please enter your name");
      return;
    }

    setIsLoading(true);
    localStorage.setItem("uno-player-name", playerName);

    const result = await createGame();
    if (result) {
      const playerId = crypto.randomUUID();
      localStorage.setItem("uno-player-id", playerId);
      await joinGame(result.gameId, playerId, playerName);
      router.push(`/game/${result.gameId}`);
    }
    setIsLoading(false);
  };

  const handleJoinGame = async () => {
    if (!playerName.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!gameCode.trim()) {
      setError("Please enter a game code");
      return;
    }

    setIsLoading(true);
    localStorage.setItem("uno-player-name", playerName);

    const playerId =
      localStorage.getItem("uno-player-id") ?? crypto.randomUUID();
    localStorage.setItem("uno-player-id", playerId);

    const result = await joinGame(gameCode.toUpperCase(), playerId, playerName);
    if (result) {
      router.push(`/game/${gameCode.toUpperCase()}`);
    }
    setIsLoading(false);
  };

  return (
    <main className="gradient-bg flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="animate-fade-in-up font-display text-glow text-4xl font-extrabold text-white">
            UNO <span className="text-red-500">No Mercy</span>
          </h1>
          <p
            className="animate-fade-in-up mt-2 text-white/70"
            style={{ animationDelay: "80ms" }}
          >
            Join or create a game
          </p>
        </div>

        <div className="animate-fade-in-scale glass-shimmer glass card-shadow space-y-6 p-8">
          <div>
            <label
              htmlFor="playerName"
              className="mb-2 block text-sm font-medium text-white/80"
            >
              Your Name
            </label>
            <input
              type="text"
              id="playerName"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="input-glow w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
              placeholder="Enter your name"
              maxLength={20}
            />
          </div>

          <div className="border-t border-white/10 pt-6">
            <button
              onClick={handleCreateGame}
              disabled={isLoading}
              className="button-y2k w-full py-3 text-lg font-bold disabled:opacity-50"
            >
              {isLoading ? "Creating..." : "Create New Game"}
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-transparent px-4 text-white/50">or</span>
            </div>
          </div>

          <div>
            <label
              htmlFor="gameCode"
              className="mb-2 block text-sm font-medium text-white/80"
            >
              Game Code
            </label>
            <input
              type="text"
              id="gameCode"
              value={gameCode}
              onChange={(e) => setGameCode(e.target.value.toUpperCase())}
              className="input-glow w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-mono text-white placeholder-white/40 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter 6-character code"
              maxLength={6}
            />
          </div>

          <button
            onClick={handleJoinGame}
            disabled={isLoading || gameCode.length !== 6}
            className="button-secondary w-full py-3 text-lg font-medium disabled:opacity-50"
          >
            {isLoading ? "Joining..." : "Join Game"}
          </button>

          {error && (
            <div className="animate-fade-in-scale rounded-lg border border-red-500/50 bg-red-500/20 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
