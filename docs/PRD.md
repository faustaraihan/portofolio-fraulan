# PRD · fraulan.com

Versi 1.1 · 7 September 2026 · Status: redesign 2.0 in progress; publication remains out of scope.

## 1. Tujuan produk

Portofolio statis untuk **Fausta Raihan Maulana**, software developer lulusan Teknik Komputer dengan orientasi produk. Pengunjung harus cepat memahami identitas, melihat hasil kerja, mengetahui kontribusi, lalu membuka demo, CV, atau kontak.

Audiens utama: recruiter dan hiring manager software engineering. Audiens kedua: engineer yang menilai kemampuan teknis dan calon kolaborator. Ini asumsi berdasarkan tujuan karier dalam CV; tidak perlu fitur tambahan untuk mengakomodasinya.

**Positioning:** software developer with a product mindset. Hindari label senior, AI researcher, founder, atau agency tanpa bukti tambahan.

Ukuran sukses sebelum rilis: dalam review manual singkat, pembaca dapat menemukan nama/peran di layar pertama, empat proyek melalui satu bagian Work, dan kontribusi Fausta tanpa menafsirkan daftar teknologi. Tidak mengarang target conversion rate atau memasang analytics hanya untuk memenuhi KPI.

## 2. Scope yang dikunci

| Prioritas | Termasuk |
| --- | --- |
| P0 | Home responsif; identitas lengkap; Work berisi Codestroke, Boilrplate, Karisma AI, Moomori; About; Experience; Contact |
| P0 | Case study Karisma AI, Codestroke, dan Boilrplate dengan template bersama |
| P0 | Moomori preview berstatus In progress, bukan case study hasil akhir |
| P0 | Email, LinkedIn, tautan proyek terverifikasi, metadata, sitemap, robots, 404 |
| P0 | Aksesibilitas dasar, no-JS, reduced motion, gambar responsif, build statis |
| P1 | CV publik jika file yang layak dipublikasikan sudah tersedia |
| P1 | Demo video pendek jika rekaman asli tersedia; poster tetap cukup untuk rilis |
| Ditunda | Detail Moomori, bilingual switch, blog, theme switch, analytics |
| Di luar scope | Database, auth, dashboard admin, API, CMS, chatbot, booking, contact form, checkout, WebGL playground |

Fitur shop/booking Moomori adalah konteks proyek yang dipamerkan, bukan fitur fraulan.com. Demikian pula Supabase/Express pada case study bukan dependensi website portfolio.

## 3. Sitemap dan alur

```text
/                         Home
  #work                   Codestroke → Boilrplate → Karisma AI → Moomori
  #about                  Bio, kemampuan, pendidikan
  #experience             Tiga pengalaman profesional/program
  #contact                Email dan LinkedIn
/work/boilrplate/          Case study
/work/karisma-ai/          Case study
/work/codestroke/          Case study
/404.html                 Halaman tidak ditemukan
```

CV opsional: `/fausta-raihan-maulana-cv.pdf`, hanya setelah versi publik siap. Tidak ada `/work/moomori/` pada MVP; preview tetap informatif tanpa link palsu. Route detail dapat ditambah saat tersedia materi yang cukup untuk case study.

Navigasi desktop: wordmark `fraulan` → `/`, `Work` → `/#work`, `About` → `/#about`, `Experience` → `/#experience`, `Contact` → `/#contact`. Resume bukan tab kosong; link muncul hanya jika aset tersedia.

Alur recruiter: Home → Work → kontribusi → About/Experience → CV atau Contact.

Alur technical reviewer: Work → case study → bukti dan keputusan → demo atau repository jika URL tersedia → kembali ke Work.

Alur mobile sama, urutan DOM sama; informasi tidak mensyaratkan hover.

## 4. Kontrak konten halaman

### Home

1. **Hero:** nama lengkap sebagai H1, deskripsi peran maksimal 20 kata, `View work` sebagai CTA utama, satu preview screenshot proyek. Brand kecil di navbar, bukan nama panggilan sebagai pengganti H1.
2. **Selected work:** empat item dalam urutan terkunci. Codestroke, Boilrplate, dan Karisma AI memiliki case study lokal; Moomori memakai preview ringkas serta status in progress.
3. **About:** narasi personal 60–90 kata, daftar kemampuan dalam tiga kelompok, pendidikan satu baris. Foto opsional; jika belum ada, layout teks tetap utuh.
4. **Experience:** Coding Camp, Bangkit, Diskominfo. Maksimal dua kalimat per entri, label apprenticeship/internship jelas. Leadership HIMASKOM satu catatan ringkas di About, tidak menjadi pengalaman kerja berbayar.
5. **Contact/footer:** ajakan singkat, email sebagai link, LinkedIn, nama lengkap dan copyright tahun build. Tidak ada klaim availability yang lekas basi.

### Case study

Urutan: judul dan ringkasan → role/stack/konteks → cover → problem → contribution → product behavior/evidence → decisions and trade-offs jika terverifikasi → reflection jika tersedia → demo/repository valid → back to Work.

Target 400–650 kata per case study setelah bukti lengkap. Jangan memanjang-manjangkan copy untuk mencapai target. Jika keputusan atau hasil belum diketahui, bagian itu dihilangkan; jangan menampilkan catatan editorial seperti TBD di halaman publik.

Karisma AI harus memisahkan produk yang dibangun tim dari kontribusi database/ERD, UI/UX dan integrasi Fausta. Codestroke boleh menjelaskan produk guest-first dan kemampuan yang tercatat; kepemilikan seluruh arsitektur dan proses riset pengguna belum terbukti.

### 404

Judul `This page isn’t here.`, kalimat penjelas singkat, link `Back home`. Menggunakan sistem warna dan tipografi yang sama. Static host harus mengirim status 404 yang benar, bukan rewrite seluruh path ke home.

## 5. Arsitektur teknis

**Keputusan:** Astro dengan `output: 'static'`, TypeScript, native CSS, local Markdown dan satu module metadata typed. Ini rekomendasi untuk scope sekarang; bukan hasil meniru framework Ribbit.

Astro menghasilkan route sebagai HTML saat build dan dapat menambah interaksi melalui script tanpa framework UI. Itu cocok untuk sedikit halaman konten dengan interaksi terbatas. [Astro configuration](https://docs.astro.build/en/reference/configuration-reference/), [Astro scripts](https://docs.astro.build/en/guides/client-side-scripts/)

| Pilihan | Pertimbangan | Keputusan |
| --- | --- | --- |
| HTML/CSS/JS manual | Dependensi sangat kecil; header/meta/template harus dikelola berulang | Layak, tetapi tiga case study membuat template build berguna |
| Astro static | HTML siap baca, template bersama, Markdown, script opt-in | Dipilih |
| React + Vite SPA | Familiar dengan pengalaman Fausta; butuh strategi prerender agar bukan shell kosong | Tidak dibutuhkan untuk konten sederhana |
| Next static export | Dapat bekerja, tetapi fitur aplikasi server tidak digunakan | Tidak menambah manfaat cukup untuk scope ini |

Versi paket dipilih dari stable compatible saat implementasi, disimpan dalam lockfile; jangan menebak versi terkini dari dokumen ini. Gunakan satu package manager: npm. Catat versi Node yang sesuai dengan versi Astro terpasang.

Struktur target minimum, bukan perintah membuat semua file kosong sekarang:

```text
src/
  layouts/BaseLayout.astro
  layouts/CaseStudyLayout.astro
  components/Header.astro
  components/Footer.astro
  components/ProjectTeaser.astro
  data/projects.ts
  pages/index.astro
  pages/work/boilrplate.md
  pages/work/karisma-ai.md
  pages/work/codestroke.md
  pages/404.astro
  styles/global.css
  assets/projects/
public/
  fonts/
  robots.txt
  sitemap.xml
  og/fraulan.png
scripts/check-content.mjs
```

Project metadata berasal dari satu module, dipakai Home dan layout detail. Body Markdown tidak mengulang ringkasan/role/stack di tempat berbeda. Empat entri tidak memerlukan content CMS atau data-fetching library. Static sitemap sederhana cukup; bila route bertambah banyak, baru pertimbangkan generator.

Deployment target adalah host file statis yang sudah dimiliki/dipilih pengguna. Output `dist/` harus portabel. Nama domain adalah target, bukan klaim domain sudah dibeli, dimiliki, atau tersambung. Konfigurasi akun, DNS, dan publikasi bukan pekerjaan dalam permintaan planning ini.

## 6. SEO, aksesibilitas dan performa

SEO: `lang="en"`, satu H1 per halaman, title/description unik, canonical `https://fraulan.com/…`, Open Graph image 1200×630, favicon original berbasis huruf f, sitemap hanya route publik, robots mengizinkan halaman publik. JSON-LD Person hanya dengan nama dan link yang terverifikasi; jangan menambah award, employer sponsor program, atau username rekaan. Preview deployment diberi noindex.

Aksesibilitas: landmark semantik, skip link, heading berurutan, fokus terlihat, target interaktif minimal 44×44px sebagai standar proyek, kontras teks normal minimal 4.5:1, alt faktual, keyboard parity, reflow dan zoom 200%. Tujuannya mengikuti WCAG 2.2 AA; klaim conformant hanya setelah audit yang memadai. [WCAG 2.2](https://www.w3.org/TR/WCAG22/)

Budget implementasi (target internal, belum terukur):

| Item | Batas |
| --- | --- |
| JS initial | ≤ 50 KB gzip; sasaran lebih kecil tanpa animation library |
| CSS total route | ≤ 35 KB gzip |
| Font initial | Satu WOFF2 variable Latin, ≤ 100 KB |
| Hero image | ≤ 220 KB, lebar dan tinggi eksplisit |
| Initial viewport transfer | ≤ 600 KB, tanpa video autoplay |
| Poster di bawah fold | Lazy-load, biasanya ≤ 250 KB per gambar |
| Video opsional | User-initiated, preload none, poster, controls |

Target Core Web Vitals: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 pada persentil 75 data lapangan. Sebelum ada trafik, ukur lab dan jelaskan keterbatasannya; Lighthouse tidak membuktikan INP lapangan. [Web Vitals](https://web.dev/articles/vitals)

## 7. Tahapan implementasi

| Fase | Pekerjaan | Syarat selesai |
| --- | --- | --- |
| 1 · Content + foundation | Baca kontrak, cek aset, scaffold minimum, metadata typed, routes dan layout | Semua route terbangun; fakta/status konsisten; gap aset dicatat |
| 2 · Static composition | Terapkan DESIGN, Home dan tiga case study dengan aset asli | Desktop/mobile terbaca, tidak overflow, semua link bermakna |
| 3 · Enhancement | Hero entrance, reveal sekali, hover/focus, progressive menu | Navigasi/content tetap bekerja no-JS; reduced motion efektif |
| 4 · QA + handoff | Build, checks, visual dan keyboard QA, metadata/link/size audit | Checklist di bawah dipenuhi atau kekurangan material dinyatakan |
| 5 · Publication, saat diminta | Upload dist, domain/TLS, redirect canonical, production smoke check | Public URLs, deep link, 404 dan file unduhan diuji pada host |

Jangan lompat ke motion sebelum tampilan statis dan bukti konten benar. Fase 1–4 dapat dikerjakan tanpa menunggu CV atau video opsional. Screenshot dua proyek utama adalah kebutuhan visual penting: bila akses tidak tersedia, boleh membuat preview internal dengan fallback di CONTENT, tetapi jangan menyebut hasil tersebut siap rilis visual penuh.

## 8. Definition of done

- [ ] Fresh install dari lockfile, type check dan production build berhasil; perintah dan hasil dicatat.
- [ ] Satu `node scripts/check-content.mjs` memeriksa tepat empat proyek, urutan, slug unik, status Boilrplate/Moomori in-progress, dan tidak adanya case-study/demo link kosong; gagal bila fixture status/link invalid. Pakai `node:assert`, tanpa framework baru.
- [ ] Home, tiga detail, dan 404 tersedia sebagai HTML hasil build; deep links bekerja tanpa SPA rewrite.
- [ ] Nama lengkap, ringkasan, isi Work dan kontak tetap terbaca ketika JS dimatikan.
- [ ] Viewport 360, 390, 768, 1440px diuji; zoom 200%; tidak ada konten penting terpotong atau horizontal page scroll.
- [ ] Chrome dan Firefox diuji; Safari/WebKit jika tersedia. Ketiadaan browser dicatat, bukan dianggap lulus.
- [ ] Keyboard: skip link, nav, case-study links, optional menu, kontak dan CV berfungsi; tidak ada fokus terperangkap.
- [ ] Reduced motion menghapus translation/reveal/motion dekoratif; konten tetap tampil.
- [ ] Semua gambar punya dimensi, alt yang sesuai, dan crop tidak menghilangkan konteks UI.
- [ ] Tidak ada placeholder publik, angka hasil rekaan, tautan # palsu, atau tombol Moomori yang menjanjikan demo.
- [ ] Link eksternal dibuka/diperiksa; sukses membuka landing tidak diklaim sebagai QA seluruh produk.
- [ ] Error console yang berasal dari situs tidak ada; broken assets/links tidak ada.
- [ ] Size budget diperiksa pada production build; Lighthouse mobile tiga run, laporkan median dan kondisi tes tanpa mengklaim data lapangan.
- [ ] Metadata/OG/sitemap/robots benar; preview noindex; CV asli tidak ikut tersalin tanpa aturan versi publik.

## 9. Keputusan yang masih terbuka

Tidak menghalangi dokumen atau scaffold: repo publik tiap proyek, foto personal, rekaman demo, bukti decision/trade-off, CV publik, dan host yang dipilih. Sumber serta fallback setiap gap dijelaskan di CONTENT. Bahasa Inggris dan palet cobalt adalah baseline usulan yang boleh direvisi pengguna secara global.

## Redesign 2.0 amendment
Latest user request overrides former minimal-motion and one-font baseline. DESIGN 2.0 controls composition, black/white typography, two self-hosted fonts (combined under 100 KB), coordinated scroll/entrance motion and motion toggle. Native Astro static output retained.

## Work order amendment
The latest user request adds Boilrplate and sets the locked home order to Codestroke, Boilrplate, Karisma AI, Moomori. Codestroke and Karisma AI use the new `public/images/*-main.webp` assets; Boilrplate uses the supplied `public/images/boilrplate-main.svg`. Boilrplate opens its local `/work/boilrplate/` case study from the portfolio.
