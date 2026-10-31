---
layout: ../../../layouts/CaseStudyLayout.astro
project: blastrot
locale: id
---

<section id="experience" class="case-chapter"><div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">Masalahnya</p><h2>Niat istirahat sebentar, ujungnya scroll terus.</h2></header>
<div class="break-journey"><div class="break-journey-row"><p class="case-eyebrow">Kebiasaan awal</p><ol><li>Bekerja di laptop</li><li>Butuh istirahat</li><li>Ambil ponsel</li><li>Scroll tanpa titik berhenti</li></ol></div><div class="break-journey-row break-journey-row--green"><p class="case-eyebrow">Dugaan solusi</p><ol><li>Tetap di laptop</li><li>Buka Blastrot</li><li>Selesaikan atau jeda permainan</li><li>Pilih kembali bekerja</li></ol></div></div>
<blockquote class="break-job"><p class="case-eyebrow">Job to be done / Konteks pembuat produk</p><p>Saat berhenti sejenak dari pekerjaan di laptop, saya ingin hiburan singkat di browser yang sama agar bisa beristirahat tanpa membuka feed di ponsel.</p></blockquote>
<div class="break-policies">
<article><img class="break-policy-visual" src="/images/pendev/blastrot-time-policy.webp" alt="Timer menghitung waktu maju, bukan mundur" width="755" height="176" loading="lazy" /><h3>Tanpa tekanan hitung mundur</h3><p>Catat waktu bermain aktif. Jangan jadikan tenggat.</p></article>
<article><img class="break-policy-visual" src="/images/pendev/blastrot-choice-policy.webp" alt="Ilustrasi asli Word Scramble, Quick Sum, dan Mini Sudoku" width="755" height="176" loading="lazy" /><h3>Bebas memilih alur</h3><p>Daily Mix memberi arahan; main bebas tetap tersedia.</p></article>
<article><img class="break-policy-visual" src="/images/pendev/blastrot-rest-policy.webp" alt="Ilustrasi satu minggu dengan tiga tanggal bermain yang tidak berurutan dan empat hari istirahat" width="795" height="176" loading="lazy" /><h3>Tanpa beban menjaga streak</h3><p>Hitung tanggal bermain yang berbeda. Hari istirahat tidak menghapus progres.</p></article>
</div>
</div></section>

<section id="access" class="case-chapter blast-chapter--blue"><div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">Keputusan produk</p><h2>Dari masalah saat istirahat ke cakupan yang bisa dibangun.</h2></header>
<p class="blast-evidence-tag">Rangkuman proyek / Konteks pembuat + desain yang terdokumentasi</p>
<table class="blast-table"><thead><tr><th scope="col">Kebutuhan pengguna</th><th scope="col">Pilihan produk</th><th scope="col">Konsekuensi yang perlu diuji</th></tr></thead><tbody>
<tr><th scope="row">Tidak perlu mengambil ponsel.</th><td>Mulai langsung dari browser.</td><td>Keharusan membuat akun tetap menambah langkah sebelum pertama kali bermain.</td></tr>
<tr><th scope="row">Tidak terus menjelajah tanpa arah.</th><td>Saran harian + pilihan bebas.</td><td>Satu rangkaian penuh mungkin terlalu banyak. Satu permainan tetap cukup untuk beristirahat.</td></tr>
<tr><th scope="row">Tahu kapan berhenti.</th><td>Sesi dengan akhir yang jelas, fitur jeda, dan tanpa beban menjaga streak.</td><td>Lebih banyak sesi dan kunjungan lebih lama belum tentu berarti berhasil.</td></tr>
</tbody></table>
<div class="break-scope"><div><h3 class="case-eyebrow">User story inti / Dirumuskan ulang dari konteks pembuat</h3><dl class="break-story"><dt>Sebagai</dt><dd>orang yang beristirahat dari pekerjaan di laptop</dd><dt>Saya ingin</dt><dd>membuka permainan di browser yang sedang saya pakai</dd><dt>Agar saya bisa</dt><dd>beristirahat tanpa membuka feed di ponsel</dd></dl></div><div><h3 class="case-eyebrow">Alur lengkap terkecil</h3><p>Pilih → Main → Jeda / Keluar → Hasil</p><p class="case-caption">Aturan penerimaan dan batas implementasinya dijelaskan lebih konkret lewat bagian Pair Pop di bawah.</p></div></div>
</div></section>

<section id="daily-mix" class="case-chapter"><div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">Daily Mix</p><h2>Mudah memilih. Tetap mudah berhenti.</h2></header>
<div class="daily-spec">
<dl class="daily-rules"><div><dt>Isi rangkaian</dt><dd>3 permainan berbeda</dd></div><div><dt>Kesulitan</dt><dd>Sesi lengkap tingkat Medium</dd></div><div><dt>Cara mulai</dt><dd>Tanpa memilih level lagi</dd></div></dl>
<div class="daily-states">
<figure><h3>0 / 3 · MULAI</h3><img src="/images/pendev/blastrot-daily-start.webp" alt="Desain Daily Mix pada kondisi awal dengan tombol Start Daily Mix dan tiga slot kosong" width="723" height="184" loading="lazy" /><figcaption>Pengguna baru langsung tahu harus mulai dari mana.</figcaption></figure>
<figure><h3>1 / 3 · LANJUTKAN</h3><img src="/images/pendev/blastrot-daily-continue.webp" alt="Desain Daily Mix dengan satu slot selesai dan tombol Continue Daily Mix" width="723" height="184" loading="lazy" /><figcaption>Aksi berikutnya mengikuti progres yang tersimpan.</figcaption></figure>
<figure><h3>3 / 3 · SELESAI</h3><img src="/images/pendev/blastrot-daily-complete.webp" alt="Desain Daily Mix dengan ketiga slot selesai dan pilihan main bebas" width="723" height="184" loading="lazy" /><figcaption>Rangkaian berakhir; main bebas tetap opsional.</figcaption></figure>
</div>
<div class="daily-shared"><p class="case-eyebrow">Satu konfigurasi Medium</p><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v8M5 20v-5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5M12 20v-8"/></svg><p>Main bebas + Daily Mix</p></div>
<p class="daily-session-rule">Satu papan selesai belum berarti satu sesi selesai. Progres Daily Mix baru bertambah setelah permainan selesai sepenuhnya.</p>
</div>
<p class="break-option"><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4c5-4 9 4 14 0v10c-5 4-9-4-14 0"/></svg>Satu permainan juga cukup untuk istirahat. Daily Mix itu pilihan, bukan kewajiban.</p>
</div></section>

<section id="pair-pop" class="case-chapter blast-chapter--cream"><div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">Desain interaksi</p><h2>Jeda adalah kondisi sistem, bukan sekadar tombol.</h2></header>
<div class="pair-pop-layout">
<figure><img class="pair-pop-preview" src="/images/pendev/blastrot-pair-pop.webp" alt="Desain Playroom Pair Pop bertema connected-lawn dengan susunan kartu, waktu berjalan, jumlah langkah, dan kontrol jeda" width="1200" height="750" loading="lazy" /><figcaption class="case-caption">Desain Playroom bertema connected-lawn saat ini, dari dokumen Pen Blastrot. Ini contoh kondisi desain, bukan tangkapan aplikasi yang sedang berjalan.</figcaption></figure>
<div class="pair-state-flow"><h3 class="case-eyebrow">Logika giliran / Gambaran kondisi yang disederhanakan</h3><ol class="pair-turn"><li>Pilih kartu pertama</li><li>Pilih kartu kedua · +1 langkah</li></ol><div class="pair-outcomes"><div><h4>Cocok</h4><p>Biarkan pasangan kartu terbuka.</p></div><div><h4>Tidak cocok</h4><p>Tampilkan selama 900 ms.<br />Blokir input kartu ketiga.</p></div></div><p class="pair-loop">Lanjutkan giliran sampai papan selesai.</p><div class="pair-pause"><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="4" width="4" height="16" rx="1"/><rect x="15" y="4" width="4" height="16" rx="1"/></svg><div><h4>Bekukan waktu + sisa durasi kartu terbuka</h4><p>Permainan dilanjutkan lewat aksi pengguna. Setiap alasan jeda ditangani secara terpisah.</p></div></div><dl class="pair-exits"><div><dt>Masih ada papan</dt><dd>Lanjutkan lewat aksi pengguna</dd></div><div><dt>Papan terakhir</dt><dd>Hasilkan satu hasil sesi</dd></div></dl></div>
</div>
<div class="pair-acceptance"><h3 class="case-eyebrow">Contoh kriteria penerimaan</h3><dl class="pair-probes"><div><dt>&lt;900 ms</dt><dd>Input masih dikunci</dd></div><div><dt>900 ms</dt><dd>Input aktif lagi</dd></div><div><dt>Jeda</dt><dd>Sisa durasi kartu terbuka disimpan</dd></div><div><dt>Main ulang</dt><dd>Input lama diabaikan</dd></div></dl><p class="case-caption">Kontrak domain dan catatan pengujian tersedia. Penyusunan halaman proyek ini tidak menjalankan ulang tes atau memverifikasi permainan di browser.</p></div>
</div></section>

<section id="identity" class="case-chapter"><div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">Koleksi permainan</p><h2>Beragam permainan. Satu tempat untuk istirahat.</h2></header>
<div class="blast-library">
<div class="library-controls-preview" tabindex="0" role="region" aria-label="Pratinjau desain pencarian dan kategori koleksi permainan; geser ke samping pada layar kecil"><img src="/images/pendev/blastrot-library-controls.webp" alt="Desain statis kolom pencarian dan tab kategori asli: All games, Memory, Focus, Numbers, Logic, Spatial, dan Words" width="2400" height="334" loading="lazy" /></div>
<div class="blast-library-cards">
<img src="/images/pendev/blastrot-word-scramble.webp" alt="Kartu katalog asli Word Scramble: pratinjau desain permainan kategori Words" width="570" height="764" loading="lazy" />
<img src="/images/pendev/blastrot-quick-sum.webp" alt="Kartu katalog asli Quick Sum: pratinjau desain permainan kategori Numbers" width="570" height="764" loading="lazy" />
<img src="/images/pendev/blastrot-mini-sudoku.webp" alt="Kartu katalog asli Mini Sudoku: pratinjau desain permainan kategori Logic" width="570" height="764" loading="lazy" />
<img src="/images/pendev/blastrot-rotate-match.webp" alt="Kartu katalog asli Rotate Match: pratinjau desain permainan kategori Spatial" width="570" height="764" loading="lazy" />
</div></div>
<div class="library-principle"><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="4" height="16" rx="1"/><rect x="10" y="4" width="4" height="16" rx="1"/><path d="m17 5 3-1 3 15-3 1z"/></svg><div><h3>Ada arahan saat dibutuhkan. Bebas memilih saat diinginkan.</h3><p>Daily Mix menyarankan satu rangkaian; pencarian dan kategori tetap membuka akses ke koleksi lainnya.</p></div></div>
<p class="case-caption">Pratinjau komponen katalog · empat permainan pilihan dari keseluruhan katalog desain. Kontrol dan kartu berasal dari UI Pen yang sama.</p>
</div></section>

<section id="scope" class="case-chapter blast-chapter--blue"><div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">Pengukuran &amp; peninjauan</p><h2>Istirahat yang berguna, bukan sekadar kunjungan lebih lama.</h2></header>
<table class="blast-table blast-measurement"><thead><tr><th scope="col">Pertanyaan</th><th scope="col">Bukti yang perlu dikumpulkan</th><th scope="col">Keputusan yang dibantu</th></tr></thead><tbody>
<tr><th scope="row">Bisa memilih dan mulai bermain?</th><td>Pengamatan penggunaan pertama + event mulai/selesai.</td><td>Sederhanakan cara masuk atau jumlah pilihan.</td></tr>
<tr><th scope="row">Bisa berhenti dan kembali bekerja?</th><td>Amati cara pengguna berhenti; ajukan pertanyaan lanjutan singkat dan opsional.</td><td>Sesuaikan batas sesi dan aksi setelah hasil muncul.</td></tr>
<tr><th scope="row">Apakah ini menggantikan kebiasaan mengambil ponsel?</th><td>Catatan harian sukarela atau wawancara, bukan event browser saja.</td><td>Pertahankan atau tinjau lagi kecocokan masalah dan solusinya.</td></tr>
</tbody></table>
<div class="blast-review"><h3 class="case-eyebrow">Daftar peninjauan / Masih terbuka dalam audit Pen saat ini</h3><div class="blast-review-grid"><article><p class="case-eyebrow">P0 / Belum selesai</p><h4>Buat progres mudah terlihat.</h4><p>Gunakan penanda progres yang terlihat di mobile dan slot berlabel.</p></article><article><p class="case-eyebrow">P1 / Belum selesai</p><h4>Terakhir dimainkan belum tentu favorit.</h4><p>Sebut sebagai preferensi hanya jika datanya mendukung.</p></article></div></div>
<p class="case-caption">Pengukuran ini masih berupa rencana, bukan riset yang selesai dilakukan. Temuan peninjauan berasal dari audit desain saat ini; tidak ada klaim bahwa doomscrolling sudah berkurang.</p>
</div></section>
