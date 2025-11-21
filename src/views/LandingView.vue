<script setup>
// Asegúrate de que esta es la imagen correcta que quieres usar
import coverImage from '@/assets/images/cover.png'; // Usando la última imagen que creamos
</script>

<template>
  <div class="landing-container">
    <img :src="coverImage" alt="Portada de Nexovant" class="background-image">
    <div class="content">
      <router-link to="/home" class="enter-button">ENTRAR</router-link>
    </div>
  </div>
</template>

<!-- ======================================================= -->
<!-- ========= NUEVO BLOQUE DE ESTILOS (SIN scoped) ========= -->
<!-- Estos estilos son globales y solo se aplican cuando este componente está activo -->
<style>
html {
  /* Anula la regla de App.vue y oculta el scroll */
  overflow-y: hidden !important;
}
</style>
<!-- ======================================================= -->

<style scoped>
/* Estilos encapsulados para este componente */
.landing-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Esto también ayuda a asegurar que no haya scroll DENTRO del componente */
}
.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 8%; /* Mantenemos el ajuste final que te gustó */
}
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

/* Ajuste para pantallas móviles */
@media (max-width: 480px) {
  .enter-button {
    font-size: 1rem;
    padding: 12px 30px;
  }
}
</style>