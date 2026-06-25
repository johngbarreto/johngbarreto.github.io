(function () {
  'use strict';

  var NAV_OFFSET = 80;
  var SECTION_IDS = ['fh5co-about', 'fh5co-resume', 'fh5co-education', 'fh5co-work'];

  function init() {
    var nav = document.querySelector('.site-nav');
    var langSwitch = document.querySelector('.lang-switch.header');
    var links = document.querySelectorAll('.site-nav__link');
    if (!nav || !links.length) return;

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href');
        if (!href || href.charAt(0) !== '#') return;
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY > NAV_OFFSET;
      nav.classList.toggle('is-visible', scrolled);
      if (langSwitch) {
        langSwitch.classList.toggle('is-docked', scrolled);
      }
    }, { passive: true });

    var sections = SECTION_IDS.map(function (id) {
      return document.getElementById(id);
    }).filter(Boolean);

    var ratios = {};

    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          ratios[entry.target.id] = entry.intersectionRatio;
        });
        var bestId = null;
        var bestRatio = 0;
        SECTION_IDS.forEach(function (id) {
          if ((ratios[id] || 0) > bestRatio) {
            bestRatio = ratios[id];
            bestId = id;
          }
        });
        if (!bestId) return;
        links.forEach(function (link) {
          var href = link.getAttribute('href');
          link.classList.toggle('is-active', href === '#' + bestId);
        });
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach(function (section) {
      spy.observe(section);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
