import Logo from '../assets/images/logo.svg';
import LogoDark from '../assets/images/logo-dark.svg';
import IconMoon from '../assets/images/icon-moon.svg';
import IconSun from '../assets/images/icon-sun.svg';
import { useState } from 'react';
export const Header = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const handleThemeToggle = () => {
        const isDarkChenged = document.documentElement.classList.toggle('dark');
        setIsDarkMode(isDarkChenged);
    }
  return (
    <div className='flex justify-between items-center bg-Neutral-0 dark:bg-Neutral-700 px-3 py-8 shadow-md rounded-lg h-[66px] mb-6'>
        <img  src={isDarkMode?LogoDark:Logo} alt="Logo" />
        <button className='bg-Neutral-100 dark:bg-Neutral-600 size-[50px] grid place-content-center rounded-lg cursor-pointer hover:bg-Neutral-200 dark:hover:bg-Neutral-800 ' onClick={handleThemeToggle}>
            <img src={isDarkMode?IconSun:IconMoon} alt="Moon" />
        </button>
        
        
    </div>
  )
}


