import LegalPageLayout from "../components/LegalPageLayout";

const sections = [
  {
    heading: "Introduction",
    paragraphs: [
      "By accessing or using the PURO TECH website, you agree to comply with and be bound by these Terms and Conditions. These terms govern your use of the website and any general interaction with information, content, contact forms, and related digital resources made available by PURO TECH.",
      "If you do not agree with any part of these Terms and Conditions, you should discontinue use of the website. Continued use of the website constitutes acceptance of these terms.",
    ],
  },
  {
    heading: "Website Usage",
    paragraphs: [
      "Users are expected to use the PURO TECH website responsibly, lawfully, and in a manner that does not interfere with website functionality, security, or accessibility for other visitors.",
      "You must not misuse website content, attempt unauthorised access, introduce malicious code, interfere with technical systems, copy protected materials without permission, or engage in any fraudulent, abusive, or unlawful activity through the website.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "All website content, including text, branding, graphics, layouts, designs, service descriptions, concepts, and other materials, belongs to PURO TECH unless stated otherwise.",
      "Unauthorised reproduction, redistribution, republication, or commercial use of any website material without prior written permission from PURO TECH is prohibited.",
    ],
  },
  {
    heading: "No Client Relationship",
    paragraphs: [
      "Visiting the website, reading information, submitting an enquiry, or communicating with PURO TECH through the website does not automatically create a client-service relationship, agency relationship, or formal contractual obligation.",
      "A professional engagement exists only when both parties agree to a defined scope through a formal proposal, contract, written approval, or service agreement.",
    ],
  },
  {
    heading: "Service Scope",
    paragraphs: [
      "Descriptions of web development, AI automation, software solutions, tech consultancy, and related services on the website are provided for general informational purposes.",
      "Actual deliverables, timelines, pricing, responsibilities, and project scope will be defined separately in proposals, quotations, statements of work, or signed agreements between PURO TECH and the client.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "PURO TECH shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from use of the website, inability to access the website, reliance on website information, or any technical interruption, delay, or inaccuracy.",
      "Website content is provided on an as-is and as-available basis without guarantees of uninterrupted operation, completeness, or suitability for any particular purpose.",
    ],
  },
  {
    heading: "Third Party Links",
    paragraphs: [
      "The website may include links to third-party websites, platforms, tools, or resources for convenience or reference.",
      "PURO TECH does not control and is not responsible for the content, availability, policies, or practices of external websites. Accessing such websites is at your own discretion and risk.",
    ],
  },
  {
    heading: "Governing Law",
    paragraphs: [
      "These Terms and Conditions are governed by and interpreted in accordance with the laws of India.",
      "Any disputes arising in connection with the website or these Terms and Conditions shall be subject to the jurisdiction of the courts of Kolkata, West Bengal.",
    ],
  },
  {
    heading: "Updates to Terms",
    paragraphs: [
      "PURO TECH may revise, update, or modify these Terms and Conditions at any time without prior notice.",
      "Users are encouraged to review this page periodically. Continued use of the website after updates are made will be treated as acceptance of the revised terms.",
    ],
  },
  {
    heading: "Contact Information",
    paragraphs: [
      "PURO TECH",
      "Location: Kolkata, West Bengal, India",
      "Phone: +91 8889287261",
    ],
  },
];

const asideItems = [
  {
    title: "Website Access",
    text: "Using the PURO TECH website means you agree to follow its usage rules and legal terms.",
  },
  {
    title: "Service Engagement",
    text: "A formal proposal or agreement is required before any client relationship or project commitment exists.",
  },
  {
    title: "Jurisdiction",
    text: "These terms are governed by Indian law and subject to the courts of Kolkata, West Bengal.",
  },
];

export default function TermsAndConditions() {
  return (
    <LegalPageLayout
      badge="Terms & Conditions"
      title="Terms & Conditions"
      intro="Understand the rules, usage policies, and legal terms that apply when accessing the PURO TECH website and related services."
      updatedOn="March 13, 2026"
      sections={sections}
      asideTitle="Terms Highlights"
      asideItems={asideItems}
    />
  );
}
