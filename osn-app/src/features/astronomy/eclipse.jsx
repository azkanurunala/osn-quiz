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
      <CelestialBody id="sun" position={layout.sun} radius={ECLIPSE_BODIES.sun.radius} texture={ECLIPSE_BODIES.sun.texture} spinSpeed={0.004} material="basic" onSelect={interactive ? setSelected : undefined} />
      <CelestialBody id="earth" position={layout.earth} radius={ECLIPSE_BODIES.earth.radius} texture={ECLIPSE_BODIES.earth.texture} onSelect={interactive ? setSelected : undefined} />
      <CelestialBody id="moon" position={layout.moon} radius={ECLIPSE_BODIES.moon.radius} texture={ECLIPSE_BODIES.moon.texture} onSelect={interactive ? setSelected : undefined} />
      <ShadowCone from={layout.sun} to={layout[layout.blockerId]} />
    </SceneCanvas>
  );
}
