import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { projects } from '../src/data/projects.ts';

for (const project of projects.filter(p => p.caseStudyPath)) {
  const html = readFileSync(`dist/work/${project.slug}/index.html`, 'utf8');
  assert.match(html, /aria-label="Project navigation"/);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
  const index = projects.findIndex(p => p.slug === project.slug);
  for (const adjacent of [projects[(index + 3) % 4], projects[(index + 1) % 4]]) {
    assert.ok(html.includes(`href="${adjacent.caseStudyPath ?? `/#project-${adjacent.slug}`}"`));
    assert.ok(html.includes(`project: ${adjacent.name}"`), `${project.slug}: accessible adjacent project name`);
  }
  if (project.study) {
    for (const chapter of project.study.chapters) {
      assert.ok(html.includes(`href="#${chapter.id}"`));
      assert.equal((html.match(new RegExp(`id="${chapter.id}"`, 'g')) || []).length, 1);
    }
    assert.ok(existsSync(`public${project.study.overview.src}`));
    if (project.slug === 'codestroke') {
    assert.ok(html.includes('Reconstructed from documented behavior'));
    assert.ok(html.includes('not a new QA run'));
    assert.ok(html.includes('No user-outcome numbers are presented'));
    assert.ok(html.includes('Proposed study, not completed research'));
    }
    assert.doesNotMatch(html, /data-motion-toggle|case-orbit|data-reveal/);
  }
}
const blastrot = projects.find(p => p.slug === 'blastrot');
assert.equal(blastrot.caseStudyPath, '/work/blastrot/');
assert.equal(blastrot.status, 'in-progress');
assert.equal(blastrot.demoUrl, null);
const blastrotHtml = readFileSync('dist/work/blastrot/index.html', 'utf8');
for (const chapter of ['experience', 'access', 'daily-mix', 'pair-pop', 'identity', 'scope']) {
  assert.equal((blastrotHtml.match(new RegExp(`id="${chapter}"`, 'g')) || []).length, 1);
}
for (const caption of ['illustrative interface state', 'not a runtime capture', 'not completed research', 'no reduction in doomscrolling is claimed', 'did not rerun the tests']) assert.ok(blastrotHtml.includes(caption), caption);
assert.doesNotMatch(blastrotHtml, /Open live product|data-motion-toggle|data-reveal/);
const karisma = projects.find(p => p.slug === 'karisma-ai');
assert.ok(karisma.study, 'Karisma has pen.dev study metadata');
const karismaHtml = readFileSync('dist/work/karisma-ai/index.html', 'utf8');
for (const chapter of ['problem', 'experience', 'data', 'next-step', 'learning']) assert.equal((karismaHtml.match(new RegExp(`id="${chapter}"`, 'g')) || []).length, 1);
for (const text of ['Six-person capstone team', 'Guidance, not a verdict.', 'not a hiring probability', 'illustrative data and scores', 'The models and application were a team effort.']) assert.ok(karismaHtml.includes(text), text);
const teamCounts = [...karismaHtml.matchAll(/class="team-count">(\d+) members/g)].map(match => Number(match[1]));
assert.deepEqual(teamCounts, [2, 2, 2], 'Three disciplines retain the documented six-person team');
assert.ok(karismaHtml.includes('Including Fausta Raihan Maulana'), 'Personal contribution remains explicit');
assert.doesNotMatch(karismaHtml, /data-karisma-scene|data-motion-toggle|data-reveal|Open live product/);
const boilrplate = projects.find(p => p.slug === 'boilrplate');
assert.ok(boilrplate.study, 'Boilrplate has pen.dev study metadata');
assert.equal(boilrplate.status, 'in-progress');
assert.equal(boilrplate.demoUrl, null);
const boilrplateHtml = readFileSync('dist/work/boilrplate/index.html', 'utf8');
for (const chapter of ['problem', 'focus', 'idea', 'prototype']) assert.equal((boilrplateHtml.match(new RegExp(`id="${chapter}"`, 'g')) || []).length, 1);
for (const text of ['Product concept / planning', 'Keeps its original setup', 'Can choose the update', 'Questions for a prototype', 'Not in the first version:']) assert.ok(boilrplateHtml.includes(text), text);
assert.doesNotMatch(boilrplateHtml, /data-motion-toggle|data-reveal|Open live product|milestone verification|final release claim/);
console.log('PASS: case shells, circular project navigation, chapter destinations, media and evidence captions.');

// Indonesian bodies preserve evidence qualifications and source-code examples.
for (const project of projects) {
  const html = readFileSync('dist/id/work/' + project.slug + '/index.html','utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1);
  const source = readFileSync('src/pages/work/' + project.slug + '.md','utf8');
  const translated = readFileSync('src/pages/id/work/' + project.slug + '.md','utf8');
  for (const code of source.match(/<(?:pre|code)\b[^>]*>[\s\S]*?<\/(?:pre|code)>/g)||[]) assert.ok(translated.includes(code), project.slug + ': code samples remain original');
}
const idCases = Object.fromEntries(projects.map(p => [p.slug,readFileSync('dist/id/work/' + p.slug + '/index.html','utf8')]));
for (const text of ['bukan hasil QA baru','Tidak ada angka hasil pengguna','belum menjadi riset yang selesai dilakukan','11 pemeriksaan CI lolos']) assert.ok(idCases.codestroke.includes(text),text);
for (const text of ['kondisi antarmuka ilustratif','bukan tangkapan aplikasi yang sedang berjalan','tidak menjalankan ulang tes','tidak ada klaim bahwa doomscrolling sudah berkurang']) assert.ok(idCases.blastrot.includes(text),text);
for (const text of ['enam orang','Model dan aplikasinya merupakan hasil kerja tim.','bukan peluang diterima kerja','data dan skor ilustratif','Termasuk Fausta Raihan Maulana']) assert.ok(idCases['karisma-ai'].includes(text),text);
assert.equal((idCases['karisma-ai'].match(/class="team-count">2 anggota/g)||[]).length,3);
for (const text of ['Konsep produk / perencanaan','Tetap memakai setup awal','Bisa memilih versi baru','Pertanyaan untuk prototipe','Belum masuk versi pertama']) assert.ok(idCases.boilrplate.includes(text),text);
console.log('PASS: Indonesian evidence qualifiers, team attribution and unchanged technical examples.');
