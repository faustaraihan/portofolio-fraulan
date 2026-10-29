---
layout: ../../layouts/CaseStudyLayout.astro
project: codestroke
---

<section id="problem" class="case-chapter">
<div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">Problem framing</p><h2>Code is a different typing context.</h2></header>
<div class="typing-comparison">
<div class="typing-sample general-sample"><p class="case-eyebrow">General typing</p><pre>the quick brown fox
jumps over the lazy dog</pre><p>Letters + spaces</p></div>
<span class="comparison-sign" aria-hidden="true">≠</span>
<div class="typing-sample code-sample"><p class="case-eyebrow">Codestroke</p><pre>if (count &gt; 0) {
  items.push(value);
}</pre><p>Symbols + indentation + syntax</p></div>
</div>
<p class="case-caption">Framing from the early PRD. Later AI desk research is exploratory—not proof of a typing decline.</p>
</div>
</section>

<section id="decisions" class="case-chapter case-chapter--blue">
<div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">User stories &amp; scope</p><h2>Three stories. One practice loop.</h2><p class="case-caption">Reconstructed from documented behavior for this case study—not historical tickets or interview quotes.</p></header>
<div class="story-map"><p class="story-map-label">The core practice loop</p><div class="story-map-grid">
<article class="story-card story-card--cream"><p class="case-eyebrow">US–01 / Enter</p><h3>Try before<br />sign-up</h3><dl><dt>As a</dt><dd>developer</dd><dt>I want to</dt><dd>try a timed snippet without an account</dd><dt>So I can</dt><dd>judge whether the tool fits my practice</dd></dl><p class="story-outcome">No auth gate</p></article>
<article class="story-card story-card--blue"><p class="case-eyebrow">US–02 / Practise</p><h3>Practise real<br />code</h3><dl><dt>As a</dt><dd>coding student</dd><dt>I want to</dt><dd>type code with immediate error feedback</dd><dt>So I can</dt><dd>notice mistakes while I practise</dd></dl><p class="story-outcome">Timer starts on the first key</p></article>
<article class="story-card story-card--green"><p class="case-eyebrow">US–03 / Review</p><h3>Understand<br />my result</h3><dl><dt>As a</dt><dd>returning learner</dd><dt>I want to</dt><dd>review speed and symbol accuracy</dd><dt>So I can</dt><dd>choose what to practise next</dd></dl><p class="story-outcome">Correct CPM + accuracy</p></article>
</div></div>
<div class="scope-boundary"><h3>Scope boundary · July 2026 frontend MVP</h3><div class="scope-row"><span>In the core</span><ul><li>Guest entry</li><li>Timed code practice</li><li>Results + symbol breakdown</li></ul></div><div class="scope-row scope-row--parked"><span>Parked</span><ul><li>Targeted drills</li><li>Daily challenge</li><li>Live multiplayer</li></ul></div></div>
</div>
</section>

<section id="delivery" class="case-chapter">
<div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">Thinking to delivery</p><h2>A feedback story, specified and shipped.</h2><p class="case-eyebrow chapter-subtitle">User story → Acceptance criteria → UI → Running software</p></header>
<div class="delivery-grid">
<div class="feedback-spec"><div class="feedback-spec-bar"><span>US–04 / Session feedback</span><span class="shipped-label">Shipped</span></div><div class="feedback-spec-body"><h3>Rate the session. Keep the flow.</h3><dl class="feedback-story"><dt>As a</dt><dd>practice completer</dd><dt>I want to</dt><dd>leave a rating and optional comment</dd><dt>So I can</dt><dd>share friction without blocking my next attempt</dd></dl><table class="acceptance-table"><thead><tr><th>Given</th><th>When</th><th>Then</th></tr></thead><tbody><tr><td>First 3 sessions complete</td><td>Results opens</td><td>Show optional survey</td></tr><tr><td>Survey is open</td><td>Not now or Esc</td><td>Close; restore focus</td></tr><tr><td>Feedback was sent</td><td>&lt;14 days or &lt;3 new sessions</td><td>Do not ask again</td></tr></tbody></table><p class="case-caption">Reconstructed from documented requirements; selected scenarios, not the full specification.</p></div></div>
<figure class="feedback-figure"><div class="feedback-image"><p class="case-eyebrow">Results → Session feedback</p><img src="/images/pendev/codestroke-csat.webp" alt="Reconstructed Codestroke session-feedback modal with rating, optional comment, Not now and Send feedback controls" width="832" height="848" loading="lazy" decoding="async" /></div><figcaption class="case-caption">Reconstructed from the shipped component and stylesheet. No feedback submitted.</figcaption></figure>
</div>
<div class="system-delivery"><h3 class="case-eyebrow">System flow / From input to review</h3><ol class="system-flow"><li><span class="study-step" aria-hidden="true">01</span><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/></svg><h4>React UI</h4><code>CsatPanel.tsx</code></li><li><span class="study-step" aria-hidden="true">02</span><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01M12 10v4"/></svg><h4>API proxy</h4><code>/api/submit-csat</code></li><li><span class="study-step" aria-hidden="true">03</span><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg><h4>Validation + storage</h4><p>Edge Function · Postgres</p></li><li><span class="study-step" aria-hidden="true">04</span><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M8 16v2M12 13v5M16 15v3"/></svg><h4>Operator report</h4><code>csat.sql</code></li></ol><ul class="release-receipt"><li>Focus &amp; dismissal checked</li><li>Submission + retry checked</li><li>11 CI checks passed</li></ul><p class="case-caption">Verification recorded in the project release notes; not a new QA run.</p></div>
</div>
</section>

<section id="learning" class="case-learning"><div class="case-reading-wrap"><div class="measurement-panel">
<header><p class="case-eyebrow">Measurement</p><h2>Can people finish—and do they return?</h2></header>
<div class="measurement-claims"><div><p class="case-eyebrow">Implemented</p><p>Practice · Results · Feedback · Event tracking.</p></div><div><p class="case-eyebrow">Not claimed</p><p>Typing improvement or retention uplift.</p></div></div>
<h3 class="case-eyebrow">Event map / Implemented contract</h3><ol class="event-map"><li><span>01</span><h4>View practice</h4><code>practice_viewed</code></li><li><span>02</span><h4>Start a test</h4><code>test_started</code></li><li><span>03</span><h4>Complete it</h4><code>test_completed</code></li><li><span>04</span><h4>Practise again</h4><code>practice_resumed</code></li></ol>
<p class="measurement-note">Completion needs an event: results stay on the same URL.</p><p class="case-caption">Event definitions are implemented. No user-outcome numbers are presented.</p>
</div></div></section>

<section id="next-question" class="case-chapter case-next-question"><div class="case-reading-wrap next-question-grid">
<div><p class="case-eyebrow">What to test</p><h2>Typing mechanics—<br />or code recall?</h2><p>If mechanics dominate → explore drills.<br />If recall dominates → revisit the scope.</p></div>
<div class="research-protocol"><div><p class="case-eyebrow">01 / Copy</p><pre>const max = xs =&gt;
  Math.max(...xs);</pre><p>Observe mechanics &amp; errors.</p></div><div><p class="case-eyebrow">02 / Compose</p><h3>Return the largest number in a list.</h3><p>Observe recall &amp; reasoning.</p></div><p class="case-caption research-status">Proposed study, not completed research.</p></div>
</div></section>
