<template>
  <section id="valores" class="section-container valores-bg">
    <div class="content-wrapper-valores">
      <h2 class="section-subtitle">NUESTROS</h2>
      <h1 class="section-title">VALORES</h1>
      <p>En un mercado dinámico y competitivo, Nexovant se distingue por una propuesta de valor sólida y centrada en las necesidades de nuestros clientes:</p>
      <ul>
        <li><strong>Servicio integral “end-to-end”:</strong> Incluye desde la obra civil hasta la puesta en marcha y gestión completa de proyectos.</li>
        <li><strong>Cercanía y la excelencia:</strong> Con un trato personalizado y acompañamiento en todo el ciclo de vida de cada proyecto.</li>
        <li><strong>Equipo altamente calificado y tecnología adecuada:</strong> Lo que asegura una ejecución eficiente, segura y de calidad.</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  padding: 80px 40px;
  min-height: 100vh; /* Asegurar altura mínima */
  color: white;
}
.valores-bg {
  background-color: #2c2c54;
}
.section-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  color: #f0f0f0;
}
.section-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
}
.content-wrapper-valores {
  max-width: 900px;
  margin: auto;
  text-align: center;
}
.content-wrapper-valores p {
  font-size: 1.1rem;
  color: #f0f0f0;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.content-wrapper-valores p:hover {
  color: #fff;
}
ul {
  list-style: none;
  padding: 0;
  margin-top: 30px;
  text-align: left;
}
li {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 1.1rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

/* Efectos hover para los valores */
li:hover {
  transform: scale(1.05); /* Agrandar un poquito */
  background-color: rgba(255, 255, 255, 0.15);
  border-color: rgba(138, 43, 226, 0.5); /* Borde morado sutil */
  box-shadow: 0 8px 25px rgba(138, 43, 226, 0.3); /* Sombra morada */
}

/* Efecto de brillo sutil al hover */
li::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
  z-index: 1;
}

li:hover::before {
  left: 100%; /* Efecto de brillo que pasa por encima */
}

/* Asegurar que el texto esté por encima del efecto */
li strong,
li {
  position: relative;
  z-index: 2;
}

/* Específicamente para el contenido de texto */
li * {
  position: relative;
  z-index: 2;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-container {
    padding: 60px 20px;
    min-height: auto;
  }
  .section-title {
    font-size: 2.5rem;
  }
  .section-subtitle {
    font-size: 1.3rem;
  }
  .content-wrapper-valores p {
    font-size: 1rem;
  }
  li {
    font-size: 1rem;
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 40px 15px;
  }
  .section-title {
    font-size: 2rem;
  }
  .section-subtitle {
    font-size: 1.2rem;
  }
  .content-wrapper-valores p {
    font-size: 0.9rem;
    padding: 0 10px;
  }
  li {
    font-size: 0.9rem;
    padding: 10px;
    margin-bottom: 8px;
  }
}

@media (max-width: 320px) {
  .section-container {
    padding: 30px 10px;
  }
  .section-title {
    font-size: 1.8rem;
  }
  .content-wrapper-valores p {
    font-size: 0.85rem;
  }
  li {
    font-size: 0.85rem;
    padding: 8px;
  }
}
</style>