import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-9 mb-3">
            <a href="/pages/home" className="hover:text-white">Home</a>
            <a href="/pages/portfolio" className="hover:text-white" >Portfolio</a>
            <a href="/pages/about" className="hover:text-white">About me</a>
            <a href="/pages/contact" className="hover:text-white">Contact</a>
          </div>
          <div className="text-center">
            <p style={{ color: 'var(--color-accent)' }}>
              &copy; 2024 Delong Yang. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;