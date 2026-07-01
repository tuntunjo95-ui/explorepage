import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GITHUB_PAGES_BASE should be /repo-name/ for project pages.
export default defineConfig({
  base: process.env.GITHUB_PAGES_BASE || '/',
  plugins: [react()],
})
