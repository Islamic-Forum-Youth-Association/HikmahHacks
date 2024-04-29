'use client'

import { useState } from "react";
import { FaCode } from "react-icons/fa";

function Faqs() {
    const QAs = [
        { question: "What is a hackathon", answer: "A hackathon is more than just a coding competition; it's an immersive experience where people with different skillsets join forces to create something cool in a short amount of time. Imagine a weekend-long sprint to build a functional software or hardware project. It's a hotbed of creativity fueled by collaboration, where programmers team up with designers and even business minds to bring ideas to life. You'll learn new skills, meet inspiring people, and push yourself to think outside the box. It's an intense but rewarding experience that leaves you with a newfound sense of accomplishment and a network of passionate collaborators." },
        { question: "Random Question", answer: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" }
    ];

    const [selectedQA, setSelectedQA] = useState(null);

    return (
        <>
        <img className="bg-[#26272D] lg:scale-100 scale-y-150  overflow-hidden fill-[#202127]" src="/mosque.png" alt="Divider, Error Please Source File" />
        <div className="bg-[#1a1b22] py-[100vh]">
            <h1 className="text-white text-6xl p-36">Frequently asked questions</h1>
            <div className="flex flex-row bg-[#1a1b22] justify-between px-36 [&>*]:text-white">
                <div className="flex flex-col gap-16">
                    {QAs.map((qa, index) => (
                        <div key={index} className="bg-[#26272D] text-[#4FFFA0] rounded-xl text-2xl xl:px-[9vw] flex justify-around gap-x-36 items-center h-[12vh] hover:bg-[#021416] cursor-pointer" onClick={() => setSelectedQA(qa)}>
                            <div>
                            {qa.question}
                            </div>
                           <div>
                           <FaCode size={24} /> 
                           </div>
                           
                        </div>
                    ))}
                </div>
                <div className="text-render-container flex flex-col justify-between h-[40vh]">
                    {selectedQA && (
                        <div className="text-xl mx-auto px-3 md:text-justify text-left max-w-[42vw] ">
                            <div className="text-5xl pb-8">{selectedQA.question}</div>
                            {selectedQA.answer}
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}

export default Faqs;
