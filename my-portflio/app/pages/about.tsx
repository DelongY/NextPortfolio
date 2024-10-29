'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import profile from '@/public/assets/profile.jpg'
// Import icons for various UI elements
import {
  FaCheckCircle, FaCode, FaLaptopCode, FaGamepad,
  FaMusic, FaFilm, FaGithub, FaLinkedin,
  FaEnvelope, FaDumbbell
} from 'react-icons/fa'

const About = () => {
  // State to handle profile image hover effects
  const [isImageHovered, setIsImageHovered] = useState(false)

  // Configuration for social media links
  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/delong-yang-a7a673296/'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/DelongY'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:delongyang369@gmail.com'
    }
  ]

  // Configuration for hobby section with icons and gradient colors
  const hobbies = [
    { icon: FaGamepad, text: 'Gaming', color: 'from-blue-400 to-purple-400' },
    { icon: FaMusic, text: 'Music', color: 'from-green-400 to-teal-400' },
    { icon: FaFilm, text: 'Movies', color: 'from-red-400 to-orange-400' },
    { icon: FaDumbbell, text: 'Fitness', color: 'from-yellow-400 to-orange-400' }
  ]

  return (
    // Main section with responsive padding and full viewport height
    <section id="about" className="min-h-screen flex items-center justify-center text-white
      py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16 px-3 xs:px-4 sm:px-6 md:px-8">
      {/* Container with glass-morphism effect */}
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center 
        justify-center bg-transparent backdrop-blur-sm rounded-xl sm:rounded-2xl
        p-4 xs:p-5 sm:p-6 md:p-8 lg:p-9 transition-shadow duration-500 relative overflow-hidden">
        
        {/* Profile Image Section */}
        <div className="w-full lg:w-2/5 mb-6 xs:mb-8 lg:mb-0 flex justify-center items-center relative z-10">
          {/* Circular profile image container with hover effects */}
          <div className="relative rounded-full overflow-hidden w-44 xs:w-52 sm:w-60 md:w-64 
            lg:w-72 xl:w-80 h-44 xs:h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}>
            {/* Animated gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-blue-400 
              rounded-full opacity-75 animate-spin" />
            {/* Image container with overlay effects */}
            <div className="absolute inset-1 rounded-full overflow-hidden bg-black">
              {/* Profile image with responsive sizing */}
              <Image 
                src={profile}
                alt="Delong Yang"
                layout="fill"
                objectFit="cover"
                priority
                className={`transition-all duration-700 
                  ${isImageHovered ? 'scale-110 blur-sm' : 'scale-100 blur-0'}`}
              />
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/70 
                transition-opacity duration-300 ${isImageHovered ? 'opacity-100' : 'opacity-0'}`} />
              {/* Social links overlay on hover */}
              <div className={`absolute inset-0 flex items-center justify-center 
                transition-opacity duration-300 ${isImageHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex justify-center space-x-2">
                  {/* Map through social links to create icons */}
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 p-1.5 rounded-full hover:bg-white/30 
                        transition-all duration-300 hover:scale-105"
                      aria-label={label}>
                      <Icon className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-3/5 lg:pl-8 xl:pl-12 relative z-10">
          {/* Name Header */}
          <div className="relative text-center lg:text-left">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 xs:mb-6 
              relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Hi, I'm Delong
              </span>
            </h2>
          </div>

          {/* Status Badge - Shows availability */}
          <div className="flex justify-center lg:justify-start mb-6">
            <div className="relative flex items-center">
              {/* Animated glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-green-400/20 
                rounded-full blur-sm transition-all duration-300 hover:from-green-500/30 
                hover:to-green-400/30 animate-pulse" />
              {/* Status text with icon */}
              <div className="relative flex items-center px-3 xs:px-4 py-1.5 xs:py-2 rounded-full 
                bg-black/20 backdrop-blur-sm hover:bg-black/30">
                <FaCheckCircle className="mr-1.5 xs:mr-2 text-green-400 hover:scale-110 
                  transition-transform duration-300" />
                <span className="text-sm xs:text-base sm:text-lg font-medium text-green-400 
                  hover:text-green-300 transition-colors duration-300">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-4 xs:space-y-6 mb-6 xs:mb-8">
            {/* First Bio Paragraph */}
            <div className="relative bg-white/10 rounded-2xl p-2 hover:bg-white/15 
              transition-all duration-300">
              <p className="relative leading-relaxed p-3 xs:p-3 text-sm xs:text-base sm:text-lg 
                text-justify lg:text-left">
                <FaCode className="inline-block mr-1.5 xs:mr-2 text-blue-400 hover:scale-110 
                  transition-transform duration-300" />
                A passionate front-end developer with a flair for creating captivating digital 
                experiences. I transform ideas into interactive realities, blending creativity 
                with technical expertise.
              </p>
            </div>

            {/* Second Bio Paragraph */}
            <div className="relative bg-white/10 rounded-2xl p-2 hover:bg-white/15 
              transition-all duration-300">
              <p className="relative leading-relaxed p-3 xs:p-3 text-sm xs:text-base sm:text-lg 
                text-justify lg:text-left">
                <FaLaptopCode className="inline-block mr-1.5 xs:mr-2 text-blue-400 hover:scale-110 
                  transition-transform duration-300" />
                As a problem solver with a keen eye for detail, I thrive on challenges and 
                continuously push the boundaries of what's possible in web development.
              </p>
            </div>

            {/* Hobbies Grid Section */}
            <div className="rounded-2xl p-4 bg-white/5">
              <h3 className="text-xl font-semibold text-center lg:text-left mb-4">
                When I'm not coding, you'll find me:
              </h3>
              {/* Responsive grid layout for hobbies */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-3">
                {/* Map through hobbies to create cards */}
                {hobbies.map(({ icon: Icon, text, color }) => (
                  <div key={text}
                    className="group relative overflow-hidden rounded-xl bg-black/20 
                      backdrop-blur-sm hover:bg-black/30 transition-all duration-300 p-3">
                    {/* Gradient background with hover effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 
                      group-hover:opacity-20 transition-opacity duration-300`} />
                    {/* Hobby content with icon and text */}
                    <div className="relative flex flex-col items-center justify-center space-y-1.5">
                      <Icon className="w-6 h-6 text-white/90 group-hover:scale-110 
                        transition-transform duration-300" />
                      <h4 className="font-medium text-xs xs:text-sm group-hover:text-white 
                        transition-colors duration-300">
                        {text}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About