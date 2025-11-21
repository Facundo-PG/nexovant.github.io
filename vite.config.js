import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; 
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/nexovant/', 
  // 2. Activar el plugin de Vue
  plugins: [vue()], 

  // 3. Configuración de Resolución de Alias (para que @/ funcione)
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  
  // 4. Configuración CRÍTICA del build: Aplanamiento de la estructura
  build: {
    outDir: 'dist', 
    rollupOptions: {
      output: {
        // Establecer nombres de archivo para aplanar la estructura
        // Los hashes seguirán existiendo, pero estarán directamente en 'dist/'
        assetFileNames: '[name]-[hash].[ext]', 
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js' 
      }
    }
  }
});