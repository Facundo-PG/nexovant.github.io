<script setup>
// Importamos todos los componentes
import Navbar from '../components/Navbar.vue';
import Contacto from '../components/Contacto.vue';
import NuestrosServicios from '../components/NuestrosServicios.vue';
import NuestraEmpresa from '../components/NuestraEmpresa.vue';
import NuestrosValores from '../components/NuestrosValores.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div>
    <Navbar />
    
    <main>
      <!-- Todas las secciones se muestran en una sola página -->
      <NuestraEmpresa id="empresa" />
      <NuestrosValores id="valores" />
      <NuestrosServicios id="servicios" />
      <Contacto id="contacto" />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
main {
  padding-top: 70px; /* Mantenemos el espacio para el Navbar fijo */
}

/* Asegurar scroll suave */
html {
  scroll-behavior: smooth;
}
</style>