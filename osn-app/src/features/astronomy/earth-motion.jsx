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
