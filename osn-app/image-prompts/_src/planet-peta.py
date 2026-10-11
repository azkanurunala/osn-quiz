"""Planet views rendered from public-domain NASA maps (no Gemini: it cannot rotate a sphere).

Each view is an orthographic projection of an equirectangular map, so depan / belakang / kiri / kanan
are true rotations of the SAME surface. Maps are fetched once from Wikimedia Commons into
image-prompts/_src/_peta/ (not committed).

  python image-prompts/_src/planet-peta.py                       fill every empty slot
  python image-prompts/_src/planet-peta.py --only=bumi,jupiter   some objects only
  python image-prompts/_src/planet-peta.py --preview DIR         write to DIR, touch nothing

Only slots WITHOUT a picture are written; an existing picture is never overwritten.
Run from osn-app/.
"""
import os, sys, urllib.request
import numpy as np
from PIL import Image, ImageFilter

Image.MAX_IMAGE_PIXELS = None
HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, '_peta')
RESULTS = os.path.join('image-results', 'ipa', '05-bumi-antariksa')
UA = 'osn-sd-image-pipeline/1.0 (educational)'
S = 1024   # output size
SS = 2     # supersampling

# name -> (Commons file, license, credit)
MAPS = {
    'earth': ('Whole_world_-_land_and_oceans.jpg', 'Public domain', 'NASA Earth Observatory / Goddard Space Flight Center'),
    'jupiter': ('Jupiter_Cylindrical_Map_-_Dec_2000_PIA07782.jpg', 'Public domain', 'NASA/JPL/Space Science Institute (Cassini)'),
    'mars': ('Mars_Viking_MDIM21_ClrMosaic_1km.jpg', 'Public domain', 'NASA / JPL / USGS (Viking MDIM 2.1)'),
    'mercury': ('Mercury_MESSENGER_MDIS_Basemap_MD3Color_Mosaic_Global_32ppd.jpg', 'Public domain', 'NASA/JHUAPL/Carnegie (MESSENGER MDIS, MD3 mosaic: even lighting)'),
}
VIEW = {'depan': 0, 'belakang': 180, 'kiri': -90, 'kanan': 90}   # relative to the front longitude (kiri = Africa/Europe for Earth)

# object folder -> map, longitude at the map's left edge, front central longitude, limb darkening, style
OBJECTS = {
    # rfrac / gain / gamma only match the look of the views that already exist for the object
    'bumi': dict(tex='earth', lon0=-180, front=118, limb=0.45, rim='earth', rfrac=0.33, gamma=0.8),
    'jupiter': dict(tex='jupiter', lon0=0, front=158, limb=0.55, rfrac=0.275, gain=(1.05, 1.0, 0.94)),   # Great Red Spot (132 E in this map) left of centre
    'mars': dict(tex='mars', lon0=-180, front=0, limb=0.4, rfrac=0.47, gain=(1.45, 1.55, 1.15)),         # back = Cerberus (175 E), kiri = Valles Marineris, kanan = Syrtis Major: same turn as the stock views
    'merkurius': dict(tex='mercury', lon0=-180, front=0, limb=0.3, rfrac=0.44, gain=(1.18, 1.07, 0.96)),
    'venus': dict(tex='venus', lon0=0, front=0, limb=0.4, rfrac=0.27, gain=(0.88, 0.89, 0.92)),
}
SLOT_RE = __import__('re').compile(r'^(p\d\d)-(realistis|ilustrasi)-(depan|belakang|kiri|kanan)$')


def fetch(name):
    f, _, _ = MAPS[name]
    os.makedirs(CACHE, exist_ok=True)
    out = os.path.join(CACHE, name + '.png')
    if os.path.exists(out):
        return out
    raw = os.path.join(CACHE, name + '_full.jpg')
    api = 'https://commons.wikimedia.org/wiki/Special:FilePath/' + f
    req = urllib.request.Request(api, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=600) as r, open(raw, 'wb') as w:
        w.write(r.read())
    im = Image.open(raw).convert('RGB')
    if im.width > 4096:
        im = im.resize((4096, 2048), Image.LANCZOS)
    im.save(out)
    os.remove(raw)
    return out


def venus_texture():
    """Venus in visible light is a nearly featureless pale cloud deck: soft zonal streaks, no hard pattern.
    Filtered noise built in the frequency domain, so it wraps around the sphere without a seam."""
    rng = np.random.default_rng(7)
    W, H = 2048, 1024
    fx = np.fft.fftfreq(W)[None, :]
    fy = np.fft.fftfreq(H)[:, None]
    def layer(sx, sy, amp):
        filt = np.exp(-2 * np.pi ** 2 * ((sx * fx) ** 2 + (sy * fy) ** 2))
        a = np.real(np.fft.ifft2(np.fft.fft2(rng.standard_normal((H, W))) * filt))
        return (a - a.mean()) / (a.std() + 1e-9) * amp
    n = layer(60, 6, 1.5) + layer(22, 3, 0.8)
    base = np.array([236, 222, 176], dtype='float32')
    tex = base[None, None, :] * (1 + n[..., None] / 100.0)
    return np.clip(tex, 0, 255).astype('uint8')


def load_tex(name):
    if name == 'venus':
        return venus_texture()
    return np.array(Image.open(fetch(name)).convert('RGB'))


def sample(tex, u, v):
    H, W, _ = tex.shape
    fx = u * W - 0.5
    fy = np.clip(v * H - 0.5, 0, H - 1.001)
    x0 = np.floor(fx).astype(int); y0 = np.floor(fy).astype(int)
    tx = (fx - x0)[..., None]; ty = (fy - y0)[..., None]
    x0 %= W; x1 = (x0 + 1) % W; y1 = np.minimum(y0 + 1, H - 1)
    c00 = tex[y0, x0]; c10 = tex[y0, x1]; c01 = tex[y1, x0]; c11 = tex[y1, x1]
    return (c00 * (1 - tx) * (1 - ty) + c10 * tx * (1 - ty) + c01 * (1 - tx) * ty + c11 * tx * ty)


def render(tex, lon0, lon_c, limb, rim=None, sat=1.0, lat_c=0.0, rfrac=0.31, gain=(1, 1, 1), gamma=1.0):
    N = S * SS
    R = rfrac * N
    y, x = np.mgrid[0:N, 0:N]
    X = (x + 0.5 - N / 2) / R
    Y = (N / 2 - (y + 0.5)) / R
    r2 = X * X + Y * Y
    inside = r2 <= 1.0
    Z = np.sqrt(np.clip(1 - r2, 0, 1))
    p0 = np.radians(lat_c)
    y1 = Y * np.cos(p0) + Z * np.sin(p0)
    z1 = -Y * np.sin(p0) + Z * np.cos(p0)
    lat = np.degrees(np.arcsin(np.clip(y1, -1, 1)))
    lon = lon_c + np.degrees(np.arctan2(X, z1))
    u = ((lon - lon0) % 360.0) / 360.0
    v = (90.0 - lat) / 180.0
    col = sample(tex, u, v)
    if sat != 1.0:
        lum = col.mean(axis=2, keepdims=True)
        col = np.clip(lum + (col - lum) * sat, 0, 255)
    if gamma != 1.0:
        col = 255.0 * (col / 255.0) ** gamma
    col = np.clip(col * np.array(gain, dtype='float32'), 0, 255)
    mu = Z
    col = col * ((1 - limb) + limb * mu ** 0.6)[..., None]
    if rim == 'earth':       # thin blue atmosphere at the limb
        a = (0.5 * (1 - mu) ** 3)[..., None]
        col = col * (1 - a) + np.array([110, 170, 255]) * a
    img = np.zeros((N, N, 3), dtype='float32')
    img[inside] = col[inside]
    if rim == 'earth':       # glow just outside the disc
        d = np.sqrt(r2)
        glow = np.exp(-((d - 1.0) / 0.035) ** 2) * (d > 1.0) * 0.55
        img += glow[..., None] * np.array([70, 130, 255])
    out = Image.fromarray(np.clip(img, 0, 255).astype('uint8')).resize((S, S), Image.LANCZOS)
    return out


def main():
    argv = sys.argv[1:]
    preview = argv[argv.index('--preview') + 1] if '--preview' in argv else None
    only = next((a[7:].split(',') for a in argv if a.startswith('--only=')), None)
    if preview:
        os.makedirs(preview, exist_ok=True)
    n = 0
    for obj, cfg in OBJECTS.items():
        if only and obj not in only:
            continue
        d = os.path.join(RESULTS, obj)
        files = os.listdir(d)
        slots = sorted({f.split('.')[0] for f in files if SLOT_RE.match(f.split('.')[0]) and 'turnaround' not in f})
        todo = [s for s in slots if not any(f == s + e for f in files for e in ('.png', '.jpg', '.jpeg', '.webp'))]
        if preview:
            todo = slots   # preview shows every view
        if not todo:
            continue
        tex = load_tex(cfg['tex'])
        for s in todo:
            m = SLOT_RE.match(s)
            lon_c = cfg['front'] + VIEW[m.group(3)]
            sat = 1.22 if m.group(2) == 'ilustrasi' else 1.0
            im = render(tex, cfg['lon0'], lon_c, cfg['limb'], cfg.get('rim') if cfg.get('rim') == 'earth' else None, sat,
                        rfrac=cfg.get('rfrac', 0.31), gain=cfg.get('gain', (1, 1, 1)), gamma=cfg.get('gamma', 1.0))
            path = os.path.join(preview, f'{obj}__{s}.png') if preview else os.path.join(d, s + '.png')
            im.save(path)
            n += 1
            print('tulis', path)
    print(n, 'gambar planet')


if __name__ == '__main__':
    main()
