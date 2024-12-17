'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import Navbar from '@/components/ui/navbar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

export default function Work() {
    return (
        <Navbar>
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
                <div className="flex flex-col w-full items-center gap-4">
                    <div className="flex flex-col items-center justify-center mt-16">
                        <h1 className="text-2xl font-bold">My Skills</h1>
                        <p className="text-center text-sm w-full max-w-2xl">
                            The following are some of my skills, many of which are verified through formal certification.
                        </p>
                    </div>
                    <div className="flex gap-4 w-full items-center justify-center">
                        <Card className="w-[35vw] h-96 overflow-auto p-6">
                            <Tabs defaultValue="web-development" className="w-full">
                                <TabsList className="flex w-full items-center">
                                    <TabsTrigger value="web-development">Web Dev</TabsTrigger>
                                    <TabsTrigger value="mobile-development">Mobile Dev</TabsTrigger>
                                    <TabsTrigger value="cybersecurity">Cybersecurity</TabsTrigger>
                                    <TabsTrigger value="microsoft-office">Microsoft Office</TabsTrigger>
                                    <TabsTrigger value="soft-skills">Soft Skills</TabsTrigger>
                                </TabsList>
                                <TabsContent value="web-development">
                                    <ul className="list-disc pl-6">
                                        <li className="text-md mb-2">Experienced using modern frameworks like Next.js and React to create functional web apps <Link href="/" className='text-blue-400 underline' target='_blank'>(See my projects)</Link></li>
                                        <li className="text-md mb-2">Capable backend developer with Express.js or Flask</li>
                                        <li className="text-md mb-2">Capable with design and using technologies like Tailwind CSS</li>
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
                                <TabsContent value="microsoft-office">
                                    <ul className="list-disc pl-6">
                                        <li className="text-md mb-2">Familiar with using Microsoft Word <Link href="/" className='text-blue-400 underline' target='_blank'>(Word Expert Certified, 100% on the exam)</Link></li>
                                        <li className="text-md mb-2">Familiar with using Microsoft PowerPoint <Link href="/" className='text-blue-400 underline' target='_blank'>(PowerPoint Associate Certified)</Link></li>
                                        <li className="text-md mb-2">Familiar with using Microsoft Excel <Link href="/" className='text-blue-400 underline' target='_blank'>(Excel Associate Certified)</Link></li>
                                    </ul>
                                </TabsContent>
                                <TabsContent value="soft-skills">
                                    <ul className="list-disc pl-6">
                                        <li className="text-md mb-2">Strong problem-solver and critical-thinker</li>
                                        <li className="text-md mb-2">Strong leader and collaborator in a team environment</li>
                                        <li className="text-md mb-2">Good work ethic and self-motivated</li>
                                        <li className="text-md mb-2">Passable public speaker</li>
                                    </ul>
                                </TabsContent>
                            </Tabs>
                        </Card>
                        <div className="flex flex-col gap-4 w-[35vw]">
                            <Card className="h-48 p-6 overflow-auto">
                                <h2 className="text-lg font-bold mb-4">Overview</h2>
                                <p className="text-sm">
                                    I am a versatile developer with expertise in web and mobile technologies, a strong foundation in cybersecurity, and a history of effective problem-solving and teamwork. I am passionate about leveraging technology to solve real-world problems.
                                </p>
                            </Card>
                            <Card className="h-48 p-6 overflow-auto">
                                <h2 className="text-lg font-bold mb-4">Resume & Cover Letter</h2>
                                <p className="text-sm">
                                    Check out my <Link href="/" className="text-blue-400 underline" target="_blank">Resume</Link> and <Link href="/" className="text-blue-400 underline" target="_blank">Cover Letter</Link> to learn more about my experience and skills.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}
