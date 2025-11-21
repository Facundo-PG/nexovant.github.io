<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

// Imagen desde public usando BASE_URL dinámico
const coverImage = import.meta.env.BASE_URL + 'images/cover.png';
const router = useRouter();

// Duración del splash screen en milisegundos
const SPLASH_DURATION = 3500; // 3.5 segundos

// Control dinámico del scroll y redirect automático
onMounted(() => {
  // Ocultar scroll solo cuando este componente está activo
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  
  // Redireccionar automáticamente después del tiempo definido
  setTimeout(() => {
    // Te llevo a la ruta que mencionaste: '/nuestra-empresa'
    router.push('/nuestra-empresa');
  }, SPLASH_DURATION);
});

onUnmounted(() => {
  // Restaurar scroll cuando se sale de este componente
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
});
</script>

<template>
  <div class="landing-container" :style="{ '--cover-image': `url(${coverImage})` }">
    <!-- Aplicamos la animación directamente a este div -->
    <div class="background-image"></div>
  </div>
</template>

<style scoped>
/* DEFINIMOS LA ANIMACIÓN DE ENTRADA Y SALIDA */
@keyframes fadeInAndOut {
  /* --- FASE 1: ENCENDIDO (Fade In) --- */
  0% {
    opacity: 0; /* Inicia completamente transparente */
  }
  25% {
    opacity: 1; /* Llega a ser totalmente visible */
  }

  /* --- FASE 2: MANTENER VISIBLE --- */
  75% {
    opacity: 1; /* Se mantiene visible hasta el 75% del tiempo */
  }

  /* --- FASE 3: APAGADO (Fade Out) --- */
  100% {
    opacity: 0; /* Se desvanece por completo al final */
  }
}

/* CONTENEDOR PRINCIPAL */
.landing-container {
  position: relative;
  height: 100dvh;
  width: 100vw;
  margin: 0;
  overflow: hidden;
  background-color: #0b2545; /* Color de fondo base */
}

/* BACKGROUND COMO DIV */
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: var(--cover-image);
  background-position: 48% center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  opacity: 0; /* Estado inicial para que la animación funcione correctamente */

  /* --- AQUÍ APLICAMOS LA ANIMACIÓN --- */
  /* Nombre | Duración | Curva de tiempo | Modo de relleno */
  animation: fadeInAndOut 3.5s ease-in-out forwards;
}

/* Asegúrate de que el body y html no tengan márgenes */
:global(body, html) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>