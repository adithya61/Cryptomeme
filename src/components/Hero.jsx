import HeroText from "../assets/images/hero_main.gif";
const Hero = () => {
  return (
    <div>
      <div className="hero  text-white">
        <div className="hero-main flex flex-col content-center items-center">
          <img
            className="hero--main-image"
            src={HeroText}
            alt="Intract Academy Animation"
          />
          <span className="mt-6 hero-text">
            Intract users{" "}
            <span className="text-gray-500">have together made more than</span>{" "}
            $100 million
            <span className="text-gray-500">in web3.</span> <br />
            <span className="text-gray-500">Join them and</span> learn how to
            earn crypto!
          </span>
          <button className="call-to-action mt-10 opacity-90 bg-[#7344EC] text-white py-2 rounded-lg font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
