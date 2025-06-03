import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por contactarnos, ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <section 
      id="contactform"
      className="py-16 bg-gray-100 contactform-background" 
      aria-label="Contact Us section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Let's Get in Touch
        </h2>

        <form 
          onSubmit={handleSubmit} 
          className="max-w-3xl mx-auto flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-md" 
        >
          
          <div>
            <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name" 
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-500" 
            />
          </div>

          
          <div>
            <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com" 
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-500"
            />
          </div>

          
          <div>
            <label htmlFor="message" className="block text-gray-700 text-lg font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..." 
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-gray-500"
            ></textarea>
          </div>

          
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition w-full" 
          >
            Get it Touch
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;