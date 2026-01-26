
import React, {useState} from 'react'
import { MdOutlineWorkOutline } from "react-icons/md";
import CategoryGlass from '../ui/projects/CategoryGlass'
import { CiAt } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { LuPalette } from "react-icons/lu";
import { HiOutlineLightningBolt } from "react-icons/hi";
import ProjectsCard from '../ui/projects/ProjectsCard'

const Projects = () => {
  

  return (
    <div className=''>

            <div className='min-h-screen flex flex-col items-center justify-center gap-10 md:px-30 md:pt-25 px-10'>

                {/*Work*/}
                <div className='bg-[#7ffe5d]/10 w-fit border border-[#7ffe5d]/50 rounded-full px-4 py-2 flex flex-row items-center gap-2'>
                    <MdOutlineWorkOutline className='text-[#7ffe5d]/100 text-sm'/>
                    <h1 className='text-[#7ffe5d]/100 text-sm'>My Work</h1>
                </div>

                {/*Headline*/}
                <div className='text-center'>
                    <h1 className='text-4xl'>Featured Projects</h1>
                    <h1 className='text-md text-white/50 font-extralight'>Showcasing my best work and achievement</h1>
                </div>

                <div className='grid grid-cols-2 md:flex md:flex-row gap-3 place-items-center'>
                    <CategoryGlass myIcon={<CiAt />} deets="All"/>
                    <CategoryGlass myIcon={<CiGlobe />} deets="Web Apps" />
                    <CategoryGlass myIcon={<LuPalette />} deets="UI Components" />
                    <CategoryGlass myIcon={<HiOutlineLightningBolt />} deets="Full Stack" />
                </div>

                <div className='md:grid md:grid-cols-3 min-w-full gap-6 flex flex-col'>
                    <ProjectsCard image="https://media.istockphoto.com/id/1360570134/photo/young-man-looking-at-laptop-screen-in-dark-room.jpg?s=612x612&w=0&k=20&c=C7TrwAiRAMC2SKMICX_fEcrjoEmMG6Q4DuRhDZM09a4="
                        category="Full Stack"
                        name="E-Commerce Platform"
                        stack="React"
                        info="Yes"/>
                    
                    <ProjectsCard image="https://media.istockphoto.com/id/1316372316/photo/shot-of-a-young-businessman-using-a-laptop-during-a-late-night-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=Xb5GLJ9Eh1Y68m6I0eV6IWsx8PnJbTFfRS9lfghqPYY="
                        category="Full Stack"
                        name="E-Commerce Platform"
                        stack="React"
                        info="Yes"/>

                    <ProjectsCard image="https://media.gettyimages.com/id/2168425495/photo/male-portrait-of-a-black-man-indoors-with-dark-light-during-the-night-lifestyle-photography.jpg?s=1024x1024&w=gi&k=20&c=I9xYq2zyKesraA99VrdMcdJ_cjf_4lLre4OGXRdSWMI="
                        category="Full Stack"
                        name="E-Commerce Platform"
                        stack="React"
                        info="Yes"/>
                </div>
            </div>

    </div>
  )
}

export default Projects
