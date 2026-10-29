import { entryProgress, type MotionContext, type MotionScene } from './shared';

/** Preserve the existing detail-page enhancement until its dedicated redesign stage. */
export function initCase(root: HTMLElement, context: MotionContext): MotionScene {
  const cover = root.querySelector<HTMLElement>('.case-cover-frame');
  const bounds = cover?.parentElement;
  let visible = true;
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.target === bounds) { visible = entry.isIntersecting; context.wake(); continue; }
      if (!entry.isIntersecting) continue;
      if (context.enabled() && !context.restored) context.play(entry.target as HTMLElement, [
        { translate: '0 16px', opacity: .85 }, { translate: '0 0', opacity: 1 },
      ], { duration: 640 });
      observer?.unobserve(entry.target);
    }
  }, { threshold: 0, rootMargin: '60px 0px' }) : null;
  if (bounds) observer?.observe(bounds);
  root.querySelectorAll<HTMLElement>('.case-intro-grid > div, .case-meta, .case-body h2, .case-next').forEach(element => observer?.observe(element));
  function reset() { cover?.style.removeProperty('scale'); cover?.style.removeProperty('rotate'); }
  return {
    isActive: () => visible,
    update() {
      if (!context.enabled() || !visible || !cover || !bounds) return;
      const progress = entryProgress(bounds.getBoundingClientRect().top, innerHeight);
      cover.style.scale = `${.94 + progress * .06}`;
      cover.style.rotate = `${(1 - progress) * -2}deg`;
    },
    reset,
    dispose() { observer?.disconnect(); reset(); },
  };
}
