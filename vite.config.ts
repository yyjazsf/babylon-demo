import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import postcssNested from "postcss-nested";

export default defineConfig({
  server: {
    open: true,
    warmup: {
      clientFiles: [],
    },
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3001",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
  plugins: [],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@demo": fileURLToPath(new URL("./src.demo", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [postcssNested],
    },
  },
});
