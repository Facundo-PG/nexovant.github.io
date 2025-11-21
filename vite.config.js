import { defineConfig } from 'vite';

// La ruta base es correcta
const REPO_NAME = '/nexovant/'; 

export default defineConfig({
  base: REPO_NAME, 
  
  // Si usas React, descomenta esta línea:
  // plugins: [react()], 
  
  build: {
    // 💥 ESTO ELIMINA LA CARPETA 'assets' EN EL BUILD FINAL 💥
    rollupOptions: {
      output: {
        assetFileNames: `[name].[ext]`,
        chunkFileNames: `[name].[ext]`,
        entryFileNames: `[name].js`
      }
    }
  }
});