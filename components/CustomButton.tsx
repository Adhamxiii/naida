"use client";

import React from "react";

interface CustomButtonProps {
  typeBtn?: "primary" | "secondary" | "filter";
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const CustomButton = ({
  typeBtn = "primary",
  isActive,
  onClick,
  children,
}: CustomButtonProps) => {
  let className = "";

  if (typeBtn === "primary") {
    className = "bg-primary-300 text-white";
  } else if (typeBtn === "secondary") {
    className = "text-primary-300 border border-primary-300";
  }

  if (typeBtn === "filter") {
    className =
      "text-primary-300 border border-primary-300 px-6 py-1 rounded-2xl w-fit h-fit";
  }

  if (isActive) {
    className += " active bg-primary-300 text-white";
  }

  return (
    <button
      className={`font-semibold flex items-center justify-center rounded-xl px-[19.5px] py-[16.5px] w-[160px] h-[52px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
