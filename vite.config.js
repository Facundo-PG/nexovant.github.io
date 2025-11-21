import { defineConfig } from 'vite';
// Si usas React, necesitas este import
// import react from '@vitejs/plugin-react'; 

const REPO_NAME = '/nexovant/'; 

export default defineConfig({
  base: REPO_NAME, 
  // plugins: [react()], // Descomenta si usas React
  
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