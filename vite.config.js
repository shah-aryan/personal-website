import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'

import path from "path"

export default defineConfig({
  plugins: [react(), ghPages()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/' // Replace 'your-repo-name' with your GitHub repo name
})
