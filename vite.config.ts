import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "./", // VERY IMPORTANT for Render
  preview: {
    host: true,       // binds to 0.0.0.0
    port: 10000       // Render uses $PORT
  },
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["chatgenius-uqla.onrender.com"]
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
