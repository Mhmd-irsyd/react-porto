// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // opsional, buat alias jika mau pakai @/components dst.
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
  // ⬇⬇ Tambahkan ini untuk mencegah error 404 saat refresh di halaman lain
  base: '/',
  // ⬇⬇ Vite pakai plugin bawaan untuk SPA fallback
  // Tapi kalau kamu hosting di luar (seperti Vercel), pastikan Vercel juga diatur pakai `vercel.json`
})
