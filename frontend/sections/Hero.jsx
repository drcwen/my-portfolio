import React from 'react'
import GlassInfo from '../ui/hero/GlassInfo'

const Hero = () => {
  

  return (
    
    <div className='md:grid md:grid-cols-2 md:py-2 md:px-20 py-2 px-10 flex flex-col gap-15'>
      
      {/*First Column*/}
      <div className='w-full flex flex-col gap-8 md:gap-10'>
        
        {/*Glass*/}
        <GlassInfo info="React Developer & Full Stack Developer" secondInfo="Based in Manila, Philippines"/>

        {/*Heading*/}
        <h1 className='text-5xl md:text-7xl'>
          React.js Developer Portfolio
        </h1>

        {/*Definition*/}
        <h1 className='md:text-xl text-lg font-extralight md:mr-20'>
          Building modern, scalable web applications with React, JavaScript, and cutting-edge technologies. Transforming ideas into exceptional digital experience.
        </h1>

        {/*Button*/}
        <div className='w-fit h-auto bg-white rounded-xl px-2 py-2'>
          <h1 className='text-black font-semibold'>Get in Touch</h1>
        </div>
    
        {/*Years*/}
        <div className='grid grid-cols-4 gap-4'>
          
          <div className='flex flex-row justify-between'>

            <div className='flex flex-col gap-0.5'>
              <h1 className='text-3xl font-semibold text-[#58e01b]'>3+</h1>
              <h1>Years Experience</h1>
            </div>

            <div className='w-0.5 h-auto bg-white'></div>

          </div>

          <div className='flex flex-row justify-between'>

            <div className='flex flex-col gap-0.5'>
              <h1 className='text-3xl font-semibold text-[#58e01b]'>3+</h1>
              <h1>Years Experience</h1>
            </div>

            <div className='w-0.5 h-auto bg-white'></div>

          </div>

          <div className='flex flex-row justify-between'>

            <div className='flex flex-col gap-0.5'>
              <h1 className='text-3xl font-semibold text-[#58e01b]'>3+</h1>
              <h1>Years Experience</h1>
            </div>

            <div className='w-0.5 h-auto bg-white'></div>

          </div>

          <div className='flex flex-row justify-between'>

            <div className='flex flex-col gap-0.5'>
              <h1 className='text-3xl font-semibold text-[#58e01b]'>3+</h1>
              <h1>Years Experience</h1>
            </div>

            <div className='w-0.5 h-auto bg-white hidden'></div>

          </div>

        </div>
      </div>

      {/*Second Column*/}
      <div className='w-full flex'>
        
        <div className='w-full flex items-center justify-center'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBb_AlOmXPU2zfOerDmYpwIwkwSBE00oqwg&s'
          className='w-100 rounded-4xl border border-[#58e01b]'/>

        </div>

      </div>
    </div>
  )
}

export default Hero
