import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Tech Club Website",
    subtitle: "TECH + BRANDING",
    image: "/projects/o-project-1.png",
    link: "https://div-github-io.vercel.app/",
    category: "website",
  },
  {
    id: 2,
    title: "Syllabus GPT",
    subtitle: "Automation System",
    image: "/projects/o-project-2.png",
    link: "https://github.com/ER-Harshita-15/Syllabus_GPT",
    category: "automation",
  },
  {
    id: 3,
    title: "Smart Vulnerability Scanner",
    subtitle: "Security Application",
    image: "/projects/o-project-3.jpg",
    link: "https://github.com/nikhildubey-23/Rudra-Pathoney",
    category: "security",
  },
  {
    id: 4,
    title: "Rasin Muse Studio",
    subtitle: "Brand + Web",
    image: "/projects/o-project-4.png",
    link: "https://resin-muse-studio.lovable.app/",
    category: "website",
  },
  {
    id: 5,
    title: "Educational Website",
    subtitle: "UI / UX Design",
    image: "/projects/o-project-5.png",
    link: "https://drive.google.com/file/d/1aswX6YG_bYCh34QE72VdIOl8AAkPchTo/view?usp=drive_link",
    category: "website",
  },
   {
    id: 6,
    title: "Portfolio Website",
    subtitle: "UI / UX Design",
    image: "/projects/o-project-6.png",
    link: "https://swarnav.vercel.app/",
    category: "website",
  },

  
  // add more later
];

const filters = [
  { key: "all", label: "All" },
  { key: "app", label: "App" },
  { key: "website", label: "Website" },
  { key: "automation", label: "Automation" },
];

export default function ProjectsSection() {
  const MAX_VISIBLE = 6;

  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, MAX_VISIBLE);

  const hasExtra = filteredProjects.length > MAX_VISIBLE;

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div id="projects" className="flex flex-col gap-8 mb-16">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our <span className="text-red-600">Projects</span>
              </h2>
              <p className="mt-4 text-gray-400 max-w-xl">
                A curated selection of digital products crafted with strong
                aesthetics, performance, and scalability.
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => {
                  setActiveFilter(filter.key);
                  setShowAll(false);
                }}
                className={`
                  px-5 py-2 rounded-full text-sm transition
                  ${
                    activeFilter === filter.key
                      ? "bg-red-600 text-white"
                      : "border border-white/20 text-gray-300 hover:border-white/40"
                  }
                `}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="
                group relative rounded-2xl overflow-hidden
                bg-white/5 backdrop-blur-md
                border border-white/10
                transition-all duration-500
                hover:-translate-y-2 hover:scale-[1.02]
                hover:border-red-500/40
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Red Go-To */}
              <div
                className="
                  absolute top-5 right-5 z-20
                  flex items-center justify-center
                  w-11 h-11
                  rounded-xl
                  bg-red-600/90 backdrop-blur-md
                  opacity-0 translate-y-2 translate-x-2
                  group-hover:opacity-100
                  group-hover:translate-x-0 group-hover:translate-y-0
                  transition-all duration-300
                "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>

              {/* Glow */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-t from-red-600/25 via-red-600/5 to-transparent
                "
              />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-sm text-gray-300">{project.subtitle}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Show All / Less */}
        {hasExtra && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll((p) => !p)}
              className="text-sm text-white border border-white/20 hover:border-white/40 transition px-6 py-2 rounded-full"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </div>

      {/* Decorative Glow */}
      <div className="absolute -left-40 top-1/3 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />
    </section>
  );
}
