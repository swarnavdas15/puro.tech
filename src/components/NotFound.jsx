import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  const message =
    "Looks like you’ve reached a dead end.\nDon’t worry — we’ll guide you back.";

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= message.length) return;
    const t = setTimeout(() => {
      setText((prev) => prev + message[index]);
      setIndex((prev) => prev + 1);
    }, 40);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden flex items-center">

      {/* Background 404 */}
      <div className="absolute  inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[200px] relative top-[-30%] md:text-[320px] font-bold text-white/5 tracking-tight">
          404
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-10">

          <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
            Page Not Found<span className="text-red-600">.</span>
          </h1>

          {/* Message Card */}
          <div className="
            relative
            max-w-md
            bg-white/5
            backdrop-blur-xl
            border border-white/15
            rounded-2xl
            px-8 py-6
          ">
            {/* Accent */}
            <span className="absolute left-0 top-6 bottom-6 w-1 bg-red-600 rounded-full" />

            <p className="pl-4 text-gray-200 whitespace-pre-line leading-relaxed">
              {text}
            </p>
          </div>

          {/* CTA */}
          <div className="flex gap-4 pt-4">
            <Link
              to="/"
              className="
                px-8 py-3
                rounded-full
                bg-gradient-to-br from-red-500 to-red-700
                text-white font-medium
                hover:scale-105
                transition
              "
            >
              Back to Home
            </Link>

            <Link
              to="/contact"
              className="
                px-8 py-3
                rounded-full
                border border-white/30
                text-white/80
                hover:border-white/60
                hover:text-white
                transition
              "
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT MASCOT */}
        <div className="flex justify-center lg:justify-end relative">
          <img
            src="/girl-mascot.png"
            alt="Mascot"
            draggable={false}
            className="
              w-64 sm:w-72 md:w-80
              drop-shadow-[0_50px_100px_rgba(0,0,0,0.8)]
              select-none
            "
          />

          {/* Mascot subtle glow */}
          <div className="absolute inset-0 -z-10 bg-red-600/20 blur-[120px] rounded-full" />
        </div>
      </div>
    </section>
  );
}
