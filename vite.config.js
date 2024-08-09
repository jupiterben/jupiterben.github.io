import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import postcss from './postcss.config.js';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss,
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',
      },
    },
  },
  plugins: [svelte({
    /* plugin options */
  })]
})
