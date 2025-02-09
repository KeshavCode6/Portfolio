import React from "react";
import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import waves from "@/public/waves.svg"

export default function Portfolio() {
  return (
    <main className="relative pb-32">
      <Hero />
      <Skills />
      <Projects />
      <div className="opacity-50 absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0" />
      <Image className="absolute left-0 right-0 bottom-0" src={waves} alt="waves" />
    </main>
  )
}
