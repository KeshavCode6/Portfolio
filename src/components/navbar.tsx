"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { CiMenuBurger } from "react-icons/ci"
import logo from "@/public/logo.png"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FaCreditCard, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { Handshake, Moon, Send, Sun, User } from "lucide-react"
import { useTheme } from "./theme"
import { cn } from "@/lib/utils"


export const handleLinkClick = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const links = [
  { id: "#about", label: "About" },
  { id: "#skills", label: "Skills" },
  { id: "#projects", label: "My Work" },
];


export function NavbarLinks({ className }: { className?: string }) {
  const [activeLink, setActiveLink] = useState("#about");


  const onScroll = () => {
    links.forEach(({ id }) => {
      const element = document.querySelector(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 0) {
          setActiveLink(id);
        }
      }
    });
  };

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);


  return (
    <>
      {links.map(({ id, label }) => (
        <Button
          key={id}
          variant={"link"}
          className={cn(`hover:text-blue-800 text-lg ${activeLink === id ? "text-blue-600" : "text-foreground/60"
            } transition-all duration-200`, className)}
          onClick={() => { handleLinkClick(id); setActiveLink(id); }}
        >
          {label}
        </Button>
      ))}
    </>
  );
}


function ContactDropdown({ className }: { className?: string }) {
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Contact Me <Handshake /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Link
              href="mailto:keshavrshah@gmail.com"
              className="flex flex-row items-center gap-2 text-black dark:text-white"
            >
              <FaEnvelope /> Email
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="https://www.linkedin.com/in/keshav-shah-975297301/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-2 text-black dark:text-white"
            >
              <FaLinkedin /> LinkedIn
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="https://github.com/KeshavCode6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-2 text-black dark:text-white"
            >
              <FaGithub /> GitHub
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="https://www.credly.com/users/keshav-shah.939947b9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-2 text-black dark:text-white"
            >
              <FaCreditCard /> Credly
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(true)
  const handleScroll = () => {
    setScrolled(window.scrollY > 30)
  }

  useEffect(() => {

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    handleScroll()
  }, [])

  return (
    <motion.nav
      animate={{ y: scrolled ? 0 : -5, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className={`w-full flex justify-between px-4 sm:px-32 py-4 fixed top-0 left-0 right-0 z-50 dark:border-gray-800 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b shadow-sm" : "bg-transparent"
        }`}
    >
      {/* Logo Section */}
      <Link href="/" className="font-bold text-xl flex items-center gap-2">
        <Image src={logo || "/placeholder.svg"} alt="Logo" width={40} className="pointer-events-none" />
        <p>Keshav Shah</p>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row gap-4 md:gap-8 items-center">
        <NavbarLinks />
      </div>

      <div className="flex gap-2 items-center">
        <Button
          onClick={toggleTheme}
          variant={"outline"}
          size={"icon"}
        >
          {theme === "dark" ? <Sun className="text-white" /> : <Moon />}
        </Button>
        <ContactDropdown className="hidden md:flex" />
      </div>


      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <CiMenuBurger className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[300px] flex flex-col">
          <SheetTitle>
            Menu
          </SheetTitle>
          <NavbarLinks />
          <ContactDropdown />

        </SheetContent>
      </Sheet>
    </motion.nav>
  )
}

