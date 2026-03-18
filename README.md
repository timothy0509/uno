# UNO No Mercy

A brutal UNO variant with online multiplayer gameplay. Try the original: [UNO No Mercy](https://www.mattel.com/products/uno-no-mercy)

## Features

- **Full UNO No Mercy ruleset**: Stacking, Mercy rule (25+ cards = knockout), 7 and 0 rules
- **Online multiplayer**: Real-time gameplay for 2-6 players
- **Glassmorphic UI**: Modern, sleek design
- **Guest support**: Play without an account

## Game Rules

See [rules.md](./rules.md) for the complete ruleset.

### Key Rules

- **Draw Until Playable**: Draw cards until you get one you can play
- **Stacking**: Stack +2 and +4 cards on other players
- **Mercy Rule**: 25+ cards = instant knockout
- **7 Rule**: Play a 7 to swap hands with another player
- **0 Rule**: Play a 0 to pass your hand to the next player
- **Wild Draw 6**: The most brutal card - draw 6 or stack!
- **Wild Draw 10**: Maximum devastation - draw 10 or stack!

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4
- **Database**: SQLite (Prisma)
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Generate Prisma client
npm run postinstall

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Landing page
│   ├── lobby/         # Game lobby
│   └── game/[id]/     # Game interface
├── hooks/
│   └── useGame.ts     # Game state hook
├── lib/game/
│   ├── deck.ts        # Card deck utilities
│   ├── engine.ts      # Game logic
│   └── store.ts       # In-memory game store
├── styles/
│   └── globals.css    # Glassmorphic styles
└── types/
    └── game.ts        # TypeScript types
```

## Deployment

Deploy to Vercel with one click. No DATABASE_URL required for basic deployment (uses in-memory store).

## License

MIT
