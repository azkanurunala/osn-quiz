# OSN/KSN SD — MTK · Sub-Bab 01b: Urutan Operasi (Tingkat Sedang-Sulit)

> **Profil**: 50 Prov + 50 Nas = 100 soal PG
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

## PROV · Soal 1-50 (Tingkat Provinsi, C3-C4)
*Urutan operasi gabungan 3–5 elemen, kuadrat/kubik, menempatkan kurung agar benar, dan analisis kebenaran ekspresi — tiap soal 2 langkah.*

**1.** Hitunglah: `(12 + 8) ÷ 5 × 3 = ....`
- A. 12
- B. 4
- C. 60
- D. 20

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `12 + 8 = 20`. Lalu bagi & kali kiri-ke-kanan: `20 ÷ 5 = 4`, `4 × 3 = 12`.
- **B salah** — Berhenti setelah `20 ÷ 5 = 4`, lupa mengalikan 3. Ini jebakan "setengah jalan".
- **C salah** — `20 × 3 = 60`, lupa membagi 5. Urutan kiri-ke-kanan diabaikan.
- **D salah** — Hanya `12 + 8 = 20`; operasi selanjutnya tidak dikerjakan.
- **Konsep kunci:** Pada `(12 + 8) ÷ 5 × 3`, kurung dulu, lalu bagi & kali yang sederajat dikerjakan dari kiri ke kanan.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `12 + 8 = 20`
  2. Bagi & kali kiri-ke-kanan: `20 ÷ 5 = 4`, `4 × 3 = 12`

---

**2.** Hitunglah: `6 + 4² − 9 = ....`
- A. 13
- B. 19
- C. 22
- D. 1

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat dulu: `4² = 16`, lalu kiri-ke-kanan: `6 + 16 − 9 = 22 − 9 = 13`.
- **B salah** — `6 + 4 + 9 = 19`: lupa pangkat dan mengubah `−9` menjadi `+9`.
- **C salah** — `6 + 16 = 22`, lupa mengurangkan 9.
- **D salah** — `6 + 4 − 9 = 1`: pangkat dilupakan (`4²` dianggap `4`).
- **Konsep kunci:** Pangkat pada `6 + 4² − 9` dikerjakan sebelum tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `4² = 16`
  2. Kiri-ke-kanan: `6 + 16 − 9 = 13`

---

**3.** Hitunglah: `(9 − 5) × (6 + 4) = ....`
- A. 40
- B. 14
- C. 24
- D. 4

**Kunci: A**
**Pembahasan:**
- **A benar** — Dua kurung dulu: `9 − 5 = 4` dan `6 + 4 = 10`, lalu `4 × 10 = 40`.
- **B salah** — Menjumlahkan hasil dua kurung: `4 + 10 = 14`. Perkalian diganti penjumlahan.
- **C salah** — `(9 − 5) × 6 = 24`: bagian `+ 4` dari kurung kedua dilupakan.
- **D salah** — Hanya `9 − 5 = 4`; kurung kedua tidak dikerjakan.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(9 − 5) × (6 + 4)` diselesaikan lebih dulu.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `9 − 5 = 4`, `6 + 4 = 10`
  2. Kemudian: `4 × 10 = 40`

---

**4.** Hitunglah: `100 − 4 × 3² = ....`
- A. 36
- B. 64
- C. 96
- D. 88

**Kunci: B**
**Pembahasan:**
- **A salah** — Berhenti di `4 × 3² = 36`, tidak dikurangkan dari 100.
- **B benar** — Pangkat dulu: `3² = 9`, lalu kali: `4 × 9 = 36`, lalu `100 − 36 = 64`.
- **C salah** — `100 − 4 = 96`: `× 3²` seluruhnya diabaikan.
- **D salah** — `100 − 4 × 3 = 88`: pangkat dilupakan (`3²` dianggap `3`).
- **Konsep kunci:** Pangkat pada `100 − 4 × 3²` dikerjakan sebelum perkalian dan pengurangan.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `3² = 9`
  2. Kali: `4 × 9 = 36`
  3. Kurang: `100 − 36 = 64`

---

**5.** Hitunglah: `2³ × 5 − 6 = ....`
- A. 40
- B. 26
- C. 34
- D. 24

**Kunci: C**
**Pembahasan:**
- **A salah** — `2³ × 5 = 40`, lupa mengurangkan 6.
- **B salah** — `2³ × 4 = 32`, `32 − 6 = 26`: salah mengalikan dengan 4.
- **C benar** — Pangkat: `2³ = 8`, kali: `8 × 5 = 40`, kurang: `40 − 6 = 34`.
- **D salah** — `2³ = 6` (keliru: pangkat dikerjakan sebagai kali), lalu `6 × 5 − 6 = 24`. Kesalahan klasik.
- **Konsep kunci:** Pangkat pada `2³ × 5 − 6` dikerjakan paling dulu, sebelum kali dan kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `2³ = 8`
  2. Kali: `8 × 5 = 40`
  3. Kurang: `40 − 6 = 34`

---

**6.** Tempatkan tanda kurung pada `6 × 4 − 2` agar hasilnya **12**.
- A. `6 × (4 − 2)`
- B. `(6 × 4) − 2`
- C. `(6 × 4 − 2)`
- D. `6 × 4 − (2)`

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `4 − 2 = 2`, lalu `6 × 2 = 12`.
- **B salah** — `(6 × 4) − 2 = 24 − 2 = 22`. Kurung tidak mengubah apa-apa.
- **C salah** — `(6 × 4 − 2) = 24 − 2 = 22`. Sama saja dengan tanpa kurung.
- **D salah** — `6 × 4 − 2 = 22`. Kurung pada `(2)` tidak berpengaruh.
- **Konsep kunci:** Untuk membuat hasil tertentu, letakkan kurung di sekitar operasi yang boleh diutamakan. Dulu di dalam kurung, baru operasi luar.
- **Langkah Penyelesaian:**
  1. Pilih `6 × (4 − 2)`
  2. Kurung dulu: `4 − 2 = 2`, lalu `6 × 2 = 12`

---

**7.** Hitunglah: `45 − 5 × 3 + 10 = ....`
- A. 130
- B. 40
- C. 20
- D. 15

**Kunci: B**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan total: `(45 − 5) × 3 + 10 = 130`. Kurung tidak pernah ada.
- **B benar** — Kali dulu: `5 × 3 = 15`, lalu kiri-ke-kanan: `45 − 15 + 10 = 30 + 10 = 40`.
- **C salah** — `45 − (5 × 3 + 10) = 45 − 25 = 20`: 10 digabung ke dalam kurung.
- **D salah** — Berhenti di `5 × 3 = 15`; bagian `45 − ... + 10` dilupakan.
- **Konsep kunci:** Pada `45 − 5 × 3 + 10`, kali dikerjakan dulu, baru tambah/kurang kiri-ke-kanan.
- **Langkah Penyelesaian:**
  1. Kali dulu: `5 × 3 = 15`
  2. Kiri-ke-kanan: `45 − 15 + 10 = 40`

---

**8.** Hitunglah: `(7 + 8) × 2 − 10 = ....`
- A. 30
- B. 13
- C. 20
- D. 15

**Kunci: C**
**Pembahasan:**
- **A salah** — `(7 + 8) × 2 = 30`, lupa mengurangkan 10.
- **B salah** — `7 + 8 × 2 − 10 = 7 + 16 − 10 = 13`: kurung diabaikan.
- **C benar** — Kurung dulu: `7 + 8 = 15`, kali: `15 × 2 = 30`, kurang: `30 − 10 = 20`.
- **D salah** — Hanya `7 + 8 = 15`; sisa operasi tidak dikerjakan.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(7 + 8) × 2 − 10` diselesaikan lebih dulu.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `7 + 8 = 15`
  2. Kali: `15 × 2 = 30`
  3. Kurang: `30 − 10 = 20`

---

**9.** Manakah perhitungan yang **SALAH**?
- A. `12 ÷ 4 × 2 = 6`
- B. `15 − 3 × 2 = 9`
- C. `20 ÷ 5 + 5 = 9`
- D. `8 + 2 × 3 = 30`

**Kunci: D**
**Pembahasan:**
- **A benar** — `12 ÷ 4 = 3`, `3 × 2 = 6`. Benar.
- **B benar** — `3 × 2 = 6`, `15 − 6 = 9`. Benar.
- **C benar** — `20 ÷ 5 = 4`, `4 + 5 = 9`. Benar.
- **D salah** — Kiri-ke-kanan tanpa hierarki: `(8 + 2) × 3 = 30`. Seharusnya `8 + 2 × 3 = 8 + 6 = 14`. Inilah yang salah.
- **Konsep kunci:** Cek setiap ekspresi dengan hierarki KPKBTK; yang memakai kiri-ke-kanan murni adalah jebakan.
- **Langkah Penyelesaian:**
  1. Periksa A: `12 ÷ 4 × 2 = 6` ✓
  2. Periksa B: `15 − 3 × 2 = 9` ✓
  3. Periksa C: `20 ÷ 5 + 5 = 9` ✓
  4. Periksa D: `8 + 2 × 3 = 14` (bukan 30) → D salah

---

**10.** Hitunglah: `3 + 2 × (6 − 1) = ....`
- A. 25
- B. 29
- C. 14
- D. 13

**Kunci: D**
**Pembahasan:**
- **A salah** — `(3 + 2) × (6 − 1) = 5 × 5 = 25`: 3 ikut dimasukkan ke kurung.
- **B salah** — `(3 + 2) × 6 − 1 = 30 − 1 = 29`: kurung dipindah.
- **C salah** — `3 + 2 × 6 − 1 = 3 + 12 − 1 = 14`: kurung diabaikan, operasi dihitung ulang.
- **D benar** — Kurung dulu: `6 − 1 = 5`, kali: `2 × 5 = 10`, tambah: `3 + 10 = 13`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `3 + 2 × (6 − 1)` diselesaikan lebih dulu.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `6 − 1 = 5`
  2. Kali: `2 × 5 = 10`
  3. Tambah: `3 + 10 = 13`

---

**11.** Hitunglah: `(2² + 3²) × 2 = ....`
- A. 26
- B. 50
- C. 20
- D. 13

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat dalam kurung: `2² = 4`, `3² = 9`, jumlah `13`, lalu `13 × 2 = 26`.
- **B salah** — `(2 + 3)² × 2 = 25 × 2 = 50`: pangkat didistribusikan keliru.
- **C salah** — `3²` dianggap `6` (pangkat jadi kali), lalu `(4 + 6) × 2 = 20`.
- **D salah** — `2² + 3² = 13`, lupa mengalikan 2.
- **Konsep kunci:** Pangkat tidak boleh "dibagikan" ke tiap suku dalam penjumlahan; hitung `2² + 3²` dulu sebagai 13.
- **Langkah Penyelesaian:**
  1. Pangkat dalam kurung: `2² = 4`, `3² = 9`
  2. Jumlah: `4 + 9 = 13`
  3. Kali: `13 × 2 = 26`

---

**12.** Hitunglah: `72 ÷ 8 + 6 × 3 = ....`
- A. 45
- B. 27
- C. 15
- D. 24

**Kunci: B**
**Pembahasan:**
- **A salah** — `(72 ÷ 8 + 6) × 3 = 15 × 3 = 45`: perkalian dilakukan terakhir.
- **B benar** — Bagi & kali dulu: `72 ÷ 8 = 9`, `6 × 3 = 18`, lalu `9 + 18 = 27`.
- **C salah** — `72 ÷ 8 + 6 = 15`: `× 3` dilupakan.
- **D salah** — `6 × 3` dihitung `15`: `9 + 15 = 24`. Salah hafal perkalian.
- **Konsep kunci:** Pada `72 ÷ 8 + 6 × 3`, bagi dan kali dikerjakan sebelum tambah.
- **Langkah Penyelesaian:**
  1. Bagi & kali dulu: `72 ÷ 8 = 9`, `6 × 3 = 18`
  2. Tambah: `9 + 18 = 27`

---

**13.** Udin membeli **4 pensil** seharga Rp1.500 per buah dan **2 buku tulis** seharga Rp5.000 per buah. Total yang harus dibayar Udin adalah ....
- A. Rp9.000
- B. Rp13.000
- C. Rp16.000
- D. Rp21.000

**Kunci: C**
**Pembahasan:**
- **A salah** — `6 × 1.500 = 9.000`: semua barang dianggap seharga pensil.
- **B salah** — `2 × 1.500 + 2 × 5.000 = 13.000`: pensil dianggap hanya 2.
- **C benar** — Kalimat matematika: `4 × 1.500 + 2 × 5.000`. Kali dulu: `6.000 + 10.000 = 16.000`.
- **D salah** — `4 × 1.500 + 3 × 5.000 = 21.000`: buku dianggap 3 buah.
- **Konsep kunci:** Ubah cerita jadi kalimat matematika, kerjakan perkalian dulu, baru penjumlahan.
- **Langkah Penyelesaian:**
  1. Kalimat: `4 × 1.500 + 2 × 5.000`
  2. Kali dulu: `6.000 + 10.000 = 16.000`

---

**14.** Hitunglah: `5² + 2³ = ....`
- A. 27
- B. 16
- C. 31
- D. 33

**Kunci: D**
**Pembahasan:**
- **A salah** — `5² + 2 = 27`: pangkat tiga diabaikan (`2³` dianggap `2`).
- **B salah** — `5 × 2 + 2 × 3 = 16`: pangkat dikerjakan sebagai perkalian.
- **C salah** — `2³` dianggap `6` (kali 3), `25 + 6 = 31`.
- **D benar** — Pangkat masing-masing dulu: `5² = 25`, `2³ = 8`, lalu `25 + 8 = 33`.
- **Konsep kunci:** `xⁿ` berarti x dikali dirinya n kali, bukan `x × n`.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `5² = 25`, `2³ = 8`
  2. Tambah: `25 + 8 = 33`

---

**15.** Hitunglah: `(15 − 3) × 4 ÷ 6 = ....`
- A. 8
- B. 48
- C. 13
- D. 24

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `15 − 3 = 12`, lalu bagi & kali kiri-ke-kanan: `12 × 4 = 48`, `48 ÷ 6 = 8`.
- **B salah** — `12 × 4 = 48`, lupa membagi 6.
- **C salah** — `15 − 3 × 4 ÷ 6 = 15 − 2 = 13`: kurung diabaikan.
- **D salah** — `(15 − 3) × 4 ÷ 2 = 24`? Salah pembagi: `48 ÷ 2 = 24`.
- **Konsep kunci:** Kali dan bagi sederajat — kerjakan dari kiri ke kanan setelah kurung.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `15 − 3 = 12`
  2. Kiri-ke-kanan: `12 × 4 = 48`, `48 ÷ 6 = 8`

---

**16.** Hitunglah: `90 − 3 × (4 + 5) = ....`
- A. 69
- B. 63
- C. 27
- D. 60

**Kunci: B**
**Pembahasan:**
- **A salah** — `4 + 5 = 7` (salah hitung), `3 × 7 = 21`, `90 − 21 = 69`.
- **B benar** — Kurung dulu: `4 + 5 = 9`, kali: `3 × 9 = 27`, kurang: `90 − 27 = 63`.
- **C salah** — Hanya `3 × (4 + 5) = 27`; tidak dikurangkan dari 90.
- **D salah** — `4 + 5 = 10`, `3 × 10 = 30`, `90 − 30 = 60`: salah menjumlahkan kurung.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `90 − 3 × (4 + 5)` diselesaikan lebih dulu.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `4 + 5 = 9`
  2. Kali: `3 × 9 = 27`
  3. Kurang: `90 − 27 = 63`

---

**17.** Tempatkan tanda kurung pada `5 × 4 + 3` agar hasilnya **35**.
- A. `(5 × 4) + 3`
- B. `5 × 4 + (3)`
- C. `5 × (4 + 3)`
- D. `(5 × 4 + 3)`

**Kunci: C**
**Pembahasan:**
- **A salah** — `20 + 3 = 23`. Sama dengan tanpa kurung.
- **B salah** — `20 + 3 = 23`. Kurung `(3)` tidak mengubah apa pun.
- **C benar** — Kurung dulu: `4 + 3 = 7`, lalu `5 × 7 = 35`.
- **D salah** — `(5 × 4 + 3) = 23`. Kurung di pinggir tidak memengaruhi urutan.
- **Konsep kunci:** Untuk membuat hasil yang diinginkan, pilih kurung yang mengubah urutan operasi (di sini, menambahkan dulu `4 + 3`).
- **Langkah Penyelesaian:**
  1. Pilih `5 × (4 + 3)`
  2. Kurung dulu: `4 + 3 = 7`, lalu `5 × 7 = 35`

---

**18.** Hitunglah: `8 ÷ 2 × 4 + 3 = ....`
- A. 4
- B. 7
- C. 16
- D. 19

**Kunci: D**
**Pembahasan:**
- **A salah** — `8 ÷ (2 × 4) + 3 = 1 + 3 = 4`: perkalian dipaksakan mendahului pembagian.
- **B salah** — `8 − 2 + 4 − 3 = 7`: seluruh tanda operasi diubah.
- **C salah** — `8 ÷ 2 × 4 = 16`, lupa menambahkan 3.
- **D benar** — Bagi & kali kiri-ke-kanan: `8 ÷ 2 = 4`, `4 × 4 = 16`, lalu `16 + 3 = 19`.
- **Konsep kunci:** Kali dan bagi sederajat — yang lebih dulu muncul dikerjakan lebih dulu.
- **Langkah Penyelesaian:**
  1. Kiri-ke-kanan: `8 ÷ 2 = 4`, `4 × 4 = 16`
  2. Tambah: `16 + 3 = 19`

---

**19.** Hitunglah: `2 × (3 + 4)² − 10 = ....`
- A. 88
- B. 98
- C. 4
- D. 18

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `3 + 4 = 7`, pangkat `7² = 49`, kali `2 × 49 = 98`, kurang `98 − 10 = 88`.
- **B salah** — `2 × 49 = 98`, lupa mengurangkan 10.
- **C salah** — `2 × 7 − 10 = 4`: kuadrat dilupakan (`(3 + 4)` langsung dikali 2).
- **D salah** — `(3 + 4) × 2² − 10 = 7 × 4 − 10 = 18`: kuadrat dipindah ke angka 2.
- **Konsep kunci:** Di dalam kurung dulu, baru pangkat, lalu kali, lalu kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `3 + 4 = 7`
  2. Pangkat: `7² = 49`
  3. Kali: `2 × 49 = 98`
  4. Kurang: `98 − 10 = 88`

---

**20.** Hitunglah: `1/2 × (10 + 6) − 3 = ....`
- A. 11
- B. 5
- C. 8
- D. 16

**Kunci: B**
**Pembahasan:**
- **A salah** — `1/2 × 16 + 3 = 11`: tanda `− 3` diubah menjadi `+ 3`.
- **B benar** — Kurung dulu: `10 + 6 = 16`, kali `1/2 × 16 = 8`, kurang `8 − 3 = 5`.
- **C salah** — `1/2 × 16 = 8`, lupa mengurangkan 3.
- **D salah** — Hanya `10 + 6 = 16`; `1/2` dan `− 3` diabaikan.
- **Konsep kunci:** Urutan operasi tetap berlaku meski ada pecahan seperti `1/2`.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `10 + 6 = 16`
  2. Kali: `1/2 × 16 = 8`
  3. Kurang: `8 − 3 = 5`

---

**21.** Manakah perhitungan yang **BENAR**?
- A. `2 + 3² = 25`
- B. `(2 × 3)² = 21`
- C. `(2 + 3)² = 25`
- D. `2² + 3² = 25`

**Kunci: C**
**Pembahasan:**
- **A salah** — `3² = 9`, `2 + 9 = 11`, bukan 25.
- **B salah** — `2 × 3 = 6`, `6² = 36`, bukan 21.
- **C benar** — Kurung dulu: `2 + 3 = 5`, lalu `5² = 25`.
- **D salah** — `2² + 3² = 4 + 9 = 13`, bukan 25. Kuadrat tidak boleh "dibagikan" ke setiap angka.
- **Konsep kunci:** `(2 + 3)²` beda jauh dari `2² + 3²`. Kurung membuat kuadrat berlaku ke keseluruhan.
- **Langkah Penyelesaian:**
  1. Cek A: `2 + 9 = 11` ✗
  2. Cek B: `6² = 36` ✗
  3. Cek C: `(2 + 3)² = 25` ✓
  4. Cek D: `4 + 9 = 13` ✗

---

**22.** Hitunglah: `(10 − 2) × (7 − 3) = ....`
- A. 40
- B. 28
- C. 12
- D. 32

**Kunci: D**
**Pembahasan:**
- **A salah** — `10 × (7 − 3) = 40`: pengurangan `− 2` dilupakan.
- **B salah** — `10 − 2 = 7` (salah hitung), `7 × 4 = 28`.
- **C salah** — Menjumlahkan hasil kurung: `8 + 4 = 12`. `×` diganti `+`.
- **D benar** — Dua kurung dulu: `10 − 2 = 8`, `7 − 3 = 4`, lalu `8 × 4 = 32`.
- **Konsep kunci:** Kedua kurung diselesaikan lebih dulu sebelum perkalian luar.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `10 − 2 = 8`, `7 − 3 = 4`
  2. Kali: `8 × 4 = 32`

---

**23.** Hitunglah: `4³ ÷ 8 + 5 = ....`
- A. 13
- B. 69
- C. 7
- D. 8

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat: `4³ = 64`, bagi: `64 ÷ 8 = 8`, tambah: `8 + 5 = 13`.
- **B salah** — `64 + 5 = 69`: pembagian dilupakan.
- **C salah** — `4³ = 16` (salah hafal), `16 ÷ 8 = 2`, `2 + 5 = 7`.
- **D salah** — `4³ ÷ 8 = 8`, lupa menambahkan 5.
- **Konsep kunci:** Pangkat dikerjakan sebelum bagi dan tambah.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `4³ = 64`
  2. Bagi: `64 ÷ 8 = 8`
  3. Tambah: `8 + 5 = 13`

---

**24.** Tempatkan tanda kurung pada `16 − 6 × 2` agar hasilnya **20**.
- A. `16 − (6 × 2)`
- B. `(16 − 6) × 2`
- C. `(16 − 6 × 2)`
- D. `16 − 6 × (2)`

**Kunci: B**
**Pembahasan:**
- **A salah** — `16 − 12 = 4`. Sama dengan tanpa kurung.
- **B benar** — Kurung dulu: `16 − 6 = 10`, lalu `10 × 2 = 20`.
- **C salah** — `(16 − 6 × 2) = 16 − 12 = 4`. Kurung pinggir tidak mengubah urutan.
- **D salah** — `16 − 6 × 2 = 4`. Kurung `(2)` tidak berpengaruh.
- **Konsep kunci:** Kurung harus dipasang di sekitar operasi yang ingin diutamakan.
- **Langkah Penyelesaian:**
  1. Pilih `(16 − 6) × 2`
  2. Kurung dulu: `16 − 6 = 10`, lalu `10 × 2 = 20`

---

**25.** Hitunglah: `0,5 × (4 + 6)² ÷ 10 − 1 = ....`
- A. 50
- B. 5
- C. 4
- D. 100

**Kunci: C**
**Pembahasan:**
- **A salah** — `0,5 × 100 = 50`: `÷ 10` dan `− 1` dilupakan.
- **B salah** — `0,5 × 100 ÷ 10 = 5`, lupa mengurangkan 1.
- **C benar** — Kurung dulu: `4 + 6 = 10`, pangkat `10² = 100`, lalu kiri-ke-kanan: `0,5 × 100 = 50`, `50 ÷ 10 = 5`, `5 − 1 = 4`.
- **D salah** — Hanya `(4 + 6)² = 100`; bagian depan dan belakang diabaikan.
- **Konsep kunci:** Operasi panjang dipecah langkah demi langkah; desimal tidak mengubah aturan urutan.
- **Langkah Penyelesaian:**
  1. Kurung: `4 + 6 = 10`
  2. Pangkat: `10² = 100`
  3. Kiri-ke-kanan: `0,5 × 100 = 50`, `50 ÷ 10 = 5`
  4. Kurang: `5 − 1 = 4`

---

**26.** Hitunglah: `144 ÷ 12 + 3 × (10 − 6) = ....`
- A. 36
- B. 60
- C. 27
- D. 24

**Kunci: D**
**Pembahasan:**
- **A salah** — Kurung diabaikan: `144 ÷ 12 + 3 × 10 − 6 = 12 + 30 − 6 = 36`.
- **B salah** — `(144 ÷ 12 + 3) × (10 − 6) = 15 × 4 = 60`: kurung keliru dipasang.
- **C salah** — `10 − 6 = 5` (salah hitung), `3 × 5 = 15`, `12 + 15 = 27`.
- **D benar** — Kurung dulu: `10 − 6 = 4`, bagi: `144 ÷ 12 = 12`, kali: `3 × 4 = 12`, jumlah: `12 + 12 = 24`.
- **Konsep kunci:** Kerjakan kurung, bagi, dan kali sebelum penjumlahan terakhir.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `10 − 6 = 4`
  2. Bagi & kali: `144 ÷ 12 = 12`, `3 × 4 = 12`
  3. Tambah: `12 + 12 = 24`

---

**27.** Di ruang pertemuan ada **6 baris** dengan **8 kursi** setiap baris. Sebanyak **5 kursi rusak**, lalu panitia **menambah 3 kursi baru**. Banyak kursi yang baik sekarang adalah ....
- A. 46
- B. 48
- C. 40
- D. 51

**Kunci: A**
**Pembahasan:**
- **A benar** — Kalimat: `6 × 8 − 5 + 3`. Kali dulu: `48 − 5 + 3 = 43 + 3 = 46`.
- **B salah** — Hanya `6 × 8 = 48`; kursi rusak dan kursi baru diabaikan.
- **C salah** — `48 − 5 − 3 = 40`: tanda `+ 3` menjadi `− 3`.
- **D salah** — `48 + 3 = 51`: kursi rusak dilupakan.
- **Konsep kunci:** Kiri-ke-kanan setelah perkalian; hati-hati tanda "rusak" (−) dan "menambah" (+).
- **Langkah Penyelesaian:**
  1. Kalimat: `6 × 8 − 5 + 3`
  2. Kali: `48 − 5 + 3 = 46`

---

**28.** Hitunglah: `(4³ − 2³) ÷ 7 = ....`
- A. 56
- B. 8
- C. 14
- D. 4

**Kunci: B**
**Pembahasan:**
- **A salah** — `64 − 8 = 56`, lupa membagi 7.
- **B benar** — Pangkat dulu: `4³ = 64`, `2³ = 8`, kurung: `64 − 8 = 56`, bagi: `56 ÷ 7 = 8`.
- **C salah** — `56 ÷ 4 = 14`: salah membagi dengan 4.
- **D salah** — `56 ÷ 14 = 4`: membagi dengan `2 × 7 = 14`, bukan 7.
- **Konsep kunci:** Pangkat kedua bilangan dikerjakan dulu, baru pengurangan dalam kurung.
- **Langkah Penyelesaian:**
  1. Pangkat: `4³ = 64`, `2³ = 8`
  2. Kurung: `64 − 8 = 56`
  3. Bagi: `56 ÷ 7 = 8`

---

**29.** Manakah perhitungan yang **SALAH**?
- A. `36 ÷ 6 × 2 = 12`
- B. `40 − 10 + 5 = 35`
- C. `25 − 3 × 4 = 88`
- D. `6 + 2 × 3 = 12`

**Kunci: C**
**Pembahasan:**
- **A benar** — `36 ÷ 6 = 6`, `6 × 2 = 12`. Benar.
- **B benar** — `40 − 10 = 30`, `30 + 5 = 35`. Benar.
- **C salah** — `3 × 4 = 12`, `25 − 12 = 13`, bukan 88. Murid yang memilih ini menghitung `(25 − 3) × 4 = 88` (kiri-ke-kanan). Inilah yang salah.
- **D benar** — `2 × 3 = 6`, `6 + 6 = 12`. Benar.
- **Konsep kunci:** Semua ekspresi harus mengikuti hierarki; jawaban "hasil kiri-ke-kanan" adalah sinyal salah.
- **Langkah Penyelesaian:**
  1. Cek A: `36 ÷ 6 × 2 = 12` ✓
  2. Cek B: `40 − 10 + 5 = 35` ✓
  3. Cek C: `25 − 3 × 4 = 13` (bukan 88) → C salah
  4. Cek D: `6 + 2 × 3 = 12` ✓

---

**30.** Hitunglah: `√36 + √16 × 2 − 5 = ....`
- A. 15
- B. 6
- C. 14
- D. 9

**Kunci: D**
**Pembahasan:**
- **A salah** — `(√36 + √16) × 2 − 5 = 10 × 2 − 5 = 15`: akar dijumlahkan dulu.
- **B salah** — Hanya `√36 = 6`; sisa operasi diabaikan.
- **C salah** — `6 + 4 × 2 = 14`, lupa mengurangkan 5.
- **D benar** — Akar dulu: `√36 = 6`, `√16 = 4`, kali: `4 × 2 = 8`, lalu `6 + 8 − 5 = 9`.
- **Konsep kunci:** Akar sederajat dengan pangkat — dikerjakan sebelum kali dan tambah.
- **Langkah Penyelesaian:**
  1. Akar dulu: `√36 = 6`, `√16 = 4`
  2. Kali: `4 × 2 = 8`
  3. Kiri-ke-kanan: `6 + 8 − 5 = 9`

---

**31.** Tempatkan tanda kurung pada `8 + 4 × 3` agar hasilnya **36**.
- A. `(8 + 4) × 3`
- B. `8 + (4 × 3)`
- C. `(8 + 4 × 3)`
- D. `8 + 4 × (3)`

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `8 + 4 = 12`, lalu `12 × 3 = 36`.
- **B salah** — `8 + 12 = 20`. Sama dengan tanpa kurung.
- **C salah** — `(8 + 4 × 3) = 20`. Kurung pinggir tidak mengubah urutan.
- **D salah** — `8 + 4 × 3 = 20`. Kurung `(3)` tidak berpengaruh.
- **Konsep kunci:** Agar perkalian menunggu, jumlahkan dulu di dalam kurung.
- **Langkah Penyelesaian:**
  1. Pilih `(8 + 4) × 3`
  2. Kurung dulu: `8 + 4 = 12`, lalu `12 × 3 = 36`

---

**32.** Hitunglah: `5 × (3 + 2)² − 5² = ....`
- A. 120
- B. 100
- C. 0
- D. 25

**Kunci: B**
**Pembahasan:**
- **A salah** — `5²` dianggap `5` (salah pangkat): `5 × 25 − 5 = 120`.
- **B benar** — Kurung: `3 + 2 = 5`, pangkat `5² = 25`, kali `5 × 25 = 125`, lalu `125 − 5² = 125 − 25 = 100`.
- **C salah** — `25 − 25 = 0`: perkalian `5 ×` dilupakan.
- **D salah** — Hanya `(3 + 2)² = 25`; bagian lain diabaikan.
- **Konsep kunci:** Kedua `5²` berbeda peran: satu hasil kurung, satu pengurang — hitung keduanya.
- **Langkah Penyelesaian:**
  1. Kurung: `3 + 2 = 5`
  2. Pangkat: `5² = 25`
  3. Kali: `5 × 25 = 125`
  4. Kurang: `125 − 25 = 100`

---

**33.** Hitunglah: `(10 + 5) ÷ 3 + 4 × (7 − 2) = ....`
- A. 35
- B. 5
- C. 25
- D. 15

**Kunci: C**
**Pembahasan:**
- **A salah** — `15 + 20 = 35`: `÷ 3` dilupakan.
- **B salah** — Hanya `15 ÷ 3 = 5`; bagian `4 × (7 − 2)` diabaikan.
- **C benar** — Dua kurung dulu: `10 + 5 = 15`, `7 − 2 = 5`. Lalu `15 ÷ 3 = 5`, `4 × 5 = 20`, jumlah `5 + 20 = 25`.
- **D salah** — Hanya `3 × (7 − 2) = 15`; bagian `(10 + 5) ÷ 3` diabaikan.
- **Konsep kunci:** Setiap kurung dan operasi dalamnya dihitung, baru ditambahkan.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `10 + 5 = 15`, `7 − 2 = 5`
  2. Bagi & kali: `15 ÷ 3 = 5`, `4 × 5 = 20`
  3. Tambah: `5 + 20 = 25`

---

**34.** Hitunglah: `2³ × 3² − 4² = ....`
- A. 72
- B. 200
- C. 40
- D. 56

**Kunci: D**
**Pembahasan:**
- **A salah** — `2³ × 3² = 72`, lupa mengurangkan `4²`.
- **B salah** — `(2 × 3)³ − 4² = 216 − 16 = 200`: pangkat malah diterapkan ke hasil kali.
- **C salah** — `4² = 32` (salah hafal), `72 − 32 = 40`.
- **D benar** — Pangkat masing-masing: `2³ = 8`, `3² = 9`, `4² = 16`. Kali: `8 × 9 = 72`, kurang: `72 − 16 = 56`.
- **Konsep kunci:** Hitung setiap pangkat lebih dulu, baru kali dan kurang.
- **Langkah Penyelesaian:**
  1. Pangkat: `2³ = 8`, `3² = 9`, `4² = 16`
  2. Kali: `8 × 9 = 72`
  3. Kurang: `72 − 16 = 56`

---

**35.** Lina membeli **3 kotak**, setiap kotak berisi **15 apel**. Sebanyak **8 apel busuk**, lalu Ibu **menambahkan 10 apel** baru. Banyak apel yang bagus sekarang adalah ....
- A. 47
- B. 37
- C. 45
- D. 63

**Kunci: A**
**Pembahasan:**
- **A benar** — Kalimat: `3 × 15 − 8 + 10`. Kali dulu: `45 − 8 + 10 = 37 + 10 = 47`.
- **B salah** — `45 − 8 = 37`: 10 apel baru dilupakan.
- **C salah** — Hanya `3 × 15 = 45`; kerusakan dan tambahan diabaikan.
- **D salah** — `45 + 8 + 10 = 63`: busuk dianggap menambah.
- **Konsep kunci:** "Rusak" berarti dikurang, "menambahkan" berarti ditambah.
- **Langkah Penyelesaian:**
  1. Kalimat: `3 × 15 − 8 + 10`
  2. Kali: `45 − 8 + 10 = 47`

---

**36.** Hitunglah: `(96 − 24) ÷ 8 × 3 = ....`
- A. 18
- B. 27
- C. 9
- D. 216

**Kunci: B**
**Pembahasan:**
- **A salah** — `72 ÷ 4 = 18`: salah membagi dengan 4.
- **B benar** — Kurung dulu: `96 − 24 = 72`, lalu bagi & kali kiri-ke-kanan: `72 ÷ 8 = 9`, `9 × 3 = 27`.
- **C salah** — `72 ÷ 8 = 9`: perkalian `× 3` dilupakan.
- **D salah** — `72 × 3 = 216`: pembagian dilupakan.
- **Konsep kunci:** Kali dan bagi sederajat — kerjakan berurutan dari kiri.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `96 − 24 = 72`
  2. Kiri-ke-kanan: `72 ÷ 8 = 9`, `9 × 3 = 27`

---

**37.** Tempatkan tanda kurung pada `20 ÷ 4 + 6` agar hasilnya **2**.
- A. `(20 ÷ 4) + 6`
- B. `20 ÷ 4 + (6)`
- C. `20 ÷ (4 + 6)`
- D. `(20 ÷ 4 + 6)`

**Kunci: C**
**Pembahasan:**
- **A salah** — `5 + 6 = 11`. Sama dengan tanpa kurung.
- **B salah** — `5 + 6 = 11`. Kurung `(6)` tidak berpengaruh.
- **C benar** — Kurung dulu: `4 + 6 = 10`, lalu `20 ÷ 10 = 2`.
- **D salah** — `(20 ÷ 4 + 6) = 5 + 6 = 11`. Kurung pinggir tidak mengubah urutan.
- **Konsep kunci:** Agar pembagian menunggu penjumlahan, jumlahkan dulu di dalam kurung.
- **Langkah Penyelesaian:**
  1. Pilih `20 ÷ (4 + 6)`
  2. Kurung dulu: `4 + 6 = 10`, lalu `20 ÷ 10 = 2`

---

**38.** Hitunglah: `10 + 2³ × (8 − 6) = ....`
- A. 12
- B. 68
- C. 18
- D. 26

**Kunci: D**
**Pembahasan:**
- **A salah** — Kurung diabaikan: `10 + 2³ − 6 = 10 + 8 − 6 = 12`.
- **B salah** — `10 + 2³ × 8 − 6 = 10 + 64 − 6 = 68`: kurung diabaikan dan operasi dirombak.
- **C salah** — `10 + 2³ = 18`: hasil `(8 − 6) = 2` tidak dikalikan.
- **D benar** — Kurung dulu: `8 − 6 = 2`, pangkat `2³ = 8`, kali `8 × 2 = 16`, tambah `10 + 16 = 26`.
- **Konsep kunci:** Kurung baru pangkat, baru kali, baru tambah.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `8 − 6 = 2`
  2. Pangkat: `2³ = 8`
  3. Kali: `8 × 2 = 16`
  4. Tambah: `10 + 16 = 26`

---

**39.** Berapakah nilai `x` agar `3 × (x + 5) = 36`?
- A. 7
- B. 31
- C. 12
- D. 21

**Kunci: A**
**Pembahasan:**
- **A benar** — `x + 5 = 36 ÷ 3 = 12`, lalu `x = 12 − 5 = 7`.
- **B salah** — `36 − 5 = 31`: pembagian dengan 3 dilupakan.
- **C salah** — Berhenti di `x + 5 = 12`; angka 5 tidak dikurangkan.
- **D salah** — `36 − 3 × 5 = 21`: 5 dikalikan 3 dulu, bukan dijumlah ke x.
- **Konsep kunci:** Bekerja mundur dari luar ke dalam: bagi dulu, baru kurangkan.
- **Langkah Penyelesaian:**
  1. `x + 5 = 36 ÷ 3 = 12`
  2. `x = 12 − 5 = 7`

---

**40.** Hitunglah: `(11² − 7²) ÷ 6 = ....`
- A. 6
- B. 12
- C. 72
- D. 40

**Kunci: B**
**Pembahasan:**
- **A salah** — `72 ÷ 12 = 6`: salah membagi dengan 12.
- **B benar** — Pangkat: `11² = 121`, `7² = 49`, kurung: `121 − 49 = 72`, bagi: `72 ÷ 6 = 12`.
- **C salah** — `121 − 49 = 72`, lupa membagi 6.
- **D salah** — `7² = 81` (salah hafal), `121 − 81 = 40`.
- **Konsep kunci:** Kuadrat dihitung dulu di dalam kurung, baru dijumlah/dikurangi.
- **Langkah Penyelesaian:**
  1. Pangkat: `11² = 121`, `7² = 49`
  2. Kurung: `121 − 49 = 72`
  3. Bagi: `72 ÷ 6 = 12`

---

**41.** Hitunglah: `10 − 3,5 × 2 + 4 = ....`
- A. 17
- B. 13
- C. 7
- D. 3

**Kunci: C**
**Pembahasan:**
- **A salah** — `(10 − 3,5) × 2 + 4 = 13 + 4 = 17`: pengurangan dipaksa lebih dulu.
- **B salah** — `(10 − 3,5) × 2 = 13` (kurung keliru) dan `+ 4` dilupakan.
- **C benar** — Kali dulu: `3,5 × 2 = 7`, lalu kiri-ke-kanan: `10 − 7 + 4 = 3 + 4 = 7`.
- **D salah** — `10 − 7 − 4 = 3`: tanda `+ 4` menjadi `− 4`.
- **Konsep kunci:** Perkalian desimal tetap didahulukan sebelum tambah/kurang.
- **Langkah Penyelesaian:**
  1. Kali dulu: `3,5 × 2 = 7`
  2. Kiri-ke-kanan: `10 − 7 + 4 = 7`

---

**42.** Manakah perhitungan yang **BENAR**?
- A. `2 × 3² = 36`
- B. `(2 + 3)² = 10`
- C. `2 + 3 × 4 − 1 = 19`
- D. `2 × (3 + 4) = 14`

**Kunci: D**
**Pembahasan:**
- **A salah** — `3² = 9`, `2 × 9 = 18`, bukan 36. Kuadrat tidak memengaruhi angka 2.
- **B salah** — `2 + 3 = 5`, `5² = 25`, bukan 10.
- **C salah** — `3 × 4 = 12`, `2 + 12 − 1 = 13`, bukan 19. (19 adalah hasil `(2 + 3) × 4 − 1`.)
- **D benar** — Kurung dulu: `3 + 4 = 7`, lalu `2 × 7 = 14`.
- **Konsep kunci:** Bandingkan setiap hasil dengan hierarki KPKBTK yang benar.
- **Langkah Penyelesaian:**
  1. Cek A: `2 × 9 = 18` ✗
  2. Cek B: `5² = 25` ✗
  3. Cek C: `2 + 12 − 1 = 13` ✗
  4. Cek D: `2 × 7 = 14` ✓

---

**43.** Eko menabung **5 hari** dengan **Rp6.000** per hari, lalu **2 hari** dengan **Rp9.000** per hari. Total tabungan Eko adalah ....
- A. Rp48.000
- B. Rp42.000
- C. Rp63.000
- D. Rp30.000

**Kunci: A**
**Pembahasan:**
- **A benar** — Kalimat: `5 × 6.000 + 2 × 9.000`. Kali dulu: `30.000 + 18.000 = 48.000`.
- **B salah** — `7 × 6.000 = 42.000`: semua hari dianggap Rp6.000.
- **C salah** — `7 × 9.000 = 63.000`: semua hari dianggap Rp9.000.
- **D salah** — Hanya `5 × 6.000 = 30.000`; tabungan hari kelima dan seterusnya diabaikan.
- **Konsep kunci:** Kalikan dulu tiap kelompok, baru jumlahkan.
- **Langkah Penyelesaian:**
  1. Kalimat: `5 × 6.000 + 2 × 9.000`
  2. Kali dulu: `30.000 + 18.000 = 48.000`

---

**44.** Hitunglah: `(3³ + 1) ÷ (2² + 3) = ....`
- A. 28
- B. 4
- C. 7
- D. 9

**Kunci: B**
**Pembahasan:**
- **A salah** — `3³ + 1 = 28`, lupa membagi.
- **B benar** — Pangkat: `3³ = 27`, `2² = 4`. Kurung kiri: `27 + 1 = 28`. Kurung kanan: `4 + 3 = 7`. Bagi: `28 ÷ 7 = 4`.
- **C salah** — Hanya `2² + 3 = 7` (penyebut).
- **D salah** — `64 ÷ 7 ≈ 9`: menganggap `(3 + 1)³ = 64` (kurung dulu, salah). Umpan dekat, dibulatkan.
- **Konsep kunci:** Pangkat di dalam tiap kurung dikerjakan sebelum penjumlahan kurung.
- **Langkah Penyelesaian:**
  1. Pangkat: `3³ = 27`, `2² = 4`
  2. Kurung kiri: `27 + 1 = 28`
  3. Kurung kanan: `4 + 3 = 7`
  4. Bagi: `28 ÷ 7 = 4`

---

**45.** Tempatkan tanda kurung pada `6 × 3 + 3` agar hasilnya **36**.
- A. `(6 × 3) + 3`
- B. `6 × 3 + (3)`
- C. `6 × (3 + 3)`
- D. `(6 × 3 + 3)`

**Kunci: C**
**Pembahasan:**
- **A salah** — `18 + 3 = 21`. Sama dengan tanpa kurung.
- **B salah** — `18 + 3 = 21`. Kurung `(3)` tidak berpengaruh.
- **C benar** — Kurung dulu: `3 + 3 = 6`, lalu `6 × 6 = 36`.
- **D salah** — `(6 × 3 + 3) = 18 + 3 = 21`. Kurung pinggir tidak mengubah urutan.
- **Konsep kunci:** Kurung yang memaksa penjumlahan mendahului perkalian menghasilkan 36.
- **Langkah Penyelesaian:**
  1. Pilih `6 × (3 + 3)`
  2. Kurung dulu: `3 + 3 = 6`, lalu `6 × 6 = 36`

---

**46.** Hitunglah: `100 − [4 × (3 + 5) − 10] = ....`
- A. 58
- B. 68
- C. 88
- D. 78

**Kunci: D**
**Pembahasan:**
- **A salah** — `100 − [4 × 8 + 10] = 100 − 42 = 58`: tanda `− 10` menjadi `+ 10`.
- **B salah** — `100 − [4 × 8] = 68`: `− 10` di dalam kurung dilupakan.
- **C salah** — `4 × 3 = 12` saja: `100 − 12 = 88`, bagian `+ 5` dan `− 10` dilupakan.
- **D benar** — Kurung biasa dulu: `3 + 5 = 8`, kali: `4 × 8 = 32`, siku: `32 − 10 = 22`, akhir: `100 − 22 = 78`.
- **Konsep kunci:** Pada kurung bersarang, kerjakan paling dalam dulu.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `3 + 5 = 8`
  2. Kali: `4 × 8 = 32`
  3. Siku: `32 − 10 = 22`
  4. Akhir: `100 − 22 = 78`

---

**47.** Berapakah nilai `n` agar `n² + 6 = 15`?
- A. 3
- B. 9
- C. 5
- D. 2

**Kunci: A**
**Pembahasan:**
- **A benar** — `n² = 15 − 6 = 9`, maka `n = 3` (karena `3² = 9`).
- **B salah** — Menjawab `n² = 9` sebagai nilai n (terlalu cepat).
- **C salah** — `15 − 10 = 5`: membuat angka tambahan sentuh.
- **D salah** — `2² + 6 = 10`: hasil mendekati 15, umpan.
- **Konsep kunci:** Kurangkan 6 dulu, lalu cari bilangan yang kuadratnya sama.
- **Langkah Penyelesaian:**
  1. `n² = 15 − 6 = 9`
  2. `n = 3` karena `3² = 9`

---

**48.** Hitunglah: `3,5 × (6 − 2) + 4 = ....`
- A. 25
- B. 18
- C. 14
- D. 23

**Kunci: B**
**Pembahasan:**
- **A salah** — Kurung diabaikan: `3,5 × 6 + 4 = 21 + 4 = 25`.
- **B benar** — Kurung dulu: `6 − 2 = 4`, kali `3,5 × 4 = 14`, tambah `14 + 4 = 18`.
- **C salah** — `3,5 × 4 = 14`, lupa menambahkan 4.
- **D salah** — `3,5 × 6 − 2 + 4 = 23`: kurung diabaikan, urutan dirombak.
- **Konsep kunci:** Kurung harus diselesaikan sebelum perkalian.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `6 − 2 = 4`
  2. Kali: `3,5 × 4 = 14`
  3. Tambah: `14 + 4 = 18`

---

**49.** Manakah yang hasilnya **TIDAK sama** dengan **20**?
- A. `(10 + 5) + 5`
- B. `(45 − 25) + 0`
- C. `(4 × 5) − 5`
- D. `(25 − 10) + 5`

**Kunci: C**
**Pembahasan:**
- **A benar (sama)** — `15 + 5 = 20`.
- **B benar (sama)** — `20 + 0 = 20`.
- **C salah (berbeda)** — `20 − 5 = 15`, bukan 20. Inilah jawabannya.
- **D benar (sama)** — `15 + 5 = 20`.
- **Konsep kunci:** Hitung setiap ekspresi dengan urutan kurung, lalu bandingkan dengan 20.
- **Langkah Penyelesaian:**
  1. A: `15 + 5 = 20` ✓
  2. B: `20 + 0 = 20` ✓
  3. C: `20 − 5 = 15` ✗ (berbeda)
  4. D: `15 + 5 = 20` ✓

---

**50.** Hitunglah: `(12 × 3 − 4²) ÷ (5 − 1) = ....`
- A. 3
- B. 20
- C. 6
- D. 5

**Kunci: D**
**Pembahasan:**
- **A salah** — Hanya `12 ÷ 4 = 3`; bagian lain diabaikan.
- **B salah** — `36 − 16 = 20`, lupa membagi.
- **C salah** — `4² = 12` (salah pangkat), `36 − 12 = 24`, `24 ÷ 4 = 6`.
- **D benar** — Pangkat: `4² = 16`. Kurung kiri: `12 × 3 = 36`, `36 − 16 = 20`. Kurung kanan: `5 − 1 = 4`. Bagi: `20 ÷ 4 = 5`.
- **Konsep kunci:** Pangkat, perkalian, lalu pengurangan di dalam tiap kurung — baru pembagian luar.
- **Langkah Penyelesaian:**
  1. Pangkat: `4² = 16`
  2. Kurung kiri: `12 × 3 = 36`, `36 − 16 = 20`
  3. Kurung kanan: `5 − 1 = 4`
  4. Bagi: `20 ÷ 4 = 5`

---

## NAS · Soal 51-100 (Tingkat Nasional, C4-C5)
*Kurung bersarang dalam, pangkat & akar, pecahan-desimal, multi-langkah, soal cerita kompleks — tiap soal 3–5 langkah.* 

**51.** Hitunglah: `{[8 + 2] × 3 − 10} ÷ 4 = ....`
- A. 5
- B. 20
- C. 80
- D. 30

**Kunci: A**
**Pembahasan:**
- **A benar** — Siku dulu: `8 + 2 = 10`, kali: `10 × 3 = 30`, kurawal: `30 − 10 = 20`, bagi: `20 ÷ 4 = 5`.
- **B salah** — `30 − 10 = 20`, lupa membagi dengan 4.
- **C salah** — `20 × 4 = 80`: pembagian diubah menjadi perkalian.
- **D salah** — Hanya `[8 + 2] × 3 = 30`; bagian `− 10` dan `÷ 4` diabaikan.
- **Konsep kunci:** Pada kurung bersarang, siku paling dalam dikerjakan duluan, lalu kurawal, lalu pembagian.
- **Langkah Penyelesaian:**
  1. Siku: `8 + 2 = 10`
  2. Kali: `10 × 3 = 30`
  3. Kurawal: `30 − 10 = 20`
  4. Bagi: `20 ÷ 4 = 5`

---

**52.** Hitunglah: `(2³ + 4²) × (3² − 2²) = ....`
- A. 6
- B. 120
- C. 168
- D. 37

**Kunci: B**
**Pembahasan:**
- **A salah** — `(2 + 4) × (3 − 2) = 6 × 1 = 6`: pangkat didistribusikan keliru ke tiap angka.
- **B benar** — Pangkat: `2³ = 8`, `4² = 16`, `3² = 9`, `2² = 4`. Kurung kiri: `8 + 16 = 24`. Kurung kanan: `9 − 4 = 5`. Kali: `24 × 5 = 120`.
- **C salah** — `9 − 2 = 7` (sabotase: `3² − 2`), `24 × 7 = 168`.
- **D salah** — `24 + 13 = 37`: kedua kurung dijumlahkan, bukan dikalikan.
- **Konsep kunci:** Empat pangkat dihitung duluan; hasil kedua kurung baru dikalikan.
- **Langkah Penyelesaian:**
  1. Pangkat: `2³ = 8`, `4² = 16`, `3² = 9`, `2² = 4`
  2. Kurung kiri: `8 + 16 = 24`
  3. Kurung kanan: `9 − 4 = 5`
  4. Kali: `24 × 5 = 120`

---

**53.** Hitunglah: `√(7² + 24²) + 3³ = ....`
- A. 25
- B. 27
- C. 52
- D. 625

**Kunci: C**
**Pembahasan:**
- **A salah** — `√(7² + 24²) = 25`, `+ 3³` dilupakan.
- **B salah** — Hanya `3³ = 27`; bagian akar diabaikan.
- **C benar** — Pangkat dalam akar: `7² = 49`, `24² = 576`, jumlah `49 + 576 = 625`. Akar: `√625 = 25`. Pangkat: `3³ = 27`. Jumlah: `25 + 27 = 52`.
- **D salah** — `7² + 24² = 625`, akar dan `+ 3³` dilupakan.
- **Konsep kunci:** Yang di dalam akar dihitung dulu (seperti kurung), lalu akar, lalu tambah.
- **Langkah Penyelesaian:**
  1. Dalam akar: `7² = 49`, `24² = 576`, `49 + 576 = 625`
  2. Akar: `√625 = 25`
  3. Pangkat: `3³ = 27`
  4. Tambah: `25 + 27 = 52`

---

**54.** Hitunglah: `{10² − [6² − (5 × 4)]} = ....`
- A. 80
- B. 16
- C. 116
- D. 84

**Kunci: D**
**Pembahasan:**
- **A salah** — `100 − [6² − 20]` disederhanakan keliru: siku dianggap `20` saja (lupa `6²`), `100 − 20 = 80`.
- **B salah** — Hanya isi siku `[6² − (5 × 4)] = 36 − 20 = 16`; `10²` dan pengurangannya diabaikan.
- **C salah** — `100 + 16 = 116`: siku ikut dijumlahkan, tanda minus terlewat.
- **D benar** — Kurung biasa: `5 × 4 = 20`. Siku: `6² = 36`, `36 − 20 = 16`. Kurawal: `10² = 100`, `100 − 16 = 84`.
- **Konsep kunci:** Pada tiga tingkat kurung, paling dalam diselesaikan lebih dulu, lalu kuadrat, lalu selisih.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `5 × 4 = 20`
  2. Siku: `6² = 36`, `36 − 20 = 16`
  3. Kurawal: `10² = 100`, `100 − 16 = 84`

---

**55.** Tempatkan tanda kurung pada `20 ÷ 2 × 5` agar hasilnya **2**.
- A. `20 ÷ (2 × 5)`
- B. `(20 ÷ 2) × 5`
- C. `(20 ÷ 2 × 5)`
- D. `20 ÷ 2 × (5)`

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `2 × 5 = 10`, lalu `20 ÷ 10 = 2`.
- **B salah** — `10 × 5 = 50`. Sama dengan tanpa kurung.
- **C salah** — `(20 ÷ 2 × 5) = 10 × 5 = 50`. Kurung pinggir tidak mengubah urutan.
- **D salah** — `20 ÷ 2 × 5 = 50`. Kurung `(5)` tidak berpengaruh.
- **Konsep kunci:** Untuk membuat pembagian menunggu, kalikan lebih dulu di dalam kurung.
- **Langkah Penyelesaian:**
  1. Pilih `20 ÷ (2 × 5)`
  2. Kurung dulu: `2 × 5 = 10`, lalu `20 ÷ 10 = 2`

---

**56.** Hitunglah: `(3/4 + 1/2) × 4³ ÷ 8 = ....`
- A. 6
- B. 10
- C. 32
- D. 4

**Kunci: B**
**Pembahasan:**
- **A salah** — `3/4 × 64 = 48`, `48 ÷ 8 = 6`: `+ 1/2` dilupakan.
- **B benar** — Kurung pecahan: `3/4 + 1/2 = 3/4 + 2/4 = 5/4`. Pangkat: `4³ = 64`. Kali & bagi kiri-ke-kanan: `5/4 × 64 = 80`, `80 ÷ 8 = 10`.
- **C salah** — `5/4 × 64 = 80`, lupa membagi 8.
- **D salah** — Jumlah pecahan dianggap `1/2` saja (lupa `3/4`), lalu `1/2 × 64 ÷ 8 = 4`.
- **Konsep kunci:** Samakan penyebut pecahan dulu, lalu ikuti urutan pangkat → kali/bagi.
- **Langkah Penyelesaian:**
  1. Kurung pecahan: `3/4 + 1/2 = 5/4`
  2. Pangkat: `4³ = 64`
  3. Kali: `5/4 × 64 = 80`
  4. Bagi: `80 ÷ 8 = 10`

---

**57.** Hitunglah: `{[20 − (5² − 15)] × 3} ÷ 2 = ....`
- A. 30
- B. 5
- C. 15
- D. 10

**Kunci: C**
**Pembahasan:**
- **A salah** — `[20 − 10] × 3 = 30`, lupa membagi 2.
- **B salah** — `20 − 10 = 10`, `10 ÷ 2 = 5`: perkalian `× 3` dilupakan.
- **C benar** — Kurung biasa: `5² = 25`, `25 − 15 = 10`. Siku: `20 − 10 = 10`. Kurawal: `10 × 3 = 30`. Bagi: `30 ÷ 2 = 15`.
- **D salah** — Hanya `20 − 10 = 10`; sisa operasi diabaikan.
- **Konsep kunci:** Tiga tingkat kurung diselesaikan dari dalam, lalu kali dan bagi kiri-ke-kanan.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `5² = 25`, `25 − 15 = 10`
  2. Siku: `20 − 10 = 10`
  3. Kurawal: `10 × 3 = 30`
  4. Bagi: `30 ÷ 2 = 15`

---

**58.** Panjang sebuah taman `(2 × 6 + 3)` m dan lebarnya `(10 − 2 × 2)` m. Di dalamnya dibangun kolam persegi bersisi **3 m**. Luas taman di luar kolam adalah ....
- A. 90 m²
- B. 84 m²
- C. 87 m²
- D. 81 m²

**Kunci: D**
**Pembahasan:**
- **A salah** — `15 × 6 = 90`: luas kolam tidak dikurangkan.
- **B salah** — `90 − 6 = 84`: luas kolam dihitung `3 × 2 = 6` (keliling sebagian, bukan luas).
- **C salah** — `90 − 3 = 87`: luas kolam dianggap `3` saja (sisi, bukan luas `3²`).
- **D benar** — Panjang: `2 × 6 + 3 = 12 + 3 = 15`. Lebar: `10 − 2 × 2 = 10 − 4 = 6`. Luas taman: `15 × 6 = 90`. Kolam: `3² = 9`. Luar kolam: `90 − 9 = 81`.
- **Konsep kunci:** Kerjakan operasi dalam kurung dengan hierarki, hitung luas kolam sebagai kuadrat, lalu kurangkan.
- **Langkah Penyelesaian:**
  1. Panjang: `2 × 6 + 3 = 15`
  2. Lebar: `10 − 2 × 2 = 6`
  3. Luas taman: `15 × 6 = 90`
  4. Kolam: `3² = 9`; luar kolam: `90 − 9 = 81`

---

**59.** Hitunglah: `5² × (3³ ÷ 9) + 7 = ....`
- A. 82
- B. 75
- C. 32
- D. 22

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat: `5² = 25`, `3³ = 27`. Kurung: `27 ÷ 9 = 3`. Kali: `25 × 3 = 75`. Tambah: `75 + 7 = 82`.
- **B salah** — `25 × 3 = 75`, lupa menambahkan 7.
- **C salah** — `25 + 7 = 32`: perkalian `× 3` dilupakan.
- **D salah** — `25 − 3 = 22`: operasi keliru sebagian. Umpan dekat dari angka 25 dan 3.
- **Konsep kunci:** Pangkat dulu di dalam dan di luar kurung, lalu bagi, kali, tambah.
- **Langkah Penyelesaian:**
  1. Pangkat: `5² = 25`, `3³ = 27`
  2. Kurung: `27 ÷ 9 = 3`
  3. Kali: `25 × 3 = 75`
  4. Tambah: `75 + 7 = 82`

---

**60.** Manakah perhitungan yang **SALAH**?
- A. `(2 + 3) × 4 = 20`
- B. `2² + 3² = 25`
- C. `(5 − 2)³ = 27`
- D. `√(9 + 16) = 5`

**Kunci: B**
**Pembahasan:**
- **A benar** — `5 × 4 = 20`. Benar.
- **B salah** — `4 + 9 = 13`, bukan 25. Kekeliruan menganggap `2² + 3² = (2 + 3)²`. Inilah yang salah.
- **C benar** — `5 − 2 = 3`, `3³ = 27`. Benar.
- **D benar** — `9 + 16 = 25`, `√25 = 5`. Benar.
- **Konsep kunci:** `a² + b² ≠ (a + b)²` — selalu hitung kuadrat tiap bilangan dulu.
- **Langkah Penyelesaian:**
  1. Cek A: `5 × 4 = 20` ✓
  2. Cek B: `4 + 9 = 13` (bukan 25) → B salah
  3. Cek C: `3³ = 27` ✓
  4. Cek D: `√25 = 5` ✓

---

**61.** Hitunglah: `{14 + [6 × (2 + 3)]} ÷ 4 = ....`
- A. 44
- B. 30
- C. 11
- D. 25

**Kunci: C**
**Pembahasan:**
- **A salah** — `14 + 30 = 44`, lupa membagi 4.
- **B salah** — Hanya `[6 × (2 + 3)] = 30`; `14` dan `÷ 4` diabaikan.
- **C benar** — Kurung biasa: `2 + 3 = 5`. Siku: `6 × 5 = 30`. Kurawal: `14 + 30 = 44`. Bagi: `44 ÷ 4 = 11`.
- **D salah** — `(14 + 6) × (2 + 3) ÷ 4 = 20 × 5 ÷ 4 = 25`: kurung dipasang keliru (`14 + 6`).
- **Konsep kunci:** Tiga tingkat kurung dikerjakan dari dalam, pembagian dilakukan paling akhir.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `2 + 3 = 5`
  2. Siku: `6 × 5 = 30`
  3. Kurawal: `14 + 30 = 44`
  4. Bagi: `44 ÷ 4 = 11`

---

**62.** Hitunglah: `(5³ − 3² × 8) × 2 = ....`
- A. 250
- B. 53
- C. 19
- D. 106

**Kunci: D**
**Pembahasan:**
- **A salah** — `125 × 2 = 250`: `− 3² × 8` dilupakan.
- **B salah** — `125 − 72 = 53`, lupa mengalikan 2.
- **C salah** — Tanpa kurung: `5³ − 3² × 8 × 2 = 125 − 144 = −19`, ditulis 19 (tanda diabaikan). Urutan salah.
- **D benar** — Pangkat: `5³ = 125`, `3² = 9`. Kali dalam kurung: `9 × 8 = 72`. Kurung: `125 − 72 = 53`. Kali luar: `53 × 2 = 106`.
- **Konsep kunci:** Pangkat dulu, kali di dalam kurung, baru pengurangan lalu kali luar.
- **Langkah Penyelesaian:**
  1. Pangkat: `5³ = 125`, `3² = 9`
  2. Kali dalam kurung: `9 × 8 = 72`
  3. Kurung: `125 − 72 = 53`
  4. Kali luar: `53 × 2 = 106`

---

**63.** Ada **8 kotak** berisi **32 kelereng** setiap kotak. Sebanyak **¼ dari seluruh kelereng** diambil, lalu **5 kotak** berisi **6 kelereng** ditambahkan. Total kelereng sekarang adalah ....
- A. 222
- B. 192
- C. 226
- D. 162

**Kunci: A**
**Pembahasan:**
- **A benar** — Total mula-mula: `8 × 32 = 256`. Sisa setelah ¼ diambil: `256 × 3/4 = 192`. Tambahan: `5 × 6 = 30`. Total: `192 + 30 = 222`.
- **B salah** — `256 × 3/4 = 192`: tambahan 30 dilupakan.
- **C salah** — `256 − 30 = 226`: ¼ ditangani salah (dianggap 25 kelereng diambil total 25? bukan).
- **D salah** — `256 − 64 − 30 = 162`: malah mengurangkan ¼ dan 30 untuk kelereng yang ditambahkan.
- **Konsep kunci:** Kalikan dulu jumlah mula-mula, hitung ¼-nya (bagi 4), baru sisa dikurangi dan tambahan dijumlah.
- **Langkah Penyelesaian:**
  1. Total mula-mula: `8 × 32 = 256`
  2. Sisa setelah ¼ diambil: `256 × 3/4 = 192`
  3. Tambahan: `5 × 6 = 30`
  4. Total: `192 + 30 = 222`

---

**64.** Hitunglah: `√144 × 3 − 4² + 5 = ....`
- A. 12
- B. 25
- C. 20
- D. 27

**Kunci: B**
**Pembahasan:**
- **A salah** — Hanya `√144 = 12`; sisa operasi diabaikan.
- **B benar** — Akar & pangkat dulu: `√144 = 12`, `4² = 16`. Kali: `12 × 3 = 36`. Kiri-ke-kanan: `36 − 16 + 5 = 20 + 5 = 25`.
- **C salah** — `36 − 16 = 20`, lupa menambahkan 5.
- **D salah** — `4² = 9` (salah pangkat), `36 − 9 = 27`.
- **Konsep kunci:** Akar dan pangkat dikerjakan lebih dulu, lalu kali, lalu tambah/kurang berurutan.
- **Langkah Penyelesaian:**
  1. Akar: `√144 = 12`; pangkat: `4² = 16`
  2. Kali: `12 × 3 = 36`
  3. Kiri-ke-kanan: `36 − 16 + 5 = 25`

---

**65.** Tempatkan tanda kurung pada `4 + 2 × 3²` agar hasilnya **54**.
- A. `4 + (2 × 3)²`
- B. `4 + 2 × (3²)`
- C. `(4 + 2) × 3²`
- D. `(4 + 2 × 3)²`

**Kunci: C**
**Pembahasan:**
- **A salah** — `(2 × 3)² = 36`, `4 + 36 = 40`.
- **B salah** — `3² = 9`, `2 × 9 = 18`, `4 + 18 = 22`. Sama dengan tanpa kurung.
- **C benar** — Kurung dulu: `4 + 2 = 6`, pangkat: `3² = 9`, lalu `6 × 9 = 54`.
- **D salah** — `4 + 2 × 3 = 10`, `10² = 100`.
- **Konsep kunci:** Pangkat menunggu hasil penjumlahan di dalam kurung, lalu dikalikan.
- **Langkah Penyelesaian:**
  1. Pilih `(4 + 2) × 3²`
  2. Kurung: `4 + 2 = 6`
  3. Pangkat: `3² = 9`
  4. Kali: `6 × 9 = 54`

---

**66.** Hitunglah: `[(3³ + 5) ÷ 4]² = ....`
- A. 16
- B. 1024
- C. 32
- D. 64

**Kunci: D**
**Pembahasan:**
- **A salah** — `4² = 16`: kuadrat diterapkan ke angka 4 (pembagi) saja.
- **B salah** — `(3³ + 5)² = 32² = 1024`: pembagian `÷ 4` dilupakan.
- **C salah** — Hanya `3³ + 5 = 32`; sisa operasi diabaikan.
- **D benar** — Kurung biasa: `3³ = 27`, `27 + 5 = 32`. Siku: `32 ÷ 4 = 8`. Kuadrat: `8² = 64`.
- **Konsep kunci:** Selesaikan seluruh isi kurung siku dulu, hasilnya baru dikuadratkan.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `3³ = 27`, `27 + 5 = 32`
  2. Siku: `32 ÷ 4 = 8`
  3. Kuadrat: `8² = 64`

---

**67.** Sebuah lantai berbentuk persegi bersisi `(3 + 2)` m akan dipasang keramik berukuran **1 m × 1 m**. Banyak keramik yang dibutuhkan adalah ....
- A. 25
- B. 5
- C. 13
- D. 20

**Kunci: A**
**Pembahasan:**
- **A benar** — Sisi: `3 + 2 = 5` m. Luas lantai: `5² = 25` m². Setiap keramik 1 m², jadi butuh 25 buah.
- **B salah** — Hanya `3 + 2 = 5`; luas (kuadrat) dilupakan.
- **C salah** — `3² + 2² = 13`: kuadrat "dibagikan" ke tiap penjumlahan. Keliru.
- **D salah** — `5 × 4 = 20`: menghitung keliling, bukan luas.
- **Konsep kunci:** Selesaikan kurung, lalu kuadratkan untuk luas; bandingkan dengan ukuran keramik.
- **Langkah Penyelesaian:**
  1. Sisi: `3 + 2 = 5` m
  2. Luas lantai: `5² = 25` m²
  3. Keramik dibutuhkan: `25 ÷ 1 = 25` buah

---

**68.** Hitunglah: `2,5 × (4³ ÷ 8) + 3² = ....`
- A. 20
- B. 29
- C. 73
- D. 26

**Kunci: B**
**Pembahasan:**
- **A salah** — `2,5 × 8 = 20`, `+ 3²` dilupakan.
- **B benar** — Pangkat: `4³ = 64`, `3² = 9`. Kurung: `64 ÷ 8 = 8`. Kali: `2,5 × 8 = 20`. Tambah: `20 + 9 = 29`.
- **C salah** — `64 + 9 = 73`: `÷ 8` dan `× 2,5` dilupakan.
- **D salah** — `3² = 6` (salah pangkat), `20 + 6 = 26`.
- **Konsep kunci:** Pangkat, kurung, kali, lalu tambah — desimal tidak mengubah urutan.
- **Langkah Penyelesaian:**
  1. Pangkat: `4³ = 64`, `3² = 9`
  2. Kurung: `64 ÷ 8 = 8`
  3. Kali: `2,5 × 8 = 20`
  4. Tambah: `20 + 9 = 29`

---

**69.** Manakah ekspresi yang hasilnya **SALAH**?
- A. `(6 − 2)³ = 64`
- B. `√(12² + 5²) = 13`
- C. `(3 + 4)² = 50`
- D. `2⁴ ÷ 4 × 3 = 12`

**Kunci: C**
**Pembahasan:**
- **A benar** — `6 − 2 = 4`, `4³ = 64`. Benar.
- **B benar** — `12² = 144`, `5² = 25`, `144 + 25 = 169`, `√169 = 13`. Benar.
- **C salah** — `3 + 4 = 7`, `7² = 49`, bukan 50. Inilah yang salah.
- **D benar** — `2⁴ = 16`, `16 ÷ 4 = 4`, `4 × 3 = 12`. Benar.
- **Konsep kunci:** Analisis setiap ekspresi dengan urutan yang benar: kurung → pangkat/akar → kali/bagi → tambah/kurang.
- **Langkah Penyelesaian:**
  1. Cek A: `4³ = 64` ✓
  2. Cek B: `√169 = 13` ✓
  3. Cek C: `7² = 49` (bukan 50) → C salah
  4. Cek D: `16 ÷ 4 × 3 = 12` ✓

---

**70.** Hitunglah: `{5 × [12 − 2²] + 6²} ÷ 4 = ....`
- A. 76
- B. 8
- C. 36
- D. 19

**Kunci: D**
**Pembahasan:**
- **A salah** — `{5 × 8 + 36} = 76`, lupa membagi 4.
- **B salah** — Hanya `12 − 2² = 12 − 4 = 8` (isi siku).
- **C salah** — Hanya `6² = 36`; bagian lain diabaikan.
- **D benar** — Siku: `2² = 4`, `12 − 4 = 8`. Kurawal: `5 × 8 = 40`, `+ 6² = 40 + 36 = 76`. Bagi: `76 ÷ 4 = 19`.
- **Konsep kunci:** Pangkat di dalam siku dulu, lalu kali/jumlah dalam kurawal, lalu bagi.
- **Langkah Penyelesaian:**
  1. Siku: `2² = 4`, `12 − 4 = 8`
  2. Kurawal: `5 × 8 = 40`, `40 + 36 = 76`
  3. Bagi: `76 ÷ 4 = 19`

---

**71.** Hitunglah: `√(8² + 6²) × 3 − 2⁴ = ....`
- A. 14
- B. 30
- C. 284
- D. 26

**Kunci: A**
**Pembahasan:**
- **A benar** — Dalam akar: `8² = 64`, `6² = 36`, `64 + 36 = 100`. Akar: `√100 = 10`. Kali: `10 × 3 = 30`. Pangkat: `2⁴ = 16`. Kurang: `30 − 16 = 14`.
- **B salah** — `30 − 16 = 14`? B. `10 × 3 = 30`, lupa mengurangkan `2⁴ = 16`.
- **C salah** — `100 × 3 − 16 = 284`: akar dilupakan (`8² + 6²` langsung dikalikan).
- **D salah** — `8 + 6 = 14`, `14 × 3 = 42`, `42 − 16 = 26`: kuadrat dan akar diabaikan.
- **Konsep kunci:** Yang di dalam akar dihitung dulu, akar setara pangkat, lalu tiga operasi terakhir.
- **Langkah Penyelesaian:**
  1. Dalam akar: `8² = 64`, `6² = 36`, `64 + 36 = 100`
  2. Akar: `√100 = 10`
  3. Kali: `10 × 3 = 30`
  4. Pangkat & kurang: `2⁴ = 16`, `30 − 16 = 14`

---

**72.** Hitunglah: `(1/3 + 1/6) × 6³ ÷ 12 = ....`
- A. 6
- B. 9
- C. 3
- D. 18

**Kunci: B**
**Pembahasan:**
- **A salah** — Hanya pecahan `1/3` dipakai: `1/3 × 216 = 72`, `72 ÷ 12 = 6`.
- **B benar** — Kurung pecahan: `1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2`. Pangkat: `6³ = 216`. Kali & bagi kiri-ke-kanan: `1/2 × 216 = 108`, `108 ÷ 12 = 9`.
- **C salah** — Hanya pecahan `1/6` dipakai: `1/6 × 216 = 36`, `36 ÷ 12 = 3`.
- **D salah** — `6³ = 216`, `216 ÷ 12 = 18`: pecahan `(1/3 + 1/6)` diabaikan.
- **Konsep kunci:** Samakan penyebut pecahan dulu; lalu hitung pangkat, kali, dan bagi berurutan.
- **Langkah Penyelesaian:**
  1. Kurung pecahan: `1/3 + 1/6 = 1/2`
  2. Pangkat: `6³ = 216`
  3. Kali: `1/2 × 216 = 108`
  4. Bagi: `108 ÷ 12 = 9`

---

**73.** Kolam renang berbentuk persegi panjang berukuran `(5 × 4)` m dan `(2 × 3)` m. Di tengahnya dipasang mosaik berbentuk persegi bersisi `(5 − 3)` m. Luas kolam yang **tidak** dipasang mosaik adalah ....
- A. 120 m²
- B. 124 m²
- C. 116 m²
- D. 52 m²

**Kunci: C**
**Pembahasan:**
- **A salah** — `20 × 6 = 120`: luas mosaik tidak dikurangkan.
- **B salah** — `120 + 4 = 124`: luas mosaik dijumlahkan, bukan dikurangkan.
- **C benar** — Panjang: `5 × 4 = 20`. Lebar: `2 × 3 = 6`. Luas kolam: `20 × 6 = 120`. Sisi mosaik: `5 − 3 = 2`, luas `2² = 4`. Luas di luar mosaik: `120 − 4 = 116`.
- **D salah** — `2 × (20 + 6) = 52`: menghitung keliling kolam, bukan luas.
- **Konsep kunci:** Operasi dalam tiap kurung dulu, kalikan untuk luas, kuadratkan sisi mosaik, lalu kurangkan.
- **Langkah Penyelesaian:**
  1. Panjang: `5 × 4 = 20`; lebar: `2 × 3 = 6`
  2. Luas kolam: `20 × 6 = 120`
  3. Sisi mosaik: `5 − 3 = 2`; luas `2² = 4`
  4. Luar mosaik: `120 − 4 = 116`

---

**74.** Tempatkan tanda kurung pada `8 × 4 − 3 × 2` agar hasilnya **58**.
- A. `8 × (4 − 3) × 2`
- B. `(8 × 4) − (3 × 2)`
- C. `8 × (4 − 3 × 2)`
- D. `(8 × 4 − 3) × 2`

**Kunci: D**
**Pembahasan:**
- **A salah** — `8 × 1 × 2 = 16`.
- **B salah** — `32 − 6 = 26`. Sama dengan tanpa kurung.
- **C salah** — `8 × (4 − 6) = 8 × (−2) = −16`.
- **D benar** — Kurung dulu: `8 × 4 = 32`, `32 − 3 = 29`, lalu `29 × 2 = 58`.
- **Konsep kunci:** Kurung yang memaksa `3` ikut dikurangkan sebelum dikalikan 2 menghasilkan 58.
- **Langkah Penyelesaian:**
  1. Pilih `(8 × 4 − 3) × 2`
  2. Kurung: `8 × 4 = 32`, `32 − 3 = 29`
  3. Kali: `29 × 2 = 58`

---

**75.** Hitunglah: `[√49 + (6² ÷ 4)] × 3 − 5 = ....`
- A. 43
- B. 48
- C. 53
- D. 7

**Kunci: A**
**Pembahasan:**
- **A benar** — Akar: `√49 = 7`. Kurung biasa: `6² = 36`, `36 ÷ 4 = 9`. Siku: `7 + 9 = 16`. Kali: `16 × 3 = 48`. Kurang: `48 − 5 = 43`.
- **B salah** — `16 × 3 = 48`, lupa mengurangkan 5.
- **C salah** — `16 × 3 + 5 = 53`: tanda `− 5` menjadi `+ 5`.
- **D salah** — Hanya `√49 = 7`; sisa operasi diabaikan.
- **Konsep kunci:** Akar dan pangkat dulu, lalu kurung, siku, kali, kurang — berurutan ketat.
- **Langkah Penyelesaian:**
  1. Akar: `√49 = 7`; pangkat: `6² = 36`
  2. Kurung biasa: `36 ÷ 4 = 9`
  3. Siku: `7 + 9 = 16`
  4. Kali & kurang: `16 × 3 = 48`, `48 − 5 = 43`

---

**76.** Diberikan `a = 5` dan `b = 3`. Nilai dari `a² + a × b − b²` adalah ....
- A. 16
- B. 31
- C. 40
- D. 34

**Kunci: B**
**Pembahasan:**
- **A salah** — `a² − b² = 25 − 9 = 16`: suku `a × b` dilupakan.
- **B benar** — Substitusi: `5² + 5 × 3 − 3²`. Pangkat: `25 + 15 − 9 = 31`.
- **C salah** — `25 + 15 = 40`: pengurang `b²` dilupakan.
- **D salah** — `25 + 9 = 34`: `a × b` diubah jadi `+ b²` (salah tanda).
- **Konsep kunci:** Substitusi nilai, hitung pangkat dan kali dulu, lalu tambah/kurang berurutan.
- **Langkah Penyelesaian:**
  1. Substitusi: `5² + 5 × 3 − 3²`
  2. Pangkat & kali: `25 + 15 − 9`
  3. Kiri-ke-kanan: `25 + 15 − 9 = 31`

---

**77.** Hitunglah: `(3⁴ ÷ 9 + 2²) × (√81 − 5) = ....`
- A. 27
- B. 44
- C. 52
- D. 65

**Kunci: C**
**Pembahasan:**
- **A salah** — Hanya `3⁴ ÷ 9 = 81 ÷ 9 = 9`; sisanya diabaikan.
- **B salah** — `2²` dianggap `2`: `(9 + 2) × 4 = 44`.
- **C benar** — Pangkat: `3⁴ = 81`, `2² = 4`. Kurung kiri: `81 ÷ 9 = 9`, `9 + 4 = 13`. Kurung kanan: `√81 = 9`, `9 − 5 = 4`. Kali: `13 × 4 = 52`.
- **D salah** — `√81 = 10` (salah akar), `9 − 5 = 4` → `13 × 5 = 65`.
- **Konsep kunci:** Pangkat dan akar di dalam tiap kurung dulu, lalu kali hasil kedua kurung.
- **Langkah Penyelesaian:**
  1. Pangkat: `3⁴ = 81`, `2² = 4`
  2. Kurung kiri: `81 ÷ 9 = 9`, `9 + 4 = 13`
  3. Kurung kanan: `√81 = 9`, `9 − 5 = 4`
  4. Kali: `13 × 4 = 52`

---

**78.** Koperasi membeli **12 kotak** berisi **5 bolpoin** dengan harga beli Rp1.500 per bolpoin. Sebanyak **4 kotak** dijual Rp2.000 per bolpoin, sisanya Rp1.800 per bolpoin. Total uang hasil penjualan adalah ....
- A. Rp108.000
- B. Rp120.000
- C. Rp96.000
- D. Rp112.000

**Kunci: D**
**Pembahasan:**
- **A salah** — `60 × 1.800 = 108.000`: semua dianggap harga kelompok kedua.
- **B salah** — `60 × 2.000 = 120.000`: semua dianggap harga kelompok pertama.
- **C salah** — `60 × 1.600 = 96.000`: harga rata-rata dibuat-buat. Umpan dekat, bukan hasil nyata.
- **D benar** — Jumlah bolpoin: `12 × 5 = 60`. Kotak pertama (4 kotak): `4 × 5 = 20`, hasil `20 × 2.000 = 40.000`. Kotak sisanya (8 kotak): `40`, hasil `40 × 1.800 = 72.000`. Total: `40.000 + 72.000 = 112.000`.
- **Konsep kunci:** Ubah cerita jadi beberapa kalimat kali; jumlahkan hasil perkalian tiap kelompok.
- **Langkah Penyelesaian:**
  1. Jumlah bolpoin: `12 × 5 = 60`
  2. Kelompok 2.000: `4 × 5 × 2.000 = 40.000`
  3. Kelompok 1.800: `8 × 5 × 1.800 = 72.000`
  4. Total: `40.000 + 72.000 = 112.000`

---

**79.** Manakah perhitungan yang **BENAR**?
- A. `(2³ + 2) ÷ 5 = 2`
- B. `(5 − 2)² + 3 = 10`
- C. `√144 ÷ (5 − 3) = 7`
- D. `6² ÷ 9 × 3 = 6`

**Kunci: A**
**Pembahasan:**
- **A benar** — `2³ = 8`, `8 + 2 = 10`, `10 ÷ 5 = 2`. Benar.
- **B salah** — `3² = 9`, `9 + 3 = 12`, bukan 10.
- **C salah** — `√144 = 12`, `5 − 3 = 2`, `12 ÷ 2 = 6`, bukan 7.
- **D salah** — `6² = 36`, `36 ÷ 9 = 4`, `4 × 3 = 12`, bukan 6.
- **Konsep kunci:** Kerjakan pangkat/akar dulu, kurung kedua, baru bagi dan kali berurutan.
- **Langkah Penyelesaian:**
  1. Cek A: `(8 + 2) ÷ 5 = 2` ✓
  2. Cek B: `9 + 3 = 12` ✗
  3. Cek C: `12 ÷ 2 = 6` ✗
  4. Cek D: `36 ÷ 9 × 3 = 12` ✗

---

**80.** Hitunglah: `{[6 + 9] ÷ 5 × 4 + 2} × 2 = ....`
- A. 14
- B. 28
- C. 15
- D. 56

**Kunci: B**
**Pembahasan:**
- **A salah** — `3 × 4 + 2 = 14`: perkalian `× 2` di luar kurawal dilupakan.
- **B benar** — Siku: `6 + 9 = 15`. Dalam kurawal, kiri-ke-kanan: `15 ÷ 5 = 3`, `3 × 4 = 12`, `12 + 2 = 14`. Akhir: `14 × 2 = 28`.
- **C salah** — Hanya `6 + 9 = 15`; sisa operasi diabaikan.
- **D salah** — `14 × 2 = 28` dikalikan 2 lagi: `28 × 2 = 56`.
- **Konsep kunci:** Dalam kurung, bagi dan kali sederajat dikerjakan kiri-ke-kanan sebelum tambah.
- **Langkah Penyelesaian:**
  1. Siku: `6 + 9 = 15`
  2. Bagi & kali: `15 ÷ 5 = 3`, `3 × 4 = 12`
  3. Kurawal: `12 + 2 = 14`
  4. Kali akhir: `14 × 2 = 28`

---

**81.** Hitunglah: `(2 + 3)³ − 3 × (2³ + 3²) = ....`
- A. 17
- B. 51
- C. 74
- D. 122

**Kunci: C**
**Pembahasan:**
- **A salah** — Hanya `2³ + 3² = 8 + 9 = 17` (isi kurung kedua).
- **B salah** — `3 × 17 = 51`: hanya hasil perkalian, `(2 + 3)³` dilupakan.
- **C benar** — Kurung pertama: `2 + 3 = 5`, `5³ = 125`. Kurung kedua: `2³ = 8`, `3² = 9`, `8 + 9 = 17`. Kali: `3 × 17 = 51`. Kurang: `125 − 51 = 74`.
- **D salah** — `125 − 3 = 122`: `× (2³ + 3²)` dilupakan, hanya `− 3` yang dikurangi.
- **Konsep kunci:** Selesaikan tiap kurung (dengan pangkat di dalamnya), lalu kali dan kurang.
- **Langkah Penyelesaian:**
  1. Kurung pertama: `2 + 3 = 5`, `5³ = 125`
  2. Kurung kedua: `2³ = 8`, `3² = 9`, `8 + 9 = 17`
  3. Kali: `3 × 17 = 51`
  4. Kurang: `125 − 51 = 74`

---

**82.** Hitunglah: `√(6² + 8²) ÷ 2 + 3³ = ....`
- A. 37
- B. 27
- C. 5
- D. 32

**Kunci: D**
**Pembahasan:**
- **A salah** — `10 + 27 = 37`: pembagian `÷ 2` dilupakan.
- **B salah** — Hanya `3³ = 27`; bagian akar diabaikan.
- **C salah** — Hanya `√(6² + 8²) ÷ 2 = 5`; `+ 3³` dilupakan.
- **D benar** — Dalam akar: `6² = 36`, `8² = 64`, jumlah `100`. Akar: `√100 = 10`. Bagi: `10 ÷ 2 = 5`. Pangkat: `3³ = 27`. Tambah: `5 + 27 = 32`.
- **Konsep kunci:** Triplet Pythagoras 6-8-10 membantu; ikuti urutan akar → bagi → pangkat → tambah.
- **Langkah Penyelesaian:**
  1. Dalam akar: `36 + 64 = 100`, `√100 = 10`
  2. Bagi: `10 ÷ 2 = 5`
  3. Pangkat: `3³ = 27`
  4. Tambah: `5 + 27 = 32`

---

**83.** Kebun Pak Hasan berukuran `(15 × 12)` m. **Separuh** kebun ditanami jagung. Dari bagian jagung, seluas `(2 × 3)` m² diambil untuk jalan. Luas daerah tanam jagung yang tersisa adalah ....
- A. 84 m²
- B. 90 m²
- C. 174 m²
- D. 45 m²

**Kunci: A**
**Pembahasan:**
- **A benar** — Luas kebun: `15 × 12 = 180`. Separuh untuk jagung: `180 ÷ 2 = 90`. Jalan: `2 × 3 = 6`. Sisa jagung: `90 − 6 = 84`.
- **B salah** — `180 ÷ 2 = 90`: luas jalan tidak dikurangkan.
- **C salah** — `180 − 6 = 174`: separuh bagian dilupakan.
- **D salah** — `180 ÷ 4 = 45`: membagi dengan 4, bukan separuh.
- **Konsep kunci:** Kalikan ukuran, bagi separuh, hitung jalan, lalu kurangkan — satu kalimat berurutan.
- **Langkah Penyelesaian:**
  1. Luas kebun: `15 × 12 = 180`
  2. Separuh jagung: `180 ÷ 2 = 90`
  3. Jalan: `2 × 3 = 6`
  4. Sisa: `90 − 6 = 84`

---

**84.** Hitunglah: `(2⁴ + 2³) × (3² − √9) = ....`
- A. 24
- B. 144
- C. 288
- D. 21

**Kunci: B**
**Pembahasan:**
- **A salah** — Hanya `2⁴ + 2³ = 16 + 8 = 24` (kurung pertama).
- **B benar** — Pangkat: `2⁴ = 16`, `2³ = 8`. Kurung kiri: `16 + 8 = 24`. Akar: `√9 = 3`, `3² = 9`. Kurung kanan: `9 − 3 = 6`. Kali: `24 × 6 = 144`.
- **C salah** — `√9 = 12` (salah akar), `9 − 12 = −3`, `24 × 12 = 288` (keliru).
- **D salah** — `24 − 3 = 21`: menguranginya alih-alih mengalikan `6`.
- **Konsep kunci:** Hitung pangkat dan akar di tiap kurung dulu, hasil keduanya baru dikalikan.
- **Langkah Penyelesaian:**
  1. Pangkat kiri: `2⁴ = 16`, `2³ = 8`, `16 + 8 = 24`
  2. Kanan: `3² = 9`, `√9 = 3`, `9 − 3 = 6`
  3. Kali: `24 × 6 = 144`

---

**85.** Tempatkan tanda kurung pada `36 ÷ 6 × 2` agar hasilnya **3**.
- A. `(36 ÷ 6) × 2`
- B. `36 ÷ 6 × (2)`
- C. `36 ÷ (6 × 2)`
- D. `(36 ÷ 6 × 2)`

**Kunci: C**
**Pembahasan:**
- **A salah** — `6 × 2 = 12`. Sama dengan tanpa kurung.
- **B salah** — `36 ÷ 6 × 2 = 12`. Kurung `(2)` tidak berpengaruh.
- **C benar** — Kurung dulu: `6 × 2 = 12`, lalu `36 ÷ 12 = 3`.
- **D salah** — `(36 ÷ 6 × 2) = 6 × 2 = 12`. Kurung pinggir tidak berpengaruh.
- **Konsep kunci:** Untuk membuat pembagian menghitung penyebut dulu, kalikan di dalam kurung.
- **Langkah Penyelesaian:**
  1. Pilih `36 ÷ (6 × 2)`
  2. Kurung dulu: `6 × 2 = 12`, lalu `36 ÷ 12 = 3`

---

**86.** Nilai dari `8 − x + 2x` ketika `x = 3` adalah ....
- A. 7
- B. 10
- C. 5
- D. 11

**Kunci: D**
**Pembahasan:**
- **A salah** — `8 − 3 + 2 = 7`: `2x` dianggap `2` (x tidak dikalikan).
- **B salah** — `(8 − x) × 2 = 10`: kurung dipasang keliru di `8 − x`.
- **C salah** — `8 − 6 + 3 = 5`: urutan dan tanda ditukar-tukar.
- **D benar** — `2x = 2 × 3 = 6`. Kiri-ke-kanan: `8 − 3 + 6 = 5 + 6 = 11`.
- **Konsep kunci:** Ganti x dengan 3, kalikan suku `2x` dulu, lalu kiri-ke-kanan.
- **Langkah Penyelesaian:**
  1. Substitusi: `8 − 3 + 2 × 3`
  2. Kali: `8 − 3 + 6`
  3. Kiri-ke-kanan: `5 + 6 = 11`

---

**87.** Ibu membuat **5 loyang** berisi **12 kue** setiap loyang. Sebanyak **`2²` kue** diberikan ke tetangga, lalu **`3 × 5` kue** dijual. Sisa kue adalah ....
- A. 41
- B. 56
- C. 45
- D. 79

**Kunci: A**
**Pembahasan:**
- **A benar** — Kalimat: `5 × 12 − 2² − 3 × 5`. Kali & pangkat dulu: `60 − 4 − 15 = 56 − 15 = 41`.
- **B salah** — `60 − 4 = 56`: kue yang dijual diabaikan.
- **C salah** — `60 − 15 = 45`: kue untuk tetangga diabaikan.
- **D salah** — `60 + 4 + 15 = 79`: semua "diberikan" dan "dijual" dianggap bertambah.
- **Konsep kunci:** Pangkat `2²` dihitung dulu, perkalian dua-duanya, lalu kurangkan berurutan.
- **Langkah Penyelesaian:**
  1. Kalimat: `5 × 12 − 2² − 3 × 5`
  2. Pangkat & kali: `60 − 4 − 15`
  3. Kiri-ke-kanan: `56 − 15 = 41`

---

**88.** Hitunglah: `{[2³ + 4²] × (5 − 3)} ÷ 4 + 6 = ....`
- A. 12
- B. 18
- C. 48
- D. 30

**Kunci: B**
**Pembahasan:**
- **A salah** — `{[2³ + 4²] × (5 − 3)} ÷ 4 = 12`, `+ 6` dilupakan.
- **B benar** — Siku: `2³ = 8`, `4² = 16`, `8 + 16 = 24`. Kurung biasa: `5 − 3 = 2`. Kurawal: `24 × 2 = 48`. Bagi: `48 ÷ 4 = 12`. Tambah: `12 + 6 = 18`.
- **C salah** — Hanya `{[2³ + 4²] × (5 − 3)} = 48`; `÷ 4` dan `+ 6` diabaikan.
- **D salah** — `24 + 6 = 30`: pembagian dilupakan.
- **Konsep kunci:** Buka kurung dari dalam, lalu bagi dan tambah di luar.
- **Langkah Penyelesaian:**
  1. Siku: `2³ = 8`, `4² = 16`, `8 + 16 = 24`
  2. Kurung biasa: `5 − 3 = 2`
  3. Kurawal: `24 × 2 = 48`
  4. Bagi & tambah: `48 ÷ 4 = 12`, `12 + 6 = 18`

---

**89.** Hitunglah: `(0,5 + 0,25) × 4² ÷ (3 − 1 + 0) = ....`
- A. 12
- B. 24
- C. 6
- D. 3

**Kunci: C**
**Pembahasan:**
- **A salah** — `0,75 × 16 = 12`, `÷ (3 − 1 + 0)` dilupakan.
- **B salah** — `12 × 2 = 24`: pembagian diubah menjadi perkalian dengan 2.
- **C benar** — Kurung kiri: `0,5 + 0,25 = 0,75`. Pangkat: `4² = 16`. Kurung kanan: `3 − 1 + 0 = 2`. Kali & bagi kiri-ke-kanan: `0,75 × 16 = 12`, `12 ÷ 2 = 6`.
- **D salah** — `12 ÷ 2 = 6`, lalu dibagi 2 lagi: `3`. Angka 2 dihitung ganda.
- **Konsep kunci:** Desimal dan kurung dua sisi — kerjakan keduanya dulu, lalu kali dan bagi.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `0,5 + 0,25 = 0,75`
  2. Pangkat: `4² = 16`
  3. Kurung kanan: `3 − 1 + 0 = 2`
  4. Kali & bagi: `0,75 × 16 = 12`, `12 ÷ 2 = 6`

---

**90.** Manakah perhitungan yang **SALAH**?
- A. `(3² − 1) × 5 = 40`
- B. `√(10² − 6²) = 8`
- C. `2 × (7 − 3)² = 32`
- D. `(4³ − 2³) ÷ 7 = 7`

**Kunci: D**
**Pembahasan:**
- **A benar** — `9 − 1 = 8`, `8 × 5 = 40`. Benar.
- **B benar** — `10² = 100`, `6² = 36`, `100 − 36 = 64`, `√64 = 8`. Benar.
- **C benar** — `7 − 3 = 4`, `4² = 16`, `2 × 16 = 32`. Benar.
- **D salah** — `4³ = 64`, `2³ = 8`, `64 − 8 = 56`, `56 ÷ 7 = 8`, bukan 7. Inilah yang salah.
- **Konsep kunci:** Setiap hasil diuji ulang dengan urutan yang benar; `(4³ − 2³) ÷ 7 = 8`.
- **Langkah Penyelesaian:**
  1. Cek A: `8 × 5 = 40` ✓
  2. Cek B: `√64 = 8` ✓
  3. Cek C: `2 × 16 = 32` ✓
  4. Cek D: `56 ÷ 7 = 8` (bukan 7) → D salah

---

**91.** Hitunglah: `√(144 + 25) − √(25 × 4) + 3² = ....`
- A. 12
- B. 32
- C. 22
- D. 6

**Kunci: A**
**Pembahasan:**
- **A benar** — Akar pertama: `144 + 25 = 169`, `√169 = 13`. Akar kedua: `25 × 4 = 100`, `√100 = 10`. Pangkat: `3² = 9`. Kiri-ke-kanan: `13 − 10 + 9 = 3 + 9 = 12`.
- **B salah** — `13 + 10 + 9 = 32`: pengurangan diubah jadi penjumlahan.
- **C salah** — `13 + 9 = 22`: `− 10` dilupakan.
- **D salah** — `13 − 10 + 3 = 6`: `3²` dianggap `3`.
- **Konsep kunci:** Isi dalam akar dihitung dulu (= kurung), lalu akar, pangkat, baru tambah/kurang.
- **Langkah Penyelesaian:**
  1. Akar pertama: `144 + 25 = 169`, `√169 = 13`
  2. Akar kedua: `25 × 4 = 100`, `√100 = 10`
  3. Pangkat: `3² = 9`
  4. Kiri-ke-kanan: `13 − 10 + 9 = 12`

---

**92.** Harga sebuah buku Rp25.000. Toko memberi **diskon Rp3.000** per buku, dan ada promo **beli 2 gratis 1**. Ayah membeli **6 buku**. Uang yang harus dibayar adalah ....
- A. Rp75.000
- B. Rp88.000
- C. Rp100.000
- D. Rp132.000

**Kunci: B**
**Pembahasan:**
- **A salah** — `3 buku × 25.000 = 75.000`: salah menghitung jumlah buku yang dibayar.
- **B benar** — Diskon: `25.000 − 3.000 = 22.000` per buku. Beli 6 dengan promo "beli 2 gratis 1" → bayar `4 buku`. Total: `4 × 22.000 = 88.000`.
- **C salah** — `4 × 25.000 = 100.000`: promo benar, diskon dilupakan.
- **D salah** — `6 × 22.000 = 132.000`: diskon benar, promo gratis dilupakan.
- **Konsep kunci:** Selesaikan diskon ("−"), lalu terapkan promo (bagi), baru kalikan jumlah bayar.
- **Langkah Penyelesaian:**
  1. Harga setelah diskon: `25.000 − 3.000 = 22.000`
  2. Promo: 6 buku = 2 paket, bayar `4` buku
  3. Total: `4 × 22.000 = 88.000`

---

**93.** Tempatkan tanda kurung pada `5 × 3 + 2 × 4` agar hasilnya **100**.
- A. `(5 × 3) + (2 × 4)`
- B. `5 × (3 + 2 × 4)`
- C. `5 × (3 + 2) × 4`
- D. `(5 × 3 + 2) × 4`

**Kunci: C**
**Pembahasan:**
- **A salah** — `15 + 8 = 23`. Sama dengan tanpa kurung.
- **B salah** — `5 × (3 + 8) = 5 × 11 = 55`.
- **C benar** — Kurung dulu: `3 + 2 = 5`, lalu `5 × 5 × 4 = 25 × 4 = 100`.
- **D salah** — `(15 + 2) × 4 = 17 × 4 = 68`.
- **Konsep kunci:** Kurung yang mengarahkan penjumlahan `3 + 2` menghasilkan kelipatan seratus.
- **Langkah Penyelesaian:**
  1. Pilih `5 × (3 + 2) × 4`
  2. Kurung dulu: `3 + 2 = 5`
  3. Kali: `5 × 5 × 4 = 100`

---

**94.** Hitunglah: `(2³)² ÷ 4² × 3 = ....`
- A. 16
- B. 48
- C. 8
- D. 12

**Kunci: D**
**Pembahasan:**
- **A salah** — `64 ÷ 4 = 16`: kuadrat pada `4²` dilupakan.
- **B salah** — `64 ÷ 4 = 16`, `16 × 3 = 48`: `4²` dianggap `4`, lalu dikali.
- **C salah** — Hanya `2³ = 8`; sisa operasi diabaikan.
- **D benar** — `(2³)² = 8² = 64`. Pangkat: `4² = 16`. Bagi & kali kiri-ke-kanan: `64 ÷ 16 = 4`, `4 × 3 = 12`.
- **Konsep kunci:** Kuadrat di luar kurung berlaku ke seluruh isi, lalu bagi dan kali berurutan.
- **Langkah Penyelesaian:**
  1. `(2³)² = 8² = 64`
  2. `4² = 16`
  3. Kiri-ke-kanan: `64 ÷ 16 = 4`, `4 × 3 = 12`

---

**95.** Sebuah ruangan berukuran **6 m × 5 m** akan dipasang keramik berukuran **1 m × 1 m**. Ternyata perlu **5 keramik cadangan** untuk mengganti keramik yang pecah saat pemasangan. Banyak keramik yang harus dibeli seluruhnya adalah ....
- A. 35
- B. 30
- C. 25
- D. 20

**Kunci: A**
**Pembahasan:**
- **A benar** — Luas lantai: `6 × 5 = 30` m², membutuhkan 30 keramik. Ditambah cadangan: `30 + 5 = 35`.
- **B salah** — `6 × 5 = 30`: keramik cadangan dilupakan.
- **C salah** — `6 × 5 − 5 = 25`: keramik cadangan malah dikurangkan.
- **D salah** — Umpan tebakan murni; angka 20 tidak muncul dari langkah sah mana pun.
- **Konsep kunci:** Luas lantai menentukan keramik utama; keramik cadangan ditambahkan, bukan dikurangkan.
- **Langkah Penyelesaian:**
  1. Luas lantai: `6 × 5 = 30` m² → 30 keramik
  2. Keramik cadangan: `5`
  3. Total dibeli: `30 + 5 = 35`

---

**96.** Hitunglah: `{6 + [2 × (5² − 3²)]} × (√16 − 2) = ....`
- A. 38
- B. 76
- C. 28
- D. 2

**Kunci: B**
**Pembahasan:**
- **A salah** — `{6 + 32} = 38`, lupa mengalikan `(√16 − 2)`.
- **B benar** — Kurung biasa: `5² = 25`, `3² = 9`, `25 − 9 = 16`. Siku: `2 × 16 = 32`. Kurawal: `6 + 32 = 38`. Kurung kedua: `√16 = 4`, `4 − 2 = 2`. Akhir: `38 × 2 = 76`.
- **C salah** — `(5 − 3)² = 4` (kuadrat didistribusikan keliru), `2 × 4 = 8`, `6 + 8 = 14`, `14 × 2 = 28`.
- **D salah** — Hanya `√16 − 2 = 2`; bagian lain diabaikan.
- **Konsep kunci:** Pangkat dalam kurung biasa dulu — `5² − 3² = 16`, bukan `(5 − 3)² = 4`.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `25 − 9 = 16`
  2. Siku: `2 × 16 = 32`
  3. Kurawal: `6 + 32 = 38`
  4. Kurung kedua: `√16 = 4`, `4 − 2 = 2`; akhir `38 × 2 = 76`

---

**97.** Tempatkan tanda kurung pada `10 − 4 ÷ 2 + 1` agar hasilnya **7**.
- A. `(10 − 4) ÷ 2 + 1`
- B. `10 − (4 ÷ 2) + 1`
- C. `10 − (4 ÷ 2 + 1)`
- D. `(10 − 4 ÷ 2 + 1)`

**Kunci: C**
**Pembahasan:**
- **A salah** — `6 ÷ 2 + 1 = 3 + 1 = 4`.
- **B salah** — `10 − 2 + 1 = 9`. Sama dengan tanpa kurung.
- **C benar** — Kurung dulu: `4 ÷ 2 = 2`, `2 + 1 = 3`, lalu `10 − 3 = 7`.
- **D salah** — `(10 − 4 ÷ 2 + 1) = 10 − 2 + 1 = 9`. Kurung pinggir tidak mengubah urutan.
- **Konsep kunci:** Untuk membuat semuanya setelah `−` dihitung dulu, kurung mencakup `4 ÷ 2 + 1`.
- **Langkah Penyelesaian:**
  1. Pilih `10 − (4 ÷ 2 + 1)`
  2. Kurung dulu: `4 ÷ 2 = 2`, `2 + 1 = 3`
  3. Kurang: `10 − 3 = 7`

---

**98.** Hitunglah: `(1 + 2)³ ÷ (1³ + 8) + √81 = ....`
- A. 3
- B. 27
- C. 9
- D. 12

**Kunci: D**
**Pembahasan:**
- **A salah** — `27 ÷ 9 = 3`, `+ √81` dilupakan.
- **B salah** — Hanya `(1 + 2)³ = 3³ = 27`; sisa operasi diabaikan.
- **C salah** — Hanya `1³ + 8 = 9` (atau `√81 = 9`); bagian lain diabaikan.
- **D benar** — Kurung kiri: `1 + 2 = 3`, `3³ = 27`. Kurung kanan: `1³ = 1`, `1 + 8 = 9`. Bagi: `27 ÷ 9 = 3`. Akar: `√81 = 9`. Tambah: `3 + 9 = 12`.
- **Konsep kunci:** Kedua kurung dihitung dulu (dengan pangkat di dalamnya), lalu bagi, lalu akar dan tambah.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `1 + 2 = 3`, `3³ = 27`
  2. Kurung kanan: `1³ = 1`, `1 + 8 = 9`
  3. Bagi: `27 ÷ 9 = 3`
  4. Akar & tambah: `√81 = 9`, `3 + 9 = 12`

---

**99.** Gudang berisi **40 kotak**, setiap kotak berisi **15 buku**. **Setengah** dari seluruh buku adalah buku cerita. Dari buku cerita, sebanyak **`3 × 2` buku** dipinjam. Sisa buku cerita adalah ....
- A. 294
- B. 300
- C. 588
- D. 150

**Kunci: A**
**Pembahasan:**
- **A benar** — Total buku: `40 × 15 = 600`. Buku cerita: `600 ÷ 2 = 300`. Dipinjam: `3 × 2 = 6`. Sisa: `300 − 6 = 294`.
- **B salah** — `600 ÷ 2 = 300`: buku yang dipinjam tidak dikurangkan.
- **C salah** — `600 − 12 = 588`: separuh bagian dilupakan, `3 × 2` dihitung `12`.
- **D salah** — `300 ÷ 2 = 150`: buku cerita dibagi dua lagi.
- **Konsep kunci:** Kalikan total, bagi dua, kalikan kecil, lalu kurangkan — ikuti urutan cerita.
- **Langkah Penyelesaian:**
  1. Total buku: `40 × 15 = 600`
  2. Buku cerita: `600 ÷ 2 = 300`
  3. Dipinjam: `3 × 2 = 6`
  4. Sisa: `300 − 6 = 294`

---

**100.** Hitunglah: `{[(3 + 2)³ − 5²] × 4} ÷ 10² = ....`
- A. 100
- B. 4
- C. 400
- D. 40

**Kunci: B**
**Pembahasan:**
- **A salah** — `(3 + 2)³ = 125`, `125 − 25 = 100`: `× 4` dan `÷ 10²` dilupakan.
- **B benar** — Kurung biasa: `3 + 2 = 5`, `5³ = 125`. Pangkat: `5² = 25`. Siku: `125 − 25 = 100`. Kurawal: `100 × 4 = 400`. `10² = 100`. Akhir: `400 ÷ 100 = 4`.
- **C salah** — `100 × 4 = 400`: pembagian dengan `10²` dilupakan.
- **D salah** — `400 ÷ 10 = 40`: dibagi `10`, bukan `10² = 100`.
- **Konsep kunci:** Buka kurung dari dalam dengan pangkat di tiap tingkat, lalu kali dan bagi di luar.
- **Langkah Penyelesaian:**
  1. Kurung biasa: `3 + 2 = 5`, `5³ = 125`
  2. Pangkat: `5² = 25`
  3. Siku: `125 − 25 = 100`
  4. Kurawal: `100 × 4 = 400`; `10² = 100`; akhir `400 ÷ 100 = 4`

---

## BAGIAN III · KUNCI & DISTRIBUSI

## Tabel Kunci 100 Soal

| 1. A | 2. A | 3. A | 4. B | 5. C |
|:----:|:----:|:----:|:----:|:----:|
| 6. A | 7. B | 8. C | 9. D | 10. D |
| 11. A | 12. B | 13. C | 14. D | 15. A |
| 16. B | 17. C | 18. D | 19. A | 20. B |
| 21. C | 22. D | 23. A | 24. B | 25. C |
| 26. D | 27. A | 28. B | 29. C | 30. D |
| 31. A | 32. B | 33. C | 34. D | 35. A |
| 36. B | 37. C | 38. D | 39. A | 40. B |
| 41. C | 42. D | 43. A | 44. B | 45. C |
| 46. D | 47. A | 48. B | 49. C | 50. D |

| 51. A | 52. B | 53. C | 54. D | 55. A |
|:-----:|:-----:|:-----:|:-----:|:-----:|
| 56. B | 57. C | 58. D | 59. A | 60. B |
| 61. C | 62. D | 63. A | 64. B | 65. C |
| 66. D | 67. A | 68. B | 69. C | 70. D |
| 71. A | 72. B | 73. C | 74. D | 75. A |
| 76. B | 77. C | 78. D | 79. A | 80. B |
| 81. C | 82. D | 83. A | 84. B | 85. C |
| 86. D | 87. A | 88. B | 89. C | 90. D |
| 91. A | 92. B | 93. C | 94. D | 95. A |
| 96. B | 97. C | 98. D | 99. A | 100. B |

## Distribusi Kunci

**A: 27 · B: 25 · C: 24 · D: 24**

Distribusi mendekati target balance 25/25/25/25 dengan toleransi ±5 (A sedikit di batas atas, C dan D sedikit di bawah). Tidak ada dominasi B; semua opsi terpakai cukup merata. Posisi kunci sengaja **diacak** antar tingkat (Prov/Nas) untuk menghindari pola yang bisa ditebak siswa.

## Strategi Belajar (untuk siswa)

1. **Hafalkan akronim KPKBTK / BODMAS / PEMDAS.** Tulis di atas kertas latihan setiap mulai.
2. **Sebelum menghitung, lingkari semua tanda kurung** dan beri nomor urut (1, 2, 3) sesuai kedalaman — paling dalam nomor 1.
3. **Salin ulang baris** setiap kali menyelesaikan satu langkah. Jangan loncat.
4. **Hafal `n²` dan `n³` untuk n = 2–10** serta pasangan akar seperti `√169 = 13`, `√225 = 15`. Soal tingkat Provinsi/Nasional hampir selalu memakainya.
5. **Waspada jebakan kiri-ke-kanan.** Kalau hasilmu sama dengan "menghitung dari kiri tanpa aturan", hampir pasti kunci negatif.
6. **Soal "nama kurung" (tempatkan kurung agar hasil ...)**: coba dua-duanya — kurung mana yang membuat operasi di dalamnya bisa menghasilkan bilangan "bagus".
7. **Soal "cari kesalahan":** periksa opsi satu per satu dengan hierarki; distractor biasanya adalah hasil kiri-ke-kanan atau `a² + b² = (a + b)²`.
8. **Pecahan & desimal di kurung**: samakan dulu ke satu bentuk (semua pecahan atau semua desimal) sebelum menghitung.
9. **Cek balik dengan estimasi**: bulatkan ke puluhan terdekat dan lihat apakah jawabanmu "masuk akal".

## Tabel Pemetaan Materi → Nomor Soal

| Subtopik | Nomor Soal |
|---|---|
| Kurung tunggal (perkalian/pembagian menunggu) | 3, 8, 10, 13, 16, 20, 22, 26, 33, 38, 48, 59 |
| Menempatkan kurung agar hasil sesuai | 6, 17, 24, 31, 37, 45, 55, 65, 74, 85, 93, 97 |
| Menemukan kesalahan ekspresi (analisis benar/salah) | 9, 21, 29, 42, 49, 60, 69, 79, 90 |
| Kuadrat / kubik / akar campuran | 4, 5, 11, 14, 19, 23, 28, 30, 32, 34, 40, 44, 47, 50, 52, 53, 59, 62, 64, 66, 67, 68, 71, 75, 77, 81, 82, 84, 87, 88, 91, 94, 96, 98, 100 |
| Sederajat kiri-ke-kanan (× ÷ atau + −) | 1, 2, 7, 12, 15, 18, 25, 33, 36, 41, 51, 57, 61, 70, 80, 86, 89, 94 |
| Kurung bersarang (nested) | 46, 51, 54, 57, 61, 65, 66, 70, 75, 80, 81, 88, 96, 100 |
| Pecahan / desimal | 20, 25, 41, 48, 56, 68, 72, 89, 98 |
| Soal cerita | 13, 27, 35, 43, 58, 63, 67, 73, 78, 83, 87, 92, 95, 99 |
| Mencari nilai variabel | 39, 47, 76, 86 |
| Multi-langkah panjang (4+ langkah) | 25, 32, 44, 53, 57, 61, 70, 75, 80, 88, 91, 100 |

---

*Selesai. Sub-bab 01b - Urutan Operasi (Sedang-Sulit).*