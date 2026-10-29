export function clampProgress(value: number): number {
  return Number.isNaN(value) ? 0 : Math.max(0, Math.min(1, value));
}

export function entryProgress(top: number, viewportHeight: number): number {
  if (!Number.isFinite(top) || !Number.isFinite(viewportHeight) || viewportHeight <= 0) return 0;
  if (top <= viewportHeight * .45) return 1;
  if (top >= viewportHeight) return 0;
  return clampProgress((viewportHeight - top) / (viewportHeight * .55));
}

type ManagedAnimation = Pick<Animation, 'finished' | 'cancel'>;

export function createAnimationGroup() {
  const active = new Set<ManagedAnimation>();
  return {
    get size() { return active.size; },
    add(animation: ManagedAnimation) {
      active.add(animation);
      void animation.finished.then(() => active.delete(animation), () => active.delete(animation));
    },
    cancelAll() {
      const pending = [...active];
      active.clear();
      for (const animation of pending) animation.cancel();
    },
  };
}

export interface MotionScene {
  isActive(): boolean;
  update(): void;
  reset(): void;
  dispose(): void;
}

export interface MotionContext {
  enabled(): boolean;
  restored: boolean;
  signal: AbortSignal;
  wake(): void;
  play(element: Element, frames: Keyframe[], options?: KeyframeAnimationOptions): Animation | undefined;
}
