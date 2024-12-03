'use client'
import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { gsap, random } from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
  const component = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // Check for window to ensure this code runs only on the client
  //   if (typeof window !== undefined) {
  //     const ctx = gsap.context(() => {
  //       const tl = gsap.timeline();
  //       tl.fromTo(
  //         ".dpname",
  //         {
  //           x: -100,
  //           opacity: 0,
  //           rotate: -10,
  //         },
  //         {
  //           x: 0,
  //           opacity: 1,
  //           rotate: 0,
  //           duration: 1,
  //           ease: "elastic.out(2, 0.6)",
  //           transformOrigin: "right top",
  //           delay:1,
  //           stagger: {
  //             each: 0.1,
  //             from: "random",
  //           },
  //         }
  //       );
  //     }, component);
  //     return () => ctx.revert(); // Cleanup on unmount
  //   }
  // }, []);

  const renderLetter = (name: string) => {
    if (!name) return null;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation opacity- inline-block`}
      >
        {letter}
      </span>
    ));
  };

  
  return (
    <div>
      <BackgroundLines className="flex items-center justify-center mt-[6rem] w-full flex-col px-4 md:mt-[24rem] min-[769px]:mt-16 ">
        <h2 ref={component} className="bg-clip-text text-transparent text-center bg-gradient-to-bl from-[#49ceb3] to-[#db6b7a] dark:to-white text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative font-bold tracking-tight opacity-1">
          {["Transform", "Your", "Vision", "Into", "Digital", "Art"].map((word, index) => (
            <span key={index} className="inline-block">
              {word.split("").map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className="dpname inline-block"
                >
                  {letter}
                </span>
              ))}
              {" "}
            </span>
          ))}
        </h2>
        <p className="para max-w-xl mx-auto text-xs md:text-lg text-neutral-300 dark:text-neutral-200 text-center px-4">
          Expert creative agency specializing in logo design, graphic design,
          and eye-catching thumbnails. Bringing your ideas to life with
          professional and innovative digital solutions.
        </p>
      </BackgroundLines>
    </div>
  );
};

export default Hero;
