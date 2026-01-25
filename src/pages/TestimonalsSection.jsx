import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "Founder, FinTech Startup",
    quote:
      "PURO Tech delivered beyond expectations. The design clarity and development speed were exceptional.",
  },
  {
    id: 2,
    name: "Ananya Sharma",
    role: "Product Manager, SaaS",
    quote:
      "Their team understands both business and tech. The final product was clean, scalable, and fast.",
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "CEO, E-Commerce Brand",
    quote:
      "From idea to execution, everything was smooth. PURO feels like an extended in-house team.",
  },
];

export default function TestimonialsSection() {
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

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="
                relative group
                rounded-2xl
                bg-white/5 backdrop-blur-md
                border border-white/10
                p-8
                transition-all duration-500
                hover:-translate-y-2
                hover:border-red-500/40
              "
            >
              {/* Quote */}
              <p className="text-gray-300 leading-relaxed">
                “{item.quote}”
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-white/10" />

              {/* Author */}
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>

              {/* Hover Glow */}
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
          ))}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -right-40 bottom-1/3 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />
    </section>
  );
}
