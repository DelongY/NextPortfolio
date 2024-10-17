import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return ( 
    <footer className="bg-zinc-900 text-gray-300 py-6 border-t-2 border-zinc-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between">
          {/* Footer Text / Copy Right */}
          <div className="text-center mb-4 md:mb-0">
            <p className="text-violet-400">
            © 2024 Delong Yang. All right reserved.
            </p>
          </div>
          {/* Footer Icons */}
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/delong-yang-a7a673296/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com/DelongY" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub size={24} />
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=delongyang369@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaEnvelope size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;