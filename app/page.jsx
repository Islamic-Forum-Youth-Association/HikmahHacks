// Example Import, import YOUR component here to see on main page
// Main entry file
import Blog_stip from "./components/blog_strip";
import Nav from "./components/nav";
import Hero from "./components/hero";
export default function Home() {
  return (
    <>
    <main className="absolute min-h-full w-full flex flex-col">
      
      <Nav/>
      <Hero/>
      <div></div>

    </main>
    </>
  );
}
