# AGENTS.md - UNO No Mercy

## Project Overview

UNO No Mercy multiplayer web game. Next.js 15 App Router + Prisma (MySQL) + Tailwind CSS 4 + TypeScript. Real-time updates via SSE (Server-Sent Events), not WebSockets (despite `socket.io` being a dependency).

## Developer Commands

```bash
npm run dev          # Next.js dev server with --turbo
npm run build        # Production build
npm run start        # Start production server
npm run check        # next lint && tsc --noEmit (run this before committing)
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix lint issues
npm run typecheck    # tsc --noEmit
npm run format:check # Prettier dry-run
npm run format:write # Prettier fix
npm run db:generate  # prisma migrate dev (dev migrations + generate client)
npm run db:migrate   # prisma migrate deploy (prod migrations)
npm run db:push      # prisma db push (schema sync without migrations)
npm run db:studio    # prisma studio (DB GUI)
```

**No test framework is configured.** There are no tests in this repo.

## Architecture

```
src/
├── app/              # Next.js App Router
│   ├── api/
│   │   ├── game/     # Game REST endpoints + SSE subscribe
│   │   └── lobby/    # Lobby REST endpoints
│   ├── game/[id]/    # Game page
│   ├── lobby/        # Lobby page
│   └── page.tsx      # Landing page
├── hooks/
│   └── useGame.ts    # Client hook: fetch + SSE subscriptions + API calls
├── lib/game/
│   ├── engine.ts     # Pure game logic (initializeGame, playCard, drawCardsFromDeck, callUno)
│   ├── store.ts      # In-memory Map-backed game store (NOT used by API routes)
│   ├── db.ts         # Prisma-backed game store (used by API routes)
│   └── deck.ts       # Card deck utilities (createDeck, dealCards, canPlayCard, etc.)
├── server/
│   └── db.ts         # Prisma client singleton (globalThis dedup)
├── styles/
│   └── globals.css
└── types/
    └── game.ts       # TypeScript types (GameState, Card, Color, etc.)
```

### Key Architecture Facts

- **Game state is persisted in MySQL via Prisma.** Cards and deck are stored as JSON strings.
- **`lib/game/db.ts` is the authoritative store** used by API routes. `lib/game/store.ts` is an in-memory alternative that is NOT wired into the API layer.
- **Real-time updates use SSE** (`EventSource` in `useGame.ts`), subscribing to `/api/game/[id]/subscribe`.
- **Path alias**: `~/*` → `./src/*`
- **Prisma client output**: `generated/prisma/` (not in `node_modules`)

## Prisma

- **Database**: MySQL (configured in `prisma/schema.prisma`)
- **Models**: `User`, `UserStat`, `Game`, `GamePlayer`, `GameAction`, `Lobby`, `LobbyPlayer`
- **Game/cards stored as JSON strings** in the database — parsed/serialized in `lib/game/db.ts`
- **Postinstall hook** auto-runs `prisma generate` with a fallback `DATABASE_URL`

## Environment

- Env validation via `@t3-oss/env-nextjs` in `src/env.js`
- Required: `DATABASE_URL` (optional — falls back to SQLite for local dev)
- Skip validation: `SKIP_ENV_VALIDATION=1` (useful for Docker builds)
- `next.config.js` imports `src/env.js` at the top — env errors surface on `dev`/`build`

## Code Conventions

- **TypeScript strict mode** with `noUncheckedIndexedAccess`
- **ESLint**: flat config, `next/core-web-vitals`, typescript-eslint recommended + stylistic
- **Prettier**: with `prettier-plugin-tailwindcss` for class sorting
- **ESM**: `"type": "module"` in package.json
- **Import order**: prefer type imports (`import type { ... }`)
- **Unused vars**: prefix with `_` to suppress

## Game Rules

See `rules.md` for the full UNO No Mercy ruleset. Key mechanics implemented in `lib/game/engine.ts`:

- Stacking (+2/+4/+6/+10)
- Mercy rule (25+ cards = knockout)
- 7 rule (swap hands)
- 0 rule (rotate hands)
- Wild cards: Draw 6, Draw 10, Reverse Draw 4, Color Roulette

<!-- convex-ai-start -->
This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read `convex/_generated/ai/guidelines.md` first** for important guidelines on how to correctly use Convex APIs and patterns. The file contains rules that override what you may have learned about Convex from training data.

Convex agent skills for common tasks can be installed by running `npx convex ai-files install`.
<!-- convex-ai-end -->
