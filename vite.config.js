import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    allowedHosts: ['preview.fschr.me'],
    cors: {
      origin: ['http://preview.fschr.me', 'https://preview.fschr.me'],
    },
  },
  preview: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    allowedHosts: ['preview.fschr.me'],
    cors: {
      origin: ['http://preview.fschr.me', 'https://preview.fschr.me'],
    },
  },
  build: {
    rollupOptions: {
      input: {
        about: resolve(__dirname, 'index.html'),
        social: resolve(__dirname, 'soziales.html'),
        food: resolve(__dirname, 'food.html'),
        forum: resolve(__dirname, 'forum.html'),
        account: resolve(__dirname, 'account.html'),
        impressum: resolve(__dirname, 'impressum.html'),
        datenschutz: resolve(__dirname, 'datenschutz.html'),
      },
    },
  },
})
