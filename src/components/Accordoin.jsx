import React from "react";
import AccordoinCard from "./AccordoinCard";
import Image from "./Image";
import { RiArrowDropDownFill } from "react-icons/ri";

const Accordoin = ({ image, isOpen, setIsOpen, tasks }) => {
  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div
      className={
        ` cursor-pointer rounded-tr-3xl rounded-tl-3xl border-[1px] border-white border-opacity-20
            text-white w-full bg-[#1A1616] bg-opacity-60 h-[14.25rem] hover:bg-[#1e2022] ` +
        `${
          isOpen
            ? " rounded-bl-none rounded-br-none"
            : " rounded-bl-3xl rounded-br-3xl"
        }`
      }
    >
      <div className="h-full ">
        <div className="h-full" onClick={() => toggle()}>
          <div className="flex items-center h-full w-full">
            {/* Accordion image */}
            <div className="flex p-[1.5rem] w-full">
              <Image img={image} quests={true} />
              {/*  column 2 */}
              <div className="flex flex-col ml-4 ">
                <span className="text-2xl mb-2">Basics of Crypto </span>
                <p className="text-gray-400 mb-4 text-base leading-5">
                  The safest and easiest place to start <br /> your crypto
                  journey!
                </p>
                <div className="border-[1px] border-dashed border-gray-500">
                  {" "}
                </div>
                <div className="flex rounded-full text-sm w-[7rem] mt-6 bg-[#252525] px-3 py-2">
                  {" "}
                  {/* coin */}
                  <img
                    className="w-4 h-4 mr-1"
                    src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
                    alt="coin"
                  />
                  1490 XPs
                </div>
              </div>
              <span className="h-4 w-4 relative bottom-4 right-2">
                <RiArrowDropDownFill
                  size={45}
                  color="gray"
                  className={
                    isOpen ? " rotate-180 duration-200" : " duration-200"
                  }
                />
              </span>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className=" flex flex-col w-full h-[20rem] overflow-y-scroll bg-[#121212] bg-opacity-70">
            {/* card */}
            {tasks.map((task) => (
              <AccordoinCard key={task} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordoin;
