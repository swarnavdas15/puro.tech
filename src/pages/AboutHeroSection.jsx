import React from "react";
import OurDreamSection from "../components/OurDreamSection";
import AchievementsSection from "../components/AchievementSection";
import TestimonialsSection from "../components/TestimonalsSection";

export default function AboutHeroSection() {
  return (
    <>
      <section className="
        relative
        w-full
        min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]
        flex items-center justify-center
        bg-gradient-to-br from-black via-[#140406] to-black
        overflow-hidden
      ">

        {/* BIG OUTLINE TEXT (RESPONSIVE GHOST) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="
              font-bold tracking-tight
              text-white/10
              leading-none
              text-[120px]
              sm:text-[180px]
              md:text-[220px]
              lg:text-[260px]
            "
          >
            About
          </span>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6">
          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-light
            text-white
          ">
            The People Behind
          </h1>

          <h2 className="
            mt-2 sm:mt-3
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-semibold
          ">
            <span className="text-white">The </span>
            <span className="text-red-600">Pixels</span>
          </h2>
        </div>

        {/* DOT CLUSTERS (RESPONSIVE POSITIONS) */}
        <div className="
          absolute
          left-[8%]
          bottom-[18%]
          sm:left-[14%]
          sm:bottom-[22%]
          grid grid-cols-3 gap-2
        ">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="w-2 h-2 bg-red-600 rounded-full" />
          ))}
        </div>

        <div className="
          absolute
          right-[8%]
          top-[18%]
          sm:right-[14%]
          sm:top-[26%]
          grid grid-cols-3 gap-2
        ">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="w-2 h-2 bg-red-600 rounded-full" />
          ))}
        </div>
      </section>

      {/* OUR DREAM SECTION */}
      <div>
        <OurDreamSection />
        <AchievementsSection />
        <TestimonialsSection />
      </div>
    </>
  );
}
