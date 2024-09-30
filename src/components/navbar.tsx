"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isOpen ? 'bg-white' : 'bg-white'}  transition-colors duration-300 relative`}>
      <nav className={`text-white md:text-black`}>
        {/* Wrapper */}
        <div className="flex justify-between items-center px-8 py-6">
          {/* Logo */}
          <Link href="/home" className="flex items-center space-x-2">
            <span className={`font-serif text-3xl ${isOpen ? 'text-white' : 'text-black'} font-thin`}>Aegean</span>
          </Link>

          {/* Hamburger Icon (visible on small screens) */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              <div className="space-y-2">
                <span className={`block w-8 h-0.5 ${isOpen ? 'bg-white' : 'bg-black'}`}></span>
                <span className={`block w-8 h-0.5 ${isOpen ? 'bg-white' : 'bg-black'}`}></span>
                <span className={`block w-8 h-0.5 ${isOpen ? 'bg-white' : 'bg-black'}`}></span>
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

        {/* Collapsible Mobile Menu (visible on small screens) */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black text-white w-full h-full transition-all duration-300">
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white text-3xl">
              &#10005;
            </button>
            <div className="flex flex-col space-y-8 text-2xl font-mono">
              <Link href="/about" className="hover:underline transition" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/portfolio" className="hover:underline transition" onClick={() => setIsOpen(false)}>Portfolio</Link>
              <Link href="/collaborate" className="hover:underline transition" onClick={() => setIsOpen(false)}>Collaborate</Link>
              <Link href="/careers" className="hover:underline transition" onClick={() => setIsOpen(false)}>Careers</Link>
              <Link href="/contact" className="hover:underline transition" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
