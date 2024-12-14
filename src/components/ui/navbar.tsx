"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import Rain from "./rain";

export default function Navbar({ children, className }: { children?: React.ReactNode; className?: string }) {
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
          <Link href="/skills" className="text-foreground/60 hover:text-blue-500 transition-all duration-200">
            Skills
          </Link>
          <Link href="/work" className="text-foreground/60 hover:text-blue-500 transition-all duration-200">
            My Work
          </Link>
          <Link href="/resume" className="text-foreground/60 hover:text-blue-500 transition-all duration-200">
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
            <nav className="flex flex-col gap-4">
              <Link href="/#about" className="text-foreground/60 hover:text-foreground">
                About Us
              </Link>
              <Link href="/#programs" className="text-foreground/60 hover:text-foreground">
                Our Programs
              </Link>
              <Link href="/contact" className="text-foreground/60 hover:text-foreground">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      {/* Main Content Section */}
      <main className={`flex-grow z-40 overflow-auto ${className || ""}`}>
        {children}
      </main>
      {/* Background Shapes */}
      <div className="absolute left-0 right-0 top-0 bottom-0 z-30 overflow-hidden">
        {/* Circles */}
        <div className="bg-blue-500 w-32 h-32 rounded-full absolute top-10 left-10 opacity-75" />
        <div className="bg-blue-500 w-40 h-40 rounded-full absolute top-20 right-20 opacity-75" />
        <div className="bg-blue-500 w-24 h-24 rounded-full absolute bottom-10 left-1/2 opacity-75 transform -translate-x-1/2" />

        {/* Triangles */}
        <div
          className="absolute w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-blue-400 opacity-80 top-1/4 left-1/4 transform rotate-12"
        />
        <div
          className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-blue-300 opacity-60 bottom-12 right-1/3 transform rotate-45"
        />

        {/* Squares */}
        <div className="bg-blue-300 w-20 h-20 absolute top-5 right-1/4 opacity-70 transform rotate-6" />
        <div className="bg-blue-300 w-16 h-16 absolute bottom-16 left-20 opacity-50 transform -rotate-12" />

        {/* Rectangles */}
        <div className="bg-blue-400 w-24 h-12 absolute top-10 right-5 opacity-80 transform -rotate-6" />
        <div className="bg-blue-400 w-32 h-16 absolute bottom-5 left-10 opacity-60 transform rotate-3" />

        {/* Additional Shapes */}
        <div className="bg-blue-500 w-48 h-48 rounded-full absolute top-1/4 right-5 opacity-50" />
        <div className="bg-blue-500 w-30 h-30 rounded-full absolute top-12 left-1/3 opacity-65" />
        <div
          className="absolute w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[50px] border-b-blue-200 opacity-75 top-1/3 right-1/5 transform rotate-30"
        />
      </div>


      {/* Grid Overlay */}
      <div className="z-30 bg-white/10 backdrop-blur-3xl absolute inset-0" />
      <div className="z-30 opacity-30 absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
}
