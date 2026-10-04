import { OBJEK_FOTO } from './objek-foto-data';
import { matchDiagram } from './matchDiagram';

// Picks a reviewed object picture (public/objek/, built from image-results/) for an IPA soal.
//
// The bar is "the picture is clearly what the soal is about", so every doubt means no picture:
//   - only the question stem is read (options and explanations mention distractors);
//   - exactly one organism/object may be named there: a second one (catalog or not) means a
//     comparison or a food-chain role question, and one picture would favour the wrong party;
//   - the object must not appear in any option (the picture would point at that option);
//   - no comma list or food chain arrows around it ("kucing, ayam, ikan", "padi → tikus → ular");
//   - the mention must be the animal itself, not "paruh mirip bebek", "ayam goreng", "anak ayam",
//     or another breed/species than the one drawn ("sapi Holstein" vs the Bali cow in the picture).
// Names are matched as whole words, so "telur" does not fire on "bertelur".

// Catalog kw that is wider than its picture. kura-kura: the picture is a green sea turtle, which
// cannot pull its head into its shell, so it must not illustrate land/freshwater "kura-kura".
// telur-ayam: claim "telur ayam" as a phrase so it wins over the "ayam" (rooster) picture.
const KW_OVERRIDE = {
  'kura-kura': 'penyu',
  'telur-ayam': 'telur ayam|telur',
};

// Generic words several objects share; a specific name in the same stem wins over them.
const WEAK = new Set(['ikan', 'telur', 'ulat', 'larva', 'pupa', 'karang', 'udang', 'kodok', 'siput', 'gurita', 'tiram', 'tokek', 'itik']);

// Same word, different animal: the catalog notes that fruit bats do not echolocate.
const TIEBREAK = [
  {
    ids: ['kelelawar-ekolokasi', 'kelelawar'],
    pick: (stem) => (/ekolokasi|echolocation|gema|ultrason|bunyi|sonar|gua|gelap|menabrak|mangsa|serangga/.test(stem) ? 'kelelawar-ekolokasi'
      : /kalong|kelelawar buah|penyerbuk|menyebar(kan)? biji|buah/.test(stem) ? 'kelelawar' : null),
  },
];

// Common organisms with no catalog picture. Naming one next to a catalog object makes the soal
// about a relationship or comparison, which a single picture cannot show fairly. ("manusia" is not
// here: "jantung manusia" is about the heart.)
const OTHER_ORGANISMS = ['tikus', 'kadal', 'anjing', 'kambing', 'kuda', 'babi', 'monyet', 'rusa', 'singa',
  'rubah', 'serigala', 'platipus', 'belut', 'burung unta', 'pinguin', 'kerbau', 'domba', 'unta', 'zebra',
  'jerapah', 'kanguru', 'beruang', 'macan', 'musang', 'landak', 'tupai', 'merpati', 'bangau', 'cacing',
  'kura-kura', 'mangga', 'padi', 'jagung', 'pisang', 'durian', 'kelapa', 'rumput', 'bayam', 'kacang',
  // "burung" alone is a second animal ("burung dan ayam"); "burung elang" is just the eagle.
  'burung(?!\s+(?:elang|cenderawasih|jalak|maleo|unta))'];

const BEFORE = /(?:mirip|seperti|menyerupai|bagaikan|layaknya|daging|susu|sate|sop|soto|bulu|kulit)\s+(?:\S+\s+)?$/;
const AFTER_FOOD = /^\s+(?:goreng|bakar|panggang|rebus|geprek|potong)\b/;
// A breed or species word right after the name means a different animal than the one drawn.
const AFTER_BREED = /^\s+(?:holstein|brahman|limosin|siam|anggora|angora|persia|hutan|liar|sanca|piton|kobra|boa|hijau|laut|air tawar|komodo|kampung jantan)\b/;

const OBJECTS = OBJEK_FOTO.map((o) => {
  const kw = (KW_OVERRIDE[o.id] ?? o.kw).replace(/\\b/g, '');
  // Catalog kw is a regex source with its own \b; whole-word guards replace it consistently.
  return { ...o, re: new RegExp(`(?<![a-z])(?:${kw})(?![a-z])`, 'gi') };
});
const OTHER_RE = new RegExp(`(?<![a-z])(?:${OTHER_ORGANISMS
  .filter((w) => !OBJECTS.some((o) => { o.re.lastIndex = 0; return o.re.test(w); }))
  .join('|')})(?![a-z])`);

const plain = (text) => String(text ?? '')
  .replace(/```[\s\S]*?```/g, ' ')
  .replace(/[*_`]/g, '')
  .toLowerCase();

function hitsIn(stem, raw) {
  const hits = [];
  for (const o of OBJECTS) {
    const mentions = [...stem.matchAll(o.re)].map((m) => {
      const before = stem.slice(Math.max(0, m.index - 30), m.index);
      const after = stem.slice(m.index + m[0].length, m.index + m[0].length + 20);
      const rawAfter = raw.slice(m.index + m[0].length, m.index + m[0].length + 20);
      return {
        word: m[0],
        start: m.index,
        end: m.index + m[0].length,
        // "Sapi Holstein", "Kucing Siam": a capitalised name right after = a specific breed.
        otherKind: AFTER_BREED.test(after) || /^\s+[A-Z][a-z]{2,}/.test(rawAfter),
        notTheAnimal: BEFORE.test(before) || AFTER_FOOD.test(after),
        young: /\banak\s+$/.test(before),
      };
    });
    if (mentions.length) hits.push({ o, mentions, words: mentions.map((m) => m.word) });
  }
  // "telur ayam" also contains "ayam": a mention inside a longer one belongs to the longer one.
  return hits
    .map((h) => ({
      ...h,
      mentions: h.mentions.filter((m) => !hits.some((g) => g !== h
        && g.mentions.some((n) => n.start <= m.start && n.end >= m.end && n.end - n.start > m.end - m.start))),
    }))
    .filter((h) => h.mentions.length);
}

function single(hits, stem) {
  if (hits.length <= 1) return hits[0] ?? null;
  const strong = hits.filter((h) => h.mentions.some((m) => !WEAK.has(m.word)));
  if (strong.length === 1) return strong[0];
  const ids = hits.map((h) => h.o.id).sort().join(',');
  for (const rule of TIEBREAK) {
    if ([...rule.ids].sort().join(',') !== ids) continue;
    const id = rule.pick(stem);
    return id ? hits.find((h) => h.o.id === id) : null;
  }
  return null;
}

function inCommaList(stem, o) {
  for (const sentence of stem.split(/[.?!\n]/)) {
    o.re.lastIndex = 0;
    if (o.re.test(sentence) && (sentence.match(/,/g) ?? []).length >= 2) return true;
  }
  return false;
}

/**
 * @returns {{id:'objek-foto', title:string, objek:{id:string,file:string}}|null}
 */
export function matchObjekFoto(question, packageSubject) {
  // MTK story problems name animals too ("Pak Budi punya 12 ayam"); those never get a picture.
  if ([packageSubject, question?.subTopic].some((s) => String(s ?? '').toLowerCase() === 'mtk')) return null;
  const raw = String(question?.question ?? '').replace(/```[\s\S]*?```/g, ' ').replace(/[*_`]/g, '');
  const stem = raw.toLowerCase();
  if (!stem.trim()) return null;
  if (/→|->|⇒/.test(stem) || OTHER_RE.test(stem)) return null;

  const hit = single(hitsIn(stem, raw), stem);
  if (!hit?.o.file) return null;
  if (hit.mentions.some((m) => m.otherKind || m.notTheAnimal)) return null;
  if (hit.mentions.every((m) => m.young)) return null;
  const { o } = hit;
  for (const opt of Object.values(question?.options ?? {})) {
    o.re.lastIndex = 0;
    if (o.re.test(plain(opt))) return null;
  }
  if (inCommaList(stem, o)) return null;
  return { id: 'objek-foto', title: o.title, objek: { id: o.id, file: o.file } };
}

/** Figure for a soal: the reviewed object picture when the soal is plainly about one object,
 * otherwise the concept diagram. */
export function matchFigure(question, packageSubject) {
  return matchObjekFoto(question, packageSubject) ?? matchDiagram(question, packageSubject);
}
