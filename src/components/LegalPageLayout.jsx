import { Link } from "react-router-dom";

export default function LegalPageLayout({
  badge,
  title,
  intro,
  updatedOn,
  sections,
  asideTitle,
  asideItems,
}) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#140406] to-black py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-red-600/10 blur-[130px]" />

        <div className="relative grid gap-14 lg:grid-cols-[minmax(0,1fr)_320px] items-start">
          <div className="space-y-10">
            <div className="max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
              <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-red-300">
                {badge}
              </span>

              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                {title}
              </h1>

              <p className="mt-6 max-w-3xl text-gray-300 text-base md:text-lg leading-relaxed">
                {intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2">
                  Last updated: {updatedOn}
                </div>
                <Link
                  to="/contact"
                  className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-red-200 hover:bg-red-500/15 transition"
                >
                  Contact PURO TECH
                </Link>
              </div>
            </div>

            <div className="space-y-6 max-w-4xl">
              {sections.map((section) => (
                <article
                  key={section.heading}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-xl p-7 md:p-8 shadow-[0_14px_44px_rgba(0,0,0,0.18)]"
                >
                  <h2 className="mt-0 text-2xl md:text-3xl font-semibold text-white">
                    {section.heading}
                  </h2>

                  {section.lead ? (
                    <p className="mt-4 text-gray-300 leading-relaxed">
                      {section.lead}
                    </p>
                  ) : null}

                  <div className="mt-4 space-y-4 text-gray-400 text-[0.98rem] leading-relaxed">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={`${section.heading}-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 space-y-5">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#130507]/85 backdrop-blur-xl p-6 shadow-[0_16px_48px_rgba(0,0,0,0.22)]">
              <h2 className="mt-0 text-xl font-semibold text-white">
                {asideTitle}
              </h2>
              <div className="mt-5 space-y-3">
                {asideItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                  >
                    <h3 className="mt-0 mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-red-300">
                      {item.title}
                    </h3>
                    <p className="mb-0 text-sm text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
