
function NavList({ route }) {
    return (
        <a className='cursor-pointer text-xl hover:text-[#41cf00] transition-all duration-300'>
            {route}
        </a>
    )
}

export default NavList;