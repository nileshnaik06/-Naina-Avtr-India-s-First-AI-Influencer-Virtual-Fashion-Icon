import { useEffect, useState, lazy, Suspense } from "react";
import ShimmerLoader from "./ShimmerLoader";

// Lazy load Three.js-related modules
const Canvas = lazy(() =>
  import("@react-three/fiber").then((mod) => ({ default: mod.Canvas }))
);
const OrbitControls = lazy(() =>
  import("@react-three/drei").then((mod) => ({ default: mod.OrbitControls }))
);
const Preload = lazy(() =>
  import("@react-three/drei").then((mod) => ({ default: mod.Preload }))
);
const Model = lazy(() => import("../components/ThreeModel"));

const ModelCanvas = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 450);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 450);
    window.addEventListener("resize", updateSize);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  return (
    <Suspense fallback={<ShimmerLoader />}>
      <Canvas
        camera={{ position: [0, -0.6, 6], fov: 50 }}
        shadows
        dpr={[1, 1.5]}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.6} color="#f9f9f9" />
        <directionalLight
          castShadow
          position={[-5, 10, 5]}
          intensity={0.7}
          color="#0090ff"
        />
        <directionalLight
          castShadow
          position={[5, 10, 7]}
          intensity={0.4}
          color="#ff00a2"
        />
        <pointLight position={[0, 2, 8]} intensity={0.7} color="#ffffff" />

        <Suspense fallback={null}>
          <Model
            path="/Assets/3D/Model/base_basic_pbr.glb"
            position={isMobile ? [0, -2, 0] : [0, -1.5, 0]}
            scale={isMobile ? 2.2 : 1.8}
            mouse={mouse}
          />
        </Suspense>

        {!isMobile && (
          <Suspense fallback={null}>
            <OrbitControls
              enableDamping
              dampingFactor={0.1}
              enableZoom={false}
            />
          </Suspense>
        )}

        <Suspense fallback={null}>
          <Preload all />
        </Suspense>
      </Canvas>
    </Suspense>
  );
};

export default ModelCanvas;
