import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function ensureAnalytics() {
  if (!document.head.querySelector('script[data-ga-loader="true"]')) {
    const loader = document.createElement("script");
    loader.async = true;
    loader.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    loader.dataset.gaLoader = "true";
    document.head.appendChild(loader);
  }

  if (!document.head.querySelector('script[data-ga-config="true"]')) {
    const config = document.createElement("script");
    config.dataset.gaConfig = "true";
    config.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = window.gtag || gtag;
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
    `;
    document.head.appendChild(config);
  }
}

export default function SEOHead({ meta, schemas = [] }) {
  useEffect(() => {
    document.title = meta.title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: meta.description,
    });
    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: meta.keywords,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: meta.robots || "index, follow",
    });
    upsertMeta('meta[name="theme-color"]', {
      name: "theme-color",
      content: "#0b0203",
    });

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: meta.canonical,
    });

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: meta.ogTitle || meta.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: meta.ogDescription || meta.description,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: meta.ogType || "website",
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: meta.url,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: meta.image,
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "PURO TECH",
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: meta.twitterTitle || meta.ogTitle || meta.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: meta.twitterDescription || meta.ogDescription || meta.description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: meta.image,
    });

    ensureAnalytics();

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_title: meta.title,
        page_location: meta.url,
        page_path: meta.path,
      });
    }

    document.head
      .querySelectorAll('script[data-seo-schema="true"]')
      .forEach((node) => node.remove());

    schemas.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoSchema = "true";
      script.dataset.schemaIndex = String(index);
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [meta, schemas]);

  return null;
}
