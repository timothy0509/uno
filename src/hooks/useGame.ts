"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { makeFunctionReference } from "convex/server";

import { signInAnonymous, useAuthSession } from "~/lib/auth-client";
import type { SessionSnapshot } from "~/lib/auth-client";
import type { Color, GameState } from "~/types/game";

const getGameRef = makeFunctionReference<
  "query",
  { gameId: string },
  GameState | null
>("games:get");
const createGameRef = makeFunctionReference<
  "mutation",
  Record<string, never>,
  { gameId: string; gameState: GameState }
>("games:create");
const joinGameRef = makeFunctionReference<
  "mutation",
  { gameId: string; playerName: string },
  GameState
>("games:join");
const startGameRef = makeFunctionReference<
  "mutation",
  { gameId: string },
  GameState
>("games:start");
const playCardRef = makeFunctionReference<
  "mutation",
  {
    gameId: string;
    cardId: string;
    selectedColor?: Color;
    targetPlayerId?: string;
  },
  GameState
>("games:playCard");
const drawRef = makeFunctionReference<
  "mutation",
  { gameId: string },
  GameState
>("games:draw");
const callUnoRef = makeFunctionReference<
  "mutation",
  { gameId: string },
  GameState
>("games:callUno");
const chooseRouletteRef = makeFunctionReference<
  "mutation",
  { gameId: string; selectedColor: Color },
  GameState
>("games:chooseRoulette");

export function useGame(
  gameId: string | null,
  _legacyPlayerId?: string | null,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const isAnonymousSignInInFlight = useRef(false);

  const session: SessionSnapshot = useAuthSession();
  const gameState = useQuery(getGameRef, gameId ? { gameId } : "skip") ?? null;

  const createGameMutation = useMutation(createGameRef);
  const joinGameMutation = useMutation(joinGameRef);
  const startGameMutation = useMutation(startGameRef);
  const playCardMutation = useMutation(playCardRef);
  const drawMutation = useMutation(drawRef);
  const callUnoMutation = useMutation(callUnoRef);
  const chooseRouletteMutation = useMutation(chooseRouletteRef);

  const attemptAnonymousAuth = useCallback(async () => {
    if (isAnonymousSignInInFlight.current) {
      return;
    }

    isAnonymousSignInInFlight.current = true;
    try {
      const result = await signInAnonymous();
      if (result.error) {
        setAuthError(result.error);
      }
    } finally {
      isAnonymousSignInInFlight.current = false;
    }
  }, []);

  const retryAnonymousAuth = useCallback(async () => {
    setAuthError(null);
    await attemptAnonymousAuth();
  }, [attemptAnonymousAuth]);

  useEffect(() => {
    if (session.isPending || session.data?.session) {
      return;
    }

    void attemptAnonymousAuth();
  }, [attemptAnonymousAuth, session.data?.session, session.isPending]);

  const withLoading = useCallback(
    async <T>(fn: () => Promise<T>): Promise<T | null> => {
      setIsLoading(true);
      setError(null);
      try {
        return await fn();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Request failed");
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const createGame = useCallback(async (): Promise<{
    gameId: string;
    gameState: GameState;
  } | null> => {
    return await withLoading(async () => await createGameMutation({}));
  }, [createGameMutation, withLoading]);

  const joinGame = useCallback(
    async (
      gId: string,
      playerNameOrLegacyPlayerId: string,
      maybePlayerName?: string,
    ): Promise<GameState | null> => {
      const playerName = maybePlayerName ?? playerNameOrLegacyPlayerId;
      return await withLoading(
        async () =>
          await joinGameMutation({
            gameId: gId,
            playerName,
          }),
      );
    },
    [joinGameMutation, withLoading],
  );

  const startGame = useCallback(
    async (gId: string): Promise<GameState | null> => {
      return await withLoading(
        async () => await startGameMutation({ gameId: gId }),
      );
    },
    [startGameMutation, withLoading],
  );

  const playCard = useCallback(
    async (
      cardId: string,
      selectedColor?: Color,
      targetPlayerId?: string,
    ): Promise<GameState | null> => {
      if (!gameId) {
        return null;
      }
      return await withLoading(
        async () =>
          await playCardMutation({
            gameId,
            cardId,
            selectedColor,
            targetPlayerId,
          }),
      );
    },
    [gameId, playCardMutation, withLoading],
  );

  const drawCards = useCallback(async (): Promise<GameState | null> => {
    if (!gameId) {
      return null;
    }
    return await withLoading(async () => await drawMutation({ gameId }));
  }, [drawMutation, gameId, withLoading]);

  const callUno = useCallback(async (): Promise<GameState | null> => {
    if (!gameId) {
      return null;
    }
    return await withLoading(async () => await callUnoMutation({ gameId }));
  }, [callUnoMutation, gameId, withLoading]);

  const chooseRoulette = useCallback(
    async (selectedColor: Color): Promise<GameState | null> => {
      if (!gameId) {
        return null;
      }
      return await withLoading(
        async () => await chooseRouletteMutation({ gameId, selectedColor }),
      );
    },
    [chooseRouletteMutation, gameId, withLoading],
  );

  const refresh = useCallback(async () => {
    return;
  }, []);

  return useMemo(
    () => ({
      gameState,
      isLoading,
      error,
      authError,
      refresh,
      createGame,
      joinGame,
      startGame,
      playCard,
      drawCards,
      callUno,
      chooseRoulette,
      setError,
      setAuthError,
      retryAnonymousAuth,
      currentUserId: session.data?.user?.id ?? null,
    }),
    [
      callUno,
      chooseRoulette,
      createGame,
      drawCards,
      error,
      authError,
      gameState,
      isLoading,
      joinGame,
      playCard,
      refresh,
      retryAnonymousAuth,
      session.data?.user?.id,
      startGame,
    ],
  );
}
