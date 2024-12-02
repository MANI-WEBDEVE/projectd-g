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
    <>
      {/* Desktop navigation */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-10 z-[100] backdrop-blur-md">
        <div>
          <Image src={"/image/logo.png"} height={110} width={110} alt="logo" />
        </div>
        <div className="hidden md:block">
          <div className="flex gap-5">
            <Link href={"#"}>
              <p className="text-[#76c9b8] transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                Home
              </p>
            </Link>
            <Link href={"#"}>
              <p className="text-[#76c9b8] transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                About Us
              </p>
            </Link>
            <Link href={"#services"}>
              <p className="text-[#76c9b8] transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                Services
              </p>
            </Link>
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
        <div className="block lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <Button variant="ghost" onClick={() => setIsSheetOpen(true)}>
              <Menu />
            </Button>
            <SheetContent
              className="w-[80%] h-full bg-[#1F1F1F] text-white fixed left-0 top-0 shadow-lg transition-transform duration-300 ease-in-out"
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
                    <p className="text-[#76c9b8] text-lg transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                      Home
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#76c9b8] text-lg transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                      About Us
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#76c9b8] text-lg transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                      Services
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#76c9b8] text-lg transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                      Portfolio
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#76c9b8] text-lg transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                      Testimonial
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#76c9b8] text-lg transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                      Contact Us
                    </p>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Header;
