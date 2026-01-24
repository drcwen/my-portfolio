import { FaCode } from "react-icons/fa6";


function SkillDetails({logo, skill, years, mastery, progress}) {
    return (
        <div className='min-w-full'>
            <div className='flex flex-col gap-3'>
                
                {/*Details*/}
                
                <div className='flex flex-row justify-between'>

                    <div className='flex flex-row items-center gap-2'>
                        {/*Logo*/ }
                        <div className='bg-white/5 rounded-lg p-2 border border-white/10 hover:border-[#7ffe5d]/50 transition-all duration-300'>
                            {logo}

                        </div>

                        <div className='flex flex-col'>
                            <h1 className='text-sm'>{skill}</h1>
                            <h1 className='text-xs text-white/50'>{years}</h1>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='bg-[#7ffe5d]/20 rounded-full p-1.5 px-3 border border-white/10 hover:border-[#7ffe5d]/50 transition-all duration-300'>
                            <h1 className='text-xs'>{mastery}</h1>
                        </div>
                    </div>

                </div>
                
                {/*Progress Bar*/}
                <div className='relative min-w-full min-h-1.5 bg-white/10 rounded-xl'>
                    <div
                        className="absolute top-0 left-0 h-1.5 bg-linear-to-r from-[#7ffe5d]/10 to-[#7ffe5d] rounded-lg transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
        
    )
}

export default SkillDetails;