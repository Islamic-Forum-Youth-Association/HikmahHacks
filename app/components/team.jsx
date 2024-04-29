// Imports go here

function TeamStrip() {
    // User state (If necessary) goes here
    return (
        <div className="text-white  w-full min-h-screen bg-gray-900 flex flex-col justify-evenly items-center">
            <h1 className="text-6xl">The Team</h1>
            <div className=" grid grid-cols-5 gap-36">
                <div className=" text-white">{cardTeam("Ammar Hussein", "Developer", "1697658635083.jpg" )}</div>
                <div className="bg-black text-white">2</div>
                <div className="bg-black text-white">3</div>
                <div className="bg-black text-white">4</div>
                <div className="bg-black text-white">5</div>
                <div className="bg-black text-white">6</div>
                <div className="bg-black text-white">7</div>
                <div className="bg-black text-white">8</div>
                <div className="bg-black text-white">9</div>
                <div className="bg-black text-white">0</div>
            </div>
        </div>
    );
}

const cardTeam = (name, title, image) => {
    return(
        <>
        <div className="flex flex-col border outline-1 outline-[#D9D9D9] text-2xl rounded-3xl ">
        <div className="mb-4">
        <img className=" object-cover w-96 rounded-t-3xl"src="1697658635083.jpg"  alt="Ammar" />
        </div>
            <p className="text-lg text-center mb-3">
                {name}
            </p>
            <p className="text-xl text-center pb-4">
                {title}
            </p>
        </div>
        </>
    )
}

// Any helper functions/components go here

export default TeamStrip;
