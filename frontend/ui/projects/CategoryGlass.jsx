

function CategoryGlass({deets, myIcon}) {
    return (
        <div className='relative group'>
            <div className='absolute inset-0 bg-linear-to-br from-[#7ffe5d]/10 to-[#7ffe5d]/5 rounded-full blur-xl opacity-75 group-hover:opacity-120 transition-opacity duration-300'></div>
            <div className='w-fit relative bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:border-[#7ffe5d]/30 transition-all duration-300 text-sm flex flex-row items-center gap-1'>
                {myIcon}
                {deets}
            </div>
        </div>
    )
}

export default CategoryGlass;