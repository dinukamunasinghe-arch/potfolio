import React, { useState } from 'react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={`py-16 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Touch</span>
        </h2>
        <p className={`text-center mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Have a project in mind or want to discuss opportunities? Feel free to contact me!
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>alex@devportfolio.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>+1 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  Twitter
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="mb-6">
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your Email"
                  />
                </div>
                
                <div className="mb-6">
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg font-medium ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;