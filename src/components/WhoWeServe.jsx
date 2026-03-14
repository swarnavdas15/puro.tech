import React from "react";

const WhoWeServe = ({ onSelectService }) => {
   const services = [
  {
    title: "Real Estate Services",
    description:
      "High-conversion digital ecosystem designed to generate, manage, and convert property leads efficiently.",
    price: "₹18,000 – ₹55,000+",
    features: [
      "Custom Real Estate Website",
      "Property Listing Management System",
      "Lead Capture + CRM Integration",
      "WhatsApp Auto-Response Setup",
      "Google Ads Landing Page",
      "Local SEO Optimization",
      "Virtual Tour Integration",
      "1 Month Technical Support"
    ],
  },
  {
    title: "Health Care Services",
    description:
      "Digital infrastructure for clinics, hospitals, and diagnostic centers to automate appointments and improve visibility.",
    price: "₹20,000 – ₹60,000+",
    features: [
      "Appointment Booking System",
      "Doctor Profile Pages",
      "Patient Inquiry Dashboard",
      "SMS / WhatsApp Reminders",
      "Google Maps SEO Optimization",
      "Health Package Landing Pages",
      "Performance & Security Optimization"
    ],
  },
  {
    title: "Educational Institutions",
    description:
      "Structured admission and inquiry management systems for schools and coaching institutes.",
    price: "₹22,000 – ₹65,000+",
    features: [
      "Admission Funnel System",
      "Student Inquiry Dashboard",
      "Notice & Announcement Panel",
      "Result / Student Portal",
      "WhatsApp Automation",
      "Local SEO Setup",
      "Hosting & Deployment"
    ],
  },
  {
    title: "Fashion Startups",
    description:
      "Brand-focused e-commerce systems for fashion labels aiming to scale digitally.",
    price: "₹25,000 – ₹70,000+",
    features: [
      "Custom or Shopify E-commerce Store",
      "Product Catalog Management",
      "Payment Gateway Integration",
      "Instagram Shop Integration",
      "Brand Identity Setup",
      "Speed Optimization",
      "Basic Conversion Optimization"
    ],
  },
  {
    title: "Handcraft Startups",
    description:
      "Digital storefronts for handmade and artisan brands looking to expand nationally and globally.",
    price: "₹5,000 – ₹50,000+",
    features: [
      "Lightweight E-commerce Website",
      "International Payment Setup",
      "Inventory Dashboard",
      "SEO for Handmade Products",
      "Export-ready Product Pages",
      "Mobile Optimization"
    ],
  },
  {
    title: "D2C Businesses",
    description:
      "Conversion-driven sales funnel systems for direct-to-consumer brands.",
    price: "₹30,000 – ₹85,000+",
    features: [
      "High-Converting Product Pages",
      "Sales Funnel Architecture",
      "Abandoned Cart Automation",
      "Analytics & Conversion Tracking",
      "Upsell & Cross-Sell Logic",
      "Performance Optimization"
    ],
  },
  {
    title: "Digital Marketing Agencies",
    description:
      "Portfolio, automation, and white-label dashboards for marketing agencies.",
    price: "₹20,000 – ₹60,000+",
    features: [
      "Agency Portfolio Website",
      "White-label Client Dashboard",
      "Automated Reporting Setup",
      "Lead Capture System",
      "SEO Structure Optimization",
      "Landing Page Templates"
    ],
  },
  {
    title: "E-Commerce Brands",
    description:
      "Optimized online stores designed to improve trust, speed, and checkout conversions.",
    price: "₹28,000 – ₹75,000+",
    features: [
      "Conversion-Optimized Store Design",
      "Speed & Core Web Vitals Optimization",
      "Secure Payment Integration",
      "Review & Rating System",
      "Trust Badge Implementation",
      "Automated Email Flows"
    ],
  },
  {
    title: "Finance & CA Firms",
    description:
      "Professional digital presence with secure inquiry and client management systems.",
    price: "₹18,000 – ₹45,000+",
    features: [
      "Professional Corporate Website",
      "Client Inquiry Dashboard",
      "Secure Document Upload System",
      "SEO for Financial Keywords",
      "Appointment Booking System"
    ],
  },
  {
    title: "Local Service Providers",
    description:
      "Lead-generating websites for gyms, interior designers, event planners, and other service businesses.",
    price: "₹15,000 – ₹40,000+",
    features: [
      "Service Showcase Website",
      "Lead Capture Funnel",
      "Google Business Optimization",
      "WhatsApp Inquiry Automation",
      "Performance Optimization"
    ],
  }
];
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl font-bold">
          Who We <span className="text-[#E10600]">Empower</span>
        </h2>
        <p className="mt-4 text-gray-400">
          We build tailored digital solutions for startups and businesses across industries, helping them grow and succeed in the digital world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => onSelectService(service)}
            className="cursor-pointer rounded-2xl p-[1px] bg-gradient-to-br from-[#E10600]/40 to-transparent"
          >
            <div className="bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-[#E10600] transition">
              <h3 className="text-xl font-semibold hover:text-[#E10600] transition">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mt-3">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeServe;