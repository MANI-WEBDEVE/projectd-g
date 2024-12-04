"use client";
import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useEffect, useRef } from "react";

const Hero = () => {
  const component = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const words = [
    "Expert",
    "creative",
    "agency",
    "specializing",
    "in",
    "logo",
    "design,",
    "graphic",
    "design,",
    "and",
    "eye-catching",
    "thumbnails.",
    "Bringing",
    "your",
    "ideas",
    "to",
    "life",
    "with",
    "professional",
    "and",
    "innovative",
    "digital",
    "solutions.",
  ];

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Check for window to ensure this code runs only on the client
    if (typeof window !== undefined) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.fromTo(
          component.current,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "elastic.out(2, 0.6)",
            transformOrigin: "right top",
            delay: 1,
            stagger: {
              each: 0.1,
            },
          }
        );

        // Word animation
        const words: any = textRef.current?.querySelectorAll(".word");
        gsap.set(words, { opacity: 0 }); // Set initial state

        gsap.to(words, {
          scrollTrigger: {
            trigger: textRef.current,
            start: "top center",
            end: "bottom center",
            markers: true,
            scrub: 1,
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          duration: 0.5,
          stagger: {
            each: 0.2,
            from: "start",
          },
          ease: "power2.inOut",
        });
      }, component);
      return () => ctx.revert(); // Cleanup on unmount
    }
  }, []);

  return (
    <div>
      <BackgroundLines className="flex items-center justify-center mt-[6rem] w-full flex-col px-4 md:mt-[24rem] min-[769px]:mt-16 ">
        <h2
          ref={component}
          className="bg-clip-text text-transparent text-center bg-gradient-to-bl from-[#49ceb3] to-[#db6b7a] dark:to-white text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative font-bold tracking-tight opacity-0 dpname"
        >
          Transform Your Vision <br /> Into Digital Art
        </h2>
        <div
          ref={textRef}
          className="para max-w-xl mx-auto text-xs md:text-lg text-neutral-300 dark:text-neutral-200 text-center px-4"
        >
          {words.map((word, index) => (
            <span key={index} className="word inline-block mx-1 opacity-0">
              {word}
            </span>
          ))}
        </div>
      </BackgroundLines>
    </div>
  );
};

export default Hero;
