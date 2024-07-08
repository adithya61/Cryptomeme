import React from "react";
import { BsDiscord, BsSpotify, BsTelegram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="px-[8rem]">
      <div className="flex flex-row py-[4rem] justify-between ">
        <div className="flex flex-col gap-5 w-[33.3%]">
          <div className="text-2xl text-white">Intract.</div>
          <p className="text-base text-gray-500">
            We are your personal guide for exploring web3 projects & earning
            100x rewards
          </p>
        </div>
        <div className=" footer gap-10 w-full ml-[10rem] grid grid-cols-4 ">
          <div className="flex flex-col  gap-2">
            <h1 className="text-xl text-white">Intract</h1>
            <span>Explore Quests</span>
            <span>Communities</span>
            <span>Alpha Hub</span>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-white">Earn</h1>
            <span>Refer & Earn</span>
            <span>Leaderboard</span>
            <span>Achievements</span>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-white">About</h1>
            <span>Product Roadmap</span>
            <span>Affiliate Program</span>
            <span>Sign up Program</span>
            <span>Growth Community</span>
            <span>Blogs</span>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-white">Support</h1>
            <span>Help Center</span>
            <span>Create your quest</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Community Guidelines</span>
          </div>
        </div>
      </div>
      <div className="h-[1px]  bg-white bg-opacity-20"></div>

      <div className="disclaimer my-[3rem]">
        <p className="text-base text-gray-500">
          <span className="text-white">Disclaimer:</span> Crypto Products,
          Virtual Digital Assets, and NFTs are unregulated and can be highly
          risky. There may be no regulatory recourse for any loss from such
          transactions. We advise the viewer to proceed with caution. Nothing in
          this website or any communication published by us amounts to, is
          intended to be, or should be construed as investment or purchase
          advice of any kind or financial advice or promotion under any
          applicable laws. Any decision made based on the content provided on
          this website or any communication published by us shall not be
          attributable to us.
        </p>
      </div>
      <div className="h-[1px] bg-white bg-opacity-20"></div>
      <div className="flex justify-between my-[3rem]">
        <span className="text-xl capitalize">
          created by <span className=" underline">intract</span>
        </span>
        <div className="flex gap-2">
          <div className="p-2 rounded-lg bg-gray-800">
            <BsTwitter size={20} fill="#387CFF" />
          </div>
          <div className="p-2 rounded-lg bg-gray-800">
            <BsDiscord size={20} fill="#04A5BE" />
          </div>
          <div className="p-2 rounded-lg bg-gray-800">
            <BsTelegram size={20} fill="#387CFF" />
          </div>
          <div className="p-2 rounded-lg bg-gray-800">
            <BsSpotify size={20} fill="#01FF00" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
