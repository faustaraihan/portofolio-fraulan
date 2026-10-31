import type { Locale } from '../i18n/routes.ts';

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

type ProjectTranslation = Pick<Project, 'eyebrow' | 'summary' | 'contribution' | 'contributionLabel' | 'coverAlt'> & {
  workbenchLabel?: string;
  home: Pick<HomePresentation, 'summary' | 'category' | 'label' | 'caption'> & { previewAlt: string };
  study: Pick<CaseStudyPresentation, 'eyebrow' | 'deck' | 'description' | 'role' | 'focus' | 'context'> & {
    roleLabel?: string;
    focusLabel?: string;
    contextLabel?: string;
    overview: Pick<CaseStudyPresentation['overview'], 'alt' | 'caption' | 'label' | 'summary'>;
    chapters: string[];
    flow?: { title: string; description: string }[];
  };
  detail?: Pick<NonNullable<Project['detail']>, 'alt' | 'caption'>;
};

// Presentation text only: all identities, statuses, routes and media remain above.
const idProjectCopy: Record<string, ProjectTranslation> = {
  "codestroke": {
    "eyebrow": "Tool developer / proyek mandiri",
    "summary": "Platform latihan mengetik untuk developer yang bisa dicoba tanpa akun, memakai kode asli, dan menampilkan kecepatan serta akurasi.",
    "contribution": "Menyiapkan fitur baru sambil terus memperbaiki fungsi, pengalaman pengguna, desain, performa, dan keandalan website.",
    "contributionLabel": "Fokus saat ini",
    "coverAlt": "Tampilan gelap Codestroke dengan kode, pilihan bahasa, dan metrik selama sesi",
    "home": {
      "summary": "Latihan mengetik dengan kode asli.",
      "category": "Tool developer",
      "label": "Proyek mandiri",
      "caption": "Typing, Learn, panduan JavaScript & leaderboard publik · Tangkapan antarmuka asli",
      "previewAlt": "Tampilan latihan mengetik Codestroke, Learn, panduan JavaScript, dan leaderboard publik"
    },
    "study": {
      "eyebrow": "Produk mandiri",
      "deck": "Latihan mengetik kode, bukan teks biasa.",
      "description": "Latihan mengetik yang berfokus pada kode, tanda baca, dan sintaks.",
      "role": "Product thinking · UI/UX\nPengembangan full-stack · Testing",
      "focus": "Latihan mengetik berbasis kode",
      "context": "Proyek mandiri · Terus diperbaiki\nReact · TypeScript · Supabase",
      "overview": {
        "alt": "Tampilan publik Codestroke dengan kode, pilihan bahasa, durasi sesi, dan metrik",
        "caption": "Tampilan produk publik. Nilai sesi hanya contoh UI, bukan metrik dampak portofolio."
      },
      "chapters": [
        "Masalah",
        "Story map",
        "Implementasi",
        "Pembelajaran"
      ],
      "flow": [
        {
          "title": "Pilih konteks",
          "description": "Bahasa + 30 / 60 / 120 detik."
        },
        {
          "title": "Ketik potongan kode",
          "description": "Timer dimulai saat tombol pertama ditekan."
        },
        {
          "title": "Tinjau & coba lagi",
          "description": "Hasil → coba lagi atau simpan progres."
        }
      ]
    },
    "detail": {
      "alt": "Presentasi antarmuka terang Codestroke dengan kode dan contoh metrik sesi",
      "caption": "Presentasi antarmuka terang. Nilai sesi hanya contoh."
    }
  },
  "blastrot": {
    "eyebrow": "Mini-game / sedang dikembangkan",
    "summary": "Mini-game untuk jeda yang menyenangkan, dengan koleksi yang terus bertambah dan ruang bermain tanpa akun.",
    "contribution": "Source saat ini mencakup koleksi permainan dan rute bermain tanpa akun untuk Pair Pop, Odd One Out, dan Number Trail.",
    "contributionLabel": "Kondisi saat ini",
    "coverAlt": "Karakter Rotling dari Blastrot bermain di awan putih bersama bentuk-bentuk permainan berwarna",
    "workbenchLabel": "Koleksi permainan dan ruang bermain tanpa akun",
    "home": {
      "summary": "Permainan singkat. Jeda yang menyenangkan.",
      "category": "Permainan asah otak",
      "label": "Sedang dikembangkan",
      "caption": "Daily Mix, Pair Pop, koleksi & library · Pratinjau desain Pen asli",
      "previewAlt": "Pratinjau desain Blastrot untuk Daily Mix, Pair Pop, Sticker Book, dan koleksi permainan"
    },
    "study": {
      "eyebrow": "Produk mandiri",
      "deck": "Istirahat di laptop, tanpa beralih ke feed.",
      "description": "Istirahat lewat browser tanpa perlu mengambil ponsel.",
      "role": "Desain & pengembangan produk",
      "focus": "Perumusan masalah → Aturan produk → Implementasi",
      "context": "Desain · Prototipe sistem permainan · Terus diperbaiki",
      "overview": {
        "alt": "Desain Home Blastrot saat ini dengan kondisi lanjut Daily Mix, sidebar, dan ilustrasi Rotling asli",
        "caption": "Desain produk saat ini · kondisi antarmuka ilustratif"
      },
      "chapters": [
        "Masalah",
        "Keputusan",
        "Daily Mix",
        "Pair Pop",
        "Desain permainan",
        "Evaluasi"
      ]
    }
  },
  "karisma-ai": {
    "eyebrow": "Arah karier / proyek tim",
    "summary": "Membantu menjelajahi arah karier lewat analisis CV, kesenjangan skill, dan rencana belajar yang disesuaikan.",
    "contribution": "Diskusi fitur awal, UI di Figma, pengembangan full-stack, dan presentasi akhir bersama tim beranggotakan enam orang.",
    "contributionLabel": "Kontribusi saya",
    "coverAlt": "Tampilan navigasi karier Karisma AI dengan analisis CV dan rencana belajar",
    "home": {
      "summary": "Arah yang lebih jelas untuk langkah berikutnya.",
      "category": "Arah karier",
      "label": "Proyek tim",
      "caption": "Landing, login & detail analisis · Tim enam orang · Nilai UI hanya contoh",
      "previewAlt": "Landing, login, dan panel ilustratif Karisma AI untuk skill, kecocokan karier, serta rencana belajar"
    },
    "study": {
      "eyebrow": "Proyek akhir tim",
      "deck": "Dari CV, temukan arah yang bisa dijelajahi.",
      "description": "Arah karier dan langkah belajar yang berangkat dari pengalaman mahasiswa itu sendiri.",
      "role": "Full-Stack Developer",
      "focus": "Diskusi fitur · UI di Figma\nPengembangan full-stack · Presentasi akhir",
      "context": "Tim proyek akhir beranggotakan enam orang\nData science · AI · Full-stack",
      "focusLabel": "Kontribusi",
      "contextLabel": "Tim",
      "overview": {
        "alt": "Komponen kecocokan karier Karisma AI dengan contoh skor 78%, skill yang cocok, dan skill yang tidak ditemukan dalam contoh CV",
        "caption": "Antarmuka aplikasi · data dan skor ilustratif",
        "label": "Pengalaman menggunakan produk",
        "summary": "Jelajahi satu arah karier beserta skill yang terkait."
      },
      "chapters": [
        "Masalah",
        "Alur penggunaan",
        "Pilihan desain",
        "Langkah berikutnya",
        "Kontribusi"
      ]
    },
    "detail": {
      "alt": "Detail presentasi Karisma AI dengan skill yang ditemukan, kesenjangan skill, dan rencana belajar",
      "caption": "Skill, kesenjangan & rencana belajar. Nilai UI hanya contoh, bukan hasil yang sudah diukur."
    }
  },
  "boilrplate": {
    "eyebrow": "Workspace developer / proyek mandiri",
    "summary": "Workspace untuk penggunaan pribadi yang membantu menyusun setup proyek yang bisa dipakai ulang dan mengekspor panduan yang aman bagi pengguna maupun AI coding agent.",
    "contribution": "Arah produk dan implementasi sistem untuk Blocks, Modules, revisi berversi, Projects, dan ekspor deterministik.",
    "contributionLabel": "Fokus saat ini",
    "coverAlt": "Wordmark Boilrplate di atas latar gradasi monokrom",
    "workbenchLabel": "Setup proyek yang bisa dipakai ulang",
    "home": {
      "summary": "Keputusan proyek yang bisa dipakai lagi.",
      "category": "Workspace developer",
      "label": "Sedang dikembangkan",
      "caption": "Konsep produk · Blocks, Projects & ekspor yang terikat revisi tertentu",
      "previewAlt": "Konsep produk Boilrplate untuk Blocks, Modules, Projects yang terikat revisi tertentu, dan panduan hasil ekspor"
    },
    "study": {
      "eyebrow": "Konsep produk / perencanaan",
      "deck": "Mulai proyek berikutnya tanpa mengulang dari nol.",
      "description": "Simpan pilihan proyek sekali. Pakai lagi saat membangun berikutnya.",
      "role": "Developer mandiri",
      "focus": "Lebih sedikit setup berulang\nLebih banyak kendali atas perubahan",
      "context": "Strategi produk · Perencanaan UX",
      "roleLabel": "Untuk",
      "contextLabel": "Pekerjaan",
      "overview": {
        "alt": "Konsep produk Boilrplate: Personal Web Setup menggabungkan pilihan antarmuka dan panduan agent, berdampingan dengan pratinjau brief proyek berisi README.md, AGENTS.md, dan boilrplate.json; bukan aplikasi yang sedang berjalan",
        "label": "Satu setup tersimpan → Brief proyek yang jelas"
      },
      "chapters": [
        "Masalah",
        "Fokus",
        "Idenya",
        "Yang ingin diuji"
      ]
    }
  }
};

export function getProject(slug: string, locale: Locale = 'en'): Project | undefined {
  const project = projects.find(project => project.slug === slug);
  if (!project || locale === 'en') return project;
  const copy = idProjectCopy[slug];
  if (!copy || !project.study) throw new Error('Missing Indonesian project copy: ' + slug);
  if (copy.study.chapters.length !== project.study.chapters.length || copy.study.flow?.length !== project.study.flow?.length) {
    throw new Error('Indonesian study structure differs: ' + slug);
  }
  const { home, study, detail, ...text } = copy;
  const { previewAlt, ...homeText } = home;
  return {
    ...project,
    ...text,
    home: { ...project.home, ...homeText, preview: { ...project.home.preview, alt: previewAlt } },
    study: {
      ...project.study,
      ...study,
      overview: { ...project.study.overview, ...study.overview },
      chapters: project.study.chapters.map((chapter, index) => ({ ...chapter, label: study.chapters[index] })),
    },
    ...(project.detail && detail ? { detail: { ...project.detail, ...detail } } : {}),
  };
}

export const blastrotArtwork = [
  { name: 'Pair Pop', src: '/images/blastrot/pair-pop.png', width: 332, height: 332 },
  { name: 'Odd One Out', src: '/images/blastrot/odd-one-out.png', width: 332, height: 332 },
  { name: 'Number Trail', src: '/images/blastrot/number-trail.png', width: 166, height: 166 },
] as const;
