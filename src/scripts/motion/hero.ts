import { clampProgress, entryProgress, type MotionContext, type MotionScene } from './shared';

export function initHero(root: HTMLElement, context: MotionContext): MotionScene {
  const titleLayer = root.querySelector<HTMLElement>('.hero-title-layer');
  const lines = [...root.querySelectorAll<HTMLElement>('.title-line')];
  const preview = document.querySelector<HTMLElement>('[data-hero-preview]');
  const previewBounds = preview?.closest<HTMLElement>('.project-visual');
  const links = [...root.querySelectorAll<HTMLAnchorElement>('.scene-caption a')];
  const projects = links.map(link => document.getElementById(link.hash.slice(1))).filter((item): item is HTMLElement => !!item);
  const visibleProjects = new Set<Element>();
  const smallScreen = matchMedia('(max-width: 767px)');
  let heroVisible = true;
  let previewVisible = true;

  function markCurrent(id: string) {
    for (const link of links) {
      if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }

  function syncHash() {
    const match = links.find(link => link.hash === location.hash);
    if (match) markCurrent(match.hash.slice(1));
  }

  for (const link of links) link.addEventListener('click', () => markCurrent(link.hash.slice(1)), { signal: context.signal });
  window.addEventListener('hashchange', syncHash, { signal: context.signal });
  syncHash();

  const indexObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) visibleProjects.add(entry.target);
      else visibleProjects.delete(entry.target);
    }
    const current = projects.find(project => visibleProjects.has(project));
    if (current) markCurrent(current.id);
  }, { rootMargin: '-15% 0px -50% 0px', threshold: 0 }) : null;
  projects.forEach(project => indexObserver?.observe(project));

  const visibilityObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.target === root) {
        heroVisible = entry.isIntersecting;
        if (!heroVisible) lines.forEach(line => line.getAnimations().forEach(animation => animation.cancel()));
      }
      else {
        previewVisible = entry.isIntersecting;
      }
    }
    context.wake();
  }, { rootMargin: '80px 0px', threshold: 0 }) : null;
  visibilityObserver?.observe(root);
  if (previewBounds) visibilityObserver?.observe(previewBounds);

  if (context.enabled() && !context.restored && !location.hash && scrollY < 32) {
    lines.forEach((line, index) => context.play(line, [
      { translate: `0 ${smallScreen.matches ? 12 : 18}px`, opacity: .8 },
      { translate: '0 0', opacity: 1 },
    ], { duration: smallScreen.matches ? 520 : 640, delay: index * 90 }));
  }

  function reset() {
    titleLayer?.style.removeProperty('translate');
    preview?.style.removeProperty('translate');
    preview?.style.removeProperty('scale');
  }

  return {
    isActive: () => heroVisible || previewVisible,
    update() {
      if (!context.enabled()) return;
      // Read stable parent geometry before writing to separate motion wrappers.
      const introRect = heroVisible ? root.getBoundingClientRect() : null;
      const mediaRect = previewVisible ? previewBounds?.getBoundingClientRect() : null;
      const viewport = window.innerHeight;
      if (smallScreen.matches) reset();
      else {
        if (introRect && titleLayer) titleLayer.style.translate = `0 ${-14 * clampProgress(-introRect.top / Math.max(1, introRect.height))}px`;
        if (mediaRect && preview) {
          const progress = entryProgress(mediaRect.top, viewport);
          preview.style.translate = `0 ${(1 - progress) * 16}px`;
          preview.style.scale = `${.98 + progress * .02}`;
        }
      }
    },
    reset,
    dispose() { visibilityObserver?.disconnect(); indexObserver?.disconnect(); reset(); },
  };
}
