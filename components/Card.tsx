import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  price: number;
  count: string;
  time: string;
  image: string;
};

const Card = ({ title, price, count, time, image }: CardProps) => {
  return (
    <div className="w-[265px] h-[317px] flex justify-center items-center relative rounded-3xl">
      <div className="w-full h-full flex justify-center items-center">
        <Image
          src={image}
          alt="nft"
          width={265}
          height={317}
          className="rounded-3xl object-cover w-full h-full"
        />
      </div>

      <div className="w-full h-fit backdrop-blur-lg flex flex-col justify-center items-center absolute bottom-0 rounded-b-3xl">
        <div className="flex justify-between items-end w-full p-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-base text-white">{title}</h3>
            <div className="flex items-center gap-1">
              <Image src="/eth2.svg" alt="icon" width={16} height={16} />
              <p className="font-bold text-sm text-white">{price} ETH</p>
            </div>
          </div>
          <p className="font-light text-xs text-white">{count}</p>
        </div>
        <hr className="w-full bg-white bg-opacity-15" />
        <div className="flex justify-between items-center w-full px-4 py-[7px]">
          <div className="p-1 border rounded-full border-white flex items-center justify-center">
            <p className="font-light text-xs text-white align-baseline">
              {time}
            </p>
          </div>
          <div className="p-1 border rounded-full border-white flex items-center justify-center bg-primary-300">
            <p className="font-light text-xs text-white align-baseline">
              Place Bid
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
