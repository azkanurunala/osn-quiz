/* ============================================================================
   scenes/listrik.js — IPA-03j Rangkaian Listrik (campur): seri, paralel, banding.

   Scenes
     listrik-seri       two lamps in one loop; one bulb out kills the whole loop
     listrik-paralel    two branches; one bulb out leaves the other lit
     listrik-banding    both circuits side by side with a live comparison readout
     listrik-arus       electron flow, switch, and what a wire carries
   ========================================================================== */
(function () {
  'use strict';
  const { sv, t, clamp, lerp, ease, win, tag } = IX;
  const A = IX.art;
  const C = A.C;
  const W = 960;
  const H = 540;

  /** rounded circuit wire through a list of points */
  function wire(pts, color = 'rgba(255,255,255,.55)', w = 5) {
    let d = '';
    pts.forEach(([x, y], i) => { d += (i ? 'L' : 'M') + x + ' ' + y + ' '; });
    return sv('path', { d, fill: 'none', stroke: color, 'stroke-width': w, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' });
  }

  /* ------------------------------------------------------------------ 1 ----- */
  IX.register('listrik-seri', () => {
    const x0 = 190;
    const x1 = 770;
    const yTop = 170;
    const yBot = 400;
    return {
      defs: A.defs(),
      build(root) {
        const loop = wire([[x0, yTop], [x1, yTop], [x1, yBot], [x0, yBot], [x0, yTop]], 'rgba(255,255,255,.5)', 6);
        const bat = A.battery(x0 - 58, (yTop + yBot) / 2, 0.85);
        const lamp1 = A.lamp((x0 + x1) / 2 - 120, yTop - 26, 1.05);
        const lamp2 = A.lamp((x0 + x1) / 2 + 120, yTop - 26, 1.05);
        const switchG = sv('g', { transform: `translate(${x1 + 62} ${(yTop + yBot) / 2})` }, [
          sv('circle', { cx: -26, cy: 0, r: 6, fill: C.text }),
          sv('circle', { cx: 26, cy: 0, r: 6, fill: C.text }),
          sv('line', { x1: -26, y1: 0, x2: 26, y2: 0, stroke: C.green, 'stroke-width': 7, 'stroke-linecap': 'round' }),
        ]);

        const flow = A.traveler(loop, '#fde68a', 7, 5);
        const head = t(W / 2, 66, 'Rangkaian seri: satu jalur, dua lampu', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 29, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const note1 = t(W / 2, 96, 'Arus sama besar di semua titik', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 17, 'font-family': 'IBM Plex Sans, sans-serif' });
        const note2 = t(W / 2, 468, 'Satu lampu mati, semua ikut mati', { 'text-anchor': 'middle', fill: C.red, 'font-size': 18, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });
        const note3 = t(W / 2, 500, 'Lampu jadi redup karena mendapat tegangan lebih kecil', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 15, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H), loop, bat.el, lamp1.el, lamp2.el, switchG.el, flow.el, head, note1, note2, note3,
          tag(x0 - 58, (yTop + yBot) / 2 - 90, 'sumber tegangan', { size: 14, color: C.green }),
          tag((x0 + x1) / 2 - 120, yTop - 106, 'lampu 1', { size: 14, color: C.yellow }),
          tag((x0 + x1) / 2 + 120, yTop - 106, 'lampu 2', { size: 14, color: C.yellow }),
          tag(x1 + 62, (yTop + yBot) / 2 - 60, 'saklar', { size: 14, color: C.green }));

        let off = null;
        return {
          update(k) {
            bat.set(1);
            const dead = k > 0.55;
            const p = dead ? 0 : 0.62;
            lamp1.set(p);
            lamp2.set(p);
            flow.set(k * 2.2);
            flow.el.setAttribute('opacity', dead ? 0.12 : 1);
            if (dead !== off) {
              off = dead;
              switchG.children[2].setAttribute('transform', dead ? 'rotate(38 26 0)' : '');
              switchG.children[2].setAttribute('stroke', dead ? C.red : C.green);
              loop.setAttribute('stroke', dead ? 'rgba(248,113,113,.35)' : 'rgba(255,255,255,.5)');
            }
          },
          anchors: [
            { key: 'alur', x: x0 / W, y: ((yTop + yBot) / 2 - 150) / H, at: [0.05, 0.25] },
            { key: 'lampu', x: (x0 + x1) / 2 / W, y: (yTop - 20) / H, at: [0.25, 0.5] },
            { key: 'saklar', x: (x1 + 62) / W, y: ((yTop + yBot) / 2) / H, at: [0.5, 0.75] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 2 ----- */
  IX.register('listrik-paralel', () => {
    const x0 = 190;
    const x1 = 770;
    const yTop = 170;
    const yMid = 285;
    const yBot = 400;
    return {
      defs: A.defs(),
      build(root) {
        const trunk = wire([[x0, yTop], [x0, yBot]]);
        const top = wire([[x0, yTop], [x1, yTop]]);
        const bot = wire([[x0, yBot], [x1, yBot]]);
        const br1 = wire([[420, yTop], [420, yMid]], 'rgba(255,255,255,.5)');
        const br2 = wire([[540, yTop], [540, yMid]], 'rgba(255,255,255,.5)');
        const l1 = wire([[420, yMid], [540, yMid]], 'rgba(255,255,255,.5)');
        const l2 = wire([[540, yMid], [540, yBot]], 'rgba(255,255,255,.5)');
        const loop = wire([[x0, yTop], [x1, yTop], [x1, yBot], [x0, yBot], [x0, yTop]], 'rgba(255,255,255,.16)', 6);

        const bat = A.battery(x0 - 60, (yTop + yBot) / 2, 0.85);
        const lamp1 = A.lamp(420, yMid - 26, 0.95);
        const lamp2 = A.lamp(540, yMid - 26, 0.95);

        const flow = A.traveler(loop, '#fde68a', 7, 5);
        const head = t(W / 2, 66, 'Rangkaian paralel: dua jalur terpisah', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 29, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const note1 = t(W / 2, 96, 'Setiap lampu mendapat tegangan penuh', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 17, 'font-family': 'IBM Plex Sans, sans-serif' });
        const note2 = t(W / 2, 468, 'Satu lampu mati, lampu lain tetap menyala', { 'text-anchor': 'middle', fill: C.green, 'font-size': 18, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });
        const note3 = t(W / 2, 500, 'Tambah satu lampu: semuanya tetap terang', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 15, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H), trunk, top, bot, br1, br2, l1, l2, loop, bat.el, lamp1.el, lamp2.el, flow.el, head, note1, note2, note3,
          tag(x0 - 60, (yTop + yBot) / 2 - 90, 'sumber tegangan', { size: 14, color: C.green }),
          tag(420, yMid - 100, 'lampu 1', { size: 14, color: C.yellow }),
          tag(540, yMid - 100, 'lampu 2', { size: 14, color: C.yellow }));

        return {
          update(k) {
            bat.set(1);
            const oneDead = k > 0.5 && k < 0.78;
            lamp1.set(k > 0.78 ? 1 : 0.8);
            lamp2.set(oneDead ? 0.05 : 0.8);
            flow.set(k * 2.2);
            l2.setAttribute('opacity', oneDead ? 0.2 : 1);
            loop.setAttribute('stroke', 'rgba(255,255,255,.16)');
          },
          anchors: [
            { key: 'cabang', x: 480 / W, y: (yTop - 40) / H, at: [0.05, 0.3] },
            { key: 'lampu-1', x: 420 / W, y: (yMid - 20) / H, at: [0.3, 0.5] },
            { key: 'mandi', x: 540 / W, y: (yMid - 20) / H, at: [0.5, 0.75] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 3 ----- */
  IX.register('listrik-banding', () => {
    const yS = 210;
    const yP = 420;
    return {
      defs: A.defs(),
      build(root) {
        const mk = (y, label, note, color) => {
          const g = sv('g');
          const x0 = 150;
          const x1 = 810;
          const loop = wire([[x0, y - 60], [x1, y - 60], [x1, y + 60], [x0, y + 60], [x0, y - 60]], 'rgba(255,255,255,.3)', 5);
          const l1 = A.lamp(420, y - 86, 0.8);
          const l2 = A.lamp(560, y - 86, 0.8);
          const bat = A.battery(x0 - 20, y, 0.6);
          const fl = A.traveler(loop, color, 5, 4);
          g.append(loop, l1.el, l2.el, bat.el, fl.el);
          const title = t(x0 - 30, y - 118, label, { fill: '#fff', 'font-size': 21, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif', 'text-anchor': 'start' });
          const sub = t(x0 - 30, y + 100, note, { fill: C.dim, 'font-size': 15, 'font-family': 'IBM Plex Sans, sans-serif', 'text-anchor': 'start' });
          g.append(title, sub);
          return { g, l1, l2, bat, fl };
        };
        const seri = mk(yS, 'SERI', 'satu lampu mati, semuanya ikut mati', '#f87171');
        const par = mk(yP, 'PARALEL', 'satu lampu mati, yang lain tetap menyala', '#4ade80');

        const divider = sv('line', { x1: 120, y1: 300, x2: 840, y2: 300, stroke: 'rgba(255,255,255,.12)', 'stroke-width': 2, 'stroke-dasharray': '10 10' });
        const head = t(W / 2, 54, 'Bandingkan: seri atau paralel?', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 27, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const verdict = t(W / 2, 516, 'Di rumah kita memakai paralel: lampu menyala terpisah', { 'text-anchor': 'middle', fill: C.green, 'font-size': 17, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H), head, divider, seri.g, par.g, verdict);

        return {
          update(k) {
            const dead = k > 0.45;
            seri.l1.set(dead ? 0 : 0.55);
            seri.l2.set(dead ? 0 : 0.55);
            seri.fl.set(k * 2);
            seri.fl.el.setAttribute('opacity', dead ? 0.1 : 1);
            par.l1.set(0.8);
            par.l2.set(dead ? 0.05 : 0.8);
            par.fl.set(k * 2);
          },
          anchors: [
            { key: 'seri', x: 420 / W, y: (yS - 60) / H, at: [0.05, 0.4] },
            { key: 'paralel', x: 560 / W, y: (yP - 60) / H, at: [0.35, 0.7] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 4 ----- */
  IX.register('listrik-arus', () => {
    const y = 270;
    const x0 = 200;
    const x1 = 760;
    return {
      defs: A.defs(),
      build(root) {
        const loop = wire([[x0, y - 70], [x1, y - 70], [x1, y + 70], [x0, y + 70], [x0, y - 70]], 'rgba(255,255,255,.45)', 6);
        const bat = A.battery(x0 - 60, y, 0.9);
        const lamp = A.lamp(480, y - 96, 1);
        const sw = sv('g', { transform: `translate(620 ${y + 70})` }, [
          sv('rect', { x: -34, y: -18, width: 68, height: 36, rx: 8, fill: 'rgba(8,12,24,.9)', stroke: C.green, 'stroke-width': 3 }),
          sv('line', { x1: -18, y1: 0, x2: 18, y2: 0, stroke: C.green, 'stroke-width': 7, 'stroke-linecap': 'round' }),
        ]);
        const electrons = A.traveler(loop, '#fde68a', 8, 6);
        const head = t(W / 2, 62, 'Arus listrik: elektron bergerak beraturan', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 28, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const sub = t(W / 2, 94, 'Arus mengalir dari kutub negatif ke kutub positif, melalui kabel dan lampu', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 15, 'font-family': 'IBM Plex Sans, sans-serif' });
        const note = t(W / 2, 452, 'Arus hanya mengalir kalau jalannya tertutup (saklar hidup)', { 'text-anchor': 'middle', fill: C.yellow, 'font-size': 18, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H), loop, bat.el, lamp.el, sw.el, electrons.el, head, sub, note,
          tag(480, y - 150, 'lampu', { size: 14, color: C.yellow }),
          tag(620, y + 120, 'saklar', { size: 14, color: C.green }));

        let closed = null;
        return {
          update(k) {
            const on = k > 0.3;
            bat.set(on ? 1 : 0.15);
            lamp.set(on ? 1 : 0);
            electrons.set(k * 2.4);
            electrons.el.setAttribute('opacity', on ? 1 : 0.1);
            if (on !== closed) {
              closed = on;
              sw.children[1].setAttribute('transform', on ? '' : 'rotate(32 18 0)');
              sw.children[1].setAttribute('stroke', on ? C.green : C.red);
            }
          },
          anchors: [
            { key: 'baterai', x: (x0 - 60) / W, y: y / H, at: [0.02, 0.25] },
            { key: 'saklar', x: 620 / W, y: (y + 70) / H, at: [0.2, 0.45] },
          ],
        };
      },
    };
  });
})();