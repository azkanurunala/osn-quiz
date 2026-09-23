# Organ Scenes Visual Restyle — Design

Status: Approved
Date: 2026-09-23
Scope: `osn-app`, shared `OrganModel` component + 6 Batch 3a organ-system scenes (`ipa-02a`–`ipa-02f`) + primitive markers in Batch 3a/3b scenes that reuse `OrganModel`

## Goal

After shipping and reviewing Batch 3a (6 human-body organ scenes) and Batch 3b (6 health-topic scenes), the user reviewed the app and called the organ scenes "jelek sekali" (really ugly). Screenshot diagnosis confirmed three concrete problems, all traced back to using the real HuBMAP GLB models' baked photorealistic textures as-is:

1. **Baked measurement/reference markings show through as visual artifacts.** The kidney model (and likely others) carries white dotted/line markings from the source anatomical research dataset — intended for professional reference, not a children's illustration. These read as glitches, not detail.
2. **Flat, dull, or glossy materials with no illustrative color logic.** The bladder renders as a plain gray sphere; other organs are dark/muddy under the scene's point light, with hard specular highlights that look plasticky rather than organic or illustrative.
3. **Two composition bugs**, unrelated to material but found during the same review: Sistem Rangka & Otot's "Detail Organ" mode fails to hide the full-body translucent muscle wrapper (so "zooming in on bones" instead shows a cluttered full body); Sistem Pencernaan's primitive parts (mulut/kerongkongan/lambung) read as disconnected floating shapes relative to the real intestine models instead of one continuous digestive path.

This spec covers a material restyle (toon/cel-shaded, solid per-organ colors, no baked texture) plus fixes for both composition bugs.

## Decision: keep real anatomical geometry, replace material only

Two prototypes were built live against the running app and screenshotted for comparison (kidney, Detail Organ view):
- **Flat/solid PBR** (`MeshStandardMaterial`, texture map stripped, solid color, roughness tuned up): removed the marking artifacts, but retained soft specular highlights — cleaner but still slightly "plasticky."
- **Toon/cel-shaded** (`MeshToonMaterial`, default 2-tone gradient, no gradient map texture): removed the artifacts AND the glossy highlights, producing flat color bands that read like a children's science textbook illustration.

**Toon/cel-shaded is the chosen direction** — closer to this whole 3D-scenes initiative's original "stylized/low-poly berwarna" brief (chosen before the mid-project pivot to real GLB models for realism), while still keeping the real anatomical silhouettes/geometry, which remains valuable for accuracy. No gradient-map texture is added — the default `MeshToonMaterial` 2-tone look already tested well; adding a multi-band gradient map is unnecessary complexity for this pass.

## Technical approach

**`OrganModel.jsx` (single shared component, the only place real-GLB material logic lives):** material construction changes from cloning-and-tweaking the original baked material to always constructing a fresh `new MeshToonMaterial({ color })` per mesh, where `color` comes from the existing `tint` prop. This unconditionally strips the baked texture (and its embedded markings) and replaces it with a flat, toon-shaded color. `tint` — previously optional, used only for the "disease" recolor effect in Batch 3b and the translucent muscle-overlay effect in Sistem Rangka — becomes **effectively required**: every real-organ usage must now pass a color, since there's no more baked-texture fallback to fall back on. A neutral gray fallback (`#9e9e9e`) covers any caller that forgets, so a missing `tint` degrades gracefully rather than crashing.

Because `OrganModel` is shared, this fix applies automatically to every scene that uses it — the 6 Batch 3a organ scenes (which currently pass no `tint` at all and need one added per organ) AND Batch 3b's Penyakit Tidak Menular / Penyakit Menular scenes (which already pass `tint` for their "disease" recolor — those scenes get the artifact-free rendering for free, no code change needed there beyond what `OrganModel` itself does).

**Primitive markers (spheres/cylinders in every scene, not `<Line>`-based ones):** swap `<meshStandardMaterial color={...}>` to `<meshToonMaterial color={...}>` for visual consistency between real organs and hand-built primitives within the same scene — same color values already in use, just a different material component. Applies to: Sistem Pernapasan's nose marker, Sistem Pencernaan's mulut/lambung, Sistem Rangka's tengkorak, Sistem Saraf's sense markers, Batch 3b's Kebersihan/Diagnosis/Communicable pathogen markers, Gizi's plate wedges/water glass, Bioteknologi's fermentation jar. `<Line>`-based primitives (kerongkongan, limb/rib bones, DNA strands) are unaffected — line geometry doesn't have the shading/texture problem this restyle addresses.

## Color palette (new `tint` values for Batch 3a's 6 scenes' real organs)

| Scene | Organ | Color |
|---|---|---|
| Peredaran Darah | Jantung | `#d9665c` |
| Peredaran Darah | Pembuluh Darah | `#b33951` |
| Ekskresi | Ginjal | `#a0524a` |
| Ekskresi | Ureter | `#e8c9a0` |
| Ekskresi | Kandung Kemih | `#e8d4a0` |
| Pencernaan | Usus Halus | `#e0a898` |
| Pencernaan | Usus Besar | `#c9967a` |
| Saraf & Indera | Otak | `#c9a8b8` |
| Saraf & Indera | Sumsum Tulang Belakang | `#ede0c8` |
| Saraf & Indera | Mata | `#dce8f0` |
| Pernapasan | Trakea | `#e0b8a8` |
| Pernapasan | Bronkus | `#d4a898` |
| Pernapasan | Paru-paru | `#e8b4b8` |
| Rangka & Otot | Tulang Belakang | `#f0e6d2` |
| Rangka & Otot | Panggul | `#f0e6d2` |

Batch 3b's `noncommunicable-data.js`/`communicable-data.js` already have `tint` values (their "disease" colors) — unchanged by this spec, they simply now render artifact-free.

## Bug fix: Sistem Rangka & Otot's Detail Organ mode

The "otot" `OrganModel` (translucent red-tinted reuse of `skin.glb`, always rendered as a full-body wrapper) is not currently hidden in Detail Organ mode, unlike every other scene's `HumanBody`. Fix: wrap it in the same `{!isDetail && (...)}` conditional already used for `HumanBody` elsewhere. Trade-off: "Otot" itself can no longer be inspected in Detail Organ mode (its info panel is still reachable by clicking it in Dalam Tubuh mode) — an acceptable scope cut, since Otot was always a reused whole-body overlay rather than a discrete organ shape.

Separately, the `tulangRusuk` (ribcage) primitive — currently a single large translucent sphere that reads as a floating smudge on the chest — is replaced with several curved `<Line>` arcs suggesting a ribcage silhouette, matching the existing `<Line>`-based limb-bone primitives already in the same scene.

## Bug fix: Sistem Pencernaan's disconnected primitives

Re-measure the real `small_intestine.glb`'s bounding box (`gltf-transform inspect`) to confirm its actual top-of-mesh Y coordinate, then adjust `DIGESTIVE_PRIMITIVES`' mulut/kerongkongan/lambung Y positions so each segment's endpoint touches the next segment's start — mulut at the head, kerongkongan running down to a lambung positioned just above where the real intestine mesh begins, no visible gaps. This is inherently a visual-tuning task verified by iterative screenshot comparison, not a one-shot numeric fix — the plan should budget for at least one round of adjustment after the first visual check, same as Batch 3a's camera-framing tuning.

## Testing / verification plan

No automated visual regression tooling exists in this project — verification is manual, via live Playwright screenshots, same as every prior batch. For this restyle:
- Screenshot every one of the 6 Batch 3a scenes (both Dalam Tubuh and Detail Organ modes) before/after, confirm: no visible texture-artifact markings, no harsh specular highlights, each organ reads as a distinct color, click-to-info still works (material change must not affect raycasting/click behavior — `OrganModel`'s `onClick` is on the `<primitive>` wrapper, unaffected by material swap).
- Confirm Rangka & Otot's Detail Organ mode now shows bones cleanly with no full-body wrapper, and the new rib-cage `<Line>` arcs read reasonably as a ribcage.
- Confirm Pencernaan's mulut→kerongkongan→lambung→usus chain reads as one continuous path with no visible gaps.
- Spot-check Batch 3b's Penyakit Tidak Menular / Penyakit Menular scenes to confirm they also render artifact-free now (no code change needed there, but worth confirming the shared-component fix actually reached them).
- Confirm astronomy scenes are untouched (this restyle is scoped to `OrganModel`/organ scenes only — `SceneCanvas`, `CelestialBody`, and all astronomy-specific rendering are not touched).
- Re-run `npx eslint` and `npm run build` across all touched files.

## Out of scope

- Astronomy scenes (Tata Surya, Lapisan Bumi, etc.) — explicitly confirmed NOT part of this complaint, stay photorealistic as-is.
- Batch 3b's non-organ scenes (Gizi, Bioteknologi, Kebersihan, Diagnosis Gejala) — these already use hand-built primitives with solid colors (no baked-texture problem); only their primitive material TYPE changes (`meshStandardMaterial` → `meshToonMaterial`) for visual consistency, no color/positioning changes.
- A custom multi-band gradient-map texture for `MeshToonMaterial` — default 2-tone already tested and approved, not needed.
- Reverting to hand-built primitive organs instead of real GLB geometry — explicitly rejected in favor of keeping real anatomical shapes.
