import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "https://alex-bagin.github.io/portfolio-ab/",
  plugins: [react()],
});
