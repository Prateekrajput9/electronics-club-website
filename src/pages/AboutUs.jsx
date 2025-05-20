import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import image1 from "../assets/background.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />

      {/* Embedded CSS directly inside JSX */}
      <style>{`
        .glow-text {
          position: relative;
          color: #0e3742;
          text-transform: uppercase;
          width: 100%;
          text-align: center; /* Ensure text is centered */
          animation: animate 5s linear infinite;
          -webkit-box-reflect: below 8px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
        }

        @keyframes animate {
          0% {
            color: #0e3742;
            box-shadow: none;
          }
          18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100% {
            color: #fff;
            text-shadow:
              0 0 10px #03bcf4,
              0 0 20px #03bcf4,
              0 0 40px #03bcf4,
              0 0 80px #03bcf4,
              0 0 160px #03bcf4;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-[#0a1828] via-[#10172a] to-[#1a2235] text-white p-4 sm:p-6 md:p-8">
        <div className="min-h-[200px] sm:min-h-[250px] mt-5 flex flex-col justify-center items-center text-center w-full">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 glow-text text-center w-full"
          >
            About <span className="text-cyan-400">Us</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6 sm:mb-8"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12 max-w-6xl mx-auto px-2 sm:px-4"
        >
          <div className="w-full sm:w-4/5 lg:w-2/5 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-md opacity-75"></div>
            <img
              src={image1}
              alt="About Us"
              className="w-full rounded-lg shadow-lg relative z-10 border border-cyan-800/30"
            />
          </div>

          <div className="w-full lg:w-3/5 text-center lg:text-left mt-6 lg:mt-0">
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-4 sm:mb-6 px-2 sm:px-0">
             The Electronics club of IIT Indore is motley of electronics fanatics. It caters the need of providing a platform which can expose individuals to the ever fascinating field of electronics. Our aim is to create an atmosphere conducive for this subject and assist students in bridging the gap between theory and practical. 
            </p>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
             Keeping this in mind, we conduct lecture series, workshops, seminars and competitions. Along with theory sessions, we provide students hands on experience and chance to see the concepts working in reality. This motivates the students to think about innovations and create new wonders on their own. We take up projects which are intriguing and form the latest trends in the fields of electronics. We aim at preparing students to participate in various competitions as well.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {[
                { number: "50+", label: "Active Members" },
                { number: "20+", label: "Annual Events" },
                { number: "8+", label: "Projects" }
              ].map((stat, index) => (
                <div key={index} className="bg-black/20 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-cyan-800/30 hover:border-cyan-500/50 transition-all">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-sm sm:text-base text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
