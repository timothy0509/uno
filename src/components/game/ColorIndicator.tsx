import type { Color } from "~/types/game";

const COLOR_CLASSES: Record<Color, string> = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-400",
};

export function ColorIndicator({ color }: { color: Color | null }) {
  if (!color) return null;

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-white/70">Color:</span>
      <div
        className={`h-5 w-5 rounded-full shadow-sm ${COLOR_CLASSES[color] ?? ""}`}
      />
    </div>
  );
}
