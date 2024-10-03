import React from 'react';

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 p-4 z-50 flex items-center">
      <div className="flex-shrink-0 text-white text-xl font-bold mr-4">
        <a href="/">🍊Delong</a>
      </div>
      <ul className="flex justify-around flex-grow">
        <li className="text-white">
          <a href="/pages/home">Home</a>
        </li>
        <li className="text-white">
          <a href="/pages/portfolio">Portfolio</a>
        </li>
        <li className="text-white">
          <a href="/pages/about">About me</a>
        </li>
        <li className="text-white">
          <a href="/pages//contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;