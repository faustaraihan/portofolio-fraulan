import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { getLocale, localizePath, homeHref, contentPaths } from '../src/i18n/routes.ts';
import { ui } from '../src/i18n/ui.ts';
import { projects, getProject } from '../src/data/projects.ts';

assert.equal(getLocale('/id/work/codestroke/'), 'id');
assert.equal(getLocale('/work/codestroke/'), 'en');
assert.equal(getLocale('id'), 'id');
assert.equal(getLocale('/identity/'), 'en');
assert.equal(getLocale('/idyllic/'), 'en');
assert.equal(localizePath('/work/blastrot/', 'id'), '/id/work/blastrot/');
assert.equal(localizePath('/id/work/blastrot/', 'en'), '/work/blastrot/');
assert.equal(localizePath('/id/', 'id'), '/id/');
assert.equal(localizePath('work/blastrot', 'id'), '/id/work/blastrot/');
assert.equal(localizePath('/id//work/blastrot', 'id'), '/id/work/blastrot/');
assert.equal(localizePath('/work/blastrot/?from=nav#pair-pop', 'id'), '/id/work/blastrot/');
assert.equal(localizePath('/404.html', 'id'), '/id/');
assert.equal(localizePath('/id/work/unknown/', 'id'), '/id/');
assert.equal(localizePath('/work/unknown/', 'en'), '/');
assert.equal(localizePath('/id/id/', 'id'), '/id/');
assert.equal(localizePath('https://example.com/work/blastrot/', 'id'), '/id/');
assert.equal(homeHref('id', 'work'), '/id/#work');
assert.equal(homeHref('en', '#about'), '/#about');
assert.equal(homeHref('id'), '/id/');
assert.equal(homeHref('en', ''), '/');
assert.equal(homeHref('id', 'a b'), '/id/#a%20b');
assert.deepEqual(contentPaths, ['/', ...projects.map(p => p.caseStudyPath)]);
for (const path of contentPaths) {
  const id = localizePath(path, 'id');
  assert.equal(localizePath(id, 'en'), path);
  assert.equal(localizePath(id, 'id'), id);
  assert.equal(getLocale(id), 'id');
}

assert.deepEqual(Object.keys(ui.id).sort(), Object.keys(ui.en).sort());
for (const [locale, dictionary] of Object.entries(ui)) {
  for (const [key, value] of Object.entries(dictionary)) assert.ok(typeof value === 'string' && value.trim(), locale + ':' + key);
}
assert.equal(ui.id.navWork, 'Proyek');
assert.equal(ui.id.downloadCv, 'Unduh CV (Inggris)');
assert.equal(ui.id.heroGreeting, 'Halo, saya Fausta');
assert.equal(ui.id.processHeading, 'Cara saya membangun produk');
assert.equal(ui.id.languageEnglish, 'Read in English');
assert.equal(ui.id.languageIndonesian, 'Baca dalam bahasa Indonesia');

const before = structuredClone(projects);
assert.equal(getProject('unknown', 'id'), undefined);
for (const source of projects) {
  assert.equal(getProject(source.slug), source, 'Existing EN callers retain identity');
  assert.equal(getProject(source.slug, 'en'), source);
  const id = getProject(source.slug, 'id');
  assert.ok(id, source.slug);
  for (const key of ['slug','name','status','stack','cover','caseStudyPath','demoUrl','repoUrl','accent','coverWidth','coverHeight','logo']) assert.deepEqual(id[key], source[key], source.slug + ': preserve ' + key);
  assert.equal(id.home.preview.src, source.home.preview.src);
  assert.deepEqual(id.home.logo, source.home.logo);
  assert.notEqual(id.home.summary, source.home.summary);
  assert.equal(id.study?.overview.src, source.study?.overview.src);
  assert.deepEqual(id.study?.chapters.map(c => c.id), source.study?.chapters.map(c => c.id));
  assert.equal(id.study?.flow?.length, source.study?.flow?.length);
  assert.notEqual(id.study?.description, source.study?.description);
  assert.ok(id.study?.chapters.every(c => c.label.trim()));
  if (source.detail) assert.equal(id.detail?.src, source.detail.src);
}
assert.deepEqual(projects, before, 'Translations do not mutate canonical project records');
assert.match(getProject('blastrot', 'id').study.overview.caption, /ilustratif/);
assert.match(getProject('karisma-ai', 'id').study.context, /enam orang/);
assert.match(getProject('karisma-ai', 'id').study.overview.caption, /ilustratif/);
assert.match(getProject('boilrplate', 'id').study.eyebrow, /Konsep produk/);
assert.equal(getProject('boilrplate', 'id').study.contextLabel, 'Pekerjaan');
assert.equal(getProject('karisma-ai', 'id').study.chapters.find(c => c.id === 'experience').label, 'Alur penggunaan');
console.log('PASS: five locale route pairs, safe fallbacks, complete UI dictionary, localized project copy with original facts/assets.');

if (!process.argv.includes('--source-only')) {
  for (const locale of ['en','id']) {
    const html = readFileSync(locale === 'id' ? 'dist/id/index.html' : 'dist/index.html', 'utf8').replaceAll('&#39;', "'");
    assert.ok(html.includes('lang="' + locale + '"'));
    assert.ok(html.includes(ui[locale].heroGreeting));
    assert.ok(html.includes(ui[locale].processHeading));
    assert.ok(html.includes(ui[locale].downloadCv));
    assert.equal((html.match(/data-reel-tile/g) || []).length, 12);
    assert.equal((html.match(/data-work-card/g) || []).length, 4);
    assert.equal((html.match(/data-process-step/g) || []).length, 3);
    const switchLink = html.match(/<a class="language-switch"[\s\S]*?<\/a>/)?.[0];
    assert.ok(switchLink, 'One native language toggle');
    assert.equal((html.match(/class="language-switch"/g) || []).length, 1);
    assert.match(switchLink, /<svg/);
    assert.ok(switchLink.includes('>' + locale.toUpperCase() + '</span>'));
    assert.ok(switchLink.includes('href="' + (locale === 'en' ? '/id/' : '/') + '"'));
    assert.ok(html.includes('href="/id/"'));
    assert.ok(html.includes('href="/"'));
    const footer = html.match(/<footer[\s\S]*?<\/footer>/)[0];
    assert.ok(footer.includes('href="' + homeHref(locale,'work') + '"'));
    assert.ok(footer.includes('href="' + homeHref(locale,'about') + '"'));
    assert.ok(!html.includes('class="contact-profiles"'));
  }
  console.log('PASS: both Home languages, language controls, original content counts and locale-aware footer links.');
}

if (!process.argv.includes('--source-only')) {
  const sitemap = readFileSync('public/sitemap.xml', 'utf8');
  for (const locale of ['en','id']) {
    for (const path of contentPaths) {
      const localizedPath = localizePath(path, locale);
      const file = localizedPath === '/' ? 'dist/index.html' : 'dist' + localizedPath + 'index.html';
      const html = readFileSync(file, 'utf8');
      assert.ok(html.includes('lang="' + locale + '"'), file);
      assert.ok(html.includes('rel="canonical" href="https://fraulan.com' + localizedPath + '"'), file);
      for (const language of ['en','id','x-default']) {
        const target = localizePath(path, language === 'id' ? 'id' : 'en');
        assert.ok(html.includes('rel="alternate" hreflang="' + language + '" href="https://fraulan.com' + target + '"'), file + ': alternate ' + language);
      }
      assert.ok(sitemap.includes('<loc>https://fraulan.com' + localizedPath + '</loc>'));
      const toggle = html.match(/<a class="language-switch"[\s\S]*?<\/a>/)?.[0];
      assert.ok(toggle?.includes('href="' + localizePath(path,locale === 'en' ? 'id' : 'en') + '"'), file + ': counterpart toggle');
      if (path === '/') {
        for (const project of projects) assert.ok(html.includes('href="' + localizePath(project.caseStudyPath, locale) + '"'));
      } else {
        assert.ok(html.includes('href="' + homeHref(locale,'work') + '"'));
        const project = projects.find(p => p.caseStudyPath === path);
        const index = projects.indexOf(project);
        for (const other of [projects[(index+3)%4],projects[(index+1)%4]]) assert.ok(html.includes('href="' + localizePath(other.caseStudyPath,locale) + '"'));
        const original = readFileSync('src/pages/work/' + project.slug + '.md','utf8');
        const chapterIds = [...original.matchAll(/<section id="([^"]+)"/g)].map(m=>m[1]);
        for (const id of chapterIds) assert.equal((html.match(new RegExp('id="' + id + '"','g')) || []).length,1);
        if (locale === 'id') {
          assert.ok(html.includes('site-footer--sky'));
          assert.ok(html.includes('Proyek sebelumnya'));
          assert.ok(html.includes('Proyek berikutnya'));
          assert.ok(html.includes('Semua proyek'));
          const navigationHtml = html.replace(/<a class="language-switch"[\s\S]*?<\/a>/, '');
          assert.ok(!/href="\/(?:work\/|#(?:work|about|contact))/.test(navigationHtml), file + ': no EN navigation escape except the language switch');
        }
      }
    }
  }
  assert.equal((sitemap.match(/<loc>/g)||[]).length,10);
  assert.ok(!sitemap.includes('404'));
  console.log('PASS: ten localized pages, reciprocal metadata/sitemap, same-project switch and locale-preserving navigation.');
}

if (!process.argv.includes('--source-only')) {
  const errorPage = readFileSync('dist/404.html','utf8');
  assert.match(errorPage, /lang="en"/);
  assert.match(errorPage, /name="robots" content="noindex, nofollow"/);
  assert.ok(errorPage.includes('href="/id/"'));
  assert.ok(!errorPage.includes('rel="alternate"'));
  const cv = readFileSync('public/fausta-raihan-maulana-cv.pdf');
  assert.equal(cv.subarray(0,5).toString(), '%PDF-');
  assert.deepEqual(readFileSync('dist/fausta-raihan-maulana-cv.pdf'),cv);
  for (const file of ['dist/index.html','dist/id/index.html']) assert.ok(readFileSync(file,'utf8').includes('href="/fausta-raihan-maulana-cv.pdf"'));
  console.log('PASS: 404 language fallback/noindex and identical valid CV download in the build.');
}
