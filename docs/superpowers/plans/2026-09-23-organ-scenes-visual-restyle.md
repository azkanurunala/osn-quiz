# Organ Scenes Visual Restyle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 6 human-body organ scenes' photorealistic-but-artifact-carrying organ materials with clean toon/cel-shaded solid colors, and fix two composition bugs found during review (Sistem Rangka's broken Detail Organ mode, Sistem Pencernaan's disconnected primitives).

**Architecture:** One core change in the shared `OrganModel.jsx` (construct `MeshToonMaterial` instead of cloning the original baked material) cascades to every scene that uses it, including Batch 3b's Penyakit scenes for free. Each of the 6 Batch 3a scenes gets `tint` colors added to its data module and its primitive markers' material swapped from `meshStandardMaterial` to `meshToonMaterial` for visual consistency. Batch 3b's non-organ scenes get the same primitive material swap only (no color/position changes — they never had the artifact problem).

**Tech Stack:** `three` (`MeshToonMaterial`, already available via `@react-three/fiber`'s intrinsic elements — no new import needed in JSX, only in `OrganModel.jsx` which constructs it imperatively). No new npm dependencies.

See design spec: `docs/superpowers/specs/2026-09-23-organ-scenes-visual-restyle-design.md`.

---

### Task 1: `OrganModel.jsx` — core material change

**Files:**
- Modify: `osn-app/src/features/human-body/OrganModel.jsx`

This is the single shared component every real-organ-model scene depends on. Changing how it builds materials fixes the texture-artifact problem everywhere at once (all 6 Batch 3a scenes + Batch 3b's Penyakit Tidak Menular/Menular scenes).

- [ ] **Step 1: Replace the file**

```jsx
// osn-app/src/features/human-body/OrganModel.jsx
import { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshToonMaterial } from 'three';

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
  //
  // Every mesh gets a FRESH MeshToonMaterial rather than a clone of the original baked
  // material. The original HuBMAP materials carry per-vertex/texture-baked detail (measurement
  // markings, research-reference coloring) meant for professional anatomical software, not a
  // children's illustration — a fresh material discards that entirely and replaces it with a
  // flat, toon-shaded solid color, which is also how the marking artifacts get removed (see
  // design spec's live-prototype comparison). `tint` is now effectively required — every real
  // organ usage across the app passes one — with a neutral gray fallback so a caller that
  // forgets doesn't crash, just renders plain.
  const preparedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = new MeshToonMaterial({ color: tint || '#9e9e9e' });
        if (opacity !== undefined) {
          child.material.transparent = true;
          child.material.opacity = opacity;
          child.material.depthWrite = false;
        }
      }
    });
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

- [ ] **Step 3: Build check**

Run: `cd osn-app && npm run build`
Expected: succeeds. Every scene using `OrganModel` will now render organs in plain gray (`#9e9e9e`) until later tasks add real `tint` colors — this is an expected, short-lived intermediate state within this plan, not a regression to fix here.

- [ ] **Step 4: Commit**

```bash
git add osn-app/src/features/human-body/OrganModel.jsx
git commit -m "fix: OrganModel always builds a fresh toon material (removes baked texture artifacts)" -- osn-app/src/features/human-body/OrganModel.jsx
```

---

### Task 2: Sistem Ekskresi — add organ colors

**Files:**
- Modify: `osn-app/src/features/human-body/excretory-data.js`
- Modify: `osn-app/src/features/human-body/excretory.jsx`
- Modify: `osn-app/src/features/human-body/excretory-data.test.mjs`

- [ ] **Step 1: Replace the data file**

```javascript
// osn-app/src/features/human-body/excretory-data.js
export const EXCRETORY_PARTS = [
  {
    id: 'ginjal',
    name: 'Ginjal',
    models: ['/models/kidney_l.glb', '/models/kidney_r.glb'],
    tint: '#a0524a',
    fact: 'Menyaring darah dan membuang zat sisa sebagai urine. Manusia punya sepasang ginjal. Selain ginjal, kulit (lewat keringat), paru-paru (lewat karbon dioksida), dan hati (lewat empedu) juga ikut membuang zat sisa dari tubuh.',
  },
  {
    id: 'ureter',
    name: 'Ureter',
    models: ['/models/ureter_l.glb', '/models/ureter_r.glb'],
    tint: '#e8c9a0',
    fact: 'Saluran yang mengalirkan urine dari ginjal menuju kandung kemih.',
  },
  {
    id: 'kandung-kemih',
    name: 'Kandung Kemih',
    models: ['/models/urinary_bladder.glb'],
    tint: '#e8d4a0',
    fact: 'Kantung tempat urine ditampung sementara sebelum dikeluarkan dari tubuh.',
  },
];

export const EXCRETORY_DETAIL_TARGET = [0, 0.18, 0];
export const EXCRETORY_DETAIL_CAMERA = [0, 0.18, 0.4];
```

- [ ] **Step 2: Replace the test file**

```javascript
// osn-app/src/features/human-body/excretory-data.test.mjs
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { EXCRETORY_PARTS, EXCRETORY_DETAIL_TARGET, EXCRETORY_DETAIL_CAMERA } from './excretory-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(EXCRETORY_PARTS.length, 3, 'expected 3 excretory parts');

EXCRETORY_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'models', 'tint', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  part.models.forEach((modelPath) => {
    assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
  });
});

assert.equal(EXCRETORY_DETAIL_TARGET.length, 3);
assert.equal(EXCRETORY_DETAIL_CAMERA.length, 3);

console.log('excretory-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/excretory-data.test.mjs`
Expected: `excretory-data: all checks passed`.

- [ ] **Step 4: Pass tint through in the scene component**

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
      // key={mode}: R3F's <Canvas camera={{position}}> only applies that position once, on
      // initial mount — changing the cameraPosition prop later does NOT move an already-created
      // camera. Keying on mode forces a full remount (and thus a fresh camera position) whenever
      // Dalam Tubuh <-> Detail Organ toggles; useGLTF's cache means the GLB models don't re-fetch.
      key={mode}
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={isDetail ? EXCRETORY_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? EXCRETORY_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.15 : 1.2}
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
            tint={part.tint}
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

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/human-body/excretory-data.js osn-app/src/features/human-body/excretory-data.test.mjs osn-app/src/features/human-body/excretory.jsx
git commit -m "style: add toon colors to Sistem Ekskresi organs" -- osn-app/src/features/human-body/excretory-data.js osn-app/src/features/human-body/excretory-data.test.mjs osn-app/src/features/human-body/excretory.jsx
```

---

### Task 3: Sistem Peredaran Darah — add organ colors

**Files:**
- Modify: `osn-app/src/features/human-body/circulatory-data.js`
- Modify: `osn-app/src/features/human-body/circulatory.jsx`
- Modify: `osn-app/src/features/human-body/circulatory-data.test.mjs`

- [ ] **Step 1: Replace the data file**

```javascript
// osn-app/src/features/human-body/circulatory-data.js
export const CIRCULATORY_PARTS = [
  {
    id: 'jantung',
    name: 'Jantung',
    models: ['/models/heart.glb'],
    tint: '#d9665c',
    fact: 'Otot pemompa darah, berdetak sekitar 60-100 kali per menit, mengalirkan darah ke seluruh tubuh.',
  },
  {
    id: 'pembuluh-darah',
    name: 'Pembuluh Darah',
    models: ['/models/blood_vasculature_heart.glb'],
    tint: '#b33951',
    fact: 'Arteri membawa darah kaya oksigen DARI jantung ke seluruh tubuh; vena membawa darah kembali KE jantung. Bersama-sama membentuk jaringan pembuluh yang mengalirkan darah ke seluruh tubuh.',
  },
];

export const CIRCULATORY_DETAIL_TARGET = [0, 0.45, 0];
export const CIRCULATORY_DETAIL_CAMERA = [0, 0.45, 0.65];
```

- [ ] **Step 2: Replace the test file**

```javascript
// osn-app/src/features/human-body/circulatory-data.test.mjs
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { CIRCULATORY_PARTS, CIRCULATORY_DETAIL_TARGET, CIRCULATORY_DETAIL_CAMERA } from './circulatory-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(CIRCULATORY_PARTS.length, 2, 'expected 2 circulatory parts');

CIRCULATORY_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'models', 'tint', 'fact']) {
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

- [ ] **Step 4: Pass tint through in the scene component**

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
      key={mode}
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={isDetail ? CIRCULATORY_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? CIRCULATORY_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.15 : 1.2}
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
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} tint={part.tint} onSelect={interactive ? setSelectedId : undefined} />
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
git commit -m "style: add toon colors to Sistem Peredaran Darah organs" -- osn-app/src/features/human-body/circulatory-data.js osn-app/src/features/human-body/circulatory-data.test.mjs osn-app/src/features/human-body/circulatory.jsx
```

---

### Task 4: Sistem Pernapasan — add organ colors + swap nose marker material

**Files:**
- Modify: `osn-app/src/features/human-body/respiratory-data.js`
- Modify: `osn-app/src/features/human-body/respiratory.jsx`
- Modify: `osn-app/src/features/human-body/respiratory-data.test.mjs`

- [ ] **Step 1: Replace the data file**

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
    tint: '#e0b8a8',
    fact: 'Saluran udara utama menuju paru-paru, dilapisi cincin tulang rawan agar tetap terbuka.',
  },
  {
    id: 'bronkus',
    name: 'Bronkus',
    real: true,
    models: ['/models/main_bronchus.glb'],
    tint: '#d4a898',
    fact: 'Cabang trakea yang mengalirkan udara ke masing-masing paru-paru kanan dan kiri.',
  },
  {
    id: 'paru-paru',
    name: 'Paru-paru',
    real: true,
    models: ['/models/lung.glb'],
    tint: '#e8b4b8',
    fact: 'Tempat pertukaran oksigen dan karbon dioksida terjadi di kantung-kantung kecil bernama alveolus.',
  },
];

export const RESPIRATORY_DETAIL_TARGET = [0, 0.52, 0];
export const RESPIRATORY_DETAIL_CAMERA = [0, 0.52, 0.6];
```

- [ ] **Step 2: Replace the test file**

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
    assert.ok(part.tint, `${part.id} marked real but has no tint color`);
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

- [ ] **Step 4: Pass tint through and swap the nose marker's material**

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
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} tint={part.tint} onSelect={handleSelect} />
        ))
      )}
      <mesh
        position={NOSE_MARKER.position}
        onClick={handleSelect ? (e) => { e.stopPropagation(); handleSelect('hidung'); } : undefined}
      >
        <sphereGeometry args={[NOSE_MARKER.radius, 16, 16]} />
        <meshToonMaterial color={NOSE_MARKER.color} />
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
git commit -m "style: add toon colors to Sistem Pernapasan organs" -- osn-app/src/features/human-body/respiratory-data.js osn-app/src/features/human-body/respiratory-data.test.mjs osn-app/src/features/human-body/respiratory.jsx
```

---

### Task 5: Sistem Saraf & Indera — add organ colors + swap sense marker material

**Files:**
- Modify: `osn-app/src/features/human-body/nervous-data.js`
- Modify: `osn-app/src/features/human-body/nervous.jsx`
- Modify: `osn-app/src/features/human-body/nervous-data.test.mjs`

- [ ] **Step 1: Replace the data file**

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
  { id: 'otak', name: 'Otak', real: true, models: ['/models/brain.glb'], tint: '#c9a8b8', fact: 'Pusat kendali tubuh — mengatur pikiran, gerakan, dan semua indera.' },
  { id: 'sumsum-tulang-belakang', name: 'Sumsum Tulang Belakang', real: true, models: ['/models/spinal_cord.glb'], tint: '#ede0c8', fact: 'Jalur utama sinyal saraf antara otak dan seluruh tubuh, dilindungi oleh tulang belakang.' },
  // eye.glb listed twice deliberately: the source dataset only ships one eye model, so the scene
  // renders it a second time mirrored (scale=[-1,1,1]) for the other eye — see Step 4 below.
  { id: 'mata', name: 'Mata (Penglihatan)', real: true, models: ['/models/eye.glb', '/models/eye.glb'], tint: '#dce8f0', fact: 'Indera penglihatan — menangkap cahaya dan mengirim sinyal gambar ke otak.' },
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

- [ ] **Step 2: Replace the test file**

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
    assert.ok(part.tint, `${part.id} marked real but has no tint color`);
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

- [ ] **Step 4: Pass tint through and swap sense-marker material**

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
            tint={part.tint}
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
          <meshToonMaterial color={marker.color} />
        </mesh>
      ))}
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/nervous.jsx src/features/human-body/nervous-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/human-body/nervous-data.js osn-app/src/features/human-body/nervous-data.test.mjs osn-app/src/features/human-body/nervous.jsx
git commit -m "style: add toon colors to Sistem Saraf & Indera organs" -- osn-app/src/features/human-body/nervous-data.js osn-app/src/features/human-body/nervous-data.test.mjs osn-app/src/features/human-body/nervous.jsx
```

---

### Task 6: Sistem Pencernaan — add organ colors + fix disconnected primitives

**Files:**
- Modify: `osn-app/src/features/human-body/digestive-data.js`
- Modify: `osn-app/src/features/human-body/digestive.jsx`
- Modify: `osn-app/src/features/human-body/digestive-data.test.mjs`

`gltf-transform inspect` on `public/models/small_intestine.glb` shows its real bounding box: `bboxMin [-0.06175, 0.09983, 0.00197]`, `bboxMax [0.12623, 0.3652, 0.12413]` — its top-of-mesh Y is `0.3652`. The current primitive chain (mulut → kerongkongan → lambung) ends well above that with visible gaps, reading as disconnected floating shapes (confirmed via screenshot review). This task tightens the Y positions so each segment overlaps the next, and re-centers the Detail Organ camera/target on the new, taller span.

- [ ] **Step 1: Replace the data file**

```javascript
// osn-app/src/features/human-body/digestive-data.js
// mulut, kerongkongan, lambung tidak punya model asli — primitif yang menyambung ke usus halus asli.
// Posisi direvisi 2026-09-23 setelah review visual menemukan gap terlihat antar segmen: usus halus
// asli (gltf-transform inspect) punya bboxMin y=0.09983, bboxMax y=0.3652 — rantai
// mulut->kerongkongan->lambung->usus sekarang tumpang tindih sedikit tiap sambungan, bukan
// mengambang terpisah seperti sebelumnya.
export const DIGESTIVE_PRIMITIVES = {
  mulut: { position: [0, 0.83, 0.09], radius: 0.02 },
  kerongkongan: { from: [0, 0.8, 0.06], to: [0, 0.5, 0.02], radius: 0.012 },
  lambung: { position: [0.02, 0.4, 0.03], radiusX: 0.06, radiusY: 0.1, radiusZ: 0.05 },
};

export const DIGESTIVE_PARTS = [
  { id: 'mulut', name: 'Mulut', real: false, fact: 'Tempat makanan mulai dicerna secara mekanik (dikunyah) dan kimiawi (enzim ptialin memecah karbohidrat).' },
  { id: 'kerongkongan', name: 'Kerongkongan (Esofagus)', real: false, fact: 'Saluran yang mendorong makanan dari mulut ke lambung dengan gerakan meremas (peristaltik).' },
  { id: 'lambung', name: 'Lambung', real: false, fact: 'Mencerna makanan dengan asam lambung dan enzim pepsin, mengubahnya jadi bubur (kim).' },
  { id: 'usus-halus', name: 'Usus Halus', real: true, models: ['/models/small_intestine.glb'], tint: '#e0a898', fact: 'Tempat pencernaan selesai & sebagian besar nutrisi diserap ke darah. Panjangnya bisa mencapai 6-7 meter.' },
  { id: 'usus-besar', name: 'Usus Besar', real: true, models: ['/models/large_intestine.glb'], tint: '#c9967a', fact: 'Menyerap air dari sisa makanan & membentuk feses, dibantu bakteri baik.' },
];

// Target/camera re-centered on the taller mulut(~0.85)-to-usus-bottom(~0.10) span (~0.75 units) —
// previously centered too low/too close, contributing to the disconnected-looking framing.
export const DIGESTIVE_DETAIL_TARGET = [0, 0.48, 0];
export const DIGESTIVE_DETAIL_CAMERA = [0, 0.48, 1.0];
```

- [ ] **Step 2: Replace the test file**

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
    assert.ok(part.tint, `${part.id} marked real but has no tint color`);
    part.models.forEach((modelPath) => {
      assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
    });
  } else {
    assert.ok(DIGESTIVE_PRIMITIVES[part.id], `${part.id} marked primitive but has no entry in DIGESTIVE_PRIMITIVES`);
  }
});

// Chain-continuity check: each primitive segment's lower Y bound should be at or above the next
// segment's upper Y bound minus a small overlap tolerance, i.e. no visible gap between segments.
const mulutBottom = DIGESTIVE_PRIMITIVES.mulut.position[1] - DIGESTIVE_PRIMITIVES.mulut.radius;
const kerongkonganTop = DIGESTIVE_PRIMITIVES.kerongkongan.from[1];
assert.ok(kerongkonganTop <= mulutBottom + 0.05, 'kerongkongan top should be close to mulut bottom');

const kerongkonganBottom = DIGESTIVE_PRIMITIVES.kerongkongan.to[1];
const lambungTop = DIGESTIVE_PRIMITIVES.lambung.position[1] + DIGESTIVE_PRIMITIVES.lambung.radiusY;
assert.ok(lambungTop >= kerongkonganBottom - 0.05, 'lambung top should reach up to meet kerongkongan bottom');

const lambungBottom = DIGESTIVE_PRIMITIVES.lambung.position[1] - DIGESTIVE_PRIMITIVES.lambung.radiusY;
const SMALL_INTESTINE_BBOX_TOP_Y = 0.3652; // from gltf-transform inspect public/models/small_intestine.glb
assert.ok(lambungBottom <= SMALL_INTESTINE_BBOX_TOP_Y + 0.05, 'lambung bottom should reach down to overlap the real intestine mesh');

assert.equal(DIGESTIVE_DETAIL_TARGET.length, 3);
assert.equal(DIGESTIVE_DETAIL_CAMERA.length, 3);

console.log('digestive-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/digestive-data.test.mjs`
Expected: `digestive-data: all checks passed`.

- [ ] **Step 4: Pass tint through, swap primitive materials, widen maxDistance**

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
      key={mode}
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={isDetail ? DIGESTIVE_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? DIGESTIVE_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.4 : 1.2}
      maxDistance={isDetail ? 3 : 5}
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
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} tint={part.tint} onSelect={handleSelect} />
        ))
      )}
      <mesh position={DIGESTIVE_PRIMITIVES.mulut.position} onClick={onClickFor('mulut')}>
        <sphereGeometry args={[DIGESTIVE_PRIMITIVES.mulut.radius, 16, 16]} />
        <meshToonMaterial color="#e8a87c" />
      </mesh>
      <Line
        points={[DIGESTIVE_PRIMITIVES.kerongkongan.from, DIGESTIVE_PRIMITIVES.kerongkongan.to]}
        color="#e8967a"
        lineWidth={6}
        onClick={onClickFor('kerongkongan')}
      />
      <mesh
        position={DIGESTIVE_PRIMITIVES.lambung.position}
        scale={[
          1,
          DIGESTIVE_PRIMITIVES.lambung.radiusY / DIGESTIVE_PRIMITIVES.lambung.radiusX,
          DIGESTIVE_PRIMITIVES.lambung.radiusZ / DIGESTIVE_PRIMITIVES.lambung.radiusX,
        ]}
        onClick={onClickFor('lambung')}
      >
        <sphereGeometry args={[DIGESTIVE_PRIMITIVES.lambung.radiusX, 20, 20]} />
        <meshToonMaterial color="#d98c5f" />
      </mesh>
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/digestive.jsx src/features/human-body/digestive-data.js`
Expected: no errors.

- [ ] **Step 6: Visual check — screenshot Detail Organ mode**

This scene's fix is inherently a visual-tuning task, not a pure numeric one. Start the dev server (`cd osn-app && npm run dev`), open the Sistem Pencernaan scene in "Jelajah 3D", switch to Detail Organ, and screenshot it (Playwright or manual). If mulut/kerongkongan/lambung still read as visibly disconnected from the intestine mass, adjust `DIGESTIVE_PRIMITIVES` Y positions further (shrink gaps, don't just re-tune the camera) and re-screenshot. Budget for at least one round of adjustment — the numbers above are a strong first attempt, not guaranteed-perfect.

- [ ] **Step 7: Commit**

```bash
git add osn-app/src/features/human-body/digestive-data.js osn-app/src/features/human-body/digestive-data.test.mjs osn-app/src/features/human-body/digestive.jsx
git commit -m "fix: reconnect Sistem Pencernaan's primitive chain + add toon colors" -- osn-app/src/features/human-body/digestive-data.js osn-app/src/features/human-body/digestive-data.test.mjs osn-app/src/features/human-body/digestive.jsx
```

---

### Task 7: Sistem Rangka & Otot — add organ colors, fix Detail Organ bug, replace ribcage primitive

**Files:**
- Modify: `osn-app/src/features/human-body/skeletal-data.js`
- Modify: `osn-app/src/features/human-body/skeletal.jsx`
- Modify: `osn-app/src/features/human-body/skeletal-data.test.mjs`

Two fixes here beyond the color/material pass: (1) the "otot" full-body wrapper must hide in Detail Organ mode (it currently doesn't, defeating the purpose of zooming in on bones), matching the `{!isDetail && ...}` pattern every other scene already uses for its body-context element; (2) the `tulangRusuk` single-sphere primitive (which reads as a floating translucent smudge on the chest, confirmed via screenshot) is replaced with 5 curved `<Line>` arcs suggesting a ribcage silhouette, generated once in the data module from simple ellipse-arc math (same "precompute points in data, render via `<Line>` in component" pattern already used by the Bioteknologi scene's DNA helix).

- [ ] **Step 1: Replace the data file**

```javascript
// osn-app/src/features/human-body/skeletal-data.js
// tengkorak, tulang lengan, tulang kaki tidak punya model asli — primitif, diposisikan relatif
// terhadap tulang belakang & panggul asli. Tulang rusuk direpresentasikan sbg beberapa garis
// lengkung (bukan satu bola besar spt sebelumnya, yg terlihat seperti noda melayang di dada).
export const SKELETAL_PRIMITIVES = {
  tengkorak: { position: [0, 0.83, 0], radius: 0.09 },
  tulangLenganKiri: { from: [0.2, 0.58, 0], to: [0.22, 0.15, 0] },
  tulangLenganKanan: { from: [-0.2, 0.58, 0], to: [-0.22, 0.15, 0] },
  tulangKakiKiri: { from: [0.08, -0.03, 0], to: [0.09, -0.85, 0] },
  tulangKakiKanan: { from: [-0.08, -0.03, 0], to: [-0.09, -0.85, 0] },
};

const RIB_Y_SPAN = [0.4, 0.62];
const RIB_COUNT = 5;
const RIB_RADIUS_X = 0.14;
const RIB_RADIUS_Z = 0.09;
const RIB_ARC_ANGLE = Math.PI * 0.9;
const RIB_ARC_SEGMENTS = 16;

function ribArcPoints(y) {
  const points = [];
  for (let i = 0; i <= RIB_ARC_SEGMENTS; i += 1) {
    const t = i / RIB_ARC_SEGMENTS;
    const angle = -RIB_ARC_ANGLE / 2 + t * RIB_ARC_ANGLE;
    points.push([Math.sin(angle) * RIB_RADIUS_X, y, Math.cos(angle) * RIB_RADIUS_Z]);
  }
  return points;
}

export const RIB_ARCS = Array.from({ length: RIB_COUNT }, (_, i) => {
  const t = i / (RIB_COUNT - 1);
  return ribArcPoints(RIB_Y_SPAN[0] + t * (RIB_Y_SPAN[1] - RIB_Y_SPAN[0]));
});

export const SKELETAL_PARTS = [
  { id: 'tengkorak', name: 'Tengkorak', real: false, fact: 'Melindungi otak, tersusun dari tulang-tulang yang menyatu erat.' },
  { id: 'tulang-belakang', name: 'Tulang Belakang', real: true, models: ['/models/vertebrae.glb'], tint: '#f0e6d2', fact: 'Menopang tubuh & melindungi sumsum tulang belakang, tersusun dari ruas-ruas tulang (vertebra).' },
  { id: 'panggul', name: 'Panggul', real: true, models: ['/models/pelvis.glb'], tint: '#f0e6d2', fact: 'Menopang berat tubuh bagian atas dan menghubungkan tulang belakang dengan tulang kaki.' },
  { id: 'tulang-rusuk', name: 'Tulang Rusuk', real: false, fact: 'Membentuk rongga dada untuk melindungi jantung dan paru-paru.' },
  { id: 'tulang-lengan', name: 'Tulang Lengan', real: false, fact: 'Memungkinkan gerakan tangan, digerakkan oleh otot yang menempel di tulang.' },
  { id: 'tulang-kaki', name: 'Tulang Kaki', real: false, fact: 'Tulang terpanjang & terkuat di tubuh, menopang berat badan saat berdiri dan berjalan.' },
  { id: 'otot', name: 'Otot', real: false, fact: 'Jaringan yang menempel pada tulang dan berkontraksi untuk menggerakkan tubuh.' },
];

export const SKELETAL_DETAIL_TARGET = [0, 0.1, 0];
export const SKELETAL_DETAIL_CAMERA = [0, 0.1, 1.6];
```

- [ ] **Step 2: Replace the test file**

```javascript
// osn-app/src/features/human-body/skeletal-data.test.mjs
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { SKELETAL_PARTS, SKELETAL_PRIMITIVES, RIB_ARCS, SKELETAL_DETAIL_TARGET, SKELETAL_DETAIL_CAMERA } from './skeletal-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(SKELETAL_PARTS.length, 7, 'expected 7 skeletal/muscular parts');

SKELETAL_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  if (part.real) {
    assert.ok(part.tint, `${part.id} marked real but has no tint color`);
    part.models.forEach((modelPath) => {
      assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
    });
  }
});

const realCount = SKELETAL_PARTS.filter((p) => p.real).length;
assert.equal(realCount, 2, 'expected exactly 2 real-model parts (tulang-belakang, panggul)');

assert.ok(SKELETAL_PRIMITIVES.tengkorak, 'tengkorak primitive geometry present');

assert.equal(RIB_ARCS.length, 5, 'expected 5 rib arcs');
RIB_ARCS.forEach((arc) => {
  assert.ok(arc.length > 0, 'each rib arc should have points');
  arc.forEach((point) => assert.equal(point.length, 3, 'each rib arc point should be [x,y,z]'));
});

assert.equal(SKELETAL_DETAIL_TARGET.length, 3);
assert.equal(SKELETAL_DETAIL_CAMERA.length, 3);

console.log('skeletal-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/skeletal-data.test.mjs`
Expected: `skeletal-data: all checks passed`.

- [ ] **Step 4: Hide otot in Detail Organ mode, replace ribcage sphere with arcs, pass tint through**

```jsx
// osn-app/src/features/human-body/skeletal.jsx
import { useState } from 'react';
import { Line } from '@react-three/drei';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { ViewToggle } from './ViewToggle';
import {
  SKELETAL_PARTS,
  SKELETAL_PRIMITIVES,
  RIB_ARCS,
  SKELETAL_DETAIL_TARGET,
  SKELETAL_DETAIL_CAMERA,
} from './skeletal-data';

export function SkeletalScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = SKELETAL_PARTS.find((p) => p.id === selectedId) || null;
  const isDetail = mode === 'detail';
  const handleSelect = interactive ? setSelectedId : undefined;
  const onClickFor = (id) => (handleSelect ? (e) => { e.stopPropagation(); handleSelect(id); } : undefined);

  return (
    <SceneCanvas
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
          underneath. Hidden in Detail Organ mode — like HumanBody is hidden elsewhere — so
          zooming in on a bone isn't cluttered by the full-body overlay. Trade-off: Otot itself is
          only inspectable (click-to-info) from Dalam Tubuh mode as a result (see design spec). */}
      {!isDetail && (
        <OrganModel id="otot" url="/models/skin.glb" opacity={0.35} tint="#c0392b" scale={1.03} onSelect={handleSelect} />
      )}

      {SKELETAL_PARTS.filter((p) => p.real).map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} tint={part.tint} onSelect={handleSelect} />
        ))
      )}

      <mesh position={SKELETAL_PRIMITIVES.tengkorak.position} onClick={onClickFor('tengkorak')}>
        <sphereGeometry args={[SKELETAL_PRIMITIVES.tengkorak.radius, 20, 20]} />
        <meshToonMaterial color="#f0e6d2" />
      </mesh>
      {RIB_ARCS.map((points, i) => (
        <Line key={`rib-${i}`} points={points} color="#f0e6d2" lineWidth={4} onClick={onClickFor('tulang-rusuk')} />
      ))}
      {[SKELETAL_PRIMITIVES.tulangLenganKiri, SKELETAL_PRIMITIVES.tulangLenganKanan].map((bone, i) => (
        <Line key={`lengan-${i}`} points={[bone.from, bone.to]} color="#f0e6d2" lineWidth={8} onClick={onClickFor('tulang-lengan')} />
      ))}
      {[SKELETAL_PRIMITIVES.tulangKakiKiri, SKELETAL_PRIMITIVES.tulangKakiKanan].map((bone, i) => (
        <Line key={`kaki-${i}`} points={[bone.from, bone.to]} color="#f0e6d2" lineWidth={10} onClick={onClickFor('tulang-kaki')} />
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
git commit -m "fix: hide otot wrapper in Detail Organ mode + replace ribcage sphere with rib arcs + add toon colors" -- osn-app/src/features/human-body/skeletal-data.js osn-app/src/features/human-body/skeletal-data.test.mjs osn-app/src/features/human-body/skeletal.jsx
```

---

### Task 8: Batch 3b primitive material swap (visual consistency, no color changes)

**Files:**
- Modify: `osn-app/src/features/human-body/hygiene.jsx`
- Modify: `osn-app/src/features/human-body/symptoms.jsx`
- Modify: `osn-app/src/features/human-body/communicable.jsx`
- Modify: `osn-app/src/features/human-body/nutrition.jsx`
- Modify: `osn-app/src/features/human-body/biotech.jsx`

These 5 files never had the baked-texture artifact problem (their primitives always used solid `meshStandardMaterial` colors, no GLB textures). This task only swaps the material component name so every scene in the app looks visually consistent (same toon-shaded style) — no color or position values change. Batch 3b's `noncommunicable.jsx`/`communicable.jsx` real-organ usages already got fixed automatically by Task 1 (they go through `OrganModel`); this task's `communicable.jsx` edit is ONLY for its 3 primitive pathogen markers (virus/bacteria/rash), not its `tbc` organ (already fine via `OrganModel`).

- [ ] **Step 1: `hygiene.jsx` — swap marker material**

In `osn-app/src/features/human-body/hygiene.jsx`, find:

```jsx
          <sphereGeometry args={[marker.radius, 16, 16]} />
          <meshStandardMaterial color={marker.color} />
```

Replace with:

```jsx
          <sphereGeometry args={[marker.radius, 16, 16]} />
          <meshToonMaterial color={marker.color} />
```

- [ ] **Step 2: `symptoms.jsx` — swap marker material**

In `osn-app/src/features/human-body/symptoms.jsx`, find:

```jsx
          <sphereGeometry args={[marker.radius, 16, 16]} />
          <meshStandardMaterial color={marker.color} />
```

Replace with:

```jsx
          <sphereGeometry args={[marker.radius, 16, 16]} />
          <meshToonMaterial color={marker.color} />
```

- [ ] **Step 3: `communicable.jsx` — swap the 3 primitive pathogen markers' materials**

In `osn-app/src/features/human-body/communicable.jsx`, find these three blocks and replace `meshStandardMaterial` with `meshToonMaterial` in each (leave the `OrganModel` usage for `tbc` untouched — it already goes through Task 1's fix):

```jsx
      <mesh position={PATHOGEN_MARKERS.flu.position} onClick={onClickFor('flu')}>
        <icosahedronGeometry args={[PATHOGEN_MARKERS.flu.radius, 0]} />
        <meshToonMaterial color="#8bc34a" />
      </mesh>
      <mesh position={PATHOGEN_MARKERS.diare.position} scale={[1, 1.8, 1]} onClick={onClickFor('diare')}>
        <sphereGeometry args={[PATHOGEN_MARKERS.diare.radius, 12, 12]} />
        <meshToonMaterial color="#9c6b98" />
      </mesh>
      {PATHOGEN_MARKERS.cacar.spots.map((offset, i) => (
        <mesh
          key={`cacar-${i}`}
          position={[
            PATHOGEN_MARKERS.cacar.position[0] + offset[0],
            PATHOGEN_MARKERS.cacar.position[1] + offset[1],
            PATHOGEN_MARKERS.cacar.position[2] + offset[2],
          ]}
          onClick={onClickFor('cacar')}
        >
          <sphereGeometry args={[PATHOGEN_MARKERS.cacar.radius, 12, 12]} />
          <meshToonMaterial color="#e0668a" />
        </mesh>
      ))}
```

- [ ] **Step 4: `nutrition.jsx` — swap plate/wedge/glass materials**

In `osn-app/src/features/human-body/nutrition.jsx`, find these three blocks and replace `meshStandardMaterial` with `meshToonMaterial`:

```jsx
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[PLATE_RADIUS + 0.08, 48]} />
        <meshToonMaterial color="#f5f5f0" />
      </mesh>
      {NUTRITION_WEDGES.map((wedge) => (
        <mesh
          key={wedge.id}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.01, 0]}
          onClick={onClickFor(wedge.id)}
        >
          <circleGeometry args={[PLATE_RADIUS, 32, wedge.thetaStart, wedge.thetaLength]} />
          <meshToonMaterial color={wedge.color} />
        </mesh>
      ))}
      <mesh position={WATER_GLASS.position} onClick={onClickFor('air')}>
        <cylinderGeometry args={[WATER_GLASS.radiusTop, WATER_GLASS.radiusBottom, WATER_GLASS.height, 24]} />
        <meshToonMaterial color="#bcd8e8" transparent opacity={0.6} />
      </mesh>
```

- [ ] **Step 5: `biotech.jsx` — swap fermentation jar material**

In `osn-app/src/features/human-body/biotech.jsx`, find:

```jsx
      <mesh position={FERMENTATION_JAR.position} onClick={onClickFor('fermentasi')}>
        <cylinderGeometry args={[FERMENTATION_JAR.radius, FERMENTATION_JAR.radius, FERMENTATION_JAR.height, 24]} />
        <meshStandardMaterial color="#d4a843" transparent opacity={0.5} />
      </mesh>
```

Replace with:

```jsx
      <mesh position={FERMENTATION_JAR.position} onClick={onClickFor('fermentasi')}>
        <cylinderGeometry args={[FERMENTATION_JAR.radius, FERMENTATION_JAR.radius, FERMENTATION_JAR.height, 24]} />
        <meshToonMaterial color="#d4a843" transparent opacity={0.5} />
      </mesh>
```

(`biotech.jsx`'s DNA helix uses `<Line>`, not a mesh material — nothing to change there.)

- [ ] **Step 6: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/hygiene.jsx src/features/human-body/symptoms.jsx src/features/human-body/communicable.jsx src/features/human-body/nutrition.jsx src/features/human-body/biotech.jsx`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add osn-app/src/features/human-body/hygiene.jsx osn-app/src/features/human-body/symptoms.jsx osn-app/src/features/human-body/communicable.jsx osn-app/src/features/human-body/nutrition.jsx osn-app/src/features/human-body/biotech.jsx
git commit -m "style: swap primitive markers to toon material for visual consistency" -- osn-app/src/features/human-body/hygiene.jsx osn-app/src/features/human-body/symptoms.jsx osn-app/src/features/human-body/communicable.jsx osn-app/src/features/human-body/nutrition.jsx osn-app/src/features/human-body/biotech.jsx
```

---

### Task 9: Full visual verification

**Files:** none (verification only — any fixes found go in their own scoped commit, per Step 5 below)

- [ ] **Step 1: Build check**

Run: `cd osn-app && npm run build`
Expected: succeeds.

- [ ] **Step 2: Start the dev server and screenshot all 6 Batch 3a scenes**

Run: `cd osn-app && npm run dev`

For each of Sistem Pencernaan, Pernapasan, Peredaran Darah, Ekskresi, Saraf & Indera, Rangka & Otot: open it from "Jelajah 3D", screenshot Dalam Tubuh and Detail Organ modes. Confirm for each:
- Zero console errors.
- No visible white/dotted marking artifacts on any organ (the original complaint).
- No harsh glossy specular highlights (organs should read as flat toon-shaded color bands).
- Each organ is a distinct, legible color (compare against the palette table in the design spec).
- Rangka & Otot's Detail Organ mode shows ONLY bones (no full-body otot wrapper) and the ribcage reads as curved rib lines, not a floating sphere/smudge.
- Pencernaan's mulut→kerongkongan→lambung→usus chain reads as one continuous path with no visible gaps (if it still doesn't, go back to Task 6 Step 6's iteration guidance).
- Click-to-info still works for every part in both modes.

- [ ] **Step 3: Spot-check Batch 3b's Penyakit scenes**

Open Penyakit Tidak Menular and Penyakit Menular from "Jelajah 3D". Confirm their real-organ parts (jantung, paru-paru, otak, ginjal, tbc's lung) also render artifact-free now (this should be true automatically from Task 1 — no code changes were made to these two scenes in this plan, so this step is purely confirming the shared-component fix actually reached them).

- [ ] **Step 4: Regression check astronomy scenes**

Open Tata Surya from "Jelajah 3D". Confirm it still shows the Milky Way space background and renders exactly as before — this restyle is scoped to `OrganModel`/organ scenes only, astronomy code is untouched.

- [ ] **Step 5: Fix anything found, then re-verify**

If any scene still has issues (a color that reads wrong, a primitive still misaligned, the Pencernaan chain still gapped), fix it directly in that scene's file, re-run its node test + eslint, and re-check in the browser. Commit each fix as its own small commit scoped to the exact file(s) changed, following this whole plan's established pathspec discipline — do not fold fixes into an earlier task's commit.

---

## Out of scope (see spec)

- Astronomy scenes — untouched, confirmed working as-is in Task 9 Step 4.
- A custom gradient-map texture for `MeshToonMaterial` — default 2-tone already approved via live prototype.
- Reverting to hand-built primitive organs instead of real GLB geometry.
