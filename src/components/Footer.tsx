import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-10 py-10  text-white w-full h-full mt-10">
      <div className="flex flex-col w-[20%]">
        <Image
          src={
            "https://digitalpencil.tech/wp-content/themes/nrgagency/img/footer-logo.png"
          }
          width={200}
          height={200}
          alt="footer-logo"
        />
        <p className="font-thin text-xs  tracking-widest pr-10">
          eBooks Design, Flyers Design, Illustrations, Logo Design, Magazine
          Ads, Product Packgagings, Products Design, Social Media Post, T
          Shirts, Thumbnails Design, Web Design & Dvelopemnt & Mobile
          Application Development
        </p>
      </div>
      <div className="flex gap-5 items-center justify-center">
      <Facebook className="w-8 h-8 text-blue-700"/>
      <Instagram  className="w-8 h-8 text-pink-700"/>
      <Youtube className="w-9 h-9 text-red-700"/>
      <FaTiktok className=" text-black fill-slate-200" style={{width: "24px", height: "24px"}}/>
      </div>
      <div>
        <p className="text-sm tracking-wider font-light">Copyright © 2024 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
