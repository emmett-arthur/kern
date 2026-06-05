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

// contact form
(function () {
  const btn = document.querySelector('.btn-send');
  if (!btn) return;

  btn.addEventListener('click', function () {
    const panel = btn.closest('.c-panel');
    const msg = panel.querySelector('textarea');
    const email = panel.querySelector('input[type="email"]');

    if (!msg.value.trim() || !email.value.trim()) {
      email.style.borderColor = 'rgba(200,50,50,0.45)';
      setTimeout(() => { email.style.borderColor = ''; }, 1500);
      return;
    }

    btn.style.display = 'none';
    msg.disabled = true;
    email.disabled = true;
    document.getElementById('sent-msg').style.display = 'block';
  });
})();
