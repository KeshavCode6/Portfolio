import React from 'react'
export function RotatedGridBackground() {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
			<div
				className="absolute top-1/2 left-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
		   bg-[size:24px_24px] scale-125 transform rotate-45"
			/>
		</div>
	)
}
export function GridBackground() {
	return (
		<div className='absolute inset-0 overflow-hidden '>
			<div
				className=" scale-125   h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] z-[-1]"
			></div>
		</div>
	)
}

export function GridVisibleBackground() {
	return (
		<div className="absolute inset-0 overflow-hidden">
			<div
				className="scale-125 z-[-1] h-full w-full bg-[linear-gradient(to_right,#6366f133_1px,transparent_1px),linear-gradient(to_bottom,#6366f133_1px,transparent_1px)] bg-[size:48px_48px]"
			></div>
		</div>
	);
}

export function GridDotsBackground() {
	return (
		<div
			className="z-[-1] absolute inset-0 h-full w-full opacity-60 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] "
		></div>
	)
}