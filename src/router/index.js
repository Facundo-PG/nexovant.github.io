import { createRouter, createWebHistory } from 'vue-router';
// Asumiendo que tus vistas están en @/views/
import LandingView from '@/views/LandingView.vue'; 
import HomeView from '@/views/HomeView.vue'; // Ejemplo

// 🛑 CRÍTICO: La base del historial debe ser el nombre del repositorio ('/nexovant/').
// Esto soluciona el problema de subdirectorio de GitHub Pages.
const router = createRouter({
  history: createWebHistory('/nexovant/'), // <-- CORREGIDO
  
  routes: [
    {
      // La ruta raíz de la aplicación (que en el navegador es /nexovant/)
      path: '/', 
      name: 'Landing',
      component: LandingView 
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    }
    // Añade el resto de tus rutas aquí
  ]
});

export default router;