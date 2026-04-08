import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
          ],
          theme: {
            extend: {
              colors: {
                primary: "#000000",
                secondary: "#1E3A8A",
                accent: "#B8B8D1",
                highlight: "#2563EB",
                text_light: "#FFFFFF",
                text_dark: "#1F2937",
              },
              fontFamily: {
                heading: ["Inter", "sans-serif"],
                body: ["Inter", "sans-serif"],
              },
            },
          },
          plugins: [],
        }),
        autoprefixer(),
      ],
    },
  },
  build: {
    cssMinify: 'esbuild',
  },
})
