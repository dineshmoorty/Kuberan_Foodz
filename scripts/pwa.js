if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const isRootPage = document.body?.dataset?.page === "home";
    const serviceWorkerPath = isRootPage ? "./sw.js" : "../sw.js";

    navigator.serviceWorker.register(serviceWorkerPath).catch((error) => {
      console.warn("PWA service worker registration failed:", error);
    });
  });
}
