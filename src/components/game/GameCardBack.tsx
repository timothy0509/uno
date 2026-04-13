export function GameCardBack({
  size = "mini",
  index = 0,
}: {
  size?: "mini" | "full";
  index?: number;
}) {
  const staggerClass = `card-stagger-${Math.min(index + 1, 7)}`;
  const sizeClass =
    size === "mini" ? "h-10 w-7" : "h-[96px] w-[68px] sm:h-[112px] sm:w-[80px]";

  return (
    <div
      className={`animate-card-deal ${staggerClass} card-back-pattern ${sizeClass} flex items-center justify-center rounded-lg ring-1 ring-white/5`}
    >
      {size === "full" && (
        <span className="font-display text-xs font-bold tracking-wider text-white/30">
          UNO
        </span>
      )}
    </div>
  );
}
