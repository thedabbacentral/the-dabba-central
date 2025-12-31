import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components/index.jsx"),
      "@pages": path.resolve(__dirname, "./src/pages/index.jsx"),
      "@contexts": path.resolve(__dirname, "./src/contexts/index.jsx"),
      "@utils": path.resolve(__dirname, "./src/utils/index.jsx"),
      "@data-access": path.resolve(__dirname, "./src/data-access/index.jsx"),
      "@icons": path.resolve(__dirname, "./src/icons/index.jsx"),
      "@constants": path.resolve(__dirname, "./src/constants/index.jsx"),
    },
  },
});
