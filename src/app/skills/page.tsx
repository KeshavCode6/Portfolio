'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import Navbar from '@/components/ui/navbar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import Image from 'next/image'
import website from "@/public/images/business.jpg"
import business from "@/public/images/website.jpg"
import cyber from "@/public/images/hacker.jpg"
import mobile from "@/public/images/mobile.jpg"

export default function Work() {
    const [selectedTab, setSelectedTab] = useState("web-development");

    const tabImages: { [key: string]: any } = {
        "web-development": website,
        "mobile-development": mobile,
        "cybersecurity": cyber,
        "soft-skills": business
    };
    return (
        <Navbar>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col w-full items-center gap-4">
                    <header className="flex flex-col items-center justify-center mt-16 mx-4">
                        <h1 className="text-2xl font-bold">My Skills</h1>
                        <p className="text-center text-sm w-full max-w-2xl">
                            The following are some of my skills, many of which are verified through formal certification
                        </p>
                    </header>
                    <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center">
                        <Card className="w-[85vw] md:w-96 lg:w-[35vw] md:h-96 overflow-auto p-6">
                            <Tabs
                                defaultValue="web-development"
                                onValueChange={(value) => setSelectedTab(value)}
                            >
                                <div className='flex w-full items-center justify-center'>
                                    <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-8 lg:mb-0">
                                        <TabsTrigger value="web-development">Web Dev</TabsTrigger>
                                        <TabsTrigger value="mobile-development">Mobile Dev</TabsTrigger>
                                        <TabsTrigger value="cybersecurity">Cybersecurity</TabsTrigger>
                                        <TabsTrigger value="soft-skills">Business Skills</TabsTrigger>
                                    </TabsList>
                                </div>
                                <TabsContent value="web-development">
                                    <ul className="list-disc pl-6">
                                        <li className="text-md mb-2">Experienced using modern frameworks like Next.js and React to create functional web apps</li>
                                        <li className="text-md mb-2">Capable backend developer with Express.js or Flask</li>
                                        <li className="text-md mb-2">Capable with design and using technologies like Tailwind CSS </li>
                                        <li className="text-md mb-2">Familiar with using both SQL and NoSQL databases with ORMs like Prisma</li>
                                        <li className="text-md mb-2">Familiar with using websockets to create realtime applications</li>
                                    </ul>
                                </TabsContent>
                                <TabsContent value="mobile-development">
                                    <ul className="list-disc pl-6">
                                        <li className="text-md mb-2">Experienced using cross-platform frameworks like React Native and Flutter</li>
                                        <li className="text-md mb-2">Somewhat familiar with native technologies like Swift</li>
                                    </ul>
                                </TabsContent>
                                <TabsContent value="cybersecurity">
                                    <ul className="list-disc pl-6">
                                        <li className="text-md mb-2">Familiar with the fundamentals of offensive cybersecurity</li>
                                        <li className="text-md mb-2"><Link href="/" className='text-blue-400 underline' target='_blank'>Certified by the SEC275 GFACT (97% on the exam)</Link></li>
                                        <li className="text-md mb-2">Capable CTF competitor with strong performances in NCL</li>
                                        <li className="text-md mb-2">Basic understanding of IT fundamentals in networking and device configuration</li>
                                    </ul>
                                </TabsContent>
                                <TabsContent value="soft-skills">
                                    <ul className="list-disc pl-6">
                                        <li className="text-md mb-2">Strong leader and collaborator in a team environment</li>
                                        <li className="text-md mb-2">Good work ethic and self-motivated</li>
                                        <li className="text-md mb-2">Passable public speaker</li>
                                        <li className="text-md mb-2"><Link href="/" className='text-blue-400 underline' target='_blank'>Word Expert Certified (100% on the exam)</Link></li>
                                        <li className="text-md mb-2"><Link href="/" className='text-blue-400 underline' target='_blank'>PowerPoint Associate Certified</Link></li>
                                        <li className="text-md mb-2"><Link href="/" className='text-blue-400 underline' target='_blank'>Excel Associate Certified</Link></li>
                                    </ul>
                                </TabsContent>
                            </Tabs>
                        </Card>
                        <Image
                            alt="image"
                            src={tabImages[selectedTab]}
                            className="aspect-square rounded-lg w-72 lg:w-96 mb-4 md:mb-0"
                        />
                    </div>
                </div>
            </div>
        </Navbar>
    )
}
