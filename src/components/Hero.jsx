import { useEffect, useState } from "react";
import Mascot3D from "./Mascot3D";

export default function Hero() {
  const fullText =
    "Hey, I’m Roni 👋\nI help turn ideas into powerful digital products.";

  const [showBubble, setShowBubble] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  // Delay before bubble appears
  useEffect(() => {
    const delay = setTimeout(() => setShowBubble(true), 800);
    return () => clearTimeout(delay);
  }, []);

  // Typing animation
  useEffect(() => {
    if (!showBubble) return;
    if (index >= fullText.length) return;

    const typing = setTimeout(() => {
      setTypedText((prev) => prev + fullText[index]);
      setIndex((prev) => prev + 1);
    }, 35);

    return () => clearTimeout(typing);
  }, [index, showBubble]);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-black via-[#1a0508] to-black overflow-hidden">
      
      <div className="absolute inset-0 flex items-center justify-end pr-24 pointer-events-none select-none">
        <span className="text-[180px] md:text-[260px] xl:text-[320px] font-extrabold tracking-tight text-white/5">
          PURO
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-7">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Turning <span className="text-red-600">Ideas</span> Into <br />
            Digital Reality
          </h1>

          <p className="text-gray-400 max-w-xl text-lg">
            We design and develop digital experiences that are visually striking,
            technically robust, and engineered to scale.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 transition px-7 py-3 rounded-full text-white font-semibold">
              Start a Project
            </button>
            <button className="border border-white/20 hover:border-white/40 transition px-7 py-3 rounded-full text-white">
              See Our Work
            </button>
          </div>
        </div>

        {/* RIGHT MASCOT */}
        <div className="relative w-full h-[420px] lg:h-[520px] flex items-center justify-center">

          {/* Conversation Bubble */}
         {showBubble && (
  <div
    className="
      absolute
      right-[-110px] top-[10px]
      z-20
      max-w-xs
      bg-white/10 backdrop-blur-xl
      border border-white/20
      rounded-2xl rounded-bl-sm
      px-8 py-4
      text-sm text-white
      animate-fadeUp
      shadow-[0_10px_30px_rgba(0,0,0,0.4)]
    "
  >
    <p className="whitespace-pre-line text-gray-200 leading-relaxed">
      {typedText}
      <span className="animate-blink">|</span>
    </p>

    {/* Tail */}
    <span
      className="
        absolute
        left-[-6px] top-12
        w-3 h-3
        bg-white/10
        border-l border-t border-white/20
        rotate-45
        backdrop-blur-xl
      "
    />
  </div>
)}
          {/* Mascot Component */}
          <Mascot3D />
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full" />

      {/* Animations */}
      <style>
        {`
          /* Bubble entry */
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 0.5s ease-out forwards;
          }

          /* Cursor blink */
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s infinite;
            margin-left: 2px;
          }

          /* Fake 3D hover */
          .mascot-3d {
            transform-style: preserve-3d;
            transition: transform 0.35s ease;
          }
          .mascot-3d:hover {
            transform: perspective(900px) rotateY(-6deg) rotateX(3deg);
          }
        `}
      </style>
    </section>
  );
}
