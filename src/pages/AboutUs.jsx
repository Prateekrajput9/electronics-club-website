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

  return (
    <>
      <Navbar />

      {/* Inverted triangle mask style */}
      <style>
        {`
          .inverted-triangle-mask {
            clip-path: polygon(0 0, 100% 0, 50% 100%);
            -webkit-clip-path: polygon(0 0, 100% 0, 50% 100%);
            background: #000;
          }
        `}
      </style>

      {/* Hero Section with background image and overlay */}
      <div className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[#0a1828] via-[#10172a] to-[#1a2235] overflow-hidden">
        <img
          src={image1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1828]/80 via-[#10172a]/80 to-[#1a2235]/90 z-10" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 mt-20 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            About <span className="text-cyan-400">Us</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/80 font-medium max-w-2xl mx-auto">
            Powering Innovation, One Circuit at a Time
          </p>
        </motion.div>

        {/* Floating Club Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-20 mt-12 w-full max-w-xl"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-500/20 p-6 md:p-10 flex flex-col items-center">
            {/* Inverted triangle logo with mask */}
            <img
              src={image2}
              alt="Electronics Club Logo"
              className="inverted-triangle-mask w-40 h-40 object-cover border-4  shadow-lg mb-4 bg-black"
              style={{
                boxShadow: "0 8px 32px 0 rgba(0, 255, 255, 0.25)",
                background: "#000",
              }}
            />
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-2">
              Electronics Club, IIT Indore
            </h2>
            <p className="text-white/90 text-center max-w-lg">
              We are a passionate group of students from IIT Indore, exploring and building the future with electronics. From microcontrollers to robotics, we thrive on curiosity, innovation, and hands-on learning.
            </p>
          </div>
        </motion.div>

        {/* Stats Badges */}
       

        {/* Glassmorphic Info Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative z-20 w-full max-w-3xl mt-12 mb-20 bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-10 border border-cyan-400/20 shadow-xl text-white"
        >
          <p className="mb-5 text-base md:text-lg leading-relaxed">
            Our club thrives on solving real-world problems using electronic systems and technologies. We enjoy diving deep into circuits, microcontrollers, embedded systems, and HDL-based digital design, deploying our ideas through FPGAs and microcontroller platforms. From simulating and testing intricate analog and digital circuits to bringing them to life on breadboards and PCBs, we’re always eager to experiment and tinker.
          </p>
          <p className="mb-5 text-base md:text-lg leading-relaxed">
            Sometimes our efforts spark working prototypes; other times, they result in smoke and burnt components. But whether we succeed or fail, every attempt fuels our learning. Our results may be digital, but our passion and creativity are truly analog — continuous, flowing, and always pushing boundaries.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            At the Electronics Club of IIT Indore, we’re always ready to power things up!
          </p>
        </motion.div>
         {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative z-20 flex flex-wrap justify-center gap-6 mt-8"
        >
          {[
            { number: "50+", label: "Active Members" },
            { number: "10+", label: "Workshops" },
            { number: "5+", label: "On-Going Projects" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="px-7 py-4 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 rounded-xl shadow-lg text-center border-2 border-cyan-400/40"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-white">{stat.number}</div>
              <div className="text-base md:text-lg text-white/90">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </>
  );
};

export default AboutUs;
