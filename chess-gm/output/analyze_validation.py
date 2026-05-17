"""
Re-classify validation results to separate true bugs from false positives.

Categories:
  - SAN_OK: all 4 opsi parse as legal SAN
  - NON_SAN_LEGAL: opsi are not SAN (e.g. opening names like "Italian Game") — valid for identifikasi soal
  - SAN_DISTRACTOR_ILLEGAL: jawaban OK, but some distractors illegal (mild issue, may be intentional)
  - CRITICAL_BUG: jawaban benar is ILLEGAL (= soal cannot be answered correctly)
  - FEN_BAD: FEN itself is malformed

Usage: python analyze_validation.py
"""
from pathlib import Path
import re
import sys

try:
    import chess
except ImportError:
    print("Install python-chess: python -m pip install python-chess")
    sys.exit(1)

SRC = Path("chess-gm-komprehensif-campur.md")

HEADER_RE = re.compile(r"^###\s+Soal\s+(\d+)\s*·\s*([PKM])\s*·\s*([A-Z]{3})\s*—\s*(.+?)\s*$", re.MULTILINE)
FEN_RE = re.compile(r"\*\*FEN:\*\*\s*`([^`]+)`")
OPSI_RE = re.compile(r"^([A-D])\.\s*`([^`]+)`", re.MULTILINE)
JAWABAN_RE = re.compile(r"\*\*Jawaban:\s*([A-D])")

SAN_LIKE = re.compile(r"^(O-O|O-O-O|\.{0,3}[KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](=[QRBN])?[+#]?|\.{0,3}[a-h][1-8])$")
TEXT_HINTS = ("Defense", "Attack", "Variation", "System", "Game", "Gambit", "Opening", "Najdorf", "Dragon")

def looks_like_san(s: str) -> bool:
    """Strict: must match SAN pattern (optionally with '...' prefix for Black moves)."""
    if not s: return False
    if any(hint in s for hint in TEXT_HINTS): return False
    if " " in s or "," in s or "—" in s or "(" in s: return False
    return bool(SAN_LIKE.match(s))

def split_blocks(text):
    matches = list(HEADER_RE.finditer(text))
    for i, m in enumerate(matches):
        start = m.start()
        end = matches[i+1].start() if i+1 < len(matches) else len(text)
        yield m, text[start:end]

def classify(block, header):
    n = int(header.group(1))
    lvl, pilar = header.group(2), header.group(3)
    tema = header.group(4)
    fen_m = FEN_RE.search(block)
    if not fen_m:
        return n, lvl, pilar, tema, "NO_FEN", "no FEN found", None, None
    fen = fen_m.group(1).strip()

    try:
        board = chess.Board(fen)
    except Exception as e:
        return n, lvl, pilar, tema, "FEN_BAD", str(e), fen, None

    opsi = dict(OPSI_RE.findall(block))
    opsi_list = [opsi.get(L, "") for L in "ABCD"]
    jw_m = JAWABAN_RE.search(block)
    jw_letter = jw_m.group(1) if jw_m else "?"
    jw_idx = "ABCD".index(jw_letter) if jw_letter in "ABCD" else -1

    san_count = sum(1 for o in opsi_list if looks_like_san(o))

    # If less than 3 of 4 opsi look like SAN, treat as identifikasi/non-SAN soal
    if san_count < 3:
        return n, lvl, pilar, tema, "NON_SAN", f"{san_count}/4 opsi look like SAN", fen, jw_letter

    # All-SAN soal — check each opsi parses
    legality = []
    for o in opsi_list:
        try:
            b = board.copy()
            b.parse_san(o)
            legality.append(True)
        except Exception:
            legality.append(False)

    if jw_idx >= 0 and not legality[jw_idx]:
        # CRITICAL: the correct answer is illegal
        return n, lvl, pilar, tema, "CRITICAL_BUG", f"jawaban {jw_letter}={opsi_list[jw_idx]!r} is ILLEGAL", fen, jw_letter

    illegal_indices = [i for i, ok in enumerate(legality) if not ok]
    if illegal_indices:
        details = ", ".join(f"{'ABCD'[i]}={opsi_list[i]!r}" for i in illegal_indices)
        return n, lvl, pilar, tema, "DISTRACTOR_BAD", f"distractor illegal: {details}", fen, jw_letter

    return n, lvl, pilar, tema, "SAN_OK", "all 4 SAN parse", fen, jw_letter


def main():
    text = SRC.read_text(encoding="utf-8")
    buckets = {"SAN_OK": [], "NON_SAN": [], "DISTRACTOR_BAD": [], "CRITICAL_BUG": [], "FEN_BAD": [], "NO_FEN": []}
    for m, block in split_blocks(text):
        n, lvl, pilar, tema, cat, msg, fen, jw = classify(block, m)
        buckets[cat].append((n, lvl, pilar, tema, msg, fen, jw))

    print(f"\n{'='*70}\nClassification — {SRC.name}\n{'='*70}")
    print(f"  SAN_OK         : {len(buckets['SAN_OK']):>3} soal (all SAN legal)")
    print(f"  NON_SAN        : {len(buckets['NON_SAN']):>3} soal (opsi text untuk identifikasi)")
    print(f"  DISTRACTOR_BAD : {len(buckets['DISTRACTOR_BAD']):>3} soal (jawaban OK, distractor ilegal)")
    print(f"  CRITICAL_BUG   : {len(buckets['CRITICAL_BUG']):>3} soal (JAWABAN ILEGAL — wajib regenerate)")
    print(f"  FEN_BAD        : {len(buckets['FEN_BAD']):>3} soal (FEN malformed)")
    print(f"  NO_FEN         : {len(buckets['NO_FEN']):>3} soal")

    if buckets["CRITICAL_BUG"]:
        print(f"\n{'='*70}\nCRITICAL BUGS — jawaban benar ilegal (REGENERATE WAJIB)\n{'='*70}")
        for n, lvl, pilar, tema, msg, fen, jw in buckets["CRITICAL_BUG"]:
            print(f"  [{n:>3}] {lvl}·{pilar} — {tema}")
            print(f"        FEN: {fen}")
            print(f"        {msg}")
            print()

    if buckets["FEN_BAD"]:
        print(f"\n{'='*70}\nFEN MALFORMED\n{'='*70}")
        for n, lvl, pilar, tema, msg, fen, jw in buckets["FEN_BAD"]:
            print(f"  [{n:>3}] {lvl}·{pilar} — {tema}")
            print(f"        FEN: {fen}")
            print(f"        {msg}")

    if buckets["DISTRACTOR_BAD"]:
        print(f"\n{'='*70}\nDISTRACTOR ILLEGAL (jawaban OK, distractor ilegal — bisa di-ignore)\n{'='*70}")
        for n, lvl, pilar, tema, msg, fen, jw in buckets["DISTRACTOR_BAD"][:20]:
            print(f"  [{n:>3}] {lvl}·{pilar} — {tema} (jawaban {jw} OK)")
            print(f"        {msg}")
        if len(buckets["DISTRACTOR_BAD"]) > 20:
            print(f"  ... dan {len(buckets['DISTRACTOR_BAD']) - 20} lagi")


if __name__ == "__main__":
    main()
