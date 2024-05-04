// Imports go here

function Hero() {
    // User state (If necessary) goes here
    return (
        <>
        <div id="home" className="w-full min-h-[100vh] bg-[#26272D] flex flex-col-reverse xl:gap-x-32 xl:flex-row justify-evenly items-center flex-grow md:pt-20 xl:pt-10 xl:ml-32 md:p-3 xl:px-24 py-10 overflow-clip">


            <div className="text-section  mx-1/2     ">
                <h1 className="md:text-6xl text-5xl xl:text-left text-center text- text-white font-extrabold" >Unlock your potential <span className="xl:block inline-block">with Hikmah (pending byline)</span> </h1>
                <p className="mt-5 xl:text-left text-center  text-gray-400">Register today for a weekend of inspiration and creation!</p> 
                
                <div className='flex justify-center  xl:pt-10 '><button className=' text-[#4FFFA0] -translate-y-1 rounded-full bg-[#676767] py-3 px-12 font-bold mt-10 text-xl'><b>REGISTER</b></button></div>
            </div>
            
            <div className=" xl:translate-y-[-10vh] translate-y-8 xl:mt-[16vh]  md:mt-[-10vh] pb-20 xl:pt-0  xl:scale-125 scale-75 md:scale-90"><img className=" object-cover w-96  aspect-square   rounded-full"src="photo-1692977579997-948328cdb7d2.avif" alt="picture of the Green dome" />

                {/* Tech stack icons */}
                <div className= "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full drop-shadow-2xl"style={{transform: 'scale(0.55)'}}>
                    <img 
                    className=" bg-[#303136] translate-x-[40%] flex-shrink rounded-full p-8 hover:scale-125" 
                    src="nodejs.svg" alt="Node.js icon" />
                </div>
                
                <div className= "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full drop-shadow-2xl"style={{transform: 'scale(0.45)'}}>
                <img 
                    className=" bg-[#303136] translate-x-[10%] translate-y-[-350%] flex-shrink rounded-full p-8 hover:scale-125" 
                    src="react.svg" alt="react.js icon" />
                </div>

                <div className= "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full drop-shadow-xl"style={{transform: 'scale(0.38)'}}>
                <img 
                    className=" bg-[#303136] translate-x-[-350%] translate-y-[-200%] flex-shrink rounded-full p-8 hover:scale-125" 
                    src="python.svg" alt="react.js icon" />
                </div>

            </div>
            <div></div>

        </div>
        <div>

      </div>

      </>

    );
}

export default Hero;