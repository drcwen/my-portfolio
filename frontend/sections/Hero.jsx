import React from 'react'
import GlassInfo from '../ui/hero/GlassInfo'

const Hero = () => {
  

  return (
    
    <div className='relative'>
      
      <div className='relative z-0'>
        <div class="absolute top-10 h-full w-full bg-black"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#2e4127] opacity-50 blur-[80px]"></div></div>
      </div>
      
      <div className='md:grid md:grid-cols-2 md:py-2 md:px-20 px-10 flex flex-col gap-15 pt-16 md:pt-10'>
        
        {/*First Column*/}
        <div className='min-w-full min-h-screen flex flex-col gap-12 md:gap-10 justify-center z-10'>
          
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
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              
              <div className='flex flex-row justify-between'>

                <div className='flex flex-col gap-0.5'>
                  <h1 className='text-3xl font-semibold text-[#7ffe5d]'>3+</h1>
                  <h1>Years Experience</h1>
                </div>

                <div className='w-0.5 h-auto bg-white'></div>

              </div>

              <div className='flex flex-row justify-between'>

                <div className='flex flex-col gap-0.5'>
                  <h1 className='text-3xl font-semibold text-[#7ffe5d]'>3+</h1>
                  <h1>Years Experience</h1>
                </div>

                <div className='w-0.5 h-auto bg-white'></div>

              </div>

              <div className='flex flex-row justify-between'>

                <div className='flex flex-col gap-0.5'>
                  <h1 className='text-3xl font-semibold text-[#7ffe5d]'>3+</h1>
                  <h1>Years Experience</h1>
                </div>

                <div className='w-0.5 h-auto bg-white'></div>

              </div>

              <div className='flex flex-row justify-between'>

                <div className='flex flex-col gap-0.5'>
                  <h1 className='text-3xl font-semibold text-[#7ffe5d]'>3+</h1>
                  <h1>Years Experience</h1>
                </div>

                <div className='w-0.5 h-auto bg-white hidden'></div>

              </div>

            
          </div>
        </div>

        {/*Second Column*/}
        <div className='min-w-full min-h-screen flex flex-col z-10'>
          
          <div className='min-w-full min-h-screen flex items-center justify-center'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBb_AlOmXPU2zfOerDmYpwIwkwSBE00oqwg&s'
            className='w-100 rounded-4xl border border-white/30 hover:border-[#7ffe5d]/50 transition-all duration-300'/>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Hero
