// Data for the mean / median / modus figure, read from the soal text (kept out of the .jsx so the
// family file only exports components and this stays testable under plain Node).
// Reads the soal's own data so the figure matches the question instead of a fixed 6-7-7-8-9:
//   "Mean dari 5 bilangan adalah 20. Empat bilangan ... 18, 22, 19, dan 21"  -> data hilang
//   "Nilai 5 ulangan IPA: 70, 80, 60, 90, 75. Berapa rata-ratanya?"           -> data lengkap
//   "Rata-rata 6 nilai siswa adalah 75. Berapa jumlah seluruh nilai?"         -> jumlah = n x rata-rata
// "1.200" = thousands, "12,5" = decimal comma (Indonesian notation).
const NUM = String.raw`(?:Rp\s*)?\d{1,3}(?:\.\d{3})+(?:,\d+)?|(?:Rp\s*)?\d+(?:,\d+)?`;
const UNIT = String.raw`(?:\s*(?:kg|g|cm|mm|m|km|ml|l|liter|tahun|poin|°C))?`;
const toNum = (s) => Number(String(s).replace(/Rp\s*/i, '').replace(/\.(?=\d{3})/g, '').replace(',', '.'));

export function parseMeanData(text) {
  const src = String(text ?? '').replace(/\*\*/g, '');
  const meanM = src.match(new RegExp(String.raw`(?:mean|rata-rata|rata rata)\b([^.?]*?)(?:adalah|=|yaitu|sebesar|ialah)\s*(${NUM})`, 'i'));
  const mean = meanM ? toNum(meanM[2]) : null;
  const countM = meanM?.[1].match(/(\d+)\s*(?:bilangan|angka|siswa|anak|data|nilai|orang|karung|ulangan|hari|buah|kali|pemain|kelompok|bulan|minggu|tim|kotak|keranjang)/i)
    ?? src.match(/(?:dari|terdiri)\s+(\d+)\s*(?:bilangan|angka|data|nilai)/i);
  const n = countM ? Number(countM[1]) : null;
  // longest comma/"dan" separated list of numbers, ignoring the mean value itself
  const rest = meanM ? src.replace(meanM[0], ' ') : src;
  const listRe = new RegExp(String.raw`(?:${NUM})${UNIT}(?:\s*(?:,\s*dan|,|dan)\s*(?:${NUM})${UNIT})+`, 'gi');
  const lists = [...rest.matchAll(listRe)].map((m) => [...m[0].matchAll(new RegExp(NUM, 'gi'))].map((x) => toNum(x[0])));
  // An unknown inside the data ("12, 15, x, 18") or two data sets (A and B) cannot be drawn as one
  // honest row of boxes — draw nothing rather than a truncated or merged dataset.
  if (/(?:^|[\s,:(])(?:x|y|\?)(?=\s*[,.)]|\s+dan\b|\s*$)/i.test(rest) || lists.length > 1) return { kind: null };
  let values = lists[0] ?? [];
  if (values.length > 14) values = [];
  const changed = /diganti|ditambah|dikurangi|dihapus|keluar|bergabung|digabung|\bbaru\b|menjadi|setelah|dikalikan|dibagi/i.test(src);
  let kind = null;
  if (mean != null && n && values.length === n - 1 && !changed) kind = 'hilang';
  else if (values.length >= 2 && (mean == null || values.length === n)) kind = 'lengkap';
  else if (mean != null && n && n <= 12 && !values.length) kind = 'jumlah';
  // "jika 12 diganti 10 / setelah ditambah ... median baru": the given data's own median or mean is
  // not the answer, so the explanation must not print it as one.
  return { kind, mean, n, values, changed };
}

// Whether the mean/median/modus figure can draw this soal honestly: its own data was read, or it is a
// concept soal without numbers (then a labelled example is fine). matchDiagram uses this to drop the
// figure as a candidate, so a soal it would decline can still go to the next-best figure.
export function meanFigureUsable(text) {
  const stem = String(text ?? '');
  if (parseMeanData(stem).kind) return true;
  return /rata-rata|rata rata|\bmean\b|median|modus|jangkauan|nilai tengah/i.test(stem) && !/\d/.test(stem);
}
