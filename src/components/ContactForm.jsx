import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ContactForm() {
  const [params] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const messages = [
  "Thank you for contacting us",
  "We’ll reach you soon",
];

const [text, setText] = useState("");
const [msgIndex, setMsgIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [isErasing, setIsErasing] = useState(false);
const [started, setStarted] = useState(false);
useEffect(() => {
  if (submitted) {
    setText("");
    setMsgIndex(0);
    setCharIndex(0);
    setIsErasing(false);
    setStarted(true);
  }
}, [submitted]);

useEffect(() => {
  if (!started) return;

  const current = messages[msgIndex];
  let timeout;

  // TYPING
  if (!isErasing && charIndex < current.length) {
    timeout = setTimeout(() => {
      setText((prev) => prev + current[charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 50);
  }

  // FINISHED TYPING → WAIT → START ERASING (only first message)
  else if (!isErasing && charIndex === current.length) {
    timeout = setTimeout(() => {
      if (msgIndex === 0) setIsErasing(true);
    }, 700);
  }

  // ERASING
  else if (isErasing && charIndex > 0) {
    timeout = setTimeout(() => {
      setText((prev) => prev.slice(0, -1));
      setCharIndex((prev) => prev - 1);
    }, 35);
  }

  // FINISHED ERASING → NEXT MESSAGE
  else if (isErasing && charIndex === 0) {
    setIsErasing(false);
    setMsgIndex(1);
  }

  return () => clearTimeout(timeout);
}, [charIndex, isErasing, msgIndex, started]);



  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const email = params.get("email");
    if (email) {
      setForm((f) => ({ ...f, email }));
    }
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setSubmitted(true);
  };

  return (
    <section className="py-28 bg-gradient-to-br from-black via-[#140406] to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* ================= LEFT INFO (STATIC) ================= */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Let’s Talk About Your Idea
              <span className="text-red-600">.</span>
            </h2>

          <p className="text-gray-400 max-w-lg leading-relaxed">
  Have a project in mind or need clarity around technology?  
  Let’s talk about how secure, scalable digital solutions can support your goals.
</p>

<ul className="space-y-4 list-disc  text-white/80">
  <li> puro.tech.ofcl@gmail.com</li>
  <li> +91- 88892 87261</li>
  <li> Tollygunj, Thakurpukur, WB 700093, India</li>
</ul>
          </div>

          {/* ================= RIGHT FORM (FLIP CARD) ================= */}
          <div className="relative perspective">

            <div
              className={`form-card ${submitted ? "flipped" : ""}`}
            >
              {/* -------- FRONT : FORM -------- */}
              <form
                onSubmit={handleSubmit}
                className="form-face form-front"
              >
                <input
                  placeholder="Full Name"
                  className="input"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <input
                  placeholder="Email"
                  className="input"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />

               <div className="relative">
  <select
    className="
      w-full
      bg-white/5
      border border-white/20
      rounded-full
      px-6 py-4
      pr-12
      text-white
      outline-none
      backdrop-blur-xl
      appearance-none
      focus:border-red-500/60
      transition
    "
    value={form.service}
    onChange={(e) =>
      setForm({ ...form, service: e.target.value })
    }
  >
    <option value="" disabled className="bg-[#0b0203] text-neutral-800">
      Select Service
    </option>
    <option className="bg-[#0b0203] text-red-300">Web Audit</option>
    <option className="bg-[#0b0203] text-red-300 ">Web Development</option>
    <option className="bg-[#0b0203] text-red-300">Mobile Apps</option>
    <option className="bg-[#0b0203] text-red-300">Automation</option>
    <option className="bg-[#0b0203] text-red-300">Tech Consultancy</option>
    <option className="bg-[#0b0203] text-red-300">Security Solutions</option>
    <option className="bg-[#0b0203] text-red-300">Other</option>
  </select>

  {/* Custom Arrow */}
  <span
    className="
      pointer-events-none
      absolute top-1/2 right-5
      -translate-y-1/2
      text-white/60
    "
  >
    ▼
  </span>
</div>
                <textarea
                  placeholder="Discussion"
                  rows="5"
                  className="input textarea"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />

                <button className="submit-btn">
                  Get in Touch
                </button>
              </form>

              {/* -------- BACK : SUCCESS -------- */}
             <div className="form-face form-back">
  <div className="relative flex justify-center gap-12">

    {/* Mascots */}
    <img src="/boy-mascot.png" className="w-36 z-10" />
    <img src="/girl-mascot.png" className="w-36 z-10" />

    {/* Speech Bubble */}
     <p className="bubble-typed">
  {text}
</p>

  </div>
</div>

            </div>

          </div>
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        .perspective {
          perspective: 1200px;
        }

        .form-card {
          position: relative;
          width: 100%;
          min-height: 520px;
          transform-style: preserve-3d;
          transition: transform 0.9s cubic-bezier(.4,.2,.2,1);
        }

        .form-card.flipped {
          transform: rotateY(180deg);
        }

        .form-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          background: rgba(255,255,255,0.05);
          backdrop-blur: 16px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 24px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          justify-content: center;
        }

        .form-back {
          transform: rotateY(180deg);
          align-items: center;
          text-align: center;
        }

        .input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          padding: 14px 28px;
          color: white;
          outline: none;
        }

        .textarea {
          border-radius: 24px;
          resize: none;
        }

        .submit-btn {
          margin-top: 10px;
          padding: 14px 48px;
          border-radius: 999px;
          background: linear-gradient(to bottom right, #ef4444, #b91c1c);
          color: white;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: scale(1.05);
        }

        .bubble-typed {
  position: absolute;
  top: -55px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: black;
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 0 12px 30px rgba(0,0,0,0.25);
}

.bubble-typed::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 10px 10px 0 10px;
  border-style: solid;
  border-color: white transparent transparent transparent;
}

      `}</style>
    </section>
  );
}
