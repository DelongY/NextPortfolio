'use client';
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// Define the props for the NavLink component
interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Utility function to throttle the execution of a function
// This is used to prevent excessive function calls during scrolling
const throttle = <T extends (...args: any[]) => void>(func: T, limit: number): T => {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  } as T;
};

// Sub-component to render a single navigation link
const NavLink: React.FC<NavLinkProps> = React.memo(({ href, label, isActive, onClick }) => (
  <li className="border-b md:border-none border-zinc-600">
    <a 
      href={href} 
      className={`block px-4 py-2 md:p-0 transition duration-300 ease-in-out ${
        isActive ? 'text-white font-extrabold ' : 'text-zinc-300 hover:text-white'}`} 
      onClick={onClick}
    >
      {label}
    </a>
  </li>
));
NavLink.displayName = 'NavLink';

// Sub-component to render a progress bar
const ProgressBar: React.FC<{ progress: number }> = React.memo(({ progress }) => (
  <div className="h-0.5 bg-zinc-600">
    <div 
      className="h-0.5 bg-gradient-to-r from-green-600 to-blue-600 transition-all duration-300 ease-out"
      style={{ width: `${progress}%` }}
    />
  </div>
));
ProgressBar.displayName = 'ProgressBar';

// Sub-component to render the navigation links
const Navigation: React.FC<{ links: NavLinkProps[]; isOpen: boolean }> = React.memo(({ links, isOpen }) => (
  <ul className={`flex-col md:flex-row md:flex md:space-x-8 ${isOpen ? 'flex' : 'hidden'} md:block`}>
    {links.map((link) => (
      <NavLink key={link.href} {...link} />
    ))}
  </ul>
));
Navigation.displayName = 'Navigation';

// Main NavBar component
const NavBar: React.FC = () => {
  // State variables to track the scroll progress, menu open state, and active section
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Refs to track manual scrolling and timeout
  const isManualScrollRef = useRef(false);
  const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoized array of section IDs
  const sections = useMemo(() => ['home', 'about', 'skills', 'resume', 'portfolio', 'contact'], []);

  // Handler function to update the scroll progress and active section
  const handleScroll = useCallback(() => {
    // Calculate the scroll progress as a percentage
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / documentHeight) * 100;
    setScrollProgress(scrollPercentage);

    // Update the active section if not manually scrolling
    if (!isManualScrollRef.current) {
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    }
  }, [sections]);

  // Handler function to handle link clicks
  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      isManualScrollRef.current = true;
      setActiveSection(targetId);
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
      
      manualScrollTimeoutRef.current = setTimeout(() => {
        isManualScrollRef.current = false;
      }, 1000); // Adjust this timeout if needed to match your scroll duration
    }
    setMenuOpen(false);
  }, []);

  // Toggle menu state callback function
  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

  // Effect to handle window scroll event
  useEffect(() => {
    // Throttle the handleScroll function to prevent excessive calls
    const throttledHandleScroll = throttle(handleScroll, 100);
    // Add event listener to window scroll event
    window.addEventListener('scroll', throttledHandleScroll);
    // Clean up function to remove event listener and clear timeout
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  // Memoized array of navigation links
  const links: NavLinkProps[] = useMemo(() => 
    sections.map(section => ({
      href: `#${section}`,
      label: section.toUpperCase(),
      isActive: activeSection === section,
      onClick: (e) => handleLinkClick(e, `#${section}`)
    }))
  , [sections, activeSection, handleLinkClick]);

  //  Render the navigation bar component
  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900 text-gray-300 z-50">
      <div className="container font-mono mx-auto p-4 flex justify-between items-center">
        {/* Site logo */}
        <div className="text-lg text-white">
          <a href="/" className="hover:text-gray-200 transition duration-300 ease-in-out">
            🍊Delong Yang
          </a>
        </div>
        
        {/* Mobile menu toggle button */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <FaTimes className="h-6 w-6 text-current" /> : <FaBars className="h-6 w-6 text-current" />}
        </button>
        
        {/* Desktop Navigation links*/}
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