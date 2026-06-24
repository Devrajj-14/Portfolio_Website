import { createServer } from "vite";
import react from "@vitejs/plugin-react";

const server = await createServer({
  root: process.cwd(),
  configFile: false,
  cacheDir: ".vite-cache",
  plugins: [react()],
  optimizeDeps: {
    force: true,
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
    fs: {
      allow: [process.cwd()],
    },
  },
});

await server.listen();
server.printUrls();

const shutdown = async () => {
  await server.close();
  process.exit(0);
};

process.once("SIGINT", shutdown);
process.once("SIGTERM", shutdown);

await new Promise(() => {});
