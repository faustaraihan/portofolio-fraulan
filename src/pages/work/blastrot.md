---
layout: ../../layouts/CaseStudyLayout.astro
project: blastrot
---

<section id="experience" class="case-chapter"><div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">The problem</p><h2>A short break kept turning into a feed.</h2></header>
<div class="break-journey"><div class="break-journey-row"><p class="case-eyebrow">The habit</p><ol><li>Working on laptop</li><li>Need a break</li><li>Reach for phone</li><li>Scroll without an endpoint</li></ol></div><div class="break-journey-row break-journey-row--green"><p class="case-eyebrow">The product bet</p><ol><li>Stay on the laptop</li><li>Open Blastrot</li><li>Finish or pause a game</li><li>Choose to return to work</li></ol></div></div>
<blockquote class="break-job"><p class="case-eyebrow">Job to be done / Founder context</p><p>When I pause work on my laptop, I want a playful break in the same browser, so I can step away from the task without opening a phone feed.</p></blockquote>
<div class="break-policies">
<article><img class="break-policy-visual" src="/images/pendev/blastrot-time-policy.webp" alt="Timer counts up rather than counting down" width="755" height="176" loading="lazy" /><h3>No countdown pressure</h3><p>Track active play time. Don’t make it a deadline.</p></article>
<article><img class="break-policy-visual" src="/images/pendev/blastrot-choice-policy.webp" alt="Original Word Scramble, Quick Sum and Mini Sudoku artwork" width="755" height="176" loading="lazy" /><h3>Choice, not a forced path</h3><p>Daily Mix gives direction; free play stays available.</p></article>
<article><img class="break-policy-visual" src="/images/pendev/blastrot-rest-policy.webp" alt="Illustrative week with three nonconsecutive play dates and four rest days" width="795" height="176" loading="lazy" /><h3>No streak debt</h3><p>Count distinct play dates. Rest days don’t erase progress.</p></article>
</div>
</div></section>

<section id="access" class="case-chapter blast-chapter--blue"><div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">Product choices</p><h2>From the break problem to a buildable scope.</h2></header>
<p class="blast-evidence-tag">Case-study synthesis / Founder context + documented design</p>
<table class="blast-table"><thead><tr><th scope="col">User need</th><th scope="col">Product choice</th><th scope="col">Trade-off to check</th></tr></thead><tbody>
<tr><th scope="row">Don’t reach for a phone.</th><td>Browser-first entry.</td><td>An account gate still adds a step before first play.</td></tr>
<tr><th scope="row">Don’t browse endlessly.</th><td>Daily suggestions + free choice.</td><td>A full mix may be too much. One game must remain a valid break.</td></tr>
<tr><th scope="row">Know when to stop.</th><td>Finite sessions, pause and no streak debt.</td><td>More sessions and longer visits are not automatically success.</td></tr>
</tbody></table>
<div class="break-scope"><div><h3 class="case-eyebrow">Core user story / Restated from founder context</h3><dl class="break-story"><dt>As a</dt><dd>someone taking a break from laptop work</dd><dt>I want to</dt><dd>open a game in the browser I’m already using</dd><dt>So I can</dt><dd>take a break without opening a phone feed</dd></dl></div><div><h3 class="case-eyebrow">Smallest end-to-end slice</h3><p>Choose → Play → Pause / Leave → Result</p><p class="case-caption">Acceptance rules and implementation boundaries are made concrete in the Pair Pop slice below.</p></div></div>
</div></section>

<section id="daily-mix" class="case-chapter"><div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">Daily Mix</p><h2>Make choosing easy—not stopping hard.</h2></header>
<div class="daily-spec">
<dl class="daily-rules"><div><dt>Lineup</dt><dd>3 distinct games</dd></div><div><dt>Difficulty</dt><dd>Full Medium sessions</dd></div><div><dt>Entry</dt><dd>No level chooser</dd></div></dl>
<div class="daily-states">
<figure><h3>0 / 3 · START</h3><img src="/images/pendev/blastrot-daily-start.webp" alt="Daily Mix design in its initial state with Start Daily Mix action and three unfilled slots" width="723" height="184" loading="lazy" /><figcaption>A new member sees a clear start.</figcaption></figure>
<figure><h3>1 / 3 · CONTINUE</h3><img src="/images/pendev/blastrot-daily-continue.webp" alt="Daily Mix design with one completed slot and Continue Daily Mix action" width="723" height="184" loading="lazy" /><figcaption>The next action follows saved slots.</figcaption></figure>
<figure><h3>3 / 3 · COMPLETE</h3><img src="/images/pendev/blastrot-daily-complete.webp" alt="Daily Mix design with all three slots complete and optional free play" width="723" height="184" loading="lazy" /><figcaption>The set ends; free play stays optional.</figcaption></figure>
</div>
<div class="daily-shared"><p class="case-eyebrow">One Medium configuration</p><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v8M5 20v-5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5M12 20v-8"/></svg><p>Free play + Daily Mix</p></div>
<p class="daily-session-rule">One completed board is not one completed session. Daily slots advance after the full game.</p>
</div>
<p class="break-option"><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4c5-4 9 4 14 0v10c-5 4-9-4-14 0"/></svg>One game is a valid break. Daily Mix is an option—not an obligation.</p>
</div></section>

<section id="pair-pop" class="case-chapter blast-chapter--cream"><div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">Interaction design</p><h2>A pause is a state. Not just a button.</h2></header>
<div class="pair-pop-layout">
<figure><img class="pair-pop-preview" src="/images/pendev/blastrot-pair-pop.webp" alt="Pair Pop connected-lawn Playroom design with a card grid, elapsed time, moves and pause control" width="1200" height="750" loading="lazy" /><figcaption class="case-caption">Current connected-lawn Playroom from the Blastrot Pen document. Example design state—not a runtime capture.</figcaption></figure>
<div class="pair-state-flow"><h3 class="case-eyebrow">Turn logic / Simplified state view</h3><ol class="pair-turn"><li>Choose first card</li><li>Choose second card · +1 move</li></ol><div class="pair-outcomes"><div><h4>Match</h4><p>Keep the pair open.</p></div><div><h4>Mismatch</h4><p>Reveal 900 ms.<br />Block a third input.</p></div></div><p class="pair-loop">Next turn, until the board is complete.</p><div class="pair-pause"><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="4" width="4" height="16" rx="1"/><rect x="15" y="4" width="4" height="16" rx="1"/></svg><div><h4>Freeze time + remaining reveal</h4><p>Resume is explicit. Pause reasons stay independent.</p></div></div><dl class="pair-exits"><div><dt>More boards</dt><dd>Continue explicitly</dd></div><div><dt>Final board</dt><dd>Emit one result</dd></div></dl></div>
</div>
<div class="pair-acceptance"><h3 class="case-eyebrow">Selected acceptance examples</h3><dl class="pair-probes"><div><dt>&lt;900 ms</dt><dd>Input still locked</dd></div><div><dt>900 ms</dt><dd>Input resumes</dd></div><div><dt>Pause</dt><dd>Reveal remainder kept</dd></div><div><dt>Replay</dt><dd>Stale inputs ignored</dd></div></dl><p class="case-caption">Domain contracts and test records exist. This case-study pass did not rerun the tests or verify browser play.</p></div>
</div></section>

<section id="identity" class="case-chapter"><div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">The game library</p><h2>Different kinds of play. One place to take a break.</h2></header>
<div class="blast-library">
<div class="library-controls-preview" tabindex="0" role="region" aria-label="Game-library search and category design preview; scroll horizontally on small screens"><img src="/images/pendev/blastrot-library-controls.webp" alt="Original library search field and category tabs: All games, Memory, Focus, Numbers, Logic, Spatial and Words; static design preview" width="2400" height="334" loading="lazy" /></div>
<div class="blast-library-cards">
<img src="/images/pendev/blastrot-word-scramble.webp" alt="Word Scramble original catalogue card: Words game design preview" width="570" height="764" loading="lazy" />
<img src="/images/pendev/blastrot-quick-sum.webp" alt="Quick Sum original catalogue card: Numbers game design preview" width="570" height="764" loading="lazy" />
<img src="/images/pendev/blastrot-mini-sudoku.webp" alt="Mini Sudoku original catalogue card: Logic game design preview" width="570" height="764" loading="lazy" />
<img src="/images/pendev/blastrot-rotate-match.webp" alt="Rotate Match original catalogue card: Spatial game design preview" width="570" height="764" loading="lazy" />
</div></div>
<div class="library-principle"><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="4" height="16" rx="1"/><rect x="10" y="4" width="4" height="16" rx="1"/><path d="m17 5 3-1 3 15-3 1z"/></svg><div><h3>Guided when needed. Open when preferred.</h3><p>Daily Mix suggests a set; search and categories keep the wider catalogue available.</p></div></div>
<p class="case-caption">Catalogue component preview · four selected games from the full design catalogue. Controls and cards come from the same Pen UI.</p>
</div></section>

<section id="scope" class="case-chapter blast-chapter--blue"><div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">Measurement &amp; review</p><h2>A useful break—not just a longer visit.</h2></header>
<table class="blast-table blast-measurement"><thead><tr><th scope="col">Question</th><th scope="col">Evidence to collect</th><th scope="col">Decision it informs</th></tr></thead><tbody>
<tr><th scope="row">Can people choose and start?</th><td>Observed first-use task + start/completion events.</td><td>Simplify entry or the set of choices.</td></tr>
<tr><th scope="row">Can they stop and return to work?</th><td>Observe stopping; ask a short, optional follow-up.</td><td>Adjust session boundaries and result actions.</td></tr>
<tr><th scope="row">Did it replace reaching for the phone?</th><td>Voluntary diary or interview—not browser events alone.</td><td>Keep or rethink the problem–solution fit.</td></tr>
</tbody></table>
<div class="blast-review"><h3 class="case-eyebrow">Review backlog / Open in the current Pen audit</h3><div class="blast-review-grid"><article><p class="case-eyebrow">P0 / Open</p><h4>Make progress visible.</h4><p>Use a visible mobile track and labelled slots.</p></article><article><p class="case-eyebrow">P1 / Open</p><h4>Recent is not “favourite”.</h4><p>Only claim preference when the data supports it.</p></article></div></div>
<p class="case-caption">Measurement is proposed, not completed research. Review findings come from the current design audit; no reduction in doomscrolling is claimed.</p>
</div></section>
