import type { GameState } from "~/types/game";
import { DirectionIndicator } from "./DirectionIndicator";
import { ColorIndicator } from "./ColorIndicator";
import { getNextPlayerIndex } from "~/lib/game/engine";

export function GameTopBar({
  gameState,
  gameId,
  currentUserId,
  onHelpClick,
}: {
  gameState: GameState;
  gameId: string | null;
  currentUserId: string | null;
  onHelpClick: () => void;
}) {
  const nextPlayerIdx = getNextPlayerIndex(gameState);
  const nextPlayer =
    nextPlayerIdx !== null ? gameState.players[nextPlayerIdx] : null;
  const drawTargetName =
    nextPlayer?.id === currentUserId ? "You" : nextPlayer?.name;

  return (
    <div className="animate-fade-in-up glass-premium mb-2 flex items-center justify-between p-2.5">
      <div className="flex items-center gap-2">
        <span className="text-xs text-white/70">Game:</span>
        <span className="font-mono text-xs text-white">
          {gameId?.slice(0, 6).toUpperCase()}
        </span>
        <DirectionIndicator direction={gameState.direction} />
      </div>
      <div className="flex items-center gap-2">
        {gameState.drawPenalty > 0 && (
          <div className="rounded-full bg-red-500/20 px-2.5 py-0.5 text-xs font-bold text-red-400 ring-1 ring-red-500/40">
            +{gameState.drawPenalty}
            {drawTargetName && (
              <span className="ml-1 text-white/50">
                {"\u2192"} {drawTargetName}
              </span>
            )}
          </div>
        )}
        <ColorIndicator color={gameState.currentColor} />
        <button
          onClick={onHelpClick}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-white/70 hover:bg-white/20 hover:text-white"
          aria-label="Rules & Help"
        >
          ?
        </button>
      </div>
    </div>
  );
}
