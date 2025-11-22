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
.section-subtitle { 
  font-size: 1.5rem; 
  font-weight: 300; 
  color: #f0f0f0;
  margin-bottom: 10px;
}

.section-title { 
  font-size: 3.5rem; 
  font-weight: 700; 
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, #bb86fc, #e1bee7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 10px rgba(255,255,255,0.1);
}
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
  grid-template-columns: repeat(4, minmax(0, 1fr)); /* Forzar fracciones iguales */
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
  max-width: 100%;
  min-width: 0;
  height: 350px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-10px);
}
.card-inner {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  overflow: hidden;
}

.service-card:hover .card-inner {
  transform: rotateY(180deg);
  box-shadow: 0 25px 50px rgba(138, 43, 226, 0.3);
}
.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.card-front {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.card-front::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.5s ease;
}

.service-card:hover .card-front::before {
  left: 100%;
}

.card-back {
  background: linear-gradient(135deg, #8A2BE2, #6a1b9a, #bb86fc);
  color: white;
  transform: rotateY(180deg);
  position: relative;
}

.card-back::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .card-back::before {
  opacity: 1;
}

/* CONTENIDO INTERNO DE LAS TARJETAS */
.servicio-icon {
  background: linear-gradient(45deg, #bb86fc, #8A2BE2, #6a1b9a);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease;
  position: relative;
  box-shadow: 0 10px 30px rgba(138, 43, 226, 0.3);
  z-index: 2;
}

.service-card:hover .servicio-icon {
  transform: scale(1.1) rotate(10deg);
  box-shadow: 0 15px 40px rgba(138, 43, 226, 0.5);
}

.servicio-icon::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #fff, #bb86fc, #8A2BE2);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .servicio-icon::before {
  opacity: 1;
}

.servicio-icon svg {
  width: 55px;
  height: 55px;
  color: #fff;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
}

.service-card:hover .servicio-icon svg {
  transform: scale(1.1);
  color: #fff;
}
.card-front h3 {
  background: linear-gradient(45deg, #fff, #bb86fc, #e1bee7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  min-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
}

.service-card:hover .card-front h3 {
  background: linear-gradient(45deg, #bb86fc, #fff, #e1bee7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transform: translateY(-5px);
}

.card-back h3 {
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  z-index: 2;
  position: relative;
}

.card-back p {
  font-size: 1.1rem;
  line-height: 1.7;
  padding: 0 15px;
  text-align: center;
  font-style: italic;
  text-shadow: 0 1px 5px rgba(0,0,0,0.2);
  z-index: 2;
  position: relative;
}
.stat-number {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(45deg, #fff, #bb86fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 5px 15px rgba(255,255,255,0.2);
  margin-bottom: 15px;
  z-index: 2;
  position: relative;
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.service-card:hover .stat-number {
  transform: scale(1.1);
  text-shadow: 0 8px 25px rgba(255,255,255,0.3);
}

.stat-label {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  font-weight: 500;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  z-index: 2;
  position: relative;
  transition: all 0.3s ease;
}

.service-card:hover .stat-label {
  color: #fff;
  transform: translateY(-3px);
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