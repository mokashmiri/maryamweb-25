import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/maryamweb-25/', // 👈 add this line
  plugins: [react()],
})
