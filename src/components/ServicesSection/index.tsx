"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import Image from "next/image";

const Services = () => {
  return (
    <div
      id="services"
      className="min-h-screen mx-auto w-full text-white flex items-center justify-between px-56"
    >
      <div>
        <Image
          src={"/image/bg_1.svg"}
          alt="services"
          width={500}
          height={500}
        />
      </div>
      <div>
        <Tabs defaultValue="logo" className="w-full max-w-3xl">
          {/* Tabs List */}
          <TabsList className="grid grid-cols-2 h-24 gap-2 bg-[#76c9b8] rounded-lg p-2">
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
          <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
            <TabsContent value="logo">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                Logo Creation
              </h2>
              <p>
                Create visually stunning logos that align with your brand
                identity.
              </p>
            </TabsContent>

            <TabsContent value="design">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                Graphic Designing
              </h2>
              <p>
                Professional designs for marketing, advertising, and brand
                visibility.
              </p>
            </TabsContent>

            <TabsContent value="models">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                3D Models
              </h2>
              <p>High-quality 3D models for various applications.</p>
            </TabsContent>

            <TabsContent value="marketing">
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
