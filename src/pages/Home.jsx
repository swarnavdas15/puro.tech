import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import AchievementSection from '../components/AchievementSection.jsx'

function Home() {
  return (
    <div className='home-cont'>
      <Navbar />
       <Hero />
        <AchievementSection />
    </div>
  )
}

export default Home

