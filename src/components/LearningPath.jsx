import pathOne from "../assets/images/learning_svg/path_1.svg";
import pathTwo from "../assets/images/learning_svg/path_2.svg";
import pathThree from "../assets/images/learning_svg/path_3.svg";
import pathFour from "../assets/images/learning_svg/path_4.svg";
import pathFive from "../assets/images/learning_svg/path_5.svg";
import learningPathImage from "../assets/images/learning_path_img_2.png";
import { useState } from "react";
import Accordoin from "./Accordoin";
import Image from "./Image";
import { IoIosCheckmark } from "react-icons/io";
import Countdown from "react-countdown";
import { BsClock } from "react-icons/bs";
import { BiArrowToRight } from "react-icons/bi";

const LearningPath = () => {
  const [openOne, setOpenOne] = useState(true);
  const [openTwo, setOpenTwo] = useState(true);
  const [tasks, setTasks] = useState([1, 2, 3, 4, 5, 6]);
  const accordImgOne =
    "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png";
  const accordImgTwo =
    "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png";

  return (
    <div className="flex flex-col relative md:bottom-[15rem] lg:bottom-[7rem] items-center overflow-hidden">
      <div className="flex relative top-[3rem] left-[-2rem]">
        <img
          className="path-one hidden  md:block left-[8rem]"
          src={pathOne}
          alt="path"
        />
        {/* Accordion */}
        <div
          className="flex w-[12rem] md:w-[25rem] lg:w-[46rem] 
          left-[6.5rem] md:left-[8rem]
         relative lg:top-[-3rem]"
        >
          <Accordoin
            image={accordImgOne}
            setIsOpen={setOpenOne}
            isOpen={openOne}
            tasks={tasks}
          />
        </div>
        <div
          className=" hidden md:block relative md:right-[2rem] lg:right-[10rem] 
          md:top-[13rem] lg:top-[10rem] lg:z-[-1]
         md:w-[35rem] lg:w-[40rem] h-[10rem]"
        >
          <img src={pathTwo} alt="learning path continues" />
        </div>
        {/* image in path */}
        <div
          className="flex flex-col items-start relative  md:right-[7rem] lg:right-[10rem] 
        top-[40rem] md:top-[10rem]"
        >
          <div className="rounded-full w-fit ml-16 border border-white border-opacity-20">
            <IoIosCheckmark size={30} fill="gray" />
          </div>
          <div className="mt-4">
            <Image img={learningPathImage} quests={false} />
          </div>
          <div
            className="object-cover w-fit p-2  rounded-full bg-black
            border border-white border-opacity-20 relative left-[4rem] bottom-[2rem]"
          >
            <img
              src="https://www.intract.io/assets/lock-icon-2019798d.svg"
              alt="Locked"
            />
          </div>
          <div className="mt-[-2rem] flex flex-col items-start">
            <div className="md:text-ls lg:text-xl w-[17rem] text-gray-400">
              Intract Certified: Learner NFT
            </div>
            <p className="text-gray-700 text-sm">
              Your crypto black-belt certificate
            </p>
            <div
              className=" text-gray-400 border border-white bg-[#151515]
              border-opacity-20 text-base text-center px-12 py-2 w-fit rounded-lg mt-4"
            >
              Claim
            </div>
          </div>
        </div>
      </div>
      {/* Path goes on */}
      <div className=" relative hidden md:block bottom-[-2rem]  md:left-[20rem] lg:left-[28.5rem] z-[-1]">
        <img src={pathThree} alt="dotted path" />
      </div>
      <div
        className=" flex w-[12rem] md:w-[25rem] lg:w-[46rem] 
       relative bottom-[-48rem] md:bottom-[-1rem] lg:bottom-[-1rem] left-[-4rem] md:left-[1rem] lg:left-[10rem]"
      >
        <Accordoin
          image={accordImgTwo}
          setIsOpen={setOpenTwo}
          isOpen={openTwo}
          tasks={tasks}
        />
      </div>
      <div className="relative hidden md:block right-[22rem] bottom-[5rem]">
        <img src={pathFour} alt="" />
      </div>
      {/* second image in path */}
      <div className="flex flex-col items-start relative bottom-[-72rem] md:bottom-[20rem] lg:bottom-[17rem]
       right-[-2rem] md:right-[17rem] lg:right-[29rem]">
        <div className="rounded-full w-fit ml-16 border border-white border-opacity-20">
          <IoIosCheckmark size={30} fill="gray" />
        </div>
        <div className="mt-4">
          <Image
            img="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png"
            quests={false}
          />
        </div>
        <div
          className="object-cover w-fit p-2  rounded-full bg-black
            border border-white border-opacity-20 relative left-[4rem] bottom-[2rem]"
        >
          <img
            src="https://www.intract.io/assets/lock-icon-2019798d.svg"
            alt="Locked"
          />
        </div>
        <div className="mt-[-2rem] flex flex-col items-start">
          <div className="text-xl w-[17rem] text-gray-400">
            Intract Certified: Learner NFT
          </div>
          <p className="text-gray-700 text-sm">
            Your crypto black-belt certificate
          </p>
          <div
            className=" text-gray-400 border border-white bg-[#151515]
              border-opacity-20 text-base text-center px-12 py-2 w-fit rounded-lg mt-4"
          >
            Claim
          </div>
        </div>
      </div>
      {/* path five */}
      <div className="relative hidden md:block md:bottom-[32rem] md:right-[27rem] md:z-[-1] ">
        <img src={pathFive} alt="path goes on" />
      </div>
      {/* path end last part rows */}
      <div className="flex flex-col md:flex-row mt-[80rem] md:mt-[-42rem] gap-3 relative md:left-[6rem] lg:left-[14rem] ">
        <div className="w-[20rem] h-fit rounded-lg  flex flex-col gap-3">
          {/* Timer */}
          <div className="flex flex-col gap-2 p-3 bg-[#151515] rounded-lg">
            <span className="text-gray-500 text-base flex justify-start items-center gap-2">
              {" "}
              <span>
                <BsClock size={10} fill="orange" />
              </span>{" "}
              Reward Unlocks In
            </span>
            <div className="border border-dashed border-opacity-40 border-gray-500"></div>
            <div
              className="py-5 px-8 border flex flex-col border-white border-opacity-20 rounded-lg
               bg-black bg-opacity-70 text-gray-400
            justify-center items-center text-3xl timer"
            >
              <Countdown date={Date.now() + 20000000} />
              <div className="flex text-sm gap-5">
                <span>Days</span>
                <span>Hrs</span>
                <span>Mins</span>
                <span>Sec</span>
              </div>
            </div>
          </div>
          {/* imgae + button */}
          <div className="flex flex-col rounded-lg bg-[#151515]">
            <div className="p-3 rounded-lg">
              <img
                src="https://www.intract.io/assets/kol-reward-12e6ae06.gif"
                alt="animation"
              />
            </div>
            <div className="flex flex-col">
              {/* content */}
              <div className="flex flex-row justify-between p-3">
                <div className="text-gray-400 text-sm">Exclusive Community</div>
                <div className="flex flex-row items-center gap-2">
                  {" "}
                  <span className="h-3 w-3">
                    <img
                      src="https://www.intract.io/assets/discord-50baa5cf.svg"
                      alt=""
                    />
                  </span>{" "}
                  Earndrop
                </div>
              </div>
              {/* dashed line */}
              <div className="border border-dashed border-opacity-20 border-gray-500"></div>
              <div className="flex flex-col gap-3 p-3">
                <div className="flex justify-between text-gray-400 text-xs">
                  Complete all essential quests{" "}
                  <span className="rounded-full border border-white border-opacity-30 w-fit h-fit">
                    <IoIosCheckmark size={15} />
                  </span>
                </div>
                <div className="flex justify-between text-gray-400 text-xs">
                  Complete ateast 1 alpha Hub quest today{" "}
                  <span className="rounded-full border border-white border-opacity-30 w-fit h-fit">
                    <IoIosCheckmark size={15} />
                  </span>
                </div>
                <div
                  className="border border-white border-opacity-20 flex text-base justify-center items-center
                gap-3 rounded-lg px-4 py-2 bg-[#252525]"
                >
                  Claim Now <BiArrowToRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* single box */}
        <div className=" w-[20rem] md:w-[18rem] md:mt-[2rem] md:ml-[2rem] flex flex-col">
          <div className="p-4 flex flex-col bg-[#151515] rounded-lg">
            <span className="text-sm text-gray-400">Rewards info</span>
            <div className="h-[1px] bg-opacity-20 w-full bg-white mt-4"></div>
            <div className="flex flex-col gap-3 mt-4 text-[15px]">
              <div className=" text-gray-100">
                Free access to paid KOL (crypto earning) communities!
              </div>
              <div className=" text-gray-400">
                Win access to exclusive earning communities of some of the the
                greatest earners in crypto for a month, every 24 hours. Get
                access to unmatched insights, a close-knit community of the best
                airdrop earners, and more.
              </div>
              <div className=" text-gray-400">
                To win: make sure you've connected your Twitter and Discord
                accounts - and follow our criteria!
              </div>
            </div>
          </div>
          <div className="hidden md:block h-[7rem] bg-white bg-opacity-20 w-[1px] relative left-[10rem]"></div>
          <div className="hidden md:block  h-[1px] bg-white bg-opacity-20 w-[15.5rem] relative right-[5.5rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
