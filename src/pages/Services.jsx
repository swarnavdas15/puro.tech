import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CreativeDesign from "../components/CreativeDesign.jsx";
import FeaturedProjects from "../components/FeaturedProjects.jsx";
import TestimonialsSection from "../components/TestimonalsSection.jsx";
export default function Services() {
  
  const location = useLocation();

   useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  }, [location]);

  return (
    <>
    <main className="relative w-full min-h-screen bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">

      {/* HERO */}
      <section className="
        relative
        max-w-7xl mx-auto
        px-6
        pt-30 sm:pt-36
        pb-5 sm:pb-24
         min-h-[55vh] sm:min-h-[65vh] lg:min-h-[55vh]
        text-center
        overflow-hidden
      ">

        {/* GHOST TEXT */}
        <h1
          className="
            absolute inset-0
            flex items-center justify-center
            top-12
            text-[110px] sm:text-[140px] md:text-[220px]
            font-bold
            tracking-tight
            text-transparent
            [-webkit-text-stroke:1px_rgba(255,255,255,0.08)]
            pointer-events-none
            select-none
          "
        >
          Services
        </h1>

        {/* MAIN HEADING */}
        <h2 className="
          relative z-10 top-20
          text-3xl sm:text-4xl md:text-5xl
          text-white font-medium leading-tight
        ">
          Turning Your{" "}
          <span className="text-red-600">Vision</span> Into Reality
        </h2>

        <div className="
          absolute
          left-[8%]
          bottom-[14%]
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
          top-[35%]
          sm:right-[14%]
          sm:top-[26%]
          grid grid-cols-3 gap-2
        ">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="w-2 h-2 bg-red-600 rounded-full" />
          ))}
        </div>
      </section>

      {/* CREATIVE DESIGN */}
      <section className="max-w-7xl mx-auto px-6 pb-28 sm:pb-32">
        <CreativeDesign />
      </section>

      {/* AMBIENT GLOW */}
      <div className="absolute -right-40 top-1/3 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />
    </main>
        <FeaturedProjects id='Featured' />
        <TestimonialsSection />
    </>
  );
}
