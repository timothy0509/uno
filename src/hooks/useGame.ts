"use client";

import { useCallback, useMemo, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { makeFunctionReference } from "convex/server";

import { useAuthSession } from "~/lib/auth-client";
import type { SessionSnapshot } from "~/lib/auth-client";
import type { Color, GameState } from "~/types/game";

interface GameAction {
  _id: string;
  _creationTime: number;
  gameId: string;
  actorUserId: string;
  type: string;
  payload?: unknown;
  createdAt: number;
}

const getGameRef = makeFunctionReference<
  "query",
  { gameId: string },
  GameState | null
>("games:get");
const getActionsRef = makeFunctionReference<
  "query",
  { gameId: string; limit?: number },
  GameAction[]
>("games:getActions");
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

  const session: SessionSnapshot = useAuthSession();
  const gameState = useQuery(getGameRef, gameId ? { gameId } : "skip") ?? null;
  const actionsRaw = useQuery(getActionsRef, gameId ? { gameId } : "skip");
  const actions = useMemo(() => actionsRaw ?? [], [actionsRaw]);

  const createGameMutation = useMutation(createGameRef);
  const joinGameMutation = useMutation(joinGameRef);
  const startGameMutation = useMutation(startGameRef);
  const playCardMutation = useMutation(playCardRef);
  const drawMutation = useMutation(drawRef);
  const callUnoMutation = useMutation(callUnoRef);
  const chooseRouletteMutation = useMutation(chooseRouletteRef);

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
      actions,
      isLoading,
      error,
      refresh,
      createGame,
      joinGame,
      startGame,
      playCard,
      drawCards,
      callUno,
      chooseRoulette,
      setError,
      currentUserId: session.data?.user?.id ?? null,
    }),
    [
      actions,
      callUno,
      chooseRoulette,
      createGame,
      drawCards,
      error,
      gameState,
      isLoading,
      joinGame,
      playCard,
      refresh,
      session.data?.user?.id,
      startGame,
    ],
  );
}
