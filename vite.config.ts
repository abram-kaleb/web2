import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // Pakai titik agar path-nya relatif (anti error 404)
  build: {
    outDir: 'docs', // Build ke folder docs
  }
})