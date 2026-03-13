import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";
import FaqSection from "../components/FaqSection";

export default function Contact() {
  const location = useLocation();

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
      <section>
        <ContactHero />
        <ContactForm />
      </section>
      <FaqSection id="FAQ" />
    </>
  );
}
