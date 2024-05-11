'use client'
import React, { useState, useEffect, useRef } from 'react';
import { IoTerminal } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollToSection, setScrollToSection] = useState(null);
  const sidebarRef = useRef(null);

  const [sidebarWidth, setSidebarWidth] = useState('100%'); 

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1120) {
        setSidebarWidth('70%');
      } else if (screenWidth >= 840 && screenWidth < 1120) {
        setSidebarWidth('50%');
      } else if (screenWidth >= 610 && screenWidth < 840) {
        setSidebarWidth('40%');
      } else if (screenWidth < 610) {
        setSidebarWidth('25%');
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleScroll = (id) => {
    setScrollToSection(id);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (scrollToSection) {
      const section = document.getElementById(scrollToSection);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setScrollToSection(null);
    }
  }, [scrollToSection]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className='bg-[#202127] p-6 w-screen sticky top-0 z-50 overflow-clip'>
      {/* Nav Bar */}
      <div className='flex justify-between items-center'>
        <a onClick={() => handleScroll('home')}>
          <div className='flex [&>*]:hover:cursor-pointer flex-col md:text-3xl mt-1 text-[#FFFFFF] text-opacity-60'>
            <span className='flex gap-2'><IoTerminal /> HIKMAH</span>
            <span className='text-sm text-opacity-45 text-[#8FA0A6]'>HACKS</span>
          </div>
        </a>
        <ul className='[&>li]:xl:block text-2xl [&>li]:hidden [&>*]:hover:cursor-pointer flex align-center text-[#FFFFFF] text-opacity-60 [&>li]:px-16 translate-y-2 justify-between scale-75 -mx-28'>
          <li onClick={() => handleScroll('home')}>HOME</li>
          <li onClick={() => handleScroll('faq')}>FAQ</li>
          <li onClick={() => handleScroll('team')}>MEET THE TEAM</li>
          <li onClick={() => handleScroll('contact')}>CONTACT US</li>
          <li className='rounded-full bg-[#676767] py-4 -translate-y-5 text-[#4FFFA0] flex justify-center items-center'>
            <button onClick={()=>{alert("Check out our social media pages for announcements on registration!")}} className='font-bold text-2xl'><b>REGISTER</b></button>
          </li>
        </ul>

        {/* Sidebar Toggle Button */}
        <button onClick={toggleSidebar} className="block xl:hidden text-[#676767] p-4 -translate-y-1 scale-150 mr-2">
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* Darkened Overlay */}
      {isSidebarOpen && (
        <motion.div
          className="fixed inset-0 bg-black xl:hidden bg-opacity-60 z-50"
          onClick={() => setIsSidebarOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        ></motion.div>
      )}

      {/* Sidebar Component */}
      <motion.div
        className={`fixed inset-y-0 right-0 bg-[#1C1D22] w-full overflow-x-hidden p-8 z-50 flex flex-col justify-between items-start`}
        ref={sidebarRef}
        initial={{ x: '100%' }}
        animate={{ x: isSidebarOpen ? sidebarWidth : '100%' }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflowY: 'auto' }}
      >
        <ul className="text-white text-lg space-y-4">
          <li onClick={() => { handleScroll('home'); }}>HOME</li>
          <li onClick={() => { handleScroll('faq'); }}>FAQ</li>
          <li onClick={() => { handleScroll('team'); }}>MEET THE TEAM</li>
          <li onClick={() => handleScroll('contact')}>CONTACT US</li>
          <li className="rounded-full bg-[#676767] py-2 px-4 text-[#4FFFA0] inline-block" onClick={()=>{alert("Check out our social media pages for announcements on registration!")}}  >
            <button  className=""><b>REGISTER</b></button>
          </li>
        </ul>

        {/* Footer */}
        <div id="sidebar-footer" className="fixed bg-[#1C1D22] w-full top-80 z-50 flex flex-col items-start pb-8">
          <h2 className="text-white font-bold text-lg mb-4">
            <span className='flex gap-2'>Got any Questions?</span>
            <span className='text-sm text-opacity-45 text-[#8FA0A6]'>Contact us!</span>
          </h2>
          <div className="flex flex-col">
            <button className="text-gray-300 bg-[#26272D] text-sm rounded-full min-w-full p-3 text-left hover:bg-[#2b2c32] mb-2">
              <MdAlternateEmail className="inline-block rounded-full size-[24px] mr-2 bg-[#31333D] p-1" color="#4FFFA0" /> admin@hikmahhacks.com
            </button>

            <button className="text-gray-300 bg-[#26272D] text-sm rounded-full min-w-full p-3 text-left hover:bg-[#2b2c32]">
              <FaPhoneAlt className="inline-block rounded-full size-[24px] mr-2 bg-[#31333D] p-1" color="#4FFFA0" /> (905) 527-1111
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}
