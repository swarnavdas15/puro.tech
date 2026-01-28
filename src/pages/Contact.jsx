import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";
import FaqSection from "../components/FaqSection";

export default function Contact() {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const emailFromUrl = new URLSearchParams(location.search).get("email");
    if (emailFromUrl) setEmail(emailFromUrl);
  }, [location.search]);

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
  

  return (
      <>
   
    <section>
        <ContactHero />
      {/* Hero / Heading / Mascot */}
      <ContactForm email={email} />
    </section>
   <FaqSection id='FAQ' />
    </>
  );
}
