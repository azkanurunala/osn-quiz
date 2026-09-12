# OSN/KSN SD — MTK · Sub-Bab 01f: FPB (Faktor Persekutuan Terbesar) (Tingkat Mudah)

> **Profil**: 100 Kab = 100 soal PG
> **Fokus**: Menentukan FPB dua atau tiga bilangan lewat daftar faktor dan faktorisasi prima, sifat-sifat khusus FPB (bilangan saling prima, satu bilangan habis membagi lainnya, bilangan berurutan), serta soal cerita dasar "bagi rata/potong sama panjang/ubin".
> **Target**: SD kelas 5–6 persiapan OSN/KSN
> **Estimasi waktu**: 6–9 jam (boleh dibagi beberapa sesi)

---

## 📋 Daftar Isi

- **Bagian I — Konsep & Strategi** — definisi FPB, tiga cara mencari FPB, sifat-sifat penting, dan cara mengenali soal cerita FPB.
- **Bagian II — 100 Soal PG** — 100 soal Kabupaten, lengkap dengan pembahasan analisis 4 opsi.
- **Bagian III — Kunci & Distribusi** — tabel kunci, distribusi A/B/C/D, dan strategi belajar.

---

# Bagian I — Konsep & Strategi

## 1. Apa Itu FPB?

**FPB (Faktor Persekutuan Terbesar)** adalah bilangan **terbesar** yang dapat **membagi habis** (tanpa sisa) dua bilangan atau lebih.

Contoh: FPB(12, 18)
- Faktor 12 = {1, 2, 3, 4, 6, 12}
- Faktor 18 = {1, 2, 3, 6, 9, 18}
- Faktor **persekutuan** (yang sama di kedua daftar) = {1, 2, 3, 6}
- Yang **terbesar** dari faktor persekutuan itu = **6** → FPB(12, 18) = 6.

## 2. Tiga Cara Mencari FPB

### Cara 1 — Daftar Faktor
Tuliskan semua faktor tiap bilangan, cari yang sama, ambil yang terbesar. Cocok untuk bilangan kecil (≤ 30).

### Cara 2 — Faktorisasi Prima ⭐ (cara utama OSN)
1. Faktorkan tiap bilangan menjadi perkalian bilangan prima.
2. Pilih faktor prima yang **SAMA** (muncul di semua bilangan).
3. Untuk tiap faktor sama itu, ambil **pangkat TERKECIL**.
4. Kalikan semua faktor terpilih.

Contoh: FPB(24, 36) → 24 = 2³ × 3, 36 = 2² × 3². Faktor sama: 2 dan 3. Pangkat terkecil: 2² dan 3¹. FPB = 4 × 3 = **12**.

### Cara 3 — Algoritma Euclid (opsional, SD lanjut)
FPB(a, b) = FPB(b, a mod b), diulang sampai sisa 0; pembagi terakhir adalah FPB. Contoh: FPB(48, 18): 48 = 2×18 + 12 → 18 = 1×12 + 6 → 12 = 2×6 + 0 → FPB = **6**.

## 3. Tabel Faktorisasi Prima Bilangan Penting

| Bilangan | Faktorisasi | Bilangan | Faktorisasi |
|---|---|---|---|
| 8 | 2³ | 45 | 3² × 5 |
| 9 | 3² | 48 | 2⁴ × 3 |
| 10 | 2 × 5 | 49 | 7² |
| 12 | 2² × 3 | 50 | 2 × 5² |
| 14 | 2 × 7 | 54 | 2 × 3³ |
| 15 | 3 × 5 | 56 | 2³ × 7 |
| 16 | 2⁴ | 60 | 2² × 3 × 5 |
| 18 | 2 × 3² | 63 | 3² × 7 |
| 20 | 2² × 5 | 64 | 2⁶ |
| 24 | 2³ × 3 | 68 | 2² × 17 |
| 27 | 3³ | 72 | 2³ × 3² |
| 28 | 2² × 7 | 75 | 3 × 5² |
| 30 | 2 × 3 × 5 | 80 | 2⁴ × 5 |
| 32 | 2⁵ | 84 | 2² × 3 × 7 |
| 36 | 2² × 3² | 90 | 2 × 3² × 5 |
| 40 | 2³ × 5 | 100 | 2² × 5² |

## 4. Sifat-Sifat Penting FPB

1. **FPB selalu ≤ bilangan terkecil** dalam himpunan.
2. **Jika satu bilangan habis dibagi bilangan lainnya**, FPB-nya = bilangan yang **lebih kecil**. Contoh: FPB(9, 27) = 9.
3. **Dua bilangan berurutan** (selisih 1) selalu punya FPB = **1**. Contoh: FPB(19, 20) = 1.
4. **Dua bilangan prima berbeda** selalu punya FPB = **1**. Contoh: FPB(11, 17) = 1.
5. Bilangan dengan FPB = 1 disebut **saling prima** (relatif prima) — tidak harus keduanya bilangan prima.
6. **FPB suatu bilangan dengan dirinya sendiri** = bilangan itu sendiri: FPB(a, a) = a.

## 5. Kapan Soal Cerita = FPB? (Bukan KPK!)

Kata kunci **FPB**: "**dibagi rata / sama banyak / sama jenis**", "**dipotong sama panjang**", "**jumlah maksimum / sebanyak-banyaknya** kelompok/parsel/kotak yang dapat dibuat", "**ubin/paving terbesar** untuk menutupi lantai/taman tanpa potongan".

Kata kunci **KPK** (BUKAN FPB): "**bertemu lagi**", "**bersamaan lagi**", "**hari yang sama** kembali terjadi", "**bilangan terkecil yang…**".

## 6. Pola Penyelesaian Soal Cerita FPB

1. **Identifikasi bilangan-bilangan** yang akan dibagi rata.
2. **Hitung FPB**-nya → ini adalah **jumlah maksimum kelompok/parsel/potongan/kotak**.
3. Jika ditanya **isi tiap kelompok**, bagi tiap bilangan asal dengan FPB.

Contoh: Pak Andi punya 40 kue dan 60 permen, dibuat parsel sama jenis & jumlah sebanyak-banyaknya. FPB(40, 60) = 20 → **20 parsel**; isi tiap parsel: 40÷20 = 2 kue, 60÷20 = 3 permen.

## 7. Kesalahan Umum yang Dijadikan Distractor

1. **Mengambil pangkat TERBESAR** pada faktorisasi prima (itu cara KPK, bukan FPB).
2. **Mengambil faktor prima yang tidak sama** di semua bilangan (untuk FPB hanya faktor yang benar-benar sama di SEMUA bilangan).
3. **Berhenti sebelum faktorisasi tuntas** (mis. 36 = 6 × 6 dianggap selesai, padahal 6 bukan prima).
4. **Mengira bilangan terkecil dalam soal otomatis FPB**, padahal harus dicek apakah benar-benar membagi habis.
5. **Tertukar dengan KPK** pada soal cerita "bertemu lagi/bersamaan".
6. **Lupa bahwa FPB(a, a) = a.**

## 8. Catatan untuk Soal OSN Tingkat Mudah

Di tingkat Kabupaten, soal FPB umumnya berupa hitungan langsung dua atau tiga bilangan dengan angka kecil–sedang (di bawah 110), serta soal cerita pendek 1 langkah (bagi rata, potong sama panjang, ubin). Kuasai faktorisasi prima dengan cepat dan hafalkan sifat-sifat khusus (bilangan berurutan, dua prima berbeda, satu bilangan habis membagi lainnya) supaya bisa menjawab tanpa menulis faktor satu-satu.

---

# Bagian II — 100 Soal PG

## KAB · Soal 1-100 (Tingkat Kabupaten, C2-C3)

Bagian ini berisi hitungan FPB langsung (dua dan tiga bilangan), sifat-sifat khusus FPB, serta soal cerita pendek 1 langkah dengan angka kecil–sedang. Cocok untuk pemanasan dan penguatan konsep faktorisasi prima.

---

**1.** FPB dari 9 dan 15 adalah ....

- A. 1
- B. 3
- C. 5
- D. 45

**Kunci: B**
**Pembahasan:**
- **A salah** — 1 memang faktor persekutuan, tetapi bukan yang terbesar; masih ada 3 yang juga membagi keduanya.
- **B benar** — 9 = 3², 15 = 3 × 5. Faktor sama: 3. Pangkat terkecil: 3¹. FPB = 3.
- **C salah** — 5 hanya faktor dari 15, tidak membagi 9 (9 ganjil dan bukan kelipatan 5).
- **D salah** — 45 adalah KPK(9, 15), bukan FPB. Tertukar konsep.
- **Konsep kunci:** FPB dicari dengan faktorisasi prima: ambil faktor prima yang sama, dengan pangkat paling kecil.
- **Langkah Penyelesaian:**
  1. 9 = 3².
  2. 15 = 3 × 5.
  3. Faktor sama: 3. FPB = 3.

---

**2.** FPB dari 10 dan 14 adalah ....

- A. 5
- B. 7
- C. 2
- D. 70

**Kunci: C**
**Pembahasan:**
- **A salah** — 5 hanya faktor dari 10, tidak membagi 14.
- **B salah** — 7 hanya faktor dari 14, tidak membagi 10.
- **C benar** — 10 = 2 × 5, 14 = 2 × 7. Faktor sama hanya 2. FPB = 2.
- **D salah** — 70 = KPK(10, 14). Tertukar dengan KPK.
- **Konsep kunci:** FPB dicari dari faktor prima yang benar-benar sama di kedua bilangan.
- **Langkah Penyelesaian:**
  1. 10 = 2 × 5.
  2. 14 = 2 × 7.
  3. Faktor sama: 2. FPB = 2.

---

**3.** FPB dari 12 dan 20 adalah ....

- A. 4
- B. 2
- C. 12
- D. 60

**Kunci: A**
**Pembahasan:**
- **A benar** — 12 = 2² × 3, 20 = 2² × 5. Faktor sama: 2. Pangkat terkecil: 2². FPB = 4.
- **B salah** — 2 memang faktor persekutuan, tetapi belum maksimum karena 4 juga membagi keduanya.
- **C salah** — 12 tidak membagi habis 20 (20 ÷ 12 bersisa). Mengira bilangan terkecil otomatis FPB.
- **D salah** — 60 = KPK(12, 20). Salah arah.
- **Konsep kunci:** FPB dicari dengan faktorisasi prima: ambil faktor prima sama, pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 12 = 2² × 3.
  2. 20 = 2² × 5.
  3. Faktor sama: 2², FPB = 4.

---

**4.** FPB dari 14 dan 18 adalah ....

- A. 7
- B. 9
- C. 1
- D. 2

**Kunci: D**
**Pembahasan:**
- **A salah** — 7 hanya faktor dari 14, tidak membagi 18.
- **B salah** — 9 hanya faktor dari 18, tidak membagi 14.
- **C salah** — 1 memang faktor persekutuan, tetapi bukan yang terbesar.
- **D benar** — 14 = 2 × 7, 18 = 2 × 3². Faktor sama hanya 2. FPB = 2.
- **Konsep kunci:** FPB hanya diambil dari faktor prima yang benar-benar muncul di kedua bilangan.
- **Langkah Penyelesaian:**
  1. 14 = 2 × 7.
  2. 18 = 2 × 3².
  3. Faktor sama: 2. FPB = 2.

---

**5.** FPB dari 15 dan 18 adalah ....

- A. 5
- B. 9
- C. 3
- D. 90

**Kunci: C**
**Pembahasan:**
- **A salah** — 5 hanya faktor dari 15, tidak membagi 18.
- **B salah** — 9 hanya faktor dari 18 (9 = 3²), tidak membagi 15.
- **C benar** — 15 = 3 × 5, 18 = 2 × 3². Faktor sama: 3. Pangkat terkecil: 3¹. FPB = 3.
- **D salah** — 90 = KPK(15, 18). Tertukar konsep.
- **Konsep kunci:** Bandingkan faktorisasi prima kedua bilangan, ambil faktor sama berpangkat terkecil.
- **Langkah Penyelesaian:**
  1. 15 = 3 × 5.
  2. 18 = 2 × 3².
  3. Faktor sama: 3. FPB = 3.

---

**6.** FPB dari 16 dan 20 adalah ....

- A. 2
- B. 4
- C. 16
- D. 80

**Kunci: B**
**Pembahasan:**
- **A salah** — 2 memang faktor persekutuan, tetapi belum maksimum karena 4 juga membagi keduanya.
- **B benar** — 16 = 2⁴, 20 = 2² × 5. Faktor sama: 2. Pangkat terkecil: 2². FPB = 4.
- **C salah** — 16 tidak membagi habis 20 (20 ÷ 16 bersisa).
- **D salah** — 80 = KPK(16, 20). Salah arah.
- **Konsep kunci:** Pangkat yang diambil untuk FPB harus yang PALING KECIL di antara kedua bilangan.
- **Langkah Penyelesaian:**
  1. 16 = 2⁴.
  2. 20 = 2² × 5.
  3. Pangkat terkecil dari 2 adalah 2². FPB = 4.

---

**7.** FPB dari 20 dan 24 adalah ....

- A. 2
- B. 8
- C. 5
- D. 4

**Kunci: D**
**Pembahasan:**
- **A salah** — 2 memang faktor persekutuan, tetapi bukan yang terbesar.
- **B salah** — 8 = 2³ tidak membagi 20 (20 hanya punya 2²). Salah mengambil pangkat.
- **C salah** — 5 hanya faktor dari 20, tidak membagi 24.
- **D benar** — 20 = 2² × 5, 24 = 2³ × 3. Faktor sama: 2. Pangkat terkecil: 2². FPB = 4.
- **Konsep kunci:** Ambil pangkat terkecil dari faktor prima yang sama, bukan pangkat terbesar dari salah satu bilangan.
- **Langkah Penyelesaian:**
  1. 20 = 2² × 5.
  2. 24 = 2³ × 3.
  3. Pangkat terkecil dari 2 adalah 2². FPB = 4.

---

**8.** FPB dari 20 dan 28 adalah ....

- A. 4
- B. 2
- C. 5
- D. 140

**Kunci: A**
**Pembahasan:**
- **A benar** — 20 = 2² × 5, 28 = 2² × 7. Faktor sama: 2². FPB = 4.
- **B salah** — 2 memang faktor persekutuan, tetapi bukan yang terbesar.
- **C salah** — 5 hanya faktor dari 20, tidak membagi 28.
- **D salah** — 140 = KPK(20, 28). Tertukar konsep.
- **Konsep kunci:** FPB dicari dengan faktorisasi prima: faktor sama, pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 20 = 2² × 5.
  2. 28 = 2² × 7.
  3. Faktor sama: 2². FPB = 4.

---

**9.** FPB dari 22 dan 33 adalah ....

- A. 2
- B. 3
- C. 11
- D. 66

**Kunci: C**
**Pembahasan:**
- **A salah** — 2 hanya faktor dari 22, tidak membagi 33 (33 ganjil).
- **B salah** — 3 hanya faktor dari 33, tidak membagi 22.
- **C benar** — 22 = 2 × 11, 33 = 3 × 11. Faktor sama hanya 11. FPB = 11.
- **D salah** — 66 = KPK(22, 33). Salah arah.
- **Konsep kunci:** Faktor persekutuan hanya faktor prima yang muncul di kedua bilangan.
- **Langkah Penyelesaian:**
  1. 22 = 2 × 11.
  2. 33 = 3 × 11.
  3. Faktor sama: 11. FPB = 11.

---

**10.** FPB dari 24 dan 32 adalah ....

- A. 2
- B. 4
- C. 3
- D. 8

**Kunci: D**
**Pembahasan:**
- **A salah** — 2 memang faktor persekutuan, tetapi belum maksimum.
- **B salah** — 4 juga membagi keduanya, tetapi masih ada 8 yang lebih besar.
- **C salah** — 3 hanya faktor dari 24, tidak membagi 32.
- **D benar** — 24 = 2³ × 3, 32 = 2⁵. Faktor sama: 2. Pangkat terkecil: 2³. FPB = 8.
- **Konsep kunci:** Ambil pangkat terkecil pada faktor prima yang sama.
- **Langkah Penyelesaian:**
  1. 24 = 2³ × 3.
  2. 32 = 2⁵.
  3. Pangkat terkecil dari 2 adalah 2³. FPB = 8.

---

**11.** FPB dari 24 dan 40 adalah ....

- A. 4
- B. 8
- C. 3
- D. 120

**Kunci: B**
**Pembahasan:**
- **A salah** — 4 = 2² memang membagi keduanya, tetapi bukan pangkat terkecil yang benar (masih ada 2³).
- **B benar** — 24 = 2³ × 3, 40 = 2³ × 5. Faktor sama: 2³ = 8. FPB = 8.
- **C salah** — 3 hanya faktor dari 24, tidak membagi 40.
- **D salah** — 120 = KPK(24, 40). Tertukar.
- **Konsep kunci:** Bandingkan pangkat faktor prima yang sama di kedua bilangan, pilih yang terkecil.
- **Langkah Penyelesaian:**
  1. 24 = 2³ × 3.
  2. 40 = 2³ × 5.
  3. Faktor sama: 2³. FPB = 8.

---

**12.** FPB dari 26 dan 39 adalah ....

- A. 13
- B. 2
- C. 3
- D. 78

**Kunci: A**
**Pembahasan:**
- **A benar** — 26 = 2 × 13, 39 = 3 × 13. Faktor sama hanya 13. FPB = 13.
- **B salah** — 2 hanya faktor dari 26, tidak membagi 39.
- **C salah** — 3 hanya faktor dari 39, tidak membagi 26.
- **D salah** — 78 = KPK(26, 39). Salah arah.
- **Konsep kunci:** Faktor persekutuan hanya faktor prima yang sama-sama muncul di kedua faktorisasi.
- **Langkah Penyelesaian:**
  1. 26 = 2 × 13.
  2. 39 = 3 × 13.
  3. Faktor sama: 13. FPB = 13.

---

**13.** FPB dari 28 dan 35 adalah ....

- A. 2
- B. 5
- C. 1
- D. 7

**Kunci: D**
**Pembahasan:**
- **A salah** — 2 hanya faktor dari 28, tidak membagi 35 (35 ganjil).
- **B salah** — 5 hanya faktor dari 35, tidak membagi 28.
- **C salah** — 1 memang faktor persekutuan, tetapi bukan yang terbesar.
- **D benar** — 28 = 2² × 7, 35 = 5 × 7. Faktor sama hanya 7. FPB = 7.
- **Konsep kunci:** Cari faktor prima yang benar-benar sama di kedua bilangan.
- **Langkah Penyelesaian:**
  1. 28 = 2² × 7.
  2. 35 = 5 × 7.
  3. Faktor sama: 7. FPB = 7.

---

**14.** FPB dari 30 dan 36 adalah ....

- A. 2
- B. 3
- C. 6
- D. 180

**Kunci: C**
**Pembahasan:**
- **A salah** — 2 memang faktor persekutuan, tetapi belum maksimum (3 dan 2×3 juga membagi keduanya).
- **B salah** — 3 juga membagi keduanya, tetapi masih ada 6 yang lebih besar.
- **C benar** — 30 = 2 × 3 × 5, 36 = 2² × 3². Faktor sama: 2 dan 3, pangkat terkecil 2¹ × 3¹ = 6.
- **D salah** — 180 = KPK(30, 36). Tertukar.
- **Konsep kunci:** Saat ada lebih dari satu faktor prima sama, kalikan semuanya (pangkat terkecil masing-masing).
- **Langkah Penyelesaian:**
  1. 30 = 2 × 3 × 5.
  2. 36 = 2² × 3².
  3. Faktor sama: 2¹ × 3¹ = 6.

---

**15.** FPB dari 30 dan 40 adalah ....

- A. 10
- B. 5
- C. 2
- D. 120

**Kunci: A**
**Pembahasan:**
- **A benar** — 30 = 2 × 3 × 5, 40 = 2³ × 5. Faktor sama: 2 dan 5, pangkat terkecil 2¹ × 5¹ = 10.
- **B salah** — 5 memang faktor persekutuan, tetapi belum maksimum.
- **C salah** — 2 juga membagi keduanya, tetapi belum maksimum.
- **D salah** — 120 = KPK(30, 40). Salah arah.
- **Konsep kunci:** Kalikan semua faktor prima sama dengan pangkat terkecilnya.
- **Langkah Penyelesaian:**
  1. 30 = 2 × 3 × 5.
  2. 40 = 2³ × 5.
  3. Faktor sama: 2¹ × 5¹ = 10.

---

**16.** FPB dari 32 dan 40 adalah ....

- A. 4
- B. 8
- C. 16
- D. 160

**Kunci: B**
**Pembahasan:**
- **A salah** — 4 = 2² memang membagi keduanya, tetapi bukan pangkat terkecil yang tepat.
- **B benar** — 32 = 2⁵, 40 = 2³ × 5. Faktor sama: 2, pangkat terkecil 2³. FPB = 8.
- **C salah** — 16 = 2⁴ tidak membagi 40 (40 hanya punya 2³).
- **D salah** — 160 = KPK(32, 40). Tertukar.
- **Konsep kunci:** Pangkat terkecil ditentukan oleh bilangan yang punya pangkat lebih rendah pada faktor tersebut.
- **Langkah Penyelesaian:**
  1. 32 = 2⁵.
  2. 40 = 2³ × 5.
  3. Pangkat terkecil dari 2 adalah 2³. FPB = 8.

---

**17.** FPB dari 33 dan 44 adalah ....

- A. 3
- B. 2
- C. 1
- D. 11

**Kunci: D**
**Pembahasan:**
- **A salah** — 3 hanya faktor dari 33, tidak membagi 44.
- **B salah** — 2 hanya faktor dari 44, tidak membagi 33 (33 ganjil).
- **C salah** — 1 memang faktor persekutuan, tetapi bukan yang terbesar.
- **D benar** — 33 = 3 × 11, 44 = 2² × 11. Faktor sama hanya 11. FPB = 11.
- **Konsep kunci:** Faktor persekutuan harus muncul di kedua faktorisasi prima.
- **Langkah Penyelesaian:**
  1. 33 = 3 × 11.
  2. 44 = 2² × 11.
  3. Faktor sama: 11. FPB = 11.

---

**18.** FPB dari 35 dan 49 adalah ....

- A. 5
- B. 49
- C. 7
- D. 245

**Kunci: C**
**Pembahasan:**
- **A salah** — 5 hanya faktor dari 35, tidak membagi 49.
- **B salah** — 49 tidak membagi 35 (49 > 35). Mengira bilangan terbesar otomatis FPB.
- **C benar** — 35 = 5 × 7, 49 = 7². Faktor sama: 7. FPB = 7.
- **D salah** — 245 = KPK(35, 49). Tertukar.
- **Konsep kunci:** FPB tidak pernah lebih besar dari bilangan terkecil dalam soal.
- **Langkah Penyelesaian:**
  1. 35 = 5 × 7.
  2. 49 = 7².
  3. Faktor sama: 7. FPB = 7.

---

**19.** FPB dari 36 dan 54 adalah ....

- A. 9
- B. 18
- C. 6
- D. 108

**Kunci: B**
**Pembahasan:**
- **A salah** — 9 = 3² memang membagi keduanya, tetapi belum maksimum karena faktor 2 belum dimasukkan.
- **B benar** — 36 = 2² × 3², 54 = 2 × 3³. Faktor sama: 2 (pangkat terkecil 2¹) dan 3 (pangkat terkecil 3²). FPB = 2 × 9 = 18.
- **C salah** — 6 = 2 × 3 memakai pangkat 3 yang terlalu kecil (seharusnya 3², bukan 3¹).
- **D salah** — 108 = KPK(36, 54). Salah arah.
- **Konsep kunci:** Untuk tiap faktor prima sama, ambil pangkat TERKECIL di antara kedua bilangan — bukan pangkat sembarangan.
- **Langkah Penyelesaian:**
  1. 36 = 2² × 3².
  2. 54 = 2 × 3³.
  3. Faktor sama: 2¹ × 3² = 2 × 9 = 18.

---

**20.** FPB dari 38 dan 57 adalah ....

- A. 19
- B. 2
- C. 3
- D. 114

**Kunci: A**
**Pembahasan:**
- **A benar** — 38 = 2 × 19, 57 = 3 × 19. Faktor sama hanya 19. FPB = 19.
- **B salah** — 2 hanya faktor dari 38, tidak membagi 57.
- **C salah** — 3 hanya faktor dari 57, tidak membagi 38.
- **D salah** — 114 = KPK(38, 57). Tertukar konsep.
- **Konsep kunci:** Faktor persekutuan hanya faktor prima yang sama-sama muncul di kedua bilangan.
- **Langkah Penyelesaian:**
  1. 38 = 2 × 19.
  2. 57 = 3 × 19.
  3. Faktor sama: 19. FPB = 19.

---

**21.** FPB dari 40 dan 50 adalah ....

- A. 5
- B. 2
- C. 20
- D. 10

**Kunci: D**
**Pembahasan:**
- **A salah** — 5 memang faktor persekutuan, tetapi belum maksimum.
- **B salah** — 2 juga membagi keduanya, tetapi belum maksimum.
- **C salah** — 20 = 2² × 5 tidak membagi 50 (50 hanya punya 2¹). Salah mengambil pangkat 2.
- **D benar** — 40 = 2³ × 5, 50 = 2 × 5². Faktor sama: 2¹ × 5¹ = 10.
- **Konsep kunci:** Pangkat terkecil ditentukan bilangan dengan pangkat lebih rendah pada faktor tersebut.
- **Langkah Penyelesaian:**
  1. 40 = 2³ × 5.
  2. 50 = 2 × 5².
  3. Faktor sama: 2¹ × 5¹ = 10.

---

**22.** FPB dari 42 dan 56 adalah ....

- A. 14
- B. 7
- C. 2
- D. 168

**Kunci: A**
**Pembahasan:**
- **A benar** — 42 = 2 × 3 × 7, 56 = 2³ × 7. Faktor sama: 2¹ × 7¹ = 14.
- **B salah** — 7 memang faktor persekutuan, tetapi belum maksimum.
- **C salah** — 2 juga membagi keduanya, tetapi belum maksimum.
- **D salah** — 168 = KPK(42, 56). Tertukar.
- **Konsep kunci:** Kalikan semua faktor prima sama dengan pangkat terkecilnya.
- **Langkah Penyelesaian:**
  1. 42 = 2 × 3 × 7.
  2. 56 = 2³ × 7.
  3. Faktor sama: 2¹ × 7¹ = 14.

---

**23.** FPB dari 44 dan 66 adalah ....

- A. 11
- B. 22
- C. 2
- D. 132

**Kunci: B**
**Pembahasan:**
- **A salah** — 11 memang faktor persekutuan, tetapi belum maksimum.
- **B benar** — 44 = 2² × 11, 66 = 2 × 3 × 11. Faktor sama: 2¹ × 11¹ = 22.
- **C salah** — 2 juga membagi keduanya, tetapi belum maksimum.
- **D salah** — 132 = KPK(44, 66). Salah arah.
- **Konsep kunci:** Ambil pangkat terkecil untuk tiap faktor sama, lalu kalikan.
- **Langkah Penyelesaian:**
  1. 44 = 2² × 11.
  2. 66 = 2 × 3 × 11.
  3. Faktor sama: 2¹ × 11¹ = 22.

---

**24.** FPB dari 45 dan 60 adalah ....

- A. 5
- B. 9
- C. 15
- D. 180

**Kunci: C**
**Pembahasan:**
- **A salah** — 5 memang faktor persekutuan, tetapi belum maksimum.
- **B salah** — 9 = 3² tidak membagi 60 (60 hanya punya 3¹).
- **C benar** — 45 = 3² × 5, 60 = 2² × 3 × 5. Faktor sama: 3¹ × 5¹ = 15.
- **D salah** — 180 = KPK(45, 60). Tertukar.
- **Konsep kunci:** Pangkat terkecil ditentukan bilangan yang pangkatnya lebih rendah pada faktor tersebut.
- **Langkah Penyelesaian:**
  1. 45 = 3² × 5.
  2. 60 = 2² × 3 × 5.
  3. Faktor sama: 3¹ × 5¹ = 15.

---

**25.** FPB dari 45 dan 75 adalah ....

- A. 15
- B. 9
- C. 25
- D. 225

**Kunci: A**
**Pembahasan:**
- **A benar** — 45 = 3² × 5, 75 = 3 × 5². Faktor sama: 3¹ × 5¹ = 15.
- **B salah** — 9 = 3² tidak membagi 75 (75 hanya punya 3¹).
- **C salah** — 25 = 5² tidak membagi 45 (45 hanya punya 5¹).
- **D salah** — 225 = KPK(45, 75). Tertukar.
- **Konsep kunci:** Untuk tiap faktor prima sama, pangkat yang dipakai adalah pangkat TERENDAH di antara kedua bilangan.
- **Langkah Penyelesaian:**
  1. 45 = 3² × 5.
  2. 75 = 3 × 5².
  3. Faktor sama: 3¹ × 5¹ = 15.

---

**26.** FPB dari 48 dan 60 adalah ....

- A. 4
- B. 3
- C. 6
- D. 12

**Kunci: D**
**Pembahasan:**
- **A salah** — 4 = 2² memang membagi keduanya, tetapi faktor 3 belum dimasukkan.
- **B salah** — 3 juga membagi keduanya, tetapi faktor 2² belum dimasukkan.
- **C salah** — 6 = 2 × 3 memakai pangkat 2 yang terlalu kecil (seharusnya 2², bukan 2¹).
- **D benar** — 48 = 2⁴ × 3, 60 = 2² × 3 × 5. Faktor sama: 2² × 3¹ = 12.
- **Konsep kunci:** Jangan lupa mengalikan SEMUA faktor prima sama, bukan hanya salah satunya.
- **Langkah Penyelesaian:**
  1. 48 = 2⁴ × 3.
  2. 60 = 2² × 3 × 5.
  3. Faktor sama: 2² × 3¹ = 12.

---

**27.** FPB dari 48 dan 72 adalah ....

- A. 8
- B. 3
- C. 24
- D. 144

**Kunci: C**
**Pembahasan:**
- **A salah** — 8 = 2³ memang membagi keduanya, tetapi faktor 3 belum dimasukkan.
- **B salah** — 3 juga membagi keduanya, tetapi belum maksimum.
- **C benar** — 48 = 2⁴ × 3, 72 = 2³ × 3². Faktor sama: 2³ × 3¹ = 24.
- **D salah** — 144 = KPK(48, 72). Tertukar.
- **Konsep kunci:** Kalikan semua faktor prima sama dengan pangkat terkecilnya masing-masing.
- **Langkah Penyelesaian:**
  1. 48 = 2⁴ × 3.
  2. 72 = 2³ × 3².
  3. Faktor sama: 2³ × 3¹ = 24.

---

**28.** FPB dari 49 dan 63 adalah ....

- A. 9
- B. 7
- C. 1
- D. 441

**Kunci: B**
**Pembahasan:**
- **A salah** — 9 = 3² hanya faktor dari 63, tidak membagi 49.
- **B benar** — 49 = 7², 63 = 3² × 7. Faktor sama: 7. FPB = 7.
- **C salah** — 1 memang faktor persekutuan, tetapi bukan yang terbesar.
- **D salah** — 441 = KPK(49, 63). Tertukar.
- **Konsep kunci:** Faktor persekutuan hanya faktor prima yang muncul di kedua bilangan.
- **Langkah Penyelesaian:**
  1. 49 = 7².
  2. 63 = 3² × 7.
  3. Faktor sama: 7. FPB = 7.

---

**29.** FPB dari 50 dan 70 adalah ....

- A. 10
- B. 5
- C. 25
- D. 350

**Kunci: A**
**Pembahasan:**
- **A benar** — 50 = 2 × 5², 70 = 2 × 5 × 7. Faktor sama: 2¹ × 5¹ = 10.
- **B salah** — 5 memang faktor persekutuan, tetapi belum maksimum.
- **C salah** — 25 = 5² tidak membagi 70 (70 hanya punya 5¹).
- **D salah** — 350 = KPK(50, 70). Tertukar.
- **Konsep kunci:** Pangkat terkecil ditentukan bilangan yang pangkatnya lebih rendah.
- **Langkah Penyelesaian:**
  1. 50 = 2 × 5².
  2. 70 = 2 × 5 × 7.
  3. Faktor sama: 2¹ × 5¹ = 10.

---

**30.** FPB dari 50 dan 75 adalah ....

- A. 5
- B. 10
- C. 25
- D. 150

**Kunci: C**
**Pembahasan:**
- **A salah** — 5 memang faktor persekutuan, tetapi belum maksimum.
- **B salah** — 10 = 2 × 5 tidak membagi 75 (75 tidak punya faktor 2).
- **C benar** — 50 = 2 × 5², 75 = 3 × 5². Faktor sama: 5² = 25.
- **D salah** — 150 = KPK(50, 75). Tertukar.
- **Konsep kunci:** Hanya faktor yang benar-benar sama di kedua bilangan yang boleh dipakai.
- **Langkah Penyelesaian:**
  1. 50 = 2 × 5².
  2. 75 = 3 × 5².
  3. Faktor sama: 5² = 25.

---

**31.** FPB dari 52 dan 65 adalah ....

- A. 2
- B. 5
- C. 1
- D. 13

**Kunci: D**
**Pembahasan:**
- **A salah** — 2 hanya faktor dari 52, tidak membagi 65 (65 ganjil).
- **B salah** — 5 hanya faktor dari 65, tidak membagi 52.
- **C salah** — 1 memang faktor persekutuan, tetapi bukan yang terbesar.
- **D benar** — 52 = 2² × 13, 65 = 5 × 13. Faktor sama hanya 13. FPB = 13.
- **Konsep kunci:** Faktor persekutuan harus muncul di kedua faktorisasi prima.
- **Langkah Penyelesaian:**
  1. 52 = 2² × 13.
  2. 65 = 5 × 13.
  3. Faktor sama: 13. FPB = 13.

---

**32.** FPB dari 54 dan 72 adalah ....

- A. 6
- B. 18
- C. 27
- D. 216

**Kunci: B**
**Pembahasan:**
- **A salah** — 6 = 2 × 3 memakai pangkat 3 yang terlalu kecil (seharusnya 3², bukan 3¹).
- **B benar** — 54 = 2 × 3³, 72 = 2³ × 3². Faktor sama: 2¹ × 3² = 18.
- **C salah** — 27 = 3³ tidak membagi 72 (72 hanya punya 3²).
- **D salah** — 216 = KPK(54, 72). Tertukar.
- **Konsep kunci:** Pangkat terkecil ditentukan bilangan dengan pangkat lebih rendah pada faktor tersebut.
- **Langkah Penyelesaian:**
  1. 54 = 2 × 3³.
  2. 72 = 2³ × 3².
  3. Faktor sama: 2¹ × 3² = 18.

---

**33.** FPB dari 55 dan 66 adalah ....

- A. 5
- B. 2
- C. 11
- D. 330

**Kunci: C**
**Pembahasan:**
- **A salah** — 5 hanya faktor dari 55, tidak membagi 66.
- **B salah** — 2 hanya faktor dari 66, tidak membagi 55 (55 ganjil).
- **C benar** — 55 = 5 × 11, 66 = 2 × 3 × 11. Faktor sama hanya 11. FPB = 11.
- **D salah** — 330 = KPK(55, 66). Tertukar.
- **Konsep kunci:** Cari faktor prima yang benar-benar sama di kedua bilangan.
- **Langkah Penyelesaian:**
  1. 55 = 5 × 11.
  2. 66 = 2 × 3 × 11.
  3. Faktor sama: 11. FPB = 11.

---

**34.** FPB dari 56 dan 64 adalah ....

- A. 8
- B. 4
- C. 16
- D. 448

**Kunci: A**
**Pembahasan:**
- **A benar** — 56 = 2³ × 7, 64 = 2⁶. Faktor sama: 2, pangkat terkecil 2³. FPB = 8.
- **B salah** — 4 = 2² memang membagi keduanya, tetapi belum maksimum.
- **C salah** — 16 = 2⁴ tidak membagi 56 (56 hanya punya 2³).
- **D salah** — 448 = KPK(56, 64). Tertukar.
- **Konsep kunci:** Pangkat terkecil ditentukan bilangan yang pangkatnya lebih rendah.
- **Langkah Penyelesaian:**
  1. 56 = 2³ × 7.
  2. 64 = 2⁶.
  3. Faktor sama: 2³ = 8.

---

**35.** FPB dari 56 dan 70 adalah ....

- A. 7
- B. 2
- C. 5
- D. 14

**Kunci: D**
**Pembahasan:**
- **A salah** — 7 memang faktor persekutuan, tetapi belum maksimum.
- **B salah** — 2 juga membagi keduanya, tetapi belum maksimum.
- **C salah** — 5 hanya faktor dari 70, tidak membagi 56.
- **D benar** — 56 = 2³ × 7, 70 = 2 × 5 × 7. Faktor sama: 2¹ × 7¹ = 14.
- **Konsep kunci:** Kalikan semua faktor prima sama dengan pangkat terkecilnya.
- **Langkah Penyelesaian:**
  1. 56 = 2³ × 7.
  2. 70 = 2 × 5 × 7.
  3. Faktor sama: 2¹ × 7¹ = 14.

---

**36.** FPB dari 57 dan 76 adalah ....

- A. 3
- B. 19
- C. 2
- D. 228

**Kunci: B**
**Pembahasan:**
- **A salah** — 3 hanya faktor dari 57, tidak membagi 76.
- **B benar** — 57 = 3 × 19, 76 = 2² × 19. Faktor sama hanya 19. FPB = 19.
- **C salah** — 2 hanya faktor dari 76, tidak membagi 57 (57 ganjil).
- **D salah** — 228 = KPK(57, 76). Tertukar.
- **Konsep kunci:** Faktor persekutuan harus muncul di kedua faktorisasi prima.
- **Langkah Penyelesaian:**
  1. 57 = 3 × 19.
  2. 76 = 2² × 19.
  3. Faktor sama: 19. FPB = 19.

---

**37.** FPB dari 58 dan 87 adalah ....

- A. 2
- B. 3
- C. 29
- D. 174

**Kunci: C**
**Pembahasan:**
- **A salah** — 2 hanya faktor dari 58, tidak membagi 87 (87 ganjil).
- **B salah** — 3 hanya faktor dari 87, tidak membagi 58.
- **C benar** — 58 = 2 × 29, 87 = 3 × 29. Faktor sama hanya 29. FPB = 29.
- **D salah** — 174 = KPK(58, 87). Tertukar.
- **Konsep kunci:** Faktor persekutuan hanya faktor prima yang muncul di kedua bilangan.
- **Langkah Penyelesaian:**
  1. 58 = 2 × 29.
  2. 87 = 3 × 29.
  3. Faktor sama: 29. FPB = 29.

---

**38.** FPB dari 60 dan 72 adalah ....

- A. 12
- B. 4
- C. 3
- D. 360

**Kunci: A**
**Pembahasan:**
- **A benar** — 60 = 2² × 3 × 5, 72 = 2³ × 3². Faktor sama: 2² × 3¹ = 12.
- **B salah** — 4 = 2² memang membagi keduanya, tetapi faktor 3 belum dimasukkan.
- **C salah** — 3 juga membagi keduanya, tetapi belum maksimum.
- **D salah** — 360 = KPK(60, 72). Tertukar.
- **Konsep kunci:** Kalikan semua faktor prima sama dengan pangkat terkecilnya masing-masing.
- **Langkah Penyelesaian:**
  1. 60 = 2² × 3 × 5.
  2. 72 = 2³ × 3².
  3. Faktor sama: 2² × 3¹ = 12.

---

**39.** FPB dari 60 dan 90 adalah ....

- A. 15
- B. 10
- C. 6
- D. 30

**Kunci: D**
**Pembahasan:**
- **A salah** — 15 = 3 × 5 memakai pangkat 2 yang belum dimasukkan.
- **B salah** — 10 = 2 × 5 memakai faktor 3 yang belum dimasukkan.
- **C salah** — 6 = 2 × 3 memakai faktor 5 yang belum dimasukkan.
- **D benar** — 60 = 2² × 3 × 5, 90 = 2 × 3² × 5. Faktor sama: 2¹ × 3¹ × 5¹ = 30.
- **Konsep kunci:** Jika faktor prima sama ada lebih dari satu, kalikan semuanya dengan pangkat terkecil masing-masing.
- **Langkah Penyelesaian:**
  1. 60 = 2² × 3 × 5.
  2. 90 = 2 × 3² × 5.
  3. Faktor sama: 2¹ × 3¹ × 5¹ = 30.

---

**40.** FPB dari 63 dan 84 adalah ....

- A. 7
- B. 21
- C. 9
- D. 252

**Kunci: B**
**Pembahasan:**
- **A salah** — 7 memang faktor persekutuan, tetapi belum maksimum.
- **B benar** — 63 = 3² × 7, 84 = 2² × 3 × 7. Faktor sama: 3¹ × 7¹ = 21.
- **C salah** — 9 = 3² tidak membagi 84 (84 hanya punya 3¹).
- **D salah** — 252 = KPK(63, 84). Tertukar.
- **Konsep kunci:** Pangkat terkecil ditentukan bilangan dengan pangkat lebih rendah pada faktor tersebut.
- **Langkah Penyelesaian:**
  1. 63 = 3² × 7.
  2. 84 = 2² × 3 × 7.
  3. Faktor sama: 3¹ × 7¹ = 21.

---

**41.** FPB dari 64 dan 80 adalah ....

- A. 4
- B. 8
- C. 16
- D. 320

**Kunci: C**
**Pembahasan:**
- **A salah** — 4 = 2² memang membagi keduanya, tetapi belum maksimum.
- **B salah** — 8 = 2³ juga membagi keduanya, tetapi belum maksimum.
- **C benar** — 64 = 2⁶, 80 = 2⁴ × 5. Faktor sama: 2, pangkat terkecil 2⁴. FPB = 16.
- **D salah** — 320 = KPK(64, 80). Tertukar.
- **Konsep kunci:** Pangkat terkecil ditentukan bilangan yang pangkatnya lebih rendah.
- **Langkah Penyelesaian:**
  1. 64 = 2⁶.
  2. 80 = 2⁴ × 5.
  3. Faktor sama: 2⁴ = 16.

---

**42.** FPB dari 65 dan 78 adalah ....

- A. 5
- B. 2
- C. 3
- D. 13

**Kunci: D**
**Pembahasan:**
- **A salah** — 5 hanya faktor dari 65, tidak membagi 78.
- **B salah** — 2 hanya faktor dari 78, tidak membagi 65 (65 ganjil).
- **C salah** — 3 hanya faktor dari 78, tidak membagi 65.
- **D benar** — 65 = 5 × 13, 78 = 2 × 3 × 13. Faktor sama hanya 13. FPB = 13.
- **Konsep kunci:** Faktor persekutuan harus muncul di kedua faktorisasi prima.
- **Langkah Penyelesaian:**
  1. 65 = 5 × 13.
  2. 78 = 2 × 3 × 13.
  3. Faktor sama: 13. FPB = 13.

---

**43.** FPB dari 66 dan 88 adalah ....

- A. 22
- B. 11
- C. 2
- D. 264

**Kunci: A**
**Pembahasan:**
- **A benar** — 66 = 2 × 3 × 11, 88 = 2³ × 11. Faktor sama: 2¹ × 11¹ = 22.
- **B salah** — 11 memang faktor persekutuan, tetapi belum maksimum.
- **C salah** — 2 juga membagi keduanya, tetapi belum maksimum.
- **D salah** — 264 = KPK(66, 88). Tertukar.
- **Konsep kunci:** Kalikan semua faktor prima sama dengan pangkat terkecilnya.
- **Langkah Penyelesaian:**
  1. 66 = 2 × 3 × 11.
  2. 88 = 2³ × 11.
  3. Faktor sama: 2¹ × 11¹ = 22.

---

**44.** FPB dari 68 dan 85 adalah ....

- A. 2
- B. 17
- C. 5
- D. 340

**Kunci: B**
**Pembahasan:**
- **A salah** — 2 hanya faktor dari 68, tidak membagi 85 (85 ganjil).
- **B benar** — 68 = 2² × 17, 85 = 5 × 17. Faktor sama hanya 17. FPB = 17.
- **C salah** — 5 hanya faktor dari 85, tidak membagi 68.
- **D salah** — 340 = KPK(68, 85). Tertukar.
- **Konsep kunci:** Faktor persekutuan hanya faktor prima yang muncul di kedua bilangan.
- **Langkah Penyelesaian:**
  1. 68 = 2² × 17.
  2. 85 = 5 × 17.
  3. Faktor sama: 17. FPB = 17.

---

**45.** FPB dari 70 dan 84 adalah ....

- A. 7
- B. 2
- C. 5
- D. 14

**Kunci: D**
**Pembahasan:**
- **A salah** — 7 memang faktor persekutuan, tetapi belum maksimum.
- **B salah** — 2 juga membagi keduanya, tetapi belum maksimum.
- **C salah** — 5 hanya faktor dari 70, tidak membagi 84.
- **D benar** — 70 = 2 × 5 × 7, 84 = 2² × 3 × 7. Faktor sama: 2¹ × 7¹ = 14.
- **Konsep kunci:** Kalikan semua faktor prima sama dengan pangkat terkecilnya.
- **Langkah Penyelesaian:**
  1. 70 = 2 × 5 × 7.
  2. 84 = 2² × 3 × 7.
  3. Faktor sama: 2¹ × 7¹ = 14.

---

**46.** FPB dari 72 dan 90 adalah ....

- A. 6
- B. 9
- C. 18
- D. 360

**Kunci: C**
**Pembahasan:**
- **A salah** — 6 = 2 × 3 memakai pangkat 3 yang terlalu kecil (seharusnya 3², bukan 3¹).
- **B salah** — 9 = 3² memang membagi keduanya, tetapi faktor 2 belum dimasukkan.
- **C benar** — 72 = 2³ × 3², 90 = 2 × 3² × 5. Faktor sama: 2¹ × 3² = 18.
- **D salah** — 360 = KPK(72, 90). Tertukar.
- **Konsep kunci:** Pangkat terkecil ditentukan bilangan dengan pangkat lebih rendah pada faktor tersebut.
- **Langkah Penyelesaian:**
  1. 72 = 2³ × 3².
  2. 90 = 2 × 3² × 5.
  3. Faktor sama: 2¹ × 3² = 18.

---

**47.** FPB dari 75 dan 100 adalah ....

- A. 5
- B. 25
- C. 10
- D. 300

**Kunci: B**
**Pembahasan:**
- **A salah** — 5 memang faktor persekutuan, tetapi belum maksimum.
- **B benar** — 75 = 3 × 5², 100 = 2² × 5². Faktor sama: 5² = 25.
- **C salah** — 10 = 2 × 5 tidak membagi 75 (75 tidak punya faktor 2).
- **D salah** — 300 = KPK(75, 100). Tertukar.
- **Konsep kunci:** Hanya faktor yang benar-benar sama di kedua bilangan yang boleh dipakai.
- **Langkah Penyelesaian:**
  1. 75 = 3 × 5².
  2. 100 = 2² × 5².
  3. Faktor sama: 5² = 25.

---

**48.** FPB dari 76 dan 95 adalah ....

- A. 19
- B. 2
- C. 5
- D. 380

**Kunci: A**
**Pembahasan:**
- **A benar** — 76 = 2² × 19, 95 = 5 × 19. Faktor sama hanya 19. FPB = 19.
- **B salah** — 2 hanya faktor dari 76, tidak membagi 95 (95 ganjil).
- **C salah** — 5 hanya faktor dari 95, tidak membagi 76.
- **D salah** — 380 = KPK(76, 95). Tertukar.
- **Konsep kunci:** Faktor persekutuan harus muncul di kedua faktorisasi prima.
- **Langkah Penyelesaian:**
  1. 76 = 2² × 19.
  2. 95 = 5 × 19.
  3. Faktor sama: 19. FPB = 19.

---

**49.** FPB dari 80 dan 100 adalah ....

- A. 4
- B. 5
- C. 10
- D. 20

**Kunci: D**
**Pembahasan:**
- **A salah** — 4 = 2² memang membagi keduanya, tetapi faktor 5 belum dimasukkan.
- **B salah** — 5 juga membagi keduanya, tetapi faktor 2² belum dimasukkan.
- **C salah** — 10 = 2 × 5 memakai pangkat 2 yang terlalu kecil (seharusnya 2², bukan 2¹).
- **D benar** — 80 = 2⁴ × 5, 100 = 2² × 5². Faktor sama: 2² × 5¹ = 20.
- **Konsep kunci:** Jangan lupa mengalikan semua faktor prima sama dengan pangkat terkecilnya masing-masing.
- **Langkah Penyelesaian:**
  1. 80 = 2⁴ × 5.
  2. 100 = 2² × 5².
  3. Faktor sama: 2² × 5¹ = 20.

---

**50.** FPB dari 9 dan 10 adalah ....

- A. 9
- B. 1
- C. 10
- D. 90

**Kunci: B**
**Pembahasan:**
- **A salah** — 9 tidak membagi 10 (10 ÷ 9 bersisa).
- **B benar** — 9 dan 10 adalah dua bilangan berurutan (selisih 1); dua bilangan berurutan selalu punya FPB = 1.
- **C salah** — 10 tidak membagi 9 (9 < 10).
- **D salah** — 90 = KPK(9, 10). Tertukar konsep.
- **Konsep kunci:** Dua bilangan berurutan (selisih 1) selalu memiliki FPB = 1.
- **Langkah Penyelesaian:**
  1. 9 dan 10 berurutan (selisih 1).
  2. Tidak ada faktor prima yang sama. FPB = 1.

---

**51.** FPB dari 11 dan 12 adalah ....

- A. 11
- B. 12
- C. 1
- D. 132

**Kunci: C**
**Pembahasan:**
- **A salah** — 11 tidak membagi 12.
- **B salah** — 12 tidak membagi 11 (11 < 12).
- **C benar** — 11 dan 12 berurutan (selisih 1); FPB dua bilangan berurutan selalu 1.
- **D salah** — 132 = KPK(11, 12). Tertukar.
- **Konsep kunci:** Dua bilangan berurutan selalu memiliki FPB = 1.
- **Langkah Penyelesaian:**
  1. 11 dan 12 berurutan.
  2. FPB = 1.

---

**52.** FPB dari 15 dan 16 adalah ....

- A. 1
- B. 15
- C. 16
- D. 240

**Kunci: A**
**Pembahasan:**
- **A benar** — 15 = 3 × 5, 16 = 2⁴. Tidak ada faktor prima yang sama (bilangan berurutan). FPB = 1.
- **B salah** — 15 tidak membagi 16.
- **C salah** — 16 tidak membagi 15 (15 < 16).
- **D salah** — 240 = KPK(15, 16). Tertukar.
- **Konsep kunci:** Dua bilangan berurutan selalu memiliki FPB = 1.
- **Langkah Penyelesaian:**
  1. 15 = 3 × 5, 16 = 2⁴.
  2. Tidak ada faktor prima sama. FPB = 1.

---

**53.** FPB dari 19 dan 20 adalah ....

- A. 19
- B. 1
- C. 20
- D. 380

**Kunci: B**
**Pembahasan:**
- **A salah** — 19 tidak membagi 20.
- **B benar** — 19 dan 20 berurutan (selisih 1); FPB = 1.
- **C salah** — 20 tidak membagi 19 (19 < 20).
- **D salah** — 380 = KPK(19, 20). Tertukar.
- **Konsep kunci:** Dua bilangan berurutan selalu memiliki FPB = 1.
- **Langkah Penyelesaian:**
  1. 19 dan 20 berurutan.
  2. FPB = 1.

---

**54.** FPB dari 5 dan 13 adalah ....

- A. 5
- B. 13
- C. 65
- D. 1

**Kunci: D**
**Pembahasan:**
- **A salah** — 5 tidak membagi 13.
- **B salah** — 13 tidak membagi 5 (5 < 13).
- **C salah** — 65 = 5 × 13 adalah hasil kali (juga KPK-nya), bukan FPB.
- **D benar** — 5 dan 13 sama-sama bilangan prima dan berbeda; dua bilangan prima berbeda selalu punya FPB = 1.
- **Konsep kunci:** Dua bilangan prima yang berbeda selalu memiliki FPB = 1.
- **Langkah Penyelesaian:**
  1. 5 dan 13 sama-sama prima dan berbeda.
  2. FPB = 1.

---

**55.** FPB dari 11 dan 17 adalah ....

- A. 1
- B. 11
- C. 17
- D. 187

**Kunci: A**
**Pembahasan:**
- **A benar** — 11 dan 17 sama-sama bilangan prima dan berbeda; FPB = 1.
- **B salah** — 11 tidak membagi 17.
- **C salah** — 17 tidak membagi 11 (11 < 17).
- **D salah** — 187 = KPK(11, 17) = 11 × 17. Tertukar.
- **Konsep kunci:** Dua bilangan prima yang berbeda selalu memiliki FPB = 1.
- **Langkah Penyelesaian:**
  1. 11 dan 17 sama-sama prima dan berbeda.
  2. FPB = 1.

---

**56.** FPB dari 13 dan 19 adalah ....

- A. 13
- B. 19
- C. 1
- D. 247

**Kunci: C**
**Pembahasan:**
- **A salah** — 13 tidak membagi 19.
- **B salah** — 19 tidak membagi 13 (13 < 19).
- **C benar** — 13 dan 19 sama-sama bilangan prima berbeda; FPB = 1.
- **D salah** — 247 = KPK(13, 19). Tertukar.
- **Konsep kunci:** Dua bilangan prima berbeda selalu memiliki FPB = 1.
- **Langkah Penyelesaian:**
  1. 13 dan 19 sama-sama prima dan berbeda.
  2. FPB = 1.

---

**57.** FPB dari 19 dan 23 adalah ....

- A. 19
- B. 1
- C. 23
- D. 437

**Kunci: B**
**Pembahasan:**
- **A salah** — 19 tidak membagi 23.
- **B benar** — 19 dan 23 sama-sama bilangan prima berbeda; FPB = 1.
- **C salah** — 23 tidak membagi 19 (19 < 23).
- **D salah** — 437 = KPK(19, 23). Tertukar.
- **Konsep kunci:** Dua bilangan prima berbeda selalu memiliki FPB = 1.
- **Langkah Penyelesaian:**
  1. 19 dan 23 sama-sama prima dan berbeda.
  2. FPB = 1.

---

**58.** FPB dari 23 dan 31 adalah ....

- A. 23
- B. 31
- C. 713
- D. 1

**Kunci: D**
**Pembahasan:**
- **A salah** — 23 tidak membagi 31.
- **B salah** — 31 tidak membagi 23 (23 < 31).
- **C salah** — 713 = KPK(23, 31) = 23 × 31. Tertukar konsep.
- **D benar** — 23 dan 31 sama-sama bilangan prima berbeda; FPB = 1.
- **Konsep kunci:** Dua bilangan prima berbeda selalu memiliki FPB = 1.
- **Langkah Penyelesaian:**
  1. 23 dan 31 sama-sama prima dan berbeda.
  2. FPB = 1.

---

**59.** FPB dari 18 dan 54 adalah ....

- A. 18
- B. 9
- C. 54
- D. 6

**Kunci: A**
**Pembahasan:**
- **A benar** — 54 habis dibagi 18 (54 ÷ 18 = 3), sehingga FPB-nya adalah bilangan yang lebih kecil, yaitu 18.
- **B salah** — 9 memang faktor persekutuan, tetapi belum maksimum (18 juga membagi keduanya).
- **C salah** — 54 tidak membagi 18 (18 < 54). Mengira bilangan terbesar otomatis FPB.
- **D salah** — 6 juga membagi keduanya, tetapi belum maksimum.
- **Konsep kunci:** Jika satu bilangan habis dibagi bilangan lainnya, FPB-nya adalah bilangan yang lebih kecil.
- **Langkah Penyelesaian:**
  1. Cek apakah 54 habis dibagi 18: 54 ÷ 18 = 3 (tanpa sisa).
  2. FPB(18, 54) = bilangan lebih kecil = 18.

---

**60.** FPB dari 7 dan 49 adalah ....

- A. 49
- B. 1
- C. 7
- D. 14

**Kunci: C**
**Pembahasan:**
- **A salah** — 49 tidak membagi 7 (7 < 49). Mengira bilangan terbesar otomatis FPB.
- **B salah** — 1 memang faktor persekutuan, tetapi bukan yang terbesar.
- **C benar** — 49 habis dibagi 7 (49 ÷ 7 = 7), sehingga FPB-nya adalah bilangan yang lebih kecil, yaitu 7.
- **D salah** — 14 tidak membagi 49 (49 ÷ 14 bersisa). Salah hitung.
- **Konsep kunci:** Jika satu bilangan habis dibagi bilangan lainnya, FPB-nya adalah bilangan yang lebih kecil.
- **Langkah Penyelesaian:**
  1. Cek apakah 49 habis dibagi 7: 49 ÷ 7 = 7 (tanpa sisa).
  2. FPB(7, 49) = bilangan lebih kecil = 7.

---

**61.** FPB dari 23 dan 23 adalah ....

- A. 23
- B. 1
- C. 46
- D. 529

**Kunci: A**
**Pembahasan:**
- **A benar** — FPB suatu bilangan dengan dirinya sendiri sama dengan bilangan itu sendiri: FPB(23, 23) = 23.
- **B salah** — 1 memang faktor persekutuan, tetapi bukan yang terbesar; 23 sendiri juga membagi 23.
- **C salah** — 46 = 23 + 23, hasil penjumlahan bukan FPB.
- **D salah** — 529 = 23², hasil perkalian/pemangkatan bukan FPB.
- **Konsep kunci:** FPB(a, a) = a untuk bilangan apa pun.
- **Langkah Penyelesaian:**
  1. FPB(a, a) = a.
  2. FPB(23, 23) = 23.

---

**62.** FPB dari 31 dan 31 adalah ....

- A. 1
- B. 62
- C. 961
- D. 31

**Kunci: D**
**Pembahasan:**
- **A salah** — 1 memang faktor persekutuan, tetapi bukan yang terbesar.
- **B salah** — 62 = 31 + 31, hasil penjumlahan bukan FPB.
- **C salah** — 961 = 31², hasil pemangkatan bukan FPB.
- **D benar** — FPB(a, a) = a. FPB(31, 31) = 31.
- **Konsep kunci:** FPB suatu bilangan dengan dirinya sendiri sama dengan bilangan itu sendiri.
- **Langkah Penyelesaian:**
  1. FPB(a, a) = a.
  2. FPB(31, 31) = 31.

---

**63.** Manakah pernyataan berikut yang BENAR tentang FPB dua bilangan?

- A. FPB selalu lebih besar dari kedua bilangan tersebut.
- B. FPB selalu sama dengan hasil kali kedua bilangan.
- C. FPB selalu kurang dari atau sama dengan bilangan yang lebih kecil.
- D. FPB selalu berupa bilangan ganjil.

**Kunci: C**
**Pembahasan:**
- **A salah** — Sebaliknya, FPB tidak pernah lebih besar dari bilangan-bilangan yang dicari FPB-nya.
- **B salah** — Hasil kali kedua bilangan adalah acuan untuk rumus FPB × KPK = a × b, bukan nilai FPB itu sendiri.
- **C benar** — FPB adalah faktor, sehingga tidak mungkin melebihi bilangan terkecil dalam himpunan yang dicari FPB-nya.
- **D salah** — FPB bisa genap (misalnya FPB(12, 18) = 6) maupun ganjil (misalnya FPB(9, 15) = 3).
- **Konsep kunci:** FPB selalu ≤ bilangan terkecil dalam himpunan bilangan yang dicari FPB-nya.
- **Langkah Penyelesaian:**
  1. FPB adalah faktor persekutuan, jadi harus membagi habis semua bilangan.
  2. Faktor terbesar suatu bilangan tidak mungkin melebihi bilangan itu sendiri.

---

**64.** Dua bilangan disebut **saling prima** jika FPB keduanya adalah ....

- A. 0
- B. 1
- C. bilangan itu sendiri
- D. bilangan prima terbesar di antara keduanya

**Kunci: B**
**Pembahasan:**
- **A salah** — 0 bukan definisi FPB; FPB tidak pernah bernilai 0.
- **B benar** — Dua bilangan disebut saling prima (relatif prima) jika FPB keduanya sama dengan 1, meski keduanya sendiri belum tentu bilangan prima.
- **C salah** — "Bilangan itu sendiri" hanya berlaku untuk FPB(a, a) = a, bukan definisi saling prima.
- **D salah** — Saling prima tidak mengharuskan salah satu bilangan menjadi bilangan prima.
- **Konsep kunci:** Saling prima berarti FPB = 1, tidak harus keduanya bilangan prima (misalnya FPB(14, 15) = 1).
- **Langkah Penyelesaian:**
  1. Definisi saling prima: FPB = 1.

---

**65.** Andi mencari FPB(27, 45) dengan mengambil pangkat TERBESAR dari faktor primanya dan mendapat hasil 135. Kesalahan Andi adalah ....

- A. Salah memfaktorkan 27.
- B. Salah memfaktorkan 45.
- C. Lupa memasukkan faktor 5.
- D. Seharusnya mengambil pangkat TERKECIL, bukan terbesar (135 itu justru KPK; FPB sebenarnya adalah 9).

**Kunci: D**
**Pembahasan:**
- **A salah** — Faktorisasi 27 = 3³ sudah benar.
- **B salah** — Faktorisasi 45 = 3² × 5 sudah benar.
- **C salah** — Faktor 5 memang tidak dimasukkan, tetapi itu benar karena 5 tidak muncul di faktorisasi 27 (bukan faktor sama).
- **D benar** — Untuk FPB harus diambil pangkat TERKECIL (3² dari 45), bukan terbesar (3³ dari 27). 135 = 3³ × 5 sebenarnya adalah KPK(27, 45); FPB yang benar = 3² = 9.
- **Konsep kunci:** FPB mengambil pangkat TERKECIL pada faktor prima yang sama; pangkat terbesar adalah aturan untuk KPK.
- **Langkah Penyelesaian:**
  1. 27 = 3³, 45 = 3² × 5.
  2. Faktor sama: 3, pangkat terkecil 3² = 9.
  3. FPB(27, 45) yang benar = 9.

---

**66.** Banyaknya faktor persekutuan dari 16 dan 40 ada sebanyak ....

- A. 4
- B. 8
- C. 2
- D. 5

**Kunci: A**
**Pembahasan:**
- **A benar** — Faktor 16 = {1, 2, 4, 8, 16}; faktor 40 = {1, 2, 4, 5, 8, 10, 20, 40}. Faktor persekutuan = {1, 2, 4, 8}, sebanyak 4 buah.
- **B salah** — 8 adalah nilai FPB(16, 40), bukan banyaknya faktor persekutuan. Tertukar antara "nilai FPB" dan "jumlah faktor persekutuan".
- **C salah** — Hanya menghitung sebagian faktor persekutuan, kurang teliti mendaftar.
- **D salah** — Salah menghitung, ada faktor yang terhitung dua kali atau terlewat.
- **Konsep kunci:** Jumlah faktor persekutuan berbeda dari nilai FPB — FPB adalah yang TERBESAR di antara faktor persekutuan, sedangkan jumlahnya dihitung dengan mendaftar semua faktor yang sama.
- **Langkah Penyelesaian:**
  1. Faktor 16 = {1, 2, 4, 8, 16}.
  2. Faktor 40 = {1, 2, 4, 5, 8, 10, 20, 40}.
  3. Persekutuan = {1, 2, 4, 8} → 4 buah.

---

**67.** Banyaknya faktor persekutuan dari 18 dan 45 ada sebanyak ....

- A. 2
- B. 3
- C. 9
- D. 4

**Kunci: B**
**Pembahasan:**
- **A salah** — Kurang teliti mendaftar, ada faktor persekutuan yang terlewat.
- **B benar** — Faktor 18 = {1, 2, 3, 6, 9, 18}; faktor 45 = {1, 3, 5, 9, 15, 45}. Faktor persekutuan = {1, 3, 9}, sebanyak 3 buah.
- **C salah** — 9 adalah nilai FPB(18, 45), bukan banyaknya faktor persekutuan.
- **D salah** — Salah menghitung, ada faktor yang bukan persekutuan ikut terhitung.
- **Konsep kunci:** Jumlah faktor persekutuan dihitung dengan mendaftar SEMUA faktor sama, bukan hanya nilai FPB-nya.
- **Langkah Penyelesaian:**
  1. Faktor 18 = {1, 2, 3, 6, 9, 18}.
  2. Faktor 45 = {1, 3, 5, 9, 15, 45}.
  3. Persekutuan = {1, 3, 9} → 3 buah.

---

**68.** Manakah pasangan bilangan berikut yang **saling prima** (FPB = 1)?

- A. 12 dan 18
- B. 15 dan 20
- C. 14 dan 15
- D. 16 dan 20

**Kunci: C**
**Pembahasan:**
- **A salah** — FPB(12, 18) = 6, bukan 1.
- **B salah** — FPB(15, 20) = 5, bukan 1.
- **C benar** — 14 = 2 × 7, 15 = 3 × 5. Tidak ada faktor prima yang sama, sehingga FPB(14, 15) = 1.
- **D salah** — FPB(16, 20) = 4, bukan 1.
- **Konsep kunci:** Dua bilangan saling prima jika faktor primanya sama sekali tidak ada yang beririsan.
- **Langkah Penyelesaian:**
  1. Cek faktorisasi tiap pasangan.
  2. Hanya 14 = 2 × 7 dan 15 = 3 × 5 yang tidak memiliki faktor prima sama.

---

**69.** Manakah pasangan bilangan berikut yang FPB-nya PALING BESAR?

- A. 10 dan 16
- B. 9 dan 21
- C. 14 dan 35
- D. 20 dan 50

**Kunci: D**
**Pembahasan:**
- **A salah** — FPB(10, 16) = 2.
- **B salah** — FPB(9, 21) = 3.
- **C salah** — FPB(14, 35) = 7.
- **D benar** — FPB(20, 50) = 10, yang terbesar di antara 2, 3, 7, dan 10.
- **Konsep kunci:** Membandingkan beberapa pasangan bilangan memerlukan perhitungan FPB tiap pasangan sebelum dibandingkan.
- **Langkah Penyelesaian:**
  1. Hitung FPB tiap pasangan: 2, 3, 7, 10.
  2. Yang terbesar: 10, yaitu pasangan 20 dan 50.

---

**70.** Faktorisasi prima dari 40 adalah ....

- A. 2² × 5²
- B. 2³ × 5
- C. 2 × 5³
- D. 4 × 10

**Kunci: B**
**Pembahasan:**
- **A salah** — 2² × 5² = 4 × 25 = 100, bukan 40.
- **B benar** — 40 = 2 × 2 × 2 × 5 = 2³ × 5. Semua faktor sudah bilangan prima.
- **C salah** — 2 × 5³ = 2 × 125 = 250, bukan 40.
- **D salah** — 4 dan 10 bukan bilangan prima; faktorisasi belum tuntas.
- **Konsep kunci:** Faktorisasi prima harus dilanjutkan sampai semua faktor berupa bilangan prima.
- **Langkah Penyelesaian:**
  1. 40 = 2 × 20 = 2 × 2 × 10 = 2 × 2 × 2 × 5.
  2. 40 = 2³ × 5.

---

**71.** Faktorisasi prima dari 60 adalah ....

- A. 2² × 3 × 5
- B. 2 × 3² × 5
- C. 2³ × 3 × 5
- D. 6 × 10

**Kunci: A**
**Pembahasan:**
- **A benar** — 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5. Semua faktor sudah bilangan prima.
- **B salah** — 2 × 3² × 5 = 2 × 9 × 5 = 90, bukan 60.
- **C salah** — 2³ × 3 × 5 = 8 × 15 = 120, bukan 60.
- **D salah** — 6 dan 10 bukan bilangan prima; faktorisasi belum tuntas.
- **Konsep kunci:** Faktorisasi prima harus dilanjutkan sampai semua faktor berupa bilangan prima.
- **Langkah Penyelesaian:**
  1. 60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5.
  2. 60 = 2² × 3 × 5.

---

**72.** FPB(40, 64) dihitung dari 40 = 2³ × 5 dan 64 = 2⁶. Maka FPB = ....

- A. 2³ × 5 = 40
- B. 2⁶ = 64
- C. 2³ = 8
- D. 2⁶ × 5 = 320

**Kunci: C**
**Pembahasan:**
- **A salah** — Ini adalah 40 itu sendiri, bukan hasil pengambilan faktor sama pangkat terkecil.
- **B salah** — Ini adalah 64 itu sendiri; 2⁶ tidak membagi 40 karena 40 hanya punya 2³.
- **C benar** — Faktor sama hanya 2 (5 tidak muncul di 64). Pangkat terkecil: 2³. FPB = 8.
- **D salah** — 320 = KPK(40, 64), diperoleh dari pangkat TERBESAR — itu aturan KPK, bukan FPB.
- **Konsep kunci:** FPB hanya mengambil faktor prima yang benar-benar sama, dengan pangkat TERKECIL.
- **Langkah Penyelesaian:**
  1. Faktor sama dari 40 = 2³ × 5 dan 64 = 2⁶ hanya 2.
  2. Pangkat terkecil: 2³.
  3. FPB = 8.

---

**73.** FPB(54, 90) dihitung dari 54 = 2 × 3³ dan 90 = 2 × 3² × 5. Maka FPB = ....

- A. 2 × 3³ = 54
- B. 2 × 3² = 18
- C. 2 × 3² × 5 = 90
- D. 2 × 3³ × 5 = 270

**Kunci: B**
**Pembahasan:**
- **A salah** — Ini 54 itu sendiri; 3³ tidak membagi 90 karena 90 hanya punya 3².
- **B benar** — Faktor sama: 2 dan 3 (5 tidak muncul di 54). Pangkat terkecil: 2¹ dan 3². FPB = 2 × 9 = 18.
- **C salah** — Ini 90 itu sendiri, memasukkan faktor 5 yang tidak sama.
- **D salah** — 270 = KPK(54, 90), diperoleh dari pangkat terbesar — aturan KPK, bukan FPB.
- **Konsep kunci:** FPB hanya mengambil faktor prima yang benar-benar sama di kedua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. Faktor sama dari 54 = 2 × 3³ dan 90 = 2 × 3² × 5 adalah 2 dan 3.
  2. Pangkat terkecil: 2¹ dan 3².
  3. FPB = 2 × 9 = 18.

---

**74.** Bu Rina punya 46 permen jeruk dan 69 permen mint. Akan dibagikan ke anak-anak sama jenis & sama jumlah. Jumlah anak terbanyak yang dapat menerima adalah ....

- A. 2
- B. 3
- C. 6
- D. 23

**Kunci: D**
**Pembahasan:**
- **A salah** — 2 hanya faktor dari 46, tidak membagi 69 (69 ganjil).
- **B salah** — 3 hanya faktor dari 69, tidak membagi 46.
- **C salah** — 6 = 2 × 3 memakai kedua faktor tunggal digabung, padahal tidak ada satu pun yang sama-sama membagi kedua bilangan.
- **D benar** — Kata kunci "dibagikan sama jenis & sama jumlah, terbanyak" berarti FPB. 46 = 2 × 23, 69 = 3 × 23. FPB = 23 → **23 anak**.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak" adalah soal FPB; hasil FPB = jumlah penerima maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "dibagikan sama jenis & sama jumlah, terbanyak" → FPB.
  2. FPB(46, 69) = 23.
  3. Jumlah anak terbanyak = 23.

---

**75.** Seutas tali sepanjang 51 m dan tali lain 85 m akan dipotong sama panjang tanpa sisa. Panjang maksimum tiap potongan adalah ....

- A. 3 m
- B. 5 m
- C. 17 m
- D. 34 m

**Kunci: C**
**Pembahasan:**
- **A salah** — 3 hanya faktor dari 51, tidak membagi 85.
- **B salah** — 5 hanya faktor dari 85, tidak membagi 51.
- **C benar** — Kata kunci "dipotong sama panjang, maksimum" → FPB. 51 = 3 × 17, 85 = 5 × 17. FPB = 17 m.
- **D salah** — 34 = 2 × 17 tidak membagi 51 (51 tidak punya faktor 2).
- **Konsep kunci:** Soal cerita "dipotong sama panjang, maksimum" adalah soal FPB.
- **Langkah Penyelesaian:**
  1. Kata kunci "dipotong sama panjang, maksimum" → FPB.
  2. FPB(51, 85) = 17 m.

---

**76.** Sebuah taman berukuran 36 m × 84 m akan dipasangi paving persegi berukuran sama tanpa potongan. Ukuran sisi paving TERBESAR adalah ....

- A. 12 m
- B. 6 m
- C. 4 m
- D. 24 m

**Kunci: A**
**Pembahasan:**
- **A benar** — Sisi paving harus membagi habis kedua ukuran. 36 = 2² × 3², 84 = 2² × 3 × 7. FPB = 2² × 3 = 12 m.
- **B salah** — 6 = 2 × 3 memakai pangkat 2 yang terlalu kecil (seharusnya 2²).
- **C salah** — 4 = 2² memang membagi keduanya, tetapi faktor 3 belum dimasukkan sehingga belum maksimum.
- **D salah** — 24 = 2³ × 3 tidak membagi 36 (36 hanya punya 2²).
- **Konsep kunci:** Ukuran ubin/paving persegi terbesar yang pas menutupi lahan tanpa potongan dicari dengan FPB kedua sisinya.
- **Langkah Penyelesaian:**
  1. Kata kunci "dipasangi paving persegi, terbesar" → FPB.
  2. FPB(36, 84) = 12 m.

---

**77.** Seorang guru olahraga memiliki 44 siswa putra dan 60 siswa putri. Mereka akan dibagi menjadi kelompok dengan jumlah putra dan putri sama tiap kelompok. Banyak kelompok terbanyak adalah ....

- A. 2
- B. 4
- C. 8
- D. 11

**Kunci: B**
**Pembahasan:**
- **A salah** — 2 memang faktor persekutuan, tetapi belum maksimum.
- **B benar** — Kata kunci "dibagi sama banyak, terbanyak" → FPB. 44 = 2² × 11, 60 = 2² × 3 × 5. FPB = 4 kelompok.
- **C salah** — 8 = 2³ tidak membagi 44 (44 hanya punya 2²).
- **D salah** — 11 hanya faktor dari 44, tidak membagi 60.
- **Konsep kunci:** Soal cerita "dibagi menjadi kelompok, jumlah sama, terbanyak" adalah soal FPB.
- **Langkah Penyelesaian:**
  1. Kata kunci "dibagi kelompok sama banyak, terbanyak" → FPB.
  2. FPB(44, 60) = 4 kelompok.

---

**78.** Pak Tono punya 34 bibit cabai dan 51 bibit tomat. Akan ditanam di petak-petak dengan jumlah bibit sama jenis & sama banyak tiap petak. Banyak petak terbanyak adalah ....

- A. 2
- B. 3
- C. 17
- D. 34

**Kunci: C**
**Pembahasan:**
- **A salah** — 2 hanya faktor dari 34, tidak membagi 51 (51 ganjil).
- **B salah** — 3 hanya faktor dari 51, tidak membagi 34.
- **C benar** — Kata kunci "ditanam di petak sama jenis & sama banyak, terbanyak" → FPB. 34 = 2 × 17, 51 = 3 × 17. FPB = 17 petak.
- **D salah** — 34 tidak membagi 51 (51 ÷ 34 bersisa). Mengira salah satu bilangan asal otomatis jawaban.
- **Konsep kunci:** Soal cerita "dibagi rata ke petak, sama jenis & sama banyak" adalah soal FPB.
- **Langkah Penyelesaian:**
  1. Kata kunci "ditanam di petak sama jenis & sama banyak, terbanyak" → FPB.
  2. FPB(34, 51) = 17 petak.

---

**79.** Koperasi sekolah punya 42 kue kering dan 63 permen untuk dibuat parsel Lebaran sama jenis & sama jumlah. Isi tiap parsel jika dibuat sebanyak-banyaknya adalah ....

- A. 7 parsel; isi 6 kue + 9 permen
- B. 3 parsel; isi 14 kue + 21 permen
- C. 1 parsel; isi 42 kue + 63 permen
- D. 21 parsel; isi 2 kue + 3 permen

**Kunci: D**
**Pembahasan:**
- **A salah** — 7 memang faktor persekutuan dari 42 dan 63, tetapi bukan yang terbesar sehingga jumlah parsel belum maksimum.
- **B salah** — 3 juga faktor persekutuan, tetapi masih jauh dari maksimum.
- **C salah** — Ini tidak salah secara matematis, tetapi tidak memaksimalkan jumlah parsel seperti diminta soal ("sebanyak-banyaknya").
- **D benar** — FPB(42, 63) = 21. Isi tiap parsel: 42 ÷ 21 = 2 kue, 63 ÷ 21 = 3 permen. Ini jumlah parsel maksimum.
- **Konsep kunci:** "Sebanyak-banyaknya parsel sama jenis & jumlah" berarti banyak parsel = FPB, dan isi tiap parsel = bilangan asal dibagi FPB.
- **Langkah Penyelesaian:**
  1. FPB(42, 63) = 21 → 21 parsel (jumlah maksimum).
  2. Isi tiap parsel: 42 ÷ 21 = 2 kue; 63 ÷ 21 = 3 permen.

---

**80.** Bu Wati membuat 33 kue coklat dan 55 kue keju untuk dibagi rata ke dalam kotak sama jenis & sama jumlah. Banyak kotak terbanyak adalah ....

- A. 11
- B. 3
- C. 5
- D. 22

**Kunci: A**
**Pembahasan:**
- **A benar** — Kata kunci "dibagi rata, sama jenis & sama jumlah, terbanyak" → FPB. 33 = 3 × 11, 55 = 5 × 11. FPB = 11 kotak.
- **B salah** — 3 hanya faktor dari 33, tidak membagi 55.
- **C salah** — 5 hanya faktor dari 55, tidak membagi 33.
- **D salah** — 22 = 2 × 11 tidak membagi 33 (33 tidak punya faktor 2).
- **Konsep kunci:** Soal cerita "dibagi rata sama jenis & jumlah, terbanyak" adalah soal FPB.
- **Langkah Penyelesaian:**
  1. Kata kunci "dibagi rata, terbanyak" → FPB.
  2. FPB(33, 55) = 11 kotak.

---

**81.** Bibi Yanti punya kain batik 77 cm dan kain polos 99 cm, akan dipotong sama panjang tanpa sisa untuk taplak kecil. Panjang maksimum tiap potongan adalah ....

- A. 7 cm
- B. 3 cm
- C. 9 cm
- D. 11 cm

**Kunci: D**
**Pembahasan:**
- **A salah** — 7 hanya faktor dari 77, tidak membagi 99.
- **B salah** — 3 hanya faktor dari 99 (99 = 3² × 11), tidak membagi 77.
- **C salah** — 9 = 3² memang membagi 99, tetapi tidak membagi 77 (77 tidak punya faktor 3).
- **D benar** — 77 = 7 × 11, 99 = 3² × 11. Faktor sama hanya 11. FPB = 11 cm.
- **Konsep kunci:** Soal cerita "dipotong sama panjang, maksimum" adalah soal FPB.
- **Langkah Penyelesaian:**
  1. Kata kunci "dipotong sama panjang, maksimum" → FPB.
  2. FPB(77, 99) = 11 cm.

---

**82.** Sebuah bengkel memiliki 78 meter kabel merah dan 104 meter kabel hitam. Akan dipotong sama panjang tanpa sisa untuk dijual per gulung. Panjang maksimum tiap gulung adalah ....

- A. 13 m
- B. 26 m
- C. 2 m
- D. 52 m

**Kunci: B**
**Pembahasan:**
- **A salah** — 13 memang faktor persekutuan, tetapi belum maksimum.
- **B benar** — 78 = 2 × 3 × 13, 104 = 2³ × 13. Faktor sama: 2¹ × 13¹ = 26 m.
- **C salah** — 2 juga membagi keduanya, tetapi belum maksimum.
- **D salah** — 52 = 2² × 13 tidak membagi 78 (78 hanya punya 2¹).
- **Konsep kunci:** Soal cerita "dipotong sama panjang, maksimum" adalah soal FPB.
- **Langkah Penyelesaian:**
  1. Kata kunci "dipotong sama panjang, maksimum" → FPB.
  2. FPB(78, 104) = 26 m.

---

**83.** Seorang tukang kayu memiliki papan sepanjang 51 cm dan 68 cm, akan dipotong sama panjang tanpa sisa. Panjang potongan maksimum adalah ....

- A. 17 cm
- B. 4 cm
- C. 3 cm
- D. 34 cm

**Kunci: A**
**Pembahasan:**
- **A benar** — 51 = 3 × 17, 68 = 2² × 17. Faktor sama hanya 17. FPB = 17 cm.
- **B salah** — 4 = 2² hanya faktor dari 68, tidak membagi 51.
- **C salah** — 3 hanya faktor dari 51, tidak membagi 68.
- **D salah** — 34 = 2 × 17 tidak membagi 51 (51 tidak punya faktor 2).
- **Konsep kunci:** Soal cerita "dipotong sama panjang, maksimum" adalah soal FPB.
- **Langkah Penyelesaian:**
  1. Kata kunci "dipotong sama panjang, maksimum" → FPB.
  2. FPB(51, 68) = 17 cm.

---

**84.** Panitia karnaval punya 48 balon merah dan 80 balon kuning untuk dibagi rata ke setiap gerbang hiasan, sama jenis & sama jumlah. Jumlah gerbang terbanyak adalah ....

- A. 8
- B. 4
- C. 16
- D. 32

**Kunci: C**
**Pembahasan:**
- **A salah** — 8 = 2³ memang membagi keduanya, tetapi belum maksimum.
- **B salah** — 4 juga membagi keduanya, tetapi belum maksimum.
- **C benar** — 48 = 2⁴ × 3, 80 = 2⁴ × 5. Faktor sama: 2⁴ = 16 gerbang.
- **D salah** — 32 = 2⁵ tidak membagi 48 (48 hanya punya 2⁴).
- **Konsep kunci:** Soal cerita "dibagi rata sama jenis & jumlah, terbanyak" adalah soal FPB.
- **Langkah Penyelesaian:**
  1. Kata kunci "dibagi rata, terbanyak" → FPB.
  2. FPB(48, 80) = 16 gerbang.

---

**85.** Di laboratorium terdapat 39 mL larutan A dan 65 mL larutan B, akan dibagi ke tabung reaksi dengan volume sama tiap tabung tanpa sisa. Volume maksimum tiap tabung adalah ....

- A. 3 mL
- B. 13 mL
- C. 5 mL
- D. 26 mL

**Kunci: B**
**Pembahasan:**
- **A salah** — 3 hanya faktor dari 39, tidak membagi 65.
- **B benar** — 39 = 3 × 13, 65 = 5 × 13. Faktor sama hanya 13. FPB = 13 mL.
- **C salah** — 5 hanya faktor dari 65, tidak membagi 39.
- **D salah** — 26 = 2 × 13 tidak membagi 39 (39 tidak punya faktor 2).
- **Konsep kunci:** Soal cerita "dibagi ke tabung, volume sama, maksimum" adalah soal FPB.
- **Langkah Penyelesaian:**
  1. Kata kunci "dibagi sama volume, maksimum" → FPB.
  2. FPB(39, 65) = 13 mL.

---

**86.** Kelas 6A memiliki 48 pensil dan 88 penghapus untuk dibagikan rata ke kelompok belajar, sama jenis & sama jumlah. Banyak kelompok terbanyak adalah ....

- A. 4
- B. 11
- C. 16
- D. 8

**Kunci: D**
**Pembahasan:**
- **A salah** — 4 = 2² memang membagi keduanya, tetapi belum maksimum.
- **B salah** — 11 hanya faktor dari 88, tidak membagi 48.
- **C salah** — 16 = 2⁴ tidak membagi 88 (88 hanya punya 2³).
- **D benar** — 48 = 2⁴ × 3, 88 = 2³ × 11. Faktor sama: 2³ = 8 kelompok.
- **Konsep kunci:** Soal cerita "dibagikan rata sama jenis & jumlah, terbanyak" adalah soal FPB.
- **Langkah Penyelesaian:**
  1. Kata kunci "dibagikan rata, terbanyak" → FPB.
  2. FPB(48, 88) = 8 kelompok.

---

**87.** Seorang pedagang punya 39 apel dan 52 jeruk untuk dibungkus sama rata ke dalam kantong plastik, sama jenis & sama jumlah. Banyak kantong terbanyak adalah ....

- A. 3
- B. 4
- C. 13
- D. 26

**Kunci: C**
**Pembahasan:**
- **A salah** — 3 hanya faktor dari 39, tidak membagi 52.
- **B salah** — 4 hanya faktor dari 52, tidak membagi 39.
- **C benar** — 39 = 3 × 13, 52 = 2² × 13. Faktor sama hanya 13. FPB = 13 kantong.
- **D salah** — 26 = 2 × 13 tidak membagi 39 (39 tidak punya faktor 2).
- **Konsep kunci:** Soal cerita "dibungkus sama rata sama jenis & jumlah, terbanyak" adalah soal FPB.
- **Langkah Penyelesaian:**
  1. Kata kunci "dibungkus sama rata, terbanyak" → FPB.
  2. FPB(39, 52) = 13 kantong.

---

**88.** Ibu punya 2 gulung kain, panjang 56 m dan 84 m, akan dipotong sama panjang tanpa sisa untuk sarung bantal. Panjang maksimum tiap potong adalah ....

- A. 28 m
- B. 14 m
- C. 4 m
- D. 7 m

**Kunci: A**
**Pembahasan:**
- **A benar** — 56 = 2³ × 7, 84 = 2² × 3 × 7. Faktor sama: 2² × 7 = 28 m.
- **B salah** — 14 = 2 × 7 memakai pangkat 2 yang terlalu kecil (seharusnya 2², bukan 2¹).
- **C salah** — 4 = 2² memang membagi keduanya, tetapi faktor 7 belum dimasukkan.
- **D salah** — 7 juga membagi keduanya, tetapi faktor 2² belum dimasukkan.
- **Konsep kunci:** Kalikan semua faktor prima sama dengan pangkat terkecilnya masing-masing.
- **Langkah Penyelesaian:**
  1. Kata kunci "dipotong sama panjang, maksimum" → FPB.
  2. FPB(56, 84) = 2² × 7 = 28 m.

---

**89.** Sebuah regu pramuka memiliki 49 tongkat dan 77 tali untuk dibagi rata ke setiap kelompok kecil, sama jenis & sama jumlah. Banyak kelompok terbanyak adalah ....

- A. 11
- B. 7
- C. 49
- D. 539

**Kunci: B**
**Pembahasan:**
- **A salah** — 11 hanya faktor dari 77, tidak membagi 49.
- **B benar** — 49 = 7², 77 = 7 × 11. Faktor sama hanya 7. FPB = 7 kelompok.
- **C salah** — 49 tidak membagi 77 (77 ÷ 49 bersisa). Mengira salah satu bilangan asal otomatis jawaban.
- **D salah** — 539 = KPK(49, 77). Tertukar konsep.
- **Konsep kunci:** Soal cerita "dibagi rata sama jenis & jumlah, terbanyak" adalah soal FPB.
- **Langkah Penyelesaian:**
  1. Kata kunci "dibagi rata, terbanyak" → FPB.
  2. FPB(49, 77) = 7 kelompok.

---

**90.** Panitia wisata sekolah membawa 68 siswa kelas 5 dan 102 siswa kelas 6, akan dibagi ke dalam bus dengan jumlah siswa tiap kelas sama banyak di setiap bus. Banyak bus terbanyak yang dibutuhkan adalah ....

- A. 17
- B. 2
- C. 34
- D. 68

**Kunci: C**
**Pembahasan:**
- **A salah** — 17 memang faktor persekutuan, tetapi belum maksimum.
- **B salah** — 2 juga membagi keduanya, tetapi belum maksimum.
- **C benar** — 68 = 2² × 17, 102 = 2 × 3 × 17. Faktor sama: 2¹ × 17¹ = 34 bus.
- **D salah** — 68 tidak membagi 102 (102 ÷ 68 bersisa). Mengira salah satu bilangan asal otomatis jawaban.
- **Konsep kunci:** Soal cerita "dibagi sama banyak ke setiap bus, terbanyak yang dibutuhkan" tetap dicari dengan FPB karena jumlah tiap kelas harus sama rata di setiap bus.
- **Langkah Penyelesaian:**
  1. Kata kunci "dibagi sama banyak tiap bus" → FPB.
  2. FPB(68, 102) = 34 bus.

---

**91.** FPB dari 18, 30, dan 42 adalah ....

- A. 2
- B. 3
- C. 9
- D. 6

**Kunci: D**
**Pembahasan:**
- **A salah** — 2 memang faktor persekutuan ketiganya, tetapi belum maksimum.
- **B salah** — 3 juga faktor persekutuan ketiganya, tetapi belum maksimum.
- **C salah** — 9 = 3² tidak membagi 30 (30 hanya punya 3¹).
- **D benar** — 18 = 2 × 3², 30 = 2 × 3 × 5, 42 = 2 × 3 × 7. Faktor sama di ketiganya: 2¹ × 3¹ = 6.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima sama berpangkat terkecil yang muncul di SEMUA bilangan.
- **Langkah Penyelesaian:**
  1. 18 = 2 × 3², 30 = 2 × 3 × 5, 42 = 2 × 3 × 7.
  2. Faktor sama di ketiganya: 2 dan 3.
  3. FPB = 2 × 3 = 6.

---

**92.** FPB dari 24, 32, dan 40 adalah ....

- A. 8
- B. 4
- C. 2
- D. 16

**Kunci: A**
**Pembahasan:**
- **A benar** — 24 = 2³ × 3, 32 = 2⁵, 40 = 2³ × 5. Faktor sama di ketiganya: 2, pangkat terkecil 2³ = 8.
- **B salah** — 4 = 2² memang membagi ketiganya, tetapi belum maksimum.
- **C salah** — 2 juga membagi ketiganya, tetapi belum maksimum.
- **D salah** — 16 = 2⁴ tidak membagi 24 (24 hanya punya 2³).
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima sama berpangkat terkecil di SEMUA bilangan.
- **Langkah Penyelesaian:**
  1. 24 = 2³ × 3, 32 = 2⁵, 40 = 2³ × 5.
  2. Faktor sama di ketiganya: 2³ = 8.

---

**93.** FPB dari 9, 15, dan 21 adalah ....

- A. 1
- B. 5
- C. 3
- D. 7

**Kunci: C**
**Pembahasan:**
- **A salah** — 1 memang faktor persekutuan ketiganya, tetapi bukan yang terbesar.
- **B salah** — 5 hanya faktor dari 15, tidak membagi 9 dan 21.
- **C benar** — 9 = 3², 15 = 3 × 5, 21 = 3 × 7. Faktor sama di ketiganya hanya 3. FPB = 3.
- **D salah** — 7 hanya faktor dari 21, tidak membagi 9 dan 15.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang muncul di SEMUA bilangan.
- **Langkah Penyelesaian:**
  1. 9 = 3², 15 = 3 × 5, 21 = 3 × 7.
  2. Faktor sama di ketiganya: 3.

---

**94.** FPB dari 20, 25, dan 30 adalah ....

- A. 2
- B. 5
- C. 10
- D. 25

**Kunci: B**
**Pembahasan:**
- **A salah** — 2 hanya faktor dari 20 dan 30, tidak membagi 25 (25 ganjil).
- **B benar** — 20 = 2² × 5, 25 = 5², 30 = 2 × 3 × 5. Faktor sama di ketiganya hanya 5. FPB = 5.
- **C salah** — 10 = 2 × 5 tidak membagi 25 (25 tidak punya faktor 2).
- **D salah** — 25 = 5² tidak membagi 20 dan 30 (keduanya hanya punya 5¹).
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang muncul di SEMUA bilangan.
- **Langkah Penyelesaian:**
  1. 20 = 2² × 5, 25 = 5², 30 = 2 × 3 × 5.
  2. Faktor sama di ketiganya: 5.

---

**95.** Panitia lomba 17 Agustus punya 24 bendera, 36 balon, dan 48 pita untuk dibagi rata ke setiap pos lomba, sama jenis & sama jumlah. Banyak pos terbanyak adalah ....

- A. 12
- B. 6
- C. 4
- D. 24

**Kunci: A**
**Pembahasan:**
- **A benar** — 24 = 2³ × 3, 36 = 2² × 3², 48 = 2⁴ × 3. Faktor sama di ketiganya: 2² × 3 = 12 pos.
- **B salah** — 6 = 2 × 3 memakai pangkat 2 yang terlalu kecil (seharusnya 2²).
- **C salah** — 4 = 2² memang membagi ketiganya, tetapi faktor 3 belum dimasukkan.
- **D salah** — 24 = 2³ × 3 tidak membagi 36 (36 hanya punya 2²).
- **Konsep kunci:** FPB dari tiga bilangan pada soal cerita "dibagi rata, sama jenis & jumlah, terbanyak" dicari dengan faktor prima sama berpangkat terkecil di SEMUA bilangan.
- **Langkah Penyelesaian:**
  1. Kata kunci "dibagi rata ke setiap pos, terbanyak" → FPB.
  2. FPB(24, 36, 48) = 2² × 3 = 12 pos.

---

**96.** Jika bilangan p habis membagi bilangan q (dengan p < q), maka FPB(p, q) = ....

- A. q
- B. p × q
- C. selisih q dan p
- D. p

**Kunci: D**
**Pembahasan:**
- **A salah** — q adalah bilangan yang lebih besar; FPB tidak mungkin lebih besar dari bilangan terkecil dalam himpunan.
- **B salah** — p × q adalah hasil kali (mirip KPK jika keduanya saling prima), bukan FPB.
- **C salah** — Selisih q dan p tidak berkaitan dengan definisi FPB, kecuali kebetulan sama.
- **D benar** — Jika p habis membagi q, maka p sendiri sudah menjadi faktor persekutuan terbesar karena p adalah bilangan yang lebih kecil dan membagi habis q.
- **Konsep kunci:** Jika satu bilangan habis membagi bilangan lainnya, FPB keduanya adalah bilangan yang lebih kecil.
- **Langkah Penyelesaian:**
  1. p habis membagi q, artinya p adalah faktor dari q.
  2. Karena p < q, FPB(p, q) = p.

---

**97.** Manakah pasangan bilangan berikut yang salah satu bilangannya HABIS membagi bilangan lainnya, sehingga FPB-nya sama dengan bilangan terkecil?

- A. 14 dan 20
- B. 15 dan 22
- C. 9 dan 27
- D. 11 dan 30

**Kunci: C**
**Pembahasan:**
- **A salah** — 14 tidak membagi 20 (20 ÷ 14 bersisa). FPB(14, 20) = 2, bukan 14.
- **B salah** — 15 tidak membagi 22. FPB(15, 22) = 1, bukan 15.
- **C benar** — 27 ÷ 9 = 3 (habis tanpa sisa), sehingga FPB(9, 27) = 9, bilangan yang lebih kecil.
- **D salah** — 11 tidak membagi 30 (30 ÷ 11 bersisa). FPB(11, 30) = 1, bukan 11.
- **Konsep kunci:** Jika satu bilangan habis dibagi bilangan lainnya, FPB-nya adalah bilangan yang lebih kecil.
- **Langkah Penyelesaian:**
  1. Cek pembagian tiap pasangan.
  2. Hanya 27 ÷ 9 = 3 yang habis tanpa sisa.

---

**98.** Banyaknya faktor persekutuan dari 16 dan 36 ada sebanyak ....

- A. 3
- B. 4
- C. 12
- D. 2

**Kunci: A**
**Pembahasan:**
- **A benar** — Faktor 16 = {1, 2, 4, 8, 16}; faktor 36 = {1, 2, 3, 4, 6, 9, 12, 18, 36}. Faktor persekutuan = {1, 2, 4}, sebanyak 3 buah.
- **B salah** — 4 adalah nilai FPB(16, 36), bukan banyaknya faktor persekutuan.
- **C salah** — 12 adalah salah satu faktor 36, bukan hasil menghitung faktor persekutuan.
- **D salah** — Kurang teliti mendaftar, ada faktor persekutuan yang terlewat.
- **Konsep kunci:** Jumlah faktor persekutuan berbeda dari nilai FPB — harus mendaftar semua faktor yang sama, bukan hanya yang terbesar.
- **Langkah Penyelesaian:**
  1. Faktor 16 = {1, 2, 4, 8, 16}.
  2. Faktor 36 = {1, 2, 3, 4, 6, 9, 12, 18, 36}.
  3. Persekutuan = {1, 2, 4} → 3 buah.

---

**99.** Sari menghitung FPB(36, 48) dengan cara: 36 = 6², 48 = 6 × 8, lalu menyimpulkan FPB = 6. Kesalahan Sari adalah ....

- A. 36 dan 48 tidak memiliki FPB.
- B. 6 bukan bilangan prima, sehingga faktorisasi harus diteruskan ke 2 dan 3 (FPB sebenarnya adalah 12).
- C. 48 tidak bisa difaktorkan.
- D. FPB(36, 48) memang 6, Sari sudah benar.

**Kunci: B**
**Pembahasan:**
- **A salah** — Setiap dua bilangan asli pasti memiliki FPB (minimal 1); pernyataan ini keliru.
- **B benar** — Faktorisasi prima harus berhenti pada bilangan PRIMA. Karena 6 = 2 × 3 bukan prima, faktorisasi Sari belum tuntas. Faktorisasi yang benar: 36 = 2² × 3², 48 = 2⁴ × 3, sehingga FPB = 2² × 3 = 12.
- **C salah** — 48 bisa difaktorkan tuntas menjadi 2⁴ × 3.
- **D salah** — FPB(36, 48) yang benar adalah 12, bukan 6. 6 hanya faktor persekutuan yang belum maksimum.
- **Konsep kunci:** Faktorisasi prima harus dilanjutkan sampai semua faktor berupa bilangan prima, bukan berhenti di bilangan komposit seperti 6.
- **Langkah Penyelesaian:**
  1. 36 = 2² × 3², 48 = 2⁴ × 3.
  2. Faktor sama: 2² × 3 = 12.
  3. FPB(36, 48) yang benar = 12.

---

**100.** FPB dari 60 dan 84 adalah ....

- A. 4
- B. 6
- C. 3
- D. 12

**Kunci: D**
**Pembahasan:**
- **A salah** — 4 = 2² memang membagi keduanya, tetapi faktor 3 belum dimasukkan.
- **B salah** — 6 = 2 × 3 memakai pangkat 2 yang terlalu kecil (seharusnya 2²).
- **C salah** — 3 juga membagi keduanya, tetapi faktor 2² belum dimasukkan.
- **D benar** — 60 = 2² × 3 × 5, 84 = 2² × 3 × 7. Faktor sama: 2² × 3 = 12.
- **Konsep kunci:** Kalikan semua faktor prima sama dengan pangkat terkecilnya masing-masing.
- **Langkah Penyelesaian:**
  1. 60 = 2² × 3 × 5.
  2. 84 = 2² × 3 × 7.
  3. Faktor sama: 2² × 3 = 12.

---

# Bagian III — Kunci & Distribusi

## Tabel Kunci 100 Soal

| 1–10 | 11–20 | 21–30 | 31–40 | 41–50 |
|------|-------|-------|-------|-------|
| 1. B | 11. B | 21. D | 31. D | 41. C |
| 2. C | 12. A | 22. A | 32. B | 42. D |
| 3. A | 13. D | 23. B | 33. C | 43. A |
| 4. D | 14. C | 24. C | 34. A | 44. B |
| 5. C | 15. A | 25. A | 35. D | 45. D |
| 6. B | 16. B | 26. D | 36. B | 46. C |
| 7. D | 17. D | 27. C | 37. C | 47. B |
| 8. A | 18. C | 28. B | 38. A | 48. A |
| 9. C | 19. B | 29. A | 39. D | 49. D |
| 10. D | 20. A | 30. C | 40. B | 50. B |

| 51–60 | 61–70 | 71–80 | 81–90 | 91–100 |
|-------|-------|-------|-------|--------|
| 51. C | 61. A | 71. A | 81. D | 91. D |
| 52. A | 62. D | 72. C | 82. B | 92. A |
| 53. B | 63. C | 73. B | 83. A | 93. C |
| 54. D | 64. B | 74. D | 84. C | 94. B |
| 55. A | 65. D | 75. C | 85. B | 95. A |
| 56. C | 66. A | 76. A | 86. D | 96. D |
| 57. B | 67. B | 77. B | 87. C | 97. C |
| 58. D | 68. C | 78. C | 88. A | 98. A |
| 59. A | 69. D | 79. D | 89. B | 99. B |
| 60. C | 70. B | 80. A | 90. C | 100. D |

## Distribusi Kunci

Penghitungan per huruf:

- **A** (25 soal): 3, 8, 12, 15, 20, 22, 25, 29, 34, 38, 43, 48, 52, 55, 59, 61, 66, 71, 76, 80, 83, 88, 92, 95, 98
- **B** (25 soal): 1, 6, 11, 16, 19, 23, 28, 32, 36, 40, 44, 47, 50, 53, 57, 64, 67, 70, 73, 77, 82, 85, 89, 94, 99
- **C** (25 soal): 2, 5, 9, 14, 18, 24, 27, 30, 33, 37, 41, 46, 51, 56, 60, 63, 68, 72, 75, 78, 84, 87, 90, 93, 97
- **D** (25 soal): 4, 7, 10, 13, 17, 21, 26, 31, 35, 39, 42, 45, 49, 54, 58, 62, 65, 69, 74, 79, 81, 86, 91, 96, 100

**Distribusi A: 25 · B: 25 · C: 25 · D: 25** — tepat seimbang, sesuai target ±25 tiap huruf. Kunci tersebar tidak berpola (tidak berurutan A,B,C,D secara mekanis) sehingga tidak bisa ditebak dari posisi nomor soal.

---

## Strategi Belajar FPB (Tingkat Mudah)

- **Kuasai faktorisasi prima dengan cepat** — latih membagi bilangan dengan 2, 3, 5, 7 secara berurutan sampai tuntas ke bilangan prima; jangan berhenti di bilangan komposit seperti 6, 8, atau 9.
- **Ingat aturan emas**: FPB = faktor sama × **pangkat TERKECIL**. Kebalikannya (pangkat terbesar) adalah aturan KPK.
- **Hafalkan sifat cepat**: bilangan berurutan → FPB 1; dua bilangan prima berbeda → FPB 1; satu bilangan habis membagi lainnya → FPB = bilangan lebih kecil; FPB(a,a) = a.
- **Kenali kata kunci soal cerita**: "dibagi rata/sama banyak/sama jenis", "dipotong sama panjang", "ubin/paving terbesar" → semuanya soal FPB.
- **Jangan tertukar dengan KPK** — kata kunci "bertemu lagi/bersamaan lagi" adalah soal KPK, bukan FPB.
- **Cek jawaban dengan pembagian**: hasil FPB harus membagi habis SEMUA bilangan pada soal, tanpa sisa.
- **Gunakan tabel faktorisasi prima** pada Bagian I sebagai referensi cepat saat berlatih, sampai hafal di luar kepala.

---

*Selesai. Sub-bab 01f - FPB (Faktor Persekutuan Terbesar) (Tingkat Mudah).*
