/* ============================================================================
   stage.js — the illustration stage: SVG host, clock, transport, hotspots.

   One clock drives everything. A scene is loaded by name from IX.SCENES and gets
   `update(t)` called with t = 0→1; the player asks for the next frame only while
   playing, so a paused page costs nothing.

   IX.createStage(el, { onScene, onHotspot, onEnd }) -> controller
   ========================================================================== */
(function () {
  'use strict';
  const { h, sv, clamp, toast } = IX;
  const SPEEDS = [0.5, 1, 1.5, 2];
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ICON = {
    play: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M8 5.2v13.6L19 12z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M7 5h3.4v14H7zm6.6 0H17v14h-3.4z"/></svg>',
    replay: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12 5V2L7.5 6.5 12 11V8a5 5 0 1 1-5 5H5a7 7 0 1 0 7-8z"/></svg>',
    prev: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M7 6h2.5v12H7zm10 0v12l-8-6z"/></svg>',
    next: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M14.5 6H17v12h-2.5zM7 6v12l8-6z"/></svg>',
    dot: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="7" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="3.2" fill="var(--ink-900)"/></svg>',
    expand: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"/></svg>',
  };

  IX.createStage = function createStage(root, opts = {}) {
    const state = {
      scenes: [],
      i: 0,
      t: 0,
      playing: false,
      speed: 1,
      hold: 0, // seconds paused at the end before auto-advancing
      raf: 0,
      last: 0,
      ctl: null,
      anchors: [],
      showHotspots: true,
    };

    // ---- dom ----
    const stage = h('div', { class: 'stage' });
    const svg = sv('svg', { class: 'stage__svg', preserveAspectRatio: 'xMidYMid meet' });
    const defs = sv('defs');
    const rootG = sv('g');
    svg.append(defs, rootG);

    const badge = h('div', { class: 'stage__badge' }, [h('span', { class: 'dot' }), h('span', { class: 'badge__txt' })]);
    const btnHs = h('button', { class: 'btn btn-icon', title: 'Tampilkan/sembunyikan titik info', html: ICON.dot });
    const btnFs = h('button', { class: 'btn btn-icon', title: 'Layar penuh', html: ICON.expand });
    const tools = h('div', { class: 'stage__tools' }, [btnHs, btnFs]);

    const capTitle = h('h3');
    const capText = h('p');
    const bar = h('div', { class: 'stage__bar' }, [h('div', { class: 'stage__cap' }, [capTitle, capText])]);
    const hsLayer = h('div', { class: 'stage__hs' });
    stage.append(svg, hsLayer, badge, tools, bar);

    const btnPrev = h('button', { class: 'btn btn-icon', title: 'Scene sebelumnya', html: ICON.prev });
    const btnPlay = h('button', { class: 'btn btn-icon btn-accent', title: 'Putar / jeda', html: ICON.play });
    const btnReplay = h('button', { class: 'btn btn-icon', title: 'Ulangi scene', html: ICON.replay });
    const btnNext = h('button', { class: 'btn btn-icon', title: 'Scene berikutnya', html: ICON.next });
    const scrub = h('input', { class: 'scrub', type: 'range', min: '0', max: '1000', value: '0', 'aria-label': 'Geser waktu animasi' });
    const speedBtn = h('button', { class: 'btn btn-sm', text: '1×' });
    const counter = h('span', { class: 'tiny mono muted', text: '0 / 0' });
    const dots = h('div', { class: 'dots' });
    const transport = h('div', { class: 'transport' }, [btnPrev, btnPlay, btnReplay, btnNext, scrub, speedBtn, counter, dots]);
    const panel = h('div', { class: 'hs-panel', hidden: true });

    root.append(stage, transport, panel);

    // ---- scene loading ----
    function clearSvg() {
      while (rootG.firstChild) rootG.removeChild(rootG.firstChild);
      while (defs.firstChild) defs.removeChild(defs.firstChild);
    }

    function load(i, { autoplay = true } = {}) {
      const n = state.scenes.length;
      if (!n) return;
      state.i = clamp(i, 0, n - 1);
      const def = state.scenes[state.i];
      clearSvg();
      let built;
      try {
        built = IX.SCENES[def.scene]({ ...(def.params || {}), state: { ...(def.state || {}) } });
      } catch (err) {
        rootG.append(sv('text', { x: 24, y: 40, fill: '#f87171', 'font-size': 16, text: `Scene "${def.scene}" gagal: ${err.message}` }));
        console.error(err);
        return;
      }
      if (built.defs) defs.innerHTML = built.defs;
      const ctl = built.build(rootG, def);
      state.ctl = ctl;
      state.anchors = (ctl.anchors || []).map((a) => ({ ...a, def: def.hotspots?.[a.key] }));
      state.t = 0;
      state.hold = 0;

      capTitle.textContent = def.title || '';
      capText.textContent = typeof def.caption === 'function' ? def.caption(0) : def.caption || '';
      counter.textContent = `${state.i + 1} / ${n}`;
      badge.querySelector('.badge__txt').textContent = `${state.i + 1}/${n} · ${def.kind || 'Ilustrasi'}`;
      renderDots();
      renderHotspots();
      panel.hidden = true;
      setPlaying(autoplay && !REDUCED);
      draw();
      opts.onScene?.(state.i, def);
    }

    function renderDots() {
      dots.textContent = '';
      state.scenes.forEach((_, i) => {
        dots.append(h('button', {
          class: i === state.i ? 'on' : '',
          title: state.scenes[i].title || `Scene ${i + 1}`,
          onclick: () => load(i),
        }));
      });
    }

    function renderHotspots() {
      hsLayer.textContent = '';
      for (const a of state.anchors) {
        if (!a.def) continue;
        const btn = h('button', {
          class: 'hs',
          style: { left: `${a.x * 100}%`, top: `${a.y * 100}%` },
          title: a.def.label || 'Info',
          'aria-label': a.def.label || 'Info',
          text: a.def.n || '?',
          onclick: () => openPanel(a),
        });
        btn.dataset.key = a.key;
        hsLayer.append(btn);
      }
    }

    function openPanel(a) {
      if (!a?.def) return;
      panel.textContent = '';
      panel.append(
        h('h4', { text: a.def.label || 'Info' }),
        h('div', { class: 'prose', html: IX.md(a.def.text || '') }),
        h('div', { style: { marginTop: '10px', textAlign: 'right' } }, [
          h('button', { class: 'btn btn-sm', text: 'Tutup', onclick: () => { panel.hidden = true; } }),
        ]),
      );
      panel.hidden = false;
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      for (const b of hsLayer.children) b.classList.toggle('active', b.dataset.key === a.key);
      opts.onHotspot?.(a.key);
    }

    // ---- clock ----
    function setPlaying(on) {
      if (state.playing === on) return;
      state.playing = on;
      btnPlay.innerHTML = on ? ICON.pause : ICON.play;
      btnPlay.title = on ? 'Jeda' : 'Putar';
      badge.querySelector('.dot').classList.toggle('live', on);
      cancelAnimationFrame(state.raf);
      if (on) {
        state.last = performance.now();
        state.raf = requestAnimationFrame(tick);
      }
    }

    function tick(now) {
      const dt = Math.min(0.05, (now - state.last) / 1000);
      state.last = now;
      const def = state.scenes[state.i];
      const dur = Math.max(0.5, def?.dur || 8);
      state.t += (dt * state.speed) / dur;
      if (state.t >= 1) {
        if (def?.loop === 'pingpong') {
          state.t = 1;
          setPlaying(false);
        } else {
          state.t = 1;
          state.hold = def?.hold ?? 1.6;
        }
      }
      draw();
      if (state.hold > 0) {
        state.hold -= dt;
        if (state.hold <= 0) {
          state.hold = 0;
          if (state.i < state.scenes.length - 1) { load(state.i + 1); return; }
          setPlaying(false);
          draw();
          opts.onEnd?.();
          return;
        }
      }
      state.raf = requestAnimationFrame(tick);
    }

    function draw() {
      state.ctl?.update?.(clamp(state.t), { speed: state.speed, state: state.ctl });
      scrub.value = String(Math.round(state.t * 1000));
      scrub.style.setProperty('--p', `${state.t * 100}%`);
      const def = state.scenes[state.i];
      if (typeof def?.caption === 'function') capText.textContent = def.caption(clamp(state.t));
      // dim hotspots that the timeline hasn't reached yet
      for (const btn of hsLayer.children) {
        const a = state.anchors.find((x) => x.key === btn.dataset.key);
        const live = !a?.at || state.t >= a.at[0];
        btn.classList.toggle('dim', !live);
      }
    }

    // ---- controls ----
    btnPlay.onclick = () => {
      if (!state.playing && state.t >= 1) { state.t = 0; draw(); }
      setPlaying(!state.playing);
    };
    btnReplay.onclick = () => { state.t = 0; state.hold = 0; draw(); setPlaying(true); };
    btnPrev.onclick = () => load(state.i - 1);
    btnNext.onclick = () => load(state.i + 1);
    scrub.oninput = () => { state.t = clamp(scrub.value / 1000); state.hold = 0; draw(); };
    speedBtn.onclick = () => {
      state.speed = SPEEDS[(SPEEDS.indexOf(state.speed) + 1) % SPEEDS.length];
      speedBtn.textContent = `${state.speed}×`;
    };
    btnHs.onclick = () => {
      state.showHotspots = !state.showHotspots;
      hsLayer.style.display = state.showHotspots ? '' : 'none';
      btnHs.style.opacity = state.showHotspots ? '1' : '0.45';
      toast(state.showHotspots ? 'Titik info ditampilkan' : 'Titik info disembunyikan', 1400);
    };
    btnFs.onclick = () => {
      if (document.fullscreenElement) document.exitFullscreen();
      else stage.requestFullscreen?.();
    };

    addEventListener('keydown', (e) => {
      if (e.target.matches('input,textarea,button,[contenteditable]')) return;
      if (e.key === ' ') { e.preventDefault(); btnPlay.click(); }
      if (e.key === 'ArrowRight') load(state.i + 1);
      if (e.key === 'ArrowLeft') load(state.i - 1);
      if (e.key === 'r' || e.key === 'R') btnReplay.click();
    });

    // pause when scrolled out of view — a 9-second scene nobody is watching is wasted CPU
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => { if (!e.isIntersecting) setPlaying(false); }, { threshold: 0.15 }).observe(stage);
    }

    return {
      el: stage,
      load,
      setScenes(scenes) { state.scenes = scenes; load(0); },
      play: () => setPlaying(true),
      pause: () => setPlaying(false),
      replay: () => btnReplay.click(),
      goto: (i) => load(i),
      current: () => state.i,
      count: () => state.scenes.length,
      state,
    };
  };
})();