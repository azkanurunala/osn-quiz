# OSN/KSN SD — MTK · Sub-Bab 01b: Urutan Operasi (Tingkat Mudah-Sedang)

> **Profil**: 50 Kab + 50 Prov = 100 soal PG
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

## KAB · Soal 1-50 (Tingkat Kabupaten, C2-C3)

*Operasi sederhana, kurung tunggal, bilangan bulat ramah.*

**1.** Hitunglah: `7 + 2 × 5 = ....`
- A. 17
- B. 45
- C. 14
- D. 70

**Kunci: A**
**Pembahasan:**
- **A benar** — Kali dulu: `2 × 5 = 10`, lalu `7 + 10 = 17`.
- **B salah** — Hitung kiri-ke-kanan tanpa hierarki: `(7 + 2) × 5 = 45`. Kesalahan paling umum.
- **C salah** — Mengabaikan perkalian: `7 + 2 + 5 = 14`.
- **D salah** — Sekadar umpan besar dari hasil hitung keliru.
- **Konsep kunci:** Pada `7 + 2 × 5`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Kali dulu: `2 × 5 = 10`
  2. Kemudian, `7 + 10 = 17`

---

**2.** Hitunglah: `18 − 6 ÷ 2 = ....`
- A. 6
- B. 15
- C. 12
- D. 21

**Kunci: B**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan: `(18 − 6) ÷ 2 = 6`. Salah urutan.
- **B benar** — Bagi dulu: `6 ÷ 2 = 3`, lalu `18 − 3 = 15`.
- **C salah** — Lupa `÷ 2`: `18 − 6 = 12`.
- **D salah** — Salah tanda: `18 + 6 ÷ 2 = 21`.
- **Konsep kunci:** Pada `18 − 6 ÷ 2`, bagi harus dikerjakan lebih dulu, baru kemudian kurang.
- **Langkah Penyelesaian:**
  1. Bagi dulu: `6 ÷ 2 = 3`
  2. Kemudian, `18 − 3 = 15`

---

**3.** Hitunglah: `(5 + 3) × 4 = ....`
- A. 17
- B. 23
- C. 32
- D. 12

**Kunci: C**
**Pembahasan:**
- **A salah** — Mengabaikan kurung: `5 + 3 × 4 = 17`.
- **B salah** — Sekadar umpan dekat dari salah penjumlahan.
- **C benar** — Kurung dulu: `5 + 3 = 8`, lalu `8 × 4 = 32`.
- **D salah** — Menjumlahkan semua: `5 + 3 + 4 = 12`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(5 + 3) × 4` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `5 + 3 = 8`
  2. Kemudian, `8 × 4 = 32`

---

**4.** Hitunglah: `24 ÷ (6 − 2) = ....`
- A. 2
- B. 4
- C. 22
- D. 6

**Kunci: D**
**Pembahasan:**
- **A salah** — Mengabaikan kurung: `24 ÷ 6 − 2 = 4 − 2 = 2`.
- **B salah** — Lupa `− 2`: `24 ÷ 6 = 4`.
- **C salah** — Lupa bagi: `24 − 2 = 22`.
- **D benar** — Kurung dulu: `6 − 2 = 4`, lalu `24 ÷ 4 = 6`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `24 ÷ (6 − 2)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `6 − 2 = 4`
  2. Kemudian, `24 ÷ 4 = 6`

---

**5.** Hitunglah: `3² + 7 = ....`
- A. 16
- B. 10
- C. 13
- D. 19

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat dulu: `3² = 9`, lalu `9 + 7 = 16`.
- **B salah** — Anggap `3² = 3`: `3 + 7 = 10`.
- **C salah** — Anggap `3² = 6` (dikali dua, bukan dikuadratkan): `6 + 7 = 13`.
- **D salah** — Sekadar umpan dekat.
- **Konsep kunci:** Pangkat atau akar pada `3² + 7` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `3² = 9`
  2. Kemudian, `9 + 7 = 16`

---

**6.** Hitunglah: `12 − 3 × 4 = ....`
- A. 36
- B. 0
- C. 5
- D. 12

**Kunci: B**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan: `(12 − 3) × 4 = 36`.
- **B benar** — Kali dulu: `3 × 4 = 12`, lalu `12 − 12 = 0`.
- **C salah** — Lupa kali: `12 − 3 − 4 = 5`.
- **D salah** — Mengabaikan `× 4`.
- **Konsep kunci:** Pada `12 − 3 × 4`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Kali dulu: `3 × 4 = 12`
  2. Kemudian, `12 − 12 = 0`

---

**7.** Hitunglah: `20 ÷ 4 + 6 = ....`
- A. 2
- B. 26
- C. 11
- D. 5

**Kunci: C**
**Pembahasan:**
- **A salah** — Kurung khayalan: `20 ÷ (4 + 6) = 2`.
- **B salah** — Lupa bagi: `20 + 6 = 26`.
- **C benar** — Bagi dulu: `20 ÷ 4 = 5`, lalu `5 + 6 = 11`.
- **D salah** — Lupa `+ 6`: `20 ÷ 4 = 5`.
- **Konsep kunci:** Pada `20 ÷ 4 + 6`, bagi harus dikerjakan lebih dulu, baru kemudian tambah.
- **Langkah Penyelesaian:**
  1. Bagi dulu: `20 ÷ 4 = 5`
  2. Kemudian, `5 + 6 = 11`

---

**8.** Hitunglah: `(8 − 5) × (3 + 2) = ....`
- A. 18
- B. 3
- C. 25
- D. 15

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah kurung kedua: `3 + 2` dianggap `6` → `3 × 6 = 18`.
- **B salah** — Lupa kalikan kurung kedua: `8 − 5 = 3`.
- **C salah** — Salah kurung pertama: `8 − 5` dianggap `5` → `5 × 5 = 25`.
- **D benar** — Dua kurung dulu: `8 − 5 = 3` dan `3 + 2 = 5`, lalu `3 × 5 = 15`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(8 − 5) × (3 + 2)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `8 − 5 = 3` dan `3 + 2 = 5`
  2. Kemudian, `3 × 5 = 15`

---

**9.** Hitunglah: `6 + 4 × 3 = ....`
- A. 18
- B. 30
- C. 13
- D. 24

**Kunci: A**
**Pembahasan:**
- **A benar** — Kali dulu: `4 × 3 = 12`, lalu `6 + 12 = 18`.
- **B salah** — Kiri-ke-kanan: `(6 + 4) × 3 = 30`.
- **C salah** — Menjumlahkan semua: `6 + 4 + 3 = 13`.
- **D salah** — Salah kali: `4 × 3` dianggap `18` → `6 + 18 = 24`.
- **Konsep kunci:** Pada `6 + 4 × 3`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Kali dulu: `4 × 3 = 12`
  2. Kemudian, `6 + 12 = 18`

---

**10.** Hitunglah: `25 − 5 × 3 = ....`
- A. 60
- B. 10
- C. 20
- D. 15

**Kunci: B**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan: `(25 − 5) × 3 = 60`.
- **B benar** — Kali dulu: `5 × 3 = 15`, lalu `25 − 15 = 10`.
- **C salah** — Lupa `× 3`: `25 − 5 = 20`.
- **D salah** — Salah kali: `5 × 3` dianggap `10` → `25 − 10 = 15`.
- **Konsep kunci:** Pada `25 − 5 × 3`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Kali dulu: `5 × 3 = 15`
  2. Kemudian, `25 − 15 = 10`

---

**11.** Hitunglah: `9 × (2 + 3) = ....`
- A. 21
- B. 54
- C. 45
- D. 14

**Kunci: C**
**Pembahasan:**
- **A salah** — Mengabaikan kurung: `9 × 2 + 3 = 21`.
- **B salah** — Salah kurung: `2 + 3` dianggap `6` → `9 × 6 = 54`.
- **C benar** — Kurung dulu: `2 + 3 = 5`, lalu `9 × 5 = 45`.
- **D salah** — Menjumlahkan semua: `9 + 2 + 3 = 14`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `9 × (2 + 3)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `2 + 3 = 5`
  2. Kemudian, `9 × 5 = 45`

---

**12.** Hitunglah: `16 ÷ 4 × 2 = ....`
- A. 2
- B. 32
- C. 4
- D. 8

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah urutan: `16 ÷ (4 × 2) = 2`.
- **B salah** — Salah pengelompokan: `(16 × 4) ÷ 2 = 32`.
- **C salah** — Lupa `× 2`: `16 ÷ 4 = 4`.
- **D benar** — Kiri-ke-kanan: `16 ÷ 4 = 4`, lalu `4 × 2 = 8`.
- **Konsep kunci:** Operasi yang sederajat pada `16 ÷ 4 × 2` (sama-sama kali & bagi) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kiri-ke-kanan: `16 ÷ 4 = 4`
  2. Kemudian, `4 × 2 = 8`

---

**13.** Hitunglah: `4 × 4 + 4 = ....`
- A. 20
- B. 32
- C. 12
- D. 16

**Kunci: A**
**Pembahasan:**
- **A benar** — Kali dulu: `4 × 4 = 16`, lalu `16 + 4 = 20`.
- **B salah** — Kurung khayalan: `(4 + 4) × 4 = 32`.
- **C salah** — Menjumlahkan semua: `4 + 4 + 4 = 12`.
- **D salah** — Lupa `+ 4`: `4 × 4 = 16`.
- **Konsep kunci:** Pada `4 × 4 + 4`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Kali dulu: `4 × 4 = 16`
  2. Kemudian, `16 + 4 = 20`

---

**14.** Hitunglah: `50 − (2 × 5 + 5) = ....`
- A. 45
- B. 35
- C. 40
- D. 25

**Kunci: B**
**Pembahasan:**
- **A salah** — Mengabaikan kurung: `50 − 2 × 5 + 5 = 50 − 10 + 5 = 45`.
- **B benar** — Kurung dulu: `2 × 5 + 5 = 15`, lalu `50 − 15 = 35`.
- **C salah** — Lupa `+ 5` di dalam kurung: `50 − 10 = 40`.
- **D salah** — Salah kurung: `2 × 5 + 5` dianggap `25` → `50 − 25 = 25`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `50 − (2 × 5 + 5)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu (dalam kurung tetap KPKBTK): `2 × 5 = 10`, `10 + 5 = 15`
  2. Kemudian, `50 − 15 = 35`

---

**15.** Hitunglah: `2² × 5 = ....`
- A. 100
- B. 14
- C. 20
- D. 40

**Kunci: C**
**Pembahasan:**
- **A salah** — Pangkat berlaku ke seluruh: `(2 × 5)² = 100`.
- **B salah** — Sekadar umpan dekat.
- **C benar** — Pangkat dulu: `2² = 4`, lalu `4 × 5 = 20`.
- **D salah** — Salah pangkat: `2²` dianggap `8` → `8 × 5 = 40`.
- **Konsep kunci:** Pangkat atau akar pada `2² × 5` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `2² = 4`
  2. Kemudian, `4 × 5 = 20`

---

**16.** Hitunglah: `30 ÷ (2 + 3) = ....`
- A. 18
- B. 15
- C. 10
- D. 6

**Kunci: D**
**Pembahasan:**
- **A salah** — Mengabaikan kurung: `30 ÷ 2 + 3 = 15 + 3 = 18`.
- **B salah** — Lupa `(2 + 3)`: `30 ÷ 2 = 15`.
- **C salah** — Salah tambah: `2 + 3` dianggap `3` → `30 ÷ 3 = 10`.
- **D benar** — Kurung dulu: `2 + 3 = 5`, lalu `30 ÷ 5 = 6`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `30 ÷ (2 + 3)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `2 + 3 = 5`
  2. Kemudian, `30 ÷ 5 = 6`

---

**17.** Hitunglah: `8 × 3 − 6 = ....`
- A. 18
- B. 6
- C. 14
- D. 26

**Kunci: A**
**Pembahasan:**
- **A benar** — Kali dulu: `8 × 3 = 24`, lalu `24 − 6 = 18`.
- **B salah** — Kurung khayalan: `(8 − 6) × 3 = 6`.
- **C salah** — Sekadar umpan dekat.
- **D salah** — Salah tanda: `8 × 3 + 2 = 26`.
- **Konsep kunci:** Pada `8 × 3 − 6`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Kali dulu: `8 × 3 = 24`
  2. Kemudian, `24 − 6 = 18`

---

**18.** Hitunglah: `30 − 10 + 5 = ....`
- A. 15
- B. 25
- C. 40
- D. 20

**Kunci: B**
**Pembahasan:**
- **A salah** — Tambah dulu: `30 − (10 + 5) = 15`. Tambah tidak lebih tinggi dari kurang.
- **B benar** — Kiri-ke-kanan: `30 − 10 = 20`, lalu `20 + 5 = 25`.
- **C salah** — Salah tanda: `30 + 10 = 40`.
- **D salah** — Lupa `+ 5`: `30 − 10 = 20`.
- **Konsep kunci:** Operasi yang sederajat pada `30 − 10 + 5` (sama-sama tambah & kurang) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kiri-ke-kanan: `30 − 10 = 20`
  2. Kemudian, `20 + 5 = 25`

---

**19.** Hitunglah: `(12 ÷ 3) + (15 ÷ 5) = ....`
- A. 8
- B. 9
- C. 7
- D. 6

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah bagi: `12 ÷ 3` dianggap `5` → `5 + 3 = 8`.
- **B salah** — Salah bagi: `15 ÷ 5` dianggap `5` → `4 + 5 = 9`.
- **C benar** — Dua kurung dulu: `12 ÷ 3 = 4`, `15 ÷ 5 = 3`, lalu `4 + 3 = 7`.
- **D salah** — Salah bagi: `12 ÷ 3` dianggap `3` → `3 + 3 = 6`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(12 ÷ 3) + (15 ÷ 5)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `12 ÷ 3 = 4`, `15 ÷ 5 = 3`
  2. Kemudian, `4 + 3 = 7`

---

**20.** Hitunglah: `3 × 4 + 5 × 2 = ....`
- A. 17
- B. 24
- C. 34
- D. 22

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `× 2` di kanan: `3 × 4 + 5 = 17`.
- **B salah** — Salah kali kedua: `5 × 2` dianggap `12` → `12 + 12 = 24`.
- **C salah** — Kiri-ke-kanan penuh: `(3 × 4 + 5) × 2 = 34`.
- **D benar** — Dua perkalian dulu: `3 × 4 = 12`, `5 × 2 = 10`, lalu `12 + 10 = 22`.
- **Konsep kunci:** Pada `3 × 4 + 5 × 2`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Dua perkalian dulu: `3 × 4 = 12`, `5 × 2 = 10`
  2. Kemudian, `12 + 10 = 22`

---

**21.** Hitunglah: `(7 + 3)² = ....`
- A. 100
- B. 58
- C. 20
- D. 49

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `7 + 3 = 10`, lalu `10² = 100`.
- **B salah** — Distribusi pangkat keliru: `7² + 3² = 49 + 9 = 58`.
- **C salah** — Pangkat dianggap kali dua: `(7 + 3) × 2 = 20`.
- **D salah** — Lupa `+ 3`: `7² = 49`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(7 + 3)²` harus diselesaikan lebih dulu, pangkat baru dikerjakan setelahnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `7 + 3 = 10`
  2. Kemudian, `10² = 100`

---

**22.** Hitunglah: `60 ÷ (2 × 5) = ....`
- A. 150
- B. 6
- C. 30
- D. 12

**Kunci: B**
**Pembahasan:**
- **A salah** — Mengabaikan kurung: `60 ÷ 2 × 5 = 30 × 5 = 150`.
- **B benar** — Kurung dulu: `2 × 5 = 10`, lalu `60 ÷ 10 = 6`.
- **C salah** — Lupa `× 5`: `60 ÷ 2 = 30`.
- **D salah** — Salah kurung: `60 ÷ 5 = 12`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `60 ÷ (2 × 5)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `2 × 5 = 10`
  2. Kemudian, `60 ÷ 10 = 6`

---

**23.** Hitunglah: `45 − 5 × 3 + 10 = ....`
- A. 130
- B. 20
- C. 40
- D. 30

**Kunci: C**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan total: `(45 − 5) × 3 + 10 = 130`.
- **B salah** — Salah tanda: `45 − 5 × 3 − 10 = 45 − 15 − 10 = 20`.
- **C benar** — Kali dulu: `5 × 3 = 15`, lalu kiri-ke-kanan: `45 − 15 + 10 = 40`.
- **D salah** — Lupa `+ 10`: `45 − 15 = 30`.
- **Konsep kunci:** Soal berlangkah banyak seperti `45 − 5 × 3 + 10` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kali dulu: `5 × 3 = 15`
  2. Kiri-ke-kanan: `45 − 15 + 10 = 30 + 10 = 40`

---

**24.** Hitunglah: `2 + 2² × 2 = ....`
- A. 16
- B. 12
- C. 8
- D. 10

**Kunci: D**
**Pembahasan:**
- **A salah** — Pangkat ke sebelah: `(2 + 2)² = 16`.
- **B salah** — Kiri-ke-kanan: `(2 + 2²) × 2 = 6 × 2 = 12`.
- **C salah** — Lupa `+ 2`: `2² × 2 = 8`.
- **D benar** — Pangkat dulu: `2² = 4`, kali: `4 × 2 = 8`, lalu `2 + 8 = 10`.
- **Konsep kunci:** Pangkat atau akar pada `2 + 2² × 2` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `2² = 4`
  2. Kali: `4 × 2 = 8`, lalu `2 + 8 = 10`

---

**25.** Hitunglah: `48 ÷ 6 + 2 × 3 = ....`
- A. 14
- B. 30
- C. 24
- D. 18

**Kunci: A**
**Pembahasan:**
- **A benar** — Bagi & kali dulu: `48 ÷ 6 = 8`, `2 × 3 = 6`, lalu `8 + 6 = 14`.
- **B salah** — Kiri-ke-kanan: `(48 ÷ 6 + 2) × 3 = 10 × 3 = 30`.
- **C salah** — Sekadar umpan.
- **D salah** — Kurung khayalan: `48 ÷ (6 + 2) × 3 = 6 × 3 = 18`.
- **Konsep kunci:** Pada `48 ÷ 6 + 2 × 3`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Bagi & kali dulu: `48 ÷ 6 = 8`, `2 × 3 = 6`
  2. Kemudian, `8 + 6 = 14`

---

**26.** Hitunglah: `100 ÷ (10 − 5) = ....`
- A. 5
- B. 20
- C. 15
- D. 25

**Kunci: B**
**Pembahasan:**
- **A salah** — Mengabaikan kurung: `100 ÷ 10 − 5 = 10 − 5 = 5`.
- **B benar** — Kurung dulu: `10 − 5 = 5`, lalu `100 ÷ 5 = 20`.
- **C salah** — Sekadar umpan dekat.
- **D salah** — Salah pengurangan: `100 ÷ (10 − 6) = 25`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `100 ÷ (10 − 5)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `10 − 5 = 5`
  2. Kemudian, `100 ÷ 5 = 20`

---

**27.** Hitunglah: `5² − 3² = ....`
- A. 4
- B. 22
- C. 16
- D. 8

**Kunci: C**
**Pembahasan:**
- **A salah** — Distribusi pangkat keliru: `(5 − 3)² = 4`.
- **B salah** — Anggap `3² = 3`: `25 − 3 = 22`.
- **C benar** — Pangkat masing-masing dulu: `5² = 25`, `3² = 9`, lalu `25 − 9 = 16`.
- **D salah** — Kuadrat dianggap kali dua: `10 − 2 = 8`.
- **Konsep kunci:** Pangkat atau akar pada `5² − 3²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat masing-masing dulu: `5² = 25`, `3² = 9`
  2. Kemudian, `25 − 9 = 16`

---

**28.** Hitunglah: `(4 + 6) × 2 − 5 = ....`
- A. 11
- B. 20
- C. 17
- D. 15

**Kunci: D**
**Pembahasan:**
- **A salah** — Mengabaikan kurung: `4 + 6 × 2 − 5 = 4 + 12 − 5 = 11`.
- **B salah** — Lupa `− 5`: `10 × 2 = 20`.
- **C salah** — Sekadar umpan dekat.
- **D benar** — Kurung dulu: `4 + 6 = 10`, kali: `10 × 2 = 20`, lalu `20 − 5 = 15`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(4 + 6) × 2 − 5` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `4 + 6 = 10`, kali: `10 × 2 = 20`
  2. Kemudian, `20 − 5 = 15`

---

**29.** Hitunglah: `72 ÷ 9 ÷ 2 = ....`
- A. 4
- B. 16
- C. 8
- D. 2

**Kunci: A**
**Pembahasan:**
- **A benar** — Kiri-ke-kanan: `72 ÷ 9 = 8`, lalu `8 ÷ 2 = 4`.
- **B salah** — Bagi kanan dulu: `72 ÷ (9 ÷ 2) = 72 ÷ 4,5 = 16`. Bagi tidak lebih tinggi dari bagi.
- **C salah** — Lupa `÷ 2`: `72 ÷ 9 = 8`.
- **D salah** — Salah bagi: `72 ÷ 36 = 2`.
- **Konsep kunci:** Operasi yang sederajat pada `72 ÷ 9 ÷ 2` (sama-sama bagi) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kiri-ke-kanan: `72 ÷ 9 = 8`
  2. Kemudian, `8 ÷ 2 = 4`

---

**30.** Hitunglah: `6 + 4 × 5 − 3 = ....`
- A. 47
- B. 23
- C. 27
- D. 14

**Kunci: B**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan: `(6 + 4) × 5 − 3 = 47`.
- **B benar** — Kali dulu: `4 × 5 = 20`, lalu kiri-ke-kanan: `6 + 20 − 3 = 23`.
- **C salah** — Salah tanda: `6 + 20 + 1 = 27`.
- **D salah** — Lupa kali: `6 + 4 + 5 − 1 = 14`.
- **Konsep kunci:** Soal berlangkah banyak seperti `6 + 4 × 5 − 3` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kali dulu: `4 × 5 = 20`
  2. Kiri-ke-kanan: `6 + 20 − 3 = 26 − 3 = 23`

---

**31.** Hitunglah: `(15 − 7) × 2 + 4 = ....`
- A. 16
- B. 22
- C. 20
- D. 18

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `+ 4`: `8 × 2 = 16`.
- **B salah** — Salah tambah: `16 + 6 = 22`.
- **C benar** — Kurung dulu: `15 − 7 = 8`, kali: `8 × 2 = 16`, lalu `16 + 4 = 20`.
- **D salah** — Salah tambah: `16 + 2 = 18`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(15 − 7) × 2 + 4` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `15 − 7 = 8`, kali: `8 × 2 = 16`
  2. Kemudian, `16 + 4 = 20`

---

**32.** Hitunglah: `90 − 6² = ....`
- A. 72
- B. 78
- C. 84
- D. 54

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah pangkat: `6²` dianggap `18` → `90 − 18 = 72`.
- **B salah** — Salah pangkat: `6²` dianggap `12` → `90 − 12 = 78`.
- **C salah** — Salah pangkat: `6²` dianggap `6` → `90 − 6 = 84`.
- **D benar** — Pangkat dulu: `6² = 36`, lalu `90 − 36 = 54`.
- **Konsep kunci:** Pangkat atau akar pada `90 − 6²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `6² = 36`
  2. Kemudian, `90 − 36 = 54`

---

**33.** Hitunglah: `8 × 3 − 4 × 2 = ....`
- A. 16
- B. 32
- C. 40
- D. 22

**Kunci: A**
**Pembahasan:**
- **A benar** — Dua perkalian dulu: `8 × 3 = 24`, `4 × 2 = 8`, lalu `24 − 8 = 16`.
- **B salah** — Sekadar umpan.
- **C salah** — Kiri-ke-kanan: `(8 × 3 − 4) × 2 = 20 × 2 = 40`.
- **D salah** — Umpan dekat dari salah hitung pengurangan.
- **Konsep kunci:** Pada `8 × 3 − 4 × 2`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Dua perkalian dulu: `8 × 3 = 24`, `4 × 2 = 8`
  2. Kemudian, `24 − 8 = 16`

---

**34.** Hitunglah: `(20 + 4) ÷ (5 − 2) = ....`
- A. 6
- B. 8
- C. 12
- D. 4

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah bagi: `24 ÷ 4 = 6`.
- **B benar** — Dua kurung dulu: `20 + 4 = 24`, `5 − 2 = 3`, lalu `24 ÷ 3 = 8`.
- **C salah** — Lupa kurung kedua: `24 ÷ 2 = 12`.
- **D salah** — Salah pengurangan: `5 − 2` dianggap `6` → `24 ÷ 6 = 4`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(20 + 4) ÷ (5 − 2)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `20 + 4 = 24`, `5 − 2 = 3`
  2. Kemudian, `24 ÷ 3 = 8`

---

**35.** Hitunglah: `5 + 5 × 5 ÷ 5 = ....`
- A. 25
- B. 6
- C. 10
- D. 30

**Kunci: C**
**Pembahasan:**
- **A salah** — `5 × 5 = 25`, lalu berhenti di situ.
- **B salah** — Sekadar umpan.
- **C benar** — Kali & bagi dulu (kiri-kanan): `5 × 5 = 25`, `25 ÷ 5 = 5`, lalu `5 + 5 = 10`.
- **D salah** — Sekadar umpan besar.
- **Konsep kunci:** Operasi yang sederajat pada `5 + 5 × 5 ÷ 5` (sama-sama kali & bagi) dikerjakan berurutan dari kiri ke kanan, lebih dulu daripada tambah.
- **Langkah Penyelesaian:**
  1. Kali & bagi dulu (kiri-kanan): `5 × 5 = 25`, `25 ÷ 5 = 5`
  2. Kemudian, `5 + 5 = 10`

---

**36.** Hitunglah: `3 × (5 + 2)² = ....`
- A. 49
- B. 42
- C. 441
- D. 147

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `× 3`: `(5 + 2)² = 49`.
- **B salah** — Pangkat dianggap kali dua: `3 × 7 × 2 = 42`.
- **C salah** — Pangkat berlaku ke seluruh: `(3 × 7)² = 441`.
- **D benar** — Kurung dulu: `5 + 2 = 7`, pangkat: `7² = 49`, lalu kali: `3 × 49 = 147`.
- **Konsep kunci:** Pangkat atau akar pada `3 × (5 + 2)²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `5 + 2 = 7`, pangkat: `7² = 49`
  2. Kali: `3 × 49 = 147`

---

**37.** Hitunglah: `64 ÷ 8 − 2 × 3 = ....`
- A. 2
- B. 18
- C. 14
- D. 22

**Kunci: A**
**Pembahasan:**
- **A benar** — Bagi & kali dulu: `64 ÷ 8 = 8`, `2 × 3 = 6`, lalu `8 − 6 = 2`.
- **B salah** — Kiri-ke-kanan: `(64 ÷ 8 − 2) × 3 = 6 × 3 = 18`.
- **C salah** — Salah tanda: `8 + 6 = 14`.
- **D salah** — Sekadar umpan.
- **Konsep kunci:** Pada `64 ÷ 8 − 2 × 3`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Bagi & kali dulu: `64 ÷ 8 = 8`, `2 × 3 = 6`
  2. Kemudian, `8 − 6 = 2`

---

**38.** Hitunglah: `2 × 3³ = ....`
- A. 216
- B. 54
- C. 18
- D. 36

**Kunci: B**
**Pembahasan:**
- **A salah** — Pangkat berlaku ke seluruh: `(2 × 3)³ = 216`.
- **B benar** — Pangkat dulu: `3³ = 27`, lalu `2 × 27 = 54`.
- **C salah** — Salah pangkat: `3³` dianggap `9` → `2 × 9 = 18`.
- **D salah** — Bingung dengan `(2 × 3)² = 36`.
- **Konsep kunci:** Pangkat atau akar pada `2 × 3³` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `3³ = 27`
  2. Kemudian, `2 × 27 = 54`

---

**39.** Hitunglah: `(8 − 3) × 4 + (6 ÷ 2) = ....`
- A. 20
- B. 25
- C. 23
- D. 17

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `+ (6 ÷ 2)`: `5 × 4 = 20`.
- **B salah** — `(6 ÷ 2)` dianggap `5` → `5 × 5 = 25`.
- **C benar** — Kurung dulu: `8 − 3 = 5`, `6 ÷ 2 = 3`. Kali: `5 × 4 = 20`. Tambah: `20 + 3 = 23`.
- **D salah** — Salah tanda: `20 − 3 = 17`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(8 − 3) × 4 + (6 ÷ 2)` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `8 − 3 = 5`, `6 ÷ 2 = 3`
  2. Kali: `5 × 4 = 20`
  3. Tambah: `20 + 3 = 23`

---

**40.** Hitunglah: `120 ÷ 6 ÷ 5 = ....`
- A. 24
- B. 100
- C. 36
- D. 4

**Kunci: D**
**Pembahasan:**
- **A salah** — `120 ÷ 5 = 24`, salah pilih pembagi.
- **B salah** — Salah urut: `120 ÷ (6 ÷ 5) = 100`.
- **C salah** — Sekadar umpan.
- **D benar** — Kiri-ke-kanan: `120 ÷ 6 = 20`, lalu `20 ÷ 5 = 4`.
- **Konsep kunci:** Operasi yang sederajat pada `120 ÷ 6 ÷ 5` (sama-sama bagi) dikerjakan berurutan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kiri-ke-kanan: `120 ÷ 6 = 20`
  2. Kemudian, `20 ÷ 5 = 4`

---

**41.** Hitunglah: `7 + 8 ÷ 2 − 3 = ....`
- A. 8
- B. 11
- C. 10
- D. 6

**Kunci: A**
**Pembahasan:**
- **A benar** — Bagi dulu: `8 ÷ 2 = 4`, lalu kiri-ke-kanan: `7 + 4 − 3 = 8`.
- **B salah** — Anggap `8 ÷ 2 = 5`: `7 + 5 − 1 = 11`.
- **C salah** — Salah pengurang: `7 + 4 − 1 = 10`.
- **D salah** — Sekadar umpan.
- **Konsep kunci:** Pada `7 + 8 ÷ 2 − 3`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Bagi dulu: `8 ÷ 2 = 4`
  2. Kiri-ke-kanan: `7 + 4 − 3 = 11 − 3 = 8`

---

**42.** Hitunglah: `(9 × 4) ÷ 6 = ....`
- A. 12
- B. 6
- C. 9
- D. 4

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah bagi: `36 ÷ 3 = 12`.
- **B benar** — Kurung dulu: `9 × 4 = 36`, lalu `36 ÷ 6 = 6`.
- **C salah** — Sekadar umpan (`54 ÷ 6`).
- **D salah** — Umpan (`36 ÷ 9`).
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(9 × 4) ÷ 6` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `9 × 4 = 36`
  2. Kemudian, `36 ÷ 6 = 6`

---

**43.** Hitunglah: `50 − 2 × (3 + 4) = ....`
- A. 336
- B. 44
- C. 36
- D. 30

**Kunci: C**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan: `(50 − 2) × 7 = 336`.
- **B salah** — Lupa kurung & `+ 4`: `50 − 2 × 3 = 44`.
- **C benar** — Kurung dulu: `3 + 4 = 7`, kali: `2 × 7 = 14`, lalu `50 − 14 = 36`.
- **D salah** — Salah kurung: `50 − (2 × 10) = 30`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `50 − 2 × (3 + 4)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `3 + 4 = 7`, kali: `2 × 7 = 14`
  2. Kemudian, `50 − 14 = 36`

---

**44.** Hitunglah: `4 + 3 × 2² = ....`
- A. 49
- B. 28
- C. 12
- D. 16

**Kunci: D**
**Pembahasan:**
- **A salah** — Kurung khayalan: `(4 + 3)² = 49`.
- **B salah** — Kurung khayalan: `4 × (3 + 4) = 28`.
- **C salah** — Lupa pangkat: `4 + 3 × 2 + 2 = 12`.
- **D benar** — Pangkat dulu: `2² = 4`, kali: `3 × 4 = 12`, tambah: `4 + 12 = 16`.
- **Konsep kunci:** Pangkat atau akar pada `4 + 3 × 2²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `2² = 4`
  2. Kali: `3 × 4 = 12`
  3. Tambah: `4 + 12 = 16`

---

**45.** Hitunglah: `(11 − 4) × (3 + 2) = ....`
- A. 35
- B. 25
- C. 21
- D. 30

**Kunci: A**
**Pembahasan:**
- **A benar** — Dua kurung dulu: `11 − 4 = 7`, `3 + 2 = 5`, lalu `7 × 5 = 35`.
- **B salah** — Salah kurung pertama: `9 − 4 = 5` → `5 × 5 = 25`.
- **C salah** — Lupa kurung kedua: `7 × 3 = 21`.
- **D salah** — Sekadar umpan dekat.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(11 − 4) × (3 + 2)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `11 − 4 = 7`, `3 + 2 = 5`
  2. Kemudian, `7 × 5 = 35`

---

**46.** Hitunglah: `12 + 18 ÷ 3 − 4 = ....`
- A. 6
- B. 14
- C. 16
- D. 8

**Kunci: B**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan: `(12 + 18) ÷ 3 − 4 = 10 − 4 = 6`.
- **B benar** — Bagi dulu: `18 ÷ 3 = 6`, lalu kiri-ke-kanan: `12 + 6 − 4 = 14`.
- **C salah** — Salah pengurang: `12 + 6 − 2 = 16`.
- **D salah** — Sekadar umpan.
- **Konsep kunci:** Pada `12 + 18 ÷ 3 − 4`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Bagi dulu: `18 ÷ 3 = 6`
  2. Kiri-ke-kanan: `12 + 6 − 4 = 18 − 4 = 14`

---

**47.** Hitunglah: `100 ÷ (4 × 5) = ....`
- A. 25
- B. 125
- C. 5
- D. 1

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `× 5`: `100 ÷ 4 = 25`.
- **B salah** — Lupa kurung: `100 ÷ 4 × 5 = 125`.
- **C benar** — Kurung dulu: `4 × 5 = 20`, lalu `100 ÷ 20 = 5`.
- **D salah** — Salah kalikan kurung: `100 ÷ 100 = 1`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `100 ÷ (4 × 5)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `4 × 5 = 20`
  2. Kemudian, `100 ÷ 20 = 5`

---

**48.** Hitunglah: `3² + 4² = ....`
- A. 49
- B. 14
- C. 16
- D. 25

**Kunci: D**
**Pembahasan:**
- **A salah** — Distribusi pangkat keliru: `(3 + 4)² = 49`.
- **B salah** — Kuadrat dianggap kali dua: `6 + 8 = 14`.
- **C salah** — Lupa `+ 3²`: `4² = 16`.
- **D benar** — Pangkat masing-masing dulu: `3² = 9`, `4² = 16`, lalu `9 + 16 = 25`.
- **Konsep kunci:** Pangkat atau akar pada `3² + 4²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat masing-masing dulu: `3² = 9`, `4² = 16`
  2. Kemudian, `9 + 16 = 25`

---

**49.** Hitunglah: `(7 + 5) × 2 − 9 = ....`
- A. 15
- B. 12
- C. 23
- D. 8

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `7 + 5 = 12`, kali: `12 × 2 = 24`, lalu `24 − 9 = 15`.
- **B salah** — Berhenti di kurung: `7 + 5 = 12`.
- **C salah** — Salah pengurang: `24 − 1 = 23`.
- **D salah** — Lupa kurung: `7 + 5 × 2 − 9 = 7 + 10 − 9 = 8`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(7 + 5) × 2 − 9` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `7 + 5 = 12`, kali: `12 × 2 = 24`
  2. Kemudian, `24 − 9 = 15`

---

**50.** Hitunglah: `81 ÷ 9 + 3 × 2 = ....`
- A. 18
- B. 15
- C. 24
- D. 12

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah kali: `3 × 2` dianggap `9` → `9 + 9 = 18`.
- **B benar** — Bagi & kali dulu: `81 ÷ 9 = 9`, `3 × 2 = 6`, lalu `9 + 6 = 15`.
- **C salah** — Kiri-ke-kanan: `(81 ÷ 9 + 3) × 2 = 12 × 2 = 24`.
- **D salah** — Lupa `× 2`: `81 ÷ 9 + 3 = 12`.
- **Konsep kunci:** Pada `81 ÷ 9 + 3 × 2`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Bagi & kali dulu: `81 ÷ 9 = 9`, `3 × 2 = 6`
  2. Kemudian, `9 + 6 = 15`

---

## PROV · Soal 51-100 (Tingkat Provinsi, C3-C4)

*Dua tahap: kurung bersarang, pangkat, pecahan/desimal, dan soal cerita.*

**51.** Hitunglah: `(12 + 8) ÷ 4 × 3 − 5 = ....`
- A. 20
- B. 15
- C. 10
- D. 5

**Kunci: C**
**Pembahasan:**
- **A salah** — Berhenti di kurung: `12 + 8 = 20`.
- **B salah** — Lupa `− 5`: `20 ÷ 4 × 3 = 15`.
- **C benar** — Kurung dulu: `12 + 8 = 20`. Bagi & kali kiri-kanan: `20 ÷ 4 = 5`, `5 × 3 = 15`. Lalu `15 − 5 = 10`.
- **D salah** — Hanya kuriung lanjut bagi: `20 ÷ 4 = 5`, tidak meneruskan.
- **Konsep kunci:** Soal berlangkah banyak seperti `(12 + 8) ÷ 4 × 3 − 5` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `12 + 8 = 20`
  2. Bagi & kali kiri-kanan: `20 ÷ 4 = 5`, `5 × 3 = 15`
  3. Lalu: `15 − 5 = 10`

---

**52.** Hitunglah: `50 − [30 − (10 + 5)] = ....`
- A. 25
- B. 15
- C. 45
- D. 35

**Kunci: D**
**Pembahasan:**
- **A salah** — `(10 + 5)` dianggap `5` → siku `30 − 5 = 25`, lalu `50 − 25 = 25`.
- **B salah** — Berhenti di kurung siku: `30 − 15 = 15`.
- **C salah** — Salah pengurang: `50 − 5 = 45`.
- **D benar** — Paling dalam dulu: `10 + 5 = 15`. Kurung siku: `30 − 15 = 15`. Akhir: `50 − 15 = 35`.
- **Konsep kunci:** Pada kurung bersarang seperti `50 − [30 − (10 + 5)]`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Kurung paling dalam dulu: `10 + 5 = 15`
  2. Kurung siku: `30 − 15 = 15`
  3. Akhir: `50 − 15 = 35`

---

**53.** Hitunglah: `24 ÷ (6 ÷ 2) × 3 = ....`
- A. 24
- B. 6
- C. 12
- D. 18

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `6 ÷ 2 = 3`. Bagi & kali kiri-kanan: `24 ÷ 3 = 8`, `8 × 3 = 24`.
- **B salah** — Kiri-ke-kanan tanpa kurung: `24 ÷ 6 = 4`, `4 ÷ 2 = 2`, `2 × 3 = 6`.
- **C salah** — Lupa kurung dalam: `24 ÷ 6 × 3 = 4 × 3 = 12`.
- **D salah** — Salah bagi dalam kurung: `6 ÷ 2` dianggap `4` → `24 ÷ 4 = 6`, `6 × 3 = 18`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `24 ÷ (6 ÷ 2) × 3` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `6 ÷ 2 = 3`
  2. Bagi & kali kiri-kanan: `24 ÷ 3 = 8`, `8 × 3 = 24`

---

**54.** Hitunglah: `(5² − 3²) ÷ 4 = ....`
- A. 2
- B. 4
- C. 8
- D. 6

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah bagi: `16 ÷ 8 = 2`.
- **B benar** — Pangkat dulu dalam kurung: `5² = 25`, `3² = 9`. Kurung: `25 − 9 = 16`. Bagi: `16 ÷ 4 = 4`.
- **C salah** — Salah bagi: `16 ÷ 2 = 8`.
- **D salah** — Sekadar umpan dekat.
- **Konsep kunci:** Pangkat atau akar pada `(5² − 3²) ÷ 4` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu dalam kurung: `5² = 25`, `3² = 9`
  2. Kurung: `25 − 9 = 16`, lalu bagi: `16 ÷ 4 = 4`

---

**55.** Hitunglah: `2 × {4 + [3 × (5 − 2)]} = ....`
- A. 18
- B. 42
- C. 26
- D. 30

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `+ 4`: `2 × [3 × (5 − 2)] = 2 × 9 = 18`.
- **B salah** — Sekadar umpan besar dari salah urut kurung.
- **C benar** — Paling dalam: `5 − 2 = 3`. Siku: `3 × 3 = 9`. Kurawal: `4 + 9 = 13`. Akhir: `2 × 13 = 26`.
- **D salah** — Sekadar umpan dekat.
- **Konsep kunci:** Pada kurung bersarang seperti `2 × {4 + [3 × (5 − 2)]}`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `5 − 2 = 3`
  2. Siku: `3 × 3 = 9`
  3. Kurawal: `4 + 9 = 13`
  4. Akhir: `2 × 13 = 26`

---

**56.** Hitunglah: `1/2 × 8 + 1/4 × 4 = ....`
- A. 2
- B. 6
- C. 3
- D. 5

**Kunci: D**
**Pembahasan:**
- **A salah** — `8 × 1/4 = 2`, salah kalikan pecahan dengan bilangan yang keliru.
- **B salah** — Kurung khayalan: `(8 + 4) × 1/2 = 6`.
- **C salah** — Salah tanda untuk `1/4 × 4`: `4 − 1 = 3`.
- **D benar** — Kali dulu: `1/2 × 8 = 4`, `1/4 × 4 = 1`. Tambah: `4 + 1 = 5`.
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan atau desimal, seperti pada `1/2 × 8 + 1/4 × 4`.
- **Langkah Penyelesaian:**
  1. Kali dulu: `1/2 × 8 = 4`, `1/4 × 4 = 1`
  2. Tambah: `4 + 1 = 5`

---

**57.** Hitunglah: `(0,3 + 0,7) × 5 − 2 = ....`
- A. 3
- B. 5
- C. 1
- D. 7

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `0,3 + 0,7 = 1`. Kali: `1 × 5 = 5`. Kurang: `5 − 2 = 3`.
- **B salah** — Lupa `− 2`: `0,3 + 0,7 = 1`, `1 × 5 = 5`.
- **C salah** — Salah pengurang: `5 − 4 = 1`.
- **D salah** — Salah tanda: `5 + 2 = 7`.
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan atau desimal, seperti pada `(0,3 + 0,7) × 5 − 2`.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `0,3 + 0,7 = 1`
  2. Kali: `1 × 5 = 5`
  3. Kurang: `5 − 2 = 3`

---

**58.** Hitunglah: `60 + 20 ÷ 4 × 3 − 6 = ....`
- A. 54
- B. 69
- C. 78
- D. 66

**Kunci: B**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan: `(60 + 20) ÷ 4 × 3 − 6 = 20 × 3 − 6 = 54`.
- **B benar** — Bagi & kali (kiri-kanan): `20 ÷ 4 = 5`, `5 × 3 = 15`. Lalu kiri-kanan: `60 + 15 − 6 = 69`.
- **C salah** — Salah bagian tengah: `20 ÷ 4 × 3` dianggap `18` → `60 + 18 = 78`.
- **D salah** — Sekadar umpan dekat.
- **Konsep kunci:** Pada `60 + 20 ÷ 4 × 3 − 6`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Bagi & kali (kiri-kanan): `20 ÷ 4 = 5`, `5 × 3 = 15`
  2. Lalu kiri-kanan: `60 + 15 − 6 = 69`

---

**59.** Hitunglah: `(3 + 4)² − (3² + 4²) = ....`
- A. 0
- B. 12
- C. 24
- D. 49

**Kunci: C**
**Pembahasan:**
- **A salah** — Distribusi pangkat keliru: anggap `(a + b)² = a² + b²` → `25 − 25 = 0`.
- **B salah** — Sekadar umpan dekat.
- **C benar** — Kurung pertama: `(3 + 4)² = 49`. Kurung kedua: `3² + 4² = 9 + 16 = 25`. Lalu `49 − 25 = 24`.
- **D salah** — Lupa kurung kedua: `(3 + 4)² = 49`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(3 + 4)² − (3² + 4²)` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kurung pertama: `(3 + 4)² = 49`
  2. Kurung kedua: `3² + 4² = 9 + 16 = 25`
  3. Lalu: `49 − 25 = 24`

---

**60.** Ibu membeli 4 buku tulis seharga Rp5.000 dan 3 pulpen seharga Rp2.000. Total belanja Ibu adalah ....
- A. Rp18.000
- B. Rp21.000
- C. Rp24.000
- D. Rp26.000

**Kunci: D**
**Pembahasan:**
- **A salah** — Sekadar umpan.
- **B salah** — Anggap 3 buku: `3 × 5.000 + 3 × 2.000 = 21.000`.
- **C salah** — Lupa 1 pulpen: `4 × 5.000 + 2 × 2.000 = 24.000`.
- **D benar** — Kalimat: `4 × 5.000 + 3 × 2.000`. Kali dulu: `20.000 + 6.000 = 26.000`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `4 × 5.000 + 3 × 2.000`
  2. Kali dulu: `20.000 + 6.000 = 26.000`

---

**61.** Hitunglah: `72 − [30 + (4 × 3) − 6] = ....`
- A. 36
- B. 24
- C. 48
- D. 30

**Kunci: A**
**Pembahasan:**
- **A benar** — Paling dalam: `4 × 3 = 12`. Siku: `30 + 12 − 6 = 36`. Akhir: `72 − 36 = 36`.
- **B salah** — Distribusi tanda minus keliru: `72 − 30 − 12 − 6 = 24`.
- **C salah** — Lupa `− 6`: `72 − (30 + 12) = 30`? Bukan; umpan lain: `72 − 24 = 48`.
- **D salah** — Salah siku: `72 − (30 + 12) = 30` (lupa `− 6`).
- **Konsep kunci:** Pada kurung bersarang seperti `72 − [30 + (4 × 3) − 6]`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `4 × 3 = 12`
  2. Siku: `30 + 12 − 6 = 36`
  3. Akhir: `72 − 36 = 36`

---

**62.** Hitunglah: `8 × (5 − 2)² ÷ 9 = ....`
- A. 40
- B. 8
- C. 72
- D. 24

**Kunci: B**
**Pembahasan:**
- **A salah** — `8 × 5 = 40`, mengabaikan kurung, pangkat, dan bagi.
- **B benar** — Kurung dulu: `5 − 2 = 3`. Pangkat: `3² = 9`. Kali & bagi kiri-kanan: `8 × 9 = 72`, `72 ÷ 9 = 8`.
- **C salah** — Lupa `÷ 9`: `8 × 9 = 72`.
- **D salah** — Lupa pangkat: `8 × 3 = 24`.
- **Konsep kunci:** Pangkat atau akar pada `8 × (5 − 2)² ÷ 9` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `5 − 2 = 3`, pangkat: `3² = 9`
  2. Kali & bagi kiri-kanan: `8 × 9 = 72`, `72 ÷ 9 = 8`

---

**63.** Kakak membeli 5 bungkus permen. Tiap bungkus berisi 12 butir. Ia memberikan 8 butir kepada adiknya. Sisa permen kakak adalah ....
- A. 40
- B. 65
- C. 52
- D. 68

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah isi bungkus: `5 × 8 = 40` (menggunakan 8 butir tiap bungkus).
- **B salah** — Sekadar umpan dekat.
- **C benar** — Kalimat: `5 × 12 − 8`. Kali dulu: `60 − 8 = 52`.
- **D salah** — Salah tanda: `60 + 8 = 68`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `5 × 12 − 8`
  2. Kali dulu: `60 − 8 = 52`

---

**64.** Hitunglah: `(50 − 2³) ÷ (5 + 2) = ....`
- A. 8
- B. 42
- C. 7
- D. 6

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah pangkat dan salah bagi: `48 ÷ 6 = 8`.
- **B salah** — Lupa `÷ (5 + 2)`: `50 − 8 = 42`.
- **C salah** — Salah pangkat: `56 ÷ 8 = 7`.
- **D benar** — Pangkat dulu dalam kurung: `2³ = 8`. Kurung kiri: `50 − 8 = 42`. Kurung kanan: `5 + 2 = 7`. Bagi: `42 ÷ 7 = 6`.
- **Konsep kunci:** Pangkat atau akar pada `(50 − 2³) ÷ (5 + 2)` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `2³ = 8`
  2. Dua kurung: `50 − 8 = 42`, `5 + 2 = 7`
  3. Bagi: `42 ÷ 7 = 6`

---

**65.** Hitunglah: `15 − {2 × [3 + (10 ÷ 5)]} = ....`
- A. 5
- B. 9
- C. 11
- D. 3

**Kunci: A**
**Pembahasan:**
- **A benar** — Paling dalam: `10 ÷ 5 = 2`. Siku: `3 + 2 = 5`. Kurawal: `2 × 5 = 10`. Akhir: `15 − 10 = 5`.
- **B salah** — `[3 + (10 ÷ 5)]` dianggap `3` → `2 × 3 = 6`, `15 − 6 = 9`.
- **C salah** — Paling dalam `10 ÷ 5` dianggap `2` tapi siku `3 + 2` dianggap `2` → `2 × 2 = 4`, `15 − 4 = 11`.
- **D salah** — Kurawal dianggap `12`: `2 × 6 = 12`, `15 − 12 = 3`.
- **Konsep kunci:** Pada kurung bersarang seperti `15 − {2 × [3 + (10 ÷ 5)]}`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `10 ÷ 5 = 2`
  2. Siku: `3 + 2 = 5`
  3. Kurawal: `2 × 5 = 10`, lalu `15 − 10 = 5`

---

**66.** Hitunglah: `(14 + 6) × 3 ÷ 4 − 5 = ....`
- A. 15
- B. 10
- C. 5
- D. 20

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `− 5`: `20 × 3 ÷ 4 = 15`.
- **B benar** — Kurung dulu: `14 + 6 = 20`. Kali & bagi: `20 × 3 = 60`, `60 ÷ 4 = 15`. Kurang: `15 − 5 = 10`.
- **C salah** — Sekadar umpan.
- **D salah** — Berhenti di kurung: `14 + 6 = 20`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(14 + 6) × 3 ÷ 4 − 5` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `14 + 6 = 20`
  2. Kali & bagi: `20 × 3 = 60`, `60 ÷ 4 = 15`
  3. Kurang: `15 − 5 = 10`

---

**67.** Hitunglah: `2³ × 4 − 3² = ....`
- A. 8
- B. 32
- C. 23
- D. 18

**Kunci: C**
**Pembahasan:**
- **A salah** — Berhenti di `2³ = 8`.
- **B salah** — Lupa `− 3²`: `8 × 4 = 32`.
- **C benar** — Pangkat dulu: `2³ = 8`, `3² = 9`. Kali: `8 × 4 = 32`. Kurang: `32 − 9 = 23`.
- **D salah** — Salah pangkat: `2³` dianggap `6`, `3²` dianggap `6` → `24 − 6 = 18`.
- **Konsep kunci:** Pangkat atau akar pada `2³ × 4 − 3²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `2³ = 8`, `3² = 9`
  2. Kali: `8 × 4 = 32`
  3. Kurang: `32 − 9 = 23`

---

**68.** Hitunglah: `(36 + 12) ÷ (3² − 3) = ....`
- A. 6
- B. 12
- C. 16
- D. 8

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah pengurangan: `48 ÷ 8 = 6`.
- **B salah** — Salah pangkat: `48 ÷ 4 = 12`.
- **C salah** — Lupa `− 3`: `48 ÷ 3 = 16`.
- **D benar** — Kurung kiri: `36 + 12 = 48`. Pangkat dalam kanan: `3² = 9`. Kurung kanan: `9 − 3 = 6`. Bagi: `48 ÷ 6 = 8`.
- **Konsep kunci:** Pangkat atau akar pada `(36 + 12) ÷ (3² − 3)` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `36 + 12 = 48`
  2. Pangkat dan kurung kanan: `3² − 3 = 9 − 3 = 6`
  3. Bagi: `48 ÷ 6 = 8`

---

**69.** Rina menabung Rp3.000 setiap hari selama 2 minggu. Jika 1 minggu ada 7 hari, tabungan Rina seluruhnya adalah ....
- A. Rp42.000
- B. Rp21.000
- C. Rp60.000
- D. Rp6.000

**Kunci: A**
**Pembahasan:**
- **A benar** — Kalimat: `3.000 × (2 × 7)`. Kurung dulu: `3.000 × 14 = 42.000`.
- **B salah** — Anggap 1 minggu saja: `3.000 × 7 = 21.000`.
- **C salah** — Salah jumlah hari: `3.000 × 20 = 60.000`.
- **D salah** — Anggap 2 hari saja: `3.000 × 2 = 6.000`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `3.000 × (2 × 7)`
  2. Kurung dulu: `3.000 × 14 = 42.000`

---

**70.** Hitunglah: `4 + 3 × 2² − 8 ÷ 2 = ....`
- A. 22
- B. 12
- C. 16
- D. 28

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah pangkat: `3 × 2²` dianggap `18` → `4 + 18 = 22`.
- **B benar** — Pangkat: `2² = 4`. Kali & bagi: `3 × 4 = 12`, `8 ÷ 2 = 4`. Lalu kiri-kanan: `4 + 12 − 4 = 12`.
- **C salah** — Lupa `− 8 ÷ 2`: `4 + 12 = 16`.
- **D salah** — Kurung khayalan: `(4 + 3) × 4 = 28`.
- **Konsep kunci:** Pangkat atau akar pada `4 + 3 × 2² − 8 ÷ 2` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat: `2² = 4`
  2. Kali & bagi: `3 × 4 = 12`, `8 ÷ 2 = 4`
  3. Kiri-kanan: `4 + 12 − 4 = 12`

---

**71.** Hitunglah: `{(5 + 3) × 2 − 6} ÷ 5 = ....`
- A. 4
- B. 6
- C. 2
- D. 8

**Kunci: C**
**Pembahasan:**
- **A salah** — Sekadar umpan dekat.
- **B salah** — Sekadar umpan (`30 ÷ 5`).
- **C benar** — Paling dalam: `5 + 3 = 8`. Dalam kurawal: `8 × 2 = 16`, `16 − 6 = 10`. Akhir: `10 ÷ 5 = 2`.
- **D salah** — Lupa `− 6`: `(5 + 3) × 2 ÷ 2 = 8`.
- **Konsep kunci:** Pada kurung bersarang seperti `{(5 + 3) × 2 − 6} ÷ 5`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `5 + 3 = 8`
  2. Dalam kurawal: `8 × 2 = 16`, `16 − 6 = 10`
  3. Akhir: `10 ÷ 5 = 2`

---

**72.** Hitunglah: `(0,5 + 0,5) × 10² ÷ 10 = ....`
- A. 100
- B. 50
- C. 5
- D. 10

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `÷ 10`: `1 × 100 = 100`.
- **B salah** — `0,5 × 100 = 50`, salah mengambil salah satu bilangan.
- **C salah** — `0,5 × 10 = 5`, salah salah satu bilangan.
- **D benar** — Kurung dulu: `0,5 + 0,5 = 1`. Pangkat: `10² = 100`. Kali & bagi kiri-kanan: `1 × 100 = 100`, `100 ÷ 10 = 10`.
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan atau desimal, seperti pada `(0,5 + 0,5) × 10² ÷ 10`.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `0,5 + 0,5 = 1`
  2. Pangkat: `10² = 100`
  3. Kali & bagi kiri-kanan: `1 × 100 = 100`, `100 ÷ 10 = 10`

---

**73.** Hitunglah: `120 ÷ 15 + 9 × (5 − 3) = ....`
- A. 26
- B. 30
- C. 34
- D. 8

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `5 − 3 = 2`. Bagi & kali: `120 ÷ 15 = 8`, `9 × 2 = 18`. Tambah: `8 + 18 = 26`.
- **B salah** — Salah pengelompokan: `120 ÷ (15 − 9) = 20`? Bukan; umpan lain: `120 ÷ 4 = 30`.
- **C salah** — Kiri-ke-kanan: `(120 ÷ 15 + 9) × 2 = 17 × 2 = 34`.
- **D salah** — Lupa bagian kedua: `120 ÷ 15 = 8`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `120 ÷ 15 + 9 × (5 − 3)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `5 − 3 = 2`
  2. Bagi & kali: `120 ÷ 15 = 8`, `9 × 2 = 18`
  3. Tambah: `8 + 18 = 26`

---

**74.** Persegi panjang memiliki panjang `(3x + 2)` cm dan lebar 5 cm. Jika `x = 4`, luas persegi panjang adalah ....
- A. 90 cm²
- B. 70 cm²
- C. 85 cm²
- D. 50 cm²

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah distribusi: `3 × (4 + 2) = 18`, lalu `18 × 5 = 90`.
- **B benar** — Substitusi & kurung: `3 × 4 + 2 = 14`. Luas: `14 × 5 = 70`.
- **C salah** — Salah substitusi: memakai `x = 5` → `(3 × 5 + 2) × 5 = 85`.
- **D salah** — Salah tanda: `(3 × 4 − 2) × 5 = 50`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Substitusi & kurung: `3 × 4 + 2 = 14`
  2. Luas: `14 × 5 = 70`

---

**75.** Hitunglah: `30 − 6 × (2² − 3) = ....`
- A. 18
- B. 27
- C. 24
- D. 6

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah pangkat: `2²` dianggap `2` → `6 × 2 = 12`, `30 − 12 = 18`.
- **B salah** — Lupa `× 6`: `30 − (4 − 3) = 29`? Bukan; umpan lain: `30 − 3 = 27`.
- **C benar** — Pangkat dalam kurung: `2² = 4`. Kurung: `4 − 3 = 1`. Kali: `6 × 1 = 6`. Kurang: `30 − 6 = 24`.
- **D salah** — Berhenti di `6 × (4 − 3) = 6`.
- **Konsep kunci:** Pangkat atau akar pada `30 − 6 × (2² − 3)` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dalam kurung: `2² = 4`
  2. Kurung: `4 − 3 = 1`, kali: `6 × 1 = 6`
  3. Kurang: `30 − 6 = 24`

---

**76.** Hitunglah: `(6 × 4 + 3) ÷ (5 − 2)² = ....`
- A. 9
- B. 6
- C. 27
- D. 3

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa pangkat: `27 ÷ (5 − 2) = 9`.
- **B salah** — Sekadar umpan.
- **C salah** — Lupa bagi: `(6 × 4 + 3) = 27`.
- **D benar** — Kurung kiri: `6 × 4 + 3 = 27`. Kurung kanan: `5 − 2 = 3`, pangkat: `3² = 9`. Bagi: `27 ÷ 9 = 3`.
- **Konsep kunci:** Pangkat atau akar pada `(6 × 4 + 3) ÷ (5 − 2)²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `6 × 4 + 3 = 27`
  2. Kurung kanan: `5 − 2 = 3`, pangkat: `3² = 9`
  3. Bagi: `27 ÷ 9 = 3`

---

**77.** Hitunglah: `[(20 − 8) ÷ 3] × (2 + 1)² = ....`
- A. 36
- B. 12
- C. 16
- D. 27

**Kunci: A**
**Pembahasan:**
- **A benar** — Siku dulu: `20 − 8 = 12`, `12 ÷ 3 = 4`. Kurung pangkat: `2 + 1 = 3`, `3² = 9`. Akhir: `4 × 9 = 36`.
- **B salah** — Lupa pangkat: `4 × 3 = 12`.
- **C salah** — Salah `(2 + 1)²`: dianggap `4` → `4 × 4 = 16`.
- **D salah** — Sekadar umpan dekat.
- **Konsep kunci:** Pada kurung bersarang seperti `[(20 − 8) ÷ 3] × (2 + 1)²`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Siku dulu: `20 − 8 = 12`, `12 ÷ 3 = 4`
  2. Kurung pangkat: `2 + 1 = 3`, `3² = 9`
  3. Akhir: `4 × 9 = 36`

---

**78.** Hitunglah: `2/5 × (10 + 5) − 3 = ....`
- A. 6
- B. 3
- C. 4
- D. 1

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `− 3`: `2/5 × 15 = 6`.
- **B benar** — Kurung dulu: `10 + 5 = 15`. Kali: `2/5 × 15 = 6`. Kurang: `6 − 3 = 3`.
- **C salah** — Sekadar umpan dekat.
- **D salah** — Mengabaikan kurung: `2/5 × 10 − 3 = 4 − 3 = 1`.
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan atau desimal, seperti pada `2/5 × (10 + 5) − 3`.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `10 + 5 = 15`
  2. Kali: `2/5 × 15 = 6`
  3. Kurang: `6 − 3 = 3`

---

**79.** Hitunglah: `(9 + 6) ÷ 5 × (7 − 2) = ....`
- A. 5
- B. 3
- C. 15
- D. 45

**Kunci: C**
**Pembahasan:**
- **A salah** — Sekadar umpan dekat.
- **B salah** — Lupa `× (7 − 2)`: `(9 + 6) ÷ 5 = 3`.
- **C benar** — Dua kurung: `9 + 6 = 15`, `7 − 2 = 5`. Bagi & kali kiri-kanan: `15 ÷ 5 = 3`, `3 × 5 = 15`.
- **D salah** — Lupa bagi: `15 × 3 = 45`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(9 + 6) ÷ 5 × (7 − 2)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung: `9 + 6 = 15`, `7 − 2 = 5`
  2. Bagi & kali kiri-kanan: `15 ÷ 5 = 3`, `3 × 5 = 15`

---

**80.** Sebuah kotak berisi 6 baris dan 7 kolom kelereng. Sebanyak 9 kelereng diambil, lalu 5 kelereng ditambahkan. Jumlah kelereng di kotak sekarang adalah ....
- A. 42
- B. 33
- C. 47
- D. 38

**Kunci: D**
**Pembahasan:**
- **A salah** — Mengabaikan ambil dan tambah: `6 × 7 = 42`.
- **B salah** — Lupa `+ 5`: `6 × 7 − 9 = 33`.
- **C salah** — Salah tanda: `6 × 7 + 9 − 4 = 47`.
- **D benar** — Kalimat: `6 × 7 − 9 + 5`. Kali dulu: `42 − 9 + 5 = 38`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `6 × 7 − 9 + 5`
  2. Kali dulu: `42 − 9 + 5 = 33 + 5 = 38`

---

**81.** Hitunglah: `100 − {2² × [3 + (12 ÷ 4)]} = ....`
- A. 76
- B. 88
- C. 64
- D. 96

**Kunci: A**
**Pembahasan:**
- **A benar** — Paling dalam: `12 ÷ 4 = 3`. Siku: `3 + 3 = 6`. Pangkat: `2² = 4`. Kurawal: `4 × 6 = 24`. Akhir: `100 − 24 = 76`.
- **B salah** — Lupa `+ 3` di dalam siku: `2² × (12 ÷ 4) = 4 × 3 = 12`, `100 − 12 = 88`.
- **C salah** — Sekadar umpan (kurawal dianggap `36`).
- **D salah** — Lupa isi kurawal: `100 − 4 = 96`.
- **Konsep kunci:** Pada kurung bersarang seperti `100 − {2² × [3 + (12 ÷ 4)]}`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `12 ÷ 4 = 3`
  2. Siku: `3 + 3 = 6`
  3. Pangkat & kurawal: `2² × 6 = 24`
  4. Akhir: `100 − 24 = 76`

---

**82.** Hitunglah: `(2³ + 3²) × (3² − 2²) = ....`
- A. 68
- B. 85
- C. 75
- D. 45

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah pengurangan pangkat: `17 × 4 = 68`.
- **B benar** — Pangkat masing-masing: `2³ = 8`, `3² = 9`, `3² = 9`, `2² = 4`. Kurung: `8 + 9 = 17`, `9 − 4 = 5`. Kali: `17 × 5 = 85`.
- **C salah** — Salah penjumlahan pangkat: `(8 + 7) × 5 = 75`.
- **D salah** — Salah pangkat: `(8 + 1) × 5 = 9 × 5 = 45`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(2³ + 3²) × (3² − 2²)` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Pangkat masing-masing: `2³ = 8`, `3² = 9`, `3² = 9`, `2² = 4`
  2. Kurung: `8 + 9 = 17`, `9 − 4 = 5`
  3. Kali: `17 × 5 = 85`

---

**83.** Hitunglah: `√(64 + 36) × 2 − 5 = ....`
- A. 19
- B. 23
- C. 15
- D. 20

**Kunci: C**
**Pembahasan:**
- **A salah** — Salah akar: `√100` dianggap `12` → `12 × 2 − 5 = 19`.
- **B salah** — Akar dibongkar: `√64 + √36 = 14` → `14 × 2 − 5 = 23`.
- **C benar** — Dalam akar dulu (= kurung): `64 + 36 = 100`. Akar: `√100 = 10`. Kali: `10 × 2 = 20`. Kurang: `20 − 5 = 15`.
- **D salah** — Lupa `− 5`: `10 × 2 = 20`.
- **Konsep kunci:** Pangkat atau akar pada `√(64 + 36) × 2 − 5` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Dalam akar dulu (= kurung): `64 + 36 = 100`
  2. Akar: `√100 = 10`, lalu kali: `10 × 2 = 20`
  3. Kurang: `20 − 5 = 15`

---

**84.** Hitunglah: `{60 − [5² + (8 ÷ 2)²]} × 2 = ....`
- A. 19
- B. 32
- C. 44
- D. 38

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `× 2`: `60 − [25 + 16] = 19`.
- **B salah** — Sekadar umpan.
- **C salah** — Mengabaikan `5²`: `60 − (8 ÷ 2)² = 60 − 16 = 44`.
- **D benar** — Paling dalam: `8 ÷ 2 = 4`, pangkat: `4² = 16`. Pangkat kiri: `5² = 25`. Siku: `25 + 16 = 41`. Kurawal: `60 − 41 = 19`. Kali: `19 × 2 = 38`.
- **Konsep kunci:** Pada kurung bersarang seperti `{60 − [5² + (8 ÷ 2)²]} × 2`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `8 ÷ 2 = 4`, pangkat: `4² = 16`
  2. Pangkat kiri: `5² = 25`
  3. Siku: `25 + 16 = 41`, kurawal: `60 − 41 = 19`
  4. Kali: `19 × 2 = 38`

---

**85.** Hitunglah: `(1/3 + 2/3) × 6² ÷ 6 = ....`
- A. 6
- B. 3
- C. 12
- D. 36

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `1/3 + 2/3 = 1`. Pangkat: `6² = 36`. Kali & bagi kiri-kanan: `1 × 36 = 36`, `36 ÷ 6 = 6`.
- **B salah** — Salah bagi: `36 ÷ 12 = 3`.
- **C salah** — Salah bagi: `36 ÷ 3 = 12`.
- **D salah** — Lupa `÷ 6`: `1 × 36 = 36`.
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan atau desimal, seperti pada `(1/3 + 2/3) × 6² ÷ 6`.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `1/3 + 2/3 = 1`
  2. Pangkat: `6² = 36`
  3. Kali & bagi kiri-kanan: `1 × 36 = 36`, `36 ÷ 6 = 6`

---

**86.** Ibu membeli 3 potong baju seharga Rp45.000 per potong dan mendapat potongan harga Rp10.000. Uang yang harus dibayar Ibu adalah ....
- A. Rp135.000
- B. Rp125.000
- C. Rp115.000
- D. Rp155.000

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa potongan harga: `3 × 45.000 = 135.000`.
- **B benar** — Kalimat: `3 × 45.000 − 10.000`. Kali dulu: `135.000 − 10.000 = 125.000`.
- **C salah** — Salah potongan: `135.000 − 20.000 = 115.000`.
- **D salah** — Salah tanda: `135.000 + 20.000 = 155.000`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `3 × 45.000 − 10.000`
  2. Kali dulu: `135.000 − 10.000 = 125.000`

---

**87.** Hitunglah: `3 × [2 + (5² − 11) × 2] = ....`
- A. 30
- B. 42
- C. 90
- D. 60

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `× 3`: `[2 + (5² − 11) × 2] = 30`.
- **B salah** — Salah pangkat: `5² − 11` dianggap `12` → `3 × [2 + 12] = 42`.
- **C benar** — Paling dalam: pangkat `5² = 25`, kurung `25 − 11 = 14`. Siku: `14 × 2 = 28`, `2 + 28 = 30`. Akhir: `3 × 30 = 90`.
- **D salah** — Sekadar umpan dekat.
- **Konsep kunci:** Pada kurung bersarang seperti `3 × [2 + (5² − 11) × 2]`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: pangkat `5² = 25`, kurung `25 − 11 = 14`
  2. Siku: `14 × 2 = 28`, `2 + 28 = 30`
  3. Akhir: `3 × 30 = 90`

---

**88.** Hitunglah: `√100 + 2³ − 3 × 2 = ....`
- A. 16
- B. 24
- C. 18
- D. 12

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah kali: `3 × 2` dianggap `2` → `10 + 8 − 2 = 16`.
- **B salah** — Sekadar umpan.
- **C salah** — Lupa `− 3 × 2`: `√100 + 2³ = 10 + 8 = 18`.
- **D benar** — Akar & pangkat dulu: `√100 = 10`, `2³ = 8`. Kali: `3 × 2 = 6`. Kiri-kanan: `10 + 8 − 6 = 12`.
- **Konsep kunci:** Pangkat atau akar pada `√100 + 2³ − 3 × 2` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Akar & pangkat dulu: `√100 = 10`, `2³ = 8`
  2. Kali: `3 × 2 = 6`
  3. Kiri-kanan: `10 + 8 − 6 = 12`

---

**89.** Hitunglah: `{200 ÷ [8 × (3 + 2)] + 5} × 3 = ....`
- A. 30
- B. 75
- C. 60
- D. 40

**Kunci: A**
**Pembahasan:**
- **A benar** — Paling dalam: `3 + 2 = 5`. Siku: `8 × 5 = 40`. Kurawal: `200 ÷ 40 = 5`, `5 + 5 = 10`. Akhir: `10 × 3 = 30`.
- **B salah** — Lupa kurung dalam dan `+ 5`: `200 ÷ 8 × 3 = 25 × 3 = 75`.
- **C salah** — Sekadar umpan (`20 × 3`).
- **D salah** — Salah siku: `200 ÷ 5 = 40`.
- **Konsep kunci:** Pada kurung bersarang seperti `{200 ÷ [8 × (3 + 2)] + 5} × 3`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `3 + 2 = 5`
  2. Siku: `8 × 5 = 40`
  3. Kurawal: `200 ÷ 40 = 5`, `5 + 5 = 10`
  4. Akhir: `10 × 3 = 30`

---

**90.** Pak Edi menuang 6 ember berisi 5 liter air, lalu sepertiganya tumpah. Kemudian ia menambah 4 ember berisi 2 liter. Volume air sekarang adalah ....
- A. 14 liter
- B. 18 liter
- C. 30 liter
- D. 38 liter

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `× 2` pada `4 × 2`: `(6 × 5) ÷ 3 + 4 = 14`.
- **B benar** — Kalimat: `(6 × 5) ÷ 3 + 4 × 2`. Kurung & kali: `30 ÷ 3 + 8 = 10 + 8 = 18`.
- **C salah** — `6 × 5 = 30`, berhenti di situ.
- **D salah** — Lupa bagi sepertiga: `30 + 8 = 38`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `(6 × 5) ÷ 3 + 4 × 2`
  2. Kurung & kali: `30 ÷ 3 + 8 = 10 + 8 = 18`

---

**91.** Hitunglah: `1,5 × (4² − 8) + 2³ ÷ 2 = ....`
- A. 20
- B. 22
- C. 16
- D. 12

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `÷ 2`: `1,5 × 8 + 8 = 12 + 8 = 20`.
- **B salah** — Salah kali: `1,5 × (4² − 8)` dianggap `18` → `18 + 4 = 22`.
- **C benar** — Pangkat: `4² = 16`, `2³ = 8`. Kurung: `16 − 8 = 8`. Kali & bagi: `1,5 × 8 = 12`, `8 ÷ 2 = 4`. Tambah: `12 + 4 = 16`.
- **D salah** — Lupa `2³ ÷ 2`: `1,5 × 8 = 12`.
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan atau desimal, seperti pada `1,5 × (4² − 8) + 2³ ÷ 2`.
- **Langkah Penyelesaian:**
  1. Pangkat: `4² = 16`, `2³ = 8`, lalu kurung: `16 − 8 = 8`
  2. Kali & bagi: `1,5 × 8 = 12`, `8 ÷ 2 = 4`
  3. Tambah: `12 + 4 = 16`

---

**92.** Hitunglah: `[2 × (3 + 2)² − 40] ÷ 5 = ....`
- A. 10
- B. 50
- C. 25
- D. 2

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `÷ 5`: `2 × 25 − 40 = 10`.
- **B salah** — Lupa `− 40` dan `÷ 5`: `2 × 25 = 50`.
- **C salah** — Lupa `× 2`, `− 40`, dan `÷ 5`: `(3 + 2)² = 25`.
- **D benar** — Dalam kurung biasa: `3 + 2 = 5`. Pangkat: `5² = 25`. Kali: `2 × 25 = 50`. Kurang: `50 − 40 = 10`. Bagi: `10 ÷ 5 = 2`.
- **Konsep kunci:** Pada kurung bersarang seperti `[2 × (3 + 2)² − 40] ÷ 5`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Dalam kurung biasa: `3 + 2 = 5`, pangkat: `5² = 25`
  2. Kali: `2 × 25 = 50`, kurang: `50 − 40 = 10`
  3. Bagi: `10 ÷ 5 = 2`

---

**93.** Hitunglah: `5 + 3 × {[12 ÷ (2 + 2)] + (4² − 10)} = ....`
- A. 32
- B. 27
- C. 14
- D. 23

**Kunci: A**
**Pembahasan:**
- **A benar** — Paling dalam: `2 + 2 = 4`, `4² = 16`. Siku: `12 ÷ 4 = 3`. Kurung kanan: `16 − 10 = 6`. Kurawal: `3 + 6 = 9`. Kali: `3 × 9 = 27`. Tambah: `5 + 27 = 32`.
- **B salah** — Lupa `+ 5`: `3 × 9 = 27`.
- **C salah** — Sekadar umpan (`5 + 9`).
- **D salah** — Sekadar umpan dekat.
- **Konsep kunci:** Pada kurung bersarang seperti `5 + 3 × {[12 ÷ (2 + 2)] + (4² − 10)}`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `2 + 2 = 4`, `4² = 16`
  2. Siku: `12 ÷ 4 = 3`
  3. Kurung kanan: `16 − 10 = 6`
  4. Kurawal: `3 + 6 = 9`, kali: `3 × 9 = 27`, tambah: `5 + 27 = 32`

---

**94.** Hitunglah: `(2 + 3)² + (4 − 1)² − 5 × 2 = ....`
- A. 34
- B. 24
- C. 30
- D. 20

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `− 5 × 2`: `25 + 9 = 34`.
- **B benar** — Dua kurung: `(2 + 3)² = 25`, `(4 − 1)² = 9`. Kali: `5 × 2 = 10`. Kiri-kanan: `25 + 9 − 10 = 24`.
- **C salah** — Sekadar umpan.
- **D salah** — Sekadar umpan dekat.
- **Konsep kunci:** Soal berlangkah banyak seperti `(2 + 3)² + (4 − 1)² − 5 × 2` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Dua kurung: `(2 + 3)² = 25`, `(4 − 1)² = 9`
  2. Kali: `5 × 2 = 10`
  3. Kiri-kanan: `25 + 9 − 10 = 24`

---

**95.** Di toko, 1 buku tulis harganya Rp4.000 dan 3 pulpen seharga Rp2.500 per pulpen. Tiap paket mendapat diskon Rp1.000. Harga 2 paket adalah ....
- A. Rp22.000
- B. Rp20.000
- C. Rp21.000
- D. Rp24.000

**Kunci: C**
**Pembahasan:**
- **A salah** — Diskon dihitung sekali untuk 2 paket: `(4.000 + 7.500) × 2 − 1.000 = 22.000`.
- **B salah** — Salah diskon: `(4.000 + 7.500 − 1.500) × 2 = 20.000`.
- **C benar** — Harga per paket: `4.000 + 3 × 2.500 − 1.000 = 4.000 + 7.500 − 1.000 = 10.500`. Total: `10.500 × 2 = 21.000`.
- **D salah** — Sekadar umpan besar.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Harga per paket: `4.000 + 3 × 2.500 − 1.000 = 10.500`
  2. Total: `10.500 × 2 = 21.000`

---

**96.** Hitunglah: `√(9² + 12²) ÷ 3 + 4² = ....`
- A. 29
- B. 31
- C. 15
- D. 21

**Kunci: D**
**Pembahasan:**
- **A salah** — Salah pangkat: `4²` dianggap `24` → `5 + 24 = 29`.
- **B salah** — Lupa `÷ 3`: `√225 + 16 = 15 + 16 = 31`.
- **C salah** — Lupa `+ 4²`: `√225 ÷ 3 = 5`? Bukan; umpan lain `15` dari `√225`.
- **D benar** — Dalam akar dulu: `9² = 81`, `12² = 144`, `81 + 144 = 225`. Akar: `√225 = 15`. Bagi: `15 ÷ 3 = 5`. Pangkat: `4² = 16`. Tambah: `5 + 16 = 21`.
- **Konsep kunci:** Pangkat atau akar pada `√(9² + 12²) ÷ 3 + 4²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Dalam akar dulu: `9² = 81`, `12² = 144`, `81 + 144 = 225`
  2. Akar: `√225 = 15`
  3. Bagi: `15 ÷ 3 = 5`
  4. Pangkat: `4² = 16`, lalu `5 + 16 = 21`

---

**97.** Hitunglah: `{[(2 + 3)² − 3²] × 2} ÷ (10 − 6) = ....`
- A. 8
- B. 16
- C. 4
- D. 32

**Kunci: A**
**Pembahasan:**
- **A benar** — Paling dalam: `2 + 3 = 5`. Pangkat: `5² = 25`, `3² = 9`. Siku: `25 − 9 = 16`. Kurawal: `16 × 2 = 32`. Kurung kanan: `10 − 6 = 4`. Akhir: `32 ÷ 4 = 8`.
- **B salah** — Lupa `÷ (10 − 6)`: `16 × 2 = 32`? Bukan; umpan lain `16` dari siku.
- **C salah** — Salah bagi: `32 ÷ 8 = 4`.
- **D salah** — Lupa `÷ (10 − 6)`: `16 × 2 = 32`.
- **Konsep kunci:** Pada kurung bersarang seperti `{[(2 + 3)² − 3²] × 2} ÷ (10 − 6)`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `2 + 3 = 5`
  2. Pangkat: `5² = 25`, `3² = 9`
  3. Siku: `25 − 9 = 16`, kurawal: `16 × 2 = 32`
  4. Kurung kanan: `10 − 6 = 4`, akhir: `32 ÷ 4 = 8`

---

**98.** Luas trapesium `L = 1/2 × (a + b) × t`. Jika `a = 8`, `b = 4`, dan `t = 6`, nilai `L` adalah ....
- A. 12
- B. 36
- C. 72
- D. 24

**Kunci: B**
**Pembahasan:**
- **A salah** — Berhenti di `a + b = 12`.
- **B benar** — Kurung dulu: `a + b = 8 + 4 = 12`. Kali kiri-kanan: `1/2 × 12 = 6`, `6 × 6 = 36`.
- **C salah** — Lupa `1/2`: `12 × 6 = 72`.
- **D salah** — Lupa `b`: `1/2 × 8 × 6 = 24`.
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan atau desimal, seperti pada `L = 1/2 × (a + b) × t`.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `a + b = 8 + 4 = 12`
  2. Kali kiri-kanan: `1/2 × 12 = 6`, `6 × 6 = 36`

---

**99.** Hitunglah: `(12² − 4 × 6) ÷ (6² ÷ 9) = ....`
- A. 120
- B. 40
- C. 30
- D. 60

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa bagi kurung kanan: `144 − 24 = 120`.
- **B salah** — Salah kurung kanan: `6² ÷ 9` dianggap `3` → `120 ÷ 3 = 40`.
- **C benar** — Kurung kiri: pangkat `12² = 144`, kali `4 × 6 = 24`, kurang `144 − 24 = 120`. Kurung kanan: `6² = 36`, `36 ÷ 9 = 4`. Bagi: `120 ÷ 4 = 30`.
- **D salah** — Salah kurung kanan: `36 ÷ 18 = 2` → `120 ÷ 2 = 60`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(12² − 4 × 6) ÷ (6² ÷ 9)` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kurung kiri: pangkat `12² = 144`, kali `4 × 6 = 24`, kurang `144 − 24 = 120`
  2. Kurung kanan: `6² = 36`, `36 ÷ 9 = 4`
  3. Bagi: `120 ÷ 4 = 30`

---

**100.** Taman berbentuk persegi panjang dengan panjang `(4 × 3 + 3)` m dan lebar `(9 − 5 + 1)` m. Di dalam taman ada kolam persegi seluas `3²` m². Luas taman di luar kolam adalah ....
- A. 15 m²
- B. 75 m²
- C. 69 m²
- D. 66 m²

**Kunci: D**
**Pembahasan:**
- **A salah** — Berhenti di panjang: `4 × 3 + 3 = 15`.
- **B salah** — Lupa kurangi kolam: `15 × 5 = 75`.
- **C salah** — Salah luas kolam: `3²` dianggap `6` → `75 − 6 = 69`.
- **D benar** — Panjang: `4 × 3 + 3 = 15`. Lebar: `9 − 5 + 1 = 5`. Luas taman: `15 × 5 = 75`. Kolam: `3² = 9`. Luas di luar kolam: `75 − 9 = 66`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Panjang: `4 × 3 + 3 = 15`
  2. Lebar: `9 − 5 + 1 = 5`
  3. Luas taman: `15 × 5 = 75`
  4. Kolam: `3² = 9`, luas di luar kolam: `75 − 9 = 66`

---

## BAGIAN III · KUNCI & DISTRIBUSI

### Tabel Kunci 100 Soal

| Soal 1-10 | Soal 11-20 | Soal 21-30 | Soal 31-40 | Soal 41-50 |
|:---------:|:----------:|:----------:|:----------:|:----------:|
| 1. A  | 11. C | 21. A | 31. C | 41. A |
| 2. B  | 12. D | 22. B | 32. D | 42. B |
| 3. C  | 13. A | 23. C | 33. A | 43. C |
| 4. D  | 14. B | 24. D | 34. B | 44. D |
| 5. A  | 15. C | 25. A | 35. C | 45. A |
| 6. B  | 16. D | 26. B | 36. D | 46. B |
| 7. C  | 17. A | 27. C | 37. A | 47. C |
| 8. D  | 18. B | 28. D | 38. B | 48. D |
| 9. A  | 19. C | 29. A | 39. C | 49. A |
| 10. B | 20. D | 30. B | 40. D | 50. B |

| Soal 51-60 | Soal 61-70 | Soal 71-80 | Soal 81-90 | Soal 91-100 |
|:----------:|:----------:|:----------:|:----------:|:------------:|
| 51. C | 61. A | 71. C | 81. A | 91. C  |
| 52. D | 62. B | 72. D | 82. B | 92. D  |
| 53. A | 63. C | 73. A | 83. C | 93. A  |
| 54. B | 64. D | 74. B | 84. D | 94. B  |
| 55. C | 65. A | 75. C | 85. A | 95. C  |
| 56. D | 66. B | 76. D | 86. B | 96. D  |
| 57. A | 67. C | 77. A | 87. C | 97. A  |
| 58. B | 68. D | 78. B | 88. D | 98. B  |
| 59. C | 69. A | 79. C | 89. A | 99. C  |
| 60. D | 70. B | 80. D | 90. B | 100. D |

### Distribusi Kunci

**A: 25 · B: 25 · C: 25 · D: 25**

Distribusi tepat pada keseimbangan ideal 25/25/25/25. Tidak ada dominasi satu huruf; semua opsi terpakai sama rata. Posisi kunci sengaja **diacak** antar tingkat (Kab/Prov) untuk menghindari pola yang bisa ditebak siswa.

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
| Kali/bagi sebelum tambah/kurang (1 operasi) | 1, 2, 6, 7, 9, 10, 13, 17, 19, 20, 25, 33, 37, 41, 46, 50, 58 |
| Kurung tunggal | 3, 4, 8, 11, 14, 16, 22, 26, 28, 31, 34, 43, 45, 47, 49, 53, 73 |
| Pangkat / akar | 5, 15, 21, 24, 27, 32, 36, 38, 44, 48, 54, 62, 64, 67, 68, 75, 76, 83, 88, 96 |
| Sederajat kiri-kanan (× ÷ atau + −) | 12, 18, 29, 35, 40, 42, 70, 79 |
| Kurung bersarang | 52, 55, 61, 65, 71, 77, 81, 84, 87, 89, 92, 93, 97 |
| Pecahan / desimal | 56, 57, 72, 78, 85, 91, 98 |
| Soal cerita | 60, 63, 69, 74, 80, 86, 90, 95, 100 |
| Multi-operasi panjang (3+ langkah) | 23, 30, 39, 51, 58, 59, 66, 70, 82, 94, 99 |

---

*Selesai. Sub-bab 01b - Urutan Operasi (Mudah-Sedang).*