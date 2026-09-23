import { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Maximize, Minimize } from 'lucide-react';
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const wrapperRef = useRef(null);
  const heightClass = size === 'full' ? 'h-[70vh] min-h-[420px]' : 'h-72 md:h-96';
  const defaultCameraPosition = size === 'full' ? [0, 22, 30] : [0, 16, 22];

  useEffect(() => {
    const handleChange = () => setIsFullscreen(document.fullscreenElement === wrapperRef.current);
    document.addEventListener('fullscreenchange', handleChange);
    return () => document.removeEventListener('fullscreenchange', handleChange);
  }, []);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      wrapperRef.current?.requestFullscreen();
    }
  };

  if (!webglOk) {
    return (
      <div className={`glass-card rounded-3xl flex items-center justify-center text-center p-8 ${heightClass}`}>
        <p className="text-sm text-gray-500 font-semibold">Visualisasi 3D tidak didukung di browser ini.</p>
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className={`relative rounded-3xl overflow-hidden glass-card ${isFullscreen ? 'h-screen w-screen' : heightClass}`}
    >
      <button
        onClick={toggleFullscreen}
        className="absolute top-3 right-3 z-10 p-2 bg-black/40 hover:bg-black/60 text-white rounded-xl backdrop-blur-sm transition"
        aria-label={isFullscreen ? 'Keluar layar penuh' : 'Layar penuh'}
        title={isFullscreen ? 'Keluar layar penuh' : 'Layar penuh'}
      >
        {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
      </button>
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
