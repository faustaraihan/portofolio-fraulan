import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, join, extname } from 'node:path';
import { gzipSync } from 'node:zlib';
import { projects } from '../src/data/projects.ts';

function validate(entries) {
  assert.deepEqual(entries.map(p => p.slug), ['codestroke', 'boilrplate', 'karisma-ai', 'moomori']);
  assert.equal(new Set(entries.map(p => p.slug)).size, 4);
  for (const p of entries) {
    assert.ok(p.name && p.summary && p.contribution && p.stack.length);
    assert.equal(p.status, ['boilrplate', 'moomori'].includes(p.slug) ? 'in-progress' : 'project');
    assert.ok(p.coverWidth > 0 && p.coverHeight > 0);
    for (const field of ['caseStudyPath', 'demoUrl', 'repoUrl']) {
      assert.ok(p[field] === null || (typeof p[field] === 'string' && p[field].length > 1 && p[field] !== '#'), `${p.slug}: invalid ${field}`);
    }
    assert.equal(p.caseStudyPath, ['codestroke', 'boilrplate', 'karisma-ai'].includes(p.slug) ? `/work/${p.slug}/` : null);
    if (['boilrplate', 'moomori'].includes(p.slug)) assert.equal(p.demoUrl, null);
    for (const field of ['demoUrl', 'repoUrl']) if (p[field]) assert.equal(new URL(p[field]).protocol, 'https:');
  }
}
validate(projects);
for (const patch of [{ status: 'project' }, { demoUrl: '' }, { demoUrl: '#' }, { caseStudyPath: '/work/moomori/' }]) {
  const invalid = structuredClone(projects);
  Object.assign(invalid[3], patch);
  assert.throws(() => validate(invalid), `invalid fixture must fail: ${JSON.stringify(patch)}`);
}
const dist = resolve('dist');
assert.ok(existsSync(dist), 'Run npm run build before checking output');
const pages = ['index.html', 'work/codestroke/index.html', 'work/boilrplate/index.html', 'work/karisma-ai/index.html', '404.html'];
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*"([^"]*)"/g)].map(m => [m[1], m[2]]));
const titles = new Set();
const descriptions = new Set();
let links = 0, images = 0, inlineJs = 0;
for (const file of pages) {
  const html = readFileSync(join(dist, file), 'utf8');
  assert.match(html, /<html[^>]*lang="en"/);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${file}: one H1`);
  const inlineScripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter(m => !/application\/ld\+json/.test(m[1])).map(m => m[2]).join('\n');
  inlineJs = Math.max(inlineJs, inlineScripts ? gzipSync(inlineScripts).length : 0);
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)].map(m => attrs(m[0])).find(a => a.rel === 'canonical')?.href;
  assert.ok(canonical?.startsWith('https://fraulan.com/'), `${file}: canonical domain`);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title && !titles.has(title), `${file}: unique title`); titles.add(title);
  const description = [...html.matchAll(/<meta\b[^>]*>/g)].map(m => attrs(m[0])).find(a => a.name === 'description')?.content;
  assert.ok(description && !descriptions.has(description), `${file}: unique description`); descriptions.add(description);
  assert.match(html, /Fausta Raihan Maulana/);
  assert.match(html, /<main\b/);
  assert.doesNotMatch(html, /href="#"|href=""|\bTBD\b|Lorem ipsum|placeholder action/i);
  for (const match of html.matchAll(/<(?:a|link|script|img|source)\b[^>]*>/g)) {
    const a = attrs(match[0]);
    if (match[0].startsWith('<img')) {
      images++;
      assert.ok('alt' in a && Number(a.width) > 0 && Number(a.height) > 0, `${file}: image alt/dimensions`);
    }
    const urls = [a.href, a.src, ...(a.srcset ? a.srcset.split(',').map(s => s.trim().split(/\s+/)[0]) : [])].filter(Boolean);
    for (const url of urls) {
      if (/^(?:https?:|mailto:|data:)/.test(url)) continue;
      links++;
      const [pathname, hash] = url.split('#');
      const target = pathname ? (pathname.startsWith('/') ? join(dist, decodeURI(pathname)) : resolve(dist, file, '..', decodeURI(pathname))) : join(dist, file);
      const normalized = existsSync(target) && statSync(target).isDirectory() ? join(target, 'index.html') : target;
      assert.ok(existsSync(normalized), `${file}: broken local URL ${url}`);
      if (hash && normalized.endsWith('.html')) assert.ok(readFileSync(normalized, 'utf8').includes(`id="${hash}"`), `${file}: missing anchor ${url}`);
    }
  }
}
const home = readFileSync(join(dist, 'index.html'), 'utf8');
for (const id of ['work', 'about', 'experience', 'contact']) assert.ok(home.includes(`id="${id}"`));
assert.match(home, /In progress/);
assert.match(home, /mailto:faustaraihan69@gmail\.com/);
assert.ok(!existsSync(join(dist, 'work/moomori/index.html')));
assert.ok(existsSync(join(dist, 'robots.txt')) && existsSync(join(dist, 'sitemap.xml')));
const files = readdirSync(dist, { recursive: true }).filter(f => statSync(join(dist, f)).isFile());
const gzipBytes = extension => files.filter(f => extname(f) === extension).reduce((n, f) => n + gzipSync(readFileSync(join(dist, f))).length, 0);
const js = gzipBytes('.js') + inlineJs, css = gzipBytes('.css');
assert.ok(js <= 50 * 1024, `JS budget: ${js}`);
assert.ok(css <= 35 * 1024, `CSS budget: ${css}`);
assert.ok(!files.some(f => /sources|private|node_modules/.test(f)), 'Private sources must not ship');
console.log(`PASS: 4 projects + invalid fixtures; ${pages.length} static pages; ${links} local links/assets; ${images} image instances. JS ${js} bytes gzip; CSS ${css} bytes gzip.`);


