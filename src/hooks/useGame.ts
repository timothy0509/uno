"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import type { GameState, Color } from "~/types/game";

interface ApiResponse {
  game?: GameState;
  error?: string;
  code?: string;
}

interface SSEEvent {
  type: string;
  game?: GameState;
  message?: string;
}

async function fetchGame(gameId: string): Promise<GameState | null> {
  try {
    const res = await fetch(`/api/game/${gameId}`);
    if (!res.ok) return null;
    const data = (await res.json()) as ApiResponse;
    return data.game ?? null;
  } catch {
    return null;
  }
}

export function useGame(gameId: string | null, playerId?: string | null) {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const playerIdRef = useRef(playerId ?? "current");

  useEffect(() => {
    playerIdRef.current = playerId ?? "current";
  }, [playerId]);

  const refresh = useCallback(async () => {
    if (!gameId) return;
    setIsLoading(true);
    setError(null);
    try {
      const state = await fetchGame(gameId);
      setGameState(state);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to fetch game");
    } finally {
      setIsLoading(false);
    }
  }, [gameId]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  useEffect(() => {
    if (!gameId || gameState?.status === "FINISHED") return;

    const eventSource = new EventSource(`/api/game/${gameId}/subscribe`);

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data as string) as SSEEvent;
        if (data.type === "game-state-update" && data.game) {
          setGameState(data.game);
        }
      } catch {
        // Ignore parse errors
      }
    };

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [gameId, gameState?.status]);

  const createGame = useCallback(async (): Promise<{
    gameId: string;
    gameState: GameState;
  } | null> => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/game/create", { method: "POST" });
      const data = (await res.json()) as ApiResponse;
      if (!res.ok) {
        setError(data.error ?? "Failed to create game");
        return null;
      }
      if (data.game) {
        setGameState(data.game);
        return { gameId: data.game.id, gameState: data.game };
      }
      return null;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to create game");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const joinGame = useCallback(
    async (
      gId: string,
      playerId: string,
      playerName: string,
    ): Promise<GameState | null> => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/game/${gId}/join`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ playerId, playerName }),
        });
        const data = (await res.json()) as ApiResponse;
        if (!res.ok) {
          setError(data.error ?? "Failed to join game");
          return null;
        }
        if (data.game) {
          setGameState(data.game);
          return data.game;
        }
        return null;
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to join game");
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const startGame = useCallback(
    async (gId: string): Promise<GameState | null> => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/game/${gId}/start`, { method: "POST" });
        const data = (await res.json()) as ApiResponse;
        if (!res.ok) {
          setError(data.error ?? "Failed to start game");
          return null;
        }
        if (data.game) {
          setGameState(data.game);
          return data.game;
        }
        return null;
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to start game");
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const playCard = useCallback(
    async (
      cardId: string,
      selectedColor?: Color,
      targetPlayerId?: string,
    ): Promise<GameState | null> => {
      if (!gameId) return null;
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/game/${gameId}/play`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            playerId: playerIdRef.current,
            cardId,
            selectedColor,
            targetPlayerId,
          }),
        });
        const data = (await res.json()) as ApiResponse;
        if (!res.ok) {
          setError(data.error ?? "Cannot play this card");
          return null;
        }
        if (data.game) {
          setGameState(data.game);
          return data.game;
        }
        return null;
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to play card");
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [gameId],
  );

  const drawCards = useCallback(async (): Promise<GameState | null> => {
    if (!gameId) return null;
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/game/${gameId}/draw`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playerId: playerIdRef.current }),
      });
      const data = (await res.json()) as ApiResponse;
      if (!res.ok) {
        setError(data.error ?? "Failed to draw cards");
        return null;
      }
      if (data.game) {
        setGameState(data.game);
        return data.game;
      }
      return null;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to draw cards");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [gameId]);

  const callUno = useCallback(async (): Promise<GameState | null> => {
    if (!gameId) return null;
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/game/${gameId}/uno`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playerId: playerIdRef.current }),
      });
      const data = (await res.json()) as ApiResponse;
      if (!res.ok) {
        setError(data.error ?? "Failed to call UNO");
        return null;
      }
      if (data.game) {
        setGameState(data.game);
        return data.game;
      }
      return null;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to call UNO");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [gameId]);

  return {
    gameState,
    isLoading,
    error,
    refresh,
    createGame,
    joinGame,
    startGame,
    playCard,
    drawCards,
    callUno,
    setError,
  };
}
