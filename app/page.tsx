import Art from "@/components/Art";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-full h-fit flex justify-center flex-col gap-12 py-[55px] px-[100px] max-w-[1440px] mx-auto">
        <Hero />
        <Art />
        <Offer/>
      </div>
    </>
  );
};

export default Home;
