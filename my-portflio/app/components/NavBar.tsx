import React from 'react';

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-zinc-900 text-gray-300 shadow-md z-50 border-b border-zinc-600">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-lg font-bold text-white">
          <a href="/" className="hover:text-gray-200 transition duration-300 ease-in-out">🍊Delong</a>
        </div>
        <ul className="flex justify-end">
          <li className="mr-6">
            <a href="/pages/home" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Home</a>
          </li>
          <li className="mr-6">
            <a href="/pages/portfolio" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Portfolio</a>
          </li>
          <li className="mr-6">
            <a href="/pages/about" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">About me</a>
          </li>
          <li>
            <a href="/pages/contact" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;