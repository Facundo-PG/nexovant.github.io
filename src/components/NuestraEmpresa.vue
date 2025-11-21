<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Rutas directas para GitHub Pages
const carouselImages = ref([
  "/nexovant/images/carousel-1.jpg",
  "/nexovant/images/carousel-2.webp",
  "/nexovant/images/carousel-3.png",
]);

const currentIndex = ref(0);
let intervalId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % carouselImages.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + carouselImages.value.length) %
    carouselImages.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <section id="empresa" class="section-container">
    <div class="carousel-container">
      <transition-group name="fade" tag="div" class="carousel-slides">
        <img
          v-for="(image, index) in carouselImages"
          :key="image"
          :src="image"
          v-show="index === currentIndex"
          alt="Imagen de la empresa"
          class="carousel-image"
        />
      </transition-group>

      <button @click="prevSlide" class="carousel-control prev">&lt;</button>
      <button @click="nextSlide" class="carousel-control next">&gt;</button>

      <div class="carousel-dots">
        <span
          v-for="(image, index) in carouselImages"
          :key="'dot-' + index"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
          class="dot"
        ></span>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="text-content">
        <h2 class="section-subtitle">NUESTRA</h2>
        <h1 class="section-title">EMPRESA</h1>

        <p class="intro-text">
          Nexovant Ingeniería y Tecnología SRL es una empresa familiar con más
          de 20 años de experiencia en telecomunicaciones, fundada por padre e
          hijos. Su enfoque es brindar un trato cercano y personalizado,
          combinando la agilidad de una organización joven con la solidez del
          conocimiento acumulado para ofrecer soluciones confiables y un
          compromiso con la excelencia.
        </p>

        <div class="mision-vision-container">
          <div class="mision-vision-item">
            <h3>Misión</h3>
            <p>
              Ser el socio tecnológico de confianza para empresas del sector
              público y privado, entregando soluciones integrales de ingeniería y
              telecomunicaciones. Garantizamos un acompañamiento cercano y
              personalizado en cada proyecto, con un compromiso inquebrantable
              con la confiabilidad y la excelencia.
            </p>
          </div>

          <div class="mision-vision-item">
            <h3>Visión</h3>
            <p>
              Ser la empresa referente en el sector, reconocida por fusionar
              innovación y agilidad con la confianza y solidez de nuestra
              experiencia. Aspiramos a ser el socio estratégico preferido por
              clientes que valoran la excelencia y las soluciones tecnológicas
              que impulsan su crecimiento.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tu CSS original va aquí! No lo alteré para no romper estilos */
</style>
