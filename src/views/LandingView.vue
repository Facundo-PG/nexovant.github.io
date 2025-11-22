<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';

// Imagen desde public usando BASE_URL dinámico
const coverImage = import.meta.env.BASE_URL + 'images/cover.png';
const router = useRouter();
const imageOpacity = ref(0); // Iniciar con opacidad 0

// Guardar referencia a la función para poder removerla después
const preventTouchMove = (e) => e.preventDefault();

// Control dinámico del scroll y efectos de animación
onMounted(() => {
  // Ocultar scroll solo cuando este componente está activo
  try {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    
    // Prevenir comportamientos de navegador móvil
    document.addEventListener('touchmove', preventTouchMove, { passive: false });
  } catch (error) {
    console.warn('Error setting overflow:', error);
  }
  
  // Usar requestAnimationFrame para mejor compatibilidad móvil
  requestAnimationFrame(() => {
    // Fade-in: Encender la imagen gradualmente (0 a 1 en 1 segundo)
    setTimeout(() => {
      if (imageOpacity.value !== null) {
        imageOpacity.value = 1;
      }
    }, 100);
    
    // Fade-out: Apagar la imagen gradualmente después de 2.5 segundos
    setTimeout(() => {
      if (imageOpacity.value !== null) {
        imageOpacity.value = 0;
      }
    }, 2500);
    
    // Redireccionar y restaurar scroll antes de navegar
    setTimeout(() => {
      try {
        // Restaurar scroll ANTES de navegar
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.removeEventListener('touchmove', preventTouchMove, { passive: false });
        
        router.push('/home');
      } catch (error) {
        console.warn('Error navigating:', error);
        // Restaurar scroll en caso de error también
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.removeEventListener('touchmove', preventTouchMove, { passive: false });
        // Fallback: intentar navegar de nuevo
        window.location.href = '/home';
      }
    }, 3500);
  });
});

onUnmounted(() => {
  // Restaurar scroll cuando se sale de este componente
  try {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    
    // Remover event listeners con la referencia correcta
    document.removeEventListener('touchmove', preventTouchMove, { passive: false });
  } catch (error) {
    console.warn('Error restoring overflow:', error);
  }
});
</script>

<template>
  <div class="landing-container" :style="{ '--cover-image': `url(${coverImage})` }">
    <div 
      class="background-image" 
      :style="{ opacity: imageOpacity }"
    ></div>
    <!-- Splash screen con efectos de fade-in y fade-out -->
  </div>
</template>

<!-- Eliminamos el CSS global que bloqueaba el scroll en toda la app -->
<style scoped>

/* CONTENEDOR PRINCIPAL */
.landing-container {
  position: relative;
  height: 100vh; /* Fallback para navegadores que no soportan dvh */
  height: 100dvh;
  width: 100vw;
  margin: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch; /* Para iOS */
  touch-action: none; /* Prevenir gestos táctiles */
}

/* BACKGROUND COMO DIV CON ANIMACIÓN */
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Fallback */
  height: 100dvh;
  background-image: var(--cover-image);
  background-position: 48% center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #0b2545;
  z-index: -1;
  -webkit-backface-visibility: hidden; /* Para iOS */
  backface-visibility: hidden;
  
  /* Animación suave de opacity con prefijos */
  -webkit-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
  opacity: 0; /* Iniciar invisible, se controla desde Vue */
}

/* Asegúrate de que el body y html no tengan márgenes */
:global(body, html) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

/* Splash screen con efectos de fade-in y fade-out automáticos */
/*Timeline:
   0s - 0.1s: Imagen invisible
   0.1s - 1.1s: Fade-in (encendido gradual)
   1.1s - 2.5s: Imagen visible completa
   2.5s - 3.5s: Fade-out (apagado gradual)
   3.5s: Redirección a Nuestra Empresa
*/
</style>

