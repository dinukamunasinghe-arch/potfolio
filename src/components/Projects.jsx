import React from 'react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Fintara Website",
      description: "",
      tech: ["php", "Laravel", "Mysql", "Telwindcss"],
      github: "https://github.com",
      live: "https://fintara.finance/",
      image: "/images/fintara.png"
    },
    {
      title: "Kernel Encode web site",
      description: "",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      github: "https://github.com",
      live: "https://demo.com",
      image: "✅"
    },
    {
      title: "National Waterboard Erp Groundwater Monitoring System",
      description: "A comprehensive ERP system for monitoring groundwater levels and quality across Nigeria.",
      tech: ["Next js", "Node js", "SSMS"],
      github: "https://github.com",
      live: "https://erp.waterboard.lk/erp-sandbox/waterproduction",
         image: "/images/erp.png"
    }
  ];

  return (
    <section id="projects" className={`py-16 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Featured <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Projects</span>
        </h2>
        <p className={`text-center mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Here are some of my recent projects that showcase my skills and experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
              <div className={`h-48 flex items-center justify-center text-6xl ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                {project.image.startsWith('/') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  project.image
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className={`flex-1 py-2 text-center rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.live}
                    className={`flex-1 py-2 text-center rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;