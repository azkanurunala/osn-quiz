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

## Pivot: real anatomical models where available (superseding the original all-primitive plan)

After this spec was first approved, the user supplied 5 candidate sources for real 3D anatomy models. Research (full findings kept out of this doc for brevity) narrowed it to one usable source: the **Human Reference Atlas / HuBMAP Common Coordinate Framework 3D Reference Object Library** (`humanatlas.io`, backing repo `github.com/hubmapconsortium/ccf-3d-reference-object-library`) — CC BY 4.0, native GLB, individual organs as separate files, stable direct-download URLs (`raw.githubusercontent.com/...`), medical-grade (NIH Visible Human dataset, expert-reviewed). The other 4 candidates were rejected: not scriptable/GLB-ready (anatomytool.org), Blender-template-only with an internal NC-licensed fragment (Z-Anatomy GitHub), inconsistent per-model licensing requiring an account+API token (Sketchfab), or explicitly AI-generated with a "not a clinical/diagnostic reference" disclaimer (Meshy.ai — rejected outright for a children's science app where anatomical correctness matters).

**Important finding: this library is organ/viscera-focused, not a general anatomy set.** It has zero skull, ribs, limb bones, general muscle, ear, tongue, nose, stomach, or esophagus models — those gaps get the original stylized-primitive treatment. Where a real model exists, it's used; where it doesn't, primitives fill in. This is a **hybrid** approach, not a full pivot.

**18 organ files fetched, verified as real GLB (not HTML/placeholder) via `file`, then compressed** with `npx @gltf-transform/cli optimize <in> <out> --compress draco` (Draco geometry compression + mesh dedup/join/weld/simplify) — verified near-lossless (a spot-checked kidney model: 251,076 → 238,638 render vertices, ~5% reduction, all 3 anatomical material regions — capsule/cortex-medulla/pyramids — intact) while cutting file size by roughly 90% overall (raw ~60 MB → compressed ~5.4 MB total across all 18 files, saved to `osn-app/public/models/`, attributed in `public/models/ATTRIBUTION.txt`). `@react-three/drei`'s `useGLTF` decodes Draco automatically (built-in `DRACOLoader` pointed at Google's hosted decoder) — no extra loader wiring needed in scene code.

| File (`public/models/`) | Source organ | Compressed size |
|---|---|---|
| `skin.glb` | Full-body skin (shared `HumanBody` context mesh) | 118 KB |
| `heart.glb` | Heart | 339 KB |
| `blood_vasculature_heart.glb` | Vessels around the heart | 176 KB |
| `kidney_l.glb` / `kidney_r.glb` | Kidneys | 213 KB / 210 KB |
| `ureter_l.glb` / `ureter_r.glb` | Ureters | 19 KB / 17 KB |
| `urinary_bladder.glb` | Bladder | 27 KB |
| `small_intestine.glb` / `large_intestine.glb` | Intestines | 91 KB / 97 KB |
| `brain.glb` | Brain | 1.86 MB |
| `spinal_cord.glb` | Spinal cord | 22 KB |
| `eye.glb` | One eye (mirrored via negative X-scale for the other side — halves the payload vs. loading both files) | 738 KB |
| `vertebrae.glb` | Spine | 571 KB |
| `pelvis.glb` | Pelvis | 179 KB |
| `lung.glb` | Both lungs (single combined mesh) | 622 KB |
| `trachea.glb` | Trachea | 98 KB |
| `main_bronchus.glb` | Bronchi | 26 KB |

## New shared component: `HumanBody`

`src/features/human-body/HumanBody.jsx` — loads the real `skin.glb` (via `useGLTF`) instead of a hand-built primitive silhouette, rendered translucent (low opacity, `depthWrite={false}` — applying the lesson learned from the `ConcentricLayers` depth-write bug in Batch 2 from the start) so organs positioned inside it stay visible. Used by all 6 scenes' "Dalam Tubuh" view as shared visual context. Not clickable itself (no `onSelect`) — it's a backdrop, not a data-bearing object.

(02f's skeleton is its own dedicated component using the real `vertebrae.glb`/`pelvis.glb` plus primitives for the parts with no real model — not a reuse of `HumanBody`, since bones need to be individually clickable/labeled, a different interface than `HumanBody`'s single translucent backdrop mesh.)

## Per-topic design

**02a — Sistem Pencernaan** (`digestive.jsx` + `digestive-data.js`)
Real: Usus Halus (`small_intestine.glb`), Usus Besar (`large_intestine.glb`). Primitive (no real model exists): Mulut (small sphere), Kerongkongan/esophagus (narrow tube), Lambung/stomach (enlarged bulge) — connecting the real intestine models into one continuous mouth-to-rectum path. 5 clickable segments total, each with a mechanical/chemical-digestion fact appropriate for SD level.

**02b — Sistem Pernapasan** (`respiratory.jsx` + `respiratory-data.js`)
Real: Trakea (`trachea.glb`), Bronkus (`main_bronchus.glb`), Paru-paru (`lung.glb`). Primitive: Hidung (nose, small sphere at head — no real model). 4 clickable parts.

**02c — Sistem Peredaran Darah** (`circulatory.jsx` + `circulatory-data.js`)
Real: Jantung (`heart.glb`), Pembuluh Darah (`blood_vasculature_heart.glb`, covering both Arteri and Vena together as one model — split into two clickable facts by which part of the mesh is nearer the click, same "innermost/nearest among ray hits" pattern as `ConcentricLayers`, or simply treated as one "Pembuluh Darah" clickable part if the mesh isn't cleanly separable — finalized during implementation). 2-3 clickable parts.

**02d — Sistem Ekskresi** (`excretory.jsx` + `excretory-data.js`)
Real, full coverage: Ginjal (`kidney_l.glb` + `kidney_r.glb`), Ureter (`ureter_l.glb` + `ureter_r.glb`), Kandung Kemih (`urinary_bladder.glb`). 3 clickable parts (kidneys L/R share one fact, same for ureters). The kidney's fact also briefly notes skin/lungs/liver as additional excretory organs (sweat, CO2, bile) rather than modeling them separately.

**02e — Sistem Saraf & Indera** (`nervous.jsx` + `nervous-data.js`)
Real: Otak (`brain.glb`), Sumsum Tulang Belakang (`spinal_cord.glb`), Mata (`eye.glb`, mirrored for the second eye). Primitive: Telinga, Hidung, Lidah, Kulit(touch) — small colored markers at approximate head positions, no real models exist for these. 7 clickable parts total.

**02f — Sistem Rangka & Otot** (`skeletal.jsx` + `skeletal-data.js`)
Real: Tulang Belakang (`vertebrae.glb`), Panggul/pelvis (`pelvis.glb`). Primitive (no real model exists — this scene stays mostly stylized): Tengkorak (skull, sphere), Tulang Rusuk (ribcage, simplified curved-arc shape), Tulang Lengan (two capsules), Tulang Kaki (two capsules) — all bone-colored (off-white). Otot (muscle) is a translucent reddish overlay reusing `skin.glb` scaled slightly outward (bones underneath, muscle layer wrapping around). 6 clickable parts.

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

Same as Batch 2 (`npx eslint`, `npm run build`, a node-runnable check per data module, and a live Playwright pass — lint and the build do NOT catch runtime-only bugs, as Batch 2 proved twice), plus GLB-specific checks:
- A node-runnable check confirming every `.glb` path referenced by data modules actually exists on disk under `osn-app/public/models/` (same `existsSync` pattern as the pilot's texture-path check).
- Build the FIRST scene (`ipa-02d` Ekskresi — full real-model coverage, no primitive fallbacks needed, so it's the cleanest validation of the GLB-loading pipeline itself) and verify it in a live browser before mass-producing the other 5, to catch any `useGLTF`/Draco-decoding integration issue early rather than after all 6 scenes are built the same (possibly wrong) way.
- Verify the `'clinical'` background mode doesn't regress `'space'` mode for the existing astronomy scenes (default stays `'space'` — a quick spot-check on Tata Surya confirms this).
- Verify total page payload for each scene is reasonable — compressed models are already small (see table above), but confirm no scene accidentally loads a model it doesn't need.

## Out of scope (explicitly deferred)

- The remaining 8 ch.02 sub-bab (Batch 3b) — separate design pass.
- Video recording (`isCleanMode`) integration — still deferred from the original pilot.
- Parts with no available real model (stomach, esophagus, skull, ribs, limb bones, general muscle, ear, tongue, nose) — stylized primitives, matching this project's established schematic approach for anything without a real asset.
