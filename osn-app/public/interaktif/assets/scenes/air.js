/* ============================================================================
   scenes/air.js — IPA-05j Siklus Air (campur).

   Scenes
     siklus-air-putaran    the whole cycle in one loop: evaporate → condense →
                           precipitate → infiltrate → flow back
     air-evaporasi         liquid → vapour, with the boiling-point idea
     air-kondensasi        vapour → droplets → clouds → rain
   ========================================================================== */
(function () {
  'use strict';
  const { sv, t, clamp, lerp, ease, win, env, tag } = IX;
  const A = IX.art;
  const C = A.C;
  const W = 960;
  const H = 540;

  // wraps a looping phase so the first frame never renders "before" the start
  const loop = (v) => ((v % 1) + 1) % 1;

  /* ------------------------------------------------------------------ 1 ----- */
  IX.register('siklus-air-putaran', () => {
    const seaY = 420;
    return {
      defs: A.defs(),
      build(root) {
        const sun = A.sun(96, 96, 36);
        const c1 = A.cloud(760, 140, 1);
        const c2 = A.cloud(250, 130, 0.7, { opacity: 0.8 });
        const sea = sv('path', { d: `M 0 ${seaY} Q 160 ${seaY - 22} 320 ${seaY} T 640 ${seaY} T 960 ${seaY} L 960 ${H} L 0 ${H} Z`, fill: 'url(#waterG)' });
        const surface = sv('path', { d: `M 0 ${seaY} Q 160 ${seaY - 22} 320 ${seaY} T 640 ${seaY} T 960 ${seaY}`, fill: 'none', stroke: '#7dd3fc', 'stroke-width': 3 });
        const hill = sv('path', { d: `M 520 ${seaY} L 640 300 L 760 ${seaY} Z`, fill: 'rgba(255,255,255,.08)', stroke: 'rgba(255,255,255,.25)', 'stroke-width': 2, 'stroke-linejoin': 'round' });
        const mt = A.tree(860, seaY, 0.8);

        // evaporation droplets
        const drops = [];
        for (let i = 0; i < 10; i++) {
          const d = sv('path', { d: 'M 0 0 q -6 9 0 14 q 6 -5 0 -14 Z', fill: '#7dd3fc', opacity: 0.9 });
          drops.push({ el: d, x: 120 + (i % 5) * 62, delay: i * 0.08 });
        }
        // rain
        const rain = [];
        for (let i = 0; i < 12; i++) {
          const r = sv('line', { x1: 0, y1: 0, x2: -4, y2: 14, stroke: '#93c5fd', 'stroke-width': 3, 'stroke-linecap': 'round', opacity: 0.85 });
          rain.push({ el: r, x: 690 + (i % 6) * 26, delay: (i % 6) * 0.05 });
        }
        // river back to the sea
        const river = sv('path', { d: 'M 760 300 Q 720 380 760 ' + seaY, fill: 'none', stroke: '#38bdf8', 'stroke-width': 6, 'stroke-linecap': 'round', opacity: 0 });

        const head = t(W / 2, 56, 'Siklus air: air tidak pernah hilang, hanya berubah bentuk', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 27, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });

        const steps = [
          { key: 'evaporasi', x: 210, y: 300, label: 'Evaporasi', note: 'air jadi uap naik ke langit' },
          { key: 'kondensasi', x: 760, y: 200, label: 'Kondensasi', note: 'uap dingin jadi titik air di awan' },
          { key: 'presipitasi', x: 760, y: 330, label: 'Presipitasi', note: 'titik air makin besar lalu jatuh' },
          { key: 'runoff', x: 500, y: 480, label: 'Aliran kembali', note: 'sungai dan tanah mengirim air ke laut' },
        ];
        const labels = steps.map((s) => sv('g', { opacity: 0 }, [tag(s.x, s.y, s.label, { size: 16, stroke: 'var(--accent)', color: '#fff' }), t(s.x, s.y + 26, s.note, { 'text-anchor': 'middle', fill: C.dim, 'font-size': 14, 'font-family': 'IBM Plex Sans, sans-serif' })]));
        const active = t(W / 2, 508, '', { 'text-anchor': 'middle', fill: 'var(--accent)', 'font-size': 17, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H), sun.el, hill, sea, surface, mt, c1, c2, river);
        for (const d of drops) root.append(d.el);
        for (const r of rain) root.append(r.el);
        root.append(head);
        for (const l of labels) root.append(l);
        root.append(active);

        const msgs = ['', 'Air menguap jadi uap lalu naik', 'Uap mendingin jadi awan', 'Awan melepaskan hujan', 'Air mengalir kembali ke laut'];
        return {
          update(k) {
            sun.set(k * 1.5);
            const ph = [0.2, 0.45, 0.7, 0.95];
            drops.forEach((d, i) => {
              const p = loop(k * 1.8 - d.delay);
              d.el.setAttribute('transform', `translate(${d.x} ${seaY - 20 - p * 230}) scale(${0.5 + p * 0.6})`);
              d.el.setAttribute('opacity', String(0.85 * (p < 0.85 ? 1 : (1 - p) / 0.15)));
            });
            rain.forEach((r, i) => {
              const activeRain = k > 0.45 && k < 0.8;
              const p = loop(k * 2.4 - r.delay);
              r.el.setAttribute('transform', `translate(${r.x} ${210 + p * 150})`);
              r.el.setAttribute('opacity', activeRain ? 0.85 : 0);
            });
            river.setAttribute('opacity', String(win(k, 0.7, 0.85) * 0.9));
            c1.setAttribute('transform', `translate(${760 + 8 * Math.sin(k * 8)} 140) scale(${1 + 0.04 * win(k, 0.3, 0.5)})`);
            labels.forEach((l, i) => l.setAttribute('opacity', String(env(k, ph[i] - 0.16, ph[i] - 0.04, ph[i] + 0.1, ph[i] + 0.22))));
            let msg = '';
            for (let i = 0; i < ph.length; i++) if (k >= ph[i]) msg = msgs[i + 1];
            if (active.textContent !== msg) active.textContent = msg;
          },
          anchors: [
            { key: 'evaporasi', x: 210 / W, y: 300 / H, at: [0.15, 0.35] },
            { key: 'kondensasi', x: 760 / W, y: 190 / H, at: [0.4, 0.55] },
            { key: 'presipitasi', x: 760 / W, y: 320 / H, at: [0.6, 0.75] },
            { key: 'aliran', x: 500 / W, y: 470 / H, at: [0.78, 0.95] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 2 ----- */
  IX.register('air-evaporasi', () => {
    const surfaceY = 360;
    return {
      defs: A.defs(),
      build(root) {
        const sun = A.sun(120, 100, 38);
        const pot = sv('g');
        pot.append(
          sv('path', { d: 'M 300 300 L 340 460 L 620 460 L 660 300 Z', fill: 'rgba(148,163,184,.28)', stroke: 'rgba(255,255,255,.35)', 'stroke-width': 3, 'stroke-linejoin': 'round' }),
          sv('rect', { x: 286, y: 286, width: 388, height: 18, rx: 9, fill: 'rgba(203,213,225,.4)' }),
        );
        const water = sv('rect', { x: 318, y: surfaceY, width: 324, height: 100, rx: 6, fill: '#38bdf8', opacity: 0.55 });
        const top = sv('line', { x1: 318, y1: surfaceY, x2: 642, y2: surfaceY, stroke: '#bae6fd', 'stroke-width': 3 });
        const bubbles = [];
        for (let i = 0; i < 7; i++) {
          const b = sv('circle', { r: 4 + (i % 3) * 2, fill: '#bae6fd', opacity: 0.8 });
          bubbles.push({ el: b, x: 340 + i * 44, delay: i * 0.07 });
        }
        const steam = [];
        for (let i = 0; i < 12; i++) {
          const d = sv('circle', { r: 5 + (i % 3) * 3, fill: '#e0f2fe', opacity: 0.7 });
          steam.push({ el: d, x: 330 + (i % 6) * 58, delay: (i % 6) * 0.06 + Math.floor(i / 6) * 0.05 });
        }
        const head = t(W / 2, 60, 'Evaporasi: air cair berubah jadi uap', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 28, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const sub = t(W / 2, 94, 'Cepatnya dipengaruhi oleh suhu, luas permukaan, dan angin', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 16, 'font-family': 'IBM Plex Sans, sans-serif' });
        const mT = A.meter(140, 490, 180, 'Suhu', C.red);
        const mA = A.meter(520, 490, 180, 'Luas permukaan', C.blue);
        const mV = A.meter(140, 528, 180, 'Kelembapan + angin', C.green);

        root.append(A.grid(W, H), sun.el, pot, water, top);
        for (const b of bubbles) root.append(b.el);
        for (const d of steam) root.append(d.el);
        root.append(head, sub, mT, mA, mV);

        return {
          update(k) {
            sun.set(k * 2);
            bubbles.forEach((b, i) => {
              const p = loop(k * 2.2 - b.delay);
              b.el.setAttribute('cx', String(b.x + 6 * Math.sin(p * 6)));
              b.el.setAttribute('cy', String(452 - p * (452 - surfaceY - 10)));
              b.el.setAttribute('opacity', String(0.8 * (p < 0.9 ? 1 : (1 - p) / 0.1)));
            });
            steam.forEach((d, i) => {
              const p = loop(k * 1.5 - d.delay);
              d.el.setAttribute('cx', String(d.x + 22 * Math.sin(p * 7 + i)));
              d.el.setAttribute('cy', String(surfaceY - 20 - p * 200));
              d.el.setAttribute('opacity', String(0.75 * (1 - p) * (1 - p)));
            });
            mT.set(win(k, 0.1, 0.5), 'panas');
            mA.set(win(k, 0.25, 0.65), 'lebar');
            mV.set(win(k, 0.4, 0.8), 'angin');
          },
          anchors: [
            { key: 'cairan', x: 480 / W, y: (surfaceY + 40) / H, at: [0.05, 0.3] },
            { key: 'uap', x: 480 / W, y: 200 / H, at: [0.25, 0.5] },
            { key: 'faktor', x: 520 / W, y: 490 / H, at: [0.5, 0.85] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 3 ----- */
  IX.register('air-kondensasi', () => {
    return {
      defs: A.defs(),
      build(root) {
        const head = t(W / 2, 58, 'Kondensasi: uap kembali menjadi air', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 28, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const sub = t(W / 2, 92, 'Di ketinggian yang lebih dingin, uap berubah jadi butiran air', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 16, 'font-family': 'IBM Plex Sans, sans-serif' });

        const steam = [];
        for (let i = 0; i < 14; i++) {
          const d = sv('circle', { r: 6, fill: '#e0f2fe', opacity: 0.6 });
          steam.push({ el: d, x: 140 + (i % 7) * 60, y: 400 - Math.floor(i / 7) * 40, delay: i * 0.05 });
        }
        const c1 = A.cloud(300, 190, 1.35);
        const c2 = A.cloud(660, 160, 1, { opacity: 0.9 });
        const drops = [];
        for (let i = 0; i < 6; i++) {
          const d = sv('path', { d: 'M 0 0 q -7 10 0 16 q 7 -6 0 -16 Z', fill: '#7dd3fc', opacity: 0 });
          drops.push({ el: d, x: 600 + (i % 3) * 60, delay: i * 0.08 });
        }
        const notes = [
          t(300, 300, 'butiran air makin besar', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 14, 'font-family': 'IBM Plex Sans, sans-serif' }),
          t(660, 260, 'cukup berat untuk jatuh', { 'text-anchor': 'middle', fill: C.yellow, 'font-size': 14, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif' }),
        ];
        const note = t(W / 2, 480, 'Kalau uap naik ke tempat yang lebih dingin, terbentuklah embun', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 16, 'font-family': 'IBM Plex Sans, sans-serif' });
        const note2 = t(W / 2, 510, 'Presipitasi = air yang jatuh dari awan (hujan, salju, atau es)', { 'text-anchor': 'middle', fill: C.green, 'font-size': 16, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H));
        for (const d of steam) root.append(d.el);
        root.append(c1, c2);
        for (const d of drops) root.append(d.el);
        root.append(head, sub, ...notes, note, note2);

        return {
          update(k) {
            steam.forEach((d, i) => {
              const p = loop(k * 1.6 - d.delay);
              d.el.setAttribute('cx', String(d.x + 14 * Math.sin(p * 6 + i)));
              d.el.setAttribute('cy', String(d.y - p * 130));
              d.el.setAttribute('opacity', String(0.6 * (1 - p)));
            });
            drops.forEach((d, i) => {
              const on = win(k, 0.4, 0.5);
              const p = loop(k * 1.6 - d.delay);
              d.el.setAttribute('transform', `translate(${d.x} ${160 + p * 260}) scale(${0.6 + p * 0.5})`);
              d.el.setAttribute('opacity', String(on * (p < 0.9 ? 0.9 : (1 - p) / 0.1)));
            });
            c1.setAttribute('transform', `translate(300 ${190 - 8 * win(k, 0.1, 0.4)}) scale(1.35)`);
            notes.forEach((n, i) => n.setAttribute('opacity', String(env(k, 0.15 + i * 0.2, 0.3 + i * 0.2, 0.55 + i * 0.2, 0.7 + i * 0.2))));
          },
          anchors: [
            { key: 'dingin', x: 300 / W, y: 170 / H, at: [0.1, 0.3] },
            { key: 'hujan', x: 660 / W, y: 300 / H, at: [0.45, 0.7] },
          ],
        };
      },
    };
  });
})();