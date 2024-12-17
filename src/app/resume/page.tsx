'use client'

import Navbar from '@/components/ui/navbar'
import React from 'react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ResumeContent from '@/components/resume-content'

export default function Resume() {
    return (
        <Navbar>
            <div className='container mx-auto flex flex-row  px-4 py-8 gap-4'>
                <div className="flex-1 max-w-xl mx-auto"> {/* Main Tabs Section */}
                    <Tabs defaultValue="resume" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="resume">E-Resume</TabsTrigger>
                            <TabsTrigger value="cover-letter">Cover Letter</TabsTrigger>
                        </TabsList>
                        <TabsContent value="resume">
                            <Card className="p-6 overflow-auto max-h-[70vh] h-full">
                                <ResumeContent/>
                            </Card>
                        </TabsContent>
                        <TabsContent value="cover-letter">
                            <Card className="p-6 overflow-auto max-h-[70vh] h-full">
                                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                                <div className="space-y-4">
                                    <p>
                                        As a passionate and driven individual, I am constantly seeking new challenges and opportunities to grow in the fields of software development and cybersecurity. My journey began with a fascination for technology and has evolved into a deep commitment to creating innovative solutions and securing digital landscapes.
                                    </p>
                                    <p>
                                        My experiences span a variety of fields, including education, robotics, and community involvement. As a volunteer tutor with Next Generation Focus, I’ve devoted my time to mentoring young students in subjects such as Math and English, fostering their academic growth and confidence. In robotics, I served as the lead programmer for VEX Team 17451B, where I developed all robot-related code and contributed to winning the VEX Excellence Award at the state level. These experiences reflect my ability to lead, collaborate, and innovate in diverse environments.
                                    </p>
                                    <p>
                                        My achievements, such as being recognized with <span className="font-semibold">Hack Gwinnett's Best Humanitarian Award</span>, earning top placements in <span className="font-semibold">National Cyber League competitions</span>, and excelling in various <span className="font-semibold">Georgia Student Technology Association challenges</span>, highlight my drive for excellence. These accolades underscore my commitment to applying my skills in impactful and meaningful ways.
                                    </p>
                                    <p>
                                        I am passionate about leveraging my skills and experiences to contribute to projects that drive positive change. With a strong foundation in technical expertise and a proven record of achievement, I am eager to take on new opportunities that challenge me to grow and make a difference.
                                    </p>
                                </div>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className='w-80 flex-shrink-0 mt-8'> {/* Sidebar */}
                    <h2 className="text-2xl font-bold mb-4 text-center">Overview</h2>
                    <Card className="p-6">
                        <p className="mb-4">
                            With numerous awards such as <span className="font-semibold">Hack Gwinnett's Best Humanitarian</span> and the <span className="font-semibold">VEX Robotics Excellence Award</span>, I take pride in balancing technical expertise with a drive for innovation. My professional development includes certifications like GIAC GFACT and mastery in programming languages such as Python, JavaScript, and C++. These achievements highlight a continuous journey of learning and impact in the tech field.
                        </p>
                        <p>
                            Through leadership roles in clubs like the Cybersecurity and Coding clubs, I've cultivated strong teamwork and organizational skills. Additionally, my work with Next Generation Focus as a volunteer tutor and my involvement in robotics competitions showcase my commitment to both community engagement and technical excellence. These experiences have equipped me to lead initiatives and contribute meaningfully to collaborative projects.
                        </p>
                    </Card>
                </div>
            </div>
        </Navbar>
    )
}
