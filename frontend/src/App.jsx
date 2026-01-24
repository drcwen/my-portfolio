import React from 'react'
import Navbar from '../layout/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Techstack from '../sections/TechStack'
const App = () => {
  

  return (
    <div className='min-h-screen bg-black'>

 

      <Navbar/>
        <Hero />
        <About />
        <Techstack />
        <Skills />
    </div>
  )
}

export default App
