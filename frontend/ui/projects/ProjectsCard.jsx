import { CiShare1 } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { IoIosStats } from "react-icons/io";

function ProjectsCard({image, category, name, stack, info}) {
    return (
        <div className='min-w-full h-fit rounded-xl border border-white/20 bg-white/5 hover:border-[#7ffe5d]/50 hover:bg-white/10 transition-all duration-300'>
            <div className='flex flex-col'>
                <div className='relative'>
                    <img 
                        className='rounded-tl-xl rounded-tr-xl min-h-64'
                        src={image}
                        />

                    <div className='absolute w-fit top-3 left-3 rounded-full bg-black/50 py-1 px-3 border border-white/20'>
                        <h1 className='text-xs'>{category}</h1>
                    </div>

                    <div className='absolute w-fit bottom-3 right-3'>
                        <div className='flex flex-row gap-2'>
                            <div className='p-2 border border-white/20 rounded-lg bg-white/5 hover:border-[#7ffe5d]/20 hover:bg-[#7ffe5d]/10 transition-all duration-300'>
                                <CiShare1 />
                            </div>
                            <div className='p-2 border border-white/20 rounded-lg bg-white/5 hover:border-[#7ffe5d]/20 hover:bg-[#7ffe5d]/10 transition-all duration-300'>
                                <VscGithubAlt />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col p-5 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold'>{name}</h1>
                        <h1 className='font-extralight text-white/50 text-xs'>Full-stack online shopping application with real-time inventory management secure payment processing.</h1>
                    </div>

                    <div className='flex flex-row'>
                        <div className='w-fit bg-[#7ffe5d]/20 text-xs rounded-xl border border-[#7ffe5d]/40 px-3 py-1'>
                            <h1>{stack}</h1>
                        </div>
                    </div>

                    <div className='min-w-full h-0.5 bg-white/10'/>

                    <div className='flex flex-row gap-2 items-center'>
                        <IoIosStats className='text-sm text-[#7ffe5d]/70'/>
                        <h1 className='text-xs text-sm text-[#7ffe5d]/70 '>{info}</h1>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default ProjectsCard;