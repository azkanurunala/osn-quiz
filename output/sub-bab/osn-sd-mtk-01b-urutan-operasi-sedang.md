# OSN/KSN SD — MTK · Sub-Bab 01b: Urutan Operasi (Tingkat Sedang)

> **Profil**: 100 Prov = 100 soal PG
> **Fokus**: hierarki operasi (kurung, pangkat, kali/bagi, tambah/kurang)
> **Target**: SD 5-6 OSN/KSN

---

## BAGIAN I · KONSEP & STRATEGI

### 1. Urutan Operasi (KPKBTK / BODMAS / PEMDAS)

Saat kita melihat soal seperti `12 + 6 × 3 − 5`, ada **dua kemungkinan** kalau kita asal hitung:

- Kalau kita kerjakan dari kiri ke kanan saja: `(12 + 6) × 3 − 5 = 49`.
- Kalau kita kerjakan perkalian dulu: `12 + 18 − 5 = 25`.

Jawaban yang benar adalah **25**. Mengapa? Karena ada **aturan internasional** yang menentukan urutan operasi:

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

Bayangkan kamu di toko jajan. Kamu beli **3 donat** seharga Rp5.000 dan **2 cokelat** seharga Rp4.000. Kalimat matematikanya:

`3 × 5.000 + 2 × 4.000`

- Kalau kiri-ke-kanan tanpa hierarki: `(3 × 5.000 + 2) × 4.000` — hasilnya absurd dan tidak masuk akal.
- Kalau hierarki KPKBTK: kerjakan dua perkalian dulu → `15.000 + 8.000 = 23.000`. Masuk akal.

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
`50 − {3 × [2 + (18 ÷ 3)]}`
- Langkah 1 (kurung biasa): `18 ÷ 3 = 6` → `50 − {3 × [2 + 6]}`
- Langkah 2 (kurung siku): `2 + 6 = 8` → `50 − {3 × 8}`
- Langkah 3 (kurung kurawal): `3 × 8 = 24` → `50 − 24 = 26`. **Jawaban: 26.**

Di tingkat Provinsi, soal kurung bertingkat hampir pasti muncul — latih dari kurung **paling dalam** dulu.

### 4. Aturan "Kiri ke Kanan" untuk Kali/Bagi & Tambah/Kurang

Ini sering disalahpahami: **kali tidak lebih tinggi dari bagi**, juga **tambah tidak lebih tinggi dari kurang**. Mereka **sederajat** — kerjakan dari **kiri ke kanan** sesuai urutan munculnya.

Contoh 1: `72 ÷ 6 × 3`
- Benar: `(72 ÷ 6) × 3 = 12 × 3 = 36`. (kiri dulu)
- Salah: `72 ÷ (6 × 3) = 72 ÷ 18 = 4`. ✗

Contoh 2: `30 − 8 + 3`
- Benar: `(30 − 8) + 3 = 22 + 3 = 25`.
- Salah: `30 − (8 + 3) = 30 − 11 = 19`. ✗

### 5. Pangkat & Akar di Dalam Ekspresi

Pangkat dikerjakan **setelah kurung beres** dan **sebelum kali/bagi**:

`6 + 4² − 2 × 3 = 6 + 16 − 6 = 16`
`(6 + 4)² − 2 × 3 = 100 − 6 = 94` — kurung mengubah segalanya.
`√(25 + 11) + 4² = √36 + 16 = 6 + 16 = 22`.

Hati-hati dengan `3² × 4` = `9 × 4` = `36`, bukan `(3 × 4)² = 144`. Pangkat **hanya** untuk bilangan yang menempel padanya, kecuali ada kurung.

### 6. Sifat Distributif

Sifat distributif membantu menyederhanakan ekspresi:

- `a × (b + c) = a × b + a × c`
- `a × (b − c) = a × b − a × c`

Contoh: `4 × (2 + 3)² − 8 × 5` — kerjakan kurung dulu, bukan distribusi dulu. Tapi pada bentuk seperti `(a + b)²`, distribusi kuadrat TIDAK berlaku: `(a + b)² ≠ a² + b²`. Contoh: `(2 + 3)² = 25`, sedangkan `2² + 3² = 13`. Perbedaan inilah yang sering dipakai sebagai jebakan.

### 7. Kesalahan Umum yang Dipakai sebagai Distractor

| No | Kesalahan | Contoh |
|:--:|-----------|--------|
| 1 | Kiri-ke-kanan tanpa hierarki | `12 + 6 × 3 − 5 = 49` (seharusnya 25) |
| 2 | Mengerjakan tambah dulu daripada kurang | `30 − 8 + 3 = 19` (seharusnya 25) |
| 3 | Kali lebih dulu daripada bagi padahal bagi di kiri | `72 ÷ 6 × 3 = 4` (seharusnya 36) |
| 4 | Distribusi kuadrat: `(a+b)² = a²+b²` | `(2+3)² = 13` (seharusnya 25) |
| 5 | Lupa kurung dalam pada kurung bersarang | `50 − {3×[2+6]} = [2+6]` diabaikan |
| 6 | Anggap pangkat berlaku ke seluruh | `2 × 3² = 36` (seharusnya 18) |
| 7 | Menjumlahkan semua angka di soal cerita | "total" dianggap tambah semua tanpa urutan |

### 8. Strategi Mengerjakan & Soal Cerita

1. **Ubah soal cerita menjadi kalimat matematika dulu** — identifikasi setiap kelompok: `banyaknya × harga`, `baris × kolom`, `jam × kecepatan`.
2. **Lingkari setiap pasangan kurung** sebelum mulai, lalu beri nomor urut sesuai kedalaman.
3. **Hitung satu langkah, salin ulang baris** — jangan loncat banyak operasi sekaligus.
4. **Kurung paling dalam dulu**, ke luar.
5. **Pangkat segera setelah kurung** beres.
6. **Kali/bagi sederajat** — kiri ke kanan.
7. **Tambah/kurang sederajat** — kiri ke kanan.
8. **Cek balik** dengan perkiraan (estimasi) apakah jawaban masuk akal — terutama pada soal cerita uang, jarak, dan barang.

### 9. Tabel Cepat Pangkat untuk SD

| n | n² | n³ |
|:-:|:--:|:--:|
| 2 | 4  | 8  |
| 3 | 9  | 27 |
| 4 | 16 | 64 |
| 5 | 25 | 125 |
| 6 | 36 | 216 |
| 8 | 64 | 512 |
| 9 | 81 | 729 |
| 10| 100| 1000|
| 12| 144| 1728|

Hafalkan 2² hingga 6², 8², 9², 10², 12², dan 2³ hingga 6³ — soal pangkat di tingkat Provinsi hampir selalu pakai bilangan kecil ini.

---

## BAGIAN II · 100 SOAL PG

## PROV · Soal 1-100 (Tingkat Provinsi, C3-C4)
*Campuran operasi & eksponen, kurung bertingkat, sifat distributif, dan soal cerita konteks gabungan — tiap soal menuntut analisis 2 langkah.*

**1.** Hitunglah: `12 + 6 × 3 − 5 = ....`
- A. 49
- B. 25
- C. 30
- D. 36

**Kunci: B**
**Pembahasan:**
- **A salah** — Kiri-ke-kanan tanpa hierarki: `(12+6) × 3 − 5 = 49`. Kesalahan yang paling umum.
- **B benar** — Kali dulu: `6 × 3 = 18`, lalu kiri-ke-kanan: `12 + 18 − 5 = 30 − 5 = 25`.
- **C salah** — Lupa `− 5`: `12 + 18 = 30`.
- **D salah** — Mengambil `12 × 3 = 36`, mengabaikan `+ 6` dan `− 5`.
- **Konsep kunci:** Pada `12 + 6 × 3 − 5`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Kali dulu: `6 × 3 = 18`
  2. Kiri-ke-kanan: `12 + 18 − 5 = 30 − 5 = 25`

---

**2.** Hitunglah: `45 − 3 × 8 + 2 = ....`
- A. 21
- B. 15
- C. 23
- D. 338

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `+ 2`: `45 − 24 = 21`.
- **B salah** — Menghubungkan `+2` ke dalam kurung: `45 − 3 × (8 + 2) = 45 − 30 = 15`.
- **C benar** — Kali dulu: `3 × 8 = 24`, lalu kiri-ke-kanan: `45 − 24 + 2 = 21 + 2 = 23`.
- **D salah** — Kiri-ke-kanan total: `(45−3) × 8 + 2 = 42 × 8 + 2 = 338`.
- **Konsep kunci:** Pada `45 − 3 × 8 + 2`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Kali dulu: `3 × 8 = 24`
  2. Kiri-ke-kanan: `45 − 24 + 2 = 21 + 2 = 23`

---

**3.** Hitunglah: `(10 − 3) × 4 + 6 = ....`
- A. 34
- B. 4
- C. 22
- D. 17

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `10 − 3 = 7`, kali: `7 × 4 = 28`, lalu `28 + 6 = 34`.
- **B salah** — Mengabaikan kurung: `10 − 3 × 4 + 6 = 10 − 12 + 6 = 4`.
- **C salah** — Salah tanda: `28 − 6 = 22` (menganggap `+6` menjadi `−6`).
- **D salah** — Menjumlahkan semua angka: `7 + 4 + 6 = 17`, lupa bahwa `× 4` tidak boleh ditambah begitu saja.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(10 − 3) × 4 + 6` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `10 − 3 = 7`
  2. Kali: `7 × 4 = 28`
  3. Tambah: `28 + 6 = 34`

---

**4.** Hitunglah: `80 ÷ (5 × 4) + 6 = ....`
- A. 70
- B. 4
- C. 8
- D. 10

**Kunci: D**
**Pembahasan:**
- **A salah** — Mengabaikan kurung: `80 ÷ 5 × 4 + 6 = 16 × 4 + 6 = 70`.
- **B salah** — Lupa `+ 6`: `80 ÷ 20 = 4`.
- **C salah** — Salah bagi: `80 ÷ 40 = 2`, lalu `2 + 6 = 8`.
- **D benar** — Kurung dulu: `5 × 4 = 20`, lalu `80 ÷ 20 = 4`, lalu `4 + 6 = 10`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `80 ÷ (5 × 4) + 6` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `5 × 4 = 20`
  2. Bagi: `80 ÷ 20 = 4`
  3. Tambah: `4 + 6 = 10`

---

**5.** Hitunglah: `6 + 4² − 2 × 3 = ....`
- A. 94
- B. 8
- C. 16
- D. 4

**Kunci: C**
**Pembahasan:**
- **A salah** — Pangkat dianggap meliputi seluruh kiri: `(6 + 4)² − 2 × 3 = 100 − 6 = 94`.
- **B salah** — Salah hafal `4² = 8` (mengalikan 4 dengan 2): `6 + 8 − 6 = 8`.
- **C benar** — Pangkat dulu: `4² = 16`, kali: `2 × 3 = 6`, lalu kiri-ke-kanan: `6 + 16 − 6 = 16`.
- **D salah** — Lupa pangkat: `6 + 4 − 6 = 4`.
- **Konsep kunci:** Pangkat atau akar pada `6 + 4² − 2 × 3` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `4² = 16`
  2. Kali: `2 × 3 = 6`
  3. Kiri-ke-kanan: `6 + 16 − 6 = 16`

---

**6.** Hitunglah: `(2 × 3)² + 10 = ....`
- A. 46
- B. 28
- C. 36
- D. 22

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `2 × 3 = 6`, pangkat: `6² = 36`, lalu `36 + 10 = 46`.
- **B salah** — Pangkat hanya untuk 3: `2 × 3² + 10 = 2 × 9 + 10 = 28`.
- **C salah** — Lupa `+ 10`: `(2 × 3)² = 36`.
- **D salah** — Anggap `6² = 12` (kuadrat = kali dua): `12 + 10 = 22`.
- **Konsep kunci:** Pangkat atau akar pada `(2 × 3)² + 10` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `2 × 3 = 6`
  2. Pangkat: `6² = 36`
  3. Tambah: `36 + 10 = 46`

---

**7.** Hitunglah: `100 − [30 + (15 − 5)] = ....`
- A. 45
- B. 80
- C. 55
- D. 60

**Kunci: D**
**Pembahasan:**
- **A salah** — Distribusi tanda minus keliru ke seluruh: `100 − 30 − 15 − 10 = 45`.
- **B salah** — Salah tanda saat membuka kurung: `100 − 30 + 15 − 5 = 80`.
- **C salah** — Lupa `− 5` di dalam kurung dalam: `100 − (30 + 15) = 55`.
- **D benar** — Paling dalam dulu: `15 − 5 = 10`, lalu kurung siku: `30 + 10 = 40`, akhir: `100 − 40 = 60`.
- **Konsep kunci:** Pada kurung bersarang seperti `100 − [30 + (15 − 5)]`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam dulu: `15 − 5 = 10`
  2. Kurung siku: `30 + 10 = 40`
  3. Akhir: `100 − 40 = 60`

---

**8.** Hitunglah: `7 × 5 + 30 ÷ 3 × 2 = ....`
- A. 40
- B. 55
- C. 45
- D. 65

**Kunci: B**
**Pembahasan:**
- **A salah** — Menghubungkan bgian kanan secara keliru: `7×5 + 30 ÷ (3×2) = 35 + 5 = 40`.
- **B benar** — Kali & bagi dulu: `7×5 = 35`, `30÷3 = 10`, `10×2 = 20`, lalu `35 + 20 = 55`.
- **C salah** — `30 ÷ 3 = 10`, lalu berhenti di `35 + 10 = 45` (lupa `× 2`).
- **D salah** — Lupa `÷ 3` dan `× 2`: `7 × 5 + 30 = 65`.
- **Konsep kunci:** Operasi yang sederajat pada `7 × 5 + 30 ÷ 3 × 2` (kali & bagi) dikerjakan berurutan dari kiri ke kanan, sebelum tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Kali & bagi dulu: `7×5 = 35`, `30÷3 = 10`, `10×2 = 20`
  2. Tambah: `35 + 20 = 55`

---

**9.** Hitunglah: `(9 + 3) × (8 ÷ 2) − 5 = ....`
- A. 43
- B. 53
- C. 67
- D. 16

**Kunci: A**
**Pembahasan:**
- **A benar** — Dua kurung dulu: `9 + 3 = 12`, `8 ÷ 2 = 4`, kali: `12 × 4 = 48`, lalu `48 − 5 = 43`.
- **B salah** — Salah tanda: `48 + 5 = 53` (menganggap `− 5` menjadi `+ 5`).
- **C salah** — Mengganti `÷ 2` dengan `− 2` di kurung kedua: `(9+3) × (8−2) − 5 = 12 × 6 − 5 = 67`.
- **D salah** — Mengabaikan semua kurung: `9 + 3 × 8 ÷ 2 − 5 = 9 + 12 − 5 = 16`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(9 + 3) × (8 ÷ 2) − 5` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `9 + 3 = 12`, `8 ÷ 2 = 4`
  2. Kali: `12 × 4 = 48`
  3. Kurang: `48 − 5 = 43`

---

**10.** Hitunglah: `25 + 3 × 7 − 4 × 2 = ....`
- A. 46
- B. 34
- C. 38
- D. −4

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa suku `− 4 × 2`: `25 + 21 = 46`.
- **B salah** — Salah hafal `4 × 2 = 12`: `25 + 21 − 12 = 34`.
- **C benar** — Dua perkalian dulu: `3×7 = 21`, `4×2 = 8`, lalu kiri-ke-kanan: `25 + 21 − 8 = 38`.
- **D salah** — Salah tanda: `25 − 3 × 7 − 4 × 2 = 25 − 21 − 8 = −4`.
- **Konsep kunci:** Pada `25 + 3 × 7 − 4 × 2`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Dua perkalian dulu: `3×7 = 21`, `4×2 = 8`
  2. Kiri-ke-kanan: `25 + 21 − 8 = 38`

---

**11.** Hitunglah: `72 ÷ (6 + 2) × 3 = ....`
- A. 18
- B. 12
- C. 3
- D. 27

**Kunci: D**
**Pembahasan:**
- **A salah** — Mengabaikan kurung: `72 ÷ 6 + 2 × 3 = 12 + 6 = 18`.
- **B salah** — Lupa mengalikan: `72 ÷ 8 = 9`, lalu `9 + 3 = 12`.
- **C salah** — Mengalikan isi kurung terlebih dahulu: `72 ÷ (8 × 3) = 72 ÷ 24 = 3`.
- **D benar** — Kurung dulu: `6 + 2 = 8`, lalu kiri-ke-kanan: `72 ÷ 8 = 9`, `9 × 3 = 27`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `72 ÷ (6 + 2) × 3` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `6 + 2 = 8`
  2. Kiri-ke-kanan: `72 ÷ 8 = 9`
  3. Kali: `9 × 3 = 27`

---

**12.** Hitunglah: `7 + 2 × (5 + 1)² ÷ 3 = ....`
- A. 43
- B. 31
- C. 24
- D. 11

**Kunci: B**
**Pembahasan:**
- **A salah** — Berhenti di `(5+1)² = 36`, lalu `7 + 36 = 43` (lupa `× 2 ÷ 3`).
- **B benar** — Kurung dulu: `5 + 1 = 6`, pangkat: `6² = 36`, lalu kiri-ke-kanan: `2 × 36 = 72`, `72 ÷ 3 = 24`, akhirnya `7 + 24 = 31`.
- **C salah** — Lupa `+ 7` di depan: `2 × 36 ÷ 3 = 24`.
- **D salah** — Lupa kuadrat: `7 + 2 × 6 ÷ 3 = 7 + 4 = 11`.
- **Konsep kunci:** Pangkat atau akar pada `7 + 2 × (5 + 1)² ÷ 3` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `5 + 1 = 6`, pangkat: `6² = 36`
  2. Kali & bagi kiri-ke-kanan: `2 × 36 = 72`, `72 ÷ 3 = 24`
  3. Tambah: `7 + 24 = 31`

---

**13.** Hitunglah: `125 − 4 × (3² + 6) = ....`
- A. 95
- B. 77
- C. 65
- D. 89

**Kunci: C**
**Pembahasan:**
- **A salah** — Mengabaikan kurung sebagian: `125 − 4 × 3² + 6 = 125 − 36 + 6 = 95`.
- **B salah** — Salah hafal `3² = 6`: `125 − 4 × 12 = 125 − 48 = 77`.
- **C benar** — Pangkat dulu dalam kurung: `3² = 9`, kurung: `9 + 6 = 15`, kali: `4 × 15 = 60`, lalu `125 − 60 = 65`.
- **D salah** — Lupa `+ 6` di dalam kurung: `125 − 4 × 9 = 125 − 36 = 89`.
- **Konsep kunci:** Pangkat atau akar pada `125 − 4 × (3² + 6)` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `3² = 9`
  2. Kurung: `9 + 6 = 15`
  3. Kali: `4 × 15 = 60`, lalu `125 − 60 = 65`

---

**14.** Hitunglah: `(6 + 4)² − (5 × 3) = ....`
- A. 85
- B. 5
- C. 100
- D. 37

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung pertama: `6 + 4 = 10`, pangkat: `10² = 100`, kurung kedua: `5 × 3 = 15`, lalu `100 − 15 = 85`.
- **B salah** — Anggap kuadrat = kali dua: `(6+4)×2 − 15 = 20 − 15 = 5`.
- **C salah** — Lupa kurung kedua: `(6 + 4)² = 100`.
- **D salah** — Mendistribusikan kuadrat: `6² + 4² − 15 = 36 + 16 − 15 = 37`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(6 + 4)² − (5 × 3)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung pertama: `6 + 4 = 10`, pangkat: `10² = 100`
  2. Kurung kedua: `5 × 3 = 15`
  3. Kurang: `100 − 15 = 85`

---

**15.** Hitunglah: `√(25 + 11) + 4² = ....`
- A. 32
- B. 22
- C. 14
- D. 10

**Kunci: B**
**Pembahasan:**
- **A salah** — Salah memecah akar: `√25 + 11 + 16 = 5 + 11 + 16 = 32`.
- **B benar** — Dalam akar dulu: `25 + 11 = 36`, akar: `√36 = 6`, pangkat: `4² = 16`, lalu `6 + 16 = 22`.
- **C salah** — Salah hafal `4² = 8`: `6 + 8 = 14`.
- **D salah** — Lupa pangkat: `6 + 4 = 10`.
- **Konsep kunci:** Pangkat atau akar pada `√(25 + 11) + 4²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Dalam akar dulu: `25 + 11 = 36`, akar: `√36 = 6`
  2. Pangkat: `4² = 16`
  3. Tambah: `6 + 16 = 22`

---

**16.** Hitunglah: `2³ × 5 − 4 × 3 = ....`
- A. 36
- B. 18
- C. 108
- D. 28

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `× 3`: `2³ × 5 − 4 = 40 − 4 = 36`.
- **B salah** — Anggap `2³ = 6`: `6 × 5 − 4 × 3 = 30 − 12 = 18`.
- **C salah** — Kiri-ke-kanan: `(2³ × 5 − 4) × 3 = (40 − 4) × 3 = 108`.
- **D benar** — Pangkat dulu: `2³ = 8`, lalu kali: `8 × 5 = 40`, `4 × 3 = 12`, lalu `40 − 12 = 28`.
- **Konsep kunci:** Pangkat atau akar pada `2³ × 5 − 4 × 3` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `2³ = 8`
  2. Dua perkalian: `8 × 5 = 40`, `4 × 3 = 12`
  3. Kurang: `40 − 12 = 28`

---

**17.** Hitunglah: `48 ÷ 6 × 3 + 5 = ....`
- A. 29
- B. 24
- C. 16
- D. 39

**Kunci: A**
**Pembahasan:**
- **A benar** — Kiri-ke-kanan: `48 ÷ 6 = 8`, `8 × 3 = 24`, lalu `24 + 5 = 29`.
- **B salah** — Lupa `+ 5`: `48 ÷ 6 × 3 = 24`.
- **C salah** — Mengubah `× 3` menjadi `+ 3`: `8 + 3 + 5 = 16`.
- **D salah** — Kiri-ke-kanan keliru: `(48 ÷ 6 + 5) × 3 = 13 × 3 = 39`.
- **Konsep kunci:** Operasi yang sederajat pada `48 ÷ 6 × 3 + 5` (kali & bagi) dikerjakan berurutan dari kiri ke kanan, sebelum tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Kiri-ke-kanan: `48 ÷ 6 = 8`, `8 × 3 = 24`
  2. Tambah: `24 + 5 = 29`

---

**18.** Hitunglah: `9 × (11 − 6) − 15 ÷ 3 = ....`
- A. 45
- B. 30
- C. 40
- D. 50

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `− 15 ÷ 3`: `9 × 5 = 45`.
- **B salah** — Lupa `÷ 3`: `9 × 5 − 15 = 45 − 15 = 30`.
- **C benar** — Kurung dulu: `11 − 6 = 5`, lalu `9 × 5 = 45`, `15 ÷ 3 = 5`, lalu `45 − 5 = 40`.
- **D salah** — Salah tanda: `45 + 5 = 50` (menganggap `− 15 ÷ 3` menjadi `+ 5`).
- **Konsep kunci:** Soal berlangkah banyak seperti `9 × (11 − 6) − 15 ÷ 3` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `11 − 6 = 5`
  2. Kali & bagi: `9 × 5 = 45`, `15 ÷ 3 = 5`
  3. Kurang: `45 − 5 = 40`

---

**19.** Hitunglah: `(14 + 10) ÷ (8 − 4) + 3² = ....`
- A. 33
- B. 15
- C. 6
- D. 12

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `÷ 4`: `24 + 9 = 33`.
- **B benar** — Dua kurung dulu: `14 + 10 = 24`, `8 − 4 = 4`, bagi: `24 ÷ 4 = 6`, pangkat: `3² = 9`, lalu `6 + 9 = 15`.
- **C salah** — Lupa `+ 3²`: `24 ÷ 4 = 6`.
- **D salah** — Anggap kuadrat = kali dua: `6 + 6 = 12`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(14 + 10) ÷ (8 − 4) + 3²` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `14 + 10 = 24`, `8 − 4 = 4`
  2. Bagi: `24 ÷ 4 = 6`
  3. Pangkat: `3² = 9`, lalu `6 + 9 = 15`

---

**20.** Hitunglah: `200 − 5 × (3² + 5) = ....`
- A. 155
- B. 140
- C. 70
- D. 130

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `+ 5` di dalam kurung: `200 − 5 × 9 = 200 − 45 = 155`.
- **B salah** — Salah jumlah dalam kurung: `3² + 5 = 12` (salah hitung `9 + 5 = 14`), lalu `200 − 5 × 12 = 140`.
- **C salah** — Berhenti di `5 × 14 = 70`, lupa `200 −`.
- **D benar** — Pangkat dulu: `3² = 9`, kurung: `9 + 5 = 14`, kali: `5 × 14 = 70`, lalu `200 − 70 = 130`.
- **Konsep kunci:** Pangkat atau akar pada `200 − 5 × (3² + 5)` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `3² = 9`
  2. Kurung: `9 + 5 = 14`
  3. Kali: `5 × 14 = 70`, lalu `200 − 70 = 130`

---

**21.** Hitunglah: `25 ÷ 5 × (3 + 4)² − 10 = ....`
- A. 25
- B. 245
- C. 235
- D. 49

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa kuadrat: `25 ÷ 5 × 7 − 10 = 35 − 10 = 25`.
- **B salah** — Lupa `− 10`: `25 ÷ 5 × 49 = 245`.
- **C benar** — Kurung dulu: `3 + 4 = 7`, pangkat: `7² = 49`, kiri-ke-kanan: `25 ÷ 5 = 5`, `5 × 49 = 245`, lalu `245 − 10 = 235`.
- **D salah** — Berhenti di `(3 + 4)² = 49`, lupa semua operasi lain.
- **Konsep kunci:** Pangkat atau akar pada `25 ÷ 5 × (3 + 4)² − 10` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `3 + 4 = 7`, pangkat: `7² = 49`
  2. Kiri-ke-kanan: `25 ÷ 5 = 5`, `5 × 49 = 245`
  3. Kurang: `245 − 10 = 235`

---

**22.** Hitunglah: `144 ÷ 12 + 3 × (10 − 1) = ....`
- A. 39
- B. 27
- C. 135
- D. 42

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `10 − 1 = 9`, lalu bagi & kali: `144 ÷ 12 = 12`, `3 × 9 = 27`, lalu `12 + 27 = 39`.
- **B salah** — Lupa `144 ÷ 12`: `3 × 9 = 27`.
- **C salah** — Kiri-ke-kanan: `(144 ÷ 12 + 3) × (10 − 1) = 15 × 9 = 135`.
- **D salah** — Lupa `− 1` di dalam kurung: `144 ÷ 12 + 3 × 10 = 12 + 30 = 42`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `144 ÷ 12 + 3 × (10 − 1)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `10 − 1 = 9`
  2. Bagi & kali: `144 ÷ 12 = 12`, `3 × 9 = 27`
  3. Tambah: `12 + 27 = 39`

---

**23.** Hitunglah: `3² + 4² − 2 × 5 = ....`
- A. 25
- B. 39
- C. 35
- D. 15

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `− 2 × 5`: `9 + 16 = 25`.
- **B salah** — Mendistribusikan kuadrat: `(3 + 4)² − 2 × 5 = 49 − 10 = 39`.
- **C salah** — Salah tanda: `9 + 16 + 10 = 35` (menganggap `− 2 × 5` menjadi `+ 10`).
- **D benar** — Pangkat masing-masing dulu: `3² = 9`, `4² = 16`, kali: `2 × 5 = 10`, lalu kiri-ke-kanan: `9 + 16 − 10 = 15`.
- **Konsep kunci:** Pangkat atau akar pada `3² + 4² − 2 × 5` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat masing-masing: `3² = 9`, `4² = 16`
  2. Kali: `2 × 5 = 10`
  3. Kiri-ke-kanan: `9 + 16 − 10 = 15`

---

**24.** Hitunglah: `(5 × 3)² ÷ (4 + 1) − 7 = ....`
- A. 45
- B. 38
- C. 2
- D. 52

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `− 7`: `(5 × 3)² ÷ 5 = 225 ÷ 5 = 45`.
- **B benar** — Kurung kiri: `5 × 3 = 15`, pangkat: `15² = 225`, kurung kanan: `4 + 1 = 5`, bagi: `225 ÷ 5 = 45`, lalu `45 − 7 = 38`.
- **C salah** — Kuadrat hanya untuk 3: `5 × 3² = 45`, lalu `45 ÷ 5 − 7 = 2`.
- **D salah** — Salah tanda: `45 + 7 = 52`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(5 × 3)² ÷ (4 + 1) − 7` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `5 × 3 = 15`, pangkat: `15² = 225`
  2. Kurung kanan: `4 + 1 = 5`, bagi: `225 ÷ 5 = 45`
  3. Kurang: `45 − 7 = 38`

---

**25.** Hitunglah: `90 − 8 × 2 + 3² = ....`
- A. 74
- B. 173
- C. 83
- D. 65

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `+ 3²`: `90 − 16 = 74`.
- **B salah** — Kiri-ke-kanan: `(90 − 8) × 2 + 9 = 164 + 9 = 173`.
- **C benar** — Kali dulu: `8 × 2 = 16`, pangkat: `3² = 9`, lalu kiri-ke-kanan: `90 − 16 + 9 = 74 + 9 = 83`.
- **D salah** — Mengerjakan `8 × 2 + 3² = 25` lebih dulu, lalu `90 − 25 = 65`.
- **Konsep kunci:** Pangkat atau akar pada `90 − 8 × 2 + 3²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kali: `8 × 2 = 16`, pangkat: `3² = 9`
  2. Kiri-ke-kanan: `90 − 16 + 9 = 83`

---

**26.** Hitunglah: `(5 + 7) × (10 − 6) ÷ 4 = ....`
- A. 12
- B. 48
- C. 16
- D. 8

**Kunci: A**
**Pembahasan:**
- **A benar** — Dua kurung dulu: `5 + 7 = 12`, `10 − 6 = 4`, lalu kiri-ke-kanan: `12 × 4 = 48`, `48 ÷ 4 = 12`.
- **B salah** — Lupa `÷ 4`: `12 × 4 = 48`.
- **C salah** — Mengubah `× 4` menjadi `+ 4`: `12 + 4 = 16`.
- **D salah** — Salah bagi: `48 ÷ 6 = 8` (membagi pakai `10 − 6`).
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(5 + 7) × (10 − 6) ÷ 4` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `5 + 7 = 12`, `10 − 6 = 4`
  2. Kiri-ke-kanan: `12 × 4 = 48`, `48 ÷ 4 = 12`

---

**27.** Hitunglah: `50 − {3 × [2 + (18 ÷ 3)]} = ....`
- A. 24
- B. 26
- C. 8
- D. 32

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `50 −`: `3 × 8 = 24`.
- **B benar** — Paling dalam: `18 ÷ 3 = 6`, kurung siku: `2 + 6 = 8`, kurung kurawal: `3 × 8 = 24`, lalu `50 − 24 = 26`.
- **C salah** — Berhenti di isi kurung siku: `2 + 6 = 8`, lupa `3 ×` dan `50 −`.
- **D salah** — Lupa `+ 2` di dalam kurung siku: `50 − 3 × 6 = 32`.
- **Konsep kunci:** Pada kurung bersarang seperti `50 − {3 × [2 + (18 ÷ 3)]}`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `18 ÷ 3 = 6`
  2. Kurung siku: `2 + 6 = 8`
  3. Kurung kurawal: `3 × 8 = 24`, lalu `50 − 24 = 26`

---

**28.** Hitunglah: `(12 − 4) × (6 + 2) − 5² = ....`
- A. 64
- B. 25
- C. 89
- D. 39

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `− 5²`: `(12 − 4) × (6 + 2) = 8 × 8 = 64`.
- **B salah** — Berhenti di `5² = 25`, lupa operasi lainnya.
- **C salah** — Salah tanda: `64 + 25 = 89`.
- **D benar** — Dua kurung dulu: `12 − 4 = 8`, `6 + 2 = 8`, kali: `8 × 8 = 64`, pangkat: `5² = 25`, lalu `64 − 25 = 39`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(12 − 4) × (6 + 2) − 5²` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `12 − 4 = 8`, `6 + 2 = 8`
  2. Kali: `8 × 8 = 64`
  3. Pangkat: `5² = 25`, lalu `64 − 25 = 39`

---

**29.** Hitunglah: `45 + 3 × (20 ÷ 4)² = ....`
- A. 75
- B. 60
- C. 120
- D. 25

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `+ 45`: `3 × 25 = 75`.
- **B salah** — Lupa kuadrat: `45 + 3 × 5 = 45 + 15 = 60`.
- **C benar** — Kurung dulu: `20 ÷ 4 = 5`, pangkat: `5² = 25`, kali: `3 × 25 = 75`, lalu `45 + 75 = 120`.
- **D salah** — Berhenti di `(20 ÷ 4)² = 25`, lupa `45 + 3 ×`.
- **Konsep kunci:** Pangkat atau akar pada `45 + 3 × (20 ÷ 4)²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `20 ÷ 4 = 5`, pangkat: `5² = 25`
  2. Kali: `3 × 25 = 75`
  3. Tambah: `45 + 75 = 120`

---

**30.** Hitunglah: `3 + 6 × 4 − 2 × 5 = ....`
- A. 17
- B. 27
- C. 25
- D. 90

**Kunci: A**
**Pembahasan:**
- **A benar** — Dua perkalian dulu: `6 × 4 = 24`, `2 × 5 = 10`, lalu kiri-ke-kanan: `3 + 24 − 10 = 17`.
- **B salah** — Lupa `− 2 × 5`: `3 + 24 = 27`.
- **C salah** — Lupa `× 5` pada suku terakhir: `3 + 24 − 2 = 25`.
- **D salah** — Kiri-ke-kanan tanpa hierarki: `(3+6) × (4−2) × 5 = 9 × 2 × 5 = 90`.
- **Konsep kunci:** Pada `3 + 6 × 4 − 2 × 5`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Dua perkalian dulu: `6 × 4 = 24`, `2 × 5 = 10`
  2. Kiri-ke-kanan: `3 + 24 − 10 = 17`

---

**31.** Hitunglah: `√144 − √49 + 3² = ....`
- A. 5
- B. 21
- C. 11
- D. 14

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `+ 3²`: `12 − 7 = 5`.
- **B salah** — Lupa `− √49`: `12 + 9 = 21`.
- **C salah** — Anggap kuadrat = kali dua: `12 − 7 + 6 = 11`.
- **D benar** — Akar & pangkat dulu: `√144 = 12`, `√49 = 7`, `3² = 9`, lalu kiri-ke-kanan: `12 − 7 + 9 = 14`.
- **Konsep kunci:** Pangkat atau akar pada `√144 − √49 + 3²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Akar & pangkat dulu: `√144 = 12`, `√49 = 7`, `3² = 9`
  2. Kiri-ke-kanan: `12 − 7 + 9 = 14`

---

**32.** Hitunglah: `(3 × 4 + 2) ÷ (10 − 8) = ....`
- A. 14
- B. 7
- C. 13
- D. 9

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `÷ (10 − 8)`: `3 × 4 + 2 = 14`.
- **B benar** — Kurung kiri: `3 × 4 + 2 = 12 + 2 = 14`, kurung kanan: `10 − 8 = 2`, lalu `14 ÷ 2 = 7`.
- **C salah** — Salah urutan: `3 × 4 = 12`, lalu `12 + (2 ÷ 2) = 13` (indikator: `2` dibagi `10 − 8`).
- **D salah** — Kurung pertama salah: `3 × (4 + 2) = 18`, lalu `18 ÷ 2 = 9`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(3 × 4 + 2) ÷ (10 − 8)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `3 × 4 + 2 = 14`
  2. Kurung kanan: `10 − 8 = 2`, lalu `14 ÷ 2 = 7`

---

**33.** Hitunglah: `4 × (2 + 3)² − 8 × 5 = ....`
- A. 60
- B. 100
- C. 40
- D. 20

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `2 + 3 = 5`, pangkat: `5² = 25`, kali: `4 × 25 = 100`, suku kedua: `8 × 5 = 40`, lalu `100 − 40 = 60`.
- **B salah** — Lupa `− 8 × 5`: `4 × 25 = 100`.
- **C salah** — Berhenti di `8 × 5 = 40`.
- **D salah** — Lupa kuadrat: `4 × 5 = 20`.
- **Konsep kunci:** Pangkat atau akar pada `4 × (2 + 3)² − 8 × 5` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `2 + 3 = 5`, pangkat: `5² = 25`
  2. Dua perkalian: `4 × 25 = 100`, `8 × 5 = 40`
  3. Kurang: `100 − 40 = 60`

---

**34.** Hitunglah: `125 − (5² + 3 × 8) = ....`
- A. 100
- B. 124
- C. 76
- D. 82

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `3 × 8` di dalam kurung: `125 − 25 = 100`.
- **B salah** — Mengabaikan kurung: `125 − 25 + 24 = 124`.
- **C benar** — Dalam kurung: `5² = 25`, `3 × 8 = 24`, jumlah: `25 + 24 = 49`, lalu `125 − 49 = 76`.
- **D salah** — Salah jumlah internal kurung: `25 + 24` dihitung `43`, lalu `125 − 43 = 82`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `125 − (5² + 3 × 8)` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Pangkat dulu dalam kurung: `5² = 25`
  2. Kali dalam kurung: `3 × 8 = 24`, jumlah `25 + 24 = 49`
  3. Lalu `125 − 49 = 76`

---

**35.** Hitunglah: `(10 + 5) × (6 − 2) ÷ 3 + 4 = ....`
- A. 20
- B. 24
- C. 60
- D. 5

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `+ 4`: `(10+5) × (6−2) ÷ 3 = 60 ÷ 3 = 20`.
- **B benar** — Dua kurung dulu: `10 + 5 = 15`, `6 − 2 = 4`, lalu kiri-ke-kanan: `15 × 4 = 60`, `60 ÷ 3 = 20`, lalu `20 + 4 = 24`.
- **C salah** — Lupa `÷ 3` dan `+ 4`: `15 × 4 = 60`.
- **D salah** — Lupa kurung kedua: `(10 + 5) ÷ 3 = 5`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(10 + 5) × (6 − 2) ÷ 3 + 4` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `10 + 5 = 15`, `6 − 2 = 4`
  2. Kiri-ke-kanan: `15 × 4 = 60`, `60 ÷ 3 = 20`
  3. Tambah: `20 + 4 = 24`

---

**36.** Hitunglah: `2 + 3² × 4 − 5² = ....`
- A. 38
- B. 11
- C. 19
- D. 13

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `− 5²`: `2 + 36 = 38`.
- **B salah** — Berhenti di `2 + 3² = 11`, lupa `× 4 − 5²`.
- **C salah** — Kiri-ke-kanan: `(2 + 3²) × 4 − 5² = 11 × 4 − 25 = 19`.
- **D benar** — Pangkat dulu: `3² = 9`, `5² = 25`, kali: `9 × 4 = 36`, lalu kiri-ke-kanan: `2 + 36 − 25 = 13`.
- **Konsep kunci:** Pangkat atau akar pada `2 + 3² × 4 − 5²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `3² = 9`, `5² = 25`
  2. Kali: `9 × 4 = 36`
  3. Kiri-ke-kanan: `2 + 36 − 25 = 13`

---

**37.** Hitunglah: `2 × {4 + 3 × [5 + (12 ÷ 3)]} = ....`
- A. 31
- B. 27
- C. 62
- D. 9

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `× 2` di depan: `4 + 3 × 9 = 31`.
- **B salah** — Lupa `+ 4`: `3 × 9 = 27`.
- **C benar** — Paling dalam: `12 ÷ 3 = 4`, kurung siku: `5 + 4 = 9`, kali: `3 × 9 = 27`, kurung kurawal: `4 + 27 = 31`, lalu `2 × 31 = 62`.
- **D salah** — Berhenti di `5 + (12 ÷ 3) = 9`, lupa `3 ×`, `4 +`, dan `2 ×`.
- **Konsep kunci:** Pada kurung bersarang seperti `2 × {4 + 3 × [5 + (12 ÷ 3)]}`, kerjakan dulu kurung yang paling dalam, baru melangkah ke kurung yang lebih luar.
- **Langkah Penyelesaian:**
  1. Paling dalam: `12 ÷ 3 = 4`
  2. Kurung siku: `5 + 4 = 9`
  3. Kali: `3 × 9 = 27`, kurung kurawal: `4 + 27 = 31`
  4. Akhir: `2 × 31 = 62`

---

**38.** Hitunglah: `(225 ÷ 15) × (2 + 4) − 7² = ....`
- A. 41
- B. 90
- C. 34
- D. 15

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung kiri: `225 ÷ 15 = 15`, kurung kanan: `2 + 4 = 6`, kali: `15 × 6 = 90`, pangkat: `7² = 49`, lalu `90 − 49 = 41`.
- **B salah** — Lupa `− 7²`: `15 × 6 = 90`.
- **C salah** — Salah hafal `7² = 56`: `90 − 56 = 34`.
- **D salah** — Berhenti di `225 ÷ 15 = 15`, lupa operasi lainnya.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(225 ÷ 15) × (2 + 4) − 7²` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `225 ÷ 15 = 15`
  2. Kurung kanan: `2 + 4 = 6`, kali: `15 × 6 = 90`
  3. Pangkat: `7² = 49`, lalu `90 − 49 = 41`

---

**39.** Hitunglah: `6 × 3 + 2³ × 5 − 12 = ....`
- A. 18
- B. 58
- C. 26
- D. 46

**Kunci: D**
**Pembahasan:**
- **A salah** — Berhenti di `6 × 3 = 18`, lupa suku lainnya.
- **B salah** — Lupa `− 12`: `18 + 40 = 58`.
- **C salah** — Lupa `× 5` pada suku pangkat: `18 + 8 = 26`.
- **D benar** — Pangkat dulu: `2³ = 8`, lalu tiga perkalian: `6 × 3 = 18`, `8 × 5 = 40`, lalu `18 + 40 − 12 = 46`.
- **Konsep kunci:** Pangkat atau akar pada `6 × 3 + 2³ × 5 − 12` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `2³ = 8`
  2. Dua perkalian: `6 × 3 = 18`, `8 × 5 = 40`
  3. Kiri-ke-kanan: `18 + 40 − 12 = 46`

---

**40.** Hitunglah: `(7 − 2)² + 4 × 3 − 6 = ....`
- A. 37
- B. 31
- C. 25
- D. 43

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `− 6`: `25 + 12 = 37`.
- **B benar** — Kurung dulu: `7 − 2 = 5`, pangkat: `5² = 25`, kali: `4 × 3 = 12`, lalu kiri-ke-kanan: `25 + 12 − 6 = 31`.
- **C salah** — Berhenti di `(7 − 2)² = 25`, lupa `+ 4 × 3 − 6`.
- **D salah** — Salah tanda: `25 + 12 + 6 = 43`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(7 − 2)² + 4 × 3 − 6` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `7 − 2 = 5`, pangkat: `5² = 25`
  2. Kali: `4 × 3 = 12`
  3. Kiri-ke-kanan: `25 + 12 − 6 = 31`

---

**41.** Hitunglah: `(4 + 6) × 5 − 3 × 8 ÷ 2 = ....`
- A. 38
- B. 26
- C. 12
- D. 50

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `4 + 6 = 10`, kali: `10 × 5 = 50`, lalu kiri-ke-kanan: `3 × 8 = 24`, `24 ÷ 2 = 12`, lalu `50 − 12 = 38`.
- **B salah** — Lupa `÷ 2`: `50 − (3 × 8) = 26`.
- **C salah** — Berhenti di `3 × 8 ÷ 2 = 12`, lupa `50 −`.
- **D salah** — Berhenti di `(4 + 6) × 5 = 50`, lupa suku `− 3 × 8 ÷ 2`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(4 + 6) × 5 − 3 × 8 ÷ 2` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `4 + 6 = 10`, kali: `10 × 5 = 50`
  2. Kiri-ke-kanan: `3 × 8 = 24`, `24 ÷ 2 = 12`
  3. Kurang: `50 − 12 = 38`

---

**42.** Hitunglah: `3 + 5 × (12 − 4)² ÷ 100 = ....`
- A. 67
- B. 3,2
- C. 6,2
- D. 3,64

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `× 5` dan `÷ 100`: `3 + 64 = 67`.
- **B salah** — Lupa `+ 3`: `5 × 64 ÷ 100 = 3,2`.
- **C benar** — Kurung dulu: `12 − 4 = 8`, pangkat: `8² = 64`, lalu kiri-ke-kanan: `5 × 64 = 320`, `320 ÷ 100 = 3,2`, lalu `3 + 3,2 = 6,2`.
- **D salah** — Lupa `× 5`: `3 + 64 ÷ 100 = 3,64`.
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski hasilnya berupa desimal, seperti pada `3 + 5 × (12 − 4)² ÷ 100`.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `12 − 4 = 8`, pangkat: `8² = 64`
  2. Kiri-ke-kanan: `5 × 64 = 320`, `320 ÷ 100 = 3,2`
  3. Tambah: `3 + 3,2 = 6,2`

---

**43.** Hitunglah: `½ × (40 ÷ 4) + 3³ = ....`
- A. 27
- B. 32
- C. 47
- D. 13

**Kunci: B**
**Pembahasan:**
- **A salah** — Berhenti di `3³ = 27`, lupa `½ × (40 ÷ 4)`.
- **B benar** — Kurung dulu: `40 ÷ 4 = 10`, kali: `½ × 10 = 5`, pangkat: `3³ = 27`, lalu `5 + 27 = 32`.
- **C salah** — Lupa `÷ 4`: `½ × 40 = 20`, lalu `20 + 27 = 47`.
- **D salah** — Salah hafal `3³ = 3`: `5 + 3 = 8`? Tidak; umpan `13` berasal dari `10 + 3` (lupa pangkatdnya).
- **Konsep kunci:** Urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) tetap berlaku meski bilangannya berbentuk pecahan, seperti pada `½ × (40 ÷ 4) + 3³`.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `40 ÷ 4 = 10`, kali: `½ × 10 = 5`
  2. Pangkat: `3³ = 27`
  3. Tambah: `5 + 27 = 32`

---

**44.** Hitunglah: `(16 − 9) × (7 + 3) + 2² = ....`
- A. 70
- B. 4
- C. 66
- D. 74

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `+ 2²`: `(16−9) × (7+3) = 7 × 10 = 70`.
- **B salah** — Berhenti di `2² = 4`, lupa operasi lainnya.
- **C salah** — Salah tanda: `70 − 4 = 66`.
- **D benar** — Dua kurung dulu: `16 − 9 = 7`, `7 + 3 = 10`, kali: `7 × 10 = 70`, pangkat: `2² = 4`, lalu `70 + 4 = 74`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(16 − 9) × (7 + 3) + 2²` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `16 − 9 = 7`, `7 + 3 = 10`
  2. Kali: `7 × 10 = 70`
  3. Pangkat: `2² = 4`, lalu `70 + 4 = 74`

---

**45.** Hitunglah: `18 ÷ 3 + 2 × 7 − 4 = ....`
- A. 16
- B. 20
- C. 6
- D. 52

**Kunci: A**
**Pembahasan:**
- **A benar** — Bagi & kali dulu: `18 ÷ 3 = 6`, `2 × 7 = 14`, lalu kiri-ke-kanan: `6 + 14 − 4 = 16`.
- **B salah** — Lupa `− 4`: `6 + 14 = 20`.
- **C salah** — Berhenti di `18 ÷ 3 = 6`.
- **D salah** — Kiri-ke-kanan: `(18 ÷ 3 + 2) × 7 − 4 = 8 × 7 − 4 = 52`.
- **Konsep kunci:** Pada `18 ÷ 3 + 2 × 7 − 4`, kali dan bagi harus dikerjakan lebih dulu, baru kemudian tambah dan kurang.
- **Langkah Penyelesaian:**
  1. Bagi & kali dulu: `18 ÷ 3 = 6`, `2 × 7 = 14`
  2. Kiri-ke-kanan: `6 + 14 − 4 = 16`

---

**46.** Hitunglah: `100 − (6 + 4)² ÷ 5 × 2 = ....`
- A. 40
- B. 20
- C. 60
- D. 0

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `100 −`: `(6+4)² ÷ 5 × 2 = 100 ÷ 5 × 2 = 40`.
- **B salah** — Berhenti di `100 ÷ 5 = 20` (lupa `× 2` dan `100 −`).
- **C benar** — Kurung dulu: `6 + 4 = 10`, pangkat: `10² = 100`, lalu kiri-ke-kanan: `100 ÷ 5 = 20`, `20 × 2 = 40`, lalu `100 − 40 = 60`.
- **D salah** — Lupa `÷ 5 × 2`: `100 − (6 + 4)² = 0`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `100 − (6 + 4)² ÷ 5 × 2` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `6 + 4 = 10`, pangkat: `10² = 100`
  2. Kiri-ke-kanan: `100 ÷ 5 = 20`, `20 × 2 = 40`
  3. Kurang: `100 − 40 = 60`

---

**47.** Hitunglah: `(9 − 2) × (8 + 1) − 6² ÷ 9 = ....`
- A. 63
- B. 59
- C. 36
- D. 67

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `− 6² ÷ 9`: `(9−2) × (8+1) = 7 × 9 = 63`.
- **B benar** — Dua kurung dulu: `9 − 2 = 7`, `8 + 1 = 9`, kali: `7 × 9 = 63`, pangkat: `6² = 36`, bagi: `36 ÷ 9 = 4`, lalu `63 − 4 = 59`.
- **C salah** — Berhenti di `6² = 36`.
- **D salah** — Salah tanda: `63 + 4 = 67`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(9 − 2) × (8 + 1) − 6² ÷ 9` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `9 − 2 = 7`, `8 + 1 = 9`, kali: `7 × 9 = 63`
  2. Pangkat & bagi: `6² = 36`, `36 ÷ 9 = 4`
  3. Kurang: `63 − 4 = 59`

---

**48.** Hitunglah: `(225 − 5²) ÷ 4 + 3 × (2 + 5) = ....`
- A. 50
- B. 200
- C. 68
- D. 71

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `+ 3 × (2 + 5)`: `(225 − 25) ÷ 4 = 200 ÷ 4 = 50`.
- **B salah** — Berhenti di `225 − 25 = 200`, lupa `÷ 4` dan suku lainnya.
- **C salah** — Salah jumlah kurung: `2 + 5` dihitung `6`, lalu `50 + 3 × 6 = 68`.
- **D benar** — Pangkat dulu: `5² = 25`, kurung kiri: `225 − 25 = 200`, bagi: `200 ÷ 4 = 50`, kurung kanan: `2 + 5 = 7`, kali: `3 × 7 = 21`, lalu `50 + 21 = 71`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(225 − 5²) ÷ 4 + 3 × (2 + 5)` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `5² = 25`, kurung kiri: `225 − 25 = 200`
  2. Bagi: `200 ÷ 4 = 50`
  3. Kurung kanan: `2 + 5 = 7`, kali: `3 × 7 = 21`, lalu `50 + 21 = 71`

---

**49.** Hitunglah: `(3 + 5)² − (50 − 6²) = ....`
- A. 50
- B. 64
- C. 36
- D. 14

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung pertama: `3 + 5 = 8`, pangkat: `8² = 64`, pangkat ke-2: `6² = 36`, kurung kedua: `50 − 36 = 14`, lalu `64 − 14 = 50`.
- **B salah** — Lupa `− (50 − 6²)`: `(3 + 5)² = 64`.
- **C salah** — Berhenti di `6² = 36`.
- **D salah** — Berhenti di `50 − 36 = 14`, lupa `64 −`.
- **Konsep kunci:** Pangkat atau akar pada `(3 + 5)² − (50 − 6²)` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung pertama: `3 + 5 = 8`, pangkat: `8² = 64`
  2. Kurung kedua: `6² = 36`, lalu `50 − 36 = 14`
  3. Kurang: `64 − 14 = 50`

---

**50.** Hitunglah: `10 × (20 ÷ 4) − 7 + 3² = ....`
- A. 43
- B. 50
- C. 52
- D. 34

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `+ 3²`: `10 × (20 ÷ 4) − 7 = 50 − 7 = 43`.
- **B salah** — Berhenti di `10 × (20 ÷ 4) = 50`.
- **C benar** — Kurung dulu: `20 ÷ 4 = 5`, kali: `10 × 5 = 50`, pangkat: `3² = 9`, lalu kiri-ke-kanan: `50 − 7 + 9 = 52`.
- **D salah** — Salah tanda: `50 − 7 − 9 = 34`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `10 × (20 ÷ 4) − 7 + 3²` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `20 ÷ 4 = 5`, kali: `10 × 5 = 50`
  2. Pangkat: `3² = 9`
  3. Kiri-ke-kanan: `50 − 7 + 9 = 52`

---
**51.** Hitunglah: `14 + 3 × (6 − 2)² ÷ 4 = ....`
- A. 12
- B. 30
- C. 16
- D. 26

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `+ 14`: `3 × (6−2)² ÷ 4 = 3 × 16 ÷ 4 = 12`.
- **B salah** — Lupa `× 3` dan `÷ 4`: `14 + 16 = 30`.
- **C salah** — Berhenti di `(6 − 2)² = 16`, lupa `14 + 3 ×` dan `÷ 4`.
- **D benar** — Kurung dulu: `6 − 2 = 4`, pangkat: `4² = 16`, kiri-ke-kanan: `3 × 16 = 48`, `48 ÷ 4 = 12`, lalu `14 + 12 = 26`.
- **Konsep kunci:** Pangkat atau akar pada `14 + 3 × (6 − 2)² ÷ 4` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `6 − 2 = 4`, pangkat: `4² = 16`
  2. Kiri-ke-kanan: `3 × 16 = 48`, `48 ÷ 4 = 12`
  3. Tambah: `14 + 12 = 26`

---

**52.** Bu Rina membuat **4 loyang** kue. Setiap loyang dipotong menjadi **8 bagian**. Ia menjual **3 bagian** di pagi hari dan **2 × 5 bagian** di siang hari. Sisa kue adalah ....
- A. 29
- B. 19
- C. 22
- D. 13

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa penjualan siang: `32 − 3 = 29`.
- **B benar** — Kalimat: `4 × 8 − 3 − 2 × 5`. Kali dulu: `4×8 = 32`, `2×5 = 10`, lalu `32 − 3 − 10 = 19`.
- **C salah** — Lupa penjualan pagi: `32 − 10 = 22`.
- **D salah** — Hanya menghitung yang terjual: `3 + 2 × 5 = 13`, bukan sisa.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `4 × 8 − 3 − 2 × 5`
  2. Kali dulu: `32 − 3 − 10 = 19`

---

**53.** Paman mengisi akuarium dengan **3 ember** berisi **5 liter** dan **4 ember** berisi **3 liter**. Sebanyak **7 liter** tumpah saat dipindah. Air yang tersisa di akuarium adalah ....
- A. 20
- B. 27
- C. 15
- D. 12

**Kunci: A**
**Pembahasan:**
- **A benar** — Kalimat: `3 × 5 + 4 × 3 − 7`. Kali dulu: `15 + 12 − 7 = 20`.
- **B salah** — Lupa air yang tumpah: `15 + 12 = 27`.
- **C salah** — Berhenti di `3 × 5 = 15` liter.
- **D salah** — Berhenti di `4 × 3 = 12` liter.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `3 × 5 + 4 × 3 − 7`
  2. Kali dulu: `15 + 12 − 7 = 20`

---

**54.** Sebuah bus berisi **25 penumpang**. Di halte A turun **6** dan naik **10** orang. Di halte B turun **5** orang dan naik **2 × 5** orang. Banyak penumpang di bus sekarang adalah ....
- A. 29
- B. 24
- C. 34
- D. 26

**Kunci: C**
**Pembahasan:**
- **A salah** — Berhenti setelah halte A: `25 − 6 + 10 = 29`.
- **B salah** — Lupa penumpang naik di halte B: `25 − 6 + 10 − 5 = 24`.
- **C benar** — Kalimat: `25 − 6 + 10 − 5 + 2 × 5`. Kali dulu: `2×5 = 10`, lalu kiri-ke-kanan: `25 − 6 + 10 − 5 + 10 = 34`.
- **D salah** — Lupa `× 5` pada penumpang naik di halte B: `25 − 6 + 10 − 5 + 2 = 26`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi (kurung, pangkat, kali/bagi, tambah/kurang) yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `25 − 6 + 10 − 5 + 2 × 5`
  2. Kali dulu: `2 × 5 = 10`, kiri-ke-kanan: `25 − 6 + 10 − 5 + 10 = 34`

---

**55.** Sebuah kolam diisi **8 ember** berisi **6 liter** air, lalu **5 × 3 liter** air dibuang, kemudian ditambah **4² liter** air. Volume air di kolam sekarang adalah ....
- A. 48
- B. 33
- C. 16
- D. 49

**Kunci: D**
**Pembahasan:**
- **A salah** — Berhenti di `8 × 6 = 48` liter.
- **B salah** — Lupa `+ 4²`: `48 − 15 = 33`.
- **C salah** — Berhenti di `4² = 16` liter.
- **D benar** — Kalimat: `8 × 6 − 5 × 3 + 4²`. Kali & pangkat lebih dulu: `48 − 15 + 16 = 49`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika; pilih operasi dari konteks, lalu selesaikan dengan urutan KPKBTK.
- **Langkah Penyelesaian:**
  1. Kalimat: `8 × 6 − 5 × 3 + 4²`
  2. Kali & pangkat lebih dulu: `48 − 15 + 16 = 49`

---

**56.** Hitunglah: `2 × (5 − 1)² + 3 × (2 + 8) = ....`
- A. 62
- B. 32
- C. 30
- D. 16

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `5 − 1 = 4`, pangkat: `4² = 16`, kurung kedua: `2 + 8 = 10`, lalu dua perkalian: `2 × 16 = 32`, `3 × 10 = 30`, jumlah `32 + 30 = 62`.
- **B salah** — Lupa `+ 3 × (2 + 8)`: `2 × 16 = 32`.
- **C salah** — Berhenti di `3 × 10 = 30`, lupa `2 × 16`.
- **D salah** — Berhenti di `(5 − 1)² = 16`.
- **Konsep kunci:** Soal berlangkah banyak seperti `2 × (5 − 1)² + 3 × (2 + 8)` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `5 − 1 = 4`, pangkat: `4² = 16`
  2. Kurung kedua: `2 + 8 = 10`
  3. Dua perkalian: `2 × 16 = 32`, `3 × 10 = 30`, jumlah `62`

---

**57.** Diketahui `a = 4` dan `b = 3`. Nilai dari `a² + 2ab − b²` adalah ....
- A. 40
- B. 31
- C. 24
- D. 25

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `− b²`: `16 + 24 = 40`.
- **B benar** — Substitusi: `a² = 16`, `2ab = 2 × 4 × 3 = 24`, `b² = 9`, lalu `16 + 24 − 9 = 31`.
- **C salah** — Berhenti di `2ab = 24`.
- **D salah** — Menghitung `a² + b² = 25` lalu melupakan `2ab`.
- **Konsep kunci:** Substitusi nilai variabel dilakukan lebih dulu, baru selesaikan dengan urutan operasi yang benar.
- **Langkah Penyelesaian:**
  1. Substitusi: `a² = 16`, `2ab = 24`, `b² = 9`
  2. Lalu `16 + 24 − 9 = 31`

---

**58.** Hitunglah: `(10² − 8²) ÷ (5 − 2)² = ....`
- A. 36
- B. 9
- C. 4
- D. 12

**Kunci: C**
**Pembahasan:**
- **A salah** — Berhenti di `10² − 8² = 100 − 64 = 36`.
- **B salah** — Berhenti di `(5 − 2)² = 9`.
- **C benar** — Pangkat dulu: `10² = 100`, `8² = 64`, kurung kiri: `100 − 64 = 36`, kurung kanan: `5 − 2 = 3`, pangkat: `3² = 9`, lalu `36 ÷ 9 = 4`.
- **D salah** — Lupa kuadrat di penyebut: `36 ÷ 3 = 12`.
- **Konsep kunci:** Pangkat atau akar pada `(10² − 8²) ÷ (5 − 2)²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `10² = 100`, `8² = 64`, kurung kiri: `100 − 64 = 36`
  2. Kurung kanan: `5 − 2 = 3`, pangkat: `3² = 9`
  3. Bagi: `36 ÷ 9 = 4`

---

**59.** Uang Rio **Rp40.000**. Ia membeli **2 buku tulis** seharga Rp6.000 per buku dan **3 pensil** seharga Rp3.000 per pensil. Sisa uang Rio adalah ....
- A. Rp21.000
- B. Rp16.000
- C. Rp22.000
- D. Rp19.000

**Kunci: D**
**Pembahasan:**
- **A salah** — Menghitung total belanja, bukan sisa: `2 × 6.000 + 3 × 3.000 = 21.000`.
- **B salah** — Salah harga pensil: `2 × 6.000 + 3 × 4.000 = 24.000`, lalu `40.000 − 24.000 = 16.000`.
- **C salah** — Menggabungkan harga buku dan pensil secara keliru: `2 × (6.000 + 3.000) = 18.000`, lalu `40.000 − 18.000 = 22.000`.
- **D benar** — Kalimat: `40.000 − (2 × 6.000 + 3 × 3.000)`. Kurung dulu: `12.000 + 9.000 = 21.000`, lalu `40.000 − 21.000 = 19.000`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, baru selesaikan dengan urutan operasi yang benar; amati yang ditanya (di sini "sisa", bukan "total").
- **Langkah Penyelesaian:**
  1. Kalimat: `40.000 − (2 × 6.000 + 3 × 3.000)`
  2. Kurung dulu: `12.000 + 9.000 = 21.000`, lalu `40.000 − 21.000 = 19.000`

---

**60.** Hitunglah: `(3 + 7) × (8 − 3) + 4² ÷ 2 = ....`
- A. 58
- B. 50
- C. 8
- D. 42

**Kunci: A**
**Pembahasan:**
- **A benar** — Dua kurung dulu: `3 + 7 = 10`, `8 − 3 = 5`, kali: `10 × 5 = 50`, pangkat: `4² = 16`, bagi: `16 ÷ 2 = 8`, lalu `50 + 8 = 58`.
- **B salah** — Lupa `+ 4² ÷ 2`: `10 × 5 = 50`.
- **C salah** — Berhenti di `16 ÷ 2 = 8`.
- **D salah** — Salah tanda: `50 − 8 = 42`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(3 + 7) × (8 − 3) + 4² ÷ 2` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `3 + 7 = 10`, `8 − 3 = 5`, kali: `10 × 5 = 50`
  2. Pangkat & bagi: `4² = 16`, `16 ÷ 2 = 8`
  3. Tambah: `50 + 8 = 58`

---

**61.** Ibu membeli **4 kg apel** seharga Rp12.000 per kg dan **5 kg jeruk** seharga Rp9.000 per kg. Ibu membayar dengan uang **Rp100.000**. Kembalian yang diterima Ibu adalah ....
- A. Rp93.000
- B. Rp7.000
- C. Rp6.000
- D. Rp4.000

**Kunci: B**
**Pembahasan:**
- **A salah** — Menghitung total belanja, bukan kembalian: `4 × 12.000 + 5 × 9.000 = 93.000`.
- **B benar** — Kalimat: `100.000 − (4 × 12.000 + 5 × 9.000)`. Kurung dulu: `48.000 + 45.000 = 93.000`, lalu `100.000 − 93.000 = 7.000`.
- **C salah** — Salah hitung harga jeruk: `5 × 9.000` dianggap `46.000`, lalu `100.000 − 94.000 = 6.000`.
- **D salah** — Salah hitung harga jeruk: `5 × 9.000` dianggap `48.000`, lalu `100.000 − 96.000 = 4.000`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika; kerjakan perkalian di dalam kurung sebelum pengurangan.
- **Langkah Penyelesaian:**
  1. Kalimat: `100.000 − (4 × 12.000 + 5 × 9.000)`
  2. Kurung dulu: `48.000 + 45.000 = 93.000`, lalu `100.000 − 93.000 = 7.000`

---

**62.** Hitunglah: `(8 × 6 − 18) ÷ (3 + 2) + 3² = ....`
- A. 6
- B. 30
- C. 15
- D. 12

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `+ 3²`: `30 ÷ 5 = 6`.
- **B salah** — Berhenti di `48 − 18 = 30`.
- **C benar** — Kurung kiri: `8 × 6 − 18 = 48 − 18 = 30`, kurung kanan: `3 + 2 = 5`, bagi: `30 ÷ 5 = 6`, pangkat: `3² = 9`, lalu `6 + 9 = 15`.
- **D salah** — Anggap kuadrat = kali dua: `6 + 6 = 12`.
- **Konsep kunci:** Pada `(8 × 6 − 18) ÷ (3 + 2) + 3²`, kerjakan dulu isi kurung, lalu kali/bagi, pangkat, baru tambah/kurang.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `8 × 6 − 18 = 30`, kurung kanan: `3 + 2 = 5`
  2. Bagi: `30 ÷ 5 = 6`
  3. Pangkat: `3² = 9`, lalu `6 + 9 = 15`

---

**63.** Perpustakaan mencatat pengunjung: Senin **20** orang, Selasa **15** orang, Rabu **2 × 18** orang, dan Kamis **3 × 8** orang. Jumlah pengunjung pada 4 hari pertama adalah ....
- A. 36
- B. 35
- C. 71
- D. 95

**Kunci: D**
**Pembahasan:**
- **A salah** — Berhenti di `2 × 18 = 36`.
- **B salah** — Berhenti di `20 + 15 = 35`.
- **C salah** — Lupa hari Kamis: `20 + 15 + 36 = 71`.
- **D benar** — Kalimat: `20 + 15 + 2 × 18 + 3 × 8`. Kali dulu: `36 + 24`, lalu `20 + 15 + 36 + 24 = 95`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, lalu selesaikan dengan urutan operasi yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `20 + 15 + 2 × 18 + 3 × 8`
  2. Kali dulu: `20 + 15 + 36 + 24 = 95`

---

**64.** Hitunglah: `(2 + 3)³ − (2³ + 3³) = ....`
- A. 90
- B. 125
- C. 35
- D. 117

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung pertama: `2 + 3 = 5`, pangkat: `5³ = 125`, kurung kedua: `2³ + 3³ = 8 + 27 = 35`, lalu `125 − 35 = 90`.
- **B salah** — Berhenti di `(2 + 3)³ = 125`.
- **C salah** — Berhenti di `2³ + 3³ = 35`.
- **D salah** — Hanya mengurangkan `2³` dan melupakan `3³`: `125 − 8 = 117`.
- **Konsep kunci:** Pangkat atau akar pada `(2 + 3)³ − (2³ + 3³)` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung pertama: `2 + 3 = 5`, pangkat: `5³ = 125`
  2. Kurung kedua: `2³ + 3³ = 35`
  3. Kurang: `125 − 35 = 90`

---

**65.** Andi membeli **3 kotak** kue, setiap kotak berisi **15 kue**. Andi memakan **5 kue**, lalu sisanya dibagi rata kepada **5 teman**. Setiap teman mendapat ....
- A. 45
- B. 8
- C. 40
- D. 9

**Kunci: B**
**Pembahasan:**
- **A salah** — Berhenti di `3 × 15 = 45` kue.
- **B benar** — Kalimat: `(3 × 15 − 5) ÷ 5`. Kurung dulu: `45 − 5 = 40`, bagi: `40 ÷ 5 = 8`.
- **C salah** — Lupa membagi ke 5 teman: `45 − 5 = 40`.
- **D salah** — Lupa memakan 5 kue: `45 ÷ 5 = 9`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, lalu selesaikan dengan urutan operasi (kurung lebih dulu sebelum bagi).
- **Langkah Penyelesaian:**
  1. Kalimat: `(3 × 15 − 5) ÷ 5`
  2. Kurung dulu: `45 − 5 = 40`, bagi: `40 ÷ 5 = 8`

---

**66.** Hitunglah: `3 × (2 + 6)² ÷ 4 − 5 = ....`
- A. 48
- B. 64
- C. 43
- D. 192

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `− 5`: `192 ÷ 4 = 48`.
- **B salah** — Berhenti di `(2 + 6)² = 64`.
- **C benar** — Kurung dulu: `2 + 6 = 8`, pangkat: `8² = 64`, kiri-ke-kanan: `3 × 64 = 192`, `192 ÷ 4 = 48`, lalu `48 − 5 = 43`.
- **D salah** — Lupa `÷ 4 − 5`: `3 × 64 = 192`.
- **Konsep kunci:** Pangkat atau akar pada `3 × (2 + 6)² ÷ 4 − 5` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `2 + 6 = 8`, pangkat: `8² = 64`
  2. Kiri-ke-kanan: `3 × 64 = 192`, `192 ÷ 4 = 48`
  3. Kurang: `48 − 5 = 43`

---

**67.** Sebuah papan tulis berukuran panjang **6 m** dan lebar **4 m**. Papan dipasangi pigura di sekelilingnya dengan biaya **Rp15.000 per meter**, dan dibeli **3² paku** seharga Rp6.000 per paku. Total biaya adalah ....
- A. Rp354.000
- B. Rp300.000
- C. Rp54.000
- D. Rp150.000

**Kunci: A**
**Pembahasan:**
- **A benar** — Kalimat: `2 × (6 + 4) × 15.000 + 3² × 6.000`. Kurung dulu: `6 + 4 = 10`, kiri-ke-kanan: `2 × 10 = 20`, `20 × 15.000 = 300.000`, pangkat & kali: `3² = 9`, `9 × 6.000 = 54.000`, lalu `300.000 + 54.000 = 354.000`.
- **B salah** — Lupa biaya paku: `2 × 10 × 15.000 = 300.000`.
- **C salah** — Lupa biaya pigura: `3² × 6.000 = 54.000`.
- **D salah** — Lupa keliling dikali 2 dan lupa paku: `(6 + 4) × 15.000 = 150.000`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika; perhatikan bahwa keliling persegi panjang = `2 × (p × l)`.
- **Langkah Penyelesaian:**
  1. Kalimat: `2 × (6 + 4) × 15.000 + 3² × 6.000`
  2. Kurung & kali: `20 × 15.000 = 300.000`
  3. Pangkat & kali: `9 × 6.000 = 54.000`, lalu `300.000 + 54.000 = 354.000`

---

**68.** Hitunglah: `(44 + 22) ÷ (6 + 5) + 3³ = ....`
- A. 6
- B. 66
- C. 27
- D. 33

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `+ 3³`: `66 ÷ 11 = 6`.
- **B salah** — Berhenti di `44 + 22 = 66`.
- **C salah** — Berhenti di `3³ = 27`.
- **D benar** — Dua kurung dulu: `44 + 22 = 66`, `6 + 5 = 11`, bagi: `66 ÷ 11 = 6`, pangkat: `3³ = 27`, lalu `6 + 27 = 33`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(44 + 22) ÷ (6 + 5) + 3³` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `44 + 22 = 66`, `6 + 5 = 11`
  2. Bagi: `66 ÷ 11 = 6`
  3. Pangkat: `3³ = 27`, lalu `6 + 27 = 33`

---

**69.** Dalam sebuah lomba, **3 kelompok** masing-masing berisi **12 siswa** ikut serta. Sebanyak **6 siswa** keluar karena cedera dan **2 × 6 siswa** mengundurkan diri. Peserta yang tersisa adalah ....
- A. 36
- B. 18
- C. 30
- D. 12

**Kunci: B**
**Pembahasan:**
- **A salah** — Berhenti di `3 × 12 = 36` siswa.
- **B benar** — Kalimat: `3 × 12 − 6 − 2 × 6`. Kali dulu: `36 − 6 − 12 = 18`.
- **C salah** — Lupa yang mengundurkan diri: `36 − 6 = 30`.
- **D salah** — Berhenti di `2 × 6 = 12` siswa.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, lalu selesaikan dengan urutan operasi yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `3 × 12 − 6 − 2 × 6`
  2. Kali dulu: `36 − 6 − 12 = 18`

---

**70.** Hitunglah: `100 ÷ (2 + 3)² + 5 × 3 = ....`
- A. 4
- B. 25
- C. 19
- D. 35

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `+ 5 × 3`: `100 ÷ 25 = 4`.
- **B salah** — Berhenti di `(2 + 3)² = 25`.
- **C benar** — Kurung dulu: `2 + 3 = 5`, pangkat: `5² = 25`, bagi: `100 ÷ 25 = 4`, kali: `5 × 3 = 15`, lalu `4 + 15 = 19`.
- **D salah** — Lupa kuadrat: `100 ÷ 5 = 20`, lalu `20 + 15 = 35`.
- **Konsep kunci:** Pangkat atau akar pada `100 ÷ (2 + 3)² + 5 × 3` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `2 + 3 = 5`, pangkat: `5² = 25`
  2. Bagi & kali: `100 ÷ 25 = 4`, `5 × 3 = 15`
  3. Tambah: `4 + 15 = 19`

---

**71.** Ibu berbelanja: **2 buku tulis** seharga Rp15.000 per buku dan **3 pensil** seharga Rp10.000 per pensil. Ibu membayar dengan uang **Rp100.000**. Kembalian yang diterima Ibu adalah ....
- A. Rp40.000
- B. Rp60.000
- C. Rp70.000
- D. Rp55.000

**Kunci: A**
**Pembahasan:**
- **A benar** — Kalimat: `100.000 − (2 × 15.000 + 3 × 10.000)`. Kurung dulu: `30.000 + 30.000 = 60.000`, lalu `100.000 − 60.000 = 40.000`.
- **B salah** — Menghitung total belanja, bukan kembalian: `2 × 15.000 + 3 × 10.000 = 60.000`.
- **C salah** — Lupa 3 pensil: `100.000 − 30.000 = 70.000`.
- **D salah** — Salah harga pensil `3 × 5.000 = 15.000`: belanja jadi `45.000`, lalu `100.000 − 45.000 = 55.000`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika; kerjakan perkalian di dalam kurung sebelum pengurangan.
- **Langkah Penyelesaian:**
  1. Kalimat: `100.000 − (2 × 15.000 + 3 × 10.000)`
  2. Kurung dulu: `30.000 + 30.000 = 60.000`, lalu `100.000 − 60.000 = 40.000`

---

**72.** Pak Tono menanam **8 baris** pohon jeruk, tiap baris **6 pohon**, dan **4 baris** pohon mangga, tiap baris **6 pohon**. Total pohon yang ditanam Pak Tono adalah ....
- A. 48
- B. 24
- C. 12
- D. 72

**Kunci: D**
**Pembahasan:**
- **A salah** — Berhenti di `8 × 6 = 48` pohon jeruk.
- **B salah** — Berhenti di `4 × 6 = 24` pohon mangga.
- **C salah** — Hanya menjumlah baris: `8 + 4 = 12`.
- **D benar** — Kalimat: `8 × 6 + 4 × 6`. Kali dulu: `48 + 24 = 72`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika; banyak pohon = banyak baris × banyak pohon per baris.
- **Langkah Penyelesaian:**
  1. Kalimat: `8 × 6 + 4 × 6`
  2. Kali dulu: `48 + 24 = 72`

---

**73.** Pagi hari Andi bersepeda **2 jam** dengan kecepatan 15 km/jam. Siang harinya ia bersepeda **3 jam** dengan kecepatan 12 km/jam. Total jarak yang ditempuh Andi adalah ....
- A. 30 km
- B. 36 km
- C. 66 km
- D. 5 km

**Kunci: C**
**Pembahasan:**
- **A salah** — Berhenti di jarak pagi: `2 × 15 = 30` km.
- **B salah** — Berhenti di jarak siang: `3 × 12 = 36` km.
- **C benar** — Kalimat: `2 × 15 + 3 × 12`. Kali dulu: `30 + 36 = 66` km.
- **D salah** — Hanya menjumlah waktu: `2 + 3 = 5` jam, bukan jarak.
- **Konsep kunci:** Jarak = kecepatan × waktu; ubah cerita menjadi kalimat matematika, lalu selesaikan dengan urutan operasi.
- **Langkah Penyelesaian:**
  1. Kalimat: `2 × 15 + 3 × 12`
  2. Kali dulu: `30 + 36 = 66`

---

**74.** Sebuah keran mengalirkan air **4 liter per menit** selama `(2 + 3)²` menit. Lalu **5 × 6 liter** air dipakai. Volume air yang tersisa adalah ....
- A. 100 liter
- B. 70 liter
- C. 30 liter
- D. 25 liter

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa air yang dipakai: `4 × 25 = 100` liter.
- **B benar** — Kalimat: `4 × (2 + 3)² − 5 × 6`. Kurung dulu: `2 + 3 = 5`, pangkat: `5² = 25`, kali: `4 × 25 = 100`, lalu `5 × 6 = 30`, jadi `100 − 30 = 70`.
- **C salah** — Berhenti di `5 × 6 = 30` liter.
- **D salah** — Berhenti di `(2 + 3)² = 25` menit.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika; jalin satuan (liter) agar tidak tertukar dengan satuan waktu.
- **Langkah Penyelesaian:**
  1. Kalimat: `4 × (2 + 3)² − 5 × 6`
  2. Kurung & pangkat dulu: `4 × 25 = 100`
  3. Kurang: `100 − 30 = 70`

---

**75.** Perpustakaan mencatat peminjaman buku: kelas 5 meminjam **12 × 3** buku dan kelas 6 meminjam **15 × 4** buku. Jumlah buku yang dipinjam adalah ....
- A. 96
- B. 36
- C. 60
- D. 27

**Kunci: A**
**Pembahasan:**
- **A benar** — Kali dulu: `12 × 3 = 36`, `15 × 4 = 60`, lalu `36 + 60 = 96`.
- **B salah** — Berhenti di `12 × 3 = 36` buku.
- **C salah** — Berhenti di `15 × 4 = 60` buku.
- **D salah** — Hanya menjumlah 12 dan 15, melupakan `× 3` dan `× 4`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, lalu selesaikan dengan urutan operasi yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `12 × 3 + 15 × 4`
  2. Kali dulu: `36 + 60 = 96`

---

**76.** Hitunglah: `(9² − 6²) ÷ (4 + 1) + 2³ = ....`
- A. 45
- B. 9
- C. 8
- D. 17

**Kunci: D**
**Pembahasan:**
- **A salah** — Berhenti di `9² − 6² = 81 − 36 = 45`.
- **B salah** — Lupa `+ 2³`: `45 ÷ 5 = 9`.
- **C salah** — Berhenti di `2³ = 8`.
- **D benar** — Pangkat dulu: `9² = 81`, `6² = 36`, `2³ = 8`, kurung kiri: `81 − 36 = 45`, kurung kanan: `4 + 1 = 5`, bagi: `45 ÷ 5 = 9`, lalu `9 + 8 = 17`.
- **Konsep kunci:** Pangkat atau akar pada `(9² − 6²) ÷ (4 + 1) + 2³` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `9² = 81`, `6² = 36`, `2³ = 8`
  2. Kurung kiri: `81 − 36 = 45`, kurung kanan: `4 + 1 = 5`, bagi: `45 ÷ 5 = 9`
  3. Tambah: `9 + 8 = 17`

---

**77.** Sebuah toko mencatat penjualan: Senin **Rp250.000**, Selasa **Rp180.000**, Rabu **2 × Rp80.000**, dan Kamis **4 × Rp25.000**. Total penjualan dalam empat hari adalah ....
- A. Rp250.000
- B. Rp180.000
- C. Rp690.000
- D. Rp100.000

**Kunci: C**
**Pembahasan:**
- **A salah** — Berhenti di penjualan Senin.
- **B salah** — Berhenti di penjualan Selasa.
- **C benar** — Kalimat: `250.000 + 180.000 + 2 × 80.000 + 4 × 25.000`. Kali dulu: `160.000 + 100.000`, lalu jumlah semuanya = `690.000`.
- **D salah** — Berhenti di `4 × 25.000 = 100.000`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, lalu selesaikan dengan urutan operasi yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `250.000 + 180.000 + 2 × 80.000 + 4 × 25.000`
  2. Kali dulu: `250.000 + 180.000 + 160.000 + 100.000 = 690.000`

---

**78.** Hitunglah: `(4 + 2)² = ....`
- A. 12
- B. 36
- C. 20
- D. 6

**Kunci: B**
**Pembahasan:**
- **A salah** — Anggap kuadrat = kali dua: `(4 + 2) × 2 = 12`.
- **B benar** — Kurung dulu: `4 + 2 = 6`, pangkat: `6² = 36`.
- **C salah** — Mendistribusikan kuadrat: `4² + 2² = 16 + 4 = 20`.
- **D salah** — Lupa kuadrat: hanya menulis sisi `6`.
- **Konsep kunci:** Operasi di dalam kurung pada `(4 + 2)²` diselesaikan lebih dulu; kuadrat tidak bisa didistribusikan ke setiap angka.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `4 + 2 = 6`
  2. Pangkat: `6² = 36`

---

**79.** Sebuah bus mengangkut **3 kelas** siswa, tiap kelas berisi **28 siswa**. Sebanyak **7 × 5** siswa turun di halte, lalu **3²** siswa naik. Banyak penumpang di bus sekarang adalah ....
- A. 84
- B. 49
- C. 9
- D. 58

**Kunci: D**
**Pembahasan:**
- **A salah** — Berhenti di `3 × 28 = 84` siswa.
- **B salah** — Lupa `+ 3²`: `84 − 35 = 49`.
- **C salah** — Berhenti di `3² = 9`.
- **D benar** — Kalimat: `3 × 28 − 7 × 5 + 3²`. Kali & pangkat dulu: `84 − 35 + 9 = 58`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika; kerjakan kali dan pangkat sebelum tambah/kurang.
- **Langkah Penyelesaian:**
  1. Kalimat: `3 × 28 − 7 × 5 + 3²`
  2. Kali & pangkat dulu: `84 − 35 + 9 = 58`

---

**80.** Hitunglah: `64 ÷ (5 + 3)² + 6 × 2 = ....`
- A. 13
- B. 1
- C. 12
- D. 64

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `5 + 3 = 8`, pangkat: `8² = 64`, bagi: `64 ÷ 64 = 1`, kali: `6 × 2 = 12`, lalu `1 + 12 = 13`.
- **B salah** — Lupa `+ 6 × 2`: `64 ÷ 64 = 1`.
- **C salah** — Berhenti di `6 × 2 = 12`.
- **D salah** — Berhenti di `(5 + 3)² = 64`.
- **Konsep kunci:** Pangkat atau akar pada `64 ÷ (5 + 3)² + 6 × 2` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `5 + 3 = 8`, pangkat: `8² = 64`
  2. Kiri-ke-kanan: `64 ÷ 64 = 1`
  3. Tambah: `1 + 12 = 13`

---

**81.** Hitunglah: `(8 + 7) × (6 − 1) ÷ 5 + 3² = ....`
- A. 15
- B. 9
- C. 24
- D. 5

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa `+ 3²`: `75 ÷ 5 = 15`.
- **B salah** — Berhenti di `3² = 9`.
- **C benar** — Dua kurung dulu: `8 + 7 = 15`, `6 − 1 = 5`, kiri-ke-kanan: `15 × 5 = 75`, `75 ÷ 5 = 15`, pangkat: `3² = 9`, lalu `15 + 9 = 24`.
- **D salah** — Berhenti di `(6 − 1) = 5`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(8 + 7) × (6 − 1) ÷ 5 + 3²` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Dua kurung dulu: `8 + 7 = 15`, `6 − 1 = 5`
  2. Kiri-ke-kanan: `15 × 5 = 75`, `75 ÷ 5 = 15`
  3. Pangkat: `3² = 9`, lalu `15 + 9 = 24`

---

**82.** Dalam sebuah perlombaan, **5 tim** masing-masing berisi **12 peserta** dan **3 tim** masing-masing berisi **15 peserta**. Sebanyak **20 peserta** mengundurkan diri. Peserta yang tetap mengikuti lomba adalah ....
- A. 105
- B. 85
- C. 60
- D. 45

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa yang mengundurkan diri: `5 × 12 + 3 × 15 = 60 + 45 = 105`.
- **B benar** — Kalimat: `5 × 12 + 3 × 15 − 20`. Kali dulu: `60 + 45 − 20 = 85`.
- **C salah** — Berhenti di `5 × 12 = 60`.
- **D salah** — Berhenti di `3 × 15 = 45`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, lalu selesaikan dengan urutan operasi yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `5 × 12 + 3 × 15 − 20`
  2. Kali dulu: `60 + 45 − 20 = 85`

---

**83.** Hitunglah: `√(9 × 16) + 2 × 5² = ....`
- A. 12
- B. 50
- C. 25
- D. 62

**Kunci: D**
**Pembahasan:**
- **A salah** — Berhenti di `√144 = 12`.
- **B salah** — Lupa `√(9 × 16)`: `2 × 25 = 50`.
- **C salah** — Berhenti di `5² = 25`.
- **D benar** — Dalam akar dulu: `9 × 16 = 144`, akar: `√144 = 12`, pangkat: `5² = 25`, kali: `2 × 25 = 50`, lalu `12 + 50 = 62`.
- **Konsep kunci:** Pangkat atau akar pada `√(9 × 16) + 2 × 5²` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Dalam akar dulu: `9 × 16 = 144`, akar: `√144 = 12`
  2. Pangkat: `5² = 25`, kali: `2 × 25 = 50`
  3. Tambah: `12 + 50 = 62`

---

**84.** Hitunglah: `(36 ÷ (7 − 3))² + 4 × 5 = ....`
- A. 101
- B. 81
- C. 20
- D. 9

**Kunci: A**
**Pembahasan:**
- **A benar** — Paling dalam: `7 − 3 = 4`, bagi: `36 ÷ 4 = 9`, pangkat: `9² = 81`, kali: `4 × 5 = 20`, lalu `81 + 20 = 101`.
- **B salah** — Lupa `+ 4 × 5`: `9² = 81`.
- **C salah** — Berhenti di `4 × 5 = 20`.
- **D salah** — Berhenti di `36 ÷ 4 = 9`.
- **Konsep kunci:** Pada kurung bersarang seperti `(36 ÷ (7 − 3))² + 4 × 5`, kerjakan dulu kurung yang paling dalam, baru melangkah ke operasi berikutnya.
- **Langkah Penyelesaian:**
  1. Paling dalam: `7 − 3 = 4`, bagi: `36 ÷ 4 = 9`
  2. Pangkat: `9² = 81`
  3. Kali: `4 × 5 = 20`, lalu `81 + 20 = 101`

---

**85.** Sebuah sekolah membeli **6 kotak** spidol, tiap kotak berisi **12 spidol**. Sebanyak **4 × 5** spidol dipakai, lalu dibeli lagi **3 lusin** spidol. Sisa spidol adalah ....
- A. 72
- B. 52
- C. 88
- D. 36

**Kunci: C**
**Pembahasan:**
- **A salah** — Berhenti di `6 × 12 = 72`.
- **B salah** — Lupa `+ 3 × 12`: `72 − 20 = 52`.
- **C benar** — Kalimat: `6 × 12 − 4 × 5 + 3 × 12`. Kali dulu: `72 − 20 + 36 = 88`.
- **D salah** — Berhenti di `3 × 12 = 36` (lusin pembelian baru).
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika; 1 lusin = 12 buah.
- **Langkah Penyelesaian:**
  1. Kalimat: `6 × 12 − 4 × 5 + 3 × 12`
  2. Kali dulu: `72 − 20 + 36 = 88`

---

**86.** Hitunglah: `(2 + 4)³ ÷ 6² − 3 = ....`
- A. 6
- B. 216
- C. 36
- D. 3

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa `− 3`: `216 ÷ 36 = 6`.
- **B salah** — Berhenti di `(2 + 4)³ = 216`.
- **C salah** — Berhenti di `6² = 36`.
- **D benar** — Kurung dulu: `2 + 4 = 6`, pangkat: `6³ = 216`, penyebut `6² = 36`, bagi: `216 ÷ 36 = 6`, lalu `6 − 3 = 3`.
- **Konsep kunci:** Pangkat atau akar pada `(2 + 4)³ ÷ 6² − 3` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `2 + 4 = 6`, pangkat: `6³ = 216`, `6² = 36`
  2. Bagi: `216 ÷ 36 = 6`
  3. Kurang: `6 − 3 = 3`

---

**87.** Dalam sebuah taman terdapat **4 baris** bunga mawar, tiap baris **9 bunga**, dan **3 baris** bunga melati, tiap baris **8 bunga**. Sebanyak **5 × 2** bunga dipotong untuk hiasan. Sisa bunga adalah ....
- A. 50
- B. 60
- C. 36
- D. 24

**Kunci: A**
**Pembahasan:**
- **A benar** — Kalimat: `4 × 9 + 3 × 8 − 5 × 2`. Kali dulu: `36 + 24 − 10 = 50`.
- **B salah** — Lupa bunga yang dipotong: `36 + 24 = 60`.
- **C salah** — Berhenti di `4 × 9 = 36`.
- **D salah** — Berhenti di `3 × 8 = 24`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika, lalu selesaikan dengan urutan operasi yang benar.
- **Langkah Penyelesaian:**
  1. Kalimat: `4 × 9 + 3 × 8 − 5 × 2`
  2. Kali dulu: `36 + 24 − 10 = 50`

---

**88.** Hitunglah: `(5² + 3²) ÷ (7 − 3) × 2 = ....`
- A. 34
- B. 17
- C. 8,5
- D. 4

**Kunci: B**
**Pembahasan:**
- **A salah** — Berhenti di `5² + 3² = 25 + 9 = 34`.
- **B benar** — Pangkat dulu: `5² = 25`, `3² = 9`, kurung kiri: `25 + 9 = 34`, kurung kanan: `7 − 3 = 4`, kiri-ke-kanan: `34 ÷ 4 = 8,5`, `8,5 × 2 = 17`.
- **C salah** — Lupa `× 2`: `34 ÷ 4 = 8,5`.
- **D salah** — Berhenti di `(7 − 3) = 4`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(5² + 3²) ÷ (7 − 3) × 2` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `5² = 25`, `3² = 9`, kurung kiri: `25 + 9 = 34`
  2. Kurung kanan: `7 − 3 = 4`
  3. Kiri-ke-kanan: `34 ÷ 4 = 8,5`, `8,5 × 2 = 17`

---

**89.** Sebuah toko menyimpan **3 kotak** pensil, tiap kotak berisi **12 pensil**, dan **2 kotak** berisi **15 pensil**. Terjual **4 lusin** pensil. Sisa pensil adalah ....
- A. 66
- B. 48
- C. 18
- D. 114

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa pensil yang terjual: `3 × 12 + 2 × 15 = 36 + 30 = 66`.
- **B salah** — Menulis banyak pensil terjual: `4 lusin = 48`.
- **C benar** — Kalimat: `3 × 12 + 2 × 15 − 4 × 12`. Kali dulu: `36 + 30 − 48 = 18`.
- **D salah** — Menjumlahkan stok dan yang terjual: `66 + 48 = 114`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika; amati yang ditanya (sisa = punya − terjual).
- **Langkah Penyelesaian:**
  1. Kalimat: `3 × 12 + 2 × 15 − 4 × 12`
  2. Kali dulu: `36 + 30 − 48 = 18`

---

**90.** Hitunglah: `(3 × 4 + 5) × (12 ÷ 3) − 7² = ....`
- A. 68
- B. 19
- C. 49
- D. 17

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `− 7²`: `17 × 4 = 68`.
- **B benar** — Kurung kiri: `3 × 4 + 5 = 17`, kurung kanan: `12 ÷ 3 = 4`, kali: `17 × 4 = 68`, pangkat: `7² = 49`, lalu `68 − 49 = 19`.
- **C salah** — Berhenti di `7² = 49`.
- **D salah** — Berhenti di isi kurung kiri: `3 × 4 + 5 = 17`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(3 × 4 + 5) × (12 ÷ 3) − 7²` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `3 × 4 + 5 = 17`
  2. Kurung kanan: `12 ÷ 3 = 4`, kali: `17 × 4 = 68`
  3. Pangkat: `7² = 49`, lalu `68 − 49 = 19`

---

**91.** Rudi mengisi bak dengan **6 ember** berisi **4 liter**, lalu **2 × 3 liter** air tumpah, kemudian menambah **3² liter**. Volume air di bak sekarang adalah ....
- A. 24
- B. 18
- C. 9
- D. 27

**Kunci: D**
**Pembahasan:**
- **A salah** — Berhenti di `6 × 4 = 24` liter.
- **B salah** — Lupa `+ 3²`: `24 − 6 = 18`.
- **C salah** — Berhenti di `3² = 9` liter.
- **D benar** — Kalimat: `6 × 4 − 2 × 3 + 3²`. Kali & pangkat dulu: `24 − 6 + 9 = 27`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika; kerjakan kali dan pangkat sebelum tambah/kurang.
- **Langkah Penyelesaian:**
  1. Kalimat: `6 × 4 − 2 × 3 + 3²`
  2. Kali & pangkat dulu: `24 − 6 + 9 = 27`

---

**92.** Hitunglah: `(3³ × 4 − 6²) ÷ (8 − 2) = ....`
- A. 12
- B. 72
- C. 36
- D. 108

**Kunci: A**
**Pembahasan:**
- **A benar** — Pangkat dulu: `3³ = 27`, `6² = 36`, kurung kiri: `27 × 4 = 108`, `108 − 36 = 72`, kurung kanan: `8 − 2 = 6`, lalu `72 ÷ 6 = 12`.
- **B salah** — Berhenti di `108 − 36 = 72`.
- **C salah** — Berhenti di `6² = 36`.
- **D salah** — Berhenti di `3³ × 4 = 108`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(3³ × 4 − 6²) ÷ (8 − 2)` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `3³ = 27`, `6² = 36`
  2. Kurung kiri: `27 × 4 = 108`, `108 − 36 = 72`
  3. Kurung kanan: `8 − 2 = 6`, bagi: `72 ÷ 6 = 12`

---

**93.** Sebuah kelas berisi **40 siswa**. Sebanyak **5² siswa** mengikuti lomba Matematika dan **2 × 4 siswa** mengikuti lomba IPA. Banyak siswa yang tidak mengikuti lomba adalah ....
- A. 25
- B. 8
- C. 7
- D. 33

**Kunci: C**
**Pembahasan:**
- **A salah** — Berhenti di `5² = 25`.
- **B salah** — Berhenti di `2 × 4 = 8`.
- **C benar** — Kalimat: `40 − (5² + 2 × 4)`. Kurung dulu: `25 + 8 = 33`, lalu `40 − 33 = 7`.
- **D salah** — Menghitung jumlah peserta lomba, bukan yang tidak ikut: `25 + 8 = 33`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika; amati yang ditanya (siswa yang "tidak" mengikuti lomba).
- **Langkah Penyelesaian:**
  1. Kalimat: `40 − (5² + 2 × 4)`
  2. Kurung dulu: `25 + 8 = 33`, lalu `40 − 33 = 7`

---

**94.** Hitunglah: `(10 − 3) × (4 + 5)² ÷ 9 − 6 = ....`
- A. 63
- B. 57
- C. 81
- D. 567

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `− 6`: `567 ÷ 9 = 63`.
- **B benar** — Kurung kiri: `10 − 3 = 7`, kurung kanan: `4 + 5 = 9`, pangkat: `9² = 81`, kiri-ke-kanan: `7 × 81 = 567`, `567 ÷ 9 = 63`, lalu `63 − 6 = 57`.
- **C salah** — Berhenti di `(4 + 5)² = 81`.
- **D salah** — Lupa `÷ 9 − 6`: `7 × 81 = 567`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(10 − 3) × (4 + 5)² ÷ 9 − 6` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `10 − 3 = 7`
  2. Kurung kanan: `4 + 5 = 9`, pangkat: `9² = 81`
  3. Kiri-ke-kanan: `7 × 81 = 567`, `567 ÷ 9 = 63`, lalu `63 − 6 = 57`

---

**95.** Ibu membeli **3 kg gula** seharga Rp12.000 per kg dan **2 kg tepung** seharga Rp9.000 per kg. Saat membayar, Ibu mendapat **diskon Rp5.000**. Uang yang harus dibayar Ibu adalah ....
- A. Rp54.000
- B. Rp36.000
- C. Rp18.000
- D. Rp49.000

**Kunci: D**
**Pembahasan:**
- **A salah** — Lupa diskon: `3 × 12.000 + 2 × 9.000 = 54.000`.
- **B salah** — Berhenti di harga gula: `3 × 12.000 = 36.000`.
- **C salah** — Berhenti di harga tepung: `2 × 9.000 = 18.000`.
- **D benar** — Kalimat: `3 × 12.000 + 2 × 9.000 − 5.000`. Kali dulu: `36.000 + 18.000 − 5.000 = 49.000`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika; diskon berarti harga akhir dikurangi.
- **Langkah Penyelesaian:**
  1. Kalimat: `3 × 12.000 + 2 × 9.000 − 5.000`
  2. Kali dulu: `36.000 + 18.000 − 5.000 = 49.000`

---

**96.** Hitunglah: `(12 + 8)³ ÷ (10 − 5)² + 4 = ....`
- A. 324
- B. 320
- C. 25
- D. 400

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung kiri: `12 + 8 = 20`, pangkat: `20³ = 8.000`, kurung kanan: `10 − 5 = 5`, pangkat: `5² = 25`, bagi: `8.000 ÷ 25 = 320`, lalu `320 + 4 = 324`.
- **B salah** — Lupa `+ 4`: `8.000 ÷ 25 = 320`.
- **C salah** — Berhenti di `(10 − 5)² = 25`.
- **D salah** — Salah pangkat: `(12 + 8)³` dianggap `20² = 400`.
- **Konsep kunci:** Operasi di dalam tanda kurung pada `(12 + 8)³ ÷ (10 − 5)² + 4` harus diselesaikan lebih dulu sebelum operasi di luarnya.
- **Langkah Penyelesaian:**
  1. Kurung kiri: `12 + 8 = 20`, pangkat: `20³ = 8.000`
  2. Kurung kanan: `10 − 5 = 5`, pangkat: `5² = 25`, bagi: `8.000 ÷ 25 = 320`
  3. Tambah: `320 + 4 = 324`

---

**97.** Sebuah truk membawa **5 tumpuk** karung beras, tiap tumpuk **8 karung**, dan **3 tumpuk** karung gandum, tiap tumpuk **6 karung**. Sebanyak **4² karung** diturunkan di gudang. Karung yang tersisa adalah ....
- A. 58
- B. 40
- C. 42
- D. 16

**Kunci: C**
**Pembahasan:**
- **A salah** — Lupa yang diturunkan: `5 × 8 + 3 × 6 = 58`.
- **B salah** — Berhenti di `5 × 8 = 40`.
- **C benar** — Kalimat: `5 × 8 + 3 × 6 − 4²`. Kali & pangkat dulu: `40 + 18 − 16 = 42`.
- **D salah** — Berhenti di `4² = 16`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika; kerjakan kali dan pangkat sebelum tambah/kurang.
- **Langkah Penyelesaian:**
  1. Kalimat: `5 × 8 + 3 × 6 − 4²`
  2. Kali & pangkat dulu: `40 + 18 − 16 = 42`

---

**98.** Hitunglah: `(3² + 4²) × (2 + 1) − 2 × 15 = ....`
- A. 75
- B. 45
- C. 25
- D. 30

**Kunci: B**
**Pembahasan:**
- **A salah** — Lupa `− 2 × 15`: `(3² + 4²) × 3 = 25 × 3 = 75`.
- **B benar** — Pangkat dulu: `3² = 9`, `4² = 16`, kurung kiri: `9 + 16 = 25`, kurung kanan: `2 + 1 = 3`, kali: `25 × 3 = 75`, `2 × 15 = 30`, lalu `75 − 30 = 45`.
- **C salah** — Berhenti di `9 + 16 = 25`.
- **D salah** — Berhenti di `2 × 15 = 30`.
- **Konsep kunci:** Soal berlangkah banyak seperti `(3² + 4²) × (2 + 1) − 2 × 15` harus dikerjakan bertahap sesuai urutan KPKBTK, satu langkah demi satu langkah.
- **Langkah Penyelesaian:**
  1. Pangkat dulu: `3² = 9`, `4² = 16`, kurung kiri: `9 + 16 = 25`
  2. Kurung kanan: `2 + 1 = 3`, kali: `25 × 3 = 75`
  3. Kurang: `75 − 2 × 15 = 75 − 30 = 45`

---

**99.** Sebuah tim terdiri dari **3 kelompok** berisi **12 siswa** dan **2 kelompok** berisi **15 siswa**. Semua siswa dibagi rata menjadi **6 regu**. Anggota tiap regu adalah ....
- A. 66
- B. 36
- C. 30
- D. 11

**Kunci: D**
**Pembahasan:**
- **A salah** — Berhenti di banyak seluruh siswa: `3 × 12 + 2 × 15 = 36 + 30 = 66`.
- **B salah** — Berhenti di `3 × 12 = 36`.
- **C salah** — Berhenti di `2 × 15 = 30`.
- **D benar** — Kalimat: `(3 × 12 + 2 × 15) ÷ 6`. Kurung dulu: `36 + 30 = 66`, bagi: `66 ÷ 6 = 11`.
- **Konsep kunci:** Ubah dulu cerita menjadi kalimat matematika; kerjakan isi kurung sebelum membagi.
- **Langkah Penyelesaian:**
  1. Kalimat: `(3 × 12 + 2 × 15) ÷ 6`
  2. Kurung dulu: `36 + 30 = 66`, bagi: `66 ÷ 6 = 11`

---

**100.** Hitunglah: `(7 + 5)² ÷ 3² + 4 × 6 = ....`
- A. 40
- B. 16
- C. 24
- D. 52

**Kunci: A**
**Pembahasan:**
- **A benar** — Kurung dulu: `7 + 5 = 12`, pangkat: `12² = 144`, `3² = 9`, bagi: `144 ÷ 9 = 16`, kali: `4 × 6 = 24`, lalu `16 + 24 = 40`.
- **B salah** — Lupa `+ 4 × 6`: `144 ÷ 9 = 16`.
- **C salah** — Berhenti di `4 × 6 = 24`.
- **D salah** — Salah hafal `4 × 6 = 36`: `16 + 36 = 52`.
- **Konsep kunci:** Pangkat atau akar pada `(7 + 5)² ÷ 3² + 4 × 6` harus dikerjakan lebih dulu, sebelum kali, bagi, tambah, atau kurang.
- **Langkah Penyelesaian:**
  1. Kurung dulu: `7 + 5 = 12`, pangkat: `12² = 144`, `3² = 9`
  2. Bagi: `144 ÷ 9 = 16`
  3. Kali: `4 × 6 = 24`, lalu `16 + 24 = 40`

---

## BAGIAN III · KUNCI & DISTRIBUSI

## Tabel Kunci 100 Soal

| 1–10 | 11–20 | 21–30 | 31–40 | 41–50 |
|------|-------|-------|-------|-------|
| 1. B | 11. D | 21. C | 31. D | 41. A |
| 2. C | 12. B | 22. A | 32. B | 42. C |
| 3. A | 13. C | 23. D | 33. A | 43. B |
| 4. D | 14. A | 24. B | 34. C | 44. D |
| 5. C | 15. B | 25. C | 35. B | 45. A |
| 6. A | 16. D | 26. A | 36. D | 46. C |
| 7. D | 17. A | 27. B | 37. C | 47. B |
| 8. B | 18. C | 28. D | 38. A | 48. D |
| 9. A | 19. B | 29. C | 39. D | 49. A |
| 10. C | 20. D | 30. A | 40. B | 50. C |

| 51–60 | 61–70 | 71–80 | 81–90 | 91–100 |
|-------|-------|-------|-------|--------|
| 51. D | 61. B | 71. A | 81. C | 91. D |
| 52. B | 62. C | 72. D | 82. B | 92. A |
| 53. A | 63. D | 73. C | 83. D | 93. C |
| 54. C | 64. A | 74. B | 84. A | 94. B |
| 55. D | 65. B | 75. A | 85. C | 95. D |
| 56. A | 66. C | 76. D | 86. D | 96. A |
| 57. B | 67. A | 77. C | 87. A | 97. C |
| 58. C | 68. D | 78. B | 88. B | 98. B |
| 59. D | 69. B | 79. D | 89. C | 99. D |
| 60. A | 70. C | 80. A | 90. B | 100. A |

## Distribusi Kunci

Penghitungan per huruf dari seluruh 100 soal:

- **A** (26 soal): 3, 6, 9, 14, 17, 22, 26, 30, 33, 38, 41, 45, 49, 53, 56, 60, 64, 67, 71, 75, 80, 84, 87, 92, 96, 100
- **B** (24 soal): 1, 8, 12, 15, 19, 24, 27, 32, 35, 40, 43, 47, 52, 57, 61, 65, 69, 74, 78, 82, 88, 90, 94, 98
- **C** (25 soal): 2, 5, 10, 13, 18, 21, 25, 29, 34, 37, 42, 46, 50, 54, 58, 62, 66, 70, 73, 77, 81, 85, 89, 93, 97
- **D** (25 soal): 4, 7, 11, 16, 20, 23, 28, 31, 36, 39, 44, 48, 51, 55, 59, 63, 68, 72, 76, 79, 83, 86, 91, 95, 99

**Distribusi A: 26 · B: 24 · C: 25 · D: 25** — selisih maksimum hanya 1 dari target ideal 25 per huruf, jauh di bawah toleransi ±5. Tidak ada huruf yang mendominasi, posisi kunci tersebar acak di seluruh 100 soal sehingga pola jawaban sulit ditebak siswa.

## Strategi Belajar Urutan Operasi (untuk siswa)

1. **Hafalkan akronim KPKBTK / BODMAS / PEMDAS.** Tulis di atas kertas latihan setiap mulai mengerjakan.
2. **Lingkari semua tanda kurung dan beri nomor urut** sesuai kedalaman sebelum menghitung. Kerjakan kurung paling dalam dulu.
3. **Salin ulang baris setiap kali selesai satu langkah.** Jangan melompati langkah — di tingkat Provinsi soal dibuat multi-langkah justru untuk menguji kedisiplinan ini.
4. **Hafal `n²` dan `n³` untuk n = 2–6, 8, 9, 10, 12.** Sebagian besar soal pangkat OSN SD memakai bilangan kecil ini.
5. **Jangan pernah mendistribusikan kuadrat:** `(a + b)² ≠ a² + b²`. Kerjakan isi kurung dulu, baru kuadratkan.
6. **Kali/bagi sederajat → kiri ke kanan; tambah/kurang sederajat → kiri ke kanan.** Jangan mengutamakan "kali lebih tinggi dari bagi".
7. **Soal cerita: ubah ke kalimat matematika dulu**, lalu baca ulang kalimat hasil agar tidak salah menangkap yang ditanya (sisa, total, kembalian, di luar kolam, dst).
8. **Tandai distractor "kiri-ke-kanan".** Itu jebakan paling umum: kalau hasilmu sama dengan menghitung lurus kiri-ke-kanan, **curigai**.
9. **Cek balik dengan estimasi.** Untuk angka ribuan (uang, jarak), bulatkan dan tanya diri: "Apakah jawaban ini masuk akal?"

---

*Selesai. Sub-bab 01b - Urutan Operasi (Sedang).*