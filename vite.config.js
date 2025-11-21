import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/nexovant/',  // 👈 SUPER IMPORTANTE PARA GITHUB PAGES

  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  build: {
    outDir: 'dist',

    rollupOptions: {
      output: {
        // 👇 Archivos SIN HASH (para que puedas referenciarlos fijo)
        assetFileNames: `[name][extname]`,
        chunkFileNames: `[name].js`,
        entryFileNames: `[name].js`,
      }
    }
  }
});
