/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTest.ts"],
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
});
