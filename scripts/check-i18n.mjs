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
