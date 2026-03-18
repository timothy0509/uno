import Link from "next/link";

export default function HomePage() {
  return (
    <main className="gradient-bg flex min-h-screen flex-col items-center justify-center p-8">
      <div className="container flex flex-col items-center justify-center gap-12">
        <div className="text-center">
          <h1 className="text-glow text-6xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            UNO <span className="text-red-500">No Mercy</span>
          </h1>
          <p className="mt-4 text-xl text-white/70">
            The brutal variant of UNO - Stack penalties, swap hands, or get
            knocked out!
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/lobby"
            className="glass glass-hover button-primary px-8 py-4 text-xl font-bold"
          >
            Play Now
          </Link>
        </div>

        <div className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="glass card-shadow p-6">
            <h2 className="mb-3 text-xl font-bold text-white">
              😈 No Mercy Rules
            </h2>
            <ul className="space-y-2 text-white/70">
              <li>• Draw cards until you can play</li>
              <li>• Stack Draw 2/4/6/10 cards</li>
              <li>• 7 card = Swap hands with anyone</li>
              <li>• 0 card = Everyone passes hands</li>
              <li>• 25+ cards = Knocked out!</li>
            </ul>
          </div>

          <div className="glass card-shadow p-6">
            <h2 className="mb-3 text-xl font-bold text-white">
              🃏 Special Cards
            </h2>
            <ul className="space-y-2 text-white/70">
              <li>
                • <span className="text-red-400">Wild Draw 6</span> -Next player
                draws 6
              </li>
              <li>
                • <span className="text-yellow-400">Wild Draw 10</span> - Next
                draws 10!
              </li>
              <li>
                • <span className="text-blue-400">Wild Reverse Draw 4</span> -
                Reverse + 4
              </li>
              <li>
                • <span className="text-green-400">Wild Color Roulette</span> -
                Draw until color match
              </li>
              <li>• Skip Everyone - Take another turn!</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
