import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://alemonta.dev',
      generateRobotsTxt: true,
      // dynamicRoutes: ['/projects', '/about'], // todo: implement dynamic routes if needed
      // exclude: ['/private'], // todo: exclude private routes if needed
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
