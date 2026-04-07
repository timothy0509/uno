"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useGame } from "~/hooks/useGame";
import type { Card, Color } from "~/types/game";

// SVG Icon Components
function CardIcon({ type, value }: { type: string; value: string }) {
  if (type === "action") {
    switch (value) {
      case "Draw2":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12 2L2 22h20L12 2zm0 4l6 12H6l6-12z" />
            <text
              x="12"
              y="17"
              textAnchor="middle"
              fontSize="8"
              fill="currentColor"
            >
              +2
            </text>
          </svg>
        );
      case "Draw4":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12 2L2 22h20L12 2zm0 4l6 12H6l6-12z" />
            <text
              x="12"
              y="17"
              textAnchor="middle"
              fontSize="7"
              fill="currentColor"
            >
              +4
            </text>
          </svg>
        );
      case "Skip":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <circle
              cx="12"
              cy="12"
              r="9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="6"
              y1="6"
              x2="18"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        );
      case "SkipEveryone":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <circle
              cx="8"
              cy="12"
              r="5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="16"
              cy="12"
              r="5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <line
              x1="4"
              y1="8"
              x2="20"
              y2="16"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        );
      case "Reverse":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12 4l-8 8h5v8h6v-8h5l-8-8z" />
          </svg>
        );
      case "DiscardAll":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <rect
              x="3"
              y="5"
              width="6"
              height="8"
              rx="1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <rect
              x="8"
              y="8"
              width="6"
              height="8"
              rx="1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <rect
              x="13"
              y="11"
              width="6"
              height="8"
              rx="1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        );
      default:
        return <span>{value}</span>;
    }
  }
  if (type === "wild") {
    switch (value) {
      case "WildDraw6":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12 2L2 22h20L12 2zm0 4l6 12H6l6-12z" />
            <text
              x="12"
              y="17"
              textAnchor="middle"
              fontSize="7"
              fill="currentColor"
            >
              +6
            </text>
          </svg>
        );
      case "WildDraw10":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12 2L2 22h20L12 2zm0 4l6 12H6l6-12z" />
            <text
              x="12"
              y="17"
              textAnchor="middle"
              fontSize="6"
              fill="currentColor"
            >
              +10
            </text>
          </svg>
        );
      case "WildReverseDraw4":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12 4l-8 8h5v8h6v-8h5l-8-8z" />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fontSize="6"
              fill="currentColor"
            >
              +4
            </text>
          </svg>
        );
      case "WildColorRoulette":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <circle
              cx="12"
              cy="12"
              r="9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fontSize="10"
              fill="currentColor"
            >
              ?
            </text>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <circle cx="6" cy="12" r="3" fill="#c41e3a" />
            <circle cx="12" cy="6" r="3" fill="#0066b2" />
            <circle cx="18" cy="12" r="3" fill="#00a651" />
            <circle cx="12" cy="18" r="3" fill="#ffd700" />
          </svg>
        );
    }
  }
  return <span>{value}</span>;
}

function CardComponent({
  card,
  onClick,
  disabled,
  isSelected,
  dealIndex = 0,
}: {
  card: Card;
  onClick?: () => void;
  disabled?: boolean;
  isSelected?: boolean;
  dealIndex?: number;
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
      return card.value;
    }
    if (card.type === "wild") {
      return card.value;
    }
    return "?";
  };

  const getCornerValue = () => {
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
          return "⊘";
        case "SkipEveryone":
          return "⊘⊘";
        case "Reverse":
          return "R";
        case "DiscardAll":
          return "D";
        default:
          return "?";
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
          return "R+4";
        case "WildColorRoulette":
          return "?";
        default:
          return "W";
      }
    }
    return "?";
  };

  const staggerClass = `card-stagger-${Math.min(dealIndex + 1, 7)}`;
  const isDarkCard =
    card.type === "wild" || card.color === "blue" || card.color === "green";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`animate-card-deal ${staggerClass} card-interactive relative h-24 w-16 rounded-xl sm:h-28 sm:w-20 ${getCardColor()} flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:transform-none ${isSelected ? "card-selected" : ""} transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02]`}
    >
      {/* Corner indices */}
      <span
        className={`absolute top-1.5 left-1.5 text-[10px] font-bold ${isDarkCard ? "text-white/90" : "text-black/70"}`}
      >
        {getCornerValue()}
      </span>
      <span
        className={`absolute right-1.5 bottom-1.5 rotate-180 text-[10px] font-bold ${isDarkCard ? "text-white/90" : "text-black/70"}`}
      >
        {getCornerValue()}
      </span>

      {/* Center value */}
      <div
        className={`flex items-center justify-center ${card.type === "numbered" ? "text-2xl font-bold" : ""} ${isDarkCard ? "text-white" : "text-black"}`}
      >
        {card.type === "numbered" ? (
          <span>{getCardValue()}</span>
        ) : (
          <CardIcon type={card.type} value={getCardValue()} />
        )}
      </div>
    </button>
  );
}

function CardBack({ index = 0 }: { index?: number }) {
  return (
    <div
      className={`animate-card-deal card-stagger-${Math.min(index + 1, 7)} card-back-enhanced flex h-20 w-14 items-center justify-center rounded-lg shadow-lg sm:h-24 sm:w-16`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 text-white/30"
        fill="currentColor"
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
        <path d="M7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z" />
      </svg>
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

function ColorIndicator({ color }: { color: Color | null }) {
  if (!color) return null;

  const getColorClass = () => {
    switch (color) {
      case "red":
        return "bg-gradient-to-br from-red-500 to-red-600";
      case "blue":
        return "bg-gradient-to-br from-blue-500 to-blue-600";
      case "green":
        return "bg-gradient-to-br from-green-500 to-green-600";
      case "yellow":
        return "bg-gradient-to-br from-yellow-400 to-yellow-500";
      default:
        return "bg-gradient-to-br from-gray-500 to-gray-600";
    }
  };

  const getColorName = () => {
    return color.charAt(0).toUpperCase() + color.slice(1);
  };

  return (
    <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
      <span className="text-sm font-medium tracking-wider text-white/70 uppercase">
        Current
      </span>
      <div
        className={`animate-color-pulse h-8 w-8 rounded-full ${getColorClass()} ring-4 ring-white/20`}
      />
      <span
        className={`text-sm font-bold ${
          color === "red"
            ? "text-red-400"
            : color === "blue"
              ? "text-blue-400"
              : color === "green"
                ? "text-green-400"
                : "text-yellow-400"
        }`}
      >
        {getColorName()}
      </span>
    </div>
  );
}

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
  const [pendingCardId, setPendingCardId] = useState<string | null>(null);

  const {
    gameState,
    isLoading,
    error,
    joinGame,
    startGame,
    playCard,
    drawCards,
    callUno,
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

  const currentPlayer = gameState?.players.find((p) => p.id === currentUserId);
  const isMyTurn =
    gameState?.players[gameState.currentPlayerIndex]?.id === currentUserId;
  const topCard = gameState?.discardPile[gameState.discardPile.length - 1];

  const handleCardClick = (card: Card) => {
    if (!isMyTurn || !gameState) return;

    setSelectedCard(card);

    if (card.type === "wild") {
      setPendingCardId(card.id);
      setShowColorPicker(true);
    } else {
      void playCard(card.id);
      setSelectedCard(null);
    }
  };

  const handleColorSelect = async (color: Color) => {
    if (pendingCardId) {
      await playCard(pendingCardId, color);
    }
    setShowColorPicker(false);
    setPendingCardId(null);
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
                </li>
              ))}
            </ul>
          </div>
          {gameState.players.length >= 2 && (
            <button
              onClick={handleStartGame}
              className="button-y2k w-full py-3 text-lg font-bold"
            >
              Start Game
            </button>
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
              ? "🎉 You Win! 🎉"
              : "Game Over"}
          </h2>
          {gameState.winner && gameState.winner !== currentUserId && (
            <p className="mb-6 text-white/70">
              Winner:{" "}
              {gameState.players.find((p) => p.id === gameState.winner)?.name}
            </p>
          )}
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

  return (
    <main className="gradient-bg flex min-h-screen flex-col p-4">
      {/* Game info */}
      <div className="animate-fade-in-up glass-premium mb-4 flex flex-wrap items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-4">
          <div>
            <span className="text-sm text-white/70">Game:</span>
            <span className="ml-2 font-mono text-lg font-bold text-white">
              {gameId?.slice(0, 6).toUpperCase()}
            </span>
          </div>
          <ColorIndicator color={gameState.currentColor} />
        </div>
        {gameState.drawPenalty > 0 && (
          <div className="flex animate-pulse items-center gap-2 rounded-lg bg-red-500/20 px-4 py-2 font-bold text-red-400">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <span>Draw +{gameState.drawPenalty}</span>
          </div>
        )}
      </div>

      {/* Opponents */}
      <div className="mb-4 flex flex-wrap justify-center gap-3">
        {opponents.map((player, index) => (
          <div
            key={player.id}
            className={`animate-fade-in-up glass card-shadow max-w-[140px] min-w-[90px] p-2 text-center transition-all duration-300 ${
              gameState.players[gameState.currentPlayerIndex]?.id === player.id
                ? "animate-turn-glow scale-105 ring-2 ring-yellow-400"
                : "opacity-80 hover:opacity-100"
            } ${player.isKnockedOut ? "opacity-40 grayscale" : ""}`}
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <p className="truncate text-sm font-medium text-white/90">
              {player.name}
            </p>
            <p className="text-xs text-white/50">{player.cards.length} cards</p>
            {player.isKnockedOut && (
              <p className="text-xs font-bold text-red-400">OUT</p>
            )}
            {player.cards.length === 1 && !player.isKnockedOut && (
              <p className="animate-pulse text-xs font-bold text-yellow-400">
                UNO!
              </p>
            )}
            <div className="mt-2 flex justify-center">
              {Array.from({ length: Math.min(player.cards.length, 5) }).map(
                (_, i) => (
                  <CardBack key={i} index={i} />
                ),
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Center play area */}
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        {/* Discard pile */}
        <div className="animate-fade-in-scale glass-shimmer glass card-shadow p-6">
          {topCard && (
            <div className="relative">
              <CardComponent card={topCard} disabled />
            </div>
          )}
        </div>

        {/* Draw pile */}
        <button
          onClick={handleDraw}
          disabled={!isMyTurn || isLoading}
          className="animate-fade-in-scale button-secondary px-6 py-2 disabled:opacity-50"
          style={{ animationDelay: "160ms" }}
        >
          Draw Card
        </button>
      </div>

      {/* Player&apos;s hand */}
      <div className="animate-fade-in-up glass-premium mb-4 p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-display text-lg font-medium text-white">
            Your Hand ({currentPlayer?.cards.length ?? 0} cards){" "}
            {!isMyTurn && (
              <span className="text-sm text-white/50">- Not your turn</span>
            )}
          </p>
          {currentPlayer?.cards.length === 1 && !currentPlayer.calledUno && (
            <button
              onClick={handleCallUno}
              className="animate-uno-flash button-primary rounded-full px-6 py-2 text-base font-bold"
            >
              <span className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Call UNO!
              </span>
            </button>
          )}
        </div>
        <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">
          {currentPlayer?.cards.map((card, index) => (
            <CardComponent
              key={card.id}
              card={card}
              onClick={() => handleCardClick(card)}
              disabled={!isMyTurn || isLoading}
              isSelected={selectedCard?.id === card.id}
              dealIndex={index}
            />
          ))}
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

      {/* Error message */}
      {error && (
        <div className="animate-fade-in-scale glass fixed bottom-4 left-1/2 -translate-x-1/2 border-red-500/50 bg-red-500/20 px-6 py-3 text-red-200">
          {error}
        </div>
      )}
    </main>
  );
}
