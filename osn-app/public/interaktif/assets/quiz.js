/* ============================================================================
   quiz.js — shared question rendering for both quiz modes (mini + full 100).

   The app already renders these 25k+ questions inside React (PracticeArea).
   The interactive pages are standalone, so this file is a small vanilla twin:
   same 4-option + "analisis tiap opsi" + langkah + tips contract, no build step.
   ========================================================================== */
(function () {
  'use strict';
  const { h, md, mdInline } = IX;
  const KEYS = ['A', 'B', 'C', 'D'];

  /** the generator emits a few dirty subTopic/level strings (section heading leaked in) */
  const levelOf = (q) => (/Nas/i.test(q.level) ? 'Nas' : /Prov/i.test(q.level) ? 'Prov' : 'Kab');
  const topicOf = (q) => String(q.subTopic || '').replace(/^[^A-Za-z0-9(]*/, '').trim() || 'Konsep umum';

  /**
   * Deterministic, level-balanced sample. Teachers re-open the same topic and
   * expect the same 5 questions, so no random shuffling here.
   */
  function sampleQuestions(questions, n = 5) {
    const buckets = { Kab: [], Prov: [], Nas: [] };
    questions.forEach((q, i) => buckets[levelOf(q)].push(i));
    const total = questions.length;
    if (!total) return [];
    // largest-remainder quota on the real Kab/Prov/Nas mix (50/30/20 for campur)
    const quota = { Kab: 0, Prov: 0, Nas: 0 };
    let assigned = 0;
    for (const lv of ['Kab', 'Prov', 'Nas']) {
      quota[lv] = buckets[lv].length ? Math.max(1, Math.round((buckets[lv].length / total) * n)) : 0;
      assigned += quota[lv];
    }
    // fix rounding drift, then fall back to whatever is left if a bucket ran dry
    let drift = n - assigned;
    while (drift !== 0) {
      const order = drift > 0 ? ['Kab', 'Prov', 'Nas'] : ['Nas', 'Prov', 'Kab'];
      let moved = false;
      for (const lv of order) {
        const delta = drift > 0 ? 1 : -1;
        if (quota[lv] + delta >= 0 && buckets[lv].length) {
          quota[lv] += delta;
          drift -= delta;
          moved = true;
          if (!drift) break;
        }
      }
      if (!moved) break; // fewer distinct levels than requested slots
    }
    const out = [];
    for (const lv of ['Kab', 'Prov', 'Nas']) {
      const b = buckets[lv];
      for (let k = 0; k < Math.min(quota[lv], b.length); k++) {
        const idx = Math.round((k * (b.length - 1)) / Math.max(1, Math.min(quota[lv], b.length) - 1));
        const i = b[clampIdx(idx, b.length)];
        if (!out.includes(i)) out.push(i);
      }
    }
    out.sort((a, b) => a - b);
    return out.slice(0, n).map((i) => ({ q: questions[i], index: i }));
  }
  const clampIdx = (v, len) => (v < 0 ? 0 : v > len - 1 ? len - 1 : v);

  /** option buttons; picked = the learner's answer (undefined until they choose) */
  function options(q, { picked, onPick, disabled }) {
    const wrap = h('div', { class: 'opts' });
    for (const k of KEYS) {
      const text = q.options?.[k] ?? '';
      const isKey = k === q.answerKey;
      const isMine = picked === k;
      const cls = ['opt'];
      if (picked) {
        if (isKey) cls.push('correct');
        else if (isMine) cls.push('wrong');
        else cls.push('muted');
      }
      wrap.append(
        h('button', {
          class: cls.join(' '),
          disabled: disabled || !!picked,
          onclick: () => onPick?.(k),
        }, [
          h('span', { class: 'opt__key', text: k }),
          h('span', { class: 'opt__t', html: mdInline(text) }),
        ]),
      );
    }
    return wrap;
  }

  /** the whole "kunci + pembahasan" block — the part the skill insists on */
  function feedback(q, picked) {
    const ok = picked === q.answerKey;
    const box = h('div', { class: 'fb fade-up' });
    box.append(h('div', { class: `fb__verdict ${ok ? 'ok' : 'no'}`, text: ok ? '✓ Tepat sekali!' : `✗ Kurang tepat — kuncinya ${q.answerKey}` }));
    if (q.concept) box.append(h('div', { class: 'fb__concept', html: mdInline(q.concept) }));

    const rows = h('div', { class: 'analysis' });
    for (const k of KEYS) {
      const why = q.analysis?.[k];
      const rowCls = ['analysis__row'];
      if (k === q.answerKey) rowCls.push('is-key');
      else if (k === picked) rowCls.push('is-mine');
      rows.append(
        h('div', { class: rowCls.join(' ') }, [
          h('div', { class: 'analysis__k', text: k }),
          h('div', { class: 'analysis__v', html: `<b>${mdInline(q.options?.[k] || '')}</b>${why ? ` — ${mdInline(why)}` : ''}` }),
        ]),
      );
    }
    box.append(rows);

    if (q.steps?.length) {
      box.append(h('ul', { class: 'steps', style: { paddingLeft: '0', margin: '14px 0 0' } },
        q.steps.map((s, i) => h('li', {}, [h('i', { text: String(i + 1) }), h('span', { html: mdInline(s) })]))));
    }
    if (q.tips) box.append(h('div', { class: 'tip prose', html: `<b>Tip:</b> ${mdInline(q.tips)}` }));
    return box;
  }

  function card(q, { no, total, picked, onPick, tag }) {
    const box = h('div', { class: 'card q fade-up' });
    const meta = h('div', { class: 'q__meta' }, [
      h('span', { class: 'q__no', text: no ? `Soal ${no}${total ? ` / ${total}` : ''}` : 'Soal' }),
      h('span', { class: 'chip chip-accent', text: levelOf(q) }),
      h('span', { class: 'chip', text: topicOf(q) }),
    ]);
    if (tag) meta.append(h('span', { class: 'chip', text: tag }));
    box.append(meta, h('div', { class: 'q__text', html: mdInline(q.question) }), options(q, { picked, onPick }));
    if (picked) box.append(feedback(q, picked));
    return box;
  }

  IX.quiz = { KEYS, levelOf, topicOf, sampleQuestions, options, feedback, card };
})();