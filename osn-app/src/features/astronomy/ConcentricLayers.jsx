import { DoubleSide } from 'three';

// Wedge removed in 'cutaway' mode so nested inner layers are visible through the gap.
const CUTAWAY_ANGLE = Math.PI / 2;

export function ConcentricLayers({ layers, mode, onSelect }) {
  // For concentric shells, the nearest raycaster hit is always the outermost layer's near
  // surface — it directly faces the camera everywhere within its silhouette, so a naive "select
  // whatever was clicked" handler would report the outermost layer no matter where you click.
  // Instead, look at every layer the ray actually passed through (e.intersections, provided by
  // R3F) and pick the SMALLEST-radius one among them — that's the layer closest to the center,
  // matching what clicking "deeper into" the stack should mean.
  const handleClick = (e) => {
    e.stopPropagation();
    if (!onSelect) return;
    const hitIds = new Set(e.intersections.map((i) => i.object.userData?.layerId).filter(Boolean));
    const innermostHit = layers
      .filter((l) => hitIds.has(l.id))
      .reduce((a, b) => (a.radius < b.radius ? a : b), layers[layers.length - 1]);
    onSelect(innermostHit.id);
  };

  return (
    <>
      {layers.map((layer) => (
        <mesh
          key={layer.id}
          userData={{ layerId: layer.id }}
          onClick={onSelect ? handleClick : undefined}
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
            // depthWrite=false in shell mode: Three.js doesn't disable depth-writing just
            // because a material is transparent, so without this, whichever shell draws first
            // (typically the largest/outermost) writes its depth and hides every smaller shell
            // behind it — the layers stop being visible through each other entirely.
            depthWrite={mode !== 'shell'}
            side={DoubleSide}
            roughness={0.8}
          />
        </mesh>
      ))}
    </>
  );
}
