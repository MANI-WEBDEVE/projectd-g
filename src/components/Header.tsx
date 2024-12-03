"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SideNav from "@/components/SideNav";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="container mx-auto">
      {/* Desktop navigation */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-10 z-[100] backdrop-blur-lg">
        <div>
          <Link href={"/"}>
            <Image
              src={"/image/logo.png"}
              height={110}
              width={110}
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-5">
            <Link
              href="/"
              // onClick={(e) => {
              //   e.preventDefault();
              //   window.scrollTo({ top: 0, behavior: "smooth" });
              // }}
            >
              <p className="text-[#76c9b8] transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md"></p>
            </Link>
            <Link href={"/aboutus"}>
              <p className="text-[#fff] font-bold transition-all ease-out duration-[0.2s] cursor-pointer hover:text-[#38d6b7]">
                About Us
              </p>
            </Link>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <p className="text-[#76c9b8] transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md"></p>
            </a>
            <Link href={"portfolio"}>
              <p className="text-[#fff] font-bold transition-all ease-out duration-[0.2s] cursor-pointer hover:text-[#38d6b7]">
                Portfolio
              </p>
            </Link>
            <Link href={"#"}>
              <p className="text-[#fff] font-bold transition-all ease-out duration-[0.2s] cursor-pointer hover:text-[#38d6b7]">
                Testimonial
              </p>
            </Link>
            <Link href={"#"}>
              <p className="text-[#fff] font-bold transition-all ease-out duration-[0.2s] cursor-pointer hover:text-[#38d6b7]">
                Contact Us
              </p>
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsSheetOpen(true)}
            className="p-2 hover:bg-transparent"
          >
            <Menu style={{ width: "28px", height: "28px" }} />
          </button>
          <SideNav isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
