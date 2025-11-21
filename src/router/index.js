import { createRouter, createWebHistory } from 'vue-router';
import LandingView from '@../views/LandingView.vue';
import HomeView from '@../views/HomeView.vue';

// 1. Definimos las rutas
const routes = [
  {
    path: '/', // La ruta raíz (ej: www.nexovant.com/)
    name: 'Landing',
    component: LandingView // Mostrará la portada
  },
  {
    path: '/home', // La ruta para la página principal (ej: www.nexovant.com/home)
    name: 'Home',
    component: HomeView // Mostrará el contenido principal
  }
];

// 2. Creamos la instancia del router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;