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
