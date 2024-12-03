"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SideNav from "@/components/SideNav";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      {/* Desktop navigation */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-10 z-[100] backdrop-blur-md">
        <div>
          <Image src={"/image/logo.png"} height={110} width={110} alt="logo" />
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
              <p className="text-[#76c9b8] transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                Home
              </p>
            </Link>
            <Link href={"/aboutus"}>
              <p className="text-[#76c9b8] transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
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
              <p className="text-[#76c9b8] transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                Services
              </p>
            </a>
            <Link href={"#"}>
              <p className="text-[#76c9b8] transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                Portfolio
              </p>
            </Link>
            <Link href={"#"}>
              <p className="text-[#76c9b8] transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                Testimonial
              </p>
            </Link>
            <Link href={"#"}>
              <p className="text-[#76c9b8] transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
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
    </>
  );
};

export default Header;
