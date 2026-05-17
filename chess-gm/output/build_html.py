"""Parse chess-gm-komprehensif-campur.md and produce updated HTML.

Reads the source MD, extracts 100 soal blocks, generates a JS SOAL_DATA array
with extended fields, and writes a new HTML file that preserves the existing
Velo CT design system while adding skenario/pertanyaan/posisi/sumber sections.
"""
import re
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
MD = os.path.join(HERE, 'chess-gm-komprehensif-campur.md')
HTML_IN = os.path.join(HERE, 'chess-gm-komprehensif-campur.html')
HTML_OUT = os.path.join(HERE, 'chess-gm-komprehensif-campur.html')

PILAR_MAP = {'TAK': 'tak', 'STR': 'str', 'END': 'end', 'BUK': 'buk'}
GILIRAN_MAP = {'Putih': 'w', 'Hitam': 'b'}

RE_HEADER = re.compile(r'^### Soal (\d+) · ([PKM]) · ([A-Z]+) — (.+?)\s*$')
RE_FEN = re.compile(r'^- \*\*FEN:\*\* `([^`]+)`\s*$')
RE_GILIRAN = re.compile(r'^- \*\*Giliran:\*\* (Putih|Hitam)\s*$')
RE_POSISI = re.compile(r'^- \*\*Posisi:\*\* (.+?)\s*$')
RE_SUMBER = re.compile(r'^- \*\*Sumber:\*\* (.+?)\s*$')
RE_OPSI_AD = re.compile(r'^([A-D])\. `([^`]+)`\s*$')
# Plain opsi (no backticks) e.g. soal 10, 14
RE_OPSI_PLAIN = re.compile(r'^([A-D])\. (.+?)\s*$')
# Pembahasan opsi: **A. `SAN` — Label:** rest...   OR  **A. text** rest  OR **A.** rest
RE_PMB_FULL = re.compile(r'^\*\*([A-D])\. (.+?)\*\*\s*(.*)$')
RE_PMB_SHORT = re.compile(r'^\*\*([A-D])\.\*\*\s*(.*)$')
# Fallback for malformed lines like "**D. `Re8+` Langsung mat? ..." with no closing **
RE_PMB_UNCLOSED = re.compile(r'^\*\*([A-D])\. (.+)$')
RE_JAWABAN = re.compile(r'^\*\*Jawaban: ([A-D])\*\*\s*—?\s*(.*)$')


def parse_md(path):
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    lines = text.split('\n')
    # find all soal header indices
    headers = []
    for i, l in enumerate(lines):
        m = RE_HEADER.match(l)
        if m:
            headers.append((i, m))
    assert len(headers) == 100, f"Expected 100 soal, got {len(headers)}"

    soal_list = []
    for idx, (start_line, hm) in enumerate(headers):
        end_line = headers[idx + 1][0] if idx + 1 < len(headers) else len(lines)
        block = lines[start_line:end_line]
        soal = parse_block(block, hm)
        soal_list.append(soal)
    return soal_list


def parse_block(block, hm):
    n = int(hm.group(1))
    lvl = hm.group(2)
    pilar_raw = hm.group(3)
    if pilar_raw not in PILAR_MAP:
        print(f"WARN soal {n}: unknown pilar '{pilar_raw}'", file=sys.stderr)
        pilar = pilar_raw.lower()
    else:
        pilar = PILAR_MAP[pilar_raw]
    tema = hm.group(4).strip()

    # Find key marker lines
    fen = None
    giliran = None
    posisi = None
    sumber = None
    pertanyaan = None
    opsi = [None, None, None, None]
    pmb = [None, None, None, None]
    jwb = None
    jwb_final = None

    # Scan for FEN/Giliran/Posisi/Sumber
    for l in block:
        if fen is None:
            m = RE_FEN.match(l)
            if m:
                fen = m.group(1)
                continue
        if giliran is None:
            m = RE_GILIRAN.match(l)
            if m:
                giliran = GILIRAN_MAP[m.group(1)]
                continue
        if posisi is None:
            m = RE_POSISI.match(l)
            if m:
                posisi = m.group(1).strip()
                continue
        if sumber is None:
            m = RE_SUMBER.match(l)
            if m:
                sumber = m.group(1).strip()
                continue

    # Find skenario: from line after **Skenario:** until next blank then ![D-
    text = '\n'.join(block)
    m = re.search(r'\*\*Skenario:\*\*\s*(.*?)\n+!\[D-', text, re.DOTALL)
    if m:
        skenario = m.group(1).strip()
    else:
        skenario = ''
        print(f"WARN soal {n}: no skenario found", file=sys.stderr)

    # Find Pertanyaan: from **Pertanyaan:** ... up to next blank line
    m = re.search(r'\*\*Pertanyaan:\*\*\s*(.+?)\n\n', text, re.DOTALL)
    if m:
        pertanyaan = m.group(1).strip().replace('\n', ' ')
    else:
        # fallback: until **Opsi:**
        m = re.search(r'\*\*Pertanyaan:\*\*\s*(.+?)\*\*Opsi:\*\*', text, re.DOTALL)
        if m:
            pertanyaan = m.group(1).strip().replace('\n', ' ')
        else:
            pertanyaan = ''
            print(f"WARN soal {n}: no pertanyaan found", file=sys.stderr)

    # Find Opsi block: after **Opsi:** up to **Pembahasan:**
    m = re.search(r'\*\*Opsi:\*\*\s*(.+?)\*\*Pembahasan:\*\*', text, re.DOTALL)
    if m:
        opsi_block = m.group(1).strip().split('\n')
        for ol in opsi_block:
            ol = ol.strip()
            mm = RE_OPSI_AD.match(ol)
            if mm:
                opsi[ord(mm.group(1)) - ord('A')] = mm.group(2)
                continue
            mm = RE_OPSI_PLAIN.match(ol)
            if mm:
                opsi[ord(mm.group(1)) - ord('A')] = mm.group(2).strip()
                continue
    else:
        print(f"WARN soal {n}: no opsi block found", file=sys.stderr)

    if any(o is None for o in opsi):
        print(f"WARN soal {n}: missing opsi: {opsi}", file=sys.stderr)

    # Find Pembahasan block: after **Pembahasan:** up to **Jawaban:**
    m = re.search(r'\*\*Pembahasan:\*\*\s*(.+?)\*\*Jawaban:', text, re.DOTALL)
    if m:
        pmb_block_text = m.group(1).strip()
        # Parse each **A. ... :** rest OR **A.** rest
        # Strategy: split on lines that start with **<L>. or **<L>.**
        pmb_lines = pmb_block_text.split('\n')
        current = None  # ('A', [...])
        buckets = {}
        for pl in pmb_lines:
            mm = RE_PMB_FULL.match(pl)
            if mm:
                L = mm.group(1)
                head = mm.group(2).strip()
                rest = mm.group(3).strip()
                # head is everything inside the bold; rest is post-bold
                # We want: full sentence = head + ': ' + rest? Actually pattern is:
                # **A. `SAN` — Label:** explanation
                # So full readable: head + ' ' + rest (head usually ends with ':')
                combined = head
                if rest:
                    combined = head + ' ' + rest
                if L in buckets:
                    buckets[L].append(combined)
                else:
                    buckets[L] = [combined]
                current = L
                continue
            mm = RE_PMB_SHORT.match(pl)
            if mm:
                L = mm.group(1)
                rest = mm.group(2).strip()
                if L in buckets:
                    buckets[L].append(rest)
                else:
                    buckets[L] = [rest]
                current = L
                continue
            # Unclosed bold fallback: "**A. `SAN` ...something..." with no closing **
            mm = RE_PMB_UNCLOSED.match(pl)
            if mm:
                L = mm.group(1)
                rest = mm.group(2).strip()
                # Strip residual ** if present
                rest = rest.replace('**', '').strip()
                if L in buckets:
                    buckets[L].append(rest)
                else:
                    buckets[L] = [rest]
                current = L
                continue
            # continuation
            if current and pl.strip():
                buckets[current].append(pl.strip())
        for L in 'ABCD':
            i = ord(L) - ord('A')
            if L in buckets:
                pmb[i] = ' '.join(x for x in buckets[L] if x).strip()
            else:
                pmb[i] = ''
                print(f"WARN soal {n}: no pembahasan for {L}", file=sys.stderr)
    else:
        print(f"WARN soal {n}: no pembahasan block found", file=sys.stderr)

    # Find Jawaban (accept optional trailing inline text inside the bold prefix)
    m = re.search(r'\*\*Jawaban: ([A-D])[^*\n]*\*\*\s*(.*?)(?=\n---|\Z)', text, re.DOTALL)
    if m:
        jwb = ord(m.group(1)) - ord('A')
        rest = m.group(2).strip()
        # Strip leading dash/em-dash
        rest = re.sub(r'^[—\-]\s*', '', rest)
        jwb_final = rest.replace('\n', ' ').strip()
        # collapse multiple spaces
        jwb_final = re.sub(r'\s+', ' ', jwb_final)
    else:
        print(f"WARN soal {n}: no Jawaban found", file=sys.stderr)
        jwb = 0
        jwb_final = ''

    return {
        'n': n,
        'lvl': lvl,
        'pilar': pilar,
        'tema': tema,
        'skenario': skenario,
        'fen': fen,
        'giliran': giliran,
        'posisi': posisi or '',
        'sumber': sumber or '',
        'pertanyaan': pertanyaan,
        'opsi': opsi,
        'jwb': jwb,
        'pmb': pmb,
        'jwbFinal': jwb_final,
    }


def js_escape(s):
    """Escape for JS string literal inside double quotes."""
    if s is None:
        return ''
    s = s.replace('\\', '\\\\')
    s = s.replace('"', '\\"')
    s = s.replace('\r\n', '\n').replace('\r', '\n')
    s = s.replace('\n', ' ')
    # Collapse multi-space
    s = re.sub(r' {2,}', ' ', s)
    return s


def render_soal_js(s):
    parts = []
    parts.append(f'n:{s["n"]}')
    parts.append(f'lvl:"{s["lvl"]}"')
    parts.append(f'pilar:"{s["pilar"]}"')
    parts.append(f'tema:"{js_escape(s["tema"])}"')
    parts.append(f'skenario:"{js_escape(s["skenario"])}"')
    parts.append(f'fen:"{js_escape(s["fen"])}"')
    parts.append(f'giliran:"{s["giliran"]}"')
    parts.append(f'posisi:"{js_escape(s["posisi"])}"')
    parts.append(f'sumber:"{js_escape(s["sumber"])}"')
    parts.append(f'pertanyaan:"{js_escape(s["pertanyaan"])}"')
    opsi_js = '[' + ','.join(f'"{js_escape(o)}"' for o in s['opsi']) + ']'
    parts.append(f'opsi:{opsi_js}')
    parts.append(f'jwb:{s["jwb"]}')
    pmb_js = '[' + ','.join(f'"{js_escape(p)}"' for p in s['pmb']) + ']'
    parts.append(f'pmb:{pmb_js}')
    parts.append(f'jwbFinal:"{js_escape(s["jwbFinal"])}"')
    return '{' + ','.join(parts) + '}'


def main():
    soal = parse_md(MD)
    print(f"Parsed {len(soal)} soal", file=sys.stderr)
    # Sanity: jwb in 0..3
    for s in soal:
        if s['jwb'] not in (0, 1, 2, 3):
            print(f"WARN soal {s['n']}: jwb={s['jwb']}", file=sys.stderr)

    # Build JS array
    arr = ',\n'.join(render_soal_js(s) for s in soal)
    soal_data_js = 'const SOAL_DATA = [\n' + arr + '\n];'

    html = build_html(soal_data_js)
    with open(HTML_OUT, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Wrote {HTML_OUT} ({len(html)} chars)", file=sys.stderr)


def build_html(soal_data_js):
    return HTML_TEMPLATE.replace('___SOAL_DATA___', soal_data_js)


HTML_TEMPLATE = r'''<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Road to Chess GM · Komprehensif Lintas Pilar (Campur)</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.js"></script>
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
<style>
:root{
  --red:#E53935; --red-dark:#C62828; --red-light:#EF5350;
  --bg:#0F1117; --bg-2:#161922; --bg-3:#1F2330;
  --glass:rgba(255,255,255,0.06); --glass-border:rgba(255,255,255,0.10);
  --text:#F5F7FA; --text-mute:#A0A6B8; --text-faint:#6B7280;
  --green:#34D399; --amber:#FBBF24; --blue:#60A5FA; --purple:#A78BFA;
  --shadow-lg:0 24px 60px rgba(0,0,0,0.45);
  --shadow-glow:0 0 40px rgba(229,57,53,0.25);
  --radius:16px; --radius-sm:10px;
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:var(--bg);color:var(--text);font-family:'IBM Plex Sans',system-ui,sans-serif;min-height:100vh;-webkit-font-smoothing:antialiased}
body{background:
  radial-gradient(ellipse 80% 50% at 50% -10%, rgba(229,57,53,0.18), transparent 60%),
  radial-gradient(ellipse 60% 40% at 80% 100%, rgba(96,165,250,0.10), transparent 70%),
  var(--bg);
  background-attachment:fixed;
}
.container{max-width:1280px;margin:0 auto;padding:32px 24px 64px}

/* HEADER */
.hero{display:flex;flex-direction:column;gap:8px;margin-bottom:28px;padding:24px 28px;background:var(--glass);backdrop-filter:blur(20px);border:1px solid var(--glass-border);border-radius:var(--radius);box-shadow:var(--shadow-lg)}
.hero-top{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px}
.hero-title{font-family:'DM Sans',sans-serif;font-weight:900;font-size:28px;letter-spacing:-0.02em;line-height:1.1;display:flex;align-items:center;gap:12px}
.hero-title .crown{color:var(--red);filter:drop-shadow(0 0 12px rgba(229,57,53,0.6))}
.hero-sub{color:var(--text-mute);font-size:14px;font-weight:400}
.hero-stats{display:flex;gap:8px;flex-wrap:wrap}
.stat{display:flex;align-items:center;gap:6px;padding:6px 12px;background:rgba(255,255,255,0.04);border:1px solid var(--glass-border);border-radius:999px;font-size:12px;font-weight:500;color:var(--text-mute)}
.stat b{color:var(--text);font-weight:700}

/* PROGRESS */
.progress-wrap{margin-top:16px;display:flex;align-items:center;gap:12px}
.progress-bar{flex:1;height:6px;background:rgba(255,255,255,0.06);border-radius:999px;overflow:hidden}
.progress-fill{height:100%;background:linear-gradient(90deg,var(--red) 0%,var(--red-light) 100%);width:0%;transition:width 0.4s cubic-bezier(0.4,0,0.2,1);box-shadow:0 0 12px rgba(229,57,53,0.5)}
.progress-text{font-family:'DM Sans',sans-serif;font-weight:700;font-size:13px;color:var(--text);min-width:80px;text-align:right}

/* MAIN LAYOUT */
.main{display:grid;grid-template-columns:minmax(0,1fr) 420px;gap:24px;align-items:start}
@media(max-width:980px){.main{grid-template-columns:1fr}}

/* SOAL CARD */
.card{background:var(--glass);backdrop-filter:blur(20px);border:1px solid var(--glass-border);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow-lg)}
.soal-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:20px;flex-wrap:wrap}
.soal-nomor{font-family:'DM Sans',sans-serif;font-weight:900;font-size:20px;color:var(--text)}
.soal-nomor span{color:var(--text-faint);font-weight:500;font-size:14px;margin-left:4px}
.badges{display:flex;gap:6px;flex-wrap:wrap}
.badge{padding:4px 10px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;font-family:'DM Sans',sans-serif}
.badge.P{background:rgba(52,211,153,0.15);color:var(--green);border:1px solid rgba(52,211,153,0.3)}
.badge.K{background:rgba(96,165,250,0.15);color:var(--blue);border:1px solid rgba(96,165,250,0.3)}
.badge.M{background:rgba(229,57,53,0.15);color:var(--red-light);border:1px solid rgba(229,57,53,0.35)}
.badge.tak{background:rgba(167,139,250,0.12);color:var(--purple);border:1px solid rgba(167,139,250,0.25)}
.badge.str{background:rgba(251,191,36,0.12);color:var(--amber);border:1px solid rgba(251,191,36,0.25)}
.badge.end{background:rgba(96,165,250,0.10);color:var(--blue);border:1px solid rgba(96,165,250,0.25)}
.badge.buk{background:rgba(52,211,153,0.10);color:var(--green);border:1px solid rgba(52,211,153,0.25)}

.tema{font-family:'DM Sans',sans-serif;font-size:24px;font-weight:700;line-height:1.2;margin-bottom:12px;letter-spacing:-0.01em}

/* SKENARIO & PERTANYAAN cards */
.skenario-card, .pertanyaan-card {
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 16px 20px;
  margin: 16px 0;
}
.skenario-card h3, .pertanyaan-card h3 {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-mute);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 10px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}
.pertanyaan-card h3 { color: var(--red-light); }
.skenario-card p, .pertanyaan-card p {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--text);
  margin: 0;
}
.pertanyaan-card p { font-weight: 500; }

.giliran-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:rgba(255,255,255,0.05);border:1px solid var(--glass-border);border-radius:8px;font-size:13px;font-weight:500;margin-bottom:12px;margin-right:8px}
.giliran-dot{width:10px;height:10px;border-radius:50%;border:1px solid #555}
.giliran-dot.w{background:#fff}
.giliran-dot.b{background:#222}

.fen-row{display:flex;align-items:center;gap:8px;padding:8px 12px;background:rgba(0,0,0,0.30);border:1px solid var(--glass-border);border-radius:var(--radius-sm);font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--text-mute);margin-bottom:8px;overflow-x:auto;white-space:nowrap}
.fen-row code{flex:1;color:var(--text);font-family:inherit;font-size:11px}
.fen-copy{padding:4px 8px;background:rgba(255,255,255,0.05);border:1px solid var(--glass-border);border-radius:6px;color:var(--text-mute);cursor:pointer;font-size:11px;transition:all 0.2s;font-family:'DM Sans',sans-serif;font-weight:600}
.fen-copy:hover{background:var(--red);color:#fff;border-color:var(--red)}

/* Inline markdown rendering (backtick code + bold) */
.prose code, .skenario-card code, .pertanyaan-card code, .info-line code, #pmbList code, .jwb-final code{
  font-family:'IBM Plex Mono',monospace;
  font-size:0.88em;
  background:rgba(229,57,53,0.12);
  color:#ff7a76;
  padding:1px 6px;
  border-radius:4px;
  border:1px solid rgba(229,57,53,0.22);
  white-space:nowrap;
}
.prose strong, .skenario-card strong, .pertanyaan-card strong, #pmbList strong, .jwb-final strong{
  font-weight:700;
  color:var(--text);
}

/* INFO LINES (Posisi, Sumber) */
.info-line {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 12.5px;
  color: var(--text-mute);
  margin: 4px 0;
  line-height: 1.5;
}
.info-line b { color: var(--text); font-weight: 600; font-family: 'DM Sans',sans-serif; }
.info-line.muted { font-style: italic; opacity: 0.78; }
.info-block { margin-bottom: 16px; }

/* OPTIONS */
.opsi-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px}
@media(max-width:560px){.opsi-grid{grid-template-columns:1fr}}
.opsi-btn{display:flex;align-items:center;gap:12px;padding:14px 18px;background:rgba(255,255,255,0.04);border:1.5px solid var(--glass-border);border-radius:var(--radius-sm);color:var(--text);font-family:'IBM Plex Sans',sans-serif;font-size:15px;font-weight:500;cursor:pointer;transition:all 0.2s;text-align:left;width:100%}
.opsi-btn:hover:not(:disabled){background:rgba(229,57,53,0.08);border-color:rgba(229,57,53,0.4);transform:translateY(-1px)}
.opsi-btn:disabled{cursor:not-allowed;opacity:0.6}
.opsi-btn .label{font-family:'DM Sans',sans-serif;font-weight:900;color:var(--red);background:rgba(229,57,53,0.15);width:28px;height:28px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0}
.opsi-btn .san{font-family:'IBM Plex Mono',monospace;font-weight:600;color:var(--text);word-break:break-word}
.opsi-btn.correct{background:rgba(52,211,153,0.12);border-color:var(--green)}
.opsi-btn.correct .label{background:rgba(52,211,153,0.25);color:var(--green)}
.opsi-btn.wrong{background:rgba(229,57,53,0.10);border-color:var(--red)}

/* PEMBAHASAN */
.pembahasan{margin-top:20px;padding:20px;background:rgba(0,0,0,0.30);border:1px solid var(--glass-border);border-radius:var(--radius-sm);display:none}
.pembahasan.show{display:block;animation:fadeIn 0.3s ease}
@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.pembahasan h4{font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;color:var(--red-light);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.05em;display:flex;align-items:center;gap:6px}
.pmb-list{list-style:none;display:flex;flex-direction:column;gap:12px}
.pmb-list li{font-size:14px;line-height:1.6;color:var(--text-mute);padding-left:36px;position:relative}
.pmb-list li .lbl{position:absolute;left:0;top:0;font-family:'DM Sans',sans-serif;font-weight:900;font-size:12px;color:var(--red);background:rgba(229,57,53,0.15);width:26px;height:26px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center}
.pmb-list li.correct{color:var(--text)}
.pmb-list li.correct .lbl{background:rgba(52,211,153,0.20);color:var(--green)}
.jawaban-final{margin-top:18px;padding:16px 18px;background:linear-gradient(135deg,rgba(52,211,153,0.15),rgba(52,211,153,0.05));border:1px solid rgba(52,211,153,0.30);border-radius:var(--radius-sm);font-size:14px;color:var(--text)}
.jwb-label{display:flex;align-items:center;gap:8px;font-family:'DM Sans',sans-serif;font-weight:700;margin-bottom:8px}
.jawaban-final .key{font-family:'DM Sans',sans-serif;font-weight:900;color:var(--green);font-size:18px}
.jwb-final{font-family:'IBM Plex Sans',sans-serif;font-size:14px;line-height:1.7;color:var(--text);margin:0;font-weight:400}

/* RIGHT PANEL: BOARD */
.board-wrap{position:sticky;top:24px;display:flex;flex-direction:column;gap:14px}
.board-card{background:var(--glass);backdrop-filter:blur(20px);border:1px solid var(--glass-border);border-radius:var(--radius);padding:18px;box-shadow:var(--shadow-lg)}
#board{width:100%;max-width:380px;margin:0 auto}
.board-foot{margin-top:14px;display:flex;justify-content:space-between;gap:8px;font-size:12px;color:var(--text-faint);font-family:'IBM Plex Mono',monospace}
.board-foot .flip-btn{padding:6px 10px;background:rgba(255,255,255,0.05);border:1px solid var(--glass-border);border-radius:6px;color:var(--text-mute);cursor:pointer;transition:all 0.2s;font-family:'DM Sans',sans-serif;font-weight:600;font-size:11px;display:flex;align-items:center;gap:4px}
.board-foot .flip-btn:hover{background:rgba(229,57,53,0.10);color:var(--red);border-color:var(--red)}

/* NAV */
.nav-card{background:var(--glass);backdrop-filter:blur(20px);border:1px solid var(--glass-border);border-radius:var(--radius);padding:16px;box-shadow:var(--shadow-lg)}
.nav-row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px}
.nav-btn{display:flex;align-items:center;justify-content:center;gap:6px;padding:12px;background:rgba(255,255,255,0.04);border:1px solid var(--glass-border);border-radius:var(--radius-sm);color:var(--text);font-family:'DM Sans',sans-serif;font-weight:700;font-size:13px;cursor:pointer;transition:all 0.2s}
.nav-btn:hover:not(:disabled){background:rgba(229,57,53,0.10);border-color:var(--red);color:var(--red-light)}
.nav-btn:disabled{opacity:0.4;cursor:not-allowed}
.nav-btn.primary{background:var(--red);border-color:var(--red);color:#fff}
.nav-btn.primary:hover{background:var(--red-dark);box-shadow:var(--shadow-glow)}
.jump-row{display:flex;gap:6px;align-items:center}
.jump-row label{font-size:11px;color:var(--text-faint);font-family:'DM Sans',sans-serif;font-weight:600;text-transform:uppercase;letter-spacing:0.05em}
.jump-row input{flex:1;padding:8px 10px;background:rgba(0,0,0,0.30);border:1px solid var(--glass-border);border-radius:6px;color:var(--text);font-family:'IBM Plex Mono',monospace;font-size:13px;text-align:center;width:60px}
.jump-row input:focus{outline:none;border-color:var(--red)}
.jump-btn{padding:8px 12px;background:rgba(255,255,255,0.04);border:1px solid var(--glass-border);border-radius:6px;color:var(--text);cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600;font-size:12px;transition:all 0.2s}
.jump-btn:hover{background:var(--red);color:#fff;border-color:var(--red)}

/* SCORE */
.score-card{background:var(--glass);backdrop-filter:blur(20px);border:1px solid var(--glass-border);border-radius:var(--radius);padding:16px;box-shadow:var(--shadow-lg)}
.score-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}
.score-cell{padding:12px;background:rgba(0,0,0,0.20);border-radius:var(--radius-sm);text-align:center}
.score-cell .num{font-family:'DM Sans',sans-serif;font-weight:900;font-size:22px;color:var(--text);line-height:1}
.score-cell .lbl{font-size:10px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.06em;margin-top:4px;font-family:'DM Sans',sans-serif;font-weight:600}
.score-cell.correct .num{color:var(--green)}
.score-cell.wrong .num{color:var(--red)}
.reset-btn{margin-top:12px;width:100%;padding:10px;background:transparent;border:1px solid rgba(229,57,53,0.30);color:var(--red-light);border-radius:var(--radius-sm);cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600;font-size:12px;transition:all 0.2s;display:flex;align-items:center;justify-content:center;gap:6px}
.reset-btn:hover{background:rgba(229,57,53,0.10);border-color:var(--red);color:var(--red)}

/* SCROLLBAR */
::-webkit-scrollbar{width:10px;height:10px}
::-webkit-scrollbar-track{background:var(--bg-2)}
::-webkit-scrollbar-thumb{background:var(--bg-3);border-radius:5px}
::-webkit-scrollbar-thumb:hover{background:#2A2F3D}

/* Chessboard.js piece transparency fix on dark bg */
.white-1e1d7,.black-3c85d{}
</style>
</head>
<body>
<div class="container">

  <header class="hero">
    <div class="hero-top">
      <div>
        <h1 class="hero-title"><i data-lucide="crown" class="crown"></i>Road to Chess Grandmaster</h1>
        <p class="hero-sub">Komprehensif Lintas Pilar · Tingkat Campur · 100 Soal Studi Kasus</p>
      </div>
      <div class="hero-stats">
        <div class="stat"><i data-lucide="target" style="width:13px;height:13px"></i><b>100</b>&nbsp;soal</div>
        <div class="stat"><i data-lucide="layers" style="width:13px;height:13px"></i><b>4</b>&nbsp;pilar</div>
        <div class="stat"><i data-lucide="trending-up" style="width:13px;height:13px"></i>P&nbsp;<b>50</b>&nbsp;·&nbsp;K&nbsp;<b>30</b>&nbsp;·&nbsp;M&nbsp;<b>20</b></div>
      </div>
    </div>
    <div class="progress-wrap">
      <div class="progress-bar"><div class="progress-fill" id="progFill"></div></div>
      <div class="progress-text" id="progText">0 / 100</div>
    </div>
  </header>

  <div class="main">
    <!-- LEFT: SOAL CARD -->
    <section class="card" id="soalCard">
      <div class="soal-head">
        <div class="soal-nomor">Soal <span id="soalNum">1</span><span id="soalTotal">/ 100</span></div>
        <div class="badges">
          <span class="badge" id="bLevel">P</span>
          <span class="badge" id="bPilar">TAK</span>
        </div>
      </div>
      <h2 class="tema" id="tema">—</h2>

      <!-- SKENARIO -->
      <div class="skenario-card">
        <h3><i data-lucide="book-open" style="width:14px;height:14px"></i>Skenario</h3>
        <p id="skenario">—</p>
      </div>

      <!-- FEN + INFO -->
      <div class="info-block">
        <div class="giliran-badge"><span class="giliran-dot" id="gilDot"></span><span id="gilText">—</span></div>
        <div class="fen-row">
          <code id="fenCode">—</code>
          <button class="fen-copy" id="fenCopyBtn">Copy</button>
        </div>
        <div class="info-line"><b>Posisi:</b> <span id="posisi">—</span></div>
        <div class="info-line muted"><b>Sumber:</b> <span id="sumber">—</span></div>
      </div>

      <!-- PERTANYAAN -->
      <div class="pertanyaan-card">
        <h3><i data-lucide="help-circle" style="width:14px;height:14px"></i>Pertanyaan</h3>
        <p id="pertanyaan">—</p>
      </div>

      <div class="opsi-grid" id="opsiGrid"></div>
      <div class="pembahasan" id="pmb">
        <h4><i data-lucide="book-open" style="width:14px;height:14px"></i>Pembahasan (4 opsi)</h4>
        <ul class="pmb-list" id="pmbList"></ul>
        <div class="jawaban-final" id="jwbFinal"></div>
      </div>
    </section>

    <!-- RIGHT: BOARD + NAV + SCORE -->
    <aside class="board-wrap">
      <div class="board-card">
        <div id="board"></div>
        <div class="board-foot">
          <span id="boardSize">8×8 · cburnett</span>
          <button class="flip-btn" id="flipBtn"><i data-lucide="rotate-cw" style="width:11px;height:11px"></i>Flip</button>
        </div>
      </div>
      <div class="nav-card">
        <div class="nav-row">
          <button class="nav-btn" id="prevBtn"><i data-lucide="chevron-left" style="width:14px;height:14px"></i>Prev</button>
          <button class="nav-btn primary" id="nextBtn">Next<i data-lucide="chevron-right" style="width:14px;height:14px"></i></button>
        </div>
        <div class="jump-row">
          <label>Jump</label>
          <input type="number" min="1" max="100" id="jumpInput" placeholder="1-100">
          <button class="jump-btn" id="jumpBtn">Go</button>
        </div>
      </div>
      <div class="score-card">
        <div class="score-grid">
          <div class="score-cell correct"><div class="num" id="scCorrect">0</div><div class="lbl">Benar</div></div>
          <div class="score-cell wrong"><div class="num" id="scWrong">0</div><div class="lbl">Salah</div></div>
          <div class="score-cell"><div class="num" id="scTotal">0</div><div class="lbl">Total</div></div>
        </div>
        <button class="reset-btn" id="resetBtn"><i data-lucide="refresh-cw" style="width:11px;height:11px"></i>Reset Skor</button>
      </div>
    </aside>
  </div>
</div>

<script>
// ============ SOAL_DATA (100 soal · studi kasus mendalam) ============
// Format: {n, lvl, pilar, tema, skenario, fen, giliran, posisi, sumber, pertanyaan, opsi[4], jwb, pmb[4], jwbFinal}
___SOAL_DATA___

// ============ STATE & RENDER ============
let curr = 0; // index 0..99
let board = null;
let orientation = 'white';
const answered = {}; // {n: choice 0..3}
const corrects = {}; // {n: bool}

function pilarName(p){return {tak:'TAK',str:'STR',end:'END',buk:'BUK'}[p]}
function lvlName(l){return {P:'Pemula',K:'Klub',M:'Master+'}[l]}

function render(){
  const s = SOAL_DATA[curr];
  const giliran = s.giliran === 'w' ? 'Putih' : 'Hitam';

  // Header
  document.getElementById('soalNum').textContent = s.n;
  const bLvl = document.getElementById('bLevel');
  bLvl.textContent = s.lvl + ' · ' + lvlName(s.lvl);
  bLvl.className = 'badge ' + s.lvl;
  const bPil = document.getElementById('bPilar');
  bPil.textContent = pilarName(s.pilar);
  bPil.className = 'badge ' + s.pilar;

  // Tema + skenario + pertanyaan + info
  document.getElementById('tema').textContent = s.tema;
  document.getElementById('skenario').innerHTML = mdInline(s.skenario);
  document.getElementById('pertanyaan').innerHTML = mdInline(s.pertanyaan);
  document.getElementById('posisi').innerHTML = mdInline(s.posisi);
  document.getElementById('sumber').innerHTML = mdInline(s.sumber);
  document.getElementById('gilText').textContent = 'Giliran: ' + giliran;
  document.getElementById('gilDot').className = 'giliran-dot ' + s.giliran;

  // FEN
  document.getElementById('fenCode').textContent = s.fen;

  // Board
  orientation = s.giliran === 'w' ? 'white' : 'black';
  if(board){
    board.orientation(orientation);
    board.position(s.fen.split(' ')[0], false);
  }

  // Opsi
  const grid = document.getElementById('opsiGrid');
  grid.innerHTML = '';
  ['A','B','C','D'].forEach((L,i)=>{
    const btn = document.createElement('button');
    btn.className = 'opsi-btn';
    btn.innerHTML = '<span class="label">'+L+'</span><span class="san">'+escapeHtml(s.opsi[i])+'</span>';
    btn.dataset.idx = i;
    btn.onclick = ()=>chooseOpsi(i);
    if(answered[s.n] !== undefined){
      btn.disabled = true;
      if(i === s.jwb) btn.classList.add('correct');
      else if(i === answered[s.n]) btn.classList.add('wrong');
    }
    grid.appendChild(btn);
  });

  // Pembahasan
  const pmb = document.getElementById('pmb');
  const list = document.getElementById('pmbList');
  list.innerHTML = '';
  s.pmb.forEach((text,i)=>{
    const li = document.createElement('li');
    if(i === s.jwb) li.classList.add('correct');
    li.innerHTML = '<span class="lbl">'+'ABCD'[i]+'</span><b>'+escapeHtml(s.opsi[i])+'</b> — '+mdInline(text);
    list.appendChild(li);
  });
  const jwbF = document.getElementById('jwbFinal');
  jwbF.innerHTML = '<div class="jwb-label"><i data-lucide="check-circle" style="width:16px;height:16px;color:var(--green)"></i>Jawaban: <span class="key">'+'ABCD'[s.jwb]+'</span> · <b>'+escapeHtml(s.opsi[s.jwb])+'</b></div><p class="jwb-final">'+mdInline(s.jwbFinal)+'</p>';
  if(answered[s.n] !== undefined){
    pmb.classList.add('show');
  } else {
    pmb.classList.remove('show');
  }

  // Nav buttons
  document.getElementById('prevBtn').disabled = curr === 0;
  document.getElementById('nextBtn').disabled = curr === SOAL_DATA.length - 1;

  // Progress
  const answeredCnt = Object.keys(answered).length;
  document.getElementById('progFill').style.width = (answeredCnt/SOAL_DATA.length*100)+'%';
  document.getElementById('progText').textContent = answeredCnt + ' / ' + SOAL_DATA.length;

  // Score
  let cc = 0, ww = 0;
  Object.values(corrects).forEach(v=>{if(v)cc++;else ww++});
  document.getElementById('scCorrect').textContent = cc;
  document.getElementById('scWrong').textContent = ww;
  document.getElementById('scTotal').textContent = answeredCnt;

  if(window.lucide) lucide.createIcons();
}

function escapeHtml(s){
  if(s == null) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Render inline markdown: `code` -> <code>, **bold** -> <strong>. HTML-escapes first so injection is safe.
function mdInline(s){
  if(s == null) return '';
  let out = escapeHtml(s);
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  return out;
}

function chooseOpsi(idx){
  const s = SOAL_DATA[curr];
  if(answered[s.n] !== undefined) return;
  answered[s.n] = idx;
  corrects[s.n] = (idx === s.jwb);
  render();
}

function prev(){if(curr>0){curr--;render()}}
function next(){if(curr<SOAL_DATA.length-1){curr++;render()}}
function jump(){
  const v = parseInt(document.getElementById('jumpInput').value,10);
  if(v>=1 && v<=SOAL_DATA.length){curr = v-1; render()}
}
function reset(){
  if(!confirm('Reset semua skor & jawaban?')) return;
  Object.keys(answered).forEach(k=>delete answered[k]);
  Object.keys(corrects).forEach(k=>delete corrects[k]);
  curr = 0;
  render();
}
function flipBoard(){
  if(board) board.flip();
}
function copyFen(){
  const f = SOAL_DATA[curr].fen;
  navigator.clipboard.writeText(f).then(()=>{
    const btn = document.getElementById('fenCopyBtn');
    const old = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(()=>btn.textContent = old, 1200);
  });
}

// Init
window.addEventListener('load', ()=>{
  board = Chessboard('board', {
    position: SOAL_DATA[0].fen.split(' ')[0],
    orientation: SOAL_DATA[0].giliran === 'w' ? 'white' : 'black',
    showNotation: true,
    pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
  });
  document.getElementById('prevBtn').onclick = prev;
  document.getElementById('nextBtn').onclick = next;
  document.getElementById('jumpBtn').onclick = jump;
  document.getElementById('jumpInput').addEventListener('keypress', e=>{if(e.key==='Enter')jump()});
  document.getElementById('resetBtn').onclick = reset;
  document.getElementById('flipBtn').onclick = flipBoard;
  document.getElementById('fenCopyBtn').onclick = copyFen;
  document.addEventListener('keydown', e=>{
    if(e.tagName === 'INPUT') return;
    if(e.key==='ArrowLeft')prev();
    else if(e.key==='ArrowRight')next();
  });
  render();
  if(window.lucide) lucide.createIcons();
});
</script>
</body>
</html>
'''


if __name__ == '__main__':
    main()
