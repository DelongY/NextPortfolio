'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import profile from '@/public/assets/profile.jpg'
import {
  FaCheckCircle, FaCode, FaLaptopCode, FaGamepad,
  FaMusic, FaFilm, FaGithub, FaLinkedin,
  FaEnvelope, FaDumbbell
} from 'react-icons/fa'

const About = () => {
  const [isImageHovered, setIsImageHovered] = useState(false)

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

  const hobbies = [
    { icon: FaGamepad, text: 'Gaming', color: 'from-blue-400 to-purple-400', iconColor: 'text-purple-400' },
    { icon: FaMusic, text: 'Music', color: 'from-green-400 to-teal-400', iconColor: 'text-teal-400' },
    { icon: FaFilm, text: 'Movies', color: 'from-red-400 to-orange-400', iconColor: 'text-red-400' },
    { icon: FaDumbbell, text: 'Fitness', color: 'from-yellow-400 to-orange-400', iconColor: 'text-yellow-400' }
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center text-white px-3 xs:px-4 sm:px-6 md:px-3">
      <div className="container mx-auto max-w-7xl relative flex flex-col lg:flex-row items-center justify-center bg-white/5 backdrop-blur-sm overflow-hidden rounded-2xl 
        sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-9 transition-shadow duration-500">
        {/* Profile Image Section */}
        <div className="relative z-10 w-full lg:w-2/5 flex justify-center items-center mb-6 xs:mb-8 lg:mb-0">
          <div 
            className="relative rounded-full overflow-hidden w-44 xs:w-52 sm:w-60 md:w-64 lg:w-72 xl:w-80 h-44 xs:h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-75 animate-spin" />
            <div className="absolute inset-1 rounded-full overflow-hidden bg-black">
              <Image
                src={profile}
                alt="Delong Yang"
                layout="fill"
                objectFit="cover"
                priority
                className={`transition-all duration-700 ${isImageHovered ? 'scale-110 blur-sm' : 'scale-100 blur-0'}`}
              />
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/70 transition-opacity duration-300 ${isImageHovered ? 'opacity-100' : 'opacity-0'}`} />
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isImageHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex justify-center space-x-2">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/20 p-1.5 transition-all duration-300 hover:bg-white/30 hover:scale-105"
                      aria-label={label}
                    >
                      <Icon className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 w-full lg:w-3/5 lg:pl-8 xl:pl-12">
          <div className="relative text-center lg:text-left">
            <h2 className="relative inline-block text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 xs:mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Hi, I'm Delong
              </span>
            </h2>
          </div>

          <div className="flex justify-center lg:justify-start mb-6">
            <div className="relative flex items-center">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-500/20 to-green-400/20 blur-sm animate-pulse transition-all duration-300 hover:from-green-500/30 hover:to-green-400/30" />
              <div className="relative flex items-center rounded-full bg-black/20 backdrop-blur-sm px-3 xs:px-4 py-1.5 xs:py-2 hover:bg-black/30">
                <FaCheckCircle className="mr-1.5 xs:mr-2 text-green-400 transition-transform duration-300 hover:scale-110" />
                <span className="text-sm xs:text-base sm:text-lg font-medium text-green-400 transition-colors duration-300 hover:text-green-300">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 xs:space-y-6 mb-6 xs:mb-8">
            <div className="relative rounded-2xl bg-white/10 p-2 transition-all duration-300 hover:bg-white/15">
              <p className="relative p-3 xs:p-3 text-sm xs:text-base sm:text-lg text-justify lg:text-left leading-relaxed">
                <FaCode className="inline-block mr-1.5 xs:mr-2 text-blue-400 transition-transform duration-300 hover:scale-110" />
                A passionate front-end developer with a flair for creating captivating digital experiences. 
                I transform ideas into interactive realities, blending creativity with technical expertise.
              </p>
            </div>

            <div className="relative rounded-2xl bg-white/10 p-2 transition-all duration-300 hover:bg-white/15">
              <p className="relative p-3 xs:p-3 text-sm xs:text-base sm:text-lg text-justify lg:text-left leading-relaxed">
                <FaLaptopCode className="inline-block mr-1.5 xs:mr-2 text-blue-400 transition-transform duration-300 hover:scale-110" />
                As a problem solver with a keen eye for detail, I thrive on challenges and continuously push the boundaries of what's possible in web development.
              </p>
            </div>

            <div className="rounded-2xl p-4 bg-white/5">
              <h3 className="text-xl font-semibold text-center lg:text-left mb-4">
                When I'm not coding, you'll find me:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-3">
                {hobbies.map(({ icon: Icon, text, color, iconColor }) => (
                  <div
                    key={text}
                    className="group relative rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm p-3 transition-all duration-300 hover:bg-black/30"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-20`} />
                    <div className="relative flex flex-col items-center justify-center space-y-1.5">
                      <Icon className={`w-6 h-6 ${iconColor} transition-transform duration-300 group-hover:scale-110`} />
                      <h4 className="text-xs xs:text-sm font-medium transition-colors duration-300 group-hover:text-white">
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

