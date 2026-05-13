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
osn-sd-{mapel}-{kodeBab}{kodeSubbab}-{slug}-{tingkat}.{html|md}
```

- `kodeBab` = `01`–`08` (MTK) atau `01`–`05` (IPA)
- `kodeSubbab` = huruf kecil `a`, `b`, `c`, … `n` (urutan sesuai taksonomi)
- `slug` = ringkas, kebab-case
- `tingkat` = `campur` · `mudah` · `sedang` · `sulit` · `mudah-sedang` · `sedang-sulit`

**Contoh:** `osn-sd-mtk-01f-fpb-sulit.html` = MTK Bab 01 sub-bab f (FPB), 100 soal tingkat Nasional saja.

Untuk konvensi tingkat (komposisi soal Kab/Prov/Nas), distribusi, dan aturan kualitas — lihat [_MASTER-INDEX.md](_MASTER-INDEX.md) dan [SKILL.md](../osn-sd-prep-extracted/osn-sd-prep/SKILL.md).

> **Catatan:** Saat generate file sub-bab, **seluruh 100 soal harus pada sub-topik tunggal** itu — bukan campur lintas sub-bab. Variasi diciptakan melalui ragam konteks, angka, dan tipe soal khas OSN untuk sub-topik tersebut (lihat detail di [taksonomi-matematika.md](../osn-sd-prep-extracted/osn-sd-prep/references/taksonomi-matematika.md) dan [taksonomi-ipa.md](../osn-sd-prep-extracted/osn-sd-prep/references/taksonomi-ipa.md)).

---

## ⛔ Aturan Anti-Duplikasi (WAJIB)

Karena seluruh 100 soal per file berada di satu sub-topik yang sama, **risiko duplikasi sangat tinggi** dan harus dicegah secara aktif.

1. **Tetap 100 soal per file** — tidak boleh dipotong jadi 50/75/dsb untuk "menghindari pengulangan". Kalau sub-topik kelihatan sempit, perluas dengan ragam konteks (lihat aturan 4) — bukan dengan mengurangi jumlah.
2. **Tidak boleh ada dua soal yang sama persis dalam satu file** — bukan hanya angka, tapi juga **kombinasi (konteks + angka + struktur kalimat)** harus berbeda. Reword saja ≠ soal baru.
3. **Tidak boleh sama persis dengan soal di file sub-bab tingkat lain** (mis. soal nomor 12 di `…-mudah.html` tidak boleh sama persis dengan soal nomor 12 di `…-campur.html`). Kalau "tipe"-nya sama (mis. tipe "soal cerita FPB kantong-kelompok"), angka & konteksnya wajib diubah.
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
- [ ] `osn-sd-ipa-01a-ciri-makhluk-hidup-campur.html`
- [ ] `osn-sd-ipa-01a-ciri-makhluk-hidup-mudah.html`
- [ ] `osn-sd-ipa-01a-ciri-makhluk-hidup-sedang.html`
- [ ] `osn-sd-ipa-01a-ciri-makhluk-hidup-sulit.html`
- [ ] `osn-sd-ipa-01a-ciri-makhluk-hidup-mudah-sedang.html`
- [ ] `osn-sd-ipa-01a-ciri-makhluk-hidup-sedang-sulit.html`

**IPA-01b · Klasifikasi Hewan (Vertebrata/Invertebrata)** (fokus Kab)
- [ ] `osn-sd-ipa-01b-klasifikasi-hewan-campur.html`
- [ ] `osn-sd-ipa-01b-klasifikasi-hewan-mudah.html`
- [ ] `osn-sd-ipa-01b-klasifikasi-hewan-sedang.html`
- [ ] `osn-sd-ipa-01b-klasifikasi-hewan-sulit.html`
- [ ] `osn-sd-ipa-01b-klasifikasi-hewan-mudah-sedang.html`
- [ ] `osn-sd-ipa-01b-klasifikasi-hewan-sedang-sulit.html`

**IPA-01c · Klasifikasi Tumbuhan (Monokotil/Dikotil)** (fokus Kab)
- [ ] `osn-sd-ipa-01c-klasifikasi-tumbuhan-campur.html`
- [ ] `osn-sd-ipa-01c-klasifikasi-tumbuhan-mudah.html`
- [ ] `osn-sd-ipa-01c-klasifikasi-tumbuhan-sedang.html`
- [ ] `osn-sd-ipa-01c-klasifikasi-tumbuhan-sulit.html`
- [ ] `osn-sd-ipa-01c-klasifikasi-tumbuhan-mudah-sedang.html`
- [ ] `osn-sd-ipa-01c-klasifikasi-tumbuhan-sedang-sulit.html`

**IPA-01d · Struktur & Fungsi Bagian Tumbuhan** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-01d-struktur-tumbuhan-campur.html`
- [ ] `osn-sd-ipa-01d-struktur-tumbuhan-mudah.html`
- [ ] `osn-sd-ipa-01d-struktur-tumbuhan-sedang.html`
- [ ] `osn-sd-ipa-01d-struktur-tumbuhan-sulit.html`
- [ ] `osn-sd-ipa-01d-struktur-tumbuhan-mudah-sedang.html`
- [ ] `osn-sd-ipa-01d-struktur-tumbuhan-sedang-sulit.html`

**IPA-01e · Reproduksi Tumbuhan (Vegetatif & Generatif)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-01e-reproduksi-tumbuhan-campur.html`
- [ ] `osn-sd-ipa-01e-reproduksi-tumbuhan-mudah.html`
- [ ] `osn-sd-ipa-01e-reproduksi-tumbuhan-sedang.html`
- [ ] `osn-sd-ipa-01e-reproduksi-tumbuhan-sulit.html`
- [ ] `osn-sd-ipa-01e-reproduksi-tumbuhan-mudah-sedang.html`
- [ ] `osn-sd-ipa-01e-reproduksi-tumbuhan-sedang-sulit.html`

**IPA-01f · Reproduksi Hewan (Ovipar, Vivipar, Ovovivipar)** (fokus Kab)
- [ ] `osn-sd-ipa-01f-reproduksi-hewan-campur.html`
- [ ] `osn-sd-ipa-01f-reproduksi-hewan-mudah.html`
- [ ] `osn-sd-ipa-01f-reproduksi-hewan-sedang.html`
- [ ] `osn-sd-ipa-01f-reproduksi-hewan-sulit.html`
- [ ] `osn-sd-ipa-01f-reproduksi-hewan-mudah-sedang.html`
- [ ] `osn-sd-ipa-01f-reproduksi-hewan-sedang-sulit.html`

**IPA-01g · Daur Hidup Hewan (Metamorfosis)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-01g-metamorfosis-campur.html`
- [ ] `osn-sd-ipa-01g-metamorfosis-mudah.html`
- [ ] `osn-sd-ipa-01g-metamorfosis-sedang.html`
- [ ] `osn-sd-ipa-01g-metamorfosis-sulit.html`
- [ ] `osn-sd-ipa-01g-metamorfosis-mudah-sedang.html`
- [ ] `osn-sd-ipa-01g-metamorfosis-sedang-sulit.html`

**IPA-01h · Adaptasi Hewan (Morfologi, Fisiologi, Tingkah Laku)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-01h-adaptasi-hewan-campur.html`
- [ ] `osn-sd-ipa-01h-adaptasi-hewan-mudah.html`
- [ ] `osn-sd-ipa-01h-adaptasi-hewan-sedang.html`
- [ ] `osn-sd-ipa-01h-adaptasi-hewan-sulit.html`
- [ ] `osn-sd-ipa-01h-adaptasi-hewan-mudah-sedang.html`
- [ ] `osn-sd-ipa-01h-adaptasi-hewan-sedang-sulit.html`

**IPA-01i · Adaptasi Tumbuhan (Xerofit, Hidrofit, Higrofit)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-01i-adaptasi-tumbuhan-campur.html`
- [ ] `osn-sd-ipa-01i-adaptasi-tumbuhan-mudah.html`
- [ ] `osn-sd-ipa-01i-adaptasi-tumbuhan-sedang.html`
- [ ] `osn-sd-ipa-01i-adaptasi-tumbuhan-sulit.html`
- [ ] `osn-sd-ipa-01i-adaptasi-tumbuhan-mudah-sedang.html`
- [ ] `osn-sd-ipa-01i-adaptasi-tumbuhan-sedang-sulit.html`

**IPA-01j · Ekosistem & Komponen-komponennya** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-01j-ekosistem-campur.html`
- [ ] `osn-sd-ipa-01j-ekosistem-mudah.html`
- [ ] `osn-sd-ipa-01j-ekosistem-sedang.html`
- [ ] `osn-sd-ipa-01j-ekosistem-sulit.html`
- [ ] `osn-sd-ipa-01j-ekosistem-mudah-sedang.html`
- [ ] `osn-sd-ipa-01j-ekosistem-sedang-sulit.html`

**IPA-01k · Rantai & Jaring-jaring Makanan** (fokus Prov)
- [ ] `osn-sd-ipa-01k-rantai-makanan-campur.html`
- [ ] `osn-sd-ipa-01k-rantai-makanan-mudah.html`
- [ ] `osn-sd-ipa-01k-rantai-makanan-sedang.html`
- [ ] `osn-sd-ipa-01k-rantai-makanan-sulit.html`
- [ ] `osn-sd-ipa-01k-rantai-makanan-mudah-sedang.html`
- [ ] `osn-sd-ipa-01k-rantai-makanan-sedang-sulit.html`

**IPA-01l · Simbiosis (Mutualisme, Komensalisme, Parasitisme)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-01l-simbiosis-campur.html`
- [ ] `osn-sd-ipa-01l-simbiosis-mudah.html`
- [ ] `osn-sd-ipa-01l-simbiosis-sedang.html`
- [ ] `osn-sd-ipa-01l-simbiosis-sulit.html`
- [ ] `osn-sd-ipa-01l-simbiosis-mudah-sedang.html`
- [ ] `osn-sd-ipa-01l-simbiosis-sedang-sulit.html`

**IPA-01m · Pelestarian Makhluk Hidup & Taman Nasional** (fokus Prov–Nas)
- [ ] `osn-sd-ipa-01m-pelestarian-campur.html`
- [ ] `osn-sd-ipa-01m-pelestarian-mudah.html`
- [ ] `osn-sd-ipa-01m-pelestarian-sedang.html`
- [ ] `osn-sd-ipa-01m-pelestarian-sulit.html`
- [ ] `osn-sd-ipa-01m-pelestarian-mudah-sedang.html`
- [ ] `osn-sd-ipa-01m-pelestarian-sedang-sulit.html`

### IPA-02 · Tubuh Manusia & Kesehatan (13 sub-bab)

**IPA-02a · Sistem Pencernaan (Organ, Enzim, Fungsi)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-02a-pencernaan-campur.html`
- [ ] `osn-sd-ipa-02a-pencernaan-mudah.html`
- [ ] `osn-sd-ipa-02a-pencernaan-sedang.html`
- [ ] `osn-sd-ipa-02a-pencernaan-sulit.html`
- [ ] `osn-sd-ipa-02a-pencernaan-mudah-sedang.html`
- [ ] `osn-sd-ipa-02a-pencernaan-sedang-sulit.html`

**IPA-02b · Sistem Pernapasan** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-02b-pernapasan-campur.html`
- [ ] `osn-sd-ipa-02b-pernapasan-mudah.html`
- [ ] `osn-sd-ipa-02b-pernapasan-sedang.html`
- [ ] `osn-sd-ipa-02b-pernapasan-sulit.html`
- [ ] `osn-sd-ipa-02b-pernapasan-mudah-sedang.html`
- [ ] `osn-sd-ipa-02b-pernapasan-sedang-sulit.html`

**IPA-02c · Sistem Peredaran Darah (Jantung, Pembuluh, Darah)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-02c-peredaran-darah-campur.html`
- [ ] `osn-sd-ipa-02c-peredaran-darah-mudah.html`
- [ ] `osn-sd-ipa-02c-peredaran-darah-sedang.html`
- [ ] `osn-sd-ipa-02c-peredaran-darah-sulit.html`
- [ ] `osn-sd-ipa-02c-peredaran-darah-mudah-sedang.html`
- [ ] `osn-sd-ipa-02c-peredaran-darah-sedang-sulit.html`

**IPA-02d · Sistem Ekskresi (Ginjal, Kulit, Paru-paru, Hati)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-02d-ekskresi-campur.html`
- [ ] `osn-sd-ipa-02d-ekskresi-mudah.html`
- [ ] `osn-sd-ipa-02d-ekskresi-sedang.html`
- [ ] `osn-sd-ipa-02d-ekskresi-sulit.html`
- [ ] `osn-sd-ipa-02d-ekskresi-mudah-sedang.html`
- [ ] `osn-sd-ipa-02d-ekskresi-sedang-sulit.html`

**IPA-02e · Sistem Saraf & Indera (Mata, Telinga, Hidung, Lidah, Kulit)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-02e-saraf-indera-campur.html`
- [ ] `osn-sd-ipa-02e-saraf-indera-mudah.html`
- [ ] `osn-sd-ipa-02e-saraf-indera-sedang.html`
- [ ] `osn-sd-ipa-02e-saraf-indera-sulit.html`
- [ ] `osn-sd-ipa-02e-saraf-indera-mudah-sedang.html`
- [ ] `osn-sd-ipa-02e-saraf-indera-sedang-sulit.html`

**IPA-02f · Sistem Rangka & Otot** (fokus Kab)
- [ ] `osn-sd-ipa-02f-rangka-otot-campur.html`
- [ ] `osn-sd-ipa-02f-rangka-otot-mudah.html`
- [ ] `osn-sd-ipa-02f-rangka-otot-sedang.html`
- [ ] `osn-sd-ipa-02f-rangka-otot-sulit.html`
- [ ] `osn-sd-ipa-02f-rangka-otot-mudah-sedang.html`
- [ ] `osn-sd-ipa-02f-rangka-otot-sedang-sulit.html`

**IPA-02g · Sistem Reproduksi (Level Dasar SD)** (fokus Kab)
- [ ] `osn-sd-ipa-02g-reproduksi-campur.html`
- [ ] `osn-sd-ipa-02g-reproduksi-mudah.html`
- [ ] `osn-sd-ipa-02g-reproduksi-sedang.html`
- [ ] `osn-sd-ipa-02g-reproduksi-sulit.html`
- [ ] `osn-sd-ipa-02g-reproduksi-mudah-sedang.html`
- [ ] `osn-sd-ipa-02g-reproduksi-sedang-sulit.html`

**IPA-02h · Pubertas & Perubahan Tubuh** (fokus Kab)
- [ ] `osn-sd-ipa-02h-pubertas-campur.html`
- [ ] `osn-sd-ipa-02h-pubertas-mudah.html`
- [ ] `osn-sd-ipa-02h-pubertas-sedang.html`
- [ ] `osn-sd-ipa-02h-pubertas-sulit.html`
- [ ] `osn-sd-ipa-02h-pubertas-mudah-sedang.html`
- [ ] `osn-sd-ipa-02h-pubertas-sedang-sulit.html`

**IPA-02i · Gizi Seimbang (Karbohidrat, Protein, Lemak, Vitamin, Mineral, Air)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-02i-gizi-campur.html`
- [ ] `osn-sd-ipa-02i-gizi-mudah.html`
- [ ] `osn-sd-ipa-02i-gizi-sedang.html`
- [ ] `osn-sd-ipa-02i-gizi-sulit.html`
- [ ] `osn-sd-ipa-02i-gizi-mudah-sedang.html`
- [ ] `osn-sd-ipa-02i-gizi-sedang-sulit.html`

**IPA-02j · Penyakit Menular (TBC, DBD, COVID-19, Influenza)** (fokus Prov)
- [ ] `osn-sd-ipa-02j-penyakit-menular-campur.html`
- [ ] `osn-sd-ipa-02j-penyakit-menular-mudah.html`
- [ ] `osn-sd-ipa-02j-penyakit-menular-sedang.html`
- [ ] `osn-sd-ipa-02j-penyakit-menular-sulit.html`
- [ ] `osn-sd-ipa-02j-penyakit-menular-mudah-sedang.html`
- [ ] `osn-sd-ipa-02j-penyakit-menular-sedang-sulit.html`

**IPA-02k · Penyakit Tidak Menular (Diabetes, Hipertensi, Kanker)** (fokus Prov)
- [ ] `osn-sd-ipa-02k-penyakit-tidak-menular-campur.html`
- [ ] `osn-sd-ipa-02k-penyakit-tidak-menular-mudah.html`
- [ ] `osn-sd-ipa-02k-penyakit-tidak-menular-sedang.html`
- [ ] `osn-sd-ipa-02k-penyakit-tidak-menular-sulit.html`
- [ ] `osn-sd-ipa-02k-penyakit-tidak-menular-mudah-sedang.html`
- [ ] `osn-sd-ipa-02k-penyakit-tidak-menular-sedang-sulit.html`

**IPA-02l · Kebersihan Diri & Lingkungan** (fokus Kab)
- [ ] `osn-sd-ipa-02l-kebersihan-campur.html`
- [ ] `osn-sd-ipa-02l-kebersihan-mudah.html`
- [ ] `osn-sd-ipa-02l-kebersihan-sedang.html`
- [ ] `osn-sd-ipa-02l-kebersihan-sulit.html`
- [ ] `osn-sd-ipa-02l-kebersihan-mudah-sedang.html`
- [ ] `osn-sd-ipa-02l-kebersihan-sedang-sulit.html`

**IPA-02m · Soal Terapan (Gejala → Diagnosis Sederhana)** (fokus Prov–Nas)
- [ ] `osn-sd-ipa-02m-diagnosis-gejala-campur.html`
- [ ] `osn-sd-ipa-02m-diagnosis-gejala-mudah.html`
- [ ] `osn-sd-ipa-02m-diagnosis-gejala-sedang.html`
- [ ] `osn-sd-ipa-02m-diagnosis-gejala-sulit.html`
- [ ] `osn-sd-ipa-02m-diagnosis-gejala-mudah-sedang.html`
- [ ] `osn-sd-ipa-02m-diagnosis-gejala-sedang-sulit.html`

### IPA-03 · Gaya, Gerak, dan Energi (12 sub-bab)

**IPA-03a · Pengertian & Jenis Gaya (Gesek, Gravitasi, Magnet, Otot, Pegas)** (fokus Kab)
- [ ] `osn-sd-ipa-03a-jenis-gaya-campur.html`
- [ ] `osn-sd-ipa-03a-jenis-gaya-mudah.html`
- [ ] `osn-sd-ipa-03a-jenis-gaya-sedang.html`
- [ ] `osn-sd-ipa-03a-jenis-gaya-sulit.html`
- [ ] `osn-sd-ipa-03a-jenis-gaya-mudah-sedang.html`
- [ ] `osn-sd-ipa-03a-jenis-gaya-sedang-sulit.html`

**IPA-03b · Gerak (Benda Diam/Bergerak, Lurus/Melingkar)** (fokus Kab)
- [ ] `osn-sd-ipa-03b-gerak-campur.html`
- [ ] `osn-sd-ipa-03b-gerak-mudah.html`
- [ ] `osn-sd-ipa-03b-gerak-sedang.html`
- [ ] `osn-sd-ipa-03b-gerak-sulit.html`
- [ ] `osn-sd-ipa-03b-gerak-mudah-sedang.html`
- [ ] `osn-sd-ipa-03b-gerak-sedang-sulit.html`

**IPA-03c · Pengaruh Gaya terhadap Benda** (fokus Kab)
- [ ] `osn-sd-ipa-03c-pengaruh-gaya-campur.html`
- [ ] `osn-sd-ipa-03c-pengaruh-gaya-mudah.html`
- [ ] `osn-sd-ipa-03c-pengaruh-gaya-sedang.html`
- [ ] `osn-sd-ipa-03c-pengaruh-gaya-sulit.html`
- [ ] `osn-sd-ipa-03c-pengaruh-gaya-mudah-sedang.html`
- [ ] `osn-sd-ipa-03c-pengaruh-gaya-sedang-sulit.html`

**IPA-03d · Pesawat Sederhana: Tuas (3 Jenis)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-03d-tuas-campur.html`
- [ ] `osn-sd-ipa-03d-tuas-mudah.html`
- [ ] `osn-sd-ipa-03d-tuas-sedang.html`
- [ ] `osn-sd-ipa-03d-tuas-sulit.html`
- [ ] `osn-sd-ipa-03d-tuas-mudah-sedang.html`
- [ ] `osn-sd-ipa-03d-tuas-sedang-sulit.html`

**IPA-03e · Pesawat Sederhana: Katrol (Tetap, Bergerak, Ganda)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-03e-katrol-campur.html`
- [ ] `osn-sd-ipa-03e-katrol-mudah.html`
- [ ] `osn-sd-ipa-03e-katrol-sedang.html`
- [ ] `osn-sd-ipa-03e-katrol-sulit.html`
- [ ] `osn-sd-ipa-03e-katrol-mudah-sedang.html`
- [ ] `osn-sd-ipa-03e-katrol-sedang-sulit.html`

**IPA-03f · Pesawat Sederhana: Bidang Miring** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-03f-bidang-miring-campur.html`
- [ ] `osn-sd-ipa-03f-bidang-miring-mudah.html`
- [ ] `osn-sd-ipa-03f-bidang-miring-sedang.html`
- [ ] `osn-sd-ipa-03f-bidang-miring-sulit.html`
- [ ] `osn-sd-ipa-03f-bidang-miring-mudah-sedang.html`
- [ ] `osn-sd-ipa-03f-bidang-miring-sedang-sulit.html`

**IPA-03g · Pesawat Sederhana: Roda Berporos** (fokus Kab)
- [ ] `osn-sd-ipa-03g-roda-berporos-campur.html`
- [ ] `osn-sd-ipa-03g-roda-berporos-mudah.html`
- [ ] `osn-sd-ipa-03g-roda-berporos-sedang.html`
- [ ] `osn-sd-ipa-03g-roda-berporos-sulit.html`
- [ ] `osn-sd-ipa-03g-roda-berporos-mudah-sedang.html`
- [ ] `osn-sd-ipa-03g-roda-berporos-sedang-sulit.html`

**IPA-03h · Energi & Bentuk-bentuknya (Kinetik, Potensial, Panas, Cahaya, Bunyi, Kimia, Listrik)** (fokus Kab)
- [ ] `osn-sd-ipa-03h-bentuk-energi-campur.html`
- [ ] `osn-sd-ipa-03h-bentuk-energi-mudah.html`
- [ ] `osn-sd-ipa-03h-bentuk-energi-sedang.html`
- [ ] `osn-sd-ipa-03h-bentuk-energi-sulit.html`
- [ ] `osn-sd-ipa-03h-bentuk-energi-mudah-sedang.html`
- [ ] `osn-sd-ipa-03h-bentuk-energi-sedang-sulit.html`

**IPA-03i · Perubahan Energi (Rantai Energi pada Alat)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-03i-perubahan-energi-campur.html`
- [ ] `osn-sd-ipa-03i-perubahan-energi-mudah.html`
- [ ] `osn-sd-ipa-03i-perubahan-energi-sedang.html`
- [ ] `osn-sd-ipa-03i-perubahan-energi-sulit.html`
- [ ] `osn-sd-ipa-03i-perubahan-energi-mudah-sedang.html`
- [ ] `osn-sd-ipa-03i-perubahan-energi-sedang-sulit.html`

**IPA-03j · Listrik (Rangkaian Seri & Paralel)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-03j-listrik-seri-paralel-campur.html`
- [ ] `osn-sd-ipa-03j-listrik-seri-paralel-mudah.html`
- [ ] `osn-sd-ipa-03j-listrik-seri-paralel-sedang.html`
- [ ] `osn-sd-ipa-03j-listrik-seri-paralel-sulit.html`
- [ ] `osn-sd-ipa-03j-listrik-seri-paralel-mudah-sedang.html`
- [ ] `osn-sd-ipa-03j-listrik-seri-paralel-sedang-sulit.html`

**IPA-03k · Konduktor & Isolator Listrik** (fokus Kab)
- [ ] `osn-sd-ipa-03k-konduktor-isolator-campur.html`
- [ ] `osn-sd-ipa-03k-konduktor-isolator-mudah.html`
- [ ] `osn-sd-ipa-03k-konduktor-isolator-sedang.html`
- [ ] `osn-sd-ipa-03k-konduktor-isolator-sulit.html`
- [ ] `osn-sd-ipa-03k-konduktor-isolator-mudah-sedang.html`
- [ ] `osn-sd-ipa-03k-konduktor-isolator-sedang-sulit.html`

**IPA-03l · Magnet (Sifat, Kutub, Jenis, Membuat Magnet)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-03l-magnet-campur.html`
- [ ] `osn-sd-ipa-03l-magnet-mudah.html`
- [ ] `osn-sd-ipa-03l-magnet-sedang.html`
- [ ] `osn-sd-ipa-03l-magnet-sulit.html`
- [ ] `osn-sd-ipa-03l-magnet-mudah-sedang.html`
- [ ] `osn-sd-ipa-03l-magnet-sedang-sulit.html`

### IPA-04 · Cahaya, Bunyi, Panas, dan Sifat Zat (14 sub-bab)

**IPA-04a · Sifat-sifat Cahaya (Merambat Lurus, Dipantulkan, Dibiaskan, Diuraikan)** (fokus Kab)
- [ ] `osn-sd-ipa-04a-sifat-cahaya-campur.html`
- [ ] `osn-sd-ipa-04a-sifat-cahaya-mudah.html`
- [ ] `osn-sd-ipa-04a-sifat-cahaya-sedang.html`
- [ ] `osn-sd-ipa-04a-sifat-cahaya-sulit.html`
- [ ] `osn-sd-ipa-04a-sifat-cahaya-mudah-sedang.html`
- [ ] `osn-sd-ipa-04a-sifat-cahaya-sedang-sulit.html`

**IPA-04b · Cermin (Datar, Cekung, Cembung) — Sifat Bayangan** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-04b-cermin-campur.html`
- [ ] `osn-sd-ipa-04b-cermin-mudah.html`
- [ ] `osn-sd-ipa-04b-cermin-sedang.html`
- [ ] `osn-sd-ipa-04b-cermin-sulit.html`
- [ ] `osn-sd-ipa-04b-cermin-mudah-sedang.html`
- [ ] `osn-sd-ipa-04b-cermin-sedang-sulit.html`

**IPA-04c · Pembiasan Cahaya & Lensa (Cembung, Cekung)** (fokus Prov)
- [ ] `osn-sd-ipa-04c-lensa-pembiasan-campur.html`
- [ ] `osn-sd-ipa-04c-lensa-pembiasan-mudah.html`
- [ ] `osn-sd-ipa-04c-lensa-pembiasan-sedang.html`
- [ ] `osn-sd-ipa-04c-lensa-pembiasan-sulit.html`
- [ ] `osn-sd-ipa-04c-lensa-pembiasan-mudah-sedang.html`
- [ ] `osn-sd-ipa-04c-lensa-pembiasan-sedang-sulit.html`

**IPA-04d · Penguraian Cahaya (Prisma, Pelangi)** (fokus Prov)
- [ ] `osn-sd-ipa-04d-penguraian-cahaya-campur.html`
- [ ] `osn-sd-ipa-04d-penguraian-cahaya-mudah.html`
- [ ] `osn-sd-ipa-04d-penguraian-cahaya-sedang.html`
- [ ] `osn-sd-ipa-04d-penguraian-cahaya-sulit.html`
- [ ] `osn-sd-ipa-04d-penguraian-cahaya-mudah-sedang.html`
- [ ] `osn-sd-ipa-04d-penguraian-cahaya-sedang-sulit.html`

**IPA-04e · Sifat-sifat Bunyi (Sumber, Perambatan, Frekuensi)** (fokus Kab)
- [ ] `osn-sd-ipa-04e-sifat-bunyi-campur.html`
- [ ] `osn-sd-ipa-04e-sifat-bunyi-mudah.html`
- [ ] `osn-sd-ipa-04e-sifat-bunyi-sedang.html`
- [ ] `osn-sd-ipa-04e-sifat-bunyi-sulit.html`
- [ ] `osn-sd-ipa-04e-sifat-bunyi-mudah-sedang.html`
- [ ] `osn-sd-ipa-04e-sifat-bunyi-sedang-sulit.html`

**IPA-04f · Pemantulan Bunyi (Gema, Gaung)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-04f-pemantulan-bunyi-campur.html`
- [ ] `osn-sd-ipa-04f-pemantulan-bunyi-mudah.html`
- [ ] `osn-sd-ipa-04f-pemantulan-bunyi-sedang.html`
- [ ] `osn-sd-ipa-04f-pemantulan-bunyi-sulit.html`
- [ ] `osn-sd-ipa-04f-pemantulan-bunyi-mudah-sedang.html`
- [ ] `osn-sd-ipa-04f-pemantulan-bunyi-sedang-sulit.html`

**IPA-04g · Perambatan Bunyi di Padat/Cair/Gas** (fokus Kab)
- [ ] `osn-sd-ipa-04g-perambatan-bunyi-campur.html`
- [ ] `osn-sd-ipa-04g-perambatan-bunyi-mudah.html`
- [ ] `osn-sd-ipa-04g-perambatan-bunyi-sedang.html`
- [ ] `osn-sd-ipa-04g-perambatan-bunyi-sulit.html`
- [ ] `osn-sd-ipa-04g-perambatan-bunyi-mudah-sedang.html`
- [ ] `osn-sd-ipa-04g-perambatan-bunyi-sedang-sulit.html`

**IPA-04h · Suhu & Termometer** (fokus Kab)
- [ ] `osn-sd-ipa-04h-suhu-termometer-campur.html`
- [ ] `osn-sd-ipa-04h-suhu-termometer-mudah.html`
- [ ] `osn-sd-ipa-04h-suhu-termometer-sedang.html`
- [ ] `osn-sd-ipa-04h-suhu-termometer-sulit.html`
- [ ] `osn-sd-ipa-04h-suhu-termometer-mudah-sedang.html`
- [ ] `osn-sd-ipa-04h-suhu-termometer-sedang-sulit.html`

**IPA-04i · Perpindahan Panas (Konduksi, Konveksi, Radiasi)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-04i-perpindahan-panas-campur.html`
- [ ] `osn-sd-ipa-04i-perpindahan-panas-mudah.html`
- [ ] `osn-sd-ipa-04i-perpindahan-panas-sedang.html`
- [ ] `osn-sd-ipa-04i-perpindahan-panas-sulit.html`
- [ ] `osn-sd-ipa-04i-perpindahan-panas-mudah-sedang.html`
- [ ] `osn-sd-ipa-04i-perpindahan-panas-sedang-sulit.html`

**IPA-04j · Wujud Zat (Padat, Cair, Gas) & Sifatnya** (fokus Kab)
- [ ] `osn-sd-ipa-04j-wujud-zat-campur.html`
- [ ] `osn-sd-ipa-04j-wujud-zat-mudah.html`
- [ ] `osn-sd-ipa-04j-wujud-zat-sedang.html`
- [ ] `osn-sd-ipa-04j-wujud-zat-sulit.html`
- [ ] `osn-sd-ipa-04j-wujud-zat-mudah-sedang.html`
- [ ] `osn-sd-ipa-04j-wujud-zat-sedang-sulit.html`

**IPA-04k · Perubahan Wujud Zat (6 Jenis)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-04k-perubahan-wujud-campur.html`
- [ ] `osn-sd-ipa-04k-perubahan-wujud-mudah.html`
- [ ] `osn-sd-ipa-04k-perubahan-wujud-sedang.html`
- [ ] `osn-sd-ipa-04k-perubahan-wujud-sulit.html`
- [ ] `osn-sd-ipa-04k-perubahan-wujud-mudah-sedang.html`
- [ ] `osn-sd-ipa-04k-perubahan-wujud-sedang-sulit.html`

**IPA-04l · Sifat Fisika vs Sifat Kimia** (fokus Kab)
- [ ] `osn-sd-ipa-04l-sifat-fisika-kimia-campur.html`
- [ ] `osn-sd-ipa-04l-sifat-fisika-kimia-mudah.html`
- [ ] `osn-sd-ipa-04l-sifat-fisika-kimia-sedang.html`
- [ ] `osn-sd-ipa-04l-sifat-fisika-kimia-sulit.html`
- [ ] `osn-sd-ipa-04l-sifat-fisika-kimia-mudah-sedang.html`
- [ ] `osn-sd-ipa-04l-sifat-fisika-kimia-sedang-sulit.html`

**IPA-04m · Pemisahan Campuran (Filtrasi, Evaporasi, Distilasi, Kromatografi, Sublimasi)** (fokus Prov)
- [ ] `osn-sd-ipa-04m-pemisahan-campuran-campur.html`
- [ ] `osn-sd-ipa-04m-pemisahan-campuran-mudah.html`
- [ ] `osn-sd-ipa-04m-pemisahan-campuran-sedang.html`
- [ ] `osn-sd-ipa-04m-pemisahan-campuran-sulit.html`
- [ ] `osn-sd-ipa-04m-pemisahan-campuran-mudah-sedang.html`
- [ ] `osn-sd-ipa-04m-pemisahan-campuran-sedang-sulit.html`

**IPA-04n · Larutan, Suspensi, Koloid (Level Dasar)** (fokus Prov–Nas)
- [ ] `osn-sd-ipa-04n-larutan-koloid-campur.html`
- [ ] `osn-sd-ipa-04n-larutan-koloid-mudah.html`
- [ ] `osn-sd-ipa-04n-larutan-koloid-sedang.html`
- [ ] `osn-sd-ipa-04n-larutan-koloid-sulit.html`
- [ ] `osn-sd-ipa-04n-larutan-koloid-mudah-sedang.html`
- [ ] `osn-sd-ipa-04n-larutan-koloid-sedang-sulit.html`

### IPA-05 · Bumi, Antariksa, dan Lingkungan (14 sub-bab)

**IPA-05a · Sistem Tata Surya & Ciri 8 Planet** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-05a-tata-surya-campur.html`
- [ ] `osn-sd-ipa-05a-tata-surya-mudah.html`
- [ ] `osn-sd-ipa-05a-tata-surya-sedang.html`
- [ ] `osn-sd-ipa-05a-tata-surya-sulit.html`
- [ ] `osn-sd-ipa-05a-tata-surya-mudah-sedang.html`
- [ ] `osn-sd-ipa-05a-tata-surya-sedang-sulit.html`

**IPA-05b · Bumi: Bentuk, Lapisan (Kerak, Mantel, Inti)** (fokus Kab)
- [ ] `osn-sd-ipa-05b-lapisan-bumi-campur.html`
- [ ] `osn-sd-ipa-05b-lapisan-bumi-mudah.html`
- [ ] `osn-sd-ipa-05b-lapisan-bumi-sedang.html`
- [ ] `osn-sd-ipa-05b-lapisan-bumi-sulit.html`
- [ ] `osn-sd-ipa-05b-lapisan-bumi-mudah-sedang.html`
- [ ] `osn-sd-ipa-05b-lapisan-bumi-sedang-sulit.html`

**IPA-05c · Rotasi & Revolusi Bumi (Akibat & Dampaknya)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-05c-rotasi-revolusi-campur.html`
- [ ] `osn-sd-ipa-05c-rotasi-revolusi-mudah.html`
- [ ] `osn-sd-ipa-05c-rotasi-revolusi-sedang.html`
- [ ] `osn-sd-ipa-05c-rotasi-revolusi-sulit.html`
- [ ] `osn-sd-ipa-05c-rotasi-revolusi-mudah-sedang.html`
- [ ] `osn-sd-ipa-05c-rotasi-revolusi-sedang-sulit.html`

**IPA-05d · Bulan: Fase, Gerakan, Akibat** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-05d-fase-bulan-campur.html`
- [ ] `osn-sd-ipa-05d-fase-bulan-mudah.html`
- [ ] `osn-sd-ipa-05d-fase-bulan-sedang.html`
- [ ] `osn-sd-ipa-05d-fase-bulan-sulit.html`
- [ ] `osn-sd-ipa-05d-fase-bulan-mudah-sedang.html`
- [ ] `osn-sd-ipa-05d-fase-bulan-sedang-sulit.html`

**IPA-05e · Gerhana Matahari & Gerhana Bulan** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-05e-gerhana-campur.html`
- [ ] `osn-sd-ipa-05e-gerhana-mudah.html`
- [ ] `osn-sd-ipa-05e-gerhana-sedang.html`
- [ ] `osn-sd-ipa-05e-gerhana-sulit.html`
- [ ] `osn-sd-ipa-05e-gerhana-mudah-sedang.html`
- [ ] `osn-sd-ipa-05e-gerhana-sedang-sulit.html`

**IPA-05f · Cuaca, Iklim, Musim** (fokus Kab)
- [ ] `osn-sd-ipa-05f-cuaca-iklim-campur.html`
- [ ] `osn-sd-ipa-05f-cuaca-iklim-mudah.html`
- [ ] `osn-sd-ipa-05f-cuaca-iklim-sedang.html`
- [ ] `osn-sd-ipa-05f-cuaca-iklim-sulit.html`
- [ ] `osn-sd-ipa-05f-cuaca-iklim-mudah-sedang.html`
- [ ] `osn-sd-ipa-05f-cuaca-iklim-sedang-sulit.html`

**IPA-05g · Batuan (Beku, Sedimen, Metamorf)** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-05g-batuan-campur.html`
- [ ] `osn-sd-ipa-05g-batuan-mudah.html`
- [ ] `osn-sd-ipa-05g-batuan-sedang.html`
- [ ] `osn-sd-ipa-05g-batuan-sulit.html`
- [ ] `osn-sd-ipa-05g-batuan-mudah-sedang.html`
- [ ] `osn-sd-ipa-05g-batuan-sedang-sulit.html`

**IPA-05h · Tanah (Jenis, Lapisan, Manfaat)** (fokus Kab)
- [ ] `osn-sd-ipa-05h-tanah-campur.html`
- [ ] `osn-sd-ipa-05h-tanah-mudah.html`
- [ ] `osn-sd-ipa-05h-tanah-sedang.html`
- [ ] `osn-sd-ipa-05h-tanah-sulit.html`
- [ ] `osn-sd-ipa-05h-tanah-mudah-sedang.html`
- [ ] `osn-sd-ipa-05h-tanah-sedang-sulit.html`

**IPA-05i · Sumber Daya Alam Terbarukan & Tak Terbarukan** (fokus Kab)
- [ ] `osn-sd-ipa-05i-sumber-daya-alam-campur.html`
- [ ] `osn-sd-ipa-05i-sumber-daya-alam-mudah.html`
- [ ] `osn-sd-ipa-05i-sumber-daya-alam-sedang.html`
- [ ] `osn-sd-ipa-05i-sumber-daya-alam-sulit.html`
- [ ] `osn-sd-ipa-05i-sumber-daya-alam-mudah-sedang.html`
- [ ] `osn-sd-ipa-05i-sumber-daya-alam-sedang-sulit.html`

**IPA-05j · Siklus Air** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-05j-siklus-air-campur.html`
- [ ] `osn-sd-ipa-05j-siklus-air-mudah.html`
- [ ] `osn-sd-ipa-05j-siklus-air-sedang.html`
- [ ] `osn-sd-ipa-05j-siklus-air-sulit.html`
- [ ] `osn-sd-ipa-05j-siklus-air-mudah-sedang.html`
- [ ] `osn-sd-ipa-05j-siklus-air-sedang-sulit.html`

**IPA-05k · Atmosfer (Lapisan, Fungsi)** (fokus Prov)
- [ ] `osn-sd-ipa-05k-atmosfer-campur.html`
- [ ] `osn-sd-ipa-05k-atmosfer-mudah.html`
- [ ] `osn-sd-ipa-05k-atmosfer-sedang.html`
- [ ] `osn-sd-ipa-05k-atmosfer-sulit.html`
- [ ] `osn-sd-ipa-05k-atmosfer-mudah-sedang.html`
- [ ] `osn-sd-ipa-05k-atmosfer-sedang-sulit.html`

**IPA-05l · Pelestarian Lingkungan & Pencemaran** (fokus Kab–Prov)
- [ ] `osn-sd-ipa-05l-pelestarian-lingkungan-campur.html`
- [ ] `osn-sd-ipa-05l-pelestarian-lingkungan-mudah.html`
- [ ] `osn-sd-ipa-05l-pelestarian-lingkungan-sedang.html`
- [ ] `osn-sd-ipa-05l-pelestarian-lingkungan-sulit.html`
- [ ] `osn-sd-ipa-05l-pelestarian-lingkungan-mudah-sedang.html`
- [ ] `osn-sd-ipa-05l-pelestarian-lingkungan-sedang-sulit.html`

**IPA-05m · Pemanasan Global & Efek Rumah Kaca** (fokus Prov–Nas)
- [ ] `osn-sd-ipa-05m-pemanasan-global-campur.html`
- [ ] `osn-sd-ipa-05m-pemanasan-global-mudah.html`
- [ ] `osn-sd-ipa-05m-pemanasan-global-sedang.html`
- [ ] `osn-sd-ipa-05m-pemanasan-global-sulit.html`
- [ ] `osn-sd-ipa-05m-pemanasan-global-mudah-sedang.html`
- [ ] `osn-sd-ipa-05m-pemanasan-global-sedang-sulit.html`

**IPA-05n · Bencana Alam (Gempa, Gunung Meletus, Tsunami, Banjir)** (fokus Prov)
- [ ] `osn-sd-ipa-05n-bencana-alam-campur.html`
- [ ] `osn-sd-ipa-05n-bencana-alam-mudah.html`
- [ ] `osn-sd-ipa-05n-bencana-alam-sedang.html`
- [ ] `osn-sd-ipa-05n-bencana-alam-sulit.html`
- [ ] `osn-sd-ipa-05n-bencana-alam-mudah-sedang.html`
- [ ] `osn-sd-ipa-05n-bencana-alam-sedang-sulit.html`

---

## B · MTK Per Sub-Bab (94 sub-bab × 6 = 564 file)

Sumber sub-bab: [taksonomi-matematika.md](../osn-sd-prep-extracted/osn-sd-prep/references/taksonomi-matematika.md).
Tag **`(fokus …)`** = tingkat kesulitan alami sub-topik — bukan jumlah soal. **Tiap file sub-bab tetap 100 soal**.

### MTK-01 · Bilangan & Operasi (11 sub-bab)

**MTK-01a · Operasi Hitung Bilangan Bulat (+, −, ×, ÷)** (fokus Kab)
- [ ] `osn-sd-mtk-01a-operasi-bilangan-bulat-campur.html`
- [ ] `osn-sd-mtk-01a-operasi-bilangan-bulat-mudah.html`
- [ ] `osn-sd-mtk-01a-operasi-bilangan-bulat-sedang.html`
- [ ] `osn-sd-mtk-01a-operasi-bilangan-bulat-sulit.html`
- [ ] `osn-sd-mtk-01a-operasi-bilangan-bulat-mudah-sedang.html`
- [ ] `osn-sd-mtk-01a-operasi-bilangan-bulat-sedang-sulit.html`

**MTK-01b · Urutan Operasi (Kurung-Pangkat-Kali-Bagi-Tambah-Kurang)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-01b-urutan-operasi-campur.html`
- [ ] `osn-sd-mtk-01b-urutan-operasi-mudah.html`
- [ ] `osn-sd-mtk-01b-urutan-operasi-sedang.html`
- [ ] `osn-sd-mtk-01b-urutan-operasi-sulit.html`
- [ ] `osn-sd-mtk-01b-urutan-operasi-mudah-sedang.html`
- [ ] `osn-sd-mtk-01b-urutan-operasi-sedang-sulit.html`

**MTK-01c · Faktor & Kelipatan Suatu Bilangan** (fokus Kab)
- [ ] `osn-sd-mtk-01c-faktor-kelipatan-campur.html`
- [ ] `osn-sd-mtk-01c-faktor-kelipatan-mudah.html`
- [ ] `osn-sd-mtk-01c-faktor-kelipatan-sedang.html`
- [ ] `osn-sd-mtk-01c-faktor-kelipatan-sulit.html`
- [ ] `osn-sd-mtk-01c-faktor-kelipatan-mudah-sedang.html`
- [ ] `osn-sd-mtk-01c-faktor-kelipatan-sedang-sulit.html`

**MTK-01d · Bilangan Prima & Komposit** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-01d-bilangan-prima-komposit-campur.html`
- [ ] `osn-sd-mtk-01d-bilangan-prima-komposit-mudah.html`
- [ ] `osn-sd-mtk-01d-bilangan-prima-komposit-sedang.html`
- [ ] `osn-sd-mtk-01d-bilangan-prima-komposit-sulit.html`
- [ ] `osn-sd-mtk-01d-bilangan-prima-komposit-mudah-sedang.html`
- [ ] `osn-sd-mtk-01d-bilangan-prima-komposit-sedang-sulit.html`

**MTK-01e · Faktorisasi Prima** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-01e-faktorisasi-prima-campur.html`
- [ ] `osn-sd-mtk-01e-faktorisasi-prima-mudah.html`
- [ ] `osn-sd-mtk-01e-faktorisasi-prima-sedang.html`
- [ ] `osn-sd-mtk-01e-faktorisasi-prima-sulit.html`
- [ ] `osn-sd-mtk-01e-faktorisasi-prima-mudah-sedang.html`
- [ ] `osn-sd-mtk-01e-faktorisasi-prima-sedang-sulit.html`

**MTK-01f · FPB (Faktor Persekutuan Terbesar)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-01f-fpb-campur.html`
- [ ] `osn-sd-mtk-01f-fpb-mudah.html`
- [ ] `osn-sd-mtk-01f-fpb-sedang.html`
- [ ] `osn-sd-mtk-01f-fpb-sulit.html`
- [ ] `osn-sd-mtk-01f-fpb-mudah-sedang.html`
- [ ] `osn-sd-mtk-01f-fpb-sedang-sulit.html`

**MTK-01g · KPK (Kelipatan Persekutuan Terkecil)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-01g-kpk-campur.html`
- [ ] `osn-sd-mtk-01g-kpk-mudah.html`
- [ ] `osn-sd-mtk-01g-kpk-sedang.html`
- [ ] `osn-sd-mtk-01g-kpk-sulit.html`
- [ ] `osn-sd-mtk-01g-kpk-mudah-sedang.html`
- [ ] `osn-sd-mtk-01g-kpk-sedang-sulit.html`

**MTK-01h · Bilangan Kuadrat & Akar Kuadrat** (fokus Prov)
- [ ] `osn-sd-mtk-01h-kuadrat-akar-campur.html`
- [ ] `osn-sd-mtk-01h-kuadrat-akar-mudah.html`
- [ ] `osn-sd-mtk-01h-kuadrat-akar-sedang.html`
- [ ] `osn-sd-mtk-01h-kuadrat-akar-sulit.html`
- [ ] `osn-sd-mtk-01h-kuadrat-akar-mudah-sedang.html`
- [ ] `osn-sd-mtk-01h-kuadrat-akar-sedang-sulit.html`

**MTK-01i · Bilangan Kubik & Akar Kubik** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-01i-kubik-akar-kubik-campur.html`
- [ ] `osn-sd-mtk-01i-kubik-akar-kubik-mudah.html`
- [ ] `osn-sd-mtk-01i-kubik-akar-kubik-sedang.html`
- [ ] `osn-sd-mtk-01i-kubik-akar-kubik-sulit.html`
- [ ] `osn-sd-mtk-01i-kubik-akar-kubik-mudah-sedang.html`
- [ ] `osn-sd-mtk-01i-kubik-akar-kubik-sedang-sulit.html`

**MTK-01j · Sifat Operasi (Komutatif, Asosiatif, Distributif)** (fokus Kab)
- [ ] `osn-sd-mtk-01j-sifat-operasi-campur.html`
- [ ] `osn-sd-mtk-01j-sifat-operasi-mudah.html`
- [ ] `osn-sd-mtk-01j-sifat-operasi-sedang.html`
- [ ] `osn-sd-mtk-01j-sifat-operasi-sulit.html`
- [ ] `osn-sd-mtk-01j-sifat-operasi-mudah-sedang.html`
- [ ] `osn-sd-mtk-01j-sifat-operasi-sedang-sulit.html`

**MTK-01k · Soal Cerita Aplikasi FPB/KPK** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-01k-cerita-fpb-kpk-campur.html`
- [ ] `osn-sd-mtk-01k-cerita-fpb-kpk-mudah.html`
- [ ] `osn-sd-mtk-01k-cerita-fpb-kpk-sedang.html`
- [ ] `osn-sd-mtk-01k-cerita-fpb-kpk-sulit.html`
- [ ] `osn-sd-mtk-01k-cerita-fpb-kpk-mudah-sedang.html`
- [ ] `osn-sd-mtk-01k-cerita-fpb-kpk-sedang-sulit.html`

### MTK-02 · Pecahan, Desimal, dan Persen (11 sub-bab)

**MTK-02a · Pecahan Senilai & Menyederhanakan** (fokus Kab)
- [ ] `osn-sd-mtk-02a-pecahan-senilai-campur.html`
- [ ] `osn-sd-mtk-02a-pecahan-senilai-mudah.html`
- [ ] `osn-sd-mtk-02a-pecahan-senilai-sedang.html`
- [ ] `osn-sd-mtk-02a-pecahan-senilai-sulit.html`
- [ ] `osn-sd-mtk-02a-pecahan-senilai-mudah-sedang.html`
- [ ] `osn-sd-mtk-02a-pecahan-senilai-sedang-sulit.html`

**MTK-02b · Membandingkan & Mengurutkan Pecahan** (fokus Kab)
- [ ] `osn-sd-mtk-02b-bandingkan-pecahan-campur.html`
- [ ] `osn-sd-mtk-02b-bandingkan-pecahan-mudah.html`
- [ ] `osn-sd-mtk-02b-bandingkan-pecahan-sedang.html`
- [ ] `osn-sd-mtk-02b-bandingkan-pecahan-sulit.html`
- [ ] `osn-sd-mtk-02b-bandingkan-pecahan-mudah-sedang.html`
- [ ] `osn-sd-mtk-02b-bandingkan-pecahan-sedang-sulit.html`

**MTK-02c · Operasi Pecahan Biasa (+, −, ×, ÷)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-02c-operasi-pecahan-biasa-campur.html`
- [ ] `osn-sd-mtk-02c-operasi-pecahan-biasa-mudah.html`
- [ ] `osn-sd-mtk-02c-operasi-pecahan-biasa-sedang.html`
- [ ] `osn-sd-mtk-02c-operasi-pecahan-biasa-sulit.html`
- [ ] `osn-sd-mtk-02c-operasi-pecahan-biasa-mudah-sedang.html`
- [ ] `osn-sd-mtk-02c-operasi-pecahan-biasa-sedang-sulit.html`

**MTK-02d · Pecahan Campuran (Operasi)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-02d-pecahan-campuran-campur.html`
- [ ] `osn-sd-mtk-02d-pecahan-campuran-mudah.html`
- [ ] `osn-sd-mtk-02d-pecahan-campuran-sedang.html`
- [ ] `osn-sd-mtk-02d-pecahan-campuran-sulit.html`
- [ ] `osn-sd-mtk-02d-pecahan-campuran-mudah-sedang.html`
- [ ] `osn-sd-mtk-02d-pecahan-campuran-sedang-sulit.html`

**MTK-02e · Konversi Pecahan ↔ Desimal ↔ Persen** (fokus Kab)
- [ ] `osn-sd-mtk-02e-konversi-pecahan-desimal-persen-campur.html`
- [ ] `osn-sd-mtk-02e-konversi-pecahan-desimal-persen-mudah.html`
- [ ] `osn-sd-mtk-02e-konversi-pecahan-desimal-persen-sedang.html`
- [ ] `osn-sd-mtk-02e-konversi-pecahan-desimal-persen-sulit.html`
- [ ] `osn-sd-mtk-02e-konversi-pecahan-desimal-persen-mudah-sedang.html`
- [ ] `osn-sd-mtk-02e-konversi-pecahan-desimal-persen-sedang-sulit.html`

**MTK-02f · Operasi Desimal (+, −, ×, ÷)** (fokus Kab)
- [ ] `osn-sd-mtk-02f-operasi-desimal-campur.html`
- [ ] `osn-sd-mtk-02f-operasi-desimal-mudah.html`
- [ ] `osn-sd-mtk-02f-operasi-desimal-sedang.html`
- [ ] `osn-sd-mtk-02f-operasi-desimal-sulit.html`
- [ ] `osn-sd-mtk-02f-operasi-desimal-mudah-sedang.html`
- [ ] `osn-sd-mtk-02f-operasi-desimal-sedang-sulit.html`

**MTK-02g · Pembulatan Desimal** (fokus Kab)
- [ ] `osn-sd-mtk-02g-pembulatan-desimal-campur.html`
- [ ] `osn-sd-mtk-02g-pembulatan-desimal-mudah.html`
- [ ] `osn-sd-mtk-02g-pembulatan-desimal-sedang.html`
- [ ] `osn-sd-mtk-02g-pembulatan-desimal-sulit.html`
- [ ] `osn-sd-mtk-02g-pembulatan-desimal-mudah-sedang.html`
- [ ] `osn-sd-mtk-02g-pembulatan-desimal-sedang-sulit.html`

**MTK-02h · Persen sebagai Bagian dari Keseluruhan** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-02h-persen-bagian-campur.html`
- [ ] `osn-sd-mtk-02h-persen-bagian-mudah.html`
- [ ] `osn-sd-mtk-02h-persen-bagian-sedang.html`
- [ ] `osn-sd-mtk-02h-persen-bagian-sulit.html`
- [ ] `osn-sd-mtk-02h-persen-bagian-mudah-sedang.html`
- [ ] `osn-sd-mtk-02h-persen-bagian-sedang-sulit.html`

**MTK-02i · Mencari Bilangan Asal dari Persen** (fokus Prov)
- [ ] `osn-sd-mtk-02i-bilangan-dari-persen-campur.html`
- [ ] `osn-sd-mtk-02i-bilangan-dari-persen-mudah.html`
- [ ] `osn-sd-mtk-02i-bilangan-dari-persen-sedang.html`
- [ ] `osn-sd-mtk-02i-bilangan-dari-persen-sulit.html`
- [ ] `osn-sd-mtk-02i-bilangan-dari-persen-mudah-sedang.html`
- [ ] `osn-sd-mtk-02i-bilangan-dari-persen-sedang-sulit.html`

**MTK-02j · Soal Cerita Pecahan (Bagian dari Bagian)** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-02j-cerita-pecahan-campur.html`
- [ ] `osn-sd-mtk-02j-cerita-pecahan-mudah.html`
- [ ] `osn-sd-mtk-02j-cerita-pecahan-sedang.html`
- [ ] `osn-sd-mtk-02j-cerita-pecahan-sulit.html`
- [ ] `osn-sd-mtk-02j-cerita-pecahan-mudah-sedang.html`
- [ ] `osn-sd-mtk-02j-cerita-pecahan-sedang-sulit.html`

**MTK-02k · Soal Cerita Persen Aplikatif** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-02k-cerita-persen-campur.html`
- [ ] `osn-sd-mtk-02k-cerita-persen-mudah.html`
- [ ] `osn-sd-mtk-02k-cerita-persen-sedang.html`
- [ ] `osn-sd-mtk-02k-cerita-persen-sulit.html`
- [ ] `osn-sd-mtk-02k-cerita-persen-mudah-sedang.html`
- [ ] `osn-sd-mtk-02k-cerita-persen-sedang-sulit.html`

### MTK-03 · Geometri Datar (13 sub-bab)

**MTK-03a · Sifat & Jenis Bangun Datar** (fokus Kab)
- [ ] `osn-sd-mtk-03a-jenis-bangun-datar-campur.html`
- [ ] `osn-sd-mtk-03a-jenis-bangun-datar-mudah.html`
- [ ] `osn-sd-mtk-03a-jenis-bangun-datar-sedang.html`
- [ ] `osn-sd-mtk-03a-jenis-bangun-datar-sulit.html`
- [ ] `osn-sd-mtk-03a-jenis-bangun-datar-mudah-sedang.html`
- [ ] `osn-sd-mtk-03a-jenis-bangun-datar-sedang-sulit.html`

**MTK-03b · Keliling Persegi & Persegi Panjang** (fokus Kab)
- [ ] `osn-sd-mtk-03b-keliling-persegi-campur.html`
- [ ] `osn-sd-mtk-03b-keliling-persegi-mudah.html`
- [ ] `osn-sd-mtk-03b-keliling-persegi-sedang.html`
- [ ] `osn-sd-mtk-03b-keliling-persegi-sulit.html`
- [ ] `osn-sd-mtk-03b-keliling-persegi-mudah-sedang.html`
- [ ] `osn-sd-mtk-03b-keliling-persegi-sedang-sulit.html`

**MTK-03c · Keliling Segitiga** (fokus Kab)
- [ ] `osn-sd-mtk-03c-keliling-segitiga-campur.html`
- [ ] `osn-sd-mtk-03c-keliling-segitiga-mudah.html`
- [ ] `osn-sd-mtk-03c-keliling-segitiga-sedang.html`
- [ ] `osn-sd-mtk-03c-keliling-segitiga-sulit.html`
- [ ] `osn-sd-mtk-03c-keliling-segitiga-mudah-sedang.html`
- [ ] `osn-sd-mtk-03c-keliling-segitiga-sedang-sulit.html`

**MTK-03d · Keliling Jajar Genjang, Trapesium, Layang-layang, Belah Ketupat** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-03d-keliling-jajar-trapesium-layang-belah-campur.html`
- [ ] `osn-sd-mtk-03d-keliling-jajar-trapesium-layang-belah-mudah.html`
- [ ] `osn-sd-mtk-03d-keliling-jajar-trapesium-layang-belah-sedang.html`
- [ ] `osn-sd-mtk-03d-keliling-jajar-trapesium-layang-belah-sulit.html`
- [ ] `osn-sd-mtk-03d-keliling-jajar-trapesium-layang-belah-mudah-sedang.html`
- [ ] `osn-sd-mtk-03d-keliling-jajar-trapesium-layang-belah-sedang-sulit.html`

**MTK-03e · Keliling Lingkaran (π = 22/7 atau 3,14)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-03e-keliling-lingkaran-campur.html`
- [ ] `osn-sd-mtk-03e-keliling-lingkaran-mudah.html`
- [ ] `osn-sd-mtk-03e-keliling-lingkaran-sedang.html`
- [ ] `osn-sd-mtk-03e-keliling-lingkaran-sulit.html`
- [ ] `osn-sd-mtk-03e-keliling-lingkaran-mudah-sedang.html`
- [ ] `osn-sd-mtk-03e-keliling-lingkaran-sedang-sulit.html`

**MTK-03f · Luas Persegi & Persegi Panjang** (fokus Kab)
- [ ] `osn-sd-mtk-03f-luas-persegi-campur.html`
- [ ] `osn-sd-mtk-03f-luas-persegi-mudah.html`
- [ ] `osn-sd-mtk-03f-luas-persegi-sedang.html`
- [ ] `osn-sd-mtk-03f-luas-persegi-sulit.html`
- [ ] `osn-sd-mtk-03f-luas-persegi-mudah-sedang.html`
- [ ] `osn-sd-mtk-03f-luas-persegi-sedang-sulit.html`

**MTK-03g · Luas Segitiga** (fokus Kab)
- [ ] `osn-sd-mtk-03g-luas-segitiga-campur.html`
- [ ] `osn-sd-mtk-03g-luas-segitiga-mudah.html`
- [ ] `osn-sd-mtk-03g-luas-segitiga-sedang.html`
- [ ] `osn-sd-mtk-03g-luas-segitiga-sulit.html`
- [ ] `osn-sd-mtk-03g-luas-segitiga-mudah-sedang.html`
- [ ] `osn-sd-mtk-03g-luas-segitiga-sedang-sulit.html`

**MTK-03h · Luas Jajar Genjang, Trapesium, Layang-layang, Belah Ketupat** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-03h-luas-jajar-trapesium-layang-belah-campur.html`
- [ ] `osn-sd-mtk-03h-luas-jajar-trapesium-layang-belah-mudah.html`
- [ ] `osn-sd-mtk-03h-luas-jajar-trapesium-layang-belah-sedang.html`
- [ ] `osn-sd-mtk-03h-luas-jajar-trapesium-layang-belah-sulit.html`
- [ ] `osn-sd-mtk-03h-luas-jajar-trapesium-layang-belah-mudah-sedang.html`
- [ ] `osn-sd-mtk-03h-luas-jajar-trapesium-layang-belah-sedang-sulit.html`

**MTK-03i · Luas Lingkaran (πr²)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-03i-luas-lingkaran-campur.html`
- [ ] `osn-sd-mtk-03i-luas-lingkaran-mudah.html`
- [ ] `osn-sd-mtk-03i-luas-lingkaran-sedang.html`
- [ ] `osn-sd-mtk-03i-luas-lingkaran-sulit.html`
- [ ] `osn-sd-mtk-03i-luas-lingkaran-mudah-sedang.html`
- [ ] `osn-sd-mtk-03i-luas-lingkaran-sedang-sulit.html`

**MTK-03j · Bangun Datar Gabungan (Penjumlahan Luas)** (fokus Prov)
- [ ] `osn-sd-mtk-03j-gabungan-jumlah-campur.html`
- [ ] `osn-sd-mtk-03j-gabungan-jumlah-mudah.html`
- [ ] `osn-sd-mtk-03j-gabungan-jumlah-sedang.html`
- [ ] `osn-sd-mtk-03j-gabungan-jumlah-sulit.html`
- [ ] `osn-sd-mtk-03j-gabungan-jumlah-mudah-sedang.html`
- [ ] `osn-sd-mtk-03j-gabungan-jumlah-sedang-sulit.html`

**MTK-03k · Bangun Datar Gabungan (Pengurangan / Luas yang Diarsir)** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-03k-gabungan-arsir-campur.html`
- [ ] `osn-sd-mtk-03k-gabungan-arsir-mudah.html`
- [ ] `osn-sd-mtk-03k-gabungan-arsir-sedang.html`
- [ ] `osn-sd-mtk-03k-gabungan-arsir-sulit.html`
- [ ] `osn-sd-mtk-03k-gabungan-arsir-mudah-sedang.html`
- [ ] `osn-sd-mtk-03k-gabungan-arsir-sedang-sulit.html`

**MTK-03l · Sudut & Jenis-jenisnya** (fokus Kab)
- [ ] `osn-sd-mtk-03l-sudut-jenis-campur.html`
- [ ] `osn-sd-mtk-03l-sudut-jenis-mudah.html`
- [ ] `osn-sd-mtk-03l-sudut-jenis-sedang.html`
- [ ] `osn-sd-mtk-03l-sudut-jenis-sulit.html`
- [ ] `osn-sd-mtk-03l-sudut-jenis-mudah-sedang.html`
- [ ] `osn-sd-mtk-03l-sudut-jenis-sedang-sulit.html`

**MTK-03m · Jumlah Sudut Dalam Segitiga/Segiempat** (fokus Kab)
- [ ] `osn-sd-mtk-03m-jumlah-sudut-campur.html`
- [ ] `osn-sd-mtk-03m-jumlah-sudut-mudah.html`
- [ ] `osn-sd-mtk-03m-jumlah-sudut-sedang.html`
- [ ] `osn-sd-mtk-03m-jumlah-sudut-sulit.html`
- [ ] `osn-sd-mtk-03m-jumlah-sudut-mudah-sedang.html`
- [ ] `osn-sd-mtk-03m-jumlah-sudut-sedang-sulit.html`

### MTK-04 · Geometri Ruang (13 sub-bab)

**MTK-04a · Sifat & Elemen Bangun Ruang (Rusuk, Sisi, Titik Sudut)** (fokus Kab)
- [ ] `osn-sd-mtk-04a-elemen-bangun-ruang-campur.html`
- [ ] `osn-sd-mtk-04a-elemen-bangun-ruang-mudah.html`
- [ ] `osn-sd-mtk-04a-elemen-bangun-ruang-sedang.html`
- [ ] `osn-sd-mtk-04a-elemen-bangun-ruang-sulit.html`
- [ ] `osn-sd-mtk-04a-elemen-bangun-ruang-mudah-sedang.html`
- [ ] `osn-sd-mtk-04a-elemen-bangun-ruang-sedang-sulit.html`

**MTK-04b · Volume Kubus** (fokus Kab)
- [ ] `osn-sd-mtk-04b-volume-kubus-campur.html`
- [ ] `osn-sd-mtk-04b-volume-kubus-mudah.html`
- [ ] `osn-sd-mtk-04b-volume-kubus-sedang.html`
- [ ] `osn-sd-mtk-04b-volume-kubus-sulit.html`
- [ ] `osn-sd-mtk-04b-volume-kubus-mudah-sedang.html`
- [ ] `osn-sd-mtk-04b-volume-kubus-sedang-sulit.html`

**MTK-04c · Volume Balok** (fokus Kab)
- [ ] `osn-sd-mtk-04c-volume-balok-campur.html`
- [ ] `osn-sd-mtk-04c-volume-balok-mudah.html`
- [ ] `osn-sd-mtk-04c-volume-balok-sedang.html`
- [ ] `osn-sd-mtk-04c-volume-balok-sulit.html`
- [ ] `osn-sd-mtk-04c-volume-balok-mudah-sedang.html`
- [ ] `osn-sd-mtk-04c-volume-balok-sedang-sulit.html`

**MTK-04d · Volume Prisma & Limas** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-04d-volume-prisma-limas-campur.html`
- [ ] `osn-sd-mtk-04d-volume-prisma-limas-mudah.html`
- [ ] `osn-sd-mtk-04d-volume-prisma-limas-sedang.html`
- [ ] `osn-sd-mtk-04d-volume-prisma-limas-sulit.html`
- [ ] `osn-sd-mtk-04d-volume-prisma-limas-mudah-sedang.html`
- [ ] `osn-sd-mtk-04d-volume-prisma-limas-sedang-sulit.html`

**MTK-04e · Volume Tabung** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-04e-volume-tabung-campur.html`
- [ ] `osn-sd-mtk-04e-volume-tabung-mudah.html`
- [ ] `osn-sd-mtk-04e-volume-tabung-sedang.html`
- [ ] `osn-sd-mtk-04e-volume-tabung-sulit.html`
- [ ] `osn-sd-mtk-04e-volume-tabung-mudah-sedang.html`
- [ ] `osn-sd-mtk-04e-volume-tabung-sedang-sulit.html`

**MTK-04f · Volume Kerucut & Bola** (fokus Prov)
- [ ] `osn-sd-mtk-04f-volume-kerucut-bola-campur.html`
- [ ] `osn-sd-mtk-04f-volume-kerucut-bola-mudah.html`
- [ ] `osn-sd-mtk-04f-volume-kerucut-bola-sedang.html`
- [ ] `osn-sd-mtk-04f-volume-kerucut-bola-sulit.html`
- [ ] `osn-sd-mtk-04f-volume-kerucut-bola-mudah-sedang.html`
- [ ] `osn-sd-mtk-04f-volume-kerucut-bola-sedang-sulit.html`

**MTK-04g · Luas Permukaan Kubus** (fokus Kab)
- [ ] `osn-sd-mtk-04g-lp-kubus-campur.html`
- [ ] `osn-sd-mtk-04g-lp-kubus-mudah.html`
- [ ] `osn-sd-mtk-04g-lp-kubus-sedang.html`
- [ ] `osn-sd-mtk-04g-lp-kubus-sulit.html`
- [ ] `osn-sd-mtk-04g-lp-kubus-mudah-sedang.html`
- [ ] `osn-sd-mtk-04g-lp-kubus-sedang-sulit.html`

**MTK-04h · Luas Permukaan Balok** (fokus Kab)
- [ ] `osn-sd-mtk-04h-lp-balok-campur.html`
- [ ] `osn-sd-mtk-04h-lp-balok-mudah.html`
- [ ] `osn-sd-mtk-04h-lp-balok-sedang.html`
- [ ] `osn-sd-mtk-04h-lp-balok-sulit.html`
- [ ] `osn-sd-mtk-04h-lp-balok-mudah-sedang.html`
- [ ] `osn-sd-mtk-04h-lp-balok-sedang-sulit.html`

**MTK-04i · Luas Permukaan Prisma & Limas** (fokus Prov)
- [ ] `osn-sd-mtk-04i-lp-prisma-limas-campur.html`
- [ ] `osn-sd-mtk-04i-lp-prisma-limas-mudah.html`
- [ ] `osn-sd-mtk-04i-lp-prisma-limas-sedang.html`
- [ ] `osn-sd-mtk-04i-lp-prisma-limas-sulit.html`
- [ ] `osn-sd-mtk-04i-lp-prisma-limas-mudah-sedang.html`
- [ ] `osn-sd-mtk-04i-lp-prisma-limas-sedang-sulit.html`

**MTK-04j · Luas Permukaan Tabung** (fokus Prov)
- [ ] `osn-sd-mtk-04j-lp-tabung-campur.html`
- [ ] `osn-sd-mtk-04j-lp-tabung-mudah.html`
- [ ] `osn-sd-mtk-04j-lp-tabung-sedang.html`
- [ ] `osn-sd-mtk-04j-lp-tabung-sulit.html`
- [ ] `osn-sd-mtk-04j-lp-tabung-mudah-sedang.html`
- [ ] `osn-sd-mtk-04j-lp-tabung-sedang-sulit.html`

**MTK-04k · Jaring-jaring Bangun Ruang** (fokus Kab)
- [ ] `osn-sd-mtk-04k-jaring-jaring-campur.html`
- [ ] `osn-sd-mtk-04k-jaring-jaring-mudah.html`
- [ ] `osn-sd-mtk-04k-jaring-jaring-sedang.html`
- [ ] `osn-sd-mtk-04k-jaring-jaring-sulit.html`
- [ ] `osn-sd-mtk-04k-jaring-jaring-mudah-sedang.html`
- [ ] `osn-sd-mtk-04k-jaring-jaring-sedang-sulit.html`

**MTK-04l · Bangun Ruang Gabungan** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-04l-ruang-gabungan-campur.html`
- [ ] `osn-sd-mtk-04l-ruang-gabungan-mudah.html`
- [ ] `osn-sd-mtk-04l-ruang-gabungan-sedang.html`
- [ ] `osn-sd-mtk-04l-ruang-gabungan-sulit.html`
- [ ] `osn-sd-mtk-04l-ruang-gabungan-mudah-sedang.html`
- [ ] `osn-sd-mtk-04l-ruang-gabungan-sedang-sulit.html`

**MTK-04m · Aplikasi (Kapasitas Wadah, Debit)** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-04m-aplikasi-kapasitas-campur.html`
- [ ] `osn-sd-mtk-04m-aplikasi-kapasitas-mudah.html`
- [ ] `osn-sd-mtk-04m-aplikasi-kapasitas-sedang.html`
- [ ] `osn-sd-mtk-04m-aplikasi-kapasitas-sulit.html`
- [ ] `osn-sd-mtk-04m-aplikasi-kapasitas-mudah-sedang.html`
- [ ] `osn-sd-mtk-04m-aplikasi-kapasitas-sedang-sulit.html`

### MTK-05 · Pengukuran (12 sub-bab)

**MTK-05a · Konversi Satuan Panjang (km–mm)** (fokus Kab)
- [ ] `osn-sd-mtk-05a-konversi-panjang-campur.html`
- [ ] `osn-sd-mtk-05a-konversi-panjang-mudah.html`
- [ ] `osn-sd-mtk-05a-konversi-panjang-sedang.html`
- [ ] `osn-sd-mtk-05a-konversi-panjang-sulit.html`
- [ ] `osn-sd-mtk-05a-konversi-panjang-mudah-sedang.html`
- [ ] `osn-sd-mtk-05a-konversi-panjang-sedang-sulit.html`

**MTK-05b · Konversi Satuan Berat (ton–mg)** (fokus Kab)
- [ ] `osn-sd-mtk-05b-konversi-berat-campur.html`
- [ ] `osn-sd-mtk-05b-konversi-berat-mudah.html`
- [ ] `osn-sd-mtk-05b-konversi-berat-sedang.html`
- [ ] `osn-sd-mtk-05b-konversi-berat-sulit.html`
- [ ] `osn-sd-mtk-05b-konversi-berat-mudah-sedang.html`
- [ ] `osn-sd-mtk-05b-konversi-berat-sedang-sulit.html`

**MTK-05c · Konversi Satuan Luas (km²–mm², ha, are)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-05c-konversi-luas-campur.html`
- [ ] `osn-sd-mtk-05c-konversi-luas-mudah.html`
- [ ] `osn-sd-mtk-05c-konversi-luas-sedang.html`
- [ ] `osn-sd-mtk-05c-konversi-luas-sulit.html`
- [ ] `osn-sd-mtk-05c-konversi-luas-mudah-sedang.html`
- [ ] `osn-sd-mtk-05c-konversi-luas-sedang-sulit.html`

**MTK-05d · Konversi Satuan Volume (m³–cm³, kl–ml)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-05d-konversi-volume-campur.html`
- [ ] `osn-sd-mtk-05d-konversi-volume-mudah.html`
- [ ] `osn-sd-mtk-05d-konversi-volume-sedang.html`
- [ ] `osn-sd-mtk-05d-konversi-volume-sulit.html`
- [ ] `osn-sd-mtk-05d-konversi-volume-mudah-sedang.html`
- [ ] `osn-sd-mtk-05d-konversi-volume-sedang-sulit.html`

**MTK-05e · Konversi Satuan Waktu (tahun–detik)** (fokus Kab)
- [ ] `osn-sd-mtk-05e-konversi-waktu-campur.html`
- [ ] `osn-sd-mtk-05e-konversi-waktu-mudah.html`
- [ ] `osn-sd-mtk-05e-konversi-waktu-sedang.html`
- [ ] `osn-sd-mtk-05e-konversi-waktu-sulit.html`
- [ ] `osn-sd-mtk-05e-konversi-waktu-mudah-sedang.html`
- [ ] `osn-sd-mtk-05e-konversi-waktu-sedang-sulit.html`

**MTK-05f · Operasi Waktu (Jam Masuk–Pulang)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-05f-operasi-waktu-campur.html`
- [ ] `osn-sd-mtk-05f-operasi-waktu-mudah.html`
- [ ] `osn-sd-mtk-05f-operasi-waktu-sedang.html`
- [ ] `osn-sd-mtk-05f-operasi-waktu-sulit.html`
- [ ] `osn-sd-mtk-05f-operasi-waktu-mudah-sedang.html`
- [ ] `osn-sd-mtk-05f-operasi-waktu-sedang-sulit.html`

**MTK-05g · Kecepatan, Jarak, Waktu** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-05g-kecepatan-jarak-waktu-campur.html`
- [ ] `osn-sd-mtk-05g-kecepatan-jarak-waktu-mudah.html`
- [ ] `osn-sd-mtk-05g-kecepatan-jarak-waktu-sedang.html`
- [ ] `osn-sd-mtk-05g-kecepatan-jarak-waktu-sulit.html`
- [ ] `osn-sd-mtk-05g-kecepatan-jarak-waktu-mudah-sedang.html`
- [ ] `osn-sd-mtk-05g-kecepatan-jarak-waktu-sedang-sulit.html`

**MTK-05h · Konversi Satuan Kecepatan (km/jam ↔ m/detik)** (fokus Prov)
- [ ] `osn-sd-mtk-05h-konversi-kecepatan-campur.html`
- [ ] `osn-sd-mtk-05h-konversi-kecepatan-mudah.html`
- [ ] `osn-sd-mtk-05h-konversi-kecepatan-sedang.html`
- [ ] `osn-sd-mtk-05h-konversi-kecepatan-sulit.html`
- [ ] `osn-sd-mtk-05h-konversi-kecepatan-mudah-sedang.html`
- [ ] `osn-sd-mtk-05h-konversi-kecepatan-sedang-sulit.html`

**MTK-05i · Debit (Volume per Waktu)** (fokus Prov)
- [ ] `osn-sd-mtk-05i-debit-campur.html`
- [ ] `osn-sd-mtk-05i-debit-mudah.html`
- [ ] `osn-sd-mtk-05i-debit-sedang.html`
- [ ] `osn-sd-mtk-05i-debit-sulit.html`
- [ ] `osn-sd-mtk-05i-debit-mudah-sedang.html`
- [ ] `osn-sd-mtk-05i-debit-sedang-sulit.html`

**MTK-05j · Konversi Satuan Debit** (fokus Prov)
- [ ] `osn-sd-mtk-05j-konversi-debit-campur.html`
- [ ] `osn-sd-mtk-05j-konversi-debit-mudah.html`
- [ ] `osn-sd-mtk-05j-konversi-debit-sedang.html`
- [ ] `osn-sd-mtk-05j-konversi-debit-sulit.html`
- [ ] `osn-sd-mtk-05j-konversi-debit-mudah-sedang.html`
- [ ] `osn-sd-mtk-05j-konversi-debit-sedang-sulit.html`

**MTK-05k · Soal Cerita Pengukuran Kompleks** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-05k-cerita-pengukuran-campur.html`
- [ ] `osn-sd-mtk-05k-cerita-pengukuran-mudah.html`
- [ ] `osn-sd-mtk-05k-cerita-pengukuran-sedang.html`
- [ ] `osn-sd-mtk-05k-cerita-pengukuran-sulit.html`
- [ ] `osn-sd-mtk-05k-cerita-pengukuran-mudah-sedang.html`
- [ ] `osn-sd-mtk-05k-cerita-pengukuran-sedang-sulit.html`

**MTK-05l · Selisih Waktu/Jarak/Kecepatan** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-05l-selisih-waktu-jarak-campur.html`
- [ ] `osn-sd-mtk-05l-selisih-waktu-jarak-mudah.html`
- [ ] `osn-sd-mtk-05l-selisih-waktu-jarak-sedang.html`
- [ ] `osn-sd-mtk-05l-selisih-waktu-jarak-sulit.html`
- [ ] `osn-sd-mtk-05l-selisih-waktu-jarak-mudah-sedang.html`
- [ ] `osn-sd-mtk-05l-selisih-waktu-jarak-sedang-sulit.html`

### MTK-06 · Aritmetika Sosial (10 sub-bab)

**MTK-06a · Harga Beli, Harga Jual, Untung, Rugi** (fokus Kab)
- [ ] `osn-sd-mtk-06a-untung-rugi-campur.html`
- [ ] `osn-sd-mtk-06a-untung-rugi-mudah.html`
- [ ] `osn-sd-mtk-06a-untung-rugi-sedang.html`
- [ ] `osn-sd-mtk-06a-untung-rugi-sulit.html`
- [ ] `osn-sd-mtk-06a-untung-rugi-mudah-sedang.html`
- [ ] `osn-sd-mtk-06a-untung-rugi-sedang-sulit.html`

**MTK-06b · Persentase Untung & Rugi** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-06b-persen-untung-rugi-campur.html`
- [ ] `osn-sd-mtk-06b-persen-untung-rugi-mudah.html`
- [ ] `osn-sd-mtk-06b-persen-untung-rugi-sedang.html`
- [ ] `osn-sd-mtk-06b-persen-untung-rugi-sulit.html`
- [ ] `osn-sd-mtk-06b-persen-untung-rugi-mudah-sedang.html`
- [ ] `osn-sd-mtk-06b-persen-untung-rugi-sedang-sulit.html`

**MTK-06c · Diskon (Potongan Harga)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-06c-diskon-campur.html`
- [ ] `osn-sd-mtk-06c-diskon-mudah.html`
- [ ] `osn-sd-mtk-06c-diskon-sedang.html`
- [ ] `osn-sd-mtk-06c-diskon-sulit.html`
- [ ] `osn-sd-mtk-06c-diskon-mudah-sedang.html`
- [ ] `osn-sd-mtk-06c-diskon-sedang-sulit.html`

**MTK-06d · Diskon Berlapis / Diskon Ganda** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-06d-diskon-berlapis-campur.html`
- [ ] `osn-sd-mtk-06d-diskon-berlapis-mudah.html`
- [ ] `osn-sd-mtk-06d-diskon-berlapis-sedang.html`
- [ ] `osn-sd-mtk-06d-diskon-berlapis-sulit.html`
- [ ] `osn-sd-mtk-06d-diskon-berlapis-mudah-sedang.html`
- [ ] `osn-sd-mtk-06d-diskon-berlapis-sedang-sulit.html`

**MTK-06e · Bunga Tunggal** (fokus Prov)
- [ ] `osn-sd-mtk-06e-bunga-tunggal-campur.html`
- [ ] `osn-sd-mtk-06e-bunga-tunggal-mudah.html`
- [ ] `osn-sd-mtk-06e-bunga-tunggal-sedang.html`
- [ ] `osn-sd-mtk-06e-bunga-tunggal-sulit.html`
- [ ] `osn-sd-mtk-06e-bunga-tunggal-mudah-sedang.html`
- [ ] `osn-sd-mtk-06e-bunga-tunggal-sedang-sulit.html`

**MTK-06f · Pajak (PPN, Pajak Penghasilan)** (fokus Prov)
- [ ] `osn-sd-mtk-06f-pajak-campur.html`
- [ ] `osn-sd-mtk-06f-pajak-mudah.html`
- [ ] `osn-sd-mtk-06f-pajak-sedang.html`
- [ ] `osn-sd-mtk-06f-pajak-sulit.html`
- [ ] `osn-sd-mtk-06f-pajak-mudah-sedang.html`
- [ ] `osn-sd-mtk-06f-pajak-sedang-sulit.html`

**MTK-06g · Perbandingan Senilai** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-06g-perbandingan-senilai-campur.html`
- [ ] `osn-sd-mtk-06g-perbandingan-senilai-mudah.html`
- [ ] `osn-sd-mtk-06g-perbandingan-senilai-sedang.html`
- [ ] `osn-sd-mtk-06g-perbandingan-senilai-sulit.html`
- [ ] `osn-sd-mtk-06g-perbandingan-senilai-mudah-sedang.html`
- [ ] `osn-sd-mtk-06g-perbandingan-senilai-sedang-sulit.html`

**MTK-06h · Perbandingan Berbalik Nilai** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-06h-perbandingan-berbalik-campur.html`
- [ ] `osn-sd-mtk-06h-perbandingan-berbalik-mudah.html`
- [ ] `osn-sd-mtk-06h-perbandingan-berbalik-sedang.html`
- [ ] `osn-sd-mtk-06h-perbandingan-berbalik-sulit.html`
- [ ] `osn-sd-mtk-06h-perbandingan-berbalik-mudah-sedang.html`
- [ ] `osn-sd-mtk-06h-perbandingan-berbalik-sedang-sulit.html`

**MTK-06i · Skala pada Peta/Denah** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-06i-skala-campur.html`
- [ ] `osn-sd-mtk-06i-skala-mudah.html`
- [ ] `osn-sd-mtk-06i-skala-sedang.html`
- [ ] `osn-sd-mtk-06i-skala-sulit.html`
- [ ] `osn-sd-mtk-06i-skala-mudah-sedang.html`
- [ ] `osn-sd-mtk-06i-skala-sedang-sulit.html`

**MTK-06j · Soal Cerita Kombinasi** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-06j-cerita-kombinasi-campur.html`
- [ ] `osn-sd-mtk-06j-cerita-kombinasi-mudah.html`
- [ ] `osn-sd-mtk-06j-cerita-kombinasi-sedang.html`
- [ ] `osn-sd-mtk-06j-cerita-kombinasi-sulit.html`
- [ ] `osn-sd-mtk-06j-cerita-kombinasi-mudah-sedang.html`
- [ ] `osn-sd-mtk-06j-cerita-kombinasi-sedang-sulit.html`

### MTK-07 · Statistika & Peluang (13 sub-bab)

**MTK-07a · Pengumpulan & Penyajian Data (Tabel, Turus)** (fokus Kab)
- [ ] `osn-sd-mtk-07a-penyajian-data-campur.html`
- [ ] `osn-sd-mtk-07a-penyajian-data-mudah.html`
- [ ] `osn-sd-mtk-07a-penyajian-data-sedang.html`
- [ ] `osn-sd-mtk-07a-penyajian-data-sulit.html`
- [ ] `osn-sd-mtk-07a-penyajian-data-mudah-sedang.html`
- [ ] `osn-sd-mtk-07a-penyajian-data-sedang-sulit.html`

**MTK-07b · Membaca Diagram Batang** (fokus Kab)
- [ ] `osn-sd-mtk-07b-diagram-batang-campur.html`
- [ ] `osn-sd-mtk-07b-diagram-batang-mudah.html`
- [ ] `osn-sd-mtk-07b-diagram-batang-sedang.html`
- [ ] `osn-sd-mtk-07b-diagram-batang-sulit.html`
- [ ] `osn-sd-mtk-07b-diagram-batang-mudah-sedang.html`
- [ ] `osn-sd-mtk-07b-diagram-batang-sedang-sulit.html`

**MTK-07c · Membaca Diagram Garis** (fokus Kab)
- [ ] `osn-sd-mtk-07c-diagram-garis-campur.html`
- [ ] `osn-sd-mtk-07c-diagram-garis-mudah.html`
- [ ] `osn-sd-mtk-07c-diagram-garis-sedang.html`
- [ ] `osn-sd-mtk-07c-diagram-garis-sulit.html`
- [ ] `osn-sd-mtk-07c-diagram-garis-mudah-sedang.html`
- [ ] `osn-sd-mtk-07c-diagram-garis-sedang-sulit.html`

**MTK-07d · Membaca Diagram Lingkaran (%, Derajat)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-07d-diagram-lingkaran-campur.html`
- [ ] `osn-sd-mtk-07d-diagram-lingkaran-mudah.html`
- [ ] `osn-sd-mtk-07d-diagram-lingkaran-sedang.html`
- [ ] `osn-sd-mtk-07d-diagram-lingkaran-sulit.html`
- [ ] `osn-sd-mtk-07d-diagram-lingkaran-mudah-sedang.html`
- [ ] `osn-sd-mtk-07d-diagram-lingkaran-sedang-sulit.html`

**MTK-07e · Mean (Rata-rata) Sederhana** (fokus Kab)
- [ ] `osn-sd-mtk-07e-mean-campur.html`
- [ ] `osn-sd-mtk-07e-mean-mudah.html`
- [ ] `osn-sd-mtk-07e-mean-sedang.html`
- [ ] `osn-sd-mtk-07e-mean-sulit.html`
- [ ] `osn-sd-mtk-07e-mean-mudah-sedang.html`
- [ ] `osn-sd-mtk-07e-mean-sedang-sulit.html`

**MTK-07f · Mean dengan Data Hilang** (fokus Prov)
- [ ] `osn-sd-mtk-07f-mean-data-hilang-campur.html`
- [ ] `osn-sd-mtk-07f-mean-data-hilang-mudah.html`
- [ ] `osn-sd-mtk-07f-mean-data-hilang-sedang.html`
- [ ] `osn-sd-mtk-07f-mean-data-hilang-sulit.html`
- [ ] `osn-sd-mtk-07f-mean-data-hilang-mudah-sedang.html`
- [ ] `osn-sd-mtk-07f-mean-data-hilang-sedang-sulit.html`

**MTK-07g · Median** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-07g-median-campur.html`
- [ ] `osn-sd-mtk-07g-median-mudah.html`
- [ ] `osn-sd-mtk-07g-median-sedang.html`
- [ ] `osn-sd-mtk-07g-median-sulit.html`
- [ ] `osn-sd-mtk-07g-median-mudah-sedang.html`
- [ ] `osn-sd-mtk-07g-median-sedang-sulit.html`

**MTK-07h · Modus** (fokus Kab)
- [ ] `osn-sd-mtk-07h-modus-campur.html`
- [ ] `osn-sd-mtk-07h-modus-mudah.html`
- [ ] `osn-sd-mtk-07h-modus-sedang.html`
- [ ] `osn-sd-mtk-07h-modus-sulit.html`
- [ ] `osn-sd-mtk-07h-modus-mudah-sedang.html`
- [ ] `osn-sd-mtk-07h-modus-sedang-sulit.html`

**MTK-07i · Jangkauan** (fokus Kab)
- [ ] `osn-sd-mtk-07i-jangkauan-campur.html`
- [ ] `osn-sd-mtk-07i-jangkauan-mudah.html`
- [ ] `osn-sd-mtk-07i-jangkauan-sedang.html`
- [ ] `osn-sd-mtk-07i-jangkauan-sulit.html`
- [ ] `osn-sd-mtk-07i-jangkauan-mudah-sedang.html`
- [ ] `osn-sd-mtk-07i-jangkauan-sedang-sulit.html`

**MTK-07j · Statistik Gabungan (Mean Baru setelah Penambahan)** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-07j-statistik-gabungan-campur.html`
- [ ] `osn-sd-mtk-07j-statistik-gabungan-mudah.html`
- [ ] `osn-sd-mtk-07j-statistik-gabungan-sedang.html`
- [ ] `osn-sd-mtk-07j-statistik-gabungan-sulit.html`
- [ ] `osn-sd-mtk-07j-statistik-gabungan-mudah-sedang.html`
- [ ] `osn-sd-mtk-07j-statistik-gabungan-sedang-sulit.html`

**MTK-07k · Peluang Sederhana (Dadu, Koin)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-07k-peluang-sederhana-campur.html`
- [ ] `osn-sd-mtk-07k-peluang-sederhana-mudah.html`
- [ ] `osn-sd-mtk-07k-peluang-sederhana-sedang.html`
- [ ] `osn-sd-mtk-07k-peluang-sederhana-sulit.html`
- [ ] `osn-sd-mtk-07k-peluang-sederhana-mudah-sedang.html`
- [ ] `osn-sd-mtk-07k-peluang-sederhana-sedang-sulit.html`

**MTK-07l · Peluang Kombinasi Sederhana** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-07l-peluang-kombinasi-campur.html`
- [ ] `osn-sd-mtk-07l-peluang-kombinasi-mudah.html`
- [ ] `osn-sd-mtk-07l-peluang-kombinasi-sedang.html`
- [ ] `osn-sd-mtk-07l-peluang-kombinasi-sulit.html`
- [ ] `osn-sd-mtk-07l-peluang-kombinasi-mudah-sedang.html`
- [ ] `osn-sd-mtk-07l-peluang-kombinasi-sedang-sulit.html`

**MTK-07m · Soal Cerita Statistika Aplikatif** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-07m-cerita-statistika-campur.html`
- [ ] `osn-sd-mtk-07m-cerita-statistika-mudah.html`
- [ ] `osn-sd-mtk-07m-cerita-statistika-sedang.html`
- [ ] `osn-sd-mtk-07m-cerita-statistika-sulit.html`
- [ ] `osn-sd-mtk-07m-cerita-statistika-mudah-sedang.html`
- [ ] `osn-sd-mtk-07m-cerita-statistika-sedang-sulit.html`

### MTK-08 · Pola Bilangan, Logika, & Aljabar Dasar (11 sub-bab)

**MTK-08a · Pola Bilangan Aritmetika** (fokus Kab)
- [ ] `osn-sd-mtk-08a-pola-aritmetika-campur.html`
- [ ] `osn-sd-mtk-08a-pola-aritmetika-mudah.html`
- [ ] `osn-sd-mtk-08a-pola-aritmetika-sedang.html`
- [ ] `osn-sd-mtk-08a-pola-aritmetika-sulit.html`
- [ ] `osn-sd-mtk-08a-pola-aritmetika-mudah-sedang.html`
- [ ] `osn-sd-mtk-08a-pola-aritmetika-sedang-sulit.html`

**MTK-08b · Pola Bilangan Geometri** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-08b-pola-geometri-campur.html`
- [ ] `osn-sd-mtk-08b-pola-geometri-mudah.html`
- [ ] `osn-sd-mtk-08b-pola-geometri-sedang.html`
- [ ] `osn-sd-mtk-08b-pola-geometri-sulit.html`
- [ ] `osn-sd-mtk-08b-pola-geometri-mudah-sedang.html`
- [ ] `osn-sd-mtk-08b-pola-geometri-sedang-sulit.html`

**MTK-08c · Pola Bilangan Khusus (Fibonacci, Segitiga, Persegi)** (fokus Prov)
- [ ] `osn-sd-mtk-08c-pola-khusus-campur.html`
- [ ] `osn-sd-mtk-08c-pola-khusus-mudah.html`
- [ ] `osn-sd-mtk-08c-pola-khusus-sedang.html`
- [ ] `osn-sd-mtk-08c-pola-khusus-sulit.html`
- [ ] `osn-sd-mtk-08c-pola-khusus-mudah-sedang.html`
- [ ] `osn-sd-mtk-08c-pola-khusus-sedang-sulit.html`

**MTK-08d · Suku ke-n Barisan Sederhana** (fokus Prov)
- [ ] `osn-sd-mtk-08d-suku-ke-n-campur.html`
- [ ] `osn-sd-mtk-08d-suku-ke-n-mudah.html`
- [ ] `osn-sd-mtk-08d-suku-ke-n-sedang.html`
- [ ] `osn-sd-mtk-08d-suku-ke-n-sulit.html`
- [ ] `osn-sd-mtk-08d-suku-ke-n-mudah-sedang.html`
- [ ] `osn-sd-mtk-08d-suku-ke-n-sedang-sulit.html`

**MTK-08e · Pola Gambar (Visual → Angka)** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-08e-pola-gambar-campur.html`
- [ ] `osn-sd-mtk-08e-pola-gambar-mudah.html`
- [ ] `osn-sd-mtk-08e-pola-gambar-sedang.html`
- [ ] `osn-sd-mtk-08e-pola-gambar-sulit.html`
- [ ] `osn-sd-mtk-08e-pola-gambar-mudah-sedang.html`
- [ ] `osn-sd-mtk-08e-pola-gambar-sedang-sulit.html`

**MTK-08f · Persamaan Satu Variabel** (fokus Kab–Prov)
- [ ] `osn-sd-mtk-08f-persamaan-satu-variabel-campur.html`
- [ ] `osn-sd-mtk-08f-persamaan-satu-variabel-mudah.html`
- [ ] `osn-sd-mtk-08f-persamaan-satu-variabel-sedang.html`
- [ ] `osn-sd-mtk-08f-persamaan-satu-variabel-sulit.html`
- [ ] `osn-sd-mtk-08f-persamaan-satu-variabel-mudah-sedang.html`
- [ ] `osn-sd-mtk-08f-persamaan-satu-variabel-sedang-sulit.html`

**MTK-08g · Pertidaksamaan Sederhana** (fokus Prov)
- [ ] `osn-sd-mtk-08g-pertidaksamaan-campur.html`
- [ ] `osn-sd-mtk-08g-pertidaksamaan-mudah.html`
- [ ] `osn-sd-mtk-08g-pertidaksamaan-sedang.html`
- [ ] `osn-sd-mtk-08g-pertidaksamaan-sulit.html`
- [ ] `osn-sd-mtk-08g-pertidaksamaan-mudah-sedang.html`
- [ ] `osn-sd-mtk-08g-pertidaksamaan-sedang-sulit.html`

**MTK-08h · Teka-teki Logika (Kombinatorial)** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-08h-teka-teki-logika-campur.html`
- [ ] `osn-sd-mtk-08h-teka-teki-logika-mudah.html`
- [ ] `osn-sd-mtk-08h-teka-teki-logika-sedang.html`
- [ ] `osn-sd-mtk-08h-teka-teki-logika-sulit.html`
- [ ] `osn-sd-mtk-08h-teka-teki-logika-mudah-sedang.html`
- [ ] `osn-sd-mtk-08h-teka-teki-logika-sedang-sulit.html`

**MTK-08i · Penalaran Deduktif (Jika-Maka)** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-08i-penalaran-deduktif-campur.html`
- [ ] `osn-sd-mtk-08i-penalaran-deduktif-mudah.html`
- [ ] `osn-sd-mtk-08i-penalaran-deduktif-sedang.html`
- [ ] `osn-sd-mtk-08i-penalaran-deduktif-sulit.html`
- [ ] `osn-sd-mtk-08i-penalaran-deduktif-mudah-sedang.html`
- [ ] `osn-sd-mtk-08i-penalaran-deduktif-sedang-sulit.html`

**MTK-08j · Soal Cerita Aljabar (Umur, Usia, dst.)** (fokus Prov–Nas)
- [ ] `osn-sd-mtk-08j-cerita-aljabar-campur.html`
- [ ] `osn-sd-mtk-08j-cerita-aljabar-mudah.html`
- [ ] `osn-sd-mtk-08j-cerita-aljabar-sedang.html`
- [ ] `osn-sd-mtk-08j-cerita-aljabar-sulit.html`
- [ ] `osn-sd-mtk-08j-cerita-aljabar-mudah-sedang.html`
- [ ] `osn-sd-mtk-08j-cerita-aljabar-sedang-sulit.html`

**MTK-08k · Soal Kombinatorik Dasar** (fokus Nas)
- [ ] `osn-sd-mtk-08k-kombinatorik-campur.html`
- [ ] `osn-sd-mtk-08k-kombinatorik-mudah.html`
- [ ] `osn-sd-mtk-08k-kombinatorik-sedang.html`
- [ ] `osn-sd-mtk-08k-kombinatorik-sulit.html`
- [ ] `osn-sd-mtk-08k-kombinatorik-mudah-sedang.html`
- [ ] `osn-sd-mtk-08k-kombinatorik-sedang-sulit.html`

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
- Default ekstensi `.html` (interaktif). Markdown `.md` hanya kalau user eksplisit minta — sesuai aturan di [SKILL.md](../osn-sd-prep-extracted/osn-sd-prep/SKILL.md).
- Struktur file sama dengan Mode Per-Materi MASTER-INDEX: **Bagian I (Materi) + Bagian II (100 Soal) + Bagian III (Ringkasan)** — tapi Bagian I difokuskan pada satu sub-bab saja.
- Update centang `[ ]` → `[x]` setiap kali file selesai. Index ini adalah sumber kebenaran untuk progres sub-bab.
- File ini **melengkapi** [_MASTER-INDEX.md](_MASTER-INDEX.md), bukan menggantinya. Gunakan MASTER-INDEX untuk paket bab-level luas, dan file ini untuk drill mendalam satu sub-topik.
- Urutan eksekusi default mengikuti urutan sub-bab di taksonomi (alfabetis kode huruf). User boleh redirect kapan saja.

---

## Trigger Generation per Sub-Bab

Untuk minta generate file sub-bab, gunakan trigger spesifik:

- "Generate `osn-sd-mtk-01f-fpb-sulit.html`"
- "Buatkan 100 soal sub-bab FPB tingkat Nasional"
- "Sub-bab IPA-03d tuas, tingkat campur"
- "Lanjutkan dari MASTER-SUBBAB-INDEX baris berikutnya yang belum dicentang"

Default behaviour: skill akan baca file taksonomi terkait → ambil **Tipe Soal Khas OSN** dan **Miskonsepsi** untuk sub-bab itu → distribusikan 100 soal di antaranya dengan komposisi tingkat sesuai slug `-mudah / -sedang / -sulit / -campur / -mudah-sedang / -sedang-sulit`.
