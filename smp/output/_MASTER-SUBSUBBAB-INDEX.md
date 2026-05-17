# OSN SMP Prep — MASTER SUB-SUB-BAB INDEX

> Pemecahan lanjutan dari [_MASTER-SUBBAB-INDEX.md](_MASTER-SUBBAB-INDEX.md) — setiap **sub-bab dibedah jadi sub-sub-bab** (mikrotopik),
> setiap sub-sub-bab × 6 tingkat = 1 paket drill 100 soal sangat terfokus pada satu mikrotopik tunggal.
>
> **~1.050 sub-sub-bab × 6 tingkat = ~6.300 file × 100 soal PG = ~630.000 soal terfokus**
>
> Setiap file: 100 soal PG dengan analisis 4 opsi — tapi 100% materinya digali di satu mikrotopik → drill ultra-mendalam.

---

## Konvensi Penamaan File

```
osn-smp-{mapel}-{kodeBab}{kodeSubbab}-{kodeSubSubbab}-{slug}-{tingkat}.md
```

- `mapel` = `mtk` · `fis` · `bio` · `ips`
- `kodeBab` = `01`–`10` (per mapel)
- `kodeSubbab` = huruf kecil `a`, `b`, `c`, … `l`
- `kodeSubSubbab` = angka `1`, `2`, `3`, … (sub-sub-bab dalam satu sub-bab)
- `slug` = ringkas, kebab-case
- `tingkat` = `campur` · `mudah` · `sedang` · `sulit` · `mudah-sedang` · `sedang-sulit`

**Contoh:** `osn-smp-mtk-01c-3-cerita-kpk-sulit.md` = MTK Bab 01 sub-bab c (KPK & FPB) sub-sub-bab 3 (Soal Cerita KPK), 100 soal tingkat Nasional saja.

Untuk konvensi tingkat (komposisi soal Kab/Prov/Nas), distribusi, dan aturan kualitas — lihat [_MASTER-INDEX.md](_MASTER-INDEX.md) dan [SKILL.md](../../osn-sd-prep-extracted/osn-sd-prep/SKILL.md).

> **Catatan:** Saat generate file sub-sub-bab, **seluruh 100 soal HARUS pada mikrotopik tunggal itu**. Mikrotopik biasanya sempit (mis. "Konversi Desimal Berulang ke Pecahan") sehingga variasi 100 soal dicapai melalui ragam angka, konteks, dan sudut tanya — bukan dengan menyimpang ke sub-sub-bab lain.

---

## ⛔ Aturan Anti-Duplikasi (EKSTRA WAJIB di Level Sub-Sub-Bab)

Pada level sub-sub-bab, **risiko duplikasi soal jauh lebih tinggi** dibanding level sub-bab. Anti-duplikasi tetap aturan utama.

1. **Tetap 100 soal per file** — tidak boleh dipotong meskipun mikrotopik terasa sempit. Mikrotopik sempit = wajib ekspansi via ragam konteks ekstrem (10+ setting konteks berbeda untuk 100 soal).
2. **Tidak boleh ada dua soal yang sama persis dalam satu file** — kombinasi (konteks + angka + struktur kalimat + tipe penalaran) harus berbeda total. Reword saja ≠ soal baru.
3. **Tidak boleh sama dengan sub-sub-bab lain dalam sub-bab yang sama** — mis. soal `01a-1` (Penjumlahan Bilangan Bulat) jangan sampai mirip dengan `01a-3` (Operasi Campuran). Boundary mikrotopik harus dijaga.
4. **Tidak boleh sama dengan file tingkat lain pada sub-sub-bab yang sama** — 6 file tingkat per sub-sub-bab = 600 soal yang semuanya unik.
5. **Tidak boleh sama persis dengan soal di file SUB-BAB asalnya** — jika `01c · KPK & FPB` sudah punya file, soal di `01c-1 · KPK Faktorisasi Prima` tidak boleh persis sama dengan soal-soal KPK di file sub-bab tersebut.
6. **Diversifikasi via 5 sumbu** (lebih ketat dari level sub-bab):
   - **Konteks**: sekolah, lab, olahraga, perjalanan, pasar, dapur, kebun, industri, alam, transportasi, perayaan, teknologi (rotasi wajib semua 12 setting dalam 100 soal).
   - **Angka & satuan**: pakai rentang variatif, hindari triple yang sama >2×.
   - **Subjek/aktor**: 20+ nama berbeda dalam 100 soal.
   - **Sudut tanya**: minimal 6 ragam ("berapa…", "manakah…", "jika…maka…", "berapa selisih…", "kapan terjadi…", "kombinasi yang benar…").
   - **Bentuk soal**: minimal 4 bentuk (numerik langsung, identifikasi, perbandingan, tabel/grafik).
7. **Verifikasi sebelum save** — scan 100 soal cek: (a) tidak ada 2 soal struktur >80% sama, (b) angka tidak diulang >2×, (c) konteks tersebar di 8+ setting, (d) tidak menyimpang ke sub-sub-bab lain.

---

## A · MTK Per Sub-Sub-Bab

### MTK-01 · Bilangan & Operasi (~40 sub-sub-bab)

#### MTK-01a · Bilangan Bulat & Operasinya

**MTK-01a-1 · Penjumlahan & Pengurangan Bilangan Bulat** (fokus Kab)
- [ ] `osn-smp-mtk-01a-1-jumlah-kurang-bulat-campur.md`
- [ ] `osn-smp-mtk-01a-1-jumlah-kurang-bulat-mudah.md`
- [ ] `osn-smp-mtk-01a-1-jumlah-kurang-bulat-sedang.md`
- [ ] `osn-smp-mtk-01a-1-jumlah-kurang-bulat-sulit.md`
- [ ] `osn-smp-mtk-01a-1-jumlah-kurang-bulat-mudah-sedang.md`
- [ ] `osn-smp-mtk-01a-1-jumlah-kurang-bulat-sedang-sulit.md`

**MTK-01a-2 · Perkalian & Pembagian Bilangan Bulat** (fokus Kab)
- [ ] `osn-smp-mtk-01a-2-kali-bagi-bulat-campur.md`
- [ ] `osn-smp-mtk-01a-2-kali-bagi-bulat-mudah.md`
- [ ] `osn-smp-mtk-01a-2-kali-bagi-bulat-sedang.md`
- [ ] `osn-smp-mtk-01a-2-kali-bagi-bulat-sulit.md`
- [ ] `osn-smp-mtk-01a-2-kali-bagi-bulat-mudah-sedang.md`
- [ ] `osn-smp-mtk-01a-2-kali-bagi-bulat-sedang-sulit.md`

**MTK-01a-3 · Operasi Hitung Campuran Bilangan Bulat (Aturan Urutan)** (fokus Kab)
- [ ] `osn-smp-mtk-01a-3-campuran-bulat-campur.md`
- [ ] `osn-smp-mtk-01a-3-campuran-bulat-mudah.md`
- [ ] `osn-smp-mtk-01a-3-campuran-bulat-sedang.md`
- [ ] `osn-smp-mtk-01a-3-campuran-bulat-sulit.md`
- [ ] `osn-smp-mtk-01a-3-campuran-bulat-mudah-sedang.md`
- [ ] `osn-smp-mtk-01a-3-campuran-bulat-sedang-sulit.md`

**MTK-01a-4 · Soal Cerita Bilangan Bulat (Suhu, Kedalaman, Saldo)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01a-4-cerita-bulat-campur.md`
- [ ] `osn-smp-mtk-01a-4-cerita-bulat-mudah.md`
- [ ] `osn-smp-mtk-01a-4-cerita-bulat-sedang.md`
- [ ] `osn-smp-mtk-01a-4-cerita-bulat-sulit.md`
- [ ] `osn-smp-mtk-01a-4-cerita-bulat-mudah-sedang.md`
- [ ] `osn-smp-mtk-01a-4-cerita-bulat-sedang-sulit.md`

#### MTK-01b · Bilangan Pecahan & Operasinya

**MTK-01b-1 · Konsep & Bentuk Pecahan (Biasa, Campuran, Desimal)** (fokus Kab)
- [ ] `osn-smp-mtk-01b-1-konsep-pecahan-campur.md`
- [ ] `osn-smp-mtk-01b-1-konsep-pecahan-mudah.md`
- [ ] `osn-smp-mtk-01b-1-konsep-pecahan-sedang.md`
- [ ] `osn-smp-mtk-01b-1-konsep-pecahan-sulit.md`
- [ ] `osn-smp-mtk-01b-1-konsep-pecahan-mudah-sedang.md`
- [ ] `osn-smp-mtk-01b-1-konsep-pecahan-sedang-sulit.md`

**MTK-01b-2 · Penjumlahan & Pengurangan Pecahan** (fokus Kab)
- [ ] `osn-smp-mtk-01b-2-jumlah-kurang-pecahan-campur.md`
- [ ] `osn-smp-mtk-01b-2-jumlah-kurang-pecahan-mudah.md`
- [ ] `osn-smp-mtk-01b-2-jumlah-kurang-pecahan-sedang.md`
- [ ] `osn-smp-mtk-01b-2-jumlah-kurang-pecahan-sulit.md`
- [ ] `osn-smp-mtk-01b-2-jumlah-kurang-pecahan-mudah-sedang.md`
- [ ] `osn-smp-mtk-01b-2-jumlah-kurang-pecahan-sedang-sulit.md`

**MTK-01b-3 · Perkalian & Pembagian Pecahan** (fokus Kab)
- [ ] `osn-smp-mtk-01b-3-kali-bagi-pecahan-campur.md`
- [ ] `osn-smp-mtk-01b-3-kali-bagi-pecahan-mudah.md`
- [ ] `osn-smp-mtk-01b-3-kali-bagi-pecahan-sedang.md`
- [ ] `osn-smp-mtk-01b-3-kali-bagi-pecahan-sulit.md`
- [ ] `osn-smp-mtk-01b-3-kali-bagi-pecahan-mudah-sedang.md`
- [ ] `osn-smp-mtk-01b-3-kali-bagi-pecahan-sedang-sulit.md`

**MTK-01b-4 · Konversi Pecahan-Desimal-Persen** (fokus Kab)
- [ ] `osn-smp-mtk-01b-4-konversi-pecahan-desimal-persen-campur.md`
- [ ] `osn-smp-mtk-01b-4-konversi-pecahan-desimal-persen-mudah.md`
- [ ] `osn-smp-mtk-01b-4-konversi-pecahan-desimal-persen-sedang.md`
- [ ] `osn-smp-mtk-01b-4-konversi-pecahan-desimal-persen-sulit.md`
- [ ] `osn-smp-mtk-01b-4-konversi-pecahan-desimal-persen-mudah-sedang.md`
- [ ] `osn-smp-mtk-01b-4-konversi-pecahan-desimal-persen-sedang-sulit.md`

**MTK-01b-5 · Soal Cerita Pecahan (Resep, Pembagian, Sisa)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01b-5-cerita-pecahan-campur.md`
- [ ] `osn-smp-mtk-01b-5-cerita-pecahan-mudah.md`
- [ ] `osn-smp-mtk-01b-5-cerita-pecahan-sedang.md`
- [ ] `osn-smp-mtk-01b-5-cerita-pecahan-sulit.md`
- [ ] `osn-smp-mtk-01b-5-cerita-pecahan-mudah-sedang.md`
- [ ] `osn-smp-mtk-01b-5-cerita-pecahan-sedang-sulit.md`

#### MTK-01c · KPK & FPB

**MTK-01c-1 · KPK - Metode Faktorisasi Prima** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01c-1-kpk-prima-campur.md`
- [ ] `osn-smp-mtk-01c-1-kpk-prima-mudah.md`
- [ ] `osn-smp-mtk-01c-1-kpk-prima-sedang.md`
- [ ] `osn-smp-mtk-01c-1-kpk-prima-sulit.md`
- [ ] `osn-smp-mtk-01c-1-kpk-prima-mudah-sedang.md`
- [ ] `osn-smp-mtk-01c-1-kpk-prima-sedang-sulit.md`

**MTK-01c-2 · FPB - Metode Faktorisasi Prima** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01c-2-fpb-prima-campur.md`
- [ ] `osn-smp-mtk-01c-2-fpb-prima-mudah.md`
- [ ] `osn-smp-mtk-01c-2-fpb-prima-sedang.md`
- [ ] `osn-smp-mtk-01c-2-fpb-prima-sulit.md`
- [ ] `osn-smp-mtk-01c-2-fpb-prima-mudah-sedang.md`
- [ ] `osn-smp-mtk-01c-2-fpb-prima-sedang-sulit.md`

**MTK-01c-3 · Soal Cerita KPK (Lampu, Lonceng, Pertemuan)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01c-3-cerita-kpk-campur.md`
- [ ] `osn-smp-mtk-01c-3-cerita-kpk-mudah.md`
- [ ] `osn-smp-mtk-01c-3-cerita-kpk-sedang.md`
- [ ] `osn-smp-mtk-01c-3-cerita-kpk-sulit.md`
- [ ] `osn-smp-mtk-01c-3-cerita-kpk-mudah-sedang.md`
- [ ] `osn-smp-mtk-01c-3-cerita-kpk-sedang-sulit.md`

**MTK-01c-4 · Soal Cerita FPB (Pembagian Barang, Kantong)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01c-4-cerita-fpb-campur.md`
- [ ] `osn-smp-mtk-01c-4-cerita-fpb-mudah.md`
- [ ] `osn-smp-mtk-01c-4-cerita-fpb-sedang.md`
- [ ] `osn-smp-mtk-01c-4-cerita-fpb-sulit.md`
- [ ] `osn-smp-mtk-01c-4-cerita-fpb-mudah-sedang.md`
- [ ] `osn-smp-mtk-01c-4-cerita-fpb-sedang-sulit.md`

#### MTK-01d · Bilangan Berpangkat (Eksponen)

**MTK-01d-1 · Konsep Pangkat & Notasi (a^n)** (fokus Kab)
- [ ] `osn-smp-mtk-01d-1-konsep-pangkat-campur.md`
- [ ] `osn-smp-mtk-01d-1-konsep-pangkat-mudah.md`
- [ ] `osn-smp-mtk-01d-1-konsep-pangkat-sedang.md`
- [ ] `osn-smp-mtk-01d-1-konsep-pangkat-sulit.md`
- [ ] `osn-smp-mtk-01d-1-konsep-pangkat-mudah-sedang.md`
- [ ] `osn-smp-mtk-01d-1-konsep-pangkat-sedang-sulit.md`

**MTK-01d-2 · Sifat Perkalian Pangkat Sebasis (a^m × a^n)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01d-2-sifat-kali-pangkat-campur.md`
- [ ] `osn-smp-mtk-01d-2-sifat-kali-pangkat-mudah.md`
- [ ] `osn-smp-mtk-01d-2-sifat-kali-pangkat-sedang.md`
- [ ] `osn-smp-mtk-01d-2-sifat-kali-pangkat-sulit.md`
- [ ] `osn-smp-mtk-01d-2-sifat-kali-pangkat-mudah-sedang.md`
- [ ] `osn-smp-mtk-01d-2-sifat-kali-pangkat-sedang-sulit.md`

**MTK-01d-3 · Sifat Pembagian Pangkat Sebasis (a^m / a^n)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01d-3-sifat-bagi-pangkat-campur.md`
- [ ] `osn-smp-mtk-01d-3-sifat-bagi-pangkat-mudah.md`
- [ ] `osn-smp-mtk-01d-3-sifat-bagi-pangkat-sedang.md`
- [ ] `osn-smp-mtk-01d-3-sifat-bagi-pangkat-sulit.md`
- [ ] `osn-smp-mtk-01d-3-sifat-bagi-pangkat-mudah-sedang.md`
- [ ] `osn-smp-mtk-01d-3-sifat-bagi-pangkat-sedang-sulit.md`

**MTK-01d-4 · Pangkat dari Pangkat & Pangkat Hasil Kali** (fokus Prov)
- [ ] `osn-smp-mtk-01d-4-pangkat-dari-pangkat-campur.md`
- [ ] `osn-smp-mtk-01d-4-pangkat-dari-pangkat-mudah.md`
- [ ] `osn-smp-mtk-01d-4-pangkat-dari-pangkat-sedang.md`
- [ ] `osn-smp-mtk-01d-4-pangkat-dari-pangkat-sulit.md`
- [ ] `osn-smp-mtk-01d-4-pangkat-dari-pangkat-mudah-sedang.md`
- [ ] `osn-smp-mtk-01d-4-pangkat-dari-pangkat-sedang-sulit.md`

**MTK-01d-5 · Soal Cerita Pangkat (Pertumbuhan, Penyusutan)** (fokus Prov)
- [ ] `osn-smp-mtk-01d-5-cerita-pangkat-campur.md`
- [ ] `osn-smp-mtk-01d-5-cerita-pangkat-mudah.md`
- [ ] `osn-smp-mtk-01d-5-cerita-pangkat-sedang.md`
- [ ] `osn-smp-mtk-01d-5-cerita-pangkat-sulit.md`
- [ ] `osn-smp-mtk-01d-5-cerita-pangkat-mudah-sedang.md`
- [ ] `osn-smp-mtk-01d-5-cerita-pangkat-sedang-sulit.md`

#### MTK-01e · Bentuk Akar & Operasinya

**MTK-01e-1 · Konsep Bentuk Akar & Penyederhanaan** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01e-1-konsep-akar-penyederhanaan-campur.md`
- [ ] `osn-smp-mtk-01e-1-konsep-akar-penyederhanaan-mudah.md`
- [ ] `osn-smp-mtk-01e-1-konsep-akar-penyederhanaan-sedang.md`
- [ ] `osn-smp-mtk-01e-1-konsep-akar-penyederhanaan-sulit.md`
- [ ] `osn-smp-mtk-01e-1-konsep-akar-penyederhanaan-mudah-sedang.md`
- [ ] `osn-smp-mtk-01e-1-konsep-akar-penyederhanaan-sedang-sulit.md`

**MTK-01e-2 · Penjumlahan & Pengurangan Akar** (fokus Prov)
- [ ] `osn-smp-mtk-01e-2-jumlah-kurang-akar-campur.md`
- [ ] `osn-smp-mtk-01e-2-jumlah-kurang-akar-mudah.md`
- [ ] `osn-smp-mtk-01e-2-jumlah-kurang-akar-sedang.md`
- [ ] `osn-smp-mtk-01e-2-jumlah-kurang-akar-sulit.md`
- [ ] `osn-smp-mtk-01e-2-jumlah-kurang-akar-mudah-sedang.md`
- [ ] `osn-smp-mtk-01e-2-jumlah-kurang-akar-sedang-sulit.md`

**MTK-01e-3 · Perkalian & Pembagian Akar** (fokus Prov)
- [ ] `osn-smp-mtk-01e-3-kali-bagi-akar-campur.md`
- [ ] `osn-smp-mtk-01e-3-kali-bagi-akar-mudah.md`
- [ ] `osn-smp-mtk-01e-3-kali-bagi-akar-sedang.md`
- [ ] `osn-smp-mtk-01e-3-kali-bagi-akar-sulit.md`
- [ ] `osn-smp-mtk-01e-3-kali-bagi-akar-mudah-sedang.md`
- [ ] `osn-smp-mtk-01e-3-kali-bagi-akar-sedang-sulit.md`

**MTK-01e-4 · Merasionalkan Penyebut** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-01e-4-merasionalkan-campur.md`
- [ ] `osn-smp-mtk-01e-4-merasionalkan-mudah.md`
- [ ] `osn-smp-mtk-01e-4-merasionalkan-sedang.md`
- [ ] `osn-smp-mtk-01e-4-merasionalkan-sulit.md`
- [ ] `osn-smp-mtk-01e-4-merasionalkan-mudah-sedang.md`
- [ ] `osn-smp-mtk-01e-4-merasionalkan-sedang-sulit.md`

#### MTK-01f · Bilangan Rasional & Irasional

**MTK-01f-1 · Identifikasi Bilangan Rasional vs Irasional** (fokus Kab)
- [ ] `osn-smp-mtk-01f-1-identifikasi-rasional-campur.md`
- [ ] `osn-smp-mtk-01f-1-identifikasi-rasional-mudah.md`
- [ ] `osn-smp-mtk-01f-1-identifikasi-rasional-sedang.md`
- [ ] `osn-smp-mtk-01f-1-identifikasi-rasional-sulit.md`
- [ ] `osn-smp-mtk-01f-1-identifikasi-rasional-mudah-sedang.md`
- [ ] `osn-smp-mtk-01f-1-identifikasi-rasional-sedang-sulit.md`

**MTK-01f-2 · Konversi Desimal Berulang ke Pecahan** (fokus Prov)
- [ ] `osn-smp-mtk-01f-2-desimal-berulang-campur.md`
- [ ] `osn-smp-mtk-01f-2-desimal-berulang-mudah.md`
- [ ] `osn-smp-mtk-01f-2-desimal-berulang-sedang.md`
- [ ] `osn-smp-mtk-01f-2-desimal-berulang-sulit.md`
- [ ] `osn-smp-mtk-01f-2-desimal-berulang-mudah-sedang.md`
- [ ] `osn-smp-mtk-01f-2-desimal-berulang-sedang-sulit.md`

**MTK-01f-3 · Operasi pada Bilangan Rasional & Irasional** (fokus Prov)
- [ ] `osn-smp-mtk-01f-3-operasi-rasional-irasional-campur.md`
- [ ] `osn-smp-mtk-01f-3-operasi-rasional-irasional-mudah.md`
- [ ] `osn-smp-mtk-01f-3-operasi-rasional-irasional-sedang.md`
- [ ] `osn-smp-mtk-01f-3-operasi-rasional-irasional-sulit.md`
- [ ] `osn-smp-mtk-01f-3-operasi-rasional-irasional-mudah-sedang.md`
- [ ] `osn-smp-mtk-01f-3-operasi-rasional-irasional-sedang-sulit.md`

#### MTK-01g · Notasi Ilmiah / Bentuk Baku

**MTK-01g-1 · Konversi Bilangan ke Bentuk Baku** (fokus Kab)
- [ ] `osn-smp-mtk-01g-1-konversi-bentuk-baku-campur.md`
- [ ] `osn-smp-mtk-01g-1-konversi-bentuk-baku-mudah.md`
- [ ] `osn-smp-mtk-01g-1-konversi-bentuk-baku-sedang.md`
- [ ] `osn-smp-mtk-01g-1-konversi-bentuk-baku-sulit.md`
- [ ] `osn-smp-mtk-01g-1-konversi-bentuk-baku-mudah-sedang.md`
- [ ] `osn-smp-mtk-01g-1-konversi-bentuk-baku-sedang-sulit.md`

**MTK-01g-2 · Operasi Bilangan Bentuk Baku (×, ÷)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01g-2-operasi-bentuk-baku-campur.md`
- [ ] `osn-smp-mtk-01g-2-operasi-bentuk-baku-mudah.md`
- [ ] `osn-smp-mtk-01g-2-operasi-bentuk-baku-sedang.md`
- [ ] `osn-smp-mtk-01g-2-operasi-bentuk-baku-sulit.md`
- [ ] `osn-smp-mtk-01g-2-operasi-bentuk-baku-mudah-sedang.md`
- [ ] `osn-smp-mtk-01g-2-operasi-bentuk-baku-sedang-sulit.md`

**MTK-01g-3 · Aplikasi Notasi Ilmiah dalam Sains** (fokus Prov)
- [ ] `osn-smp-mtk-01g-3-aplikasi-notasi-ilmiah-campur.md`
- [ ] `osn-smp-mtk-01g-3-aplikasi-notasi-ilmiah-mudah.md`
- [ ] `osn-smp-mtk-01g-3-aplikasi-notasi-ilmiah-sedang.md`
- [ ] `osn-smp-mtk-01g-3-aplikasi-notasi-ilmiah-sulit.md`
- [ ] `osn-smp-mtk-01g-3-aplikasi-notasi-ilmiah-mudah-sedang.md`
- [ ] `osn-smp-mtk-01g-3-aplikasi-notasi-ilmiah-sedang-sulit.md`

#### MTK-01h · Aturan Pangkat Lanjut

**MTK-01h-1 · Pangkat Nol & Pangkat Negatif** (fokus Prov)
- [ ] `osn-smp-mtk-01h-1-pangkat-nol-negatif-campur.md`
- [ ] `osn-smp-mtk-01h-1-pangkat-nol-negatif-mudah.md`
- [ ] `osn-smp-mtk-01h-1-pangkat-nol-negatif-sedang.md`
- [ ] `osn-smp-mtk-01h-1-pangkat-nol-negatif-sulit.md`
- [ ] `osn-smp-mtk-01h-1-pangkat-nol-negatif-mudah-sedang.md`
- [ ] `osn-smp-mtk-01h-1-pangkat-nol-negatif-sedang-sulit.md`

**MTK-01h-2 · Pangkat Pecahan & Hubungan dengan Akar** (fokus Prov)
- [ ] `osn-smp-mtk-01h-2-pangkat-pecahan-akar-campur.md`
- [ ] `osn-smp-mtk-01h-2-pangkat-pecahan-akar-mudah.md`
- [ ] `osn-smp-mtk-01h-2-pangkat-pecahan-akar-sedang.md`
- [ ] `osn-smp-mtk-01h-2-pangkat-pecahan-akar-sulit.md`
- [ ] `osn-smp-mtk-01h-2-pangkat-pecahan-akar-mudah-sedang.md`
- [ ] `osn-smp-mtk-01h-2-pangkat-pecahan-akar-sedang-sulit.md`

**MTK-01h-3 · Penyederhanaan Bentuk Pangkat Kompleks** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-01h-3-penyederhanaan-pangkat-campur.md`
- [ ] `osn-smp-mtk-01h-3-penyederhanaan-pangkat-mudah.md`
- [ ] `osn-smp-mtk-01h-3-penyederhanaan-pangkat-sedang.md`
- [ ] `osn-smp-mtk-01h-3-penyederhanaan-pangkat-sulit.md`
- [ ] `osn-smp-mtk-01h-3-penyederhanaan-pangkat-mudah-sedang.md`
- [ ] `osn-smp-mtk-01h-3-penyederhanaan-pangkat-sedang-sulit.md`

#### MTK-01i · Operasi Hitung Campuran

**MTK-01i-1 · Aturan PEMDAS/KuKaBaTaKu** (fokus Kab)
- [ ] `osn-smp-mtk-01i-1-pemdas-campur.md`
- [ ] `osn-smp-mtk-01i-1-pemdas-mudah.md`
- [ ] `osn-smp-mtk-01i-1-pemdas-sedang.md`
- [ ] `osn-smp-mtk-01i-1-pemdas-sulit.md`
- [ ] `osn-smp-mtk-01i-1-pemdas-mudah-sedang.md`
- [ ] `osn-smp-mtk-01i-1-pemdas-sedang-sulit.md`

**MTK-01i-2 · Tanda Kurung & Hierarki Operasi** (fokus Kab)
- [ ] `osn-smp-mtk-01i-2-tanda-kurung-campur.md`
- [ ] `osn-smp-mtk-01i-2-tanda-kurung-mudah.md`
- [ ] `osn-smp-mtk-01i-2-tanda-kurung-sedang.md`
- [ ] `osn-smp-mtk-01i-2-tanda-kurung-sulit.md`
- [ ] `osn-smp-mtk-01i-2-tanda-kurung-mudah-sedang.md`
- [ ] `osn-smp-mtk-01i-2-tanda-kurung-sedang-sulit.md`

**MTK-01i-3 · Operasi Campuran Pecahan & Desimal** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01i-3-campuran-pecahan-desimal-campur.md`
- [ ] `osn-smp-mtk-01i-3-campuran-pecahan-desimal-mudah.md`
- [ ] `osn-smp-mtk-01i-3-campuran-pecahan-desimal-sedang.md`
- [ ] `osn-smp-mtk-01i-3-campuran-pecahan-desimal-sulit.md`
- [ ] `osn-smp-mtk-01i-3-campuran-pecahan-desimal-mudah-sedang.md`
- [ ] `osn-smp-mtk-01i-3-campuran-pecahan-desimal-sedang-sulit.md`

#### MTK-01j · Perbandingan Bilangan

**MTK-01j-1 · Konsep Rasio & Perbandingan Dasar** (fokus Kab)
- [ ] `osn-smp-mtk-01j-1-konsep-rasio-campur.md`
- [ ] `osn-smp-mtk-01j-1-konsep-rasio-mudah.md`
- [ ] `osn-smp-mtk-01j-1-konsep-rasio-sedang.md`
- [ ] `osn-smp-mtk-01j-1-konsep-rasio-sulit.md`
- [ ] `osn-smp-mtk-01j-1-konsep-rasio-mudah-sedang.md`
- [ ] `osn-smp-mtk-01j-1-konsep-rasio-sedang-sulit.md`

**MTK-01j-2 · Perbandingan Bilangan Bulat & Penyederhanaan** (fokus Kab)
- [ ] `osn-smp-mtk-01j-2-perbandingan-bulat-campur.md`
- [ ] `osn-smp-mtk-01j-2-perbandingan-bulat-mudah.md`
- [ ] `osn-smp-mtk-01j-2-perbandingan-bulat-sedang.md`
- [ ] `osn-smp-mtk-01j-2-perbandingan-bulat-sulit.md`
- [ ] `osn-smp-mtk-01j-2-perbandingan-bulat-mudah-sedang.md`
- [ ] `osn-smp-mtk-01j-2-perbandingan-bulat-sedang-sulit.md`

**MTK-01j-3 · Perbandingan Pecahan & Desimal** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01j-3-perbandingan-pecahan-campur.md`
- [ ] `osn-smp-mtk-01j-3-perbandingan-pecahan-mudah.md`
- [ ] `osn-smp-mtk-01j-3-perbandingan-pecahan-sedang.md`
- [ ] `osn-smp-mtk-01j-3-perbandingan-pecahan-sulit.md`
- [ ] `osn-smp-mtk-01j-3-perbandingan-pecahan-mudah-sedang.md`
- [ ] `osn-smp-mtk-01j-3-perbandingan-pecahan-sedang-sulit.md`

#### MTK-01k · Soal Cerita Bilangan

**MTK-01k-1 · Cerita Bilangan Bulat (Suhu, Kedalaman, Lantai)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01k-1-cerita-bulat-konteks-campur.md`
- [ ] `osn-smp-mtk-01k-1-cerita-bulat-konteks-mudah.md`
- [ ] `osn-smp-mtk-01k-1-cerita-bulat-konteks-sedang.md`
- [ ] `osn-smp-mtk-01k-1-cerita-bulat-konteks-sulit.md`
- [ ] `osn-smp-mtk-01k-1-cerita-bulat-konteks-mudah-sedang.md`
- [ ] `osn-smp-mtk-01k-1-cerita-bulat-konteks-sedang-sulit.md`

**MTK-01k-2 · Cerita Pecahan & Desimal (Resep, Bagian, Diskon)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-01k-2-cerita-pecahan-konteks-campur.md`
- [ ] `osn-smp-mtk-01k-2-cerita-pecahan-konteks-mudah.md`
- [ ] `osn-smp-mtk-01k-2-cerita-pecahan-konteks-sedang.md`
- [ ] `osn-smp-mtk-01k-2-cerita-pecahan-konteks-sulit.md`
- [ ] `osn-smp-mtk-01k-2-cerita-pecahan-konteks-mudah-sedang.md`
- [ ] `osn-smp-mtk-01k-2-cerita-pecahan-konteks-sedang-sulit.md`

**MTK-01k-3 · Cerita Pangkat & Akar (Volume, Luas, Pertumbuhan)** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-01k-3-cerita-pangkat-akar-campur.md`
- [ ] `osn-smp-mtk-01k-3-cerita-pangkat-akar-mudah.md`
- [ ] `osn-smp-mtk-01k-3-cerita-pangkat-akar-sedang.md`
- [ ] `osn-smp-mtk-01k-3-cerita-pangkat-akar-sulit.md`
- [ ] `osn-smp-mtk-01k-3-cerita-pangkat-akar-mudah-sedang.md`
- [ ] `osn-smp-mtk-01k-3-cerita-pangkat-akar-sedang-sulit.md`

### MTK-02 · Aljabar & Bentuk Aljabar (~35 sub-sub-bab)

#### MTK-02a · Bentuk Aljabar & Suku Sejenis

**MTK-02a-1 · Mengenali Suku, Koefisien, Variabel, Konstanta** (fokus Kab)
- [ ] `osn-smp-mtk-02a-1-suku-koefisien-campur.md`
- [ ] `osn-smp-mtk-02a-1-suku-koefisien-mudah.md`
- [ ] `osn-smp-mtk-02a-1-suku-koefisien-sedang.md`
- [ ] `osn-smp-mtk-02a-1-suku-koefisien-sulit.md`
- [ ] `osn-smp-mtk-02a-1-suku-koefisien-mudah-sedang.md`
- [ ] `osn-smp-mtk-02a-1-suku-koefisien-sedang-sulit.md`

**MTK-02a-2 · Identifikasi & Pengelompokan Suku Sejenis** (fokus Kab)
- [ ] `osn-smp-mtk-02a-2-suku-sejenis-campur.md`
- [ ] `osn-smp-mtk-02a-2-suku-sejenis-mudah.md`
- [ ] `osn-smp-mtk-02a-2-suku-sejenis-sedang.md`
- [ ] `osn-smp-mtk-02a-2-suku-sejenis-sulit.md`
- [ ] `osn-smp-mtk-02a-2-suku-sejenis-mudah-sedang.md`
- [ ] `osn-smp-mtk-02a-2-suku-sejenis-sedang-sulit.md`

**MTK-02a-3 · Banyak Suku (Monomial, Binomial, Trinomial, Polinom)** (fokus Kab)
- [ ] `osn-smp-mtk-02a-3-banyak-suku-campur.md`
- [ ] `osn-smp-mtk-02a-3-banyak-suku-mudah.md`
- [ ] `osn-smp-mtk-02a-3-banyak-suku-sedang.md`
- [ ] `osn-smp-mtk-02a-3-banyak-suku-sulit.md`
- [ ] `osn-smp-mtk-02a-3-banyak-suku-mudah-sedang.md`
- [ ] `osn-smp-mtk-02a-3-banyak-suku-sedang-sulit.md`

#### MTK-02b · Operasi Penjumlahan & Pengurangan Aljabar

**MTK-02b-1 · Penjumlahan Bentuk Aljabar Suku Sejenis** (fokus Kab)
- [ ] `osn-smp-mtk-02b-1-jumlah-aljabar-campur.md`
- [ ] `osn-smp-mtk-02b-1-jumlah-aljabar-mudah.md`
- [ ] `osn-smp-mtk-02b-1-jumlah-aljabar-sedang.md`
- [ ] `osn-smp-mtk-02b-1-jumlah-aljabar-sulit.md`
- [ ] `osn-smp-mtk-02b-1-jumlah-aljabar-mudah-sedang.md`
- [ ] `osn-smp-mtk-02b-1-jumlah-aljabar-sedang-sulit.md`

**MTK-02b-2 · Pengurangan Bentuk Aljabar (Tanda Minus pada Kurung)** (fokus Kab)
- [ ] `osn-smp-mtk-02b-2-kurang-aljabar-campur.md`
- [ ] `osn-smp-mtk-02b-2-kurang-aljabar-mudah.md`
- [ ] `osn-smp-mtk-02b-2-kurang-aljabar-sedang.md`
- [ ] `osn-smp-mtk-02b-2-kurang-aljabar-sulit.md`
- [ ] `osn-smp-mtk-02b-2-kurang-aljabar-mudah-sedang.md`
- [ ] `osn-smp-mtk-02b-2-kurang-aljabar-sedang-sulit.md`

**MTK-02b-3 · Kombinasi Penjumlahan-Pengurangan Multi-Suku** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-02b-3-kombinasi-jumlah-kurang-campur.md`
- [ ] `osn-smp-mtk-02b-3-kombinasi-jumlah-kurang-mudah.md`
- [ ] `osn-smp-mtk-02b-3-kombinasi-jumlah-kurang-sedang.md`
- [ ] `osn-smp-mtk-02b-3-kombinasi-jumlah-kurang-sulit.md`
- [ ] `osn-smp-mtk-02b-3-kombinasi-jumlah-kurang-mudah-sedang.md`
- [ ] `osn-smp-mtk-02b-3-kombinasi-jumlah-kurang-sedang-sulit.md`

#### MTK-02c · Operasi Perkalian Aljabar

**MTK-02c-1 · Perkalian Monomial × Monomial** (fokus Kab)
- [ ] `osn-smp-mtk-02c-1-kali-monom-monom-campur.md`
- [ ] `osn-smp-mtk-02c-1-kali-monom-monom-mudah.md`
- [ ] `osn-smp-mtk-02c-1-kali-monom-monom-sedang.md`
- [ ] `osn-smp-mtk-02c-1-kali-monom-monom-sulit.md`
- [ ] `osn-smp-mtk-02c-1-kali-monom-monom-mudah-sedang.md`
- [ ] `osn-smp-mtk-02c-1-kali-monom-monom-sedang-sulit.md`

**MTK-02c-2 · Perkalian Monomial × Binomial/Polinomial** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-02c-2-kali-monom-polinom-campur.md`
- [ ] `osn-smp-mtk-02c-2-kali-monom-polinom-mudah.md`
- [ ] `osn-smp-mtk-02c-2-kali-monom-polinom-sedang.md`
- [ ] `osn-smp-mtk-02c-2-kali-monom-polinom-sulit.md`
- [ ] `osn-smp-mtk-02c-2-kali-monom-polinom-mudah-sedang.md`
- [ ] `osn-smp-mtk-02c-2-kali-monom-polinom-sedang-sulit.md`

**MTK-02c-3 · Perkalian Binomial × Binomial (FOIL)** (fokus Prov)
- [ ] `osn-smp-mtk-02c-3-foil-campur.md`
- [ ] `osn-smp-mtk-02c-3-foil-mudah.md`
- [ ] `osn-smp-mtk-02c-3-foil-sedang.md`
- [ ] `osn-smp-mtk-02c-3-foil-sulit.md`
- [ ] `osn-smp-mtk-02c-3-foil-mudah-sedang.md`
- [ ] `osn-smp-mtk-02c-3-foil-sedang-sulit.md`

**MTK-02c-4 · Identitas Khusus ((a+b)², (a-b)², (a+b)(a-b))** (fokus Prov)
- [ ] `osn-smp-mtk-02c-4-identitas-khusus-campur.md`
- [ ] `osn-smp-mtk-02c-4-identitas-khusus-mudah.md`
- [ ] `osn-smp-mtk-02c-4-identitas-khusus-sedang.md`
- [ ] `osn-smp-mtk-02c-4-identitas-khusus-sulit.md`
- [ ] `osn-smp-mtk-02c-4-identitas-khusus-mudah-sedang.md`
- [ ] `osn-smp-mtk-02c-4-identitas-khusus-sedang-sulit.md`

#### MTK-02d · Operasi Pembagian Aljabar

**MTK-02d-1 · Pembagian Monomial/Monomial** (fokus Prov)
- [ ] `osn-smp-mtk-02d-1-bagi-monom-monom-campur.md`
- [ ] `osn-smp-mtk-02d-1-bagi-monom-monom-mudah.md`
- [ ] `osn-smp-mtk-02d-1-bagi-monom-monom-sedang.md`
- [ ] `osn-smp-mtk-02d-1-bagi-monom-monom-sulit.md`
- [ ] `osn-smp-mtk-02d-1-bagi-monom-monom-mudah-sedang.md`
- [ ] `osn-smp-mtk-02d-1-bagi-monom-monom-sedang-sulit.md`

**MTK-02d-2 · Pembagian Polinomial dengan Monomial** (fokus Prov)
- [ ] `osn-smp-mtk-02d-2-bagi-polinom-monom-campur.md`
- [ ] `osn-smp-mtk-02d-2-bagi-polinom-monom-mudah.md`
- [ ] `osn-smp-mtk-02d-2-bagi-polinom-monom-sedang.md`
- [ ] `osn-smp-mtk-02d-2-bagi-polinom-monom-sulit.md`
- [ ] `osn-smp-mtk-02d-2-bagi-polinom-monom-mudah-sedang.md`
- [ ] `osn-smp-mtk-02d-2-bagi-polinom-monom-sedang-sulit.md`

**MTK-02d-3 · Pembagian Polinomial dengan Binomial (Bersusun)** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-02d-3-bagi-polinom-binom-campur.md`
- [ ] `osn-smp-mtk-02d-3-bagi-polinom-binom-mudah.md`
- [ ] `osn-smp-mtk-02d-3-bagi-polinom-binom-sedang.md`
- [ ] `osn-smp-mtk-02d-3-bagi-polinom-binom-sulit.md`
- [ ] `osn-smp-mtk-02d-3-bagi-polinom-binom-mudah-sedang.md`
- [ ] `osn-smp-mtk-02d-3-bagi-polinom-binom-sedang-sulit.md`

#### MTK-02e · Pemfaktoran Bentuk Aljabar (FPB & Distributif)

**MTK-02e-1 · Pemfaktoran FPB dari Suku-suku Bentuk Aljabar** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-02e-1-faktor-fpb-suku-campur.md`
- [ ] `osn-smp-mtk-02e-1-faktor-fpb-suku-mudah.md`
- [ ] `osn-smp-mtk-02e-1-faktor-fpb-suku-sedang.md`
- [ ] `osn-smp-mtk-02e-1-faktor-fpb-suku-sulit.md`
- [ ] `osn-smp-mtk-02e-1-faktor-fpb-suku-mudah-sedang.md`
- [ ] `osn-smp-mtk-02e-1-faktor-fpb-suku-sedang-sulit.md`

**MTK-02e-2 · Pemfaktoran dengan Pengelompokan (4 suku)** (fokus Prov)
- [ ] `osn-smp-mtk-02e-2-pengelompokan-campur.md`
- [ ] `osn-smp-mtk-02e-2-pengelompokan-mudah.md`
- [ ] `osn-smp-mtk-02e-2-pengelompokan-sedang.md`
- [ ] `osn-smp-mtk-02e-2-pengelompokan-sulit.md`
- [ ] `osn-smp-mtk-02e-2-pengelompokan-mudah-sedang.md`
- [ ] `osn-smp-mtk-02e-2-pengelompokan-sedang-sulit.md`

#### MTK-02f · Pemfaktoran Selisih Dua Kuadrat

**MTK-02f-1 · Pemfaktoran a² - b² = (a+b)(a-b)** (fokus Prov)
- [ ] `osn-smp-mtk-02f-1-selisih-kuadrat-dasar-campur.md`
- [ ] `osn-smp-mtk-02f-1-selisih-kuadrat-dasar-mudah.md`
- [ ] `osn-smp-mtk-02f-1-selisih-kuadrat-dasar-sedang.md`
- [ ] `osn-smp-mtk-02f-1-selisih-kuadrat-dasar-sulit.md`
- [ ] `osn-smp-mtk-02f-1-selisih-kuadrat-dasar-mudah-sedang.md`
- [ ] `osn-smp-mtk-02f-1-selisih-kuadrat-dasar-sedang-sulit.md`

**MTK-02f-2 · Aplikasi Selisih Kuadrat untuk Hitung Cepat** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-02f-2-aplikasi-selisih-kuadrat-campur.md`
- [ ] `osn-smp-mtk-02f-2-aplikasi-selisih-kuadrat-mudah.md`
- [ ] `osn-smp-mtk-02f-2-aplikasi-selisih-kuadrat-sedang.md`
- [ ] `osn-smp-mtk-02f-2-aplikasi-selisih-kuadrat-sulit.md`
- [ ] `osn-smp-mtk-02f-2-aplikasi-selisih-kuadrat-mudah-sedang.md`
- [ ] `osn-smp-mtk-02f-2-aplikasi-selisih-kuadrat-sedang-sulit.md`

#### MTK-02g · Pemfaktoran Trinomial Kuadrat

**MTK-02g-1 · Pemfaktoran x² + bx + c (Koefisien Depan 1)** (fokus Prov)
- [ ] `osn-smp-mtk-02g-1-trinomial-koef-1-campur.md`
- [ ] `osn-smp-mtk-02g-1-trinomial-koef-1-mudah.md`
- [ ] `osn-smp-mtk-02g-1-trinomial-koef-1-sedang.md`
- [ ] `osn-smp-mtk-02g-1-trinomial-koef-1-sulit.md`
- [ ] `osn-smp-mtk-02g-1-trinomial-koef-1-mudah-sedang.md`
- [ ] `osn-smp-mtk-02g-1-trinomial-koef-1-sedang-sulit.md`

**MTK-02g-2 · Pemfaktoran ax² + bx + c (Koefisien Depan ≠ 1)** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-02g-2-trinomial-koef-bukan-1-campur.md`
- [ ] `osn-smp-mtk-02g-2-trinomial-koef-bukan-1-mudah.md`
- [ ] `osn-smp-mtk-02g-2-trinomial-koef-bukan-1-sedang.md`
- [ ] `osn-smp-mtk-02g-2-trinomial-koef-bukan-1-sulit.md`
- [ ] `osn-smp-mtk-02g-2-trinomial-koef-bukan-1-mudah-sedang.md`
- [ ] `osn-smp-mtk-02g-2-trinomial-koef-bukan-1-sedang-sulit.md`

**MTK-02g-3 · Trinomial Kuadrat Sempurna (a² ± 2ab + b²)** (fokus Prov)
- [ ] `osn-smp-mtk-02g-3-kuadrat-sempurna-campur.md`
- [ ] `osn-smp-mtk-02g-3-kuadrat-sempurna-mudah.md`
- [ ] `osn-smp-mtk-02g-3-kuadrat-sempurna-sedang.md`
- [ ] `osn-smp-mtk-02g-3-kuadrat-sempurna-sulit.md`
- [ ] `osn-smp-mtk-02g-3-kuadrat-sempurna-mudah-sedang.md`
- [ ] `osn-smp-mtk-02g-3-kuadrat-sempurna-sedang-sulit.md`

#### MTK-02h · Penyederhanaan Pecahan Bentuk Aljabar

**MTK-02h-1 · Penyederhanaan Pecahan Aljabar dengan Pemfaktoran** (fokus Prov)
- [ ] `osn-smp-mtk-02h-1-sederhana-pecahan-aljabar-campur.md`
- [ ] `osn-smp-mtk-02h-1-sederhana-pecahan-aljabar-mudah.md`
- [ ] `osn-smp-mtk-02h-1-sederhana-pecahan-aljabar-sedang.md`
- [ ] `osn-smp-mtk-02h-1-sederhana-pecahan-aljabar-sulit.md`
- [ ] `osn-smp-mtk-02h-1-sederhana-pecahan-aljabar-mudah-sedang.md`
- [ ] `osn-smp-mtk-02h-1-sederhana-pecahan-aljabar-sedang-sulit.md`

**MTK-02h-2 · Operasi Pecahan Aljabar (+, -)** (fokus Prov)
- [ ] `osn-smp-mtk-02h-2-jumlah-kurang-pecahan-aljabar-campur.md`
- [ ] `osn-smp-mtk-02h-2-jumlah-kurang-pecahan-aljabar-mudah.md`
- [ ] `osn-smp-mtk-02h-2-jumlah-kurang-pecahan-aljabar-sedang.md`
- [ ] `osn-smp-mtk-02h-2-jumlah-kurang-pecahan-aljabar-sulit.md`
- [ ] `osn-smp-mtk-02h-2-jumlah-kurang-pecahan-aljabar-mudah-sedang.md`
- [ ] `osn-smp-mtk-02h-2-jumlah-kurang-pecahan-aljabar-sedang-sulit.md`

**MTK-02h-3 · Operasi Pecahan Aljabar (×, ÷)** (fokus Prov)
- [ ] `osn-smp-mtk-02h-3-kali-bagi-pecahan-aljabar-campur.md`
- [ ] `osn-smp-mtk-02h-3-kali-bagi-pecahan-aljabar-mudah.md`
- [ ] `osn-smp-mtk-02h-3-kali-bagi-pecahan-aljabar-sedang.md`
- [ ] `osn-smp-mtk-02h-3-kali-bagi-pecahan-aljabar-sulit.md`
- [ ] `osn-smp-mtk-02h-3-kali-bagi-pecahan-aljabar-mudah-sedang.md`
- [ ] `osn-smp-mtk-02h-3-kali-bagi-pecahan-aljabar-sedang-sulit.md`

#### MTK-02i · Substitusi & Evaluasi Aljabar

**MTK-02i-1 · Substitusi Nilai Variabel Tunggal** (fokus Kab)
- [ ] `osn-smp-mtk-02i-1-substitusi-tunggal-campur.md`
- [ ] `osn-smp-mtk-02i-1-substitusi-tunggal-mudah.md`
- [ ] `osn-smp-mtk-02i-1-substitusi-tunggal-sedang.md`
- [ ] `osn-smp-mtk-02i-1-substitusi-tunggal-sulit.md`
- [ ] `osn-smp-mtk-02i-1-substitusi-tunggal-mudah-sedang.md`
- [ ] `osn-smp-mtk-02i-1-substitusi-tunggal-sedang-sulit.md`

**MTK-02i-2 · Substitusi Multi-Variabel & Evaluasi Lanjut** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-02i-2-substitusi-multi-campur.md`
- [ ] `osn-smp-mtk-02i-2-substitusi-multi-mudah.md`
- [ ] `osn-smp-mtk-02i-2-substitusi-multi-sedang.md`
- [ ] `osn-smp-mtk-02i-2-substitusi-multi-sulit.md`
- [ ] `osn-smp-mtk-02i-2-substitusi-multi-mudah-sedang.md`
- [ ] `osn-smp-mtk-02i-2-substitusi-multi-sedang-sulit.md`

#### MTK-02j · Soal Cerita Bentuk Aljabar

**MTK-02j-1 · Soal Cerita Pemodelan Aljabar (Variabel sebagai Hal Tidak Diketahui)** (fokus Prov)
- [ ] `osn-smp-mtk-02j-1-pemodelan-aljabar-campur.md`
- [ ] `osn-smp-mtk-02j-1-pemodelan-aljabar-mudah.md`
- [ ] `osn-smp-mtk-02j-1-pemodelan-aljabar-sedang.md`
- [ ] `osn-smp-mtk-02j-1-pemodelan-aljabar-sulit.md`
- [ ] `osn-smp-mtk-02j-1-pemodelan-aljabar-mudah-sedang.md`
- [ ] `osn-smp-mtk-02j-1-pemodelan-aljabar-sedang-sulit.md`

**MTK-02j-2 · Soal Cerita Pemfaktoran (Luas, Volume, Geometri)** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-02j-2-cerita-pemfaktoran-campur.md`
- [ ] `osn-smp-mtk-02j-2-cerita-pemfaktoran-mudah.md`
- [ ] `osn-smp-mtk-02j-2-cerita-pemfaktoran-sedang.md`
- [ ] `osn-smp-mtk-02j-2-cerita-pemfaktoran-sulit.md`
- [ ] `osn-smp-mtk-02j-2-cerita-pemfaktoran-mudah-sedang.md`
- [ ] `osn-smp-mtk-02j-2-cerita-pemfaktoran-sedang-sulit.md`

### MTK-03 · Persamaan & Pertidaksamaan (~32 sub-sub-bab)

#### MTK-03a · PLSV (Persamaan Linear Satu Variabel)

**MTK-03a-1 · PLSV Bentuk Sederhana (ax + b = c)** (fokus Kab)
- [ ] `osn-smp-mtk-03a-1-plsv-sederhana-campur.md`
- [ ] `osn-smp-mtk-03a-1-plsv-sederhana-mudah.md`
- [ ] `osn-smp-mtk-03a-1-plsv-sederhana-sedang.md`
- [ ] `osn-smp-mtk-03a-1-plsv-sederhana-sulit.md`
- [ ] `osn-smp-mtk-03a-1-plsv-sederhana-mudah-sedang.md`
- [ ] `osn-smp-mtk-03a-1-plsv-sederhana-sedang-sulit.md`

**MTK-03a-2 · PLSV dengan Kurung & Pecahan** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-03a-2-plsv-kurung-pecahan-campur.md`
- [ ] `osn-smp-mtk-03a-2-plsv-kurung-pecahan-mudah.md`
- [ ] `osn-smp-mtk-03a-2-plsv-kurung-pecahan-sedang.md`
- [ ] `osn-smp-mtk-03a-2-plsv-kurung-pecahan-sulit.md`
- [ ] `osn-smp-mtk-03a-2-plsv-kurung-pecahan-mudah-sedang.md`
- [ ] `osn-smp-mtk-03a-2-plsv-kurung-pecahan-sedang-sulit.md`

**MTK-03a-3 · Soal Cerita PLSV** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-03a-3-cerita-plsv-campur.md`
- [ ] `osn-smp-mtk-03a-3-cerita-plsv-mudah.md`
- [ ] `osn-smp-mtk-03a-3-cerita-plsv-sedang.md`
- [ ] `osn-smp-mtk-03a-3-cerita-plsv-sulit.md`
- [ ] `osn-smp-mtk-03a-3-cerita-plsv-mudah-sedang.md`
- [ ] `osn-smp-mtk-03a-3-cerita-plsv-sedang-sulit.md`

#### MTK-03b · PtLSV (Pertidaksamaan Linear Satu Variabel)

**MTK-03b-1 · PtLSV Dasar & Sifat Pembalikan Tanda** (fokus Kab)
- [ ] `osn-smp-mtk-03b-1-ptlsv-dasar-campur.md`
- [ ] `osn-smp-mtk-03b-1-ptlsv-dasar-mudah.md`
- [ ] `osn-smp-mtk-03b-1-ptlsv-dasar-sedang.md`
- [ ] `osn-smp-mtk-03b-1-ptlsv-dasar-sulit.md`
- [ ] `osn-smp-mtk-03b-1-ptlsv-dasar-mudah-sedang.md`
- [ ] `osn-smp-mtk-03b-1-ptlsv-dasar-sedang-sulit.md`

**MTK-03b-2 · PtLSV Bentuk Gabungan & Garis Bilangan** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-03b-2-ptlsv-garis-bilangan-campur.md`
- [ ] `osn-smp-mtk-03b-2-ptlsv-garis-bilangan-mudah.md`
- [ ] `osn-smp-mtk-03b-2-ptlsv-garis-bilangan-sedang.md`
- [ ] `osn-smp-mtk-03b-2-ptlsv-garis-bilangan-sulit.md`
- [ ] `osn-smp-mtk-03b-2-ptlsv-garis-bilangan-mudah-sedang.md`
- [ ] `osn-smp-mtk-03b-2-ptlsv-garis-bilangan-sedang-sulit.md`

**MTK-03b-3 · Soal Cerita PtLSV (Kapasitas, Batas, Anggaran)** (fokus Prov)
- [ ] `osn-smp-mtk-03b-3-cerita-ptlsv-campur.md`
- [ ] `osn-smp-mtk-03b-3-cerita-ptlsv-mudah.md`
- [ ] `osn-smp-mtk-03b-3-cerita-ptlsv-sedang.md`
- [ ] `osn-smp-mtk-03b-3-cerita-ptlsv-sulit.md`
- [ ] `osn-smp-mtk-03b-3-cerita-ptlsv-mudah-sedang.md`
- [ ] `osn-smp-mtk-03b-3-cerita-ptlsv-sedang-sulit.md`

#### MTK-03c · SPLDV - Metode Substitusi

**MTK-03c-1 · Substitusi Sederhana (Variabel Terisolasi)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-03c-1-substitusi-sederhana-campur.md`
- [ ] `osn-smp-mtk-03c-1-substitusi-sederhana-mudah.md`
- [ ] `osn-smp-mtk-03c-1-substitusi-sederhana-sedang.md`
- [ ] `osn-smp-mtk-03c-1-substitusi-sederhana-sulit.md`
- [ ] `osn-smp-mtk-03c-1-substitusi-sederhana-mudah-sedang.md`
- [ ] `osn-smp-mtk-03c-1-substitusi-sederhana-sedang-sulit.md`

**MTK-03c-2 · Substitusi dengan Pecahan/Bentuk Kompleks** (fokus Prov)
- [ ] `osn-smp-mtk-03c-2-substitusi-pecahan-campur.md`
- [ ] `osn-smp-mtk-03c-2-substitusi-pecahan-mudah.md`
- [ ] `osn-smp-mtk-03c-2-substitusi-pecahan-sedang.md`
- [ ] `osn-smp-mtk-03c-2-substitusi-pecahan-sulit.md`
- [ ] `osn-smp-mtk-03c-2-substitusi-pecahan-mudah-sedang.md`
- [ ] `osn-smp-mtk-03c-2-substitusi-pecahan-sedang-sulit.md`

#### MTK-03d · SPLDV - Metode Eliminasi

**MTK-03d-1 · Eliminasi Variabel x atau y** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-03d-1-eliminasi-dasar-campur.md`
- [ ] `osn-smp-mtk-03d-1-eliminasi-dasar-mudah.md`
- [ ] `osn-smp-mtk-03d-1-eliminasi-dasar-sedang.md`
- [ ] `osn-smp-mtk-03d-1-eliminasi-dasar-sulit.md`
- [ ] `osn-smp-mtk-03d-1-eliminasi-dasar-mudah-sedang.md`
- [ ] `osn-smp-mtk-03d-1-eliminasi-dasar-sedang-sulit.md`

**MTK-03d-2 · Eliminasi-Substitusi Gabungan (Hybrid)** (fokus Prov)
- [ ] `osn-smp-mtk-03d-2-eliminasi-substitusi-campur.md`
- [ ] `osn-smp-mtk-03d-2-eliminasi-substitusi-mudah.md`
- [ ] `osn-smp-mtk-03d-2-eliminasi-substitusi-sedang.md`
- [ ] `osn-smp-mtk-03d-2-eliminasi-substitusi-sulit.md`
- [ ] `osn-smp-mtk-03d-2-eliminasi-substitusi-mudah-sedang.md`
- [ ] `osn-smp-mtk-03d-2-eliminasi-substitusi-sedang-sulit.md`

#### MTK-03e · SPLDV - Metode Grafik & Campuran

**MTK-03e-1 · Penyelesaian SPLDV dengan Grafik** (fokus Prov)
- [ ] `osn-smp-mtk-03e-1-spldv-grafik-campur.md`
- [ ] `osn-smp-mtk-03e-1-spldv-grafik-mudah.md`
- [ ] `osn-smp-mtk-03e-1-spldv-grafik-sedang.md`
- [ ] `osn-smp-mtk-03e-1-spldv-grafik-sulit.md`
- [ ] `osn-smp-mtk-03e-1-spldv-grafik-mudah-sedang.md`
- [ ] `osn-smp-mtk-03e-1-spldv-grafik-sedang-sulit.md`

**MTK-03e-2 · Jenis Solusi SPLDV (Tunggal, Tak Hingga, Tidak Ada)** (fokus Prov)
- [ ] `osn-smp-mtk-03e-2-jenis-solusi-spldv-campur.md`
- [ ] `osn-smp-mtk-03e-2-jenis-solusi-spldv-mudah.md`
- [ ] `osn-smp-mtk-03e-2-jenis-solusi-spldv-sedang.md`
- [ ] `osn-smp-mtk-03e-2-jenis-solusi-spldv-sulit.md`
- [ ] `osn-smp-mtk-03e-2-jenis-solusi-spldv-mudah-sedang.md`
- [ ] `osn-smp-mtk-03e-2-jenis-solusi-spldv-sedang-sulit.md`

#### MTK-03f · Persamaan Kuadrat - Faktorisasi

**MTK-03f-1 · Persamaan Kuadrat x² + bx + c = 0 (Faktorisasi)** (fokus Prov)
- [ ] `osn-smp-mtk-03f-1-pk-koef-1-faktor-campur.md`
- [ ] `osn-smp-mtk-03f-1-pk-koef-1-faktor-mudah.md`
- [ ] `osn-smp-mtk-03f-1-pk-koef-1-faktor-sedang.md`
- [ ] `osn-smp-mtk-03f-1-pk-koef-1-faktor-sulit.md`
- [ ] `osn-smp-mtk-03f-1-pk-koef-1-faktor-mudah-sedang.md`
- [ ] `osn-smp-mtk-03f-1-pk-koef-1-faktor-sedang-sulit.md`

**MTK-03f-2 · Persamaan Kuadrat ax² + bx + c = 0 (Faktorisasi)** (fokus Prov)
- [ ] `osn-smp-mtk-03f-2-pk-faktor-lanjut-campur.md`
- [ ] `osn-smp-mtk-03f-2-pk-faktor-lanjut-mudah.md`
- [ ] `osn-smp-mtk-03f-2-pk-faktor-lanjut-sedang.md`
- [ ] `osn-smp-mtk-03f-2-pk-faktor-lanjut-sulit.md`
- [ ] `osn-smp-mtk-03f-2-pk-faktor-lanjut-mudah-sedang.md`
- [ ] `osn-smp-mtk-03f-2-pk-faktor-lanjut-sedang-sulit.md`

#### MTK-03g · Persamaan Kuadrat - Kuadrat Sempurna & Rumus abc

**MTK-03g-1 · Metode Melengkapi Kuadrat Sempurna** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-03g-1-melengkapi-kuadrat-campur.md`
- [ ] `osn-smp-mtk-03g-1-melengkapi-kuadrat-mudah.md`
- [ ] `osn-smp-mtk-03g-1-melengkapi-kuadrat-sedang.md`
- [ ] `osn-smp-mtk-03g-1-melengkapi-kuadrat-sulit.md`
- [ ] `osn-smp-mtk-03g-1-melengkapi-kuadrat-mudah-sedang.md`
- [ ] `osn-smp-mtk-03g-1-melengkapi-kuadrat-sedang-sulit.md`

**MTK-03g-2 · Rumus abc (Kuadratik)** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-03g-2-rumus-abc-campur.md`
- [ ] `osn-smp-mtk-03g-2-rumus-abc-mudah.md`
- [ ] `osn-smp-mtk-03g-2-rumus-abc-sedang.md`
- [ ] `osn-smp-mtk-03g-2-rumus-abc-sulit.md`
- [ ] `osn-smp-mtk-03g-2-rumus-abc-mudah-sedang.md`
- [ ] `osn-smp-mtk-03g-2-rumus-abc-sedang-sulit.md`

#### MTK-03h · Diskriminan & Sifat Akar

**MTK-03h-1 · Nilai Diskriminan & Jenis Akar (D>0, D=0, D<0)** (fokus Prov)
- [ ] `osn-smp-mtk-03h-1-diskriminan-jenis-akar-campur.md`
- [ ] `osn-smp-mtk-03h-1-diskriminan-jenis-akar-mudah.md`
- [ ] `osn-smp-mtk-03h-1-diskriminan-jenis-akar-sedang.md`
- [ ] `osn-smp-mtk-03h-1-diskriminan-jenis-akar-sulit.md`
- [ ] `osn-smp-mtk-03h-1-diskriminan-jenis-akar-mudah-sedang.md`
- [ ] `osn-smp-mtk-03h-1-diskriminan-jenis-akar-sedang-sulit.md`

**MTK-03h-2 · Rumus Jumlah & Hasil Kali Akar (x₁+x₂, x₁·x₂)** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-03h-2-jumlah-hasil-kali-akar-campur.md`
- [ ] `osn-smp-mtk-03h-2-jumlah-hasil-kali-akar-mudah.md`
- [ ] `osn-smp-mtk-03h-2-jumlah-hasil-kali-akar-sedang.md`
- [ ] `osn-smp-mtk-03h-2-jumlah-hasil-kali-akar-sulit.md`
- [ ] `osn-smp-mtk-03h-2-jumlah-hasil-kali-akar-mudah-sedang.md`
- [ ] `osn-smp-mtk-03h-2-jumlah-hasil-kali-akar-sedang-sulit.md`

#### MTK-03i · Soal Cerita SPLDV

**MTK-03i-1 · Soal Cerita SPLDV - Harga Barang** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-03i-1-cerita-spldv-harga-campur.md`
- [ ] `osn-smp-mtk-03i-1-cerita-spldv-harga-mudah.md`
- [ ] `osn-smp-mtk-03i-1-cerita-spldv-harga-sedang.md`
- [ ] `osn-smp-mtk-03i-1-cerita-spldv-harga-sulit.md`
- [ ] `osn-smp-mtk-03i-1-cerita-spldv-harga-mudah-sedang.md`
- [ ] `osn-smp-mtk-03i-1-cerita-spldv-harga-sedang-sulit.md`

**MTK-03i-2 · Soal Cerita SPLDV - Umur, Usia** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-03i-2-cerita-spldv-umur-campur.md`
- [ ] `osn-smp-mtk-03i-2-cerita-spldv-umur-mudah.md`
- [ ] `osn-smp-mtk-03i-2-cerita-spldv-umur-sedang.md`
- [ ] `osn-smp-mtk-03i-2-cerita-spldv-umur-sulit.md`
- [ ] `osn-smp-mtk-03i-2-cerita-spldv-umur-mudah-sedang.md`
- [ ] `osn-smp-mtk-03i-2-cerita-spldv-umur-sedang-sulit.md`

**MTK-03i-3 · Soal Cerita SPLDV - Gerakan, Kecepatan, Campuran** (fokus Prov)
- [ ] `osn-smp-mtk-03i-3-cerita-spldv-gerak-campur.md`
- [ ] `osn-smp-mtk-03i-3-cerita-spldv-gerak-mudah.md`
- [ ] `osn-smp-mtk-03i-3-cerita-spldv-gerak-sedang.md`
- [ ] `osn-smp-mtk-03i-3-cerita-spldv-gerak-sulit.md`
- [ ] `osn-smp-mtk-03i-3-cerita-spldv-gerak-mudah-sedang.md`
- [ ] `osn-smp-mtk-03i-3-cerita-spldv-gerak-sedang-sulit.md`

#### MTK-03j · Soal Cerita Persamaan Kuadrat

**MTK-03j-1 · Cerita PK - Geometri (Luas, Keliling)** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-03j-1-cerita-pk-geometri-campur.md`
- [ ] `osn-smp-mtk-03j-1-cerita-pk-geometri-mudah.md`
- [ ] `osn-smp-mtk-03j-1-cerita-pk-geometri-sedang.md`
- [ ] `osn-smp-mtk-03j-1-cerita-pk-geometri-sulit.md`
- [ ] `osn-smp-mtk-03j-1-cerita-pk-geometri-mudah-sedang.md`
- [ ] `osn-smp-mtk-03j-1-cerita-pk-geometri-sedang-sulit.md`

**MTK-03j-2 · Cerita PK - Gerak, Bilangan** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-03j-2-cerita-pk-gerak-bilangan-campur.md`
- [ ] `osn-smp-mtk-03j-2-cerita-pk-gerak-bilangan-mudah.md`
- [ ] `osn-smp-mtk-03j-2-cerita-pk-gerak-bilangan-sedang.md`
- [ ] `osn-smp-mtk-03j-2-cerita-pk-gerak-bilangan-sulit.md`
- [ ] `osn-smp-mtk-03j-2-cerita-pk-gerak-bilangan-mudah-sedang.md`
- [ ] `osn-smp-mtk-03j-2-cerita-pk-gerak-bilangan-sedang-sulit.md`

### MTK-04 · Fungsi, Relasi & Persamaan Garis Lurus (~25 sub-sub-bab)

#### MTK-04a · Relasi & Fungsi

**MTK-04a-1 · Konsep Relasi & Penyajian (Diagram Panah, Pasangan, Cartesius)** (fokus Kab)
- [ ] `osn-smp-mtk-04a-1-relasi-penyajian-campur.md`
- [ ] `osn-smp-mtk-04a-1-relasi-penyajian-mudah.md`
- [ ] `osn-smp-mtk-04a-1-relasi-penyajian-sedang.md`
- [ ] `osn-smp-mtk-04a-1-relasi-penyajian-sulit.md`
- [ ] `osn-smp-mtk-04a-1-relasi-penyajian-mudah-sedang.md`
- [ ] `osn-smp-mtk-04a-1-relasi-penyajian-sedang-sulit.md`

**MTK-04a-2 · Membedakan Relasi & Fungsi** (fokus Kab)
- [ ] `osn-smp-mtk-04a-2-relasi-vs-fungsi-campur.md`
- [ ] `osn-smp-mtk-04a-2-relasi-vs-fungsi-mudah.md`
- [ ] `osn-smp-mtk-04a-2-relasi-vs-fungsi-sedang.md`
- [ ] `osn-smp-mtk-04a-2-relasi-vs-fungsi-sulit.md`
- [ ] `osn-smp-mtk-04a-2-relasi-vs-fungsi-mudah-sedang.md`
- [ ] `osn-smp-mtk-04a-2-relasi-vs-fungsi-sedang-sulit.md`

#### MTK-04b · Notasi & Nilai Fungsi

**MTK-04b-1 · Notasi f(x) & Substitusi Nilai** (fokus Kab)
- [ ] `osn-smp-mtk-04b-1-notasi-substitusi-campur.md`
- [ ] `osn-smp-mtk-04b-1-notasi-substitusi-mudah.md`
- [ ] `osn-smp-mtk-04b-1-notasi-substitusi-sedang.md`
- [ ] `osn-smp-mtk-04b-1-notasi-substitusi-sulit.md`
- [ ] `osn-smp-mtk-04b-1-notasi-substitusi-mudah-sedang.md`
- [ ] `osn-smp-mtk-04b-1-notasi-substitusi-sedang-sulit.md`

**MTK-04b-2 · Menentukan Bentuk Fungsi dari Data** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-04b-2-bentuk-fungsi-data-campur.md`
- [ ] `osn-smp-mtk-04b-2-bentuk-fungsi-data-mudah.md`
- [ ] `osn-smp-mtk-04b-2-bentuk-fungsi-data-sedang.md`
- [ ] `osn-smp-mtk-04b-2-bentuk-fungsi-data-sulit.md`
- [ ] `osn-smp-mtk-04b-2-bentuk-fungsi-data-mudah-sedang.md`
- [ ] `osn-smp-mtk-04b-2-bentuk-fungsi-data-sedang-sulit.md`

#### MTK-04c · Domain, Kodomain, Range

**MTK-04c-1 · Identifikasi Domain & Kodomain** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-04c-1-domain-kodomain-campur.md`
- [ ] `osn-smp-mtk-04c-1-domain-kodomain-mudah.md`
- [ ] `osn-smp-mtk-04c-1-domain-kodomain-sedang.md`
- [ ] `osn-smp-mtk-04c-1-domain-kodomain-sulit.md`
- [ ] `osn-smp-mtk-04c-1-domain-kodomain-mudah-sedang.md`
- [ ] `osn-smp-mtk-04c-1-domain-kodomain-sedang-sulit.md`

**MTK-04c-2 · Menentukan Range/Daerah Hasil** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-04c-2-range-daerah-hasil-campur.md`
- [ ] `osn-smp-mtk-04c-2-range-daerah-hasil-mudah.md`
- [ ] `osn-smp-mtk-04c-2-range-daerah-hasil-sedang.md`
- [ ] `osn-smp-mtk-04c-2-range-daerah-hasil-sulit.md`
- [ ] `osn-smp-mtk-04c-2-range-daerah-hasil-mudah-sedang.md`
- [ ] `osn-smp-mtk-04c-2-range-daerah-hasil-sedang-sulit.md`

#### MTK-04d · Pemetaan & Korespondensi Satu-Satu

**MTK-04d-1 · Banyaknya Pemetaan dari A ke B** (fokus Prov)
- [ ] `osn-smp-mtk-04d-1-banyak-pemetaan-campur.md`
- [ ] `osn-smp-mtk-04d-1-banyak-pemetaan-mudah.md`
- [ ] `osn-smp-mtk-04d-1-banyak-pemetaan-sedang.md`
- [ ] `osn-smp-mtk-04d-1-banyak-pemetaan-sulit.md`
- [ ] `osn-smp-mtk-04d-1-banyak-pemetaan-mudah-sedang.md`
- [ ] `osn-smp-mtk-04d-1-banyak-pemetaan-sedang-sulit.md`

**MTK-04d-2 · Korespondensi Satu-Satu (Bijektif)** (fokus Prov)
- [ ] `osn-smp-mtk-04d-2-korespondensi-satu-satu-campur.md`
- [ ] `osn-smp-mtk-04d-2-korespondensi-satu-satu-mudah.md`
- [ ] `osn-smp-mtk-04d-2-korespondensi-satu-satu-sedang.md`
- [ ] `osn-smp-mtk-04d-2-korespondensi-satu-satu-sulit.md`
- [ ] `osn-smp-mtk-04d-2-korespondensi-satu-satu-mudah-sedang.md`
- [ ] `osn-smp-mtk-04d-2-korespondensi-satu-satu-sedang-sulit.md`

#### MTK-04e · Gradien Garis Lurus

**MTK-04e-1 · Gradien dari Dua Titik** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-04e-1-gradien-dua-titik-campur.md`
- [ ] `osn-smp-mtk-04e-1-gradien-dua-titik-mudah.md`
- [ ] `osn-smp-mtk-04e-1-gradien-dua-titik-sedang.md`
- [ ] `osn-smp-mtk-04e-1-gradien-dua-titik-sulit.md`
- [ ] `osn-smp-mtk-04e-1-gradien-dua-titik-mudah-sedang.md`
- [ ] `osn-smp-mtk-04e-1-gradien-dua-titik-sedang-sulit.md`

**MTK-04e-2 · Gradien dari Persamaan Garis** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-04e-2-gradien-dari-persamaan-campur.md`
- [ ] `osn-smp-mtk-04e-2-gradien-dari-persamaan-mudah.md`
- [ ] `osn-smp-mtk-04e-2-gradien-dari-persamaan-sedang.md`
- [ ] `osn-smp-mtk-04e-2-gradien-dari-persamaan-sulit.md`
- [ ] `osn-smp-mtk-04e-2-gradien-dari-persamaan-mudah-sedang.md`
- [ ] `osn-smp-mtk-04e-2-gradien-dari-persamaan-sedang-sulit.md`

#### MTK-04f · Persamaan Garis Lurus (y=mx+c)

**MTK-04f-1 · Persamaan Garis dari Titik & Gradien** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-04f-1-pers-garis-titik-gradien-campur.md`
- [ ] `osn-smp-mtk-04f-1-pers-garis-titik-gradien-mudah.md`
- [ ] `osn-smp-mtk-04f-1-pers-garis-titik-gradien-sedang.md`
- [ ] `osn-smp-mtk-04f-1-pers-garis-titik-gradien-sulit.md`
- [ ] `osn-smp-mtk-04f-1-pers-garis-titik-gradien-mudah-sedang.md`
- [ ] `osn-smp-mtk-04f-1-pers-garis-titik-gradien-sedang-sulit.md`

**MTK-04f-2 · Persamaan Garis dari Dua Titik** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-04f-2-pers-garis-dua-titik-campur.md`
- [ ] `osn-smp-mtk-04f-2-pers-garis-dua-titik-mudah.md`
- [ ] `osn-smp-mtk-04f-2-pers-garis-dua-titik-sedang.md`
- [ ] `osn-smp-mtk-04f-2-pers-garis-dua-titik-sulit.md`
- [ ] `osn-smp-mtk-04f-2-pers-garis-dua-titik-mudah-sedang.md`
- [ ] `osn-smp-mtk-04f-2-pers-garis-dua-titik-sedang-sulit.md`

#### MTK-04g · Garis Sejajar & Tegak Lurus

**MTK-04g-1 · Persamaan Garis Sejajar (m₁ = m₂)** (fokus Prov)
- [ ] `osn-smp-mtk-04g-1-garis-sejajar-campur.md`
- [ ] `osn-smp-mtk-04g-1-garis-sejajar-mudah.md`
- [ ] `osn-smp-mtk-04g-1-garis-sejajar-sedang.md`
- [ ] `osn-smp-mtk-04g-1-garis-sejajar-sulit.md`
- [ ] `osn-smp-mtk-04g-1-garis-sejajar-mudah-sedang.md`
- [ ] `osn-smp-mtk-04g-1-garis-sejajar-sedang-sulit.md`

**MTK-04g-2 · Persamaan Garis Tegak Lurus (m₁ × m₂ = -1)** (fokus Prov)
- [ ] `osn-smp-mtk-04g-2-garis-tegak-lurus-campur.md`
- [ ] `osn-smp-mtk-04g-2-garis-tegak-lurus-mudah.md`
- [ ] `osn-smp-mtk-04g-2-garis-tegak-lurus-sedang.md`
- [ ] `osn-smp-mtk-04g-2-garis-tegak-lurus-sulit.md`
- [ ] `osn-smp-mtk-04g-2-garis-tegak-lurus-mudah-sedang.md`
- [ ] `osn-smp-mtk-04g-2-garis-tegak-lurus-sedang-sulit.md`

#### MTK-04h · Grafik Fungsi Linear

**MTK-04h-1 · Menggambar Grafik Fungsi Linear** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-04h-1-gambar-grafik-linear-campur.md`
- [ ] `osn-smp-mtk-04h-1-gambar-grafik-linear-mudah.md`
- [ ] `osn-smp-mtk-04h-1-gambar-grafik-linear-sedang.md`
- [ ] `osn-smp-mtk-04h-1-gambar-grafik-linear-sulit.md`
- [ ] `osn-smp-mtk-04h-1-gambar-grafik-linear-mudah-sedang.md`
- [ ] `osn-smp-mtk-04h-1-gambar-grafik-linear-sedang-sulit.md`

**MTK-04h-2 · Membaca & Interpretasi Grafik Linear** (fokus Prov)
- [ ] `osn-smp-mtk-04h-2-baca-grafik-linear-campur.md`
- [ ] `osn-smp-mtk-04h-2-baca-grafik-linear-mudah.md`
- [ ] `osn-smp-mtk-04h-2-baca-grafik-linear-sedang.md`
- [ ] `osn-smp-mtk-04h-2-baca-grafik-linear-sulit.md`
- [ ] `osn-smp-mtk-04h-2-baca-grafik-linear-mudah-sedang.md`
- [ ] `osn-smp-mtk-04h-2-baca-grafik-linear-sedang-sulit.md`

#### MTK-04i · Soal Cerita Fungsi

**MTK-04i-1 · Cerita Fungsi - Pemodelan Real** (fokus Prov)
- [ ] `osn-smp-mtk-04i-1-cerita-pemodelan-fungsi-campur.md`
- [ ] `osn-smp-mtk-04i-1-cerita-pemodelan-fungsi-mudah.md`
- [ ] `osn-smp-mtk-04i-1-cerita-pemodelan-fungsi-sedang.md`
- [ ] `osn-smp-mtk-04i-1-cerita-pemodelan-fungsi-sulit.md`
- [ ] `osn-smp-mtk-04i-1-cerita-pemodelan-fungsi-mudah-sedang.md`
- [ ] `osn-smp-mtk-04i-1-cerita-pemodelan-fungsi-sedang-sulit.md`

**MTK-04i-2 · Cerita Persamaan Garis (Bayaran Sewa, Tarif)** (fokus Prov)
- [ ] `osn-smp-mtk-04i-2-cerita-pers-garis-tarif-campur.md`
- [ ] `osn-smp-mtk-04i-2-cerita-pers-garis-tarif-mudah.md`
- [ ] `osn-smp-mtk-04i-2-cerita-pers-garis-tarif-sedang.md`
- [ ] `osn-smp-mtk-04i-2-cerita-pers-garis-tarif-sulit.md`
- [ ] `osn-smp-mtk-04i-2-cerita-pers-garis-tarif-mudah-sedang.md`
- [ ] `osn-smp-mtk-04i-2-cerita-pers-garis-tarif-sedang-sulit.md`

### MTK-05 · Perbandingan, Skala & Aritmetika Sosial (~25 sub-sub-bab)

#### MTK-05a · Perbandingan Senilai

**MTK-05a-1 · Konsep Perbandingan Senilai** (fokus Kab)
- [ ] `osn-smp-mtk-05a-1-konsep-senilai-campur.md`
- [ ] `osn-smp-mtk-05a-1-konsep-senilai-mudah.md`
- [ ] `osn-smp-mtk-05a-1-konsep-senilai-sedang.md`
- [ ] `osn-smp-mtk-05a-1-konsep-senilai-sulit.md`
- [ ] `osn-smp-mtk-05a-1-konsep-senilai-mudah-sedang.md`
- [ ] `osn-smp-mtk-05a-1-konsep-senilai-sedang-sulit.md`

**MTK-05a-2 · Aplikasi Senilai (Resep, Konversi, Harga)** (fokus Kab)
- [ ] `osn-smp-mtk-05a-2-aplikasi-senilai-campur.md`
- [ ] `osn-smp-mtk-05a-2-aplikasi-senilai-mudah.md`
- [ ] `osn-smp-mtk-05a-2-aplikasi-senilai-sedang.md`
- [ ] `osn-smp-mtk-05a-2-aplikasi-senilai-sulit.md`
- [ ] `osn-smp-mtk-05a-2-aplikasi-senilai-mudah-sedang.md`
- [ ] `osn-smp-mtk-05a-2-aplikasi-senilai-sedang-sulit.md`

#### MTK-05b · Perbandingan Berbalik Nilai

**MTK-05b-1 · Konsep & Identifikasi Berbalik Nilai** (fokus Kab)
- [ ] `osn-smp-mtk-05b-1-konsep-berbalik-campur.md`
- [ ] `osn-smp-mtk-05b-1-konsep-berbalik-mudah.md`
- [ ] `osn-smp-mtk-05b-1-konsep-berbalik-sedang.md`
- [ ] `osn-smp-mtk-05b-1-konsep-berbalik-sulit.md`
- [ ] `osn-smp-mtk-05b-1-konsep-berbalik-mudah-sedang.md`
- [ ] `osn-smp-mtk-05b-1-konsep-berbalik-sedang-sulit.md`

**MTK-05b-2 · Aplikasi Berbalik Nilai (Pekerja, Kecepatan, Persediaan)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-05b-2-aplikasi-berbalik-campur.md`
- [ ] `osn-smp-mtk-05b-2-aplikasi-berbalik-mudah.md`
- [ ] `osn-smp-mtk-05b-2-aplikasi-berbalik-sedang.md`
- [ ] `osn-smp-mtk-05b-2-aplikasi-berbalik-sulit.md`
- [ ] `osn-smp-mtk-05b-2-aplikasi-berbalik-mudah-sedang.md`
- [ ] `osn-smp-mtk-05b-2-aplikasi-berbalik-sedang-sulit.md`

#### MTK-05c · Skala Peta & Denah

**MTK-05c-1 · Konsep Skala Peta** (fokus Kab)
- [ ] `osn-smp-mtk-05c-1-konsep-skala-campur.md`
- [ ] `osn-smp-mtk-05c-1-konsep-skala-mudah.md`
- [ ] `osn-smp-mtk-05c-1-konsep-skala-sedang.md`
- [ ] `osn-smp-mtk-05c-1-konsep-skala-sulit.md`
- [ ] `osn-smp-mtk-05c-1-konsep-skala-mudah-sedang.md`
- [ ] `osn-smp-mtk-05c-1-konsep-skala-sedang-sulit.md`

**MTK-05c-2 · Soal Cerita Skala & Denah Bangunan** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-05c-2-cerita-skala-denah-campur.md`
- [ ] `osn-smp-mtk-05c-2-cerita-skala-denah-mudah.md`
- [ ] `osn-smp-mtk-05c-2-cerita-skala-denah-sedang.md`
- [ ] `osn-smp-mtk-05c-2-cerita-skala-denah-sulit.md`
- [ ] `osn-smp-mtk-05c-2-cerita-skala-denah-mudah-sedang.md`
- [ ] `osn-smp-mtk-05c-2-cerita-skala-denah-sedang-sulit.md`

#### MTK-05d · Untung-Rugi & Persentase

**MTK-05d-1 · Persen Untung & Persen Rugi** (fokus Kab)
- [ ] `osn-smp-mtk-05d-1-persen-untung-rugi-campur.md`
- [ ] `osn-smp-mtk-05d-1-persen-untung-rugi-mudah.md`
- [ ] `osn-smp-mtk-05d-1-persen-untung-rugi-sedang.md`
- [ ] `osn-smp-mtk-05d-1-persen-untung-rugi-sulit.md`
- [ ] `osn-smp-mtk-05d-1-persen-untung-rugi-mudah-sedang.md`
- [ ] `osn-smp-mtk-05d-1-persen-untung-rugi-sedang-sulit.md`

**MTK-05d-2 · Menentukan Harga Beli/Jual** (fokus Kab)
- [ ] `osn-smp-mtk-05d-2-harga-beli-jual-campur.md`
- [ ] `osn-smp-mtk-05d-2-harga-beli-jual-mudah.md`
- [ ] `osn-smp-mtk-05d-2-harga-beli-jual-sedang.md`
- [ ] `osn-smp-mtk-05d-2-harga-beli-jual-sulit.md`
- [ ] `osn-smp-mtk-05d-2-harga-beli-jual-mudah-sedang.md`
- [ ] `osn-smp-mtk-05d-2-harga-beli-jual-sedang-sulit.md`

#### MTK-05e · Diskon, Pajak, Bruto-Tara-Netto

**MTK-05e-1 · Diskon Tunggal & Diskon Berlapis** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-05e-1-diskon-campur.md`
- [ ] `osn-smp-mtk-05e-1-diskon-mudah.md`
- [ ] `osn-smp-mtk-05e-1-diskon-sedang.md`
- [ ] `osn-smp-mtk-05e-1-diskon-sulit.md`
- [ ] `osn-smp-mtk-05e-1-diskon-mudah-sedang.md`
- [ ] `osn-smp-mtk-05e-1-diskon-sedang-sulit.md`

**MTK-05e-2 · Pajak (PPN, PPh)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-05e-2-pajak-ppn-pph-campur.md`
- [ ] `osn-smp-mtk-05e-2-pajak-ppn-pph-mudah.md`
- [ ] `osn-smp-mtk-05e-2-pajak-ppn-pph-sedang.md`
- [ ] `osn-smp-mtk-05e-2-pajak-ppn-pph-sulit.md`
- [ ] `osn-smp-mtk-05e-2-pajak-ppn-pph-mudah-sedang.md`
- [ ] `osn-smp-mtk-05e-2-pajak-ppn-pph-sedang-sulit.md`

**MTK-05e-3 · Bruto, Tara, Netto** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-05e-3-bruto-tara-netto-campur.md`
- [ ] `osn-smp-mtk-05e-3-bruto-tara-netto-mudah.md`
- [ ] `osn-smp-mtk-05e-3-bruto-tara-netto-sedang.md`
- [ ] `osn-smp-mtk-05e-3-bruto-tara-netto-sulit.md`
- [ ] `osn-smp-mtk-05e-3-bruto-tara-netto-mudah-sedang.md`
- [ ] `osn-smp-mtk-05e-3-bruto-tara-netto-sedang-sulit.md`

#### MTK-05f · Bunga Tunggal

**MTK-05f-1 · Bunga Tunggal Dasar (B=M×i×t)** (fokus Kab)
- [ ] `osn-smp-mtk-05f-1-bunga-tunggal-dasar-campur.md`
- [ ] `osn-smp-mtk-05f-1-bunga-tunggal-dasar-mudah.md`
- [ ] `osn-smp-mtk-05f-1-bunga-tunggal-dasar-sedang.md`
- [ ] `osn-smp-mtk-05f-1-bunga-tunggal-dasar-sulit.md`
- [ ] `osn-smp-mtk-05f-1-bunga-tunggal-dasar-mudah-sedang.md`
- [ ] `osn-smp-mtk-05f-1-bunga-tunggal-dasar-sedang-sulit.md`

**MTK-05f-2 · Bunga Tunggal Lanjut (Menentukan Variabel Lain)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-05f-2-bunga-tunggal-lanjut-campur.md`
- [ ] `osn-smp-mtk-05f-2-bunga-tunggal-lanjut-mudah.md`
- [ ] `osn-smp-mtk-05f-2-bunga-tunggal-lanjut-sedang.md`
- [ ] `osn-smp-mtk-05f-2-bunga-tunggal-lanjut-sulit.md`
- [ ] `osn-smp-mtk-05f-2-bunga-tunggal-lanjut-mudah-sedang.md`
- [ ] `osn-smp-mtk-05f-2-bunga-tunggal-lanjut-sedang-sulit.md`

#### MTK-05g · Bunga Majemuk (Pengantar)

**MTK-05g-1 · Bunga Majemuk - Konsep & Perhitungan Tahunan** (fokus Prov)
- [ ] `osn-smp-mtk-05g-1-bunga-majemuk-tahunan-campur.md`
- [ ] `osn-smp-mtk-05g-1-bunga-majemuk-tahunan-mudah.md`
- [ ] `osn-smp-mtk-05g-1-bunga-majemuk-tahunan-sedang.md`
- [ ] `osn-smp-mtk-05g-1-bunga-majemuk-tahunan-sulit.md`
- [ ] `osn-smp-mtk-05g-1-bunga-majemuk-tahunan-mudah-sedang.md`
- [ ] `osn-smp-mtk-05g-1-bunga-majemuk-tahunan-sedang-sulit.md`

#### MTK-05h · Tabungan & Cicilan

**MTK-05h-1 · Tabungan dengan Bunga (Saldo Akhir)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-05h-1-tabungan-bunga-campur.md`
- [ ] `osn-smp-mtk-05h-1-tabungan-bunga-mudah.md`
- [ ] `osn-smp-mtk-05h-1-tabungan-bunga-sedang.md`
- [ ] `osn-smp-mtk-05h-1-tabungan-bunga-sulit.md`
- [ ] `osn-smp-mtk-05h-1-tabungan-bunga-mudah-sedang.md`
- [ ] `osn-smp-mtk-05h-1-tabungan-bunga-sedang-sulit.md`

**MTK-05h-2 · Cicilan & Angsuran** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-05h-2-cicilan-angsuran-campur.md`
- [ ] `osn-smp-mtk-05h-2-cicilan-angsuran-mudah.md`
- [ ] `osn-smp-mtk-05h-2-cicilan-angsuran-sedang.md`
- [ ] `osn-smp-mtk-05h-2-cicilan-angsuran-sulit.md`
- [ ] `osn-smp-mtk-05h-2-cicilan-angsuran-mudah-sedang.md`
- [ ] `osn-smp-mtk-05h-2-cicilan-angsuran-sedang-sulit.md`

#### MTK-05i · Soal Cerita Aritmetika Sosial

**MTK-05i-1 · Cerita Aritmetika Sosial Gabungan** (fokus Prov)
- [ ] `osn-smp-mtk-05i-1-cerita-aritsos-gabungan-campur.md`
- [ ] `osn-smp-mtk-05i-1-cerita-aritsos-gabungan-mudah.md`
- [ ] `osn-smp-mtk-05i-1-cerita-aritsos-gabungan-sedang.md`
- [ ] `osn-smp-mtk-05i-1-cerita-aritsos-gabungan-sulit.md`
- [ ] `osn-smp-mtk-05i-1-cerita-aritsos-gabungan-mudah-sedang.md`
- [ ] `osn-smp-mtk-05i-1-cerita-aritsos-gabungan-sedang-sulit.md`

### MTK-06 · Geometri Datar (~30 sub-sub-bab)

#### MTK-06a · Garis & Sudut

**MTK-06a-1 · Jenis-jenis Sudut (Lancip, Siku, Tumpul, Lurus, Refleks)** (fokus Kab)
- [ ] `osn-smp-mtk-06a-1-jenis-sudut-campur.md`
- [ ] `osn-smp-mtk-06a-1-jenis-sudut-mudah.md`
- [ ] `osn-smp-mtk-06a-1-jenis-sudut-sedang.md`
- [ ] `osn-smp-mtk-06a-1-jenis-sudut-sulit.md`
- [ ] `osn-smp-mtk-06a-1-jenis-sudut-mudah-sedang.md`
- [ ] `osn-smp-mtk-06a-1-jenis-sudut-sedang-sulit.md`

**MTK-06a-2 · Hubungan Sudut pada Garis Sejajar (Sehadap, Bersebrangan)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-06a-2-sudut-garis-sejajar-campur.md`
- [ ] `osn-smp-mtk-06a-2-sudut-garis-sejajar-mudah.md`
- [ ] `osn-smp-mtk-06a-2-sudut-garis-sejajar-sedang.md`
- [ ] `osn-smp-mtk-06a-2-sudut-garis-sejajar-sulit.md`
- [ ] `osn-smp-mtk-06a-2-sudut-garis-sejajar-mudah-sedang.md`
- [ ] `osn-smp-mtk-06a-2-sudut-garis-sejajar-sedang-sulit.md`

#### MTK-06b · Segitiga

**MTK-06b-1 · Jenis Segitiga (Berdasarkan Sisi & Sudut)** (fokus Kab)
- [ ] `osn-smp-mtk-06b-1-jenis-segitiga-campur.md`
- [ ] `osn-smp-mtk-06b-1-jenis-segitiga-mudah.md`
- [ ] `osn-smp-mtk-06b-1-jenis-segitiga-sedang.md`
- [ ] `osn-smp-mtk-06b-1-jenis-segitiga-sulit.md`
- [ ] `osn-smp-mtk-06b-1-jenis-segitiga-mudah-sedang.md`
- [ ] `osn-smp-mtk-06b-1-jenis-segitiga-sedang-sulit.md`

**MTK-06b-2 · Sifat Sudut Segitiga (Jumlah 180°, Sudut Luar)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-06b-2-sudut-segitiga-campur.md`
- [ ] `osn-smp-mtk-06b-2-sudut-segitiga-mudah.md`
- [ ] `osn-smp-mtk-06b-2-sudut-segitiga-sedang.md`
- [ ] `osn-smp-mtk-06b-2-sudut-segitiga-sulit.md`
- [ ] `osn-smp-mtk-06b-2-sudut-segitiga-mudah-sedang.md`
- [ ] `osn-smp-mtk-06b-2-sudut-segitiga-sedang-sulit.md`

#### MTK-06c · Garis Istimewa Segitiga

**MTK-06c-1 · Garis Tinggi & Garis Berat** (fokus Prov)
- [ ] `osn-smp-mtk-06c-1-tinggi-berat-campur.md`
- [ ] `osn-smp-mtk-06c-1-tinggi-berat-mudah.md`
- [ ] `osn-smp-mtk-06c-1-tinggi-berat-sedang.md`
- [ ] `osn-smp-mtk-06c-1-tinggi-berat-sulit.md`
- [ ] `osn-smp-mtk-06c-1-tinggi-berat-mudah-sedang.md`
- [ ] `osn-smp-mtk-06c-1-tinggi-berat-sedang-sulit.md`

**MTK-06c-2 · Garis Bagi & Garis Sumbu** (fokus Prov)
- [ ] `osn-smp-mtk-06c-2-bagi-sumbu-campur.md`
- [ ] `osn-smp-mtk-06c-2-bagi-sumbu-mudah.md`
- [ ] `osn-smp-mtk-06c-2-bagi-sumbu-sedang.md`
- [ ] `osn-smp-mtk-06c-2-bagi-sumbu-sulit.md`
- [ ] `osn-smp-mtk-06c-2-bagi-sumbu-mudah-sedang.md`
- [ ] `osn-smp-mtk-06c-2-bagi-sumbu-sedang-sulit.md`

#### MTK-06d · Keliling & Luas Segitiga

**MTK-06d-1 · Keliling Segitiga** (fokus Kab)
- [ ] `osn-smp-mtk-06d-1-keliling-segitiga-campur.md`
- [ ] `osn-smp-mtk-06d-1-keliling-segitiga-mudah.md`
- [ ] `osn-smp-mtk-06d-1-keliling-segitiga-sedang.md`
- [ ] `osn-smp-mtk-06d-1-keliling-segitiga-sulit.md`
- [ ] `osn-smp-mtk-06d-1-keliling-segitiga-mudah-sedang.md`
- [ ] `osn-smp-mtk-06d-1-keliling-segitiga-sedang-sulit.md`

**MTK-06d-2 · Luas Segitiga (Alas × Tinggi)** (fokus Kab)
- [ ] `osn-smp-mtk-06d-2-luas-segitiga-campur.md`
- [ ] `osn-smp-mtk-06d-2-luas-segitiga-mudah.md`
- [ ] `osn-smp-mtk-06d-2-luas-segitiga-sedang.md`
- [ ] `osn-smp-mtk-06d-2-luas-segitiga-sulit.md`
- [ ] `osn-smp-mtk-06d-2-luas-segitiga-mudah-sedang.md`
- [ ] `osn-smp-mtk-06d-2-luas-segitiga-sedang-sulit.md`

**MTK-06d-3 · Luas Segitiga dengan Rumus Heron** (fokus Prov)
- [ ] `osn-smp-mtk-06d-3-heron-campur.md`
- [ ] `osn-smp-mtk-06d-3-heron-mudah.md`
- [ ] `osn-smp-mtk-06d-3-heron-sedang.md`
- [ ] `osn-smp-mtk-06d-3-heron-sulit.md`
- [ ] `osn-smp-mtk-06d-3-heron-mudah-sedang.md`
- [ ] `osn-smp-mtk-06d-3-heron-sedang-sulit.md`

#### MTK-06e · Teorema Pythagoras

**MTK-06e-1 · Pythagoras Dasar (Mencari Sisi Miring/Tegak)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-06e-1-pythagoras-dasar-campur.md`
- [ ] `osn-smp-mtk-06e-1-pythagoras-dasar-mudah.md`
- [ ] `osn-smp-mtk-06e-1-pythagoras-dasar-sedang.md`
- [ ] `osn-smp-mtk-06e-1-pythagoras-dasar-sulit.md`
- [ ] `osn-smp-mtk-06e-1-pythagoras-dasar-mudah-sedang.md`
- [ ] `osn-smp-mtk-06e-1-pythagoras-dasar-sedang-sulit.md`

**MTK-06e-2 · Triple Pythagoras (3-4-5, 5-12-13, dll)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-06e-2-triple-pythagoras-campur.md`
- [ ] `osn-smp-mtk-06e-2-triple-pythagoras-mudah.md`
- [ ] `osn-smp-mtk-06e-2-triple-pythagoras-sedang.md`
- [ ] `osn-smp-mtk-06e-2-triple-pythagoras-sulit.md`
- [ ] `osn-smp-mtk-06e-2-triple-pythagoras-mudah-sedang.md`
- [ ] `osn-smp-mtk-06e-2-triple-pythagoras-sedang-sulit.md`

**MTK-06e-3 · Aplikasi Pythagoras (Tinggi, Jarak, Diagonal)** (fokus Prov)
- [ ] `osn-smp-mtk-06e-3-aplikasi-pythagoras-campur.md`
- [ ] `osn-smp-mtk-06e-3-aplikasi-pythagoras-mudah.md`
- [ ] `osn-smp-mtk-06e-3-aplikasi-pythagoras-sedang.md`
- [ ] `osn-smp-mtk-06e-3-aplikasi-pythagoras-sulit.md`
- [ ] `osn-smp-mtk-06e-3-aplikasi-pythagoras-mudah-sedang.md`
- [ ] `osn-smp-mtk-06e-3-aplikasi-pythagoras-sedang-sulit.md`

#### MTK-06f · Segiempat (Persegi, Persegi Panjang, Jajargenjang)

**MTK-06f-1 · Persegi & Persegi Panjang (Keliling, Luas, Diagonal)** (fokus Kab)
- [ ] `osn-smp-mtk-06f-1-persegi-persegipanjang-campur.md`
- [ ] `osn-smp-mtk-06f-1-persegi-persegipanjang-mudah.md`
- [ ] `osn-smp-mtk-06f-1-persegi-persegipanjang-sedang.md`
- [ ] `osn-smp-mtk-06f-1-persegi-persegipanjang-sulit.md`
- [ ] `osn-smp-mtk-06f-1-persegi-persegipanjang-mudah-sedang.md`
- [ ] `osn-smp-mtk-06f-1-persegi-persegipanjang-sedang-sulit.md`

**MTK-06f-2 · Jajargenjang (Sifat, Luas, Keliling)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-06f-2-jajargenjang-campur.md`
- [ ] `osn-smp-mtk-06f-2-jajargenjang-mudah.md`
- [ ] `osn-smp-mtk-06f-2-jajargenjang-sedang.md`
- [ ] `osn-smp-mtk-06f-2-jajargenjang-sulit.md`
- [ ] `osn-smp-mtk-06f-2-jajargenjang-mudah-sedang.md`
- [ ] `osn-smp-mtk-06f-2-jajargenjang-sedang-sulit.md`

#### MTK-06g · Segiempat (Trapesium, Belah Ketupat, Layang-layang)

**MTK-06g-1 · Trapesium (Sama Kaki, Sembarang) - Luas & Keliling** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-06g-1-trapesium-campur.md`
- [ ] `osn-smp-mtk-06g-1-trapesium-mudah.md`
- [ ] `osn-smp-mtk-06g-1-trapesium-sedang.md`
- [ ] `osn-smp-mtk-06g-1-trapesium-sulit.md`
- [ ] `osn-smp-mtk-06g-1-trapesium-mudah-sedang.md`
- [ ] `osn-smp-mtk-06g-1-trapesium-sedang-sulit.md`

**MTK-06g-2 · Belah Ketupat & Layang-layang (Diagonal)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-06g-2-belah-ketupat-layang-campur.md`
- [ ] `osn-smp-mtk-06g-2-belah-ketupat-layang-mudah.md`
- [ ] `osn-smp-mtk-06g-2-belah-ketupat-layang-sedang.md`
- [ ] `osn-smp-mtk-06g-2-belah-ketupat-layang-sulit.md`
- [ ] `osn-smp-mtk-06g-2-belah-ketupat-layang-mudah-sedang.md`
- [ ] `osn-smp-mtk-06g-2-belah-ketupat-layang-sedang-sulit.md`

#### MTK-06h · Lingkaran - Sudut Pusat & Sudut Keliling

**MTK-06h-1 · Unsur Lingkaran (Jari-jari, Diameter, Tali Busur, dll)** (fokus Kab)
- [ ] `osn-smp-mtk-06h-1-unsur-lingkaran-campur.md`
- [ ] `osn-smp-mtk-06h-1-unsur-lingkaran-mudah.md`
- [ ] `osn-smp-mtk-06h-1-unsur-lingkaran-sedang.md`
- [ ] `osn-smp-mtk-06h-1-unsur-lingkaran-sulit.md`
- [ ] `osn-smp-mtk-06h-1-unsur-lingkaran-mudah-sedang.md`
- [ ] `osn-smp-mtk-06h-1-unsur-lingkaran-sedang-sulit.md`

**MTK-06h-2 · Hubungan Sudut Pusat & Sudut Keliling** (fokus Prov)
- [ ] `osn-smp-mtk-06h-2-sudut-pusat-keliling-campur.md`
- [ ] `osn-smp-mtk-06h-2-sudut-pusat-keliling-mudah.md`
- [ ] `osn-smp-mtk-06h-2-sudut-pusat-keliling-sedang.md`
- [ ] `osn-smp-mtk-06h-2-sudut-pusat-keliling-sulit.md`
- [ ] `osn-smp-mtk-06h-2-sudut-pusat-keliling-mudah-sedang.md`
- [ ] `osn-smp-mtk-06h-2-sudut-pusat-keliling-sedang-sulit.md`

#### MTK-06i · Lingkaran - Keliling & Luas

**MTK-06i-1 · Keliling Lingkaran (K = 2πr)** (fokus Kab)
- [ ] `osn-smp-mtk-06i-1-keliling-lingkaran-campur.md`
- [ ] `osn-smp-mtk-06i-1-keliling-lingkaran-mudah.md`
- [ ] `osn-smp-mtk-06i-1-keliling-lingkaran-sedang.md`
- [ ] `osn-smp-mtk-06i-1-keliling-lingkaran-sulit.md`
- [ ] `osn-smp-mtk-06i-1-keliling-lingkaran-mudah-sedang.md`
- [ ] `osn-smp-mtk-06i-1-keliling-lingkaran-sedang-sulit.md`

**MTK-06i-2 · Luas Lingkaran (L = πr²)** (fokus Kab)
- [ ] `osn-smp-mtk-06i-2-luas-lingkaran-campur.md`
- [ ] `osn-smp-mtk-06i-2-luas-lingkaran-mudah.md`
- [ ] `osn-smp-mtk-06i-2-luas-lingkaran-sedang.md`
- [ ] `osn-smp-mtk-06i-2-luas-lingkaran-sulit.md`
- [ ] `osn-smp-mtk-06i-2-luas-lingkaran-mudah-sedang.md`
- [ ] `osn-smp-mtk-06i-2-luas-lingkaran-sedang-sulit.md`

#### MTK-06j · Garis Singgung Lingkaran

**MTK-06j-1 · Garis Singgung Persekutuan Dalam** (fokus Prov)
- [ ] `osn-smp-mtk-06j-1-singgung-dalam-campur.md`
- [ ] `osn-smp-mtk-06j-1-singgung-dalam-mudah.md`
- [ ] `osn-smp-mtk-06j-1-singgung-dalam-sedang.md`
- [ ] `osn-smp-mtk-06j-1-singgung-dalam-sulit.md`
- [ ] `osn-smp-mtk-06j-1-singgung-dalam-mudah-sedang.md`
- [ ] `osn-smp-mtk-06j-1-singgung-dalam-sedang-sulit.md`

**MTK-06j-2 · Garis Singgung Persekutuan Luar** (fokus Prov)
- [ ] `osn-smp-mtk-06j-2-singgung-luar-campur.md`
- [ ] `osn-smp-mtk-06j-2-singgung-luar-mudah.md`
- [ ] `osn-smp-mtk-06j-2-singgung-luar-sedang.md`
- [ ] `osn-smp-mtk-06j-2-singgung-luar-sulit.md`
- [ ] `osn-smp-mtk-06j-2-singgung-luar-mudah-sedang.md`
- [ ] `osn-smp-mtk-06j-2-singgung-luar-sedang-sulit.md`

#### MTK-06k · Tembereng, Juring, Busur

**MTK-06k-1 · Panjang Busur & Luas Juring** (fokus Prov)
- [ ] `osn-smp-mtk-06k-1-busur-juring-campur.md`
- [ ] `osn-smp-mtk-06k-1-busur-juring-mudah.md`
- [ ] `osn-smp-mtk-06k-1-busur-juring-sedang.md`
- [ ] `osn-smp-mtk-06k-1-busur-juring-sulit.md`
- [ ] `osn-smp-mtk-06k-1-busur-juring-mudah-sedang.md`
- [ ] `osn-smp-mtk-06k-1-busur-juring-sedang-sulit.md`

**MTK-06k-2 · Luas Tembereng** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-06k-2-tembereng-campur.md`
- [ ] `osn-smp-mtk-06k-2-tembereng-mudah.md`
- [ ] `osn-smp-mtk-06k-2-tembereng-sedang.md`
- [ ] `osn-smp-mtk-06k-2-tembereng-sulit.md`
- [ ] `osn-smp-mtk-06k-2-tembereng-mudah-sedang.md`
- [ ] `osn-smp-mtk-06k-2-tembereng-sedang-sulit.md`

#### MTK-06l · Soal Gabungan Geometri Datar

**MTK-06l-1 · Luas Daerah Arsir (Kombinasi Bangun)** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-06l-1-luas-arsir-kombinasi-campur.md`
- [ ] `osn-smp-mtk-06l-1-luas-arsir-kombinasi-mudah.md`
- [ ] `osn-smp-mtk-06l-1-luas-arsir-kombinasi-sedang.md`
- [ ] `osn-smp-mtk-06l-1-luas-arsir-kombinasi-sulit.md`
- [ ] `osn-smp-mtk-06l-1-luas-arsir-kombinasi-mudah-sedang.md`
- [ ] `osn-smp-mtk-06l-1-luas-arsir-kombinasi-sedang-sulit.md`

**MTK-06l-2 · Soal Cerita Geometri Datar Aplikasi** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-06l-2-cerita-geometri-datar-campur.md`
- [ ] `osn-smp-mtk-06l-2-cerita-geometri-datar-mudah.md`
- [ ] `osn-smp-mtk-06l-2-cerita-geometri-datar-sedang.md`
- [ ] `osn-smp-mtk-06l-2-cerita-geometri-datar-sulit.md`
- [ ] `osn-smp-mtk-06l-2-cerita-geometri-datar-mudah-sedang.md`
- [ ] `osn-smp-mtk-06l-2-cerita-geometri-datar-sedang-sulit.md`

### MTK-07 · Geometri Ruang (~25 sub-sub-bab)

#### MTK-07a · Kubus

**MTK-07a-1 · Unsur Kubus (Sisi, Rusuk, Titik Sudut, Diagonal)** (fokus Kab)
- [ ] `osn-smp-mtk-07a-1-unsur-kubus-campur.md`
- [ ] `osn-smp-mtk-07a-1-unsur-kubus-mudah.md`
- [ ] `osn-smp-mtk-07a-1-unsur-kubus-sedang.md`
- [ ] `osn-smp-mtk-07a-1-unsur-kubus-sulit.md`
- [ ] `osn-smp-mtk-07a-1-unsur-kubus-mudah-sedang.md`
- [ ] `osn-smp-mtk-07a-1-unsur-kubus-sedang-sulit.md`

**MTK-07a-2 · Luas Permukaan & Volume Kubus** (fokus Kab)
- [ ] `osn-smp-mtk-07a-2-luas-volume-kubus-campur.md`
- [ ] `osn-smp-mtk-07a-2-luas-volume-kubus-mudah.md`
- [ ] `osn-smp-mtk-07a-2-luas-volume-kubus-sedang.md`
- [ ] `osn-smp-mtk-07a-2-luas-volume-kubus-sulit.md`
- [ ] `osn-smp-mtk-07a-2-luas-volume-kubus-mudah-sedang.md`
- [ ] `osn-smp-mtk-07a-2-luas-volume-kubus-sedang-sulit.md`

#### MTK-07b · Balok

**MTK-07b-1 · Unsur Balok & Diagonal Ruang** (fokus Kab)
- [ ] `osn-smp-mtk-07b-1-unsur-balok-campur.md`
- [ ] `osn-smp-mtk-07b-1-unsur-balok-mudah.md`
- [ ] `osn-smp-mtk-07b-1-unsur-balok-sedang.md`
- [ ] `osn-smp-mtk-07b-1-unsur-balok-sulit.md`
- [ ] `osn-smp-mtk-07b-1-unsur-balok-mudah-sedang.md`
- [ ] `osn-smp-mtk-07b-1-unsur-balok-sedang-sulit.md`

**MTK-07b-2 · Luas Permukaan & Volume Balok** (fokus Kab)
- [ ] `osn-smp-mtk-07b-2-luas-volume-balok-campur.md`
- [ ] `osn-smp-mtk-07b-2-luas-volume-balok-mudah.md`
- [ ] `osn-smp-mtk-07b-2-luas-volume-balok-sedang.md`
- [ ] `osn-smp-mtk-07b-2-luas-volume-balok-sulit.md`
- [ ] `osn-smp-mtk-07b-2-luas-volume-balok-mudah-sedang.md`
- [ ] `osn-smp-mtk-07b-2-luas-volume-balok-sedang-sulit.md`

#### MTK-07c · Prisma

**MTK-07c-1 · Prisma Segitiga - Luas & Volume** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-07c-1-prisma-segitiga-campur.md`
- [ ] `osn-smp-mtk-07c-1-prisma-segitiga-mudah.md`
- [ ] `osn-smp-mtk-07c-1-prisma-segitiga-sedang.md`
- [ ] `osn-smp-mtk-07c-1-prisma-segitiga-sulit.md`
- [ ] `osn-smp-mtk-07c-1-prisma-segitiga-mudah-sedang.md`
- [ ] `osn-smp-mtk-07c-1-prisma-segitiga-sedang-sulit.md`

**MTK-07c-2 · Prisma Segiempat/Segi-n - Luas & Volume** (fokus Prov)
- [ ] `osn-smp-mtk-07c-2-prisma-segi-n-campur.md`
- [ ] `osn-smp-mtk-07c-2-prisma-segi-n-mudah.md`
- [ ] `osn-smp-mtk-07c-2-prisma-segi-n-sedang.md`
- [ ] `osn-smp-mtk-07c-2-prisma-segi-n-sulit.md`
- [ ] `osn-smp-mtk-07c-2-prisma-segi-n-mudah-sedang.md`
- [ ] `osn-smp-mtk-07c-2-prisma-segi-n-sedang-sulit.md`

#### MTK-07d · Limas

**MTK-07d-1 · Limas Segitiga - Luas & Volume** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-07d-1-limas-segitiga-campur.md`
- [ ] `osn-smp-mtk-07d-1-limas-segitiga-mudah.md`
- [ ] `osn-smp-mtk-07d-1-limas-segitiga-sedang.md`
- [ ] `osn-smp-mtk-07d-1-limas-segitiga-sulit.md`
- [ ] `osn-smp-mtk-07d-1-limas-segitiga-mudah-sedang.md`
- [ ] `osn-smp-mtk-07d-1-limas-segitiga-sedang-sulit.md`

**MTK-07d-2 · Limas Segiempat - Luas & Volume** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-07d-2-limas-segiempat-campur.md`
- [ ] `osn-smp-mtk-07d-2-limas-segiempat-mudah.md`
- [ ] `osn-smp-mtk-07d-2-limas-segiempat-sedang.md`
- [ ] `osn-smp-mtk-07d-2-limas-segiempat-sulit.md`
- [ ] `osn-smp-mtk-07d-2-limas-segiempat-mudah-sedang.md`
- [ ] `osn-smp-mtk-07d-2-limas-segiempat-sedang-sulit.md`

#### MTK-07e · Tabung

**MTK-07e-1 · Luas Permukaan Tabung** (fokus Kab)
- [ ] `osn-smp-mtk-07e-1-luas-tabung-campur.md`
- [ ] `osn-smp-mtk-07e-1-luas-tabung-mudah.md`
- [ ] `osn-smp-mtk-07e-1-luas-tabung-sedang.md`
- [ ] `osn-smp-mtk-07e-1-luas-tabung-sulit.md`
- [ ] `osn-smp-mtk-07e-1-luas-tabung-mudah-sedang.md`
- [ ] `osn-smp-mtk-07e-1-luas-tabung-sedang-sulit.md`

**MTK-07e-2 · Volume Tabung** (fokus Kab)
- [ ] `osn-smp-mtk-07e-2-volume-tabung-campur.md`
- [ ] `osn-smp-mtk-07e-2-volume-tabung-mudah.md`
- [ ] `osn-smp-mtk-07e-2-volume-tabung-sedang.md`
- [ ] `osn-smp-mtk-07e-2-volume-tabung-sulit.md`
- [ ] `osn-smp-mtk-07e-2-volume-tabung-mudah-sedang.md`
- [ ] `osn-smp-mtk-07e-2-volume-tabung-sedang-sulit.md`

#### MTK-07f · Kerucut

**MTK-07f-1 · Luas Permukaan Kerucut (πr² + πrs)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-07f-1-luas-kerucut-campur.md`
- [ ] `osn-smp-mtk-07f-1-luas-kerucut-mudah.md`
- [ ] `osn-smp-mtk-07f-1-luas-kerucut-sedang.md`
- [ ] `osn-smp-mtk-07f-1-luas-kerucut-sulit.md`
- [ ] `osn-smp-mtk-07f-1-luas-kerucut-mudah-sedang.md`
- [ ] `osn-smp-mtk-07f-1-luas-kerucut-sedang-sulit.md`

**MTK-07f-2 · Volume Kerucut (⅓πr²t)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-07f-2-volume-kerucut-campur.md`
- [ ] `osn-smp-mtk-07f-2-volume-kerucut-mudah.md`
- [ ] `osn-smp-mtk-07f-2-volume-kerucut-sedang.md`
- [ ] `osn-smp-mtk-07f-2-volume-kerucut-sulit.md`
- [ ] `osn-smp-mtk-07f-2-volume-kerucut-mudah-sedang.md`
- [ ] `osn-smp-mtk-07f-2-volume-kerucut-sedang-sulit.md`

#### MTK-07g · Bola

**MTK-07g-1 · Luas Permukaan Bola (4πr²)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-07g-1-luas-bola-campur.md`
- [ ] `osn-smp-mtk-07g-1-luas-bola-mudah.md`
- [ ] `osn-smp-mtk-07g-1-luas-bola-sedang.md`
- [ ] `osn-smp-mtk-07g-1-luas-bola-sulit.md`
- [ ] `osn-smp-mtk-07g-1-luas-bola-mudah-sedang.md`
- [ ] `osn-smp-mtk-07g-1-luas-bola-sedang-sulit.md`

**MTK-07g-2 · Volume Bola (4/3 πr³)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-07g-2-volume-bola-campur.md`
- [ ] `osn-smp-mtk-07g-2-volume-bola-mudah.md`
- [ ] `osn-smp-mtk-07g-2-volume-bola-sedang.md`
- [ ] `osn-smp-mtk-07g-2-volume-bola-sulit.md`
- [ ] `osn-smp-mtk-07g-2-volume-bola-mudah-sedang.md`
- [ ] `osn-smp-mtk-07g-2-volume-bola-sedang-sulit.md`

#### MTK-07h · Jaring-jaring Bangun Ruang

**MTK-07h-1 · Identifikasi Jaring-jaring Kubus & Balok** (fokus Kab)
- [ ] `osn-smp-mtk-07h-1-jaring-kubus-balok-campur.md`
- [ ] `osn-smp-mtk-07h-1-jaring-kubus-balok-mudah.md`
- [ ] `osn-smp-mtk-07h-1-jaring-kubus-balok-sedang.md`
- [ ] `osn-smp-mtk-07h-1-jaring-kubus-balok-sulit.md`
- [ ] `osn-smp-mtk-07h-1-jaring-kubus-balok-mudah-sedang.md`
- [ ] `osn-smp-mtk-07h-1-jaring-kubus-balok-sedang-sulit.md`

**MTK-07h-2 · Jaring-jaring Prisma, Limas, Tabung, Kerucut** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-07h-2-jaring-bangun-lain-campur.md`
- [ ] `osn-smp-mtk-07h-2-jaring-bangun-lain-mudah.md`
- [ ] `osn-smp-mtk-07h-2-jaring-bangun-lain-sedang.md`
- [ ] `osn-smp-mtk-07h-2-jaring-bangun-lain-sulit.md`
- [ ] `osn-smp-mtk-07h-2-jaring-bangun-lain-mudah-sedang.md`
- [ ] `osn-smp-mtk-07h-2-jaring-bangun-lain-sedang-sulit.md`

#### MTK-07i · Gabungan Bangun Ruang

**MTK-07i-1 · Volume Gabungan (Kubus+Balok, Tabung+Kerucut)** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-07i-1-volume-gabungan-campur.md`
- [ ] `osn-smp-mtk-07i-1-volume-gabungan-mudah.md`
- [ ] `osn-smp-mtk-07i-1-volume-gabungan-sedang.md`
- [ ] `osn-smp-mtk-07i-1-volume-gabungan-sulit.md`
- [ ] `osn-smp-mtk-07i-1-volume-gabungan-mudah-sedang.md`
- [ ] `osn-smp-mtk-07i-1-volume-gabungan-sedang-sulit.md`

**MTK-07i-2 · Luas Permukaan Gabungan** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-07i-2-luas-gabungan-campur.md`
- [ ] `osn-smp-mtk-07i-2-luas-gabungan-mudah.md`
- [ ] `osn-smp-mtk-07i-2-luas-gabungan-sedang.md`
- [ ] `osn-smp-mtk-07i-2-luas-gabungan-sulit.md`
- [ ] `osn-smp-mtk-07i-2-luas-gabungan-mudah-sedang.md`
- [ ] `osn-smp-mtk-07i-2-luas-gabungan-sedang-sulit.md`

#### MTK-07j · Soal Cerita Geometri Ruang

**MTK-07j-1 · Cerita Volume (Bak Air, Akuarium, Wadah)** (fokus Prov)
- [ ] `osn-smp-mtk-07j-1-cerita-volume-bak-campur.md`
- [ ] `osn-smp-mtk-07j-1-cerita-volume-bak-mudah.md`
- [ ] `osn-smp-mtk-07j-1-cerita-volume-bak-sedang.md`
- [ ] `osn-smp-mtk-07j-1-cerita-volume-bak-sulit.md`
- [ ] `osn-smp-mtk-07j-1-cerita-volume-bak-mudah-sedang.md`
- [ ] `osn-smp-mtk-07j-1-cerita-volume-bak-sedang-sulit.md`

**MTK-07j-2 · Cerita Luas Permukaan (Cat, Kertas Pembungkus)** (fokus Prov)
- [ ] `osn-smp-mtk-07j-2-cerita-luas-permukaan-campur.md`
- [ ] `osn-smp-mtk-07j-2-cerita-luas-permukaan-mudah.md`
- [ ] `osn-smp-mtk-07j-2-cerita-luas-permukaan-sedang.md`
- [ ] `osn-smp-mtk-07j-2-cerita-luas-permukaan-sulit.md`
- [ ] `osn-smp-mtk-07j-2-cerita-luas-permukaan-mudah-sedang.md`
- [ ] `osn-smp-mtk-07j-2-cerita-luas-permukaan-sedang-sulit.md`

### MTK-08 · Transformasi Geometri & Kesebangunan (~23 sub-sub-bab)

#### MTK-08a · Refleksi

**MTK-08a-1 · Refleksi terhadap Sumbu X, Y, Garis y=x, y=-x** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-08a-1-refleksi-sumbu-campur.md`
- [ ] `osn-smp-mtk-08a-1-refleksi-sumbu-mudah.md`
- [ ] `osn-smp-mtk-08a-1-refleksi-sumbu-sedang.md`
- [ ] `osn-smp-mtk-08a-1-refleksi-sumbu-sulit.md`
- [ ] `osn-smp-mtk-08a-1-refleksi-sumbu-mudah-sedang.md`
- [ ] `osn-smp-mtk-08a-1-refleksi-sumbu-sedang-sulit.md`

**MTK-08a-2 · Refleksi terhadap Garis y=k, x=h, Titik** (fokus Prov)
- [ ] `osn-smp-mtk-08a-2-refleksi-titik-garis-campur.md`
- [ ] `osn-smp-mtk-08a-2-refleksi-titik-garis-mudah.md`
- [ ] `osn-smp-mtk-08a-2-refleksi-titik-garis-sedang.md`
- [ ] `osn-smp-mtk-08a-2-refleksi-titik-garis-sulit.md`
- [ ] `osn-smp-mtk-08a-2-refleksi-titik-garis-mudah-sedang.md`
- [ ] `osn-smp-mtk-08a-2-refleksi-titik-garis-sedang-sulit.md`

#### MTK-08b · Translasi

**MTK-08b-1 · Translasi Titik & Bangun** (fokus Kab)
- [ ] `osn-smp-mtk-08b-1-translasi-titik-campur.md`
- [ ] `osn-smp-mtk-08b-1-translasi-titik-mudah.md`
- [ ] `osn-smp-mtk-08b-1-translasi-titik-sedang.md`
- [ ] `osn-smp-mtk-08b-1-translasi-titik-sulit.md`
- [ ] `osn-smp-mtk-08b-1-translasi-titik-mudah-sedang.md`
- [ ] `osn-smp-mtk-08b-1-translasi-titik-sedang-sulit.md`

**MTK-08b-2 · Translasi Berturut-turut (Komposisi Translasi)** (fokus Prov)
- [ ] `osn-smp-mtk-08b-2-translasi-berturut-campur.md`
- [ ] `osn-smp-mtk-08b-2-translasi-berturut-mudah.md`
- [ ] `osn-smp-mtk-08b-2-translasi-berturut-sedang.md`
- [ ] `osn-smp-mtk-08b-2-translasi-berturut-sulit.md`
- [ ] `osn-smp-mtk-08b-2-translasi-berturut-mudah-sedang.md`
- [ ] `osn-smp-mtk-08b-2-translasi-berturut-sedang-sulit.md`

#### MTK-08c · Rotasi

**MTK-08c-1 · Rotasi terhadap Titik Pusat (90°, 180°, 270°)** (fokus Prov)
- [ ] `osn-smp-mtk-08c-1-rotasi-pusat-campur.md`
- [ ] `osn-smp-mtk-08c-1-rotasi-pusat-mudah.md`
- [ ] `osn-smp-mtk-08c-1-rotasi-pusat-sedang.md`
- [ ] `osn-smp-mtk-08c-1-rotasi-pusat-sulit.md`
- [ ] `osn-smp-mtk-08c-1-rotasi-pusat-mudah-sedang.md`
- [ ] `osn-smp-mtk-08c-1-rotasi-pusat-sedang-sulit.md`

**MTK-08c-2 · Rotasi terhadap Titik Sembarang** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-08c-2-rotasi-titik-lain-campur.md`
- [ ] `osn-smp-mtk-08c-2-rotasi-titik-lain-mudah.md`
- [ ] `osn-smp-mtk-08c-2-rotasi-titik-lain-sedang.md`
- [ ] `osn-smp-mtk-08c-2-rotasi-titik-lain-sulit.md`
- [ ] `osn-smp-mtk-08c-2-rotasi-titik-lain-mudah-sedang.md`
- [ ] `osn-smp-mtk-08c-2-rotasi-titik-lain-sedang-sulit.md`

#### MTK-08d · Dilatasi

**MTK-08d-1 · Dilatasi Pusat (0,0) dengan Faktor Skala k** (fokus Prov)
- [ ] `osn-smp-mtk-08d-1-dilatasi-pusat-asal-campur.md`
- [ ] `osn-smp-mtk-08d-1-dilatasi-pusat-asal-mudah.md`
- [ ] `osn-smp-mtk-08d-1-dilatasi-pusat-asal-sedang.md`
- [ ] `osn-smp-mtk-08d-1-dilatasi-pusat-asal-sulit.md`
- [ ] `osn-smp-mtk-08d-1-dilatasi-pusat-asal-mudah-sedang.md`
- [ ] `osn-smp-mtk-08d-1-dilatasi-pusat-asal-sedang-sulit.md`

**MTK-08d-2 · Dilatasi Pusat Sembarang & Luas Bayangan** (fokus Prov)
- [ ] `osn-smp-mtk-08d-2-dilatasi-pusat-lain-campur.md`
- [ ] `osn-smp-mtk-08d-2-dilatasi-pusat-lain-mudah.md`
- [ ] `osn-smp-mtk-08d-2-dilatasi-pusat-lain-sedang.md`
- [ ] `osn-smp-mtk-08d-2-dilatasi-pusat-lain-sulit.md`
- [ ] `osn-smp-mtk-08d-2-dilatasi-pusat-lain-mudah-sedang.md`
- [ ] `osn-smp-mtk-08d-2-dilatasi-pusat-lain-sedang-sulit.md`

#### MTK-08e · Komposisi Transformasi

**MTK-08e-1 · Komposisi Dua Refleksi (Hasil Translasi/Rotasi)** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-08e-1-komposisi-dua-refleksi-campur.md`
- [ ] `osn-smp-mtk-08e-1-komposisi-dua-refleksi-mudah.md`
- [ ] `osn-smp-mtk-08e-1-komposisi-dua-refleksi-sedang.md`
- [ ] `osn-smp-mtk-08e-1-komposisi-dua-refleksi-sulit.md`
- [ ] `osn-smp-mtk-08e-1-komposisi-dua-refleksi-mudah-sedang.md`
- [ ] `osn-smp-mtk-08e-1-komposisi-dua-refleksi-sedang-sulit.md`

**MTK-08e-2 · Komposisi Campuran Transformasi** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-08e-2-komposisi-campuran-campur.md`
- [ ] `osn-smp-mtk-08e-2-komposisi-campuran-mudah.md`
- [ ] `osn-smp-mtk-08e-2-komposisi-campuran-sedang.md`
- [ ] `osn-smp-mtk-08e-2-komposisi-campuran-sulit.md`
- [ ] `osn-smp-mtk-08e-2-komposisi-campuran-mudah-sedang.md`
- [ ] `osn-smp-mtk-08e-2-komposisi-campuran-sedang-sulit.md`

#### MTK-08f · Kesebangunan Bangun Datar

**MTK-08f-1 · Syarat Kesebangunan (Sudut Sama, Sisi Sebanding)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-08f-1-syarat-sebangun-campur.md`
- [ ] `osn-smp-mtk-08f-1-syarat-sebangun-mudah.md`
- [ ] `osn-smp-mtk-08f-1-syarat-sebangun-sedang.md`
- [ ] `osn-smp-mtk-08f-1-syarat-sebangun-sulit.md`
- [ ] `osn-smp-mtk-08f-1-syarat-sebangun-mudah-sedang.md`
- [ ] `osn-smp-mtk-08f-1-syarat-sebangun-sedang-sulit.md`

**MTK-08f-2 · Perbandingan Luas & Keliling Bangun Sebangun** (fokus Prov)
- [ ] `osn-smp-mtk-08f-2-perbandingan-luas-keliling-campur.md`
- [ ] `osn-smp-mtk-08f-2-perbandingan-luas-keliling-mudah.md`
- [ ] `osn-smp-mtk-08f-2-perbandingan-luas-keliling-sedang.md`
- [ ] `osn-smp-mtk-08f-2-perbandingan-luas-keliling-sulit.md`
- [ ] `osn-smp-mtk-08f-2-perbandingan-luas-keliling-mudah-sedang.md`
- [ ] `osn-smp-mtk-08f-2-perbandingan-luas-keliling-sedang-sulit.md`

#### MTK-08g · Kekongruenan Bangun Datar

**MTK-08g-1 · Syarat Kekongruenan Segitiga (SSS, SAS, ASA, AAS, RHS)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-08g-1-syarat-kongruen-campur.md`
- [ ] `osn-smp-mtk-08g-1-syarat-kongruen-mudah.md`
- [ ] `osn-smp-mtk-08g-1-syarat-kongruen-sedang.md`
- [ ] `osn-smp-mtk-08g-1-syarat-kongruen-sulit.md`
- [ ] `osn-smp-mtk-08g-1-syarat-kongruen-mudah-sedang.md`
- [ ] `osn-smp-mtk-08g-1-syarat-kongruen-sedang-sulit.md`

**MTK-08g-2 · Soal Pembuktian & Identifikasi Kongruen** (fokus Prov)
- [ ] `osn-smp-mtk-08g-2-pembuktian-kongruen-campur.md`
- [ ] `osn-smp-mtk-08g-2-pembuktian-kongruen-mudah.md`
- [ ] `osn-smp-mtk-08g-2-pembuktian-kongruen-sedang.md`
- [ ] `osn-smp-mtk-08g-2-pembuktian-kongruen-sulit.md`
- [ ] `osn-smp-mtk-08g-2-pembuktian-kongruen-mudah-sedang.md`
- [ ] `osn-smp-mtk-08g-2-pembuktian-kongruen-sedang-sulit.md`

#### MTK-08h · Kesebangunan pada Segitiga

**MTK-08h-1 · Garis Sejajar Sisi pada Segitiga (Thales)** (fokus Prov)
- [ ] `osn-smp-mtk-08h-1-thales-campur.md`
- [ ] `osn-smp-mtk-08h-1-thales-mudah.md`
- [ ] `osn-smp-mtk-08h-1-thales-sedang.md`
- [ ] `osn-smp-mtk-08h-1-thales-sulit.md`
- [ ] `osn-smp-mtk-08h-1-thales-mudah-sedang.md`
- [ ] `osn-smp-mtk-08h-1-thales-sedang-sulit.md`

**MTK-08h-2 · Segitiga Sebangun pada Trapesium** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-08h-2-sebangun-trapesium-campur.md`
- [ ] `osn-smp-mtk-08h-2-sebangun-trapesium-mudah.md`
- [ ] `osn-smp-mtk-08h-2-sebangun-trapesium-sedang.md`
- [ ] `osn-smp-mtk-08h-2-sebangun-trapesium-sulit.md`
- [ ] `osn-smp-mtk-08h-2-sebangun-trapesium-mudah-sedang.md`
- [ ] `osn-smp-mtk-08h-2-sebangun-trapesium-sedang-sulit.md`

#### MTK-08i · Penerapan Kesebangunan

**MTK-08i-1 · Tinggi Pohon, Bayangan, Cermin** (fokus Prov)
- [ ] `osn-smp-mtk-08i-1-tinggi-pohon-bayangan-campur.md`
- [ ] `osn-smp-mtk-08i-1-tinggi-pohon-bayangan-mudah.md`
- [ ] `osn-smp-mtk-08i-1-tinggi-pohon-bayangan-sedang.md`
- [ ] `osn-smp-mtk-08i-1-tinggi-pohon-bayangan-sulit.md`
- [ ] `osn-smp-mtk-08i-1-tinggi-pohon-bayangan-mudah-sedang.md`
- [ ] `osn-smp-mtk-08i-1-tinggi-pohon-bayangan-sedang-sulit.md`

**MTK-08i-2 · Foto, Peta, Model Bangunan** (fokus Prov)
- [ ] `osn-smp-mtk-08i-2-foto-peta-model-campur.md`
- [ ] `osn-smp-mtk-08i-2-foto-peta-model-mudah.md`
- [ ] `osn-smp-mtk-08i-2-foto-peta-model-sedang.md`
- [ ] `osn-smp-mtk-08i-2-foto-peta-model-sulit.md`
- [ ] `osn-smp-mtk-08i-2-foto-peta-model-mudah-sedang.md`
- [ ] `osn-smp-mtk-08i-2-foto-peta-model-sedang-sulit.md`

### MTK-09 · Statistika & Peluang (~28 sub-sub-bab)

#### MTK-09a · Data, Penyajian, Tabel & Diagram

**MTK-09a-1 · Diagram Batang & Diagram Garis** (fokus Kab)
- [ ] `osn-smp-mtk-09a-1-diagram-batang-garis-campur.md`
- [ ] `osn-smp-mtk-09a-1-diagram-batang-garis-mudah.md`
- [ ] `osn-smp-mtk-09a-1-diagram-batang-garis-sedang.md`
- [ ] `osn-smp-mtk-09a-1-diagram-batang-garis-sulit.md`
- [ ] `osn-smp-mtk-09a-1-diagram-batang-garis-mudah-sedang.md`
- [ ] `osn-smp-mtk-09a-1-diagram-batang-garis-sedang-sulit.md`

**MTK-09a-2 · Diagram Lingkaran (Derajat & Persen)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-09a-2-diagram-lingkaran-campur.md`
- [ ] `osn-smp-mtk-09a-2-diagram-lingkaran-mudah.md`
- [ ] `osn-smp-mtk-09a-2-diagram-lingkaran-sedang.md`
- [ ] `osn-smp-mtk-09a-2-diagram-lingkaran-sulit.md`
- [ ] `osn-smp-mtk-09a-2-diagram-lingkaran-mudah-sedang.md`
- [ ] `osn-smp-mtk-09a-2-diagram-lingkaran-sedang-sulit.md`

**MTK-09a-3 · Tabel Distribusi Frekuensi** (fokus Prov)
- [ ] `osn-smp-mtk-09a-3-tabel-frekuensi-campur.md`
- [ ] `osn-smp-mtk-09a-3-tabel-frekuensi-mudah.md`
- [ ] `osn-smp-mtk-09a-3-tabel-frekuensi-sedang.md`
- [ ] `osn-smp-mtk-09a-3-tabel-frekuensi-sulit.md`
- [ ] `osn-smp-mtk-09a-3-tabel-frekuensi-mudah-sedang.md`
- [ ] `osn-smp-mtk-09a-3-tabel-frekuensi-sedang-sulit.md`

#### MTK-09b · Mean (Rata-rata)

**MTK-09b-1 · Mean Data Tunggal** (fokus Kab)
- [ ] `osn-smp-mtk-09b-1-mean-data-tunggal-campur.md`
- [ ] `osn-smp-mtk-09b-1-mean-data-tunggal-mudah.md`
- [ ] `osn-smp-mtk-09b-1-mean-data-tunggal-sedang.md`
- [ ] `osn-smp-mtk-09b-1-mean-data-tunggal-sulit.md`
- [ ] `osn-smp-mtk-09b-1-mean-data-tunggal-mudah-sedang.md`
- [ ] `osn-smp-mtk-09b-1-mean-data-tunggal-sedang-sulit.md`

**MTK-09b-2 · Mean Data Berbobot/Frekuensi** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-09b-2-mean-berbobot-campur.md`
- [ ] `osn-smp-mtk-09b-2-mean-berbobot-mudah.md`
- [ ] `osn-smp-mtk-09b-2-mean-berbobot-sedang.md`
- [ ] `osn-smp-mtk-09b-2-mean-berbobot-sulit.md`
- [ ] `osn-smp-mtk-09b-2-mean-berbobot-mudah-sedang.md`
- [ ] `osn-smp-mtk-09b-2-mean-berbobot-sedang-sulit.md`

**MTK-09b-3 · Mean Gabungan & Mean Data Hilang** (fokus Prov)
- [ ] `osn-smp-mtk-09b-3-mean-gabungan-campur.md`
- [ ] `osn-smp-mtk-09b-3-mean-gabungan-mudah.md`
- [ ] `osn-smp-mtk-09b-3-mean-gabungan-sedang.md`
- [ ] `osn-smp-mtk-09b-3-mean-gabungan-sulit.md`
- [ ] `osn-smp-mtk-09b-3-mean-gabungan-mudah-sedang.md`
- [ ] `osn-smp-mtk-09b-3-mean-gabungan-sedang-sulit.md`

#### MTK-09c · Median

**MTK-09c-1 · Median Data Ganjil & Genap** (fokus Kab)
- [ ] `osn-smp-mtk-09c-1-median-ganjil-genap-campur.md`
- [ ] `osn-smp-mtk-09c-1-median-ganjil-genap-mudah.md`
- [ ] `osn-smp-mtk-09c-1-median-ganjil-genap-sedang.md`
- [ ] `osn-smp-mtk-09c-1-median-ganjil-genap-sulit.md`
- [ ] `osn-smp-mtk-09c-1-median-ganjil-genap-mudah-sedang.md`
- [ ] `osn-smp-mtk-09c-1-median-ganjil-genap-sedang-sulit.md`

**MTK-09c-2 · Median Data Berfrekuensi** (fokus Prov)
- [ ] `osn-smp-mtk-09c-2-median-frekuensi-campur.md`
- [ ] `osn-smp-mtk-09c-2-median-frekuensi-mudah.md`
- [ ] `osn-smp-mtk-09c-2-median-frekuensi-sedang.md`
- [ ] `osn-smp-mtk-09c-2-median-frekuensi-sulit.md`
- [ ] `osn-smp-mtk-09c-2-median-frekuensi-mudah-sedang.md`
- [ ] `osn-smp-mtk-09c-2-median-frekuensi-sedang-sulit.md`

#### MTK-09d · Modus

**MTK-09d-1 · Modus Tunggal & Multi-Modus** (fokus Kab)
- [ ] `osn-smp-mtk-09d-1-modus-campur.md`
- [ ] `osn-smp-mtk-09d-1-modus-mudah.md`
- [ ] `osn-smp-mtk-09d-1-modus-sedang.md`
- [ ] `osn-smp-mtk-09d-1-modus-sulit.md`
- [ ] `osn-smp-mtk-09d-1-modus-mudah-sedang.md`
- [ ] `osn-smp-mtk-09d-1-modus-sedang-sulit.md`

#### MTK-09e · Kuartil & Jangkauan

**MTK-09e-1 · Kuartil Bawah, Tengah, Atas (Q1, Q2, Q3)** (fokus Prov)
- [ ] `osn-smp-mtk-09e-1-kuartil-campur.md`
- [ ] `osn-smp-mtk-09e-1-kuartil-mudah.md`
- [ ] `osn-smp-mtk-09e-1-kuartil-sedang.md`
- [ ] `osn-smp-mtk-09e-1-kuartil-sulit.md`
- [ ] `osn-smp-mtk-09e-1-kuartil-mudah-sedang.md`
- [ ] `osn-smp-mtk-09e-1-kuartil-sedang-sulit.md`

**MTK-09e-2 · Jangkauan, Hamparan, Simpangan Kuartil** (fokus Prov)
- [ ] `osn-smp-mtk-09e-2-jangkauan-hamparan-campur.md`
- [ ] `osn-smp-mtk-09e-2-jangkauan-hamparan-mudah.md`
- [ ] `osn-smp-mtk-09e-2-jangkauan-hamparan-sedang.md`
- [ ] `osn-smp-mtk-09e-2-jangkauan-hamparan-sulit.md`
- [ ] `osn-smp-mtk-09e-2-jangkauan-hamparan-mudah-sedang.md`
- [ ] `osn-smp-mtk-09e-2-jangkauan-hamparan-sedang-sulit.md`

#### MTK-09f · Ukuran Penyebaran Data

**MTK-09f-1 · Simpangan Rata-rata** (fokus Prov)
- [ ] `osn-smp-mtk-09f-1-simpangan-rata-rata-campur.md`
- [ ] `osn-smp-mtk-09f-1-simpangan-rata-rata-mudah.md`
- [ ] `osn-smp-mtk-09f-1-simpangan-rata-rata-sedang.md`
- [ ] `osn-smp-mtk-09f-1-simpangan-rata-rata-sulit.md`
- [ ] `osn-smp-mtk-09f-1-simpangan-rata-rata-mudah-sedang.md`
- [ ] `osn-smp-mtk-09f-1-simpangan-rata-rata-sedang-sulit.md`

#### MTK-09g · Ruang Sampel & Titik Sampel

**MTK-09g-1 · Ruang Sampel Eksperimen Sederhana (Koin, Dadu)** (fokus Kab)
- [ ] `osn-smp-mtk-09g-1-ruang-sampel-sederhana-campur.md`
- [ ] `osn-smp-mtk-09g-1-ruang-sampel-sederhana-mudah.md`
- [ ] `osn-smp-mtk-09g-1-ruang-sampel-sederhana-sedang.md`
- [ ] `osn-smp-mtk-09g-1-ruang-sampel-sederhana-sulit.md`
- [ ] `osn-smp-mtk-09g-1-ruang-sampel-sederhana-mudah-sedang.md`
- [ ] `osn-smp-mtk-09g-1-ruang-sampel-sederhana-sedang-sulit.md`

**MTK-09g-2 · Ruang Sampel Gabungan (Dua Koin, Dua Dadu, Diagram Pohon)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-09g-2-ruang-sampel-gabungan-campur.md`
- [ ] `osn-smp-mtk-09g-2-ruang-sampel-gabungan-mudah.md`
- [ ] `osn-smp-mtk-09g-2-ruang-sampel-gabungan-sedang.md`
- [ ] `osn-smp-mtk-09g-2-ruang-sampel-gabungan-sulit.md`
- [ ] `osn-smp-mtk-09g-2-ruang-sampel-gabungan-mudah-sedang.md`
- [ ] `osn-smp-mtk-09g-2-ruang-sampel-gabungan-sedang-sulit.md`

#### MTK-09h · Peluang Frekuensi Relatif

**MTK-09h-1 · Frekuensi Relatif sebagai Pendekatan Peluang** (fokus Kab)
- [ ] `osn-smp-mtk-09h-1-frekuensi-relatif-campur.md`
- [ ] `osn-smp-mtk-09h-1-frekuensi-relatif-mudah.md`
- [ ] `osn-smp-mtk-09h-1-frekuensi-relatif-sedang.md`
- [ ] `osn-smp-mtk-09h-1-frekuensi-relatif-sulit.md`
- [ ] `osn-smp-mtk-09h-1-frekuensi-relatif-mudah-sedang.md`
- [ ] `osn-smp-mtk-09h-1-frekuensi-relatif-sedang-sulit.md`

**MTK-09h-2 · Frekuensi Harapan** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-09h-2-frekuensi-harapan-campur.md`
- [ ] `osn-smp-mtk-09h-2-frekuensi-harapan-mudah.md`
- [ ] `osn-smp-mtk-09h-2-frekuensi-harapan-sedang.md`
- [ ] `osn-smp-mtk-09h-2-frekuensi-harapan-sulit.md`
- [ ] `osn-smp-mtk-09h-2-frekuensi-harapan-mudah-sedang.md`
- [ ] `osn-smp-mtk-09h-2-frekuensi-harapan-sedang-sulit.md`

#### MTK-09i · Peluang Teoritik

**MTK-09i-1 · Peluang Kejadian Tunggal** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-09i-1-peluang-tunggal-campur.md`
- [ ] `osn-smp-mtk-09i-1-peluang-tunggal-mudah.md`
- [ ] `osn-smp-mtk-09i-1-peluang-tunggal-sedang.md`
- [ ] `osn-smp-mtk-09i-1-peluang-tunggal-sulit.md`
- [ ] `osn-smp-mtk-09i-1-peluang-tunggal-mudah-sedang.md`
- [ ] `osn-smp-mtk-09i-1-peluang-tunggal-sedang-sulit.md`

**MTK-09i-2 · Peluang Kartu, Bola, Kelereng dari Wadah** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-09i-2-peluang-wadah-campur.md`
- [ ] `osn-smp-mtk-09i-2-peluang-wadah-mudah.md`
- [ ] `osn-smp-mtk-09i-2-peluang-wadah-sedang.md`
- [ ] `osn-smp-mtk-09i-2-peluang-wadah-sulit.md`
- [ ] `osn-smp-mtk-09i-2-peluang-wadah-mudah-sedang.md`
- [ ] `osn-smp-mtk-09i-2-peluang-wadah-sedang-sulit.md`

#### MTK-09j · Peluang Komplemen & Saling Lepas

**MTK-09j-1 · Peluang Komplemen (P(A^c) = 1 - P(A))** (fokus Prov)
- [ ] `osn-smp-mtk-09j-1-peluang-komplemen-campur.md`
- [ ] `osn-smp-mtk-09j-1-peluang-komplemen-mudah.md`
- [ ] `osn-smp-mtk-09j-1-peluang-komplemen-sedang.md`
- [ ] `osn-smp-mtk-09j-1-peluang-komplemen-sulit.md`
- [ ] `osn-smp-mtk-09j-1-peluang-komplemen-mudah-sedang.md`
- [ ] `osn-smp-mtk-09j-1-peluang-komplemen-sedang-sulit.md`

**MTK-09j-2 · Peluang Kejadian Saling Lepas (A∪B)** (fokus Prov)
- [ ] `osn-smp-mtk-09j-2-peluang-saling-lepas-campur.md`
- [ ] `osn-smp-mtk-09j-2-peluang-saling-lepas-mudah.md`
- [ ] `osn-smp-mtk-09j-2-peluang-saling-lepas-sedang.md`
- [ ] `osn-smp-mtk-09j-2-peluang-saling-lepas-sulit.md`
- [ ] `osn-smp-mtk-09j-2-peluang-saling-lepas-mudah-sedang.md`
- [ ] `osn-smp-mtk-09j-2-peluang-saling-lepas-sedang-sulit.md`

#### MTK-09k · Soal Cerita Statistika & Peluang

**MTK-09k-1 · Cerita Statistika Penerapan Nyata** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-09k-1-cerita-statistika-campur.md`
- [ ] `osn-smp-mtk-09k-1-cerita-statistika-mudah.md`
- [ ] `osn-smp-mtk-09k-1-cerita-statistika-sedang.md`
- [ ] `osn-smp-mtk-09k-1-cerita-statistika-sulit.md`
- [ ] `osn-smp-mtk-09k-1-cerita-statistika-mudah-sedang.md`
- [ ] `osn-smp-mtk-09k-1-cerita-statistika-sedang-sulit.md`

**MTK-09k-2 · Cerita Peluang Aplikasi (Game, Undian)** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-09k-2-cerita-peluang-aplikasi-campur.md`
- [ ] `osn-smp-mtk-09k-2-cerita-peluang-aplikasi-mudah.md`
- [ ] `osn-smp-mtk-09k-2-cerita-peluang-aplikasi-sedang.md`
- [ ] `osn-smp-mtk-09k-2-cerita-peluang-aplikasi-sulit.md`
- [ ] `osn-smp-mtk-09k-2-cerita-peluang-aplikasi-mudah-sedang.md`
- [ ] `osn-smp-mtk-09k-2-cerita-peluang-aplikasi-sedang-sulit.md`

### MTK-10 · Teori Bilangan, Pola & Kombinatorika (~28 sub-sub-bab)

#### MTK-10a · KPK & FPB Lanjut

**MTK-10a-1 · KPK & FPB Tiga Bilangan atau Lebih** (fokus Prov)
- [ ] `osn-smp-mtk-10a-1-kpk-fpb-tiga-campur.md`
- [ ] `osn-smp-mtk-10a-1-kpk-fpb-tiga-mudah.md`
- [ ] `osn-smp-mtk-10a-1-kpk-fpb-tiga-sedang.md`
- [ ] `osn-smp-mtk-10a-1-kpk-fpb-tiga-sulit.md`
- [ ] `osn-smp-mtk-10a-1-kpk-fpb-tiga-mudah-sedang.md`
- [ ] `osn-smp-mtk-10a-1-kpk-fpb-tiga-sedang-sulit.md`

**MTK-10a-2 · Hubungan KPK × FPB = a × b** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-10a-2-hubungan-kpk-fpb-campur.md`
- [ ] `osn-smp-mtk-10a-2-hubungan-kpk-fpb-mudah.md`
- [ ] `osn-smp-mtk-10a-2-hubungan-kpk-fpb-sedang.md`
- [ ] `osn-smp-mtk-10a-2-hubungan-kpk-fpb-sulit.md`
- [ ] `osn-smp-mtk-10a-2-hubungan-kpk-fpb-mudah-sedang.md`
- [ ] `osn-smp-mtk-10a-2-hubungan-kpk-fpb-sedang-sulit.md`

#### MTK-10b · Bilangan Prima & Faktorisasi Prima

**MTK-10b-1 · Identifikasi Bilangan Prima & Saringan Eratosthenes** (fokus Prov)
- [ ] `osn-smp-mtk-10b-1-identifikasi-prima-campur.md`
- [ ] `osn-smp-mtk-10b-1-identifikasi-prima-mudah.md`
- [ ] `osn-smp-mtk-10b-1-identifikasi-prima-sedang.md`
- [ ] `osn-smp-mtk-10b-1-identifikasi-prima-sulit.md`
- [ ] `osn-smp-mtk-10b-1-identifikasi-prima-mudah-sedang.md`
- [ ] `osn-smp-mtk-10b-1-identifikasi-prima-sedang-sulit.md`

**MTK-10b-2 · Faktorisasi Prima & Banyaknya Faktor (Tau Function)** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-10b-2-banyak-faktor-campur.md`
- [ ] `osn-smp-mtk-10b-2-banyak-faktor-mudah.md`
- [ ] `osn-smp-mtk-10b-2-banyak-faktor-sedang.md`
- [ ] `osn-smp-mtk-10b-2-banyak-faktor-sulit.md`
- [ ] `osn-smp-mtk-10b-2-banyak-faktor-mudah-sedang.md`
- [ ] `osn-smp-mtk-10b-2-banyak-faktor-sedang-sulit.md`

#### MTK-10c · Habis Dibagi & Sifat-sifatnya

**MTK-10c-1 · Aturan Habis Dibagi 2, 3, 4, 5, 6, 9, 10, 11** (fokus Prov)
- [ ] `osn-smp-mtk-10c-1-aturan-habis-dibagi-campur.md`
- [ ] `osn-smp-mtk-10c-1-aturan-habis-dibagi-mudah.md`
- [ ] `osn-smp-mtk-10c-1-aturan-habis-dibagi-sedang.md`
- [ ] `osn-smp-mtk-10c-1-aturan-habis-dibagi-sulit.md`
- [ ] `osn-smp-mtk-10c-1-aturan-habis-dibagi-mudah-sedang.md`
- [ ] `osn-smp-mtk-10c-1-aturan-habis-dibagi-sedang-sulit.md`

**MTK-10c-2 · Soal Penalaran Habis Dibagi** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-10c-2-penalaran-habis-dibagi-campur.md`
- [ ] `osn-smp-mtk-10c-2-penalaran-habis-dibagi-mudah.md`
- [ ] `osn-smp-mtk-10c-2-penalaran-habis-dibagi-sedang.md`
- [ ] `osn-smp-mtk-10c-2-penalaran-habis-dibagi-sulit.md`
- [ ] `osn-smp-mtk-10c-2-penalaran-habis-dibagi-mudah-sedang.md`
- [ ] `osn-smp-mtk-10c-2-penalaran-habis-dibagi-sedang-sulit.md`

#### MTK-10d · Modulo (Pengantar)

**MTK-10d-1 · Konsep Modulo & Sisa Pembagian** (fokus Nas)
- [ ] `osn-smp-mtk-10d-1-konsep-modulo-campur.md`
- [ ] `osn-smp-mtk-10d-1-konsep-modulo-mudah.md`
- [ ] `osn-smp-mtk-10d-1-konsep-modulo-sedang.md`
- [ ] `osn-smp-mtk-10d-1-konsep-modulo-sulit.md`
- [ ] `osn-smp-mtk-10d-1-konsep-modulo-mudah-sedang.md`
- [ ] `osn-smp-mtk-10d-1-konsep-modulo-sedang-sulit.md`

**MTK-10d-2 · Aplikasi Modulo (Hari, Jam, Pola Berulang)** (fokus Nas)
- [ ] `osn-smp-mtk-10d-2-aplikasi-modulo-hari-campur.md`
- [ ] `osn-smp-mtk-10d-2-aplikasi-modulo-hari-mudah.md`
- [ ] `osn-smp-mtk-10d-2-aplikasi-modulo-hari-sedang.md`
- [ ] `osn-smp-mtk-10d-2-aplikasi-modulo-hari-sulit.md`
- [ ] `osn-smp-mtk-10d-2-aplikasi-modulo-hari-mudah-sedang.md`
- [ ] `osn-smp-mtk-10d-2-aplikasi-modulo-hari-sedang-sulit.md`

#### MTK-10e · Pola Bilangan (Aritmetika & Geometri)

**MTK-10e-1 · Pola Bilangan Aritmetika (Beda Tetap)** (fokus Kab)
- [ ] `osn-smp-mtk-10e-1-aritmetika-pola-campur.md`
- [ ] `osn-smp-mtk-10e-1-aritmetika-pola-mudah.md`
- [ ] `osn-smp-mtk-10e-1-aritmetika-pola-sedang.md`
- [ ] `osn-smp-mtk-10e-1-aritmetika-pola-sulit.md`
- [ ] `osn-smp-mtk-10e-1-aritmetika-pola-mudah-sedang.md`
- [ ] `osn-smp-mtk-10e-1-aritmetika-pola-sedang-sulit.md`

**MTK-10e-2 · Pola Bilangan Geometri (Rasio Tetap)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-10e-2-geometri-pola-campur.md`
- [ ] `osn-smp-mtk-10e-2-geometri-pola-mudah.md`
- [ ] `osn-smp-mtk-10e-2-geometri-pola-sedang.md`
- [ ] `osn-smp-mtk-10e-2-geometri-pola-sulit.md`
- [ ] `osn-smp-mtk-10e-2-geometri-pola-mudah-sedang.md`
- [ ] `osn-smp-mtk-10e-2-geometri-pola-sedang-sulit.md`

**MTK-10e-3 · Suku ke-n & Jumlah n Suku Pertama** (fokus Prov)
- [ ] `osn-smp-mtk-10e-3-suku-jumlah-n-campur.md`
- [ ] `osn-smp-mtk-10e-3-suku-jumlah-n-mudah.md`
- [ ] `osn-smp-mtk-10e-3-suku-jumlah-n-sedang.md`
- [ ] `osn-smp-mtk-10e-3-suku-jumlah-n-sulit.md`
- [ ] `osn-smp-mtk-10e-3-suku-jumlah-n-mudah-sedang.md`
- [ ] `osn-smp-mtk-10e-3-suku-jumlah-n-sedang-sulit.md`

#### MTK-10f · Pola Bilangan Khusus

**MTK-10f-1 · Bilangan Segitiga & Bilangan Persegi** (fokus Prov)
- [ ] `osn-smp-mtk-10f-1-segitiga-persegi-bilangan-campur.md`
- [ ] `osn-smp-mtk-10f-1-segitiga-persegi-bilangan-mudah.md`
- [ ] `osn-smp-mtk-10f-1-segitiga-persegi-bilangan-sedang.md`
- [ ] `osn-smp-mtk-10f-1-segitiga-persegi-bilangan-sulit.md`
- [ ] `osn-smp-mtk-10f-1-segitiga-persegi-bilangan-mudah-sedang.md`
- [ ] `osn-smp-mtk-10f-1-segitiga-persegi-bilangan-sedang-sulit.md`

**MTK-10f-2 · Barisan Fibonacci & Pola Berulang** (fokus Prov)
- [ ] `osn-smp-mtk-10f-2-fibonacci-campur.md`
- [ ] `osn-smp-mtk-10f-2-fibonacci-mudah.md`
- [ ] `osn-smp-mtk-10f-2-fibonacci-sedang.md`
- [ ] `osn-smp-mtk-10f-2-fibonacci-sulit.md`
- [ ] `osn-smp-mtk-10f-2-fibonacci-mudah-sedang.md`
- [ ] `osn-smp-mtk-10f-2-fibonacci-sedang-sulit.md`

#### MTK-10g · Permutasi Sederhana

**MTK-10g-1 · Permutasi tanpa Pengulangan (nPr)** (fokus Prov)
- [ ] `osn-smp-mtk-10g-1-permutasi-tanpa-ulang-campur.md`
- [ ] `osn-smp-mtk-10g-1-permutasi-tanpa-ulang-mudah.md`
- [ ] `osn-smp-mtk-10g-1-permutasi-tanpa-ulang-sedang.md`
- [ ] `osn-smp-mtk-10g-1-permutasi-tanpa-ulang-sulit.md`
- [ ] `osn-smp-mtk-10g-1-permutasi-tanpa-ulang-mudah-sedang.md`
- [ ] `osn-smp-mtk-10g-1-permutasi-tanpa-ulang-sedang-sulit.md`

**MTK-10g-2 · Permutasi dengan Pengulangan & Pembatasan** (fokus Prov)
- [ ] `osn-smp-mtk-10g-2-permutasi-pengulangan-campur.md`
- [ ] `osn-smp-mtk-10g-2-permutasi-pengulangan-mudah.md`
- [ ] `osn-smp-mtk-10g-2-permutasi-pengulangan-sedang.md`
- [ ] `osn-smp-mtk-10g-2-permutasi-pengulangan-sulit.md`
- [ ] `osn-smp-mtk-10g-2-permutasi-pengulangan-mudah-sedang.md`
- [ ] `osn-smp-mtk-10g-2-permutasi-pengulangan-sedang-sulit.md`

#### MTK-10h · Kombinasi Sederhana

**MTK-10h-1 · Kombinasi nCr (Pemilihan Tanpa Urutan)** (fokus Prov)
- [ ] `osn-smp-mtk-10h-1-kombinasi-dasar-campur.md`
- [ ] `osn-smp-mtk-10h-1-kombinasi-dasar-mudah.md`
- [ ] `osn-smp-mtk-10h-1-kombinasi-dasar-sedang.md`
- [ ] `osn-smp-mtk-10h-1-kombinasi-dasar-sulit.md`
- [ ] `osn-smp-mtk-10h-1-kombinasi-dasar-mudah-sedang.md`
- [ ] `osn-smp-mtk-10h-1-kombinasi-dasar-sedang-sulit.md`

#### MTK-10i · Aturan Penjumlahan & Perkalian

**MTK-10i-1 · Aturan Perkalian (Multiplikasi Kasus)** (fokus Kab–Prov)
- [ ] `osn-smp-mtk-10i-1-aturan-perkalian-campur.md`
- [ ] `osn-smp-mtk-10i-1-aturan-perkalian-mudah.md`
- [ ] `osn-smp-mtk-10i-1-aturan-perkalian-sedang.md`
- [ ] `osn-smp-mtk-10i-1-aturan-perkalian-sulit.md`
- [ ] `osn-smp-mtk-10i-1-aturan-perkalian-mudah-sedang.md`
- [ ] `osn-smp-mtk-10i-1-aturan-perkalian-sedang-sulit.md`

**MTK-10i-2 · Aturan Penjumlahan & Inklusi-Eksklusi Sederhana** (fokus Prov)
- [ ] `osn-smp-mtk-10i-2-aturan-penjumlahan-campur.md`
- [ ] `osn-smp-mtk-10i-2-aturan-penjumlahan-mudah.md`
- [ ] `osn-smp-mtk-10i-2-aturan-penjumlahan-sedang.md`
- [ ] `osn-smp-mtk-10i-2-aturan-penjumlahan-sulit.md`
- [ ] `osn-smp-mtk-10i-2-aturan-penjumlahan-mudah-sedang.md`
- [ ] `osn-smp-mtk-10i-2-aturan-penjumlahan-sedang-sulit.md`

#### MTK-10j · Prinsip Pigeonhole

**MTK-10j-1 · Pigeonhole Dasar (Sarang Merpati)** (fokus Nas)
- [ ] `osn-smp-mtk-10j-1-pigeonhole-dasar-campur.md`
- [ ] `osn-smp-mtk-10j-1-pigeonhole-dasar-mudah.md`
- [ ] `osn-smp-mtk-10j-1-pigeonhole-dasar-sedang.md`
- [ ] `osn-smp-mtk-10j-1-pigeonhole-dasar-sulit.md`
- [ ] `osn-smp-mtk-10j-1-pigeonhole-dasar-mudah-sedang.md`
- [ ] `osn-smp-mtk-10j-1-pigeonhole-dasar-sedang-sulit.md`

#### MTK-10k · Soal Cerita Teori Bilangan

**MTK-10k-1 · Cerita Teori Bilangan Olimpiade** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-10k-1-cerita-teori-bilangan-campur.md`
- [ ] `osn-smp-mtk-10k-1-cerita-teori-bilangan-mudah.md`
- [ ] `osn-smp-mtk-10k-1-cerita-teori-bilangan-sedang.md`
- [ ] `osn-smp-mtk-10k-1-cerita-teori-bilangan-sulit.md`
- [ ] `osn-smp-mtk-10k-1-cerita-teori-bilangan-mudah-sedang.md`
- [ ] `osn-smp-mtk-10k-1-cerita-teori-bilangan-sedang-sulit.md`

**MTK-10k-2 · Cerita Kombinatorika (Penyusunan, Pemilihan, Pewarnaan)** (fokus Prov–Nas)
- [ ] `osn-smp-mtk-10k-2-cerita-kombinatorika-campur.md`
- [ ] `osn-smp-mtk-10k-2-cerita-kombinatorika-mudah.md`
- [ ] `osn-smp-mtk-10k-2-cerita-kombinatorika-sedang.md`
- [ ] `osn-smp-mtk-10k-2-cerita-kombinatorika-sulit.md`
- [ ] `osn-smp-mtk-10k-2-cerita-kombinatorika-mudah-sedang.md`
- [ ] `osn-smp-mtk-10k-2-cerita-kombinatorika-sedang-sulit.md`

---

## B · Fisika Per Sub-Sub-Bab

### FIS-01 · Pengukuran, Besaran & Satuan (~20 sub-sub-bab)

#### FIS-01a · Besaran Pokok & Turunan

**FIS-01a-1 · 7 Besaran Pokok & Satuannya** (fokus Kab)
- [ ] `osn-smp-fis-01a-1-7-besaran-pokok-campur.md`
- [ ] `osn-smp-fis-01a-1-7-besaran-pokok-mudah.md`
- [ ] `osn-smp-fis-01a-1-7-besaran-pokok-sedang.md`
- [ ] `osn-smp-fis-01a-1-7-besaran-pokok-sulit.md`
- [ ] `osn-smp-fis-01a-1-7-besaran-pokok-mudah-sedang.md`
- [ ] `osn-smp-fis-01a-1-7-besaran-pokok-sedang-sulit.md`

**FIS-01a-2 · Besaran Turunan & Penurunannya** (fokus Kab)
- [ ] `osn-smp-fis-01a-2-besaran-turunan-campur.md`
- [ ] `osn-smp-fis-01a-2-besaran-turunan-mudah.md`
- [ ] `osn-smp-fis-01a-2-besaran-turunan-sedang.md`
- [ ] `osn-smp-fis-01a-2-besaran-turunan-sulit.md`
- [ ] `osn-smp-fis-01a-2-besaran-turunan-mudah-sedang.md`
- [ ] `osn-smp-fis-01a-2-besaran-turunan-sedang-sulit.md`

#### FIS-01b · Satuan SI & Konversi

**FIS-01b-1 · Konversi Satuan Panjang/Massa/Waktu (Awalan SI)** (fokus Kab)
- [ ] `osn-smp-fis-01b-1-konversi-awalan-si-campur.md`
- [ ] `osn-smp-fis-01b-1-konversi-awalan-si-mudah.md`
- [ ] `osn-smp-fis-01b-1-konversi-awalan-si-sedang.md`
- [ ] `osn-smp-fis-01b-1-konversi-awalan-si-sulit.md`
- [ ] `osn-smp-fis-01b-1-konversi-awalan-si-mudah-sedang.md`
- [ ] `osn-smp-fis-01b-1-konversi-awalan-si-sedang-sulit.md`

**FIS-01b-2 · Konversi Satuan Turunan (m/s ke km/jam, dll)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-01b-2-konversi-turunan-campur.md`
- [ ] `osn-smp-fis-01b-2-konversi-turunan-mudah.md`
- [ ] `osn-smp-fis-01b-2-konversi-turunan-sedang.md`
- [ ] `osn-smp-fis-01b-2-konversi-turunan-sulit.md`
- [ ] `osn-smp-fis-01b-2-konversi-turunan-mudah-sedang.md`
- [ ] `osn-smp-fis-01b-2-konversi-turunan-sedang-sulit.md`

#### FIS-01c · Alat Ukur Panjang

**FIS-01c-1 · Mistar & Pita Ukur** (fokus Kab)
- [ ] `osn-smp-fis-01c-1-mistar-pita-campur.md`
- [ ] `osn-smp-fis-01c-1-mistar-pita-mudah.md`
- [ ] `osn-smp-fis-01c-1-mistar-pita-sedang.md`
- [ ] `osn-smp-fis-01c-1-mistar-pita-sulit.md`
- [ ] `osn-smp-fis-01c-1-mistar-pita-mudah-sedang.md`
- [ ] `osn-smp-fis-01c-1-mistar-pita-sedang-sulit.md`

**FIS-01c-2 · Jangka Sorong (Membaca Skala Nonius)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-01c-2-jangka-sorong-campur.md`
- [ ] `osn-smp-fis-01c-2-jangka-sorong-mudah.md`
- [ ] `osn-smp-fis-01c-2-jangka-sorong-sedang.md`
- [ ] `osn-smp-fis-01c-2-jangka-sorong-sulit.md`
- [ ] `osn-smp-fis-01c-2-jangka-sorong-mudah-sedang.md`
- [ ] `osn-smp-fis-01c-2-jangka-sorong-sedang-sulit.md`

**FIS-01c-3 · Mikrometer Sekrup (Membaca Skala)** (fokus Prov)
- [ ] `osn-smp-fis-01c-3-mikrometer-campur.md`
- [ ] `osn-smp-fis-01c-3-mikrometer-mudah.md`
- [ ] `osn-smp-fis-01c-3-mikrometer-sedang.md`
- [ ] `osn-smp-fis-01c-3-mikrometer-sulit.md`
- [ ] `osn-smp-fis-01c-3-mikrometer-mudah-sedang.md`
- [ ] `osn-smp-fis-01c-3-mikrometer-sedang-sulit.md`

#### FIS-01d · Alat Ukur Massa & Waktu

**FIS-01d-1 · Neraca Lengan, Neraca Pegas, Neraca O'Haus** (fokus Kab)
- [ ] `osn-smp-fis-01d-1-neraca-campur.md`
- [ ] `osn-smp-fis-01d-1-neraca-mudah.md`
- [ ] `osn-smp-fis-01d-1-neraca-sedang.md`
- [ ] `osn-smp-fis-01d-1-neraca-sulit.md`
- [ ] `osn-smp-fis-01d-1-neraca-mudah-sedang.md`
- [ ] `osn-smp-fis-01d-1-neraca-sedang-sulit.md`

**FIS-01d-2 · Stopwatch, Jam, Pencacah Waktu** (fokus Kab)
- [ ] `osn-smp-fis-01d-2-pengukur-waktu-campur.md`
- [ ] `osn-smp-fis-01d-2-pengukur-waktu-mudah.md`
- [ ] `osn-smp-fis-01d-2-pengukur-waktu-sedang.md`
- [ ] `osn-smp-fis-01d-2-pengukur-waktu-sulit.md`
- [ ] `osn-smp-fis-01d-2-pengukur-waktu-mudah-sedang.md`
- [ ] `osn-smp-fis-01d-2-pengukur-waktu-sedang-sulit.md`

#### FIS-01e · Ketelitian & Notasi Ilmiah

**FIS-01e-1 · Ketelitian Alat & Pengaruhnya pada Hasil** (fokus Kab)
- [ ] `osn-smp-fis-01e-1-ketelitian-alat-campur.md`
- [ ] `osn-smp-fis-01e-1-ketelitian-alat-mudah.md`
- [ ] `osn-smp-fis-01e-1-ketelitian-alat-sedang.md`
- [ ] `osn-smp-fis-01e-1-ketelitian-alat-sulit.md`
- [ ] `osn-smp-fis-01e-1-ketelitian-alat-mudah-sedang.md`
- [ ] `osn-smp-fis-01e-1-ketelitian-alat-sedang-sulit.md`

**FIS-01e-2 · Notasi Ilmiah dalam Pengukuran Fisika** (fokus Kab)
- [ ] `osn-smp-fis-01e-2-notasi-fisika-campur.md`
- [ ] `osn-smp-fis-01e-2-notasi-fisika-mudah.md`
- [ ] `osn-smp-fis-01e-2-notasi-fisika-sedang.md`
- [ ] `osn-smp-fis-01e-2-notasi-fisika-sulit.md`
- [ ] `osn-smp-fis-01e-2-notasi-fisika-mudah-sedang.md`
- [ ] `osn-smp-fis-01e-2-notasi-fisika-sedang-sulit.md`

#### FIS-01f · Dimensi & Analisis Dimensi

**FIS-01f-1 · Dimensi Besaran Pokok & Turunan** (fokus Prov)
- [ ] `osn-smp-fis-01f-1-dimensi-besaran-campur.md`
- [ ] `osn-smp-fis-01f-1-dimensi-besaran-mudah.md`
- [ ] `osn-smp-fis-01f-1-dimensi-besaran-sedang.md`
- [ ] `osn-smp-fis-01f-1-dimensi-besaran-sulit.md`
- [ ] `osn-smp-fis-01f-1-dimensi-besaran-mudah-sedang.md`
- [ ] `osn-smp-fis-01f-1-dimensi-besaran-sedang-sulit.md`

**FIS-01f-2 · Analisis Dimensi untuk Mengecek Persamaan** (fokus Prov–Nas)
- [ ] `osn-smp-fis-01f-2-analisis-dimensi-campur.md`
- [ ] `osn-smp-fis-01f-2-analisis-dimensi-mudah.md`
- [ ] `osn-smp-fis-01f-2-analisis-dimensi-sedang.md`
- [ ] `osn-smp-fis-01f-2-analisis-dimensi-sulit.md`
- [ ] `osn-smp-fis-01f-2-analisis-dimensi-mudah-sedang.md`
- [ ] `osn-smp-fis-01f-2-analisis-dimensi-sedang-sulit.md`

#### FIS-01g · Pengukuran Tunggal & Berulang

**FIS-01g-1 · Pengukuran Tunggal & Sumber Kesalahan** (fokus Kab–Prov)
- [ ] `osn-smp-fis-01g-1-pengukuran-tunggal-campur.md`
- [ ] `osn-smp-fis-01g-1-pengukuran-tunggal-mudah.md`
- [ ] `osn-smp-fis-01g-1-pengukuran-tunggal-sedang.md`
- [ ] `osn-smp-fis-01g-1-pengukuran-tunggal-sulit.md`
- [ ] `osn-smp-fis-01g-1-pengukuran-tunggal-mudah-sedang.md`
- [ ] `osn-smp-fis-01g-1-pengukuran-tunggal-sedang-sulit.md`

**FIS-01g-2 · Pengukuran Berulang & Rata-rata** (fokus Prov)
- [ ] `osn-smp-fis-01g-2-pengukuran-berulang-campur.md`
- [ ] `osn-smp-fis-01g-2-pengukuran-berulang-mudah.md`
- [ ] `osn-smp-fis-01g-2-pengukuran-berulang-sedang.md`
- [ ] `osn-smp-fis-01g-2-pengukuran-berulang-sulit.md`
- [ ] `osn-smp-fis-01g-2-pengukuran-berulang-mudah-sedang.md`
- [ ] `osn-smp-fis-01g-2-pengukuran-berulang-sedang-sulit.md`

#### FIS-01h · Angka Penting

**FIS-01h-1 · Aturan Identifikasi Angka Penting** (fokus Prov)
- [ ] `osn-smp-fis-01h-1-identifikasi-angka-penting-campur.md`
- [ ] `osn-smp-fis-01h-1-identifikasi-angka-penting-mudah.md`
- [ ] `osn-smp-fis-01h-1-identifikasi-angka-penting-sedang.md`
- [ ] `osn-smp-fis-01h-1-identifikasi-angka-penting-sulit.md`
- [ ] `osn-smp-fis-01h-1-identifikasi-angka-penting-mudah-sedang.md`
- [ ] `osn-smp-fis-01h-1-identifikasi-angka-penting-sedang-sulit.md`

**FIS-01h-2 · Operasi (+, -, ×, ÷) dengan Angka Penting** (fokus Prov)
- [ ] `osn-smp-fis-01h-2-operasi-angka-penting-campur.md`
- [ ] `osn-smp-fis-01h-2-operasi-angka-penting-mudah.md`
- [ ] `osn-smp-fis-01h-2-operasi-angka-penting-sedang.md`
- [ ] `osn-smp-fis-01h-2-operasi-angka-penting-sulit.md`
- [ ] `osn-smp-fis-01h-2-operasi-angka-penting-mudah-sedang.md`
- [ ] `osn-smp-fis-01h-2-operasi-angka-penting-sedang-sulit.md`

#### FIS-01i · Soal Cerita Pengukuran

**FIS-01i-1 · Cerita Pengukuran Lab & Lapangan** (fokus Kab–Prov)
- [ ] `osn-smp-fis-01i-1-cerita-pengukuran-lab-campur.md`
- [ ] `osn-smp-fis-01i-1-cerita-pengukuran-lab-mudah.md`
- [ ] `osn-smp-fis-01i-1-cerita-pengukuran-lab-sedang.md`
- [ ] `osn-smp-fis-01i-1-cerita-pengukuran-lab-sulit.md`
- [ ] `osn-smp-fis-01i-1-cerita-pengukuran-lab-mudah-sedang.md`
- [ ] `osn-smp-fis-01i-1-cerita-pengukuran-lab-sedang-sulit.md`

### FIS-02 · Gerak / Kinematika (~20 sub-sub-bab)

#### FIS-02a · Jarak, Perpindahan, Kelajuan, Kecepatan

**FIS-02a-1 · Jarak vs Perpindahan (Skalar vs Vektor)** (fokus Kab)
- [ ] `osn-smp-fis-02a-1-jarak-vs-perpindahan-campur.md`
- [ ] `osn-smp-fis-02a-1-jarak-vs-perpindahan-mudah.md`
- [ ] `osn-smp-fis-02a-1-jarak-vs-perpindahan-sedang.md`
- [ ] `osn-smp-fis-02a-1-jarak-vs-perpindahan-sulit.md`
- [ ] `osn-smp-fis-02a-1-jarak-vs-perpindahan-mudah-sedang.md`
- [ ] `osn-smp-fis-02a-1-jarak-vs-perpindahan-sedang-sulit.md`

**FIS-02a-2 · Kelajuan vs Kecepatan & Kelajuan Rata-rata** (fokus Kab)
- [ ] `osn-smp-fis-02a-2-kelajuan-kecepatan-campur.md`
- [ ] `osn-smp-fis-02a-2-kelajuan-kecepatan-mudah.md`
- [ ] `osn-smp-fis-02a-2-kelajuan-kecepatan-sedang.md`
- [ ] `osn-smp-fis-02a-2-kelajuan-kecepatan-sulit.md`
- [ ] `osn-smp-fis-02a-2-kelajuan-kecepatan-mudah-sedang.md`
- [ ] `osn-smp-fis-02a-2-kelajuan-kecepatan-sedang-sulit.md`

#### FIS-02b · GLB

**FIS-02b-1 · GLB - Hubungan s, v, t** (fokus Kab)
- [ ] `osn-smp-fis-02b-1-glb-hubungan-s-v-t-campur.md`
- [ ] `osn-smp-fis-02b-1-glb-hubungan-s-v-t-mudah.md`
- [ ] `osn-smp-fis-02b-1-glb-hubungan-s-v-t-sedang.md`
- [ ] `osn-smp-fis-02b-1-glb-hubungan-s-v-t-sulit.md`
- [ ] `osn-smp-fis-02b-1-glb-hubungan-s-v-t-mudah-sedang.md`
- [ ] `osn-smp-fis-02b-1-glb-hubungan-s-v-t-sedang-sulit.md`

**FIS-02b-2 · GLB Dua Benda Bergerak (Bertemu, Menyusul)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-02b-2-glb-dua-benda-campur.md`
- [ ] `osn-smp-fis-02b-2-glb-dua-benda-mudah.md`
- [ ] `osn-smp-fis-02b-2-glb-dua-benda-sedang.md`
- [ ] `osn-smp-fis-02b-2-glb-dua-benda-sulit.md`
- [ ] `osn-smp-fis-02b-2-glb-dua-benda-mudah-sedang.md`
- [ ] `osn-smp-fis-02b-2-glb-dua-benda-sedang-sulit.md`

#### FIS-02c · GLBB

**FIS-02c-1 · Percepatan (Konsep & Perhitungan)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-02c-1-percepatan-campur.md`
- [ ] `osn-smp-fis-02c-1-percepatan-mudah.md`
- [ ] `osn-smp-fis-02c-1-percepatan-sedang.md`
- [ ] `osn-smp-fis-02c-1-percepatan-sulit.md`
- [ ] `osn-smp-fis-02c-1-percepatan-mudah-sedang.md`
- [ ] `osn-smp-fis-02c-1-percepatan-sedang-sulit.md`

**FIS-02c-2 · Rumus GLBB (v=v₀+at, s=v₀t+½at²)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-02c-2-rumus-glbb-campur.md`
- [ ] `osn-smp-fis-02c-2-rumus-glbb-mudah.md`
- [ ] `osn-smp-fis-02c-2-rumus-glbb-sedang.md`
- [ ] `osn-smp-fis-02c-2-rumus-glbb-sulit.md`
- [ ] `osn-smp-fis-02c-2-rumus-glbb-mudah-sedang.md`
- [ ] `osn-smp-fis-02c-2-rumus-glbb-sedang-sulit.md`

**FIS-02c-3 · GLBB Diperlambat (Pengereman, Berhenti)** (fokus Prov)
- [ ] `osn-smp-fis-02c-3-glbb-diperlambat-campur.md`
- [ ] `osn-smp-fis-02c-3-glbb-diperlambat-mudah.md`
- [ ] `osn-smp-fis-02c-3-glbb-diperlambat-sedang.md`
- [ ] `osn-smp-fis-02c-3-glbb-diperlambat-sulit.md`
- [ ] `osn-smp-fis-02c-3-glbb-diperlambat-mudah-sedang.md`
- [ ] `osn-smp-fis-02c-3-glbb-diperlambat-sedang-sulit.md`

#### FIS-02d · Grafik GLB

**FIS-02d-1 · Grafik s-t GLB (Garis Lurus Naik)** (fokus Kab)
- [ ] `osn-smp-fis-02d-1-grafik-s-t-glb-campur.md`
- [ ] `osn-smp-fis-02d-1-grafik-s-t-glb-mudah.md`
- [ ] `osn-smp-fis-02d-1-grafik-s-t-glb-sedang.md`
- [ ] `osn-smp-fis-02d-1-grafik-s-t-glb-sulit.md`
- [ ] `osn-smp-fis-02d-1-grafik-s-t-glb-mudah-sedang.md`
- [ ] `osn-smp-fis-02d-1-grafik-s-t-glb-sedang-sulit.md`

**FIS-02d-2 · Grafik v-t GLB (Garis Horizontal)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-02d-2-grafik-v-t-glb-campur.md`
- [ ] `osn-smp-fis-02d-2-grafik-v-t-glb-mudah.md`
- [ ] `osn-smp-fis-02d-2-grafik-v-t-glb-sedang.md`
- [ ] `osn-smp-fis-02d-2-grafik-v-t-glb-sulit.md`
- [ ] `osn-smp-fis-02d-2-grafik-v-t-glb-mudah-sedang.md`
- [ ] `osn-smp-fis-02d-2-grafik-v-t-glb-sedang-sulit.md`

#### FIS-02e · Grafik GLBB

**FIS-02e-1 · Grafik v-t GLBB (Garis Miring)** (fokus Prov)
- [ ] `osn-smp-fis-02e-1-grafik-v-t-glbb-campur.md`
- [ ] `osn-smp-fis-02e-1-grafik-v-t-glbb-mudah.md`
- [ ] `osn-smp-fis-02e-1-grafik-v-t-glbb-sedang.md`
- [ ] `osn-smp-fis-02e-1-grafik-v-t-glbb-sulit.md`
- [ ] `osn-smp-fis-02e-1-grafik-v-t-glbb-mudah-sedang.md`
- [ ] `osn-smp-fis-02e-1-grafik-v-t-glbb-sedang-sulit.md`

**FIS-02e-2 · Luas Daerah pada Grafik v-t (Jarak Tempuh)** (fokus Prov)
- [ ] `osn-smp-fis-02e-2-luas-grafik-v-t-campur.md`
- [ ] `osn-smp-fis-02e-2-luas-grafik-v-t-mudah.md`
- [ ] `osn-smp-fis-02e-2-luas-grafik-v-t-sedang.md`
- [ ] `osn-smp-fis-02e-2-luas-grafik-v-t-sulit.md`
- [ ] `osn-smp-fis-02e-2-luas-grafik-v-t-mudah-sedang.md`
- [ ] `osn-smp-fis-02e-2-luas-grafik-v-t-sedang-sulit.md`

#### FIS-02f · Gerak Jatuh Bebas

**FIS-02f-1 · Gerak Jatuh Bebas (h = ½gt²)** (fokus Prov)
- [ ] `osn-smp-fis-02f-1-jatuh-bebas-rumus-campur.md`
- [ ] `osn-smp-fis-02f-1-jatuh-bebas-rumus-mudah.md`
- [ ] `osn-smp-fis-02f-1-jatuh-bebas-rumus-sedang.md`
- [ ] `osn-smp-fis-02f-1-jatuh-bebas-rumus-sulit.md`
- [ ] `osn-smp-fis-02f-1-jatuh-bebas-rumus-mudah-sedang.md`
- [ ] `osn-smp-fis-02f-1-jatuh-bebas-rumus-sedang-sulit.md`

**FIS-02f-2 · Soal Cerita Jatuh Bebas (Tinggi Gedung, Sumur)** (fokus Prov)
- [ ] `osn-smp-fis-02f-2-cerita-jatuh-bebas-campur.md`
- [ ] `osn-smp-fis-02f-2-cerita-jatuh-bebas-mudah.md`
- [ ] `osn-smp-fis-02f-2-cerita-jatuh-bebas-sedang.md`
- [ ] `osn-smp-fis-02f-2-cerita-jatuh-bebas-sulit.md`
- [ ] `osn-smp-fis-02f-2-cerita-jatuh-bebas-mudah-sedang.md`
- [ ] `osn-smp-fis-02f-2-cerita-jatuh-bebas-sedang-sulit.md`

#### FIS-02g · Gerak Relatif

**FIS-02g-1 · Gerak Relatif - Penumpang & Kendaraan** (fokus Prov–Nas)
- [ ] `osn-smp-fis-02g-1-gerak-relatif-kendaraan-campur.md`
- [ ] `osn-smp-fis-02g-1-gerak-relatif-kendaraan-mudah.md`
- [ ] `osn-smp-fis-02g-1-gerak-relatif-kendaraan-sedang.md`
- [ ] `osn-smp-fis-02g-1-gerak-relatif-kendaraan-sulit.md`
- [ ] `osn-smp-fis-02g-1-gerak-relatif-kendaraan-mudah-sedang.md`
- [ ] `osn-smp-fis-02g-1-gerak-relatif-kendaraan-sedang-sulit.md`

#### FIS-02h · Soal Cerita Kinematika

**FIS-02h-1 · Cerita Kinematika Multi-Tahap** (fokus Prov)
- [ ] `osn-smp-fis-02h-1-cerita-multi-tahap-campur.md`
- [ ] `osn-smp-fis-02h-1-cerita-multi-tahap-mudah.md`
- [ ] `osn-smp-fis-02h-1-cerita-multi-tahap-sedang.md`
- [ ] `osn-smp-fis-02h-1-cerita-multi-tahap-sulit.md`
- [ ] `osn-smp-fis-02h-1-cerita-multi-tahap-mudah-sedang.md`
- [ ] `osn-smp-fis-02h-1-cerita-multi-tahap-sedang-sulit.md`

### FIS-03 · Gaya & Hukum Newton (~18 sub-sub-bab)

#### FIS-03a · Konsep Gaya & Resultan Gaya

**FIS-03a-1 · Identifikasi Gaya (Sentuh & Tak-Sentuh)** (fokus Kab)
- [ ] `osn-smp-fis-03a-1-identifikasi-gaya-campur.md`
- [ ] `osn-smp-fis-03a-1-identifikasi-gaya-mudah.md`
- [ ] `osn-smp-fis-03a-1-identifikasi-gaya-sedang.md`
- [ ] `osn-smp-fis-03a-1-identifikasi-gaya-sulit.md`
- [ ] `osn-smp-fis-03a-1-identifikasi-gaya-mudah-sedang.md`
- [ ] `osn-smp-fis-03a-1-identifikasi-gaya-sedang-sulit.md`

**FIS-03a-2 · Resultan Gaya Searah & Berlawanan Arah** (fokus Kab)
- [ ] `osn-smp-fis-03a-2-resultan-gaya-campur.md`
- [ ] `osn-smp-fis-03a-2-resultan-gaya-mudah.md`
- [ ] `osn-smp-fis-03a-2-resultan-gaya-sedang.md`
- [ ] `osn-smp-fis-03a-2-resultan-gaya-sulit.md`
- [ ] `osn-smp-fis-03a-2-resultan-gaya-mudah-sedang.md`
- [ ] `osn-smp-fis-03a-2-resultan-gaya-sedang-sulit.md`

#### FIS-03b · Hukum Newton I (Inersia)

**FIS-03b-1 · Konsep Inersia & Contoh** (fokus Kab)
- [ ] `osn-smp-fis-03b-1-konsep-inersia-campur.md`
- [ ] `osn-smp-fis-03b-1-konsep-inersia-mudah.md`
- [ ] `osn-smp-fis-03b-1-konsep-inersia-sedang.md`
- [ ] `osn-smp-fis-03b-1-konsep-inersia-sulit.md`
- [ ] `osn-smp-fis-03b-1-konsep-inersia-mudah-sedang.md`
- [ ] `osn-smp-fis-03b-1-konsep-inersia-sedang-sulit.md`

**FIS-03b-2 · Aplikasi Hukum I Newton (Sabuk Pengaman, dll)** (fokus Kab)
- [ ] `osn-smp-fis-03b-2-aplikasi-newton-1-campur.md`
- [ ] `osn-smp-fis-03b-2-aplikasi-newton-1-mudah.md`
- [ ] `osn-smp-fis-03b-2-aplikasi-newton-1-sedang.md`
- [ ] `osn-smp-fis-03b-2-aplikasi-newton-1-sulit.md`
- [ ] `osn-smp-fis-03b-2-aplikasi-newton-1-mudah-sedang.md`
- [ ] `osn-smp-fis-03b-2-aplikasi-newton-1-sedang-sulit.md`

#### FIS-03c · Hukum Newton II (F=ma)

**FIS-03c-1 · Perhitungan F = m × a** (fokus Kab–Prov)
- [ ] `osn-smp-fis-03c-1-rumus-f-ma-campur.md`
- [ ] `osn-smp-fis-03c-1-rumus-f-ma-mudah.md`
- [ ] `osn-smp-fis-03c-1-rumus-f-ma-sedang.md`
- [ ] `osn-smp-fis-03c-1-rumus-f-ma-sulit.md`
- [ ] `osn-smp-fis-03c-1-rumus-f-ma-mudah-sedang.md`
- [ ] `osn-smp-fis-03c-1-rumus-f-ma-sedang-sulit.md`

**FIS-03c-2 · Hubungan F, m, a (Variasi)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-03c-2-hubungan-f-m-a-campur.md`
- [ ] `osn-smp-fis-03c-2-hubungan-f-m-a-mudah.md`
- [ ] `osn-smp-fis-03c-2-hubungan-f-m-a-sedang.md`
- [ ] `osn-smp-fis-03c-2-hubungan-f-m-a-sulit.md`
- [ ] `osn-smp-fis-03c-2-hubungan-f-m-a-mudah-sedang.md`
- [ ] `osn-smp-fis-03c-2-hubungan-f-m-a-sedang-sulit.md`

#### FIS-03d · Hukum Newton III (Aksi-Reaksi)

**FIS-03d-1 · Identifikasi Pasangan Aksi-Reaksi** (fokus Kab)
- [ ] `osn-smp-fis-03d-1-pasangan-aksi-reaksi-campur.md`
- [ ] `osn-smp-fis-03d-1-pasangan-aksi-reaksi-mudah.md`
- [ ] `osn-smp-fis-03d-1-pasangan-aksi-reaksi-sedang.md`
- [ ] `osn-smp-fis-03d-1-pasangan-aksi-reaksi-sulit.md`
- [ ] `osn-smp-fis-03d-1-pasangan-aksi-reaksi-mudah-sedang.md`
- [ ] `osn-smp-fis-03d-1-pasangan-aksi-reaksi-sedang-sulit.md`

**FIS-03d-2 · Aplikasi Hk III (Roket, Berenang, Berjalan)** (fokus Kab)
- [ ] `osn-smp-fis-03d-2-aplikasi-newton-3-campur.md`
- [ ] `osn-smp-fis-03d-2-aplikasi-newton-3-mudah.md`
- [ ] `osn-smp-fis-03d-2-aplikasi-newton-3-sedang.md`
- [ ] `osn-smp-fis-03d-2-aplikasi-newton-3-sulit.md`
- [ ] `osn-smp-fis-03d-2-aplikasi-newton-3-mudah-sedang.md`
- [ ] `osn-smp-fis-03d-2-aplikasi-newton-3-sedang-sulit.md`

#### FIS-03e · Gaya Berat & Gaya Normal

**FIS-03e-1 · Gaya Berat (W = m × g)** (fokus Kab)
- [ ] `osn-smp-fis-03e-1-gaya-berat-campur.md`
- [ ] `osn-smp-fis-03e-1-gaya-berat-mudah.md`
- [ ] `osn-smp-fis-03e-1-gaya-berat-sedang.md`
- [ ] `osn-smp-fis-03e-1-gaya-berat-sulit.md`
- [ ] `osn-smp-fis-03e-1-gaya-berat-mudah-sedang.md`
- [ ] `osn-smp-fis-03e-1-gaya-berat-sedang-sulit.md`

**FIS-03e-2 · Gaya Normal pada Permukaan Datar & Miring** (fokus Kab–Prov)
- [ ] `osn-smp-fis-03e-2-gaya-normal-campur.md`
- [ ] `osn-smp-fis-03e-2-gaya-normal-mudah.md`
- [ ] `osn-smp-fis-03e-2-gaya-normal-sedang.md`
- [ ] `osn-smp-fis-03e-2-gaya-normal-sulit.md`
- [ ] `osn-smp-fis-03e-2-gaya-normal-mudah-sedang.md`
- [ ] `osn-smp-fis-03e-2-gaya-normal-sedang-sulit.md`

#### FIS-03f · Gaya Gesekan

**FIS-03f-1 · Gaya Gesek Statis & Kinetis (Konsep)** (fokus Kab)
- [ ] `osn-smp-fis-03f-1-gesek-konsep-campur.md`
- [ ] `osn-smp-fis-03f-1-gesek-konsep-mudah.md`
- [ ] `osn-smp-fis-03f-1-gesek-konsep-sedang.md`
- [ ] `osn-smp-fis-03f-1-gesek-konsep-sulit.md`
- [ ] `osn-smp-fis-03f-1-gesek-konsep-mudah-sedang.md`
- [ ] `osn-smp-fis-03f-1-gesek-konsep-sedang-sulit.md`

**FIS-03f-2 · Perhitungan Gaya Gesek (f = μN)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-03f-2-perhitungan-gesek-campur.md`
- [ ] `osn-smp-fis-03f-2-perhitungan-gesek-mudah.md`
- [ ] `osn-smp-fis-03f-2-perhitungan-gesek-sedang.md`
- [ ] `osn-smp-fis-03f-2-perhitungan-gesek-sulit.md`
- [ ] `osn-smp-fis-03f-2-perhitungan-gesek-mudah-sedang.md`
- [ ] `osn-smp-fis-03f-2-perhitungan-gesek-sedang-sulit.md`

#### FIS-03g · Aplikasi Hukum Newton

**FIS-03g-1 · Benda pada Bidang Datar (dengan/tanpa Gesek)** (fokus Prov–Nas)
- [ ] `osn-smp-fis-03g-1-bidang-datar-campur.md`
- [ ] `osn-smp-fis-03g-1-bidang-datar-mudah.md`
- [ ] `osn-smp-fis-03g-1-bidang-datar-sedang.md`
- [ ] `osn-smp-fis-03g-1-bidang-datar-sulit.md`
- [ ] `osn-smp-fis-03g-1-bidang-datar-mudah-sedang.md`
- [ ] `osn-smp-fis-03g-1-bidang-datar-sedang-sulit.md`

**FIS-03g-2 · Benda pada Bidang Miring** (fokus Prov–Nas)
- [ ] `osn-smp-fis-03g-2-bidang-miring-newton-campur.md`
- [ ] `osn-smp-fis-03g-2-bidang-miring-newton-mudah.md`
- [ ] `osn-smp-fis-03g-2-bidang-miring-newton-sedang.md`
- [ ] `osn-smp-fis-03g-2-bidang-miring-newton-sulit.md`
- [ ] `osn-smp-fis-03g-2-bidang-miring-newton-mudah-sedang.md`
- [ ] `osn-smp-fis-03g-2-bidang-miring-newton-sedang-sulit.md`

#### FIS-03h · Soal Cerita Hukum Newton

**FIS-03h-1 · Cerita Hukum Newton (Lift, Tarikan Tali)** (fokus Prov)
- [ ] `osn-smp-fis-03h-1-cerita-newton-lift-tali-campur.md`
- [ ] `osn-smp-fis-03h-1-cerita-newton-lift-tali-mudah.md`
- [ ] `osn-smp-fis-03h-1-cerita-newton-lift-tali-sedang.md`
- [ ] `osn-smp-fis-03h-1-cerita-newton-lift-tali-sulit.md`
- [ ] `osn-smp-fis-03h-1-cerita-newton-lift-tali-mudah-sedang.md`
- [ ] `osn-smp-fis-03h-1-cerita-newton-lift-tali-sedang-sulit.md`

### FIS-04 · Usaha, Energi & Pesawat Sederhana (~22 sub-sub-bab)

#### FIS-04a · Konsep Usaha

**FIS-04a-1 · Usaha W = F × s (Gaya Searah Perpindahan)** (fokus Kab)
- [ ] `osn-smp-fis-04a-1-usaha-searah-campur.md`
- [ ] `osn-smp-fis-04a-1-usaha-searah-mudah.md`
- [ ] `osn-smp-fis-04a-1-usaha-searah-sedang.md`
- [ ] `osn-smp-fis-04a-1-usaha-searah-sulit.md`
- [ ] `osn-smp-fis-04a-1-usaha-searah-mudah-sedang.md`
- [ ] `osn-smp-fis-04a-1-usaha-searah-sedang-sulit.md`

**FIS-04a-2 · Usaha Negatif & Usaha Nol** (fokus Kab–Prov)
- [ ] `osn-smp-fis-04a-2-usaha-negatif-nol-campur.md`
- [ ] `osn-smp-fis-04a-2-usaha-negatif-nol-mudah.md`
- [ ] `osn-smp-fis-04a-2-usaha-negatif-nol-sedang.md`
- [ ] `osn-smp-fis-04a-2-usaha-negatif-nol-sulit.md`
- [ ] `osn-smp-fis-04a-2-usaha-negatif-nol-mudah-sedang.md`
- [ ] `osn-smp-fis-04a-2-usaha-negatif-nol-sedang-sulit.md`

#### FIS-04b · Energi Kinetik

**FIS-04b-1 · Energi Kinetik (Ek = ½mv²)** (fokus Kab)
- [ ] `osn-smp-fis-04b-1-ek-rumus-campur.md`
- [ ] `osn-smp-fis-04b-1-ek-rumus-mudah.md`
- [ ] `osn-smp-fis-04b-1-ek-rumus-sedang.md`
- [ ] `osn-smp-fis-04b-1-ek-rumus-sulit.md`
- [ ] `osn-smp-fis-04b-1-ek-rumus-mudah-sedang.md`
- [ ] `osn-smp-fis-04b-1-ek-rumus-sedang-sulit.md`

**FIS-04b-2 · Perubahan Energi Kinetik & Teorema Usaha-Energi** (fokus Prov)
- [ ] `osn-smp-fis-04b-2-perubahan-ek-campur.md`
- [ ] `osn-smp-fis-04b-2-perubahan-ek-mudah.md`
- [ ] `osn-smp-fis-04b-2-perubahan-ek-sedang.md`
- [ ] `osn-smp-fis-04b-2-perubahan-ek-sulit.md`
- [ ] `osn-smp-fis-04b-2-perubahan-ek-mudah-sedang.md`
- [ ] `osn-smp-fis-04b-2-perubahan-ek-sedang-sulit.md`

#### FIS-04c · Energi Potensial

**FIS-04c-1 · Energi Potensial Gravitasi (Ep = mgh)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-04c-1-ep-gravitasi-campur.md`
- [ ] `osn-smp-fis-04c-1-ep-gravitasi-mudah.md`
- [ ] `osn-smp-fis-04c-1-ep-gravitasi-sedang.md`
- [ ] `osn-smp-fis-04c-1-ep-gravitasi-sulit.md`
- [ ] `osn-smp-fis-04c-1-ep-gravitasi-mudah-sedang.md`
- [ ] `osn-smp-fis-04c-1-ep-gravitasi-sedang-sulit.md`

**FIS-04c-2 · Energi Potensial Pegas (Ep = ½kx²)** (fokus Prov)
- [ ] `osn-smp-fis-04c-2-ep-pegas-campur.md`
- [ ] `osn-smp-fis-04c-2-ep-pegas-mudah.md`
- [ ] `osn-smp-fis-04c-2-ep-pegas-sedang.md`
- [ ] `osn-smp-fis-04c-2-ep-pegas-sulit.md`
- [ ] `osn-smp-fis-04c-2-ep-pegas-mudah-sedang.md`
- [ ] `osn-smp-fis-04c-2-ep-pegas-sedang-sulit.md`

#### FIS-04d · Hukum Kekekalan Energi Mekanik

**FIS-04d-1 · Kekekalan Em pada Gerak Jatuh & Naik** (fokus Prov)
- [ ] `osn-smp-fis-04d-1-kekekalan-em-jatuh-campur.md`
- [ ] `osn-smp-fis-04d-1-kekekalan-em-jatuh-mudah.md`
- [ ] `osn-smp-fis-04d-1-kekekalan-em-jatuh-sedang.md`
- [ ] `osn-smp-fis-04d-1-kekekalan-em-jatuh-sulit.md`
- [ ] `osn-smp-fis-04d-1-kekekalan-em-jatuh-mudah-sedang.md`
- [ ] `osn-smp-fis-04d-1-kekekalan-em-jatuh-sedang-sulit.md`

**FIS-04d-2 · Kekekalan Em pada Ayunan & Roller Coaster** (fokus Prov–Nas)
- [ ] `osn-smp-fis-04d-2-kekekalan-em-ayunan-campur.md`
- [ ] `osn-smp-fis-04d-2-kekekalan-em-ayunan-mudah.md`
- [ ] `osn-smp-fis-04d-2-kekekalan-em-ayunan-sedang.md`
- [ ] `osn-smp-fis-04d-2-kekekalan-em-ayunan-sulit.md`
- [ ] `osn-smp-fis-04d-2-kekekalan-em-ayunan-mudah-sedang.md`
- [ ] `osn-smp-fis-04d-2-kekekalan-em-ayunan-sedang-sulit.md`

#### FIS-04e · Daya

**FIS-04e-1 · Daya (P = W/t)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-04e-1-daya-rumus-campur.md`
- [ ] `osn-smp-fis-04e-1-daya-rumus-mudah.md`
- [ ] `osn-smp-fis-04e-1-daya-rumus-sedang.md`
- [ ] `osn-smp-fis-04e-1-daya-rumus-sulit.md`
- [ ] `osn-smp-fis-04e-1-daya-rumus-mudah-sedang.md`
- [ ] `osn-smp-fis-04e-1-daya-rumus-sedang-sulit.md`

**FIS-04e-2 · Soal Cerita Daya (Mesin, Lift, Motor)** (fokus Prov)
- [ ] `osn-smp-fis-04e-2-cerita-daya-mesin-campur.md`
- [ ] `osn-smp-fis-04e-2-cerita-daya-mesin-mudah.md`
- [ ] `osn-smp-fis-04e-2-cerita-daya-mesin-sedang.md`
- [ ] `osn-smp-fis-04e-2-cerita-daya-mesin-sulit.md`
- [ ] `osn-smp-fis-04e-2-cerita-daya-mesin-mudah-sedang.md`
- [ ] `osn-smp-fis-04e-2-cerita-daya-mesin-sedang-sulit.md`

#### FIS-04f · Tuas

**FIS-04f-1 · Tuas Jenis I (Titik Tumpu di Tengah)** (fokus Kab)
- [ ] `osn-smp-fis-04f-1-tuas-1-campur.md`
- [ ] `osn-smp-fis-04f-1-tuas-1-mudah.md`
- [ ] `osn-smp-fis-04f-1-tuas-1-sedang.md`
- [ ] `osn-smp-fis-04f-1-tuas-1-sulit.md`
- [ ] `osn-smp-fis-04f-1-tuas-1-mudah-sedang.md`
- [ ] `osn-smp-fis-04f-1-tuas-1-sedang-sulit.md`

**FIS-04f-2 · Tuas Jenis II & III (Beban/Kuasa di Tengah)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-04f-2-tuas-2-3-campur.md`
- [ ] `osn-smp-fis-04f-2-tuas-2-3-mudah.md`
- [ ] `osn-smp-fis-04f-2-tuas-2-3-sedang.md`
- [ ] `osn-smp-fis-04f-2-tuas-2-3-sulit.md`
- [ ] `osn-smp-fis-04f-2-tuas-2-3-mudah-sedang.md`
- [ ] `osn-smp-fis-04f-2-tuas-2-3-sedang-sulit.md`

#### FIS-04g · Katrol

**FIS-04g-1 · Katrol Tetap (KM = 1)** (fokus Kab)
- [ ] `osn-smp-fis-04g-1-katrol-tetap-campur.md`
- [ ] `osn-smp-fis-04g-1-katrol-tetap-mudah.md`
- [ ] `osn-smp-fis-04g-1-katrol-tetap-sedang.md`
- [ ] `osn-smp-fis-04g-1-katrol-tetap-sulit.md`
- [ ] `osn-smp-fis-04g-1-katrol-tetap-mudah-sedang.md`
- [ ] `osn-smp-fis-04g-1-katrol-tetap-sedang-sulit.md`

**FIS-04g-2 · Katrol Bergerak & Majemuk** (fokus Kab–Prov)
- [ ] `osn-smp-fis-04g-2-katrol-bergerak-majemuk-campur.md`
- [ ] `osn-smp-fis-04g-2-katrol-bergerak-majemuk-mudah.md`
- [ ] `osn-smp-fis-04g-2-katrol-bergerak-majemuk-sedang.md`
- [ ] `osn-smp-fis-04g-2-katrol-bergerak-majemuk-sulit.md`
- [ ] `osn-smp-fis-04g-2-katrol-bergerak-majemuk-mudah-sedang.md`
- [ ] `osn-smp-fis-04g-2-katrol-bergerak-majemuk-sedang-sulit.md`

#### FIS-04h · Bidang Miring

**FIS-04h-1 · Bidang Miring - KM & Gaya Kuasa** (fokus Kab–Prov)
- [ ] `osn-smp-fis-04h-1-bidang-miring-km-campur.md`
- [ ] `osn-smp-fis-04h-1-bidang-miring-km-mudah.md`
- [ ] `osn-smp-fis-04h-1-bidang-miring-km-sedang.md`
- [ ] `osn-smp-fis-04h-1-bidang-miring-km-sulit.md`
- [ ] `osn-smp-fis-04h-1-bidang-miring-km-mudah-sedang.md`
- [ ] `osn-smp-fis-04h-1-bidang-miring-km-sedang-sulit.md`

#### FIS-04i · Roda Berporos & Roda Bergigi

**FIS-04i-1 · Roda Berporos (Setir, Kunci)** (fokus Prov)
- [ ] `osn-smp-fis-04i-1-roda-berporos-campur.md`
- [ ] `osn-smp-fis-04i-1-roda-berporos-mudah.md`
- [ ] `osn-smp-fis-04i-1-roda-berporos-sedang.md`
- [ ] `osn-smp-fis-04i-1-roda-berporos-sulit.md`
- [ ] `osn-smp-fis-04i-1-roda-berporos-mudah-sedang.md`
- [ ] `osn-smp-fis-04i-1-roda-berporos-sedang-sulit.md`

**FIS-04i-2 · Roda Bergigi (Gear, Sepeda)** (fokus Prov)
- [ ] `osn-smp-fis-04i-2-roda-bergigi-campur.md`
- [ ] `osn-smp-fis-04i-2-roda-bergigi-mudah.md`
- [ ] `osn-smp-fis-04i-2-roda-bergigi-sedang.md`
- [ ] `osn-smp-fis-04i-2-roda-bergigi-sulit.md`
- [ ] `osn-smp-fis-04i-2-roda-bergigi-mudah-sedang.md`
- [ ] `osn-smp-fis-04i-2-roda-bergigi-sedang-sulit.md`

#### FIS-04j · Soal Cerita Usaha-Energi-Pesawat

**FIS-04j-1 · Cerita Pesawat Sederhana Aplikasi (Konstruksi, Pertanian)** (fokus Prov)
- [ ] `osn-smp-fis-04j-1-cerita-pesawat-aplikasi-campur.md`
- [ ] `osn-smp-fis-04j-1-cerita-pesawat-aplikasi-mudah.md`
- [ ] `osn-smp-fis-04j-1-cerita-pesawat-aplikasi-sedang.md`
- [ ] `osn-smp-fis-04j-1-cerita-pesawat-aplikasi-sulit.md`
- [ ] `osn-smp-fis-04j-1-cerita-pesawat-aplikasi-mudah-sedang.md`
- [ ] `osn-smp-fis-04j-1-cerita-pesawat-aplikasi-sedang-sulit.md`

### FIS-05 · Tekanan & Fluida (~16 sub-sub-bab)

#### FIS-05a · Tekanan pada Zat Padat
**FIS-05a-1 · Konsep Tekanan (P = F/A)** (fokus Kab)
- [ ] `osn-smp-fis-05a-1-tekanan-rumus-{campur,mudah,sedang,sulit,mudah-sedang,sedang-sulit}.md` *(6 file)*
- [ ] `osn-smp-fis-05a-1-tekanan-rumus-campur.md`
- [ ] `osn-smp-fis-05a-1-tekanan-rumus-mudah.md`
- [ ] `osn-smp-fis-05a-1-tekanan-rumus-sedang.md`
- [ ] `osn-smp-fis-05a-1-tekanan-rumus-sulit.md`
- [ ] `osn-smp-fis-05a-1-tekanan-rumus-mudah-sedang.md`
- [ ] `osn-smp-fis-05a-1-tekanan-rumus-sedang-sulit.md`

**FIS-05a-2 · Aplikasi Tekanan Zat Padat (Paku, Pisau, Sepatu Salju)** (fokus Kab)
- [ ] `osn-smp-fis-05a-2-aplikasi-tekanan-padat-campur.md`
- [ ] `osn-smp-fis-05a-2-aplikasi-tekanan-padat-mudah.md`
- [ ] `osn-smp-fis-05a-2-aplikasi-tekanan-padat-sedang.md`
- [ ] `osn-smp-fis-05a-2-aplikasi-tekanan-padat-sulit.md`
- [ ] `osn-smp-fis-05a-2-aplikasi-tekanan-padat-mudah-sedang.md`
- [ ] `osn-smp-fis-05a-2-aplikasi-tekanan-padat-sedang-sulit.md`

#### FIS-05b · Tekanan Hidrostatis
**FIS-05b-1 · Tekanan Hidrostatis (P = ρgh)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-05b-1-hidrostatis-rumus-campur.md`
- [ ] `osn-smp-fis-05b-1-hidrostatis-rumus-mudah.md`
- [ ] `osn-smp-fis-05b-1-hidrostatis-rumus-sedang.md`
- [ ] `osn-smp-fis-05b-1-hidrostatis-rumus-sulit.md`
- [ ] `osn-smp-fis-05b-1-hidrostatis-rumus-mudah-sedang.md`
- [ ] `osn-smp-fis-05b-1-hidrostatis-rumus-sedang-sulit.md`

**FIS-05b-2 · Bejana Berhubungan Beda Cairan** (fokus Prov)
- [ ] `osn-smp-fis-05b-2-bejana-beda-cairan-campur.md`
- [ ] `osn-smp-fis-05b-2-bejana-beda-cairan-mudah.md`
- [ ] `osn-smp-fis-05b-2-bejana-beda-cairan-sedang.md`
- [ ] `osn-smp-fis-05b-2-bejana-beda-cairan-sulit.md`
- [ ] `osn-smp-fis-05b-2-bejana-beda-cairan-mudah-sedang.md`
- [ ] `osn-smp-fis-05b-2-bejana-beda-cairan-sedang-sulit.md`

#### FIS-05c · Hukum Pascal
**FIS-05c-1 · Pompa Hidrolik & Dongkrak (F₁/A₁ = F₂/A₂)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-05c-1-pompa-hidrolik-campur.md`
- [ ] `osn-smp-fis-05c-1-pompa-hidrolik-mudah.md`
- [ ] `osn-smp-fis-05c-1-pompa-hidrolik-sedang.md`
- [ ] `osn-smp-fis-05c-1-pompa-hidrolik-sulit.md`
- [ ] `osn-smp-fis-05c-1-pompa-hidrolik-mudah-sedang.md`
- [ ] `osn-smp-fis-05c-1-pompa-hidrolik-sedang-sulit.md`

**FIS-05c-2 · Rem Hidrolik & Aplikasi Pascal Lain** (fokus Prov)
- [ ] `osn-smp-fis-05c-2-rem-hidrolik-campur.md`
- [ ] `osn-smp-fis-05c-2-rem-hidrolik-mudah.md`
- [ ] `osn-smp-fis-05c-2-rem-hidrolik-sedang.md`
- [ ] `osn-smp-fis-05c-2-rem-hidrolik-sulit.md`
- [ ] `osn-smp-fis-05c-2-rem-hidrolik-mudah-sedang.md`
- [ ] `osn-smp-fis-05c-2-rem-hidrolik-sedang-sulit.md`

#### FIS-05d · Hukum Archimedes
**FIS-05d-1 · Gaya Apung & Berat di Air (FA = ρgV)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-05d-1-gaya-apung-campur.md`
- [ ] `osn-smp-fis-05d-1-gaya-apung-mudah.md`
- [ ] `osn-smp-fis-05d-1-gaya-apung-sedang.md`
- [ ] `osn-smp-fis-05d-1-gaya-apung-sulit.md`
- [ ] `osn-smp-fis-05d-1-gaya-apung-mudah-sedang.md`
- [ ] `osn-smp-fis-05d-1-gaya-apung-sedang-sulit.md`

**FIS-05d-2 · Terapung, Melayang, Tenggelam** (fokus Kab–Prov)
- [ ] `osn-smp-fis-05d-2-terapung-melayang-tenggelam-campur.md`
- [ ] `osn-smp-fis-05d-2-terapung-melayang-tenggelam-mudah.md`
- [ ] `osn-smp-fis-05d-2-terapung-melayang-tenggelam-sedang.md`
- [ ] `osn-smp-fis-05d-2-terapung-melayang-tenggelam-sulit.md`
- [ ] `osn-smp-fis-05d-2-terapung-melayang-tenggelam-mudah-sedang.md`
- [ ] `osn-smp-fis-05d-2-terapung-melayang-tenggelam-sedang-sulit.md`

#### FIS-05e · Tekanan Udara
**FIS-05e-1 · Tekanan Atmosfer & Barometer** (fokus Kab)
- [ ] `osn-smp-fis-05e-1-tekanan-atmosfer-campur.md`
- [ ] `osn-smp-fis-05e-1-tekanan-atmosfer-mudah.md`
- [ ] `osn-smp-fis-05e-1-tekanan-atmosfer-sedang.md`
- [ ] `osn-smp-fis-05e-1-tekanan-atmosfer-sulit.md`
- [ ] `osn-smp-fis-05e-1-tekanan-atmosfer-mudah-sedang.md`
- [ ] `osn-smp-fis-05e-1-tekanan-atmosfer-sedang-sulit.md`

#### FIS-05f · Bejana Berhubungan
**FIS-05f-1 · Bejana Berhubungan Sama Cairan (Asas Bejana)** (fokus Kab)
- [ ] `osn-smp-fis-05f-1-bejana-sama-cairan-campur.md`
- [ ] `osn-smp-fis-05f-1-bejana-sama-cairan-mudah.md`
- [ ] `osn-smp-fis-05f-1-bejana-sama-cairan-sedang.md`
- [ ] `osn-smp-fis-05f-1-bejana-sama-cairan-sulit.md`
- [ ] `osn-smp-fis-05f-1-bejana-sama-cairan-mudah-sedang.md`
- [ ] `osn-smp-fis-05f-1-bejana-sama-cairan-sedang-sulit.md`

#### FIS-05g · Aplikasi Fluida
**FIS-05g-1 · Kapal Selam, Balon Udara, Hidrometer** (fokus Prov)
- [ ] `osn-smp-fis-05g-1-aplikasi-kapal-balon-campur.md`
- [ ] `osn-smp-fis-05g-1-aplikasi-kapal-balon-mudah.md`
- [ ] `osn-smp-fis-05g-1-aplikasi-kapal-balon-sedang.md`
- [ ] `osn-smp-fis-05g-1-aplikasi-kapal-balon-sulit.md`
- [ ] `osn-smp-fis-05g-1-aplikasi-kapal-balon-mudah-sedang.md`
- [ ] `osn-smp-fis-05g-1-aplikasi-kapal-balon-sedang-sulit.md`

#### FIS-05h · Soal Cerita Tekanan-Fluida
**FIS-05h-1 · Cerita Tekanan-Fluida Aplikasi Real** (fokus Prov)
- [ ] `osn-smp-fis-05h-1-cerita-fluida-aplikasi-campur.md`
- [ ] `osn-smp-fis-05h-1-cerita-fluida-aplikasi-mudah.md`
- [ ] `osn-smp-fis-05h-1-cerita-fluida-aplikasi-sedang.md`
- [ ] `osn-smp-fis-05h-1-cerita-fluida-aplikasi-sulit.md`
- [ ] `osn-smp-fis-05h-1-cerita-fluida-aplikasi-mudah-sedang.md`
- [ ] `osn-smp-fis-05h-1-cerita-fluida-aplikasi-sedang-sulit.md`

### FIS-06 · Suhu, Kalor & Perpindahan Panas (~18 sub-sub-bab)

#### FIS-06a · Suhu & Termometer
**FIS-06a-1 · Skala Suhu (Celsius, Reamur, Fahrenheit, Kelvin)** (fokus Kab)
- [ ] `osn-smp-fis-06a-1-skala-suhu-campur.md`
- [ ] `osn-smp-fis-06a-1-skala-suhu-mudah.md`
- [ ] `osn-smp-fis-06a-1-skala-suhu-sedang.md`
- [ ] `osn-smp-fis-06a-1-skala-suhu-sulit.md`
- [ ] `osn-smp-fis-06a-1-skala-suhu-mudah-sedang.md`
- [ ] `osn-smp-fis-06a-1-skala-suhu-sedang-sulit.md`

**FIS-06a-2 · Konversi Antar Skala Suhu** (fokus Kab–Prov)
- [ ] `osn-smp-fis-06a-2-konversi-skala-suhu-campur.md`
- [ ] `osn-smp-fis-06a-2-konversi-skala-suhu-mudah.md`
- [ ] `osn-smp-fis-06a-2-konversi-skala-suhu-sedang.md`
- [ ] `osn-smp-fis-06a-2-konversi-skala-suhu-sulit.md`
- [ ] `osn-smp-fis-06a-2-konversi-skala-suhu-mudah-sedang.md`
- [ ] `osn-smp-fis-06a-2-konversi-skala-suhu-sedang-sulit.md`

#### FIS-06b · Pemuaian
**FIS-06b-1 · Pemuaian Panjang (ΔL = αL₀ΔT)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-06b-1-pemuaian-panjang-campur.md`
- [ ] `osn-smp-fis-06b-1-pemuaian-panjang-mudah.md`
- [ ] `osn-smp-fis-06b-1-pemuaian-panjang-sedang.md`
- [ ] `osn-smp-fis-06b-1-pemuaian-panjang-sulit.md`
- [ ] `osn-smp-fis-06b-1-pemuaian-panjang-mudah-sedang.md`
- [ ] `osn-smp-fis-06b-1-pemuaian-panjang-sedang-sulit.md`

**FIS-06b-2 · Pemuaian Luas & Volume (Padat, Cair, Gas)** (fokus Prov)
- [ ] `osn-smp-fis-06b-2-pemuaian-luas-volume-campur.md`
- [ ] `osn-smp-fis-06b-2-pemuaian-luas-volume-mudah.md`
- [ ] `osn-smp-fis-06b-2-pemuaian-luas-volume-sedang.md`
- [ ] `osn-smp-fis-06b-2-pemuaian-luas-volume-sulit.md`
- [ ] `osn-smp-fis-06b-2-pemuaian-luas-volume-mudah-sedang.md`
- [ ] `osn-smp-fis-06b-2-pemuaian-luas-volume-sedang-sulit.md`

#### FIS-06c · Kalor (Q = mcΔT)
**FIS-06c-1 · Persamaan Q = mcΔT Dasar** (fokus Kab–Prov)
- [ ] `osn-smp-fis-06c-1-qmct-dasar-campur.md`
- [ ] `osn-smp-fis-06c-1-qmct-dasar-mudah.md`
- [ ] `osn-smp-fis-06c-1-qmct-dasar-sedang.md`
- [ ] `osn-smp-fis-06c-1-qmct-dasar-sulit.md`
- [ ] `osn-smp-fis-06c-1-qmct-dasar-mudah-sedang.md`
- [ ] `osn-smp-fis-06c-1-qmct-dasar-sedang-sulit.md`

**FIS-06c-2 · Kalor Jenis Berbagai Zat (Air, Logam, Minyak)** (fokus Prov)
- [ ] `osn-smp-fis-06c-2-kalor-jenis-zat-campur.md`
- [ ] `osn-smp-fis-06c-2-kalor-jenis-zat-mudah.md`
- [ ] `osn-smp-fis-06c-2-kalor-jenis-zat-sedang.md`
- [ ] `osn-smp-fis-06c-2-kalor-jenis-zat-sulit.md`
- [ ] `osn-smp-fis-06c-2-kalor-jenis-zat-mudah-sedang.md`
- [ ] `osn-smp-fis-06c-2-kalor-jenis-zat-sedang-sulit.md`

#### FIS-06d · Kalor Lebur & Kalor Uap
**FIS-06d-1 · Kalor Lebur (Es→Air, Q = mL)** (fokus Prov)
- [ ] `osn-smp-fis-06d-1-kalor-lebur-campur.md`
- [ ] `osn-smp-fis-06d-1-kalor-lebur-mudah.md`
- [ ] `osn-smp-fis-06d-1-kalor-lebur-sedang.md`
- [ ] `osn-smp-fis-06d-1-kalor-lebur-sulit.md`
- [ ] `osn-smp-fis-06d-1-kalor-lebur-mudah-sedang.md`
- [ ] `osn-smp-fis-06d-1-kalor-lebur-sedang-sulit.md`

**FIS-06d-2 · Kalor Uap (Air→Uap, Diagram Q-T)** (fokus Prov)
- [ ] `osn-smp-fis-06d-2-kalor-uap-diagram-campur.md`
- [ ] `osn-smp-fis-06d-2-kalor-uap-diagram-mudah.md`
- [ ] `osn-smp-fis-06d-2-kalor-uap-diagram-sedang.md`
- [ ] `osn-smp-fis-06d-2-kalor-uap-diagram-sulit.md`
- [ ] `osn-smp-fis-06d-2-kalor-uap-diagram-mudah-sedang.md`
- [ ] `osn-smp-fis-06d-2-kalor-uap-diagram-sedang-sulit.md`

#### FIS-06e · Asas Black
**FIS-06e-1 · Pencampuran Dua Zat Sama (Air Panas + Air Dingin)** (fokus Prov–Nas)
- [ ] `osn-smp-fis-06e-1-black-dua-zat-sama-campur.md`
- [ ] `osn-smp-fis-06e-1-black-dua-zat-sama-mudah.md`
- [ ] `osn-smp-fis-06e-1-black-dua-zat-sama-sedang.md`
- [ ] `osn-smp-fis-06e-1-black-dua-zat-sama-sulit.md`
- [ ] `osn-smp-fis-06e-1-black-dua-zat-sama-mudah-sedang.md`
- [ ] `osn-smp-fis-06e-1-black-dua-zat-sama-sedang-sulit.md`

**FIS-06e-2 · Pencampuran Zat Beda (Logam Panas + Air, Es + Air Panas)** (fokus Prov–Nas)
- [ ] `osn-smp-fis-06e-2-black-zat-beda-campur.md`
- [ ] `osn-smp-fis-06e-2-black-zat-beda-mudah.md`
- [ ] `osn-smp-fis-06e-2-black-zat-beda-sedang.md`
- [ ] `osn-smp-fis-06e-2-black-zat-beda-sulit.md`
- [ ] `osn-smp-fis-06e-2-black-zat-beda-mudah-sedang.md`
- [ ] `osn-smp-fis-06e-2-black-zat-beda-sedang-sulit.md`

#### FIS-06f · Konduksi
**FIS-06f-1 · Konduksi - Konsep & Contoh** (fokus Kab)
- [ ] `osn-smp-fis-06f-1-konduksi-konsep-campur.md`
- [ ] `osn-smp-fis-06f-1-konduksi-konsep-mudah.md`
- [ ] `osn-smp-fis-06f-1-konduksi-konsep-sedang.md`
- [ ] `osn-smp-fis-06f-1-konduksi-konsep-sulit.md`
- [ ] `osn-smp-fis-06f-1-konduksi-konsep-mudah-sedang.md`
- [ ] `osn-smp-fis-06f-1-konduksi-konsep-sedang-sulit.md`

#### FIS-06g · Konveksi
**FIS-06g-1 · Konveksi - Konsep & Aplikasi (Angin Darat-Laut, Cerobong)** (fokus Kab)
- [ ] `osn-smp-fis-06g-1-konveksi-aplikasi-campur.md`
- [ ] `osn-smp-fis-06g-1-konveksi-aplikasi-mudah.md`
- [ ] `osn-smp-fis-06g-1-konveksi-aplikasi-sedang.md`
- [ ] `osn-smp-fis-06g-1-konveksi-aplikasi-sulit.md`
- [ ] `osn-smp-fis-06g-1-konveksi-aplikasi-mudah-sedang.md`
- [ ] `osn-smp-fis-06g-1-konveksi-aplikasi-sedang-sulit.md`

#### FIS-06h · Radiasi
**FIS-06h-1 · Radiasi - Konsep, Warna, Permukaan** (fokus Kab)
- [ ] `osn-smp-fis-06h-1-radiasi-warna-campur.md`
- [ ] `osn-smp-fis-06h-1-radiasi-warna-mudah.md`
- [ ] `osn-smp-fis-06h-1-radiasi-warna-sedang.md`
- [ ] `osn-smp-fis-06h-1-radiasi-warna-sulit.md`
- [ ] `osn-smp-fis-06h-1-radiasi-warna-mudah-sedang.md`
- [ ] `osn-smp-fis-06h-1-radiasi-warna-sedang-sulit.md`

#### FIS-06i · Soal Cerita Suhu-Kalor
**FIS-06i-1 · Cerita Aplikasi Termal (Memasak, AC, Termos)** (fokus Prov)
- [ ] `osn-smp-fis-06i-1-cerita-termal-campur.md`
- [ ] `osn-smp-fis-06i-1-cerita-termal-mudah.md`
- [ ] `osn-smp-fis-06i-1-cerita-termal-sedang.md`
- [ ] `osn-smp-fis-06i-1-cerita-termal-sulit.md`
- [ ] `osn-smp-fis-06i-1-cerita-termal-mudah-sedang.md`
- [ ] `osn-smp-fis-06i-1-cerita-termal-sedang-sulit.md`

### FIS-07 · Getaran, Gelombang, Bunyi & Optik (~22 sub-sub-bab)

#### FIS-07a · Getaran
**FIS-07a-1 · Periode & Frekuensi (T = 1/f)** (fokus Kab)
- [ ] `osn-smp-fis-07a-1-periode-frekuensi-campur.md`
- [ ] `osn-smp-fis-07a-1-periode-frekuensi-mudah.md`
- [ ] `osn-smp-fis-07a-1-periode-frekuensi-sedang.md`
- [ ] `osn-smp-fis-07a-1-periode-frekuensi-sulit.md`
- [ ] `osn-smp-fis-07a-1-periode-frekuensi-mudah-sedang.md`
- [ ] `osn-smp-fis-07a-1-periode-frekuensi-sedang-sulit.md`

**FIS-07a-2 · Amplitudo & Periode Bandul Sederhana** (fokus Kab–Prov)
- [ ] `osn-smp-fis-07a-2-amplitudo-bandul-campur.md`
- [ ] `osn-smp-fis-07a-2-amplitudo-bandul-mudah.md`
- [ ] `osn-smp-fis-07a-2-amplitudo-bandul-sedang.md`
- [ ] `osn-smp-fis-07a-2-amplitudo-bandul-sulit.md`
- [ ] `osn-smp-fis-07a-2-amplitudo-bandul-mudah-sedang.md`
- [ ] `osn-smp-fis-07a-2-amplitudo-bandul-sedang-sulit.md`

#### FIS-07b · Gelombang Transversal & Longitudinal
**FIS-07b-1 · Identifikasi Jenis Gelombang (T vs L)** (fokus Kab)
- [ ] `osn-smp-fis-07b-1-identifikasi-jenis-gelombang-campur.md`
- [ ] `osn-smp-fis-07b-1-identifikasi-jenis-gelombang-mudah.md`
- [ ] `osn-smp-fis-07b-1-identifikasi-jenis-gelombang-sedang.md`
- [ ] `osn-smp-fis-07b-1-identifikasi-jenis-gelombang-sulit.md`
- [ ] `osn-smp-fis-07b-1-identifikasi-jenis-gelombang-mudah-sedang.md`
- [ ] `osn-smp-fis-07b-1-identifikasi-jenis-gelombang-sedang-sulit.md`

#### FIS-07c · Persamaan Gelombang
**FIS-07c-1 · v = λ × f (Cepat Rambat Gelombang)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-07c-1-rumus-v-lambda-f-campur.md`
- [ ] `osn-smp-fis-07c-1-rumus-v-lambda-f-mudah.md`
- [ ] `osn-smp-fis-07c-1-rumus-v-lambda-f-sedang.md`
- [ ] `osn-smp-fis-07c-1-rumus-v-lambda-f-sulit.md`
- [ ] `osn-smp-fis-07c-1-rumus-v-lambda-f-mudah-sedang.md`
- [ ] `osn-smp-fis-07c-1-rumus-v-lambda-f-sedang-sulit.md`

#### FIS-07d · Sifat Bunyi
**FIS-07d-1 · Audiosonik, Infrasonik, Ultrasonik** (fokus Kab)
- [ ] `osn-smp-fis-07d-1-jenis-bunyi-campur.md`
- [ ] `osn-smp-fis-07d-1-jenis-bunyi-mudah.md`
- [ ] `osn-smp-fis-07d-1-jenis-bunyi-sedang.md`
- [ ] `osn-smp-fis-07d-1-jenis-bunyi-sulit.md`
- [ ] `osn-smp-fis-07d-1-jenis-bunyi-mudah-sedang.md`
- [ ] `osn-smp-fis-07d-1-jenis-bunyi-sedang-sulit.md`

**FIS-07d-2 · Resonansi Bunyi & Aplikasi** (fokus Kab–Prov)
- [ ] `osn-smp-fis-07d-2-resonansi-bunyi-campur.md`
- [ ] `osn-smp-fis-07d-2-resonansi-bunyi-mudah.md`
- [ ] `osn-smp-fis-07d-2-resonansi-bunyi-sedang.md`
- [ ] `osn-smp-fis-07d-2-resonansi-bunyi-sulit.md`
- [ ] `osn-smp-fis-07d-2-resonansi-bunyi-mudah-sedang.md`
- [ ] `osn-smp-fis-07d-2-resonansi-bunyi-sedang-sulit.md`

#### FIS-07e · Pemantulan Bunyi
**FIS-07e-1 · Gaung & Gema (Soal Cerita Kedalaman, Jarak Tebing)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-07e-1-gaung-gema-campur.md`
- [ ] `osn-smp-fis-07e-1-gaung-gema-mudah.md`
- [ ] `osn-smp-fis-07e-1-gaung-gema-sedang.md`
- [ ] `osn-smp-fis-07e-1-gaung-gema-sulit.md`
- [ ] `osn-smp-fis-07e-1-gaung-gema-mudah-sedang.md`
- [ ] `osn-smp-fis-07e-1-gaung-gema-sedang-sulit.md`

#### FIS-07f · Cermin Datar
**FIS-07f-1 · Sifat Bayangan Cermin Datar** (fokus Kab)
- [ ] `osn-smp-fis-07f-1-bayangan-cermin-datar-campur.md`
- [ ] `osn-smp-fis-07f-1-bayangan-cermin-datar-mudah.md`
- [ ] `osn-smp-fis-07f-1-bayangan-cermin-datar-sedang.md`
- [ ] `osn-smp-fis-07f-1-bayangan-cermin-datar-sulit.md`
- [ ] `osn-smp-fis-07f-1-bayangan-cermin-datar-mudah-sedang.md`
- [ ] `osn-smp-fis-07f-1-bayangan-cermin-datar-sedang-sulit.md`

**FIS-07f-2 · Banyak Bayangan pada Dua Cermin Bersudut** (fokus Prov)
- [ ] `osn-smp-fis-07f-2-cermin-bersudut-campur.md`
- [ ] `osn-smp-fis-07f-2-cermin-bersudut-mudah.md`
- [ ] `osn-smp-fis-07f-2-cermin-bersudut-sedang.md`
- [ ] `osn-smp-fis-07f-2-cermin-bersudut-sulit.md`
- [ ] `osn-smp-fis-07f-2-cermin-bersudut-mudah-sedang.md`
- [ ] `osn-smp-fis-07f-2-cermin-bersudut-sedang-sulit.md`

#### FIS-07g · Cermin Cekung & Cembung
**FIS-07g-1 · Rumus Cermin Lengkung (1/f = 1/s + 1/s')** (fokus Kab–Prov)
- [ ] `osn-smp-fis-07g-1-rumus-cermin-lengkung-campur.md`
- [ ] `osn-smp-fis-07g-1-rumus-cermin-lengkung-mudah.md`
- [ ] `osn-smp-fis-07g-1-rumus-cermin-lengkung-sedang.md`
- [ ] `osn-smp-fis-07g-1-rumus-cermin-lengkung-sulit.md`
- [ ] `osn-smp-fis-07g-1-rumus-cermin-lengkung-mudah-sedang.md`
- [ ] `osn-smp-fis-07g-1-rumus-cermin-lengkung-sedang-sulit.md`

**FIS-07g-2 · Pembentukan Bayangan & Perbesaran** (fokus Prov)
- [ ] `osn-smp-fis-07g-2-pembentukan-bayangan-cermin-campur.md`
- [ ] `osn-smp-fis-07g-2-pembentukan-bayangan-cermin-mudah.md`
- [ ] `osn-smp-fis-07g-2-pembentukan-bayangan-cermin-sedang.md`
- [ ] `osn-smp-fis-07g-2-pembentukan-bayangan-cermin-sulit.md`
- [ ] `osn-smp-fis-07g-2-pembentukan-bayangan-cermin-mudah-sedang.md`
- [ ] `osn-smp-fis-07g-2-pembentukan-bayangan-cermin-sedang-sulit.md`

#### FIS-07h · Lensa
**FIS-07h-1 · Lensa Cembung & Cekung (Rumus 1/f = 1/s + 1/s')** (fokus Prov)
- [ ] `osn-smp-fis-07h-1-rumus-lensa-campur.md`
- [ ] `osn-smp-fis-07h-1-rumus-lensa-mudah.md`
- [ ] `osn-smp-fis-07h-1-rumus-lensa-sedang.md`
- [ ] `osn-smp-fis-07h-1-rumus-lensa-sulit.md`
- [ ] `osn-smp-fis-07h-1-rumus-lensa-mudah-sedang.md`
- [ ] `osn-smp-fis-07h-1-rumus-lensa-sedang-sulit.md`

**FIS-07h-2 · Kekuatan Lensa (P = 100/f cm)** (fokus Prov)
- [ ] `osn-smp-fis-07h-2-kekuatan-lensa-campur.md`
- [ ] `osn-smp-fis-07h-2-kekuatan-lensa-mudah.md`
- [ ] `osn-smp-fis-07h-2-kekuatan-lensa-sedang.md`
- [ ] `osn-smp-fis-07h-2-kekuatan-lensa-sulit.md`
- [ ] `osn-smp-fis-07h-2-kekuatan-lensa-mudah-sedang.md`
- [ ] `osn-smp-fis-07h-2-kekuatan-lensa-sedang-sulit.md`

#### FIS-07i · Alat Optik
**FIS-07i-1 · Mata Manusia (Anatomi & Daya Akomodasi)** (fokus Kab)
- [ ] `osn-smp-fis-07i-1-mata-anatomi-campur.md`
- [ ] `osn-smp-fis-07i-1-mata-anatomi-mudah.md`
- [ ] `osn-smp-fis-07i-1-mata-anatomi-sedang.md`
- [ ] `osn-smp-fis-07i-1-mata-anatomi-sulit.md`
- [ ] `osn-smp-fis-07i-1-mata-anatomi-mudah-sedang.md`
- [ ] `osn-smp-fis-07i-1-mata-anatomi-sedang-sulit.md`

**FIS-07i-2 · Lup, Mikroskop, Teropong (Pembesaran)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-07i-2-lup-mikroskop-teropong-campur.md`
- [ ] `osn-smp-fis-07i-2-lup-mikroskop-teropong-mudah.md`
- [ ] `osn-smp-fis-07i-2-lup-mikroskop-teropong-sedang.md`
- [ ] `osn-smp-fis-07i-2-lup-mikroskop-teropong-sulit.md`
- [ ] `osn-smp-fis-07i-2-lup-mikroskop-teropong-mudah-sedang.md`
- [ ] `osn-smp-fis-07i-2-lup-mikroskop-teropong-sedang-sulit.md`

#### FIS-07j · Cacat Mata
**FIS-07j-1 · Miopi & Hipermetropi (Lensa Korektor)** (fokus Kab)
- [ ] `osn-smp-fis-07j-1-miopi-hipermetropi-campur.md`
- [ ] `osn-smp-fis-07j-1-miopi-hipermetropi-mudah.md`
- [ ] `osn-smp-fis-07j-1-miopi-hipermetropi-sedang.md`
- [ ] `osn-smp-fis-07j-1-miopi-hipermetropi-sulit.md`
- [ ] `osn-smp-fis-07j-1-miopi-hipermetropi-mudah-sedang.md`
- [ ] `osn-smp-fis-07j-1-miopi-hipermetropi-sedang-sulit.md`

#### FIS-07k · Soal Cerita Gelombang-Optik
**FIS-07k-1 · Cerita Aplikasi Optik (Kamera, Proyektor)** (fokus Prov)
- [ ] `osn-smp-fis-07k-1-cerita-optik-aplikasi-campur.md`
- [ ] `osn-smp-fis-07k-1-cerita-optik-aplikasi-mudah.md`
- [ ] `osn-smp-fis-07k-1-cerita-optik-aplikasi-sedang.md`
- [ ] `osn-smp-fis-07k-1-cerita-optik-aplikasi-sulit.md`
- [ ] `osn-smp-fis-07k-1-cerita-optik-aplikasi-mudah-sedang.md`
- [ ] `osn-smp-fis-07k-1-cerita-optik-aplikasi-sedang-sulit.md`

### FIS-08 · Listrik, Magnet & Tata Surya (~22 sub-sub-bab)

#### FIS-08a · Listrik Statis
**FIS-08a-1 · Muatan Listrik & Cara Menghasilkannya (Gosokan, Induksi)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-08a-1-muatan-gosokan-induksi-campur.md`
- [ ] `osn-smp-fis-08a-1-muatan-gosokan-induksi-mudah.md`
- [ ] `osn-smp-fis-08a-1-muatan-gosokan-induksi-sedang.md`
- [ ] `osn-smp-fis-08a-1-muatan-gosokan-induksi-sulit.md`
- [ ] `osn-smp-fis-08a-1-muatan-gosokan-induksi-mudah-sedang.md`
- [ ] `osn-smp-fis-08a-1-muatan-gosokan-induksi-sedang-sulit.md`

**FIS-08a-2 · Hukum Coulomb (F = kq₁q₂/r²)** (fokus Prov)
- [ ] `osn-smp-fis-08a-2-hukum-coulomb-campur.md`
- [ ] `osn-smp-fis-08a-2-hukum-coulomb-mudah.md`
- [ ] `osn-smp-fis-08a-2-hukum-coulomb-sedang.md`
- [ ] `osn-smp-fis-08a-2-hukum-coulomb-sulit.md`
- [ ] `osn-smp-fis-08a-2-hukum-coulomb-mudah-sedang.md`
- [ ] `osn-smp-fis-08a-2-hukum-coulomb-sedang-sulit.md`

#### FIS-08b · Arus & Tegangan
**FIS-08b-1 · Arus Listrik (I = Q/t)** (fokus Kab)
- [ ] `osn-smp-fis-08b-1-arus-listrik-campur.md`
- [ ] `osn-smp-fis-08b-1-arus-listrik-mudah.md`
- [ ] `osn-smp-fis-08b-1-arus-listrik-sedang.md`
- [ ] `osn-smp-fis-08b-1-arus-listrik-sulit.md`
- [ ] `osn-smp-fis-08b-1-arus-listrik-mudah-sedang.md`
- [ ] `osn-smp-fis-08b-1-arus-listrik-sedang-sulit.md`

**FIS-08b-2 · Tegangan (Beda Potensial) & Pengukuran (Voltmeter)** (fokus Kab)
- [ ] `osn-smp-fis-08b-2-tegangan-voltmeter-campur.md`
- [ ] `osn-smp-fis-08b-2-tegangan-voltmeter-mudah.md`
- [ ] `osn-smp-fis-08b-2-tegangan-voltmeter-sedang.md`
- [ ] `osn-smp-fis-08b-2-tegangan-voltmeter-sulit.md`
- [ ] `osn-smp-fis-08b-2-tegangan-voltmeter-mudah-sedang.md`
- [ ] `osn-smp-fis-08b-2-tegangan-voltmeter-sedang-sulit.md`

#### FIS-08c · Hukum Ohm
**FIS-08c-1 · Hukum Ohm (V = IR)** (fokus Kab)
- [ ] `osn-smp-fis-08c-1-hukum-ohm-rumus-campur.md`
- [ ] `osn-smp-fis-08c-1-hukum-ohm-rumus-mudah.md`
- [ ] `osn-smp-fis-08c-1-hukum-ohm-rumus-sedang.md`
- [ ] `osn-smp-fis-08c-1-hukum-ohm-rumus-sulit.md`
- [ ] `osn-smp-fis-08c-1-hukum-ohm-rumus-mudah-sedang.md`
- [ ] `osn-smp-fis-08c-1-hukum-ohm-rumus-sedang-sulit.md`

**FIS-08c-2 · Hambatan Kawat (R = ρL/A)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-08c-2-hambatan-kawat-campur.md`
- [ ] `osn-smp-fis-08c-2-hambatan-kawat-mudah.md`
- [ ] `osn-smp-fis-08c-2-hambatan-kawat-sedang.md`
- [ ] `osn-smp-fis-08c-2-hambatan-kawat-sulit.md`
- [ ] `osn-smp-fis-08c-2-hambatan-kawat-mudah-sedang.md`
- [ ] `osn-smp-fis-08c-2-hambatan-kawat-sedang-sulit.md`

#### FIS-08d · Rangkaian Seri & Paralel
**FIS-08d-1 · Hambatan Seri (Rs = R1 + R2)** (fokus Kab)
- [ ] `osn-smp-fis-08d-1-hambatan-seri-campur.md`
- [ ] `osn-smp-fis-08d-1-hambatan-seri-mudah.md`
- [ ] `osn-smp-fis-08d-1-hambatan-seri-sedang.md`
- [ ] `osn-smp-fis-08d-1-hambatan-seri-sulit.md`
- [ ] `osn-smp-fis-08d-1-hambatan-seri-mudah-sedang.md`
- [ ] `osn-smp-fis-08d-1-hambatan-seri-sedang-sulit.md`

**FIS-08d-2 · Hambatan Paralel (1/Rp = 1/R1 + 1/R2)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-08d-2-hambatan-paralel-campur.md`
- [ ] `osn-smp-fis-08d-2-hambatan-paralel-mudah.md`
- [ ] `osn-smp-fis-08d-2-hambatan-paralel-sedang.md`
- [ ] `osn-smp-fis-08d-2-hambatan-paralel-sulit.md`
- [ ] `osn-smp-fis-08d-2-hambatan-paralel-mudah-sedang.md`
- [ ] `osn-smp-fis-08d-2-hambatan-paralel-sedang-sulit.md`

**FIS-08d-3 · Rangkaian Campuran (Seri-Paralel)** (fokus Prov)
- [ ] `osn-smp-fis-08d-3-rangkaian-campuran-campur.md`
- [ ] `osn-smp-fis-08d-3-rangkaian-campuran-mudah.md`
- [ ] `osn-smp-fis-08d-3-rangkaian-campuran-sedang.md`
- [ ] `osn-smp-fis-08d-3-rangkaian-campuran-sulit.md`
- [ ] `osn-smp-fis-08d-3-rangkaian-campuran-mudah-sedang.md`
- [ ] `osn-smp-fis-08d-3-rangkaian-campuran-sedang-sulit.md`

#### FIS-08e · Hukum Kirchhoff
**FIS-08e-1 · Hk Kirchhoff I (KCL) - Arus pada Titik Cabang** (fokus Prov–Nas)
- [ ] `osn-smp-fis-08e-1-kcl-campur.md`
- [ ] `osn-smp-fis-08e-1-kcl-mudah.md`
- [ ] `osn-smp-fis-08e-1-kcl-sedang.md`
- [ ] `osn-smp-fis-08e-1-kcl-sulit.md`
- [ ] `osn-smp-fis-08e-1-kcl-mudah-sedang.md`
- [ ] `osn-smp-fis-08e-1-kcl-sedang-sulit.md`

**FIS-08e-2 · Hk Kirchhoff II (KVL) - Tegangan pada Loop** (fokus Nas)
- [ ] `osn-smp-fis-08e-2-kvl-campur.md`
- [ ] `osn-smp-fis-08e-2-kvl-mudah.md`
- [ ] `osn-smp-fis-08e-2-kvl-sedang.md`
- [ ] `osn-smp-fis-08e-2-kvl-sulit.md`
- [ ] `osn-smp-fis-08e-2-kvl-mudah-sedang.md`
- [ ] `osn-smp-fis-08e-2-kvl-sedang-sulit.md`

#### FIS-08f · Daya & Energi Listrik
**FIS-08f-1 · Daya Listrik (P = VI, P = I²R, P = V²/R)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-08f-1-daya-listrik-rumus-campur.md`
- [ ] `osn-smp-fis-08f-1-daya-listrik-rumus-mudah.md`
- [ ] `osn-smp-fis-08f-1-daya-listrik-rumus-sedang.md`
- [ ] `osn-smp-fis-08f-1-daya-listrik-rumus-sulit.md`
- [ ] `osn-smp-fis-08f-1-daya-listrik-rumus-mudah-sedang.md`
- [ ] `osn-smp-fis-08f-1-daya-listrik-rumus-sedang-sulit.md`

**FIS-08f-2 · Energi Listrik & Biaya Listrik (kWh)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-08f-2-energi-biaya-listrik-campur.md`
- [ ] `osn-smp-fis-08f-2-energi-biaya-listrik-mudah.md`
- [ ] `osn-smp-fis-08f-2-energi-biaya-listrik-sedang.md`
- [ ] `osn-smp-fis-08f-2-energi-biaya-listrik-sulit.md`
- [ ] `osn-smp-fis-08f-2-energi-biaya-listrik-mudah-sedang.md`
- [ ] `osn-smp-fis-08f-2-energi-biaya-listrik-sedang-sulit.md`

#### FIS-08g · Magnet
**FIS-08g-1 · Sifat Magnet & Medan Magnet** (fokus Kab)
- [ ] `osn-smp-fis-08g-1-sifat-magnet-medan-campur.md`
- [ ] `osn-smp-fis-08g-1-sifat-magnet-medan-mudah.md`
- [ ] `osn-smp-fis-08g-1-sifat-magnet-medan-sedang.md`
- [ ] `osn-smp-fis-08g-1-sifat-magnet-medan-sulit.md`
- [ ] `osn-smp-fis-08g-1-sifat-magnet-medan-mudah-sedang.md`
- [ ] `osn-smp-fis-08g-1-sifat-magnet-medan-sedang-sulit.md`

**FIS-08g-2 · Bahan Magnetik (Ferromagnetik, Paramagnetik, Diamagnetik)** (fokus Kab)
- [ ] `osn-smp-fis-08g-2-bahan-magnetik-campur.md`
- [ ] `osn-smp-fis-08g-2-bahan-magnetik-mudah.md`
- [ ] `osn-smp-fis-08g-2-bahan-magnetik-sedang.md`
- [ ] `osn-smp-fis-08g-2-bahan-magnetik-sulit.md`
- [ ] `osn-smp-fis-08g-2-bahan-magnetik-mudah-sedang.md`
- [ ] `osn-smp-fis-08g-2-bahan-magnetik-sedang-sulit.md`

#### FIS-08h · Elektromagnet & Induksi
**FIS-08h-1 · Elektromagnet (Solenoid & Aturan Tangan Kanan)** (fokus Prov)
- [ ] `osn-smp-fis-08h-1-elektromagnet-campur.md`
- [ ] `osn-smp-fis-08h-1-elektromagnet-mudah.md`
- [ ] `osn-smp-fis-08h-1-elektromagnet-sedang.md`
- [ ] `osn-smp-fis-08h-1-elektromagnet-sulit.md`
- [ ] `osn-smp-fis-08h-1-elektromagnet-mudah-sedang.md`
- [ ] `osn-smp-fis-08h-1-elektromagnet-sedang-sulit.md`

**FIS-08h-2 · Induksi Elektromagnetik (Hk Faraday Dasar)** (fokus Prov)
- [ ] `osn-smp-fis-08h-2-induksi-faraday-campur.md`
- [ ] `osn-smp-fis-08h-2-induksi-faraday-mudah.md`
- [ ] `osn-smp-fis-08h-2-induksi-faraday-sedang.md`
- [ ] `osn-smp-fis-08h-2-induksi-faraday-sulit.md`
- [ ] `osn-smp-fis-08h-2-induksi-faraday-mudah-sedang.md`
- [ ] `osn-smp-fis-08h-2-induksi-faraday-sedang-sulit.md`

#### FIS-08i · Generator & Transformator
**FIS-08i-1 · Transformator (Vp/Vs = Np/Ns, Vp×Ip = Vs×Is)** (fokus Prov)
- [ ] `osn-smp-fis-08i-1-transformator-campur.md`
- [ ] `osn-smp-fis-08i-1-transformator-mudah.md`
- [ ] `osn-smp-fis-08i-1-transformator-sedang.md`
- [ ] `osn-smp-fis-08i-1-transformator-sulit.md`
- [ ] `osn-smp-fis-08i-1-transformator-mudah-sedang.md`
- [ ] `osn-smp-fis-08i-1-transformator-sedang-sulit.md`

#### FIS-08j · Tata Surya
**FIS-08j-1 · Anggota Tata Surya (Matahari, Planet, Bulan, Asteroid)** (fokus Kab)
- [ ] `osn-smp-fis-08j-1-anggota-tata-surya-campur.md`
- [ ] `osn-smp-fis-08j-1-anggota-tata-surya-mudah.md`
- [ ] `osn-smp-fis-08j-1-anggota-tata-surya-sedang.md`
- [ ] `osn-smp-fis-08j-1-anggota-tata-surya-sulit.md`
- [ ] `osn-smp-fis-08j-1-anggota-tata-surya-mudah-sedang.md`
- [ ] `osn-smp-fis-08j-1-anggota-tata-surya-sedang-sulit.md`

**FIS-08j-2 · Karakteristik Planet (Dalam, Luar, Jovian, Terrestrial)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-08j-2-karakteristik-planet-campur.md`
- [ ] `osn-smp-fis-08j-2-karakteristik-planet-mudah.md`
- [ ] `osn-smp-fis-08j-2-karakteristik-planet-sedang.md`
- [ ] `osn-smp-fis-08j-2-karakteristik-planet-sulit.md`
- [ ] `osn-smp-fis-08j-2-karakteristik-planet-mudah-sedang.md`
- [ ] `osn-smp-fis-08j-2-karakteristik-planet-sedang-sulit.md`

#### FIS-08k · Gerhana, Pasang Surut, Revolusi-Rotasi
**FIS-08k-1 · Gerhana Matahari & Bulan** (fokus Kab–Prov)
- [ ] `osn-smp-fis-08k-1-gerhana-campur.md`
- [ ] `osn-smp-fis-08k-1-gerhana-mudah.md`
- [ ] `osn-smp-fis-08k-1-gerhana-sedang.md`
- [ ] `osn-smp-fis-08k-1-gerhana-sulit.md`
- [ ] `osn-smp-fis-08k-1-gerhana-mudah-sedang.md`
- [ ] `osn-smp-fis-08k-1-gerhana-sedang-sulit.md`

**FIS-08k-2 · Rotasi & Revolusi Bumi (Akibat & Musim)** (fokus Kab–Prov)
- [ ] `osn-smp-fis-08k-2-rotasi-revolusi-akibat-campur.md`
- [ ] `osn-smp-fis-08k-2-rotasi-revolusi-akibat-mudah.md`
- [ ] `osn-smp-fis-08k-2-rotasi-revolusi-akibat-sedang.md`
- [ ] `osn-smp-fis-08k-2-rotasi-revolusi-akibat-sulit.md`
- [ ] `osn-smp-fis-08k-2-rotasi-revolusi-akibat-mudah-sedang.md`
- [ ] `osn-smp-fis-08k-2-rotasi-revolusi-akibat-sedang-sulit.md`

---

## C · Biologi Per Sub-Sub-Bab

### BIO-01 · Klasifikasi, Sel & Jaringan (~18 sub-sub-bab)

#### BIO-01a · Ciri-ciri Makhluk Hidup
**BIO-01a-1 · 8 Ciri Makhluk Hidup (Bernapas, Makan, Tumbuh, dll)** (fokus Kab)
- [ ] `osn-smp-bio-01a-1-ciri-mh-campur.md`
- [ ] `osn-smp-bio-01a-1-ciri-mh-mudah.md`
- [ ] `osn-smp-bio-01a-1-ciri-mh-sedang.md`
- [ ] `osn-smp-bio-01a-1-ciri-mh-sulit.md`
- [ ] `osn-smp-bio-01a-1-ciri-mh-mudah-sedang.md`
- [ ] `osn-smp-bio-01a-1-ciri-mh-sedang-sulit.md`

#### BIO-01b · Klasifikasi 5 Kingdom
**BIO-01b-1 · Kingdom Monera & Protista** (fokus Kab)
- [ ] `osn-smp-bio-01b-1-monera-protista-campur.md`
- [ ] `osn-smp-bio-01b-1-monera-protista-mudah.md`
- [ ] `osn-smp-bio-01b-1-monera-protista-sedang.md`
- [ ] `osn-smp-bio-01b-1-monera-protista-sulit.md`
- [ ] `osn-smp-bio-01b-1-monera-protista-mudah-sedang.md`
- [ ] `osn-smp-bio-01b-1-monera-protista-sedang-sulit.md`

**BIO-01b-2 · Kingdom Fungi, Plantae, Animalia** (fokus Kab)
- [ ] `osn-smp-bio-01b-2-fungi-plantae-animalia-campur.md`
- [ ] `osn-smp-bio-01b-2-fungi-plantae-animalia-mudah.md`
- [ ] `osn-smp-bio-01b-2-fungi-plantae-animalia-sedang.md`
- [ ] `osn-smp-bio-01b-2-fungi-plantae-animalia-sulit.md`
- [ ] `osn-smp-bio-01b-2-fungi-plantae-animalia-mudah-sedang.md`
- [ ] `osn-smp-bio-01b-2-fungi-plantae-animalia-sedang-sulit.md`

#### BIO-01c · Vertebrata & Invertebrata
**BIO-01c-1 · Invertebrata (Porifera, Coelenterata, Vermes, Mollusca, Arthropoda, Echinodermata)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-01c-1-invertebrata-campur.md`
- [ ] `osn-smp-bio-01c-1-invertebrata-mudah.md`
- [ ] `osn-smp-bio-01c-1-invertebrata-sedang.md`
- [ ] `osn-smp-bio-01c-1-invertebrata-sulit.md`
- [ ] `osn-smp-bio-01c-1-invertebrata-mudah-sedang.md`
- [ ] `osn-smp-bio-01c-1-invertebrata-sedang-sulit.md`

**BIO-01c-2 · Vertebrata (Pisces, Amphibia, Reptilia, Aves, Mammalia)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-01c-2-vertebrata-campur.md`
- [ ] `osn-smp-bio-01c-2-vertebrata-mudah.md`
- [ ] `osn-smp-bio-01c-2-vertebrata-sedang.md`
- [ ] `osn-smp-bio-01c-2-vertebrata-sulit.md`
- [ ] `osn-smp-bio-01c-2-vertebrata-mudah-sedang.md`
- [ ] `osn-smp-bio-01c-2-vertebrata-sedang-sulit.md`

#### BIO-01d · Klasifikasi Tumbuhan
**BIO-01d-1 · Lumut & Tumbuhan Paku** (fokus Kab–Prov)
- [ ] `osn-smp-bio-01d-1-lumut-paku-campur.md`
- [ ] `osn-smp-bio-01d-1-lumut-paku-mudah.md`
- [ ] `osn-smp-bio-01d-1-lumut-paku-sedang.md`
- [ ] `osn-smp-bio-01d-1-lumut-paku-sulit.md`
- [ ] `osn-smp-bio-01d-1-lumut-paku-mudah-sedang.md`
- [ ] `osn-smp-bio-01d-1-lumut-paku-sedang-sulit.md`

**BIO-01d-2 · Tumbuhan Berbiji (Gymnospermae & Angiospermae)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-01d-2-berbiji-campur.md`
- [ ] `osn-smp-bio-01d-2-berbiji-mudah.md`
- [ ] `osn-smp-bio-01d-2-berbiji-sedang.md`
- [ ] `osn-smp-bio-01d-2-berbiji-sulit.md`
- [ ] `osn-smp-bio-01d-2-berbiji-mudah-sedang.md`
- [ ] `osn-smp-bio-01d-2-berbiji-sedang-sulit.md`

#### BIO-01e · Struktur & Fungsi Organel Sel
**BIO-01e-1 · Inti Sel, Nukleus, Ribosom** (fokus Kab–Prov)
- [ ] `osn-smp-bio-01e-1-inti-ribosom-campur.md`
- [ ] `osn-smp-bio-01e-1-inti-ribosom-mudah.md`
- [ ] `osn-smp-bio-01e-1-inti-ribosom-sedang.md`
- [ ] `osn-smp-bio-01e-1-inti-ribosom-sulit.md`
- [ ] `osn-smp-bio-01e-1-inti-ribosom-mudah-sedang.md`
- [ ] `osn-smp-bio-01e-1-inti-ribosom-sedang-sulit.md`

**BIO-01e-2 · Mitokondria, RE, Aparatus Golgi, Lisosom** (fokus Prov)
- [ ] `osn-smp-bio-01e-2-mitokondria-re-golgi-campur.md`
- [ ] `osn-smp-bio-01e-2-mitokondria-re-golgi-mudah.md`
- [ ] `osn-smp-bio-01e-2-mitokondria-re-golgi-sedang.md`
- [ ] `osn-smp-bio-01e-2-mitokondria-re-golgi-sulit.md`
- [ ] `osn-smp-bio-01e-2-mitokondria-re-golgi-mudah-sedang.md`
- [ ] `osn-smp-bio-01e-2-mitokondria-re-golgi-sedang-sulit.md`

#### BIO-01f · Sel Hewan vs Sel Tumbuhan
**BIO-01f-1 · Perbandingan Sel Hewan & Tumbuhan (Dinding, Plastida, Vakuola)** (fokus Kab)
- [ ] `osn-smp-bio-01f-1-banding-sel-hewan-tumbuhan-campur.md`
- [ ] `osn-smp-bio-01f-1-banding-sel-hewan-tumbuhan-mudah.md`
- [ ] `osn-smp-bio-01f-1-banding-sel-hewan-tumbuhan-sedang.md`
- [ ] `osn-smp-bio-01f-1-banding-sel-hewan-tumbuhan-sulit.md`
- [ ] `osn-smp-bio-01f-1-banding-sel-hewan-tumbuhan-mudah-sedang.md`
- [ ] `osn-smp-bio-01f-1-banding-sel-hewan-tumbuhan-sedang-sulit.md`

#### BIO-01g · Jaringan Tumbuhan
**BIO-01g-1 · Jaringan Meristem & Jaringan Permanen** (fokus Prov)
- [ ] `osn-smp-bio-01g-1-meristem-permanen-campur.md`
- [ ] `osn-smp-bio-01g-1-meristem-permanen-mudah.md`
- [ ] `osn-smp-bio-01g-1-meristem-permanen-sedang.md`
- [ ] `osn-smp-bio-01g-1-meristem-permanen-sulit.md`
- [ ] `osn-smp-bio-01g-1-meristem-permanen-mudah-sedang.md`
- [ ] `osn-smp-bio-01g-1-meristem-permanen-sedang-sulit.md`

#### BIO-01h · Jaringan Hewan
**BIO-01h-1 · Jaringan Epitel, Ikat, Otot, Saraf** (fokus Prov)
- [ ] `osn-smp-bio-01h-1-jaringan-hewan-4-campur.md`
- [ ] `osn-smp-bio-01h-1-jaringan-hewan-4-mudah.md`
- [ ] `osn-smp-bio-01h-1-jaringan-hewan-4-sedang.md`
- [ ] `osn-smp-bio-01h-1-jaringan-hewan-4-sulit.md`
- [ ] `osn-smp-bio-01h-1-jaringan-hewan-4-mudah-sedang.md`
- [ ] `osn-smp-bio-01h-1-jaringan-hewan-4-sedang-sulit.md`

#### BIO-01i · Organ & Sistem Organ
**BIO-01i-1 · Hierarki Sel → Jaringan → Organ → Sistem** (fokus Kab)
- [ ] `osn-smp-bio-01i-1-hierarki-organisasi-campur.md`
- [ ] `osn-smp-bio-01i-1-hierarki-organisasi-mudah.md`
- [ ] `osn-smp-bio-01i-1-hierarki-organisasi-sedang.md`
- [ ] `osn-smp-bio-01i-1-hierarki-organisasi-sulit.md`
- [ ] `osn-smp-bio-01i-1-hierarki-organisasi-mudah-sedang.md`
- [ ] `osn-smp-bio-01i-1-hierarki-organisasi-sedang-sulit.md`

#### BIO-01j · Mikroorganisme
**BIO-01j-1 · Bakteri (Bentuk, Struktur, Peran)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-01j-1-bakteri-bentuk-peran-campur.md`
- [ ] `osn-smp-bio-01j-1-bakteri-bentuk-peran-mudah.md`
- [ ] `osn-smp-bio-01j-1-bakteri-bentuk-peran-sedang.md`
- [ ] `osn-smp-bio-01j-1-bakteri-bentuk-peran-sulit.md`
- [ ] `osn-smp-bio-01j-1-bakteri-bentuk-peran-mudah-sedang.md`
- [ ] `osn-smp-bio-01j-1-bakteri-bentuk-peran-sedang-sulit.md`

**BIO-01j-2 · Virus & Jamur (Struktur & Peran)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-01j-2-virus-jamur-campur.md`
- [ ] `osn-smp-bio-01j-2-virus-jamur-mudah.md`
- [ ] `osn-smp-bio-01j-2-virus-jamur-sedang.md`
- [ ] `osn-smp-bio-01j-2-virus-jamur-sulit.md`
- [ ] `osn-smp-bio-01j-2-virus-jamur-mudah-sedang.md`
- [ ] `osn-smp-bio-01j-2-virus-jamur-sedang-sulit.md`

### BIO-02 · Sistem Organ I (Pencernaan, Pernapasan, Peredaran Darah) (~22 sub-sub-bab)

#### BIO-02a · Sistem Pencernaan - Organ & Fungsi
**BIO-02a-1 · Saluran Pencernaan (Mulut → Anus)** (fokus Kab)
- [ ] `osn-smp-bio-02a-1-saluran-pencernaan-campur.md`
- [ ] `osn-smp-bio-02a-1-saluran-pencernaan-mudah.md`
- [ ] `osn-smp-bio-02a-1-saluran-pencernaan-sedang.md`
- [ ] `osn-smp-bio-02a-1-saluran-pencernaan-sulit.md`
- [ ] `osn-smp-bio-02a-1-saluran-pencernaan-mudah-sedang.md`
- [ ] `osn-smp-bio-02a-1-saluran-pencernaan-sedang-sulit.md`

**BIO-02a-2 · Kelenjar Pencernaan (Hati, Pankreas, Empedu)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-02a-2-kelenjar-pencernaan-campur.md`
- [ ] `osn-smp-bio-02a-2-kelenjar-pencernaan-mudah.md`
- [ ] `osn-smp-bio-02a-2-kelenjar-pencernaan-sedang.md`
- [ ] `osn-smp-bio-02a-2-kelenjar-pencernaan-sulit.md`
- [ ] `osn-smp-bio-02a-2-kelenjar-pencernaan-mudah-sedang.md`
- [ ] `osn-smp-bio-02a-2-kelenjar-pencernaan-sedang-sulit.md`

#### BIO-02b · Enzim Pencernaan
**BIO-02b-1 · Enzim di Mulut & Lambung (Amilase, Pepsin)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-02b-1-amilase-pepsin-campur.md`
- [ ] `osn-smp-bio-02b-1-amilase-pepsin-mudah.md`
- [ ] `osn-smp-bio-02b-1-amilase-pepsin-sedang.md`
- [ ] `osn-smp-bio-02b-1-amilase-pepsin-sulit.md`
- [ ] `osn-smp-bio-02b-1-amilase-pepsin-mudah-sedang.md`
- [ ] `osn-smp-bio-02b-1-amilase-pepsin-sedang-sulit.md`

**BIO-02b-2 · Enzim di Usus & Pankreas (Tripsin, Lipase, dll)** (fokus Prov)
- [ ] `osn-smp-bio-02b-2-tripsin-lipase-campur.md`
- [ ] `osn-smp-bio-02b-2-tripsin-lipase-mudah.md`
- [ ] `osn-smp-bio-02b-2-tripsin-lipase-sedang.md`
- [ ] `osn-smp-bio-02b-2-tripsin-lipase-sulit.md`
- [ ] `osn-smp-bio-02b-2-tripsin-lipase-mudah-sedang.md`
- [ ] `osn-smp-bio-02b-2-tripsin-lipase-sedang-sulit.md`

#### BIO-02c · Gangguan Sistem Pencernaan
**BIO-02c-1 · Gangguan Lambung & Usus (Gastritis, Diare, Sembelit, Apendisitis)** (fokus Kab)
- [ ] `osn-smp-bio-02c-1-gangguan-pencernaan-campur.md`
- [ ] `osn-smp-bio-02c-1-gangguan-pencernaan-mudah.md`
- [ ] `osn-smp-bio-02c-1-gangguan-pencernaan-sedang.md`
- [ ] `osn-smp-bio-02c-1-gangguan-pencernaan-sulit.md`
- [ ] `osn-smp-bio-02c-1-gangguan-pencernaan-mudah-sedang.md`
- [ ] `osn-smp-bio-02c-1-gangguan-pencernaan-sedang-sulit.md`

#### BIO-02d · Sistem Pernapasan - Organ & Mekanisme
**BIO-02d-1 · Organ Pernapasan (Hidung→Alveolus)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-02d-1-organ-pernapasan-campur.md`
- [ ] `osn-smp-bio-02d-1-organ-pernapasan-mudah.md`
- [ ] `osn-smp-bio-02d-1-organ-pernapasan-sedang.md`
- [ ] `osn-smp-bio-02d-1-organ-pernapasan-sulit.md`
- [ ] `osn-smp-bio-02d-1-organ-pernapasan-mudah-sedang.md`
- [ ] `osn-smp-bio-02d-1-organ-pernapasan-sedang-sulit.md`

**BIO-02d-2 · Mekanisme Inspirasi-Ekspirasi & Pertukaran Gas di Alveolus** (fokus Prov)
- [ ] `osn-smp-bio-02d-2-mekanisme-pertukaran-gas-campur.md`
- [ ] `osn-smp-bio-02d-2-mekanisme-pertukaran-gas-mudah.md`
- [ ] `osn-smp-bio-02d-2-mekanisme-pertukaran-gas-sedang.md`
- [ ] `osn-smp-bio-02d-2-mekanisme-pertukaran-gas-sulit.md`
- [ ] `osn-smp-bio-02d-2-mekanisme-pertukaran-gas-mudah-sedang.md`
- [ ] `osn-smp-bio-02d-2-mekanisme-pertukaran-gas-sedang-sulit.md`

#### BIO-02e · Pernapasan Dada vs Perut, Kapasitas Paru
**BIO-02e-1 · Pernapasan Dada vs Perut (Otot Terlibat)** (fokus Prov)
- [ ] `osn-smp-bio-02e-1-dada-vs-perut-campur.md`
- [ ] `osn-smp-bio-02e-1-dada-vs-perut-mudah.md`
- [ ] `osn-smp-bio-02e-1-dada-vs-perut-sedang.md`
- [ ] `osn-smp-bio-02e-1-dada-vs-perut-sulit.md`
- [ ] `osn-smp-bio-02e-1-dada-vs-perut-mudah-sedang.md`
- [ ] `osn-smp-bio-02e-1-dada-vs-perut-sedang-sulit.md`

**BIO-02e-2 · Volume & Kapasitas Paru (TV, IRV, ERV, RV, VC, TLC)** (fokus Prov–Nas)
- [ ] `osn-smp-bio-02e-2-volume-kapasitas-paru-campur.md`
- [ ] `osn-smp-bio-02e-2-volume-kapasitas-paru-mudah.md`
- [ ] `osn-smp-bio-02e-2-volume-kapasitas-paru-sedang.md`
- [ ] `osn-smp-bio-02e-2-volume-kapasitas-paru-sulit.md`
- [ ] `osn-smp-bio-02e-2-volume-kapasitas-paru-mudah-sedang.md`
- [ ] `osn-smp-bio-02e-2-volume-kapasitas-paru-sedang-sulit.md`

#### BIO-02f · Gangguan Pernapasan
**BIO-02f-1 · Penyakit Pernapasan (Asma, TBC, Bronkitis, Pneumonia)** (fokus Kab)
- [ ] `osn-smp-bio-02f-1-penyakit-pernapasan-campur.md`
- [ ] `osn-smp-bio-02f-1-penyakit-pernapasan-mudah.md`
- [ ] `osn-smp-bio-02f-1-penyakit-pernapasan-sedang.md`
- [ ] `osn-smp-bio-02f-1-penyakit-pernapasan-sulit.md`
- [ ] `osn-smp-bio-02f-1-penyakit-pernapasan-mudah-sedang.md`
- [ ] `osn-smp-bio-02f-1-penyakit-pernapasan-sedang-sulit.md`

#### BIO-02g · Jantung & Pembuluh Darah
**BIO-02g-1 · Struktur Jantung (Bilik, Serambi, Katup)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-02g-1-struktur-jantung-campur.md`
- [ ] `osn-smp-bio-02g-1-struktur-jantung-mudah.md`
- [ ] `osn-smp-bio-02g-1-struktur-jantung-sedang.md`
- [ ] `osn-smp-bio-02g-1-struktur-jantung-sulit.md`
- [ ] `osn-smp-bio-02g-1-struktur-jantung-mudah-sedang.md`
- [ ] `osn-smp-bio-02g-1-struktur-jantung-sedang-sulit.md`

**BIO-02g-2 · Pembuluh Darah (Arteri, Vena, Kapiler) & Sirkulasi (Besar & Kecil)** (fokus Prov)
- [ ] `osn-smp-bio-02g-2-pembuluh-sirkulasi-campur.md`
- [ ] `osn-smp-bio-02g-2-pembuluh-sirkulasi-mudah.md`
- [ ] `osn-smp-bio-02g-2-pembuluh-sirkulasi-sedang.md`
- [ ] `osn-smp-bio-02g-2-pembuluh-sirkulasi-sulit.md`
- [ ] `osn-smp-bio-02g-2-pembuluh-sirkulasi-mudah-sedang.md`
- [ ] `osn-smp-bio-02g-2-pembuluh-sirkulasi-sedang-sulit.md`

#### BIO-02h · Komponen Darah
**BIO-02h-1 · Sel Darah (Eritrosit, Leukosit, Trombosit) & Plasma** (fokus Kab–Prov)
- [ ] `osn-smp-bio-02h-1-komponen-darah-campur.md`
- [ ] `osn-smp-bio-02h-1-komponen-darah-mudah.md`
- [ ] `osn-smp-bio-02h-1-komponen-darah-sedang.md`
- [ ] `osn-smp-bio-02h-1-komponen-darah-sulit.md`
- [ ] `osn-smp-bio-02h-1-komponen-darah-mudah-sedang.md`
- [ ] `osn-smp-bio-02h-1-komponen-darah-sedang-sulit.md`

#### BIO-02i · Golongan Darah
**BIO-02i-1 · Golongan ABO & Sistem Rhesus** (fokus Kab–Prov)
- [ ] `osn-smp-bio-02i-1-abo-rhesus-campur.md`
- [ ] `osn-smp-bio-02i-1-abo-rhesus-mudah.md`
- [ ] `osn-smp-bio-02i-1-abo-rhesus-sedang.md`
- [ ] `osn-smp-bio-02i-1-abo-rhesus-sulit.md`
- [ ] `osn-smp-bio-02i-1-abo-rhesus-mudah-sedang.md`
- [ ] `osn-smp-bio-02i-1-abo-rhesus-sedang-sulit.md`

**BIO-02i-2 · Donor & Resipien Transfusi (Tabel Kompatibilitas)** (fokus Prov)
- [ ] `osn-smp-bio-02i-2-donor-resipien-campur.md`
- [ ] `osn-smp-bio-02i-2-donor-resipien-mudah.md`
- [ ] `osn-smp-bio-02i-2-donor-resipien-sedang.md`
- [ ] `osn-smp-bio-02i-2-donor-resipien-sulit.md`
- [ ] `osn-smp-bio-02i-2-donor-resipien-mudah-sedang.md`
- [ ] `osn-smp-bio-02i-2-donor-resipien-sedang-sulit.md`

#### BIO-02j · Gangguan Peredaran Darah
**BIO-02j-1 · Penyakit Jantung & Pembuluh (Hipertensi, Anemia, Leukimia)** (fokus Kab)
- [ ] `osn-smp-bio-02j-1-penyakit-jantung-darah-campur.md`
- [ ] `osn-smp-bio-02j-1-penyakit-jantung-darah-mudah.md`
- [ ] `osn-smp-bio-02j-1-penyakit-jantung-darah-sedang.md`
- [ ] `osn-smp-bio-02j-1-penyakit-jantung-darah-sulit.md`
- [ ] `osn-smp-bio-02j-1-penyakit-jantung-darah-mudah-sedang.md`
- [ ] `osn-smp-bio-02j-1-penyakit-jantung-darah-sedang-sulit.md`

### BIO-03 · Sistem Organ II (Ekskresi, Reproduksi, Saraf, Hormon, Indera) (~22 sub-sub-bab)

#### BIO-03a · Ginjal & Nefron
**BIO-03a-1 · Struktur Ginjal & Nefron (Glomerulus, Tubulus)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-03a-1-struktur-ginjal-nefron-campur.md`
- [ ] `osn-smp-bio-03a-1-struktur-ginjal-nefron-mudah.md`
- [ ] `osn-smp-bio-03a-1-struktur-ginjal-nefron-sedang.md`
- [ ] `osn-smp-bio-03a-1-struktur-ginjal-nefron-sulit.md`
- [ ] `osn-smp-bio-03a-1-struktur-ginjal-nefron-mudah-sedang.md`
- [ ] `osn-smp-bio-03a-1-struktur-ginjal-nefron-sedang-sulit.md`

**BIO-03a-2 · Proses Pembentukan Urin (Filtrasi, Reabsorpsi, Augmentasi)** (fokus Prov)
- [ ] `osn-smp-bio-03a-2-pembentukan-urin-campur.md`
- [ ] `osn-smp-bio-03a-2-pembentukan-urin-mudah.md`
- [ ] `osn-smp-bio-03a-2-pembentukan-urin-sedang.md`
- [ ] `osn-smp-bio-03a-2-pembentukan-urin-sulit.md`
- [ ] `osn-smp-bio-03a-2-pembentukan-urin-mudah-sedang.md`
- [ ] `osn-smp-bio-03a-2-pembentukan-urin-sedang-sulit.md`

#### BIO-03b · Ekskresi Kulit, Paru-paru, Hati
**BIO-03b-1 · Kulit & Kelenjar Keringat** (fokus Kab)
- [ ] `osn-smp-bio-03b-1-kulit-keringat-campur.md`
- [ ] `osn-smp-bio-03b-1-kulit-keringat-mudah.md`
- [ ] `osn-smp-bio-03b-1-kulit-keringat-sedang.md`
- [ ] `osn-smp-bio-03b-1-kulit-keringat-sulit.md`
- [ ] `osn-smp-bio-03b-1-kulit-keringat-mudah-sedang.md`
- [ ] `osn-smp-bio-03b-1-kulit-keringat-sedang-sulit.md`

**BIO-03b-2 · Paru-paru (CO2 & Uap Air) & Hati (Bilirubin, Urea)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-03b-2-paru-hati-ekskresi-campur.md`
- [ ] `osn-smp-bio-03b-2-paru-hati-ekskresi-mudah.md`
- [ ] `osn-smp-bio-03b-2-paru-hati-ekskresi-sedang.md`
- [ ] `osn-smp-bio-03b-2-paru-hati-ekskresi-sulit.md`
- [ ] `osn-smp-bio-03b-2-paru-hati-ekskresi-mudah-sedang.md`
- [ ] `osn-smp-bio-03b-2-paru-hati-ekskresi-sedang-sulit.md`

#### BIO-03c · Gangguan Ekskresi
**BIO-03c-1 · Penyakit Ginjal & Kulit (Diabetes Insipidus/Mellitus, Batu Ginjal, Hepatitis)** (fokus Kab)
- [ ] `osn-smp-bio-03c-1-penyakit-ekskresi-campur.md`
- [ ] `osn-smp-bio-03c-1-penyakit-ekskresi-mudah.md`
- [ ] `osn-smp-bio-03c-1-penyakit-ekskresi-sedang.md`
- [ ] `osn-smp-bio-03c-1-penyakit-ekskresi-sulit.md`
- [ ] `osn-smp-bio-03c-1-penyakit-ekskresi-mudah-sedang.md`
- [ ] `osn-smp-bio-03c-1-penyakit-ekskresi-sedang-sulit.md`

#### BIO-03d · Reproduksi Pria & Wanita
**BIO-03d-1 · Organ Reproduksi Pria & Spermatogenesis** (fokus Kab–Prov)
- [ ] `osn-smp-bio-03d-1-reproduksi-pria-campur.md`
- [ ] `osn-smp-bio-03d-1-reproduksi-pria-mudah.md`
- [ ] `osn-smp-bio-03d-1-reproduksi-pria-sedang.md`
- [ ] `osn-smp-bio-03d-1-reproduksi-pria-sulit.md`
- [ ] `osn-smp-bio-03d-1-reproduksi-pria-mudah-sedang.md`
- [ ] `osn-smp-bio-03d-1-reproduksi-pria-sedang-sulit.md`

**BIO-03d-2 · Organ Reproduksi Wanita & Oogenesis** (fokus Kab–Prov)
- [ ] `osn-smp-bio-03d-2-reproduksi-wanita-campur.md`
- [ ] `osn-smp-bio-03d-2-reproduksi-wanita-mudah.md`
- [ ] `osn-smp-bio-03d-2-reproduksi-wanita-sedang.md`
- [ ] `osn-smp-bio-03d-2-reproduksi-wanita-sulit.md`
- [ ] `osn-smp-bio-03d-2-reproduksi-wanita-mudah-sedang.md`
- [ ] `osn-smp-bio-03d-2-reproduksi-wanita-sedang-sulit.md`

#### BIO-03e · Kehamilan, Pubertas, Menstruasi
**BIO-03e-1 · Siklus Menstruasi (Fase-fase & Hormon)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-03e-1-siklus-menstruasi-campur.md`
- [ ] `osn-smp-bio-03e-1-siklus-menstruasi-mudah.md`
- [ ] `osn-smp-bio-03e-1-siklus-menstruasi-sedang.md`
- [ ] `osn-smp-bio-03e-1-siklus-menstruasi-sulit.md`
- [ ] `osn-smp-bio-03e-1-siklus-menstruasi-mudah-sedang.md`
- [ ] `osn-smp-bio-03e-1-siklus-menstruasi-sedang-sulit.md`

**BIO-03e-2 · Fertilisasi, Kehamilan, Perkembangan Embrio** (fokus Prov)
- [ ] `osn-smp-bio-03e-2-fertilisasi-kehamilan-campur.md`
- [ ] `osn-smp-bio-03e-2-fertilisasi-kehamilan-mudah.md`
- [ ] `osn-smp-bio-03e-2-fertilisasi-kehamilan-sedang.md`
- [ ] `osn-smp-bio-03e-2-fertilisasi-kehamilan-sulit.md`
- [ ] `osn-smp-bio-03e-2-fertilisasi-kehamilan-mudah-sedang.md`
- [ ] `osn-smp-bio-03e-2-fertilisasi-kehamilan-sedang-sulit.md`

#### BIO-03f · Penyakit Reproduksi
**BIO-03f-1 · Penyakit Menular Seksual (Sifilis, Gonore, HIV/AIDS, dll)** (fokus Kab)
- [ ] `osn-smp-bio-03f-1-pms-campur.md`
- [ ] `osn-smp-bio-03f-1-pms-mudah.md`
- [ ] `osn-smp-bio-03f-1-pms-sedang.md`
- [ ] `osn-smp-bio-03f-1-pms-sulit.md`
- [ ] `osn-smp-bio-03f-1-pms-mudah-sedang.md`
- [ ] `osn-smp-bio-03f-1-pms-sedang-sulit.md`

#### BIO-03g · Neuron & Otak
**BIO-03g-1 · Struktur Neuron & Fungsi (Dendrit, Akson, Sinaps)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-03g-1-neuron-struktur-campur.md`
- [ ] `osn-smp-bio-03g-1-neuron-struktur-mudah.md`
- [ ] `osn-smp-bio-03g-1-neuron-struktur-sedang.md`
- [ ] `osn-smp-bio-03g-1-neuron-struktur-sulit.md`
- [ ] `osn-smp-bio-03g-1-neuron-struktur-mudah-sedang.md`
- [ ] `osn-smp-bio-03g-1-neuron-struktur-sedang-sulit.md`

**BIO-03g-2 · Bagian Otak (Cerebrum, Cerebellum, Medulla, Diensefalon)** (fokus Prov)
- [ ] `osn-smp-bio-03g-2-bagian-otak-campur.md`
- [ ] `osn-smp-bio-03g-2-bagian-otak-mudah.md`
- [ ] `osn-smp-bio-03g-2-bagian-otak-sedang.md`
- [ ] `osn-smp-bio-03g-2-bagian-otak-sulit.md`
- [ ] `osn-smp-bio-03g-2-bagian-otak-mudah-sedang.md`
- [ ] `osn-smp-bio-03g-2-bagian-otak-sedang-sulit.md`

#### BIO-03h · Refleks & Aksi
**BIO-03h-1 · Lengkung Refleks (Reseptor → Saraf Sensorik → Otak/Sumsum → Efektor)** (fokus Kab)
- [ ] `osn-smp-bio-03h-1-lengkung-refleks-campur.md`
- [ ] `osn-smp-bio-03h-1-lengkung-refleks-mudah.md`
- [ ] `osn-smp-bio-03h-1-lengkung-refleks-sedang.md`
- [ ] `osn-smp-bio-03h-1-lengkung-refleks-sulit.md`
- [ ] `osn-smp-bio-03h-1-lengkung-refleks-mudah-sedang.md`
- [ ] `osn-smp-bio-03h-1-lengkung-refleks-sedang-sulit.md`

#### BIO-03i · Hormon Endokrin
**BIO-03i-1 · Kelenjar Endokrin & Hormonnya (Hipofisis, Tiroid, Pankreas, Adrenal)** (fokus Prov)
- [ ] `osn-smp-bio-03i-1-kelenjar-endokrin-campur.md`
- [ ] `osn-smp-bio-03i-1-kelenjar-endokrin-mudah.md`
- [ ] `osn-smp-bio-03i-1-kelenjar-endokrin-sedang.md`
- [ ] `osn-smp-bio-03i-1-kelenjar-endokrin-sulit.md`
- [ ] `osn-smp-bio-03i-1-kelenjar-endokrin-mudah-sedang.md`
- [ ] `osn-smp-bio-03i-1-kelenjar-endokrin-sedang-sulit.md`

#### BIO-03j · Indera Penglihatan & Pendengaran
**BIO-03j-1 · Mata (Anatomi & Proses Melihat)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-03j-1-mata-anatomi-melihat-campur.md`
- [ ] `osn-smp-bio-03j-1-mata-anatomi-melihat-mudah.md`
- [ ] `osn-smp-bio-03j-1-mata-anatomi-melihat-sedang.md`
- [ ] `osn-smp-bio-03j-1-mata-anatomi-melihat-sulit.md`
- [ ] `osn-smp-bio-03j-1-mata-anatomi-melihat-mudah-sedang.md`
- [ ] `osn-smp-bio-03j-1-mata-anatomi-melihat-sedang-sulit.md`

**BIO-03j-2 · Telinga (Anatomi & Proses Mendengar/Keseimbangan)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-03j-2-telinga-mendengar-campur.md`
- [ ] `osn-smp-bio-03j-2-telinga-mendengar-mudah.md`
- [ ] `osn-smp-bio-03j-2-telinga-mendengar-sedang.md`
- [ ] `osn-smp-bio-03j-2-telinga-mendengar-sulit.md`
- [ ] `osn-smp-bio-03j-2-telinga-mendengar-mudah-sedang.md`
- [ ] `osn-smp-bio-03j-2-telinga-mendengar-sedang-sulit.md`

#### BIO-03k · Indera Penciuman, Pengecap, Peraba
**BIO-03k-1 · Hidung & Lidah (Reseptor Bau & Rasa)** (fokus Kab)
- [ ] `osn-smp-bio-03k-1-hidung-lidah-campur.md`
- [ ] `osn-smp-bio-03k-1-hidung-lidah-mudah.md`
- [ ] `osn-smp-bio-03k-1-hidung-lidah-sedang.md`
- [ ] `osn-smp-bio-03k-1-hidung-lidah-sulit.md`
- [ ] `osn-smp-bio-03k-1-hidung-lidah-mudah-sedang.md`
- [ ] `osn-smp-bio-03k-1-hidung-lidah-sedang-sulit.md`

**BIO-03k-2 · Kulit (Reseptor Sentuh, Suhu, Sakit)** (fokus Kab)
- [ ] `osn-smp-bio-03k-2-kulit-reseptor-campur.md`
- [ ] `osn-smp-bio-03k-2-kulit-reseptor-mudah.md`
- [ ] `osn-smp-bio-03k-2-kulit-reseptor-sedang.md`
- [ ] `osn-smp-bio-03k-2-kulit-reseptor-sulit.md`
- [ ] `osn-smp-bio-03k-2-kulit-reseptor-mudah-sedang.md`
- [ ] `osn-smp-bio-03k-2-kulit-reseptor-sedang-sulit.md`

### BIO-04 · Struktur & Fungsi Tumbuhan, Fotosintesis (~20 sub-sub-bab)

#### BIO-04a · Akar
**BIO-04a-1 · Akar Tunggang vs Akar Serabut & Bagian-bagiannya** (fokus Kab)
- [ ] `osn-smp-bio-04a-1-tunggang-serabut-campur.md`
- [ ] `osn-smp-bio-04a-1-tunggang-serabut-mudah.md`
- [ ] `osn-smp-bio-04a-1-tunggang-serabut-sedang.md`
- [ ] `osn-smp-bio-04a-1-tunggang-serabut-sulit.md`
- [ ] `osn-smp-bio-04a-1-tunggang-serabut-mudah-sedang.md`
- [ ] `osn-smp-bio-04a-1-tunggang-serabut-sedang-sulit.md`

**BIO-04a-2 · Anatomi Akar (Epidermis, Korteks, Endodermis, Silinder Pusat)** (fokus Prov)
- [ ] `osn-smp-bio-04a-2-anatomi-akar-campur.md`
- [ ] `osn-smp-bio-04a-2-anatomi-akar-mudah.md`
- [ ] `osn-smp-bio-04a-2-anatomi-akar-sedang.md`
- [ ] `osn-smp-bio-04a-2-anatomi-akar-sulit.md`
- [ ] `osn-smp-bio-04a-2-anatomi-akar-mudah-sedang.md`
- [ ] `osn-smp-bio-04a-2-anatomi-akar-sedang-sulit.md`

#### BIO-04b · Batang
**BIO-04b-1 · Anatomi Batang Monokotil vs Dikotil** (fokus Kab–Prov)
- [ ] `osn-smp-bio-04b-1-batang-mono-dikotil-campur.md`
- [ ] `osn-smp-bio-04b-1-batang-mono-dikotil-mudah.md`
- [ ] `osn-smp-bio-04b-1-batang-mono-dikotil-sedang.md`
- [ ] `osn-smp-bio-04b-1-batang-mono-dikotil-sulit.md`
- [ ] `osn-smp-bio-04b-1-batang-mono-dikotil-mudah-sedang.md`
- [ ] `osn-smp-bio-04b-1-batang-mono-dikotil-sedang-sulit.md`

#### BIO-04c · Daun
**BIO-04c-1 · Struktur Daun (Epidermis, Mesofil, Berkas Pengangkut)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-04c-1-struktur-daun-campur.md`
- [ ] `osn-smp-bio-04c-1-struktur-daun-mudah.md`
- [ ] `osn-smp-bio-04c-1-struktur-daun-sedang.md`
- [ ] `osn-smp-bio-04c-1-struktur-daun-sulit.md`
- [ ] `osn-smp-bio-04c-1-struktur-daun-mudah-sedang.md`
- [ ] `osn-smp-bio-04c-1-struktur-daun-sedang-sulit.md`

**BIO-04c-2 · Stomata & Pertukaran Gas** (fokus Prov)
- [ ] `osn-smp-bio-04c-2-stomata-pertukaran-gas-campur.md`
- [ ] `osn-smp-bio-04c-2-stomata-pertukaran-gas-mudah.md`
- [ ] `osn-smp-bio-04c-2-stomata-pertukaran-gas-sedang.md`
- [ ] `osn-smp-bio-04c-2-stomata-pertukaran-gas-sulit.md`
- [ ] `osn-smp-bio-04c-2-stomata-pertukaran-gas-mudah-sedang.md`
- [ ] `osn-smp-bio-04c-2-stomata-pertukaran-gas-sedang-sulit.md`

#### BIO-04d · Bunga, Buah, Biji
**BIO-04d-1 · Bagian-bagian Bunga Sempurna & Tidak Sempurna** (fokus Kab)
- [ ] `osn-smp-bio-04d-1-bagian-bunga-campur.md`
- [ ] `osn-smp-bio-04d-1-bagian-bunga-mudah.md`
- [ ] `osn-smp-bio-04d-1-bagian-bunga-sedang.md`
- [ ] `osn-smp-bio-04d-1-bagian-bunga-sulit.md`
- [ ] `osn-smp-bio-04d-1-bagian-bunga-mudah-sedang.md`
- [ ] `osn-smp-bio-04d-1-bagian-bunga-sedang-sulit.md`

**BIO-04d-2 · Pembentukan Buah & Biji (dari Bakal Buah & Bakal Biji)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-04d-2-pembentukan-buah-biji-campur.md`
- [ ] `osn-smp-bio-04d-2-pembentukan-buah-biji-mudah.md`
- [ ] `osn-smp-bio-04d-2-pembentukan-buah-biji-sedang.md`
- [ ] `osn-smp-bio-04d-2-pembentukan-buah-biji-sulit.md`
- [ ] `osn-smp-bio-04d-2-pembentukan-buah-biji-mudah-sedang.md`
- [ ] `osn-smp-bio-04d-2-pembentukan-buah-biji-sedang-sulit.md`

#### BIO-04e · Xilem & Floem
**BIO-04e-1 · Xilem (Transpor Air) & Mekanisme Naiknya Air** (fokus Kab–Prov)
- [ ] `osn-smp-bio-04e-1-xilem-air-campur.md`
- [ ] `osn-smp-bio-04e-1-xilem-air-mudah.md`
- [ ] `osn-smp-bio-04e-1-xilem-air-sedang.md`
- [ ] `osn-smp-bio-04e-1-xilem-air-sulit.md`
- [ ] `osn-smp-bio-04e-1-xilem-air-mudah-sedang.md`
- [ ] `osn-smp-bio-04e-1-xilem-air-sedang-sulit.md`

**BIO-04e-2 · Floem (Transpor Hasil Fotosintesis)** (fokus Prov)
- [ ] `osn-smp-bio-04e-2-floem-hasil-foto-campur.md`
- [ ] `osn-smp-bio-04e-2-floem-hasil-foto-mudah.md`
- [ ] `osn-smp-bio-04e-2-floem-hasil-foto-sedang.md`
- [ ] `osn-smp-bio-04e-2-floem-hasil-foto-sulit.md`
- [ ] `osn-smp-bio-04e-2-floem-hasil-foto-mudah-sedang.md`
- [ ] `osn-smp-bio-04e-2-floem-hasil-foto-sedang-sulit.md`

#### BIO-04f · Fotosintesis
**BIO-04f-1 · Persamaan Fotosintesis & Tempat Berlangsungnya** (fokus Kab–Prov)
- [ ] `osn-smp-bio-04f-1-persamaan-foto-campur.md`
- [ ] `osn-smp-bio-04f-1-persamaan-foto-mudah.md`
- [ ] `osn-smp-bio-04f-1-persamaan-foto-sedang.md`
- [ ] `osn-smp-bio-04f-1-persamaan-foto-sulit.md`
- [ ] `osn-smp-bio-04f-1-persamaan-foto-mudah-sedang.md`
- [ ] `osn-smp-bio-04f-1-persamaan-foto-sedang-sulit.md`

**BIO-04f-2 · Faktor yang Memengaruhi Fotosintesis (Cahaya, CO₂, Suhu, dll)** (fokus Prov)
- [ ] `osn-smp-bio-04f-2-faktor-foto-campur.md`
- [ ] `osn-smp-bio-04f-2-faktor-foto-mudah.md`
- [ ] `osn-smp-bio-04f-2-faktor-foto-sedang.md`
- [ ] `osn-smp-bio-04f-2-faktor-foto-sulit.md`
- [ ] `osn-smp-bio-04f-2-faktor-foto-mudah-sedang.md`
- [ ] `osn-smp-bio-04f-2-faktor-foto-sedang-sulit.md`

#### BIO-04g · Respirasi Tumbuhan
**BIO-04g-1 · Respirasi Aerob & Anaerob pada Tumbuhan** (fokus Kab–Prov)
- [ ] `osn-smp-bio-04g-1-respirasi-tumbuhan-campur.md`
- [ ] `osn-smp-bio-04g-1-respirasi-tumbuhan-mudah.md`
- [ ] `osn-smp-bio-04g-1-respirasi-tumbuhan-sedang.md`
- [ ] `osn-smp-bio-04g-1-respirasi-tumbuhan-sulit.md`
- [ ] `osn-smp-bio-04g-1-respirasi-tumbuhan-mudah-sedang.md`
- [ ] `osn-smp-bio-04g-1-respirasi-tumbuhan-sedang-sulit.md`

#### BIO-04h · Gerak Tumbuhan
**BIO-04h-1 · Tropisme (Fototropisme, Geotropisme, Hidrotropisme, dll)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-04h-1-tropisme-campur.md`
- [ ] `osn-smp-bio-04h-1-tropisme-mudah.md`
- [ ] `osn-smp-bio-04h-1-tropisme-sedang.md`
- [ ] `osn-smp-bio-04h-1-tropisme-sulit.md`
- [ ] `osn-smp-bio-04h-1-tropisme-mudah-sedang.md`
- [ ] `osn-smp-bio-04h-1-tropisme-sedang-sulit.md`

**BIO-04h-2 · Nasti & Taksis (Tigmonasti, Niktinasti, Fototaksis)** (fokus Prov)
- [ ] `osn-smp-bio-04h-2-nasti-taksis-campur.md`
- [ ] `osn-smp-bio-04h-2-nasti-taksis-mudah.md`
- [ ] `osn-smp-bio-04h-2-nasti-taksis-sedang.md`
- [ ] `osn-smp-bio-04h-2-nasti-taksis-sulit.md`
- [ ] `osn-smp-bio-04h-2-nasti-taksis-mudah-sedang.md`
- [ ] `osn-smp-bio-04h-2-nasti-taksis-sedang-sulit.md`

#### BIO-04i · Reproduksi Tumbuhan
**BIO-04i-1 · Reproduksi Vegetatif Alami & Buatan** (fokus Kab)
- [ ] `osn-smp-bio-04i-1-vegetatif-alami-buatan-campur.md`
- [ ] `osn-smp-bio-04i-1-vegetatif-alami-buatan-mudah.md`
- [ ] `osn-smp-bio-04i-1-vegetatif-alami-buatan-sedang.md`
- [ ] `osn-smp-bio-04i-1-vegetatif-alami-buatan-sulit.md`
- [ ] `osn-smp-bio-04i-1-vegetatif-alami-buatan-mudah-sedang.md`
- [ ] `osn-smp-bio-04i-1-vegetatif-alami-buatan-sedang-sulit.md`

**BIO-04i-2 · Reproduksi Generatif (Penyerbukan, Pembuahan)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-04i-2-generatif-penyerbukan-campur.md`
- [ ] `osn-smp-bio-04i-2-generatif-penyerbukan-mudah.md`
- [ ] `osn-smp-bio-04i-2-generatif-penyerbukan-sedang.md`
- [ ] `osn-smp-bio-04i-2-generatif-penyerbukan-sulit.md`
- [ ] `osn-smp-bio-04i-2-generatif-penyerbukan-mudah-sedang.md`
- [ ] `osn-smp-bio-04i-2-generatif-penyerbukan-sedang-sulit.md`

#### BIO-04j · Hormon Tumbuhan
**BIO-04j-1 · Hormon Pertumbuhan (Auksin, Giberelin, Sitokinin)** (fokus Prov)
- [ ] `osn-smp-bio-04j-1-hormon-pertumbuhan-campur.md`
- [ ] `osn-smp-bio-04j-1-hormon-pertumbuhan-mudah.md`
- [ ] `osn-smp-bio-04j-1-hormon-pertumbuhan-sedang.md`
- [ ] `osn-smp-bio-04j-1-hormon-pertumbuhan-sulit.md`
- [ ] `osn-smp-bio-04j-1-hormon-pertumbuhan-mudah-sedang.md`
- [ ] `osn-smp-bio-04j-1-hormon-pertumbuhan-sedang-sulit.md`

**BIO-04j-2 · Hormon Penghambat (ABA, Etilen)** (fokus Prov)
- [ ] `osn-smp-bio-04j-2-hormon-penghambat-campur.md`
- [ ] `osn-smp-bio-04j-2-hormon-penghambat-mudah.md`
- [ ] `osn-smp-bio-04j-2-hormon-penghambat-sedang.md`
- [ ] `osn-smp-bio-04j-2-hormon-penghambat-sulit.md`
- [ ] `osn-smp-bio-04j-2-hormon-penghambat-mudah-sedang.md`
- [ ] `osn-smp-bio-04j-2-hormon-penghambat-sedang-sulit.md`

### BIO-05 · Ekosistem, Lingkungan & Pencemaran (~22 sub-sub-bab)

#### BIO-05a · Komponen Ekosistem
**BIO-05a-1 · Komponen Biotik & Abiotik** (fokus Kab)
- [ ] `osn-smp-bio-05a-1-biotik-abiotik-campur.md`
- [ ] `osn-smp-bio-05a-1-biotik-abiotik-mudah.md`
- [ ] `osn-smp-bio-05a-1-biotik-abiotik-sedang.md`
- [ ] `osn-smp-bio-05a-1-biotik-abiotik-sulit.md`
- [ ] `osn-smp-bio-05a-1-biotik-abiotik-mudah-sedang.md`
- [ ] `osn-smp-bio-05a-1-biotik-abiotik-sedang-sulit.md`

**BIO-05a-2 · Tipe Ekosistem (Air, Darat, Buatan)** (fokus Kab)
- [ ] `osn-smp-bio-05a-2-tipe-ekosistem-campur.md`
- [ ] `osn-smp-bio-05a-2-tipe-ekosistem-mudah.md`
- [ ] `osn-smp-bio-05a-2-tipe-ekosistem-sedang.md`
- [ ] `osn-smp-bio-05a-2-tipe-ekosistem-sulit.md`
- [ ] `osn-smp-bio-05a-2-tipe-ekosistem-mudah-sedang.md`
- [ ] `osn-smp-bio-05a-2-tipe-ekosistem-sedang-sulit.md`

#### BIO-05b · Rantai & Jaring Makanan
**BIO-05b-1 · Rantai Makanan (Produsen → Konsumen → Pengurai)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-05b-1-rantai-makanan-campur.md`
- [ ] `osn-smp-bio-05b-1-rantai-makanan-mudah.md`
- [ ] `osn-smp-bio-05b-1-rantai-makanan-sedang.md`
- [ ] `osn-smp-bio-05b-1-rantai-makanan-sulit.md`
- [ ] `osn-smp-bio-05b-1-rantai-makanan-mudah-sedang.md`
- [ ] `osn-smp-bio-05b-1-rantai-makanan-sedang-sulit.md`

**BIO-05b-2 · Jaring Makanan & Analisis Saling Bergantung** (fokus Prov)
- [ ] `osn-smp-bio-05b-2-jaring-makanan-analisis-campur.md`
- [ ] `osn-smp-bio-05b-2-jaring-makanan-analisis-mudah.md`
- [ ] `osn-smp-bio-05b-2-jaring-makanan-analisis-sedang.md`
- [ ] `osn-smp-bio-05b-2-jaring-makanan-analisis-sulit.md`
- [ ] `osn-smp-bio-05b-2-jaring-makanan-analisis-mudah-sedang.md`
- [ ] `osn-smp-bio-05b-2-jaring-makanan-analisis-sedang-sulit.md`

#### BIO-05c · Piramida & Aliran Energi
**BIO-05c-1 · Piramida Makanan/Energi/Biomassa** (fokus Prov)
- [ ] `osn-smp-bio-05c-1-piramida-campur.md`
- [ ] `osn-smp-bio-05c-1-piramida-mudah.md`
- [ ] `osn-smp-bio-05c-1-piramida-sedang.md`
- [ ] `osn-smp-bio-05c-1-piramida-sulit.md`
- [ ] `osn-smp-bio-05c-1-piramida-mudah-sedang.md`
- [ ] `osn-smp-bio-05c-1-piramida-sedang-sulit.md`

**BIO-05c-2 · Aliran Energi & Aturan 10% (Hukum Lindeman)** (fokus Prov)
- [ ] `osn-smp-bio-05c-2-aliran-10-persen-campur.md`
- [ ] `osn-smp-bio-05c-2-aliran-10-persen-mudah.md`
- [ ] `osn-smp-bio-05c-2-aliran-10-persen-sedang.md`
- [ ] `osn-smp-bio-05c-2-aliran-10-persen-sulit.md`
- [ ] `osn-smp-bio-05c-2-aliran-10-persen-mudah-sedang.md`
- [ ] `osn-smp-bio-05c-2-aliran-10-persen-sedang-sulit.md`

#### BIO-05d · Daur Biogeokimia
**BIO-05d-1 · Daur Air (Hidrologi)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-05d-1-daur-air-campur.md`
- [ ] `osn-smp-bio-05d-1-daur-air-mudah.md`
- [ ] `osn-smp-bio-05d-1-daur-air-sedang.md`
- [ ] `osn-smp-bio-05d-1-daur-air-sulit.md`
- [ ] `osn-smp-bio-05d-1-daur-air-mudah-sedang.md`
- [ ] `osn-smp-bio-05d-1-daur-air-sedang-sulit.md`

**BIO-05d-2 · Daur Karbon & Daur Nitrogen** (fokus Prov)
- [ ] `osn-smp-bio-05d-2-daur-c-n-campur.md`
- [ ] `osn-smp-bio-05d-2-daur-c-n-mudah.md`
- [ ] `osn-smp-bio-05d-2-daur-c-n-sedang.md`
- [ ] `osn-smp-bio-05d-2-daur-c-n-sulit.md`
- [ ] `osn-smp-bio-05d-2-daur-c-n-mudah-sedang.md`
- [ ] `osn-smp-bio-05d-2-daur-c-n-sedang-sulit.md`

#### BIO-05e · Simbiosis
**BIO-05e-1 · Mutualisme (Contoh: Lebah-Bunga, Cacing-Akar)** (fokus Kab)
- [ ] `osn-smp-bio-05e-1-mutualisme-campur.md`
- [ ] `osn-smp-bio-05e-1-mutualisme-mudah.md`
- [ ] `osn-smp-bio-05e-1-mutualisme-sedang.md`
- [ ] `osn-smp-bio-05e-1-mutualisme-sulit.md`
- [ ] `osn-smp-bio-05e-1-mutualisme-mudah-sedang.md`
- [ ] `osn-smp-bio-05e-1-mutualisme-sedang-sulit.md`

**BIO-05e-2 · Komensalisme & Parasitisme** (fokus Kab)
- [ ] `osn-smp-bio-05e-2-komensal-parasit-campur.md`
- [ ] `osn-smp-bio-05e-2-komensal-parasit-mudah.md`
- [ ] `osn-smp-bio-05e-2-komensal-parasit-sedang.md`
- [ ] `osn-smp-bio-05e-2-komensal-parasit-sulit.md`
- [ ] `osn-smp-bio-05e-2-komensal-parasit-mudah-sedang.md`
- [ ] `osn-smp-bio-05e-2-komensal-parasit-sedang-sulit.md`

#### BIO-05f · Suksesi Ekosistem
**BIO-05f-1 · Suksesi Primer & Sekunder** (fokus Prov)
- [ ] `osn-smp-bio-05f-1-suksesi-primer-sekunder-campur.md`
- [ ] `osn-smp-bio-05f-1-suksesi-primer-sekunder-mudah.md`
- [ ] `osn-smp-bio-05f-1-suksesi-primer-sekunder-sedang.md`
- [ ] `osn-smp-bio-05f-1-suksesi-primer-sekunder-sulit.md`
- [ ] `osn-smp-bio-05f-1-suksesi-primer-sekunder-mudah-sedang.md`
- [ ] `osn-smp-bio-05f-1-suksesi-primer-sekunder-sedang-sulit.md`

#### BIO-05g · Pencemaran Air
**BIO-05g-1 · Pencemar Air & Dampaknya (Eutrofikasi, Limbah Industri)** (fokus Kab)
- [ ] `osn-smp-bio-05g-1-pencemar-air-campur.md`
- [ ] `osn-smp-bio-05g-1-pencemar-air-mudah.md`
- [ ] `osn-smp-bio-05g-1-pencemar-air-sedang.md`
- [ ] `osn-smp-bio-05g-1-pencemar-air-sulit.md`
- [ ] `osn-smp-bio-05g-1-pencemar-air-mudah-sedang.md`
- [ ] `osn-smp-bio-05g-1-pencemar-air-sedang-sulit.md`

#### BIO-05h · Pencemaran Udara
**BIO-05h-1 · Polutan Udara (SO₂, NOₓ, CO, PM2.5, Hujan Asam)** (fokus Kab)
- [ ] `osn-smp-bio-05h-1-polutan-udara-campur.md`
- [ ] `osn-smp-bio-05h-1-polutan-udara-mudah.md`
- [ ] `osn-smp-bio-05h-1-polutan-udara-sedang.md`
- [ ] `osn-smp-bio-05h-1-polutan-udara-sulit.md`
- [ ] `osn-smp-bio-05h-1-polutan-udara-mudah-sedang.md`
- [ ] `osn-smp-bio-05h-1-polutan-udara-sedang-sulit.md`

#### BIO-05i · Pencemaran Tanah & Suara
**BIO-05i-1 · Pencemar Tanah (Pestisida, Logam Berat) & Suara (Kebisingan)** (fokus Kab)
- [ ] `osn-smp-bio-05i-1-tanah-suara-campur.md`
- [ ] `osn-smp-bio-05i-1-tanah-suara-mudah.md`
- [ ] `osn-smp-bio-05i-1-tanah-suara-sedang.md`
- [ ] `osn-smp-bio-05i-1-tanah-suara-sulit.md`
- [ ] `osn-smp-bio-05i-1-tanah-suara-mudah-sedang.md`
- [ ] `osn-smp-bio-05i-1-tanah-suara-sedang-sulit.md`

#### BIO-05j · Pemanasan Global
**BIO-05j-1 · Efek Rumah Kaca & Gas Rumah Kaca** (fokus Kab–Prov)
- [ ] `osn-smp-bio-05j-1-efek-rumah-kaca-campur.md`
- [ ] `osn-smp-bio-05j-1-efek-rumah-kaca-mudah.md`
- [ ] `osn-smp-bio-05j-1-efek-rumah-kaca-sedang.md`
- [ ] `osn-smp-bio-05j-1-efek-rumah-kaca-sulit.md`
- [ ] `osn-smp-bio-05j-1-efek-rumah-kaca-mudah-sedang.md`
- [ ] `osn-smp-bio-05j-1-efek-rumah-kaca-sedang-sulit.md`

**BIO-05j-2 · Dampak & Mitigasi Pemanasan Global** (fokus Kab–Prov)
- [ ] `osn-smp-bio-05j-2-dampak-mitigasi-pg-campur.md`
- [ ] `osn-smp-bio-05j-2-dampak-mitigasi-pg-mudah.md`
- [ ] `osn-smp-bio-05j-2-dampak-mitigasi-pg-sedang.md`
- [ ] `osn-smp-bio-05j-2-dampak-mitigasi-pg-sulit.md`
- [ ] `osn-smp-bio-05j-2-dampak-mitigasi-pg-mudah-sedang.md`
- [ ] `osn-smp-bio-05j-2-dampak-mitigasi-pg-sedang-sulit.md`

#### BIO-05k · Pelestarian SDA
**BIO-05k-1 · Pelestarian In-situ & Ex-situ (Taman Nasional, Kebun Binatang)** (fokus Prov)
- [ ] `osn-smp-bio-05k-1-in-ex-situ-campur.md`
- [ ] `osn-smp-bio-05k-1-in-ex-situ-mudah.md`
- [ ] `osn-smp-bio-05k-1-in-ex-situ-sedang.md`
- [ ] `osn-smp-bio-05k-1-in-ex-situ-sulit.md`
- [ ] `osn-smp-bio-05k-1-in-ex-situ-mudah-sedang.md`
- [ ] `osn-smp-bio-05k-1-in-ex-situ-sedang-sulit.md`

### BIO-06 · Pewarisan Sifat & Bioteknologi (~17 sub-sub-bab)

#### BIO-06a · Materi Genetik
**BIO-06a-1 · DNA, RNA, Gen, Kromosom (Struktur & Hubungan)** (fokus Prov)
- [ ] `osn-smp-bio-06a-1-dna-rna-gen-kromosom-campur.md`
- [ ] `osn-smp-bio-06a-1-dna-rna-gen-kromosom-mudah.md`
- [ ] `osn-smp-bio-06a-1-dna-rna-gen-kromosom-sedang.md`
- [ ] `osn-smp-bio-06a-1-dna-rna-gen-kromosom-sulit.md`
- [ ] `osn-smp-bio-06a-1-dna-rna-gen-kromosom-mudah-sedang.md`
- [ ] `osn-smp-bio-06a-1-dna-rna-gen-kromosom-sedang-sulit.md`

#### BIO-06b · Monohibrid
**BIO-06b-1 · Persilangan Monohibrid Dominan-Resesif (P₁ → F₁ → F₂)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-06b-1-mono-dominan-resesif-campur.md`
- [ ] `osn-smp-bio-06b-1-mono-dominan-resesif-mudah.md`
- [ ] `osn-smp-bio-06b-1-mono-dominan-resesif-sedang.md`
- [ ] `osn-smp-bio-06b-1-mono-dominan-resesif-sulit.md`
- [ ] `osn-smp-bio-06b-1-mono-dominan-resesif-mudah-sedang.md`
- [ ] `osn-smp-bio-06b-1-mono-dominan-resesif-sedang-sulit.md`

**BIO-06b-2 · Rasio Fenotipe & Genotipe 3:1, 1:2:1** (fokus Kab–Prov)
- [ ] `osn-smp-bio-06b-2-rasio-3-1-campur.md`
- [ ] `osn-smp-bio-06b-2-rasio-3-1-mudah.md`
- [ ] `osn-smp-bio-06b-2-rasio-3-1-sedang.md`
- [ ] `osn-smp-bio-06b-2-rasio-3-1-sulit.md`
- [ ] `osn-smp-bio-06b-2-rasio-3-1-mudah-sedang.md`
- [ ] `osn-smp-bio-06b-2-rasio-3-1-sedang-sulit.md`

#### BIO-06c · Dihibrid
**BIO-06c-1 · Persilangan Dihibrid - Diagram Punnett 16 Kotak** (fokus Prov–Nas)
- [ ] `osn-smp-bio-06c-1-dihibrid-punnett-campur.md`
- [ ] `osn-smp-bio-06c-1-dihibrid-punnett-mudah.md`
- [ ] `osn-smp-bio-06c-1-dihibrid-punnett-sedang.md`
- [ ] `osn-smp-bio-06c-1-dihibrid-punnett-sulit.md`
- [ ] `osn-smp-bio-06c-1-dihibrid-punnett-mudah-sedang.md`
- [ ] `osn-smp-bio-06c-1-dihibrid-punnett-sedang-sulit.md`

**BIO-06c-2 · Rasio Fenotipe 9:3:3:1** (fokus Prov–Nas)
- [ ] `osn-smp-bio-06c-2-rasio-9-3-3-1-campur.md`
- [ ] `osn-smp-bio-06c-2-rasio-9-3-3-1-mudah.md`
- [ ] `osn-smp-bio-06c-2-rasio-9-3-3-1-sedang.md`
- [ ] `osn-smp-bio-06c-2-rasio-9-3-3-1-sulit.md`
- [ ] `osn-smp-bio-06c-2-rasio-9-3-3-1-mudah-sedang.md`
- [ ] `osn-smp-bio-06c-2-rasio-9-3-3-1-sedang-sulit.md`

#### BIO-06d · Intermediet
**BIO-06d-1 · Persilangan Intermediet (Rasio 1:2:1, Sifat Sama Dominan)** (fokus Prov)
- [ ] `osn-smp-bio-06d-1-intermediet-rasio-campur.md`
- [ ] `osn-smp-bio-06d-1-intermediet-rasio-mudah.md`
- [ ] `osn-smp-bio-06d-1-intermediet-rasio-sedang.md`
- [ ] `osn-smp-bio-06d-1-intermediet-rasio-sulit.md`
- [ ] `osn-smp-bio-06d-1-intermediet-rasio-mudah-sedang.md`
- [ ] `osn-smp-bio-06d-1-intermediet-rasio-sedang-sulit.md`

#### BIO-06e · Test Cross
**BIO-06e-1 · Test Cross (Mencari Genotipe Tidak Diketahui)** (fokus Prov)
- [ ] `osn-smp-bio-06e-1-test-cross-campur.md`
- [ ] `osn-smp-bio-06e-1-test-cross-mudah.md`
- [ ] `osn-smp-bio-06e-1-test-cross-sedang.md`
- [ ] `osn-smp-bio-06e-1-test-cross-sulit.md`
- [ ] `osn-smp-bio-06e-1-test-cross-mudah-sedang.md`
- [ ] `osn-smp-bio-06e-1-test-cross-sedang-sulit.md`

#### BIO-06f · Genetika pada Manusia
**BIO-06f-1 · Pewarisan Golongan Darah ABO** (fokus Prov–Nas)
- [ ] `osn-smp-bio-06f-1-pewarisan-abo-campur.md`
- [ ] `osn-smp-bio-06f-1-pewarisan-abo-mudah.md`
- [ ] `osn-smp-bio-06f-1-pewarisan-abo-sedang.md`
- [ ] `osn-smp-bio-06f-1-pewarisan-abo-sulit.md`
- [ ] `osn-smp-bio-06f-1-pewarisan-abo-mudah-sedang.md`
- [ ] `osn-smp-bio-06f-1-pewarisan-abo-sedang-sulit.md`

**BIO-06f-2 · Penyakit Genetik (Hemofilia, Buta Warna, Albino)** (fokus Prov–Nas)
- [ ] `osn-smp-bio-06f-2-penyakit-genetik-campur.md`
- [ ] `osn-smp-bio-06f-2-penyakit-genetik-mudah.md`
- [ ] `osn-smp-bio-06f-2-penyakit-genetik-sedang.md`
- [ ] `osn-smp-bio-06f-2-penyakit-genetik-sulit.md`
- [ ] `osn-smp-bio-06f-2-penyakit-genetik-mudah-sedang.md`
- [ ] `osn-smp-bio-06f-2-penyakit-genetik-sedang-sulit.md`

#### BIO-06g · Bioteknologi Konvensional
**BIO-06g-1 · Fermentasi Makanan (Tape, Tempe, Yogurt, Kecap)** (fokus Kab)
- [ ] `osn-smp-bio-06g-1-fermentasi-makanan-campur.md`
- [ ] `osn-smp-bio-06g-1-fermentasi-makanan-mudah.md`
- [ ] `osn-smp-bio-06g-1-fermentasi-makanan-sedang.md`
- [ ] `osn-smp-bio-06g-1-fermentasi-makanan-sulit.md`
- [ ] `osn-smp-bio-06g-1-fermentasi-makanan-mudah-sedang.md`
- [ ] `osn-smp-bio-06g-1-fermentasi-makanan-sedang-sulit.md`

#### BIO-06h · Bioteknologi Modern
**BIO-06h-1 · Rekayasa Genetika & DNA Rekombinan** (fokus Prov)
- [ ] `osn-smp-bio-06h-1-rekayasa-genetika-campur.md`
- [ ] `osn-smp-bio-06h-1-rekayasa-genetika-mudah.md`
- [ ] `osn-smp-bio-06h-1-rekayasa-genetika-sedang.md`
- [ ] `osn-smp-bio-06h-1-rekayasa-genetika-sulit.md`
- [ ] `osn-smp-bio-06h-1-rekayasa-genetika-mudah-sedang.md`
- [ ] `osn-smp-bio-06h-1-rekayasa-genetika-sedang-sulit.md`

**BIO-06h-2 · Kultur Jaringan & Kloning** (fokus Prov)
- [ ] `osn-smp-bio-06h-2-kultur-kloning-campur.md`
- [ ] `osn-smp-bio-06h-2-kultur-kloning-mudah.md`
- [ ] `osn-smp-bio-06h-2-kultur-kloning-sedang.md`
- [ ] `osn-smp-bio-06h-2-kultur-kloning-sulit.md`
- [ ] `osn-smp-bio-06h-2-kultur-kloning-mudah-sedang.md`
- [ ] `osn-smp-bio-06h-2-kultur-kloning-sedang-sulit.md`

#### BIO-06i · Bioteknologi dalam Kehidupan
**BIO-06i-1 · Bioteknologi Pertanian & Pangan (Hibrida, GMO)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-06i-1-bioteknologi-pertanian-campur.md`
- [ ] `osn-smp-bio-06i-1-bioteknologi-pertanian-mudah.md`
- [ ] `osn-smp-bio-06i-1-bioteknologi-pertanian-sedang.md`
- [ ] `osn-smp-bio-06i-1-bioteknologi-pertanian-sulit.md`
- [ ] `osn-smp-bio-06i-1-bioteknologi-pertanian-mudah-sedang.md`
- [ ] `osn-smp-bio-06i-1-bioteknologi-pertanian-sedang-sulit.md`

**BIO-06i-2 · Bioteknologi Kedokteran (Insulin, Vaksin, Antibodi Monoklonal)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-06i-2-bioteknologi-kedokteran-campur.md`
- [ ] `osn-smp-bio-06i-2-bioteknologi-kedokteran-mudah.md`
- [ ] `osn-smp-bio-06i-2-bioteknologi-kedokteran-sedang.md`
- [ ] `osn-smp-bio-06i-2-bioteknologi-kedokteran-sulit.md`
- [ ] `osn-smp-bio-06i-2-bioteknologi-kedokteran-mudah-sedang.md`
- [ ] `osn-smp-bio-06i-2-bioteknologi-kedokteran-sedang-sulit.md`

### BIO-07 · Zat Aditif, Adiktif & Kimia Kehidupan (~16 sub-sub-bab)

#### BIO-07a · Perubahan Zat
**BIO-07a-1 · Perubahan Fisika vs Kimia (Identifikasi)** (fokus Kab)
- [ ] `osn-smp-bio-07a-1-fisika-vs-kimia-campur.md`
- [ ] `osn-smp-bio-07a-1-fisika-vs-kimia-mudah.md`
- [ ] `osn-smp-bio-07a-1-fisika-vs-kimia-sedang.md`
- [ ] `osn-smp-bio-07a-1-fisika-vs-kimia-sulit.md`
- [ ] `osn-smp-bio-07a-1-fisika-vs-kimia-mudah-sedang.md`
- [ ] `osn-smp-bio-07a-1-fisika-vs-kimia-sedang-sulit.md`

#### BIO-07b · Wujud Zat
**BIO-07b-1 · Wujud Zat (Padat, Cair, Gas) & Perubahan Wujud (Mencair, Menguap, dll)** (fokus Kab)
- [ ] `osn-smp-bio-07b-1-wujud-perubahan-campur.md`
- [ ] `osn-smp-bio-07b-1-wujud-perubahan-mudah.md`
- [ ] `osn-smp-bio-07b-1-wujud-perubahan-sedang.md`
- [ ] `osn-smp-bio-07b-1-wujud-perubahan-sulit.md`
- [ ] `osn-smp-bio-07b-1-wujud-perubahan-mudah-sedang.md`
- [ ] `osn-smp-bio-07b-1-wujud-perubahan-sedang-sulit.md`

**BIO-07b-2 · Teori Partikel Zat & Susunan Molekul** (fokus Kab)
- [ ] `osn-smp-bio-07b-2-teori-partikel-campur.md`
- [ ] `osn-smp-bio-07b-2-teori-partikel-mudah.md`
- [ ] `osn-smp-bio-07b-2-teori-partikel-sedang.md`
- [ ] `osn-smp-bio-07b-2-teori-partikel-sulit.md`
- [ ] `osn-smp-bio-07b-2-teori-partikel-mudah-sedang.md`
- [ ] `osn-smp-bio-07b-2-teori-partikel-sedang-sulit.md`

#### BIO-07c · Unsur, Senyawa, Campuran
**BIO-07c-1 · Unsur vs Senyawa (Identifikasi & Lambang)** (fokus Kab)
- [ ] `osn-smp-bio-07c-1-unsur-senyawa-campur.md`
- [ ] `osn-smp-bio-07c-1-unsur-senyawa-mudah.md`
- [ ] `osn-smp-bio-07c-1-unsur-senyawa-sedang.md`
- [ ] `osn-smp-bio-07c-1-unsur-senyawa-sulit.md`
- [ ] `osn-smp-bio-07c-1-unsur-senyawa-mudah-sedang.md`
- [ ] `osn-smp-bio-07c-1-unsur-senyawa-sedang-sulit.md`

**BIO-07c-2 · Campuran Homogen vs Heterogen & Pemisahannya** (fokus Kab)
- [ ] `osn-smp-bio-07c-2-campuran-pemisahan-campur.md`
- [ ] `osn-smp-bio-07c-2-campuran-pemisahan-mudah.md`
- [ ] `osn-smp-bio-07c-2-campuran-pemisahan-sedang.md`
- [ ] `osn-smp-bio-07c-2-campuran-pemisahan-sulit.md`
- [ ] `osn-smp-bio-07c-2-campuran-pemisahan-mudah-sedang.md`
- [ ] `osn-smp-bio-07c-2-campuran-pemisahan-sedang-sulit.md`

#### BIO-07d · Atom, Molekul, Ion
**BIO-07d-1 · Konsep Atom (Inti, Elektron) & Molekul** (fokus Prov)
- [ ] `osn-smp-bio-07d-1-atom-molekul-konsep-campur.md`
- [ ] `osn-smp-bio-07d-1-atom-molekul-konsep-mudah.md`
- [ ] `osn-smp-bio-07d-1-atom-molekul-konsep-sedang.md`
- [ ] `osn-smp-bio-07d-1-atom-molekul-konsep-sulit.md`
- [ ] `osn-smp-bio-07d-1-atom-molekul-konsep-mudah-sedang.md`
- [ ] `osn-smp-bio-07d-1-atom-molekul-konsep-sedang-sulit.md`

**BIO-07d-2 · Ion Positif & Negatif (Kation, Anion)** (fokus Prov)
- [ ] `osn-smp-bio-07d-2-kation-anion-campur.md`
- [ ] `osn-smp-bio-07d-2-kation-anion-mudah.md`
- [ ] `osn-smp-bio-07d-2-kation-anion-sedang.md`
- [ ] `osn-smp-bio-07d-2-kation-anion-sulit.md`
- [ ] `osn-smp-bio-07d-2-kation-anion-mudah-sedang.md`
- [ ] `osn-smp-bio-07d-2-kation-anion-sedang-sulit.md`

#### BIO-07e · Zat Aditif Makanan
**BIO-07e-1 · Zat Aditif Alami vs Buatan (Pewarna, Pengawet, Penyedap)** (fokus Kab)
- [ ] `osn-smp-bio-07e-1-aditif-alami-buatan-campur.md`
- [ ] `osn-smp-bio-07e-1-aditif-alami-buatan-mudah.md`
- [ ] `osn-smp-bio-07e-1-aditif-alami-buatan-sedang.md`
- [ ] `osn-smp-bio-07e-1-aditif-alami-buatan-sulit.md`
- [ ] `osn-smp-bio-07e-1-aditif-alami-buatan-mudah-sedang.md`
- [ ] `osn-smp-bio-07e-1-aditif-alami-buatan-sedang-sulit.md`

#### BIO-07f · Zat Adiktif
**BIO-07f-1 · Nikotin, Kafein, Alkohol (Dampak pada Tubuh)** (fokus Kab)
- [ ] `osn-smp-bio-07f-1-nikotin-kafein-alkohol-campur.md`
- [ ] `osn-smp-bio-07f-1-nikotin-kafein-alkohol-mudah.md`
- [ ] `osn-smp-bio-07f-1-nikotin-kafein-alkohol-sedang.md`
- [ ] `osn-smp-bio-07f-1-nikotin-kafein-alkohol-sulit.md`
- [ ] `osn-smp-bio-07f-1-nikotin-kafein-alkohol-mudah-sedang.md`
- [ ] `osn-smp-bio-07f-1-nikotin-kafein-alkohol-sedang-sulit.md`

#### BIO-07g · Narkoba
**BIO-07g-1 · Jenis Narkoba (Stimulan, Depresan, Halusinogen) & Bahayanya** (fokus Kab)
- [ ] `osn-smp-bio-07g-1-jenis-narkoba-campur.md`
- [ ] `osn-smp-bio-07g-1-jenis-narkoba-mudah.md`
- [ ] `osn-smp-bio-07g-1-jenis-narkoba-sedang.md`
- [ ] `osn-smp-bio-07g-1-jenis-narkoba-sulit.md`
- [ ] `osn-smp-bio-07g-1-jenis-narkoba-mudah-sedang.md`
- [ ] `osn-smp-bio-07g-1-jenis-narkoba-sedang-sulit.md`

#### BIO-07h · Asam, Basa, Garam
**BIO-07h-1 · Identifikasi Asam-Basa-Garam (Sifat, Indikator)** (fokus Kab–Prov)
- [ ] `osn-smp-bio-07h-1-identifikasi-asbas-campur.md`
- [ ] `osn-smp-bio-07h-1-identifikasi-asbas-mudah.md`
- [ ] `osn-smp-bio-07h-1-identifikasi-asbas-sedang.md`
- [ ] `osn-smp-bio-07h-1-identifikasi-asbas-sulit.md`
- [ ] `osn-smp-bio-07h-1-identifikasi-asbas-mudah-sedang.md`
- [ ] `osn-smp-bio-07h-1-identifikasi-asbas-sedang-sulit.md`

**BIO-07h-2 · Indikator pH (Lakmus, Universal) & Skala pH** (fokus Kab–Prov)
- [ ] `osn-smp-bio-07h-2-indikator-ph-campur.md`
- [ ] `osn-smp-bio-07h-2-indikator-ph-mudah.md`
- [ ] `osn-smp-bio-07h-2-indikator-ph-sedang.md`
- [ ] `osn-smp-bio-07h-2-indikator-ph-sulit.md`
- [ ] `osn-smp-bio-07h-2-indikator-ph-mudah-sedang.md`
- [ ] `osn-smp-bio-07h-2-indikator-ph-sedang-sulit.md`

#### BIO-07i · Kimia di Rumah & Industri
**BIO-07i-1 · Bahan Kimia Sehari-hari (Pembersih, Pemutih, Cat)** (fokus Kab)
- [ ] `osn-smp-bio-07i-1-kimia-rumah-campur.md`
- [ ] `osn-smp-bio-07i-1-kimia-rumah-mudah.md`
- [ ] `osn-smp-bio-07i-1-kimia-rumah-sedang.md`
- [ ] `osn-smp-bio-07i-1-kimia-rumah-sulit.md`
- [ ] `osn-smp-bio-07i-1-kimia-rumah-mudah-sedang.md`
- [ ] `osn-smp-bio-07i-1-kimia-rumah-sedang-sulit.md`
