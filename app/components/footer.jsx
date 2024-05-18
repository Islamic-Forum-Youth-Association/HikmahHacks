// Imports go here
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    // User state (If necessary) goes here
    return (
        <>
        {/* JSX goes here.*/}
        <div id="contact" className="bg-[#1C1D22] z-10">
        <h1 className="text-5xl text-center text-gray-50 font-bold">Got any questions? Reach out!</h1>

        <div className="container mx-auto px-[30vem] min-h-[90vh] xl:min-h-[50vh] -z-10">
            <div className="grid grid-cols-1  gap-32  p-20">
                {/* Grid Item 1 */}
                <div className="p-4 rounded-md  text-center ">
                <p className="text-xl mt-2.5 text-[#4FFFA0]"><a href="mailto:hikmahhacks@gmail.com">hikmahhacks@gmail.com</a></p>

                    {/* Social Media Icons */}
                    <div className="py-4  flex flex-row [&>*]:px-2 justify-center">
                        <a href="DiscordLink"><button><RxDiscordLogo size={64} className="inline-block rounded-full mr-2 " color="#D1D5DB"/></button></a>

                        <a href="http://instagram.com/hikmahhacks"><button><FaInstagram size={64} className="inline-block rounded-full" color="#D1D5DB"/></button></a>


                        <a href="https://twitter.com/hikmahhacks"><button><FaXTwitter size={64} className="inline-block rounded-full " color="#D1D5DB"/></button></a>

                      </div>
                
                </div>

                
            </div>
            <p className="text-center text-white">&#169; Islamic Forum of Canada {new Date().getFullYear()}</p>

        </div>

    </div>
        </>
    );
}
// Any helper functions/components go here

export default Footer;