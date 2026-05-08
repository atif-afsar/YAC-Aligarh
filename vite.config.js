import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isProd = mode === 'production'

  return {
    base: env.VITE_CDN_BASE || '/',
    plugins: [
      react(),
      tailwindcss(),
      // Pre-compress production assets — gzip + brotli for any host that supports them.
      // Only applies to assets large enough to actually win after the compression header overhead.
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 1024,
        filter: /\.(js|mjs|json|css|html|svg|webmanifest|txt|xml)$/i,
      }),
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 1024,
        filter: /\.(js|mjs|json|css|html|svg|webmanifest|txt|xml)$/i,
      }),
    ],
    build: {
      target: 'es2019',
      cssCodeSplit: true,
      sourcemap: false,
      reportCompressedSize: false,
      // Inline very small assets (icons, tiny SVG noise textures, etc.) to save round-trips.
      assetsInlineLimit: 4096,
      modulePreload: { polyfill: true },
      minify: 'esbuild',
      // Hint to esbuild that it's safe to drop dev-only code.
      cssMinify: 'esbuild',
      rollupOptions: {
        output: {
          // Manual chunking strategy:
          //  - Keep React + Router as a tiny shell so the home shell parses fast
          //  - Isolate the heavy animation libraries so they're cached cross-route
          //  - Per-vendor split keeps any single chunk well under ~150 KB gzipped
          manualChunks(id) {
            if (!id.includes('node_modules')) return undefined

            if (id.includes('react-router')) return 'router'
            if (id.includes('react-dom') || id.includes('/react/')) return 'react'
            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('gsap')) return 'gsap'
            if (id.includes('lenis')) return 'lenis'
            if (id.includes('react-icons')) return 'icons'

            return 'vendor'
          },
        },
      },
    },
    esbuild: isProd
      ? {
          // Strip all console.* and debugger statements out of production code.
          drop: ['console', 'debugger'],
          legalComments: 'none',
        }
      : undefined,
    optimizeDeps: {
      // Pre-bundle everything the home page touches so cold dev / preview is snappy.
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'framer-motion',
        'gsap',
        'gsap/ScrollTrigger',
      ],
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
