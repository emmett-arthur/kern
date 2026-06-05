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
