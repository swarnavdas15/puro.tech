import React from "react";
import { Code2 } from "lucide-react";

export default function OurDreamSection() {
  const cards = [
    {
      id: 1,
      title: "Best Digital Agency",
      desc:
        "Pizza ipsum dolor meat lovers buffalo. Sauce string red tomatoes tossed. Aussie fresh and lasagna and roll tomatoes banana meatball thin. Pan chicken black burnt pizza. Pesto banana bell pan ricotta sautéed. Pineapple party party onions rib.",
    },
    {
      id: 2,
      title: "Best Digital Agency",
      desc:
        "Pizza ipsum dolor meat lovers buffalo. Sauce string red tomatoes tossed. Aussie fresh and lasagna and roll tomatoes banana meatball thin. Pan chicken black burnt pizza. Pesto banana bell pan ricotta sautéed. Pineapple party party onions rib.",
    },
    {
      id: 3,
      title: "Best Digital Agency",
      desc:
        "Pizza ipsum dolor meat lovers buffalo. Sauce string red tomatoes tossed. Aussie fresh and lasagna and roll tomatoes banana meatball thin. Pan chicken black burnt pizza. Pesto banana bell pan ricotta sautéed. Pineapple party party onions rib.",
    },
    {
      id: 4,
      title: "Best Digital Agency",
      desc:
        "Pizza ipsum dolor meat lovers buffalo. Sauce string red tomatoes tossed. Aussie fresh and lasagna and roll tomatoes banana meatball thin. Pan chicken black burnt pizza. Pesto banana bell pan ricotta sautéed. Pineapple party party onions rib.",
    },
    {
      id: 5,
      title: "Best Digital Agency",
      desc:
        "Pizza ipsum dolor meat lovers buffalo. Sauce string red tomatoes tossed. Aussie fresh and lasagna and roll tomatoes banana meatball thin. Pan chicken black burnt pizza. Pesto banana bell pan ricotta sautéed. Pineapple party party onions rib.",
    },
    {
      id: 6,
      title: "Best Digital Agency",
      desc:
        "Pizza ipsum dolor meat lovers buffalo. Sauce string red tomatoes tossed. Aussie fresh and lasagna and roll tomatoes banana meatball thin. Pan chicken black burnt pizza. Pesto banana bell pan ricotta sautéed. Pineapple party party onions rib.",
    },
  ];

  return (
    <section className="relative w-full py-28 bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Our Dream to Reality<span className="text-red-600">.</span>
          </h2>

          <p className="max-w-xl text-gray-400 leading-relaxed">
            Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
            ricotta garlic dolor sauce marinara Chicago marinara.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                group relative rounded-3xl p-8
                bg-white/5 backdrop-blur-xl
                border border-white/15
                transition-all duration-500
                hover:border-red-600/40
                hover:bg-white/10
              "
            >
              {/* ICON */}
              <div
                className="
                  w-12 h-12 mb-6 rounded-xl
                  bg-white/10 flex items-center justify-center
                  transition-colors duration-300
                  group-hover:bg-red-600
                "
              >
                <Code2 className="w-6 h-6 text-white" />
              </div>

              {/* TITLE */}
              <h4 className="text-lg font-semibold text-white mb-3">
                {card.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {card.desc}
              </p>

              {/* HOVER GLOW */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br from-red-600/20 via-transparent to-transparent
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* AMBIENT GLOW */}
      <div className="absolute -right-40 top-1/2 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />
    </section>
  );
}
