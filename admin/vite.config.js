import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      port: 3000, 
    },
    proxy: {
      '/api': {
        target: 'https://iiuc-cafe-backend.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

