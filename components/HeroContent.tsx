import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center h-fit w-[590px] gap-12 max-md:w-full">
      <div className="flex flex-col">
        <div className="w-fit h-[41px] rounded-full bg-white bg-opacity-5 flex justify-center items-center border border-[#CACACA] p-2 gap-3 text-white text-[16px] font-semibold max-md:text-[12px] max-md:gap-1">
          New update is coming
          <span>
            <Image src="/rightArrow.svg" alt="right" width={24} height={24} />
          </span>
        </div>
        <div className="mt-6">
          <h1 className="text-white text-[80px] font-semibold max-md:text-[40px]">
            Discover your own NFT{" "}
            <span className="text-primary_300 text-opacity-90">here!</span>
          </h1>
          <p className="text-white text-lg font-medium leading-[155%]">
            Buy and Sell your favorite NFT here from the top artist in the
            world, more than 10.000 collection are available just for you
          </p>
        </div>
      </div>
      <div className="flex gap-12 max-md:flex-col">
        <CustomButton typeBtn="primary">Find NFT</CustomButton>
        <CustomButton typeBtn="secondary">Create NFT</CustomButton>
      </div>
      <div className="flex gap-8 max-md:flex-col">
        <div className="flex flex-col gap-2">
          <p className="text-white text-lg font-medium leading-[155%]">
            Artwork
          </p>
          <p className="text-white text-[32px] font-extrabold tracking-[2%]">
            10.5K
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white text-lg font-medium leading-[155%]">
            Artist
          </p>
          <p className="text-white text-[32px] font-extrabold tracking-[2%]">
            1.1K
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white text-lg font-medium leading-[155%]">
            Collection
          </p>
          <p className="text-white text-[32px] font-extrabold tracking-[2%]">
            485
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
