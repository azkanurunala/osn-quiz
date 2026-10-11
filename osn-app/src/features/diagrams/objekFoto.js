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
  // the picture is two SEEDS cut open: not for "batang dikotil", "akar monokotil" or "lingkaran tahun"
  'biji-mono-dikotil-set': 'biji jagung|biji monokotil|biji dikotil|berkeping (?:satu|dua)',
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
  // kw is generic ("ekosistem"); the soal must actually be about a POND, not another biome
  'ekosistem-kolam': /kolam/,
  // kw is generic ("sumur|timba"); the soal must be about the pulley mechanism itself, not water
  // quality/plumbing in general
  'katrol-tetap': /katrol|kerekan|roda (ber)?alur|tali.*(beban|kuasa)|keuntungan mekanik/,
  // kw is generic ("lubang|kedalaman"); must actually be about water pressure, not any hole/depth
  'tekanan-hidrostatis-botol': /hidrostatis|tekanan (air|zat cair)/,
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
  // the picture is the Sun, not the sunflower, a comet passing it, or Moon albedo
  matahari: /bunga matahari|helianthus|zat hijau daun|klorofil|fotosintesis|bintang berekor|komet|ekor panjang|albedo bulan|memantulkan cahaya matahari/,
  // human gametes picture: not for plant fertilisation ("bakal biji", "serbuk sari")
  'sperma-ovum': /tumbuhan|bunga|biji|serbuk sari|putik/,
  // particles of solid, liquid and gas: not for carbon-monoxide poisoning, diarrhoea, decibels,
  // stars/nebulae, or a controlled-variable experiment that just happens to say "cair"/"gas"
  'wujud-zat-set': /karbon monoksida|keracunan|asfiksia|hemoglobin|diare|bab (cair|berdarah)|disentri|desibel|kebisingan|bintang (adalah|merupakan)|nebula|variabel kontrol|pupuk cair/,
  'hati-empedu': /hati-hati|senang hati|rendah hati|baik hati|sepenuh hati|dalam hati|berhati/,
  'hidung-penampang': /pesawat|kereta|kapal|diangkut/,
  'jamur-tiram': /penisilin|penicillium|panu|kurap|mikoriza|ragi|kaki atlet|penyakit|jamur merang/,
  'kulit-penampang': /batuk|kutu|mencangkok|cangkok|salak|kina|pohon|batang|tumbuhan/,
  // the picture shows the foods themselves, which are often the options of these soal
  'sumber-protein-set': /berikut|kecuali|nabati|hewani|sumber|enzim/,
  'tanaman-kacang': /non-legum|selain legum/,
  // small-intestine villi absorb nutrients; water is taken up in the large intestine
  'vili-usus': /penyerapan air|diare/,
  // a bacteriophage infects bacteria; it must not stand for human disease viruses
  'virus-bakteriofag': /penyakit|diare|imun|vaksin|campak|menular|infeksi|flu|demam/,

  // --- added after a text audit of (soal, matched object) pairs found many keyword collisions ---
  // kw "kolam" is generic; a swimming pool, bathtub, or pure number-pattern soal is not an aquarium
  akuarium: /kolam renang|bak mandi|titik-titik|pola bilangan/,
  // kw bare "pesawat" also means "simple machine" (tuas/pesawat sederhana), not an aircraft
  'kendaraan-set': /pesawat sederhana|tuas|katrol|crane|lift\b|eskalator|keran|kemudi/,
  // kw "rangka|tulang" also means a wire/cage/building frame, not the human skeleton
  'kerangka-manusia': /sangkar|kandang|kawat.*(rangka|kerangka)/,
  // kw bare "lampu" also fires on a glow stick (chemiluminescent, no filament/electricity at all)
  'lampu-bohlam': /glow stick|kemiluminesensi/,
  // kw "pegangan" also means a ship's wheel handle, not a pot handle
  'panci-pegangan': /kemudi kapal|helm kapal|roda kemudi/,
  // the picture is cooking-oil/butter/coconut *food*, not crude oil, solar calendars, or acoustics
  'sumber-lemak-set': /minyak bumi|kilang minyak|cracking|barel|cepat rambat bunyi di minyak|jatuh bebas|gerak jatuh/,
  // the picture is specifically a corn plant; salak and bamboo are other monocots, not corn
  'tanaman-jagung': /\bsalak\b|\bbambu\b/,
  // "basal" also means baseline (suhu/ganglia basal in biology), not igneous basalt rock
  'batuan-beku-set': /suhu (tubuh )?basal|ovulasi|ganglia basal/,
  // generic flower-part words (benang sari, putik, mahkota) also describe a tomato flower
  'bunga-sepatu': /\btomat\b/,
  // "hemat energi" also describes an efficient AC unit, nothing to do with light bulbs
  'lampu-led-cfl-set': /\bac\b.*(baru|pendingin|watt|pk\b)|pendingin ruangan/,
  // "mencair/membeku" also means blood clotting, molten iron, or lava solidifying into rock
  'es-batu-mencair': /darah|pembekuan darah|hemofilia|besi mencair|lava|batu lava|logam cair/,
  // "menyaring" also describes a kidney filtering blood, not lab filtration equipment
  filtrasi: /ginjal|organ ekskresi|urine|urin\b/,
  // "tembaga" (copper) is also a mining/geography topic, not an electrical cable
  'kabel-penampang': /tambang|provinsi|kalimantan|papua|freeport/,
  // kw "manik" also means beads for a bracelet/necklace, a different object than a bag of marbles
  'kelereng-kantong': /gelang|kalung|merangkai/,
  // kw "otot" also means leg/calf/thigh muscles, not the arm biceps/triceps pictured
  'otot-lengan': /otot (kaki|tungkai|betis|paha)/,
  // "mineral" is also a rock/geology term (feldspar, gemstones), not dietary minerals
  'sumber-vitamin-mineral-set': /feldspar|batuan|kristal.*(perhiasan|berlapis)|mineral sintetik|intan\b/,
  // "gesek/gaya gesek" also covers shoe soles, pencils on paper, or a hovercraft (which REDUCES
  // friction with an air cushion -- opposite concept)
  'ban-berulir': /sol sepatu|trotoar|hovercraft|pensil.*kertas/,
  // "dongkrak" also means a hydraulic jack (Pascal's principle, a piston, not a screw thread)
  'sekrup-baut': /dongkrak hidrolik|piston/,
  // "sapu" also appears inside "sapu tangan" (handkerchief), unrelated to a broom
  'tuas-jenis-3-set': /sapu tangan|saputangan/,
  // "glukosa" is also the general biology word for photosynthesis/respiration sugar, not diabetes
  glukometer: /fotosintesis|respirasi sel|\batp\b|klorofil/,
  // kw bare "angin" also covers seed dispersal, falling leaves, an anemometer, or acid rain --
  // none of those are about a wind turbine
  'kincir-angin': /anemometer|penyebaran biji|daun kering|hujan asam|\bph\b.*danau/,
  // "generator" also covers a thermoelectric generator (Seebeck effect, no spinning magnet at all)
  'dinamo-sepeda': /termoelektrik|thermoelectric|\bteg\b|efek seebeck/,
  // "kompor" also covers an electric induction stove, which has no flame
  'kompor-gas': /kompor listrik|induksi/,
  // "garam" is also a nutrition/chemistry/buoyancy topic, not the evaporation process pictured
  'penguapan-garam': /konsumsi|kesehatan|mengapung|massa jenis|natrium|klorin|unsur.*senyawa/,
  // "tangki" also means a submarine ballast tank or a fuel tank, not a home water tank
  'tandon-air': /kapal selam|ballast|bensin|mudah menguap|mudah terbakar/,
  // "tangga" also appears inside the fixed phrase "rumah tangga" (household), unrelated to stairs
  'tangga-rumah': /rumah tangga/,
  // the picture is a piggy bank (no interest at all); soal about real bank/cooperative interest
  // (bunga tunggal/majemuk) or gene/seed banks are a different "bank" meaning entirely
  celengan: /bunga (tunggal|majemuk|bank)|suku bunga|per tahun|bank (gen|biji|benih)|koperasi/,
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
  const view = pickView(o, stem, question);
  const parts = view === 'penampang' ? focusParts(o, stem, question) : [];
  return {
    id: 'objek-foto',
    title: o.title,
    objek: {
      id: o.id, file: o.views?.[view] ?? o.file, dark: Boolean(o.dark), view,
      // explanation phase only: the parts this soal is about, pointed at on the cut-open picture
      ...(parts.length ? { parts, ar: o.labels.ar } : {}),
    },
  };
}

// Which view of the object fits the soal. The cut-open section is chosen when the soal (stem or
// options: "Ruang jantung yang ...?" lists the chambers there) names a part that THIS picture has a
// checked label for (label-penampang.mjs), or asks about the inside in general words. A part word
// from some other organism ("kloroplas" in a microscope soal) no longer pulls in a section that does
// not show it. The side profile is for fins and the body outline.
const INSIDE_RE = /penampang|bagian dalam|struktur dalam|susunan dalam|irisan melintang|irisan membujur/;
const SAMPING_RE = /(?<![a-z])(?:samping|menyamping)(?![a-z])|tampak sisi|gurat sisi|sirip/;
const partRe = (p) => new RegExp(`(?<![a-z])(?:${p.kw})(?![a-z])`);

function pickView(o, stem, question) {
  if (!o.views) return 'utama';
  if (o.views.penampang) {
    const opts = Object.values(question?.options ?? {}).map(plain).join(' ');
    if (INSIDE_RE.test(stem) || (o.labels?.parts ?? []).some((p) => partRe(p).test(`${stem} ${opts}`))) return 'penampang';
  }
  if (o.views.samping && SAMPING_RE.test(stem)) return 'samping';
  return 'utama';
}

// Parts to point at: named in the stem first, then in the correct option or its explanation (the
// explanation phase may show the answer; parts named only in wrong options are left out).
function focusParts(o, stem, question) {
  const labelled = o.labels?.parts ?? [];
  const key = question?.answerKey;
  const answer = plain(`${question?.options?.[key] ?? ''} ${question?.analysis?.[key] ?? ''}`);
  const inStem = labelled.filter((p) => partRe(p).test(stem));
  const inAnswer = labelled.filter((p) => !inStem.includes(p) && partRe(p).test(answer));
  return [...inStem, ...inAnswer].slice(0, 3).map(({ x, y, t }) => ({ x, y, t }));
}

/** Figure for a soal: the reviewed object picture when the soal is plainly about one object,
 * otherwise the concept diagram. For MTK, a hand-built SVG diagram is exact (it can draw the
 * soal's own numbers); a photo is only generic flavour, so the diagram wins when both apply. */
export function matchFigure(question, packageSubject) {
  const isMtkSubject = [packageSubject, question?.subTopic].some((s) => String(s ?? '').toLowerCase() === 'mtk');
  if (isMtkSubject) return matchDiagram(question, packageSubject) ?? matchObjekFoto(question, packageSubject);
  return matchObjekFoto(question, packageSubject) ?? matchDiagram(question, packageSubject);
}
