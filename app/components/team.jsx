// Imports go here

function TeamStrip() {
    // User state (If necessary) goes here
    return (
        <div className="text-white  w-full min-h-screen bg-[#26272d] px-64 flex flex-col justify-evenly items-center">
            <h1 className="text-6xl py-28">The Team</h1>
            <div className=" grid grid-cols-5 gap-36 center">
                <div className=" text-white">{cardTeam("Ammar Hussein", "Developer", "1697658635083.jpg" )}</div>
                <div className=" text-white">{cardTeam("Ammar Hussein", "Developer", "1697658635083.jpg" )}</div>
                <div className=" text-white">{cardTeam("Ammar Hussein", "Developer", "1697658635083.jpg" )}</div>
                <div className=" text-white">{cardTeam("Ammar Hussein", "Developer", "1697658635083.jpg" )}</div>
                <div className=" text-white">{cardTeam("Ammar Hussein", "Developer", "1697658635083.jpg" )}</div>
                <div className=" text-white">{cardTeam("Ammar Hussein", "Developer", "1697658635083.jpg" )}</div>

            </div>
        </div>
    );
}

const cardTeam = (name, title, image) => {
    return(
        <>
        <div className="flex flex-col xl:w-56 border outline-1 outline-[#D9D9D9] text-2xl rounded-3xl ">
        <div className="mb-4">
        <img className=" object-cover w-[100%] rounded-t-3xl"src="1697658635083.jpg"  alt="Ammar" />
        </div>
            <p className="xl:text-lg text-center mb-3">
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
