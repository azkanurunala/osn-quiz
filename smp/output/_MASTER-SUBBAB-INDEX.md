# OSN SMP Prep — MASTER SUB-BAB INDEX

> Pemecahan lanjutan dari [_MASTER-INDEX.md](_MASTER-INDEX.md) — setiap bab dibedah jadi sub-bab,
> setiap sub-bab × 6 tingkat = 1 paket drill 100 soal terfokus pada satu sub-topik.
>
> **289 sub-bab × 6 tingkat = 1.734 file × 100 soal PG = 173.400 soal terfokus**
>
> Setiap file: 100 soal PG dengan analisis 4 opsi (sama standar mutu dengan MASTER-INDEX),
> tapi 100% materinya digali di satu sub-bab → drill mendalam per sub-topik.

---

## Konvensi Penamaan File

```
osn-smp-{mapel}-{kodeBab}{kodeSubbab}-{slug}-{tingkat}.md
```

- `mapel` = `mtk` · `fis` · `bio` · `ips`
- `kodeBab` = `01`–`10` (MTK) · `01`–`08` (FIS) · `01`–`07` (BIO) · `01`–`04` (IPS)
- `kodeSubbab` = huruf kecil `a`, `b`, `c`, … `l` (urutan sesuai taksonomi)
- `slug` = ringkas, kebab-case
- `tingkat` = `campur` · `mudah` · `sedang` · `sulit` · `mudah-sedang` · `sedang-sulit`

**Contoh:** `osn-smp-mtk-03c-spldv-substitusi-sulit.md` = MTK Bab 03 sub-bab c (SPLDV - Metode Substitusi), 100 soal tingkat Nasional saja.

Untuk konvensi tingkat (komposisi soal Kab/Prov/Nas), distribusi, dan aturan kualitas — lihat [_MASTER-INDEX.md](_MASTER-INDEX.md) dan [SKILL.md](../../osn-sd-prep-extracted/osn-sd-prep/SKILL.md).

> **Catatan:** Saat generate file sub-bab, **seluruh 100 soal harus pada sub-topik tunggal** itu — bukan campur lintas sub-bab. Variasi diciptakan melalui ragam konteks, angka, dan tipe soal khas OSN untuk sub-topik tersebut.

---

## ⛔ Aturan Anti-Duplikasi (WAJIB)

Karena seluruh 100 soal per file berada di satu sub-topik yang sama, **risiko duplikasi sangat tinggi** dan harus dicegah secara aktif.

1. **Tetap 100 soal per file** — tidak boleh dipotong jadi 50/75/dsb untuk "menghindari pengulangan". Kalau sub-topik kelihatan sempit, perluas dengan ragam konteks — bukan dengan mengurangi jumlah.
2. **Tidak boleh ada dua soal yang sama persis dalam satu file** — bukan hanya angka, tapi juga **kombinasi (konteks + angka + struktur kalimat)** harus berbeda. Reword saja ≠ soal baru.
3. **Tidak boleh sama persis dengan soal di file sub-bab tingkat lain** (mis. soal nomor 12 di `…-mudah.md` tidak boleh sama persis dengan soal nomor 12 di `…-campur.md`).
4. **Diversifikasi via 4 sumbu** — kombinasikan agar 100 soal terasa beda:
   - **Konteks**: sekolah, lab sains, olahraga, perjalanan, pasar, dapur, kebun, transportasi, alam, perayaan, industri, teknologi, lingkungan.
   - **Angka**: nilai berbeda — hindari mengulang triple/pair angka yang sama tanpa alasan.
   - **Subjek/aktor**: variasikan nama (Andi, Sari, Pak Budi, Bu Rina, kelompok, panitia, regu, perusahaan, dst).
   - **Sudut tanya**: "berapa banyak…", "yang manakah…", "jika …, maka…", "berapa selisih…", "kapan terjadi…", "manakah pernyataan benar…".
5. **Tipe soal khas OSN boleh diulang** — yang dilarang adalah **soal identik**.
6. **Verifikasi sebelum save** — scan ulang 100 soal: cek duplikasi struktur, rotasi angka, sebaran konteks.
7. **Lintas-tingkat per sub-bab** — 6 file tingkat membentuk **600 soal yang semuanya unik**. Saat generate file ke-2 dst, **baca file sub-bab tingkat sebelumnya dulu** untuk memastikan tidak ada soal yang persis sama.

---

## A · MTK Per Sub-Bab (102 sub-bab × 6 = 612 file)

Tag **`(fokus …)`** = tingkat kesulitan alami sub-topik tersebut menurut bobot OSN — bukan jumlah soal. **Setiap file sub-bab tetap 100 soal**, apa pun tag fokusnya.

### MTK-01 · Bilangan & Operasi (11 sub-bab)

**MTK-01a · Bilangan Bulat & Operasinya** (fokus Kab)
- [ ] `osn-smp-mtk-01a-bilangan-bulat-campur.md`
- [ ] `osn-smp-mtk-01a-bilangan-bulat-mudah.md`
- [ ] `osn-smp-mtk-01a-bilangan-bulat-sedang.md`
- [ ] `osn-smp-mtk-01a-bilangan-bulat-sulit.md`
- [ ] `osn-smp-mtk-01a-bilangan-bulat-mudah-sedang.md`
- [ ] `osn-smp-mtk-01a-bilangan-bulat-sedang-sulit.md`

**MTK-01b · Bilangan Pecahan & Operasinya** (fokus Kab)
- [ ] `osn-smp-mtk-01b-bilangan-pecahan-campur.md`
- [ ] `osn-smp-mtk-01b-bilangan-pecahan-mudah.md`
- [ ] `osn-smp-mtk-01b-bilangan-pecahan-sedang.md`
- [ ] `osn-smp-mtk-01b-bilangan-pecahan-sulit.md`
- [ ] `osn-smp-mtk-01b-bilangan-pecahan-mudah-sedang.md`
- [ ] `osn-smp-mtk-01b-bilangan-pecahan-sedang-sulit.md`

**MTK-01c · KPK & FPB** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01c-kpk-fpb-campur.md`
- [ ] `osn-smp-mtk-01c-kpk-fpb-mudah.md`
- [ ] `osn-smp-mtk-01c-kpk-fpb-sedang.md`
- [ ] `osn-smp-mtk-01c-kpk-fpb-sulit.md`
- [ ] `osn-smp-mtk-01c-kpk-fpb-mudah-sedang.md`
- [ ] `osn-smp-mtk-01c-kpk-fpb-sedang-sulit.md`

**MTK-01d · Bilangan Berpangkat (Eksponen)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01d-bilangan-berpangkat-campur.md`
- [ ] `osn-smp-mtk-01d-bilangan-berpangkat-mudah.md`
- [ ] `osn-smp-mtk-01d-bilangan-berpangkat-sedang.md`
- [ ] `osn-smp-mtk-01d-bilangan-berpangkat-sulit.md`
- [ ] `osn-smp-mtk-01d-bilangan-berpangkat-mudah-sedang.md`
- [ ] `osn-smp-mtk-01d-bilangan-berpangkat-sedang-sulit.md`

**MTK-01e · Bentuk Akar & Operasinya** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01e-bentuk-akar-campur.md`
- [ ] `osn-smp-mtk-01e-bentuk-akar-mudah.md`
- [ ] `osn-smp-mtk-01e-bentuk-akar-sedang.md`
- [ ] `osn-smp-mtk-01e-bentuk-akar-sulit.md`
- [ ] `osn-smp-mtk-01e-bentuk-akar-mudah-sedang.md`
- [ ] `osn-smp-mtk-01e-bentuk-akar-sedang-sulit.md`

**MTK-01f · Bilangan Rasional & Irasional** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01f-rasional-irasional-campur.md`
- [ ] `osn-smp-mtk-01f-rasional-irasional-mudah.md`
- [ ] `osn-smp-mtk-01f-rasional-irasional-sedang.md`
- [ ] `osn-smp-mtk-01f-rasional-irasional-sulit.md`
- [ ] `osn-smp-mtk-01f-rasional-irasional-mudah-sedang.md`
- [ ] `osn-smp-mtk-01f-rasional-irasional-sedang-sulit.md`

**MTK-01g · Notasi Ilmiah / Bentuk Baku** (fokus Kab)
- [ ] `osn-smp-mtk-01g-notasi-ilmiah-campur.md`
- [ ] `osn-smp-mtk-01g-notasi-ilmiah-mudah.md`
- [ ] `osn-smp-mtk-01g-notasi-ilmiah-sedang.md`
- [ ] `osn-smp-mtk-01g-notasi-ilmiah-sulit.md`
- [ ] `osn-smp-mtk-01g-notasi-ilmiah-mudah-sedang.md`
- [ ] `osn-smp-mtk-01g-notasi-ilmiah-sedang-sulit.md`

**MTK-01h · Aturan Pangkat Lanjut (Pangkat Negatif, Nol, Pecahan)** (fokus Prov)
- [ ] `osn-smp-mtk-01h-pangkat-lanjut-campur.md`
- [ ] `osn-smp-mtk-01h-pangkat-lanjut-mudah.md`
- [ ] `osn-smp-mtk-01h-pangkat-lanjut-sedang.md`
- [ ] `osn-smp-mtk-01h-pangkat-lanjut-sulit.md`
- [ ] `osn-smp-mtk-01h-pangkat-lanjut-mudah-sedang.md`
- [ ] `osn-smp-mtk-01h-pangkat-lanjut-sedang-sulit.md`

**MTK-01i · Operasi Hitung Campuran** (fokus Kab)
- [ ] `osn-smp-mtk-01i-operasi-campuran-campur.md`
- [ ] `osn-smp-mtk-01i-operasi-campuran-mudah.md`
- [ ] `osn-smp-mtk-01i-operasi-campuran-sedang.md`
- [ ] `osn-smp-mtk-01i-operasi-campuran-sulit.md`
- [ ] `osn-smp-mtk-01i-operasi-campuran-mudah-sedang.md`
- [ ] `osn-smp-mtk-01i-operasi-campuran-sedang-sulit.md`

**MTK-01j · Perbandingan Bilangan** (fokus Kab)
- [ ] `osn-smp-mtk-01j-perbandingan-bilangan-campur.md`
- [ ] `osn-smp-mtk-01j-perbandingan-bilangan-mudah.md`
- [ ] `osn-smp-mtk-01j-perbandingan-bilangan-sedang.md`
- [ ] `osn-smp-mtk-01j-perbandingan-bilangan-sulit.md`
- [ ] `osn-smp-mtk-01j-perbandingan-bilangan-mudah-sedang.md`
- [ ] `osn-smp-mtk-01j-perbandingan-bilangan-sedang-sulit.md`

**MTK-01k · Soal Cerita Bilangan** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01k-cerita-bilangan-campur.md`
- [ ] `osn-smp-mtk-01k-cerita-bilangan-mudah.md`
- [ ] `osn-smp-mtk-01k-cerita-bilangan-sedang.md`
- [ ] `osn-smp-mtk-01k-cerita-bilangan-sulit.md`
- [ ] `osn-smp-mtk-01k-cerita-bilangan-mudah-sedang.md`
- [ ] `osn-smp-mtk-01k-cerita-bilangan-sedang-sulit.md`

### MTK-02 · Aljabar & Bentuk Aljabar (10 sub-bab)

**MTK-02a · Bentuk Aljabar & Suku Sejenis** (fokus Kab)
- [ ] `osn-smp-mtk-02a-bentuk-aljabar-campur.md`
- [ ] `osn-smp-mtk-02a-bentuk-aljabar-mudah.md`
- [ ] `osn-smp-mtk-02a-bentuk-aljabar-sedang.md`
- [ ] `osn-smp-mtk-02a-bentuk-aljabar-sulit.md`
- [ ] `osn-smp-mtk-02a-bentuk-aljabar-mudah-sedang.md`
- [ ] `osn-smp-mtk-02a-bentuk-aljabar-sedang-sulit.md`

**MTK-02b · Operasi Penjumlahan & Pengurangan Aljabar** (fokus Kab)
- [ ] `osn-smp-mtk-02b-jumlah-kurang-aljabar-campur.md`
- [ ] `osn-smp-mtk-02b-jumlah-kurang-aljabar-mudah.md`
- [ ] `osn-smp-mtk-02b-jumlah-kurang-aljabar-sedang.md`
- [ ] `osn-smp-mtk-02b-jumlah-kurang-aljabar-sulit.md`
- [ ] `osn-smp-mtk-02b-jumlah-kurang-aljabar-mudah-sedang.md`
- [ ] `osn-smp-mtk-02b-jumlah-kurang-aljabar-sedang-sulit.md`

**MTK-02c · Operasi Perkalian Aljabar** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-02c-kali-aljabar-campur.md`
- [ ] `osn-smp-mtk-02c-kali-aljabar-mudah.md`
- [ ] `osn-smp-mtk-02c-kali-aljabar-sedang.md`
- [ ] `osn-smp-mtk-02c-kali-aljabar-sulit.md`
- [ ] `osn-smp-mtk-02c-kali-aljabar-mudah-sedang.md`
- [ ] `osn-smp-mtk-02c-kali-aljabar-sedang-sulit.md`

**MTK-02d · Operasi Pembagian Aljabar** (fokus Prov)
- [ ] `osn-smp-mtk-02d-bagi-aljabar-campur.md`
- [ ] `osn-smp-mtk-02d-bagi-aljabar-mudah.md`
- [ ] `osn-smp-mtk-02d-bagi-aljabar-sedang.md`
- [ ] `osn-smp-mtk-02d-bagi-aljabar-sulit.md`
- [ ] `osn-smp-mtk-02d-bagi-aljabar-mudah-sedang.md`
- [ ] `osn-smp-mtk-02d-bagi-aljabar-sedang-sulit.md`

**MTK-02e · Pemfaktoran Bentuk Aljabar (FPB & Distributif)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-02e-faktor-fpb-distributif-campur.md`
- [ ] `osn-smp-mtk-02e-faktor-fpb-distributif-mudah.md`
- [ ] `osn-smp-mtk-02e-faktor-fpb-distributif-sedang.md`
- [ ] `osn-smp-mtk-02e-faktor-fpb-distributif-sulit.md`
- [ ] `osn-smp-mtk-02e-faktor-fpb-distributif-mudah-sedang.md`
- [ ] `osn-smp-mtk-02e-faktor-fpb-distributif-sedang-sulit.md`

**MTK-02f · Pemfaktoran Selisih Dua Kuadrat** (fokus Prov)
- [ ] `osn-smp-mtk-02f-selisih-kuadrat-campur.md`
- [ ] `osn-smp-mtk-02f-selisih-kuadrat-mudah.md`
- [ ] `osn-smp-mtk-02f-selisih-kuadrat-sedang.md`
- [ ] `osn-smp-mtk-02f-selisih-kuadrat-sulit.md`
- [ ] `osn-smp-mtk-02f-selisih-kuadrat-mudah-sedang.md`
- [ ] `osn-smp-mtk-02f-selisih-kuadrat-sedang-sulit.md`

**MTK-02g · Pemfaktoran Trinomial (Kuadrat)** (fokus Prov)
- [ ] `osn-smp-mtk-02g-trinomial-campur.md`
- [ ] `osn-smp-mtk-02g-trinomial-mudah.md`
- [ ] `osn-smp-mtk-02g-trinomial-sedang.md`
- [ ] `osn-smp-mtk-02g-trinomial-sulit.md`
- [ ] `osn-smp-mtk-02g-trinomial-mudah-sedang.md`
- [ ] `osn-smp-mtk-02g-trinomial-sedang-sulit.md`

**MTK-02h · Penyederhanaan Pecahan Bentuk Aljabar** (fokus Prov)
- [ ] `osn-smp-mtk-02h-pecahan-aljabar-campur.md`
- [ ] `osn-smp-mtk-02h-pecahan-aljabar-mudah.md`
- [ ] `osn-smp-mtk-02h-pecahan-aljabar-sedang.md`
- [ ] `osn-smp-mtk-02h-pecahan-aljabar-sulit.md`
- [ ] `osn-smp-mtk-02h-pecahan-aljabar-mudah-sedang.md`
- [ ] `osn-smp-mtk-02h-pecahan-aljabar-sedang-sulit.md`

**MTK-02i · Substitusi & Evaluasi Aljabar** (fokus Kab)
- [ ] `osn-smp-mtk-02i-substitusi-aljabar-campur.md`
- [ ] `osn-smp-mtk-02i-substitusi-aljabar-mudah.md`
- [ ] `osn-smp-mtk-02i-substitusi-aljabar-sedang.md`
- [ ] `osn-smp-mtk-02i-substitusi-aljabar-sulit.md`
- [ ] `osn-smp-mtk-02i-substitusi-aljabar-mudah-sedang.md`
- [ ] `osn-smp-mtk-02i-substitusi-aljabar-sedang-sulit.md`

**MTK-02j · Soal Cerita Bentuk Aljabar** (fokus Prov)
- [ ] `osn-smp-mtk-02j-cerita-aljabar-campur.md`
- [ ] `osn-smp-mtk-02j-cerita-aljabar-mudah.md`
- [ ] `osn-smp-mtk-02j-cerita-aljabar-sedang.md`
- [ ] `osn-smp-mtk-02j-cerita-aljabar-sulit.md`
- [ ] `osn-smp-mtk-02j-cerita-aljabar-mudah-sedang.md`
- [ ] `osn-smp-mtk-02j-cerita-aljabar-sedang-sulit.md`

### MTK-03 · Persamaan & Pertidaksamaan (10 sub-bab)

**MTK-03a · PLSV (Persamaan Linear Satu Variabel)** (fokus Kab)
- [ ] `osn-smp-mtk-03a-plsv-campur.md`
- [ ] `osn-smp-mtk-03a-plsv-mudah.md`
- [ ] `osn-smp-mtk-03a-plsv-sedang.md`
- [ ] `osn-smp-mtk-03a-plsv-sulit.md`
- [ ] `osn-smp-mtk-03a-plsv-mudah-sedang.md`
- [ ] `osn-smp-mtk-03a-plsv-sedang-sulit.md`

**MTK-03b · PtLSV (Pertidaksamaan Linear Satu Variabel)** (fokus Kab)
- [ ] `osn-smp-mtk-03b-ptlsv-campur.md`
- [ ] `osn-smp-mtk-03b-ptlsv-mudah.md`
- [ ] `osn-smp-mtk-03b-ptlsv-sedang.md`
- [ ] `osn-smp-mtk-03b-ptlsv-sulit.md`
- [ ] `osn-smp-mtk-03b-ptlsv-mudah-sedang.md`
- [ ] `osn-smp-mtk-03b-ptlsv-sedang-sulit.md`

**MTK-03c · SPLDV - Metode Substitusi** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-03c-spldv-substitusi-campur.md`
- [ ] `osn-smp-mtk-03c-spldv-substitusi-mudah.md`
- [ ] `osn-smp-mtk-03c-spldv-substitusi-sedang.md`
- [ ] `osn-smp-mtk-03c-spldv-substitusi-sulit.md`
- [ ] `osn-smp-mtk-03c-spldv-substitusi-mudah-sedang.md`
- [ ] `osn-smp-mtk-03c-spldv-substitusi-sedang-sulit.md`

**MTK-03d · SPLDV - Metode Eliminasi** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-03d-spldv-eliminasi-campur.md`
- [ ] `osn-smp-mtk-03d-spldv-eliminasi-mudah.md`
- [ ] `osn-smp-mtk-03d-spldv-eliminasi-sedang.md`
- [ ] `osn-smp-mtk-03d-spldv-eliminasi-sulit.md`
- [ ] `osn-smp-mtk-03d-spldv-eliminasi-mudah-sedang.md`
- [ ] `osn-smp-mtk-03d-spldv-eliminasi-sedang-sulit.md`

**MTK-03e · SPLDV - Metode Grafik & Campuran** (fokus Prov)
- [ ] `osn-smp-mtk-03e-spldv-grafik-campur.md`
- [ ] `osn-smp-mtk-03e-spldv-grafik-mudah.md`
- [ ] `osn-smp-mtk-03e-spldv-grafik-sedang.md`
- [ ] `osn-smp-mtk-03e-spldv-grafik-sulit.md`
- [ ] `osn-smp-mtk-03e-spldv-grafik-mudah-sedang.md`
- [ ] `osn-smp-mtk-03e-spldv-grafik-sedang-sulit.md`

**MTK-03f · Persamaan Kuadrat - Faktorisasi** (fokus Prov)
- [ ] `osn-smp-mtk-03f-pers-kuadrat-faktor-campur.md`
- [ ] `osn-smp-mtk-03f-pers-kuadrat-faktor-mudah.md`
- [ ] `osn-smp-mtk-03f-pers-kuadrat-faktor-sedang.md`
- [ ] `osn-smp-mtk-03f-pers-kuadrat-faktor-sulit.md`
- [ ] `osn-smp-mtk-03f-pers-kuadrat-faktor-mudah-sedang.md`
- [ ] `osn-smp-mtk-03f-pers-kuadrat-faktor-sedang-sulit.md`

**MTK-03g · Persamaan Kuadrat - Kuadrat Sempurna & Rumus abc** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-03g-pers-kuadrat-abc-campur.md`
- [ ] `osn-smp-mtk-03g-pers-kuadrat-abc-mudah.md`
- [ ] `osn-smp-mtk-03g-pers-kuadrat-abc-sedang.md`
- [ ] `osn-smp-mtk-03g-pers-kuadrat-abc-sulit.md`
- [ ] `osn-smp-mtk-03g-pers-kuadrat-abc-mudah-sedang.md`
- [ ] `osn-smp-mtk-03g-pers-kuadrat-abc-sedang-sulit.md`

**MTK-03h · Diskriminan & Sifat Akar** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-03h-diskriminan-campur.md`
- [ ] `osn-smp-mtk-03h-diskriminan-mudah.md`
- [ ] `osn-smp-mtk-03h-diskriminan-sedang.md`
- [ ] `osn-smp-mtk-03h-diskriminan-sulit.md`
- [ ] `osn-smp-mtk-03h-diskriminan-mudah-sedang.md`
- [ ] `osn-smp-mtk-03h-diskriminan-sedang-sulit.md`

**MTK-03i · Soal Cerita SPLDV (Umur, Uang, Barang)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-03i-cerita-spldv-campur.md`
- [ ] `osn-smp-mtk-03i-cerita-spldv-mudah.md`
- [ ] `osn-smp-mtk-03i-cerita-spldv-sedang.md`
- [ ] `osn-smp-mtk-03i-cerita-spldv-sulit.md`
- [ ] `osn-smp-mtk-03i-cerita-spldv-mudah-sedang.md`
- [ ] `osn-smp-mtk-03i-cerita-spldv-sedang-sulit.md`

**MTK-03j · Soal Cerita Persamaan Kuadrat** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-03j-cerita-pers-kuadrat-campur.md`
- [ ] `osn-smp-mtk-03j-cerita-pers-kuadrat-mudah.md`
- [ ] `osn-smp-mtk-03j-cerita-pers-kuadrat-sedang.md`
- [ ] `osn-smp-mtk-03j-cerita-pers-kuadrat-sulit.md`
- [ ] `osn-smp-mtk-03j-cerita-pers-kuadrat-mudah-sedang.md`
- [ ] `osn-smp-mtk-03j-cerita-pers-kuadrat-sedang-sulit.md`

### MTK-04 · Fungsi, Relasi & Persamaan Garis Lurus (9 sub-bab)

**MTK-04a · Relasi & Fungsi (Definisi, Diagram Panah)** (fokus Kab)
- [ ] `osn-smp-mtk-04a-relasi-fungsi-campur.md`
- [ ] `osn-smp-mtk-04a-relasi-fungsi-mudah.md`
- [ ] `osn-smp-mtk-04a-relasi-fungsi-sedang.md`
- [ ] `osn-smp-mtk-04a-relasi-fungsi-sulit.md`
- [ ] `osn-smp-mtk-04a-relasi-fungsi-mudah-sedang.md`
- [ ] `osn-smp-mtk-04a-relasi-fungsi-sedang-sulit.md`

**MTK-04b · Notasi Fungsi & Nilai Fungsi** (fokus Kab)
- [ ] `osn-smp-mtk-04b-notasi-nilai-fungsi-campur.md`
- [ ] `osn-smp-mtk-04b-notasi-nilai-fungsi-mudah.md`
- [ ] `osn-smp-mtk-04b-notasi-nilai-fungsi-sedang.md`
- [ ] `osn-smp-mtk-04b-notasi-nilai-fungsi-sulit.md`
- [ ] `osn-smp-mtk-04b-notasi-nilai-fungsi-mudah-sedang.md`
- [ ] `osn-smp-mtk-04b-notasi-nilai-fungsi-sedang-sulit.md`

**MTK-04c · Domain, Kodomain, Range** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-04c-domain-kodomain-range-campur.md`
- [ ] `osn-smp-mtk-04c-domain-kodomain-range-mudah.md`
- [ ] `osn-smp-mtk-04c-domain-kodomain-range-sedang.md`
- [ ] `osn-smp-mtk-04c-domain-kodomain-range-sulit.md`
- [ ] `osn-smp-mtk-04c-domain-kodomain-range-mudah-sedang.md`
- [ ] `osn-smp-mtk-04c-domain-kodomain-range-sedang-sulit.md`

**MTK-04d · Pemetaan & Korespondensi Satu-Satu** (fokus Prov)
- [ ] `osn-smp-mtk-04d-pemetaan-korespondensi-campur.md`
- [ ] `osn-smp-mtk-04d-pemetaan-korespondensi-mudah.md`
- [ ] `osn-smp-mtk-04d-pemetaan-korespondensi-sedang.md`
- [ ] `osn-smp-mtk-04d-pemetaan-korespondensi-sulit.md`
- [ ] `osn-smp-mtk-04d-pemetaan-korespondensi-mudah-sedang.md`
- [ ] `osn-smp-mtk-04d-pemetaan-korespondensi-sedang-sulit.md`

**MTK-04e · Gradien Garis Lurus** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-04e-gradien-campur.md`
- [ ] `osn-smp-mtk-04e-gradien-mudah.md`
- [ ] `osn-smp-mtk-04e-gradien-sedang.md`
- [ ] `osn-smp-mtk-04e-gradien-sulit.md`
- [ ] `osn-smp-mtk-04e-gradien-mudah-sedang.md`
- [ ] `osn-smp-mtk-04e-gradien-sedang-sulit.md`

**MTK-04f · Persamaan Garis Lurus (y=mx+c)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-04f-persamaan-garis-campur.md`
- [ ] `osn-smp-mtk-04f-persamaan-garis-mudah.md`
- [ ] `osn-smp-mtk-04f-persamaan-garis-sedang.md`
- [ ] `osn-smp-mtk-04f-persamaan-garis-sulit.md`
- [ ] `osn-smp-mtk-04f-persamaan-garis-mudah-sedang.md`
- [ ] `osn-smp-mtk-04f-persamaan-garis-sedang-sulit.md`

**MTK-04g · Garis Sejajar & Tegak Lurus** (fokus Prov)
- [ ] `osn-smp-mtk-04g-garis-sejajar-tegak-lurus-campur.md`
- [ ] `osn-smp-mtk-04g-garis-sejajar-tegak-lurus-mudah.md`
- [ ] `osn-smp-mtk-04g-garis-sejajar-tegak-lurus-sedang.md`
- [ ] `osn-smp-mtk-04g-garis-sejajar-tegak-lurus-sulit.md`
- [ ] `osn-smp-mtk-04g-garis-sejajar-tegak-lurus-mudah-sedang.md`
- [ ] `osn-smp-mtk-04g-garis-sejajar-tegak-lurus-sedang-sulit.md`

**MTK-04h · Grafik Fungsi Linear** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-04h-grafik-linear-campur.md`
- [ ] `osn-smp-mtk-04h-grafik-linear-mudah.md`
- [ ] `osn-smp-mtk-04h-grafik-linear-sedang.md`
- [ ] `osn-smp-mtk-04h-grafik-linear-sulit.md`
- [ ] `osn-smp-mtk-04h-grafik-linear-mudah-sedang.md`
- [ ] `osn-smp-mtk-04h-grafik-linear-sedang-sulit.md`

**MTK-04i · Soal Cerita Fungsi** (fokus Prov)
- [ ] `osn-smp-mtk-04i-cerita-fungsi-campur.md`
- [ ] `osn-smp-mtk-04i-cerita-fungsi-mudah.md`
- [ ] `osn-smp-mtk-04i-cerita-fungsi-sedang.md`
- [ ] `osn-smp-mtk-04i-cerita-fungsi-sulit.md`
- [ ] `osn-smp-mtk-04i-cerita-fungsi-mudah-sedang.md`
- [ ] `osn-smp-mtk-04i-cerita-fungsi-sedang-sulit.md`

### MTK-05 · Perbandingan, Skala & Aritmetika Sosial (9 sub-bab)

**MTK-05a · Perbandingan Senilai** (fokus Kab)
- [ ] `osn-smp-mtk-05a-perbandingan-senilai-campur.md`
- [ ] `osn-smp-mtk-05a-perbandingan-senilai-mudah.md`
- [ ] `osn-smp-mtk-05a-perbandingan-senilai-sedang.md`
- [ ] `osn-smp-mtk-05a-perbandingan-senilai-sulit.md`
- [ ] `osn-smp-mtk-05a-perbandingan-senilai-mudah-sedang.md`
- [ ] `osn-smp-mtk-05a-perbandingan-senilai-sedang-sulit.md`

**MTK-05b · Perbandingan Berbalik Nilai** (fokus Kab)
- [ ] `osn-smp-mtk-05b-perbandingan-berbalik-campur.md`
- [ ] `osn-smp-mtk-05b-perbandingan-berbalik-mudah.md`
- [ ] `osn-smp-mtk-05b-perbandingan-berbalik-sedang.md`
- [ ] `osn-smp-mtk-05b-perbandingan-berbalik-sulit.md`
- [ ] `osn-smp-mtk-05b-perbandingan-berbalik-mudah-sedang.md`
- [ ] `osn-smp-mtk-05b-perbandingan-berbalik-sedang-sulit.md`

**MTK-05c · Skala Peta & Denah** (fokus Kab)
- [ ] `osn-smp-mtk-05c-skala-peta-campur.md`
- [ ] `osn-smp-mtk-05c-skala-peta-mudah.md`
- [ ] `osn-smp-mtk-05c-skala-peta-sedang.md`
- [ ] `osn-smp-mtk-05c-skala-peta-sulit.md`
- [ ] `osn-smp-mtk-05c-skala-peta-mudah-sedang.md`
- [ ] `osn-smp-mtk-05c-skala-peta-sedang-sulit.md`

**MTK-05d · Untung-Rugi & Persentase** (fokus Kab)
- [ ] `osn-smp-mtk-05d-untung-rugi-campur.md`
- [ ] `osn-smp-mtk-05d-untung-rugi-mudah.md`
- [ ] `osn-smp-mtk-05d-untung-rugi-sedang.md`
- [ ] `osn-smp-mtk-05d-untung-rugi-sulit.md`
- [ ] `osn-smp-mtk-05d-untung-rugi-mudah-sedang.md`
- [ ] `osn-smp-mtk-05d-untung-rugi-sedang-sulit.md`

**MTK-05e · Diskon, Pajak, Bruto-Tara-Netto** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-05e-diskon-pajak-bruto-campur.md`
- [ ] `osn-smp-mtk-05e-diskon-pajak-bruto-mudah.md`
- [ ] `osn-smp-mtk-05e-diskon-pajak-bruto-sedang.md`
- [ ] `osn-smp-mtk-05e-diskon-pajak-bruto-sulit.md`
- [ ] `osn-smp-mtk-05e-diskon-pajak-bruto-mudah-sedang.md`
- [ ] `osn-smp-mtk-05e-diskon-pajak-bruto-sedang-sulit.md`

**MTK-05f · Bunga Tunggal** (fokus Kab)
- [ ] `osn-smp-mtk-05f-bunga-tunggal-campur.md`
- [ ] `osn-smp-mtk-05f-bunga-tunggal-mudah.md`
- [ ] `osn-smp-mtk-05f-bunga-tunggal-sedang.md`
- [ ] `osn-smp-mtk-05f-bunga-tunggal-sulit.md`
- [ ] `osn-smp-mtk-05f-bunga-tunggal-mudah-sedang.md`
- [ ] `osn-smp-mtk-05f-bunga-tunggal-sedang-sulit.md`

**MTK-05g · Bunga Majemuk (Pengantar)** (fokus Prov)
- [ ] `osn-smp-mtk-05g-bunga-majemuk-campur.md`
- [ ] `osn-smp-mtk-05g-bunga-majemuk-mudah.md`
- [ ] `osn-smp-mtk-05g-bunga-majemuk-sedang.md`
- [ ] `osn-smp-mtk-05g-bunga-majemuk-sulit.md`
- [ ] `osn-smp-mtk-05g-bunga-majemuk-mudah-sedang.md`
- [ ] `osn-smp-mtk-05g-bunga-majemuk-sedang-sulit.md`

**MTK-05h · Tabungan & Cicilan** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-05h-tabungan-cicilan-campur.md`
- [ ] `osn-smp-mtk-05h-tabungan-cicilan-mudah.md`
- [ ] `osn-smp-mtk-05h-tabungan-cicilan-sedang.md`
- [ ] `osn-smp-mtk-05h-tabungan-cicilan-sulit.md`
- [ ] `osn-smp-mtk-05h-tabungan-cicilan-mudah-sedang.md`
- [ ] `osn-smp-mtk-05h-tabungan-cicilan-sedang-sulit.md`

**MTK-05i · Soal Cerita Aritmetika Sosial** (fokus Prov)
- [ ] `osn-smp-mtk-05i-cerita-aritmetika-sosial-campur.md`
- [ ] `osn-smp-mtk-05i-cerita-aritmetika-sosial-mudah.md`
- [ ] `osn-smp-mtk-05i-cerita-aritmetika-sosial-sedang.md`
- [ ] `osn-smp-mtk-05i-cerita-aritmetika-sosial-sulit.md`
- [ ] `osn-smp-mtk-05i-cerita-aritmetika-sosial-mudah-sedang.md`
- [ ] `osn-smp-mtk-05i-cerita-aritmetika-sosial-sedang-sulit.md`

### MTK-06 · Geometri Datar (12 sub-bab)

**MTK-06a · Garis & Sudut (Sehadap, Bersebrangan)** (fokus Kab)
- [ ] `osn-smp-mtk-06a-garis-sudut-campur.md`
- [ ] `osn-smp-mtk-06a-garis-sudut-mudah.md`
- [ ] `osn-smp-mtk-06a-garis-sudut-sedang.md`
- [ ] `osn-smp-mtk-06a-garis-sudut-sulit.md`
- [ ] `osn-smp-mtk-06a-garis-sudut-mudah-sedang.md`
- [ ] `osn-smp-mtk-06a-garis-sudut-sedang-sulit.md`

**MTK-06b · Segitiga (Jenis, Sifat, Sudut Dalam)** (fokus Kab)
- [ ] `osn-smp-mtk-06b-segitiga-jenis-sifat-campur.md`
- [ ] `osn-smp-mtk-06b-segitiga-jenis-sifat-mudah.md`
- [ ] `osn-smp-mtk-06b-segitiga-jenis-sifat-sedang.md`
- [ ] `osn-smp-mtk-06b-segitiga-jenis-sifat-sulit.md`
- [ ] `osn-smp-mtk-06b-segitiga-jenis-sifat-mudah-sedang.md`
- [ ] `osn-smp-mtk-06b-segitiga-jenis-sifat-sedang-sulit.md`

**MTK-06c · Garis Istimewa Segitiga (Tinggi, Berat, Bagi, Sumbu)** (fokus Prov)
- [ ] `osn-smp-mtk-06c-garis-istimewa-segitiga-campur.md`
- [ ] `osn-smp-mtk-06c-garis-istimewa-segitiga-mudah.md`
- [ ] `osn-smp-mtk-06c-garis-istimewa-segitiga-sedang.md`
- [ ] `osn-smp-mtk-06c-garis-istimewa-segitiga-sulit.md`
- [ ] `osn-smp-mtk-06c-garis-istimewa-segitiga-mudah-sedang.md`
- [ ] `osn-smp-mtk-06c-garis-istimewa-segitiga-sedang-sulit.md`

**MTK-06d · Keliling & Luas Segitiga** (fokus Kab)
- [ ] `osn-smp-mtk-06d-keliling-luas-segitiga-campur.md`
- [ ] `osn-smp-mtk-06d-keliling-luas-segitiga-mudah.md`
- [ ] `osn-smp-mtk-06d-keliling-luas-segitiga-sedang.md`
- [ ] `osn-smp-mtk-06d-keliling-luas-segitiga-sulit.md`
- [ ] `osn-smp-mtk-06d-keliling-luas-segitiga-mudah-sedang.md`
- [ ] `osn-smp-mtk-06d-keliling-luas-segitiga-sedang-sulit.md`

**MTK-06e · Teorema Pythagoras** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-06e-pythagoras-campur.md`
- [ ] `osn-smp-mtk-06e-pythagoras-mudah.md`
- [ ] `osn-smp-mtk-06e-pythagoras-sedang.md`
- [ ] `osn-smp-mtk-06e-pythagoras-sulit.md`
- [ ] `osn-smp-mtk-06e-pythagoras-mudah-sedang.md`
- [ ] `osn-smp-mtk-06e-pythagoras-sedang-sulit.md`

**MTK-06f · Segiempat (Persegi, Persegi Panjang, Jajargenjang)** (fokus Kab)
- [ ] `osn-smp-mtk-06f-segiempat-1-campur.md`
- [ ] `osn-smp-mtk-06f-segiempat-1-mudah.md`
- [ ] `osn-smp-mtk-06f-segiempat-1-sedang.md`
- [ ] `osn-smp-mtk-06f-segiempat-1-sulit.md`
- [ ] `osn-smp-mtk-06f-segiempat-1-mudah-sedang.md`
- [ ] `osn-smp-mtk-06f-segiempat-1-sedang-sulit.md`

**MTK-06g · Segiempat (Trapesium, Belah Ketupat, Layang-layang)** (fokus Kab)
- [ ] `osn-smp-mtk-06g-segiempat-2-campur.md`
- [ ] `osn-smp-mtk-06g-segiempat-2-mudah.md`
- [ ] `osn-smp-mtk-06g-segiempat-2-sedang.md`
- [ ] `osn-smp-mtk-06g-segiempat-2-sulit.md`
- [ ] `osn-smp-mtk-06g-segiempat-2-mudah-sedang.md`
- [ ] `osn-smp-mtk-06g-segiempat-2-sedang-sulit.md`

**MTK-06h · Lingkaran - Unsur, Sudut Pusat, Sudut Keliling** (fokus Prov)
- [ ] `osn-smp-mtk-06h-lingkaran-sudut-campur.md`
- [ ] `osn-smp-mtk-06h-lingkaran-sudut-mudah.md`
- [ ] `osn-smp-mtk-06h-lingkaran-sudut-sedang.md`
- [ ] `osn-smp-mtk-06h-lingkaran-sudut-sulit.md`
- [ ] `osn-smp-mtk-06h-lingkaran-sudut-mudah-sedang.md`
- [ ] `osn-smp-mtk-06h-lingkaran-sudut-sedang-sulit.md`

**MTK-06i · Lingkaran - Keliling & Luas** (fokus Kab)
- [ ] `osn-smp-mtk-06i-lingkaran-keliling-luas-campur.md`
- [ ] `osn-smp-mtk-06i-lingkaran-keliling-luas-mudah.md`
- [ ] `osn-smp-mtk-06i-lingkaran-keliling-luas-sedang.md`
- [ ] `osn-smp-mtk-06i-lingkaran-keliling-luas-sulit.md`
- [ ] `osn-smp-mtk-06i-lingkaran-keliling-luas-mudah-sedang.md`
- [ ] `osn-smp-mtk-06i-lingkaran-keliling-luas-sedang-sulit.md`

**MTK-06j · Garis Singgung Lingkaran** (fokus Prov)
- [ ] `osn-smp-mtk-06j-garis-singgung-campur.md`
- [ ] `osn-smp-mtk-06j-garis-singgung-mudah.md`
- [ ] `osn-smp-mtk-06j-garis-singgung-sedang.md`
- [ ] `osn-smp-mtk-06j-garis-singgung-sulit.md`
- [ ] `osn-smp-mtk-06j-garis-singgung-mudah-sedang.md`
- [ ] `osn-smp-mtk-06j-garis-singgung-sedang-sulit.md`

**MTK-06k · Tembereng, Juring, Busur** (fokus Prov)
- [ ] `osn-smp-mtk-06k-tembereng-juring-busur-campur.md`
- [ ] `osn-smp-mtk-06k-tembereng-juring-busur-mudah.md`
- [ ] `osn-smp-mtk-06k-tembereng-juring-busur-sedang.md`
- [ ] `osn-smp-mtk-06k-tembereng-juring-busur-sulit.md`
- [ ] `osn-smp-mtk-06k-tembereng-juring-busur-mudah-sedang.md`
- [ ] `osn-smp-mtk-06k-tembereng-juring-busur-sedang-sulit.md`

**MTK-06l · Soal Gabungan Geometri Datar** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-06l-gabungan-geometri-datar-campur.md`
- [ ] `osn-smp-mtk-06l-gabungan-geometri-datar-mudah.md`
- [ ] `osn-smp-mtk-06l-gabungan-geometri-datar-sedang.md`
- [ ] `osn-smp-mtk-06l-gabungan-geometri-datar-sulit.md`
- [ ] `osn-smp-mtk-06l-gabungan-geometri-datar-mudah-sedang.md`
- [ ] `osn-smp-mtk-06l-gabungan-geometri-datar-sedang-sulit.md`

### MTK-07 · Geometri Ruang (10 sub-bab)

**MTK-07a · Kubus (Sifat, Diagonal, Luas, Volume)** (fokus Kab)
- [ ] `osn-smp-mtk-07a-kubus-campur.md`
- [ ] `osn-smp-mtk-07a-kubus-mudah.md`
- [ ] `osn-smp-mtk-07a-kubus-sedang.md`
- [ ] `osn-smp-mtk-07a-kubus-sulit.md`
- [ ] `osn-smp-mtk-07a-kubus-mudah-sedang.md`
- [ ] `osn-smp-mtk-07a-kubus-sedang-sulit.md`

**MTK-07b · Balok (Sifat, Diagonal, Luas, Volume)** (fokus Kab)
- [ ] `osn-smp-mtk-07b-balok-campur.md`
- [ ] `osn-smp-mtk-07b-balok-mudah.md`
- [ ] `osn-smp-mtk-07b-balok-sedang.md`
- [ ] `osn-smp-mtk-07b-balok-sulit.md`
- [ ] `osn-smp-mtk-07b-balok-mudah-sedang.md`
- [ ] `osn-smp-mtk-07b-balok-sedang-sulit.md`

**MTK-07c · Prisma (Segitiga, Segiempat, Segilima dst.)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-07c-prisma-campur.md`
- [ ] `osn-smp-mtk-07c-prisma-mudah.md`
- [ ] `osn-smp-mtk-07c-prisma-sedang.md`
- [ ] `osn-smp-mtk-07c-prisma-sulit.md`
- [ ] `osn-smp-mtk-07c-prisma-mudah-sedang.md`
- [ ] `osn-smp-mtk-07c-prisma-sedang-sulit.md`

**MTK-07d · Limas (Segitiga, Segiempat, dst.)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-07d-limas-campur.md`
- [ ] `osn-smp-mtk-07d-limas-mudah.md`
- [ ] `osn-smp-mtk-07d-limas-sedang.md`
- [ ] `osn-smp-mtk-07d-limas-sulit.md`
- [ ] `osn-smp-mtk-07d-limas-mudah-sedang.md`
- [ ] `osn-smp-mtk-07d-limas-sedang-sulit.md`

**MTK-07e · Tabung (Luas Permukaan & Volume)** (fokus Kab)
- [ ] `osn-smp-mtk-07e-tabung-campur.md`
- [ ] `osn-smp-mtk-07e-tabung-mudah.md`
- [ ] `osn-smp-mtk-07e-tabung-sedang.md`
- [ ] `osn-smp-mtk-07e-tabung-sulit.md`
- [ ] `osn-smp-mtk-07e-tabung-mudah-sedang.md`
- [ ] `osn-smp-mtk-07e-tabung-sedang-sulit.md`

**MTK-07f · Kerucut (Luas Permukaan & Volume)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-07f-kerucut-campur.md`
- [ ] `osn-smp-mtk-07f-kerucut-mudah.md`
- [ ] `osn-smp-mtk-07f-kerucut-sedang.md`
- [ ] `osn-smp-mtk-07f-kerucut-sulit.md`
- [ ] `osn-smp-mtk-07f-kerucut-mudah-sedang.md`
- [ ] `osn-smp-mtk-07f-kerucut-sedang-sulit.md`

**MTK-07g · Bola (Luas Permukaan & Volume)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-07g-bola-campur.md`
- [ ] `osn-smp-mtk-07g-bola-mudah.md`
- [ ] `osn-smp-mtk-07g-bola-sedang.md`
- [ ] `osn-smp-mtk-07g-bola-sulit.md`
- [ ] `osn-smp-mtk-07g-bola-mudah-sedang.md`
- [ ] `osn-smp-mtk-07g-bola-sedang-sulit.md`

**MTK-07h · Jaring-jaring Bangun Ruang** (fokus Kab)
- [ ] `osn-smp-mtk-07h-jaring-jaring-campur.md`
- [ ] `osn-smp-mtk-07h-jaring-jaring-mudah.md`
- [ ] `osn-smp-mtk-07h-jaring-jaring-sedang.md`
- [ ] `osn-smp-mtk-07h-jaring-jaring-sulit.md`
- [ ] `osn-smp-mtk-07h-jaring-jaring-mudah-sedang.md`
- [ ] `osn-smp-mtk-07h-jaring-jaring-sedang-sulit.md`

**MTK-07i · Gabungan Bangun Ruang** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-07i-gabungan-bangun-ruang-campur.md`
- [ ] `osn-smp-mtk-07i-gabungan-bangun-ruang-mudah.md`
- [ ] `osn-smp-mtk-07i-gabungan-bangun-ruang-sedang.md`
- [ ] `osn-smp-mtk-07i-gabungan-bangun-ruang-sulit.md`
- [ ] `osn-smp-mtk-07i-gabungan-bangun-ruang-mudah-sedang.md`
- [ ] `osn-smp-mtk-07i-gabungan-bangun-ruang-sedang-sulit.md`

**MTK-07j · Soal Cerita Geometri Ruang** (fokus Prov)
- [ ] `osn-smp-mtk-07j-cerita-geometri-ruang-campur.md`
- [ ] `osn-smp-mtk-07j-cerita-geometri-ruang-mudah.md`
- [ ] `osn-smp-mtk-07j-cerita-geometri-ruang-sedang.md`
- [ ] `osn-smp-mtk-07j-cerita-geometri-ruang-sulit.md`
- [ ] `osn-smp-mtk-07j-cerita-geometri-ruang-mudah-sedang.md`
- [ ] `osn-smp-mtk-07j-cerita-geometri-ruang-sedang-sulit.md`

### MTK-08 · Transformasi Geometri & Kesebangunan (9 sub-bab)

**MTK-08a · Refleksi (Pencerminan)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-08a-refleksi-campur.md`
- [ ] `osn-smp-mtk-08a-refleksi-mudah.md`
- [ ] `osn-smp-mtk-08a-refleksi-sedang.md`
- [ ] `osn-smp-mtk-08a-refleksi-sulit.md`
- [ ] `osn-smp-mtk-08a-refleksi-mudah-sedang.md`
- [ ] `osn-smp-mtk-08a-refleksi-sedang-sulit.md`

**MTK-08b · Translasi (Pergeseran)** (fokus Kab)
- [ ] `osn-smp-mtk-08b-translasi-campur.md`
- [ ] `osn-smp-mtk-08b-translasi-mudah.md`
- [ ] `osn-smp-mtk-08b-translasi-sedang.md`
- [ ] `osn-smp-mtk-08b-translasi-sulit.md`
- [ ] `osn-smp-mtk-08b-translasi-mudah-sedang.md`
- [ ] `osn-smp-mtk-08b-translasi-sedang-sulit.md`

**MTK-08c · Rotasi (Perputaran)** (fokus Prov)
- [ ] `osn-smp-mtk-08c-rotasi-campur.md`
- [ ] `osn-smp-mtk-08c-rotasi-mudah.md`
- [ ] `osn-smp-mtk-08c-rotasi-sedang.md`
- [ ] `osn-smp-mtk-08c-rotasi-sulit.md`
- [ ] `osn-smp-mtk-08c-rotasi-mudah-sedang.md`
- [ ] `osn-smp-mtk-08c-rotasi-sedang-sulit.md`

**MTK-08d · Dilatasi (Perbesaran/Pengecilan)** (fokus Prov)
- [ ] `osn-smp-mtk-08d-dilatasi-campur.md`
- [ ] `osn-smp-mtk-08d-dilatasi-mudah.md`
- [ ] `osn-smp-mtk-08d-dilatasi-sedang.md`
- [ ] `osn-smp-mtk-08d-dilatasi-sulit.md`
- [ ] `osn-smp-mtk-08d-dilatasi-mudah-sedang.md`
- [ ] `osn-smp-mtk-08d-dilatasi-sedang-sulit.md`

**MTK-08e · Komposisi Transformasi** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-08e-komposisi-transformasi-campur.md`
- [ ] `osn-smp-mtk-08e-komposisi-transformasi-mudah.md`
- [ ] `osn-smp-mtk-08e-komposisi-transformasi-sedang.md`
- [ ] `osn-smp-mtk-08e-komposisi-transformasi-sulit.md`
- [ ] `osn-smp-mtk-08e-komposisi-transformasi-mudah-sedang.md`
- [ ] `osn-smp-mtk-08e-komposisi-transformasi-sedang-sulit.md`

**MTK-08f · Kesebangunan Bangun Datar** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-08f-kesebangunan-datar-campur.md`
- [ ] `osn-smp-mtk-08f-kesebangunan-datar-mudah.md`
- [ ] `osn-smp-mtk-08f-kesebangunan-datar-sedang.md`
- [ ] `osn-smp-mtk-08f-kesebangunan-datar-sulit.md`
- [ ] `osn-smp-mtk-08f-kesebangunan-datar-mudah-sedang.md`
- [ ] `osn-smp-mtk-08f-kesebangunan-datar-sedang-sulit.md`

**MTK-08g · Kekongruenan Bangun Datar** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-08g-kekongruenan-campur.md`
- [ ] `osn-smp-mtk-08g-kekongruenan-mudah.md`
- [ ] `osn-smp-mtk-08g-kekongruenan-sedang.md`
- [ ] `osn-smp-mtk-08g-kekongruenan-sulit.md`
- [ ] `osn-smp-mtk-08g-kekongruenan-mudah-sedang.md`
- [ ] `osn-smp-mtk-08g-kekongruenan-sedang-sulit.md`

**MTK-08h · Kesebangunan pada Segitiga** (fokus Prov)
- [ ] `osn-smp-mtk-08h-kesebangunan-segitiga-campur.md`
- [ ] `osn-smp-mtk-08h-kesebangunan-segitiga-mudah.md`
- [ ] `osn-smp-mtk-08h-kesebangunan-segitiga-sedang.md`
- [ ] `osn-smp-mtk-08h-kesebangunan-segitiga-sulit.md`
- [ ] `osn-smp-mtk-08h-kesebangunan-segitiga-mudah-sedang.md`
- [ ] `osn-smp-mtk-08h-kesebangunan-segitiga-sedang-sulit.md`

**MTK-08i · Penerapan Kesebangunan (Tinggi Pohon, Bayangan)** (fokus Prov)
- [ ] `osn-smp-mtk-08i-penerapan-kesebangunan-campur.md`
- [ ] `osn-smp-mtk-08i-penerapan-kesebangunan-mudah.md`
- [ ] `osn-smp-mtk-08i-penerapan-kesebangunan-sedang.md`
- [ ] `osn-smp-mtk-08i-penerapan-kesebangunan-sulit.md`
- [ ] `osn-smp-mtk-08i-penerapan-kesebangunan-mudah-sedang.md`
- [ ] `osn-smp-mtk-08i-penerapan-kesebangunan-sedang-sulit.md`

### MTK-09 · Statistika & Peluang (11 sub-bab)

**MTK-09a · Data, Penyajian, Tabel & Diagram** (fokus Kab)
- [ ] `osn-smp-mtk-09a-penyajian-data-campur.md`
- [ ] `osn-smp-mtk-09a-penyajian-data-mudah.md`
- [ ] `osn-smp-mtk-09a-penyajian-data-sedang.md`
- [ ] `osn-smp-mtk-09a-penyajian-data-sulit.md`
- [ ] `osn-smp-mtk-09a-penyajian-data-mudah-sedang.md`
- [ ] `osn-smp-mtk-09a-penyajian-data-sedang-sulit.md`

**MTK-09b · Mean (Rata-rata)** (fokus Kab)
- [ ] `osn-smp-mtk-09b-mean-campur.md`
- [ ] `osn-smp-mtk-09b-mean-mudah.md`
- [ ] `osn-smp-mtk-09b-mean-sedang.md`
- [ ] `osn-smp-mtk-09b-mean-sulit.md`
- [ ] `osn-smp-mtk-09b-mean-mudah-sedang.md`
- [ ] `osn-smp-mtk-09b-mean-sedang-sulit.md`

**MTK-09c · Median (Nilai Tengah)** (fokus Kab)
- [ ] `osn-smp-mtk-09c-median-campur.md`
- [ ] `osn-smp-mtk-09c-median-mudah.md`
- [ ] `osn-smp-mtk-09c-median-sedang.md`
- [ ] `osn-smp-mtk-09c-median-sulit.md`
- [ ] `osn-smp-mtk-09c-median-mudah-sedang.md`
- [ ] `osn-smp-mtk-09c-median-sedang-sulit.md`

**MTK-09d · Modus (Nilai Sering Muncul)** (fokus Kab)
- [ ] `osn-smp-mtk-09d-modus-campur.md`
- [ ] `osn-smp-mtk-09d-modus-mudah.md`
- [ ] `osn-smp-mtk-09d-modus-sedang.md`
- [ ] `osn-smp-mtk-09d-modus-sulit.md`
- [ ] `osn-smp-mtk-09d-modus-mudah-sedang.md`
- [ ] `osn-smp-mtk-09d-modus-sedang-sulit.md`

**MTK-09e · Kuartil & Jangkauan** (fokus Prov)
- [ ] `osn-smp-mtk-09e-kuartil-jangkauan-campur.md`
- [ ] `osn-smp-mtk-09e-kuartil-jangkauan-mudah.md`
- [ ] `osn-smp-mtk-09e-kuartil-jangkauan-sedang.md`
- [ ] `osn-smp-mtk-09e-kuartil-jangkauan-sulit.md`
- [ ] `osn-smp-mtk-09e-kuartil-jangkauan-mudah-sedang.md`
- [ ] `osn-smp-mtk-09e-kuartil-jangkauan-sedang-sulit.md`

**MTK-09f · Ukuran Penyebaran Data** (fokus Prov)
- [ ] `osn-smp-mtk-09f-penyebaran-data-campur.md`
- [ ] `osn-smp-mtk-09f-penyebaran-data-mudah.md`
- [ ] `osn-smp-mtk-09f-penyebaran-data-sedang.md`
- [ ] `osn-smp-mtk-09f-penyebaran-data-sulit.md`
- [ ] `osn-smp-mtk-09f-penyebaran-data-mudah-sedang.md`
- [ ] `osn-smp-mtk-09f-penyebaran-data-sedang-sulit.md`

**MTK-09g · Ruang Sampel & Titik Sampel** (fokus Kab)
- [ ] `osn-smp-mtk-09g-ruang-sampel-campur.md`
- [ ] `osn-smp-mtk-09g-ruang-sampel-mudah.md`
- [ ] `osn-smp-mtk-09g-ruang-sampel-sedang.md`
- [ ] `osn-smp-mtk-09g-ruang-sampel-sulit.md`
- [ ] `osn-smp-mtk-09g-ruang-sampel-mudah-sedang.md`
- [ ] `osn-smp-mtk-09g-ruang-sampel-sedang-sulit.md`

**MTK-09h · Peluang Kejadian (Frekuensi Relatif)** (fokus Kab)
- [ ] `osn-smp-mtk-09h-peluang-frekuensi-relatif-campur.md`
- [ ] `osn-smp-mtk-09h-peluang-frekuensi-relatif-mudah.md`
- [ ] `osn-smp-mtk-09h-peluang-frekuensi-relatif-sedang.md`
- [ ] `osn-smp-mtk-09h-peluang-frekuensi-relatif-sulit.md`
- [ ] `osn-smp-mtk-09h-peluang-frekuensi-relatif-mudah-sedang.md`
- [ ] `osn-smp-mtk-09h-peluang-frekuensi-relatif-sedang-sulit.md`

**MTK-09i · Peluang Teoritik** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-09i-peluang-teoritik-campur.md`
- [ ] `osn-smp-mtk-09i-peluang-teoritik-mudah.md`
- [ ] `osn-smp-mtk-09i-peluang-teoritik-sedang.md`
- [ ] `osn-smp-mtk-09i-peluang-teoritik-sulit.md`
- [ ] `osn-smp-mtk-09i-peluang-teoritik-mudah-sedang.md`
- [ ] `osn-smp-mtk-09i-peluang-teoritik-sedang-sulit.md`

**MTK-09j · Peluang Komplemen & Saling Lepas** (fokus Prov)
- [ ] `osn-smp-mtk-09j-peluang-komplemen-campur.md`
- [ ] `osn-smp-mtk-09j-peluang-komplemen-mudah.md`
- [ ] `osn-smp-mtk-09j-peluang-komplemen-sedang.md`
- [ ] `osn-smp-mtk-09j-peluang-komplemen-sulit.md`
- [ ] `osn-smp-mtk-09j-peluang-komplemen-mudah-sedang.md`
- [ ] `osn-smp-mtk-09j-peluang-komplemen-sedang-sulit.md`

**MTK-09k · Soal Cerita Statistika & Peluang** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-09k-cerita-statistika-peluang-campur.md`
- [ ] `osn-smp-mtk-09k-cerita-statistika-peluang-mudah.md`
- [ ] `osn-smp-mtk-09k-cerita-statistika-peluang-sedang.md`
- [ ] `osn-smp-mtk-09k-cerita-statistika-peluang-sulit.md`
- [ ] `osn-smp-mtk-09k-cerita-statistika-peluang-mudah-sedang.md`
- [ ] `osn-smp-mtk-09k-cerita-statistika-peluang-sedang-sulit.md`

### MTK-10 · Teori Bilangan, Pola & Kombinatorika (11 sub-bab)

**MTK-10a · KPK & FPB Lanjut** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-10a-kpk-fpb-lanjut-campur.md`
- [ ] `osn-smp-mtk-10a-kpk-fpb-lanjut-mudah.md`
- [ ] `osn-smp-mtk-10a-kpk-fpb-lanjut-sedang.md`
- [ ] `osn-smp-mtk-10a-kpk-fpb-lanjut-sulit.md`
- [ ] `osn-smp-mtk-10a-kpk-fpb-lanjut-mudah-sedang.md`
- [ ] `osn-smp-mtk-10a-kpk-fpb-lanjut-sedang-sulit.md`

**MTK-10b · Bilangan Prima & Faktorisasi Prima** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-10b-prima-faktorisasi-campur.md`
- [ ] `osn-smp-mtk-10b-prima-faktorisasi-mudah.md`
- [ ] `osn-smp-mtk-10b-prima-faktorisasi-sedang.md`
- [ ] `osn-smp-mtk-10b-prima-faktorisasi-sulit.md`
- [ ] `osn-smp-mtk-10b-prima-faktorisasi-mudah-sedang.md`
- [ ] `osn-smp-mtk-10b-prima-faktorisasi-sedang-sulit.md`

**MTK-10c · Habis Dibagi & Sifat-sifatnya** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-10c-habis-dibagi-campur.md`
- [ ] `osn-smp-mtk-10c-habis-dibagi-mudah.md`
- [ ] `osn-smp-mtk-10c-habis-dibagi-sedang.md`
- [ ] `osn-smp-mtk-10c-habis-dibagi-sulit.md`
- [ ] `osn-smp-mtk-10c-habis-dibagi-mudah-sedang.md`
- [ ] `osn-smp-mtk-10c-habis-dibagi-sedang-sulit.md`

**MTK-10d · Modulo (Pengantar)** (fokus Nas)
- [ ] `osn-smp-mtk-10d-modulo-campur.md`
- [ ] `osn-smp-mtk-10d-modulo-mudah.md`
- [ ] `osn-smp-mtk-10d-modulo-sedang.md`
- [ ] `osn-smp-mtk-10d-modulo-sulit.md`
- [ ] `osn-smp-mtk-10d-modulo-mudah-sedang.md`
- [ ] `osn-smp-mtk-10d-modulo-sedang-sulit.md`

**MTK-10e · Pola Bilangan (Aritmetika & Geometri)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-10e-pola-aritmetika-geometri-campur.md`
- [ ] `osn-smp-mtk-10e-pola-aritmetika-geometri-mudah.md`
- [ ] `osn-smp-mtk-10e-pola-aritmetika-geometri-sedang.md`
- [ ] `osn-smp-mtk-10e-pola-aritmetika-geometri-sulit.md`
- [ ] `osn-smp-mtk-10e-pola-aritmetika-geometri-mudah-sedang.md`
- [ ] `osn-smp-mtk-10e-pola-aritmetika-geometri-sedang-sulit.md`

**MTK-10f · Pola Bilangan Khusus (Segitiga, Persegi, Fibonacci)** (fokus Prov)
- [ ] `osn-smp-mtk-10f-pola-khusus-campur.md`
- [ ] `osn-smp-mtk-10f-pola-khusus-mudah.md`
- [ ] `osn-smp-mtk-10f-pola-khusus-sedang.md`
- [ ] `osn-smp-mtk-10f-pola-khusus-sulit.md`
- [ ] `osn-smp-mtk-10f-pola-khusus-mudah-sedang.md`
- [ ] `osn-smp-mtk-10f-pola-khusus-sedang-sulit.md`

**MTK-10g · Permutasi Sederhana** (fokus Prov)
- [ ] `osn-smp-mtk-10g-permutasi-campur.md`
- [ ] `osn-smp-mtk-10g-permutasi-mudah.md`
- [ ] `osn-smp-mtk-10g-permutasi-sedang.md`
- [ ] `osn-smp-mtk-10g-permutasi-sulit.md`
- [ ] `osn-smp-mtk-10g-permutasi-mudah-sedang.md`
- [ ] `osn-smp-mtk-10g-permutasi-sedang-sulit.md`

**MTK-10h · Kombinasi Sederhana** (fokus Prov)
- [ ] `osn-smp-mtk-10h-kombinasi-campur.md`
- [ ] `osn-smp-mtk-10h-kombinasi-mudah.md`
- [ ] `osn-smp-mtk-10h-kombinasi-sedang.md`
- [ ] `osn-smp-mtk-10h-kombinasi-sulit.md`
- [ ] `osn-smp-mtk-10h-kombinasi-mudah-sedang.md`
- [ ] `osn-smp-mtk-10h-kombinasi-sedang-sulit.md`

**MTK-10i · Aturan Penjumlahan & Perkalian** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-10i-aturan-jumlah-kali-campur.md`
- [ ] `osn-smp-mtk-10i-aturan-jumlah-kali-mudah.md`
- [ ] `osn-smp-mtk-10i-aturan-jumlah-kali-sedang.md`
- [ ] `osn-smp-mtk-10i-aturan-jumlah-kali-sulit.md`
- [ ] `osn-smp-mtk-10i-aturan-jumlah-kali-mudah-sedang.md`
- [ ] `osn-smp-mtk-10i-aturan-jumlah-kali-sedang-sulit.md`

**MTK-10j · Prinsip Pigeonhole (Dasar)** (fokus Nas)
- [ ] `osn-smp-mtk-10j-pigeonhole-campur.md`
- [ ] `osn-smp-mtk-10j-pigeonhole-mudah.md`
- [ ] `osn-smp-mtk-10j-pigeonhole-sedang.md`
- [ ] `osn-smp-mtk-10j-pigeonhole-sulit.md`
- [ ] `osn-smp-mtk-10j-pigeonhole-mudah-sedang.md`
- [ ] `osn-smp-mtk-10j-pigeonhole-sedang-sulit.md`

**MTK-10k · Soal Cerita Teori Bilangan** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-10k-cerita-teori-bilangan-campur.md`
- [ ] `osn-smp-mtk-10k-cerita-teori-bilangan-mudah.md`
- [ ] `osn-smp-mtk-10k-cerita-teori-bilangan-sedang.md`
- [ ] `osn-smp-mtk-10k-cerita-teori-bilangan-sulit.md`
- [ ] `osn-smp-mtk-10k-cerita-teori-bilangan-mudah-sedang.md`
- [ ] `osn-smp-mtk-10k-cerita-teori-bilangan-sedang-sulit.md`

---

## B · Fisika Per Sub-Bab (74 sub-bab × 6 = 444 file)

### FIS-01 · Pengukuran, Besaran & Satuan (9 sub-bab)

**FIS-01a · Besaran Pokok & Turunan** (fokus Kab)
- [ ] `osn-smp-fis-01a-besaran-pokok-turunan-campur.md`
- [ ] `osn-smp-fis-01a-besaran-pokok-turunan-mudah.md`
- [ ] `osn-smp-fis-01a-besaran-pokok-turunan-sedang.md`
- [ ] `osn-smp-fis-01a-besaran-pokok-turunan-sulit.md`
- [ ] `osn-smp-fis-01a-besaran-pokok-turunan-mudah-sedang.md`
- [ ] `osn-smp-fis-01a-besaran-pokok-turunan-sedang-sulit.md`

**FIS-01b · Satuan SI & Konversi** (fokus Kab)
- [ ] `osn-smp-fis-01b-satuan-si-konversi-campur.md`
- [ ] `osn-smp-fis-01b-satuan-si-konversi-mudah.md`
- [ ] `osn-smp-fis-01b-satuan-si-konversi-sedang.md`
- [ ] `osn-smp-fis-01b-satuan-si-konversi-sulit.md`
- [ ] `osn-smp-fis-01b-satuan-si-konversi-mudah-sedang.md`
- [ ] `osn-smp-fis-01b-satuan-si-konversi-sedang-sulit.md`

**FIS-01c · Alat Ukur Panjang (Mistar, Jangka Sorong, Mikrometer)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-01c-alat-ukur-panjang-campur.md`
- [ ] `osn-smp-fis-01c-alat-ukur-panjang-mudah.md`
- [ ] `osn-smp-fis-01c-alat-ukur-panjang-sedang.md`
- [ ] `osn-smp-fis-01c-alat-ukur-panjang-sulit.md`
- [ ] `osn-smp-fis-01c-alat-ukur-panjang-mudah-sedang.md`
- [ ] `osn-smp-fis-01c-alat-ukur-panjang-sedang-sulit.md`

**FIS-01d · Alat Ukur Massa & Waktu** (fokus Kab)
- [ ] `osn-smp-fis-01d-alat-ukur-massa-waktu-campur.md`
- [ ] `osn-smp-fis-01d-alat-ukur-massa-waktu-mudah.md`
- [ ] `osn-smp-fis-01d-alat-ukur-massa-waktu-sedang.md`
- [ ] `osn-smp-fis-01d-alat-ukur-massa-waktu-sulit.md`
- [ ] `osn-smp-fis-01d-alat-ukur-massa-waktu-mudah-sedang.md`
- [ ] `osn-smp-fis-01d-alat-ukur-massa-waktu-sedang-sulit.md`

**FIS-01e · Ketelitian & Notasi Ilmiah** (fokus Kab)
- [ ] `osn-smp-fis-01e-ketelitian-notasi-campur.md`
- [ ] `osn-smp-fis-01e-ketelitian-notasi-mudah.md`
- [ ] `osn-smp-fis-01e-ketelitian-notasi-sedang.md`
- [ ] `osn-smp-fis-01e-ketelitian-notasi-sulit.md`
- [ ] `osn-smp-fis-01e-ketelitian-notasi-mudah-sedang.md`
- [ ] `osn-smp-fis-01e-ketelitian-notasi-sedang-sulit.md`

**FIS-01f · Dimensi & Analisis Dimensi** (fokus Prov)
- [ ] `osn-smp-fis-01f-dimensi-campur.md`
- [ ] `osn-smp-fis-01f-dimensi-mudah.md`
- [ ] `osn-smp-fis-01f-dimensi-sedang.md`
- [ ] `osn-smp-fis-01f-dimensi-sulit.md`
- [ ] `osn-smp-fis-01f-dimensi-mudah-sedang.md`
- [ ] `osn-smp-fis-01f-dimensi-sedang-sulit.md`

**FIS-01g · Pengukuran Tunggal & Berulang** (fokus Kab–Prov)
- [ ] `osn-smp-fis-01g-pengukuran-tunggal-berulang-campur.md`
- [ ] `osn-smp-fis-01g-pengukuran-tunggal-berulang-mudah.md`
- [ ] `osn-smp-fis-01g-pengukuran-tunggal-berulang-sedang.md`
- [ ] `osn-smp-fis-01g-pengukuran-tunggal-berulang-sulit.md`
- [ ] `osn-smp-fis-01g-pengukuran-tunggal-berulang-mudah-sedang.md`
- [ ] `osn-smp-fis-01g-pengukuran-tunggal-berulang-sedang-sulit.md`

**FIS-01h · Angka Penting** (fokus Prov)
- [ ] `osn-smp-fis-01h-angka-penting-campur.md`
- [ ] `osn-smp-fis-01h-angka-penting-mudah.md`
- [ ] `osn-smp-fis-01h-angka-penting-sedang.md`
- [ ] `osn-smp-fis-01h-angka-penting-sulit.md`
- [ ] `osn-smp-fis-01h-angka-penting-mudah-sedang.md`
- [ ] `osn-smp-fis-01h-angka-penting-sedang-sulit.md`

**FIS-01i · Soal Cerita Pengukuran** (fokus Kab–Prov)
- [ ] `osn-smp-fis-01i-cerita-pengukuran-campur.md`
- [ ] `osn-smp-fis-01i-cerita-pengukuran-mudah.md`
- [ ] `osn-smp-fis-01i-cerita-pengukuran-sedang.md`
- [ ] `osn-smp-fis-01i-cerita-pengukuran-sulit.md`
- [ ] `osn-smp-fis-01i-cerita-pengukuran-mudah-sedang.md`
- [ ] `osn-smp-fis-01i-cerita-pengukuran-sedang-sulit.md`

### FIS-02 · Gerak / Kinematika (8 sub-bab)

**FIS-02a · Jarak, Perpindahan, Kelajuan, Kecepatan** (fokus Kab)
- [ ] `osn-smp-fis-02a-jarak-perpindahan-campur.md`
- [ ] `osn-smp-fis-02a-jarak-perpindahan-mudah.md`
- [ ] `osn-smp-fis-02a-jarak-perpindahan-sedang.md`
- [ ] `osn-smp-fis-02a-jarak-perpindahan-sulit.md`
- [ ] `osn-smp-fis-02a-jarak-perpindahan-mudah-sedang.md`
- [ ] `osn-smp-fis-02a-jarak-perpindahan-sedang-sulit.md`

**FIS-02b · GLB (Gerak Lurus Beraturan)** (fokus Kab)
- [ ] `osn-smp-fis-02b-glb-campur.md`
- [ ] `osn-smp-fis-02b-glb-mudah.md`
- [ ] `osn-smp-fis-02b-glb-sedang.md`
- [ ] `osn-smp-fis-02b-glb-sulit.md`
- [ ] `osn-smp-fis-02b-glb-mudah-sedang.md`
- [ ] `osn-smp-fis-02b-glb-sedang-sulit.md`

**FIS-02c · GLBB (Gerak Lurus Berubah Beraturan)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-02c-glbb-campur.md`
- [ ] `osn-smp-fis-02c-glbb-mudah.md`
- [ ] `osn-smp-fis-02c-glbb-sedang.md`
- [ ] `osn-smp-fis-02c-glbb-sulit.md`
- [ ] `osn-smp-fis-02c-glbb-mudah-sedang.md`
- [ ] `osn-smp-fis-02c-glbb-sedang-sulit.md`

**FIS-02d · Grafik v-t & s-t pada GLB** (fokus Kab–Prov)
- [ ] `osn-smp-fis-02d-grafik-glb-campur.md`
- [ ] `osn-smp-fis-02d-grafik-glb-mudah.md`
- [ ] `osn-smp-fis-02d-grafik-glb-sedang.md`
- [ ] `osn-smp-fis-02d-grafik-glb-sulit.md`
- [ ] `osn-smp-fis-02d-grafik-glb-mudah-sedang.md`
- [ ] `osn-smp-fis-02d-grafik-glb-sedang-sulit.md`

**FIS-02e · Grafik v-t & s-t pada GLBB** (fokus Prov)
- [ ] `osn-smp-fis-02e-grafik-glbb-campur.md`
- [ ] `osn-smp-fis-02e-grafik-glbb-mudah.md`
- [ ] `osn-smp-fis-02e-grafik-glbb-sedang.md`
- [ ] `osn-smp-fis-02e-grafik-glbb-sulit.md`
- [ ] `osn-smp-fis-02e-grafik-glbb-mudah-sedang.md`
- [ ] `osn-smp-fis-02e-grafik-glbb-sedang-sulit.md`

**FIS-02f · Gerak Jatuh Bebas (Pengantar)** (fokus Prov)
- [ ] `osn-smp-fis-02f-jatuh-bebas-campur.md`
- [ ] `osn-smp-fis-02f-jatuh-bebas-mudah.md`
- [ ] `osn-smp-fis-02f-jatuh-bebas-sedang.md`
- [ ] `osn-smp-fis-02f-jatuh-bebas-sulit.md`
- [ ] `osn-smp-fis-02f-jatuh-bebas-mudah-sedang.md`
- [ ] `osn-smp-fis-02f-jatuh-bebas-sedang-sulit.md`

**FIS-02g · Gerak Relatif** (fokus Prov–Nas)
- [ ] `osn-smp-fis-02g-gerak-relatif-campur.md`
- [ ] `osn-smp-fis-02g-gerak-relatif-mudah.md`
- [ ] `osn-smp-fis-02g-gerak-relatif-sedang.md`
- [ ] `osn-smp-fis-02g-gerak-relatif-sulit.md`
- [ ] `osn-smp-fis-02g-gerak-relatif-mudah-sedang.md`
- [ ] `osn-smp-fis-02g-gerak-relatif-sedang-sulit.md`

**FIS-02h · Soal Cerita Kinematika** (fokus Prov)
- [ ] `osn-smp-fis-02h-cerita-kinematika-campur.md`
- [ ] `osn-smp-fis-02h-cerita-kinematika-mudah.md`
- [ ] `osn-smp-fis-02h-cerita-kinematika-sedang.md`
- [ ] `osn-smp-fis-02h-cerita-kinematika-sulit.md`
- [ ] `osn-smp-fis-02h-cerita-kinematika-mudah-sedang.md`
- [ ] `osn-smp-fis-02h-cerita-kinematika-sedang-sulit.md`

### FIS-03 · Gaya & Hukum Newton (8 sub-bab)

**FIS-03a · Konsep Gaya & Resultan Gaya** (fokus Kab)
- [ ] `osn-smp-fis-03a-konsep-gaya-resultan-campur.md`
- [ ] `osn-smp-fis-03a-konsep-gaya-resultan-mudah.md`
- [ ] `osn-smp-fis-03a-konsep-gaya-resultan-sedang.md`
- [ ] `osn-smp-fis-03a-konsep-gaya-resultan-sulit.md`
- [ ] `osn-smp-fis-03a-konsep-gaya-resultan-mudah-sedang.md`
- [ ] `osn-smp-fis-03a-konsep-gaya-resultan-sedang-sulit.md`

**FIS-03b · Hukum Newton I (Inersia)** (fokus Kab)
- [ ] `osn-smp-fis-03b-newton-1-campur.md`
- [ ] `osn-smp-fis-03b-newton-1-mudah.md`
- [ ] `osn-smp-fis-03b-newton-1-sedang.md`
- [ ] `osn-smp-fis-03b-newton-1-sulit.md`
- [ ] `osn-smp-fis-03b-newton-1-mudah-sedang.md`
- [ ] `osn-smp-fis-03b-newton-1-sedang-sulit.md`

**FIS-03c · Hukum Newton II (F=ma)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-03c-newton-2-campur.md`
- [ ] `osn-smp-fis-03c-newton-2-mudah.md`
- [ ] `osn-smp-fis-03c-newton-2-sedang.md`
- [ ] `osn-smp-fis-03c-newton-2-sulit.md`
- [ ] `osn-smp-fis-03c-newton-2-mudah-sedang.md`
- [ ] `osn-smp-fis-03c-newton-2-sedang-sulit.md`

**FIS-03d · Hukum Newton III (Aksi-Reaksi)** (fokus Kab)
- [ ] `osn-smp-fis-03d-newton-3-campur.md`
- [ ] `osn-smp-fis-03d-newton-3-mudah.md`
- [ ] `osn-smp-fis-03d-newton-3-sedang.md`
- [ ] `osn-smp-fis-03d-newton-3-sulit.md`
- [ ] `osn-smp-fis-03d-newton-3-mudah-sedang.md`
- [ ] `osn-smp-fis-03d-newton-3-sedang-sulit.md`

**FIS-03e · Gaya Berat & Gaya Normal** (fokus Kab)
- [ ] `osn-smp-fis-03e-berat-normal-campur.md`
- [ ] `osn-smp-fis-03e-berat-normal-mudah.md`
- [ ] `osn-smp-fis-03e-berat-normal-sedang.md`
- [ ] `osn-smp-fis-03e-berat-normal-sulit.md`
- [ ] `osn-smp-fis-03e-berat-normal-mudah-sedang.md`
- [ ] `osn-smp-fis-03e-berat-normal-sedang-sulit.md`

**FIS-03f · Gaya Gesekan (Statis & Kinetis)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-03f-gesekan-campur.md`
- [ ] `osn-smp-fis-03f-gesekan-mudah.md`
- [ ] `osn-smp-fis-03f-gesekan-sedang.md`
- [ ] `osn-smp-fis-03f-gesekan-sulit.md`
- [ ] `osn-smp-fis-03f-gesekan-mudah-sedang.md`
- [ ] `osn-smp-fis-03f-gesekan-sedang-sulit.md`

**FIS-03g · Aplikasi Hukum Newton (Bidang Datar, Miring)** (fokus Prov–Nas)
- [ ] `osn-smp-fis-03g-aplikasi-newton-campur.md`
- [ ] `osn-smp-fis-03g-aplikasi-newton-mudah.md`
- [ ] `osn-smp-fis-03g-aplikasi-newton-sedang.md`
- [ ] `osn-smp-fis-03g-aplikasi-newton-sulit.md`
- [ ] `osn-smp-fis-03g-aplikasi-newton-mudah-sedang.md`
- [ ] `osn-smp-fis-03g-aplikasi-newton-sedang-sulit.md`

**FIS-03h · Soal Cerita Hukum Newton** (fokus Prov)
- [ ] `osn-smp-fis-03h-cerita-newton-campur.md`
- [ ] `osn-smp-fis-03h-cerita-newton-mudah.md`
- [ ] `osn-smp-fis-03h-cerita-newton-sedang.md`
- [ ] `osn-smp-fis-03h-cerita-newton-sulit.md`
- [ ] `osn-smp-fis-03h-cerita-newton-mudah-sedang.md`
- [ ] `osn-smp-fis-03h-cerita-newton-sedang-sulit.md`

### FIS-04 · Usaha, Energi & Pesawat Sederhana (10 sub-bab)

**FIS-04a · Konsep Usaha (W=F·s)** (fokus Kab)
- [ ] `osn-smp-fis-04a-konsep-usaha-campur.md`
- [ ] `osn-smp-fis-04a-konsep-usaha-mudah.md`
- [ ] `osn-smp-fis-04a-konsep-usaha-sedang.md`
- [ ] `osn-smp-fis-04a-konsep-usaha-sulit.md`
- [ ] `osn-smp-fis-04a-konsep-usaha-mudah-sedang.md`
- [ ] `osn-smp-fis-04a-konsep-usaha-sedang-sulit.md`

**FIS-04b · Energi Kinetik** (fokus Kab)
- [ ] `osn-smp-fis-04b-energi-kinetik-campur.md`
- [ ] `osn-smp-fis-04b-energi-kinetik-mudah.md`
- [ ] `osn-smp-fis-04b-energi-kinetik-sedang.md`
- [ ] `osn-smp-fis-04b-energi-kinetik-sulit.md`
- [ ] `osn-smp-fis-04b-energi-kinetik-mudah-sedang.md`
- [ ] `osn-smp-fis-04b-energi-kinetik-sedang-sulit.md`

**FIS-04c · Energi Potensial (Gravitasi & Pegas)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-04c-energi-potensial-campur.md`
- [ ] `osn-smp-fis-04c-energi-potensial-mudah.md`
- [ ] `osn-smp-fis-04c-energi-potensial-sedang.md`
- [ ] `osn-smp-fis-04c-energi-potensial-sulit.md`
- [ ] `osn-smp-fis-04c-energi-potensial-mudah-sedang.md`
- [ ] `osn-smp-fis-04c-energi-potensial-sedang-sulit.md`

**FIS-04d · Hukum Kekekalan Energi Mekanik** (fokus Prov)
- [ ] `osn-smp-fis-04d-kekekalan-energi-campur.md`
- [ ] `osn-smp-fis-04d-kekekalan-energi-mudah.md`
- [ ] `osn-smp-fis-04d-kekekalan-energi-sedang.md`
- [ ] `osn-smp-fis-04d-kekekalan-energi-sulit.md`
- [ ] `osn-smp-fis-04d-kekekalan-energi-mudah-sedang.md`
- [ ] `osn-smp-fis-04d-kekekalan-energi-sedang-sulit.md`

**FIS-04e · Daya** (fokus Kab–Prov)
- [ ] `osn-smp-fis-04e-daya-campur.md`
- [ ] `osn-smp-fis-04e-daya-mudah.md`
- [ ] `osn-smp-fis-04e-daya-sedang.md`
- [ ] `osn-smp-fis-04e-daya-sulit.md`
- [ ] `osn-smp-fis-04e-daya-mudah-sedang.md`
- [ ] `osn-smp-fis-04e-daya-sedang-sulit.md`

**FIS-04f · Tuas (Pengungkit) - 3 Jenis** (fokus Kab)
- [ ] `osn-smp-fis-04f-tuas-campur.md`
- [ ] `osn-smp-fis-04f-tuas-mudah.md`
- [ ] `osn-smp-fis-04f-tuas-sedang.md`
- [ ] `osn-smp-fis-04f-tuas-sulit.md`
- [ ] `osn-smp-fis-04f-tuas-mudah-sedang.md`
- [ ] `osn-smp-fis-04f-tuas-sedang-sulit.md`

**FIS-04g · Katrol (Tetap, Bergerak, Majemuk)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-04g-katrol-campur.md`
- [ ] `osn-smp-fis-04g-katrol-mudah.md`
- [ ] `osn-smp-fis-04g-katrol-sedang.md`
- [ ] `osn-smp-fis-04g-katrol-sulit.md`
- [ ] `osn-smp-fis-04g-katrol-mudah-sedang.md`
- [ ] `osn-smp-fis-04g-katrol-sedang-sulit.md`

**FIS-04h · Bidang Miring** (fokus Kab–Prov)
- [ ] `osn-smp-fis-04h-bidang-miring-campur.md`
- [ ] `osn-smp-fis-04h-bidang-miring-mudah.md`
- [ ] `osn-smp-fis-04h-bidang-miring-sedang.md`
- [ ] `osn-smp-fis-04h-bidang-miring-sulit.md`
- [ ] `osn-smp-fis-04h-bidang-miring-mudah-sedang.md`
- [ ] `osn-smp-fis-04h-bidang-miring-sedang-sulit.md`

**FIS-04i · Roda Berporos & Roda Bergigi** (fokus Prov)
- [ ] `osn-smp-fis-04i-roda-berporos-campur.md`
- [ ] `osn-smp-fis-04i-roda-berporos-mudah.md`
- [ ] `osn-smp-fis-04i-roda-berporos-sedang.md`
- [ ] `osn-smp-fis-04i-roda-berporos-sulit.md`
- [ ] `osn-smp-fis-04i-roda-berporos-mudah-sedang.md`
- [ ] `osn-smp-fis-04i-roda-berporos-sedang-sulit.md`

**FIS-04j · Soal Cerita Usaha-Energi-Pesawat** (fokus Prov)
- [ ] `osn-smp-fis-04j-cerita-energi-pesawat-campur.md`
- [ ] `osn-smp-fis-04j-cerita-energi-pesawat-mudah.md`
- [ ] `osn-smp-fis-04j-cerita-energi-pesawat-sedang.md`
- [ ] `osn-smp-fis-04j-cerita-energi-pesawat-sulit.md`
- [ ] `osn-smp-fis-04j-cerita-energi-pesawat-mudah-sedang.md`
- [ ] `osn-smp-fis-04j-cerita-energi-pesawat-sedang-sulit.md`

### FIS-05 · Tekanan & Fluida (8 sub-bab)

**FIS-05a · Tekanan pada Zat Padat** (fokus Kab)
- [ ] `osn-smp-fis-05a-tekanan-zat-padat-campur.md`
- [ ] `osn-smp-fis-05a-tekanan-zat-padat-mudah.md`
- [ ] `osn-smp-fis-05a-tekanan-zat-padat-sedang.md`
- [ ] `osn-smp-fis-05a-tekanan-zat-padat-sulit.md`
- [ ] `osn-smp-fis-05a-tekanan-zat-padat-mudah-sedang.md`
- [ ] `osn-smp-fis-05a-tekanan-zat-padat-sedang-sulit.md`

**FIS-05b · Tekanan Hidrostatis** (fokus Kab–Prov)
- [ ] `osn-smp-fis-05b-tekanan-hidrostatis-campur.md`
- [ ] `osn-smp-fis-05b-tekanan-hidrostatis-mudah.md`
- [ ] `osn-smp-fis-05b-tekanan-hidrostatis-sedang.md`
- [ ] `osn-smp-fis-05b-tekanan-hidrostatis-sulit.md`
- [ ] `osn-smp-fis-05b-tekanan-hidrostatis-mudah-sedang.md`
- [ ] `osn-smp-fis-05b-tekanan-hidrostatis-sedang-sulit.md`

**FIS-05c · Hukum Pascal (Pompa Hidrolik, Dongkrak)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-05c-pascal-campur.md`
- [ ] `osn-smp-fis-05c-pascal-mudah.md`
- [ ] `osn-smp-fis-05c-pascal-sedang.md`
- [ ] `osn-smp-fis-05c-pascal-sulit.md`
- [ ] `osn-smp-fis-05c-pascal-mudah-sedang.md`
- [ ] `osn-smp-fis-05c-pascal-sedang-sulit.md`

**FIS-05d · Hukum Archimedes (Terapung, Melayang, Tenggelam)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-05d-archimedes-campur.md`
- [ ] `osn-smp-fis-05d-archimedes-mudah.md`
- [ ] `osn-smp-fis-05d-archimedes-sedang.md`
- [ ] `osn-smp-fis-05d-archimedes-sulit.md`
- [ ] `osn-smp-fis-05d-archimedes-mudah-sedang.md`
- [ ] `osn-smp-fis-05d-archimedes-sedang-sulit.md`

**FIS-05e · Tekanan Udara & Barometer** (fokus Kab)
- [ ] `osn-smp-fis-05e-tekanan-udara-campur.md`
- [ ] `osn-smp-fis-05e-tekanan-udara-mudah.md`
- [ ] `osn-smp-fis-05e-tekanan-udara-sedang.md`
- [ ] `osn-smp-fis-05e-tekanan-udara-sulit.md`
- [ ] `osn-smp-fis-05e-tekanan-udara-mudah-sedang.md`
- [ ] `osn-smp-fis-05e-tekanan-udara-sedang-sulit.md`

**FIS-05f · Bejana Berhubungan** (fokus Kab)
- [ ] `osn-smp-fis-05f-bejana-berhubungan-campur.md`
- [ ] `osn-smp-fis-05f-bejana-berhubungan-mudah.md`
- [ ] `osn-smp-fis-05f-bejana-berhubungan-sedang.md`
- [ ] `osn-smp-fis-05f-bejana-berhubungan-sulit.md`
- [ ] `osn-smp-fis-05f-bejana-berhubungan-mudah-sedang.md`
- [ ] `osn-smp-fis-05f-bejana-berhubungan-sedang-sulit.md`

**FIS-05g · Aplikasi Fluida (Kapal Selam, Balon Udara)** (fokus Prov)
- [ ] `osn-smp-fis-05g-aplikasi-fluida-campur.md`
- [ ] `osn-smp-fis-05g-aplikasi-fluida-mudah.md`
- [ ] `osn-smp-fis-05g-aplikasi-fluida-sedang.md`
- [ ] `osn-smp-fis-05g-aplikasi-fluida-sulit.md`
- [ ] `osn-smp-fis-05g-aplikasi-fluida-mudah-sedang.md`
- [ ] `osn-smp-fis-05g-aplikasi-fluida-sedang-sulit.md`

**FIS-05h · Soal Cerita Tekanan-Fluida** (fokus Prov)
- [ ] `osn-smp-fis-05h-cerita-tekanan-fluida-campur.md`
- [ ] `osn-smp-fis-05h-cerita-tekanan-fluida-mudah.md`
- [ ] `osn-smp-fis-05h-cerita-tekanan-fluida-sedang.md`
- [ ] `osn-smp-fis-05h-cerita-tekanan-fluida-sulit.md`
- [ ] `osn-smp-fis-05h-cerita-tekanan-fluida-mudah-sedang.md`
- [ ] `osn-smp-fis-05h-cerita-tekanan-fluida-sedang-sulit.md`

### FIS-06 · Suhu, Kalor & Perpindahan Panas (9 sub-bab)

**FIS-06a · Suhu & Termometer (Konversi Skala)** (fokus Kab)
- [ ] `osn-smp-fis-06a-suhu-termometer-campur.md`
- [ ] `osn-smp-fis-06a-suhu-termometer-mudah.md`
- [ ] `osn-smp-fis-06a-suhu-termometer-sedang.md`
- [ ] `osn-smp-fis-06a-suhu-termometer-sulit.md`
- [ ] `osn-smp-fis-06a-suhu-termometer-mudah-sedang.md`
- [ ] `osn-smp-fis-06a-suhu-termometer-sedang-sulit.md`

**FIS-06b · Pemuaian (Panjang, Luas, Volume)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-06b-pemuaian-campur.md`
- [ ] `osn-smp-fis-06b-pemuaian-mudah.md`
- [ ] `osn-smp-fis-06b-pemuaian-sedang.md`
- [ ] `osn-smp-fis-06b-pemuaian-sulit.md`
- [ ] `osn-smp-fis-06b-pemuaian-mudah-sedang.md`
- [ ] `osn-smp-fis-06b-pemuaian-sedang-sulit.md`

**FIS-06c · Kalor & Persamaan Q=mcΔT** (fokus Kab–Prov)
- [ ] `osn-smp-fis-06c-kalor-qmct-campur.md`
- [ ] `osn-smp-fis-06c-kalor-qmct-mudah.md`
- [ ] `osn-smp-fis-06c-kalor-qmct-sedang.md`
- [ ] `osn-smp-fis-06c-kalor-qmct-sulit.md`
- [ ] `osn-smp-fis-06c-kalor-qmct-mudah-sedang.md`
- [ ] `osn-smp-fis-06c-kalor-qmct-sedang-sulit.md`

**FIS-06d · Kalor Lebur & Kalor Uap (Perubahan Wujud)** (fokus Prov)
- [ ] `osn-smp-fis-06d-kalor-lebur-uap-campur.md`
- [ ] `osn-smp-fis-06d-kalor-lebur-uap-mudah.md`
- [ ] `osn-smp-fis-06d-kalor-lebur-uap-sedang.md`
- [ ] `osn-smp-fis-06d-kalor-lebur-uap-sulit.md`
- [ ] `osn-smp-fis-06d-kalor-lebur-uap-mudah-sedang.md`
- [ ] `osn-smp-fis-06d-kalor-lebur-uap-sedang-sulit.md`

**FIS-06e · Asas Black (Pertukaran Kalor)** (fokus Prov–Nas)
- [ ] `osn-smp-fis-06e-asas-black-campur.md`
- [ ] `osn-smp-fis-06e-asas-black-mudah.md`
- [ ] `osn-smp-fis-06e-asas-black-sedang.md`
- [ ] `osn-smp-fis-06e-asas-black-sulit.md`
- [ ] `osn-smp-fis-06e-asas-black-mudah-sedang.md`
- [ ] `osn-smp-fis-06e-asas-black-sedang-sulit.md`

**FIS-06f · Perpindahan Kalor - Konduksi** (fokus Kab)
- [ ] `osn-smp-fis-06f-konduksi-campur.md`
- [ ] `osn-smp-fis-06f-konduksi-mudah.md`
- [ ] `osn-smp-fis-06f-konduksi-sedang.md`
- [ ] `osn-smp-fis-06f-konduksi-sulit.md`
- [ ] `osn-smp-fis-06f-konduksi-mudah-sedang.md`
- [ ] `osn-smp-fis-06f-konduksi-sedang-sulit.md`

**FIS-06g · Perpindahan Kalor - Konveksi** (fokus Kab)
- [ ] `osn-smp-fis-06g-konveksi-campur.md`
- [ ] `osn-smp-fis-06g-konveksi-mudah.md`
- [ ] `osn-smp-fis-06g-konveksi-sedang.md`
- [ ] `osn-smp-fis-06g-konveksi-sulit.md`
- [ ] `osn-smp-fis-06g-konveksi-mudah-sedang.md`
- [ ] `osn-smp-fis-06g-konveksi-sedang-sulit.md`

**FIS-06h · Perpindahan Kalor - Radiasi** (fokus Kab)
- [ ] `osn-smp-fis-06h-radiasi-campur.md`
- [ ] `osn-smp-fis-06h-radiasi-mudah.md`
- [ ] `osn-smp-fis-06h-radiasi-sedang.md`
- [ ] `osn-smp-fis-06h-radiasi-sulit.md`
- [ ] `osn-smp-fis-06h-radiasi-mudah-sedang.md`
- [ ] `osn-smp-fis-06h-radiasi-sedang-sulit.md`

**FIS-06i · Soal Cerita Suhu-Kalor** (fokus Prov)
- [ ] `osn-smp-fis-06i-cerita-suhu-kalor-campur.md`
- [ ] `osn-smp-fis-06i-cerita-suhu-kalor-mudah.md`
- [ ] `osn-smp-fis-06i-cerita-suhu-kalor-sedang.md`
- [ ] `osn-smp-fis-06i-cerita-suhu-kalor-sulit.md`
- [ ] `osn-smp-fis-06i-cerita-suhu-kalor-mudah-sedang.md`
- [ ] `osn-smp-fis-06i-cerita-suhu-kalor-sedang-sulit.md`

### FIS-07 · Getaran, Gelombang, Bunyi & Optik (11 sub-bab)

**FIS-07a · Getaran (Periode, Frekuensi, Amplitudo)** (fokus Kab)
- [ ] `osn-smp-fis-07a-getaran-campur.md`
- [ ] `osn-smp-fis-07a-getaran-mudah.md`
- [ ] `osn-smp-fis-07a-getaran-sedang.md`
- [ ] `osn-smp-fis-07a-getaran-sulit.md`
- [ ] `osn-smp-fis-07a-getaran-mudah-sedang.md`
- [ ] `osn-smp-fis-07a-getaran-sedang-sulit.md`

**FIS-07b · Gelombang Transversal & Longitudinal** (fokus Kab)
- [ ] `osn-smp-fis-07b-jenis-gelombang-campur.md`
- [ ] `osn-smp-fis-07b-jenis-gelombang-mudah.md`
- [ ] `osn-smp-fis-07b-jenis-gelombang-sedang.md`
- [ ] `osn-smp-fis-07b-jenis-gelombang-sulit.md`
- [ ] `osn-smp-fis-07b-jenis-gelombang-mudah-sedang.md`
- [ ] `osn-smp-fis-07b-jenis-gelombang-sedang-sulit.md`

**FIS-07c · Persamaan Gelombang (v=λ·f)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-07c-persamaan-gelombang-campur.md`
- [ ] `osn-smp-fis-07c-persamaan-gelombang-mudah.md`
- [ ] `osn-smp-fis-07c-persamaan-gelombang-sedang.md`
- [ ] `osn-smp-fis-07c-persamaan-gelombang-sulit.md`
- [ ] `osn-smp-fis-07c-persamaan-gelombang-mudah-sedang.md`
- [ ] `osn-smp-fis-07c-persamaan-gelombang-sedang-sulit.md`

**FIS-07d · Bunyi & Sifat-sifatnya (Frekuensi, Intensitas)** (fokus Kab)
- [ ] `osn-smp-fis-07d-bunyi-sifat-campur.md`
- [ ] `osn-smp-fis-07d-bunyi-sifat-mudah.md`
- [ ] `osn-smp-fis-07d-bunyi-sifat-sedang.md`
- [ ] `osn-smp-fis-07d-bunyi-sifat-sulit.md`
- [ ] `osn-smp-fis-07d-bunyi-sifat-mudah-sedang.md`
- [ ] `osn-smp-fis-07d-bunyi-sifat-sedang-sulit.md`

**FIS-07e · Cepat Rambat & Pemantulan Bunyi (Gaung, Gema)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-07e-pemantulan-bunyi-campur.md`
- [ ] `osn-smp-fis-07e-pemantulan-bunyi-mudah.md`
- [ ] `osn-smp-fis-07e-pemantulan-bunyi-sedang.md`
- [ ] `osn-smp-fis-07e-pemantulan-bunyi-sulit.md`
- [ ] `osn-smp-fis-07e-pemantulan-bunyi-mudah-sedang.md`
- [ ] `osn-smp-fis-07e-pemantulan-bunyi-sedang-sulit.md`

**FIS-07f · Pemantulan Cahaya - Cermin Datar** (fokus Kab)
- [ ] `osn-smp-fis-07f-cermin-datar-campur.md`
- [ ] `osn-smp-fis-07f-cermin-datar-mudah.md`
- [ ] `osn-smp-fis-07f-cermin-datar-sedang.md`
- [ ] `osn-smp-fis-07f-cermin-datar-sulit.md`
- [ ] `osn-smp-fis-07f-cermin-datar-mudah-sedang.md`
- [ ] `osn-smp-fis-07f-cermin-datar-sedang-sulit.md`

**FIS-07g · Pemantulan Cahaya - Cermin Cekung & Cembung** (fokus Kab–Prov)
- [ ] `osn-smp-fis-07g-cermin-lengkung-campur.md`
- [ ] `osn-smp-fis-07g-cermin-lengkung-mudah.md`
- [ ] `osn-smp-fis-07g-cermin-lengkung-sedang.md`
- [ ] `osn-smp-fis-07g-cermin-lengkung-sulit.md`
- [ ] `osn-smp-fis-07g-cermin-lengkung-mudah-sedang.md`
- [ ] `osn-smp-fis-07g-cermin-lengkung-sedang-sulit.md`

**FIS-07h · Pembiasan Cahaya - Lensa Cekung & Cembung** (fokus Prov)
- [ ] `osn-smp-fis-07h-lensa-campur.md`
- [ ] `osn-smp-fis-07h-lensa-mudah.md`
- [ ] `osn-smp-fis-07h-lensa-sedang.md`
- [ ] `osn-smp-fis-07h-lensa-sulit.md`
- [ ] `osn-smp-fis-07h-lensa-mudah-sedang.md`
- [ ] `osn-smp-fis-07h-lensa-sedang-sulit.md`

**FIS-07i · Alat Optik (Mata, Lup, Mikroskop, Teropong)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-07i-alat-optik-campur.md`
- [ ] `osn-smp-fis-07i-alat-optik-mudah.md`
- [ ] `osn-smp-fis-07i-alat-optik-sedang.md`
- [ ] `osn-smp-fis-07i-alat-optik-sulit.md`
- [ ] `osn-smp-fis-07i-alat-optik-mudah-sedang.md`
- [ ] `osn-smp-fis-07i-alat-optik-sedang-sulit.md`

**FIS-07j · Cacat Mata (Miopi, Hipermetropi, Presbiopi)** (fokus Kab)
- [ ] `osn-smp-fis-07j-cacat-mata-campur.md`
- [ ] `osn-smp-fis-07j-cacat-mata-mudah.md`
- [ ] `osn-smp-fis-07j-cacat-mata-sedang.md`
- [ ] `osn-smp-fis-07j-cacat-mata-sulit.md`
- [ ] `osn-smp-fis-07j-cacat-mata-mudah-sedang.md`
- [ ] `osn-smp-fis-07j-cacat-mata-sedang-sulit.md`

**FIS-07k · Soal Cerita Gelombang-Optik** (fokus Prov)
- [ ] `osn-smp-fis-07k-cerita-gelombang-optik-campur.md`
- [ ] `osn-smp-fis-07k-cerita-gelombang-optik-mudah.md`
- [ ] `osn-smp-fis-07k-cerita-gelombang-optik-sedang.md`
- [ ] `osn-smp-fis-07k-cerita-gelombang-optik-sulit.md`
- [ ] `osn-smp-fis-07k-cerita-gelombang-optik-mudah-sedang.md`
- [ ] `osn-smp-fis-07k-cerita-gelombang-optik-sedang-sulit.md`

### FIS-08 · Listrik, Magnet & Tata Surya (11 sub-bab)

**FIS-08a · Listrik Statis (Muatan, Hk Coulomb)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-08a-listrik-statis-campur.md`
- [ ] `osn-smp-fis-08a-listrik-statis-mudah.md`
- [ ] `osn-smp-fis-08a-listrik-statis-sedang.md`
- [ ] `osn-smp-fis-08a-listrik-statis-sulit.md`
- [ ] `osn-smp-fis-08a-listrik-statis-mudah-sedang.md`
- [ ] `osn-smp-fis-08a-listrik-statis-sedang-sulit.md`

**FIS-08b · Listrik Dinamis - Arus & Tegangan** (fokus Kab)
- [ ] `osn-smp-fis-08b-arus-tegangan-campur.md`
- [ ] `osn-smp-fis-08b-arus-tegangan-mudah.md`
- [ ] `osn-smp-fis-08b-arus-tegangan-sedang.md`
- [ ] `osn-smp-fis-08b-arus-tegangan-sulit.md`
- [ ] `osn-smp-fis-08b-arus-tegangan-mudah-sedang.md`
- [ ] `osn-smp-fis-08b-arus-tegangan-sedang-sulit.md`

**FIS-08c · Hukum Ohm & Hambatan** (fokus Kab)
- [ ] `osn-smp-fis-08c-hukum-ohm-campur.md`
- [ ] `osn-smp-fis-08c-hukum-ohm-mudah.md`
- [ ] `osn-smp-fis-08c-hukum-ohm-sedang.md`
- [ ] `osn-smp-fis-08c-hukum-ohm-sulit.md`
- [ ] `osn-smp-fis-08c-hukum-ohm-mudah-sedang.md`
- [ ] `osn-smp-fis-08c-hukum-ohm-sedang-sulit.md`

**FIS-08d · Rangkaian Seri & Paralel** (fokus Kab–Prov)
- [ ] `osn-smp-fis-08d-rangkaian-seri-paralel-campur.md`
- [ ] `osn-smp-fis-08d-rangkaian-seri-paralel-mudah.md`
- [ ] `osn-smp-fis-08d-rangkaian-seri-paralel-sedang.md`
- [ ] `osn-smp-fis-08d-rangkaian-seri-paralel-sulit.md`
- [ ] `osn-smp-fis-08d-rangkaian-seri-paralel-mudah-sedang.md`
- [ ] `osn-smp-fis-08d-rangkaian-seri-paralel-sedang-sulit.md`

**FIS-08e · Hukum Kirchhoff** (fokus Prov–Nas)
- [ ] `osn-smp-fis-08e-kirchhoff-campur.md`
- [ ] `osn-smp-fis-08e-kirchhoff-mudah.md`
- [ ] `osn-smp-fis-08e-kirchhoff-sedang.md`
- [ ] `osn-smp-fis-08e-kirchhoff-sulit.md`
- [ ] `osn-smp-fis-08e-kirchhoff-mudah-sedang.md`
- [ ] `osn-smp-fis-08e-kirchhoff-sedang-sulit.md`

**FIS-08f · Daya & Energi Listrik** (fokus Kab–Prov)
- [ ] `osn-smp-fis-08f-daya-energi-listrik-campur.md`
- [ ] `osn-smp-fis-08f-daya-energi-listrik-mudah.md`
- [ ] `osn-smp-fis-08f-daya-energi-listrik-sedang.md`
- [ ] `osn-smp-fis-08f-daya-energi-listrik-sulit.md`
- [ ] `osn-smp-fis-08f-daya-energi-listrik-mudah-sedang.md`
- [ ] `osn-smp-fis-08f-daya-energi-listrik-sedang-sulit.md`

**FIS-08g · Magnet (Kutub, Medan Magnet, Sifat)** (fokus Kab)
- [ ] `osn-smp-fis-08g-magnet-campur.md`
- [ ] `osn-smp-fis-08g-magnet-mudah.md`
- [ ] `osn-smp-fis-08g-magnet-sedang.md`
- [ ] `osn-smp-fis-08g-magnet-sulit.md`
- [ ] `osn-smp-fis-08g-magnet-mudah-sedang.md`
- [ ] `osn-smp-fis-08g-magnet-sedang-sulit.md`

**FIS-08h · Elektromagnet & Induksi Elektromagnetik** (fokus Prov)
- [ ] `osn-smp-fis-08h-elektromagnet-induksi-campur.md`
- [ ] `osn-smp-fis-08h-elektromagnet-induksi-mudah.md`
- [ ] `osn-smp-fis-08h-elektromagnet-induksi-sedang.md`
- [ ] `osn-smp-fis-08h-elektromagnet-induksi-sulit.md`
- [ ] `osn-smp-fis-08h-elektromagnet-induksi-mudah-sedang.md`
- [ ] `osn-smp-fis-08h-elektromagnet-induksi-sedang-sulit.md`

**FIS-08i · Generator & Transformator (Pengantar)** (fokus Prov)
- [ ] `osn-smp-fis-08i-generator-trafo-campur.md`
- [ ] `osn-smp-fis-08i-generator-trafo-mudah.md`
- [ ] `osn-smp-fis-08i-generator-trafo-sedang.md`
- [ ] `osn-smp-fis-08i-generator-trafo-sulit.md`
- [ ] `osn-smp-fis-08i-generator-trafo-mudah-sedang.md`
- [ ] `osn-smp-fis-08i-generator-trafo-sedang-sulit.md`

**FIS-08j · Tata Surya (Matahari, Planet, Bulan, Satelit)** (fokus Kab)
- [ ] `osn-smp-fis-08j-tata-surya-campur.md`
- [ ] `osn-smp-fis-08j-tata-surya-mudah.md`
- [ ] `osn-smp-fis-08j-tata-surya-sedang.md`
- [ ] `osn-smp-fis-08j-tata-surya-sulit.md`
- [ ] `osn-smp-fis-08j-tata-surya-mudah-sedang.md`
- [ ] `osn-smp-fis-08j-tata-surya-sedang-sulit.md`

**FIS-08k · Gerhana, Pasang Surut, Revolusi-Rotasi** (fokus Kab–Prov)
- [ ] `osn-smp-fis-08k-gerhana-rotasi-revolusi-campur.md`
- [ ] `osn-smp-fis-08k-gerhana-rotasi-revolusi-mudah.md`
- [ ] `osn-smp-fis-08k-gerhana-rotasi-revolusi-sedang.md`
- [ ] `osn-smp-fis-08k-gerhana-rotasi-revolusi-sulit.md`
- [ ] `osn-smp-fis-08k-gerhana-rotasi-revolusi-mudah-sedang.md`
- [ ] `osn-smp-fis-08k-gerhana-rotasi-revolusi-sedang-sulit.md`

---

## C · Biologi Per Sub-Bab (70 sub-bab × 6 = 420 file)

### BIO-01 · Klasifikasi, Sel & Jaringan Makhluk Hidup (10 sub-bab)

**BIO-01a · Ciri-ciri Makhluk Hidup** (fokus Kab)
- [ ] `osn-smp-bio-01a-ciri-makhluk-hidup-campur.md`
- [ ] `osn-smp-bio-01a-ciri-makhluk-hidup-mudah.md`
- [ ] `osn-smp-bio-01a-ciri-makhluk-hidup-sedang.md`
- [ ] `osn-smp-bio-01a-ciri-makhluk-hidup-sulit.md`
- [ ] `osn-smp-bio-01a-ciri-makhluk-hidup-mudah-sedang.md`
- [ ] `osn-smp-bio-01a-ciri-makhluk-hidup-sedang-sulit.md`

**BIO-01b · Klasifikasi 5 Kingdom (Monera, Protista, Fungi, Plantae, Animalia)** (fokus Kab)
- [ ] `osn-smp-bio-01b-klasifikasi-5-kingdom-campur.md`
- [ ] `osn-smp-bio-01b-klasifikasi-5-kingdom-mudah.md`
- [ ] `osn-smp-bio-01b-klasifikasi-5-kingdom-sedang.md`
- [ ] `osn-smp-bio-01b-klasifikasi-5-kingdom-sulit.md`
- [ ] `osn-smp-bio-01b-klasifikasi-5-kingdom-mudah-sedang.md`
- [ ] `osn-smp-bio-01b-klasifikasi-5-kingdom-sedang-sulit.md`

**BIO-01c · Klasifikasi Hewan - Vertebrata vs Invertebrata** (fokus Kab–Prov)
- [ ] `osn-smp-bio-01c-vertebrata-invertebrata-campur.md`
- [ ] `osn-smp-bio-01c-vertebrata-invertebrata-mudah.md`
- [ ] `osn-smp-bio-01c-vertebrata-invertebrata-sedang.md`
- [ ] `osn-smp-bio-01c-vertebrata-invertebrata-sulit.md`
- [ ] `osn-smp-bio-01c-vertebrata-invertebrata-mudah-sedang.md`
- [ ] `osn-smp-bio-01c-vertebrata-invertebrata-sedang-sulit.md`

**BIO-01d · Klasifikasi Tumbuhan - Lumut, Paku, Berbiji** (fokus Kab–Prov)
- [ ] `osn-smp-bio-01d-klasifikasi-tumbuhan-campur.md`
- [ ] `osn-smp-bio-01d-klasifikasi-tumbuhan-mudah.md`
- [ ] `osn-smp-bio-01d-klasifikasi-tumbuhan-sedang.md`
- [ ] `osn-smp-bio-01d-klasifikasi-tumbuhan-sulit.md`
- [ ] `osn-smp-bio-01d-klasifikasi-tumbuhan-mudah-sedang.md`
- [ ] `osn-smp-bio-01d-klasifikasi-tumbuhan-sedang-sulit.md`

**BIO-01e · Sel - Struktur & Fungsi Organel** (fokus Kab–Prov)
- [ ] `osn-smp-bio-01e-sel-organel-campur.md`
- [ ] `osn-smp-bio-01e-sel-organel-mudah.md`
- [ ] `osn-smp-bio-01e-sel-organel-sedang.md`
- [ ] `osn-smp-bio-01e-sel-organel-sulit.md`
- [ ] `osn-smp-bio-01e-sel-organel-mudah-sedang.md`
- [ ] `osn-smp-bio-01e-sel-organel-sedang-sulit.md`

**BIO-01f · Sel Hewan vs Sel Tumbuhan** (fokus Kab)
- [ ] `osn-smp-bio-01f-sel-hewan-tumbuhan-campur.md`
- [ ] `osn-smp-bio-01f-sel-hewan-tumbuhan-mudah.md`
- [ ] `osn-smp-bio-01f-sel-hewan-tumbuhan-sedang.md`
- [ ] `osn-smp-bio-01f-sel-hewan-tumbuhan-sulit.md`
- [ ] `osn-smp-bio-01f-sel-hewan-tumbuhan-mudah-sedang.md`
- [ ] `osn-smp-bio-01f-sel-hewan-tumbuhan-sedang-sulit.md`

**BIO-01g · Jaringan Tumbuhan** (fokus Prov)
- [ ] `osn-smp-bio-01g-jaringan-tumbuhan-campur.md`
- [ ] `osn-smp-bio-01g-jaringan-tumbuhan-mudah.md`
- [ ] `osn-smp-bio-01g-jaringan-tumbuhan-sedang.md`
- [ ] `osn-smp-bio-01g-jaringan-tumbuhan-sulit.md`
- [ ] `osn-smp-bio-01g-jaringan-tumbuhan-mudah-sedang.md`
- [ ] `osn-smp-bio-01g-jaringan-tumbuhan-sedang-sulit.md`

**BIO-01h · Jaringan Hewan** (fokus Prov)
- [ ] `osn-smp-bio-01h-jaringan-hewan-campur.md`
- [ ] `osn-smp-bio-01h-jaringan-hewan-mudah.md`
- [ ] `osn-smp-bio-01h-jaringan-hewan-sedang.md`
- [ ] `osn-smp-bio-01h-jaringan-hewan-sulit.md`
- [ ] `osn-smp-bio-01h-jaringan-hewan-mudah-sedang.md`
- [ ] `osn-smp-bio-01h-jaringan-hewan-sedang-sulit.md`

**BIO-01i · Organ & Sistem Organ (Pengantar)** (fokus Kab)
- [ ] `osn-smp-bio-01i-organ-sistem-organ-campur.md`
- [ ] `osn-smp-bio-01i-organ-sistem-organ-mudah.md`
- [ ] `osn-smp-bio-01i-organ-sistem-organ-sedang.md`
- [ ] `osn-smp-bio-01i-organ-sistem-organ-sulit.md`
- [ ] `osn-smp-bio-01i-organ-sistem-organ-mudah-sedang.md`
- [ ] `osn-smp-bio-01i-organ-sistem-organ-sedang-sulit.md`

**BIO-01j · Mikroorganisme (Bakteri, Virus, Jamur)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-01j-mikroorganisme-campur.md`
- [ ] `osn-smp-bio-01j-mikroorganisme-mudah.md`
- [ ] `osn-smp-bio-01j-mikroorganisme-sedang.md`
- [ ] `osn-smp-bio-01j-mikroorganisme-sulit.md`
- [ ] `osn-smp-bio-01j-mikroorganisme-mudah-sedang.md`
- [ ] `osn-smp-bio-01j-mikroorganisme-sedang-sulit.md`

### BIO-02 · Sistem Organ Manusia I (Pencernaan, Pernapasan, Peredaran Darah) (10 sub-bab)

**BIO-02a · Sistem Pencernaan - Organ & Fungsi** (fokus Kab)
- [ ] `osn-smp-bio-02a-pencernaan-organ-campur.md`
- [ ] `osn-smp-bio-02a-pencernaan-organ-mudah.md`
- [ ] `osn-smp-bio-02a-pencernaan-organ-sedang.md`
- [ ] `osn-smp-bio-02a-pencernaan-organ-sulit.md`
- [ ] `osn-smp-bio-02a-pencernaan-organ-mudah-sedang.md`
- [ ] `osn-smp-bio-02a-pencernaan-organ-sedang-sulit.md`

**BIO-02b · Sistem Pencernaan - Enzim Pencernaan** (fokus Kab–Prov)
- [ ] `osn-smp-bio-02b-enzim-pencernaan-campur.md`
- [ ] `osn-smp-bio-02b-enzim-pencernaan-mudah.md`
- [ ] `osn-smp-bio-02b-enzim-pencernaan-sedang.md`
- [ ] `osn-smp-bio-02b-enzim-pencernaan-sulit.md`
- [ ] `osn-smp-bio-02b-enzim-pencernaan-mudah-sedang.md`
- [ ] `osn-smp-bio-02b-enzim-pencernaan-sedang-sulit.md`

**BIO-02c · Gangguan Sistem Pencernaan** (fokus Kab)
- [ ] `osn-smp-bio-02c-gangguan-pencernaan-campur.md`
- [ ] `osn-smp-bio-02c-gangguan-pencernaan-mudah.md`
- [ ] `osn-smp-bio-02c-gangguan-pencernaan-sedang.md`
- [ ] `osn-smp-bio-02c-gangguan-pencernaan-sulit.md`
- [ ] `osn-smp-bio-02c-gangguan-pencernaan-mudah-sedang.md`
- [ ] `osn-smp-bio-02c-gangguan-pencernaan-sedang-sulit.md`

**BIO-02d · Sistem Pernapasan - Organ & Mekanisme** (fokus Kab–Prov)
- [ ] `osn-smp-bio-02d-pernapasan-organ-campur.md`
- [ ] `osn-smp-bio-02d-pernapasan-organ-mudah.md`
- [ ] `osn-smp-bio-02d-pernapasan-organ-sedang.md`
- [ ] `osn-smp-bio-02d-pernapasan-organ-sulit.md`
- [ ] `osn-smp-bio-02d-pernapasan-organ-mudah-sedang.md`
- [ ] `osn-smp-bio-02d-pernapasan-organ-sedang-sulit.md`

**BIO-02e · Pernapasan Dada vs Perut, Kapasitas Paru** (fokus Prov)
- [ ] `osn-smp-bio-02e-pernapasan-dada-perut-campur.md`
- [ ] `osn-smp-bio-02e-pernapasan-dada-perut-mudah.md`
- [ ] `osn-smp-bio-02e-pernapasan-dada-perut-sedang.md`
- [ ] `osn-smp-bio-02e-pernapasan-dada-perut-sulit.md`
- [ ] `osn-smp-bio-02e-pernapasan-dada-perut-mudah-sedang.md`
- [ ] `osn-smp-bio-02e-pernapasan-dada-perut-sedang-sulit.md`

**BIO-02f · Gangguan Sistem Pernapasan** (fokus Kab)
- [ ] `osn-smp-bio-02f-gangguan-pernapasan-campur.md`
- [ ] `osn-smp-bio-02f-gangguan-pernapasan-mudah.md`
- [ ] `osn-smp-bio-02f-gangguan-pernapasan-sedang.md`
- [ ] `osn-smp-bio-02f-gangguan-pernapasan-sulit.md`
- [ ] `osn-smp-bio-02f-gangguan-pernapasan-mudah-sedang.md`
- [ ] `osn-smp-bio-02f-gangguan-pernapasan-sedang-sulit.md`

**BIO-02g · Sistem Peredaran Darah - Jantung & Pembuluh** (fokus Kab–Prov)
- [ ] `osn-smp-bio-02g-jantung-pembuluh-campur.md`
- [ ] `osn-smp-bio-02g-jantung-pembuluh-mudah.md`
- [ ] `osn-smp-bio-02g-jantung-pembuluh-sedang.md`
- [ ] `osn-smp-bio-02g-jantung-pembuluh-sulit.md`
- [ ] `osn-smp-bio-02g-jantung-pembuluh-mudah-sedang.md`
- [ ] `osn-smp-bio-02g-jantung-pembuluh-sedang-sulit.md`

**BIO-02h · Komponen Darah (Sel & Plasma)** (fokus Kab)
- [ ] `osn-smp-bio-02h-komponen-darah-campur.md`
- [ ] `osn-smp-bio-02h-komponen-darah-mudah.md`
- [ ] `osn-smp-bio-02h-komponen-darah-sedang.md`
- [ ] `osn-smp-bio-02h-komponen-darah-sulit.md`
- [ ] `osn-smp-bio-02h-komponen-darah-mudah-sedang.md`
- [ ] `osn-smp-bio-02h-komponen-darah-sedang-sulit.md`

**BIO-02i · Golongan Darah & Transfusi** (fokus Kab–Prov)
- [ ] `osn-smp-bio-02i-golongan-darah-campur.md`
- [ ] `osn-smp-bio-02i-golongan-darah-mudah.md`
- [ ] `osn-smp-bio-02i-golongan-darah-sedang.md`
- [ ] `osn-smp-bio-02i-golongan-darah-sulit.md`
- [ ] `osn-smp-bio-02i-golongan-darah-mudah-sedang.md`
- [ ] `osn-smp-bio-02i-golongan-darah-sedang-sulit.md`

**BIO-02j · Gangguan Sistem Peredaran Darah** (fokus Kab)
- [ ] `osn-smp-bio-02j-gangguan-peredaran-darah-campur.md`
- [ ] `osn-smp-bio-02j-gangguan-peredaran-darah-mudah.md`
- [ ] `osn-smp-bio-02j-gangguan-peredaran-darah-sedang.md`
- [ ] `osn-smp-bio-02j-gangguan-peredaran-darah-sulit.md`
- [ ] `osn-smp-bio-02j-gangguan-peredaran-darah-mudah-sedang.md`
- [ ] `osn-smp-bio-02j-gangguan-peredaran-darah-sedang-sulit.md`

### BIO-03 · Sistem Organ Manusia II (Ekskresi, Reproduksi, Saraf, Hormon, Indera) (11 sub-bab)

**BIO-03a · Sistem Ekskresi - Ginjal & Nefron** (fokus Kab–Prov)
- [ ] `osn-smp-bio-03a-ginjal-nefron-campur.md`
- [ ] `osn-smp-bio-03a-ginjal-nefron-mudah.md`
- [ ] `osn-smp-bio-03a-ginjal-nefron-sedang.md`
- [ ] `osn-smp-bio-03a-ginjal-nefron-sulit.md`
- [ ] `osn-smp-bio-03a-ginjal-nefron-mudah-sedang.md`
- [ ] `osn-smp-bio-03a-ginjal-nefron-sedang-sulit.md`

**BIO-03b · Sistem Ekskresi - Kulit, Paru-paru, Hati** (fokus Kab)
- [ ] `osn-smp-bio-03b-ekskresi-kulit-hati-campur.md`
- [ ] `osn-smp-bio-03b-ekskresi-kulit-hati-mudah.md`
- [ ] `osn-smp-bio-03b-ekskresi-kulit-hati-sedang.md`
- [ ] `osn-smp-bio-03b-ekskresi-kulit-hati-sulit.md`
- [ ] `osn-smp-bio-03b-ekskresi-kulit-hati-mudah-sedang.md`
- [ ] `osn-smp-bio-03b-ekskresi-kulit-hati-sedang-sulit.md`

**BIO-03c · Gangguan Sistem Ekskresi** (fokus Kab)
- [ ] `osn-smp-bio-03c-gangguan-ekskresi-campur.md`
- [ ] `osn-smp-bio-03c-gangguan-ekskresi-mudah.md`
- [ ] `osn-smp-bio-03c-gangguan-ekskresi-sedang.md`
- [ ] `osn-smp-bio-03c-gangguan-ekskresi-sulit.md`
- [ ] `osn-smp-bio-03c-gangguan-ekskresi-mudah-sedang.md`
- [ ] `osn-smp-bio-03c-gangguan-ekskresi-sedang-sulit.md`

**BIO-03d · Sistem Reproduksi Pria & Wanita** (fokus Kab–Prov)
- [ ] `osn-smp-bio-03d-reproduksi-pria-wanita-campur.md`
- [ ] `osn-smp-bio-03d-reproduksi-pria-wanita-mudah.md`
- [ ] `osn-smp-bio-03d-reproduksi-pria-wanita-sedang.md`
- [ ] `osn-smp-bio-03d-reproduksi-pria-wanita-sulit.md`
- [ ] `osn-smp-bio-03d-reproduksi-pria-wanita-mudah-sedang.md`
- [ ] `osn-smp-bio-03d-reproduksi-pria-wanita-sedang-sulit.md`

**BIO-03e · Kehamilan, Pubertas, Menstruasi** (fokus Kab)
- [ ] `osn-smp-bio-03e-kehamilan-pubertas-campur.md`
- [ ] `osn-smp-bio-03e-kehamilan-pubertas-mudah.md`
- [ ] `osn-smp-bio-03e-kehamilan-pubertas-sedang.md`
- [ ] `osn-smp-bio-03e-kehamilan-pubertas-sulit.md`
- [ ] `osn-smp-bio-03e-kehamilan-pubertas-mudah-sedang.md`
- [ ] `osn-smp-bio-03e-kehamilan-pubertas-sedang-sulit.md`

**BIO-03f · Penyakit Sistem Reproduksi & Pencegahan** (fokus Kab)
- [ ] `osn-smp-bio-03f-penyakit-reproduksi-campur.md`
- [ ] `osn-smp-bio-03f-penyakit-reproduksi-mudah.md`
- [ ] `osn-smp-bio-03f-penyakit-reproduksi-sedang.md`
- [ ] `osn-smp-bio-03f-penyakit-reproduksi-sulit.md`
- [ ] `osn-smp-bio-03f-penyakit-reproduksi-mudah-sedang.md`
- [ ] `osn-smp-bio-03f-penyakit-reproduksi-sedang-sulit.md`

**BIO-03g · Sistem Saraf - Neuron & Bagian Otak** (fokus Kab–Prov)
- [ ] `osn-smp-bio-03g-neuron-otak-campur.md`
- [ ] `osn-smp-bio-03g-neuron-otak-mudah.md`
- [ ] `osn-smp-bio-03g-neuron-otak-sedang.md`
- [ ] `osn-smp-bio-03g-neuron-otak-sulit.md`
- [ ] `osn-smp-bio-03g-neuron-otak-mudah-sedang.md`
- [ ] `osn-smp-bio-03g-neuron-otak-sedang-sulit.md`

**BIO-03h · Sistem Saraf - Refleks & Aksi** (fokus Kab)
- [ ] `osn-smp-bio-03h-refleks-aksi-campur.md`
- [ ] `osn-smp-bio-03h-refleks-aksi-mudah.md`
- [ ] `osn-smp-bio-03h-refleks-aksi-sedang.md`
- [ ] `osn-smp-bio-03h-refleks-aksi-sulit.md`
- [ ] `osn-smp-bio-03h-refleks-aksi-mudah-sedang.md`
- [ ] `osn-smp-bio-03h-refleks-aksi-sedang-sulit.md`

**BIO-03i · Sistem Hormon (Endokrin)** (fokus Prov)
- [ ] `osn-smp-bio-03i-hormon-endokrin-campur.md`
- [ ] `osn-smp-bio-03i-hormon-endokrin-mudah.md`
- [ ] `osn-smp-bio-03i-hormon-endokrin-sedang.md`
- [ ] `osn-smp-bio-03i-hormon-endokrin-sulit.md`
- [ ] `osn-smp-bio-03i-hormon-endokrin-mudah-sedang.md`
- [ ] `osn-smp-bio-03i-hormon-endokrin-sedang-sulit.md`

**BIO-03j · Indera Penglihatan & Pendengaran** (fokus Kab–Prov)
- [ ] `osn-smp-bio-03j-indera-mata-telinga-campur.md`
- [ ] `osn-smp-bio-03j-indera-mata-telinga-mudah.md`
- [ ] `osn-smp-bio-03j-indera-mata-telinga-sedang.md`
- [ ] `osn-smp-bio-03j-indera-mata-telinga-sulit.md`
- [ ] `osn-smp-bio-03j-indera-mata-telinga-mudah-sedang.md`
- [ ] `osn-smp-bio-03j-indera-mata-telinga-sedang-sulit.md`

**BIO-03k · Indera Penciuman, Pengecap, Peraba** (fokus Kab)
- [ ] `osn-smp-bio-03k-indera-hidung-lidah-kulit-campur.md`
- [ ] `osn-smp-bio-03k-indera-hidung-lidah-kulit-mudah.md`
- [ ] `osn-smp-bio-03k-indera-hidung-lidah-kulit-sedang.md`
- [ ] `osn-smp-bio-03k-indera-hidung-lidah-kulit-sulit.md`
- [ ] `osn-smp-bio-03k-indera-hidung-lidah-kulit-mudah-sedang.md`
- [ ] `osn-smp-bio-03k-indera-hidung-lidah-kulit-sedang-sulit.md`

### BIO-04 · Struktur & Fungsi Tumbuhan, Fotosintesis (10 sub-bab)

**BIO-04a · Struktur & Fungsi Akar** (fokus Kab)
- [ ] `osn-smp-bio-04a-akar-campur.md`
- [ ] `osn-smp-bio-04a-akar-mudah.md`
- [ ] `osn-smp-bio-04a-akar-sedang.md`
- [ ] `osn-smp-bio-04a-akar-sulit.md`
- [ ] `osn-smp-bio-04a-akar-mudah-sedang.md`
- [ ] `osn-smp-bio-04a-akar-sedang-sulit.md`

**BIO-04b · Struktur & Fungsi Batang** (fokus Kab)
- [ ] `osn-smp-bio-04b-batang-campur.md`
- [ ] `osn-smp-bio-04b-batang-mudah.md`
- [ ] `osn-smp-bio-04b-batang-sedang.md`
- [ ] `osn-smp-bio-04b-batang-sulit.md`
- [ ] `osn-smp-bio-04b-batang-mudah-sedang.md`
- [ ] `osn-smp-bio-04b-batang-sedang-sulit.md`

**BIO-04c · Struktur & Fungsi Daun** (fokus Kab)
- [ ] `osn-smp-bio-04c-daun-campur.md`
- [ ] `osn-smp-bio-04c-daun-mudah.md`
- [ ] `osn-smp-bio-04c-daun-sedang.md`
- [ ] `osn-smp-bio-04c-daun-sulit.md`
- [ ] `osn-smp-bio-04c-daun-mudah-sedang.md`
- [ ] `osn-smp-bio-04c-daun-sedang-sulit.md`

**BIO-04d · Struktur & Fungsi Bunga, Buah, Biji** (fokus Kab)
- [ ] `osn-smp-bio-04d-bunga-buah-biji-campur.md`
- [ ] `osn-smp-bio-04d-bunga-buah-biji-mudah.md`
- [ ] `osn-smp-bio-04d-bunga-buah-biji-sedang.md`
- [ ] `osn-smp-bio-04d-bunga-buah-biji-sulit.md`
- [ ] `osn-smp-bio-04d-bunga-buah-biji-mudah-sedang.md`
- [ ] `osn-smp-bio-04d-bunga-buah-biji-sedang-sulit.md`

**BIO-04e · Transportasi pada Tumbuhan (Xilem, Floem)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-04e-xilem-floem-campur.md`
- [ ] `osn-smp-bio-04e-xilem-floem-mudah.md`
- [ ] `osn-smp-bio-04e-xilem-floem-sedang.md`
- [ ] `osn-smp-bio-04e-xilem-floem-sulit.md`
- [ ] `osn-smp-bio-04e-xilem-floem-mudah-sedang.md`
- [ ] `osn-smp-bio-04e-xilem-floem-sedang-sulit.md`

**BIO-04f · Fotosintesis - Proses & Faktor** (fokus Kab–Prov)
- [ ] `osn-smp-bio-04f-fotosintesis-campur.md`
- [ ] `osn-smp-bio-04f-fotosintesis-mudah.md`
- [ ] `osn-smp-bio-04f-fotosintesis-sedang.md`
- [ ] `osn-smp-bio-04f-fotosintesis-sulit.md`
- [ ] `osn-smp-bio-04f-fotosintesis-mudah-sedang.md`
- [ ] `osn-smp-bio-04f-fotosintesis-sedang-sulit.md`

**BIO-04g · Respirasi pada Tumbuhan** (fokus Kab–Prov)
- [ ] `osn-smp-bio-04g-respirasi-tumbuhan-campur.md`
- [ ] `osn-smp-bio-04g-respirasi-tumbuhan-mudah.md`
- [ ] `osn-smp-bio-04g-respirasi-tumbuhan-sedang.md`
- [ ] `osn-smp-bio-04g-respirasi-tumbuhan-sulit.md`
- [ ] `osn-smp-bio-04g-respirasi-tumbuhan-mudah-sedang.md`
- [ ] `osn-smp-bio-04g-respirasi-tumbuhan-sedang-sulit.md`

**BIO-04h · Gerak pada Tumbuhan (Tropisme, Nasti, Taksis)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-04h-gerak-tumbuhan-campur.md`
- [ ] `osn-smp-bio-04h-gerak-tumbuhan-mudah.md`
- [ ] `osn-smp-bio-04h-gerak-tumbuhan-sedang.md`
- [ ] `osn-smp-bio-04h-gerak-tumbuhan-sulit.md`
- [ ] `osn-smp-bio-04h-gerak-tumbuhan-mudah-sedang.md`
- [ ] `osn-smp-bio-04h-gerak-tumbuhan-sedang-sulit.md`

**BIO-04i · Reproduksi Tumbuhan (Vegetatif & Generatif)** (fokus Kab)
- [ ] `osn-smp-bio-04i-reproduksi-tumbuhan-campur.md`
- [ ] `osn-smp-bio-04i-reproduksi-tumbuhan-mudah.md`
- [ ] `osn-smp-bio-04i-reproduksi-tumbuhan-sedang.md`
- [ ] `osn-smp-bio-04i-reproduksi-tumbuhan-sulit.md`
- [ ] `osn-smp-bio-04i-reproduksi-tumbuhan-mudah-sedang.md`
- [ ] `osn-smp-bio-04i-reproduksi-tumbuhan-sedang-sulit.md`

**BIO-04j · Hormon pada Tumbuhan** (fokus Prov)
- [ ] `osn-smp-bio-04j-hormon-tumbuhan-campur.md`
- [ ] `osn-smp-bio-04j-hormon-tumbuhan-mudah.md`
- [ ] `osn-smp-bio-04j-hormon-tumbuhan-sedang.md`
- [ ] `osn-smp-bio-04j-hormon-tumbuhan-sulit.md`
- [ ] `osn-smp-bio-04j-hormon-tumbuhan-mudah-sedang.md`
- [ ] `osn-smp-bio-04j-hormon-tumbuhan-sedang-sulit.md`

### BIO-05 · Ekosistem, Lingkungan & Pencemaran (11 sub-bab)

**BIO-05a · Komponen Ekosistem (Biotik & Abiotik)** (fokus Kab)
- [ ] `osn-smp-bio-05a-komponen-ekosistem-campur.md`
- [ ] `osn-smp-bio-05a-komponen-ekosistem-mudah.md`
- [ ] `osn-smp-bio-05a-komponen-ekosistem-sedang.md`
- [ ] `osn-smp-bio-05a-komponen-ekosistem-sulit.md`
- [ ] `osn-smp-bio-05a-komponen-ekosistem-mudah-sedang.md`
- [ ] `osn-smp-bio-05a-komponen-ekosistem-sedang-sulit.md`

**BIO-05b · Rantai & Jaring Makanan** (fokus Kab–Prov)
- [ ] `osn-smp-bio-05b-rantai-jaring-makanan-campur.md`
- [ ] `osn-smp-bio-05b-rantai-jaring-makanan-mudah.md`
- [ ] `osn-smp-bio-05b-rantai-jaring-makanan-sedang.md`
- [ ] `osn-smp-bio-05b-rantai-jaring-makanan-sulit.md`
- [ ] `osn-smp-bio-05b-rantai-jaring-makanan-mudah-sedang.md`
- [ ] `osn-smp-bio-05b-rantai-jaring-makanan-sedang-sulit.md`

**BIO-05c · Piramida Ekologi & Aliran Energi** (fokus Prov)
- [ ] `osn-smp-bio-05c-piramida-aliran-energi-campur.md`
- [ ] `osn-smp-bio-05c-piramida-aliran-energi-mudah.md`
- [ ] `osn-smp-bio-05c-piramida-aliran-energi-sedang.md`
- [ ] `osn-smp-bio-05c-piramida-aliran-energi-sulit.md`
- [ ] `osn-smp-bio-05c-piramida-aliran-energi-mudah-sedang.md`
- [ ] `osn-smp-bio-05c-piramida-aliran-energi-sedang-sulit.md`

**BIO-05d · Daur Biogeokimia (Karbon, Nitrogen, Air)** (fokus Prov)
- [ ] `osn-smp-bio-05d-daur-biogeokimia-campur.md`
- [ ] `osn-smp-bio-05d-daur-biogeokimia-mudah.md`
- [ ] `osn-smp-bio-05d-daur-biogeokimia-sedang.md`
- [ ] `osn-smp-bio-05d-daur-biogeokimia-sulit.md`
- [ ] `osn-smp-bio-05d-daur-biogeokimia-mudah-sedang.md`
- [ ] `osn-smp-bio-05d-daur-biogeokimia-sedang-sulit.md`

**BIO-05e · Simbiosis (Mutualisme, Komensalisme, Parasitisme)** (fokus Kab)
- [ ] `osn-smp-bio-05e-simbiosis-campur.md`
- [ ] `osn-smp-bio-05e-simbiosis-mudah.md`
- [ ] `osn-smp-bio-05e-simbiosis-sedang.md`
- [ ] `osn-smp-bio-05e-simbiosis-sulit.md`
- [ ] `osn-smp-bio-05e-simbiosis-mudah-sedang.md`
- [ ] `osn-smp-bio-05e-simbiosis-sedang-sulit.md`

**BIO-05f · Suksesi Ekosistem** (fokus Prov)
- [ ] `osn-smp-bio-05f-suksesi-campur.md`
- [ ] `osn-smp-bio-05f-suksesi-mudah.md`
- [ ] `osn-smp-bio-05f-suksesi-sedang.md`
- [ ] `osn-smp-bio-05f-suksesi-sulit.md`
- [ ] `osn-smp-bio-05f-suksesi-mudah-sedang.md`
- [ ] `osn-smp-bio-05f-suksesi-sedang-sulit.md`

**BIO-05g · Pencemaran Air** (fokus Kab)
- [ ] `osn-smp-bio-05g-pencemaran-air-campur.md`
- [ ] `osn-smp-bio-05g-pencemaran-air-mudah.md`
- [ ] `osn-smp-bio-05g-pencemaran-air-sedang.md`
- [ ] `osn-smp-bio-05g-pencemaran-air-sulit.md`
- [ ] `osn-smp-bio-05g-pencemaran-air-mudah-sedang.md`
- [ ] `osn-smp-bio-05g-pencemaran-air-sedang-sulit.md`

**BIO-05h · Pencemaran Udara** (fokus Kab)
- [ ] `osn-smp-bio-05h-pencemaran-udara-campur.md`
- [ ] `osn-smp-bio-05h-pencemaran-udara-mudah.md`
- [ ] `osn-smp-bio-05h-pencemaran-udara-sedang.md`
- [ ] `osn-smp-bio-05h-pencemaran-udara-sulit.md`
- [ ] `osn-smp-bio-05h-pencemaran-udara-mudah-sedang.md`
- [ ] `osn-smp-bio-05h-pencemaran-udara-sedang-sulit.md`

**BIO-05i · Pencemaran Tanah & Suara** (fokus Kab)
- [ ] `osn-smp-bio-05i-pencemaran-tanah-suara-campur.md`
- [ ] `osn-smp-bio-05i-pencemaran-tanah-suara-mudah.md`
- [ ] `osn-smp-bio-05i-pencemaran-tanah-suara-sedang.md`
- [ ] `osn-smp-bio-05i-pencemaran-tanah-suara-sulit.md`
- [ ] `osn-smp-bio-05i-pencemaran-tanah-suara-mudah-sedang.md`
- [ ] `osn-smp-bio-05i-pencemaran-tanah-suara-sedang-sulit.md`

**BIO-05j · Pemanasan Global & Efek Rumah Kaca** (fokus Kab–Prov)
- [ ] `osn-smp-bio-05j-pemanasan-global-campur.md`
- [ ] `osn-smp-bio-05j-pemanasan-global-mudah.md`
- [ ] `osn-smp-bio-05j-pemanasan-global-sedang.md`
- [ ] `osn-smp-bio-05j-pemanasan-global-sulit.md`
- [ ] `osn-smp-bio-05j-pemanasan-global-mudah-sedang.md`
- [ ] `osn-smp-bio-05j-pemanasan-global-sedang-sulit.md`

**BIO-05k · Pelestarian Lingkungan & Sumber Daya Alam** (fokus Prov)
- [ ] `osn-smp-bio-05k-pelestarian-sda-campur.md`
- [ ] `osn-smp-bio-05k-pelestarian-sda-mudah.md`
- [ ] `osn-smp-bio-05k-pelestarian-sda-sedang.md`
- [ ] `osn-smp-bio-05k-pelestarian-sda-sulit.md`
- [ ] `osn-smp-bio-05k-pelestarian-sda-mudah-sedang.md`
- [ ] `osn-smp-bio-05k-pelestarian-sda-sedang-sulit.md`

### BIO-06 · Pewarisan Sifat (Genetika) & Bioteknologi (9 sub-bab)

**BIO-06a · Materi Genetik (DNA, RNA, Kromosom, Gen)** (fokus Prov)
- [ ] `osn-smp-bio-06a-materi-genetik-campur.md`
- [ ] `osn-smp-bio-06a-materi-genetik-mudah.md`
- [ ] `osn-smp-bio-06a-materi-genetik-sedang.md`
- [ ] `osn-smp-bio-06a-materi-genetik-sulit.md`
- [ ] `osn-smp-bio-06a-materi-genetik-mudah-sedang.md`
- [ ] `osn-smp-bio-06a-materi-genetik-sedang-sulit.md`

**BIO-06b · Persilangan Monohibrid (Mendel I)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-06b-monohibrid-campur.md`
- [ ] `osn-smp-bio-06b-monohibrid-mudah.md`
- [ ] `osn-smp-bio-06b-monohibrid-sedang.md`
- [ ] `osn-smp-bio-06b-monohibrid-sulit.md`
- [ ] `osn-smp-bio-06b-monohibrid-mudah-sedang.md`
- [ ] `osn-smp-bio-06b-monohibrid-sedang-sulit.md`

**BIO-06c · Persilangan Dihibrid (Mendel II)** (fokus Prov–Nas)
- [ ] `osn-smp-bio-06c-dihibrid-campur.md`
- [ ] `osn-smp-bio-06c-dihibrid-mudah.md`
- [ ] `osn-smp-bio-06c-dihibrid-sedang.md`
- [ ] `osn-smp-bio-06c-dihibrid-sulit.md`
- [ ] `osn-smp-bio-06c-dihibrid-mudah-sedang.md`
- [ ] `osn-smp-bio-06c-dihibrid-sedang-sulit.md`

**BIO-06d · Persilangan Intermediet** (fokus Prov)
- [ ] `osn-smp-bio-06d-intermediet-campur.md`
- [ ] `osn-smp-bio-06d-intermediet-mudah.md`
- [ ] `osn-smp-bio-06d-intermediet-sedang.md`
- [ ] `osn-smp-bio-06d-intermediet-sulit.md`
- [ ] `osn-smp-bio-06d-intermediet-mudah-sedang.md`
- [ ] `osn-smp-bio-06d-intermediet-sedang-sulit.md`

**BIO-06e · Persilangan Tertutup, Test Cross** (fokus Prov)
- [ ] `osn-smp-bio-06e-test-cross-campur.md`
- [ ] `osn-smp-bio-06e-test-cross-mudah.md`
- [ ] `osn-smp-bio-06e-test-cross-sedang.md`
- [ ] `osn-smp-bio-06e-test-cross-sulit.md`
- [ ] `osn-smp-bio-06e-test-cross-mudah-sedang.md`
- [ ] `osn-smp-bio-06e-test-cross-sedang-sulit.md`

**BIO-06f · Genetika pada Manusia (Golongan Darah, Penyakit Genetik)** (fokus Prov–Nas)
- [ ] `osn-smp-bio-06f-genetika-manusia-campur.md`
- [ ] `osn-smp-bio-06f-genetika-manusia-mudah.md`
- [ ] `osn-smp-bio-06f-genetika-manusia-sedang.md`
- [ ] `osn-smp-bio-06f-genetika-manusia-sulit.md`
- [ ] `osn-smp-bio-06f-genetika-manusia-mudah-sedang.md`
- [ ] `osn-smp-bio-06f-genetika-manusia-sedang-sulit.md`

**BIO-06g · Bioteknologi Konvensional** (fokus Kab)
- [ ] `osn-smp-bio-06g-bioteknologi-konvensional-campur.md`
- [ ] `osn-smp-bio-06g-bioteknologi-konvensional-mudah.md`
- [ ] `osn-smp-bio-06g-bioteknologi-konvensional-sedang.md`
- [ ] `osn-smp-bio-06g-bioteknologi-konvensional-sulit.md`
- [ ] `osn-smp-bio-06g-bioteknologi-konvensional-mudah-sedang.md`
- [ ] `osn-smp-bio-06g-bioteknologi-konvensional-sedang-sulit.md`

**BIO-06h · Bioteknologi Modern (Rekayasa Genetik, Kultur Jaringan)** (fokus Prov)
- [ ] `osn-smp-bio-06h-bioteknologi-modern-campur.md`
- [ ] `osn-smp-bio-06h-bioteknologi-modern-mudah.md`
- [ ] `osn-smp-bio-06h-bioteknologi-modern-sedang.md`
- [ ] `osn-smp-bio-06h-bioteknologi-modern-sulit.md`
- [ ] `osn-smp-bio-06h-bioteknologi-modern-mudah-sedang.md`
- [ ] `osn-smp-bio-06h-bioteknologi-modern-sedang-sulit.md`

**BIO-06i · Bioteknologi dalam Kehidupan (Pertanian, Kedokteran, Pangan)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-06i-bioteknologi-kehidupan-campur.md`
- [ ] `osn-smp-bio-06i-bioteknologi-kehidupan-mudah.md`
- [ ] `osn-smp-bio-06i-bioteknologi-kehidupan-sedang.md`
- [ ] `osn-smp-bio-06i-bioteknologi-kehidupan-sulit.md`
- [ ] `osn-smp-bio-06i-bioteknologi-kehidupan-mudah-sedang.md`
- [ ] `osn-smp-bio-06i-bioteknologi-kehidupan-sedang-sulit.md`

### BIO-07 · Zat Aditif, Adiktif & Kimia dalam Kehidupan (9 sub-bab)

**BIO-07a · Sifat & Perubahan Zat (Fisika & Kimia)** (fokus Kab)
- [ ] `osn-smp-bio-07a-perubahan-zat-campur.md`
- [ ] `osn-smp-bio-07a-perubahan-zat-mudah.md`
- [ ] `osn-smp-bio-07a-perubahan-zat-sedang.md`
- [ ] `osn-smp-bio-07a-perubahan-zat-sulit.md`
- [ ] `osn-smp-bio-07a-perubahan-zat-mudah-sedang.md`
- [ ] `osn-smp-bio-07a-perubahan-zat-sedang-sulit.md`

**BIO-07b · Wujud Zat & Perubahan Wujud** (fokus Kab)
- [ ] `osn-smp-bio-07b-wujud-zat-campur.md`
- [ ] `osn-smp-bio-07b-wujud-zat-mudah.md`
- [ ] `osn-smp-bio-07b-wujud-zat-sedang.md`
- [ ] `osn-smp-bio-07b-wujud-zat-sulit.md`
- [ ] `osn-smp-bio-07b-wujud-zat-mudah-sedang.md`
- [ ] `osn-smp-bio-07b-wujud-zat-sedang-sulit.md`

**BIO-07c · Unsur, Senyawa, Campuran** (fokus Kab)
- [ ] `osn-smp-bio-07c-unsur-senyawa-campuran-campur.md`
- [ ] `osn-smp-bio-07c-unsur-senyawa-campuran-mudah.md`
- [ ] `osn-smp-bio-07c-unsur-senyawa-campuran-sedang.md`
- [ ] `osn-smp-bio-07c-unsur-senyawa-campuran-sulit.md`
- [ ] `osn-smp-bio-07c-unsur-senyawa-campuran-mudah-sedang.md`
- [ ] `osn-smp-bio-07c-unsur-senyawa-campuran-sedang-sulit.md`

**BIO-07d · Atom, Molekul, Ion (Pengantar)** (fokus Prov)
- [ ] `osn-smp-bio-07d-atom-molekul-ion-campur.md`
- [ ] `osn-smp-bio-07d-atom-molekul-ion-mudah.md`
- [ ] `osn-smp-bio-07d-atom-molekul-ion-sedang.md`
- [ ] `osn-smp-bio-07d-atom-molekul-ion-sulit.md`
- [ ] `osn-smp-bio-07d-atom-molekul-ion-mudah-sedang.md`
- [ ] `osn-smp-bio-07d-atom-molekul-ion-sedang-sulit.md`

**BIO-07e · Zat Aditif Makanan (Pewarna, Pengawet, Penyedap)** (fokus Kab)
- [ ] `osn-smp-bio-07e-zat-aditif-campur.md`
- [ ] `osn-smp-bio-07e-zat-aditif-mudah.md`
- [ ] `osn-smp-bio-07e-zat-aditif-sedang.md`
- [ ] `osn-smp-bio-07e-zat-aditif-sulit.md`
- [ ] `osn-smp-bio-07e-zat-aditif-mudah-sedang.md`
- [ ] `osn-smp-bio-07e-zat-aditif-sedang-sulit.md`

**BIO-07f · Zat Adiktif (Nikotin, Kafein, Alkohol)** (fokus Kab)
- [ ] `osn-smp-bio-07f-zat-adiktif-campur.md`
- [ ] `osn-smp-bio-07f-zat-adiktif-mudah.md`
- [ ] `osn-smp-bio-07f-zat-adiktif-sedang.md`
- [ ] `osn-smp-bio-07f-zat-adiktif-sulit.md`
- [ ] `osn-smp-bio-07f-zat-adiktif-mudah-sedang.md`
- [ ] `osn-smp-bio-07f-zat-adiktif-sedang-sulit.md`

**BIO-07g · Narkoba & Dampaknya** (fokus Kab)
- [ ] `osn-smp-bio-07g-narkoba-campur.md`
- [ ] `osn-smp-bio-07g-narkoba-mudah.md`
- [ ] `osn-smp-bio-07g-narkoba-sedang.md`
- [ ] `osn-smp-bio-07g-narkoba-sulit.md`
- [ ] `osn-smp-bio-07g-narkoba-mudah-sedang.md`
- [ ] `osn-smp-bio-07g-narkoba-sedang-sulit.md`

**BIO-07h · Asam, Basa, Garam (Indikator)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-07h-asam-basa-garam-campur.md`
- [ ] `osn-smp-bio-07h-asam-basa-garam-mudah.md`
- [ ] `osn-smp-bio-07h-asam-basa-garam-sedang.md`
- [ ] `osn-smp-bio-07h-asam-basa-garam-sulit.md`
- [ ] `osn-smp-bio-07h-asam-basa-garam-mudah-sedang.md`
- [ ] `osn-smp-bio-07h-asam-basa-garam-sedang-sulit.md`

**BIO-07i · Kimia di Rumah & Industri** (fokus Kab)
- [ ] `osn-smp-bio-07i-kimia-kehidupan-campur.md`
- [ ] `osn-smp-bio-07i-kimia-kehidupan-mudah.md`
- [ ] `osn-smp-bio-07i-kimia-kehidupan-sedang.md`
- [ ] `osn-smp-bio-07i-kimia-kehidupan-sulit.md`
- [ ] `osn-smp-bio-07i-kimia-kehidupan-mudah-sedang.md`
- [ ] `osn-smp-bio-07i-kimia-kehidupan-sedang-sulit.md`

---

## D · IPS Per Sub-Bab (43 sub-bab × 6 = 258 file)

### IPS-01 · Geografi (11 sub-bab)

**IPS-01a · Letak Astronomis & Geografis Indonesia** (fokus Kab)
- [ ] `osn-smp-ips-01a-letak-indonesia-campur.md`
- [ ] `osn-smp-ips-01a-letak-indonesia-mudah.md`
- [ ] `osn-smp-ips-01a-letak-indonesia-sedang.md`
- [ ] `osn-smp-ips-01a-letak-indonesia-sulit.md`
- [ ] `osn-smp-ips-01a-letak-indonesia-mudah-sedang.md`
- [ ] `osn-smp-ips-01a-letak-indonesia-sedang-sulit.md`

**IPS-01b · Iklim & Cuaca Indonesia** (fokus Kab–Prov)
- [ ] `osn-smp-ips-01b-iklim-cuaca-campur.md`
- [ ] `osn-smp-ips-01b-iklim-cuaca-mudah.md`
- [ ] `osn-smp-ips-01b-iklim-cuaca-sedang.md`
- [ ] `osn-smp-ips-01b-iklim-cuaca-sulit.md`
- [ ] `osn-smp-ips-01b-iklim-cuaca-mudah-sedang.md`
- [ ] `osn-smp-ips-01b-iklim-cuaca-sedang-sulit.md`

**IPS-01c · Flora & Fauna Indonesia** (fokus Kab–Prov)
- [ ] `osn-smp-ips-01c-flora-fauna-indonesia-campur.md`
- [ ] `osn-smp-ips-01c-flora-fauna-indonesia-mudah.md`
- [ ] `osn-smp-ips-01c-flora-fauna-indonesia-sedang.md`
- [ ] `osn-smp-ips-01c-flora-fauna-indonesia-sulit.md`
- [ ] `osn-smp-ips-01c-flora-fauna-indonesia-mudah-sedang.md`
- [ ] `osn-smp-ips-01c-flora-fauna-indonesia-sedang-sulit.md`

**IPS-01d · Sumber Daya Alam Indonesia** (fokus Kab–Prov)
- [ ] `osn-smp-ips-01d-sda-indonesia-campur.md`
- [ ] `osn-smp-ips-01d-sda-indonesia-mudah.md`
- [ ] `osn-smp-ips-01d-sda-indonesia-sedang.md`
- [ ] `osn-smp-ips-01d-sda-indonesia-sulit.md`
- [ ] `osn-smp-ips-01d-sda-indonesia-mudah-sedang.md`
- [ ] `osn-smp-ips-01d-sda-indonesia-sedang-sulit.md`

**IPS-01e · Bentang Alam Indonesia (Gunung, Sungai, Laut)** (fokus Kab)
- [ ] `osn-smp-ips-01e-bentang-alam-campur.md`
- [ ] `osn-smp-ips-01e-bentang-alam-mudah.md`
- [ ] `osn-smp-ips-01e-bentang-alam-sedang.md`
- [ ] `osn-smp-ips-01e-bentang-alam-sulit.md`
- [ ] `osn-smp-ips-01e-bentang-alam-mudah-sedang.md`
- [ ] `osn-smp-ips-01e-bentang-alam-sedang-sulit.md`

**IPS-01f · Kependudukan Indonesia (Demografi)** (fokus Prov)
- [ ] `osn-smp-ips-01f-demografi-indonesia-campur.md`
- [ ] `osn-smp-ips-01f-demografi-indonesia-mudah.md`
- [ ] `osn-smp-ips-01f-demografi-indonesia-sedang.md`
- [ ] `osn-smp-ips-01f-demografi-indonesia-sulit.md`
- [ ] `osn-smp-ips-01f-demografi-indonesia-mudah-sedang.md`
- [ ] `osn-smp-ips-01f-demografi-indonesia-sedang-sulit.md`

**IPS-01g · Persebaran Penduduk & Migrasi** (fokus Prov)
- [ ] `osn-smp-ips-01g-persebaran-migrasi-campur.md`
- [ ] `osn-smp-ips-01g-persebaran-migrasi-mudah.md`
- [ ] `osn-smp-ips-01g-persebaran-migrasi-sedang.md`
- [ ] `osn-smp-ips-01g-persebaran-migrasi-sulit.md`
- [ ] `osn-smp-ips-01g-persebaran-migrasi-mudah-sedang.md`
- [ ] `osn-smp-ips-01g-persebaran-migrasi-sedang-sulit.md`

**IPS-01h · Negara-negara ASEAN** (fokus Kab–Prov)
- [ ] `osn-smp-ips-01h-asean-campur.md`
- [ ] `osn-smp-ips-01h-asean-mudah.md`
- [ ] `osn-smp-ips-01h-asean-sedang.md`
- [ ] `osn-smp-ips-01h-asean-sulit.md`
- [ ] `osn-smp-ips-01h-asean-mudah-sedang.md`
- [ ] `osn-smp-ips-01h-asean-sedang-sulit.md`

**IPS-01i · Negara-negara di Benua Asia & Dunia** (fokus Prov–Nas)
- [ ] `osn-smp-ips-01i-benua-asia-dunia-campur.md`
- [ ] `osn-smp-ips-01i-benua-asia-dunia-mudah.md`
- [ ] `osn-smp-ips-01i-benua-asia-dunia-sedang.md`
- [ ] `osn-smp-ips-01i-benua-asia-dunia-sulit.md`
- [ ] `osn-smp-ips-01i-benua-asia-dunia-mudah-sedang.md`
- [ ] `osn-smp-ips-01i-benua-asia-dunia-sedang-sulit.md`

**IPS-01j · Interaksi Antarruang (Lokal, Nasional, Global)** (fokus Prov)
- [ ] `osn-smp-ips-01j-interaksi-antarruang-campur.md`
- [ ] `osn-smp-ips-01j-interaksi-antarruang-mudah.md`
- [ ] `osn-smp-ips-01j-interaksi-antarruang-sedang.md`
- [ ] `osn-smp-ips-01j-interaksi-antarruang-sulit.md`
- [ ] `osn-smp-ips-01j-interaksi-antarruang-mudah-sedang.md`
- [ ] `osn-smp-ips-01j-interaksi-antarruang-sedang-sulit.md`

**IPS-01k · Peta & Atlas (Membaca, Skala)** (fokus Kab)
- [ ] `osn-smp-ips-01k-peta-atlas-campur.md`
- [ ] `osn-smp-ips-01k-peta-atlas-mudah.md`
- [ ] `osn-smp-ips-01k-peta-atlas-sedang.md`
- [ ] `osn-smp-ips-01k-peta-atlas-sulit.md`
- [ ] `osn-smp-ips-01k-peta-atlas-mudah-sedang.md`
- [ ] `osn-smp-ips-01k-peta-atlas-sedang-sulit.md`

### IPS-02 · Sejarah (12 sub-bab)

**IPS-02a · Masa Praaksara Indonesia** (fokus Kab)
- [ ] `osn-smp-ips-02a-praaksara-campur.md`
- [ ] `osn-smp-ips-02a-praaksara-mudah.md`
- [ ] `osn-smp-ips-02a-praaksara-sedang.md`
- [ ] `osn-smp-ips-02a-praaksara-sulit.md`
- [ ] `osn-smp-ips-02a-praaksara-mudah-sedang.md`
- [ ] `osn-smp-ips-02a-praaksara-sedang-sulit.md`

**IPS-02b · Masa Hindu-Buddha di Indonesia** (fokus Kab–Prov)
- [ ] `osn-smp-ips-02b-hindu-buddha-campur.md`
- [ ] `osn-smp-ips-02b-hindu-buddha-mudah.md`
- [ ] `osn-smp-ips-02b-hindu-buddha-sedang.md`
- [ ] `osn-smp-ips-02b-hindu-buddha-sulit.md`
- [ ] `osn-smp-ips-02b-hindu-buddha-mudah-sedang.md`
- [ ] `osn-smp-ips-02b-hindu-buddha-sedang-sulit.md`

**IPS-02c · Masa Islam di Indonesia** (fokus Kab–Prov)
- [ ] `osn-smp-ips-02c-masa-islam-campur.md`
- [ ] `osn-smp-ips-02c-masa-islam-mudah.md`
- [ ] `osn-smp-ips-02c-masa-islam-sedang.md`
- [ ] `osn-smp-ips-02c-masa-islam-sulit.md`
- [ ] `osn-smp-ips-02c-masa-islam-mudah-sedang.md`
- [ ] `osn-smp-ips-02c-masa-islam-sedang-sulit.md`

**IPS-02d · Kedatangan Bangsa Eropa** (fokus Kab)
- [ ] `osn-smp-ips-02d-kedatangan-eropa-campur.md`
- [ ] `osn-smp-ips-02d-kedatangan-eropa-mudah.md`
- [ ] `osn-smp-ips-02d-kedatangan-eropa-sedang.md`
- [ ] `osn-smp-ips-02d-kedatangan-eropa-sulit.md`
- [ ] `osn-smp-ips-02d-kedatangan-eropa-mudah-sedang.md`
- [ ] `osn-smp-ips-02d-kedatangan-eropa-sedang-sulit.md`

**IPS-02e · Penjajahan Belanda & VOC** (fokus Kab–Prov)
- [ ] `osn-smp-ips-02e-belanda-voc-campur.md`
- [ ] `osn-smp-ips-02e-belanda-voc-mudah.md`
- [ ] `osn-smp-ips-02e-belanda-voc-sedang.md`
- [ ] `osn-smp-ips-02e-belanda-voc-sulit.md`
- [ ] `osn-smp-ips-02e-belanda-voc-mudah-sedang.md`
- [ ] `osn-smp-ips-02e-belanda-voc-sedang-sulit.md`

**IPS-02f · Penjajahan Jepang** (fokus Kab)
- [ ] `osn-smp-ips-02f-penjajahan-jepang-campur.md`
- [ ] `osn-smp-ips-02f-penjajahan-jepang-mudah.md`
- [ ] `osn-smp-ips-02f-penjajahan-jepang-sedang.md`
- [ ] `osn-smp-ips-02f-penjajahan-jepang-sulit.md`
- [ ] `osn-smp-ips-02f-penjajahan-jepang-mudah-sedang.md`
- [ ] `osn-smp-ips-02f-penjajahan-jepang-sedang-sulit.md`

**IPS-02g · Pergerakan Nasional Indonesia** (fokus Kab–Prov)
- [ ] `osn-smp-ips-02g-pergerakan-nasional-campur.md`
- [ ] `osn-smp-ips-02g-pergerakan-nasional-mudah.md`
- [ ] `osn-smp-ips-02g-pergerakan-nasional-sedang.md`
- [ ] `osn-smp-ips-02g-pergerakan-nasional-sulit.md`
- [ ] `osn-smp-ips-02g-pergerakan-nasional-mudah-sedang.md`
- [ ] `osn-smp-ips-02g-pergerakan-nasional-sedang-sulit.md`

**IPS-02h · Proklamasi & Perjuangan Kemerdekaan** (fokus Kab–Prov)
- [ ] `osn-smp-ips-02h-proklamasi-campur.md`
- [ ] `osn-smp-ips-02h-proklamasi-mudah.md`
- [ ] `osn-smp-ips-02h-proklamasi-sedang.md`
- [ ] `osn-smp-ips-02h-proklamasi-sulit.md`
- [ ] `osn-smp-ips-02h-proklamasi-mudah-sedang.md`
- [ ] `osn-smp-ips-02h-proklamasi-sedang-sulit.md`

**IPS-02i · Demokrasi Terpimpin & Orde Lama** (fokus Prov)
- [ ] `osn-smp-ips-02i-orde-lama-campur.md`
- [ ] `osn-smp-ips-02i-orde-lama-mudah.md`
- [ ] `osn-smp-ips-02i-orde-lama-sedang.md`
- [ ] `osn-smp-ips-02i-orde-lama-sulit.md`
- [ ] `osn-smp-ips-02i-orde-lama-mudah-sedang.md`
- [ ] `osn-smp-ips-02i-orde-lama-sedang-sulit.md`

**IPS-02j · Orde Baru** (fokus Prov)
- [ ] `osn-smp-ips-02j-orde-baru-campur.md`
- [ ] `osn-smp-ips-02j-orde-baru-mudah.md`
- [ ] `osn-smp-ips-02j-orde-baru-sedang.md`
- [ ] `osn-smp-ips-02j-orde-baru-sulit.md`
- [ ] `osn-smp-ips-02j-orde-baru-mudah-sedang.md`
- [ ] `osn-smp-ips-02j-orde-baru-sedang-sulit.md`

**IPS-02k · Reformasi** (fokus Prov)
- [ ] `osn-smp-ips-02k-reformasi-campur.md`
- [ ] `osn-smp-ips-02k-reformasi-mudah.md`
- [ ] `osn-smp-ips-02k-reformasi-sedang.md`
- [ ] `osn-smp-ips-02k-reformasi-sulit.md`
- [ ] `osn-smp-ips-02k-reformasi-mudah-sedang.md`
- [ ] `osn-smp-ips-02k-reformasi-sedang-sulit.md`

**IPS-02l · Sejarah Dunia (Perang Dunia I & II, Perang Dingin)** (fokus Prov–Nas)
- [ ] `osn-smp-ips-02l-sejarah-dunia-campur.md`
- [ ] `osn-smp-ips-02l-sejarah-dunia-mudah.md`
- [ ] `osn-smp-ips-02l-sejarah-dunia-sedang.md`
- [ ] `osn-smp-ips-02l-sejarah-dunia-sulit.md`
- [ ] `osn-smp-ips-02l-sejarah-dunia-mudah-sedang.md`
- [ ] `osn-smp-ips-02l-sejarah-dunia-sedang-sulit.md`

### IPS-03 · Ekonomi (10 sub-bab)

**IPS-03a · Konsep Dasar Ekonomi (Kebutuhan & Kelangkaan)** (fokus Kab)
- [ ] `osn-smp-ips-03a-dasar-ekonomi-campur.md`
- [ ] `osn-smp-ips-03a-dasar-ekonomi-mudah.md`
- [ ] `osn-smp-ips-03a-dasar-ekonomi-sedang.md`
- [ ] `osn-smp-ips-03a-dasar-ekonomi-sulit.md`
- [ ] `osn-smp-ips-03a-dasar-ekonomi-mudah-sedang.md`
- [ ] `osn-smp-ips-03a-dasar-ekonomi-sedang-sulit.md`

**IPS-03b · Tindakan, Motif, Prinsip Ekonomi** (fokus Kab)
- [ ] `osn-smp-ips-03b-tindakan-motif-campur.md`
- [ ] `osn-smp-ips-03b-tindakan-motif-mudah.md`
- [ ] `osn-smp-ips-03b-tindakan-motif-sedang.md`
- [ ] `osn-smp-ips-03b-tindakan-motif-sulit.md`
- [ ] `osn-smp-ips-03b-tindakan-motif-mudah-sedang.md`
- [ ] `osn-smp-ips-03b-tindakan-motif-sedang-sulit.md`

**IPS-03c · Pelaku Ekonomi (Konsumen, Produsen, Pemerintah)** (fokus Kab)
- [ ] `osn-smp-ips-03c-pelaku-ekonomi-campur.md`
- [ ] `osn-smp-ips-03c-pelaku-ekonomi-mudah.md`
- [ ] `osn-smp-ips-03c-pelaku-ekonomi-sedang.md`
- [ ] `osn-smp-ips-03c-pelaku-ekonomi-sulit.md`
- [ ] `osn-smp-ips-03c-pelaku-ekonomi-mudah-sedang.md`
- [ ] `osn-smp-ips-03c-pelaku-ekonomi-sedang-sulit.md`

**IPS-03d · Pasar & Macam-macamnya** (fokus Kab–Prov)
- [ ] `osn-smp-ips-03d-pasar-jenis-campur.md`
- [ ] `osn-smp-ips-03d-pasar-jenis-mudah.md`
- [ ] `osn-smp-ips-03d-pasar-jenis-sedang.md`
- [ ] `osn-smp-ips-03d-pasar-jenis-sulit.md`
- [ ] `osn-smp-ips-03d-pasar-jenis-mudah-sedang.md`
- [ ] `osn-smp-ips-03d-pasar-jenis-sedang-sulit.md`

**IPS-03e · Permintaan, Penawaran, Harga Keseimbangan** (fokus Prov)
- [ ] `osn-smp-ips-03e-permintaan-penawaran-campur.md`
- [ ] `osn-smp-ips-03e-permintaan-penawaran-mudah.md`
- [ ] `osn-smp-ips-03e-permintaan-penawaran-sedang.md`
- [ ] `osn-smp-ips-03e-permintaan-penawaran-sulit.md`
- [ ] `osn-smp-ips-03e-permintaan-penawaran-mudah-sedang.md`
- [ ] `osn-smp-ips-03e-permintaan-penawaran-sedang-sulit.md`

**IPS-03f · Uang (Fungsi, Jenis, Sejarah)** (fokus Kab)
- [ ] `osn-smp-ips-03f-uang-campur.md`
- [ ] `osn-smp-ips-03f-uang-mudah.md`
- [ ] `osn-smp-ips-03f-uang-sedang.md`
- [ ] `osn-smp-ips-03f-uang-sulit.md`
- [ ] `osn-smp-ips-03f-uang-mudah-sedang.md`
- [ ] `osn-smp-ips-03f-uang-sedang-sulit.md`

**IPS-03g · Bank & Lembaga Keuangan** (fokus Kab–Prov)
- [ ] `osn-smp-ips-03g-bank-lembaga-keuangan-campur.md`
- [ ] `osn-smp-ips-03g-bank-lembaga-keuangan-mudah.md`
- [ ] `osn-smp-ips-03g-bank-lembaga-keuangan-sedang.md`
- [ ] `osn-smp-ips-03g-bank-lembaga-keuangan-sulit.md`
- [ ] `osn-smp-ips-03g-bank-lembaga-keuangan-mudah-sedang.md`
- [ ] `osn-smp-ips-03g-bank-lembaga-keuangan-sedang-sulit.md`

**IPS-03h · Kewirausahaan** (fokus Kab)
- [ ] `osn-smp-ips-03h-kewirausahaan-campur.md`
- [ ] `osn-smp-ips-03h-kewirausahaan-mudah.md`
- [ ] `osn-smp-ips-03h-kewirausahaan-sedang.md`
- [ ] `osn-smp-ips-03h-kewirausahaan-sulit.md`
- [ ] `osn-smp-ips-03h-kewirausahaan-mudah-sedang.md`
- [ ] `osn-smp-ips-03h-kewirausahaan-sedang-sulit.md`

**IPS-03i · Aritmetika Sosial (Tabungan, Pajak, Bunga)** (fokus Kab–Prov)
- [ ] `osn-smp-ips-03i-aritmetika-sosial-campur.md`
- [ ] `osn-smp-ips-03i-aritmetika-sosial-mudah.md`
- [ ] `osn-smp-ips-03i-aritmetika-sosial-sedang.md`
- [ ] `osn-smp-ips-03i-aritmetika-sosial-sulit.md`
- [ ] `osn-smp-ips-03i-aritmetika-sosial-mudah-sedang.md`
- [ ] `osn-smp-ips-03i-aritmetika-sosial-sedang-sulit.md`

**IPS-03j · Perdagangan Antarnegara** (fokus Prov)
- [ ] `osn-smp-ips-03j-perdagangan-antarnegara-campur.md`
- [ ] `osn-smp-ips-03j-perdagangan-antarnegara-mudah.md`
- [ ] `osn-smp-ips-03j-perdagangan-antarnegara-sedang.md`
- [ ] `osn-smp-ips-03j-perdagangan-antarnegara-sulit.md`
- [ ] `osn-smp-ips-03j-perdagangan-antarnegara-mudah-sedang.md`
- [ ] `osn-smp-ips-03j-perdagangan-antarnegara-sedang-sulit.md`

### IPS-04 · Sosiologi & Antropologi (10 sub-bab)

**IPS-04a · Interaksi Sosial (Asosiatif & Disosiatif)** (fokus Kab)
- [ ] `osn-smp-ips-04a-interaksi-sosial-campur.md`
- [ ] `osn-smp-ips-04a-interaksi-sosial-mudah.md`
- [ ] `osn-smp-ips-04a-interaksi-sosial-sedang.md`
- [ ] `osn-smp-ips-04a-interaksi-sosial-sulit.md`
- [ ] `osn-smp-ips-04a-interaksi-sosial-mudah-sedang.md`
- [ ] `osn-smp-ips-04a-interaksi-sosial-sedang-sulit.md`

**IPS-04b · Sosialisasi & Pembentukan Kepribadian** (fokus Kab)
- [ ] `osn-smp-ips-04b-sosialisasi-campur.md`
- [ ] `osn-smp-ips-04b-sosialisasi-mudah.md`
- [ ] `osn-smp-ips-04b-sosialisasi-sedang.md`
- [ ] `osn-smp-ips-04b-sosialisasi-sulit.md`
- [ ] `osn-smp-ips-04b-sosialisasi-mudah-sedang.md`
- [ ] `osn-smp-ips-04b-sosialisasi-sedang-sulit.md`

**IPS-04c · Lembaga Sosial (Keluarga, Agama, Pendidikan, Politik, Ekonomi)** (fokus Kab–Prov)
- [ ] `osn-smp-ips-04c-lembaga-sosial-campur.md`
- [ ] `osn-smp-ips-04c-lembaga-sosial-mudah.md`
- [ ] `osn-smp-ips-04c-lembaga-sosial-sedang.md`
- [ ] `osn-smp-ips-04c-lembaga-sosial-sulit.md`
- [ ] `osn-smp-ips-04c-lembaga-sosial-mudah-sedang.md`
- [ ] `osn-smp-ips-04c-lembaga-sosial-sedang-sulit.md`

**IPS-04d · Mobilitas Sosial** (fokus Prov)
- [ ] `osn-smp-ips-04d-mobilitas-sosial-campur.md`
- [ ] `osn-smp-ips-04d-mobilitas-sosial-mudah.md`
- [ ] `osn-smp-ips-04d-mobilitas-sosial-sedang.md`
- [ ] `osn-smp-ips-04d-mobilitas-sosial-sulit.md`
- [ ] `osn-smp-ips-04d-mobilitas-sosial-mudah-sedang.md`
- [ ] `osn-smp-ips-04d-mobilitas-sosial-sedang-sulit.md`

**IPS-04e · Stratifikasi & Diferensiasi Sosial** (fokus Prov)
- [ ] `osn-smp-ips-04e-stratifikasi-diferensiasi-campur.md`
- [ ] `osn-smp-ips-04e-stratifikasi-diferensiasi-mudah.md`
- [ ] `osn-smp-ips-04e-stratifikasi-diferensiasi-sedang.md`
- [ ] `osn-smp-ips-04e-stratifikasi-diferensiasi-sulit.md`
- [ ] `osn-smp-ips-04e-stratifikasi-diferensiasi-mudah-sedang.md`
- [ ] `osn-smp-ips-04e-stratifikasi-diferensiasi-sedang-sulit.md`

**IPS-04f · Konflik & Integrasi Sosial** (fokus Prov)
- [ ] `osn-smp-ips-04f-konflik-integrasi-campur.md`
- [ ] `osn-smp-ips-04f-konflik-integrasi-mudah.md`
- [ ] `osn-smp-ips-04f-konflik-integrasi-sedang.md`
- [ ] `osn-smp-ips-04f-konflik-integrasi-sulit.md`
- [ ] `osn-smp-ips-04f-konflik-integrasi-mudah-sedang.md`
- [ ] `osn-smp-ips-04f-konflik-integrasi-sedang-sulit.md`

**IPS-04g · Perubahan Sosial Budaya** (fokus Prov)
- [ ] `osn-smp-ips-04g-perubahan-sosial-campur.md`
- [ ] `osn-smp-ips-04g-perubahan-sosial-mudah.md`
- [ ] `osn-smp-ips-04g-perubahan-sosial-sedang.md`
- [ ] `osn-smp-ips-04g-perubahan-sosial-sulit.md`
- [ ] `osn-smp-ips-04g-perubahan-sosial-mudah-sedang.md`
- [ ] `osn-smp-ips-04g-perubahan-sosial-sedang-sulit.md`

**IPS-04h · Keanekaragaman Budaya Indonesia** (fokus Kab–Prov)
- [ ] `osn-smp-ips-04h-budaya-indonesia-campur.md`
- [ ] `osn-smp-ips-04h-budaya-indonesia-mudah.md`
- [ ] `osn-smp-ips-04h-budaya-indonesia-sedang.md`
- [ ] `osn-smp-ips-04h-budaya-indonesia-sulit.md`
- [ ] `osn-smp-ips-04h-budaya-indonesia-mudah-sedang.md`
- [ ] `osn-smp-ips-04h-budaya-indonesia-sedang-sulit.md`

**IPS-04i · Globalisasi & Dampaknya** (fokus Prov)
- [ ] `osn-smp-ips-04i-globalisasi-campur.md`
- [ ] `osn-smp-ips-04i-globalisasi-mudah.md`
- [ ] `osn-smp-ips-04i-globalisasi-sedang.md`
- [ ] `osn-smp-ips-04i-globalisasi-sulit.md`
- [ ] `osn-smp-ips-04i-globalisasi-mudah-sedang.md`
- [ ] `osn-smp-ips-04i-globalisasi-sedang-sulit.md`

**IPS-04j · Kearifan Lokal** (fokus Prov)
- [ ] `osn-smp-ips-04j-kearifan-lokal-campur.md`
- [ ] `osn-smp-ips-04j-kearifan-lokal-mudah.md`
- [ ] `osn-smp-ips-04j-kearifan-lokal-sedang.md`
- [ ] `osn-smp-ips-04j-kearifan-lokal-sulit.md`
- [ ] `osn-smp-ips-04j-kearifan-lokal-mudah-sedang.md`
- [ ] `osn-smp-ips-04j-kearifan-lokal-sedang-sulit.md`

---

## Rekap Statistik Sub-Bab

| Bab | Sub-Bab | File (×6 tingkat) | Soal |
|-----|---------|-------------------|------|
| MTK-01 · Bilangan & Operasi | 11 | 66 | 6.600 |
| MTK-02 · Aljabar & Bentuk Aljabar | 10 | 60 | 6.000 |
| MTK-03 · Persamaan & Pertidaksamaan | 10 | 60 | 6.000 |
| MTK-04 · Fungsi, Relasi & Garis Lurus | 9 | 54 | 5.400 |
| MTK-05 · Perbandingan, Skala, Aritmetika Sosial | 9 | 54 | 5.400 |
| MTK-06 · Geometri Datar | 12 | 72 | 7.200 |
| MTK-07 · Geometri Ruang | 10 | 60 | 6.000 |
| MTK-08 · Transformasi & Kesebangunan | 9 | 54 | 5.400 |
| MTK-09 · Statistika & Peluang | 11 | 66 | 6.600 |
| MTK-10 · Teori Bilangan, Pola, Kombinatorika | 11 | 66 | 6.600 |
| **Subtotal MTK** | **102** | **612** | **61.200** |
| FIS-01 · Pengukuran, Besaran & Satuan | 9 | 54 | 5.400 |
| FIS-02 · Gerak (Kinematika) | 8 | 48 | 4.800 |
| FIS-03 · Gaya & Hukum Newton | 8 | 48 | 4.800 |
| FIS-04 · Usaha, Energi & Pesawat Sederhana | 10 | 60 | 6.000 |
| FIS-05 · Tekanan & Fluida | 8 | 48 | 4.800 |
| FIS-06 · Suhu, Kalor & Perpindahan Panas | 9 | 54 | 5.400 |
| FIS-07 · Getaran, Gelombang, Bunyi & Optik | 11 | 66 | 6.600 |
| FIS-08 · Listrik, Magnet & Tata Surya | 11 | 66 | 6.600 |
| **Subtotal Fisika** | **74** | **444** | **44.400** |
| BIO-01 · Klasifikasi, Sel & Jaringan | 10 | 60 | 6.000 |
| BIO-02 · Sistem Organ Manusia I | 10 | 60 | 6.000 |
| BIO-03 · Sistem Organ Manusia II | 11 | 66 | 6.600 |
| BIO-04 · Struktur & Fungsi Tumbuhan | 10 | 60 | 6.000 |
| BIO-05 · Ekosistem, Lingkungan, Pencemaran | 11 | 66 | 6.600 |
| BIO-06 · Pewarisan Sifat & Bioteknologi | 9 | 54 | 5.400 |
| BIO-07 · Zat Aditif, Adiktif, Kimia Kehidupan | 9 | 54 | 5.400 |
| **Subtotal Biologi** | **70** | **420** | **42.000** |
| IPS-01 · Geografi | 11 | 66 | 6.600 |
| IPS-02 · Sejarah | 12 | 72 | 7.200 |
| IPS-03 · Ekonomi | 10 | 60 | 6.000 |
| IPS-04 · Sosiologi & Antropologi | 10 | 60 | 6.000 |
| **Subtotal IPS** | **43** | **258** | **25.800** |
| **TOTAL** | **289** | **1.734** | **173.400** |

---

## Catatan Eksekusi

- **1 file = 100 soal PG**, semua pada satu sub-bab. Variasi dicipta lewat kombinasi tipe soal khas + ragam angka + ragam konteks.
- Default ekstensi `.md` (markdown teks lengkap dengan Bagian I Materi + Bagian II 100 Soal + Bagian III Ringkasan). HTML interaktif `.html` hanya kalau user eksplisit minta.
- Struktur file sama dengan Mode Per-Materi MASTER-INDEX: **Bagian I (Materi) + Bagian II (100 Soal) + Bagian III (Ringkasan)** — tapi Bagian I difokuskan pada satu sub-bab saja.
- Update centang `[ ]` → `[x]` setiap kali file selesai. Index ini adalah sumber kebenaran untuk progres sub-bab.
- File ini **melengkapi** [_MASTER-INDEX.md](_MASTER-INDEX.md), bukan menggantinya. Gunakan MASTER-INDEX untuk paket bab-level luas, dan file ini untuk drill mendalam satu sub-topik.
- Urutan eksekusi default mengikuti urutan sub-bab di taksonomi (alfabetis kode huruf). User boleh redirect kapan saja.
- **Khusus IPA SMP**: Karena di OSN/KSN SMP, IPA disajikan terintegrasi (Fisika + Biologi dalam satu sesi tes), saat drill sub-bab Fisika dan Biologi pun konteks soal boleh sesekali memanfaatkan irisan antar-disiplin (mis. Tekanan Fluida bisa pakai konteks peredaran darah, Optik bisa pakai konteks mata) — tapi *fokus utama 100 soal tetap pada sub-bab yang sedang dikerjakan*.

---

## Trigger Generation per Sub-Bab

Untuk minta generate file sub-bab, gunakan trigger spesifik:

- "Generate `osn-smp-mtk-03c-spldv-substitusi-sulit.md`"
- "Buatkan 100 soal sub-bab SPLDV metode substitusi tingkat Nasional"
- "Sub-bab FIS-04g katrol, tingkat campur"
- "Lanjutkan dari MASTER-SUBBAB-INDEX baris berikutnya yang belum dicentang"

Default behaviour: skill akan baca taksonomi & contoh soal terkait → ambil **Tipe Soal Khas OSN** dan **Miskonsepsi** untuk sub-bab itu → distribusikan 100 soal di antaranya dengan komposisi tingkat sesuai slug `-mudah / -sedang / -sulit / -campur / -mudah-sedang / -sedang-sulit`.

