import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      // این خط باعث می‌شود Tailwind فایل‌های شما را به درستی اسکن کند
      // اگر مشکل حل نشد، این بخش را حذف کنید و فقط tailwindcss() بگذارید
      // اما معمولاً در v4 نیازی به این پیکربندی پیچیده نیست مگر اینکه مشکل اسکن داشته باشید
    }),
  ],
})