"use client"

// Import necessary libraries
import Link from 'next/link';
import { useState } from 'react';

// Define the Navbar component
const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
  
	return (
	  <nav className="bg-gray-700 p-4">
		<div className="w-full mx-auto flex flex-wrap items-center justify-between md:flex-nowrap">
		  <Link href="/">
			  <img src="/images/logo.png" alt="VampirismMC Logo" className="h-11 object-contain drop-shadow-md rounded-md" />
		  </Link>
		  <button className="text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
			<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
			</svg>
		  </button>
		  <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4`}>
			<Link href="/about" className="text-white font-bold">About</Link>
			<Link href="/contact" className="text-white font-bold">Contact</Link>
			<Link href="/blogs" className="text-white font-bold">Blogs</Link>
		  </div>
		</div>
	  </nav>
	);
};

export default Navbar;