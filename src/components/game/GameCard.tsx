import type { Card } from "~/types/game";
import { getCardColor, getCardValue, getCardCornerLabel } from "./gameHelpers";

export function GameCard({
  card,
  onClick,
  disabled,
  isSelected,
  dealIndex = 0,
  isPlayable,
  showPlayableState,
  size = "default",
}: {
  card: Card;
  onClick?: () => void;
  disabled?: boolean;
  isSelected?: boolean;
  dealIndex?: number;
  isPlayable?: boolean;
  showPlayableState?: boolean;
  size?: "default" | "large";
}) {
  const staggerClass = `card-stagger-${Math.min(dealIndex + 1, 7)}`;
  const playableClass = showPlayableState
    ? isPlayable
      ? "card-playable"
      : "card-unplayable"
    : "";

  const sizeClass =
    size === "large"
      ? "h-[106px] w-[76px] sm:h-[124px] sm:w-[88px]"
      : "h-[96px] w-[68px] sm:h-[112px] sm:w-[80px]";

  const isWild = card.type === "wild";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`animate-card-deal ${staggerClass} card-interactive card-base relative ${sizeClass} ${getCardColor(card)} ${playableClass} ${isSelected ? "card-selected" : ""} ${disabled ? "cursor-not-allowed opacity-50" : ""} ${isWild ? "card-wild-rainbow" : ""}`}
      aria-label={`${card.type === "wild" ? "Wild" : card.color} ${getCardValue(card)}`}
    >
      <span className="absolute top-1 left-1.5 text-[10px] font-bold text-white/70">
        {getCardCornerLabel(card)}
      </span>
      <span className="font-display text-xl leading-none font-bold text-white">
        {getCardValue(card)}
      </span>
      <span className="absolute right-1.5 bottom-1 rotate-180 text-[10px] font-bold text-white/70">
        {getCardCornerLabel(card)}
      </span>
    </button>
  );
}
