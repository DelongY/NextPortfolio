'use client';
import Link from 'next/link';
import React, { useState, useEffect, useCallback, useMemo } from 'react';

// Types
interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Constants
const MOBILE_BREAKPOINT = 768;
const SCROLL_THROTTLE = 100;
const SECTIONS = ['home', 'about', 'skills', 'resume', 'portfolio', 'contact'] as const;

// Utility functions
const throttle = (func: Function, limit: number) => {
  let inThrottle = false;
  return (...args: any[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Components
const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="w-6 h-6 relative cursor-pointer">
    {[0, 1, 2].map((index) => (
      <span
        key={index}
        className={`
          absolute left-0 block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out
          ${index === 0 && (isOpen ? 'rotate-45 top-3' : 'rotate-0 top-1')}
          ${index === 1 && `top-3 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          ${index === 2 && (isOpen ? '-rotate-45 top-3' : 'rotate-0 top-5')}
        `}
      />
    ))}
  </div>
);

const NavLink = React.memo(({ href, label, isActive, onClick }: NavLinkProps) => (
  <li className="w-3/4 text-left">
    <Link
      href={href}
      className={`block px-6 py-4 md:p-0 transition duration-300 ease-in-out
        ${isActive ? 'text-violet-400 font-bold' : 'text-zinc-300 hover:text-white'}
        border-b md:border-none border-zinc-600 md:border-transparent
      `}
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
));
NavLink.displayName = 'NavLink';

const ProgressBar = React.memo(({ progress }: { progress: number }) => (
  <div className="h-0.5 bg-zinc-600">
    <div
      className="h-0.5 bg-gradient-to-r from-green-600 to-blue-600 transition-all duration-300 ease-out"
      style={{ width: `${progress}%` }}
    />
  </div>
));
ProgressBar.displayName = 'ProgressBar';

const Navigation = React.memo(({ 
  links, 
  isOpen, 
  isMobile 
}: { 
  links: NavLinkProps[]; 
  isOpen: boolean; 
  isMobile: boolean;
}) => (
  <>
    <div 
      className={`
        fixed inset-0 bg-black/50 backdrop-blur-sm 
        transition-opacity duration-300 md:hidden
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}
      aria-hidden="true"
    />
    
    <div
      className={`
        fixed top-0 left-0 h-full w-60
        md:w-auto md:left-0 md:relative md:h-auto
        bg-zinc-900/90 md:bg-transparent
        transform transition-transform duration-300 ease-in-out
        ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : ''}
        flex items-center justify-center
      `}
    >
      <ul className="flex flex-col md:flex-row items-center md:items-center justify-center w-full md:w-auto md:space-x-8">
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </ul>
    </div>
  </>
));
Navigation.displayName = 'Navigation';

const NavBar: React.FC = () => {
  const [state, setState] = useState({
    scrollProgress: 0,
    menuOpen: false,
    activeSection: '',
    isMobile: false
  });

  const updateState = (newState: Partial<typeof state>) => {
    setState(prev => ({ ...prev, ...newState }));
  };

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < MOBILE_BREAKPOINT;
      updateState({ 
        isMobile: isMobileView,
        menuOpen: isMobileView ? state.menuOpen : false 
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [state.menuOpen]);

  // Handle body scroll lock
  useEffect(() => {
    document.body.style.overflow = state.menuOpen && state.isMobile ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [state.menuOpen, state.isMobile]);

  // Handle scroll and section detection
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    
    const viewportMid = scrollTop + (window.innerHeight / 2);
    const currentSection = SECTIONS.find(section => {
      const element = document.getElementById(section);
      if (!element) return false;
      const { offsetTop, offsetHeight } = element;
      return viewportMid >= offsetTop && viewportMid < (offsetTop + offsetHeight);
    });

    if (currentSection) {
      const newHash = `#${currentSection}`;
      if (window.location.hash !== newHash) {
        window.history.replaceState(null, '', newHash);
      }
    }

    updateState({ 
      scrollProgress: progress, 
      activeSection: currentSection || '' 
    });
  }, []);

  // Initialize scroll handling
  useEffect(() => {
    const throttledScroll = throttle(handleScroll, SCROLL_THROTTLE);
    window.addEventListener('scroll', throttledScroll);

    const initialHash = window.location.hash.substring(1);
    if (initialHash && SECTIONS.includes(initialHash as any)) {
      document.getElementById(initialHash)?.scrollIntoView({ behavior: 'auto', block: 'start' });
      updateState({ activeSection: initialHash });
    } else {
      handleScroll();
    }

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateState({ menuOpen: false });
  }, []);

  const links = useMemo(() => 
    SECTIONS.map(section => ({
      href: `#${section}`,
      label: section.toUpperCase(),
      isActive: state.activeSection === section,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, `#${section}`),
    })), 
    [state.activeSection, handleLinkClick]
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900 text-gray-300 z-50">
      <div className="container font-mono mx-auto p-3 flex justify-between items-center relative">
        <Link 
          href="/" 
          className="text-lg text-white hover:text-gray-200 transition duration-300 ease-in-out"
        >
          🍊Delong Yang
        </Link>

        <button 
          className="md:hidden text-white z-50 relative w-8 h-8 flex items-center justify-center"
          onClick={() => updateState({ menuOpen: !state.menuOpen })}
          aria-label="Toggle menu"
          aria-expanded={state.menuOpen}
        >
          <MenuIcon isOpen={state.menuOpen} />
        </button>

        <Navigation 
          links={links} 
          isOpen={state.menuOpen} 
          isMobile={state.isMobile}
        />
      </div>

      <ProgressBar progress={state.scrollProgress} />
    </nav>
  );
};

export default NavBar;