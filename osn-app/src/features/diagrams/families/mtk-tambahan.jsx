import { anim } from '../anim';
import { parseMeanData } from '../../../utils/meanData';
import { parseInequality, parseRounding, parsePercent, parseExpression, simpleIntegerSum, parseLinePoints, parseConversion, parseFactorTask, factorPairs, isPrime, fmt } from '../../../utils/mtkParse';

// MTK figures that draw the soal's own numbers. The question phase (motion=false) shows only what
// the soal already states; anything that is the answer appears in the explanation phase.

const INK = '#e2e8f0';
const MUTE = '#94a3b8';
const GREEN = '#4ade80';
const BLUE = '#60a5fa';
const AMBER = '#fbbf24';
const PURPLE = '#c084fc';
const RED = '#f87171';

const label = (x, y, str, fill = MUTE, size = 12, anchor = 'middle') => (
  <text x={x} y={y} fill={fill} fontSize={size} fontWeight="800" textAnchor={anchor}
    fontFamily="'IBM Plex Sans',system-ui,sans-serif">{str}</text>
);
const mono = (x, y, str, fill = INK, size = 18) => (
  <text x={x} y={y} fill={fill} fontSize={size} fontWeight="700" textAnchor="middle"
    fontFamily="'JetBrains Mono','IBM Plex Mono',ui-monospace,monospace">{str}</text>
);

function axis(x1, x2, y) {
  return (
    <>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={INK} strokeWidth="3" />
      <polygon points={`${x2 + 12},${y} ${x2},${y - 7} ${x2},${y + 7}`} fill={INK} />
      <polygon points={`${x1 - 12},${y} ${x1},${y - 7} ${x1},${y + 7}`} fill={INK} />
    </>
  );
}

// ------------------------------------------------------------------ diagram garis
// Strict label–value pairs (utils/mtkParse.parseLinePoints) or, failing that, one plain list of numbers labelled by
// position. Two lists (two people, two cities) are not one line, so parseMeanData's guard applies.
function linePoints(text) {
  const pts = parseLinePoints(text);
  if (pts) return pts;
  const d = parseMeanData(text);
  return d.kind === 'lengkap' && d.values.length >= 3 ? d.values.map((value, i) => ({ value, label: `ke-${i + 1}` })) : [];
}

export function DiagramGaris({ motion, question }) {
  const pts = linePoints(question?.question);
  const max = Math.max(...pts.map((p) => p.value));
  const min = Math.min(...pts.map((p) => p.value));
  const span = max - min || 1;
  const lo = Math.max(0, min - span * 0.25);
  const hi = max + span * 0.15;
  const X0 = 60; const X1 = 490; const Y0 = 250; const Y1 = 50;
  const x = (i) => X0 + 20 + (i * (X1 - X0 - 40)) / Math.max(1, pts.length - 1);
  const y = (v) => Y0 - ((v - lo) / (hi - lo)) * (Y0 - Y1);
  const path = pts.map((p, i) => `${i ? 'L' : 'M'}${x(i)},${y(p.value)}`).join(' ');
  const len = pts.length * 120;
  return (
    <>
      <line x1={X0} y1={Y1 - 10} x2={X0} y2={Y0} stroke={MUTE} strokeWidth="2" />
      <line x1={X0} y1={Y0} x2={X1} y2={Y0} stroke={MUTE} strokeWidth="2" />
      {lo > 0 ? label(X0 - 6, Y0 + 4, '≈', MUTE, 12, 'end') : null}
      <path d={path} fill="none" stroke={BLUE} strokeWidth="3.5" strokeLinejoin="round" opacity={motion ? 0.3 : 1} />
      <path d={path} fill="none" stroke={BLUE} strokeWidth="3.5" strokeLinejoin="round" opacity={motion ? 1 : 0}
        strokeDasharray={motion ? len : undefined} strokeDashoffset={motion ? len : undefined}
        style={motion ? { animation: `ix-draw 2.6s ease-out infinite` } : undefined} />
      {pts.map((p, i) => {
        const top = motion && p.value === max; const bot = motion && p.value === min;
        const c = top ? GREEN : bot ? RED : AMBER;
        return (
          <g key={i}>
            <circle cx={x(i)} cy={y(p.value)} r="6" fill={c} stroke="#0f172a" strokeWidth="2" />
            {label(x(i), y(p.value) - 12, fmt(p.value), c, 12)}
            {label(x(i), Y0 + 20, p.label.length > 9 ? `${p.label.slice(0, 8)}…` : p.label, MUTE, 11)}
          </g>
        );
      })}
      {motion ? label(275, 290, 'hijau = tertinggi · merah = terendah', MUTE, 11) : null}
    </>
  );
}
DiagramGaris.usable = (question) => linePoints(question?.question).length >= 3;

// ------------------------------------------------------------------ pertidaksamaan
export function Pertidaksamaan({ motion, question }) {
  const r = parseInequality(question?.question);
  if (!r) return null;
  const { op, bound } = r;
  // A window centred on the boundary would point at the answer in the question phase, so the 11
  // ticks start at a round number (0, 5, 10, …) at least two steps before it.
  const lo = bound >= 0 && bound <= 8 ? 0 : Math.floor((bound - 2) / 5) * 5;
  const ticks = Array.from({ length: 11 }, (_, i) => lo + i);
  const X0 = 50; const step = 42; const Y = 170;
  const tx = (v) => X0 + (v - lo) * step;
  const right = op === '>' || op === '≥';
  const closed = op === '≥' || op === '≤';
  const lhs = `${r.a === 1 ? '' : r.a}x${r.b ? ` ${r.b > 0 ? '+' : '−'} ${Math.abs(r.b)}` : ''}`;
  return (
    <>
      {mono(275, 60, `${lhs} ${op} ${fmt(r.c)}`, INK, 22)}
      {axis(X0 - 20, tx(lo + 10) + 20, Y)}
      {ticks.map((v) => (
        <g key={v}>
          <line x1={tx(v)} y1={Y - 7} x2={tx(v)} y2={Y + 7} stroke={MUTE} strokeWidth="2" />
          {label(tx(v), Y + 26, fmt(v), MUTE, 12)}
        </g>
      ))}
      {motion ? (
        <>
          <line x1={tx(bound)} y1={Y} x2={right ? tx(lo + 10) + 20 : X0 - 20} y2={Y} stroke={GREEN} strokeWidth="7" strokeLinecap="round" opacity="0.85"
            {...anim(motion, 'ix-pulse', { duration: 2.2 })} />
          <circle cx={tx(bound)} cy={Y} r="9" fill={closed ? GREEN : '#0f172a'} stroke={GREEN} strokeWidth="3.5" />
          {mono(275, 100, `x ${op} ${fmt(bound)}`, GREEN, 20)}
          {r.b ? label(275, 228, `${r.b > 0 ? 'kurangi' : 'tambah'} kedua ruas dengan ${Math.abs(r.b)}${r.a !== 1 ? `, lalu bagi ${r.a}` : ''}`, MUTE, 12) : r.a !== 1 ? label(275, 228, `bagi kedua ruas dengan ${r.a}`, MUTE, 12) : null}
        </>
      ) : null}
      {label(275, 262, '● termasuk (≥, ≤)    ○ tidak termasuk (>, <)', MUTE, 12)}
    </>
  );
}
Pertidaksamaan.usable = (question) => !!parseInequality(question?.question);

// ------------------------------------------------------------------ pembulatan
export function Pembulatan({ motion, question }) {
  const r = parseRounding(question?.question);
  if (!r) return null;
  const X0 = 80; const X1 = 470; const Y = 165;
  const x = (v) => X0 + ((v - r.lower) / (r.upper - r.lower)) * (X1 - X0);
  const up = r.result === r.upper;
  return (
    <>
      {mono(275, 52, fmt(r.value), AMBER, 24)}
      {axis(X0 - 20, X1 + 20, Y)}
      {[r.lower, r.mid, r.upper].map((v, i) => (
        <g key={i}>
          <line x1={x(v)} y1={Y - (i === 1 ? 8 : 14)} x2={x(v)} y2={Y + (i === 1 ? 8 : 14)} stroke={i === 1 ? MUTE : INK} strokeWidth={i === 1 ? 2 : 3} strokeDasharray={i === 1 ? '4 3' : undefined} />
          {label(x(v), Y + 34, fmt(v), i === 1 ? MUTE : INK, i === 1 ? 12 : 15)}
        </g>
      ))}
      {label(x(r.mid), Y - 22, 'tengah', MUTE, 11)}
      {motion ? (
        <>
          <circle cx={x(r.value)} cy={Y} r="8" fill={AMBER} stroke="#0f172a" strokeWidth="2" {...anim(motion, 'ix-pulse', { duration: 2 })} />
          <line x1={x(r.value)} y1={Y - 40} x2={x(r.result)} y2={Y - 40} stroke={GREEN} strokeWidth="3" />
          <polygon points={up ? `${x(r.result)},${Y - 40} ${x(r.result) - 10},${Y - 46} ${x(r.result) - 10},${Y - 34}` : `${x(r.result)},${Y - 40} ${x(r.result) + 10},${Y - 46} ${x(r.result) + 10},${Y - 34}`} fill={GREEN} />
          {label(275, 245, `${fmt(r.value)} ${up ? '≥' : '<'} ${fmt(r.mid)} → dibulatkan ${up ? 'ke atas' : 'ke bawah'} = ${fmt(r.result)}`, GREEN, 13)}
        </>
      ) : label(275, 245, 'di tengah atau lebih → ke atas · kurang dari tengah → ke bawah', MUTE, 12)}
    </>
  );
}
Pembulatan.usable = (question) => !!parseRounding(question?.question);

// ------------------------------------------------------------------ persen
export function PersenBagian({ motion, question }) {
  const r = parsePercent(question?.question);
  if (!r) return null;
  const X0 = 50; const W = 450; const Y = 120; const H = 46;
  const frac = Math.min(1, r.p / 100);
  const at = motion || r.kind === 'dari' ? X0 + (W * frac) / 2 : X0 + W / 2;
  return (
    <>
      {label(X0, Y - 16, '100%', MUTE, 12, 'start')}
      {label(X0 + W, Y - 16, `= ${fmt(r.whole)}`, INK, 14, 'end')}
      <rect x={X0} y={Y} width={W} height={H} rx="8" fill="#0f172a" stroke={MUTE} strokeWidth="2" />
      {Array.from({ length: 9 }, (_, i) => (
        <line key={i} x1={X0 + ((i + 1) * W) / 10} y1={Y} x2={X0 + ((i + 1) * W) / 10} y2={Y + H} stroke="#334155" strokeWidth="1.5" />
      ))}
      {/* question phase: "X% dari Y" shows the given X% as a dashed outline; "berapa persen A dari B"
          shows no segment at all, since its length would already read off the answer */}
      {motion || r.kind === 'dari' ? (
        <rect x={X0} y={Y} width={W * frac} height={H} rx="8" fill={BLUE} fillOpacity={motion ? 0.75 : 0}
          stroke={AMBER} strokeWidth="3" strokeDasharray={motion ? undefined : '6 4'} {...anim(motion, 'ix-pulse', { duration: 2.4 })} />
      ) : null}
      {r.kind === 'dari' ? (
        <>
          {label(X0 + (W * frac) / 2, Y + H + 26, `${fmt(r.p)}%`, AMBER, 15)}
          {label(X0 + (W * frac) / 2, Y + H + 48, motion ? `= ${fmt(r.p)}/100 × ${fmt(r.whole)} = ${fmt(r.part)}` : '= ?', motion ? GREEN : AMBER, 14)}
        </>
      ) : (
        <>
          {label(at, Y + H + 26, `${fmt(r.part)} dari ${fmt(r.whole)}`, AMBER, 15)}
          {label(at, Y + H + 48, motion ? `= ${fmt(r.part)}/${fmt(r.whole)} × 100% = ${fmt(r.p)}%` : '= ? %', motion ? GREEN : AMBER, 14)}
        </>
      )}
      {label(275, 270, 'satu kotak = 10%', MUTE, 11)}
    </>
  );
}
PersenBagian.usable = (question) => !!parsePercent(question?.question);

// ------------------------------------------------------------------ langkah hitung
function IntegerJumps({ motion, s }) {
  const lo = Math.min(s.a, s.end, 0) - 1; const hi = Math.max(s.a, s.end, 0) + 1;
  const n = hi - lo;
  const X0 = 40; const X1 = 510; const Y = 190;
  const x = (v) => X0 + ((v - lo) / n) * (X1 - X0);
  const every = n > 24 ? 5 : n > 12 ? 2 : 1;
  const opText = s.op === '+' ? '+' : '−';
  const bText = s.b < 0 ? `(${fmt(s.b)})` : fmt(s.b);
  const forward = s.end > s.a;
  return (
    <>
      {mono(275, 52, `${fmt(s.a)} ${opText} ${bText}`, INK, 24)}
      {axis(X0, X1, Y)}
      {Array.from({ length: n + 1 }, (_, i) => lo + i).map((v) => (
        <g key={v}>
          <line x1={x(v)} y1={Y - 6} x2={x(v)} y2={Y + 6} stroke={v === 0 ? INK : MUTE} strokeWidth={v === 0 ? 3 : 1.5} />
          {v % every === 0 ? label(x(v), Y + 24, fmt(v), v === 0 ? INK : MUTE, 11) : null}
        </g>
      ))}
      <circle cx={x(s.a)} cy={Y} r="8" fill={BLUE} stroke="#0f172a" strokeWidth="2" />
      {label(x(s.a), Y - 16, 'mulai', BLUE, 11)}
      {motion ? (
        <>
          <path d={`M${x(s.a)},${Y - 8} Q${(x(s.a) + x(s.end)) / 2},${Y - 90} ${x(s.end)},${Y - 8}`} fill="none" stroke={AMBER} strokeWidth="3" strokeDasharray="7 5"
            {...anim(motion, 'ix-flow', { duration: 1.6 })} />
          <circle cx={x(s.end)} cy={Y} r="9" fill={GREEN} stroke="#0f172a" strokeWidth="2" />
          {label(x(s.end), Y + 44, `= ${fmt(s.end)}`, GREEN, 15)}
          {label(275, 278, `${forward ? 'maju ke kanan' : 'mundur ke kiri'} ${Math.abs(s.end - s.a)} langkah`, AMBER, 12)}
        </>
      ) : label(275, 278, 'tambah bilangan positif → ke kanan · tambah negatif / kurangi positif → ke kiri', MUTE, 11)}
    </>
  );
}

export function LangkahHitung({ motion, question }) {
  const s = simpleIntegerSum(question?.question);
  if (s) return <IntegerJumps motion={motion} s={s} />;
  const e = parseExpression(question?.question);
  if (!e) return null;
  const size = e.lines[0].length > 30 ? 15 : e.lines[0].length > 20 ? 18 : 22;
  if (!motion) {
    return (
      <>
        {mono(275, 70, e.lines[0], INK, size)}
        {label(275, 128, 'urutan mengerjakan:', MUTE, 12)}
        {label(275, 156, '① ( ) kurung   ② pangkat / akar', PURPLE, 13)}
        {label(275, 182, '③ × dan ÷ dari kiri   ④ + dan − dari kiri', BLUE, 13)}
      </>
    );
  }
  // explanation: every reduction on its own line; long chains keep the first and last lines
  const lines = e.lines.length > 7 ? [...e.lines.slice(0, 3), '…', ...e.lines.slice(-3)] : e.lines;
  const dy = Math.min(36, 240 / lines.length);
  const y0 = 150 - ((lines.length - 1) * dy) / 2;
  return (
    <>
      {lines.map((l, i) => (
        <g key={i} {...anim(motion, 'ix-rise', { duration: 3 + i * 0.25 })}>
          {i ? label(40, y0 + i * dy - 5, '=', MUTE, 15, 'start') : null}
          {mono(285, y0 + i * dy, l, i === lines.length - 1 ? GREEN : i === 0 ? INK : BLUE, Math.min(size, dy * 0.62))}
        </g>
      ))}
    </>
  );
}
LangkahHitung.usable = (question) => !!(simpleIntegerSum(question?.question) || parseExpression(question?.question));

// ------------------------------------------------------------------ konversi satuan
// The ladder of the soal's own unit family, start rung (given) and target rung (asked) marked. The
// question phase shows the walk; the explanation counts the rungs and writes the result.
export function KonversiSatuan({ motion, question }) {
  const r = parseConversion(question?.question);
  if (!r) return null;
  const x0 = 34; const y0 = 60; const w = 64; const h = 28; const dy = 28;
  const down = r.steps > 0;
  const lo = Math.min(r.iFrom, r.iTo); const hi = Math.max(r.iFrom, r.iTo);
  return (
    <>
      {r.rungs.map((u, i) => {
        const x = x0 + i * w; const y = y0 + i * dy;
        const isFrom = i === r.iFrom; const isTo = i === r.iTo;
        const c = isFrom ? AMBER : isTo ? GREEN : MUTE;
        return (
          <g key={u}>
            <rect x={x} y={y} width={w} height={h} rx="5" fill={isFrom || isTo ? '#13213a' : '#0f172a'} stroke={c} strokeWidth={isFrom || isTo ? 3 : 1.5} />
            {label(x + w / 2, y + 19, u, c, 14)}
            {i < r.rungs.length - 1 && i >= lo && i < hi && motion ? (
              <g {...anim(motion, 'ix-pulse', { duration: 1.6 + i * 0.15 })}>
                {label(x + w + 16, y + 22, down ? `×${fmt(r.base)}` : `÷${fmt(r.base)}`, down ? GREEN : BLUE, 11)}
              </g>
            ) : null}
          </g>
        );
      })}
      {label(510, 70, `${fmt(r.value)} ${r.from} = ? ${r.to}`, INK, 15, 'end')}
      {motion ? (
        <>
          {label(510, 100, `${down ? 'turun' : 'naik'} ${Math.abs(r.steps)} anak tangga`, AMBER, 12, 'end')}
          {label(510, 124, `${down ? '×' : '÷'} ${fmt(r.base ** Math.abs(r.steps))}`, down ? GREEN : BLUE, 14, 'end')}
          {label(510, 152, `= ${fmt(r.result)} ${r.to}`, GREEN, 16, 'end')}
        </>
      ) : (
        <>
          {label(510, 100, `turun 1 anak tangga → ×${fmt(r.base)}`, MUTE, 12, 'end')}
          {label(510, 122, `naik 1 anak tangga → ÷${fmt(r.base)}`, MUTE, 12, 'end')}
        </>
      )}
    </>
  );
}
KonversiSatuan.usable = (question) => !!parseConversion(question?.question);

// ------------------------------------------------------------------ faktor, kelipatan, prima
function FaktorPasangan({ motion, n }) {
  const pairs = factorPairs(n);
  const all = [...new Set(pairs.flat())].sort((a, b) => a - b);
  if (!motion) {
    return (
      <>
        {mono(275, 90, `${n} = ? × ?`, INK, 28)}
        {label(275, 150, 'faktor = bilangan yang membagi habis', MUTE, 13)}
        {label(275, 176, 'cari pasangan dua bilangan yang hasil kalinya sama', MUTE, 13)}
      </>
    );
  }
  const rowH = Math.min(38, 200 / pairs.length);
  return (
    <>
      {pairs.map(([a, b], i) => {
        const y = 40 + i * rowH;
        const w = Math.min(260, 12 + b * (260 / Math.max(...pairs.map((p) => p[1]))));
        return (
          <g key={a} {...anim(motion, 'ix-rise', { duration: 3 + i * 0.3 })}>
            {mono(90, y + rowH * 0.6, `${a} × ${b}`, i % 2 ? BLUE : PURPLE, Math.min(17, rowH * 0.55))}
            <rect x={160} y={y + rowH * 0.15} width={w} height={rowH * 0.6} rx="4" fill={i % 2 ? BLUE : PURPLE} fillOpacity="0.35" stroke={i % 2 ? BLUE : PURPLE} strokeWidth="1.5" />
          </g>
        );
      })}
      {label(275, 268, `faktor ${n}: ${all.join(', ')}`, GREEN, 14)}
      {label(275, 290, `banyak faktor = ${all.length}`, AMBER, 12)}
    </>
  );
}

function KelipatanLompat({ motion, n }) {
  const k = 6; const X0 = 40; const X1 = 500; const Y = 180;
  const x = (v) => X0 + (v / (k * n)) * (X1 - X0);
  return (
    <>
      {mono(275, 60, `kelipatan ${n}`, INK, 22)}
      {axis(X0, X1, Y)}
      <line x1={x(0)} y1={Y - 8} x2={x(0)} y2={Y + 8} stroke={INK} strokeWidth="3" />
      {label(x(0), Y + 28, '0', INK, 13)}
      {Array.from({ length: k }, (_, i) => (i + 1) * n).map((v, i) => (
        <g key={v}>
          <line x1={x(v)} y1={Y - 7} x2={x(v)} y2={Y + 7} stroke={MUTE} strokeWidth="2" />
          {motion ? (
            <>
              <path d={`M${x(v - n)},${Y - 6} Q${(x(v - n) + x(v)) / 2},${Y - 54} ${x(v)},${Y - 6}`} fill="none" stroke={AMBER} strokeWidth="2.5" strokeDasharray="6 4"
                {...anim(motion, 'ix-flow', { duration: 1.4 + i * 0.1 })} />
              {label((x(v - n) + x(v)) / 2, Y - 48, `+${n}`, AMBER, 11)}
              {label(x(v), Y + 28, fmt(v), GREEN, 13)}
            </>
          ) : null}
        </g>
      ))}
      {label(275, 268, motion ? `${Array.from({ length: k }, (_, i) => (i + 1) * n).join(', ')}, …` : `lompat ${n}-${n} mulai dari 0`, motion ? GREEN : MUTE, 13)}
    </>
  );
}

function SaringanPrima({ motion, upto }) {
  const cols = 10; const rows = upto / cols;
  const cw = 46; const ch = Math.min(40, 250 / rows);
  const x0 = 275 - (cols * cw) / 2; const y0 = 30;
  return (
    <>
      {Array.from({ length: upto }, (_, i) => i + 1).map((v, i) => {
        const p = isPrime(v);
        const c = !motion ? MUTE : v === 1 ? '#475569' : p ? GREEN : '#334155';
        const x = x0 + (i % cols) * cw; const y = y0 + Math.floor(i / cols) * ch;
        return (
          <g key={v}>
            <rect x={x + 2} y={y + 2} width={cw - 4} height={ch - 4} rx="5" fill={motion && p ? '#0f2a1d' : '#0f172a'} stroke={motion && p ? GREEN : '#1e293b'} strokeWidth={motion && p ? 2 : 1} />
            {label(x + cw / 2, y + ch / 2 + 5, v, c, Math.min(14, ch * 0.42))}
          </g>
        );
      })}
      {motion ? label(275, y0 + rows * ch + 20, 'hijau = prima (tepat 2 faktor) · 1 bukan prima & bukan komposit · sisanya komposit', MUTE, 11) : null}
    </>
  );
}

export function FaktorKelipatan({ motion, question }) {
  const r = parseFactorTask(question?.question);
  if (!r) return null;
  if (r.kind === 'faktor') return <FaktorPasangan motion={motion} n={r.n} />;
  if (r.kind === 'kelipatan') return <KelipatanLompat motion={motion} n={r.n} />;
  return <SaringanPrima motion={motion} upto={r.upto} />;
}
FaktorKelipatan.usable = (question) => !!parseFactorTask(question?.question);
