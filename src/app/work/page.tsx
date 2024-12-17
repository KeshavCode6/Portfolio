import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/ui/navbar';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Work() {
    return (
        <Navbar>
            <div className="flex flex-col items-center justify-center mt-4 lg:mt-16">
                <p className="text-2xl font-bold">My Work</p>
                <p className="text-center text-sm w-full max-w-2xl">
                    The following are some of my projects, many of them being directly related to computer science.
                    Most of my projects are available on GitHub or will be soon.
                </p>
            </div>

            <div className="grid grid-cols-3 2xl:grid-cols-3 gap-6 mt-8 px-8 z-50 md:mx-32">
                <Card className="p-4 px-8">
                    <div className='flex'>
                        <div className='flex flex-col'>
                            <p className='font-semibold text-md text-blue-500'>Nonprofit Organization</p>
                            <p className='font-bold text-lg mb-0 max-w-lg'>NSACC</p>
                            <p className='max-w-96'>
                                This is my nonprofit that I founded in 2024. NSACC is dedicated to empowering students in CS
                                with oppurunties such as national networking events, internships, and competitions.
                            </p>
                        </div>
                    </div>

                    <Button size={"icon"} variant={"secondary"} className='mt-4' asChild>
                        <Link href={"https://www.nsacc.org"} target='_blank'>
                            <FaExternalLinkAlt />
                        </Link>
                    </Button>
                </Card>
                <Card className='p-4'>
                    <p className='font-semibold text-md text-blue-500'>Functional App</p>
                    <p className='font-bold text-lg mb-0 max-w-lg'>CodeAAI</p>
                    <p className='max-w-96'>
                        This is a fully functional leetcode inspired coding challenge website.
                        It was hosted at codeaai.org, but is currently unoperational for updates. Code is
                        not public on github yet for security purposes.
                    </p>

                    <Button size={"icon"} variant={"secondary"} className='mt-4' asChild>
                        <Link href={"https://www.codeaai.org"} target='_blank'>
                            <FaExternalLinkAlt />
                        </Link>
                    </Button>
                </Card>
                <Card className='p-4'>
                    <p className='font-semibold text-md text-blue-500'>Functional App</p>
                    <p className='font-bold text-lg mb-0 max-w-lg'>DartCTF</p>
                    <p className='max-w-96'>
                        This is a fully functional cyberstart inspired cybersecurity challenge website.
                        It was hosted at dartctf.com, but has been taken down permanently due to being
                        archived. All code is available on GitHub
                    </p>
                    <Button size={"icon"} variant={"secondary"} className='mt-4' asChild>
                        <Link href={"https://github.com/KeshavCode6/DartCTF"} target='_blank'>
                            <FaGithub />
                        </Link>
                    </Button>

                </Card>
                <Card className='p-4'>
                    <p className='font-semibold text-md text-blue-500'>Static Site</p>
                    <p className='font-bold text-lg mb-0 max-w-lg'>GetBallista</p>
                    <p className='max-w-96'>
                        This was a discontinued organization that I was a part of over the summer. I developed the landing page
                        website for the organization, however, which is still accessible at getballista.com today.
                    </p>
                    <Button size={"icon"} variant={"secondary"} className='mt-4' asChild>

                        <Link href={"https://github.com/KeshavCode6/portfolio"} target='_blank'>
                            <FaGithub />
                        </Link>
                    </Button>
                    <Button size={"icon"} variant={"secondary"} className='mt-4 ml-2' asChild>
                        <Link href={"https://www.getballista.com"} target='_blank'>
                            <FaExternalLinkAlt />
                        </Link>
                    </Button>
                </Card>
                <Card className='p-4'>
                    <p className='font-semibold text-md text-blue-500'>Static Site</p>
                    <p className='font-bold text-lg mb-0 max-w-lg'>Old Portfolio</p>
                    <p className='max-w-96'>
                        This was my old personal portfolio website, which is available on github
                    </p>
                    <Button size={"icon"} variant={"secondary"} className='mt-4' asChild>

                        <Link href={"https://github.com/KeshavCode6/portfolio"} target='_blank'>
                            <FaGithub />
                        </Link>
                    </Button>

                </Card>
            </div>
        </Navbar>
    );
}

export default Work;
