import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return ( 
    <footer className="bg-zinc-900 text-gray-300 py-6 border-t-2 border-zinc-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between">
          {/* Footer Text / Copy Right */}
          <div className="text-center mb-4 md:mb-0">
            <p className="text-red-400">
              &copy; 2024 Delong's Portfolio. All rights reserved.
            </p>
          </div>
          {/* Footer Icons */}
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/delong-yang-a7a673296/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/DelongY" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;