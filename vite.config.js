import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: env.VITE_CDN_BASE || '/',
    plugins: [
      react(),
      tailwindcss(),
      viteCompression({ algorithm: 'gzip', ext: '.gz' }),
      viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
    ],
    build: {
      target: 'es2019',
      cssCodeSplit: true,
      modulePreload: { polyfill: true },
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            motion: ['framer-motion'],
            gsap: ['gsap'],
          },
        },
      },
    },
    server: {
      proxy: {
        // `vercel dev` in `ai-assistant-backend` (default :3000) exposes `/api/chat`
        '/api': {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
        },
      },
    },
  }
})
