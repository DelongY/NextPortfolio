import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/Logo.png';

interface SocialLinkProps {
  href: string;
  icon: typeof FaLinkedin;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 sm:p-3 rounded-lg flex items-center border border-zinc-300/30 transition-all duration-300 
    hover:bg-zinc-800 hover:scale-105 hover:border-zinc-300/50"
    aria-label={label}
  >
    <Icon size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-300 hover:text-white" />
  </Link>
);

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/DelongY",
      icon: FaGithub,
      label: "GitHub Profile"
    },
    {
      href: "https://www.linkedin.com/in/delong-yang-a7a673296/",
      icon: FaLinkedin,
      label: "LinkedIn Profile"
    },
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=delongyang369@gmail.com",
      icon: FaEnvelope,
      label: "Email Contact"
    }
  ];

  return (
    <footer className="w-full bg-zinc-900/0 text-gray-300 border-t border-zinc-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="py-6 sm:py-8">
          {/* Main content container */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8 items-center space-y-6 lg:space-y-0">
            {/* Logo and Social Links - Always on same line */}
            <div className="flex flex-row items-center gap-8">
              {/* Logo */}
              <div className="flex items-center">
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16">
                  <Image
                    src={logo}
                    alt="Delong Yang Logo"
                    quality={100}
                    priority
                    className="object-contain"
                    fill
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <SocialLink
                    key={link.href}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                  />
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-base text-muted-foreground whitespace-nowrap">
                © {new Date().getFullYear()} All Rights Reserved -{' '}
                <Link href="https://delongxportfolio.vercel.app/#home" className="hover:text-white transition-colors duration-300 hover:underline">
                  Delong Yang
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;