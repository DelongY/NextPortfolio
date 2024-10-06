import Head from 'next/head';
import Image from 'next/image';
import profile2 from '../../assets/profile2.jpg'

const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center relative">
      <Image src={profile2} alt="Profile Picture" className="absolute w-full h-full object-cover filter blur-md" />
      <h1 className="text-6xl font-bold text-center text-white drop-shadow-lg z-10 tracking-widest uppercase">
        Welcome
      </h1>
      <div className="w-96 h-0.5 bg-zinc-300 opacity-30 my-3"></div>
      <h2 className="text-3xl font-mono text-center text-white drop-shadow-lg z-10 tracking-widest">
        to My Portfolio
      </h2>
    </div>
  );
}

export default Home;