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
        duration: 0.5,
        ease: "power3.out",
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
        duration: 0.5,
        ease: "power3.in",
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
        className={`fixed left-0 top-0 z-[202] h-screen w-[80%] transform bg-[#1F1F1F] shadow-lg translate-x-[-100%]`}
      >
        <div className="px-10">
          <div className="flex justify-between items-center pt-4">
            <Image src="/image/logo.png" height={110} width={110} alt="logo" />
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="h-8 w-8 hover:animate-ping" />
            </button>
          </div>

          <div className="mt-10 space-y-2 flex flex-col justify-center gap-6">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                onClose();
              }}
            >
              <p className="text-[#76c9b8] text-lg transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                Home
              </p>
            </a>
            <Link href="/aboutus" onClick={onClose}>
              <p className="text-[#76c9b8] text-lg transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
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
              <p className="text-[#76c9b8] text-lg transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                Services
              </p>
            </a>
            <Link href="#" onClick={onClose}>
              <p className="text-[#76c9b8] text-lg transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                Portfolio
              </p>
            </Link>
            <Link href="#" onClick={onClose}>
              <p className="text-[#76c9b8] text-lg transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
                Testimonial
              </p>
            </Link>
            <Link href="#" onClick={onClose}>
              <p className="text-[#76c9b8] text-lg transition-all duration-300 cursor-pointer hover:text-white/80 hover:text-md">
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
