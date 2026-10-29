import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { projects } from '../src/data/projects.ts';

const html = readFileSync('dist/index.html', 'utf8');
const sections = ['home-hero', 'product-reel', 'product-mindset', 'work', 'about', 'contact'];
const positions = sections.map(id => html.indexOf(`id="${id}"`));
assert.ok(positions.every(position => position >= 0), 'Home contains all six design sections');
assert.ok(positions.every((position, index) => !index || position > positions[index - 1]), 'Home sections follow pen.dev order');
assert.equal((html.match(/data-reel-tile/g) || []).length, 12, 'Twelve original product previews');
assert.equal((html.match(/data-work-card/g) || []).length, 4, 'Four selected-work cards');
assert.equal((html.match(/data-process-step/g) || []).length, 3, 'Understand, Build, Improve');
assert.match(html, /Hi I.m Fausta/);
assert.match(html, /Product Engineer/);
assert.match(html, /Fausta Raihan Maulana/);
assert.match(html, /Six-person team/);
assert.match(html, /Original Pen design previews/);
assert.match(html, /Product concepts/);
assert.doesNotMatch(html, /data-hero-preview|data-code-cover|data-karisma-scene|data-blastrot-scene/);
for (const project of projects) {
  assert.ok(project.home.summary && project.home.caption && project.home.category && project.home.label);
  assert.ok(project.home.preview.width > 0 && project.home.preview.height > 0);
  assert.ok(html.includes(`id="project-${project.slug}"`));
  if (project.caseStudyPath) assert.ok(html.includes(`href="${project.caseStudyPath}"`));
}
console.log('PASS: Home section order, 12 previews, 4 projects, 3 process steps, labels and native destinations.');
