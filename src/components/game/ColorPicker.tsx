import { CARD_COLORS } from "./gameHelpers";
import type { Color } from "~/types/game";

export function ColorPicker({
  onSelect,
}: {
  onSelect: (color: Color) => void;
}) {
  const colorClasses: Record<Color, string> = {
    red: "bg-red-500 hover:bg-red-400",
    blue: "bg-blue-500 hover:bg-blue-400",
    green: "bg-green-500 hover:bg-green-400",
    yellow: "bg-yellow-400 hover:bg-yellow-300",
  };

  return (
    <div className="animate-fade-in-scale glass-shimmer glass card-shadow p-6">
      <h3 className="font-display mb-4 text-center text-lg font-bold text-white">
        Choose a color
      </h3>
      <div className="flex gap-3">
        {CARD_COLORS.map((color, index) => (
          <button
            key={color}
            onClick={() => onSelect(color)}
            className={`animate-fade-in-scale card-interactive h-12 w-12 rounded-full ${colorClasses[color]}`}
            style={{ animationDelay: `${index * 80}ms` }}
            aria-label={`Choose ${color}`}
          />
        ))}
      </div>
    </div>
  );
}
