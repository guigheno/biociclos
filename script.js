const btnContato = document.getElementById("btnContato");

btnContato.addEventListener("click", () => {
  document.getElementById("contato").scrollIntoView({
    behavior: "smooth"
  });
});


const subtleness = 20;
const maxWidth = 700;

const pieces = [
  $(".p1"),
  $(".p2"),
  $(".p3"),
  $(".p4"),
  $(".p5"),
  $(".p6")
];

$(".parallax-section").on("mousemove", function (e) {
  if ($(window).width() > maxWidth) {
    let ax = -($(window).width() / 2 - e.pageX) / subtleness;

    pieces.forEach((piece, i) => {
      let dir = i % 2 === 0 ? -1 : 1;
      piece.css("transform", `translateX(${dir * ax / (14 + i)}px)`);
    });
  }
});

const hero = document.getElementById("hero");
const heroText = document.querySelector(".hero-text");

window.addEventListener("scroll", () => {
  const heroBottom = hero.offsetTop + hero.offsetHeight;
  const scrollY = window.scrollY + window.innerHeight / 2;

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const offset = isMobile ? 400 : 50; // 👈 ajuste aqui

  if (scrollY > heroBottom - offset) {
    heroText.style.opacity = "0";
    heroText.style.pointerEvents = "none";
  } else {
    heroText.style.opacity = "1";
    heroText.style.pointerEvents = "auto";
  }
});

const carousel = document.getElementById("carousel");

let position = 0;
const speed = 0.5; // 👈 QUANTO MENOR, MAIS LENTO

function rotateCarousel() {
  position -= speed;
  carousel.style.transform = `translateX(${position}px)`;

  // quando metade passou, reinicia suavemente
  if (Math.abs(position) >= carousel.scrollWidth / 2) {
    position = 0;
  }

  requestAnimationFrame(rotateCarousel);
}

rotateCarousel();

