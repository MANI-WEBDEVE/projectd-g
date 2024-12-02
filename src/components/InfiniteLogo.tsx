'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { animationControls } from 'framer-motion';

const InfiniteLogo = () => {
  const sliderRef = useRef(null);

  const logos = [
    'https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-7.png',
    'https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-2.png',
    'https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-4.png',
    'https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-1.png',
    'https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-17.png',
    'https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-5.png',
    'https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-6.png',
    'https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-7.png',
    'https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-8.png',
    'https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-9.png',
    'https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-10.png',
    'https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-11.png',
    'https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-12.png',
    'https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-13.png',
  ];

  useEffect(() => {
    const slider:any = sliderRef.current;
    const totalWidth = slider.offsetWidth  ;
    const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" }
      });
      tl.to(slider, {
        x: -totalWidth / 2,
        duration: 30,
        onComplete: () => {
          gsap.set(slider, { x: 0 });
        }
      });

    return () => {tl.kill()}
  }, []);

  return (
    <div className="relative overflow-hidden py-20 mt-20">
      <div ref={sliderRef} className="flex gap-8">
        {/* First set of logos */}
        <div className="flex gap-12 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="w-[150px] h-[100px] relative flex-shrink-0">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-12 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="w-[150px] h-[100px] relative flex-shrink-0">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogo;
