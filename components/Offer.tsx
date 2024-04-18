import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const Offer = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center bg-gradient-to-b from-[#0D0D12] via-[rgba(0,0,0,0.35)] to-black">
      <div className="absolute inset-0 overflow-hidden -z-10 scale-x-[-1]">
        <Image
          src="/bg.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          className="opacity-50 absolute"
        />
      </div>

      <div className="w-full h-fit flex justify-center items-center gap-[183px] px-[100px]">
        <div className="h-fit flex flex-col justify-center gap-[21px]">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[40px] text-white leading-[120%]">
              Earn up to <span className="text-primary-300">15.4% APY</span>
              with Naida Token
            </h3>
            <p className="text-white text-lg font-semibold leading-[155%]">
              Commit Naida tokens to earn a share of daily trading fees in WETH,
              in addition to even more Naida.
            </p>
          </div>
          <CustomButton>Start Earning</CustomButton>
        </div>
        <div className="flex justify-between items-center">
          <Image src="/soap.png" alt="soap" width={468} height={586} />
        </div>
      </div>
    </div>
  );
};

export default Offer;
