import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Mascot3D() {
  const { scene, animations } = useGLTF("/boy-mascot.glb");
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    if (!actions || names.length === 0) return;

    // Pick FIRST animation safely
    const action = actions[names[0]];
    console.log(names);

    if (!action) return;

    action.reset();
    action.setLoop(THREE.LoopRepeat);
    action.clampWhenFinished = false;
    action.fadeIn(0.5);
    action.play();

    return () => action.fadeOut(0.3);
  }, [actions, names]);

  return (
    <primitive
      object={scene}
      scale={3.9}
      position={[0, -1.7, 0]}
      rotation={[0, -1.8, 0]}
    />
  );
}

useGLTF.preload("/boy-mascot.glb");
