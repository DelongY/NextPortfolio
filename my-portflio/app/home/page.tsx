import React from 'react';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <NavBar />
      <h1 className="text-center text-5xl font-bold text-red-500 mb-8">
        Home Page
      </h1>
    </div>
  );
}

export default Home;