"use client";
import React from "react";
import Image from "next/image";
import "./infinite-logo.css";

const InfiniteLogo = () => {
  const logos = [
    "https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-7.png",
    "https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-2.png",
    "https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-4.png",
    "https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-1.png",
    "https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-17.png",
    "https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-5.png",
    "https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-6.png",
    "https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-12.png",
    "https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-7.png",
    "https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-8.png",
    "https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-9.png",
    "https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-10.png",
    "https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-11.png",
    "https://digitalpencil.tech/wp-content/uploads/2024/11/nlogo-13.png",
  ];

  // Double the logos for seamless infinite scroll
  const doubledLogos = [...logos];

  return (
    <>
      <div
        className="slider pb-20"
        style={
          {
            "--width": "84px",
            "--height": "50px",
            "--quantity": doubledLogos.length,
          } as React.CSSProperties
        }
      >
        <div className="list">
          {doubledLogos.map((logo, index) => (
            <div
              key={index}
              className="item"
              style={{ "--position": index + 1 } as React.CSSProperties}
            >
              <Image
                src={logo}
                height={100}
                width={100}
                alt={`Brand logo ${index + 1}`}
                className="object-contain rounded-md cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteLogo;
