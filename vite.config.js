import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'   // if using React; adjust for your framework
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cloudflare({
      // optional config
    }),
  ],
  build: {
    rollupOptions: {
      external: ['node:events', 'node:perf_hooks', 'node:tty', 'tailwindcss']
    }
  }
})
