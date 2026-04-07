# AGENTS.md - UNO No Mercy

## Project Overview

UNO No Mercy multiplayer web game. Next.js 15 App Router + Convex (real-time backend) + Tailwind CSS 4 + TypeScript. Auth via better-auth with anonymous sign-in.

## Developer Commands

```bash
npm run dev          # Next.js dev server with --turbo
npm run convex:dev   # Convex dev server (run alongside npm run dev)
npm run build        # Production build
npm run start        # Start production server
npm run check        # next lint && tsc --noEmit (run this before committing)
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix lint issues
npm run typecheck    # tsc --noEmit
npm run format:check # Prettier dry-run
npm run format:write # Prettier fix
```

**No test framework is configured.** There are no tests in this repo.

## Architecture

```
src/                          # Next.js frontend
├── app/                      # Next.js App Router
│   ├── api/auth/[...all]/    # Better-auth HTTP handler
│   ├── game/[id]/            # Game page
│   ├── lobby/                # Lobby page
│   └── page.tsx              # Landing page
├── hooks/
│   └── useGame.ts            # Client hook: Convex queries/mutations + auth
├── lib/game/
│   ├── engine.ts             # Pure game logic (initializeGame, playCard, drawCardsFromDeck, callUno)
│   ├── store.ts              # In-memory Map-backed store (LEGACY, not used)
│   └── deck.ts               # Card deck utilities
├── lib/auth-client.ts        # Better-auth client (anonymous + Convex)
└── env.js                    # Env validation (requires Convex URLs)

convex/                       # Convex backend
├── games.ts                  # Game queries/mutations (get, create, join, start, playCard, draw, callUno)
├── lobbies.ts                # Lobby queries/mutations
├── users.ts                  # User queries
├── stats.ts                  # Stats tracking
├── schema.ts                 # Convex schema (games, gamePlayers, gameActions, lobbies, lobbyPlayers, userStats)
├── http.ts                   # HTTP router for better-auth
├── auth.config.ts            # Convex auth config
├── convex.config.ts          # Convex app config (better-auth plugin)
└── lib/auth.ts               # requireUserId helper
```

### Key Architecture Facts

- **Convex is the backend.** All game state lives in Convex tables, not MySQL. Real-time updates happen automatically via Convex React hooks (`useQuery`, `useMutation`).
- **`convex/games.ts` is the authoritative game API.** It uses `*Generic` function types (`queryGeneric`, `mutationGeneric`) and calls into `src/lib/game/engine.ts` for pure logic.
- **Game state stored in Convex tables** (`games`, `gamePlayers`, `gameActions`), not JSON strings in a single row.
- **Auth**: better-auth with `@convex-dev/better-auth` plugin. Anonymous sign-in via `signInAnonymous()`. User identity derived from `ctx.auth.getUserIdentity()` in Convex functions.
- **Path alias**: `~/*` → `./src/*`
- **`src/lib/game/store.ts` is legacy** — the in-memory store from the old architecture. It is NOT wired into anything.
- **`src/lib/game/db.ts` does not exist** — it was removed during the Convex migration.

## Convex

- **Schema**: `convex/schema.ts` — tables: `games`, `gamePlayers`, `gameActions`, `lobbies`, `lobbyPlayers`, `userStats`
- **Function types**: Uses `queryGeneric`/`mutationGeneric` (not the standard `query`/`mutation`) to allow importing from `~/types/game`
- **Auth**: `requireUserId()` in `convex/lib/auth.ts` validates identity via `ctx.auth.getUserIdentity()`
- **HTTP routes**: `convex/http.ts` mounts better-auth at `/api/auth`
- **Read `convex/_generated/ai/guidelines.md` first** when writing Convex code — it contains important API patterns

## Environment

- Env validation via `@t3-oss/env-nextjs` in `src/env.js`
- **Required**: `NEXT_PUBLIC_CONVEX_URL` and `NEXT_PUBLIC_CONVEX_SITE_URL`
- Skip validation: `SKIP_ENV_VALIDATION=1` (useful for Docker builds)
- `next.config.js` imports `src/env.js` at the top — env errors surface on `dev`/`build`
- **No DATABASE_URL needed** — Convex manages its own database

## Code Conventions

- **TypeScript strict mode** with `noUncheckedIndexedAccess` + `verbatimModuleSyntax`
- **ESLint**: flat config, `next/core-web-vitals`, typescript-eslint recommended + stylistic type-checked
- **Prettier**: with `prettier-plugin-tailwindcss` for class sorting
- **ESM**: `"type": "module"` in package.json
- **Import order**: prefer type imports (`import type { ... }`), enforced by `@typescript-eslint/consistent-type-imports`
- **Unused vars**: prefix with `_` to suppress (`argsIgnorePattern: "^_"`)

## Game Rules

See `rules.md` for the full UNO No Mercy ruleset. Key mechanics in `src/lib/game/engine.ts`:

- Stacking (+2/+4/+6/+10)
- Mercy rule (25+ cards = knockout)
- 7 rule (swap hands)
- 0 rule (rotate hands)
- Wild cards: Draw 6, Draw 10, Reverse Draw 4, Color Roulette
