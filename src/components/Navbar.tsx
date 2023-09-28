// Import necessary libraries
import Link from 'next/link';

// Define the Navbar component
const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center text-white">
            <img src="/images/logo.png" alt="VampirismMC Logo" className="h-8 w-auto mr-2" /> {/* Added logo image */}
            VampirismMC
          </a>
        </Link>
        <div className="flex space-x-4">
          <Link href="/">
            <a className="text-white">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-white">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-white">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;