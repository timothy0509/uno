import { getGameById } from "~/lib/game/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const sendEvent = (data: unknown) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
      };

      let lastUpdatedAt: Date | null = null;

      const checkForUpdates = async () => {
        const game = await getGameById(id);
        if (!game) {
          sendEvent({ type: "error", message: "Game not found" });
          controller.close();
          return;
        }

        if (!lastUpdatedAt || game.updatedAt > lastUpdatedAt) {
          lastUpdatedAt = game.updatedAt;
          sendEvent({ type: "game-state-update", game });
        }
      };

      await checkForUpdates();

      const interval = setInterval(() => {
        void checkForUpdates();
      }, 500);

      request.signal.addEventListener("abort", () => {
        clearInterval(interval);
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
