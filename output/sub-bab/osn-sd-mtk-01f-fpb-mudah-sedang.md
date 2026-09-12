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

<<KAB_BLOCK_5>>
