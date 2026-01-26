import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CtaSection() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email) return;
    navigate(`/contact?email=${encodeURIComponent(email)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section className="relative w-full py-28 bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Glass Container */}
        <div
          className="
            relative
            grid grid-cols-1 lg:grid-cols-2
            items-center
            gap-16
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            px-8 py-14 md:px-14
          "
        >

          {/* LEFT CONTENT */}
          <div className="space-y-10">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
              Let’s Build <br />
              Something{" "}
              <span className="text-red-600">Amazing</span>
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-lg">
              Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
              ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor
              pesto pesto Bianca pesto roll onions.
            </p>

            {/* Input */}
            <div className="relative max-w-md">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                className="
                  w-full
                  bg-white/5
                  border border-white/15
                  rounded-full
                  px-6 py-4
                  pr-20
                  text-white
                  placeholder:text-white/40
                  outline-none
                  focus:border-red-500/60
                  transition
                "
              />

              <button
                onClick={handleSubmit}
                className="
                  absolute top-1/2 right-1.5
                  -translate-y-1/2
                  w-12 h-12
                  rounded-full
                  bg-gradient-to-br from-red-500 to-red-700
                  flex items-center justify-center
                  text-white
                  shadow-[0_0_0_4px_rgba(239,68,68,0.15)]
                  hover:shadow-[0_0_0_6px_rgba(239,68,68,0.25)]
                  hover:scale-105
                  active:scale-95
                  transition-all duration-300
                "
                aria-label="Submit"
              >
                →
              </button>
            </div>
          </div>

          {/* RIGHT MASCOT */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/girl-mascot.png"
              alt="Mascot"
              className="
                w-56 sm:w-64 md:w-72
                drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]
                select-none
              "
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute -right-32 -top-32 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />
    </section>
  );
}
