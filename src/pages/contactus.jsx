import React from 'react';
import { Mail, Phone, Instagram, User } from 'lucide-react'; // Make sure lucide-react is installed
import Navbar from '../components/Navbar';
const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      <Navbar/>
      {/* Reach Us Directly - OUTSIDE FORM BOX */}
      <div className="w-full max-w-4xl mb-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center text-cyan-400 mb-6 mt-10">Reach Us Directly</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base bg-gray-900 p-6 rounded-2xl shadow-lg">
          <div className="flex items-center space-x-3">
            <User className="text-cyan-400" size={20} />
            <span>President: <span className="text-gray-300">Advay kunte</span></span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-cyan-400" size={20} />
            <span>Email: <span className="text-gray-300"> elecclubiiti.ac.in</span></span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-cyan-400" size={20} />
            <span>Mobile: <span className="text-gray-300"> +91 9730757888</span></span>
          </div>
          <div className="flex items-center space-x-3">
            <Instagram className="text-cyan-400" size={20} />
            <span>Instagram: <span className="text-gray-300">@electronics_club_iiti</span></span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">Mail Us</h2>
        <p className="text-center text-gray-400 mb-8">
          We’d love to hear from you! Send us a message.
        </p>
        <form
          action="https://formspree.io/f/mqaqrjdq"
          method="POST"
          className="space-y-6"
          target='blank'
        >
          <div>
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
