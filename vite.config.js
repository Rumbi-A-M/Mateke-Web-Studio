import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` is set from an env var so GitHub Pages project sites (served from
// https://<user>.github.io/<repo>/) resolve assets correctly. Locally it
// defaults to '/'. The deploy workflow sets VITE_BASE_PATH automatically —
// see README.md for the manual alternative.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
