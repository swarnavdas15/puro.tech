import { useEffect, useState } from "react";

const achievements = [
  {
    id: 1,
    title: "Web and Digital Solutions",
    desc: "Designing and developing secure, scalable websites and digital platforms focused on clarity, performance, and trust.",
    big: "2023",
  },
  {
    id: 2,
    title: "AI and Automation",
    desc: "Implementing practical AI automation that simplifies workflows, reduces manual effort, and improves efficiency.",
    big: "2024",
  },
  {
    id: 3,
    title: "Tech Consultancy",
    desc: "Helping businesses make the right technology decisions with clear guidance, audits, and solution planning.",
    big: "2024",
  },
  {
    id: 4,
    title: "Security and Reliability",
    desc: "Building digital systems with essential security practices to ensure stability, safety, and long-term reliability.",
    big: "2025",
  },
];

export default function AchievementsSection() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === achievements.length ? 1 : prev + 1));
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  const activeItem = achievements.find((item) => item.id === active);

  return (
    <section className="relative w-full md:h-[95vh] py-24 lg:py-28 bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        <div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-8 lg:translate-y-[-40px]">
            Our Achievements<span className="text-red-600">.</span>
          </h2>

          <div className="relative mt-12 lg:mt-20">
            <div className="flex flex-col leading-none text-red-600">
              <span className="text-[96px] sm:text-[120px] lg:text-[200px] text-gray-400 font-bold lg:translate-y-[-100px]">
                {activeItem?.big.slice(0, 2)}
              </span>

              <span className="text-[120px] sm:text-[150px] lg:text-[215px] font-bold -mt-4 lg:translate-x-60 lg:translate-y-[-130px]">
                {activeItem?.big.slice(2)}
              </span>
            </div>

            <div className="absolute right-0 top-1/2 translate-y-[-50%] lg:right-[50%] lg:top-[15%] grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="w-2 h-2 rounded-full bg-red-600" />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:space-y-10 mt-10">
          {achievements.map((item) => (
            <div key={item.id} className="flex items-start gap-5 lg:gap-6 transition-all">
              <div
                className={`
                  w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center text-sm font-medium
                  transition-all duration-300
                  ${active === item.id ? "bg-white text-black" : "border border-white/30 text-white/40"}
                `}
              >
                {item.id}
              </div>

              <div>
                <h3
                  className={`
                    text-base lg:text-lg font-medium transition-all duration-300
                    ${active === item.id ? "text-white" : "text-white/40"}
                  `}
                >
                  {item.title}
                </h3>

                {active === item.id ? (
                  <p className="mt-2 text-sm text-gray-400 max-w-sm">{item.desc}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -left-40 top-1/2 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />
    </section>
  );
}
