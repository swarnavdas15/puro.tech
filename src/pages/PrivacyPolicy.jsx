import LegalPageLayout from "../components/LegalPageLayout";

const sections = [
  {
    heading: "Introduction and Scope",
    paragraphs: [
      "At PURO TECH, we respect your privacy and are committed to protecting any personal information you choose to share with us. This Privacy Policy explains how we collect, use, and safeguard information when you interact with our website, contact forms, or digital services.",
      "This policy applies to information shared through the PURO TECH website and related communications concerning web development, AI automation, software solutions, and tech consultancy services.",
    ],
  },
  {
    heading: "Information We Collect",
    paragraphs: [
      "We may collect basic personal details such as your name, email address, phone number, company information, or project-related details when you voluntarily submit them through contact forms, emails, or direct communication.",
      "This information is collected solely for the purpose of responding to enquiries, evaluating project requirements, providing services, and maintaining professional communication.",
    ],
  },
  {
    heading: "How We Use Information",
    paragraphs: [
      "PURO TECH uses submitted information to respond to queries, prepare proposals, deliver agreed services, improve website performance, and maintain relevant business communication.",
      "We do not sell, rent, trade, or share your personal information with third parties for marketing or unrelated commercial purposes. Any data shared with us remains confidential and is used only within the scope of the requested discussion or service.",
    ],
  },
  {
    heading: "Data Protection and Security",
    paragraphs: [
      "As a freelancer-led technology business, we do not intentionally collect sensitive personal data such as financial details, government-issued identification, or payment credentials unless explicitly required for a contracted service and agreed upon in writing.",
      "While we take reasonable technical and organisational measures to protect your information, no method of transmission over the internet or electronic storage is completely secure. PURO TECH therefore cannot guarantee absolute security of data transmitted through the website.",
    ],
  },
  {
    heading: "Analytics, External Links, and Updates",
    paragraphs: [
      "We may use standard analytics tools, including website analytics integrations, to understand general usage patterns such as page visits, engagement, and traffic sources. This information is aggregated or anonymised and is used to improve content relevance, performance, and usability.",
      "Our website may also contain links to external or third-party websites. We do not control the content or privacy practices of those websites and encourage visitors to review their policies separately.",
      "By using this website, you acknowledge the privacy practices described in this Privacy Policy. PURO TECH reserves the right to update or modify this policy at any time to reflect changes in services, operations, or legal requirements.",
    ],
  },
];

const asideItems = [
  {
    title: "Business",
    text: "PURO TECH is a Kolkata-based digital services brand offering web development, AI automation, software solutions, and consultancy.",
  },
  {
    title: "Contact Data",
    text: "Information submitted through forms or email is used only for project communication, support, and service delivery.",
  },
  {
    title: "Analytics",
    text: "Website analytics may be used to improve user experience, technical performance, and page relevance.",
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      badge="Privacy Policy"
      title="Privacy Policy for PURO TECH"
      intro="Review how PURO TECH collects, uses, and protects information shared through our website, consultations, and digital services."
      updatedOn="March 13, 2026"
      sections={sections}
      asideTitle="Privacy Highlights"
      asideItems={asideItems}
    />
  );
}
