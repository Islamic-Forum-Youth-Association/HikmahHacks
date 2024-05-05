'use client'
import React, { useState, useEffect } from 'react';
import { IoTerminal } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

export default function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollToSection, setScrollToSection] = useState(null);
  const [sidebarWidth, setSidebarWidth] = useState('100%'); // Default full width

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) { // Tailwind's md breakpoint
        setSidebarWidth('70%');
      } else if (screenWidth <= 640) { // Tailwind's sm breakpoint
        setSidebarWidth('40%');
      } 
    };
    
    updateSize(); // Set initial size
    window.addEventListener('resize', updateSize); // Add resize listener
    return () => window.removeEventListener('resize', updateSize); // Cleanup listener
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
      <div className='flex justify-between items-center'>
        <a onClick={() => handleScroll('home')}>
          <div className='flex flex-col md:text-3xl mt-1 text-[#FFFFFF] text-opacity-60'>
            <span className='flex gap-2'><IoTerminal /> HIKMAH</span>
            <span className='text-sm text-opacity-45 text-[#8FA0A6]'>HACKS</span>
          </div>
        </a>
        <button onClick={toggleSidebar} className="block xl:hidden text-[#676767] p-4 -translate-y-1 scale-150 mr-2">
          <GiHamburgerMenu size={24} />
        </button>
      </div>
      
      {isSidebarOpen && (
        <motion.div 
          className="fixed xl:hidden inset-0 bg-black bg-opacity-60 z-50"
          onClick={() => setIsSidebarOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        ></motion.div>
      )}

      <motion.div 
        className={`fixed inset-y-0 xl:hidden p-8 bg-[#202127] w-full z-50 flex flex-col justify-center items-start`}
        initial={{ x: '100%' }}
        animate={{ x: isSidebarOpen ? sidebarWidth : '100%' }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ul className="text-white text-lg space-y-4 place-items-start grid grid-cols-1">
          <li onClick={() => { handleScroll('home'); }}>HOME</li>
          <li onClick={() => { handleScroll('faq'); }}>FAQ</li>
          <li onClick={() => { handleScroll('team'); }}>MEET THE TEAM</li>
          <li onClick={() => handleScroll('contact')}>CONTACT US</li>

          <li className="rounded-full bg-[#676767] py-2 px-4 text-[#4FFFA0] inline-block">
            <button onClick={() => { handleScroll('register'); }} className="focus:outline-none">
              <b>REGISTER</b>
            </button>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}
