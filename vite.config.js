import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
      babel: {
        plugins: ['styled-components'],
        babelrc: false,
        configFile: false,
      },
    })
  ],
  base: '/fullstack-m3-react-2-usestate-useeffect/',
  server: {
    watch: {
      usePolling: true,
      interval: 100
    }
  }
})
