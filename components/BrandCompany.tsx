import Image from "next/image";
import React from "react";

const BrandCompany = () => {
  return (
    <div className="w-full h-fit flex justify-center items-center px-[100px] py-6 mt-44 mb-12">
      <div className="w-full h-fit flex justify-between items-center">
        <Image src="/Logo-01.svg" alt="logo1" width={152} height={30} />
        <Image src="/Logo-02.svg" alt="logo1" width={152} height={30} />
        <Image src="/Logo-03.svg" alt="logo1" width={152} height={30} />
        <Image src="/Logo-04.svg" alt="logo1" width={152} height={30} />
        <Image src="/Logo-05.svg" alt="logo1" width={152} height={30} />
      </div>
    </div>
  );
};

export default BrandCompany;
