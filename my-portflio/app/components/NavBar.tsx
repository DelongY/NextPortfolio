'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/assets/Logo.png';

// Types
type Section = 'home' | 'about' | 'skills' | 'resume' | 'portfolio' | 'contact';

interface NavItem {
  id: Section;
  label: string;
  href: string;
}

// Constants
const NAV_ITEMS: NavItem[] = [
  'home', 'about', 'skills', 'resume', 'portfolio', 'contact'
].map(section => ({
  id: section as Section,
  label: section.toUpperCase(),
  href: `#${section}`
}));

// Hooks
const useViewport = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 768);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return isMobile;
};

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<Section | ''>('');

  useEffect(() => {
    let isThrottled = false;

    const handleScroll = () => {
      if (isThrottled) return;
      isThrottled = true;

      // Update active section
      const viewportMid = window.scrollY + (window.innerHeight / 2);
      const currentSection = NAV_ITEMS.find(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const { offsetTop, offsetHeight } = element;
        return viewportMid >= offsetTop && viewportMid < (offsetTop + offsetHeight);
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
        window.history.replaceState(null, '', currentSection.href);
      }

      setTimeout(() => { isThrottled = false; }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Handle initial hash
    const hash = window.location.hash.substring(1) as Section;
    if (NAV_ITEMS.some(item => item.id === hash)) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(hash);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};

// Components
const MenuButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button 
    className="md:hidden text-white z-50 relative w-8 h-8 flex items-center justify-center"
    onClick={onClick}
    aria-label="Toggle menu"
  >
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className={`
          absolute left-0 h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out
          ${i === 0 ? (isOpen ? 'rotate-45 top-3' : 'top-1') : ''}
          ${i === 1 ? `top-3 ${isOpen ? 'opacity-0' : 'opacity-100'}` : ''}
          ${i === 2 ? (isOpen ? '-rotate-45 top-3' : 'top-5') : ''}
        `}
      />
    ))}
  </button>
);

const NavLinks = ({ 
  items, 
  activeSection, 
  isMobile, 
  isOpen, 
  onLinkClick 
}: { 
  items: NavItem[];
  activeSection: Section | '';
  isMobile: boolean;
  isOpen: boolean;
  onLinkClick: (href: string) => void;
}) => (
  <>
    {/* Overlay */}
    <div 
      className={`fixed inset-0 bg-black/50 backdrop-blur-md md:hidden
        transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      onClick={() => onLinkClick('#')} // Close menu when clicking overlay
    />
    
    {/* Navigation Menu */}
    <nav 
      className={`fixed top-0 left-0 h-full w-72 md:w-auto md:relative md:h-auto
        bg-zinc-900/90 md:bg-transparent 
        transform transition-all duration-300 ease-in-out
        ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : ''}
        flex items-center justify-center
        shadow-2xl
      `}
    >
      <ul className="flex flex-col md:flex-row items-center w-full md:w-auto md:space-x-8">
        {items.map(({ id, href, label }) => (
          <li key={id} className="w-full md:w-auto text-center">
            <Link
              href={href}
              className={`
                block px-8 py-4 md:p-0
                transition-all duration-200 ease-in-out
                ${activeSection === id ? 'text-violet-400' : 'text-zinc-300 hover:text-white'}
                border-b md:border-none border-zinc-700/50
                hover:bg-zinc-800/50 md:hover:bg-transparent
                ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0 md:translate-x-0 md:opacity-100'}
                transition-transform duration-300 ease-out
                ${items.indexOf({ id, href, label }) * 50}ms
              `}
              onClick={() => onLinkClick(href)}
              style={{
                transitionDelay: isMobile ? `${items.indexOf({ id, href, label }) * 50}ms` : '0ms'
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </>
);

// Main Component
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useViewport();
  const activeSection = useActiveSection();

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = (isMenuOpen && isMobile) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen, isMobile]);

  const handleLinkClick = useCallback((href: string) => {
    if (href !== '#') { // Don't scroll if clicking overlay
      const targetId = href.substring(1);
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  return (
<nav className="fixed top-0 left-0 w-full bg-zinc-900/90 text-gray-300 z-50 shadow-2xl">
    <div className="container mx-auto p-3 flex justify-between items-center">
      <div className="relative w-12 h-12">
        <Image 
          src={logo} 
          alt="logo" 
          fill={true}
          sizes="60px"
          quality={100}
          className="object-contain"
          priority
        />
      </div>
      <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <NavLinks
        items={NAV_ITEMS}
        activeSection={activeSection}
        isMobile={isMobile}
        isOpen={isMenuOpen}
        onLinkClick={handleLinkClick}
      />
    </div>
  </nav>
  );
};

export default NavBar;