'use client'
import React, { useState, useEffect } from 'react';

const NavLink = ({ href, label }) => (
  <li className="border-b md:border-none border-zinc-600">
    <a href={href} className="block px-4 py-2 md:p-0 text-zinc-300 hover:text-white transition duration-300 ease-in-out">
      {label}
    </a>
  </li>
);

const ProgressBar = ({ progress }) => (
  <div className="h-0.5 bg-zinc-600">
    <div
      className="h-0.5 bg-gradient-to-r from-green-300 to-blue-600 transition-all duration-300 ease-out"
      style={{ width: `${progress}%` }}
    />
  </div>
);

function NavBar() {
  // State to track the scroll progress percentage
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to update the scroll progress
  const updateScrollProgress = () => {
    const scrollTop = window.scrollY; // Current vertical scroll position
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Total scrollable height
    const scrolled = (scrollTop / docHeight) * 100; // Calculate percentage scrolled
    setScrollProgress(scrolled);
  };

  // Effect to add and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900 text-gray-300 shadow-md z-50 border-b border-zinc-600">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-lg font-bold text-white">
          <a href="/" className="hover:text-gray-200 transition duration-300 ease-in-out">🍊Delong's</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            {/* SVG for Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex md:space-x-8 absolute md:relative bg-zinc-900 md:bg-transparent w-full md:w-auto left-0 md:left-auto top-16 md:top-auto ${isOpen ? 'flex' : 'hidden'}`}>
          <NavLink href="/pages/home" label="Home" />
          <NavLink href="/pages/portfolio" label="Portfolio" />
          <NavLink href="/pages/about" label="About" />
          <NavLink href="/pages/contact" label="Contact" />
        </ul>
      </div>
      <ProgressBar progress={scrollProgress} />
    </nav>
  );
}

export default NavBar;