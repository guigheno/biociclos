/* ================= PARALLAX FLORESTA ================= */
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

// Animação das árvores no mobile
const isMobile = window.matchMedia("(max-width: 768px)").matches;
const forestImages = document.querySelectorAll(".forest img");

if (isMobile) {
  let t = 0;

  function swayTrees() {
    t += 0.01; // velocidade (quanto menor mais lento)

    forestImages.forEach((img, i) => {
      const amplitude = 4 + i; // intensidade do balanço
      const offset = Math.sin(t + i) * amplitude;

      img.style.transform = `translateX(${offset}px)`;
    });

    requestAnimationFrame(swayTrees);
  }

  swayTrees();
}
