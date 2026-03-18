"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useGame } from "~/hooks/useGame";
import type { Card, Color } from "~/types/game";

function CardComponent({
  card,
  onClick,
  disabled,
  isSelected,
}: {
  card: Card;
  onClick?: () => void;
  disabled?: boolean;
  isSelected?: boolean;
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
          return "⊘";
        case "SkipEveryone":
          return "⊘⊘";
        case "Reverse":
          return "⟲";
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
          return "⟲+4";
        case "WildColorRoulette":
          return "?";
        default:
          return "W";
      }
    }
    return "?";
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative h-24 w-16 rounded-lg sm:h-28 sm:w-20 ${getCardColor()} flex items-center justify-center text-2xl font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 ${isSelected ? "scale-105 ring-4 ring-white" : ""} `}
    >
      <span className="absolute top-1 left-1 text-xs">
        {card.type === "wild" ? "W" : card.color?.[0]?.toUpperCase()}
      </span>
      <span>{getCardValue()}</span>
    </button>
  );
}

function CardBack() {
  return (
    <div className="flex h-24 w-16 items-center justify-center rounded-lg border-2 border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 sm:h-28 sm:w-20">
      <span className="text-2xl">🎴</span>
    </div>
  );
}

function ColorPicker({ onSelect }: { onSelect: (color: Color) => void }) {
  const colors: Color[] = ["red", "blue", "green", "yellow"];

  return (
    <div className="glass card-shadow p-6">
      <h3 className="mb-4 text-center text-lg font-bold text-white">
        Choose a color
      </h3>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onSelect(color)}
            className={`h-12 w-12 rounded-full transition-transform hover:scale-110 ${
              color === "red"
                ? "bg-red-500"
                : color === "blue"
                  ? "bg-blue-500"
                  : color === "green"
                    ? "bg-green-500"
                    : "bg-yellow-400"
            }`}
          />
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

export default function GamePage() {
  const params = useParams();
  const router = useRouter();
  const rawId = params.id;
  const gameId =
    typeof rawId === "string" ? rawId : Array.isArray(rawId) ? rawId[0] : null;
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
  } = useGame(gameId ?? null);

  const [playerId, setPlayerId] = useState<string | null>(null);
  const [playerName, setPlayerName] = useState<string>("");
  const [hasJoined, setHasJoined] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [pendingCardId, setPendingCardId] = useState<string | null>(null);

  useEffect(() => {
    const id = localStorage.getItem("uno-player-id");
    const name = localStorage.getItem("uno-player-name");
    if (id) setPlayerId(id);
    if (name) setPlayerName(name);
  }, []);

  useEffect(() => {
    if (gameId && playerId && playerName && !hasJoined) {
      void joinGame(gameId, playerId, playerName);
      setHasJoined(true);
    }
  }, [gameId, playerId, playerName, hasJoined, joinGame]);

  const currentPlayer = gameState?.players.find((p) => p.id === playerId);
  const isMyTurn =
    gameState?.players[gameState.currentPlayerIndex]?.id === playerId;
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
        <div className="glass card-shadow p-8 text-center">
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
        <div className="glass card-shadow w-full max-w-md p-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-white">
            Waiting for Players
          </h2>
          <div className="mb-4">
            <p className="mb-2 text-white/70">Game Code:</p>
            <p className="text-center font-mono text-3xl font-bold text-white">
              {gameId?.slice(0, 6).toUpperCase()}
            </p>
          </div>
          <div className="mb-6">
            <p className="mb-2 text-white/70">
              Players ({gameState.players.length}/6):
            </p>
            <ul className="space-y-2">
              {gameState.players.map((player, index) => (
                <li key={player.id} className="text-white">
                  {index + 1}. {player.name} {player.id === playerId && "(You)"}
                </li>
              ))}
            </ul>
          </div>
          {gameState.players.length >= 2 && (
            <button
              onClick={handleStartGame}
              className="button-primary w-full py-3 text-lg font-bold"
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
        <div className="glass card-shadow w-full max-w-md p-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            {gameState.winner === playerId ? "🎉 You Win! 🎉" : "Game Over"}
          </h2>
          {gameState.winner && gameState.winner !== playerId && (
            <p className="mb-6 text-white/70">
              Winner:{" "}
              {gameState.players.find((p) => p.id === gameState.winner)?.name}
            </p>
          )}
          <button
            onClick={() => router.push("/lobby")}
            className="button-primary px-8 py-3 text-lg font-bold"
          >
            Play Again
          </button>
        </div>
      </main>
    );
  }

  const opponents = gameState.players.filter((p) => p.id !== playerId);

  return (
    <main className="gradient-bg flex min-h-screen flex-col p-4">
      {/* Game info */}
      <div className="glass card-shadow mb-4 flex items-center justify-between p-4">
        <div>
          <span className="text-sm text-white/70">Game:</span>
          <span className="ml-2 font-mono text-white">
            {gameId?.slice(0, 6).toUpperCase()}
          </span>
        </div>
        <ColorIndicator color={gameState.currentColor} />
        {gameState.drawPenalty > 0 && (
          <div className="font-bold text-red-400">
            Draw Penalty: +{gameState.drawPenalty}
          </div>
        )}
      </div>

      {/* Opponents */}
      <div className="mb-4 flex flex-wrap justify-center gap-4">
        {opponents.map((player) => (
          <div
            key={player.id}
            className={`glass card-shadow min-w-[100px] p-3 text-center ${
              gameState.players[gameState.currentPlayerIndex]?.id === player.id
                ? "ring-2 ring-yellow-400"
                : ""
            } ${player.isKnockedOut ? "opacity-50" : ""}`}
          >
            <p className="truncate font-medium text-white">{player.name}</p>
            <p className="text-sm text-white/70">{player.cards.length} cards</p>
            {player.isKnockedOut && <p className="text-xs text-red-400">OUT</p>}
            {player.cards.length === 1 && !player.isKnockedOut && (
              <p className="text-xs text-yellow-400">UNO!</p>
            )}
            <div className="mt-2 flex justify-center">
              {Array.from({ length: Math.min(player.cards.length, 7) }).map(
                (_, i) => (
                  <CardBack key={i} />
                ),
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Center play area */}
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        {/* Discard pile */}
        <div className="glass card-shadow p-6">
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
          className="button-secondary px-6 py-2 disabled:opacity-50"
        >
          Draw Card
        </button>
      </div>

      {/* Player&apos;s hand */}
      <div className="glass card-shadow p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-medium text-white">
            Your Hand ({currentPlayer?.cards.length ?? 0} cards){" "}
            {!isMyTurn && (
              <span className="text-white/50">- Not your turn</span>
            )}
          </p>
          {currentPlayer?.cards.length === 1 && !currentPlayer.calledUno && (
            <button
              onClick={handleCallUno}
              className="button-primary px-4 py-1 text-sm"
            >
              Call UNO!
            </button>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {currentPlayer?.cards.map((card) => (
            <CardComponent
              key={card.id}
              card={card}
              onClick={() => handleCardClick(card)}
              disabled={!isMyTurn || isLoading}
              isSelected={selectedCard?.id === card.id}
            />
          ))}
          {currentPlayer?.cards.length === 0 && (
            <p className="text-white/50">No cards in hand</p>
          )}
        </div>
      </div>

      {/* Color picker modal */}
      {showColorPicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <ColorPicker onSelect={handleColorSelect} />
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="glass fixed bottom-4 left-1/2 -translate-x-1/2 border-red-500/50 bg-red-500/20 px-6 py-3 text-red-200">
          {error}
        </div>
      )}
    </main>
  );
}
