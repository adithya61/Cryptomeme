import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi";

const Dictionary = () => {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="text-2xl">Crypto Dictionary</div>
        <div className="text-gray-500 text-base">
          Your one-stop to catch up on all crypto terms
        </div>
      </div>
      <div className="mt-8 flex flex-col w-full items-center relative">
        <div
          className="items-center  border border-white border-opacity-20
      rounded-lg object-cover w-fit"
        >
          <img
            className="rounded-lg"
            src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"
            alt=""
          />
          <div className=" absolute top-[88%] ml-4 mb-4 backdrop-blur-[3px] w-fit">
            <div className=" text-2xl text-gray-100">Web3 + Degen Glossary</div>
            <div className="text-base text-gray-200 opacity-50">
              Your own Crypto Dictionary
            </div>
          </div>
          <div
            className="border border-white border-opacity-20 rounded-full absolute p-4 bottom-[1rem]
            left-[85%] w-fit bg-black bg-opacity-20 "
          >
            <HiOutlineBookOpen size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
