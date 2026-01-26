export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-black via-[#140406] to-black flex items-center justify-center">

      <h1 className="text-5xl md:text-6xl text-white font-medium text-center relative">
        Reach Out Let’s{" "}
        <span className="text-red-600 relative z-10">
          Collaborate
        </span>
      </h1>

      {/* Background Outline */}
      <span className="absolute text-[200px] text-white/5 font-bold">
        Contact
      </span>
    </section>
  );
}
