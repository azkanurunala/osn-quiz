import { anim } from '../anim';
import { matchObjekFoto } from '../objekFoto';

// A reviewed object picture (see scripts/build-objek-foto.mjs). Still in the question phase; a
// slow zoom in the explanation phase so the student sees it is the same picture, now "alive".
// On a cut-open picture, the explanation phase also names the parts the soal is about (never in the
// question phase: a name next to a part can give the answer away).
export function ObjekFoto({ motion, question, width = 520, height = 300 }) {
  const m = matchObjekFoto(question);
  if (!m) return null;
  const href = `${import.meta.env?.BASE_URL ?? '/'}${m.objek.file}`;
  const bg = m.objek.dark ? '#000000' : '#ffffff';
  if (motion && m.objek.parts?.length) {
    return <LabeledPicture href={href} bg={bg} objek={m.objek} motion={motion} width={width} height={height} />;
  }
  return (
    <>
      <rect x="0" y="0" width={width} height={height} fill={bg} />
      <g {...anim(motion, 'ix-zoom', { duration: 6, origin: `${width / 2}px ${height / 2}px` })}>
        <image href={href} x="8" y="8" width={width - 16} height={height - 16} preserveAspectRatio="xMidYMid meet" />
      </g>
    </>
  );
}

const RED = '#E53935';
const FONT = 13;
const LINE = 15;
const MAX_CHARS = 15;

// "kalaza (tali kuning telur)" -> ["kalaza", "(tali kuning", "telur)"]: word wrap for a side column.
function wrap(text) {
  const lines = [];
  for (const word of text.split(' ')) {
    const last = lines[lines.length - 1];
    if (last && `${last} ${word}`.length <= MAX_CHARS) lines[lines.length - 1] = `${last} ${word}`;
    else lines.push(word);
  }
  return lines;
}

// The picture stays still (no zoom) so the pointers stay on their parts; each named part gets a
// ring, a leader line and its name in a white box in the free column beside the picture.
function LabeledPicture({ href, bg, objek, motion, width, height }) {
  const boxW = width - 16;
  const boxH = height - 16;
  const imgW = Math.min(boxW, boxH * objek.ar);
  const imgH = imgW / objek.ar;
  const imgX = 8 + (boxW - imgW) / 2;
  const imgY = 8 + (boxH - imgH) / 2;
  const pts = objek.parts.map((p) => ({ ...p, px: imgX + p.x * imgW, py: imgY + p.y * imgH, lines: wrap(p.t) }));

  // left-half parts label on the left, right-half on the right; spread vertically so boxes never overlap
  const place = (side) => {
    const col = pts.filter((p) => (side === 'left') === (p.x < 0.5)).sort((a, b) => a.py - b.py);
    let next = 10;
    for (const p of col) {
      const h = p.lines.length * LINE + 8;
      p.by = Math.min(Math.max(p.py - h / 2, next), height - h - 6);
      p.bh = h;
      next = p.by + h + 8;
      p.side = side;
    }
    return col;
  };
  const placed = [...place('left'), ...place('right')];
  const colW = Math.max(imgX - 14, 70);

  return (
    <>
      <rect x="0" y="0" width={width} height={height} fill={bg} />
      <image href={href} x={imgX} y={imgY} width={imgW} height={imgH} preserveAspectRatio="xMidYMid meet" />
      {placed.map((p) => {
        const bw = Math.min(colW, Math.max(...p.lines.map((l) => l.length)) * FONT * 0.56 + 14);
        const bx = p.side === 'left' ? Math.max(6, imgX - 8 - bw) : Math.min(width - 6 - bw, imgX + imgW + 8);
        const lx = p.side === 'left' ? bx + bw : bx;
        const ly = p.by + p.bh / 2;
        return (
          <g key={p.t}>
            <line x1={p.px} y1={p.py} x2={lx} y2={ly} stroke={RED} strokeWidth="2" />
            <circle cx={p.px} cy={p.py} r="7" fill="none" stroke={RED} strokeWidth="2.5"
              {...anim(motion, 'ix-pulse', { duration: 1.6 })} />
            <circle cx={p.px} cy={p.py} r="2.5" fill={RED} />
            <rect x={bx} y={p.by} width={bw} height={p.bh} rx="6" fill="#ffffff" stroke={RED} strokeWidth="1.5" />
            <text x={bx + bw / 2} y={p.by + 4 + LINE - 3} textAnchor="middle" fontSize={FONT} fontWeight="700" fill="#1f2937">
              {p.lines.map((l, i) => <tspan key={i} x={bx + bw / 2} dy={i ? LINE : 0}>{l}</tspan>)}
            </text>
          </g>
        );
      })}
    </>
  );
}
