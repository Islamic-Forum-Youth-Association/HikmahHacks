'use client'
// Imports go here
// Imports go here
import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion, AnimatePresence } from 'framer-motion';

// Define team information
const teams = [
    {
        name: "Muzzammil Faisal Abdur-Razak",
        title: "Administrator and Executive",
        image: "SMuzzammil.jpg",
        blurb: "TBD"
    },
    {
        name: "Rashad Usmanali",
        title: "Organizer",
        image: "IMG_6638.PNG",
        blurb: "TBD"


    },
    {
        name: "Ammar Hussein",
        title: "Developer/Team Lead",
        image: "1697658635083.jpg",
        blurb: "Recent graduate of a computer science program and aspiring Junior Software Developer, recognized for hands-on development and project experience using React, Python, MongoDB, and more across the healthcare, marketing, and biotechnology industries."
    },
    {
        name: "Raeid Usmanali",
        title: "Developer",
        image: "raeid.jpg",
        blurb: "Freshman with a flare for figma, and everything dev!"
    },
    {
        name: "Jay Siddique",
        title: "Developer",
        image: "depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.webp",
        blurb: "TBD"

    },
    {
        name: "Milad Salihi",
        title: "Developer",
        image: "94bfed5b-a316-4488-9898-8463c2861c6b.jpg",
        blurb: "Third-year computer science student with expertise in Python, Java, and web development who's passionate about applying technology to solve practical problems and love taking on new challenges."
    },
    {
        name: "Wajdaan Malik",
        title: "Developer",
        image: "wajdaan.jpg",
        blurb: "TBD"
    },

];

function TeamStrip() {
    const [showModal, setShowModal] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(null);

    // Function to handle opening the modal with the entire card
    const handleOpenModal = (team) => {
        console.log(team)
        setSelectedTeam(team);
        setShowModal(true);
    };
    
    // Function to handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div id="team" className="text-white overflow-clip min-h-[120vh] bg-[#26272d] px-8 sm:px-16 md:px-42 flex flex-col justify-evenly items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl py-12 ">The Team</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 z-30 gap-8 xl:gap-x-56 justify-center">
                {teams.map((team, index) => (
                    <motion.div className="text-white" key={index} layoutId={team.name}>
                        <TeamCard team={team} onClick={() => handleOpenModal(team)} />
                    </motion.div>
                ))}
            </div>

        {/* Modal */}
        <AnimatePresence>
        {showModal && (
        <div 
            className="fixed inset-0  z-50 flex md:p-32 h-full py-auto justify-center items-center">
            <div className="absolute inset-0 bg-black opacity-50" onClick={handleCloseModal}></div>
            <motion.div 
                className="bg-[#202127] flex-col p-auto  w-3/4 justify-center min-h-3/4  rounded-3xl z-10 overflow-hidden"
                initial={{scale: 0.8}}
                animate={{scale: 1}}
                exit={{scale: 0.8}}
                layoutId={selectedTeam.name}
            >
            {/* Modal itself */}
                <div className="xl:px-28 xl:pt-32 pt-10 flex flex-col">
                    <div className="flex flex-col justify-center items-center ">
                        <img className="rounded-full h-32 w-32 scale-100  xl:scale-[200%] mb-6 aspect-auto " src={selectedTeam.image} alt="Team member" />
                        <p className="xl:pt-8 md:text-2xl text-xl xl:mt-6 text-center">{selectedTeam.name}</p>
                        <p className="md:text-lg text-center">{selectedTeam.title}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className=" text-white xl:text-xl text-xs text-pretty m-6 pb-16 xl:pb-0">{selectedTeam.blurb}</p>
                        <button className="relative xl:mt-16 -mt-6 size-10 bottom-10 left-px mr-2 md:scale-100 scale-75 bg-[#676767] rounded-md w-20 h-15 text-[#4FFFA0] hover:bg-[#3a3a3a]" onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            </motion.div>
        </div>
)}
</AnimatePresence>



            <div className='flex flex-col gap-10 justify-center text-2xl p-32 text-center'>
                <span>Like to join our team?</span>
                <button className='px-16 py-0 md:py-4 bg-[#676767] text-[#4FFFA0] hover:bg-[#3a3a3a] transition-all ease-linear duration-150 rounded-full'>JOIN TODAY</button>
            </div>
        </div>
    );
}

const TeamCard = ({ team, onClick }) => {
    const { name, title, image } = team;

    return (
        <Tilt
        className="Tilt"
        options={{
          scale: 1.05,
          max: 25,
          glare: true,
          "max-glare": 0.5,
          transition: true, // Enable transition on tilt changes
          perspective: 1000 // Set perspective for tilt effect
        }}
        >
        <div className="xl:min-w-72 md:max-w-96 md:w-48 md:mr-38 border border-gray-300 rounded-lg shadow-2xl min-h-[340px] sm:min-h-[380px] md:min-h-[380px] lg:min-h-[440px]" onClick={onClick} style={{cursor:'pointer'}}>
            <div className="mb-2">
                <img 
                    className="object-cover  aspect-square rounded-t-md" 
                    src={image} 
                    alt={name} 
                    style={{  maxHeight: '100%', minWidth: '100%' }} 
                />
            </div>
            <div className='flex flex-col items-center w-full justify-center py-6'>
            <p className="text-center md:text-xl mx-1 font-semibold ">{name}</p>
            <p className="text-center p-2">{title}</p>

            </div>
        </div>
    </Tilt>
    )
}

// Any helper functions/components go here

export default TeamStrip;