import React from "react";
import Navbar from "../components/Navbar"; 
import image1 from "../assets/background.jpg";
const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* Embedded CSS directly inside JSX */}
      <style>{`
        h2 {
          position: relative;
          color: #0e3742;
          text-transform: uppercase;
          width: 100%;
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

      <div className="min-h-screen bg-gradient-to-b from-[#0a1828] via-[#10172a] to-[#1a2235] p-8">
        <h1 className="text-3xl font-extrabold text-center text-cyan-300 mb-6 mt-20 drop-shadow-lg">
      
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/3">
            <img
              src={image1}
              alt="About Us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="title">
              {/* This h2 will have the animated CSS effect */}
              <h2 className="text-4xl md:text-6xl font-semibold text-cyan-900 mb-4">
            About Us
              </h2>
            </div>
            <p className="text-lg text-white leading-relaxed pt-10">
              Students studying electrical engineering are represented by the Electrical Engineering Students Association (EESA). Our primary goal is to establish connections between the Electrical Department's instructors, students, and alumni. Overall, EESA serves as a link between them. It is an organization among the students, for the students. We hold treks, cultural events, traditional nights, talk shows, seminars, and other activities to accomplish our goal. We also provide blogs on everything our students need, including internships, placements, and more education.
            </p>
          </div>
        </div>

        {/* <div className="mt-12 text-center">
          <a
            href="/join-us"
            className="inline-block mt-4 bg-cyan-400 text-[#0a1828] font-semibold px-6 py-3 rounded hover:bg-cyan-300 transition"
          >
            Join Us Today
          </a>
        </div> */}
      </div>
    </>
  );
};

export default AboutUs;
