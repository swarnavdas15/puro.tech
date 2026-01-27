import React from "react";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonalsSection";
export default function PortfolioHero() {
  return (
    <>
      <section
        className="
          relative
          w-full
          min-h-[55vh] sm:min-h-[65vh] lg:min-h-[75vh]
          bg-gradient-to-br from-black via-[#140406] to-black
          overflow-hidden
          flex items-center
        "
      >
        {/* GHOST PORTFOLIO TEXT */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="
              font-bold tracking-tight leading-none
              text-transparent
              [-webkit-text-stroke:1px_rgba(255,255,255,0.10)]
              text-[100px]
              sm:text-[170px]
              md:text-[210px]
              lg:text-[250px]
              whitespace-nowrap
            "
          >
            Portfolio
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div
          className="
            relative z-10
            max-w-7xl mx-auto
            px-6 sm:px-10 lg:px-20
            text-center lg:text-left
          "
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal text-white leading-tight">
            A Glimpse Into Our
            <br />

            {/* CREATIVE WORD */}
            <span className="relative inline-block mt-4 sm:mt-6">
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

            <span className="ml-2 sm:ml-3">World</span>
          </h1>
        </div>

        {/* DOT CLUSTER – LEFT */}
        <div
          className="
            absolute
            left-[8%] bottom-[18%]
            sm:left-[14%] sm:bottom-[24%]
            grid grid-cols-3 gap-2
          "
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="w-2 h-2 bg-red-600 rounded-full" />
          ))}
        </div>

        {/* DOT CLUSTER – RIGHT */}
        <div
          className="
            absolute
            right-[8%] top-[20%]
            sm:right-[14%] sm:top-[28%]
            grid grid-cols-3 gap-2
          "
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="w-2 h-2 bg-red-600 rounded-full" />
          ))}
        </div>

        {/* AMBIENT RED GLOW */}
        <div className="absolute -right-40 top-1/3 w-[420px] h-[420px] bg-red-600/25 blur-[160px] rounded-full" />
      </section>

      {/* PROJECTS SECTION */}
      <ProjectsSection />
      <TestimonialsSection />
    </>
  );
}
