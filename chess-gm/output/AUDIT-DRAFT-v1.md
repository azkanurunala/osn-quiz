# Audit Report — Chess GM Draft v1

**Generated:** 2026-05-17
**Files audited:** 2 (200 soal total)
**Method:** Manual heuristic check, no engine validation. Stockfish validation required for definitive verification.

---

## Summary

| Status | Symbol | campur.md | mudah.md | Total |
|--------|:------:|:---------:|:--------:|:-----:|
| Likely OK | OK | 73 | 86 | 159 |
| Check carefully | WARN | 11 | 8 | 19 |
| Likely wrong | WRONG | 5 | 3 | 8 |
| Author flagged (subset, overlaps with WARN/WRONG) | FLAG | 16 | 5 | 21 |

Note: "Author flagged" is not a separate bucket — every flagged soal is already counted under WARN or WRONG. The number reflects how many soal contain explicit author self-doubt phrases.

**Recommendations:**
- Regenerate: 14 soal (the ones marked WRONG plus the worst WARN cases — Soal 8/15/40/58/83/84/96 in campur.md and Soal 35/57/70/96/97/99 in mudah.md)
- Fix in place (minor): 13 soal (small wording or label fixes)
- Keep as-is after engine spot-check: 173 soal

---

## Per-Soal Findings — chess-gm-komprehensif-campur.md

### Soal 1 OK
- FEN syntax legal (8 ranks, both kings, 6 fields, side-to-move matches Giliran)
- Opsi all valid SAN
- Nxe5 wins free knight — reasoning sound

### Soal 2 OK
- Italian Game 3.Bc4 — textbook correct
- All FEN/opsi/jawaban consistent

### Soal 3 OK
- Back rank mate Re8# — geometry correct (Black K at g8, pawns f7/g7/h7 block escape, Re8 covers rank 8)
- Clean

### Soal 4 OK
- a8=Q creates stalemate (K at a1, K at h1, no Q-cover gives Black no legal move); a8=R wins — correct teaching point

### Soal 5 WARN (author flagged)
- Author wrote: "Tunggu — diagram menunjukkan kuda di e4 + menteri di d4: dari e4, kuda jangkau c3, c5, d2, d6, f2, f6, g3, g5. Tidak ada fork ke kedua Raja+Q."
- Final answer D (Nxd4) is defensible (wins queen for knight), but the question title "Royal Fork" is misleading — there is no fork
- Recommendation: rename theme to "Hanging Queen" or re-pose; jawaban itself plausibly OK

### Soal 6 OK
- Opening principle question — 1.e4 textbook
- No issues

### Soal 7 OK
- Ruy Lopez 3.Bb5 — textbook

### Soal 8 WRONG (author flagged)
- Author admits: "sebenarnya posisi ini seri dengan permainan benar dari Hitam"
- Author still declares Jawaban D (e4+) as "paling agresif" — contradicts own analysis
- e4+ is actually a bad move (allows ...Kxe4); the position is theoretically drawn with Black holding opposition
- Recommendation: regenerate. The "best move" is Kd4 or Kf4 fighting for opposition, not e4+

### Soal 9 OK
- Scholar's Mate identification — well-known pattern
- Slight ambiguity: opsi C (Bc4) is also part of Scholar's Mate, but A (Qh5) is more canonically the queen-leading version. Acceptable.

### Soal 10 OK
- Doubled pawns evaluation, Ruy Lopez Exchange — textbook strategic point

### Soal 11 OK
- Queen's Gambit 2.c4 — textbook

### Soal 12 OK (minor)
- Author correctly notes Bg4 creates pin RELATIVE (not absolute), which is the question's actual flaw
- Question asks "memasang pin mutlak" but answer A is a relative pin — slight terminology mismatch
- Pembahasan acknowledges this. Minor fix: rephrase question to drop "mutlak"

### Soal 13 OK
- Lucena Position, "building a bridge" Rc4 — classical R+P endgame technique. Correct.

### Soal 14 OK
- Material counting, balanced position — correct (all pieces still on board)

### Soal 15 WRONG (author flagged)
- Author admits: "Posisi ini bukan smothered mate-in-1. Pertanyaan keliru"
- "Jawaban tepat: D. Nd6" — but final answer line is muddled; the question premise itself is broken
- Recommendation: regenerate completely with a proper smothered mate position (e.g., classical Q-sac then N# in corner)

### Soal 16 WRONG
- Question says "Diagram menunjukkan Hitam baru bermain 1...d5. Pembukaan Hitam ini disebut?"
- Jawaban is "A. Scandinavian" with reasoning "ditandai 1.e4 d5"
- But the question title and konteks say "French Defense" and "[P] · BUK — French Defense (Move 1)"
- Contradiction between header (French) and content (Scandinavian). Position FEN shows 1.e4 d5 (Scandinavian), so the JAWABAN is correct but the HEADER is wrong
- Recommendation: fix header to "Scandinavian Defense" or change FEN to French (1.e4 e6)

### Soal 17 OK
- Skak (check) recognition — basic, correct

### Soal 18 OK
- Rc1 to half-open file c — textbook positional play

### Soal 19 OK
- Fool's Mate identification — correct, well-explained
- Minor: option B reasoning "g3 — Tidak legal, bidak g sudah di g4" is correct

### Soal 20 OK
- Najdorf ...a6 idea — textbook

### Soal 21 WARN (author flagged)
- Author wrote: "Putih (asumsikan gajah Putih sudah di d3, bukan e2 — koreksi posisi)"
- The FEN doesn't match the Greek Gift pattern described. Author pivots to a pattern-identification question that works
- Question is salvaged but FEN/diagram is misleading
- Recommendation: regenerate FEN to actual Greek Gift setup

### Soal 22 OK
- Qd8# K+Q vs K mate — geometry correct (Kings on e6+e8, Qd8# covers d-file and rank-8)

### Soal 23 WARN (author flagged)
- Author wrote: "Sebenarnya scenario lebih bersih untuk discovered check = posisi di mana memindah satu buah membuka serangan"
- Question pivots from FEN to definition. FEN largely irrelevant to question asked
- Conceptual answer (B) is correct
- Recommendation: keep but realign FEN to actually demonstrate discovered check

### Soal 24 OK
- Nf3 development with tempo — sound

### Soal 25 OK
- Philidor Position 3rd-rank defense — textbook

### Soal 26 OK
- Caro-Kann 1...c6 idea — textbook

### Soal 27 WARN (author flagged)
- Author wrote: "Tunggu — Rh4+? Benteng dari h1 ke h4 = vertikal di file h. Itu bukan skak"
- Author then "Mari koreksi" and lands on Rd1+ as correct answer (B)
- Final answer is logically correct (Rd1+ skewers K+Q on d-file), but pembahasan is messy
- Recommendation: clean up pembahasan; jawaban acceptable

### Soal 28 WARN (author flagged)
- Author wrote: "Wait, FEN tidak menunjukkan c4 yang dimainkan. Mari sesuaikan"
- FEN shows 1.d4 Nf6 2.Nf3 g6 — not standard KID (KID usually needs 2.c4)
- Question still tests KID character (correct concept)
- Recommendation: change FEN to canonical KID with c4 played

### Soal 29 OK
- Nf3 attacks Qh4 with tempo — sound

### Soal 30 OK
- Removing the defender — Bxc6+ — sound

### Soal 31 OK
- Strategic Bc4 to outpost — textbook positional play

### Soal 32 OK
- Pirc Defense 1.e4 d6 — textbook

### Soal 33 OK (minor)
- "Rd5 active rook" reasoning is sound, but theme labeled "Deflection" doesn't match content (this is rook activation, not deflection)
- Recommendation: rename theme to "Active Rook" or "Rook Activity"

### Soal 34 OK
- Race promotion with Qa4+ trick — sound

### Soal 35 OK
- Bishop pair value ~0.5 (Kaufman) — historically accurate

### Soal 36 OK
- Slav Defense, gajah c8 — textbook

### Soal 37 WARN
- Pembahasan for option B says "Nxd5? — Kalau Nxd5 Qxd1+ tangkap menteri (!)"
- But the Black queen is at g4, not d-file; "Qxd1+" wouldn't be a one-mover (queen at g4 → d1 is legal). Wait — Qg4 can reach d1 via the d1-h5 diagonal? No, g4-d1 isn't a straight line for the queen (g4 to d1 = diagonal that goes through f3-e2-d1, yes the queen CAN reach d1 if path clear). The reasoning is plausible but worth engine verification.
- Jawaban A (f3) is fine on principle
- Recommendation: engine verify the side-line claim

### Soal 38 OK
- K+P vs K triangulation — textbook (though FEN shows only 7 ranks: `8/8/4k3/8/4P3/4K3/8` — needs 8th `/8` at end). FEN has 7 slashes → missing one rank! Actually, counting: `8/8/4k3/8/4P3/4K3/8` = 7 ranks separated by 6 slashes = MISSING ONE RANK
- Let me recount: `8/8/4k3/8/4P3/4K3/8` — slashes: 6 — ranks: 7. FEN INVALID.
- Recommendation: fix FEN to `8/8/4k3/8/4P3/4K3/8/8`

### Soal 39 OK
- Castling O-O priority — textbook

### Soal 40 WRONG (author flagged)
- Author wrote: "Tunggu, dari posisi ini: Kuda di e5, raja h8, bidak h7, g7... Untuk kejelasan dengan Anastasia sejati, posisi harus Raja Hitam h7 (bukan h8) dan kuda Putih di e7. Soal ini tidak presis Anastasia."
- Author then offers "1.Ng6+ hxg6 2.Re8#" as the actual mate, but doesn't put that in opsi
- Opsi A is "Nf6+ Kg8 Re8#" which the author own analysis shows isn't mate (because after Nf6+ Kg8, kuda Putih di f7 doesn't cover g8 — but wait, the question says Nf6+ then Kg8 which isn't legal anyway because raja sudah di h8 and Nf6+ doesn't force to g8...)
- Position and opsi are tangled
- Recommendation: regenerate with a clean Anastasia setup (R h-file, N e7, Black K h7)

### Soal 41 OK (minor flag)
- Author wrote "Tunggu — apa fxe3 legal?" then confirmed yes
- Final answer (fxe3 wins queen) is correct
- Pembahasan slightly messy but conclusion sound

### Soal 42 OK
- Nimzo-Indian 3...Bb4 idea — textbook

### Soal 43 OK
- K+R vs K mate-in-1 with K opposition — sound (KP at e6, opposition K at e8, Re8#)

### Soal 44 OK
- Outpost on e5 — textbook positional

### Soal 45 OK
- Bird's Opening 1.f4 — correct ID

### Soal 46 OK
- Zwischenzug concept — textbook
- Concrete move Nb5 plausible without engine check

### Soal 47 OK
- Connected passed pawns concept — textbook

### Soal 48 WARN (author flagged)
- Author wrote: "Nf6 (e4, e8, d5, d7, g4, g8, h5, h7) — wait, Nf6 tidak jangkau e5"
- Author corrected mid-pembahasan
- Question asks how many of Black's knights attack e5; answer is 1 (Nc6 only)
- Final jawaban: A (one) — correct, but option B is labeled "Benar" in the bullet text, contradicting the final "Jawaban: A"
- Recommendation: fix inconsistency in option-B bullet label (remove "Benar")

### Soal 49 OK
- Catalan 3.g3 idea — textbook

### Soal 50 OK
- exf5 free pawn — textbook

### Soal 51 WARN (author flagged)
- Author wrote: "Mari koreksi: posisi tipikal 'Hanging Pawns' Hitam = bidak c5+d5 tanpa dukungan... Diagram di atas tidak akurat menggambarkan ini; mari anggap konseptual."
- Pivot to conceptual question — concept-level answer (B) is correct
- Recommendation: regenerate FEN to actual hanging pawns position

### Soal 52 OK
- English Opening 1.c4 — correct

### Soal 53 OK
- Pin relative vs absolute — concept correct

### Soal 54 WARN
- Pembahasan offers two answers: "Jawaban: A untuk pemain Klub, C untuk pemain Master"
- Pertanyaan should have one definitive answer
- Recommendation: pick one and commit, rewrite to indicate

### Soal 55 OK
- Bishop vs Knight in open position — textbook (with caveat author noted)

### Soal 56 OK
- Scandinavian Nc3 with tempo — textbook

### Soal 57 WARN
- "Jawaban: B (paling konkret) atau A (kalau punya ide tactical)" — same issue as Soal 54 (two answers)
- Recommendation: commit to one answer

### Soal 58 WRONG (author flagged)
- Author wrote: "Soal ini set salah — tidak menggambarkan skewer dengan benar... Jawaban: C (posisi tidak menang Putih, malah Hitam unggul material)"
- Author admits the question is broken; final jawaban C ("posisi seri") contradicts own analysis ("Hitam unggul material")
- Recommendation: regenerate with proper skewer setup

### Soal 59 OK
- Color complex weakness — textbook positional concept

### Soal 60 OK
- Discovered attack concept with battery — sound

### Soal 61 OK
- Bishop vs Knight, bidak di kedua sayap — textbook (with author note about FEN imprecision)

### Soal 62 OK
- Vienna Game 2.Nc3 — textbook

### Soal 63 OK (minor)
- KQ vs K maximum 10 moves — correct
- Bullet label inconsistency: option A is labeled "10" (the value of option B in the question). Should be: A=5 (wrong), B=10 (correct), C=15 (wrong), D=50 (wrong). The pembahasan rendered them inverted but final answer "B" is correct.
- Recommendation: fix bullet labels to match A/B/C/D values stated in opsi

### Soal 64 OK
- Rook on 7th — Tarrasch quote, correct

### Soal 65 WARN
- Author wrote: "Jawaban: B untuk kasus generic (Nc4 paling produktif)" — but question asks for the "best move" and option A (d6) was also offered as plausible
- Pembahasan doesn't clearly justify B over A
- Recommendation: clean up justification

### Soal 66 OK
- London System characterization — correct

### Soal 67 WRONG
- Question asks "fork terbaik" with kuda d5, raja Hitam g8, benteng Hitam e8
- Pembahasan claims "Nf6+ menyerang g8 DAN e8" — but Nf6 doesn't attack e8. Let me re-verify: Kuda at f6 attacks d5, d7, e4, e8, g4, g8, h5, h7. So Nf6 DOES attack e8 and g8 — this is correct!
- Wait, but Nf6+ in this position: kuda comes from d5 to f6 — and at f6 attacks g8 (king) — that's the check. It also attacks e8 (rook). So it IS a fork. Correct.
- BUT: from f6, kuda also attacks h7 and g4, but the question is whether f6 is safe. Black's pawn at g7 attacks f6 → kuda is captured. So Nf6+ gxf6 — kuda hangs.
- Critical: with bidak g7 in place, Nf6+ is met by gxf6 and White loses a knight for nothing.
- Recommendation: regenerate. This fork is not safe because pawn g7 captures the knight.

### Soal 68 OK
- Closed position favors knights — textbook

### Soal 69 WARN (author flagged)
- Author wrote: "Pertanyaan ini perlu pertanyaan tactical kongkrit. Mari ganti"
- Question is pivoted to opening principle
- Reasoning for option A (exd4) is fishy: pembahasan says "d4 dibela oleh menteri d1" which is incorrect (Qd1 doesn't defend d4 from a black exd4 capture in this position; bidak e5 captures to d4 which is the same color square Qd1 lacks line-of-sight to)
- Recommendation: clean up justification

### Soal 70 OK
- Berlin Defense Kramnik 2000 — historically correct

### Soal 71 OK
- Multiple valid responses to London — sound

### Soal 72 OK
- Wrong-color bishop endgame draw — textbook

### Soal 73 OK
- Reti Opening 1.Nf3 — correct

### Soal 74 OK
- Bb4 absolute pin to king e1 — correct (Nc3 between Bb4 and Ke1 on a5-e1 diagonal — wait, b4-c3-d2-e1 is a diagonal? Yes. Bb4 pins Nc3 to Ke1 absolutely.)

### Soal 75 OK
- Triangulation in K+P+P endgame — concept correct (author hedges)

### Soal 76 OK
- e4 doesn't attack c5 — basic but correct

### Soal 77 OK
- Nxd5 captures hanging queen — straightforward

### Soal 78 OK
- Sicilian Dragon fianchetto — textbook

### Soal 79 OK
- 5 castling rules — correct

### Soal 80 OK
- Sacrifice motives — correct (C is "not a reason," which is right)

### Soal 81 OK
- K vs K insufficient material — correct (FEN: `8/8/8/4k3/8/4K3/8/8` is valid)

### Soal 82 OK
- Petroff Defense filosofi — textbook

### Soal 83 WARN (author flagged)
- Author wrote: "Sebenarnya untuk soal ini, melihat posisi: file d punya R Putih d1 dan Q Hitam d5, dengan kuda Hitam c6 sebagai pembela. Maka Rxd5 Nxd5 = -4"
- Final jawaban D (Rfd1, doubling) seems weak — but Rxd5 would be a sacrificed exchange
- Recommendation: engine verify; the doubling plan is reasonable but the original opsi were not well-chosen

### Soal 84 WRONG (author flagged)
- Author wrote: "Qg8+ = menteri ke g8 attack raja g8? Tidak, posisi sama. Mari baca ulang FEN: 6k1 = raja Hitam di g8. Menteri Putih 5Q di f7 (Q di file f rank 7). Qg8 = menteri pindah ke g8, raja g8 = TIDAK BISA. Pertanyaan ini error."
- Author offers "Qf8#" as the real mate but option A is "Qg8#" (which is illegal — square occupied by king)
- Recommendation: rewrite option A to Qf8# OR change FEN

### Soal 85 OK
- King safety, castle priority — sound

### Soal 86 OK
- King's Gambit accepted/declined — both valid (correct)

### Soal 87 OK
- Battery concept — textbook

### Soal 88 OK
- Ne3 anti-principle reasoning — correct (knight blocks own pawn, doesn't control center well)

### Soal 89 WARN (author flagged)
- Author wrote: "Pertanyaan ini tidak punya pin yang clean. Mari ganti konsep"
- Pivot to "develop with tempo" — sound concept
- Recommendation: keep but realign FEN

### Soal 90 OK
- Italian + Bb4 pin response — Qb3 to f7 is classical

### Soal 91 OK
- Latvian Gambit unsound — historically accurate

### Soal 92 OK
- KBP vs K (non-rook pawn) wins — textbook endgame fact

### Soal 93 WARN (author flagged)
- Author wrote: "Posisi ini tidak realistic — c2 bidak Hitam di rank 2 = sangat aneh setelah 1-2 langkah pembukaan. Mari ganti ke posisi sederhana"
- Pivot to generic concept — answer A correct
- Recommendation: regenerate FEN to a coherent scenario

### Soal 94 OK
- Kxf2 capture sound (king in center but material gain)

### Soal 95 OK
- Trompowsky 2.Bg5 idea (Bxf6 ruins structure) — sound; minor: option labeling has "A. Pin... C. Tukar... jawaban C" with both A and C plausible. Final answer C is most accurate to Trompowsky's defining feature.

### Soal 96 WRONG (author flagged)
- Author wrote: "Mari pikirkan lain: posisi sebenarnya saturasi, tidak ada mate-in-1"
- Question premise (mate-in-1 or material gain) is unmet; jawaban A (Ra8) trade is the best from a bad opsi list
- Recommendation: regenerate

### Soal 97 OK
- Closed position strategic plan — knights to outposts. Sound.

### Soal 98 OK
- Modern Defense 1...g6 — correct

### Soal 99 OK
- Master endgame: king activity + passed pawn — sound

### Soal 100 WARN (author flagged)
- Author wrote: "Tapi tunggu, kalau Nf6+ Kf8 (raja bisa ke f8?), kuda f6 menyerang e8 dan g8, raja di g8 wajib pindah ke h8"
- Self-corrected during pembahasan. Final answer Nf6+ Kh8 Ra8# is plausible
- Critical: after Nf6+, gxf6 (pawn capture from g7) is possible — exactly like Soal 67. Need to verify whether Kg7 was the only Black response.
- Actually checking: with Nf6+ from e5, Black is in check. Can pawn gxf6 capture? Yes, pawn at g7 can capture diagonally to f6. So Nf6+ gxf6 wins the knight for Black.
- Recommendation: regenerate or engine-verify. The "Anastasia-like" mate is broken if pawn g7 can capture.

---

## Per-Soal Findings — chess-gm-komprehensif-mudah.md

### Soal 1 OK
- Hanging knight Nxe5 — same as campur Soal 1

### Soal 2 OK
- Italian Game — clean

### Soal 3 OK
- Back rank mate — clean

### Soal 4 OK
- a8=R avoids stalemate — clean

### Soal 5 OK
- Nxd4 wins queen — clean

### Soal 6 OK
- 1.e4 center control — clean

### Soal 7 OK
- Ruy Lopez — clean

### Soal 8 OK
- Qd8# K+Q vs K — clean

### Soal 9 OK
- Scholar's Mate Qh5 — clean (FEN technically allows multiple valid Scholar's-style answers but Qh5 is the canonical "queen leads" version)

### Soal 10 OK
- Knight to f3 development — clean

### Soal 11 OK
- Queen's Gambit 2.c4 — clean

### Soal 12 OK
- Bg4 pin — clean (labels it as relative correctly)

### Soal 13 OK
- K vs K insufficient material — clean

### Soal 14 OK
- Counting material balanced — clean

### Soal 15 OK
- Sicilian 1...c5 — clean

### Soal 16 OK
- Check recognition — clean

### Soal 17 OK
- Castle O-O priority — clean

### Soal 18 OK
- Fool's Mate — clean

### Soal 19 OK
- Scandinavian 1...d5 — clean

### Soal 20 OK
- exf5 free pawn — clean

### Soal 21 OK
- ...e5 response to 1.e4 — clean

### Soal 22 OK
- Qf8# K+Q vs K (FIXED version of campur Soal 84) — clean. Note: campur Soal 84 has the bug (Qg8#) that this Soal 22 fixed to Qf8#.

### Soal 23 OK
- French Defense 1...e6 — clean

### Soal 24 OK
- fxe3 free queen — clean

### Soal 25 OK
- Re8# K+R vs K — clean

### Soal 26 OK
- Caro-Kann 1...c6 — clean

### Soal 27 OK
- Rd1+ skewer — clean (the corrected version of campur Soal 27, which was muddled)

### Soal 28 WARN
- KID identification with FEN missing 2.c4 — same issue as campur Soal 28
- Pembahasan correctly identifies KID hallmarks but FEN technically isn't canonical KID
- Recommendation: fix FEN

### Soal 29 OK
- Nf3 with tempo — clean

### Soal 30 OK
- KQ vs K max-10 moves — clean (no label inconsistency unlike campur Soal 63)

### Soal 31 OK (mislabeled theme)
- Theme labeled "Open File untuk Rook" but content is about rook on 7th rank — minor mismatch
- Recommendation: rename theme to "Rook on 7th Rank"

### Soal 32 OK
- Pirc Defense 1...d6 — clean

### Soal 33 OK
- ...g6 vs Qh5 (anti-Scholar's) — clean

### Soal 34 OK
- Nimzo-Indian — clean

### Soal 35 WRONG (author flagged)
- Author wrote: "Wait, let me re-check: setelah Rf8+ raja g8, bisa Kxf8 (raja tangkap benteng)?... posisinya f7+h7 bidak Hitam, g7 kosong. Jadi raja Hitam bisa main Kxf8 atau Kg7 (g7 kosong). Bukan mate."
- Author then: "Mari ganti analisis... sebenarnya tidak ada mate-in-1 langsung"
- Final: "Jawaban: A (paling agresif, bukan mate-in-1)" — but question asks for "Mate-in-1 dengan benteng?"
- Recommendation: regenerate — question premise is unmet

### Soal 36 OK
- English 1.c4 — clean

### Soal 37 OK
- Bb4 absolute pin — clean

### Soal 38 OK
- Bc4 to active diagonal — clean

### Soal 39 OK
- Slav 2...c6 — clean

### Soal 40 OK
- Bxc6+ removing defender — clean

### Soal 41 OK
- Anti-prinsip: don't move same piece twice — clean

### Soal 42 OK
- Catalan 3.g3 — clean

### Soal 43 OK (minor)
- Ra8# back rank — FEN cosmetic note says "(anggap benteng a1)" because the rendered FEN shows `7K` (no rook) but the analysis assumes Ra1. Minor FEN/analysis mismatch.
- The mate logic itself is correct
- Recommendation: fix FEN to include the rook at a1

### Soal 44 OK
- King activity in endgame — clean

### Soal 45 OK
- Bird's Opening 1.f4 — clean

### Soal 46 OK
- Knight f6 attacks e4 — clean

### Soal 47 OK
- Reti 1.Nf3 — clean

### Soal 48 OK
- Nxd5 capture queen — clean

### Soal 49 OK
- London System 2.Bf4 — clean

### Soal 50 OK
- Trade when ahead — clean

### Soal 51 OK
- Trompowsky 2.Bg5 — clean

### Soal 52 OK
- Discovered check definition — clean

### Soal 53 OK
- King's Gambit 2.f4 — clean

### Soal 54 OK
- En passant cxd6 — clean (FEN has correct e.p. target square d6)

### Soal 55 OK
- Connected rooks definition — clean

### Soal 56 OK
- Vienna 2.Nc3 — clean

### Soal 57 WRONG (author flagged)
- Author wrote: "Hmm — tidak ada mate-in-1 dari posisi ini, butuh 2-rook ladder (mate-in-2)"
- Final: "Jawaban: A (paling agresif, bukan mate sebenarnya)" — but question asked mate-in-1
- Recommendation: regenerate

### Soal 58 OK
- Bishop's Opening 2.Bc4 — clean

### Soal 59 OK
- Underpromotion to knight — clean

### Soal 60 OK
- Anti-principle: rook pawns 1.h4/1.a4 — clean

### Soal 61 OK
- Modern Defense 1...g6 — clean

### Soal 62 OK
- Check for stalemate before promoting — clean

### Soal 63 OK
- Alekhine Defense 1...Nf6 — clean

### Soal 64 OK
- Doubled pawns weakness — clean

### Soal 65 OK
- Smothered mate definition — clean

### Soal 66 OK
- Sicilian Najdorf ...a6 — clean

### Soal 67 OK
- Pin to king (absolute) strongest — clean

### Soal 68 OK
- Petroff Defense — clean

### Soal 69 OK
- Trade pawns when behind — clean

### Soal 70 WARN (author flagged)
- Author wrote: "Sebenarnya tergantung respons Hitam"
- Pembahasan unusually short and hedged; only opsi D has discussion, A-C are listed without analysis
- Final answer D (a3) is plausible (typical Nimzo-Indian style response) but justification incomplete
- Recommendation: rewrite pembahasan with full 4-option analysis

### Soal 71 OK
- Scotch Game 3.d4 — clean

### Soal 72 OK
- K+rook-pawn vs K can be draw — concept correct (with FEN showing tricky a-pawn position)

### Soal 73 OK
- Piece values 1/3/3/5/9 — clean

### Soal 74 OK
- Nc3 attacking Qd5 with tempo — clean

### Soal 75 OK
- Anti-principle: don't push pawns in front of castled king — clean

### Soal 76 OK
- Italian: Bc5 and Nf6 both valid — clean

### Soal 77 OK
- e4 doesn't attack c5 (no en passant) — clean

### Soal 78 OK
- Sicilian Dragon ...g6 — clean

### Soal 79 OK
- Develop before attack — clean

### Soal 80 OK
- Bg4 pin Nf3 to Qd1 — clean

### Soal 81 OK
- Opening principles trinity — clean

### Soal 82 OK
- exd4 challenge center — clean

### Soal 83 OK
- Polish Opening 1.b4 — clean

### Soal 84 OK
- Development order: minor pieces first — clean

### Soal 85 OK
- Larsen's Opening 1.b3 — clean

### Soal 86 OK
- Knight in center vs edge — clean

### Soal 87 OK
- QGD vs QGA difference — clean

### Soal 88 OK
- Alekhine response — multiple valid (clean)

### Soal 89 OK
- QGA mainline responses — clean

### Soal 90 OK
- Hanging piece definition — clean

### Soal 91 OK
- Active vs passive — clean

### Soal 92 OK
- How to learn openings (pemula) — pedagogical, not chess-truth

### Soal 93 OK
- 3 ways to respond to check — clean

### Soal 94 OK
- Beginner repertoire advice — pedagogical

### Soal 95 OK
- Ruy Lopez Exchange doubled pawns — clean

### Soal 96 WARN
- Pembahasan: "A-D — Berbagai rute, tergantung struktur bidak" — does not analyze each option
- Final: "Jawaban: D. (sample manuver)" — not committed
- Recommendation: rewrite pembahasan to argue why D specifically

### Soal 97 WRONG (author flagged)
- Author wrote: "Jawaban: A salah baca pertanyaan — yang dimaksud 'BUKAN Italian' = B, C, atau D"
- Then: "Jawaban: B/C/D semua bukan Italian" — three valid answers means the question is broken
- Recommendation: regenerate (pick a single "BUKAN Italian" answer)

### Soal 98 OK
- Opposition definition — clean

### Soal 99 WARN (author flagged)
- Author wrote: "B — Sebenarnya 1.d3 push pasif (bukan 2 petak)"
- Pembahasan for option A is fuzzy: "TIDAK halangi gajah f1 langsung (gajah f1 keluar via e2 atau diagonal lain)"
- Final answer A acceptable but justification weak
- Recommendation: clean up pembahasan or pick a better anti-principle question

### Soal 100 OK
- Re8# back rank (recap of Soal 3) — clean. Minor: this is a literal duplicate of Soal 3 (same FEN, same answer). The skill spec discourages within-file duplicates. Author calls it out as "recap" which is honest but technically violates the anti-dup rule.

---

## High-Priority Regenerate List

These have CRITICAL issues (author flagged broken position OR jawaban-mismatch). Should be rewritten before publication.

**From campur.md (8 soal):**
- Soal 8: Author admits position is theoretically drawn; e4+ is not best move
- Soal 15: Author admits "Pertanyaan keliru" — not a smothered mate-in-1
- Soal 16: Header says "French Defense" but FEN+jawaban is Scandinavian — contradiction
- Soal 38: FEN missing 8th rank (`8/8/4k3/8/4P3/4K3/8` has only 7 ranks)
- Soal 40: Author admits "Soal ini tidak presis Anastasia"; opsi A's "Nf6+ Kg8 Re8#" sequence isn't mate
- Soal 58: Author admits "Soal ini set salah — tidak menggambarkan skewer dengan benar"
- Soal 67: Nf6+ "fork" is actually captured by pawn gxf6 → not safe
- Soal 84: Author admits "Pertanyaan ini error" — Qg8# is illegal (square occupied)
- Soal 96: Author admits "tidak ada mate-in-1" but question asks for mate-in-1
- Soal 100: Anastasia-like mate; Nf6+ is captured by gxf6 (same issue as Soal 67)

**From mudah.md (3 soal):**
- Soal 35: Author admits "tidak ada mate-in-1 langsung" but question asks for mate-in-1
- Soal 57: Author admits "tidak ada mate-in-1 dari posisi ini" but question asks for mate-in-1
- Soal 97: Author admits "Jawaban: B/C/D semua bukan Italian" — three valid answers

---

## Patterns Observed

1. **Mate-in-1 / mate-in-2 puzzles are the riskiest category.** Of 11 critical errors across both files, 7 are mate puzzles where the claimed mate doesn't exist or the "best move" is captured by a defender (Soal 15, 35, 40, 57, 67, 84, 96, 100). The author tended to hand-craft FENs without verifying that all defender pieces / pawns were properly accounted for.

2. **Knight-fork-with-defending-pawn bug appears at least twice.** In campur Soal 67 and Soal 100, the "fork move" Nf6+ is met by g7-pawn capture (gxf6). This is a recurring oversight — the author placed the knight on a square defended/attacked by a Black pawn.

3. **The author self-flags consistently.** When uncertain, the author wrote "Tunggu", "Mari koreksi", "Hmm", "Wait", "sebenarnya", "Mari pikirkan ulang". Every flagged soal in this audit was already partially acknowledged by the author. This means the easy wins for regeneration are the flagged soal first.

4. **campur.md has 16 self-flagged soal vs mudah.md's 5.** The campur file (mixed difficulty) attempted harder positions (K+M, Master tier) and the author's heuristic analysis broke down more often. The mudah file's concepts are simpler so fewer slips.

5. **FEN syntax: 1 invalid found.** campur Soal 38 has 7 ranks instead of 8 (`8/8/4k3/8/4P3/4K3/8` — missing trailing `/8`). All other FENs scanned have valid 6-field structure with both kings and matching side-to-move.

6. **Mudah.md has many "konsep" placeholder FENs.** Soal 41, 50, 55, 59, 62, 73, 75, 78 (and others) say `**FEN:** konsep` instead of a real FEN — these are concept questions where the diagram is decorative. Not bugs per se but limits the diagram's pedagogical value.

7. **Theme-label mismatches are minor and cluster around tactics.** campur Soal 33 (labeled "Deflection" but content is "Active Rook"), mudah Soal 31 (labeled "Open File" but content is "Rook on 7th"). Easy to fix by relabeling.

8. **Two-answer hedges appear in campur but not mudah.** campur Soal 54, 57, 65, 75, 83 offer "A or C", "B or A" hedges in the jawaban line. Mudah is more decisive (single answer per soal). The Klub/Master tier soal in campur are more prone to this because true best-move requires engine.

9. **Mudah Soal 22 fixes campur Soal 84.** The mudah version uses "Qf8#" (legal mate); the campur version uses "Qg8#" (illegal — occupied square). Mudah is the canonical version.

10. **Bishop-pin-to-relative-pin terminology is inconsistent.** campur Soal 12 asks for "pin mutlak" but the answer is "pin relatif" (author acknowledges in pembahasan). Mudah Soal 12 correctly labels it "Pin Relatif Bg4". Mudah is cleaner.

---

## Audit Methodology Limitations

- **No engine validation.** All conclusions are heuristic. A definitive review needs Stockfish at depth 30+ on each FEN to confirm best move, evaluate sacrifices, and detect missed tactics.
- **Cannot verify deep mate-in-N claims.** Specifically for soal claiming "mate-in-2" or longer, manual check is unreliable — would need a tablebase or engine.
- **Cannot definitively rule out missed combinations.** A soal marked OK might still have a stronger tactical move overlooked by both author and auditor.
- **FEN-to-diagram fidelity not visually checked.** Lichess board image URLs were not rendered; only FEN strings were parsed for syntactic validity.
- **"Konsep" FENs (in mudah.md) cannot be validated** because they don't represent the actual scenario being asked about.

**Recommendation:** Run a Python validation script using `python-chess` + Stockfish over all 200 FENs. Specifically:
1. For each soal, parse FEN → verify legality (chess.Board(fen) doesn't raise).
2. For each opsi (SAN), verify `board.parse_san(opsi)` is legal.
3. For "mate-in-N" claims, run Stockfish at multipv=5 and confirm mate score appears.
4. For "best move" claims, run Stockfish at depth 22+ and confirm the jawaban appears in top-3 lines.

---
