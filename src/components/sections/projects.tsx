"use client"

import { useEffect, useRef, useState } from "react"
import { FaGithub, FaGlobe, FaVideo, FaCode } from "react-icons/fa"
import { SiGooglescholar } from "react-icons/si"
import { motion } from "framer-motion"
import { GridDotsBackground } from "../background"
import { Button } from "../ui/button"
import { PlaySquareIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import waves from "@/public/waves.svg"

import codeaai from "@/public/examples/codeaai.png"
import cosiva from "@/public/examples/cosiva.png"
import nsacc from "@/public/examples/nsacc.png"
import { cn } from "@/lib/utils"

const projects = [
    {
        title: "Ascent",
        description:
            "My flagship project: an advanced ML education platform featuring comprehensive long-form video content, interactive coding lessons, and personalized learning paths. Ascent empowers learners at all levels to master machine learning concepts through engaging, hands-on experiences.",
        icon: <SiGooglescholar className="text-white" />,
        image: codeaai,
        color: "bg-cyan-600",
        urlDemo: "https://ascent.keshav.pro",
        urlGitHub: "https://github.com/KeshavCode6/ascent",
    },
    {
        title: "CodeAAI",
        description:
            "A USACO practice website where I earned 3rd place at the Lanier Tech Fair. CodeAAI is an interactive coding website supporting learners with challenges, real-time feedback, and competition.",
        icon: <FaCode className="text-white" />,
        color: "bg-blue-600",
        image: codeaai,
        urlDemo: "https://codeaai.org",
        urlGitHub: "https://github.com/KeshavCode6/codeaai",
    },
    {
        title: "GemPlay",
        description:
            "An AI-powered story-driven game made for FBLA SLC, where it placed 6th. GemPlay enhances player experience with adaptive gameplay mechanics, intelligent matchmaking, and dynamic content generation to personalize the gaming journey.",
        icon: <FaVideo className="text-white" />,
        color: "bg-green-700",
        image: codeaai,
        urlDemo: "",
        urlGitHub: "https://github.com/KeshavCode6/gemplay",
    },
    {
        title: "Ballista Designs",
        description:
            "A static site showcasing creative UI/UX designs and concepts. Highlights modern web design principles, responsive layouts, and innovative user interface elements for visually engaging and intuitive digital experiences.",
        icon: <FaGlobe className="text-white" />,
        color: "bg-blue-500",
        image: codeaai,
        urlDemo: "https://ballistadesigns.keshav.pro",
        urlGitHub: "https://github.com/KeshavCode6/ballistadesigns",
    },
    {
        title: "Cosiva",
        description:
            "Static informational website for COSIVA, a fake nonprofit. Effectively communicates key initiatives and events, providing clear navigation and accessibility to promote community involvement and awareness.",
        icon: <FaGlobe className="text-white" />,
        color: "bg-orange-600",
        image: cosiva,
        urlDemo: "https://cosiva.keshav.pro",
        urlGitHub: "https://github.com/KeshavCode6/cosiva",
    },
    {
        title: "NSACC",
        image: nsacc,
        description:
            "Static site for NSACC, a fake nonprofit. Focused on community outreach. Designed to support local engagement efforts with up-to-date event listings, resource sections, and a professional yet approachable design to foster connections.",
        icon: <FaGlobe className="text-white" />,
        color: "bg-purple-700",
        urlDemo: "https://nsacc.keshav.pro",
        urlGitHub: "https://github.com/KeshavCode6/nsacc",
    },
]

export function Projects() {
    const [activeIndex, setActiveIndex] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projects.length)
        }, 15000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className="relative flex flex-col w-full items-center py-16 pt-44 pb-72 overflow-hidden"
            id="projects"
        >
            <div className="absolute inset-0 z-[-10] overflow-hidden pointer-events-none">
                <GridDotsBackground />
                {/* Blue Gradient Circles */}
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 -right-48 w-[28rem] h-[28rem] bg-sky-300/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-sky-300/10 rounded-full blur-2xl" />
                <div className="absolute top-1/4 left-8 w-32 h-32 bg-sky-200/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-24 right-10 w-56 h-56 bg-sky-400/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-36 -left-36 w-[30rem] h-[30rem] bg-sky-300/15 rounded-full blur-[100px]" />
                <div className="absolute top-8 right-1/4 w-40 h-40 bg-sky-500/10 rounded-full blur-xl" />
            </div>

            <p className="text-primary text-base sm:text-lg z-30">My Projects</p>
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-center text-black dark:text-white z-30">
                What have I made?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 mt-2 max-w-3xl text-center">
                Here is a collection of some of my best skills. Check everything I have made on{" "}
                <Link
                    className="underline text-primary"
                    target="_blank"
                    href={"https://www.github.com/KeshavCode6"}
                >
                    GitHub
                </Link>
            </p>

            <motion.div
                key={activeIndex}
                className="flex flex-col md:flex-row items-center gap-12 md:gap-24 max-w-6xl px-8 w-full"
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col flex-[1.5] h-80 justify-between z-30">
                    <div>
                        <div className="z-30 flex gap-2 flex-wrap mb-6 justify-center md:justify-start">
                            {projects.map((project, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold text-sm transition-all duration-300
                        ${project.color}
                        ${activeIndex === index ? "scale-105 shadow-md" : "opacity-50 hover:opacity-80"}
                    `}
                                >
                                    {project.icon}
                                </button>
                            ))}
                        </div>

                        <h3 className="text-3xl font-semibold text-black dark:text-white">
                            {projects[activeIndex].title}
                        </h3>
                        <p className="text-muted-foreground max-w-xl text-lg mb-12 dark:text-gray-300 whitespace-pre-line">
                            {projects[activeIndex].description}
                        </p>
                    </div>

                    <div className="w-full flex gap-2 z-30">
                        {projects[activeIndex].urlDemo && (
                            <Link href={projects[activeIndex].urlDemo} target="_blank" className="flex-1">
                                <Button className="flex-1 flex items-center justify-center gap-2" asChild>
                                    <span>
                                        <PlaySquareIcon />
                                        Live Demo
                                    </span>
                                </Button>
                            </Link>
                        )}

                        <Link href={projects[activeIndex].urlGitHub} target="_blank" className="flex-1">
                            <Button
                                variant="outline"
                                className="flex-1 flex items-center justify-center gap-2"
                                asChild
                            >
                                <span>
                                    <FaGithub />
                                    View on GitHub
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>

                <Link href={projects[activeIndex].urlGitHub} target="_blank" className={cn("z-30 p-4", `bg-gray-50 rounded-lg`)}>
                    <Image
                        src={projects[activeIndex].image}
                        alt={projects[activeIndex].title}
                        className={`max-w-lg rounded-lg cursor-pointer  transition-colors ${projects[activeIndex].color}`}
                        style={{ aspectRatio: "16 / 9" }}
                    />
                </Link>

            </motion.div>
            <Image className="absolute  left-0 right-0 bottom-0" src={waves} alt="waves" />
        </div>
    )
}
