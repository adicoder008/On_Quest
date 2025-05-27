// filepath: /home/swati/On_Quest/On_Quest/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@mui/material': '@mui/material',
      '@mui/x-date-pickers': '@mui/x-date-pickers',
    
    },
  },
})