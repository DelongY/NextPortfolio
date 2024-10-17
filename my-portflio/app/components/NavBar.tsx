'use client';
import Link from 'next/link';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Throttle function
const throttle = <T extends (...args: any[]) => void>(func: T, limit: number): T => {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  } as T;
};

// NavLink component
const NavLink: React.FC<NavLinkProps> = React.memo(({ href, label, isActive, onClick }) => (
  <li className="border-b md:border-none border-zinc-600">
    <Link
      href={href}
      className={`block px-4 py-2 md:p-0 transition duration-300 ease-in-out ${
        isActive ? 'text-violet-400 font-bold' : 'text-zinc-300 hover:text-white'
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
));
NavLink.displayName = 'NavLink';

// ProgressBar component
const ProgressBar: React.FC<{ progress: number }> = React.memo(({ progress }) => (
  <div className="h-0.5 bg-zinc-600">
    <div
      className="h-0.5 bg-gradient-to-r from-green-600 to-blue-600 transition-all duration-300 ease-out"
      style={{ width: `${progress}%` }}
    />
  </div>
));
ProgressBar.displayName = 'ProgressBar';

// Navigation component
const Navigation: React.FC<{ links: NavLinkProps[]; isOpen: boolean }> = React.memo(({ links, isOpen }) => (
  <ul className={`flex-col md:flex-row md:flex md:space-x-8 ${isOpen ? 'flex' : 'hidden'} md:block`}>
    {links.map((link) => (
      <NavLink key={link.href} {...link} />
    ))}
  </ul>
));
Navigation.displayName = 'Navigation';

// NavBar component
const NavBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = useMemo(() => ['home', 'about', 'skills', 'resume', 'portfolio', 'contact'], []);

  // Update the URL hash when the active section changes
  const updateURLHash = useCallback((section: string) => {
    const newHash = `#${section}`;
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, '', newHash);  // Update the URL hash without reloading the page
    }
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / documentHeight) * 100;
    setScrollProgress(scrollPercentage);
  
    // Determine active section based on scroll position
    const viewportHeight = window.innerHeight;
    const activeSectionIndex = Math.round(scrollTop / viewportHeight);
  
    if (activeSectionIndex >= 0 && activeSectionIndex < sections.length) {
      const currentSection = sections[activeSectionIndex];
      setActiveSection(currentSection);
      updateURLHash(currentSection); // Update the URL without reloading the page
    }
  }, [sections, updateURLHash]);

  // Handle link clicks and scroll to the respective section
  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMenuOpen(false);  // Close the mobile menu after clicking a link
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [handleScroll]);

  const links: NavLinkProps[] = useMemo(
    () =>
      sections.map((section) => ({
        href: `#${section}`,
        label: section.toUpperCase(),
        isActive: activeSection === section,
        onClick: (e) => handleLinkClick(e, `#${section}`),
      })),
    [sections, activeSection, handleLinkClick]
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900 text-gray-300 z-50">
      <div className="container font-mono mx-auto p-3 flex justify-between items-center">
        <div className="text-lg text-white">
          <Link href="/" className="hover:text-gray-200 transition duration-300 ease-in-out">
            🍊Delong Yang
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <FaTimes className="h-6 w-6 text-current" /> : <FaBars className="h-6 w-6 text-current" />}
        </button>

        {/* Desktop Navigation links */}
        <div className="hidden md:flex md:space-x-8">
          <Navigation links={links} isOpen={true} />
        </div>
      </div>

      {/* Progress bar to display scroll progress */}
      <ProgressBar progress={scrollProgress} />

      {/* Mobile navigation links */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <Navigation links={links} isOpen={menuOpen} />
      </div>
    </nav>
  );
};

export default NavBar;