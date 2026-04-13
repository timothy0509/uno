import type { GameState } from "~/types/game";
import { GameCard } from "./GameCard";
import { ColorIndicator } from "./ColorIndicator";
import { useCallback, useState } from "react";

export function DiscardArea({
  gameState,
  lastPlayedByName,
  isMyTurn,
  isLoading,
  onDraw,
}: {
  gameState: GameState;
  lastPlayedByName: string | null;
  isMyTurn: boolean;
  isLoading: boolean;
  onDraw: () => void;
}) {
  const topCard = gameState.discardPile[gameState.discardPile.length - 1];
  const [showPeek, setShowPeek] = useState(false);

  const togglePeek = useCallback(() => {
    if (gameState.discardPile.length > 1) {
      setShowPeek((prev) => !prev);
    }
  }, [gameState.discardPile.length]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <div className="relative" onClick={togglePeek}>
        <div className="glass-shimmer glass card-shadow cursor-pointer p-4">
          {lastPlayedByName && (
            <p className="mb-1 text-center text-xs text-white/50">
              {lastPlayedByName} played
            </p>
          )}
          {topCard && <GameCard card={topCard} disabled size="large" />}
        </div>

        {showPeek && gameState.discardPile.length > 1 && (
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
                    <GameCard
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
                setShowPeek(false);
              }}
              className="mt-2 w-full text-center text-xs text-white/50 hover:text-white/80"
            >
              Close
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-1">
        <ColorIndicator color={gameState.currentColor} />
        <button
          onClick={onDraw}
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
  );
}
