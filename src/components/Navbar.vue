<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const logoImage = import.meta.env.BASE_URL + 'images/cover.png';
const isMenuOpen = ref(false);
const router = useRouter();
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollToSection = (sectionId) => {
  isMenuOpen.value = false;
  
  // Si no estamos en /home, navegar primero
  if (route.path !== '/home') {
    router.push('/home').then(() => {
      // Esperar un momento para que el DOM se actualice
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navHeight = 70; // Altura del navbar
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    });
  } else {
    // Ya estamos en /home, solo hacer scroll
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 70; // Altura del navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<template>
  <nav class="main-nav">
    <div class="nav-content">
      <router-link to="/" class="logo-link">
        <!-- Imagen desde /public/images (funciona en GitHub Pages) -->
        <img :src="logoImage" alt="Logo Nexovant" class="logo-image" />
        <span>Nexovant</span>
      </router-link>

      <ul class="desktop-nav-links">
        <li><a href="#empresa" @click.prevent="scrollToSection('empresa')">Nuestra Empresa</a></li>
        <li><router-link to="/quienes-somos" @click="isMenuOpen = false">Quiénes Somos</router-link></li>
        <li><a href="#valores" @click.prevent="scrollToSection('valores')">Valores</a></li>
        <li><a href="#servicios" @click.prevent="scrollToSection('servicios')">Servicios</a></li>
        <li><a href="#contacto" @click.prevent="scrollToSection('contacto')">Contacto</a></li>
        <li><router-link to="/quienes-somos" @click="isMenuOpen = false">Quiénes Somos</router-link></li>
      </ul>

      <button 
        class="hamburger-menu" 
        @click="toggleMenu"
        :class="{ 'is-active': isMenuOpen }"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="mobile-nav-links-container" :class="{ 'is-open': isMenuOpen }">
      <a href="#empresa" @click.prevent="scrollToSection('empresa')">Nuestra Empresa</a>
      <router-link to="/quienes-somos" @click="isMenuOpen = false">Quiénes Somos</router-link>
      <a href="#valores" @click.prevent="scrollToSection('valores')">Valores</a>
      <a href="#servicios" @click.prevent="scrollToSection('servicios')">Servicios</a>
      <a href="#contacto" @click.prevent="scrollToSection('contacto')">Contacto</a>
    </div>
  </nav>
</template>

<style scoped>
.main-nav {
  position: fixed; top: 0; left: 0; width: 100%;
  background-color: rgba(26, 26, 46, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000; padding: 0 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.nav-content {
  display: flex; justify-content: space-between; align-items: center;
  max-width: 1200px; margin: 0 auto; height: 70px;
}
.logo-link {
  display: flex; align-items: center; gap: 12px;
  font-size: 1.5rem; font-weight: bold; color: #fff; text-decoration: none;
}
.logo-image {
  height: 40px; width: 40px; border-radius: 50%;
  object-fit: cover; border: 2px solid #fff;
}
.desktop-nav-links {
  list-style: none; display: flex;
  margin: 0; padding: 0; gap: 30px;
}
.desktop-nav-links a {
  color: #f0f0f0; text-decoration: none; font-size: 1rem;
  padding: 5px 0; position: relative; transition: color 0.3s; cursor: pointer;
}
.desktop-nav-links a:hover { color: #fff; }
.desktop-nav-links a::after {
  content: ''; position: absolute; width: 0; height: 2px; bottom: 0;
  left: 50%; transform: translateX(-50%);
  background-color: #8A2BE2; transition: width 0.3s ease-in-out;
}
.desktop-nav-links a:hover::after { width: 100%; }
.hamburger-menu, .mobile-nav-links-container {
  display: none;
}
@media (max-width: 768px) {
  .desktop-nav-links { display: none; }
  .hamburger-menu {
    display: block; background: transparent; border: none; cursor: pointer;
    padding: 10px; z-index: 1010;
  }
  .hamburger-menu span {
    display: block; width: 25px; height: 3px;
    background-color: #fff; margin: 5px 0;
    transition: all 0.3s ease-in-out;
  }
  .hamburger-menu.is-active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
  .hamburger-menu.is-active span:nth-child(2) { opacity: 0; }
  .hamburger-menu.is-active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
  .mobile-nav-links-container {
    display: flex; flex-direction: column;
    position: fixed; top: 70px; left: 0;
    width: 100%; background-color: #1a1a2e;
    padding-bottom: 10px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transform: translateY(-120%); opacity: 0;
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;
    pointer-events: none;
  }
  .mobile-nav-links-container.is-open {
    transform: translateY(0); opacity: 1; pointer-events: auto;
  }
  .mobile-nav-links-container a {
    color: #f0f0f0; text-decoration: none; font-size: 1.1rem;
    width: 100%; text-align: left;
    padding: 18px 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: background-color 0.2s ease;
  }
  .mobile-nav-links-container a:last-child { border-bottom: none; }
  .mobile-nav-links-container a:hover { background-color: rgba(255, 255, 255, 0.05); }
}
</style>


<style scoped>
/* Este bloque de estilos ya está verificado y es correcto */
.main-nav {
  position: fixed; top: 0; left: 0; width: 100%;
  background-color: rgba(26, 26, 46, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000; padding: 0 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.nav-content {
  display: flex; justify-content: space-between; align-items: center;
  max-width: 1200px; margin: 0 auto; height: 70px;
}
.logo-link {
  display: flex; align-items: center; gap: 12px;
  font-size: 1.5rem; font-weight: bold; color: #fff; text-decoration: none;
}
.logo-image {
  height: 40px; width: 40px; border-radius: 50%;
  object-fit: cover; border: 2px solid #fff;
}
.desktop-nav-links {
  list-style: none; display: flex;
  margin: 0; padding: 0; gap: 30px;
}
.desktop-nav-links a {
  color: #f0f0f0; text-decoration: none; font-size: 1rem;
  padding: 5px 0; position: relative; transition: color 0.3s; cursor: pointer;
}
.desktop-nav-links a:hover { color: #fff; }
.desktop-nav-links a::after {
  content: ''; position: absolute; width: 0; height: 2px; bottom: 0;
  left: 50%; transform: translateX(-50%);
  background-color: #8A2BE2; transition: width 0.3s ease-in-out;
}
.desktop-nav-links a:hover::after { width: 100%; }
.hamburger-menu, .mobile-nav-links-container {
  display: none;
}
@media (max-width: 768px) {
  .desktop-nav-links { display: none; }
  .hamburger-menu {
    display: block; background: transparent; border: none; cursor: pointer;
    padding: 10px; z-index: 1010;
  }
  .hamburger-menu span {
    display: block; width: 25px; height: 3px;
    background-color: #fff; margin: 5px 0;
    transition: all 0.3s ease-in-out;
  }
  .hamburger-menu.is-active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
  .hamburger-menu.is-active span:nth-child(2) { opacity: 0; }
  .hamburger-menu.is-active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
  .mobile-nav-links-container {
    display: flex; flex-direction: column;
    position: fixed; top: 70px; left: 0;
    width: 100%; background-color: #1a1a2e;
    padding-bottom: 10px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transform: translateY(-120%); opacity: 0;
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;
    pointer-events: none;
  }
  .mobile-nav-links-container.is-open {
    transform: translateY(0); opacity: 1; pointer-events: auto;
  }
  .mobile-nav-links-container a {
    color: #f0f0f0; text-decoration: none; font-size: 1.1rem;
    width: 100%; text-align: left;
    padding: 18px 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: background-color 0.2s ease;
  }
  .mobile-nav-links-container a:last-child { border-bottom: none; }
  .mobile-nav-links-container a:hover { background-color: rgba(255, 255, 255, 0.05); }
}
</style>