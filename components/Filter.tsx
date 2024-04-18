"use client";

import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Card from "./Card";
import { cardsInfo } from "../data";

const btns = [
  {
    name: "All",
    id: 1,
  },
  {
    name: "Art",
    id: 2,
  },
  {
    name: "Music",
    id: 3,
  },
  {
    name: "Sports",
    id: 4,
  },
  {
    name: "Photography",
    id: 5,
  },
  {
    name: "Trading Card",
    id: 6,
  },
];
const Filter = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (id: number) => {
    setActiveButton(id);
  };
  return (
    <div className="w-full flex justify-center items-center flex-col gap-8">
      <div className="w-full flex justify-between items-center gap-4">
        {btns.map((btn) => (
          <CustomButton
            typeBtn="filter"
            key={btn.id}
            isActive={activeButton === btn.id}
            onClick={() => handleButtonClick(btn.id)}
          >
            {btn.name}
          </CustomButton>
        ))}
      </div>
      <div className="w-full grid grid-cols-4 gap-x-[60px] gap-y-12 justify-center items-center">
        {cardsInfo.map((item: any) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <CustomButton>Discover More!</CustomButton>
    </div>
  );
};

export default Filter;
