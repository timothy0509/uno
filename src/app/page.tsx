import Link from "next/link";

// SVG Icons
function RulesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-red-400"
      fill="currentColor"
    >
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
  );
}

function CardsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-yellow-400"
      fill="currentColor"
    >
      <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
    </svg>
  );
}

function FloatingBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="particle absolute rounded-full"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: `${20 + i * 8}px`,
            height: `${20 + i * 8}px`,
            background:
              i % 2 === 0
                ? "radial-gradient(circle, rgba(196, 30, 58, 0.15) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)",
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${8 + i * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="gradient-bg relative flex min-h-screen flex-col items-center justify-center p-8">
      <FloatingBackground />

      <div className="relative z-10 container flex flex-col items-center justify-center gap-16">
        <div className="text-center">
          <h1 className="animate-fade-in-up text-glow font-display text-6xl font-extrabold tracking-tight text-white sm:text-[5.5rem]">
            UNO <span className="text-red-500">No Mercy</span>
          </h1>
          <p
            className="animate-fade-in-up mt-6 max-w-2xl text-xl leading-relaxed text-white/70"
            style={{ animationDelay: "100ms" }}
          >
            The brutal variant of UNO — Stack penalties, swap hands, or get
            knocked out!
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/lobby"
            className="animate-fade-in-scale glass glass-hover button-primary px-10 py-5 text-xl font-bold"
            style={{ animationDelay: "200ms" }}
          >
            Play Now
          </Link>
        </div>

        <div className="grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div
            className="animate-fade-in-up glass card-shadow p-8"
            style={{ animationDelay: "300ms" }}
          >
            <div className="mb-4 flex items-center gap-3">
              <RulesIcon />
              <h2 className="font-display text-2xl font-bold text-white">
                No Mercy Rules
              </h2>
            </div>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span>Draw cards until you can play</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span>Stack Draw 2/4/6/10 cards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span>7 card = Swap hands with anyone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span>0 card = Everyone passes hands</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span>25+ cards = Knocked out!</span>
              </li>
            </ul>
          </div>

          <div
            className="animate-fade-in-up glass card-shadow p-8"
            style={{ animationDelay: "400ms" }}
          >
            <div className="mb-4 flex items-center gap-3">
              <CardsIcon />
              <h2 className="font-display text-2xl font-bold text-white">
                Special Cards
              </h2>
            </div>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-400">+6</span>
                <span>Wild Draw 6 — Next player draws 6</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-yellow-400">+10</span>
                <span>Wild Draw 10 — Next draws 10!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-400">R+4</span>
                <span>Wild Reverse Draw 4</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-400">?</span>
                <span>Wild Color Roulette — Draw until match</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-white/50">⊘⊘</span>
                <span>Skip Everyone — Take another turn!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
