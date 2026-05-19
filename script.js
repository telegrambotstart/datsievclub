const benefitWords = [
  "силу",
  "дисциплину",
  "контроль",
  "выносливость",
  "уверенность",
  "характер",
];

const rotator = document.querySelector("[data-rotator]");
const heroVideo = document.querySelector("[data-hero-video]");

if (heroVideo) {
  heroVideo.addEventListener("loadeddata", () => {
    heroVideo.closest(".hero-media")?.classList.add("has-video");
  });
}

if (rotator && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let index = 0;

  window.setInterval(() => {
    rotator.classList.add("is-changing");

    window.setTimeout(() => {
      index = (index + 1) % benefitWords.length;
      rotator.textContent = benefitWords[index];
      rotator.classList.remove("is-changing");
    }, 220);
  }, 1800);
}

document.querySelectorAll(".direction-card").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      return;
    }

    const isOpen = card.classList.toggle("is-open");
    card.setAttribute("aria-expanded", String(isOpen));
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    const isOpen = card.classList.toggle("is-open");
    card.setAttribute("aria-expanded", String(isOpen));
  });
});
