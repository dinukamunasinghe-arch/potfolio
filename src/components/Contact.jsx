import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        to_name: 'Dinuka',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'dinukanisheda9@gmail.com'
      };

      await emailjs.send(
        'service_70jbj4e', // You'll need to replace this
        'template_z0vgt2w', // Replace with your actual template ID from EmailJS
        templateParams,
        '9ZEyqBJqnTL07Ogdg' // You'll need to replace this
      );

      setIsSent(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
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
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>dinukanisheda9@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>+94 78 300 6972</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>No 275 Kachchagoda Payagala, Kalutara,Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="https://github.com/DDN53" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  GitHub
                </a>
                <a href="http://linkedin.com/in/dinuka-nisheda-a821a9293/" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  LinkedIn
                </a>
                {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  Twitter
                </a> */}
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
                
                {isSent && (
                  <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : darkMode 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
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