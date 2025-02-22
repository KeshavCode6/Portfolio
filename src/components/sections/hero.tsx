"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, UserIcon } from "lucide-react"
import Link from "next/link"
import headshot from "@/public/headshot.png"
import Image from "next/image"
import { handleLinkClick } from "../navbar"

export function Hero() {
    return (
        <div
            className="relative flex flex-col md:flex-row items-center justify-center min-h-[95vh] px-4 py-12 gap-8 md:gap-16 lg:gap-24 xl:gap-48 z-40 mb-16 pt-32 sm:pt-0"
            id="about"
        >
            <div className="text-center md:text-left max-w-2xl">
                <p className="text-sm md:text-xl font-semibold text-blue-500 mb-2">Student Software Developer</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Hey, I&apos;m Keshav!</h1>
                <p className="text-sm md:text-md max-w-md mx-auto md:mx-0 mb-6">
                    My mission is to develop software to create mobile and web applications backed by emerging technologies like
                    AI & Machine Learning that solve real world problems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button className="w-full sm:w-auto text-sm" size="lg" onClick={() => handleLinkClick("#projects")}>
                        View My Work <ArrowDown className="h-4 w-4 ml-2" />
                    </Button>
                    <Button className="w-full sm:w-auto text-sm" variant="outline" size="lg" asChild>
                        <Link
                            target="_blank"
                            href="https://drive.google.com/file/d/1EDpeBsYK5f9UZKujKS0qOuPL2LBlxMan/view?usp=sharing"
                        >
                            View My Resume <UserIcon className="h-4 w-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="bg-blue-900/[0.05] rounded-full p-2">
                <Image
                    src={headshot || "/placeholder.svg"}
                    alt="headshot"
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover"
                    unoptimized
                />
            </div>
        </div>
    )
}

