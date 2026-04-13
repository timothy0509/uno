export function TargetPicker({
  players,
  onSelect,
}: {
  players: Array<{ id: string; name: string; cardCount: number }>;
  onSelect: (playerId: string) => void;
}) {
  return (
    <div className="animate-fade-in-scale glass-shimmer glass card-shadow p-6">
      <h3 className="font-display mb-4 text-center text-lg font-bold text-white">
        Choose player to swap with
      </h3>
      <div className="flex flex-col gap-2">
        {players.map((player) => (
          <button
            key={player.id}
            onClick={() => onSelect(player.id)}
            className="button-secondary px-4 py-2 text-left"
          >
            {player.name}{" "}
            <span className="text-white/50">({player.cardCount} cards)</span>
          </button>
        ))}
      </div>
    </div>
  );
}
