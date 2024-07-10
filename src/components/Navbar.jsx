import { FaBars, FaSearch } from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import broadcast from "../assets/images/broadcast.svg";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed z-10 w-screen border-b border-white border-opacity-20">
      <div className=" flex h-14 w-screen items-center justify-around bg-[rgba(0,0,0,0.3)]">
        <div className="">
          <img className=" h-4 md:h-5 lg:h-8" src={logo} alt="brand-logo" />
        </div>
        <ul
          className="links hidden lg:flex md:gap-5 lg:gap-6 xl:gap-7
         text-xs md:text-sm lg:text-base 
           ml-12  bg-transparent font-medium text-gray-300"
        >
          <li>Compass</li>
          <li>Explore</li>
          <li>
            Academy{" "}
            <span className="text-white text-[12px] font-normal bg-[#6434E9] rounded-lg px-1 py-1.2">
              New
            </span>
          </li>
          <li>NFT's</li>
          <li>For Projects</li>
        </ul>

        <div className="search flex items-center p-3 gap-3 bg-[#181818] rounded-full ml-20 ">
          {" "}
          <FaSearch fill="grey" />
          <input
            className="bg-[#181818] hidden md:flex md:w-60 lg:80 text-[0.75rem]"
            type="text"
            placeholder="Search for ecosystems trending quests etc,."
          />
        </div>
        <div className="flex gap-1 ml-3">
          <div className="flex gap-3 items-center justify-center">
            <div className="border border-orange-400 rounded-full p-[0.5rem] md:p-[0.55rem] lg:p-[0.65rem] ">
              <img src={broadcast} alt="broadcast" />
            </div>
            <div
              className="py-1 md:py-1 w-16 md:w-16 lg:w-24 text-center
             hover:bg-gray-300 cursor-pointer text-base  font-[400] md:font-[500] lg:font-[600] text-black
              bg-white rounded-lg"
            >
              Sign In
            </div>
          </div>
        </div>
        <div
          className="p-5 md:px-0 lg:hidden cursor-pointer z-10 ml-2"
          onClick={handleClick}
        >
          {isOpen ? <CgClose size={20} /> : <FaBars size={20} />}
        </div>
      </div>
      <div className="current w-28 h-1 hidden lg:block bg-white text-white rounded-lg absolute  left-[32%]"></div>
      {/* mobile menu */}
      {isOpen && (
        <ul
          className="links flex flex-col inset-0 fixed
             justify-center items-center gap-20 md:gap-26 text-sm md:text-base w-screen h-screen
             bg-black font-medium text-gray-300 transition-all duration-500 ease-in-out "
        >
          <li>Compass</li>
          <li>Explore</li>
          <li>
            Academy{" "}
            <span className="text-white text-[12px] font-normal bg-[#6434E9] rounded-lg px-1 py-1.2">
              New
            </span>
          </li>
          <li>NFT's</li>
          <li>For Projects</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
