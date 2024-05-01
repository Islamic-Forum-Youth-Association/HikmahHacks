'use client'
// Imports go here
import React, { useState } from 'react';
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
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-8 rounded-lg z-10">
                        <h2 className="text-2xl font-bold mb-4">Team Member</h2>
                        <p className="text-lg">{selectedMember}</p>
                        <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700" onClick={handleCloseModal}>Close</button>
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
