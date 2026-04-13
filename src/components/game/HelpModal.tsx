import { HELP_CARDS } from "./gameHelpers";

export function HelpModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="animate-fade-in-scale fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass-premium card-shadow max-h-[80vh] w-full max-w-md overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-lg font-bold text-white">
            Card Reference
          </h3>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white"
            aria-label="Close"
          >
            {"\u2715"}
          </button>
        </div>
        <div className="space-y-2">
          {HELP_CARDS.map((card) => (
            <div
              key={card.value}
              className="flex items-center gap-3 rounded-lg bg-white/5 p-2"
            >
              <span
                className={`inline-flex h-10 w-10 items-center justify-center rounded text-sm font-bold text-white ${card.color}`}
              >
                {card.value}
              </span>
              <span className="text-sm text-white/70">{card.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
