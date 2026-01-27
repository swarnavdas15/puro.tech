import React from 'react'
import Hero from '../components/Hero.jsx'
import AchievementSection from '../components/AchievementSection.jsx'
import FeaturedProjects from '../components/FeaturedProjects.jsx'
import JourneySection from '../components/JourneySection.jsx'
import TestimonialsSection from '../components/TestimonalsSection.jsx'
import CtaSection from '../components/CtaSection.jsx'

function Home() {
  return (
    <div id='Home' className='home-cont'>
    
       <Hero />
         <AchievementSection />
         <FeaturedProjects />
         <JourneySection />
        <TestimonialsSection />
        <CtaSection />
    </div>
  )
}

export default Home

