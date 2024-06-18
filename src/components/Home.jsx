

import React from 'react';
import heroImage from '../assets/images/prasenjit2.jpg';
import Resume from '../assets/resume/prasenjit_bhosale_resume.pdf';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Home = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'resume-prasen.pdf';
    link.click();
  };

  return (
    <div id="home" className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Prasenjit</span>
                <span className="block text-indigo-600 xl:inline"> Bhosale</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Full-Stack Developer
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={handleDownloadResume}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                  >
                    Download Resume
                  </button>
                </div>
              </div>
              <div className="mt-8 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-lg flex space-x-6 transition-transform transform hover:scale-105">
                  <a href="https://github.com/prasenjitb1234" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-500 transition-colors duration-300">
                    <FaGithub size={30} />
                  </a>
                  <a href="https://www.linkedin.com/in/prasenjit-bhosale-678462212/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-500 transition-colors duration-300">
                    <FaLinkedin size={30} />
                  </a>
                  <a href="https://leetcode.com/u/prasenjitb_111/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-500 transition-colors duration-300">
                    <SiLeetcode size={30} />
                  </a>
                  <a href="https://www.instagram.com/prasenjitbhosale/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-500 transition-colors duration-300">
                    <FaInstagram size={30} />
                  </a>
                  <a href="https://x.com/PrasenjitB111" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-500 transition-colors duration-300">
                    <FaTwitter size={30} />
                  </a>
                  <a href="https://www.hackerrank.com/profile/prasenjitbhosal2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-500 transition-colors duration-300">
                    <FaHackerrank size={30} />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex justify-center items-center lg:p-10">
        <img
          className="h-64 w-64 rounded-full object-cover shadow-xl transform transition-transform hover:scale-110"
          src={heroImage}
          alt="Hero Image"
        />
      </div> */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex justify-center items-center lg:p-10">
        <img
          className="h-80 w-64 rounded-full object-cover shadow-xl transform transition-transform hover:scale-110"
          src={heroImage}
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Home;
