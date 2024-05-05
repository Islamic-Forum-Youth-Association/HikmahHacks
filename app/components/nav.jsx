'use client';
import React, { useState } from 'react';
import { IoTerminal } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, useAnimation } from "framer-motion";

export default function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const controls = useAnimation();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  // Animation 
  const modalVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Animation controls
  const toggleModalAnimation = async () => {
    await controls.start(isModalOpen ? "hidden" : "visible");
    toggleModal();
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
        <ul className='[&>li]:xl:block text-2xl [&>li]:hidden [&>*]:hover:cursor-pointer flex align-center text-[#FFFFFF] text-opacity-60 [&>li]:px-16 translate-y-2 justify-between scale-75 -mx-28'>
            <li onClick={() => handleScroll('home')}>HOME</li>
            <li onClick={() => handleScroll('about')}>ABOUT</li>
            <li onClick={() => handleScroll('faq')}>FAQ</li>
            <li onClick={() => handleScroll('team')}>MEET THE TEAM</li>
            <li className='rounded-full bg-[#676767] py-5 -translate-y-5'><button onClick={() => handleScroll('register')} className='flex text-[#4FFFA0] -translate-y-1'><b>REGISTER</b></button></li>
          </ul>

        {/* Modal Toggle Button */}
        <button onClick={toggleModalAnimation} className="block xl:hidden text-[#676767] p-4 -translate-y-1 scale-150 mr-2">
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* Modal Component */}
      <motion.div 
        className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center"
        onClick={toggleModalAnimation}
        initial="hidden"
        animate={controls}
        variants={modalVariants}
      >
        <motion.div 
          className="bg-[#202127] w-full max-w-xl mx-auto p-8 rounded-lg text-center"
          onClick={(e) => e.stopPropagation()} 
        >
          <ul className="text-white text-lg space-y-4">
            <li onClick={() => { handleScroll('home'); toggleModalAnimation(); }}>HOME</li>
            <li onClick={() => { handleScroll('about'); toggleModalAnimation(); }}>ABOUT</li>
            <li onClick={() => { handleScroll('faq'); toggleModalAnimation(); }}>FAQ</li>
            <li onClick={() => { handleScroll('team'); toggleModalAnimation(); }}>MEET THE TEAM</li>
            <li className="rounded-full bg-[#676767] py-2 px-4 text-[#4FFFA0] inline-block">
              <button onClick={() => { handleScroll('register'); toggleModalAnimation(); }} className="focus:outline-none">
                <b>REGISTER</b>
              </button>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </nav>
  )
}
