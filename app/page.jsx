// Example Import, import YOUR component here to see on main page
// Main entry file
'use client'
import { useState, useEffect } from 'react';
import Nav from "./components/nav";
import Hero from "./components/hero";
import Faqs from "./components/faqs";
import Team_strip from "./components/team";
import Footer from "./components/footer";

const components = [<Hero />, <Faqs />, <Team_strip />];

export default function Home() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const cycleComponents = () => {
    setCurrentComponentIndex((currentComponentIndex + 1) % components.length);
  };

  return (
    <>
      <main className="absolute overflow-clip min-h-full w-full flex flex-col bg-[#26272D] Ubuntu.className">
      <Nav />
        {components.map((component, index) => (
          <div key={index} style={{ opacity: index === currentComponentIndex ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
            {component}
          </div>
        ))}
        <Footer />
      </main>


      <button className="fixed bottom-10 right-10 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md" onClick={cycleComponents}>Next Component</button>

    </>
  );
}
