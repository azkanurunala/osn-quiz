# Human Body 3D Scenes — Batch 3a (Organ Systems) — Design

Status: Approved
Date: 2026-09-23
Scope: `osn-app`, sub-bab `ipa-02a`, `ipa-02b`, `ipa-02c`, `ipa-02d`, `ipa-02e`, `ipa-02f`

## Goal

Extend the 3D-scene pattern (established by the Bumi & Antariksa batches) to the 6 clearest-structured Tubuh Manusia & Kesehatan sub-bab: Sistem Pencernaan (02a), Pernapasan (02b), Peredaran Darah (02c), Ekskresi (02d), Saraf & Indera (02e), Rangka & Otot (02f). The remaining 8 ch.02 sub-bab (Reproduksi, Pubertas, Gizi, 2× Penyakit, Kebersihan, Soal Terapan, Bioteknologi — mostly conceptual/list-based rather than anatomical) are a separate, later batch (3b) with their own design pass, since they likely need a different visual language than "organ inside a body."

Each of the 6 scenes gets a toggle between two views: **Dalam Tubuh** (organ shown in-place inside a translucent stylized body silhouette, for spatial context) and **Detail Organ** (the organ alone, larger/centered, for close inspection) — both requested explicitly, not a choice between them.

## Reused infrastructure (no changes needed)

The registry pattern from Batch 2 pays off here: `SCENE_REGISTRY` (`src/features/astronomy/registry.js`) already drives both the picker viewer and `PracticeArea`'s inline widget from one lookup table. Adding these 6 topics means **adding 6 entries to that one file** — `App.jsx` and `PracticeArea.jsx` need zero changes this batch. `InfoPanel` (click-to-info overlay) is reused as-is.

## Changes to shared infrastructure

**`SceneCanvas` gets a `background` prop** (`'space' | 'clinical'`, default `'space'` — every existing astronomy scene keeps working unmodified). `'space'` is today's behavior (`<Environment>` with the Milky Way texture). `'clinical'` skips `<Environment>` entirely, sets the `<Canvas>` to a transparent background (`gl={{ alpha: true }}`), and the wrapper `<div>` gets a soft blue-gray gradient (Tailwind classes, e.g. `bg-gradient-to-br from-blue-50 to-slate-100`) showing through — no new texture asset needed, since a CSS gradient does the job. Lighting (ambient + point light) is unchanged in both modes.

## New shared component: `HumanBody`

`src/features/human-body/HumanBody.jsx` — a stylized humanoid silhouette built from primitives (a sphere for the head, capsules for torso/arms/legs), rendered translucent (low opacity, `depthWrite={false}` — applying the lesson learned from the `ConcentricLayers` depth-write bug in Batch 2 from the start) so organs positioned inside it stay visible. Used by all 6 scenes' "Dalam Tubuh" view as shared visual context. Not clickable itself (no `onSelect`) — it's a backdrop, not a data-bearing object.

(02f's skeleton is its own dedicated set of primitives, not a reuse of `HumanBody` — the skeleton's bones need to be individually clickable/labeled, which is a different interface than `HumanBody`'s single translucent backdrop mesh. Some visual overlap between the two is accepted, not worth coupling them.)

## Per-topic design

**02a — Sistem Pencernaan** (`digestive.jsx` + `digestive-data.js`)
A connected path of primitives from mouth to rectum: Mulut → Kerongkongan (esophagus, a narrow tube) → Lambung (stomach, an enlarged bulge) → Usus Halus (small intestine, a tighter zigzag of short segments suggesting coiling) → Usus Besar (large intestine) → rectum. 5 clickable segments (mulut, kerongkongan, lambung, usus-halus, usus-besar), each with a mechanical/chemical-digestion fact appropriate for SD level.

**02b — Sistem Pernapasan** (`respiratory.jsx` + `respiratory-data.js`)
Hidung (nose, small sphere at head) → Trakea (trachea, vertical cylinder) → Bronkus (two short branching cylinders) → Paru-paru (two lung blobs, left/right of upper torso). 4 clickable parts.

**02c — Sistem Peredaran Darah** (`circulatory.jsx` + `circulatory-data.js`)
Jantung (heart — two overlapping spheres for a simple heart-like silhouette) at chest center, plus two curved tube loops extending out and back representing Pembuluh Arteri (red, blood leaving the heart) and Pembuluh Vena (blue, blood returning) — schematic, not anatomically exact vessel branching. 3 clickable parts.

**02d — Sistem Ekskresi** (`excretory.jsx` + `excretory-data.js`)
Ginjal (two kidneys — flattened/elongated spheres) → Ureter (two thin tubes) → Kandung Kemih (bladder, a sphere). 3 clickable parts. The kidney's fact also briefly notes skin/lungs/liver as additional excretory organs (sweat, CO2, bile) rather than modeling them separately — keeps the 3D model focused on the clearest excretory pathway while staying factually complete for the curriculum's stated scope.

**02e — Sistem Saraf & Indera** (`nervous.jsx` + `nervous-data.js`)
Otak (brain, an irregular blob at the head) + Sumsum Tulang Belakang (spinal cord, a long thin cylinder down the back) as the nervous-system backbone, plus 5 small colored markers at the head for the senses: Mata, Telinga, Hidung, Lidah, Kulit (touch, represented once near the head rather than modeling skin over the whole body). 7 clickable parts total.

**02f — Sistem Rangka & Otot** (`skeletal.jsx` + `skeletal-data.js`)
A simplified skeleton (its own primitives, not `HumanBody`): Tengkorak (skull, sphere), Tulang Belakang (spine, a chain of small segments), Tulang Rusuk (ribcage, a simplified curved-arc shape), Tulang Lengan (arm bones, two capsules), Tulang Kaki (leg bones, two capsules) — all bone-colored (off-white) and individually clickable. Otot (muscle) is a translucent reddish overlay using the same body-silhouette shape as `HumanBody` (visually: bones underneath, muscle layer wrapping around), also clickable as its own 6th part.

## Toggle pattern (per scene)

Matches `eclipse.jsx`'s existing button-overlay pattern (two `<button>`s top-left, not 3D UI): "Dalam Tubuh" (default) and "Detail Organ". Local `mode` state controls: whether `<HumanBody background="clinical" />`-context renders, the organ group's position/scale (small + offset when in-body, large + centered when in detail), and `SceneCanvas`'s `cameraPosition`/`minDistance`/`maxDistance` (closer camera for detail mode).

## Registry additions

```js
'ipa-02a': { component: DigestiveScene, label: 'Sistem Pencernaan' },
'ipa-02b': { component: RespiratoryScene, label: 'Sistem Pernapasan' },
'ipa-02c': { component: CirculatoryScene, label: 'Sistem Peredaran Darah' },
'ipa-02d': { component: ExcretoryScene, label: 'Sistem Ekskresi' },
'ipa-02e': { component: NervousScene, label: 'Sistem Saraf & Indera' },
'ipa-02f': { component: SkeletalScene, label: 'Sistem Rangka & Otot' },
```

## File structure

```
osn-app/src/features/human-body/
  HumanBody.jsx                          # shared translucent body silhouette
  digestive.jsx + digestive-data.js + digestive-data.test.mjs
  respiratory.jsx + respiratory-data.js + respiratory-data.test.mjs
  circulatory.jsx + circulatory-data.js + circulatory-data.test.mjs
  excretory.jsx + excretory-data.js + excretory-data.test.mjs
  nervous.jsx + nervous-data.js + nervous-data.test.mjs
  skeletal.jsx + skeletal-data.js + skeletal-data.test.mjs
```
All import `SceneCanvas`/`InfoPanel` from `../astronomy/` (cross-folder — accepted, avoids renaming the already-shipped `astronomy/` folder just because it now also hosts non-astronomy consumers of its shared pieces; a rename is a trivial, low-priority follow-up, not required for this batch).

## Testing / verification plan

Same as Batch 2: `npx eslint`, `npm run build`, a node-runnable check per data module (required fields, texture/asset paths if any, layer/segment counts), and a live Playwright pass (per Batch 2's hard-won lesson: lint and the build do NOT catch runtime-only bugs like a `useFrame` called outside `<Canvas>` or a depth-write ordering bug — every scene must actually be opened in a browser, its toggle exercised, and every clickable part clicked, before this batch is considered done). Also verify the `'clinical'` background mode doesn't regress `'space'` mode for the existing 6 astronomy scenes (default value keeps them on `'space'` — a quick spot-check on one, e.g. Tata Surya, confirms this).

## Out of scope (explicitly deferred)

- The remaining 8 ch.02 sub-bab (Batch 3b) — separate design pass.
- Video recording (`isCleanMode`) integration — still deferred from the original pilot.
- Anatomically precise/textured organ models — stylized primitives only, matching this whole project's established schematic approach.
