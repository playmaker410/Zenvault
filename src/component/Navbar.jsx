import React, { useState } from 'react';
import assets from '../assets/assets';
import { Menu, User, X, BriefcaseAlt2, Home,CreditCardAlt, PriceTag, InfoCircle  } from '@boxicons/react'

const Navbar = ({theme, setTheme}) => {
  const [isMenuOpen, setIsMenuOpen]= useState(false)
  const closeMenu = () => {setIsMenuOpen(false)
}
  
  return (

         
      <div className='h-20 w-full flex  justify-between items-center px-4  lg:px-5 md:px-10 sm:px-5 sticky top-0
     z-20 backdrop-blur-xl font-semibold bg-white drop-shadow-md'>
      {/* logo image here*/}
      <div>
      <a href="#">
      <img src={theme == 'dark' ? assets.darkbglog:assets.lglogo}  className=' w-34 lg:w-40 md:w-35 sm:w-20 hover:scale-105 transition-all' alt="" />
    </a>
    </div>

    <div className='hidden lg:flex gap-5 text-md dark:text-white font-semibold text-base '>
      <a href="#" className='lg:hover:border-b-2 hover:text-sky-500 transition-all delay-300 duration-500 dark:text-white '>Home</a>
      <a href="#buisness" className='lg:hover:border-b-2 hover:text-sky-500 transition-all delay-300 duration-500 dark:text-white'>Buisness</a>
      <a href="#personal" className='lg:hover:border-b-2 hover:text-sky-500 transition-all delay-300 duration-500 dark:text-white'>Personal</a>
      <a href="#card" className='lg:hover:border-b-2 hover:text-sky-500 transition-all delay-300 duration-500 dark:text-white'>Card</a>
      <a href="#pricing" className='lg:hover:border-b-2 hover:text-sky-500 transition-all delay-300 duration-500 dark:text-white'>Pricing</a>
      <a href="#about" className='lg:hover:border-b-2 hover:text-sky-500 transition-all delay-300 duration-500 dark:text-white'>About</a>
      
    </div>

  
  {/* Desktop buttons */}
  <div className='flex gap-2 '>
    <button className='hidden lg:flex bg-sky-400 hover:bg-blue-950 transition-colors hover:scale-105 px-9 py-2 rounded-md text-white font-bold text-lg '>
      Log in
    </button>

    <button className='hidden lg:flex border-gray-500 border px-5 py-2 rounded-md hover:scale-105 text-lg dark:text-white'>
      Get Started
    </button>


  </div>

<div className='flex gap-1.5 '>
  {/* Mobile menu */}
    <User color='white' stroke='white' pack='filled' className='lg:hidden bg-black rounded-full' size={window.innerWidth < 768 ? 16 : 32} />
  <Menu fill='white'  className='lg:hidden w-1xl bg-blue-600 rounded-full' onClick={() => setIsMenuOpen(!isMenuOpen)} size={window.innerWidth < 768 ? 16 : 32} />
  
</div>
<div className={`fixed lg:hidden top-0 left-0 w-full h-dvh px-4 pt-10 bg-white z-50 flex flex-col gap-4 font-semibold dark:text-white text-black  transition duration-800 ${
  isMenuOpen ?"opacity-100 translate-x-0 ": "opacity-0 -translate-x-full"
}`}> 
  <X className='ml-auto' onClick={closeMenu} size={window.innerWidth < 768 ? 16 : 32}/>
  <a href='#' onClick={closeMenu} className='p-4 text-black dark:text-white active:text-blue-500 cursor-pointer flex items-center gap-2'> <Home size={18} />Home</a>
  <a href='#' className='p-4 text-black dark:text-white active:text-blue-500cursor-pointer flex items-center gap-2'><BriefcaseAlt2 size={18}/>Buisness</a>
  <a href='#' className='p-4 text-black dark:text-white active:text-blue-500cursor-pointer flex items-center gap-2' ><User size={18} /> Personal</a>
  <a href='#' className='p-4 text-black dark:text-white active:text-blue-500cursor-pointer flex items-center gap-2'> <CreditCardAlt  size={18}/>Card</a>
  <a href='#' className='p-4 text-black dark:text-white active:text-blue-500cursor-pointer flex justify-items-center gap-2'> <PriceTag size={18} />Pricing</a>
  <a href='#' className='p-4 text-black dark:text-white active:text-blue-500cursor-pointer flex items-center gap-2' > <InfoCircle size={18} /> About</a>
  <button className='w-full bg-[#0ea5ff] rounded-md py-4 text-lg font-bold dark:text-white shadow-neon hover:scale-105 transition' >
      Log in
    </button>

 

</div>


    </div>
    
  );
}
 
export default Navbar;