// Imports go here
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";


function Footer() {
    // User state (If necessary) goes here
    return (
        <>
        {/* JSX goes here.*/}
        <div className="bg-[#1C1D22]">
        <div className="container mx-auto px-[30vem]">
            <h1 className="text-gray-50 text-3xl p-5 text-center">Contact us</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Grid Item 1 */}
                <div className="p-4 rounded-md shadow-md">
                <h1 className="text-2xl text-gray-50 font-bold">Got any questions? Contact us!</h1>
                <p className="text-xl mt-2.5 text-[#4FFFA0]">admin@hikmahhacks.com</p>

                    {/* Social Media Icons */}
                    <div className="py-4 ">
                        <button><RxDiscordLogo className="inline-block rounded-full size-[55px]" color="#D1D5DB"/></button>

                        <button><FaInstagram className="inline-block rounded-full size-[55px] ml-6" color="#D1D5DB"/></button>


                        <img
                            className="inline-block rounded-full size-[55px] ml-6"
                            src="https://via.placeholder.com/150"
                            />
                        <img
                            className="inline-block rounded-full size-[55px] ml-6"
                            src="https://via.placeholder.com/150"
                        /></div>
                
                </div>

                {/* Grid Item 2 */}
                <div className="p-4 mb-3">
                        <button className="text-xl text-gray-300 bg-[#26272D] rounded-full min-w-full p-3 text-left hover:bg-[#2b2c32]">
                          <FaPhoneAlt className="inline-block rounded-full size-[50px] mr-4 bg-[#31333D] p-3" color="#4FFFA0" />(905) 527-1111
                        </button>

                        <button className="text-xl  text-gray-300 bg-[#26272D] rounded-full min-w-full p-3 mt-2 text-left hover:bg-[#2b2c32]">
                        <MdAlternateEmail className ="inline-block rounded-full size-[50px] mr-4 bg-[#31333D] p-2" color="#4FFFA0" />admin@hikmahhacks.com</button>
        
                </div>
            </div>
        </div>
    </div>

        </>
    );
}
// Any helper functions/components go here

export default Footer;