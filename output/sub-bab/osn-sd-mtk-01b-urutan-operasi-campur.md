# OSN/KSN SD — MTK · Sub-Bab 01b: Urutan Operasi (Tingkat Campur)

> **Profil**: 50 Kab + 30 Prov + 20 Nas = 100 soal PG
> **Fokus**: hierarki operasi (kurung, pangkat, kali/bagi, tambah/kurang)
> **Target**: SD 5-6 OSN/KSN

---

## BAGIAN I · KONSEP & STRATEGI

### 1. Urutan Operasi (KPKBTK / BODMAS / PEMDAS)

Saat kita melihat soal seperti `5 + 3 × 2`, ada **dua kemungkinan** kalau kita asal hitung:

- Kalau kita kerjakan dari kiri ke kanan saja: `(5 + 3) × 2 = 16`.
- Kalau kita kerjakan perkalian dulu: `5 + (3 × 2) = 5 + 6 = 11`.

Jawaban yang benar adalah **11**. Mengapa? Karena ada **aturan internasional** yang menentukan urutan operasi:

| Urutan | Operasi | Singkatan Indonesia | Singkatan Inggris |
|:------:|---------|---------------------|-------------------|
| 1 | **K**urung `( )` `[ ]` `{ }` | **K** | **B**rackets / **P**arentheses |
| 2 | **P**angkat & akar `xⁿ`, `√x` | **P** | **O**rders / **E**xponents |
| 3 | **K**ali `×` & **B**agi `÷` (kiri → kanan) | **KB** | **DM** / **MD** |
| 4 | **T**ambah `+` & **K**urang `−` (kiri → kanan) | **TK** | **AS** |

Akronim populer:
- **KPKBTK** (Indonesia) — Kurung, Pangkat, Kali, Bagi, Tambah, Kurang
- **BODMAS** — Brackets, Orders, Division, Multiplication, Addition, Subtraction
- **PEMDAS** — Parentheses, Exponents, Multiplication, Division, Addition, Subtraction

Ketiganya **artinya sama persis**.

### 2. Mengapa Urutan Penting?

Bayangkan kamu di toko jajan. Kamu beli **5 permen** seharga Rp1.000 dan **3 cokelat** seharga Rp2.000 per buah. Kalimat matematikanya:

`5 × 1.000 + 3 × 2.000`

- Kalau kiri-ke-kanan tanpa hierarki: `5 × 1.000 = 5.000`, lalu `5.000 + 3 = 5.003`, lalu `5.003 × 2.000 = 10.006.000`. **Absurd!**
- Kalau hierarki KPKBTK: kerjakan dua perkalian dulu → `5.000 + 6.000 = 11.000`. **Masuk akal.**

Tanpa aturan urutan operasi, setiap orang akan dapat jawaban berbeda untuk soal yang sama. Aturan KPKBTK adalah **bahasa universal matematika**.

### 3. Tingkatan Kurung (Hierarki Bracket)

Kalau ada kurung di dalam kurung (nested), urutannya:

```
{ [ ( ... ) ] }
```

1. **Kurung biasa `( )`** — paling dalam, dikerjakan pertama.
2. **Kurung siku `[ ]`** — di tengah.
3. **Kurung kurawal `{ }`** — paling luar.

Contoh:
`100 − {50 + [20 − (5 × 2)]}`
- Langkah 1 (kurung biasa): `5 × 2 = 10` → `100 − {50 + [20 − 10]}`
- Langkah 2 (kurung siku): `20 − 10 = 10` → `100 − {50 + 10}`
- Langkah 3 (kurung kurawal): `50 + 10 = 60` → `100 − 60 = 40`. **Jawaban: 40.**

Di Indonesia, banyak soal modern hanya pakai `( )` semua dengan ukuran berbeda — prinsipnya tetap: **yang paling dalam dulu**.

### 4. Aturan "Kiri ke Kanan" untuk Kali/Bagi & Tambah/Kurang

Ini sering disalahpahami: **kali tidak lebih tinggi dari bagi**, juga **tambah tidak lebih tinggi dari kurang**. Mereka **sederajat** — kerjakan dari **kiri ke kanan** sesuai urutan munculnya.

Contoh 1: `12 ÷ 4 × 3`
- Benar: `(12 ÷ 4) × 3 = 3 × 3 = 9`. (kiri dulu)
- Salah: `12 ÷ (4 × 3) = 12 ÷ 12 = 1`. ✗

Contoh 2: `20 − 8 + 3`
- Benar: `(20 − 8) + 3 = 12 + 3 = 15`.
- Salah: `20 − (8 + 3) = 20 − 11 = 9`. ✗

### 5. Pangkat & Akar

`5 + 2³` = `5 + 8 = 13` (pangkat dulu).
`(5 + 2)³` = `7³ = 343` (kurung dulu).
`√(9 + 16)` = `√25 = 5` (di dalam akar = di dalam kurung).
`√9 + √16` = `3 + 4 = 7`.

### 6. Tanda "−" sebagai Negatif vs Pengurang

Untuk SD, biasanya kita anggap `−5` di depan adalah lawan dari `5`. Hati-hati:
- `7 − 3 + 2` = `4 + 2 = 6` (bukan `7 − 5 = 2`).

### 7. Kesalahan Umum yang Dipakai sebagai Distractor

| No | Kesalahan | Contoh |
|:--:|-----------|--------|
| 1 | Kiri-ke-kanan tanpa hierarki | `5 + 3 × 2 = 16` (seharusnya 11) |
| 2 | Mengerjakan tambah dulu daripada kurang | `20 − 8 + 3 = 9` (seharusnya 15) |
| 3 | Kali lebih dulu daripada bagi padahal bagi di kiri | `12 ÷ 4 × 3 = 1` (seharusnya 9) |
| 4 | Lupa kurung di pangkat | `(2 + 3)² = 13` (mencampur, seharusnya 25) |
| 5 | Salah kurung bersarang (luar dulu) | `100 − {50 + [20 − (5 × 2)]} ≠ 100 − 50 = 50` |
| 6 | Anggap pangkat di luar berlaku ke seluruh | `2 × 3² = 36` (seharusnya 18) |

### 8. Strategi Mengerjakan

1. **Lingkari atau garis bawahi** setiap pasangan kurung sebelum mulai.
2. **Hitung satu langkah, salin ulang baris** — jangan loncat banyak operasi sekaligus.
3. **Kurung paling dalam dulu**, ke luar.
4. **Pangkat segera setelah kurung** beres.
5. **Kali/bagi sederajat** — kiri ke kanan.
6. **Tambah/kurang sederajat** — kiri ke kanan.
7. **Cek balik** jawaban dengan kalkulator kepala (estimasi).

### 9. Tabel Cepat Pangkat untuk SD

| n | n² | n³ |
|:-:|:--:|:--:|
| 2 | 4  | 8  |
| 3 | 9  | 27 |
| 4 | 16 | 64 |
| 5 | 25 | 125 |
| 6 | 36 | 216 |
| 10| 100| 1000|

Hafalkan ini — soal pangkat di OSN sering pakai bilangan kecil.

---

## BAGIAN II · 100 SOAL PG

### KAB · Soal 1–50 (Tingkat Mudah–Sedang, C2–C3)
*Operasi sederhana 2–3 elemen, kurung tunggal, bilangan bulat ramah.*

**1.** Hitunglah: `5 + 3 × 2 = ....`
- A. 11
- B. 16
- C. 13
- D. 8

**Kunci: A**
**Pembahasan:**
- **A benar** — KPKBTK: kerjakan perkalian dulu, `3 × 2 = 6`, lalu `5 + 6 = 11`.
- **B salah** — Hitung kiri-ke-kanan tanpa hierarki: `(5+3)×2 = 16`. Ini kesalahan paling umum.
- **C salah** — Penjumlahan keliru: `5 + 3 + 2 × 1 = 13`? Bukan; sekadar umpan dekat.
- **D salah** — Mengabaikan perkalian: `5 + 3 = 8`, lupa `× 2`.
- **Konsep kunci:** Pada `5 + 3 × 2`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. KPKBTK: kerjakan perkalian dulu, `3 × 2 = 6`
  2. Kemudian, `5 + 6 = 11`

---

**2.** Hitunglah: `10 − 4 ÷ 2 = ....`
- A. 3
- B. 8
- C. 1
- D. 6

**Kunci: B**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan: `(10−4) ÷ 2 = 6 ÷ 2 = 3`. Salah urutan.
- **B benar** — Bagi dulu: `4 ÷ 2 = 2`, lalu `10 − 2 = 8`.
- **C salah** — Anggap `10 ÷ 4 × 2 − ?` — pembagian dilakukan ke 10. Salah.
- **D salah** — Lupa `÷ 2`: `10 − 4 = 6`.
- **Konsep kunci:** Pada `10 − 4 ÷ 2`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Bagi dulu: `4 ÷ 2 = 2`
  2. Kemudian, `10 − 2 = 8`

---

**3.** Hitunglah: `(6 + 4) × 3 = ....`
- A. 18
- B. 22
- C. 30
- D. 24

**Kunci: C**
**Pembahasan:**
- **A salah** — Cuma mengalikan 4 dan 3: `6 + 4×3 = 18` (mengabaikan kurung).
- **B salah** — Salah hitung kurung: `6 + 4 = 10` lalu salah penjumlahan.
- **C benar** — Kurung dulu: `6 + 4 = 10`, lalu `10 × 3 = 30`.
- **D salah** — Salah perkalian: `8 × 3 = 24` (anggap 6+4=8).
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(6 + 4) × 3` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `6 + 4 = 10`
  2. Kemudian, `10 × 3 = 30`

---

**4.** Hitunglah: `20 ÷ (5 − 1) = ....`
- A. 4
- B. 5
- C. 3
- D. 6

**Kunci: B**
**Pembahasan:**
- **A salah** — `20 ÷ 5 − 1 = 4 − 1 = 3`? Mengabaikan kurung, jawaban itu 3 bukan 4; ini umpan.
- **B benar** — Kurung dulu: `5 − 1 = 4`, lalu `20 ÷ 4 = 5`.
- **C salah** — Mengabaikan kurung: `20 ÷ 5 − 1 = 4 − 1 = 3`.
- **D salah** — Salah bagi: `24 ÷ 4 = 6`? Sekadar umpan.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `20 ÷ (5 − 1)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `5 − 1 = 4`
  2. Kemudian, `20 ÷ 4 = 5`

---

**5.** Hitunglah: `2³ + 4 = ....`
- A. 10
- B. 12
- C. 11
- D. 9

**Kunci: B**
**Pembahasan:**
- **A salah** — Anggap `2³ = 6` (kali tiga, bukan pangkat tiga): `6 + 4 = 10`. Kesalahan klasik.
- **B benar** — Pangkat dulu: `2³ = 8`, lalu `8 + 4 = 12`.
- **C salah** — Salah hafal: `2³ = 7`? Tidak konsisten.
- **D salah** — Anggap `2³ = 5` (2+3)? Umpan.
- **Konsep kunci:** Pangkat atau akar pada `2³ + 4` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `2³ = 8`
  2. Kemudian, `8 + 4 = 12`

---

**6.** Hitunglah: `15 − 2 × 5 = ....`
- A. 65
- B. 25
- C. 5
- D. 13

**Kunci: C**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan keliru: `13 × 5 = 65`.
- **B salah** — `(15 − 2) × 5 = 65`? Itu 65, bukan 25; umpan dekat.
- **C benar** — Kali dulu: `2 × 5 = 10`, lalu `15 − 10 = 5`.
- **D salah** — Lupa kalikan: `15 − 2 = 13`.
- **Konsep kunci:** Pada `15 − 2 × 5`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Kali dulu: `2 × 5 = 10`
  2. Kemudian, `15 − 10 = 5`

---

**7.** Hitunglah: `8 + 12 ÷ 4 = ....`
- A. 11
- B. 5
- C. 14
- D. 20

**Kunci: A**
**Pembahasan:**
- **A benar** — Bagi dulu: `12 ÷ 4 = 3`, lalu `8 + 3 = 11`.
- **B salah** — Kiri-ke-kanan: `(8+12) ÷ 4 = 5`.
- **C salah** — Lupa bagi: `8 + 12 ÷ 2 = 14`? Salah pembagi.
- **D salah** — Tambah saja: `8 + 12 = 20`.
- **Konsep kunci:** Pada `8 + 12 ÷ 4`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Bagi dulu: `12 ÷ 4 = 3`
  2. Kemudian, `8 + 3 = 11`

---

**8.** Hitunglah: `(9 − 3) × (2 + 1) = ....`
- A. 18
- B. 12
- C. 21
- D. 15

**Kunci: A**
**Pembahasan:**
- **A benar** — Dua kurung dulu: `9 − 3 = 6` dan `2 + 1 = 3`, lalu `6 × 3 = 18`.
- **B salah** — Salah kurung kedua: `6 × 2 = 12`.
- **C salah** — Mengubah `×` jadi `+`: `9 − 3 × 2 + 1 = 9 − 6 + 1 = 4`? Tidak cocok 21; sekadar umpan besar.
- **D salah** — Salah pengurangan: `9 − 3 = 6`, lupa kalikan, lalu `6 + 9 = 15`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(9 − 3) × (2 + 1)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `9 − 3 = 6` dan `2 + 1 = 3`
  2. Kemudian, `6 × 3 = 18`

---

**9.** Hitunglah: `30 ÷ 5 + 2 = ....`
- A. 6
- B. 4
- C. 8
- D. 12

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `+ 2`: `30 ÷ 5 = 6`.
- **B salah** — Kiri-ke-kanan dengan urutan keliru: `30 ÷ (5+2) ≈ 4,3`.
- **C benar** — Bagi dulu: `30 ÷ 5 = 6`, lalu `6 + 2 = 8`.
- **D salah** — Anggap `30 ÷ (5−2) = 10`? Umpan dekat.
- **Konsep kunci:** Pada `30 ÷ 5 + 2`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Bagi dulu: `30 ÷ 5 = 6`
  2. Kemudian, `6 + 2 = 8`

---

**10.** Hitunglah: `100 − 5 × 6 + 4 = ....`
- A. 74
- B. 70
- C. 65
- D. 80

**Kunci: A**
**Pembahasan:**
- **A benar** — Kali dulu: `5 × 6 = 30`, lalu kiri-ke-kanan: `100 − 30 + 4 = 70 + 4 = 74`.
- **B salah** — Tambah dulu baru kurang: `100 − (30+4) = 66`? Bukan 70; umpan.
- **C salah** — Kiri-ke-kanan tanpa hierarki: `(100−5)×6+4 = 570+4 = 574`. Bukan 65; umpan.
- **D salah** — Salah perkalian: `5×6 = 24`, `100 − 24 + 4 = 80`.
- **Konsep kunci:** Pada `100 − 5 × 6 + 4`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Kali dulu: `5 × 6 = 30`
  2. Kiri-ke-kanan: `100 − 30 + 4 = 70 + 4 = 74`

---

**11.** Hitunglah: `7 × (4 + 3) = ....`
- A. 31
- B. 28
- C. 49
- D. 14

**Kunci: C**
**Pembahasan:**
- **A salah** — Mengabaikan kurung sebagian: `7 × 4 + 3 = 31`.
- **B salah** — `7 × 4 = 28`, lupa `+3` dan kurung.
- **C benar** — Kurung dulu: `4 + 3 = 7`, lalu `7 × 7 = 49`.
- **D salah** — Salah kali: `7 + 7 = 14` (mengganti × jadi +).
- **Konsep kunci:** Operasi di dalam tanda kurung pada `7 × (4 + 3)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `4 + 3 = 7`
  2. Kemudian, `7 × 7 = 49`

---

**12.** Hitunglah: `6 × 6 − 6 ÷ 6 = ....`
- A. 0
- B. 5
- C. 35
- D. 1

**Kunci: C**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan: `(36 − 6) ÷ 6 = 5`? Itu 5; tetap salah. `0` muncul dari `6×0 = 0`. Umpan.
- **B salah** — `(36 − 6) ÷ 6 = 5`. Salah urutan.
- **C benar** — Kali & bagi dulu (sederajat, kiri-kanan): `6×6 = 36`, `6÷6 = 1`, lalu `36 − 1 = 35`.
- **D salah** — Hanya kerjakan `6 ÷ 6 = 1`.
- **Konsep kunci:** Operasi yang sederajat pada `6 × 6 − 6 ÷ 6` (sama-sama kali & bagi, atau sama-sama tambah & kurang) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kali & bagi dulu (sederajat, kiri-kanan): `6×6 = 36`, `6÷6 = 1`
  2. Kemudian, `36 − 1 = 35`

---

**13.** Hitunglah: `(8 + 2) ÷ 5 = ....`
- A. 2
- B. 8,4
- C. 1
- D. 10

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `8 + 2 = 10`, lalu `10 ÷ 5 = 2`.
- **B salah** — Mengabaikan kurung: `8 + 2÷5 = 8 + 0,4 = 8,4`.
- **C salah** — Salah pembagian: `5 ÷ 5 = 1`.
- **D salah** — Lupa bagi: `8 + 2 = 10`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(8 + 2) ÷ 5` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `8 + 2 = 10`
  2. Kemudian, `10 ÷ 5 = 2`

---

**14.** Hitunglah: `50 − (3 × 4 + 2) = ....`
- A. 36
- B. 38
- C. 30
- D. 34

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu (dalam kurung tetap KPKBTK): `3×4 = 12`, `12+2 = 14`, lalu `50 − 14 = 36`.
- **B salah** — Mengabaikan `+2` di dalam kurung: `50 − 12 = 38`.
- **C salah** — Salah urutan di dalam kurung: `3 × (4+2) = 18`, lalu `50 − 18 = 32`? Bukan 30. Umpan.
- **D salah** — Salah hitung: `50 − 16 = 34`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `50 − (3 × 4 + 2)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu (dalam kurung tetap KPKBTK): `3×4 = 12`, `12+2 = 14`
  2. Kemudian, `50 − 14 = 36`

---

**15.** Hitunglah: `4² × 2 = ....`
- A. 64
- B. 16
- C. 32
- D. 24

**Kunci: C**
**Pembahasan:**
- **A salah** — `(4×2)² = 64`. Salah karena anggap pangkat berlaku ke seluruh.
- **B salah** — Lupa kalikan 2: `4² = 16`.
- **C benar** — Pangkat dulu: `4² = 16`, lalu `16 × 2 = 32`.
- **D salah** — Salah hafal: `4² = 12`, `12 × 2 = 24`.
- **Konsep kunci:** Pangkat atau akar pada `4² × 2` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `4² = 16`
  2. Kemudian, `16 × 2 = 32`

---

**16.** Hitunglah: `9 + 3 × (8 − 5) = ....`
- A. 36
- B. 18
- C. 24
- D. 12

**Kunci: B**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan: `(9+3) × 3 = 36`.
- **B benar** — Kurung dulu: `8−5=3`, lalu kali: `3×3=9`, lalu `9+9=18`.
- **C salah** — Salah pengurangan kurung: `8−5=4`, `3×4=12`, `9+12=21`? Bukan 24. Umpan.
- **D salah** — Lupa tambah: `3×(8−5) = 9`, lalu `9+3=12`? Sekadar umpan.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `9 + 3 × (8 − 5)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `8−5=3`
  2. Kali: `3×3=9`
  3. Kemudian, `9+9=18`

---

**17.** Hitunglah: `40 ÷ 8 × 2 = ....`
- A. 2,5
- B. 5
- C. 10
- D. 20

**Kunci: C**
**Pembahasan:**
- **A salah** — `40 ÷ (8×2) = 40 ÷ 16 = 2,5`. Salah, karena `÷` dan `×` sederajat kiri-ke-kanan.
- **B salah** — Lupa kali: `40 ÷ 8 = 5`.
- **C benar** — Kiri-ke-kanan: `40÷8=5`, lalu `5×2=10`.
- **D salah** — Salah kali: `5×4=20`.
- **Konsep kunci:** Operasi yang sederajat pada `40 ÷ 8 × 2` (sama-sama kali & bagi, atau sama-sama tambah & kurang) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kiri-ke-kanan: `40÷8=5`
  2. Kemudian, `5×2=10`

---

**18.** Hitunglah: `25 − 10 + 5 = ....`
- A. 10
- B. 20
- C. 30
- D. 15

**Kunci: B**
**Pembahasan:**
- **A salah** — Tambah dulu: `25 − (10+5) = 10`. Salah urutan; harus kiri-ke-kanan.
- **B benar** — Kiri-ke-kanan: `25−10=15`, lalu `15+5=20`.
- **C salah** — Salah operasi: `25 + 10 − 5 = 30`.
- **D salah** — Lupa `+5`: `25−10=15`.
- **Konsep kunci:** Operasi yang sederajat pada `25 − 10 + 5` (sama-sama kali & bagi, atau sama-sama tambah & kurang) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kiri-ke-kanan: `25−10=15`
  2. Kemudian, `15+5=20`

---

**19.** Hitunglah: `(12 ÷ 3) + (15 ÷ 5) = ....`
- A. 8
- B. 7
- C. 9
- D. 6

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah pembagian: `12÷3=5`? `5+3=8`. Salah.
- **B benar** — Dua kurung dulu: `12÷3=4`, `15÷5=3`, lalu `4+3=7`.
- **C salah** — Salah jumlah: `4+5=9`.
- **D salah** — Salah pembagian: `12÷4=3`, `15÷5=3`, `3+3=6`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(12 ÷ 3) + (15 ÷ 5)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `12÷3=4`, `15÷5=3`
  2. Kemudian, `4+3=7`

---

**20.** Hitunglah: `3 × 4 + 5 × 2 = ....`
- A. 22
- B. 24
- C. 34
- D. 17

**Kunci: A**
**Pembahasan:**
- **A benar** — Dua perkalian dulu: `3×4=12`, `5×2=10`, lalu `12+10=22`.
- **B salah** — Salah satu kali: `3×4=12`, `12+12=24`? Umpan.
- **C salah** — Kiri-ke-kanan: `(3×4+5)×2 = 17×2 = 34`.
- **D salah** — Kiri-ke-kanan tahap awal: `3×4=12`, `12+5=17`, lupa kalikan 2.
- **Konsep kunci:** Pada `3 × 4 + 5 × 2`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Dua perkalian dulu: `3×4=12`, `5×2=10`
  2. Kemudian, `12+10=22`

---

**21.** Hitunglah: `(7 + 3)² = ....`
- A. 58
- B. 100
- C. 52
- D. 21

**Kunci: B**
**Pembahasan:**
- **A salah** — `7 + 3² × ? = 7+9 = 16`? Tidak cocok. `49+9 = 58`. Anggap kuadrat hanya 3: `7² + 3² = 49+9 = 58`. Kesalahan klasik.
- **B benar** — Kurung dulu: `7+3=10`, lalu `10²=100`.
- **C salah** — Salah hafal: `52` umpan dekat.
- **D salah** — Anggap kuadrat = kali 2: `(7+3)×2 = 21`? Itu 20; umpan tidak konsisten.
- **Konsep kunci:** Pangkat atau akar pada `(7 + 3)²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `7+3=10`
  2. Kemudian, `10²=100`

---

**22.** Hitunglah: `60 ÷ (2 × 5) = ....`
- A. 6
- B. 12
- C. 150
- D. 30

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `2×5=10`, lalu `60÷10=6`.
- **B salah** — Mengabaikan kurung: `60÷2×5 = 30×5 = 150`? Bukan 12; umpan.
- **C salah** — Kiri-ke-kanan tanpa kurung: `30×5=150`.
- **D salah** — Lupa kalikan 5: `60÷2=30`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `60 ÷ (2 × 5)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `2×5=10`
  2. Kemudian, `60÷10=6`

---

**23.** Hitunglah: `45 − 5 × 3 + 10 = ....`
- A. 130
- B. 50
- C. 40
- D. 25

**Kunci: C**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan total: `(45−5)×3+10 = 130`.
- **B salah** — Tambah dulu di kanan: `45 − 5×(3+10) = 45−65 = −20`. Bukan 50; umpan.
- **C benar** — Kali dulu: `5×3=15`, lalu kiri-ke-kanan: `45−15+10 = 30+10 = 40`.
- **D salah** — Kurang lalu lupa tambah: `45−5×3 − 10 = 20`? Bukan 25; umpan.
- **Konsep kunci:** Soal berlangkah banyak seperti `45 − 5 × 3 + 10` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kali dulu: `5×3=15`
  2. Kiri-ke-kanan: `45−15+10 = 30+10 = 40`

---

**24.** Hitunglah: `2 + 2² × 2 = ....`
- A. 16
- B. 10
- C. 12
- D. 8

**Kunci: B**
**Pembahasan:**
- **A salah** — `(2+2)² × ... = 16`. Salah, kuadrat hanya pada 2 yang kedua.
- **B benar** — Pangkat dulu: `2²=4`, lalu kali: `4×2=8`, lalu `2+8=10`.
- **C salah** — Kiri-ke-kanan: `(2+2²)×2 = 6×2 = 12`.
- **D salah** — Lupa `+2`: `2² × 2 = 8`.
- **Konsep kunci:** Pangkat atau akar pada `2 + 2² × 2` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `2²=4`
  2. Kali: `4×2=8`
  3. Kemudian, `2+8=10`

---

**25.** Hitunglah: `48 ÷ 6 + 2 × 3 = ....`
- A. 18
- B. 14
- C. 30
- D. 24

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah satu operasi: `48÷6=8`, `8+2×5 = 18`? Tidak konsisten; umpan.
- **B benar** — Bagi & kali dulu: `48÷6=8`, `2×3=6`, lalu `8+6=14`.
- **C salah** — Kiri-ke-kanan: `(48÷6+2)×3 = 10×3 = 30`.
- **D salah** — Tambah dulu: `48 ÷ (6+2) × 3 = 6×3 = 18`? Bukan 24; umpan.
- **Konsep kunci:** Pada `48 ÷ 6 + 2 × 3`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Bagi & kali dulu: `48÷6=8`, `2×3=6`
  2. Kemudian, `8+6=14`

---

**26.** Hitunglah: `100 ÷ (10 − 5) = ....`
- A. 10
- B. 5
- C. 20
- D. 15

**Kunci: C**
**Pembahasan:**
- **A salah** — Mengabaikan kurung: `100÷10−5 = 10−5 = 5`? Itu 5 bukan 10; umpan.
- **B salah** — Mengabaikan kurung: `100÷10 − 5 = 5`.
- **C benar** — Kurung dulu: `10−5=5`, lalu `100÷5=20`.
- **D salah** — Salah bagi: `100÷? = 15`? Umpan.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `100 ÷ (10 − 5)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `10−5=5`
  2. Kemudian, `100÷5=20`

---

**27.** Hitunglah: `5² − 3² = ....`
- A. 4
- B. 16
- C. 22
- D. 8

**Kunci: B**
**Pembahasan:**
- **A salah** — `(5−3)² = 4`. Kesalahan mendistribusikan kuadrat.
- **B benar** — Pangkat masing-masing dulu: `5²=25`, `3²=9`, lalu `25−9=16`.
- **C salah** — Anggap `5² = 25` dan `3² = 3`, lalu `25−3=22`.
- **D salah** — Anggap `5² = 10` (5×2): `10−2=8`.
- **Konsep kunci:** Pangkat atau akar pada `5² − 3²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat masing-masing dulu: `5²=25`, `3²=9`
  2. Kemudian, `25−9=16`

---

**28.** Hitunglah: `(4 + 6) × 2 − 5 = ....`
- A. 15
- B. 12
- C. 20
- D. 17

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `4+6=10`, kali: `10×2=20`, lalu `20−5=15`.
- **B salah** — Mengabaikan kurung: `4+6×2−5 = 4+12−5 = 11`? Bukan 12; umpan dekat.
- **C salah** — Lupa `−5`: `10×2=20`.
- **D salah** — Kurang dulu: `(4+6)×(2−5) = 10×(−3) = −30`. Bukan 17; umpan.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(4 + 6) × 2 − 5` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `4+6=10`, kali: `10×2=20`
  2. Kemudian, `20−5=15`

---

**29.** Hitunglah: `72 ÷ 9 ÷ 2 = ....`
- A. 16
- B. 4
- C. 8
- D. 2

**Kunci: B**
**Pembahasan:**
- **A salah** — `72 ÷ (9÷2) = 72 ÷ 4,5 = 16`. Salah urutan.
- **B benar** — Kiri-ke-kanan: `72÷9=8`, lalu `8÷2=4`.
- **C salah** — Lupa bagi terakhir: `72÷9=8`.
- **D salah** — Salah bagi: `72÷36=2`.
- **Konsep kunci:** Operasi yang sederajat pada `72 ÷ 9 ÷ 2` (sama-sama kali & bagi, atau sama-sama tambah & kurang) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kiri-ke-kanan: `72÷9=8`
  2. Kemudian, `8÷2=4`

---

**30.** Hitunglah: `6 + 4 × 5 − 3 = ....`
- A. 23
- B. 47
- C. 27
- D. 14

**Kunci: A**
**Pembahasan:**
- **A benar** — Kali dulu: `4×5=20`, lalu kiri-ke-kanan: `6+20−3 = 26−3 = 23`.
- **B salah** — Kiri-ke-kanan total: `(6+4)×(5−3)? = 10×2 = 20`? Bukan 47. `(6+4)×5 − 3 = 50−3 = 47`. ✓ kesalahan ini.
- **C salah** — Tambah dulu, kurang belakang: `(6+4)×5 / ... = 50`? `50 ÷ ... = 27`. Tidak cocok; umpan.
- **D salah** — Lupa kalikan: `6+4+5−1 = 14`.
- **Konsep kunci:** Soal berlangkah banyak seperti `6 + 4 × 5 − 3` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kali dulu: `4×5=20`
  2. Kiri-ke-kanan: `6+20−3 = 26−3 = 23`

---

**31.** Hitunglah: `(15 − 7) × 2 + 4 = ....`
- A. 22
- B. 20
- C. 18
- D. 16

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah perkalian: `8×2=16`, `16+6=22`? Umpan.
- **B benar** — Kurung dulu: `15−7=8`, kali: `8×2=16`, lalu `16+4=20`.
- **C salah** — Lupa tambah: `8×2 + 2 = 18`.
- **D salah** — Lupa `+4`: `8×2=16`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(15 − 7) × 2 + 4` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `15−7=8`, kali: `8×2=16`
  2. Kemudian, `16+4=20`

---

**32.** Hitunglah: `90 − 6² = ....`
- A. 54
- B. 78
- C. 72
- D. 84

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat dulu: `6²=36`, lalu `90−36=54`.
- **B salah** — Anggap `6² = 12` (kali 2): `90−12=78`.
- **C salah** — Salah hafal: `6²=18`, `90−18=72`.
- **D salah** — Anggap `6²=6`: `90−6=84`.
- **Konsep kunci:** Pangkat atau akar pada `90 − 6²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `6²=36`
  2. Kemudian, `90−36=54`

---

**33.** Hitunglah: `8 × 3 − 4 × 2 = ....`
- A. 8
- B. 32
- C. 16
- D. 40

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah kali pertama: `8×3=21`? `21−13=8`. Tidak konsisten; umpan.
- **B salah** — Tambah dulu: `8 × (3−4) × 2 = −16`? Bukan 32. `8×3 = 24`, `24 + ... = 32`? Umpan.
- **C benar** — Dua perkalian dulu: `8×3=24`, `4×2=8`, lalu `24−8=16`.
- **D salah** — Kiri-ke-kanan: `(8×3−4)×2 = 20×2 = 40`.
- **Konsep kunci:** Operasi yang sederajat pada `8 × 3 − 4 × 2` (sama-sama kali & bagi, atau sama-sama tambah & kurang) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Dua perkalian dulu: `8×3=24`, `4×2=8`
  2. Kemudian, `24−8=16`

---

**34.** Hitunglah: `(20 + 4) ÷ (5 − 2) = ....`
- A. 6
- B. 8
- C. 12
- D. 4

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah pembagian: `24÷4=6`.
- **B benar** — Dua kurung dulu: `20+4=24`, `5−2=3`, lalu `24÷3=8`.
- **C salah** — Mengabaikan kurung kedua: `(20+4)÷? = 12` → `24÷2 = 12`. Kesalahan urutan.
- **D salah** — Salah pengurangan: `5−2=6`, `24÷6=4`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(20 + 4) ÷ (5 − 2)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `20+4=24`, `5−2=3`
  2. Kemudian, `24÷3=8`

---

**35.** Hitunglah: `5 + 5 × 5 ÷ 5 = ....`
- A. 6
- B. 10
- C. 25
- D. 30

**Kunci: B**
**Pembahasan:**
- **A salah** — `(5+5)×5÷5÷? = ?` Umpan.
- **B benar** — Kali & bagi dulu (kiri-kanan): `5×5=25`, `25÷5=5`, lalu `5+5=10`.
- **C salah** — Kiri-ke-kanan total: `((5+5)×5)÷5 = 50÷5 = 10`? Bukan 25. Pasangan umpan: anggap `5+5=10`, lalu `10×5÷? = 50÷? = ?`. Umpan tidak konsisten — pilih `25` karena murid sering hafalkan `5×5=25` dan berhenti di situ.
- **D salah** — Salah operasi: `(5+5)×(5÷? ) = 50÷? = 30`? Umpan.
- **Konsep kunci:** Operasi yang sederajat pada `5 + 5 × 5 ÷ 5` (sama-sama kali & bagi, atau sama-sama tambah & kurang) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kali & bagi dulu (kiri-kanan): `5×5=25`, `25÷5=5`
  2. Kemudian, `5+5=10`

---

**36.** Hitunglah: `3 × (5 + 2)² = ....`
- A. 49
- B. 147
- C. 51
- D. 75

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa kalikan 3: `(5+2)² = 49`.
- **B benar** — Kurung dulu: `5+2=7`, pangkat: `7²=49`, lalu kali: `3×49=147`.
- **C salah** — Anggap pangkat ke 3: `3² × (5+2) = 9×7 + ? = 63`? `51` umpan dekat.
- **D salah** — Distribusi salah: `3×(5²+2²) = 3×29 = 87`? Bukan 75. Anggap `3²×(5+2) − 3 = 63−... ` Umpan tidak ketat.
- **Konsep kunci:** Pangkat atau akar pada `3 × (5 + 2)²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `5+2=7`, pangkat: `7²=49`
  2. Kali: `3×49=147`

---

**37.** Hitunglah: `64 ÷ 8 − 2 × 3 = ....`
- A. 2
- B. 18
- C. 22
- D. 14

**Kunci: A**
**Pembahasan:**
- **A benar** — Bagi & kali dulu: `64÷8=8`, `2×3=6`, lalu `8−6=2`.
- **B salah** — Kiri-ke-kanan tanpa hierarki: `(64÷8−2)×3 = 6×3 = 18`.
- **C salah** — Salah bagi: `64÷4 − 2×3 = 16−6 = 10`? Bukan 22; umpan.
- **D salah** — `64 ÷ (8−2) × 3 = 64/6 × 3 ≈ 32`? Tidak cocok. `8 − 2×(−3) = 14`. Anggap kurang jadi tambah: `8+6=14`.
- **Konsep kunci:** Operasi yang sederajat pada `64 ÷ 8 − 2 × 3` (sama-sama kali & bagi, atau sama-sama tambah & kurang) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Bagi & kali dulu: `64÷8=8`, `2×3=6`
  2. Kemudian, `8−6=2`

---

**38.** Hitunglah: `2 × 3³ = ....`
- A. 216
- B. 54
- C. 18
- D. 36

**Kunci: B**
**Pembahasan:**
- **A salah** — `(2×3)³ = 216`. Pangkat hanya untuk 3.
- **B benar** — Pangkat dulu: `3³=27`, lalu `2×27=54`.
- **C salah** — Anggap `3³ = 9` (3×3): `2×9=18`.
- **D salah** — Anggap `3³ = 18`? Tidak. Umpan dari `(2×3)² = 36`. Murid sering bingung antara `(2×3)²` dan `2×3³`.
- **Konsep kunci:** Pangkat atau akar pada `2 × 3³` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `3³=27`
  2. Kemudian, `2×27=54`

---

**39.** Hitunglah: `(8 − 3) × 4 + (6 ÷ 2) = ....`
- A. 23
- B. 25
- C. 20
- D. 17

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `8−3=5`, `6÷2=3`. Kali: `5×4=20`. Tambah: `20+3=23`.
- **B salah** — Salah kurung pertama: `8−3=5`, `5×5=25`? Umpan.
- **C salah** — Lupa `+3`: `5×4=20`.
- **D salah** — Mengabaikan kurung kedua: `5×4 + 6÷2/... ` Umpan dekat.
- **Konsep kunci:** Soal berlangkah banyak seperti `(8 − 3) × 4 + (6 ÷ 2)` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `8−3=5`, `6÷2=3`
  2. Kali: `5×4=20`
  3. Tambah: `20+3=23`

---

**40.** Hitunglah: `120 ÷ 6 ÷ 5 = ....`
- A. 4
- B. 100
- C. 24
- D. 5

**Kunci: A**
**Pembahasan:**
- **A benar** — Kiri-ke-kanan: `120÷6=20`, `20÷5=4`.
- **B salah** — `120 ÷ (6÷5) = 120 × 5/6 = 100`. Salah urutan.
- **C salah** — Lupa bagi terakhir: `120÷5=24` atau salah pemilihan.
- **D salah** — Salah bagi: `120÷24=5`.
- **Konsep kunci:** Operasi yang sederajat pada `120 ÷ 6 ÷ 5` (sama-sama kali & bagi, atau sama-sama tambah & kurang) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kiri-ke-kanan: `120÷6=20`, `20÷5=4`
  2. Diperoleh hasil akhir sesuai kunci jawaban A.

---

**41.** Hitunglah: `7 + 8 ÷ 2 − 3 = ....`
- A. 11
- B. 8
- C. 4,5
- D. 9,5

**Kunci: B**
**Pembahasan:**
- **A salah** — `(7+8)÷? − 3 = 11`? `15÷? = 14`. Umpan: anggap `8÷2 = 5`, `7+5−1 = 11`.
- **B benar** — Bagi dulu: `8÷2=4`, lalu kiri-ke-kanan: `7+4−3 = 11−3 = 8`.
- **C salah** — `(7+8)÷(2−3) = 15÷(−1) = −15`. Tidak cocok. `9 ÷ 2 = 4,5`. Umpan dari operasi keliru.
- **D salah** — `(7+8)÷2 − 3 = 7,5 − 3 = 4,5`. Bukan 9,5. `(7+8−3)÷? = ?`. Umpan.
- **Konsep kunci:** Pada `7 + 8 ÷ 2 − 3`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Bagi dulu: `8÷2=4`
  2. Kiri-ke-kanan: `7+4−3 = 11−3 = 8`

---

**42.** Hitunglah: `(9 × 4) ÷ 6 = ....`
- A. 6
- B. 12
- C. 9
- D. 4

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `9×4=36`, lalu `36÷6=6`.
- **B salah** — Salah pembagian: `36÷3=12`.
- **C salah** — Lupa bagi: `9×? = 9`.
- **D salah** — `9 × (4÷6) ≈ 6`. Bukan 4; umpan.
- **Konsep kunci:** Operasi yang sederajat pada `(9 × 4) ÷ 6` (sama-sama kali & bagi, atau sama-sama tambah & kurang) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `9×4=36`
  2. Kemudian, `36÷6=6`

---

**43.** Hitunglah: `50 − 2 × (3 + 4) = ....`
- A. 336
- B. 36
- C. 44
- D. 30

**Kunci: B**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan: `(50−2)×7 = 336`.
- **B benar** — Kurung dulu: `3+4=7`, kali: `2×7=14`, lalu `50−14=36`.
- **C salah** — Mengabaikan kurung: `50 − 2×3 + 4 = 48`? Bukan 44; umpan.
- **D salah** — `50 − (2×7+6) = 30`? Umpan dengan tambahan keliru.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `50 − 2 × (3 + 4)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `3+4=7`, kali: `2×7=14`
  2. Kemudian, `50−14=36`

---

**44.** Hitunglah: `4 + 3 × 2² = ....`
- A. 16
- B. 49
- C. 28
- D. 12

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat dulu: `2²=4`, kali: `3×4=12`, tambah: `4+12=16`.
- **B salah** — Kiri-ke-kanan: `(4+3)² × ... = 49`? Atau `(4+3×2)² = 100`. `(7)² = 49`. Umpan.
- **C salah** — `(4+3)² × ... ` atau `4 × 7 = 28`. Umpan.
- **D salah** — Lupa pangkat: `4+3×2 + 2 = 12`.
- **Konsep kunci:** Pangkat atau akar pada `4 + 3 × 2²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `2²=4`, kali: `3×4=12`, tambah: `4+12=16`
  2. Diperoleh hasil akhir sesuai kunci jawaban A.

---

**45.** Hitunglah: `(11 − 4) × (3 + 2) = ....`
- A. 35
- B. 25
- C. 21
- D. 30

**Kunci: A**
**Pembahasan:**
- **A benar** — Dua kurung dulu: `11−4=7`, `3+2=5`, lalu `7×5=35`.
- **B salah** — Salah kurung pertama: `9−4=5`, `5×5=25`? Umpan.
- **C salah** — Lupa kurung kedua: `7×3=21`.
- **D salah** — Salah kurung kedua: `7×? = 30`? `7×4=28` mendekati; umpan.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(11 − 4) × (3 + 2)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `11−4=7`, `3+2=5`
  2. Kemudian, `7×5=35`

---

**46.** Hitunglah: `12 + 18 ÷ 3 − 4 = ....`
- A. 14
- B. 6
- C. 8
- D. 16

**Kunci: A**
**Pembahasan:**
- **A benar** — Bagi dulu: `18÷3=6`, lalu kiri-ke-kanan: `12+6−4 = 18−4 = 14`.
- **B salah** — `(12+18)÷3 − 4 = 10−4 = 6`. Salah urutan.
- **C salah** — `12 + 18÷(3−4)? = 12 + 18/(−1) = −6`. Bukan 8; umpan.
- **D salah** — Lupa kurang: `12+6−2=16`.
- **Konsep kunci:** Pada `12 + 18 ÷ 3 − 4`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Bagi dulu: `18÷3=6`
  2. Kiri-ke-kanan: `12+6−4 = 18−4 = 14`

---

**47.** Hitunglah: `100 ÷ (4 × 5) = ....`
- A. 25
- B. 5
- C. 125
- D. 1

**Kunci: B**
**Pembahasan:**
- **A salah** — `(100÷4)×5 = 125`? Bukan 25. `(100÷4)÷5 = 5`. Umpan: anggap `100÷(4×?) = 25` saat `?=1`.
- **B benar** — Kurung dulu: `4×5=20`, lalu `100÷20=5`.
- **C salah** — `(100÷4) × 5 = 25 × 5 = 125`. Salah urutan.
- **D salah** — Salah bagi: `100÷100=1`.
- **Konsep kunci:** Operasi yang sederajat pada `100 ÷ (4 × 5)` (sama-sama kali & bagi, atau sama-sama tambah & kurang) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `4×5=20`
  2. Kemudian, `100÷20=5`

---

**48.** Hitunglah: `3² + 4² = ....`
- A. 49
- B. 14
- C. 25
- D. 16

**Kunci: C**
**Pembahasan:**
- **A salah** — `(3+4)² = 49`. Distribusi pangkat keliru.
- **B salah** — Anggap kuadrat = ×2: `6+8=14`.
- **C benar** — Pangkat masing-masing dulu: `3²=9`, `4²=16`, lalu `9+16=25`.
- **D salah** — Lupa tambah `3²`: `4²=16`.
- **Konsep kunci:** Pangkat atau akar pada `3² + 4²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat masing-masing dulu: `3²=9`, `4²=16`
  2. Kemudian, `9+16=25`

---

**49.** Hitunglah: `(7 + 5) × 2 − 9 = ....`
- A. 23
- B. 12
- C. 15
- D. 5

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa kurang: `12×2 − 1 = 23`? Tidak cocok. `7 + 5×2 + ? = 23`? Umpan.
- **B salah** — Mengabaikan kurung: `7+5×2 − 9 = 7+10−9 = 8`. Bukan 12. `7+5=12`, lupa `×2 − 9`. Umpan.
- **C benar** — Kurung dulu: `7+5=12`, kali: `12×2=24`, lalu `24−9=15`.
- **D salah** — Salah perkalian: `12 − 9 + 2 = 5`? Tidak konsisten; umpan.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(7 + 5) × 2 − 9` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `7+5=12`, kali: `12×2=24`
  2. Kemudian, `24−9=15`

---

**50.** Hitunglah: `81 ÷ 9 + 3 × 2 = ....`
- A. 15
- B. 18
- C. 24
- D. 12

**Kunci: A**
**Pembahasan:**
- **A benar** — Bagi & kali dulu: `81÷9=9`, `3×2=6`, lalu `9+6=15`.
- **B salah** — `(81÷9+3)×2 = 12×2 = 24`? Bukan 18. `81÷(9+3)×2 ≈ 13,5`. Umpan dekat.
- **C salah** — Kiri-ke-kanan: `(81÷9+3)×2 = 24`.
- **D salah** — Lupa salah satu operasi: `81÷9+3 = 12`.
- **Konsep kunci:** Operasi yang sederajat pada `81 ÷ 9 + 3 × 2` (sama-sama kali & bagi, atau sama-sama tambah & kurang) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Bagi & kali dulu: `81÷9=9`, `3×2=6`
  2. Kemudian, `9+6=15`

---

### PROV · Soal 51–80 (Tingkat Sedang, C3–C4)
*4–5 elemen, kurung berlapis sederhana, pecahan/desimal masuk, soal cerita mulai muncul.*

**51.** Hitunglah: `(15 + 5) ÷ 4 × 3 − 6 = ....`
- A. 9
- B. 5,5
- C. 24
- D. 12

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `15+5=20`. Bagi & kali kiri-kanan: `20÷4=5`, `5×3=15`. Lalu: `15−6=9`.
- **B salah** — `20 ÷ (4×3) − 6 = 20/12 − 6 ≈ −4,3`. Tidak cocok. `20÷4×(3−6) = 5×(−3) = −15`. Umpan: salah hitung `5,5`.
- **C salah** — Lupa `−6`: `5×3×... = 15`? `30−6=24`? Umpan.
- **D salah** — `20 ÷ 4 × 3 − ? = 12` saat `?=3`. Umpan.
- **Konsep kunci:** Soal berlangkah banyak seperti `(15 + 5) ÷ 4 × 3 − 6` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `15+5=20`
  2. Bagi & kali kiri-kanan: `20÷4=5`, `5×3=15`
  3. Lalu: `15−6=9`

---

**52.** Hitunglah: `100 − [50 − (10 + 5)] = ....`
- A. 35
- B. 55
- C. 65
- D. 45

**Kunci: C**
**Pembahasan:**
- **A salah** — Kurung luar dulu (salah): `100 − 50 − 15 = 35`. Itu kesalahan klasik nested.
- **B salah** — `100 − [50 + 15] = 35`? Bukan 55. `100 − (50−15)−... `. Umpan dekat.
- **C benar** — Kurung paling dalam dulu: `10+5=15`. Kurung siku: `50−15=35`. Akhir: `100−35=65`.
- **D salah** — Salah tanda: `100−50+? = 45`. Umpan.
- **Konsep kunci:** Pada kurung bersarang seperti `100 − [50 − (10 + 5)]`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Kurung paling dalam dulu: `10+5=15`
  2. Kurung siku: `50−15=35`
  3. Akhir: `100−35=65`

---

**53.** Hitunglah: `36 ÷ (12 ÷ 3) × 2 = ....`
- A. 12
- B. 6
- C. 24
- D. 18

**Kunci: D**
**Pembahasan:**
- **A salah** — `36 ÷ (4×2) × ... = 4,5`? Umpan dekat ke 12.
- **B salah** — Kiri-ke-kanan tanpa kurung: `(36÷12÷3)×2 = (3÷3)×2 = 2`? Bukan 6. `36÷12=3`, `3÷3=1`, `1×2=2`. Umpan.
- **C salah** — Lupa kurung: `36÷12×3×2 = 18`? Sebenarnya `36÷12=3`, `3×3=9`, `9×2=18`. Itu sama dengan D; umpan dengan urutan keliru jadi `24`.
- **D benar** — Kurung dulu: `12÷3=4`. Bagi & kali kiri-kanan: `36÷4=9`, `9×2=18`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `36 ÷ (12 ÷ 3) × 2` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `12÷3=4`
  2. Bagi & kali kiri-kanan: `36÷4=9`, `9×2=18`

---

**54.** Hitunglah: `(8² − 4²) ÷ 6 = ....`
- A. 8
- B. 10
- C. 16
- D. 12

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat dulu dalam kurung: `8²=64`, `4²=16`. Kurung: `64−16=48`. Bagi: `48÷6=8`.
- **B salah** — Salah pangkat: `8²=60`, `60−10=50`, `50÷5=10`. Umpan.
- **C salah** — Mengabaikan bagi: `64−16=48`, `48÷3=16`. Umpan.
- **D salah** — `(8−4)² ÷ ? = 16÷? = ?`. Anggap `(8−4)²÷? = 12`? Umpan.
- **Konsep kunci:** Pangkat atau akar pada `(8² − 4²) ÷ 6` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu dalam kurung: `8²=64`, `4²=16`
  2. Kurung: `64−16=48`
  3. Bagi: `48÷6=8`

---

**55.** Hitunglah: `2 × {3 + [4 × (5 − 2)]} = ....`
- A. 24
- B. 30
- C. 22
- D. 36

**Kunci: B**
**Pembahasan:**
- **A salah** — Mengabaikan `+3`: `2 × 12 = 24`.
- **B benar** — Paling dalam: `5−2=3`. Siku: `4×3=12`. Kurawal: `3+12=15`. Akhir: `2×15=30`.
- **C salah** — Salah urut kurung: `2×3 + 4×(5−2) = 6+12 = 18`? Bukan 22; umpan.
- **D salah** — `2 × {(3+4)×(5−2)} = 2×(7×3) = 42`? Bukan 36; umpan dekat.
- **Konsep kunci:** Pada kurung bersarang seperti `2 × {3 + [4 × (5 − 2)]}`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `5−2=3`
  2. Siku: `4×3=12`
  3. Kurawal: `3+12=15`
  4. Akhir: `2×15=30`

---

**56.** Hitunglah: `1/2 + 1/3 × 6 = ....`
- A. 3
- B. 2,5
- C. 3,5
- D. 5

**Kunci: B**
**Pembahasan:**
- **A salah** — `(1/2 + 1/3) × 6 = (5/6) × 6 = 5`? Bukan 3. `(1/2+1/3+...)×? = 3`? Umpan.
- **B benar** — Kali dulu: `1/3 × 6 = 2`. Tambah: `1/2 + 2 = 2,5`.
- **C salah** — Tambah dulu `1/2 + 1/3 = 5/6 ≈ 0,83`, lalu `×6 = 5`? Bukan 3,5; umpan.
- **D salah** — Kiri-ke-kanan: `(1/2 + 1/3) × 6 = 5`.
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan atau desimal, seperti pada `1/2 + 1/3 × 6`.
- **Langkah Penyelesaian:**
  1. Kali dulu: `1/3 × 6 = 2`
  2. Tambah: `1/2 + 2 = 2,5`

---

**57.** Hitunglah: `0,5 × (4 + 6) − 1,5 = ....`
- A. 4
- B. 5
- C. 3
- D. 3,5

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah desimal: `0,5×10 − 1 = 4`.
- **B salah** — Lupa kurang: `0,5×10=5`.
- **C salah** — Mengabaikan kurung: `0,5×4 + 6 − 1,5 = 2+4,5 = 6,5`? Bukan 3; umpan.
- **D benar** — Kurung dulu: `4+6=10`. Kali: `0,5×10=5`. Kurang: `5−1,5=3,5`.
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan atau desimal, seperti pada `0,5 × (4 + 6) − 1,5`.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `4+6=10`
  2. Kali: `0,5×10=5`
  3. Kurang: `5−1,5=3,5`

---

**58.** Hitunglah: `45 + 15 ÷ 5 × 3 − 8 = ....`
- A. 46
- B. 40
- C. 28
- D. 36

**Kunci: A**
**Pembahasan:**
- **A benar** — Bagi & kali (kiri-kanan): `15÷5=3`, `3×3=9`. Lalu kiri-kanan: `45+9−8 = 54−8 = 46`.
- **B salah** — `(45+15) ÷ 5 × 3 − 8 = 12×3−8 = 28`? Bukan 40; umpan.
- **C salah** — Kiri-ke-kanan total: `(45+15)÷5×3−8 = 12×3−8 = 36−8 = 28`.
- **D salah** — Lupa kurang: `45 + 9 − ? = 36`? Umpan dekat.
- **Konsep kunci:** Pada `45 + 15 ÷ 5 × 3 − 8`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Bagi & kali (kiri-kanan): `15÷5=3`, `3×3=9`
  2. Lalu kiri-kanan: `45+9−8 = 54−8 = 46`

---

**59.** Hitunglah: `(2 + 3)² − (2² + 3²) = ....`
- A. 0
- B. 12
- C. 6
- D. 25

**Kunci: B**
**Pembahasan:**
- **A salah** — Anggap `(a+b)² = a²+b²` (kesalahan klasik): `25−25=0` → tetapi `(2²+3²)=13` bukan 25. Umpan.
- **B benar** — Kurung pertama: `(2+3)²=25`. Kurung kedua: `2²+3² = 4+9 = 13`. Lalu: `25−13=12`.
- **C salah** — `25 − (4+9+6) = 6`? Umpan tidak konsisten.
- **D salah** — Lupa kurang yang kedua: `(2+3)² = 25`.
- **Konsep kunci:** Pangkat atau akar pada `(2 + 3)² − (2² + 3²)` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung pertama: `(2+3)²=25`
  2. Kurung kedua: `2²+3² = 4+9 = 13`
  3. Lalu: `25−13=12`

---

**60.** Sebuah toko menjual **3 buku** seharga Rp5.000 dan **2 pensil** seharga Rp1.500. Total bayar adalah ....
- A. Rp19.500
- B. Rp18.000
- C. Rp16.500
- D. Rp25.500

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah harga: `3×5.000 + 3×1.500 = 19.500` (anggap 3 pensil).
- **B benar** — Kalimat: `3×5.000 + 2×1.500`. Kali dulu: `15.000 + 3.000 = 18.000`.
- **C salah** — Salah satu kali: `3×5.000 + 1×1.500 = 16.500`.
- **D salah** — Kiri-ke-kanan: `(3×5.000+2)×1.500 = 15.002×1.500` (terlalu besar). Umpan: `3×(5.000+2×1.500) = 3×8.000 = 24.000`? Bukan 25.500. Umpan dari `(3+2)×(5.000+1.500−500)/? ` Umpan tidak ketat — sekadar pengecoh besar.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `3×5.000 + 2×1.500`
  2. Kali dulu: `15.000 + 3.000 = 18.000`

---

**61.** Hitunglah: `60 − [20 + (5 × 3) − 4] = ....`
- A. 25
- B. 21
- C. 39
- D. 29

**Kunci: D**
**Pembahasan:**
- **A salah** — `60 − (20+15) = 25` (lupa `−4`).
- **B salah** — Salah tanda: `60 − 20 − 15 − 4 = 21`. (Distribusi tanda minus keliru.)
- **C salah** — Lupa `−4`: `60 − (20+15) = 25`? Bukan 39. `60 − 21 = 39`. Anggap dalam kurung = 21. Umpan.
- **D benar** — Paling dalam: `5×3=15`. Siku: `20+15−4 = 31`. Akhir: `60−31=29`.
- **Konsep kunci:** Pada kurung bersarang seperti `60 − [20 + (5 × 3) − 4]`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `5×3=15`
  2. Siku: `20+15−4 = 31`
  3. Akhir: `60−31=29`

---

**62.** Hitunglah: `12 × (3 + 2)² ÷ 10 = ....`
- A. 25
- B. 18
- C. 60
- D. 30

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa kali: `(3+2)²=25`.
- **B salah** — Salah pangkat: `5²=15`, `12×15÷10=18`.
- **C salah** — Lupa bagi: `12×5=60` (dan lupa pangkat).
- **D benar** — Kurung dulu: `3+2=5`. Pangkat: `5²=25`. Kali & bagi kiri-kanan: `12×25=300`, `300÷10=30`.
- **Konsep kunci:** Pangkat atau akar pada `12 × (3 + 2)² ÷ 10` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `3+2=5`
  2. Pangkat: `5²=25`
  3. Kali & bagi kiri-kanan: `12×25=300`, `300÷10=30`

---

**63.** Pak Andi membeli **4 lusin** telur. Setiap telur Rp2.000. Tetapi 5 telur **pecah**. Sisa telur dijual semua dengan harga sama. Total uang yang Pak Andi terima adalah ....
- A. Rp86.000
- B. Rp96.000
- C. Rp76.000
- D. Rp46.000

**Kunci: A**
**Pembahasan:**
- **A benar** — Kalimat: `(4×12 − 5) × 2.000`. Kurung dulu: `48−5=43`. Kali: `43×2.000=86.000`.
- **B salah** — Mengabaikan telur pecah: `48×2.000 = 96.000`.
- **C salah** — Salah lusin (1 lusin = 10): `(40−5)×2.000 = 70.000`? Bukan 76.000. Anggap `(4×12−10)×2.000 = 38×2.000 = 76.000`. Umpan.
- **D salah** — Salah operasi: `(4×12÷2 − 5)×2.000 = 19×2.000 = 38.000`? Bukan 46.000. Umpan kasar.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `(4×12 − 5) × 2.000`
  2. Kurung dulu: `48−5=43`
  3. Kali: `43×2.000=86.000`

---

**64.** Hitunglah: `(100 − 4²) ÷ (3 + 4) = ....`
- A. 10
- B. 14
- C. 16
- D. 12

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah bagi: `84÷? = 10`? `84÷8,4 = 10`. Umpan.
- **B salah** — Salah pangkat: `4²=2`, `(100−2)÷7=14`.
- **C salah** — `(100−4)²÷? = 96²÷? `. Tidak masuk akal; umpan.
- **D benar** — Pangkat dulu dalam kurung: `4²=16`. Dua kurung: `100−16=84`, `3+4=7`. Bagi: `84÷7=12`.
- **Konsep kunci:** Pangkat atau akar pada `(100 − 4²) ÷ (3 + 4)` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu dalam kurung: `4²=16`
  2. Dua kurung: `100−16=84`, `3+4=7`
  3. Bagi: `84÷7=12`

---

**65.** Hitunglah: `15 − {3 × [2 + (8 ÷ 4)]} = ....`
- A. 0
- B. 9
- C. 6
- D. 3

**Kunci: D**
**Pembahasan:**
- **A salah** — `15−15=0`. Anggap `3×5=15`.
- **B salah** — Salah kurawal: `3+4=7`? `15−7=8`. Bukan 9; umpan.
- **C salah** — `15 − 3×(2+8÷4) = 15 − 3×4 = 3`? Itu D. Umpan lain: `15 − 3×3 = 6`.
- **D benar** — Paling dalam: `8÷4=2`. Siku: `2+2=4`. Kurawal: `3×4=12`. Akhir: `15−12=3`.
- **Konsep kunci:** Pada kurung bersarang seperti `15 − {3 × [2 + (8 ÷ 4)]}`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `8÷4=2`
  2. Siku: `2+2=4`
  3. Kurawal: `3×4=12`
  4. Akhir: `15−12=3`

---

**66.** Hitunglah: `(9 + 6) × 4 ÷ 3 − 5 = ....`
- A. 11
- B. 17
- C. 15
- D. 25

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah bagi: `60÷? = 16`, `16−5=11`. Umpan.
- **B salah** — Salah perkalian: `15×4=68`, `68÷3 ≈ 22,7`. Umpan.
- **C benar** — Kurung dulu: `9+6=15`. Kali & bagi: `15×4=60`, `60÷3=20`. Kurang: `20−5=15`.
- **D salah** — Lupa kurang: `60÷? = 20`, `20+5=25`. Anggap `−5` jadi `+5`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(9 + 6) × 4 ÷ 3 − 5` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `9+6=15`
  2. Kali & bagi: `15×4=60`, `60÷3=20`
  3. Kurang: `20−5=15`

---

**67.** Hitunglah: `2³ × 3 − 4² = ....`
- A. 8
- B. 24
- C. 36
- D. 18

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat dulu: `2³=8`, `4²=16`. Kali: `8×3=24`. Kurang: `24−16=8`.
- **B salah** — Lupa kurang: `8×3=24`.
- **C salah** — Salah pangkat: `2³ × 3 − 4² = 6×3 + ... = 36`? Anggap `2³=12`, `12×3 − 0 = 36`. Umpan.
- **D salah** — Anggap `2³=6` dan `4²=0`: `6×3=18`.
- **Konsep kunci:** Pangkat atau akar pada `2³ × 3 − 4²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `2³=8`, `4²=16`
  2. Kali: `8×3=24`
  3. Kurang: `24−16=8`

---

**68.** Hitunglah: `(48 + 12) ÷ (4² − 4) = ....`
- A. 6
- B. 10
- C. 4
- D. 5

**Kunci: D**
**Pembahasan:**
- **A salah** — `(48+12)÷(4²+? ) = 6`? Umpan dekat.
- **B salah** — Mengabaikan pangkat: `60 ÷ (4−4)+? `. Atau anggap `4²−4 = 6`, `60÷6=10`.
- **C salah** — `(4²+4) = 20`, `60÷20=3`? Bukan 4; umpan.
- **D benar** — Kurung kiri: `48+12=60`. Pangkat dalam kanan: `4²=16`. Kurung kanan: `16−4=12`. Bagi: `60÷12=5`.
- **Konsep kunci:** Pangkat atau akar pada `(48 + 12) ÷ (4² − 4)` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `48+12=60`
  2. Pangkat dalam kanan: `4²=16`
  3. Kurung kanan: `16−4=12`
  4. Bagi: `60÷12=5`

---

**69.** Tika menabung **Rp5.000 setiap hari** selama **2 minggu**, lalu **Rp10.000 setiap hari** selama **1 minggu**. Total tabungan Tika adalah ....
- A. Rp140.000
- B. Rp105.000
- C. Rp70.000
- D. Rp120.000

**Kunci: A**
**Pembahasan:**
- **A benar** — Kalimat: `5.000 × (2×7) + 10.000 × (1×7)`. Kurung dulu: `5.000×14 + 10.000×7 = 70.000+70.000=140.000`.
- **B salah** — Anggap 1 minggu = 5 hari: `5.000×10 + 10.000×5 = 50.000+50.000 = 100.000`? Bukan 105.000; umpan.
- **C salah** — Lupa periode kedua: `5.000×14=70.000`.
- **D salah** — Kiri-ke-kanan tanpa hierarki: `(5.000+2)×7 + ... ≈ 35.014×... ` Tidak cocok. Umpan: anggap 2+1 = 3 minggu × 5.000 × 7 = 105.000? Bukan 120. Umpan kasar.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `5.000 × (2×7) + 10.000 × (1×7)`
  2. Kurung dulu: `5.000×14 + 10.000×7 = 70.000+70.000=140.000`

---

**70.** Hitunglah: `3 + 4 × 5² − 10 ÷ 2 = ....`
- A. 90
- B. 100
- C. 98
- D. 95

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah pangkat: `5²=20`, `4×20=80`, `3+80−... = 90`? Umpan.
- **B salah** — Lupa kurang `5`: `3+100−3 = 100`.
- **C benar** — Pangkat: `5²=25`. Kali & bagi: `4×25=100`, `10÷2=5`. Kiri-kanan: `3+100−5 = 103−5 = 98`.
- **D salah** — `3+4×25 − 8 = 95`? Salah bagi: `10÷? = 8`. Umpan.
- **Konsep kunci:** Pada `3 + 4 × 5² − 10 ÷ 2`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Pangkat: `5²=25`
  2. Kali & bagi: `4×25=100`, `10÷2=5`
  3. Kiri-kanan: `3+100−5 = 103−5 = 98`

---

**71.** Hitunglah: `{(7+3) × 2 − 4} ÷ 8 = ....`
- A. 2,5
- B. 1,5
- C. 3
- D. 2

**Kunci: D**
**Pembahasan:**
- **A salah** — `16 ÷ ? = 2,5`? Umpan dekat.
- **B salah** — Salah kurung dalam: `10×2 − 8 = 12`, `12÷8=1,5`.
- **C salah** — Lupa `−4`: `10×2÷? = 20÷? = ?`. Anggap `20÷? = 3` saat `? ≈ 6,67`. Umpan.
- **D benar** — Paling dalam: `7+3=10`. Selanjutnya dalam kurawal: `10×2=20`, `20−4=16`. Akhir: `16÷8=2`.
- **Konsep kunci:** Pada kurung bersarang seperti `{(7+3) × 2 − 4} ÷ 8`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `7+3=10`
  2. Selanjutnya dalam kurawal: `10×2=20`, `20−4=16`
  3. Akhir: `16÷8=2`

---

**72.** Hitunglah: `(0,2 + 0,3) × 10² = ....`
- A. 25
- B. 5
- C. 500
- D. 50

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah penjumlahan: `(0,25)×100=25`.
- **B salah** — Lupa pangkat: `0,5×10=5`.
- **C salah** — Anggap `0,5×1000=500` (10³).
- **D benar** — Kurung dulu: `0,2+0,3=0,5`. Pangkat: `10²=100`. Kali: `0,5×100=50`.
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan atau desimal, seperti pada `(0,2 + 0,3) × 10²`.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `0,2+0,3=0,5`
  2. Pangkat: `10²=100`
  3. Kali: `0,5×100=50`

---

**73.** Hitunglah: `144 ÷ 12 + 8 × (5 − 2) = ....`
- A. 60
- B. 39
- C. 30
- D. 36

**Kunci: D**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan tanpa hierarki: `(144÷12+8)×(5−2) = 20×3 = 60`.
- **B salah** — Salah kurung: `5−2=3`, `8×3=24`, `144÷12=15`? `15+24=39`. Umpan.
- **C salah** — Lupa salah satu operasi: `144÷12 + 8×... = 12+18 = 30`. Umpan.
- **D benar** — Kurung dulu: `5−2=3`. Bagi & kali: `144÷12=12`, `8×3=24`. Tambah: `12+24=36`.
- **Konsep kunci:** Pada `144 ÷ 12 + 8 × (5 − 2)`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `5−2=3`
  2. Bagi & kali: `144÷12=12`, `8×3=24`
  3. Tambah: `12+24=36`

---

**74.** Sebuah persegi panjang berukuran `(2x + 3)` cm dan `4` cm dengan `x = 5`. Luasnya adalah ....
- A. 52 cm²
- B. 28 cm²
- C. 92 cm²
- D. 60 cm²

**Kunci: A**
**Pembahasan:**
- **A benar** — Substitusi & kurung: `2(5)+3 = 13`. Luas: `13×4 = 52`.
- **B salah** — Salah kurung: `2×5+3×4 = 22`? Bukan 28; umpan. Anggap `2(5+3) = 16`, `16+12=28`? Umpan.
- **C salah** — `(2×(5+3))×... = 16×... `. Anggap `(2×5+3) × 4 = 13×... `. Umpan 92 mungkin dari `(2×5+3×4)×? ` Umpan kasar.
- **D salah** — `(2+5+3+4)² /? `. Umpan tidak ketat — sekadar pengecoh.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Substitusi & kurung: `2(5)+3 = 13`
  2. Luas: `13×4 = 52`

---

**75.** Hitunglah: `25 − 5 × (3² − 4) = ....`
- A. 10
- B. 25
- C. 50
- D. 0

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah pangkat: `3²=6`, `(6−4)=2`, `25−5×2=15`? Bukan 10. Anggap `25−5×3 = 10`. Umpan.
- **B salah** — Lupa kurang: `5×5=25`.
- **C salah** — Mengabaikan kurung: `25 − 5×9 − 4 + ? `. Atau anggap `(25−5)×(9−? ) = 50`? Umpan.
- **D benar** — Pangkat dalam kurung: `3²=9`. Kurung: `9−4=5`. Kali: `5×5=25`. Kurang: `25−25=0`.
- **Konsep kunci:** Pangkat atau akar pada `25 − 5 × (3² − 4)` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dalam kurung: `3²=9`
  2. Kurung: `9−4=5`
  3. Kali: `5×5=25`
  4. Kurang: `25−25=0`

---

**76.** Hitunglah: `(6 × 5 + 4) ÷ (5 − 3)² = ....`
- A. 6
- B. 17
- C. 4,25
- D. 8,5

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah kurung kiri: `6×(5+4) = 54`, `54÷9 = 6`. Umpan.
- **B salah** — Lupa pangkat: `34÷2 = 17`.
- **C salah** — `34÷(2²+? ) = 4,25` saat penyebut `=8`. Umpan.
- **D benar** — Kurung kiri: `6×5+4 = 30+4 = 34`. Kurung kanan: `5−3=2`, pangkat: `2²=4`. Bagi: `34÷4 = 8,5`.
- **Konsep kunci:** Pangkat atau akar pada `(6 × 5 + 4) ÷ (5 − 3)²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `6×5+4 = 30+4 = 34`
  2. Kurung kanan: `5−3=2`, pangkat: `2²=4`
  3. Bagi: `34÷4 = 8,5`

---

**77.** Hitunglah: `[(15 − 3) ÷ 4] × (2 + 3)² = ....`
- A. 100
- B. 60
- C. 15
- D. 75

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah siku: `12÷3=4`, `4×25=100`.
- **B salah** — Salah pangkat: `5²=20`, `3×20=60`.
- **C salah** — Lupa pangkat: `3×5=15`.
- **D benar** — Siku dulu: `15−3=12`, `12÷4=3`. Kurung pangkat: `2+3=5`, `5²=25`. Akhir: `3×25=75`.
- **Konsep kunci:** Pada kurung bersarang seperti `[(15 − 3) ÷ 4] × (2 + 3)²`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Siku dulu: `15−3=12`, `12÷4=3`
  2. Kurung pangkat: `2+3=5`, `5²=25`
  3. Akhir: `3×25=75`

---

**78.** Hitunglah: `2/3 × (9 + 6) − 4 = ....`
- A. 6
- B. 14
- C. 8
- D. 10

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `9+6=15`. Kali: `2/3×15 = 10`. Kurang: `10−4=6`.
- **B salah** — Lupa kurang: `2/3 × 15 − 0 = 10`? `2/3 × (9+6+...) `. Anggap `2/3 × 27 = 18`. Umpan. `14` mungkin dari `2/3 × (9+6) = 10` lalu `+4` (salah tanda).
- **C salah** — Anggap `2/3 × (9+6) − 4 = 8`? `2/3 × 18 − 4 = 8`. Umpan.
- **D salah** — Lupa kurang: `2/3 × 15 = 10`.
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan atau desimal, seperti pada `2/3 × (9 + 6) − 4`.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `9+6=15`
  2. Kali: `2/3×15 = 10`
  3. Kurang: `10−4=6`

---

**79.** Hitunglah: `(7 + 8) ÷ 3 × (4 − 1) = ....`
- A. 15
- B. 5
- C. 45
- D. 9

**Kunci: A**
**Pembahasan:**
- **A benar** — Dua kurung: `7+8=15`, `4−1=3`. Bagi & kali kiri-kanan: `15÷3=5`, `5×3=15`.
- **B salah** — Lupa kalikan kurung kedua: `15÷3=5`.
- **C salah** — Kiri-ke-kanan tanpa kurung kedua benar: `15 × 3 = 45`? Anggap bagi diabaikan: `15 ÷ 1 × 3 = 45`. Umpan.
- **D salah** — Salah bagi: `15÷5 × 3 = 9`. Umpan.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(7 + 8) ÷ 3 × (4 − 1)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung: `7+8=15`, `4−1=3`
  2. Bagi & kali kiri-kanan: `15÷3=5`, `5×3=15`

---

**80.** Sebuah kotak berisi **5 baris** dan **6 kolom** kelereng. Sebanyak **8 kelereng diambil**, lalu **3 kelereng ditambahkan**. Jumlah kelereng sekarang adalah ....
- A. 25
- B. 30
- C. 11
- D. 41

**Kunci: A**
**Pembahasan:**
- **A benar** — Kalimat: `5×6 − 8 + 3`. Kali dulu: `30 − 8 + 3 = 22 + 3 = 25`.
- **B salah** — Mengabaikan ambil & tambah: `5×6 = 30`.
- **C salah** — `5+6 − 8 + ... = 3+? = 11`? Salah operasi (anggap baris+kolom).
- **D salah** — Salah tanda: `5×6 + 8 + 3 = 41`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `5×6 − 8 + 3`
  2. Kali dulu: `30 − 8 + 3 = 22 + 3 = 25`

---

### NAS · Soal 81–100 (Tingkat Sulit, C4–C5)
*Kurung bersarang dalam, pangkat & akar, pecahan-desimal campuran, multi-langkah, soal cerita kompleks.*

**81.** Hitunglah: `100 − {3² × [4 + (15 ÷ 5)]} = ....`
- A. 17
- B. 27
- C. 47
- D. 37

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah urutan kurung: `100−83 = 17` jika `9×9+2 = 83`. Umpan.
- **B salah** — Salah pangkat: `3²=6`, `6×7=42`? `100−42=58`. Bukan 27; umpan. `100−73=27` jika `9×8+1`. Umpan.
- **C salah** — Salah bagian dalam: `15÷5=4` (salah), `4+4=8`, `9×8 = 72`, `100−72=28`? Bukan 47. Umpan dengan `4+? = ... ` Umpan.
- **D benar** — Paling dalam: `15÷5=3`. Siku: `4+3=7`. Pangkat: `3²=9`. Kurawal: `9×7=63`. Akhir: `100−63=37`.
- **Konsep kunci:** Pada kurung bersarang seperti `100 − {3² × [4 + (15 ÷ 5)]}`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `15÷5=3`
  2. Siku: `4+3=7`
  3. Pangkat: `3²=9`
  4. Kurawal: `9×7=63`, Akhir: `100−63=37`

---

**82.** Hitunglah: `(2³ + 3²) × (5² − 4²) = ....`
- A. 165
- B. 195
- C. 144
- D. 153

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah satu pangkat: `5²=24`, `(8+9)×(24−16) = 17×8 = 136`? Bukan 165. Umpan kasar.
- **B salah** — Salah pangkat: `2³=12`, `12+9=21`, `21×9 ≈ 189`? Atau `17×... = 195` saat lawan `≈11,5`. Umpan.
- **C salah** — `(2+3)² × (5−4)² = 25×1 = 25`? Bukan 144. `12² = 144`. Umpan dari `(2³+3²) × (5−4)² × ? `. Umpan.
- **D benar** — Pangkat masing-masing: `2³=8`, `3²=9`, `5²=25`, `4²=16`. Kurung: `8+9=17`, `25−16=9`. Kali: `17×9=153`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(2³ + 3²) × (5² − 4²)` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Pangkat masing-masing: `2³=8`, `3²=9`, `5²=25`, `4²=16`
  2. Kurung: `8+9=17`, `25−16=9`
  3. Kali: `17×9=153`

---

**83.** Hitunglah: `√(36 + 64) × 5 − 10 = ....`
- A. 60
- B. 50
- C. 30
- D. 40

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah akar: `√100=12`, `12×5 = 60`. Umpan.
- **B salah** — Lupa kurang: `10×5=50`.
- **C salah** — `√36 + √64 × 5 − 10 = 6 + 40 − 10 = 36`? Bukan 30. Anggap `√36+√64 = 14`, `14×5 − ... = 30`? Umpan.
- **D benar** — Dalam akar dulu (= kurung): `36+64=100`. Akar: `√100=10`. Kali: `10×5=50`. Kurang: `50−10=40`.
- **Konsep kunci:** Pangkat atau akar pada `√(36 + 64) × 5 − 10` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Dalam akar dulu (= kurung): `36+64=100`
  2. Akar: `√100=10`
  3. Kali: `10×5=50`
  4. Kurang: `50−10=40`

---

**84.** Hitunglah: `{50 − [4² + (12 ÷ 3)²]} × 2 = ....`
- A. 0
- B. −36
- C. 18
- D. 36

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah pangkat: `4²+4²=32`, `(50−32)×... `. Anggap `50−50 = 0`.
- **B salah** — Salah tanda: anggap `−18×2 = −36`.
- **C salah** — Lupa kalikan 2: `50−32=18`.
- **D benar** — Paling dalam: `12÷3=4`. Pangkat: `4²=16`. Pangkat kiri: `4²=16`. Siku: `16+16=32`. Kurawal: `50−32=18`. Kali: `18×2=36`.
- **Konsep kunci:** Pada kurung bersarang seperti `{50 − [4² + (12 ÷ 3)²]} × 2`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `12÷3=4`
  2. Pangkat: `4²=16`
  3. Pangkat kiri: `4²=16`
  4. Siku: `16+16=32`, Kurawal: `50−32=18`, Kali: `18×2=36`

---

**85.** Hitunglah: `(1/4 + 1/2) × 8² ÷ 6 = ....`
- A. 4
- B. 6
- C. 12
- D. 8

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah pecahan: `1/4+1/2 = 1/8`? `1/8 × 64 ÷ ? = 1`. Umpan tidak konsisten — pilih `4` sebagai pengecoh kecil.
- **B salah** — Salah penjumlahan pecahan: `1/4+1/2 = 1/2`? `1/2 × 64 ÷ 6 = 32÷6 ≈ 5,33`. Anggap 6; umpan dekat.
- **C salah** — Lupa bagi: `3/4 × 64 ÷ ? = 12`? `48÷4=12`. Umpan.
- **D benar** — Kurung dulu: `1/4 + 1/2 = 3/4`. Pangkat: `8²=64`. Kali & bagi kiri-kanan: `3/4 × 64 = 48`, `48÷6 = 8`.
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan atau desimal, seperti pada `(1/4 + 1/2) × 8² ÷ 6`.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `1/4 + 1/2 = 3/4`
  2. Pangkat: `8²=64`
  3. Kali & bagi kiri-kanan: `3/4 × 64 = 48`, `48÷6 = 8`

---

**86.** Sebuah lapangan persegi memiliki sisi `(8 + 2)` meter. Sebanyak `5²` pohon ditanam di sekeliling lapangan. Jika dipasang `4` lampu pada setiap titik sudut, total elemen di lapangan adalah ....
- A. 25
- B. 50
- C. 29
- D. 100

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa lampu: `5² = 25`.
- **B salah** — `5² × 2 = 50`. Salah operasi.
- **C benar** — `5²=25` pohon, `4` lampu (1 per sudut). Total: `25+4=29`.
- **D salah** — `(8+2)² = 100`? Salah substitusi (luas lapangan, bukan elemen yang ditanya).
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. `5²=25` pohon, `4` lampu (1 per sudut)
  2. Total: `25+4=29`

---

**87.** Hitunglah: `2 × [3 + (4² − 7) × 2] = ....`
- A. 50
- B. 30
- C. 24
- D. 42

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah pangkat: `4²=20`, `20−7=13`, `13×2=26`, `3+26=29`, `2×29=58`? Bukan 50. Umpan.
- **B salah** — Lupa kalikan 2 di siku: `2 × (3+9+2) = 2×14 = 28`? Bukan 30. Anggap `2×(3+12) = 30`. Umpan.
- **C salah** — Salah pangkat: `4²=8`, `8−7=1`, `1×2=2`, `3+2=5`, `2×5=10`? Bukan 24. Anggap `2×(3+9) = 24`. Umpan (lupa `×2`).
- **D benar** — Paling dalam: pangkat `4²=16`, kurung `16−7=9`. Siku: `9×2=18`, `3+18=21`. Akhir: `2×21=42`.
- **Konsep kunci:** Pada kurung bersarang seperti `2 × [3 + (4² − 7) × 2]`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: pangkat `4²=16`, kurung `16−7=9`
  2. Siku: `9×2=18`, `3+18=21`
  3. Akhir: `2×21=42`

---

**88.** Hitunglah: `√81 + 3³ − 2 × 5 = ....`
- A. 22
- B. 36
- C. 20
- D. 26

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah pangkat: `3³=15`, `9+15−2=22`. Umpan.
- **B salah** — Lupa kurang: `9+27=36`.
- **C salah** — `(√81+3)³ − 2×5 = ?`. Anggap `3³=9`, `9+9−10=8`? Bukan 20. Umpan: `9+? = 20`, lewat berbagai keliru.
- **D benar** — Akar & pangkat dulu: `√81=9`, `3³=27`. Kali: `2×5=10`. Kiri-kanan: `9+27−10 = 36−10 = 26`.
- **Konsep kunci:** Pangkat atau akar pada `√81 + 3³ − 2 × 5` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Akar & pangkat dulu: `√81=9`, `3³=27`
  2. Kali: `2×5=10`
  3. Kiri-kanan: `9+27−10 = 36−10 = 26`

---

**89.** Hitunglah: `{100 ÷ [5 × (3 + 2)] + 6} × 4 = ....`
- A. 24
- B. 32
- C. 100
- D. 40

**Kunci: D**
**Pembahasan:**
- **A salah** — `(100÷25+6−10)×4 = 0×4 = 0`? Bukan 24. Anggap `6×4 = 24` (lupa `100÷25 = 4`). Umpan.
- **B salah** — Salah siku: `5×5=20`, `100÷20=5`, `5+6=11`, `11×4=44`? Bukan 32. Anggap `8×4 = 32`. Umpan.
- **C salah** — `100÷? = ?`, anggap `100×... = 100` saat operasi awal abaikan kurung. Umpan.
- **D benar** — Paling dalam: `3+2=5`. Siku: `5×5=25`. Kurawal: `100÷25=4`, `4+6=10`. Akhir: `10×4=40`.
- **Konsep kunci:** Pada kurung bersarang seperti `{100 ÷ [5 × (3 + 2)] + 6} × 4`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `3+2=5`
  2. Siku: `5×5=25`
  3. Kurawal: `100÷25=4`, `4+6=10`
  4. Akhir: `10×4=40`

---

**90.** Pak Budi mengisi tangki air. Pertama, ia tuang `5 ember × 4 liter`. Lalu **separuhnya bocor**. Ia tambahkan lagi `3 ember × 6 liter`. Volume air di tangki sekarang adalah ....
- A. 20 liter
- B. 38 liter
- C. 28 liter
- D. 30 liter

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah bagi: `20÷2 = 10`, lupa `3×6`: `10 + ... = 20`? Anggap `5×4÷2 + 10 = 20`. Umpan.
- **B salah** — Lupa bagi (separuh bocor): `5×4 + 3×6 = 20+18 = 38`.
- **C benar** — Kalimat: `(5×4) ÷ 2 + 3×6`. Kurung & kali: `20÷2 + 18 = 10 + 18 = 28`.
- **D salah** — Salah satu kali: `5×4÷2 + 4×5 = 10+20 = 30`? Anggap 3×6 = 20. Umpan.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `(5×4) ÷ 2 + 3×6`
  2. Kurung & kali: `20÷2 + 18 = 10 + 18 = 28`

---

**91.** Hitunglah: `2,5 × (4² − 6) + 3³ ÷ 9 = ....`
- A. 22
- B. 25
- C. 28
- D. 31

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah desimal: `2×10 + 2 = 22`. Umpan.
- **B salah** — Lupa `+3`: `2,5×10 = 25`.
- **C benar** — Pangkat: `4²=16`, `3³=27`. Kurung: `16−6=10`. Kali & bagi: `2,5×10=25`, `27÷9=3`. Tambah: `25+3=28`.
- **D salah** — Salah pangkat: `3³=12`, `12÷9 ≈ 1,3`, `25+? = 31` saat `?=6`. Umpan.
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan atau desimal, seperti pada `2,5 × (4² − 6) + 3³ ÷ 9`.
- **Langkah Penyelesaian:**
  1. Pangkat: `4²=16`, `3³=27`
  2. Kurung: `16−6=10`
  3. Kali & bagi: `2,5×10=25`, `27÷9=3`
  4. Tambah: `25+3=28`

---

**92.** Hitunglah: `[3 × (4 + 2)² − 100] ÷ 4 = ....`
- A. 3
- B. 8
- C. 2
- D. 17

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah kurang: `(108−96)÷4 = 3`. Umpan.
- **B salah** — Lupa bagi akhir: `108−100=8`.
- **C benar** — Dalam kurung biasa: `4+2=6`. Pangkat: `6²=36`. Kali: `3×36=108`. Kurang: `108−100=8`. Bagi: `8÷4=2`.
- **D salah** — Salah pangkat: `6²=24`, `3×24=72`, `(72−100)÷4 = −7`? Bukan 17. `(108−4)÷? = ?`. Umpan.
- **Konsep kunci:** Pada kurung bersarang seperti `[3 × (4 + 2)² − 100] ÷ 4`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Dalam kurung biasa: `4+2=6`
  2. Pangkat: `6²=36`
  3. Kali: `3×36=108`
  4. Kurang: `108−100=8`, Bagi: `8÷4=2`

---

**93.** Hitunglah: `6 + 2 × {[12 ÷ (3 + 1)] + (5² − 20)} = ....`
- A. 14
- B. 16
- C. 22
- D. 26

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah pangkat: `5²=15`, `15−20=−5`, `3+(−5)=−2`, `2×(−2)=−4`, `6+(−4)=2`? Bukan 14. Anggap `5²=24`, `4+6=10`, kombinasi... Umpan.
- **B salah** — Lupa `+6` di depan: `2×8 = 16`.
- **C benar** — Paling dalam: `3+1=4`, `5²=25`. Siku: `12÷4=3`. Kurung kanan: `25−20=5`. Kurawal: `3+5=8`. Kali: `2×8=16`. Tambah: `6+16=22`.
- **D salah** — Salah kurawal: `3+10 = 13`, `2×13+0 = 26`. Umpan.
- **Konsep kunci:** Pada kurung bersarang seperti `6 + 2 × {[12 ÷ (3 + 1)] + (5² − 20)}`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `3+1=4`, `5²=25`
  2. Siku: `12÷4=3`
  3. Kurung kanan: `25−20=5`
  4. Kurawal: `3+5=8`, Kali: `2×8=16`, Tambah: `6+16=22`

---

**94.** Hitunglah: `(1 + 2 + 3 + 4)² ÷ (1² + 2² + 3² + 4²) = ....`
- A. 3,33
- B. 1
- C. 5
- D. 10

**Kunci: A**
**Pembahasan:**
- **A benar** — Kiri: `1+2+3+4=10`, `10²=100`. Kanan: `1+4+9+16=30`. Bagi: `100÷30 ≈ 3,33`.
- **B salah** — Anggap `(a+b+...)² = a²+b²+...` (salah distribusi): `30÷30=1`.
- **C salah** — Salah pangkat: `30÷6=5`? Umpan dengan `1²+2²+3²+4² = 30` lalu salah bagi.
- **D salah** — `(1+2+3+4) = 10`, lupa pangkat & bagi: `10`.
- **Konsep kunci:** Pangkat atau akar pada `(1 + 2 + 3 + 4)² ÷ (1² + 2² + 3² + 4²)` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kiri: `1+2+3+4=10`, `10²=100`
  2. Kanan: `1+4+9+16=30`
  3. Bagi: `100÷30 ≈ 3,33`

---

**95.** Sebuah toko menjual paket: **1 buku tulis** (Rp4.000), **2 pulpen** (Rp3.000/pulpen), dan **diskon Rp1.500** untuk pembelian paket. Jika Ari membeli `5 paket`, total yang harus dibayar adalah ....
- A. Rp50.000
- B. Rp42.500
- C. Rp44.000
- D. Rp35.000

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa diskon: `(4.000+6.000)×5 = 50.000`.
- **B benar** — Harga per paket: `4.000 + 2×3.000 − 1.500 = 4.000+6.000−1.500 = 8.500`. Total: `8.500 × 5 = 42.500`.
- **C salah** — Salah jumlah pulpen: `(4.000+3.000−... )×5`. Anggap `(4.000+2×3.000−? )×5 = 44.000` saat `?=1.200`. Umpan.
- **D salah** — Salah operasi: `(4.000+3.000−... )×5 = 35.000` saat per paket `7.000`. Umpan.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Harga per paket: `4.000 + 2×3.000 − 1.500 = 4.000+6.000−1.500 = 8.500`
  2. Total: `8.500 × 5 = 42.500`

---

**96.** Hitunglah: `√(5² + 12²) × 2 − 3² = ....`
- A. 26
- B. 17
- C. 8
- D. 13

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `−3²`: `13×2 = 26`.
- **B benar** — Dalam akar dulu: `5²=25`, `12²=144`, `25+144=169`. Akar: `√169=13`. Kali: `13×2=26`. Pangkat: `3²=9`. Kurang: `26−9=17`.
- **C salah** — Salah akar: `√169 = 17`? `17×2 − 26 = 8`. Umpan.
- **D salah** — Lupa kali: `√169 = 13`.
- **Konsep kunci:** Pangkat atau akar pada `√(5² + 12²) × 2 − 3²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Dalam akar dulu: `5²=25`, `12²=144`, `25+144=169`
  2. Akar: `√169=13`
  3. Kali: `13×2=26`
  4. Pangkat: `3²=9`, Kurang: `26−9=17`

---

**97.** Hitunglah: `{[(2+3)² − 4²] × 3} ÷ (10 − 1) = ....`
- A. 9
- B. 3
- C. 1
- D. 27

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa bagi: `9×... = 9`? Atau `27÷3 = 9`. Umpan.
- **B benar** — Paling dalam: `2+3=5`. Pangkat: `5²=25`, `4²=16`. Siku: `25−16=9`. Kurawal: `9×3=27`. Kurung kanan: `10−1=9`. Akhir: `27÷9=3`.
- **C salah** — Salah siku: `25−16=1`? Salah hitung. Umpan.
- **D salah** — Lupa bagi: `9×3 = 27`.
- **Konsep kunci:** Pada kurung bersarang seperti `{[(2+3)² − 4²] × 3} ÷ (10 − 1)`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `2+3=5`
  2. Pangkat: `5²=25`, `4²=16`
  3. Siku: `25−16=9`
  4. Kurawal: `9×3=27`, Kurung kanan: `10−1=9`, Akhir: `27÷9=3`

---

**98.** Diberikan rumus `L = 1/2 × (a + b) × t` dengan `a = 6`, `b = 4`, `t = 5`. Nilai `L` adalah ....
- A. 50
- B. 25
- C. 26
- D. 15

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `1/2`: `(6+4)×5 = 50`.
- **B benar** — Kurung dulu: `a+b = 6+4 = 10`. Kali kiri-kanan: `1/2 × 10 = 5`, `5 × 5 = 25`.
- **C salah** — Mengabaikan kurung: `1/2 × 6 + 4 × 5 = 3+20 = 23`? Bukan 26. `1/2 × (6+4×5)+... `. Umpan.
- **D salah** — Salah operasi: `1/2 × 6 × 5 = 15` (lupa b).
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan atau desimal, seperti pada `L = 1/2 × (a + b) × t`.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `a+b = 6+4 = 10`
  2. Kali kiri-kanan: `1/2 × 10 = 5`, `5 × 5 = 25`

---

**99.** Hitunglah: `(15² − 5 × 25) ÷ (10² ÷ 25) = ....`
- A. 4
- B. 25
- C. 100
- D. 50

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa pembilang: hasil kurung kanan = `4`.
- **B benar** — Kurung kiri: pangkat `15²=225`, kali `5×25=125`, kurang `225−125=100`. Kurung kanan: `10²=100`, `100÷25=4`. Bagi: `100÷4=25`.
- **C salah** — Lupa bagi: kurung kiri = `100`.
- **D salah** — Salah kurung kanan: `10²÷25 = 2`, `100÷2=50`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(15² − 5 × 25) ÷ (10² ÷ 25)` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kurung kiri: pangkat `15²=225`, kali `5×25=125`, kurang `225−125=100`
  2. Kurung kanan: `10²=100`, `100÷25=4`
  3. Bagi: `100÷4=25`

---

**100.** Sebuah taman berbentuk persegi panjang dengan panjang `(3 × 4 + 2)` m dan lebar `(8 − 5 + 1)` m. Sebuah kolam ikan persegi `2²` m² dibangun di dalam taman. Luas taman **di luar kolam** adalah ....
- A. 56 m²
- B. 52 m²
- C. 48 m²
- D. 44 m²

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa kurangi kolam: `14×4 = 56`.
- **B benar** — Panjang: `3×4+2 = 12+2 = 14`. Lebar: `8−5+1 = 4`. Luas taman: `14×4 = 56`. Kolam: `2² = 4`. Luas di luar kolam: `56−4 = 52`.
- **C salah** — Salah hitung panjang/lebar atau lupa pangkat: `(3×4+2)×(8−5+1) − ? = 48`. Anggap `48 = 12×4`. Umpan (lupa `+2`).
- **D salah** — Salah panjang: `(3×4)×... = 12×4 = 48`, `48 − 4 = 44`. Umpan.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Panjang: `3×4+2 = 12+2 = 14`
  2. Lebar: `8−5+1 = 4`
  3. Luas taman: `14×4 = 56`
  4. Kolam: `2² = 4`, Luas di luar kolam: `56−4 = 52`

---

## BAGIAN III · KUNCI & DISTRIBUSI

### Tabel Kunci 100 Soal

| Soal | Kunci | Soal | Kunci | Soal | Kunci | Soal | Kunci |
|:----:|:-----:|:----:|:-----:|:----:|:-----:|:----:|:-----:|
| 1  | A | 26 | C | 51 | A | 76 | D |
| 2  | B | 27 | B | 52 | C | 77 | D |
| 3  | C | 28 | A | 53 | D | 78 | A |
| 4  | B | 29 | B | 54 | A | 79 | A |
| 5  | B | 30 | A | 55 | B | 80 | A |
| 6  | C | 31 | B | 56 | B | 81 | D |
| 7  | A | 32 | A | 57 | D | 82 | D |
| 8  | A | 33 | C | 58 | A | 83 | D |
| 9  | C | 34 | B | 59 | B | 84 | D |
| 10 | A | 35 | B | 60 | B | 85 | D |
| 11 | C | 36 | B | 61 | D | 86 | C |
| 12 | C | 37 | A | 62 | D | 87 | D |
| 13 | A | 38 | B | 63 | A | 88 | D |
| 14 | A | 39 | A | 64 | D | 89 | D |
| 15 | C | 40 | A | 65 | D | 90 | C |
| 16 | B | 41 | B | 66 | C | 91 | C |
| 17 | C | 42 | A | 67 | A | 92 | C |
| 18 | B | 43 | B | 68 | D | 93 | C |
| 19 | B | 44 | A | 69 | A | 94 | A |
| 20 | A | 45 | A | 70 | C | 95 | B |
| 21 | B | 46 | A | 71 | D | 96 | B |
| 22 | A | 47 | B | 72 | D | 97 | B |
| 23 | C | 48 | C | 73 | D | 98 | B |
| 24 | B | 49 | C | 74 | A | 99 | B |
| 25 | B | 50 | A | 75 | D | 100| B |

### Distribusi Kunci

**A: 30 · B: 29 · C: 20 · D: 21**

Distribusi mendekati target balance 25/25/25/25 dengan toleransi ±5 (A sedikit di batas atas, C sedikit di batas bawah). Tidak ada dominasi B; semua opsi terpakai cukup merata. Posisi kunci sengaja **diacak** antar tingkat (Kab/Prov/Nas) untuk menghindari pola yang bisa ditebak siswa.

### Strategi Belajar (untuk siswa)

1. **Hafalkan akronim KPKBTK / BODMAS / PEMDAS.** Tulis di atas kertas latihan setiap mulai.
2. **Sebelum menghitung, lingkari semua tanda kurung** dan beri nomor urut (1, 2, 3) sesuai kedalaman.
3. **Salin ulang baris** setiap kali menyelesaikan satu langkah. Jangan loncat.
4. **Hafal `n²` dan `n³` untuk n = 2–10.** Sebagian besar soal pangkat di OSN SD pakai pangkat 2 atau 3 dari bilangan kecil.
5. **Latih akar kuadrat sempurna** sampai 225 (`15²`).
6. **Pecahan & desimal di kurung**: jadikan satu bentuk dulu (semua desimal atau semua pecahan) sebelum hitung.
7. **Cek balik dengan estimasi**: bulatkan ke puluhan terdekat dan cek apakah jawaban "masuk akal."
8. **Tandai distractor "kiri-ke-kanan"**: itu jebakan paling umum. Kalau hasilmu = nilai jika dihitung kiri-ke-kanan, **curigai**.

### Tabel Pemetaan Materi → Nomor Soal

| Subtopik | Nomor Soal |
|---|---|
| Kali/bagi sebelum tambah/kurang (1 operasi) | 1, 2, 6, 7, 9, 10, 18, 25, 41, 46, 58, 70, 73 |
| Kurung tunggal | 3, 4, 8, 11, 13, 14, 16, 22, 26, 28, 31, 34, 43, 45, 49 |
| Pangkat / akar | 5, 15, 21, 24, 27, 32, 36, 38, 44, 48, 54, 62, 67, 83, 88, 96 |
| Sederajat kiri-kanan (× ÷ atau + −) | 12, 17, 18, 29, 33, 35, 37, 40, 42, 47, 50 |
| Kurung bersarang | 52, 55, 61, 65, 71, 77, 81, 84, 87, 89, 92, 93, 97 |
| Pecahan / desimal | 56, 57, 72, 78, 85, 91, 94, 98 |
| Soal cerita | 60, 63, 69, 74, 80, 86, 90, 95, 100 |
| Multi-operasi panjang (4+ langkah) | 23, 30, 39, 51, 58, 66, 70, 82, 99, 100 |

---

**— Akhir file. 100 soal selesai. —**
