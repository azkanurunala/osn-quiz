/* ============================================================================
   scenes/bisnis.js — MTK-06c Diskon (campur).

   Scenes
     diskon-potong     one discount cutting the price tag
     diskon-berlapis   stacked discounts are NOT additive (20% + 10% ≠ 30%)
     diskon-harga-jual the formula Price × (1 − d/100), shown as a gauge
     diskon-kembalian  change from a 100000 bill, counted out in coins
   ========================================================================== */
(function () {
  'use strict';
  const { sv, t, clamp, lerp, ease, win, tag } = IX;
  const A = IX.art;
  const C = A.C;
  const W = 960;
  const H = 540;

  const rp = (n) => 'Rp' + Number(n).toLocaleString('id-ID');

  /* ------------------------------------------------------------------ 1 ----- */
  IX.register('diskon-potong', ({ harga = 150000, diskon = 30 } = {}) => {
    const potong = (harga * diskon) / 100;
    const bayar = harga - potong;
    return {
      defs: A.defs(),
      build(root) {
        const head = t(W / 2, 74, `Diskon ${diskon}% dari ${rp(harga)}`, { 'text-anchor': 'middle', fill: '#fff', 'font-size': 30, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });

        const tagG = sv('g', { transform: 'translate(330 280)' });
        const shape = sv('path', { d: 'M -170 -80 L 170 -80 L 170 80 L 0 80 L -40 40 L -170 40 Z', fill: 'rgba(15,23,42,.9)', stroke: 'rgba(255,255,255,.3)', 'stroke-width': 3, 'stroke-linejoin': 'round' });
        const hole = sv('circle', { cx: -120, cy: -40, r: 12, fill: 'rgba(6,10,20,.9)', stroke: 'rgba(255,255,255,.35)', 'stroke-width': 3 });
        const priceTxt = t(-40, -20, rp(harga), { 'text-anchor': 'middle', fill: C.dim, 'font-size': 26, 'font-weight': 700, 'font-family': 'DM Sans, sans-serif' });
        const finalTxt = t(-40, 30, '', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 40, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        tagG.append(shape, hole, priceTxt, finalTxt);

        const arrow = A.forceArrow(330, 200, 330, 260, C.red, { w: 8 });

        const mBawa = A.meter(620, 250, 240, 'Uang bawa', C.dim);
        const mDisc = A.meter(620, 320, 240, 'Potongan diskon', C.red);
        const mBayar = A.meter(620, 400, 240, 'Harus bayar', C.green);

        const formula = t(W / 2, 500, `${rp(harga)} × (1 − ${diskon}/100) = ${rp(bayar)}`, { 'text-anchor': 'middle', fill: 'var(--accent)', 'font-size': 20, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H), head, tagG, arrow.el, mBawa, mDisc, mBayar, formula);

        return {
          update(k) {
            arrow.set(win(k, 0.08, 0.25));
            const cut = win(k, 0.25, 0.55);
            priceTxt.setAttribute('fill', cut > 0.9 ? C.dim : C.text);
            priceTxt.setAttribute('text-decoration', cut > 0.9 ? 'line-through' : '');
            mBawa.set(win(k, 0.05, 0.2), rp(harga));
            mDisc.set((diskon / 100) * cut, rp(Math.round(potong * cut)));
            mBayar.set(1 - (diskon / 100) * cut, rp(Math.round(harga - potong * cut)));
            finalTxt.setAttribute('opacity', String(win(k, 0.6, 0.8)));
            formula.setAttribute('opacity', String(win(k, 0.75, 0.95)));
          },
          anchors: [
            { key: 'harga-awal', x: 250 / W, y: 260 / H, at: [0.05, 0.25] },
            { key: 'potongan', x: 700 / W, y: 320 / H, at: [0.25, 0.5] },
            { key: 'harga-bayar', x: 700 / W, y: 400 / H, at: [0.55, 0.8] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 2 ----- */
  IX.register('diskon-berlapis', ({ harga = 200000, d1 = 20, d2 = 10 } = {}) => {
    const salah = ((harga * (1 - d1 / 100)) * (d1 / 100 + d2 / 100)) / 100;
    const benar = harga * (1 - d1 / 100) * (1 - d2 / 100);
    return {
      defs: A.defs(),
      build(root) {
        const head = t(W / 2, 62, `Diskon berlapis ${d1}% lalu ${d2}%`, { 'text-anchor': 'middle', fill: '#fff', 'font-size': 29, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const sub = t(W / 2, 94, 'Diskon kedua berlaku pada harga yang sudah dipotong', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 17, 'font-family': 'IBM Plex Sans, sans-serif' });

        const steps = [
          { label: `Harga awal`, val: harga, y: 160, color: C.dim },
          { label: `setelah diskon ${d1}%`, val: harga * (1 - d1 / 100), y: 250, color: C.red },
          { label: `setelah diskon ${d2}%`, val: benar, y: 340, color: C.green },
        ];
        const bars = steps.map((s) => {
          const w = 560 * (s.val / harga);
          const g = sv('g');
          const ghost = sv('rect', { x: 220, y: s.y - 26, width: 560, height: 52, rx: 26, fill: 'rgba(255,255,255,.05)' });
          const bar = sv('rect', { x: 220, y: s.y - 26, width: 0, height: 52, rx: 26, fill: s.color, opacity: 0.85 });
          const lab = t(200, s.y + 7, s.label, { 'text-anchor': 'end', fill: C.text, 'font-size': 15, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif' });
          const val = t(800, s.y + 7, '', { fill: '#fff', 'font-size': 17, 'font-weight': 700, 'font-family': 'DM Sans, sans-serif' });
          g.append(ghost, bar, lab, val);
          root.append(g);
          return { bar, val, w };
        });

        const boxWrong = sv('g', { opacity: 0 }, [
          sv('rect', { x: 190, y: 400, width: 620, height: 62, rx: 16, fill: 'rgba(248,113,113,.1)', stroke: C.red, 'stroke-width': 2, 'stroke-dasharray': '9 7' }),
          t(500, 428, ` salah: ditotalkan ${d1 + d2}% → ${rp(salah)}`, { 'text-anchor': 'middle', fill: C.red, 'font-size': 17, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif' }),
          t(500, 450, 'potongan kedua tidak bisa dijumlahkan begitu saja', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 13, 'font-family': 'IBM Plex Sans, sans-serif' }),
        ]);
        const boxRight = sv('g', { opacity: 0 }, [
          sv('rect', { x: 190, y: 470, width: 620, height: 52, rx: 16, fill: 'rgba(74,222,128,.12)', stroke: C.green, 'stroke-width': 2 }),
          t(500, 502, ` benar: ${rp(benar)} — diskon efektif ${(((harga - benar) / harga) * 100).toFixed(0)}%`, { 'text-anchor': 'middle', fill: C.green, 'font-size': 18, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' }),
        ]);

        root.append(A.grid(W, H), head, sub, boxWrong, boxRight);

        return {
          update(k) {
            bars.forEach((b, i) => {
              const p = ease.out(win(k, 0.1 + i * 0.18, 0.45 + i * 0.18));
              b.bar.setAttribute('width', String(b.w * p));
              b.val.textContent = p > 0.5 ? rp(Math.round(steps[i].val * p)) : '';
            });
            boxWrong.setAttribute('opacity', String(win(k, 0.6, 0.75)));
            boxRight.setAttribute('opacity', String(win(k, 0.75, 0.9)));
          },
          anchors: [
            { key: 'kedua', x: 700 / W, y: 250 / H, at: [0.2, 0.45] },
            { key: 'jahat', x: 500 / W, y: 430 / H, at: [0.55, 0.75] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 3 ----- */
  IX.register('diskon-harga-jual', () => {
    const gauge = (x, y, r) => {
      const g = sv('g', { transform: `translate(${x} ${y})` });
      const arc = sv('path', { d: describeArc(0, 0, r, 180, 360), fill: 'none', stroke: 'rgba(255,255,255,.12)', 'stroke-width': 22, 'stroke-linecap': 'round' });
      const live = sv('path', { d: '', fill: 'none', stroke: 'var(--accent)', 'stroke-width': 22, 'stroke-linecap': 'round' });
      const needle = sv('line', { x1: 0, y1: 0, x2: 0, y2: -r + 6, stroke: '#fff', 'stroke-width': 6, 'stroke-linecap': 'round' });
      const knob = sv('circle', { r: 9, fill: '#fff' });
      g.append(arc, live, needle, knob);
      return { el: g, live, needle };
    };
    function describeArc(cx, cy, r, a1, a2) {
      const p = (a) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)];
      const [x1, y1] = p(a1);
      const [x2, y2] = p(a2);
      const large = Math.abs(a2 - a1) > 180 ? 1 : 0;
      return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
    }

    return {
      defs: A.defs(),
      build(root) {
        const head = t(W / 2, 68, 'Rumus harga jual', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 30, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const formula = t(W / 2, 112, 'Harga jual = Harga awal × (1 − d/100)', { 'text-anchor': 'middle', fill: 'var(--accent)', 'font-size': 21, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });

        const g = gauge(480, 320, 130);
        const pctTxt = t(480, 300, '0%', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 46, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const ticks = [];
        for (let i = 0; i <= 4; i++) {
          const a = 180 + i * 45;
          const r1 = 152;
          const r2 = 168;
          const rad = (a * Math.PI) / 180;
          ticks.push(sv('line', { x1: 480 + Math.cos(rad) * r1, y1: 320 + Math.sin(rad) * r1, x2: 480 + Math.cos(rad) * r2, y2: 320 + Math.sin(rad) * r2, stroke: 'rgba(255,255,255,.4)', 'stroke-width': 4 }));
          ticks.push(t(480 + Math.cos(rad) * 186, 320 + Math.sin(rad) * 186 + 6, `${i * 25}%`, { 'text-anchor': 'middle', fill: C.dim, 'font-size': 14, 'font-family': 'IBM Plex Sans, sans-serif' }));
        }

        const work = t(W / 2, 452, '', { 'text-anchor': 'middle', fill: C.text, 'font-size': 18, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif' });
        const contoh = t(W / 2, 496, 'Contoh: 25% dari Rp120.000 = Rp30.000, jadi bayar Rp90.000', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 16, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H), head, formula, ...ticks, g.el, pctTxt, work, contoh);

        return {
          update(k) {
            const p = ease.inOut(win(k, 0.1, 0.7));
            const d = p * 100;
            g.live.setAttribute('d', describeArc(0, 0, 130, 180, 180 + d * 1.8));
            g.needle.setAttribute('transform', `rotate(${(270 + d * 1.8).toFixed(2)} 0 0)`);
            pctTxt.textContent = `${Math.round(d)}%`;
            work.textContent = d > 2 ? `Potongan = 120.000 × ${(d / 100).toFixed(2)} = ${rp(Math.round(120000 * (d / 100)))}` : '';
          },
          anchors: [
            { key: 'rumus', x: 480 / W, y: 112 / H, at: [0.05, 0.2] },
            { key: 'persen', x: 480 / W, y: 300 / H, at: [0.3, 0.6] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 4 ----- */
  IX.register('diskon-kembalian', ({ harga = 67500, bayar = 100000 } = {}) => {
    const kembali = bayar - harga;
    return {
      defs: A.defs(),
      build(root) {
        const head = t(W / 2, 70, 'Kembalian: uang yang dikembalikan', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 29, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const sub = t(W / 2, 102, 'Uang bayar dikurangi harga barang', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 16, 'font-family': 'IBM Plex Sans, sans-serif' });

        const boxPrice = sv('g', { transform: 'translate(300 230)' }, [
          sv('rect', { x: -140, y: -46, width: 280, height: 92, rx: 18, fill: 'rgba(15,23,42,.9)', stroke: 'rgba(255,255,255,.28)', 'stroke-width': 3 }),
          t(0, 12, rp(harga), { 'text-anchor': 'middle', fill: '#fff', 'font-size': 32, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' }),
          t(0, -22, 'harga barang', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 14, 'font-family': 'IBM Plex Sans, sans-serif' }),
        ]);
        const boxPay = sv('g', { transform: 'translate(680 230)' }, [
          sv('rect', { x: -140, y: -46, width: 280, height: 92, rx: 18, fill: 'rgba(15,23,42,.9)', stroke: 'var(--accent)', 'stroke-width': 3 }),
          t(0, 12, rp(bayar), { 'text-anchor': 'middle', fill: 'var(--accent)', 'font-size': 32, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' }),
          t(0, -22, 'uang dibayar', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 14, 'font-family': 'IBM Plex Sans, sans-serif' }),
        ]);
        const minus = t(490, 246, '−', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 44, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });

        const eq = t(490, 372, '=', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 40, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const back = sv('g', { transform: 'translate(490 448)', opacity: 0 }, [
          sv('rect', { x: -170, y: -40, width: 340, height: 80, rx: 20, fill: 'rgba(74,222,128,.14)', stroke: C.green, 'stroke-width': 3 }),
          t(0, 12, rp(kembali), { 'text-anchor': 'middle', fill: C.green, 'font-size': 38, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' }),
          t(0, -16, 'kembalian', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 14, 'font-family': 'IBM Plex Sans, sans-serif' }),
        ]);

        const coins = [];
        for (let i = 0; i < 6; i++) {
          const c = sv('circle', { cx: 160 + i * 46, cy: 500, r: 20, fill: '#fbbf24', opacity: 0 });
          const v = t(160 + i * 46, 506, '', { 'text-anchor': 'middle', fill: '#78350f', 'font-size': 12, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif', opacity: 0 });
          coins.push({ c, v });
          root.append(c, v);
        }

        root.append(A.grid(W, H), head, sub, boxPrice, boxPay, minus, eq, back);

        return {
          update(k) {
            minus.setAttribute('opacity', String(win(k, 0.1, 0.25)));
            eq.setAttribute('opacity', String(win(k, 0.4, 0.55)));
            back.setAttribute('opacity', String(win(k, 0.55, 0.75)));
            const p = ease.out(win(k, 0.6, 0.9));
            back.children[1].textContent = rp(Math.round(kembali * p));
            const denominations = [50000, 20000, 10000, 5000, 2000, 500];
            let left = Math.round(kembali * p);
            coins.forEach((coin, i) => {
              const use = left >= denominations[i] && win(k, 0.62 + i * 0.04, 0.7 + i * 0.04) > 0.5;
              coin.c.setAttribute('opacity', use ? 0.95 : 0);
              coin.v.setAttribute('opacity', use ? 1 : 0);
              coin.v.textContent = use ? `${denominations[i] / 1000}k` : '';
              if (use) left -= denominations[i];
            });
          },
          anchors: [
            { key: 'harga', x: 300 / W, y: 230 / H, at: [0.05, 0.3] },
            { key: 'kembalian', x: 490 / W, y: 448 / H, at: [0.5, 0.8] },
          ],
        };
      },
    };
  });
})();