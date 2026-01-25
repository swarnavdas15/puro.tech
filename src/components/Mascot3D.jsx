import { useEffect, useRef } from "react";

export default function Mascot3D() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf;
    let t = 0;

    const animate = () => {
      t += 0.02;

      el.style.transform = `
        perspective(900px)
        translateY(${Math.sin(t) * 6}px)
        rotateY(${Math.sin(t * 0.6) * 4}deg)
      `;

      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      className="
        relative
        mascot-3d
        select-none
      "
    >
      {/* Soft halo glow (depth cue) */}
      <div
        className="
          absolute inset-0 -z-10
          bg-red-600/25
          blur-[120px]
          rounded-full
          scale-90
        "
      />

      {/* Mascot image */}
      <img
        src="/boy-mascot.png"
        alt="Roni Mascot"
        draggable={false}
        className="
          w-72 md:w-80
          drop-shadow-[0_40px_80px_rgba(0,0,0,0.75)]
        "
      />

      {/* Specular light edge */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-blend-saturation
          from-white/12 via-transparent to-transparent
          rounded-xl
        "
      />
    </div>
  );
}
