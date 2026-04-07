"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGame } from "~/hooks/useGame";
import {
  useAuthSession,
  signInWithEmail,
  signUpWithEmail,
} from "~/lib/auth-client";

export default function LobbyPage() {
  const router = useRouter();
  const session = useAuthSession();
  const {
    createGame,
    joinGame,
    error,
    setError,
    authError,
    retryAnonymousAuth,
  } = useGame(null);
  const [playerName, setPlayerName] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Auth form state
  const [authMode, setAuthMode] = useState<"none" | "signin" | "signup">(
    "none",
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthSubmitting, setIsAuthSubmitting] = useState(false);
  const [authFormError, setAuthFormError] = useState<string | null>(null);

  const isAuthenticating = session.isPending;
  const isAuthenticated = !!session.data?.user?.id;

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

    if (!isAuthenticated) {
      setError("Please sign in first");
      return;
    }

    setIsLoading(true);
    localStorage.setItem("uno-player-name", playerName);

    const result = await createGame();
    if (result) {
      await joinGame(result.gameId, playerName);
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

    if (!isAuthenticated) {
      setError("Please sign in first");
      return;
    }

    setIsLoading(true);
    localStorage.setItem("uno-player-name", playerName);

    const result = await joinGame(gameCode.toUpperCase(), playerName);
    if (result) {
      router.push(`/game/${gameCode.toUpperCase()}`);
    }
    setIsLoading(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthFormError(null);

    if (isAuthSubmitting) {
      return;
    }

    if (!email.trim() || !password.trim()) {
      setAuthFormError("Please enter email and password");
      return;
    }

    setIsAuthSubmitting(true);
    try {
      const result = await signInWithEmail(email, password);
      if (result.error) {
        setAuthFormError(result.error);
      }
    } catch (e) {
      setAuthFormError(
        e instanceof Error ? e.message : "Unable to sign in right now",
      );
    } finally {
      setIsAuthSubmitting(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthFormError(null);

    if (isAuthSubmitting) {
      return;
    }

    if (!email.trim() || !password.trim()) {
      setAuthFormError("Please enter email and password");
      return;
    }

    if (password.length < 6) {
      setAuthFormError("Password must be at least 6 characters");
      return;
    }

    setIsAuthSubmitting(true);
    try {
      const result = await signUpWithEmail(
        email,
        password,
        playerName.trim() || "Player",
      );
      if (result.error) {
        setAuthFormError(result.error);
      }
    } catch (e) {
      setAuthFormError(
        e instanceof Error ? e.message : "Unable to create account right now",
      );
    } finally {
      setIsAuthSubmitting(false);
    }
  };

  const handleGuestSignIn = async () => {
    if (isAuthSubmitting) {
      return;
    }

    setIsAuthSubmitting(true);
    try {
      await retryAnonymousAuth();
    } finally {
      setIsAuthSubmitting(false);
    }
  };

  // Show loading while checking auth status
  if (isAuthenticating) {
    return (
      <main className="gradient-bg flex min-h-screen flex-col items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 text-center">
          <h1 className="animate-fade-in-up font-display text-glow text-4xl font-extrabold text-white">
            UNO <span className="text-red-500">No Mercy</span>
          </h1>
          <div className="animate-fade-in-scale glass-shimmer glass card-shadow p-8">
            <div className="flex flex-col items-center gap-4">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/20 border-t-red-500"></div>
              <p className="text-white/70">Connecting...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Show auth form if not authenticated
  if (!isAuthenticated) {
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
              Sign in to play
            </p>
          </div>

          <div className="animate-fade-in-scale glass-shimmer glass card-shadow space-y-6 p-8">
            {authError && (
              <div className="rounded-lg border border-yellow-500/50 bg-yellow-500/20 px-4 py-3 text-sm text-yellow-200">
                <p className="font-medium">Connection issue detected</p>
                <p className="mt-1 text-xs opacity-80">{authError}</p>
              </div>
            )}

            {authMode === "none" && (
              <div className="space-y-4">
                <button
                  onClick={handleGuestSignIn}
                  disabled={isAuthSubmitting}
                  className="button-y2k w-full py-3 text-lg font-bold disabled:opacity-50"
                >
                  {isAuthSubmitting ? "Connecting..." : "Continue as Guest"}
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-transparent px-4 text-white/50">
                      or
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setAuthMode("signin")}
                  className="button-secondary w-full py-3 text-lg font-medium"
                >
                  Sign In with Email
                </button>
                <button
                  onClick={() => setAuthMode("signup")}
                  className="text-sm text-white/60 underline hover:text-white"
                >
                  Create an account
                </button>
              </div>
            )}

            {(authMode === "signin" || authMode === "signup") && (
              <form
                onSubmit={authMode === "signin" ? handleSignIn : handleSignUp}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-glow w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-glow w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    placeholder={
                      authMode === "signup"
                        ? "Min 6 characters"
                        : "Enter password"
                    }
                    minLength={6}
                    required
                  />
                </div>

                {authMode === "signup" && (
                  <div>
                    <label
                      htmlFor="playerName"
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      Your Name (optional)
                    </label>
                    <input
                      type="text"
                      id="playerName"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      className="input-glow w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      placeholder="Enter your name"
                      maxLength={20}
                    />
                  </div>
                )}

                {authFormError && (
                  <div className="rounded-lg border border-red-500/50 bg-red-500/20 px-4 py-3 text-sm text-red-200">
                    {authFormError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isAuthSubmitting}
                  className="button-y2k w-full py-3 text-lg font-bold disabled:opacity-50"
                >
                  {isAuthSubmitting
                    ? "Please wait..."
                    : authMode === "signin"
                      ? "Sign In"
                      : "Create Account"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAuthMode("none");
                    setAuthFormError(null);
                  }}
                  className="w-full text-sm text-white/60 hover:text-white"
                >
                  ← Back
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    );
  }

  // Show game lobby when authenticated
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
