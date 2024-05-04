'use client'
import { useState } from "react";
import { FaCode } from "react-icons/fa";

function Faqs() {
    const QAs = [
        { question: "What is a hackathon", answer: "A hackathon is more than just a coding competition; it's an immersive experience where people with different skillsets join forces to create something cool in a short amount of time. Imagine a weekend-long sprint to build a functional software or hardware project. It's a hotbed of creativity fueled by collaboration, where programmers team up with designers and even business minds to bring ideas to life. You'll learn new skills, meet inspiring people, and push yourself to think outside the box. It's an intense but rewarding experience that leaves you with a newfound sense of accomplishment and a network of passionate collaborators." },
        { question: "Random Question", answer: "Nothing1" },
        { question: "Random Question", answer: "Nothing2" },
        { question: "Random Question", answer: "Nothing3" },
    ];

    const [selectedQA, setSelectedQA] = useState(QAs[0]);

    const handleTabClick = (qa) => {
            setSelectedQA(qa);
            
        }
        

    return (
    <div className="max-h-[150vh] overflow-hidden">      
        <img className="bg-[#26272D] object-contain scale-150  z-3 background-transparent w-[100%]   overflow-hidden fill-[#202127]" src="/mosque.png" alt="Divider" />

        <div className="container px-auto min-w-[100vw] bg-[#202127]">
            <div className="grid xl:grid-cols-2 grid-rows-2 scale-90  ">
                <div className="p-4">
                    <h1 className="text-white text-3xl mx-auto xl:px-64 my-[6vh]">Frequently asked questions</h1>
                    <div className="space-y-6 xl:ml-64 mb-12">
                        {QAs.map((qa, index) => (
                            <div key={index} className={`text-[#26272D] scale-40 hover:text-white bg-[#4FFFA0] rounded-xl text-2xl xl:px-[9vw] flex justify-around xl:w-[32vw] w-[100vw] static xl:gap-x-36 items-center h-[12vh] hover:bg-[#021416] cursor-pointer ${selectedQA.answer === qa.answer && 'bg-gray-800 text-white hover:bg-gray-600'}`} onClick={() => handleTabClick(qa)}>
                                <div className="flex items-center">
                                    <FaCode size={24} className="mr-2" />
                                    <div className="text-lg">{qa.question}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="xl:p-32 mx-auto  w-[100%]  ">
                    {selectedQA && (
                        <div>
                            <h2 className="text-white text-3xl mb-4">{selectedQA.question}</h2>
                            <div className="text-white  xl:w-[40vw] w-auto ">{selectedQA.answer}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Faqs;