import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      onwarn: (warning, handler) => {
        console.log("ummm wat");
        const { code, frame } = warning
        if (
          code === "css-unused-selector"
        ) {
          console.log("hello");
          return
        }
        handler(warning)
      },
      onLog(level, log, handler) {
        if (log.code === 'CIRCULAR_DEPENDENCY') {
          return; // Ignore circular dependency warnings
        }
        if (level === 'warn') {
          handler('error', log); // turn other warnings into errors
        } else {
          handler(level, info); // otherwise, just print the log
        }
      }
    },
  },
})
