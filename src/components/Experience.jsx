import React from 'react';

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "Kernel Encode",
      period: "2026 - Present",
      description: "Led frontend team to rebuild company's main product using React and TypeScript. Improved performance by 40%.",
      tech: ["React", "TypeScript", "Mysql", "AWS","Next.js","Tailwind CSS","Figma","Git"]
    },
    {
      role: "Full Stack Developer",
      company: "National Waterboard",
      period: "2014 - 2025",
      description: "Developed and maintained multiple web applications using Node.js and React. Implemented CI/CD pipelines.",
      tech: ["Node.js", "React", "SSMS", "Docker"]
    },
    {
      role: "Intern Software Developer",
      company: "National Waterboard",
      period: "2022-2023",
      description: "Built responsive websites and web applications for various clients. Collaborated with designers and PMs.",
      tech: ["JavaScript", "HTML/CSS", "PHP", "WordPress","SQL Server Management Studio","React"]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Work <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Experience</span>
        </h2>
        <p className={`text-center mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          My professional journey and the positions I've held over the years.
        </p>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-10">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className={`absolute left-6 top-12 w-0.5 h-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
              )}
              
              <div className="flex">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                
                {/* Content */}
                <div className={`ml-8 p-6 rounded-xl flex-1 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <div className="flex flex-col md:flex-row md:items-center mb-3">
                    <span className={`font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{exp.company}</span>
                    <span className={`md:ml-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{exp.period}</span>
                  </div>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;