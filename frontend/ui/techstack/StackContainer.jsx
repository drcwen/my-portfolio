

function Container({ deets }) {
    return (
        <div className='relative group'>
            <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#7ffe5d]/30 transition-all duration-300'>
                {deets}
            </div>
        </div>
    )
}

export default Container;