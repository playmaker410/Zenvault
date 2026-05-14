import React, { useState } from 'react';
import assets from '../assets/assets';
import { Menu, User } from '@boxicons/react';

const Navbar = ({theme, setTheme}) => {
  const [isMenuOpen, setIsMenuOpen]= useState(false)
  
  return (

         
      <div className='h-20 w-full flex  justify-between items-center lg:px-5 md:px-10 sm:px-10 sticky top-0
     z-20 backdrop-blur-xl font-semibold bg-white dark:bg-gray-900/70 drop-shadow-md'>
      {/* logo image here*/}
      <div>
      <a href="#">
      <img src={theme == 'dark' ? assets.darkbglog:assets.lglogo}  className=' w-34 lg:w-40 md:w-35 sm:w-20 hover:scale-105 transition-all' alt="" />
    </a>
    </div>

    <div className='hidden lg:flex gap-5 text-md dark:text-white font-semibold text-base '>
      <a href="#" className='lg:hover:border-b-2 transition-all hover:text-sky-500'>Home</a>
      <a href="#buisness" className='lg:hover:border-b-2 transition-all hover:text-sky-500'>Buisness</a>
      <a href="#personal" className='lg:hover:border-b-2 transition-all hover:text-sky-500'>Personal</a>
      <a href="#card" className='lg:hover:border-b-2 transition-all hover:text-sky-500'>Card</a>
      <a href="#pricing" className='lg:hover:border-b-2 transition-all hover:text-sky-500'>Pricing</a>
      <a href="#about" className='lg:hover:border-b-2 transition-text hover:text-sky-500'>About</a>
      
    </div>

  
  {/* Desktop buttons */}
  <div className='flex gap-2 '>
    <button className='hidden lg:flex bg-sky-400 hover:bg-blue-950 transition-colors hover:scale-105 font-semibold px-9 py-2 rounded-md text-white'>
      Log in
    </button>

    <button className='hidden lg:flex border-gray-500 border px-5 py-2 rounded-md hover:scale-105 f0nt-semibold '>
      Get Started
    </button>


  </div>

<div className='flex gap-1.5 '>
  {/* Mobile menu */}
    <User size='sm'color='white' stroke='white' pack='filled' className='lg:hidden bg-black rounded-full' size={window.innerWidth < 768 ? 16 : 32} />
  <Menu  className='lg:hidden w-1xl ' onClick={() => setIsMenuOpen(!isMenuOpen)} />
  
</div>
<div className={`absolute lg:hidden top-24 left-0  w-full bg-white flex-col items-center gap-6 font-semibld font-lg transform transition-transform ${isMenuOpen ? "opacity-100":"opacity-0"}` } 
style={{transition: "transform 0.3s ease opacity 0.3s ease"}} >
  <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Home</li>
  <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Buisness</li>
  <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Personal</li>
  <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Card</li>
  <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Pricing</li>
  <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>About</li>
</div>

    </div>
  );
}
 
export default Navbar;