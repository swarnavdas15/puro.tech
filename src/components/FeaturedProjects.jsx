const featuredProjects = [
  {
    id: 1,
    title: "Berkshire Hathaway",
    subtitle: "UI / UX Design",
    image: "/projects/project-1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Business Workflow",
    subtitle: "Web Application",
    image: "/projects/project-2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    subtitle: "Mobile App",
    image: "/projects/project-3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    subtitle: "Brand + Web",
    image: "/projects/project-4.jpg",
    link: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative w-full py-28 bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Featured <span className="text-red-600">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            A hand-picked selection of our most impactful digital products,
            crafted with precision, performance, and aesthetics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {featuredProjects.map((project) => (
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
                  className="
                    w-full h-64 object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Red Go-To Button */}
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
                  transition-all duration-300 ease-out
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

              {/* Hover Glow */}
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
                <p className="text-sm text-gray-300">
                  {project.subtitle}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute -left-40 top-1/3 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />
    </section>
  );
}
