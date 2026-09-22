# Tata Surya 3D Viewer (Three.js Pilot) — Design

Status: Approved
Date: 2026-09-23
Scope: `osn-app` (React + Vite quiz app), sub-bab `ipa-05a` (Tata Surya) as pilot

## Goal

Add an interactive 3D solar system visualization for the Tata Surya sub-bab (ipa-05a), reused across three surfaces with a single component: a standalone viewer tab, an inline widget during quiz practice, and (as a free side effect) the recorded video for that sub-bab.

This is a pilot for one topic. If it validates well, the same pattern extends to other IPA sub-bab (atmosfer, gerhana, siklus air, etc.) as separate follow-up work — not part of this spec.

## Why one component, three surfaces

`osn-app` has no router — navigation is a `currentTab` state in `App.jsx` (`'dashboard' | 'practice' | 'tryout' | 'analytics'`). Video recording (`scripts/record-videos.mjs`) works by loading the app with `?record=<subBabId>&tier=<tier>` in headless Playwright and screen-recording whatever renders live in `PracticeArea`. Consequence: there is no separate "video mode" to build — if the 3D scene renders inline in `PracticeArea` for `ipa-05a`, it is captured automatically when that sub-bab gets recorded. Building one reusable `SolarSystemScene` component that mounts in two places (viewer tab, inline widget) covers all three consumption points named in the brainstorm.

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

**2. Inline in PracticeArea** — inside `PracticeArea.jsx`, when `effectiveSubBabId === 'ipa-05a'`, render `<SolarSystemScene interactive size="inline" />` in a card above/beside the soal content. Only mounts for this one sub-bab; no effect on any other sub-bab's practice flow.

**3. Video recording** — no new code. `record-videos.mjs` already screen-records whatever `PracticeArea` shows; when it records `ipa-05a`, the inline widget from point 2 is captured as part of the video automatically.

## Known risk to verify during implementation

`record-videos.mjs` launches Chromium headless with no GPU flags (`chromium.launch({ headless: true })`), so WebGL runs on software rendering (SwiftShader). With `CONCURRENCY=6` parallel recordings at 1920×1080, continuous Three.js animation in the background could stutter or slow down capture. Mitigation if this proves true: simplify the scene (fewer draw calls) or reduce animation rate during recording — not blocking for building the feature, but must be checked before calling the video-recording surface done.

## Testing / verification plan

No automated test framework in `osn-app` beyond eslint. Verification is manual, per this repo's UI-change convention:
1. `npm run dev` → open the new "Tata Surya" tab → confirm orbit drag/zoom works, planets auto-orbit, clicking a planet shows correct facts, closing the panel works.
2. Open Practice for `ipa-05a` → confirm the inline scene renders without breaking quiz flow (answering questions, navigation) for that sub-bab, and that other sub-bab don't render the widget.
3. Run `npm run record:videos -- --only=ipa-05a` (or equivalent single-item filter) → inspect the output video for the risk above (stutter/frame drops) before considering the video surface validated.

## Out of scope (explicitly deferred)

- Any sub-bab other than `ipa-05a` (pilot only).
- Realistic/textured PBR planets (stylized chosen instead).
- A dedicated "video mode" prop/route (not needed — inline widget is captured as-is).
- Astronomically accurate scale.
