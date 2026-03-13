import { useState } from "react";
import { faqItems } from "../data/faqItems";

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative w-full py-28 bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Honest answers about our web development, AI automation, software
            solutions, and tech consultancy process.
          </p>
        </div>

        <div className="space-y-5">
          {faqItems.map((item, i) => {
            const active = open === i;

            return (
              <div
                key={item.q}
                className={`
                  relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
                  transition-all duration-300 ${active ? "border-red-500/40" : ""}
                `}
              >
                <div
                  className={`
                    absolute left-0 top-0 h-full w-[3px] bg-red-600 transition-opacity duration-300
                    ${active ? "opacity-100" : "opacity-0"}
                  `}
                />

                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full px-7 py-6 flex items-start justify-between gap-6 text-left"
                >
                  <span className="text-white font-medium leading-snug">
                    {item.q}
                  </span>

                  <span
                    className={`
                      text-red-600 text-xl transition-opacity
                      ${active ? "opacity-100" : "opacity-60"}
                    `}
                  >
                    {active ? "-" : "+"}
                  </span>
                </button>

                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                  `}
                >
                  <div className="overflow-hidden px-7 pb-7 text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute -right-40 bottom-0 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />
    </section>
  );
}
