# Astronomy 3D Scenes Batch 2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 5 more 3D scenes (Lapisan Bumi, Rotasi & Revolusi Bumi, Fase Bulan, Gerhana, Atmosfer) to `osn-app`, extract the pilot's (`ipa-05a`) shared boilerplate into `src/features/astronomy/`, and switch the viewer tab / `PracticeArea` inline widget from a single hardcoded scene to a `subBabId -> scene` registry.

**Architecture:** Four shared components (`SceneCanvas`, `CelestialBody`, `InfoPanel`, `ConcentricLayers`) in `src/features/astronomy/`, five new topic scenes built on top of them, a `registry.js` mapping sub-bab IDs to scenes, and the existing `solar-system.jsx` refactored to use the shared pieces instead of its own copy of the same boilerplate.

**Tech Stack:** Same as the pilot — React 19, `@react-three/fiber`, `@react-three/drei`, `three`, Tailwind v4, no new dependencies.

**Spec:** `docs/superpowers/specs/2026-09-23-astronomy-3d-scenes-batch2-design.md`

---

### Task 1: Moon texture asset

**Files:**
- Create: `osn-app/public/textures/2k_moon.jpg`
- Modify: `osn-app/public/textures/ATTRIBUTION.txt`

- [ ] **Step 1: Download and verify**

```bash
curl -s --max-time 20 -o /tmp/2k_moon.jpg "https://www.solarsystemscope.com/textures/download/2k_moon.jpg"
file /tmp/2k_moon.jpg
```
Expected: `JPEG image data ... 2048x1024` (or similar real JPEG dimensions) — NOT `HTML document` or similar. If it's not a real JPEG, stop and report BLOCKED (the pilot hit this exact issue with a HEAD-only check once — always verify with `file` on the actual downloaded bytes, not just an HTTP status).

- [ ] **Step 2: Copy into the project**

```bash
cp /tmp/2k_moon.jpg osn-app/public/textures/2k_moon.jpg
```

- [ ] **Step 3: `ATTRIBUTION.txt` already covers this file**

Current content of `osn-app/public/textures/ATTRIBUTION.txt`:
```
Planet, Sun, and Milky Way textures in this folder are from Solar System
Scope (https://www.solarsystemscope.com/textures/), based on NASA imagery,
licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/).
```
This already covers any file from the same source — no wording change needed since it says "textures in this folder," not an enumerated list. Confirm the file is present; no edit required.

- [ ] **Step 4: Commit**

```bash
git add osn-app/public/textures/2k_moon.jpg
git commit -m "chore: add moon texture for moon-phases/eclipse scenes" -- osn-app/public/textures/2k_moon.jpg
```

---

### Task 2: Shared background constant

**Files:**
- Create: `osn-app/src/features/astronomy/constants.js`
- Modify: `osn-app/src/features/solar-system-data.js`

`BACKGROUND_TEXTURE` currently lives in `solar-system-data.js`, but it's not solar-system-specific — every new scene's `SceneCanvas` needs it too. Move the definition to a shared location and re-export it from `solar-system-data.js` so the existing test (`solar-system-data.test.mjs`, which imports `BACKGROUND_TEXTURE` from `./solar-system-data.js`) keeps working unchanged.

- [ ] **Step 1: Create the shared constants file**

```javascript
// osn-app/src/features/astronomy/constants.js
// Kredit: Solar System Scope (solarsystemscope.com/textures), berbasis data NASA,
// lisensi CC BY 4.0 — lihat public/textures/ATTRIBUTION.txt.
export const BACKGROUND_TEXTURE = '/textures/2k_stars_milky_way.jpg';
```

- [ ] **Step 2: Re-export from `solar-system-data.js`**

Current (`osn-app/src/features/solar-system-data.js:1-3`):
```javascript
// Texture kredit: Solar System Scope (solarsystemscope.com/textures), berbasis data NASA,
// lisensi CC BY 4.0 — lihat public/textures/ATTRIBUTION.txt.
export const BACKGROUND_TEXTURE = '/textures/2k_stars_milky_way.jpg';
```

Replace with:
```javascript
export { BACKGROUND_TEXTURE } from './astronomy/constants';
```

- [ ] **Step 3: Verify nothing broke**

```bash
cd osn-app && node src/features/solar-system-data.test.mjs
```
Expected: `solar-system-data: all checks passed` (the `BACKGROUND_TEXTURE.startsWith('/textures/')` and file-exists assertions still run against the re-exported value).

- [ ] **Step 4: Commit**

```bash
git add osn-app/src/features/astronomy/constants.js osn-app/src/features/solar-system-data.js
git commit -m "refactor: move BACKGROUND_TEXTURE to shared astronomy/constants.js" -- osn-app/src/features/astronomy/constants.js osn-app/src/features/solar-system-data.js
```

---

### Task 3: `SceneCanvas` shared component

**Files:**
- Create: `osn-app/src/features/astronomy/SceneCanvas.jsx`

Extracted from the pilot's `solar-system.jsx` (WebGL fallback, `Canvas`, `Suspense`, `Environment` background, lights, `OrbitControls`) — every scene in this batch (and the refactored pilot) wraps its bodies in this.

- [ ] **Step 1: Create the component**

```jsx
// osn-app/src/features/astronomy/SceneCanvas.jsx
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { BACKGROUND_TEXTURE } from './constants';

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

export function SceneCanvas({
  size = 'inline',
  interactive = true,
  cameraPosition,
  minDistance = 8,
  maxDistance = 45,
  showPointLight = true,
  overlay = null,
  children,
}) {
  const [webglOk] = useState(() => isWebGLAvailable());
  const heightClass = size === 'full' ? 'h-[70vh] min-h-[420px]' : 'h-72 md:h-96';
  const defaultCameraPosition = size === 'full' ? [0, 22, 30] : [0, 16, 22];

  if (!webglOk) {
    return (
      <div className={`glass-card rounded-3xl flex items-center justify-center text-center p-8 ${heightClass}`}>
        <p className="text-sm text-gray-500 font-semibold">Visualisasi 3D tidak didukung di browser ini.</p>
      </div>
    );
  }

  return (
    <div className={`relative rounded-3xl overflow-hidden glass-card ${heightClass}`}>
      <Canvas camera={{ position: cameraPosition || defaultCameraPosition, fov: 50 }}>
        <Suspense fallback={null}>
          <Environment files={BACKGROUND_TEXTURE} background />
          <ambientLight intensity={0.7} />
          {/* decay=0: keeps consistent shading regardless of how far a body sits from the
              origin, instead of Three's physically-correct inverse-square falloff washing
              distant objects out to flat ambient light (see solar-system.jsx's fix). */}
          {showPointLight && <pointLight position={[0, 0, 0]} intensity={6} color="#fff6d8" decay={0} />}
          {children}
          {interactive && <OrbitControls enablePan={false} minDistance={minDistance} maxDistance={maxDistance} />}
        </Suspense>
      </Canvas>
      {overlay}
    </div>
  );
}
```

- [ ] **Step 2: Lint**

Run: `cd osn-app && npx eslint src/features/astronomy/SceneCanvas.jsx`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add osn-app/src/features/astronomy/SceneCanvas.jsx
git commit -m "feat: extract shared SceneCanvas (webgl fallback, lighting, background, controls)" -- osn-app/src/features/astronomy/SceneCanvas.jsx
```

---

### Task 4: `InfoPanel` shared component

**Files:**
- Create: `osn-app/src/features/astronomy/InfoPanel.jsx`

Generalized from the pilot's `PlanetInfoPanel` — same glass-card overlay, arbitrary eyebrow/title/body instead of planet-specific fields.

- [ ] **Step 1: Create the component**

```jsx
// osn-app/src/features/astronomy/InfoPanel.jsx
import { X } from 'lucide-react';

export function InfoPanel({ eyebrow, title, body, onClose }) {
  return (
    <div className="absolute bottom-3 left-3 right-3 md:right-auto md:w-72 glass-card rounded-2xl p-4 shadow-lg space-y-1.5 animate-fade-in">
      <div className="flex items-start justify-between gap-3">
        <div>
          {eyebrow && <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">{eyebrow}</span>}
          <h4 className="text-sm font-black font-heading text-gray-800">{title}</h4>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-700 shrink-0" aria-label="Tutup">
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
}
```

- [ ] **Step 2: Lint**

Run: `cd osn-app && npx eslint src/features/astronomy/InfoPanel.jsx`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add osn-app/src/features/astronomy/InfoPanel.jsx
git commit -m "feat: extract shared InfoPanel (generalized PlanetInfoPanel)" -- osn-app/src/features/astronomy/InfoPanel.jsx
```

---

### Task 5: `CelestialBody` shared component

**Files:**
- Create: `osn-app/src/features/astronomy/CelestialBody.jsx`

A textured sphere that's either statically positioned or orbit-animated (via an imperative per-frame position update, matching the pilot's `Planet` component — never drives orbit motion through React state, which would re-render every frame), optionally self-rotating, optionally clickable.

- [ ] **Step 1: Create the component**

```jsx
// osn-app/src/features/astronomy/CelestialBody.jsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

export function CelestialBody({
  id,
  position = [0, 0, 0],
  orbit,
  radius,
  texture,
  spinSpeed = 0,
  tilt = 0,
  material = 'standard',
  onSelect,
}) {
  const groupRef = useRef(null);
  const meshRef = useRef(null);
  const map = useTexture(texture);

  useFrame((state) => {
    if (orbit && groupRef.current) {
      const { x, y = 0, z } = orbit(state.clock.elapsedTime);
      groupRef.current.position.set(x, y, z);
    }
    if (meshRef.current && spinSpeed) {
      meshRef.current.rotation.y += spinSpeed;
    }
  });

  return (
    <group ref={groupRef} position={orbit ? undefined : position}>
      <mesh
        ref={meshRef}
        rotation={[0, 0, tilt]}
        onClick={onSelect ? (e) => { e.stopPropagation(); onSelect(id); } : undefined}
      >
        <sphereGeometry args={[radius, 32, 32]} />
        {material === 'basic' ? (
          <meshBasicMaterial map={map} toneMapped={false} />
        ) : (
          <meshStandardMaterial map={map} roughness={0.7} metalness={0.1} />
        )}
      </mesh>
    </group>
  );
}
```

- [ ] **Step 2: Lint**

Run: `cd osn-app && npx eslint src/features/astronomy/CelestialBody.jsx`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add osn-app/src/features/astronomy/CelestialBody.jsx
git commit -m "feat: extract shared CelestialBody (textured sphere, orbit/spin, click-select)" -- osn-app/src/features/astronomy/CelestialBody.jsx
```

---

### Task 6: `ConcentricLayers` shared component

**Files:**
- Create: `osn-app/src/features/astronomy/ConcentricLayers.jsx`

Renders a list of `{ id, name, radius, color, opacity, fact }` layers either as `'cutaway'` (a 90° wedge removed from each shell, opaque, revealing nested layers inside — for 05b's Earth cross-section) or `'shell'` (full transparent spheres, alpha-blended — for 05k's atmosphere).

- [ ] **Step 1: Create the component**

```jsx
// osn-app/src/features/astronomy/ConcentricLayers.jsx
import { DoubleSide } from 'three';

// Wedge removed in 'cutaway' mode so nested inner layers are visible through the gap.
const CUTAWAY_ANGLE = Math.PI / 2;

export function ConcentricLayers({ layers, mode, onSelect }) {
  return (
    <>
      {layers.map((layer) => (
        <mesh
          key={layer.id}
          onClick={onSelect ? (e) => { e.stopPropagation(); onSelect(layer.id); } : undefined}
        >
          <sphereGeometry
            args={
              mode === 'cutaway'
                ? [layer.radius, 32, 32, 0, Math.PI * 2 - CUTAWAY_ANGLE]
                : [layer.radius, 32, 32]
            }
          />
          <meshStandardMaterial
            color={layer.color}
            transparent={mode === 'shell'}
            opacity={mode === 'shell' ? layer.opacity : 1}
            side={DoubleSide}
            roughness={0.8}
          />
        </mesh>
      ))}
    </>
  );
}
```

- [ ] **Step 2: Lint**

Run: `cd osn-app && npx eslint src/features/astronomy/ConcentricLayers.jsx`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add osn-app/src/features/astronomy/ConcentricLayers.jsx
git commit -m "feat: extract shared ConcentricLayers (cutaway/shell nested spheres)" -- osn-app/src/features/astronomy/ConcentricLayers.jsx
```

---

### Task 7: Refactor `solar-system.jsx` onto the shared pieces

**Files:**
- Modify: `osn-app/src/features/solar-system.jsx`

Replace the pilot's own copy of the WebGL-fallback/Canvas/Suspense/Environment/lights/OrbitControls boilerplate with `<SceneCanvas>`, and its own `PlanetInfoPanel` with the shared `InfoPanel`. `Sun`, `Planet`, `PlanetRing`, `useRadialRingGeometry` stay exactly as they are — this task only touches the outer wrapper, not the planet/ring rendering logic that's already been tuned and reviewed across several prior commits.

- [ ] **Step 1: Replace the file**

Current full content of `osn-app/src/features/solar-system.jsx` — replace it entirely with:

```jsx
// osn-app/src/features/solar-system.jsx
import { useState, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, useTexture } from '@react-three/drei';
import { RingGeometry, Vector3, DoubleSide } from 'three';
import { SceneCanvas } from './astronomy/SceneCanvas';
import { InfoPanel } from './astronomy/InfoPanel';
import { PLANETS, SUN, getPlanetPosition } from './solar-system-data';

function Sun() {
  const texture = useTexture(SUN.texture);
  return (
    <mesh>
      <sphereGeometry args={[SUN.radius, 32, 32]} />
      {/* meshBasicMaterial: the sun is self-luminous, so it should read as fully lit
          regardless of scene lighting — no shading/shadow falls on a star. */}
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

// RingGeometry's default UVs run angularly around the circumference, not radially,
// so a radial ring texture (transparent near the planet, banded further out) would
// just repeat instead of mapping correctly. Remap u = 0 at innerRadius -> u = 1 at
// outerRadius so the texture reads correctly along the ring's radius.
function useRadialRingGeometry(innerRadius, outerRadius) {
  return useMemo(() => {
    const geometry = new RingGeometry(innerRadius, outerRadius, 64);
    const pos = geometry.attributes.position;
    const v3 = new Vector3();
    for (let i = 0; i < pos.count; i++) {
      v3.fromBufferAttribute(pos, i);
      const u = (v3.length() - innerRadius) / (outerRadius - innerRadius);
      geometry.attributes.uv.setXY(i, u, 1);
    }
    return geometry;
  }, [innerRadius, outerRadius]);
}

function PlanetRing({ ring }) {
  const texture = useTexture(ring.texture);
  const geometry = useRadialRingGeometry(ring.innerRadius, ring.outerRadius);
  return (
    <mesh geometry={geometry} rotation={[-Math.PI / 2 + 0.35, 0, 0.15]}>
      <meshStandardMaterial map={texture} transparent side={DoubleSide} roughness={0.8} />
    </mesh>
  );
}

function Planet({ planet, onSelect }) {
  const groupRef = useRef(null);
  const meshRef = useRef(null);
  const texture = useTexture(planet.texture);

  const ringPoints = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2;
      pts.push([Math.cos(a) * planet.orbitRadius, 0, Math.sin(a) * planet.orbitRadius]);
    }
    return pts;
  }, [planet.orbitRadius]);

  useFrame((state) => {
    const { x, z } = getPlanetPosition(planet, state.clock.elapsedTime);
    if (groupRef.current) {
      groupRef.current.position.set(x, 0, z);
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      <Line points={ringPoints} color="#ffffff" transparent opacity={0.15} />
      <group ref={groupRef}>
        <mesh ref={meshRef} onClick={(e) => { e.stopPropagation(); onSelect?.(planet.id); }}>
          <sphereGeometry args={[planet.radius, 24, 24]} />
          <meshStandardMaterial map={texture} roughness={0.7} metalness={0.1} />
        </mesh>
        {planet.ring && <PlanetRing ring={planet.ring} />}
      </group>
    </group>
  );
}

export function SolarSystemScene({ interactive = true, size = 'inline' }) {
  const [selectedId, setSelectedId] = useState(null);
  const selectedPlanet = PLANETS.find((p) => p.id === selectedId) || null;

  return (
    <SceneCanvas
      size={size}
      interactive={interactive}
      cameraPosition={size === 'full' ? [0, 22, 30] : [0, 16, 22]}
      minDistance={8}
      maxDistance={45}
      overlay={selectedPlanet && (
        <InfoPanel
          eyebrow={`Planet ke-${selectedPlanet.order} dari Matahari`}
          title={selectedPlanet.name}
          body={selectedPlanet.fact}
          onClose={() => setSelectedId(null)}
        />
      )}
    >
      <Sun />
      {PLANETS.map((planet) => (
        <Planet key={planet.id} planet={planet} onSelect={interactive ? setSelectedId : undefined} />
      ))}
    </SceneCanvas>
  );
}
```

- [ ] **Step 2: Lint**

Run: `cd osn-app && npx eslint src/features/solar-system.jsx`
Expected: no errors.

- [ ] **Step 3: Regression-check the data layer is untouched**

Run: `cd osn-app && node src/features/solar-system-data.test.mjs`
Expected: `solar-system-data: all checks passed` (this file wasn't touched by this task, but confirms Task 2's re-export didn't break anything it depends on).

- [ ] **Step 4: Build check**

Run: `cd osn-app && npm run build`
Expected: build succeeds (catches import errors from the refactor — e.g. a typo in the `./astronomy/SceneCanvas` path).

- [ ] **Step 5: Commit**

```bash
git add osn-app/src/features/solar-system.jsx
git commit -m "refactor: solar-system.jsx onto shared SceneCanvas + InfoPanel" -- osn-app/src/features/solar-system.jsx
```

---

### Task 8: Earth Layers scene (`ipa-05b`)

**Files:**
- Create: `osn-app/src/features/astronomy/earth-layers-data.js`
- Create: `osn-app/src/features/astronomy/earth-layers-data.test.mjs`
- Create: `osn-app/src/features/astronomy/earth-layers.jsx`

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/astronomy/earth-layers-data.js
// Radius sekolastik (bukan proporsi asli) supaya ke-4 lapisan tetap jelas beda ukurannya di layar.
// Urutan dari terluar ke terdalam — cocok dengan cara ConcentricLayers 'cutaway' merender (radius terbesar duluan).
export const EARTH_LAYERS = [
  { id: 'kerak', name: 'Kerak Bumi', radius: 3.0, color: '#8a6d4b', opacity: 1, fact: 'Lapisan terluar tempat kita tinggal. Tebalnya rata-rata sekitar 35 km di daratan — sangat tipis dibanding lapisan lain.' },
  { id: 'mantel', name: 'Mantel', radius: 2.5, color: '#c1440e', opacity: 1, fact: 'Lapisan terbesar Bumi, sekitar 2.900 km tebalnya. Batuannya sangat panas dan bergerak sangat lambat (semi-plastis).' },
  { id: 'inti-luar', name: 'Inti Luar', radius: 1.6, color: '#f4a11d', opacity: 1, fact: 'Besi dan nikel dalam keadaan cair. Pergerakannya menghasilkan medan magnet yang melindungi Bumi.' },
  { id: 'inti-dalam', name: 'Inti Dalam', radius: 0.9, color: '#fff2b8', opacity: 1, fact: 'Pusat Bumi, besi-nikel padat meski suhunya 5.000-6.000°C — tetap padat karena tekanan yang sangat besar.' },
];
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/astronomy/earth-layers-data.test.mjs
import assert from 'node:assert/strict';
import { EARTH_LAYERS } from './earth-layers-data.js';

assert.equal(EARTH_LAYERS.length, 4, 'expected 4 Earth layers');

EARTH_LAYERS.forEach((layer) => {
  for (const field of ['id', 'name', 'radius', 'color', 'fact']) {
    assert.ok(layer[field] !== undefined && layer[field] !== '', `${layer.id} missing field "${field}"`);
  }
});

for (let i = 1; i < EARTH_LAYERS.length; i++) {
  assert.ok(
    EARTH_LAYERS[i - 1].radius > EARTH_LAYERS[i].radius,
    `${EARTH_LAYERS[i - 1].id} should have a larger radius than ${EARTH_LAYERS[i].id} (outer-to-inner order)`
  );
}

console.log('earth-layers-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/astronomy/earth-layers-data.test.mjs`
Expected: `earth-layers-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/astronomy/earth-layers.jsx
import { useState } from 'react';
import { SceneCanvas } from './SceneCanvas';
import { ConcentricLayers } from './ConcentricLayers';
import { InfoPanel } from './InfoPanel';
import { EARTH_LAYERS } from './earth-layers-data';

export function EarthLayersScene({ interactive = true, size = 'inline' }) {
  const [selectedId, setSelectedId] = useState(null);
  const selected = EARTH_LAYERS.find((l) => l.id === selectedId) || null;

  return (
    <SceneCanvas
      size={size}
      interactive={interactive}
      cameraPosition={size === 'full' ? [4, 3, 6] : [3, 2.5, 4.5]}
      minDistance={3}
      maxDistance={12}
      overlay={selected && (
        <InfoPanel eyebrow="Lapisan Bumi" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
      )}
    >
      <ConcentricLayers layers={EARTH_LAYERS} mode="cutaway" onSelect={interactive ? setSelectedId : undefined} />
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/astronomy/earth-layers.jsx src/features/astronomy/earth-layers-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/astronomy/earth-layers-data.js osn-app/src/features/astronomy/earth-layers-data.test.mjs osn-app/src/features/astronomy/earth-layers.jsx
git commit -m "feat: add Earth Layers 3D scene (ipa-05b)" -- osn-app/src/features/astronomy/earth-layers-data.js osn-app/src/features/astronomy/earth-layers-data.test.mjs osn-app/src/features/astronomy/earth-layers.jsx
```

---

### Task 9: Earth Motion scene (`ipa-05c`)

**Files:**
- Create: `osn-app/src/features/astronomy/earth-motion-data.js`
- Create: `osn-app/src/features/astronomy/earth-motion-data.test.mjs`
- Create: `osn-app/src/features/astronomy/earth-motion.jsx`

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/astronomy/earth-motion-data.js
export const EARTH_MOTION = {
  sun: { texture: '/textures/2k_sun.jpg', radius: 1.6 },
  earth: {
    texture: '/textures/2k_earth_daymap.jpg',
    radius: 0.8,
    orbitRadius: 6,
    orbitSpeed: 0.5, // sekolastik: beberapa detik per putaran, bukan 365 hari asli
    spinSpeed: 0.03,
    axialTiltRad: 0.41, // ~23.5°
  },
  facts: {
    rotasi: 'Rotasi: Bumi berputar pada porosnya 1 kali setiap 24 jam. Ini menyebabkan pergantian siang dan malam.',
    revolusi: 'Revolusi: Bumi mengelilingi Matahari 1 kali setiap 365,25 hari. Karena porosnya miring 23,5°, revolusi ini menyebabkan pergantian musim.',
  },
};

export function getEarthOrbitPosition(elapsedSeconds) {
  const angle = elapsedSeconds * EARTH_MOTION.earth.orbitSpeed;
  return {
    x: Math.cos(angle) * EARTH_MOTION.earth.orbitRadius,
    z: Math.sin(angle) * EARTH_MOTION.earth.orbitRadius,
  };
}
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/astronomy/earth-motion-data.test.mjs
import assert from 'node:assert/strict';
import { EARTH_MOTION, getEarthOrbitPosition } from './earth-motion-data.js';

assert.ok(EARTH_MOTION.sun.texture && EARTH_MOTION.sun.radius > 0, 'sun data present');
assert.ok(EARTH_MOTION.earth.texture && EARTH_MOTION.earth.radius > 0, 'earth data present');
assert.ok(EARTH_MOTION.earth.orbitRadius > 0 && EARTH_MOTION.earth.orbitSpeed > 0, 'earth orbit params present');
assert.ok(EARTH_MOTION.facts.rotasi && EARTH_MOTION.facts.revolusi, 'rotasi/revolusi facts present');

const at0 = getEarthOrbitPosition(0);
assert.equal(at0.x, EARTH_MOTION.earth.orbitRadius);
assert.equal(at0.z, 0);

const period = (2 * Math.PI) / EARTH_MOTION.earth.orbitSpeed;
const afterPeriod = getEarthOrbitPosition(period);
assert.ok(Math.abs(afterPeriod.x - at0.x) < 1e-9, 'x should return to start after one period');
assert.ok(Math.abs(afterPeriod.z - at0.z) < 1e-9, 'z should return to start after one period');

console.log('earth-motion-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/astronomy/earth-motion-data.test.mjs`
Expected: `earth-motion-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/astronomy/earth-motion.jsx
import { useState, useMemo } from 'react';
import { Line } from '@react-three/drei';
import { SceneCanvas } from './SceneCanvas';
import { CelestialBody } from './CelestialBody';
import { InfoPanel } from './InfoPanel';
import { EARTH_MOTION, getEarthOrbitPosition } from './earth-motion-data';

export function EarthMotionScene({ interactive = true, size = 'inline' }) {
  const [selected, setSelected] = useState(null);

  const orbitPoints = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2;
      pts.push([Math.cos(a) * EARTH_MOTION.earth.orbitRadius, 0, Math.sin(a) * EARTH_MOTION.earth.orbitRadius]);
    }
    return pts;
  }, []);

  return (
    <SceneCanvas
      size={size}
      interactive={interactive}
      cameraPosition={size === 'full' ? [0, 10, 14] : [0, 8, 11]}
      minDistance={5}
      maxDistance={25}
      overlay={selected && (
        <InfoPanel
          eyebrow="Gerakan Bumi"
          title={selected === 'sun' ? 'Matahari' : 'Bumi'}
          body={selected === 'sun' ? 'Pusat tata surya — sumber cahaya & panas yang menyebabkan siang di sisi Bumi yang menghadapnya.' : `${EARTH_MOTION.facts.rotasi} ${EARTH_MOTION.facts.revolusi}`}
          onClose={() => setSelected(null)}
        />
      )}
    >
      <Line points={orbitPoints} color="#ffffff" transparent opacity={0.15} />
      <CelestialBody
        id="sun"
        position={[0, 0, 0]}
        radius={EARTH_MOTION.sun.radius}
        texture={EARTH_MOTION.sun.texture}
        material="basic"
        onSelect={interactive ? setSelected : undefined}
      />
      <CelestialBody
        id="earth"
        orbit={getEarthOrbitPosition}
        radius={EARTH_MOTION.earth.radius}
        texture={EARTH_MOTION.earth.texture}
        spinSpeed={EARTH_MOTION.earth.spinSpeed}
        tilt={EARTH_MOTION.earth.axialTiltRad}
        onSelect={interactive ? setSelected : undefined}
      />
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/astronomy/earth-motion.jsx src/features/astronomy/earth-motion-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/astronomy/earth-motion-data.js osn-app/src/features/astronomy/earth-motion-data.test.mjs osn-app/src/features/astronomy/earth-motion.jsx
git commit -m "feat: add Earth Motion 3D scene (ipa-05c)" -- osn-app/src/features/astronomy/earth-motion-data.js osn-app/src/features/astronomy/earth-motion-data.test.mjs osn-app/src/features/astronomy/earth-motion.jsx
```

---

### Task 10: Moon Phases scene (`ipa-05d`)

**Files:**
- Create: `osn-app/src/features/astronomy/moon-phases-data.js`
- Create: `osn-app/src/features/astronomy/moon-phases-data.test.mjs`
- Create: `osn-app/src/features/astronomy/moon-phases.jsx`

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/astronomy/moon-phases-data.js
export const MOON_PHASES_LAYOUT = {
  earth: { texture: '/textures/2k_earth_daymap.jpg', radius: 1.1 },
  moon: { texture: '/textures/2k_moon.jpg', radius: 0.35, orbitRadius: 4, orbitSpeed: 0.4 },
};

export const PHASE_NAMES = [
  'Bulan Baru', 'Sabit Awal', 'Kuartir Awal', 'Cembung Awal',
  'Purnama', 'Cembung Akhir', 'Kuartir Akhir', 'Sabit Akhir',
];

export function getMoonOrbitPosition(elapsedSeconds) {
  const angle = elapsedSeconds * MOON_PHASES_LAYOUT.moon.orbitSpeed;
  return {
    x: Math.cos(angle) * MOON_PHASES_LAYOUT.moon.orbitRadius,
    z: Math.sin(angle) * MOON_PHASES_LAYOUT.moon.orbitRadius,
    angle,
  };
}

export function getPhaseNameAtAngle(angleRad) {
  const twoPi = Math.PI * 2;
  const normalized = ((angleRad % twoPi) + twoPi) % twoPi;
  const index = Math.round(normalized / (twoPi / 8)) % 8;
  return PHASE_NAMES[index];
}
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/astronomy/moon-phases-data.test.mjs
import assert from 'node:assert/strict';
import { PHASE_NAMES, getMoonOrbitPosition, getPhaseNameAtAngle } from './moon-phases-data.js';

assert.equal(PHASE_NAMES.length, 8, 'expected 8 named phases');

const at0 = getMoonOrbitPosition(0);
assert.equal(at0.angle, 0);

// Every one of the 8 named phases should be reachable across a full orbit.
const seen = new Set();
for (let i = 0; i < 8; i++) {
  seen.add(getPhaseNameAtAngle((i / 8) * Math.PI * 2));
}
assert.equal(seen.size, 8, 'all 8 phase names should be reachable across one orbit');

assert.equal(getPhaseNameAtAngle(0), 'Bulan Baru');
assert.equal(getPhaseNameAtAngle(Math.PI), 'Purnama');

console.log('moon-phases-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/astronomy/moon-phases-data.test.mjs`
Expected: `moon-phases-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/astronomy/moon-phases.jsx
import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { SceneCanvas } from './SceneCanvas';
import { CelestialBody } from './CelestialBody';
import { InfoPanel } from './InfoPanel';
import { MOON_PHASES_LAYOUT, getMoonOrbitPosition, getPhaseNameAtAngle } from './moon-phases-data';

function useCurrentMoonAngle() {
  const angleRef = useRef(0);
  useFrame((state) => {
    angleRef.current = getMoonOrbitPosition(state.clock.elapsedTime).angle;
  });
  return angleRef;
}

export function MoonPhasesScene({ interactive = true, size = 'inline' }) {
  const [selected, setSelected] = useState(false);
  const angleRef = useCurrentMoonAngle();
  const phaseName = selected ? getPhaseNameAtAngle(angleRef.current) : null;

  return (
    <SceneCanvas
      size={size}
      interactive={interactive}
      cameraPosition={size === 'full' ? [8, 4, 10] : [6, 3, 8]}
      minDistance={4}
      maxDistance={20}
      showPointLight={false}
      overlay={selected && (
        <InfoPanel
          eyebrow="Fase saat ini"
          title={phaseName}
          body="Fase Bulan berubah karena posisi Bulan mengelilingi Bumi membuat bagian yang disinari Matahari (dilihat dari Bumi) berbeda-beda setiap hari."
          onClose={() => setSelected(false)}
        />
      )}
    >
      <directionalLight position={[10, 3, 5]} intensity={2} />
      <CelestialBody
        id="earth"
        position={[0, 0, 0]}
        radius={MOON_PHASES_LAYOUT.earth.radius}
        texture={MOON_PHASES_LAYOUT.earth.texture}
        spinSpeed={0.01}
      />
      <CelestialBody
        id="moon"
        orbit={getMoonOrbitPosition}
        radius={MOON_PHASES_LAYOUT.moon.radius}
        texture={MOON_PHASES_LAYOUT.moon.texture}
        onSelect={interactive ? () => setSelected(true) : undefined}
      />
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/astronomy/moon-phases.jsx src/features/astronomy/moon-phases-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/astronomy/moon-phases-data.js osn-app/src/features/astronomy/moon-phases-data.test.mjs osn-app/src/features/astronomy/moon-phases.jsx
git commit -m "feat: add Moon Phases 3D scene (ipa-05d)" -- osn-app/src/features/astronomy/moon-phases-data.js osn-app/src/features/astronomy/moon-phases-data.test.mjs osn-app/src/features/astronomy/moon-phases.jsx
```

---

### Task 11: Eclipse scene (`ipa-05e`)

**Files:**
- Create: `osn-app/src/features/astronomy/eclipse-data.js`
- Create: `osn-app/src/features/astronomy/eclipse-data.test.mjs`
- Create: `osn-app/src/features/astronomy/eclipse.jsx`

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/astronomy/eclipse-data.js
export const ECLIPSE_BODIES = {
  sun: { texture: '/textures/2k_sun.jpg', radius: 1.2 },
  earth: { texture: '/textures/2k_earth_daymap.jpg', radius: 0.9 },
  moon: { texture: '/textures/2k_moon.jpg', radius: 0.3 },
};

// Posisi sepanjang garis lurus Matahari-Bumi-Bulan untuk tiap mode (semua di sumbu X, y=z=0).
export const ECLIPSE_LAYOUTS = {
  solar: {
    label: 'Gerhana Matahari',
    sun: [-8, 0, 0],
    earth: [4, 0, 0],
    moon: [1, 0, 0], // di antara Matahari & Bumi
    blockerId: 'moon',
    fact: 'Gerhana Matahari terjadi saat Bulan berada tepat di antara Matahari dan Bumi, sehingga bayangan Bulan jatuh ke sebagian permukaan Bumi. Ini hanya terjadi saat Bulan Baru.',
  },
  lunar: {
    label: 'Gerhana Bulan',
    sun: [-8, 0, 0],
    earth: [0, 0, 0],
    moon: [4, 0, 0], // di belakang Bumi dari sudut pandang Matahari
    blockerId: 'earth',
    fact: 'Gerhana Bulan terjadi saat Bumi berada tepat di antara Matahari dan Bulan, sehingga bayangan Bumi jatuh ke permukaan Bulan. Ini hanya terjadi saat Bulan Purnama.',
  },
};

export const ECLIPSE_ALIGNMENT_FACT = 'Gerhana tidak terjadi setiap bulan karena orbit Bulan miring sekitar 5° terhadap orbit Bumi mengelilingi Matahari — jadi ketiga benda jarang benar-benar sejajar.';
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/astronomy/eclipse-data.test.mjs
import assert from 'node:assert/strict';
import { ECLIPSE_BODIES, ECLIPSE_LAYOUTS, ECLIPSE_ALIGNMENT_FACT } from './eclipse-data.js';

for (const id of ['sun', 'earth', 'moon']) {
  assert.ok(ECLIPSE_BODIES[id].texture && ECLIPSE_BODIES[id].radius > 0, `${id} body data present`);
}

for (const [mode, layout] of Object.entries(ECLIPSE_LAYOUTS)) {
  assert.ok(layout.label && layout.fact, `${mode} layout has label/fact`);
  assert.ok(['sun', 'earth', 'moon'].includes(layout.blockerId), `${mode} blockerId is a valid body`);
  for (const id of ['sun', 'earth', 'moon']) {
    assert.equal(layout[id].length, 3, `${mode}.${id} position is a 3-tuple`);
    assert.equal(layout[id][1], 0, `${mode}.${id} should sit on y=0`);
    assert.equal(layout[id][2], 0, `${mode}.${id} should sit on z=0 (straight-line alignment)`);
  }
}

assert.ok(ECLIPSE_ALIGNMENT_FACT.length > 0, 'alignment fact present');

console.log('eclipse-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/astronomy/eclipse-data.test.mjs`
Expected: `eclipse-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/astronomy/eclipse.jsx
import { useState } from 'react';
import { SceneCanvas } from './SceneCanvas';
import { CelestialBody } from './CelestialBody';
import { InfoPanel } from './InfoPanel';
import { ECLIPSE_BODIES, ECLIPSE_LAYOUTS, ECLIPSE_ALIGNMENT_FACT } from './eclipse-data';

// Kerucut bayangan schematic dari benda penghalang, menjauhi Matahari — bukan shadow-mapping nyata
// (menghindari biaya performa/kompleksitas mengaktifkan real-time shadows untuk 1 demo scene).
// Asumsi: semua posisi ada di sumbu X (y=z=0), sesuai data eclipse-data.js.
function ShadowCone({ from, to, length = 3, radius = 0.6 }) {
  const sign = to[0] - from[0] >= 0 ? 1 : -1;
  const tipX = to[0];
  const baseX = to[0] + sign * length;
  const midX = (tipX + baseX) / 2;
  return (
    <mesh position={[midX, to[1], to[2]]} rotation={[0, 0, sign > 0 ? -Math.PI / 2 : Math.PI / 2]}>
      <coneGeometry args={[radius, length, 16]} />
      <meshBasicMaterial color="#111827" transparent opacity={0.35} />
    </mesh>
  );
}

export function EclipseScene({ interactive = true, size = 'inline' }) {
  const [mode, setMode] = useState('solar');
  const [selected, setSelected] = useState(null);
  const layout = ECLIPSE_LAYOUTS[mode];

  const bodyName = (id) => (id === 'sun' ? 'Matahari' : id === 'earth' ? 'Bumi' : 'Bulan');
  const bodyFact = (id) => {
    if (id === 'sun') return 'Sumber cahaya. Gerhana terjadi karena posisi benda-benda ini sejajar.';
    if (id === layout.blockerId) return `${layout.fact} ${ECLIPSE_ALIGNMENT_FACT}`;
    return layout.fact;
  };

  return (
    <SceneCanvas
      size={size}
      interactive={interactive}
      cameraPosition={size === 'full' ? [0, 6, 16] : [0, 5, 13]}
      minDistance={6}
      maxDistance={30}
      showPointLight={false}
      overlay={
        <>
          <div className="absolute top-3 left-3 flex gap-2">
            {Object.entries(ECLIPSE_LAYOUTS).map(([key, l]) => (
              <button
                key={key}
                onClick={() => { setMode(key); setSelected(null); }}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition ${mode === key ? 'bg-brand-primary text-white' : 'bg-white/80 text-gray-600 hover:bg-white'}`}
              >
                {l.label}
              </button>
            ))}
          </div>
          {selected && (
            <InfoPanel eyebrow={layout.label} title={bodyName(selected)} body={bodyFact(selected)} onClose={() => setSelected(null)} />
          )}
        </>
      }
    >
      {/* SceneCanvas's default point light sits at the origin, but this scene's sun sits at
          layout.sun (off-origin) — without a light there, Earth/Moon (both 'standard' material)
          would be lit from the wrong place instead of from the sun's actual position. */}
      <pointLight position={layout.sun} intensity={8} color="#fff6d8" decay={0} />
      <CelestialBody id="sun" position={layout.sun} radius={ECLIPSE_BODIES.sun.radius} texture={ECLIPSE_BODIES.sun.texture} material="basic" onSelect={interactive ? setSelected : undefined} />
      <CelestialBody id="earth" position={layout.earth} radius={ECLIPSE_BODIES.earth.radius} texture={ECLIPSE_BODIES.earth.texture} onSelect={interactive ? setSelected : undefined} />
      <CelestialBody id="moon" position={layout.moon} radius={ECLIPSE_BODIES.moon.radius} texture={ECLIPSE_BODIES.moon.texture} onSelect={interactive ? setSelected : undefined} />
      <ShadowCone from={layout.sun} to={layout[layout.blockerId]} />
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/astronomy/eclipse.jsx src/features/astronomy/eclipse-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/astronomy/eclipse-data.js osn-app/src/features/astronomy/eclipse-data.test.mjs osn-app/src/features/astronomy/eclipse.jsx
git commit -m "feat: add Eclipse 3D scene (ipa-05e)" -- osn-app/src/features/astronomy/eclipse-data.js osn-app/src/features/astronomy/eclipse-data.test.mjs osn-app/src/features/astronomy/eclipse.jsx
```

---

### Task 12: Atmosphere scene (`ipa-05k`)

**Files:**
- Create: `osn-app/src/features/astronomy/atmosphere-data.js`
- Create: `osn-app/src/features/astronomy/atmosphere-data.test.mjs`
- Create: `osn-app/src/features/astronomy/atmosphere.jsx`

- [ ] **Step 1: Data module**

```javascript
// osn-app/src/features/astronomy/atmosphere-data.js
export const ATMOSPHERE_EARTH = { texture: '/textures/2k_earth_daymap.jpg', radius: 1.6 };

// Radius sekolastik (altitude asli ada di nama/fact tiap lapisan) — urutan dari permukaan Bumi keluar.
export const ATMOSPHERE_LAYERS = [
  { id: 'troposfer', name: 'Troposfer (0-12 km)', radius: 1.9, color: '#7ec8e3', opacity: 0.35, fact: 'Tempat terjadinya cuaca — awan, hujan, dan angin. Berisi sekitar 75% massa atmosfer Bumi.' },
  { id: 'stratosfer', name: 'Stratosfer (12-50 km)', radius: 2.3, color: '#4a90d9', opacity: 0.28, fact: 'Berisi lapisan ozon yang menyerap radiasi ultraviolet (UV) berbahaya dari Matahari.' },
  { id: 'mesosfer', name: 'Mesosfer (50-85 km)', radius: 2.7, color: '#5c6bc0', opacity: 0.22, fact: 'Lapisan tempat sebagian besar meteor terbakar habis sebelum mencapai permukaan Bumi.' },
  { id: 'termosfer', name: 'Termosfer (85-600 km)', radius: 3.2, color: '#7e57c2', opacity: 0.18, fact: 'Tempat terjadinya aurora dan tempat Stasiun Luar Angkasa (ISS) mengorbit. Suhunya sangat tinggi, tapi terasa dingin karena partikelnya sangat jarang.' },
  { id: 'eksosfer', name: 'Eksosfer (600-10.000 km)', radius: 3.8, color: '#ab47bc', opacity: 0.12, fact: 'Lapisan terluar atmosfer, batas transisi menuju luar angkasa. Partikelnya sangat jarang dan sebagian bisa lepas ke luar angkasa.' },
];
```

- [ ] **Step 2: Node-runnable check**

```javascript
// osn-app/src/features/astronomy/atmosphere-data.test.mjs
import assert from 'node:assert/strict';
import { ATMOSPHERE_EARTH, ATMOSPHERE_LAYERS } from './atmosphere-data.js';

assert.ok(ATMOSPHERE_EARTH.texture && ATMOSPHERE_EARTH.radius > 0, 'earth data present');
assert.equal(ATMOSPHERE_LAYERS.length, 5, 'expected 5 atmosphere layers');

ATMOSPHERE_LAYERS.forEach((layer) => {
  for (const field of ['id', 'name', 'radius', 'color', 'opacity', 'fact']) {
    assert.ok(layer[field] !== undefined && layer[field] !== '', `${layer.id} missing field "${field}"`);
  }
  assert.ok(layer.opacity > 0 && layer.opacity < 1, `${layer.id} opacity should be a translucent fraction`);
});

assert.ok(ATMOSPHERE_LAYERS[0].radius > ATMOSPHERE_EARTH.radius, 'innermost layer should sit outside the Earth mesh');
for (let i = 1; i < ATMOSPHERE_LAYERS.length; i++) {
  assert.ok(
    ATMOSPHERE_LAYERS[i].radius > ATMOSPHERE_LAYERS[i - 1].radius,
    `${ATMOSPHERE_LAYERS[i].id} should have a larger radius than ${ATMOSPHERE_LAYERS[i - 1].id} (inner-to-outer order)`
  );
}

console.log('atmosphere-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/astronomy/atmosphere-data.test.mjs`
Expected: `atmosphere-data: all checks passed`.

- [ ] **Step 4: Scene component**

```jsx
// osn-app/src/features/astronomy/atmosphere.jsx
import { useState } from 'react';
import { SceneCanvas } from './SceneCanvas';
import { CelestialBody } from './CelestialBody';
import { ConcentricLayers } from './ConcentricLayers';
import { InfoPanel } from './InfoPanel';
import { ATMOSPHERE_EARTH, ATMOSPHERE_LAYERS } from './atmosphere-data';

export function AtmosphereScene({ interactive = true, size = 'inline' }) {
  const [selectedId, setSelectedId] = useState(null);
  const selected = ATMOSPHERE_LAYERS.find((l) => l.id === selectedId) || null;

  return (
    <SceneCanvas
      size={size}
      interactive={interactive}
      cameraPosition={size === 'full' ? [0, 3, 10] : [0, 2.5, 8]}
      minDistance={5}
      maxDistance={16}
      overlay={selected && (
        <InfoPanel eyebrow="Lapisan Atmosfer" title={selected.name} body={selected.fact} onClose={() => setSelectedId(null)} />
      )}
    >
      <CelestialBody id="bumi" position={[0, 0, 0]} radius={ATMOSPHERE_EARTH.radius} texture={ATMOSPHERE_EARTH.texture} spinSpeed={0.01} />
      <ConcentricLayers layers={ATMOSPHERE_LAYERS} mode="shell" onSelect={interactive ? setSelectedId : undefined} />
    </SceneCanvas>
  );
}
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/features/astronomy/atmosphere.jsx src/features/astronomy/atmosphere-data.js`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add osn-app/src/features/astronomy/atmosphere-data.js osn-app/src/features/astronomy/atmosphere-data.test.mjs osn-app/src/features/astronomy/atmosphere.jsx
git commit -m "feat: add Atmosphere 3D scene (ipa-05k)" -- osn-app/src/features/astronomy/atmosphere-data.js osn-app/src/features/astronomy/atmosphere-data.test.mjs osn-app/src/features/astronomy/atmosphere.jsx
```

---

### Task 13: Scene registry

**Files:**
- Create: `osn-app/src/features/astronomy/registry.js`

- [ ] **Step 1: Create the registry**

```javascript
// osn-app/src/features/astronomy/registry.js
import { SolarSystemScene } from '../solar-system';
import { EarthLayersScene } from './earth-layers';
import { EarthMotionScene } from './earth-motion';
import { MoonPhasesScene } from './moon-phases';
import { EclipseScene } from './eclipse';
import { AtmosphereScene } from './atmosphere';

export const SCENE_REGISTRY = {
  'ipa-05a': { component: SolarSystemScene, label: 'Tata Surya' },
  'ipa-05b': { component: EarthLayersScene, label: 'Lapisan Bumi' },
  'ipa-05c': { component: EarthMotionScene, label: 'Rotasi & Revolusi Bumi' },
  'ipa-05d': { component: MoonPhasesScene, label: 'Fase Bulan' },
  'ipa-05e': { component: EclipseScene, label: 'Gerhana' },
  'ipa-05k': { component: AtmosphereScene, label: 'Atmosfer' },
};
```

- [ ] **Step 2: Lint**

Run: `cd osn-app && npx eslint src/features/astronomy/registry.js`
Expected: no errors.

- [ ] **Step 3: Build check**

Run: `cd osn-app && npm run build`
Expected: succeeds — confirms all 6 scene imports resolve correctly.

- [ ] **Step 4: Commit**

```bash
git add osn-app/src/features/astronomy/registry.js
git commit -m "feat: add subBabId -> scene registry" -- osn-app/src/features/astronomy/registry.js
```

---

### Task 14: Viewer tab becomes a picker

**Files:**
- Create: `osn-app/src/components/AstronomyViewer.jsx`
- Delete: `osn-app/src/components/SolarSystemViewer.jsx`
- Modify: `osn-app/src/App.jsx`

- [ ] **Step 1: Create the picker viewer**

```jsx
// osn-app/src/components/AstronomyViewer.jsx
import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { SCENE_REGISTRY } from '../features/astronomy/registry';
import { useT } from '../i18n';

export default function AstronomyViewer() {
  const t = useT();
  const [selectedId, setSelectedId] = useState(null);
  const entries = Object.entries(SCENE_REGISTRY);

  if (selectedId) {
    const { component: Scene, label } = SCENE_REGISTRY[selectedId];
    return (
      <div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-12">
        <div className="glass-card rounded-2xl p-4 flex items-center gap-3">
          <button
            onClick={() => setSelectedId(null)}
            className="flex items-center gap-1.5 text-gray-500 hover:text-brand-primary font-bold text-sm transition"
          >
            <ChevronLeft className="w-5 h-5" /> {t('kembali_daftar_3d', 'Kembali ke Daftar')}
          </button>
          <h2 className="text-base font-black font-heading text-gray-800">{label}</h2>
        </div>
        <Scene interactive size="full" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-12">
      <div className="glass-card rounded-2xl p-4">
        <h2 className="text-base font-black font-heading text-gray-800">{t('jelajah_3d_title', 'Jelajah 3D')}</h2>
        <p className="text-xs text-gray-500 mt-1">{t('jelajah_3d_desc', 'Pilih topik untuk melihat visualisasi 3D interaktifnya.')}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {entries.map(([id, { label }]) => (
          <button
            key={id}
            onClick={() => setSelectedId(id)}
            className="glass-card rounded-2xl p-5 text-left hover:shadow-lg transition space-y-1"
          >
            <span className="text-sm font-black font-heading text-gray-800">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Delete the old single-scene viewer**

```bash
rm osn-app/src/components/SolarSystemViewer.jsx
```

- [ ] **Step 3: Wire it into `App.jsx`**

Current (`osn-app/src/App.jsx:7`):
```javascript
import SolarSystemViewer from './components/SolarSystemViewer';
```
Replace with:
```javascript
import AstronomyViewer from './components/AstronomyViewer';
```

Current (`osn-app/src/App.jsx`, desktop nav button — around line 233-240):
```jsx
              <button
                onClick={() => { setCurrentTab('solar-system'); setSelectedSubBab(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  currentTab === 'solar-system' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <Orbit className="w-4 h-4" /> {t('tata_surya_3d_nav', 'Tata Surya 3D')}
              </button>
```
Replace with:
```jsx
              <button
                onClick={() => { setCurrentTab('astronomy'); setSelectedSubBab(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  currentTab === 'astronomy' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <Orbit className="w-4 h-4" /> {t('jelajah_3d_nav', 'Jelajah 3D')}
              </button>
```

Current (`osn-app/src/App.jsx:339`):
```jsx
        {currentTab === 'solar-system' && <SolarSystemViewer />}
```
Replace with:
```jsx
        {currentTab === 'astronomy' && <AstronomyViewer />}
```

Current (`osn-app/src/App.jsx`, mobile nav array — around line 349):
```jsx
            { id: 'solar-system', icon: Orbit, label: t('tata_surya_3d_nav', 'Tata Surya 3D').split(' ')[0] },
```
Replace with:
```jsx
            { id: 'astronomy', icon: Orbit, label: t('jelajah_3d_nav', 'Jelajah 3D').split(' ')[0] },
```

- [ ] **Step 4: Register the new i18n keys**

In `osn-app/src/i18n/index.jsx`, the `id` dict currently has (added when the pilot shipped):
```javascript
  tata_surya_3d_nav: 'Tata Surya 3D',
  tata_surya_3d_title: 'Jelajah Tata Surya 3D',
  tata_surya_3d_desc: 'Putar & perbesar dengan drag mouse. Klik sebuah planet untuk melihat faktanya.',
```
Replace those three lines with:
```javascript
  jelajah_3d_nav: 'Jelajah 3D',
  jelajah_3d_title: 'Jelajah 3D',
  jelajah_3d_desc: 'Pilih topik untuk melihat visualisasi 3D interaktifnya.',
  kembali_daftar_3d: 'Kembali ke Daftar',
```
And in the `en` dict, the matching lines:
```javascript
  tata_surya_3d_nav: '3D Solar System',
  tata_surya_3d_title: 'Explore the Solar System in 3D',
  tata_surya_3d_desc: 'Drag to rotate & zoom. Click a planet to see facts about it.',
```
Replace with:
```javascript
  jelajah_3d_nav: '3D Explorer',
  jelajah_3d_title: '3D Explorer',
  jelajah_3d_desc: 'Pick a topic to see its interactive 3D visualization.',
  kembali_daftar_3d: 'Back to List',
```

- [ ] **Step 5: Lint**

Run: `cd osn-app && npx eslint src/App.jsx src/components/AstronomyViewer.jsx src/i18n/index.jsx`
Expected: no NEW errors (check via `git diff` that any reported errors are pre-existing, outside the lines this task touched — same as the pilot's App.jsx task).

- [ ] **Step 6: Build check**

Run: `cd osn-app && npm run build`
Expected: succeeds.

- [ ] **Step 7: Commit**

```bash
git add osn-app/src/App.jsx osn-app/src/components/AstronomyViewer.jsx osn-app/src/i18n/index.jsx
git rm osn-app/src/components/SolarSystemViewer.jsx
git commit -m "feat: replace single-scene viewer tab with a 3D topic picker" -- osn-app/src/App.jsx osn-app/src/components/AstronomyViewer.jsx osn-app/src/components/SolarSystemViewer.jsx osn-app/src/i18n/index.jsx
```

---

### Task 15: Registry-driven inline widget in `PracticeArea`

**Files:**
- Modify: `osn-app/src/components/PracticeArea.jsx`

Same insertion point and `isCleanMode`-branch constraint as the pilot — only the lookup mechanism changes (registry instead of one hardcoded `===` check).

- [ ] **Step 1: Swap the import**

Current (`osn-app/src/components/PracticeArea.jsx:15`):
```javascript
import { SolarSystemScene } from '../features/solar-system';
```
Replace with:
```javascript
import { SCENE_REGISTRY } from '../features/astronomy/registry';
```

- [ ] **Step 2: Swap the render check**

Current (`osn-app/src/components/PracticeArea.jsx:898`):
```jsx
          {subBabId === 'ipa-05a' && <SolarSystemScene interactive size="inline" />}
```
Replace with:
```jsx
          {SCENE_REGISTRY[subBabId] && (() => {
            const Scene = SCENE_REGISTRY[subBabId].component;
            return <Scene interactive size="inline" />;
          })()}
```

- [ ] **Step 3: Lint**

Run: `cd osn-app && npx eslint src/components/PracticeArea.jsx`
Expected: no NEW errors (pre-existing unrelated ones from the pilot's task are fine — verify via `git diff` they're outside this task's two changed lines).

- [ ] **Step 4: Verify the `isCleanMode` branch is still untouched**

```bash
git diff osn-app/src/components/PracticeArea.jsx
```
Expected: exactly two hunks (the import line, the render line), both outside the `isCleanMode` branch (roughly lines 584-804, same as verified in the pilot).

- [ ] **Step 5: Commit**

```bash
git add osn-app/src/components/PracticeArea.jsx
git commit -m "feat: drive inline practice widget from the scene registry" -- osn-app/src/components/PracticeArea.jsx
```

---

### Task 16: Manual verification (all 6 scenes)

No automated UI test framework in `osn-app` beyond eslint — same browser verification pass as the pilot, extended to cover every registry entry.

- [ ] **Step 1: Start the dev server**

Run: `cd osn-app && npm run dev`

- [ ] **Step 2: Verify the picker and every scene**

Open "Jelajah 3D" in the nav. Confirm the picker shows all 6 entries (Tata Surya, Lapisan Bumi, Rotasi & Revolusi Bumi, Fase Bulan, Gerhana, Atmosfer). For each one:
- Click it, confirm a canvas renders with zero console errors.
- Drag to orbit (confirm the camera responds).
- Click a labeled part (planet/layer/body) and confirm `InfoPanel` shows sensible content, then closes correctly.
- Click "Kembali ke Daftar" and confirm it returns to the picker grid.
- For **Gerhana** specifically: toggle between "Gerhana Matahari" and "Gerhana Bulan" and confirm the three bodies reposition into a straight line each time, with the shadow cone pointing away from the sun in both modes (not through it).
- For **Fase Bulan** specifically: click the Moon a few times as it orbits and confirm the reported phase name changes over time (not stuck on one value).

- [ ] **Step 3: Verify inline widgets in Practice**

For each of `ipa-05b`, `ipa-05c`, `ipa-05d`, `ipa-05e`, `ipa-05k`: open Practice for that sub-bab, confirm the correct scene renders inline (matching the picker's version of the same topic), and confirm normal quiz flow (select an option, check answer, next question) still works. Open Practice for a sub-bab NOT in the registry (e.g. `ipa-05f`) and confirm no 3D widget renders there.

- [ ] **Step 4: Confirm the recording path is still untouched**

```bash
npm run record:videos -- --only=ipa-05f --limit=2
```
Expected: behaves exactly as before (no regression — `PracticeArea.jsx`'s `isCleanMode` branch was never touched across this entire batch).

---

## Out of scope (see spec)

- Video recording integration for the `isCleanMode` branch.
- Any sub-bab outside `ipa-05a/b/c/d/e/k`.
- Real-time shadow mapping for the eclipse scene (schematic cone instead).
- Chapter 02 (Tubuh Manusia) — separate batch, separate brainstorm cycle.
