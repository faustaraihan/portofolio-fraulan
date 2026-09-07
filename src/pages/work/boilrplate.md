---
layout: ../../layouts/CaseStudyLayout.astro
project: boilrplate
---

## The product

Boilrplate is a personal-first workspace for composing reusable project-setup decisions. It brings stack choices, libraries, conventions, instructions, prompts, and references into a setup that people and AI coding agents can inspect and reuse.

The product connects reusable Blocks and independently selectable Modules to a versioned Boilrplate, then connects that setup to private Projects and deterministic exports.

## What I am shaping

I am shaping the product direction and system implementation across the workspace model: Blocks and Modules, mutable working copies, immutable Revisions, Projects pinned to a revision, and exports of safe project guidance.

The repository records the application as an active milestone build. M2 authoring work is implemented and under milestone verification, so this page describes the product direction and current system scope without presenting a final release claim.

## The experience

The intended flow is deliberate: choose or create a Boilrplate, select the Modules that belong in it, publish a Revision, attach a Project, and export the resulting guidance. The setup stays private by default and excludes account data, secrets, and private Project information from portable exports.

The product uses Next.js and TypeScript across its web surfaces, with Supabase for the application foundation and Cloudflare for delivery. Its public marketing and authenticated application origins remain separate by design.
