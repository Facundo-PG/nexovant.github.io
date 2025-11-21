<script setup>
// Imagen desde public usando BASE_URL dinámico
const coverImage = import.meta.env.BASE_URL + 'images/cover.png';
</script>

<template>
  <div class="landing-container" :style="{ '--cover-image': `url(${coverImage})` }">
    <div class="background-image"></div>

    <div class="content">
      <router-link to="/home" class="enter-button">ENTRAR</router-link>
    </div>
  </div>
</template>

<!-- ======================================================= -->
<!-- Estilo global para ocultar scroll solo en esta vista -->
<style>
html {
  overflow-y: hidden !important;
}
</style>
<!-- ======================================================= -->

<style scoped>

/* CONTENEDOR PRINCIPAL */
.landing-container {
  position: relative;
  width: 95vw; /* Más angosto para que el título no se corte */
  height: 100vh;
  margin: 0 auto; /* Centrar */
  overflow: hidden;
}

/* BACKGROUND COMO DIV (ya no se usa <img>) */
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: var(--cover-image);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
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
  /* Ajustar ancho del background en celulares para evitar recortes */
@media (max-width: 480px) {
  .landing-container {
    width: 90vw; /* antes 95vw → ahora un poco más angosta */
  }
}

@media (max-width: 390px) {
  .landing-container {
    width: 88vw; /* un poco más para pantallas tipo iPhone 12 Mini */
  }
}

@media (max-width: 320px) {
  .landing-container {
    width: 85vw; /* ultra pequeño, evita cortes */
  }
}

}

</style>
