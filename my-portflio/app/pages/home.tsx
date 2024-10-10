import Head from 'next/head'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image';
import profile2 from '../assets/homePageProfilePicture.jpg'   

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <main className="flex-grow flex items-center">
        {/* Background Image */}
        <Image src={profile2} alt="Profile Background" layout="fill"
          className="absolute w-full h-full object-cover filter blur-md"/>
        <div className="z-10 container mx-auto px-4">
          <div className="flex justify-between items-start pl-20">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Delong Yang</h1>
              <p className="text-lg md:text-xl mb-9">Front-end Developer</p>
              <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-300">
                About Me →
              </button>
            </div>
          </div>
        </div>
        <div className="z-10 hidden md:flex flex-col space-y-6 pr-6">
          <a href="https://www.linkedin.com/in/delong-yang-a7a673296/" className="text-3xl hover:text-gray-300 transition duration-300"><FaLinkedin /></a>
          <a href="https://github.com/DelongY" className="text-3xl hover:text-gray-300 transition duration-300"><FaGithub /></a>
          <a href="delongyang369@gmail.com" className="text-3xl hover:text-gray-300 transition duration-300"><FaEnvelope /></a>
        </div>
      </main>
    </div>
  )
}