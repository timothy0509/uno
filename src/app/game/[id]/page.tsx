"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useGame } from "~/hooks/useGame";
import { canPlayCard } from "~/lib/game/deck";
import { getNextPlayerIndex } from "~/lib/game/engine";
import type { Card, Color, PlayerState } from "~/types/game";

type ToastMessage = {
  id: number;
  text: string;
  type: "info" | "success" | "warning" | "danger";
};

function CardComponent({
  card,
  onClick,
  disabled,
  isSelected,
  dealIndex = 0,
  isPlayable,
  showPlayableState,
}: {
  card: Card;
  onClick?: () => void;
  disabled?: boolean;
  isSelected?: boolean;
  dealIndex?: number;
  isPlayable?: boolean;
  showPlayableState?: boolean;
}) {
  const getCardColor = () => {
    if (card.type === "wild") {
      return "card-wild";
    }
    switch (card.color) {
      case "red":
        return "card-red";
      case "blue":
        return "card-blue";
      case "green":
        return "card-green";
      case "yellow":
        return "card-yellow";
      default:
        return "card-wild";
    }
  };

  const getCardValue = () => {
    if (card.type === "numbered") {
      return card.value;
    }
    if (card.type === "action") {
      const v = card.value;
      switch (v) {
        case "Draw2":
          return "+2";
        case "Draw4":
          return "+4";
        case "Skip":
          return "\u2298";
        case "SkipEveryone":
          return "\u2298\u2298";
        case "Reverse":
          return "\u27F2";
        case "DiscardAll":
          return "DISC";
        default:
          return String(v);
      }
    }
    if (card.type === "wild") {
      const v = card.value;
      switch (v) {
        case "WildDraw6":
          return "+6";
        case "WildDraw10":
          return "+10";
        case "WildReverseDraw4":
          return "\u27F2+4";
        case "WildColorRoulette":
          return "?";
        default:
          return "W";
      }
    }
    return "?";
  };

  const staggerClass = `card-stagger-${Math.min(dealIndex + 1, 7)}`;

  const playableClass = showPlayableState
    ? isPlayable
      ? "card-playable"
      : "card-unplayable"
    : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`animate-card-deal ${staggerClass} card-interactive relative h-24 w-16 rounded-lg sm:h-28 sm:w-20 ${getCardColor()} flex items-center justify-center text-2xl font-bold text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 ${isSelected ? "scale-105 ring-4 ring-white" : ""} ${playableClass}`}
    >
      <span className="absolute top-1 left-1 text-xs">
        {card.type === "wild" ? "W" : card.color?.[0]?.toUpperCase()}
      </span>
      <span>{getCardValue()}</span>
    </button>
  );
}

function CardBack({ index = 0 }: { index?: number }) {
  return (
    <div
      className={`animate-card-deal card-stagger-${Math.min(index + 1, 7)} flex h-24 w-16 items-center justify-center rounded-lg border-2 border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 sm:h-28 sm:w-20`}
    >
      <span className="text-2xl">\ud83c\udcc4</span>
    </div>
  );
}

function ColorPicker({ onSelect }: { onSelect: (color: Color) => void }) {
  const colors: Color[] = ["red", "blue", "green", "yellow"];

  return (
    <div className="animate-fade-in-scale glass-shimmer glass card-shadow p-6">
      <h3 className="font-display mb-4 text-center text-lg font-bold text-white">
        Choose a color
      </h3>
      <div className="flex gap-3">
        {colors.map((color, index) => (
          <button
            key={color}
            onClick={() => onSelect(color)}
            className={`animate-fade-in-scale card-interactive h-12 w-12 rounded-full ${
              color === "red"
                ? "bg-red-500"
                : color === "blue"
                  ? "bg-blue-500"
                  : color === "green"
                    ? "bg-green-500"
                    : "bg-yellow-400"
            }`}
            style={{ animationDelay: `${index * 80}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function TargetPicker({
  players,
  onSelect,
}: {
  players: Array<{ id: string; name: string; cardCount: number }>;
  onSelect: (playerId: string) => void;
}) {
  return (
    <div className="animate-fade-in-scale glass-shimmer glass card-shadow p-6">
      <h3 className="font-display mb-4 text-center text-lg font-bold text-white">
        Choose player to swap with
      </h3>
      <div className="flex flex-col gap-2">
        {players.map((player) => (
          <button
            key={player.id}
            onClick={() => onSelect(player.id)}
            className="button-secondary px-4 py-2 text-left"
          >
            {player.name}{" "}
            <span className="text-white/50">({player.cardCount} cards)</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function ColorIndicator({ color }: { color: Color | null }) {
  if (!color) return null;

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-white/70">Current Color:</span>
      <div
        className={`h-6 w-6 rounded-full ${
          color === "red"
            ? "bg-red-500"
            : color === "blue"
              ? "bg-blue-500"
              : color === "green"
                ? "bg-green-500"
                : "bg-yellow-400"
        }`}
      />
    </div>
  );
}

function DirectionIndicator({ direction }: { direction: 1 | -1 }) {
  return (
    <span
      className="text-2xl font-bold text-white/70"
      title={direction === 1 ? "Clockwise" : "Counter-clockwise"}
    >
      {direction === 1 ? "\u21BB" : "\u21BA"}
    </span>
  );
}

function getCardCountBadge(count: number, isKnockedOut: boolean) {
  if (isKnockedOut) return { text: "OUT", className: "badge-out" };
  if (count === 1) return { text: "UNO!", className: "badge-uno" };
  if (count <= 4) return { text: `${count}`, className: "badge-low" };
  if (count >= 20) return { text: `${count}`, className: "badge-danger" };
  return { text: `${count}`, className: "badge-neutral" };
}

function formatActionText(
  action: { type: string; actorUserId: string; payload?: unknown },
  players: PlayerState[],
  currentUserId: string | null,
): string {
  const actor = players.find((p) => p.id === action.actorUserId);
  const name = actor?.id === currentUserId ? "You" : (actor?.name ?? "Someone");

  switch (action.type) {
    case "play":
      return `${name} played a card`;
    case "draw":
      return `${name} drew cards`;
    case "call_uno":
      return `${name} called UNO!`;
    case "knockout":
      return `${name} was knocked out!`;
    case "win":
      return `${name} won the game!`;
    case "roulette":
      return `${name} chose a color for roulette`;
    default:
      return `${name} did something`;
  }
}

function getActionIcon(type: string): string {
  switch (type) {
    case "play":
      return "\ud83c\udccf";
    case "draw":
      return "\ud83d\udcc4";
    case "call_uno":
      return "\ud83d\udce2";
    case "knockout":
      return "\u26a0\ufe0f";
    case "win":
      return "\ud83c\udfc6";
    case "roulette":
      return "\ud83c\udfb2";
    default:
      return "\u2022";
  }
}

const HELP_CARDS = [
  {
    value: "+2",
    desc: "Next player draws 2 \u2014 stackable",
    color: "card-red",
  },
  {
    value: "+4",
    desc: "Next player draws 4 \u2014 stackable, colored",
    color: "card-blue",
  },
  { value: "\u2298", desc: "Skip next player", color: "card-green" },
  {
    value: "\u2298\u2298",
    desc: "Skip everyone \u2014 you go again",
    color: "card-yellow",
  },
  { value: "\u27F2", desc: "Reverse play direction", color: "card-red" },
  {
    value: "DISC",
    desc: "Discard all cards of this color from your hand",
    color: "card-blue",
  },
  {
    value: "+6",
    desc: "Wild \u2014 next player draws 6, stackable",
    color: "card-wild",
  },
  {
    value: "+10",
    desc: "Wild \u2014 next player draws 10, stackable",
    color: "card-wild",
  },
  {
    value: "\u27F2+4",
    desc: "Wild \u2014 reverse + next player draws 4",
    color: "card-wild",
  },
  {
    value: "?",
    desc: "Wild \u2014 Color Roulette: next player draws until chosen color",
    color: "card-wild",
  },
  { value: "7", desc: "Swap hands with a chosen player", color: "card-green" },
  {
    value: "0",
    desc: "All players pass hands in play direction",
    color: "card-yellow",
  },
  { value: "25+", desc: "Mercy Rule: 25+ cards = knockout", color: "card-red" },
];

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
  const [showDiscardPeek, setShowDiscardPeek] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showActionFeed, setShowActionFeed] = useState(true);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const toastIdRef = useRef(0);
  const actionFeedRef = useRef<HTMLDivElement>(null);
  const prevTurnRef = useRef<number | null>(null);
  const prevUnoRef = useRef<Set<string>>(new Set());

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
      await chooseRoulette(color);
    } else if (pendingCardId) {
      await playCard(pendingCardId, color);
    }
    setShowColorPicker(false);
    setColorPickerMode("playWild");
    setPendingCardId(null);
    setSelectedCard(null);
  };

  const handleTargetSelect = async (targetPlayerId: string) => {
    if (!pendingTargetCardId) {
      return;
    }
    await playCard(pendingTargetCardId, undefined, targetPlayerId);
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

  useEffect(() => {
    if (actionFeedRef.current) {
      actionFeedRef.current.scrollTop = actionFeedRef.current.scrollHeight;
    }
  }, [actions]);

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
  const drawTargetName =
    nextPlayer?.id === currentUserId ? "You" : nextPlayer?.name;

  const canPlayAnyCard =
    currentPlayer && topCard && gameState
      ? currentPlayer.cards.some((card) =>
          canPlayCard(
            card,
            topCard,
            gameState.currentColor,
            gameState.drawPenalty,
            currentPlayer.cards,
          ),
        )
      : false;

  return (
    <main className="gradient-bg flex min-h-screen flex-col p-4">
      {/* Top bar */}
      <div className="animate-fade-in-up glass-premium mb-3 flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <span className="text-sm text-white/70">Game:</span>
          <span className="font-mono text-sm text-white">
            {gameId?.slice(0, 6).toUpperCase()}
          </span>
          <DirectionIndicator direction={gameState.direction} />
        </div>
        <div className="flex items-center gap-3">
          {gameState.drawPenalty > 0 && (
            <div className="rounded-full bg-red-500/20 px-3 py-1 text-sm font-bold text-red-400 ring-1 ring-red-500/40">
              +{gameState.drawPenalty}
              {drawTargetName && (
                <span className="ml-1 text-white/50">
                  \u2192 {drawTargetName}
                </span>
              )}
            </div>
          )}
          <ColorIndicator color={gameState.currentColor} />
          <button
            onClick={() => setShowHelp(true)}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            title="Rules & Help"
          >
            ?
          </button>
        </div>
      </div>

      {/* Turn indicator */}
      {gameState.players[gameState.currentPlayerIndex] && (
        <div className="mb-2 flex items-center justify-center">
          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              isMyTurn
                ? "bg-green-400/20 text-green-300 ring-1 ring-green-400/40"
                : "bg-white/5 text-white/50"
            }`}
          >
            {isMyTurn
              ? "Your Turn"
              : `${gameState.players[gameState.currentPlayerIndex]?.name}'s Turn`}
          </span>
        </div>
      )}

      {/* Opponents in turn order */}
      <div className="mb-3 flex flex-wrap justify-center gap-3">
        {turnOrderOpponents.map((player, index) => {
          const isCurrentTurn =
            gameState.players[gameState.currentPlayerIndex]?.id === player.id;
          const isNext = nextPlayer?.id === player.id;
          const isMercy = player.cards.length >= 20 && !player.isKnockedOut;
          const badge = getCardCountBadge(
            player.cards.length,
            player.isKnockedOut,
          );
          const drawTarget = gameState.drawPenalty > 0 && isNext;

          return (
            <div
              key={player.id}
              className={`animate-fade-in-up glass card-shadow relative min-w-[110px] p-3 text-center ${
                isCurrentTurn ? "animate-turn-glow ring-2 ring-yellow-400" : ""
              } ${isMercy ? "animate-mercy-warning" : ""} ${
                player.isKnockedOut ? "opacity-50" : ""
              }`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {isNext && !player.isKnockedOut && (
                <span className="absolute -top-2 -right-2 rounded-full bg-white/20 px-1.5 py-0.5 text-[10px] font-bold text-white/80">
                  NEXT
                </span>
              )}
              {drawTarget && (
                <span className="absolute -top-2 -left-2 rounded-full bg-red-500/80 px-1.5 py-0.5 text-[10px] font-bold text-white">
                  +{gameState.drawPenalty}
                </span>
              )}
              <p className="truncate text-sm font-medium text-white">
                {player.name}
              </p>
              <span className={`card-count-badge mt-1 ${badge.className}`}>
                {badge.text}
              </span>
              {player.isKnockedOut && (
                <p className="text-xs font-bold text-red-400">OUT</p>
              )}
              <div className="mt-1 flex justify-center">
                {Array.from({
                  length: Math.min(player.cards.length, 7),
                }).map((_, i) => (
                  <CardBack key={i} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Center play area */}
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        {/* Discard pile */}
        <div
          className="animate-fade-in-scale relative"
          onClick={() => setShowDiscardPeek(!showDiscardPeek)}
        >
          <div className="glass-shimmer glass card-shadow cursor-pointer p-6">
            {lastPlayedByName && (
              <p className="mb-1 text-center text-xs text-white/50">
                {lastPlayedByName} played
              </p>
            )}
            {topCard && <CardComponent card={topCard} disabled />}
          </div>

          {/* Discard peek */}
          {showDiscardPeek && gameState.discardPile.length > 1 && (
            <div className="discard-peek-overlay glass card-shadow p-3">
              <p className="mb-2 text-center text-xs text-white/70">
                Recent cards ({gameState.discardPile.length} total)
              </p>
              <div className="flex gap-1">
                {gameState.discardPile
                  .slice(-6)
                  .reverse()
                  .map((card, i) => (
                    <div
                      key={card.id ?? i}
                      style={{ marginLeft: i > 0 ? "-8px" : "0" }}
                    >
                      <CardComponent
                        card={card}
                        disabled
                        dealIndex={0}
                        showPlayableState={false}
                      />
                    </div>
                  ))}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDiscardPeek(false);
                }}
                className="mt-2 w-full text-center text-xs text-white/50 hover:text-white/80"
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Draw pile + deck count */}
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={handleDraw}
            disabled={
              !isMyTurn || isLoading || Boolean(gameState.pendingRoulette)
            }
            className="animate-fade-in-scale button-secondary px-6 py-2 disabled:opacity-50"
            style={{ animationDelay: "160ms" }}
          >
            Draw Card
          </button>
          <span
            className={`text-xs ${
              gameState.deck.length <= 10
                ? "font-bold text-yellow-400"
                : "text-white/40"
            }`}
          >
            {gameState.deck.length} left
          </span>
        </div>
      </div>

      {/* Action feed */}
      {showActionFeed && actions.length > 0 && (
        <div className="glass mb-3 p-2">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-xs text-white/50">Game Log</span>
            <button
              onClick={() => setShowActionFeed(false)}
              className="text-xs text-white/30 hover:text-white/60"
            >
              Hide
            </button>
          </div>
          <div ref={actionFeedRef} className="action-feed space-y-1">
            {actions.map((action) => (
              <div key={action._id} className="text-xs text-white/60">
                <span className="mr-1">{getActionIcon(action.type)}</span>
                {formatActionText(
                  {
                    type: action.type,
                    actorUserId: action.actorUserId,
                    payload: action.payload,
                  },
                  gameState.players,
                  currentUserId,
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {!showActionFeed && actions.length > 0 && (
        <div className="mb-3 flex justify-center">
          <button
            onClick={() => setShowActionFeed(true)}
            className="text-xs text-white/30 hover:text-white/60"
          >
            Show Game Log
          </button>
        </div>
      )}

      {/* Player's hand */}
      <div className="animate-fade-in-up glass-premium p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-medium text-white">
            Your Hand ({currentPlayer?.cards.length ?? 0} cards){" "}
            {!isMyTurn && (
              <span className="text-white/50">- Not your turn</span>
            )}
            {isMyTurn && !canPlayAnyCard && gameState.drawPenalty === 0 && (
              <span className="text-yellow-400">
                {" - No playable cards, draw 1 and pass."}
              </span>
            )}
          </p>
          <div className="flex items-center gap-2">
            {currentPlayer?.cards.length === 1 && !currentPlayer.calledUno && (
              <button
                onClick={handleCallUno}
                className="button-primary px-4 py-1 text-sm"
              >
                Call UNO!
              </button>
            )}
            {currentPlayer &&
              currentPlayer.cards.length >= 1 &&
              currentPlayer.cards.length < 25 && (
                <span
                  className={`text-xs ${
                    currentPlayer.cards.length >= 20
                      ? "font-bold text-red-400"
                      : "text-white/40"
                  }`}
                >
                  {currentPlayer.cards.length >= 20 && "\u26a0 "}
                  {currentPlayer.cards.length}/25
                </span>
              )}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {currentPlayer?.cards.map((card, index) => {
            const isPlayable =
              isMyTurn && topCard !== undefined && gameState
                ? canPlayCard(
                    card,
                    topCard,
                    gameState.currentColor,
                    gameState.drawPenalty,
                    currentPlayer.cards,
                  )
                : undefined;
            return (
              <CardComponent
                key={card.id}
                card={card}
                onClick={() => handleCardClick(card)}
                disabled={
                  !isMyTurn || isLoading || Boolean(gameState.pendingRoulette)
                }
                isSelected={selectedCard?.id === card.id}
                dealIndex={index}
                isPlayable={isPlayable}
                showPlayableState={isMyTurn && !gameState.pendingRoulette}
              />
            );
          })}
          {currentPlayer?.cards.length === 0 && (
            <p className="text-white/50">No cards in hand</p>
          )}
        </div>
      </div>

      {/* Color picker modal */}
      {showColorPicker && (
        <div className="animate-fade-in-scale fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <ColorPicker onSelect={handleColorSelect} />
        </div>
      )}

      {/* 7 target picker modal */}
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
          />
        </div>
      )}

      {/* Help modal */}
      {showHelp && (
        <div
          className="animate-fade-in-scale fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowHelp(false)}
        >
          <div
            className="glass-premium card-shadow max-h-[80vh] w-full max-w-md overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-white">
                Card Reference
              </h3>
              <button
                onClick={() => setShowHelp(false)}
                className="text-white/50 hover:text-white"
              >
                \u2715
              </button>
            </div>
            <div className="space-y-2">
              {HELP_CARDS.map((card) => (
                <div
                  key={card.value}
                  className="flex items-center gap-3 rounded-lg bg-white/5 p-2"
                >
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded text-sm font-bold text-white ${card.color}`}
                  >
                    {card.value}
                  </span>
                  <span className="text-sm text-white/70">{card.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Toasts */}
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

      {/* Error message */}
      {error && (
        <div className="animate-fade-in-scale glass fixed bottom-4 left-1/2 -translate-x-1/2 border-red-500/50 bg-red-500/20 px-6 py-3 text-red-200">
          {error}
        </div>
      )}
    </main>
  );
}
