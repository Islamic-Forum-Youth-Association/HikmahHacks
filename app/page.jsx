// Example Import, import YOUR component here to see on main page
// Main entry file
import Blog_stip from "./components/blog_strip";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Faqs from "./components/faqs";
export default function Home() {
  return (
    <>
    <main className="absolute min-h-full w-full flex flex-col bg-[#26272D]">
      
      <Nav/>
      <Hero/>
      <Faqs/>   
    </main>
    </>
  );
}
