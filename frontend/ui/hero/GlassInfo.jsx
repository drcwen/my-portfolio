import { MdLocationPin } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

function GlassInfo({ info, secondInfo }) {
    return (
        <div className='w-fit bg-gradient-to-r from-[#000000] to-[#1b4f05] md:from-[#1b4f05] md:to-[#000000] rounded-2xl border border-[#6fd93f]'>
            
            <div className='px-6 py-3 flex flex-col gap-1/2'>
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