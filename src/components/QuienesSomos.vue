<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Imágenes de trabajos realizados
const trabajoImages = ref([
  import.meta.env.BASE_URL + "images/trabajo-1.jpg",
  import.meta.env.BASE_URL + "images/trabajo-2.jpg",
  import.meta.env.BASE_URL + "images/trabajo-3.jpg",
  import.meta.env.BASE_URL + "images/trabajo-4.jpg",
  import.meta.env.BASE_URL + "images/trabajo-5.jpg",
]);

const currentIndex = ref(0);
const isAutoPlaying = ref(true);
let intervalId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % trabajoImages.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + trabajoImages.value.length) % trabajoImages.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
  pauseAutoplay();
};

const pauseAutoplay = () => {
  isAutoPlaying.value = false;
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  // Reanudar después de 3 segundos
  setTimeout(() => {
    if (!intervalId) {
      startAutoplay();
    }
  }, 3000);
};

const startAutoplay = () => {
  isAutoPlaying.value = true;
  intervalId = setInterval(nextSlide, 4000);
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <section id="quienes-somos" class="section-container">
    <div class="content-wrapper">
      <!-- Título principal -->
      <div class="header-section">
        <h2 class="section-title">¿Quiénes Somos?</h2>
        <p class="section-description">
          Conocé más sobre nuestro equipo, nuestra historia y los proyectos que nos definen como líderes en telecomunicaciones.
        </p>
      </div>

      <!-- Contenido principal dividido en dos columnas -->
      <div class="main-content">
        <!-- Columna izquierda: Información -->
        <div class="info-column">
          <div class="info-card">
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V19C3 20.11 3.89 21 5 21H11V19H5V3H13V9H21Z"/>
                </svg>
              </div>
              <div class="info-content">
                <h3>Nuestra Historia</h3>
                <p>Fundada como empresa familiar, combinamos más de 20 años de experiencia con la innovación constante para ofrecer soluciones de vanguardia.</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM16 6C14.9 6 14 6.9 14 8S14.9 10 16 10 18 9.1 18 8 17.1 6 16 6ZM8 4C10.2 4 12 5.8 12 8C12 10.2 10.2 12 8 12C5.8 12 4 10.2 4 8C4 5.8 5.8 4 8 4ZM8 6C6.9 6 6 6.9 6 8S6.9 10 8 10 10 9.1 10 8 9.1 6 8 6ZM16 13C18.7 13 22 14.3 22 17V20H10V17C10 14.3 13.3 13 16 13ZM8 13C10.7 13 14 14.3 14 17V20H2V17C2 14.3 5.3 13 8 13Z"/>
                </svg>
              </div>
              <div class="info-content">
                <h3>Nuestro Equipo</h3>
                <p>Un equipo multidisciplinario de profesionales especializados en telecomunicaciones, comprometidos con la excelencia en cada proyecto.</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"/>
                </svg>
              </div>
              <div class="info-content">
                <h3>Nuestro Compromiso</h3>
                <p>Garantizamos calidad, confiabilidad y un servicio personalizado en cada etapa del proyecto, desde la consultoría hasta el soporte continuo.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna derecha: Galería de trabajos -->
        <div class="gallery-column">
          <div class="gallery-header">
            <h3>Nuestros Trabajos</h3>
            <p>Algunos de los proyectos que demuestran nuestra experiencia y dedicación</p>
          </div>
          
          <div class="gallery-container">
            <div class="image-slider">
              <transition-group name="slide" tag="div" class="slider-track">
                <div
                  v-for="(image, index) in trabajoImages"
                  :key="image"
                  v-show="index === currentIndex"
                  class="slide-item"
                >
                  <img 
                    :src="image" 
                    :alt="`Trabajo ${index + 1}`"
                    class="trabajo-image"
                  />
                  <div class="image-overlay">
                    <span class="image-counter">{{ index + 1 }} / {{ trabajoImages.length }}</span>
                  </div>
                </div>
              </transition-group>
              
              <!-- Controles del slider -->
              <button @click="prevSlide" class="slider-control prev" :disabled="trabajoImages.length <= 1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"/>
                </svg>
              </button>
              <button @click="nextSlide" class="slider-control next" :disabled="trabajoImages.length <= 1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z"/>
                </svg>
              </button>
            </div>

            <!-- Indicadores de posición -->
            <div class="slider-dots">
              <button
                v-for="(image, index) in trabajoImages"
                :key="'dot-' + index"
                :class="{ active: index === currentIndex }"
                @click="goToSlide(index)"
                class="dot"
                :aria-label="`Ir a imagen ${index + 1}`"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  padding: 80px 40px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-wrapper {
  max-width: 1200px;
  width: 100%;
}

/* Header Section */
.header-section {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #6a1b9a, #8e24aa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.3rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Main Content */
.main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

/* Info Column */
.info-column {
  position: relative;
}

.info-card {
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  border: 1px solid rgba(138, 43, 226, 0.1);
  transition: all 0.4s ease;
}

.info-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 80px rgba(138, 43, 226, 0.15);
  border-color: rgba(138, 43, 226, 0.3);
}

.info-item {
  display: flex;
  gap: 20px;
  margin-bottom: 35px;
  transition: transform 0.3s ease;
}

.info-item:hover {
  transform: translateX(10px);
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-icon {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #6a1b9a, #8e24aa);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.info-item:hover .info-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 10px 25px rgba(138, 43, 226, 0.3);
}

.info-icon svg {
  width: 28px;
  height: 28px;
  color: #fff;
}

.info-content h3 {
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 10px;
  font-weight: 600;
}

.info-content p {
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
}

/* Gallery Column */
.gallery-column {
  position: relative;
}

.gallery-header {
  text-align: center;
  margin-bottom: 30px;
}

.gallery-header h3 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 10px;
  font-weight: 600;
}

.gallery-header p {
  color: #666;
  font-size: 1rem;
}

.gallery-container {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  border: 1px solid rgba(138, 43, 226, 0.1);
  transition: all 0.4s ease;
}

.gallery-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 80px rgba(138, 43, 226, 0.15);
}

.image-slider {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.slider-track {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.trabajo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.slide-item:hover .trabajo-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.image-counter {
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
}

/* Slider Controls */
.slider-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255,255,255,0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.slider-control:hover {
  background: #fff;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.slider-control:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider-control.prev {
  left: 15px;
}

.slider-control.next {
  right: 15px;
}

.slider-control svg {
  width: 24px;
  height: 24px;
  color: #6a1b9a;
}

/* Slider Dots */
.slider-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background: #f8f9fa;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot:hover {
  background: #bbb;
  transform: scale(1.2);
}

.dot.active {
  background: #6a1b9a;
  transform: scale(1.3);
}

/* Animations */
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .section-container {
    padding: 60px 30px;
  }
  
  .main-content {
    gap: 40px;
  }
  
  .section-title {
    font-size: 3rem;
  }
}

@media (max-width: 900px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .section-description {
    font-size: 1.1rem;
  }
  
  .info-card {
    padding: 30px;
  }
  
  .image-slider {
    height: 350px;
  }
}

@media (max-width: 768px) {
  .section-container {
    padding: 40px 20px;
  }
  
  .header-section {
    margin-bottom: 40px;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .section-description {
    font-size: 1rem;
  }
  
  .info-card {
    padding: 25px;
  }
  
  .info-item {
    gap: 15px;
  }
  
  .info-icon {
    width: 50px;
    height: 50px;
  }
  
  .info-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .info-content h3 {
    font-size: 1.2rem;
  }
  
  .info-content p {
    font-size: 0.9rem;
  }
  
  .gallery-header h3 {
    font-size: 1.6rem;
  }
  
  .image-slider {
    height: 300px;
  }
  
  .slider-control {
    width: 40px;
    height: 40px;
  }
  
  .slider-control svg {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 30px 15px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .info-card {
    padding: 20px;
  }
  
  .info-item {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
  
  .info-icon {
    margin: 0 auto;
  }
  
  .image-slider {
    height: 250px;
  }
  
  .slider-control {
    width: 35px;
    height: 35px;
  }
  
  .slider-control.prev {
    left: 10px;
  }
  
  .slider-control.next {
    right: 10px;
  }
}

@media (max-width: 320px) {
  .section-title {
    font-size: 1.6rem;
  }
  
  .image-slider {
    height: 200px;
  }
}
</style>