import React from "react";
import { BackgroundLines } from "./ui/background-lines";

const Hero = () => {
  return (
    <div>
      <BackgroundLines className="flex items-center justify-center mt-[6rem] w-full flex-col px-4 md:mt-[24rem] min-[769px]:mt-16 ">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-bl from-[#49ceb3] to-[#db6b7a] dark:to-white text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative font-bold tracking-tight">
          Transform Your Vision <br /> Into Digital Art
        </h2>
        <p className="max-w-xl mx-auto text-xs md:text-lg text-neutral-300 dark:text-neutral-200 text-center px-4">
          Expert creative agency specializing in logo design, graphic design,
          and eye-catching thumbnails. Bringing your ideas to life with
          professional and innovative digital solutions.
        </p>
      </BackgroundLines>
    </div>
  );     
};

export default Hero;
