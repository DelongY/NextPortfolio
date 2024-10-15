'use client'
import React, { useCallback, useMemo } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import profile2 from '../assets/homePageProfilePicture.jpg';

// Types
type SocialLink = {
  href: string;
  icon: React.ComponentType;
  label: string;
};

// Components
const SocialIcon: React.FC<{ link: SocialLink }> = React.memo(({ link }) => (
  <a 
    href={link.href}
    className="text-3xl hover:text-gray-300 transition duration-300"
    aria-label={link.label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <link.icon />
  </a>
));
SocialIcon.displayName = 'SocialIcon';

const BackgroundImage: React.FC = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <Image 
      src={profile2} 
      alt="Profile Background" 
      layout="fill"
      objectFit="cover"
      quality={100}
      className="blur-md"
      priority
    />
  </div>
);

const HeroContent: React.FC<{ handleScrollToAbout: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = React.memo(({ handleScrollToAbout }) => (
  <div className="max-w-xl">
    <h1 className="text-4xl md:text-6xl font-bold mb-2 xs:mb-4 sm:mb-3 md:mb-6 lg:mb-7 xl:mb-8">Delong Yang</h1>
    <p className="text-lg md:text-xl mb-4 xs:mb-2 sm:mb-3 md:mb-6 lg:mb-8 xl:mb-10">Front-end Developer</p>
    <a 
      className="inline-block bg-violet-500 text-zinc-100 px-6 py-3 rounded-md hover:bg-violet-600 transition duration-300" 
      href='#about' 
      onClick={handleScrollToAbout}
    >
      &lt;About Me/&gt;
    </a>
  </div>
));
HeroContent.displayName = 'HeroContent';

const SocialLinks: React.FC<{ links: SocialLink[] }> = React.memo(({ links }) => (
  <div className="hidden md:flex flex-col space-y-6 pr-6">
    {links.map((link) => (
      <SocialIcon key={link.href} link={link} />
    ))}
  </div>
));
SocialLinks.displayName = 'SocialLinks';

const ScrollDownButton: React.FC<{ handleScrollToAbout: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = React.memo(({ handleScrollToAbout }) => (
  <a 
    href="#about" 
    onClick={handleScrollToAbout} 
    className="absolute z-10 bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
    aria-label="Scroll to About section"
  >
    <FaChevronDown className="text-3xl" />
  </a>
));
ScrollDownButton.displayName = 'ScrollDownButton';

// Main component
export default function Home() {
  const handleScrollToAbout = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  const socialLinks = useMemo<SocialLink[]>(() => [
    { href: "https://www.linkedin.com/in/delong-yang-a7a673296/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://github.com/DelongY", icon: FaGithub, label: "GitHub" },
    { href: "https://mail.google.com/mail/?view=cm&fs=1&to=delongyang369@gmail.com", icon: FaEnvelope, label: "Email" },
  ], []);

  return (
    <section id='home' className="relative bg-gradient-to-br from-zinc-850 via-zinc-900 to-zinc-950 text-white min-h-screen flex flex-col">
      <BackgroundImage />
      <header className="absolute top-0 left-0 right-0 z-20 p-4">
        {/* Add navigation menu here if needed */}
      </header>
      <main className="relative z-10 flex-grow flex items-center">
        <div className="container mx-auto px-4">
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