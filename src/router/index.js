// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// La ruta es la correcta ('@/views/'), sin '../'.
// El nombre del componente HomeView.vue está en PascalCase (V mayúscula).
import LandingView from '@/views/LandingView.vue'; 
import HomeView from '@/views/Homeview.vue';

// 1. Definimos las rutas
const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingView
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  }
];

// 2. Creamos la instancia del router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;