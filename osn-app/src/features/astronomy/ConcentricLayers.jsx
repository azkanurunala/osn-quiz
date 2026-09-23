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
