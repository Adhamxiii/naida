import BrandCompany from "./BrandCompany";
import HeroContent from "./HeroContent";
import HeroOrbit from "./HeroOrbit";

const Hero = () => {
  return (
    <div className="w-full bg-hero bg-cover bg-center bg-no-repeat clear-both">
      <div className="w-full h-full flex justify-center items-center gap-16 max-md:max-w-screen-lg mx-auto max-sm:flex-col">
        <HeroContent />
        <HeroOrbit />
      </div>
      <BrandCompany />
    </div>
  );
};

export default Hero;
