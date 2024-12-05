import Hero from "@/components/Hero";
import InfiniteLogo from "@/components/InfiniteLogo";
import Services from "@/components/ServicesSection";
import "./globals.css"
import Scene from "@/components/Scene/Scene";
export default function Home() {
  return (
    <>
    
      <Scene/>
      <Hero />
      <InfiniteLogo />
      <Services />
    
    </>
  );
}
