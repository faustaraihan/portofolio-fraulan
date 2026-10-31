import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { projects, getProject } from '../src/data/projects.ts';
import { localizePath } from '../src/i18n/routes.ts';
import { ui } from '../src/i18n/ui.ts';

for (const locale of ['en','id']) {
  const html = readFileSync(locale === 'id' ? 'dist/id/index.html' : 'dist/index.html','utf8');
  const text = html.replace(/<[^>]+>/g, ' ').replaceAll('&#39;', "'").replaceAll('&amp;', '&').replace(/\s+/g, ' ');
  const sections = ['home-hero','product-reel','product-mindset','work','about','contact'];
  const positions = sections.map(id => html.indexOf('id="' + id + '"'));
  assert.ok(positions.every(position => position >= 0), locale + ': all sections');
  assert.ok(positions.every((position,index) => !index || position > positions[index-1]), locale + ': design section order');
  assert.equal((html.match(/data-reel-tile/g)||[]).length,12);
  assert.equal((html.match(/data-work-card/g)||[]).length,4);
  assert.equal((html.match(/data-process-step/g)||[]).length,3);
  for (const key of ['heroGreeting','heroRole','fullName','processHeading','mindsetHeading','downloadCv']) assert.ok(text.includes(ui[locale][key]), locale + ':' + key);
  assert.ok(text.includes(locale === 'id' ? 'Tim enam orang' : 'Six-person team'));
  assert.ok(text.includes(locale === 'id' ? 'Pratinjau desain Pen asli' : 'Original Pen design previews'));
  assert.ok(text.includes(locale === 'id' ? 'Konsep produk' : 'Product concepts'));
  assert.doesNotMatch(html,/data-hero-preview|data-code-cover|data-karisma-scene|data-blastrot-scene/);
  for (const original of projects) {
    const project = getProject(original.slug,locale);
    assert.ok(project.home.summary && project.home.caption && project.home.category && project.home.label);
    assert.ok(project.home.preview.width > 0 && project.home.preview.height > 0);
    assert.ok(html.includes('id="project-' + project.slug + '"'));
    assert.ok(text.includes(project.home.summary),locale + ': project summary');
    assert.ok(text.includes(project.home.caption),locale + ': evidence caption');
    if (project.caseStudyPath) assert.ok(html.includes('href="' + localizePath(project.caseStudyPath,locale) + '"'));
  }
}
console.log('PASS: both Home section orders, 12 previews, 4 projects, 3 process steps, localized evidence and native destinations.');
