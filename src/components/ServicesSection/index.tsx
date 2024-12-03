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

            <TabsContent value="ecommerce">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                Ecommerce
              </h2>
              <p>
                Ecommerce Services help businesses establish and grow their
                online stores, offering a seamless shopping experience for
                customers. These services include everything from setting up and
                designing ecommerce websites to integrating secure payment
                gateways, managing inventory, and implementing effective
                marketing strategies. By providing a fully optimized and
                user-friendly platform, ecommerce services enable businesses to
                showcase their products, increase sales, and reach a global
                audience. From start-ups launching their first online shop to
                established brands looking to enhance their digital sales
                channels, ecommerce services are tailored to meet specific
                business needs. They cover a range of solutions, including
                ecommerce website development, mobile app integration, product
                listings, and analytics. With a focus on enhancing user
                experience and streamlining operations, ecommerce services help
                businesses boost their revenue and stay competitive in the
                fast-evolving online marketplace.
              </p>
            </TabsContent>
            <TabsContent value="webdesign&developer">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                Web Design & Development Service
              </h2>
              <p>
                Web Design & Development Services focus on creating
                professional, responsive, and visually appealing websites that
                meet the unique needs of businesses. These services cover
                everything from user experience (UX) design, interface layout,
                and visual branding to backend development, coding, and website
                optimization. By blending creative design with technical
                expertise, web design and development services help businesses
                build an online presence that is not only attractive but also
                functional and user-friendly. Whether you need a simple landing
                page or a complex ecommerce platform, web design and development
                services offer customized solutions tailored to your goals. With
                a focus on performance, mobile responsiveness, and SEO best
                practices, these services ensure your website ranks well in
                search engines, loads quickly, and delivers a seamless
                experience across all devices. This comprehensive approach helps
                businesses attract and engage visitors, convert leads, and
                achieve long-term growth online.
              </p>
            </TabsContent>
            <TabsContent value="videoanimation">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                Video Animation
              </h2>
              <p>
                Video Animation Services bring ideas to life by creating dynamic
                and engaging visual content that captures the audience’s
                attention. These services include a wide range of animations,
                such as explainer videos, motion graphics, 2D and 3D animations,
                and character animations. By using storytelling, vibrant
                visuals, and captivating motion, video animation effectively
                communicates complex messages, making it a powerful tool for
                marketing, training, and educational purposes. From concept
                development to final production, video animation services are
                tailored to meet the specific needs of businesses across various
                industries. Whether you want to showcase a product, explain a
                process, or tell a brand story, professional animators use
                advanced techniques and software to deliver high-quality videos
                that resonate with your target audience. This visual approach
                not only enhances brand engagement but also helps convey
                information in an easily digestible and memorable format.
              </p>
            </TabsContent>
            <TabsContent value="shirtdesign">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                T-Shirt Design
              </h2>
              <p>
                T-Shirt Design Services offer creative and custom-made designs
                to help businesses, organizations, and individuals bring their
                vision to life on apparel. These services range from simple
                logos and text-based graphics to intricate illustrations and
                patterns, catering to various styles and preferences. By
                blending creativity with an understanding of trends and market
                demands, professional designers craft unique t-shirt visuals
                that make a statement and leave a lasting impression. Whether
                for a brand launch, promotional event, team uniform, or personal
                use, t-shirt design services provide tailored solutions to suit
                any occasion. From initial concept brainstorming to final design
                adjustments, these services ensure a high-quality and
                print-ready product that aligns with your vision. With expertise
                in different printing techniques and fabric considerations,
                t-shirt design services help you create eye-catching apparel
                that stands out and represents your brand or message
                effectively.
              </p>
            </TabsContent>
            <TabsContent value="nft">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">NFT</h2>
              <p>
                NFT Design Services focus on creating unique digital artworks
                tailored for the NFT (Non-Fungible Token) marketplace. These
                services combine creativity, digital artistry, and blockchain
                technology to produce visually captivating NFTs, ranging from 2D
                and 3D art, animations, and illustrations to exclusive
                collectibles and virtual assets. NFT design experts help
                artists, brands, and collectors bring their vision to life,
                crafting digital pieces that stand out and appeal to a growing
                community of crypto enthusiasts. Whether you’re an artist
                looking to enter the NFT space or a business aiming to launch a
                new digital collection, NFT design services offer end-to-end
                solutions. From concept creation and digital rendering to
                metadata integration and marketplace listing, these services
                guide you through every step of the process. With a focus on
                originality and visual appeal, NFT design services help maximize
                the value and marketability of your digital assets, opening new
                opportunities for monetization and brand engagement in the
                evolving digital art world.
              </p>
            </TabsContent>
            <TabsContent value="productdesign">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                Product Design / Product Pakaging
              </h2>
              <p>
                Product Design and Packaging Services aim to transform ideas
                into market-ready products with appealing, functional designs.
                These services encompass everything from concept development,
                prototyping, and 3D modeling to creating user-friendly,
                innovative designs that meet both aesthetic and practical
                requirements. By focusing on usability, branding, and consumer
                appeal, product design services help businesses develop unique
                offerings that stand out in competitive markets. On the other
                hand, Product Packaging Services are dedicated to crafting
                eye-catching and effective packaging that protects the product
                and attracts customers. This includes designing packaging that
                aligns with brand identity, selecting materials, and optimizing
                the layout for various formats like boxes, bottles, or pouches.
                By combining creative design with strategic thinking, product
                packaging services enhance the unboxing experience, build brand
                recognition, and drive purchase decisions, making them a crucial
                aspect of product marketing and consumer engagement.
              </p>
            </TabsContent>
            <TabsContent value="softwaredevelopment">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                Software Development
              </h2>
              <p>
                Software Development Services provide customized solutions to
                meet the unique needs of businesses, offering everything from
                mobile apps and desktop applications to enterprise software and
                cloud-based platforms. These services involve a thorough
                analysis of business requirements, followed by the design,
                development, and deployment of high-quality software solutions.
                By using modern programming languages, development frameworks,
                and agile methodologies, software developers create scalable,
                secure, and efficient systems that streamline operations and
                improve overall business performance. Whether you a startup
                looking to build your first app or a large organization in need
                of a complex enterprise system, software development services
                cater to all levels of complexity. These services include
                ongoing maintenance and updates, ensuring your software remains
                up-to-date, secure, and optimized for future growth. By
                collaborating closely with clients throughout the development
                process, software development services help bring innovative
                ideas to life and provide solutions that drive business success
                in a technology-driven w
              </p>
            </TabsContent>
            <TabsContent value="appdeveloper">
              <h2 className="text-xl font-bold mb-2 text-[#76c9b8]">
                App Developer
              </h2>
              <p>
                Mobile Application Development Services focus on creating
                tailored mobile apps for both iOS and Android platforms,
                designed to enhance user experience and meet specific business
                needs. These services involve everything from conceptualization
                and wireframing to app design, development, and deployment on
                app stores. By utilizing the latest technologies and frameworks,
                mobile app developers build robust, scalable, and user-friendly
                apps that align with business objectives, whether for consumer
                engagement, internal processes, or e-commerce solutions. With a
                deep understanding of mobile user behavior and performance
                optimization, mobile application development services ensure
                that apps are fast, intuitive, and secure. These services
                include post-launch support, updates, and enhancements, ensuring
                that the app continues to function seamlessly as technology
                evolves. Whether you launching a new product or enhancing an
                existing app, mobile app development services help businesses
                stay competitive in the rapidly growing mobile market.
              </p>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
