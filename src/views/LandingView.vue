<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

// Imagen desde public usando BASE_URL dinámico
const coverImage = import.meta.env.BASE_URL + 'images/cover.png';
const router = useRouter();

// Control dinámico del scroll y redirect automático
onMounted(() => {
  // Ocultar scroll solo cuando este componente está activo
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  
  // Redireccionar automáticamente después de 4 segundos
  setTimeout(() => {
    router.push('/home');
  }, 3000);
});

onUnmounted(() => {
  // Restaurar scroll cuando se sale de este componente
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
});
</script>

<template>
  <div class="landing-container" :style="{ '--cover-image': `url(${coverImage})` }">
    <div class="background-image"></div>
    <!-- Eliminamos el botón, ahora es solo un splash screen -->
  </div>
</template>

<!-- Eliminamos el CSS global que bloqueaba el scroll en toda la app -->
<style scoped>

/* CONTENEDOR PRINCIPAL */
.landing-container {
  position: relative;
  height: 100dvh;
  width: 100vw;
  margin: 0;
  overflow: hidden;
}

/* BACKGROUND COMO DIV */
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-image: var(--cover-image);
  /* --- AJUSTE AQUÍ --- */
  background-position: 48% center; /* Juega con el valor 60% para un ajuste fino */
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #0b2545;
  z-index: -1;
}

/* Asegúrate de que el body y html no tengan márgenes */
:global(body, html) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

/* Splash screen - solo muestra la imagen por 4 segundos */

</style>