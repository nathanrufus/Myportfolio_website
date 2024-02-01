import React, { useState } from "react"
import { Link, scrollLink } from "react-scroll"
import {
	BookOpenIcon,
	Bars3BottomRightIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid"

function Header() {
	let Links = [
		{ name: "Home", link: "home" },
		{ name: "About me", link: "about" },
		{ name: "Projects", link: "projects" },
		{ name: "Contact", link: "contact" },
	]
	let [open, setopen] = useState(false)
	return (
		<div className=" w-full max-w-7xl">
			<div className=" md:flex items-center justify-between py-4 md:px-10 px-7">
				{/* logo section */}
				<div className=" font-bold text-2xl flex items-center cursor-pointer gap-1">
					<span className=" text-pink-300 hover:text-white">Kibet Nathan</span>
				</div>
				{/* menu icons */}
				<div onClick={()=>setopen(!open)} className=" w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-white absolute">{open ? <XMarkIcon /> : <Bars3BottomRightIcon />}</div>
				{/* Nav link items */}
				<ul
					className={` md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 
				left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent
				 transition-all duration-500 ease-in${open ?" top-12":" top-[-490px]"}`}
				>
					{Links.map((link) => (
						<li key={link.name} className=" md:ml-8 md:my-0 my-7 font-semibold">
							<Link
								to={link.link}
								activeClass="active"
								smooth={true}
								spy={true}
								className=" text-white transition-all duration-500 hover:text-pink-300"
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Header
