import React, { useState } from "react";
import Navbar from "../components/Navbar";

// Dummy images (replace with your own or fetch from API)
const images = [
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    title: "Tech Event 2024",
    desc: "Exciting moments from our annual technology exhibition.",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    title: "Electronics Workshop",
    desc: "Hands-on learning with circuit design and programming.",
  },
  {
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
    title: "Project Showcase",
    desc: "Presenting innovative student robotics projects.",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    title: "Team Collaboration",
    desc: "Brainstorming sessions and problem-solving in action.",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    title: "Award Ceremony",
    desc: "Celebrating our outstanding achievers and innovators.",
  },
  {
    src: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop",
    title: "Guest Lecture",
    desc: "Industry experts sharing cutting-edge insights.",
  },
  {
    src: "https://images.unsplash.com/photo-1581092446461-faf19c7b2e1f?w=800&h=600&fit=crop",
    title: "Coding Marathon",
    desc: "48-hour hackathon pushing creative boundaries.",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c5?w=800&h=600&fit=crop",
    title: "Lab Session",
    desc: "Advanced microcontroller programming workshop.",
  },
  {
    src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
    title: "Innovation Fair",
    desc: "Showcasing breakthrough student inventions.",
  },
];

export default function Gallery() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 relative overflow-hidden">
      {/* Dark animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-900/20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-slate-800/30 rounded-full filter blur-3xl animate-pulse" />
      
      <Navbar />
      
      <div className="relative z-10 max-w-7xl mx-auto pt-16 px-4 pb-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our journey through innovation, collaboration, and technological excellence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:shadow-blue-500/20"
              onClick={() => setModalImg(img)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {img.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {img.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setModalImg(null)}
        >
          <div
            className="bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50 relative max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border border-gray-600"
              onClick={() => setModalImg(null)}
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="lg:w-2/3">
                <img
                  src={modalImg.src}
                  alt={modalImg.title}
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>
              
              {/* Details */}
              <div className="lg:w-1/3 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {modalImg.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {modalImg.desc}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-gray-500 text-sm">
                    Click outside to close
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
