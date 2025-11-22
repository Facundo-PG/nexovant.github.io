<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

// Estado del formulario
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref(''); // 'success', 'error', o ''

// Función para enviar el formulario
const sendEmail = async () => {
  if (isSubmitting.value) return;
  
  // Validación básica
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    submitStatus.value = 'error';
    setTimeout(() => submitStatus.value = '', 3000);
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    // Configuración de EmailJS
    // IMPORTANTE: Sigue estos pasos para configurar EmailJS:
    // 1. Ve a https://www.emailjs.com/ y crea una cuenta gratuita
    // 2. En el dashboard, ve a "Email Services" y conecta tu cuenta de Gmail
    // 3. Ve a "Email Templates" y crea un nuevo template con estas variables:
    //    - {{from_name}} - Nombre del remitente
    //    - {{from_email}} - Email del remitente
    //    - {{phone}} - Teléfono (opcional)
    //    - {{message}} - Mensaje
    //    - {{to_email}} - Destinatario (ramirez.facundo1993@gmail.com)
    // 4. Copia tu Service ID, Template ID y User ID (Public Key)
    // 5. Reemplaza los valores a continuación:
    
    const serviceID = 'service_f2o5cxk'; // Ej: 'service_abc1234'
    const templateID = 'template_87yyiah'; // Ej: 'template_xyz5678'
    const userID = 'me9yHmC12iQjONrjG'; // Ej: 'user_ABC123XYZ' (también llamado Public Key)
    
    const templateParams = {
      from_name: formData.value.name,
      from_email: formData.value.email,
      phone: formData.value.phone,
      message: formData.value.message,
      to_email: 'ramirez.facundo1993@gmail.com'
    };
    
    await emailjs.send(serviceID, templateID, templateParams, userID);
    
    submitStatus.value = 'success';
    
    // Limpiar formulario
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
    
    setTimeout(() => submitStatus.value = '', 5000);
  } catch (error) {
    console.error('Error al enviar email:', error);
    submitStatus.value = 'error';
    setTimeout(() => submitStatus.value = '', 3000);
  } finally {
    isSubmitting.value = false;
  }
};
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
          <!-- Formulario de contacto -->
          <form @submit.prevent="sendEmail" class="contact-form">
            <div class="form-group">
              <label for="name">Nombre completo *</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                placeholder="Juan Pérez"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="phone">Teléfono</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="formData.phone" 
                placeholder="+54 9 11 1234-5678"
              />
            </div>
            
            <div class="form-group">
              <label for="message">Mensaje *</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                placeholder="Cuéntenos sobre su proyecto..."
                rows="4"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="submit-btn"
              :disabled="isSubmitting"
            >
              <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
              </svg>
              <span v-if="isSubmitting">Enviando...</span>
              <span v-else>Enviar Mensaje</span>
            </button>
            
            <!-- Mensajes de estado -->
            <div v-if="submitStatus === 'success'" class="status-message success">
              ✓ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
            </div>
            <div v-if="submitStatus === 'error'" class="status-message error">
              ✗ Error al enviar el mensaje. Por favor, intente nuevamente.
            </div>
          </form>
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
  background: #2c2c54
}
.contact-wrapper {
  display: flex;
  max-width: 1000px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}
.contact-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 35px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.2);
}

.info-side {
  color: #fff;
  padding: 40px;
  width: 50%;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
}
.info-title { 
  font-size: 2.5rem; 
  line-height: 1.2; 
  margin-bottom: 20px; 
  background: linear-gradient(45deg, #fff, #e1bee7, #bb86fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 10px rgba(255,255,255,0.1);
  transition: all 0.3s ease;
}

.info-title:hover {
  background: linear-gradient(45deg, #bb86fc, #e1bee7, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transform: translateY(-2px);
}
.info-text { font-size: 1.1rem; color: #f0f0f0; opacity: 0.9; margin-bottom: 30px; }
.contact-details { margin-bottom: 40px; }

/* === INICIO DE ESTILOS DEL FORMULARIO === */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #bb86fc;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 3px rgba(187, 134, 252, 0.2);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background: linear-gradient(45deg, #bb86fc, #8e24aa);
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(187, 134, 252, 0.4);
  position: relative;
  overflow: hidden;
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(187, 134, 252, 0.6);
  background: linear-gradient(45deg, #8e24aa, #bb86fc);
}

.submit-btn:hover::before {
  left: 100%;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-btn svg {
  width: 20px;
  height: 20px;
}

.status-message {
  padding: 12px;
  border-radius: 8px;
  font-size: 0.95rem;
  text-align: center;
  animation: slideIn 0.3s ease;
}

.status-message.success {
  background: rgba(76, 175, 80, 0.2);
  border: 1px solid rgba(76, 175, 80, 0.5);
  color: #a5d6a7;
}

.status-message.error {
  background: rgba(244, 67, 54, 0.2);
  border: 1px solid rgba(244, 67, 54, 0.5);
  color: #ef9a9a;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* === FIN DE ESTILOS DEL FORMULARIO === */

.contact-person {
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  transition: all 0.3s ease;
}

.contact-person:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(138, 43, 226, 0.3);
  transform: translateY(-2px);
}

.contact-person h4 { 
  margin: 0; 
  color: #bb86fc;
  font-weight: 600;
}

.contact-person span { 
  opacity: 0.9;
  color: #e1bee7;
}
.action-side {
  padding: 40px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.action-side::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(138, 43, 226, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-wrapper:hover .action-side::before {
  opacity: 1;
}
.whatsapp-box { text-align: center; }
.whatsapp-box h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  background: linear-gradient(45deg, #fff, #bb86fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
}

.whatsapp-box:hover h3 {
  background: linear-gradient(45deg, #bb86fc, #fff, #e1bee7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transform: translateY(-2px);
}
.whatsapp-box p {
  font-size: 1.1rem;
  color: #f0f0f0;
  margin-bottom: 30px;
}
.whatsapp-btn {
  display: inline-flex; align-items: center; gap: 15px;
  padding: 18px 35px;
  background: linear-gradient(45deg, #25D366, #40E67B);
  color: #fff;
  border-radius: 50px;
  font-size: 1.2rem; font-weight: bold;
  text-decoration: none;
  transition: all 0.4s ease;
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4), 0 0 0 1px rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
}

.whatsapp-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.whatsapp-btn:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 40px rgba(37, 211, 102, 0.6), 0 0 0 1px rgba(255,255,255,0.2);
  background: linear-gradient(45deg, #1FAD4F, #25D366);
}

.whatsapp-btn:hover::before {
  left: 100%;
}
.whatsapp-btn svg { width: 28px; height: 28px; }
/* Responsive Design */
@media (max-width: 1200px) {
  .section-container {
    padding: 60px 30px;
  }
  .contact-wrapper {
    max-width: 900px;
  }
}

.section-container {
  padding: 80px 40px;
  min-height: auto; /* Cambiar de calc(100vh - 70px - 160px) a auto */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c2c54;
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
  
  /* Estilos responsive para el formulario */
  .form-group label {
    font-size: 0.85rem;
  }
  
  .form-group input,
  .form-group textarea {
    padding: 10px 12px;
    font-size: 0.9rem;
  }
  
  .submit-btn {
    font-size: 0.95rem;
    padding: 12px 24px;
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