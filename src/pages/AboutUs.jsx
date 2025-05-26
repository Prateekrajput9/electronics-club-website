import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import image1 from "../assets/background.jpg";
import image2 from "../assets/logo2.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "50+", label: "Active Members", icon: "👥" },
    { number: "10+", label: "Workshops", icon: "🔧" },
    { number: "5+", label: "On-Going Projects", icon: "⚡" },
   
  ];

  const features = [
    {
      icon: "🔬",
      title: "Research & Development",
      description: "Cutting-edge research in electronics and embedded systems"
    },
    {
      icon: "🤖",
      title: "Robotics & Automation",
      description: "Building intelligent systems and autonomous robots"
    },
    {
      icon: "💡",
      title: "Innovation Lab",
      description: "State-of-the-art facilities for prototyping and testing"
    },
    {
      icon: "🎓",
      title: "Learning Community",
      description: "Collaborative environment for knowledge sharing"
    }
  ];

  return (
    <>
      <Navbar />

      {/* Enhanced Styles */}
      <style>
        {`
          .inverted-triangle-mask {
            clip-path: polygon(0 0, 100% 0, 50% 100%);
            -webkit-clip-path: polygon(0 0, 100% 0, 50% 100%);
            background: linear-gradient(135deg, #0891b2, #0e7490);
          }
          
          .floating-animation {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .glow-effect {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
          }
          
          .text-glow {
            text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
          }
          
          .gradient-border {
            background: linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6);
            padding: 2px;
            border-radius: 1rem;
          }
          
          .gradient-border-inner {
            background: rgba(255, 255, 255, 0.1);
            border-radius: calc(1rem - 2px);
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#0a1828] via-[#10172a] to-[#1a2235] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Background Image - Made More Visible */}
        <img
          src={image1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
        />
        {/* Reduced overlay opacity to show more background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1828]/60 via-[#10172a]/50 to-[#1a2235]/70 z-10" />

        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20 mt-24 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl text-glow mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-3xl text-cyan-100 font-medium max-w-3xl mx-auto leading-relaxed"
          >
          
          </motion.p>
        </motion.div>

        {/* Enhanced Club Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative z-20 mt-16 w-full max-w-2xl px-4"
        >
          <div className="floating-animation">
            <div className="backdrop-blur-xl bg-black/20 border border-cyan-400/30 rounded-2xl p-8 md:p-12 flex flex-col items-center shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300">
              {/* Enhanced Logo */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-6"
              >
                <img
                  src={image2}
                  alt="Electronics Club Logo"
                  className="inverted-triangle-mask w-48 h-48 object-cover shadow-2xl glow-effect"
                />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4 text-center">
                Electronics Club, IIT Indore
              </h2>
              <p className="text-white/90 text-center text-lg leading-relaxed max-w-lg">
                We are a passionate community of innovators from IIT Indore, exploring and building the future with electronics. From microcontrollers to robotics, we thrive on curiosity, innovation, and hands-on learning.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative z-20 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 mt-16 px-4 max-w-4xl w-full"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-4 md:p-6 text-center border border-cyan-400/30 shadow-xl hover:shadow-cyan-400/30 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">{stat.number}</div>
              <div className="text-sm md:text-base text-cyan-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="relative z-20 w-full max-w-4xl mt-16 mb-20 px-4"
        >
          <div className="bg-gradient-to-br from-black/30 to-black/20 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-cyan-400/20 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-8 text-center">
              Our Journey & Vision 🚀
            </h3>
            
            <div className="space-y-6 text-white/90">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="text-lg leading-relaxed"
              >
                Our club thrives on solving real-world problems using electronic systems and cutting-edge technologies. We dive deep into circuits, microcontrollers, embedded systems, and HDL-based digital design, bringing our ideas to life through FPGAs and microcontroller platforms.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="text-lg leading-relaxed"
              >
                From simulating intricate analog and digital circuits to prototyping on breadboards and designing PCBs, we're always experimenting and pushing boundaries. Sometimes our efforts spark brilliant working prototypes; other times, they result in smoke and valuable learning experiences! 💨
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.8 }}
                className="text-lg leading-relaxed"
              >
                Whether we succeed or encounter setbacks, every attempt fuels our passion for learning. Our results may be digital, but our creativity and innovation are truly analog — <em>continuous, flowing, and always evolving</em>.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.4, duration: 0.8 }}
                className="text-center mt-8 p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-400/30"
              >
                <p className="text-xl font-semibold text-cyan-200">
                  At the Electronics Club of IIT Indore, we're always ready to power things up! ⚡🔧
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
