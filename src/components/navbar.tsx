"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${isOpen ? 'bg-white' : 'bg-white'} transition-colors duration-300 relative`}>
      <nav className={`text-white md:text-black`}>
        {/* Wrapper */}
        <div className="flex justify-between items-center px-8 py-6 fixed top-0 left-0 right-0 z-50">
          {/* Logo */}
          <Link href="/home" className="flex items-center space-x-2">
            <span className="relative">
              {/* First Letter */}
              <span className={`font-serif text-4xl ${isOpen ? 'text-white' : 'text-black'} font-semibold tracking-wide`}>
              {scrollPosition > 50 ? 'A\\' : 'A'}
              </span>
              {/* Rest of the text */}
              <span
                className={`font-serif text-4xl ${isOpen ? 'text-white' : 'text-black'} font-light tracking-tight transition-transform duration-300`}
                style={{
                  transform: `translateX(${scrollPosition > 50 ? '-2rem' : '0'})`,
                  opacity: scrollPosition > 50 ? 0 : 1,
                  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                  position: 'absolute',
                }}
              >
                egean
              </span>
            </span>
          </Link>

          {/* Text "Aegean" on top right */}
          <div className="hidden md:block text-white text-2xl font-mono absolute top-2 right-8">Aegean</div>

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
            <Link href="/contact-us" className="hover:underline transition">Contact</Link>
          </div>
        </div>

        {/* Collapsible Mobile Menu (visible on small screens) */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex flex-col  items-start bg-black text-white w-full h-full transition-all duration-300">
            <Link href="/home" className='font-serif absolute top-6 left-6 text-white  text-4xl'>
              Aegean
            </Link>
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white text-3xl">
              &#10005;
            </button>
            <div className="flex flex-col space-y-8 text-2xl font-mono p-8 mt-32">
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
