import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'
// Si usas React, necesitas este import
// import react from '@vitejs/plugin-react'; 

const REPO_NAME = '/nexovant/'; 

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  base: REPO_NAME, 
  // plugins: [react()], // Descomenta si usas React
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    // Definimos el directorio de salida (ya está correcto)
    outDir: 'dist', 
    
    // Configuración Rollup para renombrar y aplanar
    rollupOptions: {
      output: {
        // Asegura que los archivos JS/CSS vayan al root de dist
        assetFileNames: 'index.css', // Forzamos el nombre final del CSS
        chunkFileNames: 'index.js',
        entryFileNames: 'index.js' // Forzamos el nombre final del JS
      }
    }
  }
});
