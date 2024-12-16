import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import {
  FaArrowRight,
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import waves from "@/public/waves.svg"
import headshot from "@/public/headshot.jpg"
import Image from "next/image"

export default function HeroSection() {
  return (
    <Navbar>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-32 z-50 p-8 rounded-lg">
          <div className="lg:w-1/2 mb-10 lg:mb-0 px-8 text-center md:px-0 md:text-left">
            <h1 className="flex text-xl md:text-5xl gap-3 items-center font-bold leading-tight">
              I'm Keshav!
            </h1>
            <p className="text-sm md:text-lg font-semibold text-blue-500">
              Highschool Software Developer & AI Enthusiast
            </p>
            <p className="text-md max-w-lg mb-4">
              My mission is to develop software to create mobile and web
              applications backed by emerging technologies like AI & Machine
              Learning that solve real world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Button className="flex items-center justify-center w-fit sm:text-xs">
                View My Work <FaArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Image src={headshot} alt="headshot" className=" w-64 aspect-square rounded-full" />
        </div>

        <div className="flex flex-col mt-4 z-50 items-center mb-4 md:mb-0 p-8 rounded-lg">
          <p className="font-medium text-sm text-gray-500">
            Contact me at{" "}
            <a href="mailto:keshavrshah@gmail.com" className="text-blue-500">
              keshavrshah@gmail.com
            </a>{" "}
            or
          </p>
          <div className="flex flex-row gap-2 mt-2">
            <Button size="icon">
              <FaInstagram />
            </Button>
            <Button size="icon">
              <FaDiscord />
            </Button>
            <Button size="icon">
              <FaGithub />
            </Button>
            <Button size="icon">
              <FaLinkedin />
            </Button>
          </div>
        </div>
      </div>
      <Image className="absolute bottom-0  w-screen" alt="waves" src={waves} />
    </Navbar>
  );
}
