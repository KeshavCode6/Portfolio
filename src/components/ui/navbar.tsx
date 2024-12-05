"use client"
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from '@/components//ui/button';
import logo from "@/public/logo.svg"
import Image from "next/image";
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';


function Navbar({ children }: { children?: React.ReactNode }) {

  return (
    <>
      <header className="sticky top-0 w-full flex justify-between px-4 sm:px-16 py-4 z-50 bg-background/80 backdrop-blur-lg border-b">
        <Link href="/" className='font-bold text-lg flex items-center gap-4'>
          <Image src={logo} alt="Logo" width={15} height={15} />
          <h1>Keshav Shah</h1>
        </Link>
        <div className='hidden sm:flex flex-row gap-4 md:gap-8 items-center'>
          <Link href="/#about" className="text-foreground/60 hover:text-blue-500  transition-all duration-200">About Us</Link>
          <Link href="/#programs" className="text-foreground/60 hover:text-blue-500 transition-all duration-200">Our Programs</Link>
          <Link href="/contact" className="text-foreground/60 hover:text-blue-500 transition-all duration-200">Contact</Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="sm:hidden">
              <CiMenuBurger className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="/#about" className="text-foreground/60 hover:text-foreground">About Us</Link>
              <Link href="/#programs" className="text-foreground/60 hover:text-foreground">Our Programs</Link>
              <Link href="/contact" className="text-foreground/60 hover:text-foreground">Contact</Link>

              <Button asChild>
                <Link target='_blank' href="https://forms.gle/9cAKaWxixZu7WHP5A">Join Waitlist</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className='z-0'>
        {children}
      </main>
    </>
  )
}

export default Navbar;