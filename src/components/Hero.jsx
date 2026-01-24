import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Mascot3D from "./Mascot3D";

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-black via-[#1a0508] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT CONTENT */}
        <div className="space-y-7">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Turning <span className="text-red-600">Ideas</span> Into <br />
            Digital Reality
          </h1>

          <p className="text-gray-400 max-w-xl text-lg">
            We design and develop digital experiences that are visually striking,
            technically robust, and engineered to scale for modern businesses.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 transition px-7 py-3 rounded-full text-white font-semibold">
              Start a Project
            </button>
            <button className="border border-white/20 hover:border-white/40 transition px-7 py-3 rounded-full text-white">
              See Our Work
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL CONTENT */}
        <div className="relative w-full h-[420px] lg:h-[520px] flex items-center justify-center">
          {/* Mobile Static Mascot */}
          {!isDesktop && (
            <img
              src="/boy-mascot.png"
              alt="Mascot"
              className="w-72 md:w-80"
            />
          )}

          {/* Desktop 3D Mascot */}
          {isDesktop && (
            <Canvas camera={{ position: [0, 1.5, 6], fov: 45 }}>
              <ambientLight intensity={1.1} />
              <directionalLight position={[5, 5, 5]} intensity={1.4} />
              <Mascot3D />
            </Canvas>
          )}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full" />
    </section>
  );
}
