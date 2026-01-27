export default function ContactHero() {
  return (
    <section className="
      relative
      min-h-[40vh] md:min-h-[70vh]
      overflow-hidden
      bg-gradient-to-br from-black via-[#140406] to-black
      flex items-center justify-center
    ">

      {/* GHOST / OUTLINE TEXT */}
      <span
        className="
          absolute
          left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          text-[110px] sm:text-[160px] md:text-[240px]
          font-bold
          tracking-tight
          text-transparent
          [-webkit-text-stroke:1px_rgba(255,255,255,0.08)]
          whitespace-nowrap
          pointer-events-none
          select-none
        "
      >
        Contact
      </span>

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


      {/* MAIN HEADING */}
      <h1 className="
        relative z-10
        text-4xl sm:text-5xl md:text-6xl
        text-white font-medium text-center
      ">
        Reach Out Let’s{" "}
        <span className="text-red-600">
          Collaborate
        </span>
      </h1>

    </section>
  );
}
