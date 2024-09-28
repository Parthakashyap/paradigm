import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center gap-60 px-8 py-6">
      <div className="flex items-center space-x-2">
        <span className="font-serif text-3xl text-black font-thin">Paradigm</span>
      </div>
      <div className="flex space-x-10 text-sm font-mono text-gray-700">
        <Link href="/about" className="hover:underline transition ">About</Link>
        <Link href="/Portfolio" className="hover:underline transition">Portfolio</Link>
        <Link href="/collaborate " className="hover:underline transition">Collaborate </Link>
        <Link href="/careers" className="hover:underline transition">Careers</Link>
        <Link href="/Contact " className="hover:underline transition">Contact </Link>
      </div>
    </nav>
  );
};

export default Navbar;
