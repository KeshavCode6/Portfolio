"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { motion, useInView } from "framer-motion"

const projects = [
    {
        title: "CodeAAI",
        type: "Functional App",
        description:
            "This is a fully functional leetcode-inspired coding challenge website. It was hosted at codeaai.org, but is currently unoperational for updates. Code is not public on GitHub yet for security purposes.",
        size: "lg",
        links: [{ href: "https://www.codeaai.org", icon: <FaExternalLinkAlt /> }],
    },
    {
        title: "DartCTF",
        type: "Functional App",
        description:
            "This is a fully functional cyberstart-inspired cybersecurity challenge website. It was hosted at dartctf.com but has been taken down permanently due to being archived. All code is available on GitHub.",
        size: "sm",
        links: [{ href: "https://github.com/KeshavCode6/DartCTF", icon: <FaGithub /> }],
    },
    {
        title: "GetBallista",
        type: "Static Site",
        description:
            "This was a discontinued organization that I was a part of over the summer. I developed the landing page website for the organization, which is still accessible at getballista.com today.",
        size: "sm",
        links: [
            { href: "https://github.com/KeshavCode6/portfolio", icon: <FaGithub /> },
            { href: "https://www.getballista.com", icon: <FaExternalLinkAlt /> },
        ],
    },
    {
        title: "NSACC",
        type: "Static Site",
        description:
            "This is my nonprofit that I founded in 2024. NSACC is dedicated to empowering students in CS with opportunities such as national networking events, internships, and competitions.",
        size: "sm",
        links: [{ href: "https://www.nsacc.org", icon: <FaExternalLinkAlt /> }],
    },
    {
        title: "Old Portfolio",
        type: "Static Site",
        description: "This was my old personal portfolio website, which is available on GitHub.",
        size: "sm",
        links: [{ href: "https://github.com/KeshavCode6/portfolio", icon: <FaGithub /> }],
    },
    {
        title: "Cosiva",
        type: "Static Site",
        description:
            "This is my nonprofit that I founded in 2024. NSACC is dedicated to empowering students in CS with opportunities such as national networking events, internships, and competitions.",
        size: "sm",
        links: [{ href: "https://www.nsacc.org", icon: <FaExternalLinkAlt /> }],
    },
    {
        title: "Cosmite",
        type: "Web Dev Agency",
        description:
            "This is my nonprofit that I founded in 2024. NSACC is dedicated to empowering students in CS with opportunities such as national networking events, internships, and competitions.",
        size: "lg",
        links: [{ href: "https://www.nsacc.org", icon: <FaExternalLinkAlt /> }],
    },
]

export function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    return (
        <div className="flex flex-col w-full items-center py-16 pt-44 pb-24  xl:px-16" id="projects">
            <p className="text-primary text-base sm:text-lg">My Projects</p>
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-8 text-center">What have I made?</h2>
            <div className="grid grid-cols-3 2xl:grid-cols-3 gap-4 mt-8 px-8 z-40 md:mx-32" ref={ref}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={`${project.size === "lg" ? "col-span-3 sm:col-span-2 lg:col-span-2" : "col-span-3 sm:col-span-1"}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 10,
                            x: {
                                duration: 1
                            }
                        }}
                        whileHover={{ y: -10 }}
                    >
                        <Card className="p-6 h-full flex flex-col justify-between ">
                            <div>
                                <p className="font-semibold text-sm sm:text-base text-blue-500 mb-2">{project.type}</p>
                                <h3 className="font-bold text-lg sm:text-xl mb-2">{project.title}</h3>
                                <p className="text-sm sm:text-base text-muted-foreground">{project.description}</p>
                            </div>
                            <div className="flex flex-col lg:flex-row mt-4 gap-2">
                                {project.links.map((link, idx) => (
                                    <Button key={idx} size="sm" variant="secondary" asChild>
                                        <Link href={link.href} target="_blank" className="flex items-center">
                                            {link.icon}
                                            <span className="ml-2 hidden sm:inline">{link.icon.type === FaGithub ? "GitHub" : "Visit"}</span>
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

