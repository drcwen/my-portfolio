import { MdLocationPin } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

function GlassInfo({ info, secondInfo }) {
    return (
        <div className='w-fit bg-gradient-to-r from-[#252e23] via-[#293722] to-[#2e4127] rounded-full border border-[#2e4127]'>
            
            <div className='px-9 py-3 flex flex-col gap-1/2'>
                <div className='flex flex-row items-center gap-2'>
                    <MdLocationPin />
                    <h1 className=''>{info}</h1>
                    
                </div>

                <div className='flex flex-row items-center gap-2'>
                    <FaCode />
                    <h1 className=''>{secondInfo}</h1>
                    
                </div>
            </div>

        </div>
    )
}

export default GlassInfo;