# Analisis referensi Ribbit

Tanggal observasi: **6 September 2026**. Tujuan: memahami cara Ribbit membangun karakter dan mempresentasikan karya, kemudian memilih prinsip yang berguna untuk portofolio developer Fausta.

## Kesimpulan

Ribbit terasa khas karena bentuk, karakter, tipografi, media, dan perpindahan halaman memakai bahasa visual yang sama. Nilai referensinya adalah konsistensi art direction dan keberanian memberi karya ruang besar. Untuk fraulan.com, ekspresi tersebut perlu dipasangkan dengan informasi yang dicari perekrut: apa produknya, apa kontribusi Fausta, bagaimana keputusan teknisnya, dan di mana bukti pekerjaannya.

## Cakupan dan batas pemeriksaan

- Dibaca: Home, Projects, About, Process, Contact, satu case study representatif Hi energy, dan listing Awwwards.
- Dilihat di browser desktop: hero, beberapa posisi scroll Home, katalog, transisi ke detail, hero detail, About, Process. Form kontak dibuka sampai langkah pertama tanpa mengisi atau mengirim data.
- Dilihat pada viewport 390 × 844: hero mobile dan kontrol berbentuk mata di bagian bawah. Klik kontrol tersebut tidak menghasilkan menu terbuka yang dapat diverifikasi dalam sesi ini. Perilaku menu tidak dinyatakan lulus atau rusak secara menyeluruh.
- Diperiksa read-only: HTML publik, CSS, bundle JavaScript dan header respons halaman utama.
- Bukan audit setiap proyek, setiap state, browser lintas perangkat, WCAG lengkap, atau pengukuran performa lapangan. Privacy policy dan 404 tidak ditelusuri langsung; keberadaan 404 sebagai highlight diketahui dari Awwwards.

## Struktur informasi dan pengalaman

| Area | Observasi | Implikasi untuk fraulan.com |
| --- | --- | --- |
| Home | Intro bermasker organik, showreel, karakter 3D, kata display besar, karya pilihan, layanan, kontak | Gunakan satu pembuka ekspresif; nama dan proyek harus langsung terbaca |
| Navigasi | Link halaman utama studio dan CTA booking; saat scroll identitas berganti menjadi simbol mata | Navigasi portfolio lebih sederhana dan berlabel jelas |
| Projects | Katalog visual dua kolom dengan posisi vertikal tidak rata; judul dekat media | Tiga proyek tidak membutuhkan filter atau katalog terpisah |
| Detail Hi energy | Media dominan, konteks, deliverables, variasi hasil, still frames, credits, proyek selanjutnya | Adaptasi menjadi problem, kontribusi, keputusan, bukti, dan refleksi |
| About | Hero melengkung dengan foto tim, narasi studio, prinsip dan layanan | Personal bio dan pengalaman relevan menggantikan profil tim |
| Process | Tahap kerja dipisah menjadi panel/tombol; bahasa visual ungu lebih dominan | Tunjukkan cara berpikir lewat case study, bukan membuat halaman proses agensi |
| Contact | Detail kontak dan entry point kuesioner lima langkah | Email dan LinkedIn cukup untuk personal portfolio statis |

Sumber struktur: [Home](https://ribbit.dk/), [Projects](https://ribbit.dk/projects/), [Hi energy](https://ribbit.dk/projects/hi-energy/), [About](https://ribbit.dk/about/), [Process](https://ribbit.dk/process/), [Contact](https://ribbit.dk/contact/). Tabel adalah ringkasan observasi, bukan template halaman yang harus disalin.

## Bahasa visual

**Komposisi.** Browser memperlihatkan kontras skala: navigasi relatif kecil, media sangat besar, dan display text yang kadang melampaui viewport. Ada overlap antara karakter, teks, dan media; jarak kosong menjadi bagian dari komposisi. Ini memberi kesan studio kreatif, tetapi informasi personal yang penting sebaiknya tidak ikut keluar layar.

**Bentuk.** Bentuk oval miring, kurva, sudut media membulat dan figur lentur berulang sebagai identitas. Repetisi motif membuat interaksi terasa sengaja dirancang. Fraulan memerlukan motifnya sendiri, bukan sekadar mengganti logo di geometri yang sama.

**Warna dan font.** CSS publik mendefinisikan FK Grotesk Neue untuk teks dan FK T Echo Extra Condensed untuk display. Warna yang terlihat pada CSS mencakup `#FAFAFA`, `#A88BFA`, `#FFD948`, serta varian hijau, ungu gelap dan netral. Jadi palet implementasi lebih luas daripada dua warna sorotan. Font file tersedia bukan berarti boleh dipakai ulang. [CSS Ribbit](https://ribbit.dk/Assets/Css/global.css?v=23_1a)

**Motion.** Sesi browser menunjukkan pembukaan berlapis, konten yang masuk bertahap dan bentuk transisi saat berpindah proyek. Gerak merupakan bagian dari identitas studio. Timing eksak tidak diukur; screenshot saat transisi bukan bukti konten permanen hilang. Untuk portfolio, entrance singkat dan perpindahan yang tidak menghalangi membaca lebih berguna daripada interlude panjang.

**Media.** Ilustrasi/karakter dan video hasil kerja menghasilkan sebagian besar daya tarik. Mengganti semuanya dengan kotak CSS akan menghilangkan nilai referensi. Padanan terbaik untuk Fausta adalah screenshot asli produk, detail alur, dan rekaman demo pendek yang jelas.

## Bukti teknologi dan tingkat keyakinan

| Teknologi/lapisan | Bukti | Kesimpulan yang aman |
| --- | --- | --- |
| GSAP | Banner `GSAP 3.13.0` dan pemakaian `gsap.defaults` di bundle | GSAP ada dalam bundle publik; versi teramati 3.13.0 |
| Lottie | Implementasi player dan markup intro bertipe `lottie`, sumber JSON | Animasi Lottie digunakan pada intro |
| Custom JavaScript | Fungsi `Router`, objek `GLB`, event perubahan halaman, `history.pushState` | Ada routing/transisi custom; bukan bukti React atau Next.js |
| CSS dan font lokal | `/Assets/Css/global.css`, `@font-face` WOFF/WOFF2 | Styling dan font dilayani sebagai aset lokal |
| Prismic media | `images.prismic.io` dan `ribbit.cdn.prismic.io` dalam HTML | Prismic dipakai sebagai asal media; CMS editorial Prismic masuk akal tetapi dashboard/build pipeline tidak diverifikasi |
| Video | Sumber MP4 pada HTML dan kode Hls dalam bundle | Media video dan dukungan HLS tersedia; tidak berarti semua video memakai HLS |
| Hosting | Header `Server: Apache`, `Via` Varnish, `X-Varnish` | Lapisan respons teramati; provider dan origin backend belum diketahui |
| Analytics | Script Google tag manager `/gtag/js` pada HTML | Ada integrasi Google tag; kebutuhan tracking Fraulan tidak otomatis mengikuti |
| ScrollTrigger | String muncul dalam core GSAP | Tidak cukup membuktikan plugin ini mengendalikan scroll aktual |
| React/Next/Webflow/Three.js/Lenis/Barba | Tidak ditemukan bukti kuat dalam pemeriksaan terbatas | Jangan menyebut salah satunya sebagai stack Ribbit atau memastikan tidak dipakai sama sekali |

Sumber langsung: [HTML Home](https://ribbit.dk/), [bundle JavaScript](https://ribbit.dk/Assets/Js/min.js?v=23_1a), [CSS](https://ribbit.dk/Assets/Css/global.css?v=23_1a). Pemeriksaan bundle bersifat identifikasi signature, bukan reverse engineering penuh. Nilai header dapat berubah dan tidak membuktikan aplikasi memakai PHP atau database tertentu.

[Listing Awwwards](https://www.awwwards.com/sites/ribbit) mencatat Site of the Day pada 24 November 2025 dengan skor 7.48, kredit Frederik Hansen dan Michael Vestergaard, serta tag GSAP, Lottie, dan Cinema 4D. Cinema 4D adalah petunjuk produksi aset, bukan bukti renderer 3D browser. Listing juga menyoroti video player, process, mobile dropdown, page transition, intro/scroll, booking, footer, burger menu, dan 404. Nilai dev yang ditampilkan meliputi animasi/transisi 8.20 dan aksesibilitas 6.60; ini penilaian juri historis, bukan audit teknis sesi ini atau jaminan kelayakan aksesibilitas sekarang.

## Yang diadaptasi dan yang diganti

| Prinsip Ribbit | Adaptasi original |
| --- | --- |
| Karya mendapat panggung besar | Screenshot produk 16:10 dan narasi kontribusi tepat di bawahnya |
| Karakter visual konsisten | Sans besar, cobalt, sudut 16px, dan gerak frame yang merapat |
| Gerak memperjelas identitas | Hero screenshot bergeser 12px ke posisi final; hanya sekali |
| Halaman detail mengembangkan cerita | Case study teknis ringkas dengan kontribusi individual jelas |
| Proses membangun kepercayaan | Keputusan dan trade-off nyata di dalam setiap case study |
| Kontak menyatu dengan identitas | Footer personal dengan nama lengkap, email, dan LinkedIn |

Tidak diadaptasi: maskot, logo, oval signature, font proprietary, kombinasi ungu/kuning sebagai tema, layanan agensi, form lima langkah, jam studio, transisi pengunci layar, dan video autoplay berat. Ini keputusan kesesuaian kebutuhan, bukan penilaian bahwa pola tersebut salah untuk Ribbit.

## Risiko yang perlu ditangani di implementasi

1. **Website terlalu teatrikal:** nama, peran dan View work terlihat sebelum animasi selesai; tidak ada loader wajib.
2. **Proyek hanya menjadi poster:** setiap teaser punya kontribusi atau status yang konkret; dua proyek utama memiliki detail tersendiri.
3. **Tampilan generik setelah motion dikurangi:** kualitas tetap datang dari proporsi media, ritme layout, typography, dan aset asli.
4. **Kredibilitas berlebihan:** bedakan capaian tim, kontribusi Fausta, fitur produk, dan impact yang belum diukur.
5. **Berat pada mobile:** poster dulu, video dimuat setelah aksi; native scrolling; semua gerak punya reduced-motion fallback.

Riset dihentikan setelah struktur utama, signature teknologi, dan bukti konten cukup untuk keputusan portfolio. Ketidakpastian di atas tidak perlu dijawab dengan menebak stack tersembunyi.
