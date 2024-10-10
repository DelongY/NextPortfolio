'use client';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// Define an interface for NavLinkProps, which represents a single navigation link
interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

// Define the NavLink component, which renders a single navigation link
const NavLink = ({ href, label, onClick }: NavLinkProps) => (
  <li className="border-b md:border-none border-zinc-600">
    <a href={href} className="block px-4 py-2 md:p-0 text-zinc-300 hover:text-white transition duration-300 ease-in-out"
    onClick={onClick}>
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
    <div className="h-0.5 bg-gradient-to-r from-green-600 to-blue-600 transition-all duration-300 ease-out"
    style={{ width: `${progress}%` }}/>
  </div>
);

// Define an interface for NavigationProps, which represents a navigation menu
interface NavigationProps {
  links: NavLinkProps[];
  isOpen: boolean;
  onLinkClick?: () => void;
}

// Define the Navigation component, which renders a navigation menu
const Navigation = ({ links, isOpen, onLinkClick }: NavigationProps) => (
  <ul className={`flex-col md:flex-row md:flex md:space-x-8 ${isOpen ? 'flex' : 'hidden'} md:block`}>
    {links.map((link, index) => (
      <NavLink key={index} href={link.href} label={link.label} onClick={onLinkClick} />
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
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#resume', label: 'RESUME' },
    { href: '#portfolio', label: 'PORTFOLIO' },
    { href: '#contact', label: 'CONTACT' },
  ];

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Hamburger and close icons
const hamburgerIcon = <FaBars className="h-6 w-6 text-current" />;
const closeIcon = <FaTimes className="h-6 w-6 text-current" />;

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
        <Navigation links={links} isOpen={menuOpen} onLinkClick={handleLinkClick} />
      </div>
    </nav>
  );
};

export default NavBar;