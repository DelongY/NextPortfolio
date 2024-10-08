import Head from 'next/head';
import Image from 'next/image';
import profile2 from '../assets/homePageProfilePicture.jpg';

const Home = () => {
  return (
    <div id='home' className="flex flex-col items-center justify-center min-h-screen relative bg-gray-900">
      {/* Background Image */}
      <Image src={profile2} alt="Profile Background" layout="fill"
        className="absolute w-full h-full object-cover filter blur-md"
      />
      {/* Intro Content */}
      <div className="z-10 text-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg tracking-widest uppercase">
          Welcome
        </h1>
        <div className="w-96 h-0.5 bg-zinc-300 opacity-30 my-3 mx-auto"></div>
        <h2 className="text-3xl font-mono text-white drop-shadow-lg tracking-widest">
          to My Portfolio
        </h2>
      </div>
    </div>
  );
};

export default Home;