import PortfolioCard from "@/components/PortfolioCard";
import React from "react";
import { TabsBtn, TabsProvider, TabsContent } from "@/components/tabs";
const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold tracking-tight leading-3 mt-40">
        PORTFOLIO
      </h1>
      <div className="min-h-screen pt-24">
        <TabsProvider defaultValue={"Magzine Ads"} wobbly={true}>
          <div className="flex justify-center mt-2">
            {/* flex items-center flex-wrap */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 dark:bg-[#1a1c20] bg-white/10 p-1 mx-4 text-white dark:text-white  rounded-md  ">
              <TabsBtn value="Magzine Ads">
                <span className="relative z-[2] uppercase border-b-[1px]  border-white/40 ">
                  Magzine Ads
                </span>
              </TabsBtn>
              <TabsBtn value="Product Packgagings">
                <span className="relative z-[2] uppercase border-b-[1px]  border-white/40">
                  Product Packgagings
                </span>
              </TabsBtn>
              <TabsBtn value="Social Media Post">
                <span className="relative z-[2] uppercase border-b-[1px]  border-white/40">
                  Social Media Post
                </span>
              </TabsBtn>
              <TabsBtn value="Flyer">
                <span className="relative z-[2] uppercase border-b-[1px]  border-white/40">
                  Flyer
                </span>
              </TabsBtn>
              <TabsBtn value="Logos">
                <span className="relative z-[2] uppercase border-b-[1px]  border-white/40">
                  Logos
                </span>
              </TabsBtn>
              <TabsBtn value="T Shirts">
                <span className="relative z-[2] uppercase border-b-[1px]  border-white/40">
                  T Shirts
                </span>
              </TabsBtn>
              <TabsBtn value="e Book">
                <span className="relative z-[2] uppercase border-b-[1px]  border-white/40">
                  e Book
                </span>
              </TabsBtn>
              <TabsBtn value="Products">
                <span className="relative z-[2] uppercase border-b-[1px]  border-white/40">
                  Products
                </span>
              </TabsBtn>
              <TabsBtn value="Thumbnails">
                <span className="relative z-[2] uppercase border-b-[1px]  border-white/40">
                  Thumbnails
                </span>
              </TabsBtn>
              <TabsBtn value="Illustrations">
                <span className="relative z-[2] uppercase border-b-[1px]  border-white/40">
                  Illustrations
                </span>
              </TabsBtn>
            </div>
          </div>

          <TabsContent value="Magzine Ads">
            <div className="">
              <PortfolioCard value="Magzine Ads" />
            </div>
          </TabsContent>
          <TabsContent value="Product Packgagings">
            <div className="">
              <PortfolioCard value="Product Packgagings" />
            </div>
          </TabsContent>
          <TabsContent value="Social Media Post">
            <div className="">
              <PortfolioCard value="Social Media Post" />
            </div>
          </TabsContent>
          <TabsContent value="Flyer">
            <div className="">
              <PortfolioCard value="Flyer" />
            </div>
          </TabsContent>
          <TabsContent value="Logos">
            <div className="">
              <PortfolioCard value="Logos" />
            </div>
          </TabsContent>
          <TabsContent value="T Shirts">
            <div className="">
              <PortfolioCard value="T Shirts" />
            </div>
          </TabsContent>
          <TabsContent value="e Book">
            <div className="">
              <PortfolioCard value="e Book" />
            </div>
          </TabsContent>
          <TabsContent value="Products">
            <div className="">
              <PortfolioCard value="Products" />
            </div>
          </TabsContent>
          <TabsContent value="Thumbnails">
            <div className="">
              <PortfolioCard value="Thumbnails" />
            </div>
          </TabsContent>
          <TabsContent value="Illustrations">
            <div className="">
              <PortfolioCard value="Illustrations" />
            </div>
          </TabsContent>
        </TabsProvider>
      </div>
    </div>
  );
};

export default PortfolioPage;
