import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Mascot3D() {
  const { scene } = useGLTF("/boy-mascot.glb");
  const group = useRef();

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    // Gentle torso turn (presentation feel)
    group.current.rotation.y = Math.sin(t * 0.6) * 0.15;

    // VERY subtle settle motion (not nod, not float)
    group.current.position.y = -1.2 + Math.sin(t * 0.8) * 0.02;
  });

  return (
    <group
      ref={group}
      position={[0, -1.2, 0]}
      rotation={[0, 0, 0]}
      scale={2.2}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/boy-mascot.glb");
