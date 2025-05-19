import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import ParticlesComponent from "../components/background";
import AboutUs from "./AboutUs";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <Navbar />
      <ParticlesComponent />
      
      {/* Hero Section */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-4 z-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <span className="bg-cyan-500/20 text-cyan-300 py-2 px-4 rounded-full text-sm font-medium backdrop-blur-sm border border-cyan-500/30">
              Welcome to Electronics Club
            </span>
          </div>
          
          <p className="text-white text-xl md:text-2xl font-medium mb-2">
            Spreading Innovation Through Electronics
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-8">
            Electronics Club <br />
            <span className="text-white text-3xl font-bold">
              IIT <span style={{ color: "#00ffff" }}>Indore</span>
            </span>
          </h1>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
              onClick={() => navigate("/contact us")}
            >
              Contact US
            </button>
            <button 
              className="bg-transparent border-2 border-white/30 hover:border-white text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 backdrop-blur-sm"
              onClick={() => navigate("/projects")}
            >
              Explore Projects
            </button>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
            {[
              { number: "50+", label: "Projects" },
              { number: "200+", label: "Members" },
              { number: "15+", label: "Workshops" },
              { number: "8+", label: "Awards" }
            ].map((stat, index) => (
              <div key={index} className="bg-black/20 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all">
                <div className="text-3xl font-bold text-cyan-400">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

 
      {/* Social Icons - Right Side */}
      <div className="absolute top-1/3 right-4 flex flex-col gap-4 text-white z-50 bg-black/25 backdrop-blur-md p-6 rounded-2xl border border-white/10">
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
          <FaLinkedin className="w-6 h-6 hover:scale-150 transition-transform" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
          <FaTwitter className="w-6 h-6 hover:scale-150 transition-transform" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
          <FaInstagram className="w-6 h-6 hover:scale-150 transition-transform" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
          <FaFacebook className="w-6 h-6 hover:scale-150 transition-transform" />
        </a>
      </div>
      
      {/* Featured Technologies - Bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-md py-4 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/70">
            <span className="font-medium text-white">Technologies we work with:</span>
            <span className="hover:text-cyan-400 transition-colors">Arduino</span>
            <span className="hover:text-cyan-400 transition-colors">Raspberry Pi</span>
            <span className="hover:text-cyan-400 transition-colors">PCB Design</span>
            <span className="hover:text-cyan-400 transition-colors">IoT</span>
            <span className="hover:text-cyan-400 transition-colors">Robotics</span>
            <span className="hover:text-cyan-400 transition-colors">Embedded Systems</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
