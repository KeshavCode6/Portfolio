"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import { usePathname } from "next/navigation";

export default function Navbar({ children, className }: { children?: React.ReactNode; className?: string }) {
  const path = usePathname();

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Navbar Section */}
      <header className="h-fit sticky top-0 w-full flex justify-between px-4 sm:px-16 py-4 z-50 bg-background/80 backdrop-blur-lg border-b">
        {/* Logo Section */}
        <Link href="/" className="font-bold text-lg flex items-center gap-4">
          <Image src={logo} alt="Logo" width={15} height={15} />
          <h1>Keshav Shah</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-row gap-4 md:gap-8 items-center">
          <Link href="/" className={` hover:text-blue-500 ${path =="/"? "text-blue-300":"text-foreground/60"} transition-all duration-200`}>
            About
          </Link>
          <Link href="/skills" className={` hover:text-blue-500 ${path =="/skills"? "text-blue-300":"text-foreground/60"} transition-all duration-200`}>
            Skills
          </Link>
          <Link href="/work" className={` hover:text-blue-500 ${path =="/work"? "text-blue-300":"text-foreground/60"} transition-all duration-200`}>
            My Work
          </Link>
          <Link href="/resume" className={` hover:text-blue-500 ${path =="/resume"? "text-blue-300":"text-foreground/60"} transition-all duration-200`}>
            Resume
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="sm:hidden">
              <CiMenuBurger className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">

          </SheetContent>
        </Sheet>
      </header>

      {/* Main Content Section */}
      <main className={`flex-grow z-40 overflow-auto ${className || ""}`}>
        {children}
      </main>


      {/* Grid Overlay */}
      <div className="z-30 opacity-40 absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
}
