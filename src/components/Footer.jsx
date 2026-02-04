import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500"></div>
              <span className="text-xl font-bold text-white">DevPortfolio</span>
            </div>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-300'}`}>Building the future, one line of code at a time.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-300 hover:text-white">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;