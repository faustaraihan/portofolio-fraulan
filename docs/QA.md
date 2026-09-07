# Verification report

Status: verified locally after the compact desktop Work layout revision, 7 September 2026. The report covers the current working tree and the static preview at `http://127.0.0.1:4321`.

## Required checks

| Area | Check | Result |
| --- | --- | --- |
| Installation | `npm ci --ignore-scripts` from one lockfile; Node v26.5.1 / npm 11.17.0 | PASS |
| Compilation | `npm run check` and `npm run build` | PASS: 0 errors, 0 warnings, 0 hints; 5 static pages |
| Content | Exactly Codestroke, Boilrplate, Karisma AI, Moomori in order; invalid fixtures fail | PASS: `npm run check:content` |
| Routes | Home, three case studies, 404 HTML and direct navigation | PASS: 60 route/viewport navigations |
| Links | No empty actions, valid local assets/anchors, case-study cards stay internal | PASS: 85 local references/assets |
| Metadata | Unique title/description, canonical, OG, sitemap, robots, preview noindex switch, Person JSON-LD | PASS: `PUBLIC_NOINDEX=true npm run build` emits noindex; default build indexable |
| Accessibility | Native navigation, visible focus, no-JS content, reduced motion, CSS zoom 200% | PASS in current browser matrix; native browser zoom was not tested; WebKit keyboard activation remains platform-limited |
| Responsive | 360, 390, 768, 1440px; no horizontal overflow | PASS across Chrome, Firefox, WebKit |
| Browsers | Chrome and Firefox; WebKit if available | PASS: all three available and exercised |
| Performance | JS/CSS/font/image budgets; local production smoke | PASS: 1,676 B JS gzip, 4,679 B CSS gzip; supplied work images load |
| Privacy | Source CV excluded; public CV text excludes phone number | PASS: public CV is redacted and private source is not in `dist/` |

## Existing evidence

- `scripts/check-content.mjs` uses Node built-in assertions and filesystem APIs; it does not add a testing framework.
- All three case-study Markdown documents reviewed against CONTENT: team attribution and scope are accurate; no invented decisions, outcomes, dates, repository URLs, or impact metrics found.
- Tooling: Node v26.5.1 and npm 11.17.0 available. Native Chrome, Edge and Firefox present; cached Playwright Chromium also present.

A passing local build does not establish live DNS, public host routing, field Core Web Vitals, or full product-demo functionality. Publication is a separate step.

## Initial audit findings (before corrections)

- Production build failed at `/work/codestroke/` with `Unknown project: undefined`; Markdown layout must read `Astro.props.frontmatter.project`.
- Global reveal CSS hid content before JavaScript; this must be replaced with progressive, visible-by-default animation.
- OG default referenced SVG despite a prepared PNG; self-hosted font, preview noindex, 44px link targets and no-pointer-follow motion needed correction.
- Public project landings verified in browser: Karisma AI and Codestroke load. HTTP HEAD returned 200 for both. LinkedIn reaches an authentication wall; URL remains supported by CV, profile not independently verified.
- Public CV independent text extraction: two pages, no phone-like text; link annotations point only to the two project sites and LinkedIn. Asset agent separately rendered both pages and checked raw bytes.

These are preliminary observations; final pass/fail is recorded after implementation fixes below.

## Final browser evidence

`sources/qa/browser.mjs` was run against the current preview at `http://127.0.0.1:4321` after the compact desktop Work layout revision. Chrome, Firefox, and WebKit each covered 360, 390, 768, and 1440px across `/`, `/work/codestroke/`, `/work/boilrplate/`, `/work/karisma-ai/`, and `/404.html`: 72 checks completed with no failures, broken images, page errors, undersized targets, no-JS hidden content, or horizontal overflow. Keyboard checks passed in Chrome and Firefox; WebKit's automation leaves focus on its native summary control after the same sequence. CSS zoom 200% retained a 1440px document width.
