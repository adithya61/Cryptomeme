import { IoIosCheckmark } from "react-icons/io";

const AccordoinCard = () => {
  return (
    <div className="bg-[#1C1C1C] p-2 m-2 rounded-xl flex justify-between gap-2">
      {/* <div className="p-2 w-full h-8 flex"> */}
      <div className="w-[7.5rem] h-[5rem]">
        <img
          className=" object-cover"
          src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png"
          alt=""
        />
      </div>
      {/* content */}
      <div>
        <div className="text-white font-medium text-lg w-full p-1">
          #1: But what is crypto and web3?
        </div>
        <div className="border border-dashed border-gray-200  border-opacity-20 mt-2"></div>
        <div className="flex mt-2 gap-2">
          {" "}
          <span className="w-14">11 Tasks</span>{" "}
          <div
            role="progress"
            className="h-[1rem] rounded-xl w-[100%] outline outline-black border border-white
        border-opacity-30 bg-[#2F2F2F]"
          >
            {" "}
          </div>
        </div>
      </div>
      {/* tick */}
      <div className="w-fit flex flex-col justify-end ">
        <div className="rounded-full border border-white border-opacity-20">
          <IoIosCheckmark size={30} fill="gray" />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AccordoinCard;
