import { lazy, Suspense, useEffect, useState } from "react";
import Hero from "../components/Hero.jsx";
import AchievementSection from "../components/AchievementSection.jsx";
import FeaturedProjects from "../components/FeaturedProjects.jsx";
import JourneySection from "../components/JourneySection.jsx";
import FaqSection from "../components/FaqSection.jsx";

const TestimonialsSection = lazy(() => import("../components/TestimonalsSection.jsx"));
const CtaSection = lazy(() => import("../components/CtaSection.jsx"));
const AdModal = lazy(() => import("../components/AdModal"));
const AdContent = lazy(() => import("../components/AdContent"));

function Home() {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="Home" className="home-cont">
        <Hero />
        <AchievementSection />
        <FeaturedProjects />
        <JourneySection />
        <Suspense fallback={null}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={null}>
          <CtaSection />
          <FaqSection />
        </Suspense>
      </div>

      {showAd ? (
        <Suspense fallback={null}>
          <AdModal isOpen={showAd} onClose={() => setShowAd(false)}>
            <AdContent onClose={() => setShowAd(false)} />
          </AdModal>
        </Suspense>
      ) : null}
    </>
  );
}

export default Home;
