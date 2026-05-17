# OSN SMA Prep — MASTER SUB-BAB INDEX

> Pemecahan lanjutan dari [_MASTER-INDEX.md](_MASTER-INDEX.md) — setiap bab dibedah jadi sub-bab,
> setiap sub-bab × 6 tingkat = 1 paket drill 100 soal terfokus pada satu sub-topik.
>
> **619 sub-bab × 6 tingkat = 3.714 file × 100 soal PG = 371.400 soal terfokus**
>
> Setiap file: 100 soal PG dengan analisis seluruh opsi (A–D default, A–E untuk Astronomi/Kebumian/Fisika OSN),
> tapi 100% materinya digali di satu sub-bab → drill mendalam per sub-topik level olimpiade.

---

## Konvensi Penamaan File

```
osn-sma-{mapel}-{kodeBab}{kodeSubbab}-{slug}-{tingkat}.md
```

- `mapel` = `mtk` · `fis` · `kim` · `bio` · `ast` · `keb` · `geo` · `eko` · `inf`
- `kodeBab` = `01`–`10` (per mapel)
- `kodeSubbab` = huruf kecil `a`, `b`, `c`, … `k` (urutan sesuai taksonomi)
- `slug` = ringkas, kebab-case
- `tingkat` = `campur` · `mudah` · `sedang` · `sulit` · `mudah-sedang` · `sedang-sulit`

**Contoh:** `osn-sma-fis-04f-momentum-sudut-sulit.md` = Fisika Bab 04 sub-bab f (Momentum Sudut & Kekekalannya), 100 soal tingkat Nasional saja.

Untuk konvensi tingkat (komposisi soal Kab/Prov/Nas), distribusi, dan aturan kualitas — lihat [_MASTER-INDEX.md](_MASTER-INDEX.md) dan [SKILL.md](../../osn-sd-prep-extracted/osn-sd-prep/SKILL.md).

> **Catatan:** Saat generate file sub-bab, **seluruh 100 soal harus pada sub-topik tunggal** itu — bukan campur lintas sub-bab. Variasi diciptakan melalui ragam konteks, angka, dan tipe soal khas olimpiade untuk sub-topik tersebut.

---

## ⛔ Aturan Anti-Duplikasi (WAJIB)

Karena seluruh 100 soal per file berada di satu sub-topik yang sama, **risiko duplikasi sangat tinggi** dan harus dicegah secara aktif. Apalagi pada tingkat SMA dimana sub-topik bisa terasa sempit (mis. "Hukum Pascal" atau "Modulo").

1. **Tetap 100 soal per file** — tidak boleh dipotong untuk "menghindari pengulangan". Kalau sub-topik kelihatan sempit, perluas dengan ragam konteks olimpiade — bukan dengan mengurangi jumlah.
2. **Tidak boleh ada dua soal yang sama persis dalam satu file** — bukan hanya angka, tapi juga **kombinasi (konteks + angka + struktur soal)** harus berbeda.
3. **Tidak boleh sama persis dengan soal di file sub-bab tingkat lain** (mis. soal nomor 12 di `…-mudah.md` tidak boleh sama persis dengan soal nomor 12 di `…-campur.md`).
4. **Diversifikasi via 4 sumbu** — kombinasikan agar 100 soal terasa beda:
   - **Konteks**: laboratorium, industri, alam, teknologi, transportasi, kedokteran/biomedis, astronomi praktis, simulasi komputasi, soal abstrak murni, soal aplikasi engineering.
   - **Angka**: nilai berbeda — gunakan satuan & orde besaran yang variatif (SI, CGS, satuan astronomi seperti AU/pc, satuan kimia seperti mol/M).
   - **Bentuk soal**: numerik langsung, perbandingan, derivasi singkat, identifikasi pernyataan benar, soal tabel/grafik, soal eksperimen.
   - **Sudut tanya**: "berapa nilai…", "manakah yang benar…", "jika X berubah, maka Y…", "urutan yang tepat…", "berapa selisih…", "kondisi minimum/maksimum…".
5. **Tipe soal khas olimpiade boleh diulang** (mis. tipe "soal Atwood" di Fisika, tipe "stoikiometri pereaksi pembatas" di Kimia, tipe "pedigree autosomal" di Biologi) — yang dilarang adalah **soal identik**.
6. **Verifikasi sebelum save** — scan ulang 100 soal: cek duplikasi struktur, rotasi angka & satuan, sebaran konteks.
7. **Lintas-tingkat per sub-bab** — 6 file tingkat membentuk **600 soal yang semuanya unik**. Saat generate file ke-2 dst, **baca file sub-bab tingkat sebelumnya dulu** untuk memastikan tidak ada soal yang persis sama.

---

## A · MTK Per Sub-Bab (82 sub-bab × 6 = 492 file)

Tag **`(fokus …)`** = tingkat kesulitan alami sub-topik tersebut menurut bobot KSN — bukan jumlah soal. **Setiap file sub-bab tetap 100 soal**, apa pun tag fokusnya.

### MTK-01 · Aljabar (11 sub-bab)

**MTK-01a · Operasi Aljabar & Identitas** (fokus Kab)
- [ ] `osn-sma-mtk-01a-operasi-identitas-campur.md`
- [ ] `osn-sma-mtk-01a-operasi-identitas-mudah.md`
- [ ] `osn-sma-mtk-01a-operasi-identitas-sedang.md`
- [ ] `osn-sma-mtk-01a-operasi-identitas-sulit.md`
- [ ] `osn-sma-mtk-01a-operasi-identitas-mudah-sedang.md`
- [ ] `osn-sma-mtk-01a-operasi-identitas-sedang-sulit.md`

**MTK-01b · Polinomial & Suku Banyak** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-01b-polinomial-campur.md`
- [ ] `osn-sma-mtk-01b-polinomial-mudah.md`
- [ ] `osn-sma-mtk-01b-polinomial-sedang.md`
- [ ] `osn-sma-mtk-01b-polinomial-sulit.md`
- [ ] `osn-sma-mtk-01b-polinomial-mudah-sedang.md`
- [ ] `osn-sma-mtk-01b-polinomial-sedang-sulit.md`

**MTK-01c · Teorema Sisa & Teorema Faktor** (fokus Prov)
- [ ] `osn-sma-mtk-01c-teorema-sisa-faktor-campur.md`
- [ ] `osn-sma-mtk-01c-teorema-sisa-faktor-mudah.md`
- [ ] `osn-sma-mtk-01c-teorema-sisa-faktor-sedang.md`
- [ ] `osn-sma-mtk-01c-teorema-sisa-faktor-sulit.md`
- [ ] `osn-sma-mtk-01c-teorema-sisa-faktor-mudah-sedang.md`
- [ ] `osn-sma-mtk-01c-teorema-sisa-faktor-sedang-sulit.md`

**MTK-01d · Akar-akar Polinomial & Hubungan Akar-Koefisien (Vieta)** (fokus Prov–Nas)
- [ ] `osn-sma-mtk-01d-vieta-campur.md`
- [ ] `osn-sma-mtk-01d-vieta-mudah.md`
- [ ] `osn-sma-mtk-01d-vieta-sedang.md`
- [ ] `osn-sma-mtk-01d-vieta-sulit.md`
- [ ] `osn-sma-mtk-01d-vieta-mudah-sedang.md`
- [ ] `osn-sma-mtk-01d-vieta-sedang-sulit.md`

**MTK-01e · Persamaan Kuadrat & Karakteristik Akar** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-01e-pers-kuadrat-akar-campur.md`
- [ ] `osn-sma-mtk-01e-pers-kuadrat-akar-mudah.md`
- [ ] `osn-sma-mtk-01e-pers-kuadrat-akar-sedang.md`
- [ ] `osn-sma-mtk-01e-pers-kuadrat-akar-sulit.md`
- [ ] `osn-sma-mtk-01e-pers-kuadrat-akar-mudah-sedang.md`
- [ ] `osn-sma-mtk-01e-pers-kuadrat-akar-sedang-sulit.md`

**MTK-01f · Pertidaksamaan Linear & Kuadrat** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-01f-pertidaksamaan-linear-kuadrat-campur.md`
- [ ] `osn-sma-mtk-01f-pertidaksamaan-linear-kuadrat-mudah.md`
- [ ] `osn-sma-mtk-01f-pertidaksamaan-linear-kuadrat-sedang.md`
- [ ] `osn-sma-mtk-01f-pertidaksamaan-linear-kuadrat-sulit.md`
- [ ] `osn-sma-mtk-01f-pertidaksamaan-linear-kuadrat-mudah-sedang.md`
- [ ] `osn-sma-mtk-01f-pertidaksamaan-linear-kuadrat-sedang-sulit.md`

**MTK-01g · Pertidaksamaan Rasional & Irasional** (fokus Prov)
- [ ] `osn-sma-mtk-01g-pertidaksamaan-rasional-irasional-campur.md`
- [ ] `osn-sma-mtk-01g-pertidaksamaan-rasional-irasional-mudah.md`
- [ ] `osn-sma-mtk-01g-pertidaksamaan-rasional-irasional-sedang.md`
- [ ] `osn-sma-mtk-01g-pertidaksamaan-rasional-irasional-sulit.md`
- [ ] `osn-sma-mtk-01g-pertidaksamaan-rasional-irasional-mudah-sedang.md`
- [ ] `osn-sma-mtk-01g-pertidaksamaan-rasional-irasional-sedang-sulit.md`

**MTK-01h · Pertidaksamaan Nilai Mutlak** (fokus Prov)
- [ ] `osn-sma-mtk-01h-pertidaksamaan-nilai-mutlak-campur.md`
- [ ] `osn-sma-mtk-01h-pertidaksamaan-nilai-mutlak-mudah.md`
- [ ] `osn-sma-mtk-01h-pertidaksamaan-nilai-mutlak-sedang.md`
- [ ] `osn-sma-mtk-01h-pertidaksamaan-nilai-mutlak-sulit.md`
- [ ] `osn-sma-mtk-01h-pertidaksamaan-nilai-mutlak-mudah-sedang.md`
- [ ] `osn-sma-mtk-01h-pertidaksamaan-nilai-mutlak-sedang-sulit.md`

**MTK-01i · Sistem Persamaan Linear (Lanjut)** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-01i-spl-lanjut-campur.md`
- [ ] `osn-sma-mtk-01i-spl-lanjut-mudah.md`
- [ ] `osn-sma-mtk-01i-spl-lanjut-sedang.md`
- [ ] `osn-sma-mtk-01i-spl-lanjut-sulit.md`
- [ ] `osn-sma-mtk-01i-spl-lanjut-mudah-sedang.md`
- [ ] `osn-sma-mtk-01i-spl-lanjut-sedang-sulit.md`

**MTK-01j · Sistem Persamaan Non-Linear** (fokus Prov–Nas)
- [ ] `osn-sma-mtk-01j-spl-non-linear-campur.md`
- [ ] `osn-sma-mtk-01j-spl-non-linear-mudah.md`
- [ ] `osn-sma-mtk-01j-spl-non-linear-sedang.md`
- [ ] `osn-sma-mtk-01j-spl-non-linear-sulit.md`
- [ ] `osn-sma-mtk-01j-spl-non-linear-mudah-sedang.md`
- [ ] `osn-sma-mtk-01j-spl-non-linear-sedang-sulit.md`

**MTK-01k · Persamaan & Pertidaksamaan Eksponen-Logaritma** (fokus Prov)
- [ ] `osn-sma-mtk-01k-eksponen-logaritma-campur.md`
- [ ] `osn-sma-mtk-01k-eksponen-logaritma-mudah.md`
- [ ] `osn-sma-mtk-01k-eksponen-logaritma-sedang.md`
- [ ] `osn-sma-mtk-01k-eksponen-logaritma-sulit.md`
- [ ] `osn-sma-mtk-01k-eksponen-logaritma-mudah-sedang.md`
- [ ] `osn-sma-mtk-01k-eksponen-logaritma-sedang-sulit.md`

### MTK-02 · Teori Bilangan (10 sub-bab)

**MTK-02a · Keterbagian & Sifat-sifatnya** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-02a-keterbagian-campur.md`
- [ ] `osn-sma-mtk-02a-keterbagian-mudah.md`
- [ ] `osn-sma-mtk-02a-keterbagian-sedang.md`
- [ ] `osn-sma-mtk-02a-keterbagian-sulit.md`
- [ ] `osn-sma-mtk-02a-keterbagian-mudah-sedang.md`
- [ ] `osn-sma-mtk-02a-keterbagian-sedang-sulit.md`

**MTK-02b · FPB, KPK & Algoritma Euclid** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-02b-fpb-kpk-euclid-campur.md`
- [ ] `osn-sma-mtk-02b-fpb-kpk-euclid-mudah.md`
- [ ] `osn-sma-mtk-02b-fpb-kpk-euclid-sedang.md`
- [ ] `osn-sma-mtk-02b-fpb-kpk-euclid-sulit.md`
- [ ] `osn-sma-mtk-02b-fpb-kpk-euclid-mudah-sedang.md`
- [ ] `osn-sma-mtk-02b-fpb-kpk-euclid-sedang-sulit.md`

**MTK-02c · Bilangan Prima & Saringan Eratosthenes** (fokus Prov)
- [ ] `osn-sma-mtk-02c-prima-eratosthenes-campur.md`
- [ ] `osn-sma-mtk-02c-prima-eratosthenes-mudah.md`
- [ ] `osn-sma-mtk-02c-prima-eratosthenes-sedang.md`
- [ ] `osn-sma-mtk-02c-prima-eratosthenes-sulit.md`
- [ ] `osn-sma-mtk-02c-prima-eratosthenes-mudah-sedang.md`
- [ ] `osn-sma-mtk-02c-prima-eratosthenes-sedang-sulit.md`

**MTK-02d · Faktorisasi Prima & Banyaknya Pembagi** (fokus Prov)
- [ ] `osn-sma-mtk-02d-faktorisasi-pembagi-campur.md`
- [ ] `osn-sma-mtk-02d-faktorisasi-pembagi-mudah.md`
- [ ] `osn-sma-mtk-02d-faktorisasi-pembagi-sedang.md`
- [ ] `osn-sma-mtk-02d-faktorisasi-pembagi-sulit.md`
- [ ] `osn-sma-mtk-02d-faktorisasi-pembagi-mudah-sedang.md`
- [ ] `osn-sma-mtk-02d-faktorisasi-pembagi-sedang-sulit.md`

**MTK-02e · Kongruensi Modulo (Dasar)** (fokus Prov)
- [ ] `osn-sma-mtk-02e-modulo-dasar-campur.md`
- [ ] `osn-sma-mtk-02e-modulo-dasar-mudah.md`
- [ ] `osn-sma-mtk-02e-modulo-dasar-sedang.md`
- [ ] `osn-sma-mtk-02e-modulo-dasar-sulit.md`
- [ ] `osn-sma-mtk-02e-modulo-dasar-mudah-sedang.md`
- [ ] `osn-sma-mtk-02e-modulo-dasar-sedang-sulit.md`

**MTK-02f · Kongruensi Modulo Lanjut (Teorema Fermat, Wilson, Euler)** (fokus Nas)
- [ ] `osn-sma-mtk-02f-modulo-lanjut-campur.md`
- [ ] `osn-sma-mtk-02f-modulo-lanjut-mudah.md`
- [ ] `osn-sma-mtk-02f-modulo-lanjut-sedang.md`
- [ ] `osn-sma-mtk-02f-modulo-lanjut-sulit.md`
- [ ] `osn-sma-mtk-02f-modulo-lanjut-mudah-sedang.md`
- [ ] `osn-sma-mtk-02f-modulo-lanjut-sedang-sulit.md`

**MTK-02g · Persamaan Diophantine Linear** (fokus Prov–Nas)
- [ ] `osn-sma-mtk-02g-diophantine-campur.md`
- [ ] `osn-sma-mtk-02g-diophantine-mudah.md`
- [ ] `osn-sma-mtk-02g-diophantine-sedang.md`
- [ ] `osn-sma-mtk-02g-diophantine-sulit.md`
- [ ] `osn-sma-mtk-02g-diophantine-mudah-sedang.md`
- [ ] `osn-sma-mtk-02g-diophantine-sedang-sulit.md`

**MTK-02h · Bilangan Pangkat & Akar dalam Teori Bilangan** (fokus Prov)
- [ ] `osn-sma-mtk-02h-pangkat-akar-tb-campur.md`
- [ ] `osn-sma-mtk-02h-pangkat-akar-tb-mudah.md`
- [ ] `osn-sma-mtk-02h-pangkat-akar-tb-sedang.md`
- [ ] `osn-sma-mtk-02h-pangkat-akar-tb-sulit.md`
- [ ] `osn-sma-mtk-02h-pangkat-akar-tb-mudah-sedang.md`
- [ ] `osn-sma-mtk-02h-pangkat-akar-tb-sedang-sulit.md`

**MTK-02i · Sistem Bilangan Basis (Biner, Heksa, dst.)** (fokus Prov)
- [ ] `osn-sma-mtk-02i-bilangan-basis-campur.md`
- [ ] `osn-sma-mtk-02i-bilangan-basis-mudah.md`
- [ ] `osn-sma-mtk-02i-bilangan-basis-sedang.md`
- [ ] `osn-sma-mtk-02i-bilangan-basis-sulit.md`
- [ ] `osn-sma-mtk-02i-bilangan-basis-mudah-sedang.md`
- [ ] `osn-sma-mtk-02i-bilangan-basis-sedang-sulit.md`

**MTK-02j · Soal Olimpiade Teori Bilangan** (fokus Nas)
- [ ] `osn-sma-mtk-02j-olimpiade-tb-campur.md`
- [ ] `osn-sma-mtk-02j-olimpiade-tb-mudah.md`
- [ ] `osn-sma-mtk-02j-olimpiade-tb-sedang.md`
- [ ] `osn-sma-mtk-02j-olimpiade-tb-sulit.md`
- [ ] `osn-sma-mtk-02j-olimpiade-tb-mudah-sedang.md`
- [ ] `osn-sma-mtk-02j-olimpiade-tb-sedang-sulit.md`

### MTK-03 · Geometri (11 sub-bab)

**MTK-03a · Sudut & Garis (Aksioma & Teorema)** (fokus Kab)
- [ ] `osn-sma-mtk-03a-sudut-garis-campur.md`
- [ ] `osn-sma-mtk-03a-sudut-garis-mudah.md`
- [ ] `osn-sma-mtk-03a-sudut-garis-sedang.md`
- [ ] `osn-sma-mtk-03a-sudut-garis-sulit.md`
- [ ] `osn-sma-mtk-03a-sudut-garis-mudah-sedang.md`
- [ ] `osn-sma-mtk-03a-sudut-garis-sedang-sulit.md`

**MTK-03b · Segitiga - Kesebangunan & Kekongruenan** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-03b-segitiga-sebangun-kongruen-campur.md`
- [ ] `osn-sma-mtk-03b-segitiga-sebangun-kongruen-mudah.md`
- [ ] `osn-sma-mtk-03b-segitiga-sebangun-kongruen-sedang.md`
- [ ] `osn-sma-mtk-03b-segitiga-sebangun-kongruen-sulit.md`
- [ ] `osn-sma-mtk-03b-segitiga-sebangun-kongruen-mudah-sedang.md`
- [ ] `osn-sma-mtk-03b-segitiga-sebangun-kongruen-sedang-sulit.md`

**MTK-03c · Segitiga - Garis-garis Istimewa (Titik Berat, Sumbu, dll)** (fokus Prov)
- [ ] `osn-sma-mtk-03c-garis-istimewa-segitiga-campur.md`
- [ ] `osn-sma-mtk-03c-garis-istimewa-segitiga-mudah.md`
- [ ] `osn-sma-mtk-03c-garis-istimewa-segitiga-sedang.md`
- [ ] `osn-sma-mtk-03c-garis-istimewa-segitiga-sulit.md`
- [ ] `osn-sma-mtk-03c-garis-istimewa-segitiga-mudah-sedang.md`
- [ ] `osn-sma-mtk-03c-garis-istimewa-segitiga-sedang-sulit.md`

**MTK-03d · Segitiga Khusus (Sama Sisi, Siku-siku, Tumpul)** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-03d-segitiga-khusus-campur.md`
- [ ] `osn-sma-mtk-03d-segitiga-khusus-mudah.md`
- [ ] `osn-sma-mtk-03d-segitiga-khusus-sedang.md`
- [ ] `osn-sma-mtk-03d-segitiga-khusus-sulit.md`
- [ ] `osn-sma-mtk-03d-segitiga-khusus-mudah-sedang.md`
- [ ] `osn-sma-mtk-03d-segitiga-khusus-sedang-sulit.md`

**MTK-03e · Lingkaran - Sifat Tali Busur, Sudut Pusat-Keliling** (fokus Prov)
- [ ] `osn-sma-mtk-03e-lingkaran-busur-sudut-campur.md`
- [ ] `osn-sma-mtk-03e-lingkaran-busur-sudut-mudah.md`
- [ ] `osn-sma-mtk-03e-lingkaran-busur-sudut-sedang.md`
- [ ] `osn-sma-mtk-03e-lingkaran-busur-sudut-sulit.md`
- [ ] `osn-sma-mtk-03e-lingkaran-busur-sudut-mudah-sedang.md`
- [ ] `osn-sma-mtk-03e-lingkaran-busur-sudut-sedang-sulit.md`

**MTK-03f · Lingkaran - Garis Singgung & Garis Berkuasa** (fokus Prov–Nas)
- [ ] `osn-sma-mtk-03f-lingkaran-singgung-kuasa-campur.md`
- [ ] `osn-sma-mtk-03f-lingkaran-singgung-kuasa-mudah.md`
- [ ] `osn-sma-mtk-03f-lingkaran-singgung-kuasa-sedang.md`
- [ ] `osn-sma-mtk-03f-lingkaran-singgung-kuasa-sulit.md`
- [ ] `osn-sma-mtk-03f-lingkaran-singgung-kuasa-mudah-sedang.md`
- [ ] `osn-sma-mtk-03f-lingkaran-singgung-kuasa-sedang-sulit.md`

**MTK-03g · Segi-empat (Sifat Khusus, Cyclic Quadrilateral)** (fokus Prov)
- [ ] `osn-sma-mtk-03g-segiempat-sifat-khusus-campur.md`
- [ ] `osn-sma-mtk-03g-segiempat-sifat-khusus-mudah.md`
- [ ] `osn-sma-mtk-03g-segiempat-sifat-khusus-sedang.md`
- [ ] `osn-sma-mtk-03g-segiempat-sifat-khusus-sulit.md`
- [ ] `osn-sma-mtk-03g-segiempat-sifat-khusus-mudah-sedang.md`
- [ ] `osn-sma-mtk-03g-segiempat-sifat-khusus-sedang-sulit.md`

**MTK-03h · Poligon (Segi-n) Teratur** (fokus Prov)
- [ ] `osn-sma-mtk-03h-poligon-teratur-campur.md`
- [ ] `osn-sma-mtk-03h-poligon-teratur-mudah.md`
- [ ] `osn-sma-mtk-03h-poligon-teratur-sedang.md`
- [ ] `osn-sma-mtk-03h-poligon-teratur-sulit.md`
- [ ] `osn-sma-mtk-03h-poligon-teratur-mudah-sedang.md`
- [ ] `osn-sma-mtk-03h-poligon-teratur-sedang-sulit.md`

**MTK-03i · Geometri Analitik (Koordinat, Jarak, Garis)** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-03i-geometri-analitik-campur.md`
- [ ] `osn-sma-mtk-03i-geometri-analitik-mudah.md`
- [ ] `osn-sma-mtk-03i-geometri-analitik-sedang.md`
- [ ] `osn-sma-mtk-03i-geometri-analitik-sulit.md`
- [ ] `osn-sma-mtk-03i-geometri-analitik-mudah-sedang.md`
- [ ] `osn-sma-mtk-03i-geometri-analitik-sedang-sulit.md`

**MTK-03j · Vektor (Operasi, Dot Product, Cross Product)** (fokus Prov)
- [ ] `osn-sma-mtk-03j-vektor-campur.md`
- [ ] `osn-sma-mtk-03j-vektor-mudah.md`
- [ ] `osn-sma-mtk-03j-vektor-sedang.md`
- [ ] `osn-sma-mtk-03j-vektor-sulit.md`
- [ ] `osn-sma-mtk-03j-vektor-mudah-sedang.md`
- [ ] `osn-sma-mtk-03j-vektor-sedang-sulit.md`

**MTK-03k · Geometri Ruang Lanjut** (fokus Prov–Nas)
- [ ] `osn-sma-mtk-03k-geometri-ruang-lanjut-campur.md`
- [ ] `osn-sma-mtk-03k-geometri-ruang-lanjut-mudah.md`
- [ ] `osn-sma-mtk-03k-geometri-ruang-lanjut-sedang.md`
- [ ] `osn-sma-mtk-03k-geometri-ruang-lanjut-sulit.md`
- [ ] `osn-sma-mtk-03k-geometri-ruang-lanjut-mudah-sedang.md`
- [ ] `osn-sma-mtk-03k-geometri-ruang-lanjut-sedang-sulit.md`

### MTK-04 · Kombinatorika (10 sub-bab)

**MTK-04a · Aturan Penjumlahan & Perkalian** (fokus Kab)
- [ ] `osn-sma-mtk-04a-aturan-jumlah-kali-campur.md`
- [ ] `osn-sma-mtk-04a-aturan-jumlah-kali-mudah.md`
- [ ] `osn-sma-mtk-04a-aturan-jumlah-kali-sedang.md`
- [ ] `osn-sma-mtk-04a-aturan-jumlah-kali-sulit.md`
- [ ] `osn-sma-mtk-04a-aturan-jumlah-kali-mudah-sedang.md`
- [ ] `osn-sma-mtk-04a-aturan-jumlah-kali-sedang-sulit.md`

**MTK-04b · Permutasi (Berulang & Tak Berulang)** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-04b-permutasi-campur.md`
- [ ] `osn-sma-mtk-04b-permutasi-mudah.md`
- [ ] `osn-sma-mtk-04b-permutasi-sedang.md`
- [ ] `osn-sma-mtk-04b-permutasi-sulit.md`
- [ ] `osn-sma-mtk-04b-permutasi-mudah-sedang.md`
- [ ] `osn-sma-mtk-04b-permutasi-sedang-sulit.md`

**MTK-04c · Kombinasi (Binomial)** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-04c-kombinasi-binomial-campur.md`
- [ ] `osn-sma-mtk-04c-kombinasi-binomial-mudah.md`
- [ ] `osn-sma-mtk-04c-kombinasi-binomial-sedang.md`
- [ ] `osn-sma-mtk-04c-kombinasi-binomial-sulit.md`
- [ ] `osn-sma-mtk-04c-kombinasi-binomial-mudah-sedang.md`
- [ ] `osn-sma-mtk-04c-kombinasi-binomial-sedang-sulit.md`

**MTK-04d · Permutasi Siklis** (fokus Prov)
- [ ] `osn-sma-mtk-04d-permutasi-siklis-campur.md`
- [ ] `osn-sma-mtk-04d-permutasi-siklis-mudah.md`
- [ ] `osn-sma-mtk-04d-permutasi-siklis-sedang.md`
- [ ] `osn-sma-mtk-04d-permutasi-siklis-sulit.md`
- [ ] `osn-sma-mtk-04d-permutasi-siklis-mudah-sedang.md`
- [ ] `osn-sma-mtk-04d-permutasi-siklis-sedang-sulit.md`

**MTK-04e · Permutasi dengan Pembatasan** (fokus Prov)
- [ ] `osn-sma-mtk-04e-permutasi-pembatasan-campur.md`
- [ ] `osn-sma-mtk-04e-permutasi-pembatasan-mudah.md`
- [ ] `osn-sma-mtk-04e-permutasi-pembatasan-sedang.md`
- [ ] `osn-sma-mtk-04e-permutasi-pembatasan-sulit.md`
- [ ] `osn-sma-mtk-04e-permutasi-pembatasan-mudah-sedang.md`
- [ ] `osn-sma-mtk-04e-permutasi-pembatasan-sedang-sulit.md`

**MTK-04f · Inklusi-Eksklusi** (fokus Prov–Nas)
- [ ] `osn-sma-mtk-04f-inklusi-eksklusi-campur.md`
- [ ] `osn-sma-mtk-04f-inklusi-eksklusi-mudah.md`
- [ ] `osn-sma-mtk-04f-inklusi-eksklusi-sedang.md`
- [ ] `osn-sma-mtk-04f-inklusi-eksklusi-sulit.md`
- [ ] `osn-sma-mtk-04f-inklusi-eksklusi-mudah-sedang.md`
- [ ] `osn-sma-mtk-04f-inklusi-eksklusi-sedang-sulit.md`

**MTK-04g · Pigeonhole Principle** (fokus Nas)
- [ ] `osn-sma-mtk-04g-pigeonhole-campur.md`
- [ ] `osn-sma-mtk-04g-pigeonhole-mudah.md`
- [ ] `osn-sma-mtk-04g-pigeonhole-sedang.md`
- [ ] `osn-sma-mtk-04g-pigeonhole-sulit.md`
- [ ] `osn-sma-mtk-04g-pigeonhole-mudah-sedang.md`
- [ ] `osn-sma-mtk-04g-pigeonhole-sedang-sulit.md`

**MTK-04h · Koefisien Binomial & Identitas Pascal** (fokus Prov)
- [ ] `osn-sma-mtk-04h-binomial-pascal-campur.md`
- [ ] `osn-sma-mtk-04h-binomial-pascal-mudah.md`
- [ ] `osn-sma-mtk-04h-binomial-pascal-sedang.md`
- [ ] `osn-sma-mtk-04h-binomial-pascal-sulit.md`
- [ ] `osn-sma-mtk-04h-binomial-pascal-mudah-sedang.md`
- [ ] `osn-sma-mtk-04h-binomial-pascal-sedang-sulit.md`

**MTK-04i · Counting Lanjut (Catalan, Stirling — Pengantar)** (fokus Nas)
- [ ] `osn-sma-mtk-04i-counting-lanjut-campur.md`
- [ ] `osn-sma-mtk-04i-counting-lanjut-mudah.md`
- [ ] `osn-sma-mtk-04i-counting-lanjut-sedang.md`
- [ ] `osn-sma-mtk-04i-counting-lanjut-sulit.md`
- [ ] `osn-sma-mtk-04i-counting-lanjut-mudah-sedang.md`
- [ ] `osn-sma-mtk-04i-counting-lanjut-sedang-sulit.md`

**MTK-04j · Generating Functions (Pengantar)** (fokus Nas)
- [ ] `osn-sma-mtk-04j-generating-functions-campur.md`
- [ ] `osn-sma-mtk-04j-generating-functions-mudah.md`
- [ ] `osn-sma-mtk-04j-generating-functions-sedang.md`
- [ ] `osn-sma-mtk-04j-generating-functions-sulit.md`
- [ ] `osn-sma-mtk-04j-generating-functions-mudah-sedang.md`
- [ ] `osn-sma-mtk-04j-generating-functions-sedang-sulit.md`

### MTK-05 · Trigonometri & Identitas (11 sub-bab)

**MTK-05a · Perbandingan Trigonometri Dasar** (fokus Kab)
- [ ] `osn-sma-mtk-05a-perbandingan-trig-dasar-campur.md`
- [ ] `osn-sma-mtk-05a-perbandingan-trig-dasar-mudah.md`
- [ ] `osn-sma-mtk-05a-perbandingan-trig-dasar-sedang.md`
- [ ] `osn-sma-mtk-05a-perbandingan-trig-dasar-sulit.md`
- [ ] `osn-sma-mtk-05a-perbandingan-trig-dasar-mudah-sedang.md`
- [ ] `osn-sma-mtk-05a-perbandingan-trig-dasar-sedang-sulit.md`

**MTK-05b · Sudut Istimewa & Sudut-sudut Berelasi** (fokus Kab)
- [ ] `osn-sma-mtk-05b-sudut-istimewa-berelasi-campur.md`
- [ ] `osn-sma-mtk-05b-sudut-istimewa-berelasi-mudah.md`
- [ ] `osn-sma-mtk-05b-sudut-istimewa-berelasi-sedang.md`
- [ ] `osn-sma-mtk-05b-sudut-istimewa-berelasi-sulit.md`
- [ ] `osn-sma-mtk-05b-sudut-istimewa-berelasi-mudah-sedang.md`
- [ ] `osn-sma-mtk-05b-sudut-istimewa-berelasi-sedang-sulit.md`

**MTK-05c · Identitas Trigonometri Pokok** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-05c-identitas-pokok-campur.md`
- [ ] `osn-sma-mtk-05c-identitas-pokok-mudah.md`
- [ ] `osn-sma-mtk-05c-identitas-pokok-sedang.md`
- [ ] `osn-sma-mtk-05c-identitas-pokok-sulit.md`
- [ ] `osn-sma-mtk-05c-identitas-pokok-mudah-sedang.md`
- [ ] `osn-sma-mtk-05c-identitas-pokok-sedang-sulit.md`

**MTK-05d · Rumus Jumlah & Selisih Sudut** (fokus Prov)
- [ ] `osn-sma-mtk-05d-jumlah-selisih-sudut-campur.md`
- [ ] `osn-sma-mtk-05d-jumlah-selisih-sudut-mudah.md`
- [ ] `osn-sma-mtk-05d-jumlah-selisih-sudut-sedang.md`
- [ ] `osn-sma-mtk-05d-jumlah-selisih-sudut-sulit.md`
- [ ] `osn-sma-mtk-05d-jumlah-selisih-sudut-mudah-sedang.md`
- [ ] `osn-sma-mtk-05d-jumlah-selisih-sudut-sedang-sulit.md`

**MTK-05e · Rumus Sudut Rangkap & Setengah Sudut** (fokus Prov)
- [ ] `osn-sma-mtk-05e-sudut-rangkap-setengah-campur.md`
- [ ] `osn-sma-mtk-05e-sudut-rangkap-setengah-mudah.md`
- [ ] `osn-sma-mtk-05e-sudut-rangkap-setengah-sedang.md`
- [ ] `osn-sma-mtk-05e-sudut-rangkap-setengah-sulit.md`
- [ ] `osn-sma-mtk-05e-sudut-rangkap-setengah-mudah-sedang.md`
- [ ] `osn-sma-mtk-05e-sudut-rangkap-setengah-sedang-sulit.md`

**MTK-05f · Persamaan Trigonometri** (fokus Prov)
- [ ] `osn-sma-mtk-05f-persamaan-trig-campur.md`
- [ ] `osn-sma-mtk-05f-persamaan-trig-mudah.md`
- [ ] `osn-sma-mtk-05f-persamaan-trig-sedang.md`
- [ ] `osn-sma-mtk-05f-persamaan-trig-sulit.md`
- [ ] `osn-sma-mtk-05f-persamaan-trig-mudah-sedang.md`
- [ ] `osn-sma-mtk-05f-persamaan-trig-sedang-sulit.md`

**MTK-05g · Pertidaksamaan Trigonometri** (fokus Prov–Nas)
- [ ] `osn-sma-mtk-05g-pertidaksamaan-trig-campur.md`
- [ ] `osn-sma-mtk-05g-pertidaksamaan-trig-mudah.md`
- [ ] `osn-sma-mtk-05g-pertidaksamaan-trig-sedang.md`
- [ ] `osn-sma-mtk-05g-pertidaksamaan-trig-sulit.md`
- [ ] `osn-sma-mtk-05g-pertidaksamaan-trig-mudah-sedang.md`
- [ ] `osn-sma-mtk-05g-pertidaksamaan-trig-sedang-sulit.md`

**MTK-05h · Aturan Sinus & Cosinus** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-05h-aturan-sinus-cosinus-campur.md`
- [ ] `osn-sma-mtk-05h-aturan-sinus-cosinus-mudah.md`
- [ ] `osn-sma-mtk-05h-aturan-sinus-cosinus-sedang.md`
- [ ] `osn-sma-mtk-05h-aturan-sinus-cosinus-sulit.md`
- [ ] `osn-sma-mtk-05h-aturan-sinus-cosinus-mudah-sedang.md`
- [ ] `osn-sma-mtk-05h-aturan-sinus-cosinus-sedang-sulit.md`

**MTK-05i · Luas Segitiga (Trigonometri)** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-05i-luas-segitiga-trig-campur.md`
- [ ] `osn-sma-mtk-05i-luas-segitiga-trig-mudah.md`
- [ ] `osn-sma-mtk-05i-luas-segitiga-trig-sedang.md`
- [ ] `osn-sma-mtk-05i-luas-segitiga-trig-sulit.md`
- [ ] `osn-sma-mtk-05i-luas-segitiga-trig-mudah-sedang.md`
- [ ] `osn-sma-mtk-05i-luas-segitiga-trig-sedang-sulit.md`

**MTK-05j · Fungsi Trigonometri & Grafiknya** (fokus Prov)
- [ ] `osn-sma-mtk-05j-fungsi-trig-grafik-campur.md`
- [ ] `osn-sma-mtk-05j-fungsi-trig-grafik-mudah.md`
- [ ] `osn-sma-mtk-05j-fungsi-trig-grafik-sedang.md`
- [ ] `osn-sma-mtk-05j-fungsi-trig-grafik-sulit.md`
- [ ] `osn-sma-mtk-05j-fungsi-trig-grafik-mudah-sedang.md`
- [ ] `osn-sma-mtk-05j-fungsi-trig-grafik-sedang-sulit.md`

**MTK-05k · Trigonometri Inversi** (fokus Prov)
- [ ] `osn-sma-mtk-05k-trig-inversi-campur.md`
- [ ] `osn-sma-mtk-05k-trig-inversi-mudah.md`
- [ ] `osn-sma-mtk-05k-trig-inversi-sedang.md`
- [ ] `osn-sma-mtk-05k-trig-inversi-sulit.md`
- [ ] `osn-sma-mtk-05k-trig-inversi-mudah-sedang.md`
- [ ] `osn-sma-mtk-05k-trig-inversi-sedang-sulit.md`

### MTK-06 · Kalkulus (11 sub-bab)

**MTK-06a · Limit Fungsi Aljabar** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-06a-limit-aljabar-campur.md`
- [ ] `osn-sma-mtk-06a-limit-aljabar-mudah.md`
- [ ] `osn-sma-mtk-06a-limit-aljabar-sedang.md`
- [ ] `osn-sma-mtk-06a-limit-aljabar-sulit.md`
- [ ] `osn-sma-mtk-06a-limit-aljabar-mudah-sedang.md`
- [ ] `osn-sma-mtk-06a-limit-aljabar-sedang-sulit.md`

**MTK-06b · Limit Fungsi Trigonometri** (fokus Prov)
- [ ] `osn-sma-mtk-06b-limit-trig-campur.md`
- [ ] `osn-sma-mtk-06b-limit-trig-mudah.md`
- [ ] `osn-sma-mtk-06b-limit-trig-sedang.md`
- [ ] `osn-sma-mtk-06b-limit-trig-sulit.md`
- [ ] `osn-sma-mtk-06b-limit-trig-mudah-sedang.md`
- [ ] `osn-sma-mtk-06b-limit-trig-sedang-sulit.md`

**MTK-06c · Limit Tak Hingga** (fokus Prov)
- [ ] `osn-sma-mtk-06c-limit-tak-hingga-campur.md`
- [ ] `osn-sma-mtk-06c-limit-tak-hingga-mudah.md`
- [ ] `osn-sma-mtk-06c-limit-tak-hingga-sedang.md`
- [ ] `osn-sma-mtk-06c-limit-tak-hingga-sulit.md`
- [ ] `osn-sma-mtk-06c-limit-tak-hingga-mudah-sedang.md`
- [ ] `osn-sma-mtk-06c-limit-tak-hingga-sedang-sulit.md`

**MTK-06d · Kontinuitas Fungsi** (fokus Prov)
- [ ] `osn-sma-mtk-06d-kontinuitas-campur.md`
- [ ] `osn-sma-mtk-06d-kontinuitas-mudah.md`
- [ ] `osn-sma-mtk-06d-kontinuitas-sedang.md`
- [ ] `osn-sma-mtk-06d-kontinuitas-sulit.md`
- [ ] `osn-sma-mtk-06d-kontinuitas-mudah-sedang.md`
- [ ] `osn-sma-mtk-06d-kontinuitas-sedang-sulit.md`

**MTK-06e · Turunan (Aturan Dasar)** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-06e-turunan-dasar-campur.md`
- [ ] `osn-sma-mtk-06e-turunan-dasar-mudah.md`
- [ ] `osn-sma-mtk-06e-turunan-dasar-sedang.md`
- [ ] `osn-sma-mtk-06e-turunan-dasar-sulit.md`
- [ ] `osn-sma-mtk-06e-turunan-dasar-mudah-sedang.md`
- [ ] `osn-sma-mtk-06e-turunan-dasar-sedang-sulit.md`

**MTK-06f · Turunan Fungsi Komposisi (Rantai)** (fokus Prov)
- [ ] `osn-sma-mtk-06f-aturan-rantai-campur.md`
- [ ] `osn-sma-mtk-06f-aturan-rantai-mudah.md`
- [ ] `osn-sma-mtk-06f-aturan-rantai-sedang.md`
- [ ] `osn-sma-mtk-06f-aturan-rantai-sulit.md`
- [ ] `osn-sma-mtk-06f-aturan-rantai-mudah-sedang.md`
- [ ] `osn-sma-mtk-06f-aturan-rantai-sedang-sulit.md`

**MTK-06g · Turunan Implisit** (fokus Prov–Nas)
- [ ] `osn-sma-mtk-06g-turunan-implisit-campur.md`
- [ ] `osn-sma-mtk-06g-turunan-implisit-mudah.md`
- [ ] `osn-sma-mtk-06g-turunan-implisit-sedang.md`
- [ ] `osn-sma-mtk-06g-turunan-implisit-sulit.md`
- [ ] `osn-sma-mtk-06g-turunan-implisit-mudah-sedang.md`
- [ ] `osn-sma-mtk-06g-turunan-implisit-sedang-sulit.md`

**MTK-06h · Aplikasi Turunan (Min-Maks, Garis Singgung, Laju)** (fokus Prov)
- [ ] `osn-sma-mtk-06h-aplikasi-turunan-campur.md`
- [ ] `osn-sma-mtk-06h-aplikasi-turunan-mudah.md`
- [ ] `osn-sma-mtk-06h-aplikasi-turunan-sedang.md`
- [ ] `osn-sma-mtk-06h-aplikasi-turunan-sulit.md`
- [ ] `osn-sma-mtk-06h-aplikasi-turunan-mudah-sedang.md`
- [ ] `osn-sma-mtk-06h-aplikasi-turunan-sedang-sulit.md`

**MTK-06i · Integral Tak Tentu (Aturan Dasar)** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-06i-integral-tak-tentu-campur.md`
- [ ] `osn-sma-mtk-06i-integral-tak-tentu-mudah.md`
- [ ] `osn-sma-mtk-06i-integral-tak-tentu-sedang.md`
- [ ] `osn-sma-mtk-06i-integral-tak-tentu-sulit.md`
- [ ] `osn-sma-mtk-06i-integral-tak-tentu-mudah-sedang.md`
- [ ] `osn-sma-mtk-06i-integral-tak-tentu-sedang-sulit.md`

**MTK-06j · Integral Substitusi & Parsial** (fokus Prov)
- [ ] `osn-sma-mtk-06j-integral-substitusi-parsial-campur.md`
- [ ] `osn-sma-mtk-06j-integral-substitusi-parsial-mudah.md`
- [ ] `osn-sma-mtk-06j-integral-substitusi-parsial-sedang.md`
- [ ] `osn-sma-mtk-06j-integral-substitusi-parsial-sulit.md`
- [ ] `osn-sma-mtk-06j-integral-substitusi-parsial-mudah-sedang.md`
- [ ] `osn-sma-mtk-06j-integral-substitusi-parsial-sedang-sulit.md`

**MTK-06k · Integral Tentu (Luas, Volume)** (fokus Prov)
- [ ] `osn-sma-mtk-06k-integral-tentu-campur.md`
- [ ] `osn-sma-mtk-06k-integral-tentu-mudah.md`
- [ ] `osn-sma-mtk-06k-integral-tentu-sedang.md`
- [ ] `osn-sma-mtk-06k-integral-tentu-sulit.md`
- [ ] `osn-sma-mtk-06k-integral-tentu-mudah-sedang.md`
- [ ] `osn-sma-mtk-06k-integral-tentu-sedang-sulit.md`

### MTK-07 · Fungsi, Persamaan Fungsional & Pertidaksamaan Lanjut (8 sub-bab)

**MTK-07a · Fungsi (Domain, Range, Komposisi, Invers)** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-07a-fungsi-dasar-campur.md`
- [ ] `osn-sma-mtk-07a-fungsi-dasar-mudah.md`
- [ ] `osn-sma-mtk-07a-fungsi-dasar-sedang.md`
- [ ] `osn-sma-mtk-07a-fungsi-dasar-sulit.md`
- [ ] `osn-sma-mtk-07a-fungsi-dasar-mudah-sedang.md`
- [ ] `osn-sma-mtk-07a-fungsi-dasar-sedang-sulit.md`

**MTK-07b · Fungsi Eksponen & Logaritma** (fokus Prov)
- [ ] `osn-sma-mtk-07b-fungsi-eksp-log-campur.md`
- [ ] `osn-sma-mtk-07b-fungsi-eksp-log-mudah.md`
- [ ] `osn-sma-mtk-07b-fungsi-eksp-log-sedang.md`
- [ ] `osn-sma-mtk-07b-fungsi-eksp-log-sulit.md`
- [ ] `osn-sma-mtk-07b-fungsi-eksp-log-mudah-sedang.md`
- [ ] `osn-sma-mtk-07b-fungsi-eksp-log-sedang-sulit.md`

**MTK-07c · Fungsi Periodik & Trigonometri** (fokus Prov)
- [ ] `osn-sma-mtk-07c-fungsi-periodik-campur.md`
- [ ] `osn-sma-mtk-07c-fungsi-periodik-mudah.md`
- [ ] `osn-sma-mtk-07c-fungsi-periodik-sedang.md`
- [ ] `osn-sma-mtk-07c-fungsi-periodik-sulit.md`
- [ ] `osn-sma-mtk-07c-fungsi-periodik-mudah-sedang.md`
- [ ] `osn-sma-mtk-07c-fungsi-periodik-sedang-sulit.md`

**MTK-07d · Persamaan Fungsional Dasar (Cauchy, dll)** (fokus Nas)
- [ ] `osn-sma-mtk-07d-persamaan-fungsional-campur.md`
- [ ] `osn-sma-mtk-07d-persamaan-fungsional-mudah.md`
- [ ] `osn-sma-mtk-07d-persamaan-fungsional-sedang.md`
- [ ] `osn-sma-mtk-07d-persamaan-fungsional-sulit.md`
- [ ] `osn-sma-mtk-07d-persamaan-fungsional-mudah-sedang.md`
- [ ] `osn-sma-mtk-07d-persamaan-fungsional-sedang-sulit.md`

**MTK-07e · Pertidaksamaan AM-GM** (fokus Prov–Nas)
- [ ] `osn-sma-mtk-07e-am-gm-campur.md`
- [ ] `osn-sma-mtk-07e-am-gm-mudah.md`
- [ ] `osn-sma-mtk-07e-am-gm-sedang.md`
- [ ] `osn-sma-mtk-07e-am-gm-sulit.md`
- [ ] `osn-sma-mtk-07e-am-gm-mudah-sedang.md`
- [ ] `osn-sma-mtk-07e-am-gm-sedang-sulit.md`

**MTK-07f · Pertidaksamaan Cauchy-Schwarz** (fokus Nas)
- [ ] `osn-sma-mtk-07f-cauchy-schwarz-campur.md`
- [ ] `osn-sma-mtk-07f-cauchy-schwarz-mudah.md`
- [ ] `osn-sma-mtk-07f-cauchy-schwarz-sedang.md`
- [ ] `osn-sma-mtk-07f-cauchy-schwarz-sulit.md`
- [ ] `osn-sma-mtk-07f-cauchy-schwarz-mudah-sedang.md`
- [ ] `osn-sma-mtk-07f-cauchy-schwarz-sedang-sulit.md`

**MTK-07g · Pertidaksamaan Lanjut (Jensen, Rearrangement — Pengantar)** (fokus Nas)
- [ ] `osn-sma-mtk-07g-jensen-rearrangement-campur.md`
- [ ] `osn-sma-mtk-07g-jensen-rearrangement-mudah.md`
- [ ] `osn-sma-mtk-07g-jensen-rearrangement-sedang.md`
- [ ] `osn-sma-mtk-07g-jensen-rearrangement-sulit.md`
- [ ] `osn-sma-mtk-07g-jensen-rearrangement-mudah-sedang.md`
- [ ] `osn-sma-mtk-07g-jensen-rearrangement-sedang-sulit.md`

**MTK-07h · Optimasi Tanpa Kalkulus** (fokus Prov–Nas)
- [ ] `osn-sma-mtk-07h-optimasi-tanpa-kalkulus-campur.md`
- [ ] `osn-sma-mtk-07h-optimasi-tanpa-kalkulus-mudah.md`
- [ ] `osn-sma-mtk-07h-optimasi-tanpa-kalkulus-sedang.md`
- [ ] `osn-sma-mtk-07h-optimasi-tanpa-kalkulus-sulit.md`
- [ ] `osn-sma-mtk-07h-optimasi-tanpa-kalkulus-mudah-sedang.md`
- [ ] `osn-sma-mtk-07h-optimasi-tanpa-kalkulus-sedang-sulit.md`

### MTK-08 · Statistika, Peluang & Distribusi (10 sub-bab)

**MTK-08a · Statistika Deskriptif (Mean, Median, Modus, Kuartil)** (fokus Kab)
- [ ] `osn-sma-mtk-08a-statistika-deskriptif-campur.md`
- [ ] `osn-sma-mtk-08a-statistika-deskriptif-mudah.md`
- [ ] `osn-sma-mtk-08a-statistika-deskriptif-sedang.md`
- [ ] `osn-sma-mtk-08a-statistika-deskriptif-sulit.md`
- [ ] `osn-sma-mtk-08a-statistika-deskriptif-mudah-sedang.md`
- [ ] `osn-sma-mtk-08a-statistika-deskriptif-sedang-sulit.md`

**MTK-08b · Ukuran Penyebaran (Range, Variansi, SD)** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-08b-penyebaran-data-campur.md`
- [ ] `osn-sma-mtk-08b-penyebaran-data-mudah.md`
- [ ] `osn-sma-mtk-08b-penyebaran-data-sedang.md`
- [ ] `osn-sma-mtk-08b-penyebaran-data-sulit.md`
- [ ] `osn-sma-mtk-08b-penyebaran-data-mudah-sedang.md`
- [ ] `osn-sma-mtk-08b-penyebaran-data-sedang-sulit.md`

**MTK-08c · Penyajian Data (Tabel, Diagram, Histogram, Ogive)** (fokus Kab)
- [ ] `osn-sma-mtk-08c-penyajian-data-campur.md`
- [ ] `osn-sma-mtk-08c-penyajian-data-mudah.md`
- [ ] `osn-sma-mtk-08c-penyajian-data-sedang.md`
- [ ] `osn-sma-mtk-08c-penyajian-data-sulit.md`
- [ ] `osn-sma-mtk-08c-penyajian-data-mudah-sedang.md`
- [ ] `osn-sma-mtk-08c-penyajian-data-sedang-sulit.md`

**MTK-08d · Ruang Sampel & Peluang Kejadian** (fokus Kab–Prov)
- [ ] `osn-sma-mtk-08d-ruang-sampel-peluang-campur.md`
- [ ] `osn-sma-mtk-08d-ruang-sampel-peluang-mudah.md`
- [ ] `osn-sma-mtk-08d-ruang-sampel-peluang-sedang.md`
- [ ] `osn-sma-mtk-08d-ruang-sampel-peluang-sulit.md`
- [ ] `osn-sma-mtk-08d-ruang-sampel-peluang-mudah-sedang.md`
- [ ] `osn-sma-mtk-08d-ruang-sampel-peluang-sedang-sulit.md`

**MTK-08e · Peluang Kejadian Majemuk (Saling Lepas, Bebas)** (fokus Prov)
- [ ] `osn-sma-mtk-08e-peluang-majemuk-campur.md`
- [ ] `osn-sma-mtk-08e-peluang-majemuk-mudah.md`
- [ ] `osn-sma-mtk-08e-peluang-majemuk-sedang.md`
- [ ] `osn-sma-mtk-08e-peluang-majemuk-sulit.md`
- [ ] `osn-sma-mtk-08e-peluang-majemuk-mudah-sedang.md`
- [ ] `osn-sma-mtk-08e-peluang-majemuk-sedang-sulit.md`

**MTK-08f · Peluang Bersyarat** (fokus Prov)
- [ ] `osn-sma-mtk-08f-peluang-bersyarat-campur.md`
- [ ] `osn-sma-mtk-08f-peluang-bersyarat-mudah.md`
- [ ] `osn-sma-mtk-08f-peluang-bersyarat-sedang.md`
- [ ] `osn-sma-mtk-08f-peluang-bersyarat-sulit.md`
- [ ] `osn-sma-mtk-08f-peluang-bersyarat-mudah-sedang.md`
- [ ] `osn-sma-mtk-08f-peluang-bersyarat-sedang-sulit.md`

**MTK-08g · Aturan Bayes (Pengantar)** (fokus Prov–Nas)
- [ ] `osn-sma-mtk-08g-bayes-campur.md`
- [ ] `osn-sma-mtk-08g-bayes-mudah.md`
- [ ] `osn-sma-mtk-08g-bayes-sedang.md`
- [ ] `osn-sma-mtk-08g-bayes-sulit.md`
- [ ] `osn-sma-mtk-08g-bayes-mudah-sedang.md`
- [ ] `osn-sma-mtk-08g-bayes-sedang-sulit.md`

**MTK-08h · Distribusi Binomial** (fokus Prov)
- [ ] `osn-sma-mtk-08h-distribusi-binomial-campur.md`
- [ ] `osn-sma-mtk-08h-distribusi-binomial-mudah.md`
- [ ] `osn-sma-mtk-08h-distribusi-binomial-sedang.md`
- [ ] `osn-sma-mtk-08h-distribusi-binomial-sulit.md`
- [ ] `osn-sma-mtk-08h-distribusi-binomial-mudah-sedang.md`
- [ ] `osn-sma-mtk-08h-distribusi-binomial-sedang-sulit.md`

**MTK-08i · Distribusi Normal (Pengantar)** (fokus Prov)
- [ ] `osn-sma-mtk-08i-distribusi-normal-campur.md`
- [ ] `osn-sma-mtk-08i-distribusi-normal-mudah.md`
- [ ] `osn-sma-mtk-08i-distribusi-normal-sedang.md`
- [ ] `osn-sma-mtk-08i-distribusi-normal-sulit.md`
- [ ] `osn-sma-mtk-08i-distribusi-normal-mudah-sedang.md`
- [ ] `osn-sma-mtk-08i-distribusi-normal-sedang-sulit.md`

**MTK-08j · Soal Cerita Statistika & Peluang** (fokus Prov)
- [ ] `osn-sma-mtk-08j-cerita-statistika-peluang-campur.md`
- [ ] `osn-sma-mtk-08j-cerita-statistika-peluang-mudah.md`
- [ ] `osn-sma-mtk-08j-cerita-statistika-peluang-sedang.md`
- [ ] `osn-sma-mtk-08j-cerita-statistika-peluang-sulit.md`
- [ ] `osn-sma-mtk-08j-cerita-statistika-peluang-mudah-sedang.md`
- [ ] `osn-sma-mtk-08j-cerita-statistika-peluang-sedang-sulit.md`

---

## B · Fisika Per Sub-Bab (94 sub-bab × 6 = 564 file)

### FIS-01 · Kinematika (9 sub-bab)

**FIS-01a · Besaran Kinematika & Vektor** (fokus Kab)
- [ ] `osn-sma-fis-01a-besaran-vektor-campur.md`
- [ ] `osn-sma-fis-01a-besaran-vektor-mudah.md`
- [ ] `osn-sma-fis-01a-besaran-vektor-sedang.md`
- [ ] `osn-sma-fis-01a-besaran-vektor-sulit.md`
- [ ] `osn-sma-fis-01a-besaran-vektor-mudah-sedang.md`
- [ ] `osn-sma-fis-01a-besaran-vektor-sedang-sulit.md`

**FIS-01b · Gerak Lurus Beraturan (GLB)** (fokus Kab)
- [ ] `osn-sma-fis-01b-glb-campur.md`
- [ ] `osn-sma-fis-01b-glb-mudah.md`
- [ ] `osn-sma-fis-01b-glb-sedang.md`
- [ ] `osn-sma-fis-01b-glb-sulit.md`
- [ ] `osn-sma-fis-01b-glb-mudah-sedang.md`
- [ ] `osn-sma-fis-01b-glb-sedang-sulit.md`

**FIS-01c · Gerak Lurus Berubah Beraturan (GLBB)** (fokus Kab–Prov)
- [ ] `osn-sma-fis-01c-glbb-campur.md`
- [ ] `osn-sma-fis-01c-glbb-mudah.md`
- [ ] `osn-sma-fis-01c-glbb-sedang.md`
- [ ] `osn-sma-fis-01c-glbb-sulit.md`
- [ ] `osn-sma-fis-01c-glbb-mudah-sedang.md`
- [ ] `osn-sma-fis-01c-glbb-sedang-sulit.md`

**FIS-01d · Gerak Jatuh Bebas & Gerak Vertikal** (fokus Kab–Prov)
- [ ] `osn-sma-fis-01d-jatuh-bebas-vertikal-campur.md`
- [ ] `osn-sma-fis-01d-jatuh-bebas-vertikal-mudah.md`
- [ ] `osn-sma-fis-01d-jatuh-bebas-vertikal-sedang.md`
- [ ] `osn-sma-fis-01d-jatuh-bebas-vertikal-sulit.md`
- [ ] `osn-sma-fis-01d-jatuh-bebas-vertikal-mudah-sedang.md`
- [ ] `osn-sma-fis-01d-jatuh-bebas-vertikal-sedang-sulit.md`

**FIS-01e · Gerak Parabola** (fokus Prov)
- [ ] `osn-sma-fis-01e-parabola-campur.md`
- [ ] `osn-sma-fis-01e-parabola-mudah.md`
- [ ] `osn-sma-fis-01e-parabola-sedang.md`
- [ ] `osn-sma-fis-01e-parabola-sulit.md`
- [ ] `osn-sma-fis-01e-parabola-mudah-sedang.md`
- [ ] `osn-sma-fis-01e-parabola-sedang-sulit.md`

**FIS-01f · Gerak Melingkar Beraturan** (fokus Kab–Prov)
- [ ] `osn-sma-fis-01f-gmb-campur.md`
- [ ] `osn-sma-fis-01f-gmb-mudah.md`
- [ ] `osn-sma-fis-01f-gmb-sedang.md`
- [ ] `osn-sma-fis-01f-gmb-sulit.md`
- [ ] `osn-sma-fis-01f-gmb-mudah-sedang.md`
- [ ] `osn-sma-fis-01f-gmb-sedang-sulit.md`

**FIS-01g · Gerak Melingkar Berubah Beraturan** (fokus Prov)
- [ ] `osn-sma-fis-01g-gmbb-campur.md`
- [ ] `osn-sma-fis-01g-gmbb-mudah.md`
- [ ] `osn-sma-fis-01g-gmbb-sedang.md`
- [ ] `osn-sma-fis-01g-gmbb-sulit.md`
- [ ] `osn-sma-fis-01g-gmbb-mudah-sedang.md`
- [ ] `osn-sma-fis-01g-gmbb-sedang-sulit.md`

**FIS-01h · Gerak Relatif (Frame of Reference)** (fokus Prov–Nas)
- [ ] `osn-sma-fis-01h-gerak-relatif-campur.md`
- [ ] `osn-sma-fis-01h-gerak-relatif-mudah.md`
- [ ] `osn-sma-fis-01h-gerak-relatif-sedang.md`
- [ ] `osn-sma-fis-01h-gerak-relatif-sulit.md`
- [ ] `osn-sma-fis-01h-gerak-relatif-mudah-sedang.md`
- [ ] `osn-sma-fis-01h-gerak-relatif-sedang-sulit.md`

**FIS-01i · Analisis Grafik Gerak** (fokus Kab–Prov)
- [ ] `osn-sma-fis-01i-grafik-gerak-campur.md`
- [ ] `osn-sma-fis-01i-grafik-gerak-mudah.md`
- [ ] `osn-sma-fis-01i-grafik-gerak-sedang.md`
- [ ] `osn-sma-fis-01i-grafik-gerak-sulit.md`
- [ ] `osn-sma-fis-01i-grafik-gerak-mudah-sedang.md`
- [ ] `osn-sma-fis-01i-grafik-gerak-sedang-sulit.md`

### FIS-02 · Dinamika (10 sub-bab)

**FIS-02a · Hukum Newton I, II, III** (fokus Kab)
- [ ] `osn-sma-fis-02a-hukum-newton-campur.md`
- [ ] `osn-sma-fis-02a-hukum-newton-mudah.md`
- [ ] `osn-sma-fis-02a-hukum-newton-sedang.md`
- [ ] `osn-sma-fis-02a-hukum-newton-sulit.md`
- [ ] `osn-sma-fis-02a-hukum-newton-mudah-sedang.md`
- [ ] `osn-sma-fis-02a-hukum-newton-sedang-sulit.md`

**FIS-02b · Penerapan Gaya Berat & Gaya Normal** (fokus Kab)
- [ ] `osn-sma-fis-02b-berat-normal-campur.md`
- [ ] `osn-sma-fis-02b-berat-normal-mudah.md`
- [ ] `osn-sma-fis-02b-berat-normal-sedang.md`
- [ ] `osn-sma-fis-02b-berat-normal-sulit.md`
- [ ] `osn-sma-fis-02b-berat-normal-mudah-sedang.md`
- [ ] `osn-sma-fis-02b-berat-normal-sedang-sulit.md`

**FIS-02c · Gaya Gesek (Statis & Kinetis)** (fokus Kab–Prov)
- [ ] `osn-sma-fis-02c-gesek-campur.md`
- [ ] `osn-sma-fis-02c-gesek-mudah.md`
- [ ] `osn-sma-fis-02c-gesek-sedang.md`
- [ ] `osn-sma-fis-02c-gesek-sulit.md`
- [ ] `osn-sma-fis-02c-gesek-mudah-sedang.md`
- [ ] `osn-sma-fis-02c-gesek-sedang-sulit.md`

**FIS-02d · Sistem Katrol (Atwood)** (fokus Prov)
- [ ] `osn-sma-fis-02d-katrol-atwood-campur.md`
- [ ] `osn-sma-fis-02d-katrol-atwood-mudah.md`
- [ ] `osn-sma-fis-02d-katrol-atwood-sedang.md`
- [ ] `osn-sma-fis-02d-katrol-atwood-sulit.md`
- [ ] `osn-sma-fis-02d-katrol-atwood-mudah-sedang.md`
- [ ] `osn-sma-fis-02d-katrol-atwood-sedang-sulit.md`

**FIS-02e · Bidang Miring (dengan/tanpa Gesekan)** (fokus Kab–Prov)
- [ ] `osn-sma-fis-02e-bidang-miring-campur.md`
- [ ] `osn-sma-fis-02e-bidang-miring-mudah.md`
- [ ] `osn-sma-fis-02e-bidang-miring-sedang.md`
- [ ] `osn-sma-fis-02e-bidang-miring-sulit.md`
- [ ] `osn-sma-fis-02e-bidang-miring-mudah-sedang.md`
- [ ] `osn-sma-fis-02e-bidang-miring-sedang-sulit.md`

**FIS-02f · Gaya Sentripetal & Aplikasinya** (fokus Prov)
- [ ] `osn-sma-fis-02f-sentripetal-campur.md`
- [ ] `osn-sma-fis-02f-sentripetal-mudah.md`
- [ ] `osn-sma-fis-02f-sentripetal-sedang.md`
- [ ] `osn-sma-fis-02f-sentripetal-sulit.md`
- [ ] `osn-sma-fis-02f-sentripetal-mudah-sedang.md`
- [ ] `osn-sma-fis-02f-sentripetal-sedang-sulit.md`

**FIS-02g · Gerak pada Sumbu Berputar (Conical Pendulum)** (fokus Prov–Nas)
- [ ] `osn-sma-fis-02g-conical-pendulum-campur.md`
- [ ] `osn-sma-fis-02g-conical-pendulum-mudah.md`
- [ ] `osn-sma-fis-02g-conical-pendulum-sedang.md`
- [ ] `osn-sma-fis-02g-conical-pendulum-sulit.md`
- [ ] `osn-sma-fis-02g-conical-pendulum-mudah-sedang.md`
- [ ] `osn-sma-fis-02g-conical-pendulum-sedang-sulit.md`

**FIS-02h · Dinamika Lift & Pesawat** (fokus Prov)
- [ ] `osn-sma-fis-02h-dinamika-lift-campur.md`
- [ ] `osn-sma-fis-02h-dinamika-lift-mudah.md`
- [ ] `osn-sma-fis-02h-dinamika-lift-sedang.md`
- [ ] `osn-sma-fis-02h-dinamika-lift-sulit.md`
- [ ] `osn-sma-fis-02h-dinamika-lift-mudah-sedang.md`
- [ ] `osn-sma-fis-02h-dinamika-lift-sedang-sulit.md`

**FIS-02i · Gaya Gravitasi & Hukum Newton Gravitasi** (fokus Prov)
- [ ] `osn-sma-fis-02i-gravitasi-campur.md`
- [ ] `osn-sma-fis-02i-gravitasi-mudah.md`
- [ ] `osn-sma-fis-02i-gravitasi-sedang.md`
- [ ] `osn-sma-fis-02i-gravitasi-sulit.md`
- [ ] `osn-sma-fis-02i-gravitasi-mudah-sedang.md`
- [ ] `osn-sma-fis-02i-gravitasi-sedang-sulit.md`

**FIS-02j · Soal Olimpiade Dinamika** (fokus Nas)
- [ ] `osn-sma-fis-02j-olimpiade-dinamika-campur.md`
- [ ] `osn-sma-fis-02j-olimpiade-dinamika-mudah.md`
- [ ] `osn-sma-fis-02j-olimpiade-dinamika-sedang.md`
- [ ] `osn-sma-fis-02j-olimpiade-dinamika-sulit.md`
- [ ] `osn-sma-fis-02j-olimpiade-dinamika-mudah-sedang.md`
- [ ] `osn-sma-fis-02j-olimpiade-dinamika-sedang-sulit.md`

### FIS-03 · Usaha, Energi & Momentum (10 sub-bab)

**FIS-03a · Usaha (W=F·s, Sudut, Variabel)** (fokus Kab)
- [ ] `osn-sma-fis-03a-usaha-campur.md`
- [ ] `osn-sma-fis-03a-usaha-mudah.md`
- [ ] `osn-sma-fis-03a-usaha-sedang.md`
- [ ] `osn-sma-fis-03a-usaha-sulit.md`
- [ ] `osn-sma-fis-03a-usaha-mudah-sedang.md`
- [ ] `osn-sma-fis-03a-usaha-sedang-sulit.md`

**FIS-03b · Energi Kinetik & Teorema Usaha-Energi** (fokus Kab–Prov)
- [ ] `osn-sma-fis-03b-energi-kinetik-teorema-campur.md`
- [ ] `osn-sma-fis-03b-energi-kinetik-teorema-mudah.md`
- [ ] `osn-sma-fis-03b-energi-kinetik-teorema-sedang.md`
- [ ] `osn-sma-fis-03b-energi-kinetik-teorema-sulit.md`
- [ ] `osn-sma-fis-03b-energi-kinetik-teorema-mudah-sedang.md`
- [ ] `osn-sma-fis-03b-energi-kinetik-teorema-sedang-sulit.md`

**FIS-03c · Energi Potensial Gravitasi & Pegas (Elastis)** (fokus Kab–Prov)
- [ ] `osn-sma-fis-03c-energi-potensial-campur.md`
- [ ] `osn-sma-fis-03c-energi-potensial-mudah.md`
- [ ] `osn-sma-fis-03c-energi-potensial-sedang.md`
- [ ] `osn-sma-fis-03c-energi-potensial-sulit.md`
- [ ] `osn-sma-fis-03c-energi-potensial-mudah-sedang.md`
- [ ] `osn-sma-fis-03c-energi-potensial-sedang-sulit.md`

**FIS-03d · Hukum Kekekalan Energi Mekanik** (fokus Prov)
- [ ] `osn-sma-fis-03d-kekekalan-energi-campur.md`
- [ ] `osn-sma-fis-03d-kekekalan-energi-mudah.md`
- [ ] `osn-sma-fis-03d-kekekalan-energi-sedang.md`
- [ ] `osn-sma-fis-03d-kekekalan-energi-sulit.md`
- [ ] `osn-sma-fis-03d-kekekalan-energi-mudah-sedang.md`
- [ ] `osn-sma-fis-03d-kekekalan-energi-sedang-sulit.md`

**FIS-03e · Daya & Efisiensi** (fokus Kab–Prov)
- [ ] `osn-sma-fis-03e-daya-efisiensi-campur.md`
- [ ] `osn-sma-fis-03e-daya-efisiensi-mudah.md`
- [ ] `osn-sma-fis-03e-daya-efisiensi-sedang.md`
- [ ] `osn-sma-fis-03e-daya-efisiensi-sulit.md`
- [ ] `osn-sma-fis-03e-daya-efisiensi-mudah-sedang.md`
- [ ] `osn-sma-fis-03e-daya-efisiensi-sedang-sulit.md`

**FIS-03f · Impuls & Momentum** (fokus Kab–Prov)
- [ ] `osn-sma-fis-03f-impuls-momentum-campur.md`
- [ ] `osn-sma-fis-03f-impuls-momentum-mudah.md`
- [ ] `osn-sma-fis-03f-impuls-momentum-sedang.md`
- [ ] `osn-sma-fis-03f-impuls-momentum-sulit.md`
- [ ] `osn-sma-fis-03f-impuls-momentum-mudah-sedang.md`
- [ ] `osn-sma-fis-03f-impuls-momentum-sedang-sulit.md`

**FIS-03g · Hukum Kekekalan Momentum** (fokus Prov)
- [ ] `osn-sma-fis-03g-kekekalan-momentum-campur.md`
- [ ] `osn-sma-fis-03g-kekekalan-momentum-mudah.md`
- [ ] `osn-sma-fis-03g-kekekalan-momentum-sedang.md`
- [ ] `osn-sma-fis-03g-kekekalan-momentum-sulit.md`
- [ ] `osn-sma-fis-03g-kekekalan-momentum-mudah-sedang.md`
- [ ] `osn-sma-fis-03g-kekekalan-momentum-sedang-sulit.md`

**FIS-03h · Tumbukan (Elastis, Tak Elastis, Sebagian)** (fokus Prov)
- [ ] `osn-sma-fis-03h-tumbukan-campur.md`
- [ ] `osn-sma-fis-03h-tumbukan-mudah.md`
- [ ] `osn-sma-fis-03h-tumbukan-sedang.md`
- [ ] `osn-sma-fis-03h-tumbukan-sulit.md`
- [ ] `osn-sma-fis-03h-tumbukan-mudah-sedang.md`
- [ ] `osn-sma-fis-03h-tumbukan-sedang-sulit.md`

**FIS-03i · Pusat Massa & Geraknya** (fokus Prov–Nas)
- [ ] `osn-sma-fis-03i-pusat-massa-campur.md`
- [ ] `osn-sma-fis-03i-pusat-massa-mudah.md`
- [ ] `osn-sma-fis-03i-pusat-massa-sedang.md`
- [ ] `osn-sma-fis-03i-pusat-massa-sulit.md`
- [ ] `osn-sma-fis-03i-pusat-massa-mudah-sedang.md`
- [ ] `osn-sma-fis-03i-pusat-massa-sedang-sulit.md`

**FIS-03j · Soal Olimpiade Energi-Momentum** (fokus Nas)
- [ ] `osn-sma-fis-03j-olimpiade-energi-momentum-campur.md`
- [ ] `osn-sma-fis-03j-olimpiade-energi-momentum-mudah.md`
- [ ] `osn-sma-fis-03j-olimpiade-energi-momentum-sedang.md`
- [ ] `osn-sma-fis-03j-olimpiade-energi-momentum-sulit.md`
- [ ] `osn-sma-fis-03j-olimpiade-energi-momentum-mudah-sedang.md`
- [ ] `osn-sma-fis-03j-olimpiade-energi-momentum-sedang-sulit.md`

### FIS-04 · Gerak Rotasi, Benda Tegar & Kesetimbangan (9 sub-bab)

**FIS-04a · Kinematika Rotasi (ω, α, Hubungan dengan Translasi)** (fokus Kab–Prov)
- [ ] `osn-sma-fis-04a-kinematika-rotasi-campur.md`
- [ ] `osn-sma-fis-04a-kinematika-rotasi-mudah.md`
- [ ] `osn-sma-fis-04a-kinematika-rotasi-sedang.md`
- [ ] `osn-sma-fis-04a-kinematika-rotasi-sulit.md`
- [ ] `osn-sma-fis-04a-kinematika-rotasi-mudah-sedang.md`
- [ ] `osn-sma-fis-04a-kinematika-rotasi-sedang-sulit.md`

**FIS-04b · Momen Gaya (Torsi)** (fokus Prov)
- [ ] `osn-sma-fis-04b-torsi-campur.md`
- [ ] `osn-sma-fis-04b-torsi-mudah.md`
- [ ] `osn-sma-fis-04b-torsi-sedang.md`
- [ ] `osn-sma-fis-04b-torsi-sulit.md`
- [ ] `osn-sma-fis-04b-torsi-mudah-sedang.md`
- [ ] `osn-sma-fis-04b-torsi-sedang-sulit.md`

**FIS-04c · Momen Inersia (Berbagai Bentuk)** (fokus Prov)
- [ ] `osn-sma-fis-04c-momen-inersia-campur.md`
- [ ] `osn-sma-fis-04c-momen-inersia-mudah.md`
- [ ] `osn-sma-fis-04c-momen-inersia-sedang.md`
- [ ] `osn-sma-fis-04c-momen-inersia-sulit.md`
- [ ] `osn-sma-fis-04c-momen-inersia-mudah-sedang.md`
- [ ] `osn-sma-fis-04c-momen-inersia-sedang-sulit.md`

**FIS-04d · Hukum II Newton untuk Rotasi** (fokus Prov)
- [ ] `osn-sma-fis-04d-newton-2-rotasi-campur.md`
- [ ] `osn-sma-fis-04d-newton-2-rotasi-mudah.md`
- [ ] `osn-sma-fis-04d-newton-2-rotasi-sedang.md`
- [ ] `osn-sma-fis-04d-newton-2-rotasi-sulit.md`
- [ ] `osn-sma-fis-04d-newton-2-rotasi-mudah-sedang.md`
- [ ] `osn-sma-fis-04d-newton-2-rotasi-sedang-sulit.md`

**FIS-04e · Energi Kinetik Rotasi & Translasi-Rotasi** (fokus Prov)
- [ ] `osn-sma-fis-04e-ek-rotasi-campur.md`
- [ ] `osn-sma-fis-04e-ek-rotasi-mudah.md`
- [ ] `osn-sma-fis-04e-ek-rotasi-sedang.md`
- [ ] `osn-sma-fis-04e-ek-rotasi-sulit.md`
- [ ] `osn-sma-fis-04e-ek-rotasi-mudah-sedang.md`
- [ ] `osn-sma-fis-04e-ek-rotasi-sedang-sulit.md`

**FIS-04f · Momentum Sudut & Kekekalannya** (fokus Prov–Nas)
- [ ] `osn-sma-fis-04f-momentum-sudut-campur.md`
- [ ] `osn-sma-fis-04f-momentum-sudut-mudah.md`
- [ ] `osn-sma-fis-04f-momentum-sudut-sedang.md`
- [ ] `osn-sma-fis-04f-momentum-sudut-sulit.md`
- [ ] `osn-sma-fis-04f-momentum-sudut-mudah-sedang.md`
- [ ] `osn-sma-fis-04f-momentum-sudut-sedang-sulit.md`

**FIS-04g · Kesetimbangan Benda Tegar** (fokus Kab–Prov)
- [ ] `osn-sma-fis-04g-kesetimbangan-benda-tegar-campur.md`
- [ ] `osn-sma-fis-04g-kesetimbangan-benda-tegar-mudah.md`
- [ ] `osn-sma-fis-04g-kesetimbangan-benda-tegar-sedang.md`
- [ ] `osn-sma-fis-04g-kesetimbangan-benda-tegar-sulit.md`
- [ ] `osn-sma-fis-04g-kesetimbangan-benda-tegar-mudah-sedang.md`
- [ ] `osn-sma-fis-04g-kesetimbangan-benda-tegar-sedang-sulit.md`

**FIS-04h · Titik Berat & Statika** (fokus Kab–Prov)
- [ ] `osn-sma-fis-04h-titik-berat-statika-campur.md`
- [ ] `osn-sma-fis-04h-titik-berat-statika-mudah.md`
- [ ] `osn-sma-fis-04h-titik-berat-statika-sedang.md`
- [ ] `osn-sma-fis-04h-titik-berat-statika-sulit.md`
- [ ] `osn-sma-fis-04h-titik-berat-statika-mudah-sedang.md`
- [ ] `osn-sma-fis-04h-titik-berat-statika-sedang-sulit.md`

**FIS-04i · Gerak Menggelinding** (fokus Prov–Nas)
- [ ] `osn-sma-fis-04i-menggelinding-campur.md`
- [ ] `osn-sma-fis-04i-menggelinding-mudah.md`
- [ ] `osn-sma-fis-04i-menggelinding-sedang.md`
- [ ] `osn-sma-fis-04i-menggelinding-sulit.md`
- [ ] `osn-sma-fis-04i-menggelinding-mudah-sedang.md`
- [ ] `osn-sma-fis-04i-menggelinding-sedang-sulit.md`

### FIS-05 · Fluida (9 sub-bab)

**FIS-05a · Massa Jenis & Tekanan Hidrostatis** (fokus Kab)
- [ ] `osn-sma-fis-05a-massa-jenis-hidrostatis-campur.md`
- [ ] `osn-sma-fis-05a-massa-jenis-hidrostatis-mudah.md`
- [ ] `osn-sma-fis-05a-massa-jenis-hidrostatis-sedang.md`
- [ ] `osn-sma-fis-05a-massa-jenis-hidrostatis-sulit.md`
- [ ] `osn-sma-fis-05a-massa-jenis-hidrostatis-mudah-sedang.md`
- [ ] `osn-sma-fis-05a-massa-jenis-hidrostatis-sedang-sulit.md`

**FIS-05b · Hukum Pascal & Aplikasinya** (fokus Kab–Prov)
- [ ] `osn-sma-fis-05b-pascal-campur.md`
- [ ] `osn-sma-fis-05b-pascal-mudah.md`
- [ ] `osn-sma-fis-05b-pascal-sedang.md`
- [ ] `osn-sma-fis-05b-pascal-sulit.md`
- [ ] `osn-sma-fis-05b-pascal-mudah-sedang.md`
- [ ] `osn-sma-fis-05b-pascal-sedang-sulit.md`

**FIS-05c · Hukum Archimedes (Apung, Melayang, Tenggelam)** (fokus Kab–Prov)
- [ ] `osn-sma-fis-05c-archimedes-campur.md`
- [ ] `osn-sma-fis-05c-archimedes-mudah.md`
- [ ] `osn-sma-fis-05c-archimedes-sedang.md`
- [ ] `osn-sma-fis-05c-archimedes-sulit.md`
- [ ] `osn-sma-fis-05c-archimedes-mudah-sedang.md`
- [ ] `osn-sma-fis-05c-archimedes-sedang-sulit.md`

**FIS-05d · Tegangan Permukaan & Kapilaritas** (fokus Prov)
- [ ] `osn-sma-fis-05d-tegangan-kapilaritas-campur.md`
- [ ] `osn-sma-fis-05d-tegangan-kapilaritas-mudah.md`
- [ ] `osn-sma-fis-05d-tegangan-kapilaritas-sedang.md`
- [ ] `osn-sma-fis-05d-tegangan-kapilaritas-sulit.md`
- [ ] `osn-sma-fis-05d-tegangan-kapilaritas-mudah-sedang.md`
- [ ] `osn-sma-fis-05d-tegangan-kapilaritas-sedang-sulit.md`

**FIS-05e · Persamaan Kontinuitas** (fokus Prov)
- [ ] `osn-sma-fis-05e-kontinuitas-campur.md`
- [ ] `osn-sma-fis-05e-kontinuitas-mudah.md`
- [ ] `osn-sma-fis-05e-kontinuitas-sedang.md`
- [ ] `osn-sma-fis-05e-kontinuitas-sulit.md`
- [ ] `osn-sma-fis-05e-kontinuitas-mudah-sedang.md`
- [ ] `osn-sma-fis-05e-kontinuitas-sedang-sulit.md`

**FIS-05f · Persamaan Bernoulli** (fokus Prov)
- [ ] `osn-sma-fis-05f-bernoulli-campur.md`
- [ ] `osn-sma-fis-05f-bernoulli-mudah.md`
- [ ] `osn-sma-fis-05f-bernoulli-sedang.md`
- [ ] `osn-sma-fis-05f-bernoulli-sulit.md`
- [ ] `osn-sma-fis-05f-bernoulli-mudah-sedang.md`
- [ ] `osn-sma-fis-05f-bernoulli-sedang-sulit.md`

**FIS-05g · Aplikasi Bernoulli (Venturimeter, Pitot, Daya Angkat)** (fokus Prov–Nas)
- [ ] `osn-sma-fis-05g-aplikasi-bernoulli-campur.md`
- [ ] `osn-sma-fis-05g-aplikasi-bernoulli-mudah.md`
- [ ] `osn-sma-fis-05g-aplikasi-bernoulli-sedang.md`
- [ ] `osn-sma-fis-05g-aplikasi-bernoulli-sulit.md`
- [ ] `osn-sma-fis-05g-aplikasi-bernoulli-mudah-sedang.md`
- [ ] `osn-sma-fis-05g-aplikasi-bernoulli-sedang-sulit.md`

**FIS-05h · Viskositas & Hukum Stokes** (fokus Prov)
- [ ] `osn-sma-fis-05h-viskositas-stokes-campur.md`
- [ ] `osn-sma-fis-05h-viskositas-stokes-mudah.md`
- [ ] `osn-sma-fis-05h-viskositas-stokes-sedang.md`
- [ ] `osn-sma-fis-05h-viskositas-stokes-sulit.md`
- [ ] `osn-sma-fis-05h-viskositas-stokes-mudah-sedang.md`
- [ ] `osn-sma-fis-05h-viskositas-stokes-sedang-sulit.md`

**FIS-05i · Bilangan Reynolds (Pengantar)** (fokus Nas)
- [ ] `osn-sma-fis-05i-reynolds-campur.md`
- [ ] `osn-sma-fis-05i-reynolds-mudah.md`
- [ ] `osn-sma-fis-05i-reynolds-sedang.md`
- [ ] `osn-sma-fis-05i-reynolds-sulit.md`
- [ ] `osn-sma-fis-05i-reynolds-mudah-sedang.md`
- [ ] `osn-sma-fis-05i-reynolds-sedang-sulit.md`

### FIS-06 · Termodinamika & Teori Kinetik Gas (10 sub-bab)

**FIS-06a · Suhu, Pemuaian, Kalor** (fokus Kab)
- [ ] `osn-sma-fis-06a-suhu-pemuaian-kalor-campur.md`
- [ ] `osn-sma-fis-06a-suhu-pemuaian-kalor-mudah.md`
- [ ] `osn-sma-fis-06a-suhu-pemuaian-kalor-sedang.md`
- [ ] `osn-sma-fis-06a-suhu-pemuaian-kalor-sulit.md`
- [ ] `osn-sma-fis-06a-suhu-pemuaian-kalor-mudah-sedang.md`
- [ ] `osn-sma-fis-06a-suhu-pemuaian-kalor-sedang-sulit.md`

**FIS-06b · Kalor Jenis & Asas Black** (fokus Kab–Prov)
- [ ] `osn-sma-fis-06b-asas-black-campur.md`
- [ ] `osn-sma-fis-06b-asas-black-mudah.md`
- [ ] `osn-sma-fis-06b-asas-black-sedang.md`
- [ ] `osn-sma-fis-06b-asas-black-sulit.md`
- [ ] `osn-sma-fis-06b-asas-black-mudah-sedang.md`
- [ ] `osn-sma-fis-06b-asas-black-sedang-sulit.md`

**FIS-06c · Perubahan Wujud & Kalor Laten** (fokus Kab–Prov)
- [ ] `osn-sma-fis-06c-perubahan-wujud-laten-campur.md`
- [ ] `osn-sma-fis-06c-perubahan-wujud-laten-mudah.md`
- [ ] `osn-sma-fis-06c-perubahan-wujud-laten-sedang.md`
- [ ] `osn-sma-fis-06c-perubahan-wujud-laten-sulit.md`
- [ ] `osn-sma-fis-06c-perubahan-wujud-laten-mudah-sedang.md`
- [ ] `osn-sma-fis-06c-perubahan-wujud-laten-sedang-sulit.md`

**FIS-06d · Perpindahan Kalor (Konduksi, Konveksi, Radiasi)** (fokus Kab–Prov)
- [ ] `osn-sma-fis-06d-perpindahan-kalor-campur.md`
- [ ] `osn-sma-fis-06d-perpindahan-kalor-mudah.md`
- [ ] `osn-sma-fis-06d-perpindahan-kalor-sedang.md`
- [ ] `osn-sma-fis-06d-perpindahan-kalor-sulit.md`
- [ ] `osn-sma-fis-06d-perpindahan-kalor-mudah-sedang.md`
- [ ] `osn-sma-fis-06d-perpindahan-kalor-sedang-sulit.md`

**FIS-06e · Teori Kinetik Gas Ideal** (fokus Prov)
- [ ] `osn-sma-fis-06e-teori-kinetik-gas-campur.md`
- [ ] `osn-sma-fis-06e-teori-kinetik-gas-mudah.md`
- [ ] `osn-sma-fis-06e-teori-kinetik-gas-sedang.md`
- [ ] `osn-sma-fis-06e-teori-kinetik-gas-sulit.md`
- [ ] `osn-sma-fis-06e-teori-kinetik-gas-mudah-sedang.md`
- [ ] `osn-sma-fis-06e-teori-kinetik-gas-sedang-sulit.md`

**FIS-06f · Persamaan Keadaan Gas Ideal** (fokus Prov)
- [ ] `osn-sma-fis-06f-persamaan-gas-ideal-campur.md`
- [ ] `osn-sma-fis-06f-persamaan-gas-ideal-mudah.md`
- [ ] `osn-sma-fis-06f-persamaan-gas-ideal-sedang.md`
- [ ] `osn-sma-fis-06f-persamaan-gas-ideal-sulit.md`
- [ ] `osn-sma-fis-06f-persamaan-gas-ideal-mudah-sedang.md`
- [ ] `osn-sma-fis-06f-persamaan-gas-ideal-sedang-sulit.md`

**FIS-06g · Energi Dalam & Hukum I Termodinamika** (fokus Prov)
- [ ] `osn-sma-fis-06g-hukum-1-termodinamika-campur.md`
- [ ] `osn-sma-fis-06g-hukum-1-termodinamika-mudah.md`
- [ ] `osn-sma-fis-06g-hukum-1-termodinamika-sedang.md`
- [ ] `osn-sma-fis-06g-hukum-1-termodinamika-sulit.md`
- [ ] `osn-sma-fis-06g-hukum-1-termodinamika-mudah-sedang.md`
- [ ] `osn-sma-fis-06g-hukum-1-termodinamika-sedang-sulit.md`

**FIS-06h · Proses Termodinamika (Isobarik, Isokorik, Isotermik, Adiabatik)** (fokus Prov)
- [ ] `osn-sma-fis-06h-proses-termodinamika-campur.md`
- [ ] `osn-sma-fis-06h-proses-termodinamika-mudah.md`
- [ ] `osn-sma-fis-06h-proses-termodinamika-sedang.md`
- [ ] `osn-sma-fis-06h-proses-termodinamika-sulit.md`
- [ ] `osn-sma-fis-06h-proses-termodinamika-mudah-sedang.md`
- [ ] `osn-sma-fis-06h-proses-termodinamika-sedang-sulit.md`

**FIS-06i · Hukum II Termodinamika & Entropi** (fokus Prov–Nas)
- [ ] `osn-sma-fis-06i-hukum-2-entropi-campur.md`
- [ ] `osn-sma-fis-06i-hukum-2-entropi-mudah.md`
- [ ] `osn-sma-fis-06i-hukum-2-entropi-sedang.md`
- [ ] `osn-sma-fis-06i-hukum-2-entropi-sulit.md`
- [ ] `osn-sma-fis-06i-hukum-2-entropi-mudah-sedang.md`
- [ ] `osn-sma-fis-06i-hukum-2-entropi-sedang-sulit.md`

**FIS-06j · Mesin Kalor & Siklus Carnot** (fokus Prov–Nas)
- [ ] `osn-sma-fis-06j-mesin-kalor-carnot-campur.md`
- [ ] `osn-sma-fis-06j-mesin-kalor-carnot-mudah.md`
- [ ] `osn-sma-fis-06j-mesin-kalor-carnot-sedang.md`
- [ ] `osn-sma-fis-06j-mesin-kalor-carnot-sulit.md`
- [ ] `osn-sma-fis-06j-mesin-kalor-carnot-mudah-sedang.md`
- [ ] `osn-sma-fis-06j-mesin-kalor-carnot-sedang-sulit.md`

### FIS-07 · Getaran, Gelombang & Bunyi (9 sub-bab)

**FIS-07a · Getaran Harmonik Sederhana** (fokus Kab–Prov)
- [ ] `osn-sma-fis-07a-ghs-campur.md`
- [ ] `osn-sma-fis-07a-ghs-mudah.md`
- [ ] `osn-sma-fis-07a-ghs-sedang.md`
- [ ] `osn-sma-fis-07a-ghs-sulit.md`
- [ ] `osn-sma-fis-07a-ghs-mudah-sedang.md`
- [ ] `osn-sma-fis-07a-ghs-sedang-sulit.md`

**FIS-07b · Energi Getaran Harmonik** (fokus Prov)
- [ ] `osn-sma-fis-07b-energi-ghs-campur.md`
- [ ] `osn-sma-fis-07b-energi-ghs-mudah.md`
- [ ] `osn-sma-fis-07b-energi-ghs-sedang.md`
- [ ] `osn-sma-fis-07b-energi-ghs-sulit.md`
- [ ] `osn-sma-fis-07b-energi-ghs-mudah-sedang.md`
- [ ] `osn-sma-fis-07b-energi-ghs-sedang-sulit.md`

**FIS-07c · Gelombang Berjalan** (fokus Kab–Prov)
- [ ] `osn-sma-fis-07c-gelombang-berjalan-campur.md`
- [ ] `osn-sma-fis-07c-gelombang-berjalan-mudah.md`
- [ ] `osn-sma-fis-07c-gelombang-berjalan-sedang.md`
- [ ] `osn-sma-fis-07c-gelombang-berjalan-sulit.md`
- [ ] `osn-sma-fis-07c-gelombang-berjalan-mudah-sedang.md`
- [ ] `osn-sma-fis-07c-gelombang-berjalan-sedang-sulit.md`

**FIS-07d · Gelombang Stasioner** (fokus Prov)
- [ ] `osn-sma-fis-07d-gelombang-stasioner-campur.md`
- [ ] `osn-sma-fis-07d-gelombang-stasioner-mudah.md`
- [ ] `osn-sma-fis-07d-gelombang-stasioner-sedang.md`
- [ ] `osn-sma-fis-07d-gelombang-stasioner-sulit.md`
- [ ] `osn-sma-fis-07d-gelombang-stasioner-mudah-sedang.md`
- [ ] `osn-sma-fis-07d-gelombang-stasioner-sedang-sulit.md`

**FIS-07e · Sifat Gelombang (Refleksi, Refraksi, Difraksi, Interferensi)** (fokus Kab–Prov)
- [ ] `osn-sma-fis-07e-sifat-gelombang-campur.md`
- [ ] `osn-sma-fis-07e-sifat-gelombang-mudah.md`
- [ ] `osn-sma-fis-07e-sifat-gelombang-sedang.md`
- [ ] `osn-sma-fis-07e-sifat-gelombang-sulit.md`
- [ ] `osn-sma-fis-07e-sifat-gelombang-mudah-sedang.md`
- [ ] `osn-sma-fis-07e-sifat-gelombang-sedang-sulit.md`

**FIS-07f · Sifat & Karakteristik Bunyi** (fokus Kab)
- [ ] `osn-sma-fis-07f-karakteristik-bunyi-campur.md`
- [ ] `osn-sma-fis-07f-karakteristik-bunyi-mudah.md`
- [ ] `osn-sma-fis-07f-karakteristik-bunyi-sedang.md`
- [ ] `osn-sma-fis-07f-karakteristik-bunyi-sulit.md`
- [ ] `osn-sma-fis-07f-karakteristik-bunyi-mudah-sedang.md`
- [ ] `osn-sma-fis-07f-karakteristik-bunyi-sedang-sulit.md`

**FIS-07g · Pipa Organa & Senar Bergetar** (fokus Prov)
- [ ] `osn-sma-fis-07g-pipa-organa-senar-campur.md`
- [ ] `osn-sma-fis-07g-pipa-organa-senar-mudah.md`
- [ ] `osn-sma-fis-07g-pipa-organa-senar-sedang.md`
- [ ] `osn-sma-fis-07g-pipa-organa-senar-sulit.md`
- [ ] `osn-sma-fis-07g-pipa-organa-senar-mudah-sedang.md`
- [ ] `osn-sma-fis-07g-pipa-organa-senar-sedang-sulit.md`

**FIS-07h · Efek Doppler** (fokus Prov)
- [ ] `osn-sma-fis-07h-efek-doppler-campur.md`
- [ ] `osn-sma-fis-07h-efek-doppler-mudah.md`
- [ ] `osn-sma-fis-07h-efek-doppler-sedang.md`
- [ ] `osn-sma-fis-07h-efek-doppler-sulit.md`
- [ ] `osn-sma-fis-07h-efek-doppler-mudah-sedang.md`
- [ ] `osn-sma-fis-07h-efek-doppler-sedang-sulit.md`

**FIS-07i · Intensitas & Taraf Intensitas Bunyi** (fokus Prov)
- [ ] `osn-sma-fis-07i-intensitas-bunyi-campur.md`
- [ ] `osn-sma-fis-07i-intensitas-bunyi-mudah.md`
- [ ] `osn-sma-fis-07i-intensitas-bunyi-sedang.md`
- [ ] `osn-sma-fis-07i-intensitas-bunyi-sulit.md`
- [ ] `osn-sma-fis-07i-intensitas-bunyi-mudah-sedang.md`
- [ ] `osn-sma-fis-07i-intensitas-bunyi-sedang-sulit.md`

### FIS-08 · Optik (Geometri & Fisis) (9 sub-bab)

**FIS-08a · Pemantulan & Cermin (Datar, Cekung, Cembung)** (fokus Kab)
- [ ] `osn-sma-fis-08a-cermin-campur.md`
- [ ] `osn-sma-fis-08a-cermin-mudah.md`
- [ ] `osn-sma-fis-08a-cermin-sedang.md`
- [ ] `osn-sma-fis-08a-cermin-sulit.md`
- [ ] `osn-sma-fis-08a-cermin-mudah-sedang.md`
- [ ] `osn-sma-fis-08a-cermin-sedang-sulit.md`

**FIS-08b · Pembiasan Cahaya & Indeks Bias** (fokus Kab–Prov)
- [ ] `osn-sma-fis-08b-pembiasan-campur.md`
- [ ] `osn-sma-fis-08b-pembiasan-mudah.md`
- [ ] `osn-sma-fis-08b-pembiasan-sedang.md`
- [ ] `osn-sma-fis-08b-pembiasan-sulit.md`
- [ ] `osn-sma-fis-08b-pembiasan-mudah-sedang.md`
- [ ] `osn-sma-fis-08b-pembiasan-sedang-sulit.md`

**FIS-08c · Lensa Tipis (Cekung, Cembung)** (fokus Kab–Prov)
- [ ] `osn-sma-fis-08c-lensa-tipis-campur.md`
- [ ] `osn-sma-fis-08c-lensa-tipis-mudah.md`
- [ ] `osn-sma-fis-08c-lensa-tipis-sedang.md`
- [ ] `osn-sma-fis-08c-lensa-tipis-sulit.md`
- [ ] `osn-sma-fis-08c-lensa-tipis-mudah-sedang.md`
- [ ] `osn-sma-fis-08c-lensa-tipis-sedang-sulit.md`

**FIS-08d · Alat Optik (Mata, Lup, Mikroskop, Teropong)** (fokus Kab–Prov)
- [ ] `osn-sma-fis-08d-alat-optik-campur.md`
- [ ] `osn-sma-fis-08d-alat-optik-mudah.md`
- [ ] `osn-sma-fis-08d-alat-optik-sedang.md`
- [ ] `osn-sma-fis-08d-alat-optik-sulit.md`
- [ ] `osn-sma-fis-08d-alat-optik-mudah-sedang.md`
- [ ] `osn-sma-fis-08d-alat-optik-sedang-sulit.md`

**FIS-08e · Cacat Mata** (fokus Kab)
- [ ] `osn-sma-fis-08e-cacat-mata-campur.md`
- [ ] `osn-sma-fis-08e-cacat-mata-mudah.md`
- [ ] `osn-sma-fis-08e-cacat-mata-sedang.md`
- [ ] `osn-sma-fis-08e-cacat-mata-sulit.md`
- [ ] `osn-sma-fis-08e-cacat-mata-mudah-sedang.md`
- [ ] `osn-sma-fis-08e-cacat-mata-sedang-sulit.md`

**FIS-08f · Interferensi Cahaya (Young, Lapisan Tipis)** (fokus Prov)
- [ ] `osn-sma-fis-08f-interferensi-cahaya-campur.md`
- [ ] `osn-sma-fis-08f-interferensi-cahaya-mudah.md`
- [ ] `osn-sma-fis-08f-interferensi-cahaya-sedang.md`
- [ ] `osn-sma-fis-08f-interferensi-cahaya-sulit.md`
- [ ] `osn-sma-fis-08f-interferensi-cahaya-mudah-sedang.md`
- [ ] `osn-sma-fis-08f-interferensi-cahaya-sedang-sulit.md`

**FIS-08g · Difraksi Cahaya (Celah Tunggal & Kisi)** (fokus Prov)
- [ ] `osn-sma-fis-08g-difraksi-campur.md`
- [ ] `osn-sma-fis-08g-difraksi-mudah.md`
- [ ] `osn-sma-fis-08g-difraksi-sedang.md`
- [ ] `osn-sma-fis-08g-difraksi-sulit.md`
- [ ] `osn-sma-fis-08g-difraksi-mudah-sedang.md`
- [ ] `osn-sma-fis-08g-difraksi-sedang-sulit.md`

**FIS-08h · Polarisasi Cahaya** (fokus Prov)
- [ ] `osn-sma-fis-08h-polarisasi-campur.md`
- [ ] `osn-sma-fis-08h-polarisasi-mudah.md`
- [ ] `osn-sma-fis-08h-polarisasi-sedang.md`
- [ ] `osn-sma-fis-08h-polarisasi-sulit.md`
- [ ] `osn-sma-fis-08h-polarisasi-mudah-sedang.md`
- [ ] `osn-sma-fis-08h-polarisasi-sedang-sulit.md`

**FIS-08i · Dispersi & Spektrum Cahaya** (fokus Prov)
- [ ] `osn-sma-fis-08i-dispersi-spektrum-campur.md`
- [ ] `osn-sma-fis-08i-dispersi-spektrum-mudah.md`
- [ ] `osn-sma-fis-08i-dispersi-spektrum-sedang.md`
- [ ] `osn-sma-fis-08i-dispersi-spektrum-sulit.md`
- [ ] `osn-sma-fis-08i-dispersi-spektrum-mudah-sedang.md`
- [ ] `osn-sma-fis-08i-dispersi-spektrum-sedang-sulit.md`

### FIS-09 · Listrik & Magnet (10 sub-bab)

**FIS-09a · Muatan, Hukum Coulomb, Medan Listrik** (fokus Kab–Prov)
- [ ] `osn-sma-fis-09a-coulomb-medan-listrik-campur.md`
- [ ] `osn-sma-fis-09a-coulomb-medan-listrik-mudah.md`
- [ ] `osn-sma-fis-09a-coulomb-medan-listrik-sedang.md`
- [ ] `osn-sma-fis-09a-coulomb-medan-listrik-sulit.md`
- [ ] `osn-sma-fis-09a-coulomb-medan-listrik-mudah-sedang.md`
- [ ] `osn-sma-fis-09a-coulomb-medan-listrik-sedang-sulit.md`

**FIS-09b · Potensial Listrik & Energi Potensial Listrik** (fokus Prov)
- [ ] `osn-sma-fis-09b-potensial-listrik-campur.md`
- [ ] `osn-sma-fis-09b-potensial-listrik-mudah.md`
- [ ] `osn-sma-fis-09b-potensial-listrik-sedang.md`
- [ ] `osn-sma-fis-09b-potensial-listrik-sulit.md`
- [ ] `osn-sma-fis-09b-potensial-listrik-mudah-sedang.md`
- [ ] `osn-sma-fis-09b-potensial-listrik-sedang-sulit.md`

**FIS-09c · Kapasitor & Energi Kapasitor** (fokus Prov)
- [ ] `osn-sma-fis-09c-kapasitor-campur.md`
- [ ] `osn-sma-fis-09c-kapasitor-mudah.md`
- [ ] `osn-sma-fis-09c-kapasitor-sedang.md`
- [ ] `osn-sma-fis-09c-kapasitor-sulit.md`
- [ ] `osn-sma-fis-09c-kapasitor-mudah-sedang.md`
- [ ] `osn-sma-fis-09c-kapasitor-sedang-sulit.md`

**FIS-09d · Arus & Hukum Ohm** (fokus Kab)
- [ ] `osn-sma-fis-09d-arus-ohm-campur.md`
- [ ] `osn-sma-fis-09d-arus-ohm-mudah.md`
- [ ] `osn-sma-fis-09d-arus-ohm-sedang.md`
- [ ] `osn-sma-fis-09d-arus-ohm-sulit.md`
- [ ] `osn-sma-fis-09d-arus-ohm-mudah-sedang.md`
- [ ] `osn-sma-fis-09d-arus-ohm-sedang-sulit.md`

**FIS-09e · Rangkaian Seri-Paralel & Hukum Kirchhoff** (fokus Kab–Prov)
- [ ] `osn-sma-fis-09e-kirchhoff-campur.md`
- [ ] `osn-sma-fis-09e-kirchhoff-mudah.md`
- [ ] `osn-sma-fis-09e-kirchhoff-sedang.md`
- [ ] `osn-sma-fis-09e-kirchhoff-sulit.md`
- [ ] `osn-sma-fis-09e-kirchhoff-mudah-sedang.md`
- [ ] `osn-sma-fis-09e-kirchhoff-sedang-sulit.md`

**FIS-09f · Daya & Energi Listrik** (fokus Kab–Prov)
- [ ] `osn-sma-fis-09f-daya-listrik-campur.md`
- [ ] `osn-sma-fis-09f-daya-listrik-mudah.md`
- [ ] `osn-sma-fis-09f-daya-listrik-sedang.md`
- [ ] `osn-sma-fis-09f-daya-listrik-sulit.md`
- [ ] `osn-sma-fis-09f-daya-listrik-mudah-sedang.md`
- [ ] `osn-sma-fis-09f-daya-listrik-sedang-sulit.md`

**FIS-09g · Medan Magnet (Sekitar Kawat Berarus, Solenoid)** (fokus Prov)
- [ ] `osn-sma-fis-09g-medan-magnet-campur.md`
- [ ] `osn-sma-fis-09g-medan-magnet-mudah.md`
- [ ] `osn-sma-fis-09g-medan-magnet-sedang.md`
- [ ] `osn-sma-fis-09g-medan-magnet-sulit.md`
- [ ] `osn-sma-fis-09g-medan-magnet-mudah-sedang.md`
- [ ] `osn-sma-fis-09g-medan-magnet-sedang-sulit.md`

**FIS-09h · Gaya Magnet pada Muatan & Kawat Berarus (Lorentz)** (fokus Prov)
- [ ] `osn-sma-fis-09h-gaya-lorentz-campur.md`
- [ ] `osn-sma-fis-09h-gaya-lorentz-mudah.md`
- [ ] `osn-sma-fis-09h-gaya-lorentz-sedang.md`
- [ ] `osn-sma-fis-09h-gaya-lorentz-sulit.md`
- [ ] `osn-sma-fis-09h-gaya-lorentz-mudah-sedang.md`
- [ ] `osn-sma-fis-09h-gaya-lorentz-sedang-sulit.md`

**FIS-09i · Induksi Elektromagnetik (Hk Faraday, Lenz)** (fokus Prov–Nas)
- [ ] `osn-sma-fis-09i-induksi-faraday-lenz-campur.md`
- [ ] `osn-sma-fis-09i-induksi-faraday-lenz-mudah.md`
- [ ] `osn-sma-fis-09i-induksi-faraday-lenz-sedang.md`
- [ ] `osn-sma-fis-09i-induksi-faraday-lenz-sulit.md`
- [ ] `osn-sma-fis-09i-induksi-faraday-lenz-mudah-sedang.md`
- [ ] `osn-sma-fis-09i-induksi-faraday-lenz-sedang-sulit.md`

**FIS-09j · Arus Bolak-balik (AC) & RLC** (fokus Prov)
- [ ] `osn-sma-fis-09j-arus-ac-rlc-campur.md`
- [ ] `osn-sma-fis-09j-arus-ac-rlc-mudah.md`
- [ ] `osn-sma-fis-09j-arus-ac-rlc-sedang.md`
- [ ] `osn-sma-fis-09j-arus-ac-rlc-sulit.md`
- [ ] `osn-sma-fis-09j-arus-ac-rlc-mudah-sedang.md`
- [ ] `osn-sma-fis-09j-arus-ac-rlc-sedang-sulit.md`

### FIS-10 · Fisika Modern (9 sub-bab)

**FIS-10a · Teori Relativitas Khusus (Dasar)** (fokus Prov)
- [ ] `osn-sma-fis-10a-relativitas-dasar-campur.md`
- [ ] `osn-sma-fis-10a-relativitas-dasar-mudah.md`
- [ ] `osn-sma-fis-10a-relativitas-dasar-sedang.md`
- [ ] `osn-sma-fis-10a-relativitas-dasar-sulit.md`
- [ ] `osn-sma-fis-10a-relativitas-dasar-mudah-sedang.md`
- [ ] `osn-sma-fis-10a-relativitas-dasar-sedang-sulit.md`

**FIS-10b · Dilatasi Waktu & Kontraksi Panjang** (fokus Prov–Nas)
- [ ] `osn-sma-fis-10b-dilatasi-kontraksi-campur.md`
- [ ] `osn-sma-fis-10b-dilatasi-kontraksi-mudah.md`
- [ ] `osn-sma-fis-10b-dilatasi-kontraksi-sedang.md`
- [ ] `osn-sma-fis-10b-dilatasi-kontraksi-sulit.md`
- [ ] `osn-sma-fis-10b-dilatasi-kontraksi-mudah-sedang.md`
- [ ] `osn-sma-fis-10b-dilatasi-kontraksi-sedang-sulit.md`

**FIS-10c · Efek Fotolistrik & Foton** (fokus Prov)
- [ ] `osn-sma-fis-10c-fotolistrik-campur.md`
- [ ] `osn-sma-fis-10c-fotolistrik-mudah.md`
- [ ] `osn-sma-fis-10c-fotolistrik-sedang.md`
- [ ] `osn-sma-fis-10c-fotolistrik-sulit.md`
- [ ] `osn-sma-fis-10c-fotolistrik-mudah-sedang.md`
- [ ] `osn-sma-fis-10c-fotolistrik-sedang-sulit.md`

**FIS-10d · Hipotesis de Broglie (Dualisme)** (fokus Prov)
- [ ] `osn-sma-fis-10d-de-broglie-campur.md`
- [ ] `osn-sma-fis-10d-de-broglie-mudah.md`
- [ ] `osn-sma-fis-10d-de-broglie-sedang.md`
- [ ] `osn-sma-fis-10d-de-broglie-sulit.md`
- [ ] `osn-sma-fis-10d-de-broglie-mudah-sedang.md`
- [ ] `osn-sma-fis-10d-de-broglie-sedang-sulit.md`

**FIS-10e · Model Atom (Thomson, Rutherford, Bohr)** (fokus Kab–Prov)
- [ ] `osn-sma-fis-10e-model-atom-campur.md`
- [ ] `osn-sma-fis-10e-model-atom-mudah.md`
- [ ] `osn-sma-fis-10e-model-atom-sedang.md`
- [ ] `osn-sma-fis-10e-model-atom-sulit.md`
- [ ] `osn-sma-fis-10e-model-atom-mudah-sedang.md`
- [ ] `osn-sma-fis-10e-model-atom-sedang-sulit.md`

**FIS-10f · Spektrum Atom Hidrogen** (fokus Prov)
- [ ] `osn-sma-fis-10f-spektrum-hidrogen-campur.md`
- [ ] `osn-sma-fis-10f-spektrum-hidrogen-mudah.md`
- [ ] `osn-sma-fis-10f-spektrum-hidrogen-sedang.md`
- [ ] `osn-sma-fis-10f-spektrum-hidrogen-sulit.md`
- [ ] `osn-sma-fis-10f-spektrum-hidrogen-mudah-sedang.md`
- [ ] `osn-sma-fis-10f-spektrum-hidrogen-sedang-sulit.md`

**FIS-10g · Struktur Inti Atom** (fokus Kab)
- [ ] `osn-sma-fis-10g-struktur-inti-campur.md`
- [ ] `osn-sma-fis-10g-struktur-inti-mudah.md`
- [ ] `osn-sma-fis-10g-struktur-inti-sedang.md`
- [ ] `osn-sma-fis-10g-struktur-inti-sulit.md`
- [ ] `osn-sma-fis-10g-struktur-inti-mudah-sedang.md`
- [ ] `osn-sma-fis-10g-struktur-inti-sedang-sulit.md`

**FIS-10h · Radioaktivitas (α, β, γ) & Waktu Paruh** (fokus Kab–Prov)
- [ ] `osn-sma-fis-10h-radioaktivitas-campur.md`
- [ ] `osn-sma-fis-10h-radioaktivitas-mudah.md`
- [ ] `osn-sma-fis-10h-radioaktivitas-sedang.md`
- [ ] `osn-sma-fis-10h-radioaktivitas-sulit.md`
- [ ] `osn-sma-fis-10h-radioaktivitas-mudah-sedang.md`
- [ ] `osn-sma-fis-10h-radioaktivitas-sedang-sulit.md`

**FIS-10i · Reaksi Inti (Fisi & Fusi)** (fokus Prov)
- [ ] `osn-sma-fis-10i-reaksi-inti-campur.md`
- [ ] `osn-sma-fis-10i-reaksi-inti-mudah.md`
- [ ] `osn-sma-fis-10i-reaksi-inti-sedang.md`
- [ ] `osn-sma-fis-10i-reaksi-inti-sulit.md`
- [ ] `osn-sma-fis-10i-reaksi-inti-mudah-sedang.md`
- [ ] `osn-sma-fis-10i-reaksi-inti-sedang-sulit.md`

---

## C · Kimia Per Sub-Bab (86 sub-bab × 6 = 516 file)

### KIM-01 · Struktur Atom & Sistem Periodik (9 sub-bab)

**KIM-01a · Model Atom (Dalton-Bohr-Mekanika Kuantum)** (fokus Kab–Prov)
- [ ] `osn-sma-kim-01a-model-atom-campur.md`
- [ ] `osn-sma-kim-01a-model-atom-mudah.md`
- [ ] `osn-sma-kim-01a-model-atom-sedang.md`
- [ ] `osn-sma-kim-01a-model-atom-sulit.md`
- [ ] `osn-sma-kim-01a-model-atom-mudah-sedang.md`
- [ ] `osn-sma-kim-01a-model-atom-sedang-sulit.md`

**KIM-01b · Konfigurasi Elektron & Bilangan Kuantum** (fokus Kab–Prov)
- [ ] `osn-sma-kim-01b-konfigurasi-elektron-campur.md`
- [ ] `osn-sma-kim-01b-konfigurasi-elektron-mudah.md`
- [ ] `osn-sma-kim-01b-konfigurasi-elektron-sedang.md`
- [ ] `osn-sma-kim-01b-konfigurasi-elektron-sulit.md`
- [ ] `osn-sma-kim-01b-konfigurasi-elektron-mudah-sedang.md`
- [ ] `osn-sma-kim-01b-konfigurasi-elektron-sedang-sulit.md`

**KIM-01c · Sistem Periodik & Sifat Periodik** (fokus Kab)
- [ ] `osn-sma-kim-01c-sistem-periodik-campur.md`
- [ ] `osn-sma-kim-01c-sistem-periodik-mudah.md`
- [ ] `osn-sma-kim-01c-sistem-periodik-sedang.md`
- [ ] `osn-sma-kim-01c-sistem-periodik-sulit.md`
- [ ] `osn-sma-kim-01c-sistem-periodik-mudah-sedang.md`
- [ ] `osn-sma-kim-01c-sistem-periodik-sedang-sulit.md`

**KIM-01d · Jari-jari Atom, Energi Ionisasi, Afinitas Elektron** (fokus Kab–Prov)
- [ ] `osn-sma-kim-01d-jari-ionisasi-afinitas-campur.md`
- [ ] `osn-sma-kim-01d-jari-ionisasi-afinitas-mudah.md`
- [ ] `osn-sma-kim-01d-jari-ionisasi-afinitas-sedang.md`
- [ ] `osn-sma-kim-01d-jari-ionisasi-afinitas-sulit.md`
- [ ] `osn-sma-kim-01d-jari-ionisasi-afinitas-mudah-sedang.md`
- [ ] `osn-sma-kim-01d-jari-ionisasi-afinitas-sedang-sulit.md`

**KIM-01e · Keelektronegatifan** (fokus Kab)
- [ ] `osn-sma-kim-01e-keelektronegatifan-campur.md`
- [ ] `osn-sma-kim-01e-keelektronegatifan-mudah.md`
- [ ] `osn-sma-kim-01e-keelektronegatifan-sedang.md`
- [ ] `osn-sma-kim-01e-keelektronegatifan-sulit.md`
- [ ] `osn-sma-kim-01e-keelektronegatifan-mudah-sedang.md`
- [ ] `osn-sma-kim-01e-keelektronegatifan-sedang-sulit.md`

**KIM-01f · Klasifikasi Logam, Non-logam, Metaloid** (fokus Kab)
- [ ] `osn-sma-kim-01f-logam-nonlogam-campur.md`
- [ ] `osn-sma-kim-01f-logam-nonlogam-mudah.md`
- [ ] `osn-sma-kim-01f-logam-nonlogam-sedang.md`
- [ ] `osn-sma-kim-01f-logam-nonlogam-sulit.md`
- [ ] `osn-sma-kim-01f-logam-nonlogam-mudah-sedang.md`
- [ ] `osn-sma-kim-01f-logam-nonlogam-sedang-sulit.md`

**KIM-01g · Unsur Transisi & Golongan Khusus** (fokus Prov)
- [ ] `osn-sma-kim-01g-unsur-transisi-campur.md`
- [ ] `osn-sma-kim-01g-unsur-transisi-mudah.md`
- [ ] `osn-sma-kim-01g-unsur-transisi-sedang.md`
- [ ] `osn-sma-kim-01g-unsur-transisi-sulit.md`
- [ ] `osn-sma-kim-01g-unsur-transisi-mudah-sedang.md`
- [ ] `osn-sma-kim-01g-unsur-transisi-sedang-sulit.md`

**KIM-01h · Isotop, Isobar, Isoton** (fokus Kab)
- [ ] `osn-sma-kim-01h-isotop-isobar-isoton-campur.md`
- [ ] `osn-sma-kim-01h-isotop-isobar-isoton-mudah.md`
- [ ] `osn-sma-kim-01h-isotop-isobar-isoton-sedang.md`
- [ ] `osn-sma-kim-01h-isotop-isobar-isoton-sulit.md`
- [ ] `osn-sma-kim-01h-isotop-isobar-isoton-mudah-sedang.md`
- [ ] `osn-sma-kim-01h-isotop-isobar-isoton-sedang-sulit.md`

**KIM-01i · Spektrum Atom & Tingkat Energi** (fokus Prov)
- [ ] `osn-sma-kim-01i-spektrum-tingkat-energi-campur.md`
- [ ] `osn-sma-kim-01i-spektrum-tingkat-energi-mudah.md`
- [ ] `osn-sma-kim-01i-spektrum-tingkat-energi-sedang.md`
- [ ] `osn-sma-kim-01i-spektrum-tingkat-energi-sulit.md`
- [ ] `osn-sma-kim-01i-spektrum-tingkat-energi-mudah-sedang.md`
- [ ] `osn-sma-kim-01i-spektrum-tingkat-energi-sedang-sulit.md`

### KIM-02 · Ikatan Kimia & Geometri Molekul (9 sub-bab)

**KIM-02a · Ikatan Ion** (fokus Kab)
- [ ] `osn-sma-kim-02a-ikatan-ion-campur.md`
- [ ] `osn-sma-kim-02a-ikatan-ion-mudah.md`
- [ ] `osn-sma-kim-02a-ikatan-ion-sedang.md`
- [ ] `osn-sma-kim-02a-ikatan-ion-sulit.md`
- [ ] `osn-sma-kim-02a-ikatan-ion-mudah-sedang.md`
- [ ] `osn-sma-kim-02a-ikatan-ion-sedang-sulit.md`

**KIM-02b · Ikatan Kovalen (Tunggal, Rangkap, Koordinasi)** (fokus Kab–Prov)
- [ ] `osn-sma-kim-02b-ikatan-kovalen-campur.md`
- [ ] `osn-sma-kim-02b-ikatan-kovalen-mudah.md`
- [ ] `osn-sma-kim-02b-ikatan-kovalen-sedang.md`
- [ ] `osn-sma-kim-02b-ikatan-kovalen-sulit.md`
- [ ] `osn-sma-kim-02b-ikatan-kovalen-mudah-sedang.md`
- [ ] `osn-sma-kim-02b-ikatan-kovalen-sedang-sulit.md`

**KIM-02c · Polaritas Ikatan & Senyawa** (fokus Kab–Prov)
- [ ] `osn-sma-kim-02c-polaritas-campur.md`
- [ ] `osn-sma-kim-02c-polaritas-mudah.md`
- [ ] `osn-sma-kim-02c-polaritas-sedang.md`
- [ ] `osn-sma-kim-02c-polaritas-sulit.md`
- [ ] `osn-sma-kim-02c-polaritas-mudah-sedang.md`
- [ ] `osn-sma-kim-02c-polaritas-sedang-sulit.md`

**KIM-02d · Ikatan Logam** (fokus Kab)
- [ ] `osn-sma-kim-02d-ikatan-logam-campur.md`
- [ ] `osn-sma-kim-02d-ikatan-logam-mudah.md`
- [ ] `osn-sma-kim-02d-ikatan-logam-sedang.md`
- [ ] `osn-sma-kim-02d-ikatan-logam-sulit.md`
- [ ] `osn-sma-kim-02d-ikatan-logam-mudah-sedang.md`
- [ ] `osn-sma-kim-02d-ikatan-logam-sedang-sulit.md`

**KIM-02e · Gaya Antar Molekul (Van der Waals, Hidrogen)** (fokus Prov)
- [ ] `osn-sma-kim-02e-gaya-antar-molekul-campur.md`
- [ ] `osn-sma-kim-02e-gaya-antar-molekul-mudah.md`
- [ ] `osn-sma-kim-02e-gaya-antar-molekul-sedang.md`
- [ ] `osn-sma-kim-02e-gaya-antar-molekul-sulit.md`
- [ ] `osn-sma-kim-02e-gaya-antar-molekul-mudah-sedang.md`
- [ ] `osn-sma-kim-02e-gaya-antar-molekul-sedang-sulit.md`

**KIM-02f · Teori VSEPR & Bentuk Molekul** (fokus Prov)
- [ ] `osn-sma-kim-02f-vsepr-bentuk-molekul-campur.md`
- [ ] `osn-sma-kim-02f-vsepr-bentuk-molekul-mudah.md`
- [ ] `osn-sma-kim-02f-vsepr-bentuk-molekul-sedang.md`
- [ ] `osn-sma-kim-02f-vsepr-bentuk-molekul-sulit.md`
- [ ] `osn-sma-kim-02f-vsepr-bentuk-molekul-mudah-sedang.md`
- [ ] `osn-sma-kim-02f-vsepr-bentuk-molekul-sedang-sulit.md`

**KIM-02g · Hibridisasi Orbital** (fokus Prov)
- [ ] `osn-sma-kim-02g-hibridisasi-campur.md`
- [ ] `osn-sma-kim-02g-hibridisasi-mudah.md`
- [ ] `osn-sma-kim-02g-hibridisasi-sedang.md`
- [ ] `osn-sma-kim-02g-hibridisasi-sulit.md`
- [ ] `osn-sma-kim-02g-hibridisasi-mudah-sedang.md`
- [ ] `osn-sma-kim-02g-hibridisasi-sedang-sulit.md`

**KIM-02h · Teori Orbital Molekul (Pengantar)** (fokus Nas)
- [ ] `osn-sma-kim-02h-orbital-molekul-campur.md`
- [ ] `osn-sma-kim-02h-orbital-molekul-mudah.md`
- [ ] `osn-sma-kim-02h-orbital-molekul-sedang.md`
- [ ] `osn-sma-kim-02h-orbital-molekul-sulit.md`
- [ ] `osn-sma-kim-02h-orbital-molekul-mudah-sedang.md`
- [ ] `osn-sma-kim-02h-orbital-molekul-sedang-sulit.md`

**KIM-02i · Senyawa Kompleks (Pengantar)** (fokus Prov–Nas)
- [ ] `osn-sma-kim-02i-senyawa-kompleks-campur.md`
- [ ] `osn-sma-kim-02i-senyawa-kompleks-mudah.md`
- [ ] `osn-sma-kim-02i-senyawa-kompleks-sedang.md`
- [ ] `osn-sma-kim-02i-senyawa-kompleks-sulit.md`
- [ ] `osn-sma-kim-02i-senyawa-kompleks-mudah-sedang.md`
- [ ] `osn-sma-kim-02i-senyawa-kompleks-sedang-sulit.md`

### KIM-03 · Stoikiometri (9 sub-bab)

**KIM-03a · Hukum-hukum Dasar Kimia** (fokus Kab)
- [ ] `osn-sma-kim-03a-hukum-dasar-kimia-campur.md`
- [ ] `osn-sma-kim-03a-hukum-dasar-kimia-mudah.md`
- [ ] `osn-sma-kim-03a-hukum-dasar-kimia-sedang.md`
- [ ] `osn-sma-kim-03a-hukum-dasar-kimia-sulit.md`
- [ ] `osn-sma-kim-03a-hukum-dasar-kimia-mudah-sedang.md`
- [ ] `osn-sma-kim-03a-hukum-dasar-kimia-sedang-sulit.md`

**KIM-03b · Massa Atom Relatif (Ar) & Massa Molekul Relatif (Mr)** (fokus Kab)
- [ ] `osn-sma-kim-03b-ar-mr-campur.md`
- [ ] `osn-sma-kim-03b-ar-mr-mudah.md`
- [ ] `osn-sma-kim-03b-ar-mr-sedang.md`
- [ ] `osn-sma-kim-03b-ar-mr-sulit.md`
- [ ] `osn-sma-kim-03b-ar-mr-mudah-sedang.md`
- [ ] `osn-sma-kim-03b-ar-mr-sedang-sulit.md`

**KIM-03c · Konsep Mol & Bilangan Avogadro** (fokus Kab–Prov)
- [ ] `osn-sma-kim-03c-mol-avogadro-campur.md`
- [ ] `osn-sma-kim-03c-mol-avogadro-mudah.md`
- [ ] `osn-sma-kim-03c-mol-avogadro-sedang.md`
- [ ] `osn-sma-kim-03c-mol-avogadro-sulit.md`
- [ ] `osn-sma-kim-03c-mol-avogadro-mudah-sedang.md`
- [ ] `osn-sma-kim-03c-mol-avogadro-sedang-sulit.md`

**KIM-03d · Persamaan Reaksi & Penyetaraan** (fokus Kab)
- [ ] `osn-sma-kim-03d-penyetaraan-campur.md`
- [ ] `osn-sma-kim-03d-penyetaraan-mudah.md`
- [ ] `osn-sma-kim-03d-penyetaraan-sedang.md`
- [ ] `osn-sma-kim-03d-penyetaraan-sulit.md`
- [ ] `osn-sma-kim-03d-penyetaraan-mudah-sedang.md`
- [ ] `osn-sma-kim-03d-penyetaraan-sedang-sulit.md`

**KIM-03e · Hubungan Mol-Massa-Volume** (fokus Kab–Prov)
- [ ] `osn-sma-kim-03e-mol-massa-volume-campur.md`
- [ ] `osn-sma-kim-03e-mol-massa-volume-mudah.md`
- [ ] `osn-sma-kim-03e-mol-massa-volume-sedang.md`
- [ ] `osn-sma-kim-03e-mol-massa-volume-sulit.md`
- [ ] `osn-sma-kim-03e-mol-massa-volume-mudah-sedang.md`
- [ ] `osn-sma-kim-03e-mol-massa-volume-sedang-sulit.md`

**KIM-03f · Pereaksi Pembatas & Berlebih** (fokus Prov)
- [ ] `osn-sma-kim-03f-pereaksi-pembatas-campur.md`
- [ ] `osn-sma-kim-03f-pereaksi-pembatas-mudah.md`
- [ ] `osn-sma-kim-03f-pereaksi-pembatas-sedang.md`
- [ ] `osn-sma-kim-03f-pereaksi-pembatas-sulit.md`
- [ ] `osn-sma-kim-03f-pereaksi-pembatas-mudah-sedang.md`
- [ ] `osn-sma-kim-03f-pereaksi-pembatas-sedang-sulit.md`

**KIM-03g · Persentase Hasil Reaksi (Yield)** (fokus Prov)
- [ ] `osn-sma-kim-03g-persentase-yield-campur.md`
- [ ] `osn-sma-kim-03g-persentase-yield-mudah.md`
- [ ] `osn-sma-kim-03g-persentase-yield-sedang.md`
- [ ] `osn-sma-kim-03g-persentase-yield-sulit.md`
- [ ] `osn-sma-kim-03g-persentase-yield-mudah-sedang.md`
- [ ] `osn-sma-kim-03g-persentase-yield-sedang-sulit.md`

**KIM-03h · Rumus Empiris & Rumus Molekul** (fokus Prov)
- [ ] `osn-sma-kim-03h-rumus-empiris-molekul-campur.md`
- [ ] `osn-sma-kim-03h-rumus-empiris-molekul-mudah.md`
- [ ] `osn-sma-kim-03h-rumus-empiris-molekul-sedang.md`
- [ ] `osn-sma-kim-03h-rumus-empiris-molekul-sulit.md`
- [ ] `osn-sma-kim-03h-rumus-empiris-molekul-mudah-sedang.md`
- [ ] `osn-sma-kim-03h-rumus-empiris-molekul-sedang-sulit.md`

**KIM-03i · Soal Cerita Stoikiometri** (fokus Prov–Nas)
- [ ] `osn-sma-kim-03i-cerita-stoikiometri-campur.md`
- [ ] `osn-sma-kim-03i-cerita-stoikiometri-mudah.md`
- [ ] `osn-sma-kim-03i-cerita-stoikiometri-sedang.md`
- [ ] `osn-sma-kim-03i-cerita-stoikiometri-sulit.md`
- [ ] `osn-sma-kim-03i-cerita-stoikiometri-mudah-sedang.md`
- [ ] `osn-sma-kim-03i-cerita-stoikiometri-sedang-sulit.md`

### KIM-04 · Larutan, Koloid & Sifat Koligatif (8 sub-bab)

**KIM-04a · Konsentrasi Larutan (Molaritas, Molalitas, Fraksi Mol)** (fokus Kab–Prov)
- [ ] `osn-sma-kim-04a-konsentrasi-campur.md`
- [ ] `osn-sma-kim-04a-konsentrasi-mudah.md`
- [ ] `osn-sma-kim-04a-konsentrasi-sedang.md`
- [ ] `osn-sma-kim-04a-konsentrasi-sulit.md`
- [ ] `osn-sma-kim-04a-konsentrasi-mudah-sedang.md`
- [ ] `osn-sma-kim-04a-konsentrasi-sedang-sulit.md`

**KIM-04b · Larutan Elektrolit & Non-elektrolit** (fokus Kab)
- [ ] `osn-sma-kim-04b-elektrolit-nonelektrolit-campur.md`
- [ ] `osn-sma-kim-04b-elektrolit-nonelektrolit-mudah.md`
- [ ] `osn-sma-kim-04b-elektrolit-nonelektrolit-sedang.md`
- [ ] `osn-sma-kim-04b-elektrolit-nonelektrolit-sulit.md`
- [ ] `osn-sma-kim-04b-elektrolit-nonelektrolit-mudah-sedang.md`
- [ ] `osn-sma-kim-04b-elektrolit-nonelektrolit-sedang-sulit.md`

**KIM-04c · Koloid (Jenis, Sifat, Pembuatan)** (fokus Kab)
- [ ] `osn-sma-kim-04c-koloid-campur.md`
- [ ] `osn-sma-kim-04c-koloid-mudah.md`
- [ ] `osn-sma-kim-04c-koloid-sedang.md`
- [ ] `osn-sma-kim-04c-koloid-sulit.md`
- [ ] `osn-sma-kim-04c-koloid-mudah-sedang.md`
- [ ] `osn-sma-kim-04c-koloid-sedang-sulit.md`

**KIM-04d · Sifat Koligatif - Penurunan Tekanan Uap** (fokus Prov)
- [ ] `osn-sma-kim-04d-penurunan-tekanan-uap-campur.md`
- [ ] `osn-sma-kim-04d-penurunan-tekanan-uap-mudah.md`
- [ ] `osn-sma-kim-04d-penurunan-tekanan-uap-sedang.md`
- [ ] `osn-sma-kim-04d-penurunan-tekanan-uap-sulit.md`
- [ ] `osn-sma-kim-04d-penurunan-tekanan-uap-mudah-sedang.md`
- [ ] `osn-sma-kim-04d-penurunan-tekanan-uap-sedang-sulit.md`

**KIM-04e · Sifat Koligatif - Kenaikan Titik Didih** (fokus Prov)
- [ ] `osn-sma-kim-04e-kenaikan-titik-didih-campur.md`
- [ ] `osn-sma-kim-04e-kenaikan-titik-didih-mudah.md`
- [ ] `osn-sma-kim-04e-kenaikan-titik-didih-sedang.md`
- [ ] `osn-sma-kim-04e-kenaikan-titik-didih-sulit.md`
- [ ] `osn-sma-kim-04e-kenaikan-titik-didih-mudah-sedang.md`
- [ ] `osn-sma-kim-04e-kenaikan-titik-didih-sedang-sulit.md`

**KIM-04f · Sifat Koligatif - Penurunan Titik Beku** (fokus Prov)
- [ ] `osn-sma-kim-04f-penurunan-titik-beku-campur.md`
- [ ] `osn-sma-kim-04f-penurunan-titik-beku-mudah.md`
- [ ] `osn-sma-kim-04f-penurunan-titik-beku-sedang.md`
- [ ] `osn-sma-kim-04f-penurunan-titik-beku-sulit.md`
- [ ] `osn-sma-kim-04f-penurunan-titik-beku-mudah-sedang.md`
- [ ] `osn-sma-kim-04f-penurunan-titik-beku-sedang-sulit.md`

**KIM-04g · Sifat Koligatif - Tekanan Osmotik** (fokus Prov–Nas)
- [ ] `osn-sma-kim-04g-tekanan-osmotik-campur.md`
- [ ] `osn-sma-kim-04g-tekanan-osmotik-mudah.md`
- [ ] `osn-sma-kim-04g-tekanan-osmotik-sedang.md`
- [ ] `osn-sma-kim-04g-tekanan-osmotik-sulit.md`
- [ ] `osn-sma-kim-04g-tekanan-osmotik-mudah-sedang.md`
- [ ] `osn-sma-kim-04g-tekanan-osmotik-sedang-sulit.md`

**KIM-04h · Faktor van't Hoff (Larutan Elektrolit)** (fokus Prov)
- [ ] `osn-sma-kim-04h-vanthoff-campur.md`
- [ ] `osn-sma-kim-04h-vanthoff-mudah.md`
- [ ] `osn-sma-kim-04h-vanthoff-sedang.md`
- [ ] `osn-sma-kim-04h-vanthoff-sulit.md`
- [ ] `osn-sma-kim-04h-vanthoff-mudah-sedang.md`
- [ ] `osn-sma-kim-04h-vanthoff-sedang-sulit.md`

### KIM-05 · Termokimia (8 sub-bab)

**KIM-05a · Sistem & Lingkungan, Reaksi Eksoterm-Endoterm** (fokus Kab)
- [ ] `osn-sma-kim-05a-sistem-eksoterm-endoterm-campur.md`
- [ ] `osn-sma-kim-05a-sistem-eksoterm-endoterm-mudah.md`
- [ ] `osn-sma-kim-05a-sistem-eksoterm-endoterm-sedang.md`
- [ ] `osn-sma-kim-05a-sistem-eksoterm-endoterm-sulit.md`
- [ ] `osn-sma-kim-05a-sistem-eksoterm-endoterm-mudah-sedang.md`
- [ ] `osn-sma-kim-05a-sistem-eksoterm-endoterm-sedang-sulit.md`

**KIM-05b · Persamaan Termokimia** (fokus Kab–Prov)
- [ ] `osn-sma-kim-05b-persamaan-termokimia-campur.md`
- [ ] `osn-sma-kim-05b-persamaan-termokimia-mudah.md`
- [ ] `osn-sma-kim-05b-persamaan-termokimia-sedang.md`
- [ ] `osn-sma-kim-05b-persamaan-termokimia-sulit.md`
- [ ] `osn-sma-kim-05b-persamaan-termokimia-mudah-sedang.md`
- [ ] `osn-sma-kim-05b-persamaan-termokimia-sedang-sulit.md`

**KIM-05c · Entalpi Pembentukan, Pembakaran, Penguraian** (fokus Kab–Prov)
- [ ] `osn-sma-kim-05c-entalpi-pembentukan-campur.md`
- [ ] `osn-sma-kim-05c-entalpi-pembentukan-mudah.md`
- [ ] `osn-sma-kim-05c-entalpi-pembentukan-sedang.md`
- [ ] `osn-sma-kim-05c-entalpi-pembentukan-sulit.md`
- [ ] `osn-sma-kim-05c-entalpi-pembentukan-mudah-sedang.md`
- [ ] `osn-sma-kim-05c-entalpi-pembentukan-sedang-sulit.md`

**KIM-05d · Kalorimetri** (fokus Prov)
- [ ] `osn-sma-kim-05d-kalorimetri-campur.md`
- [ ] `osn-sma-kim-05d-kalorimetri-mudah.md`
- [ ] `osn-sma-kim-05d-kalorimetri-sedang.md`
- [ ] `osn-sma-kim-05d-kalorimetri-sulit.md`
- [ ] `osn-sma-kim-05d-kalorimetri-mudah-sedang.md`
- [ ] `osn-sma-kim-05d-kalorimetri-sedang-sulit.md`

**KIM-05e · Hukum Hess** (fokus Prov)
- [ ] `osn-sma-kim-05e-hukum-hess-campur.md`
- [ ] `osn-sma-kim-05e-hukum-hess-mudah.md`
- [ ] `osn-sma-kim-05e-hukum-hess-sedang.md`
- [ ] `osn-sma-kim-05e-hukum-hess-sulit.md`
- [ ] `osn-sma-kim-05e-hukum-hess-mudah-sedang.md`
- [ ] `osn-sma-kim-05e-hukum-hess-sedang-sulit.md`

**KIM-05f · Energi Ikatan** (fokus Prov)
- [ ] `osn-sma-kim-05f-energi-ikatan-campur.md`
- [ ] `osn-sma-kim-05f-energi-ikatan-mudah.md`
- [ ] `osn-sma-kim-05f-energi-ikatan-sedang.md`
- [ ] `osn-sma-kim-05f-energi-ikatan-sulit.md`
- [ ] `osn-sma-kim-05f-energi-ikatan-mudah-sedang.md`
- [ ] `osn-sma-kim-05f-energi-ikatan-sedang-sulit.md`

**KIM-05g · Entropi & Energi Bebas Gibbs (Pengantar)** (fokus Prov–Nas)
- [ ] `osn-sma-kim-05g-entropi-gibbs-campur.md`
- [ ] `osn-sma-kim-05g-entropi-gibbs-mudah.md`
- [ ] `osn-sma-kim-05g-entropi-gibbs-sedang.md`
- [ ] `osn-sma-kim-05g-entropi-gibbs-sulit.md`
- [ ] `osn-sma-kim-05g-entropi-gibbs-mudah-sedang.md`
- [ ] `osn-sma-kim-05g-entropi-gibbs-sedang-sulit.md`

**KIM-05h · Soal Cerita Termokimia** (fokus Prov)
- [ ] `osn-sma-kim-05h-cerita-termokimia-campur.md`
- [ ] `osn-sma-kim-05h-cerita-termokimia-mudah.md`
- [ ] `osn-sma-kim-05h-cerita-termokimia-sedang.md`
- [ ] `osn-sma-kim-05h-cerita-termokimia-sulit.md`
- [ ] `osn-sma-kim-05h-cerita-termokimia-mudah-sedang.md`
- [ ] `osn-sma-kim-05h-cerita-termokimia-sedang-sulit.md`

### KIM-06 · Kinetika Kimia (8 sub-bab)

**KIM-06a · Laju Reaksi & Pengukurannya** (fokus Kab–Prov)
- [ ] `osn-sma-kim-06a-laju-reaksi-campur.md`
- [ ] `osn-sma-kim-06a-laju-reaksi-mudah.md`
- [ ] `osn-sma-kim-06a-laju-reaksi-sedang.md`
- [ ] `osn-sma-kim-06a-laju-reaksi-sulit.md`
- [ ] `osn-sma-kim-06a-laju-reaksi-mudah-sedang.md`
- [ ] `osn-sma-kim-06a-laju-reaksi-sedang-sulit.md`

**KIM-06b · Faktor Laju Reaksi (Konsentrasi, Suhu, Katalis, Luas Permukaan)** (fokus Kab–Prov)
- [ ] `osn-sma-kim-06b-faktor-laju-campur.md`
- [ ] `osn-sma-kim-06b-faktor-laju-mudah.md`
- [ ] `osn-sma-kim-06b-faktor-laju-sedang.md`
- [ ] `osn-sma-kim-06b-faktor-laju-sulit.md`
- [ ] `osn-sma-kim-06b-faktor-laju-mudah-sedang.md`
- [ ] `osn-sma-kim-06b-faktor-laju-sedang-sulit.md`

**KIM-06c · Hukum Laju & Orde Reaksi** (fokus Prov)
- [ ] `osn-sma-kim-06c-hukum-laju-orde-campur.md`
- [ ] `osn-sma-kim-06c-hukum-laju-orde-mudah.md`
- [ ] `osn-sma-kim-06c-hukum-laju-orde-sedang.md`
- [ ] `osn-sma-kim-06c-hukum-laju-orde-sulit.md`
- [ ] `osn-sma-kim-06c-hukum-laju-orde-mudah-sedang.md`
- [ ] `osn-sma-kim-06c-hukum-laju-orde-sedang-sulit.md`

**KIM-06d · Penentuan Orde Reaksi Eksperimental** (fokus Prov)
- [ ] `osn-sma-kim-06d-orde-eksperimental-campur.md`
- [ ] `osn-sma-kim-06d-orde-eksperimental-mudah.md`
- [ ] `osn-sma-kim-06d-orde-eksperimental-sedang.md`
- [ ] `osn-sma-kim-06d-orde-eksperimental-sulit.md`
- [ ] `osn-sma-kim-06d-orde-eksperimental-mudah-sedang.md`
- [ ] `osn-sma-kim-06d-orde-eksperimental-sedang-sulit.md`

**KIM-06e · Persamaan Arrhenius** (fokus Prov–Nas)
- [ ] `osn-sma-kim-06e-arrhenius-campur.md`
- [ ] `osn-sma-kim-06e-arrhenius-mudah.md`
- [ ] `osn-sma-kim-06e-arrhenius-sedang.md`
- [ ] `osn-sma-kim-06e-arrhenius-sulit.md`
- [ ] `osn-sma-kim-06e-arrhenius-mudah-sedang.md`
- [ ] `osn-sma-kim-06e-arrhenius-sedang-sulit.md`

**KIM-06f · Mekanisme Reaksi & Reaksi Elementer** (fokus Nas)
- [ ] `osn-sma-kim-06f-mekanisme-reaksi-campur.md`
- [ ] `osn-sma-kim-06f-mekanisme-reaksi-mudah.md`
- [ ] `osn-sma-kim-06f-mekanisme-reaksi-sedang.md`
- [ ] `osn-sma-kim-06f-mekanisme-reaksi-sulit.md`
- [ ] `osn-sma-kim-06f-mekanisme-reaksi-mudah-sedang.md`
- [ ] `osn-sma-kim-06f-mekanisme-reaksi-sedang-sulit.md`

**KIM-06g · Katalisis (Homogen, Heterogen, Enzim)** (fokus Prov)
- [ ] `osn-sma-kim-06g-katalisis-campur.md`
- [ ] `osn-sma-kim-06g-katalisis-mudah.md`
- [ ] `osn-sma-kim-06g-katalisis-sedang.md`
- [ ] `osn-sma-kim-06g-katalisis-sulit.md`
- [ ] `osn-sma-kim-06g-katalisis-mudah-sedang.md`
- [ ] `osn-sma-kim-06g-katalisis-sedang-sulit.md`

**KIM-06h · Soal Cerita Kinetika** (fokus Prov)
- [ ] `osn-sma-kim-06h-cerita-kinetika-campur.md`
- [ ] `osn-sma-kim-06h-cerita-kinetika-mudah.md`
- [ ] `osn-sma-kim-06h-cerita-kinetika-sedang.md`
- [ ] `osn-sma-kim-06h-cerita-kinetika-sulit.md`
- [ ] `osn-sma-kim-06h-cerita-kinetika-mudah-sedang.md`
- [ ] `osn-sma-kim-06h-cerita-kinetika-sedang-sulit.md`

### KIM-07 · Kesetimbangan Kimia (8 sub-bab)

**KIM-07a · Konsep Kesetimbangan Dinamis** (fokus Kab–Prov)
- [ ] `osn-sma-kim-07a-kesetimbangan-dinamis-campur.md`
- [ ] `osn-sma-kim-07a-kesetimbangan-dinamis-mudah.md`
- [ ] `osn-sma-kim-07a-kesetimbangan-dinamis-sedang.md`
- [ ] `osn-sma-kim-07a-kesetimbangan-dinamis-sulit.md`
- [ ] `osn-sma-kim-07a-kesetimbangan-dinamis-mudah-sedang.md`
- [ ] `osn-sma-kim-07a-kesetimbangan-dinamis-sedang-sulit.md`

**KIM-07b · Tetapan Kesetimbangan Kc** (fokus Prov)
- [ ] `osn-sma-kim-07b-tetapan-kc-campur.md`
- [ ] `osn-sma-kim-07b-tetapan-kc-mudah.md`
- [ ] `osn-sma-kim-07b-tetapan-kc-sedang.md`
- [ ] `osn-sma-kim-07b-tetapan-kc-sulit.md`
- [ ] `osn-sma-kim-07b-tetapan-kc-mudah-sedang.md`
- [ ] `osn-sma-kim-07b-tetapan-kc-sedang-sulit.md`

**KIM-07c · Tetapan Kesetimbangan Kp** (fokus Prov)
- [ ] `osn-sma-kim-07c-tetapan-kp-campur.md`
- [ ] `osn-sma-kim-07c-tetapan-kp-mudah.md`
- [ ] `osn-sma-kim-07c-tetapan-kp-sedang.md`
- [ ] `osn-sma-kim-07c-tetapan-kp-sulit.md`
- [ ] `osn-sma-kim-07c-tetapan-kp-mudah-sedang.md`
- [ ] `osn-sma-kim-07c-tetapan-kp-sedang-sulit.md`

**KIM-07d · Hubungan Kc dan Kp** (fokus Prov)
- [ ] `osn-sma-kim-07d-kc-kp-campur.md`
- [ ] `osn-sma-kim-07d-kc-kp-mudah.md`
- [ ] `osn-sma-kim-07d-kc-kp-sedang.md`
- [ ] `osn-sma-kim-07d-kc-kp-sulit.md`
- [ ] `osn-sma-kim-07d-kc-kp-mudah-sedang.md`
- [ ] `osn-sma-kim-07d-kc-kp-sedang-sulit.md`

**KIM-07e · Pergeseran Kesetimbangan (Hukum Le Chatelier)** (fokus Kab–Prov)
- [ ] `osn-sma-kim-07e-le-chatelier-campur.md`
- [ ] `osn-sma-kim-07e-le-chatelier-mudah.md`
- [ ] `osn-sma-kim-07e-le-chatelier-sedang.md`
- [ ] `osn-sma-kim-07e-le-chatelier-sulit.md`
- [ ] `osn-sma-kim-07e-le-chatelier-mudah-sedang.md`
- [ ] `osn-sma-kim-07e-le-chatelier-sedang-sulit.md`

**KIM-07f · Aplikasi Industri (Haber-Bosch, Kontak)** (fokus Kab–Prov)
- [ ] `osn-sma-kim-07f-haber-bosch-kontak-campur.md`
- [ ] `osn-sma-kim-07f-haber-bosch-kontak-mudah.md`
- [ ] `osn-sma-kim-07f-haber-bosch-kontak-sedang.md`
- [ ] `osn-sma-kim-07f-haber-bosch-kontak-sulit.md`
- [ ] `osn-sma-kim-07f-haber-bosch-kontak-mudah-sedang.md`
- [ ] `osn-sma-kim-07f-haber-bosch-kontak-sedang-sulit.md`

**KIM-07g · Kesetimbangan Larutan (Hasil Kali Kelarutan Ksp)** (fokus Prov–Nas)
- [ ] `osn-sma-kim-07g-ksp-campur.md`
- [ ] `osn-sma-kim-07g-ksp-mudah.md`
- [ ] `osn-sma-kim-07g-ksp-sedang.md`
- [ ] `osn-sma-kim-07g-ksp-sulit.md`
- [ ] `osn-sma-kim-07g-ksp-mudah-sedang.md`
- [ ] `osn-sma-kim-07g-ksp-sedang-sulit.md`

**KIM-07h · Soal Cerita Kesetimbangan** (fokus Prov)
- [ ] `osn-sma-kim-07h-cerita-kesetimbangan-campur.md`
- [ ] `osn-sma-kim-07h-cerita-kesetimbangan-mudah.md`
- [ ] `osn-sma-kim-07h-cerita-kesetimbangan-sedang.md`
- [ ] `osn-sma-kim-07h-cerita-kesetimbangan-sulit.md`
- [ ] `osn-sma-kim-07h-cerita-kesetimbangan-mudah-sedang.md`
- [ ] `osn-sma-kim-07h-cerita-kesetimbangan-sedang-sulit.md`

### KIM-08 · Asam-Basa, Buffer & Hidrolisis Garam (9 sub-bab)

**KIM-08a · Teori Asam-Basa (Arrhenius, Bronsted-Lowry, Lewis)** (fokus Kab–Prov)
- [ ] `osn-sma-kim-08a-teori-asam-basa-campur.md`
- [ ] `osn-sma-kim-08a-teori-asam-basa-mudah.md`
- [ ] `osn-sma-kim-08a-teori-asam-basa-sedang.md`
- [ ] `osn-sma-kim-08a-teori-asam-basa-sulit.md`
- [ ] `osn-sma-kim-08a-teori-asam-basa-mudah-sedang.md`
- [ ] `osn-sma-kim-08a-teori-asam-basa-sedang-sulit.md`

**KIM-08b · pH, pOH, & Tetapan Air Kw** (fokus Kab–Prov)
- [ ] `osn-sma-kim-08b-ph-poh-kw-campur.md`
- [ ] `osn-sma-kim-08b-ph-poh-kw-mudah.md`
- [ ] `osn-sma-kim-08b-ph-poh-kw-sedang.md`
- [ ] `osn-sma-kim-08b-ph-poh-kw-sulit.md`
- [ ] `osn-sma-kim-08b-ph-poh-kw-mudah-sedang.md`
- [ ] `osn-sma-kim-08b-ph-poh-kw-sedang-sulit.md`

**KIM-08c · Asam-Basa Kuat & Lemah (Ka, Kb)** (fokus Prov)
- [ ] `osn-sma-kim-08c-asam-basa-ka-kb-campur.md`
- [ ] `osn-sma-kim-08c-asam-basa-ka-kb-mudah.md`
- [ ] `osn-sma-kim-08c-asam-basa-ka-kb-sedang.md`
- [ ] `osn-sma-kim-08c-asam-basa-ka-kb-sulit.md`
- [ ] `osn-sma-kim-08c-asam-basa-ka-kb-mudah-sedang.md`
- [ ] `osn-sma-kim-08c-asam-basa-ka-kb-sedang-sulit.md`

**KIM-08d · Indikator & Trayek pH** (fokus Kab)
- [ ] `osn-sma-kim-08d-indikator-trayek-campur.md`
- [ ] `osn-sma-kim-08d-indikator-trayek-mudah.md`
- [ ] `osn-sma-kim-08d-indikator-trayek-sedang.md`
- [ ] `osn-sma-kim-08d-indikator-trayek-sulit.md`
- [ ] `osn-sma-kim-08d-indikator-trayek-mudah-sedang.md`
- [ ] `osn-sma-kim-08d-indikator-trayek-sedang-sulit.md`

**KIM-08e · Reaksi Penetralan & Stoikiometri Titrasi** (fokus Prov)
- [ ] `osn-sma-kim-08e-penetralan-titrasi-campur.md`
- [ ] `osn-sma-kim-08e-penetralan-titrasi-mudah.md`
- [ ] `osn-sma-kim-08e-penetralan-titrasi-sedang.md`
- [ ] `osn-sma-kim-08e-penetralan-titrasi-sulit.md`
- [ ] `osn-sma-kim-08e-penetralan-titrasi-mudah-sedang.md`
- [ ] `osn-sma-kim-08e-penetralan-titrasi-sedang-sulit.md`

**KIM-08f · Larutan Buffer (Sistem & pH)** (fokus Prov)
- [ ] `osn-sma-kim-08f-buffer-campur.md`
- [ ] `osn-sma-kim-08f-buffer-mudah.md`
- [ ] `osn-sma-kim-08f-buffer-sedang.md`
- [ ] `osn-sma-kim-08f-buffer-sulit.md`
- [ ] `osn-sma-kim-08f-buffer-mudah-sedang.md`
- [ ] `osn-sma-kim-08f-buffer-sedang-sulit.md`

**KIM-08g · Aplikasi Larutan Buffer (Biologis)** (fokus Prov)
- [ ] `osn-sma-kim-08g-aplikasi-buffer-campur.md`
- [ ] `osn-sma-kim-08g-aplikasi-buffer-mudah.md`
- [ ] `osn-sma-kim-08g-aplikasi-buffer-sedang.md`
- [ ] `osn-sma-kim-08g-aplikasi-buffer-sulit.md`
- [ ] `osn-sma-kim-08g-aplikasi-buffer-mudah-sedang.md`
- [ ] `osn-sma-kim-08g-aplikasi-buffer-sedang-sulit.md`

**KIM-08h · Hidrolisis Garam** (fokus Prov–Nas)
- [ ] `osn-sma-kim-08h-hidrolisis-garam-campur.md`
- [ ] `osn-sma-kim-08h-hidrolisis-garam-mudah.md`
- [ ] `osn-sma-kim-08h-hidrolisis-garam-sedang.md`
- [ ] `osn-sma-kim-08h-hidrolisis-garam-sulit.md`
- [ ] `osn-sma-kim-08h-hidrolisis-garam-mudah-sedang.md`
- [ ] `osn-sma-kim-08h-hidrolisis-garam-sedang-sulit.md`

**KIM-08i · Titrasi Asam-Basa & Kurva Titrasi** (fokus Prov–Nas)
- [ ] `osn-sma-kim-08i-kurva-titrasi-campur.md`
- [ ] `osn-sma-kim-08i-kurva-titrasi-mudah.md`
- [ ] `osn-sma-kim-08i-kurva-titrasi-sedang.md`
- [ ] `osn-sma-kim-08i-kurva-titrasi-sulit.md`
- [ ] `osn-sma-kim-08i-kurva-titrasi-mudah-sedang.md`
- [ ] `osn-sma-kim-08i-kurva-titrasi-sedang-sulit.md`

### KIM-09 · Elektrokimia & Sel Galvani (8 sub-bab)

**KIM-09a · Bilangan Oksidasi & Reaksi Redoks** (fokus Kab–Prov)
- [ ] `osn-sma-kim-09a-bilangan-oksidasi-campur.md`
- [ ] `osn-sma-kim-09a-bilangan-oksidasi-mudah.md`
- [ ] `osn-sma-kim-09a-bilangan-oksidasi-sedang.md`
- [ ] `osn-sma-kim-09a-bilangan-oksidasi-sulit.md`
- [ ] `osn-sma-kim-09a-bilangan-oksidasi-mudah-sedang.md`
- [ ] `osn-sma-kim-09a-bilangan-oksidasi-sedang-sulit.md`

**KIM-09b · Penyetaraan Reaksi Redoks (Metode Setengah-Reaksi)** (fokus Prov)
- [ ] `osn-sma-kim-09b-penyetaraan-redoks-campur.md`
- [ ] `osn-sma-kim-09b-penyetaraan-redoks-mudah.md`
- [ ] `osn-sma-kim-09b-penyetaraan-redoks-sedang.md`
- [ ] `osn-sma-kim-09b-penyetaraan-redoks-sulit.md`
- [ ] `osn-sma-kim-09b-penyetaraan-redoks-mudah-sedang.md`
- [ ] `osn-sma-kim-09b-penyetaraan-redoks-sedang-sulit.md`

**KIM-09c · Sel Volta/Galvani (Susunan & Notasi)** (fokus Prov)
- [ ] `osn-sma-kim-09c-sel-volta-campur.md`
- [ ] `osn-sma-kim-09c-sel-volta-mudah.md`
- [ ] `osn-sma-kim-09c-sel-volta-sedang.md`
- [ ] `osn-sma-kim-09c-sel-volta-sulit.md`
- [ ] `osn-sma-kim-09c-sel-volta-mudah-sedang.md`
- [ ] `osn-sma-kim-09c-sel-volta-sedang-sulit.md`

**KIM-09d · Potensial Reduksi Standar & Potensial Sel** (fokus Prov)
- [ ] `osn-sma-kim-09d-potensial-reduksi-campur.md`
- [ ] `osn-sma-kim-09d-potensial-reduksi-mudah.md`
- [ ] `osn-sma-kim-09d-potensial-reduksi-sedang.md`
- [ ] `osn-sma-kim-09d-potensial-reduksi-sulit.md`
- [ ] `osn-sma-kim-09d-potensial-reduksi-mudah-sedang.md`
- [ ] `osn-sma-kim-09d-potensial-reduksi-sedang-sulit.md`

**KIM-09e · Hubungan ΔG, Esel, & K** (fokus Nas)
- [ ] `osn-sma-kim-09e-delta-g-esel-k-campur.md`
- [ ] `osn-sma-kim-09e-delta-g-esel-k-mudah.md`
- [ ] `osn-sma-kim-09e-delta-g-esel-k-sedang.md`
- [ ] `osn-sma-kim-09e-delta-g-esel-k-sulit.md`
- [ ] `osn-sma-kim-09e-delta-g-esel-k-mudah-sedang.md`
- [ ] `osn-sma-kim-09e-delta-g-esel-k-sedang-sulit.md`

**KIM-09f · Sel Elektrolisis & Hukum Faraday** (fokus Prov)
- [ ] `osn-sma-kim-09f-elektrolisis-faraday-campur.md`
- [ ] `osn-sma-kim-09f-elektrolisis-faraday-mudah.md`
- [ ] `osn-sma-kim-09f-elektrolisis-faraday-sedang.md`
- [ ] `osn-sma-kim-09f-elektrolisis-faraday-sulit.md`
- [ ] `osn-sma-kim-09f-elektrolisis-faraday-mudah-sedang.md`
- [ ] `osn-sma-kim-09f-elektrolisis-faraday-sedang-sulit.md`

**KIM-09g · Korosi & Pencegahannya** (fokus Kab)
- [ ] `osn-sma-kim-09g-korosi-campur.md`
- [ ] `osn-sma-kim-09g-korosi-mudah.md`
- [ ] `osn-sma-kim-09g-korosi-sedang.md`
- [ ] `osn-sma-kim-09g-korosi-sulit.md`
- [ ] `osn-sma-kim-09g-korosi-mudah-sedang.md`
- [ ] `osn-sma-kim-09g-korosi-sedang-sulit.md`

**KIM-09h · Aplikasi Industri (Baterai, Sel Bahan Bakar, Penyepuhan)** (fokus Kab–Prov)
- [ ] `osn-sma-kim-09h-aplikasi-elektrokimia-campur.md`
- [ ] `osn-sma-kim-09h-aplikasi-elektrokimia-mudah.md`
- [ ] `osn-sma-kim-09h-aplikasi-elektrokimia-sedang.md`
- [ ] `osn-sma-kim-09h-aplikasi-elektrokimia-sulit.md`
- [ ] `osn-sma-kim-09h-aplikasi-elektrokimia-mudah-sedang.md`
- [ ] `osn-sma-kim-09h-aplikasi-elektrokimia-sedang-sulit.md`

### KIM-10 · Kimia Organik & Polimer (10 sub-bab)

**KIM-10a · Hidrokarbon (Alkana, Alkena, Alkuna)** (fokus Kab–Prov)
- [ ] `osn-sma-kim-10a-hidrokarbon-campur.md`
- [ ] `osn-sma-kim-10a-hidrokarbon-mudah.md`
- [ ] `osn-sma-kim-10a-hidrokarbon-sedang.md`
- [ ] `osn-sma-kim-10a-hidrokarbon-sulit.md`
- [ ] `osn-sma-kim-10a-hidrokarbon-mudah-sedang.md`
- [ ] `osn-sma-kim-10a-hidrokarbon-sedang-sulit.md`

**KIM-10b · Tata Nama Senyawa Organik (IUPAC)** (fokus Kab–Prov)
- [ ] `osn-sma-kim-10b-tata-nama-iupac-campur.md`
- [ ] `osn-sma-kim-10b-tata-nama-iupac-mudah.md`
- [ ] `osn-sma-kim-10b-tata-nama-iupac-sedang.md`
- [ ] `osn-sma-kim-10b-tata-nama-iupac-sulit.md`
- [ ] `osn-sma-kim-10b-tata-nama-iupac-mudah-sedang.md`
- [ ] `osn-sma-kim-10b-tata-nama-iupac-sedang-sulit.md`

**KIM-10c · Isomer (Struktur, Geometris, Optis)** (fokus Prov)
- [ ] `osn-sma-kim-10c-isomer-campur.md`
- [ ] `osn-sma-kim-10c-isomer-mudah.md`
- [ ] `osn-sma-kim-10c-isomer-sedang.md`
- [ ] `osn-sma-kim-10c-isomer-sulit.md`
- [ ] `osn-sma-kim-10c-isomer-mudah-sedang.md`
- [ ] `osn-sma-kim-10c-isomer-sedang-sulit.md`

**KIM-10d · Reaksi Senyawa Karbon (Substitusi, Adisi, Eliminasi)** (fokus Prov)
- [ ] `osn-sma-kim-10d-reaksi-senyawa-karbon-campur.md`
- [ ] `osn-sma-kim-10d-reaksi-senyawa-karbon-mudah.md`
- [ ] `osn-sma-kim-10d-reaksi-senyawa-karbon-sedang.md`
- [ ] `osn-sma-kim-10d-reaksi-senyawa-karbon-sulit.md`
- [ ] `osn-sma-kim-10d-reaksi-senyawa-karbon-mudah-sedang.md`
- [ ] `osn-sma-kim-10d-reaksi-senyawa-karbon-sedang-sulit.md`

**KIM-10e · Gugus Fungsi Senyawa Karbon** (fokus Kab–Prov)
- [ ] `osn-sma-kim-10e-gugus-fungsi-campur.md`
- [ ] `osn-sma-kim-10e-gugus-fungsi-mudah.md`
- [ ] `osn-sma-kim-10e-gugus-fungsi-sedang.md`
- [ ] `osn-sma-kim-10e-gugus-fungsi-sulit.md`
- [ ] `osn-sma-kim-10e-gugus-fungsi-mudah-sedang.md`
- [ ] `osn-sma-kim-10e-gugus-fungsi-sedang-sulit.md`

**KIM-10f · Alkohol, Eter, Aldehida, Keton** (fokus Prov)
- [ ] `osn-sma-kim-10f-alkohol-eter-aldehida-keton-campur.md`
- [ ] `osn-sma-kim-10f-alkohol-eter-aldehida-keton-mudah.md`
- [ ] `osn-sma-kim-10f-alkohol-eter-aldehida-keton-sedang.md`
- [ ] `osn-sma-kim-10f-alkohol-eter-aldehida-keton-sulit.md`
- [ ] `osn-sma-kim-10f-alkohol-eter-aldehida-keton-mudah-sedang.md`
- [ ] `osn-sma-kim-10f-alkohol-eter-aldehida-keton-sedang-sulit.md`

**KIM-10g · Asam Karboksilat & Ester** (fokus Prov)
- [ ] `osn-sma-kim-10g-asam-karboksilat-ester-campur.md`
- [ ] `osn-sma-kim-10g-asam-karboksilat-ester-mudah.md`
- [ ] `osn-sma-kim-10g-asam-karboksilat-ester-sedang.md`
- [ ] `osn-sma-kim-10g-asam-karboksilat-ester-sulit.md`
- [ ] `osn-sma-kim-10g-asam-karboksilat-ester-mudah-sedang.md`
- [ ] `osn-sma-kim-10g-asam-karboksilat-ester-sedang-sulit.md`

**KIM-10h · Senyawa Aromatik (Benzena)** (fokus Prov–Nas)
- [ ] `osn-sma-kim-10h-benzena-campur.md`
- [ ] `osn-sma-kim-10h-benzena-mudah.md`
- [ ] `osn-sma-kim-10h-benzena-sedang.md`
- [ ] `osn-sma-kim-10h-benzena-sulit.md`
- [ ] `osn-sma-kim-10h-benzena-mudah-sedang.md`
- [ ] `osn-sma-kim-10h-benzena-sedang-sulit.md`

**KIM-10i · Polimer (Adisi, Kondensasi, Alami, Sintetik)** (fokus Kab–Prov)
- [ ] `osn-sma-kim-10i-polimer-campur.md`
- [ ] `osn-sma-kim-10i-polimer-mudah.md`
- [ ] `osn-sma-kim-10i-polimer-sedang.md`
- [ ] `osn-sma-kim-10i-polimer-sulit.md`
- [ ] `osn-sma-kim-10i-polimer-mudah-sedang.md`
- [ ] `osn-sma-kim-10i-polimer-sedang-sulit.md`

**KIM-10j · Karbohidrat, Protein, Lemak (Biokimia Pengantar)** (fokus Prov)
- [ ] `osn-sma-kim-10j-biokimia-pengantar-campur.md`
- [ ] `osn-sma-kim-10j-biokimia-pengantar-mudah.md`
- [ ] `osn-sma-kim-10j-biokimia-pengantar-sedang.md`
- [ ] `osn-sma-kim-10j-biokimia-pengantar-sulit.md`
- [ ] `osn-sma-kim-10j-biokimia-pengantar-mudah-sedang.md`
- [ ] `osn-sma-kim-10j-biokimia-pengantar-sedang-sulit.md`

---

## D · Biologi Per Sub-Bab (75 sub-bab × 6 = 450 file)

### BIO-01 · Sel & Bioenergetika (10 sub-bab)

**BIO-01a · Struktur & Fungsi Sel (Organel)** (fokus Kab–Prov)
- [ ] `osn-sma-bio-01a-organel-sel-campur.md`
- [ ] `osn-sma-bio-01a-organel-sel-mudah.md`
- [ ] `osn-sma-bio-01a-organel-sel-sedang.md`
- [ ] `osn-sma-bio-01a-organel-sel-sulit.md`
- [ ] `osn-sma-bio-01a-organel-sel-mudah-sedang.md`
- [ ] `osn-sma-bio-01a-organel-sel-sedang-sulit.md`

**BIO-01b · Sel Prokariot vs Eukariot** (fokus Kab)
- [ ] `osn-sma-bio-01b-prokariot-eukariot-campur.md`
- [ ] `osn-sma-bio-01b-prokariot-eukariot-mudah.md`
- [ ] `osn-sma-bio-01b-prokariot-eukariot-sedang.md`
- [ ] `osn-sma-bio-01b-prokariot-eukariot-sulit.md`
- [ ] `osn-sma-bio-01b-prokariot-eukariot-mudah-sedang.md`
- [ ] `osn-sma-bio-01b-prokariot-eukariot-sedang-sulit.md`

**BIO-01c · Transpor Membran (Difusi, Osmosis, Aktif)** (fokus Prov)
- [ ] `osn-sma-bio-01c-transpor-membran-campur.md`
- [ ] `osn-sma-bio-01c-transpor-membran-mudah.md`
- [ ] `osn-sma-bio-01c-transpor-membran-sedang.md`
- [ ] `osn-sma-bio-01c-transpor-membran-sulit.md`
- [ ] `osn-sma-bio-01c-transpor-membran-mudah-sedang.md`
- [ ] `osn-sma-bio-01c-transpor-membran-sedang-sulit.md`

**BIO-01d · Siklus Sel & Mitosis-Meiosis** (fokus Prov)
- [ ] `osn-sma-bio-01d-mitosis-meiosis-campur.md`
- [ ] `osn-sma-bio-01d-mitosis-meiosis-mudah.md`
- [ ] `osn-sma-bio-01d-mitosis-meiosis-sedang.md`
- [ ] `osn-sma-bio-01d-mitosis-meiosis-sulit.md`
- [ ] `osn-sma-bio-01d-mitosis-meiosis-mudah-sedang.md`
- [ ] `osn-sma-bio-01d-mitosis-meiosis-sedang-sulit.md`

**BIO-01e · Respirasi Sel - Glikolisis** (fokus Prov)
- [ ] `osn-sma-bio-01e-glikolisis-campur.md`
- [ ] `osn-sma-bio-01e-glikolisis-mudah.md`
- [ ] `osn-sma-bio-01e-glikolisis-sedang.md`
- [ ] `osn-sma-bio-01e-glikolisis-sulit.md`
- [ ] `osn-sma-bio-01e-glikolisis-mudah-sedang.md`
- [ ] `osn-sma-bio-01e-glikolisis-sedang-sulit.md`

**BIO-01f · Respirasi Sel - Siklus Krebs & Transpor Elektron** (fokus Prov–Nas)
- [ ] `osn-sma-bio-01f-krebs-transpor-elektron-campur.md`
- [ ] `osn-sma-bio-01f-krebs-transpor-elektron-mudah.md`
- [ ] `osn-sma-bio-01f-krebs-transpor-elektron-sedang.md`
- [ ] `osn-sma-bio-01f-krebs-transpor-elektron-sulit.md`
- [ ] `osn-sma-bio-01f-krebs-transpor-elektron-mudah-sedang.md`
- [ ] `osn-sma-bio-01f-krebs-transpor-elektron-sedang-sulit.md`

**BIO-01g · Fotosintesis - Reaksi Terang** (fokus Prov)
- [ ] `osn-sma-bio-01g-reaksi-terang-campur.md`
- [ ] `osn-sma-bio-01g-reaksi-terang-mudah.md`
- [ ] `osn-sma-bio-01g-reaksi-terang-sedang.md`
- [ ] `osn-sma-bio-01g-reaksi-terang-sulit.md`
- [ ] `osn-sma-bio-01g-reaksi-terang-mudah-sedang.md`
- [ ] `osn-sma-bio-01g-reaksi-terang-sedang-sulit.md`

**BIO-01h · Fotosintesis - Siklus Calvin** (fokus Prov–Nas)
- [ ] `osn-sma-bio-01h-siklus-calvin-campur.md`
- [ ] `osn-sma-bio-01h-siklus-calvin-mudah.md`
- [ ] `osn-sma-bio-01h-siklus-calvin-sedang.md`
- [ ] `osn-sma-bio-01h-siklus-calvin-sulit.md`
- [ ] `osn-sma-bio-01h-siklus-calvin-mudah-sedang.md`
- [ ] `osn-sma-bio-01h-siklus-calvin-sedang-sulit.md`

**BIO-01i · Fermentasi & Respirasi Anaerob** (fokus Prov)
- [ ] `osn-sma-bio-01i-fermentasi-anaerob-campur.md`
- [ ] `osn-sma-bio-01i-fermentasi-anaerob-mudah.md`
- [ ] `osn-sma-bio-01i-fermentasi-anaerob-sedang.md`
- [ ] `osn-sma-bio-01i-fermentasi-anaerob-sulit.md`
- [ ] `osn-sma-bio-01i-fermentasi-anaerob-mudah-sedang.md`
- [ ] `osn-sma-bio-01i-fermentasi-anaerob-sedang-sulit.md`

**BIO-01j · Metabolisme Lemak & Protein** (fokus Prov)
- [ ] `osn-sma-bio-01j-metabolisme-lemak-protein-campur.md`
- [ ] `osn-sma-bio-01j-metabolisme-lemak-protein-mudah.md`
- [ ] `osn-sma-bio-01j-metabolisme-lemak-protein-sedang.md`
- [ ] `osn-sma-bio-01j-metabolisme-lemak-protein-sulit.md`
- [ ] `osn-sma-bio-01j-metabolisme-lemak-protein-mudah-sedang.md`
- [ ] `osn-sma-bio-01j-metabolisme-lemak-protein-sedang-sulit.md`

### BIO-02 · Genetika Molekuler & Pewarisan Sifat (10 sub-bab)

**BIO-02a · Materi Genetik (DNA, RNA, Kromosom, Gen)** (fokus Kab–Prov)
- [ ] `osn-sma-bio-02a-materi-genetik-campur.md`
- [ ] `osn-sma-bio-02a-materi-genetik-mudah.md`
- [ ] `osn-sma-bio-02a-materi-genetik-sedang.md`
- [ ] `osn-sma-bio-02a-materi-genetik-sulit.md`
- [ ] `osn-sma-bio-02a-materi-genetik-mudah-sedang.md`
- [ ] `osn-sma-bio-02a-materi-genetik-sedang-sulit.md`

**BIO-02b · Replikasi DNA** (fokus Prov)
- [ ] `osn-sma-bio-02b-replikasi-dna-campur.md`
- [ ] `osn-sma-bio-02b-replikasi-dna-mudah.md`
- [ ] `osn-sma-bio-02b-replikasi-dna-sedang.md`
- [ ] `osn-sma-bio-02b-replikasi-dna-sulit.md`
- [ ] `osn-sma-bio-02b-replikasi-dna-mudah-sedang.md`
- [ ] `osn-sma-bio-02b-replikasi-dna-sedang-sulit.md`

**BIO-02c · Transkripsi & Translasi (Sintesis Protein)** (fokus Prov–Nas)
- [ ] `osn-sma-bio-02c-transkripsi-translasi-campur.md`
- [ ] `osn-sma-bio-02c-transkripsi-translasi-mudah.md`
- [ ] `osn-sma-bio-02c-transkripsi-translasi-sedang.md`
- [ ] `osn-sma-bio-02c-transkripsi-translasi-sulit.md`
- [ ] `osn-sma-bio-02c-transkripsi-translasi-mudah-sedang.md`
- [ ] `osn-sma-bio-02c-transkripsi-translasi-sedang-sulit.md`

**BIO-02d · Regulasi Ekspresi Gen (Operon — Pengantar)** (fokus Nas)
- [ ] `osn-sma-bio-02d-regulasi-gen-operon-campur.md`
- [ ] `osn-sma-bio-02d-regulasi-gen-operon-mudah.md`
- [ ] `osn-sma-bio-02d-regulasi-gen-operon-sedang.md`
- [ ] `osn-sma-bio-02d-regulasi-gen-operon-sulit.md`
- [ ] `osn-sma-bio-02d-regulasi-gen-operon-mudah-sedang.md`
- [ ] `osn-sma-bio-02d-regulasi-gen-operon-sedang-sulit.md`

**BIO-02e · Pewarisan Sifat Mendel (Monohibrid, Dihibrid)** (fokus Kab–Prov)
- [ ] `osn-sma-bio-02e-mendel-campur.md`
- [ ] `osn-sma-bio-02e-mendel-mudah.md`
- [ ] `osn-sma-bio-02e-mendel-sedang.md`
- [ ] `osn-sma-bio-02e-mendel-sulit.md`
- [ ] `osn-sma-bio-02e-mendel-mudah-sedang.md`
- [ ] `osn-sma-bio-02e-mendel-sedang-sulit.md`

**BIO-02f · Penyimpangan Semu Hukum Mendel (Interaksi Gen, Epistasis)** (fokus Prov–Nas)
- [ ] `osn-sma-bio-02f-penyimpangan-mendel-campur.md`
- [ ] `osn-sma-bio-02f-penyimpangan-mendel-mudah.md`
- [ ] `osn-sma-bio-02f-penyimpangan-mendel-sedang.md`
- [ ] `osn-sma-bio-02f-penyimpangan-mendel-sulit.md`
- [ ] `osn-sma-bio-02f-penyimpangan-mendel-mudah-sedang.md`
- [ ] `osn-sma-bio-02f-penyimpangan-mendel-sedang-sulit.md`

**BIO-02g · Pewarisan Terkait Seks** (fokus Prov)
- [ ] `osn-sma-bio-02g-pewarisan-terkait-seks-campur.md`
- [ ] `osn-sma-bio-02g-pewarisan-terkait-seks-mudah.md`
- [ ] `osn-sma-bio-02g-pewarisan-terkait-seks-sedang.md`
- [ ] `osn-sma-bio-02g-pewarisan-terkait-seks-sulit.md`
- [ ] `osn-sma-bio-02g-pewarisan-terkait-seks-mudah-sedang.md`
- [ ] `osn-sma-bio-02g-pewarisan-terkait-seks-sedang-sulit.md`

**BIO-02h · Pedigree (Silsilah Keluarga)** (fokus Prov–Nas)
- [ ] `osn-sma-bio-02h-pedigree-campur.md`
- [ ] `osn-sma-bio-02h-pedigree-mudah.md`
- [ ] `osn-sma-bio-02h-pedigree-sedang.md`
- [ ] `osn-sma-bio-02h-pedigree-sulit.md`
- [ ] `osn-sma-bio-02h-pedigree-mudah-sedang.md`
- [ ] `osn-sma-bio-02h-pedigree-sedang-sulit.md`

**BIO-02i · Mutasi (Gen, Kromosom)** (fokus Prov)
- [ ] `osn-sma-bio-02i-mutasi-campur.md`
- [ ] `osn-sma-bio-02i-mutasi-mudah.md`
- [ ] `osn-sma-bio-02i-mutasi-sedang.md`
- [ ] `osn-sma-bio-02i-mutasi-sulit.md`
- [ ] `osn-sma-bio-02i-mutasi-mudah-sedang.md`
- [ ] `osn-sma-bio-02i-mutasi-sedang-sulit.md`

**BIO-02j · Penyakit Genetik pada Manusia** (fokus Prov)
- [ ] `osn-sma-bio-02j-penyakit-genetik-campur.md`
- [ ] `osn-sma-bio-02j-penyakit-genetik-mudah.md`
- [ ] `osn-sma-bio-02j-penyakit-genetik-sedang.md`
- [ ] `osn-sma-bio-02j-penyakit-genetik-sulit.md`
- [ ] `osn-sma-bio-02j-penyakit-genetik-mudah-sedang.md`
- [ ] `osn-sma-bio-02j-penyakit-genetik-sedang-sulit.md`

### BIO-03 · Evolusi & Biologi Molekuler (8 sub-bab)

**BIO-03a · Teori Evolusi (Lamarck, Darwin, Modern)** (fokus Kab–Prov)
- [ ] `osn-sma-bio-03a-teori-evolusi-campur.md`
- [ ] `osn-sma-bio-03a-teori-evolusi-mudah.md`
- [ ] `osn-sma-bio-03a-teori-evolusi-sedang.md`
- [ ] `osn-sma-bio-03a-teori-evolusi-sulit.md`
- [ ] `osn-sma-bio-03a-teori-evolusi-mudah-sedang.md`
- [ ] `osn-sma-bio-03a-teori-evolusi-sedang-sulit.md`

**BIO-03b · Bukti Evolusi (Fosil, Anatomi, Embriologi, Molekuler)** (fokus Prov)
- [ ] `osn-sma-bio-03b-bukti-evolusi-campur.md`
- [ ] `osn-sma-bio-03b-bukti-evolusi-mudah.md`
- [ ] `osn-sma-bio-03b-bukti-evolusi-sedang.md`
- [ ] `osn-sma-bio-03b-bukti-evolusi-sulit.md`
- [ ] `osn-sma-bio-03b-bukti-evolusi-mudah-sedang.md`
- [ ] `osn-sma-bio-03b-bukti-evolusi-sedang-sulit.md`

**BIO-03c · Seleksi Alam & Adaptasi** (fokus Prov)
- [ ] `osn-sma-bio-03c-seleksi-alam-campur.md`
- [ ] `osn-sma-bio-03c-seleksi-alam-mudah.md`
- [ ] `osn-sma-bio-03c-seleksi-alam-sedang.md`
- [ ] `osn-sma-bio-03c-seleksi-alam-sulit.md`
- [ ] `osn-sma-bio-03c-seleksi-alam-mudah-sedang.md`
- [ ] `osn-sma-bio-03c-seleksi-alam-sedang-sulit.md`

**BIO-03d · Spesiasi (Alopatrik, Simpatrik)** (fokus Prov–Nas)
- [ ] `osn-sma-bio-03d-spesiasi-campur.md`
- [ ] `osn-sma-bio-03d-spesiasi-mudah.md`
- [ ] `osn-sma-bio-03d-spesiasi-sedang.md`
- [ ] `osn-sma-bio-03d-spesiasi-sulit.md`
- [ ] `osn-sma-bio-03d-spesiasi-mudah-sedang.md`
- [ ] `osn-sma-bio-03d-spesiasi-sedang-sulit.md`

**BIO-03e · Hardy-Weinberg & Genetika Populasi** (fokus Nas)
- [ ] `osn-sma-bio-03e-hardy-weinberg-campur.md`
- [ ] `osn-sma-bio-03e-hardy-weinberg-mudah.md`
- [ ] `osn-sma-bio-03e-hardy-weinberg-sedang.md`
- [ ] `osn-sma-bio-03e-hardy-weinberg-sulit.md`
- [ ] `osn-sma-bio-03e-hardy-weinberg-mudah-sedang.md`
- [ ] `osn-sma-bio-03e-hardy-weinberg-sedang-sulit.md`

**BIO-03f · Filogeni & Pohon Evolusi** (fokus Prov)
- [ ] `osn-sma-bio-03f-filogeni-campur.md`
- [ ] `osn-sma-bio-03f-filogeni-mudah.md`
- [ ] `osn-sma-bio-03f-filogeni-sedang.md`
- [ ] `osn-sma-bio-03f-filogeni-sulit.md`
- [ ] `osn-sma-bio-03f-filogeni-mudah-sedang.md`
- [ ] `osn-sma-bio-03f-filogeni-sedang-sulit.md`

**BIO-03g · Asal Usul Kehidupan (Hipotesis Oparin, Miller-Urey)** (fokus Kab–Prov)
- [ ] `osn-sma-bio-03g-asal-usul-kehidupan-campur.md`
- [ ] `osn-sma-bio-03g-asal-usul-kehidupan-mudah.md`
- [ ] `osn-sma-bio-03g-asal-usul-kehidupan-sedang.md`
- [ ] `osn-sma-bio-03g-asal-usul-kehidupan-sulit.md`
- [ ] `osn-sma-bio-03g-asal-usul-kehidupan-mudah-sedang.md`
- [ ] `osn-sma-bio-03g-asal-usul-kehidupan-sedang-sulit.md`

**BIO-03h · Evolusi Manusia** (fokus Kab–Prov)
- [ ] `osn-sma-bio-03h-evolusi-manusia-campur.md`
- [ ] `osn-sma-bio-03h-evolusi-manusia-mudah.md`
- [ ] `osn-sma-bio-03h-evolusi-manusia-sedang.md`
- [ ] `osn-sma-bio-03h-evolusi-manusia-sulit.md`
- [ ] `osn-sma-bio-03h-evolusi-manusia-mudah-sedang.md`
- [ ] `osn-sma-bio-03h-evolusi-manusia-sedang-sulit.md`

### BIO-04 · Anatomi & Fisiologi Hewan (10 sub-bab)

**BIO-04a · Sistem Pencernaan & Enzim** (fokus Kab–Prov)
- [ ] `osn-sma-bio-04a-pencernaan-enzim-campur.md`
- [ ] `osn-sma-bio-04a-pencernaan-enzim-mudah.md`
- [ ] `osn-sma-bio-04a-pencernaan-enzim-sedang.md`
- [ ] `osn-sma-bio-04a-pencernaan-enzim-sulit.md`
- [ ] `osn-sma-bio-04a-pencernaan-enzim-mudah-sedang.md`
- [ ] `osn-sma-bio-04a-pencernaan-enzim-sedang-sulit.md`

**BIO-04b · Sistem Pernapasan & Pertukaran Gas** (fokus Kab–Prov)
- [ ] `osn-sma-bio-04b-pernapasan-pertukaran-gas-campur.md`
- [ ] `osn-sma-bio-04b-pernapasan-pertukaran-gas-mudah.md`
- [ ] `osn-sma-bio-04b-pernapasan-pertukaran-gas-sedang.md`
- [ ] `osn-sma-bio-04b-pernapasan-pertukaran-gas-sulit.md`
- [ ] `osn-sma-bio-04b-pernapasan-pertukaran-gas-mudah-sedang.md`
- [ ] `osn-sma-bio-04b-pernapasan-pertukaran-gas-sedang-sulit.md`

**BIO-04c · Sistem Peredaran Darah & Limfa** (fokus Kab–Prov)
- [ ] `osn-sma-bio-04c-peredaran-darah-limfa-campur.md`
- [ ] `osn-sma-bio-04c-peredaran-darah-limfa-mudah.md`
- [ ] `osn-sma-bio-04c-peredaran-darah-limfa-sedang.md`
- [ ] `osn-sma-bio-04c-peredaran-darah-limfa-sulit.md`
- [ ] `osn-sma-bio-04c-peredaran-darah-limfa-mudah-sedang.md`
- [ ] `osn-sma-bio-04c-peredaran-darah-limfa-sedang-sulit.md`

**BIO-04d · Sistem Ekskresi (Ginjal, Kulit, Hati, Paru-paru)** (fokus Kab–Prov)
- [ ] `osn-sma-bio-04d-ekskresi-campur.md`
- [ ] `osn-sma-bio-04d-ekskresi-mudah.md`
- [ ] `osn-sma-bio-04d-ekskresi-sedang.md`
- [ ] `osn-sma-bio-04d-ekskresi-sulit.md`
- [ ] `osn-sma-bio-04d-ekskresi-mudah-sedang.md`
- [ ] `osn-sma-bio-04d-ekskresi-sedang-sulit.md`

**BIO-04e · Sistem Saraf & Sinaps** (fokus Prov)
- [ ] `osn-sma-bio-04e-saraf-sinaps-campur.md`
- [ ] `osn-sma-bio-04e-saraf-sinaps-mudah.md`
- [ ] `osn-sma-bio-04e-saraf-sinaps-sedang.md`
- [ ] `osn-sma-bio-04e-saraf-sinaps-sulit.md`
- [ ] `osn-sma-bio-04e-saraf-sinaps-mudah-sedang.md`
- [ ] `osn-sma-bio-04e-saraf-sinaps-sedang-sulit.md`

**BIO-04f · Sistem Endokrin (Hormon)** (fokus Prov)
- [ ] `osn-sma-bio-04f-endokrin-hormon-campur.md`
- [ ] `osn-sma-bio-04f-endokrin-hormon-mudah.md`
- [ ] `osn-sma-bio-04f-endokrin-hormon-sedang.md`
- [ ] `osn-sma-bio-04f-endokrin-hormon-sulit.md`
- [ ] `osn-sma-bio-04f-endokrin-hormon-mudah-sedang.md`
- [ ] `osn-sma-bio-04f-endokrin-hormon-sedang-sulit.md`

**BIO-04g · Sistem Reproduksi & Perkembangan Embrio** (fokus Prov)
- [ ] `osn-sma-bio-04g-reproduksi-embrio-campur.md`
- [ ] `osn-sma-bio-04g-reproduksi-embrio-mudah.md`
- [ ] `osn-sma-bio-04g-reproduksi-embrio-sedang.md`
- [ ] `osn-sma-bio-04g-reproduksi-embrio-sulit.md`
- [ ] `osn-sma-bio-04g-reproduksi-embrio-mudah-sedang.md`
- [ ] `osn-sma-bio-04g-reproduksi-embrio-sedang-sulit.md`

**BIO-04h · Sistem Otot & Rangka** (fokus Kab–Prov)
- [ ] `osn-sma-bio-04h-otot-rangka-campur.md`
- [ ] `osn-sma-bio-04h-otot-rangka-mudah.md`
- [ ] `osn-sma-bio-04h-otot-rangka-sedang.md`
- [ ] `osn-sma-bio-04h-otot-rangka-sulit.md`
- [ ] `osn-sma-bio-04h-otot-rangka-mudah-sedang.md`
- [ ] `osn-sma-bio-04h-otot-rangka-sedang-sulit.md`

**BIO-04i · Sistem Indera** (fokus Kab–Prov)
- [ ] `osn-sma-bio-04i-sistem-indera-campur.md`
- [ ] `osn-sma-bio-04i-sistem-indera-mudah.md`
- [ ] `osn-sma-bio-04i-sistem-indera-sedang.md`
- [ ] `osn-sma-bio-04i-sistem-indera-sulit.md`
- [ ] `osn-sma-bio-04i-sistem-indera-mudah-sedang.md`
- [ ] `osn-sma-bio-04i-sistem-indera-sedang-sulit.md`

**BIO-04j · Sistem Imun (Pengantar)** (fokus Prov)
- [ ] `osn-sma-bio-04j-sistem-imun-campur.md`
- [ ] `osn-sma-bio-04j-sistem-imun-mudah.md`
- [ ] `osn-sma-bio-04j-sistem-imun-sedang.md`
- [ ] `osn-sma-bio-04j-sistem-imun-sulit.md`
- [ ] `osn-sma-bio-04j-sistem-imun-mudah-sedang.md`
- [ ] `osn-sma-bio-04j-sistem-imun-sedang-sulit.md`

### BIO-05 · Anatomi & Fisiologi Tumbuhan (9 sub-bab)

**BIO-05a · Jaringan Tumbuhan (Meristem, Permanen)** (fokus Kab–Prov)
- [ ] `osn-sma-bio-05a-jaringan-tumbuhan-campur.md`
- [ ] `osn-sma-bio-05a-jaringan-tumbuhan-mudah.md`
- [ ] `osn-sma-bio-05a-jaringan-tumbuhan-sedang.md`
- [ ] `osn-sma-bio-05a-jaringan-tumbuhan-sulit.md`
- [ ] `osn-sma-bio-05a-jaringan-tumbuhan-mudah-sedang.md`
- [ ] `osn-sma-bio-05a-jaringan-tumbuhan-sedang-sulit.md`

**BIO-05b · Struktur Akar, Batang, Daun (Anatomi)** (fokus Kab–Prov)
- [ ] `osn-sma-bio-05b-struktur-akar-batang-daun-campur.md`
- [ ] `osn-sma-bio-05b-struktur-akar-batang-daun-mudah.md`
- [ ] `osn-sma-bio-05b-struktur-akar-batang-daun-sedang.md`
- [ ] `osn-sma-bio-05b-struktur-akar-batang-daun-sulit.md`
- [ ] `osn-sma-bio-05b-struktur-akar-batang-daun-mudah-sedang.md`
- [ ] `osn-sma-bio-05b-struktur-akar-batang-daun-sedang-sulit.md`

**BIO-05c · Transpor Air & Mineral (Xilem)** (fokus Prov)
- [ ] `osn-sma-bio-05c-transpor-xilem-campur.md`
- [ ] `osn-sma-bio-05c-transpor-xilem-mudah.md`
- [ ] `osn-sma-bio-05c-transpor-xilem-sedang.md`
- [ ] `osn-sma-bio-05c-transpor-xilem-sulit.md`
- [ ] `osn-sma-bio-05c-transpor-xilem-mudah-sedang.md`
- [ ] `osn-sma-bio-05c-transpor-xilem-sedang-sulit.md`

**BIO-05d · Transpor Hasil Fotosintesis (Floem)** (fokus Prov)
- [ ] `osn-sma-bio-05d-transpor-floem-campur.md`
- [ ] `osn-sma-bio-05d-transpor-floem-mudah.md`
- [ ] `osn-sma-bio-05d-transpor-floem-sedang.md`
- [ ] `osn-sma-bio-05d-transpor-floem-sulit.md`
- [ ] `osn-sma-bio-05d-transpor-floem-mudah-sedang.md`
- [ ] `osn-sma-bio-05d-transpor-floem-sedang-sulit.md`

**BIO-05e · Hormon Tumbuhan (Auksin, Giberelin, dll)** (fokus Prov)
- [ ] `osn-sma-bio-05e-hormon-tumbuhan-campur.md`
- [ ] `osn-sma-bio-05e-hormon-tumbuhan-mudah.md`
- [ ] `osn-sma-bio-05e-hormon-tumbuhan-sedang.md`
- [ ] `osn-sma-bio-05e-hormon-tumbuhan-sulit.md`
- [ ] `osn-sma-bio-05e-hormon-tumbuhan-mudah-sedang.md`
- [ ] `osn-sma-bio-05e-hormon-tumbuhan-sedang-sulit.md`

**BIO-05f · Gerak pada Tumbuhan (Tropisme, Nasti, Taksis)** (fokus Kab)
- [ ] `osn-sma-bio-05f-gerak-tumbuhan-campur.md`
- [ ] `osn-sma-bio-05f-gerak-tumbuhan-mudah.md`
- [ ] `osn-sma-bio-05f-gerak-tumbuhan-sedang.md`
- [ ] `osn-sma-bio-05f-gerak-tumbuhan-sulit.md`
- [ ] `osn-sma-bio-05f-gerak-tumbuhan-mudah-sedang.md`
- [ ] `osn-sma-bio-05f-gerak-tumbuhan-sedang-sulit.md`

**BIO-05g · Fotoperiodisme & Pembungaan** (fokus Prov–Nas)
- [ ] `osn-sma-bio-05g-fotoperiodisme-pembungaan-campur.md`
- [ ] `osn-sma-bio-05g-fotoperiodisme-pembungaan-mudah.md`
- [ ] `osn-sma-bio-05g-fotoperiodisme-pembungaan-sedang.md`
- [ ] `osn-sma-bio-05g-fotoperiodisme-pembungaan-sulit.md`
- [ ] `osn-sma-bio-05g-fotoperiodisme-pembungaan-mudah-sedang.md`
- [ ] `osn-sma-bio-05g-fotoperiodisme-pembungaan-sedang-sulit.md`

**BIO-05h · Reproduksi Tumbuhan (Vegetatif & Generatif)** (fokus Kab)
- [ ] `osn-sma-bio-05h-reproduksi-tumbuhan-campur.md`
- [ ] `osn-sma-bio-05h-reproduksi-tumbuhan-mudah.md`
- [ ] `osn-sma-bio-05h-reproduksi-tumbuhan-sedang.md`
- [ ] `osn-sma-bio-05h-reproduksi-tumbuhan-sulit.md`
- [ ] `osn-sma-bio-05h-reproduksi-tumbuhan-mudah-sedang.md`
- [ ] `osn-sma-bio-05h-reproduksi-tumbuhan-sedang-sulit.md`

**BIO-05i · Perkembangan Embrio Tumbuhan** (fokus Prov)
- [ ] `osn-sma-bio-05i-embrio-tumbuhan-campur.md`
- [ ] `osn-sma-bio-05i-embrio-tumbuhan-mudah.md`
- [ ] `osn-sma-bio-05i-embrio-tumbuhan-sedang.md`
- [ ] `osn-sma-bio-05i-embrio-tumbuhan-sulit.md`
- [ ] `osn-sma-bio-05i-embrio-tumbuhan-mudah-sedang.md`
- [ ] `osn-sma-bio-05i-embrio-tumbuhan-sedang-sulit.md`

### BIO-06 · Ekologi & Biogeografi (10 sub-bab)

**BIO-06a · Konsep Ekosistem (Komponen, Interaksi)** (fokus Kab)
- [ ] `osn-sma-bio-06a-konsep-ekosistem-campur.md`
- [ ] `osn-sma-bio-06a-konsep-ekosistem-mudah.md`
- [ ] `osn-sma-bio-06a-konsep-ekosistem-sedang.md`
- [ ] `osn-sma-bio-06a-konsep-ekosistem-sulit.md`
- [ ] `osn-sma-bio-06a-konsep-ekosistem-mudah-sedang.md`
- [ ] `osn-sma-bio-06a-konsep-ekosistem-sedang-sulit.md`

**BIO-06b · Populasi & Dinamika Populasi** (fokus Prov)
- [ ] `osn-sma-bio-06b-dinamika-populasi-campur.md`
- [ ] `osn-sma-bio-06b-dinamika-populasi-mudah.md`
- [ ] `osn-sma-bio-06b-dinamika-populasi-sedang.md`
- [ ] `osn-sma-bio-06b-dinamika-populasi-sulit.md`
- [ ] `osn-sma-bio-06b-dinamika-populasi-mudah-sedang.md`
- [ ] `osn-sma-bio-06b-dinamika-populasi-sedang-sulit.md`

**BIO-06c · Komunitas & Suksesi** (fokus Prov)
- [ ] `osn-sma-bio-06c-komunitas-suksesi-campur.md`
- [ ] `osn-sma-bio-06c-komunitas-suksesi-mudah.md`
- [ ] `osn-sma-bio-06c-komunitas-suksesi-sedang.md`
- [ ] `osn-sma-bio-06c-komunitas-suksesi-sulit.md`
- [ ] `osn-sma-bio-06c-komunitas-suksesi-mudah-sedang.md`
- [ ] `osn-sma-bio-06c-komunitas-suksesi-sedang-sulit.md`

**BIO-06d · Aliran Energi & Piramida Ekologi** (fokus Prov)
- [ ] `osn-sma-bio-06d-aliran-energi-piramida-campur.md`
- [ ] `osn-sma-bio-06d-aliran-energi-piramida-mudah.md`
- [ ] `osn-sma-bio-06d-aliran-energi-piramida-sedang.md`
- [ ] `osn-sma-bio-06d-aliran-energi-piramida-sulit.md`
- [ ] `osn-sma-bio-06d-aliran-energi-piramida-mudah-sedang.md`
- [ ] `osn-sma-bio-06d-aliran-energi-piramida-sedang-sulit.md`

**BIO-06e · Rantai & Jaring Makanan Lanjut** (fokus Kab–Prov)
- [ ] `osn-sma-bio-06e-rantai-jaring-makanan-campur.md`
- [ ] `osn-sma-bio-06e-rantai-jaring-makanan-mudah.md`
- [ ] `osn-sma-bio-06e-rantai-jaring-makanan-sedang.md`
- [ ] `osn-sma-bio-06e-rantai-jaring-makanan-sulit.md`
- [ ] `osn-sma-bio-06e-rantai-jaring-makanan-mudah-sedang.md`
- [ ] `osn-sma-bio-06e-rantai-jaring-makanan-sedang-sulit.md`

**BIO-06f · Daur Biogeokimia (C, N, P, S, H2O)** (fokus Prov)
- [ ] `osn-sma-bio-06f-daur-biogeokimia-campur.md`
- [ ] `osn-sma-bio-06f-daur-biogeokimia-mudah.md`
- [ ] `osn-sma-bio-06f-daur-biogeokimia-sedang.md`
- [ ] `osn-sma-bio-06f-daur-biogeokimia-sulit.md`
- [ ] `osn-sma-bio-06f-daur-biogeokimia-mudah-sedang.md`
- [ ] `osn-sma-bio-06f-daur-biogeokimia-sedang-sulit.md`

**BIO-06g · Bioma Dunia (Hutan, Gurun, Tundra, dll)** (fokus Kab–Prov)
- [ ] `osn-sma-bio-06g-bioma-dunia-campur.md`
- [ ] `osn-sma-bio-06g-bioma-dunia-mudah.md`
- [ ] `osn-sma-bio-06g-bioma-dunia-sedang.md`
- [ ] `osn-sma-bio-06g-bioma-dunia-sulit.md`
- [ ] `osn-sma-bio-06g-bioma-dunia-mudah-sedang.md`
- [ ] `osn-sma-bio-06g-bioma-dunia-sedang-sulit.md`

**BIO-06h · Biogeografi (Persebaran Flora-Fauna)** (fokus Prov)
- [ ] `osn-sma-bio-06h-biogeografi-campur.md`
- [ ] `osn-sma-bio-06h-biogeografi-mudah.md`
- [ ] `osn-sma-bio-06h-biogeografi-sedang.md`
- [ ] `osn-sma-bio-06h-biogeografi-sulit.md`
- [ ] `osn-sma-bio-06h-biogeografi-mudah-sedang.md`
- [ ] `osn-sma-bio-06h-biogeografi-sedang-sulit.md`

**BIO-06i · Pencemaran & Konservasi** (fokus Kab)
- [ ] `osn-sma-bio-06i-pencemaran-konservasi-campur.md`
- [ ] `osn-sma-bio-06i-pencemaran-konservasi-mudah.md`
- [ ] `osn-sma-bio-06i-pencemaran-konservasi-sedang.md`
- [ ] `osn-sma-bio-06i-pencemaran-konservasi-sulit.md`
- [ ] `osn-sma-bio-06i-pencemaran-konservasi-mudah-sedang.md`
- [ ] `osn-sma-bio-06i-pencemaran-konservasi-sedang-sulit.md`

**BIO-06j · Perubahan Iklim & Dampaknya** (fokus Kab–Prov)
- [ ] `osn-sma-bio-06j-perubahan-iklim-campur.md`
- [ ] `osn-sma-bio-06j-perubahan-iklim-mudah.md`
- [ ] `osn-sma-bio-06j-perubahan-iklim-sedang.md`
- [ ] `osn-sma-bio-06j-perubahan-iklim-sulit.md`
- [ ] `osn-sma-bio-06j-perubahan-iklim-mudah-sedang.md`
- [ ] `osn-sma-bio-06j-perubahan-iklim-sedang-sulit.md`

### BIO-07 · Mikrobiologi, Bioteknologi & Imunologi (9 sub-bab)

**BIO-07a · Bakteri (Struktur, Klasifikasi, Reproduksi)** (fokus Kab–Prov)
- [ ] `osn-sma-bio-07a-bakteri-campur.md`
- [ ] `osn-sma-bio-07a-bakteri-mudah.md`
- [ ] `osn-sma-bio-07a-bakteri-sedang.md`
- [ ] `osn-sma-bio-07a-bakteri-sulit.md`
- [ ] `osn-sma-bio-07a-bakteri-mudah-sedang.md`
- [ ] `osn-sma-bio-07a-bakteri-sedang-sulit.md`

**BIO-07b · Virus (Struktur, Replikasi, Klasifikasi)** (fokus Kab–Prov)
- [ ] `osn-sma-bio-07b-virus-campur.md`
- [ ] `osn-sma-bio-07b-virus-mudah.md`
- [ ] `osn-sma-bio-07b-virus-sedang.md`
- [ ] `osn-sma-bio-07b-virus-sulit.md`
- [ ] `osn-sma-bio-07b-virus-mudah-sedang.md`
- [ ] `osn-sma-bio-07b-virus-sedang-sulit.md`

**BIO-07c · Jamur (Klasifikasi & Peranan)** (fokus Kab)
- [ ] `osn-sma-bio-07c-jamur-campur.md`
- [ ] `osn-sma-bio-07c-jamur-mudah.md`
- [ ] `osn-sma-bio-07c-jamur-sedang.md`
- [ ] `osn-sma-bio-07c-jamur-sulit.md`
- [ ] `osn-sma-bio-07c-jamur-mudah-sedang.md`
- [ ] `osn-sma-bio-07c-jamur-sedang-sulit.md`

**BIO-07d · Protista (Protozoa, Alga)** (fokus Kab–Prov)
- [ ] `osn-sma-bio-07d-protista-campur.md`
- [ ] `osn-sma-bio-07d-protista-mudah.md`
- [ ] `osn-sma-bio-07d-protista-sedang.md`
- [ ] `osn-sma-bio-07d-protista-sulit.md`
- [ ] `osn-sma-bio-07d-protista-mudah-sedang.md`
- [ ] `osn-sma-bio-07d-protista-sedang-sulit.md`

**BIO-07e · Bioteknologi Konvensional** (fokus Kab)
- [ ] `osn-sma-bio-07e-bioteknologi-konvensional-campur.md`
- [ ] `osn-sma-bio-07e-bioteknologi-konvensional-mudah.md`
- [ ] `osn-sma-bio-07e-bioteknologi-konvensional-sedang.md`
- [ ] `osn-sma-bio-07e-bioteknologi-konvensional-sulit.md`
- [ ] `osn-sma-bio-07e-bioteknologi-konvensional-mudah-sedang.md`
- [ ] `osn-sma-bio-07e-bioteknologi-konvensional-sedang-sulit.md`

**BIO-07f · Bioteknologi Modern (Rekayasa Genetika, PCR, Cloning)** (fokus Prov)
- [ ] `osn-sma-bio-07f-bioteknologi-modern-campur.md`
- [ ] `osn-sma-bio-07f-bioteknologi-modern-mudah.md`
- [ ] `osn-sma-bio-07f-bioteknologi-modern-sedang.md`
- [ ] `osn-sma-bio-07f-bioteknologi-modern-sulit.md`
- [ ] `osn-sma-bio-07f-bioteknologi-modern-mudah-sedang.md`
- [ ] `osn-sma-bio-07f-bioteknologi-modern-sedang-sulit.md`

**BIO-07g · Kultur Jaringan** (fokus Prov)
- [ ] `osn-sma-bio-07g-kultur-jaringan-campur.md`
- [ ] `osn-sma-bio-07g-kultur-jaringan-mudah.md`
- [ ] `osn-sma-bio-07g-kultur-jaringan-sedang.md`
- [ ] `osn-sma-bio-07g-kultur-jaringan-sulit.md`
- [ ] `osn-sma-bio-07g-kultur-jaringan-mudah-sedang.md`
- [ ] `osn-sma-bio-07g-kultur-jaringan-sedang-sulit.md`

**BIO-07h · Sistem Imun (Respons Imun, Antigen-Antibodi)** (fokus Prov)
- [ ] `osn-sma-bio-07h-sistem-imun-campur.md`
- [ ] `osn-sma-bio-07h-sistem-imun-mudah.md`
- [ ] `osn-sma-bio-07h-sistem-imun-sedang.md`
- [ ] `osn-sma-bio-07h-sistem-imun-sulit.md`
- [ ] `osn-sma-bio-07h-sistem-imun-mudah-sedang.md`
- [ ] `osn-sma-bio-07h-sistem-imun-sedang-sulit.md`

**BIO-07i · Penyakit Menular & Pencegahan** (fokus Kab)
- [ ] `osn-sma-bio-07i-penyakit-menular-campur.md`
- [ ] `osn-sma-bio-07i-penyakit-menular-mudah.md`
- [ ] `osn-sma-bio-07i-penyakit-menular-sedang.md`
- [ ] `osn-sma-bio-07i-penyakit-menular-sulit.md`
- [ ] `osn-sma-bio-07i-penyakit-menular-mudah-sedang.md`
- [ ] `osn-sma-bio-07i-penyakit-menular-sedang-sulit.md`

### BIO-08 · Etologi, Sistematika & Perilaku Hewan (9 sub-bab)

**BIO-08a · Klasifikasi & Tata Nama (Linnaeus)** (fokus Kab)
- [ ] `osn-sma-bio-08a-klasifikasi-linnaeus-campur.md`
- [ ] `osn-sma-bio-08a-klasifikasi-linnaeus-mudah.md`
- [ ] `osn-sma-bio-08a-klasifikasi-linnaeus-sedang.md`
- [ ] `osn-sma-bio-08a-klasifikasi-linnaeus-sulit.md`
- [ ] `osn-sma-bio-08a-klasifikasi-linnaeus-mudah-sedang.md`
- [ ] `osn-sma-bio-08a-klasifikasi-linnaeus-sedang-sulit.md`

**BIO-08b · Kingdom Animalia (Klasifikasi Lanjut)** (fokus Kab–Prov)
- [ ] `osn-sma-bio-08b-animalia-lanjut-campur.md`
- [ ] `osn-sma-bio-08b-animalia-lanjut-mudah.md`
- [ ] `osn-sma-bio-08b-animalia-lanjut-sedang.md`
- [ ] `osn-sma-bio-08b-animalia-lanjut-sulit.md`
- [ ] `osn-sma-bio-08b-animalia-lanjut-mudah-sedang.md`
- [ ] `osn-sma-bio-08b-animalia-lanjut-sedang-sulit.md`

**BIO-08c · Kingdom Plantae (Klasifikasi Lanjut)** (fokus Kab–Prov)
- [ ] `osn-sma-bio-08c-plantae-lanjut-campur.md`
- [ ] `osn-sma-bio-08c-plantae-lanjut-mudah.md`
- [ ] `osn-sma-bio-08c-plantae-lanjut-sedang.md`
- [ ] `osn-sma-bio-08c-plantae-lanjut-sulit.md`
- [ ] `osn-sma-bio-08c-plantae-lanjut-mudah-sedang.md`
- [ ] `osn-sma-bio-08c-plantae-lanjut-sedang-sulit.md`

**BIO-08d · Perilaku Bawaan vs Belajar** (fokus Prov)
- [ ] `osn-sma-bio-08d-perilaku-bawaan-belajar-campur.md`
- [ ] `osn-sma-bio-08d-perilaku-bawaan-belajar-mudah.md`
- [ ] `osn-sma-bio-08d-perilaku-bawaan-belajar-sedang.md`
- [ ] `osn-sma-bio-08d-perilaku-bawaan-belajar-sulit.md`
- [ ] `osn-sma-bio-08d-perilaku-bawaan-belajar-mudah-sedang.md`
- [ ] `osn-sma-bio-08d-perilaku-bawaan-belajar-sedang-sulit.md`

**BIO-08e · Komunikasi Hewan** (fokus Prov)
- [ ] `osn-sma-bio-08e-komunikasi-hewan-campur.md`
- [ ] `osn-sma-bio-08e-komunikasi-hewan-mudah.md`
- [ ] `osn-sma-bio-08e-komunikasi-hewan-sedang.md`
- [ ] `osn-sma-bio-08e-komunikasi-hewan-sulit.md`
- [ ] `osn-sma-bio-08e-komunikasi-hewan-mudah-sedang.md`
- [ ] `osn-sma-bio-08e-komunikasi-hewan-sedang-sulit.md`

**BIO-08f · Perilaku Sosial & Hierarki** (fokus Prov)
- [ ] `osn-sma-bio-08f-perilaku-sosial-campur.md`
- [ ] `osn-sma-bio-08f-perilaku-sosial-mudah.md`
- [ ] `osn-sma-bio-08f-perilaku-sosial-sedang.md`
- [ ] `osn-sma-bio-08f-perilaku-sosial-sulit.md`
- [ ] `osn-sma-bio-08f-perilaku-sosial-mudah-sedang.md`
- [ ] `osn-sma-bio-08f-perilaku-sosial-sedang-sulit.md`

**BIO-08g · Etologi Klasik (Tinbergen, Lorenz)** (fokus Prov–Nas)
- [ ] `osn-sma-bio-08g-etologi-klasik-campur.md`
- [ ] `osn-sma-bio-08g-etologi-klasik-mudah.md`
- [ ] `osn-sma-bio-08g-etologi-klasik-sedang.md`
- [ ] `osn-sma-bio-08g-etologi-klasik-sulit.md`
- [ ] `osn-sma-bio-08g-etologi-klasik-mudah-sedang.md`
- [ ] `osn-sma-bio-08g-etologi-klasik-sedang-sulit.md`

**BIO-08h · Migrasi & Navigasi Hewan** (fokus Prov)
- [ ] `osn-sma-bio-08h-migrasi-navigasi-campur.md`
- [ ] `osn-sma-bio-08h-migrasi-navigasi-mudah.md`
- [ ] `osn-sma-bio-08h-migrasi-navigasi-sedang.md`
- [ ] `osn-sma-bio-08h-migrasi-navigasi-sulit.md`
- [ ] `osn-sma-bio-08h-migrasi-navigasi-mudah-sedang.md`
- [ ] `osn-sma-bio-08h-migrasi-navigasi-sedang-sulit.md`

**BIO-08i · Reproduksi & Perilaku Kawin** (fokus Prov)
- [ ] `osn-sma-bio-08i-perilaku-kawin-campur.md`
- [ ] `osn-sma-bio-08i-perilaku-kawin-mudah.md`
- [ ] `osn-sma-bio-08i-perilaku-kawin-sedang.md`
- [ ] `osn-sma-bio-08i-perilaku-kawin-sulit.md`
- [ ] `osn-sma-bio-08i-perilaku-kawin-mudah-sedang.md`
- [ ] `osn-sma-bio-08i-perilaku-kawin-sedang-sulit.md`

---

## E · Astronomi Per Sub-Bab (60 sub-bab × 6 = 360 file)

### AST-01 · Bola Langit, Sistem Koordinat & Waktu (9 sub-bab)

**AST-01a · Bola Langit & Lingkaran-lingkaran Penting** (fokus Kab)
- [ ] `osn-sma-ast-01a-bola-langit-campur.md`
- [ ] `osn-sma-ast-01a-bola-langit-mudah.md`
- [ ] `osn-sma-ast-01a-bola-langit-sedang.md`
- [ ] `osn-sma-ast-01a-bola-langit-sulit.md`
- [ ] `osn-sma-ast-01a-bola-langit-mudah-sedang.md`
- [ ] `osn-sma-ast-01a-bola-langit-sedang-sulit.md`

**AST-01b · Sistem Koordinat Horison** (fokus Kab–Prov)
- [ ] `osn-sma-ast-01b-koordinat-horison-campur.md`
- [ ] `osn-sma-ast-01b-koordinat-horison-mudah.md`
- [ ] `osn-sma-ast-01b-koordinat-horison-sedang.md`
- [ ] `osn-sma-ast-01b-koordinat-horison-sulit.md`
- [ ] `osn-sma-ast-01b-koordinat-horison-mudah-sedang.md`
- [ ] `osn-sma-ast-01b-koordinat-horison-sedang-sulit.md`

**AST-01c · Sistem Koordinat Ekuator** (fokus Prov)
- [ ] `osn-sma-ast-01c-koordinat-ekuator-campur.md`
- [ ] `osn-sma-ast-01c-koordinat-ekuator-mudah.md`
- [ ] `osn-sma-ast-01c-koordinat-ekuator-sedang.md`
- [ ] `osn-sma-ast-01c-koordinat-ekuator-sulit.md`
- [ ] `osn-sma-ast-01c-koordinat-ekuator-mudah-sedang.md`
- [ ] `osn-sma-ast-01c-koordinat-ekuator-sedang-sulit.md`

**AST-01d · Sistem Koordinat Ekliptika & Galaktika** (fokus Prov–Nas)
- [ ] `osn-sma-ast-01d-koordinat-ekliptika-galaktika-campur.md`
- [ ] `osn-sma-ast-01d-koordinat-ekliptika-galaktika-mudah.md`
- [ ] `osn-sma-ast-01d-koordinat-ekliptika-galaktika-sedang.md`
- [ ] `osn-sma-ast-01d-koordinat-ekliptika-galaktika-sulit.md`
- [ ] `osn-sma-ast-01d-koordinat-ekliptika-galaktika-mudah-sedang.md`
- [ ] `osn-sma-ast-01d-koordinat-ekliptika-galaktika-sedang-sulit.md`

**AST-01e · Transformasi Koordinat** (fokus Nas)
- [ ] `osn-sma-ast-01e-transformasi-koordinat-campur.md`
- [ ] `osn-sma-ast-01e-transformasi-koordinat-mudah.md`
- [ ] `osn-sma-ast-01e-transformasi-koordinat-sedang.md`
- [ ] `osn-sma-ast-01e-transformasi-koordinat-sulit.md`
- [ ] `osn-sma-ast-01e-transformasi-koordinat-mudah-sedang.md`
- [ ] `osn-sma-ast-01e-transformasi-koordinat-sedang-sulit.md`

**AST-01f · Waktu Sideris vs Waktu Matahari** (fokus Prov)
- [ ] `osn-sma-ast-01f-waktu-sideris-matahari-campur.md`
- [ ] `osn-sma-ast-01f-waktu-sideris-matahari-mudah.md`
- [ ] `osn-sma-ast-01f-waktu-sideris-matahari-sedang.md`
- [ ] `osn-sma-ast-01f-waktu-sideris-matahari-sulit.md`
- [ ] `osn-sma-ast-01f-waktu-sideris-matahari-mudah-sedang.md`
- [ ] `osn-sma-ast-01f-waktu-sideris-matahari-sedang-sulit.md`

**AST-01g · Kalender (Solar, Lunar, Lunisolar)** (fokus Kab–Prov)
- [ ] `osn-sma-ast-01g-kalender-campur.md`
- [ ] `osn-sma-ast-01g-kalender-mudah.md`
- [ ] `osn-sma-ast-01g-kalender-sedang.md`
- [ ] `osn-sma-ast-01g-kalender-sulit.md`
- [ ] `osn-sma-ast-01g-kalender-mudah-sedang.md`
- [ ] `osn-sma-ast-01g-kalender-sedang-sulit.md`

**AST-01h · Presesi & Nutasi** (fokus Prov–Nas)
- [ ] `osn-sma-ast-01h-presesi-nutasi-campur.md`
- [ ] `osn-sma-ast-01h-presesi-nutasi-mudah.md`
- [ ] `osn-sma-ast-01h-presesi-nutasi-sedang.md`
- [ ] `osn-sma-ast-01h-presesi-nutasi-sulit.md`
- [ ] `osn-sma-ast-01h-presesi-nutasi-mudah-sedang.md`
- [ ] `osn-sma-ast-01h-presesi-nutasi-sedang-sulit.md`

**AST-01i · Pengukuran Sudut & Trigonometri Bola** (fokus Prov–Nas)
- [ ] `osn-sma-ast-01i-trigonometri-bola-campur.md`
- [ ] `osn-sma-ast-01i-trigonometri-bola-mudah.md`
- [ ] `osn-sma-ast-01i-trigonometri-bola-sedang.md`
- [ ] `osn-sma-ast-01i-trigonometri-bola-sulit.md`
- [ ] `osn-sma-ast-01i-trigonometri-bola-mudah-sedang.md`
- [ ] `osn-sma-ast-01i-trigonometri-bola-sedang-sulit.md`

### AST-02 · Mekanika Benda Langit (8 sub-bab)

**AST-02a · Hukum Kepler I, II, III** (fokus Kab–Prov)
- [ ] `osn-sma-ast-02a-hukum-kepler-campur.md`
- [ ] `osn-sma-ast-02a-hukum-kepler-mudah.md`
- [ ] `osn-sma-ast-02a-hukum-kepler-sedang.md`
- [ ] `osn-sma-ast-02a-hukum-kepler-sulit.md`
- [ ] `osn-sma-ast-02a-hukum-kepler-mudah-sedang.md`
- [ ] `osn-sma-ast-02a-hukum-kepler-sedang-sulit.md`

**AST-02b · Hukum Gravitasi Newton** (fokus Kab–Prov)
- [ ] `osn-sma-ast-02b-gravitasi-newton-campur.md`
- [ ] `osn-sma-ast-02b-gravitasi-newton-mudah.md`
- [ ] `osn-sma-ast-02b-gravitasi-newton-sedang.md`
- [ ] `osn-sma-ast-02b-gravitasi-newton-sulit.md`
- [ ] `osn-sma-ast-02b-gravitasi-newton-mudah-sedang.md`
- [ ] `osn-sma-ast-02b-gravitasi-newton-sedang-sulit.md`

**AST-02c · Elemen Orbit (Sumbu, Eksentrisitas, Inklinasi)** (fokus Prov)
- [ ] `osn-sma-ast-02c-elemen-orbit-campur.md`
- [ ] `osn-sma-ast-02c-elemen-orbit-mudah.md`
- [ ] `osn-sma-ast-02c-elemen-orbit-sedang.md`
- [ ] `osn-sma-ast-02c-elemen-orbit-sulit.md`
- [ ] `osn-sma-ast-02c-elemen-orbit-mudah-sedang.md`
- [ ] `osn-sma-ast-02c-elemen-orbit-sedang-sulit.md`

**AST-02d · Kecepatan Orbit & Vis-Viva** (fokus Prov–Nas)
- [ ] `osn-sma-ast-02d-vis-viva-campur.md`
- [ ] `osn-sma-ast-02d-vis-viva-mudah.md`
- [ ] `osn-sma-ast-02d-vis-viva-sedang.md`
- [ ] `osn-sma-ast-02d-vis-viva-sulit.md`
- [ ] `osn-sma-ast-02d-vis-viva-mudah-sedang.md`
- [ ] `osn-sma-ast-02d-vis-viva-sedang-sulit.md`

**AST-02e · Hyperbolic & Parabolic Orbit (Komet)** (fokus Nas)
- [ ] `osn-sma-ast-02e-orbit-hiperbola-parabola-campur.md`
- [ ] `osn-sma-ast-02e-orbit-hiperbola-parabola-mudah.md`
- [ ] `osn-sma-ast-02e-orbit-hiperbola-parabola-sedang.md`
- [ ] `osn-sma-ast-02e-orbit-hiperbola-parabola-sulit.md`
- [ ] `osn-sma-ast-02e-orbit-hiperbola-parabola-mudah-sedang.md`
- [ ] `osn-sma-ast-02e-orbit-hiperbola-parabola-sedang-sulit.md`

**AST-02f · Gangguan Orbit & Resonansi** (fokus Nas)
- [ ] `osn-sma-ast-02f-gangguan-resonansi-campur.md`
- [ ] `osn-sma-ast-02f-gangguan-resonansi-mudah.md`
- [ ] `osn-sma-ast-02f-gangguan-resonansi-sedang.md`
- [ ] `osn-sma-ast-02f-gangguan-resonansi-sulit.md`
- [ ] `osn-sma-ast-02f-gangguan-resonansi-mudah-sedang.md`
- [ ] `osn-sma-ast-02f-gangguan-resonansi-sedang-sulit.md`

**AST-02g · Titik Lagrange** (fokus Nas)
- [ ] `osn-sma-ast-02g-lagrange-campur.md`
- [ ] `osn-sma-ast-02g-lagrange-mudah.md`
- [ ] `osn-sma-ast-02g-lagrange-sedang.md`
- [ ] `osn-sma-ast-02g-lagrange-sulit.md`
- [ ] `osn-sma-ast-02g-lagrange-mudah-sedang.md`
- [ ] `osn-sma-ast-02g-lagrange-sedang-sulit.md`

**AST-02h · Roche Limit** (fokus Nas)
- [ ] `osn-sma-ast-02h-roche-limit-campur.md`
- [ ] `osn-sma-ast-02h-roche-limit-mudah.md`
- [ ] `osn-sma-ast-02h-roche-limit-sedang.md`
- [ ] `osn-sma-ast-02h-roche-limit-sulit.md`
- [ ] `osn-sma-ast-02h-roche-limit-mudah-sedang.md`
- [ ] `osn-sma-ast-02h-roche-limit-sedang-sulit.md`

### AST-03 · Tata Surya (9 sub-bab)

**AST-03a · Matahari (Struktur, Aktivitas)** (fokus Kab–Prov)
- [ ] `osn-sma-ast-03a-matahari-campur.md`
- [ ] `osn-sma-ast-03a-matahari-mudah.md`
- [ ] `osn-sma-ast-03a-matahari-sedang.md`
- [ ] `osn-sma-ast-03a-matahari-sulit.md`
- [ ] `osn-sma-ast-03a-matahari-mudah-sedang.md`
- [ ] `osn-sma-ast-03a-matahari-sedang-sulit.md`

**AST-03b · Planet Terrestrial (Merkurius, Venus, Bumi, Mars)** (fokus Kab)
- [ ] `osn-sma-ast-03b-planet-terrestrial-campur.md`
- [ ] `osn-sma-ast-03b-planet-terrestrial-mudah.md`
- [ ] `osn-sma-ast-03b-planet-terrestrial-sedang.md`
- [ ] `osn-sma-ast-03b-planet-terrestrial-sulit.md`
- [ ] `osn-sma-ast-03b-planet-terrestrial-mudah-sedang.md`
- [ ] `osn-sma-ast-03b-planet-terrestrial-sedang-sulit.md`

**AST-03c · Planet Jovian (Jupiter, Saturnus, Uranus, Neptunus)** (fokus Kab)
- [ ] `osn-sma-ast-03c-planet-jovian-campur.md`
- [ ] `osn-sma-ast-03c-planet-jovian-mudah.md`
- [ ] `osn-sma-ast-03c-planet-jovian-sedang.md`
- [ ] `osn-sma-ast-03c-planet-jovian-sulit.md`
- [ ] `osn-sma-ast-03c-planet-jovian-mudah-sedang.md`
- [ ] `osn-sma-ast-03c-planet-jovian-sedang-sulit.md`

**AST-03d · Bulan (Fase, Gerhana, Pasang Surut)** (fokus Kab–Prov)
- [ ] `osn-sma-ast-03d-bulan-campur.md`
- [ ] `osn-sma-ast-03d-bulan-mudah.md`
- [ ] `osn-sma-ast-03d-bulan-sedang.md`
- [ ] `osn-sma-ast-03d-bulan-sulit.md`
- [ ] `osn-sma-ast-03d-bulan-mudah-sedang.md`
- [ ] `osn-sma-ast-03d-bulan-sedang-sulit.md`

**AST-03e · Asteroid & Sabuk Asteroid** (fokus Kab)
- [ ] `osn-sma-ast-03e-asteroid-campur.md`
- [ ] `osn-sma-ast-03e-asteroid-mudah.md`
- [ ] `osn-sma-ast-03e-asteroid-sedang.md`
- [ ] `osn-sma-ast-03e-asteroid-sulit.md`
- [ ] `osn-sma-ast-03e-asteroid-mudah-sedang.md`
- [ ] `osn-sma-ast-03e-asteroid-sedang-sulit.md`

**AST-03f · Komet & Sabuk Kuiper** (fokus Prov)
- [ ] `osn-sma-ast-03f-komet-kuiper-campur.md`
- [ ] `osn-sma-ast-03f-komet-kuiper-mudah.md`
- [ ] `osn-sma-ast-03f-komet-kuiper-sedang.md`
- [ ] `osn-sma-ast-03f-komet-kuiper-sulit.md`
- [ ] `osn-sma-ast-03f-komet-kuiper-mudah-sedang.md`
- [ ] `osn-sma-ast-03f-komet-kuiper-sedang-sulit.md`

**AST-03g · Meteor & Meteorit** (fokus Kab)
- [ ] `osn-sma-ast-03g-meteor-meteorit-campur.md`
- [ ] `osn-sma-ast-03g-meteor-meteorit-mudah.md`
- [ ] `osn-sma-ast-03g-meteor-meteorit-sedang.md`
- [ ] `osn-sma-ast-03g-meteor-meteorit-sulit.md`
- [ ] `osn-sma-ast-03g-meteor-meteorit-mudah-sedang.md`
- [ ] `osn-sma-ast-03g-meteor-meteorit-sedang-sulit.md`

**AST-03h · Planet Kerdil & Trans-Neptunian Objects** (fokus Prov)
- [ ] `osn-sma-ast-03h-planet-kerdil-tno-campur.md`
- [ ] `osn-sma-ast-03h-planet-kerdil-tno-mudah.md`
- [ ] `osn-sma-ast-03h-planet-kerdil-tno-sedang.md`
- [ ] `osn-sma-ast-03h-planet-kerdil-tno-sulit.md`
- [ ] `osn-sma-ast-03h-planet-kerdil-tno-mudah-sedang.md`
- [ ] `osn-sma-ast-03h-planet-kerdil-tno-sedang-sulit.md`

**AST-03i · Pembentukan Tata Surya** (fokus Prov)
- [ ] `osn-sma-ast-03i-pembentukan-tata-surya-campur.md`
- [ ] `osn-sma-ast-03i-pembentukan-tata-surya-mudah.md`
- [ ] `osn-sma-ast-03i-pembentukan-tata-surya-sedang.md`
- [ ] `osn-sma-ast-03i-pembentukan-tata-surya-sulit.md`
- [ ] `osn-sma-ast-03i-pembentukan-tata-surya-mudah-sedang.md`
- [ ] `osn-sma-ast-03i-pembentukan-tata-surya-sedang-sulit.md`

### AST-04 · Bintang (9 sub-bab)

**AST-04a · Paralaks & Jarak Bintang** (fokus Kab–Prov)
- [ ] `osn-sma-ast-04a-paralaks-jarak-campur.md`
- [ ] `osn-sma-ast-04a-paralaks-jarak-mudah.md`
- [ ] `osn-sma-ast-04a-paralaks-jarak-sedang.md`
- [ ] `osn-sma-ast-04a-paralaks-jarak-sulit.md`
- [ ] `osn-sma-ast-04a-paralaks-jarak-mudah-sedang.md`
- [ ] `osn-sma-ast-04a-paralaks-jarak-sedang-sulit.md`

**AST-04b · Magnitudo (Mutlak vs Tampak)** (fokus Kab–Prov)
- [ ] `osn-sma-ast-04b-magnitudo-campur.md`
- [ ] `osn-sma-ast-04b-magnitudo-mudah.md`
- [ ] `osn-sma-ast-04b-magnitudo-sedang.md`
- [ ] `osn-sma-ast-04b-magnitudo-sulit.md`
- [ ] `osn-sma-ast-04b-magnitudo-mudah-sedang.md`
- [ ] `osn-sma-ast-04b-magnitudo-sedang-sulit.md`

**AST-04c · Hukum Stefan-Boltzmann** (fokus Prov)
- [ ] `osn-sma-ast-04c-stefan-boltzmann-campur.md`
- [ ] `osn-sma-ast-04c-stefan-boltzmann-mudah.md`
- [ ] `osn-sma-ast-04c-stefan-boltzmann-sedang.md`
- [ ] `osn-sma-ast-04c-stefan-boltzmann-sulit.md`
- [ ] `osn-sma-ast-04c-stefan-boltzmann-mudah-sedang.md`
- [ ] `osn-sma-ast-04c-stefan-boltzmann-sedang-sulit.md`

**AST-04d · Hukum Wien & Pergeseran Spektrum** (fokus Prov)
- [ ] `osn-sma-ast-04d-hukum-wien-campur.md`
- [ ] `osn-sma-ast-04d-hukum-wien-mudah.md`
- [ ] `osn-sma-ast-04d-hukum-wien-sedang.md`
- [ ] `osn-sma-ast-04d-hukum-wien-sulit.md`
- [ ] `osn-sma-ast-04d-hukum-wien-mudah-sedang.md`
- [ ] `osn-sma-ast-04d-hukum-wien-sedang-sulit.md`

**AST-04e · Klasifikasi Spektral (OBAFGKM)** (fokus Prov)
- [ ] `osn-sma-ast-04e-klasifikasi-spektral-campur.md`
- [ ] `osn-sma-ast-04e-klasifikasi-spektral-mudah.md`
- [ ] `osn-sma-ast-04e-klasifikasi-spektral-sedang.md`
- [ ] `osn-sma-ast-04e-klasifikasi-spektral-sulit.md`
- [ ] `osn-sma-ast-04e-klasifikasi-spektral-mudah-sedang.md`
- [ ] `osn-sma-ast-04e-klasifikasi-spektral-sedang-sulit.md`

**AST-04f · Diagram Hertzsprung-Russell (HR)** (fokus Prov–Nas)
- [ ] `osn-sma-ast-04f-diagram-hr-campur.md`
- [ ] `osn-sma-ast-04f-diagram-hr-mudah.md`
- [ ] `osn-sma-ast-04f-diagram-hr-sedang.md`
- [ ] `osn-sma-ast-04f-diagram-hr-sulit.md`
- [ ] `osn-sma-ast-04f-diagram-hr-mudah-sedang.md`
- [ ] `osn-sma-ast-04f-diagram-hr-sedang-sulit.md`

**AST-04g · Bintang Ganda & Kala Orbit** (fokus Prov–Nas)
- [ ] `osn-sma-ast-04g-bintang-ganda-campur.md`
- [ ] `osn-sma-ast-04g-bintang-ganda-mudah.md`
- [ ] `osn-sma-ast-04g-bintang-ganda-sedang.md`
- [ ] `osn-sma-ast-04g-bintang-ganda-sulit.md`
- [ ] `osn-sma-ast-04g-bintang-ganda-mudah-sedang.md`
- [ ] `osn-sma-ast-04g-bintang-ganda-sedang-sulit.md`

**AST-04h · Bintang Variabel (Cepheid, RR Lyrae)** (fokus Prov–Nas)
- [ ] `osn-sma-ast-04h-bintang-variabel-campur.md`
- [ ] `osn-sma-ast-04h-bintang-variabel-mudah.md`
- [ ] `osn-sma-ast-04h-bintang-variabel-sedang.md`
- [ ] `osn-sma-ast-04h-bintang-variabel-sulit.md`
- [ ] `osn-sma-ast-04h-bintang-variabel-mudah-sedang.md`
- [ ] `osn-sma-ast-04h-bintang-variabel-sedang-sulit.md`

**AST-04i · Indeks Warna & Fotometri** (fokus Prov)
- [ ] `osn-sma-ast-04i-indeks-warna-campur.md`
- [ ] `osn-sma-ast-04i-indeks-warna-mudah.md`
- [ ] `osn-sma-ast-04i-indeks-warna-sedang.md`
- [ ] `osn-sma-ast-04i-indeks-warna-sulit.md`
- [ ] `osn-sma-ast-04i-indeks-warna-mudah-sedang.md`
- [ ] `osn-sma-ast-04i-indeks-warna-sedang-sulit.md`

### AST-05 · Evolusi Bintang & Astrofisika (8 sub-bab)

**AST-05a · Pembentukan Bintang (Nebula → Protostar)** (fokus Prov)
- [ ] `osn-sma-ast-05a-pembentukan-bintang-campur.md`
- [ ] `osn-sma-ast-05a-pembentukan-bintang-mudah.md`
- [ ] `osn-sma-ast-05a-pembentukan-bintang-sedang.md`
- [ ] `osn-sma-ast-05a-pembentukan-bintang-sulit.md`
- [ ] `osn-sma-ast-05a-pembentukan-bintang-mudah-sedang.md`
- [ ] `osn-sma-ast-05a-pembentukan-bintang-sedang-sulit.md`

**AST-05b · Deret Utama & Fusi Hidrogen** (fokus Prov)
- [ ] `osn-sma-ast-05b-deret-utama-fusi-h-campur.md`
- [ ] `osn-sma-ast-05b-deret-utama-fusi-h-mudah.md`
- [ ] `osn-sma-ast-05b-deret-utama-fusi-h-sedang.md`
- [ ] `osn-sma-ast-05b-deret-utama-fusi-h-sulit.md`
- [ ] `osn-sma-ast-05b-deret-utama-fusi-h-mudah-sedang.md`
- [ ] `osn-sma-ast-05b-deret-utama-fusi-h-sedang-sulit.md`

**AST-05c · Evolusi Bintang Massa Rendah-Menengah** (fokus Prov–Nas)
- [ ] `osn-sma-ast-05c-evolusi-massa-rendah-campur.md`
- [ ] `osn-sma-ast-05c-evolusi-massa-rendah-mudah.md`
- [ ] `osn-sma-ast-05c-evolusi-massa-rendah-sedang.md`
- [ ] `osn-sma-ast-05c-evolusi-massa-rendah-sulit.md`
- [ ] `osn-sma-ast-05c-evolusi-massa-rendah-mudah-sedang.md`
- [ ] `osn-sma-ast-05c-evolusi-massa-rendah-sedang-sulit.md`

**AST-05d · Evolusi Bintang Massa Tinggi** (fokus Prov–Nas)
- [ ] `osn-sma-ast-05d-evolusi-massa-tinggi-campur.md`
- [ ] `osn-sma-ast-05d-evolusi-massa-tinggi-mudah.md`
- [ ] `osn-sma-ast-05d-evolusi-massa-tinggi-sedang.md`
- [ ] `osn-sma-ast-05d-evolusi-massa-tinggi-sulit.md`
- [ ] `osn-sma-ast-05d-evolusi-massa-tinggi-mudah-sedang.md`
- [ ] `osn-sma-ast-05d-evolusi-massa-tinggi-sedang-sulit.md`

**AST-05e · Supernova & Sisa Supernova** (fokus Prov–Nas)
- [ ] `osn-sma-ast-05e-supernova-campur.md`
- [ ] `osn-sma-ast-05e-supernova-mudah.md`
- [ ] `osn-sma-ast-05e-supernova-sedang.md`
- [ ] `osn-sma-ast-05e-supernova-sulit.md`
- [ ] `osn-sma-ast-05e-supernova-mudah-sedang.md`
- [ ] `osn-sma-ast-05e-supernova-sedang-sulit.md`

**AST-05f · Bintang Neutron & Pulsar** (fokus Nas)
- [ ] `osn-sma-ast-05f-neutron-pulsar-campur.md`
- [ ] `osn-sma-ast-05f-neutron-pulsar-mudah.md`
- [ ] `osn-sma-ast-05f-neutron-pulsar-sedang.md`
- [ ] `osn-sma-ast-05f-neutron-pulsar-sulit.md`
- [ ] `osn-sma-ast-05f-neutron-pulsar-mudah-sedang.md`
- [ ] `osn-sma-ast-05f-neutron-pulsar-sedang-sulit.md`

**AST-05g · Lubang Hitam** (fokus Prov–Nas)
- [ ] `osn-sma-ast-05g-lubang-hitam-campur.md`
- [ ] `osn-sma-ast-05g-lubang-hitam-mudah.md`
- [ ] `osn-sma-ast-05g-lubang-hitam-sedang.md`
- [ ] `osn-sma-ast-05g-lubang-hitam-sulit.md`
- [ ] `osn-sma-ast-05g-lubang-hitam-mudah-sedang.md`
- [ ] `osn-sma-ast-05g-lubang-hitam-sedang-sulit.md`

**AST-05h · Reaksi Nuklir dalam Bintang** (fokus Nas)
- [ ] `osn-sma-ast-05h-reaksi-nuklir-bintang-campur.md`
- [ ] `osn-sma-ast-05h-reaksi-nuklir-bintang-mudah.md`
- [ ] `osn-sma-ast-05h-reaksi-nuklir-bintang-sedang.md`
- [ ] `osn-sma-ast-05h-reaksi-nuklir-bintang-sulit.md`
- [ ] `osn-sma-ast-05h-reaksi-nuklir-bintang-mudah-sedang.md`
- [ ] `osn-sma-ast-05h-reaksi-nuklir-bintang-sedang-sulit.md`

### AST-06 · Galaksi, Tata Galaksi & Kosmologi (9 sub-bab)

**AST-06a · Galaksi Bima Sakti (Struktur)** (fokus Kab–Prov)
- [ ] `osn-sma-ast-06a-bima-sakti-campur.md`
- [ ] `osn-sma-ast-06a-bima-sakti-mudah.md`
- [ ] `osn-sma-ast-06a-bima-sakti-sedang.md`
- [ ] `osn-sma-ast-06a-bima-sakti-sulit.md`
- [ ] `osn-sma-ast-06a-bima-sakti-mudah-sedang.md`
- [ ] `osn-sma-ast-06a-bima-sakti-sedang-sulit.md`

**AST-06b · Klasifikasi Galaksi (Hubble)** (fokus Prov)
- [ ] `osn-sma-ast-06b-klasifikasi-hubble-campur.md`
- [ ] `osn-sma-ast-06b-klasifikasi-hubble-mudah.md`
- [ ] `osn-sma-ast-06b-klasifikasi-hubble-sedang.md`
- [ ] `osn-sma-ast-06b-klasifikasi-hubble-sulit.md`
- [ ] `osn-sma-ast-06b-klasifikasi-hubble-mudah-sedang.md`
- [ ] `osn-sma-ast-06b-klasifikasi-hubble-sedang-sulit.md`

**AST-06c · Galaksi Aktif & Quasar** (fokus Prov–Nas)
- [ ] `osn-sma-ast-06c-galaksi-aktif-quasar-campur.md`
- [ ] `osn-sma-ast-06c-galaksi-aktif-quasar-mudah.md`
- [ ] `osn-sma-ast-06c-galaksi-aktif-quasar-sedang.md`
- [ ] `osn-sma-ast-06c-galaksi-aktif-quasar-sulit.md`
- [ ] `osn-sma-ast-06c-galaksi-aktif-quasar-mudah-sedang.md`
- [ ] `osn-sma-ast-06c-galaksi-aktif-quasar-sedang-sulit.md`

**AST-06d · Tata Galaksi & Gugus Galaksi** (fokus Prov)
- [ ] `osn-sma-ast-06d-gugus-galaksi-campur.md`
- [ ] `osn-sma-ast-06d-gugus-galaksi-mudah.md`
- [ ] `osn-sma-ast-06d-gugus-galaksi-sedang.md`
- [ ] `osn-sma-ast-06d-gugus-galaksi-sulit.md`
- [ ] `osn-sma-ast-06d-gugus-galaksi-mudah-sedang.md`
- [ ] `osn-sma-ast-06d-gugus-galaksi-sedang-sulit.md`

**AST-06e · Hukum Hubble & Pengembangan Alam Semesta** (fokus Prov)
- [ ] `osn-sma-ast-06e-hukum-hubble-campur.md`
- [ ] `osn-sma-ast-06e-hukum-hubble-mudah.md`
- [ ] `osn-sma-ast-06e-hukum-hubble-sedang.md`
- [ ] `osn-sma-ast-06e-hukum-hubble-sulit.md`
- [ ] `osn-sma-ast-06e-hukum-hubble-mudah-sedang.md`
- [ ] `osn-sma-ast-06e-hukum-hubble-sedang-sulit.md`

**AST-06f · Materi Gelap & Energi Gelap** (fokus Prov–Nas)
- [ ] `osn-sma-ast-06f-materi-energi-gelap-campur.md`
- [ ] `osn-sma-ast-06f-materi-energi-gelap-mudah.md`
- [ ] `osn-sma-ast-06f-materi-energi-gelap-sedang.md`
- [ ] `osn-sma-ast-06f-materi-energi-gelap-sulit.md`
- [ ] `osn-sma-ast-06f-materi-energi-gelap-mudah-sedang.md`
- [ ] `osn-sma-ast-06f-materi-energi-gelap-sedang-sulit.md`

**AST-06g · Latar Belakang Gelombang Mikro Kosmik (CMB)** (fokus Nas)
- [ ] `osn-sma-ast-06g-cmb-campur.md`
- [ ] `osn-sma-ast-06g-cmb-mudah.md`
- [ ] `osn-sma-ast-06g-cmb-sedang.md`
- [ ] `osn-sma-ast-06g-cmb-sulit.md`
- [ ] `osn-sma-ast-06g-cmb-mudah-sedang.md`
- [ ] `osn-sma-ast-06g-cmb-sedang-sulit.md`

**AST-06h · Teori Big Bang & Nukleosintesis** (fokus Prov–Nas)
- [ ] `osn-sma-ast-06h-big-bang-nukleosintesis-campur.md`
- [ ] `osn-sma-ast-06h-big-bang-nukleosintesis-mudah.md`
- [ ] `osn-sma-ast-06h-big-bang-nukleosintesis-sedang.md`
- [ ] `osn-sma-ast-06h-big-bang-nukleosintesis-sulit.md`
- [ ] `osn-sma-ast-06h-big-bang-nukleosintesis-mudah-sedang.md`
- [ ] `osn-sma-ast-06h-big-bang-nukleosintesis-sedang-sulit.md`

**AST-06i · Kosmologi Modern** (fokus Nas)
- [ ] `osn-sma-ast-06i-kosmologi-modern-campur.md`
- [ ] `osn-sma-ast-06i-kosmologi-modern-mudah.md`
- [ ] `osn-sma-ast-06i-kosmologi-modern-sedang.md`
- [ ] `osn-sma-ast-06i-kosmologi-modern-sulit.md`
- [ ] `osn-sma-ast-06i-kosmologi-modern-mudah-sedang.md`
- [ ] `osn-sma-ast-06i-kosmologi-modern-sedang-sulit.md`

### AST-07 · Instrumentasi Astronomi & Pengamatan (8 sub-bab)

**AST-07a · Teleskop Optik (Refraktor, Reflektor)** (fokus Kab–Prov)
- [ ] `osn-sma-ast-07a-teleskop-optik-campur.md`
- [ ] `osn-sma-ast-07a-teleskop-optik-mudah.md`
- [ ] `osn-sma-ast-07a-teleskop-optik-sedang.md`
- [ ] `osn-sma-ast-07a-teleskop-optik-sulit.md`
- [ ] `osn-sma-ast-07a-teleskop-optik-mudah-sedang.md`
- [ ] `osn-sma-ast-07a-teleskop-optik-sedang-sulit.md`

**AST-07b · Pembesaran & Daya Pisah** (fokus Prov)
- [ ] `osn-sma-ast-07b-pembesaran-daya-pisah-campur.md`
- [ ] `osn-sma-ast-07b-pembesaran-daya-pisah-mudah.md`
- [ ] `osn-sma-ast-07b-pembesaran-daya-pisah-sedang.md`
- [ ] `osn-sma-ast-07b-pembesaran-daya-pisah-sulit.md`
- [ ] `osn-sma-ast-07b-pembesaran-daya-pisah-mudah-sedang.md`
- [ ] `osn-sma-ast-07b-pembesaran-daya-pisah-sedang-sulit.md`

**AST-07c · Detektor (CCD, Fotomultiplier)** (fokus Prov)
- [ ] `osn-sma-ast-07c-detektor-ccd-campur.md`
- [ ] `osn-sma-ast-07c-detektor-ccd-mudah.md`
- [ ] `osn-sma-ast-07c-detektor-ccd-sedang.md`
- [ ] `osn-sma-ast-07c-detektor-ccd-sulit.md`
- [ ] `osn-sma-ast-07c-detektor-ccd-mudah-sedang.md`
- [ ] `osn-sma-ast-07c-detektor-ccd-sedang-sulit.md`

**AST-07d · Teleskop Radio** (fokus Prov)
- [ ] `osn-sma-ast-07d-teleskop-radio-campur.md`
- [ ] `osn-sma-ast-07d-teleskop-radio-mudah.md`
- [ ] `osn-sma-ast-07d-teleskop-radio-sedang.md`
- [ ] `osn-sma-ast-07d-teleskop-radio-sulit.md`
- [ ] `osn-sma-ast-07d-teleskop-radio-mudah-sedang.md`
- [ ] `osn-sma-ast-07d-teleskop-radio-sedang-sulit.md`

**AST-07e · Teleskop Luar Angkasa (Hubble, JWST, dll)** (fokus Kab–Prov)
- [ ] `osn-sma-ast-07e-teleskop-luar-angkasa-campur.md`
- [ ] `osn-sma-ast-07e-teleskop-luar-angkasa-mudah.md`
- [ ] `osn-sma-ast-07e-teleskop-luar-angkasa-sedang.md`
- [ ] `osn-sma-ast-07e-teleskop-luar-angkasa-sulit.md`
- [ ] `osn-sma-ast-07e-teleskop-luar-angkasa-mudah-sedang.md`
- [ ] `osn-sma-ast-07e-teleskop-luar-angkasa-sedang-sulit.md`

**AST-07f · Spektroskopi Astronomi** (fokus Prov–Nas)
- [ ] `osn-sma-ast-07f-spektroskopi-astronomi-campur.md`
- [ ] `osn-sma-ast-07f-spektroskopi-astronomi-mudah.md`
- [ ] `osn-sma-ast-07f-spektroskopi-astronomi-sedang.md`
- [ ] `osn-sma-ast-07f-spektroskopi-astronomi-sulit.md`
- [ ] `osn-sma-ast-07f-spektroskopi-astronomi-mudah-sedang.md`
- [ ] `osn-sma-ast-07f-spektroskopi-astronomi-sedang-sulit.md`

**AST-07g · Astronomi Multi-Wavelength** (fokus Prov–Nas)
- [ ] `osn-sma-ast-07g-multi-wavelength-campur.md`
- [ ] `osn-sma-ast-07g-multi-wavelength-mudah.md`
- [ ] `osn-sma-ast-07g-multi-wavelength-sedang.md`
- [ ] `osn-sma-ast-07g-multi-wavelength-sulit.md`
- [ ] `osn-sma-ast-07g-multi-wavelength-mudah-sedang.md`
- [ ] `osn-sma-ast-07g-multi-wavelength-sedang-sulit.md`

**AST-07h · Teknik Pengamatan Lapangan** (fokus Kab–Prov)
- [ ] `osn-sma-ast-07h-pengamatan-lapangan-campur.md`
- [ ] `osn-sma-ast-07h-pengamatan-lapangan-mudah.md`
- [ ] `osn-sma-ast-07h-pengamatan-lapangan-sedang.md`
- [ ] `osn-sma-ast-07h-pengamatan-lapangan-sulit.md`
- [ ] `osn-sma-ast-07h-pengamatan-lapangan-mudah-sedang.md`
- [ ] `osn-sma-ast-07h-pengamatan-lapangan-sedang-sulit.md`

---

## F · Kebumian Per Sub-Bab (52 sub-bab × 6 = 312 file)

### KEB-01 · Geologi (10 sub-bab)

**KEB-01a · Struktur Bumi (Inti, Mantel, Kerak)** (fokus Kab)
- [ ] `osn-sma-keb-01a-struktur-bumi-campur.md`
- [ ] `osn-sma-keb-01a-struktur-bumi-mudah.md`
- [ ] `osn-sma-keb-01a-struktur-bumi-sedang.md`
- [ ] `osn-sma-keb-01a-struktur-bumi-sulit.md`
- [ ] `osn-sma-keb-01a-struktur-bumi-mudah-sedang.md`
- [ ] `osn-sma-keb-01a-struktur-bumi-sedang-sulit.md`

**KEB-01b · Mineral & Sifat Fisiknya** (fokus Kab–Prov)
- [ ] `osn-sma-keb-01b-mineral-sifat-campur.md`
- [ ] `osn-sma-keb-01b-mineral-sifat-mudah.md`
- [ ] `osn-sma-keb-01b-mineral-sifat-sedang.md`
- [ ] `osn-sma-keb-01b-mineral-sifat-sulit.md`
- [ ] `osn-sma-keb-01b-mineral-sifat-mudah-sedang.md`
- [ ] `osn-sma-keb-01b-mineral-sifat-sedang-sulit.md`

**KEB-01c · Batuan Beku** (fokus Kab–Prov)
- [ ] `osn-sma-keb-01c-batuan-beku-campur.md`
- [ ] `osn-sma-keb-01c-batuan-beku-mudah.md`
- [ ] `osn-sma-keb-01c-batuan-beku-sedang.md`
- [ ] `osn-sma-keb-01c-batuan-beku-sulit.md`
- [ ] `osn-sma-keb-01c-batuan-beku-mudah-sedang.md`
- [ ] `osn-sma-keb-01c-batuan-beku-sedang-sulit.md`

**KEB-01d · Batuan Sedimen** (fokus Kab–Prov)
- [ ] `osn-sma-keb-01d-batuan-sedimen-campur.md`
- [ ] `osn-sma-keb-01d-batuan-sedimen-mudah.md`
- [ ] `osn-sma-keb-01d-batuan-sedimen-sedang.md`
- [ ] `osn-sma-keb-01d-batuan-sedimen-sulit.md`
- [ ] `osn-sma-keb-01d-batuan-sedimen-mudah-sedang.md`
- [ ] `osn-sma-keb-01d-batuan-sedimen-sedang-sulit.md`

**KEB-01e · Batuan Metamorf** (fokus Prov)
- [ ] `osn-sma-keb-01e-batuan-metamorf-campur.md`
- [ ] `osn-sma-keb-01e-batuan-metamorf-mudah.md`
- [ ] `osn-sma-keb-01e-batuan-metamorf-sedang.md`
- [ ] `osn-sma-keb-01e-batuan-metamorf-sulit.md`
- [ ] `osn-sma-keb-01e-batuan-metamorf-mudah-sedang.md`
- [ ] `osn-sma-keb-01e-batuan-metamorf-sedang-sulit.md`

**KEB-01f · Siklus Batuan** (fokus Prov)
- [ ] `osn-sma-keb-01f-siklus-batuan-campur.md`
- [ ] `osn-sma-keb-01f-siklus-batuan-mudah.md`
- [ ] `osn-sma-keb-01f-siklus-batuan-sedang.md`
- [ ] `osn-sma-keb-01f-siklus-batuan-sulit.md`
- [ ] `osn-sma-keb-01f-siklus-batuan-mudah-sedang.md`
- [ ] `osn-sma-keb-01f-siklus-batuan-sedang-sulit.md`

**KEB-01g · Tektonik Lempeng & Pergerakannya** (fokus Kab–Prov)
- [ ] `osn-sma-keb-01g-tektonik-lempeng-campur.md`
- [ ] `osn-sma-keb-01g-tektonik-lempeng-mudah.md`
- [ ] `osn-sma-keb-01g-tektonik-lempeng-sedang.md`
- [ ] `osn-sma-keb-01g-tektonik-lempeng-sulit.md`
- [ ] `osn-sma-keb-01g-tektonik-lempeng-mudah-sedang.md`
- [ ] `osn-sma-keb-01g-tektonik-lempeng-sedang-sulit.md`

**KEB-01h · Gempa Bumi (Seismologi)** (fokus Prov)
- [ ] `osn-sma-keb-01h-gempa-seismologi-campur.md`
- [ ] `osn-sma-keb-01h-gempa-seismologi-mudah.md`
- [ ] `osn-sma-keb-01h-gempa-seismologi-sedang.md`
- [ ] `osn-sma-keb-01h-gempa-seismologi-sulit.md`
- [ ] `osn-sma-keb-01h-gempa-seismologi-mudah-sedang.md`
- [ ] `osn-sma-keb-01h-gempa-seismologi-sedang-sulit.md`

**KEB-01i · Vulkanologi (Tipe Gunung Api, Erupsi)** (fokus Prov)
- [ ] `osn-sma-keb-01i-vulkanologi-campur.md`
- [ ] `osn-sma-keb-01i-vulkanologi-mudah.md`
- [ ] `osn-sma-keb-01i-vulkanologi-sedang.md`
- [ ] `osn-sma-keb-01i-vulkanologi-sulit.md`
- [ ] `osn-sma-keb-01i-vulkanologi-mudah-sedang.md`
- [ ] `osn-sma-keb-01i-vulkanologi-sedang-sulit.md`

**KEB-01j · Stratigrafi & Skala Waktu Geologi** (fokus Prov–Nas)
- [ ] `osn-sma-keb-01j-stratigrafi-skala-waktu-campur.md`
- [ ] `osn-sma-keb-01j-stratigrafi-skala-waktu-mudah.md`
- [ ] `osn-sma-keb-01j-stratigrafi-skala-waktu-sedang.md`
- [ ] `osn-sma-keb-01j-stratigrafi-skala-waktu-sulit.md`
- [ ] `osn-sma-keb-01j-stratigrafi-skala-waktu-mudah-sedang.md`
- [ ] `osn-sma-keb-01j-stratigrafi-skala-waktu-sedang-sulit.md`

### KEB-02 · Meteorologi & Klimatologi (10 sub-bab)

**KEB-02a · Komposisi & Lapisan Atmosfer** (fokus Kab)
- [ ] `osn-sma-keb-02a-lapisan-atmosfer-campur.md`
- [ ] `osn-sma-keb-02a-lapisan-atmosfer-mudah.md`
- [ ] `osn-sma-keb-02a-lapisan-atmosfer-sedang.md`
- [ ] `osn-sma-keb-02a-lapisan-atmosfer-sulit.md`
- [ ] `osn-sma-keb-02a-lapisan-atmosfer-mudah-sedang.md`
- [ ] `osn-sma-keb-02a-lapisan-atmosfer-sedang-sulit.md`

**KEB-02b · Tekanan & Suhu Atmosfer** (fokus Kab–Prov)
- [ ] `osn-sma-keb-02b-tekanan-suhu-atmosfer-campur.md`
- [ ] `osn-sma-keb-02b-tekanan-suhu-atmosfer-mudah.md`
- [ ] `osn-sma-keb-02b-tekanan-suhu-atmosfer-sedang.md`
- [ ] `osn-sma-keb-02b-tekanan-suhu-atmosfer-sulit.md`
- [ ] `osn-sma-keb-02b-tekanan-suhu-atmosfer-mudah-sedang.md`
- [ ] `osn-sma-keb-02b-tekanan-suhu-atmosfer-sedang-sulit.md`

**KEB-02c · Kelembaban & Uap Air** (fokus Kab–Prov)
- [ ] `osn-sma-keb-02c-kelembaban-uap-air-campur.md`
- [ ] `osn-sma-keb-02c-kelembaban-uap-air-mudah.md`
- [ ] `osn-sma-keb-02c-kelembaban-uap-air-sedang.md`
- [ ] `osn-sma-keb-02c-kelembaban-uap-air-sulit.md`
- [ ] `osn-sma-keb-02c-kelembaban-uap-air-mudah-sedang.md`
- [ ] `osn-sma-keb-02c-kelembaban-uap-air-sedang-sulit.md`

**KEB-02d · Awan (Klasifikasi & Pembentukan)** (fokus Kab)
- [ ] `osn-sma-keb-02d-awan-campur.md`
- [ ] `osn-sma-keb-02d-awan-mudah.md`
- [ ] `osn-sma-keb-02d-awan-sedang.md`
- [ ] `osn-sma-keb-02d-awan-sulit.md`
- [ ] `osn-sma-keb-02d-awan-mudah-sedang.md`
- [ ] `osn-sma-keb-02d-awan-sedang-sulit.md`

**KEB-02e · Presipitasi (Hujan, Salju, Hail)** (fokus Kab)
- [ ] `osn-sma-keb-02e-presipitasi-campur.md`
- [ ] `osn-sma-keb-02e-presipitasi-mudah.md`
- [ ] `osn-sma-keb-02e-presipitasi-sedang.md`
- [ ] `osn-sma-keb-02e-presipitasi-sulit.md`
- [ ] `osn-sma-keb-02e-presipitasi-mudah-sedang.md`
- [ ] `osn-sma-keb-02e-presipitasi-sedang-sulit.md`

**KEB-02f · Angin & Sirkulasi Atmosfer Global** (fokus Prov)
- [ ] `osn-sma-keb-02f-sirkulasi-global-campur.md`
- [ ] `osn-sma-keb-02f-sirkulasi-global-mudah.md`
- [ ] `osn-sma-keb-02f-sirkulasi-global-sedang.md`
- [ ] `osn-sma-keb-02f-sirkulasi-global-sulit.md`
- [ ] `osn-sma-keb-02f-sirkulasi-global-mudah-sedang.md`
- [ ] `osn-sma-keb-02f-sirkulasi-global-sedang-sulit.md`

**KEB-02g · Massa Udara & Front Cuaca** (fokus Prov)
- [ ] `osn-sma-keb-02g-massa-udara-front-campur.md`
- [ ] `osn-sma-keb-02g-massa-udara-front-mudah.md`
- [ ] `osn-sma-keb-02g-massa-udara-front-sedang.md`
- [ ] `osn-sma-keb-02g-massa-udara-front-sulit.md`
- [ ] `osn-sma-keb-02g-massa-udara-front-mudah-sedang.md`
- [ ] `osn-sma-keb-02g-massa-udara-front-sedang-sulit.md`

**KEB-02h · Siklon, Antisiklon, Badai** (fokus Prov–Nas)
- [ ] `osn-sma-keb-02h-siklon-badai-campur.md`
- [ ] `osn-sma-keb-02h-siklon-badai-mudah.md`
- [ ] `osn-sma-keb-02h-siklon-badai-sedang.md`
- [ ] `osn-sma-keb-02h-siklon-badai-sulit.md`
- [ ] `osn-sma-keb-02h-siklon-badai-mudah-sedang.md`
- [ ] `osn-sma-keb-02h-siklon-badai-sedang-sulit.md`

**KEB-02i · Klasifikasi Iklim (Koppen)** (fokus Prov)
- [ ] `osn-sma-keb-02i-koppen-campur.md`
- [ ] `osn-sma-keb-02i-koppen-mudah.md`
- [ ] `osn-sma-keb-02i-koppen-sedang.md`
- [ ] `osn-sma-keb-02i-koppen-sulit.md`
- [ ] `osn-sma-keb-02i-koppen-mudah-sedang.md`
- [ ] `osn-sma-keb-02i-koppen-sedang-sulit.md`

**KEB-02j · Perubahan Iklim & Pemanasan Global** (fokus Kab–Prov)
- [ ] `osn-sma-keb-02j-pemanasan-global-campur.md`
- [ ] `osn-sma-keb-02j-pemanasan-global-mudah.md`
- [ ] `osn-sma-keb-02j-pemanasan-global-sedang.md`
- [ ] `osn-sma-keb-02j-pemanasan-global-sulit.md`
- [ ] `osn-sma-keb-02j-pemanasan-global-mudah-sedang.md`
- [ ] `osn-sma-keb-02j-pemanasan-global-sedang-sulit.md`

### KEB-03 · Oseanografi (9 sub-bab)

**KEB-03a · Sifat Fisik & Kimia Air Laut** (fokus Kab–Prov)
- [ ] `osn-sma-keb-03a-sifat-air-laut-campur.md`
- [ ] `osn-sma-keb-03a-sifat-air-laut-mudah.md`
- [ ] `osn-sma-keb-03a-sifat-air-laut-sedang.md`
- [ ] `osn-sma-keb-03a-sifat-air-laut-sulit.md`
- [ ] `osn-sma-keb-03a-sifat-air-laut-mudah-sedang.md`
- [ ] `osn-sma-keb-03a-sifat-air-laut-sedang-sulit.md`

**KEB-03b · Salinitas & Densitas Air Laut** (fokus Prov)
- [ ] `osn-sma-keb-03b-salinitas-densitas-campur.md`
- [ ] `osn-sma-keb-03b-salinitas-densitas-mudah.md`
- [ ] `osn-sma-keb-03b-salinitas-densitas-sedang.md`
- [ ] `osn-sma-keb-03b-salinitas-densitas-sulit.md`
- [ ] `osn-sma-keb-03b-salinitas-densitas-mudah-sedang.md`
- [ ] `osn-sma-keb-03b-salinitas-densitas-sedang-sulit.md`

**KEB-03c · Suhu Laut & Termoklin** (fokus Prov)
- [ ] `osn-sma-keb-03c-suhu-termoklin-campur.md`
- [ ] `osn-sma-keb-03c-suhu-termoklin-mudah.md`
- [ ] `osn-sma-keb-03c-suhu-termoklin-sedang.md`
- [ ] `osn-sma-keb-03c-suhu-termoklin-sulit.md`
- [ ] `osn-sma-keb-03c-suhu-termoklin-mudah-sedang.md`
- [ ] `osn-sma-keb-03c-suhu-termoklin-sedang-sulit.md`

**KEB-03d · Arus Laut (Permukaan & Dalam)** (fokus Prov)
- [ ] `osn-sma-keb-03d-arus-laut-campur.md`
- [ ] `osn-sma-keb-03d-arus-laut-mudah.md`
- [ ] `osn-sma-keb-03d-arus-laut-sedang.md`
- [ ] `osn-sma-keb-03d-arus-laut-sulit.md`
- [ ] `osn-sma-keb-03d-arus-laut-mudah-sedang.md`
- [ ] `osn-sma-keb-03d-arus-laut-sedang-sulit.md`

**KEB-03e · Gelombang Laut & Pembentukan** (fokus Prov)
- [ ] `osn-sma-keb-03e-gelombang-laut-campur.md`
- [ ] `osn-sma-keb-03e-gelombang-laut-mudah.md`
- [ ] `osn-sma-keb-03e-gelombang-laut-sedang.md`
- [ ] `osn-sma-keb-03e-gelombang-laut-sulit.md`
- [ ] `osn-sma-keb-03e-gelombang-laut-mudah-sedang.md`
- [ ] `osn-sma-keb-03e-gelombang-laut-sedang-sulit.md`

**KEB-03f · Pasang Surut & Penyebab** (fokus Kab–Prov)
- [ ] `osn-sma-keb-03f-pasang-surut-campur.md`
- [ ] `osn-sma-keb-03f-pasang-surut-mudah.md`
- [ ] `osn-sma-keb-03f-pasang-surut-sedang.md`
- [ ] `osn-sma-keb-03f-pasang-surut-sulit.md`
- [ ] `osn-sma-keb-03f-pasang-surut-mudah-sedang.md`
- [ ] `osn-sma-keb-03f-pasang-surut-sedang-sulit.md`

**KEB-03g · Topografi Dasar Laut** (fokus Kab)
- [ ] `osn-sma-keb-03g-topografi-dasar-laut-campur.md`
- [ ] `osn-sma-keb-03g-topografi-dasar-laut-mudah.md`
- [ ] `osn-sma-keb-03g-topografi-dasar-laut-sedang.md`
- [ ] `osn-sma-keb-03g-topografi-dasar-laut-sulit.md`
- [ ] `osn-sma-keb-03g-topografi-dasar-laut-mudah-sedang.md`
- [ ] `osn-sma-keb-03g-topografi-dasar-laut-sedang-sulit.md`

**KEB-03h · Ekosistem Laut (Pengantar)** (fokus Kab)
- [ ] `osn-sma-keb-03h-ekosistem-laut-campur.md`
- [ ] `osn-sma-keb-03h-ekosistem-laut-mudah.md`
- [ ] `osn-sma-keb-03h-ekosistem-laut-sedang.md`
- [ ] `osn-sma-keb-03h-ekosistem-laut-sulit.md`
- [ ] `osn-sma-keb-03h-ekosistem-laut-mudah-sedang.md`
- [ ] `osn-sma-keb-03h-ekosistem-laut-sedang-sulit.md`

**KEB-03i · El Niño & La Niña** (fokus Prov–Nas)
- [ ] `osn-sma-keb-03i-el-nino-la-nina-campur.md`
- [ ] `osn-sma-keb-03i-el-nino-la-nina-mudah.md`
- [ ] `osn-sma-keb-03i-el-nino-la-nina-sedang.md`
- [ ] `osn-sma-keb-03i-el-nino-la-nina-sulit.md`
- [ ] `osn-sma-keb-03i-el-nino-la-nina-mudah-sedang.md`
- [ ] `osn-sma-keb-03i-el-nino-la-nina-sedang-sulit.md`

### KEB-04 · Astronomi Kebumian (8 sub-bab)

**KEB-04a · Gerak Bumi (Rotasi, Revolusi)** (fokus Kab)
- [ ] `osn-sma-keb-04a-rotasi-revolusi-bumi-campur.md`
- [ ] `osn-sma-keb-04a-rotasi-revolusi-bumi-mudah.md`
- [ ] `osn-sma-keb-04a-rotasi-revolusi-bumi-sedang.md`
- [ ] `osn-sma-keb-04a-rotasi-revolusi-bumi-sulit.md`
- [ ] `osn-sma-keb-04a-rotasi-revolusi-bumi-mudah-sedang.md`
- [ ] `osn-sma-keb-04a-rotasi-revolusi-bumi-sedang-sulit.md`

**KEB-04b · Kemiringan Sumbu Bumi & Musim** (fokus Kab–Prov)
- [ ] `osn-sma-keb-04b-kemiringan-musim-campur.md`
- [ ] `osn-sma-keb-04b-kemiringan-musim-mudah.md`
- [ ] `osn-sma-keb-04b-kemiringan-musim-sedang.md`
- [ ] `osn-sma-keb-04b-kemiringan-musim-sulit.md`
- [ ] `osn-sma-keb-04b-kemiringan-musim-mudah-sedang.md`
- [ ] `osn-sma-keb-04b-kemiringan-musim-sedang-sulit.md`

**KEB-04c · Gerak Bulan & Fase Bulan** (fokus Kab)
- [ ] `osn-sma-keb-04c-gerak-fase-bulan-campur.md`
- [ ] `osn-sma-keb-04c-gerak-fase-bulan-mudah.md`
- [ ] `osn-sma-keb-04c-gerak-fase-bulan-sedang.md`
- [ ] `osn-sma-keb-04c-gerak-fase-bulan-sulit.md`
- [ ] `osn-sma-keb-04c-gerak-fase-bulan-mudah-sedang.md`
- [ ] `osn-sma-keb-04c-gerak-fase-bulan-sedang-sulit.md`

**KEB-04d · Gerhana Matahari & Bulan** (fokus Kab–Prov)
- [ ] `osn-sma-keb-04d-gerhana-campur.md`
- [ ] `osn-sma-keb-04d-gerhana-mudah.md`
- [ ] `osn-sma-keb-04d-gerhana-sedang.md`
- [ ] `osn-sma-keb-04d-gerhana-sulit.md`
- [ ] `osn-sma-keb-04d-gerhana-mudah-sedang.md`
- [ ] `osn-sma-keb-04d-gerhana-sedang-sulit.md`

**KEB-04e · Penanggalan & Sistem Kalender** (fokus Kab–Prov)
- [ ] `osn-sma-keb-04e-penanggalan-kalender-campur.md`
- [ ] `osn-sma-keb-04e-penanggalan-kalender-mudah.md`
- [ ] `osn-sma-keb-04e-penanggalan-kalender-sedang.md`
- [ ] `osn-sma-keb-04e-penanggalan-kalender-sulit.md`
- [ ] `osn-sma-keb-04e-penanggalan-kalender-mudah-sedang.md`
- [ ] `osn-sma-keb-04e-penanggalan-kalender-sedang-sulit.md`

**KEB-04f · Posisi Bumi di Tata Surya** (fokus Kab)
- [ ] `osn-sma-keb-04f-posisi-bumi-campur.md`
- [ ] `osn-sma-keb-04f-posisi-bumi-mudah.md`
- [ ] `osn-sma-keb-04f-posisi-bumi-sedang.md`
- [ ] `osn-sma-keb-04f-posisi-bumi-sulit.md`
- [ ] `osn-sma-keb-04f-posisi-bumi-mudah-sedang.md`
- [ ] `osn-sma-keb-04f-posisi-bumi-sedang-sulit.md`

**KEB-04g · Pasang Surut Laut (Penyebab Bulan-Matahari)** (fokus Prov)
- [ ] `osn-sma-keb-04g-pasut-bulan-matahari-campur.md`
- [ ] `osn-sma-keb-04g-pasut-bulan-matahari-mudah.md`
- [ ] `osn-sma-keb-04g-pasut-bulan-matahari-sedang.md`
- [ ] `osn-sma-keb-04g-pasut-bulan-matahari-sulit.md`
- [ ] `osn-sma-keb-04g-pasut-bulan-matahari-mudah-sedang.md`
- [ ] `osn-sma-keb-04g-pasut-bulan-matahari-sedang-sulit.md`

**KEB-04h · Pengaruh Aktivitas Matahari pada Bumi** (fokus Prov)
- [ ] `osn-sma-keb-04h-aktivitas-matahari-bumi-campur.md`
- [ ] `osn-sma-keb-04h-aktivitas-matahari-bumi-mudah.md`
- [ ] `osn-sma-keb-04h-aktivitas-matahari-bumi-sedang.md`
- [ ] `osn-sma-keb-04h-aktivitas-matahari-bumi-sulit.md`
- [ ] `osn-sma-keb-04h-aktivitas-matahari-bumi-mudah-sedang.md`
- [ ] `osn-sma-keb-04h-aktivitas-matahari-bumi-sedang-sulit.md`

### KEB-05 · Hidrologi & Sumber Daya Air (7 sub-bab)

**KEB-05a · Siklus Hidrologi** (fokus Kab)
- [ ] `osn-sma-keb-05a-siklus-hidrologi-campur.md`
- [ ] `osn-sma-keb-05a-siklus-hidrologi-mudah.md`
- [ ] `osn-sma-keb-05a-siklus-hidrologi-sedang.md`
- [ ] `osn-sma-keb-05a-siklus-hidrologi-sulit.md`
- [ ] `osn-sma-keb-05a-siklus-hidrologi-mudah-sedang.md`
- [ ] `osn-sma-keb-05a-siklus-hidrologi-sedang-sulit.md`

**KEB-05b · Air Permukaan (Sungai, Danau)** (fokus Kab)
- [ ] `osn-sma-keb-05b-air-permukaan-campur.md`
- [ ] `osn-sma-keb-05b-air-permukaan-mudah.md`
- [ ] `osn-sma-keb-05b-air-permukaan-sedang.md`
- [ ] `osn-sma-keb-05b-air-permukaan-sulit.md`
- [ ] `osn-sma-keb-05b-air-permukaan-mudah-sedang.md`
- [ ] `osn-sma-keb-05b-air-permukaan-sedang-sulit.md`

**KEB-05c · Air Tanah (Akuifer, Mata Air)** (fokus Prov)
- [ ] `osn-sma-keb-05c-air-tanah-akuifer-campur.md`
- [ ] `osn-sma-keb-05c-air-tanah-akuifer-mudah.md`
- [ ] `osn-sma-keb-05c-air-tanah-akuifer-sedang.md`
- [ ] `osn-sma-keb-05c-air-tanah-akuifer-sulit.md`
- [ ] `osn-sma-keb-05c-air-tanah-akuifer-mudah-sedang.md`
- [ ] `osn-sma-keb-05c-air-tanah-akuifer-sedang-sulit.md`

**KEB-05d · Daerah Aliran Sungai (DAS)** (fokus Prov)
- [ ] `osn-sma-keb-05d-das-campur.md`
- [ ] `osn-sma-keb-05d-das-mudah.md`
- [ ] `osn-sma-keb-05d-das-sedang.md`
- [ ] `osn-sma-keb-05d-das-sulit.md`
- [ ] `osn-sma-keb-05d-das-mudah-sedang.md`
- [ ] `osn-sma-keb-05d-das-sedang-sulit.md`

**KEB-05e · Erosi & Sedimentasi** (fokus Kab–Prov)
- [ ] `osn-sma-keb-05e-erosi-sedimentasi-campur.md`
- [ ] `osn-sma-keb-05e-erosi-sedimentasi-mudah.md`
- [ ] `osn-sma-keb-05e-erosi-sedimentasi-sedang.md`
- [ ] `osn-sma-keb-05e-erosi-sedimentasi-sulit.md`
- [ ] `osn-sma-keb-05e-erosi-sedimentasi-mudah-sedang.md`
- [ ] `osn-sma-keb-05e-erosi-sedimentasi-sedang-sulit.md`

**KEB-05f · Pengelolaan Sumber Daya Air** (fokus Prov)
- [ ] `osn-sma-keb-05f-pengelolaan-air-campur.md`
- [ ] `osn-sma-keb-05f-pengelolaan-air-mudah.md`
- [ ] `osn-sma-keb-05f-pengelolaan-air-sedang.md`
- [ ] `osn-sma-keb-05f-pengelolaan-air-sulit.md`
- [ ] `osn-sma-keb-05f-pengelolaan-air-mudah-sedang.md`
- [ ] `osn-sma-keb-05f-pengelolaan-air-sedang-sulit.md`

**KEB-05g · Banjir & Kekeringan** (fokus Kab–Prov)
- [ ] `osn-sma-keb-05g-banjir-kekeringan-campur.md`
- [ ] `osn-sma-keb-05g-banjir-kekeringan-mudah.md`
- [ ] `osn-sma-keb-05g-banjir-kekeringan-sedang.md`
- [ ] `osn-sma-keb-05g-banjir-kekeringan-sulit.md`
- [ ] `osn-sma-keb-05g-banjir-kekeringan-mudah-sedang.md`
- [ ] `osn-sma-keb-05g-banjir-kekeringan-sedang-sulit.md`

### KEB-06 · Mitigasi Bencana Alam & Geologi Lingkungan (8 sub-bab)

**KEB-06a · Gempa Bumi - Mitigasi & Tanggap Darurat** (fokus Kab–Prov)
- [ ] `osn-sma-keb-06a-mitigasi-gempa-campur.md`
- [ ] `osn-sma-keb-06a-mitigasi-gempa-mudah.md`
- [ ] `osn-sma-keb-06a-mitigasi-gempa-sedang.md`
- [ ] `osn-sma-keb-06a-mitigasi-gempa-sulit.md`
- [ ] `osn-sma-keb-06a-mitigasi-gempa-mudah-sedang.md`
- [ ] `osn-sma-keb-06a-mitigasi-gempa-sedang-sulit.md`

**KEB-06b · Tsunami - Penyebab & Mitigasi** (fokus Prov)
- [ ] `osn-sma-keb-06b-tsunami-campur.md`
- [ ] `osn-sma-keb-06b-tsunami-mudah.md`
- [ ] `osn-sma-keb-06b-tsunami-sedang.md`
- [ ] `osn-sma-keb-06b-tsunami-sulit.md`
- [ ] `osn-sma-keb-06b-tsunami-mudah-sedang.md`
- [ ] `osn-sma-keb-06b-tsunami-sedang-sulit.md`

**KEB-06c · Letusan Gunung Api - Mitigasi** (fokus Kab–Prov)
- [ ] `osn-sma-keb-06c-mitigasi-vulkanik-campur.md`
- [ ] `osn-sma-keb-06c-mitigasi-vulkanik-mudah.md`
- [ ] `osn-sma-keb-06c-mitigasi-vulkanik-sedang.md`
- [ ] `osn-sma-keb-06c-mitigasi-vulkanik-sulit.md`
- [ ] `osn-sma-keb-06c-mitigasi-vulkanik-mudah-sedang.md`
- [ ] `osn-sma-keb-06c-mitigasi-vulkanik-sedang-sulit.md`

**KEB-06d · Tanah Longsor - Penyebab & Mitigasi** (fokus Kab)
- [ ] `osn-sma-keb-06d-longsor-campur.md`
- [ ] `osn-sma-keb-06d-longsor-mudah.md`
- [ ] `osn-sma-keb-06d-longsor-sedang.md`
- [ ] `osn-sma-keb-06d-longsor-sulit.md`
- [ ] `osn-sma-keb-06d-longsor-mudah-sedang.md`
- [ ] `osn-sma-keb-06d-longsor-sedang-sulit.md`

**KEB-06e · Banjir & Mitigasi** (fokus Kab)
- [ ] `osn-sma-keb-06e-mitigasi-banjir-campur.md`
- [ ] `osn-sma-keb-06e-mitigasi-banjir-mudah.md`
- [ ] `osn-sma-keb-06e-mitigasi-banjir-sedang.md`
- [ ] `osn-sma-keb-06e-mitigasi-banjir-sulit.md`
- [ ] `osn-sma-keb-06e-mitigasi-banjir-mudah-sedang.md`
- [ ] `osn-sma-keb-06e-mitigasi-banjir-sedang-sulit.md`

**KEB-06f · Pencemaran Tanah & Air** (fokus Kab)
- [ ] `osn-sma-keb-06f-pencemaran-tanah-air-campur.md`
- [ ] `osn-sma-keb-06f-pencemaran-tanah-air-mudah.md`
- [ ] `osn-sma-keb-06f-pencemaran-tanah-air-sedang.md`
- [ ] `osn-sma-keb-06f-pencemaran-tanah-air-sulit.md`
- [ ] `osn-sma-keb-06f-pencemaran-tanah-air-mudah-sedang.md`
- [ ] `osn-sma-keb-06f-pencemaran-tanah-air-sedang-sulit.md`

**KEB-06g · Eksploitasi Sumber Daya Mineral** (fokus Prov)
- [ ] `osn-sma-keb-06g-eksploitasi-mineral-campur.md`
- [ ] `osn-sma-keb-06g-eksploitasi-mineral-mudah.md`
- [ ] `osn-sma-keb-06g-eksploitasi-mineral-sedang.md`
- [ ] `osn-sma-keb-06g-eksploitasi-mineral-sulit.md`
- [ ] `osn-sma-keb-06g-eksploitasi-mineral-mudah-sedang.md`
- [ ] `osn-sma-keb-06g-eksploitasi-mineral-sedang-sulit.md`

**KEB-06h · Pemetaan Risiko Bencana (Pengantar SIG)** (fokus Prov)
- [ ] `osn-sma-keb-06h-pemetaan-risiko-sig-campur.md`
- [ ] `osn-sma-keb-06h-pemetaan-risiko-sig-mudah.md`
- [ ] `osn-sma-keb-06h-pemetaan-risiko-sig-sedang.md`
- [ ] `osn-sma-keb-06h-pemetaan-risiko-sig-sulit.md`
- [ ] `osn-sma-keb-06h-pemetaan-risiko-sig-mudah-sedang.md`
- [ ] `osn-sma-keb-06h-pemetaan-risiko-sig-sedang-sulit.md`

---

## G · Geografi Per Sub-Bab (43 sub-bab × 6 = 258 file)

### GEO-01 · Pengetahuan Dasar Geografi, Peta & Penginderaan Jauh (7 sub-bab)

**GEO-01a · Konsep Esensial Geografi** (fokus Kab)
- [ ] `osn-sma-geo-01a-konsep-esensial-campur.md`
- [ ] `osn-sma-geo-01a-konsep-esensial-mudah.md`
- [ ] `osn-sma-geo-01a-konsep-esensial-sedang.md`
- [ ] `osn-sma-geo-01a-konsep-esensial-sulit.md`
- [ ] `osn-sma-geo-01a-konsep-esensial-mudah-sedang.md`
- [ ] `osn-sma-geo-01a-konsep-esensial-sedang-sulit.md`

**GEO-01b · Prinsip & Pendekatan Geografi** (fokus Kab)
- [ ] `osn-sma-geo-01b-prinsip-pendekatan-campur.md`
- [ ] `osn-sma-geo-01b-prinsip-pendekatan-mudah.md`
- [ ] `osn-sma-geo-01b-prinsip-pendekatan-sedang.md`
- [ ] `osn-sma-geo-01b-prinsip-pendekatan-sulit.md`
- [ ] `osn-sma-geo-01b-prinsip-pendekatan-mudah-sedang.md`
- [ ] `osn-sma-geo-01b-prinsip-pendekatan-sedang-sulit.md`

**GEO-01c · Objek & Aspek Geografi** (fokus Kab)
- [ ] `osn-sma-geo-01c-objek-aspek-campur.md`
- [ ] `osn-sma-geo-01c-objek-aspek-mudah.md`
- [ ] `osn-sma-geo-01c-objek-aspek-sedang.md`
- [ ] `osn-sma-geo-01c-objek-aspek-sulit.md`
- [ ] `osn-sma-geo-01c-objek-aspek-mudah-sedang.md`
- [ ] `osn-sma-geo-01c-objek-aspek-sedang-sulit.md`

**GEO-01d · Peta (Jenis, Komponen, Proyeksi)** (fokus Kab–Prov)
- [ ] `osn-sma-geo-01d-peta-proyeksi-campur.md`
- [ ] `osn-sma-geo-01d-peta-proyeksi-mudah.md`
- [ ] `osn-sma-geo-01d-peta-proyeksi-sedang.md`
- [ ] `osn-sma-geo-01d-peta-proyeksi-sulit.md`
- [ ] `osn-sma-geo-01d-peta-proyeksi-mudah-sedang.md`
- [ ] `osn-sma-geo-01d-peta-proyeksi-sedang-sulit.md`

**GEO-01e · Skala & Pengukuran Peta** (fokus Kab–Prov)
- [ ] `osn-sma-geo-01e-skala-pengukuran-campur.md`
- [ ] `osn-sma-geo-01e-skala-pengukuran-mudah.md`
- [ ] `osn-sma-geo-01e-skala-pengukuran-sedang.md`
- [ ] `osn-sma-geo-01e-skala-pengukuran-sulit.md`
- [ ] `osn-sma-geo-01e-skala-pengukuran-mudah-sedang.md`
- [ ] `osn-sma-geo-01e-skala-pengukuran-sedang-sulit.md`

**GEO-01f · Penginderaan Jauh (Konsep, Citra, Sensor)** (fokus Prov)
- [ ] `osn-sma-geo-01f-inderaja-konsep-campur.md`
- [ ] `osn-sma-geo-01f-inderaja-konsep-mudah.md`
- [ ] `osn-sma-geo-01f-inderaja-konsep-sedang.md`
- [ ] `osn-sma-geo-01f-inderaja-konsep-sulit.md`
- [ ] `osn-sma-geo-01f-inderaja-konsep-mudah-sedang.md`
- [ ] `osn-sma-geo-01f-inderaja-konsep-sedang-sulit.md`

**GEO-01g · Interpretasi Citra Penginderaan Jauh** (fokus Prov–Nas)
- [ ] `osn-sma-geo-01g-interpretasi-citra-campur.md`
- [ ] `osn-sma-geo-01g-interpretasi-citra-mudah.md`
- [ ] `osn-sma-geo-01g-interpretasi-citra-sedang.md`
- [ ] `osn-sma-geo-01g-interpretasi-citra-sulit.md`
- [ ] `osn-sma-geo-01g-interpretasi-citra-mudah-sedang.md`
- [ ] `osn-sma-geo-01g-interpretasi-citra-sedang-sulit.md`

### GEO-02 · Geografi Fisik (7 sub-bab)

**GEO-02a · Tata Surya & Pembentukan Bumi** (fokus Kab)
- [ ] `osn-sma-geo-02a-tata-surya-bumi-campur.md`
- [ ] `osn-sma-geo-02a-tata-surya-bumi-mudah.md`
- [ ] `osn-sma-geo-02a-tata-surya-bumi-sedang.md`
- [ ] `osn-sma-geo-02a-tata-surya-bumi-sulit.md`
- [ ] `osn-sma-geo-02a-tata-surya-bumi-mudah-sedang.md`
- [ ] `osn-sma-geo-02a-tata-surya-bumi-sedang-sulit.md`

**GEO-02b · Litosfer (Batuan, Tektonisme, Vulkanisme, Seisme)** (fokus Kab–Prov)
- [ ] `osn-sma-geo-02b-litosfer-campur.md`
- [ ] `osn-sma-geo-02b-litosfer-mudah.md`
- [ ] `osn-sma-geo-02b-litosfer-sedang.md`
- [ ] `osn-sma-geo-02b-litosfer-sulit.md`
- [ ] `osn-sma-geo-02b-litosfer-mudah-sedang.md`
- [ ] `osn-sma-geo-02b-litosfer-sedang-sulit.md`

**GEO-02c · Pedosfer (Tanah - Jenis & Erosi)** (fokus Kab–Prov)
- [ ] `osn-sma-geo-02c-pedosfer-campur.md`
- [ ] `osn-sma-geo-02c-pedosfer-mudah.md`
- [ ] `osn-sma-geo-02c-pedosfer-sedang.md`
- [ ] `osn-sma-geo-02c-pedosfer-sulit.md`
- [ ] `osn-sma-geo-02c-pedosfer-mudah-sedang.md`
- [ ] `osn-sma-geo-02c-pedosfer-sedang-sulit.md`

**GEO-02d · Atmosfer (Cuaca, Iklim, Awan, Angin)** (fokus Kab–Prov)
- [ ] `osn-sma-geo-02d-atmosfer-campur.md`
- [ ] `osn-sma-geo-02d-atmosfer-mudah.md`
- [ ] `osn-sma-geo-02d-atmosfer-sedang.md`
- [ ] `osn-sma-geo-02d-atmosfer-sulit.md`
- [ ] `osn-sma-geo-02d-atmosfer-mudah-sedang.md`
- [ ] `osn-sma-geo-02d-atmosfer-sedang-sulit.md`

**GEO-02e · Hidrosfer (Perairan Darat & Laut)** (fokus Kab–Prov)
- [ ] `osn-sma-geo-02e-hidrosfer-campur.md`
- [ ] `osn-sma-geo-02e-hidrosfer-mudah.md`
- [ ] `osn-sma-geo-02e-hidrosfer-sedang.md`
- [ ] `osn-sma-geo-02e-hidrosfer-sulit.md`
- [ ] `osn-sma-geo-02e-hidrosfer-mudah-sedang.md`
- [ ] `osn-sma-geo-02e-hidrosfer-sedang-sulit.md`

**GEO-02f · Biosfer (Flora-Fauna Persebaran)** (fokus Kab)
- [ ] `osn-sma-geo-02f-biosfer-campur.md`
- [ ] `osn-sma-geo-02f-biosfer-mudah.md`
- [ ] `osn-sma-geo-02f-biosfer-sedang.md`
- [ ] `osn-sma-geo-02f-biosfer-sulit.md`
- [ ] `osn-sma-geo-02f-biosfer-mudah-sedang.md`
- [ ] `osn-sma-geo-02f-biosfer-sedang-sulit.md`

**GEO-02g · Antroposfer (Lingkungan Manusia)** (fokus Kab–Prov)
- [ ] `osn-sma-geo-02g-antroposfer-campur.md`
- [ ] `osn-sma-geo-02g-antroposfer-mudah.md`
- [ ] `osn-sma-geo-02g-antroposfer-sedang.md`
- [ ] `osn-sma-geo-02g-antroposfer-sulit.md`
- [ ] `osn-sma-geo-02g-antroposfer-mudah-sedang.md`
- [ ] `osn-sma-geo-02g-antroposfer-sedang-sulit.md`

### GEO-03 · Geografi Manusia (7 sub-bab)

**GEO-03a · Dinamika Penduduk (Kelahiran, Kematian)** (fokus Kab)
- [ ] `osn-sma-geo-03a-dinamika-penduduk-campur.md`
- [ ] `osn-sma-geo-03a-dinamika-penduduk-mudah.md`
- [ ] `osn-sma-geo-03a-dinamika-penduduk-sedang.md`
- [ ] `osn-sma-geo-03a-dinamika-penduduk-sulit.md`
- [ ] `osn-sma-geo-03a-dinamika-penduduk-mudah-sedang.md`
- [ ] `osn-sma-geo-03a-dinamika-penduduk-sedang-sulit.md`

**GEO-03b · Komposisi Penduduk (Piramida)** (fokus Kab–Prov)
- [ ] `osn-sma-geo-03b-piramida-penduduk-campur.md`
- [ ] `osn-sma-geo-03b-piramida-penduduk-mudah.md`
- [ ] `osn-sma-geo-03b-piramida-penduduk-sedang.md`
- [ ] `osn-sma-geo-03b-piramida-penduduk-sulit.md`
- [ ] `osn-sma-geo-03b-piramida-penduduk-mudah-sedang.md`
- [ ] `osn-sma-geo-03b-piramida-penduduk-sedang-sulit.md`

**GEO-03c · Migrasi (Jenis, Faktor, Dampak)** (fokus Kab–Prov)
- [ ] `osn-sma-geo-03c-migrasi-campur.md`
- [ ] `osn-sma-geo-03c-migrasi-mudah.md`
- [ ] `osn-sma-geo-03c-migrasi-sedang.md`
- [ ] `osn-sma-geo-03c-migrasi-sulit.md`
- [ ] `osn-sma-geo-03c-migrasi-mudah-sedang.md`
- [ ] `osn-sma-geo-03c-migrasi-sedang-sulit.md`

**GEO-03d · Permukiman (Pola, Klasifikasi)** (fokus Kab)
- [ ] `osn-sma-geo-03d-permukiman-campur.md`
- [ ] `osn-sma-geo-03d-permukiman-mudah.md`
- [ ] `osn-sma-geo-03d-permukiman-sedang.md`
- [ ] `osn-sma-geo-03d-permukiman-sulit.md`
- [ ] `osn-sma-geo-03d-permukiman-mudah-sedang.md`
- [ ] `osn-sma-geo-03d-permukiman-sedang-sulit.md`

**GEO-03e · Urbanisasi & Kota** (fokus Kab–Prov)
- [ ] `osn-sma-geo-03e-urbanisasi-kota-campur.md`
- [ ] `osn-sma-geo-03e-urbanisasi-kota-mudah.md`
- [ ] `osn-sma-geo-03e-urbanisasi-kota-sedang.md`
- [ ] `osn-sma-geo-03e-urbanisasi-kota-sulit.md`
- [ ] `osn-sma-geo-03e-urbanisasi-kota-mudah-sedang.md`
- [ ] `osn-sma-geo-03e-urbanisasi-kota-sedang-sulit.md`

**GEO-03f · Desa (Klasifikasi, Pola)** (fokus Kab)
- [ ] `osn-sma-geo-03f-desa-campur.md`
- [ ] `osn-sma-geo-03f-desa-mudah.md`
- [ ] `osn-sma-geo-03f-desa-sedang.md`
- [ ] `osn-sma-geo-03f-desa-sulit.md`
- [ ] `osn-sma-geo-03f-desa-mudah-sedang.md`
- [ ] `osn-sma-geo-03f-desa-sedang-sulit.md`

**GEO-03g · Interaksi Desa-Kota** (fokus Prov)
- [ ] `osn-sma-geo-03g-interaksi-desa-kota-campur.md`
- [ ] `osn-sma-geo-03g-interaksi-desa-kota-mudah.md`
- [ ] `osn-sma-geo-03g-interaksi-desa-kota-sedang.md`
- [ ] `osn-sma-geo-03g-interaksi-desa-kota-sulit.md`
- [ ] `osn-sma-geo-03g-interaksi-desa-kota-mudah-sedang.md`
- [ ] `osn-sma-geo-03g-interaksi-desa-kota-sedang-sulit.md`

### GEO-04 · Geografi Ekonomi (7 sub-bab)

**GEO-04a · Pertanian (Jenis, Pola, Lokasi)** (fokus Kab)
- [ ] `osn-sma-geo-04a-pertanian-campur.md`
- [ ] `osn-sma-geo-04a-pertanian-mudah.md`
- [ ] `osn-sma-geo-04a-pertanian-sedang.md`
- [ ] `osn-sma-geo-04a-pertanian-sulit.md`
- [ ] `osn-sma-geo-04a-pertanian-mudah-sedang.md`
- [ ] `osn-sma-geo-04a-pertanian-sedang-sulit.md`

**GEO-04b · Industri (Klasifikasi, Lokasi, Faktor)** (fokus Kab–Prov)
- [ ] `osn-sma-geo-04b-industri-campur.md`
- [ ] `osn-sma-geo-04b-industri-mudah.md`
- [ ] `osn-sma-geo-04b-industri-sedang.md`
- [ ] `osn-sma-geo-04b-industri-sulit.md`
- [ ] `osn-sma-geo-04b-industri-mudah-sedang.md`
- [ ] `osn-sma-geo-04b-industri-sedang-sulit.md`

**GEO-04c · Pertambangan & Sumber Daya Alam** (fokus Kab)
- [ ] `osn-sma-geo-04c-pertambangan-sda-campur.md`
- [ ] `osn-sma-geo-04c-pertambangan-sda-mudah.md`
- [ ] `osn-sma-geo-04c-pertambangan-sda-sedang.md`
- [ ] `osn-sma-geo-04c-pertambangan-sda-sulit.md`
- [ ] `osn-sma-geo-04c-pertambangan-sda-mudah-sedang.md`
- [ ] `osn-sma-geo-04c-pertambangan-sda-sedang-sulit.md`

**GEO-04d · Transportasi (Sistem, Jaringan)** (fokus Prov)
- [ ] `osn-sma-geo-04d-transportasi-campur.md`
- [ ] `osn-sma-geo-04d-transportasi-mudah.md`
- [ ] `osn-sma-geo-04d-transportasi-sedang.md`
- [ ] `osn-sma-geo-04d-transportasi-sulit.md`
- [ ] `osn-sma-geo-04d-transportasi-mudah-sedang.md`
- [ ] `osn-sma-geo-04d-transportasi-sedang-sulit.md`

**GEO-04e · Perdagangan & Pasar** (fokus Kab–Prov)
- [ ] `osn-sma-geo-04e-perdagangan-pasar-campur.md`
- [ ] `osn-sma-geo-04e-perdagangan-pasar-mudah.md`
- [ ] `osn-sma-geo-04e-perdagangan-pasar-sedang.md`
- [ ] `osn-sma-geo-04e-perdagangan-pasar-sulit.md`
- [ ] `osn-sma-geo-04e-perdagangan-pasar-mudah-sedang.md`
- [ ] `osn-sma-geo-04e-perdagangan-pasar-sedang-sulit.md`

**GEO-04f · Pariwisata** (fokus Kab)
- [ ] `osn-sma-geo-04f-pariwisata-campur.md`
- [ ] `osn-sma-geo-04f-pariwisata-mudah.md`
- [ ] `osn-sma-geo-04f-pariwisata-sedang.md`
- [ ] `osn-sma-geo-04f-pariwisata-sulit.md`
- [ ] `osn-sma-geo-04f-pariwisata-mudah-sedang.md`
- [ ] `osn-sma-geo-04f-pariwisata-sedang-sulit.md`

**GEO-04g · Pembangunan Wilayah & Tata Ruang** (fokus Prov–Nas)
- [ ] `osn-sma-geo-04g-pembangunan-wilayah-campur.md`
- [ ] `osn-sma-geo-04g-pembangunan-wilayah-mudah.md`
- [ ] `osn-sma-geo-04g-pembangunan-wilayah-sedang.md`
- [ ] `osn-sma-geo-04g-pembangunan-wilayah-sulit.md`
- [ ] `osn-sma-geo-04g-pembangunan-wilayah-mudah-sedang.md`
- [ ] `osn-sma-geo-04g-pembangunan-wilayah-sedang-sulit.md`

### GEO-05 · Geografi Regional Indonesia & Dunia (8 sub-bab)

**GEO-05a · Geografi Regional Sumatera & Kalimantan** (fokus Kab–Prov)
- [ ] `osn-sma-geo-05a-sumatera-kalimantan-campur.md`
- [ ] `osn-sma-geo-05a-sumatera-kalimantan-mudah.md`
- [ ] `osn-sma-geo-05a-sumatera-kalimantan-sedang.md`
- [ ] `osn-sma-geo-05a-sumatera-kalimantan-sulit.md`
- [ ] `osn-sma-geo-05a-sumatera-kalimantan-mudah-sedang.md`
- [ ] `osn-sma-geo-05a-sumatera-kalimantan-sedang-sulit.md`

**GEO-05b · Geografi Regional Jawa, Bali, Nusa Tenggara** (fokus Kab–Prov)
- [ ] `osn-sma-geo-05b-jawa-bali-nt-campur.md`
- [ ] `osn-sma-geo-05b-jawa-bali-nt-mudah.md`
- [ ] `osn-sma-geo-05b-jawa-bali-nt-sedang.md`
- [ ] `osn-sma-geo-05b-jawa-bali-nt-sulit.md`
- [ ] `osn-sma-geo-05b-jawa-bali-nt-mudah-sedang.md`
- [ ] `osn-sma-geo-05b-jawa-bali-nt-sedang-sulit.md`

**GEO-05c · Geografi Regional Sulawesi & Maluku-Papua** (fokus Kab–Prov)
- [ ] `osn-sma-geo-05c-sulawesi-maluku-papua-campur.md`
- [ ] `osn-sma-geo-05c-sulawesi-maluku-papua-mudah.md`
- [ ] `osn-sma-geo-05c-sulawesi-maluku-papua-sedang.md`
- [ ] `osn-sma-geo-05c-sulawesi-maluku-papua-sulit.md`
- [ ] `osn-sma-geo-05c-sulawesi-maluku-papua-mudah-sedang.md`
- [ ] `osn-sma-geo-05c-sulawesi-maluku-papua-sedang-sulit.md`

**GEO-05d · Geografi Regional Asia** (fokus Prov)
- [ ] `osn-sma-geo-05d-asia-campur.md`
- [ ] `osn-sma-geo-05d-asia-mudah.md`
- [ ] `osn-sma-geo-05d-asia-sedang.md`
- [ ] `osn-sma-geo-05d-asia-sulit.md`
- [ ] `osn-sma-geo-05d-asia-mudah-sedang.md`
- [ ] `osn-sma-geo-05d-asia-sedang-sulit.md`

**GEO-05e · Geografi Regional Eropa & Amerika** (fokus Prov)
- [ ] `osn-sma-geo-05e-eropa-amerika-campur.md`
- [ ] `osn-sma-geo-05e-eropa-amerika-mudah.md`
- [ ] `osn-sma-geo-05e-eropa-amerika-sedang.md`
- [ ] `osn-sma-geo-05e-eropa-amerika-sulit.md`
- [ ] `osn-sma-geo-05e-eropa-amerika-mudah-sedang.md`
- [ ] `osn-sma-geo-05e-eropa-amerika-sedang-sulit.md`

**GEO-05f · Geografi Regional Afrika & Oseania** (fokus Prov)
- [ ] `osn-sma-geo-05f-afrika-oseania-campur.md`
- [ ] `osn-sma-geo-05f-afrika-oseania-mudah.md`
- [ ] `osn-sma-geo-05f-afrika-oseania-sedang.md`
- [ ] `osn-sma-geo-05f-afrika-oseania-sulit.md`
- [ ] `osn-sma-geo-05f-afrika-oseania-mudah-sedang.md`
- [ ] `osn-sma-geo-05f-afrika-oseania-sedang-sulit.md`

**GEO-05g · ASEAN & Kerja Sama Regional** (fokus Kab–Prov)
- [ ] `osn-sma-geo-05g-asean-kerjasama-campur.md`
- [ ] `osn-sma-geo-05g-asean-kerjasama-mudah.md`
- [ ] `osn-sma-geo-05g-asean-kerjasama-sedang.md`
- [ ] `osn-sma-geo-05g-asean-kerjasama-sulit.md`
- [ ] `osn-sma-geo-05g-asean-kerjasama-mudah-sedang.md`
- [ ] `osn-sma-geo-05g-asean-kerjasama-sedang-sulit.md`

**GEO-05h · Negara Maju & Berkembang** (fokus Prov)
- [ ] `osn-sma-geo-05h-negara-maju-berkembang-campur.md`
- [ ] `osn-sma-geo-05h-negara-maju-berkembang-mudah.md`
- [ ] `osn-sma-geo-05h-negara-maju-berkembang-sedang.md`
- [ ] `osn-sma-geo-05h-negara-maju-berkembang-sulit.md`
- [ ] `osn-sma-geo-05h-negara-maju-berkembang-mudah-sedang.md`
- [ ] `osn-sma-geo-05h-negara-maju-berkembang-sedang-sulit.md`

### GEO-06 · SIG, Mitigasi & Pembangunan Berkelanjutan (7 sub-bab)

**GEO-06a · Konsep & Komponen SIG** (fokus Kab–Prov)
- [ ] `osn-sma-geo-06a-konsep-sig-campur.md`
- [ ] `osn-sma-geo-06a-konsep-sig-mudah.md`
- [ ] `osn-sma-geo-06a-konsep-sig-sedang.md`
- [ ] `osn-sma-geo-06a-konsep-sig-sulit.md`
- [ ] `osn-sma-geo-06a-konsep-sig-mudah-sedang.md`
- [ ] `osn-sma-geo-06a-konsep-sig-sedang-sulit.md`

**GEO-06b · Data SIG (Vektor & Raster)** (fokus Prov)
- [ ] `osn-sma-geo-06b-data-vektor-raster-campur.md`
- [ ] `osn-sma-geo-06b-data-vektor-raster-mudah.md`
- [ ] `osn-sma-geo-06b-data-vektor-raster-sedang.md`
- [ ] `osn-sma-geo-06b-data-vektor-raster-sulit.md`
- [ ] `osn-sma-geo-06b-data-vektor-raster-mudah-sedang.md`
- [ ] `osn-sma-geo-06b-data-vektor-raster-sedang-sulit.md`

**GEO-06c · Analisis Spasial SIG** (fokus Prov–Nas)
- [ ] `osn-sma-geo-06c-analisis-spasial-campur.md`
- [ ] `osn-sma-geo-06c-analisis-spasial-mudah.md`
- [ ] `osn-sma-geo-06c-analisis-spasial-sedang.md`
- [ ] `osn-sma-geo-06c-analisis-spasial-sulit.md`
- [ ] `osn-sma-geo-06c-analisis-spasial-mudah-sedang.md`
- [ ] `osn-sma-geo-06c-analisis-spasial-sedang-sulit.md`

**GEO-06d · Aplikasi SIG (Pemetaan, Mitigasi)** (fokus Prov)
- [ ] `osn-sma-geo-06d-aplikasi-sig-campur.md`
- [ ] `osn-sma-geo-06d-aplikasi-sig-mudah.md`
- [ ] `osn-sma-geo-06d-aplikasi-sig-sedang.md`
- [ ] `osn-sma-geo-06d-aplikasi-sig-sulit.md`
- [ ] `osn-sma-geo-06d-aplikasi-sig-mudah-sedang.md`
- [ ] `osn-sma-geo-06d-aplikasi-sig-sedang-sulit.md`

**GEO-06e · Mitigasi Bencana Berbasis Geografi** (fokus Kab–Prov)
- [ ] `osn-sma-geo-06e-mitigasi-bencana-geografi-campur.md`
- [ ] `osn-sma-geo-06e-mitigasi-bencana-geografi-mudah.md`
- [ ] `osn-sma-geo-06e-mitigasi-bencana-geografi-sedang.md`
- [ ] `osn-sma-geo-06e-mitigasi-bencana-geografi-sulit.md`
- [ ] `osn-sma-geo-06e-mitigasi-bencana-geografi-mudah-sedang.md`
- [ ] `osn-sma-geo-06e-mitigasi-bencana-geografi-sedang-sulit.md`

**GEO-06f · Pembangunan Berkelanjutan (SDGs)** (fokus Kab–Prov)
- [ ] `osn-sma-geo-06f-sdgs-campur.md`
- [ ] `osn-sma-geo-06f-sdgs-mudah.md`
- [ ] `osn-sma-geo-06f-sdgs-sedang.md`
- [ ] `osn-sma-geo-06f-sdgs-sulit.md`
- [ ] `osn-sma-geo-06f-sdgs-mudah-sedang.md`
- [ ] `osn-sma-geo-06f-sdgs-sedang-sulit.md`

**GEO-06g · Ketahanan Pangan & Energi** (fokus Prov)
- [ ] `osn-sma-geo-06g-ketahanan-pangan-energi-campur.md`
- [ ] `osn-sma-geo-06g-ketahanan-pangan-energi-mudah.md`
- [ ] `osn-sma-geo-06g-ketahanan-pangan-energi-sedang.md`
- [ ] `osn-sma-geo-06g-ketahanan-pangan-energi-sulit.md`
- [ ] `osn-sma-geo-06g-ketahanan-pangan-energi-mudah-sedang.md`
- [ ] `osn-sma-geo-06g-ketahanan-pangan-energi-sedang-sulit.md`

---

## H · Ekonomi Per Sub-Bab (64 sub-bab × 6 = 384 file)

### EKO-01 · Konsep Dasar Ekonomi & Permintaan-Penawaran (9 sub-bab)

**EKO-01a · Kebutuhan, Kelangkaan, Pilihan** (fokus Kab)
- [ ] `osn-sma-eko-01a-kebutuhan-kelangkaan-campur.md`
- [ ] `osn-sma-eko-01a-kebutuhan-kelangkaan-mudah.md`
- [ ] `osn-sma-eko-01a-kebutuhan-kelangkaan-sedang.md`
- [ ] `osn-sma-eko-01a-kebutuhan-kelangkaan-sulit.md`
- [ ] `osn-sma-eko-01a-kebutuhan-kelangkaan-mudah-sedang.md`
- [ ] `osn-sma-eko-01a-kebutuhan-kelangkaan-sedang-sulit.md`

**EKO-01b · Biaya Peluang (Opportunity Cost)** (fokus Kab–Prov)
- [ ] `osn-sma-eko-01b-biaya-peluang-campur.md`
- [ ] `osn-sma-eko-01b-biaya-peluang-mudah.md`
- [ ] `osn-sma-eko-01b-biaya-peluang-sedang.md`
- [ ] `osn-sma-eko-01b-biaya-peluang-sulit.md`
- [ ] `osn-sma-eko-01b-biaya-peluang-mudah-sedang.md`
- [ ] `osn-sma-eko-01b-biaya-peluang-sedang-sulit.md`

**EKO-01c · Sistem Ekonomi** (fokus Kab)
- [ ] `osn-sma-eko-01c-sistem-ekonomi-campur.md`
- [ ] `osn-sma-eko-01c-sistem-ekonomi-mudah.md`
- [ ] `osn-sma-eko-01c-sistem-ekonomi-sedang.md`
- [ ] `osn-sma-eko-01c-sistem-ekonomi-sulit.md`
- [ ] `osn-sma-eko-01c-sistem-ekonomi-mudah-sedang.md`
- [ ] `osn-sma-eko-01c-sistem-ekonomi-sedang-sulit.md`

**EKO-01d · Hukum Permintaan & Kurva Permintaan** (fokus Kab)
- [ ] `osn-sma-eko-01d-hukum-permintaan-campur.md`
- [ ] `osn-sma-eko-01d-hukum-permintaan-mudah.md`
- [ ] `osn-sma-eko-01d-hukum-permintaan-sedang.md`
- [ ] `osn-sma-eko-01d-hukum-permintaan-sulit.md`
- [ ] `osn-sma-eko-01d-hukum-permintaan-mudah-sedang.md`
- [ ] `osn-sma-eko-01d-hukum-permintaan-sedang-sulit.md`

**EKO-01e · Hukum Penawaran & Kurva Penawaran** (fokus Kab)
- [ ] `osn-sma-eko-01e-hukum-penawaran-campur.md`
- [ ] `osn-sma-eko-01e-hukum-penawaran-mudah.md`
- [ ] `osn-sma-eko-01e-hukum-penawaran-sedang.md`
- [ ] `osn-sma-eko-01e-hukum-penawaran-sulit.md`
- [ ] `osn-sma-eko-01e-hukum-penawaran-mudah-sedang.md`
- [ ] `osn-sma-eko-01e-hukum-penawaran-sedang-sulit.md`

**EKO-01f · Harga & Kuantitas Keseimbangan** (fokus Kab–Prov)
- [ ] `osn-sma-eko-01f-keseimbangan-pasar-campur.md`
- [ ] `osn-sma-eko-01f-keseimbangan-pasar-mudah.md`
- [ ] `osn-sma-eko-01f-keseimbangan-pasar-sedang.md`
- [ ] `osn-sma-eko-01f-keseimbangan-pasar-sulit.md`
- [ ] `osn-sma-eko-01f-keseimbangan-pasar-mudah-sedang.md`
- [ ] `osn-sma-eko-01f-keseimbangan-pasar-sedang-sulit.md`

**EKO-01g · Elastisitas Permintaan** (fokus Prov)
- [ ] `osn-sma-eko-01g-elastisitas-permintaan-campur.md`
- [ ] `osn-sma-eko-01g-elastisitas-permintaan-mudah.md`
- [ ] `osn-sma-eko-01g-elastisitas-permintaan-sedang.md`
- [ ] `osn-sma-eko-01g-elastisitas-permintaan-sulit.md`
- [ ] `osn-sma-eko-01g-elastisitas-permintaan-mudah-sedang.md`
- [ ] `osn-sma-eko-01g-elastisitas-permintaan-sedang-sulit.md`

**EKO-01h · Elastisitas Penawaran** (fokus Prov)
- [ ] `osn-sma-eko-01h-elastisitas-penawaran-campur.md`
- [ ] `osn-sma-eko-01h-elastisitas-penawaran-mudah.md`
- [ ] `osn-sma-eko-01h-elastisitas-penawaran-sedang.md`
- [ ] `osn-sma-eko-01h-elastisitas-penawaran-sulit.md`
- [ ] `osn-sma-eko-01h-elastisitas-penawaran-mudah-sedang.md`
- [ ] `osn-sma-eko-01h-elastisitas-penawaran-sedang-sulit.md`

**EKO-01i · Pergeseran Kurva (Faktor Non-Harga)** (fokus Prov)
- [ ] `osn-sma-eko-01i-pergeseran-kurva-campur.md`
- [ ] `osn-sma-eko-01i-pergeseran-kurva-mudah.md`
- [ ] `osn-sma-eko-01i-pergeseran-kurva-sedang.md`
- [ ] `osn-sma-eko-01i-pergeseran-kurva-sulit.md`
- [ ] `osn-sma-eko-01i-pergeseran-kurva-mudah-sedang.md`
- [ ] `osn-sma-eko-01i-pergeseran-kurva-sedang-sulit.md`

### EKO-02 · Pasar & Struktur Pasar (8 sub-bab)

**EKO-02a · Pasar Persaingan Sempurna** (fokus Kab–Prov)
- [ ] `osn-sma-eko-02a-persaingan-sempurna-campur.md`
- [ ] `osn-sma-eko-02a-persaingan-sempurna-mudah.md`
- [ ] `osn-sma-eko-02a-persaingan-sempurna-sedang.md`
- [ ] `osn-sma-eko-02a-persaingan-sempurna-sulit.md`
- [ ] `osn-sma-eko-02a-persaingan-sempurna-mudah-sedang.md`
- [ ] `osn-sma-eko-02a-persaingan-sempurna-sedang-sulit.md`

**EKO-02b · Pasar Monopoli** (fokus Prov)
- [ ] `osn-sma-eko-02b-monopoli-campur.md`
- [ ] `osn-sma-eko-02b-monopoli-mudah.md`
- [ ] `osn-sma-eko-02b-monopoli-sedang.md`
- [ ] `osn-sma-eko-02b-monopoli-sulit.md`
- [ ] `osn-sma-eko-02b-monopoli-mudah-sedang.md`
- [ ] `osn-sma-eko-02b-monopoli-sedang-sulit.md`

**EKO-02c · Pasar Oligopoli** (fokus Prov–Nas)
- [ ] `osn-sma-eko-02c-oligopoli-campur.md`
- [ ] `osn-sma-eko-02c-oligopoli-mudah.md`
- [ ] `osn-sma-eko-02c-oligopoli-sedang.md`
- [ ] `osn-sma-eko-02c-oligopoli-sulit.md`
- [ ] `osn-sma-eko-02c-oligopoli-mudah-sedang.md`
- [ ] `osn-sma-eko-02c-oligopoli-sedang-sulit.md`

**EKO-02d · Pasar Persaingan Monopolistik** (fokus Prov)
- [ ] `osn-sma-eko-02d-persaingan-monopolistik-campur.md`
- [ ] `osn-sma-eko-02d-persaingan-monopolistik-mudah.md`
- [ ] `osn-sma-eko-02d-persaingan-monopolistik-sedang.md`
- [ ] `osn-sma-eko-02d-persaingan-monopolistik-sulit.md`
- [ ] `osn-sma-eko-02d-persaingan-monopolistik-mudah-sedang.md`
- [ ] `osn-sma-eko-02d-persaingan-monopolistik-sedang-sulit.md`

**EKO-02e · Pasar Faktor Produksi (Tanah, Tenaga Kerja, Modal)** (fokus Prov)
- [ ] `osn-sma-eko-02e-pasar-faktor-produksi-campur.md`
- [ ] `osn-sma-eko-02e-pasar-faktor-produksi-mudah.md`
- [ ] `osn-sma-eko-02e-pasar-faktor-produksi-sedang.md`
- [ ] `osn-sma-eko-02e-pasar-faktor-produksi-sulit.md`
- [ ] `osn-sma-eko-02e-pasar-faktor-produksi-mudah-sedang.md`
- [ ] `osn-sma-eko-02e-pasar-faktor-produksi-sedang-sulit.md`

**EKO-02f · Diskriminasi Harga** (fokus Prov–Nas)
- [ ] `osn-sma-eko-02f-diskriminasi-harga-campur.md`
- [ ] `osn-sma-eko-02f-diskriminasi-harga-mudah.md`
- [ ] `osn-sma-eko-02f-diskriminasi-harga-sedang.md`
- [ ] `osn-sma-eko-02f-diskriminasi-harga-sulit.md`
- [ ] `osn-sma-eko-02f-diskriminasi-harga-mudah-sedang.md`
- [ ] `osn-sma-eko-02f-diskriminasi-harga-sedang-sulit.md`

**EKO-02g · Eksternalitas & Barang Publik** (fokus Prov–Nas)
- [ ] `osn-sma-eko-02g-eksternalitas-barang-publik-campur.md`
- [ ] `osn-sma-eko-02g-eksternalitas-barang-publik-mudah.md`
- [ ] `osn-sma-eko-02g-eksternalitas-barang-publik-sedang.md`
- [ ] `osn-sma-eko-02g-eksternalitas-barang-publik-sulit.md`
- [ ] `osn-sma-eko-02g-eksternalitas-barang-publik-mudah-sedang.md`
- [ ] `osn-sma-eko-02g-eksternalitas-barang-publik-sedang-sulit.md`

**EKO-02h · Surplus Konsumen & Produsen** (fokus Prov)
- [ ] `osn-sma-eko-02h-surplus-konsumen-produsen-campur.md`
- [ ] `osn-sma-eko-02h-surplus-konsumen-produsen-mudah.md`
- [ ] `osn-sma-eko-02h-surplus-konsumen-produsen-sedang.md`
- [ ] `osn-sma-eko-02h-surplus-konsumen-produsen-sulit.md`
- [ ] `osn-sma-eko-02h-surplus-konsumen-produsen-mudah-sedang.md`
- [ ] `osn-sma-eko-02h-surplus-konsumen-produsen-sedang-sulit.md`

### EKO-03 · Mikroekonomi (8 sub-bab)

**EKO-03a · Perilaku Konsumen (Utilitas, Indiferens)** (fokus Prov)
- [ ] `osn-sma-eko-03a-perilaku-konsumen-campur.md`
- [ ] `osn-sma-eko-03a-perilaku-konsumen-mudah.md`
- [ ] `osn-sma-eko-03a-perilaku-konsumen-sedang.md`
- [ ] `osn-sma-eko-03a-perilaku-konsumen-sulit.md`
- [ ] `osn-sma-eko-03a-perilaku-konsumen-mudah-sedang.md`
- [ ] `osn-sma-eko-03a-perilaku-konsumen-sedang-sulit.md`

**EKO-03b · Pendekatan Kardinal & Ordinal** (fokus Prov)
- [ ] `osn-sma-eko-03b-kardinal-ordinal-campur.md`
- [ ] `osn-sma-eko-03b-kardinal-ordinal-mudah.md`
- [ ] `osn-sma-eko-03b-kardinal-ordinal-sedang.md`
- [ ] `osn-sma-eko-03b-kardinal-ordinal-sulit.md`
- [ ] `osn-sma-eko-03b-kardinal-ordinal-mudah-sedang.md`
- [ ] `osn-sma-eko-03b-kardinal-ordinal-sedang-sulit.md`

**EKO-03c · Teori Produksi (Jangka Pendek & Panjang)** (fokus Prov)
- [ ] `osn-sma-eko-03c-teori-produksi-campur.md`
- [ ] `osn-sma-eko-03c-teori-produksi-mudah.md`
- [ ] `osn-sma-eko-03c-teori-produksi-sedang.md`
- [ ] `osn-sma-eko-03c-teori-produksi-sulit.md`
- [ ] `osn-sma-eko-03c-teori-produksi-mudah-sedang.md`
- [ ] `osn-sma-eko-03c-teori-produksi-sedang-sulit.md`

**EKO-03d · Fungsi Produksi & Hukum Pertambahan Hasil Berkurang** (fokus Prov)
- [ ] `osn-sma-eko-03d-fungsi-produksi-diminishing-campur.md`
- [ ] `osn-sma-eko-03d-fungsi-produksi-diminishing-mudah.md`
- [ ] `osn-sma-eko-03d-fungsi-produksi-diminishing-sedang.md`
- [ ] `osn-sma-eko-03d-fungsi-produksi-diminishing-sulit.md`
- [ ] `osn-sma-eko-03d-fungsi-produksi-diminishing-mudah-sedang.md`
- [ ] `osn-sma-eko-03d-fungsi-produksi-diminishing-sedang-sulit.md`

**EKO-03e · Biaya Produksi (Tetap, Variabel, Total, Marginal)** (fokus Prov)
- [ ] `osn-sma-eko-03e-biaya-produksi-campur.md`
- [ ] `osn-sma-eko-03e-biaya-produksi-mudah.md`
- [ ] `osn-sma-eko-03e-biaya-produksi-sedang.md`
- [ ] `osn-sma-eko-03e-biaya-produksi-sulit.md`
- [ ] `osn-sma-eko-03e-biaya-produksi-mudah-sedang.md`
- [ ] `osn-sma-eko-03e-biaya-produksi-sedang-sulit.md`

**EKO-03f · Pendapatan (Total, Marginal, Rata-rata)** (fokus Prov)
- [ ] `osn-sma-eko-03f-pendapatan-tr-mr-ar-campur.md`
- [ ] `osn-sma-eko-03f-pendapatan-tr-mr-ar-mudah.md`
- [ ] `osn-sma-eko-03f-pendapatan-tr-mr-ar-sedang.md`
- [ ] `osn-sma-eko-03f-pendapatan-tr-mr-ar-sulit.md`
- [ ] `osn-sma-eko-03f-pendapatan-tr-mr-ar-mudah-sedang.md`
- [ ] `osn-sma-eko-03f-pendapatan-tr-mr-ar-sedang-sulit.md`

**EKO-03g · Laba Maksimum (MR=MC)** (fokus Prov–Nas)
- [ ] `osn-sma-eko-03g-laba-maksimum-mr-mc-campur.md`
- [ ] `osn-sma-eko-03g-laba-maksimum-mr-mc-mudah.md`
- [ ] `osn-sma-eko-03g-laba-maksimum-mr-mc-sedang.md`
- [ ] `osn-sma-eko-03g-laba-maksimum-mr-mc-sulit.md`
- [ ] `osn-sma-eko-03g-laba-maksimum-mr-mc-mudah-sedang.md`
- [ ] `osn-sma-eko-03g-laba-maksimum-mr-mc-sedang-sulit.md`

**EKO-03h · Kurva Indiferens & Garis Anggaran** (fokus Prov–Nas)
- [ ] `osn-sma-eko-03h-indiferens-anggaran-campur.md`
- [ ] `osn-sma-eko-03h-indiferens-anggaran-mudah.md`
- [ ] `osn-sma-eko-03h-indiferens-anggaran-sedang.md`
- [ ] `osn-sma-eko-03h-indiferens-anggaran-sulit.md`
- [ ] `osn-sma-eko-03h-indiferens-anggaran-mudah-sedang.md`
- [ ] `osn-sma-eko-03h-indiferens-anggaran-sedang-sulit.md`

### EKO-04 · Makroekonomi (8 sub-bab)

**EKO-04a · Pendapatan Nasional (PDB, PNB, PNN, PI, DI)** (fokus Kab–Prov)
- [ ] `osn-sma-eko-04a-pendapatan-nasional-campur.md`
- [ ] `osn-sma-eko-04a-pendapatan-nasional-mudah.md`
- [ ] `osn-sma-eko-04a-pendapatan-nasional-sedang.md`
- [ ] `osn-sma-eko-04a-pendapatan-nasional-sulit.md`
- [ ] `osn-sma-eko-04a-pendapatan-nasional-mudah-sedang.md`
- [ ] `osn-sma-eko-04a-pendapatan-nasional-sedang-sulit.md`

**EKO-04b · Perhitungan Pendapatan Nasional (3 Pendekatan)** (fokus Prov)
- [ ] `osn-sma-eko-04b-perhitungan-pdb-campur.md`
- [ ] `osn-sma-eko-04b-perhitungan-pdb-mudah.md`
- [ ] `osn-sma-eko-04b-perhitungan-pdb-sedang.md`
- [ ] `osn-sma-eko-04b-perhitungan-pdb-sulit.md`
- [ ] `osn-sma-eko-04b-perhitungan-pdb-mudah-sedang.md`
- [ ] `osn-sma-eko-04b-perhitungan-pdb-sedang-sulit.md`

**EKO-04c · Pertumbuhan & Pembangunan Ekonomi** (fokus Kab–Prov)
- [ ] `osn-sma-eko-04c-pertumbuhan-pembangunan-campur.md`
- [ ] `osn-sma-eko-04c-pertumbuhan-pembangunan-mudah.md`
- [ ] `osn-sma-eko-04c-pertumbuhan-pembangunan-sedang.md`
- [ ] `osn-sma-eko-04c-pertumbuhan-pembangunan-sulit.md`
- [ ] `osn-sma-eko-04c-pertumbuhan-pembangunan-mudah-sedang.md`
- [ ] `osn-sma-eko-04c-pertumbuhan-pembangunan-sedang-sulit.md`

**EKO-04d · Inflasi (Penyebab, Dampak, Pengukuran)** (fokus Prov)
- [ ] `osn-sma-eko-04d-inflasi-campur.md`
- [ ] `osn-sma-eko-04d-inflasi-mudah.md`
- [ ] `osn-sma-eko-04d-inflasi-sedang.md`
- [ ] `osn-sma-eko-04d-inflasi-sulit.md`
- [ ] `osn-sma-eko-04d-inflasi-mudah-sedang.md`
- [ ] `osn-sma-eko-04d-inflasi-sedang-sulit.md`

**EKO-04e · Pengangguran (Jenis & Dampak)** (fokus Kab–Prov)
- [ ] `osn-sma-eko-04e-pengangguran-campur.md`
- [ ] `osn-sma-eko-04e-pengangguran-mudah.md`
- [ ] `osn-sma-eko-04e-pengangguran-sedang.md`
- [ ] `osn-sma-eko-04e-pengangguran-sulit.md`
- [ ] `osn-sma-eko-04e-pengangguran-mudah-sedang.md`
- [ ] `osn-sma-eko-04e-pengangguran-sedang-sulit.md`

**EKO-04f · Konsumsi, Tabungan, Investasi (MPC, MPS)** (fokus Prov)
- [ ] `osn-sma-eko-04f-konsumsi-tabungan-investasi-campur.md`
- [ ] `osn-sma-eko-04f-konsumsi-tabungan-investasi-mudah.md`
- [ ] `osn-sma-eko-04f-konsumsi-tabungan-investasi-sedang.md`
- [ ] `osn-sma-eko-04f-konsumsi-tabungan-investasi-sulit.md`
- [ ] `osn-sma-eko-04f-konsumsi-tabungan-investasi-mudah-sedang.md`
- [ ] `osn-sma-eko-04f-konsumsi-tabungan-investasi-sedang-sulit.md`

**EKO-04g · Multiplier Effect** (fokus Prov–Nas)
- [ ] `osn-sma-eko-04g-multiplier-effect-campur.md`
- [ ] `osn-sma-eko-04g-multiplier-effect-mudah.md`
- [ ] `osn-sma-eko-04g-multiplier-effect-sedang.md`
- [ ] `osn-sma-eko-04g-multiplier-effect-sulit.md`
- [ ] `osn-sma-eko-04g-multiplier-effect-mudah-sedang.md`
- [ ] `osn-sma-eko-04g-multiplier-effect-sedang-sulit.md`

**EKO-04h · Siklus Bisnis** (fokus Prov)
- [ ] `osn-sma-eko-04h-siklus-bisnis-campur.md`
- [ ] `osn-sma-eko-04h-siklus-bisnis-mudah.md`
- [ ] `osn-sma-eko-04h-siklus-bisnis-sedang.md`
- [ ] `osn-sma-eko-04h-siklus-bisnis-sulit.md`
- [ ] `osn-sma-eko-04h-siklus-bisnis-mudah-sedang.md`
- [ ] `osn-sma-eko-04h-siklus-bisnis-sedang-sulit.md`

### EKO-05 · Uang, Bank & Kebijakan Moneter (7 sub-bab)

**EKO-05a · Uang (Fungsi, Jenis, Sejarah, Standar)** (fokus Kab)
- [ ] `osn-sma-eko-05a-uang-campur.md`
- [ ] `osn-sma-eko-05a-uang-mudah.md`
- [ ] `osn-sma-eko-05a-uang-sedang.md`
- [ ] `osn-sma-eko-05a-uang-sulit.md`
- [ ] `osn-sma-eko-05a-uang-mudah-sedang.md`
- [ ] `osn-sma-eko-05a-uang-sedang-sulit.md`

**EKO-05b · Permintaan & Penawaran Uang** (fokus Prov)
- [ ] `osn-sma-eko-05b-permintaan-penawaran-uang-campur.md`
- [ ] `osn-sma-eko-05b-permintaan-penawaran-uang-mudah.md`
- [ ] `osn-sma-eko-05b-permintaan-penawaran-uang-sedang.md`
- [ ] `osn-sma-eko-05b-permintaan-penawaran-uang-sulit.md`
- [ ] `osn-sma-eko-05b-permintaan-penawaran-uang-mudah-sedang.md`
- [ ] `osn-sma-eko-05b-permintaan-penawaran-uang-sedang-sulit.md`

**EKO-05c · Sistem Perbankan (Bank Sentral, Umum, Syariah)** (fokus Kab–Prov)
- [ ] `osn-sma-eko-05c-sistem-perbankan-campur.md`
- [ ] `osn-sma-eko-05c-sistem-perbankan-mudah.md`
- [ ] `osn-sma-eko-05c-sistem-perbankan-sedang.md`
- [ ] `osn-sma-eko-05c-sistem-perbankan-sulit.md`
- [ ] `osn-sma-eko-05c-sistem-perbankan-mudah-sedang.md`
- [ ] `osn-sma-eko-05c-sistem-perbankan-sedang-sulit.md`

**EKO-05d · Kebijakan Moneter (Ekspansif & Kontraktif)** (fokus Prov)
- [ ] `osn-sma-eko-05d-kebijakan-moneter-campur.md`
- [ ] `osn-sma-eko-05d-kebijakan-moneter-mudah.md`
- [ ] `osn-sma-eko-05d-kebijakan-moneter-sedang.md`
- [ ] `osn-sma-eko-05d-kebijakan-moneter-sulit.md`
- [ ] `osn-sma-eko-05d-kebijakan-moneter-mudah-sedang.md`
- [ ] `osn-sma-eko-05d-kebijakan-moneter-sedang-sulit.md`

**EKO-05e · Instrumen Kebijakan Moneter** (fokus Prov)
- [ ] `osn-sma-eko-05e-instrumen-moneter-campur.md`
- [ ] `osn-sma-eko-05e-instrumen-moneter-mudah.md`
- [ ] `osn-sma-eko-05e-instrumen-moneter-sedang.md`
- [ ] `osn-sma-eko-05e-instrumen-moneter-sulit.md`
- [ ] `osn-sma-eko-05e-instrumen-moneter-mudah-sedang.md`
- [ ] `osn-sma-eko-05e-instrumen-moneter-sedang-sulit.md`

**EKO-05f · Cadangan Wajib & Operasi Pasar Terbuka** (fokus Prov–Nas)
- [ ] `osn-sma-eko-05f-cadangan-opt-campur.md`
- [ ] `osn-sma-eko-05f-cadangan-opt-mudah.md`
- [ ] `osn-sma-eko-05f-cadangan-opt-sedang.md`
- [ ] `osn-sma-eko-05f-cadangan-opt-sulit.md`
- [ ] `osn-sma-eko-05f-cadangan-opt-mudah-sedang.md`
- [ ] `osn-sma-eko-05f-cadangan-opt-sedang-sulit.md`

**EKO-05g · Lembaga Keuangan Bukan Bank** (fokus Kab)
- [ ] `osn-sma-eko-05g-lkbb-campur.md`
- [ ] `osn-sma-eko-05g-lkbb-mudah.md`
- [ ] `osn-sma-eko-05g-lkbb-sedang.md`
- [ ] `osn-sma-eko-05g-lkbb-sulit.md`
- [ ] `osn-sma-eko-05g-lkbb-mudah-sedang.md`
- [ ] `osn-sma-eko-05g-lkbb-sedang-sulit.md`

### EKO-06 · APBN, Perpajakan & Kebijakan Fiskal (8 sub-bab)

**EKO-06a · APBN & APBD (Struktur & Fungsi)** (fokus Kab)
- [ ] `osn-sma-eko-06a-apbn-apbd-campur.md`
- [ ] `osn-sma-eko-06a-apbn-apbd-mudah.md`
- [ ] `osn-sma-eko-06a-apbn-apbd-sedang.md`
- [ ] `osn-sma-eko-06a-apbn-apbd-sulit.md`
- [ ] `osn-sma-eko-06a-apbn-apbd-mudah-sedang.md`
- [ ] `osn-sma-eko-06a-apbn-apbd-sedang-sulit.md`

**EKO-06b · Sumber Penerimaan Negara** (fokus Kab)
- [ ] `osn-sma-eko-06b-penerimaan-negara-campur.md`
- [ ] `osn-sma-eko-06b-penerimaan-negara-mudah.md`
- [ ] `osn-sma-eko-06b-penerimaan-negara-sedang.md`
- [ ] `osn-sma-eko-06b-penerimaan-negara-sulit.md`
- [ ] `osn-sma-eko-06b-penerimaan-negara-mudah-sedang.md`
- [ ] `osn-sma-eko-06b-penerimaan-negara-sedang-sulit.md`

**EKO-06c · Pengeluaran Negara** (fokus Kab)
- [ ] `osn-sma-eko-06c-pengeluaran-negara-campur.md`
- [ ] `osn-sma-eko-06c-pengeluaran-negara-mudah.md`
- [ ] `osn-sma-eko-06c-pengeluaran-negara-sedang.md`
- [ ] `osn-sma-eko-06c-pengeluaran-negara-sulit.md`
- [ ] `osn-sma-eko-06c-pengeluaran-negara-mudah-sedang.md`
- [ ] `osn-sma-eko-06c-pengeluaran-negara-sedang-sulit.md`

**EKO-06d · Pajak (Jenis, Subjek, Objek)** (fokus Kab–Prov)
- [ ] `osn-sma-eko-06d-pajak-konsep-campur.md`
- [ ] `osn-sma-eko-06d-pajak-konsep-mudah.md`
- [ ] `osn-sma-eko-06d-pajak-konsep-sedang.md`
- [ ] `osn-sma-eko-06d-pajak-konsep-sulit.md`
- [ ] `osn-sma-eko-06d-pajak-konsep-mudah-sedang.md`
- [ ] `osn-sma-eko-06d-pajak-konsep-sedang-sulit.md`

**EKO-06e · Pajak Penghasilan (PPh)** (fokus Prov)
- [ ] `osn-sma-eko-06e-pph-campur.md`
- [ ] `osn-sma-eko-06e-pph-mudah.md`
- [ ] `osn-sma-eko-06e-pph-sedang.md`
- [ ] `osn-sma-eko-06e-pph-sulit.md`
- [ ] `osn-sma-eko-06e-pph-mudah-sedang.md`
- [ ] `osn-sma-eko-06e-pph-sedang-sulit.md`

**EKO-06f · Pajak Pertambahan Nilai (PPN) & Bea** (fokus Prov)
- [ ] `osn-sma-eko-06f-ppn-bea-campur.md`
- [ ] `osn-sma-eko-06f-ppn-bea-mudah.md`
- [ ] `osn-sma-eko-06f-ppn-bea-sedang.md`
- [ ] `osn-sma-eko-06f-ppn-bea-sulit.md`
- [ ] `osn-sma-eko-06f-ppn-bea-mudah-sedang.md`
- [ ] `osn-sma-eko-06f-ppn-bea-sedang-sulit.md`

**EKO-06g · Kebijakan Fiskal (Ekspansif & Kontraktif)** (fokus Prov)
- [ ] `osn-sma-eko-06g-kebijakan-fiskal-campur.md`
- [ ] `osn-sma-eko-06g-kebijakan-fiskal-mudah.md`
- [ ] `osn-sma-eko-06g-kebijakan-fiskal-sedang.md`
- [ ] `osn-sma-eko-06g-kebijakan-fiskal-sulit.md`
- [ ] `osn-sma-eko-06g-kebijakan-fiskal-mudah-sedang.md`
- [ ] `osn-sma-eko-06g-kebijakan-fiskal-sedang-sulit.md`

**EKO-06h · Anggaran Surplus, Defisit, Berimbang** (fokus Prov)
- [ ] `osn-sma-eko-06h-anggaran-surplus-defisit-campur.md`
- [ ] `osn-sma-eko-06h-anggaran-surplus-defisit-mudah.md`
- [ ] `osn-sma-eko-06h-anggaran-surplus-defisit-sedang.md`
- [ ] `osn-sma-eko-06h-anggaran-surplus-defisit-sulit.md`
- [ ] `osn-sma-eko-06h-anggaran-surplus-defisit-mudah-sedang.md`
- [ ] `osn-sma-eko-06h-anggaran-surplus-defisit-sedang-sulit.md`

### EKO-07 · Perdagangan Internasional, Neraca Pembayaran & Kurs (8 sub-bab)

**EKO-07a · Teori Perdagangan Internasional (Absolut & Komparatif)** (fokus Kab–Prov)
- [ ] `osn-sma-eko-07a-teori-perdagangan-int-campur.md`
- [ ] `osn-sma-eko-07a-teori-perdagangan-int-mudah.md`
- [ ] `osn-sma-eko-07a-teori-perdagangan-int-sedang.md`
- [ ] `osn-sma-eko-07a-teori-perdagangan-int-sulit.md`
- [ ] `osn-sma-eko-07a-teori-perdagangan-int-mudah-sedang.md`
- [ ] `osn-sma-eko-07a-teori-perdagangan-int-sedang-sulit.md`

**EKO-07b · Ekspor & Impor (Faktor & Dampak)** (fokus Kab–Prov)
- [ ] `osn-sma-eko-07b-ekspor-impor-campur.md`
- [ ] `osn-sma-eko-07b-ekspor-impor-mudah.md`
- [ ] `osn-sma-eko-07b-ekspor-impor-sedang.md`
- [ ] `osn-sma-eko-07b-ekspor-impor-sulit.md`
- [ ] `osn-sma-eko-07b-ekspor-impor-mudah-sedang.md`
- [ ] `osn-sma-eko-07b-ekspor-impor-sedang-sulit.md`

**EKO-07c · Neraca Perdagangan & Neraca Pembayaran** (fokus Prov)
- [ ] `osn-sma-eko-07c-neraca-perdagangan-campur.md`
- [ ] `osn-sma-eko-07c-neraca-perdagangan-mudah.md`
- [ ] `osn-sma-eko-07c-neraca-perdagangan-sedang.md`
- [ ] `osn-sma-eko-07c-neraca-perdagangan-sulit.md`
- [ ] `osn-sma-eko-07c-neraca-perdagangan-mudah-sedang.md`
- [ ] `osn-sma-eko-07c-neraca-perdagangan-sedang-sulit.md`

**EKO-07d · Kurs Valuta Asing & Sistemnya** (fokus Prov)
- [ ] `osn-sma-eko-07d-kurs-valas-campur.md`
- [ ] `osn-sma-eko-07d-kurs-valas-mudah.md`
- [ ] `osn-sma-eko-07d-kurs-valas-sedang.md`
- [ ] `osn-sma-eko-07d-kurs-valas-sulit.md`
- [ ] `osn-sma-eko-07d-kurs-valas-mudah-sedang.md`
- [ ] `osn-sma-eko-07d-kurs-valas-sedang-sulit.md`

**EKO-07e · Devisa (Sumber & Penggunaan)** (fokus Kab–Prov)
- [ ] `osn-sma-eko-07e-devisa-campur.md`
- [ ] `osn-sma-eko-07e-devisa-mudah.md`
- [ ] `osn-sma-eko-07e-devisa-sedang.md`
- [ ] `osn-sma-eko-07e-devisa-sulit.md`
- [ ] `osn-sma-eko-07e-devisa-mudah-sedang.md`
- [ ] `osn-sma-eko-07e-devisa-sedang-sulit.md`

**EKO-07f · Kebijakan Perdagangan (Tarif, Kuota, Subsidi)** (fokus Prov)
- [ ] `osn-sma-eko-07f-kebijakan-perdagangan-campur.md`
- [ ] `osn-sma-eko-07f-kebijakan-perdagangan-mudah.md`
- [ ] `osn-sma-eko-07f-kebijakan-perdagangan-sedang.md`
- [ ] `osn-sma-eko-07f-kebijakan-perdagangan-sulit.md`
- [ ] `osn-sma-eko-07f-kebijakan-perdagangan-mudah-sedang.md`
- [ ] `osn-sma-eko-07f-kebijakan-perdagangan-sedang-sulit.md`

**EKO-07g · Globalisasi Ekonomi** (fokus Kab–Prov)
- [ ] `osn-sma-eko-07g-globalisasi-ekonomi-campur.md`
- [ ] `osn-sma-eko-07g-globalisasi-ekonomi-mudah.md`
- [ ] `osn-sma-eko-07g-globalisasi-ekonomi-sedang.md`
- [ ] `osn-sma-eko-07g-globalisasi-ekonomi-sulit.md`
- [ ] `osn-sma-eko-07g-globalisasi-ekonomi-mudah-sedang.md`
- [ ] `osn-sma-eko-07g-globalisasi-ekonomi-sedang-sulit.md`

**EKO-07h · Kerja Sama Ekonomi Internasional** (fokus Kab–Prov)
- [ ] `osn-sma-eko-07h-kerjasama-ekonomi-int-campur.md`
- [ ] `osn-sma-eko-07h-kerjasama-ekonomi-int-mudah.md`
- [ ] `osn-sma-eko-07h-kerjasama-ekonomi-int-sedang.md`
- [ ] `osn-sma-eko-07h-kerjasama-ekonomi-int-sulit.md`
- [ ] `osn-sma-eko-07h-kerjasama-ekonomi-int-mudah-sedang.md`
- [ ] `osn-sma-eko-07h-kerjasama-ekonomi-int-sedang-sulit.md`

### EKO-08 · Akuntansi Dasar & Manajemen Bisnis (8 sub-bab)

**EKO-08a · Persamaan Akuntansi** (fokus Kab)
- [ ] `osn-sma-eko-08a-persamaan-akuntansi-campur.md`
- [ ] `osn-sma-eko-08a-persamaan-akuntansi-mudah.md`
- [ ] `osn-sma-eko-08a-persamaan-akuntansi-sedang.md`
- [ ] `osn-sma-eko-08a-persamaan-akuntansi-sulit.md`
- [ ] `osn-sma-eko-08a-persamaan-akuntansi-mudah-sedang.md`
- [ ] `osn-sma-eko-08a-persamaan-akuntansi-sedang-sulit.md`

**EKO-08b · Siklus Akuntansi** (fokus Kab–Prov)
- [ ] `osn-sma-eko-08b-siklus-akuntansi-campur.md`
- [ ] `osn-sma-eko-08b-siklus-akuntansi-mudah.md`
- [ ] `osn-sma-eko-08b-siklus-akuntansi-sedang.md`
- [ ] `osn-sma-eko-08b-siklus-akuntansi-sulit.md`
- [ ] `osn-sma-eko-08b-siklus-akuntansi-mudah-sedang.md`
- [ ] `osn-sma-eko-08b-siklus-akuntansi-sedang-sulit.md`

**EKO-08c · Jurnal Umum** (fokus Prov)
- [ ] `osn-sma-eko-08c-jurnal-umum-campur.md`
- [ ] `osn-sma-eko-08c-jurnal-umum-mudah.md`
- [ ] `osn-sma-eko-08c-jurnal-umum-sedang.md`
- [ ] `osn-sma-eko-08c-jurnal-umum-sulit.md`
- [ ] `osn-sma-eko-08c-jurnal-umum-mudah-sedang.md`
- [ ] `osn-sma-eko-08c-jurnal-umum-sedang-sulit.md`

**EKO-08d · Buku Besar & Neraca Saldo** (fokus Prov)
- [ ] `osn-sma-eko-08d-buku-besar-neraca-saldo-campur.md`
- [ ] `osn-sma-eko-08d-buku-besar-neraca-saldo-mudah.md`
- [ ] `osn-sma-eko-08d-buku-besar-neraca-saldo-sedang.md`
- [ ] `osn-sma-eko-08d-buku-besar-neraca-saldo-sulit.md`
- [ ] `osn-sma-eko-08d-buku-besar-neraca-saldo-mudah-sedang.md`
- [ ] `osn-sma-eko-08d-buku-besar-neraca-saldo-sedang-sulit.md`

**EKO-08e · Jurnal Penyesuaian** (fokus Prov)
- [ ] `osn-sma-eko-08e-jurnal-penyesuaian-campur.md`
- [ ] `osn-sma-eko-08e-jurnal-penyesuaian-mudah.md`
- [ ] `osn-sma-eko-08e-jurnal-penyesuaian-sedang.md`
- [ ] `osn-sma-eko-08e-jurnal-penyesuaian-sulit.md`
- [ ] `osn-sma-eko-08e-jurnal-penyesuaian-mudah-sedang.md`
- [ ] `osn-sma-eko-08e-jurnal-penyesuaian-sedang-sulit.md`

**EKO-08f · Laporan Keuangan (Laba-Rugi, Neraca, Perubahan Modal)** (fokus Prov–Nas)
- [ ] `osn-sma-eko-08f-laporan-keuangan-campur.md`
- [ ] `osn-sma-eko-08f-laporan-keuangan-mudah.md`
- [ ] `osn-sma-eko-08f-laporan-keuangan-sedang.md`
- [ ] `osn-sma-eko-08f-laporan-keuangan-sulit.md`
- [ ] `osn-sma-eko-08f-laporan-keuangan-mudah-sedang.md`
- [ ] `osn-sma-eko-08f-laporan-keuangan-sedang-sulit.md`

**EKO-08g · Manajemen (Fungsi & Tingkatan)** (fokus Kab)
- [ ] `osn-sma-eko-08g-manajemen-campur.md`
- [ ] `osn-sma-eko-08g-manajemen-mudah.md`
- [ ] `osn-sma-eko-08g-manajemen-sedang.md`
- [ ] `osn-sma-eko-08g-manajemen-sulit.md`
- [ ] `osn-sma-eko-08g-manajemen-mudah-sedang.md`
- [ ] `osn-sma-eko-08g-manajemen-sedang-sulit.md`

**EKO-08h · Kewirausahaan & Studi Kelayakan Usaha** (fokus Kab–Prov)
- [ ] `osn-sma-eko-08h-kewirausahaan-campur.md`
- [ ] `osn-sma-eko-08h-kewirausahaan-mudah.md`
- [ ] `osn-sma-eko-08h-kewirausahaan-sedang.md`
- [ ] `osn-sma-eko-08h-kewirausahaan-sulit.md`
- [ ] `osn-sma-eko-08h-kewirausahaan-mudah-sedang.md`
- [ ] `osn-sma-eko-08h-kewirausahaan-sedang-sulit.md`

---

## I · Informatika Per Sub-Bab (63 sub-bab × 6 = 378 file)

### INF-01 · Logika, Proposisi & Pemecahan Masalah (8 sub-bab)

**INF-01a · Proposisi & Pernyataan** (fokus Kab)
- [ ] `osn-sma-inf-01a-proposisi-pernyataan-campur.md`
- [ ] `osn-sma-inf-01a-proposisi-pernyataan-mudah.md`
- [ ] `osn-sma-inf-01a-proposisi-pernyataan-sedang.md`
- [ ] `osn-sma-inf-01a-proposisi-pernyataan-sulit.md`
- [ ] `osn-sma-inf-01a-proposisi-pernyataan-mudah-sedang.md`
- [ ] `osn-sma-inf-01a-proposisi-pernyataan-sedang-sulit.md`

**INF-01b · Operator Logika (AND, OR, NOT, XOR)** (fokus Kab–Prov)
- [ ] `osn-sma-inf-01b-operator-logika-campur.md`
- [ ] `osn-sma-inf-01b-operator-logika-mudah.md`
- [ ] `osn-sma-inf-01b-operator-logika-sedang.md`
- [ ] `osn-sma-inf-01b-operator-logika-sulit.md`
- [ ] `osn-sma-inf-01b-operator-logika-mudah-sedang.md`
- [ ] `osn-sma-inf-01b-operator-logika-sedang-sulit.md`

**INF-01c · Tabel Kebenaran** (fokus Kab–Prov)
- [ ] `osn-sma-inf-01c-tabel-kebenaran-campur.md`
- [ ] `osn-sma-inf-01c-tabel-kebenaran-mudah.md`
- [ ] `osn-sma-inf-01c-tabel-kebenaran-sedang.md`
- [ ] `osn-sma-inf-01c-tabel-kebenaran-sulit.md`
- [ ] `osn-sma-inf-01c-tabel-kebenaran-mudah-sedang.md`
- [ ] `osn-sma-inf-01c-tabel-kebenaran-sedang-sulit.md`

**INF-01d · Implikasi & Biimplikasi** (fokus Prov)
- [ ] `osn-sma-inf-01d-implikasi-biimplikasi-campur.md`
- [ ] `osn-sma-inf-01d-implikasi-biimplikasi-mudah.md`
- [ ] `osn-sma-inf-01d-implikasi-biimplikasi-sedang.md`
- [ ] `osn-sma-inf-01d-implikasi-biimplikasi-sulit.md`
- [ ] `osn-sma-inf-01d-implikasi-biimplikasi-mudah-sedang.md`
- [ ] `osn-sma-inf-01d-implikasi-biimplikasi-sedang-sulit.md`

**INF-01e · Tautologi, Kontradiksi, Ekuivalensi** (fokus Prov)
- [ ] `osn-sma-inf-01e-tautologi-kontradiksi-campur.md`
- [ ] `osn-sma-inf-01e-tautologi-kontradiksi-mudah.md`
- [ ] `osn-sma-inf-01e-tautologi-kontradiksi-sedang.md`
- [ ] `osn-sma-inf-01e-tautologi-kontradiksi-sulit.md`
- [ ] `osn-sma-inf-01e-tautologi-kontradiksi-mudah-sedang.md`
- [ ] `osn-sma-inf-01e-tautologi-kontradiksi-sedang-sulit.md`

**INF-01f · Argumen & Validitas** (fokus Prov)
- [ ] `osn-sma-inf-01f-argumen-validitas-campur.md`
- [ ] `osn-sma-inf-01f-argumen-validitas-mudah.md`
- [ ] `osn-sma-inf-01f-argumen-validitas-sedang.md`
- [ ] `osn-sma-inf-01f-argumen-validitas-sulit.md`
- [ ] `osn-sma-inf-01f-argumen-validitas-mudah-sedang.md`
- [ ] `osn-sma-inf-01f-argumen-validitas-sedang-sulit.md`

**INF-01g · Logika Predikat (Pengantar)** (fokus Nas)
- [ ] `osn-sma-inf-01g-logika-predikat-campur.md`
- [ ] `osn-sma-inf-01g-logika-predikat-mudah.md`
- [ ] `osn-sma-inf-01g-logika-predikat-sedang.md`
- [ ] `osn-sma-inf-01g-logika-predikat-sulit.md`
- [ ] `osn-sma-inf-01g-logika-predikat-mudah-sedang.md`
- [ ] `osn-sma-inf-01g-logika-predikat-sedang-sulit.md`

**INF-01h · Soal Penalaran Logis** (fokus Kab–Prov)
- [ ] `osn-sma-inf-01h-penalaran-logis-campur.md`
- [ ] `osn-sma-inf-01h-penalaran-logis-mudah.md`
- [ ] `osn-sma-inf-01h-penalaran-logis-sedang.md`
- [ ] `osn-sma-inf-01h-penalaran-logis-sulit.md`
- [ ] `osn-sma-inf-01h-penalaran-logis-mudah-sedang.md`
- [ ] `osn-sma-inf-01h-penalaran-logis-sedang-sulit.md`

### INF-02 · Aritmetika Komputasional & Representasi Data (8 sub-bab)

**INF-02a · Sistem Bilangan Biner** (fokus Kab–Prov)
- [ ] `osn-sma-inf-02a-biner-campur.md`
- [ ] `osn-sma-inf-02a-biner-mudah.md`
- [ ] `osn-sma-inf-02a-biner-sedang.md`
- [ ] `osn-sma-inf-02a-biner-sulit.md`
- [ ] `osn-sma-inf-02a-biner-mudah-sedang.md`
- [ ] `osn-sma-inf-02a-biner-sedang-sulit.md`

**INF-02b · Sistem Bilangan Oktal & Heksadesimal** (fokus Kab–Prov)
- [ ] `osn-sma-inf-02b-oktal-heksadesimal-campur.md`
- [ ] `osn-sma-inf-02b-oktal-heksadesimal-mudah.md`
- [ ] `osn-sma-inf-02b-oktal-heksadesimal-sedang.md`
- [ ] `osn-sma-inf-02b-oktal-heksadesimal-sulit.md`
- [ ] `osn-sma-inf-02b-oktal-heksadesimal-mudah-sedang.md`
- [ ] `osn-sma-inf-02b-oktal-heksadesimal-sedang-sulit.md`

**INF-02c · Konversi Antar Sistem Bilangan** (fokus Kab–Prov)
- [ ] `osn-sma-inf-02c-konversi-bilangan-campur.md`
- [ ] `osn-sma-inf-02c-konversi-bilangan-mudah.md`
- [ ] `osn-sma-inf-02c-konversi-bilangan-sedang.md`
- [ ] `osn-sma-inf-02c-konversi-bilangan-sulit.md`
- [ ] `osn-sma-inf-02c-konversi-bilangan-mudah-sedang.md`
- [ ] `osn-sma-inf-02c-konversi-bilangan-sedang-sulit.md`

**INF-02d · Operasi Aritmetika Biner** (fokus Prov)
- [ ] `osn-sma-inf-02d-aritmetika-biner-campur.md`
- [ ] `osn-sma-inf-02d-aritmetika-biner-mudah.md`
- [ ] `osn-sma-inf-02d-aritmetika-biner-sedang.md`
- [ ] `osn-sma-inf-02d-aritmetika-biner-sulit.md`
- [ ] `osn-sma-inf-02d-aritmetika-biner-mudah-sedang.md`
- [ ] `osn-sma-inf-02d-aritmetika-biner-sedang-sulit.md`

**INF-02e · Representasi Bilangan Negatif (Komplemen 2)** (fokus Prov–Nas)
- [ ] `osn-sma-inf-02e-komplemen-dua-campur.md`
- [ ] `osn-sma-inf-02e-komplemen-dua-mudah.md`
- [ ] `osn-sma-inf-02e-komplemen-dua-sedang.md`
- [ ] `osn-sma-inf-02e-komplemen-dua-sulit.md`
- [ ] `osn-sma-inf-02e-komplemen-dua-mudah-sedang.md`
- [ ] `osn-sma-inf-02e-komplemen-dua-sedang-sulit.md`

**INF-02f · Floating Point (Pengantar)** (fokus Nas)
- [ ] `osn-sma-inf-02f-floating-point-campur.md`
- [ ] `osn-sma-inf-02f-floating-point-mudah.md`
- [ ] `osn-sma-inf-02f-floating-point-sedang.md`
- [ ] `osn-sma-inf-02f-floating-point-sulit.md`
- [ ] `osn-sma-inf-02f-floating-point-mudah-sedang.md`
- [ ] `osn-sma-inf-02f-floating-point-sedang-sulit.md`

**INF-02g · Representasi Karakter (ASCII, Unicode)** (fokus Kab–Prov)
- [ ] `osn-sma-inf-02g-ascii-unicode-campur.md`
- [ ] `osn-sma-inf-02g-ascii-unicode-mudah.md`
- [ ] `osn-sma-inf-02g-ascii-unicode-sedang.md`
- [ ] `osn-sma-inf-02g-ascii-unicode-sulit.md`
- [ ] `osn-sma-inf-02g-ascii-unicode-mudah-sedang.md`
- [ ] `osn-sma-inf-02g-ascii-unicode-sedang-sulit.md`

**INF-02h · Operasi Bitwise** (fokus Prov–Nas)
- [ ] `osn-sma-inf-02h-operasi-bitwise-campur.md`
- [ ] `osn-sma-inf-02h-operasi-bitwise-mudah.md`
- [ ] `osn-sma-inf-02h-operasi-bitwise-sedang.md`
- [ ] `osn-sma-inf-02h-operasi-bitwise-sulit.md`
- [ ] `osn-sma-inf-02h-operasi-bitwise-mudah-sedang.md`
- [ ] `osn-sma-inf-02h-operasi-bitwise-sedang-sulit.md`

### INF-03 · Analitika Data & Tabel (7 sub-bab)

**INF-03a · Struktur Tabel & Spreadsheet** (fokus Kab)
- [ ] `osn-sma-inf-03a-spreadsheet-campur.md`
- [ ] `osn-sma-inf-03a-spreadsheet-mudah.md`
- [ ] `osn-sma-inf-03a-spreadsheet-sedang.md`
- [ ] `osn-sma-inf-03a-spreadsheet-sulit.md`
- [ ] `osn-sma-inf-03a-spreadsheet-mudah-sedang.md`
- [ ] `osn-sma-inf-03a-spreadsheet-sedang-sulit.md`

**INF-03b · Formula & Fungsi Spreadsheet** (fokus Kab–Prov)
- [ ] `osn-sma-inf-03b-formula-fungsi-campur.md`
- [ ] `osn-sma-inf-03b-formula-fungsi-mudah.md`
- [ ] `osn-sma-inf-03b-formula-fungsi-sedang.md`
- [ ] `osn-sma-inf-03b-formula-fungsi-sulit.md`
- [ ] `osn-sma-inf-03b-formula-fungsi-mudah-sedang.md`
- [ ] `osn-sma-inf-03b-formula-fungsi-sedang-sulit.md`

**INF-03c · Sorting & Filtering Data** (fokus Kab–Prov)
- [ ] `osn-sma-inf-03c-sorting-filtering-campur.md`
- [ ] `osn-sma-inf-03c-sorting-filtering-mudah.md`
- [ ] `osn-sma-inf-03c-sorting-filtering-sedang.md`
- [ ] `osn-sma-inf-03c-sorting-filtering-sulit.md`
- [ ] `osn-sma-inf-03c-sorting-filtering-mudah-sedang.md`
- [ ] `osn-sma-inf-03c-sorting-filtering-sedang-sulit.md`

**INF-03d · Pivot Table & Agregasi** (fokus Prov)
- [ ] `osn-sma-inf-03d-pivot-agregasi-campur.md`
- [ ] `osn-sma-inf-03d-pivot-agregasi-mudah.md`
- [ ] `osn-sma-inf-03d-pivot-agregasi-sedang.md`
- [ ] `osn-sma-inf-03d-pivot-agregasi-sulit.md`
- [ ] `osn-sma-inf-03d-pivot-agregasi-mudah-sedang.md`
- [ ] `osn-sma-inf-03d-pivot-agregasi-sedang-sulit.md`

**INF-03e · Visualisasi Data (Grafik, Chart)** (fokus Kab)
- [ ] `osn-sma-inf-03e-visualisasi-data-campur.md`
- [ ] `osn-sma-inf-03e-visualisasi-data-mudah.md`
- [ ] `osn-sma-inf-03e-visualisasi-data-sedang.md`
- [ ] `osn-sma-inf-03e-visualisasi-data-sulit.md`
- [ ] `osn-sma-inf-03e-visualisasi-data-mudah-sedang.md`
- [ ] `osn-sma-inf-03e-visualisasi-data-sedang-sulit.md`

**INF-03f · Database Sederhana (Relasi & Query)** (fokus Prov)
- [ ] `osn-sma-inf-03f-database-query-campur.md`
- [ ] `osn-sma-inf-03f-database-query-mudah.md`
- [ ] `osn-sma-inf-03f-database-query-sedang.md`
- [ ] `osn-sma-inf-03f-database-query-sulit.md`
- [ ] `osn-sma-inf-03f-database-query-mudah-sedang.md`
- [ ] `osn-sma-inf-03f-database-query-sedang-sulit.md`

**INF-03g · Big Data (Pengantar)** (fokus Nas)
- [ ] `osn-sma-inf-03g-big-data-campur.md`
- [ ] `osn-sma-inf-03g-big-data-mudah.md`
- [ ] `osn-sma-inf-03g-big-data-sedang.md`
- [ ] `osn-sma-inf-03g-big-data-sulit.md`
- [ ] `osn-sma-inf-03g-big-data-mudah-sedang.md`
- [ ] `osn-sma-inf-03g-big-data-sedang-sulit.md`

### INF-04 · Algoritma & Pseudocode (8 sub-bab)

**INF-04a · Konsep Algoritma & Pseudocode** (fokus Kab)
- [ ] `osn-sma-inf-04a-konsep-algoritma-campur.md`
- [ ] `osn-sma-inf-04a-konsep-algoritma-mudah.md`
- [ ] `osn-sma-inf-04a-konsep-algoritma-sedang.md`
- [ ] `osn-sma-inf-04a-konsep-algoritma-sulit.md`
- [ ] `osn-sma-inf-04a-konsep-algoritma-mudah-sedang.md`
- [ ] `osn-sma-inf-04a-konsep-algoritma-sedang-sulit.md`

**INF-04b · Sekuensial (Urutan)** (fokus Kab)
- [ ] `osn-sma-inf-04b-sekuensial-campur.md`
- [ ] `osn-sma-inf-04b-sekuensial-mudah.md`
- [ ] `osn-sma-inf-04b-sekuensial-sedang.md`
- [ ] `osn-sma-inf-04b-sekuensial-sulit.md`
- [ ] `osn-sma-inf-04b-sekuensial-mudah-sedang.md`
- [ ] `osn-sma-inf-04b-sekuensial-sedang-sulit.md`

**INF-04c · Percabangan (If-Else, Switch)** (fokus Kab–Prov)
- [ ] `osn-sma-inf-04c-percabangan-campur.md`
- [ ] `osn-sma-inf-04c-percabangan-mudah.md`
- [ ] `osn-sma-inf-04c-percabangan-sedang.md`
- [ ] `osn-sma-inf-04c-percabangan-sulit.md`
- [ ] `osn-sma-inf-04c-percabangan-mudah-sedang.md`
- [ ] `osn-sma-inf-04c-percabangan-sedang-sulit.md`

**INF-04d · Perulangan (For, While, Do-While)** (fokus Kab–Prov)
- [ ] `osn-sma-inf-04d-perulangan-campur.md`
- [ ] `osn-sma-inf-04d-perulangan-mudah.md`
- [ ] `osn-sma-inf-04d-perulangan-sedang.md`
- [ ] `osn-sma-inf-04d-perulangan-sulit.md`
- [ ] `osn-sma-inf-04d-perulangan-mudah-sedang.md`
- [ ] `osn-sma-inf-04d-perulangan-sedang-sulit.md`

**INF-04e · Rekursi** (fokus Prov–Nas)
- [ ] `osn-sma-inf-04e-rekursi-campur.md`
- [ ] `osn-sma-inf-04e-rekursi-mudah.md`
- [ ] `osn-sma-inf-04e-rekursi-sedang.md`
- [ ] `osn-sma-inf-04e-rekursi-sulit.md`
- [ ] `osn-sma-inf-04e-rekursi-mudah-sedang.md`
- [ ] `osn-sma-inf-04e-rekursi-sedang-sulit.md`

**INF-04f · Algoritma Pencarian (Linear, Biner)** (fokus Prov)
- [ ] `osn-sma-inf-04f-pencarian-campur.md`
- [ ] `osn-sma-inf-04f-pencarian-mudah.md`
- [ ] `osn-sma-inf-04f-pencarian-sedang.md`
- [ ] `osn-sma-inf-04f-pencarian-sulit.md`
- [ ] `osn-sma-inf-04f-pencarian-mudah-sedang.md`
- [ ] `osn-sma-inf-04f-pencarian-sedang-sulit.md`

**INF-04g · Algoritma Pengurutan (Bubble, Selection, Insertion)** (fokus Prov)
- [ ] `osn-sma-inf-04g-pengurutan-campur.md`
- [ ] `osn-sma-inf-04g-pengurutan-mudah.md`
- [ ] `osn-sma-inf-04g-pengurutan-sedang.md`
- [ ] `osn-sma-inf-04g-pengurutan-sulit.md`
- [ ] `osn-sma-inf-04g-pengurutan-mudah-sedang.md`
- [ ] `osn-sma-inf-04g-pengurutan-sedang-sulit.md`

**INF-04h · Tracing & Analisis Output** (fokus Prov–Nas)
- [ ] `osn-sma-inf-04h-tracing-output-campur.md`
- [ ] `osn-sma-inf-04h-tracing-output-mudah.md`
- [ ] `osn-sma-inf-04h-tracing-output-sedang.md`
- [ ] `osn-sma-inf-04h-tracing-output-sulit.md`
- [ ] `osn-sma-inf-04h-tracing-output-mudah-sedang.md`
- [ ] `osn-sma-inf-04h-tracing-output-sedang-sulit.md`

### INF-05 · Struktur Data (8 sub-bab)

**INF-05a · Array (1D & 2D)** (fokus Kab–Prov)
- [ ] `osn-sma-inf-05a-array-campur.md`
- [ ] `osn-sma-inf-05a-array-mudah.md`
- [ ] `osn-sma-inf-05a-array-sedang.md`
- [ ] `osn-sma-inf-05a-array-sulit.md`
- [ ] `osn-sma-inf-05a-array-mudah-sedang.md`
- [ ] `osn-sma-inf-05a-array-sedang-sulit.md`

**INF-05b · String & Manipulasi String** (fokus Prov)
- [ ] `osn-sma-inf-05b-string-campur.md`
- [ ] `osn-sma-inf-05b-string-mudah.md`
- [ ] `osn-sma-inf-05b-string-sedang.md`
- [ ] `osn-sma-inf-05b-string-sulit.md`
- [ ] `osn-sma-inf-05b-string-mudah-sedang.md`
- [ ] `osn-sma-inf-05b-string-sedang-sulit.md`

**INF-05c · Stack (LIFO)** (fokus Prov)
- [ ] `osn-sma-inf-05c-stack-campur.md`
- [ ] `osn-sma-inf-05c-stack-mudah.md`
- [ ] `osn-sma-inf-05c-stack-sedang.md`
- [ ] `osn-sma-inf-05c-stack-sulit.md`
- [ ] `osn-sma-inf-05c-stack-mudah-sedang.md`
- [ ] `osn-sma-inf-05c-stack-sedang-sulit.md`

**INF-05d · Queue (FIFO)** (fokus Prov)
- [ ] `osn-sma-inf-05d-queue-campur.md`
- [ ] `osn-sma-inf-05d-queue-mudah.md`
- [ ] `osn-sma-inf-05d-queue-sedang.md`
- [ ] `osn-sma-inf-05d-queue-sulit.md`
- [ ] `osn-sma-inf-05d-queue-mudah-sedang.md`
- [ ] `osn-sma-inf-05d-queue-sedang-sulit.md`

**INF-05e · Linked List** (fokus Prov–Nas)
- [ ] `osn-sma-inf-05e-linked-list-campur.md`
- [ ] `osn-sma-inf-05e-linked-list-mudah.md`
- [ ] `osn-sma-inf-05e-linked-list-sedang.md`
- [ ] `osn-sma-inf-05e-linked-list-sulit.md`
- [ ] `osn-sma-inf-05e-linked-list-mudah-sedang.md`
- [ ] `osn-sma-inf-05e-linked-list-sedang-sulit.md`

**INF-05f · Tree (Binary Tree, BST)** (fokus Prov–Nas)
- [ ] `osn-sma-inf-05f-tree-bst-campur.md`
- [ ] `osn-sma-inf-05f-tree-bst-mudah.md`
- [ ] `osn-sma-inf-05f-tree-bst-sedang.md`
- [ ] `osn-sma-inf-05f-tree-bst-sulit.md`
- [ ] `osn-sma-inf-05f-tree-bst-mudah-sedang.md`
- [ ] `osn-sma-inf-05f-tree-bst-sedang-sulit.md`

**INF-05g · Hash Table (Pengantar)** (fokus Nas)
- [ ] `osn-sma-inf-05g-hash-table-campur.md`
- [ ] `osn-sma-inf-05g-hash-table-mudah.md`
- [ ] `osn-sma-inf-05g-hash-table-sedang.md`
- [ ] `osn-sma-inf-05g-hash-table-sulit.md`
- [ ] `osn-sma-inf-05g-hash-table-mudah-sedang.md`
- [ ] `osn-sma-inf-05g-hash-table-sedang-sulit.md`

**INF-05h · Operasi & Kompleksitas Dasar** (fokus Prov)
- [ ] `osn-sma-inf-05h-kompleksitas-campur.md`
- [ ] `osn-sma-inf-05h-kompleksitas-mudah.md`
- [ ] `osn-sma-inf-05h-kompleksitas-sedang.md`
- [ ] `osn-sma-inf-05h-kompleksitas-sulit.md`
- [ ] `osn-sma-inf-05h-kompleksitas-mudah-sedang.md`
- [ ] `osn-sma-inf-05h-kompleksitas-sedang-sulit.md`

### INF-06 · Graf, Pencarian & Optimasi (8 sub-bab)

**INF-06a · Konsep Graf (Vertex, Edge)** (fokus Kab–Prov)
- [ ] `osn-sma-inf-06a-konsep-graf-campur.md`
- [ ] `osn-sma-inf-06a-konsep-graf-mudah.md`
- [ ] `osn-sma-inf-06a-konsep-graf-sedang.md`
- [ ] `osn-sma-inf-06a-konsep-graf-sulit.md`
- [ ] `osn-sma-inf-06a-konsep-graf-mudah-sedang.md`
- [ ] `osn-sma-inf-06a-konsep-graf-sedang-sulit.md`

**INF-06b · Representasi Graf (Matriks Ketetanggaan, Adjacency List)** (fokus Prov)
- [ ] `osn-sma-inf-06b-representasi-graf-campur.md`
- [ ] `osn-sma-inf-06b-representasi-graf-mudah.md`
- [ ] `osn-sma-inf-06b-representasi-graf-sedang.md`
- [ ] `osn-sma-inf-06b-representasi-graf-sulit.md`
- [ ] `osn-sma-inf-06b-representasi-graf-mudah-sedang.md`
- [ ] `osn-sma-inf-06b-representasi-graf-sedang-sulit.md`

**INF-06c · Penelusuran Graf - BFS** (fokus Prov–Nas)
- [ ] `osn-sma-inf-06c-bfs-campur.md`
- [ ] `osn-sma-inf-06c-bfs-mudah.md`
- [ ] `osn-sma-inf-06c-bfs-sedang.md`
- [ ] `osn-sma-inf-06c-bfs-sulit.md`
- [ ] `osn-sma-inf-06c-bfs-mudah-sedang.md`
- [ ] `osn-sma-inf-06c-bfs-sedang-sulit.md`

**INF-06d · Penelusuran Graf - DFS** (fokus Prov–Nas)
- [ ] `osn-sma-inf-06d-dfs-campur.md`
- [ ] `osn-sma-inf-06d-dfs-mudah.md`
- [ ] `osn-sma-inf-06d-dfs-sedang.md`
- [ ] `osn-sma-inf-06d-dfs-sulit.md`
- [ ] `osn-sma-inf-06d-dfs-mudah-sedang.md`
- [ ] `osn-sma-inf-06d-dfs-sedang-sulit.md`

**INF-06e · Shortest Path (Dijkstra - Pengantar)** (fokus Nas)
- [ ] `osn-sma-inf-06e-dijkstra-campur.md`
- [ ] `osn-sma-inf-06e-dijkstra-mudah.md`
- [ ] `osn-sma-inf-06e-dijkstra-sedang.md`
- [ ] `osn-sma-inf-06e-dijkstra-sulit.md`
- [ ] `osn-sma-inf-06e-dijkstra-mudah-sedang.md`
- [ ] `osn-sma-inf-06e-dijkstra-sedang-sulit.md`

**INF-06f · Minimum Spanning Tree (Kruskal, Prim - Pengantar)** (fokus Nas)
- [ ] `osn-sma-inf-06f-mst-campur.md`
- [ ] `osn-sma-inf-06f-mst-mudah.md`
- [ ] `osn-sma-inf-06f-mst-sedang.md`
- [ ] `osn-sma-inf-06f-mst-sulit.md`
- [ ] `osn-sma-inf-06f-mst-mudah-sedang.md`
- [ ] `osn-sma-inf-06f-mst-sedang-sulit.md`

**INF-06g · Pewarnaan Graf** (fokus Prov–Nas)
- [ ] `osn-sma-inf-06g-pewarnaan-graf-campur.md`
- [ ] `osn-sma-inf-06g-pewarnaan-graf-mudah.md`
- [ ] `osn-sma-inf-06g-pewarnaan-graf-sedang.md`
- [ ] `osn-sma-inf-06g-pewarnaan-graf-sulit.md`
- [ ] `osn-sma-inf-06g-pewarnaan-graf-mudah-sedang.md`
- [ ] `osn-sma-inf-06g-pewarnaan-graf-sedang-sulit.md`

**INF-06h · Tracing Penelusuran Graf** (fokus Prov–Nas)
- [ ] `osn-sma-inf-06h-tracing-graf-campur.md`
- [ ] `osn-sma-inf-06h-tracing-graf-mudah.md`
- [ ] `osn-sma-inf-06h-tracing-graf-sedang.md`
- [ ] `osn-sma-inf-06h-tracing-graf-sulit.md`
- [ ] `osn-sma-inf-06h-tracing-graf-mudah-sedang.md`
- [ ] `osn-sma-inf-06h-tracing-graf-sedang-sulit.md`

### INF-07 · Kombinatorika Komputasional (8 sub-bab)

**INF-07a · Counting (Aturan Perkalian, Penjumlahan)** (fokus Kab–Prov)
- [ ] `osn-sma-inf-07a-counting-campur.md`
- [ ] `osn-sma-inf-07a-counting-mudah.md`
- [ ] `osn-sma-inf-07a-counting-sedang.md`
- [ ] `osn-sma-inf-07a-counting-sulit.md`
- [ ] `osn-sma-inf-07a-counting-mudah-sedang.md`
- [ ] `osn-sma-inf-07a-counting-sedang-sulit.md`

**INF-07b · Permutasi & Kombinasi Komputasional** (fokus Prov)
- [ ] `osn-sma-inf-07b-permutasi-kombinasi-komp-campur.md`
- [ ] `osn-sma-inf-07b-permutasi-kombinasi-komp-mudah.md`
- [ ] `osn-sma-inf-07b-permutasi-kombinasi-komp-sedang.md`
- [ ] `osn-sma-inf-07b-permutasi-kombinasi-komp-sulit.md`
- [ ] `osn-sma-inf-07b-permutasi-kombinasi-komp-mudah-sedang.md`
- [ ] `osn-sma-inf-07b-permutasi-kombinasi-komp-sedang-sulit.md`

**INF-07c · Backtracking (N-Queens, Sudoku - Pengantar)** (fokus Nas)
- [ ] `osn-sma-inf-07c-backtracking-campur.md`
- [ ] `osn-sma-inf-07c-backtracking-mudah.md`
- [ ] `osn-sma-inf-07c-backtracking-sedang.md`
- [ ] `osn-sma-inf-07c-backtracking-sulit.md`
- [ ] `osn-sma-inf-07c-backtracking-mudah-sedang.md`
- [ ] `osn-sma-inf-07c-backtracking-sedang-sulit.md`

**INF-07d · Brute Force Enumeration** (fokus Prov)
- [ ] `osn-sma-inf-07d-brute-force-campur.md`
- [ ] `osn-sma-inf-07d-brute-force-mudah.md`
- [ ] `osn-sma-inf-07d-brute-force-sedang.md`
- [ ] `osn-sma-inf-07d-brute-force-sulit.md`
- [ ] `osn-sma-inf-07d-brute-force-mudah-sedang.md`
- [ ] `osn-sma-inf-07d-brute-force-sedang-sulit.md`

**INF-07e · Dynamic Programming (Pengantar)** (fokus Nas)
- [ ] `osn-sma-inf-07e-dynamic-programming-campur.md`
- [ ] `osn-sma-inf-07e-dynamic-programming-mudah.md`
- [ ] `osn-sma-inf-07e-dynamic-programming-sedang.md`
- [ ] `osn-sma-inf-07e-dynamic-programming-sulit.md`
- [ ] `osn-sma-inf-07e-dynamic-programming-mudah-sedang.md`
- [ ] `osn-sma-inf-07e-dynamic-programming-sedang-sulit.md`

**INF-07f · Greedy Algorithm (Pengantar)** (fokus Prov–Nas)
- [ ] `osn-sma-inf-07f-greedy-campur.md`
- [ ] `osn-sma-inf-07f-greedy-mudah.md`
- [ ] `osn-sma-inf-07f-greedy-sedang.md`
- [ ] `osn-sma-inf-07f-greedy-sulit.md`
- [ ] `osn-sma-inf-07f-greedy-mudah-sedang.md`
- [ ] `osn-sma-inf-07f-greedy-sedang-sulit.md`

**INF-07g · Inklusi-Eksklusi** (fokus Prov–Nas)
- [ ] `osn-sma-inf-07g-inklusi-eksklusi-campur.md`
- [ ] `osn-sma-inf-07g-inklusi-eksklusi-mudah.md`
- [ ] `osn-sma-inf-07g-inklusi-eksklusi-sedang.md`
- [ ] `osn-sma-inf-07g-inklusi-eksklusi-sulit.md`
- [ ] `osn-sma-inf-07g-inklusi-eksklusi-mudah-sedang.md`
- [ ] `osn-sma-inf-07g-inklusi-eksklusi-sedang-sulit.md`

**INF-07h · Soal Tracing Algoritma Kombinatorik** (fokus Nas)
- [ ] `osn-sma-inf-07h-tracing-kombinatorik-campur.md`
- [ ] `osn-sma-inf-07h-tracing-kombinatorik-mudah.md`
- [ ] `osn-sma-inf-07h-tracing-kombinatorik-sedang.md`
- [ ] `osn-sma-inf-07h-tracing-kombinatorik-sulit.md`
- [ ] `osn-sma-inf-07h-tracing-kombinatorik-mudah-sedang.md`
- [ ] `osn-sma-inf-07h-tracing-kombinatorik-sedang-sulit.md`

### INF-08 · Berpikir Komputasional Lanjut & Soal Bebras (8 sub-bab)

**INF-08a · Dekomposisi Masalah** (fokus Kab)
- [ ] `osn-sma-inf-08a-dekomposisi-campur.md`
- [ ] `osn-sma-inf-08a-dekomposisi-mudah.md`
- [ ] `osn-sma-inf-08a-dekomposisi-sedang.md`
- [ ] `osn-sma-inf-08a-dekomposisi-sulit.md`
- [ ] `osn-sma-inf-08a-dekomposisi-mudah-sedang.md`
- [ ] `osn-sma-inf-08a-dekomposisi-sedang-sulit.md`

**INF-08b · Pengenalan Pola** (fokus Kab)
- [ ] `osn-sma-inf-08b-pengenalan-pola-campur.md`
- [ ] `osn-sma-inf-08b-pengenalan-pola-mudah.md`
- [ ] `osn-sma-inf-08b-pengenalan-pola-sedang.md`
- [ ] `osn-sma-inf-08b-pengenalan-pola-sulit.md`
- [ ] `osn-sma-inf-08b-pengenalan-pola-mudah-sedang.md`
- [ ] `osn-sma-inf-08b-pengenalan-pola-sedang-sulit.md`

**INF-08c · Abstraksi** (fokus Kab–Prov)
- [ ] `osn-sma-inf-08c-abstraksi-campur.md`
- [ ] `osn-sma-inf-08c-abstraksi-mudah.md`
- [ ] `osn-sma-inf-08c-abstraksi-sedang.md`
- [ ] `osn-sma-inf-08c-abstraksi-sulit.md`
- [ ] `osn-sma-inf-08c-abstraksi-mudah-sedang.md`
- [ ] `osn-sma-inf-08c-abstraksi-sedang-sulit.md`

**INF-08d · Tipe Soal Bebras - Logika** (fokus Kab–Prov)
- [ ] `osn-sma-inf-08d-bebras-logika-campur.md`
- [ ] `osn-sma-inf-08d-bebras-logika-mudah.md`
- [ ] `osn-sma-inf-08d-bebras-logika-sedang.md`
- [ ] `osn-sma-inf-08d-bebras-logika-sulit.md`
- [ ] `osn-sma-inf-08d-bebras-logika-mudah-sedang.md`
- [ ] `osn-sma-inf-08d-bebras-logika-sedang-sulit.md`

**INF-08e · Tipe Soal Bebras - Algoritma** (fokus Kab–Prov)
- [ ] `osn-sma-inf-08e-bebras-algoritma-campur.md`
- [ ] `osn-sma-inf-08e-bebras-algoritma-mudah.md`
- [ ] `osn-sma-inf-08e-bebras-algoritma-sedang.md`
- [ ] `osn-sma-inf-08e-bebras-algoritma-sulit.md`
- [ ] `osn-sma-inf-08e-bebras-algoritma-mudah-sedang.md`
- [ ] `osn-sma-inf-08e-bebras-algoritma-sedang-sulit.md`

**INF-08f · Tipe Soal Bebras - Data** (fokus Prov)
- [ ] `osn-sma-inf-08f-bebras-data-campur.md`
- [ ] `osn-sma-inf-08f-bebras-data-mudah.md`
- [ ] `osn-sma-inf-08f-bebras-data-sedang.md`
- [ ] `osn-sma-inf-08f-bebras-data-sulit.md`
- [ ] `osn-sma-inf-08f-bebras-data-mudah-sedang.md`
- [ ] `osn-sma-inf-08f-bebras-data-sedang-sulit.md`

**INF-08g · Tipe Soal Bebras - Jaringan & Sosial** (fokus Prov)
- [ ] `osn-sma-inf-08g-bebras-jaringan-sosial-campur.md`
- [ ] `osn-sma-inf-08g-bebras-jaringan-sosial-mudah.md`
- [ ] `osn-sma-inf-08g-bebras-jaringan-sosial-sedang.md`
- [ ] `osn-sma-inf-08g-bebras-jaringan-sosial-sulit.md`
- [ ] `osn-sma-inf-08g-bebras-jaringan-sosial-mudah-sedang.md`
- [ ] `osn-sma-inf-08g-bebras-jaringan-sosial-sedang-sulit.md`

**INF-08h · Studi Kasus Berpikir Komputasional** (fokus Prov–Nas)
- [ ] `osn-sma-inf-08h-studi-kasus-bk-campur.md`
- [ ] `osn-sma-inf-08h-studi-kasus-bk-mudah.md`
- [ ] `osn-sma-inf-08h-studi-kasus-bk-sedang.md`
- [ ] `osn-sma-inf-08h-studi-kasus-bk-sulit.md`
- [ ] `osn-sma-inf-08h-studi-kasus-bk-mudah-sedang.md`
- [ ] `osn-sma-inf-08h-studi-kasus-bk-sedang-sulit.md`

---

## Rekap Statistik Sub-Bab

| Bab | Sub-Bab | File (×6 tingkat) | Soal |
|-----|---------|-------------------|------|
| MTK-01 · Aljabar | 11 | 66 | 6.600 |
| MTK-02 · Teori Bilangan | 10 | 60 | 6.000 |
| MTK-03 · Geometri | 11 | 66 | 6.600 |
| MTK-04 · Kombinatorika | 10 | 60 | 6.000 |
| MTK-05 · Trigonometri & Identitas | 11 | 66 | 6.600 |
| MTK-06 · Kalkulus | 11 | 66 | 6.600 |
| MTK-07 · Fungsi & Pertidaksamaan Lanjut | 8 | 48 | 4.800 |
| MTK-08 · Statistika, Peluang & Distribusi | 10 | 60 | 6.000 |
| **Subtotal MTK** | **82** | **492** | **49.200** |
| FIS-01 · Kinematika | 9 | 54 | 5.400 |
| FIS-02 · Dinamika | 10 | 60 | 6.000 |
| FIS-03 · Usaha, Energi & Momentum | 10 | 60 | 6.000 |
| FIS-04 · Rotasi, Benda Tegar & Kesetimbangan | 9 | 54 | 5.400 |
| FIS-05 · Fluida | 9 | 54 | 5.400 |
| FIS-06 · Termodinamika & Teori Kinetik Gas | 10 | 60 | 6.000 |
| FIS-07 · Getaran, Gelombang & Bunyi | 9 | 54 | 5.400 |
| FIS-08 · Optik | 9 | 54 | 5.400 |
| FIS-09 · Listrik & Magnet | 10 | 60 | 6.000 |
| FIS-10 · Fisika Modern | 9 | 54 | 5.400 |
| **Subtotal Fisika** | **94** | **564** | **56.400** |
| KIM-01 · Struktur Atom & Sistem Periodik | 9 | 54 | 5.400 |
| KIM-02 · Ikatan Kimia & Geometri Molekul | 9 | 54 | 5.400 |
| KIM-03 · Stoikiometri | 9 | 54 | 5.400 |
| KIM-04 · Larutan, Koloid & Sifat Koligatif | 8 | 48 | 4.800 |
| KIM-05 · Termokimia | 8 | 48 | 4.800 |
| KIM-06 · Kinetika Kimia | 8 | 48 | 4.800 |
| KIM-07 · Kesetimbangan Kimia | 8 | 48 | 4.800 |
| KIM-08 · Asam-Basa, Buffer & Hidrolisis | 9 | 54 | 5.400 |
| KIM-09 · Elektrokimia & Sel Galvani | 8 | 48 | 4.800 |
| KIM-10 · Kimia Organik & Polimer | 10 | 60 | 6.000 |
| **Subtotal Kimia** | **86** | **516** | **51.600** |
| BIO-01 · Sel & Bioenergetika | 10 | 60 | 6.000 |
| BIO-02 · Genetika Molekuler & Pewarisan | 10 | 60 | 6.000 |
| BIO-03 · Evolusi & Biologi Molekuler | 8 | 48 | 4.800 |
| BIO-04 · Anatomi & Fisiologi Hewan | 10 | 60 | 6.000 |
| BIO-05 · Anatomi & Fisiologi Tumbuhan | 9 | 54 | 5.400 |
| BIO-06 · Ekologi & Biogeografi | 10 | 60 | 6.000 |
| BIO-07 · Mikrobiologi, Bioteknologi & Imunologi | 9 | 54 | 5.400 |
| BIO-08 · Etologi & Sistematika | 9 | 54 | 5.400 |
| **Subtotal Biologi** | **75** | **450** | **45.000** |
| AST-01 · Bola Langit & Sistem Koordinat | 9 | 54 | 5.400 |
| AST-02 · Mekanika Benda Langit | 8 | 48 | 4.800 |
| AST-03 · Tata Surya | 9 | 54 | 5.400 |
| AST-04 · Bintang | 9 | 54 | 5.400 |
| AST-05 · Evolusi Bintang & Astrofisika | 8 | 48 | 4.800 |
| AST-06 · Galaksi & Kosmologi | 9 | 54 | 5.400 |
| AST-07 · Instrumentasi Astronomi | 8 | 48 | 4.800 |
| **Subtotal Astronomi** | **60** | **360** | **36.000** |
| KEB-01 · Geologi | 10 | 60 | 6.000 |
| KEB-02 · Meteorologi & Klimatologi | 10 | 60 | 6.000 |
| KEB-03 · Oseanografi | 9 | 54 | 5.400 |
| KEB-04 · Astronomi Kebumian | 8 | 48 | 4.800 |
| KEB-05 · Hidrologi & Sumber Daya Air | 7 | 42 | 4.200 |
| KEB-06 · Mitigasi Bencana & Geologi Lingkungan | 8 | 48 | 4.800 |
| **Subtotal Kebumian** | **52** | **312** | **31.200** |
| GEO-01 · Dasar Geografi, Peta & Inderaja | 7 | 42 | 4.200 |
| GEO-02 · Geografi Fisik | 7 | 42 | 4.200 |
| GEO-03 · Geografi Manusia | 7 | 42 | 4.200 |
| GEO-04 · Geografi Ekonomi | 7 | 42 | 4.200 |
| GEO-05 · Geografi Regional | 8 | 48 | 4.800 |
| GEO-06 · SIG, Mitigasi & Pembangunan Berkelanjutan | 7 | 42 | 4.200 |
| **Subtotal Geografi** | **43** | **258** | **25.800** |
| EKO-01 · Konsep Dasar Ekonomi & Permintaan-Penawaran | 9 | 54 | 5.400 |
| EKO-02 · Pasar & Struktur Pasar | 8 | 48 | 4.800 |
| EKO-03 · Mikroekonomi | 8 | 48 | 4.800 |
| EKO-04 · Makroekonomi | 8 | 48 | 4.800 |
| EKO-05 · Uang, Bank & Kebijakan Moneter | 7 | 42 | 4.200 |
| EKO-06 · APBN, Perpajakan & Fiskal | 8 | 48 | 4.800 |
| EKO-07 · Perdagangan Internasional & Kurs | 8 | 48 | 4.800 |
| EKO-08 · Akuntansi Dasar & Manajemen | 8 | 48 | 4.800 |
| **Subtotal Ekonomi** | **64** | **384** | **38.400** |
| INF-01 · Logika, Proposisi & Pemecahan Masalah | 8 | 48 | 4.800 |
| INF-02 · Aritmetika Komputasional & Representasi Data | 8 | 48 | 4.800 |
| INF-03 · Analitika Data & Tabel | 7 | 42 | 4.200 |
| INF-04 · Algoritma & Pseudocode | 8 | 48 | 4.800 |
| INF-05 · Struktur Data | 8 | 48 | 4.800 |
| INF-06 · Graf, Pencarian & Optimasi | 8 | 48 | 4.800 |
| INF-07 · Kombinatorika Komputasional | 8 | 48 | 4.800 |
| INF-08 · Berpikir Komputasional Lanjut & Bebras | 8 | 48 | 4.800 |
| **Subtotal Informatika** | **63** | **378** | **37.800** |
| **TOTAL** | **619** | **3.714** | **371.400** |

---

## Catatan Eksekusi

- **1 file = 100 soal PG**, semua pada satu sub-bab. Variasi dicipta lewat kombinasi tipe soal khas olimpiade + ragam angka + ragam konteks.
- Default ekstensi `.md` (markdown teks lengkap dengan Bagian I Materi + Bagian II 100 Soal + Bagian III Ringkasan). HTML interaktif `.html` hanya kalau user eksplisit minta.
- Struktur file sama dengan Mode Per-Materi MASTER-INDEX: **Bagian I (Materi) + Bagian II (100 Soal) + Bagian III (Ringkasan)** — tapi Bagian I difokuskan pada satu sub-bab saja.
- Update centang `[ ]` → `[x]` setiap kali file selesai. Index ini adalah sumber kebenaran untuk progres sub-bab.
- File ini **melengkapi** [_MASTER-INDEX.md](_MASTER-INDEX.md), bukan menggantinya. Gunakan MASTER-INDEX untuk paket bab-level luas, dan file ini untuk drill mendalam satu sub-topik level olimpiade.
- Urutan eksekusi default mengikuti urutan sub-bab di taksonomi (alfabetis kode huruf). User boleh redirect kapan saja.

### Catatan khusus per mapel SMA

- **Matematika**: Tingkat Nas mengacu pola IMO-Shortlist dan KSN-N (soal pendek bernuansa proof yang diadaptasi ke PG via "manakah nilai yang benar / pernyataan yang konsisten dengan derivasi").
- **Fisika**: Tingkat Nas mengacu pola IPhO/KSN-N. Banyak soal multi-step membutuhkan derivasi 2–4 persamaan sebelum jawaban final muncul. Diagram benda bebas, grafik v-t, sketsa rangkaian wajib disertakan di soal.
- **Kimia**: Soal stoikiometri, kesetimbangan, kinetika sering pakai data tabel (konsentrasi vs waktu, suhu vs K) yang harus diinterpretasi. Pola IChO/KSN-N.
- **Biologi**: Pedigree, persilangan multi-gen, dan analisis ekologi/etologi sering pakai gambar/diagram. Pola IBO/KSN-N. Tingkat Nas membutuhkan pengetahuan biologi molekuler eksperimental (PCR, gel elektroforesis, pemilihan eksperimen yang valid).
- **Astronomi**: Default opsi A–E (bukan A–D), terutama tingkat Prov & Nas, sesuai pola IOAA/KSN-N. Soal sering pakai data tabel (magnitudo, paralaks) dan butuh derivasi numerik 3–5 langkah.
- **Kebumian**: Default opsi A–E. Pola IESO/KSN-N. Soal sering pakai peta geologi, penampang stratigrafi, citra satelit, atau diagram cuaca.
- **Geografi**: Pola iGeo/KSN-N. Soal sering pakai peta, citra inderaja, tabel data demografi/ekonomi. Tingkat Nas membutuhkan analisis spasial multi-layer.
- **Ekonomi**: Pola IEO/KSN-N. Banyak soal grafik (kurva supply-demand, IS-LM, kurva indiferens). Adaptasi soal multi-pernyataan ke 4 opsi via "manakah kombinasi pernyataan yang benar" tetap dijaga.
- **Informatika**: Format 100% PG (bukan menulis kode penuh). Fokus pada *tracing algoritma* (output dari pseudocode), *complexity analysis* (Big-O), *graph reasoning* (penelusuran BFS/DFS step-by-step), *combinatorial counting*. Pola Bebras/OSK-OSP Informatika. Untuk soal tracing, sertakan pseudocode lengkap di badan soal.

---

## Trigger Generation per Sub-Bab

Untuk minta generate file sub-bab, gunakan trigger spesifik:

- "Generate `osn-sma-fis-04f-momentum-sudut-sulit.md`"
- "Buatkan 100 soal sub-bab Hukum Hess tingkat Nasional"
- "Sub-bab AST-04f diagram HR, tingkat campur"
- "Lanjutkan dari MASTER-SUBBAB-INDEX baris berikutnya yang belum dicentang"

Default behaviour: skill akan baca taksonomi & contoh soal terkait → ambil **Tipe Soal Khas Olimpiade** dan **Miskonsepsi** untuk sub-bab itu → distribusikan 100 soal di antaranya dengan komposisi tingkat sesuai slug `-mudah / -sedang / -sulit / -campur / -mudah-sedang / -sedang-sulit`.

