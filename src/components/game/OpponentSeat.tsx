import { getCardCountBadge } from "./gameHelpers";
import { GameCardBack } from "./GameCardBack";
import type { PlayerState } from "~/types/game";

export function OpponentSeat({
  player,
  isCurrentTurn,
  isNext,
  isMercy,
  drawPenalty,
}: {
  player: PlayerState;
  isCurrentTurn: boolean;
  isNext: boolean;
  isMercy: boolean;
  drawPenalty: number;
}) {
  const badge = getCardCountBadge(player.cards.length, player.isKnockedOut);

  return (
    <div
      className={`opponent-seat animate-fade-in-up glass card-shadow relative min-w-[100px] p-3 text-center ${
        isCurrentTurn ? "animate-turn-glow ring-2 ring-yellow-400" : ""
      } ${isMercy ? "animate-mercy-warning" : ""} ${
        player.isKnockedOut ? "opacity-50" : ""
      }`}
    >
      {isNext && !player.isKnockedOut && (
        <span className="absolute -top-1.5 -right-1.5 rounded-full bg-white/20 px-1.5 py-0.5 text-[9px] font-bold text-white/80">
          NEXT
        </span>
      )}
      {drawPenalty > 0 && isNext && !player.isKnockedOut && (
        <span className="absolute -top-1.5 -left-1.5 rounded-full bg-red-500/80 px-1.5 py-0.5 text-[9px] font-bold text-white">
          +{drawPenalty}
        </span>
      )}
      <p className="truncate text-xs font-medium text-white">{player.name}</p>
      <span className={`card-count-badge mt-1 ${badge.className}`}>
        {badge.text}
      </span>
      {player.isKnockedOut && (
        <p className="text-[10px] font-bold text-red-400">OUT</p>
      )}
      {!player.isKnockedOut && player.cards.length > 0 && (
        <div className="mt-1.5 flex justify-center">
          {Array.from({ length: Math.min(player.cards.length, 7) }).map(
            (_, i) => (
              <GameCardBack key={i} size="mini" index={i} />
            ),
          )}
        </div>
      )}
    </div>
  );
}
