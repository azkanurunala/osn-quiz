/* ============================================================================
   lib.js — the small engine every scene and the player share.

   Design rule: a scene is a PURE function of a normalised time `t` (0 → 1).
   The player owns the clock, so play / pause / scrub / speed / replay are all
   the same operation — move `t`. No CSS keyframes, so nothing can drift out of
   sync with the caption or the hotspots.
   ========================================================================== */
(function () {
  'use strict';

  const NS = 'http://www.w3.org/2000/svg';

  // --- dom ------------------------------------------------------------------
  function apply(node, attrs, kids) {
    for (const k in attrs || {}) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === 'text') { node.textContent = v; continue; }
      if (k === 'html') { node.innerHTML = v; continue; }
      if (k.startsWith('on') && typeof v === 'function') { node.addEventListener(k.slice(2), v); continue; }
      if (k === 'style' && typeof v === 'object') { Object.assign(node.style, v); continue; }
      if (k === 'dataset') { Object.assign(node.dataset, v); continue; }
      node.setAttribute(k, v);
    }
    for (const kid of [].concat(kids || []).flat(Infinity)) {
      if (kid == null || kid === false) continue;
      node.appendChild(typeof kid === 'string' || typeof kid === 'number' ? document.createTextNode(String(kid)) : kid);
    }
    return node;
  }

  const h = (tag, attrs, ...kids) => apply(document.createElement(tag), attrs, kids);
  const sv = (tag, attrs, ...kids) => apply(document.createElementNS(NS, tag), attrs, kids);
  const t = (x, y, str, attrs) => sv('text', { x, y, text: str, ...attrs });
  const frag = (...kids) => {
    const f = document.createDocumentFragment();
    for (const k of [].concat(kids)) if (k) f.appendChild(k);
    return f;
  };

  // --- math / easing --------------------------------------------------------
  const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
  const lerp = (a, b, k) => a + (b - a) * k;
  const map = (v, a, b, c = 0, d = 1) => lerp(c, d, clamp((v - a) / (b - a || 1)));
  /** local 0→1 progress inside the window [a,b] of the scene timeline */
  const win = (t, a, b) => clamp((t - a) / (b - a || 1));
  /** fade envelope: 0 outside [a,d], 1 inside [b,c] — for highlighting things on cue */
  const env = (t, a, b, c, d) => clamp(win(t, a, b)) * (1 - win(t, c, d));

  const ease = {
    linear: (k) => k,
    in: (k) => k * k,
    out: (k) => 1 - (1 - k) * (1 - k),
    inOut: (k) => (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2),
    outCubic: (k) => 1 - Math.pow(1 - k, 3),
    inOutCubic: (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2),
    back: (k) => 1 + 2.2 * Math.pow(k - 1, 3) + 1.4 * Math.pow(k - 1, 2),
    elastic: (k) => (k === 0 || k === 1 ? k : Math.pow(2, -9 * k) * Math.sin((k * 10 - 0.75) * 2.09) + 1),
    bounce: (k) => {
      const n = 7.5625, d = 2.75;
      if (k < 1 / d) return n * k * k;
      if (k < 2 / d) return n * (k -= 1.5 / d) * k + 0.75;
      if (k < 2.5 / d) return n * (k -= 2.25 / d) * k + 0.9375;
      return n * (k -= 2.625 / d) * k + 0.984375;
    },
  };

  // --- svg geometry helpers -------------------------------------------------
  /** sine polyline as an SVG path string */
  function wavePath(x, y, w, amp, cycles = 2, phase = 0, steps = 64, dy = 0) {
    let d = '';
    for (let i = 0; i <= steps; i++) {
      const k = i / steps;
      const px = x + k * w;
      const py = y + dy + Math.sin(phase + k * cycles * Math.PI * 2) * amp;
      d += (i ? 'L' : 'M') + px.toFixed(2) + ' ' + py.toFixed(2) + ' ';
    }
    return d.trim();
  }
  /** circle-ish polyline path (use for wobbling blobs / orbits) */
  function blobPath(cx, cy, r, wobble, tNow, seed = 0, steps = 48) {
    let d = '';
    for (let i = 0; i <= steps; i++) {
      const a = (i / steps) * Math.PI * 2;
      const k = 1 + wobble * Math.sin(a * 3 + tNow * 6.28 + seed) * 0.5 + wobble * Math.sin(a * 5 - tNow * 4 + seed) * 0.3;
      const px = cx + Math.cos(a) * r * k;
      const py = cy + Math.sin(a) * r * k;
      d += (i ? 'L' : 'M') + px.toFixed(2) + ' ' + py.toFixed(2) + ' ';
    }
    return d.trim() + 'Z';
  }
  /** straight arrow drawn without markers: returns {line, head, ang} */
  function arrow(x1, y1, x2, y2, head = 12, gap = 0) {
    const ang = Math.atan2(y2 - y1, x2 - x1);
    const hx = x2 - Math.cos(ang) * gap;
    const hy = y2 - Math.sin(ang) * gap;
    return {
      line: { x1, y1, x2: hx, y2: hy },
      head: { x: hx, y: hy, ang: (ang * 180) / Math.PI, head },
    };
  }
  const arrowEls = (a, attrs = {}) => [
    sv('line', { ...attrs, x1: a.line.x1, y1: a.line.y1, x2: a.line.x2, y2: a.line.y2, stroke: attrs.stroke || 'currentColor', 'stroke-width': attrs.width || 3, 'stroke-linecap': 'round' }),
    sv('path', {
      ...attrs,
      d: `M ${-a.head.head / 2} ${-a.head.head * 0.62} L ${a.head.head / 2} 0 L ${-a.head.head / 2} ${a.head.head * 0.62} Z`,
      transform: `translate(${a.head.x} ${a.head.y}) rotate(${a.head.ang})`,
      fill: attrs.stroke || 'currentColor',
    }),
  ];
  /** dashed guide line, often used for "sumber gaya" / radius hints */
  const guide = (x1, y1, x2, y2, attrs = {}) =>
    sv('line', { x1, y1, x2, y2, stroke: 'currentColor', 'stroke-width': 2, 'stroke-dasharray': '7 7', opacity: 0.42, ...attrs });

  /** rounded pill label, returns a <g> centred on (x,y) */
  function tag(x, y, label, opts = {}) {
    const size = opts.size || 15;
    const pad = opts.pad || 9;
    const w = label.length * size * 0.56 + pad * 2;
    const hgt = size * 1.85;
    return sv('g', { transform: `translate(${x} ${y})`, class: 'svgtag' }, [
      sv('rect', { x: -w / 2, y: -hgt / 2, width: w, height: hgt, rx: hgt / 2, fill: opts.fill || 'rgba(6,10,20,.72)', stroke: opts.stroke || 'rgba(255,255,255,.22)', 'stroke-width': 1 }),
      t(0, size * 0.36, label, {
        'text-anchor': 'middle',
        fill: opts.color || '#e9eefb',
        'font-size': size,
        'font-weight': 700,
        'font-family': 'IBM Plex Sans, sans-serif',
      }),
    ]);
  }

  /** partial polyline path — for "drawing" an outline as the timeline advances */
  function drawUpTo(points, k) {
    if (!points.length) return '';
    const n = clamp(k) * (points.length - 1);
    const i = Math.floor(n);
    const f = n - i;
    let d = `M ${points[0][0]} ${points[0][1]} `;
    for (let j = 1; j <= i; j++) d += `L ${points[j][0]} ${points[j][1]} `;
    if (i < points.length - 1) d += `L ${lerp(points[i][0], points[i + 1][0], f)} ${lerp(points[i][1], points[i + 1][1], f)} `;
    return d;
  }

  // --- scene registry -------------------------------------------------------
  const SCENES = Object.create(null);
  function register(name, factory) { SCENES[name] = factory; }

  // --- tiny markdown (teori + hotspot text) --------------------------------
  // Deliberately not a full parser: only the constructs the generated content uses.
  const inline = (s) =>
    String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<em>$2</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');

  /** single-line variant for option text, labels, tips — never wraps in <p> */
  const mdInline = (s) => inline(String(s || '').replace(/\n+/g, ' ').trim());

  function md(src) {
    const out = [];
    let openList = null;
    const closeList = () => { if (openList) { out.push(`</${openList}>`); openList = null; } };
    const ci = (s) => inline(s);
    for (const raw of String(src || '').split(/\r?\n/)) {
      const line = raw.trimEnd();
      if (!line.trim()) { closeList(); continue; }
      let m;
      if ((m = line.match(/^(#{2,4})\s+(.*)$/))) { closeList(); out.push(`<h${Math.min(6, m[1].length + 1)}>${ci(m[2])}</h${Math.min(6, m[1].length + 1)}>`); continue; }
      if (/^([-*_])\1{2,}$/.test(line.trim())) { closeList(); out.push('<hr>'); continue; }
      if ((m = line.match(/^\s*[-*]\s+(.*)$/))) { if (openList !== 'ul') { closeList(); openList = 'ul'; out.push('<ul>'); } out.push(`<li>${ci(m[1])}</li>`); continue; }
      if ((m = line.match(/^\s*\d+[.)]\s+(.*)$/))) { if (openList !== 'ol') { closeList(); openList = 'ol'; out.push('<ol>'); } out.push(`<li>${ci(m[1])}</li>`); continue; }
      if ((m = line.match(/^\s*\|(.+)\|\s*$/))) {
        closeList();
        const cells = m[1].split('|').map((c) => c.trim());
        if (cells.every((c) => /^:?-{2,}:?$/.test(c))) continue; // separator row
        out.push(`<tr>${cells.map((c) => `<td>${ci(c)}</td>`).join('')}</tr>`);
        continue;
      }
      closeList();
      out.push(`<p>${ci(line)}</p>`);
    }
    closeList();
    let html = out.join('\n');
    // collapse the loose <tr>s the table branch produced into one table
    html = html.replace(/(<tr>[\s\S]*?<\/tr>\n?)+/g, (block) => `<table><tbody>${block}</tbody></table>`);
    return html;
  }

  // --- misc -----------------------------------------------------------------
  const toast = (() => {
    let node;
    let timer;
    return (msg, ms = 2000) => {
      if (!node) { node = h('div', { class: 'toast' }); document.body.appendChild(node); }
      node.textContent = msg;
      node.classList.add('on');
      clearTimeout(timer);
      timer = setTimeout(() => node.classList.remove('on'), ms);
    };
  })();

  const fmt = (n) => Number(n).toLocaleString('id-ID');

  window.IX = {
    h, sv, t, frag, apply,
    clamp, lerp, map, win, env, ease,
    wavePath, blobPath, arrow, arrowEls, guide, tag, drawUpTo,
    register, SCENES, md, mdInline, toast, fmt,
  };
})();