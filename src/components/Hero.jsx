import React from 'react';

const Hero = ({ darkMode }) => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className={`text-lg mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Dinuka <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Munasinghe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Full Stack <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Software Engineer</span>
            </h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-lg`}>
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
              Let's bring your ideas to life!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className={`px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className={`px-6 py-3 rounded-lg font-medium border ${darkMode ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`}
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-500' : 'border-blue-400'}`}>
                <div className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  <img 
                    src="/images/70012505.jpg" 
                    alt="Dinuka Munasinghe" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={`absolute -bottom-2 -right-2 w-24 h-24 rounded-full ${darkMode ? 'bg-blue-900/30' : 'bg-blue-200/50'} backdrop-blur-sm`}></div>
              <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-full ${darkMode ? 'bg-purple-900/30' : 'bg-purple-200/50'} backdrop-blur-sm`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;