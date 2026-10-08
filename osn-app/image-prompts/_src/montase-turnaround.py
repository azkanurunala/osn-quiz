# python image-prompts/_src/montase-turnaround.py   (dari osn-app/)
# Lembar turnaround (4 tampak sejajar) disusun dari 4 tampak tunggal yang SUDAH lolos review,
# bukan di-generate: model gambar hampir selalu salah menyusun 4 panel (dobel depan, profil searah, 3/4).
# Hanya slot turnaround yang belum "ok" yang diganti; gambar lama disimpan sebagai *.lama.png.
import json, os, re
from PIL import Image, ImageChops, ImageFilter

ROOT = 'image-results'
REV = os.path.join(ROOT, '_review.json')
rev = json.load(open(REV, encoding='utf8'))
upd = {}   # hanya kunci milik skrip ini; digabung ke _review.json yang dibaca ulang tepat sebelum ditulis (sesi lain ikut menulis)
VIEWS = ['depan', 'belakang', 'kiri', 'kanan']
W, H, PAD = 1920, 1080, 40


def trimmed(path):
    """Potong ke isi objek; kembalikan (gambar, masker objek, warna latar)."""
    im = Image.open(path).convert('RGB')
    bg = im.getpixel((2, 2))
    diff = ImageChops.difference(im, Image.new('RGB', im.size, bg)).convert('L')
    mask = diff.point(lambda v: 255 if v > 14 else 0).filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.GaussianBlur(1.5))
    box = mask.getbbox() or (0, 0, im.width, im.height)
    return im.crop(box), mask.crop(box), bg


made = 0
for d, _, files in os.walk(ROOT):
    oid = os.path.basename(d)
    for versi in ('realistis', 'ilustrasi'):
        turn = next((f for f in files if re.match(rf'^p\d\d-{versi}-turnaround\.png$', f)), None) \
            or next((f[:-4] for f in files if re.match(rf'^p\d\d-{versi}-turnaround\.svg$', f)), None)
        if not turn:
            continue
        turn = turn if turn.endswith('.png') else turn + '.png'
        tkey = f'{oid}/{turn[:-4]}'
        auto = rev.get(tkey, {}).get('catatan', '').startswith('Disusun otomatis')   # montase lama: susun ulang
        if rev.get(tkey, {}).get('status') == 'ok' and not auto:
            continue
        singles = []
        for v in VIEWS:
            f = next((f for f in files if re.match(rf'^p\d\d-{versi}-{v}\.png$', f)), None)
            if not f or rev.get(f'{oid}/{f[:-4]}', {}).get('status') != 'ok':
                break
            singles.append(f)
        if len(singles) < 4:
            if auto and rev[tkey].get('status') == 'ok':   # montase lama memuat tampak yang kini ditolak
                upd[tkey] = {'status': 'revisi', 'catatan': f'Disusun otomatis — perlu disusun ulang: tampak {VIEWS[len(singles)]} belum lolos review.'}
            continue
        crops = [trimmed(os.path.join(d, f)) for f in singles]
        bg = (0, 0, 0) if sum(crops[0][2]) < 200 else (255, 255, 255)   # latar polos putih / hitam
        h = H - 2 * PAD
        k = min(1, (W - PAD * 5) / sum(c.width * h / c.height for c, _, _ in crops))   # terlalu lebar: kecilkan semua sama rata
        size = lambda c: (max(1, round(c.width * h / c.height * k)), max(1, round(h * k)))
        ims = [(c.resize(size(c), Image.LANCZOS), m.resize(size(c), Image.LANCZOS)) for c, m, _ in crops]
        sheet = Image.new('RGB', (W, H), bg)
        gap = (W - sum(i.width for i, _ in ims)) / 5
        x = gap
        for i, m in ims:
            sheet.paste(i, (round(x), H - PAD - i.height), m)   # semua berdiri di garis dasar yang sama
            x += i.width + gap
        out = os.path.join(d, turn)
        if os.path.exists(out) and not auto:
            lama = out[:-4] + '.lama.png'
            if os.path.exists(lama):
                os.remove(lama)
            os.rename(out, lama)
            if tkey in rev:
                upd[tkey + '.lama'] = rev[tkey]
        sheet.save(out)
        upd[tkey] = {'status': 'ok', 'catatan': 'Disusun otomatis dari ' + ', '.join(s[:3] for s in singles) +
                     ' (depan, belakang, kiri, kanan) yang sudah lolos review.'}
        made += 1

cur = json.load(open(REV, encoding='utf8'))
cur.update(upd)
json.dump(cur, open(REV, 'w', encoding='utf8'), ensure_ascii=False, indent=2)
print(made, 'lembar turnaround disusun')
