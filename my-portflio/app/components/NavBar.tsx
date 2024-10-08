'use client';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink = ({ href, label, onClick }: NavLinkProps) => (
  <li className="border-b md:border-none border-zinc-600">
    <a href={href} className="block px-4 py-2 md:p-0 text-zinc-300 hover:text-white transition duration-300 ease-in-out"
    onClick={onClick}>
      {label}
    </a>
  </li>
);

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => (
  <div className="h-0.5 bg-zinc-600">
    <div className="h-0.5 bg-gradient-to-r from-green-600 to-blue-600 transition-all duration-300 ease-out"
    style={{ width: `${progress}%` }}/>
  </div>
);

interface NavigationProps {
  links: NavLinkProps[];
  isOpen: boolean;
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Navigation = ({ links, isOpen, onLinkClick }: NavigationProps) => (
  <ul className={`flex-col md:flex-row md:flex md:space-x-8 ${isOpen ? 'flex' : 'hidden'} md:block`}>
    {links.map((link, index) => (
      <NavLink key={index} href={link.href} label={link.label} onClick={onLinkClick} />
    ))}
  </ul>
);

const NavBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / documentHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links: NavLinkProps[] = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#resume', label: 'RESUME' },
    { href: '#portfolio', label: 'PORTFOLIO' },
    { href: '#contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetId = href.substring(1); // Remove the '#' from the href
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    setMenuOpen(false);
  };

  const hamburgerIcon = <FaBars className="h-6 w-6 text-current" />;
  const closeIcon = <FaTimes className="h-6 w-6 text-current" />;

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900 text-gray-300 shadow-md z-50 border-b border-zinc-600">
      <div className="container font-mono mx-auto p-4 flex justify-between items-center">
        <div className="text-lg text-white">
          <a href="/" className="hover:text-gray-200 transition duration-300 ease-in-out">
            🍊Delong Yang
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? closeIcon : hamburgerIcon}
        </button>
        <div className="hidden md:flex md:space-x-8">
          <Navigation links={links} isOpen={true} onLinkClick={handleLinkClick} />
        </div>
      </div>
      <ProgressBar progress={scrollProgress} />
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <Navigation links={links} isOpen={menuOpen} onLinkClick={handleLinkClick} />
      </div>
    </nav>
  );
};

export default NavBar;