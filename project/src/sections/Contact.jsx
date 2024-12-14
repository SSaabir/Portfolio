import React from 'react';
import contact from '../images/contact.png';

export const Contact = () => {
  return (
    <section
      className="h-screen flex flex-col lg:flex-row items-center justify-between py-12 px-8 lg:px-32 bg-gradient-to-b from-gray-800 to-gray-700"
      id="contact"
    >
      
      <div className="flex-1 text-left max-w-lg">
        <h2 className="text-5xl font-bold text-teal-400">Contact Me</h2>
        <p className="mt-4 text-lg text-gray-300">
          I’d love to hear from you! Whether it’s a project, job opportunity, or
          just a chat, feel free to reach out to me.
        </p>
        <div className="mt-6 space-y-4">
          <div className="text-lg text-gray-200">
            <span className="font-semibold text-teal-400">Email:</span> 
            <span className="ml-2">siraajsaabir@email.com</span>
          </div>
          <div className="text-lg text-gray-200">
            <span className="font-semibold text-teal-400">Phone:</span> 
            <span className="ml-2">+94 77 371 0347</span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
        <img
          src={contact}
          alt="Contact"
          className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
        />
      </div>
    </section>
  );
};
