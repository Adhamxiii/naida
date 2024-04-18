import React from "react";
import NFTCard from "./NFTCard";

const HeroOrbit = () => {
  return (
    <div className="relative w-fit h-fit flex justify-center items-center mt-40 ">
      <div className="w-[464px] h-[464px] rounded-full border border-white border-opacity-20 absolute">
        <NFTCard
          title="Balistic Wave Collection #1"
          pos="top-left"
          img="/nft1.png"
        />
        <NFTCard
          title="Atomic Balls Collection #5"
          type="white"
          pos="right"
          img="/nft2.png"
        />
        <NFTCard title="Magnus Humanoid #3" pos="bottom-left" img="/nft3.png" />
      </div>
      <div className="w-[580px] h-[580px] rounded-full border border-white border-opacity-20 " />
    </div>
  );
};

export default HeroOrbit;
