import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "Founder, FinTech Startup",
    quote:
      "PURO Tech delivered beyond expectations. The design clarity and development speed were exceptional.",
    rating: 5,
    avatar: "/testimonials/rahul.jpg",
    link: "https://www.linkedin.com/in/rahulmehta",
  },
  {
    id: 2,
    name: "Ananya Sharma",
    role: "Product Manager, SaaS",
    quote:
      "Their team understands both business and tech. The final product was clean, scalable, and fast.",
    rating: 5,
    avatar: "/testimonials/ananya.jpg",
    link: "https://www.linkedin.com/in/ananyasharma",
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "CEO, E-Commerce Brand",
    quote:
      "From idea to execution, everything was smooth. PURO feels like an extended in-house team.",
    rating: 4,
    avatar: "/testimonials/arjun.jpg",
    link: "https://www.linkedin.com/in/arjunpatel",
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
  const speed = 0.4; // px per frame (adjust for faster/slower)

  // Duplicate testimonials for infinite loop
  const loopItems = [...testimonials, ...testimonials];

  useEffect(() => {
    let rafId;

    const animate = () => {
      if (!trackRef.current) return;

      const trackWidth = trackRef.current.scrollWidth / 2;

      setTranslateX((prev) => {
        const next = prev + speed;

        // When first set fully moves out, reset seamlessly
        if (next >= trackWidth) {
          return 0;
        }
        return next;
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-black via-[#120305] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Clients <span className="text-red-600">Say</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Trusted by founders and teams who value quality, performance, and
            long-term partnerships.
          </p>
        </div>

        {/* Infinite Slider */}
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
              <div
                key={`${item.id}-${i}`}
                className="w-full md:w-[48%] lg:w-[31%] shrink-0"
              >
                <div
                  className="
                    relative group h-full
                    rounded-2xl
                    bg-white/5 backdrop-blur-md
                    border border-white/10
                    p-8
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-red-500/40
                  "
                >
                  {/* Stars */}
                  <Stars count={item.rating} />

                  {/* Quote */}
                  <p className="mt-5 text-gray-300 leading-relaxed">
                    “{item.quote}”
                  </p>

                  {/* Footer */}
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
                        className="
                          w-12 h-12 rounded-full object-cover
                          border border-white/20
                          transition
                          group-hover/avatar:ring-2
                          ring-red-500
                        "
                      />
                    </a>

                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.role}</p>
                    </div>
                  </div>

                  {/* Glow */}
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      opacity-0 group-hover:opacity-100
                      transition duration-500
                      rounded-2xl
                      bg-gradient-to-t from-red-600/20 via-red-600/5 to-transparent
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -right-40 bottom-1/3 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />
    </section>
  );
}
