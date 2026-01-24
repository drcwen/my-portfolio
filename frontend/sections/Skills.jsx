
import React, {useState} from 'react'
import Glass from '../ui/Skills/Glass'
import SkillDetails from '../ui/Skills/SkillDetails'
import { FaCode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { IoIosGitMerge } from "react-icons/io";
import { FaFigma } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";


const Skills = () => {
  

  return (
    <div className='min-w-full min-h-screen'>
        <div className='flex flex-col md:py-2 md:px-40 px-10 min-h-screen justify-center gap-15 py-30 md:py-0'>

            <div className='flex flex-col items-center text-center gap-3'>
                <h1 className='text-5xl font-light'>Skills & Technologies</h1>
                <h1 className='font-extralight text-white/75'>Technologies I work with to build amazing products</h1>
            </div>

            <div className='md:grid md:grid-cols-3 flex flex-col gap-5'>
                <Glass deets={
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col-2 gap-2'>
                            <div className='w-1 bg-linear-to-b from-[#7ffe5d]/50 to-[#7ffe5d]/5 rounded-sm'>
                                
                            </div>
                            
                            <div className=''>
                                <h1 className='py-2 text-xl'>Frontend Development</h1>
                            </div>
                        </div>
                        
                        <div className='w-full h-0.5 bg-white/5'/>

                        <div className='flex flex-col gap-5'>
                            <SkillDetails logo={<FaCode/>} skill="React.js" years="3+ years" mastery="Expert" progress="75"/>
                            <SkillDetails logo={<IoLogoJavascript/>} skill="JavaScript" years="3+ years" mastery="Expert" progress="100"/>
                            <SkillDetails logo={<RiTailwindCssFill/>} skill="Tailwind CSS" years="3+ years" mastery="Expert" progress="75"/>
                        </div>
                        
                    </div>

                    
                }/>



                <Glass deets={
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col-2 gap-2'>
                            <div className='w-1 bg-linear-to-b from-[#7ffe5d]/50 to-[#7ffe5d]/5 rounded-sm'>
                                
                            </div>
                            
                            <div className=''>
                                <h1 className='py-2 text-xl'>Backend & APIs</h1>
                            </div>
                        </div>
                        
                        <div className='w-full h-0.5 bg-white/5'/>

                        <div className='flex flex-col gap-5'>
                            <SkillDetails logo={<FaNodeJs/>} skill="Node.js" years="3+ years" mastery="Expert" progress="75"/>
                            <SkillDetails logo={<CiGlobe/>} skill="REST APIs" years="3+ years" mastery="Expert" progress="100"/>
                        </div>
                        
                    </div>

                }/>

                <Glass deets={
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col-2 gap-2'>
                            <div className='w-1 bg-linear-to-b from-[#7ffe5d]/50 to-[#7ffe5d]/5 rounded-sm'>
                                
                            </div>
                            
                            <div className=''>
                                <h1 className='py-2 text-xl'>Tools & Others</h1>
                            </div>
                        </div>
                        
                        <div className='w-full h-0.5 bg-white/5'/>

                        <div className='flex flex-col gap-5'>
                            <SkillDetails logo={<IoIosGitMerge/>} skill="Git & GitHub" years="3+ years" mastery="Expert" progress="75"/>
                            <SkillDetails logo={<FaFigma/>} skill="Figma" years="3+ years" mastery="Expert" progress="100"/>
                            <SkillDetails logo={<IoIosRocket/>} skill="Vite" years="3+ years" mastery="Expert" progress="100"/>
                        </div>
                        
                    </div>
                }/>
            </div>
        </div>
    </div>
        
        

  )
}

export default Skills
