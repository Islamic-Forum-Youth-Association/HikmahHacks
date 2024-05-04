// Example Import, import YOUR component here to see on main page
// Main entry file
import Blog_stip from "./components/blog_strip";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Faqs from "./components/faqs";
import Team_strip from "./components/team";
import { Ubuntu } from 'next/font/google';

export default function Home() {
  return (
    <>
    <main className="absolute overflow-clip min-h-full w-full flex flex-col bg-[#26272D] Ubuntu.className">
      <Nav/> 
      <Hero/>
      
      <Faqs/>
      <Team_strip/>   
      
    </main>
    </>
  );
}
