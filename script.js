/* PARALLAX FLORESTA */
const subtleness = 20;
const maxWidth = 768;

const pieces = document.querySelectorAll(".forest img");

document
  .querySelector(".parallax-section")
  ?.addEventListener("mousemove", (e) => {
    if (window.innerWidth <= maxWidth) return;

    const ax = -(window.innerWidth / 2 - e.pageX) / subtleness;

    pieces.forEach((piece, i) => {
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

/* MOBILE SWAY */
if (window.matchMedia("(max-width: 768px)").matches) {
  const piecesMobile = document.querySelectorAll(".forest img");
  let t = 0;

  function mobileSway() {
    t += 0.01; // velocidade do balanço

    piecesMobile.forEach((piece, i) => {
      const dir = i % 2 === 0 ? -1 : 1;
      const offset = Math.sin(t + i) * (3 + i);
      piece.style.transform = `translateX(${dir * offset}px)`;
    });

    requestAnimationFrame(mobileSway);
  }

  // inicia automaticamente
  mobileSway();
}


