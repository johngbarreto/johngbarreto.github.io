(function () {
  'use strict';

  function init() {
    var track = document.querySelector('.timeline-progress');
    var container = document.querySelector('.timeline-track');
    if (!track || !container) return;

    var prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function update() {
      var rect = container.getBoundingClientRect();
      var viewH = window.innerHeight;
      var start = viewH * 0.85;
      var end = viewH * 0.15;
      var total = rect.height + start - end;
      var scrolled = start - rect.top;
      var progress = Math.min(1, Math.max(0, scrolled / total));
      track.style.setProperty('--line-progress', progress);
    }

    if (prefersReduced) {
      track.style.setProperty('--line-progress', 1);
      return;
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
