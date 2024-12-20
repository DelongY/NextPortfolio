'use client'
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import logo from '../../public/assets/Logo.png';

interface NavItem {
  name: string;
  section: string;
}

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Skills', section: 'skills' },
    { name: 'Resume', section: 'resume' },
    { name: 'Projects', section: 'portfolio' },
    { name: 'Contact', section: 'contact' },
  ];

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const sections = ['home', ...navItems.map(item => item.section)];
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
  }, [navItems]);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, handleResize]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = element.offsetTop;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <div>
      <nav
        className={`fixed top-3 left-1/2 transform -translate-x-1/2 z-50 px-3 sm:px-4 md:px-6 w-[95%] sm:w-[90%] md:w-auto ease-in-out md:bg-transparent duration-300 md:backdrop-blur-sm md:rounded-2xl ${
          scrolled ? 'md:bg-white/10 duration-300 md:backdrop-blur-md md:rounded-2xl md:shadow-lg' : ''
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center w-full h-16 items-center space-x-3 lg:space-x-6">
          {navItems.slice(0, 3).map(({ name, section }) => (
            <button
              key={name} onClick={() => scrollToSection(section)}
              className={`px-3 text-base font-medium duration-300 hover:scale-105 ${
                activeSection === section ? 'text-purple-500' : 'text-white/75 hover:text-white'
              }`}
            >
              {name}
            </button>
          ))}
          <button
            className={`relative flex-shrink-0 duration-300 hover:scale-110 ${
              activeSection === 'home' ? 'scale-125' : ''
            }`}
            onClick={() => window.location.href = 'https://delongxportfolio.vercel.app/'}
            aria-label="Scroll to top"
          >
            <Image src={logo} width={36} height={36} alt="Logo" className="object-contain" priority/>
          </button>
          {navItems.slice(3).map(({ name, section }) => (
            <button
              key={name} onClick={() => scrollToSection(section)}
              className={`px-3 text-base font-medium duration-300 hover:scale-105 ${
                activeSection === section ? 'text-purple-500' : 'text-white/75 hover:text-white'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Header */}
        <div className="md:hidden flex justify-between items-center h-16 w-full">
          <button 
            onClick={() => window.location.href = 'https://delongxportfolio.vercel.app/'}
            aria-label="Scroll to top"
            className="duration-300"
          >
            <Image src={logo} width={36} height={36} alt="Logo" className="object-contain" priority/>
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white/75 hover:text-white p-2 transition-all duration-300 rounded-full z-50"
          >
            {isMenuOpen ? <X size={39} aria-hidden="true" /> : <Menu size={39} aria-hidden="true" />}
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Background Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 z-30 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 h-full w-full sm:w-96 bg-black/90 transform transition-transform duration-60 ease-in-out z-40 whitespace-nowrap
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col pt-36 px-20 sm:px-20 whitespace-nowrap">
          {navItems.map(({ name, section }) => (
            <button
              key={name}
              onClick={() => scrollToSection(section)}
              className={`py-4 text-left text-xl px-12 sm:text-lg font-medium transition-all duration-300 border-spacing-6 border-white/10 w-full ${
                activeSection === section 
                  ? 'text-purple-500' 
                  : 'text-white/75 hover:text-white/90 hover:translate-x-1'
              }`}
            >
              {activeSection === section ? '-> ' : ''}{name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;