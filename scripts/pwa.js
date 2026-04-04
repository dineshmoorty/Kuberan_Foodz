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

function showInstallHelp() {
  const userAgent = window.navigator.userAgent || "";
  const isIos =
    /iPhone|iPad|iPod/i.test(userAgent) ||
    (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(userAgent);

  if (isIos) {
    window.alert("To install this app, tap Share and choose Add to Home Screen.");
    return;
  }

  if (isAndroid) {
    window.alert("To install this app, tap your browser menu and choose Install app or Add to Home screen.");
    return;
  }

  window.alert("To install this app, use your browser menu and choose Install app or Add to Home screen.");
}

installButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      showInstallHelp();
      return;
    }

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
} else {
  setInstallButtonsVisible(true);
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
