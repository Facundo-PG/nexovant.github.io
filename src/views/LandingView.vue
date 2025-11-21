<script setup>
// Imagen desde carpeta public con BASE_URL dinámico
const coverImage = import.meta.env.BASE_URL + 'images/cover.png';
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

/* Responsive Design */
@media (max-width: 1024px) {
  .landing-container {
    height: 90vh; /* Reducir altura en tablets */
  }
  .content {
    padding-bottom: 8%;
  }
  .enter-button {
    font-size: 1.1rem;
    padding: 14px 35px;
  }
}

@media (max-width: 768px) {
  .landing-container {
    height: 85vh; /* Más pequeño en tablets */
  }
  .content {
    padding-bottom: 10%;
  }
  .enter-button {
    font-size: 1rem;
    padding: 12px 30px;
  }
}

@media (max-width: 480px) {
  .landing-container {
    height: 70vh; /* Mucho más pequeño en móviles */
    min-height: 500px;
  }
  .content {
    padding-bottom: 15%; /* Más separación del fondo */
    padding-left: 20px;
    padding-right: 20px;
    align-items: flex-end; /* Volver a posición inferior */
  }
  .enter-button {
    font-size: 1rem;
    padding: 12px 30px;
    max-width: 180px;
  }
}

@media (max-width: 390px) {
  .landing-container {
    height: 60vh;
    min-height: 450px;
  }
  .content {
    padding-bottom: 18%; /* Más separación en pantallas pequeñas */
  }
  .enter-button {
    font-size: 0.9rem;
    padding: 10px 25px;
  }
}

@media (max-width: 320px) {
  .landing-container {
    height: 55vh;
    min-height: 400px;
  }
  .content {
    padding-bottom: 20%; /* Máxima separación en pantallas muy pequeñas */
  }
  .enter-button {
    font-size: 0.8rem;
    padding: 8px 20px;
  }
}
</style>