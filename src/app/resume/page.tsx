'use client'

import Navbar from '@/components/ui/navbar'
import React from 'react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ResumeContent from '@/components/resume-content'
import CoverLetterContent from '@/components/cover-letter'
import VexExcellence from "@/public/awards/vexexe.png"
import Gastc from "@/public/awards/gastc.jpg"
import Cyber from "@/public/awards/sans.png"
import Image from 'next/image'

export default function Resume() {
    return (
        <Navbar>
            <div className='flex flex-col xl:flex-row w-full items-center justify-center xl:h-full px-4 md:px-0 py-8 gap-16'>
                <div className='max-w-lg mt-8'>
                    <h2 className="text-2xl font-bold mb-2 text-center">Overview</h2>
                    <p className='text-sm'>
                    The following is an E-Resume and Cover letter that has sensitive details omitted. Please contact me above
                    to get the full resume! The following are parts of my resume I would like to highlight or add onto!
                    </p>


                    <h2 className="text-xl font-medium  mt-4 text-left">Professional Development</h2>
                    <p className="mb-4 text-sm">
                        My commitment to making an impact is evident through my work with <span className="font-semibold">Next Generation Focus</span>, where I dedicate my time as a volunteer tutor helping students excel in Math and English Language Arts. This role has allowed me to contribute to the community while honing my mentorship and leadership skills.
                    </p>

                    <h2 className="text-xl font-medium  mt-4 text-left">Awards</h2>
                    <p className='text-sm'>
                        I have been recognized with several prestigious awards, including <span className="font-semibold">3rd place in the GASTC Tech Fair (2024)</span> and the <span className="font-semibold">VEX Robotics Excellence Award</span>.
                        These awards reflect my dedication to excellence and innovation across various domains, from humanitarian initiatives to technical competitions.
                    </p>

                    <div className='flex gap-3 mt-4'>
                        <div className='flex-1'>
                            <Image src={VexExcellence} alt="Vex Excellence award" className='w-full' />
                            <p className='text-xs text-center mt-2'>Me with the Vex Excellence Award, January 2024</p>
                        </div>
                        <div className='flex-1'>
                            <Image src={Gastc} alt="Gastc award" className='w-full' />
                            <p className='text-xs text-center mt-2'>Me with the Vex Excellence Award, March 2024</p>
                        </div>
                        <div className='flex-1'>
                            <Image src={Cyber} alt="Cyber award" className='w-full' />
                            <p className='text-xs text-center mt-2'>Me at the Cyberstart Leapfrog Scholars lunch, May 2024</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 md:mx-32 xl:mx-0 xl:max-w-[35vw]"> 
                    <Tabs defaultValue="resume" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="resume">E-Resume</TabsTrigger>
                            <TabsTrigger value="cover-letter">Cover Letter</TabsTrigger>
                        </TabsList>
                        <TabsContent value="resume">
                            <Card className="p-6 overflow-auto max-h-[75vh] h-full">
                                <ResumeContent />
                            </Card>
                        </TabsContent>
                        <TabsContent value="cover-letter">
                            <Card className="p-6 overflow-auto max-h-[75vh] h-full">
                                <CoverLetterContent />
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

            </div>
        </Navbar>
    )
}
