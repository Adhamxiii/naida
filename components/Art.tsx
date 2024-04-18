import React from "react";
import Filter from "./Filter";

const Art = () => {
  return (
    <div className="w-full h-fit flex justify-center flex-col gap-12 py-[55px] px-[100px]">
      <h1 className="text-[40px] font-semibold leading-[120%] text-white">
        Hot Drop <span className="text-primary-300">For You!</span> 🔥
      </h1>
      <Filter />
    </div>
  );
};

export default Art;
