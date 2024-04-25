// Imports go here

function Hero() {
    // User state (If necessary) goes here
    return (
        <>
        <div className="w-full min-h-[100vh] bg-[#26272D] flex flex-col-reverse xl:gap-x-32 xl:flex-row justify-evenly items-center flex-grow md:pt-20 xl:pt-10 md:p-3 xl:px-24 py-10 ">
            <div className="text-section  mx-1/2     ">
                <h1 className="md:text-6xl text-5xl xl:text-left text-center text- text-white font-extrabold" >Unlock your potential <span className="xl:block inline-block">with Hikmah</span> </h1>
                <p className="mt-7 xl:text-left text-center  text-gray-400 p-2">Register today for a weekend of inspiration and creation!</p>
                <div className='flex justify-center  xl:pt-10  '><button className=' text-[#4FFFA0] -translate-y-1 rounded-full bg-[#676767] py-3 px-12 font-bold mt-10 text-xl '><b>REGISTER</b></button></div>
            </div>
            <div className=" xl:translate-y-[-10vh] translate-y-8 xl:mt-[16vh]  md:mt-[-10vh] pb-20 xl:pt-0  xl:scale-125 scale-75 md:scale-90 "><img className=" object-cover w-96  aspect-square   rounded-full"src="photo-1692977579997-948328cdb7d2.avif" alt="picture of the Green dome" /></div>
        </div>
        <div>

      </div>
      </>

    );
}
// Any helper functions/components go here

export default Hero;