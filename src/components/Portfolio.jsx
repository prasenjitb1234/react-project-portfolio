import React from 'react';
import reactLogo from '../assets/logos/react.svg';
import nodeLogo from '../assets/logos/node1.png';
import mySQLLogo from '../assets/logos/mysql.png';
import springLogo from '../assets/logos/spring-logo.png';
import javaLogo from '../assets/logos/java.png';
import pythonLogo from '../assets/logos/python.png';
import gitLogo from '../assets/logos/github.png';
import bootstrapLogo  from '../assets/logos/bootstrap.png';
import htmlLogo  from '../assets/logos/js.png';
import mongodbLogo from '../assets/logos/mongo.png'


const Portfolio = () => {
  const tools = [
    
    { name: 'Java', logo: javaLogo },
    { name: 'SpringBoot', logo: springLogo },
    { name: 'React', logo: reactLogo },
    { name: 'MySQL', logo: mySQLLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'Github', logo: gitLogo },
    { name: 'Bootstrap', logo: bootstrapLogo },
    { name: 'HTML CSS JavaScript', logo: htmlLogo },
    { name: 'mongoDB', logo: mongodbLogo},
    
  ];

  return (
    <div id="portfolio" className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Tools and Technologies</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            My Skillset
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6 flex flex-col items-center justify-center">
                <img src={tool.logo} alt={tool.name} className="h-16 w-16 mb-4" />
                <h3 className="text-lg font-medium text-white">{tool.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;