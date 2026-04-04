const KUBERAN_TRANSLATE_KEY = "kuberan-site-language";

function getSavedTranslateLanguage() {
  return localStorage.getItem(KUBERAN_TRANSLATE_KEY) === "ta" ? "ta" : "en";
}

function setGoogleTranslateCookie(language) {
  const cookieValue = `/en/${language}`;
  document.cookie = `googtrans=${cookieValue};path=/`;

  if (window.location.hostname) {
    document.cookie = `googtrans=${cookieValue};path=/;domain=${window.location.hostname}`;
  }
}

function refreshGoogleTranslation() {
  const language = getSavedTranslateLanguage();
  const combo = document.querySelector(".goog-te-combo");
  if (!combo || language !== "ta") return;

  combo.value = "ta";
  combo.dispatchEvent(new Event("change"));
}

function updateTranslateButtons() {
  const language = getSavedTranslateLanguage();

  document.querySelectorAll("[data-translate-toggle]").forEach((root) => {
    root.innerHTML = `
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
        title="${language === "ta" ? "Switch to English" : "தமிழுக்கு மாற்று"}"
      >
        <svg
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5h12M9 3v2m1.048 9A18.022 18.022 0 016.412 9m6.088 9h7m-7 0l-1.333 3M19 18l-1.333-3M12 18l2.667-6L17.333 18"
          ></path>
        </svg>
        <span>${language === "ta" ? "தமிழ்" : "EN"}</span>
      </button>
    `;

    const button = root.querySelector("button");
    button?.addEventListener("click", () => {
      const nextLanguage = getSavedTranslateLanguage() === "ta" ? "en" : "ta";
      localStorage.setItem(KUBERAN_TRANSLATE_KEY, nextLanguage);
      setGoogleTranslateCookie(nextLanguage);
      window.location.reload();
    });
  });
}

function ensureGoogleTranslateRoot() {
  if (document.getElementById("google_translate_element")) return;

  const translateRoot = document.createElement("div");
  translateRoot.id = "google_translate_element";
  translateRoot.className = "hidden";
  document.body.appendChild(translateRoot);
}

window.kuberanGoogleTranslateInit = function kuberanGoogleTranslateInit() {
  if (!window.google?.translate?.TranslateElement) return;

  new window.google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,ta",
      autoDisplay: false,
    },
    "google_translate_element"
  );

  if (getSavedTranslateLanguage() === "ta") {
    window.setTimeout(refreshGoogleTranslation, 600);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setGoogleTranslateCookie(getSavedTranslateLanguage());
    ensureGoogleTranslateRoot();
    updateTranslateButtons();
  });
} else {
  setGoogleTranslateCookie(getSavedTranslateLanguage());
  ensureGoogleTranslateRoot();
  updateTranslateButtons();
}

window.addEventListener("kuberan-translate-refresh", () => {
  window.setTimeout(refreshGoogleTranslation, 250);
});
