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

/* HERO*/
const hero = document.getElementById("hero");
const heroText = document.querySelector(".hero-text");

window.addEventListener("scroll", () => {
  if (!hero || !heroText) return;

  const heroBottom = hero.offsetTop + hero.offsetHeight;
  const scrollPos = window.scrollY + window.innerHeight / 2;

  const isMobile = window.innerWidth <= 768;
  const offset = isMobile ? -200 : 50; // mobile some antes

  heroText.style.opacity =
    scrollPos > heroBottom - offset ? "0" : "1";

  heroText.style.pointerEvents =
    scrollPos > heroBottom - offset ? "none" : "auto";
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
