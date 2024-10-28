'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../public/assets/Logo.png';

// Interface for navigation items
interface NavItem {
  name: string;
  section: string;
}

const Navbar: React.FC = () => {
  // State for the active section and whether the user has scrolled
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Navigation items array
  const navItems: NavItem[] = [
    { name: 'About Me', section: 'about' },
    { name: 'Skills', section: 'skills' },
    { name: 'Portfolio', section: 'portfolio' },
    { name: 'Contact', section: 'contact' },
  ];

  // Effect to handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Determine which section is currently in view
      const sections = ['home', ...navItems.map(item => item.section)];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(sectionId);
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav
      className={`fixed top-3 left-1/2 transform -translate-x-1/2 z-50 px-6 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white/10 backdrop-blur-md rounded-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-center w-full h-16 items-center space-x-3">
        {/* Render navigation items */}
        {navItems.slice(0, 2).map(({ name, section }) => (
          <button
            key={name}
            onClick={() => scrollToSection(section)}
            className={`px-3 py-2 text-base font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
              activeSection === section ? 'text-purple-500' : 'text-white/75 hover:text-white/80'
            }`}
          >
            {name}
          </button>
        ))}
        {/* Logo in the center */}
        <button
          className={`cursor-pointer relative flex-shrink-0 transition-all duration-300 ${
            activeSection === 'home' ? 'scale-125' : ''
          }`}
          onClick={() => scrollToSection('home')}
          aria-label="Scroll to top"
        >
          <Image
            src={logo}
            width={36}
            height={36}
            alt="Logo"
            className="object-contain"
            priority
          />
        </button>
        {/* Render remaining navigation items */}
        {navItems.slice(2).map(({ name, section }) => (
          <button
            key={name}
            onClick={() => scrollToSection(section)}
            className={`px-3 py-2 text-base transition-all duration-300 whitespace-nowrap cursor-pointer ${
              activeSection === section ? 'text-purple-500' : 'text-white/75 hover:text-white/80'
            }`}
          >
            {name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;