(function () {
  const isRootPage = document.body?.dataset?.page === "home";
  const assetPrefix = isRootPage ? "./assets/mp3" : "../assets/mp3";

  const audioSources = {
    cart: `${assetPrefix}/cart.mp3`,
    whatsapp: `${assetPrefix}/whatsapp.mp3`,
  };

  const preloadLibrary = Object.fromEntries(
    Object.entries(audioSources).map(([name, src]) => [name, new Audio(src)])
  );

  Object.values(preloadLibrary).forEach((audio) => {
    audio.preload = "auto";
    audio.load();
  });

  function play(name) {
    const source = audioSources[name];
    if (!source) return Promise.resolve(false);

    try {
      const playback = new Audio(source);
      playback.preload = "auto";
      playback.playsInline = true;
      playback.currentTime = 0;

      const playPromise = playback.play();
      if (playPromise?.then) {
        return playPromise.then(() => true).catch(() => false);
      }
    } catch {
      return Promise.resolve(false);
    }

    return Promise.resolve(true);
  }

  window.KuberanSounds = {
    play,
  };
})();
