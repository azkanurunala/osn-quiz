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
