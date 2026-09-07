# fraulan.com

Static personal portfolio for **Fausta Raihan Maulana**. Canonical project folder: `D:/BIG PROJECT/portofolio-fraulan`. Not deployed.

## Run locally

Use Node 22.12 or newer (verified with Node 26.5.1).

```sh
npm ci
npm run dev
```

## Verify and build

```sh
npm run check
npm run build
npm run check:content
npm run preview
```

Astro static output, TypeScript, native CSS and Web Animations. No backend/database. Four featured projects in the order Codestroke, Boilrplate, Karisma AI, Moomori; three local case-study routes; Boilrplate and Moomori remain in progress.

## Design and content contract

Read [AGENTS.md](AGENTS.md), [PRD](docs/PRD.md), [DESIGN](docs/DESIGN.md), and [CONTENT](docs/CONTENT.md). [REFERENCE](docs/REFERENCE.md) records research, not a cloning specification. [QA](docs/QA.md) records actual verification and limitations.

Current direction: white space, black/white typography, expressive Syne display lettering, DM Sans body text, an original colored capsule sculpture, coordinated scroll/pointer animation, broad project media and a monochrome footer. Motion has a pause control and respects system reduced motion. Content works without JavaScript. Fonts are self-hosted with licenses in public/fonts.

Set `PUBLIC_NOINDEX=true` before building previews that should not be indexed. Domain/DNS and publication are outside this local implementation.
