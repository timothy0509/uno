"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useGame } from "~/hooks/useGame";
import { getNextPlayerIndex } from "~/lib/game/engine";
import type { Card, Color } from "~/types/game";
import type { ToastMessage } from "~/components/game/gameHelpers";
import { ColorPicker } from "~/components/game/ColorPicker";
import { TargetPicker } from "~/components/game/TargetPicker";
import { OpponentSeat } from "~/components/game/OpponentSeat";
import { PlayerHand } from "~/components/game/PlayerHand";
import { DiscardArea } from "~/components/game/DiscardArea";
import { GameTopBar } from "~/components/game/GameTopBar";
import { TurnIndicator } from "~/components/game/TurnIndicator";
import { ActionFeed } from "~/components/game/ActionFeed";
import { HelpModal } from "~/components/game/HelpModal";

export default function GamePage() {
  const params = useParams();
  const router = useRouter();
  const rawId = params.id;
  const gameId =
    typeof rawId === "string" ? rawId : Array.isArray(rawId) ? rawId[0] : null;

  const [playerName, setPlayerName] = useState<string>("");
  const [hasJoined, setHasJoined] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [colorPickerMode, setColorPickerMode] = useState<
    "playWild" | "roulette"
  >("playWild");
  const [pendingCardId, setPendingCardId] = useState<string | null>(null);
  const [pendingTargetCardId, setPendingTargetCardId] = useState<string | null>(
    null,
  );
  const [showHelp, setShowHelp] = useState(false);
  const [showActionFeed, setShowActionFeed] = useState(true);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [rouletteAnimating, setRouletteAnimating] = useState(false);
  const [rouletteVisibleCount, setRouletteVisibleCount] = useState(0);
  const [rouletteDrawnCards, setRouletteDrawnCards] = useState<Card[]>([]);
  const toastIdRef = useRef(0);
  const prevTurnRef = useRef<number | null>(null);
  const prevUnoRef = useRef<Set<string>>(new Set());
  const preRouletteHandSizeRef = useRef(0);
  const rouletteTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const {
    gameState,
    actions,
    isLoading,
    error,
    joinGame,
    startGame,
    playCard,
    drawCards,
    callUno,
    chooseRoulette,
    refresh,
    currentUserId,
  } = useGame(gameId ?? null);

  useEffect(() => {
    const name = localStorage.getItem("uno-player-name");
    if (name) setPlayerName(name);
  }, []);

  useEffect(() => {
    if (gameId && currentUserId && playerName && !hasJoined) {
      void joinGame(gameId, playerName);
      setHasJoined(true);
    }
  }, [currentUserId, gameId, hasJoined, joinGame, playerName]);

  const addToast = useCallback(
    (text: string, type: ToastMessage["type"] = "info") => {
      const id = ++toastIdRef.current;
      setToasts((prev) => [...prev, { id, text, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    },
    [],
  );

  useEffect(() => {
    if (!gameState || !currentUserId) return;
    const currentTurnIdx = gameState.currentPlayerIndex;
    const currentPlayer = gameState.players[currentTurnIdx];
    if (
      prevTurnRef.current !== null &&
      prevTurnRef.current !== currentTurnIdx &&
      currentPlayer?.id === currentUserId
    ) {
      addToast("Your turn!", "success");
    }
    prevTurnRef.current = currentTurnIdx;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState?.currentPlayerIndex, currentUserId, addToast]);

  useEffect(() => {
    if (!gameState) return;
    const currentUnoPlayers = new Set(
      gameState.players
        .filter((p) => p.cards.length === 1 && !p.isKnockedOut && p.calledUno)
        .map((p) => p.id),
    );
    for (const playerId of currentUnoPlayers) {
      if (!prevUnoRef.current.has(playerId)) {
        const player = gameState.players.find((p) => p.id === playerId);
        if (player) {
          const name = player.id === currentUserId ? "You" : player.name;
          addToast(`${name} called UNO!`, "warning");
        }
      }
    }
    prevUnoRef.current = currentUnoPlayers;
  }, [gameState, currentUserId, addToast]);

  const currentPlayer = gameState?.players.find((p) => p.id === currentUserId);
  const creatorId = gameState
    ? (gameState.createdByUserId ??
      gameState.players.find((player) => player.position === 0)?.id ??
      gameState.players[0]?.id ??
      null)
    : null;
  const isRoomCreator = Boolean(currentUserId && creatorId === currentUserId);
  const isMyTurn =
    gameState?.players[gameState.currentPlayerIndex]?.id === currentUserId;
  const topCard = gameState?.discardPile[gameState.discardPile.length - 1];
  const isRouletteChooser =
    gameState?.pendingRoulette?.chooserPlayerId === currentUserId;

  useEffect(() => {
    if (isRouletteChooser) {
      setColorPickerMode("roulette");
      setShowColorPicker(true);
      setSelectedCard(null);
      setPendingCardId(null);
      setPendingTargetCardId(null);
    }
  }, [isRouletteChooser]);

  useEffect(() => {
    if (!rouletteAnimating || !gameState || !currentUserId) return;

    const myPlayer = gameState.players.find((p) => p.id === currentUserId);
    if (!myPlayer) return;

    if (
      !gameState.pendingRoulette &&
      myPlayer.cards.length > preRouletteHandSizeRef.current
    ) {
      setShowColorPicker(false);
      setColorPickerMode("playWild");
      setPendingCardId(null);
      setSelectedCard(null);

      const newCards = myPlayer.cards.slice(preRouletteHandSizeRef.current);
      setRouletteDrawnCards(newCards);
      setRouletteVisibleCount(0);

      let count = 0;
      rouletteTimerRef.current = setInterval(() => {
        count++;
        setRouletteVisibleCount(count);
        if (count >= newCards.length) {
          if (rouletteTimerRef.current) {
            clearInterval(rouletteTimerRef.current);
            rouletteTimerRef.current = null;
          }
          setTimeout(() => {
            setRouletteAnimating(false);
            setRouletteDrawnCards([]);
            setRouletteVisibleCount(0);
          }, 600);
        }
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    gameState?.pendingRoulette,
    gameState?.players,
    currentUserId,
    rouletteAnimating,
  ]);

  useEffect(() => {
    return () => {
      if (rouletteTimerRef.current) {
        clearInterval(rouletteTimerRef.current);
      }
    };
  }, []);

  const handleCardClick = (card: Card) => {
    if (!isMyTurn || !gameState) return;

    setSelectedCard(card);

    if (card.type === "numbered" && card.value === "7") {
      setPendingTargetCardId(card.id);
      return;
    }

    if (card.type === "wild") {
      if (card.value === "WildColorRoulette") {
        void playCard(card.id);
        setSelectedCard(null);
        return;
      }
      setColorPickerMode("playWild");
      setPendingCardId(card.id);
      setShowColorPicker(true);
    } else {
      void playCard(card.id);
      setSelectedCard(null);
    }
  };

  const handleColorSelect = async (color: Color) => {
    if (colorPickerMode === "roulette") {
      const myPlayer = gameState?.players.find((p) => p.id === currentUserId);
      preRouletteHandSizeRef.current = myPlayer?.cards.length ?? 0;
      setRouletteAnimating(true);
      await chooseRoulette(color);
      return;
    } else if (pendingCardId) {
      await playCard(pendingCardId, color);
    }
    setShowColorPicker(false);
    setColorPickerMode("playWild");
    setPendingCardId(null);
    setSelectedCard(null);
  };

  const handleTargetSelect = async (targetPlayerId: string) => {
    if (!pendingTargetCardId) return;
    await playCard(pendingTargetCardId, undefined, targetPlayerId);
    setPendingTargetCardId(null);
    setSelectedCard(null);
  };

  const handleCancelColorPicker = () => {
    setShowColorPicker(false);
    setColorPickerMode("playWild");
    setPendingCardId(null);
    setSelectedCard(null);
  };

  const handleCancelTargetPicker = () => {
    setPendingTargetCardId(null);
    setSelectedCard(null);
  };

  const handleDraw = async () => {
    if (isMyTurn) {
      await drawCards();
    }
  };

  const handleCallUno = async () => {
    await callUno();
  };

  const handleStartGame = async () => {
    if (gameId) {
      void startGame(gameId);
    }
  };

  if (!gameState) {
    return (
      <main className="gradient-bg flex min-h-screen items-center justify-center">
        <div className="animate-fade-in-scale glass card-shadow p-8 text-center">
          <div className="skeleton mx-auto mb-4 h-8 w-32"></div>
          <div className="animate-pulse text-xl text-white">
            Loading game...
          </div>
        </div>
      </main>
    );
  }

  if (gameState.status === "WAITING") {
    return (
      <main className="gradient-bg flex min-h-screen flex-col items-center justify-center p-8">
        <div className="animate-fade-in-scale glass-premium w-full max-w-md p-8">
          <h2 className="font-display mb-4 text-center text-2xl font-bold text-white">
            Waiting for Players
          </h2>
          <div className="mb-4">
            <p className="mb-2 text-white/70">Game Code:</p>
            <p className="text-center font-mono text-3xl font-bold text-white">
              {gameState.id}
            </p>
          </div>
          <div className="mb-6">
            <p className="mb-2 text-white/70">
              Players ({gameState.players.length}/6):
            </p>
            <ul className="space-y-2">
              {gameState.players.map((player, index) => (
                <li
                  key={player.id}
                  className="animate-fade-in-up text-white"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {index + 1}. {player.name}{" "}
                  {player.id === currentUserId && "(You)"}
                  {player.id === creatorId && " (Creator)"}
                </li>
              ))}
            </ul>
          </div>
          {gameState.players.length >= 2 && (
            <>
              <button
                onClick={handleStartGame}
                disabled={!isRoomCreator}
                className="button-y2k w-full py-3 text-lg font-bold disabled:opacity-50"
              >
                Start Game
              </button>
              {!isRoomCreator && (
                <p className="mt-2 text-center text-sm text-white/70">
                  Only the room creator can start the game.
                </p>
              )}
            </>
          )}
          <button
            onClick={() => void refresh()}
            className="button-secondary mt-4 w-full py-2"
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  if (gameState.status === "FINISHED") {
    return (
      <main className="gradient-bg flex min-h-screen flex-col items-center justify-center p-8">
        <div className="animate-fade-in-scale glass-premium w-full max-w-md p-8 text-center">
          <h2 className="animate-winner font-display mb-4 text-3xl font-bold text-white">
            {gameState.winner === currentUserId
              ? "\ud83c\udf89 You Win! \ud83c\udf89"
              : "Game Over"}
          </h2>
          {gameState.winner && gameState.winner !== currentUserId && (
            <p className="mb-6 text-white/70">
              Winner:{" "}
              {gameState.players.find((p) => p.id === gameState.winner)?.name}
            </p>
          )}
          <div className="mb-6 space-y-2">
            {gameState.players
              .slice()
              .sort((a, b) => a.cards.length - b.cards.length)
              .map((p) => (
                <div
                  key={p.id}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 ${p.id === gameState.winner ? "bg-yellow-400/20 ring-1 ring-yellow-400/50" : "bg-white/5"}`}
                >
                  <span
                    className={
                      p.id === currentUserId ? "text-yellow-300" : "text-white"
                    }
                  >
                    {p.name} {p.id === currentUserId && "(You)"}
                  </span>
                  <span
                    className={
                      p.isKnockedOut ? "text-red-400" : "text-white/60"
                    }
                  >
                    {p.isKnockedOut ? "KO" : `${p.cards.length} cards`}
                  </span>
                </div>
              ))}
          </div>
          <button
            onClick={() => router.push("/lobby")}
            className="button-y2k px-8 py-3 text-lg font-bold"
          >
            Play Again
          </button>
        </div>
      </main>
    );
  }

  const opponents = gameState.players.filter((p) => p.id !== currentUserId);
  const turnOrderOpponents = opponents
    .slice()
    .sort((a, b) => a.position - b.position);
  const nextPlayerIdx = gameState ? getNextPlayerIndex(gameState) : null;
  const nextPlayer =
    nextPlayerIdx !== null ? gameState.players[nextPlayerIdx] : null;
  const lastPlayedByName = gameState.lastPlayedBy
    ? (gameState.players.find((p) => p.id === gameState.lastPlayedBy)?.name ??
      "Someone")
    : null;

  return (
    <main className="gradient-bg flex min-h-[100dvh] flex-col p-3 sm:p-4">
      <GameTopBar
        gameState={gameState}
        gameId={gameId ?? null}
        currentUserId={currentUserId}
        onHelpClick={() => setShowHelp(true)}
      />

      {gameState.players[gameState.currentPlayerIndex] && (
        <TurnIndicator
          isMyTurn={isMyTurn}
          currentPlayerName={
            gameState.players[gameState.currentPlayerIndex]?.name ?? ""
          }
        />
      )}

      <div className="mb-2 flex flex-wrap justify-center gap-2">
        {turnOrderOpponents.map((player) => {
          const isCurrentTurn =
            gameState.players[gameState.currentPlayerIndex]?.id === player.id;
          const isNext = nextPlayer?.id === player.id;
          const isMercy = player.cards.length >= 20 && !player.isKnockedOut;

          return (
            <OpponentSeat
              key={player.id}
              player={player}
              isCurrentTurn={isCurrentTurn}
              isNext={isNext}
              isMercy={isMercy}
              drawPenalty={
                gameState.drawPenalty > 0 && isNext ? gameState.drawPenalty : 0
              }
            />
          );
        })}
      </div>

      <DiscardArea
        gameState={gameState}
        lastPlayedByName={lastPlayedByName}
        isMyTurn={isMyTurn}
        isLoading={isLoading}
        onDraw={handleDraw}
      />

      <ActionFeed
        actions={
          actions as Array<{
            _id: string;
            type: string;
            actorUserId: string;
            payload?: unknown;
          }>
        }
        players={gameState.players}
        currentUserId={currentUserId}
        showActionFeed={showActionFeed}
        onToggle={() => setShowActionFeed((prev) => !prev)}
      />

      <PlayerHand
        cards={currentPlayer?.cards ?? []}
        topCard={topCard}
        gameState={gameState}
        isMyTurn={isMyTurn}
        isLoading={isLoading}
        pendingRoulette={Boolean(gameState.pendingRoulette)}
        selectedCard={selectedCard}
        onCardClick={handleCardClick}
        onCallUno={handleCallUno}
        cardsLength={currentPlayer?.cards.length ?? 0}
        calledUno={currentPlayer?.calledUno ?? false}
      />

      {showColorPicker && (
        <div className="animate-fade-in-scale fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <ColorPicker
            onSelect={handleColorSelect}
            onCancel={
              colorPickerMode === "roulette"
                ? undefined
                : handleCancelColorPicker
            }
            showCancel={colorPickerMode !== "roulette"}
          />
        </div>
      )}

      {pendingTargetCardId && (
        <div className="animate-fade-in-scale fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <TargetPicker
            players={gameState.players
              .filter((p) => p.id !== currentUserId && !p.isKnockedOut)
              .map((p) => ({
                id: p.id,
                name: p.name,
                cardCount: p.cards.length,
              }))}
            onSelect={handleTargetSelect}
            onCancel={handleCancelTargetPicker}
          />
        </div>
      )}

      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}

      <div className="toast-container">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`animate-toast-in glass card-shadow px-4 py-2 text-sm font-medium ${
              toast.type === "success"
                ? "border-green-400/30 bg-green-400/10 text-green-300"
                : toast.type === "warning"
                  ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
                  : toast.type === "danger"
                    ? "border-red-400/30 bg-red-400/10 text-red-300"
                    : "border-white/10 bg-white/5 text-white"
            }`}
          >
            {toast.text}
          </div>
        ))}
      </div>

      {error && (
        <div className="animate-fade-in-scale glass fixed bottom-4 left-1/2 -translate-x-1/2 border-red-500/50 bg-red-500/20 px-6 py-3 text-red-200">
          {error}
        </div>
      )}

      {rouletteAnimating && rouletteDrawnCards.length > 0 && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="glass card-shadow animate-fade-in-scale p-6 text-center">
            <h3 className="font-display mb-2 text-lg font-bold text-white">
              Color Roulette
            </h3>
            <p className="mb-4 text-sm text-white/60">
              Drawing cards until matching color...
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {rouletteDrawnCards
                .slice(0, rouletteVisibleCount)
                .map((card, i) => (
                  <div
                    key={card.id}
                    className="animate-fade-in-scale flex h-14 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-xs font-bold text-white"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {card.type === "numbered"
                      ? card.value
                      : card.type === "action"
                        ? card.value
                        : "W"}
                  </div>
                ))}
              {rouletteVisibleCount < rouletteDrawnCards.length && (
                <div className="flex h-14 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                </div>
              )}
            </div>
            <p className="mt-3 text-xs text-white/40">
              {rouletteVisibleCount} / {rouletteDrawnCards.length} cards drawn
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
