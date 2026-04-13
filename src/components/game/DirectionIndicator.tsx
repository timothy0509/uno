export function DirectionIndicator({ direction }: { direction: 1 | -1 }) {
  return (
    <span
      className="text-xl font-bold text-white/70"
      title={direction === 1 ? "Clockwise" : "Counter-clockwise"}
    >
      {direction === 1 ? "\u21BB" : "\u21BA"}
    </span>
  );
}
