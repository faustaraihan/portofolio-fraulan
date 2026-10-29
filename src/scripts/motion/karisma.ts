import { createAnimationGroup, type MotionContext, type MotionScene } from './shared';

export function initKarisma(root: HTMLElement, context: MotionContext): MotionScene {
  const visual = root.querySelector<HTMLElement>('[data-karisma-scene]');
  const overview = root.querySelector<HTMLElement>('[data-karisma-evidence="overview"]');
  const detail = root.querySelector<HTMLElement>('[data-karisma-evidence="detail"]');
  const stroke = root.querySelector<SVGPathElement>('[data-karisma-stroke]');
  const owned = createAnimationGroup();
  const mobile = matchMedia('(max-width: 767px)');
  let played = context.restored || !!location.hash || !context.enabled();

  function play(element: Element | null, frames: Keyframe[], options: KeyframeAnimationOptions) {
    if (!element) return;
    const animation = context.play(element, frames, options);
    if (animation) owned.add(animation);
  }

  function enter() {
    if (played) return;
    played = true;
    if (!context.enabled()) return;
    const small = mobile.matches;
    play(overview, [
      { transform: `translateY(${small ? 8 : 12}px) scale(.992)`, opacity: .92 },
      { transform: 'none', opacity: 1 },
    ], { duration: small ? 440 : 560 });
    if (!small) play(stroke, [{ strokeDashoffset: '1' }, { strokeDashoffset: '0' }], {
      duration: 760, delay: 80, easing: 'cubic-bezier(.4,0,.2,1)',
    });
    play(detail, [
      { transform: `translateY(${small ? 8 : 16}px)`, opacity: .9 },
      { transform: 'none', opacity: 1 },
    ], { duration: small ? 440 : 520, delay: small ? 140 : 280 });
  }

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio >= .18) enter();
      else if (!entry.isIntersecting && played) owned.cancelAll();
    }
  }, { threshold: [0, .18] }) : null;
  if (visual) observer?.observe(visual);

  return {
    isActive: () => false,
    update() {},
    reset() { owned.cancelAll(); },
    dispose() { observer?.disconnect(); owned.cancelAll(); },
  };
}
