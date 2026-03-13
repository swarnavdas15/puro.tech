import * as FramerMotion from "framer-motion";
import { FaAws, FaDocker, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiBurpsuite,
  SiFirebase,
  SiKalilinux,
  SiLangchain,
  SiMetasploit,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiOwasp,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiTailwindcss,
  SiTensorflow,
  SiVercel,
} from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: <FaReact size={30} />,
    description: "Component-driven UI architecture for scalable frontend applications.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={30} />,
    description: "SEO-optimized React framework with server-side rendering capabilities.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={30} />,
    description: "Utility-first CSS framework for rapid and consistent UI development.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={30} />,
    description: "High-performance backend runtime for APIs and scalable systems.",
  },
  {
    name: "Express.js",
    icon: <SiNextdotjs size={30} />,
    description: "Lightweight backend framework for building RESTful APIs.",
  },
  {
    name: "Java",
    icon: <FaJava size={30} />,
    description: "Enterprise-grade backend development for large-scale applications.",
  },
  {
    name: "Python",
    icon: <SiPython size={30} />,
    description: "Versatile language used for backend systems, automation, and AI development.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={30} />,
    description: "Flexible NoSQL database ideal for dynamic and scalable applications.",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={30} />,
    description: "Reliable relational database for structured enterprise systems.",
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={30} />,
    description: "Real-time database and backend services for rapid application development.",
  },
  {
    name: "Docker",
    icon: <FaDocker size={30} />,
    description: "Containerized deployments ensuring consistent production environments.",
  },
  {
    name: "AWS",
    icon: <FaAws size={30} />,
    description: "Enterprise-level cloud infrastructure and hosting services.",
  },
  {
    name: "Vercel",
    icon: <SiVercel size={30} />,
    description: "Optimized deployment platform for modern frontend applications.",
  },
  {
    name: "Kali Linux",
    icon: <SiKalilinux size={30} />,
    description: "Advanced penetration testing and ethical hacking environment.",
  },
  {
    name: "Metasploit",
    icon: <SiMetasploit size={30} />,
    description: "Security testing framework for identifying system vulnerabilities.",
  },
  {
    name: "Burp Suite",
    icon: <SiBurpsuite size={30} />,
    description: "Web application security testing and vulnerability assessment tool.",
  },
  {
    name: "OWASP",
    icon: <SiOwasp size={30} />,
    description: "Security best practices framework for protecting web applications.",
  },
  {
    name: "OpenAI API",
    icon: <SiOpenai size={30} />,
    description: "AI-powered language and automation capabilities integration.",
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow size={30} />,
    description: "Machine learning framework for AI model development.",
  },
  {
    name: "PyTorch",
    icon: <SiPytorch size={30} />,
    description: "Deep learning framework for advanced AI solutions.",
  },
  {
    name: "LangChain",
    icon: <SiLangchain size={30} />,
    description: "Framework for building AI-powered automation and agent workflows.",
  },
];

const floatingAnimation = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const TechStackBubbles = () => {
  return (
    <section className="relative py-32 bg-black text-white overflow-visible">
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E10600]/20 blur-[140px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Tech Stack <span className="text-[#E10600]">We Use</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Carefully selected technologies powering performance-driven digital systems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {techStack.map((tech, index) => (
            <FramerMotion.motion.div
              key={index}
              variants={floatingAnimation}
              animate="animate"
              className="relative group"
            >
              <div className="relative z-10 w-28 h-28 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group-hover:border-[#E10600] group-hover:shadow-[0_0_35px_rgba(225,6,0,0.6)] group-hover:scale-110">
                <div className="text-[#E10600] mb-2">{tech.icon}</div>
                <span className="text-sm text-center px-2">{tech.name}</span>
              </div>

              <div className="absolute bottom-full mb-6 left-1/2 -translate-x-1/2 w-64 opacity-0 group-hover:opacity-100 transition duration-300 z-50 pointer-events-none">
                <div className="relative bg-[#111] border border-[#E10600]/40 p-5 rounded-xl shadow-[0_0_40px_rgba(225,6,0,0.5)] text-sm text-gray-300 text-center">
                  {tech.description}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-[#111] border-l border-b border-[#E10600]/40 rotate-45" />
                </div>
              </div>
            </FramerMotion.motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackBubbles;
