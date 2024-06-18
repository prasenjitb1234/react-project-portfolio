import React from 'react';

const Contact = () => {
  return (
    <div
      id="contact"
      className="py-16"
      style={{
        '--s': '60px',
        '--c1': '#180a22',
        '--c2': '#5b42f3',
        '--_g':
          'radial-gradient(25% 25% at 25% 25%, var(--c1) 99%, rgba(0, 0, 0, 0) 101%)',
        background:
          'var(--_g) var(--s) var(--s) / calc(2 * var(--s)) calc(2 * var(--s)), var(--_g) 0 0 / calc(2 * var(--s)) calc(2 * var(--s)), radial-gradient(50% 50%, var(--c2) 98%, rgba(0, 0, 0, 0)) 0 0 / var(--s) var(--s), repeating-conic-gradient(var(--c2) 0 50%, var(--c1) 0 100%) calc(0.5 * var(--s)) 0 / calc(2 * var(--s)) var(--s)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Contact Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Get in Touch
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-lg w-full">
            <div className="px-8 py-6">
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transition-all duration-300"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;