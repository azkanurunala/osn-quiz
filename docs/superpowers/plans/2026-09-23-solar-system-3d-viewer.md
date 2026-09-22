# Tata Surya 3D Viewer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an interactive, stylized 3D solar system (React Three Fiber) for the Tata Surya sub-bab (`ipa-05a`) in `osn-app`, shown in a new standalone viewer tab and as an inline widget during normal (non-recording) practice.

**Architecture:** One reusable `SolarSystemScene` component (drag-to-orbit camera, auto-orbiting planets, click-to-info) backed by a plain-JS data/math module (`solar-system-data.js`, independently testable with plain `node`). Mounted in two places: a new `currentTab === 'solar-system'` tab in `App.jsx`, and inline inside `PracticeArea.jsx`'s normal-mode render branch when `subBabId === 'ipa-05a'`. The recording (`isCleanMode`) branch of `PracticeArea.jsx` is explicitly untouched (separate pixel-tuned layout — see spec's "Out of scope").

**Tech Stack:** `three`, `@react-three/fiber`, `@react-three/drei` (new deps) on top of existing React 19 + Vite + Tailwind v4 (`osn-app`).

**Spec:** `docs/superpowers/specs/2026-09-23-solar-system-3d-viewer-design.md`

---

### Task 1: Add Three.js dependencies

**Files:**
- Modify: `osn-app/package.json`

- [ ] **Step 1: Add the three dependencies**

In `osn-app/package.json`, the current `dependencies` block is:

```json
  "dependencies": {
    "@tailwindcss/vite": "^4.3.0",
    "canvas-confetti": "^1.9.4",
    "lucide-react": "^1.16.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6"
  },
```

Replace it with:

```json
  "dependencies": {
    "@react-three/drei": "^10.7.8",
    "@react-three/fiber": "^9.8.0",
    "@tailwindcss/vite": "^4.3.0",
    "canvas-confetti": "^1.9.4",
    "lucide-react": "^1.16.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "three": "^0.186.0"
  },
```

(Verified compatible: `@react-three/fiber@9.8.0` requires `react >=19 <19.4` and `three >=0.156`; `@react-three/drei@10.7.8` requires `react ^19`, `three >=0.159`, `@react-three/fiber ^9.0.0`. Installed React is `^19.2.6` — within range.)

- [ ] **Step 2: Install**

Run: `cd osn-app && npm install`
Expected: installs `three`, `@react-three/fiber`, `@react-three/drei` with no peer-dependency errors.

- [ ] **Step 3: Commit**

```bash
git add osn-app/package.json osn-app/package-lock.json
git commit -m "chore: add three.js/react-three-fiber deps for solar system viewer"
```

---

### Task 2: Solar system data + pure orbit math

**Files:**
- Create: `osn-app/src/features/solar-system-data.js`
- Test: `osn-app/src/features/solar-system-data.test.mjs`

Plain JS (no JSX, no React import) so it can be unit-checked directly with `node`, and imported by the React component in Task 3.

- [ ] **Step 1: Create the data module**

```javascript
// osn-app/src/features/solar-system-data.js
export const SUN = {
  name: 'Matahari',
  color: '#ffcc33',
  radius: 2.2,
};

// order = urutan dari Matahari. orbitSpeed proporsional dengan 1/periode-orbit-nyata
// (dalam tahun Bumi) supaya planet lebih dekat memang terlihat lebih cepat mengorbit.
export const PLANETS = [
  { id: 'merkurius', name: 'Merkurius', order: 1, color: '#9c9c9c', radius: 0.35, orbitRadius: 4, orbitSpeed: 4.15, fact: 'Planet terdekat dari Matahari. Permukaannya penuh kawah, mirip Bulan, karena nyaris tidak punya atmosfer pelindung.' },
  { id: 'venus', name: 'Venus', order: 2, color: '#e8c27a', radius: 0.55, orbitRadius: 5.5, orbitSpeed: 1.62, fact: 'Planet terpanas di tata surya. Awan tebal gas rumah kacanya menjebak panas Matahari.' },
  { id: 'bumi', name: 'Bumi', order: 3, color: '#4a90d9', radius: 0.6, orbitRadius: 7, orbitSpeed: 1, fact: 'Satu-satunya planet yang diketahui punya kehidupan. Sekitar 70% permukaannya tertutup air.' },
  { id: 'mars', name: 'Mars', order: 4, color: '#c1440e', radius: 0.4, orbitRadius: 8.5, orbitSpeed: 0.53, fact: 'Dijuluki Planet Merah karena tanahnya kaya oksida besi (karat).' },
  { id: 'jupiter', name: 'Jupiter', order: 5, color: '#d2a679', radius: 1.4, orbitRadius: 11, orbitSpeed: 0.084, fact: 'Planet terbesar di tata surya. Punya badai raksasa yang disebut Bintik Merah Besar.' },
  { id: 'saturnus', name: 'Saturnus', order: 6, color: '#e3c78a', radius: 1.2, orbitRadius: 13.5, orbitSpeed: 0.034, fact: 'Terkenal karena cincin lebar yang tersusun dari es dan batuan.' },
  { id: 'uranus', name: 'Uranus', order: 7, color: '#7fd4d9', radius: 0.9, orbitRadius: 16, orbitSpeed: 0.0119, fact: 'Berputar menyamping — porosnya miring sekitar 98 derajat, tidak seperti planet lain.' },
  { id: 'neptunus', name: 'Neptunus', order: 8, color: '#3a5fcd', radius: 0.85, orbitRadius: 18, orbitSpeed: 0.0061, fact: 'Planet terjauh dari Matahari, dikenal karena angin terkencang di tata surya.' },
];

// Posisi planet di bidang X-Z pada waktu elapsedSeconds (pure, tidak butuh Three.js).
export function getPlanetPosition(planet, elapsedSeconds) {
  const angle = elapsedSeconds * planet.orbitSpeed;
  return {
    x: Math.cos(angle) * planet.orbitRadius,
    z: Math.sin(angle) * planet.orbitRadius,
  };
}
```

- [ ] **Step 2: Write the plain-Node check**

```javascript
// osn-app/src/features/solar-system-data.test.mjs
import assert from 'node:assert/strict';
import { PLANETS, SUN, getPlanetPosition } from './solar-system-data.js';

assert.equal(PLANETS.length, 8, 'expected 8 planets');

PLANETS.forEach((p, i) => {
  assert.equal(p.order, i + 1, `planet at index ${i} should have order ${i + 1}`);
  for (const field of ['id', 'name', 'color', 'radius', 'orbitRadius', 'orbitSpeed', 'fact']) {
    assert.ok(p[field] !== undefined && p[field] !== '', `${p.id} missing field "${field}"`);
  }
});

for (let i = 1; i < PLANETS.length; i++) {
  assert.ok(
    PLANETS[i - 1].orbitSpeed > PLANETS[i].orbitSpeed,
    `${PLANETS[i - 1].id} should orbit faster than ${PLANETS[i].id}`
  );
}

assert.ok(SUN.color && SUN.radius > 0, 'sun data present');

const earth = PLANETS.find((p) => p.id === 'bumi');
const at0 = getPlanetPosition(earth, 0);
assert.equal(at0.x, earth.orbitRadius);
assert.equal(at0.z, 0);

const period = (2 * Math.PI) / earth.orbitSpeed;
const afterPeriod = getPlanetPosition(earth, period);
assert.ok(Math.abs(afterPeriod.x - at0.x) < 1e-9, 'x should return to start after one period');
assert.ok(Math.abs(afterPeriod.z - at0.z) < 1e-9, 'z should return to start after one period');

console.log('solar-system-data: all checks passed');
```

- [ ] **Step 3: Run it**

Run: `cd osn-app && node src/features/solar-system-data.test.mjs`
Expected: `solar-system-data: all checks passed` printed, exit code 0.

- [ ] **Step 4: Commit**

```bash
git add osn-app/src/features/solar-system-data.js osn-app/src/features/solar-system-data.test.mjs
git commit -m "feat: add solar system planet data + orbit math"
```

---

### Task 3: SolarSystemScene component

**Files:**
- Create: `osn-app/src/features/solar-system.jsx`

Single flat file (matches this codebase's existing `src/features/bookmarks.jsx` convention — one file per feature, not a sub-folder).

- [ ] **Step 1: Create the component**

```jsx
// osn-app/src/features/solar-system.jsx
import { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import { X } from 'lucide-react';
import { PLANETS, SUN, getPlanetPosition } from './solar-system-data';

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[SUN.radius, 32, 32]} />
      <meshStandardMaterial color={SUN.color} emissive={SUN.color} emissiveIntensity={1.6} toneMapped={false} />
    </mesh>
  );
}

function Planet({ planet, onSelect }) {
  const meshRef = useRef(null);

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
    if (meshRef.current) {
      meshRef.current.position.set(x, 0, z);
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      <Line points={ringPoints} color="#ffffff" transparent opacity={0.15} />
      <mesh ref={meshRef} onClick={(e) => { e.stopPropagation(); onSelect?.(planet.id); }}>
        <sphereGeometry args={[planet.radius, 24, 24]} />
        <meshStandardMaterial color={planet.color} roughness={0.7} metalness={0.1} />
      </mesh>
    </group>
  );
}

function PlanetInfoPanel({ planet, onClose }) {
  return (
    <div className="absolute bottom-3 left-3 right-3 md:right-auto md:w-72 glass-card rounded-2xl p-4 shadow-lg space-y-1.5 animate-fade-in">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">Planet ke-{planet.order} dari Matahari</span>
          <h4 className="text-sm font-black font-heading text-gray-800">{planet.name}</h4>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-700 shrink-0" aria-label="Tutup">
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed">{planet.fact}</p>
    </div>
  );
}

export function SolarSystemScene({ interactive = true, size = 'inline' }) {
  const [selectedId, setSelectedId] = useState(null);
  const [webglOk, setWebglOk] = useState(true);

  useEffect(() => {
    setWebglOk(isWebGLAvailable());
  }, []);

  const selectedPlanet = PLANETS.find((p) => p.id === selectedId) || null;
  const heightClass = size === 'full' ? 'h-[70vh] min-h-[420px]' : 'h-72 md:h-96';

  if (!webglOk) {
    return (
      <div className={`glass-card rounded-3xl flex items-center justify-center text-center p-8 ${heightClass}`}>
        <p className="text-sm text-gray-500 font-semibold">Visualisasi 3D tidak didukung di browser ini.</p>
      </div>
    );
  }

  return (
    <div className={`relative rounded-3xl overflow-hidden glass-card ${heightClass}`}>
      <Canvas camera={{ position: size === 'full' ? [0, 22, 30] : [0, 16, 22], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={2.5} color="#fff6d8" />
        <Sun />
        {PLANETS.map((planet) => (
          <Planet key={planet.id} planet={planet} onSelect={interactive ? setSelectedId : undefined} />
        ))}
        {interactive && <OrbitControls enablePan={false} minDistance={8} maxDistance={45} />}
      </Canvas>
      {selectedPlanet && <PlanetInfoPanel planet={selectedPlanet} onClose={() => setSelectedId(null)} />}
    </div>
  );
}
```

- [ ] **Step 2: Lint**

Run: `cd osn-app && npx eslint src/features/solar-system.jsx src/features/solar-system-data.js`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add osn-app/src/features/solar-system.jsx
git commit -m "feat: add SolarSystemScene (R3F canvas, orbit controls, click-to-info)"
```

---

### Task 4: Standalone viewer tab

**Files:**
- Create: `osn-app/src/components/SolarSystemViewer.jsx`
- Modify: `osn-app/src/App.jsx`

- [ ] **Step 1: Create the viewer wrapper**

```jsx
// osn-app/src/components/SolarSystemViewer.jsx
import { SolarSystemScene } from '../features/solar-system';
import { useT } from '../i18n';

export default function SolarSystemViewer() {
  const t = useT();
  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-12">
      <div className="glass-card rounded-2xl p-4">
        <h2 className="text-base font-black font-heading text-gray-800">{t('tata_surya_3d_title', 'Jelajah Tata Surya 3D')}</h2>
        <p className="text-xs text-gray-500 mt-1">{t('tata_surya_3d_desc', 'Putar & perbesar dengan drag mouse. Klik sebuah planet untuk melihat faktanya.')}</p>
      </div>
      <SolarSystemScene interactive size="full" />
    </div>
  );
}
```

- [ ] **Step 2: Import the icon and the viewer in `App.jsx`**

Current (`osn-app/src/App.jsx:1-9`):

```javascript
import { useState, useCallback, useEffect, useRef } from 'react';
import { Compass, BarChart3, Clock, Trophy, Star, Flame, Sliders } from 'lucide-react';
import Dashboard from './components/Dashboard';
import PracticeArea from './components/PracticeArea';
import TryoutArea from './components/TryoutArea';
import Analytics from './components/Analytics';
import OnboardingTour from './components/OnboardingTour';
import ShortcutHelp from './components/ShortcutHelp';
import SplashScreen from './components/SplashScreen';
```

Replace with:

```javascript
import { useState, useCallback, useEffect, useRef } from 'react';
import { Compass, BarChart3, Clock, Trophy, Star, Flame, Sliders, Orbit } from 'lucide-react';
import Dashboard from './components/Dashboard';
import PracticeArea from './components/PracticeArea';
import TryoutArea from './components/TryoutArea';
import Analytics from './components/Analytics';
import SolarSystemViewer from './components/SolarSystemViewer';
import OnboardingTour from './components/OnboardingTour';
import ShortcutHelp from './components/ShortcutHelp';
import SplashScreen from './components/SplashScreen';
```

- [ ] **Step 3: Add the desktop nav button**

Current (`osn-app/src/App.jsx`, inside the `<nav className="hidden md:flex...">` block):

```jsx
              <button
                onClick={() => { setCurrentTab('analytics'); setSelectedSubBab(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  currentTab === 'analytics' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <BarChart3 className="w-4 h-4" /> {t('analitik_belajar', 'Analitik Belajar')}
              </button>
            </nav>
```

Replace with:

```jsx
              <button
                onClick={() => { setCurrentTab('analytics'); setSelectedSubBab(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  currentTab === 'analytics' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <BarChart3 className="w-4 h-4" /> {t('analitik_belajar', 'Analitik Belajar')}
              </button>
              <button
                onClick={() => { setCurrentTab('solar-system'); setSelectedSubBab(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  currentTab === 'solar-system' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <Orbit className="w-4 h-4" /> {t('tata_surya_3d_nav', 'Tata Surya 3D')}
              </button>
            </nav>
```

- [ ] **Step 4: Render the viewer tab in `<main>`**

Current (`osn-app/src/App.jsx`, right after the `analytics` block, before `</main>`):

```jsx
        {currentTab === 'analytics' && (
          <Analytics
            stats={stats}
            progress={progress}
            manifest={manifest}
            onResetProgress={handleResetProgress}
            questionsData={questionsData}
            onJumpToSubBab={handleSelectSubBab}
          />
        )}
      </main>
```

Replace with:

```jsx
        {currentTab === 'analytics' && (
          <Analytics
            stats={stats}
            progress={progress}
            manifest={manifest}
            onResetProgress={handleResetProgress}
            questionsData={questionsData}
            onJumpToSubBab={handleSelectSubBab}
          />
        )}

        {currentTab === 'solar-system' && <SolarSystemViewer />}
      </main>
```

- [ ] **Step 5: Add the mobile bottom-nav entry**

Current (`osn-app/src/App.jsx`, inside the mobile `<nav>` block):

```jsx
          {[
            { id: 'dashboard', icon: Compass, label: t('roadmap_belajar', 'Roadmap').split(' ')[0] },
            { id: 'tryout', icon: Clock, label: t('tryout_mandiri', 'Tryout').split(' ')[0] },
            { id: 'analytics', icon: BarChart3, label: t('analitik_belajar', 'Analitik').split(' ')[0] },
          ].map(({ id, icon: Icon, label }) => {
```

Replace with:

```jsx
          {[
            { id: 'dashboard', icon: Compass, label: t('roadmap_belajar', 'Roadmap').split(' ')[0] },
            { id: 'tryout', icon: Clock, label: t('tryout_mandiri', 'Tryout').split(' ')[0] },
            { id: 'analytics', icon: BarChart3, label: t('analitik_belajar', 'Analitik').split(' ')[0] },
            { id: 'solar-system', icon: Orbit, label: t('tata_surya_3d_nav', 'Tata Surya 3D').split(' ')[0] },
          ].map(({ id, icon: Icon, label }) => {
```

- [ ] **Step 6: Lint**

Run: `cd osn-app && npx eslint src/App.jsx src/components/SolarSystemViewer.jsx`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add osn-app/src/App.jsx osn-app/src/components/SolarSystemViewer.jsx
git commit -m "feat: add standalone Tata Surya 3D viewer tab"
```

---

### Task 5: Inline widget in PracticeArea (normal mode only)

**Files:**
- Modify: `osn-app/src/components/PracticeArea.jsx`

Only touches the standard-learning-mode branch (`:807+`). The `isCleanMode` recording branch (`:584-804`) is explicitly left untouched per the spec.

- [ ] **Step 1: Import the scene**

Current (`osn-app/src/components/PracticeArea.jsx:11-17`):

```javascript
import { InlineMarkdown, MarkdownText } from '../utils/markdown.jsx';
import { logActivity } from '../utils/activityLog';
import { recordReview } from '../utils/spacedRepetition';
import { BookmarkButton } from '../features/bookmarks';
import { fireMilestone } from '../utils/milestones';
import { useT } from '../i18n';
import { startRecording, startRecordingFromStream } from '../utils/recorder';
```

Replace with:

```javascript
import { InlineMarkdown, MarkdownText } from '../utils/markdown.jsx';
import { logActivity } from '../utils/activityLog';
import { recordReview } from '../utils/spacedRepetition';
import { BookmarkButton } from '../features/bookmarks';
import { SolarSystemScene } from '../features/solar-system';
import { fireMilestone } from '../utils/milestones';
import { useT } from '../i18n';
import { startRecording, startRecordingFromStream } from '../utils/recorder';
```

- [ ] **Step 2: Render it for `ipa-05a` only**

Current (`osn-app/src/components/PracticeArea.jsx`, end of the filter-chips block, right before the "no soal in filter" check):

```jsx
            })}
          </div>

          {filterTotal === 0 ? (
```

Replace with:

```jsx
            })}
          </div>

          {subBabId === 'ipa-05a' && <SolarSystemScene interactive size="inline" />}

          {filterTotal === 0 ? (
```

- [ ] **Step 3: Lint**

Run: `cd osn-app && npx eslint src/components/PracticeArea.jsx`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add osn-app/src/components/PracticeArea.jsx
git commit -m "feat: show inline solar system widget during ipa-05a practice"
```

---

### Task 6: Manual verification

No automated UI test framework exists in `osn-app` (eslint only) — this is the browser verification pass required before calling the feature done.

- [ ] **Step 1: Start the dev server**

Run: `cd osn-app && npm run dev`

- [ ] **Step 2: Verify the standalone viewer**

Open the app in a browser, click the new "Tata Surya 3D" nav button. Confirm:
- The sun and 8 planets render, planets visibly orbiting at different speeds (Mercury fastest, Neptune slowest).
- Drag rotates the camera; scroll/pinch zooms (clamped between `minDistance=8` and `maxDistance=45`).
- Clicking a planet opens `PlanetInfoPanel` with the correct name/order/fact; the close button dismisses it.

- [ ] **Step 3: Verify the inline widget**

From the dashboard, open Practice for the Tata Surya sub-bab (`ipa-05a`). Confirm:
- The inline scene renders above the "Video Producer Studio" card, at the smaller `inline` size.
- Normal quiz flow (selecting an option, checking the answer, navigating soal) still works unaffected.
- Open Practice for a different sub-bab (e.g. `ipa-05b`) and confirm the widget does **not** render there.

- [ ] **Step 4: Confirm the recording path is untouched**

Run a short recording for a sub-bab other than `ipa-05a` (e.g. `npm run record:videos -- --only=ipa-05b --limit=2`) and confirm it behaves exactly as before (no regression from this change, since `PracticeArea.jsx`'s `isCleanMode` branch was not modified).

---

## Out of scope (see spec)

- Video recording integration for the `isCleanMode` branch — separate follow-up.
- Any sub-bab other than `ipa-05a`.
- Realistic/textured PBR planets, astronomically accurate scale.
