import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Float } from "@react-three/drei";

useGLTF.preload("/model-draco.glb");

export default function ThreeModel({ path, mouse, ...props }) {
  const modelRef = useRef();
  const { scene } = useGLTF(path, true);

  useFrame((state) => {
    if (modelRef.current) {
      const t = state.clock.getElapsedTime();

      const baseY = props.position?.[1] || 0;

      // floating animation
      modelRef.current.position.y = baseY + Math.sin(t * 1) * 0.2;
      modelRef.current.rotation.x = Math.sin(t * 1.5) * 0.02;
      modelRef.current.rotation.z = Math.cos(t * 1.5) * 0.02;

      // ✨ mouse-follow
      if (mouse) {
        const targetX = mouse.y * 0.1; // subtle tilt on X
        const targetY = mouse.x * 0.2; // subtle turn on Y
        // lerp for smoothness
        modelRef.current.rotation.x +=
          (targetX - modelRef.current.rotation.x) * 0.05;
        modelRef.current.rotation.y +=
          (targetY - modelRef.current.rotation.y) * 0.05;
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <primitive object={scene} ref={modelRef} {...props} />
    </Float>
  );
}
