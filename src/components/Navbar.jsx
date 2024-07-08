import { FaSearch } from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import broadcast from "../assets/images/broadcast.svg";

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full border-b border-white border-opacity-20">
      <div className=" flex h-14 px-[6rem] w-full items-center justify-around bg-[rgba(0,0,0,0.3)] navbar">
        <img src={logo} alt="brand-logo" />
        <ul className="links flex ml-12 gap-7 bg-transparent font-medium text-gray-300">
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
            className="bg-[#181818] w-80 text-[0.75rem]"
            type="text"
            placeholder="Search for ecosystems trending quests etc,."
          />
        </div>
        <div className="flex gap-1 ml-3">
          <div className="flex gap-3 items-center justify-center">
            <div className="border border-orange-400 rounded-full p-[0.75rem]">
              <img src={broadcast} alt="broadcast" />
            </div>
            <div className="py-1 w-24 text-center hover:bg-gray-300 cursor-pointer text-base  font-[600] text-black bg-white rounded-lg">
              Sign In
            </div>
          </div>
        </div>
      </div>
      <div className="current w-28 h-1 bg-white text-white rounded-lg relative  left-[26.5rem]"></div>
    </div>
  );
};

export default Navbar;
