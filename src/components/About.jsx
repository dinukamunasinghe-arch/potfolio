import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`py-16 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">
              About <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Me</span>
            </h2>
            <div className={`w-64 h-64 rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
              <div className="w-full h-full flex items-center justify-center">
               <img 
                    src="/images/aboutme.png" 
                    alt="Dinuka Munasinghe" 
                    className="w-full h-full object-cover"
                  />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a passionate software engineer with 2+ years of experience building web applications and scalable systems. 
              My expertise includes frontend and backend development and DevOps practices.
            </p>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I enjoy turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, 
              I contribute to open-source projects, write technical blogs, and mentor junior developers.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-white'}`}>
                <h4 className="font-bold text-lg mb-1">2+ Years</h4>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Experience</p>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-white'}`}>
                <h4 className="font-bold text-lg mb-1">50+ Projects</h4>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Completed</p>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-white'}`}>
                <h4 className="font-bold text-lg mb-1">100%</h4>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;