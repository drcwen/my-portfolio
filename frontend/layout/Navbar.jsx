import React, {useState} from 'react'
import NavList from '../ui/navbar/NavList'
import NavListMobile from '../ui/navbar/NavListMobile'
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <div className='min-w-full min-h-24 fixed top-0 left-0 right-0 z-1000 backdrop-blur-lg'>
      
      {/*Inner*/}
      <div className='md:py-7 md:px-20 py-6 px-10'>
        
        <div className='min-w-full justify-between flex flex-row items-center'>
          <div>
            <h1 className='font-semibold md:text-2xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#7ffe5d] via-[#7ffe5d]/50 to-[#7ffe5d]/30'>Wendel</h1>
          </div>

          <div className='hidden md:block'>
            
            <ul >
              
              <li className='flex flex-row gap-5'>

                {navItems.map((item) => (
                  <NavList route={item}/>
                ))}

              </li>

            </ul>
          </div>

          <div className='hidden md:block'>
            <button className='bg-white text-black rounded-lg px-2 py-2 font-semibold hover:scale-105 transition-transform duration-300'>
              Contact me!
            </button>
          </div>

          {/*Mobile Navigation*/}

          <div className='md:hidden'>
            <button className='cursor-pointer'
              onClick={() => setMenuOpen(!menuOpen)}>
              <IoReorderThreeOutline className='text-5xl'/>
            </button>
          </div>

          
        </div>

        {/*Mobile Drop Down Navigation*/}

          {menuOpen && ( 
          <div className='w-full h-screen md:hidden bg-black transition-all duration-300'>
            <div className=''>
                <ul>
                  <li className='flex flex-col text-white font-bold px-10 py-10'>
                    
                    {navItems.map((item) => (
                      <NavListMobile route={item}/>
                    ))}

                  </li>
                  
                </ul>
            </div>
          </div>
          )}  
      </div>
    </div>
  )
}

export default Navbar
