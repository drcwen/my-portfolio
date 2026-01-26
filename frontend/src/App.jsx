import React from 'react'
import Navbar from '../layout/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Techstack from '../sections/TechStack'
import Projects from '../sections/Projects'
const App = () => {
  

  return (
    <div className='min-h-screen bg-black'>
      <Navbar/>
      <Hero />
      <About />
      <Techstack />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
