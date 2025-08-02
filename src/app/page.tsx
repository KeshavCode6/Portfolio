import React from "react";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { AboutSection } from "@/components/sections/about";
import { GridBackground } from "@/components/background";
import { Footer } from "@/components/footer";

export default function Portfolio() {
  return (
    <main className="relative">
      <Hero />
      <div className="relative">
        <AboutSection />
        <Skills />
        <GridBackground />
      </div>
      <Projects />
      <Footer />
    </main>
  )
}
