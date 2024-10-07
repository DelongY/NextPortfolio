'use client'
import { useState, useEffect } from 'react';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: NavLinkProps) => (
  <li className="border-b md:border-none border-zinc-600">
    <a href={href} className="block px-4 py-2 md:p-0 text-zinc-300 hover:text-white transition duration-300 ease-in-out">
      {label}
    </a>
  </li>
);

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => (
  <div className="h-0.5 bg-zinc-600">
    <div
      className="h-0.5 bg-gradient-to-r from-green-300 to-blue-600 transition-all duration-300 ease-out"
      style={{ width: `${progress}%` }}
    />
  </div>
);

interface NavigationProps {
  links: NavLinkProps[];
}

const Navigation = ({ links }: NavigationProps) => (
  <ul className="flex-col md:flex-row md:flex md:space-x-8">
    {links.map((link, index) => (
      <NavLink key={index} href={link.href} label={link.label} />
    ))}
  </ul>
);

const NavBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

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
    { href: '#home', label: 'Home' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900 text-gray-300 shadow-md z-50 border-b border-zinc-600">
      <div className="container font-mono mx-auto p-4 flex justify-between items-center">
        <div className="text-lg text-white">
          <a href="/" className="hover:text-gray-200 transition duration-300 ease-in-out">
            🍊Delong Yang
          </a>
        </div>
        <Navigation links={links} />
      </div>
      <ProgressBar progress={scrollProgress} />
    </nav>
  );
};

export default NavBar;