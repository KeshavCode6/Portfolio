import Link from 'next/link'
import React from 'react'
import { FaDiscord, FaLinkedin } from "react-icons/fa"
import { PiInstagramLogoFill, PiMailboxFill } from "react-icons/pi"

export default function Socials() {
	return (
		<>
			<Link href="https://discordapp.com/users/743962655072452680" target='_blank' className='hover:bg-gray-400/75 rounded-2xl p-2 duration-400 transition-all' aria-label='Facebook Link'>
				<FaDiscord className="text-2xl" size={35} />
			</Link>
			<Link href="https://www.instagram.com/kesh306/" target='_blank' className='hover:bg-gray-400/75 rounded-2xl p-2 duration-400 transition-all' aria-label='Check us out on instragram at ballista.designs'>
				<PiInstagramLogoFill className="text-2xl" size={35} />
			</Link>
			<Link href="https://www.linkedin.com/in/keshav-shah-975297301/" target='_blank' className='hover:bg-gray-400/75 rounded-2xl p-2 duration-400 transition-all' aria-label='Email us at contact@ballistadesigns.com'>
				<FaLinkedin className="text-2xl" size={35} />
			</Link>
			<Link href="mailto:keshavrshah@gmail.com" className='hover:bg-gray-400/75 rounded-2xl p-2 duration-400 transition-all' aria-label='Email us at contact@ballistadesigns.com'>
				<PiMailboxFill className="text-2xl" size={35} />
			</Link>
		</>
	)
}
