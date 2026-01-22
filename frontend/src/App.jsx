import React from 'react'
import Navbar from '../layout/Navbar'
import Hero from '../sections/Hero'

const App = () => {
  

  return (
    <div className='min-h-screen bg-black'>

 

      <Navbar/>
      <div className='min-h-screen pt-24'>
        <Hero />
        <Hero />
      </div>
      
    </div>
  )
}

export default App
