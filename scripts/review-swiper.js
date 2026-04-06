const reviewSwiper = document.querySelector("[data-review-swiper]");

if (reviewSwiper) {
  const track = reviewSwiper.querySelector("[data-review-track]");
  const slides = Array.from(track?.children || []);
  const prevButton = reviewSwiper.querySelector("[data-review-prev]");
  const nextButton = reviewSwiper.querySelector("[data-review-next]");
  const dotsContainer = reviewSwiper.querySelector("[data-review-dots]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let currentIndex = 0;
  let maxIndex = 0;
  let autoPlayTimer = null;

  function getVisibleSlides() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function getSlideOffset() {
    if (!slides.length) return 0;

    const gap = Number.parseFloat(window.getComputedStyle(track).gap) || 0;
    return slides[0].getBoundingClientRect().width + gap;
  }

  function renderDots() {
    if (!dotsContainer) return;

    const pageCount = maxIndex + 1;

    if (dotsContainer.children.length !== pageCount) {
      dotsContainer.innerHTML = "";

      Array.from({ length: pageCount }).forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "review-swiper__dot";
        dot.setAttribute("aria-label", `Go to review ${index + 1}`);
        dot.addEventListener("click", () => {
          goTo(index);
          restartAutoplay();
        });
        dotsContainer.appendChild(dot);
      });
    }

    Array.from(dotsContainer.children).forEach((dot, index) => {
      const isActive = index === currentIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  }

  function updateSlider() {
    const visibleSlides = getVisibleSlides();
    maxIndex = Math.max(0, slides.length - visibleSlides);
    currentIndex = Math.min(currentIndex, maxIndex);

    track.style.transform = `translateX(-${currentIndex * getSlideOffset()}px)`;
    renderDots();
  }

  function goTo(index) {
    if (!slides.length) return;

    if (index < 0) {
      currentIndex = maxIndex;
    } else if (index > maxIndex) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    updateSlider();
  }

  function stopAutoplay() {
    if (!autoPlayTimer) return;
    window.clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }

  function startAutoplay() {
    stopAutoplay();

    if (reducedMotion.matches || maxIndex === 0) return;

    autoPlayTimer = window.setInterval(() => {
      goTo(currentIndex + 1);
    }, 3500);
  }

  function restartAutoplay() {
    startAutoplay();
  }

  prevButton?.addEventListener("click", () => {
    goTo(currentIndex - 1);
    restartAutoplay();
  });

  nextButton?.addEventListener("click", () => {
    goTo(currentIndex + 1);
    restartAutoplay();
  });

  reviewSwiper.addEventListener("mouseenter", stopAutoplay);
  reviewSwiper.addEventListener("mouseleave", startAutoplay);
  reviewSwiper.addEventListener("focusin", stopAutoplay);
  reviewSwiper.addEventListener("focusout", startAutoplay);

  window.addEventListener("resize", updateSlider);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoplay();
      return;
    }

    startAutoplay();
  });

  const handleMotionChange = () => startAutoplay();
  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", handleMotionChange);
  } else if (typeof reducedMotion.addListener === "function") {
    reducedMotion.addListener(handleMotionChange);
  }

  updateSlider();
  startAutoplay();
}
