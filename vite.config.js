import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // پلاگین رو اضافه می‌کنیم

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // و اینجا فعالش می‌کنیم
  ],
})