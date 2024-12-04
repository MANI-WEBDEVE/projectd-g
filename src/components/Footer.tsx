import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" flex flex-col md:flex-row justify-between items-center px-5 py-10  text-white w-full h-full mt-14 md:mt-10 gap-10 border-t-[1px] border-neutral-900">
      <div className="flex flex-col justify-center items-center w-full md:w-[20%]">
        <Image
          src={
            "https://digitalpencil.tech/wp-content/themes/nrgagency/img/footer-logo.png"
          }
          width={200}
          height={200}
          alt="footer-logo"
        />
        <p className="font-thin text-xs  tracking-widest  text-center">
          eBooks Design, Flyers Design, Illustrations, Logo Design, Magazine
          Ads, Product Packgagings, Products Design, Social Media Post, T
          Shirts, Thumbnails Design, Web Design & Dvelopemnt & Mobile
          Application Development
        </p>
      </div>
      <div className="flex gap-5 ml-10 items-center justify-center">
        <Link href="https://www.facebook.com/profile.php?id=61553864795239&mibextid=qi2Omg&rdid=dCjCE905Gz5bNCKT#">
          <a target="_blank" rel="noopener noreferrer">
            <Facebook className="w-8 h-8 text-blue-700 cursor-pointer" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/digitalpencil.786/profilecard/?igsh=M3djbnpudXhzem9y">
          <a target="_blank" rel="noopener noreferrer">
            <Instagram className="w-8 h-8 text-pink-700 cursor-pointer" />
          </a>
        </Link>
        <Link href="https://www.youtube.com/@digitalpencil786">
          <a target="_blank" rel="noopener noreferrer">
            <Youtube className="w-9 h-9 text-red-700 cursor-pointer" />
          </a>
        </Link>
        <Link href="https://www.tiktok.com/@digitalpencil786?_t=8rKTibCOpIO&_r=1">
          <a target="_blank" rel="noopener noreferrer">
            <FaTiktok
              className=" cursor-pointer text-black fill-slate-200"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </Link>
      </div>
      <div>
        <p className=" text-[12px] md:text-[16px] tracking-wider text-center">
          Copyright © 2024 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
