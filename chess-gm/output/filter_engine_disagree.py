"""
Filter validate-report JSON: only true engine disagreements (SAN opsi + gap > threshold).
Excludes false positives from non-SAN identifikasi soal.
"""
import json
import re
from pathlib import Path

REPORT = Path("validate-report-chess-gm-komprehensif-campur.json")
SAN_LIKE = re.compile(r"^(O-O|O-O-O|\.{0,3}[KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](=[QRBN])?[+#]?|\.{0,3}[a-h][1-8])$")
TEXT_HINTS = ("Defense", "Attack", "Variation", "System", "Game", "Gambit", "Opening", "Najdorf", "Dragon")

def is_san(s: str) -> bool:
    if not s: return False
    if any(h in s for h in TEXT_HINTS): return False
    if " " in s or "," in s or "—" in s or "(" in s: return False
    return bool(SAN_LIKE.match(s))

def cp_or_mate(m: dict) -> int:
    if m.get("mate") is not None:
        return 100000 - abs(m["mate"]) if m["mate"] > 0 else -(100000 - abs(m["mate"]))
    return m.get("eval_cp") or 0

def main():
    data = json.loads(REPORT.read_text(encoding="utf-8"))
    soals = data["soal"]
    true_bugs = []
    skipped_non_san = []
    minor_disagree = []

    for s in soals:
        if s["engine_agree"] != "DISAGREE":
            continue
        jw_idx = s["jawaban_idx"]
        if jw_idx < 0:
            continue
        marked_san = s["opsi"][jw_idx]
        if not is_san(marked_san):
            skipped_non_san.append((s["number"], s["tema"], marked_san))
            continue
        top3 = s.get("engine_top3", [])
        if not top3:
            continue
        # If marked SAN can be parsed by engine and is in top-3 but eval gap is small, skip
        top_cp = cp_or_mate(top3[0])
        # Find marked in top3
        marked_in_top3 = next((m for m in top3 if m["san"] == marked_san), None)
        if marked_in_top3:
            gap = abs(top_cp - cp_or_mate(marked_in_top3))
            if gap < 100:
                minor_disagree.append((s["number"], s["tema"], marked_san, top3, gap))
                continue
        true_bugs.append((s["number"], s["pilar"], s["tema"], marked_san, top3, s.get("notes", "")))

    print(f"\n{'='*70}\nENGINE DISAGREE — Filtered\n{'='*70}")
    print(f"  Total DISAGREE in raw report: 40")
    print(f"  False positive (NON_SAN opsi): {len(skipped_non_san)}")
    print(f"  Minor (in top-3, gap < 100cp): {len(minor_disagree)}")
    print(f"  TRUE STRATEGIC BUGS:           {len(true_bugs)}")

    if true_bugs:
        print(f"\n{'='*70}\nTRUE STRATEGIC BUGS (regenerate or re-mark jawaban)\n{'='*70}")
        for n, pilar, tema, marked, top3, notes in true_bugs:
            print(f"\n[{n:>3}] {pilar} — {tema}")
            print(f"      Jawaban tertanda: {marked}")
            print(f"      Engine top-3:")
            for i, m in enumerate(top3, 1):
                cp = m.get("eval_cp")
                mate = m.get("mate")
                eval_str = f"M{mate}" if mate else (f"{cp/100:+.2f}" if cp is not None else "?")
                print(f"        #{i}. {m['san']:<8} ({eval_str})")
            print(f"      Note: {notes}")

if __name__ == "__main__":
    main()
