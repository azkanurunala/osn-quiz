# Tata Surya 3D Viewer (Three.js Pilot) — Design

Status: Approved
Date: 2026-09-23
Scope: `osn-app` (React + Vite quiz app), sub-bab `ipa-05a` (Tata Surya) as pilot

## Goal

Add an interactive 3D solar system visualization for the Tata Surya sub-bab (ipa-05a), reused across three surfaces with a single component: a standalone viewer tab, an inline widget during quiz practice, and (as a free side effect) the recorded video for that sub-bab.

This is a pilot for one topic. If it validates well, the same pattern extends to other IPA sub-bab (atmosfer, gerhana, siklus air, etc.) as separate follow-up work — not part of this spec.

## Why one component, two surfaces (video deferred — see below)

`osn-app` has no router — navigation is a `currentTab` state in `App.jsx` (`'dashboard' | 'practice' | 'tryout' | 'analytics'`). Building one reusable `SolarSystemScene` component that mounts in two places (a standalone viewer tab, and an inline widget in normal practice mode) covers two of the three consumption points named in the brainstorm.

**Correction from initial brainstorm (found during planning):** the brainstorm assumed video recording would capture the inline widget "for free" because `record-videos.mjs` screen-records whatever `PracticeArea` renders. That's true only for the *normal* practice UI. In fact `PracticeArea.jsx` has a **separate, pixel-tuned full-screen render branch for `isCleanMode`** (`PracticeArea.jsx:584-804`, used during recording) that does not reuse the normal practice JSX tree (`PracticeArea.jsx:807+`) — it's a hand-tuned 10-column grid with its own font sizes and split-panel logic for the split-screen "soal / pembahasan" video composition. An inline widget added only to the normal branch would never appear in a recorded video. Video integration is therefore **out of scope for this pilot** and deferred to a follow-up once the viewer + inline-practice pattern is validated (see Out of Scope).

## Dependencies

Add to `osn-app/package.json`:
- `three`
- `@react-three/fiber`
- `@react-three/drei` (for `OrbitControls` and `Html` overlay positioning)

No dependency existed for 3D before this; nothing else in the app uses Three.js.

## File structure

```
osn-app/src/features/solar-system/
  SolarSystemScene.jsx   # R3F <Canvas> — sun + 8 planets orbiting, camera controls, click handling
  planetsData.js         # static data: id, name, order, color, orbitRadius, orbitSpeed, fact
  PlanetInfoPanel.jsx    # overlay panel shown on planet click (Velo CT glass style)
```

New top-level view:
```
osn-app/src/components/SolarSystemViewer.jsx   # full-bleed wrapper around SolarSystemScene
```

## `SolarSystemScene` component

Props:
- `interactive: boolean` (default `true`) — enables `OrbitControls` (drag to rotate/zoom) and click-to-select on planets. When `false`, camera is static and clicks are disabled (not used in this pilot's surfaces, but kept as an escape hatch if recording perf requires it later).
- `size: 'inline' | 'full'` — controls canvas height/aspect and camera FOV/distance. `'inline'` fits a card inside `PracticeArea`; `'full'` fills the viewer tab.

Behavior:
- Sun rendered as an emissive sphere at the origin.
- 8 planets (Mercury–Neptune) each on their own orbit ring, animated via `useFrame` — continuous auto-orbit around the sun, always on regardless of `interactive`.
- Distances and radii are schematically scaled (not astronomically accurate) so all 8 orbits are visible on screen at once — OSN SD content cares about order and characteristics, not real scale.
- Visual style: stylized/low-poly — solid/gradient-shaded spheres per planet, thin line/torus orbit rings, no photographic textures.
- Click a planet → `PlanetInfoPanel` shows name, order from the sun, 1–2 SD-level facts, close button.
- WebGL feature-detect before mounting `<Canvas>`: if unsupported, render a static fallback message instead of the scene (no crash).

## Integration points

**1. Standalone viewer tab** — `App.jsx` gets a new nav entry (same pattern as existing Compass/BarChart3/Clock icons for Dashboard/Practice/Tryout/Analytics) that sets `currentTab = 'solar-system'` and renders `<SolarSystemViewer />` → `<SolarSystemScene interactive size="full" />`.

**2. Inline in PracticeArea (normal mode only)** — inside `PracticeArea.jsx`'s standard-learning-mode branch (`:807+`), when `subBabId === 'ipa-05a'`, render `<SolarSystemScene interactive size="inline" />` in a card above/beside the soal content. Only mounts for this one sub-bab; no effect on any other sub-bab's practice flow, and does not touch the `isCleanMode` recording branch.

## Testing / verification plan

No automated test framework in `osn-app` beyond eslint. Verification is manual, per this repo's UI-change convention:
1. `npm run dev` → open the new "Tata Surya" tab → confirm orbit drag/zoom works, planets auto-orbit, clicking a planet shows correct facts, closing the panel works.
2. Open Practice for `ipa-05a` (normal mode, not recording) → confirm the inline scene renders without breaking quiz flow (answering questions, navigation) for that sub-bab, and that other sub-bab don't render the widget.
3. One plain-Node `assert`-based check (no framework) on `planetsData.js` — validates data shape (8 planets, correct order 1–8, all required fields present) and the pure orbit-position helper. Run with `node`.

## Out of scope (explicitly deferred)

- Video recording integration (`isCleanMode` branch in `PracticeArea.jsx`) — that branch is a separate, pixel-tuned render tree that doesn't reuse the normal practice JSX; adding the 3D scene there is a distinct follow-up task once this pilot validates the viewer + inline-practice pattern.
- Any sub-bab other than `ipa-05a` (pilot only).
- Realistic/textured PBR planets (stylized chosen instead).
- Astronomically accurate scale.
