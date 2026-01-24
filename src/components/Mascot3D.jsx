import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Mascot3D() {
  const { scene } = useGLTF("/boy-mascot.glb");
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.getElapsedTime();

    // Presentation-style gentle turn (like showing something)
    ref.current.rotation.y = Math.sin(t * 0.6) * 0.12;

    // Slight lean-in (professional greeting feel)
    ref.current.rotation.x = Math.sin(t * 0.4) * 0.03;
  });

  return (
    <group
      ref={ref}
      position={[0, -1.2, 0]}
      rotation={[0, 0, 0]}
      scale={2.2}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/boy-mascot.glb");
