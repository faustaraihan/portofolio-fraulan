import assert from 'node:assert/strict';

const motion = await import('../src/scripts/motion/shared.ts').catch(() => null);
assert.ok(motion, 'The new motion lifecycle helpers must exist');
const { clampProgress, entryProgress, createAnimationGroup } = motion;
assert.deepEqual([-1, 0, .4, 1, 2, NaN].map(clampProgress), [0, 0, .4, 1, 1, 0]);
assert.equal(entryProgress(1200, 900), 0);
assert.equal(entryProgress(900, 900), 0);
assert.equal(entryProgress(405, 900), 1);
assert.equal(entryProgress(-200, 900), 1);
assert.equal(entryProgress(100, 0), 0);

const group = createAnimationGroup();
let cancelled = 0;
let finish;
const completed = { finished: new Promise(resolve => { finish = resolve; }), cancel() { cancelled++; } };
group.add(completed);
assert.equal(group.size, 1);
finish();
await completed.finished;
await Promise.resolve();
assert.equal(group.size, 0, 'Finished animations must leave the group');
group.cancelAll();
assert.equal(cancelled, 0, 'Finished animation must not be cancelled later');

let reject;
const running = { finished: new Promise((_, fail) => { reject = fail; }), cancel() { cancelled++; reject(new Error('cancelled')); } };
group.add(running);
group.cancelAll();
assert.equal(group.size, 0, 'Pause/reset must synchronously clear active animations');
assert.equal(cancelled, 1);
group.cancelAll();
assert.equal(cancelled, 1, 'Repeated reset must be safe');
await Promise.resolve();
console.log('PASS: progress boundaries, completion cleanup, cancellation and repeated reset.');
