const Image = ({ img, quests }) => {
  return (
    <div
      className="w-[10rem] h-[11.25rem] bg-[#202020] rounded-lg 
                  border-[1px] border-white border-opacity-20
                 flex items-center justify-center"
    >
      <img
        className="w-[8.875rem] h-[10.125rem] rounded-lg object-cover"
        src={img}
        alt="Basics of Crypto"
      />
      {quests && (
        <div
          className=" absolute text-white font-semibold border-[1px]
                  border-white border-opacity-40 bg-[rgba(0,0,0,0.7)] rounded-3xl px-3 py-2 text-base
                   w-[6rem] text-center top-[9.5rem] "
        >
          6 Quests
        </div>
      )}
    </div>
  );
};

export default Image;
