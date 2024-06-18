


import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaGraduationCap, FaLaptopCode, FaUserFriends, FaBriefcase } from 'react-icons/fa';

const About = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const cards = [
    {
      title: 'Education and Training',
      icon: <FaGraduationCap />,
      content: [
        'B. Tech: Computer Science & Engineering, Karmaveer Bhaurao Patil College of Engineering, Satara (2020-2024), CGPA: 7.43',
        'HSC: Science, Yashvantrao Chavan Institute of Science Satara (Feb 2020), Percentage: 64.00%',
        'SSC, English School Vaduth (March 2018), Percentage: 80.40%',
      ],
    },
    {
      title: 'Skills and Expertise',
      icon: <FaLaptopCode />,
      content: [
        'Programming Languages: Java, Python, C, JavaScript, PHP, Solidity',
        'Frameworks & Libraries: SpringBoot, Hibernate, JDBC, Express, Node.js',
        'Web Development: HTML, CSS, JavaScript, Bootstrap, PHP, React.js',
        'Databases: MySQL, MongoDB',
        'Operating System: Windows, Ubuntu',
        'Other Technologies: Git, Eclipse, DSA',
      ],
    },
    {
      title: 'Soft Skills',
      icon: <FaUserFriends />,
      content: [
        'Ability to work Independently & as a part of a Team',
        'Decision Making',
        'Flexible & Adaptable',
        'Self-Motivated',
        'Problem Solving',
      ],
    },
    {
      title: 'Interests',
      icon: <FaBriefcase />,
      content: ['Travelling', 'Photography', 'Drawing'],
    },
  ];

  return (
    <div id="about" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
          <animated.div style={fadeIn}>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
              Passionate Full-Stack Developer with Expertise in Java and Web Technologies
            </p>
            {/* <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              Brief description about yourself and your background.
            </p> */}
          </animated.div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <animated.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={fadeIn}
            >
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="bg-indigo-500 text-white rounded-full p-3 mr-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{card.title}</h3>
                </div>
                <div className="mt-4 text-gray-500">
                  <ul className="list-disc pl-6">
                    {card.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </animated.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Certificates</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <animated.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={fadeIn}
            >
              <div className="px-6 py-8">
                <h4 className="text-lg font-medium text-gray-900">100 Days of Code: A Complete Python Pro Bootcamp</h4>
                <p className="mt-2 text-sm text-gray-600">Udemy (07/2023)</p>
              </div>
            </animated.div>
            <animated.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={fadeIn}
            >
              <div className="px-6 py-8">
                <h4 className="text-lg font-medium text-gray-900">Introduction To Artificial Intelligence (AI)</h4>
                <p className="mt-2 text-sm text-gray-600">Coursera (03/2023)</p>
              </div>
            </animated.div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Achievements</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <animated.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={fadeIn}
            >
              <div className="px-6 py-8">
                <p className="text-gray-600">Participated in <b>'Empire-2024'</b> National level Project Exhibition & Competition</p>
              </div>
            </animated.div>
            <animated.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={fadeIn}
            >
              <div className="px-6 py-8">
                <p className="text-gray-600">Participated in <b>'Smart India Hackathon'2023.</b></p>
              </div>
            </animated.div>
            <animated.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={fadeIn}
            >
              <div className="px-6 py-8">
                <p className="text-gray-600">Participated in <b>'CodeRally BITCAMP 2022 Hackathon'.</b> Organized by KBPCOE, Satara.</p>
              </div>
            </animated.div>
            <animated.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={fadeIn}
            >
              <div className="px-6 py-8">
                <p className="text-gray-600">Participated in <b>'Sambhav 2k23'.</b> Organized by CSESA, Satara.</p>
              </div>
            </animated.div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Languages</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <animated.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={fadeIn}
            >
              <div className="px-6 py-8">
                <h4 className="text-lg font-medium text-gray-900">English</h4>
                <p className="mt-2 text-sm text-gray-600">Professional Working Proficiency</p>
              </div>
            </animated.div>
            <animated.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={fadeIn}
            >
              <div className="px-6 py-8">
                <h4 className="text-lg font-medium text-gray-900">Hindi</h4>
                <p className="mt-2 text-sm text-gray-600">Full Professional Proficiency</p>
              </div>
            </animated.div>
            <animated.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={fadeIn}
            >
              <div className="px-6 py-8">
                <h4 className="text-lg font-medium text-gray-900">Marathi</h4>
                <p className="mt-2 text-sm text-gray-600">Native Language</p>
              </div>
            </animated.div>
            <animated.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={fadeIn}
            >
              <div className="px-6 py-8">
                <h4 className="text-lg font-medium text-gray-900">Japanese</h4>
                <p className="mt-2 text-sm text-gray-600">Beginner Level</p>
              </div>
            </animated.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
