"use client"

import { Button } from "@/components/ui/button"
import { PersonStanding, Projector } from "lucide-react"
import headshot from "@/public/headshot.png"
import Image from "next/image"
import { handleLinkClick } from "../navbar"
import Socials from "../social"
import { RotatedGridBackground } from "../background"

export function Hero() {
    return (
        <div
            className="relative flex flex-col md:flex-row items-center justify-center min-h-[100vh] px-4 py-12 gap-8 md:gap-16 lg:gap-24 xl:gap-48 z-40 pb-16 pt-32 sm:pt-0
                        dark:bg-slate-950 transition-colors duration-300"
        >
            {/* Text Content */}
            <div className="text-center md:text-left max-w-2xl">
                <p className="text-sm md:text-xl font-semibold text-blue-500 dark:text-blue-400 mb-2">
                    Machine Learning & AI Student
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-black dark:text-white">
                    Hey, I&apos;m Keshav!
                </h1>
                <p className="text-md font-light max-w-md mx-auto md:mx-0 mb-6 text-gray-700 dark:text-gray-300">
                    My mission is to engineer intelligent systems that empower people, combining AI, automation, and design
                    to solve hard problems, accelerate learning, and shape the future of human-computer collaboration.
                </p>
                <div className="flex h-24 lg:h-auto flex-col sm:flex-row gap-2 justify-center md:justify-start">
                    <Button className="text-white flex-1 w-full sm:w-auto text-sm" size="lg" onClick={() => handleLinkClick("#about")}>
                        About me <PersonStanding className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                        className="flex-1 w-full sm:w-auto text-sm dark:text-white"
                        variant="outline"
                        size="lg"
                        onClick={() => handleLinkClick("#projects")}
                    >
                        View My Work <Projector className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Headshot */}
            <div className="bg-blue-900/[0.05] mb-12 sm:mb-0 dark:bg-white/5 rounded-full p-2 pb-0 transition-colors duration-300">
                <Image
                    src={headshot}
                    alt="headshot"
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover"
                    unoptimized
                />
            </div>

            {/* Social Icons */}
            <div className="absolute left-0 right-0 justify-center bottom-10 flex gap-4 text-primary">
                <Socials />
            </div>

            {/* Grid Background */}
            <RotatedGridBackground />
        </div>
    )
}
