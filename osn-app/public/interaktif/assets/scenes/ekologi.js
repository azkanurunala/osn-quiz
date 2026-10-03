/* ============================================================================
   scenes/ekologi.js — IPA-01k Rantai Makanan (campur).

   Scenes
     rantai-makanan   producer → primary → secondary → tertiary with energy loss
     jaring-jaring    a food web: drop one node and see what starves
     energi-rantai    energy bars shrinking at every trophic level
   ========================================================================== */
(function () {
  'use strict';
  const { sv, t, clamp, lerp, ease, win, tag } = IX;
  const A = IX.art;
  const C = A.C;
  const W = 960;
  const H = 540;

  /** cartoon organism: a labelled circle with an emoji-free stylised body */
  function creature(x, y, r, color, kind, name) {
    const g = sv('g', { transform: `translate(${x} ${y})` });
    g.append(sv('circle', { r: r + 10, fill: color, opacity: 0.18 }));
    if (kind === 'plant') {
      g.append(A.grass(0, 0, r * 1.8, color), A.grass(0, 0, r * 1.4, color));
      g.append(sv('circle', { r: r * 0.6, cy: -r * 0.2, fill: color, opacity: 0.5 }));
    } else if (kind === 'bug') {
      g.append(sv('ellipse', { rx: r, ry: r * 0.7, fill: color }), sv('circle', { cx: r * 0.8, cy: -r * 0.25, r: r * 0.45, fill: color, opacity: 0.85 }));
      for (let i = 0; i < 3; i++) g.append(sv('line', { x1: -r * 0.3 + i * r * 0.4, y1: r * 0.5, x2: -r * 0.5 + i * r * 0.4, y2: r * 0.9, stroke: color, 'stroke-width': 4, 'stroke-linecap': 'round' }));
    } else if (kind === 'fish') {
      g.append(sv('ellipse', { rx: r, ry: r * 0.55, fill: color }), sv('path', { d: `M ${-r} 0 L ${-r * 1.6} ${-r * 0.5} L ${-r * 1.6} ${r * 0.5} Z`, fill: color, opacity: 0.85 }));
    } else if (kind === 'bird') {
      g.append(sv('ellipse', { rx: r * 0.8, ry: r * 0.6, fill: color }), sv('circle', { cx: r * 0.55, cy: -r * 0.35, r: r * 0.4, fill: color }));
      g.append(sv('path', { d: `M ${-r * 0.8} 0 q ${-r * 0.7} ${-r * 0.6} 0 ${-r * 0.1}`, fill: 'none', stroke: color, 'stroke-width': 5 }));
    } else {
      g.append(sv('circle', { r, fill: color }), sv('circle', { cx: -r * 0.3, cy: -r * 0.2, r: r * 0.14, fill: '#0b1220' }), sv('circle', { cx: r * 0.3, cy: -r * 0.2, r: r * 0.14, fill: '#0b1220' }));
    }
    g.append(t(0, r + 30, name, { 'text-anchor': 'middle', fill: C.text, 'font-size': 15, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif' }));
    return g;
  }

  /* ------------------------------------------------------------------ 1 ----- */
  IX.register('rantai-makanan', () => {
    const y = 300;
    const xs = [130, 380, 630, 850];
    return {
      defs: A.defs(),
      build(root) {
        const head = t(W / 2, 60, 'Rantai makanan: siapa memakan siapa', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 29, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const sub = t(W / 2, 92, 'Panah menunjukkan arah energi: dari yang dimakan ke yang memakan', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 16, 'font-family': 'IBM Plex Sans, sans-serif' });

        const sun = A.sun(70, 96, 34);
        const items = [
          { kind: 'plant', color: '#4ade80', name: 'tumbuhan (produsen)', role: 'Produsen', note: 'Membuat makanan sendiri dengan bantuan cahaya matahari' },
          { kind: 'bug', color: '#fbbf24', name: 'belalang (konsumen 1)', role: 'Konsumen I', note: 'Makan tumbuhan: konsumen tingkat satu, herbivora' },
          { kind: 'bird', color: '#60a5fa', name: 'burung (konsumen 2)', role: 'Konsumen II', note: 'Makan belalang: karnivora' },
          { kind: 'bird', color: '#f472b6', name: 'elang (konsumen 3)', role: 'Konsumen III', note: 'Makan burung: predator puncak' },
        ];
        const nodes = items.map((it, i) => ({ ...it, el: creature(xs[i], y, 40, it.color, it.kind, it.name) }));
        const roles = items.map((it, i) => tag(xs[i], y - 82, it.role, { size: 13, stroke: it.color, color: it.color }));
        const notes = items.map((it, i) => t(xs[i], y + 92, it.role === 'Produsen' ? 'bikin makanan sendiri' : it.role === 'Konsumen I' ? 'pemakan tumbuhan' : 'pemakan daging', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 14, 'font-family': 'IBM Plex Sans, sans-serif' }));

        const arrows = [];
        for (let i = 0; i < 3; i++) {
          const x1 = xs[i] + 52;
          const x2 = xs[i + 1] - 52;
          const p = sv('path', { d: `M ${x1} ${y} L ${x2} ${y}`, stroke: C.yellow, 'stroke-width': 5, 'stroke-linecap': 'round' });
          const head = sv('path', { d: `M ${x2 - 12} ${y - 9} L ${x2} ${y} L ${x2 - 12} ${y + 9} Z`, fill: C.yellow, opacity: 0 });
          arrows.push({ p, head, x1, x2 });
        }

        const energy = [
          t(xs[0], 450, '100% energi', { 'text-anchor': 'middle', fill: C.green, 'font-size': 17, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' }),
          t(xs[1], 450, '±10%', { 'text-anchor': 'middle', fill: C.green, 'font-size': 17, 'font-weight': 700, 'font-family': 'DM Sans, sans-serif' }),
          t(xs[2], 450, '±1%', { 'text-anchor': 'middle', fill: C.green, 'font-size': 17, 'font-weight': 700, 'font-family': 'DM Sans, sans-serif' }),
          t(xs[3], 450, '±0,1%', { 'text-anchor': 'middle', fill: C.red, 'font-size': 17, 'font-weight': 700, 'font-family': 'DM Sans, sans-serif' }),
        ];
        const footer = t(W / 2, 508, 'Energi berkurang terus di setiap tingkat — makanya rantai tidak boleh terlalu panjang', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 16, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H), sun.el, head, sub);
        for (let i = 0; i < nodes.length; i++) root.append(nodes[i].el, roles[i], notes[i]);
        for (const a of arrows) root.append(a.p, a.head);
        for (const e of energy) root.append(e);
        root.append(footer);

        return {
          update(k) {
            sun.set(k);
            arrows.forEach((a, i) => {
              const p = win(k, 0.12 + i * 0.16, 0.32 + i * 0.16);
              a.p.setAttribute('d', `M ${a.x1} ${y} L ${lerp(a.x1, a.x2, ease.out(p))} ${y}`);
              a.head.setAttribute('opacity', p > 0.9 ? 1 : 0);
            });
            nodes.forEach((n, i) => n.el.setAttribute('opacity', win(k, i * 0.1, 0.2 + i * 0.1)));
            energy.forEach((e, i) => e.setAttribute('opacity', win(k, 0.55 + i * 0.06, 0.7 + i * 0.06)));
          },
          anchors: [
            { key: 'produsen', x: xs[0] / W, y: y / H, at: [0.05, 0.3] },
            { key: 'konsumen-1', x: xs[1] / W, y: y / H, at: [0.25, 0.5] },
            { key: 'konsumen-3', x: xs[3] / W, y: y / H, at: [0.5, 0.8] },
            { key: 'energi', x: xs[3] / W, y: 450 / H, at: [0.6, 0.85] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 2 ----- */
  IX.register('jaring-jaring', () => {
    const N = {
      rumput: { x: 120, y: 320, color: '#4ade80', name: 'rumput' },
      daun: { x: 120, y: 150, color: '#34d399', name: 'daun pohon' },
      kelinci: { x: 400, y: 400, color: '#fbbf24', name: 'kelinci' },
      belalang: { x: 360, y: 240, color: '#f59e0b', name: 'belalang' },
      katak: { x: 620, y: 330, color: '#4ade80', name: 'katak' },
      ular: { x: 620, y: 170, color: '#38bdf8', name: 'ular' },
      elang: { x: 840, y: 250, color: '#c084fc', name: 'elang' },
    };
    const EDGES = [
      ['rumput', 'kelinci'], ['daun', 'kelinci'], ['daun', 'belalang'], ['rumput', 'belalang'],
      ['belalang', 'katak'], ['kelinci', 'ular'], ['katak', 'ular'], ['kelinci', 'katak'],
      ['ular', 'elang'], ['katak', 'elang'], ['belalang', 'ular'],
    ];
    return {
      defs: A.defs(),
      build(root) {
        const head = t(W / 2, 58, 'Jaring-jaring makanan: satu organisme hilang, banyak yang ikut kena', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 27, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const sub = t(W / 2, 88, 'Panah selalu menunjuk dari yang dimakan ke yang memakan', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 16, 'font-family': 'IBM Plex Sans, sans-serif' });

        const edges = EDGES.map(([a, b]) => {
          const p1 = N[a];
          const p2 = N[b];
          const path = sv('path', { d: `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`, stroke: 'rgba(253,224,71,.55)', 'stroke-width': 3, opacity: 0 });
          return { a, b, path };
        });
        const nodes = {};
        for (const key in N) {
          const d = N[key];
          const g = sv('g', { transform: `translate(${d.x} ${d.y})` }, [
            sv('circle', { r: 26, fill: d.color, opacity: 0.9 }),
            sv('circle', { r: 26, fill: 'none', stroke: 'rgba(255,255,255,.3)', 'stroke-width': 2 }),
            t(0, 46, d.name, { 'text-anchor': 'middle', fill: C.text, 'font-size': 14, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif' }),
          ]);
          nodes[key] = g;
        }

        const callout = t(W / 2, 500, '', { 'text-anchor': 'middle', fill: C.red, 'font-size': 17, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H), head, sub);
        for (const e of edges) root.append(e.path);
        for (const key in nodes) root.append(nodes[key]);
        root.append(callout);

        let warned = null;
        return {
          update(k) {
            // second half: the rabbit disappears and the effects ripple outward
            const gone = k > 0.5;
            const affect = (key) => gone && (key === 'kelinci' || key === 'ular' || key === 'elang');
            for (const key in nodes) {
              const dead = gone && key === 'kelinci';
              const starve = affect(key) && key !== 'kelinci';
              nodes[key].setAttribute('opacity', dead ? 0.15 : starve ? 0.4 : 1);
              const ring = nodes[key].children[0];
              ring.setAttribute('fill', dead ? '#6b7280' : starve ? '#6b7280' : N[key].color);
            }
            edges.forEach((e) => {
              const touches = e.a === 'kelinci' || e.b === 'kelinci';
              e.path.setAttribute('stroke', gone && touches ? 'rgba(248,113,113,.75)' : 'rgba(253,224,71,.55)');
              e.path.setAttribute('stroke-dasharray', gone && touches ? '7 7' : '');
              e.path.setAttribute('opacity', String(win(k, 0.1, 0.5)));
            });
            const msg = gone ? 'Kelinci hilang, ular dan elang ikut kehilangan makanan' : '';
            if (msg !== warned) {
              warned = msg;
              callout.textContent = msg;
            }
          },
          anchors: [
            { key: 'jaring', x: 360 / W, y: 240 / H, at: [0.1, 0.4] },
            { key: 'hilang', x: 400 / W, y: 400 / H, at: [0.5, 0.7] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 3 ----- */
  IX.register('energi-rantai', () => {
    const rows = [
      { name: 'Matahari', pct: 1, color: '#fbbf24' },
      { name: 'Tumbuhan', pct: 1, color: '#4ade80' },
      { name: 'Belalang', pct: 0.1, color: '#f59e0b' },
      { name: 'Katak', pct: 0.01, color: '#38bdf8' },
      { name: 'Ular', pct: 0.001, color: '#c084fc' },
      { name: 'Elang', pct: 0.0001, color: '#f472b6' },
    ];
    return {
      defs: A.defs(),
      build(root) {
        const head = t(W / 2, 62, 'Energi menyusut di setiap tingkat', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 29, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const sub = t(W / 2, 94, 'Dari semua energi matahari, hanya sekitar seperseribu yang sampai ke elang', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 16, 'font-family': 'IBM Plex Sans, sans-serif' });

        const bars = [];
        const maxW = 620;
        rows.forEach((r, i) => {
          const y = 150 + i * 52;
          const g = sv('g');
          const bar = sv('rect', { x: 250, y: y - 16, width: 0, height: 26, rx: 13, fill: r.color, opacity: 0.9 });
          const ghost = sv('rect', { x: 250, y: y - 16, width: maxW, height: 26, rx: 13, fill: 'rgba(255,255,255,.06)' });
          const name = t(230, y + 4, r.name, { 'text-anchor': 'end', fill: C.text, 'font-size': 16, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif' });
          const val = t(250, y + 4, '', { fill: C.dim, 'font-size': 15, 'font-family': 'IBM Plex Sans, sans-serif' });
          g.append(ghost, bar, name, val);
          bars.push({ bar, val, pct: r.pct });
          root.append(g);
        });

        const note = t(W / 2, 480, 'Sisanya dipakai untuk bernapas, bergerak, dan berpindah tempat', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 16, 'font-family': 'IBM Plex Sans, sans-serif' });
        const warn = t(W / 2, 510, 'Karena itu rantai makanan jarang lebih dari 5 tingkat', { 'text-anchor': 'middle', fill: C.yellow, 'font-size': 16, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H), head, sub, note, warn);

        return {
          update(k) {
            bars.forEach((b, i) => {
              const p = ease.out(win(k, 0.12 + i * 0.11, 0.42 + i * 0.11));
              const shown = i < 2 ? p : Math.max(0.004, b.pct * p);
              b.bar.setAttribute('width', String(maxW * shown));
              if (p > 0.9) b.val.textContent = i < 2 ? (i === 0 ? 'sumber' : '100%') : `${b.pct * 100}%`;
            });
          },
          anchors: [
            { key: 'penurunan', x: 560 / W, y: 300 / H, at: [0.2, 0.5] },
            { key: 'habis', x: 560 / W, y: 410 / H, at: [0.55, 0.85] },
          ],
        };
      },
    };
  });
})();