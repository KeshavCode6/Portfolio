import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/public/logo.png";
import { GridVisibleBackground } from "./background";
import Socials from "./social";
import { NavbarLinks } from "./navbar";

interface FooterLink {
	text: string;
	href: string;
}

interface FooterColumnProps {
	title: string;
	links: FooterLink[];
}

interface FooterProps {
	logo?: ReactNode;
	name?: string;
	columns?: FooterColumnProps[];
	copyright?: string;
	policies?: FooterLink[];
	showModeToggle?: boolean;
	className?: string;
}

export function Footer({
	copyright = "Created by Keshav Shah, 2025",
	className,
}: FooterProps) {
	return (
		<footer className={cn("bg-[#0894e4] w-full px-4 relative", className)}>
			<div className="max-w-container mx-auto py-8">
				<div className="flex flex-col gap-8 items-center justify-center md:flex-row md:justify-between md:px-16">
					<div className="flex items-center gap-2 text-muted">
						<Image src={logo} alt="logo" className="max-w-9" />
						<h3 className="text-xl font-bold">Keshav Shah</h3>
					</div>
					<div className="flex flex-wrap z-30 text-white">
						<NavbarLinks className="text-white hover:text-blue-300" />
					</div>
				</div>

				<div className="border-t border-sky-600  mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-muted px-16">
					<div>{copyright}</div>
					<div className="flex items-center gap-2 mt-2 sm:mt-0 z-30 text-sky-200">
						<Socials />
					</div>
				</div>
			</div>
			<GridVisibleBackground />
		</footer>
	);
}
