const CACHE_NAME = "kuberan-foodz-v2";
const APP_SHELL = [
  "./index.html",
  "./manifest.webmanifest",
  "./assets/css/styles.css",
  "./assets/images/Logo.png",
  "./assets/images/icon-192.png",
  "./assets/images/icon-512.png",
  "./assets/images/bg.jpg",
  "./assets/images/bg_2.jpg",
  "./assets/images/empty_cart.jpg",
  "./assets/mp3/cart.mp3",
  "./assets/mp3/whatsapp.mp3",
  "./assets/dishes/chappathi.jpg",
  "./assets/dishes/dosai.jpg",
  "./assets/dishes/idly.jpg",
  "./assets/dishes/lemon_rice.jpg",
  "./assets/dishes/malli_rice.jpg",
  "./assets/dishes/mushroom_biriyani.jpg",
  "./assets/dishes/tomato_rice.jpg",
  "./assets/dishes/venpongal.jpg",
  "./pages/dishes.html",
  "./pages/cart.html",
  "./scripts/navbar.js",
  "./scripts/menu-filter.js",
  "./scripts/cart.js",
  "./scripts/dishes-page.js",
  "./scripts/cart-page.js",
  "./scripts/sounds.js",
  "./scripts/pwa.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") return;

  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() =>
        caches.match(request).then((response) => response || caches.match("./index.html"))
      )
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request).then((networkResponse) => {
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone);
        });
        return networkResponse;
      });
    })
  );
});
