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
