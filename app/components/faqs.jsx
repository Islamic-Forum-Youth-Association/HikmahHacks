'use client'
import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

function Faqs() {
    const QAs = [
        { question: "What is a hackathon", answer: "A hackathon is more than just a coding competition; it's an immersive experience where people with different skillsets join forces to create something cool in a short amount of time. Imagine a weekend-long sprint to build a functional software or hardware project. It's a hotbed of creativity fueled by collaboration, where programmers team up with designers and even business minds to bring ideas to life. You'll learn new skills, meet inspiring people, and push yourself to think outside the box. It's an intense but rewarding experience that leaves you with a newfound sense of accomplishment and a network of passionate collaborators." },
        {
            question: "What is Hikmah?",
            answer: "Hikmah is the Arabic word for \"wisdom.\" It's not just about knowing a lot of things, but also about using what you know in smart and thoughtful ways. It's about making good decisions, understanding things better, and handling tricky situations wisely.\n\nThe name \"HikmahHacks\" for a hackathon is a cool mix of ideas. A hackathon is usually an event where people who love tech, like programmers and designers, come together to build new software quickly and creatively. The word \"hacks\" here means coming up with neat and clever ways to do something.\n\nSo, when you hear \"HikmahHacks,\" think about using tech skills in a smart way to solve problems. The organizers want everyone at the hackathon to not only create cool tech stuff but also to think carefully about how their creations can help people and make things better. They're encouraging everyone to blend their tech skills with wise thinking, just like the word \"hikmah\" suggests."
        },
        { question: "Is this event in person?", answer: "Yes! We will hold the event at the Islamic Forum of Canada (200 Advanced Blvd, Brampton, ON)" },
        { question: "Sign me up! When is the event?", answer: "We are currently taking registrations ending for our event scheduled for July 13th @12AM EST. Please visit the \"Register\" button on the navbar " },
        { question: "Do I have to have expert coding knowledge?" , answer: "No, this event is open to all levels of coding expertise and workshops will be held at the event so there is a little something for everyone!" }
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
        <div id="faq" className="min-h-screen bg-[#1A1B22]">
            <div className="container mx-auto py-12">
                <h1 className="text-white text-3xl md:text-4xl z-50 text-center mb-8">Frequently asked questions</h1>
                <div className="space-y-4 px-4 md:px-8 lg:px-16">
                    {QAs.map((qa, index) => (
                        <div key={index} className="bg-[#4FFFA0] rounded-xl overflow-hidden">
                            <div 
                                className={`flex justify-between items-center p-4 cursor-pointer ${expandedIndex === index && 'bg-gray-800 text-white hover:bg-gray-600'}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="flex items-center">
                                    <FaCode size={24} className="mr-2" />
                                    <span className="text-lg md:text-xl lg:text-2xl">{qa.question}</span>
                                </div>
                                <motion.div animate={{ rotate: expandedIndex === index ? 180 : 0 }}>
                                    <FaCode size={24} />
                                </motion.div>
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faqs;
