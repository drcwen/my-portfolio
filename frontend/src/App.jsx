import React from 'react'
import Navbar from '../layout/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'

const App = () => {
  

  return (
    <div className='min-h-screen bg-black'>

 

      <Navbar/>
        <Hero />
        <About />
      
    </div>
  )
}

export default App
