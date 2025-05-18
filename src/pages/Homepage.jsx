import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Navbar from "../components/Navbar";
import ParticlesComponent from "../components/background";
import AboutUs from "/Users/aniket/electronics-club-website/src/pages/AboutUs.jsx"; 

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <Navbar />
      <ParticlesComponent />
      {/* Video Background */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="src/assets/hibg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Whitish + Blur Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-white/20 backdrop-blur-sm z-10"></div> */}

      {/* Text Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-4 z-20">
        <div>
          <p className="text-white text-xl md:text-2xl font-medium mb-2">
            Spreading Innovation Through Electronics
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Electronics Club <br />
            <h1 className="text-white text-3xl font-bold">
              IIT <span style={{ color: "#00ffff" }}>Indore</span>
            </h1>
          </h1>
        </div>
      </div>

      {/* Social Icons - Right Side */}
      <div className="absolute top-1/3 right-4 flex flex-col gap-4 text-white z-50 bg-black/25 backdrop-blur-md p-6">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 hover:scale-150 transition-transform" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-6 h-6 hover:scale-150 transition-transform" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6 hover:scale-150 transition-transform" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-6 h-6 hover:scale-150 transition-transform" />
        </a>
      </div>
    </div>
    
  );
};

export default HomePage;
