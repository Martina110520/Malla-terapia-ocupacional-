document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".toggle");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const contenido = boton.nextElementSibling;

      if (contenido.style.maxHeight) {
        contenido.style.maxHeight = null;
      } else {
        contenido.style.maxHeight = contenido.scrollHeight + "px";
      }
    });
  });
});
