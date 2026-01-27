import React from "react";

export default function JourneySection() {
  const steps = [
    {
      id: "1",
      title: "Discover",
      desc: "We identified gaps where businesses had technology but lacked clarity and direction.",
      position: "left",
    },
    {
      id: "2",
      title: "Design",
      desc: "We started shaping digital solutions focused on structure, usability, and trust.",
      position: "right",
    },
    {
      id: "3",
      title: "Build",
      desc: "We developed scalable systems with strong foundations in performance and security.",
      position: "left",
    },
    {
      id: "4",
      title: "Evolve",
      desc: "We integrated AI, automation, and consultancy to support long-term growth.",
      position: "right",
    },


  ];

  return (
    <section className="relative w-full py-28 bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Header */}
        <div className="max-w-2xl mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Our Journey<span className="text-red-600">.</span>
          </h2>
          <p className="mt-6 text-gray-400 leading-relaxed">
            We identified gaps where businesses had technology but lacked clarity,
and evolved to build secure, scalable digital systems with intelligence and purpose.
          </p>
        </div>

        {/* ================= MOBILE TIMELINE ================= */}
        <div className="relative lg:hidden mt-16">

          {/* Vertical line (FIXED) */}
          <div className="absolute left-4 inset-y-0 w-px bg-red-600/40" />

          <div className="space-y-14 pl-12">
            {steps.map((step) => (
              <div key={step.id} className="relative">

                {/* Dot */}
                <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-red-600 shadow-[0_0_18px_rgba(239,68,68,0.6)]" />

                {/* Content */}
                <div>
                  <span className="text-red-600 font-semibold text-sm">
                    {step.id}
                  </span>
                  <h4 className="mt-1 text-white text-lg font-semibold">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="relative hidden lg:block">

          {/* SVG dashed path (UNCHANGED, only height fixed) */}
          <svg
            className="absolute left-1/2 top-[20px] -translate-x-1/2 pointer-events-none"
            width="1500"
            height="660"
            viewBox="0 0 1100 560"
            fill="none"
          >
            <path
              d="
      M 42 0
      C 1690 40, 20 600, 300 220
      C 40 30, 720 300, 520 300
      C -509 330, 320 420, 783 550
      C 620 500, 1000 560, 1100 300
    "
              stroke="#ef4444"
              strokeWidth="1.5"
              strokeDasharray="6 10"
              opacity="0.55"
            />
          </svg>

          {/* Desktop Steps */}
          <div className="relative space-y-32">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`relative flex w-full ${step.position === "right"
                  ? "justify-end"
                  : "justify-start"
                  }`}
              >
                <div className="max-w-sm">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-red-600 text-red-600 font-semibold">
                      {step.id}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute -right-40 top-1/3 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />
    </section>
  );
}
