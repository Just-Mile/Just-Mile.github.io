document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validaciones básicas
    if (!name || !email || !message) {
      showMessage("Por favor completa todos los campos.", "error");
      return;
    }

    if (!validateEmail(email)) {
      showMessage("El correo no tiene un formato válido.", "error");
      return;
    }

    // Simula el envío (puedes conectar con EmailJS o tu backend)
    showMessage("Mensaje enviado correctamente. ¡Gracias por contactarme!", "success");
    form.reset();
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.style.color = type === "error" ? "#e63946" : "#2a9d8f";
  }
});
