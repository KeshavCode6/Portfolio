"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa"
import {
	SiFirebase,
	SiTailwindcss,
	SiTensorflow,
	SiMongodb,
	SiNextdotjs,
	SiPytorch,
	SiRobotframework,
} from "react-icons/si"
import { Database } from "lucide-react"

const techStack = [
	{ name: "React", icon: <FaReact className="text-blue-500" /> },
	{ name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
	{ name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
	{ name: "Python", icon: <FaPython className="text-yellow-500" /> },
	{ name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
	{ name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
	{ name: "Pandas", icon: <Database className="text-blue-400" /> },
	{ name: "Scikit-Learn", icon: <SiRobotframework className="text-blue-400" /> },
	{ name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
	{ name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
	{ name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-500" /> },
	{ name: "Git", icon: <FaGitAlt className="text-red-600" /> },
]

export function AboutSection() {
	const ref = useRef(null)
	const inView = useInView(ref, { once: true })

	return (
		<div
			className="relative flex flex-col w-full items-center bg-gray-50 dark:bg-slate-900 px-8 pt-16 pb-0  md:pb-8  lg:pb-10"
			id="about"
		>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
				transition={{ duration: 0.6 }}
				className="max-w-7xl mx-auto w-full"
			>
				<div className="text-center mb-10">
					<p className="text-primary text-base sm:text-lg mt-16">About me</p>
					<h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-2 dark:text-white text-center">
						Who am I?
					</h2>
					<p className="text-lg text-muted-foreground text-center w-full">
						Here is a quick blurb about who I am and what I want to achieve.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative"
					>
						<div className="relative overflow-hidden rounded-2xl shadow-2xl">
							<img
								src="/api/placeholder/500/600"
								alt="Profile"
								className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="space-y-6"
					>
						<div className="dark:text-white text-lg max-w-none">
							Hi, I’m Keshav Shah — a passionate developer and educator focused on AI, ML, and full-stack SWE.
							I lead projects that create practical tools and engaging content to help others master complex topics.
							<br />
							I love entrepreneurship, and my long-term goal is to launch a startup using cutting-edge AI. One day,
							I dream of contributing to Artificial General Intelligence (AGI) and advancing what AI is capable of.
						</div>
					</motion.div>
				</div>
			</motion.div>

			{/* Tech Stack Scroll Section */}
			<div className="relative max-w-7xl overflow-hidden py-6 z-30 mt-12">
				<div className="flex animate-scroll space-x-8">
					{[...techStack, ...techStack].map((tech, index) => (
						<div
							key={index}
							className="flex items-center space-x-3 bg-white dark:bg-slate-700 px-6 py-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 whitespace-nowrap"
						>
							<span className="text-2xl">{tech.icon}</span>
							<span className="text-lg font-medium dark:text-white">{tech.name}</span>
						</div>
					))}
				</div>
				<style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
        `}</style>
			</div>
		</div>
	)
}
