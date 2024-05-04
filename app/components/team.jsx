'use client'
// Imports go here
import React, { useState } from 'react';

// Define team information
const teams = [
    {
        name: "Muzzammil Faisal Abdur-Razak",
        title: "Developer",
        image: "depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.webp",
        blurb: "Recent graduate of a computer science program and aspiring Junior Software Developer, recognized for hands-on development and project experience using React, Python, MongoDB, and more across the healthcare, marketing, and biotechnology industries."
    },
    {
        name: "Rashad Usmanali",
        title: "Developer",
        image: "depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.webp",
        blurb: "Recent graduate of a computer science program and aspiring Junior Software Developer, recognized for hands-on development and project experience using React, Python, MongoDB, and more across the healthcare, marketing, and biotechnology industries."

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
    const [selectedMember, setSelectedMember] = useState('');
    // User state (If necessary) goes here
    const handleOpenModal = (name) => {
        setSelectedMember(name);
        setShowModal(true);
    };
    
    // Function to handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div className="text-white overflow-clip w-full min-h-screen bg-[#26272d] px-8 sm:px-16 md:px-32  flex flex-col justify-evenly items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl py-12 sm:py-16">The Team</h1>
            <div className=" grid  grid-cols-2 md:grid-cols-3  xl:grid-cols-6 gap-8 sm:gap-x-12    ">
            <div className="text-white"><TeamCard name="Sayyid Muzzammil Al-Faisal" title="Developer" image="depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.webp" onClick={() => handleOpenModal("Sayyid Muzzammil Al-Faisal")} /></div>
                <div className="text-white"><TeamCard name="Sidi Rashad Al-Faisal" title="Developer" image="depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.webp" onClick={() => handleOpenModal("Sidi Rashad Al-Faisal")} /></div>
                <div className="text-white"><TeamCard name="Sidi Ammar Al-Faisal" title="Developer" image="1697658635083.jpg" onClick={() => handleOpenModal("Sidi Ammar Al-Faisal")} /></div>
                <div className="text-white"><TeamCard name="Milaad [Insert name and photo]" title="Developer" image="depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.webp" onClick={() => handleOpenModal("Milaad [Insert name and photo]")} /></div>
                <div className="text-white"><TeamCard name="Wajdaan [Insert name and photo]" title="Developer" image="depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.webp" onClick={() => handleOpenModal("Wajdaan [Insert name and photo]")} /></div>
                <div className="text-white"><TeamCard name="Jay [Insert name and photo]" title="Developer" image="depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.webp" onClick={() => handleOpenModal("Jay [Insert name and photo]")} /></div>
         
            </div>

            {/* Modal */}
            {showModal && (
    <div className="fixed inset-0  z-50 flex md:p-32 h-[100%] py-auto items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-[#202127] flex-col p-auto  max-w-3/4 max-h-3/4 py-8 rounded-3xl z-10 overflow-hidden">
           {/* Modal itself */}
            <div className="xl:p-32 flex flex-col xl:flex-row  h-full">
                <div className="flex flex-col justify-center items-center md:p-8 p-0">
                    <img className="rounded-full h-48 w-48 xl:h-20 xl: xl:w-[100%] xl:scale-[200%]" src={selectedTeam.image} alt="Team member" />
                    <p className="md:pt-8 md:text-2xl text-xl mt-4 text-center">{selectedTeam.name}</p>
                    <p className="md:text-lg text-center">{selectedTeam.title}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className=" text-white mt-0 pt-0 scale-75 mx-0 mb-8 ">{selectedTeam.blurb}</p>
                    <button className="relative mt-4 size-10 bottom-10 left-px mr-2 md:scale-100 scale-75 bg-gray-600 rounded-md w-20 h-15 text-white hover:bg-gray-700" onClick={handleCloseModal}>Close</button>

                </div>
            </div>
        </div>
    </div>
)}



            <div className='flex flex-col gap-10 justify-center text-2xl p-32'>
                <span>Like to join our team?</span>
                <button className='p-4 bg-[#676767] text-[#4FFFA0] hover:bg-[#3a3a3a] transition-all ease-linear duration-150 rounded-full'>JOIN TODAY</button>
            </div>
        </div>
    );
}

const TeamCard = ({ name, title, image, onClick }) => {
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
