import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import NotFound from "./components/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import AboutHeroSection from "./pages/AboutHeroSection";
import Contact from "./pages/Contact";

import "./App.css";

function App() {

  const location = useLocation();
  const siteUrl = "https://puro-tech.vercel.app";
  const pathToLabel = {
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
    "privacy-policy": "Privacy Policy",
    disclaimer: "Disclaimer",
  };
  const pageMeta = {
    "/": {
      name: "PURO Tech | Digital Solutions",
      description:
        "PURO Tech builds secure, scalable digital products including web development, automation, AI integrations, and consultancy.",
    },
    "/services": {
      name: "Services | PURO Tech",
      description:
        "Explore PURO Tech services including web development, automation, mobile apps, consultancy, audits, and security solutions.",
    },
    "/portfolio": {
      name: "Portfolio | PURO Tech",
      description:
        "View featured PURO Tech projects and product concepts built for performance, reliability, and growth.",
    },
    "/about": {
      name: "About | PURO Tech",
      description:
        "Learn about PURO Tech's mission, approach, and focus on practical, high-performance digital execution.",
    },
    "/contact": {
      name: "Contact | PURO Tech",
      description:
        "Contact PURO Tech to discuss your project, requirements, and implementation roadmap.",
    },
    "/privacy-policy": {
      name: "Privacy Policy | PURO Tech",
      description:
        "Read the PURO Tech privacy policy for details on data handling, user privacy, and protection practices.",
    },
    "/disclaimer": {
      name: "Disclaimer | PURO Tech",
      description:
        "Read the PURO Tech disclaimer for terms, limitations, and website usage clarifications.",
    },
  };

  const pathParts = location.pathname.split("/").filter(Boolean);
  const breadcrumbItems = [
    { name: "Home", item: `${siteUrl}/` },
    ...pathParts.map((part, index) => {
      const path = `/${pathParts.slice(0, index + 1).join("/")}`;
      return {
        name:
          pathToLabel[part] ||
          part.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
        item: `${siteUrl}${path}`,
      };
    }),
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PURO Tech",
    url: siteUrl,
    logo: `${siteUrl}/puro.svg`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: `${siteUrl}/contact`,
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
  const currentPageMeta = pageMeta[location.pathname] || {
    name: "PURO Tech",
    description:
      "PURO Tech builds secure and scalable digital systems for modern businesses.",
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: currentPageMeta.name,
    description: currentPageMeta.description,
    url: `${siteUrl}${location.pathname}`,
    isPartOf: {
      "@type": "WebSite",
      name: "PURO Tech",
      url: `${siteUrl}/`,
    },
    publisher: {
      "@type": "Organization",
      name: "PURO Tech",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/puro.svg`,
      },
    },
  };

   useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  }, [location]);


  useEffect(() => {
  // Disable right click
  const disableRightClick = (e) => e.preventDefault();
  document.addEventListener("contextmenu", disableRightClick);

  // Disable DevTools shortcuts
  const disableKeys = (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
    }
  };
  document.addEventListener("keydown", disableKeys);

  return () => {
    document.removeEventListener("contextmenu", disableRightClick);
    document.removeEventListener("keydown", disableKeys);
  };
}, []);


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {/* Global */}
      <Navbar />
      <ScrollToTop />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutHeroSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />


        {/* Optional 404 */}
        <Route
          path="*"
          element={
           <NotFound />
          }
        />
      </Routes>

      {/* Global */}
      <Footer />
    </>
  );
}

export default App;
