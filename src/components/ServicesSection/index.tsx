"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import Image from "next/image";
import servicesData from "@/json/serviceData.json";
const Services = () => {
  return (
    <div
      id="services"
      className="h-full md:h-full w-full text-white flex flex-col items-center mt-10 justify-center md:justify-between px-10"
    >
      <div className="mt-14 text-4xl font-bold upperacse">
        Our Services
      </div>
     
      <Tabs defaultValue={servicesData[0].value} className="w-full h-[600px] py-5 grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center">
          {/* Tabs List */}
          <TabsList className="grid grid-cols-2 h-auto gap-2 bg-[#5FBEB5] rounded-lg p-2">
            {servicesData.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="px-4 py-2 text-xs md:text-base rounded-lg text-gray-900"
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          {servicesData.map((item) => (
              <TabsContent key={item.value} value={item.value} className="mt-6 md:h-1/2 mb-5 w-full md:w-full bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-sm md:text-lg font-bold mb-2 text-[#76c9b8]">
                  {item.title}
                </h2>
                <p>{item.description}</p>
              </TabsContent>
          ))}
        </Tabs>
    </div>
  );
};

export default Services;
