export function TurnIndicator({
  isMyTurn,
  currentPlayerName,
}: {
  isMyTurn: boolean;
  currentPlayerName: string;
}) {
  return (
    <div className="mb-2 flex items-center justify-center">
      <span
        className={`rounded-full px-3 py-1 text-sm font-medium ${
          isMyTurn
            ? "bg-green-400/20 text-green-300 ring-1 ring-green-400/40"
            : "bg-white/5 text-white/50"
        }`}
      >
        {isMyTurn ? "Your Turn" : `${currentPlayerName}'s Turn`}
      </span>
    </div>
  );
}
