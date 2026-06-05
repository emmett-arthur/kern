// copy email to clipboard
(function () {
  const btn = document.getElementById('copy-email');
  if (!btn) return;
  const status = document.getElementById('copy-status');
  const EMAIL = 'e.welsharthur@gmail.com';
  const checkIcon = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polyline points="2,7 6,11 12,3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const copyIcon = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="4.5" y="4.5" width="8" height="8" rx="1" stroke="currentColor" stroke-width="1.2"/><path d="M2.5 9.5H2A1 1 0 0 1 1 8.5V2A1 1 0 0 1 2 1H8.5A1 1 0 0 1 9.5 2V2.5" stroke="currentColor" stroke-width="1.2"/></svg>';

  function announce(msg) { if (status) status.textContent = msg; }

  function showCopied() {
    btn.classList.add('copied');
    btn.innerHTML = checkIcon;
    announce('Email address copied to clipboard');
    setTimeout(function () {
      btn.classList.remove('copied');
      btn.innerHTML = copyIcon;
      announce('');
    }, 2000);
  }

  btn.addEventListener('click', function () {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(showCopied).catch(function () {
        announce('Could not copy — email is ' + EMAIL);
      });
    } else {
      announce('Copy not supported — email is ' + EMAIL);
    }
  });
})();

// nav crossfade on scroll past hero
(function () {
  const nav = document.querySelector('.nav-outer');
  const hero = document.querySelector('.hero-outer');
  function update() {
    nav.classList.toggle('scrolled', hero.getBoundingClientRect().bottom <= 54);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
