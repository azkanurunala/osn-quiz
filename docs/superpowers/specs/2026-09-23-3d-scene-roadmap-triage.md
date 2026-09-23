# 3D Scene Roadmap — Triage Across All Sub-Bab (IPA + MTK)

Status: Draft for review
Date: 2026-09-23
Scope: All 81 unique IPA sub-bab + 94 unique MTK sub-bab currently in `osn-app/public/data/_manifest.json`.

## Purpose

This is **not** a technical spec — it's a triage pass answering one question per sub-bab: *does a 3D scene add real understanding here, or would it be a forced gimmick on top of a topic that's inherently abstract/numeric/list-based?* It produces a prioritized batch list for future spec→plan→build cycles (the same cycle already used for `ipa-05a` and, in progress, `ipa-05b/c/d/e/k`).

Caveat: `ipa-07` through `ipa-19` (newer consolidated-chapter content files that appeared mid-session) aren't in `_manifest.json` yet, so they aren't triaged here — they need a pass once they're registered in the manifest.

## Tiers

- **A — High value.** Topic has real spatial/mechanical/anatomical structure. Seeing it in 3D (rotate, look inside, watch it move) teaches something a static 2D diagram can't.
- **B — Optional.** Could be done in 3D, but a good 2D diagram already conveys it almost as well. Lower priority — only worth it once the A-tier backlog is thin.
- **C — Stays text/2D.** Abstract, numeric, or list-based. A 3D scene here would be decoration, not pedagogy — keep the existing HTML/SVG format from `template-html-interaktif.md`.

## Already scoped (not re-triaged here)

- `ipa-05a` — Tata Surya — **shipped**.
- `ipa-05b`, `ipa-05c`, `ipa-05d`, `ipa-05e`, `ipa-05k` — Batch 2, spec approved, plan in progress (`docs/superpowers/specs/2026-09-23-astronomy-3d-scenes-batch2-design.md`).
- `ipa-02a` through `ipa-02n` (all 14 Tubuh Manusia & Kesehatan sub-bab) — Batch 3, scope already decided (all 14, including the less-spatial ones like Gizi/Penyakit/Kebersihan, per explicit user choice) — own brainstorm cycle when Batch 2 ships.

## IPA — remaining sub-bab

### Ch. 01 — Makhluk Hidup & Lingkungan
| Kode | Topik | Tier | Catatan |
|---|---|---|---|
| ipa-01a | Ciri-ciri Makhluk Hidup | C | Daftar karakteristik, bukan struktur spasial |
| ipa-01b | Klasifikasi Hewan | C | Sortir/kategori, ilustrasi 2D cukup |
| ipa-01c | Klasifikasi Tumbuhan | C | sda |
| ipa-01d | Struktur & Fungsi Bagian Tumbuhan | **A** | Model 3D akar/batang/daun/bunga — struktur spasial nyata |
| ipa-01e | Reproduksi Tumbuhan | C | Proses, diagram alur 2D sudah jelas |
| ipa-01f | Reproduksi Hewan | C | sda |
| ipa-01g | Daur Hidup Hewan & Metamorfosis | B | Siklus — bisa 3D tiap tahap, tapi diagram lingkaran 2D sudah cukup |
| ipa-01h | Adaptasi Hewan | C | |
| ipa-01i | Adaptasi Tumbuhan | C | |
| ipa-01j | Ekosistem & Komponen | B | Scene 3D "diorama" mungkin menarik tapi bukan kebutuhan inti |
| ipa-01k | Rantai & Jaring Makanan | C | Graf/jaringan — lebih jelas sebagai diagram 2D |
| ipa-01l | Simbiosis | C | |
| ipa-01m | Pelestarian Makhluk Hidup | C | |
| ipa-01n | Klasifikasi 5 Kingdom | C | |
| ipa-01o | Sel & Jaringan | **A** | Model sel 3D — organel punya struktur spasial nyata, topik klasik utk 3D |
| ipa-01p | Fotosintesis & Metabolisme | B | Penampang daun 3D + jalur cahaya, nilai sedang |
| ipa-01q | Respirasi Sel & Fermentasi | C | Proses kimia, bukan spasial |
| ipa-01r | Populasi, Komunitas & Siklus Materi | C | |

### Ch. 03 — Gaya, Gerak, Energi, Listrik, Magnet
| Kode | Topik | Tier | Catatan |
|---|---|---|---|
| ipa-03a | Pengertian & Jenis Gaya | B | Vektor gaya bisa 3D, tapi panah 2D sudah jelas |
| ipa-03b | Gerak | B | Lintasan gerak — nilai sedang |
| ipa-03c | Pengaruh Gaya terhadap Benda | B | |
| ipa-03d | Pesawat Sederhana: Tuas | **A** | Mekanisme 3D — genuinely mekanik/spasial |
| ipa-03e | Pesawat Sederhana: Katrol | **A** | sda |
| ipa-03f | Pesawat Sederhana: Bidang Miring | **A** | sda |
| ipa-03g | Pesawat Sederhana: Roda Berporos | **A** | sda |
| ipa-03h | Energi & Bentuk-bentuknya | C | Konsep abstrak/daftar |
| ipa-03i | Perubahan Energi | C | |
| ipa-03j | Listrik (Rangkaian Seri & Paralel) | **A** | Diagram rangkaian 3D — tata letak spasial nyata membantu |
| ipa-03k | Konduktor & Isolator | C | |
| ipa-03l | Magnet | **A** | Garis medan magnet 3D — visual klasik |
| ipa-03m | Momentum & Impuls | B | Animasi tumbukan, nilai sedang |
| ipa-03n | Tekanan Zat | B | Demo tekanan dalam wadah, nilai sedang |
| ipa-03o | Listrik Statis | B | Visualisasi muatan, nilai sedang |
| ipa-03p | Induksi Elektromagnetik | B | Demo kumparan+magnet, nilai sedang |

### Ch. 04 — Cahaya, Bunyi, Suhu, Zat
| Kode | Topik | Tier | Catatan |
|---|---|---|---|
| ipa-04a | Sifat-sifat Cahaya | B | Diagram sinar bisa 3D, nilai sedang |
| ipa-04b | Cermin (Datar, Cekung, Cembung) | **A** | Ray-tracing pemantulan 3D — visual optik klasik |
| ipa-04c | Lensa & Pembiasan Cahaya | **A** | sda, pembiasan lewat lensa |
| ipa-04d | Penguraian Cahaya (Dispersi) | **A** | Prisma memecah cahaya jadi pelangi — sangat visual |
| ipa-04e | Sifat-sifat Bunyi | C | Gelombang suara lebih abstrak/audio |
| ipa-04f | Pemantulan Bunyi (Gaung & Gema) | B | Geometri pantulan, nilai sedang |
| ipa-04g | Perambatan Bunyi | C | |
| ipa-04h | Suhu & Termometer | C | |
| ipa-04i | Perpindahan Panas | B | Arah aliran panas 3D (konduksi/konveksi/radiasi), nilai sedang |
| ipa-04j | Wujud Zat | B | Model partikel 3D (padat/cair/gas), nilai sedang-tinggi |
| ipa-04k | Perubahan Wujud Zat | B | sda, transisi partikel |
| ipa-04l | Sifat Fisika & Kimia Zat | C | |
| ipa-04m | Pemisahan Campuran | C | |
| ipa-04n | Larutan, Koloid, Suspensi | C | |
| ipa-04o | Gelombang Mekanik | B | Animasi gelombang 3D, nilai sedang |
| ipa-04p | Atom & Partikel | **A** | Model atom 3D (inti + kulit elektron) — visual klasik |

### Ch. 05 — Bumi & Antariksa (sisa di luar Batch 1-2)
| Kode | Topik | Tier | Catatan |
|---|---|---|---|
| ipa-05f | Cuaca, Iklim, Musim | C | Konsep, terhubung ke 05c tapi bukan objek spasial sendiri |
| ipa-05g | Batuan (Beku, Sedimen, Metamorf) | B | Sampel 3D, nilai sedang |
| ipa-05h | Tanah — Jenis, Lapisan | **A** | Cutaway lapisan tanah — pola sama persis dengan 05b (reuse `ConcentricLayers`!) |
| ipa-05i | Sumber Daya Alam | C | |
| ipa-05j | Siklus Air | **A** | Diagram siklus air 3D (evaporasi→kondensasi→presipitasi) — ikonik & spasial |
| ipa-05l | Pelestarian Lingkungan | C | |
| ipa-05m | Pemanasan Global & Efek Rumah Kaca | B | Visualisasi radiasi terperangkap, nilai sedang |
| ipa-05n | Bencana Alam | B | Mekanisme gempa/gunung meletus/tsunami, nilai sedang |
| ipa-05o | Bintang & Galaksi | **A** | Perluasan alami dari Tata Surya, sangat visual |

### Ch. 06 — Metode Ilmiah & Keanekaragaman
| Kode | Topik | Tier | Catatan |
|---|---|---|---|
| ipa-06a | Keterampilan & Metode Ilmiah | C | Proses, bukan objek |
| ipa-06b | Keanekaragaman Hayati | C | Informasional |

## MTK — semua sub-bab

### Ch. 01 Bilangan, Ch. 02 Pecahan/Desimal, Ch. 06 Aritmetika Sosial, Ch. 07 Statistika, Ch. 08 Aljabar
**Semua Tier C.** Konsep angka/abstrak (operasi hitung, FPB/KPK, bilangan prima, pecahan, desimal, persen, untung-rugi, diskon, bunga, pajak, mean/median, aljabar). Representasi terbaik tetap notasi angka + diagram 2D (garis bilangan, pie chart, bar chart) — 3D tidak menambah pemahaman untuk konsep numerik murni.

### Ch. 03 — Bangun Datar (2D geometry)
**Tier B (rendah prioritas) untuk semua 13 sub-bab** (03a–03m: jenis bangun datar, keliling, luas persegi/segitiga/lingkaran, bangun gabungan, jenis & jumlah sudut). Bangun datar **secara definisi adalah 2D** — merender di scene 3D tidak menambah nilai dibanding diagram 2D yang bersih. Pengecualian kecil: 03l/03m (sudut) bisa dapat sedikit nilai dari visualisasi sudut 3D, tapi tetap rendah prioritas.

### Ch. 04 — Bangun Ruang (3D solid geometry) — **titik terkuat MTK buat 3D**
| Kode | Topik | Tier | Catatan |
|---|---|---|---|
| mtk-04a | Elemen Bangun Ruang | **A** | Pengenalan bentuk 3D dasar |
| mtk-04b | Volume Kubus | **A** | Model 3D interaktif, lihat langsung volumenya |
| mtk-04c | Volume Balok | **A** | sda |
| mtk-04d | Volume Prisma & Limas | **A** | sda |
| mtk-04e | Volume Tabung | **A** | sda |
| mtk-04f | Volume Kerucut & Bola | **A** | sda |
| mtk-04g | Luas Permukaan Kubus | **A** | Bisa reuse model yang sama dgn 04b, highlight permukaan |
| mtk-04h | Luas Permukaan Balok | **A** | sda |
| mtk-04i | Luas Permukaan Prisma & Limas | **A** | sda |
| mtk-04j | Luas Permukaan Tabung | **A** | sda |
| mtk-04k | Jaring-Jaring Bangun Ruang | **A** | **Prioritas tertinggi** — animasi lipat/bentang jaring-jaring ke bangun 3D, ga bisa digantikan diagram 2D sama sekali |
| mtk-04l | Bangun Ruang Gabungan | **A** | Kombinasi model dari 04b-04f |
| mtk-04m | Aplikasi Kapasitas Bangun Ruang | B | Soal cerita — model 3D membantu tapi fokusnya hitungan |

### Ch. 05 — Pengukuran/Satuan
**Tier C untuk semua**, kecuali:
| Kode | Topik | Tier | Catatan |
|---|---|---|---|
| mtk-05g | Kecepatan, Jarak, dan Waktu | B | Animasi objek bergerak sepanjang lintasan, nilai sedang |

## Ringkasan prioritas batch berikutnya (Tier A, di luar yang sudah di-scope)

1. **MTK Bangun Ruang (mtk-04a–04l, 12 topik)** — cluster paling kuat, saling reuse 1 komponen "bangun ruang interaktif" (rotate/lihat volume/luas permukaan) + `mtk-04k` (jaring-jaring) sebagai centerpiece.
2. **IPA Optik (ipa-04b, 04c, 04d, 04p, ~4 topik)** — cluster ray-tracing/atom, saling reuse teknik sinar cahaya 3D.
3. **IPA Pesawat Sederhana (ipa-03d–03g, 4 topik)** — cluster mekanisme, saling reuse rig fisika sederhana (tuas/katrol/bidang miring/roda berporos).
4. **IPA Bumi & Antariksa sisa (ipa-05h, 05j, 05o, 3 topik)** — 05h reuse `ConcentricLayers` langsung dari Batch 2; 05o extend `solar-system.jsx`'s pattern; 05j scene baru (siklus air).
5. **IPA Listrik & Magnet (ipa-03j, 03l, 2 topik)** — rangkaian 3D + medan magnet.
6. **IPA Struktur Hayati (ipa-01d, 01o, 2 topik)** — model tumbuhan + sel.

Tier B topics (moderate value) dan Tier C (stays text) tidak masuk rencana 3D — tetap pakai format `template-html-interaktif.md` existing.

## Next step

Ini masih draft triage — belum ada spec teknis atau kode. Setelah Batch 2 (astronomi) & Batch 3 (tubuh manusia) selesai, pilih 1 cluster dari daftar prioritas di atas dan jalani siklus brainstorm → spec → plan → build yang sama.
