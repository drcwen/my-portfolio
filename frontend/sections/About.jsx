import React, {useState} from 'react'


const About = () => {
  

  return (
    <div className='md:grid md:grid-cols-2 bg-black'>
        {/*First Column*/}
        <div className='min-w-full min-h-screen md:py-2 md:px-20 px-10 flex flex-col gap-15'>
          
          {/*Glass*/}
          <div className='relative w-fit group'>
            <div className='absolute inset-0 bg-linear-to-br from-[#7ffe5d]/10 to-[#7ffe5d]/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
              <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#7ffe5d]/30 transition-all duration-300'>
                <div className='flex items-start gap-2'>
                  
                  <div className='p-3 bg-[#7ffe5d]/10 rounded-xl'>
                    <h1>Hello</h1>
                  </div>
                  
                  <div className='flex-1'>
                    <h1>Expertise</h1>
                  </div>

                </div>
              </div>
            
          </div>

          <div className='relative w-fit group'>
            <div className='absolute inset-1 bg-linear-to-br from-[#7ffe5d]/10 to-[#7ffe5d]/5 blur-xl rounded-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
              <div className='relative border border-white/5 rounded-xl bg-white/5 hover:border-[#7ffe5d]/30 transition-all duration-300'>
                <div className='p-6'>

                </div>
              </div>
          </div>
          
        </div>

        

        
    </div>
  )
}

export default About
