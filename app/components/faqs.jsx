'use client';
import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

function Faqs() {
    const QAs = [
        { question: "What is a hackathon", answer: "A hackathon is more than just a coding competition; it's an immersive experience..." },
        { question: "What is Hikmah?", answer: "Hikmah is the Arabic word for 'wisdom.' It's not just about knowing a lot of things..." },
        { question: "Is this event in person?", answer: "Yes! We will hold the event at the Islamic Forum of Canada (200 Advanced Blvd, Brampton, ON)" },
        { question: "Sign me up! When is the event?", answer: "We are currently taking registrations ending for our event scheduled for July 13th @12AM EST..." },
        { question: "Do I have to have expert coding knowledge?", answer: "No, this event is open to all levels of coding expertise..." }
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    useEffect(() => {
        const handleResize = () => {
            setExpandedIndex(null);  // Close all accordions on resize to prevent layout issues
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="faq" className="min-h-[100vh] xl:h-[95vh]">
            <div className="container px-auto min-w-[100vw] bg-[#1A1B22]">
                <div className="grid xl:grid-cols-2 grid-rows-2 scale-90">
                    <div className="">
                        <h1 className="text-white text-3xl mx-auto xl:pl-64 my-[6vh] inline-block md:text-4xl pr-15 items-center justify-center">Frequently asked questions</h1>
                        <div className="space-y-6 xl:ml-64 mb-12">
                            {QAs.map((qa, index) => (
                                <motion.div
                                    key={index}
                                    className={`text-[#26272D] flex justify-center scale-40 hover:text-white bg-[#4FFFA0] rounded-xl text-2xl xl:px-[9vw] xl:w-[32vw] w-[100vw] text-center items-center h-[12vh] hover:bg-[#021416] cursor-pointer`}
                                    onClick={() => toggleAccordion(index)}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex justify-center">
                                        <FaCode size={24} className="min-w-[24px] min-h-[23px] mx-2" />
                                        <div className="text-lg xl:text-lg md:text-4xl">{qa.question}</div>
                                    </div>
                                    {expandedIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            transition={{ duration: 0.5 }}
                                            className="bg-[#021416] p-4 text-white"
                                        >
                                            <p className="text-sm md:text-lg lg:text-xl">{qa.answer}</p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faqs;
