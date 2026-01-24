

function Glass({deets}) {
    return (
        <div className='relative group'>
            <div className='absolute inset-0 bg-linear-to-br from-[#7ffe5d]/10 to-[#7ffe5d]/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
            <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#7ffe5d]/30 transition-all duration-300'>
                {deets}
            </div>
            </div>
    )
}

export default Glass;