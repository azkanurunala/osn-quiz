import { Suspense, useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line, useTexture, Environment } from '@react-three/drei';
import { X } from 'lucide-react';
import { PLANETS, SUN, BACKGROUND_TEXTURE, getPlanetPosition } from './solar-system-data';

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

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

function Planet({ planet, onSelect }) {
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
        <meshStandardMaterial map={texture} roughness={0.7} metalness={0.1} />
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
  const [webglOk] = useState(() => isWebGLAvailable());

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
        <Suspense fallback={null}>
          <Environment files={BACKGROUND_TEXTURE} background />
          <ambientLight intensity={0.35} />
          {/* decay=0: keeps consistent shading on far planets (orbitRadius up to 18) instead of
              Three's physically-correct inverse-square falloff washing them out to flat ambient light */}
          <pointLight position={[0, 0, 0]} intensity={3.5} color="#fff6d8" decay={0} />
          <Sun />
          {PLANETS.map((planet) => (
            <Planet key={planet.id} planet={planet} onSelect={interactive ? setSelectedId : undefined} />
          ))}
          {interactive && <OrbitControls enablePan={false} minDistance={8} maxDistance={45} />}
        </Suspense>
      </Canvas>
      {selectedPlanet && <PlanetInfoPanel planet={selectedPlanet} onClose={() => setSelectedId(null)} />}
    </div>
  );
}
