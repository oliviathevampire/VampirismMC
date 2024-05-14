// Import necessary libraries
import Link from 'next/link';

// Define the Navbar component
const Navbar: React.FC = () => {
	return (
		<nav className="navbar p-4">
		  <div className="w-full mx-auto flex flex-wrap items-center justify-between">
			<Link href="/" className="text-white">
				<img src="/images/logo.png" alt="VampirismMC Logo" className="h-11 object-contain drop-shadow-md rounded-md" />
			</Link>
			{/* Hidden checkbox to manage the mobile menu toggle state */}
			<input type="checkbox" id="navbar-toggle" className="hidden" />
			<label htmlFor="navbar-toggle" className="text-white md:hidden block">
			  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
			  </svg>
			</label>
			{/* Navigation links */}
			<div className="hidden md:flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4" id="navbar-links">
			  <Link href="/about" className="nav-button font-bold">About</Link>
			  <Link href="/contact" className="nav-button font-bold">Contact</Link>
			  <Link href="/blogs" className="nav-button font-bold">Blogs</Link>
			</div>
		  </div>
		</nav>
	);
};

export default Navbar;