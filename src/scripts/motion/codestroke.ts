import { createAnimationGroup, type MotionContext, type MotionScene } from './shared';

export function initCodestroke(root: HTMLElement, context: MotionContext): MotionScene {
  const visual = root.querySelector<HTMLElement>('.project-visual');
  const footer = root.querySelector<HTMLElement>('.project-footer');
  const frame = root.querySelector<HTMLElement>('[data-code-frame]');
  const cover = root.querySelector<HTMLElement>('[data-code-cover]');
  const detail = root.querySelector<HTMLElement>('[data-code-detail]');
  const owned = createAnimationGroup();
  const mobile = matchMedia('(max-width: 767px)');
  let played = context.restored || !!location.hash || !context.enabled();

  function play(element: HTMLElement | null, frames: Keyframe[], options: KeyframeAnimationOptions) {
    if (!element) return;
    const animation = context.play(element, frames, options);
    if (animation) owned.add(animation);
  }

  function enter() {
    if (played) return;
    played = true;
    if (!context.enabled()) return;
    play(frame, [{ scale: '.08 1', opacity: .5 }, { scale: '1 1', opacity: 1 }], { duration: mobile.matches ? 320 : 440 });
    play(cover, [
      { translate: `0 ${mobile.matches ? 8 : 18}px`, scale: mobile.matches ? '.995' : '.98', opacity: .9, clipPath: 'inset(0 0 6% 0)' },
      { translate: '0 0', scale: '1', opacity: 1, clipPath: 'inset(0 0 0% 0)' },
    ], { duration: mobile.matches ? 440 : 640, delay: 60 });
    play(detail, [
      { translate: `0 ${mobile.matches ? 8 : 16}px`, scale: '.99', opacity: .8 },
      { translate: '0 0', scale: '1', opacity: 1 },
    ], { duration: mobile.matches ? 380 : 500, delay: mobile.matches ? 120 : 240 });
  }

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    // A fast jump to the reading area takes priority over any entrance.
    if (entries.some(entry => entry.target === footer && entry.isIntersecting)) {
      played = true;
      owned.cancelAll();
      return;
    }
    for (const entry of entries) {
      if (entry.target !== visual) continue;
      if (entry.isIntersecting && entry.intersectionRatio >= .08) enter();
      else if (!entry.isIntersecting && played) owned.cancelAll();
    }
  }, { threshold: [0, .08] }) : null;
  if (visual) observer?.observe(visual);
  if (footer) observer?.observe(footer);

  return {
    // This finite sequence is driven by intersections/WAAPI, not per-frame JS.
    isActive: () => false,
    update() {},
    reset() { owned.cancelAll(); },
    dispose() { observer?.disconnect(); owned.cancelAll(); },
  };
}
