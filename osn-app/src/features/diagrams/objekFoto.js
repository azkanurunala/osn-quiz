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
// telur-ayam: only "telur ayam"; frog spawn, ovovivipar eggs or "foam berbentuk telur" are not it.
const KW_OVERRIDE = {
  'kura-kura': 'penyu',
  'telur-ayam': 'telur ayam',
  // Generic catalog words that pull in other organisms or non-biology meanings.
  'cacing-tanah': 'cacing tanah',
  benalu: 'benalu',
  'cumi-cumi': 'cumi-cumi|cumi',
  kepiting: 'kepiting',
  rafflesia: 'raf+lesia|padma raksasa',
  'spons-porifera': 'porifera|spons laut|bunga karang|hewan spons',
  stetoskop: 'stetoskop',
  'sumber-protein-set': 'sumber protein|protein',
  'tanaman-kacang': 'tanaman kacang|kacang tanah|biji kacang|kecambah kacang|bintil akar|legum',
  'tulang-belakang': 'tulang belakang|ruas tulang belakang|vertebra|skoliosis|lordosis|kifosis',
};

// The soal must also say this, or the picture is only loosely related ("jaringan listrik",
// "pertukaran gas pada tumbuhan", "mata tunas").
const REQUIRE = {
  // the carp stands for "a fish" only in soal about fish in general, not for other named species
  'ikan-mas': /ikan mas|sirip|sisik|insang|pisces|kelompok ikan|ikan bernapas|bernapas menggunakan|ikan bergerak/,
  'daun-sejajar-menyirip-menjari-set': /daun/,
  alveolus: /alveolus|paru/,
  'bola-sepak': /bola/,
  'jantung-penampang': /jantung/,
  'kantong-semar': /kantong semar|nepenthes/,
  'jamur-rhizopus': /rhizopus|jamur roti|jamur tempe|ragi tempe/,
  'pembuluh-darah-set': /darah|arteri|vena|kapiler|nadi|pembuluh balik/,
  'penampang-daun': /daun|stomata|mesofil|palisade/,
  'sel-tumbuhan': /tumbuhan/,
  'sel-hewan': /hewan|membran sel/,
  mata: /pupil|kedip|lensa mata|kornea|retina|cacat mata|kelainan (pada )?mata|kesehatan mata|gangguan mata|rabun|buta warna|berkedip|debu (masuk )?(di|ke) mata/,
};

// Generic words several objects share; a specific name in the same stem wins over them.
const WEAK = new Set(['ikan', 'telur', 'ulat', 'larva', 'pupa']);

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
  'gurita', 'tali putri', 'remora', 'rayap', 'kutu', 'vanili', 'ngengat', 'rosela', 'rami', 'planaria',
  'lipan', 'lintah', 'kanguru', 'koala', 'kuda laut',
  'lele', 'mujair', 'nila', 'gurame', 'cupang', 'buntal', 'arwana', 'tuna', 'goby', 'koki', 'koi', 'salmon', 'bandeng', 'teri',
  // venomous snakes: the snake picture is a non-venomous rat snake
  'kobra', 'piton', 'sanca', 'ular berbisa', 'ular derik'];

// Contexts a specific picture cannot illustrate. ayam: the picture is a rooster, which does not
// lay or brood eggs.
const NOT_FOR = {
  ayam: /betina|induk|bertelur|mengeram|dierami/,
  // human uterus picture: soal about animal pregnancy or vivipary in general
  'janin-rahim': /hewan|mamalia/,
  // the picture is the Sun, not the sunflower
  matahari: /bunga matahari|helianthus|zat hijau daun|klorofil|fotosintesis/,
  // human gametes picture: not for plant fertilisation ("bakal biji", "serbuk sari")
  'sperma-ovum': /tumbuhan|bunga|biji|serbuk sari|putik/,
  'hati-empedu': /hati-hati|senang hati|rendah hati|baik hati|sepenuh hati|dalam hati|berhati/,
  'hidung-penampang': /pesawat|kereta|kapal|diangkut/,
  'jamur-tiram': /penisilin|penicillium|panu|kurap|mikoriza|ragi|kaki atlet|penyakit/,
  'kulit-penampang': /batuk|kutu|mencangkok|cangkok|salak|kina|pohon|batang|tumbuhan/,
  // the picture shows the foods themselves, which are often the options of these soal
  'sumber-protein-set': /berikut|kecuali|nabati|hewani|sumber|enzim/,
  'tanaman-kacang': /non-legum|selain legum/,
  // small-intestine villi absorb nutrients; water is taken up in the large intestine
  'vili-usus': /penyerapan air|diare/,
  // a bacteriophage infects bacteria; it must not stand for human disease viruses
  'virus-bakteriofag': /penyakit|diare|imun|vaksin|campak|menular|infeksi|flu|demam/,
};

const BEFORE = /(?:mirip|seperti|menyerupai|bagaikan|layaknya|daging|susu|sate|sop|soto|bulu|kulit|pukat)\s+(?:\S+\s+)?$/;
// Also non-biology uses of the word: "mata tunas", "hidung pesawat", "kulit batang".
const AFTER_FOOD = /^\s+(?:goreng|bakar|panggang|rebus|geprek|potong|tunas|gergaji|pencaharian|uang|pisau|angin|air|kaki|pelajaran|rantai|pesawat|kereta|batang|pohon|buah|kayu|telur|bawang|jeruk)\b/;
// A breed or species word right after the name means a different animal than the one drawn.
const AFTER_BREED = /^\s+(?:holstein|brahman|limosin|siam|anggora|angora|persia|hutan|liar|sanca|piton|kobra|boa|hijau|laut|air tawar|komodo|kampung jantan|hitam|putih|kotak)\b/;

const OBJECTS = OBJEK_FOTO.map((o) => {
  const kw = (KW_OVERRIDE[o.id] ?? o.kw).replace(/\\b/g, '');
  // Catalog kw is a regex source with its own \b; whole-word guards replace it consistently.
  return { ...o, re: new RegExp(`(?<![a-z])(?:${kw})(?![a-z])`, 'gi') };
});
const OTHER_RE = new RegExp(`(?<![a-z])(?:${[
  ...OTHER_ORGANISMS.filter((w) => !OBJECTS.some((o) => { o.re.lastIndex = 0; return o.re.test(w); })),
  // "burung" alone is a second animal ("burung dan ayam"); "burung elang" is just the eagle.
  String.raw`burung(?!\s+(?:elang|cenderawasih|jalak|maleo|unta))`,
].join('|')})(?![a-z])`);

const plain = (text) => String(text ?? '')
  .replace(/```[\s\S]*?```/g, ' ')
  .replace(/[*_`]/g, '')
  .toLowerCase();

function hitsIn(stem, raw) {
  const hits = [];
  for (const o of OBJECTS) {
    // matchAll starts from the regex's lastIndex, which an earlier .test() may have left behind.
    o.re.lastIndex = 0;
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

// A comma right after a number+unit ("panjang 50 cm, lebar 30 cm") separates measurements, not
// named items ("ikan, katak, kadal"); only the latter means "this soal names several objects".
const UNIT_COMMA = /\d\s*(cm|mm|m|km|kg|g|ons|kuintal|ton|liter|l|ml|detik|menit|jam|hari|rp)\s*,/gi;
function inCommaList(stem, o) {
  for (const sentence of stem.split(/[.?!\n]/)) {
    o.re.lastIndex = 0;
    if (!o.re.test(sentence)) continue;
    const commas = (sentence.match(/,/g) ?? []).length;
    const unitCommas = (sentence.match(UNIT_COMMA) ?? []).length;
    if (commas - unitCommas >= 2) return true;
  }
  return false;
}

/**
 * @returns {{id:'objek-foto', title:string, objek:{id:string,file:string,dark:boolean}}|null}
 */
export function matchObjekFoto(question, packageSubject, { anyPicture = false } = {}) {
  const isMtkSubject = [packageSubject, question?.subTopic].some((s) => String(s ?? '').toLowerCase() === 'mtk');
  const raw = String(question?.question ?? '').replace(/```[\s\S]*?```/g, ' ').replace(/[*_`]/g, '');
  const stem = raw.toLowerCase();
  if (!stem.trim()) return null;
  if (/→|->|⇒/.test(stem) || OTHER_RE.test(stem)) return null;
  // A bullet list of pairs/cases is a matching task, not a soal about one object.
  if ((stem.match(/(^|\n)\s*-\s/g) ?? []).length >= 2) return null;
  // "Perhatikan gambar berikut": our picture would be mistaken for the soal's own (missing) figure.
  if (/perhatikan gambar|gambar berikut|gambar di (atas|bawah)|^gambar\s/.test(stem.trim())) return null;

  const hit = single(hitsIn(stem, raw), stem);
  // anyPicture: audit only, to rank which unreviewed objects would unlock the most soal.
  if (!hit || (!hit.o.file && !anyPicture)) return null;
  // MTK story problems name animals too ("Pak Budi punya 12 ayam"); only an MTK-catalog object
  // itself (bab starts with "mtk") may illustrate an MTK soal, never an incidental IPA mention.
  if (isMtkSubject && !hit.o.bab?.startsWith('mtk')) return null;
  if (hit.mentions.some((m) => m.otherKind || m.notTheAnimal)) return null;
  if (hit.mentions.every((m) => m.young)) return null;
  const { o } = hit;
  if (NOT_FOR[o.id]?.test(stem)) return null;
  if (REQUIRE[o.id] && !REQUIRE[o.id].test(stem)) return null;
  for (const opt of Object.values(question?.options ?? {})) {
    o.re.lastIndex = 0;
    if (o.re.test(plain(opt))) return null;
  }
  if (inCommaList(stem, o)) return null;
  const view = pickView(o, stem, question?.options);
  return { id: 'objek-foto', title: o.title, objek: { id: o.id, file: o.views?.[view] ?? o.file, dark: Boolean(o.dark), view } };
}

// Which view of the object fits the soal. A soal about an inner part (heart chambers, eye layers,
// stem tissues) gets the cut-open section; one about fins or the body outline gets the side profile.
// Options count here (unlike for the object match): "Ruang jantung yang ...?" lists the chambers there.
// Named inner parts: checked in the stem and the options. Vague words ("bagian", "lapisan",
// "ruangan", "saraf") are left out: "lapisan ozon" or "ruangan gelap" are not about the inside.
const PART_RE = /(?<![a-z])(?:serambi|bilik|katup jantung|sekat jantung|aorta|vena|arteri|alveol\w*|bronk\w*|trakea|lobus|korteks|medula|nefron|glomerulus|lensa mata|retina|kornea|pupil|koklea|rumah siput|gendang telinga|tulang pendengaran|inti sel|nukleus|sitoplasma|vakuola|kloroplas|mitokondria|dinding sel|membran sel|ribosom|xilem|floem|kambium|empulur|stomata|mesofil|palisade|benang sari|kepala sari|putik|bakal buah|bakal biji|endosperma|kotiledon|radikula|plumula|dentin|pulpa|kuning telur|putih telur|kantong udara|kalaza|vili|jonjot usus|folikel|dermis|epidermis|kelenjar keringat|insang|gelembung renang)(?![a-z])/;
// Generic "show me the inside" wording: stem only.
const INSIDE_RE = /penampang|bagian dalam|struktur dalam|susunan dalam|irisan melintang|irisan membujur/;
const SAMPING_RE = /(?<![a-z])(?:samping|menyamping)(?![a-z])|tampak sisi|gurat sisi|sirip/;

function pickView(o, stem, options) {
  if (!o.views) return 'utama';
  const opts = Object.values(options ?? {}).map(plain).join(' ');
  if (o.views.penampang && (INSIDE_RE.test(stem) || PART_RE.test(`${stem} ${opts}`))) return 'penampang';
  if (o.views.samping && SAMPING_RE.test(stem)) return 'samping';
  return 'utama';
}

/** Figure for a soal: the reviewed object picture when the soal is plainly about one object,
 * otherwise the concept diagram. For MTK, a hand-built SVG diagram is exact (it can draw the
 * soal's own numbers); a photo is only generic flavour, so the diagram wins when both apply. */
export function matchFigure(question, packageSubject) {
  const isMtkSubject = [packageSubject, question?.subTopic].some((s) => String(s ?? '').toLowerCase() === 'mtk');
  if (isMtkSubject) return matchDiagram(question, packageSubject) ?? matchObjekFoto(question, packageSubject);
  return matchObjekFoto(question, packageSubject) ?? matchDiagram(question, packageSubject);
}
