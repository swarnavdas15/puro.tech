import { useEffect, useState } from "react";

export default function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      title: "Best Digital Agency",
      desc: "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan.",
      big: "2021",
    },
    {
      id: 2,
      title: "Innovation Design",
      desc: "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan.",
      big: "2025",
    },
    {
      id: 3,
      title: "Client Satisfaction Leader",
      desc: "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan.",
      big: "2025",
    },
    {
      id: 4,
      title: "Growth Company of the Year",
      desc: "Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan.",
      big: "2025",
    },
  ];

  const [active, setActive] = useState(1);

  /* 🔁 AUTO ROTATION (NO HOVER) */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) =>
        prev === achievements.length ? 1 : prev + 1
      );
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  const activeItem = achievements.find((a) => a.id === active);

  return (
    <section className="relative w-full py-28 bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8">
            Our Achievements<span className="text-red-600">.</span>
          </h2>

          <div className="relative w-1 mt-20">
            {/* BIG YEAR */}
            <div
  className={`
    flex flex-col leading-none
    transition-all duration-500
    ${active ? "text-red-600" : "text-gray-600"}
  `}
>
  <span className="relative translate-y-[-50px] text-[220px] md:text-[180px] font-bold">
    {activeItem?.big.slice(0, 2)}
  </span>
  <span className=" relative translate-x-50 translate-y-[-60px] text-[180px] -mr-40 md:text-[200px] font-bold -mt-4">
    {activeItem?.big.slice(2)}
  </span>
</div>

            {/* DOT CLUSTER */}
            <div className="absolute right-[-230px] top-[25%] grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full bg-red-600"
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-10 mt-10">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-6 transition-all"
            >
              {/* NUMBER BOX */}
              <div
                className={`
                  w-10 h-10 flex items-center justify-center
                  text-sm font-medium
                  transition-all duration-300
                  ${
                    active === item.id
                      ? "bg-white text-black"
                      : "border border-white/30 text-white/40"
                  }
                `}
              >
                {item.id}
              </div>

              {/* TEXT */}
              <div>
                <h4
                  className={`
                    text-lg font-medium transition-all duration-300
                    ${
                      active === item.id
                        ? "text-white"
                        : "text-white/40"
                    }
                  `}
                >
                  {item.title}
                </h4>

                {active === item.id && (
                  <p className="mt-2 text-sm text-gray-400 max-w-sm">
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute -left-40 top-1/2 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />
    </section>
  );
}
