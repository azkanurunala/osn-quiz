---
name: osn-sd-prep
description: Generate paket pembinaan OSN/KSN SD lengkap — materi/teori + 100 soal PG per iterasi (4 opsi A-D) dengan pembahasan komprehensif analisis SETIAP pilihan A/B/C/D. Output DEFAULT HTML interaktif dengan Velo CT design + SVG diagrams (geometri, listrik, dll); alternatif .md jika diminta. Cakupan 8 bab MTK + 5 bab IPA. Use this skill SETIAP KALI user minta "buatkan soal OSN SD", "100 soal OSN SD", "modul KSN SD", "drill OSN SD", atau persiapan OSN/KSN SD. Saat dipanggil tanpa parameter, tampilkan menu interaktif dulu via markdown 13 bab + ask_user_input_v0 untuk mapel/tingkat/kelas. Tiga mode — Index, Per-Materi (1 bab teori + 100 soal PG), Komprehensif (campur lintas bab). Default tingkat 50 Kab + 30 Prov + 20 Nas. Output file di `/mnt/user-data/outputs/` lalu present_files. Selalu pakai osn-sd-prep agar kualitas pembahasan konsisten standar OSN/KSN Indonesia.
---

# OSN SD Prep — Materi, 100 Soal PG per Iterasi, Pembahasan Komprehensif

Skill ini menghasilkan **paket pembinaan OSN/KSN SD** berstruktur seperti buku pembinaan. Output per iterasi: 100 soal Pilihan Ganda dengan pembahasan yang menganalisis **semua 4 pilihan (A, B, C, D)**, bukan hanya jawaban benar.

> **Istilah**: OSN = KSN (Kompetisi Sains Nasional, rebrand sejak 2020-an). Skill menerima kedua istilah.

---

## ⭐ Aturan Mutlak (tidak boleh dilanggar)

1. **Semua soal = Pilihan Ganda (PG) 4 opsi A–D.** Tidak ada Isian. Tidak ada Uraian. 100% PG.
2. **Pembahasan WAJIB menganalisis SEMUA 4 pilihan** — A, B, C, D semua dibahas (kenapa benar atau kenapa salah, dan kesalahan/miskonsepsi apa yang menghasilkan opsi salah).
3. **100 soal per iterasi.** Bukan 5, bukan 10, bukan 25 — 100 soal penuh per pemanggilan Mode Per-Materi atau Komprehensif.
4. **Menu interaktif WAJIB ditampilkan** kalau user belum spesifik soal mapel/bab/tingkat.
5. **Output DEFAULT = HTML Interaktif** dengan Velo CT design + SVG diagrams inline untuk soal yang butuh visual (geometri, listrik, dll). Markdown `.md` adalah alternatif yang hanya digenerate kalau user eksplisit minta "format markdown" atau "format teks".

---

## 🎬 Initial Menu Workflow (KETIKA SKILL DIPANGGIL TANPA SPESIFIK)

Kalau user trigger skill tanpa menyebut bab/mapel/tingkat secara spesifik (mis. cukup bilang "buatkan soal OSN SD", "skill OSN", atau triggering frase umum), LAKUKAN URUTAN INI:

### Langkah 1: Tampilkan Menu Daftar Bab (markdown table)

Tulis dulu intro singkat + tabel lengkap 13 bab (8 MTK + 5 IPA) + opsi Komprehensif:

```markdown
Saya akan menyiapkan paket pembinaan OSN SD. Berikut daftar bab yang tersedia — silakan pilih:

### 📐 Matematika

| Kode | Bab |
|------|-----|
| MTK-01 | Bilangan & Operasi (FPB, KPK, prima, kuadrat, kubik) |
| MTK-02 | Pecahan, Desimal, dan Persen |
| MTK-03 | Geometri Datar (luas & keliling, bangun gabungan) |
| MTK-04 | Geometri Ruang (volume & luas permukaan) |
| MTK-05 | Pengukuran (konversi satuan, kecepatan, debit) |
| MTK-06 | Aritmetika Sosial (untung-rugi, diskon, perbandingan, skala) |
| MTK-07 | Statistika & Peluang (rata-rata, median, modus, peluang) |
| MTK-08 | Pola Bilangan, Logika, & Aljabar Dasar |

### 🔬 IPA

| Kode | Bab |
|------|-----|
| IPA-01 | Makhluk Hidup & Lingkungan (klasifikasi, adaptasi, ekosistem) |
| IPA-02 | Tubuh Manusia & Kesehatan (sistem organ, gizi, penyakit) |
| IPA-03 | Gaya, Gerak, dan Energi (pesawat sederhana, listrik, magnet) |
| IPA-04 | Cahaya, Bunyi, Panas, dan Sifat Zat (optik, kalor, perubahan wujud) |
| IPA-05 | Bumi, Antariksa, dan Lingkungan (tata surya, gerhana, siklus, SDA) |

### 🎯 Atau pilih Komprehensif

| Kode | Mode |
|------|------|
| KOMPR | Komprehensif — 100 soal campur lintas semua bab |
```

### Langkah 2: Tanya parameter via `ask_user_input_v0`

Pakai tool `ask_user_input_v0` dengan 3 pertanyaan:

- **Q1: "Pilih Mata Pelajaran"** — opsi: "Matematika (8 bab)", "IPA (5 bab)", "Komprehensif (campur semua)"
- **Q2: "Pilih Tingkat Kesulitan"** — opsi: "Tingkat Kabupaten saja", "Tingkat Provinsi saja", "Tingkat Nasional saja", "Campur (50 Kab + 30 Prov + 20 Nas)"
- **Q3: "Pilih Kelas Target"** — opsi: "Kelas 4 SD", "Kelas 5 SD", "Kelas 6 SD", "Campur 5-6 SD"

**Plus**, di bawah ask_user_input_v0, tulis pesan tambahan agar user juga ketik kode bab yang dipilih (mis. "MTK-02" atau "IPA-03"). Mode Komprehensif tidak perlu bab spesifik.

### Langkah 3: Tunggu jawaban user

User akan klik 3 tombol + ketik kode bab (kalau Per-Materi). Parse jawabannya:
- Kalau mapel = "Komprehensif" → langsung ke Mode Komprehensif
- Kalau mapel = MTK/IPA tapi user belum kasih kode bab → tanya lagi: "Pilih bab spesifik yang mana? (contoh: MTK-02 atau Pecahan)"
- Kalau kode bab jelas → langsung ke Mode Per-Materi

### Pengecualian (langsung skip menu)

Kalau user sudah spesifik dari awal (mis. "buatkan 100 soal MTK-02 tingkat campur kelas 5-6"), **JANGAN tampilkan menu**. Langsung ke generation.

Contoh trigger yang SKIP menu:
- "Buatkan 100 soal OSN SD MTK-02 tingkat campur"
- "Generate materi pecahan OSN SD"
- "100 soal IPA-03 kelas 6 tingkat provinsi"
- "Latihan komprehensif OSN SD 100 soal"

---

## Tiga Mode Operasi (Detail)

| Mode | Trigger | Output |
|------|---------|--------|
| **Index** | "lihat daftar materi OSN", "outline OSN SD" | 1 file `.md` peta 13 bab + cara generate per bab |
| **Per-Materi** | Bab spesifik (MTK-02, IPA-03, "pecahan", "listrik") | 1 file `.html` interaktif: Teori + 100 soal PG + diagram SVG (atau `.md` jika diminta) |
| **Komprehensif** | "komprehensif", "campur semua bab", "try out OSN" | 1 file `.html` interaktif: 100 soal PG campur lintas bab (atau `.md` jika diminta) |

---

## Output Format — HTML Interaktif (Default)

Output utama skill ini adalah **single-file HTML interaktif** dengan Velo CT design system + SVG diagrams inline. Markdown `.md` adalah alternatif (lihat bawah).

### Karakteristik HTML Interaktif

1. **Single file `.html`** — semua CSS dan JS inline. Tidak butuh internet selain font Google + Lucide icons.
2. **Velo CT design system**:
   - Fonts: DM Sans 600/700 (heading), IBM Plex Sans 400/500/600 (body)
   - Page bg: `#F8F9FB` dengan mesh + radial blobs (light glassmorphism)
   - Glass cards: rgba white 0.55/0.68/0.82 dengan blur 12/20/32px
   - CTA primary: red `#E53935`
   - Lucide icons (stroke 1.5px, bukan emoji)
   - Floating nav: pill shape di top center
3. **Interaktivitas siswa**:
   - Klik opsi A/B/C/D → terpilih (warna biru)
   - Tombol "Cek Jawaban" → reveal benar/salah (hijau/merah)
   - Otomatis muncul "Pembahasan Komprehensif" setelah cek jawaban
   - Navigasi Sebelumnya/Berikutnya per soal
   - Progress bar di bawah (% selesai)
   - Skor real-time di nav atas
   - "Lihat Hasil" di akhir → kartu skor akhir + tombol ulangi
4. **SVG diagrams inline** untuk soal yang butuh visual:
   - Geometri datar & ruang (segitiga, persegi, trapesium, lingkaran, kubus, balok, dll)
   - Rangkaian listrik (seri/paralel dengan lampu, baterai)
   - Sudut & jenisnya
   - Diagram batang/lingkaran/garis (statistika)
   - Pola gambar (untuk soal pola)
   - Pesawat sederhana (tuas, katrol, bidang miring)
   - Tata surya simple, fase bulan, siklus air
5. **Mobile responsive** — tetap usable di layar HP.
6. **Skor & state** disimpan di memori browser selama sesi (tidak persist setelah refresh, kecuali user pakai versi yang sudah punya localStorage support).

### Soal yang Butuh vs Tidak Butuh Diagram

| Topik | Butuh diagram? |
|-------|----------------|
| Geometri datar/ruang | **Ya, hampir selalu** |
| Rangkaian listrik | **Ya, hampir selalu** |
| Pola gambar | **Ya, selalu** |
| Diagram batang/lingkaran | **Ya, selalu** |
| Tata surya, fase bulan | **Ya kalau visual penting** |
| FPB, KPK, pecahan | Tidak (text cukup) |
| Soal cerita kecepatan/waktu | Tidak (text cukup) |
| IPA hafalan (klasifikasi, urutan organ) | Tidak (text cukup) |

Aturan keputusan: **kalau soal jadi ambigu atau jauh lebih sulit dipahami tanpa gambar, sertakan SVG diagram**. Kalau visual hanya dekoratif (tidak menambah kejelasan), skip.

### Detail Template HTML

Template HTML lengkap (struktur, CSS, JS, SVG library) ada di `references/template-html-interaktif.md`. **WAJIB baca file ini sebelum generate output HTML**.

### Output Markdown (Alternatif)

User bisa minta output `.md` dengan trigger eksplisit:
- "Format markdown"
- "Versi teks saja"
- "Output .md"
- "Bukan HTML"

Kalau user request `.md`, gunakan struktur yang dijelaskan di `references/template-materi.md`. Detail visual (SVG) diganti dengan deskripsi naratif lengkap atau tabel teks.

---

## Taksonomi Bab (Referensi Cepat)

### Matematika (8 Bab)

| Kode | Bab |
|------|-----|
| MTK-01 | Bilangan & Operasi |
| MTK-02 | Pecahan, Desimal, dan Persen |
| MTK-03 | Geometri Datar |
| MTK-04 | Geometri Ruang |
| MTK-05 | Pengukuran |
| MTK-06 | Aritmetika Sosial |
| MTK-07 | Statistika & Peluang |
| MTK-08 | Pola Bilangan, Logika, & Aljabar Dasar |

### IPA (5 Bab)

| Kode | Bab |
|------|-----|
| IPA-01 | Makhluk Hidup & Lingkungan |
| IPA-02 | Tubuh Manusia & Kesehatan |
| IPA-03 | Gaya, Gerak, dan Energi |
| IPA-04 | Cahaya, Bunyi, Panas, dan Sifat Zat |
| IPA-05 | Bumi, Antariksa, dan Lingkungan |

**Detail sub-topik per bab** — lihat `references/taksonomi-matematika.md` dan `references/taksonomi-ipa.md`. Baca SEBELUM generate Mode Per-Materi.

---

## Mode Per-Materi — Workflow

Output 1 file `.md` besar berisi Teori Bab + 100 soal PG self-contained.

**Langkah:**

1. **Konfirmasi parameter** — bab (kode atau nama), tingkat (Kab/Prov/Nas/Campur), kelas.

2. **Baca referensi sub-topik** untuk bab yang dipilih dari `references/taksonomi-[mapel].md`.

3. **Rencana distribusi 100 soal**:
   - **Per sub-topik**: bagi sesuai panduan distribusi di file taksonomi (sudah disusun sesuai bobot OSN)
   - **Per tingkat**: 50 Kab + 30 Prov + 20 Nas (kalau Campur). Kalau user pilih satu tingkat saja, 100% di tingkat itu.
   - **Format**: 100% PG (tidak ada Isian/Uraian).

4. **Tulis Bagian I — Materi (Teori)** dengan 6 sub-bagian:
   - A. Konsep Dasar & Definisi
   - B. Rumus & Aturan Kunci
   - C. Tipe Soal yang Sering Muncul di OSN
   - D. Strategi Penyelesaian per Tipe
   - E. Miskonsepsi Umum
   - F. Contoh Soal Terbimbing (3–5 soal lengkap)

5. **Tulis Bagian II — 100 Soal PG Lengkap**. **Setiap soal adalah paket self-contained** dengan 4 komponen:

   ```
   ### Soal [N] · [Sub-topik] · [Tingkat]

   **(1) Soal:**
   [Pertanyaan, max 3 kalimat]

   **(2) Pilihan Jawaban:**
   A. ...
   B. ...
   C. ...
   D. ...

   **(3) Jawaban:** **[opsi · nilai]**

   **(4) Pembahasan Komprehensif:**

   - **Konsep yang diuji:** [singkat]

   - **Analisis Setiap Pilihan Jawaban:**
     - **A. [pilihan A]** — [alasan benar/salah; kalau salah: kesalahan/miskonsepsi apa yang menghasilkan opsi ini]
     - **B. [pilihan B]** — [alasan]
     - **C. [pilihan C]** — [alasan]
     - **D. [pilihan D]** — [alasan]

   - **Langkah Penyelesaian (cara benar):**
     1. ...
     2. ...
     3. ...

   - **Hasil akhir:** [final answer]

   - **💭 Tips:** [strategi atau jebakan]

   ---
   ```

   **Verifikasi jawaban SEBELUM lanjut ke soal berikutnya. Kalau ragu, ganti soal.**

6. **Tulis Bagian III — Ringkasan Kunci & Refleksi**:
   - Tabel ringkasan 100 jawaban (kolom: No | Jawaban | Sub-topik | Tingkat) untuk quick reference
   - Bagian refleksi siswa (jumlah benar, sub-topik terlemah, rekomendasi lanjut)

7. **Save** ke `/mnt/user-data/outputs/osn-sd-[mapel]-[bab-slug]-lengkap.md`.

8. **Panggil `present_files`**.

9. **Ringkasan di chat** — distribusi sub-topik, tingkat aktual, rekomendasi bab lanjutan.

---

## Mode Komprehensif — Workflow

100 soal PG campur lintas semua 13 bab.

**Langkah:**

1. **Distribusi soal lintas bab** — default proporsional:
   - 8 bab Matematika × 8 soal = 64 soal MTK (1 bab dapat +1 untuk total 65)
   - 5 bab IPA × 7 soal = 35 soal IPA
   - Total = 100 soal

2. **Distribusi tingkat**: 50 Kab + 30 Prov + 20 Nas (atau sesuai pilihan user).

3. **Tulis output sama seperti Mode Per-Materi tapi**:
   - **Tanpa Bagian I (Teori)** — ini paket drill, bukan pembelajaran konsep
   - Tag tiap soal: `### Soal N · [Kode Bab] · [Sub-topik] · [Tingkat]`
   - Tabel kunci akhir punya kolom tambahan: Kode Bab

4. **Save** ke `osn-sd-komprehensif-100soal.md` dan present.

---

## Mode Index — Workflow

Output: file referensi `osn-sd-index.md` berisi peta navigasi semua bab + cara generate. Cocok kalau user mau "lihat dulu daftar lengkap sebelum pilih".

Struktur Index:
- Header: `# OSN SD — Paket Pembinaan Lengkap (Index)`
- Daftar semua 13 bab dengan deskripsi 1 kalimat
- Rekomendasi urutan belajar untuk kelas 5–6
- Cara generate (trigger phrases per mode)
- Estimasi total paket lengkap (13 bab × 100 soal + 100 komprehensif = 1.400 soal)

---

## Karakteristik Tingkat Kesulitan

### Tingkat Sekolah/Kabupaten (KSN-K) — 50% dari 100 soal
- Kognitif C2–C3 (pemahaman, aplikasi langsung)
- 1–2 langkah penyelesaian
- Angka "ramah" untuk anak SD
- Konteks soal cerita familiar

### Tingkat Provinsi (KSN-P) — 30% dari 100 soal
- Kognitif C3–C4 (aplikasi non-rutin, analisis)
- Multi-step (3–5 langkah)
- Konsep gabungan dari 2 sub-topik
- Soal cerita berlapis dengan informasi yang harus difilter

### Tingkat Nasional (KSN) — 20% dari 100 soal
- Kognitif C4–C5 (analisis, evaluasi, sintesis)
- Problem solving non-rutin, butuh insight
- Multiple konsep (3+ topik)
- Sering memerlukan pemodelan, asumsi, atau pendekatan kreatif

---

## Format Soal — Pilihan Ganda

**SEMUA soal adalah Pilihan Ganda 4 opsi A–D. Tidak ada Isian. Tidak ada Uraian.**

### Aturan PG

- 4 opsi (A–D), satu jawaban yang paling tepat
- Panjang opsi seragam (tidak ada yang ekstrem panjang/pendek)
- Urutkan numerik dari kecil ke besar kalau berupa angka
- Hindari "Semua benar" / "Semua salah" / "Tidak ada yang benar"

### Distraktor Berkualitas

Distraktor (opsi salah) bukan ngawur — harus **hasil kesalahan spesifik** yang masuk akal:

1. **Lupa konversi satuan** — mis. menghitung dalam meter padahal jawabannya km
2. **Salah urutan operasi** — mis. menghitung kiri-ke-kanan tanpa prioritas kurung-pangkat-kali-bagi
3. **Salah rumus** — mis. pakai keliling padahal yang ditanya luas
4. **Lupa langkah tambahan** — mis. lupa tambah istirahat di soal kecepatan
5. **Miskonsepsi konseptual** — mis. di IPA, mengira punuk unta menyimpan air

Tiap distraktor harus ada **alasan pedagogis** kenapa siswa mungkin memilihnya.

---

## Pembahasan Komprehensif (KRITIS)

Pembahasan **HARUS** punya bagian **"Analisis Setiap Pilihan Jawaban"** yang membahas A, B, C, D semuanya. Format:

```
- **Analisis Setiap Pilihan Jawaban:**
  - **A. [isi pilihan A]** — [analisis 1–2 kalimat]
  - **B. [isi pilihan B]** — [analisis]
  - **C. [isi pilihan C]** — [analisis]
  - **D. [isi pilihan D]** — [analisis]
```

### Untuk Opsi BENAR:
Jelaskan kenapa opsi ini benar — singkat tapi jelas, sebut rumus/konsep yang dipakai.

Contoh:
> **D. 12 kantong** — Benar. FPB(24, 36) = 2² × 3 = 12. Setiap kantong berisi 24÷12 = 2 apel + 36÷12 = 3 jeruk, semua isi sama.

### Untuk Opsi SALAH:
Identifikasi **kesalahan spesifik** yang menghasilkan opsi ini, lalu jelaskan kenapa cara itu keliru.

Contoh:
> **A. 6 kantong** — Salah. Ini muncul kalau siswa menghitung FPB dengan ambil faktor terbesar dari salah satu bilangan saja (6 adalah faktor terbesar dari 24 yang juga membagi 36, tapi bukan FPB sebenarnya).
>
> **B. 8 kantong** — Salah. Ini muncul kalau siswa mengira FPB = jumlah faktor persekutuan (24 dan 36 punya banyak faktor persekutuan: 1, 2, 3, 4, 6, 12 — totalnya 6 faktor; bukan 8 juga).
>
> **C. 10 kantong** — Salah. Tidak ada justifikasi matematis untuk 10 — distraktor "umpan" untuk siswa yang menebak angka di tengah.

**Untuk distraktor yang "umpan tebakan" (tidak ada salah pikir spesifik)**, akui jujur sebagai "distraktor umpan" — jangan mengarang justifikasi yang palsu.

---

## Struktur Output Lengkap (Template Per-Materi)

Output 1 file `.md` dengan urutan:

1. **Header & metadata** — judul bab, kode, distribusi tingkat, kelas target
2. **Daftar Isi** — 3 bagian utama
3. **Bagian I — Materi (Teori)** — 6 sub-bagian A–F
4. **Bagian II — 100 Soal PG Lengkap** — self-contained per soal (Soal + Pilihan + Jawaban + Pembahasan Komprehensif)
5. **Bagian III — Ringkasan Kunci & Refleksi**

Detail template lengkap ada di `references/template-materi.md`.

---

## Kriteria Kualitas (WAJIB)

1. **Akurasi matematis & ilmiah** — hitung ulang setiap soal MTK, cross-check setiap fakta IPA.
2. **Variasi sub-topik dalam 100 soal** — distribusi merata sesuai panduan taksonomi.
3. **Variasi tingkat sesuai distribusi** — 50/30/20 untuk Kab/Prov/Nas (kalau Campur).
4. **Variasi konteks soal cerita** — beragam: olahraga, perjalanan, perdagangan, alam, sekolah, rumah, sains alam.
5. **Distraktor PG masuk akal** — setiap distraktor punya alasan pedagogis.
6. **Pembahasan menganalisis SEMUA 4 opsi A–D** — tidak boleh skip salah satu.
7. **Bahasa Indonesia ramah anak SD** — jelas, tidak bertele-tele, hindari jargon dewasa.
8. **Konsistensi format heading** — `### Soal N · [Sub-topik] · [Tingkat]` dengan separator `·`.

---

## Anti-Pattern (JANGAN)

- ❌ Generate soal non-PG (Isian/Uraian) — semua HARUS PG.
- ❌ Pembahasan hanya bahas jawaban benar — WAJIB analisis semua 4 opsi.
- ❌ Generate <100 soal di Mode Per-Materi atau Komprehensif (kecuali user eksplisit minta lebih sedikit).
- ❌ Skip menu interaktif kalau parameter user belum jelas.
- ❌ Distraktor PG ngawur tanpa alasan pedagogis.
- ❌ Pembahasan satu kalimat — selalu detail langkah per langkah.
- ❌ Bahasa formal dewasa — pakai bahasa anak SD.
- ❌ Output hanya di chat tanpa simpan file — selalu tulis `.md` ke `/mnt/user-data/outputs/`.
- ❌ Skip Bagian Materi (Teori) di Mode Per-Materi.
- ❌ Generate tanpa rencana distribusi sub-topik.
- ❌ Pakai diagram gambar — output markdown, jadi semua deskripsi visual dalam teks/tabel/ASCII art.

---

## Estimasi Output Mode Per-Materi

Output 1 bab penuh = **file besar**:

- Bagian Materi (Teori): ±3.000–5.000 kata
- 100 Soal PG Lengkap (Soal + 4 Pilihan + Jawaban + Pembahasan Komprehensif inline): ±25.000–28.000 kata (±250–280 kata per soal karena pembahasan analisis 4 opsi)
- Tabel ringkasan kunci + refleksi: ±500 kata
- **Total ±29.000–34.000 kata** (~58.000–68.000 tokens output)

Ini di batas atas kapasitas. Strategi:
1. Buat dulu **kerangka lengkap** (semua heading + Bagian Materi).
2. Generate soal lengkap (self-contained 4 komponen) **bertahap dalam blok 20–25 soal**, tetap dalam satu file akhir.
3. Verifikasi konsistensi numbering dan akurasi sebelum save.

Kalau context window mendekati limit di tengah, beri tahu user dan tawarkan: "Generate sisanya di turn berikutnya dengan trigger: 'lanjutkan generate soal [bab] mulai dari nomor [N]'". JANGAN keluarkan file yang setengah jadi.

---

## Naming Convention File Output

Ekstensi sesuai format output (HTML default, MD opsional):

- Mode Index — `osn-sd-index.md` (selalu markdown)
- Mode Per-Materi — `osn-sd-[mapel]-[kode]-[slug]-lengkap.html` (atau `.md`)
  - Contoh: `osn-sd-mtk-02-pecahan-desimal-persen-lengkap.html`
  - Contoh: `osn-sd-ipa-03-gaya-gerak-energi-lengkap.html`
- Mode Komprehensif — `osn-sd-komprehensif-100soal.html` (atau `.md`)

---

## Quick Checklist Sebelum Deliver

- [ ] Menu interaktif sudah ditampilkan kalau perlu (atau parameter sudah jelas)
- [ ] Mode operasi sudah benar (Index / Per-Materi / Komprehensif)
- [ ] Rencana distribusi sub-topik dibuat di awal
- [ ] Distribusi tingkat sesuai (50/30/20 atau sesuai pilihan user)
- [ ] **Format 100% PG** — tidak ada Isian/Uraian sama sekali
- [ ] Bagian Materi (Teori) lengkap dengan 6 sub-bagian A–F (untuk Per-Materi)
- [ ] Setiap soal adalah paket self-contained dengan 4 komponen
- [ ] Heading soal pakai format `### Soal N · [Sub-topik] · [Tingkat]`
- [ ] Setiap jawaban sudah diverifikasi (MTK hitung ulang, IPA cross-check)
- [ ] **Pembahasan setiap soal menganalisis SEMUA 4 opsi A/B/C/D**
- [ ] Pembahasan punya: Konsep + Analisis 4 opsi + Langkah Penyelesaian + Hasil + Tips
- [ ] Tabel ringkasan kunci di akhir lengkap 100 baris
- [ ] Bahasa Indonesia ramah anak SD
- [ ] Variasi konteks soal cerita beragam
- [ ] File tersimpan di `/mnt/user-data/outputs/` dengan nama sesuai konvensi
- [ ] `present_files` sudah dipanggil
- [ ] Ringkasan singkat di chat

---

## Referensi yang Wajib Dibaca

Sebelum mulai generate Mode Per-Materi, **baca file referensi yang relevan**:

- `references/template-html-interaktif.md` — **WAJIB untuk output HTML (default)** — template lengkap struktur HTML + CSS Velo CT + JS interaktivitas + library SVG diagrams
- `references/taksonomi-matematika.md` — detail sub-topik per 8 bab MTK + distribusi rekomendasi 100 soal
- `references/taksonomi-ipa.md` — detail sub-topik per 5 bab IPA + distribusi rekomendasi 100 soal
- `references/template-materi.md` — template `.md` (untuk alternatif markdown output)
- `references/contoh-kualitas.md` — 3 contoh soal PG benchmark dengan analisis 4 opsi (patokan kualitas konten)

File-file ini berisi detail yang tidak muat di SKILL.md dan penting untuk hasil konsisten.
