"""
Verify the 15 regenerated soal in chess-gm-komprehensif-campur.md.

For each soal, parse FEN and ensure jawaban SAN is LEGAL.
Print PASS/FAIL per soal and a summary.

Run: python verify_regen.py
"""
import chess
import sys

# Soal data: each entry = (n, fen, opsi A-D, jawaban_letter, expected_extra)
CASES = [
    # Soal 3 — Skakmat KQ vs K
    (3, '7k/8/5K2/6Q1/8/8/8/8 w - - 0 1',
     ['Qg7#', 'Qh5+', 'Qd5', 'Qg6'], 'A', 'mate'),
    # Soal 10 — Knight Royal Fork
    (10, 'r3k2r/ppp2ppp/8/1q6/4N3/8/PPP2PPP/4K2R w Kkq - 0 1',
     ['Nd6+', 'Nf6+', 'Nc5', 'Nc3'], 'A', 'check'),
    # Soal 50 — Opera Game Queen Sac
    (50, '4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 0 17',
     ['Qb8+', 'Rxd7', 'Bf6', 'Qxe6+'], 'A', 'check'),
    # Soal 55 — Zwischenzug
    (55, 'r1bq1rk1/pp1pbppp/2n2n2/4n3/2BP4/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 8',
     ['dxe5', 'Bxf7+', 'Nxe5', 'Nd5'], 'B', 'check'),
    # Soal 65 — Anastasia's Mate
    (65, '8/4N1pk/8/4R3/8/8/8/6K1 w - - 0 1',
     ['Rh5#', 'Nf5', 'Ng6', 'Rg5'], 'A', 'mate'),
    # Soal 75 — Philidor Position (Hitam giliran)
    (75, '8/8/3k4/3p4/8/8/3K4/3R4 b - - 0 1',
     ['d4', 'Ke5', 'Kc5', 'Ke6'], 'A', None),
    # Soal 76 — Grunfeld
    (76, 'rnbqkb1r/ppp1pp1p/6p1/3n4/3PP3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 5',
     ['Nxc3', 'Nb6', 'Nf6', 'e5'], 'A', None),
    # Soal 78 — Open File
    (78, 'r1b1r1k1/pp3ppp/2p2n2/3p4/3P4/2N1BN2/PP3PPP/R4RK1 w - - 0 14',
     ['Rfe1', 'Rad1', 'Ne5', 'Bc1'], 'B', None),
    # Soal 80 — Dutch Leningrad
    (80, 'rnbqk2r/ppppp1bp/5np1/5p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1 b kq - 0 6',
     ['O-O', 'e6', 'd5', 'c6'], 'A', None),
    # Soal 82 — X-Ray Attack
    (82, '7r/8/8/4k3/8/8/P1P2PPP/R1B1K2R w KQ - 0 1',
     ['Bd2', 'Bh6', 'Bb2+', 'Bf4+'], 'C', 'check'),
    # Soal 87 — Smothered Mate
    (87, '5r1k/6pp/3N4/8/8/1Q6/8/7K w - - 0 1',
     ['Nf5', 'Qg8+', 'Nf7+', 'Qh3'], 'C', 'check'),
    # Soal 89 — King Opposition
    (89, '8/4k3/8/8/4K3/4P3/8/8 w - - 0 1',
     ['Kd5', 'Kd4', 'Kf4', 'Ke5'], 'D', None),
    # Soal 90 — Prophylaxis (with bishop at e2 instead of c1)
    (90, 'r2q1rk1/ppp2ppp/2n1pn2/3p4/3P4/2N1PN2/PPQ1BPPP/R4RK1 w - - 0 10',
     ['Bd3', 'Ne5', 'Qd2', 'b4'], 'A', None),
    # Soal 92 — Overloading (with Q d8 added, white turn, Bxf7+ stays illegal as distractor)
    (92, 'r2qk2r/ppp2ppp/2n1pn2/3p4/2B1P3/2N2N2/PPP2PPP/R1BQR1K1 w kq - 0 8',
     ['Nxd5', 'exd5', 'Bxd5', 'Re3'], 'A', None),
    # Soal 94 — Weak Squares (knight added at f3)
    (94, 'r2q1rk1/pp1b1ppp/2p1pn2/3p4/3P4/2NBPN2/PP3PPP/R2Q1RK1 w - - 0 10',
     ['Ne5', 'Bb5', 'g3', 'Qe2'], 'A', None),
]


def verify():
    fail = 0
    distract_warn = 0
    for n, fen, opsi, jw_letter, expect in CASES:
        print(f'\n=== Soal {n} ===')
        try:
            board = chess.Board(fen)
        except Exception as e:
            print(f'  FAIL: FEN invalid: {e}')
            fail += 1
            continue
        if not board.is_valid():
            print(f'  WARN: board.is_valid() False but FEN parsed')

        jw_idx = 'ABCD'.index(jw_letter)
        jw_san = opsi[jw_idx]

        # Verify jawaban legal
        bb = board.copy()
        try:
            mv = bb.parse_san(jw_san)
            bb.push(mv)
            status = 'mate' if bb.is_checkmate() else 'stalemate' if bb.is_stalemate() else 'check' if bb.is_check() else 'quiet'
            ok_status = (expect is None) or (status == expect)
            if not ok_status:
                print(f'  WARN: jawaban {jw_letter}={jw_san} expected {expect}, got {status}')
            else:
                print(f'  PASS: jawaban {jw_letter}={jw_san} LEGAL ({status})')
        except Exception as e:
            print(f'  FAIL: jawaban {jw_letter}={jw_san} ILLEGAL ({e})')
            fail += 1
            continue

        # Check distractors
        for L, o in zip('ABCD', opsi):
            if L == jw_letter:
                continue
            bb = board.copy()
            try:
                bb.parse_san(o)
            except Exception:
                print(f'    distractor {L}={o}: ILLEGAL (analyzer will flag DISTRACTOR_BAD)')
                distract_warn += 1

    print(f'\n{"="*60}')
    print(f'Verified {len(CASES)} soal: FAIL={fail}, distractor warnings={distract_warn}')
    if fail == 0:
        print('ALL JAWABAN LEGAL — ready to write edits')
        return 0
    else:
        print(f'{fail} jawaban masih ILEGAL — fix before write')
        return 1


if __name__ == '__main__':
    sys.exit(verify())
