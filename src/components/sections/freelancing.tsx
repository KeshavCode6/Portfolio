"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Card } from "../ui/card"
import { DollarSign, Settings, Phone } from "lucide-react"
import Link from "next/link"
import { MdMobileFriendly } from "react-icons/md"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import cosiva from "@/public/examples/cosiva.png"
import codeaai from "@/public/examples/codeaai.png"
import portfolio from "@/public/examples/portfolio.png"
import Image from "next/image"

export function Freelancing() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const autoplayPlugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

    const services = [
        {
            title: "Affordable Pricing",
            description: "Sites starting at $50 for one page, $30 per additional (prices vary by content).",
            icon: <DollarSign className="h-8 w-8 text-blue-500" />,
        },
        {
            title: "Elegant Design",
            description: "Clean visuals, animations & pixel-perfect layouts that adapt to all devices.",
            icon: <MdMobileFriendly className="h-8 w-8 text-blue-500" />,
        },
        {
            title: "AI & Extra Functionality",
            description: "Add AI chatbots, custom forms, etc. starting at $20 (prices vary, recurring costs may apply).",
            icon: <Settings className="h-8 w-8 text-blue-500" />,
        },
        {
            title: "Fast, Reliable Support",
            description: "Support with responses within 16 hours. Minor site changes are free!",
            icon: <Phone className="h-8 w-8 text-blue-500" />,
        },
    ]

    const pastWork = [
        { image: cosiva, link: "https://www.cosiva.org" },
        { image: codeaai, link: "https://www.codeaai.org" },
        { image: portfolio, link: "https://www.keshav.pro" },

    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    }

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                type: "spring",
                stiffness: 100,
            },
        })
    }

    return (
        <div
            className="flex flex-col lg:flex-row gap-4 sm:gap-12 2xl:gap-32 w-full  lg:p-16 pt-32 lg:pt-56 justify-center items-center"
            id="freelancing"
            ref={ref}
        >
            <motion.div
                className="flex flex-col z-40 max-w-2xl p-4 md:pl-16 2xl:pl-0"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.p variants={itemVariants} className="text-primary text-base sm:text-lg">
                    Hire me for Freelance Work
                </motion.p>
                <motion.h2 variants={itemVariants} className="font-semibold text-3xl sm:text-4xl md:text-6xl mb-4">
                    Let&apos;s create something
                    <span className="text-blue-500 font-bold relative ml-3">
                        amazing
                        <span
                            className="absolute inset-0 bg-blue-400 opacity-40 blur-md rounded-full"
                            style={{ zIndex: -1 }}
                        ></span>
                    </span>
                </motion.h2>
                <motion.p variants={itemVariants} className="text-black max-w-2xl mb-10 text-lg z-50">
                    I specialize in transforming your online presence with modern, responsive websites. Although I&apos;m just starting
                    out in web development, I am passionate about delivering quality results.
                    <Link href="mailto:keshavrshah@gmail.com" target="_blank" className="underline mx-1 text-blue-400">
                        Reach out for a quote
                    </Link>
                    , and I&apos;ll get back to you within <strong>16 hours</strong>! See some of my past work below
                </motion.p>

                <motion.div variants={itemVariants}>
                    <Carousel
                        className="z-40  md:max-w-2xl"
                        plugins={[autoplayPlugin.current]}
                        onMouseEnter={() => autoplayPlugin.current.stop()}
                        onMouseLeave={() => autoplayPlugin.current.play()}
                    >
                        <CarouselContent >
                            {pastWork.map((work, index) => (
                                <CarouselItem key={index} className="px-8" >
                                    <div className="relative bg-gray-50 rounded-2xl sm:mx-4 p-1 cursor-pointer">
                                        <Link href={work.link} target="_blank">
                                            <div className="overflow-hidden rounded-2xl">
                                                <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
                                                    <Image
                                                        src={work.image || "/placeholder.svg"}
                                                        alt={`Past Work ${index + 1}`}
                                                        className="object-cover w-full h-full rounded-2xl shadow-lg"
                                                    />
                                                </motion.div>
                                            </div>
                                        </Link>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </motion.div>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 max-w-xl px-16 sm:px-0 z-40 gap-4 h-full"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <Card className="aspect-square flex-grow flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-8 h-full hover:border-primary">
                            <motion.div
                                className="mb-2"
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {service.icon}
                            </motion.div>
                            <p className="text-md font-semibold">{service.title}</p>
                            <p className="text text-muted-foreground text-center">{service.description}</p>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

