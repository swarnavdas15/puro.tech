import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "Educator",
    quote:
      "PURO TECH delivered beyond expectations. The design clarity and development speed were exceptional.",
    rating: 5,
    avatar: "/testimonials/rahul.webp",
    link: "#",
  },
  {
    id: 2,
    name: "Ananya Sharma",
    role: "Cafe Owner and Entrepreneur",
    quote:
      "Their team understands both business and tech. The final product was clean, scalable, and fast.",
    rating: 5,
    avatar: "/testimonials/ananya.webp",
    link: "#",
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "Startup Founder",
    quote:
      "From idea to execution, everything was smooth. PURO TECH felt like an extended in-house team.",
    rating: 4,
    avatar: "/testimonials/arjun.webp",
    link: "#",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "#ef4444" : "none"}
          stroke="#ef4444"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const speed = 0.4;
  const loopItems = [...testimonials, ...testimonials];

  useEffect(() => {
    let rafId;

    const animate = () => {
      if (!trackRef.current) {
        return;
      }

      const trackWidth = trackRef.current.scrollWidth / 2;
      setTranslateX((prev) => {
        const next = prev + speed;
        return next >= trackWidth ? 0 : next;
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-black via-[#120305] to-black overflow-hidden">
      <div className="max-w-[90%] mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Client results in <span className="text-red-600">web development and AI automation</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Trusted by founders and teams who value performance, delivery
            clarity, and digital solutions that support long-term growth.
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-8"
            style={{
              transform: `translateX(-${translateX}px)`,
              willChange: "transform",
            }}
          >
            {loopItems.map((item, i) => (
              <div key={`${item.id}-${i}`} className="w-full md:w-[48%] lg:w-[31%] shrink-0">
                <div
                  className="
                    relative group h-full rounded-2xl bg-white/5 backdrop-blur-md
                    border border-white/10 p-8 transition-all duration-500
                    hover:-translate-y-2 hover:border-red-500/40
                  "
                >
                  <Stars count={item.rating} />

                  <p className="mt-5 text-gray-300 leading-relaxed">
                    "{item.quote}"
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/avatar"
                    >
                      <img
                        src={item.avatar}
                        alt={item.name}
                        width="96"
                        height="96"
                        loading="lazy"
                        decoding="async"
                        className="
                          w-12 h-12 rounded-full object-cover border border-white/20
                          transition group-hover/avatar:ring-2 ring-red-500
                        "
                      />
                    </a>

                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.role}</p>
                    </div>
                  </div>

                  <div
                    className="
                      pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                      transition duration-500 rounded-2xl
                      bg-gradient-to-t from-red-600/20 via-red-600/5 to-transparent
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -right-40 bottom-1/3 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />
    </section>
  );
}
