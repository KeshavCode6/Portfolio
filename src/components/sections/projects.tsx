"use client"
import React, { useRef } from "react";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion, useInView } from "framer-motion";

const projects = [
    {
        title: "CodeAAI",
        type: "Functional App",
        description: "This is a fully functional leetcode-inspired coding challenge website. It was hosted at codeaai.org, but is currently unoperational for updates. Code is not public on GitHub yet for security purposes.",
        size: "span 2",
        links: [{ href: "https://www.codeaai.org", icon: <FaExternalLinkAlt /> }]
    },
    {
        title: "DartCTF",
        type: "Functional App",
        description: "This is a fully functional cyberstart-inspired cybersecurity challenge website. It was hosted at dartctf.com but has been taken down permanently due to being archived. All code is available on GitHub.",
        size: "span 1",
        links: [{ href: "https://github.com/KeshavCode6/DartCTF", icon: <FaGithub /> }]
    },
    {
        title: "GetBallista",
        type: "Static Site",
        description: "This was a discontinued organization that I was a part of over the summer. I developed the landing page website for the organization, which is still accessible at getballista.com today.",
        size: "span 1",
        links: [
            { href: "https://github.com/KeshavCode6/portfolio", icon: <FaGithub /> },
            { href: "https://www.getballista.com", icon: <FaExternalLinkAlt /> }
        ]
    },
    {
        title: "NSACC",
        type: "Static Site",
        description: "This is my nonprofit that I founded in 2024. NSACC is dedicated to empowering students in CS with opportunities such as national networking events, internships, and competitions.",
        size: "span 1",
        links: [{ href: "https://www.nsacc.org", icon: <FaExternalLinkAlt /> }]
    },
    {
        title: "Old Portfolio",
        type: "Static Site",
        description: "This was my old personal portfolio website, which is available on GitHub.",
        size: "span 1",
        links: [{ href: "https://github.com/KeshavCode6/portfolio", icon: <FaGithub /> }]
    },
    {
        title: "Cosiva",
        type: "Static Site",
        description: "This is my nonprofit that I founded in 2024. NSACC is dedicated to empowering students in CS with opportunities such as national networking events, internships, and competitions.",
        size: "span 1",
        links: [{ href: "https://www.nsacc.org", icon: <FaExternalLinkAlt /> }]
    },
    {
        title: "Cosmite",
        type: "Web Dev Agency",
        description: "This is my nonprofit that I founded in 2024. NSACC is dedicated to empowering students in CS with opportunities such as national networking events, internships, and competitions.",
        size: "span 2",
        links: [{ href: "https://www.nsacc.org", icon: <FaExternalLinkAlt /> }]
    },
];

export function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <div className="flex flex-col w-full items-center p-32" id="projects">
            <p className="text-primary text-lg">My Projects</p>
            <p className="font-semibold text-5xl mb-8">What have I made?</p>
            <div className="grid grid-cols-3 2xl:grid-cols-3 gap-4 mt-8 px-8 z-40 md:mx-32" ref={ref}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        style={{
                            gridColumn: project.size,
                        }}
                        initial={{
                            x: -100 * index,
                            opacity: 0
                        }}
                        animate={{
                            x: inView ? 0 : -100 * index,
                            opacity: inView ? 1 : 0
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 10,
                            x: {
                                duration: 1
                            }
                        }}
                        whileHover={{ y: -10, rotateY: 5 }}
                        className="relative"
                    >
                        <Card className={`p-4 px-8 h-full `}>
                            <p className='font-semibold text-md text-blue-500'>{project.type}</p>
                            <p className='font-bold text-lg mb-0 max-w-lg'>{project.title}</p>
                            <p className='max-w-96'>{project.description}</p>
                            <div className="flex mt-4 space-x-2">
                                {project.links.map((link, idx) => (
                                    <Button key={idx} size="icon" variant="secondary" asChild>
                                        <Link href={link.href} target="_blank">
                                            {link.icon}
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
