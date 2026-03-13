import { useEffect, useRef, useState } from "react";

function RevealOnScroll({
  children,
  className,
  delay = "0s",
  threshold = 0.25,
  tag = "div",
}) {
  const Component = tag;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, threshold]);

  return (
    <Component
      ref={ref}
      className={`${className} ${isVisible ? "is-visible" : ""}`}
      style={{ "--journey-delay": delay }}
    >
      {children}
    </Component>
  );
}

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
        <div className="max-w-2xl mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Our Journey<span className="text-red-600">.</span>
          </h2>
          <p className="mt-6 text-gray-400 leading-relaxed">
            We identified gaps where businesses had technology but lacked clarity,
            and evolved to build secure, scalable digital systems with intelligence
            and purpose.
          </p>
        </div>

        <div className="relative lg:hidden mt-16">
          <div className="absolute left-4 inset-y-0 w-px bg-red-600/40" />
          <div className="journey-mobile-line absolute left-4 top-0 h-24 w-px" />

          <div className="space-y-14 pl-12">
            {steps.map((step, index) => (
              <RevealOnScroll
                key={step.id}
                className="journey-mobile-card relative"
                delay={`${index * 0.14}s`}
                threshold={0.2}
              >
                <div className="journey-mobile-dot absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-red-600 shadow-[0_0_18px_rgba(239,68,68,0.6)]" />

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
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute left-1/2 top-3 bottom-3 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-red-500/50 to-transparent" />
          <div className="absolute left-1/2 top-10 bottom-10 -translate-x-1/2 w-px border-l border-dashed border-red-500/35" />
          <div className="journey-line-glow absolute left-1/2 top-12 h-28 w-[3px] -translate-x-1/2 rounded-full" />

          <div className="relative space-y-14">
            {steps.map((step, index) => {
              const isRight = step.position === "right";

              return (
                <div
                  key={step.id}
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-10"
                >
                  <div className={isRight ? "" : "flex justify-end"}>
                    {!isRight ? (
                      <RevealOnScroll
                        tag="article"
                        className="journey-card w-full max-w-md rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-xl px-7 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
                        delay={`${index * 0.16}s`}
                      >
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
                          Step {step.id}
                        </span>
                        <h4 className="mt-3 text-2xl font-semibold text-white">
                          {step.title}
                        </h4>
                        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </RevealOnScroll>
                    ) : null}
                  </div>

                  <div className="relative flex items-center justify-center">
                    <div className="journey-marker-glow absolute h-16 w-16 rounded-full bg-red-500/15 blur-2xl" />
                    <div className="journey-marker relative flex h-14 w-14 items-center justify-center rounded-full border border-red-500/50 bg-[#160507] text-base font-semibold text-white shadow-[0_0_24px_rgba(239,68,68,0.25)]">
                      {step.id}
                    </div>
                  </div>

                  <div className={isRight ? "flex justify-start" : ""}>
                    {isRight ? (
                      <RevealOnScroll
                        tag="article"
                        className="journey-card w-full max-w-md rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-xl px-7 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
                        delay={`${index * 0.16}s`}
                      >
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
                          Step {step.id}
                        </span>
                        <h4 className="mt-3 text-2xl font-semibold text-white">
                          {step.title}
                        </h4>
                        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </RevealOnScroll>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute -right-40 top-1/3 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />

      <style>
        {`
          @keyframes journeyReveal {
            0% {
              opacity: 0;
              transform: translateY(24px) scale(0.97);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes journeyMarkerPulse {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.12);
              transform: scale(1);
            }
            50% {
              box-shadow:
                0 0 0 10px rgba(239, 68, 68, 0.06),
                0 0 30px rgba(239, 68, 68, 0.22);
              transform: scale(1.05);
            }
          }

          @keyframes journeyLineTravel {
            0% {
              transform: translate(-50%, 0);
              opacity: 0;
            }
            15% {
              opacity: 1;
            }
            85% {
              opacity: 1;
            }
            100% {
              transform: translate(-50%, 430px);
              opacity: 0;
            }
          }

          @keyframes journeyMobileTravel {
            0% {
              transform: translateY(0);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            100% {
              transform: translateY(320px);
              opacity: 0;
            }
          }

          .journey-card,
          .journey-mobile-card {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
          }

          .journey-card.is-visible,
          .journey-mobile-card.is-visible {
            animation: journeyReveal 0.8s ease-out forwards;
            animation-delay: var(--journey-delay, 0s);
          }

          .journey-card:hover {
            border-color: rgba(239, 68, 68, 0.32);
            box-shadow:
              0 20px 48px rgba(0, 0, 0, 0.28),
              0 0 26px rgba(239, 68, 68, 0.08);
            transition: box-shadow 0.35s ease, border-color 0.35s ease;
          }

          .journey-marker,
          .journey-mobile-dot {
            animation: journeyMarkerPulse 2.8s ease-in-out infinite;
          }

          .journey-marker-glow {
            animation: journeyMarkerPulse 2.8s ease-in-out infinite;
          }

          .journey-line-glow {
            background: linear-gradient(
              to bottom,
              rgba(239, 68, 68, 0),
              rgba(239, 68, 68, 0.8),
              rgba(255, 255, 255, 0.35),
              rgba(239, 68, 68, 0)
            );
            filter: blur(1px);
            animation: journeyLineTravel 5.5s linear infinite;
          }

          .journey-mobile-line {
            background: linear-gradient(
              to bottom,
              rgba(239, 68, 68, 0),
              rgba(239, 68, 68, 0.85),
              rgba(255, 255, 255, 0.3),
              rgba(239, 68, 68, 0)
            );
            animation: journeyMobileTravel 4.6s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
