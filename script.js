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
  const pieces = document.querySelectorAll(".forest img");
  let t = 0;

  function animate() {
    t += 0.01;

    pieces.forEach((el, i) => {
      const dir = i % 2 === 0 ? -1 : 1;
      const offset = Math.sin(t + i) * (0.0000001 + i);
      el.style.transform = `translateX(${dir * offset}px)`;
    });

    requestAnimationFrame(animate);
  }

  // inicia após primeira interação (Safari)
  window.addEventListener("touchstart", animate, { once: true });
}
