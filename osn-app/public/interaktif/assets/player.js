/* ============================================================================
   player.js — composes play.html: topic scenes, theory, mini quiz, 100-soal quiz.

   Data flow (all lazy, nothing bundled):
     /interaktif/data/hub.json      → topic meta for this page (title, video no…)
     /interaktif/topics/<id>.js     → the scene script (registers window.TOPICS[id])
     /data/<dataFile>               → the same package JSON the video was recorded from
   Answers persist to localStorage under osn-ix:<id> so a half-done 100-soal run
   survives a refresh — same idea as the app's osn-progress.
   ========================================================================== */
(function () {
  'use strict';
  const { h, md, mdInline, clamp, toast } = IX;
  
  const params = new URLSearchParams(location.search);
  const topicId = params.get('id') || '';
  const store = {
    get(k, fallback) {
      try { return JSON.parse(localStorage.getItem(`osn-ix:${topicId}:${k}`)) ?? fallback; } catch { return fallback; }
    },
    set(k, v) {
      try { localStorage.setItem(`osn-ix:${topicId}:${k}`, JSON.stringify(v)); } catch { /* private mode */ }
    },
  };

  function loadScript(src) {
    return new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = res;
      s.onerror = () => rej(new Error(`gagal memuat ${src}`));
      document.head.appendChild(s);
    });
  }
  const loadJson = (url) => fetch(url).then((r) => { if (!r.ok) throw new Error(`${r.status} ${url}`); return r.json(); });

  function fail(title, detail) {
    document.body.innerHTML = '';
    document.body.append(
      h('div', { class: 'ix-wrap', style: { paddingTop: '60px' } }, [
        h('div', { class: 'card q' }, [
          h('h2', { text: title }),
          h('p', { class: 'muted', text: detail }),
          h('a', { class: 'btn btn-primary', href: 'index.html', text: '← Kembali ke daftar topik' }),
        ]),
      ]),
    );
  }

  // ---------------------------------------------------------------- boot ----
  (async function boot() {
    if (!topicId) return fail('Topik tidak ditemukan', 'Alamat halaman ini harus punya ?id=<topik>, misalnya play.html?id=ipa-03d-tuas-campur.');
    if (document.referrer && new URL(document.referrer).origin === location.origin) document.documentElement.classList.add('embedded');

    let hub;
    try { hub = await loadJson('data/hub.json'); }
    catch { return fail('Data tidak terbaca', 'Jalankan lewat server lokal (npm run dev atau npm run preview) lalu buka /interaktif/play.html — halaman ini butuh fetch, jadi tidak bisa dibuka langsung dari file://.'); }

    const meta = hub.babs.flatMap((b) => b.items).find((i) => i.id === topicId);
    if (!meta) return fail('Topik tidak ada di daftar', `"${topicId}" tidak ditemukan di data/hub.json. Jalankan node scripts/build-interactive.mjs.`);

    try { await loadScript(`topics/${topicId}.js`); }
    catch (e) { return fail('Script topik belum ada', `${e.message} — scene untuk topik ini belum ditulis (${meta.title}).`); }

    const topic = window.TOPICS?.[topicId];
    if (!topic) return fail('Script topik kosong', `topics/${topicId}.js tidak mendaftarkan window.TOPICS['${topicId}'].`);

    render(topic, meta);
  })();

  // --------------------------------------------------------------- render ----
  let stage = null;

  function render(topic, meta) {
    document.title = `${meta.title} — Interaktif OSN-SD`;
    const accent = topic.accent || '#38bdf8';
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--accent-soft', topic.accentSoft || `${accent}28`);

    const dataPromise = loadJson(`../data/${meta.dataFile}`).catch(() => null);
    const app = h('div');
    document.body.append(app);

    app.append(topbar(topic, meta), h('main', { class: 'ix-wrap' }, [hero(topic, meta), tabs(topic)]));

    const panels = {
      scenes: h('section', { class: 'sec', id: 'panel-scenes' }),
      teori: h('section', { class: 'sec', id: 'panel-teori', hidden: true }),
      mini: h('section', { class: 'sec', id: 'panel-mini', hidden: true }),
      full: h('section', { class: 'sec', id: 'panel-full', hidden: true }),
    };
    app.querySelector('main').append(panels.scenes, panels.teori, panels.mini, panels.full);

    mountScenes(panels.scenes, topic);
    dataPromise.then((pkg) => {
      if (!pkg) { panels.teori.append(h('p', { class: 'muted', text: 'Teori gagal dimuat.' })); return; }
      mountTeori(panels.teori, pkg);
mountMini(panels.mini, pkg);
    mountFull(panels.full, pkg);
    });

    // tab wiring
    const tabBar = app.querySelector('.tabs');
    tabBar.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      for (const b of tabBar.children) b.setAttribute('aria-selected', String(b === btn));
      for (const [k, p] of Object.entries(panels)) p.hidden = k !== btn.dataset.tab;
      store.set('tab', btn.dataset.tab);
      if (btn.dataset.tab === 'scenes') stage?.play();
    });
    const saved = store.get('tab', 'scenes');
    const startTab = panels[saved] ? saved : 'scenes';
    tabBar.querySelector(`[data-tab="${startTab}"]`)?.click();

    // ctrl/cmd+K → focus the full quiz, '/' jumps back to the illustrations
    addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); tabBar.querySelector('[data-tab="full"]').click(); }
      if (e.key === '/' && !e.target.matches('input,textarea')) { e.preventDefault(); tabBar.querySelector('[data-tab="scenes"]').click(); }
    });

    // ---- stage ----
    function mountScenes(host, topic) {
      host.append(
        h('div', { class: 'sec__head' }, [
          h('h2', { text: 'Ilustrasi & animasi' }),
          h('p', { text: `${topic.scenes.length} scene · klik titik info pada gambar untuk penjelasan` }),
          h('div', { class: 'sec__spacer' }),
          h('span', { class: 'chip', html: '<kbd>Spasi</kbd> putar · <kbd>←</kbd><kbd>→</kbd> ganti scene · <kbd>R</kbd> ulang' }),
        ]),
      );
      const mount = h('div');
      host.append(mount);
      stage = IX.createStage(mount, {
        onEnd: () => { if (stage.current() === stage.count() - 1) toast('Selesai — pindah ke tab Kuis Mini yuk', 2600); },
      });
      stage.setScenes(topic.scenes);

      if (topic.intro?.length) {
        host.append(
          h('div', { class: 'card q', style: { marginTop: '16px' } }, [
            h('h3', { style: { fontSize: '17px', marginBottom: '10px' }, text: 'Inti materi' }),
            h('div', { class: 'prose' }, [h('ul', { style: { paddingLeft: '20px', margin: '0' } }, topic.intro.map((x) => h('li', { html: mdInline(x) })))]),
          ]),
        );
      }

      const deck = h('div', { class: 'deck' });
      topic.scenes.forEach((s, i) => {
        deck.append(
          h('button', {
            class: 'deck__card',
            'aria-current': String(i === 0),
            onclick: () => stage.goto(i),
          }, [
            h('i', { text: `SCENE ${String(i + 1).padStart(2, '0')}` }),
            h('b', { text: s.title || '' }),
            h('span', { text: typeof s.caption === 'function' ? s.caption(0) : s.caption || '' }),
          ]),
        );
      });
      host.append(deck);
    }

    function mountTeori(host, pkg) {
      host.append(h('div', { class: 'sec__head' }, [h('h2', { text: 'Teori' }), h('p', { text: `${pkg.theory?.length || 0} bagian — versi ringkas dari materi paket` })]));
      if (!pkg.theory?.length) return host.append(h('p', { class: 'muted', text: 'Paket ini tidak punya section teori.' }));
      const list = h('div', { class: 'grid', style: { gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))' } });
      (pkg.theory || []).forEach((sec, i) => {
        const d = h('details', { class: 'card', style: { padding: '14px 16px' }, open: i === 0 }, [
          h('summary', { style: { cursor: 'pointer', font: '600 15px var(--font-head)' }, text: sec.title }),
        ]);
        d.append(h('div', { class: 'prose fade-up', style: { marginTop: '10px' }, html: md(sec.content) }));
        list.append(d);
      });
      host.append(list);
    }

    function mountMini(host, pkg) {
      host.append(
        h('div', { class: 'sec__head' }, [
          h('h2', { text: 'Kuis mini' }),
          h('p', { text: '5 soal mewakili dari 100 — campuran Kab/Prov/Nas, sama persis dengan paket aslinya' }),
        ]),
      );
      const picks = IX.quiz.sampleQuestions(pkg.questions || [], 5);
      const box = h('div', { style: { maxWidth: '780px' } });
      host.append(box);
      let i = 0;
      let correct = 0;

      const score = h('div', { class: 'scorebar' }, [
        h('span', { class: 'scorebar__big mono', text: '0/5' }),
        h('div', { class: 'scorebar__meter' }, [h('div', { class: 'scorebar__fill', style: { width: '0%' } })]),
        h('span', { class: 'tiny muted', text: 'kunci & pembahasan lengkap setelah menjawab' }),
      ]);

      function draw() {
        box.textContent = '';
        if (i >= picks.length) {
          const pct = Math.round((correct / picks.length) * 100);
          box.append(
            h('div', { class: 'card finale' }, [
              h('div', { class: 'finale__score', style: { color: pct >= 80 ? 'var(--ok)' : pct >= 50 ? 'var(--warn)' : 'var(--bad)' }, text: `${correct}/${picks.length}` }),
              h('div', { class: 'finale__medal', text: pct >= 80 ? 'Kuat! Lanjut ke 100 soal.' : pct >= 50 ? 'Cukup — ulangi sekali lagi ya.' : 'Boleh jadi, biar materinya masih perlu dipelajari ulang.' }),
              h('div', { style: { marginTop: '18px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' } }, [
                h('button', { class: 'btn', text: '↺ Ulangi kuis mini', onclick: () => { i = 0; correct = 0; draw(); } }),
                h('button', { class: 'btn btn-primary', text: 'Langsung ke 100 soal →', onclick: () => document.querySelector('.tabs [data-tab="full"]').click() }),
                h('a', { class: 'btn', href: 'index.html', text: 'Ganti topik' }),
              ]),
            ]),
          );
          return;
        }
        const { q, index } = picks[i];
        const card = IX.quiz.card(q, {
          no: i + 1,
          total: picks.length,
          onPick: (k) => {
            if (k === q.answerKey) correct++;
            card.replaceWith(IX.quiz.card(q, { no: i + 1, total: picks.length, picked: k, tag: `dari paket #${index + 1}` }));
            box.append(nextBtn());
            score.querySelector('.scorebar__big').textContent = `${correct}/${picks.length}`;
            score.querySelector('.scorebar__fill').style.width = `${(correct / picks.length) * 100}%`;
            nextBtn().focus();
          },
        });
        box.append(score, card, h('div', { class: 'tiny dim', style: { marginTop: '10px' }, text: `Soal asli paket ${meta.fullTitle} · posisi #${index + 1} dari ${pkg.questions.length}` }));
      }
      function nextBtn() {
        return h('button', { class: 'btn btn-primary', style: { marginTop: '14px' }, text: i < picks.length - 1 ? 'Soal berikutnya →' : 'Lihat hasil →', onclick: () => { i++; draw(); window.scrollTo({ top: document.querySelector('#panel-mini').offsetTop - 70, behavior: 'smooth' }); } });
      }
      draw();
    }

    function mountFull(host, pkg) {
      const qs = pkg.questions || [];
      const saved = store.get('full', { answers: {}, at: 0, order: null });
      const answers = saved.answers || {};
      let order = saved.order && saved.order.length === qs.length ? saved.order : qs.map((_, i) => i);
      let at = 0;
      let filter = 'semua';

      const scoreBig = h('span', { class: 'scorebar__big mono' });
      const fill = h('div', { class: 'scorebar__fill' });
      const map = h('div', { class: 'map100' });
      const cardHost = h('div', { style: { maxWidth: '820px' } });
      const filters = h('div', { style: { display: 'flex', gap: '6px', flexWrap: 'wrap' } });

      head();
      host.append(
        h('div', { class: 'scorebar' }, [scoreBig, h('div', { class: 'scorebar__meter' }, [fill]), h('span', { class: 'tiny muted', text: 'jawaban tersimpan otomatis di perangkat ini' })]),
        h('div', { class: 'card', style: { padding: '16px', marginBottom: '14px' } }, [
          h('div', { class: 'tiny dim', style: { marginBottom: '10px' }, text: 'Peta soal — klik nomor untuk melompat' }),
          map,
          h('div', { class: 'legend' }, [
            h('span', { html: '<i style="background:rgba(255,255,255,.09)"></i>belum' }),
            h('span', { html: '<i style="background:rgba(52,211,153,.55)"></i>benar' }),
            h('span', { html: '<i style="background:rgba(248,113,113,.55)"></i>salah' }),
          ]),
        ]),
        filters,
        h('div', { style: { marginTop: '14px' } }, [cardHost]),
      );

      function head() {
        host.prepend(
          h('div', { class: 'sec__head' }, [
            h('h2', { text: 'Kuis lengkap' }),
            h('p', { text: `${qs.length} soal · soal, kunci, dan pembahasan identik dengan video` }),
            h('div', { class: 'sec__spacer' }),
            h('button', { class: 'btn btn-sm', text: 'Acak urutan', onclick: shuffle }),
            h('button', { class: 'btn btn-sm', text: 'Reset', onclick: () => { if (!confirm('Hapus semua jawaban topik ini di perangkat ini?')) return; for (const k of Object.keys(answers)) delete answers[k]; persist(); draw(); } }),
          ]),
        );
      }

      function shuffle() {
        for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
        at = 0;
        persist();
        draw();
        toast('Urutan soal diacak');
      }

      for (const f of ['semua', 'belum', 'benar', 'salah', 'Kab', 'Prov', 'Nas']) {
        filters.append(
          h('button', {
            class: 'btn btn-sm',
            style: f === filter ? { background: 'var(--accent)', borderColor: 'var(--accent)', color: '#06101f' } : {},
            text: f === 'semua' ? 'Semua' : f === 'belum' ? 'Belum dijawab' : f[0].toUpperCase() + f.slice(1),
            onclick: (e) => {
              filter = f;
              for (const b of filters.children) { b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; }
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.color = '#06101f';
              const first = order.find((i) => match(i));
              if (first != null) at = order.indexOf(first);
              draw();
            },
          }),
        );
      }

      function match(i) {
        const a = answers[i];
        if (filter === 'semua') return true;
        if (filter === 'belum') return !a;
        if (filter === 'benar') return a && a === qs[i].answerKey;
        if (filter === 'salah') return a && a !== qs[i].answerKey;
        return IX.quiz.levelOf(qs[i]) === filter;
      }
      const visible = () => order.filter(match);

      function persist() { store.set('full', { answers, at, order }); }

      function draw() {
        const total = Object.keys(answers).length;
        const ok = Object.entries(answers).filter(([i, a]) => a === qs[i].answerKey).length;
        scoreBig.textContent = `${ok}/${total}`;
        fill.style.width = `${total ? (ok / total) * 100 : 0}%`;

        const vis = visible();
        if (!vis.includes(order[at])) at = Math.max(0, order.indexOf(vis[0]));
        const qi = order[at];
        const q = qs[qi];
        const picked = answers[qi];

        map.textContent = '';
        for (const i of vis.length ? vis : order) {
          const a = answers[i];
          const cls = ['map100-btn'];
          map.append(
            h('button', {
              class: `${i === qi ? 'now ' : ''}${a ? (a === qs[i].answerKey ? 'ok' : 'no') : ''}`.trim(),
              text: String(i + 1),
              title: `${IX.quiz.levelOf(qs[i])} · ${IX.quiz.topicOf(qs[i])}`,
              onclick: () => { at = order.indexOf(i); persist(); draw(); },
            }),
          );
        }

        cardHost.textContent = '';
        if (!vis.length) {
          cardHost.append(h('div', { class: 'card finale' }, [h('p', { class: 'muted', text: 'Tidak ada soal pada filter ini.' })]));
          return;
        }

        cardHost.append(
          IX.quiz.card(q, {
            no: qi + 1,
            total: qs.length,
            picked,
            tag: IX.quiz.levelOf(q),
            onPick: (k) => { answers[qi] = k; persist(); draw(); },
          }),
          h('div', { style: { display: 'flex', gap: '10px', marginTop: '14px', flexWrap: 'wrap', alignItems: 'center' } }, [
            h('button', { class: 'btn', text: '← Sebelumnya', onclick: () => step(-1) }),
            h('button', { class: 'btn', text: 'Berikutnya →', onclick: () => step(1) }),
            h('span', { class: 'tiny dim', text: `${at + 1} dari ${vis.length} soal (${filter})` }),
            h('div', { class: 'sec__spacer' }),
            h('span', { class: 'tiny dim', html: '<kbd>A</kbd><kbd>B</kbd><kbd>C</kbd><kbd>D</kbd> menjawab · <kbd>←</kbd><kbd>→</kbd> pindah soal' }),
          ]),
        );

        if (Object.keys(answers).length === qs.length) {
          const pct = Math.round((ok / qs.length) * 100);
          cardHost.append(
            h('div', { class: 'card finale fade-up' }, [
              h('div', { class: 'tiny dim', text: 'Semua soal selesai' }),
              h('div', { class: 'finale__score', style: { color: pct >= 80 ? 'var(--ok)' : pct >= 50 ? 'var(--warn)' : 'var(--bad)' }, text: `${ok}/${qs.length}` }),
              h('div', { class: 'finale__medal', text: pct === 100 ? 'Sempurna. Materi ini sudah dikuasai!' : pct >= 80 ? 'Bagus — tinggal rapikan soal yang salah.' : 'Ulangi scene animasinya, lalu coba lagi.' }),
              h('div', { style: { marginTop: '16px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' } }, [
                h('button', { class: 'btn btn-accent', text: '↺ Ulangi semua', onclick: () => { for (const k of Object.keys(answers)) delete answers[k]; at = 0; persist(); draw(); } }),
                h('button', { class: 'btn', text: 'Tinjau yang salah', onclick: () => { const bad = order.find((i) => answers[i] && answers[i] !== qs[i].answerKey); if (bad != null) { at = order.indexOf(bad); draw(); } } }),
              ]),
            ]),
          );
        }

        function step(dir) {
          const list = visible();
          const cur = list.indexOf(qi);
          const next = list[clamp(cur + dir, 0, list.length - 1)];
          if (next != null) { at = order.indexOf(next); persist(); draw(); cardHost.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        }
      }

      addEventListener('keydown', (e) => {
        if (e.target.matches('input,textarea,select')) return;
        if (host.hidden) return;
        const k = e.key.toUpperCase();
        if (['A', 'B', 'C', 'D'].includes(k) && !answers[order[at]]) { answers[order[at]] = k; persist(); draw(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); nextVisible(1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); nextVisible(-1); }
        function nextVisible(dir) {
          const list = visible();
          const cur = list.indexOf(order[at]);
          const nx = list[Math.min(list.length - 1, Math.max(0, cur + dir))];
          if (nx != null) { at = order.indexOf(nx); persist(); draw(); }
        }
      });

      draw();
    }
  }

  // ---------------------------------------------------------------- shell ----
  function topbar(topic, meta) {
    const back = h('a', { class: 'btn btn-icon', href: 'index.html', title: 'Semua topik', html: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M15.4 4.6 8 12l7.4 7.4 1.4-1.4L10.8 12l6-6z"/></svg>' });
    return h('header', { class: 'ix-top' }, [
      back,
      h('div', { class: 'ix-top__brand' }, [
        h('div', { class: 'ix-top__mark', text: '✦' }),
        h('div', {}, [h('div', { text: 'Interaktif' }), h('div', { class: 'ix-top__sub', text: 'visual explainer' })]),
      ]),
      h('div', { class: 'ix-top__title' }, [h('b', { text: meta.title }), h('span', { text: `${topic.kind || meta.subject} · ${meta.questionCount} soal` })]),
      h('div', { class: 'ix-top__spacer' }),
      h('span', { class: `chip ${meta.subject === 'ipa' ? 'chip-ipa' : 'chip-mtk'}`, text: meta.subject.toUpperCase() }),
      h('span', { class: 'chip', title: 'Nomor urut video di recordings-final/', text: `Video #${meta.n}` }),
      h('a', { class: 'btn btn-sm', href: '../index.html', text: 'Buka di app' }),
    ]);
  }

  function hero(topic, meta) {
    const el = h('section', { class: 'hero' });
    el.append(
      h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' } }, [
        h('span', { class: 'chip chip-accent', text: meta.isChapter ? 'Bab penuh' : meta.subBab || meta.chapter }),
        h('span', { class: 'chip', text: `${meta.questionCount} soal · ${meta.theorySectionCount} bagian teori` }),
        h('span', { class: 'chip', text: topic.kind || (meta.subject === 'ipa' ? 'IPA' : 'Matematika') }),
      ]),
      h('h1', { text: topic.headline || meta.title }),
      h('p', { text: topic.subtitle || '' }),
    );
    return el;
  }

  function tabs(topic) {
    const bar = h('div', { class: 'tabs', role: 'tablist' });
    const mk = (id, label, count) => h('button', { role: 'tab', dataset: { tab: id }, 'aria-selected': 'false' }, [h('span', { text: label }), count ? h('span', { class: 'count', text: String(count) }) : null]);
    bar.append(
      mk('scenes', 'Ilustrasi', topic.scenes.length),
      mk('teori', 'Teori'),
      mk('mini', 'Kuis mini', 5),
      mk('full', 'Kuis 100 soal'),
    );
    return bar;
  }
})();