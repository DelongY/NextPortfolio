import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/Logo.png';

const SocialLink = ({ href, icon: Icon }: { href: string; icon: typeof FaLinkedin }) => (
  <Link 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-3 rounded-lg flex items-center border border-zinc-300/30 transition-all duration-300 hover:bg-zinc-800"
  >
    <Icon size={16} />
  </Link>
);

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl bg-zinc-900/0 text-gray-300 border-t border-zinc-600">
      {/* Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
        {/* Icons Section */}
        <div className='flex items-center md:flex-row justify-center gap-8'>
          {/* Logo Section */}
          <div className="flex items-center py-6">
            <div className="h-16 w-16 flex">
              <Image 
                src={logo} 
                alt="logo" 
                quality={100}
                className=""
                priority
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <SocialLink href="https://github.com/DelongY" icon={FaGithub} />
            <SocialLink href="https://www.linkedin.com/in/delong-yang-a7a673296/" icon={FaLinkedin} />
            <SocialLink 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=delongyang369@gmail.com" 
              icon={FaEnvelope} 
            />
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center">
          <p className="text-center text-muted-foreground">
            © 2024 All Rights Reserved - <Link href={"https://delongxportfolio.vercel.app/#home"}>Delong Yang.</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;