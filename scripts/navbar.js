const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navPanel = document.getElementById("nav-panel");
const navBackdrop = document.getElementById("nav-backdrop");

function setNavOpen(open) {
  if (!navPanel || !navBackdrop || !navToggle) return;

  navPanel.classList.toggle("translate-x-0", open);
  navPanel.classList.toggle("translate-x-full", !open);
  navBackdrop.classList.toggle("opacity-100", open);
  navBackdrop.classList.toggle("pointer-events-auto", open);
  navToggle.setAttribute("aria-expanded", String(open));
}

if (navToggle && navPanel && navBackdrop) {
  navToggle.setAttribute("aria-expanded", "false");

  navToggle.addEventListener("click", () => {
    const isOpen = navPanel.classList.contains("translate-x-0");
    setNavOpen(!isOpen);
  });
}

if (navClose && navPanel && navBackdrop) {
  navClose.addEventListener("click", () => setNavOpen(false));
}

if (navBackdrop && navPanel) {
  navBackdrop.addEventListener("click", () => setNavOpen(false));
}
