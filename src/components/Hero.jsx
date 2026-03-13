import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Mascot3D = lazy(() => import("./Mascot3D"));

export default function Hero() {
  const roniText =
    "Hey, I'm Roni.\nI help turn ideas into smart digital solutions.";
  const puchuText =
    "Hi, I'm Puchu.\nLet's explore what we can build together.";
  const finalText = "We Are PURO";
  const hoverRoniText = "How can I help you today?";
  const hoverPuchuText = "What would you like to build?";

  const [showBubble, setShowBubble] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [fullText, setFullText] = useState(roniText);
  const [speaker, setSpeaker] = useState("roni");
  const [canAnimate, setCanAnimate] = useState(false);
  const [typingKey, setTypingKey] = useState(0);
  const [prevText, setPrevText] = useState(roniText);
  const [prevSpeaker, setPrevSpeaker] = useState("roni");

  const activeHoverRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanAnimate(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!canAnimate) {
      return undefined;
    }

    const delay = setTimeout(() => setShowBubble(true), 800);
    return () => clearTimeout(delay);
  }, [canAnimate]);

  useEffect(() => {
    if (!canAnimate || !showBubble || index < 0 || index >= fullText.length) {
      return undefined;
    }

    const currentText = fullText;
    const timer = setTimeout(() => {
      setTypedText((prev) => {
        if (currentText !== fullText) {
          return "";
        }
        return prev + currentText[index];
      });

      setIndex((prev) => {
        if (currentText !== fullText) {
          return 0;
        }
        return prev + 1;
      });
    }, 35);

    return () => clearTimeout(timer);
  }, [index, fullText, showBubble, typingKey, canAnimate]);

  const restartTyping = (text) => {
    setTypedText("");
    setIndex(0);
    setFullText(text);
    setTypingKey((key) => key + 1);
  };

  useEffect(() => {
    const handleMascotChange = (event) => {
      activeHoverRef.current = null;
      setSpeaker(event.detail);
      restartTyping(event.detail === "roni" ? roniText : puchuText);
    };

    window.addEventListener("mascot-change", handleMascotChange);
    return () => window.removeEventListener("mascot-change", handleMascotChange);
  }, []);

  useEffect(() => {
    const handleFinalReveal = () => {
      activeHoverRef.current = null;
      setSpeaker("final");
      restartTyping(finalText);
    };

    window.addEventListener("final-reveal", handleFinalReveal);
    return () => window.removeEventListener("final-reveal", handleFinalReveal);
  }, []);

  useEffect(() => {
    const handleHover = (event) => {
      const mascot = event.detail;

      if (activeHoverRef.current === mascot) {
        return;
      }

      activeHoverRef.current = mascot;
      setPrevText(fullText);
      setPrevSpeaker(speaker);
      setSpeaker(mascot);
      restartTyping(mascot === "roni" ? hoverRoniText : hoverPuchuText);
    };

    const handleHoverEnd = () => {
      if (!activeHoverRef.current) {
        return;
      }

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
    <section className="relative font-sora min-h-[115vh] w-full bg-gradient-to-br from-black via-[#1a0508] to-black overflow-hidden">
      <div className="absolute top-[-300px] inset-0 flex items-center justify-center md:justify-end md:pr-24 pointer-events-none select-none">
        <span className="text-[96px] sm:text-[120px] md:text-[260px] xl:text-[320px] font-bold tracking-tight text-white/5">
          PURO
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Web Development, <span className="text-red-600">AI Automation</span>
            <br /> &amp; Tech Solutions
          </h1>

          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            PURO TECH builds fast websites, software solutions, and digital
            systems for startups and businesses that need clarity, performance,
            and measurable growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-red-600 hover:bg-red-700 transition px-7 py-3 rounded-full text-white font-semibold"
            >
              Start a Project
            </button>
            <button
              onClick={() => navigate("/portfolio")}
              className="border border-white/20 hover:border-white/40 transition px-7 py-3 rounded-full text-white"
            >
              See Our Work
            </button>
          </div>
        </div>

        <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[520px] flex items-center justify-center">
          {showBubble && (
            <div
              className={`
                pointer-events-none absolute z-50 max-w-xs
                ${
                  speaker === "final"
                    ? "left-1/2 -translate-x-1/2 bottom-[320px] sm:bottom-[350px] text-center"
                    : speaker === "roni"
                      ? "right-[55%] bottom-[10px] sm:bottom-[10px] lg:bottom-[70px]"
                      : "left-[55%] bottom-[10px] sm:bottom-[50px] lg:bottom-[60px]"
                }
                bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4
                text-sm text-white animate-fadeUp shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              `}
            >
              <p className="whitespace-pre-line text-gray-200 leading-relaxed">
                {typedText}
              </p>
            </div>
          )}

          <Suspense
            fallback={<div className="w-full h-full rounded-3xl bg-white/5 border border-white/10" />}
          >
            <Mascot3D />
          </Suspense>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-10 mt-[-6%]">
        <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-10 items-center text-white">
          <div className="absolute -left-25 top-10 -translate-y-1/2 hidden sm:block">
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="w-2 h-2 rounded-full bg-red-600" />
              ))}
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-4xl text-gray-500 font-bold">30+</h2>
            <p className="mt-2 text-sm text-gray-500">
              Project <br /> Completed
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-4xl text-red-500 font-bold">95%</h2>
            <p className="mt-2 text-sm text-gray-400">
              Client <br /> Satisfaction
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-4xl text-red-500 font-bold">2+</h2>
            <p className="mt-2 text-sm text-gray-400">
              Years of <br /> Experience
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-4xl text-gray-500 font-bold">24/7</h2>
            <p className="mt-2 text-sm text-gray-500">
              Support <br /> Available
            </p>
          </div>

          <div className="absolute -right-1 top-1/2 -translate-y-1/2 hidden sm:block">
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="w-2 h-2 rounded-full bg-red-600" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full" />

      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 0.5s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}
