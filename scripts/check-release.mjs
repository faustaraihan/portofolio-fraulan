import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync,readdirSync} from 'node:fs';
import {projects} from '../src/data/projects.ts';
const decoder=new TextDecoder('utf-8',{fatal:true});
for(const file of readdirSync('src',{recursive:true})) if(statSync('src/'+file).isFile()) assert.doesNotThrow(()=>decoder.decode(readFileSync('src/'+file)), `${file}: source must be UTF-8`);
const preview=process.argv.includes('--preview');
const routes=['/',...projects.map(p=>p.caseStudyPath),'/404.html'];
for(const route of routes){
 const path=route==='/'?'dist/index.html':route.endsWith('.html')?`dist${route}`:`dist${route}index.html`;
 const html=readFileSync(path,'utf8');
 assert.equal(/name="robots" content="noindex, nofollow"/.test(html),preview||route==='/404.html',`${route}: robots policy`);
 assert.ok(html.includes(`rel="canonical" href="https://fraulan.com${route}"`));
 for(const property of ['og:title','og:description','og:url','og:image','og:image:alt'])assert.ok(html.includes(`property="${property}"`));
 const scripts=[...html.matchAll(/<script\b([^>]*)>/g)];
 assert.ok(scripts.every(m=>m[1].includes('application/ld+json')),`${route}: obsolete runtime is absent`);
 assert.doesNotMatch(html,/data-motion-toggle|data-reveal|data-hero-preview|data-code-cover|data-karisma-scene|data-blastrot-scene/);
 const structured=JSON.parse(html.match(/<script[^>]*application\/ld\+json[^>]*>(.*?)<\/script>/s)[1]);
 assert.equal(structured.name,'Fausta Raihan Maulana'); assert.equal(structured.sameAs.length,3);
}
const og=readFileSync('public/og/fraulan.png');assert.equal(og.readUInt32BE(16),1200);assert.equal(og.readUInt32BE(20),630);
const fontBytes=['dm-sans.woff2','instrument-serif-italic-latin.woff2'].reduce((n,f)=>n+statSync('public/fonts/'+f).size,0);assert.ok(fontBytes<=100*1024);
console.log(`PASS: ${routes.length} pages; canonical/OG/robots, three social profiles, no legacy runtime; fonts ${fontBytes} bytes.`);
