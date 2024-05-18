'use client'
// Import motion from Framer Motion
import { motion } from 'framer-motion';
import {Tilt} from 'react-tilt';
import { useInView } from 'react-intersection-observer';
function Hero() {
    // Animation variants
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5  // Adjusts when the animation triggers (50% of the element is visible)
    });
        
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: {duration: 0.2} }
    };

    const imageVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { type: 'spring', stiffness: 120 } }
    };


    const textVariants = {
        hidden: { x: -200, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    const buttonVariants = {
        hover: { scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)" },
    };


    return (
        <>
        <motion.div id="home" initial="hidden" animate="visible" variants={containerVariants} className="w-full min-h-[100vh] bg-[#26272D] flex flex-col-reverse xl:gap-x-32 xl:flex-row justify-evenly items-center flex-grow md:pt-20 xl:pt-10  md:p-3 xl:px-24 py-10 overflow-clip">
            <motion.div className="text-section mx-1/2" variants={textVariants}>
                <h1 className="md:text-6xl text-5xl xl:text-left text-center  text-white font-extrabold text-pretty">
                    Hack the Ummah <span className="xl:block inline-block">with Hikmah</span>
                </h1>
                <p className="mt-5 xl:text-left text-center text-gray-400">
                    Register today for a weekend of inspiration and creation!
                </p>
                
                <motion.div className='flex justify-center' whileHover="hover">
                    <motion.button className='text-[#4FFFA0] -translate-y-1 rounded-full bg-[#676767] py-5 z-40 px-12 font-bold mt-10 text-xl' variants={buttonVariants}>
                    <a href="https://hikmah-hacks.devfolio.co/"><b>REGISTER TODAY</b></a>
                    </motion.button>
                </motion.div>
            </motion.div>
            <Tilt lineGlareEnable={false} spotGlareEnable={false}>
            <motion.div 
            className="xl:translate-y-[-10vh] translate-y-8 xl:mt-[16vh] md:mt-[-10vh] pb-20 xl:pt-0 xl:scale-125 scale-75 md:scale-90" 
            variants={imageVariants}
            style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                willChange: 'transform'
            }}>
            <div className=" xl:translate-y-[-10vh] translate-y-16 xl:mt-[16vh]  md:mt-[-10vh] pb-0 xl:pt-0  xl:scale-125 scale-75 md:scale-90">
                <img className=" object-cover w-96  aspect-square   rounded-full"src="photo-1692977579997-948328cdb7d2.avif" alt="picture of the Green dome" />
            
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
    className=" bg-[#303136] translate-x-[-350%] translate-y-[-200%] flex-shrink rounded-full p-8 " 
    src="python.svg" alt="react.js icon" />

</div>
</div>
<div></div>
</motion.div>
</Tilt>
        </motion.div>
           
 
        <div>

      </div>

      </>

    );
}

export default Hero;