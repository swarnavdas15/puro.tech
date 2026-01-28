import { useEffect, useState } from "react";
import Hero from '../components/Hero.jsx'
import AchievementSection from '../components/AchievementSection.jsx'
import FeaturedProjects from '../components/FeaturedProjects.jsx'
import JourneySection from '../components/JourneySection.jsx'
import TestimonialsSection from '../components/TestimonalsSection.jsx'
import CtaSection from '../components/CtaSection.jsx'
import AdModal from "../components/AdModal";
import AdContent from "../components/AdContent";

function Home() {
 
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 10000); // 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div id='Home' className='home-cont'>
    
       <Hero />
         <AchievementSection />
         <FeaturedProjects />
         <JourneySection />
        <TestimonialsSection />
        <CtaSection />
    </div>
     <AdModal isOpen={showAd} onClose={() => setShowAd(false)}>
        <AdContent onClose={() => setShowAd(false)} />
      </AdModal>
      </>
  )
}

export default Home

