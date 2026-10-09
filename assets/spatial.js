/* Depth is optional; navigation works independently of motion preferences. */
(() => {
  const header = document.querySelector('body > nav, body > header');
  const links = header?.querySelector('.nav-links');
  if (links) {
    links.id = 'site-navigation';
    const toggle = document.createElement('button');
    toggle.className = 'menu-toggle';
    toggle.type = 'button';
    toggle.textContent = 'Menu';
    toggle.setAttribute('aria-controls', links.id);
    toggle.setAttribute('aria-expanded', 'false');
    const close = () => {
      links.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
    };
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    links.parentElement.append(toggle);
    links.addEventListener('click', e => { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && links.classList.contains('menu-open')) { close(); toggle.focus(); }
    });
    document.addEventListener('click', e => { if (!header.contains(e.target)) close(); });
    window.matchMedia('(max-width: 1100px)').addEventListener('change', close);
  }
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  document.querySelectorAll('[data-spatial-tilt]').forEach(panel => {
    panel.addEventListener('pointermove', e => {
      if (motion.matches || !finePointer.matches) return;
      const rect = panel.getBoundingClientRect();
      panel.style.setProperty('--tilt-x', `${(0.5 - (e.clientY - rect.top) / rect.height) * 3}deg`);
      panel.style.setProperty('--tilt-y', `${((e.clientX - rect.left) / rect.width - 0.5) * 3}deg`);
    });
    panel.addEventListener('pointerleave', () => {
      panel.style.removeProperty('--tilt-x');
      panel.style.removeProperty('--tilt-y');
    });
  });
})();
