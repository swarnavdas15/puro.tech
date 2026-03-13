import { Link } from "react-router-dom";

function BlogImageBlock({ src, alt, placeholder, large = false }) {
  if (src) {
    return (
      <div
        className={`overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#090304] ${
          large ? "min-h-[260px] md:min-h-[420px]" : "min-h-[220px] md:min-h-[320px]"
        } flex items-center justify-center p-4`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-fill rounded-[1rem] ${
            large ? "max-h-[420px]" : "max-h-[320px]"
          }`}
        />
      </div>
    );
  }

  return (
    <div
      className={`rounded-[1.5rem] border border-dashed ${
        large ? "border-red-500/35" : "border-white/15"
      } bg-black/25 px-6 text-center text-xs md:text-sm tracking-[0.18em] uppercase ${
        large ? "text-red-200/80 py-18" : "text-gray-400 py-14"
      }`}
    >
      {placeholder}
    </div>
  );
}

export default function BlogTemplate({ post, relatedPosts = [] }) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#140406] to-black py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="absolute -top-14 right-0 h-72 w-72 rounded-full bg-red-600/10 blur-[140px]" />
        <div className="absolute top-1/3 -left-24 h-64 w-64 rounded-full bg-red-500/8 blur-[140px]" />

        <div className="relative max-w-6xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-200 transition"
          >
            <span aria-hidden="true">←</span>
            Back to Blog
          </Link>

          <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
              <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-red-200">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>PURO TECH Editorial</span>
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05]">
              {post.title}
            </h1>

            <p className="mt-6 max-w-3xl text-gray-300 text-base md:text-lg leading-relaxed">
              {post.intro}
            </p>

            <div className="mt-8">
              <BlogImageBlock
                src={post.featuredImage}
                alt={post.title}
                placeholder={`${post.featuredLabel} - image will be added later`}
                large
              />
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,860px)_280px] lg:justify-center items-start">
            <article className="w-full rounded-[2rem] border border-white/10 bg-[#0f0506]/85 backdrop-blur-xl p-7 md:p-9 shadow-[0_18px_54px_rgba(0,0,0,0.18)]">
              <div className="rounded-[1.5rem] border border-red-500/20 bg-red-500/8 px-5 py-5">
                <p className="mb-0 text-sm uppercase tracking-[0.18em] text-red-200">
                  Article Overview
                </p>
                <p className="mt-3 mb-0 text-gray-300">
                  This article explores practical considerations around{" "}
                  {post.category.toLowerCase()}, with a focus on operational
                  clarity, performance, and sustainable business growth.
                </p>
              </div>

              <div className="mt-10 space-y-10">
                {post.sections.map((section, index) => (
                  <section
                    key={section.heading}
                    id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                    className={`pb-10 ${
                      index !== post.sections.length - 1
                        ? "border-b border-white/8"
                        : ""
                    }`}
                  >
                    <h2 className="mt-0 text-2xl md:text-3xl font-semibold text-white">
                      {section.heading}
                    </h2>

                    <div className="mt-5 space-y-4 text-gray-300 text-[0.98rem] leading-relaxed">
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={`${section.heading}-${paragraphIndex}`}>{paragraph}</p>
                      ))}
                    </div>

                    {section.image || section.imagePlaceholder ? (
                      <div className="mt-7">
                        <BlogImageBlock
                          src={section.image}
                          alt={section.heading}
                          placeholder={`${section.imagePlaceholder} - image will be added later`}
                        />
                      </div>
                    ) : null}

                    {section.list?.length ? (
                      <ul className="mt-7 grid gap-3 text-gray-300">
                        {section.list.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-4"
                          >
                            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>
            </article>

            <aside className="w-full lg:sticky lg:top-28 space-y-5">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_16px_48px_rgba(0,0,0,0.18)]">
                <h2 className="mt-0 text-lg font-semibold text-white">
                  On This Page
                </h2>
                <div className="mt-5 space-y-3">
                  {post.sections.map((section, index) => (
                    <a
                      key={section.heading}
                      href={`#${section.heading
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")}`}
                      className="flex gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm text-gray-300 hover:border-red-500/25 hover:text-white transition"
                    >
                      <span className="text-red-300">{String(index + 1).padStart(2, "0")}</span>
                      <span>{section.heading}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-red-500/20 bg-red-500/8 backdrop-blur-xl p-6 shadow-[0_16px_48px_rgba(0,0,0,0.18)]">
                <h2 className="mt-0 text-lg font-semibold text-white">
                  Need Help With This?
                </h2>
                <p className="mt-4 text-sm text-gray-300">
                  PURO TECH helps businesses apply web development, AI
                  automation, and software solutions in a practical way.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2.5 text-sm font-medium text-red-100 hover:bg-red-500/15 transition"
                >
                  Talk to PURO TECH
                </Link>
              </div>
            </aside>
          </div>

          {relatedPosts.length ? (
            <div className="mt-18">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                  Related Articles
                </h2>
                <p className="mt-4 text-gray-400 max-w-2xl">
                  Continue exploring practical insights on web development, AI
                  automation, and software solutions.
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.slug}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_14px_44px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <BlogImageBlock
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      placeholder="Featured image placeholder"
                    />
                    <p className="mt-5 text-sm text-red-300">
                      {relatedPost.date} • {relatedPost.category}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-3 text-gray-400">
                      {relatedPost.description}
                    </p>
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="mt-5 inline-flex items-center text-red-300 hover:text-red-200 transition"
                    >
                      Read article
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
