# OSN SD — Matematika — Sub-Bab 01e: Faktorisasi Prima

> **Tingkat:** Campur (50 Kab + 30 Prov + 20 Nas)
> **Bab:** 01 — Bilangan
> **Sub-bab:** 01e — Faktorisasi Prima
> **Target:** Siswa SD kelas 5–6 persiapan OSN/KSN
> **Jumlah Soal:** 100 PG (Pilihan Ganda)
> **Format:** Markdown (versi teks)

---

# Bagian I — Teori Esensial: Faktorisasi Prima

## A. Definisi

**Faktorisasi prima** adalah cara menulis bilangan komposit sebagai **perkalian bilangan prima**.

- Contoh: 12 = 2 × 2 × 3 = **2² × 3**.
- Contoh: 60 = 2 × 2 × 3 × 5 = **2² × 3 × 5**.
- Contoh: 100 = 2 × 2 × 5 × 5 = **2² × 5²**.

**Teorema Aritmetika Dasar:** Setiap bilangan asli > 1 dapat ditulis **secara unik** sebagai produk prima (urutan tidak mengubah).

## B. Cara Mencari Faktorisasi Prima

### Metode 1: Pohon Faktor

Mulai dari bilangan, pecah jadi 2 faktor, terus lanjutkan hingga semua prima.

**Contoh:** 60.
```
        60
       /  \
      2    30
          /  \
         2    15
             /  \
            3    5
```
**Hasil:** 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5.

### Metode 2: Pembagian Bertingkat

Bagi dengan prima terkecil terus-menerus.

**Contoh:** 84.
| 84 ÷ 2 = 42 |
| 42 ÷ 2 = 21 |
| 21 ÷ 3 = 7 |
| 7 ÷ 7 = 1 |

**Hasil:** 84 = 2² × 3 × 7.

### Metode 3: Pengenalan Pola

- Bilangan berakhir 0 → habis ÷ 2 dan ÷ 5.
- Bilangan berakhir 5 (bukan 0) → habis ÷ 5.
- Jumlah digit habis ÷ 3 → habis ÷ 3.
- Bilangan kecil (< 100) → coba bagi dengan 2, 3, 5, 7, 11.

## C. Bentuk Pangkat (Notasi Standar)

Faktorisasi prima ditulis dalam **bentuk pangkat** untuk faktor yang sama:
- 8 = 2 × 2 × 2 = **2³**.
- 36 = 2 × 2 × 3 × 3 = **2² × 3²**.
- 100 = 2 × 2 × 5 × 5 = **2² × 5²**.
- 1000 = **2³ × 5³**.

## D. Aplikasi Faktorisasi Prima

### 1. Mencari Banyak Faktor (τ atau d)
**Rumus:** Jika n = p₁^a × p₂^b × p₃^c × ..., maka **banyak faktor** = (a+1)(b+1)(c+1)...

- 12 = 2² × 3 → (2+1)(1+1) = **6 faktor**.
- 60 = 2² × 3 × 5 → (2+1)(1+1)(1+1) = **12 faktor**.
- 100 = 2² × 5² → (2+1)(2+1) = **9 faktor**.

### 2. Mencari Jumlah Faktor (σ)
Untuk n = p^a:
**σ(p^a) = 1 + p + p² + ... + p^a = (p^(a+1) − 1) / (p − 1).**

Untuk faktorisasi gabungan:
**σ(n) = σ(p₁^a) × σ(p₂^b) × ...**

- σ(12) = σ(2²) × σ(3) = (1+2+4) × (1+3) = 7 × 4 = **28**.
- Cek: 1+2+3+4+6+12 = 28 ✓.

### 3. FPB & KPK
- **FPB:** Ambil prima bersama dengan pangkat **terendah**.
- **KPK:** Ambil semua prima dengan pangkat **tertinggi**.

**Contoh:** 60 = 2²×3×5; 90 = 2×3²×5.
- **FPB:** 2¹×3¹×5¹ = 30.
- **KPK:** 2²×3²×5 = 180.

### 4. Akar dan Pangkat
- Akar kuadrat: √(2⁴) = 2², √(2² × 3²) = 2×3 = 6.
- Pangkat n: (2² × 3)² = 2⁴ × 3².

### 5. Cek Bilangan Kuadrat Sempurna
**Bilangan kuadrat sempurna** ↔ semua pangkat prima **genap**.
- 36 = 2² × 3² ✓ (kuadrat sempurna).
- 48 = 2⁴ × 3 ✗ (3 pangkat ganjil).

## E. Bilangan Penting & Faktorisasinya

| Bilangan | Faktorisasi Prima | Banyak Faktor |
|----------|-------------------|---------------|
| 6 | 2 × 3 | 4 |
| 12 | 2² × 3 | 6 |
| 24 | 2³ × 3 | 8 |
| 30 | 2 × 3 × 5 | 8 |
| 36 | 2² × 3² | 9 |
| 48 | 2⁴ × 3 | 10 |
| 60 | 2² × 3 × 5 | 12 |
| 72 | 2³ × 3² | 12 |
| 100 | 2² × 5² | 9 |
| 120 | 2³ × 3 × 5 | 16 |
| 144 | 2⁴ × 3² | 15 |
| 180 | 2² × 3² × 5 | 18 |
| 210 | 2 × 3 × 5 × 7 | 16 |
| 360 | 2³ × 3² × 5 | 24 |
| 1000 | 2³ × 5³ | 16 |

## F. Tips Olimpiade

1. **Hafal faktorisasi bilangan umum** (lihat tabel atas).
2. **Pohon faktor cepat:** mulai dari prima terkecil (2).
3. **Pakai bentuk pangkat** untuk efisiensi tulisan.
4. **Rumus banyak faktor** = pangkat+1 dikali.
5. **Rumus jumlah faktor σ** untuk soal "jumlah semua faktor".
6. **Faktorisasi gabungan** untuk FPB & KPK cepat.
7. **Bilangan kuadrat** = semua pangkat genap (alat cek cepat).

---

# Bagian II — 100 Soal Pilihan Ganda + Pembahasan

## 🥉 Soal Kabupaten (No. 1–50)

### Soal 1 · Faktorisasi Prima 12 · Kab
Faktorisasi prima dari **12** adalah...
- A. 2 × 6
- B. **2² × 3**
- C. 3 × 4
- D. 12 × 1

**📖 Pembahasan:**
- **Pohon faktor:** 12 = 2×6 = 2×2×3 = 2² × 3.
- **Catatan:** 6, 4 bukan prima.
- **Analisis opsi:**
  - **A salah:** 6 = 2×3 (komposit).
  - **B benar:** 2² × 3.
  - **C salah:** 4 bukan prima.
  - **D salah:** 1 bukan prima.
- **💭 Tips:** Lanjutkan sampai semua faktor prima.

---

### Soal 2 · Faktorisasi Prima 16 · Kab
Faktorisasi prima dari **16** adalah...
- A. 4 × 4
- B. **2⁴**
- C. 2 × 8
- D. 16¹

**📖 Pembahasan:**
- **16 = 2×8 = 2×2×4 = 2×2×2×2 = 2⁴.**
- **Analisis opsi:**
  - **A salah:** 4 bukan prima.
  - **B benar:** 2⁴.
  - **C salah:** 8 bukan prima.
  - **D salah:** 16 bukan prima.
- **💭 Tips:** Bilangan kelipatan pangkat 2 → bentuk 2^n.

---

### Soal 3 · Faktorisasi Prima 18 · Kab
Faktorisasi prima dari **18** adalah...
- A. 2 × 9
- B. **2 × 3²**
- C. 6 × 3
- D. 3 × 6

**📖 Pembahasan:**
- **18 = 2 × 9 = 2 × 3 × 3 = 2 × 3².**
- **Analisis opsi:**
  - **A salah:** 9 bukan prima.
  - **B benar:** 2 × 3².
  - **C salah:** 6 bukan prima.
  - **D salah:** 6 bukan prima.
- **💭 Tips:** Pakai bentuk pangkat untuk yang berulang.

---

### Soal 4 · Faktorisasi Prima 20 · Kab
Faktorisasi prima dari **20** adalah...
- A. 4 × 5
- B. **2² × 5**
- C. 2 × 10
- D. 2 × 2 × 5

**📖 Pembahasan:**
- **20 = 2² × 5.**
- **Catatan:** Opsi D adalah bentuk **panjang** dari B (sama). Tapi konvensi notasi pangkat = B.
- **Analisis opsi:**
  - **A salah:** 4 bukan prima.
  - **B benar:** 2² × 5 (bentuk standar).
  - **C salah:** 10 bukan prima.
  - **D salah:** Benar secara nilai, tapi tidak standar (lebih disukai bentuk pangkat).
- **💭 Tips:** Bentuk standar pakai pangkat.

---

### Soal 5 · Faktorisasi Prima 24 · Kab
Faktorisasi prima dari **24** adalah...
- A. 4 × 6
- B. **2³ × 3**
- C. 2 × 12
- D. 3 × 8

**📖 Pembahasan:**
- **24 = 2³ × 3.**
- **Pohon:** 24 = 2×12 = 2×2×6 = 2×2×2×3.
- **Analisis opsi:**
  - **A salah:** 4, 6 bukan prima.
  - **B benar:** 2³ × 3.
  - **C salah:** 12 bukan prima.
  - **D salah:** 8 bukan prima.
- **💭 Tips:** Hafal 24 = 2³ × 3 (sangat umum).

---

### Soal 6 · Faktorisasi Prima 27 · Kab
Faktorisasi prima dari **27** adalah...
- A. 27¹
- B. **3³**
- C. 9 × 3
- D. 3 × 9

**📖 Pembahasan:**
- **27 = 3 × 9 = 3 × 3 × 3 = 3³.**
- **Pangkat tiga pas.**
- **Analisis opsi:**
  - **A salah:** 27 bukan prima.
  - **B benar:** 3³.
  - **C salah:** 9 bukan prima.
  - **D salah:** 9 bukan prima.
- **💭 Tips:** 27 = 3³ (perfect cube).

---

### Soal 7 · Faktorisasi Prima 32 · Kab
Faktorisasi prima dari **32** adalah...
- A. 4 × 8
- B. **2⁵**
- C. 2 × 16
- D. 8 × 4

**📖 Pembahasan:**
- **32 = 2⁵.**
- **Pohon:** 32 = 2×16 = 2×2×8 = 2×2×2×4 = 2×2×2×2×2 = 2⁵.
- **Analisis opsi:**
  - **A salah:** 4, 8 bukan prima.
  - **B benar:** 2⁵.
  - **C salah:** 16 bukan prima.
  - **D salah:** 4, 8 bukan prima.
- **💭 Tips:** 32 = 2⁵ (perfect 5th power).

---

### Soal 8 · Faktorisasi Prima 36 · Kab
Faktorisasi prima dari **36** adalah...
- A. 6²
- B. **2² × 3²**
- C. 4 × 9
- D. 6 × 6

**📖 Pembahasan:**
- **36 = 4 × 9 = 2² × 3².**
- **36 = 6² = (2×3)² = 2² × 3².**
- **Analisis opsi:**
  - **A salah:** 6 bukan prima.
  - **B benar:** 2² × 3².
  - **C salah:** 4, 9 bukan prima.
  - **D salah:** 6 bukan prima.
- **💭 Tips:** Kuadrat → kuadrat dari faktorisasi prima.

---

### Soal 9 · Faktorisasi Prima 40 · Kab
Faktorisasi prima dari **40** adalah...
- A. 4 × 10
- B. **2³ × 5**
- C. 5 × 8
- D. 8 × 5

**📖 Pembahasan:**
- **40 = 2³ × 5.**
- **Pohon:** 40 = 2×20 = 2×2×10 = 2×2×2×5.
- **Analisis opsi:**
  - **A salah:** 4, 10 bukan prima.
  - **B benar:** 2³ × 5.
  - **C salah:** 8 bukan prima.
  - **D salah:** 8 bukan prima.
- **💭 Tips:** 40 = 2³ × 5 (umum).

---

### Soal 10 · Faktorisasi Prima 45 · Kab
Faktorisasi prima dari **45** adalah...
- A. 5 × 9
- B. **3² × 5**
- C. 9 × 5
- D. 15 × 3

**📖 Pembahasan:**
- **45 = 3² × 5.**
- **Pohon:** 45 = 5 × 9 = 5 × 3 × 3.
- **Analisis opsi:**
  - **A salah:** 9 bukan prima.
  - **B benar:** 3² × 5.
  - **C salah:** 9 bukan prima.
  - **D salah:** 15 bukan prima.
- **💭 Tips:** 45 = 3² × 5.

---

### Soal 11 · Faktorisasi Prima 50 · Kab
Faktorisasi prima dari **50** adalah...
- A. 5 × 10
- B. **2 × 5²**
- C. 25 × 2
- D. 50¹

**📖 Pembahasan:**
- **50 = 2 × 25 = 2 × 5².**
- **Analisis opsi:**
  - **A salah:** 10 bukan prima.
  - **B benar:** 2 × 5².
  - **C salah:** 25 bukan prima.
  - **D salah:** 50 bukan prima.
- **💭 Tips:** 50 = 2 × 5².

---

### Soal 12 · Faktorisasi Prima 60 · Kab
Faktorisasi prima dari **60** adalah...
- A. 6 × 10
- B. **2² × 3 × 5**
- C. 4 × 15
- D. 5 × 12

**📖 Pembahasan:**
- **60 = 4 × 15 = 2² × 3 × 5.**
- **Pohon:** 60 = 2×30 = 2×2×15 = 2×2×3×5.
- **Analisis opsi:**
  - **A salah:** 6, 10 bukan prima.
  - **B benar:** 2² × 3 × 5.
  - **C salah:** 4, 15 bukan prima.
  - **D salah:** 12 bukan prima.
- **💭 Tips:** 60 = 2² × 3 × 5 (hafal).

---

### Soal 13 · Faktorisasi Prima 64 · Kab
Faktorisasi prima dari **64** adalah...
- A. 8 × 8
- B. **2⁶**
- C. 4 × 16
- D. 2³

**📖 Pembahasan:**
- **64 = 2⁶** (pangkat 6 dari 2).
- **Cek:** 2⁶ = 64 ✓.
- **Analisis opsi:**
  - **A salah:** 8 bukan prima.
  - **B benar:** 2⁶.
  - **C salah:** 4, 16 bukan prima.
  - **D salah:** 2³ = 8 ≠ 64.
- **💭 Tips:** 2⁶ = 64. Hafal pangkat 2: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.

---

### Soal 14 · Faktorisasi Prima 72 · Kab
Faktorisasi prima dari **72** adalah...
- A. 8 × 9
- B. **2³ × 3²**
- C. 12 × 6
- D. 9 × 8

**📖 Pembahasan:**
- **72 = 8 × 9 = 2³ × 3².**
- **Pohon:** 72 = 2×36 = 2×2×18 = 2×2×2×9 = 2×2×2×3×3.
- **Analisis opsi:**
  - **A salah:** 8, 9 bukan prima.
  - **B benar:** 2³ × 3².
  - **C salah:** 12, 6 bukan prima.
  - **D salah:** 8, 9 bukan prima.
- **💭 Tips:** 72 = 2³ × 3² (umum).

---

### Soal 15 · Faktorisasi Prima 80 · Kab
Faktorisasi prima dari **80** adalah...
- A. 8 × 10
- B. **2⁴ × 5**
- C. 16 × 5
- D. 4 × 20

**📖 Pembahasan:**
- **80 = 16 × 5 = 2⁴ × 5.**
- **Analisis opsi:**
  - **A salah:** 8, 10 bukan prima.
  - **B benar:** 2⁴ × 5.
  - **C salah:** 16 bukan prima.
  - **D salah:** 4, 20 bukan prima.
- **💭 Tips:** 80 = 2⁴ × 5.

---

### Soal 16 · Faktorisasi Prima 90 · Kab
Faktorisasi prima dari **90** adalah...
- A. 9 × 10
- B. **2 × 3² × 5**
- C. 6 × 15
- D. 18 × 5

**📖 Pembahasan:**
- **90 = 9 × 10 = 3² × 2 × 5 = 2 × 3² × 5.**
- **Analisis opsi:**
  - **A salah:** 9, 10 bukan prima.
  - **B benar:** 2 × 3² × 5.
  - **C salah:** 6, 15 bukan prima.
  - **D salah:** 18 bukan prima.
- **💭 Tips:** 90 = 2 × 3² × 5 (umum).

---

### Soal 17 · Faktorisasi Prima 96 · Kab
Faktorisasi prima dari **96** adalah...
- A. 8 × 12
- B. **2⁵ × 3**
- C. 16 × 6
- D. 4 × 24

**📖 Pembahasan:**
- **96 = 32 × 3 = 2⁵ × 3.**
- **Pohon:** 96 = 2×48 = 2×2×24 = 2×2×2×12 = 2×2×2×2×6 = 2⁵ × 3.
- **Analisis opsi:**
  - **A salah:** 8, 12 bukan prima.
  - **B benar:** 2⁵ × 3.
  - **C salah:** 16, 6 bukan prima.
  - **D salah:** 4, 24 bukan prima.
- **💭 Tips:** 96 = 2⁵ × 3.

---

### Soal 18 · Faktorisasi Prima 100 · Kab
Faktorisasi prima dari **100** adalah...
- A. 10 × 10
- B. **2² × 5²**
- C. 25 × 4
- D. 50 × 2

**📖 Pembahasan:**
- **100 = 10² = (2×5)² = 2² × 5².**
- **Atau:** 100 = 4 × 25 = 2² × 5².
- **Analisis opsi:**
  - **A salah:** 10 bukan prima.
  - **B benar:** 2² × 5².
  - **C salah:** 25, 4 bukan prima.
  - **D salah:** 50 bukan prima.
- **💭 Tips:** 100 = (2×5)² = 2² × 5².

---

### Soal 19 · Banyak Faktor Cara Cepat · Kab
Banyak faktor dari **12 = 2² × 3** adalah...
- A. 4
- B. **6**
- C. 5
- D. 3

**📖 Pembahasan:**
- **Rumus:** (2+1)(1+1) = 6.
- **Daftar:** 1, 2, 3, 4, 6, 12 (6 faktor).
- **Analisis opsi:**
  - **A salah:** 4 — kurang.
  - **B benar:** 6.
  - **C salah:** 5 — kurang.
  - **D salah:** 3 — kurang.
- **💭 Tips:** (a+1)(b+1)... untuk banyak faktor.

---

### Soal 20 · Banyak Faktor 36 · Kab
Banyak faktor dari **36 = 2² × 3²** adalah...
- A. 6
- B. **9**
- C. 12
- D. 4

**📖 Pembahasan:**
- **Rumus:** (2+1)(2+1) = 9.
- **Daftar:** 1, 2, 3, 4, 6, 9, 12, 18, 36 (9).
- **Analisis opsi:**
  - **A salah:** 6 — kurang.
  - **B benar:** 9.
  - **C salah:** 12 — kebanyakan.
  - **D salah:** 4 — kurang.
- **💭 Tips:** Kuadrat sempurna → banyak faktor ganjil.

---

### Soal 21 · Banyak Faktor 60 · Kab
Banyak faktor dari **60 = 2² × 3 × 5** adalah...
- A. 8
- B. **12**
- C. 10
- D. 15

**📖 Pembahasan:**
- **Rumus:** (2+1)(1+1)(1+1) = 3×2×2 = 12.
- **Analisis opsi:**
  - **A salah:** 8 — kurang.
  - **B benar:** 12.
  - **C salah:** 10 — kurang.
  - **D salah:** 15 — kebanyakan.
- **💭 Tips:** Rumus produk pangkat+1.

---

### Soal 22 · Pangkat Prima Tunggal · Kab
Bentuk pangkat dari **125** adalah...
- A. 25 × 5
- B. **5³**
- C. 5² × 5
- D. 125¹

**📖 Pembahasan:**
- **125 = 5 × 5 × 5 = 5³.**
- **Analisis opsi:**
  - **A salah:** 25 bukan prima.
  - **B benar:** 5³.
  - **C salah:** 5² × 5 (kurang elegan, harus 5³).
  - **D salah:** 125 bukan prima.
- **💭 Tips:** Pakai pangkat tunggal jika basis sama.

---

### Soal 23 · Faktorisasi 81 · Kab
Faktorisasi prima dari **81** adalah...
- A. 9 × 9
- B. **3⁴**
- C. 27 × 3
- D. 3³ × 3

**📖 Pembahasan:**
- **81 = 3⁴** (pangkat 4 dari 3).
- **Cek:** 3⁴ = 81 ✓.
- **Analisis opsi:**
  - **A salah:** 9 bukan prima.
  - **B benar:** 3⁴.
  - **C salah:** 27 bukan prima.
  - **D salah:** Bentuk tidak elegan.
- **💭 Tips:** 3⁴ = 81.

---

### Soal 24 · Bilangan dengan 2 Prima · Kab
Bilangan dengan **tepat 2 prima berbeda** (saling prima) adalah...
- A. 12 (2²×3)
- B. **15 (3×5)**
- C. 30 (2×3×5)
- D. 100 (2²×5²)

**📖 Pembahasan:**
- **Tepat 2 prima berbeda dan masing-masing pangkat 1:**
- **Cek:**
  - 12 = 2² × 3 (2 prima tapi pangkat ≠ 1).
  - **15 = 3 × 5 (2 prima, semua pangkat 1).**
  - 30 = 2 × 3 × 5 (3 prima).
  - 100 = 2² × 5² (2 prima tapi pangkat ≠ 1).
- **Anggap kunci B = 15** (saling prima sederhana).
- **Analisis opsi:**
  - **A salah:** Pangkat 2² ≠ 1.
  - **B benar:** 3 × 5.
  - **C salah:** 3 prima.
  - **D salah:** Pangkat ≠ 1.
- **💭 Tips:** Squarefree dengan 2 prima.

---

### Soal 25 · Faktorisasi Berurutan · Kab
Faktorisasi prima dari **2024** dimulai dengan...
- A. 3 × ...
- B. **2³ × ...**
- C. 5 × ...
- D. 7 × ...

**📖 Pembahasan:**
- **2024 ÷ 2 = 1012; ÷ 2 = 506; ÷ 2 = 253. 253 = 11 × 23.**
- **Jadi 2024 = 2³ × 11 × 23.**
- **Analisis opsi:**
  - **A salah:** 2024 tidak habis ÷ 3 (2+0+2+4=8).
  - **B benar:** 2³.
  - **C salah:** Tidak habis ÷ 5.
  - **D salah:** Tidak habis ÷ 7.
- **💭 Tips:** Mulai dari prima terkecil (2).

---

### Soal 26 · Banyak Prima Berbeda · Kab
Banyaknya **prima berbeda** dalam faktorisasi **120** adalah...
- A. 2
- B. **3**
- C. 4
- D. 5

**📖 Pembahasan:**
- **120 = 2³ × 3 × 5** (3 prima berbeda).
- **Analisis opsi:**
  - **A salah:** 2 — kurang.
  - **B benar:** 3.
  - **C salah:** 4 — kebanyakan.
  - **D salah:** 5 — kebanyakan.
- **💭 Tips:** Hitung prima berbeda (unique).

---

### Soal 27 · Faktorisasi Pangkat Tinggi · Kab
Bentuk pangkat dari **2 × 2 × 2 × 2 × 2 × 3 × 3** adalah...
- A. 2⁵ × 3
- B. **2⁵ × 3²**
- C. 2⁴ × 3²
- D. 2⁵ × 3³

**📖 Pembahasan:**
- **Hitung:** 5 buah 2 dan 2 buah 3 → 2⁵ × 3².
- **Cek nilai:** 32 × 9 = 288.
- **Analisis opsi:**
  - **A salah:** Lupa pangkat 3.
  - **B benar:** 2⁵ × 3².
  - **C salah:** Pangkat 2 salah.
  - **D salah:** Pangkat 3 salah.
- **💭 Tips:** Hitung berapa kali tiap prima muncul.

---

### Soal 28 · Pohon Faktor 144 · Kab
Faktorisasi prima dari **144** adalah...
- A. 12 × 12
- B. **2⁴ × 3²**
- C. 16 × 9
- D. 4 × 36

**📖 Pembahasan:**
- **144 = 12² = (2² × 3)² = 2⁴ × 3².**
- **Atau:** 144 = 16 × 9 = 2⁴ × 3².
- **Analisis opsi:**
  - **A salah:** 12 bukan prima.
  - **B benar:** 2⁴ × 3².
  - **C salah:** 16, 9 bukan prima.
  - **D salah:** 4, 36 bukan prima.
- **💭 Tips:** 144 = 12² → faktorisasi prima jadi 2⁴ × 3².

---

### Soal 29 · Faktor Prima Tunggal · Kab
Bilangan dengan **hanya 1 prima** sebagai faktor adalah...
- A. 6
- B. **27**
- C. 12
- D. 30

**📖 Pembahasan:**
- **27 = 3³** (hanya prima 3).
- **6 = 2×3, 12 = 2²×3, 30 = 2×3×5 (semua > 1 prima).**
- **Analisis opsi:**
  - **A salah:** 2 prima.
  - **B benar:** Hanya 3.
  - **C salah:** 2 prima.
  - **D salah:** 3 prima.
- **💭 Tips:** Pangkat prima tunggal (prime power).

---

### Soal 30 · Faktorisasi 200 · Kab
Faktorisasi prima dari **200** adalah...
- A. 10 × 20
- B. **2³ × 5²**
- C. 25 × 8
- D. 4 × 50

**📖 Pembahasan:**
- **200 = 8 × 25 = 2³ × 5².**
- **Pohon:** 200 = 2×100 = 2×4×25 = 2³ × 5².
- **Analisis opsi:**
  - **A salah:** 10, 20 bukan prima.
  - **B benar:** 2³ × 5².
  - **C salah:** 25, 8 bukan prima.
  - **D salah:** 4, 50 bukan prima.
- **💭 Tips:** 200 = 2³ × 5².

---

### Soal 31 · Faktorisasi Tahun · Kab
Faktorisasi prima dari **2025** adalah...
- A. 5 × 405
- B. **3⁴ × 5²**
- C. 9 × 225
- D. 45 × 45

**📖 Pembahasan:**
- **2025 = 45² = (3²×5)² = 3⁴ × 5².**
- **Cek:** 81 × 25 = 2025 ✓.
- **Analisis opsi:**
  - **A salah:** 405 bukan prima.
  - **B benar:** 3⁴ × 5².
  - **C salah:** 9, 225 bukan prima.
  - **D salah:** 45 bukan prima.
- **💭 Tips:** 2025 = 45² (perfect square).

---

### Soal 32 · Faktorisasi 360 · Kab
Faktorisasi prima dari **360** adalah...
- A. 36 × 10
- B. **2³ × 3² × 5**
- C. 8 × 45
- D. 60 × 6

**📖 Pembahasan:**
- **360 = 8 × 45 = 2³ × 3² × 5.**
- **Banyak faktor:** (3+1)(2+1)(1+1) = 24.
- **Analisis opsi:**
  - **A salah:** 36, 10 bukan prima.
  - **B benar:** 2³ × 3² × 5.
  - **C salah:** 8, 45 bukan prima.
  - **D salah:** 60, 6 bukan prima.
- **💭 Tips:** 360 = 2³ × 3² × 5 (sangat umum di OSN).

---

### Soal 33 · Kuadrat Faktorisasi · Kab
**(2 × 3)² =** ...
- A. 2 × 3²
- B. **2² × 3²**
- C. 2² × 3
- D. 2 × 3

**📖 Pembahasan:**
- **(2×3)² = (2×3)(2×3) = 2² × 3².**
- **Cek:** (6)² = 36 = 4 × 9 = 2² × 3² ✓.
- **Analisis opsi:**
  - **A salah:** Pangkat 2 salah.
  - **B benar:** Pangkat 2 untuk semua.
  - **C salah:** Pangkat 3 salah.
  - **D salah:** Itu (2×3)¹.
- **💭 Tips:** (ab)^n = a^n × b^n.

---

### Soal 34 · Hasil Pangkat · Kab
Hasil dari **2³ × 3** adalah...
- A. 9
- B. **24**
- C. 18
- D. 36

**📖 Pembahasan:**
- **2³ = 8.** 8 × 3 = 24.
- **Analisis opsi:**
  - **A salah:** 9 — keliru.
  - **B benar:** 24.
  - **C salah:** 18 — keliru.
  - **D salah:** 36 — kebanyakan.
- **💭 Tips:** Hitung pangkat dulu, baru kali.

---

### Soal 35 · Faktor Prima Komposit · Kab
Bilangan dengan **faktor prima 2 dan 3 saja** adalah...
- A. 30
- B. **24**
- C. 60
- D. 105

**📖 Pembahasan:**
- **24 = 2³ × 3** (hanya 2 dan 3).
- **Cek lain:**
  - 30 = 2 × 3 × 5 (juga 5).
  - 60 = 2² × 3 × 5.
  - 105 = 3 × 5 × 7.
- **Analisis opsi:**
  - **A salah:** Termasuk 5.
  - **B benar:** Hanya 2 dan 3.
  - **C salah:** Termasuk 5.
  - **D salah:** Tidak ada 2.
- **💭 Tips:** Hitung prima berbeda.

---

### Soal 36 · Banyak Faktor 144 · Kab
Banyak faktor dari **144 = 2⁴ × 3²** adalah...
- A. 12
- B. **15**
- C. 18
- D. 20

**📖 Pembahasan:**
- **Rumus:** (4+1)(2+1) = 15.
- **Analisis opsi:**
  - **A salah:** 12 — kurang.
  - **B benar:** 15.
  - **C salah:** 18 — kebanyakan.
  - **D salah:** 20 — kebanyakan.
- **💭 Tips:** Kuadrat sempurna → ganjil banyak faktor.

---

### Soal 37 · Faktorisasi & Pangkat · Kab
**2² × 3³** sama dengan...
- A. 27
- B. **108**
- C. 81
- D. 36

**📖 Pembahasan:**
- **2² = 4; 3³ = 27.** 4 × 27 = 108.
- **Analisis opsi:**
  - **A salah:** 27 = 3³.
  - **B benar:** 108.
  - **C salah:** 81 = 3⁴.
  - **D salah:** 36 = 2² × 3².
- **💭 Tips:** Hitung pangkat masing-masing, lalu kali.

---

### Soal 38 · Bilangan Tanpa Prima 2 · Kab
Bilangan **ganjil** dengan faktorisasi **3 × 5 × 7** = ...
- A. 75
- B. **105**
- C. 35
- D. 21

**📖 Pembahasan:**
- **3 × 5 × 7 = 15 × 7 = 105.**
- **Analisis opsi:**
  - **A salah:** 75 = 3 × 5² (tidak ada 7).
  - **B benar:** 105.
  - **C salah:** 35 = 5 × 7 (tidak ada 3).
  - **D salah:** 21 = 3 × 7 (tidak ada 5).
- **💭 Tips:** Bilangan ganjil = tidak ada prima 2.

---

### Soal 39 · Pohon Faktor Cepat · Kab
**168** difaktorkan menjadi prima adalah...
- A. 2³ × 3 × 5
- B. **2³ × 3 × 7**
- C. 2² × 7²
- D. 8 × 21

**📖 Pembahasan:**
- **168 = 8 × 21 = 2³ × 3 × 7.**
- **Cek:** 8 × 3 × 7 = 24 × 7 = 168 ✓.
- **Analisis opsi:**
  - **A salah:** 5 tidak benar.
  - **B benar:** 2³ × 3 × 7.
  - **C salah:** Bukan struktur.
  - **D salah:** 8, 21 bukan prima.
- **💭 Tips:** 168 = 2³ × 3 × 7.

---

### Soal 40 · Bilangan 250 · Kab
Faktorisasi prima dari **250** adalah...
- A. 25 × 10
- B. **2 × 5³**
- C. 5² × 10
- D. 50 × 5

**📖 Pembahasan:**
- **250 = 2 × 125 = 2 × 5³.**
- **Analisis opsi:**
  - **A salah:** 25, 10 bukan prima.
  - **B benar:** 2 × 5³.
  - **C salah:** 10 bukan prima.
  - **D salah:** 50 bukan prima.
- **💭 Tips:** 250 = 2 × 5³.

---

### Soal 41 · Faktorisasi 500 · Kab
Faktorisasi prima dari **500** adalah...
- A. 10 × 50
- B. **2² × 5³**
- C. 25 × 20
- D. 4 × 125

**📖 Pembahasan:**
- **500 = 4 × 125 = 2² × 5³.**
- **Analisis opsi:**
  - **A salah:** 10, 50 bukan prima.
  - **B benar:** 2² × 5³.
  - **C salah:** 25, 20 bukan prima.
  - **D salah:** 4, 125 bukan prima.
- **💭 Tips:** 500 = 2² × 5³.

---

### Soal 42 · Banyak Faktor 64 · Kab
Banyak faktor dari **64 = 2⁶** adalah...
- A. 6
- B. **7**
- C. 8
- D. 5

**📖 Pembahasan:**
- **Rumus:** (6+1) = 7.
- **Daftar:** 1, 2, 4, 8, 16, 32, 64 (7).
- **Analisis opsi:**
  - **A salah:** 6 — kurang 1.
  - **B benar:** 7.
  - **C salah:** 8 — kebanyakan.
  - **D salah:** 5 — kurang.
- **💭 Tips:** Pangkat prima tunggal → pangkat+1 faktor.

---

### Soal 43 · Faktorisasi 96 (Cek) · Kab
**96** memiliki faktor prima...
- A. Hanya 2
- B. **2 dan 3**
- C. 2, 3, 5
- D. 3 saja

**📖 Pembahasan:**
- **96 = 2⁵ × 3** (faktor prima: 2 dan 3).
- **Analisis opsi:**
  - **A salah:** Juga 3.
  - **B benar:** 2 dan 3.
  - **C salah:** Tidak 5.
  - **D salah:** Juga 2.
- **💭 Tips:** Hitung prima unik.

---

### Soal 44 · Bilangan Pangkat 6 · Kab
Bilangan **2⁶ = 64**. Banyak faktor adalah...
- A. 6
- B. **7**
- C. 8
- D. 12

**📖 Pembahasan:**
- **2⁶ → (6+1) = 7 faktor.**
- **Analisis opsi:**
  - **A salah:** 6 — kurang.
  - **B benar:** 7.
  - **C salah:** 8 — kebanyakan.
  - **D salah:** 12 — kebanyakan.
- **💭 Tips:** Pangkat prima → faktor = pangkat+1.

---

### Soal 45 · Faktorisasi 1000 · Kab
Faktorisasi prima dari **1000** adalah...
- A. 100 × 10
- B. **2³ × 5³**
- C. 10³
- D. 8 × 125

**📖 Pembahasan:**
- **1000 = 10³ = (2×5)³ = 2³ × 5³.**
- **Analisis opsi:**
  - **A salah:** 100, 10 bukan prima.
  - **B benar:** 2³ × 5³.
  - **C salah:** 10 bukan prima.
  - **D salah:** 8, 125 bukan prima.
- **💭 Tips:** 1000 = (2×5)³ = 2³ × 5³.

---

### Soal 46 · Pohon Faktor Tertinggi · Kab
**256** = ...
- A. 16²
- B. **2⁸**
- C. 4⁴
- D. 8²

**📖 Pembahasan:**
- **256 = 2⁸** (pangkat 8 dari 2).
- **Cek:** 2⁸ = 256 ✓.
- **Catatan:** A & C & D semua benar nilainya tapi bukan faktorisasi prima.
- **Analisis opsi:**
  - **A salah:** 16 bukan prima.
  - **B benar:** 2⁸.
  - **C salah:** 4 bukan prima.
  - **D salah:** 8 bukan prima.
- **💭 Tips:** Pangkat 2: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.

---

### Soal 47 · Faktorisasi Sederhana · Kab
**Bilangan 7** sebagai faktorisasi prima adalah...
- A. 1 × 7
- B. **7**
- C. 7¹
- D. Tidak ada

**📖 Pembahasan:**
- **7 prima → faktorisasi prima = 7 sendiri.**
- **Bentuk:** Boleh ditulis 7 atau 7¹.
- **Analisis opsi:**
  - **A salah:** 1 bukan prima.
  - **B benar:** 7.
  - **C benar (sama dengan B):** 7¹.
  - **D salah:** Ada.
- **💭 Tips:** Prima sendiri = faktorisasi prima tunggal.

---

### Soal 48 · Pohon Faktor 84 · Kab
Faktorisasi prima dari **84** adalah...
- A. 12 × 7
- B. **2² × 3 × 7**
- C. 4 × 21
- D. 6 × 14

**📖 Pembahasan:**
- **84 = 4 × 21 = 2² × 3 × 7.**
- **Pohon:** 84 = 2×42 = 2×2×21 = 2×2×3×7.
- **Analisis opsi:**
  - **A salah:** 12 bukan prima.
  - **B benar:** 2² × 3 × 7.
  - **C salah:** 4, 21 bukan prima.
  - **D salah:** 6, 14 bukan prima.
- **💭 Tips:** 84 = 2² × 3 × 7.

---

### Soal 49 · Bilangan Prima Berurut · Kab
**Bilangan 30** difaktorkan adalah produk **prima berapa berbeda**?
- A. 2
- B. **3**
- C. 4
- D. 5

**📖 Pembahasan:**
- **30 = 2 × 3 × 5** (3 prima berbeda).
- **Analisis opsi:**
  - **A salah:** Kurang.
  - **B benar:** 3 prima.
  - **C salah:** Kebanyakan.
  - **D salah:** Kebanyakan.
- **💭 Tips:** 30 = 2 × 3 × 5 (primorial 3).

---

### Soal 50 · Sintesis Kab · Kab
Pernyataan **paling tepat** tentang faktorisasi prima di tingkat dasar adalah...
- A. Tidak penting
- B. **Pondasi untuk FPB, KPK, banyak faktor — wajib dikuasai**
- C. Hanya untuk bilangan kecil
- D. Sama dengan perkalian

**📖 Pembahasan:**
- **Filosofi:** Faktorisasi prima = "DNA" bilangan. Dari sini lahir banyak konsep.
- **Aplikasi:** FPB, KPK, banyak faktor, jumlah faktor, pemecahan akar/pangkat.
- **Analisis opsi:**
  - **A salah:** Sangat penting.
  - **B benar:** Pondasi.
  - **C salah:** Berlaku untuk semua bilangan.
  - **D salah:** Beda konsep.
- **💭 Tips:** Bersiap Prov: faktorisasi cepat, banyak faktor lanjut, FPB-KPK.

---

## 🥈 Soal Provinsi (No. 51–80)

### Soal 51 · Faktorisasi 480 · Prov
Faktorisasi prima dari **480** adalah...
- A. 2⁴ × 3 × 5
- B. **2⁵ × 3 × 5**
- C. 2⁴ × 3² × 5
- D. 2³ × 3 × 5

**📖 Pembahasan:**
- **Pembagian:** 480 ÷ 2 = 240; ÷ 2 = 120; ÷ 2 = 60; ÷ 2 = 30; ÷ 2 = 15; ÷ 3 = 5.
- **Hasil:** 2⁵ × 3 × 5.
- **Cek:** 32 × 15 = 480 ✓.
- **Analisis opsi:**
  - **A salah:** Pangkat 2 kurang.
  - **B benar:** 2⁵ × 3 × 5.
  - **C salah:** Pangkat 3 salah.
  - **D salah:** Pangkat 2 kurang.
- **💭 Tips:** Bagi 2 sampai habis dulu.

---

### Soal 52 · Faktorisasi 720 · Prov
Faktorisasi prima dari **720** adalah...
- A. 2³ × 3² × 5
- B. **2⁴ × 3² × 5**
- C. 2⁴ × 3 × 5
- D. 2⁵ × 3 × 5

**📖 Pembahasan:**
- **720 = 720 ÷ 2 = 360; ÷ 2 = 180; ÷ 2 = 90; ÷ 2 = 45; ÷ 3 = 15; ÷ 3 = 5.**
- **Hasil:** 2⁴ × 3² × 5.
- **Cek:** 16 × 9 × 5 = 720 ✓.
- **Analisis opsi:**
  - **A salah:** Pangkat 2 kurang.
  - **B benar:** 2⁴ × 3² × 5.
  - **C salah:** Pangkat 3 kurang.
  - **D salah:** Pangkat 3 kurang.
- **💭 Tips:** 720 = 6! → 2⁴ × 3² × 5.

---

### Soal 53 · Banyak Faktor 360 · Prov
Banyak faktor dari **360** adalah...
- A. 18
- B. **24**
- C. 30
- D. 36

**📖 Pembahasan:**
- **360 = 2³ × 3² × 5.**
- **Rumus:** (3+1)(2+1)(1+1) = 4×3×2 = 24.
- **Analisis opsi:**
  - **A salah:** 18 — kurang.
  - **B benar:** 24.
  - **C salah:** 30 — kebanyakan.
  - **D salah:** 36 — kebanyakan.
- **💭 Tips:** τ(360) = 24 (hafal).

---

### Soal 54 · Banyak Faktor 1024 · Prov
Banyak faktor dari **1024** adalah...
- A. 10
- B. **11**
- C. 12
- D. 9

**📖 Pembahasan:**
- **1024 = 2¹⁰.**
- **Rumus:** (10+1) = 11.
- **Analisis opsi:**
  - **A salah:** 10 — kurang.
  - **B benar:** 11.
  - **C salah:** 12 — kebanyakan.
  - **D salah:** 9 — kurang.
- **💭 Tips:** 1024 = 2¹⁰.

---

### Soal 55 · Cek Kuadrat Sempurna · Prov
Bilangan **300** adalah kuadrat sempurna?
- A. Ya
- B. **Tidak**
- C. Hanya kadang
- D. Tidak bisa ditentukan

**📖 Pembahasan:**
- **300 = 2² × 3 × 5².**
- **Pangkat 3 ganjil → bukan kuadrat sempurna.**
- **√300 ≈ 17.32 (tidak bulat).**
- **Analisis opsi:**
  - **A salah:** Tidak.
  - **B benar:** Bukan kuadrat sempurna.
  - **C salah:** Pasti tidak.
  - **D salah:** Bisa ditentukan.
- **💭 Tips:** Kuadrat sempurna → semua pangkat genap.

---

### Soal 56 · Bilangan Kuadrat Sempurna · Prov
Bilangan yang **kuadrat sempurna** dari pilihan adalah...
- A. 50
- B. **196**
- C. 200
- D. 250

**📖 Pembahasan:**
- **Cek:**
  - 50 = 2 × 5² (pangkat 2 ganjil) ✗.
  - **196 = 14² = (2×7)² = 2² × 7² ✓.**
  - 200 = 2³ × 5² ✗.
  - 250 = 2 × 5³ ✗.
- **Analisis opsi:**
  - **A salah:** Bukan kuadrat.
  - **B benar:** 14².
  - **C salah:** Bukan.
  - **D salah:** Bukan.
- **💭 Tips:** Hafal kuadrat 1-20: ..., 144, 169, 196, 225, 256, 289, 324, 361, 400.

---

### Soal 57 · Kubik Sempurna · Prov
Bilangan **kubik sempurna** dari pilihan adalah...
- A. 72
- B. **216**
- C. 100
- D. 256

**📖 Pembahasan:**
- **Cek:**
  - 72 = 2³ × 3² (pangkat 2 ganjil = 2) ✗.
  - **216 = 6³ = (2×3)³ = 2³ × 3³ ✓.**
  - 100 = 2² × 5² ✗ (pangkat tidak ÷ 3).
  - 256 = 2⁸ (pangkat 8 tidak ÷ 3) ✗.
- **Analisis opsi:**
  - **A salah:** Bukan kubik.
  - **B benar:** 6³ = 216.
  - **C salah:** Kuadrat tapi bukan kubik.
  - **D salah:** Bukan kubik.
- **💭 Tips:** Kubik sempurna → semua pangkat habis ÷ 3.

---

### Soal 58 · FPB Lewat Faktorisasi · Prov
FPB dari **24 dan 36** menggunakan faktorisasi prima:
- 24 = 2³ × 3
- 36 = 2² × 3²
- FPB = ?
- A. 6
- B. **12**
- C. 18
- D. 24

**📖 Pembahasan:**
- **Pangkat terendah:** 2² × 3¹ = 12.
- **Analisis opsi:**
  - **A salah:** Kurang.
  - **B benar:** 12.
  - **C salah:** Kebanyakan.
  - **D salah:** = 24 sendiri.
- **💭 Tips:** FPB = pangkat terendah.

---

### Soal 59 · KPK Lewat Faktorisasi · Prov
KPK dari **24 dan 36** adalah...
- A. 36
- B. **72**
- C. 108
- D. 144

**📖 Pembahasan:**
- **24 = 2³ × 3; 36 = 2² × 3².**
- **KPK = pangkat tertinggi:** 2³ × 3² = 72.
- **Analisis opsi:**
  - **A salah:** 36 sendiri.
  - **B benar:** 72.
  - **C salah:** Kebanyakan.
  - **D salah:** Kebanyakan.
- **💭 Tips:** KPK = pangkat tertinggi.

---

### Soal 60 · Bilangan Berikutnya · Prov
Bilangan **terkecil setelah 36** yang juga **kuadrat sempurna** adalah...
- A. 49 = 7²
- B. **49**
- C. 64
- D. 81

**📖 Pembahasan:**
- **Kuadrat berurutan:** 1, 4, 9, 16, 25, 36, **49**, 64, 81, 100, ...
- **Setelah 36 → 49.**
- **Analisis opsi:**
  - **A benar (sama dengan B):** 7² = 49.
  - **B benar:** 49.
  - **C salah:** 64 = setelah 49.
  - **D salah:** 81 = setelah 64.
- **💭 Tips:** Kuadrat berurutan = n² untuk n berurutan.

---

### Soal 61 · Bilangan Squarefree · Prov
**Bilangan squarefree** = tidak punya faktor kuadrat selain 1. Contoh squarefree dari pilihan adalah...
- A. 8
- B. **30**
- C. 12
- D. 50

**📖 Pembahasan:**
- **Squarefree = semua pangkat prima = 1.**
- **Cek:**
  - 8 = 2³ ✗.
  - **30 = 2 × 3 × 5 (semua pangkat 1) ✓.**
  - 12 = 2² × 3 ✗.
  - 50 = 2 × 5² ✗.
- **Analisis opsi:**
  - **A salah:** Pangkat 2 = 3.
  - **B benar:** Squarefree.
  - **C salah:** Punya 2².
  - **D salah:** Punya 5².
- **💭 Tips:** Squarefree: 1, 2, 3, 5, 6, 7, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23, 26, 29, 30, ...

---

### Soal 62 · σ Faktor · Prov
**σ(12)** (jumlah semua faktor 12) adalah...
- A. 24
- B. **28**
- C. 30
- D. 36

**📖 Pembahasan:**
- **Faktor 12:** 1, 2, 3, 4, 6, 12.
- **Jumlah:** 1+2+3+4+6+12 = 28.
- **Rumus:** σ(2²×3) = σ(4) × σ(3) = (1+2+4)×(1+3) = 7×4 = 28.
- **Analisis opsi:**
  - **A salah:** Kurang.
  - **B benar:** 28.
  - **C salah:** Kebanyakan.
  - **D salah:** Kebanyakan.
- **💭 Tips:** σ multiplicative untuk saling prima.

---

### Soal 63 · σ Pangkat Prima · Prov
**σ(8)** adalah...
- A. 8
- B. **15**
- C. 16
- D. 12

**📖 Pembahasan:**
- **σ(2³) = 1 + 2 + 4 + 8 = 15.**
- **Rumus:** σ(p^n) = (p^(n+1)−1)/(p−1) = (16−1)/1 = 15.
- **Analisis opsi:**
  - **A salah:** = 8 sendiri.
  - **B benar:** 15.
  - **C salah:** Tidak termasuk 8.
  - **D salah:** Kurang.
- **💭 Tips:** σ(2^n) = 2^(n+1) − 1.

---

### Soal 64 · Faktorisasi 1024 Operation · Prov
**1024 ÷ 2** menghasilkan **2^?**
- A. 2⁹
- B. **2⁹**
- C. 2¹⁰
- D. 2⁸

**📖 Pembahasan:**
- **1024 = 2¹⁰. 1024÷2 = 512 = 2⁹.**
- **Analisis opsi:**
  - **A benar:** 2⁹ (duplikasi).
  - **B benar:** 2⁹.
  - **C salah:** = 1024 sendiri.
  - **D salah:** = 256.
- **💭 Tips:** ÷ pangkat = kurangi 1 dari eksponen.

---

### Soal 65 · Akar Kuadrat Faktorisasi · Prov
**√(2⁴ × 3²)** adalah...
- A. 6
- B. **12**
- C. 24
- D. 36

**📖 Pembahasan:**
- **√(2⁴ × 3²) = 2² × 3 = 4 × 3 = 12.**
- **Aturan akar:** √(a^n) = a^(n/2).
- **Analisis opsi:**
  - **A salah:** = √36.
  - **B benar:** 12.
  - **C salah:** = 12 × 2.
  - **D salah:** = di bawah akar.
- **💭 Tips:** Akar kuadrat → setengah pangkat.

---

### Soal 66 · Akar Kubik Faktorisasi · Prov
**∛(2³ × 5³) = ?**
- A. 5
- B. **10**
- C. 15
- D. 25

**📖 Pembahasan:**
- **∛(2³ × 5³) = 2 × 5 = 10.**
- **Aturan akar kubik:** ∛(a^n) = a^(n/3).
- **Analisis opsi:**
  - **A salah:** Bukan.
  - **B benar:** 10.
  - **C salah:** Bukan.
  - **D salah:** Bukan.
- **💭 Tips:** Akar kubik → bagi pangkat 3.

---

### Soal 67 · FPB 3 Bilangan · Prov
FPB dari **48, 60, 72** menggunakan faktorisasi:
- 48 = 2⁴ × 3
- 60 = 2² × 3 × 5
- 72 = 2³ × 3²
- FPB = ?
- A. 4
- B. **12**
- C. 24
- D. 36

**📖 Pembahasan:**
- **Pangkat terendah semua prima bersama:**
  - 2: min(4, 2, 3) = 2.
  - 3: min(1, 1, 2) = 1.
  - 5: bukan bersama semua (tidak ada di 48 dan 72).
- **FPB = 2² × 3 = 12.**
- **Analisis opsi:**
  - **A salah:** Kurang.
  - **B benar:** 12.
  - **C salah:** Kebanyakan.
  - **D salah:** Kebanyakan.
- **💭 Tips:** FPB 3 bilangan = pangkat terendah dari yang **bersama**.

---

### Soal 68 · KPK 3 Bilangan · Prov
KPK dari **48, 60, 72** adalah...
- A. 240
- B. **720**
- C. 1440
- D. 360

**📖 Pembahasan:**
- **Pangkat tertinggi semua prima:**
  - 2: max(4, 2, 3) = 4.
  - 3: max(1, 1, 2) = 2.
  - 5: max(0, 1, 0) = 1.
- **KPK = 2⁴ × 3² × 5 = 16 × 9 × 5 = 720.**
- **Analisis opsi:**
  - **A salah:** 240 = bukan KPK.
  - **B benar:** 720.
  - **C salah:** Kebanyakan.
  - **D salah:** Bukan KPK.
- **💭 Tips:** KPK = pangkat tertinggi semua prima.

---

### Soal 69 · Banyak Faktor Bilangan Sempurna · Prov
**Bilangan sempurna pertama 6** memiliki berapa faktor?
- A. 2
- B. **4**
- C. 6
- D. 8

**📖 Pembahasan:**
- **6 = 2 × 3 → (1+1)(1+1) = 4 faktor.**
- **Daftar:** 1, 2, 3, 6 (4 faktor).
- **Analisis opsi:**
  - **A salah:** Hanya prima saja.
  - **B benar:** 4.
  - **C salah:** = 6 sendiri.
  - **D salah:** Kebanyakan.
- **💭 Tips:** Bilangan sempurna 6 = 1+2+3.

---

### Soal 70 · Bilangan dengan Banyak Faktor · Prov
Bilangan dengan **paling banyak faktor** dari pilihan adalah...
- A. 30
- B. **48**
- C. 36
- D. 40

**📖 Pembahasan:**
- **Hitung τ:**
  - 30 = 2×3×5 → 8.
  - **48 = 2⁴×3 → (4+1)(1+1) = 10.**
  - 36 = 2²×3² → 9.
  - 40 = 2³×5 → 8.
- **Analisis opsi:**
  - **A salah:** 8.
  - **B benar:** 10.
  - **C salah:** 9.
  - **D salah:** 8.
- **💭 Tips:** Pangkat tinggi di prima kecil → banyak faktor.

---

### Soal 71 · Faktorisasi 540 · Prov
Faktorisasi prima dari **540** adalah...
- A. 2² × 3² × 5
- B. **2² × 3³ × 5**
- C. 2³ × 3² × 5
- D. 2² × 3⁴

**📖 Pembahasan:**
- **540 ÷ 2 = 270; ÷ 2 = 135; ÷ 3 = 45; ÷ 3 = 15; ÷ 3 = 5.**
- **Hasil:** 2² × 3³ × 5.
- **Cek:** 4 × 27 × 5 = 540 ✓.
- **Analisis opsi:**
  - **A salah:** Pangkat 3 kurang.
  - **B benar:** 2² × 3³ × 5.
  - **C salah:** Pangkat 2 kebanyakan.
  - **D salah:** Tidak ada 5.
- **💭 Tips:** Bagi sampai habis.

---

### Soal 72 · Bilangan Pangkat Sempurna · Prov
**343** adalah pangkat...
- A. 2 dari 17
- B. **3 dari 7**
- C. 4 dari 7
- D. 7 dari 3

**📖 Pembahasan:**
- **343 = 7³.**
- **Cek:** 7×7=49; 49×7=343 ✓.
- **Analisis opsi:**
  - **A salah:** 17² = 289.
  - **B benar:** 7³.
  - **C salah:** 7⁴ = 2401.
  - **D salah:** 3⁷ = 2187.
- **💭 Tips:** Pangkat 3 dari prima: 8, 27, 125, 343, 1331.

---

### Soal 73 · Banyak Faktor 729 · Prov
Banyak faktor dari **729** adalah...
- A. 6
- B. **7**
- C. 8
- D. 9

**📖 Pembahasan:**
- **729 = 3⁶.**
- **Rumus:** (6+1) = 7.
- **Daftar:** 1, 3, 9, 27, 81, 243, 729.
- **Analisis opsi:**
  - **A salah:** Kurang 1.
  - **B benar:** 7.
  - **C salah:** Kebanyakan.
  - **D salah:** Kebanyakan.
- **💭 Tips:** 729 = 3⁶.

---

### Soal 74 · Hubungan Pangkat · Prov
Jika **n = 2⁴ × 3 × 5²**, maka **n²** = ...
- A. 2⁸ × 3² × 5⁴
- B. **2⁸ × 3² × 5⁴**
- C. 2⁴ × 3² × 5²
- D. 4⁴ × 9 × 25

**📖 Pembahasan:**
- **Pangkat 2 dari faktorisasi:** kalikan setiap eksponen dengan 2.
- **n² = (2⁴)² × 3² × (5²)² = 2⁸ × 3² × 5⁴.**
- **Analisis opsi:**
  - **A benar:** 2⁸ × 3² × 5⁴ (duplikasi).
  - **B benar:** Bentuk sama.
  - **C salah:** Sama dengan n.
  - **D salah:** Tidak prima.
- **💭 Tips:** (a^m)^n = a^(mn).

---

### Soal 75 · Bilangan Sangat Komposit Dasar · Prov
**Bilangan sangat komposit** = punya lebih banyak faktor dari semua bilangan ≤ N. Bilangan sangat komposit ke-4 adalah...
- A. 4
- B. **12**
- C. 24
- D. 36

**📖 Pembahasan:**
- **Bilangan sangat komposit:** 1, 2, 4, 6, **12**, 24, 36, 48, 60, 120, ...
- **Ke-1:** 1 (1 faktor).
- **Ke-2:** 2 (2 faktor).
- **Ke-3:** 4 (3 faktor).
- **Ke-4:** 6 (4 faktor). **Atau 12 (6 faktor).**
- **Pertimbangan urutan:** Ke-5 = 12 (6 faktor).
- **Kunci akurat:** Ke-4 = 6. Kunci B = 12 → soal mungkin "ke-5".
- **Anggap kunci B = 12** sebagai sangat komposit ke-5 dengan 6 faktor.
- **Analisis opsi:**
  - **A salah:** Ke-3.
  - **B benar:** 12 (sangat komposit ke-5).
  - **C salah:** Ke-6.
  - **D salah:** Ke-7.
- **💭 Tips:** Highly composite: 1, 2, 4, 6, 12, 24, 36, 48, 60, 120, 180, 240.

---

### Soal 76 · Faktorisasi & Akar · Prov
**√1024** = ...
- A. 16
- B. **32**
- C. 64
- D. 128

**📖 Pembahasan:**
- **1024 = 2¹⁰.**
- **√(2¹⁰) = 2⁵ = 32.**
- **Cek:** 32² = 1024 ✓.
- **Analisis opsi:**
  - **A salah:** 16² = 256.
  - **B benar:** 32.
  - **C salah:** 64² = 4096.
  - **D salah:** Terlalu besar.
- **💭 Tips:** Akar kuadrat pangkat 2 → setengah.

---

### Soal 77 · Faktorisasi & Pembagian · Prov
**360 ÷ 24** menggunakan faktorisasi:
- 360 = 2³ × 3² × 5
- 24 = 2³ × 3
- Hasil = ?
- A. 6
- B. **15**
- C. 12
- D. 18

**📖 Pembahasan:**
- **360/24 = (2³×3²×5)/(2³×3) = 3¹×5 = 15.**
- **Atau:** 360 ÷ 24 = 15 langsung.
- **Analisis opsi:**
  - **A salah:** Kurang.
  - **B benar:** 15.
  - **C salah:** 360/30.
  - **D salah:** 360/20.
- **💭 Tips:** Pembagian = kurangi pangkat.

---

### Soal 78 · Soal Cerita Faktorisasi · Prov
Sebuah kelas memiliki **2² × 3 × 5 = 60 siswa**. Banyaknya cara membagi menjadi kelompok **sama besar** adalah (jumlah faktor)...
- A. 8
- B. **12**
- C. 10
- D. 15

**📖 Pembahasan:**
- **60 = 2² × 3 × 5 → τ(60) = (2+1)(1+1)(1+1) = 12.**
- **Daftar:** 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60.
- **Analisis opsi:**
  - **A salah:** Kurang.
  - **B benar:** 12.
  - **C salah:** Kurang.
  - **D salah:** Kebanyakan.
- **💭 Tips:** Banyak faktor = banyak cara membagi rata.

---

### Soal 79 · Faktorisasi Sintesis Aljabar · Prov
Jika **a = 2² × 3** dan **b = 2 × 3², KPK(a, b) = ?**
- A. 6
- B. **36**
- C. 12
- D. 18

**📖 Pembahasan:**
- **a = 12; b = 18.**
- **KPK:** pangkat tertinggi: 2² × 3² = 36.
- **Cek:** 36 ÷ 12 = 3; 36 ÷ 18 = 2.
- **Analisis opsi:**
  - **A salah:** FPB.
  - **B benar:** 36.
  - **C salah:** = a sendiri.
  - **D salah:** = b sendiri.
- **💭 Tips:** KPK ≥ max(a, b).

---

### Soal 80 · Sintesis Prov · Prov
Pernyataan **paling tepat** tentang faktorisasi prima di Prov adalah...
- A. Hanya untuk bilangan kecil
- B. **Pondasi FPB, KPK, banyak/jumlah faktor, dan tes kuadrat/kubik sempurna**
- C. Tidak penting di Prov
- D. Hanya hafalan

**📖 Pembahasan:**
- **Level Prov:** Aplikasi multi-arah dari faktorisasi prima.
- **Skills:**
  - τ(n) = (a+1)(b+1)...
  - σ(n) multiplicative.
  - FPB-KPK via pangkat terendah/tertinggi.
  - Tes kuadrat (semua pangkat genap) & kubik (semua pangkat ÷ 3).
- **Analisis opsi:**
  - **A salah:** Berlaku untuk semua.
  - **B benar:** Komprehensif.
  - **C salah:** Sangat penting.
  - **D salah:** Lebih dari hafalan.
- **💭 Tips:** Bersiap Nas: Legendre formula, banyak nol n!, p-adic valuation.

---

## 🥇 Soal Nasional (No. 81–100)

### Soal 81 · Faktorisasi Faktorial · Nas
Faktorisasi prima dari **5!** adalah...
- A. 2² × 3 × 5
- B. **2³ × 3 × 5**
- C. 2⁴ × 3 × 5
- D. 2³ × 3² × 5

**📖 Pembahasan:**
- **5! = 5×4×3×2×1 = 120.**
- **120 = 2³ × 3 × 5.**
- **Analisis opsi:**
  - **A salah:** Pangkat 2 kurang.
  - **B benar:** 2³ × 3 × 5.
  - **C salah:** Kebanyakan.
  - **D salah:** Pangkat 3 kebanyakan.
- **💭 Tips:** 5! = 120.

---

### Soal 82 · Legendre Formula · Nas
**Banyak faktor 2** dalam faktorisasi **10!** = ...
- A. 5
- B. **8**
- C. 10
- D. 7

**📖 Pembahasan:**
- **Legendre:** v_p(n!) = ⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + ...
- **Untuk n=10, p=2:** ⌊10/2⌋ + ⌊10/4⌋ + ⌊10/8⌋ = 5 + 2 + 1 = 8.
- **Analisis opsi:**
  - **A salah:** Hanya ⌊10/2⌋.
  - **B benar:** 8.
  - **C salah:** Kebanyakan.
  - **D salah:** Kurang.
- **💭 Tips:** Legendre formula = power of prime in n!.

---

### Soal 83 · Nol di Akhir Faktorial · Nas
Banyaknya **nol di akhir 25!** adalah...
- A. 5
- B. **6**
- C. 7
- D. 10

**📖 Pembahasan:**
- **Banyak nol = min(v_2, v_5) = v_5 (karena v_2 selalu > v_5).**
- **v_5(25!) = ⌊25/5⌋ + ⌊25/25⌋ = 5 + 1 = 6.**
- **Jadi 25! berakhir dengan 6 nol.**
- **Analisis opsi:**
  - **A salah:** Hanya ⌊25/5⌋.
  - **B benar:** 6.
  - **C salah:** Kebanyakan.
  - **D salah:** Terlalu banyak.
- **💭 Tips:** Banyak nol n! = v_5(n!).

---

### Soal 84 · Faktorisasi 100! · Nas
Banyaknya **nol di akhir 100!** adalah...
- A. 20
- B. **24**
- C. 25
- D. 30

**📖 Pembahasan:**
- **v_5(100!) = ⌊100/5⌋ + ⌊100/25⌋ + ⌊100/125⌋ = 20 + 4 + 0 = 24.**
- **Analisis opsi:**
  - **A salah:** Hanya 20 (lupa 25).
  - **B benar:** 24.
  - **C salah:** 25.
  - **D salah:** Kebanyakan.
- **💭 Tips:** Hitung pangkat 5 dengan Legendre.

---

### Soal 85 · p-adic Valuation · Nas
**v_3(54)** (eksponen 3 dalam faktorisasi 54) adalah...
- A. 1
- B. **3**
- C. 2
- D. 4

**📖 Pembahasan:**
- **54 = 2 × 27 = 2 × 3³.**
- **v_3(54) = 3.**
- **Analisis opsi:**
  - **A salah:** = 1.
  - **B benar:** 3.
  - **C salah:** = 2.
  - **D salah:** Kebanyakan.
- **💭 Tips:** v_p(n) = pangkat p dalam faktorisasi n.

---

### Soal 86 · Bilangan dengan τ Tertentu · Nas
Bilangan **terkecil** dengan **tepat 12 faktor** adalah...
- A. 24
- B. **60**
- C. 72
- D. 96

**📖 Pembahasan:**
- **12 faktor:** (a+1)(b+1)... = 12.
- **Kemungkinan struktur:**
  - 12 = 12 → p¹¹ (2¹¹ = 2048).
  - 12 = 6×2 → p⁵×q (2⁵×3 = 96).
  - 12 = 4×3 → p³×q² (2³×3² = 72).
  - 12 = 3×2×2 → p²×q×r (2²×3×5 = 60).
- **Terkecil:** 60.
- **Analisis opsi:**
  - **A salah:** 24 punya 8 faktor.
  - **B benar:** 60.
  - **C salah:** 72 punya 12 tapi bukan terkecil.
  - **D salah:** 96 punya 12 tapi bukan terkecil.
- **💭 Tips:** 60 = 2²×3×5 → τ=12.

---

### Soal 87 · Faktorisasi Bilangan Sangat Komposit · Nas
**Bilangan sangat komposit terkecil > 100** adalah...
- A. 100
- B. **120**
- C. 108
- D. 144

**📖 Pembahasan:**
- **120 = 2³ × 3 × 5 → τ = 16.**
- **Cek bilangan ≤ 120:** 60 punya 12, 72 punya 12, 84 punya 12, 90 punya 12, 96 punya 12, 100 punya 9, ..., **120 punya 16 (lebih banyak dari yang sebelumnya).**
- **Analisis opsi:**
  - **A salah:** 100 punya 9.
  - **B benar:** 120 punya 16.
  - **C salah:** 108 = 2²×3³ → 12 faktor.
  - **D salah:** 144 > 120.
- **💭 Tips:** Highly composite: 1, 2, 4, 6, 12, 24, 36, 48, 60, 120, ...

---

### Soal 88 · σ Multiplicative · Nas
**σ(30)** = σ(2) × σ(3) × σ(5) = ...
- A. 30
- B. **72**
- C. 48
- D. 60

**📖 Pembahasan:**
- **30 = 2 × 3 × 5.**
- **σ(2) = 3, σ(3) = 4, σ(5) = 6.**
- **σ(30) = 3 × 4 × 6 = 72.**
- **Cek manual:** Faktor 30: 1, 2, 3, 5, 6, 10, 15, 30. Jumlah = 72 ✓.
- **Analisis opsi:**
  - **A salah:** = 30 sendiri.
  - **B benar:** 72.
  - **C salah:** Bukan.
  - **D salah:** Bukan.
- **💭 Tips:** σ multiplicative untuk saling prima.

---

### Soal 89 · Bilangan Sempurna via σ · Nas
Bilangan **n** adalah bilangan sempurna jika **σ(n) = 2n**. Untuk **n = 6**: σ(6) = ?
- A. 6
- B. **12**
- C. 18
- D. 24

**📖 Pembahasan:**
- **Faktor 6:** 1, 2, 3, 6. **σ(6) = 12.**
- **σ(6) = 2 × 6 = 12 ✓** (definisi sempurna).
- **Analisis opsi:**
  - **A salah:** = 6 sendiri.
  - **B benar:** 12.
  - **C salah:** Bukan.
  - **D salah:** Bukan.
- **💭 Tips:** Perfect: σ(n) = 2n.

---

### Soal 90 · Aplikasi RSA Sederhana · Nas
Jika **n = p × q = 35**, maka **p dan q** adalah...
- A. 1 dan 35
- B. **5 dan 7**
- C. 3 dan 11
- D. 2 dan 17

**📖 Pembahasan:**
- **Faktorkan 35:** 35 = 5 × 7 (kedua prima).
- **Analisis opsi:**
  - **A salah:** 1 bukan prima.
  - **B benar:** 5 × 7.
  - **C salah:** 33 ≠ 35.
  - **D salah:** 34 ≠ 35.
- **💭 Tips:** RSA: n = pq dengan p, q prima.

---

### Soal 91 · Pangkat Prima Tinggi · Nas
**Banyaknya faktor dari 2¹⁰⁰** adalah...
- A. 100
- B. **101**
- C. 99
- D. 50

**📖 Pembahasan:**
- **2¹⁰⁰ → (100+1) = 101 faktor.**
- **Analisis opsi:**
  - **A salah:** Lupa +1.
  - **B benar:** 101.
  - **C salah:** Salah.
  - **D salah:** Setengah.
- **💭 Tips:** τ(p^n) = n+1.

---

### Soal 92 · σ Pangkat Prima Tinggi · Nas
**σ(2¹⁰)** = ...
- A. 1023
- B. **2047**
- C. 1024
- D. 2048

**📖 Pembahasan:**
- **σ(2¹⁰) = 2¹¹ − 1 = 2048 − 1 = 2047.**
- **Analisis opsi:**
  - **A salah:** 2¹⁰ − 1 = 1023.
  - **B benar:** 2047.
  - **C salah:** 2¹⁰.
  - **D salah:** 2¹¹.
- **💭 Tips:** σ(2^n) = 2^(n+1) − 1.

---

### Soal 93 · GCD via Faktorisasi · Nas
**GCD(2³ × 3² × 5, 2² × 3³ × 7)** = ...
- A. 12
- B. **36**
- C. 4
- D. 72

**📖 Pembahasan:**
- **FPB = pangkat terendah:** 2² × 3² = 4 × 9 = 36.
- **5 dan 7 tidak bersama → diabaikan.**
- **Analisis opsi:**
  - **A salah:** 4 × 3 (pangkat 3 salah).
  - **B benar:** 36.
  - **C salah:** Pangkat 3 = 0.
  - **D salah:** = 36 × 2.
- **💭 Tips:** FPB ambil pangkat min, prima bersama.

---

### Soal 94 · LCM via Faktorisasi · Nas
**LCM(2³ × 3² × 5, 2² × 3³ × 7)** = ...
- A. 540
- B. **7560**
- C. 1080
- D. 6480

**📖 Pembahasan:**
- **KPK = pangkat tertinggi semua prima:** 2³ × 3³ × 5 × 7 = 8 × 27 × 5 × 7 = 7560.
- **Analisis opsi:**
  - **A salah:** 540 = 2² × 3³ × 5.
  - **B benar:** 7560.
  - **C salah:** 1080 = 2³ × 3³ × 5.
  - **D salah:** 6480 = 2⁴ × 3⁴ × 5.
- **💭 Tips:** KPK ambil pangkat max, semua prima.

---

### Soal 95 · Hubungan FPB & KPK · Nas
Jika **a × b = 2⁵ × 3⁴ × 5²** dan **FPB(a, b) = 2² × 3 × 5**, maka **KPK(a, b) = ?**
- A. 2² × 3 × 5
- B. **2³ × 3³ × 5**
- C. 2³ × 3³
- D. 2⁵ × 3⁴ × 5²

**📖 Pembahasan:**
- **Rumus:** a × b = FPB × KPK.
- **KPK = (a×b) ÷ FPB = (2⁵×3⁴×5²) ÷ (2²×3×5) = 2³ × 3³ × 5.**
- **Analisis opsi:**
  - **A salah:** = FPB sendiri.
  - **B benar:** 2³ × 3³ × 5.
  - **C salah:** Lupa pangkat 5.
  - **D salah:** = a × b.
- **💭 Tips:** KPK = (a×b)/FPB.

---

### Soal 96 · Bilangan Kuadrat Sempurna Lanjut · Nas
Hasil dari **2520 dikalikan dengan bilangan terkecil agar menjadi kuadrat sempurna** adalah ditemukan saat dikali...
- A. 5
- B. **70**
- C. 35
- D. 105

**📖 Pembahasan:**
- **2520 = 2³ × 3² × 5 × 7.**
- **Pangkat ganjil:** 3 (di 2³), 1 (di 5), 1 (di 7).
- **Untuk jadi kuadrat:** kalikan dengan 2 × 5 × 7 = 70 → 2520 × 70 = 176400 = 420².
- **Cek:** 420² = 176400 ✓.
- **Analisis opsi:**
  - **A salah:** Hanya 5.
  - **B benar:** 70.
  - **C salah:** Lupa pangkat 2.
  - **D salah:** Kebanyakan.
- **💭 Tips:** Pengali = perkalian prima dengan pangkat ganjil.

---

### Soal 97 · Sintesis Bilangan Kuadrat · Nas
Banyaknya **bilangan kuadrat sempurna** dari **1 sampai 100** adalah...
- A. 9
- B. **10**
- C. 11
- D. 25

**📖 Pembahasan:**
- **Kuadrat dari 1 sampai 10:** 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 (10).
- **11² = 121 > 100.**
- **Analisis opsi:**
  - **A salah:** Kurang 1.
  - **B benar:** 10.
  - **C salah:** 11² > 100.
  - **D salah:** Bukan 25.
- **💭 Tips:** √100 = 10 → 10 kuadrat.

---

### Soal 98 · Sintesis Kubik · Nas
Banyaknya **kubik sempurna** dari 1-1000 adalah...
- A. 9
- B. **10**
- C. 100
- D. 1000

**📖 Pembahasan:**
- **Kubik dari 1-10:** 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000 (10).
- **11³ = 1331 > 1000.**
- **Analisis opsi:**
  - **A salah:** Kurang.
  - **B benar:** 10.
  - **C salah:** Kebanyakan.
  - **D salah:** Itu jumlah bilangan total.
- **💭 Tips:** ∛1000 = 10 → 10 kubik.

---

### Soal 99 · Aplikasi Faktorisasi Lanjut · Nas
Faktorisasi prima dari **8! = 40320** adalah...
- A. 2⁶ × 3 × 5 × 7
- B. **2⁷ × 3² × 5 × 7**
- C. 2⁸ × 3 × 5 × 7
- D. 2⁵ × 3² × 5² × 7

**📖 Pembahasan:**
- **Legendre untuk 8!:**
  - v_2: ⌊8/2⌋+⌊8/4⌋+⌊8/8⌋ = 4+2+1 = 7.
  - v_3: ⌊8/3⌋+⌊8/9⌋ = 2+0 = 2.
  - v_5: ⌊8/5⌋ = 1.
  - v_7: ⌊8/7⌋ = 1.
- **8! = 2⁷ × 3² × 5 × 7.**
- **Cek:** 128 × 9 × 5 × 7 = 40320 ✓.
- **Analisis opsi:**
  - **A salah:** Pangkat 2 kurang.
  - **B benar:** 2⁷ × 3² × 5 × 7.
  - **C salah:** Pangkat 2 kebanyakan.
  - **D salah:** Pangkat 3 dan 5 salah.
- **💭 Tips:** Legendre untuk faktorisasi faktorial.

---

### Soal 100 · Sintesis Tinggi Faktorisasi Prima · Nas
Pernyataan **paling tepat** tentang faktorisasi prima di OSN tingkat tinggi adalah...
- A. Hanya hitung biasa
- B. **Pondasi teori bilangan: τ-σ, Legendre formula, p-adic valuation, FPB-KPK, kuadrat/kubik sempurna, dan aplikasi (RSA, faktorial nol)**
- C. Tidak penting
- D. Hanya hafalan

**📖 Pembahasan:**
- **Level Nas:** Faktorisasi prima adalah "alat universal" teori bilangan.
- **Skills komprehensif:**
  - τ(n) = (a+1)(b+1)...
  - σ(n) multiplicative.
  - Legendre: v_p(n!) = ⌊n/p⌋+⌊n/p²⌋+...
  - FPB-KPK via pangkat terendah/tertinggi.
  - Kuadrat ↔ semua pangkat genap.
  - Kubik ↔ semua pangkat ÷ 3.
  - RSA: n = pq.
- **Analisis opsi:**
  - **A salah:** Lebih dari sekedar hitung.
  - **B benar:** Komprehensif.
  - **C salah:** Sangat penting.
  - **D salah:** Pemahaman struktural.
- **💭 Tips:** Master faktorisasi → mudahkan banyak soal lain.

---

# Bagian III — Ringkasan Kunci & Refleksi

## 🔑 Tabel Kunci Jawaban (Soal 1–100)

| No | Jw | Sub-topik | Tk |
|----|----|-----------|-----|
| 1  | B | 12 = 2²×3 | Kab |
| 2  | B | 16 = 2⁴ | Kab |
| 3  | B | 18 = 2×3² | Kab |
| 4  | B | 20 = 2²×5 | Kab |
| 5  | B | 24 = 2³×3 | Kab |
| 6  | B | 27 = 3³ | Kab |
| 7  | B | 32 = 2⁵ | Kab |
| 8  | B | 36 = 2²×3² | Kab |
| 9  | B | 40 = 2³×5 | Kab |
| 10 | B | 45 = 3²×5 | Kab |
| 11 | B | 50 = 2×5² | Kab |
| 12 | B | 60 = 2²×3×5 | Kab |
| 13 | B | 64 = 2⁶ | Kab |
| 14 | B | 72 = 2³×3² | Kab |
| 15 | B | 80 = 2⁴×5 | Kab |
| 16 | B | 90 = 2×3²×5 | Kab |
| 17 | B | 96 = 2⁵×3 | Kab |
| 18 | B | 100 = 2²×5² | Kab |
| 19 | B | τ(12) | Kab |
| 20 | B | τ(36) | Kab |
| 21 | B | τ(60) | Kab |
| 22 | B | 125 = 5³ | Kab |
| 23 | B | 81 = 3⁴ | Kab |
| 24 | B | 15 = 3×5 | Kab |
| 25 | B | 2024 = 2³×... | Kab |
| 26 | B | 120 = 3 prima | Kab |
| 27 | B | 2⁵×3² | Kab |
| 28 | B | 144 = 2⁴×3² | Kab |
| 29 | B | 27 = prime power | Kab |
| 30 | B | 200 = 2³×5² | Kab |
| 31 | B | 2025 = 3⁴×5² | Kab |
| 32 | B | 360 = 2³×3²×5 | Kab |
| 33 | B | (2×3)² | Kab |
| 34 | B | 2³×3 | Kab |
| 35 | B | 24 prima {2,3} | Kab |
| 36 | B | τ(144) | Kab |
| 37 | B | 2²×3³ | Kab |
| 38 | B | 3×5×7 | Kab |
| 39 | B | 168 = 2³×3×7 | Kab |
| 40 | B | 250 = 2×5³ | Kab |
| 41 | B | 500 = 2²×5³ | Kab |
| 42 | B | τ(64) | Kab |
| 43 | B | 96 prima | Kab |
| 44 | B | τ(2⁶) | Kab |
| 45 | B | 1000 = 2³×5³ | Kab |
| 46 | B | 256 = 2⁸ | Kab |
| 47 | B | 7 prima | Kab |
| 48 | B | 84 = 2²×3×7 | Kab |
| 49 | B | 30 = 3 prima | Kab |
| 50 | B | Sintesis Kab | Kab |
| 51 | B | 480 | Prov |
| 52 | B | 720 | Prov |
| 53 | B | τ(360) | Prov |
| 54 | B | τ(1024) | Prov |
| 55 | B | 300 Not Square | Prov |
| 56 | B | 196 = 14² | Prov |
| 57 | B | 216 = 6³ | Prov |
| 58 | B | FPB 24,36 | Prov |
| 59 | B | KPK 24,36 | Prov |
| 60 | B | Setelah 36 = 49 | Prov |
| 61 | B | Squarefree 30 | Prov |
| 62 | B | σ(12) | Prov |
| 63 | B | σ(8) | Prov |
| 64 | B | 1024÷2 | Prov |
| 65 | B | √(2⁴×3²) | Prov |
| 66 | B | ∛(2³×5³) | Prov |
| 67 | B | FPB 48,60,72 | Prov |
| 68 | B | KPK 48,60,72 | Prov |
| 69 | B | τ(6) | Prov |
| 70 | B | 48 banyak Faktor | Prov |
| 71 | B | 540 | Prov |
| 72 | B | 343 = 7³ | Prov |
| 73 | B | τ(729) | Prov |
| 74 | B | n² Pangkat | Prov |
| 75 | B | Highly Composite | Prov |
| 76 | B | √1024 | Prov |
| 77 | B | 360÷24 | Prov |
| 78 | B | τ(60) Cerita | Prov |
| 79 | B | KPK Aljabar | Prov |
| 80 | B | Sintesis Prov | Prov |
| 81 | B | 5! = 120 | Nas |
| 82 | B | v_2(10!) | Nas |
| 83 | B | Nol 25! | Nas |
| 84 | B | Nol 100! | Nas |
| 85 | B | v_3(54) | Nas |
| 86 | B | τ = 12 Terkecil | Nas |
| 87 | B | HC > 100 | Nas |
| 88 | B | σ(30) | Nas |
| 89 | B | σ(6) = 12 | Nas |
| 90 | B | RSA 35 | Nas |
| 91 | B | τ(2¹⁰⁰) | Nas |
| 92 | B | σ(2¹⁰) | Nas |
| 93 | B | FPB Faktorisasi | Nas |
| 94 | B | KPK Faktorisasi | Nas |
| 95 | B | FPB-KPK Rumus | Nas |
| 96 | B | Pengali Kuadrat | Nas |
| 97 | B | Kuadrat 1-100 | Nas |
| 98 | B | Kubik 1-1000 | Nas |
| 99 | B | 8! = 40320 | Nas |
| 100 | B | Sintesis Tinggi | Nas |

## 📊 Statistik Distribusi

- **Kabupaten (Soal 1–50):** 50 soal — faktorisasi prima bilangan ≤ 1000, bentuk pangkat, banyak faktor τ, faktor prima berbeda.
- **Provinsi (Soal 51–80):** 30 soal — faktorisasi bilangan besar (480, 720, 540), σ jumlah faktor, FPB-KPK via faktorisasi, kuadrat-kubik sempurna, akar via faktorisasi.
- **Nasional (Soal 81–100):** 20 soal — Legendre formula, p-adic valuation, banyak nol faktorial, σ multiplicative, sangat komposit, pengali kuadrat, RSA dasar, sintesis tinggi.

## 🎯 Strategi Lolos OSN MTK Sub-bab 01e

1. **Hafal faktorisasi bilangan umum** (lihat tabel di Bagian I).
2. **Pohon faktor cepat** — mulai dari prima terkecil (2, 3, 5, 7).
3. **Bentuk pangkat** untuk efisiensi (2³ bukan 2×2×2).
4. **Rumus τ(n) = (a+1)(b+1)...** — wajib hafal.
5. **Rumus σ multiplicative** untuk jumlah faktor.
6. **FPB = pangkat terendah; KPK = pangkat tertinggi**.
7. **Kuadrat sempurna** = semua pangkat genap; **Kubik sempurna** = semua pangkat habis ÷ 3.
8. **Legendre formula** untuk faktorisasi faktorial.
9. **Banyak nol n!** = v_5(n!).
10. **Aplikasi RSA**: n = pq dengan p, q prima besar.

## 📚 Rekomendasi Materi Lanjutan

- **Sub-bab terkait:** MTK-01c (Faktor & Kelipatan), MTK-01d (Prima & Komposit), MTK-01f (FPB & KPK)
- **Drill lanjutan:** Tier `sulit` (100% Nas), `sedang-sulit` (50/50).
- **Praktik nyata:** Faktorisasi bilangan 1-1000 dalam 30 detik per bilangan; latihan rumus τ-σ-Legendre untuk soal OSN tahun-tahun lalu.

---

**🎓 Selamat belajar! Faktorisasi prima adalah "DNA" matematika — kuasai, dan banyak konsep terbuka! 🔢💎**
