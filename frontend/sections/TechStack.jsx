import React from 'react'
import { SiMongodb } from "react-icons/si";
import StackContainer from '../ui/techstack/StackContainer'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";



const TechStack = () => {
  

  return (
    
    <div className='w-full items-center md:py-2 md:px-20 px-10 flex flex-col gap-10'>
        <div className='flex flex-col items-center text-center'>
            <h1 className='text-2xl font-semibold'>Tech Stack Expertise</h1>
            <h1 className='font-extralight'>Technologies I work with to build amazing products</h1>
        </div>
        
        <div className='w-full md:flex md:flex-row grid grid-cols-2 items-center justify-center gap-5'>

            <StackContainer deets={
                <div className='flex flex-col items-center text-center gap-2 min-w-21 h-14'>
                    <SiMongodb className='text-2xl' />
                    <h1>MongoDB</h1>
                </div>
            }/>

            <StackContainer deets={
                <div className='flex flex-col items-center text-center gap-2 min-w-21 h-14'>
                    <FaReact className='text-2xl'/>
                    <h1>React</h1>
                </div>
            }/>

            <StackContainer deets={
                <div className='flex flex-col items-center text-center gap-2 min-w-21 h-14'>
                    <RiTailwindCssFill className='text-2xl'/>
                    <h1 className='text-sm'>Tailwind CSS</h1>
                </div>
            }/>

            <StackContainer deets={
                <div className='flex flex-col items-center text-center gap-2 min-w-21 h-14'>
                    <FaNodeJs className='text-2xl' />
                    <h1>Node.js</h1>
                </div>
            }/>
        </div>
    </div>
  )
}

export default TechStack
