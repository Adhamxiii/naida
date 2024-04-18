import Image from "next/image";
import React from "react";

type NFTCardProps = {
  type?: "white";
  pos: "top-left" | "right" | "bottom-left";
  img: string;
  title: string;
};

const NFTCard = ({ type, pos, img, title }: NFTCardProps) => {
  const getPos = () => {
    switch (pos) {
      case "top-left":
        return "-top-40 left-0";
      case "right":
        return "-right-20 top-20";
      case "bottom-left":
        return "-bottom-40 left-0";
    }
  };
  return (
    <div className={getPos() + ` card absolute`}>
      <Image
        className="object-cover rounded-3xl w-full h-full absolute"
        src={img}
        alt="nft1"
        width={130}
        height={250}
      />

      <div className="w-full h-[95px] backdrop-blur-sm p-4 flex justify-center items-center absolute bottom-0 rounded-b-3xl">
        <div className="flex flex-col gap-4 w-full">
          <h3
            className={`font-bold text-xs  ${
              type === "white" ? "text-white" : "text-[#161616] "
            }`}
          >
            {title}
          </h3>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <h4
                className={` font-bold text-[10px] ${
                  type === "white" ? "text-[#c1c1c1]" : "text-[#646464]"
                }`}
              >
                Current Bid
              </h4>
              <div className="flex items-center gap-1">
                {type === "white" ? (
                  <Image src="/eth2.svg" alt="icon" width={16} height={16} />
                ) : (
                  <Image src="/eth1.svg" alt="icon" width={16} height={16} />
                )}
                <p
                  className={` font-bold text-xs ${
                    type === "white" ? "text-white" : "text-[#161616]"
                  } `}
                >
                  0.2 ETH
                </p>
              </div>
            </div>
            <button
              className={` font-bold text-xs px-4 py-[6px] border  rounded-full ${
                type === "white"
                  ? "text-white border-white"
                  : "text-[#161616] border-[#161616]"
              } `}
            >
              Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
