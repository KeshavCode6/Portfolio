"use client"
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbar';
import Rain from '@/components/ui/rain';
import React from 'react'
import portrait from "@/public/portrait.jpg"
import Image from "next/image";

function Dashboard() {
  return (
    <Navbar>
      <Rain>
        <div className='flex items-center gap-24 rounded-lg p-4 bg-white/5 backdrop-blur-sm'>
          <div className='flex flex-col'>
            <h1 className='text-2xl font-semibold'>I'm Keshav</h1>
            <p className='max-w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil recusandae tempore, voluptas voluptatum voluptatem eum!</p>
            <div className='flex gap-1 mt-4'>
              <Button size={"sm"}>Contact Me</Button>
              <Button size={"sm"} variant={"outline"}>My Work</Button>
            </div>
          </div>
          <div className='bg-slate-900 w-72 aspect-square rounded-full'></div>
        </div>
      </Rain>
      hi
    </Navbar>
  )
}

export default Dashboard;