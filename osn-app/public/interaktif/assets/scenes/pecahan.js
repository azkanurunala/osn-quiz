/* ============================================================================
   scenes/pecahan.js — MTK-02a Pecahan Senilai (campur).

   Scenes
     pecahan-model-batang  fraction bars: 1/2 and 2/4 fill the same amount
     pecahan-sederhana     cancelling a common factor to reach simplest form
     pecahan-bandingkan    3/4 vs 5/6 on a number line and as bars
     pecahan-sama-denom    same denominator = compare the numerators
   ========================================================================== */
(function () {
  'use strict';
  const { sv, t, clamp, lerp, ease, win, tag } = IX;
  const A = IX.art;
  const C = A.C;
  const W = 960;
  const H = 540;

  /** one fraction bar: n parts, k shaded; set(shade) redraws the fill */
  function bar(x, y, w, parts, label, color) {
    const g = sv('g', { transform: `translate(${x} ${y})` });
    const hgt = 54;
    const gap = 6;
    const each = (w - gap * (parts - 1)) / parts;
    const cells = [];
    for (let i = 0; i < parts; i++) {
      const cx = i * (each + gap);
      const box = sv('rect', { x: cx, y: 0, width: each, height: hgt, rx: 8, fill: 'rgba(255,255,255,.07)', stroke: 'rgba(255,255,255,.28)', 'stroke-width': 2 });
      const fill = sv('rect', { x: cx, y: 0, width: 0, height: hgt, rx: 8, fill: color, opacity: 0.9 });
      cells.push({ box, fill, cx, each });
      g.append(box, fill);
    }
    g.append(t(w / 2, hgt + 30, label, { 'text-anchor': 'middle', fill: C.text, 'font-size': 19, 'font-weight': 700, 'font-family': 'DM Sans, sans-serif' }));
    return {
      el: g,
      set(shade) {
        for (let i = 0; i < parts; i++) {
          const c = cells[i];
          const on = clamp(shade * parts - i);
          c.fill.setAttribute('width', String(c.each * on));
        }
      },
    };
  }

  /* ------------------------------------------------------------------ 1 ----- */
  IX.register('pecahan-model-batang', () => {
    return {
      defs: A.defs(),
      build(root) {
        const head = t(W / 2, 66, 'Pecahan bernilai sama: 1/2 = 2/4', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 31, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const sub = t(W / 2, 100, 'Koma lebih banyak, tapi bagian yang diwarnain sama banyak', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 17, 'font-family': 'IBM Plex Sans, sans-serif' });

        const b1 = bar(150, 180, 660, 2, '1/2', 'var(--accent)');
        const b2 = bar(150, 320, 660, 4, '2/4', '#38bdf8');
        const eq = t(W / 2, 455, '=', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 46, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const note = t(W / 2, 505, 'Jadi 1/2 = 2/4 = 3/6 — semuanya sama', { 'text-anchor': 'middle', fill: C.green, 'font-size': 18, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H), head, sub, b1.el, b2.el, eq, note);

        return {
          update(k) {
            b1.set(win(k, 0.1, 0.45));
            b2.set(win(k, 0.3, 0.7));
            eq.setAttribute('opacity', String(win(k, 0.6, 0.8)));
            note.setAttribute('opacity', String(win(k, 0.75, 0.95)));
          },
          anchors: [
            { key: 'per-satuan', x: 150 / W, y: 200 / H, at: [0.1, 0.3] },
            { key: 'pecahan', x: 150 / W, y: 340 / H, at: [0.3, 0.55] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 2 ----- */
  IX.register('pecahan-sederhana', () => {
    const before = { n: 12, d: 18, label: '12/18' };
    const after = { n: 2, d: 3, label: '2/3' };
    const fpb = 6;
    return {
      defs: A.defs(),
      build(root) {
        const head = t(W / 2, 64, 'Menyederhanakan: bagi pembilang dan penyebut dengan FPB yang sama', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 27, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });

        const g = sv('g', { transform: 'translate(300 250)' });
        const numT = t(0, 0, String(before.n), { 'text-anchor': 'middle', fill: '#fff', 'font-size': 86, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const barLine = sv('line', { x1: -70, y1: 26, x2: 70, y2: 26, stroke: C.text, 'stroke-width': 7, 'stroke-linecap': 'round' });
        const denT = t(0, 108, String(before.d), { 'text-anchor': 'middle', fill: '#fff', 'font-size': 86, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const slash1 = sv('line', { x1: -100, y1: -70, x2: -60, y2: 130, stroke: C.red, 'stroke-width': 8, 'stroke-linecap': 'round', opacity: 0 });
        const slash2 = sv('line', { x1: 60, y1: -70, x2: 100, y2: 130, stroke: C.red, 'stroke-width': 8, 'stroke-linecap': 'round', opacity: 0 });
        g.append(numT, barLine, denT, slash1, slash2);

        const toDiv = sv('g', { transform: 'translate(480 250)', opacity: 0 }, [
          sv('text', { x: 0, y: 14, 'text-anchor': 'middle', fill: C.yellow, 'font-size': 40, 'font-weight': 700, 'font-family': 'DM Sans, sans-serif', text: `: ${fpb}` }),
        ]);
        const res = sv('g', { transform: 'translate(680 250)', opacity: 0 }, [
          t(0, 0, String(after.n), { 'text-anchor': 'middle', fill: C.green, 'font-size': 86, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' }),
          sv('line', { x1: -70, y1: 26, x2: 70, y2: 26, stroke: C.green, 'stroke-width': 7, 'stroke-linecap': 'round' }),
          t(0, 108, String(after.d), { 'text-anchor': 'middle', fill: C.green, 'font-size': 86, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' }),
        ]);

        const step1 = t(480, 150, 'FPB dari 12 dan 18 adalah 6', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 17, 'font-family': 'IBM Plex Sans, sans-serif' });
        const step2 = t(480, 400, '12 : 6 = 2   dan   18 : 6 = 3', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 17, 'font-family': 'IBM Plex Sans, sans-serif' });
        const verdict = t(W / 2, 470, '12/18 = 2/3 (sudah paling sederhana)', { 'text-anchor': 'middle', fill: C.green, 'font-size': 22, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const check = t(W / 2, 512, 'Sederhana berarti tidak bisa dibagi lagi dengan bilangan bulat selain 1', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 15, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H), head, g, toDiv, res, step1, step2, verdict, check);

        return {
          update(k) {
            const p1 = win(k, 0.15, 0.35);
            slash1.setAttribute('opacity', String(p1));
            slash2.setAttribute('opacity', String(p1));
            step1.setAttribute('opacity', String(win(k, 0.2, 0.4)));
            toDiv.setAttribute('opacity', String(win(k, 0.4, 0.55)));
            const p2 = win(k, 0.55, 0.8);
            numT.textContent = String(lerp(before.n, after.n, ease.inOut(p2)));
            denT.textContent = String(lerp(before.d, after.d, ease.inOut(p2)));
            step2.setAttribute('opacity', String(p2));
            res.setAttribute('opacity', String(win(k, 0.7, 0.9)));
            verdict.setAttribute('opacity', String(win(k, 0.8, 1)));
          },
          anchors: [
            { key: 'fpb', x: 300 / W, y: 250 / H, at: [0.1, 0.3] },
            { key: 'hasil', x: 680 / W, y: 250 / H, at: [0.65, 0.9] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 3 ----- */
  IX.register('pecahan-bandingkan', () => {
    const lineY = 430;
    const x0 = 140;
    const x1 = 820;
    return {
      defs: A.defs(),
      build(root) {
        const head = t(W / 2, 62, 'Membandingkan: 3/4 atau 5/6, mana yang lebih besar?', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 28, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });

        const b1 = bar(140, 150, 340, 4, '3/4', 'var(--accent)');
        const b2 = bar(520, 150, 340, 6, '5/6', '#38bdf8');

        const axis = sv('line', { x1: x0, y1: lineY, x2: x1, y2: lineY, stroke: 'rgba(255,255,255,.4)', 'stroke-width': 4, 'stroke-linecap': 'round' });
        const ticks = [];
        for (let i = 0; i <= 6; i++) {
          const x = lerp(x0, x1, i / 6);
          ticks.push(sv('line', { x1: x, y1: lineY - 8, x2: x, y2: lineY + 8, stroke: 'rgba(255,255,255,.35)', 'stroke-width': 3 }));
          ticks.push(t(x, lineY + 30, `${i}/6`, { 'text-anchor': 'middle', fill: C.dim, 'font-size': 14, 'font-family': 'IBM Plex Sans, sans-serif' }));
        }
        const p1 = sv('circle', { cx: x0, cy: lineY, r: 11, fill: 'var(--accent)', opacity: 0 });
        const p2 = sv('circle', { cx: x0, cy: lineY, r: 11, fill: '#38bdf8', opacity: 0 });
        const l1 = tag(lerp(x0, x1, 0.75), lineY - 56, '3/4', { size: 16, stroke: 'var(--accent)', color: 'var(--accent)' });
        const l2 = tag(lerp(x0, x1, 5 / 6), lineY - 92, '5/6', { size: 16, stroke: '#38bdf8', color: '#38bdf8' });
        const verdict = t(W / 2, 508, '3/4 = 6/8,  dan  5/6 = 10/12  →  5/6 lebih besar', { 'text-anchor': 'middle', fill: C.green, 'font-size': 19, 'font-weight': 700, 'font-family': 'DM Sans, sans-serif' });

        root.append(A.grid(W, H), head, b1.el, b2.el, axis, ...ticks, p1, p2, l1, l2, verdict);

        return {
          update(k) {
            b1.set(win(k, 0.08, 0.4));
            b2.set(win(k, 0.2, 0.55));
            const a = win(k, 0.4, 0.65);
            const c = win(k, 0.55, 0.8);
            p1.setAttribute('cx', String(lerp(x0, lerp(x0, x1, 0.75), ease.out(a))));
            p1.setAttribute('opacity', String(a));
            p2.setAttribute('cx', String(lerp(x0, lerp(x0, x1, 5 / 6), ease.out(c))));
            p2.setAttribute('opacity', String(c));
            l1.setAttribute('opacity', String(a));
            l2.setAttribute('opacity', String(c));
            verdict.setAttribute('opacity', String(win(k, 0.8, 1)));
          },
          anchors: [
            { key: 'garis', x: x0 / W, y: lineY / H, at: [0.35, 0.6] },
            { key: 'besar', x: lerp(x0, x1, 5 / 6) / W, y: lineY / H, at: [0.7, 0.95] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 4 ----- */
  IX.register('pecahan-sama-denom', () => {
    return {
      defs: A.defs(),
      build(root) {
        const head = t(W / 2, 74, 'Penyebut sama: cukup bandingkan pembilang', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 29, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });

        const rows = [
          { f: '2/5', n: 2, ok: true },
          { f: '4/5', n: 4, ok: true },
          { f: '7/5', n: 7, ok: false },
        ];
        const items = [];
        rows.forEach((r, i) => {
          const y = 190 + i * 96;
          const g = sv('g');
          const fill = sv('rect', { x: 220, y: y - 26, width: 520, height: 52, rx: 26, fill: 'rgba(255,255,255,.06)' });
          const bar = sv('rect', { x: 220, y: y - 26, width: 0, height: 52, rx: 26, fill: r.ok ? 'var(--accent)' : C.red, opacity: 0.85 });
          const lab = t(200, y + 8, r.f, { 'text-anchor': 'end', fill: '#fff', 'font-size': 28, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
          const note = t(770, y + 6, r.ok ? (r.f === '4/5' ? 'paling besar' : 'ada sisa') : 'lebih dari 1 = pecahan campuran', { fill: r.ok ? C.dim : C.red, 'font-size': 14, 'font-family': 'IBM Plex Sans, sans-serif' });
          g.append(fill, bar, lab, note);
          items.push({ bar, n: r.n, y });
          root.append(g);
        });

        const head2 = t(W / 2, 140, 'Semua penyebut = 5', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 16, 'font-family': 'IBM Plex Sans, sans-serif' });
        const verdict = t(W / 2, 500, 'Penyebut sama → bandingkan pembilang: 7/5 > 4/5 > 2/5', { 'text-anchor': 'middle', fill: C.green, 'font-size': 19, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });
        root.append(A.grid(W, H), head, head2, verdict);

        return {
          update(k) {
            items.forEach((it, i) => {
              const p = ease.out(win(k, 0.12 + i * 0.15, 0.45 + i * 0.15));
              it.bar.setAttribute('width', String(520 * clamp((it.n / 5) * p)));
            });
            verdict.setAttribute('opacity', String(win(k, 0.7, 0.95)));
          },
          anchors: [
            { key: 'pembilang', x: 200 / W, y: 190 / H, at: [0.1, 0.35] },
            { key: 'campuran', x: 500 / W, y: 382 / H, at: [0.45, 0.7] },
          ],
        };
      },
    };
  });
})();