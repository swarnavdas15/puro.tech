import LegalPageLayout from "../components/LegalPageLayout";

const sections = [
  {
    heading: "General Information",
    paragraphs: [
      "PURO TECH is an independent freelancer-led technology group operating under a sole proprietorship structure. All information provided on this website is published in good faith and is intended for general informational and professional reference purposes only.",
      "The content available on this website, including service descriptions, visuals, design concepts, examples, written material, and technical references, reflects our experience and understanding at the time of publication.",
    ],
  },
  {
    heading: "No Warranties or Guaranteed Outcomes",
    paragraphs: [
      "PURO TECH makes no representations or warranties of any kind regarding the completeness, accuracy, reliability, suitability, or availability of the information presented on this website.",
      "Any action you take upon the information found on this website is strictly at your own discretion and risk. PURO TECH shall not be held liable for any loss or damage, including indirect or consequential loss, data loss, business interruption, or financial loss arising from use of this website or reliance on its content.",
    ],
  },
  {
    heading: "Professional Scope and Service Limitations",
    paragraphs: [
      "While PURO TECH offers services related to web development, software solutions, AI automation, digital security, technical consultancy, audits, and related fields, nothing on this website should be considered legal, financial, regulatory, or guaranteed business advice.",
      "Project outcomes and results may vary depending on scope, technical requirements, third-party dependencies, implementation conditions, and client collaboration.",
    ],
  },
  {
    heading: "Business Structure, Third Parties, and Intellectual Property",
    paragraphs: [
      "References to we, our, or us on this website refer to the sole proprietor or associated freelance collaborators operating under the PURO TECH brand. PURO TECH is not a registered corporation, partnership, or multinational entity unless expressly stated otherwise.",
      "This website may contain links to third-party websites for convenience or additional reference. PURO TECH has no control over and assumes no responsibility for the content, policies, or practices of such external websites.",
      "All original content, branding, text, design elements, and website materials on this website are the intellectual property of PURO TECH unless otherwise stated. Unauthorised reproduction, redistribution, or misuse without prior written permission is prohibited.",
    ],
  },
  {
    heading: "Portfolio and Policy Updates",
    paragraphs: [
      "Concept projects, design explorations, and example works showcased on this website are intended for demonstration and portfolio purposes only and may not represent live client deployments unless clearly stated.",
      "By using this website, you acknowledge that you have read, understood, and agreed to this disclaimer. PURO TECH reserves the right to update or modify this disclaimer at any time without prior notice.",
    ],
  },
];

const asideItems = [
  {
    title: "Use of Content",
    text: "Website information is for general reference and should not be treated as guaranteed technical, legal, or financial advice.",
  },
  {
    title: "Service Scope",
    text: "Project results depend on requirements, implementation conditions, and collaboration, so outcomes may vary.",
  },
  {
    title: "External Links",
    text: "Third-party websites linked from PURO TECH are outside our control and governed by their own policies.",
  },
];

export default function Disclaimer() {
  return (
    <LegalPageLayout
      badge="Legal Disclaimer"
      title="Website Disclaimer for PURO TECH"
      intro="Understand the legal scope, limitations, and content-use conditions that apply when you browse the PURO TECH website or rely on website information."
      updatedOn="March 13, 2026"
      sections={sections}
      asideTitle="Disclaimer Highlights"
      asideItems={asideItems}
    />
  );
}
