export type Color = "red" | "blue" | "green" | "yellow";

export type NumberValue =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

export type ActionValue =
  | "Draw2"
  | "Draw4"
  | "Skip"
  | "SkipEveryone"
  | "Reverse"
  | "DiscardAll";

export type WildValue =
  | "WildDraw6"
  | "WildDraw10"
  | "WildReverseDraw4"
  | "WildColorRoulette";

export interface NumberedCard {
  id: string;
  type: "numbered";
  color: Color;
  value: NumberValue;
}

export interface ActionCard {
  id: string;
  type: "action";
  color: Color;
  value: ActionValue;
}

export interface WildCard {
  id: string;
  type: "wild";
  color?: Color;
  value: WildValue;
}

export type Card = NumberedCard | ActionCard | WildCard;

export interface PlayerState {
  id: string;
  userId: string;
  name: string;
  position: number;
  cards: Card[];
  isKnockedOut: boolean;
  calledUno: boolean;
}

export interface GameState {
  id: string;
  status: "WAITING" | "PLAYING" | "FINISHED";
  deck: Card[];
  discardPile: Card[];
  setAsidePile: Card[];
  currentPlayerIndex: number;
  direction: 1 | -1;
  players: PlayerState[];
  drawPenalty: number;
  currentColor: Color | null;
  pendingColorRoulette: {
    chooserPlayerId: string;
    sourcePlayerId: string;
  } | null;
  lastPlayedCard: Card | null;
  winner: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface LobbyState {
  id: string;
  code: string;
  players: LobbyPlayer[];
  status: "WAITING" | "PLAYING" | "FINISHED";
  createdBy: string;
}

export interface LobbyPlayer {
  id: string;
  name: string;
  userId: string;
  position: number;
  isReady: boolean;
}

export interface GameAction {
  type:
    | "play"
    | "draw"
    | "stack"
    | "swap"
    | "pass_hands"
    | "knockout"
    | "call_uno"
    | "win";
  playerId: string;
  card?: Card;
  cards?: Card[];
  targetId?: string;
  color?: Color;
  drawCount?: number;
}

export interface PlayCardResult {
  success: boolean;
  error?: string;
  gameState?: GameState;
  requiresColorSelect?: boolean;
  requiresTargetSelect?: boolean;
  validTargets?: string[];
}

export interface DrawResult {
  success: boolean;
  error?: string;
  cards?: Card[];
  gameState?: GameState;
}

export interface StackResult {
  success: boolean;
  error?: string;
  gameState?: GameState;
  newPenalty?: number;
}

export type SocketEvent =
  | "join-game"
  | "leave-game"
  | "start-game"
  | "play-card"
  | "draw-cards"
  | "stack-penalty"
  | "call-uno"
  | "select-color"
  | "select-target"
  | "game-state-update"
  | "player-joined"
  | "player-left"
  | "game-over"
  | "error";

export interface SocketEventData {
  "join-game": { gameId: string };
  "leave-game": { gameId: string };
  "start-game": { gameId: string };
  "play-card": { gameId: string; cardId: string; color?: Color };
  "draw-cards": { gameId: string };
  "stack-penalty": { gameId: string; cardId: string; color?: Color };
  "call-uno": { gameId: string };
  "select-color": { gameId: string; color: Color };
  "select-target": { gameId: string; targetId: string };
  "game-state-update": GameState;
  "player-joined": { playerId: string; playerName: string };
  "player-left": { playerId: string };
  "game-over": { winnerId: string; winnerName: string };
  error: { message: string };
}

export const CARD_COLORS: Color[] = ["red", "blue", "green", "yellow"];

export const NUMBER_VALUES: NumberValue[] = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

export const ACTION_VALUES: ActionValue[] = [
  "Draw2",
  "Draw4",
  "Skip",
  "SkipEveryone",
  "Reverse",
  "DiscardAll",
];

export const WILD_VALUES: WildValue[] = [
  "WildDraw6",
  "WildDraw10",
  "WildReverseDraw4",
  "WildColorRoulette",
];
