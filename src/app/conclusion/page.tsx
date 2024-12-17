import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbar';
import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import headshot from "@/public/headshot.jpg"
import Image from 'next/image';
import waves from "@/public/waves.svg"

function Work() {
    return (
        <Navbar>
            <div className="flex flex-col items-center h-5/6 justify-center">
                <span className='text-2xl font-bold mb-4'>Conclusion</span>
                <Image src={headshot} alt="headshot" className="w-44 aspect-square rounded-full mb-4" />

                <span className='max-w-xl mb-4 mx-4 md:mx-0'>
                    I would like to thank you for visiting my website. I would be eager to connect with you for the prospects
                    of an interview, or disucss anything related to computer science! Consider emailing me at
                    <a href="mailto:keshavrshah@gmail.com" className="text-blue-500 mx-2">
                        keshavrshah@gmail.com
                    </a>
                    or contacting me through the methods below!
                </span>
                
                <div className="flex flex-row gap-2 mt-2">
                    <a href="https://www.instagram.com/keshavshah184/" target="_blank" rel="noopener noreferrer">
                        <Button size="icon">
                            <FaInstagram />
                        </Button>
                    </a>
                    <a href="https://github.com/KeshavCode6" target="_blank" rel="noopener noreferrer">
                        <Button size="icon">
                            <FaGithub />
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/keshav-shah-975297301" target="_blank" rel="noopener noreferrer">
                        <Button size="icon">
                            <FaLinkedin />
                        </Button>
                    </a>
                </div>
            </div>
            <Image className="absolute md:bottom-0 w-full" alt="waves" src={waves} />

        </Navbar >
    );
}

export default Work;
