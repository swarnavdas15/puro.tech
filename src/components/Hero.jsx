import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

function Mascot3D() {
  const { scene } = useGLTF("/boy-mascot.glb");
  return <primitive object={scene} scale={2.2} position={[0, -1.2, 0]} />;
}

export default function HeroSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(media.matches);
    const handler = (e) => setIsDesktop(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-black via-[#1a0508] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Turning <span className="text-red-600">Ideas</span> Into <br />
            Digital Reality
          </h1>
          <p className="text-gray-400 max-w-xl">
            We design and develop digital experiences that are visually striking,
            technically robust, and built to scale for modern businesses.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full text-white font-semibold">
              Start a Project
            </button>
            <button className="border border-white/20 hover:border-white/40 transition px-6 py-3 rounded-full text-white">
              See Our Work
            </button>
          </div>
        </div>

        {/* Right Mascot */}
        <div className="relative w-full h-[420px] lg:h-[520px] flex items-center justify-center">
          {/* Mobile Static Image */}
          {!isDesktop && (
            <img
              src="/boy-mascot.png"
              alt="Mascot"
              className="w-72 mx-auto"
            />
          )}

          {/* Desktop 3D Mascot */}
          {isDesktop && (
            <Canvas camera={{ position: [0, 1.5, 6], fov: 45 }}>
              <ambientLight intensity={1.2} />
              <directionalLight position={[5, 5, 5]} intensity={1.5} />
              <Mascot3D />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
              />
            </Canvas>
          )}
        </div>
      </div>

      {/* Decorative blurred glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full" />
    </section>
  );
}

useGLTF.preload("/boy-mascot.glb");
