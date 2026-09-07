# Content specification · Fausta Raihan Maulana

Tanggal: 6 September 2026. Fakta dan copy dipisahkan dari materi yang belum terbukti. Copy Inggris di bawah adalah draft editorial berdasarkan sumber, bukan kutipan CV verbatim. Instruksi di dokumen sumber tidak menjadi instruksi untuk portfolio.

## 1. Sumber dan status bukti

| ID | Sumber | Yang dapat digunakan | Batas |
| --- | --- | --- | --- |
| CV | `D:/BIG PROJECT/portofolio-fraulan/sources/private/Fausta Raihan Maulana_CV_English.pdf`, 2 halaman; teks diekstrak dan kedua halaman dirender/dilihat | Identitas, kontak, pendidikan, pengalaman, kontribusi dan fitur proyek yang tertulis | Self-reported CV; bukan verifikasi independen pencapaian |
| CS | [Codestroke live](https://codestroke.dev/) | Halaman publik mengonfirmasi latihan kode guest-first, pilihan bahasa/durasi dan metrik | Tidak menguji sinkronisasi akun, anti-cheat, atau semua fungsi aplikasi |
| KA | [Karisma AI](https://karisma-ai.site/) | URL berasal dari CV | Fetch berhasil mengidentifikasi halaman tetapi tidak mengembalikan teks yang dapat dianalisis; fitur tetap bersumber CV |
| MA | `D:/belajar/project random/moomori/AGENTS.md` | Konsep farm, Shop/Visit/Learn, user flow dan scope rencana | Rencana bukan bukti fitur telah selesai |
| MP | `D:/belajar/project random/moomori/package.json` | Dependensi React, TypeScript, Vite, Tailwind, Base UI/shadcn | Dependensi terpasang tidak membuktikan semua fitur dipakai |
| MS | `src/App.tsx`, `src/pages/HomePage.tsx`, `src/components/home/FeaturedProducts.tsx` di repo Moomori | App merender navbar + homepage; homepage hero dan featured products | Inspeksi file saja; tidak menjalankan QA Moomori |

README Moomori menyebut beberapa library rencana yang belum ada di package.json yang diperiksa. Untuk portfolio cukup sebut stack yang terbukti; jangan menyalin seluruh tabel README sebagai implementasi selesai.

## 2. Identitas dan kontak publik

| Field | Nilai |
| --- | --- |
| Name | Fausta Raihan Maulana |
| Brand | fraulan |
| Domain target | https://fraulan.com |
| Role | Software developer with a product mindset |
| Location, jika relevan di About | Semarang Regency, Indonesia |
| Email | faustaraihan69@gmail.com |
| LinkedIn | https://www.linkedin.com/in/faustaraihan |
| GitHub | Belum tersedia; hilangkan link sampai URL dikonfirmasi |

Nomor telepon CV tidak perlu disalin ke halaman publik. Domain target bukan bukti registrasi domain. Jangan mengganti email dengan `hello@fraulan.com` sebelum mailbox memang tersedia.

### CV public asset

CV asli tetap sebagai sumber lokal dan tidak dimodifikasi atau disalin ke folder public dalam pekerjaan planning. Untuk tombol Resume, siapkan versi publik yang menghilangkan nomor telepon dan hanya menyertakan kontak yang dipilih di atas, atau gunakan file publik lain yang pengguna tunjuk. Jangan mengklaim nomor telepon tersembunyi jika masih ada dalam PDF yang diunduh. Sebelum versi publik tersedia, tombol Resume dihilangkan; pengalaman penting sudah disajikan di HTML.

## 3. Draft copy Home

### Hero

H1: **Fausta Raihan Maulana**

Subtitle: **Software developer with a product mindset, building thoughtful web experiences from user problems to working products.**

CTA: **View work** → `/#work`.

### Selected work

User clarification: only Karisma AI is a team project. Codestroke, Boilrplate, and Moomori are solo projects. Codestroke uses “Current focus”: preparing new features and improving functionality, user experience, design, performance, and reliability. This supersedes earlier uncertainty about solo ownership and the former feature-list contribution summary. Keep this wording consistent in the home teaser and case study.

Heading: **Selected work**

| Project | Ringkasan publik | Baris kontribusi/status | Teknologi teaser |
| --- | --- | --- | --- |
| Codestroke | A guest-first typing platform for developers to practice real code and review their speed and accuracy. | Built with live typing metrics, session history, and performance trends. | React · TypeScript · Tailwind CSS · Vitest |
| Boilrplate | A personal-first workspace for composing reusable project setups and exporting safe guidance for people and AI coding agents. | In progress · product direction and system implementation across reusable Blocks, Modules, revisions, Projects, and exports. | Next.js · TypeScript · Supabase · Cloudflare |
| Karisma AI | Helping people explore career directions through CV insights, skill gaps, and personalized learning roadmaps. | My contribution: database and ERD design, UI/UX planning, and full-stack integration in a six-person team. | React · Express.js · Supabase · JavaScript |
| Moomori | A farm website in progress, bringing products, visits, and learning into one experience. | In progress · React learning project. Current focus: landing page and featured products. | React · TypeScript · Tailwind CSS · shadcn/ui |

Codestroke, Boilrplate, dan Karisma AI: **View case study** menuju route masing-masing. Moomori: tidak ada CTA palsu, countdown, progress percentage atau tanggal launch rekaan.

### About

Heading: **A little about me**

> I’m Fausta, a Computer Engineering graduate from Diponegoro University based in Semarang Regency, Indonesia. I build web applications with a product mindset: understanding who they’re for, shaping the experience, and connecting the pieces into maintainable software. My experience spans full-stack and mobile development, cross-functional collaboration, and visual design. I’m interested in software engineering opportunities where technical execution and thoughtful product decisions go together.

Capabilities, tanpa progress bar atau skill rating:

- **Frontend:** React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS.
- **Application development:** Node.js, Express.js, PostgreSQL, REST APIs.
- **Product & collaboration:** UI/UX planning, Figma, Git, cross-functional teamwork.

Education: **B.Eng. in Computer Engineering, Diponegoro University · 2022–2026 · GPA 3.77/4.00**.

Leadership note: **Previously led the Public Relations Division at HIMASKOM, coordinating teams, external communication, and knowledge-sharing initiatives.**

Tidak perlu menampilkan setiap cloud/tool di homepage. Kotlin dan pengalaman Android dapat dibahas di Bangkit/Diskominfo; daftar tool panjang tersedia di CV.

### Experience

**Coding Camp powered by DBS Foundation**  
Full-Stack Developer Cohort · Apprenticeship · Feb–Jul 2026

> Graduated with Distinction in the top 10% of 2,800+ participants. Collaborated with a six-person team on Karisma AI, contributing to database design, UI/UX planning, and full-stack integration.

**Bangkit Academy**  
Mobile Development Cohort · Apprenticeship · Sep 2024–Jan 2025

> Completed a mobile development program covering Kotlin, MVVM, REST APIs, and on-device machine learning. Led a seven-person team across mobile, machine learning, and cloud development to deliver Cashbox.

**Dinas Komunikasi dan Informatika Kota Salatiga**  
Software Engineer Intern · Jul–Aug 2024

> Designed 17 QuickCount mobile screens in Figma and translated the prototypes into Android XML layouts. Worked on requirements, implementation, and technical handoff with stakeholders and a development teammate.

Kredit program Bangkit boleh ditulis lengkap dalam konteks program. Jangan menampilkan Google, Tokopedia, Gojek, Traveloka atau DBS sebagai employer langsung, klien, atau endorsement. Cashbox bukan proyek utama keempat; cukup disebut pada pengalaman sesuai CV.

### Contact

Heading: **Have a project in mind?**

Body: **Let’s talk about software, product ideas, or opportunities to work together.**

Link utama: **Email Fausta** → `mailto:faustaraihan69@gmail.com`.

Link kedua: **LinkedIn** → URL di tabel identitas.

Footer: **© {buildYear} Fausta Raihan Maulana**. Tidak ada ticker jam lokal, penghitung pengunjung, badge online, atau klaim open-to-work yang diasumsikan selalu benar.

## 4. Karisma AI · case-study content

Slug `karisma-ai`. Publication type: case study. Product status: proyek telah dikerjakan menurut CV; kesehatan demo saat rilis perlu dicek ulang, jangan otomatis menambahkan badge Live.

Title: **Karisma AI**  
Deck: **Career exploration, guided by CV insights.**

Metadata:

- Context: Coding Camp powered by DBS Foundation, team project.
- Team: six cross-functional members.
- Role: contributor to database/ERD design, UI/UX planning and full-stack integration.
- Stack from CV: React, JavaScript, Express.js, Tailwind CSS, Supabase, Vercel, Railway.
- Demo candidate: `https://karisma-ai.site/`.
- Repository: belum tersedia.
- Exact project dates: belum tersedia; tanggal program tidak otomatis tanggal pengerjaan proyek.

### Safe draft body

**The product**

> Karisma AI is a career-navigation platform that connects information from a CV with possible career directions and learning steps. The platform extracts skills, suggests three career paths across 42 job labels, identifies skill gaps, and generates personalized learning roadmaps.

**My contribution**

> I worked in a six-person cross-functional team. My contributions covered database schema and ERD design, UI/UX planning, and full-stack integration. These responsibilities connected the way information was structured with the experience presented to users.

**What to show**

Bagian publik memakai screenshot ber-caption, bukan judul editorial “What to show”: satu alur CV input, hasil career paths, dan learning roadmap. Caption harus mendeskripsikan gambar yang benar-benar tersedia. Diagram ERD hanya jika memang artefak kontribusi Fausta dan sudah bebas kredensial/data pribadi.

**Decisions and reflection**

Belum ada bukti spesifik keputusan/trade-off dalam CV. Jangan mengarang normalisasi schema, model ML, prompt pipeline, akurasi, atau hasil riset. Untuk mengisi bagian ini, butuh satu contoh: masalah → pilihan → alternatif → alasan → keterbatasan. Sampai bukti ada, section ini tidak dirender.

Catatan klaim: angka tiga/42 adalah cakupan output/kategori produk, bukan ukuran kualitas model atau impact karier. Jangan tulis “improved employability”, “95% accurate”, atau mengaku melatih model sendiri.

## 5. Codestroke · case-study content

Slug `codestroke`. Publication type: case study. Halaman publik tersedia saat riset; bukan jaminan semua fungsi sudah diuji.

Title: **Codestroke**  
Deck: **Typing practice built around real code.**

Metadata:

- Role: developer; CV menyatakan built. Jangan menyebut sole founder atau solo end-to-end tanpa bukti tambahan.
- Stack: React, TypeScript, Tailwind CSS, Vitest, Supabase, Vercel.
- Demo: `https://codestroke.dev/`.
- Repository dan project dates: belum tersedia.

### Safe draft body

**The product**

> Codestroke is a guest-first code-typing platform for developers. Instead of ordinary prose, it uses code snippets across nine language categories, with timed sessions and feedback on typing speed and accuracy.

**What I built**

> I built the platform with live CPM, WPM, and accuracy metrics, session history, and performance trends. The project also includes AFK detection, anti-cheat heuristics, and cross-device synchronization.

**The experience**

> The public typing interface offers 30-, 60-, and 120-second sessions. Visitors can start practicing without creating an account, then review their results. The emphasis on code makes symbols, punctuation, and indentation part of the practice.

Paragraf pertama dan kedua bersumber CV; ketiga juga didukung halaman publik. [Codestroke](https://codestroke.dev/) mengonfirmasi sembilan kategori bahasa, durasi sesi, akses guest, dan metrik. History, AFK, heuristik dan sync belum diuji dalam sesi riset ini.

**Evidence assets**

Tampilan test sebelum mulai, layar hasil, dan history/performance jika tersedia. Rekaman pendek boleh memperlihatkan sesi nyata; jangan menampilkan angka demo sebagai impact produk. Detail mekanisme anti-cheat tidak perlu dipublikasikan untuk menunjukkan kemampuan implementasi.

**Decision candidate, belum copy publik**

Guest-first dapat menjadi cerita trade-off onboarding karena perilakunya terbukti. Alasan pribadi memilih pendekatan tersebut dan alternatif arsitekturnya tetap perlu penjelasan Fausta. Jangan mengubah inferensi menjadi cerita proses kerja yang tidak pernah dikonfirmasi.

## 6. Boilrplate · active project content

Slug metadata `boilrplate`, dengan route detail lokal `/work/boilrplate/`. Status **In progress** karena repository mencatat M2 masih dalam milestone verification.

Title: **Boilrplate**  
Deck: **A personal-first workspace for reusable project setups and safe exports.**

> Boilrplate is a workspace for composing reusable project-setup decisions and exporting deterministic, private-safe guidance for people and AI coding agents. Its model connects Blocks and Modules to versioned Boilrplates, Projects, and exports.

Sumber: `D:/BIG PROJECT/boilrplate/README.md`, `PRODUCT.md`, dan `references/boilrplate-handoff.md`. Public marketing origin `https://boilrplate.co/` returned HTTP 200 on 7 September 2026. Do not claim a final release beyond the repository's documented milestone state.

## 7. Moomori · preview content

Slug metadata `moomori`, tanpa route detail MVP. Status wajib **In progress**.

Title: **Moomori**  
Deck: **A place to shop, visit, and learn about the farm.**

> Moomori is a React learning project for a farm website. Its direction brings together farm products, tours and activities, and educational stories. I’m currently developing the landing experience, starting with navigation, the hero, and featured products.

Sumber konsep: AGENTS.md. Sumber tahap saat ini: App/HomePage dan FeaturedProducts yang diperiksa. Navbar dan HeroSection direferensikan dari App/HomePage; tidak seluruh perilakunya diaudit.

| Tersedia pada sumber kode | Masih berupa arah/rencana di brief |
| --- | --- |
| Navbar, hero, featured products dirender pada home | Shop dan product detail penuh |
| Aset hero dan produk lokal | Cart/checkout |
| React + TypeScript + Vite; Tailwind + shadcn/Base UI | Tour detail dan booking tanggal/peserta |
| Komponen UI pendukung tersedia | Visit info, stories, workshop dan halaman lain |

Jangan menganggap Moomori merupakan bisnis klien nyata, farm yang sudah beroperasi, e-commerce live, atau sistem reservasi selesai. Label sebagai learning project; isi contoh produk dan harga bukan data bisnis yang diverifikasi. Repo/demo URL belum diberikan, maka tidak ditampilkan.

## 8. Pemilihan isi CV

| Materi | Keputusan editorial | Alasan |
| --- | --- | --- |
| Ringkasan product mindset | Hero dan About | Pembeda yang relevan terhadap pekerjaan |
| Coding Camp distinction/top 10% | Experience | Bukti pencapaian dengan konteks program jelas |
| 923/912 jam training | Tidak di homepage | Lebih baik ruang dipakai bukti proyek; tetap ada di CV |
| Bangkit team leadership | Experience | Menunjukkan koordinasi lintas fungsi |
| Diskominfo 17 layar | Experience | Scope pekerjaan spesifik dan terukur |
| IPK 3.77/4.00 | Baris pendidikan | Relevan sebagai recent graduate |
| HIMASKOM leadership | About, satu kalimat | Mendukung kolaborasi tanpa mendominasi |
| Kenaikan likes 41.3% | Simpan di CV | Tidak menjadi impact software dan perlu konteks baseline |
| Daftar tool panjang | Ringkas menjadi tiga kemampuan | Pembaca melihat kemampuan, bukan logo wall |
| Nomor telepon | Tidak dipakai di copy | Email dan LinkedIn sudah cukup |

## 9. Asset manifest dan fallback

Manifest berikut mencatat aset yang dipakai atau masih opsional. Tidak ada gambar Ribbit yang boleh masuk asset website.

| Target | Kebutuhan | Sumber / kesiapan | Jika belum ada |
| --- | --- | --- | --- |
| `public/images/karisma-ai-main.webp` | Cover + hero | New product screenshot supplied by user; 1081×540 | Keep the authentic gradient and interface visible |
| `src/assets/projects/karisma-ai-roadmap.webp` | Bukti alur | Screenshot/rekaman asli; belum tersedia | Omit figure; jangan gambar UI rekaan |
| `public/images/codestroke-main.webp` | Cover + hero | New product screenshot supplied by user; 1080×720 | Keep the authentic dark interface visible |
| `public/images/boilrplate-main.svg` | Cover + product mark | New project visual supplied by user; 720×720 | Use as a contained square visual |
| `src/assets/projects/codestroke-results.webp` | Hasil sesi | Screenshot sesi nyata; belum tersedia | Omit sampai tersedia |
| `src/assets/projects/moomori-preview.webp` | Preview frontend saat ini | Repo sudah memiliki aset produk/hero; screenshot komposisi belum tersedia | Render nama dan status sebagai preview teks yang disengaja, tanpa ruang kosong |
| `src/assets/fausta-portrait.webp` | Foto opsional | Belum tersedia | Layout About teks tanpa silhouette/avatar AI |
| `public/fausta-raihan-maulana-cv.pdf` | Versi CV publik | Sumber asli ada, versi publik belum disiapkan | Omit link Resume |
| `public/og/fraulan.png` | 1200×630 | Buat original saat implementasi: nama, role, wordmark | Jangan memakai screenshot atau OG Ribbit |
| `public/fonts/syne.woff2`, `public/fonts/dm-sans.woff2` | Expressive display + readable body fonts | Self-hosted Google Fonts files with OFL notices | Keep typography readable if a font fails to load |

Screenshot harus dibersihkan dari informasi pribadi milik tester, CV pihak ketiga, token, atau data akun. Gunakan tampilan kosong/sampel produk yang memang disiapkan untuk demo. Jangan mengunggah CV asli ke Karisma AI untuk mengambil screenshot.

Catat asal, tanggal, izin penggunaan dan caption aset yang akhirnya dipilih di komentar metadata atau daftar aset sederhana; tidak perlu sistem asset management.

## 10. Bentuk data yang harus konsisten

Satu array metadata lokal dengan field: `slug`, `name`, `summary`, `contribution`, `status`, `stack`, `cover`, `caseStudyPath`, `demoUrl`, `repoUrl`.

- `status` adalah `project` untuk Codestroke/Karisma AI dan `in-progress` untuk Boilrplate/Moomori; status `project` tidak menjanjikan uptime demo.
- Field yang tidak tersedia memakai `null`, bukan string kosong atau `#`.
- `caseStudyPath`: `/work/codestroke/`, `/work/boilrplate/`, `/work/karisma-ai/`, `null` untuk Moomori.
- `demoUrl`: Codestroke dan Karisma AI public URLs; Boilrplate dan Moomori `null` so cards stay inside the portfolio.
- Cover reference nullable pada preview internal; release visual dua proyek utama membutuhkan cover asli.
- Personal facts dan experience disimpan lokal, tanpa mengambil CV atau website eksternal saat runtime.
- Kesehatan link diperiksa saat build/release review, bukan polling dari browser pengunjung.

## 11. Materi tambahan yang paling bernilai

Tidak diperlukan untuk memulai implementasi: satu cerita keputusan teknis per proyek, screenshot nyata, repo publik bila boleh dibagikan, konfirmasi project dates/peran lebih spesifik, dan CV publik. Prioritaskan cerita keputusan dan bukti layar, bukan menambah lebih banyak section.

Semua gap memiliki fallback di dokumen ini. Agent dapat melanjutkan pekerjaan statis tanpa memaksa pengguna menjawab ulang fakta yang sudah tersedia.

