export type ProjectStatus = 'project' | 'in-progress';

export type Project = {
  slug: string;
  name: string;
  logo?: string;
  eyebrow: string;
  summary: string;
  contribution: string;
  contributionLabel: string;
  status: ProjectStatus;
  stack: string[];
  cover: string;
  coverAlt: string;
  caseStudyPath: string | null;
  demoUrl: string | null;
  repoUrl: string | null;
  accent: string;
  coverWidth: number;
  coverHeight: number;
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
    cover: '/images/codestroke-main.webp',
    coverAlt: 'Codestroke code typing interface with language tabs and live metrics',
    caseStudyPath: '/work/codestroke/',
    demoUrl: 'https://codestroke.dev/',
    repoUrl: null,
    accent: 'lime',
    coverWidth: 1080,
    coverHeight: 720,
  },
  {
    slug: 'boilrplate',
    name: 'Boilrplate',
    logo: '/images/boilrplate-logo.svg',
    eyebrow: 'Developer workspace / solo project',
    summary: 'A personal-first workspace for composing reusable project setups and exporting safe guidance for people and AI coding agents.',
    contribution: 'Product direction and system implementation across reusable Blocks, Modules, versioned revisions, Projects, and deterministic exports.',
    contributionLabel: 'Current focus',
    status: 'in-progress',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Cloudflare'],
    cover: '/images/boilrplate-main.svg',
    coverAlt: 'Boilrplate wordmark on a monochrome gradient background',
    caseStudyPath: '/work/boilrplate/',
    demoUrl: null,
    repoUrl: null,
    accent: 'slate',
    coverWidth: 720,
    coverHeight: 720,
  },
  {
    slug: 'karisma-ai',
    name: 'Karisma AI',
    logo: '/images/karisma-ai-logo.svg',
    eyebrow: 'Career navigation / team project',
    summary: 'Helping people explore career directions through CV insights, skill gaps, and personalized learning roadmaps.',
    contribution: 'Database and ERD design, UI/UX planning, and full-stack integration in a six-person team.',
    contributionLabel: 'My contribution',
    status: 'project',
    stack: ['React', 'Express.js', 'Supabase', 'JavaScript'],
    cover: '/images/karisma-ai-main.webp',
    coverAlt: 'Karisma AI career navigation interface showing CV insights and learning roadmaps',
    caseStudyPath: '/work/karisma-ai/',
    demoUrl: 'https://karisma-ai.site/',
    repoUrl: null,
    accent: 'violet',
    coverWidth: 1081,
    coverHeight: 540,
  },
  {
    slug: 'moomori',
    name: 'Moomori',
    eyebrow: 'Farm experience / solo project',
    summary: 'A farm website in progress, bringing products, visits, and learning into one experience.',
    contribution: 'Currently shaping the landing experience, starting with navigation, the hero, and featured products.',
    contributionLabel: 'Current focus',
    status: 'in-progress',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    cover: '/images/moomori-preview.webp',
    coverAlt: 'Moomori farm landscape used as a visual preview for the work in progress project',
    caseStudyPath: null,
    demoUrl: null,
    repoUrl: null,
    accent: 'green',
    coverWidth: 1200,
    coverHeight: 800,
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
