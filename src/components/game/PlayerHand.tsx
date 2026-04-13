import type { Card } from "~/types/game";
import { canPlayCard } from "~/lib/game/deck";
import type { GameState } from "~/types/game";
import { GameCard } from "./GameCard";

export function PlayerHand({
  cards,
  topCard,
  gameState,
  isMyTurn,
  isLoading,
  pendingRoulette,
  selectedCard,
  onCardClick,
  onCallUno,
  cardsLength,
  calledUno,
}: {
  cards: Card[];
  topCard: Card | undefined;
  gameState: GameState;
  isMyTurn: boolean;
  isLoading: boolean;
  pendingRoulette: boolean;
  selectedCard: Card | null;
  onCardClick: (card: Card) => void;
  onCallUno: () => void;
  cardsLength: number;
  calledUno: boolean;
}) {
  const canPlayAny = topCard
    ? cards.some((card) =>
        canPlayCard(
          card,
          topCard,
          gameState.currentColor,
          gameState.drawPenalty,
          cards,
        ),
      )
    : false;

  return (
    <div className="glass-premium p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-medium text-white">
          Your Hand ({cardsLength} cards){" "}
          {!isMyTurn && <span className="text-white/50">- Not your turn</span>}
          {isMyTurn && !canPlayAny && gameState.drawPenalty === 0 && (
            <span className="text-yellow-400">
              {" - No playable cards, draw 1 and pass."}
            </span>
          )}
        </p>
        <div className="flex items-center gap-2">
          {cardsLength === 1 && !calledUno && (
            <button
              onClick={onCallUno}
              className="button-primary px-3 py-1 text-sm"
            >
              Call UNO!
            </button>
          )}
          {cardsLength >= 1 && cardsLength < 25 && (
            <span
              className={`text-xs ${
                cardsLength >= 20 ? "font-bold text-red-400" : "text-white/40"
              }`}
            >
              {cardsLength >= 20 && "\u26a0 "}
              {cardsLength}/25
            </span>
          )}
        </div>
      </div>
      <div className="relative">
        <div
          className="hand-scroll flex gap-2 overflow-x-auto py-1"
          style={{ scrollSnapType: "x proximity" }}
        >
          {cards.map((card, index) => {
            const isPlayable =
              isMyTurn && topCard !== undefined && gameState
                ? canPlayCard(
                    card,
                    topCard,
                    gameState.currentColor,
                    gameState.drawPenalty,
                    cards,
                  )
                : undefined;
            return (
              <div
                key={card.id}
                style={{ scrollSnapAlign: "start", flexShrink: 0 }}
              >
                <GameCard
                  card={card}
                  onClick={() => onCardClick(card)}
                  disabled={!isMyTurn || isLoading || pendingRoulette}
                  isSelected={selectedCard?.id === card.id}
                  dealIndex={index}
                  isPlayable={isPlayable}
                  showPlayableState={isMyTurn && !pendingRoulette}
                />
              </div>
            );
          })}
          {cardsLength === 0 && (
            <p className="w-full py-4 text-center text-white/50">
              No cards in hand
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
