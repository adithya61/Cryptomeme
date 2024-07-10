const Image = ({ img, quests }) => {
  return (
    <div
      className=" w-[9rem] md:w-[10rem] h-[8rem] md:h-[10rem] bg-[#202020] rounded-lg 
                  border-[1px] border-white border-opacity-20
                 flex items-center justify-center"
    >
      <img
        className=" w-[5.75rem] md:w-[8.875rem] h-[6.75rem] md:h-[10.125rem] rounded-lg object-cover"
        src={img}
        alt="Basics of Crypto"
      />
      {quests && (
        <div
          className=" absolute text-white font-semibold border-[1px]
                  border-white border-opacity-40 bg-[rgba(0,0,0,0.7)] rounded-3xl px-1 md:px-3  
                  py-1 md:py-2 text-xs md:text-base
                   w-[4rem] md:w-[6rem] text-center top-[8rem] md:top[9.5rem]"
        >
          6 Quests
        </div>
      )}
    </div>
  );
};

export default Image;
