<script setup>
import { onMounted, onUnmounted } from 'vue';

// Imagen desde public usando BASE_URL dinámico
const coverImage = import.meta.env.BASE_URL + 'images/cover.png';

// Control dinámico del scroll
onMounted(() => {
  // Ocultar scroll solo cuando este componente está activo
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
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

    <div class="content">
      <router-link to="/home" class="enter-button">ENTRAR</router-link>
    </div>
  </div>
</template>

<!-- Eliminamos el CSS global que bloqueaba el scroll en toda la app -->

<style scoped>

/* CONTENEDOR PRINCIPAL */
.landing-container {
  position: relative;
  width: 95vw; /* Más angosto para que el título no se corte */
  height: 100vh;
  width: 100vw;
  margin: 0 auto; /* Centrar */
  overflow: hidden;
}

/* BACKGROUND COMO DIV (ya no se usa <img>) */
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw; /* Ocupa el 100% del ancho de la pantalla */
  height: 100vh; /* Ocupa el 100% de la altura de la pantalla */
  background-image: var(--cover-image);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; /* Escala la imagen para cubrir todo el espacio sin deformarla */
  background-color: #0b2545;
  z-index: -1; /* Coloca el fondo detrás de otros contenidos */
}

/* 2. Para pantallas verticales (celulares), aplicamos un 'zoom' manual */
.background-image {
  @media (orientation: portrait) {
    background-size: 180% auto; /* Juega con este valor */
  }
}

/* Opcional: Asegúrate de que el body no tenga márgenes */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
/* CONTENIDO SUPERIOR */
.content {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 8%;
  z-index: 2;
}

/* BOTÓN */
.enter-button {
  background-color: #ffffff;
  color: #8A2BE2;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
}

.enter-button:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}

/* ========================= */
/* ====== RESPONSIVE ======= */
/* ========================= */

@media (max-width: 1024px) {
  .enter-button {
    font-size: 1.1rem;
    padding: 14px 35px;
  }
}

@media (max-width: 768px) {
  .content {
    padding-bottom: 12%;
  }
}

@media (max-width: 480px) {
  .content {
    padding-bottom: 25%;
  }
  .enter-button {
    font-size: 1rem;
    padding: 12px 30px;
  }
}

@media (max-width: 390px) {
  .content {
    padding-bottom: 30%;
  }
  .enter-button {
    font-size: 0.9rem;
    padding: 10px 25px;
  }
}

@media (max-width: 320px) {
  .content {
    padding-bottom: 35%;
  }
  .enter-button {
    font-size: 0.8rem;
    padding: 8px 20px;
  }
}

</style>
