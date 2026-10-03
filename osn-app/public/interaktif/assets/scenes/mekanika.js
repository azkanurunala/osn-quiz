/* ============================================================================
   scenes/mekanika.js — IPA-03d Tuas (campur) and neighbours from the mechanics cluster.

   Vocabulary is taken verbatim from the package so the illustration can never
   contradict the 100 questions: "kuasa" (not gaya), "lengan kuasa LK" /
   "lengan beban LB", "tuas jenis 1/2/3" described by susunan T-B-K, and the
   same everyday examples the questions use (sapu, gerobak sorong, jungkat-jungkit
   = jenis 1; gunting, tang, stapler, pemecah biji kemiri = jenis 2;
   pancing, pinset, sekop = jenis 3).

   Registered scene ids
     tuas-3-jenis    three lever classes, switched by params.tipe (1 | 2 | 3)
     tuas-ideal      lengan kuasa vs lengan beban with a live KM readout
     tuas-APL        realistic pry-bar lifting a rock
     katrol-tetap    fixed pulley: the direction of your pull is reversed
     roda-gigi       gear train: the big wheel turns slower but has more torque
   ========================================================================== */
(function () {
  'use strict';
  const { sv, t, clamp, lerp, ease, win, tag } = IX;
  const A = IX.art;
  const C = A.C;

  const W = 960;
  const H = 540;

  /* ------------------------------------------------------------------ 1 ----- */
  // Susunan, letak tengah, KM, dan contoh mengikuti tabel "Tabel 3 Jenis Tuas"
  // pada packages/data/ipa-03d-tuas-campur.json (lihat Tabel 3 Jenis Tuas).
  IX.register('tuas-3-jenis', ({ tipe = 1 }) => {
    const JENIS = {
      1: {
        nama: 'Tuas Jenis 1',
        susunan: 'B — T — K  (atau  K — T — B)',
        arti: 'Letak tengah: tumpuan',
        contoh: 'gunting, jungkat-jungkit, linggis cabut paku, tang, palu cabut paku, dacin, pemotong kuku',
        km: 'KM bisa > 1, = 1, atau < 1',
        untung: 'Tergantung panjang kedua lengannya',
        pivot: 470,
        loadX: 280, // lengan beban 190
        effX: 660, // lengan kuasa 190
      },
      2: {
        nama: 'Tuas Jenis 2',
        susunan: 'T — B — K',
        arti: 'Letak tengah: beban',
        contoh: 'gerobak sorong, pembuka tutup botol, pemecah biji kemiri, stapler, pintu',
        km: 'KM selalu > 1 (untung gaya)',
        untung: 'Lengan kuasa selalu lebih panjang dari lengan beban',
        pivot: 150,
        loadX: 330, // lengan beban 180
        effX: 710, // lengan kuasa 560
      },
      3: {
        nama: 'Tuas Jenis 3',
        susunan: 'T — K — B',
        arti: 'Letak tengah: kuasa',
        contoh: 'sapu, sekop, pancing, pinset, lengan manusia menekuk, raket, garpu makan, stik bisbol',
        km: 'KM selalu < 1 (rugi gaya, untung kecepatan)',
        untung: 'Lengan kuasa lebih pendek dari lengan beban',
        pivot: 150,
        loadX: 710, // lengan beban 560
        effX: 330, // lengan kuasa 180
      },
    };
    const j = JENIS[tipe];

    return {
      defs: A.defs(),
      build(root) {
        const { pivot, loadX, effX } = j;
        const restY = 356;
        const dir = loadX >= pivot ? 1 : -1; // +1 = beban di kanan tumpuan
        const x1 = Math.min(pivot, loadX, effX) - 26;
        const x2 = Math.max(pivot, loadX, effX) + 26;

        const beam = sv('g');
        beam.append(
          sv('line', { x1, y1: restY, x2, y2: restY, stroke: 'rgba(255,255,255,.14)', 'stroke-width': 16, 'stroke-linecap': 'round' }),
          sv('line', { x1, y1: restY, x2, y2: restY, stroke: C.accent, 'stroke-width': 11, 'stroke-linecap': 'round' }),
        );

        const ful = sv('path', { d: `M ${pivot - 42} ${restY + 58} L ${pivot} ${restY + 10} L ${pivot + 42} ${restY + 58} Z`, fill: 'rgba(255,255,255,.14)', stroke: C.text, 'stroke-width': 3, 'stroke-linejoin': 'round' });

        const load = sv('g', {}, [
          sv('rect', { x: -30, y: -58, width: 60, height: 58, rx: 8, fill: C.red, opacity: 0.9 }),
          sv('text', { x: 0, y: -20, 'text-anchor': 'middle', fill: '#3b0a0a', 'font-size': 22, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif', text: 'B' }),
        ]);
        const effArrow = A.forceArrow(effX, restY - 150, effX, restY - 12, C.blue, { w: 7 });

        const head = t(W / 2, 56, j.nama, { 'text-anchor': 'middle', fill: '#fff', 'font-size': 32, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const sus = t(W / 2, 94, `Pola di tengah: ${j.susunan}`, { 'text-anchor': 'middle', fill: 'var(--accent)', 'font-size': 21, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });
        const arti = t(W / 2, 124, j.arti, { 'text-anchor': 'middle', fill: '#fff', 'font-size': 18, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });
        const untung = t(W / 2, 156, j.untung, { 'text-anchor': 'middle', fill: tipe === 3 ? C.red : C.green, 'font-size': 16, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });
        const km = t(W / 2, 184, j.km, { 'text-anchor': 'middle', fill: tipe === 3 ? C.red : C.green, 'font-size': 16, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });
        const contoh = t(W / 2, 214, `Contoh: ${j.contoh}`, { 'text-anchor': 'middle', fill: C.dim, 'font-size': 14, 'font-family': 'IBM Plex Sans, sans-serif' });

        const ly = restY + 34;
        const armBL = sv('line', { x1: Math.min(pivot, loadX) + 6, y1: ly, x2: Math.max(pivot, loadX) - 6, y2: ly, stroke: C.dim, 'stroke-width': 3, 'stroke-dasharray': '6 6' });
        const armKL = sv('line', { x1: Math.min(pivot, effX) + 6, y1: ly, x2: Math.max(pivot, effX) - 6, y2: ly, stroke: C.dim, 'stroke-width': 3, 'stroke-dasharray': '6 6' });
        const labLB = tag((pivot + loadX) / 2, ly, 'LB', { size: 13, color: C.red });
        const labLK = tag((pivot + effX) / 2, ly, 'LK', { size: 13, color: C.blue });

        root.append(
          A.grid(W, H), A.ground(restY + 58, W), head, sus, arti, untung, km, contoh,
          beam, ful, load, effArrow,
          tag(pivot, restY + 96, 'Tumpuan', { size: 15, stroke: 'var(--accent)' }),
          tag(loadX, restY - 118, 'Beban', { size: 16, color: C.red }),
          tag(effX, restY - 172, 'Kuasa', { size: 16, color: C.blue }),
          armBL, armKL, labLB, labLK,
        );

        return {
          update(k) {
            const lift = ease.inOut(win(k, 0.1, 0.55));
            const ang = 12 * lift * dir;
            beam.setAttribute('transform', `rotate(${ang} ${pivot} ${restY})`);
            const rad = (ang * Math.PI) / 180;
            const dx = loadX - pivot;
            const dy = -4;
            load.setAttribute(
              'transform',
              `translate(${(pivot + dx * Math.cos(rad) - dy * Math.sin(rad)).toFixed(2)} ${(restY + dx * Math.sin(rad) + dy * Math.cos(rad)).toFixed(2)})`,
            );
            effArrow.set(win(k, 0.55, 0.85));
          },
          anchors: [
            { key: 'tumpuan', x: pivot / W, y: (restY + 36) / H, at: [0, 0.25] },
            { key: 'beban', x: loadX / W, y: (restY - 34) / H, at: [0.2, 0.45] },
            { key: 'kuasa', x: effX / W, y: (restY - 96) / H, at: [0.45, 0.7] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 2 ----- */
  IX.register('tuas-ideal', ({ arm = 520, beban = 100 } = {}) => {
    const restY = 320;
    const LK = 120;
    const LB = clamp(arm, 220, 640);
    // keep the whole beam on screen whatever the requested arm length
    const pivot = clamp(W / 2 - 60, LB + 90, W - 90 - LK);
    const KM = LB / LK;
    const kuasaNeed = (beban * LB) / LK;

    return {
      defs: A.defs(),
      build(root) {
        const beam = sv('g');
        beam.append(
          sv('line', { x1: pivot - LB, y1: restY, x2: pivot + LK, y2: restY, stroke: 'rgba(255,255,255,.14)', 'stroke-width': 16, 'stroke-linecap': 'round' }),
          sv('line', { x1: pivot - LB, y1: restY, x2: pivot + LK, y2: restY, stroke: C.accent, 'stroke-width': 11, 'stroke-linecap': 'round' }),
        );
        const ful = sv('path', { d: `M ${pivot - 46} ${restY + 64} L ${pivot} ${restY + 14} L ${pivot + 46} ${restY + 64} Z`, fill: 'rgba(255,255,255,.14)', stroke: C.text, 'stroke-width': 3, 'stroke-linejoin': 'round' });

        const loadX = pivot - LB + 30;
        const load = sv('g', { transform: `translate(${loadX} ${restY - 6})` }, [
          sv('rect', { x: -36, y: -70, width: 72, height: 70, rx: 8, fill: C.red, opacity: 0.9 }),
          sv('text', { x: 0, y: -28, 'text-anchor': 'middle', fill: '#3b0a0a', 'font-size': 21, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif', text: `${beban} N` }),
        ]);
        const effArrow = A.forceArrow(pivot + LK - 10, restY - 176, pivot + LK - 10, restY - 12, C.blue, { w: 8 });

        const kNum = A.valueBox(W / 2 + 200, 150, '0', { size: 42, stroke: 'var(--accent)' });
        const kLab = t(W / 2 + 200, 200, 'Keuntungan mekanis', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 15, 'font-family': 'IBM Plex Sans, sans-serif' });
        const formula = t(W / 2 + 200, 230, `KM = LB / LK = ${LB} / ${LK}`, { 'text-anchor': 'middle', fill: C.text, 'font-size': 16, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif' });
        const verdict = t(W / 2 + 200, 258, 'Kuasa jauh lebih kecil dari beban', { 'text-anchor': 'middle', fill: C.green, 'font-size': 15, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif' });

        const mK = A.meter(120, 452, 190, 'Kuasa yang dipakai', C.blue);
        const mB = A.meter(120, 498, 190, 'Beban', C.red);

        root.append(
          A.grid(W, H), A.ground(restY + 64, W), beam, ful, load, effArrow,
          A.dashed(pivot - LB, restY + 46, pivot, restY + 46, { stroke: C.red, w: 3 }),
          A.dashed(pivot, restY + 46, pivot + LK, restY + 46, { stroke: C.blue, w: 3 }),
          tag(pivot - LB / 2, restY + 72, `LB = ${LB} cm`, { size: 14, color: C.red }),
          tag(pivot + LK / 2, restY + 72, `LK = ${LK} cm`, { size: 14, color: C.blue }),
          tag(pivot, restY + 100, 'Tumpuan', { size: 14, stroke: 'var(--accent)' }),
          kNum, kLab, formula, verdict, mK, mB,
        );

        return {
          update(k) {
            const lift = ease.inOut(win(k, 0.05, 0.45));
            beam.setAttribute('transform', `rotate(${-12 * lift} ${pivot} ${restY})`);
            load.setAttribute('transform', `translate(${loadX} ${restY - 6 - 60 * lift})`);
            effArrow.set(win(k, 0.45, 0.75));
            const shown = lerp(1, KM, ease.out(win(k, 0.5, 0.9)));
            kNum._set(shown.toFixed(1));
            const kShown = lerp(beban, kuasaNeed, ease.out(win(k, 0.55, 0.95)));
            mK.set(kShown / (beban * 1.2), `${Math.round(kShown)} N`);
            mB.set(1, `${beban} N`);
          },
          anchors: [
            { key: 'tumpuan', x: pivot / W, y: (restY + 40) / H, at: [0, 0.2] },
            { key: 'beban', x: loadX / W, y: (restY - 40) / H, at: [0.25, 0.45] },
            { key: 'kuasa', x: (pivot + LK - 10) / W, y: (restY - 110) / H, at: [0.45, 0.7] },
            { key: 'km', x: (W / 2 + 200) / W, y: 150 / H, at: [0.5, 0.8] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 3 ----- */
  IX.register('tuas-APL', () => {
    const restY = 300;
    const fx = 300;
    return {
      defs: A.defs(),
      build(root) {
        const board = sv('line', { x1: 120, y1: restY, x2: 840, y2: restY, stroke: '#c98a4b', 'stroke-width': 16, 'stroke-linecap': 'round' });
        const boardHi = sv('line', { x1: 120, y1: restY - 6, x2: 840, y2: restY - 6, stroke: '#e0a866', 'stroke-width': 4, 'stroke-linecap': 'round', opacity: 0.7 });
        const ful = sv('g', { transform: `translate(${fx} ${restY})` }, [sv('path', { d: 'M 0 4 L 34 78 L -34 78 Z', fill: '#8b5e3c', stroke: '#c98a4b', 'stroke-width': 3 })]);
        const rock = sv('g', { transform: `translate(690 ${restY})` }, [
          sv('path', { d: 'M -44 0 L -30 -50 L 24 -58 L 46 0 Z', fill: '#6b7280', stroke: '#9ca3af', 'stroke-width': 3, 'stroke-linejoin': 'round' }),
          sv('path', { d: 'M -20 -30 L 10 -34', stroke: '#9ca3af', 'stroke-width': 3, fill: 'none' }),
        ]);
        const push = A.forceArrow(200, restY - 64, 200, restY - 4, C.blue, { w: 8 });
        const lift = A.forceArrow(700, restY - 176, 700, restY - 62, C.yellow, { w: 7 });

        const head = t(W / 2, 70, 'Contoh nyata: membongkar batu dengan batang pengungkit', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 27, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const note1 = t(W / 2, 486, 'Batu jauh dari tumpuan, jadi kuasa yang dipakai kecil', { 'text-anchor': 'middle', fill: C.green, 'font-size': 17, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif' });
        const note2 = t(W / 2, 516, 'Tumpuan diletakkan sedekat mungkin dengan batu', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 15, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(
          A.grid(W, H), A.ground(restY + 4, W), head, board, boardHi, ful, rock, push, lift,
          tag(fx, restY + 112, 'Tumpuan kayu', { size: 14, stroke: 'var(--accent)' }),
          tag(700, restY - 202, 'Kuasa angkat', { size: 15, color: C.yellow }),
          tag(200, restY - 94, 'Tekan', { size: 15, color: C.blue }),
          note1, note2,
        );

        return {
          update(k) {
            const up = ease.inOut(win(k, 0.15, 0.6));
            rock.setAttribute('transform', `translate(690 ${restY - 70 * up}) rotate(${4 * up} 24 -50)`);
            lift.set(win(k, 0.6, 0.85));
            push.set(win(k, 0, 0.15));
            board.setAttribute('transform', `rotate(${-3 * up} ${fx} ${restY})`);
            boardHi.setAttribute('transform', `rotate(${-3 * up} ${fx} ${restY})`);
          },
          anchors: [
            { key: 'tumpuan', x: fx / W, y: (restY + 40) / H, at: [0.05, 0.25] },
            { key: 'lengan-beban', x: 690 / W, y: (restY - 40) / H, at: [0.3, 0.5] },
            { key: 'tips', x: 200 / W, y: (restY - 40) / H, at: [0.55, 0.8] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 4 ----- */
  IX.register('katrol-tetap', () => {
    const cx = 480;
    const cy = 190;
    const r = 78;
    return {
      defs: A.defs(),
      build(root) {
        const spokes = sv('g');
        for (let i = 0; i < 8; i++) {
          const a = (i / 8) * 360;
          spokes.append(sv('line', { x1: cx + Math.cos((a * Math.PI) / 180) * 12, y1: cy + Math.sin((a * Math.PI) / 180) * 12, x2: cx + Math.cos((a * Math.PI) / 180) * r, y2: cy + Math.sin((a * Math.PI) / 180) * r, stroke: 'rgba(255,255,255,.3)', 'stroke-width': 4 }));
        }
        const wheel = sv('circle', { cx, cy, r, fill: 'none', stroke: C.text, 'stroke-width': 10 });
        const hub = sv('circle', { cx, cy, r: 12, fill: C.text });
        const frame = sv('path', { d: `M ${cx - 120} ${cy + r + 44} L ${cx} ${cy - r - 40} L ${cx + 120} ${cy + r + 44}`, fill: 'none', stroke: 'rgba(255,255,255,.4)', 'stroke-width': 6, 'stroke-linejoin': 'round' });
        const leftRope = sv('line', { x1: cx - r, y1: cy, x2: cx - r, y2: cy + r + 130, stroke: C.text, 'stroke-width': 4 });
        const rightRope = sv('line', { x1: cx + r, y1: cy, x2: cx + r, y2: cy + r + 130, stroke: C.text, 'stroke-width': 4 });
        const leftLoad = sv('rect', { x: cx - r - 34, y: cy + r + 130, width: 68, height: 56, rx: 10, fill: C.red, opacity: 0.9 });
        const leftTxt = t(cx - r, cy + r + 166, 'beban', { 'text-anchor': 'middle', fill: '#3b0a0a', 'font-size': 17, 'font-weight': 700, 'font-family': 'IBM Plex Sans, sans-serif' });
        const hand = sv('circle', { cx: cx + r, cy: cy + r + 150, r: 20, fill: C.blue });
        const head = t(W / 2, 62, 'Katrol tetap: arah kuasa berlawanan dengan beban', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 27, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const labL = tag(cx - r, cy + r + 210, 'beban turun', { size: 15, color: C.red });
        const labR = tag(cx + r + 70, cy + r + 150, 'kita tarik ke atas', { size: 15, color: C.blue });
        const note = t(W / 2, 500, 'Katrol tetap hanya mengganti arah gaya, tidak memperbesar gaya', { 'text-anchor': 'middle', fill: C.dim, 'font-size': 16, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H), head, frame, spokes, wheel, hub, leftRope, rightRope, leftLoad, leftTxt, hand, labL, labR, note);

        return {
          update(k) {
            const drop = ease.inOut(win(k, 0.15, 0.65));
            const ang = drop * 900;
            spokes.setAttribute('transform', `rotate(${ang} ${cx} ${cy})`);
            wheel.setAttribute('transform', `rotate(${ang} ${cx} ${cy})`);
            leftRope.setAttribute('y2', String(cy + r + 130 + drop * 110));
            leftLoad.setAttribute('y', String(cy + r + 130 + drop * 110));
            leftTxt.setAttribute('y', String(cy + r + 166 + drop * 110));
            labL.setAttribute('transform', `translate(${cx - r} ${cy + r + 210 + drop * 110})`);
            rightRope.setAttribute('y2', String(cy + r + 130 - drop * 110));
            hand.setAttribute('cy', String(cy + r + 150 - drop * 110));
            labR.setAttribute('transform', `translate(${cx + r + 70} ${cy + r + 150 - drop * 110})`);
          },
          anchors: [
            { key: 'katrol', x: cx / W, y: cy / H, at: [0.05, 0.25] },
            { key: 'arah', x: (cx + r + 70) / W, y: (cy + r + 140) / H, at: [0.4, 0.7] },
          ],
        };
      },
    };
  });

  /* ------------------------------------------------------------------ 5 ----- */
  IX.register('roda-gigi', () => {
    const y = 300;
    const r1 = 60;
    const r2 = 130;
    const x2 = 140 + r1 + r2;
    return {
      defs: A.defs(),
      build(root) {
        const gear = (x, r, teeth, color) => {
          const g = sv('g', { transform: `translate(${x} ${y})` });
          const teethG = sv('g');
          for (let i = 0; i < teeth; i++) {
            const a = (i / teeth) * 360;
            teethG.append(sv('rect', { x: -7, y: -r - 12, width: 14, height: 22, rx: 4, fill: color, transform: `rotate(${a})` }));
          }
          const spokes = sv('g');
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            spokes.append(sv('line', { x1: 0, y1: 0, x2: Math.cos(a) * (r - 16), y2: Math.sin(a) * (r - 16), stroke: color, 'stroke-width': 6, 'stroke-linecap': 'round', opacity: 0.85 }));
          }
          g.append(sv('circle', { r, fill: 'rgba(255,255,255,.06)' }), spokes, sv('circle', { r: 16, fill: color }), teethG);
          return g;
        };
        const small = gear(140, r1, 12, C.blue);
        const big = gear(x2, r2, 24, 'var(--accent)');

        const head = t(W / 2, 70, 'Roda gigi: yang besar berputar lebih lambat, dorongannya lebih besar', { 'text-anchor': 'middle', fill: '#fff', 'font-size': 26, 'font-weight': 800, 'font-family': 'DM Sans, sans-serif' });
        const m1 = A.meter(120, 442, 200, 'Gigi roda kecil', C.blue);
        const m2 = A.meter(560, 442, 200, 'Gigi roda besar', 'var(--accent)');
        const ratio = t(W / 2, 512, '1 putaran roda besar = 2 putaran roda kecil', { 'text-anchor': 'middle', fill: C.green, 'font-size': 16, 'font-weight': 600, 'font-family': 'IBM Plex Sans, sans-serif' });

        root.append(A.grid(W, H), head, small, big, tag(140, y + r1 + 46, 'roda kecil (12 gigi)', { size: 14, color: C.blue }), tag(x2, y + r2 + 46, 'roda besar (24 gigi)', { size: 14, stroke: 'var(--accent)' }), m1, m2, ratio);

        return {
          update(k) {
            const rot = ease.inOut(win(k, 0.05, 0.75)) * 1080;
            small.setAttribute('transform', `translate(140 ${y}) rotate(${rot})`);
            big.setAttribute('transform', `translate(${x2} ${y}) rotate(${-rot / 2})`);
            m1.set(win(k, 0.1, 0.5), '12 gigi');
            m2.set(win(k, 0.35, 0.8), '24 gigi');
          },
          anchors: [
            { key: 'gigi', x: 140 / W, y: y / H, at: [0.05, 0.3] },
            { key: 'torsi', x: x2 / W, y: (y + r2) / H, at: [0.45, 0.8] },
          ],
        };
      },
    };
  });
})();