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
