/* PARALLAX FLORESTA */
const subtleness = 20;
const maxWidth = 768;

// Renomeie esta variável para evitar conflito
const desktopPieces = document.querySelectorAll(".forest img");

document
  .querySelector(".parallax-section")
  ?.addEventListener("mousemove", (e) => {
    if (window.innerWidth <= maxWidth) return;

    const ax = -(window.innerWidth / 2 - e.pageX) / subtleness;

    desktopPieces.forEach((piece, i) => {
      const dir = i % 2 === 0 ? -1 : 1;
      piece.style.transform = `translateX(${dir * ax / (14 + i)}px)`;
    });
  });


/* SCROLL SUAVE */
document.querySelectorAll('a[href="#contato"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .getElementById("contato")
      ?.scrollIntoView({ behavior: "smooth" });
  });
});

/* MOBILE – balanço automático */
if (window.matchMedia("(max-width: 768px)").matches) {
  // Use uma variável diferente ou reutilize com escopo local
  const mobilePieces = document.querySelectorAll(".forest img");
  let t = 0;
  let animationId = null;

  function animate() {
    t += 0.001;

  const maxMove = 0.01; // controle 

  mobilePieces.forEach((el, i) => {
    const dir = i % 2 === 0 ? -1 : 1;
    const layerFactor = 1 + i * 0.15; // profundidade suave
    const offset = Math.sin(t + i) * maxMove * layerFactor;
    el.style.transform = `translateX(${dir * offset}px)`;
  });

    animationId = requestAnimationFrame(animate);
  }

  // Inicia após primeira interação (Safari)
  window.addEventListener("touchstart", () => {
    if (!animationId) animate();
  }, { once: true });
  
  // Opcional: também inicia após carregamento se já estiver em mobile
  animate();
}
