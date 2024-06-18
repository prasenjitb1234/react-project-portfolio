import React from 'react';
import { FaEnvelopeOpen, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-white">
          &copy; {new Date().getFullYear()} Prasenjit Bhosale. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/prasenjitb1234" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/prasenjit-bhosale-678462212/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/prasenjitbhosale/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;