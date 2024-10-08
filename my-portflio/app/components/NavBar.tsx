'use client';
import { useState, useEffect } from 'react';

// Define an interface for NavLinkProps, which represents a single navigation link
interface NavLinkProps {
  href: string;
  label: string;
}
// Define the NavLink component, which renders a single navigation link
const NavLink = ({ href, label }: NavLinkProps) => (
  // Render a list item with a link inside
  <li className="border-b md:border-none border-zinc-600">
    <a href={href} className="block px-4 py-2 md:p-0 text-zinc-300 hover:text-white transition duration-300 ease-in-out">
      {label}
    </a>
  </li>
);

// Define an interface for ProgressBarProps, which represents a progress bar
interface ProgressBarProps {
  progress: number;
}

// Define the ProgressBar component, which renders a progress bar
const ProgressBar = ({ progress }: ProgressBarProps) => (
  // Render a container div with a background color
  <div className="h-0.5 bg-zinc-600">
    <div className="h-0.5 bg-gradient-to-r from-green-300 to-blue-600 transition-all duration-300 ease-out" style={{ width: `${progress}%` }}/>
  </div>
);

// Define an interface for NavigationProps, which represents a navigation menu
interface NavigationProps {
  links: NavLinkProps[];
  isOpen: boolean;
}

// Define the Navigation component, which renders a navigation menu
const Navigation = ({ links, isOpen }: NavigationProps) => (
  <ul className={`flex-col md:flex-row md:flex md:space-x-8 ${isOpen ? 'flex' : 'hidden'} md:block`}>
    {links.map((link, index) => (
      <NavLink key={index} href={link.href} label={link.label} />
    ))}
  </ul>
);

const NavBar = () => {
  // State variables to store the scroll progress and menu open state
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll event to update scroll progress
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / documentHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  // Add event listener to window scroll event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const links: NavLinkProps[] = [
    { href: '#home', label: 'Home' },
    { href: '#resume', label: 'Resume' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  // Hamburger and close icons
  const hamburgerIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const closeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900 text-gray-300 shadow-md z-50 border-b border-zinc-600">
      {/* Container element for navbar content */}
      <div className="container font-mono mx-auto p-4 flex justify-between items-center">
        {/* logo and text */}
        <div className="text-lg text-white">
          <a href="/" className="hover:text-gray-200 transition duration-300 ease-in-out">
            🍊Delong Yang
          </a>
        </div>
        {/* Hamburger button for mobile menu */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? closeIcon : hamburgerIcon}
        </button>
        {/* Desktop navigation menu */}
        <div className="hidden md:flex md:space-x-8">
          <Navigation links={links} isOpen={true} />
        </div>
      </div>
      {/* Progress bar for scroll progress */}
      <ProgressBar progress={scrollProgress} />
      {/* Mobile navigation menu */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        {/* Mobile navigation menu links */}
        <Navigation links={links} isOpen={menuOpen} />
      </div>
    </nav>
  );
};

export default NavBar;