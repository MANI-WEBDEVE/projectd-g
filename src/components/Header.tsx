"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      {/* this is for esktop navigation */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-10 z-[100] backdrop-blur-md">
        <div>
          <Image
            src={"/image/logo.png"}
            height={110}
            width={110}
            alt="logo"
            className=""
          />
        </div>
        <div className="hidden md:block">
          <div className="flex gap-5">
            <Link href={"#"}>
              <p className="text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  ">
                Home
              </p>
            </Link>
            <Link href={"#"}>
              <p className="text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  ">
                About Us
              </p>
            </Link>
            <Link href={"#"}>
              <p className="text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  ">
                Services
              </p>
            </Link>
            <Link href={"#"}>
              <p className="text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  ">
                Portfolio
              </p>
            </Link>
            <Link href={"#"}>
              <p className="text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  ">
                Testimonial
              </p>
            </Link>
            <Link href={"#"}>
              <p className="text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  ">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
        {/* mobile navigation here */}
        <div className="block lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <Button variant={"ghost"} onClick={() => setIsSheetOpen(true)}>
              <Menu />
            </Button>
            <SheetContent>
              <div className="">
                <Image
                  src={"/image/logo.png"}
                  height={110}
                  width={110}
                  alt="logo"
                  // className=""
                />
              </div>
              <div className="hidden md:block">
                <div className="flex gap-5">
                  <Link href={"#"}>
                    <p className="text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  ">
                      Home
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  ">
                      About Us
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  ">
                      Services
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  ">
                      Portfolio
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  ">
                      Testimonial
                    </p>
                  </Link>
                  <Link href={"#"}>
                    <p className="text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  ">
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
