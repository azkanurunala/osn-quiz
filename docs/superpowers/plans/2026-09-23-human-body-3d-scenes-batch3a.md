# Human Body 3D Scenes Batch 3a Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 6 human-body 3D scenes (`ipa-02a` through `ipa-02f`) to `osn-app`, using real anatomical GLB models (HuBMAP CCF library, already downloaded/compressed/committed to `public/models/`) where available, stylized primitives where not, each with a "Dalam Tubuh" / "Detail Organ" camera toggle.

**Architecture:** Two `SceneCanvas` additions (a `target` prop for off-origin camera framing, a `'clinical'` background mode), three new shared components (`OrganModel` — loads+optionally-tints a GLB, `HumanBody` — the real skin mesh made translucent, `ViewToggle` — the two-button mode switcher reused by all 6 scenes), then the 6 scenes themselves, then 6 registry entries. **Zero changes to `App.jsx` or `PracticeArea.jsx`** — the registry pattern from Batch 2 absorbs new topics entirely.

**Key finding driving the design:** every organ GLB and the whole-body skin GLB share one consistent coordinate system (verified via `gltf-transform inspect` bounding boxes — e.g. kidneys sit at y≈0.25-0.36, heart above them at y≈0.42-0.53, brain at the top y≈0.76-0.90, matching real anatomy). This means organs need **zero manual position calibration** for "Dalam Tubuh" mode — render everything at its native transform and it lines up correctly. Only the **camera** needs to move between modes (far + centered on the whole body vs. close + centered on that scene's organ cluster), via the new `target` prop.

**Tech Stack:** Same as Batch 2, plus `useGLTF` from `@react-three/drei` (already a dependency) for GLB loading — no new npm packages.

**Spec:** `docs/superpowers/specs/2026-09-23-human-body-3d-scenes-batch3a-design.md`
**Assets:** `osn-app/public/models/*.glb` (18 files, already downloaded/Draco-compressed/committed — see spec for the full list and attribution).

---

### Task 1: Generalize `SceneCanvas` (camera target + clinical background)

**Files:**
- Modify: `osn-app/src/features/astronomy/SceneCanvas.jsx`

- [ ] **Step 1: Read the current file**

Read `osn-app/src/features/astronomy/SceneCanvas.jsx` in full to confirm it matches the version from Batch 2 (props: `size`, `interactive`, `cameraPosition`, `minDistance`, `maxDistance`, `showPointLight`, `overlay`, `children`; a fullscreen toggle button was added in a later fix — it should still be present). If it diverges meaningfully from that, STOP and report NEEDS_CONTEXT.

- [ ] **Step 2: Add `target` and `background` props**

Add two new props with safe defaults so every existing astronomy scene (which doesn't pass either) keeps working unchanged:
- `target = [0, 0, 0]` — passed to `<OrbitControls target={target} />` (currently `OrbitControls` has no `target` prop at all, so it defaults to three.js's own default of `[0,0,0]` — adding this explicitly is a no-op for existing callers, but lets human-body scenes aim the camera at an organ cluster that isn't at the world origin).
- `background = 'space'` — `'space'` (default) keeps today's behavior (`<Environment files={BACKGROUND_TEXTURE} background />`). `'clinical'` skips `<Environment>` entirely and instead renders a soft gradient on the wrapper `<div>` (the Canvas itself becomes transparent via `gl={{ alpha: true }}` so that gradient shows through behind the 3D content).

Locate the current `<Canvas ...>` opening tag and `<Environment .../>` line, and the wrapper `<div>`'s className, and apply this diff (write the equivalent edit against whatever the actual current content is — the shape of the change, not necessarily exact old/new line matches, since this file has been touched by several prior tasks):

```jsx
// Add to the destructured props:
export function SceneCanvas({
  size = 'inline',
  interactive = true,
  cameraPosition,
  target = [0, 0, 0],
  minDistance = 8,
  maxDistance = 45,
  showPointLight = true,
  background = 'space',
  overlay = null,
  children,
}) {
```

```jsx
// Wrapper div className gains a conditional gradient for 'clinical' mode:
<div
  ref={wrapperRef}
  className={`relative rounded-3xl overflow-hidden glass-card ${isFullscreen ? 'h-screen w-screen' : heightClass} ${
    background === 'clinical' ? 'bg-gradient-to-br from-blue-50 to-slate-100' : ''
  }`}
>
```

```jsx
// Canvas gains alpha:true so the wrapper's gradient shows through in 'clinical' mode:
<Canvas
  camera={{ position: cameraPosition || defaultCameraPosition, fov: 50 }}
  gl={{ alpha: true }}
>
  <Suspense fallback={null}>
    {background === 'space' && <Environment files={BACKGROUND_TEXTURE} background />}
    <ambientLight intensity={0.7} />
    {showPointLight && <pointLight position={[0, 0, 0]} intensity={6} color="#fff6d8" decay={0} />}
    {children}
    {interactive && (
      <OrbitControls target={target} enablePan={false} minDistance={minDistance} maxDistance={maxDistance} />
    )}
  </Suspense>
</Canvas>
```

(`gl={{ alpha: true }}` is harmless for `'space'` mode too — `<Environment background />` still fully covers the canvas with the Milky Way texture, so the transparency never becomes visible there.)

- [ ] **Step 3: Lint**

Run: `cd osn-app && npx eslint src/features/astronomy/SceneCanvas.jsx`
Expected: no errors.

- [ ] **Step 4: Build check**

Run: `cd osn-app && npm run build`
Expected: succeeds.

- [ ] **Step 5: Regression spot-check (manual, quick)**

Run: `cd osn-app && npm run dev`, open "Jelajah 3D" → Tata Surya. Confirm it still shows the Milky Way starfield background (not a blank/gradient background) and still works as before — this scene doesn't pass `target`/`background`, so it must be visually identical to before this task.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/astronomy/SceneCanvas.jsx
git commit -m "feat: add target + clinical background support to SceneCanvas" -- osn-app/src/features/astronomy/SceneCanvas.jsx
```

---

### Task 2: Shared `OrganModel` component

**Files:**
- Create: `osn-app/src/features/human-body/OrganModel.jsx`

Loads one GLB (via `useGLTF`, which decodes the Draco compression on these files automatically — no extra loader setup needed), optionally overrides opacity/color (used for `HumanBody`'s translucent skin and the muscle-layer reuse in the skeletal scene), and is click-selectable.

- [ ] **Step 1: Create the component**

```jsx
// osn-app/src/features/human-body/OrganModel.jsx
import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

export function OrganModel({
  id,
  url,
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
  opacity,
  tint,
  onSelect,
}) {
  const { scene } = useGLTF(url);

  // useGLTF caches and shares one scene graph per URL across every consumer — clone it so
  // this instance can have its own material overrides (and so the same model can be mounted
  // more than once at a time, e.g. mirroring one eye model for both eyes).
  const preparedScene = useMemo(() => {
    const clone = scene.clone();
    if (opacity !== undefined || tint) {
      clone.traverse((child) => {
        if (child.isMesh) {
          child.material = child.material.clone();
          if (opacity !== undefined) {
            child.material.transparent = true;
            child.material.opacity = opacity;
            child.material.depthWrite = false;
          }
          if (tint) {
            child.material.color.set(tint);
          }
        }
      });
    }
    return clone;
  }, [scene, opacity, tint]);

  return (
    <primitive
      object={preparedScene}
      position={position}
      scale={scale}
      rotation={rotation}
      onClick={onSelect ? (e) => { e.stopPropagation(); onSelect(id); } : undefined}
    />
  );
}
```

- [ ] **Step 2: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/OrganModel.jsx`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add osn-app/src/features/human-body/OrganModel.jsx
git commit -m "feat: add shared OrganModel (GLB loader with tint/opacity/click)" -- osn-app/src/features/human-body/OrganModel.jsx
```

---

### Task 3: Shared `HumanBody` component

**Files:**
- Create: `osn-app/src/features/human-body/HumanBody.jsx`

- [ ] **Step 1: Create the component**

```jsx
// osn-app/src/features/human-body/HumanBody.jsx
import { OrganModel } from './OrganModel';

export function HumanBody() {
  return <OrganModel url="/models/skin.glb" opacity={0.15} />;
}
```

- [ ] **Step 2: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/HumanBody.jsx`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add osn-app/src/features/human-body/HumanBody.jsx
git commit -m "feat: add shared HumanBody (translucent real skin mesh)" -- osn-app/src/features/human-body/HumanBody.jsx
```

---

### Task 4: Shared `ViewToggle` component

**Files:**
- Create: `osn-app/src/features/human-body/ViewToggle.jsx`

The "Dalam Tubuh" / "Detail Organ" button pair, extracted so all 6 scenes share one implementation instead of repeating `eclipse.jsx`'s inline button pattern six more times.

- [ ] **Step 1: Create the component**

```jsx
// osn-app/src/features/human-body/ViewToggle.jsx
export function ViewToggle({ mode, onChange }) {
  return (
    <div className="absolute top-3 left-3 flex gap-2">
      <button
        onClick={() => onChange('in-body')}
        className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition ${mode === 'in-body' ? 'bg-brand-primary text-white' : 'bg-white/80 text-gray-600 hover:bg-white'}`}
      >
        Dalam Tubuh
      </button>
      <button
        onClick={() => onChange('detail')}
        className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition ${mode === 'detail' ? 'bg-brand-primary text-white' : 'bg-white/80 text-gray-600 hover:bg-white'}`}
      >
        Detail Organ
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/ViewToggle.jsx`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add osn-app/src/features/human-body/ViewToggle.jsx
git commit -m "feat: add shared ViewToggle (Dalam Tubuh / Detail Organ buttons)" -- osn-app/src/features/human-body/ViewToggle.jsx
```

---

### Task 5: Ekskresi scene (`ipa-02d`) — pipeline validation scene

**Files:**
- Create: `osn-app/src/features/human-body/excretory-data.js`
- Create: `osn-app/src/features/human-body/excretory-data.test.mjs`
- Create: `osn-app/src/features/human-body/excretory.jsx`

Build this scene FIRST, before the other 5 — it has full real-model coverage (no primitive fallbacks needed), making it the cleanest way to validate the whole GLB-loading pipeline (Draco decoding, co-registered positioning, click detection on loaded meshes) before repeating the pattern five more times.

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/human-body/excretory-data.js
export const EXCRETORY_PARTS = [
  {
    id: 'ginjal',
    name: 'Ginjal',
    models: ['/models/kidney_l.glb', '/models/kidney_r.glb'],
    fact: 'Menyaring darah dan membuang zat sisa sebagai urine. Manusia punya sepasang ginjal. Selain ginjal, kulit (lewat keringat), paru-paru (lewat karbon dioksida), dan hati (lewat empedu) juga ikut membuang zat sisa dari tubuh.',
  },
  {
    id: 'ureter',
    name: 'Ureter',
    models: ['/models/ureter_l.glb', '/models/ureter_r.glb'],
    fact: 'Saluran yang mengalirkan urine dari ginjal menuju kandung kemih.',
  },
  {
    id: 'kandung-kemih',
    name: 'Kandung Kemih',
    models: ['/models/urinary_bladder.glb'],
    fact: 'Kantung tempat urine ditampung sementara sebelum dikeluarkan dari tubuh.',
  },
];

// Kamera "Detail Organ": pusat kira-kira di tengah area ginjal-ureter-kandung kemih
// (dihitung dari bounding box asli tiap model — lihat spec untuk data lengkapnya).
export const EXCRETORY_DETAIL_TARGET = [0, 0.18, 0];
export const EXCRETORY_DETAIL_CAMERA = [0, 0.18, 0.55];
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/human-body/excretory-data.test.mjs
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { EXCRETORY_PARTS, EXCRETORY_DETAIL_TARGET, EXCRETORY_DETAIL_CAMERA } from './excretory-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(EXCRETORY_PARTS.length, 3, 'expected 3 excretory parts');

EXCRETORY_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'models', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  assert.ok(Array.isArray(part.models) && part.models.length > 0, `${part.id} should list at least one model`);
  part.models.forEach((modelPath) => {
    assert.ok(modelPath.startsWith('/models/'), `${part.id} model path should be under /models/`);
    const onDisk = `${PUBLIC_DIR}${modelPath}`;
    assert.ok(existsSync(onDisk), `model file missing on disk: ${onDisk}`);
  });
});

assert.equal(EXCRETORY_DETAIL_TARGET.length, 3, 'detail target should be a 3-tuple');
assert.equal(EXCRETORY_DETAIL_CAMERA.length, 3, 'detail camera should be a 3-tuple');

console.log('excretory-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/excretory-data.test.mjs`
Expected: `excretory-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/human-body/excretory.jsx
import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import { EXCRETORY_PARTS, EXCRETORY_DETAIL_TARGET, EXCRETORY_DETAIL_CAMERA } from './excretory-data';

export function ExcretoryScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = EXCRETORY_PARTS.find((p) => p.id === selectedId) || null;
  const isDetail = mode === 'detail';

  return (
    <SceneCanvas
      // key={mode}: R3F's <Canvas camera={{position}}> only applies that position once, at
      // initial mount — changing cameraPosition later does NOT move an already-created camera.
      // Keying on mode forces a remount (fresh camera) on every Dalam Tubuh/Detail Organ toggle.
      key={mode}
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={isDetail ? EXCRETORY_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? EXCRETORY_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.3 : 1.2}
      maxDistance={isDetail ? 2 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Sistem Ekskresi" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {EXCRETORY_PARTS.map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel
            key={modelUrl}
            id={part.id}
            url={modelUrl}
            onSelect={interactive ? setSelectedId : undefined}
          />
        ))
      )}
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/excretory.jsx src/features/human-body/excretory-data.js`
Expected: no errors.

- [ ] **Step 6: Build check**

Run: `cd osn-app && npm run build`
Expected: succeeds (confirms `useGLTF` + the 5 real model paths resolve/bundle correctly).

- [ ] **Step 7: Live verification (important — do not skip)**

Run: `cd osn-app && npm run dev`, and temporarily register this one scene to view it — the registry isn't wired until Task 11, so for this early check, wait until Task 11 wires the registry and come back to verify this specific scene first, before building Tasks 7-10. **Recommended: reorder execution — do Task 11 (registry) right after this task, but with ONLY the `ipa-02d` entry added at first, verify Ekskresi live in the browser, THEN continue with Tasks 6-10, adding each new scene's registry entry as it's built (Task 11 effectively becomes "add one entry per scene" rather than "add all 6 at the end").** This front-loads the pipeline validation the spec calls for. Confirm: kidneys/ureters/bladder appear inside the translucent body in "Dalam Tubuh" mode at anatomically sensible positions (roughly lower-mid torso, kidneys flanking the spine), "Detail Organ" mode zooms in with the body hidden, clicking each part shows the right fact, zero console errors.

- [ ] **Step 8: Commit**

```bash
git add osn-app/src/features/human-body/excretory-data.js osn-app/src/features/human-body/excretory-data.test.mjs osn-app/src/features/human-body/excretory.jsx
git commit -m "feat: add Sistem Ekskresi 3D scene (ipa-02d)" -- osn-app/src/features/human-body/excretory-data.js osn-app/src/features/human-body/excretory-data.test.mjs osn-app/src/features/human-body/excretory.jsx
```

---

### Task 6: Peredaran Darah scene (`ipa-02c`)

**Files:**
- Create: `osn-app/src/features/human-body/circulatory-data.js`
- Create: `osn-app/src/features/human-body/circulatory-data.test.mjs`
- Create: `osn-app/src/features/human-body/circulatory.jsx`

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/human-body/circulatory-data.js
export const CIRCULATORY_PARTS = [
  {
    id: 'jantung',
    name: 'Jantung',
    models: ['/models/heart.glb'],
    fact: 'Otot pemompa darah, berdetak sekitar 60-100 kali per menit, mengalirkan darah ke seluruh tubuh.',
  },
  {
    id: 'pembuluh-darah',
    name: 'Pembuluh Darah',
    models: ['/models/blood_vasculature_heart.glb'],
    fact: 'Arteri membawa darah kaya oksigen DARI jantung ke seluruh tubuh; vena membawa darah kembali KE jantung. Bersama-sama membentuk jaringan pembuluh yang mengalirkan darah ke seluruh tubuh.',
  },
];

export const CIRCULATORY_DETAIL_TARGET = [0, 0.45, 0];
export const CIRCULATORY_DETAIL_CAMERA = [0, 0.45, 0.65];
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/human-body/circulatory-data.test.mjs
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { CIRCULATORY_PARTS, CIRCULATORY_DETAIL_TARGET, CIRCULATORY_DETAIL_CAMERA } from './circulatory-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(CIRCULATORY_PARTS.length, 2, 'expected 2 circulatory parts');

CIRCULATORY_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'models', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  part.models.forEach((modelPath) => {
    assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
  });
});

assert.equal(CIRCULATORY_DETAIL_TARGET.length, 3);
assert.equal(CIRCULATORY_DETAIL_CAMERA.length, 3);

console.log('circulatory-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/circulatory-data.test.mjs`
Expected: `circulatory-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/human-body/circulatory.jsx
import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import { CIRCULATORY_PARTS, CIRCULATORY_DETAIL_TARGET, CIRCULATORY_DETAIL_CAMERA } from './circulatory-data';

export function CirculatoryScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = CIRCULATORY_PARTS.find((p) => p.id === selectedId) || null;
  const isDetail = mode === 'detail';

  return (
    <SceneCanvas
      // key={mode}: R3F's <Canvas camera={{position}}> only applies that position once, at
      // initial mount — changing cameraPosition later does NOT move an already-created camera.
      // Keying on mode forces a remount (fresh camera) on every Dalam Tubuh/Detail Organ toggle.
      key={mode}
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={isDetail ? CIRCULATORY_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? CIRCULATORY_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.3 : 1.2}
      maxDistance={isDetail ? 2 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Sistem Peredaran Darah" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {CIRCULATORY_PARTS.map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} onSelect={interactive ? setSelectedId : undefined} />
        ))
      )}
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/circulatory.jsx src/features/human-body/circulatory-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/human-body/circulatory-data.js osn-app/src/features/human-body/circulatory-data.test.mjs osn-app/src/features/human-body/circulatory.jsx
git commit -m "feat: add Sistem Peredaran Darah 3D scene (ipa-02c)" -- osn-app/src/features/human-body/circulatory-data.js osn-app/src/features/human-body/circulatory-data.test.mjs osn-app/src/features/human-body/circulatory.jsx
```

---

### Task 7: Pernapasan scene (`ipa-02b`)

**Files:**
- Create: `osn-app/src/features/human-body/respiratory-data.js`
- Create: `osn-app/src/features/human-body/respiratory-data.test.mjs`
- Create: `osn-app/src/features/human-body/respiratory.jsx`

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/human-body/respiratory-data.js
// hidung tidak punya model asli di dataset — direpresentasikan sebagai penanda primitif kecil di posisi kepala.
export const NOSE_MARKER = { position: [0, 0.83, 0.09], radius: 0.02, color: '#e8a87c' };

export const RESPIRATORY_PARTS = [
  {
    id: 'hidung',
    name: 'Hidung',
    real: false,
    fact: 'Menyaring, menghangatkan, dan melembapkan udara sebelum masuk ke paru-paru.',
  },
  {
    id: 'trakea',
    name: 'Trakea (Batang Tenggorok)',
    real: true,
    models: ['/models/trachea.glb'],
    fact: 'Saluran udara utama menuju paru-paru, dilapisi cincin tulang rawan agar tetap terbuka.',
  },
  {
    id: 'bronkus',
    name: 'Bronkus',
    real: true,
    models: ['/models/main_bronchus.glb'],
    fact: 'Cabang trakea yang mengalirkan udara ke masing-masing paru-paru kanan dan kiri.',
  },
  {
    id: 'paru-paru',
    name: 'Paru-paru',
    real: true,
    models: ['/models/lung.glb'],
    fact: 'Tempat pertukaran oksigen dan karbon dioksida terjadi di kantung-kantung kecil bernama alveolus.',
  },
];

export const RESPIRATORY_DETAIL_TARGET = [0, 0.52, 0];
export const RESPIRATORY_DETAIL_CAMERA = [0, 0.52, 0.6];
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/human-body/respiratory-data.test.mjs
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { RESPIRATORY_PARTS, NOSE_MARKER, RESPIRATORY_DETAIL_TARGET, RESPIRATORY_DETAIL_CAMERA } from './respiratory-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(RESPIRATORY_PARTS.length, 4, 'expected 4 respiratory parts');

RESPIRATORY_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  if (part.real) {
    assert.ok(Array.isArray(part.models) && part.models.length > 0, `${part.id} marked real but has no models`);
    part.models.forEach((modelPath) => {
      assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
    });
  }
});

const hidung = RESPIRATORY_PARTS.find((p) => p.id === 'hidung');
assert.equal(hidung.real, false, 'hidung should be marked as a primitive fallback (no real model exists)');
assert.equal(NOSE_MARKER.position.length, 3);

assert.equal(RESPIRATORY_DETAIL_TARGET.length, 3);
assert.equal(RESPIRATORY_DETAIL_CAMERA.length, 3);

console.log('respiratory-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/respiratory-data.test.mjs`
Expected: `respiratory-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/human-body/respiratory.jsx
import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import {
  RESPIRATORY_PARTS,
  NOSE_MARKER,
  RESPIRATORY_DETAIL_TARGET,
  RESPIRATORY_DETAIL_CAMERA,
} from './respiratory-data';

export function RespiratoryScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = RESPIRATORY_PARTS.find((p) => p.id === selectedId) || null;
  const isDetail = mode === 'detail';
  const handleSelect = interactive ? setSelectedId : undefined;

  return (
    <SceneCanvas
      // key={mode}: R3F's <Canvas camera={{position}}> only applies that position once, at
      // initial mount — changing cameraPosition later does NOT move an already-created camera.
      // Keying on mode forces a remount (fresh camera) on every Dalam Tubuh/Detail Organ toggle.
      key={mode}
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={isDetail ? RESPIRATORY_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? RESPIRATORY_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.3 : 1.2}
      maxDistance={isDetail ? 2 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Sistem Pernapasan" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {RESPIRATORY_PARTS.filter((p) => p.real).map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} onSelect={handleSelect} />
        ))
      )}
      <mesh
        position={NOSE_MARKER.position}
        onClick={handleSelect ? (e) => { e.stopPropagation(); handleSelect('hidung'); } : undefined}
      >
        <sphereGeometry args={[NOSE_MARKER.radius, 16, 16]} />
        <meshStandardMaterial color={NOSE_MARKER.color} />
      </mesh>
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/respiratory.jsx src/features/human-body/respiratory-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/human-body/respiratory-data.js osn-app/src/features/human-body/respiratory-data.test.mjs osn-app/src/features/human-body/respiratory.jsx
git commit -m "feat: add Sistem Pernapasan 3D scene (ipa-02b)" -- osn-app/src/features/human-body/respiratory-data.js osn-app/src/features/human-body/respiratory-data.test.mjs osn-app/src/features/human-body/respiratory.jsx
```

---

### Task 8: Pencernaan scene (`ipa-02a`)

**Files:**
- Create: `osn-app/src/features/human-body/digestive-data.js`
- Create: `osn-app/src/features/human-body/digestive-data.test.mjs`
- Create: `osn-app/src/features/human-body/digestive.jsx`

Mixes real models (usus halus/besar) with primitives (mulut, kerongkongan, lambung) connected into one path — mouth near the head (y≈0.83, matching the nose/eye height already established) down through the chest to where the real small intestine model begins (its bbox starts around y≈0.10-0.13).

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/human-body/digestive-data.js
// mulut, kerongkongan, lambung tidak punya model asli — primitif yang menyambung ke usus halus asli
// (usus halus dari dataset dimulai sekitar y=0.10-0.13, lihat spec).
export const DIGESTIVE_PRIMITIVES = {
  mulut: { position: [0, 0.83, 0.09], radius: 0.02 },
  kerongkongan: { from: [0, 0.8, 0.06], to: [0, 0.55, 0.02], radius: 0.012 },
  lambung: { position: [0.03, 0.42, 0.03], radiusX: 0.06, radiusY: 0.09, radiusZ: 0.05 },
};

export const DIGESTIVE_PARTS = [
  { id: 'mulut', name: 'Mulut', real: false, fact: 'Tempat makanan mulai dicerna secara mekanik (dikunyah) dan kimiawi (enzim ptialin memecah karbohidrat).' },
  { id: 'kerongkongan', name: 'Kerongkongan (Esofagus)', real: false, fact: 'Saluran yang mendorong makanan dari mulut ke lambung dengan gerakan meremas (peristaltik).' },
  { id: 'lambung', name: 'Lambung', real: false, fact: 'Mencerna makanan dengan asam lambung dan enzim pepsin, mengubahnya jadi bubur (kim).' },
  { id: 'usus-halus', name: 'Usus Halus', real: true, models: ['/models/small_intestine.glb'], fact: 'Tempat pencernaan selesai & sebagian besar nutrisi diserap ke darah. Panjangnya bisa mencapai 6-7 meter.' },
  { id: 'usus-besar', name: 'Usus Besar', real: true, models: ['/models/large_intestine.glb'], fact: 'Menyerap air dari sisa makanan & membentuk feses, dibantu bakteri baik.' },
];

export const DIGESTIVE_DETAIL_TARGET = [0, 0.35, 0];
export const DIGESTIVE_DETAIL_CAMERA = [0, 0.35, 0.85];
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/human-body/digestive-data.test.mjs
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { DIGESTIVE_PARTS, DIGESTIVE_PRIMITIVES, DIGESTIVE_DETAIL_TARGET, DIGESTIVE_DETAIL_CAMERA } from './digestive-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(DIGESTIVE_PARTS.length, 5, 'expected 5 digestive parts');

DIGESTIVE_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  if (part.real) {
    part.models.forEach((modelPath) => {
      assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
    });
  } else {
    assert.ok(DIGESTIVE_PRIMITIVES[part.id], `${part.id} marked primitive but has no entry in DIGESTIVE_PRIMITIVES`);
  }
});

assert.equal(DIGESTIVE_DETAIL_TARGET.length, 3);
assert.equal(DIGESTIVE_DETAIL_CAMERA.length, 3);

console.log('digestive-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/digestive-data.test.mjs`
Expected: `digestive-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/human-body/digestive.jsx
import { useState } from 'react';
import { Line } from '@react-three/drei';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import {
  DIGESTIVE_PARTS,
  DIGESTIVE_PRIMITIVES,
  DIGESTIVE_DETAIL_TARGET,
  DIGESTIVE_DETAIL_CAMERA,
} from './digestive-data';

export function DigestiveScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = DIGESTIVE_PARTS.find((p) => p.id === selectedId) || null;
  const isDetail = mode === 'detail';
  const handleSelect = interactive ? setSelectedId : undefined;
  const onClickFor = (id) => (handleSelect ? (e) => { e.stopPropagation(); handleSelect(id); } : undefined);

  return (
    <SceneCanvas
      // key={mode}: R3F's <Canvas camera={{position}}> only applies that position once, at
      // initial mount — changing cameraPosition later does NOT move an already-created camera.
      // Keying on mode forces a remount (fresh camera) on every Dalam Tubuh/Detail Organ toggle.
      key={mode}
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={isDetail ? DIGESTIVE_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? DIGESTIVE_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.4 : 1.2}
      maxDistance={isDetail ? 2.5 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Sistem Pencernaan" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {DIGESTIVE_PARTS.filter((p) => p.real).map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} onSelect={handleSelect} />
        ))
      )}
      <mesh position={DIGESTIVE_PRIMITIVES.mulut.position} onClick={onClickFor('mulut')}>
        <sphereGeometry args={[DIGESTIVE_PRIMITIVES.mulut.radius, 16, 16]} />
        <meshStandardMaterial color="#e8a87c" />
      </mesh>
      <Line
        points={[DIGESTIVE_PRIMITIVES.kerongkongan.from, DIGESTIVE_PRIMITIVES.kerongkongan.to]}
        color="#e8967a"
        lineWidth={6}
        onClick={onClickFor('kerongkongan')}
      />
      <mesh position={DIGESTIVE_PRIMITIVES.lambung.position} onClick={onClickFor('lambung')}>
        <sphereGeometry args={[DIGESTIVE_PRIMITIVES.lambung.radiusX, 20, 20]} />
        <meshStandardMaterial color="#d98c5f" />
      </mesh>
    </SceneCanvas>
  );
}
```

(`Line` doesn't naturally scale non-uniformly per-axis like a stretched sphere would for the stomach bulge — the stomach primitive above uses a plain sphere at `radiusX` for simplicity rather than an ellipsoid; a `scale={[1, radiusY/radiusX, radiusZ/radiusX]}` on the mesh would make it egg-shaped if a closer stomach-like silhouette is wanted, worth trying during the visual verification pass.)

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/digestive.jsx src/features/human-body/digestive-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/human-body/digestive-data.js osn-app/src/features/human-body/digestive-data.test.mjs osn-app/src/features/human-body/digestive.jsx
git commit -m "feat: add Sistem Pencernaan 3D scene (ipa-02a)" -- osn-app/src/features/human-body/digestive-data.js osn-app/src/features/human-body/digestive-data.test.mjs osn-app/src/features/human-body/digestive.jsx
```

---

### Task 9: Saraf & Indera scene (`ipa-02e`)

**Files:**
- Create: `osn-app/src/features/human-body/nervous-data.js`
- Create: `osn-app/src/features/human-body/nervous-data.test.mjs`
- Create: `osn-app/src/features/human-body/nervous.jsx`

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/human-body/nervous-data.js
// telinga, hidung, lidah, kulit(peraba) tidak punya model asli — penanda primitif di sekitar kepala.
export const SENSE_MARKERS = [
  { id: 'telinga', position: [0.08, 0.82, 0], radius: 0.02, color: '#e8a87c' },
  { id: 'hidung', position: [0, 0.8, 0.09], radius: 0.018, color: '#e29b73' },
  { id: 'lidah', position: [0, 0.78, 0.07], radius: 0.02, color: '#d9718a' },
  { id: 'kulit', position: [0.25, 0.5, 0.03], radius: 0.025, color: '#f0c9a0' },
];

export const NERVOUS_PARTS = [
  { id: 'otak', name: 'Otak', real: true, models: ['/models/brain.glb'], fact: 'Pusat kendali tubuh — mengatur pikiran, gerakan, dan semua indera.' },
  { id: 'sumsum-tulang-belakang', name: 'Sumsum Tulang Belakang', real: true, models: ['/models/spinal_cord.glb'], fact: 'Jalur utama sinyal saraf antara otak dan seluruh tubuh, dilindungi oleh tulang belakang.' },
  // eye.glb listed twice deliberately: the source dataset only ships one eye model, so the scene
  // renders it a second time mirrored (scale=[-1,1,1]) for the other eye — see Step 4 below.
  { id: 'mata', name: 'Mata (Penglihatan)', real: true, models: ['/models/eye.glb', '/models/eye.glb'], fact: 'Indera penglihatan — menangkap cahaya dan mengirim sinyal gambar ke otak.' },
  { id: 'telinga', name: 'Telinga (Pendengaran)', real: false, fact: 'Indera pendengaran — menangkap getaran suara dan membantu keseimbangan tubuh.' },
  { id: 'hidung', name: 'Hidung (Penciuman)', real: false, fact: 'Indera penciuman — mendeteksi partikel bau di udara.' },
  { id: 'lidah', name: 'Lidah (Pengecap)', real: false, fact: 'Indera pengecap — mendeteksi rasa manis, asin, asam, pahit, dan umami.' },
  { id: 'kulit', name: 'Kulit (Peraba)', real: false, fact: 'Indera peraba — mendeteksi sentuhan, tekanan, suhu, dan rasa sakit. Menutupi seluruh permukaan tubuh, bukan cuma satu titik.' },
];

// Rentang lebih luas dari scene lain karena mencakup otak (atas) sampai ujung bawah sumsum tulang
// belakang (lihat spec: brain y=0.76-0.90, spinal_cord y=0.28-0.75).
export const NERVOUS_DETAIL_TARGET = [0, 0.6, 0];
export const NERVOUS_DETAIL_CAMERA = [0, 0.6, 1.1];
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/human-body/nervous-data.test.mjs
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { NERVOUS_PARTS, SENSE_MARKERS, NERVOUS_DETAIL_TARGET, NERVOUS_DETAIL_CAMERA } from './nervous-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(NERVOUS_PARTS.length, 7, 'expected 7 nervous-system parts');

NERVOUS_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  if (part.real) {
    part.models.forEach((modelPath) => {
      assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
    });
  }
});

assert.equal(SENSE_MARKERS.length, 4, 'expected 4 primitive sense markers (telinga, hidung, lidah, kulit)');
SENSE_MARKERS.forEach((marker) => {
  assert.ok(NERVOUS_PARTS.some((p) => p.id === marker.id), `marker "${marker.id}" should have a matching NERVOUS_PARTS entry`);
});

assert.equal(NERVOUS_DETAIL_TARGET.length, 3);
assert.equal(NERVOUS_DETAIL_CAMERA.length, 3);

console.log('nervous-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/nervous-data.test.mjs`
Expected: `nervous-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/human-body/nervous.jsx
import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import { NERVOUS_PARTS, SENSE_MARKERS, NERVOUS_DETAIL_TARGET, NERVOUS_DETAIL_CAMERA } from './nervous-data';

export function NervousScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = NERVOUS_PARTS.find((p) => p.id === selectedId) || null;
  const isDetail = mode === 'detail';
  const handleSelect = interactive ? setSelectedId : undefined;

  return (
    <SceneCanvas
      // key={mode}: R3F's <Canvas camera={{position}}> only applies that position once, at
      // initial mount — changing cameraPosition later does NOT move an already-created camera.
      // Keying on mode forces a remount (fresh camera) on every Dalam Tubuh/Detail Organ toggle.
      key={mode}
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={isDetail ? NERVOUS_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? NERVOUS_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.4 : 1.2}
      maxDistance={isDetail ? 3 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Sistem Saraf & Indera" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {NERVOUS_PARTS.filter((p) => p.real).map((part) =>
        part.models.map((modelUrl, i) => (
          <OrganModel
            key={`${part.id}-${i}`}
            id={part.id}
            url={modelUrl}
            // Mirror the second copy of the eye model across X for the other eye — the source
            // dataset only ships one eye, avoiding loading a second ~9MB source file for a
            // near-symmetric part. useGLTF caches by URL, so the second OrganModel here reuses
            // the already-fetched/parsed scene rather than downloading it again.
            scale={part.id === 'mata' && i === 1 ? [-1, 1, 1] : 1}
            onSelect={handleSelect}
          />
        ))
      )}
      {SENSE_MARKERS.map((marker) => (
        <mesh
          key={marker.id}
          position={marker.position}
          onClick={handleSelect ? (e) => { e.stopPropagation(); handleSelect(marker.id); } : undefined}
        >
          <sphereGeometry args={[marker.radius, 16, 16]} />
          <meshStandardMaterial color={marker.color} />
        </mesh>
      ))}
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/nervous.jsx src/features/human-body/nervous-data.js`
Expected: no errors.

- [ ] **Step 6: Run the data test**

Run: `cd osn-app && node src/features/human-body/nervous-data.test.mjs`
Expected: `nervous-data: all checks passed`.

- [ ] **Step 7: Commit**

```bash
git add osn-app/src/features/human-body/nervous-data.js osn-app/src/features/human-body/nervous-data.test.mjs osn-app/src/features/human-body/nervous.jsx
git commit -m "feat: add Sistem Saraf & Indera 3D scene (ipa-02e)" -- osn-app/src/features/human-body/nervous-data.js osn-app/src/features/human-body/nervous-data.test.mjs osn-app/src/features/human-body/nervous.jsx
```

---

### Task 10: Rangka & Otot scene (`ipa-02f`)

**Files:**
- Create: `osn-app/src/features/human-body/skeletal-data.js`
- Create: `osn-app/src/features/human-body/skeletal-data.test.mjs`
- Create: `osn-app/src/features/human-body/skeletal.jsx`

Mostly primitive — only the spine and pelvis have real models. Anchor points taken from real bounding boxes already measured (see spec): pelvis sits at y≈[-0.03, 0.18], vertebrae span y≈[0.15, 0.76], skin (whole body) spans y≈[-0.91, 0.91] — so legs (no real model) run from the pelvis bottom down to the skin's bottom, arms roughly from shoulder height (chest, y≈0.55) down to hip height.

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/human-body/skeletal-data.js
// tengkorak, tulang rusuk, tulang lengan, tulang kaki tidak punya model asli — primitif,
// diposisikan relatif terhadap tulang belakang & panggul asli (lihat komentar per bagian).
export const SKELETAL_PRIMITIVES = {
  tengkorak: { position: [0, 0.83, 0], radius: 0.09 },
  tulangRusuk: { position: [0, 0.5, 0], radiusX: 0.16, radiusY: 0.14, radiusZ: 0.1 },
  tulangLenganKiri: { from: [0.2, 0.58, 0], to: [0.22, 0.15, 0] },
  tulangLenganKanan: { from: [-0.2, 0.58, 0], to: [-0.22, 0.15, 0] },
  tulangKakiKiri: { from: [0.08, -0.03, 0], to: [0.09, -0.85, 0] },
  tulangKakiKanan: { from: [-0.08, -0.03, 0], to: [-0.09, -0.85, 0] },
};

export const SKELETAL_PARTS = [
  { id: 'tengkorak', name: 'Tengkorak', real: false, fact: 'Melindungi otak, tersusun dari tulang-tulang yang menyatu erat.' },
  { id: 'tulang-belakang', name: 'Tulang Belakang', real: true, models: ['/models/vertebrae.glb'], fact: 'Menopang tubuh & melindungi sumsum tulang belakang, tersusun dari ruas-ruas tulang (vertebra).' },
  { id: 'panggul', name: 'Panggul', real: true, models: ['/models/pelvis.glb'], fact: 'Menopang berat tubuh bagian atas dan menghubungkan tulang belakang dengan tulang kaki.' },
  { id: 'tulang-rusuk', name: 'Tulang Rusuk', real: false, fact: 'Membentuk rongga dada untuk melindungi jantung dan paru-paru.' },
  { id: 'tulang-lengan', name: 'Tulang Lengan', real: false, fact: 'Memungkinkan gerakan tangan, digerakkan oleh otot yang menempel di tulang.' },
  { id: 'tulang-kaki', name: 'Tulang Kaki', real: false, fact: 'Tulang terpanjang & terkuat di tubuh, menopang berat badan saat berdiri dan berjalan.' },
  { id: 'otot', name: 'Otot', real: false, fact: 'Jaringan yang menempel pada tulang dan berkontraksi untuk menggerakkan tubuh.' },
];

// Skeleton spans nearly the full body (skull to feet) — wider view than the organ-cluster scenes.
export const SKELETAL_DETAIL_TARGET = [0, 0.1, 0];
export const SKELETAL_DETAIL_CAMERA = [0, 0.1, 1.6];
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/human-body/skeletal-data.test.mjs
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { SKELETAL_PARTS, SKELETAL_PRIMITIVES, SKELETAL_DETAIL_TARGET, SKELETAL_DETAIL_CAMERA } from './skeletal-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(SKELETAL_PARTS.length, 7, 'expected 7 skeletal/muscular parts');

SKELETAL_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  if (part.real) {
    part.models.forEach((modelPath) => {
      assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
    });
  }
});

const realCount = SKELETAL_PARTS.filter((p) => p.real).length;
assert.equal(realCount, 2, 'expected exactly 2 real-model parts (tulang-belakang, panggul)');

assert.ok(SKELETAL_PRIMITIVES.tengkorak && SKELETAL_PRIMITIVES.tulangRusuk, 'primitive geometry present');
assert.equal(SKELETAL_DETAIL_TARGET.length, 3);
assert.equal(SKELETAL_DETAIL_CAMERA.length, 3);

console.log('skeletal-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/skeletal-data.test.mjs`
Expected: `skeletal-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/human-body/skeletal.jsx
import { useState } from 'react';
import { Line } from '@react-three/drei';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { ViewToggle } from './ViewToggle';
import { SKELETAL_PARTS, SKELETAL_PRIMITIVES, SKELETAL_DETAIL_TARGET, SKELETAL_DETAIL_CAMERA } from './skeletal-data';

export function SkeletalScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = SKELETAL_PARTS.find((p) => p.id === selectedId) || null;
  const isDetail = mode === 'detail';
  const handleSelect = interactive ? setSelectedId : undefined;
  const onClickFor = (id) => (handleSelect ? (e) => { e.stopPropagation(); handleSelect(id); } : undefined);

  return (
    <SceneCanvas
      // key={mode}: R3F's <Canvas camera={{position}}> only applies that position once, at
      // initial mount — changing cameraPosition later does NOT move an already-created camera.
      // Keying on mode forces a remount (fresh camera) on every Dalam Tubuh/Detail Organ toggle.
      key={mode}
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={isDetail ? SKELETAL_DETAIL_CAMERA : [0, 0, 2.6]}
      target={isDetail ? SKELETAL_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.6 : 1.4}
      maxDistance={isDetail ? 4 : 6}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Sistem Rangka & Otot" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {/* Otot: reuses the real skin mesh, tinted red and made translucent, wrapping the bones
          underneath — no dedicated muscle model exists in the source dataset. */}
      <OrganModel id="otot" url="/models/skin.glb" opacity={0.35} tint="#c0392b" scale={1.03} onSelect={handleSelect} />

      {SKELETAL_PARTS.filter((p) => p.real).map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} onSelect={handleSelect} />
        ))
      )}

      <mesh position={SKELETAL_PRIMITIVES.tengkorak.position} onClick={onClickFor('tengkorak')}>
        <sphereGeometry args={[SKELETAL_PRIMITIVES.tengkorak.radius, 20, 20]} />
        <meshStandardMaterial color="#f5f0e6" />
      </mesh>
      <mesh position={SKELETAL_PRIMITIVES.tulangRusuk.position} onClick={onClickFor('tulang-rusuk')}>
        <sphereGeometry args={[SKELETAL_PRIMITIVES.tulangRusuk.radiusX, 20, 20]} />
        <meshStandardMaterial color="#f5f0e6" transparent opacity={0.6} />
      </mesh>
      {[SKELETAL_PRIMITIVES.tulangLenganKiri, SKELETAL_PRIMITIVES.tulangLenganKanan].map((bone, i) => (
        <Line key={`lengan-${i}`} points={[bone.from, bone.to]} color="#f5f0e6" lineWidth={8} onClick={onClickFor('tulang-lengan')} />
      ))}
      {[SKELETAL_PRIMITIVES.tulangKakiKiri, SKELETAL_PRIMITIVES.tulangKakiKanan].map((bone, i) => (
        <Line key={`kaki-${i}`} points={[bone.from, bone.to]} color="#f5f0e6" lineWidth={10} onClick={onClickFor('tulang-kaki')} />
      ))}
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/skeletal.jsx src/features/human-body/skeletal-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/human-body/skeletal-data.js osn-app/src/features/human-body/skeletal-data.test.mjs osn-app/src/features/human-body/skeletal.jsx
git commit -m "feat: add Sistem Rangka & Otot 3D scene (ipa-02f)" -- osn-app/src/features/human-body/skeletal-data.js osn-app/src/features/human-body/skeletal-data.test.mjs osn-app/src/features/human-body/skeletal.jsx
```

---

### Task 11: Registry additions

**Files:**
- Modify: `osn-app/src/features/astronomy/registry.js`

- [ ] **Step 1: Read the current file**

Read `osn-app/src/features/astronomy/registry.js` to confirm its current content (6 astronomy entries from Batch 2).

- [ ] **Step 2: Add imports and entries**

Add these imports (adjust the relative path — `registry.js` lives in `astronomy/`, the new scenes live in `../human-body/`):

```javascript
import { DigestiveScene } from '../human-body/digestive';
import { RespiratoryScene } from '../human-body/respiratory';
import { CirculatoryScene } from '../human-body/circulatory';
import { ExcretoryScene } from '../human-body/excretory';
import { NervousScene } from '../human-body/nervous';
import { SkeletalScene } from '../human-body/skeletal';
```

Add these 6 entries to `SCENE_REGISTRY` (alongside the existing 6):

```javascript
  'ipa-02a': { component: DigestiveScene, label: 'Sistem Pencernaan' },
  'ipa-02b': { component: RespiratoryScene, label: 'Sistem Pernapasan' },
  'ipa-02c': { component: CirculatoryScene, label: 'Sistem Peredaran Darah' },
  'ipa-02d': { component: ExcretoryScene, label: 'Sistem Ekskresi' },
  'ipa-02e': { component: NervousScene, label: 'Sistem Saraf & Indera' },
  'ipa-02f': { component: SkeletalScene, label: 'Sistem Rangka & Otot' },
```

- [ ] **Step 3: Lint**

Run: `cd osn-app && npx eslint src/features/astronomy/registry.js`
Expected: no errors.

- [ ] **Step 4: Build check**

Run: `cd osn-app && npm run build`
Expected: succeeds — confirms all 6 new scene imports resolve.

- [ ] **Step 5: Commit**

```bash
git add osn-app/src/features/astronomy/registry.js
git commit -m "feat: register the 6 human-body scenes (ipa-02a through 02f)" -- osn-app/src/features/astronomy/registry.js
```

---

### Task 12: Manual verification (all 12 scenes)

No automated UI test framework beyond eslint — same browser verification requirement as Batch 2, which twice caught real runtime bugs that lint/build missed entirely.

- [ ] **Step 1: Start the dev server**

Run: `cd osn-app && npm run dev`

- [ ] **Step 2: Verify each of the 6 new scenes in "Jelajah 3D"**

For each of Pencernaan, Pernapasan, Peredaran Darah, Ekskresi, Saraf & Indera, Rangka & Otot:
- Open it from the picker. Confirm the canvas renders with zero console errors (check DevTools/browser console — Draco decode failures, missing model 404s, or the `useFrame`-outside-Canvas class of bug from Batch 2 would show here, not in the build).
- Confirm "Dalam Tubuh" mode (default) shows the translucent body with organs visible inside it at plausible anatomical positions (not floating outside the body, not all bunched at the origin).
- Switch to "Detail Organ" — confirm the camera zooms to a reasonable framing of that scene's organs (not too close to see anything, not so far they're tiny specks) and the body silhouette disappears. If framing looks off, adjust that scene's `_DETAIL_TARGET`/`_DETAIL_CAMERA`/`minDistance`/`maxDistance` values and re-verify — these were estimated from bounding-box math, not visually tuned, so some adjustment here is expected (same as Batch 2's camera positions needed no fixes, but Batch 2's lighting/depth-write/click-accuracy did need fixes after visual inspection — budget for at least one round of tuning here).
- Click every clickable part and confirm `InfoPanel` shows the right name/fact, then closes correctly.
- Drag to orbit (rotate the camera) in both modes.

- [ ] **Step 3: Verify inline widgets in Practice**

For at least 2 of the 6 (e.g. `ipa-02d`, `ipa-02f` — one full-real, one mostly-primitive): open Practice for that sub-bab, confirm the scene renders inline correctly (registry-driven, same mechanism already proven in Batch 2 — should need no PracticeArea changes), and confirm quiz flow still works normally.

- [ ] **Step 4: Confirm no regression to the 6 astronomy scenes**

Spot-check Tata Surya and one other astronomy scene (e.g. Atmosfer) — confirm they still show the Milky Way background (not accidentally defaulted to `'clinical'`) and still work exactly as before this batch.

- [ ] **Step 5: Fix anything found, then re-verify**

If any scene has issues (bad framing, a primitive positioned oddly, a click misfire), fix it directly in that scene's file, re-run the affected node test + eslint, and re-check in the browser. Commit each fix as its own small commit (scoped to the exact file(s) changed, following this whole plan's established pathspec discipline), not folded into an earlier task's commit.

---

## Out of scope (see spec)

- Batch 3b (the remaining 8 ch.02 sub-bab — Reproduksi, Pubertas, Gizi, 2× Penyakit, Kebersihan, Soal Terapan, Bioteknologi).
- Video recording (`isCleanMode`) integration.
- Parts with no real model beyond what's already covered by primitives in this plan.
