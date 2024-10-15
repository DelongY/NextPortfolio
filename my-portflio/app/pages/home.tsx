import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'; // Import the Chevron Down icon
import Image from 'next/image';
import profile2 from '../assets/homePageProfilePicture.jpg'
import Link from 'next/link';

export default function Home() {
  return (
    <div id='home' className="relative bg-gradient-to-br from-zinc-850 via-zinc-900 to-zinc-950 text-white min-h-screen flex flex-col">
      {/* Background Image Wrapper with Blurring */}
      <div className="absolute inset-0 z-0 overflow-visible">
        <div className="absolute inset-0">
          {/* Container that holds the blurred image */}
          <Image 
            src={profile2} 
            alt="Profile Background" 
            layout="fill"
            objectFit="cover"
            quality={100}
            className="blur-md"
          />
        </div>
      </div>
      <main className="relative z-10 flex-grow flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start pl-20">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 xs:mb-4 sm:mb-3 md:mb-6 lg:mb-7 xl:mb-15">Delong Yang</h1>
              <p className="text-lg md:text-xl mb-2 xs:mb-2 sm:mb-3 md:mb-6 lg:mb-9 xl:mb-15">Front-end Developer</p>
              <a className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-300" href='#about'>
                About Me →
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col space-y-6 pr-6">
          <a href="https://www.linkedin.com/in/delong-yang-a7a673296/" className="text-3xl hover:text-gray-300 transition duration-300"><FaLinkedin /></a>
          <a href="https://github.com/DelongY" className="text-3xl hover:text-gray-300 transition duration-300"><FaGithub /></a>
          <a href="mailto:delongyang369@gmail.com" className="text-3xl hover:text-gray-300 transition duration-300"><FaEnvelope /></a>
        </div>
      </main>
            {/* Bouncing Arrow Button */}
      <Link href="#about" className="absolute z-10 bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <FaChevronDown className="text-3xl" />
      </Link>
    </div>
  )
}
