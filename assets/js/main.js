// assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  // Cambia el fondo del header al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Animación de aparición suave en los elementos al cargar
  const revealElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => observer.observe(el));
});
