<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Nexovant</h3>
        <p>Ingeniería y Tecnología SRL</p>
        <p class="footer-description">
          Más de 20 años de experiencia en el rubro de las telecomunicaciones.
        </p>
      </div>

      <div class="footer-section">
        <h4>Contacto</h4>
        <ul class="footer-links">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
            </svg>
            <span>administracion@nexovant.net</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>+54 9 11 2855-6046</span>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Servicios</h4>
        <ul class="footer-links">
          <li><a href="#servicios" @click.prevent="scrollToSection('servicios')">Obra Civil</a></li>
          <li><a href="#servicios" @click.prevent="scrollToSection('servicios')">Fibra Óptica</a></li>
          <li><a href="#servicios" @click.prevent="scrollToSection('servicios')">Instalaciones</a></li>
          <li><a href="#servicios" @click.prevent="scrollToSection('servicios')">Gestión y Soporte</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Empresa</h4>
        <ul class="footer-links">
          <li><a href="#empresa" @click.prevent="scrollToSection('empresa')">Nuestra Historia</a></li>
          <li><a href="#valores" @click.prevent="scrollToSection('valores')">Valores</a></li>
          <li><a href="#empresa" @click.prevent="scrollToSection('empresa')">Misión y Visión</a></li>
          <li><router-link to="/quienes-somos">Quiénes Somos</router-link></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Nexovant Ingeniería y Tecnología SRL. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

const scrollToSection = (sectionId) => {
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
};
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1a1a2e 0%, #2c2c54 100%);
  color: #f0f0f0;
  padding: 60px 40px 20px;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 15px;
  background: linear-gradient(45deg, #fff, #bb86fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-section h4 {
  font-size: 1.2rem;
  color: #bb86fc;
  margin-bottom: 20px;
  font-weight: 600;
}

.footer-description {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-top: 10px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  padding: 8px 0;
  font-size: 0.95rem;
  opacity: 0.85;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-links a {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.footer-links li:hover,
.footer-links a:hover {
  opacity: 1;
  color: #bb86fc;
  transform: translateX(5px);
  cursor: pointer;
}

.footer-links svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.footer-bottom p {
  font-size: 0.9rem;
  opacity: 0.7;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer {
    padding: 40px 20px 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-section h3 {
    font-size: 1.5rem;
  }

  .footer-section h4 {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 30px 15px 15px;
  }

  .footer-section h3 {
    font-size: 1.3rem;
  }

  .footer-links li {
    font-size: 0.9rem;
  }

  .footer-bottom p {
    font-size: 0.8rem;
  }
}
</style>
