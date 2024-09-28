
"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black md:bg-white text-white md:text-black">
      {/* Wrapper */}
      <div className="flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <Link href="/home" className="flex items-center space-x-2">
        <span className="font-serif text-3xl text-black font-thin">Aegean</span>
      </Link>
        {/* Hamburger Icon (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Links (hidden on small screens, visible on larger screens) */}
        <div className="hidden md:flex space-x-10 mr-[40rem] text-sm font-mono">
          <Link href="/about" className="hover:underline transition">About</Link>
          <Link href="/portfolio" className="hover:underline transition">Portfolio</Link>
          <Link href="/collaborate" className="hover:underline transition">Collaborate</Link>
          <Link href="/careers" className="hover:underline transition">Careers</Link>
          <Link href="/contact" className="hover:underline transition">Contact</Link>
        </div>
      </div>

      {/* Collapsible Menu (visible on small screens) */}
      {isOpen && (
        <div className="flex flex-col space-y-4 px-8 py-4 md:hidden font-mono text-sm">
          <Link href="/about" className="hover:underline transition">About</Link>
          <Link href="/portfolio" className="hover:underline transition">Portfolio</Link>
          <Link href="/collaborate" className="hover:underline transition">Collaborate</Link>
          <Link href="/careers" className="hover:underline transition">Careers</Link>
          <Link href="/contact" className="hover:underline transition">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
