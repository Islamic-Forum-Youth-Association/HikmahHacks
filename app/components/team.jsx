'use client'
// Imports go here
// Imports go here
import React, { useState } from 'react';

// Define team information
const teams = [
    {
        name: "Muzzammil Faisal Abdur-Razak",
        title: "Developer",
        image: "depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.webp",
        blurb: ""
    },
    {
        name: "Rashad Usmanali",
        title: "Developer",
        image: "IMG_6638.PNG",
        blurb: ""

    },
    {
        name: "Ammar Hussein",
        title: "Developer",
        image: "1697658635083.jpg",
        blurb: "Recent graduate of a computer science program and aspiring Junior Software Developer, recognized for hands-on development and project experience using React, Python, MongoDB, and more across the healthcare, marketing, and biotechnology industries."
    },
    {
        name: "Milad Salihi",
        title: "Developer",
        image: "depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.webp",
        blurb: "Recent graduate of a computer science program and aspiring Junior Software Developer, recognized for hands-on development and project experience using React, Python, MongoDB, and more across the healthcare, marketing, and biotechnology industries."
    },

];

function TeamStrip() {
    const [showModal, setShowModal] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(null);

    // Function to handle opening the modal with the entire card
    const handleOpenModal = (team) => {
        setSelectedTeam(team);
        setShowModal(true);
    };
    
    // Function to handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div id="team" className="text-white overflow-clip w-full min-h-screen bg-[#26272d] px-8 sm:px-16 md:px-32 flex flex-col justify-evenly items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl py-12 sm:py-16">The Team</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 sm:gap-x-12">
                {teams.map((team, index) => (
                    <div className="text-white" key={index}>
                        <TeamCard team={team} onClick={() => handleOpenModal(team)} />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-[#202127] flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-3/4 p-8 rounded-3xl z-10 overflow-hidden">
            <button className="absolute top-0 right-0 mt-2 mr-2 bg-red-600 rounded-full w-8 h-8 text-white hover:bg-gray-700" onClick={handleCloseModal}>X</button>
            <div className="flex flex-col xl:flex-row gap-12 h-full">
                <div className="flex flex-col justify-center items-center p-8">
                    <img className="rounded-full h-48 w-48 xl:h-20 xl:w-[100%] xl:scale-[200%]" src={selectedTeam.image} alt="Team member" />
                    <p className="pt-8 text-2xl mt-4 text-center">{selectedTeam.name}</p>
                    <p className="text-lg text-center">{selectedTeam.title}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-lg text-white mb-4">{selectedTeam.blurb}</p>
                </div>
            </div>
        </div>
    </div>
)}



            <div className='flex flex-col gap-10 justify-center text-2xl p-32'>
                <span>Like to join our team?</span>
                <button className='px-16 py-0 md:py-4 bg-[#676767] text-[#4FFFA0] hover:bg-[#3a3a3a] transition-all ease-linear duration-150 rounded-full'>JOIN TODAY</button>
            </div>
        </div>
    );
}

const TeamCard = ({ team, onClick }) => {
    const { name, title, image } = team;

    return (
        <div className="w-full h-full border outline-1 outline-[#D9D9D9] rounded-lg overflow-hidden m-0 sm:m-0" onClick={onClick}>
            <div className="mb-2">
                <img 
                    className="object-cover w-full h-56 xl:h-72" 
                    src={image} 
                    alt={name} 
                    style={{ maxWidth: '100%', maxHeight: '100%', minWidth: '100%' }} 
                />
            </div>
            <p className="text-center md:text-xl mx-1 font-semibold mb-1">{name}</p>
            <p className="text-center mb-4">{title}</p>
        </div>
    )
}

// Any helper functions/components go here

export default TeamStrip;
