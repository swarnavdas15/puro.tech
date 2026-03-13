import { lazy, Suspense, useEffect, useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SEOHead from "./components/SEOHead";
import { faqItems } from "./data/faqItems";
import { getAllBlogPosts, getBlogPostBySlug } from "./data/blogs";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const AboutHeroSection = lazy(() => import("./pages/AboutHeroSection"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const NotFound = lazy(() => import("./components/NotFound"));

const siteUrl = "https://puro-tech.vercel.app";
const defaultKeywords =
  "web development, AI automation, software solutions, tech consultancy, digital solutions, custom software development, Kolkata";

const pathToLabel = {
  services: "Services",
  portfolio: "Portfolio",
  about: "About",
  blog: "Blog",
  contact: "Contact",
  "privacy-policy": "Privacy Policy",
  disclaimer: "Disclaimer",
  "terms-and-conditions": "Terms & Conditions",
};

const staticPageMeta = {
  "/": {
    title: "PURO TECH | Web Development, AI Automation, Tech Solutions",
    description:
      "PURO TECH provides web development, AI automation, software solutions, and tech consultancy for startups and businesses. Book a free audit.",
    keywords: defaultKeywords,
  },
  "/services": {
    title: "Services | Web Development and AI Automation",
    description:
      "Explore PURO TECH services for web development, AI automation, software solutions, tech consultancy, and digital growth support.",
    keywords: defaultKeywords,
  },
  "/portfolio": {
    title: "Portfolio | Software Solutions and Web Projects",
    description:
      "View PURO TECH web development, software solutions, and AI automation work built for performance, usability, and business growth.",
    keywords: defaultKeywords,
  },
  "/about": {
    title: "About PURO TECH | Tech Consultancy and Delivery",
    description:
      "Learn how PURO TECH delivers web development, AI automation, software solutions, and practical tech consultancy for growing businesses.",
    keywords: defaultKeywords,
  },
  "/blog": {
    title: "Blog | PURO TECH Insights",
    description:
      "Read PURO TECH blog articles on web development, AI automation, software solutions, and digital growth strategy.",
    keywords: defaultKeywords,
  },
  "/contact": {
    title: "Contact PURO TECH | Book a Free Website Audit",
    description:
      "Contact PURO TECH in Kolkata, West Bengal for web development, AI automation, software solutions, and tech consultancy.",
    keywords: defaultKeywords,
  },
  "/privacy-policy": {
    title: "Privacy Policy | PURO TECH Digital Services",
    description:
      "Read the PURO TECH privacy policy covering website data collection, contact information handling, analytics, and digital service communication.",
    keywords: defaultKeywords,
  },
  "/disclaimer": {
    title: "Disclaimer | PURO TECH Website Terms",
    description:
      "Review the PURO TECH disclaimer for website use, service scope limitations, portfolio references, and general legal information.",
    keywords: defaultKeywords,
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | PURO TECH",
    description:
      "Read the PURO TECH Terms and Conditions covering website usage, intellectual property, service scope, liability, and governing law.",
    keywords: defaultKeywords,
  },
};

function RouteFallback() {
  return (
    <main className="min-h-[60vh] bg-gradient-to-br from-black via-[#140406] to-black" />
  );
}

function App() {
  const location = useLocation();
  const blogSlug = location.pathname.startsWith("/blog/")
    ? location.pathname.split("/")[2]
    : null;
  const currentBlogPost = blogSlug ? getBlogPostBySlug(blogSlug) : null;

  const breadcrumbItems = useMemo(() => {
    const pathParts = location.pathname.split("/").filter(Boolean);

    return [
      { name: "Home", item: `${siteUrl}/` },
      ...pathParts.map((part, index) => {
        const path = `/${pathParts.slice(0, index + 1).join("/")}`;
        const isBlogSlug = pathParts[0] === "blog" && index === 1 && currentBlogPost;
        return {
          name:
            (isBlogSlug ? currentBlogPost.title : pathToLabel[part]) ||
            part
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase()),
          item: `${siteUrl}${path}`,
        };
      }),
    ];
  }, [currentBlogPost, location.pathname]);

  const currentPageMeta = useMemo(() => {
    if (currentBlogPost) {
      return {
        title: `${currentBlogPost.title} | PURO TECH Blog`,
        description: currentBlogPost.description,
        keywords: `${defaultKeywords}, ${currentBlogPost.category.toLowerCase()}, ${currentBlogPost.slug.replace(/-/g, " ")}`,
        ogType: "article",
      };
    }

    return (
      staticPageMeta[location.pathname] || {
        title: "PURO TECH | Digital Solutions",
        description:
          "PURO TECH builds fast digital solutions with web development, AI automation, and practical tech consultancy.",
        keywords: defaultKeywords,
      }
    );
  }, [currentBlogPost, location.pathname]);

  const canonical =
    location.pathname === "/" ? `${siteUrl}/` : `${siteUrl}${location.pathname}`;
  const pageUrl = `${siteUrl}${location.pathname}${location.search}`;
  const sharedImage = `${siteUrl}/og-image.webp`;

  const organizationSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PURO TECH",
      url: siteUrl,
      logo: `${siteUrl}/puro.svg`,
      sameAs: [
        "https://www.instagram.com/_puro.tech",
        "https://www.linkedin.com/in/swarnav-das-6929542bb/",
        "https://youtube.com/@puro_tech",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+91 8889287261",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
          url: `${siteUrl}/contact`,
        },
      ],
    }),
    []
  );

  const localBusinessSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "PURO TECH",
      image: sharedImage,
      url: `${siteUrl}/`,
      telephone: "+91 8889287261",
      email: "puro.tech.ofcl@gmail.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
      ],
      sameAs: organizationSchema.sameAs,
    }),
    [organizationSchema.sameAs, sharedImage]
  );

  const breadcrumbSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item,
      })),
    }),
    [breadcrumbItems]
  );

  const webPageSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: currentPageMeta.title,
      description: currentPageMeta.description,
      url: canonical,
      isPartOf: {
        "@type": "WebSite",
        name: "PURO TECH",
        url: `${siteUrl}/`,
      },
      about: {
        "@type": "Thing",
        name: "Web development, AI automation, software solutions, and tech consultancy",
      },
      publisher: {
        "@type": "Organization",
        name: "PURO TECH",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/puro.svg`,
        },
      },
    }),
    [canonical, currentPageMeta.description, currentPageMeta.title]
  );

  const websiteSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "PURO TECH",
      url: `${siteUrl}/`,
      description:
        "PURO TECH offers web development, AI automation, software solutions, and tech consultancy.",
    }),
    []
  );

  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a.replace(/\n/g, " "),
        },
      })),
    }),
    []
  );

  const blogCollectionSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "PURO TECH Blog",
      url: `${siteUrl}/blog`,
      description:
        "Insights from PURO TECH on web development, AI automation, software solutions, and digital growth.",
      blogPost: getAllBlogPosts().map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${siteUrl}/blog/${post.slug}`,
        datePublished: post.isoDate,
        description: post.description,
      })),
    }),
    []
  );

  const articleSchema = useMemo(() => {
    if (!currentBlogPost) {
      return null;
    }

    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: currentBlogPost.title,
      description: currentBlogPost.description,
      image: sharedImage,
      datePublished: currentBlogPost.isoDate,
      dateModified: currentBlogPost.isoDate,
      mainEntityOfPage: `${siteUrl}/blog/${currentBlogPost.slug}`,
      author: {
        "@type": "Organization",
        name: "PURO TECH",
      },
      publisher: {
        "@type": "Organization",
        name: "PURO TECH",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/puro.svg`,
        },
      },
      keywords: [
        "web development",
        "AI automation",
        "software solutions",
        currentBlogPost.category,
      ],
    };
  }, [currentBlogPost, sharedImage]);

  const schemas = useMemo(() => {
    const list = [
      organizationSchema,
      localBusinessSchema,
      breadcrumbSchema,
      webPageSchema,
    ];

    if (location.pathname === "/") {
      list.push(websiteSchema, faqSchema);
    }

    if (location.pathname === "/blog") {
      list.push(blogCollectionSchema);
    }

    if (articleSchema) {
      list.push(articleSchema);
    }

    return list;
  }, [
    articleSchema,
    blogCollectionSchema,
    breadcrumbSchema,
    faqSchema,
    localBusinessSchema,
    location.pathname,
    organizationSchema,
    webPageSchema,
    websiteSchema,
  ]);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const element = document.querySelector(location.hash);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location]);

  return (
    <>
      <SEOHead
        meta={{
          ...currentPageMeta,
          canonical,
          url: pageUrl,
          image: sharedImage,
          path: `${location.pathname}${location.search}`,
        }}
        schemas={schemas}
      />

      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutHeroSection />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
