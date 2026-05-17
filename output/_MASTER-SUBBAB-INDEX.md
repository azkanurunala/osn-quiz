# OSN SD Prep — MASTER SUB-BAB INDEX

> Pemecahan lanjutan dari [_MASTER-INDEX.md](_MASTER-INDEX.md) — setiap bab dibedah jadi sub-bab,
> setiap sub-bab × 6 tingkat = 1 paket drill 100 soal terfokus pada satu sub-topik.
>
> **160 sub-bab × 6 tingkat = 960 file × 100 soal PG = 96.000 soal terfokus**
>
> Setiap file: 100 soal PG dengan analisis 4 opsi (sama standar mutu dengan MASTER-INDEX),
> tapi 100% materinya digali di satu sub-bab → drill mendalam per sub-topik.

---

## Konvensi Penamaan File

```
osn-sd-{mapel}-{kodeBab}{kodeSubbab}-{slug}-{tingkat}.md
```

- `kodeBab` = `01`–`08` (MTK) atau `01`–`05` (IPA)
- `kodeSubbab` = huruf kecil `a`, `b`, `c`, … `n` (urutan sesuai taksonomi)
- `slug` = ringkas, kebab-case
- `tingkat` = `campur` · `mudah` · `sedang` · `sulit` · `mudah-sedang` · `sedang-sulit`

**Contoh:** `osn-sd-mtk-01f-fpb-sulit.md` = MTK Bab 01 sub-bab f (FPB), 100 soal tingkat Nasional saja.

Untuk konvensi tingkat (komposisi soal Kab/Prov/Nas), distribusi, dan aturan kualitas — lihat [_MASTER-INDEX.md](_MASTER-INDEX.md) dan [SKILL.md](../osn-sd-prep-extracted/osn-sd-prep/SKILL.md).

> **Catatan:** Saat generate file sub-bab, **seluruh 100 soal harus pada sub-topik tunggal** itu — bukan campur lintas sub-bab. Variasi diciptakan melalui ragam konteks, angka, dan tipe soal khas OSN untuk sub-topik tersebut (lihat detail di [taksonomi-matematika.md](../osn-sd-prep-extracted/osn-sd-prep/references/taksonomi-matematika.md) dan [taksonomi-ipa.md](../osn-sd-prep-extracted/osn-sd-prep/references/taksonomi-ipa.md)).

---

## ⛔ Aturan Anti-Duplikasi (WAJIB)

Karena seluruh 100 soal per file berada di satu sub-topik yang sama, **risiko duplikasi sangat tinggi** dan harus dicegah secara aktif.

1. **Tetap 100 soal per file** — tidak boleh dipotong jadi 50/75/dsb untuk "menghindari pengulangan". Kalau sub-topik kelihatan sempit, perluas dengan ragam konteks (lihat aturan 4) — bukan dengan mengurangi jumlah.
2. **Tidak boleh ada dua soal yang sama persis dalam satu file** — bukan hanya angka, tapi juga **kombinasi (konteks + angka + struktur kalimat)** harus berbeda. Reword saja ≠ soal baru.
3. **Tidak boleh sama persis dengan soal di file sub-bab tingkat lain** (mis. soal nomor 12 di `…-mudah.md` tidak boleh sama persis dengan soal nomor 12 di `…-campur.md`). Kalau "tipe"-nya sama (mis. tipe "soal cerita FPB kantong-kelompok"), angka & konteksnya wajib diubah.
4. **Diversifikasi via 4 sumbu** — kombinasikan agar 100 soal terasa beda:
   - **Konteks**: sekolah, pasar/jual-beli, olahraga, perjalanan, dapur/masak, kebun/pertanian, sains/lab, rumah tangga, transportasi, alam, perayaan/hari besar.
   - **Angka**: nilai berbeda (jangan pakai 24 & 36 di tiap soal FPB; rotasikan ke 18-30, 45-75, 12-20, dst). Hindari mengulang triple/pair angka yang sama.
   - **Subjek/aktor**: variasikan nama (Andi, Sari, Pak Budi, Bu Rina, Koko, Dimas, kelompok kelas, panitia, regu, dst) — jangan semua soal pakai "Andi".
   - **Sudut tanya**: tanyakan yang lain — "berapa banyak…", "yang manakah…", "jika …, maka…", "berapa selisih…", "kapan terjadi…", "manakah pernyataan yang benar…".
5. **Tipe soal khas OSN boleh diulang** — yang dilarang adalah **soal identik**. Mis. 100 soal FPB boleh berisi 30+ tipe "kantong terbanyak", tapi tiap soal kantong harus pakai bilangan/konteks/subjek yang berbeda.
6. **Verifikasi sebelum save** — sebelum tutup file, scan ulang 100 soal:
   - Apakah ada dua soal dengan struktur kalimat ≥80% sama? Ubah salah satu.
   - Apakah ada angka/triple yang dipakai >2× tanpa alasan? Rotasi.
   - Apakah konteks didominasi 1-2 setting saja? Sebar.
7. **Lintas-tingkat per sub-bab** — 6 file tingkat (campur, mudah, sedang, sulit, mudah-sedang, sedang-sulit) untuk satu sub-bab membentuk **600 soal yang semuanya unik**. Saat generate file ke-2 dan seterusnya pada sub-bab yang sama, **baca file sub-bab tingkat sebelumnya dulu** untuk memastikan tidak ada soal yang persis sama.

---

## A · IPA Per Sub-Bab (66 sub-bab × 6 = 396 file)

Sumber sub-bab: [taksonomi-ipa.md](../osn-sd-prep-extracted/osn-sd-prep/references/taksonomi-ipa.md).
Tag **`(fokus …)`** = tingkat kesulitan alami sub-topik tersebut menurut bobot OSN — bukan jumlah soal. **Setiap file sub-bab tetap 100 soal**, apa pun tag fokusnya.

### IPA-01 · Makhluk Hidup & Lingkungan (13 sub-bab)

**IPA-01a · Ciri-ciri Makhluk Hidup** (fokus Kab)
- [x] `osn-sd-ipa-01a-ciri-makhluk-hidup-campur.md`
- [ ] `osn-sd-ipa-01a-ciri-makhluk-hidup-mudah.md`
- [ ] `osn-sd-ipa-01a-ciri-makhluk-hidup-sedang.md`
- [ ] `osn-sd-ipa-01a-ciri-makhluk-hidup-sulit.md`
- [ ] `osn-sd-ipa-01a-ciri-makhluk-hidup-mudah-sedang.md`
- [ ] `osn-sd-ipa-01a-ciri-makhluk-hidup-sedang-sulit.md`

**IPA-01b · Klasifikasi Hewan (Vertebrata/Invertebrata)** (fokus Kab)
- [x] `osn-sd-ipa-01b-klasifikasi-hewan-campur.md`
- [ ] `osn-sd-ipa-01b-klasifikasi-hewan-mudah.md`
- [ ] `osn-sd-ipa-01b-klasifikasi-hewan-sedang.md`
- [ ] `osn-sd-ipa-01b-klasifikasi-hewan-sulit.md`
- [ ] `osn-sd-ipa-01b-klasifikasi-hewan-mudah-sedang.md`
- [ ] `osn-sd-ipa-01b-klasifikasi-hewan-sedang-sulit.md`

**IPA-01c · Klasifikasi Tumbuhan (Monokotil/Dikotil)** (fokus Kab)
- [x] `osn-sd-ipa-01c-klasifikasi-tumbuhan-campur.md`
- [ ] `osn-sd-ipa-01c-klasifikasi-tumbuhan-mudah.md`
- [ ] `osn-sd-ipa-01c-klasifikasi-tumbuhan-sedang.md`
- [ ] `osn-sd-ipa-01c-klasifikasi-tumbuhan-sulit.md`
- [ ] `osn-sd-ipa-01c-klasifikasi-tumbuhan-mudah-sedang.md`
- [ ] `osn-sd-ipa-01c-klasifikasi-tumbuhan-sedang-sulit.md`

**IPA-01d · Struktur & Fungsi Bagian Tumbuhan** (fokus Kab–Prov)
- [x] `osn-sd-ipa-01d-struktur-tumbuhan-campur.md`
- [ ] `osn-sd-ipa-01d-struktur-tumbuhan-mudah.md`
- [ ] `osn-sd-ipa-01d-struktur-tumbuhan-sedang.md`
- [ ] `osn-sd-ipa-01d-struktur-tumbuhan-sulit.md`
- [ ] `osn-sd-ipa-01d-struktur-tumbuhan-mudah-sedang.md`
- [ ] `osn-sd-ipa-01d-struktur-tumbuhan-sedang-sulit.md`

**IPA-01e · Reproduksi Tumbuhan (Vegetatif & Generatif)** (fokus Kab–Prov)
- [x] `osn-sd-ipa-01e-reproduksi-tumbuhan-campur.md`
- [ ] `osn-sd-ipa-01e-reproduksi-tumbuhan-mudah.md`
- [ ] `osn-sd-ipa-01e-reproduksi-tumbuhan-sedang.md`
- [ ] `osn-sd-ipa-01e-reproduksi-tumbuhan-sulit.md`
- [ ] `osn-sd-ipa-01e-reproduksi-tumbuhan-mudah-sedang.md`
- [ ] `osn-sd-ipa-01e-reproduksi-tumbuhan-sedang-sulit.md`

**IPA-01f · Reproduksi Hewan (Ovipar, Vivipar, Ovovivipar)** (fokus Kab)
- [x] `osn-sd-ipa-01f-reproduksi-hewan-campur.md`
- [ ] `osn-sd-ipa-01f-reproduksi-hewan-mudah.md`
- [ ] `osn-sd-ipa-01f-reproduksi-hewan-sedang.md`
- [ ] `osn-sd-ipa-01f-reproduksi-hewan-sulit.md`
- [ ] `osn-sd-ipa-01f-reproduksi-hewan-mudah-sedang.md`
- [ ] `osn-sd-ipa-01f-reproduksi-hewan-sedang-sulit.md`

**IPA-01g · Daur Hidup Hewan (Metamorfosis)** (fokus Kab–Prov)
- [x] `osn-sd-ipa-01g-metamorfosis-campur.md`
- [ ] `osn-sd-ipa-01g-metamorfosis-mudah.md`
- [ ] `osn-sd-ipa-01g-metamorfosis-sedang.md`
- [ ] `osn-sd-ipa-01g-metamorfosis-sulit.md`
- [ ] `osn-sd-ipa-01g-metamorfosis-mudah-sedang.md`
- [ ] `osn-sd-ipa-01g-metamorfosis-sedang-sulit.md`

**IPA-01h · Adaptasi Hewan (Morfologi, Fisiologi, Tingkah Laku)** (fokus Kab–Prov)
- [x] `osn-sd-ipa-01h-adaptasi-hewan-campur.md`
- [ ] `osn-sd-ipa-01h-adaptasi-hewan-mudah.md`
- [ ] `osn-sd-ipa-01h-adaptasi-hewan-sedang.md`
- [ ] `osn-sd-ipa-01h-adaptasi-hewan-sulit.md`
- [ ] `osn-sd-ipa-01h-adaptasi-hewan-mudah-sedang.md`
- [ ] `osn-sd-ipa-01h-adaptasi-hewan-sedang-sulit.md`

**IPA-01i · Adaptasi Tumbuhan (Xerofit, Hidrofit, Higrofit)** (fokus Kab–Prov)
- [x] `osn-sd-ipa-01i-adaptasi-tumbuhan-campur.md`
- [ ] `osn-sd-ipa-01i-adaptasi-tumbuhan-mudah.md`
- [ ] `osn-sd-ipa-01i-adaptasi-tumbuhan-sedang.md`
- [ ] `osn-sd-ipa-01i-adaptasi-tumbuhan-sulit.md`
- [ ] `osn-sd-ipa-01i-adaptasi-tumbuhan-mudah-sedang.md`
- [ ] `osn-sd-ipa-01i-adaptasi-tumbuhan-sedang-sulit.md`

**IPA-01j · Ekosistem & Komponen-komponennya** (fokus Kab–Prov)
- [x] `osn-sd-ipa-01j-ekosistem-campur.md`
- [ ] `osn-sd-ipa-01j-ekosistem-mudah.md`
- [ ] `osn-sd-ipa-01j-ekosistem-sedang.md`
- [ ] `osn-sd-ipa-01j-ekosistem-sulit.md`
- [ ] `osn-sd-ipa-01j-ekosistem-mudah-sedang.md`
- [ ] `osn-sd-ipa-01j-ekosistem-sedang-sulit.md`

**IPA-01k · Rantai & Jaring-jaring Makanan** (fokus Prov)
- [x] `osn-sd-ipa-01k-rantai-makanan-campur.md`
- [ ] `osn-sd-ipa-01k-rantai-makanan-mudah.md`
- [ ] `osn-sd-ipa-01k-rantai-makanan-sedang.md`
- [ ] `osn-sd-ipa-01k-rantai-makanan-sulit.md`
- [ ] `osn-sd-ipa-01k-rantai-makanan-mudah-sedang.md`
- [ ] `osn-sd-ipa-01k-rantai-makanan-sedang-sulit.md`

**IPA-01l · Simbiosis (Mutualisme, Komensalisme, Parasitisme)** (fokus Kab–Prov)
- [x] `osn-sd-ipa-01l-simbiosis-campur.md`
- [ ] `osn-sd-ipa-01l-simbiosis-mudah.md`
- [ ] `osn-sd-ipa-01l-simbiosis-sedang.md`
- [ ] `osn-sd-ipa-01l-simbiosis-sulit.md`
- [ ] `osn-sd-ipa-01l-simbiosis-mudah-sedang.md`
- [ ] `osn-sd-ipa-01l-simbiosis-sedang-sulit.md`

**IPA-01m · Pelestarian Makhluk Hidup & Taman Nasional** (fokus Prov–Nas)
- [x] `osn-sd-ipa-01m-pelestarian-campur.md`
- [ ] `osn-sd-ipa-01m-pelestarian-mudah.md`
- [ ] `osn-sd-ipa-01m-pelestarian-sedang.md`
- [ ] `osn-sd-ipa-01m-pelestarian-sulit.md`
- [ ] `osn-sd-ipa-01m-pelestarian-mudah-sedang.md`
- [ ] `osn-sd-ipa-01m-pelestarian-sedang-sulit.md`

### IPA-02 · Tubuh Manusia & Kesehatan (13 sub-bab)

**IPA-02a · Sistem Pencernaan (Organ, Enzim, Fungsi)** (fokus Kab–Prov)
- [x] `osn-sd-ipa-02a-pencernaan-campur.md`
- [ ] `osn-sd-ipa-02a-pencernaan-mudah.md`
- [ ] `osn-sd-ipa-02a-pencernaan-sedang.md`
- [ ] `osn-sd-ipa-02a-pencernaan-sulit.md`
- [ ] `osn-sd-ipa-02a-pencernaan-mudah-sedang.md`
- [ ] `osn-sd-ipa-02a-pencernaan-sedang-sulit.md`

**IPA-02b · Sistem Pernapasan** (fokus Kab–Prov)
- [x] `osn-sd-ipa-02b-pernapasan-campur.md`
- [ ] `osn-sd-ipa-02b-pernapasan-mudah.md`
- [ ] `osn-sd-ipa-02b-pernapasan-sedang.md`
- [ ] `osn-sd-ipa-02b-pernapasan-sulit.md`
- [ ] `osn-sd-ipa-02b-pernapasan-mudah-sedang.md`
- [ ] `osn-sd-ipa-02b-pernapasan-sedang-sulit.md`

**IPA-02c · Sistem Peredaran Darah (Jantung, Pembuluh, Darah)** (fokus Kab–Prov)
- [x] `osn-sd-ipa-02c-peredaran-darah-campur.md`
- [ ] `osn-sd-ipa-02c-peredaran-darah-mudah.md`
- [ ] `osn-sd-ipa-02c-peredaran-darah-sedang.md`
- [ ] `osn-sd-ipa-02c-peredaran-darah-sulit.md`
- [ ] `osn-sd-ipa-02c-peredaran-darah-mudah-sedang.md`
- [ ] `osn-sd-ipa-02c-peredaran-darah-sedang-sulit.md`

**IPA-02d · Sistem Ekskresi (Ginjal, Kulit, Paru-paru, Hati)** (fokus Kab–Prov)
- [x] `osn-sd-ipa-02d-ekskresi-campur.md`
- [ ] `osn-sd-ipa-02d-ekskresi-mudah.md`
- [ ] `osn-sd-ipa-02d-ekskresi-sedang.md`
- [ ] `osn-sd-ipa-02d-ekskresi-sulit.md`
- [ ] `osn-sd-ipa-02d-ekskresi-mudah-sedang.md`
- [ ] `osn-sd-ipa-02d-ekskresi-sedang-sulit.md`

**IPA-02e · Sistem Saraf & Indera (Mata, Telinga, Hidung, Lidah, Kulit)** (fokus Kab–Prov)
- [x] `osn-sd-ipa-02e-saraf-indera-campur.md`
- [ ] `osn-sd-ipa-02e-saraf-indera-mudah.md`
- [ ] `osn-sd-ipa-02e-saraf-indera-sedang.md`
- [ ] `osn-sd-ipa-02e-saraf-indera-sulit.md`
- [ ] `osn-sd-ipa-02e-saraf-indera-mudah-sedang.md`
- [ ] `osn-sd-ipa-02e-saraf-indera-sedang-sulit.md`

**IPA-02f · Sistem Rangka & Otot** (fokus Kab)
- [x] `osn-sd-ipa-02f-rangka-otot-campur.md`
- [ ] `osn-sd-ipa-02f-rangka-otot-mudah.md`
- [ ] `osn-sd-ipa-02f-rangka-otot-sedang.md`
- [ ] `osn-sd-ipa-02f-rangka-otot-sulit.md`
- [ ] `osn-sd-ipa-02f-rangka-otot-mudah-sedang.md`
- [ ] `osn-sd-ipa-02f-rangka-otot-sedang-sulit.md`

**IPA-02g · Sistem Reproduksi (Level Dasar SD)** (fokus Kab)
- [x] `osn-sd-ipa-02g-reproduksi-campur.md`
- [ ] `osn-sd-ipa-02g-reproduksi-mudah.md`
- [ ] `osn-sd-ipa-02g-reproduksi-sedang.md`
- [ ] `osn-sd-ipa-02g-reproduksi-sulit.md`
- [ ] `osn-sd-ipa-02g-reproduksi-mudah-sedang.md`
- [ ] `osn-sd-ipa-02g-reproduksi-sedang-sulit.md`

**IPA-02h · Pubertas & Perubahan Tubuh** (fokus Kab)
- [x] `osn-sd-ipa-02h-pubertas-campur.md`
- [ ] `osn-sd-ipa-02h-pubertas-mudah.md`
- [ ] `osn-sd-ipa-02h-pubertas-sedang.md`
- [ ] `osn-sd-ipa-02h-pubertas-sulit.md`
- [ ] `osn-sd-ipa-02h-pubertas-mudah-sedang.md`
- [ ] `osn-sd-ipa-02h-pubertas-sedang-sulit.md`

**IPA-02i · Gizi Seimbang (Karbohidrat, Protein, Lemak, Vitamin, Mineral, Air)** (fokus Kab–Prov)
- [x] `osn-sd-ipa-02i-gizi-campur.md`
- [ ] `osn-sd-ipa-02i-gizi-mudah.md`
- [ ] `osn-sd-ipa-02i-gizi-sedang.md`
- [ ] `osn-sd-ipa-02i-gizi-sulit.md`
- [ ] `osn-sd-ipa-02i-gizi-mudah-sedang.md`
- [ ] `osn-sd-ipa-02i-gizi-sedang-sulit.md`

**IPA-02j · Penyakit Menular (TBC, DBD, COVID-19, Influenza)** (fokus Prov)
- [x] `osn-sd-ipa-02j-penyakit-menular-campur.md`
- [ ] `osn-sd-ipa-02j-penyakit-menular-mudah.md`
- [ ] `osn-sd-ipa-02j-penyakit-menular-sedang.md`
- [ ] `osn-sd-ipa-02j-penyakit-menular-sulit.md`
- [ ] `osn-sd-ipa-02j-penyakit-menular-mudah-sedang.md`
- [ ] `osn-sd-ipa-02j-penyakit-menular-sedang-sulit.md`

**IPA-02k · Penyakit Tidak Menular (Diabetes, Hipertensi, Kanker)** (fokus Prov)
- [x] `osn-sd-ipa-02k-penyakit-tidak-menular-campur.md`
- [ ] `osn-sd-ipa-02k-penyakit-tidak-menular-mudah.md`
- [ ] `osn-sd-ipa-02k-penyakit-tidak-menular-sedang.md`
- [ ] `osn-sd-ipa-02k-penyakit-tidak-menular-sulit.md`
- [ ] `osn-sd-ipa-02k-penyakit-tidak-menular-mudah-sedang.md`
- [ ] `osn-sd-ipa-02k-penyakit-tidak-menular-sedang-sulit.md`

**IPA-02l · Kebersihan Diri & Lingkungan** (fokus Kab)
- [x] `osn-sd-ipa-02l-kebersihan-campur.md`
- [ ] `osn-sd-ipa-02l-kebersihan-mudah.md`
- [ ] `osn-sd-ipa-02l-kebersihan-sedang.md`
- [ ] `osn-sd-ipa-02l-kebersihan-sulit.md`
- [ ] `osn-sd-ipa-02l-kebersihan-mudah-sedang.md`
- [ ] `osn-sd-ipa-02l-kebersihan-sedang-sulit.md`

**IPA-02m · Soal Terapan (Gejala → Diagnosis Sederhana)** (fokus Prov–Nas)
- [x] `osn-sd-ipa-02m-diagnosis-gejala-campur.md`
- [ ] `osn-sd-ipa-02m-diagnosis-gejala-mudah.md`
- [ ] `osn-sd-ipa-02m-diagnosis-gejala-sedang.md`
- [ ] `osn-sd-ipa-02m-diagnosis-gejala-sulit.md`
- [ ] `osn-sd-ipa-02m-diagnosis-gejala-mudah-sedang.md`
- [ ] `osn-sd-ipa-02m-diagnosis-gejala-sedang-sulit.md`

### IPA-03 · Gaya, Gerak, dan Energi (12 sub-bab)

**IPA-03a · Pengertian & Jenis Gaya (Gesek, Gravitasi, Magnet, Otot, Pegas)** (fokus Kab)
- [x] `osn-sd-ipa-03a-jenis-gaya-campur.md`
- [ ] `osn-sd-ipa-03a-jenis-gaya-mudah.md`
- [ ] `osn-sd-ipa-03a-jenis-gaya-sedang.md`
- [ ] `osn-sd-ipa-03a-jenis-gaya-sulit.md`
- [ ] `osn-sd-ipa-03a-jenis-gaya-mudah-sedang.md`
- [ ] `osn-sd-ipa-03a-jenis-gaya-sedang-sulit.md`

**IPA-03b · Gerak (Benda Diam/Bergerak, Lurus/Melingkar)** (fokus Kab)
- [x] `osn-sd-ipa-03b-gerak-campur.md`
- [ ] `osn-sd-ipa-03b-gerak-mudah.md`
- [ ] `osn-sd-ipa-03b-gerak-sedang.md`
- [ ] `osn-sd-ipa-03b-gerak-sulit.md`
- [ ] `osn-sd-ipa-03b-gerak-mudah-sedang.md`
- [ ] `osn-sd-ipa-03b-gerak-sedang-sulit.md`

**IPA-03c · Pengaruh Gaya terhadap Benda** (fokus Kab)
- [x] `osn-sd-ipa-03c-pengaruh-gaya-campur.md`
- [ ] `osn-sd-ipa-03c-pengaruh-gaya-mudah.md`
- [ ] `osn-sd-ipa-03c-pengaruh-gaya-sedang.md`
- [ ] `osn-sd-ipa-03c-pengaruh-gaya-sulit.md`
- [ ] `osn-sd-ipa-03c-pengaruh-gaya-mudah-sedang.md`
- [ ] `osn-sd-ipa-03c-pengaruh-gaya-sedang-sulit.md`

**IPA-03d · Pesawat Sederhana: Tuas (3 Jenis)** (fokus Kab–Prov)
- [x] `osn-sd-ipa-03d-tuas-campur.md`
- [ ] `osn-sd-ipa-03d-tuas-mudah.md`
- [ ] `osn-sd-ipa-03d-tuas-sedang.md`
- [ ] `osn-sd-ipa-03d-tuas-sulit.md`
- [ ] `osn-sd-ipa-03d-tuas-mudah-sedang.md`
- [ ] `osn-sd-ipa-03d-tuas-sedang-sulit.md`

**IPA-03e · Pesawat Sederhana: Katrol (Tetap, Bergerak, Ganda)** (fokus Kab–Prov)
- [x] `osn-sd-ipa-03e-katrol-campur.md`
- [ ] `osn-sd-ipa-03e-katrol-mudah.md`
- [ ] `osn-sd-ipa-03e-katrol-sedang.md`
- [ ] `osn-sd-ipa-03e-katrol-sulit.md`
- [ ] `osn-sd-ipa-03e-katrol-mudah-sedang.md`
- [ ] `osn-sd-ipa-03e-katrol-sedang-sulit.md`

**IPA-03f · Pesawat Sederhana: Bidang Miring** (fokus Kab–Prov)
- [x] `osn-sd-ipa-03f-bidang-miring-campur.md`
- [ ] `osn-sd-ipa-03f-bidang-miring-mudah.md`
- [ ] `osn-sd-ipa-03f-bidang-miring-sedang.md`
- [ ] `osn-sd-ipa-03f-bidang-miring-sulit.md`
- [ ] `osn-sd-ipa-03f-bidang-miring-mudah-sedang.md`
- [ ] `osn-sd-ipa-03f-bidang-miring-sedang-sulit.md`

**IPA-03g · Pesawat Sederhana: Roda Berporos** (fokus Kab)
- [x] `osn-sd-ipa-03g-roda-berporos-campur.md`
- [ ] `osn-sd-ipa-03g-roda-berporos-mudah.md`
- [ ] `osn-sd-ipa-03g-roda-berporos-sedang.md`
- [ ] `osn-sd-ipa-03g-roda-berporos-sulit.md`
- [ ] `osn-sd-ipa-03g-roda-berporos-mudah-sedang.md`
- [ ] `osn-sd-ipa-03g-roda-berporos-sedang-sulit.md`

**IPA-03h · Energi & Bentuk-bentuknya (Kinetik, Potensial, Panas, Cahaya, Bunyi, Kimia, Listrik)** (fokus Kab)
- [x] `osn-sd-ipa-03h-bentuk-energi-campur.md`
- [ ] `osn-sd-ipa-03h-bentuk-energi-mudah.md`
- [ ] `osn-sd-ipa-03h-bentuk-energi-sedang.md`
- [ ] `osn-sd-ipa-03h-bentuk-energi-sulit.md`
- [ ] `osn-sd-ipa-03h-bentuk-energi-mudah-sedang.md`
- [ ] `osn-sd-ipa-03h-bentuk-energi-sedang-sulit.md`

**IPA-03i · Perubahan Energi (Rantai Energi pada Alat)** (fokus Kab–Prov)
- [x] `osn-sd-ipa-03i-perubahan-energi-campur.md`
- [ ] `osn-sd-ipa-03i-perubahan-energi-mudah.md`
- [ ] `osn-sd-ipa-03i-perubahan-energi-sedang.md`
- [ ] `osn-sd-ipa-03i-perubahan-energi-sulit.md`
- [ ] `osn-sd-ipa-03i-perubahan-energi-mudah-sedang.md`
- [ ] `osn-sd-ipa-03i-perubahan-energi-sedang-sulit.md`

**IPA-03j · Listrik (Rangkaian Seri & Paralel)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-03j-listrik-seri-paralel-campur.md`
- [ ] `osn-sd-ipa-03j-listrik-seri-paralel-mudah.md`
- [ ] `osn-sd-ipa-03j-listrik-seri-paralel-sedang.md`
- [ ] `osn-sd-ipa-03j-listrik-seri-paralel-sulit.md`
- [ ] `osn-sd-ipa-03j-listrik-seri-paralel-mudah-sedang.md`
- [ ] `osn-sd-ipa-03j-listrik-seri-paralel-sedang-sulit.md`

**IPA-03k · Konduktor & Isolator Listrik** (fokus Kab)
- [ ] `osn-sd-ipa-03k-konduktor-isolator-campur.md`
- [ ] `osn-sd-ipa-03k-konduktor-isolator-mudah.md`
- [ ] `osn-sd-ipa-03k-konduktor-isolator-sedang.md`
- [ ] `osn-sd-ipa-03k-konduktor-isolator-sulit.md`
- [ ] `osn-sd-ipa-03k-konduktor-isolator-mudah-sedang.md`
- [ ] `osn-sd-ipa-03k-konduktor-isolator-sedang-sulit.md`

**IPA-03l · Magnet (Sifat, Kutub, Jenis, Membuat Magnet)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-03l-magnet-campur.md`
- [ ] `osn-sd-ipa-03l-magnet-mudah.md`
- [ ] `osn-sd-ipa-03l-magnet-sedang.md`
- [ ] `osn-sd-ipa-03l-magnet-sulit.md`
- [ ] `osn-sd-ipa-03l-magnet-mudah-sedang.md`
- [ ] `osn-sd-ipa-03l-magnet-sedang-sulit.md`

### IPA-04 · Cahaya, Bunyi, Panas, dan Sifat Zat (14 sub-bab)

**IPA-04a · Sifat-sifat Cahaya (Merambat Lurus, Dipantulkan, Dibiaskan, Diuraikan)** (fokus Kab)
- [ ] `osn-sd-ipa-04a-sifat-cahaya-campur.md`
- [ ] `osn-sd-ipa-04a-sifat-cahaya-mudah.md`
- [ ] `osn-sd-ipa-04a-sifat-cahaya-sedang.md`
- [ ] `osn-sd-ipa-04a-sifat-cahaya-sulit.md`
- [ ] `osn-sd-ipa-04a-sifat-cahaya-mudah-sedang.md`
- [ ] `osn-sd-ipa-04a-sifat-cahaya-sedang-sulit.md`

**IPA-04b · Cermin (Datar, Cekung, Cembung) — Sifat Bayangan** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-04b-cermin-campur.md`
- [ ] `osn-sd-ipa-04b-cermin-mudah.md`
- [ ] `osn-sd-ipa-04b-cermin-sedang.md`
- [ ] `osn-sd-ipa-04b-cermin-sulit.md`
- [ ] `osn-sd-ipa-04b-cermin-mudah-sedang.md`
- [ ] `osn-sd-ipa-04b-cermin-sedang-sulit.md`

**IPA-04c · Pembiasan Cahaya & Lensa (Cembung, Cekung)** (fokus Prov)
- [ ] `osn-sd-ipa-04c-lensa-pembiasan-campur.md`
- [ ] `osn-sd-ipa-04c-lensa-pembiasan-mudah.md`
- [ ] `osn-sd-ipa-04c-lensa-pembiasan-sedang.md`
- [ ] `osn-sd-ipa-04c-lensa-pembiasan-sulit.md`
- [ ] `osn-sd-ipa-04c-lensa-pembiasan-mudah-sedang.md`
- [ ] `osn-sd-ipa-04c-lensa-pembiasan-sedang-sulit.md`

**IPA-04d · Penguraian Cahaya (Prisma, Pelangi)** (fokus Prov)
- [ ] `osn-sd-ipa-04d-penguraian-cahaya-campur.md`
- [ ] `osn-sd-ipa-04d-penguraian-cahaya-mudah.md`
- [ ] `osn-sd-ipa-04d-penguraian-cahaya-sedang.md`
- [ ] `osn-sd-ipa-04d-penguraian-cahaya-sulit.md`
- [ ] `osn-sd-ipa-04d-penguraian-cahaya-mudah-sedang.md`
- [ ] `osn-sd-ipa-04d-penguraian-cahaya-sedang-sulit.md`

**IPA-04e · Sifat-sifat Bunyi (Sumber, Perambatan, Frekuensi)** (fokus Kab)
- [ ] `osn-sd-ipa-04e-sifat-bunyi-campur.md`
- [ ] `osn-sd-ipa-04e-sifat-bunyi-mudah.md`
- [ ] `osn-sd-ipa-04e-sifat-bunyi-sedang.md`
- [ ] `osn-sd-ipa-04e-sifat-bunyi-sulit.md`
- [ ] `osn-sd-ipa-04e-sifat-bunyi-mudah-sedang.md`
- [ ] `osn-sd-ipa-04e-sifat-bunyi-sedang-sulit.md`

**IPA-04f · Pemantulan Bunyi (Gema, Gaung)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-04f-pemantulan-bunyi-campur.md`
- [ ] `osn-sd-ipa-04f-pemantulan-bunyi-mudah.md`
- [ ] `osn-sd-ipa-04f-pemantulan-bunyi-sedang.md`
- [ ] `osn-sd-ipa-04f-pemantulan-bunyi-sulit.md`
- [ ] `osn-sd-ipa-04f-pemantulan-bunyi-mudah-sedang.md`
- [ ] `osn-sd-ipa-04f-pemantulan-bunyi-sedang-sulit.md`

**IPA-04g · Perambatan Bunyi di Padat/Cair/Gas** (fokus Kab)
- [ ] `osn-sd-ipa-04g-perambatan-bunyi-campur.md`
- [ ] `osn-sd-ipa-04g-perambatan-bunyi-mudah.md`
- [ ] `osn-sd-ipa-04g-perambatan-bunyi-sedang.md`
- [ ] `osn-sd-ipa-04g-perambatan-bunyi-sulit.md`
- [ ] `osn-sd-ipa-04g-perambatan-bunyi-mudah-sedang.md`
- [ ] `osn-sd-ipa-04g-perambatan-bunyi-sedang-sulit.md`

**IPA-04h · Suhu & Termometer** (fokus Kab)
- [ ] `osn-sd-ipa-04h-suhu-termometer-campur.md`
- [ ] `osn-sd-ipa-04h-suhu-termometer-mudah.md`
- [ ] `osn-sd-ipa-04h-suhu-termometer-sedang.md`
- [ ] `osn-sd-ipa-04h-suhu-termometer-sulit.md`
- [ ] `osn-sd-ipa-04h-suhu-termometer-mudah-sedang.md`
- [ ] `osn-sd-ipa-04h-suhu-termometer-sedang-sulit.md`

**IPA-04i · Perpindahan Panas (Konduksi, Konveksi, Radiasi)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-04i-perpindahan-panas-campur.md`
- [ ] `osn-sd-ipa-04i-perpindahan-panas-mudah.md`
- [ ] `osn-sd-ipa-04i-perpindahan-panas-sedang.md`
- [ ] `osn-sd-ipa-04i-perpindahan-panas-sulit.md`
- [ ] `osn-sd-ipa-04i-perpindahan-panas-mudah-sedang.md`
- [ ] `osn-sd-ipa-04i-perpindahan-panas-sedang-sulit.md`

**IPA-04j · Wujud Zat (Padat, Cair, Gas) & Sifatnya** (fokus Kab)
- [ ] `osn-sd-ipa-04j-wujud-zat-campur.md`
- [ ] `osn-sd-ipa-04j-wujud-zat-mudah.md`
- [ ] `osn-sd-ipa-04j-wujud-zat-sedang.md`
- [ ] `osn-sd-ipa-04j-wujud-zat-sulit.md`
- [ ] `osn-sd-ipa-04j-wujud-zat-mudah-sedang.md`
- [ ] `osn-sd-ipa-04j-wujud-zat-sedang-sulit.md`

**IPA-04k · Perubahan Wujud Zat (6 Jenis)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-04k-perubahan-wujud-campur.md`
- [ ] `osn-sd-ipa-04k-perubahan-wujud-mudah.md`
- [ ] `osn-sd-ipa-04k-perubahan-wujud-sedang.md`
- [ ] `osn-sd-ipa-04k-perubahan-wujud-sulit.md`
- [ ] `osn-sd-ipa-04k-perubahan-wujud-mudah-sedang.md`
- [ ] `osn-sd-ipa-04k-perubahan-wujud-sedang-sulit.md`

**IPA-04l · Sifat Fisika vs Sifat Kimia** (fokus Kab)
- [ ] `osn-sd-ipa-04l-sifat-fisika-kimia-campur.md`
- [ ] `osn-sd-ipa-04l-sifat-fisika-kimia-mudah.md`
- [ ] `osn-sd-ipa-04l-sifat-fisika-kimia-sedang.md`
- [ ] `osn-sd-ipa-04l-sifat-fisika-kimia-sulit.md`
- [ ] `osn-sd-ipa-04l-sifat-fisika-kimia-mudah-sedang.md`
- [ ] `osn-sd-ipa-04l-sifat-fisika-kimia-sedang-sulit.md`

**IPA-04m · Pemisahan Campuran (Filtrasi, Evaporasi, Distilasi, Kromatografi, Sublimasi)** (fokus Prov)
- [ ] `osn-sd-ipa-04m-pemisahan-campuran-campur.md`
- [ ] `osn-sd-ipa-04m-pemisahan-campuran-mudah.md`
- [ ] `osn-sd-ipa-04m-pemisahan-campuran-sedang.md`
- [ ] `osn-sd-ipa-04m-pemisahan-campuran-sulit.md`
- [ ] `osn-sd-ipa-04m-pemisahan-campuran-mudah-sedang.md`
- [ ] `osn-sd-ipa-04m-pemisahan-campuran-sedang-sulit.md`

**IPA-04n · Larutan, Suspensi, Koloid (Level Dasar)** (fokus Prov–Nas)
- [ ] `osn-sd-ipa-04n-larutan-koloid-campur.md`
- [ ] `osn-sd-ipa-04n-larutan-koloid-mudah.md`
- [ ] `osn-sd-ipa-04n-larutan-koloid-sedang.md`
- [ ] `osn-sd-ipa-04n-larutan-koloid-sulit.md`
- [ ] `osn-sd-ipa-04n-larutan-koloid-mudah-sedang.md`
- [ ] `osn-sd-ipa-04n-larutan-koloid-sedang-sulit.md`

### IPA-05 · Bumi, Antariksa, dan Lingkungan (14 sub-bab)

**IPA-05a · Sistem Tata Surya & Ciri 8 Planet** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-05a-tata-surya-campur.md`
- [ ] `osn-sd-ipa-05a-tata-surya-mudah.md`
- [ ] `osn-sd-ipa-05a-tata-surya-sedang.md`
- [ ] `osn-sd-ipa-05a-tata-surya-sulit.md`
- [ ] `osn-sd-ipa-05a-tata-surya-mudah-sedang.md`
- [ ] `osn-sd-ipa-05a-tata-surya-sedang-sulit.md`

**IPA-05b · Bumi: Bentuk, Lapisan (Kerak, Mantel, Inti)** (fokus Kab)
- [ ] `osn-sd-ipa-05b-lapisan-bumi-campur.md`
- [ ] `osn-sd-ipa-05b-lapisan-bumi-mudah.md`
- [ ] `osn-sd-ipa-05b-lapisan-bumi-sedang.md`
- [ ] `osn-sd-ipa-05b-lapisan-bumi-sulit.md`
- [ ] `osn-sd-ipa-05b-lapisan-bumi-mudah-sedang.md`
- [ ] `osn-sd-ipa-05b-lapisan-bumi-sedang-sulit.md`

**IPA-05c · Rotasi & Revolusi Bumi (Akibat & Dampaknya)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-05c-rotasi-revolusi-campur.md`
- [ ] `osn-sd-ipa-05c-rotasi-revolusi-mudah.md`
- [ ] `osn-sd-ipa-05c-rotasi-revolusi-sedang.md`
- [ ] `osn-sd-ipa-05c-rotasi-revolusi-sulit.md`
- [ ] `osn-sd-ipa-05c-rotasi-revolusi-mudah-sedang.md`
- [ ] `osn-sd-ipa-05c-rotasi-revolusi-sedang-sulit.md`

**IPA-05d · Bulan: Fase, Gerakan, Akibat** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-05d-fase-bulan-campur.md`
- [ ] `osn-sd-ipa-05d-fase-bulan-mudah.md`
- [ ] `osn-sd-ipa-05d-fase-bulan-sedang.md`
- [ ] `osn-sd-ipa-05d-fase-bulan-sulit.md`
- [ ] `osn-sd-ipa-05d-fase-bulan-mudah-sedang.md`
- [ ] `osn-sd-ipa-05d-fase-bulan-sedang-sulit.md`

**IPA-05e · Gerhana Matahari & Gerhana Bulan** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-05e-gerhana-campur.md`
- [ ] `osn-sd-ipa-05e-gerhana-mudah.md`
- [ ] `osn-sd-ipa-05e-gerhana-sedang.md`
- [ ] `osn-sd-ipa-05e-gerhana-sulit.md`
- [ ] `osn-sd-ipa-05e-gerhana-mudah-sedang.md`
- [ ] `osn-sd-ipa-05e-gerhana-sedang-sulit.md`

**IPA-05f · Cuaca, Iklim, Musim** (fokus Kab)
- [ ] `osn-sd-ipa-05f-cuaca-iklim-campur.md`
- [ ] `osn-sd-ipa-05f-cuaca-iklim-mudah.md`
- [ ] `osn-sd-ipa-05f-cuaca-iklim-sedang.md`
- [ ] `osn-sd-ipa-05f-cuaca-iklim-sulit.md`
- [ ] `osn-sd-ipa-05f-cuaca-iklim-mudah-sedang.md`
- [ ] `osn-sd-ipa-05f-cuaca-iklim-sedang-sulit.md`

**IPA-05g · Batuan (Beku, Sedimen, Metamorf)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-05g-batuan-campur.md`
- [ ] `osn-sd-ipa-05g-batuan-mudah.md`
- [ ] `osn-sd-ipa-05g-batuan-sedang.md`
- [ ] `osn-sd-ipa-05g-batuan-sulit.md`
- [ ] `osn-sd-ipa-05g-batuan-mudah-sedang.md`
- [ ] `osn-sd-ipa-05g-batuan-sedang-sulit.md`

**IPA-05h · Tanah (Jenis, Lapisan, Manfaat)** (fokus Kab)
- [ ] `osn-sd-ipa-05h-tanah-campur.md`
- [ ] `osn-sd-ipa-05h-tanah-mudah.md`
- [ ] `osn-sd-ipa-05h-tanah-sedang.md`
- [ ] `osn-sd-ipa-05h-tanah-sulit.md`
- [ ] `osn-sd-ipa-05h-tanah-mudah-sedang.md`
- [ ] `osn-sd-ipa-05h-tanah-sedang-sulit.md`

**IPA-05i · Sumber Daya Alam Terbarukan & Tak Terbarukan** (fokus Kab)
- [ ] `osn-sd-ipa-05i-sumber-daya-alam-campur.md`
- [ ] `osn-sd-ipa-05i-sumber-daya-alam-mudah.md`
- [ ] `osn-sd-ipa-05i-sumber-daya-alam-sedang.md`
- [ ] `osn-sd-ipa-05i-sumber-daya-alam-sulit.md`
- [ ] `osn-sd-ipa-05i-sumber-daya-alam-mudah-sedang.md`
- [ ] `osn-sd-ipa-05i-sumber-daya-alam-sedang-sulit.md`

**IPA-05j · Siklus Air** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-05j-siklus-air-campur.md`
- [ ] `osn-sd-ipa-05j-siklus-air-mudah.md`
- [ ] `osn-sd-ipa-05j-siklus-air-sedang.md`
- [ ] `osn-sd-ipa-05j-siklus-air-sulit.md`
- [ ] `osn-sd-ipa-05j-siklus-air-mudah-sedang.md`
- [ ] `osn-sd-ipa-05j-siklus-air-sedang-sulit.md`

**IPA-05k · Atmosfer (Lapisan, Fungsi)** (fokus Prov)
- [ ] `osn-sd-ipa-05k-atmosfer-campur.md`
- [ ] `osn-sd-ipa-05k-atmosfer-mudah.md`
- [ ] `osn-sd-ipa-05k-atmosfer-sedang.md`
- [ ] `osn-sd-ipa-05k-atmosfer-sulit.md`
- [ ] `osn-sd-ipa-05k-atmosfer-mudah-sedang.md`
- [ ] `osn-sd-ipa-05k-atmosfer-sedang-sulit.md`

**IPA-05l · Pelestarian Lingkungan & Pencemaran** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-05l-pelestarian-lingkungan-campur.md`
- [ ] `osn-sd-ipa-05l-pelestarian-lingkungan-mudah.md`
- [ ] `osn-sd-ipa-05l-pelestarian-lingkungan-sedang.md`
- [ ] `osn-sd-ipa-05l-pelestarian-lingkungan-sulit.md`
- [ ] `osn-sd-ipa-05l-pelestarian-lingkungan-mudah-sedang.md`
- [ ] `osn-sd-ipa-05l-pelestarian-lingkungan-sedang-sulit.md`

**IPA-05m · Pemanasan Global & Efek Rumah Kaca** (fokus Prov–Nas)
- [ ] `osn-sd-ipa-05m-pemanasan-global-campur.md`
- [ ] `osn-sd-ipa-05m-pemanasan-global-mudah.md`
- [ ] `osn-sd-ipa-05m-pemanasan-global-sedang.md`
- [ ] `osn-sd-ipa-05m-pemanasan-global-sulit.md`
- [ ] `osn-sd-ipa-05m-pemanasan-global-mudah-sedang.md`
- [ ] `osn-sd-ipa-05m-pemanasan-global-sedang-sulit.md`

**IPA-05n · Bencana Alam (Gempa, Gunung Meletus, Tsunami, Banjir)** (fokus Prov)
- [ ] `osn-sd-ipa-05n-bencana-alam-campur.md`
- [ ] `osn-sd-ipa-05n-bencana-alam-mudah.md`
- [ ] `osn-sd-ipa-05n-bencana-alam-sedang.md`
- [ ] `osn-sd-ipa-05n-bencana-alam-sulit.md`
- [ ] `osn-sd-ipa-05n-bencana-alam-mudah-sedang.md`
- [ ] `osn-sd-ipa-05n-bencana-alam-sedang-sulit.md`

---

## B · MTK Per Sub-Bab (94 sub-bab × 6 = 564 file)

Sumber sub-bab: [taksonomi-matematika.md](../osn-sd-prep-extracted/osn-sd-prep/references/taksonomi-matematika.md).
Tag **`(fokus …)`** = tingkat kesulitan alami sub-topik — bukan jumlah soal. **Tiap file sub-bab tetap 100 soal**.

### MTK-01 · Bilangan & Operasi (11 sub-bab)

**MTK-01a · Operasi Hitung Bilangan Bulat (+, −, ×, ÷)** (fokus Kab)
- [ ] `osn-sd-mtk-01a-operasi-bilangan-bulat-campur.md`
- [ ] `osn-sd-mtk-01a-operasi-bilangan-bulat-mudah.md`
- [ ] `osn-sd-mtk-01a-operasi-bilangan-bulat-sedang.md`
- [ ] `osn-sd-mtk-01a-operasi-bilangan-bulat-sulit.md`
- [ ] `osn-sd-mtk-01a-operasi-bilangan-bulat-mudah-sedang.md`
- [ ] `osn-sd-mtk-01a-operasi-bilangan-bulat-sedang-sulit.md`

**MTK-01b · Urutan Operasi (Kurung-Pangkat-Kali-Bagi-Tambah-Kurang)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-01b-urutan-operasi-campur.md`
- [ ] `osn-sd-mtk-01b-urutan-operasi-mudah.md`
- [ ] `osn-sd-mtk-01b-urutan-operasi-sedang.md`
- [ ] `osn-sd-mtk-01b-urutan-operasi-sulit.md`
- [ ] `osn-sd-mtk-01b-urutan-operasi-mudah-sedang.md`
- [ ] `osn-sd-mtk-01b-urutan-operasi-sedang-sulit.md`

**MTK-01c · Faktor & Kelipatan Suatu Bilangan** (fokus Kab)
- [ ] `osn-sd-mtk-01c-faktor-kelipatan-campur.md`
- [ ] `osn-sd-mtk-01c-faktor-kelipatan-mudah.md`
- [ ] `osn-sd-mtk-01c-faktor-kelipatan-sedang.md`
- [ ] `osn-sd-mtk-01c-faktor-kelipatan-sulit.md`
- [ ] `osn-sd-mtk-01c-faktor-kelipatan-mudah-sedang.md`
- [ ] `osn-sd-mtk-01c-faktor-kelipatan-sedang-sulit.md`

**MTK-01d · Bilangan Prima & Komposit** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-01d-bilangan-prima-komposit-campur.md`
- [ ] `osn-sd-mtk-01d-bilangan-prima-komposit-mudah.md`
- [ ] `osn-sd-mtk-01d-bilangan-prima-komposit-sedang.md`
- [ ] `osn-sd-mtk-01d-bilangan-prima-komposit-sulit.md`
- [ ] `osn-sd-mtk-01d-bilangan-prima-komposit-mudah-sedang.md`
- [ ] `osn-sd-mtk-01d-bilangan-prima-komposit-sedang-sulit.md`

**MTK-01e · Faktorisasi Prima** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-01e-faktorisasi-prima-campur.md`
- [ ] `osn-sd-mtk-01e-faktorisasi-prima-mudah.md`
- [ ] `osn-sd-mtk-01e-faktorisasi-prima-sedang.md`
- [ ] `osn-sd-mtk-01e-faktorisasi-prima-sulit.md`
- [ ] `osn-sd-mtk-01e-faktorisasi-prima-mudah-sedang.md`
- [ ] `osn-sd-mtk-01e-faktorisasi-prima-sedang-sulit.md`

**MTK-01f · FPB (Faktor Persekutuan Terbesar)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-01f-fpb-campur.md`
- [ ] `osn-sd-mtk-01f-fpb-mudah.md`
- [ ] `osn-sd-mtk-01f-fpb-sedang.md`
- [ ] `osn-sd-mtk-01f-fpb-sulit.md`
- [ ] `osn-sd-mtk-01f-fpb-mudah-sedang.md`
- [ ] `osn-sd-mtk-01f-fpb-sedang-sulit.md`

**MTK-01g · KPK (Kelipatan Persekutuan Terkecil)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-01g-kpk-campur.md`
- [ ] `osn-sd-mtk-01g-kpk-mudah.md`
- [ ] `osn-sd-mtk-01g-kpk-sedang.md`
- [ ] `osn-sd-mtk-01g-kpk-sulit.md`
- [ ] `osn-sd-mtk-01g-kpk-mudah-sedang.md`
- [ ] `osn-sd-mtk-01g-kpk-sedang-sulit.md`

**MTK-01h · Bilangan Kuadrat & Akar Kuadrat** (fokus Prov)
- [ ] `osn-sd-mtk-01h-kuadrat-akar-campur.md`
- [ ] `osn-sd-mtk-01h-kuadrat-akar-mudah.md`
- [ ] `osn-sd-mtk-01h-kuadrat-akar-sedang.md`
- [ ] `osn-sd-mtk-01h-kuadrat-akar-sulit.md`
- [ ] `osn-sd-mtk-01h-kuadrat-akar-mudah-sedang.md`
- [ ] `osn-sd-mtk-01h-kuadrat-akar-sedang-sulit.md`

**MTK-01i · Bilangan Kubik & Akar Kubik** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-01i-kubik-akar-kubik-campur.md`
- [ ] `osn-sd-mtk-01i-kubik-akar-kubik-mudah.md`
- [ ] `osn-sd-mtk-01i-kubik-akar-kubik-sedang.md`
- [ ] `osn-sd-mtk-01i-kubik-akar-kubik-sulit.md`
- [ ] `osn-sd-mtk-01i-kubik-akar-kubik-mudah-sedang.md`
- [ ] `osn-sd-mtk-01i-kubik-akar-kubik-sedang-sulit.md`

**MTK-01j · Sifat Operasi (Komutatif, Asosiatif, Distributif)** (fokus Kab)
- [ ] `osn-sd-mtk-01j-sifat-operasi-campur.md`
- [ ] `osn-sd-mtk-01j-sifat-operasi-mudah.md`
- [ ] `osn-sd-mtk-01j-sifat-operasi-sedang.md`
- [ ] `osn-sd-mtk-01j-sifat-operasi-sulit.md`
- [ ] `osn-sd-mtk-01j-sifat-operasi-mudah-sedang.md`
- [ ] `osn-sd-mtk-01j-sifat-operasi-sedang-sulit.md`

**MTK-01k · Soal Cerita Aplikasi FPB/KPK** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-01k-cerita-fpb-kpk-campur.md`
- [ ] `osn-sd-mtk-01k-cerita-fpb-kpk-mudah.md`
- [ ] `osn-sd-mtk-01k-cerita-fpb-kpk-sedang.md`
- [ ] `osn-sd-mtk-01k-cerita-fpb-kpk-sulit.md`
- [ ] `osn-sd-mtk-01k-cerita-fpb-kpk-mudah-sedang.md`
- [ ] `osn-sd-mtk-01k-cerita-fpb-kpk-sedang-sulit.md`

### MTK-02 · Pecahan, Desimal, dan Persen (11 sub-bab)

**MTK-02a · Pecahan Senilai & Menyederhanakan** (fokus Kab)
- [ ] `osn-sd-mtk-02a-pecahan-senilai-campur.md`
- [ ] `osn-sd-mtk-02a-pecahan-senilai-mudah.md`
- [ ] `osn-sd-mtk-02a-pecahan-senilai-sedang.md`
- [ ] `osn-sd-mtk-02a-pecahan-senilai-sulit.md`
- [ ] `osn-sd-mtk-02a-pecahan-senilai-mudah-sedang.md`
- [ ] `osn-sd-mtk-02a-pecahan-senilai-sedang-sulit.md`

**MTK-02b · Membandingkan & Mengurutkan Pecahan** (fokus Kab)
- [ ] `osn-sd-mtk-02b-bandingkan-pecahan-campur.md`
- [ ] `osn-sd-mtk-02b-bandingkan-pecahan-mudah.md`
- [ ] `osn-sd-mtk-02b-bandingkan-pecahan-sedang.md`
- [ ] `osn-sd-mtk-02b-bandingkan-pecahan-sulit.md`
- [ ] `osn-sd-mtk-02b-bandingkan-pecahan-mudah-sedang.md`
- [ ] `osn-sd-mtk-02b-bandingkan-pecahan-sedang-sulit.md`

**MTK-02c · Operasi Pecahan Biasa (+, −, ×, ÷)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-02c-operasi-pecahan-biasa-campur.md`
- [ ] `osn-sd-mtk-02c-operasi-pecahan-biasa-mudah.md`
- [ ] `osn-sd-mtk-02c-operasi-pecahan-biasa-sedang.md`
- [ ] `osn-sd-mtk-02c-operasi-pecahan-biasa-sulit.md`
- [ ] `osn-sd-mtk-02c-operasi-pecahan-biasa-mudah-sedang.md`
- [ ] `osn-sd-mtk-02c-operasi-pecahan-biasa-sedang-sulit.md`

**MTK-02d · Pecahan Campuran (Operasi)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-02d-pecahan-campuran-campur.md`
- [ ] `osn-sd-mtk-02d-pecahan-campuran-mudah.md`
- [ ] `osn-sd-mtk-02d-pecahan-campuran-sedang.md`
- [ ] `osn-sd-mtk-02d-pecahan-campuran-sulit.md`
- [ ] `osn-sd-mtk-02d-pecahan-campuran-mudah-sedang.md`
- [ ] `osn-sd-mtk-02d-pecahan-campuran-sedang-sulit.md`

**MTK-02e · Konversi Pecahan ↔ Desimal ↔ Persen** (fokus Kab)
- [ ] `osn-sd-mtk-02e-konversi-pecahan-desimal-persen-campur.md`
- [ ] `osn-sd-mtk-02e-konversi-pecahan-desimal-persen-mudah.md`
- [ ] `osn-sd-mtk-02e-konversi-pecahan-desimal-persen-sedang.md`
- [ ] `osn-sd-mtk-02e-konversi-pecahan-desimal-persen-sulit.md`
- [ ] `osn-sd-mtk-02e-konversi-pecahan-desimal-persen-mudah-sedang.md`
- [ ] `osn-sd-mtk-02e-konversi-pecahan-desimal-persen-sedang-sulit.md`

**MTK-02f · Operasi Desimal (+, −, ×, ÷)** (fokus Kab)
- [ ] `osn-sd-mtk-02f-operasi-desimal-campur.md`
- [ ] `osn-sd-mtk-02f-operasi-desimal-mudah.md`
- [ ] `osn-sd-mtk-02f-operasi-desimal-sedang.md`
- [ ] `osn-sd-mtk-02f-operasi-desimal-sulit.md`
- [ ] `osn-sd-mtk-02f-operasi-desimal-mudah-sedang.md`
- [ ] `osn-sd-mtk-02f-operasi-desimal-sedang-sulit.md`

**MTK-02g · Pembulatan Desimal** (fokus Kab)
- [ ] `osn-sd-mtk-02g-pembulatan-desimal-campur.md`
- [ ] `osn-sd-mtk-02g-pembulatan-desimal-mudah.md`
- [ ] `osn-sd-mtk-02g-pembulatan-desimal-sedang.md`
- [ ] `osn-sd-mtk-02g-pembulatan-desimal-sulit.md`
- [ ] `osn-sd-mtk-02g-pembulatan-desimal-mudah-sedang.md`
- [ ] `osn-sd-mtk-02g-pembulatan-desimal-sedang-sulit.md`

**MTK-02h · Persen sebagai Bagian dari Keseluruhan** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-02h-persen-bagian-campur.md`
- [ ] `osn-sd-mtk-02h-persen-bagian-mudah.md`
- [ ] `osn-sd-mtk-02h-persen-bagian-sedang.md`
- [ ] `osn-sd-mtk-02h-persen-bagian-sulit.md`
- [ ] `osn-sd-mtk-02h-persen-bagian-mudah-sedang.md`
- [ ] `osn-sd-mtk-02h-persen-bagian-sedang-sulit.md`

**MTK-02i · Mencari Bilangan Asal dari Persen** (fokus Prov)
- [ ] `osn-sd-mtk-02i-bilangan-dari-persen-campur.md`
- [ ] `osn-sd-mtk-02i-bilangan-dari-persen-mudah.md`
- [ ] `osn-sd-mtk-02i-bilangan-dari-persen-sedang.md`
- [ ] `osn-sd-mtk-02i-bilangan-dari-persen-sulit.md`
- [ ] `osn-sd-mtk-02i-bilangan-dari-persen-mudah-sedang.md`
- [ ] `osn-sd-mtk-02i-bilangan-dari-persen-sedang-sulit.md`

**MTK-02j · Soal Cerita Pecahan (Bagian dari Bagian)** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-02j-cerita-pecahan-campur.md`
- [ ] `osn-sd-mtk-02j-cerita-pecahan-mudah.md`
- [ ] `osn-sd-mtk-02j-cerita-pecahan-sedang.md`
- [ ] `osn-sd-mtk-02j-cerita-pecahan-sulit.md`
- [ ] `osn-sd-mtk-02j-cerita-pecahan-mudah-sedang.md`
- [ ] `osn-sd-mtk-02j-cerita-pecahan-sedang-sulit.md`

**MTK-02k · Soal Cerita Persen Aplikatif** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-02k-cerita-persen-campur.md`
- [ ] `osn-sd-mtk-02k-cerita-persen-mudah.md`
- [ ] `osn-sd-mtk-02k-cerita-persen-sedang.md`
- [ ] `osn-sd-mtk-02k-cerita-persen-sulit.md`
- [ ] `osn-sd-mtk-02k-cerita-persen-mudah-sedang.md`
- [ ] `osn-sd-mtk-02k-cerita-persen-sedang-sulit.md`

### MTK-03 · Geometri Datar (13 sub-bab)

**MTK-03a · Sifat & Jenis Bangun Datar** (fokus Kab)
- [ ] `osn-sd-mtk-03a-jenis-bangun-datar-campur.md`
- [ ] `osn-sd-mtk-03a-jenis-bangun-datar-mudah.md`
- [ ] `osn-sd-mtk-03a-jenis-bangun-datar-sedang.md`
- [ ] `osn-sd-mtk-03a-jenis-bangun-datar-sulit.md`
- [ ] `osn-sd-mtk-03a-jenis-bangun-datar-mudah-sedang.md`
- [ ] `osn-sd-mtk-03a-jenis-bangun-datar-sedang-sulit.md`

**MTK-03b · Keliling Persegi & Persegi Panjang** (fokus Kab)
- [ ] `osn-sd-mtk-03b-keliling-persegi-campur.md`
- [ ] `osn-sd-mtk-03b-keliling-persegi-mudah.md`
- [ ] `osn-sd-mtk-03b-keliling-persegi-sedang.md`
- [ ] `osn-sd-mtk-03b-keliling-persegi-sulit.md`
- [ ] `osn-sd-mtk-03b-keliling-persegi-mudah-sedang.md`
- [ ] `osn-sd-mtk-03b-keliling-persegi-sedang-sulit.md`

**MTK-03c · Keliling Segitiga** (fokus Kab)
- [ ] `osn-sd-mtk-03c-keliling-segitiga-campur.md`
- [ ] `osn-sd-mtk-03c-keliling-segitiga-mudah.md`
- [ ] `osn-sd-mtk-03c-keliling-segitiga-sedang.md`
- [ ] `osn-sd-mtk-03c-keliling-segitiga-sulit.md`
- [ ] `osn-sd-mtk-03c-keliling-segitiga-mudah-sedang.md`
- [ ] `osn-sd-mtk-03c-keliling-segitiga-sedang-sulit.md`

**MTK-03d · Keliling Jajar Genjang, Trapesium, Layang-layang, Belah Ketupat** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-03d-keliling-jajar-trapesium-layang-belah-campur.md`
- [ ] `osn-sd-mtk-03d-keliling-jajar-trapesium-layang-belah-mudah.md`
- [ ] `osn-sd-mtk-03d-keliling-jajar-trapesium-layang-belah-sedang.md`
- [ ] `osn-sd-mtk-03d-keliling-jajar-trapesium-layang-belah-sulit.md`
- [ ] `osn-sd-mtk-03d-keliling-jajar-trapesium-layang-belah-mudah-sedang.md`
- [ ] `osn-sd-mtk-03d-keliling-jajar-trapesium-layang-belah-sedang-sulit.md`

**MTK-03e · Keliling Lingkaran (π = 22/7 atau 3,14)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-03e-keliling-lingkaran-campur.md`
- [ ] `osn-sd-mtk-03e-keliling-lingkaran-mudah.md`
- [ ] `osn-sd-mtk-03e-keliling-lingkaran-sedang.md`
- [ ] `osn-sd-mtk-03e-keliling-lingkaran-sulit.md`
- [ ] `osn-sd-mtk-03e-keliling-lingkaran-mudah-sedang.md`
- [ ] `osn-sd-mtk-03e-keliling-lingkaran-sedang-sulit.md`

**MTK-03f · Luas Persegi & Persegi Panjang** (fokus Kab)
- [ ] `osn-sd-mtk-03f-luas-persegi-campur.md`
- [ ] `osn-sd-mtk-03f-luas-persegi-mudah.md`
- [ ] `osn-sd-mtk-03f-luas-persegi-sedang.md`
- [ ] `osn-sd-mtk-03f-luas-persegi-sulit.md`
- [ ] `osn-sd-mtk-03f-luas-persegi-mudah-sedang.md`
- [ ] `osn-sd-mtk-03f-luas-persegi-sedang-sulit.md`

**MTK-03g · Luas Segitiga** (fokus Kab)
- [ ] `osn-sd-mtk-03g-luas-segitiga-campur.md`
- [ ] `osn-sd-mtk-03g-luas-segitiga-mudah.md`
- [ ] `osn-sd-mtk-03g-luas-segitiga-sedang.md`
- [ ] `osn-sd-mtk-03g-luas-segitiga-sulit.md`
- [ ] `osn-sd-mtk-03g-luas-segitiga-mudah-sedang.md`
- [ ] `osn-sd-mtk-03g-luas-segitiga-sedang-sulit.md`

**MTK-03h · Luas Jajar Genjang, Trapesium, Layang-layang, Belah Ketupat** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-03h-luas-jajar-trapesium-layang-belah-campur.md`
- [ ] `osn-sd-mtk-03h-luas-jajar-trapesium-layang-belah-mudah.md`
- [ ] `osn-sd-mtk-03h-luas-jajar-trapesium-layang-belah-sedang.md`
- [ ] `osn-sd-mtk-03h-luas-jajar-trapesium-layang-belah-sulit.md`
- [ ] `osn-sd-mtk-03h-luas-jajar-trapesium-layang-belah-mudah-sedang.md`
- [ ] `osn-sd-mtk-03h-luas-jajar-trapesium-layang-belah-sedang-sulit.md`

**MTK-03i · Luas Lingkaran (πr²)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-03i-luas-lingkaran-campur.md`
- [ ] `osn-sd-mtk-03i-luas-lingkaran-mudah.md`
- [ ] `osn-sd-mtk-03i-luas-lingkaran-sedang.md`
- [ ] `osn-sd-mtk-03i-luas-lingkaran-sulit.md`
- [ ] `osn-sd-mtk-03i-luas-lingkaran-mudah-sedang.md`
- [ ] `osn-sd-mtk-03i-luas-lingkaran-sedang-sulit.md`

**MTK-03j · Bangun Datar Gabungan (Penjumlahan Luas)** (fokus Prov)
- [ ] `osn-sd-mtk-03j-gabungan-jumlah-campur.md`
- [ ] `osn-sd-mtk-03j-gabungan-jumlah-mudah.md`
- [ ] `osn-sd-mtk-03j-gabungan-jumlah-sedang.md`
- [ ] `osn-sd-mtk-03j-gabungan-jumlah-sulit.md`
- [ ] `osn-sd-mtk-03j-gabungan-jumlah-mudah-sedang.md`
- [ ] `osn-sd-mtk-03j-gabungan-jumlah-sedang-sulit.md`

**MTK-03k · Bangun Datar Gabungan (Pengurangan / Luas yang Diarsir)** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-03k-gabungan-arsir-campur.md`
- [ ] `osn-sd-mtk-03k-gabungan-arsir-mudah.md`
- [ ] `osn-sd-mtk-03k-gabungan-arsir-sedang.md`
- [ ] `osn-sd-mtk-03k-gabungan-arsir-sulit.md`
- [ ] `osn-sd-mtk-03k-gabungan-arsir-mudah-sedang.md`
- [ ] `osn-sd-mtk-03k-gabungan-arsir-sedang-sulit.md`

**MTK-03l · Sudut & Jenis-jenisnya** (fokus Kab)
- [ ] `osn-sd-mtk-03l-sudut-jenis-campur.md`
- [ ] `osn-sd-mtk-03l-sudut-jenis-mudah.md`
- [ ] `osn-sd-mtk-03l-sudut-jenis-sedang.md`
- [ ] `osn-sd-mtk-03l-sudut-jenis-sulit.md`
- [ ] `osn-sd-mtk-03l-sudut-jenis-mudah-sedang.md`
- [ ] `osn-sd-mtk-03l-sudut-jenis-sedang-sulit.md`

**MTK-03m · Jumlah Sudut Dalam Segitiga/Segiempat** (fokus Kab)
- [ ] `osn-sd-mtk-03m-jumlah-sudut-campur.md`
- [ ] `osn-sd-mtk-03m-jumlah-sudut-mudah.md`
- [ ] `osn-sd-mtk-03m-jumlah-sudut-sedang.md`
- [ ] `osn-sd-mtk-03m-jumlah-sudut-sulit.md`
- [ ] `osn-sd-mtk-03m-jumlah-sudut-mudah-sedang.md`
- [ ] `osn-sd-mtk-03m-jumlah-sudut-sedang-sulit.md`

### MTK-04 · Geometri Ruang (13 sub-bab)

**MTK-04a · Sifat & Elemen Bangun Ruang (Rusuk, Sisi, Titik Sudut)** (fokus Kab)
- [ ] `osn-sd-mtk-04a-elemen-bangun-ruang-campur.md`
- [ ] `osn-sd-mtk-04a-elemen-bangun-ruang-mudah.md`
- [ ] `osn-sd-mtk-04a-elemen-bangun-ruang-sedang.md`
- [ ] `osn-sd-mtk-04a-elemen-bangun-ruang-sulit.md`
- [ ] `osn-sd-mtk-04a-elemen-bangun-ruang-mudah-sedang.md`
- [ ] `osn-sd-mtk-04a-elemen-bangun-ruang-sedang-sulit.md`

**MTK-04b · Volume Kubus** (fokus Kab)
- [ ] `osn-sd-mtk-04b-volume-kubus-campur.md`
- [ ] `osn-sd-mtk-04b-volume-kubus-mudah.md`
- [ ] `osn-sd-mtk-04b-volume-kubus-sedang.md`
- [ ] `osn-sd-mtk-04b-volume-kubus-sulit.md`
- [ ] `osn-sd-mtk-04b-volume-kubus-mudah-sedang.md`
- [ ] `osn-sd-mtk-04b-volume-kubus-sedang-sulit.md`

**MTK-04c · Volume Balok** (fokus Kab)
- [ ] `osn-sd-mtk-04c-volume-balok-campur.md`
- [ ] `osn-sd-mtk-04c-volume-balok-mudah.md`
- [ ] `osn-sd-mtk-04c-volume-balok-sedang.md`
- [ ] `osn-sd-mtk-04c-volume-balok-sulit.md`
- [ ] `osn-sd-mtk-04c-volume-balok-mudah-sedang.md`
- [ ] `osn-sd-mtk-04c-volume-balok-sedang-sulit.md`

**MTK-04d · Volume Prisma & Limas** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-04d-volume-prisma-limas-campur.md`
- [ ] `osn-sd-mtk-04d-volume-prisma-limas-mudah.md`
- [ ] `osn-sd-mtk-04d-volume-prisma-limas-sedang.md`
- [ ] `osn-sd-mtk-04d-volume-prisma-limas-sulit.md`
- [ ] `osn-sd-mtk-04d-volume-prisma-limas-mudah-sedang.md`
- [ ] `osn-sd-mtk-04d-volume-prisma-limas-sedang-sulit.md`

**MTK-04e · Volume Tabung** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-04e-volume-tabung-campur.md`
- [ ] `osn-sd-mtk-04e-volume-tabung-mudah.md`
- [ ] `osn-sd-mtk-04e-volume-tabung-sedang.md`
- [ ] `osn-sd-mtk-04e-volume-tabung-sulit.md`
- [ ] `osn-sd-mtk-04e-volume-tabung-mudah-sedang.md`
- [ ] `osn-sd-mtk-04e-volume-tabung-sedang-sulit.md`

**MTK-04f · Volume Kerucut & Bola** (fokus Prov)
- [ ] `osn-sd-mtk-04f-volume-kerucut-bola-campur.md`
- [ ] `osn-sd-mtk-04f-volume-kerucut-bola-mudah.md`
- [ ] `osn-sd-mtk-04f-volume-kerucut-bola-sedang.md`
- [ ] `osn-sd-mtk-04f-volume-kerucut-bola-sulit.md`
- [ ] `osn-sd-mtk-04f-volume-kerucut-bola-mudah-sedang.md`
- [ ] `osn-sd-mtk-04f-volume-kerucut-bola-sedang-sulit.md`

**MTK-04g · Luas Permukaan Kubus** (fokus Kab)
- [ ] `osn-sd-mtk-04g-lp-kubus-campur.md`
- [ ] `osn-sd-mtk-04g-lp-kubus-mudah.md`
- [ ] `osn-sd-mtk-04g-lp-kubus-sedang.md`
- [ ] `osn-sd-mtk-04g-lp-kubus-sulit.md`
- [ ] `osn-sd-mtk-04g-lp-kubus-mudah-sedang.md`
- [ ] `osn-sd-mtk-04g-lp-kubus-sedang-sulit.md`

**MTK-04h · Luas Permukaan Balok** (fokus Kab)
- [ ] `osn-sd-mtk-04h-lp-balok-campur.md`
- [ ] `osn-sd-mtk-04h-lp-balok-mudah.md`
- [ ] `osn-sd-mtk-04h-lp-balok-sedang.md`
- [ ] `osn-sd-mtk-04h-lp-balok-sulit.md`
- [ ] `osn-sd-mtk-04h-lp-balok-mudah-sedang.md`
- [ ] `osn-sd-mtk-04h-lp-balok-sedang-sulit.md`

**MTK-04i · Luas Permukaan Prisma & Limas** (fokus Prov)
- [ ] `osn-sd-mtk-04i-lp-prisma-limas-campur.md`
- [ ] `osn-sd-mtk-04i-lp-prisma-limas-mudah.md`
- [ ] `osn-sd-mtk-04i-lp-prisma-limas-sedang.md`
- [ ] `osn-sd-mtk-04i-lp-prisma-limas-sulit.md`
- [ ] `osn-sd-mtk-04i-lp-prisma-limas-mudah-sedang.md`
- [ ] `osn-sd-mtk-04i-lp-prisma-limas-sedang-sulit.md`

**MTK-04j · Luas Permukaan Tabung** (fokus Prov)
- [ ] `osn-sd-mtk-04j-lp-tabung-campur.md`
- [ ] `osn-sd-mtk-04j-lp-tabung-mudah.md`
- [ ] `osn-sd-mtk-04j-lp-tabung-sedang.md`
- [ ] `osn-sd-mtk-04j-lp-tabung-sulit.md`
- [ ] `osn-sd-mtk-04j-lp-tabung-mudah-sedang.md`
- [ ] `osn-sd-mtk-04j-lp-tabung-sedang-sulit.md`

**MTK-04k · Jaring-jaring Bangun Ruang** (fokus Kab)
- [ ] `osn-sd-mtk-04k-jaring-jaring-campur.md`
- [ ] `osn-sd-mtk-04k-jaring-jaring-mudah.md`
- [ ] `osn-sd-mtk-04k-jaring-jaring-sedang.md`
- [ ] `osn-sd-mtk-04k-jaring-jaring-sulit.md`
- [ ] `osn-sd-mtk-04k-jaring-jaring-mudah-sedang.md`
- [ ] `osn-sd-mtk-04k-jaring-jaring-sedang-sulit.md`

**MTK-04l · Bangun Ruang Gabungan** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-04l-ruang-gabungan-campur.md`
- [ ] `osn-sd-mtk-04l-ruang-gabungan-mudah.md`
- [ ] `osn-sd-mtk-04l-ruang-gabungan-sedang.md`
- [ ] `osn-sd-mtk-04l-ruang-gabungan-sulit.md`
- [ ] `osn-sd-mtk-04l-ruang-gabungan-mudah-sedang.md`
- [ ] `osn-sd-mtk-04l-ruang-gabungan-sedang-sulit.md`

**MTK-04m · Aplikasi (Kapasitas Wadah, Debit)** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-04m-aplikasi-kapasitas-campur.md`
- [ ] `osn-sd-mtk-04m-aplikasi-kapasitas-mudah.md`
- [ ] `osn-sd-mtk-04m-aplikasi-kapasitas-sedang.md`
- [ ] `osn-sd-mtk-04m-aplikasi-kapasitas-sulit.md`
- [ ] `osn-sd-mtk-04m-aplikasi-kapasitas-mudah-sedang.md`
- [ ] `osn-sd-mtk-04m-aplikasi-kapasitas-sedang-sulit.md`

### MTK-05 · Pengukuran (12 sub-bab)

**MTK-05a · Konversi Satuan Panjang (km–mm)** (fokus Kab)
- [ ] `osn-sd-mtk-05a-konversi-panjang-campur.md`
- [ ] `osn-sd-mtk-05a-konversi-panjang-mudah.md`
- [ ] `osn-sd-mtk-05a-konversi-panjang-sedang.md`
- [ ] `osn-sd-mtk-05a-konversi-panjang-sulit.md`
- [ ] `osn-sd-mtk-05a-konversi-panjang-mudah-sedang.md`
- [ ] `osn-sd-mtk-05a-konversi-panjang-sedang-sulit.md`

**MTK-05b · Konversi Satuan Berat (ton–mg)** (fokus Kab)
- [ ] `osn-sd-mtk-05b-konversi-berat-campur.md`
- [ ] `osn-sd-mtk-05b-konversi-berat-mudah.md`
- [ ] `osn-sd-mtk-05b-konversi-berat-sedang.md`
- [ ] `osn-sd-mtk-05b-konversi-berat-sulit.md`
- [ ] `osn-sd-mtk-05b-konversi-berat-mudah-sedang.md`
- [ ] `osn-sd-mtk-05b-konversi-berat-sedang-sulit.md`

**MTK-05c · Konversi Satuan Luas (km²–mm², ha, are)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-05c-konversi-luas-campur.md`
- [ ] `osn-sd-mtk-05c-konversi-luas-mudah.md`
- [ ] `osn-sd-mtk-05c-konversi-luas-sedang.md`
- [ ] `osn-sd-mtk-05c-konversi-luas-sulit.md`
- [ ] `osn-sd-mtk-05c-konversi-luas-mudah-sedang.md`
- [ ] `osn-sd-mtk-05c-konversi-luas-sedang-sulit.md`

**MTK-05d · Konversi Satuan Volume (m³–cm³, kl–ml)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-05d-konversi-volume-campur.md`
- [ ] `osn-sd-mtk-05d-konversi-volume-mudah.md`
- [ ] `osn-sd-mtk-05d-konversi-volume-sedang.md`
- [ ] `osn-sd-mtk-05d-konversi-volume-sulit.md`
- [ ] `osn-sd-mtk-05d-konversi-volume-mudah-sedang.md`
- [ ] `osn-sd-mtk-05d-konversi-volume-sedang-sulit.md`

**MTK-05e · Konversi Satuan Waktu (tahun–detik)** (fokus Kab)
- [ ] `osn-sd-mtk-05e-konversi-waktu-campur.md`
- [ ] `osn-sd-mtk-05e-konversi-waktu-mudah.md`
- [ ] `osn-sd-mtk-05e-konversi-waktu-sedang.md`
- [ ] `osn-sd-mtk-05e-konversi-waktu-sulit.md`
- [ ] `osn-sd-mtk-05e-konversi-waktu-mudah-sedang.md`
- [ ] `osn-sd-mtk-05e-konversi-waktu-sedang-sulit.md`

**MTK-05f · Operasi Waktu (Jam Masuk–Pulang)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-05f-operasi-waktu-campur.md`
- [ ] `osn-sd-mtk-05f-operasi-waktu-mudah.md`
- [ ] `osn-sd-mtk-05f-operasi-waktu-sedang.md`
- [ ] `osn-sd-mtk-05f-operasi-waktu-sulit.md`
- [ ] `osn-sd-mtk-05f-operasi-waktu-mudah-sedang.md`
- [ ] `osn-sd-mtk-05f-operasi-waktu-sedang-sulit.md`

**MTK-05g · Kecepatan, Jarak, Waktu** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-05g-kecepatan-jarak-waktu-campur.md`
- [ ] `osn-sd-mtk-05g-kecepatan-jarak-waktu-mudah.md`
- [ ] `osn-sd-mtk-05g-kecepatan-jarak-waktu-sedang.md`
- [ ] `osn-sd-mtk-05g-kecepatan-jarak-waktu-sulit.md`
- [ ] `osn-sd-mtk-05g-kecepatan-jarak-waktu-mudah-sedang.md`
- [ ] `osn-sd-mtk-05g-kecepatan-jarak-waktu-sedang-sulit.md`

**MTK-05h · Konversi Satuan Kecepatan (km/jam ↔ m/detik)** (fokus Prov)
- [ ] `osn-sd-mtk-05h-konversi-kecepatan-campur.md`
- [ ] `osn-sd-mtk-05h-konversi-kecepatan-mudah.md`
- [ ] `osn-sd-mtk-05h-konversi-kecepatan-sedang.md`
- [ ] `osn-sd-mtk-05h-konversi-kecepatan-sulit.md`
- [ ] `osn-sd-mtk-05h-konversi-kecepatan-mudah-sedang.md`
- [ ] `osn-sd-mtk-05h-konversi-kecepatan-sedang-sulit.md`

**MTK-05i · Debit (Volume per Waktu)** (fokus Prov)
- [ ] `osn-sd-mtk-05i-debit-campur.md`
- [ ] `osn-sd-mtk-05i-debit-mudah.md`
- [ ] `osn-sd-mtk-05i-debit-sedang.md`
- [ ] `osn-sd-mtk-05i-debit-sulit.md`
- [ ] `osn-sd-mtk-05i-debit-mudah-sedang.md`
- [ ] `osn-sd-mtk-05i-debit-sedang-sulit.md`

**MTK-05j · Konversi Satuan Debit** (fokus Prov)
- [ ] `osn-sd-mtk-05j-konversi-debit-campur.md`
- [ ] `osn-sd-mtk-05j-konversi-debit-mudah.md`
- [ ] `osn-sd-mtk-05j-konversi-debit-sedang.md`
- [ ] `osn-sd-mtk-05j-konversi-debit-sulit.md`
- [ ] `osn-sd-mtk-05j-konversi-debit-mudah-sedang.md`
- [ ] `osn-sd-mtk-05j-konversi-debit-sedang-sulit.md`

**MTK-05k · Soal Cerita Pengukuran Kompleks** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-05k-cerita-pengukuran-campur.md`
- [ ] `osn-sd-mtk-05k-cerita-pengukuran-mudah.md`
- [ ] `osn-sd-mtk-05k-cerita-pengukuran-sedang.md`
- [ ] `osn-sd-mtk-05k-cerita-pengukuran-sulit.md`
- [ ] `osn-sd-mtk-05k-cerita-pengukuran-mudah-sedang.md`
- [ ] `osn-sd-mtk-05k-cerita-pengukuran-sedang-sulit.md`

**MTK-05l · Selisih Waktu/Jarak/Kecepatan** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-05l-selisih-waktu-jarak-campur.md`
- [ ] `osn-sd-mtk-05l-selisih-waktu-jarak-mudah.md`
- [ ] `osn-sd-mtk-05l-selisih-waktu-jarak-sedang.md`
- [ ] `osn-sd-mtk-05l-selisih-waktu-jarak-sulit.md`
- [ ] `osn-sd-mtk-05l-selisih-waktu-jarak-mudah-sedang.md`
- [ ] `osn-sd-mtk-05l-selisih-waktu-jarak-sedang-sulit.md`

### MTK-06 · Aritmetika Sosial (10 sub-bab)

**MTK-06a · Harga Beli, Harga Jual, Untung, Rugi** (fokus Kab)
- [ ] `osn-sd-mtk-06a-untung-rugi-campur.md`
- [ ] `osn-sd-mtk-06a-untung-rugi-mudah.md`
- [ ] `osn-sd-mtk-06a-untung-rugi-sedang.md`
- [ ] `osn-sd-mtk-06a-untung-rugi-sulit.md`
- [ ] `osn-sd-mtk-06a-untung-rugi-mudah-sedang.md`
- [ ] `osn-sd-mtk-06a-untung-rugi-sedang-sulit.md`

**MTK-06b · Persentase Untung & Rugi** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-06b-persen-untung-rugi-campur.md`
- [ ] `osn-sd-mtk-06b-persen-untung-rugi-mudah.md`
- [ ] `osn-sd-mtk-06b-persen-untung-rugi-sedang.md`
- [ ] `osn-sd-mtk-06b-persen-untung-rugi-sulit.md`
- [ ] `osn-sd-mtk-06b-persen-untung-rugi-mudah-sedang.md`
- [ ] `osn-sd-mtk-06b-persen-untung-rugi-sedang-sulit.md`

**MTK-06c · Diskon (Potongan Harga)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-06c-diskon-campur.md`
- [ ] `osn-sd-mtk-06c-diskon-mudah.md`
- [ ] `osn-sd-mtk-06c-diskon-sedang.md`
- [ ] `osn-sd-mtk-06c-diskon-sulit.md`
- [ ] `osn-sd-mtk-06c-diskon-mudah-sedang.md`
- [ ] `osn-sd-mtk-06c-diskon-sedang-sulit.md`

**MTK-06d · Diskon Berlapis / Diskon Ganda** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-06d-diskon-berlapis-campur.md`
- [ ] `osn-sd-mtk-06d-diskon-berlapis-mudah.md`
- [ ] `osn-sd-mtk-06d-diskon-berlapis-sedang.md`
- [ ] `osn-sd-mtk-06d-diskon-berlapis-sulit.md`
- [ ] `osn-sd-mtk-06d-diskon-berlapis-mudah-sedang.md`
- [ ] `osn-sd-mtk-06d-diskon-berlapis-sedang-sulit.md`

**MTK-06e · Bunga Tunggal** (fokus Prov)
- [ ] `osn-sd-mtk-06e-bunga-tunggal-campur.md`
- [ ] `osn-sd-mtk-06e-bunga-tunggal-mudah.md`
- [ ] `osn-sd-mtk-06e-bunga-tunggal-sedang.md`
- [ ] `osn-sd-mtk-06e-bunga-tunggal-sulit.md`
- [ ] `osn-sd-mtk-06e-bunga-tunggal-mudah-sedang.md`
- [ ] `osn-sd-mtk-06e-bunga-tunggal-sedang-sulit.md`

**MTK-06f · Pajak (PPN, Pajak Penghasilan)** (fokus Prov)
- [ ] `osn-sd-mtk-06f-pajak-campur.md`
- [ ] `osn-sd-mtk-06f-pajak-mudah.md`
- [ ] `osn-sd-mtk-06f-pajak-sedang.md`
- [ ] `osn-sd-mtk-06f-pajak-sulit.md`
- [ ] `osn-sd-mtk-06f-pajak-mudah-sedang.md`
- [ ] `osn-sd-mtk-06f-pajak-sedang-sulit.md`

**MTK-06g · Perbandingan Senilai** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-06g-perbandingan-senilai-campur.md`
- [ ] `osn-sd-mtk-06g-perbandingan-senilai-mudah.md`
- [ ] `osn-sd-mtk-06g-perbandingan-senilai-sedang.md`
- [ ] `osn-sd-mtk-06g-perbandingan-senilai-sulit.md`
- [ ] `osn-sd-mtk-06g-perbandingan-senilai-mudah-sedang.md`
- [ ] `osn-sd-mtk-06g-perbandingan-senilai-sedang-sulit.md`

**MTK-06h · Perbandingan Berbalik Nilai** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-06h-perbandingan-berbalik-campur.md`
- [ ] `osn-sd-mtk-06h-perbandingan-berbalik-mudah.md`
- [ ] `osn-sd-mtk-06h-perbandingan-berbalik-sedang.md`
- [ ] `osn-sd-mtk-06h-perbandingan-berbalik-sulit.md`
- [ ] `osn-sd-mtk-06h-perbandingan-berbalik-mudah-sedang.md`
- [ ] `osn-sd-mtk-06h-perbandingan-berbalik-sedang-sulit.md`

**MTK-06i · Skala pada Peta/Denah** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-06i-skala-campur.md`
- [ ] `osn-sd-mtk-06i-skala-mudah.md`
- [ ] `osn-sd-mtk-06i-skala-sedang.md`
- [ ] `osn-sd-mtk-06i-skala-sulit.md`
- [ ] `osn-sd-mtk-06i-skala-mudah-sedang.md`
- [ ] `osn-sd-mtk-06i-skala-sedang-sulit.md`

**MTK-06j · Soal Cerita Kombinasi** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-06j-cerita-kombinasi-campur.md`
- [ ] `osn-sd-mtk-06j-cerita-kombinasi-mudah.md`
- [ ] `osn-sd-mtk-06j-cerita-kombinasi-sedang.md`
- [ ] `osn-sd-mtk-06j-cerita-kombinasi-sulit.md`
- [ ] `osn-sd-mtk-06j-cerita-kombinasi-mudah-sedang.md`
- [ ] `osn-sd-mtk-06j-cerita-kombinasi-sedang-sulit.md`

### MTK-07 · Statistika & Peluang (13 sub-bab)

**MTK-07a · Pengumpulan & Penyajian Data (Tabel, Turus)** (fokus Kab)
- [ ] `osn-sd-mtk-07a-penyajian-data-campur.md`
- [ ] `osn-sd-mtk-07a-penyajian-data-mudah.md`
- [ ] `osn-sd-mtk-07a-penyajian-data-sedang.md`
- [ ] `osn-sd-mtk-07a-penyajian-data-sulit.md`
- [ ] `osn-sd-mtk-07a-penyajian-data-mudah-sedang.md`
- [ ] `osn-sd-mtk-07a-penyajian-data-sedang-sulit.md`

**MTK-07b · Membaca Diagram Batang** (fokus Kab)
- [ ] `osn-sd-mtk-07b-diagram-batang-campur.md`
- [ ] `osn-sd-mtk-07b-diagram-batang-mudah.md`
- [ ] `osn-sd-mtk-07b-diagram-batang-sedang.md`
- [ ] `osn-sd-mtk-07b-diagram-batang-sulit.md`
- [ ] `osn-sd-mtk-07b-diagram-batang-mudah-sedang.md`
- [ ] `osn-sd-mtk-07b-diagram-batang-sedang-sulit.md`

**MTK-07c · Membaca Diagram Garis** (fokus Kab)
- [ ] `osn-sd-mtk-07c-diagram-garis-campur.md`
- [ ] `osn-sd-mtk-07c-diagram-garis-mudah.md`
- [ ] `osn-sd-mtk-07c-diagram-garis-sedang.md`
- [ ] `osn-sd-mtk-07c-diagram-garis-sulit.md`
- [ ] `osn-sd-mtk-07c-diagram-garis-mudah-sedang.md`
- [ ] `osn-sd-mtk-07c-diagram-garis-sedang-sulit.md`

**MTK-07d · Membaca Diagram Lingkaran (%, Derajat)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-07d-diagram-lingkaran-campur.md`
- [ ] `osn-sd-mtk-07d-diagram-lingkaran-mudah.md`
- [ ] `osn-sd-mtk-07d-diagram-lingkaran-sedang.md`
- [ ] `osn-sd-mtk-07d-diagram-lingkaran-sulit.md`
- [ ] `osn-sd-mtk-07d-diagram-lingkaran-mudah-sedang.md`
- [ ] `osn-sd-mtk-07d-diagram-lingkaran-sedang-sulit.md`

**MTK-07e · Mean (Rata-rata) Sederhana** (fokus Kab)
- [ ] `osn-sd-mtk-07e-mean-campur.md`
- [ ] `osn-sd-mtk-07e-mean-mudah.md`
- [ ] `osn-sd-mtk-07e-mean-sedang.md`
- [ ] `osn-sd-mtk-07e-mean-sulit.md`
- [ ] `osn-sd-mtk-07e-mean-mudah-sedang.md`
- [ ] `osn-sd-mtk-07e-mean-sedang-sulit.md`

**MTK-07f · Mean dengan Data Hilang** (fokus Prov)
- [ ] `osn-sd-mtk-07f-mean-data-hilang-campur.md`
- [ ] `osn-sd-mtk-07f-mean-data-hilang-mudah.md`
- [ ] `osn-sd-mtk-07f-mean-data-hilang-sedang.md`
- [ ] `osn-sd-mtk-07f-mean-data-hilang-sulit.md`
- [ ] `osn-sd-mtk-07f-mean-data-hilang-mudah-sedang.md`
- [ ] `osn-sd-mtk-07f-mean-data-hilang-sedang-sulit.md`

**MTK-07g · Median** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-07g-median-campur.md`
- [ ] `osn-sd-mtk-07g-median-mudah.md`
- [ ] `osn-sd-mtk-07g-median-sedang.md`
- [ ] `osn-sd-mtk-07g-median-sulit.md`
- [ ] `osn-sd-mtk-07g-median-mudah-sedang.md`
- [ ] `osn-sd-mtk-07g-median-sedang-sulit.md`

**MTK-07h · Modus** (fokus Kab)
- [ ] `osn-sd-mtk-07h-modus-campur.md`
- [ ] `osn-sd-mtk-07h-modus-mudah.md`
- [ ] `osn-sd-mtk-07h-modus-sedang.md`
- [ ] `osn-sd-mtk-07h-modus-sulit.md`
- [ ] `osn-sd-mtk-07h-modus-mudah-sedang.md`
- [ ] `osn-sd-mtk-07h-modus-sedang-sulit.md`

**MTK-07i · Jangkauan** (fokus Kab)
- [ ] `osn-sd-mtk-07i-jangkauan-campur.md`
- [ ] `osn-sd-mtk-07i-jangkauan-mudah.md`
- [ ] `osn-sd-mtk-07i-jangkauan-sedang.md`
- [ ] `osn-sd-mtk-07i-jangkauan-sulit.md`
- [ ] `osn-sd-mtk-07i-jangkauan-mudah-sedang.md`
- [ ] `osn-sd-mtk-07i-jangkauan-sedang-sulit.md`

**MTK-07j · Statistik Gabungan (Mean Baru setelah Penambahan)** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-07j-statistik-gabungan-campur.md`
- [ ] `osn-sd-mtk-07j-statistik-gabungan-mudah.md`
- [ ] `osn-sd-mtk-07j-statistik-gabungan-sedang.md`
- [ ] `osn-sd-mtk-07j-statistik-gabungan-sulit.md`
- [ ] `osn-sd-mtk-07j-statistik-gabungan-mudah-sedang.md`
- [ ] `osn-sd-mtk-07j-statistik-gabungan-sedang-sulit.md`

**MTK-07k · Peluang Sederhana (Dadu, Koin)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-07k-peluang-sederhana-campur.md`
- [ ] `osn-sd-mtk-07k-peluang-sederhana-mudah.md`
- [ ] `osn-sd-mtk-07k-peluang-sederhana-sedang.md`
- [ ] `osn-sd-mtk-07k-peluang-sederhana-sulit.md`
- [ ] `osn-sd-mtk-07k-peluang-sederhana-mudah-sedang.md`
- [ ] `osn-sd-mtk-07k-peluang-sederhana-sedang-sulit.md`

**MTK-07l · Peluang Kombinasi Sederhana** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-07l-peluang-kombinasi-campur.md`
- [ ] `osn-sd-mtk-07l-peluang-kombinasi-mudah.md`
- [ ] `osn-sd-mtk-07l-peluang-kombinasi-sedang.md`
- [ ] `osn-sd-mtk-07l-peluang-kombinasi-sulit.md`
- [ ] `osn-sd-mtk-07l-peluang-kombinasi-mudah-sedang.md`
- [ ] `osn-sd-mtk-07l-peluang-kombinasi-sedang-sulit.md`

**MTK-07m · Soal Cerita Statistika Aplikatif** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-07m-cerita-statistika-campur.md`
- [ ] `osn-sd-mtk-07m-cerita-statistika-mudah.md`
- [ ] `osn-sd-mtk-07m-cerita-statistika-sedang.md`
- [ ] `osn-sd-mtk-07m-cerita-statistika-sulit.md`
- [ ] `osn-sd-mtk-07m-cerita-statistika-mudah-sedang.md`
- [ ] `osn-sd-mtk-07m-cerita-statistika-sedang-sulit.md`

### MTK-08 · Pola Bilangan, Logika, & Aljabar Dasar (11 sub-bab)

**MTK-08a · Pola Bilangan Aritmetika** (fokus Kab)
- [ ] `osn-sd-mtk-08a-pola-aritmetika-campur.md`
- [ ] `osn-sd-mtk-08a-pola-aritmetika-mudah.md`
- [ ] `osn-sd-mtk-08a-pola-aritmetika-sedang.md`
- [ ] `osn-sd-mtk-08a-pola-aritmetika-sulit.md`
- [ ] `osn-sd-mtk-08a-pola-aritmetika-mudah-sedang.md`
- [ ] `osn-sd-mtk-08a-pola-aritmetika-sedang-sulit.md`

**MTK-08b · Pola Bilangan Geometri** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-08b-pola-geometri-campur.md`
- [ ] `osn-sd-mtk-08b-pola-geometri-mudah.md`
- [ ] `osn-sd-mtk-08b-pola-geometri-sedang.md`
- [ ] `osn-sd-mtk-08b-pola-geometri-sulit.md`
- [ ] `osn-sd-mtk-08b-pola-geometri-mudah-sedang.md`
- [ ] `osn-sd-mtk-08b-pola-geometri-sedang-sulit.md`

**MTK-08c · Pola Bilangan Khusus (Fibonacci, Segitiga, Persegi)** (fokus Prov)
- [ ] `osn-sd-mtk-08c-pola-khusus-campur.md`
- [ ] `osn-sd-mtk-08c-pola-khusus-mudah.md`
- [ ] `osn-sd-mtk-08c-pola-khusus-sedang.md`
- [ ] `osn-sd-mtk-08c-pola-khusus-sulit.md`
- [ ] `osn-sd-mtk-08c-pola-khusus-mudah-sedang.md`
- [ ] `osn-sd-mtk-08c-pola-khusus-sedang-sulit.md`

**MTK-08d · Suku ke-n Barisan Sederhana** (fokus Prov)
- [ ] `osn-sd-mtk-08d-suku-ke-n-campur.md`
- [ ] `osn-sd-mtk-08d-suku-ke-n-mudah.md`
- [ ] `osn-sd-mtk-08d-suku-ke-n-sedang.md`
- [ ] `osn-sd-mtk-08d-suku-ke-n-sulit.md`
- [ ] `osn-sd-mtk-08d-suku-ke-n-mudah-sedang.md`
- [ ] `osn-sd-mtk-08d-suku-ke-n-sedang-sulit.md`

**MTK-08e · Pola Gambar (Visual → Angka)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-08e-pola-gambar-campur.md`
- [ ] `osn-sd-mtk-08e-pola-gambar-mudah.md`
- [ ] `osn-sd-mtk-08e-pola-gambar-sedang.md`
- [ ] `osn-sd-mtk-08e-pola-gambar-sulit.md`
- [ ] `osn-sd-mtk-08e-pola-gambar-mudah-sedang.md`
- [ ] `osn-sd-mtk-08e-pola-gambar-sedang-sulit.md`

**MTK-08f · Persamaan Satu Variabel** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-08f-persamaan-satu-variabel-campur.md`
- [ ] `osn-sd-mtk-08f-persamaan-satu-variabel-mudah.md`
- [ ] `osn-sd-mtk-08f-persamaan-satu-variabel-sedang.md`
- [ ] `osn-sd-mtk-08f-persamaan-satu-variabel-sulit.md`
- [ ] `osn-sd-mtk-08f-persamaan-satu-variabel-mudah-sedang.md`
- [ ] `osn-sd-mtk-08f-persamaan-satu-variabel-sedang-sulit.md`

**MTK-08g · Pertidaksamaan Sederhana** (fokus Prov)
- [ ] `osn-sd-mtk-08g-pertidaksamaan-campur.md`
- [ ] `osn-sd-mtk-08g-pertidaksamaan-mudah.md`
- [ ] `osn-sd-mtk-08g-pertidaksamaan-sedang.md`
- [ ] `osn-sd-mtk-08g-pertidaksamaan-sulit.md`
- [ ] `osn-sd-mtk-08g-pertidaksamaan-mudah-sedang.md`
- [ ] `osn-sd-mtk-08g-pertidaksamaan-sedang-sulit.md`

**MTK-08h · Teka-teki Logika (Kombinatorial)** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-08h-teka-teki-logika-campur.md`
- [ ] `osn-sd-mtk-08h-teka-teki-logika-mudah.md`
- [ ] `osn-sd-mtk-08h-teka-teki-logika-sedang.md`
- [ ] `osn-sd-mtk-08h-teka-teki-logika-sulit.md`
- [ ] `osn-sd-mtk-08h-teka-teki-logika-mudah-sedang.md`
- [ ] `osn-sd-mtk-08h-teka-teki-logika-sedang-sulit.md`

**MTK-08i · Penalaran Deduktif (Jika-Maka)** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-08i-penalaran-deduktif-campur.md`
- [ ] `osn-sd-mtk-08i-penalaran-deduktif-mudah.md`
- [ ] `osn-sd-mtk-08i-penalaran-deduktif-sedang.md`
- [ ] `osn-sd-mtk-08i-penalaran-deduktif-sulit.md`
- [ ] `osn-sd-mtk-08i-penalaran-deduktif-mudah-sedang.md`
- [ ] `osn-sd-mtk-08i-penalaran-deduktif-sedang-sulit.md`

**MTK-08j · Soal Cerita Aljabar (Umur, Usia, dst.)** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-08j-cerita-aljabar-campur.md`
- [ ] `osn-sd-mtk-08j-cerita-aljabar-mudah.md`
- [ ] `osn-sd-mtk-08j-cerita-aljabar-sedang.md`
- [ ] `osn-sd-mtk-08j-cerita-aljabar-sulit.md`
- [ ] `osn-sd-mtk-08j-cerita-aljabar-mudah-sedang.md`
- [ ] `osn-sd-mtk-08j-cerita-aljabar-sedang-sulit.md`

**MTK-08k · Soal Kombinatorik Dasar** (fokus Nas)
- [ ] `osn-sd-mtk-08k-kombinatorik-campur.md`
- [ ] `osn-sd-mtk-08k-kombinatorik-mudah.md`
- [ ] `osn-sd-mtk-08k-kombinatorik-sedang.md`
- [ ] `osn-sd-mtk-08k-kombinatorik-sulit.md`
- [ ] `osn-sd-mtk-08k-kombinatorik-mudah-sedang.md`
- [ ] `osn-sd-mtk-08k-kombinatorik-sedang-sulit.md`

---

## Rekap Statistik Sub-Bab

| Bab | Sub-Bab | File (×6 tingkat) | Soal |
|-----|---------|-------------------|------|
| IPA-01 · Makhluk Hidup & Lingkungan | 13 | 78 | 7.800 |
| IPA-02 · Tubuh Manusia & Kesehatan | 13 | 78 | 7.800 |
| IPA-03 · Gaya, Gerak, dan Energi | 12 | 72 | 7.200 |
| IPA-04 · Cahaya, Bunyi, Panas, Zat | 14 | 84 | 8.400 |
| IPA-05 · Bumi, Antariksa, Lingkungan | 14 | 84 | 8.400 |
| **Subtotal IPA** | **66** | **396** | **39.600** |
| MTK-01 · Bilangan & Operasi | 11 | 66 | 6.600 |
| MTK-02 · Pecahan, Desimal, Persen | 11 | 66 | 6.600 |
| MTK-03 · Geometri Datar | 13 | 78 | 7.800 |
| MTK-04 · Geometri Ruang | 13 | 78 | 7.800 |
| MTK-05 · Pengukuran | 12 | 72 | 7.200 |
| MTK-06 · Aritmetika Sosial | 10 | 60 | 6.000 |
| MTK-07 · Statistika & Peluang | 13 | 78 | 7.800 |
| MTK-08 · Pola, Logika, Aljabar | 11 | 66 | 6.600 |
| **Subtotal MTK** | **94** | **564** | **56.400** |
| **TOTAL** | **160** | **960** | **96.000** |

---

## Catatan Eksekusi

- **1 file = 100 soal PG**, semua pada satu sub-bab. Variasi dicipta lewat kombinasi tipe soal khas + ragam angka + ragam konteks (lihat daftar **Tipe Soal Khas OSN** di file taksonomi terkait).
- Default ekstensi `.md` (markdown teks lengkap dengan Bagian I Materi + Bagian II 100 Soal + Bagian III Ringkasan). HTML interaktif `.html` hanya kalau user eksplisit minta.
- Struktur file sama dengan Mode Per-Materi MASTER-INDEX: **Bagian I (Materi) + Bagian II (100 Soal) + Bagian III (Ringkasan)** — tapi Bagian I difokuskan pada satu sub-bab saja.
- Update centang `[ ]` → `[x]` setiap kali file selesai. Index ini adalah sumber kebenaran untuk progres sub-bab.
- File ini **melengkapi** [_MASTER-INDEX.md](_MASTER-INDEX.md), bukan menggantinya. Gunakan MASTER-INDEX untuk paket bab-level luas, dan file ini untuk drill mendalam satu sub-topik.
- Urutan eksekusi default mengikuti urutan sub-bab di taksonomi (alfabetis kode huruf). User boleh redirect kapan saja.

---

## Trigger Generation per Sub-Bab

Untuk minta generate file sub-bab, gunakan trigger spesifik:

- "Generate `osn-sd-mtk-01f-fpb-sulit.md`"
- "Buatkan 100 soal sub-bab FPB tingkat Nasional"
- "Sub-bab IPA-03d tuas, tingkat campur"
- "Lanjutkan dari MASTER-SUBBAB-INDEX baris berikutnya yang belum dicentang"

Default behaviour: skill akan baca file taksonomi terkait → ambil **Tipe Soal Khas OSN** dan **Miskonsepsi** untuk sub-bab itu → distribusikan 100 soal di antaranya dengan komposisi tingkat sesuai slug `-mudah / -sedang / -sulit / -campur / -mudah-sedang / -sedang-sulit`.
