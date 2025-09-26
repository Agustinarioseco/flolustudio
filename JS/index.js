document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
  
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });

  const form = document.getElementById('comentariosForm');
const popup = document.getElementById('popupConfirm');
const cerrar = document.getElementById('cerrarPopup');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    nombre: form.nombre.value,
    empresa: form.empresa.value,
    email: form.email.value,
    mensaje: form.mensaje.value,
    rating: form.rating.value || 0
  };

  fetch('https://script.google.com/macros/s/AKfycbzFEiflRvy7daZIPUu8V-qpzJ3KkYGk7fa9jdnbFLjkNPyaerHMDOy-SZWolfP6O-Ot6A/exec', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(response => {
    console.log(response);
    popup.classList.add('show');
    form.reset();
  })
  .catch(err => {
    console.error(err);
    alert('Hubo un error al enviar el comentario.');
  });
});

cerrar.addEventListener('click', () => {
  popup.classList.remove('show');
});

  
    