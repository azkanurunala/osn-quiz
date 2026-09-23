# Astronomy 3D Scenes — Batch 2 (Bumi & Antariksa) — Design

Status: Approved
Date: 2026-09-23
Scope: `osn-app`, sub-bab `ipa-05b`, `ipa-05c`, `ipa-05d`, `ipa-05e`, `ipa-05k`

## Goal

Extend the single-topic 3D pilot (`ipa-05a` Tata Surya, already shipped) to 5 more sub-bab in the same Bumi & Antariksa chapter: Lapisan Bumi (05b), Rotasi & Revolusi Bumi (05c), Fase Bulan (05d), Gerhana (05e), Atmosfer (05k). Each gets its own 3D scene in the standalone viewer and as an inline widget during practice, exactly like the pilot — but this batch also refactors the pilot's one-off plumbing into shared infrastructure, since 6 scenes now need the same boilerplate.

Human-body-system topics (chapter 02, all 14 sub-bab) are an explicitly separate, later batch — not part of this spec. See "Out of scope."

## Why shared infrastructure now

The pilot (`ipa-05a`) hardcoded: a single `SolarSystemScene` mounted at a single nav tab, and a single `subBabId === 'ipa-05a'` check in `PracticeArea.jsx`. With 6 scenes that pattern doesn't scale — the viewer tab needs to become a picker (list of available 3D topics), and `PracticeArea.jsx` needs a lookup instead of a growing chain of `===` checks. A registry (`subBabId -> scene component`) solves both.

The 6 scenes also share real boilerplate (WebGL-availability fallback, `Suspense`, the Milky Way `Environment` background, ambient/point lighting, `OrbitControls`) that today lives inline in `solar-system.jsx`. Extracting it once avoids copying the same ~15 lines into 5 more files, and means a future lighting/background fix (like the two we already made post-pilot) only needs to happen in one place.

Two more patterns repeat across scenes and get their own shared pieces:
- A textured, self-rotating, clickable sphere (what `Planet`/`Sun` already do) — generalized into `CelestialBody`.
- A concentric-layer sphere (Earth's internal layers for 05b, atmosphere shells for 05k) — one `ConcentricLayers` component with a `mode: 'cutaway' | 'shell'` prop, since both are "several nested spherical layers, click one for info," just rendered differently (a wedge cut out of solid layers vs. full transparent shells).

## File structure

```
osn-app/src/features/
  solar-system.jsx + solar-system-data.js          # existing (ipa-05a) — refactored to import the shared pieces below

  astronomy/
    SceneCanvas.jsx          # shared: WebGL fallback + Suspense + Environment(background) + lights + OrbitControls
    CelestialBody.jsx        # shared: textured sphere, optional self-rotation, click-to-select
    InfoPanel.jsx             # shared: overlay panel for the selected object (generalized PlanetInfoPanel)
    ConcentricLayers.jsx     # shared: nested spherical layers, mode: 'cutaway' | 'shell'
    registry.js               # SCENE_REGISTRY: { [subBabId]: { component, label } }
    earth-layers.jsx + earth-layers-data.js         # ipa-05b
    earth-motion.jsx + earth-motion-data.js         # ipa-05c
    moon-phases.jsx + moon-phases-data.js           # ipa-05d
    eclipse.jsx + eclipse-data.js                   # ipa-05e
    atmosphere.jsx + atmosphere-data.js             # ipa-05k
```

`solar-system.jsx`/`solar-system-data.js` stay at the top level (not moved) to keep this diff reviewable — it starts importing the shared pieces from `./astronomy/` instead of duplicating them. (Moving the pilot's own files into `astronomy/` for full consistency is a trivial follow-up, not required for this batch.)

## Shared components

**`SceneCanvas({ size, interactive, cameraPosition, minDistance, maxDistance, children })`**
Wraps: WebGL-availability check + fallback message, `<Canvas>`, `<Suspense fallback={null}>`, `<Environment files={BACKGROUND_TEXTURE} background />`, `ambientLight`/`pointLight` (same intensities tuned for the pilot: 0.7 / 6, `decay={0}`), `{interactive && <OrbitControls .../>}`, and renders `children` inside. Every scene becomes: pick body positions/animation, wrap in `<SceneCanvas>`.

**`CelestialBody({ position, radius, texture, rotationSpeed = 0, id, onSelect, material = 'standard' })`**
A textured sphere via `useTexture`, optionally self-rotating each frame, calls `onSelect(id)` on click when provided. `material: 'basic'` for self-luminous bodies (the Sun, reused from the pilot's approach), `'standard'` (default) for lit bodies. Does NOT handle orbital motion itself — the parent scene drives `position` (as a prop, reactively, or via a ref passed in) since each topic's motion is different (revolution vs. libration vs. static).

**`InfoPanel({ title, subtitle, body, onClose })`**
Same glass-card overlay as the pilot's `PlanetInfoPanel`, generalized to arbitrary title/subtitle/body text instead of planet-specific fields.

**`ConcentricLayers({ layers, mode, onSelect })`**
`layers`: array of `{ id, name, innerRadius, outerRadius, color, opacity, fact }`. `mode: 'cutaway'` renders each layer as a `SphereGeometry` with a fixed wedge removed (`thetaLength` = 2π minus a shared cutaway angle, same angular start for every layer so the cut-away reveals a consistent cross-section), opaque material. `mode: 'shell'` renders each layer as a full sphere, `transparent: true`, `opacity: layer.opacity`, so inner layers/the body they surround stay visible through the outer ones. Clicking a layer calls `onSelect(id)`.

## Per-topic design

**05b — Lapisan Bumi** (`earth-layers.jsx`)
`ConcentricLayers mode="cutaway"` with 4 layers (radii schematic, not to real proportion, so all 4 stay visibly distinct on screen):
1. Kerak Bumi — outermost, thin, uses the Earth day texture (`2k_earth_daymap.jpg`, already in `public/textures/`) so it's recognizable — fact: lapisan terluar tempat kita tinggal, tebal rata-rata ~35 km di daratan.
2. Mantel — fact: lapisan terbesar, batuan panas yang bergerak sangat lambat (semi-plastis), ~2900 km tebalnya.
3. Inti Luar — fact: besi-nikel cair, pergerakannya menghasilkan medan magnet Bumi.
4. Inti Dalam — fact: pusat Bumi, besi-nikel padat meski bersuhu ~5000–6000°C, karena tekanan sangat besar.
No orbit/animation — a static cutaway the student rotates via `OrbitControls` to look inside.

**05c — Rotasi & Revolusi Bumi** (`earth-motion.jsx`)
Sun (`CelestialBody material="basic"`, reuses `SUN.texture`) fixed near center-ish; Earth (`CelestialBody`) orbits it once every `orbitPeriodSeconds` (schematic, fast enough to see in a few seconds — not 365 real days) while also self-rotating around its own axis, tilted 23.5° (`group` wrapping the Earth mesh with a fixed `rotation.z` or `rotation.x` offset for the tilt, independent from the spin animation). Day/night falls out naturally from the point light + Earth's texture — no extra code needed for that part. Click Earth → info panel explains rotasi (24 jam → siang-malam) vs revolusi (365 hari → pergantian musim, karena kombinasi revolusi + kemiringan sumbu).

**05d — Fase Bulan** (`moon-phases.jsx`)
Earth (`CelestialBody`, static or slow self-rotation) at center; Moon (`CelestialBody`, needs a moon texture — see "New texture asset" below) orbits Earth. A **directional light** (not the point light at the sun's old position) represents sunlight coming from one fixed direction, so as the Moon orbits, the camera (fixed, outside the Earth-Moon system, e.g. same position as `SceneCanvas`'s default) sees the Moon's lit crescent/gibbous/full appearance change naturally — this is real lighting producing the phases, not a swapped texture per phase. Click Moon → info panel shows the current phase name, computed from the orbit angle at click time (8 named phases: Bulan Baru, Sabit Awal, Kuartir Awal, Cembung Awal, Purnama, Cembung Akhir, Kuartir Akhir, Sabit Akhir — every 45°) plus a one-line explanation of what causes phases.

**05e — Gerhana** (`eclipse.jsx`)
Sun, Earth, Moon (all `CelestialBody`) plus two buttons: "Gerhana Matahari" and "Gerhana Bulan" (plain HTML buttons overlaid on the canvas, like `PlanetInfoPanel`'s overlay pattern — not 3D UI). Clicking one sets a React state (`'solar' | 'lunar'`) that repositions the three bodies into a straight line:
- `solar`: Moon directly between Sun and Earth (new-moon alignment) — shows how the Moon's shadow can fall on Earth.
- `lunar`: Earth directly between Sun and Moon (full-moon alignment) — shows how Earth's shadow can fall on the Moon.
A schematic shadow cone (a semi-transparent `ConeGeometry`, not real-time shadow mapping — avoids the performance/complexity cost of enabling Three.js shadows for a single demo scene) is drawn from the blocking body, pointing away from the Sun, to make the alignment concept visible rather than just three dots in a line. Click any body → info panel explains why an eclipse needs this exact alignment (and why it doesn't happen every month — the Moon's orbit is tilted ~5° relative to Earth's orbit around the Sun, so exact alignment is rare — one extra fact worth including here for the "why not monthly" question every student asks).

**05k — Atmosfer** (`atmosphere.jsx`)
`ConcentricLayers mode="shell"` around a static Earth (`CelestialBody`, real texture, slow self-rotation), 5 layers going outward:
1. Troposfer (0–12 km) — fact: tempat terjadinya cuaca (awan, hujan, angin); berisi ~75% massa atmosfer.
2. Stratosfer (12–50 km) — fact: berisi lapisan ozon yang menyerap radiasi UV Matahari.
3. Mesosfer (50–85 km) — fact: lapisan tempat meteor terbakar habis sebelum mencapai Bumi.
4. Termosfer (85–600 km) — fact: tempat aurora & Stasiun Luar Angkasa (ISS) mengorbit; suhu sangat tinggi tapi terasa dingin karena partikelnya sangat jarang.
5. Eksosfer (600–10.000 km) — fact: lapisan terluar, batas transisi menuju luar angkasa, partikelnya sangat jarang.
Radii schematic (not to real proportional altitude — troposfer would be invisibly thin next to eksosfer at true scale), each layer's opacity low enough that Earth and inner layers stay visible through outer ones.

## New texture asset needed

05d and 05e both show the Moon, which has no texture in `public/textures/` yet (05a–05c/05k never needed one). Source it the same way as the existing set — Solar System Scope provides `2k_moon.jpg` (same CC BY 4.0 licensing as the rest, add to `ATTRIBUTION.txt`). Verify it's a real image (not an HTML error page) the same way the pilot's textures were verified, before committing.

## Integration points

**`registry.js`**
```js
export const SCENE_REGISTRY = {
  'ipa-05a': { component: SolarSystemScene, label: 'Tata Surya' },
  'ipa-05b': { component: EarthLayersScene, label: 'Lapisan Bumi' },
  'ipa-05c': { component: EarthMotionScene, label: 'Rotasi & Revolusi Bumi' },
  'ipa-05d': { component: MoonPhasesScene, label: 'Fase Bulan' },
  'ipa-05e': { component: EclipseScene, label: 'Gerhana' },
  'ipa-05k': { component: AtmosphereScene, label: 'Atmosfer' },
};
```

**Viewer tab (`App.jsx` + a new `AstronomyViewer.jsx` replacing `SolarSystemViewer.jsx`)**
The single "Tata Surya 3D" nav tab becomes "Jelajah 3D" (or similar) and renders a picker: a row/grid of the 6 `SCENE_REGISTRY` entries by label: clicking one shows that scene full-size (same `SolarSystemScene`-style full view), with a way to go back to the picker. `SolarSystemViewer.jsx` is replaced by this (its current single-scene behavior becomes the "one entry selected" state of the picker).

**`PracticeArea.jsx`**
Replace the pilot's `{subBabId === 'ipa-05a' && <SolarSystemScene .../>}` with a registry lookup: `const entry = SCENE_REGISTRY[subBabId]; {entry && <entry.component interactive size="inline" />}`. Same insertion point as the pilot (end of filter-chips block, before `filterTotal === 0`), same constraint: the `isCleanMode` recording branch stays untouched.

## Testing / verification plan

Same approach as the pilot: `npx eslint`, the production build (`npm run build`), and a Playwright script (reusing/extending the pilot's `test_solar_system.py` pattern) that for each of the 6 registry entries: opens the viewer picker, selects that topic, confirms a canvas renders with zero console errors, drags to orbit, clicks a labeled part (planet/layer/body) and confirms the info panel shows the right content; then separately confirms the `PracticeArea` inline widget renders correctly for each of the 5 new sub-bab and that quiz flow (answer/check) still works. Each new data module also gets a plain-`node`-runnable check (same pattern as `solar-system-data.test.mjs`): required fields present, referenced texture files exist on disk, and any per-topic invariant worth asserting (e.g., 05b's 4 layer radii strictly increasing; 05k's 5 layer radii strictly increasing; 05d's phase-name function returns all 8 names across a full orbit).

## Out of scope (explicitly deferred)

- All 14 chapter-02 (Tubuh Manusia & Kesehatan) sub-bab — a separate, later batch with its own brainstorm/spec/plan cycle (per user decision, tackled after this batch ships).
- Video recording (`isCleanMode`) integration — still deferred from the original pilot spec, unchanged by this batch.
- Real-time shadow mapping for the eclipse scene (schematic shadow cone instead).
- Astronomically accurate scale/timing for any scene (all orbits/radii/periods stay schematic, as established in the pilot).
