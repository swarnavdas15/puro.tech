import React from "react";
import OurDreamSection from "../components/OurDreamSection";

export default function AboutHeroSection() {
  return (
    <>
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">

      {/* BIG OUTLINE TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[260px] font-bold tracking-tight text-white/10 stroke-text">
          About
        </span>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-light text-white">
          The People Behind
        </h1>

        <h2 className="mt-3 text-4xl md:text-6xl font-semibold">
          <span className="text-white">The </span>
          <span className="text-red-600">Pixels</span>
        </h2>
      </div>

      {/* DOT CLUSTERS */}
      <div className="absolute left-[18%] bottom-[22%] grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="w-2 h-2 bg-red-600 rounded-full" />
        ))}
      </div>

      <div className="absolute right-[18%] top-[28%] grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="w-2 h-2 bg-red-600 rounded-full" />
        ))}
      </div>
    </section>
    <div>
    <OurDreamSection />
    </div>
    </>
  );
}
