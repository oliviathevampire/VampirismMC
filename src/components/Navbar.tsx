// Import necessary libraries
import Link from 'next/link';

// Define the Navbar component
const Navbar: React.FC = () => {
	return (
		<nav className="bg-gray-800 p-4">
			<div className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
				<Link href="/" className="flex-none  text-white">
					<img src="/images/logo.png" alt="VampirismMC Logo" className="h-8 w-auto mr-2" />
				</Link>
				<div className="flex space-x-4">
					<Link href="/about" className="text-white font-bold">
						About
					</Link>
					<Link href="/contact" className="text-white font-bold">
						Contact
					</Link>
					<Link href="/blogs" className="text-white font-bold">
						Blogs
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;