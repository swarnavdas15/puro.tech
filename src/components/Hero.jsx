import { useEffect, useState, useRef } from "react";
import Mascot3D from "./Mascot3D";

export default function Hero() {
  // Dialogues
  const roniText =
    "Hey, I’m Roni 👋\nI help turn ideas into powerful digital products.";
  const puchuText =
    "Hi, I’m Puchu 🌸\nI’ll guide you through what we can build together.";
  const finalText = "We Are PURO";

  // Hover dialogues
  const hoverRoniText = "What may I help you with?";
  const hoverPuchuText = "What do you want to build?";

  // Core states
  const [showBubble, setShowBubble] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [fullText, setFullText] = useState(roniText);
  const [speaker, setSpeaker] = useState("roni");
  const [isFinal, setIsFinal] = useState(false);
  const [canAnimate, setCanAnimate] = useState(false);

  // Typing reset key
  const [typingKey, setTypingKey] = useState(0);

  // Preserve timeline state during hover
  const [prevText, setPrevText] = useState(roniText);
  const [prevSpeaker, setPrevSpeaker] = useState("roni");

  // 🔒 Active hover guard
  const activeHoverRef = useRef(null);

  useEffect(() => {
  const t = setTimeout(() => {
    setCanAnimate(true);
  }, 700); 

  return () => clearTimeout(t);
}, []);

  /* Initial bubble delay */
  useEffect(() => {
  if (!canAnimate) return;
  const delay = setTimeout(() => setShowBubble(true), 800);
  return () => clearTimeout(delay);
}, [canAnimate]);


  /* Unified typewriter effect */
  useEffect(() => {
    if (!canAnimate || !showBubble) return;
    if (index >= fullText.length) return;

    const t = setTimeout(() => {
      setTypedText((prev) => prev + fullText[index]);
      setIndex((prev) => prev + 1);
    }, 35);

    return () => clearTimeout(t);
  }, [index, fullText, showBubble, typingKey]);

  /* Safe typing restart helper */
  const restartTyping = (text) => {
    setTypedText("");
    setIndex(0);
    setFullText(text);
    setTypingKey((k) => k + 1);
  };

  /* Mascot timeline: Roni → Puchu */
  useEffect(() => {
    const handleMascotChange = (e) => {
      activeHoverRef.current = null;
      setSpeaker(e.detail);
      restartTyping(e.detail === "roni" ? roniText : puchuText);
    };

    window.addEventListener("mascot-change", handleMascotChange);
    return () =>
      window.removeEventListener("mascot-change", handleMascotChange);
  }, []);

  /* Final reveal */
  useEffect(() => {
    const handleFinalReveal = () => {
      activeHoverRef.current = null;
      setSpeaker("final");
      setIsFinal(true);
      restartTyping(finalText);
    };

    window.addEventListener("final-reveal", handleFinalReveal);
    return () =>
      window.removeEventListener("final-reveal", handleFinalReveal);
  }, []);

  /* Hover override (idempotent + safe) */
  useEffect(() => {
    const handleHover = (e) => {
      const mascot = e.detail;

      // prevent duplicate hover loops
      if (activeHoverRef.current === mascot) return;
      activeHoverRef.current = mascot;

      setPrevText(fullText);
      setPrevSpeaker(speaker);
      setSpeaker(mascot);

      restartTyping(mascot === "roni" ? hoverRoniText : hoverPuchuText);
    };

    const handleHoverEnd = () => {
      if (!activeHoverRef.current) return;

      activeHoverRef.current = null;
      setSpeaker(prevSpeaker);
      restartTyping(prevText);
    };

    window.addEventListener("mascot-hover", handleHover);
    window.addEventListener("mascot-hover-end", handleHoverEnd);

    return () => {
      window.removeEventListener("mascot-hover", handleHover);
      window.removeEventListener("mascot-hover-end", handleHoverEnd);
    };
  }, [fullText, speaker, prevText, prevSpeaker]);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-black via-[#1a0508] to-black overflow-hidden">

      {/* Background Brand Text */}
      <div className="absolute top-[-300px] inset-0 flex items-center justify-center md:justify-end md:pr-24 pointer-events-none select-none">
        <span className="text-[96px] sm:text-[120px] md:text-[260px] xl:text-[320px] font-bold tracking-tight text-white/5">
          PURO
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

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
        <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[520px] flex items-center justify-center">

          {showBubble && (
            <div
              className={`
                pointer-events-none   /* 🔥 CRITICAL FIX */
                absolute z-50 max-w-xs
                ${
                  speaker === "final"
                    ? "left-1/2 -translate-x-1/2 bottom-[320px] sm:bottom-[350px] text-center"
                    : speaker === "roni"
                    ? "right-[55%] bottom-[10px] sm:bottom-[10px] lg:bottom-[70px]"
                    : "left-[55%] bottom-[10px] sm:bottom-[50px] lg:bottom-[60px]"
                }
                bg-white/10 backdrop-blur-xl
                border border-white/20
                rounded-2xl
                px-6 py-4
                text-sm text-white
                animate-fadeUp
                shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              `}
            >
              <p className="whitespace-pre-line text-gray-200 leading-relaxed">
                {typedText}
              </p>
            </div>
          )}

          <Mascot3D />
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full" />

      {/* Animations */}
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 0.5s ease-out forwards;
          }

          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
}
