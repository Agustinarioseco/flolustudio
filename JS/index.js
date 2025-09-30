// ===== Menú responsive =====
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const navLinks = nav.querySelectorAll('a');

// Abrir/cerrar menú al hacer click en el botón
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Cerrar menú al hacer click en un link (solo en mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
    }
  });
});

// Opcional: cerrar menú si se hace click fuera del nav
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove('active');
  }
});

