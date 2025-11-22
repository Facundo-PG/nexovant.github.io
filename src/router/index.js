import { createRouter, createWebHistory } from 'vue-router';
// Asumiendo que tus vistas están en @/views/
import LandingView from '@/views/LandingView.vue'; 
import HomeView from '@/views/HomeView.vue'; // Ejemplo
import QuienesSomos from '@/components/QuienesSomos.vue';

// 🛑 CORRECCIÓN FINAL: Forzamos el uso de la ruta /nexovant/ en producción.
// Si el entorno de producción está activo, usamos la ruta estricta.
const VUE_ROUTER_BASE = import.meta.env.PROD 
  ? '/nexovant/' // Usar la base explícita del repositorio en el build.
  : import.meta.env.BASE_URL; // Usar la base de Vite en desarrollo.

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
    },
    {
      path: '/quienes-somos',
      name: 'QuienesSomos',
      component: QuienesSomos
    }
    // Añade el resto de tus rutas aquí
  ]
});

export default router;