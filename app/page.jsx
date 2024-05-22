// Example Import, import YOUR component here to see on main page
// Main entry file
'use client'
import { useState, useEffect } from 'react';
import Nav from "./components/nav";
import Hero from "./components/hero";
import Faqs from "./components/faqs";
import Team_strip from "./components/team";
import Footer from "./components/footer";

export default function Home() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const cycleComponents = () => {
    setCurrentComponentIndex((currentComponentIndex + 1) % components.length);
  };

  return (
    <>
    <main className="absolute overflow-clip min-h-full w-full flex flex-col bg-[#26272D] Ubuntu.className">
      <Nav id="container"/> 
      <Hero/>

      <img className="bg-[#26272D]  scale-150  z-3 background-transparent w-[100vw]   overflow-hidden fill-[#202127]" src="/mosque.png" alt="Divider" />
      
      <Faqs id="container"/>


      <img className="bg-[#26272D]  scale-150  z-3 background-transparent w-[100vw]   overflow-hidden fill-[#202127]" src="/wavesOpacity.svg" alt="Divider" />

      <Team_strip id="container"/>
      <img className="bg-[#26272D] scale-150 background-transparent w-[100vw]   overflow-hidden fill-[#202127]" src="/wavesNegative.svg" alt="Divider" />

      <Footer id="container"/>
      
    </main>
    </>
  );
}
