import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import tailwindcss from "tailwindcss";

export default {
  plugins: [react(), tailwindcss(), cssInjectedByJsPlugin()],
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
};
