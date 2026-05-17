# Validation Report — chess-gm-komprehensif-campur.md

Generated: 2026-05-17T15:46:25+07:00  
Stockfish depth: (engine check skipped)  
Total soal: 100

## Summary

| Metric | Count |
|--------|------:|
| Engine TOP match | 0 |
| Engine ALT acceptable | 0 |
| Engine disagree | 0 |
| Engine skipped | 100 |
| FEN illegal | 1 |
| Soal with illegal SAN in opsi | 70 |

## Flagged Soal — Engine DISAGREE

_None._
## Soal — Engine ALT_OK (acceptable alternatives)

_None._

## Soal With FEN Issues

### Soal 82
- **Tema:** TAK — X-Ray Attack
- **FEN:** `r3k3/ppp2ppp/8/8/4r3/8/PPP2PPP/R3KB2 w Q - - 0 1`
- **Error:** chess.Board(fen) raised: invalid half-move clock in fen: 'r3k3/ppp2ppp/8/8/4r3/8/PPP2PPP/R3KB2 w Q - - 0 1'

## Soal With Illegal SAN

### Soal 2
- **Tema:** BUK — Identifikasi Pembukaan Italian Game
- **FEN:** `r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3`
  - A. `Italian Game` — ILLEGAL — parse_san('Italian Game') failed: invalid san: 'Italian Game'
  - B. `Ruy Lopez` — ILLEGAL — parse_san('Ruy Lopez') failed: invalid san: 'Ruy Lopez'
  - C. `Scotch Game` — ILLEGAL — parse_san('Scotch Game') failed: invalid san: 'Scotch Game'
  - D. `Four Knights Game` — ILLEGAL — parse_san('Four Knights Game') failed: invalid san: 'Four Knights Game'

### Soal 3
- **Tema:** END — Skakmat Raja & Menteri (KQ vs K)
- **FEN:** `7k/8/6K1/6Q1/8/8/8/8 w - - 0 1`
  - A. `Qg7#` — ILLEGAL — parse_san('Qg7#') failed: illegal san: 'Qg7#' in 7k/8/6K1/6Q1/8/8/8/8 w - - 0 1
  - B. `Qh5+` — OK
  - C. `Qa8+` — ILLEGAL — parse_san('Qa8+') failed: illegal san: 'Qa8+' in 7k/8/6K1/6Q1/8/8/8/8 w - - 0 1
  - D. `Kg7` — ILLEGAL — parse_san('Kg7') failed: illegal san: 'Kg7' in 7k/8/6K1/6Q1/8/8/8/8 w - - 0 1

### Soal 5
- **Tema:** TAK — Back-Rank Mate (Mat Baris Belakang)
- **FEN:** `6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1`
  - A. `Ra8#` — OK
  - B. `Rh1` — ILLEGAL — parse_san('Rh1') failed: illegal san: 'Rh1' in 6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1
  - C. `Kg2` — ILLEGAL — parse_san('Kg2') failed: illegal san: 'Kg2' in 6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1
  - D. `Ra7` — OK

### Soal 6
- **Tema:** BUK — Identifikasi Pembukaan Sicilian Defense
- **FEN:** `rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2`
  - A. `Sicilian Defense` — ILLEGAL — parse_san('Sicilian Defense') failed: invalid san: 'Sicilian Defense'
  - B. `French Defense` — ILLEGAL — parse_san('French Defense') failed: invalid san: 'French Defense'
  - C. `Caro-Kann Defense` — ILLEGAL — parse_san('Caro-Kann Defense') failed: invalid san: 'Caro-Kann Defense'
  - D. `Pirc Defense` — ILLEGAL — parse_san('Pirc Defense') failed: invalid san: 'Pirc Defense'

### Soal 7
- **Tema:** TAK — Lasker's Double Bishop Sacrifice (Lasker–Bauer 1889)
- **FEN:** `r1b2rk1/pp2qppp/2p2n2/3p1B2/3P4/3B1N2/PPPQ1PPP/4RRK1 w - - 0 1`
  - A. `Bxh7+` — OK
  - B. `Nxd5` — ILLEGAL — parse_san('Nxd5') failed: illegal san: 'Nxd5' in r1b2rk1/pp2qppp/2p2n2/3p1B2/3P4/3B1N2/PPPQ1PPP/4RRK1 w - - 0 1
  - C. `Bxf6` — ILLEGAL — parse_san('Bxf6') failed: illegal san: 'Bxf6' in r1b2rk1/pp2qppp/2p2n2/3p1B2/3P4/3B1N2/PPPQ1PPP/4RRK1 w - - 0 1
  - D. `Re3` — OK

### Soal 8
- **Tema:** END — Promosi Bidak (King and Pawn vs King, Opposition)
- **FEN:** `8/8/8/3k4/8/3K4/3P4/8 w - - 0 1`
  - A. `d4+` — ILLEGAL — parse_san('d4+') failed: illegal san: 'd4+' in 8/8/8/3k4/8/3K4/3P4/8 w - - 0 1
  - B. `Kc3` — OK
  - C. `Ke3` — OK
  - D. `Kd3` — ILLEGAL — parse_san('Kd3') failed: illegal san: 'Kd3' in 8/8/8/3k4/8/3K4/3P4/8 w - - 0 1

### Soal 9
- **Tema:** STR — Open File untuk Benteng
- **FEN:** `2r3k1/pp3ppp/2p5/8/8/2P5/PP3PPP/2R3K1 w - - 0 1`
  - A. `Tukar benteng dengan Rxc8` — ILLEGAL — parse_san('Tukar benteng dengan Rxc8') failed: invalid san: 'Tukar benteng dengan Rxc8'
  - B. `Mundurkan benteng ke baris 2` — ILLEGAL — parse_san('Mundurkan benteng ke baris 2') failed: invalid san: 'Mundurkan benteng ke baris 2'
  - C. `Mainkan b4 dorong sayap menteri` — ILLEGAL — parse_san('Mainkan b4 dorong sayap menteri') failed: invalid san: 'Mainkan b4 dorong sayap menteri'
  - D. `Kembangkan minor piece dulu (sebenarnya tidak ada di posisi ini)` — ILLEGAL — parse_san('Kembangkan minor piece dulu (sebenarnya tidak ada di posisi ini)') failed: invalid san: 'Kembangkan minor piece dulu (sebenarnya tidak ada di posisi ini)'

### Soal 10
- **Tema:** TAK — Knight Fork Royal (Garpu Kuda Royal)
- **FEN:** `r3k2r/ppp2ppp/8/8/3N4/8/PPP2PPP/4K2R w Kkq - 0 1`
  - A. `Nd6` — ILLEGAL — parse_san('Nd6') failed: illegal san: 'Nd6' in r3k2r/ppp2ppp/8/8/3N4/8/PPP2PPP/4K2R w Kkq - 0 1
  - B. `Nf6` — ILLEGAL — parse_san('Nf6') failed: illegal san: 'Nf6' in r3k2r/ppp2ppp/8/8/3N4/8/PPP2PPP/4K2R w Kkq - 0 1
  - C. `Nc6` — OK
  - D. `Ne6` — OK

### Soal 11
- **Tema:** BUK — Identifikasi Pembukaan Ruy Lopez
- **FEN:** `r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3`
  - A. `Ruy Lopez` — ILLEGAL — parse_san('Ruy Lopez') failed: invalid san: 'Ruy Lopez'
  - B. `Italian Game` — ILLEGAL — parse_san('Italian Game') failed: invalid san: 'Italian Game'
  - C. `Bishop's Opening` — ILLEGAL — parse_san("Bishop's Opening") failed: invalid san: "Bishop's Opening"
  - D. `Vienna Game` — ILLEGAL — parse_san('Vienna Game') failed: invalid san: 'Vienna Game'

### Soal 12
- **Tema:** STR — Prioritas Rokade (Castle Priority)
- **FEN:** `r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 4 5`
  - A. `O-O` — OK
  - B. `h4` — OK
  - C. `Nd5` — OK
  - D. `Bxf7+?!` — ILLEGAL — parse_san('Bxf7+?!') failed: invalid san: 'Bxf7+?!'

### Soal 13
- **Tema:** END — Lucena Position (Building the Bridge)
- **FEN:** `2K5/2P1k3/8/8/8/8/1R6/4r3 w - - 0 1`
  - A. `Rb4 (build bridge)` — ILLEGAL — parse_san('Rb4 (build bridge)') failed: invalid san: 'Rb4 (build bridge)'
  - B. `c8=Q (promosi langsung)` — ILLEGAL — parse_san('c8=Q (promosi langsung)') failed: invalid san: 'c8=Q (promosi langsung)'
  - C. `Kb7 (raja minggir)` — ILLEGAL — parse_san('Kb7 (raja minggir)') failed: invalid san: 'Kb7 (raja minggir)'
  - D. `Rxe1 (tukar benteng)` — ILLEGAL — parse_san('Rxe1 (tukar benteng)') failed: invalid san: 'Rxe1 (tukar benteng)'

### Soal 16
- **Tema:** END — Skakmat Raja & Benteng (KR vs K)
- **FEN:** `7k/8/6K1/8/8/8/8/R7 w - - 0 1`
  - A. `Ra8#` — OK
  - B. `Rh1+` — OK
  - C. `Kf7` — OK
  - D. `Kg7` — ILLEGAL — parse_san('Kg7') failed: illegal san: 'Kg7' in 7k/8/6K1/8/8/8/8/R7 w - - 0 1

### Soal 17
- **Tema:** BUK — Sicilian Najdorf vs Dragon
- **FEN:** `rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6`
  - A. `Najdorf` — ILLEGAL — parse_san('Najdorf') failed: invalid san: 'Najdorf'
  - B. `Dragon` — ILLEGAL — parse_san('Dragon') failed: invalid san: 'Dragon'
  - C. `Sveshnikov` — ILLEGAL — parse_san('Sveshnikov') failed: invalid san: 'Sveshnikov'
  - D. `Taimanov` — ILLEGAL — parse_san('Taimanov') failed: invalid san: 'Taimanov'

### Soal 18
- **Tema:** STR — Doubled Pawns (Bidak Ganda)
- **FEN:** `rnbqkbnr/pp3ppp/2p5/3pp3/8/2P5/PP1PPPPP/RNBQKBNR w KQkq - 0 4`
  - A. `Di endgame murni` — ILLEGAL — parse_san('Di endgame murni') failed: invalid san: 'Di endgame murni'
  - B. `Di tengah game dengan banyak bidak` — ILLEGAL — parse_san('Di tengah game dengan banyak bidak') failed: invalid san: 'Di tengah game dengan banyak bidak'
  - C. `Saat ada banyak gajah di papan` — ILLEGAL — parse_san('Saat ada banyak gajah di papan') failed: invalid san: 'Saat ada banyak gajah di papan'
  - D. `Tidak pernah merugikan` — ILLEGAL — parse_san('Tidak pernah merugikan') failed: invalid san: 'Tidak pernah merugikan'

### Soal 20
- **Tema:** BUK — Identifikasi Pembukaan French Defense
- **FEN:** `rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2`
  - A. `French Defense` — ILLEGAL — parse_san('French Defense') failed: invalid san: 'French Defense'
  - B. `Caro-Kann` — ILLEGAL — parse_san('Caro-Kann') failed: invalid san: 'Caro-Kann'
  - C. `Sicilian` — ILLEGAL — parse_san('Sicilian') failed: invalid san: 'Sicilian'
  - D. `Pirc` — ILLEGAL — parse_san('Pirc') failed: invalid san: 'Pirc'

### Soal 22
- **Tema:** STR — Bishop Pair Value (Nilai Sepasang Gajah)
- **FEN:** `r2q1rk1/pppb1ppp/2n2n2/3p4/3P4/2NB1N2/PPP2PPP/R1BQ1RK1 w - - 4 8`
  - A. `Posisi terbuka dengan struktur bidak cair` — ILLEGAL — parse_san('Posisi terbuka dengan struktur bidak cair') failed: invalid san: 'Posisi terbuka dengan struktur bidak cair'
  - B. `Posisi tertutup dengan banyak bidak terkunci` — ILLEGAL — parse_san('Posisi tertutup dengan banyak bidak terkunci') failed: invalid san: 'Posisi tertutup dengan banyak bidak terkunci'
  - C. `Endgame raja vs raja saja` — ILLEGAL — parse_san('Endgame raja vs raja saja') failed: invalid san: 'Endgame raja vs raja saja'
  - D. `Pembukaan dengan banyak minor piece` — ILLEGAL — parse_san('Pembukaan dengan banyak minor piece') failed: invalid san: 'Pembukaan dengan banyak minor piece'

### Soal 23
- **Tema:** END — KP-K Promosi Hindari Stalemate
- **FEN:** `k7/P7/K7/8/8/8/8/8 w - - 0 1`
  - A. `Kb6` — OK
  - B. `a8=Q+ (stalemate?)` — ILLEGAL — parse_san('a8=Q+ (stalemate?)') failed: invalid san: 'a8=Q+ (stalemate?)'
  - C. `a8=R+` — ILLEGAL — parse_san('a8=R+') failed: illegal san: 'a8=R+' in k7/P7/K7/8/8/8/8/8 w - - 0 1
  - D. `Kb5` — OK

### Soal 26
- **Tema:** BUK — Identifikasi Pembukaan Caro-Kann
- **FEN:** `rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2`
  - A. `Caro-Kann Defense` — ILLEGAL — parse_san('Caro-Kann Defense') failed: invalid san: 'Caro-Kann Defense'
  - B. `Sicilian Defense` — ILLEGAL — parse_san('Sicilian Defense') failed: invalid san: 'Sicilian Defense'
  - C. `French Defense` — ILLEGAL — parse_san('French Defense') failed: invalid san: 'French Defense'
  - D. `Modern Defense` — ILLEGAL — parse_san('Modern Defense') failed: invalid san: 'Modern Defense'

### Soal 27
- **Tema:** END — Réti's Endgame Study (1921)
- **FEN:** `7K/8/k1P5/7p/8/8/8/8 w - - 0 1`
  - A. `Kg7` — OK
  - B. `Kh7` — OK
  - C. `c7` — OK
  - D. `Kh8` — ILLEGAL — parse_san('Kh8') failed: illegal san: 'Kh8' in 7K/8/k1P5/7p/8/8/8/8 w - - 0 1

### Soal 29
- **Tema:** BUK — Catalan Opening
- **FEN:** `rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3`
  - A. `Catalan` — ILLEGAL — parse_san('Catalan') failed: invalid san: 'Catalan'
  - B. `Queen's Indian` — ILLEGAL — parse_san("Queen's Indian") failed: invalid san: "Queen's Indian"
  - C. `King's Indian` — ILLEGAL — parse_san("King's Indian") failed: invalid san: "King's Indian"
  - D. `Nimzo-Indian` — ILLEGAL — parse_san('Nimzo-Indian') failed: invalid san: 'Nimzo-Indian'

### Soal 31
- **Tema:** TAK — Adams-Torre Mate (Smothered Mate Variation, Bauer 1925)
- **FEN:** `4r1k1/5ppp/r1p5/p1n1RP2/8/1B6/PPP3PP/3R2K1 w - - 0 1`
  - A. `Pengorbanan menteri berulang di kotak menarget pin diagonal` — ILLEGAL — parse_san('Pengorbanan menteri berulang di kotak menarget pin diagonal') failed: invalid san: 'Pengorbanan menteri berulang di kotak menarget pin diagonal'
  - B. `Pengorbanan benteng untuk back-rank mate` — ILLEGAL — parse_san('Pengorbanan benteng untuk back-rank mate') failed: invalid san: 'Pengorbanan benteng untuk back-rank mate'
  - C. `Knight royal fork` — ILLEGAL — parse_san('Knight royal fork') failed: invalid san: 'Knight royal fork'
  - D. `Stalemate trick` — ILLEGAL — parse_san('Stalemate trick') failed: invalid san: 'Stalemate trick'

### Soal 32
- **Tema:** END — Square of the Pawn (Aturan Persegi Bidak)
- **FEN:** `8/8/8/8/4P3/8/8/k6K w - - 0 1`
  - A. `Tidak bisa, bidak promosi` — ILLEGAL — parse_san('Tidak bisa, bidak promosi') failed: unsupported multi-leg move: 'Tidak bisa, bidak promosi'
  - B. `Bisa, raja menangkap di e7` — ILLEGAL — parse_san('Bisa, raja menangkap di e7') failed: unsupported multi-leg move: 'Bisa, raja menangkap di e7'
  - C. `Bisa, raja menangkap di e8` — ILLEGAL — parse_san('Bisa, raja menangkap di e8') failed: unsupported multi-leg move: 'Bisa, raja menangkap di e8'
  - D. `Tergantung langkah pertama Putih lain` — ILLEGAL — parse_san('Tergantung langkah pertama Putih lain') failed: invalid san: 'Tergantung langkah pertama Putih lain'

### Soal 33
- **Tema:** TAK — Sederet Tukar Menguntungkan (Counting Captures)
- **FEN:** `r2qkb1r/ppp2ppp/2n2n2/3pp3/3P4/2N1PN2/PPP2PPP/R1BQKB1R w KQkq - 0 6`
  - A. `Ya — attacker (2) ≥ defender (2), dan urutan tukar untung` — ILLEGAL — parse_san('Ya — attacker (2) ≥ defender (2), dan urutan tukar untung') failed: unsupported multi-leg move: 'Ya — attacker (2) ≥ defender (2), dan urutan tukar untung'
  - B. `Tidak — defender selalu menang dalam tukar` — ILLEGAL — parse_san('Tidak — defender selalu menang dalam tukar') failed: invalid san: 'Tidak — defender selalu menang dalam tukar'
  - C. `Ya, tapi hanya dengan menteri` — ILLEGAL — parse_san('Ya, tapi hanya dengan menteri') failed: unsupported multi-leg move: 'Ya, tapi hanya dengan menteri'
  - D. `Tergantung warna kotak` — ILLEGAL — parse_san('Tergantung warna kotak') failed: invalid san: 'Tergantung warna kotak'

### Soal 34
- **Tema:** STR — Color Complex (Kompleks Warna)
- **FEN:** `r2q1rk1/ppp2ppp/3p1n2/4p3/4P3/3P1N2/PPP2PPP/R1BQ1RK1 w - - 0 1`
  - A. `Tempatkan bidak di kotak gelap, manfaatkan gajah terang di kotak terang` — ILLEGAL — parse_san('Tempatkan bidak di kotak gelap, manfaatkan gajah terang di kotak terang') failed: unsupported multi-leg move: 'Tempatkan bidak di kotak gelap, manfaatkan gajah terang di kotak terang'
  - B. `Tukar semua gajah segera` — ILLEGAL — parse_san('Tukar semua gajah segera') failed: invalid san: 'Tukar semua gajah segera'
  - C. `Push bidak ke promosi sebanyak mungkin` — ILLEGAL — parse_san('Push bidak ke promosi sebanyak mungkin') failed: invalid san: 'Push bidak ke promosi sebanyak mungkin'
  - D. `Defend dengan benteng saja` — ILLEGAL — parse_san('Defend dengan benteng saja') failed: invalid san: 'Defend dengan benteng saja'

### Soal 35
- **Tema:** BUK — Identifikasi Pembukaan Queen's Gambit
- **FEN:** `rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2`
  - A. `Queen's Gambit` — ILLEGAL — parse_san("Queen's Gambit") failed: invalid san: "Queen's Gambit"
  - B. `London System` — ILLEGAL — parse_san('London System') failed: invalid san: 'London System'
  - C. `Catalan` — ILLEGAL — parse_san('Catalan') failed: invalid san: 'Catalan'
  - D. `Slav Defense` — ILLEGAL — parse_san('Slav Defense') failed: invalid san: 'Slav Defense'

### Soal 37
- **Tema:** END — KP-K Race (Lomba Bidak)
- **FEN:** `8/p7/8/8/8/8/7P/k6K w - - 0 1`
  - A. `Keduanya promosi bersamaan, posisi remis dengan QvQ` — ILLEGAL — parse_san('Keduanya promosi bersamaan, posisi remis dengan QvQ') failed: unsupported multi-leg move: 'Keduanya promosi bersamaan, posisi remis dengan QvQ'
  - B. `Putih promosi duluan dan menang` — ILLEGAL — parse_san('Putih promosi duluan dan menang') failed: invalid san: 'Putih promosi duluan dan menang'
  - C. `Hitam promosi duluan dan menang` — ILLEGAL — parse_san('Hitam promosi duluan dan menang') failed: invalid san: 'Hitam promosi duluan dan menang'
  - D. `Putih kalah karena bidak h lebih jauh` — ILLEGAL — parse_san('Putih kalah karena bidak h lebih jauh') failed: invalid san: 'Putih kalah karena bidak h lebih jauh'

### Soal 38
- **Tema:** TAK — Diskoveri Skak (Discovered Check)
- **FEN:** `r3k3/8/8/8/2B5/8/4N3/4K3 w - - 0 1`
  - A. `Nd4+ (discovered check + menyerang benteng a8 lewat kuda? Tidak — Nd4 tidak buka diagonal)` — ILLEGAL — parse_san('Nd4+ (discovered check + menyerang benteng a8 lewat kuda? Tidak — Nd4 tidak buka diagonal)') failed: invalid san: 'Nd4+ (discovered check + menyerang benteng a8 lewat kuda? Tidak — Nd4 tidak buka diagonal)'
  - B. `Nc3+ (discovered check + menyerang benteng a8 dengan kuda? Kuda c3 tidak menyerang a8)` — ILLEGAL — parse_san('Nc3+ (discovered check + menyerang benteng a8 dengan kuda? Kuda c3 tidak menyerang a8)') failed: invalid san: 'Nc3+ (discovered check + menyerang benteng a8 dengan kuda? Kuda c3 tidak menyerang a8)'
  - C. `Nf4+ (discovered check)` — ILLEGAL — parse_san('Nf4+ (discovered check)') failed: invalid san: 'Nf4+ (discovered check)'
  - D. `Bxe6+` — OK

### Soal 39
- **Tema:** STR — Prophylaxis (Pencegahan)
- **FEN:** `r2q1rk1/pp2bppp/2n1pn2/3p4/3P1B2/2NBPN2/PP3PPP/R2Q1RK1 w - - 0 1`
  - A. `h3 (prevent Ng4)` — ILLEGAL — parse_san('h3 (prevent Ng4)') failed: invalid san: 'h3 (prevent Ng4)'
  - B. `Bxh7+ (Greek Gift)` — ILLEGAL — parse_san('Bxh7+ (Greek Gift)') failed: invalid san: 'Bxh7+ (Greek Gift)'
  - C. `Rxa7 (snatch pawn)` — ILLEGAL — parse_san('Rxa7 (snatch pawn)') failed: invalid san: 'Rxa7 (snatch pawn)'
  - D. `Qd2 (preparation)` — ILLEGAL — parse_san('Qd2 (preparation)') failed: invalid san: 'Qd2 (preparation)'

### Soal 40
- **Tema:** END — Triangulasi Raja
- **FEN:** `8/8/4k3/4P3/3K4/8/8/8 w - - 0 1`
  - A. `Kd3 -> Ke3 -> Kd4 (triangle dengan 1 tempo loss)` — ILLEGAL — parse_san('Kd3 -> Ke3 -> Kd4 (triangle dengan 1 tempo loss)') failed: invalid san: 'Kd3 -> Ke3 -> Kd4 (triangle dengan 1 tempo loss)'
  - B. `e6+ langsung promosi` — ILLEGAL — parse_san('e6+ langsung promosi') failed: invalid san: 'e6+ langsung promosi'
  - C. `Kc4 -> kembali ke d4 (2-square approach)` — ILLEGAL — parse_san('Kc4 -> kembali ke d4 (2-square approach)') failed: invalid san: 'Kc4 -> kembali ke d4 (2-square approach)'
  - D. `Kxe5 (raja makan bidak sendiri ilegal)` — ILLEGAL — parse_san('Kxe5 (raja makan bidak sendiri ilegal)') failed: invalid san: 'Kxe5 (raja makan bidak sendiri ilegal)'

### Soal 41
- **Tema:** TAK — Skewer (Tusuk Sate)
- **FEN:** `8/8/8/8/8/3k4/8/3R2K1 w - - 0 1`
  - A. `Skak ke raja, raja pindah, lalu ambil bidak di belakang` — ILLEGAL — parse_san('Skak ke raja, raja pindah, lalu ambil bidak di belakang') failed: unsupported multi-leg move: 'Skak ke raja, raja pindah, lalu ambil bidak di belakang'
  - B. `Skak yang langsung mat` — ILLEGAL — parse_san('Skak yang langsung mat') failed: invalid san: 'Skak yang langsung mat'
  - C. `Tukar benteng untuk simplifikasi` — ILLEGAL — parse_san('Tukar benteng untuk simplifikasi') failed: invalid san: 'Tukar benteng untuk simplifikasi'
  - D. `Mundur benteng untuk fianchetto` — ILLEGAL — parse_san('Mundur benteng untuk fianchetto') failed: invalid san: 'Mundur benteng untuk fianchetto'

### Soal 42
- **Tema:** BUK — Berlin Defense (Kramnik-Kasparov 2000)
- **FEN:** `r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4`
  - A. `O-O (Berlin Wall)` — ILLEGAL — parse_san('O-O (Berlin Wall)') failed: invalid san: 'O-O (Berlin Wall)'
  - B. `Bxc6 immediately` — ILLEGAL — parse_san('Bxc6 immediately') failed: invalid san: 'Bxc6 immediately'
  - C. `d3 quiet` — ILLEGAL — parse_san('d3 quiet') failed: invalid san: 'd3 quiet'
  - D. `Nc3 four knights` — ILLEGAL — parse_san('Nc3 four knights') failed: invalid san: 'Nc3 four knights'

### Soal 43
- **Tema:** STR — Connected Pawns (Bidak Terhubung)
- **FEN:** `8/8/8/8/8/4PP2/8/k6K w - - 0 1`
  - A. `Saling melindungi saat maju — sulit dihentikan` — ILLEGAL — parse_san('Saling melindungi saat maju — sulit dihentikan') failed: invalid san: 'Saling melindungi saat maju — sulit dihentikan'
  - B. `Tidak bisa di-block oleh bidak musuh` — ILLEGAL — parse_san('Tidak bisa di-block oleh bidak musuh') failed: invalid san: 'Tidak bisa di-block oleh bidak musuh'
  - C. `Otomatis promosi dalam 2 langkah` — ILLEGAL — parse_san('Otomatis promosi dalam 2 langkah') failed: invalid san: 'Otomatis promosi dalam 2 langkah'
  - D. `Aman dari skak menteri musuh` — ILLEGAL — parse_san('Aman dari skak menteri musuh') failed: invalid san: 'Aman dari skak menteri musuh'

### Soal 44
- **Tema:** BUK — Identifikasi Pembukaan London System
- **FEN:** `rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 2 3`
  - A. `London System` — ILLEGAL — parse_san('London System') failed: invalid san: 'London System'
  - B. `Queen's Gambit` — ILLEGAL — parse_san("Queen's Gambit") failed: invalid san: "Queen's Gambit"
  - C. `Trompowsky` — ILLEGAL — parse_san('Trompowsky') failed: invalid san: 'Trompowsky'
  - D. `Réti Opening` — ILLEGAL — parse_san('Réti Opening') failed: invalid san: 'Réti Opening'

### Soal 45
- **Tema:** TAK — Deflection (Pengalihan)
- **FEN:** `6k1/5pp1/8/8/8/8/5PP1/3Q1RK1 w - - 0 1`
  - A. `Cari bidak Hitam yang menjaga baris belakang, deflect, lalu Rf8#` — ILLEGAL — parse_san('Cari bidak Hitam yang menjaga baris belakang, deflect, lalu Rf8#') failed: unsupported multi-leg move: 'Cari bidak Hitam yang menjaga baris belakang, deflect, lalu Rf8#'
  - B. `Push f4 g4 mendorong sayap raja` — ILLEGAL — parse_san('Push f4 g4 mendorong sayap raja') failed: invalid san: 'Push f4 g4 mendorong sayap raja'
  - C. `Trade pieces simplify` — ILLEGAL — parse_san('Trade pieces simplify') failed: invalid san: 'Trade pieces simplify'
  - D. `Defend with Rf1-e1 movement` — ILLEGAL — parse_san('Defend with Rf1-e1 movement') failed: invalid san: 'Defend with Rf1-e1 movement'

### Soal 47
- **Tema:** END — Philidor Position (Third Rank Defense)
- **FEN:** `8/8/8/2k5/2P5/2K5/4r3/3R4 b - - 0 1`
  - A. `Benteng Hitam tetap di rank 6 (sudut Putih = rank 3 sudut Hitam) mencegah raja Putih maju, sampai bidak push lalu skak dari belakang` — ILLEGAL — parse_san('Benteng Hitam tetap di rank 6 (sudut Putih = rank 3 sudut Hitam) mencegah raja Putih maju, sampai bidak push lalu skak dari belakang') failed: unsupported multi-leg move: 'Benteng Hitam tetap di rank 6 (sudut Putih = rank 3 sudut Hitam) mencegah raja Putih maju, sampai bidak push lalu skak dari belakang'
  - B. `Tukar benteng segera` — ILLEGAL — parse_san('Tukar benteng segera') failed: invalid san: 'Tukar benteng segera'
  - C. `Push raja ke depan` — ILLEGAL — parse_san('Push raja ke depan') failed: invalid san: 'Push raja ke depan'
  - D. `Mundur ke sudut` — ILLEGAL — parse_san('Mundur ke sudut') failed: invalid san: 'Mundur ke sudut'

### Soal 48
- **Tema:** TAK — Mat dalam 2 Langkah (Mate in Two)
- **FEN:** `6k1/6pp/8/8/8/8/8/R3R1K1 w - - 0 1`
  - A. `Ra8+ Kf7 (only legal) Re7#` — ILLEGAL — parse_san('Ra8+ Kf7 (only legal) Re7#') failed: invalid san: 'Ra8+ Kf7 (only legal) Re7#'
  - B. `Re8+ Kf7 Ra7# (skak terpotong)` — ILLEGAL — parse_san('Re8+ Kf7 Ra7# (skak terpotong)') failed: invalid san: 'Re8+ Kf7 Ra7# (skak terpotong)'
  - C. `Ra1-Ra8 dengan benteng ladder` — ILLEGAL — parse_san('Ra1-Ra8 dengan benteng ladder') failed: invalid san: 'Ra1-Ra8 dengan benteng ladder'
  - D. `Re1-Re8 mat instant` — ILLEGAL — parse_san('Re1-Re8 mat instant') failed: invalid san: 'Re1-Re8 mat instant'

### Soal 49
- **Tema:** BUK — Marshall Attack
- **FEN:** `r1bq1rk1/2p1bppp/p1n2n2/1p1pp3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 9`
  - A. `Pengorbanan bidak Hitam untuk serangan menteri-sayap raja jangka panjang` — ILLEGAL — parse_san('Pengorbanan bidak Hitam untuk serangan menteri-sayap raja jangka panjang') failed: invalid san: 'Pengorbanan bidak Hitam untuk serangan menteri-sayap raja jangka panjang'
  - B. `Sistem pertahanan defensif untuk Hitam` — ILLEGAL — parse_san('Sistem pertahanan defensif untuk Hitam') failed: invalid san: 'Sistem pertahanan defensif untuk Hitam'
  - C. `Variasi endgame Ruy Lopez` — ILLEGAL — parse_san('Variasi endgame Ruy Lopez') failed: invalid san: 'Variasi endgame Ruy Lopez'
  - D. `Anti-Berlin Defense oleh Putih` — ILLEGAL — parse_san('Anti-Berlin Defense oleh Putih') failed: invalid san: 'Anti-Berlin Defense oleh Putih'

### Soal 50
- **Tema:** TAK — Morphy's Opera Game Queen Sacrifice (Paris 1858)
- **FEN:** `4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 0 17`
  - A. `Qb8+! (queen sacrifice)` — ILLEGAL — parse_san('Qb8+! (queen sacrifice)') failed: invalid san: 'Qb8+! (queen sacrifice)'
  - B. `Rxd7` — OK
  - C. `Bxd7+` — ILLEGAL — parse_san('Bxd7+') failed: illegal san: 'Bxd7+' in 4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 0 17
  - D. `Qxe6+` — OK

### Soal 52
- **Tema:** BUK — Identifikasi Trompowsky Attack
- **FEN:** `rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq - 2 2`
  - A. `London System` — ILLEGAL — parse_san('London System') failed: invalid san: 'London System'
  - B. `Trompowsky Attack` — ILLEGAL — parse_san('Trompowsky Attack') failed: invalid san: 'Trompowsky Attack'
  - C. `Torre Attack` — ILLEGAL — parse_san('Torre Attack') failed: invalid san: 'Torre Attack'
  - D. `Veresov` — ILLEGAL — parse_san('Veresov') failed: invalid san: 'Veresov'

### Soal 54
- **Tema:** STR — Connected Pawns
- **FEN:** `r1bqkb1r/pp3ppp/2n1pn2/2pp4/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6`
  - A. `e5` — OK
  - B. `exd5` — OK
  - C. `dxc5` — OK
  - D. `d5` — ILLEGAL — parse_san('d5') failed: illegal san: 'd5' in r1bqkb1r/pp3ppp/2n1pn2/2pp4/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6

### Soal 55
- **Tema:** TAK — Zwischenzug (In-Between Move)
- **FEN:** `r1bq1rk1/pp2bppp/2n2n2/3pn3/2BP4/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 8`
  - A. `dxe5` — OK
  - B. `Bxf7+` — ILLEGAL — parse_san('Bxf7+') failed: illegal san: 'Bxf7+' in r1bq1rk1/pp2bppp/2n2n2/3pn3/2BP4/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 8
  - C. `Nxe5` — OK
  - D. `Nxd5` — OK

### Soal 56
- **Tema:** BUK — Identifikasi Slav Defense
- **FEN:** `rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3`
  - A. `Queen's Gambit Declined` — ILLEGAL — parse_san("Queen's Gambit Declined") failed: invalid san: "Queen's Gambit Declined"
  - B. `Slav Defense` — ILLEGAL — parse_san('Slav Defense') failed: invalid san: 'Slav Defense'
  - C. `Albin Counter-Gambit` — ILLEGAL — parse_san('Albin Counter-Gambit') failed: invalid san: 'Albin Counter-Gambit'
  - D. `Chigorin Defense` — ILLEGAL — parse_san('Chigorin Defense') failed: invalid san: 'Chigorin Defense'

### Soal 59
- **Tema:** END — Insufficient Material
- **FEN:** `8/8/4k3/8/8/4B3/4K3/8 w - - 0 1`
  - A. `Putih menang` — ILLEGAL — parse_san('Putih menang') failed: invalid san: 'Putih menang'
  - B. `Remis` — ILLEGAL — parse_san('Remis') failed: invalid san: 'Remis'
  - C. `Hitam menang` — ILLEGAL — parse_san('Hitam menang') failed: invalid san: 'Hitam menang'
  - D. `Remis tapi hanya jika 50 langkah` — ILLEGAL — parse_san('Remis tapi hanya jika 50 langkah') failed: invalid san: 'Remis tapi hanya jika 50 langkah'

### Soal 60
- **Tema:** TAK — Anderssen's Immortal Game Highlight
- **FEN:** `r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1 w - - 0 20`
  - A. `Kxg1` — ILLEGAL — parse_san('Kxg1') failed: illegal san: 'Kxg1' in r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1 w - - 0 20
  - B. `Nf6+` — OK
  - C. `Bd6` — OK
  - D. `Qf6+` — ILLEGAL — parse_san('Qf6+') failed: illegal san: 'Qf6+' in r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1 w - - 0 20

### Soal 61
- **Tema:** TAK — Pin Absolut
- **FEN:** `r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 3 4`
  - A. `Bxc6 dxc6` — ILLEGAL — parse_san('Bxc6 dxc6') failed: invalid san: 'Bxc6 dxc6'
  - B. `Nxe5` — OK
  - C. `d4` — OK
  - D. `O-O` — OK

### Soal 62
- **Tema:** BUK — Identifikasi London System
- **FEN:** `rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 3 3`
  - A. `Trompowsky` — ILLEGAL — parse_san('Trompowsky') failed: invalid san: 'Trompowsky'
  - B. `Colle System` — ILLEGAL — parse_san('Colle System') failed: invalid san: 'Colle System'
  - C. `London System` — ILLEGAL — parse_san('London System') failed: invalid san: 'London System'
  - D. `Torre Attack` — ILLEGAL — parse_san('Torre Attack') failed: invalid san: 'Torre Attack'

### Soal 63
- **Tema:** END — Bishop vs Knight in Open Position
- **FEN:** `8/p4pkp/1p4p1/8/P4P1P/1P4P1/5K2/3B1n2 w - - 0 1`
  - A. `Gajah` — ILLEGAL — parse_san('Gajah') failed: invalid san: 'Gajah'
  - B. `Kuda` — ILLEGAL — parse_san('Kuda') failed: invalid san: 'Kuda'
  - C. `Sama saja` — ILLEGAL — parse_san('Sama saja') failed: invalid san: 'Sama saja'
  - D. `Gajah, tapi hanya kalau berwarna sama Raja lawan` — ILLEGAL — parse_san('Gajah, tapi hanya kalau berwarna sama Raja lawan') failed: unsupported multi-leg move: 'Gajah, tapi hanya kalau berwarna sama Raja lawan'

### Soal 65
- **Tema:** TAK — Anastasia's Mate
- **FEN:** `7k/4N1pp/8/8/8/8/8/6RK w - - 0 1`
  - A. `Rh1+` — ILLEGAL — parse_san('Rh1+') failed: illegal san: 'Rh1+' in 7k/4N1pp/8/8/8/8/8/6RK w - - 0 1
  - B. `Nf5` — OK
  - C. `Nxg6+` — OK
  - D. `Rg2` — OK

### Soal 67
- **Tema:** BUK — Identifikasi King's Indian Defense
- **FEN:** `rnbqk2r/ppppppbp/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4`
  - A. `Grünfeld Defense` — ILLEGAL — parse_san('Grünfeld Defense') failed: invalid san: 'Grünfeld Defense'
  - B. `Modern Defense` — ILLEGAL — parse_san('Modern Defense') failed: invalid san: 'Modern Defense'
  - C. `King's Indian Defense` — ILLEGAL — parse_san("King's Indian Defense") failed: invalid san: "King's Indian Defense"
  - D. `Pirc Defense` — ILLEGAL — parse_san('Pirc Defense') failed: invalid san: 'Pirc Defense'

### Soal 69
- **Tema:** TAK — Removing the Defender
- **FEN:** `r1bqkb1r/ppp2ppp/2n2n2/3pp3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 5`
  - A. `Bg4` — OK
  - B. `Nxe4` — OK
  - C. `O-O` — ILLEGAL — parse_san('O-O') failed: illegal san: 'O-O' in r1bqkb1r/ppp2ppp/2n2n2/3pp3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 5
  - D. `d4` — OK

### Soal 72
- **Tema:** BUK — Nimzo-Indian Defense: Konsep Utama
- **FEN:** `rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR b KQkq - 0 4`
  - A. `Menyerang pion c4 secara langsung` — ILLEGAL — parse_san('Menyerang pion c4 secara langsung') failed: invalid san: 'Menyerang pion c4 secara langsung'
  - B. `Merusak struktur pion Putih dengan menukar Gajah untuk Kuda c3` — ILLEGAL — parse_san('Merusak struktur pion Putih dengan menukar Gajah untuk Kuda c3') failed: invalid san: 'Merusak struktur pion Putih dengan menukar Gajah untuk Kuda c3'
  - C. `Mempersiapkan O-O-O (castle panjang)` — ILLEGAL — parse_san('Mempersiapkan O-O-O (castle panjang)') failed: invalid san: 'Mempersiapkan O-O-O (castle panjang)'
  - D. `Menjaga pion e5 dari serangan` — ILLEGAL — parse_san('Menjaga pion e5 dari serangan') failed: invalid san: 'Menjaga pion e5 dari serangan'

### Soal 74
- **Tema:** STR — Principle of Two Weaknesses
- **FEN:** `6k1/5ppp/p7/1p6/1Pp5/2P1P3/5PPP/6K1 w - - 0 30`
  - A. `g4` — OK
  - B. `Kf2` — ILLEGAL — parse_san('Kf2') failed: illegal san: 'Kf2' in 6k1/5ppp/p7/1p6/1Pp5/2P1P3/5PPP/6K1 w - - 0 30
  - C. `e4` — OK
  - D. `cxb4` — ILLEGAL — parse_san('cxb4') failed: illegal san: 'cxb4' in 6k1/5ppp/p7/1p6/1Pp5/2P1P3/5PPP/6K1 w - - 0 30

### Soal 75
- **Tema:** END — Philidor Position (Teknik Remis)
- **FEN:** `8/8/3k4/3p4/8/8/3K4/3R4 b - - 0 1`
  - A. `...d4` — ILLEGAL — parse_san('...d4') failed: invalid san: '...d4'
  - B. `...Ke5` — ILLEGAL — parse_san('...Ke5') failed: invalid san: '...Ke5'
  - C. `...Kc5` — ILLEGAL — parse_san('...Kc5') failed: invalid san: '...Kc5'
  - D. `...Ke6` — ILLEGAL — parse_san('...Ke6') failed: invalid san: '...Ke6'

### Soal 76
- **Tema:** BUK — Grünfeld Defense: Ide Pokok
- **FEN:** `rnbqkb1r/ppp1pp1p/6p1/3n4/3PP3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 5`
  - A. `...Nxc3` — ILLEGAL — parse_san('...Nxc3') failed: invalid san: '...Nxc3'
  - B. `...Nb6` — ILLEGAL — parse_san('...Nb6') failed: invalid san: '...Nb6'
  - C. `...Nf6` — ILLEGAL — parse_san('...Nf6') failed: invalid san: '...Nf6'
  - D. `...e5` — ILLEGAL — parse_san('...e5') failed: invalid san: '...e5'

### Soal 77
- **Tema:** TAK — Windmill Pattern
- **FEN:** `5rk1/p4pBp/1p2p3/2p5/8/1B6/PP3PPP/R5K1 w - - 0 24`
  - A. `Bxf8` — OK
  - B. `Ra8` — ILLEGAL — parse_san('Ra8') failed: illegal san: 'Ra8' in 5rk1/p4pBp/1p2p3/2p5/8/1B6/PP3PPP/R5K1 w - - 0 24
  - C. `Bh6` — OK
  - D. `Re1` — OK

### Soal 78
- **Tema:** STR — Open File Control dengan Benteng Ganda
- **FEN:** `r1b1r1k1/pp3ppp/2p2n2/3p4/3P4/2N1BN2/PP3PPP/R2R2K1 w - - 0 14`
  - A. `Rdd1` — ILLEGAL — parse_san('Rdd1') failed: illegal san: 'Rdd1' in r1b1r1k1/pp3ppp/2p2n2/3p4/3P4/2N1BN2/PP3PPP/R2R2K1 w - - 0 14
  - B. `Rad1` — ILLEGAL — parse_san('Rad1') failed: illegal san: 'Rad1' in r1b1r1k1/pp3ppp/2p2n2/3p4/3P4/2N1BN2/PP3PPP/R2R2K1 w - - 0 14
  - C. `Ne5` — OK
  - D. `Bc1` — OK

### Soal 79
- **Tema:** END — Zugzwang dalam Pion Endgame
- **FEN:** `8/8/4k3/4p3/4P3/4K3/8/8 w - - 0 1`
  - A. `Putih menang — dengan maju pion e5` — ILLEGAL — parse_san('Putih menang — dengan maju pion e5') failed: invalid san: 'Putih menang — dengan maju pion e5'
  - B. `Remis — karena posisi simetri` — ILLEGAL — parse_san('Remis — karena posisi simetri') failed: invalid san: 'Remis — karena posisi simetri'
  - C. `Putih kalah — karena zugzwang` — ILLEGAL — parse_san('Putih kalah — karena zugzwang') failed: invalid san: 'Putih kalah — karena zugzwang'
  - D. `Tergantung — bisa menang atau remis tergantung respons Hitam` — ILLEGAL — parse_san('Tergantung — bisa menang atau remis tergantung respons Hitam') failed: invalid san: 'Tergantung — bisa menang atau remis tergantung respons Hitam'

### Soal 80
- **Tema:** BUK — Dutch Defense: Variasi Leningrad
- **FEN:** `rnbqk2r/ppppp1bp/5np1/5p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1 b kq - 0 6`
  - A. `...O-O` — ILLEGAL — parse_san('...O-O') failed: invalid san: '...O-O'
  - B. `...e6` — ILLEGAL — parse_san('...e6') failed: invalid san: '...e6'
  - C. `...d5` — ILLEGAL — parse_san('...d5') failed: invalid san: '...d5'
  - D. `...c6` — ILLEGAL — parse_san('...c6') failed: invalid san: '...c6'

### Soal 81
- **Tema:** STR — Exchange Sacrifice untuk Dominasi Posisional
- **FEN:** `r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PP2BPPP/R1BQ1RK1 w - - 0 8`
  - A. `Karena Benteng bernilai lebih tinggi dari Kuda/Gajah` — ILLEGAL — parse_san('Karena Benteng bernilai lebih tinggi dari Kuda/Gajah') failed: invalid san: 'Karena Benteng bernilai lebih tinggi dari Kuda/Gajah'
  - B. `Karena menghancurkan struktur pion Hitam dan mendapat outpost` — ILLEGAL — parse_san('Karena menghancurkan struktur pion Hitam dan mendapat outpost') failed: invalid san: 'Karena menghancurkan struktur pion Hitam dan mendapat outpost'
  - C. `Karena memaksa Raja Hitam membuka posisi` — ILLEGAL — parse_san('Karena memaksa Raja Hitam membuka posisi') failed: invalid san: 'Karena memaksa Raja Hitam membuka posisi'
  - D. `Karena membuka kolom c untuk serangan langsung` — ILLEGAL — parse_san('Karena membuka kolom c untuk serangan langsung') failed: invalid san: 'Karena membuka kolom c untuk serangan langsung'

### Soal 83
- **Tema:** END — Triangulation (Teknik Segitiga Raja)
- **FEN:** `8/8/3k4/3p1p2/3P1P2/3K4/8/8 w - - 0 1`
  - A. `Ke3` — OK
  - B. `Kc3` — OK
  - C. `Kd2` — OK
  - D. `Ke4` — ILLEGAL — parse_san('Ke4') failed: illegal san: 'Ke4' in 8/8/3k4/3p1p2/3P1P2/3K4/8/8 w - - 0 1

### Soal 86
- **Tema:** END — Bishop Endgame: Same Color vs Different Color
- **FEN:** `8/5p2/3k2p1/7p/7P/3K2P1/5P2/6B1 w - - 0 1`
  - A. `Karena Gajah tidak bisa membantu pion promosi` — ILLEGAL — parse_san('Karena Gajah tidak bisa membantu pion promosi') failed: invalid san: 'Karena Gajah tidak bisa membantu pion promosi'
  - B. `Karena Gajah bertahan bisa memblokir di warna yang tidak bisa diserang Gajah lawan` — ILLEGAL — parse_san('Karena Gajah bertahan bisa memblokir di warna yang tidak bisa diserang Gajah lawan') failed: invalid san: 'Karena Gajah bertahan bisa memblokir di warna yang tidak bisa diserang Gajah lawan'
  - C. `Karena Raja lebih aktif dari Gajah dalam endgame` — ILLEGAL — parse_san('Karena Raja lebih aktif dari Gajah dalam endgame') failed: invalid san: 'Karena Raja lebih aktif dari Gajah dalam endgame'
  - D. `Karena pion menjadi lebih penting dari Gajah di endgame` — ILLEGAL — parse_san('Karena pion menjadi lebih penting dari Gajah di endgame') failed: invalid san: 'Karena pion menjadi lebih penting dari Gajah di endgame'

### Soal 87
- **Tema:** TAK — Smothered Mate
- **FEN:** `6rk/6pp/8/8/8/8/8/3QN1K1 w - - 0 1`
  - A. `Nf3` — OK
  - B. `Qd8+` — OK
  - C. `Nf7+` — ILLEGAL — parse_san('Nf7+') failed: illegal san: 'Nf7+' in 6rk/6pp/8/8/8/8/8/3QN1K1 w - - 0 1
  - D. `Qh5` — OK

### Soal 89
- **Tema:** END — King Opposition dalam Pion Endgame
- **FEN:** `8/8/4k3/8/4K3/4P3/8/8 w - - 0 1`
  - A. `e4` — ILLEGAL — parse_san('e4') failed: illegal san: 'e4' in 8/8/4k3/8/4K3/4P3/8/8 w - - 0 1
  - B. `Kd4` — OK
  - C. `Kf4` — OK
  - D. `Ke5` — ILLEGAL — parse_san('Ke5') failed: illegal san: 'Ke5' in 8/8/4k3/8/4K3/4P3/8/8 w - - 0 1

### Soal 90
- **Tema:** STR — Prophylaxis: Mencegah Rencana Lawan
- **FEN:** `r2q1rk1/ppp2ppp/2n1pn2/3p4/3P4/2N1PN2/PPQ2PPP/R1B2RK1 w - - 0 10`
  - A. `Bd3` — ILLEGAL — parse_san('Bd3') failed: illegal san: 'Bd3' in r2q1rk1/ppp2ppp/2n1pn2/3p4/3P4/2N1PN2/PPQ2PPP/R1B2RK1 w - - 0 10
  - B. `Ne5` — OK
  - C. `Qd2` — OK
  - D. `b4` — OK

### Soal 92
- **Tema:** TAK — Overloading a Piece
- **FEN:** `r3k2r/ppp2ppp/2n1pn2/3p4/2B1P3/2N2N2/PPP2PPP/R1BQR1K1 b kq - 0 8`
  - A. `Nxd5` — ILLEGAL — parse_san('Nxd5') failed: illegal san: 'Nxd5' in r3k2r/ppp2ppp/2n1pn2/3p4/2B1P3/2N2N2/PPP2PPP/R1BQR1K1 b kq - 0 8
  - B. `Bxf7+` — ILLEGAL — parse_san('Bxf7+') failed: illegal san: 'Bxf7+' in r3k2r/ppp2ppp/2n1pn2/3p4/2B1P3/2N2N2/PPP2PPP/R1BQR1K1 b kq - 0 8
  - C. `Nd5` — ILLEGAL — parse_san('Nd5') failed: illegal san: 'Nd5' in r3k2r/ppp2ppp/2n1pn2/3p4/2B1P3/2N2N2/PPP2PPP/R1BQR1K1 b kq - 0 8
  - D. `Re3` — ILLEGAL — parse_san('Re3') failed: illegal san: 'Re3' in r3k2r/ppp2ppp/2n1pn2/3p4/2B1P3/2N2N2/PPP2PPP/R1BQR1K1 b kq - 0 8

### Soal 93
- **Tema:** END — Pawn Majority dalam Endgame
- **FEN:** `8/5ppp/6k1/8/8/6K1/5PPP/8 w - - 0 1`
  - A. `h4` — OK
  - B. `f4` — OK
  - C. `Kf4` — OK
  - D. `g4` — ILLEGAL — parse_san('g4') failed: illegal san: 'g4' in 8/5ppp/6k1/8/8/6K1/5PPP/8 w - - 0 1

### Soal 94
- **Tema:** STR — Weak Squares dan Color Weakness
- **FEN:** `r2q1rk1/pp1b1ppp/2p1pn2/3p4/3P4/2NBP3/PP3PPP/R2Q1RK1 w - - 0 10`
  - A. `Ne5` — ILLEGAL — parse_san('Ne5') failed: illegal san: 'Ne5' in r2q1rk1/pp1b1ppp/2p1pn2/3p4/3P4/2NBP3/PP3PPP/R2Q1RK1 w - - 0 10
  - B. `Bb5` — OK
  - C. `f4` — OK
  - D. `Qh5` — OK

### Soal 95
- **Tema:** BUK — Benko Gambit: Filosofi dan Struktur
- **FEN:** `rnbqkb1r/p3pppp/5n2/1ppP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq b6 0 4`
  - A. `Serangan langsung ke Raja Putih` — ILLEGAL — parse_san('Serangan langsung ke Raja Putih') failed: invalid san: 'Serangan langsung ke Raja Putih'
  - B. `Tekanan permanen di sayap Wazir via kolom a dan b terbuka` — ILLEGAL — parse_san('Tekanan permanen di sayap Wazir via kolom a dan b terbuka') failed: invalid san: 'Tekanan permanen di sayap Wazir via kolom a dan b terbuka'
  - C. `Pusat pion yang kuat dengan d5+e5` — ILLEGAL — parse_san('Pusat pion yang kuat dengan d5+e5') failed: invalid san: 'Pusat pion yang kuat dengan d5+e5'
  - D. `Pasangan Gajah yang aktif di diagonal terbuka` — ILLEGAL — parse_san('Pasangan Gajah yang aktif di diagonal terbuka') failed: invalid san: 'Pasangan Gajah yang aktif di diagonal terbuka'

### Soal 96
- **Tema:** END — Queen vs Rook Endgame
- **FEN:** `8/8/8/8/8/5k2/5r2/5K1Q w - - 0 1`
  - A. `Menyerang Benteng langsung dengan Wazir untuk memenangkan materi` — ILLEGAL — parse_san('Menyerang Benteng langsung dengan Wazir untuk memenangkan materi') failed: invalid san: 'Menyerang Benteng langsung dengan Wazir untuk memenangkan materi'
  - B. `Memaksa Raja lawan ke sudut, lalu fork atau memisahkan Raja dari Bentengnya` — ILLEGAL — parse_san('Memaksa Raja lawan ke sudut, lalu fork atau memisahkan Raja dari Bentengnya') failed: unsupported multi-leg move: 'Memaksa Raja lawan ke sudut, lalu fork atau memisahkan Raja dari Bentengnya'
  - C. `Menukar Wazir untuk Benteng dan bermain Raja+pion endgame` — ILLEGAL — parse_san('Menukar Wazir untuk Benteng dan bermain Raja+pion endgame') failed: invalid san: 'Menukar Wazir untuk Benteng dan bermain Raja+pion endgame'
  - D. `Menggunakan pion sebagai alat tempur utama` — ILLEGAL — parse_san('Menggunakan pion sebagai alat tempur utama') failed: invalid san: 'Menggunakan pion sebagai alat tempur utama'

### Soal 100
- **Tema:** BUK — Modern Defense: Ide dan Karakteristik
- **FEN:** `rnbqk1nr/ppppppbp/6p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 3`
  - A. `Modern Defense memainkan ...d5 sementara King's Indian tidak` — ILLEGAL — parse_san("Modern Defense memainkan ...d5 sementara King's Indian tidak") failed: invalid san: "Modern Defense memainkan ...d5 sementara King's Indian tidak"
  - B. `Modern Defense menunda Kuda f6 untuk menjaga fleksibilitas, King's Indian langsung ...Nf6` — ILLEGAL — parse_san("Modern Defense menunda Kuda f6 untuk menjaga fleksibilitas, King's Indian langsung ...Nf6") failed: unsupported multi-leg move: "Modern Defense menunda Kuda f6 untuk menjaga fleksibilitas, King's Indian langsung ...Nf6"
  - C. `Modern Defense menggunakan pion e5 sebagai counter, King's Indian tidak` — ILLEGAL — parse_san("Modern Defense menggunakan pion e5 sebagai counter, King's Indian tidak") failed: unsupported multi-leg move: "Modern Defense menggunakan pion e5 sebagai counter, King's Indian tidak"
  - D. `Modern Defense hanya bisa dimainkan melawan 1.e4, King's Indian hanya melawan 1.d4` — ILLEGAL — parse_san("Modern Defense hanya bisa dimainkan melawan 1.e4, King's Indian hanya melawan 1.d4") failed: unsupported multi-leg move: "Modern Defense hanya bisa dimainkan melawan 1.e4, King's Indian hanya melawan 1.d4"
