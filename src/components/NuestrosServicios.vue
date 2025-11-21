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
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.25 4.5a.75.75 0 01.75.75v13.5a.75.75 0 01-1.5 0V5.25a.75.75 0 01.75-.75zM13.75 4.5a.75.75 0 01.75.75v13.5a.75.75 0 01-1.5 0V5.25a.75.75 0 01.75-.75z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 6.75h17.25c.621 0 1.125.504 1.125 1.125v7.5c0 .621-.504 1.125-1.125 1.125H3.375c-.621 0-1.125-.504-1.125-1.125v-7.5c0-.621.504-1.125 1.125-1.125z" />
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M8.25 21V3m8.25 18V3M3.75 6h16.5m-16.5 6h16.5m-16.5 6h16.5" />
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
.section-container {
  padding: 80px 40px;
  min-height: calc(100vh - 70px);
  display: flex; flex-direction: column; justify-content: center;
  background-color: #2c2c54;
}
.text-center { text-align: center; }
.section-subtitle { font-size: 1.5rem; font-weight: 300; color: #f0f0f0; }
.section-title { font-size: 3.5rem; font-weight: 700; margin-bottom: 20px; color: #fff; }
.section-description {
  max-width: 800px; margin: 0 auto 50px auto;
  font-size: 1.2rem; line-height: 1.7; color: #f0f0f0;
}
.servicios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: auto;
  perspective: 1000px;
}
.service-card {
  background-color: transparent; width: 100%; height: 320px;
  border-radius: 10px; text-decoration: none;
  /* AÑADIDO: Cambia el cursor para que no parezca un enlace */
  cursor: default;
}
.card-inner {
  position: relative; width: 100%; height: 100%;
  transition: transform 0.7s; transform-style: preserve-3d;
}
/* MODIFICADO: Ahora el hover se activa sobre la tarjeta (div), no sobre un enlace */
.service-card:hover .card-inner {
  transform: rotateY(180deg);
}
.card-front, .card-back {
  position: absolute; width: 100%; height: 100%;
  -webkit-backface-visibility: hidden; backface-visibility: hidden;
  border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  display: flex; flex-direction: column; justify-content: center;
  align-items: center; padding: 20px;
}
.card-front {
  background-color: #f0f0f0; color: #333;
}
.card-back {
  background-color: #8A2BE2; color: white;
  transform: rotateY(180deg);
}
.servicio-icon {
  background-color: #8A2BE2; width: 90px; height: 90px;
  border-radius: 50%; margin-bottom: 20px;
  display: flex; justify-content: center; align-items: center;
}
.servicio-icon svg {
  width: 50px; height: 50px; color: #fff;
}

.card-front h3 {
  color: #8A2BE2;
  font-size: 1.4rem;
  width: 100%;
  text-align: center;
  min-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-back h3 {
  font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px;
  margin-bottom: 15px; opacity: 0.9; text-align: center;
}
.card-back p {
  font-size: 1rem; line-height: 1.6; padding: 0 10px;
  text-align: center;
}
.stat-number {
  font-size: 3rem; font-weight: 700; color: #fff; line-height: 1;
}
.stat-label {
  font-size: 1rem; color: rgba(255, 255, 255, 0.8);
  text-align: center;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .section-container {
    padding: 60px 30px;
  }
  .servicios-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 900px) {
  .section-title {
    font-size: 2.8rem;
  }
  .section-description {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .section-container {
    padding: 40px 20px; /* Más padding lateral */
    min-height: auto;
  }
  .section-title {
    font-size: 2.2rem;
  }
  .section-description {
    font-size: 1rem;
    padding: 0 10px; /* Más padding lateral */
    margin-bottom: 30px;
  }
  .servicios-grid {
    grid-template-columns: 1fr;
    gap: 20px; /* Más gap entre tarjetas */
    max-width: 100%;
    width: 100%;
    padding: 0 10px; /* Padding interno del grid */
  }
  .service-card {
    height: 260px;
    max-width: 320px; /* Un poco más pequeña */
    margin: 0 auto;
    width: 100%; /* Asegurar que use todo el ancho disponible */
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 30px 15px; /* Más padding lateral */
  }
  .section-title {
    font-size: 1.8rem;
  }
  .section-subtitle {
    font-size: 1.2rem;
  }
  .section-description {
    font-size: 0.9rem;
    padding: 0 5px;
  }
  .servicios-grid {
    padding: 0 5px; /* Padding del grid */
    gap: 18px;
  }
  .service-card {
    height: 240px;
    max-width: 290px; /* Un poco más pequeña para evitar corte */
    width: calc(100% - 10px); /* Asegurar margen */
  }
  .card-front, .card-back {
    padding: 12px; /* Menos padding interno */
  }
  .card-front h3 {
    font-size: 1rem; /* Un poco más pequeño */
    min-height: 2.2rem;
    line-height: 1.1;
  }
  .servicio-icon {
    width: 55px;
    height: 55px;
    margin-bottom: 12px;
  }
  .servicio-icon svg {
    width: 32px;
    height: 32px;
  }
  .stat-number {
    font-size: 2rem;
  }
  .card-back h3 {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  .card-back p {
    font-size: 0.85rem;
    line-height: 1.3;
    padding: 0 5px;
  }
}

@media (max-width: 390px) {
  .section-container {
    padding: 25px 10px;
  }
  .servicios-grid {
    padding: 0;
  }
  .service-card {
    height: 220px;
    max-width: 270px;
    width: calc(100% - 20px); /* Más margen lateral */
  }
  .section-title {
    font-size: 1.6rem;
  }
}

@media (max-width: 320px) {
  .section-container {
    padding: 20px 8px;
  }
  .section-title {
    font-size: 1.4rem;
  }
  .service-card {
    height: 200px;
    max-width: 250px;
    width: calc(100% - 16px);
  }
  .card-front h3 {
    font-size: 0.9rem;
  }
  .stat-number {
    font-size: 1.8rem;
  }
  .card-front, .card-back {
    padding: 10px;
  }
}
</style>