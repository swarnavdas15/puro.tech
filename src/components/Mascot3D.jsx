import { useEffect, useState } from "react";

export default function Mascot3D() {
  const [stage, setStage] = useState("roni");
  // roni | puchu | final

  const [hovered, setHovered] = useState(null);
  // null | roni | puchu

  /* Timeline (sync with Hero typing) */
  useEffect(() => {
    const toPuchu = setTimeout(() => {
      setStage("puchu");
      window.dispatchEvent(
        new CustomEvent("mascot-change", { detail: "puchu" })
      );
    }, 4500);

    const toFinal = setTimeout(() => {
      setStage("final");
      window.dispatchEvent(new CustomEvent("final-reveal"));
    }, 9000);

    return () => {
      clearTimeout(toPuchu);
      clearTimeout(toFinal);
    };
  }, []);

  const base =
    "transition-all duration-500 ease-out drop-shadow-[0_40px_80px_rgba(0,0,0,0.75)]";

  /* Focus logic:
     - hover has highest priority
     - otherwise timeline stage controls focus
  */
  const isFront = (name) => {
    if (hovered) return hovered === name;
    if (stage === "final") return true;
    return stage === name;
  };

  const isBack = (name) => {
    if (hovered) return hovered !== name;
    if (stage === "final") return false;
    return stage !== name;
  };

  const handleEnter = (name) => {
    setHovered(name);
    window.dispatchEvent(
      new CustomEvent("mascot-hover", { detail: name })
    );
  };

  const handleLeave = () => {
    setHovered(null);
    window.dispatchEvent(
      new CustomEvent("mascot-hover-end")
    );
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center gap-10 select-none">

      {/* RONI */}
      <img
        src="/boy-mascot.png"
        alt="Roni Mascot"
        draggable={false}
        onMouseEnter={() => handleEnter("roni")}
        onMouseLeave={handleLeave}
        className={`
          ${base}
          w-56 md:w-72
          ${
            isFront("roni")
              ? "scale-105 z-20 blur-0 translate-y-0"
              : isBack("roni")
              ? "scale-95 z-10 blur-[2px] translate-y-4"
              : ""
          }
        `}
      />

      {/* PUCHU */}
      <img
        src="/girl-mascot.png"
        alt="Puchu Mascot"
        draggable={false}
        onMouseEnter={() => handleEnter("puchu")}
        onMouseLeave={handleLeave}
        className={`
          ${base}
          w-56 md:w-72
          ${
            isFront("puchu")
              ? "scale-105 z-20 blur-0 translate-y-0"
              : isBack("puchu")
              ? "scale-95 z-10 blur-[2px] translate-y-4"
              : ""
          }
        `}
      />
    </div>
  );
}
