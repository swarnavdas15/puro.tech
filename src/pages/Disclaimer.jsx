export default function Disclaimer() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#140406] to-black py-28">
      <div className="max-w-4xl mx-auto px-6 text-white">

        <h1 className="text-4xl md:text-5xl font-semibold mb-10">
          Legal <span className="text-red-600">Disclaimer</span>
        </h1>

        <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
          <p>
            All information on this website is published in good faith and for
            general informational purposes only.
          </p>

          <p>
            PURO TECH does not make warranties about the completeness,
            reliability, or accuracy of this information.
          </p>

          <p>
            Any action you take upon the information found on this website is
            strictly at your own risk.
          </p>
        </div>
      </div>
    </section>
  );
}
