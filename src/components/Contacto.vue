<script setup>
// No hay cambios en el script
</script>

<template>
  <section id="contacto" class="section-container">
    <div class="contact-wrapper">
      <!-- Columna Izquierda: Información de Contacto -->
      <div class="info-side">
        <h2 class="info-title">Información de <br>Contacto</h2>
        <p class="info-text">
          Estamos a su disposición para conversar sobre sus proyectos y ofrecerle soluciones a medida.
        </p>
        
        <!-- ========= INICIO DE LA MODIFICACIÓN ========= -->
        <div class="contact-details">
          <!-- Mantenemos el texto y el ícono visibles -->
          <div class="contact-link-static">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/></svg>
            <span>administracion@nexovant.net</span>
          </div>
          
          <!-- Nuevos botones para webmail -->
          <div class="webmail-buttons">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=administracion@nexovant.net" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="webmail-btn gmail"
            >
              Abrir en Gmail
            </a>
            <a 
              href="https://outlook.live.com/owa/?path=/mail/action/compose&to=administracion@nexovant.net" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="webmail-btn outlook"
            >
              Abrir en Outlook
            </a>
          </div>
        </div>
        <!-- ========= FIN DE LA MODIFICACIÓN ========= -->

        <div class="contact-person">
          <h4>ABRAHAM PATTI</h4>
          <span>Gerente de servicios</span>
        </div>
      </div>

      <!-- Columna Derecha: Botón de WhatsApp -->
      <div class="action-side">
        <div class="whatsapp-box">
          <h3>¿Tenés una consulta?</h3>
          <p>¡Envíanos un mensaje y te responderemos a la brevedad!</p>
          <a 
            href="https://wa.me/5491128556046" 
            class="whatsapp-btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
            <span>Chatear por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  padding: 80px 40px;
  min-height: calc(100vh - 70px - 160px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%);
}
.contact-wrapper {
  display: flex;
  max-width: 1000px;
  width: 100%;
  background: #2c2c54;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  overflow: hidden;
}
.info-side {
  color: #fff;
  padding: 40px;
  width: 50%;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}
.info-title { font-size: 2.5rem; line-height: 1.2; margin-bottom: 20px; color: #fff; }
.info-text { font-size: 1.1rem; color: #f0f0f0; opacity: 0.9; margin-bottom: 30px; }
.contact-details { margin-bottom: 40px; }

/* === INICIO DE ESTILOS NUEVOS === */
.contact-link-static {
  display: flex; 
  align-items: center; 
  gap: 15px;
  color: #fff; 
  font-size: 1.1rem;
  opacity: 0.9;
}
.contact-link-static svg { 
  width: 24px; height: 24px; 
}
.webmail-buttons {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}
.webmail-btn {
  padding: 8px 15px;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  transition: opacity 0.3s ease;
}
.webmail-btn:hover {
  opacity: 0.85;
}
.webmail-btn.gmail {
  background-color: #D44638; /* Color de Gmail */
}
.webmail-btn.outlook {
  background-color: #0072C6; /* Color de Outlook */
}
/* === FIN DE ESTILOS NUEVOS === */

.contact-person h4 { margin: 0; }
.contact-person span { opacity: 0.8; }
.action-side {
  padding: 40px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.whatsapp-box { text-align: center; }
.whatsapp-box h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #fff;
}
.whatsapp-box p {
  font-size: 1.1rem;
  color: #f0f0f0;
  margin-bottom: 30px;
}
.whatsapp-btn {
  display: inline-flex; align-items: center; gap: 15px;
  padding: 15px 30px;
  background-color: #25D366;
  color: #fff;
  border-radius: 50px;
  font-size: 1.2rem; font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
}
.whatsapp-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5);
}
.whatsapp-btn svg { width: 28px; height: 28px; }
/* Responsive Design */
@media (max-width: 1200px) {
  .section-container {
    padding: 70px 40px;
  }
  .contact-wrapper {
    max-width: 1000px;
  }
  .info-side, .action-side {
    padding: 45px;
  }
}

/* Tablets en landscape (1024px) */
@media (max-width: 1024px) {
  .section-container {
    padding: 60px 35px;
  }
  .contact-wrapper {
    max-width: 900px;
  }
  .info-side, .action-side {
    padding: 40px;
  }
  .info-title {
    font-size: 2.3rem;
  }
  .info-text {
    font-size: 1.05rem;
  }
  .whatsapp-box h3 {
    font-size: 1.7rem;
  }
  .whatsapp-box p {
    font-size: 1.05rem;
  }
  .whatsapp-btn {
    font-size: 1.1rem;
    padding: 14px 28px;
  }
}

/* Tablets en portrait y pantallas medianas */
@media (max-width: 900px) and (min-width: 769px) {
  .section-container {
    padding: 50px 30px;
  }
  .contact-wrapper {
    max-width: 700px;
  }
  .info-side, .action-side {
    padding: 35px;
  }
  .info-title {
    font-size: 2.1rem;
  }
  .whatsapp-box h3 {
    font-size: 1.6rem;
  }
}

@media (max-width: 900px) {
  .section-container {
    padding: 40px 20px;
    min-height: auto;
  }
  .contact-wrapper { 
    flex-direction: column; 
    border: none;
    max-width: 100%;
    width: 100%;
  }
  .info-side, .action-side { 
    width: 100%; 
    border: none; 
  }
  .info-side { 
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 25px 20px;
  }
  .action-side { 
    padding: 25px 20px;
  }
  .info-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .section-container {
    padding: 30px 15px;
  }
  .info-side, .action-side {
    padding: 20px 15px;
  }
  .info-title {
    font-size: 1.8rem;
  }
  .whatsapp-box h3 {
    font-size: 1.5rem;
  }
  .whatsapp-btn {
    font-size: 1rem;
    padding: 12px 25px;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 25px 15px; /* Un poco más de padding */
    align-items: flex-start;
  }
  .contact-wrapper {
    margin-top: 15px;
  }
  .info-side, .action-side {
    padding: 25px 20px; /* Más padding interno */
  }
  .info-title {
    font-size: 1.6rem;
    line-height: 1.2;
    margin-bottom: 15px;
  }
  .info-text {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
  .contact-details {
    margin-bottom: 25px;
  }
  .contact-link-static {
    font-size: 0.9rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .webmail-buttons {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    margin-top: 10px;
  }
  .webmail-btn {
    font-size: 0.75rem;
    padding: 5px 10px;
  }
  .contact-person h4 {
    font-size: 1rem;
  }
  .contact-person span {
    font-size: 0.85rem;
  }
  .whatsapp-box {
    text-align: center;
  }
  .whatsapp-box h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
  .whatsapp-box p {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
  .whatsapp-btn {
    font-size: 0.9rem;
    padding: 10px 18px;
    gap: 6px;
  }
  .whatsapp-btn svg {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 390px) {
  .info-title {
    font-size: 1.5rem;
  }
  .whatsapp-box h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 320px) {
  .section-container {
    padding: 15px 8px;
  }
  .info-title {
    font-size: 1.4rem;
  }
  .whatsapp-box h3 {
    font-size: 1.1rem;
  }
  .whatsapp-btn {
    font-size: 0.8rem;
    padding: 8px 15px;
  }
}
</style>