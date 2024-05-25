'use client'
import { useState } from "react";
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
        {question: "Do I have to have expert coding knowledge?" , answer:"No, this event is open to all levels of coding expertise and workshops will be held at the event so there is a little something for everyone!"}
    ];

    const [selectedQA, setSelectedQA] = useState(QAs[0]);
    const [clickedQuestion, setClickedQuestion] = useState(null);

    const handleTabClick = (qa) => {
        setSelectedQA(qa);
        setClickedQuestion(qa.question);
    }

    const answerVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.2,
            },
        },
    };

    return (
        <div id="faq" className="min-h-[100vh] xl:h-[95vh]">
            <div className="container px-auto min-w-[100vw] bg-[#1A1B22]">
                <div className="grid xl:grid-cols-2 grid-rows-2 scale-90">
                    <div className="">
                        <h1 className="text-white text-3xl mx-auto xl:pl-64 my-[6vh] inline-block md:text-4xl pr-15 items-center justify-center">Frequently asked questions</h1>
                        <div className="space-y-6 xl:ml-64 mb-12">
                            {QAs.map((qa, index) => (
                                <motion.div key={index} className={`text-[#26272D] flex justify-center scale-40 hover:text-white bg-[#4FFFA0] rounded-xl text-2xl xl:px-[9vw] xl:w-[32vw] w-[100vw] text-center items-center h-[12vh] hover:bg-[#021416] cursor-pointer ${clickedQuestion === qa.question && 'bg-gray-800 text-white hover:bg-gray-600 '}`} onClick={() => handleTabClick(qa)} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                                    <div className="flex justify-center">
                                        <FaCode size={24} className="min-w-[24px] min-h-[23px] mx-2" />
                                        <div className="text-lg xl:text-lg md:text-4xl">{qa.question}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="xl:px-24 py-12 w-[100%] h-full flex text-pretty">
                        {selectedQA && (
                            <div className="flex flex-col justify-center align-middle">
                                <h2 className="text-[#4fffa0] inline-block md:text-5xl text-2xl mb-4">{selectedQA.question}</h2>
                                <motion.div key={selectedQA.question} initial="hidden" animate="visible" variants={answerVariants} className="flex flex-col">
                                    <div className="text-white md:text-2xl text-lg h-fit">{selectedQA.answer}</div>
                                </motion.div>
                            </div>
                        )}
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default Faqs;