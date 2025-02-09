"use client"
import { Button } from "@/components/ui/button";
import { ArrowDown, UserIcon } from "lucide-react";
import Link from "next/link";
import headshot from "@/public/headshot.png";
import Image from "next/image";
import React from "react";
import { handleLinkClick } from "../navbar";

export function Hero() {
    return (
        <div className="relative flex items-center justify-center h-[95vh] gap-48 z-40 mb-16 " id='about'>
            <div >
                <p className="text-sm md:text-xl font-semibold text-blue-500">
                    Student Software Developer
                </p>
                <span className="flex text-6xl gap-3 items-center justify-center md:justify-normal font-semibold leading mb-4">
                    Hey, I&apos;m Keshav!
                </span>

                <p className="text-md max-w-md mb-4">
                    My mission is to develop software to create mobile and web
                    applications backed by emerging technologies like AI & Machine
                    Learning that solve real world problems.
                </p>
                <div className="flex flex-col md:flex-row gap-2 justify-center items-center sm:justify-start">
                    <Button className="flex items-center justify-center w-fit sm:text-xs" asChild size={"lg"} onClick={() => handleLinkClick("#projects")}>
                        <span>
                            View My Work <ArrowDown className="h-4 w-4" />
                        </span>
                    </Button>
                    <Button className="flex items-center justify-center w-fit sm:text-xs" variant={"outline"} asChild size={"lg"}>
                        <Link target="_blank" href={"https://drive.google.com/file/d/1EDpeBsYK5f9UZKujKS0qOuPL2LBlxMan/view?usp=sharing"}>
                            View My Resume <UserIcon className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="bg-blue-900/[0.05] rounded-full">
                <Image src={headshot} alt="headshot" className="w-[20vw] aspect-square rounded-full" />
            </div>
        </div>
    );
}

