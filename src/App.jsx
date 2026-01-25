import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import ProjectsSection from './pages/ProjectsSection'
import './App.css'

function App() {
  
  return (
    <>
     <Home />
     <ProjectsSection />
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <h1 className="text-4xl font-bold text-white">
        Tailwind + React + Vite Working
      </h1>
    </div>
    </>
  )
}

export default App
