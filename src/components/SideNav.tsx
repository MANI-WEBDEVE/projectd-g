"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { gsap } from "gsap";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav = ({ isOpen, onClose }: SideNavProps) => {
  const sideNavRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Animate overlay
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      // Animate sidenav
      gsap.to(sideNavRef.current, {
        x: 0,
        duration: 1,
        ease: "elastic.inOut(1, 0.6)",
      });
    } else {
      // Animate overlay out
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });

      // Animate sidenav out
      gsap.to(sideNavRef.current, {
        x: "-100%",
        duration: 1,
        ease: "elastic.inOut(1, 0.6)",
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={onClose}
        className={`fixed inset-0 z-[201] bg-black/80 opacity-0 transition-opacity ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      />

      {/* Side Navigation */}
      <div
        ref={sideNavRef}
        className={`fixed left-0 top-0 z-[202] h-screen w-[100%] translate-x-[-100%] transform bg-[#000000] shadow-lg`}
      >
        <div className="px-10">
          <div className="flex items-center justify-between pt-4">
            <Link href={"/"}>
              <Image
                src="/image/logo.png"
                height={110}
                width={110}
                alt="logo"
                onClick={onClose}
              />
            </Link>
            <button
              onClick={onClose}
              className="text-white/70 transition-colors hover:text-white"
            >
              <X className="h-8 w-8 hover:animate-ping" />
            </button>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-6 space-y-2">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                onClose();
              }}
            >
              <p className="relative hover:text-md cursor-pointer text-2xl font-bold uppercase text-[#76c9b8] transition-all duration-300 hover:text-white/80">
                Home
              </p>
         
            </a>
            <Link href="/aboutus" onClick={onClose}>
              <p className="hover:text-md cursor-pointer text-2xl font-bold uppercase text-[#76c9b8] transition-all duration-300 hover:text-white/80">
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
                onClose();
              }}
            >
              <p className="hover:text-md cursor-pointer text-2xl font-bold uppercase text-[#76c9b8] transition-all duration-300 hover:text-white/80">
                Services
              </p>
            </a>
            <Link href="portfolio" onClick={onClose}>
              <p className="hover:text-md cursor-pointer text-2xl font-bold uppercase text-[#76c9b8] transition-all duration-300 hover:text-white/80">
                Portfolio
              </p>
            </Link>
            <Link href="workprocess" onClick={onClose}>
              <p className="hover:text-md cursor-pointer text-2xl font-bold uppercase text-[#76c9b8] transition-all duration-300 hover:text-white/80">
                Work Process
              </p>
            </Link>
            <Link href="contact" onClick={onClose}>
              <p className="hover:text-md cursor-pointer text-2xl font-bold uppercase text-[#76c9b8] transition-all duration-300 hover:text-white/80">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
