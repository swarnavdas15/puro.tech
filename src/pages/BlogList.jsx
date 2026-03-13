import { Link } from "react-router-dom";
import { getAllBlogPosts } from "../data/blogs";

function BlogCardImage({ src, alt }) {
  if (src) {
    return (
      <div className="h-56 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#090304] flex items-center justify-center p-3">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain rounded-[1rem]"
        />
      </div>
    );
  }

  return (
    <div className="rounded-[1.35rem] border border-dashed border-red-500/30 bg-black/30 px-5 py-14 text-center text-[11px] uppercase tracking-[0.18em] text-red-200/80">
      Featured image placeholder
    </div>
  );
}

export default function BlogList() {
  const posts = getAllBlogPosts();
  const [featuredPost, ...otherPosts] = posts;

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#140406] to-black py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="absolute -top-16 right-0 h-80 w-80 rounded-full bg-red-600/10 blur-[140px]" />
        <div className="absolute top-1/2 -left-20 h-64 w-64 rounded-full bg-red-500/8 blur-[140px]" />

        <div className="relative max-w-4xl">
          <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-red-300">
            PURO TECH Blog
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Insights on web development, AI automation, and digital growth
          </h1>
          <p className="mt-6 max-w-3xl text-gray-300 text-base md:text-lg leading-relaxed">
            Explore practical articles from PURO TECH on web development, AI
            automation, software solutions, and technology strategy for modern
            businesses.
          </p>
        </div>

        {featuredPost ? (
          <article className="mt-14 grid gap-7 lg:grid-cols-[1.1fr_0.9fr] items-stretch rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
            <div>
              <BlogCardImage src={featuredPost.featuredImage} alt={featuredPost.title} />
            </div>

            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-200">
                Featured Article
              </span>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-400">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.category}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-white leading-tight">
                {featuredPost.title}
              </h2>
              <p className="mt-5 text-gray-300">{featuredPost.description}</p>
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="mt-7 inline-flex w-fit items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white hover:border-red-500/40 hover:text-red-200 transition"
              >
                Read featured post
              </Link>
            </div>
          </article>
        ) : null}

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {otherPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-[1.9rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1"
            >
              <BlogCardImage src={post.featuredImage} alt={post.title} />

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-400">
                <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-red-200">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>

              <h2 className="mt-4 text-2xl font-semibold text-white">
                {post.title}
              </h2>

              <p className="mt-4 text-gray-400">{post.description}</p>

              <Link
                to={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white hover:border-red-500/40 hover:text-red-200 transition"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
