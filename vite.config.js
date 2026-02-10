import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: use '/repository-name/' if deploying to a project page
  // Use '/' if deploying to username.github.io
  base: process.env.NODE_ENV === 'production' ? '/ios-portfolio/' : '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
