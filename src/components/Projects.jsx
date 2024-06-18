import React from 'react';
import image1 from '../assets/images/image1.jpg';

import image3 from '../assets/projects/bc.png';
import image2 from '../assets/projects/ebill.png'


const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Tour Booking Website using MERN',
      description: 'To streamline tour reservations through the development of a feature-rich platform with React, Node.js, MongoDB, and Express.',
      techniques: 'React, Node.js, MongoDB, Express, Secure Payment Gateway Integration',
      image: image1,
      githubLink: 'https://github.com/prasenjitb1234/bharat-sanchar',
    },
    {
      id: 2,
      name: 'Electricity Billing System using SpringBoot',
      description: 'To Create an efficient and secure electricity billing system.',
      techniques: 'Java, SpringBoot, MySQL, Bootstrap, JPA, ThymeLeaf',
      image: image2,
      githubLink: 'https://github.com/prasenjitb1234/Electricity_Billing_System_Symbiosis_Project',
    },
    {
      id: 3,
      name: 'Blockchain Based Certificate Generation & Validation System',
      description: 'To Implement a blockchain-based system for generating certificates securely and efficiently.',
      techniques: 'Solidity, MetaMask, Ganache, Flask, Truffle',
      image: image3,
      githubLink: 'https://github.com/your-username/blockchain-certificate-system',
    },
  ];

  return (
    <div id="projects" className="bg-gray-100 py-16 cursor-pointer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Projects</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Work
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative">
                <img className="w-full h-64 object-cover" src={project.image} alt={project.name} />
                <div className="absolute inset-0 bg-indigo-500 bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white font-semibold">
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-gray-600">Techniques: {project.techniques}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;



// *********************************************
