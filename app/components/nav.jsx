'use client'
import React from 'react'
import { IoTerminal } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <nav className='bg-[#202127] p-6 w-screen sticky top-0 z-50 overflow-clip'>
        <div className='flex justify-between xl:items-center'>
          <a  onClick={() => handleScroll('home')}>
            <div className='flex flex-col md:text-3xl mt-1 text-[#FFFFFF] text-opacity-60'>
               <span className='flex gap-2'><IoTerminal /> HIKMAH</span> 
                <span className='text-sm text-opacity-45 text-[#8FA0A6]'>HACKS</span>
            </div>
          </a>
          <ul className='[&>li]:xl:block text-2xl [&>li]:hidden flex align-center text-[#FFFFFF] text-opacity-60 [&>li]:px-16 translate-y-2 justify-between scale-75 -mx-28'>
            <li onClick={() => handleScroll('home')}>HOME</li>
            <li onClick={() => handleScroll('about')}>ABOUT</li>
            <li onClick={() => handleScroll('faq')}>FAQ</li>
            <li onClick={() => handleScroll('team')}>MEET THE TEAM</li>
            <li className='rounded-full bg-[#676767] py-5 -translate-y-5'><button onClick={() => handleScroll('register')} className='flex text-[#4FFFA0] -translate-y-1'><b>REGISTER</b></button></li>
          </ul>
          <button className='-translate-y-1 scale-150 block xl:hidden text-[#676767]'><GiHamburgerMenu size={24}/></button>
        </div>
    </nav>
  )
}
