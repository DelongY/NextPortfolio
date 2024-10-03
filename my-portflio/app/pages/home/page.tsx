import React from 'react';
import profile from './profile.jpg';

const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-center text-5xl font-bold text-red-500 mb-8">
        Home
      </h1>
      <img src={profile}/>
    </div>
  );
}

export default Home;