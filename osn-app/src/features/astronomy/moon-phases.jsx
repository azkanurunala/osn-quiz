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
  const [phaseName, setPhaseName] = useState(null);
  const angleRef = useCurrentMoonAngle();

  return (
    <SceneCanvas
      size={size}
      interactive={interactive}
      cameraPosition={size === 'full' ? [8, 4, 10] : [6, 3, 8]}
      minDistance={4}
      maxDistance={20}
      showPointLight={false}
      overlay={phaseName && (
        <InfoPanel
          eyebrow="Fase saat ini"
          title={phaseName}
          body="Fase Bulan berubah karena posisi Bulan mengelilingi Bumi membuat bagian yang disinari Matahari (dilihat dari Bumi) berbeda-beda setiap hari."
          onClose={() => setPhaseName(null)}
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
        onSelect={interactive ? () => setPhaseName(getPhaseNameAtAngle(angleRef.current)) : undefined}
      />
    </SceneCanvas>
  );
}
