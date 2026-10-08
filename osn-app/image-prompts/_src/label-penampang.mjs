// Names for the parts of the published cut-open (penampang) pictures, so the app can point at the
// part a soal is about during the explanation phase (src/features/diagrams/objekFoto.js). Read off
// each picture by eye at full size — never from the prompt — and only for parts the picture really
// draws correctly; a part drawn wrong is left out rather than labelled.
//
// key  '<id>/<slot>' of the picture scripts/build-objek-foto.mjs publishes as <id>-penampang.webp
// sha  first 12 hex of the sha1 of that PNG: a regenerated picture drops its labels until re-checked
// x, y point ON the part, 0..1 of the picture width/height
// t    name shown (Bahasa Indonesia, textbook term first)
// kw   words in a soal that mean this part (regex source, matched as whole words, lower case)
export default {
  'pembuluh-darah-set/p04-penampang-transparan': {
    sha: '167ba432aef8',
    parts: [
      { x: 0.19, y: 0.40, t: 'arteri (pembuluh nadi)', kw: 'arteri|pembuluh nadi' },
      { x: 0.53, y: 0.36, t: 'kapiler', kw: 'kapiler' },
      { x: 0.82, y: 0.50, t: 'vena (pembuluh balik)', kw: 'vena|pembuluh balik' },
      { x: 0.76, y: 0.41, t: 'katup vena', kw: 'katup' },
    ],
  },
  'bunga-penampang/p03-penampang-belah': {
    sha: 'fcc1661795ae',
    parts: [
      { x: 0.50, y: 0.26, t: 'mahkota bunga', kw: 'mahkota' },
      { x: 0.49, y: 0.32, t: 'kepala putik', kw: 'kepala putik|stigma' },
      { x: 0.50, y: 0.46, t: 'tangkai putik', kw: 'tangkai putik' },
      { x: 0.43, y: 0.375, t: 'kepala sari', kw: 'kepala sari|serbuk sari|benang sari' },
      { x: 0.47, y: 0.57, t: 'bakal buah', kw: 'bakal buah|ovarium' },
      { x: 0.50, y: 0.61, t: 'bakal biji', kw: 'bakal biji|ovul' },
      { x: 0.34, y: 0.57, t: 'kelopak bunga', kw: 'kelopak' },
      { x: 0.50, y: 0.76, t: 'tangkai bunga', kw: 'tangkai bunga' },
    ],
  },
  'ikan-mas/p11-penampang-belah': {
    sha: '3f012fdc3308',
    parts: [
      { x: 0.33, y: 0.41, t: 'insang', kw: 'insang' },
      { x: 0.26, y: 0.47, t: 'tutup insang', kw: 'tutup insang|operkulum' },
      { x: 0.34, y: 0.52, t: 'jantung', kw: 'jantung' },
      { x: 0.48, y: 0.45, t: 'gelembung renang', kw: 'gelembung renang|gelembung udara|kantong udara|melayang' },
      { x: 0.40, y: 0.475, t: 'hati', kw: 'hati' },
      { x: 0.47, y: 0.58, t: 'usus', kw: 'usus' },
      { x: 0.55, y: 0.40, t: 'ginjal', kw: 'ginjal' },
      { x: 0.70, y: 0.50, t: 'tulang belakang', kw: 'tulang belakang|tulang punggung|vertebra' },
    ],
  },
  'bakteri-bentuk-set/p03-penampang-belah': {
    sha: '6c11718410b4',
    parts: [
      { x: 0.47, y: 0.505, t: 'DNA (tanpa membran inti)', kw: 'materi genetik|dna|nukleoid|membran inti|prokariot' },
      { x: 0.40, y: 0.475, t: 'dinding sel', kw: 'dinding sel' },
      { x: 0.445, y: 0.466, t: 'membran sel', kw: 'membran sel|membran plasma' },
      { x: 0.36, y: 0.50, t: 'kapsul', kw: 'kapsul|lapisan lendir' },
      { x: 0.55, y: 0.52, t: 'sitoplasma', kw: 'sitoplasma' },
      { x: 0.575, y: 0.515, t: 'plasmid', kw: 'plasmid' },
      { x: 0.52, y: 0.49, t: 'ribosom', kw: 'ribosom' },
      { x: 0.72, y: 0.54, t: 'flagel', kw: 'flagel|bulu cambuk' },
    ],
  },
  'sel-hewan/p11-penampang-belah': {
    sha: '8f187bbbf565',
    parts: [
      { x: 0.515, y: 0.222, t: 'membran sel', kw: 'membran sel|membran plasma' },
      { x: 0.485, y: 0.52, t: 'inti sel (nukleus)', kw: 'inti sel|nukleus' },
      { x: 0.38, y: 0.685, t: 'mitokondria', kw: 'mitokondria' },
      { x: 0.36, y: 0.52, t: 'retikulum endoplasma', kw: 'retikulum endoplasma' },
      { x: 0.60, y: 0.64, t: 'badan Golgi', kw: 'golgi' },
      { x: 0.45, y: 0.73, t: 'sitoplasma', kw: 'sitoplasma' },
      { x: 0.348, y: 0.388, t: 'lisosom', kw: 'lisosom' },
      { x: 0.53, y: 0.33, t: 'sentriol', kw: 'sentriol' },
    ],
  },
  'sel-ragi/p03-penampang-belah': {
    sha: '02e80f0a94b0',
    parts: [
      { x: 0.47, y: 0.45, t: 'inti sel (nukleus)', kw: 'inti sel|nukleus|eukariot|membran inti' },
      { x: 0.275, y: 0.55, t: 'dinding sel', kw: 'dinding sel' },
      { x: 0.41, y: 0.57, t: 'vakuola', kw: 'vakuola' },
      { x: 0.41, y: 0.385, t: 'mitokondria', kw: 'mitokondria' },
      { x: 0.68, y: 0.48, t: 'tunas (calon sel baru)', kw: 'tunas|bertunas|budding' },
    ],
  },
  'sel-darah-set/p03-penampang-belah': {
    sha: 'abf0c87402b7',
    parts: [
      { x: 0.23, y: 0.50, t: 'sel darah merah (tanpa inti)', kw: 'sel darah merah|eritrosit' },
      { x: 0.56, y: 0.52, t: 'sel darah putih', kw: 'sel darah putih|leukosit' },
      { x: 0.84, y: 0.50, t: 'keping darah', kw: 'keping darah|trombosit' },
    ],
  },
  'otak/p11-penampang-belah': {
    sha: 'c6d147a87904',
    parts: [
      { x: 0.64, y: 0.34, t: 'lobus frontal', kw: 'lobus frontal' },
      { x: 0.78, y: 0.31, t: 'lobus parietal', kw: 'lobus parietal' },
      { x: 0.73, y: 0.42, t: 'lobus temporal', kw: 'lobus temporal' },
      { x: 0.865, y: 0.41, t: 'lobus oksipital', kw: 'lobus oksipital' },
      { x: 0.46, y: 0.61, t: 'otak kecil (serebelum)', kw: 'otak kecil|serebelum|cerebellum' },
      { x: 0.37, y: 0.66, t: 'batang otak', kw: 'batang otak|medula oblongata|sumsum lanjutan' },
      { x: 0.47, y: 0.37, t: 'otak besar (serebrum)', kw: 'otak besar|serebrum|cerebrum' },
      { x: 0.28, y: 0.60, t: 'kelenjar hipofisis', kw: 'hipofisis|pituitari' },
      { x: 0.305, y: 0.535, t: 'hipotalamus', kw: 'hipotalamus' },
    ],
  },
  'insang-ikan/p03-penampang-belah': {
    sha: 'a64e87b57ff9',
    parts: [
      { x: 0.62, y: 0.45, t: 'filamen insang', kw: 'insang|filamen' },
      { x: 0.42, y: 0.40, t: 'tapis insang', kw: 'tapis insang' },
      { x: 0.455, y: 0.70, t: 'lengkung insang', kw: 'lengkung insang|tulang insang' },
    ],
  },
  // the retina layer is not clearly drawn: not labelled
  'mata/p12-penampang-transparan': {
    sha: 'af995e3abada',
    parts: [
      { x: 0.375, y: 0.50, t: 'pupil', kw: 'pupil|anak mata' },
      { x: 0.32, y: 0.43, t: 'iris (selaput pelangi)', kw: 'iris|selaput pelangi' },
      { x: 0.22, y: 0.50, t: 'kornea', kw: 'kornea|selaput bening' },
      { x: 0.505, y: 0.50, t: 'lensa mata', kw: 'lensa mata|lensa' },
      { x: 0.81, y: 0.50, t: 'saraf optik', kw: 'saraf optik|saraf penglihatan' },
      { x: 0.74, y: 0.31, t: 'otot mata', kw: 'otot mata' },
    ],
  },
  'kulit-penampang/p03-penampang-belah': {
    sha: 'e9be31dba16e',
    parts: [
      { x: 0.30, y: 0.40, t: 'epidermis (kulit ari)', kw: 'epidermis|kulit ari' },
      { x: 0.30, y: 0.55, t: 'dermis (kulit jangat)', kw: 'dermis|kulit jangat' },
      { x: 0.35, y: 0.73, t: 'jaringan lemak', kw: 'jaringan lemak|lapisan lemak|hipodermis|subkutan' },
      { x: 0.275, y: 0.605, t: 'kelenjar keringat', kw: 'kelenjar keringat|apokrin|ekrin' },
      { x: 0.51, y: 0.47, t: 'kelenjar minyak', kw: 'kelenjar minyak|sebasea' },
      { x: 0.395, y: 0.53, t: 'akar rambut', kw: 'akar rambut|folikel' },
      { x: 0.495, y: 0.52, t: 'otot penegak rambut', kw: 'otot penegak rambut' },
      { x: 0.39, y: 0.66, t: 'pembuluh darah', kw: 'pembuluh darah|kapiler' },
    ],
  },
  'teratai/p11-penampang-belah': {
    sha: 'c5f7bf9ab9a8',
    parts: [
      { x: 0.775, y: 0.53, t: 'rongga udara di tangkai daun', kw: 'rongga udara|ruang udara|aerenkim|berongga' },
      { x: 0.30, y: 0.25, t: 'daun lebar mengapung', kw: 'daun lebar|daun yang lebar|mengapung' },
      { x: 0.46, y: 0.70, t: 'rimpang', kw: 'rimpang' },
    ],
  },
  'biji-mono-dikotil-set/p03-penampang-belah': {
    sha: 'd14d8af0a9db',
    parts: [
      { x: 0.37, y: 0.44, t: 'endosperma (cadangan makanan)', kw: 'endosperm|endosperma|cadangan makanan' },
      { x: 0.305, y: 0.57, t: 'keping biji jagung (skutelum)', kw: 'skutelum' },
      { x: 0.335, y: 0.55, t: 'lembaga (calon tumbuhan)', kw: 'lembaga|embrio' },
      { x: 0.75, y: 0.60, t: 'dua keping biji (kotiledon)', kw: 'kotiledon|keping biji|berkeping' },
      { x: 0.79, y: 0.47, t: 'calon daun (plumula)', kw: 'plumula|calon daun|calon batang' },
      { x: 0.81, y: 0.58, t: 'calon akar (radikula)', kw: 'radikula|calon akar|akar lembaga' },
      { x: 0.695, y: 0.42, t: 'kulit biji', kw: 'kulit biji|testa' },
    ],
  },
};
