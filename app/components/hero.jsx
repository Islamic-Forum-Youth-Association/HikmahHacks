// Imports go here

function Hero() {
    // User state (If necessary) goes here
    return (
        <>
        <div className="w-full h-full bg-[#26272D] flex flex-col-reverse xl:gap-x-72 xl:flex-row justify-center items-center flex-grow ">
            <div className="text-section  mx-1/2   pt-20  ">
                <h1 className="md:text-6xl text-5xl xl:text-left text-center text- text-white font-extrabold" >Unlock your potential with <br></br> Hikmah</h1>
                <p className="mt-7 xl:text-left text-center  text-gray-400 mx-5">Register today for a weekend of inspiration and creation!</p>
                <div className='flex justify-center  mt-10  '><button className=' text-[#4FFFA0] -translate-y-1 rounded-full bg-[#676767] py-3 px-12 font-bold mt-10 text-xl '><b>REGISTER</b></button></div>
            </div>
            <div className=" xl:translate-y-[-3vh] translate-y-8  md:mt-[10vh] xl:pt-0  xl:scale-125 scale-75 md:scale-90 "><img className=" object-cover w-96  aspect-square   rounded-full"src="photo-1692977579997-948328cdb7d2.avif" alt="picture of the Green dome" /></div>
        </div>
        <div>

      </div>
      </>

    );
}
// Any helper functions/components go here

export default Hero;