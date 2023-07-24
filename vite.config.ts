import windiCSS from "vite-plugin-windicss";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// // https://vitejs.dev/config/
// export default defineConfig({
// });
export default defineConfig({
  plugins: [react(), windiCSS(), cssInjectedByJsPlugin()],
  // base:
  build: {
    rollupOptions: {
      input: {
        app: "./src/main.tsx",
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
});
