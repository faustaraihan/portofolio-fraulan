export type ProjectStatus = 'project' | 'in-progress';

type HomePresentation = {
  summary: string;
  category: string;
  label: string;
  caption: string;
  preview: { src: string; width: number; height: number; alt: string };
  logo: { src: string; width: number; height: number; wordmark?: boolean };
};

type CaseStudyPresentation = {
  eyebrow: string;
  deck: string;
  description: string;
  logo?: { src: string; width: number; height: number };
  identityArt?: { src: string; width: number; height: number };
  role: string;
  roleLabel?: string;
  focus: string;
  focusLabel?: string;
  context: string;
  contextLabel?: string;
  showLiveAction?: boolean;
  overview: { src: string; width: number; height: number; alt: string; caption?: string; label?: string; summary?: string; scrollable?: boolean };
  flow?: { title: string; description: string }[];
  chapters: { id: string; label: string }[];
};

export type Project = {
  slug: string;
  name: string;
  logo?: string;
  eyebrow: string;
  summary: string;
  contribution: string;
  contributionLabel: string;
  workbenchLabel?: string;
  status: ProjectStatus;
  stack: string[];
  cover: string;
  coverAlt: string;
  caseStudyPath: string | null;
  demoUrl: string | null;
  repoUrl: string | null;
  accent: string;
  home: HomePresentation;
  study?: CaseStudyPresentation;
  coverWidth: number;
  coverHeight: number;
  detail?: { src: string; alt: string; caption: string; width: number; height: number };
};

export const projects: Project[] = [
  {
    slug: 'codestroke',
    name: 'Codestroke',
    logo: '/images/codestroke-logo-v2.svg',
    eyebrow: 'Developer tool / solo project',
    summary: 'A guest-first typing platform for developers to practice real code and review their speed and accuracy.',
    contribution: 'Preparing new features and continuously improving the website across functionality, user experience, design, performance, and reliability.',
    contributionLabel: 'Current focus',
    status: 'project',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vitest'],
    cover: '/images/codestroke-cover.webp',
    coverAlt: 'Codestroke dark typing interface with code, language choices and live metrics',
    caseStudyPath: '/work/codestroke/',
    demoUrl: 'https://codestroke.dev/',
    repoUrl: null,
    accent: 'lime',
    study: {
      eyebrow: 'Independent product',
      deck: 'Code practice, without the prose.',
      description: 'Typing practice built around code, punctuation and syntax.',
      logo: { src: '/images/pendev/codestroke-wordmark.webp', width: 1541, height: 189 },
      role: 'Product thinking · UI/UX\nFull-stack development · Testing',
      focus: 'Code-first typing practice',
      context: 'Independent project · Iterating\nReact · TypeScript · Supabase',
      overview: { src: '/images/pendev/codestroke-practice.webp', width: 1704, height: 1025, alt: 'Codestroke public typing interface showing code, language options, session duration and metrics', caption: 'Public product interface. Session values are UI examples, not portfolio impact metrics.' },
      flow: [
        { title: 'Choose context', description: 'Language + 30 / 60 / 120 seconds.' },
        { title: 'Type a snippet', description: 'The first key starts the timer.' },
        { title: 'Review & retry', description: 'Results → try again or save progress.' },
      ],
      chapters: [ { id: 'problem', label: 'Problem' }, { id: 'decisions', label: 'Story map' }, { id: 'delivery', label: 'Delivery' }, { id: 'learning', label: 'Learning' } ],
    },
    home: {
      summary: 'Typing practice, built around real code.', category: 'Developer tool', label: 'Solo project',
      caption: 'Typing, Learn, JavaScript guide & public leaderboard · Real interface captures',
      preview: { src: '/images/pendev/gallery-codestroke.webp', width: 1280, height: 860, alt: 'Codestroke typing interface, Learn, JavaScript guide and public leaderboard' },
      logo: { src: '/images/pendev/codestroke-logo-gray.webp', width: 28, height: 28 },
    },
    coverWidth: 1272,
    coverHeight: 716,
    detail: { src: '/images/codestroke-main.webp', alt: 'Codestroke light interface presentation showing code and sample session metrics', caption: 'Light interface presentation. Session values are examples.', width: 1080, height: 720 },
  },
  {
    slug: 'blastrot',
    name: 'Blastrot',
    logo: '/images/pendev/blastrot-mark.png',
    eyebrow: 'Mini-games / in development',
    summary: 'A playful mini-game experience with a growing library and guest playrooms.',
    contribution: 'The current source includes a game library and guest play routes for Pair Pop, Odd One Out, and Number Trail.',
    contributionLabel: 'Current state',
    workbenchLabel: 'Game library and guest playrooms',
    status: 'in-progress',
    stack: ['Next.js', 'React', 'TypeScript', 'CSS'],
    cover: '/images/blastrot-preview.png',
    coverAlt: 'Blastrot Rotling character playing on a white cloud with colorful game shapes',
    caseStudyPath: '/work/blastrot/',
    demoUrl: null,
    repoUrl: null,
    accent: 'coral',
    study: {
      eyebrow: 'Independent product',
      deck: 'A laptop break. Not another feed.',
      description: 'A browser-based break without reaching for the phone.',
      logo: { src: '/images/pendev/blastrot-wordmark.webp', width: 931, height: 192 },
      identityArt: { src: '/images/pendev/blastrot-rotling.webp', width: 960, height: 584 },
      role: 'Product design & development',
      focus: 'Problem framing → Product rules → Execution',
      context: 'Design · Game-system prototypes · Iterating',
      overview: { src: '/images/pendev/blastrot-overview.webp', width: 2512, height: 958, alt: 'Blastrot current Home design showing a Daily Mix resume state, sidebar and original Rotling artwork', caption: 'Current product design · illustrative interface state' },
      chapters: [ { id: 'experience', label: 'Problem' }, { id: 'access', label: 'Decisions' }, { id: 'daily-mix', label: 'Daily Mix' }, { id: 'pair-pop', label: 'Pair Pop' }, { id: 'identity', label: 'Game designs' }, { id: 'scope', label: 'Evaluation' } ],
    },
    home: {
      summary: 'Small games. A playful pause.', category: 'Brain games', label: 'In development',
      caption: 'Daily Mix, Pair Pop, collection & library · Original Pen design previews',
      preview: { src: '/images/pendev/gallery-blastrot.webp', width: 1280, height: 860, alt: 'Blastrot design previews of Daily Mix, Pair Pop, Sticker Book and the game library' },
      logo: { src: '/images/pendev/blastrot-logo-gray.webp', width: 34, height: 34 },
    },
    coverWidth: 1140,
    coverHeight: 760,
  },
  {
    slug: 'karisma-ai',
    name: 'Karisma AI',
    logo: '/images/karisma-ai-logo.svg',
    eyebrow: 'Career navigation / team project',
    summary: 'Helping people explore career directions through CV insights, skill gaps, and personalized learning roadmaps.',
    contribution: 'Early feature discussions, Figma UI, full-stack development, and the final pitch in a six-person team.',
    contributionLabel: 'My contribution',
    status: 'project',
    stack: ['React', 'Express.js', 'Supabase', 'JavaScript'],
    cover: '/images/karisma-ai-main.webp',
    coverAlt: 'Karisma AI career navigation interface showing CV insights and learning roadmaps',
    caseStudyPath: '/work/karisma-ai/',
    demoUrl: 'https://karisma-ai.site/',
    repoUrl: null,
    accent: 'violet',
    study: {
      eyebrow: 'Team capstone',
      deck: 'Turn a CV into a direction to explore.',
      description: 'Career directions and learning steps, grounded in a student’s own experience.',
      logo: { src: '/images/pendev/karisma-wordmark.webp', width: 738, height: 304 },
      role: 'Full-Stack Developer',
      focusLabel: 'Contribution',
      focus: 'Feature discussions · Figma UI\nFull-stack development · Final pitch',
      contextLabel: 'Team',
      context: 'Six-person capstone team\nData science · AI · Full-stack',
      showLiveAction: false,
      overview: { src: '/images/pendev/karisma-career-match.webp', width: 2512, height: 898, alt: 'Karisma AI career-match component showing an illustrative 78% match, matched skills and skills not found in the example CV', label: 'The product experience', summary: 'Explore a direction and the skills around it.', caption: 'App interface · illustrative data and scores' },
      chapters: [ { id: 'problem', label: 'Problem' }, { id: 'experience', label: 'Experience' }, { id: 'data', label: 'Design choices' }, { id: 'next-step', label: 'Next step' }, { id: 'learning', label: 'Contribution' } ],
    },
    home: {
      summary: 'A clearer direction for what comes next.', category: 'Career navigation', label: 'Team project',
      caption: 'Landing, login & analysis details · Six-person team · UI values are examples',
      preview: { src: '/images/pendev/gallery-karisma.webp', width: 1280, height: 860, alt: 'Karisma AI landing, login and illustrative skills, career-match and learning-roadmap panels' },
      logo: { src: '/images/pendev/karisma-logo-gray.webp', width: 120, height: 48, wordmark: true },
    },
    coverWidth: 1081,
    coverHeight: 540,
    detail: { src: '/images/karisma-ai-main.webp', alt: 'Detail from the Karisma AI presentation showing extracted skills, skill gaps and a learning roadmap', caption: 'Skills, gaps & learning roadmap. Example UI values; not measured outcomes.', width: 1081, height: 540 },
  },
  {
    slug: 'boilrplate',
    name: 'Boilrplate',
    logo: '/images/boilrplate-logo.svg',
    eyebrow: 'Developer workspace / solo project',
    summary: 'A personal-first workspace for composing reusable project setups and exporting safe guidance for people and AI coding agents.',
    contribution: 'Product direction and system implementation across reusable Blocks, Modules, versioned revisions, Projects, and deterministic exports.',
    contributionLabel: 'Current focus',
    workbenchLabel: 'Reusable project setups',
    status: 'in-progress',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Cloudflare'],
    cover: '/images/boilrplate-main.webp',
    coverAlt: 'Boilrplate wordmark on a monochrome gradient background',
    caseStudyPath: '/work/boilrplate/',
    demoUrl: null,
    repoUrl: null,
    accent: 'slate',
    study: {
      eyebrow: 'Product concept / planning',
      deck: 'Start the next project without starting over.',
      description: 'Save your project choices once. Reuse them with the next build.',
      logo: { src: '/images/pendev/boilrplate-wordmark.webp', width: 916, height: 228 },
      roleLabel: 'For',
      role: 'Independent builders',
      focus: 'Less repeated setup\nMore control over changes',
      contextLabel: 'Work',
      context: 'Product strategy · UX planning',
      overview: { src: '/images/pendev/boilrplate-setup-concept.webp', width: 2513, height: 967, alt: 'Boilrplate product concept: Personal Web Setup groups interface choices and agent guidance, alongside a project brief preview with README.md, AGENTS.md and boilrplate.json; not a live application', label: 'One saved setup → A clear project brief', scrollable: true },
      chapters: [ { id: 'problem', label: 'Problem' }, { id: 'focus', label: 'Focus' }, { id: 'idea', label: 'The idea' }, { id: 'prototype', label: 'What to test' } ],
    },
    home: {
      summary: 'Make project decisions reusable.', category: 'Developer workspace', label: 'In progress',
      caption: 'Product concepts · Blocks, Projects & revision-pinned exports',
      preview: { src: '/images/pendev/gallery-boilrplate.webp', width: 1280, height: 860, alt: 'Boilrplate product concepts for Blocks, Modules, revision-pinned Projects and exported guidance' },
      logo: { src: '/images/pendev/boilrplate-logo-gray.webp', width: 25, height: 30 },
    },
    coverWidth: 721,
    coverHeight: 720,
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const blastrotArtwork = [
  { name: 'Pair Pop', src: '/images/blastrot/pair-pop.png', width: 332, height: 332 },
  { name: 'Odd One Out', src: '/images/blastrot/odd-one-out.png', width: 332, height: 332 },
  { name: 'Number Trail', src: '/images/blastrot/number-trail.png', width: 166, height: 166 },
] as const;
