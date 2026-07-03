import { defineConfig } from "vite"

// Root dev server for the main RuView WiFi DensePose UI (static ES-module app in ./ui).
// This makes the v0 preview serve the flagship RuView sensing dashboard instead of
// the standalone nvsim demo that lives in ./dashboard.
export default defineConfig({
  root: "ui",
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: true,
  },
})
