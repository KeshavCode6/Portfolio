"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FaGlobe, FaLock } from "react-icons/fa"
import { MdMemory } from "react-icons/md"

const skills = [
    {
        title: "Machine Learning & AI",
        description: "Making systems using real-world data and deep learning techniques.",
        long_description:
            "Experienced with Scikit-Learn, TensorFlow (with Keras), and PyTorch for training and deploying machine learning and neural network models. Skilled in preprocessing data with Pandas, visualizing insights, and integrating LLMs into applications using tools like Langchain.",
        icon: <MdMemory size={40} className="relative z-10 text-primary transition-all duration-300 group-hover:text-white" />,
    },
    {
        title: "Web Development",
        description: "Experience in building scalable, and responsive web applications.",
        long_description:
            "Well-versed in Next.js and React. Skilled in creating functional applications with Firebase, MongoDB, or PostgreSQL, and designing beautiful UIs with TailwindCSS and Framer Motion.",
        icon: <FaGlobe size={40} className="relative z-10 text-primary transition-all duration-300 group-hover:text-white" />,
    },
    {
        title: "Cybersecurity",
        description: "Experienced in fundamentals of cybersecurity and IT concepts.",
        long_description:
            "Certified with the SANS GFCT. Knowledgeable in network security, ethical hacking, cryptography, penetration testing, security audits, and mitigating vulnerabilities.",
        icon: <FaLock size={40} className="relative z-10 text-primary transition-all duration-300 group-hover:text-white" />,
    },
]

export function Skills() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    return (
        <div className="relative flex flex-col w-full items-center bg-gray-50 dark:bg-slate-900 pb-32" id="skills">
            <p className="text-primary text-base sm:text-lg mt-16">My Skills</p>
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-2 dark:text-white text-center">What can I do?</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl">
                Here is a brief, non-technical summary of some of my best skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 z-40 relative max-w-7xl mx-auto w-full" ref={ref}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <Card className="h-full p-6 text-center cursor-pointer group relative overflow-hidden flex flex-col items-center justify-center aspect-square max-w-96">
                            <span className="absolute inset-0 bg-blue-700 transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>

                            <div className="flex flex-col items-center justify-center opacity-100 duration-300 group-hover:opacity-0 transition-all">
                                {skill.icon}
                                <CardContent className="mt-4 relative z-10">
                                    <p className="text-xl sm:text-2xl transition-all duration-300 group-hover:text-white">{skill.title}</p>
                                    <p className="text-sm sm:text-base text-muted-foreground transition-all duration-300 group-hover:text-white">
                                        {skill.description}
                                    </p>
                                </CardContent>
                            </div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 duration-300 group-hover:opacity-100 transition-all p-4 text-white">
                                <p className="text-lg sm:text-xl font-semibold mb-2">{skill.title}</p>
                                <p className="text-sm sm:text-base text-center">{skill.long_description}</p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
