import { createRouter, createWebHistory } from 'vue-router';
// Asumiendo que tus vistas están en @/views/
import LandingView from '@/views/LandingView.vue'; 
import HomeView from '@/views/HomeView.vue'; // Ejemplo

// 🛑 SOLUCIÓN CONDICIONAL: Forzamos la base del repositorio si estamos en el entorno de producción (npm run build).
// Esto soluciona el error malformado de URL que persiste en GitHub Pages.
const VUE_ROUTER_BASE = import.meta.env.PROD 
  ? '/nexovant/' // Si es producción (build), usa la base explícita del repositorio.
  : import.meta.env.BASE_URL; // Si es desarrollo, usa la base de Vite por defecto.

const router = createRouter({
  // Usamos la base condicional para el historial.
  history: createWebHistory(VUE_ROUTER_BASE),
  
  routes: [
    {
      // La ruta principal, que resuelve a /nexovant/
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