---
layout: ../../../layouts/CaseStudyLayout.astro
project: codestroke
locale: id
---

<section id="problem" class="case-chapter">
<div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">Memahami masalah</p><h2>Mengetik kode punya tantangan yang berbeda.</h2></header>
<div class="typing-comparison">
<div class="typing-sample general-sample"><p class="case-eyebrow">Latihan mengetik umum</p><pre>the quick brown fox
jumps over the lazy dog</pre><p>Huruf + spasi</p></div>
<span class="comparison-sign" aria-hidden="true">≠</span>
<div class="typing-sample code-sample"><p class="case-eyebrow">Codestroke</p><pre>if (count &gt; 0) {
  items.push(value);
}</pre><p>Simbol + indentasi + sintaks</p></div>
</div>
<p class="case-caption">Perumusan masalah ini berasal dari PRD awal. Riset awal berbantuan AI yang dilakukan setelahnya masih eksploratif, bukan bukti bahwa kemampuan mengetik menurun.</p>
</div>
</section>

<section id="decisions" class="case-chapter case-chapter--blue">
<div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">User story &amp; cakupan</p><h2>Tiga kebutuhan. Satu alur latihan.</h2><p class="case-caption">Disusun ulang dari perilaku yang terdokumentasi untuk menjelaskan proyek ini, bukan tiket lama atau kutipan wawancara.</p></header>
<div class="story-map"><p class="story-map-label">Alur latihan utama</p><div class="story-map-grid">
<article class="story-card story-card--cream"><p class="case-eyebrow">US–01 / Mulai</p><h3>Coba sebelum<br />mendaftar</h3><dl><dt>Sebagai</dt><dd>developer</dd><dt>Saya ingin</dt><dd>mencoba potongan kode dengan batas waktu tanpa membuat akun</dd><dt>Agar saya bisa</dt><dd>menilai apakah alat ini cocok untuk latihan saya</dd></dl><p class="story-outcome">Tanpa harus login</p></article>
<article class="story-card story-card--blue"><p class="case-eyebrow">US–02 / Latihan</p><h3>Berlatih dengan<br />kode asli</h3><dl><dt>Sebagai</dt><dd>pelajar coding</dd><dt>Saya ingin</dt><dd>mengetik kode dan langsung mendapat feedback saat ada kesalahan</dd><dt>Agar saya bisa</dt><dd>menyadari kesalahan selama berlatih</dd></dl><p class="story-outcome">Timer mulai saat tombol pertama ditekan</p></article>
<article class="story-card story-card--green"><p class="case-eyebrow">US–03 / Tinjau</p><h3>Pahami<br />hasil saya</h3><dl><dt>Sebagai</dt><dd>pengguna yang kembali berlatih</dd><dt>Saya ingin</dt><dd>meninjau kecepatan dan akurasi simbol</dd><dt>Agar saya bisa</dt><dd>memilih apa yang perlu dilatih berikutnya</dd></dl><p class="story-outcome">CPM (karakter benar) + akurasi</p></article>
</div></div>
<div class="scope-boundary"><h3>Batas cakupan · MVP frontend Juli 2026</h3><div class="scope-row"><span>Fitur inti</span><ul><li>Akses tanpa akun</li><li>Latihan kode dengan batas waktu</li><li>Hasil + rincian simbol</li></ul></div><div class="scope-row scope-row--parked"><span>Ditunda</span><ul><li>Latihan terarah</li><li>Tantangan harian</li><li>Multiplayer langsung</li></ul></div></div>
</div>
</section>

<section id="delivery" class="case-chapter">
<div class="case-reading-wrap">
<header class="chapter-heading"><p class="case-eyebrow">Dari pemikiran ke implementasi</p><h2>Feedback sesi, dari spesifikasi sampai dirilis.</h2><p class="case-eyebrow chapter-subtitle">User story → Kriteria penerimaan → UI → Software yang berjalan</p></header>
<div class="delivery-grid">
<div class="feedback-spec"><div class="feedback-spec-bar"><span>US–04 / Feedback sesi</span><span class="shipped-label">Sudah dirilis</span></div><div class="feedback-spec-body"><h3>Nilai sesinya. Lanjutkan latihannya.</h3><dl class="feedback-story"><dt>Sebagai</dt><dd>pengguna yang selesai berlatih</dd><dt>Saya ingin</dt><dd>memberi rating dan komentar opsional</dd><dt>Agar saya bisa</dt><dd>menyampaikan kendala tanpa menghambat latihan berikutnya</dd></dl><table class="acceptance-table"><thead><tr><th>Kondisi awal</th><th>Saat</th><th>Hasil yang diharapkan</th></tr></thead><tbody><tr><td>3 sesi pertama selesai</td><td>Halaman hasil terbuka</td><td>Tampilkan survei opsional</td></tr><tr><td>Survei sedang terbuka</td><td>Pilih Not now atau tekan Esc</td><td>Tutup survei; kembalikan fokus</td></tr><tr><td>Feedback sudah dikirim</td><td>&lt;14 hari atau &lt;3 sesi baru</td><td>Jangan tampilkan lagi</td></tr></tbody></table><p class="case-caption">Disusun ulang dari kebutuhan yang terdokumentasi. Ini beberapa skenario pilihan, bukan spesifikasi lengkap.</p></div></div>
<figure class="feedback-figure"><div class="feedback-image"><p class="case-eyebrow">Hasil → Feedback sesi</p><img src="/images/pendev/codestroke-csat.webp" alt="Rekonstruksi modal feedback sesi Codestroke dengan rating, komentar opsional, serta tombol Not now dan Send feedback" width="832" height="848" loading="lazy" decoding="async" /></div><figcaption class="case-caption">Direkonstruksi dari komponen dan stylesheet yang sudah dirilis. Tidak ada feedback yang dikirim dalam proses ini.</figcaption></figure>
</div>
<div class="system-delivery"><h3 class="case-eyebrow">Alur sistem / Dari input hingga ditinjau</h3><ol class="system-flow"><li><span class="study-step" aria-hidden="true">01</span><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/></svg><h4>React UI</h4><code>CsatPanel.tsx</code></li><li><span class="study-step" aria-hidden="true">02</span><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01M12 10v4"/></svg><h4>API proxy</h4><code>/api/submit-csat</code></li><li><span class="study-step" aria-hidden="true">03</span><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg><h4>Validasi + penyimpanan</h4><p>Edge Function · Postgres</p></li><li><span class="study-step" aria-hidden="true">04</span><svg class="study-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M8 16v2M12 13v5M16 15v3"/></svg><h4>Laporan untuk pengelola</h4><code>csat.sql</code></li></ol><ul class="release-receipt"><li>Fokus &amp; penutupan sudah diperiksa</li><li>Pengiriman &amp; percobaan ulang sudah diperiksa</li><li>11 pemeriksaan CI lolos</li></ul><p class="case-caption">Verifikasi ini tercatat dalam catatan rilis proyek, bukan hasil QA baru.</p></div>
</div>
</section>

<section id="learning" class="case-learning"><div class="case-reading-wrap"><div class="measurement-panel">
<header><p class="case-eyebrow">Pengukuran</p><h2>Apakah pengguna menyelesaikan latihan, lalu kembali lagi?</h2></header>
<div class="measurement-claims"><div><p class="case-eyebrow">Sudah diterapkan</p><p>Latihan · Hasil · Feedback · Pelacakan event.</p></div><div><p class="case-eyebrow">Belum diklaim</p><p>Peningkatan kemampuan mengetik atau retensi pengguna.</p></div></div>
<h3 class="case-eyebrow">Peta event / Definisi yang sudah diterapkan</h3><ol class="event-map"><li><span>01</span><h4>Buka latihan</h4><code>practice_viewed</code></li><li><span>02</span><h4>Mulai tes</h4><code>test_started</code></li><li><span>03</span><h4>Selesaikan tes</h4><code>test_completed</code></li><li><span>04</span><h4>Latihan lagi</h4><code>practice_resumed</code></li></ol>
<p class="measurement-note">Penyelesaian latihan perlu dicatat sebagai event karena hasilnya tetap muncul di URL yang sama.</p><p class="case-caption">Definisi event sudah diterapkan. Tidak ada angka hasil pengguna yang ditampilkan.</p>
</div></div></section>

<section id="next-question" class="case-chapter case-next-question"><div class="case-reading-wrap next-question-grid">
<div><p class="case-eyebrow">Yang ingin diuji</p><h2>Teknik mengetik—<br />atau mengingat kode?</h2><p>Jika teknik mengetik lebih dominan → coba latihan terarah.<br />Jika mengingat kode lebih dominan → tinjau kembali cakupannya.</p></div>
<div class="research-protocol"><div><p class="case-eyebrow">01 / Salin</p><pre>const max = xs =&gt;
  Math.max(...xs);</pre><p>Amati teknik mengetik &amp; kesalahannya.</p></div><div><p class="case-eyebrow">02 / Tulis sendiri</p><h3>Kembalikan angka terbesar dari sebuah list.</h3><p>Amati ingatan &amp; proses berpikirnya.</p></div><p class="case-caption research-status">Rencana studi, belum menjadi riset yang selesai dilakukan.</p></div>
</div></section>
