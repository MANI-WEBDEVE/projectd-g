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
            y: 200,
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
            // markers: true,
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
      <BackgroundLines className="flex items-center justify-center mt-[6rem] w-full flex-col px-4 md:mt-[24rem] min-[769px]:mt-16 relative">
        <div className=" w-full h-full  absolute ">
        <iframe className="w-full h-full" src="https://app.endlesstools.io/embed/e3b727da-353c-4d46-be8e-a7d0b8a11e93
        " ></iframe>
        </div>
        <h2 ref={component} className="bg-clip-text text-transparent text-center bg-gradient-to-bl from-[#49ceb3] to-[#db6b7a] dark:to-white text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative font-bold tracking-tight opacity-0 dpname">
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






















// @ts-nocheck
// 'use client';

// import { useScroll, useTransform, motion } from 'framer-motion';
// import { useEffect, useRef } from 'react';

// export default function index() {
//   const container = useRef();
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start', 'end end'],
//   });

//   return (
//     <>
//       <main ref={container} className='relative h-[200vh] bg-black  '>
//         <Section1 scrollYProgress={scrollYProgress} />
//         <Section2 scrollYProgress={scrollYProgress} />
//         <footer className='group bg-[#06060e] '>
//           <h1 className='text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
//             ui-layout
//           </h1>
//           <div className='bg-black text-white h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'></div>
//         </footer>
//       </main>
//     </>
//   );
// }

// const Section1 = ({ scrollYProgress }) => {
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
//   return (
//     <motion.section
//       style={{ scale, rotate }}
//       className='sticky  font-semibold top-0 h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black'
//     >
//       <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

//       <h1 className='2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
//         An Hero section Animation <br /> Scroll Please 👇
//       </h1>
//     </motion.section>
//   );
// };

// const Section2 = ({ scrollYProgress }) => {
//   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

//   return (
//     <motion.section
//       style={{ scale, rotate }}
//       className='relative h-screen bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white '
//     >
//       <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
//       <article className='container mx-auto relative z-10 '>
//         <h1 className='text-6xl leading-[100%] py-10 font-semibold  tracking-tight '>
//           Images That doesn't Make any sense <br /> but still in this section
//         </h1>
//         <div className='grid grid-cols-4 gap-4'>
//           <img
//             src='https://images.unsplash.com/photo-1717893777838-4e222311630b?w=1200&auto=format&fit=crop'
//             alt='img'
//             className=' object-cover w-full rounded-md h-full'
//           />
//           <img
//             src='https://images.unsplash.com/photo-1717618389115-88db6d7d8f77?w=500&auto=format&fit=crop'
//             alt='img'
//             className=' object-cover w-full rounded-md'
//           />
//           <img
//             src='https://images.unsplash.com/photo-1717588604557-55b2888f59a6?w=500&auto=format&fit=crop'
//             alt='img'
//             className=' object-cover w-full rounded-md h-full'
//           />
//           <img
//             src='https://images.unsplash.com/photo-1713417338603-1b6b72fcade2?w=500&auto=format&fit=crop'
//             alt='img'
//             className=' object-cover w-full rounded-md h-full'
//           />
//         </div>
//       </article>
//     </motion.section>
//   );
// };