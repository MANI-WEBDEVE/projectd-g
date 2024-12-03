"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";

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
            <Link href={"/"}>
              {/* I change the text color for better interactivity, 
              I removing this #00ffcc */}
              <p className="text-[#fff] font-bold transition-all ease-out duration-[0.2s] cursor-pointer hover:text-[#38d6b7]">
                Home
              </p>
            </Link>
            <Link href={"/aboutus"}>
              <p className="text-[#fff] font-bold transition-all ease-out duration-[0.2s] cursor-pointer hover:text-[#38d6b7]">
                About Us
              </p>
            </Link>
            <Link href={"#services"}>
              <p className="text-[#fff] font-bold transition-all ease-out duration-[0.2s] cursor-pointer hover:text-[#38d6b7]">
                Services
              </p>
            </Link>
            <Link href={"#"}>
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
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <Button variant="ghost" onClick={() => setIsSheetOpen(true)}>
              <Menu />
            </Button>
            <SheetContent
              className="w-[80%] h-full bg-[#1F1F1F] text-white fixed left-0 top-0 shadow-lg transition-transform ease-in-out"
              side="left"
            >
              <div className="p-10 mt-20">
                <div className="flex justify-between items-center">
                  <Button
                    variant="ghost"
                    className="text-white absolute right-0"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <X className="w-8 h-8" />
                  </Button>
                </div>
                <div className="mt-10 space-y-4">
                  <Link href={"#"}>
                    <p className="text-[#fff] text-lg font-bold transition-all ease-out duration-[0.2s] cursor-pointer hover:text-white/80">
                      Home
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#fff] text-lg font-bold transition-all ease-out duration-[0.2s] cursor-pointer hover:text-white/80">
                      About Us
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#fff] text-lg font-bold transition-all ease-out duration-[0.2s] cursor-pointer hover:text-white/80">
                      Services
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#fff] text-lg font-bold transition-all ease-out duration-[0.2s] cursor-pointer hover:text-white/80">
                      Portfolio
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#fff] text-lg font-bold transition-all ease-out duration-[0.2s] cursor-pointer hover:text-white/80">
                      Testimonial
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#fff] text-lg font-bold transition-all ease-out duration-[0.2s] cursor-pointer hover:text-white/80">
                      Contact Us
                    </p>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Header;
