# Human Body 3D Scenes — Batch 3b (Health Topics) — Design

Status: Approved
Date: 2026-09-23
Scope: `osn-app`, sub-bab `ipa-02i`, `ipa-02j`, `ipa-02k`, `ipa-02l`, `ipa-02m`, `ipa-02n`

## Goal

Cover 6 of the remaining 8 ch.02 sub-bab with 3D scenes: Gizi (02i), Penyakit Menular (02j), Penyakit Tidak Menular (02k), Kebersihan (02l), Diagnosis Gejala (02m), Bioteknologi (02n). These topics are conceptual/behavioral rather than clean anatomical structures, so — unlike Batch 3a, where every scene followed one "organ inside a body" shape — this batch splits into two visual templates.

**Explicitly out of scope: Reproduksi (02g) and Pubertas (02h) get no 3D scene at all.** Both are sensitive material for SD kelas 5-6, and the HuBMAP dataset used for real organ models has no reproductive-organ coverage. They stay as plain soal (no `SCENE_REGISTRY` entry, no Jelajah 3D listing, no inline Practice widget) — decided explicitly with the user rather than defaulted into.

## Two templates

**Template A — "Tubuh + Penanda"** (Penyakit Tidak Menular, Penyakit Menular, Kebersihan, Diagnosis Gejala): full reuse of Batch 3a's human-body infrastructure — `SceneCanvas`, `HumanBody`, `OrganModel`, `ViewToggle`, `InfoPanel`. Same "Dalam Tubuh" / "Detail Organ" toggle pattern, same primitive-marker-at-a-point idiom already proven by Sistem Saraf's `SENSE_MARKERS`.

**Template B — "Objek Berdiri Sendiri"** (Gizi, Bioteknologi): new pattern. No `HumanBody`, no `ViewToggle` — there is no body for these two topics, just a standalone object (a plate, a DNA helix + fermentation jar) sitting in the scene. Single view, orbit-able, click parts for info. Still reuses `SceneCanvas` (with `background="clinical"`) and `InfoPanel`.

No changes needed to `SceneCanvas`, `InfoPanel`, `OrganModel`, `HumanBody`, or `ViewToggle` — Template B scenes simply don't render `<HumanBody>` or `<ViewToggle>`, which was already optional/composable in every Batch 3a scene.

## Per-topic design

**02k — Penyakit Tidak Menular** (`noncommunicable.jsx` + `noncommunicable-data.js`) — Template A
Pure reuse of 4 real organ models already shipped in Batch 3a, each rendered with a "sakit" tint (dark patches, via `OrganModel`'s existing `tint`/`opacity` props — no new component capability needed) instead of the healthy look:
- Jantung (`heart.glb`, tint dark red patches) → Jantung Koroner (penyumbatan pembuluh darah jantung)
- Paru-paru (`lung.glb`, tint dark gray) → PPOK / paru-paru perokok
- Otak (`brain.glb`, tint dark patch) → Stroke
- Ginjal (`kidney_l.glb` + `kidney_r.glb`, tint dark) → Gagal Ginjal Kronis

Zero new model assets. 4 clickable parts, each fact explains cause (usually lifestyle: rokok, kurang gerak, makanan tinggi lemak/gula) since "tidak menular" = not infectious, cause is internal/lifestyle — an important conceptual contrast with 02j for SD-level understanding.

**02j — Penyakit Menular** (`communicable.jsx` + `communicable-data.js`) — Template A
Hybrid: one real-model reuse + new primitive pathogen markers.
- TBC: reuse `lung.glb` tinted, real model (same file as Batch 3a's Pernapasan scene)
- Flu/Pilek: new primitive "virus" marker at hidung — icosahedron with small cone spikes (`IcosahedronGeometry` + a handful of child `ConeGeometry` meshes, or a simplified spiky-sphere look via displaced icosahedron vertices — implementation detail decided in the plan)
- Diare: new primitive "bakteri" marker at perut — elongated capsule (`CapsuleGeometry`, already in three.js core)
- Cacar/Campak: new primitive marker at kulit lengan — small red bump cluster (a few tiny spheres)

4 clickable parts. Facts emphasize transmission route (droplet, air, kontak, makanan/minuman) — the conceptual contrast with 02k.

**02l — Kebersihan** (`hygiene.jsx` + `hygiene-data.js`) — Template A
5 primitive markers at hygiene-relevant points, same shape/pattern as `SENSE_MARKERS`: tangan, gigi, kuku, rambut, kulit. Each fact is a hygiene tip (cuci tangan pakai sabun, sikat gigi 2x sehari, dll) rather than an anatomical fact — content differs, marker mechanism is identical to Batch 3a's nervous-system markers.

**02m — Diagnosis Gejala** (`symptoms.jsx` + `symptoms-data.js`) — Template A
5 primitive markers at common symptom locations: demam (dahi), batuk (dada/tenggorokan), sakit perut (perut), ruam (kulit lengan), pusing (kepala). Each fact names the symptom and 1-2 illnesses it commonly signals — framed as a visual primer, not the soal's actual answer (the sub-bab's 100 soal remain independent text-based gejala→diagnosis case studies; this scene is supplementary context, not a diagnosis tool).

**02i — Gizi** (`nutrition.jsx` + `nutrition-data.js`) — Template B
"Isi Piringku" — Indonesia's official nutrition guideline (replaces the older "4 Sehat 5 Sempurna" still commonly taught but outdated). A flat disc (piring) divided into 4 wedges via `CircleGeometry`'s `thetaStart`/`thetaLength` params: Karbohidrat (makanan pokok — 1/3), Protein (lauk-pauk — 1/6), Sayur (1/3), Buah (1/6), plus a small cylinder ("gelas") beside the plate for air minum. 5 clickable parts, each fact: food group's function + 2-3 example foods.

**02n — Bioteknologi** (`biotech.jsx` + `biotech-data.js`) — Template B
Two standalone objects in one scene:
- DNA double helix: procedurally built from two offset sine-wave curves (base-pair "rungs" as small connecting cylinders/lines at intervals) — pure math + three.js primitives, no model file or new library.
- Tabung fermentasi: a cylinder with a lid primitive, a few small spheres inside suggesting fermentation gas bubbles.

2 clickable parts. DNA → rekayasa genetika / bioteknologi modern; tabung fermentasi → bioteknologi konvensional (tempe, tape, yogurt, oncom — all curriculum-standard SD examples).

## Toggle pattern

Template A scenes: identical to Batch 3a — "Dalam Tubuh" / "Detail Organ" buttons, `key={mode}` remount fix, same camera-position pattern.

Template B scenes: no toggle. Single view, camera framed to show the whole object on mount, no mode state.

## Registry additions

```js
'ipa-02i': { component: NutritionScene, label: 'Gizi Seimbang' },
'ipa-02j': { component: CommunicableScene, label: 'Penyakit Menular' },
'ipa-02k': { component: NoncommunicableScene, label: 'Penyakit Tidak Menular' },
'ipa-02l': { component: HygieneScene, label: 'Kebersihan Diri' },
'ipa-02m': { component: SymptomsScene, label: 'Diagnosis Gejala' },
'ipa-02n': { component: BiotechScene, label: 'Bioteknologi' },
```

(`ipa-02g` Reproduksi and `ipa-02h` Pubertas get no entry — explicit exclusion, not an oversight.)

## File structure

```
osn-app/src/features/human-body/
  noncommunicable.jsx + noncommunicable-data.js + noncommunicable-data.test.mjs
  communicable.jsx + communicable-data.js + communicable-data.test.mjs
  hygiene.jsx + hygiene-data.js + hygiene-data.test.mjs
  symptoms.jsx + symptoms-data.js + symptoms-data.test.mjs
  nutrition.jsx + nutrition-data.js + nutrition-data.test.mjs
  biotech.jsx + biotech-data.js + biotech-data.test.mjs
```

All import `SceneCanvas`/`InfoPanel` from `../astronomy/`, `OrganModel`/`HumanBody`/`ViewToggle` from `./` — same cross-folder pattern as Batch 3a.

## Testing / verification plan

Same as Batch 3a: node-runnable data-existence check per module (Template A modules assert referenced `.glb` paths exist on disk; Template B modules have no model paths to check, so their test asserts data-shape only — field presence, array lengths), `npx eslint`, `npm run build`, then a live Playwright pass across all 6 new scenes checking: zero console errors, plausible marker/object positions, click-to-info works, and (Template A only) Detail Organ framing is reasonable. Plus a regression spot-check that the 12 Batch 3a/2 scenes still work (same registry file gets touched again).

## Out of scope (explicitly deferred)

- Reproduksi (02g), Pubertas (02h) — no 3D scene, decided explicitly (see Goal section).
- Video recording (`isCleanMode`) integration — still deferred from the original pilot.
- Any future ch.02 sub-bab beyond the 14 covered across Batch 3a (6) + Batch 3b (6) + the 2 explicit exclusions.
