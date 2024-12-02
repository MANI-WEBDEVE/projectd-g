import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-10 z-[100] backdrop-blur-md  ">
        <div>
          <Image
            src={"/image/logo.png"}
            height={110}
            width={110}
            alt="logo"
            className=""
          />
        </div>
        <div className="hidden md:block ">
          <div className="flex gap-5 ">
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
        <div className="block md:hidden">
          <Menu />
        </div>
      </nav>
    </>
  );
};

export default Header;
