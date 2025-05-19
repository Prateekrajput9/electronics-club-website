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

      <div className="min-h-screen bg-gradient-to-b from-[#0a1828] via-[#10172a] to-[#1a2235] text-white p-8">
        <div className="min-h-[250px] mt-5 flex flex-col justify-center items-center text-center w-full">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 glow-text text-center w-full"
          >
            About <span className="text-cyan-400">Us</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-8"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 max-w-6xl mx-auto"
        >
          <div className="w-full md:w-2/5 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-md opacity-75"></div>
            <img
              src={image1}
              alt="About Us"
              className="w-full rounded-lg shadow-lg relative z-10 border border-cyan-800/30"
            />
          </div>

          <div className="w-full md:w-3/5 text-center md:text-left">
     
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Students studying electrical engineering are represented by the
              Electrical Engineering Students Association (EESA). Our primary
              goal is to establish connections between the Electrical
              Department's instructors, students, and alumni. Overall, EESA
              serves as a link between them.
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              It is an organization among the students, for the students. We hold treks, cultural events,
              traditional nights, talk shows, seminars, and other activities to
              accomplish our goal. We also provide blogs on everything our
              students need, including internships, placements, and more
              education.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[
                { number: "50+", label: "Active Members" },
                { number: "20+", label: "Annual Events" },
                { number: "8+", label: "Projects" }
              ].map((stat, index) => (
                <div key={index} className="bg-black/20 backdrop-blur-md p-4 rounded-xl border border-cyan-800/30 hover:border-cyan-500/50 transition-all">
                  <div className="text-3xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
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
