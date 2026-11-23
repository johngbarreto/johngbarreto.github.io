(function () {
  var reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var track = document.getElementById('track');
  var viewport = document.getElementById('viewport');
  var panels = Array.prototype.slice.call(document.querySelectorAll('.panel'));
  var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-go]'));
  var progress = document.getElementById('progress');
  var statusNum = document.getElementById('status-num');
  var statusLabel = document.querySelector('.status-label');
  var keys = ['nav.index', 'nav.about', 'nav.experience', 'nav.projects', 'nav.contact'];
  var DURATION = 980;
  var index = 0;
  var animating = false;
  var wheelAcc = 0;
  var drag = null;
  var timer = 0;

  function horizontal() {
    return !reduceMq.matches;
  }

  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function updateUI() {
    buttons.forEach(function (btn) {
      var on = Number(btn.getAttribute('data-go')) === index;
      btn.classList.toggle('is-active', on);
      if (on) btn.setAttribute('aria-current', 'true');
      else btn.removeAttribute('aria-current');
    });
    panels.forEach(function (panel, i) {
      var active = i === index;
      panel.classList.toggle('is-active', active);
      panel.inert = horizontal() && !active;
    });
    if (progress) progress.style.transform = 'scaleX(' + (index + 1) / panels.length + ')';
    if (statusNum) statusNum.textContent = pad(index + 1);
    if (statusLabel && window.siteI18n) {
      var text = window.siteI18n.t(keys[index]);
      if (text) statusLabel.textContent = text;
    }
  }

  function pageStep() {
    var raw = getComputedStyle(track).columnGap;
    var gap = parseFloat(raw);
    if (!gap || gap < 0) gap = 0;
    return viewport.clientWidth + gap;
  }

  function layout() {
    if (!horizontal()) {
      track.style.transition = 'none';
      track.style.transform = 'none';
      return;
    }
    track.style.transition = 'none';
    track.style.transform = 'translate3d(' + (-index * pageStep()) + 'px,0,0)';
  }

  function go(next, opts) {
    var immediate = !!(opts && opts.immediate);
    var force = !!(opts && opts.force);
    var target = Math.max(0, Math.min(panels.length - 1, next));

    if (!horizontal()) {
      index = target;
      updateUI();
      panels[target].scrollIntoView({
        behavior: reduceMq.matches || immediate ? 'auto' : 'smooth',
        block: 'start'
      });
      return;
    }

    if (target === index && !force) return;
    if (animating && !immediate && !force) return;

    index = target;
    var animate = !immediate && !reduceMq.matches;
    animating = animate;
    track.style.transition = animate
      ? 'transform ' + DURATION + 'ms cubic-bezier(0.77, 0, 0.18, 1)'
      : 'none';
    track.style.transform = 'translate3d(' + (-index * pageStep()) + 'px,0,0)';
    updateUI();
    window.clearTimeout(timer);
    if (animate) {
      timer = window.setTimeout(function () {
        animating = false;
        wheelAcc = 0;
      }, DURATION + 40);
    } else {
      animating = false;
    }
  }

  function onWheel(e) {
    if (!horizontal()) return;
    if (e.ctrlKey) return;
    e.preventDefault();
    if (animating) return;
    var delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    wheelAcc += delta;
    if (Math.abs(wheelAcc) < 36) return;
    var dir = wheelAcc > 0 ? 1 : -1;
    wheelAcc = 0;
    go(index + dir);
  }

  viewport.addEventListener('pointerdown', function (e) {
    if (!horizontal() || e.button !== 0) return;
    if (e.target.closest('a, button')) return;
    drag = { x: e.clientX, y: e.clientY, pointerId: e.pointerId, axis: null, dx: 0 };
  });

  viewport.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.pointerId) return;
    var dx = e.clientX - drag.x;
    var dy = e.clientY - drag.y;
    if (!drag.axis) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      drag.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      if (drag.axis !== 'x') return;
      if (viewport.setPointerCapture) viewport.setPointerCapture(e.pointerId);
    }
    if (drag.axis !== 'x') return;
    drag.dx = dx;
    viewport.classList.add('is-dragging');
    track.style.transition = 'none';
    track.style.transform = 'translate3d(' + (-index * pageStep() + dx) + 'px,0,0)';
  });

  function endDrag(e) {
    if (!drag || e.pointerId !== drag.pointerId) return;
    var dx = drag.dx || 0;
    var dy = e.clientY - drag.y;
    var axis = drag.axis;
    drag = null;
    viewport.classList.remove('is-dragging');
    if (axis === 'x') {
      var threshold = Math.min(120, viewport.clientWidth * 0.18);
      if (dx < -threshold) go(index + 1, { force: true });
      else if (dx > threshold) go(index - 1, { force: true });
      else go(index, { force: true });
      return;
    }
    if (axis !== 'y') return;
    var panel = panels[index];
    if (panel.scrollHeight > panel.clientHeight + 4) return;
    if (dy < -56) go(index + 1, { force: true });
    else if (dy > 56) go(index - 1, { force: true });
  }

  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);

  window.addEventListener('wheel', onWheel, { passive: false });

  window.addEventListener('keydown', function (e) {
    if (!horizontal()) return;
    if (e.altKey || e.metaKey || e.ctrlKey) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      go(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      go(panels.length - 1);
    }
  });

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-go]');
    if (!el) return;
    var n = Number(el.getAttribute('data-go'));
    if (Number.isNaN(n)) return;
    e.preventDefault();
    go(n, { force: true });
  });

  var observer = new IntersectionObserver(function (entries) {
    if (horizontal()) return;
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var i = panels.indexOf(entry.target);
      if (i < 0 || i === index) return;
      index = i;
      updateUI();
    });
  }, { threshold: 0.55 });

  panels.forEach(function (panel) { observer.observe(panel); });

  function onModeChange() {
    layout();
    updateUI();
  }

  if (reduceMq.addEventListener) reduceMq.addEventListener('change', onModeChange);
  window.addEventListener('resize', layout);
  document.addEventListener('site-lang', updateUI);

  var hash = location.hash.replace('#', '');
  var start = panels.findIndex(function (panel) { return panel.id === hash; });
  index = start >= 0 ? start : 0;
  updateUI();
  layout();
  if (!horizontal() && index > 0) {
    panels[index].scrollIntoView({ behavior: 'auto', block: 'start' });
  }
})();
