import { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      q: "What does PURO Tech do exactly?",
      a: `PURO Tech provides web solutions, AI automations, tech consultancy, website analysis, technical support, and digital security.
Our focus is on helping businesses use technology in a clear, practical, and reliable way.`,
    },
    {
      q: "Do you build only websites or full digital systems?",
      a: `We primarily build business-focused websites, but we also help with automation, optimisation, and system improvements where required.
We recommend solutions based on actual needs, not trends.`,
    },
    {
      q: "What kind of AI automations do you offer?",
      a: `We work on practical AI automations such as enquiry handling, workflow automation, internal process simplification, and basic AI integrations.
We avoid unnecessary or overly complex AI setups.

AI should save time, not create confusion.`,
    },
    {
      q: "What is included in your free website analysis?",
      a: `Our free website analysis covers:

• Website speed and performance  
• User clarity and trust signals  
• Mobile experience  
• Basic SEO and security observations  

It helps identify why a website may not be generating enquiries.`,
    },
    {
      q: "Do you provide tech consultancy for non-technical business owners?",
      a: `Yes.
Our consultancy is designed for business owners who want clear guidance on what technology they should or should not use, without technical jargon.`,
    },
    {
      q: "Can you help if my website was built earlier but is no longer live?",
      a: `Absolutely.
We analyse why the website became inactive and suggest a simple, low-maintenance solution to bring it back online in a stable way.`,
    },
    {
      q: "Do you offer ongoing tech support?",
      a: `Yes.
We provide technical support and guidance to ensure your website and digital setup remain stable, secure, and updated over time.`,
    },
    {
      q: "How do you handle digital security?",
      a: `We focus on essential digital security practices, including website safety, secure configurations, and trust signals that protect both users and business data.`,
    },
    {
      q: "How is pricing decided for your services?",
      a: `Pricing depends on the scope, complexity, and support requirements of the project.
We follow a transparent pricing model with no hidden costs.`,
    },
    {
      q: "How can I get started with PURO Tech?",
      a: `You can contact us via WhatsApp or the website contact form.
We start by understanding your requirement and then suggest the most suitable next step.`,
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="relative w-full py-28 bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Honest answers to common questions about our services,
            approach, and how we help businesses make better
            technology decisions.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((item, i) => {
            const active = open === i;

            return (
              <div
                key={i}
                className={`
                  relative
                  rounded-2xl
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  transition-all duration-300
                  ${active ? "border-red-500/40" : ""}
                `}
              >
                {/* Red accent line */}
                <div
                  className={`
                    absolute left-0 top-0 h-full w-[3px]
                    bg-red-600
                    transition-opacity duration-300
                    ${active ? "opacity-100" : "opacity-0"}
                  `}
                />

                {/* Question */}
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="
                    w-full px-7 py-6
                    flex items-start justify-between gap-6
                    text-left
                  "
                >
                  <span className="text-white font-medium leading-snug">
                    {item.q}
                  </span>

                  <span
                    className={`
                      text-red-600 text-xl
                      transition-opacity
                      ${active ? "opacity-100" : "opacity-60"}
                    `}
                  >
                    {active ? "–" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                  `}
                >
                  <div className="overflow-hidden px-7 pb-7 text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute -right-40 bottom-0 w-[420px] h-[420px] bg-red-600/20 blur-[160px] rounded-full" />
    </section>
  );
}
