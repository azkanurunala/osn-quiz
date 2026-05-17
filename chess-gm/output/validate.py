"""
Chess training markdown validator — Road to Chess Grandmaster.

Purpose
-------
Parses a chess-puzzle training markdown file (100 PG soal, each with a FEN
position, 4 SAN options, and one marked-correct letter), then validates each
soal in three layers:

  1. FEN syntax + board legality (counts, kings, side-to-move).
  2. SAN legality of every option in the parsed position.
  3. Engine agreement: does the marked answer match Stockfish's top move
     (or an acceptable alternative within 0.5 pawn of top)?

Writes two reports next to the source file:

  validate-report-{stem}.json   — full machine-readable record
  validate-report-{stem}.md     — human-readable summary with flagged soal

Installation
------------
    pip install python-chess

    # Download Stockfish: https://stockfishchess.org/download/
    # Place stockfish.exe in PATH, or pass --stockfish "C:\\path\\to\\sf.exe"

Only `python-chess` is non-stdlib.

Usage
-----
    python validate.py chess-gm-komprehensif-mudah.md
    python validate.py chess-gm-komprehensif-campur.md --depth 20
    python validate.py file.md --stockfish "C:\\Tools\\stockfish\\stockfish.exe"
    python validate.py file.md --no-engine            # parser + FEN/SAN only
    python validate.py file.md --output-dir reports/

Output
------
The JSON report lists every soal with:
  - fen_legal       (bool)
  - opsi_legality   (list[bool] of length 4)
  - engine_top3     (top-3 engine moves with cp evals from side-to-move POV)
  - engine_agree    ("TOP" | "ALT_OK" | "DISAGREE" | "SKIPPED")

The Markdown report highlights only soal that DISAGREE or have ILLEGAL FEN/SAN,
which is what you want to fix before publishing.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import sys
import traceback
from dataclasses import asdict, dataclass, field
from datetime import datetime
from pathlib import Path
from typing import Optional

try:
    import chess
    import chess.engine
except ImportError:
    sys.stderr.write(
        "ERROR: python-chess is not installed.\n"
        "Install with: pip install python-chess\n"
    )
    sys.exit(1)


# ---------------------------------------------------------------------------
# Data model
# ---------------------------------------------------------------------------

@dataclass
class EngineMove:
    """One of the engine's top moves with its centipawn evaluation."""
    san: str
    eval_cp: Optional[int]  # from side-to-move POV; None for mate-in-N
    mate: Optional[int] = None  # mate-in-N if applicable, else None


@dataclass
class Soal:
    """One puzzle parsed from the markdown source."""
    number: int
    level: str = ""           # 'P', 'K', 'M' (or '' if not tagged, e.g. mudah file)
    pilar: str = ""           # 'TAK', 'STR', 'END', 'BUK'
    tema: str = ""
    fen: str = ""
    giliran_text: str = ""    # 'Putih' / 'Hitam' / '' as written in markdown
    giliran: str = ""         # 'w' or 'b' derived from FEN or text
    opsi: list[str] = field(default_factory=list)   # 4 SAN strings
    jawaban_letter: str = ""
    jawaban_idx: int = -1

    # validation fields filled in by validator
    fen_legal: bool = False
    fen_error: str = ""
    opsi_legality: list[bool] = field(default_factory=list)
    opsi_errors: list[str] = field(default_factory=list)
    engine_top3: list[EngineMove] = field(default_factory=list)
    engine_agree: str = "SKIPPED"   # TOP | ALT_OK | DISAGREE | SKIPPED
    notes: str = ""


# ---------------------------------------------------------------------------
# Parser
# ---------------------------------------------------------------------------

# Header forms:
#   ### Soal 1 · TAK · Hanging Knight
#   ### Soal 1 · [P] · TAK — Hanging Knight
SOAL_HEADER_RE = re.compile(
    r"^###\s+Soal\s+(\d+)\s*"
    r"(?:·\s*\[?([PKM])\]?\s*)?"        # optional level: P, [P], or omitted
    r"·\s*([A-Z]{3})\s*"                # pilar
    r"(?:·|—|-)\s*(.+?)\s*$",           # tema
    re.MULTILINE,
)

FEN_RE = re.compile(
    r"\*\*FEN:\*\*\s*`([^`]+)`",
    re.IGNORECASE,
)

GILIRAN_RE = re.compile(
    r"\*\*Giliran:\*\*\s*(Putih|Hitam)",
    re.IGNORECASE,
)

# Single-letter option line, two flavours:
#   A. `Nxe5`
#   A. Nxe5
# We always require the SAN to be backtick-quoted in the canonical files,
# but fall back to bare text if the backticks are missing.
OPSI_TIGHT_RE = re.compile(
    r"\b([A-D])\.\s*`([^`]+?)`"
)
OPSI_LOOSE_RE = re.compile(
    r"(?m)^\s*([A-D])\.\s+([^\s·`][^\n·]*?)\s*$"
)

JAWABAN_RE = re.compile(
    r"\*\*Jawaban:\s*([A-D])",
    re.IGNORECASE,
)


def split_soal_blocks(text: str) -> list[str]:
    """Split file into per-soal text blocks using the '### Soal N' headers."""
    matches = list(SOAL_HEADER_RE.finditer(text))
    blocks: list[str] = []
    for i, m in enumerate(matches):
        start = m.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        blocks.append(text[start:end])
    return blocks


def parse_one_soal(block: str) -> Optional[Soal]:
    """Parse a single soal block. Return None if header is unreadable."""
    header = SOAL_HEADER_RE.search(block)
    if not header:
        return None

    soal = Soal(
        number=int(header.group(1)),
        level=header.group(2) or "",
        pilar=header.group(3) or "",
        tema=(header.group(4) or "").strip(),
    )

    # FEN
    fen_match = FEN_RE.search(block)
    if fen_match:
        soal.fen = fen_match.group(1).strip()

    # Giliran (text)
    g_match = GILIRAN_RE.search(block)
    if g_match:
        soal.giliran_text = g_match.group(1)

    # Derive giliran from FEN side-to-move if available
    if soal.fen:
        parts = soal.fen.split()
        if len(parts) >= 2 and parts[1] in ("w", "b"):
            soal.giliran = parts[1]
    if not soal.giliran:
        if soal.giliran_text.lower() == "putih":
            soal.giliran = "w"
        elif soal.giliran_text.lower() == "hitam":
            soal.giliran = "b"

    # Opsi — prefer backtick-quoted form (canonical), de-dup by letter.
    seen: dict[str, str] = {}
    for letter, san in OPSI_TIGHT_RE.findall(block):
        seen.setdefault(letter.upper(), san.strip())
    if len(seen) < 4:
        for letter, san in OPSI_LOOSE_RE.findall(block):
            seen.setdefault(letter.upper(), san.strip())

    soal.opsi = [seen.get(L, "") for L in ("A", "B", "C", "D")]

    # Jawaban
    j_match = JAWABAN_RE.search(block)
    if j_match:
        soal.jawaban_letter = j_match.group(1).upper()
        soal.jawaban_idx = "ABCD".index(soal.jawaban_letter)

    return soal


def parse_soal_file(path: Path) -> list[Soal]:
    """Read a markdown file and return all parsed Soal."""
    text = path.read_text(encoding="utf-8")
    blocks = split_soal_blocks(text)
    soals: list[Soal] = []
    for block in blocks:
        try:
            s = parse_one_soal(block)
            if s is not None:
                soals.append(s)
        except Exception as e:
            sys.stderr.write(f"WARN: failed to parse a soal block: {e}\n")
    return soals


# ---------------------------------------------------------------------------
# FEN / SAN validation (no engine)
# ---------------------------------------------------------------------------

def validate_fen(soal: Soal) -> Optional[chess.Board]:
    """
    Validate FEN syntax + basic legality. Returns the Board on success, None
    on failure (and fills soal.fen_error).
    """
    if not soal.fen:
        soal.fen_legal = False
        soal.fen_error = "FEN not found in soal block"
        return None
    try:
        board = chess.Board(soal.fen)
    except Exception as e:
        soal.fen_legal = False
        soal.fen_error = f"chess.Board(fen) raised: {e}"
        return None

    # Material sanity
    white_pieces = sum(1 for sq in chess.SQUARES
                       if (p := board.piece_at(sq)) and p.color == chess.WHITE)
    black_pieces = sum(1 for sq in chess.SQUARES
                       if (p := board.piece_at(sq)) and p.color == chess.BLACK)
    white_kings = sum(1 for sq in chess.SQUARES
                      if (p := board.piece_at(sq))
                      and p.color == chess.WHITE
                      and p.piece_type == chess.KING)
    black_kings = sum(1 for sq in chess.SQUARES
                      if (p := board.piece_at(sq))
                      and p.color == chess.BLACK
                      and p.piece_type == chess.KING)

    errs = []
    if white_pieces > 16:
        errs.append(f"too many White pieces ({white_pieces})")
    if black_pieces > 16:
        errs.append(f"too many Black pieces ({black_pieces})")
    if white_kings != 1:
        errs.append(f"White kings = {white_kings} (need 1)")
    if black_kings != 1:
        errs.append(f"Black kings = {black_kings} (need 1)")

    # Side-to-move vs text
    if soal.giliran_text:
        expected = "w" if soal.giliran_text.lower() == "putih" else "b"
        fen_stm = soal.fen.split()[1] if len(soal.fen.split()) >= 2 else ""
        if fen_stm and fen_stm != expected:
            errs.append(
                f"side-to-move mismatch: text says {soal.giliran_text} "
                f"but FEN has '{fen_stm}'"
            )

    if errs:
        soal.fen_legal = False
        soal.fen_error = "; ".join(errs)
        return None

    soal.fen_legal = True
    return board


def validate_san_options(soal: Soal, board: chess.Board) -> None:
    """Try parse_san on each of the 4 opsi against a fresh copy of the board."""
    soal.opsi_legality = [False, False, False, False]
    soal.opsi_errors = ["", "", "", ""]
    for i, san in enumerate(soal.opsi):
        if not san:
            soal.opsi_errors[i] = "empty option"
            continue
        try:
            test_board = board.copy()
            test_board.parse_san(san)
            soal.opsi_legality[i] = True
        except Exception as e:
            soal.opsi_legality[i] = False
            soal.opsi_errors[i] = f"parse_san({san!r}) failed: {e}"


# ---------------------------------------------------------------------------
# Engine check
# ---------------------------------------------------------------------------

DEFAULT_STOCKFISH_LOCATIONS = [
    "stockfish",
    "stockfish.exe",
    r"C:\Program Files\Stockfish\stockfish.exe",
    r"C:\Program Files (x86)\Stockfish\stockfish.exe",
    str(Path.home() / "stockfish" / "stockfish.exe"),
    str(Path.home() / "stockfish" / "stockfish"),
]


def find_stockfish(explicit: Optional[str]) -> Optional[str]:
    """Resolve a stockfish path. Returns None if not found."""
    if explicit:
        if Path(explicit).exists():
            return explicit
        # also allow it to be on PATH
        which = shutil.which(explicit)
        if which:
            return which
        return None
    for candidate in DEFAULT_STOCKFISH_LOCATIONS:
        if Path(candidate).exists():
            return candidate
        which = shutil.which(candidate)
        if which:
            return which
    return None


def score_to_cp(score: chess.engine.PovScore) -> tuple[Optional[int], Optional[int]]:
    """
    Convert a PovScore (from side-to-move POV) to (cp, mate).
    Exactly one of cp/mate will be non-None.
    """
    pov = score.relative
    if pov.is_mate():
        return None, pov.mate()
    return pov.score(mate_score=100000), None


def run_engine_check(
    soal: Soal,
    board: chess.Board,
    engine: chess.engine.SimpleEngine,
    depth: int,
    alt_tolerance_cp: int = 50,
) -> None:
    """Get engine top-3 and decide TOP/ALT_OK/DISAGREE for the marked answer."""
    try:
        infos = engine.analyse(
            board,
            chess.engine.Limit(depth=depth),
            multipv=3,
        )
    except Exception as e:
        soal.engine_agree = "SKIPPED"
        soal.notes = f"engine.analyse failed: {e}"
        return

    if not isinstance(infos, list):
        infos = [infos]

    top3: list[EngineMove] = []
    for info in infos:
        pv = info.get("pv") or []
        if not pv:
            continue
        move = pv[0]
        try:
            san = board.san(move)
        except Exception:
            san = move.uci()
        cp, mate = score_to_cp(info["score"])
        top3.append(EngineMove(san=san, eval_cp=cp, mate=mate))

    soal.engine_top3 = top3

    if not top3:
        soal.engine_agree = "SKIPPED"
        soal.notes = "engine returned no moves"
        return

    if soal.jawaban_idx < 0 or not soal.opsi[soal.jawaban_idx]:
        soal.engine_agree = "SKIPPED"
        soal.notes = "no marked jawaban or empty option text"
        return

    marked_san = soal.opsi[soal.jawaban_idx]

    # Normalise SAN by parsing then re-emitting (handles `+`, `#`, `x`, etc.)
    def canonical_san(san: str) -> Optional[str]:
        try:
            mv = board.parse_san(san)
            return board.san(mv)
        except Exception:
            return None

    marked_canon = canonical_san(marked_san)
    if marked_canon is None:
        soal.engine_agree = "DISAGREE"
        soal.notes = f"marked SAN {marked_san!r} is illegal — cannot compare"
        return

    canon_top3 = [m.san for m in top3]

    # Compare
    if canon_top3 and marked_canon == canon_top3[0]:
        soal.engine_agree = "TOP"
        return

    # ALT_OK if marked is in top-2/3 AND eval is within tolerance of top
    def _abs_cp(m: EngineMove) -> int:
        if m.mate is not None:
            # mate-in-N: weight heavily. Same-side mate dominates.
            return 100000 - abs(m.mate)
        return m.eval_cp if m.eval_cp is not None else 0

    for idx, m in enumerate(canon_top3[1:], start=1):
        if m == marked_canon:
            top_cp = _abs_cp(top3[0])
            this_cp = _abs_cp(top3[idx])
            if abs(top_cp - this_cp) <= alt_tolerance_cp:
                soal.engine_agree = "ALT_OK"
                soal.notes = (
                    f"marked is engine #{idx + 1}, eval within "
                    f"{alt_tolerance_cp}cp of top"
                )
            else:
                soal.engine_agree = "DISAGREE"
                soal.notes = (
                    f"marked is engine #{idx + 1} but eval differs by "
                    f"{abs(top_cp - this_cp)}cp from top"
                )
            return

    soal.engine_agree = "DISAGREE"
    soal.notes = (
        f"marked {marked_canon!r} not in engine top-3 "
        f"{canon_top3}"
    )


# ---------------------------------------------------------------------------
# Reporting
# ---------------------------------------------------------------------------

def soal_to_jsonable(s: Soal) -> dict:
    """Convert Soal to JSON-friendly dict, omitting internal noise."""
    return {
        "number": s.number,
        "level": s.level,
        "pilar": s.pilar,
        "tema": s.tema,
        "fen": s.fen,
        "fen_legal": s.fen_legal,
        "fen_error": s.fen_error,
        "giliran": s.giliran,
        "giliran_text": s.giliran_text,
        "opsi": s.opsi,
        "opsi_legality": s.opsi_legality,
        "opsi_errors": s.opsi_errors,
        "jawaban_letter": s.jawaban_letter,
        "jawaban_idx": s.jawaban_idx,
        "engine_top3": [asdict(m) for m in s.engine_top3],
        "engine_agree": s.engine_agree,
        "notes": s.notes,
    }


def build_summary(soals: list[Soal]) -> dict:
    """Aggregate counters for the report."""
    return {
        "fen_illegal": sum(1 for s in soals if not s.fen_legal),
        "san_illegal": sum(
            1 for s in soals
            if s.fen_legal and s.opsi_legality and not all(s.opsi_legality)
        ),
        "engine_top_match": sum(1 for s in soals if s.engine_agree == "TOP"),
        "engine_alt_ok": sum(1 for s in soals if s.engine_agree == "ALT_OK"),
        "engine_disagree": sum(1 for s in soals if s.engine_agree == "DISAGREE"),
        "engine_skipped": sum(1 for s in soals if s.engine_agree == "SKIPPED"),
    }


def write_json_report(
    path: Path,
    source_file: str,
    depth: int,
    soals: list[Soal],
    used_engine: bool,
) -> None:
    """Write the machine-readable JSON report."""
    payload = {
        "file": source_file,
        "validated_at": datetime.now().astimezone().isoformat(),
        "stockfish_depth": depth if used_engine else None,
        "engine_used": used_engine,
        "total_soal": len(soals),
        "summary": build_summary(soals),
        "soal": [soal_to_jsonable(s) for s in soals],
    }
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")


def _format_eval(m: EngineMove) -> str:
    if m.mate is not None:
        sign = "+" if m.mate > 0 else ""
        return f"M{sign}{m.mate}"
    if m.eval_cp is None:
        return "?"
    return f"{m.eval_cp / 100:+.2f}"


def write_markdown_report(
    path: Path,
    source_file: str,
    depth: int,
    soals: list[Soal],
    used_engine: bool,
) -> None:
    """Write the human-readable markdown report."""
    summary = build_summary(soals)
    now = datetime.now().astimezone().isoformat(timespec="seconds")

    lines: list[str] = []
    lines.append(f"# Validation Report — {source_file}")
    lines.append("")
    lines.append(f"Generated: {now}  ")
    if used_engine:
        lines.append(f"Stockfish depth: {depth}  ")
    else:
        lines.append("Stockfish depth: (engine check skipped)  ")
    lines.append(f"Total soal: {len(soals)}")
    lines.append("")

    lines.append("## Summary")
    lines.append("")
    lines.append("| Metric | Count |")
    lines.append("|--------|------:|")
    lines.append(f"| Engine TOP match | {summary['engine_top_match']} |")
    lines.append(f"| Engine ALT acceptable | {summary['engine_alt_ok']} |")
    lines.append(f"| Engine disagree | {summary['engine_disagree']} |")
    lines.append(f"| Engine skipped | {summary['engine_skipped']} |")
    lines.append(f"| FEN illegal | {summary['fen_illegal']} |")
    lines.append(f"| Soal with illegal SAN in opsi | {summary['san_illegal']} |")
    lines.append("")

    # Flagged: DISAGREE
    disagree = [s for s in soals if s.engine_agree == "DISAGREE"]
    lines.append("## Flagged Soal — Engine DISAGREE")
    lines.append("")
    if not disagree:
        lines.append("_None._")
    else:
        for s in disagree:
            lines.append(f"### Soal {s.number} — DISAGREE")
            lines.append(f"- **Tema:** {s.pilar} — {s.tema}")
            lines.append(f"- **FEN:** `{s.fen}`")
            marked_san = s.opsi[s.jawaban_idx] if 0 <= s.jawaban_idx < 4 else "(none)"
            lines.append(f"- **Marked jawaban:** {s.jawaban_letter}. `{marked_san}`")
            if s.engine_top3:
                top_str = " | ".join(
                    f"{i+1}. `{m.san}` ({_format_eval(m)})"
                    for i, m in enumerate(s.engine_top3)
                )
                lines.append(f"- **Engine top-3:** {top_str}")
            if s.notes:
                lines.append(f"- **Note:** {s.notes}")
            lines.append("")

    # ALT_OK informational
    alt_ok = [s for s in soals if s.engine_agree == "ALT_OK"]
    lines.append("## Soal — Engine ALT_OK (acceptable alternatives)")
    lines.append("")
    if not alt_ok:
        lines.append("_None._")
    else:
        for s in alt_ok:
            marked_san = s.opsi[s.jawaban_idx] if 0 <= s.jawaban_idx < 4 else "(none)"
            top_str = " | ".join(
                f"`{m.san}` ({_format_eval(m)})" for m in s.engine_top3
            )
            lines.append(
                f"- Soal {s.number} ({s.pilar}) — marked {s.jawaban_letter}."
                f" `{marked_san}` · top: {top_str}"
            )
    lines.append("")

    # FEN issues
    fen_bad = [s for s in soals if not s.fen_legal]
    lines.append("## Soal With FEN Issues")
    lines.append("")
    if not fen_bad:
        lines.append("_None._")
    else:
        for s in fen_bad:
            lines.append(f"### Soal {s.number}")
            lines.append(f"- **Tema:** {s.pilar} — {s.tema}")
            lines.append(f"- **FEN:** `{s.fen}`")
            lines.append(f"- **Error:** {s.fen_error}")
            lines.append("")

    # Illegal SAN
    san_bad = [
        s for s in soals
        if s.fen_legal and s.opsi_legality and not all(s.opsi_legality)
    ]
    lines.append("## Soal With Illegal SAN")
    lines.append("")
    if not san_bad:
        lines.append("_None._")
    else:
        for s in san_bad:
            lines.append(f"### Soal {s.number}")
            lines.append(f"- **Tema:** {s.pilar} — {s.tema}")
            lines.append(f"- **FEN:** `{s.fen}`")
            for i, (san, ok, err) in enumerate(
                zip(s.opsi, s.opsi_legality, s.opsi_errors)
            ):
                mark = "OK" if ok else "ILLEGAL"
                letter = "ABCD"[i]
                line = f"  - {letter}. `{san}` — {mark}"
                if err:
                    line += f" — {err}"
                lines.append(line)
            lines.append("")

    path.write_text("\n".join(lines), encoding="utf-8")


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

STOCKFISH_HELP = (
    "ERROR: Stockfish engine not found.\n"
    "Download from: https://stockfishchess.org/download/\n"
    "Then either:\n"
    "  (a) Add stockfish.exe to PATH, OR\n"
    "  (b) Run with --stockfish \"C:\\path\\to\\stockfish.exe\"\n"
    "Or run with --no-engine to skip the engine check entirely.\n"
)


def main(argv: Optional[list[str]] = None) -> int:
    parser = argparse.ArgumentParser(
        description="Validate chess training markdown files (FEN, SAN, Stockfish).",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument("file", help="Path to the markdown file to validate.")
    parser.add_argument(
        "--depth", type=int, default=18,
        help="Stockfish search depth (default: 18).",
    )
    parser.add_argument(
        "--stockfish", default=None,
        help="Explicit path to stockfish executable. "
             "If omitted, common locations are tried.",
    )
    parser.add_argument(
        "--no-engine", action="store_true",
        help="Skip Stockfish check; only validate FEN/SAN syntax.",
    )
    parser.add_argument(
        "--output-dir", default=None,
        help="Directory for report files (default: same dir as input file).",
    )
    parser.add_argument(
        "--alt-tolerance-cp", type=int, default=50,
        help="Centipawn tolerance for ALT_OK (default: 50 = 0.5 pawn).",
    )
    args = parser.parse_args(argv)

    md_path = Path(args.file).resolve()
    if not md_path.exists():
        sys.stderr.write(f"ERROR: file not found: {md_path}\n")
        return 1

    out_dir = Path(args.output_dir).resolve() if args.output_dir else md_path.parent
    out_dir.mkdir(parents=True, exist_ok=True)

    print(f"Parsing: {md_path}")
    soals = parse_soal_file(md_path)
    print(f"Parsed {len(soals)} soal.")
    if not soals:
        sys.stderr.write("ERROR: no soal parsed — check the file format.\n")
        return 1

    # Engine setup
    engine: Optional[chess.engine.SimpleEngine] = None
    used_engine = False
    if not args.no_engine:
        sf_path = find_stockfish(args.stockfish)
        if not sf_path:
            sys.stderr.write(STOCKFISH_HELP)
            return 1
        print(f"Using Stockfish: {sf_path}")
        try:
            engine = chess.engine.SimpleEngine.popen_uci(sf_path)
            used_engine = True
        except Exception as e:
            sys.stderr.write(f"ERROR: failed to start Stockfish: {e}\n")
            sys.stderr.write(STOCKFISH_HELP)
            return 1

    try:
        for i, soal in enumerate(soals, start=1):
            try:
                board = validate_fen(soal)
                if board is None:
                    print(
                        f"  [{i:3d}] Soal {soal.number}: FEN ILLEGAL "
                        f"— {soal.fen_error}"
                    )
                    continue
                validate_san_options(soal, board)
                bad_opsi = [
                    "ABCD"[j] for j, ok in enumerate(soal.opsi_legality) if not ok
                ]
                if bad_opsi:
                    print(
                        f"  [{i:3d}] Soal {soal.number}: SAN illegal in "
                        f"{','.join(bad_opsi)}"
                    )
                if engine is not None:
                    run_engine_check(
                        soal, board, engine, args.depth, args.alt_tolerance_cp,
                    )
                    status = soal.engine_agree
                    marker = {"DISAGREE": "X", "TOP": "+", "ALT_OK": "~"}.get(status, ".")
                    print(f"  [{i:3d}] Soal {soal.number}: {marker} {status}")
            except Exception as e:
                soal.notes = f"validation crashed: {e}"
                soal.engine_agree = "SKIPPED"
                sys.stderr.write(
                    f"WARN: soal {soal.number} crashed during validation: {e}\n"
                )
                traceback.print_exc(file=sys.stderr)
    finally:
        if engine is not None:
            try:
                engine.quit()
            except Exception:
                pass

    # Write reports
    stem = md_path.stem
    json_path = out_dir / f"validate-report-{stem}.json"
    md_report_path = out_dir / f"validate-report-{stem}.md"

    write_json_report(json_path, md_path.name, args.depth, soals, used_engine)
    write_markdown_report(md_report_path, md_path.name, args.depth, soals, used_engine)

    summary = build_summary(soals)
    print()
    print("=" * 60)
    print(f"Validated {len(soals)} soal.")
    print(f"  FEN illegal:           {summary['fen_illegal']}")
    print(f"  Soal with illegal SAN: {summary['san_illegal']}")
    if used_engine:
        print(f"  Engine TOP match:      {summary['engine_top_match']}")
        print(f"  Engine ALT_OK:         {summary['engine_alt_ok']}")
        print(f"  Engine DISAGREE:       {summary['engine_disagree']}")
        print(f"  Engine SKIPPED:        {summary['engine_skipped']}")
    print()
    print(f"JSON report:     {json_path}")
    print(f"Markdown report: {md_report_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
