;(function () {
  'use strict';

  function goToTop() {
    var btn = document.querySelector('.js-gotop');
    var wrap = document.querySelector('.js-top');
    if (!btn || !wrap) return;

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function () {
      wrap.classList.toggle('active', window.scrollY > 200);
    }, { passive: true });
  }

  function loaderPage() {
    document.documentElement.classList.add('loaded');
  }

  function heroEntrance() {
    var hero = document.querySelector('.hero-content');
    if (hero) {
      requestAnimationFrame(function () {
        hero.classList.add('hero-ready');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    goToTop();
    loaderPage();
    heroEntrance();
  });
})();
