import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";

export default function Contact() {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const emailFromUrl = new URLSearchParams(location.search).get("email");
    if (emailFromUrl) setEmail(emailFromUrl);
  }, [location.search]);

  return (
    <section>
        <ContactHero />
      {/* Hero / Heading / Mascot */}
      <ContactForm email={email} />
    </section>
  );
}
