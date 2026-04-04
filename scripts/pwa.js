const installButtons = Array.from(document.querySelectorAll("[data-pwa-install]"));
let deferredInstallPrompt = null;

function isStandaloneMode() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function setInstallButtonsVisible(visible) {
  installButtons.forEach((button) => {
    button.classList.toggle("hidden", !visible);
    button.classList.toggle("inline-flex", visible);
  });
}

installButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;

    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    setInstallButtonsVisible(false);
  });
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;

  if (!isStandaloneMode()) {
    setInstallButtonsVisible(true);
  }
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  setInstallButtonsVisible(false);
});

if (isStandaloneMode()) {
  setInstallButtonsVisible(false);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const isRootPage = document.body?.dataset?.page === "home";
    const serviceWorkerPath = isRootPage ? "./sw.js" : "../sw.js";

    navigator.serviceWorker.register(serviceWorkerPath).catch((error) => {
      console.warn("PWA service worker registration failed:", error);
    });
  });
}
