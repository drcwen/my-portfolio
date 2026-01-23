
function NavList({ route }) {
    return (
        <a className='cursor-pointer text-xl hover:text-[#7ffe5d] transition-all duration-300'>
            {route}
        </a>
    )
}

export default NavList;