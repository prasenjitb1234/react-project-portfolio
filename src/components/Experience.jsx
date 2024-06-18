// import React from 'react';

// const Experience = () => {
//   return (
//     <div id="experience" className="bg-gray-800 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:text-center">
//           <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Experience</h2>
//           <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
//             Internship
//           </p>
//         </div>
//         <div className="mt-10">
//           <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
//             <div className="px-6 py-8">
//               <div className="flex items-center">
//                 <div className="bg-indigo-500 text-white rounded-full p-3 mr-4">
//                   <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-medium text-white">Java Full Stack Intern</h3>
//               </div>
//               <div className="mt-4 text-gray-300">
//                 <p>Symbiosis (01/01/2024 - 1/5/2024)</p>
//                 <ul className="list-disc pl-6 mt-2">
//                   <li>Engaged in a comprehensive Full Stack Java internship program as part of Capgemini's CSR initiative.</li>
//                   <li>Acquired practical experience in both front-end and back-end Java technologies & contributed to development of innovative solutions</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;


// ******************************************

import React from 'react';

const Experience = () => {
  return (
    <div id="experience" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-500 font-semibold tracking-wide uppercase">Experience</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Internship
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <div className="px-6 py-8">
              <div className="flex items-center">
                <div className="bg-indigo-500 text-white rounded-full p-3 mr-4">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">Java Full Stack Intern</h3>
              </div>
              <div className="mt-4 text-gray-400">
                <p className="italic">Symbiosis (01/01/2024 - 01/05/2024)</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Engaged in a comprehensive Full Stack Java internship program as part of Capgemini's CSR initiative.</li>
                  <li>Acquired practical experience in both front-end and back-end Java technologies & contributed to the development of innovative solutions.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
