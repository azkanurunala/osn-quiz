import { DIAGRAM_DATA } from './diagram-data';

// The package metadata is inconsistent: `subTopic` holds the literal "IPA" for whole chapters
// (all 500 ipa-03 questions, 400 of ipa-02), so it cannot be trusted on its own. `level` carries
// the real sub-topic for well-formed rows ("02 · Pencernaan · Kabupaten") and `concept` states the
// correct idea in one line. `analysis`, `steps` and `tips` stay out: they are prose about the
// *options*, so they happily mention "uap air" or "bercabang" as a distractor and drag a
// confidently-wrong diagram onto the screen. Precision beats coverage — a missing figure only
// looks less rich, a wrong one teaches the wrong science.
const JUNK_TOPICS = new Set(['ipa', 'mtk', 'sains', '']);

function normalise(text) {
  return ` ${String(text ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')} `;
}

function topicOf(question) {
  const parts = [];
  const sub = String(question?.subTopic ?? '').trim();
  if (sub && !JUNK_TOPICS.has(sub.toLowerCase())) parts.push(sub);
  const level = String(question?.level ?? '');
  if (level.includes('·')) {
    const mid = level.split('·')[1]?.trim();
    if (mid && !JUNK_TOPICS.has(mid.toLowerCase())) parts.push(mid);
  }
  return parts.join(' ');
}

function haystackOf(question) {
  const fields = [topicOf(question), question?.concept, question?.question];
  let out = '';
  for (const value of fields) {
    if (!value) continue;
    out += normalise(value);
  }
  return out;
}

// The diagram pool is split by subject so an MTK question can never pull up a science figure:
// "variabel" (aljabar) used to match "variabel-penelitian", "termometer" (bilangan bulat) matched
// "alat-pengukuran", "paralel" (jalur kereta) matched "rangkaian-paralel". Missing `subject` on a
// diagram means IPA, so the existing 34 entries need no annotation. A package names its subject
// ("ipa"/"mtk"); the universal "all" packages instead tag each question's `subTopic` with the
// subject, so fall back to that. When neither is known (unit calls), return null and consider both
// pools — this keeps the matcher usable without a package context.
function subjectOf(question, packageSubject) {
  const pkg = String(packageSubject ?? '').trim().toLowerCase();
  if (pkg === 'ipa' || pkg === 'mtk') return pkg;
  const sub = String(question?.subTopic ?? '').trim().toLowerCase();
  if (sub === 'ipa' || sub === 'mtk') return sub;
  return null;
}

// A phrase hit is worth its own length, so a specific multi-word keyword ("rantai makanan") always
// outranks a generic single word ("ekosistem") that happens to appear in the same question.
const phraseWeight = (kw) => kw.length;

// Below this the match is too weak to trust, and the winner must also beat the runner-up by enough
// that the choice is not a coin flip between two plausible diagrams.
const MIN_SCORE = 6;
const MIN_MARGIN = 4;

// "batang TIDAK bercabang" (a botany question) must not match the "bercabang" keyword and pull up a
// parallel-circuit diagram. A keyword hit right after a negation is not evidence of the concept.
const NEGATIONS = ['tidak', 'bukan', 'non', 'tanpa', 'jarang', 'bukanlah'];

function isNegated(haystack, keyword) {
  const needle = ` ${keyword.toLowerCase()} `;
  let from = 0;
  let seen = false;
  for (;;) {
    const at = haystack.indexOf(needle, from);
    // Exhausted the list without finding an un-negated hit: the keyword really is negated.
    if (at === -1) return seen;
    seen = true;
    const before = haystack.slice(Math.max(0, at - 16), at).trim().split(' ').pop();
    if (!before || !NEGATIONS.includes(before)) return false;
    from = at + 1;
  }
}

/**
 * Pick the best diagram for a question, or null when nothing matches confidently.
 *
 * @param {object} question a package question (subTopic, level, concept, question, ...)
 * @param {'ipa'|'mtk'|'all'|undefined} packageSubject subject of the loaded package
 * @returns {{id:string,title:string,caption:string,component:Function}|null}
 */
export function matchDiagram(question, packageSubject) {
  const haystack = haystackOf(question);
  if (!haystack.trim()) return null;

  const subject = subjectOf(question, packageSubject);
  const scored = [];
  for (const diagram of DIAGRAM_DATA) {
    if (subject && (diagram.subject ?? 'ipa') !== subject) continue;
    let score = 0;
    for (const keyword of diagram.keywords) {
      if (!haystack.includes(` ${keyword.toLowerCase()} `)) continue;
      if (isNegated(haystack, keyword)) continue;
      score += phraseWeight(keyword);
    }
    if (score > 0) scored.push({ diagram, score });
  }
  if (!scored.length) return null;

  scored.sort((a, b) => b.score - a.score);
  const [first, second] = scored;
  if (first.score < MIN_SCORE) return null;
  if (second && first.score - second.score < MIN_MARGIN) return null;

  return first.diagram;
}