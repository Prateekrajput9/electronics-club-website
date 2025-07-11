import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import ParticlesComponent from "../components/background";
import AboutUs from "./AboutUs";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import image2 from "../assets/logo2.jpg";


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

      {/* Custom Styles for Triangular Logo */}
      <style>
        {`
          .inverted-triangle-mask {
            clip-path: polygon(0 0, 100% 0, 50% 100%);
            -webkit-clip-path: polygon(0 0, 100% 0, 50% 100%);
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-2 z-20 mt-4 mb-4 md:mt-0 md:mb-0">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Welcome badge */}
          <div className="mb-3">
            <span className="bg-cyan-500/20 text-cyan-300 py-1.5 px-3 rounded-full text-sm md:text-base font-medium backdrop-blur-sm border border-cyan-500/30">
              Welcome to Electronics Club
            </span>
          </div>

          {/* Triangular Logo */}
          <div className="mb-3 flex justify-center">
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: {
                  rotate: { duration: 0.6, ease: "easeInOut" },
                  scale: { duration: 0.3 }
                }
              }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer w-24 h-24 md:w-32 md:h-32"
            >
              <div className="absolute inset-0 bg-cyan-400/20 blur-xl scale-110 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={image2}
                alt="Electronics Club Logo"
                className="inverted-triangle-mask w-full h-full object-cover shadow-2xl relative z-10"
                style={{
                  filter: "drop-shadow(0 10px 30px rgba(6, 182, 212, 0.3))"
                }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400/30"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  WebkitClipPath: "polygon(0 0, 100% 0, 50% 100%)"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                whileHover={{
                  borderColor: "rgba(6, 182, 212, 0.8)",
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          </div>

          {/* Hindi Text */}
          <p className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2">
            संविद्युत् वज्रसमं बलं, यः सृजति नव्यं जगत्।
          </p>

          {/* Main heading */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Electronics Club <br />
            <span className="text-white text-xl md:text-3xl lg:text-4xl font-bold">
              IIT <span style={{ color: "#00ffff" }}>Indore</span>
            </span>
          </h1>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-3">
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2 px-5 rounded-full transition-all hover:scale-105 shadow-lg shadow-cyan-500/20 text-sm md:text-base"
              onClick={() => navigate("/contact-us")}
            >
              Contact US
            </button>
            <button
              className="bg-transparent border-2 border-white/30 hover:border-white text-white font-bold py-2 px-5 rounded-full transition-all hover:scale-105 backdrop-blur-sm text-sm md:text-base"
              onClick={() => navigate("/projects")}
            >
              Explore Projects
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex flex-row gap-3 sm:grid sm:grid-cols-3 sm:gap-3 max-w-xl w-full mt-4">
            {[
              { number: "20+", label: "Projects" },
              { number: "50+", label: "Members" },
              { number: "10+", label: "Workshops" },
            ].map((stat, index) => (
              <div
                key={index}
                className="aspect-square flex-1 bg-black/20 backdrop-blur-md p-3 md:p-3 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all text-center flex flex-col items-center justify-center"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-cyan-400">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
 {/* Social Icons */}
      <div className="absolute top-1/3 right-2 md:right-4 flex flex-col gap-3 text-white z-50 bg-black/25 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-white/10">
        <a
          href="https://www.linkedin.com/company/elecclub-iit-indore/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 hover:scale-150 transition-transform" />
        </a>
        
        <a
          href="https://www.instagram.com/electronics_club_iiti/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          <FaInstagram className="w-5 h-5 md:w-6 md:h-6 hover:scale-150 transition-transform" />
        </a>
      
      </div>
      {/* Featured Technologies */}
      <div className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-md py-2 md:py-3 z-30">
        <div className="container mx-auto px-2 md:px-3">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-sm md:text-base text-white/70">
            <span className="font-medium text-white text-sm md:text-base">
              Technologies:
            </span>
            <span className="hover:text-cyan-400 transition-colors">Arduino</span>
            <span className="hover:text-cyan-400 transition-colors">Raspberry Pi</span>
            <span className="hover:text-cyan-400 transition-colors">PCB Design</span>
            <span className="hover:text-cyan-400 transition-colors">IoT</span>
            <span className="hover:text-cyan-400 transition-colors">
              Digital Design with HDL and FPGA
            </span>
            <span className="hover:text-cyan-400 transition-colors">
              Analog Design with SPICE
            </span>
            <span className="hover:text-cyan-400 transition-colors">
              Embedded Systems
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
