import React from "react";
import CreativeDesign from "../components/CreativeDesign.jsx";


export default function Services() {
  return (
    <main id="services" className="relative w-full min-h-screen bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-40 pb-24 text-center">
        {/* Background text */}
        <h1 className="absolute inset-0 flex items-center justify-center text-[120px] md:text-[220px] font-bold text-white/5 pointer-events-none">
          Services
        </h1>

        {/* Main heading */}
        <h2 className="relative text-4xl md:text-5xl text-white font-medium leading-tight">
          Turning Your{" "}
          <span className="text-red-600">Vision</span> Into Reality
        </h2>

        {/* Dot clusters */}
        <div className="absolute left-[15%] top-[35%] grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="w-2 h-2 bg-red-600 rounded-full" />
          ))}
        </div>

        <div className="absolute right-[20%] top-[25%] grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="w-2 h-2 bg-red-600 rounded-full" />
          ))}
        </div>
      </section>

      {/* CREATIVE DESIGN SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <CreativeDesign />
      </section>

      {/* Ambient Glow */}
      <div className="absolute -right-40 top-1/3 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />
    </main>
  );
}
