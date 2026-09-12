# OSN/KSN SD — MTK · Sub-Bab 01f: FPB (Faktor Persekutuan Terbesar) (Tingkat Mudah-Sedang)

> **Profil**: 50 Kab + 50 Prov = 100 soal PG
> **Fokus**: FPB dua/tiga bilangan lewat faktorisasi prima & algoritma Euclid, sifat-sifat FPB, hubungan FPB-KPK, dan soal cerita "dibagi rata/dipotong sama panjang/parsel maksimum".
> **Target**: SD kelas 5–6 persiapan OSN/KSN
> **Estimasi waktu**: 5–8 jam (boleh dibagi beberapa sesi)

---

## 📋 Daftar Isi

- **Bagian I — Konsep & Strategi** — definisi FPB, tiga cara mencari FPB, hubungan dengan KPK, dan pola soal cerita.
- **Bagian II — 100 Soal PG** — 50 Kab + 50 Prov, lengkap dengan pembahasan analisis 4 opsi.
- **Bagian III — Kunci & Distribusi** — tabel kunci dan distribusi A/B/C/D.

---

# Bagian I — Konsep & Strategi

## 1. Definisi FPB

**FPB (Faktor Persekutuan Terbesar)** dari dua bilangan atau lebih adalah bilangan **terbesar** yang dapat **membagi habis** (tanpa sisa) semua bilangan tersebut.

Contoh: faktor 10 = {1, 2, 5, 10}; faktor 15 = {1, 3, 5, 15}. Faktor yang sama = {1, 5}. Yang terbesar = **5** → FPB(10, 15) = 5.

## 2. Cara Mencari FPB

**Cara Daftar Faktor** — cocok untuk bilangan kecil (≤ 30): tulis semua faktor tiap bilangan, cari yang sama, ambil yang terbesar.

**Cara Faktorisasi Prima ⭐ (cara utama OSN):**
1. Faktorkan tiap bilangan menjadi perkalian bilangan prima.
2. Pilih faktor prima yang **sama** di semua bilangan.
3. Untuk tiap faktor sama itu, ambil **pangkat TERKECIL**.
4. Kalikan hasilnya.

Contoh: FPB(20, 28) → 20 = 2² × 5; 28 = 2² × 7. Faktor sama hanya 2, pangkat terkecil 2². FPB = **4**.

**Algoritma Euclid (untuk bilangan besar):** FPB(a, b) = FPB(b, sisa a÷b), diulang sampai sisa = 0; pembagi terakhir adalah FPB.

Contoh: FPB(84, 30) → 84 = 2×30 + 24 → 30 = 1×24 + 6 → 24 = 4×6 + 0 → FPB = **6**.

## 3. Hubungan FPB dan KPK

**Rumus emas** (khusus dua bilangan): **FPB(a, b) × KPK(a, b) = a × b**.

Contoh: FPB(10, 15) = 5, maka KPK(10, 15) = (10 × 15) ÷ 5 = **30**. Rumus ini **tidak berlaku langsung** untuk tiga bilangan atau lebih.

## 4. Sifat-Sifat Penting FPB

1. FPB selalu **≤ bilangan terkecil** dalam himpunan.
2. Jika satu bilangan **habis dibagi** bilangan lain, FPB = bilangan yang **lebih kecil**. Contoh: FPB(9, 27) = 9.
3. Dua bilangan **berurutan** (selisih 1) selalu FPB = **1**.
4. Dua bilangan **prima berbeda** selalu FPB = **1**.
5. Bilangan dengan FPB = 1 disebut **saling prima** (relatif prima) — tidak harus keduanya prima.
6. FPB(a, a) = **a**.

## 5. Kapan Soal Cerita Berarti FPB? (Bukan KPK!)

Kata kunci **FPB**: "dibagi rata/sama banyak", "dipotong sama panjang", "sebanyak-banyaknya/maksimum kelompok bisa dibuat", "ubin/petak terbesar untuk menutupi lahan", "parsel/bingkisan sama jenis & sama jumlah".

Kata kunci **KPK** (bukan FPB): "bertemu/bersamaan lagi", "berbunyi bersama", "kembali di hari yang sama", "bilangan terkecil yang habis dibagi …".

**Pola penyelesaian soal cerita FPB:**
1. Kenali bilangan-bilangan yang mau dibagi rata.
2. Hitung FPB-nya → itulah jumlah **maksimum** kelompok/potongan/penerima.
3. Jika ditanya isi tiap kelompok, bagi tiap bilangan dengan FPB tersebut.

## 6. Kesalahan Klasik yang Sering Dijadikan Distractor

1. Mengambil pangkat **terbesar** (itu aturan KPK, bukan FPB).
2. Memasukkan faktor prima yang **tidak muncul di semua bilangan**.
3. Mengira FPB = bilangan terkecil di dalam soal (padahal harus dicek benar membagi habis).
4. Tertukar FPB ↔ KPK pada soal cerita "bertemu lagi" vs "dibagi rata".
5. Lupa bahwa FPB(a, a) = a, atau bahwa FPB × KPK = a × b hanya untuk dua bilangan.
6. Salah faktorisasi (misal 36 dianggap 6² padahal 6 bukan prima; seharusnya 2² × 3²).

## 7. Catatan Tingkat Kabupaten vs Provinsi

Level **Kabupaten (C2-C3)** menekankan hitungan langsung 1–2 langkah: faktorisasi dua bilangan, sifat dasar, dan cerita pendek satu konteks. Level **Provinsi (C3-C4)** menambah kompleksitas: tiga+ bilangan, bilangan lebih besar, algoritma Euclid, hubungan FPB-KPK, soal dengan sisa pembagian, dan cerita multi-langkah/multi-item.

---

# Bagian II — 100 Soal PG

## KAB · Soal 1-50 (Tingkat Kabupaten, C2-C3)

Bagian ini berisi FPB dua/tiga bilangan lewat faktorisasi langsung dan cerita pendek satu-dua langkah.

---

**1.** FPB dari 10 dan 14 adalah ....

- A. 1
- B. **2**
- C. 5
- D. 70

**Kunci: B**
**Pembahasan:**
- **A salah** — 1 memang faktor persekutuan, tetapi bukan yang terbesar; masih ada 2 yang juga membagi keduanya.
- **B benar** — 10 = 2 × 5; 14 = 2 × 7. Faktor prima sama hanya 2. FPB = **2**.
- **C salah** — 5 hanya membagi 10, tidak membagi 14 (14 ÷ 5 bersisa).
- **D salah** — 70 = KPK(10, 14) = 10 × 14 ÷ 2. Tertukar dengan KPK.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 10 = 2 × 5; 14 = 2 × 7.
  2. Faktor sama hanya 2.
  3. FPB = **2**.

---

**2.** Nilai FPB(12, 20) adalah ....

- A. 2
- B. **4**
- C. 6
- D. 60

**Kunci: B**
**Pembahasan:**
- **A salah** — 2 membagi keduanya, tetapi masih ada 4 yang lebih besar dan juga membagi.
- **B benar** — 12 = 2² × 3; 20 = 2² × 5. Faktor sama: 2, pangkat terkecil 2². FPB = **4**.
- **C salah** — 6 tidak membagi 20 (20 ÷ 6 bersisa).
- **D salah** — 60 = KPK(12, 20). Salah arah, itu bukan FPB.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 12 = 2² × 3; 20 = 2² × 5.
  2. Pangkat terkecil dari 2 adalah 2².
  3. FPB = **4**.

---

**3.** FPB dari 15 dan 18 adalah ....

- A. 1
- B. **3**
- C. 6
- D. 9

**Kunci: B**
**Pembahasan:**
- **A salah** — 1 selalu faktor persekutuan, tetapi bukan yang terbesar.
- **B benar** — 15 = 3 × 5; 18 = 2 × 3². Faktor sama hanya 3 (pangkat terkecil 3¹). FPB = **3**.
- **C salah** — 6 tidak membagi 15 (15 ÷ 6 bersisa).
- **D salah** — 9 tidak membagi 15 (15 ÷ 9 bersisa); siswa keliru mengambil pangkat 3² dari 18 saja.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 15 = 3 × 5; 18 = 2 × 3².
  2. Faktor sama: 3, pangkat terkecil 3¹.
  3. FPB = **3**.

---

**4.** Berapakah FPB dari 9 dan 15?

- A. 1
- B. **3**
- C. 5
- D. 45

**Kunci: B**
**Pembahasan:**
- **A salah** — 1 memang faktor, tetapi belum maksimum karena 3 juga membagi keduanya.
- **B benar** — 9 = 3²; 15 = 3 × 5. Faktor sama hanya 3, pangkat terkecil 3¹. FPB = **3**.
- **C salah** — 5 hanya faktor 15, tidak membagi 9.
- **D salah** — 45 = KPK(9, 15). Tertukar konsep.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 9 = 3²; 15 = 3 × 5.
  2. Faktor sama: 3.
  3. FPB = **3**.

---

**5.** FPB dari 16 dan 20 sama dengan ....

- A. 2
- B. **4**
- C. 5
- D. 80

**Kunci: B**
**Pembahasan:**
- **A salah** — 2 membagi keduanya, tetapi masih ada 4 yang lebih besar dan juga membagi.
- **B benar** — 16 = 2⁴; 20 = 2² × 5. Faktor sama: 2, pangkat terkecil 2². FPB = **4**.
- **C salah** — 5 hanya faktor 20, tidak membagi 16.
- **D salah** — 80 = KPK(16, 20). Salah arah.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 16 = 2⁴; 20 = 2² × 5.
  2. Pangkat terkecil dari 2 adalah 2².
  3. FPB = **4**.

---

**6.** FPB dari 20 dan 25 adalah ....

- A. 1
- B. 4
- C. **5**
- D. 100

**Kunci: C**
**Pembahasan:**
- **A salah** — 1 memang faktor, tetapi belum maksimum.
- **B salah** — 4 hanya membagi 20, tidak membagi 25 (25 ganjil terhadap 4).
- **C benar** — 20 = 2² × 5; 25 = 5². Faktor sama hanya 5. FPB = **5**.
- **D salah** — 100 = KPK(20, 25). Tertukar dengan KPK.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 20 = 2² × 5; 25 = 5².
  2. Faktor sama hanya 5.
  3. FPB = **5**.

---

**7.** Nilai FPB(12, 15) adalah ....

- A. 1
- B. **3**
- C. 5
- D. 180

**Kunci: B**
**Pembahasan:**
- **A salah** — 1 selalu faktor persekutuan, tetapi bukan yang terbesar.
- **B benar** — 12 = 2² × 3; 15 = 3 × 5. Faktor sama hanya 3. FPB = **3**.
- **C salah** — 5 hanya faktor 15, tidak membagi 12.
- **D salah** — 180 = KPK(12, 15). Salah konsep.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 12 = 2² × 3; 15 = 3 × 5.
  2. Faktor sama hanya 3.
  3. FPB = **3**.

---

**8.** FPB dari 24 dan 40 adalah ....

- A. 2
- B. 4
- C. **8**
- D. 120

**Kunci: C**
**Pembahasan:**
- **A salah** — 2 membagi keduanya, tetapi belum maksimum.
- **B salah** — 4 juga membagi keduanya, tetapi 8 masih lebih besar dan juga membagi.
- **C benar** — 24 = 2³ × 3; 40 = 2³ × 5. Faktor sama: 2, pangkat terkecil 2³. FPB = **8**.
- **D salah** — 120 = KPK(24, 40). Tertukar arah.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 24 = 2³ × 3; 40 = 2³ × 5.
  2. Pangkat terkecil dari 2 adalah 2³.
  3. FPB = **8**.

---

**9.** FPB dari 28 dan 35 adalah ....

- A. 5
- B. **7**
- C. 14
- D. 140

**Kunci: B**
**Pembahasan:**
- **A salah** — 5 hanya faktor 35, tidak membagi 28.
- **B benar** — 28 = 2² × 7; 35 = 5 × 7. Faktor sama hanya 7. FPB = **7**.
- **C salah** — 14 tidak membagi 35 (35 ÷ 14 bersisa).
- **D salah** — 140 = KPK(28, 35). Tertukar dengan KPK.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 28 = 2² × 7; 35 = 5 × 7.
  2. Faktor sama hanya 7.
  3. FPB = **7**.

---

**10.** FPB dari 18 dan 45 adalah ....

- A. 3
- B. 6
- C. **9**
- D. 90

**Kunci: C**
**Pembahasan:**
- **A salah** — 3 membagi keduanya, tetapi belum maksimum karena 9 juga membagi.
- **B salah** — 6 tidak membagi 45 (45 ÷ 6 bersisa).
- **C benar** — 18 = 2 × 3²; 45 = 3² × 5. Faktor sama: 3, pangkat terkecil 3². FPB = **9**.
- **D salah** — 90 = KPK(18, 45). Salah arah.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 18 = 2 × 3²; 45 = 3² × 5.
  2. Pangkat terkecil dari 3 adalah 3².
  3. FPB = **9**.

---

**11.** FPB dari 16 dan 28 adalah ....

- A. **4**
- B. 2
- C. 7
- D. 112

**Kunci: A**
**Pembahasan:**
- **A benar** — 16 = 2⁴; 28 = 2² × 7. Faktor sama hanya 2, pangkat terkecil 2². FPB = **4**.
- **B salah** — 2 membagi keduanya, tetapi belum maksimum; hanya mengambil pangkat 2¹, bukan pangkat terkecil sesungguhnya (2²).
- **C salah** — 7 hanya faktor 28, tidak membagi 16.
- **D salah** — 112 = KPK(16, 28). Tertukar dengan KPK.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 16 = 2⁴; 28 = 2² × 7.
  2. Pangkat terkecil dari 2 adalah 2².
  3. FPB = **4**.

---

**12.** FPB dari 22 dan 33 adalah ....

- A. 1
- B. 2
- C. 3
- D. **11**

**Kunci: D**
**Pembahasan:**
- **A salah** — 1 memang faktor persekutuan, tetapi bukan yang terbesar.
- **B salah** — 2 hanya faktor 22, tidak membagi 33 (33 ganjil).
- **C salah** — 3 hanya faktor 33, tidak membagi 22.
- **D benar** — 22 = 2 × 11; 33 = 3 × 11. Faktor sama hanya 11. FPB = **11**.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 22 = 2 × 11; 33 = 3 × 11.
  2. Faktor sama hanya 11.
  3. FPB = **11**.

---

**13.** FPB dari 26 dan 39 adalah ....

- A. **13**
- B. 2
- C. 3
- D. 78

**Kunci: A**
**Pembahasan:**
- **A benar** — 26 = 2 × 13; 39 = 3 × 13. Faktor sama hanya 13. FPB = **13**.
- **B salah** — 2 hanya faktor 26, tidak membagi 39.
- **C salah** — 3 hanya faktor 39, tidak membagi 26.
- **D salah** — 78 = KPK(26, 39). Tertukar arah.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 26 = 2 × 13; 39 = 3 × 13.
  2. Faktor sama hanya 13.
  3. FPB = **13**.

---

**14.** FPB dari 34 dan 51 adalah ....

- A. 1
- B. 2
- C. 3
- D. **17**

**Kunci: D**
**Pembahasan:**
- **A salah** — 1 memang faktor, tetapi belum maksimum.
- **B salah** — 2 hanya faktor 34, tidak membagi 51 (51 ganjil).
- **C salah** — 3 hanya faktor 51, tidak membagi 34.
- **D benar** — 34 = 2 × 17; 51 = 3 × 17. Faktor sama hanya 17. FPB = **17**.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 34 = 2 × 17; 51 = 3 × 17.
  2. Faktor sama hanya 17.
  3. FPB = **17**.

---

**15.** FPB dari 14 dan 20 adalah ....

- A. **2**
- B. 4
- C. 5
- D. 140

**Kunci: A**
**Pembahasan:**
- **A benar** — 14 = 2 × 7; 20 = 2² × 5. Faktor sama hanya 2, dan pangkat terkecilnya 2¹ (bukan 2², karena 14 cuma punya satu faktor 2). FPB = **2**.
- **B salah** — Mengambil pangkat 2² dari 20 saja, lupa bahwa 14 hanya punya 2¹ — harus pangkat terkecil di ANTARA keduanya.
- **C salah** — 5 hanya faktor 20, tidak membagi 14.
- **D salah** — 140 = KPK(14, 20). Tertukar dengan KPK.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 14 = 2 × 7; 20 = 2² × 5.
  2. Pangkat terkecil dari 2 adalah 2¹.
  3. FPB = **2**.

---

**16.** FPB dari 9 dan 21 adalah ....

- A. 1
- B. 7
- C. **3**
- D. 63

**Kunci: C**
**Pembahasan:**
- **A salah** — 1 memang faktor, tetapi belum maksimum.
- **B salah** — 7 hanya faktor 21, tidak membagi 9.
- **C benar** — 9 = 3²; 21 = 3 × 7. Faktor sama hanya 3, pangkat terkecil 3¹. FPB = **3**.
- **D salah** — 63 = KPK(9, 21). Salah arah.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 9 = 3²; 21 = 3 × 7.
  2. Pangkat terkecil dari 3 adalah 3¹.
  3. FPB = **3**.

---

**17.** FPB dari 16 dan 18 adalah ....

- A. 4
- B. 8
- C. 9
- D. **2**

**Kunci: D**
**Pembahasan:**
- **A salah** — Mengambil pangkat 2² sembarangan, padahal 18 hanya punya faktor 2¹ — harus pangkat terkecil.
- **B salah** — 8 hanya faktor 16, tidak membagi 18.
- **C salah** — 9 hanya faktor 18, tidak membagi 16.
- **D benar** — 16 = 2⁴; 18 = 2 × 3². Faktor sama hanya 2, pangkat terkecil 2¹. FPB = **2**.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 16 = 2⁴; 18 = 2 × 3².
  2. Pangkat terkecil dari 2 adalah 2¹.
  3. FPB = **2**.

---

**18.** FPB dari 22 dan 55 adalah ....

- A. 1
- B. **11**
- C. 5
- D. 110

**Kunci: B**
**Pembahasan:**
- **A salah** — 1 memang faktor, tetapi belum maksimum.
- **B benar** — 22 = 2 × 11; 55 = 5 × 11. Faktor sama hanya 11. FPB = **11**.
- **C salah** — 5 hanya faktor 55, tidak membagi 22.
- **D salah** — 110 = KPK(22, 55). Tertukar konsep.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 22 = 2 × 11; 55 = 5 × 11.
  2. Faktor sama hanya 11.
  3. FPB = **11**.

---

**19.** FPB dari 26 dan 65 adalah ....

- A. 1
- B. 2
- C. **13**
- D. 130

**Kunci: C**
**Pembahasan:**
- **A salah** — 1 memang faktor, tetapi belum maksimum.
- **B salah** — 2 hanya faktor 26, tidak membagi 65 (65 ganjil).
- **C benar** — 26 = 2 × 13; 65 = 5 × 13. Faktor sama hanya 13. FPB = **13**.
- **D salah** — 130 = KPK(26, 65). Salah arah.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 26 = 2 × 13; 65 = 5 × 13.
  2. Faktor sama hanya 13.
  3. FPB = **13**.

---

**20.** FPB dari 9 dan 33 adalah ....

- A. **3**
- B. 1
- C. 9
- D. 99

**Kunci: A**
**Pembahasan:**
- **A benar** — 9 = 3²; 33 = 3 × 11. Faktor sama hanya 3, dan pangkat terkecilnya 3¹ (33 cuma punya satu faktor 3). FPB = **3**.
- **B salah** — 1 memang faktor, tetapi belum maksimum.
- **C salah** — Mengambil pangkat 3² dari 9 saja, lupa bahwa 33 hanya punya 3¹.
- **D salah** — 99 = KPK(9, 33). Tertukar dengan KPK.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 9 = 3²; 33 = 3 × 11.
  2. Pangkat terkecil dari 3 adalah 3¹.
  3. FPB = **3**.

---

**21.** FPB dari 12, 18, dan 30 adalah ....

- A. 3
- B. 2
- C. 9
- D. **6**

**Kunci: D**
**Pembahasan:**
- **A salah** — 3 memang faktor sama, tetapi lupa bahwa 2 juga faktor sama di ketiga bilangan (12, 18, 30 semuanya genap).
- **B salah** — 2 memang faktor sama, tetapi lupa bahwa 3 juga faktor sama di ketiganya.
- **C salah** — 9 = 3² tidak membagi 12 dan 30; salah mengambil pangkat 3² padahal maksimal 3¹ yang sama di ketiganya.
- **D benar** — 12 = 2² × 3; 18 = 2 × 3²; 30 = 2 × 3 × 5. Faktor sama di ketiganya: 2¹ dan 3¹. FPB = 2 × 3 = **6**.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 12 = 2² × 3; 18 = 2 × 3²; 30 = 2 × 3 × 5.
  2. Faktor sama di ketiganya: 2¹ dan 3¹.
  3. FPB = 2 × 3 = **6**.

---

**22.** FPB dari 16, 24, dan 32 adalah ....

- A. **8**
- B. 4
- C. 16
- D. 96

**Kunci: A**
**Pembahasan:**
- **A benar** — 16 = 2⁴; 24 = 2³ × 3; 32 = 2⁵. Faktor sama hanya 2, dengan pangkat terkecil 2³ (karena 24 hanya punya 2³). FPB = **8**.
- **B salah** — 4 = 2² membagi ketiganya, tetapi belum maksimum; masih ada 8 yang juga membagi semuanya.
- **C salah** — 16 = 2⁴ tidak membagi 24 (24 ÷ 16 bersisa); salah mengambil pangkat dari 16 saja.
- **D salah** — 96 adalah kelipatan persekutuan (KPK ketiganya), bukan FPB.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 16 = 2⁴; 24 = 2³ × 3; 32 = 2⁵.
  2. Pangkat terkecil dari 2 di antara ketiganya adalah 2³.
  3. FPB = **8**.

---

**23.** FPB dari 9, 18, dan 27 adalah ....

- A. 3
- B. 6
- C. 27
- D. **9**

**Kunci: D**
**Pembahasan:**
- **A salah** — 3 membagi ketiganya, tetapi belum maksimum; hanya mengambil pangkat 3¹, padahal pangkat terkecil sebenarnya adalah 3².
- **B salah** — 6 tidak membagi 9 dan 27 (keduanya tidak habis dibagi 6).
- **C salah** — 27 = 3³ tidak membagi 18 (18 ÷ 27 tidak mungkin, 27 lebih besar); salah mengambil pangkat tertinggi dari 27 saja.
- **D benar** — 9 = 3²; 18 = 2 × 3²; 27 = 3³. Faktor sama hanya 3, pangkat terkecil 3² (dari 9 dan 18). FPB = **9**.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 9 = 3²; 18 = 2 × 3²; 27 = 3³.
  2. Pangkat terkecil dari 3 adalah 3².
  3. FPB = **9**.

---

**24.** FPB dari 20, 24, dan 28 adalah ....

- A. 2
- B. **4**
- C. 8
- D. 10

**Kunci: B**
**Pembahasan:**
- **A salah** — 2 membagi ketiganya, tetapi belum maksimum; hanya mengambil pangkat 2¹, padahal pangkat terkecil sebenarnya 2².
- **B benar** — 20 = 2² × 5; 24 = 2³ × 3; 28 = 2² × 7. Faktor sama hanya 2, pangkat terkecil 2² (dari 20 dan 28). FPB = **4**.
- **C salah** — 8 = 2³ tidak membagi 20 dan 28 (keduanya hanya punya 2²); salah mengambil pangkat dari 24 saja.
- **D salah** — 10 = 2 × 5 hanya faktor 20, tidak membagi 24 maupun 28.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 20 = 2² × 5; 24 = 2³ × 3; 28 = 2² × 7.
  2. Pangkat terkecil dari 2 adalah 2².
  3. FPB = **4**.

---

**25.** FPB dari 15, 30, dan 45 adalah ....

- A. **15**
- B. 5
- C. 3
- D. 45

**Kunci: A**
**Pembahasan:**
- **A benar** — 15 = 3 × 5; 30 = 2 × 3 × 5; 45 = 3² × 5. Faktor sama di ketiganya: 3¹ dan 5¹. FPB = 3 × 5 = **15**.
- **B salah** — 5 membagi ketiganya, tetapi lupa bahwa 3 juga faktor sama di ketiganya.
- **C salah** — 3 membagi ketiganya, tetapi lupa bahwa 5 juga faktor sama di ketiganya.
- **D salah** — 45 = 3² × 5 tidak membagi 15 dan 30; salah mengambil pangkat 3² dari 45 saja, padahal 15 dan 30 hanya punya 3¹.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 15 = 3 × 5; 30 = 2 × 3 × 5; 45 = 3² × 5.
  2. Faktor sama di ketiganya: 3¹ dan 5¹.
  3. FPB = 3 × 5 = **15**.

---

**26.** FPB dari 12, 24, dan 36 adalah ....

- A. 6
- B. 4
- C. 24
- D. **12**

**Kunci: D**
**Pembahasan:**
- **A salah** — 6 membagi ketiganya, tetapi belum maksimum; hanya mengambil pangkat 2¹, padahal pangkat terkecil sebenarnya 2².
- **B salah** — 4 membagi ketiganya, tetapi lupa bahwa 3 juga faktor sama di ketiganya.
- **C salah** — 24 = 2³ × 3 tidak membagi 12 dan 36 (keduanya hanya punya 2²); salah mengambil pangkat dari 24 saja.
- **D benar** — 12 = 2² × 3; 24 = 2³ × 3; 36 = 2² × 3². Faktor sama: 2² dan 3¹. FPB = 4 × 3 = **12**.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 12 = 2² × 3; 24 = 2³ × 3; 36 = 2² × 3².
  2. Faktor sama: 2² dan 3¹.
  3. FPB = 4 × 3 = **12**.

---

**27.** FPB dari 18, 36, dan 54 adalah ....

- A. 9
- B. 6
- C. **18**
- D. 36

**Kunci: C**
**Pembahasan:**
- **A salah** — 9 membagi ketiganya, tetapi lupa bahwa 2 juga faktor sama di ketiganya (semuanya genap).
- **B salah** — 6 membagi ketiganya, tetapi belum maksimum; hanya mengambil pangkat 3¹, padahal pangkat terkecil sebenarnya 3².
- **C benar** — 18 = 2 × 3²; 36 = 2² × 3²; 54 = 2 × 3³. Faktor sama: 2¹ dan 3². FPB = 2 × 9 = **18**.
- **D salah** — 36 = 2² × 3² tidak membagi 18 dan 54 (keduanya hanya punya 2¹); salah mengambil pangkat dari 36 saja.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 18 = 2 × 3²; 36 = 2² × 3²; 54 = 2 × 3³.
  2. Faktor sama: 2¹ dan 3².
  3. FPB = 2 × 9 = **18**.

---

**28.** FPB dari 14, 28, dan 42 adalah ....

- A. **14**
- B. 7
- C. 2
- D. 28

**Kunci: A**
**Pembahasan:**
- **A benar** — 14 = 2 × 7; 28 = 2² × 7; 42 = 2 × 3 × 7. Faktor sama: 2¹ dan 7¹. FPB = 2 × 7 = **14**.
- **B salah** — 7 membagi ketiganya, tetapi lupa bahwa 2 juga faktor sama di ketiganya.
- **C salah** — 2 membagi ketiganya, tetapi lupa bahwa 7 juga faktor sama di ketiganya.
- **D salah** — 28 = 2² × 7 tidak membagi 14 dan 42 (keduanya hanya punya 2¹); salah mengambil pangkat dari 28 saja.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 14 = 2 × 7; 28 = 2² × 7; 42 = 2 × 3 × 7.
  2. Faktor sama: 2¹ dan 7¹.
  3. FPB = 2 × 7 = **14**.

---

**29.** FPB dari 8, 16, dan 24 adalah ....

- A. 4
- B. 2
- C. 16
- D. **8**

**Kunci: D**
**Pembahasan:**
- **A salah** — 4 = 2² membagi ketiganya, tetapi belum maksimum; masih ada 8 yang juga membagi semuanya.
- **B salah** — 2 membagi ketiganya, tetapi jauh dari maksimum.
- **C salah** — 16 = 2⁴ tidak membagi 24 (24 ÷ 16 bersisa); salah mengambil pangkat dari 16 saja.
- **D benar** — 8 = 2³; 16 = 2⁴; 24 = 2³ × 3. Faktor sama hanya 2, pangkat terkecil 2³ (dari 8 dan 24). FPB = **8**.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 8 = 2³; 16 = 2⁴; 24 = 2³ × 3.
  2. Pangkat terkecil dari 2 adalah 2³.
  3. FPB = **8**.

---

**30.** FPB dari 20, 30, dan 40 adalah ....

- A. 5
- B. 20
- C. **10**
- D. 2

**Kunci: C**
**Pembahasan:**
- **A salah** — 5 membagi ketiganya, tetapi lupa bahwa 2 juga faktor sama di ketiganya.
- **B salah** — 20 = 2² × 5 tidak membagi 30 (30 hanya punya 2¹); salah mengambil pangkat dari 20 saja.
- **C benar** — 20 = 2² × 5; 30 = 2 × 3 × 5; 40 = 2³ × 5. Faktor sama: 2¹ dan 5¹. FPB = 2 × 5 = **10**.
- **D salah** — 2 membagi ketiganya, tetapi lupa bahwa 5 juga faktor sama di ketiganya.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 20 = 2² × 5; 30 = 2 × 3 × 5; 40 = 2³ × 5.
  2. Faktor sama: 2¹ dan 5¹.
  3. FPB = 2 × 5 = **10**.

---

**31.** Bu Ana punya 16 pensil dan 40 penghapus untuk dibagikan sama rata sebagai hadiah kepada siswa berprestasi. Berapa siswa terbanyak yang bisa menerima hadiah?

- A. 4
- B. 5
- C. 10
- D. **8**

**Kunci: D**
**Pembahasan:**
- **A salah** — 4 membagi keduanya, tetapi belum maksimum; hanya mengambil pangkat 2², padahal pangkat terkecil sebenarnya 2³.
- **B salah** — 5 hanya faktor 40, tidak membagi 16.
- **C salah** — 10 hanya faktor 40 (10 × 4), tidak membagi 16 (16 ÷ 10 bersisa).
- **D benar** — Kata kunci "dibagikan sama rata, terbanyak" → FPB(16, 40). 16 = 2⁴; 40 = 2³ × 5. Faktor sama: 2, pangkat terkecil 2³. FPB = **8 siswa**.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, terbanyak" adalah soal FPB; hasil FPB = jumlah penerima/kelompok maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "dibagikan sama rata, terbanyak" → ini soal FPB.
  2. FPB(16, 40) = 8.
  3. **8 siswa**.

---

**32.** Pedagang Pak Karto punya 21 kg beras dan 49 kg gula, akan dikemas ke kantong sama jenis & sama berat sebanyak mungkin. Berapa kantong maksimum yang dapat dibuat?

- A. **7**
- B. 3
- C. 14
- D. 147

**Kunci: A**
**Pembahasan:**
- **A benar** — Kata kunci "dikemas sama berat, sebanyak mungkin" → FPB(21, 49). 21 = 3 × 7; 49 = 7². Faktor sama hanya 7. FPB = **7 kantong**.
- **B salah** — 3 hanya faktor 21, tidak membagi 49.
- **C salah** — 14 bukan faktor 21 (21 ÷ 14 bersisa); bukan faktor persekutuan.
- **D salah** — 147 = KPK(21, 49), bukan FPB; siswa tertukar konsep bagi rata dengan bertemu kembali.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, terbanyak" adalah soal FPB; hasil FPB = jumlah penerima/kelompok maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "dikemas sama berat, sebanyak mungkin" → ini soal FPB.
  2. FPB(21, 49) = 7.
  3. **7 kantong**.

---

**33.** Panitia lomba renang punya 27 bola kasti dan 45 bola voli untuk dibagi rata ke tim sebanyak mungkin tim (tiap tim menerima jenis bola sama banyak). Berapa tim terbanyak?

- A. 3
- B. 5
- C. 15
- D. **9**

**Kunci: D**
**Pembahasan:**
- **A salah** — 3 membagi keduanya, tetapi belum maksimum; hanya mengambil pangkat 3¹, padahal pangkat terkecil sebenarnya 3².
- **B salah** — 5 hanya faktor 45, tidak membagi 27.
- **C salah** — 15 bukan faktor 27 (27 ÷ 15 bersisa); bukan faktor persekutuan.
- **D benar** — Kata kunci "dibagi rata, sebanyak mungkin tim" → FPB(27, 45). 27 = 3³; 45 = 3² × 5. Faktor sama hanya 3, pangkat terkecil 3². FPB = **9 tim**.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, terbanyak" adalah soal FPB; hasil FPB = jumlah penerima/kelompok maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "dibagi rata, sebanyak mungkin tim" → ini soal FPB.
  2. FPB(27, 45) = 9.
  3. **9 tim**.

---

**34.** Bu Rina punya 32 butir telur dan 56 buah pisang untuk dibuat paket kue sama jenis & sama jumlah sebanyak mungkin paket. Berapa paket maksimum yang dapat dibuat?

- A. 4
- B. **8**
- C. 16
- D. 7

**Kunci: B**
**Pembahasan:**
- **A salah** — 4 membagi keduanya, tetapi belum maksimum; hanya mengambil pangkat 2², padahal pangkat terkecil sebenarnya 2³.
- **B benar** — Kata kunci "sama jenis & jumlah, sebanyak mungkin" → FPB(32, 56). 32 = 2⁵; 56 = 2³ × 7. Faktor sama: 2, pangkat terkecil 2³. FPB = **8 paket**.
- **C salah** — 16 bukan faktor 56 (56 ÷ 16 bersisa); salah mengambil pangkat dari 32 saja.
- **D salah** — 7 hanya faktor 56, tidak membagi 32.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, terbanyak" adalah soal FPB; hasil FPB = jumlah penerima/kelompok maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "sama jenis & jumlah, sebanyak mungkin" → ini soal FPB.
  2. FPB(32, 56) = 8.
  3. **8 paket**.

---

**35.** Pak Budi punya 24 bibit mangga dan 54 bibit jambu, akan ditanam per petak sama jenis & sama jumlah sebanyak mungkin petak. Berapa petak maksimum?

- A. 3
- B. 9
- C. **6**
- D. 2

**Kunci: C**
**Pembahasan:**
- **A salah** — 3 membagi keduanya, tetapi lupa bahwa 2 juga faktor sama di keduanya.
- **B salah** — 9 bukan faktor 24 (24 ÷ 9 bersisa); salah mengambil pangkat dari 54 saja.
- **C benar** — Kata kunci "per petak sama jenis & jumlah, sebanyak mungkin" → FPB(24, 54). 24 = 2³ × 3; 54 = 2 × 3³. Faktor sama: 2¹ dan 3¹. FPB = **6 petak**.
- **D salah** — 2 membagi keduanya, tetapi lupa bahwa 3 juga faktor sama di keduanya.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, terbanyak" adalah soal FPB; hasil FPB = jumlah penerima/kelompok maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "per petak sama jenis & jumlah, sebanyak mungkin" → ini soal FPB.
  2. FPB(24, 54) = 6.
  3. **6 petak**.

---

**36.** Koko merayakan ulang tahun dengan 18 permen rasa jeruk dan 63 permen rasa anggur, dibagikan ke kotak sama jenis & sama jumlah sebanyak mungkin kotak. Berapa kotak maksimum yang bisa dibuat?

- A. **9**
- B. 3
- C. 21
- D. 126

**Kunci: A**
**Pembahasan:**
- **A benar** — Kata kunci "dibagikan sama jenis & jumlah, sebanyak mungkin" → FPB(18, 63). 18 = 2 × 3²; 63 = 3² × 7. Faktor sama hanya 3, pangkat terkecil 3². FPB = **9 kotak**.
- **B salah** — 3 membagi keduanya, tetapi belum maksimum; hanya mengambil pangkat 3¹.
- **C salah** — 21 bukan faktor 18 (18 ÷ 21 tidak mungkin, 21 lebih besar); bukan faktor persekutuan.
- **D salah** — 126 = KPK(18, 63), bukan FPB; tertukar konsep.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, terbanyak" adalah soal FPB; hasil FPB = jumlah penerima/kelompok maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "dibagikan sama jenis & jumlah, sebanyak mungkin" → ini soal FPB.
  2. FPB(18, 63) = 9.
  3. **9 kotak**.

---

**37.** Petugas taman menanam 35 bibit pohon jati dan 63 bibit pohon mahoni dalam barisan sama jenis & sama jumlah sebanyak mungkin barisan. Berapa barisan maksimum?

- A. 5
- B. 9
- C. 315
- D. **7**

**Kunci: D**
**Pembahasan:**
- **A salah** — 5 hanya faktor 35, tidak membagi 63.
- **B salah** — 9 hanya faktor 63, tidak membagi 35.
- **C salah** — 315 = KPK(35, 63), bukan FPB; tertukar konsep.
- **D benar** — Kata kunci "sama jenis & jumlah, sebanyak mungkin barisan" → FPB(35, 63). 35 = 5 × 7; 63 = 3² × 7. Faktor sama hanya 7. FPB = **7 barisan**.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, terbanyak" adalah soal FPB; hasil FPB = jumlah penerima/kelompok maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "sama jenis & jumlah, sebanyak mungkin barisan" → ini soal FPB.
  2. FPB(35, 63) = 7.
  3. **7 barisan**.

---

**38.** Ibu Sari punya 16 sendok dan 44 garpu untuk dikemas ke kotak hadiah sama jenis & sama jumlah sebanyak mungkin kotak. Berapa kotak maksimum?

- A. 2
- B. 11
- C. **4**
- D. 176

**Kunci: C**
**Pembahasan:**
- **A salah** — 2 membagi keduanya, tetapi belum maksimum; hanya mengambil pangkat 2¹, padahal pangkat terkecil sebenarnya 2².
- **B salah** — 11 hanya faktor 44, tidak membagi 16.
- **C benar** — Kata kunci "dikemas sama jenis & jumlah, sebanyak mungkin" → FPB(16, 44). 16 = 2⁴; 44 = 2² × 11. Faktor sama hanya 2, pangkat terkecil 2². FPB = **4 kotak**.
- **D salah** — 176 = KPK(16, 44), bukan FPB; tertukar konsep.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, terbanyak" adalah soal FPB; hasil FPB = jumlah penerima/kelompok maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "dikemas sama jenis & jumlah, sebanyak mungkin" → ini soal FPB.
  2. FPB(16, 44) = 4.
  3. **4 kotak**.

---

**39.** Sopir Pak Made mengatur 20 penumpang rute pagi dan 45 penumpang rute sore ke dalam kelompok keberangkatan sama jumlah sebanyak mungkin kelompok. Berapa kelompok maksimum?

- A. **5**
- B. 9
- C. 4
- D. 180

**Kunci: A**
**Pembahasan:**
- **A benar** — Kata kunci "kelompok sama jumlah, sebanyak mungkin" → FPB(20, 45). 20 = 2² × 5; 45 = 3² × 5. Faktor sama hanya 5. FPB = **5 kelompok**.
- **B salah** — 9 hanya faktor 45, tidak membagi 20.
- **C salah** — 4 hanya faktor 20, tidak membagi 45 (45 ganjil terhadap 4).
- **D salah** — 180 = KPK(20, 45), bukan FPB; tertukar konsep.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, terbanyak" adalah soal FPB; hasil FPB = jumlah penerima/kelompok maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "kelompok sama jumlah, sebanyak mungkin" → ini soal FPB.
  2. FPB(20, 45) = 5.
  3. **5 kelompok**.

---

**40.** Kelompok IPA punya 33 ml larutan A dan 55 ml larutan B, akan dibagi ke tabung reaksi sama jenis & sama volume sebanyak mungkin tabung. Berapa tabung maksimum?

- A. 5
- B. 3
- C. **11**
- D. 165

**Kunci: C**
**Pembahasan:**
- **A salah** — 5 hanya faktor 55, tidak membagi 33.
- **B salah** — 3 hanya faktor 33, tidak membagi 55.
- **C benar** — Kata kunci "sama jenis & volume, sebanyak mungkin tabung" → FPB(33, 55). 33 = 3 × 11; 55 = 5 × 11. Faktor sama hanya 11. FPB = **11 tabung**.
- **D salah** — 165 = KPK(33, 55), bukan FPB; tertukar konsep.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, terbanyak" adalah soal FPB; hasil FPB = jumlah penerima/kelompok maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "sama jenis & volume, sebanyak mungkin tabung" → ini soal FPB.
  2. FPB(33, 55) = 11.
  3. **11 tabung**.

---

**41.** FPB dari 11 dan 44 adalah ....

- A. 4
- B. **11**
- C. 44
- D. 1

**Kunci: B**
**Pembahasan:**
- **A salah** — 4 adalah hasil bagi 44 ÷ 11, bukan FPB-nya. Tertukar antara hasil bagi dan faktor.
- **B benar** — Karena 44 habis dibagi 11 (44 ÷ 11 = 4), maka FPB(11, 44) = bilangan yang **lebih kecil** = **11**.
- **C salah** — 44 tidak membagi 11 (11 < 44); tertukar arah pembagian.
- **D salah** — 1 memang faktor persekutuan, tetapi bukan yang terbesar; 11 sendiri juga membagi keduanya.
- **Konsep kunci:** Jika satu bilangan habis membagi bilangan lain, FPB keduanya adalah bilangan yang lebih kecil.
- **Langkah Penyelesaian:**
  1. Cek apakah bilangan lebih besar (44) habis dibagi bilangan lebih kecil (11).
  2. 44 ÷ 11 = 4, habis tanpa sisa.
  3. FPB(11, 44) = **11**.

---

**42.** FPB dari 23 dan 24 adalah ....

- A. **1**
- B. 23
- C. 24
- D. 552

**Kunci: A**
**Pembahasan:**
- **A benar** — 23 dan 24 adalah dua bilangan berurutan (selisih 1). 23 = bilangan prima; 24 = 2³ × 3. Tidak ada faktor prima yang sama. FPB = **1**.
- **B salah** — 23 hanya membagi dirinya sendiri, tidak membagi 24.
- **C salah** — 24 tidak membagi 23 (23 < 24).
- **D salah** — 552 = KPK(23, 24) = 23 × 24. Tertukar dengan KPK.
- **Konsep kunci:** Dua bilangan yang berurutan (selisih 1) selalu memiliki FPB = 1.
- **Langkah Penyelesaian:**
  1. 23 dan 24 berselisih 1 (berurutan).
  2. 23 prima; 24 = 2³ × 3, tidak ada faktor sama.
  3. FPB = **1**.

---

**43.** FPB dari 13 dan 17 adalah ....

- A. 13
- B. 17
- C. **1**
- D. 221

**Kunci: C**
**Pembahasan:**
- **A salah** — 13 tidak membagi 17 (17 ÷ 13 bersisa).
- **B salah** — 17 tidak membagi 13 (13 < 17).
- **C benar** — 13 dan 17 adalah dua bilangan prima berbeda, sehingga tidak punya faktor sama selain 1. FPB = **1**.
- **D salah** — 221 = KPK(13, 17) = 13 × 17. Tertukar dengan KPK.
- **Konsep kunci:** Dua bilangan prima yang berbeda selalu memiliki FPB = 1 (saling prima).
- **Langkah Penyelesaian:**
  1. 13 dan 17 adalah dua bilangan prima yang berbeda.
  2. Tidak ada faktor sama selain 1.
  3. FPB = **1**.

---

**44.** FPB dari 27 dan 27 adalah ....

- A. 1
- B. 3
- C. 9
- D. **27**

**Kunci: D**
**Pembahasan:**
- **A salah** — 1 memang membagi 27, tetapi bukan yang terbesar.
- **B salah** — 3 adalah salah satu faktor 27, tetapi ada faktor lain yang lebih besar (27 sendiri).
- **C salah** — 9 juga faktor 27, tetapi masih ada 27 yang lebih besar dan tetap membagi 27.
- **D benar** — FPB suatu bilangan dengan dirinya sendiri sama dengan bilangan itu: FPB(a, a) = a. FPB(27, 27) = **27**.
- **Konsep kunci:** FPB suatu bilangan dengan dirinya sendiri sama dengan bilangan itu sendiri.
- **Langkah Penyelesaian:**
  1. FPB(a, a) = a.
  2. Untuk a = 27, FPB(27, 27) = **27**.

---

**45.** Pasangan bilangan berikut yang **saling prima** (FPB-nya 1) adalah ....

- A. 8 dan 12
- B. **9 dan 16**
- C. 15 dan 25
- D. 18 dan 24

**Kunci: B**
**Pembahasan:**
- **A salah** — FPB(8, 12) = 4 (8 = 2³, 12 = 2² × 3, faktor sama 2² = 4), bukan 1.
- **B benar** — 9 = 3²; 16 = 2⁴. Tidak ada faktor prima yang sama, jadi FPB(9, 16) = **1** → saling prima, meskipun keduanya bukan bilangan prima.
- **C salah** — FPB(15, 25) = 5 (15 = 3 × 5, 25 = 5², faktor sama 5), bukan 1.
- **D salah** — FPB(18, 24) = 6 (18 = 2 × 3², 24 = 2³ × 3, faktor sama 2 × 3 = 6), bukan 1.
- **Konsep kunci:** Dua bilangan disebut saling prima jika FPB-nya 1 — tidak berarti kedua bilangan itu sendiri harus bilangan prima.
- **Langkah Penyelesaian:**
  1. Faktorkan tiap pasangan secara prima.
  2. Cek apakah ada faktor prima yang sama.
  3. Pasangan tanpa faktor sama (9 dan 16) → FPB = **1**, saling prima.

---

**46.** Pernyataan berikut yang **benar** tentang FPB adalah ....

- A. FPB dihitung dengan mengalikan semua faktor prima berpangkat terbesar.
- B. FPB dua bilangan selalu genap.
- C. **FPB dari dua bilangan prima yang berbeda selalu 1.**
- D. FPB selalu lebih besar daripada bilangan-bilangan yang dicari FPB-nya.

**Kunci: C**
**Pembahasan:**
- **A salah** — Itu cara menghitung **KPK** (pangkat terbesar), bukan FPB (yang memakai pangkat terkecil).
- **B salah** — Tidak selalu; misalnya FPB(9, 15) = 3, sebuah bilangan ganjil.
- **C benar** — Dua bilangan prima berbeda tidak memiliki faktor sama selain 1, sehingga FPB-nya selalu **1**. Contoh: FPB(5, 7) = 1.
- **D salah** — Sebaliknya, FPB selalu **lebih kecil atau sama dengan** bilangan terkecil dalam himpunan, bukan lebih besar.
- **Konsep kunci:** Dua bilangan prima yang berbeda selalu memiliki FPB = 1 (saling prima); FPB memakai pangkat terkecil, bukan terbesar.
- **Langkah Penyelesaian:**
  1. Periksa tiap pernyataan terhadap sifat FPB yang benar.
  2. Pernyataan yang cocok: dua bilangan prima berbeda → FPB = 1.

---

**47.** Suatu bilangan n membagi habis 50 dan 65 sekaligus. Nilai n **terbesar** yang mungkin adalah ....

- A. **5**
- B. 10
- C. 13
- D. 15

**Kunci: A**
**Pembahasan:**
- **A benar** — n terbesar yang membagi habis 50 dan 65 sekaligus adalah FPB(50, 65). 50 = 2 × 5²; 65 = 5 × 13. Faktor sama hanya 5. FPB = **5**.
- **B salah** — 10 membagi 50, tetapi tidak membagi 65 (65 ÷ 10 bersisa).
- **C salah** — 13 membagi 65, tetapi tidak membagi 50 (50 ÷ 13 bersisa).
- **D salah** — 15 tidak membagi 50 maupun 65 (bukan faktor persekutuan sama sekali).
- **Konsep kunci:** "n membagi habis beberapa bilangan sekaligus, nilai n terbesar" berarti mencari FPB dari bilangan-bilangan itu.
- **Langkah Penyelesaian:**
  1. 50 = 2 × 5²; 65 = 5 × 13.
  2. Faktor sama hanya 5.
  3. n terbesar = FPB(50, 65) = **5**.

---

**48.** Lantai berukuran 36 cm × 54 cm akan ditutup ubin persegi berukuran sama tanpa potongan. Ukuran sisi ubin **terbesar** yang mungkin adalah ....

- A. 9 cm
- B. 27 cm
- C. 6 cm
- D. **18 cm**

**Kunci: D**
**Pembahasan:**
- **A salah** — 9 cm membagi keduanya, tetapi belum maksimum; lupa bahwa faktor 2 juga sama pada keduanya.
- **B salah** — 27 cm tidak membagi 36 (36 ÷ 27 bersisa); salah mengambil pangkat 3³ padahal 36 hanya punya 3².
- **C salah** — 6 cm membagi keduanya, tetapi belum maksimum; hanya mengambil pangkat 3¹, padahal pangkat terkecil sebenarnya 3².
- **D benar** — Sisi ubin harus membagi 36 dan 54 → FPB(36, 54). 36 = 2² × 3²; 54 = 2 × 3³. Faktor sama: 2¹ dan 3². FPB = 2 × 9 = **18 cm**.
- **Konsep kunci:** Ukuran ubin/petak persegi terbesar yang pas menutupi lahan dicari dengan FPB dari sisi-sisinya.
- **Langkah Penyelesaian:**
  1. Sisi ubin harus membagi 36 dan 54.
  2. 36 = 2² × 3²; 54 = 2 × 3³.
  3. FPB(36, 54) = 2 × 9 = **18 cm**.

---

**49.** FPB dari 1 dan 37 adalah ....

- A. 37
- B. 19
- C. **1**
- D. 74

**Kunci: C**
**Pembahasan:**
- **A salah** — 37 tidak membagi 1 (1 lebih kecil dari 37); tertukar arah pembagian.
- **B salah** — 19 bukan faktor 1 maupun 37; sekadar tebakan angka tengah.
- **C benar** — Bilangan 1 hanya memiliki satu faktor, yaitu 1 sendiri. Karena 1 selalu membagi bilangan apa pun, FPB dari 1 dengan bilangan berapa pun selalu **1**.
- **D salah** — 74 = KPK(1, 37) = 37 (bukan 74); lagipula ini bukan cara menghitung FPB.
- **Konsep kunci:** FPB dari 1 dan bilangan apa pun selalu 1, karena satu-satunya faktor dari 1 adalah 1 sendiri.
- **Langkah Penyelesaian:**
  1. Faktor dari 1 hanya {1}.
  2. Faktor persekutuan dengan 37 hanya 1.
  3. FPB = **1**.

---

**50.** Tiga tali sepanjang 27 m, 36 m, dan 45 m akan dipotong sama panjang tanpa sisa, sepanjang mungkin. Panjang tiap potongan adalah ....

- A. 3 m
- B. **9 m**
- C. 18 m
- D. 27 m

**Kunci: B**
**Pembahasan:**
- **A salah** — 3 m membagi ketiganya, tetapi belum maksimum; hanya mengambil pangkat 3¹, padahal pangkat terkecil sebenarnya 3².
- **B benar** — Kata kunci "dipotong sama panjang, sepanjang mungkin" → FPB(27, 36, 45). 27 = 3³; 36 = 2² × 3²; 45 = 3² × 5. Faktor sama hanya 3, pangkat terkecil 3². FPB = **9 m**.
- **C salah** — 18 m tidak membagi 27 (27 ÷ 18 bersisa); bukan faktor persekutuan ketiganya.
- **D salah** — 27 m tidak membagi 36 (36 ÷ 27 bersisa); keliru menganggap salah satu panjang tali sebagai jawaban.
- **Konsep kunci:** Soal cerita "dipotong sama panjang, sepanjang mungkin" adalah soal FPB dari semua panjang yang diberikan.
- **Langkah Penyelesaian:**
  1. Kata kunci "dipotong sama panjang, sepanjang mungkin" → ini soal FPB.
  2. FPB(27, 36, 45) = 9.
  3. **9 m**.

---

## PROV · Soal 51-100 (Tingkat Provinsi, C3-C4)

Bagian ini menambah kompleksitas: tiga+ bilangan, bilangan lebih besar, algoritma Euclid, hubungan FPB-KPK, soal dengan sisa pembagian, dan cerita multi-langkah.

---

**51.** FPB dari 112 dan 168 adalah ....

- A. 28
- B. **56**
- C. 168
- D. 336

**Kunci: B**
**Pembahasan:**
- **A salah** — 28 = 2² × 7 membagi keduanya, tetapi belum maksimum; pangkat terkecil dari 2 yang benar adalah 2³, bukan 2².
- **B benar** — 112 = 2⁴ × 7; 168 = 2³ × 3 × 7. Faktor sama hanya 2, pangkat terkecil 2³. FPB = 2³ × 7 = **56**.
- **C salah** — 168 memuat faktor 3 yang tidak dimiliki 112 (112 ganjil terhadap 3); bukan faktor persekutuan.
- **D salah** — 336 = KPK(112, 168), bukan FPB; tertukar arah.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 112 = 2⁴ × 7; 168 = 2³ × 3 × 7.
  2. Faktor sama hanya 2, pangkat terkecil 2³.
  3. FPB = 2³ × 7 = **56**.

---

**52.** FPB dari 98 dan 154 adalah ....

- A. 49
- B. 2
- C. **14**
- D. 1078

**Kunci: C**
**Pembahasan:**
- **A salah** — 49 = 7² tidak membagi 154 (154 hanya punya 7¹); salah mengambil pangkat dari 98 saja.
- **B salah** — 2 membagi keduanya, tetapi belum maksimum; lupa bahwa 7 juga faktor sama.
- **C benar** — 98 = 2 × 7²; 154 = 2 × 7 × 11. Faktor sama: 2¹ dan 7¹ (pangkat terkecil). FPB = 2 × 7 = **14**.
- **D salah** — 1078 = KPK(98, 154), bukan FPB; tertukar konsep.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 98 = 2 × 7²; 154 = 2 × 7 × 11.
  2. Faktor sama: 2¹ dan 7¹.
  3. FPB = 2 × 7 = **14**.

---

**53.** FPB dari 117 dan 156 adalah ....

- A. 117
- B. **39**
- C. 13
- D. 468

**Kunci: B**
**Pembahasan:**
- **A salah** — 117 = 3² × 13 tidak membagi 156 (156 hanya punya 3¹); salah mengambil pangkat 3² dari 117 saja.
- **B benar** — 117 = 3² × 13; 156 = 2² × 3 × 13. Faktor sama: 3¹ dan 13¹ (pangkat terkecil). FPB = 3 × 13 = **39**.
- **C salah** — 13 membagi keduanya, tetapi lupa bahwa 3 juga faktor sama di kedua bilangan.
- **D salah** — 468 = KPK(117, 156), bukan FPB; tertukar arah.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 117 = 3² × 13; 156 = 2² × 3 × 13.
  2. Faktor sama: 3¹ dan 13¹.
  3. FPB = 3 × 13 = **39**.

---

**54.** FPB dari 145 dan 174 adalah ....

- A. 5
- B. 6
- C. **29**
- D. 870

**Kunci: C**
**Pembahasan:**
- **A salah** — 5 hanya faktor 145 (145 = 5 × 29), tidak membagi 174.
- **B salah** — 6 = 2 × 3 hanya faktor 174 (174 = 2 × 3 × 29), tidak membagi 145.
- **C benar** — 145 = 5 × 29; 174 = 2 × 3 × 29. Faktor sama hanya 29. FPB = **29**.
- **D salah** — 870 = KPK(145, 174), bukan FPB; tertukar konsep.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 145 = 5 × 29; 174 = 2 × 3 × 29.
  2. Faktor sama hanya 29.
  3. FPB = **29**.

---

**55.** FPB dari 185 dan 222 adalah ....

- A. 6
- B. **37**
- C. 5
- D. 1110

**Kunci: B**
**Pembahasan:**
- **A salah** — 6 = 2 × 3 hanya faktor 222 (222 = 2 × 3 × 37), tidak membagi 185.
- **B benar** — 185 = 5 × 37; 222 = 2 × 3 × 37. Faktor sama hanya 37. FPB = **37**.
- **C salah** — 5 hanya faktor 185, tidak membagi 222.
- **D salah** — 1110 = KPK(185, 222), bukan FPB; salah arah.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 185 = 5 × 37; 222 = 2 × 3 × 37.
  2. Faktor sama hanya 37.
  3. FPB = **37**.

---

**56.** FPB dari 161 dan 253 adalah ....

- A. 7
- B. 11
- C. 1771
- D. **23**

**Kunci: D**
**Pembahasan:**
- **A salah** — 7 hanya faktor 161 (161 = 7 × 23), tidak membagi 253.
- **B salah** — 11 hanya faktor 253 (253 = 11 × 23), tidak membagi 161.
- **C salah** — 1771 = KPK(161, 253), bukan FPB; tertukar konsep.
- **D benar** — 161 = 7 × 23; 253 = 11 × 23. Faktor sama hanya 23. FPB = **23**.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 161 = 7 × 23; 253 = 11 × 23.
  2. Faktor sama hanya 23.
  3. FPB = **23**.

---

**57.** FPB dari 204 dan 255 adalah ....

- A. 204
- B. 85
- C. **51**
- D. 1020

**Kunci: C**
**Pembahasan:**
- **A salah** — 204 = 2² × 3 × 17 tidak membagi 255 (255 tidak punya faktor 2); bukan faktor persekutuan.
- **B salah** — 85 = 5 × 17 hanya faktor 255, tidak membagi 204 (204 tidak punya faktor 5).
- **C benar** — 204 = 2² × 3 × 17; 255 = 3 × 5 × 17. Faktor sama: 3¹ dan 17¹. FPB = 3 × 17 = **51**.
- **D salah** — 1020 = KPK(204, 255), bukan FPB; tertukar arah.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 204 = 2² × 3 × 17; 255 = 3 × 5 × 17.
  2. Faktor sama: 3¹ dan 17¹.
  3. FPB = 3 × 17 = **51**.

---

**58.** FPB dari 168 dan 252 adalah ....

- A. 42
- B. 168
- C. 504
- D. **84**

**Kunci: D**
**Pembahasan:**
- **A salah** — 42 = 2 × 3 × 7 membagi keduanya, tetapi belum maksimum; lupa bahwa pangkat 2 yang sama sebenarnya 2², bukan 2¹.
- **B salah** — 168 = 2³ × 3 × 7 tidak membagi 252 (252 hanya punya 2²); salah mengambil pangkat 2³ dari 168 saja.
- **C salah** — 504 = KPK(168, 252), bukan FPB; tertukar konsep.
- **D benar** — 168 = 2³ × 3 × 7; 252 = 2² × 3² × 7. Faktor sama: 2² dan 3¹ dan 7¹ (pangkat terkecil masing-masing). FPB = 4 × 3 × 7 = **84**.
- **Konsep kunci:** FPB dicari dengan mengambil faktor prima yang sama pada semua bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 168 = 2³ × 3 × 7; 252 = 2² × 3² × 7.
  2. Pangkat terkecil: 2², 3¹, 7¹.
  3. FPB = 4 × 3 × 7 = **84**.

---

**59.** FPB dari 84, 126, dan 210 adalah ....

- A. 14
- B. 210
- C. **42**
- D. 1260

**Kunci: C**
**Pembahasan:**
- **A salah** — 14 = 2 × 7 membagi ketiganya, tetapi belum maksimum; lupa bahwa 3 juga faktor sama di ketiganya.
- **B salah** — 210 memuat faktor 5 yang tidak dimiliki 84 maupun 126; bukan faktor persekutuan ketiganya.
- **C benar** — 84 = 2² × 3 × 7; 126 = 2 × 3² × 7; 210 = 2 × 3 × 5 × 7. Faktor sama di ketiganya: 2¹, 3¹, 7¹. FPB = 2 × 3 × 7 = **42**.
- **D salah** — 1260 = KPK(84, 126, 210), bukan FPB; tertukar arah.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 84 = 2² × 3 × 7; 126 = 2 × 3² × 7; 210 = 2 × 3 × 5 × 7.
  2. Faktor sama di ketiganya: 2¹, 3¹, 7¹.
  3. FPB = 2 × 3 × 7 = **42**.

---

**60.** FPB dari 99, 132, dan 165 adalah ....

- A. 11
- B. **33**
- C. 99
- D. 1980

**Kunci: B**
**Pembahasan:**
- **A salah** — 11 membagi ketiganya, tetapi lupa bahwa 3 juga faktor sama di ketiganya.
- **B benar** — 99 = 3² × 11; 132 = 2² × 3 × 11; 165 = 3 × 5 × 11. Faktor sama: 3¹ dan 11¹. FPB = 3 × 11 = **33**.
- **C salah** — 99 = 3² × 11 tidak membagi 132 maupun 165 (keduanya hanya punya 3¹); salah mengambil pangkat dari 99 saja.
- **D salah** — 1980 = KPK(99, 132, 165), bukan FPB; tertukar konsep.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 99 = 3² × 11; 132 = 2² × 3 × 11; 165 = 3 × 5 × 11.
  2. Faktor sama: 3¹ dan 11¹.
  3. FPB = 3 × 11 = **33**.

---

**61.** FPB dari 140, 210, dan 280 adalah ....

- A. 35
- B. 140
- C. 840
- D. **70**

**Kunci: D**
**Pembahasan:**
- **A salah** — 35 = 5 × 7 membagi ketiganya, tetapi lupa bahwa 2 juga faktor sama di ketiganya.
- **B salah** — 140 = 2² × 5 × 7 tidak membagi 210 (210 hanya punya 2¹); salah mengambil pangkat dari 140 saja.
- **C salah** — 840 = KPK(140, 210, 280), bukan FPB; tertukar arah.
- **D benar** — 140 = 2² × 5 × 7; 210 = 2 × 3 × 5 × 7; 280 = 2³ × 5 × 7. Faktor sama: 2¹, 5¹, 7¹. FPB = 2 × 5 × 7 = **70**.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 140 = 2² × 5 × 7; 210 = 2 × 3 × 5 × 7; 280 = 2³ × 5 × 7.
  2. Faktor sama: 2¹, 5¹, 7¹.
  3. FPB = 2 × 5 × 7 = **70**.

---

**62.** FPB dari 108, 144, dan 180 adalah ....

- A. 4
- B. **36**
- C. 108
- D. 2160

**Kunci: B**
**Pembahasan:**
- **A salah** — 4 = 2² membagi ketiganya, tetapi belum maksimum; lupa bahwa 3² juga faktor sama di ketiganya.
- **B benar** — 108 = 2² × 3³; 144 = 2⁴ × 3²; 180 = 2² × 3² × 5. Faktor sama: 2² dan 3² (pangkat terkecil). FPB = 4 × 9 = **36**.
- **C salah** — 108 = 2² × 3³ tidak membagi 144 maupun 180 (keduanya hanya punya 3²); salah mengambil pangkat dari 108 saja.
- **D salah** — 2160 = KPK(108, 144, 180), bukan FPB; tertukar konsep.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 108 = 2² × 3³; 144 = 2⁴ × 3²; 180 = 2² × 3² × 5.
  2. Faktor sama: 2² dan 3².
  3. FPB = 4 × 9 = **36**.

---

**63.** FPB dari 75, 125, dan 175 adalah ....

- A. 5
- B. **25**
- C. 125
- D. 2625

**Kunci: B**
**Pembahasan:**
- **A salah** — 5 membagi ketiganya, tetapi belum maksimum; pangkat terkecil dari 5 yang sama sebenarnya 5², bukan 5¹.
- **B benar** — 75 = 3 × 5²; 125 = 5³; 175 = 5² × 7. Faktor sama hanya 5, pangkat terkecil 5² (dari 75 dan 175). FPB = **25**.
- **C salah** — 125 = 5³ tidak membagi 75 maupun 175 (keduanya hanya punya 5²); salah mengambil pangkat dari 125 saja.
- **D salah** — 2625 = KPK(75, 125, 175), bukan FPB; tertukar arah.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 75 = 3 × 5²; 125 = 5³; 175 = 5² × 7.
  2. Pangkat terkecil dari 5 adalah 5².
  3. FPB = **25**.

---

**64.** FPB dari 63, 105, dan 147 adalah ....

- A. 7
- B. 2205
- C. **21**
- D. 63

**Kunci: C**
**Pembahasan:**
- **A salah** — 7 membagi ketiganya, tetapi lupa bahwa 3 juga faktor sama di ketiganya.
- **B salah** — 2205 = KPK(63, 105, 147), bukan FPB; tertukar konsep.
- **C benar** — 63 = 3² × 7; 105 = 3 × 5 × 7; 147 = 3 × 7². Faktor sama: 3¹ dan 7¹ (pangkat terkecil). FPB = 3 × 7 = **21**.
- **D salah** — 63 = 3² × 7 tidak membagi 105 maupun 147 (keduanya hanya punya 3¹); salah mengambil pangkat dari 63 saja.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 63 = 3² × 7; 105 = 3 × 5 × 7; 147 = 3 × 7².
  2. Faktor sama: 3¹ dan 7¹.
  3. FPB = 3 × 7 = **21**.

---

**65.** FPB dari 200, 240, dan 280 adalah ....

- A. **40**
- B. 20
- C. 200
- D. 8400

**Kunci: A**
**Pembahasan:**
- **A benar** — 200 = 2³ × 5²; 240 = 2⁴ × 3 × 5; 280 = 2³ × 5 × 7. Faktor sama: 2³ dan 5¹ (pangkat terkecil masing-masing). FPB = 8 × 5 = **40**.
- **B salah** — 20 = 2² × 5 membagi ketiganya, tetapi belum maksimum; pangkat terkecil dari 2 yang benar adalah 2³, bukan 2².
- **C salah** — 200 = 2³ × 5² tidak membagi 240 maupun 280 (keduanya hanya punya 5¹); salah mengambil pangkat dari 200 saja.
- **D salah** — 8400 = KPK(200, 240, 280), bukan FPB; tertukar arah.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 200 = 2³ × 5²; 240 = 2⁴ × 3 × 5; 280 = 2³ × 5 × 7.
  2. Faktor sama: 2³ dan 5¹.
  3. FPB = 8 × 5 = **40**.

---

**66.** FPB dari 135, 189, dan 216 adalah ....

- A. 9
- B. 135
- C. 7560
- D. **27**

**Kunci: D**
**Pembahasan:**
- **A salah** — 9 = 3² membagi ketiganya, tetapi belum maksimum; pangkat terkecil dari 3 yang sama sebenarnya 3³, bukan 3².
- **B salah** — 135 = 3³ × 5 tidak membagi 189 maupun 216 (keduanya tidak punya faktor 5); salah menyertakan 5.
- **C salah** — 7560 = KPK(135, 189, 216), bukan FPB; tertukar konsep.
- **D benar** — 135 = 3³ × 5; 189 = 3³ × 7; 216 = 2³ × 3³. Faktor sama hanya 3, pangkat terkecil 3³. FPB = **27**.
- **Konsep kunci:** FPB dari tiga bilangan dicari dengan mengambil faktor prima yang sama di SEMUA bilangan, dengan pangkat terkecil.
- **Langkah Penyelesaian:**
  1. 135 = 3³ × 5; 189 = 3³ × 7; 216 = 2³ × 3³.
  2. Faktor sama hanya 3, pangkat terkecil 3³.
  3. FPB = **27**.

---

**67.** Dengan Algoritma Euclid, FPB(252, 105) dihitung: 252 = 2 × 105 + 42; 105 = 2 × 42 + 21; 42 = 2 × 21 + 0. Maka FPB(252, 105) = ....

- A. **21**
- B. 42
- C. 105
- D. 1260

**Kunci: A**
**Pembahasan:**
- **A benar** — Pembagi TERAKHIR sebelum sisa menjadi 0 adalah 21. FPB(252, 105) = **21**.
- **B salah** — 42 adalah sisa pada langkah pertama, bukan pembagi terakhir; berhenti satu langkah terlalu awal.
- **C salah** — 105 adalah salah satu bilangan awal, bukan hasil akhir algoritma.
- **D salah** — 1260 = KPK(252, 105), bukan FPB; tertukar konsep.
- **Konsep kunci:** Algoritma Euclid: FPB adalah pembagi TERAKHIR yang digunakan tepat sebelum sisa pembagian menjadi 0.
- **Langkah Penyelesaian:**
  1. 252 = 2 × 105 + 42.
  2. 105 = 2 × 42 + 21.
  3. 42 = 2 × 21 + 0 → FPB = **21**.

---

**68.** Dengan Algoritma Euclid, tentukan FPB(315, 189).

- A. 126
- B. **63**
- C. 945
- D. 189

**Kunci: B**
**Pembahasan:**
- **A salah** — 126 adalah sisa pada langkah pertama, bukan pembagi terakhir; berhenti satu langkah terlalu awal.
- **B benar** — 315 = 1 × 189 + 126; 189 = 1 × 126 + 63; 126 = 2 × 63 + 0. Pembagi terakhir = **63**.
- **C salah** — 945 = KPK(315, 189), bukan FPB; tertukar arah.
- **D salah** — 189 adalah salah satu bilangan awal, bukan hasil akhir algoritma.
- **Konsep kunci:** Algoritma Euclid: FPB(a, b) = FPB(b, sisa a÷b), diulang sampai sisa = 0; pembagi terakhir adalah FPB.
- **Langkah Penyelesaian:**
  1. 315 = 1 × 189 + 126.
  2. 189 = 1 × 126 + 63.
  3. 126 = 2 × 63 + 0 → FPB = **63**.

---

**69.** Dengan Algoritma Euclid, tentukan FPB(196, 84).

- A. 84
- B. 2
- C. **28**
- D. 588

**Kunci: C**
**Pembahasan:**
- **A salah** — 84 adalah salah satu bilangan awal (juga pembagi pada langkah pertama), bukan FPB-nya; siswa berhenti terlalu awal tanpa melanjutkan algoritma.
- **B salah** — 2 adalah hasil bagi (quotient) pada langkah pertama (196 ÷ 84 = 2 sisa 28), bukan FPB-nya; tertukar antara hasil bagi dan sisa.
- **C benar** — 196 = 2 × 84 + 28; 84 = 3 × 28 + 0. Pembagi terakhir = **28**.
- **D salah** — 588 = KPK(196, 84), bukan FPB; tertukar konsep.
- **Konsep kunci:** Algoritma Euclid: FPB(a, b) = FPB(b, sisa a÷b), diulang sampai sisa = 0; pembagi terakhir adalah FPB.
- **Langkah Penyelesaian:**
  1. 196 = 2 × 84 + 28.
  2. 84 = 3 × 28 + 0 → FPB = **28**.

---

**70.** Dengan Algoritma Euclid, tentukan FPB(273, 195).

- A. 78
- B. **39**
- C. 1
- D. 1365

**Kunci: B**
**Pembahasan:**
- **A salah** — 78 adalah sisa pada langkah pertama, bukan pembagi terakhir; berhenti satu langkah terlalu awal.
- **B benar** — 273 = 1 × 195 + 78; 195 = 2 × 78 + 39; 78 = 2 × 39 + 0. Pembagi terakhir = **39**.
- **C salah** — 1 adalah hasil bagi (quotient) pada langkah pertama, bukan FPB-nya.
- **D salah** — 1365 = KPK(273, 195), bukan FPB; tertukar arah.
- **Konsep kunci:** Algoritma Euclid: FPB(a, b) = FPB(b, sisa a÷b), diulang sampai sisa = 0; pembagi terakhir adalah FPB.
- **Langkah Penyelesaian:**
  1. 273 = 1 × 195 + 78.
  2. 195 = 2 × 78 + 39.
  3. 78 = 2 × 39 + 0 → FPB = **39**.

---

**71.** Dengan Algoritma Euclid, tentukan FPB(238, 154).

- A. **14**
- B. 70
- C. 84
- D. 2618

**Kunci: A**
**Pembahasan:**
- **A benar** — 238 = 1×154+84; 154 = 1×84+70; 84 = 1×70+14; 70 = 5×14+0. Pembagi terakhir = **14**.
- **B salah** — 70 adalah sisa pada langkah kedua, bukan pembagi terakhir; berhenti satu langkah terlalu awal.
- **C salah** — 84 adalah sisa pada langkah pertama, bukan pembagi terakhir; berhenti dua langkah terlalu awal.
- **D salah** — 2618 = KPK(238, 154), bukan FPB; tertukar konsep.
- **Konsep kunci:** Algoritma Euclid cocok untuk bilangan besar: ulangi pembagian dengan sisa sampai sisa = 0; pembagi terakhir adalah FPB.
- **Langkah Penyelesaian:**
  1. 238 = 1 × 154 + 84.
  2. 154 = 1 × 84 + 70.
  3. 84 = 1 × 70 + 14.
  4. 70 = 5 × 14 + 0 → FPB = **14**.

---

**72.** Diketahui FPB(a, 36) = 12 dan KPK(a, 36) = 144. Nilai a adalah ....

- A. 120
- B. **48**
- C. 12
- D. 36

**Kunci: B**
**Pembahasan:**
- **A salah** — Umpan hasil penjumlahan/pengurangan sembarang (12 + 144 − 36 = 120) tanpa memakai rumus FPB × KPK = a × b.
- **B benar** — Rumus FPB × KPK = a × b, jadi a = (12 × 144) ÷ 36 = 1728 ÷ 36 = **48**. Cek: FPB(48, 36) = 12 ✓, KPK(48, 36) = 144 ✓.
- **C salah** — Menyalin nilai FPB (12) sebagai jawaban, bukan menghitung a.
- **D salah** — Menyalin bilangan yang sudah diketahui (36) sebagai jawaban, tanpa menghitung a.
- **Konsep kunci:** Rumus emas FPB(a,b) × KPK(a,b) = a × b bisa dibalik untuk mencari salah satu bilangan jika FPB, KPK, dan bilangan lainnya diketahui.
- **Langkah Penyelesaian:**
  1. a × 36 = FPB × KPK = 12 × 144 = 1728.
  2. a = 1728 ÷ 36 = **48**.

---

**73.** Diketahui FPB(a, 60) = 15 dan KPK(a, 60) = 300. Nilai a adalah ....

- A. 20
- B. 3
- C. 60
- D. **75**

**Kunci: D**
**Pembahasan:**
- **A salah** — Membalik rumus secara keliru: 300 ÷ 15 = 20, tanpa mengalikan dengan 60 terlebih dahulu.
- **B salah** — Menghitung 15 × 60 ÷ 300 = 3, membalik posisi pembagian dalam rumus.
- **C salah** — Menyalin bilangan yang sudah diketahui (60) sebagai jawaban, tanpa menghitung a.
- **D benar** — a × 60 = FPB × KPK = 15 × 300 = 4500. a = 4500 ÷ 60 = **75**. Cek: FPB(75, 60) = 15 ✓, KPK(75, 60) = 300 ✓.
- **Konsep kunci:** Rumus emas FPB(a,b) × KPK(a,b) = a × b bisa dibalik untuk mencari salah satu bilangan jika FPB, KPK, dan bilangan lainnya diketahui.
- **Langkah Penyelesaian:**
  1. a × 60 = FPB × KPK = 15 × 300 = 4500.
  2. a = 4500 ÷ 60 = **75**.

---

**74.** Diketahui FPB(84, b) = 21 dan KPK(84, b) = 252. Nilai b adalah ....

- A. **63**
- B. 84
- C. 189
- D. 21

**Kunci: A**
**Pembahasan:**
- **A benar** — b × 84 = FPB × KPK = 21 × 252 = 5292. b = 5292 ÷ 84 = **63**. Cek: FPB(84, 63) = 21 ✓, KPK(84, 63) = 252 ✓.
- **B salah** — Menyalin bilangan yang sudah diketahui (84) sebagai jawaban, tanpa menghitung b.
- **C salah** — Umpan hasil penjumlahan/pengurangan sembarang (252 − 84 + 21 = 189) tanpa memakai rumus yang benar.
- **D salah** — Menyalin nilai FPB (21) sebagai jawaban, bukan menghitung b.
- **Konsep kunci:** Rumus emas FPB(a,b) × KPK(a,b) = a × b bisa dibalik untuk mencari salah satu bilangan jika FPB, KPK, dan bilangan lainnya diketahui.
- **Langkah Penyelesaian:**
  1. b × 84 = FPB × KPK = 21 × 252 = 5292.
  2. b = 5292 ÷ 84 = **63**.

---

**75.** Dua bilangan m dan n memiliki FPB = 20 dan hasil kali m × n = 2.000. Nilai KPK(m, n) adalah ....

- A. 40000
- B. **100**
- C. 20
- D. 2000

**Kunci: B**
**Pembahasan:**
- **A salah** — Mengalikan 2000 × 20 = 40000, padahal seharusnya membagi.
- **B benar** — Rumus FPB × KPK = m × n, jadi KPK = m × n ÷ FPB = 2000 ÷ 20 = **100**.
- **C salah** — Menyalin nilai FPB (20) sebagai jawaban, bukan menghitung KPK.
- **D salah** — Menyalin hasil kali m × n (2000) sebagai jawaban, lupa membaginya dengan FPB.
- **Konsep kunci:** Rumus emas FPB(a,b) × KPK(a,b) = a × b berlaku untuk dua bilangan berapa pun, tidak perlu tahu nilai m dan n masing-masing.
- **Langkah Penyelesaian:**
  1. FPB × KPK = m × n.
  2. KPK = 2000 ÷ 20 = **100**.

---

**76.** FPB dua bilangan adalah 27 dan KPK-nya 486. Jika salah satu bilangan adalah 54, bilangan lainnya adalah ....

- A. 9
- B. 54
- C. **243**
- D. 27

**Kunci: C**
**Pembahasan:**
- **A salah** — Menghitung 486 ÷ 54 = 9, lupa mengalikan dengan FPB (27) terlebih dahulu.
- **B salah** — Menyalin bilangan yang sudah diketahui (54) sebagai jawaban.
- **C benar** — Hasil kali kedua bilangan = FPB × KPK = 27 × 486 = 13122. Bilangan lainnya = 13122 ÷ 54 = **243**. Cek: FPB(54, 243) = 27 ✓, KPK(54, 243) = 486 ✓.
- **D salah** — Menyalin nilai FPB (27) sebagai jawaban, bukan menghitung bilangan yang dicari.
- **Konsep kunci:** Rumus emas FPB(a,b) × KPK(a,b) = a × b bisa dibalik untuk mencari salah satu bilangan jika FPB, KPK, dan bilangan lainnya diketahui.
- **Langkah Penyelesaian:**
  1. Hasil kali kedua bilangan = 27 × 486 = 13122.
  2. Bilangan lainnya = 13122 ÷ 54 = **243**.

---

**77.** Diketahui FPB(a, 48) = 8, dengan a bilangan dua angka TERBESAR yang mungkin (a ≠ 48). Nilai a adalah ....

- A. 96
- B. 80
- C. 72
- D. **88**

**Kunci: D**
**Pembahasan:**
- **A salah** — 96 = 2⁵ × 3 memang kelipatan 8 terbesar dua angka, tetapi FPB(96, 48) = 48 (karena 48 = 2⁴ × 3 membagi habis 96), bukan 8 — melanggar syarat soal.
- **B salah** — 80 = 2⁴ × 5, sehingga FPB(80, 48) = 2⁴ = 16, bukan 8 — pangkat 2-nya terlalu besar.
- **C salah** — 72 = 2³ × 3², sehingga FPB(72, 48) = 2³ × 3 = 24, bukan 8 — masih menyisakan faktor 3 yang sama.
- **D benar** — 88 = 2³ × 11. FPB(88, 48): 48 = 2⁴ × 3, faktor sama hanya 2, pangkat terkecil 2³. FPB = **8**, dan 88 adalah bilangan dua angka terbesar yang memenuhi (96, 80, 72 semuanya gagal karena FPB-nya bukan 8).
- **Konsep kunci:** Saat mencari bilangan terbesar dengan FPB tertentu terhadap bilangan lain, cek SETIAP kandidat dari yang terbesar — jangan asumsikan kelipatan terbesar dari FPB otomatis memenuhi syarat.
- **Langkah Penyelesaian:**
  1. Coba dari dua angka terbesar yang kelipatan 8: 96 (gagal, FPB = 48), 88 (FPB = 8 ✓).
  2. a = **88**.

---

**78.** Pak Joko, peternak unggas, memiliki 143 butir telur ayam dan 187 butir telur bebek. Ia ingin mengemasnya ke dalam boks yang berisi jenis telur sama dan jumlah sama, sebanyak-banyaknya. Berapa boks maksimum yang dapat dibuat?

- A. **11**
- B. 13
- C. 17
- D. 2431

**Kunci: A**
**Pembahasan:**
- **A benar** — Kata kunci "sama jenis & jumlah, sebanyak-banyaknya" → FPB(143, 187). 143 = 11 × 13; 187 = 11 × 17. Faktor sama hanya 11. FPB = **11 boks**.
- **B salah** — 13 hanya faktor 143, tidak membagi 187.
- **C salah** — 17 hanya faktor 187, tidak membagi 143.
- **D salah** — 2431 = KPK(143, 187), bukan FPB; tertukar konsep.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, sebanyak-banyaknya" adalah soal FPB; hasil FPB = jumlah kelompok/wadah maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "sama jenis & jumlah, sebanyak-banyaknya" → ini soal FPB.
  2. FPB(143, 187) = 11.
  3. **11 boks**.

---

**79.** Panitia perkemahan pramuka menyiapkan 198 batang lilin dan 264 kotak korek api untuk dibagikan ke tiap regu, sama jenis & sama jumlah, sebanyak-banyaknya. Berapa regu terbanyak yang dapat menerima?

- A. 22
- B. 33
- C. **66**
- D. 792

**Kunci: C**
**Pembahasan:**
- **A salah** — 22 = 2 × 11 membagi keduanya, tetapi belum maksimum; lupa bahwa 3 juga faktor sama.
- **B salah** — 33 = 3 × 11 membagi keduanya, tetapi belum maksimum; lupa bahwa 2 juga faktor sama.
- **C benar** — 198 = 2 × 3² × 11; 264 = 2³ × 3 × 11. Faktor sama: 2¹, 3¹, 11¹. FPB = 2 × 3 × 11 = **66 regu**.
- **D salah** — 792 = KPK(198, 264), bukan FPB; tertukar arah.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, sebanyak-banyaknya" adalah soal FPB; hasil FPB = jumlah kelompok/wadah maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "sama jenis & jumlah, sebanyak-banyaknya" → ini soal FPB.
  2. FPB(198, 264) = 66.
  3. **66 regu**.

---

**80.** Toko roti "Harum Manis" memiliki 216 roti tawar dan 324 roti manis, akan dikemas ke keranjang sama jenis & sama jumlah, sebanyak-banyaknya. Berapa keranjang maksimum yang dapat dibuat?

- A. 36
- B. 54
- C. 648
- D. **108**

**Kunci: D**
**Pembahasan:**
- **A salah** — 36 = 2² × 3² membagi keduanya, tetapi belum maksimum; pangkat terkecil dari 3 yang sama sebenarnya 3³, bukan 3².
- **B salah** — 54 = 2 × 3³ membagi keduanya, tetapi belum maksimum; pangkat terkecil dari 2 yang sama sebenarnya 2², bukan 2¹.
- **C salah** — 648 = KPK(216, 324), bukan FPB; tertukar konsep.
- **D benar** — 216 = 2³ × 3³; 324 = 2² × 3⁴. Faktor sama: 2² dan 3³. FPB = 4 × 27 = **108 keranjang**.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, sebanyak-banyaknya" adalah soal FPB; hasil FPB = jumlah kelompok/wadah maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "sama jenis & jumlah, sebanyak-banyaknya" → ini soal FPB.
  2. FPB(216, 324) = 108.
  3. **108 keranjang**.

---

**81.** Sebuah unit donor darah memiliki 152 kantong darah golongan A dan 228 kantong darah golongan B, akan disimpan ke lemari pendingin dengan jumlah tiap golongan sama banyak, sebanyak-banyaknya lemari. Berapa lemari maksimum yang dibutuhkan?

- A. **76**
- B. 19
- C. 38
- D. 456

**Kunci: A**
**Pembahasan:**
- **A benar** — 152 = 2³ × 19; 228 = 2² × 3 × 19. Faktor sama: 2² dan 19¹. FPB = 4 × 19 = **76 lemari**.
- **B salah** — 19 membagi keduanya, tetapi belum maksimum; lupa bahwa 2² juga faktor sama.
- **C salah** — 38 = 2 × 19 membagi keduanya, tetapi belum maksimum; pangkat terkecil dari 2 yang sama sebenarnya 2², bukan 2¹.
- **D salah** — 456 = KPK(152, 228), bukan FPB; tertukar arah.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, sebanyak-banyaknya" adalah soal FPB; hasil FPB = jumlah kelompok/wadah maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "jumlah sama banyak, sebanyak-banyaknya" → ini soal FPB.
  2. FPB(152, 228) = 76.
  3. **76 lemari**.

---

**82.** Sebuah kelompok pramuka membawa 245 batang bambu dan 315 batang rotan untuk diikat menjadi bundel, sama jenis & sama jumlah tiap bundel, sebanyak-banyaknya. Berapa bundel maksimum yang dapat dibuat?

- A. 5
- B. 7
- C. 2205
- D. **35**

**Kunci: D**
**Pembahasan:**
- **A salah** — 5 membagi keduanya, tetapi lupa bahwa 7 juga faktor sama di keduanya.
- **B salah** — 7 membagi keduanya, tetapi lupa bahwa 5 juga faktor sama di keduanya.
- **C salah** — 2205 = KPK(245, 315), bukan FPB; tertukar konsep.
- **D benar** — 245 = 5 × 7²; 315 = 3² × 5 × 7. Faktor sama: 5¹ dan 7¹. FPB = 5 × 7 = **35 bundel**.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, sebanyak-banyaknya" adalah soal FPB; hasil FPB = jumlah kelompok/wadah maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "sama jenis & jumlah, sebanyak-banyaknya" → ini soal FPB.
  2. FPB(245, 315) = 35.
  3. **35 bundel**.

---

**83.** Panitia lomba sains sekolah menyiapkan 168 piagam, 210 medali, dan 252 pin untuk dibagikan ke sekolah-sekolah peserta, sama jenis & sama jumlah, sebanyak-banyaknya. Berapa sekolah terbanyak yang dapat menerima?

- A. 14
- B. 21
- C. **42**
- D. 2520

**Kunci: C**
**Pembahasan:**
- **A salah** — 14 = 2 × 7 membagi ketiganya, tetapi belum maksimum; lupa bahwa 3 juga faktor sama di ketiganya.
- **B salah** — 21 = 3 × 7 membagi ketiganya, tetapi belum maksimum; lupa bahwa 2 juga faktor sama di ketiganya.
- **C benar** — 168 = 2³ × 3 × 7; 210 = 2 × 3 × 5 × 7; 252 = 2² × 3² × 7. Faktor sama: 2¹, 3¹, 7¹. FPB = 2 × 3 × 7 = **42 sekolah**.
- **D salah** — 2520 adalah kelipatan besar (bukan FPB); tertukar arah dengan KPK.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, sebanyak-banyaknya" adalah soal FPB, berlaku juga untuk tiga jenis barang sekaligus.
- **Langkah Penyelesaian:**
  1. Kata kunci "sama jenis & jumlah, sebanyak-banyaknya" → ini soal FPB tiga bilangan.
  2. FPB(168, 210, 252) = 42.
  3. **42 sekolah**.

---

**84.** Kepala sekolah membagikan 174 buku tulis dan 261 pensil kepada siswa berprestasi, sama jenis & sama jumlah, sebanyak-banyaknya. Berapa siswa terbanyak yang dapat menerima?

- A. **87**
- B. 3
- C. 29
- D. 522

**Kunci: A**
**Pembahasan:**
- **A benar** — 174 = 2 × 3 × 29; 261 = 3² × 29. Faktor sama: 3¹ dan 29¹. FPB = 3 × 29 = **87 siswa**.
- **B salah** — 3 membagi keduanya, tetapi lupa bahwa 29 juga faktor sama di keduanya.
- **C salah** — 29 membagi keduanya, tetapi lupa bahwa 3 juga faktor sama di keduanya.
- **D salah** — 522 = KPK(174, 261), bukan FPB; tertukar konsep.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, sebanyak-banyaknya" adalah soal FPB; hasil FPB = jumlah penerima maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "sama jenis & jumlah, sebanyak-banyaknya" → ini soal FPB.
  2. FPB(174, 261) = 87.
  3. **87 siswa**.

---

**85.** Panitia bazar amal menyiapkan 145 topi dan 232 syal untuk dibagikan ke pengunjung, sama jenis & sama jumlah, sebanyak-banyaknya. Berapa pengunjung terbanyak yang dapat menerima?

- A. 5
- B. 8
- C. 1160
- D. **29**

**Kunci: D**
**Pembahasan:**
- **A salah** — 5 hanya faktor 145, tidak membagi 232.
- **B salah** — 8 = 2³ hanya faktor 232, tidak membagi 145 (145 ganjil).
- **C salah** — 1160 = KPK(145, 232), bukan FPB; tertukar arah.
- **D benar** — 145 = 5 × 29; 232 = 2³ × 29. Faktor sama hanya 29. FPB = **29 pengunjung**.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, sebanyak-banyaknya" adalah soal FPB; hasil FPB = jumlah penerima maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "sama jenis & jumlah, sebanyak-banyaknya" → ini soal FPB.
  2. FPB(145, 232) = 29.
  3. **29 pengunjung**.

---

**86.** Sebuah perusahaan konveksi memiliki 155 baju dan 217 celana, akan dikirim ke gudang cabang dengan jumlah sama tiap jenis, sebanyak-banyaknya gudang. Berapa gudang cabang maksimum yang dapat menerima kiriman?

- A. 5
- B. 7
- C. **31**
- D. 1085

**Kunci: C**
**Pembahasan:**
- **A salah** — 5 hanya faktor 155, tidak membagi 217.
- **B salah** — 7 hanya faktor 217, tidak membagi 155.
- **C benar** — 155 = 5 × 31; 217 = 7 × 31. Faktor sama hanya 31. FPB = **31 gudang**.
- **D salah** — 1085 = KPK(155, 217), bukan FPB; tertukar konsep.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, sebanyak-banyaknya" adalah soal FPB; hasil FPB = jumlah penerima maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "jumlah sama, sebanyak-banyaknya" → ini soal FPB.
  2. FPB(155, 217) = 31.
  3. **31 gudang**.

---

**87.** Panitia pemilihan ketua OSIS menyiapkan 189 surat suara dan 297 amplop, akan dibagikan ke tiap bilik suara, sama jenis & sama jumlah, sebanyak-banyaknya. Berapa bilik terbanyak yang dapat dilayani?

- A. **27**
- B. 9
- C. 63
- D. 2079

**Kunci: A**
**Pembahasan:**
- **A benar** — 189 = 3³ × 7; 297 = 3³ × 11. Faktor sama hanya 3, pangkat terkecil 3³. FPB = **27 bilik**.
- **B salah** — 9 = 3² membagi keduanya, tetapi belum maksimum; pangkat terkecil dari 3 yang sama sebenarnya 3³, bukan 3².
- **C salah** — 63 = 3² × 7 tidak membagi 297 (297 tidak punya faktor 7); salah menyertakan 7 dari 189 saja.
- **D salah** — 2079 = KPK(189, 297), bukan FPB; tertukar arah.
- **Konsep kunci:** Soal cerita "dibagi rata/sama banyak, sebanyak-banyaknya" adalah soal FPB; hasil FPB = jumlah kelompok/wadah maksimum.
- **Langkah Penyelesaian:**
  1. Kata kunci "sama jenis & jumlah, sebanyak-banyaknya" → ini soal FPB.
  2. FPB(189, 297) = 27.
  3. **27 bilik**.

---

**88.** Tiga potong pipa besi sepanjang 234 cm, 312 cm, dan 390 cm akan dipotong sama panjang tanpa sisa, sepanjang mungkin. Panjang tiap potongan adalah ....

- A. **78 cm**
- B. 39 cm
- C. 26 cm
- D. 1170 cm

**Kunci: A**
**Pembahasan:**
- **A benar** — 234 = 2 × 3² × 13; 312 = 2³ × 3 × 13; 390 = 2 × 3 × 5 × 13. Faktor sama: 2¹, 3¹, 13¹. FPB = 2 × 3 × 13 = **78 cm**.
- **B salah** — 39 = 3 × 13 membagi ketiganya, tetapi lupa bahwa 2 juga faktor sama di ketiganya.
- **C salah** — 26 = 2 × 13 membagi ketiganya, tetapi lupa bahwa 3 juga faktor sama di ketiganya.
- **D salah** — 1170 adalah kelipatan besar (KPK-style), bukan FPB; tertukar arah.
- **Konsep kunci:** Soal cerita "dipotong sama panjang, sepanjang mungkin" adalah soal FPB dari semua panjang yang diberikan.
- **Langkah Penyelesaian:**
  1. Kata kunci "dipotong sama panjang, sepanjang mungkin" → ini soal FPB.
  2. FPB(234, 312, 390) = 78.
  3. **78 cm**.

---

**89.** Sebuah lapangan berukuran 252 m × 336 m akan dipetak menjadi kotak-kotak persegi berukuran sama tanpa sisa lahan. Ukuran sisi kotak **terbesar** yang mungkin adalah ....

- A. 28 m
- B. 63 m
- C. 336 m
- D. **84 m**

**Kunci: D**
**Pembahasan:**
- **A salah** — 28 = 2² × 7 membagi keduanya, tetapi belum maksimum; lupa bahwa 3 juga faktor sama di keduanya.
- **B salah** — 63 = 3² × 7 tidak membagi 336 (336 hanya punya 3¹); salah mengambil pangkat 3² dari 252 saja.
- **C salah** — 336 tidak membagi 252 (252 < 336); keliru menganggap salah satu ukuran lapangan sebagai jawaban.
- **D benar** — 252 = 2² × 3² × 7; 336 = 2⁴ × 3 × 7. Faktor sama: 2², 3¹, 7¹. FPB = 4 × 3 × 7 = **84 m**.
- **Konsep kunci:** Ukuran petak/ubin persegi terbesar yang pas menutupi lahan dicari dengan FPB dari sisi-sisinya.
- **Langkah Penyelesaian:**
  1. Sisi kotak harus membagi 252 dan 336.
  2. 252 = 2² × 3² × 7; 336 = 2⁴ × 3 × 7.
  3. FPB(252, 336) = 4 × 3 × 7 = **84 m**.

---

**90.** Kain sepanjang 246 cm dan kain lain sepanjang 328 cm akan dipotong sama panjang tanpa sisa, sepanjang mungkin, untuk taplak meja. Panjang tiap potongan adalah ....

- A. 41 cm
- B. 2 cm
- C. **82 cm**
- D. 984 cm

**Kunci: C**
**Pembahasan:**
- **A salah** — 41 membagi keduanya, tetapi lupa bahwa 2 juga faktor sama di keduanya.
- **B salah** — 2 membagi keduanya, tetapi lupa bahwa 41 juga faktor sama di keduanya.
- **C benar** — 246 = 2 × 3 × 41; 328 = 2³ × 41. Faktor sama: 2¹ dan 41¹. FPB = 2 × 41 = **82 cm**.
- **D salah** — 984 adalah kelipatan besar (KPK-style), bukan FPB; tertukar arah.
- **Konsep kunci:** Soal cerita "dipotong sama panjang, sepanjang mungkin" adalah soal FPB dari semua panjang yang diberikan.
- **Langkah Penyelesaian:**
  1. Kata kunci "dipotong sama panjang, sepanjang mungkin" → ini soal FPB.
  2. FPB(246, 328) = 82.
  3. **82 cm**.

---

**91.** Sebuah dinding berukuran 315 cm × 405 cm akan dipasangi keramik persegi berukuran sama tanpa ada keramik yang dipotong. Ukuran sisi keramik **terbesar** yang dapat digunakan adalah ....

- A. **45 cm**
- B. 9 cm
- C. 135 cm
- D. 15 cm

**Kunci: A**
**Pembahasan:**
- **A benar** — 315 = 3² × 5 × 7; 405 = 3⁴ × 5. Faktor sama: 3² dan 5¹. FPB = 9 × 5 = **45 cm**.
- **B salah** — 9 = 3² membagi keduanya, tetapi belum maksimum; lupa bahwa 5 juga faktor sama.
- **C salah** — 135 = 3³ × 5 tidak membagi 315 (315 hanya punya 3²); salah mengambil pangkat 3³ dari 405 saja.
- **D salah** — 15 = 3 × 5 membagi keduanya, tetapi belum maksimum; pangkat terkecil dari 3 yang sama sebenarnya 3², bukan 3¹.
- **Konsep kunci:** Ukuran ubin/keramik persegi terbesar yang pas menutupi lahan dicari dengan FPB dari sisi-sisinya.
- **Langkah Penyelesaian:**
  1. Sisi keramik harus membagi 315 dan 405.
  2. 315 = 3² × 5 × 7; 405 = 3⁴ × 5.
  3. FPB(315, 405) = 9 × 5 = **45 cm**.

---

**92.** Tiga utas tali sepanjang 216 m, 288 m, dan 360 m akan dipotong sama panjang tanpa sisa, sepanjang mungkin, untuk kerajinan. Panjang tiap potongan adalah ....

- A. 24 m
- B. 36 m
- C. 144 m
- D. **72 m**

**Kunci: D**
**Pembahasan:**
- **A salah** — 24 = 2³ × 3 membagi ketiganya, tetapi belum maksimum; lupa bahwa 3² juga faktor sama di ketiganya.
- **B salah** — 36 = 2² × 3² membagi ketiganya, tetapi belum maksimum; pangkat terkecil dari 2 yang sama sebenarnya 2³, bukan 2².
- **C salah** — 144 adalah kelipatan besar (KPK-style), bukan FPB; tertukar arah.
- **D benar** — 216 = 2³ × 3³; 288 = 2⁵ × 3²; 360 = 2³ × 3² × 5. Faktor sama: 2³ dan 3². FPB = 8 × 9 = **72 m**.
- **Konsep kunci:** Soal cerita "dipotong sama panjang, sepanjang mungkin" adalah soal FPB dari semua panjang yang diberikan, berlaku juga untuk tiga tali sekaligus.
- **Langkah Penyelesaian:**
  1. Kata kunci "dipotong sama panjang, sepanjang mungkin" → ini soal FPB tiga bilangan.
  2. FPB(216, 288, 360) = 72.
  3. **72 m**.

---

**93.** Sebuah bilangan n jika membagi 172 selalu bersisa 4, dan jika membagi 231 selalu bersisa 3. Nilai n **terbesar** yang mungkin adalah ....

- A. 4
- B. **12**
- C. 168
- D. 6

**Kunci: B**
**Pembahasan:**
- **A salah** — 4 adalah salah satu sisa pembagian, bukan nilai n; tertukar antara sisa dan pembagi.
- **B benar** — Jika n membagi 172 bersisa 4, berarti n membagi habis (172 − 4) = 168. Jika n membagi 231 bersisa 3, berarti n membagi habis (231 − 3) = 228. n terbesar = FPB(168, 228). 168 = 2³ × 3 × 7; 228 = 2² × 3 × 19. FPB = 2² × 3 = **12**.
- **C salah** — 168 adalah salah satu bilangan hasil pengurangan sisa, bukan FPB-nya; berhenti sebelum menghitung FPB.
- **D salah** — 6 = 2 × 3 membagi kedua bilangan (168, 228), tetapi belum maksimum; lupa bahwa 2² juga faktor sama.
- **Konsep kunci:** Soal "membagi bersisa r" berarti bilangan itu membagi habis (bilangan − r); nilai n terbesar dicari dengan FPB dari selisih-selisih tersebut.
- **Langkah Penyelesaian:**
  1. n membagi habis (172 − 4) = 168 dan (231 − 3) = 228.
  2. n terbesar = FPB(168, 228) = **12**.

---

**94.** Sebuah bilangan n jika membagi 245 selalu bersisa 5, dan jika membagi 197 selalu bersisa 2. Nilai n **terbesar** yang mungkin adalah ....

- A. 5
- B. **15**
- C. 240
- D. 3

**Kunci: B**
**Pembahasan:**
- **A salah** — 5 adalah salah satu sisa pembagian, bukan nilai n; tertukar antara sisa dan pembagi.
- **B benar** — n membagi habis (245 − 5) = 240 dan (197 − 2) = 195. n terbesar = FPB(240, 195). 240 = 2⁴ × 3 × 5; 195 = 3 × 5 × 13. FPB = 3 × 5 = **15**.
- **C salah** — 240 adalah salah satu bilangan hasil pengurangan sisa, bukan FPB-nya; berhenti sebelum menghitung FPB.
- **D salah** — 3 membagi kedua bilangan (240, 195), tetapi belum maksimum; lupa bahwa 5 juga faktor sama.
- **Konsep kunci:** Soal "membagi bersisa r" berarti bilangan itu membagi habis (bilangan − r); nilai n terbesar dicari dengan FPB dari selisih-selisih tersebut.
- **Langkah Penyelesaian:**
  1. n membagi habis (245 − 5) = 240 dan (197 − 2) = 195.
  2. n terbesar = FPB(240, 195) = **15**.

---

**95.** Sebuah bilangan n jika membagi 197 selalu bersisa 5, dan jika membagi 320 selalu bersisa 2. Nilai n **terbesar** yang mungkin adalah ....

- A. **6**
- B. 2
- C. 192
- D. 3

**Kunci: A**
**Pembahasan:**
- **A benar** — n membagi habis (197 − 5) = 192 dan (320 − 2) = 318. n terbesar = FPB(192, 318). 192 = 2⁶ × 3; 318 = 2 × 3 × 53. FPB = 2 × 3 = **6**.
- **B salah** — 2 adalah salah satu sisa pembagian, bukan nilai n; tertukar antara sisa dan pembagi.
- **C salah** — 192 adalah salah satu bilangan hasil pengurangan sisa, bukan FPB-nya; berhenti sebelum menghitung FPB.
- **D salah** — 3 membagi kedua bilangan (192, 318), tetapi belum maksimum; lupa bahwa 2 juga faktor sama.
- **Konsep kunci:** Soal "membagi bersisa r" berarti bilangan itu membagi habis (bilangan − r); nilai n terbesar dicari dengan FPB dari selisih-selisih tersebut.
- **Langkah Penyelesaian:**
  1. n membagi habis (197 − 5) = 192 dan (320 − 2) = 318.
  2. n terbesar = FPB(192, 318) = **6**.

---

**96.** Sebuah bilangan digunakan untuk membagi 250 dan 174, dan selalu menyisakan sisa 2 pada keduanya. Bilangan **terbesar** yang mungkin adalah ....

- A. 2
- B. 248
- C. 8
- D. **4**

**Kunci: D**
**Pembahasan:**
- **A salah** — 2 adalah sisa pembagian itu sendiri, bukan bilangan pembagi yang dicari.
- **B salah** — 248 adalah salah satu bilangan hasil pengurangan sisa (250 − 2), bukan FPB-nya; berhenti sebelum menghitung FPB.
- **C salah** — 8 membagi 248 tetapi tidak membagi 172 (172 ÷ 8 bersisa); bukan faktor persekutuan yang benar.
- **D benar** — Bilangan itu membagi habis (250 − 2) = 248 dan (174 − 2) = 172. Bilangan terbesar = FPB(248, 172). 248 = 2³ × 31; 172 = 2² × 43. FPB = 2² = **4**.
- **Konsep kunci:** Soal "membagi bersisa r yang sama pada beberapa bilangan" berarti bilangan itu membagi habis (tiap bilangan − r); jawabannya adalah FPB dari selisih-selisih tersebut.
- **Langkah Penyelesaian:**
  1. Bilangan itu membagi habis (250 − 2) = 248 dan (174 − 2) = 172.
  2. Bilangan terbesar = FPB(248, 172) = **4**.

---

**97.** Dedi menghitung FPB(90, 84) dengan Algoritma Euclid. Langkah pertamanya ditulis: 90 = 1 × 84 + 5. Kesalahan Dedi dan FPB yang benar adalah ....

- A. **Sisa seharusnya 6 (bukan 5); melanjutkan algoritma, FPB(90, 84) = 6**
- B. Tidak ada kesalahan, FPB = 5
- C. Kesalahannya di posisi pembagi; seharusnya 84 = 1 × 90 + (−6), FPB = 84
- D. Sisa 5 sudah benar, tetapi FPB seharusnya 1

**Kunci: A**
**Pembahasan:**
- **A benar** — 90 − 84 = 6, bukan 5 (Dedi salah hitung pengurangan). Lanjutkan Euclid dengan sisa yang benar: 90 = 1 × 84 + 6; 84 = 14 × 6 + 0. FPB(90, 84) = **6**.
- **B salah** — Sisa 5 itu sendiri sudah salah hitung (90 − 1×84 = 6, bukan 5), jadi FPB = 5 juga ikut salah.
- **C salah** — Algoritma Euclid mensyaratkan bilangan yang lebih besar dibagi bilangan yang lebih kecil terlebih dahulu (90 ÷ 84), bukan dibalik; juga sisa tidak boleh negatif.
- **D salah** — Sisa 5 salah (seharusnya 6), sehingga kesimpulan FPB = 1 pun tidak berdasar pada hitungan yang benar.
- **Konsep kunci:** Selalu cek ulang hasil pengurangan pada tiap langkah Algoritma Euclid — kesalahan aritmetika kecil membuat seluruh rangkaian langkah berikutnya salah.
- **Langkah Penyelesaian:**
  1. 90 = 1 × 84 + 6 (bukan +5, karena 90 − 84 = 6).
  2. 84 = 14 × 6 + 0.
  3. FPB(90, 84) = **6**.

---

**98.** Untuk sembarang bilangan asli n, FPB dari tiga bilangan berurutan (n, n+1, n+2) selalu ....

- A. Sama dengan n
- B. Tergantung apakah n genap atau ganjil
- C. **Sama dengan 1, untuk n berapa pun**
- D. Sama dengan 2

**Kunci: C**
**Pembahasan:**
- **A salah** — Jika n dan n+1 saja sudah tidak punya faktor sama selain 1 (bilangan berurutan selalu FPB = 1), maka FPB tiga bilangan itu tidak mungkin sama dengan n (kecuali n = 1, bukan aturan umum).
- **B salah** — Genap atau ganjilnya n tidak mengubah kesimpulan; n dan n+1 SELALU berselisih 1 sehingga selalu saling prima, apa pun paritas n.
- **C benar** — Karena n dan n+1 berselisih 1, keduanya selalu saling prima (FPB = 1). Maka FPB(n, n+1, n+2) juga pasti **1**, karena FPB ketiganya tidak mungkin lebih besar dari FPB dua bilangan di antaranya.
- **D salah** — 2 hanya mungkin jadi faktor persekutuan dua bilangan genap yang berselisih 2 (seperti n dan n+2 jika n genap), tetapi n+1 di tengahnya pasti ganjil, sehingga 2 tidak bisa jadi FPB ketiganya.
- **Konsep kunci:** Dua bilangan yang berurutan (selisih 1) selalu memiliki FPB = 1; sifat ini menjamin FPB tiga bilangan berurutan berapa pun juga selalu 1.
- **Langkah Penyelesaian:**
  1. n dan n+1 berselisih 1 → FPB(n, n+1) = 1 (selalu, untuk n berapa pun).
  2. FPB tiga bilangan tidak mungkin melebihi FPB sepasang di antaranya, jadi FPB(n, n+1, n+2) = **1**.

---

**99.** Wulan mencari FPB(150, 240) dengan faktorisasi 150 = 2 × 3 × 5² dan 240 = 2⁴ × 3 × 5, lalu ia mengalikan SEMUA faktor prima yang muncul (termasuk yang tidak sama pada kedua bilangan) dengan pangkat TERBESAR, sehingga mendapat hasil 720. Kesalahan Wulan adalah ....

- A. **Wulan menghitung KPK, bukan FPB; FPB yang benar = 30**
- B. Wulan sudah benar, FPB(150, 240) = 720
- C. Wulan salah memfaktorkan 150; seharusnya 150 = 2² × 3 × 5²
- D. Wulan salah memfaktorkan 240; seharusnya 240 = 2³ × 3 × 5²

**Kunci: A**
**Pembahasan:**
- **A benar** — Cara Wulan (ambil semua faktor prima dengan pangkat terbesar) adalah cara mencari **KPK**, bukan FPB. FPB seharusnya mengambil faktor prima yang **sama** pada keduanya dengan pangkat **terkecil**: faktor sama adalah 2, 3, 5 (pangkat terkecil masing-masing 2¹, 3¹, 5¹). FPB = 2 × 3 × 5 = **30**.
- **B salah** — 720 memang benar sebagai KPK(150, 240), tetapi soal meminta FPB, bukan KPK; Wulan tertukar konsep.
- **C salah** — Faktorisasi 150 = 2 × 3 × 5² yang ditulis Wulan sudah benar (150 = 2 × 3 × 25 = 150 ✓); bukan di situ letak kesalahannya.
- **D salah** — Faktorisasi 240 = 2⁴ × 3 × 5 yang ditulis Wulan sudah benar (16 × 3 × 5 = 240 ✓); bukan di situ letak kesalahannya.
- **Konsep kunci:** FPB memakai faktor prima SAMA dengan pangkat TERKECIL; KPK memakai SEMUA faktor prima (sama maupun tidak) dengan pangkat TERBESAR. Tertukar keduanya adalah kesalahan klasik.
- **Langkah Penyelesaian:**
  1. Faktorisasi Wulan benar: 150 = 2 × 3 × 5²; 240 = 2⁴ × 3 × 5.
  2. Untuk FPB, ambil faktor sama (2, 3, 5) dengan pangkat terkecil: 2¹, 3¹, 5¹.
  3. FPB = 2 × 3 × 5 = **30**.

---

**100.** Diketahui a × b = 187, FPB(a, b) = 1 (saling prima), a < b, dan keduanya bilangan dua angka. Nilai b − a adalah ....

- A. 4
- B. 8
- C. 17
- D. **6**

**Kunci: D**
**Pembahasan:**
- **A salah** — Umpan angka acak yang tidak berasal dari perhitungan faktor 187.
- **B salah** — Umpan angka acak lainnya; tidak sesuai pasangan faktor 187 yang valid.
- **C salah** — 17 adalah nilai b itu sendiri, bukan selisih b − a.
- **D benar** — 187 = 11 × 17. Karena harus dua bilangan dua angka, satu-satunya pasangan faktor yang valid adalah 11 dan 17 (pasangan 1 × 187 tidak memenuhi syarat dua angka). Keduanya otomatis saling prima (11 dan 17 sama-sama prima berbeda). Dengan a = 11, b = 17: b − a = 17 − 11 = **6**.
- **Konsep kunci:** Saat mencari pasangan bilangan saling prima dari suatu hasil kali, faktorkan hasil kali tersebut lalu cek syarat tambahan (di sini: kedua bilangan dua angka) untuk menyaring pasangan yang valid.
- **Langkah Penyelesaian:**
  1. Faktorkan 187 = 11 × 17 (keduanya prima, otomatis saling prima).
  2. Hanya pasangan (11, 17) yang memenuhi syarat dua angka.
  3. b − a = 17 − 11 = **6**.

---

# Bagian III — Kunci & Distribusi

## Tabel Kunci 100 Soal

| 1-10 | 11-20 | 21-30 | 31-40 | 41-50 |
|------|-------|-------|-------|-------|
| 1. B | 11. A | 21. D | 31. D | 41. B |
| 2. B | 12. D | 22. A | 32. A | 42. A |
| 3. B | 13. A | 23. D | 33. D | 43. C |
| 4. B | 14. D | 24. B | 34. B | 44. D |
| 5. B | 15. A | 25. A | 35. C | 45. B |
| 6. C | 16. C | 26. D | 36. A | 46. C |
| 7. B | 17. D | 27. C | 37. D | 47. A |
| 8. C | 18. B | 28. A | 38. C | 48. D |
| 9. B | 19. C | 29. D | 39. A | 49. C |
| 10. C | 20. A | 30. C | 40. C | 50. B |

| 51-60 | 61-70 | 71-80 | 81-90 | 91-100 |
|-------|-------|-------|-------|--------|
| 51. B | 61. D | 71. A | 81. A | 91. A |
| 52. C | 62. B | 72. B | 82. D | 92. D |
| 53. B | 63. B | 73. D | 83. C | 93. B |
| 54. C | 64. C | 74. A | 84. A | 94. B |
| 55. B | 65. A | 75. B | 85. D | 95. A |
| 56. D | 66. D | 76. C | 86. C | 96. D |
| 57. C | 67. A | 77. D | 87. A | 97. A |
| 58. D | 68. B | 78. A | 88. A | 98. C |
| 59. C | 69. C | 79. C | 89. D | 99. A |
| 60. B | 70. B | 80. D | 90. C | 100. D |

## Distribusi Kunci

Penghitungan per huruf:

- **A** (25 soal): 11, 13, 15, 20, 22, 25, 28, 32, 36, 39, 42, 47, 65, 67, 71, 74, 78, 81, 84, 87, 88, 91, 95, 97, 99
- **B** (25 soal): 1, 2, 3, 4, 5, 7, 9, 18, 24, 34, 41, 45, 50, 51, 53, 55, 60, 62, 63, 68, 70, 72, 75, 93, 94
- **C** (25 soal): 6, 8, 10, 16, 19, 27, 30, 35, 38, 40, 43, 46, 49, 52, 54, 57, 59, 64, 69, 76, 79, 83, 86, 90, 98
- **D** (25 soal): 12, 14, 17, 21, 23, 26, 29, 31, 33, 37, 44, 48, 56, 58, 61, 66, 73, 77, 80, 82, 85, 89, 92, 96, 100

**Distribusi A: 25 · B: 25 · C: 25 · D: 25** — seimbang sempurna, jauh di bawah toleransi ±5. Kunci tersebar acak antar tingkat (Kab/Prov) dan antar kategori soal (hitungan langsung, cerita, Euclid, hubungan FPB-KPK, sisa pembagian, konsep) sehingga tidak ada pola tebakan yang dapat dieksploitasi siswa.

---

*Selesai. Sub-bab 01f - FPB (Faktor Persekutuan Terbesar) (Mudah-Sedang).*
