import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
export default function login() {
  return (
    <main>
      {/* Background Graphics */}
      <div className="absolute h-screen w-screen bg-[#1C1D22] flex justify-center items-center  ">
        <div className="absolute  h-screen w-screen flex overflow-hidden  bg-[url('/photo-1692977579997-948328cdb7d2.avif')] opacity-20  bg-cover bg-center  bg-no-repeat [&>*]:blur-none"></div>

        <div className="flex flex-col justify-center fixed bg-opacity-35 rounded-xl gap-y-3 px-10 md:px-20  items-center   z-10">
          <h1 className=" text-3xl md:text-4xl text-center text-[#D6F1F6] opacity-55 -translate-y-[15vh] mb-5">
            {" "}
            &gt; WELCOME TO <br></br> HIKMAH{" "}
          </h1>
          {/* Login Form */}
          <div className="-translate-y-16 flex flex-col p-3 md:scale-150">

            {/* Email container */}
            <div className="email">
              {/* Icon for input */}
              <MdOutlineEmail className="translate-y-7 ml-2"  color="white"/>
              <input
                type="text"
                name="email"
                id="email"
                className="rounded-full bg-transparent outline outline-1 pt-2 pb-2 pl-9 placeholder:text-white text-white font-thin "
                placeholder="Email"
              />
            </div>

            {/* Password Container */}
            <div className="password pt-3">
              <RiLockPasswordFill className="translate-y-7 ml-2" color="white" />
              <input
                type="password"
                name="password"
                id="password"
                className="rounded-full bg-transparent outline outline-1 pt-2 pb-2 pl-9 placeholder:text-white text-white"
                placeholder="Password"
              />
            </div>

            <div className="pt-2 text-right">
              <a href="#" className="text-white text-xs">Forgot Password?</a>
            </div>

            <div className="login-btn pt-5">
              <button
                className="rounded-full bg-[#676767] text-white pt-2 pb-2 px-24 text-center ml-2"
              >Sign In</button>
            </div>

            <div className="login-btn pt-2 ">
              <FcGoogle className="translate-y-[28px] scale-150 mx-10"/>
              <button
                className="rounded-full bg-white text-black pt-2 pb-2 px-12
                 mx-2 text-center "
              >
                <span className="ml-5 text-sm">
                Sign in with Google

                </span>
                </button>
            </div>
            <div className="text-white text-xs text-center mt-3 scale-75">
              <a href="#">Don’t have an account? Sign up fo free!</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
