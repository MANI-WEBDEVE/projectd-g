"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import Image from "next/image";

const Services = () => {
  return (
    <div
      id="services"
      className="h-[70vh] md:min-h-screen mx-auto w-full text-white flex items-center justify-center md:justify-between px-10"
    >
      <div className="hidden md:block md:w-1/2 ">
        <Image
          src={"/image/bg_1.svg"}
          alt="services"
          width={500}
          height={500}
        />
      </div>
      <div>
        <Tabs defaultValue="logo" className="w-full py-5">
          {/* Tabs List */}
          <TabsList className="grid grid-cols-2 h-auto gap-2 bg-[#5FBEB5] rounded-lg p-2">
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
            <TabsTrigger
              value="ecommerce"
              className="px-4 py-2 rounded-lg text-gray-900"
            >
              ECOMMERCE
            </TabsTrigger>
            <TabsTrigger
              value="webdesign&developer"
              className="px-4 py-2 rounded-lg text-gray-900"
            >
              WEB DESIGN & DEVELOPER
            </TabsTrigger>
            <TabsTrigger
              value="videoanimation"
              className="px-4 py-2 rounded-lg text-gray-900"
            >
              VIDEO ANIMATION
            </TabsTrigger>
            <TabsTrigger
              value="shirtdesign"
              className="px-4 py-2 rounded-lg text-gray-900"
            >
              T-SHIRT DESIGN
            </TabsTrigger>
            <TabsTrigger
              value="nft"
              className="px-4 py-2 rounded-lg text-gray-900"
            >
              NFT
            </TabsTrigger>
            <TabsTrigger
              value="productdesign"
              className="px-4 py-2 rounded-lg text-gray-900"
            >
              PROUDUCT DESIGN / PRODUCT PACKAGING
            </TabsTrigger>
            <TabsTrigger
              value="softwaredevelopment"
              className="px-4 py-2 rounded-lg text-gray-900"
            >
              SOFTWARE DEVELOPMENT
            </TabsTrigger>
            <TabsTrigger
              value="appdeveloper"
              className="px-4 py-2 rounded-lg text-gray-900"
            >
              APP DEVELOPER
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <div className="mt-6 w-full md:w-[50vw]  bg-gray-800 p-6 rounded-lg shadow-md">
            <TabsContent value="logo">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                Logo Creation
              </h2>
              <p>
                Logo Creation Services are essential for businesses looking to
                establish a strong brand identity. A well-designed logo serves
                as the visual cornerstone of your brand, capturing its essence
                and conveying its message to your target audience. Professional
                logo creation involves a strategic blend of creativity, design
                expertise, and market research, ensuring that your logo stands
                out in a competitive market and resonates with your customers.
                From start-ups to established companies, a custom logo helps set
                the tone for your brands visual language across various
                platforms—be it your website, social media, packaging, or
                promotional materials. Our logo creation services include a
                detailed consultation process, multiple design iterations, and a
                final product tailored to reflect your brands unique personality
                and values, leaving a memorable impression on your customers.
              </p>
            </TabsContent>

            <TabsContent value="design">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                Graphic Designing
              </h2>
              <p>
                Graphic Designing Services offer creative solutions to visually
                communicate your brands message and captivate your audience. By
                combining art and technology, professional graphic designers
                create stunning visuals such as logos, brochures, social media
                graphics, and website elements. These services help businesses
                establish a cohesive visual identity, enhance user experience,
                and leave a lasting impression on potential customers. Whether
                youre looking to build brand recognition, promote a new product,
                or refresh your existing marketing materials, graphic designing
                services cater to various needs. From concept development to
                final delivery, each project is crafted with a strategic
                approach, ensuring that your visuals align with your brands
                values and effectively engage your target market.
              </p>
            </TabsContent>

            <TabsContent value="models">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                3D Models
              </h2>
              <p>
                3D Modeling Services bring ideas to life by creating detailed
                and realistic representations of products, architectural
                designs, characters, and environments. Using advanced software
                and techniques, skilled 3D artists develop models for various
                applications, including animation, virtual reality, gaming,
                product visualization, and prototyping. These services allow
                businesses to present complex concepts in a visually engaging
                and interactive manner. From conceptual designs to final
                renderings, 3D modeling services help clients explore different
                perspectives, test functionality, and showcase their projects
                with precision and depth. Whether for marketing, training, or
                development, 3D models provide a dynamic way to visualize and
                refine ideas, making them invaluable tools for industries like
                architecture, manufacturing, and entertainment.
              </p>
            </TabsContent>

            <TabsContent value="marketing">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                Digital Marketing
              </h2>
              <p>
                Digital Marketing Services are designed to help businesses
                increase their online visibility, reach their target audience,
                and drive growth. By leveraging various strategies like search
                engine optimization (SEO), social media marketing, pay-per-click
                (PPC) advertising, email marketing, and content creation,
                digital marketing experts create customized campaigns that
                deliver measurable results. These services are essential for
                building brand awareness, generating leads, and boosting
                conversions in an increasingly digital world. From small
                businesses to large enterprises, digital marketing services
                provide a comprehensive approach to online promotion. By
                analyzing market trends and consumer behavior, these services
                ensure that your marketing efforts are aligned with your
                business goals, reaching the right customers at the right time.
                Whether you aim to increase website traffic, enhance social
                media engagement, or improve your search engine rankings,
                digital marketing services offer the expertise and tools needed
                to maximize your online presence and drive long-term success.
              </p>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
