import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/nexovant/',

  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name][extname]`, // 👈 NO HASH
        chunkFileNames: `assets/[name].js`,
        entryFileNames: `assets/[name].js`,
      }
    }
  }
});
