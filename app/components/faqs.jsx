// This is the file for the FAQs section , right side of figma file.
import { FaCode } from "react-icons/fa";

// Imports go here

function Faqs() {
    // User state (If necessary) goes here
    return (
        <>
        <img className="bg-[#26272D] lg:scale-100 scale-y-150 overflow-hidden   fill-[#202127]" src="/mosque.png" alt="" />
        <div className="bg-[#1a1b22]">
        {/* Text */}
        <h1 className="text-white text-4xl p-36">Frequently asked questions</h1>
        {/* Columns */}
        <div className="bg-[#   ]  flex flex-row justify-between px-36 [&>*]:text-white">
            <div className="cards">                
            {
                faq_cards("What is a Hackathon ?", "A hackathon is more than just a coding competition; it's an immersive experience where people with different skillsets join forces to create something cool in a short amount of time. Imagine a weekend-long sprint to build a functional software or hardware project. It's a hotbed of creativity fueled by collaboration, where programmers team up with designers and even business minds to bring ideas to life. You'll learn new skills, meet inspiring people, and push yourself to think outside the box. It's an intense but rewarding experience that leaves you with a newfound sense of accomplishment and a network of passionate collaborators.")
            }
                </div>
            <div className="text-render-container flex flex-col justify-between h-[40vh]">
                <div>

                </div>
                <div>
                2
                </div>
            </div>
        </div>
        </div>

        </>
    );
}
// Any helper functions/components go here
const faq_cards = (title, sidetext) => {
    return (
        <div className="flex flex-col xl:flex-row xl:gap-36 md:gap-12">
        <div className="bg-[#26272D] text-[#4FFFA0] rounded-xl xl:w-[25vw] md:w-[72vw] text-2xl px-12] flex justify-between hover:bg-[#021416]">
            {title}
            <FaCode />
        </div>
        <div className="text-xl mx-auto px-3 text-justify">
            {sidetext}
        </div>
        </div>

    )
}
export default Faqs;