'use client'
import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import profile2 from '@/public/assets/homePageProfilePicture.jpg';
import Link from 'next/link';

type SocialLink = {
  href: string;
  icon: React.ComponentType;
  label: string;
};

const SocialIcon = ({ link }: { link: SocialLink }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link 
      href={link.href}
      className="relative flex items-center gap-4 transition-all duration-300"
      aria-label={link.label}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`relative z-10 text-3xl transition-all duration-300 ${
        isHovered ? 'text-violet-400 scale-110 rotate-12' : 'text-white'
      }`}>
        <link.icon />
      </span>
      <span className={`absolute right-full mr-4 text-sm text-violet-400 whitespace-nowrap transition-all duration-300 ${
        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
      }`}>
        {link.label}
      </span>
    </Link>
  );
};

const BackgroundImage = () => (
  <div className="absolute inset-0 overflow-hidden">
    <Image 
      src={profile2} 
      alt="Profile Background" 
      layout="fill"
      objectFit="cover"
      quality={100}
      className="z-10 blur-sm filter brightness-50"
      priority
    />
  </div>
);

const HeroContent = ({ handleScrollToAbout }: { handleScrollToAbout: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => (
  <div className="max-w-2xl relative">
    <div className="space-y-9">
      <div className="relative inline-block">
        <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl bg-gradient-to-r text-white bg-clip-text text-transparent pb-2">
          Delong Yang
        </h1>
        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-violet-300/60 to-transparent transform origin-left scale-x-0 animate-scaleX" />
      </div>
      
      <div className="h-8">
        <p className="text-xl md:text-2xl lg:text-3xl text-white/75 font-light">
          Front-end Developer
        </p>
      </div>

      <div className="flex items-center gap-6">
      <Link 
        className="relative px-8 py-3 rounded-lg bg-purple-600 text-white 
        transition-all duration-300 hover:scale-105
        font-semibold tracking-wider"
        href="#about" 
        onClick={handleScrollToAbout}
      >
        About Me
      </Link>
      <div className="w-20 h-0.5 bg-gradient-to-r from-purple-300/60 to-transparent transform origin-left animate-scaleX" />
      </div>
    </div>
  </div>
);

const SocialLinks = ({ links }: { links: SocialLink[] }) => (
  <div className="hidden md:flex flex-col space-y-8 pr-12">
    {links.map((link) => (
      <SocialIcon key={link.href} link={link} />
    ))}
  </div>
);

const ScrollDownButton = ({ handleScrollToAbout }: { handleScrollToAbout: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link 
      href="#about" 
      onClick={handleScrollToAbout} 
      className={`absolute z-10 bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0 animate-bounce' : 'opacity-0 translate-y-0'
      }`}
      aria-label="Scroll to About section"
    >
      <div className="relative group">
        <FaChevronDown className="text-4xl transition-transform duration-300 group-hover:translate-y-1" />
        <div className="absolute -inset-4 bg-violet-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
      </div>
    </Link>
  );
};

export default function Home() {
  const handleScrollToAbout = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  const socialLinks: SocialLink[] = React.useMemo(() => [
    { href: "https://www.linkedin.com/in/delong-yang-a7a673296/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://github.com/DelongY", icon: FaGithub, label: "GitHub" },
    { href: "https://mail.google.com/mail/?view=cm&fs=1&to=delongyang369@gmail.com", icon: FaEnvelope, label: "Email" },
  ], []);

  return (
    <section id="home" className="relative bg-black text-white min-h-screen flex flex-col">
      <BackgroundImage />
      <header className="flex top-0 left-0 right-0 z-20 p-3" />
      <main className="relative z-20 flex-grow flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-start md:pl-20">
            <HeroContent handleScrollToAbout={handleScrollToAbout} />
          </div>
        </div>
        <SocialLinks links={socialLinks} />
      </main>
      <ScrollDownButton handleScrollToAbout={handleScrollToAbout} />
    </section>
  );
}