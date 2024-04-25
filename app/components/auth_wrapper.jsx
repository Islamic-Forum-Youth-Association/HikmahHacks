'use client'
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
export default function Auth_wrapper({
  // flags per render, login, register, forgot
  isLogin,
  isRegister,
  isForgot,
}) {
  return (
    <div>
      {/* Background Graphics */}
      <div className="absolute h-screen w-screen bg-[#1C1D22] flex justify-center items-center  ">
        <div className="absolute  h-screen w-screen flex overflow-hidden  bg-[url('/photo-1692977579997-948328cdb7d2.avif')] opacity-20  bg-cover bg-center  bg-no-repeat [&>*]:blur-none"></div>

        <div className="flex flex-col justify-center fixed bg-opacity-35 rounded-xl gap-y-3 px-10 md:px-20  items-center   z-10">
          <h1 className="text-3xl cursor-default md:text-4xl text-center text-[#D6F1F6] opacity-55 -translate-y-[15vh] mt-auto mb-5">
            {" "}
            &gt; WELCOME TO  HIKMAH{" "}
          </h1>

          {
            isLogin ? login() :
            isRegister ? register() :
            isForgot ? forgot() :
            
            <div className="text-3xl text-white">Error : Invalid Prop passed for auth_wrapper</div>
          }
        </div>
      </div>
    </div>
  );
}

{
  /* Login Form 
    Note : Renders when isLogin set to true
    */
}
const login = () => {
  return (
    <div className="-translate-y-16 flex flex-col p-3 md:scale-150">
      {/* Email container */}
      <div className="email">
        {/* Icon for input */}
        <MdOutlineEmail className="translate-y-7 ml-2" color="white" />
        <input
          type="text"
          name="email"
          id="email"
          className="rounded-full bg-transparent outline outline-1 pt-2 pb-2 pl-9 placeholder:text-white text-white  "
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

      {/* Forgot Password Hyperlink */}
      <div className="pt-2 text-right mb-3">
        <a href="#" className="text-white text-xs hover:underline">
          Forgot Password?
        </a>
      </div>

      {/* Login Btn */}

      <button className="rounded-full bg-[#676767] hover:bg-[#676777] text-white pt-2 pb-2 px-24 text-center ml-2">
        Sign In
      </button>

      <div className="login-btn pt-2 ">
        <FcGoogle className="translate-y-[28px] scale-150 mx-10" />
        <button
          className="rounded-full bg-white text-black pt-2 pb-2 px-12
     mx-2 text-center hover:bg-slate-300 "
        >
          <span className="ml-5 text-sm">Sign in with Google</span>
        </button>
      </div>
      <div className="text-white text-xs text-center mt-3 scale-75">
        <a href="#" className="hover:underline">
          Don’t have an account? Sign up fo free!
        </a>
      </div>
    </div>
  );
};


const forgot =()=>{
    return(
        <div className="text-3xl text-white">
            TODO: Forgot
        </div>
    )
}

const register = () => {
    return(
        <div className="-translate-y-16 flex flex-col p-3 md:scale-150">
        {/* Email container */}
        <div className="email">
          {/* Icon for input */}
          <MdOutlineEmail className="translate-y-7 ml-3" color="white" />
          <input
            type="text"
            name="email"
            id="email"
            className="rounded-full bg-transparent outline outline-1 pt-2 pb-2 pl-9 placeholder:text-white text-white  "
            placeholder="Email"
          />

          <span>Enter your email and we will send you a magic link </span>
        </div>
        </div>
    )
}
