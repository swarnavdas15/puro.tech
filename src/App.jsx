import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import AboutHeroSection from './pages/AboutHeroSection'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import './App.css'

function App() {
  
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <Services />
      <Portfolio />
      <AboutHeroSection />
      <Contact />
    </>
  )
}

export default App
