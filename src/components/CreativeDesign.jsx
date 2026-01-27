import { useState } from "react";
import {
  Code2,
  Bot,
  Smartphone,
  Layers,
  Briefcase,
  Search,
  Shield,
} from "lucide-react";

export default function CreativeDesign() {
  const [hovered, setHovered] = useState(null);

  const strategyList = [
   "Requirement Analysis",
"Solution Planning",
"System Architecture",
"Security Review",
"Development & Integration",
"Testing & Optimization",
"Deployment",
"Support",

  ];

  const cards = [
    {
  id: 1,
  title: "Web Development",
  desc:
    "We design and build secure, scalable websites focused on clarity, performance, and long-term reliability.",
  icon: <Code2 size={22} />,
},
{
  id: 2,
  title: "Automation",
  desc:
    "We implement practical automation solutions to streamline workflows, reduce manual effort, and improve efficiency.",
  icon: <Bot size={22} />,
},
{
  id: 3,
  title: "Mobile Apps",
  desc:
    "We develop reliable mobile applications designed for usability, performance, and seamless user experience.",
  icon: <Smartphone size={22} />,
},
{
  id: 4,
  title: "Tech Consultancy",
  desc:
    "We help businesses make the right technology decisions through clear guidance, planning, and solution strategy.",
  icon: <Briefcase size={22} />,
},
{
  id: 5,
  title: "Web Audit",
  desc:
    "We analyze existing websites to identify gaps in performance, security, clarity, and overall user experience.",
  icon: <Search size={22} />,
},
{
  id: 6,
  title: "Security Solutions",
  desc:
    "We implement essential digital security measures to protect systems, data, and user trust across platforms.",
  icon: <Shield size={22} />,
},

  ];

  return (
    <section className="mt-28">
      {/* Heading */}
      <h3 className="text-3xl md:text-4xl text-white font-medium mb-4">
        Creative Design Solution<span className="text-red-600">:</span>
      </h3>

      <p className="max-w-33xl text-md text-gray-400 mb-16">
        A focused set of digital services designed to bring clarity, security, and scalability to your business.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card) => {
          const isHover = hovered === card.id;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative overflow-hidden rounded-2xl p-6 min-h-[320px]
                transition-all duration-500 ease-out
                ${
                  isHover
                    ? "bg-gradient-to-br from-[#141414] to-[#0b0b0b]"
                    : "bg-white/5 backdrop-blur-md border border-white/10"
                }
              `}
            >
              {/* ICON */}
              <div
                className={`
                  w-11 h-11 rounded-xl mb-6
                  flex items-center justify-center
                  transition-all duration-300
                  ${
                    isHover
                      ? "bg-red-600 text-white"
                      : "bg-white/10 text-white/70"
                  }
                `}
              >
                {isHover ? <Layers size={22} /> : card.icon}
              </div>

              {/* TITLE */}
              <h4 className="text-white text-lg font-medium mb-4">
                {isHover ? "Strategy" : card.title}
              </h4>

              {/* CONTENT */}
              {!isHover && (
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              )}

              {isHover && (
                <ul className="space-y-2 text-sm text-gray-300">
                  {strategyList.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              )}

              {/* RED CURVE */}
              {isHover && (
                <div className="absolute bottom-0 right-0 w-44 h-44 bg-red-600 rounded-tl-full pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
