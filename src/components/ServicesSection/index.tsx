"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import Image from "next/image";

const Services = () => {
  return (
    <div
      id="services"
      className="h-[70vh] md:min-h-screen mx-auto w-full text-white flex items-center justify-center md:justify-between px-10"
      className="max-w-7xl mx-auto min-h-screen text-white flex lg:flex-row flex-col items-center justify-between gap-20 lg:mt-5 mt-16"
    >
      <div className="hidden md:block md:w-1/2 ">
      <div className="relative flex items-center justify-center w-[420px] h-[500px] order-2 md:order-none">
        <Image
          src={"/image/bg_1.svg"}
          alt="services"
          width={400}
          height={400}
        />
      </div>
      <div>
        <Tabs defaultValue="logo" className="w-full py-5">
      <div className="w-[500px] md:order-none order-1">
        <Tabs defaultValue="logo" className="w-full max-w-3xl">
          {/* Tabs List */}
          <TabsList className="grid grid-cols-2 h-24 gap-2 bg-[#5FBEB5] rounded-lg p-2">
            <TabsTrigger
              value="logo"
              className="px-4 py-2 rounded-lg text-gray-900"
            >
              LOGO CREATION
            </TabsTrigger>
            <TabsTrigger
              value="design"
              className="px-4 py-2 rounded-lg text-gray-900"
            >
              GRAPHIC DESIGNING
            </TabsTrigger>
            <TabsTrigger
              value="models"
              className="px-4 py-2 rounded-lg text-gray-900"
            >
              3D MODELS
            </TabsTrigger>
            <TabsTrigger
              value="marketing"
              className="px-4 py-2 rounded-lg text-gray-900"
            >
              DIGITAL MARKETING
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <div className="mt-6 w-full md:w-[50vw]  bg-gray-800 p-6 rounded-lg shadow-md">
            <TabsContent value="logo">
          <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg h-full">
            <TabsContent value="logo" className="">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                LOGO CREATION
              </h2>
              <p>
                Create visually stunning logos that align with your brand
                identity.
              </p>
            </TabsContent>

            <TabsContent value="design" className="">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                Graphic Designing
              </h2>
              <p>
                Professional designs for marketing, advertising, and brand
                visibility.
              </p>
            </TabsContent>

            <TabsContent value="models" className="">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                3D Models
              </h2>
              <p>High-quality 3D models for various applications.</p>
            </TabsContent>

            <TabsContent value="marketing" className="">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                Digital Marketing
              </h2>
              <p>
                Boost your brand's online presence with our marketing
                strategies.
              </p>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
