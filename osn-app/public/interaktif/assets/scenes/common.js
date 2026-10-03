/* ============================================================================
   scenes/common.js — atoms shared by every scene: background, sun, cloud, tree,
   person, lamp, battery, meters. Everything is built once and mutated by t, so
   a scene costs a handful of attribute writes per frame.

   Colour convention across all 201 topics (kept constant so the set reads as
   one system):  var(--accent) = the subject of the scene · #f87171 = beban/gaya
   · #60a5fa = usaha/gaya yang kita beri · #4ade80 = energi · #fbbf24 = panas/ cahaya.
   ========================================================================== */
(function () {
  'use strict';
  const { sv, t, clamp, lerp, ease, win } = IX;

  const C = {
    accent: 'var(--accent)',
    red: '#f87171',
    blue: '#60a5fa',
    green: '#4ade80',
    yellow: '#fbbf24',
    ink: 'rgba(255,255,255,.16)',
    inkSoft: 'rgba(255,255,255,.09)',
    text: '#dbe4f6',
    dim: '#8fa0c0',
  };

  /** defs block: soft glow + drop shadow, referenced by scene elements */
  const defs = (color = 'var(--accent)') => `
    <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="7" result="b" />
      <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <filter id="glowSoft" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="14" />
    </filter>
    <radialGradient id="sunGlow"><stop offset="0%" stop-color="#fde68a" /><stop offset="55%" stop-color="#fbbf24" /><stop offset="100%" stop-color="#f59e0b" /></radialGradient>
    <linearGradient id="waterG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity=".75" /><stop offset="100%" stop-color="#0369a1" stop-opacity=".85" />
    </linearGradient>
    <radialGradient id="ballG"><stop offset="0%" stop-color="#fff8d6" /><stop offset="60%" stop-color="${color}" /><stop offset="100%" stop-color="${color}" stop-opacity="0" /></radialGradient>`;

  /** faint graph-paper backdrop so motion has something to move against */
  function grid(w, hgt, step = 48) {
    const g = sv('g', { opacity: 0.5 });
    for (let x = step; x < w; x += step) g.append(sv('line', { x1: x, y1: 0, x2: x, y2: hgt, stroke: 'rgba(255,255,255,.035)', 'stroke-width': 1 }));
    for (let y = step; y < hgt; y += step) g.append(sv('line', { x1: 0, y1: y, x2: w, y2: y, stroke: 'rgba(255,255,255,.035)', 'stroke-width': 1 }));
    return g;
  }

  const line = (x1, y1, x2, y2, attrs = {}) =>
    sv('line', { x1, y1, x2, y2, stroke: attrs.stroke || C.ink, 'stroke-width': attrs.w || 4, 'stroke-linecap': 'round', ...attrs });

  const dashed = (x1, y1, x2, y2, attrs = {}) =>
    sv('line', { x1, y1, x2, y2, stroke: attrs.stroke || C.dim, 'stroke-width': attrs.w || 2, 'stroke-dasharray': attrs.dash || '8 8', opacity: attrs.opacity ?? 0.55, 'stroke-linecap': 'round' });

  /** pill label */
  function pill(x, y, str, opts = {}) {
    const size = opts.size || 16;
    const padX = opts.padX ?? 12;
    const w = Math.max(size * 1.6, str.length * size * 0.54 + padX * 2);
    const hh = size * 1.9;
    const g = sv('g', { transform: `translate(${x} ${y})` });
    const rect = sv('rect', { x: -w / 2, y: -hh / 2, width: w, height: hh, rx: hh / 2, fill: opts.fill || 'rgba(8,12,24,.8)', stroke: opts.stroke || 'rgba(255,255,255,.18)', 'stroke-width': 1.2 });
    const label = t(0, size * 0.36, str, { 'text-anchor': 'middle', fill: opts.color || C.text, 'font-size': size, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif' });
    g.append(rect, label);
    g._setText = (s) => { label.textContent = s; };
    return g;
  }

  /** value chip that counts between numbers as the scene plays */
  function valueBox(x, y, initial, opts = {}) {
    const g = sv('g', { transform: `translate(${x} ${y})` });
    const rect = sv('rect', { x: -74, y: -24, width: 148, height: 48, rx: 14, fill: opts.fill || 'rgba(8,12,24,.85)', stroke: opts.stroke || 'var(--accent)', 'stroke-width': 1.6 });
    const val = t(0, 9, initial, { 'text-anchor': 'middle', fill: opts.color || '#fff', 'font-size': opts.size || 26, 'font-weight': 700, 'font-family': 'DM Sans, sans-serif' });
    g.append(rect, val);
    g._set = (s) => { val.textContent = s; };
    return g;
  }

  const ground = (y, w = 960, opts = {}) =>
    sv('g', {}, [sv('rect', { x: -20, y, width: w + 40, height: opts.h || 26, fill: 'rgba(255,255,255,.06)' }), sv('rect', { x: -20, y, width: w + 40, height: 4, fill: opts.stroke || 'rgba(255,255,255,.3)' })]);

  /** sun with rotating rays; returns {el, set(p)} */
  function sun(x, y, r = 42) {
    const g = sv('g', { transform: `translate(${x} ${y})` });
    const rays = sv('g');
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * 360;
      rays.append(sv('rect', { x: -2, y: -r - 16, width: 4, height: 11, rx: 2, fill: '#fbbf24', opacity: 0.75, transform: `rotate(${a})` }));
    }
    g.append(
      sv('circle', { r: r * 1.5, fill: '#fbbf24', opacity: 0.1 }),
      rays,
      sv('circle', { r, fill: 'url(#sunGlow)' }),
    );
    return { el: g, set: (p) => { rays.setAttribute('transform', `rotate(${p * 360})`); } };
  }

  function cloud(x, y, s = 1, opts = {}) {
    const puffs = [[-46, 6, 34], [-18, -10, 42], [16, -4, 36], [44, 8, 28], [-2, 16, 38]];
    const g = sv('g', { transform: `translate(${x} ${y}) scale(${s})`, opacity: opts.opacity ?? 1 });
    for (const [cx, cy, r] of puffs) {
      g.append(sv('circle', { cx, cy, r, fill: opts.fill || 'rgba(226,232,240,.92)' }));
    }
    g.append(sv('rect', { x: -58, y: 6, width: 116, height: 32, rx: 16, fill: opts.fill || 'rgba(226,232,240,.92)' }));
    return g;
  }

  function tree(x, y, s = 1, color = '#4ade80') {
    const g = sv('g', { transform: `translate(${x} ${y}) scale(${s})` });
    g.append(
      sv('rect', { x: -8, y: -46, width: 16, height: 46, rx: 6, fill: '#7c5a3a' }),
      sv('circle', { cx: 0, cy: -74, r: 40, fill: color, opacity: 0.85 }),
      sv('circle', { cx: -30, cy: -56, r: 26, fill: color, opacity: 0.7 }),
      sv('circle', { cx: 30, cy: -56, r: 26, fill: color, opacity: 0.7 }),
    );
    return g;
  }

  function grass(x, y, w = 60, color = '#4ade80') {
    const g = sv('g');
    for (let i = 0; i < 7; i++) {
      const gx = x + (i * w) / 7;
      g.append(sv('path', { d: `M ${gx} ${y} q 4 -18 12 -22`, stroke: color, 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round', opacity: 0.85 }));
    }
    return g;
  }

  /** simple child figure, 60 units tall at s=1, feet at (x,y) */
  function person(x, y, s = 1, opts = {}) {
    const g = sv('g', { transform: `translate(${x} ${y}) scale(${s})` });
    const body = opts.color || '#93c5fd';
    g.append(
      sv('circle', { cx: 0, cy: -104, r: 20, fill: '#fde3c4' }),
      sv('path', { d: 'M 0 -104 a 20 20 0 0 1 -4 4', stroke: '#3f2d20', 'stroke-width': 6, fill: 'none', 'stroke-linecap': 'round' }),
      sv('rect', { x: -18, y: -84, width: 36, height: 46, rx: 14, fill: body }),
      sv('rect', { x: -20, y: -40, width: 15, height: 40, rx: 7, fill: '#334155' }),
      sv('rect', { x: 5, y: -40, width: 15, height: 40, rx: 7, fill: '#334155' }),
    );
    return g;
  }

  /** light bulb / lamp — set(p) drives the glow */
  function lamp(x, y, s = 1, color = 'var(--accent)') {
    const g = sv('g', { transform: `translate(${x} ${y}) scale(${s})` });
    const halo = sv('circle', { cy: -26, r: 52, fill: color, opacity: 0 });
    const bulb = sv('circle', { cy: -26, r: 22, fill: color, opacity: 0.28 });
    const cap = sv('path', { d: 'M -11 4 h 22 v 9 h -22 Z', fill: '#94a3b8' });
    g.append(halo, bulb, cap);
    return {
      el: g,
      set(p) {
        halo.setAttribute('opacity', 0.1 + 0.5 * p);
        halo.setAttribute('r', 42 + 26 * p);
        bulb.setAttribute('opacity', 0.25 + 0.75 * p);
      },
    };
  }

  /** battery with terminals; set(p) drives the charge */
  function battery(x, y, s = 1) {
    const g = sv('g', { transform: `translate(${x} ${y}) scale(${s})` });
    g.append(
      sv('rect', { x: -26, y: -46, width: 52, height: 92, rx: 10, fill: 'rgba(15,23,42,.9)', stroke: 'rgba(255,255,255,.3)', 'stroke-width': 3 }),
      sv('rect', { x: -13, y: -58, width: 12, height: 14, rx: 3, fill: '#cbd5e1' }),
      sv('rect', { x: 2, y: -58, width: 12, height: 14, rx: 3, fill: '#cbd5e1' }),
    );
    const fillRect = sv('rect', { x: -18, y: 34, width: 36, height: 0, rx: 4, fill: '#34d399', opacity: 0.9 });
    g.append(fillRect);
    g.append(
      sv('text', { x: 0, y: -30, 'text-anchor': 'middle', fill: '#94a3b8', 'font-size': 17, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif', text: 'B' }),
      sv('text', { x: 0, y: 20, 'text-anchor': 'middle', fill: '#64748b', 'font-size': 13, 'font-family': 'IBM Plex Sans, sans-serif', text: 'volt' }),
    );
    return {
      el: g,
      set(p) {
        const hgt = 68 * clamp(p);
        fillRect.setAttribute('height', String(hgt));
        fillRect.setAttribute('y', String(34 - hgt));
      },
    };
  }

  /** generic meter bar (value 0..1) with label */
  function meter(x, y, w, label, color = '#60a5fa') {
    const g = sv('g', { transform: `translate(${x} ${y})` });
    g.append(
      sv('text', { x: 0, y: -10, fill: C.dim, 'font-size': 14, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif', text: label }),
      sv('rect', { x: 0, y: 0, width: w, height: 12, rx: 6, fill: 'rgba(255,255,255,.1)' }),
    );
    const bar = sv('rect', { x: 0, y: 0, width: 0, height: 12, rx: 6, fill: color });
    g.append(bar);
    const val = sv('text', { x: w + 12, y: 11, fill: C.text, 'font-size': 15, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });
    g.append(val);
    return { el: g, set(p, text) { bar.setAttribute('width', String(w * clamp(p))); if (text != null) val.textContent = text; } };
  }

  /** arrow whose length/opacity is driven by p (0..1) */
  function forceArrow(x1, y1, x2, y2, color, opts = {}) {
    const g = sv('g', { opacity: 0 });
    const ln = sv('line', { x1, y1, x2: x1, y2: y1, stroke: color, 'stroke-width': opts.w || 6, 'stroke-linecap': 'round' });
    const hd = sv('path', { d: 'M -7 -8 L 0 0 L -7 8 Z', fill: color, transform: `translate(${x1} ${y1})` });
    const ang = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
    hd.setAttribute('transform', `translate(${x1} ${y1}) rotate(${ang})`);
    g.append(ln, hd);
    return { el: g, set(p) { g.setAttribute('opacity', p > 0.02 ? 1 : 0); ln.setAttribute('x2', String(lerp(x1, x2, ease.out(p)))); ln.setAttribute('y2', String(lerp(y1, y2, ease.out(p)))); } };
  }

  /** a small round node on a diagram (organism, lamp, gear…) */
  function node(x, y, r, fill, opts = {}) {
    const g = sv('g', { transform: `translate(${x} ${y})` });
    if (opts.label) {
      g.append(
        sv('circle', { r: r + 9, fill: opts.fill2 || 'rgba(255,255,255,.08)' }),
        sv('circle', { r, fill }),
      );
      return g;
    }
    return sv('circle', { cx: x, cy: y, r, fill });
  }

  /** travelling dot along a path (electrons, water drops, energy pulses) */
  function traveler(pathEl, color, r = 6, count = 3) {
    const dots = [];
    const g = sv('g');
    for (let i = 0; i < count; i++) {
      const c = sv('circle', { r, fill: color, filter: 'url(#glow)' });
      dots.push(c);
      g.append(c);
    }
    return {
      el: g,
      set(phase) {
        const len = pathEl.getTotalLength?.() || 0;
        dots.forEach((d, i) => {
          const p = ((phase + i / count) % 1);
          if (!len) return;
          const pt = pathEl.getPointAtLength(len * p);
          d.setAttribute('cx', pt.x);
          d.setAttribute('cy', pt.y);
          d.setAttribute('opacity', p < 0.06 || p > 0.94 ? 0.25 : 1);
        });
      },
    };
  }

  IX.art = { C, defs, grid, line, dashed, pill, valueBox, ground, sun, cloud, tree, grass, person, lamp, battery, meter, forceArrow, node, traveler, sv, t, clamp, lerp, ease, win };
})();