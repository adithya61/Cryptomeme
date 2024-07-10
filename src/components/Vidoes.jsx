import React from "react";
import { FaPlay } from "react-icons/fa6";
const Vidoes = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div className="flex flex-col justify-center items-center">
        <div className="text-white text-lg font-semibold md:text-2xl">
          Top Crypto Creators and Projects to Follow
        </div>
        <div className=" px-2 md:text-base text-gray-500 mt-2">
          Answers to your crypto doubts, straight from the experts
        </div>
      </div>
      {/* vidoes */}
      <div className="flex flex-col md:flex-row w-[80%] md:w-fit justify-between mt-16 gap-4 md:px-8">
        <div
          className="relative video-one rounded-lg border border-white border-opacity-20
        hover: cursor-pointer"
        >
          <div
            className="rounded-full border-white--custom bg-gray-800 bg-opacity-70 
          border p-1 absolute left-[16rem] md:left-[9rem] lg:left-[15rem] top-[0.5rem]"
          >
            {" "}
            <img src="https://www.intract.io/assets/reel-video-ee824737.svg" />{" "}
          </div>
          <img
            className="object-cover w-full rounded-lg"
            src="https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png"
            alt=""
          />
          <div
            className=" play-button-one absolute border-white--custom rounded-full p-2 bg-gray-700
          bg-opacity-50 bottom-[12rem] left-[7rem]"
          >
            {" "}
            <FaPlay size={25} />{" "}
          </div>
          <div
            className=" text-lg lg:text-2xl p-2 absolute bottom-1 bg-[black] bg-opacity-30
            w-full backdrop-blur-[3px] "
          >
            How to plan your retirement with Crypto ?
          </div>
        </div>
        {/* two */}
        <div
          className="relative video-one rounded-lg border border-white border-opacity-20
        hover: cursor-pointer"
        >
          <div
            className="rounded-full border-white--custom bg-gray-800 bg-opacity-70 
          border p-1 absolute left-[16rem] md:left-[9rem] lg:left-[15rem] top-[1rem]"
          >
            {" "}
            <img src="https://www.intract.io/assets/reel-video-ee824737.svg" />{" "}
          </div>
          <img
            className="object-cover w-full rounded-lg"
            src="https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png"
            alt=""
          />
          <div
            className=" play-button-one absolute border-white--custom rounded-full p-2 bg-gray-700
          bg-opacity-50 bottom-[12rem] left-[7rem]"
          >
            {" "}
            <FaPlay size={25} />{" "}
          </div>
          <div
            className=" text-lg lg:text-2xl bg-black bg-opacity-30 p-2 absolute bottom-1 bg-transparent 
           w-full backdrop-blur-[3px] "
          >
            How to plan your retirement with Crypto ?
          </div>
        </div>
        {/* three */}
        <div
          className="relative video-one rounded-lg border border-white border-opacity-20
        hover: cursor-pointer"
        >
          <div
            className="rounded-full border-white--custom bg-gray-800 bg-opacity-70 
          border p-1 absolute left-[16rem] md:left-[9rem] lg:left-[15rem] top-[1rem]"
          >
            {" "}
            <img src="https://www.intract.io/assets/reel-video-ee824737.svg" />{" "}
          </div>
          <img
            className="object-cover w-full rounded-lg"
            src="https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png"
            alt=""
          />
          <div
            className=" play-button-one absolute border-white--custom rounded-full p-2 bg-gray-700
          bg-opacity-50 bottom-[12rem] left-[7rem]"
          >
            {" "}
            <FaPlay size={25} />{" "}
          </div>
          <div className="text-2xl p-2 absolute bottom-1 bg-black bg-opacity-30  w-full backdrop-blur-[3px]">
            How to plan your retirement with Crypto ?
          </div>
        </div>
        <div
          className="relative video-one rounded-lg border border-white border-opacity-20
        hover: cursor-pointer"
        >
          <div
            className="rounded-full border-white--custom bg-gray-800 bg-opacity-70 
          border p-1 absolute left-[16rem] md:left-[9rem] lg:left-[15rem] top-[1rem]"
          >
            {" "}
            <img src="https://www.intract.io/assets/reel-video-ee824737.svg" />{" "}
          </div>
          <img
            className="object-cover w-full rounded-lg"
            src="https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png"
            alt=""
          />
          <div
            className=" play-button-one absolute border-white--custom rounded-full p-2 bg-gray-700
          bg-opacity-50 bottom-[12rem] left-[7rem]"
          >
            {" "}
            <FaPlay size={25} />{" "}
          </div>
          <div
            className="text-2xl p-2 absolute bottom-1 bg-black bg-opacity-30
            w-full backdrop-blur-[3px] "
          >
            How to plan your retirement with Crypto ?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vidoes;
