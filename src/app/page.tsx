import type { Metadata } from "next";
import Hero from "@/components/Hero";
import InfiniteLogo from "@/components/InfiniteLogo";
import Services from "@/components/ServicesSection";
import "./globals.css"
import PrograssBar from "@/components/PrograssBar";
// import HeroAnimated from "@/components/HeroAnimated";
export default function Home() {
  return (
    <>
    
    
      <Hero />
      <InfiniteLogo />
      <Services />
      <div className="w-full h-1/2 flex items-center justify-center  text-4xl font-bold mt-32 md:mt-10  uppercase">
        <h2>Our <span className="text-blue-500 font-thin">Skills</span></h2>
      </div>
      <section className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center px-10 place-content-center gap-4  mt-20 md:mt-10">
      <PrograssBar valuePer={89.7} point={"Logo Creation"}/>
      <PrograssBar valuePer={85.6} point={"Graphic Design"}/>
      <PrograssBar valuePer={81.5} point={"Video Editing & Animation"}/>
      <PrograssBar valuePer={82.3} point={"Brand Marketing"}/>
      <PrograssBar valuePer={84.5} point={"Web Design & Development"}/>
      </section>
      {/* <HeroAnimated/> */}
    </>
  );
}

export const metadata: Metadata = {
  title: "Digital-Pencil✏",
  description:
    "Digital-Pencil is a creative agency that specializes in creating bespoke digital experiences. From logo design to website development, we provide innovative solutions that drive results. Contact us today to learn more.",
    
};
  