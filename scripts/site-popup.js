(function () {
  function createPopup() {
    if (!document.body || document.querySelector('.site-popup')) {
      return;
    }

    var page = document.body.getAttribute('data-page');
    var imagePath = page === 'home'
      ? './assets/images/opening.png'
      : '../assets/images/opening.png';

    var popup = document.createElement('div');
    popup.className = 'site-popup';
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-label', 'Site popup');

    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'site-popup__close';
    closeButton.setAttribute('aria-label', 'Close popup');
    closeButton.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path d="M6 6L18 18M18 6L6 18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>';

    var image = document.createElement('img');
    image.src = imagePath;
    image.alt = 'Important customer notice';
    image.className = 'site-popup__image';

    closeButton.addEventListener('click', function () {
      popup.remove();
    });

    popup.appendChild(closeButton);
    popup.appendChild(image);
    document.body.appendChild(popup);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createPopup);
  } else {
    createPopup();
  }

  window.addEventListener('load', createPopup);
})();
