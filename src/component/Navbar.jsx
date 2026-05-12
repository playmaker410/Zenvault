import React from 'react';
import assets from '../assets/assets';

const Navbar = ({theme, setTheme}) => {
  return (
    <div className='flex justify-between items-center px-4 sm:px12 lg:px-12 xl:px-40 sticky top-0
     z-20 backdrop-blur-xl font-medium bg-white dark:bg-gray-900/70'>
      <img src={theme == 'dark' ? assets.darkbglogo: assets.lglogo}  className='w-32 sm:w-50 ' alt="" />
    
    <div className='flex gap-5 text-md dark:text-white '>
      <a href="#" className='sm:hover:border-b-2'>Home</a>
      <a href="#buisness" className='sm:hover:border-b-2'>Buisness</a>
      <a href="#personal" className='sm:hover:border-b-2'>Personal</a>
      <a href="#card"className='sm:hover:border-b-2'>Card</a>
      <a href="#pricing" className='sm:hover:border-b-2'>Pricing</a>
      <a href="#about" className='sm:hover:border-b-2 transition-text'>About</a>
      
    </div>

    <div className='flex gap-2 dark:text-white' >
      <button className='bg-blue-700 px-10 py-2 rounded-md text-white'>Log in </button>
      <button className='border-gray-500 border-1 px-3 py-2  rounded-md '>Get Started</button>
    </div>
    </div>
  );
}

export default Navbar;
