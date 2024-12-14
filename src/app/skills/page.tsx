import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/ui/navbar';
import React from 'react';

function Work() {
    return (
        <Navbar>
            <div className='flex flex-col w-full items-center gap-4'>
                <div className="flex flex-col items-center justify-center mt-16">
                    <p className="text-2xl font-bold">My Skills</p>
                    <p className="text-center text-sm w-full max-w-2xl">
                        The following are some of skills, many of which are verified through formal certification
                    </p>
                </div>
                <div className='flex gap-4 w-full items-center justify-center'>
                    <Card className='w-[50vw] h-[65vh] p-4 overflow-auto'>
                        <Accordion type="single" collapsible defaultValue='item-1'>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Web Development</AccordionTrigger>
                                <AccordionContent>
                                    <li className='list-disc'>Experience using modern frameoworks like NextJS and React</li>
                                    <li className='list-disc'>Very familier using basics of HTML, CSS and JS </li>
                                    <li className='list-disc'>Capable backend developer with Express.js and Flask</li>
                                    <li className='list-disc'>Experienced setting up authentication manually or with firebase</li>
                                    <li className='list-disc'>Familier using both sql and nosql databases with orms like prisma</li>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Mobile Development</AccordionTrigger>
                                <AccordionContent>
                                    <li className='list-disc'>Experience using crossplatform frameoworks like React Native and Flutter</li>
                                    <li className='list-disc'>Familier with native technologies like Swift</li>
                                    <li className='list-disc'>Capable of creating backends designed for mobile applicatiosn</li>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>AI/ML</AccordionTrigger>
                                <AccordionContent>
                                    <li className='list-disc'>Experience using open source AI tools like Ollama to use LLM models for applications</li>
                                    <li className='list-disc'>High level understanding of various LLM concepts like RAG</li>
                                    <li className='list-disc'>Basic experience with ML using tools like Sklearn, and Pytorch</li>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Cybersecurity</AccordionTrigger>
                                <AccordionContent>
                                    <li className='list-disc'>Experience with the basics of Cyber security</li>
                                    <li className='list-disc'>Certified by the SEC275 GFACT (97% on the exam)</li>
                                    <li className='list-disc'>Capable CTF copmetitor with team B-Hats</li>
                                    <li className='list-disc'>Basic undertaading of IT fundamentals</li>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>Microsoft Office</AccordionTrigger>
                                <AccordionContent>
                                    <li className='list-disc'>Familier with using Microsfot Word (Word Expert Certified, 100% on the exam)</li>
                                    <li className='list-disc'>Familier with using Microsfot Powerpoint (Powerpoint Associate Certified)</li>
                                    <li className='list-disc'>Familier with using Microsfot Excel (Excel Associate Certified)</li>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>Soft Skills</AccordionTrigger>
                                <AccordionContent>
                                    <li className='list-disc'>Strong leader and collabroater in a team environment</li>
                                    <li className='list-disc'>Good worth ethic and self motivated</li>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>

                    {/* Blue square taking up remaining space */}
                    <div className='bg-blue-400 aspect-square rounded-lg resize overflow-auto flex-1 max-w-96' />
                </div>
            </div>
        </Navbar>
    );
}

export default Work;
