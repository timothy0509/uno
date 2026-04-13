import { useRef, useEffect } from "react";
import { formatActionText, getActionIcon } from "./gameHelpers";
import type { PlayerState } from "~/types/game";

export function ActionFeed({
  actions,
  players,
  currentUserId,
  showActionFeed,
  onToggle,
}: {
  actions: Array<{
    _id: string;
    type: string;
    actorUserId: string;
    payload?: unknown;
  }>;
  players: PlayerState[];
  currentUserId: string | null;
  showActionFeed: boolean;
  onToggle: () => void;
}) {
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [actions]);

  if (!showActionFeed) {
    return actions.length > 0 ? (
      <div className="mb-2 flex justify-center">
        <button
          onClick={onToggle}
          className="text-xs text-white/30 hover:text-white/60"
        >
          Show Game Log
        </button>
      </div>
    ) : null;
  }

  return (
    <div className="glass mb-2 p-2">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs text-white/50">Game Log</span>
        <button
          onClick={onToggle}
          className="text-xs text-white/30 hover:text-white/60"
        >
          Hide
        </button>
      </div>
      <div ref={feedRef} className="action-feed space-y-1">
        {actions.map((action) => (
          <div key={action._id} className="text-xs text-white/60">
            <span className="mr-1">{getActionIcon(action.type)}</span>
            {formatActionText(
              {
                type: action.type,
                actorUserId: action.actorUserId,
                payload: action.payload,
              },
              players,
              currentUserId,
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
