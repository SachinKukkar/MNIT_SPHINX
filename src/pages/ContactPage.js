import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    // Reset form data after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 via-indigo-200 to-pink-300 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-purple-700 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-4">
            We’d love to hear from you! Whether you have a question, feedback, or suggestion, feel free to reach out.
          </p>
          <p className="text-lg text-gray-500">
            Please fill in the form below, and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-purple-700 mb-6">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="p-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="youremail@example.com"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg text-gray-700 mb-2">Your Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="p-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Write your message here..."
                rows="5"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">You can also reach us via:www.DocTrail.com</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <button className="text-3xl text-blue-600 hover:text-blue-700 transition duration-300">
                <i className="fab fa-facebook"></i>
              </button>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <button className="text-3xl text-blue-400 hover:text-blue-500 transition duration-300">
                <i className="fab fa-twitter"></i>
              </button>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <button className="text-3xl text-pink-600 hover:text-pink-700 transition duration-300">
                <i className="fab fa-instagram"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
