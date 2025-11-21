<script setup>
// No hay script, así que puedes dejar la etiqueta vacía o eliminarla
</script>

<template>
  <section id="servicios" class="section-container">
    <h2 class="section-subtitle text-center">NUESTROS</h2>
    <h1 class="section-title text-center">SERVICIOS</h1>
    <p class="text-center section-description">
      Nexovant Ingeniería y Tecnología srl. ofrece una cartera de servicios de manera integral y completa, desde la infraestructura física hasta la puesta en marcha y soporte.
    </p>
    <div class="servicios-grid">
      
      <!-- INICIO DE TARJETA 1: OBRA CIVIL -->
      <!-- MODIFICADO: Se cambió <a> por <div> para que no sea un enlace -->
      <div class="service-card">
        <div class="card-inner">
          <div class="card-front">
            <div class="servicio-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.17 48.17 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
            </div>
            <h3>OBRA CIVIL</h3>
          </div>
          <div class="card-back">
            <h3>NUESTRO COMPROMISO</h3>
            <p>"Construimos las bases sólidas para la conectividad del futuro. Cada proyecto es un paso hacia adelante, garantizando infraestructura duradera y confiable."</p>
          </div>
        </div>
      </div>

      <!-- INICIO DE TARJETA 2: FIBRA ÓPTICA -->
      <!-- MODIFICADO: Se cambió <a> por <div> para que no sea un enlace -->
      <div class="service-card">
        <div class="card-inner">
          <div class="card-front">
            <div class="servicio-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
</svg>
            </div>
            <h3>FIBRA ÓPTICA</h3>
          </div>
          <div class="card-back">
            <div class="stat-number">+250,000</div>
            <div class="stat-label">Metros de fibra tendidos</div>
          </div>
        </div>
      </div>
      
      <!-- INICIO DE TARJETA 3: INSTALACIONES -->
      <!-- MODIFICADO: Se cambió <a> por <div> para que no sea un enlace -->
      <div class="service-card">
        <div class="card-inner">
          <div class="card-front">
            <div class="servicio-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 21h16"/>
    <path d="M6 12v9"/>
    <path d="M18 12v9"/>
    <path d="M10 3l-4 8h12l-4-8"/>
    <path d="M12 3v9"/>
</svg>
            </div>
            <h3>INSTALACIONES</h3>
          </div>
          <div class="card-back">
            <div class="stat-number">98.7%</div>
            <div class="stat-label">De satisfacción en instalaciones</div>
          </div>
        </div>
      </div>

      <!-- INICIO DE TARJETA 4: GESTIÓN Y SOPORTE -->
      <!-- MODIFICADO: Se cambió <a> por <div> para que no sea un enlace -->
      <div class="service-card">
        <div class="card-inner">
          <div class="card-front">
            <div class="servicio-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <h3>GESTIÓN Y SOPORTE</h3>
          </div>
          <div class="card-back">
            <h3>TU SOCIO ESTRATÉGICO</h3>
            <p>"Tu tranquilidad es nuestro compromiso. Brindamos soporte proactivo y gestión integral para que tu operación nunca se detenga."</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ESTILOS GENERALES DE LA SECCIÓN */
.section-container {
  padding: 80px 40px;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Centra el contenido horizontalmente */
  background-color: #2c2c54;
}
.text-center { text-align: center; }
.section-subtitle { font-size: 1.5rem; font-weight: 300; color: #f0f0f0; }
.section-title { font-size: 3.5rem; font-weight: 700; margin-bottom: 20px; color: #fff; }
.section-description {
  max-width: 800px;
  margin: 0 auto 50px auto;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #f0f0f0;
}

/* CONTENEDOR DE LA CUADRÍCULA (GRID) */
.servicios-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columnas por defecto en desktop */
  gap: 30px;
  
  /* --- AJUSTES CLAVE --- */
  width: 100%; /* 1. Asegura que el grid ocupe todo el ancho disponible */
  max-width: 1200px; /* 2. Limita el ancho máximo en pantallas grandes */
  margin: 0 auto; /* 3. Centra el grid */
  
  perspective: 1000px;
}

/* ESTILOS DE LAS TARJETAS (CARD) */
.service-card {
  background-color: transparent;
  width: 100%;
  height: 320px;
  border-radius: 10px;
  cursor: default;
}
.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.7s;
  transform-style: preserve-3d;
}
.service-card:hover .card-inner {
  transform: rotateY(180deg);
}
.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.card-front {
  background-color: #f0f0f0;
  color: #333;
}
.card-back {
  background-color: #8A2BE2;
  color: white;
  transform: rotateY(180deg);
}

/* CONTENIDO INTERNO DE LAS TARJETAS */
.servicio-icon {
  background-color: #8A2BE2;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.servicio-icon svg {
  width: 50px;
  height: 50px;
  color: #fff;
}
.card-front h3 {
  color: #8A2BE2;
  font-size: 1.4rem;
  text-align: center;
  min-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-back h3 {
  font-size: 1.1rem;
  text-transform: uppercase;
  margin-bottom: 15px;
  text-align: center;
}
.card-back p {
  font-size: 1rem;
  line-height: 1.6;
  padding: 0 10px;
  text-align: center;
}
.stat-number {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
}
.stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
}

/* ======================================= */
/* ====== DISEÑO RESPONSIVO LIMPIO ======= */
/* ======================================= */

/* TABLETS Y DISPOSITIVOS MEDIANOS */
@media (max-width: 1024px) {
  .servicios-grid {
    grid-template-columns: repeat(2, 1fr); /* Cambiamos a 2 columnas */
  }
  .section-container {
    padding: 60px 30px;
  }
  .service-card {
    height: 280px;
  }
}

/* MÓVILES GRANDES Y TABLETS PEQUEÑAS */
@media (max-width: 768px) {
  .section-container {
    padding: 50px 20px;
    min-height: auto;
  }
  .servicios-grid {
    gap: 20px;
  }
  .service-card {
    height: 250px;
  }
  .section-title {
    font-size: 2.8rem;
  }
  .section-description {
    font-size: 1.1rem;
  }
}

/* MÓVILES */
@media (max-width: 480px) {
  .section-container {
    padding: 40px 15px;
  }
  .section-title {
    font-size: 2rem;
  }
  .servicios-grid {
    gap: 15px;
  }
  .service-card {
    height: 240px; /* Aumentar altura para más espacio de texto */
  }
  .card-front, .card-back {
    padding: 12px; /* Reducir padding para más espacio */
  }
  .card-front h3 {
    font-size: 0.9rem;
    min-height: 2.2rem;
    line-height: 1.1;
  }
  .servicio-icon {
    width: 55px;
    height: 55px;
    margin-bottom: 8px;
  }
  .servicio-icon svg {
    width: 28px;
    height: 28px;
  }
  .card-back h3 { 
    font-size: 0.8rem;
    margin-bottom: 8px;
    line-height: 1.1;
    letter-spacing: 0.5px; /* Reducir espaciado entre letras */
  }
  .card-back p { 
    font-size: 0.75rem;
    line-height: 1.3;
    padding: 0 5px; /* Menos padding lateral */
  }
  .stat-number { 
    font-size: 1.8rem;
    line-height: 1;
  }
  .stat-label {
    font-size: 0.8rem;
    line-height: 1.2;
  }
}

/* MÓVILES MUY PEQUEÑOS */
@media (max-width: 390px) {
  .service-card {
    height: 220px;
  }
  .card-front, .card-back {
    padding: 10px;
  }
  .card-front h3 {
    font-size: 0.85rem;
    min-height: 2rem;
  }
  .servicio-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 6px;
  }
  .servicio-icon svg {
    width: 25px;
    height: 25px;
  }
  .card-back h3 { 
    font-size: 0.75rem;
    margin-bottom: 6px;
  }
  .card-back p { 
    font-size: 0.7rem;
    line-height: 1.25;
    padding: 0 3px;
  }
  .stat-number { 
    font-size: 1.6rem;
  }
  .stat-label {
    font-size: 0.75rem;
  }
}

/* MÓVILES EXTRA PEQUEÑOS */
@media (max-width: 320px) {
  .service-card {
    height: 200px;
  }
  .card-front, .card-back {
    padding: 8px;
  }
  .card-front h3 {
    font-size: 0.8rem;
    min-height: 1.8rem;
  }
  .servicio-icon {
    width: 45px;
    height: 45px;
    margin-bottom: 4px;
  }
  .servicio-icon svg {
    width: 22px;
    height: 22px;
  }
  .card-back h3 { 
    font-size: 0.7rem;
    margin-bottom: 4px;
    letter-spacing: 0.3px;
  }
  .card-back p { 
    font-size: 0.65rem;
    line-height: 1.2;
    padding: 0 2px;
  }
  .stat-number { 
    font-size: 1.4rem;
  }
  .stat-label {
    font-size: 0.7rem;
  }
}
</style>