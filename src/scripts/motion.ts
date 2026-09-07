/** Event-driven scene choreography; the unenhanced document is always visible. */
function mountMotion() {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(pointer: fine)');
  const controller = new AbortController();
  const { signal } = controller;
  const scene = document.querySelector<HTMLElement>('.intro-scene');
  const intro = document.querySelector<HTMLElement>('.intro');
  const object = document.querySelector<HTMLElement>('.scene-object');
  const title = document.querySelector<HTMLElement>('.scene-title');
  const toggles = [...document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]')];
  const projects = [...document.querySelectorAll<HTMLElement>('.project-teaser')].map((element, index) => ({
    element, media: element.querySelector<HTMLElement>('.project-media'), direction: index % 2 ? -1 : 1,
  }));
  const capsules = [...document.querySelectorAll<HTMLElement>('.capsule')];
  const ornaments = [...document.querySelectorAll<HTMLElement>('[data-ornament]')];
  const caseCover = document.querySelector<HTMLElement>('.case-cover-frame');
  const animations = new Set<Animation>();
  let paused = false;
  let frame = 0;
  let pointerX = 0;
  let pointerY = 0;
  try { paused = localStorage.getItem('fraulan-motion-paused') === 'true'; } catch { /* Storage is optional. */ }
  const enabled = () => !paused && !reduced.matches;
  const clamp = (value: number) => Math.max(0, Math.min(1, value));

  document.querySelectorAll('[data-reveal]').forEach(element => element.setAttribute('data-visible', 'true'));

  function animate(element: HTMLElement, frames: Keyframe[], delay = 0) {
    if (!enabled() || !element.animate) return;
    const animation = element.animate(frames, { duration: 1100, delay, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
    animations.add(animation);
    void animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
  }

  function reset() {
    cancelAnimationFrame(frame);
    frame = 0;
    animations.forEach(animation => animation.cancel());
    animations.clear();
    for (const element of [object, title, caseCover, ...capsules, ...ornaments, ...projects.map(project => project.media)]) {
      if (!element) continue;
      for (const property of ['translate', 'rotate', 'scale', 'clip-path']) element.style.removeProperty(property);
    }
  }

  function render() {
    frame = 0;
    if (!enabled()) return;
    const height = window.innerHeight;
    if (caseCover) {
      const rect = caseCover.getBoundingClientRect();
      const progress = clamp((height - rect.top) / (height * .6));
      caseCover.style.scale = `${.94 + progress * .06}`;
      caseCover.style.rotate = `${(1 - progress) * -2}deg`;
    }
    for (const [index, ornament] of ornaments.entries()) {
      const rect = ornament.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > height + 100) continue;
      const travel = (height / 2 - rect.top) / height;
      ornament.style.rotate = `${travel * (index % 2 ? -180 : 150)}deg`;
      ornament.style.scale = `${1 + Math.sin(travel * Math.PI) * .12}`;
    }
    if (intro && object && title) {
      const rect = intro.getBoundingClientRect();
      const progress = clamp(-rect.top / Math.max(rect.height, 1));
      if (rect.bottom > 0 && rect.top < height) {
        const distance = Math.min(window.innerWidth * .06, 80);
        object.style.rotate = `${progress * 105 + pointerX * 9}deg`;
        object.style.translate = `${pointerX * 15}px ${progress * -95 + pointerY * 12}px`;
        object.style.scale = `${1 - progress * .15}`;
        capsules.forEach((capsule, index) => {
          const angle = index * Math.PI / 3;
          const spread = progress * (window.innerWidth < 768 ? 30 : 75);
          capsule.style.translate = `${Math.sin(angle) * spread}px ${-Math.cos(angle) * spread}px`;
        });
        title.style.translate = `${progress * -distance}px ${progress * 36}px`;
      }
    }
    for (const { element, media, direction } of projects) {
      if (!media) continue;
      const rect = element.getBoundingClientRect();
      // Finish before the media reaches the reading area, keeping the complete screenshot visible.
      const progress = clamp((height - rect.top) / (height * .65));
      media.style.rotate = `${(1 - progress) * 7 * direction}deg`;
      media.style.scale = `${.86 + progress * .14}`;
      media.style.clipPath = progress === 1 ? 'none' : `inset(${(1 - progress) * 5}% round 18px)`;
    }
  }

  function schedule() {
    if (enabled() && !frame) frame = requestAnimationFrame(render);
  }

  function syncPreference() {
    reset();
    document.documentElement.dataset.motion = enabled() ? 'running' : 'paused';
    for (const toggle of toggles) {
      toggle.hidden = false;
      toggle.setAttribute('aria-pressed', String(!enabled()));
      toggle.disabled = reduced.matches;
      toggle.setAttribute('aria-label', reduced.matches ? 'Motion off — reduced by system preference' : enabled() ? 'Motion on — pause motion' : 'Motion off — enable motion');
      const label = toggle.querySelector('[data-motion-label]');
      if (label) label.textContent = enabled() ? 'Motion on' : 'Motion off';
    }
    schedule();
  }

  for (const toggle of toggles) toggle.addEventListener('click', () => {
    paused = !paused;
    try { localStorage.setItem('fraulan-motion-paused', String(paused)); } catch { /* Storage is optional. */ }
    syncPreference();
  }, { signal });
  reduced.addEventListener('change', syncPreference, { signal });
  window.addEventListener('scroll', schedule, { passive: true, signal });
  window.addEventListener('resize', schedule, { passive: true, signal });
  scene?.addEventListener('pointermove', event => {
    if (!finePointer.matches || !enabled()) return;
    const rect = scene.getBoundingClientRect();
    pointerX = (event.clientX - rect.left) / Math.max(rect.width, 1) - .5;
    pointerY = (event.clientY - rect.top) / Math.max(rect.height, 1) - .5;
    schedule();
  }, { passive: true, signal });
  scene?.addEventListener('pointerleave', () => { pointerX = pointerY = 0; schedule(); }, { signal });

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const target = entry.target as HTMLElement;
      if (target.matches('.project-copy')) {
        [...target.children].forEach((child, index) => animate(child as HTMLElement, [
          { translate: '0 35px', opacity: .25 }, { translate: '0 0', opacity: 1 },
        ], index * 75));
      } else animate(target, [
        { translate: '0 48px', rotate: '-1.2deg' }, { translate: '0 0', rotate: '0deg' },
      ]);
      observer?.unobserve(entry.target);
    }
  }, { threshold: .15 }) : null;
  document.querySelectorAll<HTMLElement>('.project-copy, .statement-grid h2, .footer-signature, .case-intro-grid > div, .case-meta, .case-body h2, .case-next').forEach(element => observer?.observe(element));

  syncPreference();
  document.querySelectorAll<HTMLElement>('.title-line').forEach((line, index) => {
    animate(line, [{ translate: `0 ${65 + index * 15}px`, rotate: '4deg' }, { translate: '0 0', rotate: '0deg' }], index * 130);
  });
  if (object) animate(object, [{ transform: 'rotate(-65deg) scale(.35)' }, { transform: 'rotate(0) scale(1)' }], 160);

  return () => { controller.abort(); observer?.disconnect(); reset(); };
}

let dispose = mountMotion();
window.addEventListener('pagehide', () => dispose());
window.addEventListener('pageshow', event => { if (event.persisted) dispose = mountMotion(); });

export {};
