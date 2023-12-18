import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio-ab/",
  publicDir: true,
  plugins: [react()],
  build: { chunkSizeWarningLimit: 600 },
});
