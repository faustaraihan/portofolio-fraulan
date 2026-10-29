import { createAnimationGroup, type MotionContext, type MotionScene } from './shared';

export function initBlastrot(root: HTMLElement, context: MotionContext): MotionScene {
  const visual = root.querySelector<HTMLElement>('[data-blast-scene]');
  const mascot = root.querySelector<HTMLElement>('[data-blast-layer="rotling"]');
  const games = root.querySelector<HTMLElement>('[data-blast-layer="games"]');
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
    const small = mobile.matches;
    play(mascot, [
      { transform: `translateY(${small ? 12 : 24}px) rotate(${small ? -1 : -3}deg) scale(.97)`, opacity: .9 },
      { transform: `translateY(${small ? -2 : -5}px) rotate(.5deg) scale(1.005)`, opacity: 1, offset: .7 },
      { transform: 'none', opacity: 1 },
    ], { duration: small ? 560 : 800, easing: 'cubic-bezier(.22,.7,.3,1)' });
    play(games, [
      { transform: `translateY(${small ? 10 : 22}px) rotate(2deg)`, opacity: .85 },
      { transform: 'translateY(-2px) rotate(-.3deg)', opacity: 1, offset: .75 },
      { transform: 'none', opacity: 1 },
    ], { duration: small ? 440 : 660, delay: small ? 100 : 140, easing: 'cubic-bezier(.22,.7,.3,1)' });
  }

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio >= .18) enter();
      else if (!entry.isIntersecting && played) owned.cancelAll();
    }
  }, { threshold: [0, .18] }) : null;
  if (visual) observer?.observe(visual);

  return {
    // Both layers settle once. No scroll/pointer loop keeps artwork moving.
    isActive: () => false,
    update() {},
    reset() { owned.cancelAll(); },
    dispose() { observer?.disconnect(); owned.cancelAll(); },
  };
}
