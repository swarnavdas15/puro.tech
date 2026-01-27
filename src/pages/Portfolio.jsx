import React from "react";
import ProjectsSection from "../components/ProjectsSection";

export default function PortfolioHero() {
  return (
    <>
      <section className="relative w-full min-h-[40vh] md:min-h-[88vh] bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">

        {/* GHOST PORTFOLIO TEXT (desktop only) */}
        {/* GHOST PORTFOLIO TEXT */}
<div className="absolute inset-0 pointer-events-none select-none">
  <span
    className="
      absolute
      top-[20%]

      /* Mobile */
      left-1/2 -translate-x-1/2
      text-[107px]

      /* Tablet */
      sm:text-[180px]

      /* Desktop */
      md:left-[190px] md:translate-x-0
      md:text-[240px] lg:text-[320px]

      font-semibold tracking-tight
      text-transparent
      [-webkit-text-stroke:1px_rgba(255,255,255,0.10)]
      whitespace-nowrap
    "
  >
    Portfolio
  </span>
</div>

        {/* MAIN CONTENT */}
        <div className="
          relative
          max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-96
          pt-28 sm:pt-40
          text-center lg:text-left
        ">

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-normal text-white leading-tight">
            A Glimpse Into Our
            <br />

            {/* CREATIVE WORD */}
            <span className="relative inline-block mt-6 sm:mt-8">
              <span className="text-red-600 font-medium">Creative</span>

              {/* RED OUTLINE BOX */}
              <span
                className="
                  absolute inset-0
                  border border-red-600/70
                  rounded-sm
                  translate-x-2 translate-y-2
                "
              />
            </span>

            <span className="ml-3">World</span>
          </h1>

          {/* DOT CLUSTER – RIGHT (desktop only) */}
          <div className="absolute right-[120px] top-[38%] hidden lg:grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="w-2.5 h-2.5 rounded-full bg-red-600" />
            ))}
          </div>

          {/* DOT CLUSTER – LEFT (desktop only) */}
          <div className="absolute left-[260px] top-[100%] hidden lg:grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="w-2.5 h-2.5 rounded-full bg-red-600" />
            ))}
          </div>

        </div>

        {/* AMBIENT RED GLOW */}
        <div className="absolute -right-40 top-1/3 w-[420px] h-[420px] bg-red-600/25 blur-[160px] rounded-full" />
      </section>

      {/* PROJECTS */}
      <ProjectsSection />
    </>
  );
}
