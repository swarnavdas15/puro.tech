import { Link } from "react-router-dom";

const serviceCards = [
  {
    title: "Web Development Solutions",
    copy:
      "We build fast, conversion-focused websites and landing pages that are structured for search visibility, clear messaging, and long-term maintainability.",
  },
  {
    title: "AI Automation for Businesses",
    copy:
      "Our AI automation services remove repetitive work from lead handling, client communication, internal operations, and reporting so teams can move faster.",
  },
  {
    title: "Custom Software Development",
    copy:
      "PURO TECH designs software solutions around the workflow of each business, whether that means dashboards, internal tools, portals, or connected systems.",
  },
  {
    title: "Technology Consulting",
    copy:
      "We provide tech consultancy for founders and teams who need clear advice on stack decisions, project planning, security priorities, and delivery strategy.",
  },
];

const valuePoints = [
  "SEO-aware web development with clean structure and strong page hierarchy.",
  "Practical AI automation built around real business workflows, not novelty.",
  "Software solutions that balance speed, maintainability, and usability.",
  "Local support from Kolkata with remote delivery across India and beyond.",
];

export default function HomeSeoContent() {
  return (
    <section className="relative w-full py-28 bg-gradient-to-br from-black via-[#120305] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="content-container">
            <p className="text-sm uppercase tracking-[0.3em] text-red-500">
              About PURO TECH
            </p>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-white leading-tight">
              Web development, AI automation, and digital solutions built for
              growth
            </h2>
          </div>

          <div className="content-container space-y-5 text-gray-400 leading-relaxed">
            <p>
              PURO TECH is a digital partner for startups, service businesses,
              and growing brands that need reliable web development, AI
              automation, and software solutions. We focus on building systems
              that help businesses attract attention, generate trust, and
              improve the way work gets done. That means clean websites, better
              technical foundations, and automation that saves time instead of
              adding complexity.
            </p>
            <p>
              Based in Kolkata, West Bengal, India, we support local and
              remote clients who want practical technology support without the
              usual noise. Our approach combines tech consultancy, product
              thinking, and delivery discipline so every project stays aligned
              with business goals. Whether a client needs a new website, a
              faster digital experience, or a custom internal system, we focus
              on clarity, performance, and measurable outcomes.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <div className="content-container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Our services and <span className="text-red-500">software solutions</span>
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Every engagement is shaped around business goals, operational
              bottlenecks, and the customer journey. That lets us recommend web
              development, AI automation, custom software development, and tech
              consultancy in combinations that make sense for the actual
              problem.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {card.copy}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="content-container rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Why businesses choose <span className="font-bold">PURO</span> <span className="text-red-500">TECH.</span>
            </h2>
            <p className="mt-5 text-gray-400 leading-relaxed">
              Businesses usually come to us when they need more than design
              polish. They need digital solutions that perform well on mobile,
              communicate value clearly, and support operations after launch.
              We work at that intersection of user experience, technical SEO,
              software reliability, and business practicality.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              That matters because a website should not only look good. It
              should load quickly, rank cleanly, support enquiries, and become
              a dependable part of the business. The same logic applies to AI
              automation and software solutions: the implementation should make
              the business simpler, not heavier.
            </p>
          </div>

          <div className="grid gap-4">
            {valuePoints.map((point, index) => (
              <div
                key={point}
                className="value-point-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30 px-6 py-5 text-gray-300 backdrop-blur-md"
                style={{ animationDelay: `${index * 1.2}s` }}
              >
                <div className="absolute inset-y-4 left-0 w-[3px] rounded-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-80" />

                <div className="relative flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-sm font-semibold text-red-200 shadow-[0_0_18px_rgba(239,68,68,0.12)]">
                    0{index + 1}
                  </span>

                  <p
                    className="mb-0 text-[0.98rem] text-gray-200"
                    style={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                      wordSpacing: "0.04em",
                      lineHeight: 1.85,
                    }}
                  >
                    {point}
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.15),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
            <div className="relative overflow-hidden rounded-[1.9rem] border border-red-500/35 bg-gradient-to-br from-red-500/14 via-[#2a080b] to-black/40 px-6 py-6 text-gray-200 shadow-[0_0_35px_rgba(239,68,68,0.12)] backdrop-blur-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.18),transparent_45%)]" />
              <div className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-gradient-to-b from-transparent via-red-400 to-transparent" />

              <div className="relative flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-400/35 bg-red-500/15 text-base font-semibold text-red-100 shadow-[0_0_22px_rgba(239,68,68,0.18)]">
                  +
                </span>

                <div>
                  <h3 className="mt-0 mb-2 text-lg font-semibold text-white">
                    Broader Market Reach
                  </h3>
                  <p
                    className="mb-0 text-gray-200"
                    style={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                      wordSpacing: "0.04em",
                      lineHeight: 1.85,
                    }}
                  >
                    PURO TECH supports businesses from Kolkata to broader Indian
                    and international markets with websites, automations, and
                    consulting engagements that stay focused on business value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-container rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Need a web development partner or tech consultancy team?
          </h2>
          <p className="mt-5 max-w-4xl text-gray-400 leading-relaxed">
            If you are evaluating a new website, a redesign, AI automation, or
            custom software development, we can help you define the right scope
            before money is wasted on the wrong build. We also offer a free
            website audit for businesses that want a clear view of performance,
            messaging, and technical opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 transition px-7 py-3 rounded-full text-white font-semibold"
            >
              Book a Free Audit
            </Link>
            <Link
              to="/services"
              className="border border-white/20 hover:border-white/40 transition px-7 py-3 rounded-full text-white"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute -left-40 top-1/3 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />

      <style>
        {`
          @keyframes cardFocusGlow {
            0%, 100% {
              border-color: rgba(255, 255, 255, 0.1);
              box-shadow: 0 0 0 rgba(239, 68, 68, 0);
              transform: translateY(0);
            }
            20% {
              border-color: rgba(239, 68, 68, 0.5);
              box-shadow:
                0 0 28px rgba(239, 68, 68, 0.2),
                inset 0 0 0 1px rgba(239, 68, 68, 0.14);
              transform: translateY(-2px);
            }
            35% {
              border-color: rgba(255, 255, 255, 0.14);
              box-shadow: 0 0 0 rgba(239, 68, 68, 0);
              transform: translateY(0);
            }
          }

          .value-point-card {
            animation: cardFocusGlow 8s ease-in-out infinite;
            will-change: transform, box-shadow, border-color;
          }
        `}
      </style>
    </section>
  );
}
