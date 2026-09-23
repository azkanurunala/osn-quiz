# Human Body 3D Scenes — Batch 3b (Health Topics) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship 6 new 3D scenes for `osn-app` covering the remaining OSN IPA "Tubuh Manusia & Kesehatan" health topics (Gizi, Penyakit Menular, Penyakit Tidak Menular, Kebersihan, Diagnosis Gejala, Bioteknologi), wired into both the "Jelajah 3D" picker and the inline Practice widget via the existing registry.

**Architecture:** Two visual templates. Template A ("Tubuh + Penanda", used by Penyakit Tidak Menular/Menular/Kebersihan/Diagnosis Gejala) fully reuses Batch 3a's `SceneCanvas`/`HumanBody`/`OrganModel`/`ViewToggle`/`InfoPanel` — same "Dalam Tubuh"/"Detail Organ" toggle, same primitive-marker idiom already proven by the Sistem Saraf scene. Template B ("Objek Berdiri Sendiri", used by Gizi/Bioteknologi) is new: no body, no toggle, just a standalone object (plate, DNA helix) in a single static view, reusing only `SceneCanvas`/`InfoPanel`.

**Tech Stack:** React 19, `@react-three/fiber` + `@react-three/drei` (`Line`, already a dependency — no new packages), Vite, Tailwind v4. No new npm dependencies for this batch.

See design spec: `docs/superpowers/specs/2026-09-23-human-body-3d-scenes-batch3b-design.md`.

---

### Task 1: Penyakit Tidak Menular scene (`ipa-02k`)

**Files:**
- Create: `osn-app/src/features/human-body/noncommunicable-data.js`
- Create: `osn-app/src/features/human-body/noncommunicable-data.test.mjs`
- Create: `osn-app/src/features/human-body/noncommunicable.jsx`

Pure reuse of 4 real organ models already shipped in Batch 3a, each shown with a "sakit" tint via `OrganModel`'s existing `tint` prop (uniform recolor — no new component capability needed).

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/human-body/noncommunicable-data.js
// Reuse 4 organ model asli dari Batch 3a, ditampilkan dgn tint gelap utk merepresentasikan
// kerusakan akibat penyakit tidak menular (bukan infeksi, tapi gaya hidup/faktor internal).
export const NONCOMMUNICABLE_PARTS = [
  {
    id: 'jantung',
    name: 'Jantung (Penyakit Jantung Koroner)',
    models: ['/models/heart.glb'],
    tint: '#5c2a2a',
    fact: 'Penyakit Jantung Koroner terjadi saat pembuluh darah yang memberi makan jantung menyempit akibat penumpukan lemak (plak). Disebut "tidak menular" karena penyebabnya bukan kuman, melainkan gaya hidup seperti merokok, kurang olahraga, dan makanan berlemak tinggi.',
  },
  {
    id: 'paru-paru',
    name: 'Paru-paru (PPOK)',
    models: ['/models/lung.glb'],
    tint: '#3a3a3a',
    fact: 'PPOK (Penyakit Paru Obstruktif Kronis) sering terjadi pada perokok jangka panjang — asap rokok merusak kantong-kantong udara kecil di paru-paru sehingga makin sulit bernapas seiring waktu.',
  },
  {
    id: 'otak',
    name: 'Otak (Stroke)',
    models: ['/models/brain.glb'],
    tint: '#4a3a52',
    fact: 'Stroke terjadi saat aliran darah ke sebagian otak terhenti (tersumbat atau pembuluh darahnya pecah), merusak sel-sel otak di area tersebut. Risikonya meningkat karena tekanan darah tinggi & kolesterol tinggi.',
  },
  {
    id: 'ginjal',
    name: 'Ginjal (Gagal Ginjal Kronis)',
    models: ['/models/kidney_l.glb', '/models/kidney_r.glb'],
    tint: '#5c4a2a',
    fact: 'Gagal Ginjal Kronis terjadi saat ginjal kehilangan kemampuan menyaring darah secara bertahap, sering dipicu oleh diabetes & tekanan darah tinggi yang tidak terkontrol dalam waktu lama.',
  },
];

export const NONCOMMUNICABLE_DETAIL_TARGET = [0, 0.45, 0];
export const NONCOMMUNICABLE_DETAIL_CAMERA = [0, 0.45, 1.4];
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/human-body/noncommunicable-data.test.mjs
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { NONCOMMUNICABLE_PARTS, NONCOMMUNICABLE_DETAIL_TARGET, NONCOMMUNICABLE_DETAIL_CAMERA } from './noncommunicable-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(NONCOMMUNICABLE_PARTS.length, 4, 'expected 4 noncommunicable-disease parts');

NONCOMMUNICABLE_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'models', 'tint', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  part.models.forEach((modelPath) => {
    assert.ok(existsSync(`${PUBLIC_DIR}${modelPath}`), `model file missing on disk: ${modelPath}`);
  });
});

assert.equal(NONCOMMUNICABLE_DETAIL_TARGET.length, 3);
assert.equal(NONCOMMUNICABLE_DETAIL_CAMERA.length, 3);

console.log('noncommunicable-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/noncommunicable-data.test.mjs`
Expected: `noncommunicable-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/human-body/noncommunicable.jsx
import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import {
  NONCOMMUNICABLE_PARTS,
  NONCOMMUNICABLE_DETAIL_TARGET,
  NONCOMMUNICABLE_DETAIL_CAMERA,
} from './noncommunicable-data';

export function NoncommunicableScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = NONCOMMUNICABLE_PARTS.find((p) => p.id === selectedId) || null;
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
      cameraPosition={isDetail ? NONCOMMUNICABLE_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? NONCOMMUNICABLE_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.4 : 1.2}
      maxDistance={isDetail ? 3.5 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Penyakit Tidak Menular" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {NONCOMMUNICABLE_PARTS.map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} tint={part.tint} onSelect={handleSelect} />
        ))
      )}
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/noncommunicable.jsx src/features/human-body/noncommunicable-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/human-body/noncommunicable-data.js osn-app/src/features/human-body/noncommunicable-data.test.mjs osn-app/src/features/human-body/noncommunicable.jsx
git commit -m "feat: add Penyakit Tidak Menular 3D scene (ipa-02k)" -- osn-app/src/features/human-body/noncommunicable-data.js osn-app/src/features/human-body/noncommunicable-data.test.mjs osn-app/src/features/human-body/noncommunicable.jsx
```

---

### Task 2: Penyakit Menular scene (`ipa-02j`)

**Files:**
- Create: `osn-app/src/features/human-body/communicable-data.js`
- Create: `osn-app/src/features/human-body/communicable-data.test.mjs`
- Create: `osn-app/src/features/human-body/communicable.jsx`

Hybrid: TBC reuses the real `lung.glb` (tinted). Flu/Diare/Cacar have no organ-level real model — primitive pathogen markers (virus/bakteri/ruam) at their typical entry/symptom point on the body.

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/human-body/communicable-data.js
// TBC reuses the real lung.glb (tinted). Flu/Diare/Cacar have no organ-level real model — represented
// as primitive pathogen markers (virus/bakteri/ruam) at their typical entry/symptom point on the body.
export const PATHOGEN_MARKERS = {
  flu: { position: [0, 0.8, 0.09], radius: 0.018 },
  diare: { position: [0.03, 0.42, 0.04], radius: 0.02 },
  cacar: {
    position: [0.22, 0.5, 0.05],
    radius: 0.012,
    spots: [
      [0, 0, 0],
      [0.02, 0.015, 0],
      [-0.015, -0.02, 0],
    ],
  },
};

export const COMMUNICABLE_PARTS = [
  {
    id: 'tbc',
    name: 'TBC (Tuberkulosis)',
    real: true,
    models: ['/models/lung.glb'],
    tint: '#4a4a4a',
    fact: 'Tuberkulosis (TBC) disebabkan bakteri Mycobacterium tuberculosis yang menyerang paru-paru, menular lewat percikan batuk/bersin orang yang terinfeksi (penularan lewat udara).',
  },
  {
    id: 'flu',
    name: 'Flu / Pilek',
    real: false,
    fact: 'Disebabkan virus yang menyerang saluran pernapasan, menular lewat percikan bersin/batuk (droplet) atau menyentuh permukaan yang terkontaminasi lalu menyentuh wajah.',
  },
  {
    id: 'diare',
    name: 'Diare',
    real: false,
    fact: 'Sering disebabkan bakteri atau virus yang masuk lewat makanan/minuman yang tidak bersih — makanya penting mencuci tangan & memasak makanan sampai matang.',
  },
  {
    id: 'cacar',
    name: 'Cacar / Campak',
    real: false,
    fact: 'Disebabkan virus yang menular lewat kontak langsung dengan kulit penderita atau percikan napas, ditandai bintik-bintik merah di kulit.',
  },
];

export const COMMUNICABLE_DETAIL_TARGET = [0, 0.55, 0];
export const COMMUNICABLE_DETAIL_CAMERA = [0, 0.55, 0.8];
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/human-body/communicable-data.test.mjs
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { COMMUNICABLE_PARTS, PATHOGEN_MARKERS, COMMUNICABLE_DETAIL_TARGET, COMMUNICABLE_DETAIL_CAMERA } from './communicable-data.js';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public', import.meta.url));

assert.equal(COMMUNICABLE_PARTS.length, 4, 'expected 4 communicable-disease parts');

COMMUNICABLE_PARTS.forEach((part) => {
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

assert.ok(PATHOGEN_MARKERS.flu && PATHOGEN_MARKERS.diare && PATHOGEN_MARKERS.cacar, 'all 3 pathogen markers present');
assert.equal(PATHOGEN_MARKERS.cacar.spots.length, 3);

assert.equal(COMMUNICABLE_DETAIL_TARGET.length, 3);
assert.equal(COMMUNICABLE_DETAIL_CAMERA.length, 3);

console.log('communicable-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/communicable-data.test.mjs`
Expected: `communicable-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/human-body/communicable.jsx
import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { OrganModel } from './OrganModel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import {
  COMMUNICABLE_PARTS,
  PATHOGEN_MARKERS,
  COMMUNICABLE_DETAIL_TARGET,
  COMMUNICABLE_DETAIL_CAMERA,
} from './communicable-data';

export function CommunicableScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = COMMUNICABLE_PARTS.find((p) => p.id === selectedId) || null;
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
      cameraPosition={isDetail ? COMMUNICABLE_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? COMMUNICABLE_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.3 : 1.2}
      maxDistance={isDetail ? 2.5 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Penyakit Menular" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {COMMUNICABLE_PARTS.filter((p) => p.real).map((part) =>
        part.models.map((modelUrl) => (
          <OrganModel key={modelUrl} id={part.id} url={modelUrl} tint={part.tint} onSelect={handleSelect} />
        ))
      )}
      <mesh position={PATHOGEN_MARKERS.flu.position} onClick={onClickFor('flu')}>
        <icosahedronGeometry args={[PATHOGEN_MARKERS.flu.radius, 0]} />
        <meshStandardMaterial color="#8bc34a" />
      </mesh>
      <mesh position={PATHOGEN_MARKERS.diare.position} scale={[1, 1.8, 1]} onClick={onClickFor('diare')}>
        <sphereGeometry args={[PATHOGEN_MARKERS.diare.radius, 12, 12]} />
        <meshStandardMaterial color="#9c6b98" />
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
          <meshStandardMaterial color="#e0668a" />
        </mesh>
      ))}
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/communicable.jsx src/features/human-body/communicable-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/human-body/communicable-data.js osn-app/src/features/human-body/communicable-data.test.mjs osn-app/src/features/human-body/communicable.jsx
git commit -m "feat: add Penyakit Menular 3D scene (ipa-02j)" -- osn-app/src/features/human-body/communicable-data.js osn-app/src/features/human-body/communicable-data.test.mjs osn-app/src/features/human-body/communicable.jsx
```

---

### Task 3: Kebersihan scene (`ipa-02l`)

**Files:**
- Create: `osn-app/src/features/human-body/hygiene-data.js`
- Create: `osn-app/src/features/human-body/hygiene-data.test.mjs`
- Create: `osn-app/src/features/human-body/hygiene.jsx`

No real organ model is relevant here — all 5 markers are primitives, same pattern as `SENSE_MARKERS` in Batch 3a's Sistem Saraf scene.

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/human-body/hygiene-data.js
// Tidak ada model organ asli yang relevan — semua penanda kebersihan adalah primitif,
// pola sama persis dgn SENSE_MARKERS di nervous-data.js (Batch 3a).
export const HYGIENE_MARKERS = [
  { id: 'tangan', position: [0.22, 0.15, 0.02], radius: 0.025, color: '#7ec8e3' },
  { id: 'gigi', position: [0, 0.79, 0.075], radius: 0.015, color: '#ffffff' },
  { id: 'kuku', position: [0.24, 0.13, 0.04], radius: 0.012, color: '#f5c6a5' },
  { id: 'rambut', position: [0, 0.91, 0], radius: 0.02, color: '#6b4a3a' },
  { id: 'kulit', position: [-0.22, 0.5, 0.04], radius: 0.025, color: '#f0c9a0' },
];

export const HYGIENE_PARTS = [
  { id: 'tangan', name: 'Cuci Tangan', fact: 'Cuci tangan pakai sabun & air mengalir minimal 20 detik, terutama sebelum makan dan setelah dari toilet, mencegah kuman berpindah dari tangan ke mulut/makanan.' },
  { id: 'gigi', name: 'Sikat Gigi', fact: 'Sikat gigi minimal 2x sehari (pagi & sebelum tidur) mencegah kerusakan gigi (karies) akibat sisa makanan & bakteri di mulut.' },
  { id: 'kuku', name: 'Potong Kuku', fact: 'Kuku yang panjang jadi tempat kuman & kotoran menumpuk — potong kuku rutin membantu mencegah penyakit menyebar lewat tangan.' },
  { id: 'rambut', name: 'Keramas', fact: 'Keramas rutin menjaga kulit kepala bersih dari minyak berlebih, kotoran, dan mencegah kutu rambut.' },
  { id: 'kulit', name: 'Mandi', fact: 'Mandi 2x sehari membersihkan keringat, debu, dan kuman dari permukaan kulit, mencegah bau badan & penyakit kulit.' },
];

export const HYGIENE_DETAIL_TARGET = [0, 0.4, 0];
export const HYGIENE_DETAIL_CAMERA = [0, 0.4, 1.3];
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/human-body/hygiene-data.test.mjs
import assert from 'node:assert/strict';
import { HYGIENE_PARTS, HYGIENE_MARKERS, HYGIENE_DETAIL_TARGET, HYGIENE_DETAIL_CAMERA } from './hygiene-data.js';

assert.equal(HYGIENE_PARTS.length, 5, 'expected 5 hygiene parts');
assert.equal(HYGIENE_MARKERS.length, 5, 'expected 5 hygiene markers');

HYGIENE_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  assert.ok(HYGIENE_MARKERS.some((m) => m.id === part.id), `part "${part.id}" should have a matching marker`);
});

assert.equal(HYGIENE_DETAIL_TARGET.length, 3);
assert.equal(HYGIENE_DETAIL_CAMERA.length, 3);

console.log('hygiene-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/hygiene-data.test.mjs`
Expected: `hygiene-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/human-body/hygiene.jsx
import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import { HYGIENE_PARTS, HYGIENE_MARKERS, HYGIENE_DETAIL_TARGET, HYGIENE_DETAIL_CAMERA } from './hygiene-data';

export function HygieneScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = HYGIENE_PARTS.find((p) => p.id === selectedId) || null;
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
      cameraPosition={isDetail ? HYGIENE_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? HYGIENE_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.4 : 1.2}
      maxDistance={isDetail ? 3 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Kebersihan Diri" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {HYGIENE_MARKERS.map((marker) => (
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

Run: `cd osn-app && npx eslint src/features/human-body/hygiene.jsx src/features/human-body/hygiene-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/human-body/hygiene-data.js osn-app/src/features/human-body/hygiene-data.test.mjs osn-app/src/features/human-body/hygiene.jsx
git commit -m "feat: add Kebersihan Diri 3D scene (ipa-02l)" -- osn-app/src/features/human-body/hygiene-data.js osn-app/src/features/human-body/hygiene-data.test.mjs osn-app/src/features/human-body/hygiene.jsx
```

---

### Task 4: Diagnosis Gejala scene (`ipa-02m`)

**Files:**
- Create: `osn-app/src/features/human-body/symptoms-data.js`
- Create: `osn-app/src/features/human-body/symptoms-data.test.mjs`
- Create: `osn-app/src/features/human-body/symptoms.jsx`

Same marker pattern as Task 3. This scene is a visual primer only — the sub-bab's 100 soal remain independent text-based gejala→diagnosis case studies; clicking a marker here does not reveal a soal answer.

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/human-body/symptoms-data.js
// Penanda gejala umum di tubuh — pengantar visual sebelum soal studi kasus gejala->diagnosis.
// Bukan alat diagnosis; tiap fact menyebutkan beberapa kemungkinan penyakit, bukan jawaban tunggal.
export const SYMPTOM_MARKERS = [
  { id: 'demam', position: [0, 0.87, 0.08], radius: 0.02, color: '#ff7043' },
  { id: 'batuk', position: [0, 0.65, 0.09], radius: 0.025, color: '#ffa726' },
  { id: 'sakit-perut', position: [0, 0.42, 0.09], radius: 0.03, color: '#ab47bc' },
  { id: 'ruam', position: [0.22, 0.5, 0.05], radius: 0.02, color: '#ec407a' },
  { id: 'pusing', position: [0, 0.91, 0], radius: 0.025, color: '#42a5f5' },
];

export const SYMPTOM_PARTS = [
  { id: 'demam', name: 'Demam', fact: 'Suhu tubuh naik di atas normal, biasanya tanda tubuh sedang melawan infeksi — bisa muncul pada flu, demam berdarah, tifus, dan banyak penyakit lain. Perlu gejala lain utk memastikan penyebabnya.' },
  { id: 'batuk', name: 'Batuk', fact: 'Refleks tubuh mengeluarkan sesuatu dari saluran napas — bisa tanda flu biasa, radang tenggorokan, atau (jika berkepanjangan) TBC.' },
  { id: 'sakit-perut', name: 'Sakit Perut', fact: 'Bisa disebabkan banyak hal: masuk angin, diare, tipes, hingga maag. Lokasi & jenis nyerinya membantu menentukan penyebab.' },
  { id: 'ruam', name: 'Ruam Kulit', fact: 'Bintik atau kemerahan di kulit bisa tanda alergi, cacar air, campak, atau demam berdarah — pola dan sebarannya di kulit jadi petunjuk penting.' },
  { id: 'pusing', name: 'Pusing', fact: 'Bisa disebabkan kurang tidur, dehidrasi, tekanan darah rendah, hingga demam tinggi.' },
];

export const SYMPTOM_DETAIL_TARGET = [0, 0.55, 0];
export const SYMPTOM_DETAIL_CAMERA = [0, 0.55, 1.3];
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/human-body/symptoms-data.test.mjs
import assert from 'node:assert/strict';
import { SYMPTOM_PARTS, SYMPTOM_MARKERS, SYMPTOM_DETAIL_TARGET, SYMPTOM_DETAIL_CAMERA } from './symptoms-data.js';

assert.equal(SYMPTOM_PARTS.length, 5, 'expected 5 symptom parts');
assert.equal(SYMPTOM_MARKERS.length, 5, 'expected 5 symptom markers');

SYMPTOM_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
  assert.ok(SYMPTOM_MARKERS.some((m) => m.id === part.id), `part "${part.id}" should have a matching marker`);
});

assert.equal(SYMPTOM_DETAIL_TARGET.length, 3);
assert.equal(SYMPTOM_DETAIL_CAMERA.length, 3);

console.log('symptoms-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/symptoms-data.test.mjs`
Expected: `symptoms-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/human-body/symptoms.jsx
import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { HumanBody } from './HumanBody';
import { ViewToggle } from './ViewToggle';
import { SYMPTOM_PARTS, SYMPTOM_MARKERS, SYMPTOM_DETAIL_TARGET, SYMPTOM_DETAIL_CAMERA } from './symptoms-data';

export function SymptomsScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('in-body');
  const [selectedId, setSelectedId] = useState(null);
  const selected = SYMPTOM_PARTS.find((p) => p.id === selectedId) || null;
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
      cameraPosition={isDetail ? SYMPTOM_DETAIL_CAMERA : [0, 0, 2.4]}
      target={isDetail ? SYMPTOM_DETAIL_TARGET : [0, 0, 0]}
      minDistance={isDetail ? 0.4 : 1.2}
      maxDistance={isDetail ? 3 : 5}
      overlay={
        <>
          <ViewToggle mode={mode} onChange={setMode} />
          {selected && (
            <InfoPanel eyebrow="Diagnosis Gejala" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
          )}
        </>
      }
    >
      {!isDetail && <HumanBody />}
      {SYMPTOM_MARKERS.map((marker) => (
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

Run: `cd osn-app && npx eslint src/features/human-body/symptoms.jsx src/features/human-body/symptoms-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/human-body/symptoms-data.js osn-app/src/features/human-body/symptoms-data.test.mjs osn-app/src/features/human-body/symptoms.jsx
git commit -m "feat: add Diagnosis Gejala 3D scene (ipa-02m)" -- osn-app/src/features/human-body/symptoms-data.js osn-app/src/features/human-body/symptoms-data.test.mjs osn-app/src/features/human-body/symptoms.jsx
```

---

### Task 5: Gizi scene (`ipa-02i`)

**Files:**
- Create: `osn-app/src/features/human-body/nutrition-data.js`
- Create: `osn-app/src/features/human-body/nutrition-data.test.mjs`
- Create: `osn-app/src/features/human-body/nutrition.jsx`

**Template B — first standalone-object scene.** No `HumanBody`, no `ViewToggle`, no `mode` state. "Isi Piringku" (Indonesia's official nutrition guideline): a flat disc divided into 4 wedges via `CircleGeometry`'s `thetaStart`/`thetaLength` params, plus a water glass beside it.

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/human-body/nutrition-data.js
// "Isi Piringku" - pedoman gizi seimbang resmi Indonesia (pengganti "4 Sehat 5 Sempurna").
// Piring dibagi 4 wedge pakai CircleGeometry(radius, segments, thetaStart, thetaLength) - lihat
// component utk render. thetaLength dlm radian, total 4 wedge harus = 2*Math.PI (lingkaran penuh).
export const PLATE_RADIUS = 0.9;

export const NUTRITION_WEDGES = [
  {
    id: 'karbohidrat',
    name: 'Karbohidrat (Makanan Pokok)',
    thetaStart: 0,
    thetaLength: (2 * Math.PI) / 3,
    color: '#f0c14b',
    fact: 'Sumber energi utama tubuh — nasi, jagung, kentang, roti, mi. Porsinya paling besar di piring (sekitar sepertiga), karena tubuh butuh energi paling banyak dari kelompok ini.',
  },
  {
    id: 'sayur',
    name: 'Sayur-Sayuran',
    thetaStart: (2 * Math.PI) / 3,
    thetaLength: (2 * Math.PI) / 3,
    color: '#4caf50',
    fact: 'Sumber vitamin, mineral, dan serat — bayam, wortel, brokoli, kangkung. Porsinya juga besar (sekitar sepertiga piring) utk menjaga pencernaan & daya tahan tubuh.',
  },
  {
    id: 'protein',
    name: 'Protein (Lauk-Pauk)',
    thetaStart: (4 * Math.PI) / 3,
    thetaLength: Math.PI / 3,
    color: '#c0392b',
    fact: 'Membangun & memperbaiki sel tubuh — ikan, telur, ayam, tahu, tempe. Porsi lebih kecil dibanding karbohidrat/sayur (sekitar seperenam piring), tapi tetap wajib ada.',
  },
  {
    id: 'buah',
    name: 'Buah-Buahan',
    thetaStart: (4 * Math.PI) / 3 + Math.PI / 3,
    thetaLength: Math.PI / 3,
    color: '#e67e22',
    fact: 'Sumber vitamin & serat tambahan — pisang, jeruk, pepaya, apel. Porsi kecil (sekitar seperenam piring), biasanya sbg pelengkap/penutup makan.',
  },
];

export const WATER_GLASS = {
  position: [1.3, -0.1, 0],
  radiusTop: 0.18,
  radiusBottom: 0.15,
  height: 0.5,
  fact: 'Air putih minimal 8 gelas sehari membantu pencernaan, menjaga suhu tubuh, dan mengangkut nutrisi ke seluruh sel tubuh. Bukan bagian dari piring, tapi wajib ada di setiap waktu makan.',
};
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/human-body/nutrition-data.test.mjs
import assert from 'node:assert/strict';
import { NUTRITION_WEDGES, WATER_GLASS, PLATE_RADIUS } from './nutrition-data.js';

assert.equal(NUTRITION_WEDGES.length, 4, 'expected 4 food-group wedges');

NUTRITION_WEDGES.forEach((wedge) => {
  for (const field of ['id', 'name', 'thetaStart', 'thetaLength', 'color', 'fact']) {
    assert.ok(wedge[field] !== undefined, `${wedge.id} missing field "${field}"`);
  }
});

const totalTheta = NUTRITION_WEDGES.reduce((sum, w) => sum + w.thetaLength, 0);
assert.ok(Math.abs(totalTheta - 2 * Math.PI) < 0.0001, `wedges should sum to a full circle (2*PI), got ${totalTheta}`);

assert.ok(WATER_GLASS.fact && WATER_GLASS.position.length === 3);
assert.ok(PLATE_RADIUS > 0);

console.log('nutrition-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/nutrition-data.test.mjs`
Expected: `nutrition-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/human-body/nutrition.jsx
import { useState } from 'react';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import { NUTRITION_WEDGES, WATER_GLASS, PLATE_RADIUS } from './nutrition-data';

export function NutritionScene({ interactive = true, size = 'inline' }) {
  const [selectedId, setSelectedId] = useState(null);
  const allParts = [...NUTRITION_WEDGES, { id: 'air', name: 'Air Minum', fact: WATER_GLASS.fact }];
  const selected = allParts.find((p) => p.id === selectedId) || null;
  const handleSelect = interactive ? setSelectedId : undefined;
  const onClickFor = (id) => (handleSelect ? (e) => { e.stopPropagation(); handleSelect(id); } : undefined);

  return (
    <SceneCanvas
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={[0, 1.6, 1.8]}
      target={[0.3, 0, 0]}
      minDistance={1}
      maxDistance={4}
      overlay={
        selected && (
          <InfoPanel eyebrow="Gizi Seimbang (Isi Piringku)" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
        )
      }
    >
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[PLATE_RADIUS + 0.08, 48]} />
        <meshStandardMaterial color="#f5f5f0" />
      </mesh>
      {NUTRITION_WEDGES.map((wedge) => (
        <mesh
          key={wedge.id}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.01, 0]}
          onClick={onClickFor(wedge.id)}
        >
          <circleGeometry args={[PLATE_RADIUS, 32, wedge.thetaStart, wedge.thetaLength]} />
          <meshStandardMaterial color={wedge.color} />
        </mesh>
      ))}
      <mesh position={WATER_GLASS.position} onClick={onClickFor('air')}>
        <cylinderGeometry args={[WATER_GLASS.radiusTop, WATER_GLASS.radiusBottom, WATER_GLASS.height, 24]} />
        <meshStandardMaterial color="#bcd8e8" transparent opacity={0.6} />
      </mesh>
    </SceneCanvas>
  );
}
```

No `key={mode}` needed — this scene has no mode state, camera is set once on mount and never needs to move.

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/nutrition.jsx src/features/human-body/nutrition-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/human-body/nutrition-data.js osn-app/src/features/human-body/nutrition-data.test.mjs osn-app/src/features/human-body/nutrition.jsx
git commit -m "feat: add Gizi Seimbang 3D scene (ipa-02i)" -- osn-app/src/features/human-body/nutrition-data.js osn-app/src/features/human-body/nutrition-data.test.mjs osn-app/src/features/human-body/nutrition.jsx
```

---

### Task 6: Bioteknologi scene (`ipa-02n`)

**Files:**
- Create: `osn-app/src/features/human-body/biotech-data.js`
- Create: `osn-app/src/features/human-body/biotech-data.test.mjs`
- Create: `osn-app/src/features/human-body/biotech.jsx`

**Template B.** DNA double helix built purely from math (two offset sine curves + periodic connecting "rungs") — no model file, no new library. Points are precomputed once in the data module (deterministic, testable); the component just renders them via `<Line>` (from `@react-three/drei`, already a project dependency — used in `digestive.jsx`/`skeletal.jsx`).

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/human-body/biotech-data.js
// DNA double helix dibangun murni dari matematika (dua kurva sinus offset + "rungs" penghubung
// berkala) - tanpa model/library baru. Titik-titik dihitung sekali di sini (deterministik, bisa
// dites), component tinggal render via <Line> dari @react-three/drei.
const HELIX_TURNS = 3;
const HELIX_HEIGHT = 1.2;
const HELIX_RADIUS = 0.15;
const STRAND_SEGMENTS = 40;
const RUNG_COUNT = 18;

function helixPoint(t, phase) {
  const angle = t * HELIX_TURNS * Math.PI * 2 + phase;
  const y = t * HELIX_HEIGHT - HELIX_HEIGHT / 2;
  return [Math.cos(angle) * HELIX_RADIUS, y, Math.sin(angle) * HELIX_RADIUS];
}

export const DNA_STRAND_A_POINTS = Array.from({ length: STRAND_SEGMENTS }, (_, i) => helixPoint(i / (STRAND_SEGMENTS - 1), 0));
export const DNA_STRAND_B_POINTS = Array.from({ length: STRAND_SEGMENTS }, (_, i) => helixPoint(i / (STRAND_SEGMENTS - 1), Math.PI));
export const DNA_RUNGS = Array.from({ length: RUNG_COUNT }, (_, i) => {
  const t = i / (RUNG_COUNT - 1);
  return { from: helixPoint(t, 0), to: helixPoint(t, Math.PI) };
});

export const BIOTECH_PARTS = [
  {
    id: 'dna',
    name: 'DNA (Materi Genetik)',
    fact: 'DNA adalah materi genetik yang menyimpan "resep" tubuh makhluk hidup, diwariskan dari orang tua ke anak. Bioteknologi modern seperti rekayasa genetika memanfaatkan DNA utk menciptakan bibit unggul atau obat-obatan.',
  },
  {
    id: 'fermentasi',
    name: 'Fermentasi',
    fact: 'Bioteknologi konvensional memanfaatkan mikroorganisme (jamur/bakteri) utk mengubah bahan makanan — contohnya tempe (jamur Rhizopus), tape (ragi), yogurt (bakteri asam laktat), dan oncom.',
  },
];

export const FERMENTATION_JAR = { position: [0.9, -0.3, 0], radius: 0.28, height: 0.5 };
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/human-body/biotech-data.test.mjs
import assert from 'node:assert/strict';
import { DNA_STRAND_A_POINTS, DNA_STRAND_B_POINTS, DNA_RUNGS, BIOTECH_PARTS, FERMENTATION_JAR } from './biotech-data.js';

assert.equal(DNA_STRAND_A_POINTS.length, 40, 'expected 40 points on strand A');
assert.equal(DNA_STRAND_B_POINTS.length, 40, 'expected 40 points on strand B');
[...DNA_STRAND_A_POINTS, ...DNA_STRAND_B_POINTS].forEach((p) => assert.equal(p.length, 3, 'each strand point should be [x,y,z]'));

assert.equal(DNA_RUNGS.length, 18, 'expected 18 rungs');
DNA_RUNGS.forEach((rung) => {
  assert.equal(rung.from.length, 3);
  assert.equal(rung.to.length, 3);
});

assert.equal(BIOTECH_PARTS.length, 2, 'expected 2 biotech parts (dna, fermentasi)');
BIOTECH_PARTS.forEach((part) => {
  for (const field of ['id', 'name', 'fact']) {
    assert.ok(part[field] !== undefined, `${part.id} missing field "${field}"`);
  }
});

assert.equal(FERMENTATION_JAR.position.length, 3);
assert.ok(FERMENTATION_JAR.radius > 0 && FERMENTATION_JAR.height > 0);

console.log('biotech-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/human-body/biotech-data.test.mjs`
Expected: `biotech-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/human-body/biotech.jsx
import { useState } from 'react';
import { Line } from '@react-three/drei';
import { SceneCanvas } from '../astronomy/SceneCanvas';
import { InfoPanel } from '../astronomy/InfoPanel';
import {
  BIOTECH_PARTS,
  DNA_STRAND_A_POINTS,
  DNA_STRAND_B_POINTS,
  DNA_RUNGS,
  FERMENTATION_JAR,
} from './biotech-data';

export function BiotechScene({ interactive = true, size = 'inline' }) {
  const [selectedId, setSelectedId] = useState(null);
  const selected = BIOTECH_PARTS.find((p) => p.id === selectedId) || null;
  const handleSelect = interactive ? setSelectedId : undefined;
  const onClickFor = (id) => (handleSelect ? (e) => { e.stopPropagation(); handleSelect(id); } : undefined);

  return (
    <SceneCanvas
      size={size}
      interactive={interactive}
      background="clinical"
      cameraPosition={[0, 0, 2.2]}
      target={[0.3, 0, 0]}
      minDistance={1}
      maxDistance={4}
      overlay={
        selected && (
          <InfoPanel eyebrow="Bioteknologi" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
        )
      }
    >
      <group onClick={onClickFor('dna')}>
        <Line points={DNA_STRAND_A_POINTS} color="#4a90d9" lineWidth={6} />
        <Line points={DNA_STRAND_B_POINTS} color="#e0668a" lineWidth={6} />
        {DNA_RUNGS.map((rung, i) => (
          <Line key={`rung-${i}`} points={[rung.from, rung.to]} color="#c9c9c9" lineWidth={3} />
        ))}
      </group>
      <mesh position={FERMENTATION_JAR.position} onClick={onClickFor('fermentasi')}>
        <cylinderGeometry args={[FERMENTATION_JAR.radius, FERMENTATION_JAR.radius, FERMENTATION_JAR.height, 24]} />
        <meshStandardMaterial color="#d4a843" transparent opacity={0.5} />
      </mesh>
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/human-body/biotech.jsx src/features/human-body/biotech-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/human-body/biotech-data.js osn-app/src/features/human-body/biotech-data.test.mjs osn-app/src/features/human-body/biotech.jsx
git commit -m "feat: add Bioteknologi 3D scene (ipa-02n)" -- osn-app/src/features/human-body/biotech-data.js osn-app/src/features/human-body/biotech-data.test.mjs osn-app/src/features/human-body/biotech.jsx
```

---

### Task 7: Registry additions

**Files:**
- Modify: `osn-app/src/features/astronomy/registry.js`

- [ ] **Step 1: Read the current file**

Read `osn-app/src/features/astronomy/registry.js` to confirm its current content (12 entries: 6 astronomy + 6 Batch 3a human-body).

- [ ] **Step 2: Add imports and entries**

Add these imports:

```javascript
import { NoncommunicableScene } from '../human-body/noncommunicable';
import { CommunicableScene } from '../human-body/communicable';
import { HygieneScene } from '../human-body/hygiene';
import { SymptomsScene } from '../human-body/symptoms';
import { NutritionScene } from '../human-body/nutrition';
import { BiotechScene } from '../human-body/biotech';
```

Add these 6 entries to `SCENE_REGISTRY` (alongside the existing 12):

```javascript
  'ipa-02i': { component: NutritionScene, label: 'Gizi Seimbang' },
  'ipa-02j': { component: CommunicableScene, label: 'Penyakit Menular' },
  'ipa-02k': { component: NoncommunicableScene, label: 'Penyakit Tidak Menular' },
  'ipa-02l': { component: HygieneScene, label: 'Kebersihan Diri' },
  'ipa-02m': { component: SymptomsScene, label: 'Diagnosis Gejala' },
  'ipa-02n': { component: BiotechScene, label: 'Bioteknologi' },
```

Do NOT add entries for `ipa-02g` (Reproduksi) or `ipa-02h` (Pubertas) — explicitly excluded per the design spec (sensitive material for SD kelas 5-6, no real model coverage). Those sub-bab stay text-only.

- [ ] **Step 3: Lint**

Run: `cd osn-app && npx eslint src/features/astronomy/registry.js`
Expected: no errors.

- [ ] **Step 4: Build check**

Run: `cd osn-app && npm run build`
Expected: succeeds — confirms all 6 new scene imports resolve.

- [ ] **Step 5: Commit**

```bash
git add osn-app/src/features/astronomy/registry.js
git commit -m "feat: register the 6 batch-3b health-topic scenes (ipa-02i,j,k,l,m,n)" -- osn-app/src/features/astronomy/registry.js
```

---

### Task 8: Manual verification (all 18 scenes)

No automated UI test framework beyond eslint — same browser verification requirement as Batches 2/3a, which repeatedly caught real runtime bugs that lint/build missed entirely.

- [ ] **Step 1: Start the dev server**

Run: `cd osn-app && npm run dev`

If Playwright is used for verification and the dev server appears to crash mid-run with `ERR_CONNECTION_REFUSED`, check for stray `node` processes first (`Get-Process node` in PowerShell) — this happened during Batch 3a's verification and was an environment issue, not an app bug. Kill strays and retry against a freshly, manually started `npm run dev` if the wrapper script (`with_server.py`) proves flaky.

- [ ] **Step 2: Verify each of the 6 new scenes in "Jelajah 3D"**

For Penyakit Tidak Menular, Penyakit Menular, Kebersihan, Diagnosis Gejala (Template A — have the toggle):
- Open it from the picker. Confirm the canvas renders with zero console errors.
- "Dalam Tubuh" mode: confirm organs/markers sit at plausible positions on/in the translucent body.
- "Detail Organ" mode: confirm the camera frames the relevant parts reasonably; body silhouette disappears.
- Click every clickable part, confirm `InfoPanel` shows the right name/fact and closes correctly.
- Drag to orbit in both modes.

For Gizi, Bioteknologi (Template B — no toggle):
- Open it from the picker. Confirm the canvas renders with zero console errors.
- Confirm there is NO "Dalam Tubuh"/"Detail Organ" toggle visible (by design — these scenes have none).
- Confirm the object (plate / DNA helix + jar) is fully visible and reasonably framed on load.
- Click every clickable part (4 food wedges + water glass for Gizi; DNA + fermentation jar for Bioteknologi), confirm `InfoPanel` works.
- Drag to orbit.

- [ ] **Step 3: Verify inline widgets in Practice**

For at least 2 of the 6 (e.g. `ipa-02k` Template A, `ipa-02i` Template B — one of each kind): open Practice for that sub-bab (Roadmap Belajar → click the sub-bab card → choose "Mode Manual" in the mode-picker modal that appears), confirm the scene renders inline correctly, and confirm quiz flow still works normally.

- [ ] **Step 4: Confirm no regression**

Spot-check one Batch 2 astronomy scene (e.g. Tata Surya) and one Batch 3a scene (e.g. Sistem Ekskresi) — confirm both still work exactly as before this batch (space background intact for astronomy, organ positions/toggle intact for Batch 3a).

- [ ] **Step 5: Confirm Reproduksi/Pubertas have no 3D entry**

Open "Jelajah 3D" picker and confirm there is no card for Reproduksi (02g) or Pubertas (02h) — this is intentional exclusion, not a bug, but worth a final visual confirmation that no entry leaked in accidentally.

- [ ] **Step 6: Fix anything found, then re-verify**

If any scene has issues (bad framing, a marker positioned oddly, a click misfire), fix it directly in that scene's file, re-run the affected node test + eslint, and re-check in the browser. Commit each fix as its own small commit (scoped to the exact file(s) changed), not folded into an earlier task's commit.

---

## Out of scope (see spec)

- Reproduksi (02g), Pubertas (02h) — no 3D scene at all, decided explicitly during brainstorming.
- Video recording (`isCleanMode`) integration.
- Any ch.02 sub-bab beyond the 14 now covered (6 Batch 3a + 6 Batch 3b + 2 explicit exclusions).
