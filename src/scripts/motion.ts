import { createAnimationGroup, type MotionScene, type MotionContext } from './motion/shared';
import { initHero } from './motion/hero';
import { initCase } from './motion/case';
import { initCodestroke } from './motion/codestroke';
import { initBlastrot } from './motion/blastrot';
import { initKarisma } from './motion/karisma';

function mountMotion(restored = false) {
  if (document.documentElement.dataset.motion === 'static') return () => {};
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const events = new AbortController();
  const animations = createAnimationGroup();
  const toggles = [...document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]')];
  let paused = false;
  let frame = 0;
  let scenes: MotionScene[] = [];
  try { paused = localStorage.getItem('fraulan-motion-paused') === 'true'; } catch { /* Storage is optional. */ }
  const enabled = () => !paused && !reduced.matches && !document.hidden;

  function render() {
    frame = 0;
    if (!enabled()) return;
    for (const scene of scenes) if (scene.isActive()) scene.update();
  }
  function schedule() {
    if (enabled() && !frame && scenes.some(scene => scene.isActive())) frame = requestAnimationFrame(render);
  }
  function reset() {
    cancelAnimationFrame(frame);
    frame = 0;
    animations.cancelAll();
    scenes.forEach(scene => scene.reset());
  }
  function updateControls() {
    document.documentElement.dataset.motion = enabled() ? 'running' : 'paused';
    for (const toggle of toggles) {
      toggle.hidden = false;
      toggle.disabled = reduced.matches;
      toggle.setAttribute('aria-pressed', String(!enabled()));
      toggle.setAttribute('aria-label', reduced.matches ? 'Motion off — reduced by system preference' : enabled() ? 'Motion on — pause motion' : 'Motion off — enable motion');
      const label = toggle.querySelector('[data-motion-label]');
      if (label) label.textContent = enabled() ? 'Motion on' : 'Motion off';
    }
  }
  function syncPreference() { reset(); updateControls(); schedule(); }
  const context: MotionContext = {
    enabled, restored, signal: events.signal, wake: schedule,
    play(element, frames, options = {}) {
      if (!enabled() || typeof element.animate !== 'function') return;
      const animation = element.animate(frames, { duration: 640, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards', ...options });
      animations.add(animation);
      return animation;
    },
  };
  updateControls();
  const hero = document.querySelector<HTMLElement>('.intro');
  const caseStudy = document.querySelector<HTMLElement>('.case-study');
  const codestroke = document.querySelector<HTMLElement>('#project-codestroke');
  const blastrot = document.querySelector<HTMLElement>('#project-blastrot');
  const karisma = document.querySelector<HTMLElement>('#project-karisma-ai');
  if (hero) scenes.push(initHero(hero, context));
  if (caseStudy) scenes.push(initCase(caseStudy, context));
  if (codestroke) scenes.push(initCodestroke(codestroke, context));
  if (blastrot) scenes.push(initBlastrot(blastrot, context));
  if (karisma) scenes.push(initKarisma(karisma, context));
  for (const toggle of toggles) toggle.addEventListener('click', () => {
    paused = !paused;
    try { localStorage.setItem('fraulan-motion-paused', String(paused)); } catch { /* Storage is optional. */ }
    syncPreference();
  }, { signal: events.signal });
  reduced.addEventListener('change', syncPreference, { signal: events.signal });
  window.addEventListener('scroll', schedule, { passive: true, signal: events.signal });
  window.addEventListener('resize', schedule, { passive: true, signal: events.signal });
  document.addEventListener('visibilitychange', syncPreference, { signal: events.signal });
  void document.fonts.ready.then(() => { if (!events.signal.aborted) schedule(); });
  schedule();
  return () => { events.abort(); reset(); scenes.forEach(scene => scene.dispose()); scenes = []; };
}

const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
let dispose = mountMotion(navigation?.type === 'back_forward');
window.addEventListener('pagehide', () => dispose());
window.addEventListener('pageshow', event => { if (event.persisted) { dispose(); dispose = mountMotion(true); } });
