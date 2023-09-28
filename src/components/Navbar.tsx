// Import necessary libraries
import Link from 'next/link';

// Define the Navbar component
const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center text-white">
          <img src="/images/logo.png" alt="VampirismMC Logo" className="h-8 w-auto mr-2" /> {/* Added logo image */}VampirismMC
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/about" className="text-white">
            About
          </Link>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;