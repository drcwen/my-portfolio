import React, {useState} from 'react'
import GlassInfo from '../ui/hero/GlassInfo'
import { BsStars } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import Glass from '../ui/about/Glass'


const About = () => {
  

  return (
    <div className='md:grid md:grid-cols-2 bg-black'>

        {/*First Column*/}
        <div className='min-w-full min-h-screen md:py-2 md:px-20 px-10 flex flex-col gap-15'>
          
          <div className='min-w-full min-h-screen flex flex-col justify-center gap-10'>
            
            <GlassInfo info="React Developer & Full Stack Developer" secondInfo="Based in Manila, Philippines"/>

            <div className=''>
              <h1 className='text-5xl'>Crafting Digital Experience That Matter</h1>
            </div>

            <div className=''>
              <h1 className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum, turpis vitae interdum tincidunt, turpis sem porta urna, in laoreet quam metus quis justo. Ut tempus orci a nulla rhoncus, eget iaculis lacus hendrerit. Vivamus cursus dolor eget quam volutpat, ut aliquam diam interdum. Ut nisl mauris, tincidunt ut lacus nec, eleifend posuere metus. Quisque cursus semper mi in pellentesque. Integer sit amet rhoncus est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque nec eros ultrices, sodales massa non, viverra metus. Mauris semper nunc auctor mi vulputate placerat. Fusce dignissim ultricies sem id fermentum. </h1>
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
        </div>

        {/*Second Column*/}

        <div className='min-w-full min-h-screen md:py-2 md:px-20 px-10 flex flex-col gap-5 justify-center'>

          {/*Glass*/}
          <Glass deets={
            <div className='flex items-start gap-4'>
                
                <div className='p-3 bg-[#7ffe5d]/10 rounded-xl'>
                  <FaCode className='text-[#7ffe5d]'/>
                </div>
                
                <div className='flex flex-col gap-3'>
                  <h1 className='text-md'>Expertise</h1>
                  <h1 className='text-sm font-extralight'>Donec gravida ac felis nec semper. Vestibulum tincidunt porta imperdiet. Praesent sollicitudin congue sodales. Praesent ultrices arcu id libero imperdiet sodalesz</h1>
                </div>

              </div>
          }/>

          <div className='grid grid-cols-2 flex flex-row gap-5'>
            
            {/*Glass*/}
            <Glass
              deets={
                <div className="flex flex-col justify-start items-start gap-4">
                  {/* Icon */}
                  <div className="p-3 bg-[#7ffe5d]/10 rounded-xl">
                    <FaCode className="text-[#7ffe5d] text-xl" />
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col gap-1">
                    <h1 className="text-md font-semibold">Expertise</h1>
                    <h1 className="text-sm font-extralight">
                      React Developer & Full Stack Developer
                    </h1>
                  </div>
                </div>
              }
            />


            {/*Glass*/}
            <Glass deets={
              <div className='flex flex-col items-start gap-4'>
                  
                <div className='p-3 bg-[#7ffe5d]/10 rounded-xl'>
                  <FaCode className='text-[#7ffe5d]'/>
                </div>
                
                <div className='flex flex-col gap-3'>
                  <h1 className='text-md'>Expertise</h1>
                  <h1 className='text-sm font-extralight'></h1>
                </div>

              </div>}/>
        
          </div>

          <Glass deets={
            <div className='grid grid-cols-3 items-center gap-5 items-center justify-between'>
                
              <div className='flex flex-col items-center text-center'>
                <h1 className='font-semibold text-[#7ffe5d] text-2xl'>100%</h1>
                <h1 className='text-xs items-center'>Client Satisfaction</h1>
              </div>

              <div className='flex flex-col items-center text-center'>
                <h1 className='font-semibold text-[#7ffe5d] text-2xl'>100%</h1>
                <h1 className='text-xs'>Client Satisfaction</h1>
              </div>

              <div className='flex flex-col items-center text-center'>
                <h1 className='font-semibold text-[#7ffe5d] text-2xl'>100%</h1>
                <h1 className='text-xs'>Client Satisfaction</h1>
              </div>

            </div>

          }/>

        </div>

    </div>

        
        

  )
}

export default About
