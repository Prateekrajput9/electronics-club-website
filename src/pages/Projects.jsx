import { useState, useRef, useEffect } from "react";
import { ExternalLink, Code, Cpu, Zap, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Add this import
import Navbar from "../components/Navbar";

export default function ProjectsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projects = [
    {
      id: "1",
      title: "Smart Home Automation System",
      description: "A comprehensive IoT-based system for controlling home appliances using Arduino and ESP8266.",
      image: "/placeholder.svg?height=200&width=320",
      category: "iot",
      members: ["Rahul Sharma", "Priya Patel"],
      date: "March 2023",
    },
    {
      id: "2",
      title: "Gesture Controlled Robot",
      description:
        "A robot that can be controlled using hand gestures captured by a camera and processed using OpenCV.",
      image:
        "https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9ib3R8ZW58MHx8MHx8fDA%3D",
      category: "robotics",
      members: ["Amit Kumar", "Sneha Gupta"],
      date: "November 2022",
    },
    {
      id: "3",
      title: "Solar Powered Weather Station",
      description:
        "A self-sustaining weather monitoring system powered by solar energy with data logging capabilities.",
      image:
        "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
      category: "renewable",
      members: ["Vikram Singh", "Neha Joshi"],
      date: "January 2023",
    },
    {
      id: "4",
      title: "Digital Signal Processing Module",
      description: "A DSP module for real-time audio processing using FPGA implementation.",
      image:
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
      category: "signal",
      members: ["Arjun Reddy", "Meera Desai"],
      date: "April 2023",
    },
    {
      id: "5",
      title: "Autonomous Drone Navigation",
      description:
        "A drone that can navigate through obstacles using computer vision and machine learning algorithms.",
      image:
        "https://images.unsplash.com/photo-1605493624455-a56d6d312f6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvYm90aWNzfGVufDB8fDB8fHww",
      category: "robotics",
      members: ["Karan Malhotra", "Ananya Sharma"],
      date: "February 2023",
    },
    {
      id: "6",
      title: "PCB Design Workshop Materials",
      description:
        "Educational resources and designs created for the PCB design workshop conducted for first-year students.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
      category: "education",
      members: ["Dr. Rajesh Kumar", "Sanjay Verma"],
      date: "December 2022",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-[100px]"
            style={{
              backgroundColor: "rgb(0,255,255)",
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-[120px]"
            style={{
              backgroundColor: "rgb(0,255,255)",
              transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-12 relative z-10">
        <header className="relative mb-20">
          <div
            className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(0,255,255,0.1)" }}
          ></div>
          <div
            className="absolute -top-5 right-0 w-60 h-60 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(0,255,255,0.1)" }}
          ></div>

          <div className="relative z-10 flex flex-col items-center">
            <div
              className="mt-8 mb-8 inline-flex items-center justify-center p-2 rounded-full border"
              style={{
                backgroundColor: "rgba(0,255,255,0.1)",
                borderColor: "rgba(0,255,255,0.2)",
              }}
            >
              <div
                className="p-3 rounded-full"
                style={{
                  background: "linear-gradient(to bottom right, rgb(0,255,255), rgb(0,255,255))",
                }}
              >
                <Cpu className="h-8 w-8 text-white" />
              </div>
            </div>

            <h1
              className="text-6xl font-bold mb-4 text-white text-center bg-clip-text"
              style={{ backgroundImage: "linear-gradient(to right, white, rgb(0,255,255))" }}
            >
              Electronics Club
            </h1>

            <div
              className="h-1 w-20 rounded-full mb-6"
              style={{
                background: "linear-gradient(to right, rgb(0,255,255), rgb(0,255,255))",
              }}
            ></div>

            <h2 className="text-2xl font-light mb-4" style={{ color: "rgb(0,255,255)" }}>
              IIT Indore
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-8">
              Showcasing innovative projects created by our talented members, pushing the boundaries of electronics and
              technology.
            </p>

            <div className="flex gap-4 mb-10">
              <div
                className="flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full border"
                style={{
                  backgroundColor: "rgba(0,255,255,0.1)",
                  borderColor: "rgba(0,255,255,0.2)",
                }}
              >
                <Zap className="h-4 w-4" style={{ color: "rgb(0,255,255)" }} />
                <span className="text-sm" style={{ color: "rgb(0,255,255)" }}>
                  20+ Active Projects
                </span>
              </div>
              <div
                className="flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full border"
                style={{
                  backgroundColor: "rgba(0,255,255,0.1)",
                  borderColor: "rgba(0,255,255,0.2)",
                }}
              >
                <Code className="h-4 w-4" style={{ color: "rgb(0,255,255)" }} />
                <span className="text-sm" style={{ color: "rgb(0,255,255)" }}>
                  Innovation Hub
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 5;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 5;

    setRotation({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="perspective-1000 group max-w-sm mx-auto"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetRotation}
    >
      <div
        className="rounded-3xl overflow-hidden transition-all duration-300 transform-gpu border shadow-xl"
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.03, 1.03, 1.03)`
            : "rotateX(0) rotateY(0) scale3d(1, 1, 1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: isHovered
            ? "0 12px 30px rgba(0,255,255,0.25)"
            : "0 6px 16px rgba(0,0,0,0.25)",
          background: "linear-gradient(to bottom right, #0f172a, #0e2a2e)",
          borderColor: "rgba(0,255,255,0.2)",
        }}
      >
        <div className="relative">
          <div className="w-full h-[180px] overflow-hidden">
            <img
              src={project.image || "/placeholder.svg?height=200&width=320"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div
            className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border"
            style={{ color: "white", borderColor: "rgba(0,255,255,0.3)" }}
          >
            {project.category}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-3">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            <div
              className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs border"
              style={{
                color: "rgb(0,255,255)",
                backgroundColor: "rgba(0,255,255,0.08)",
                borderColor: "rgba(0,255,255,0.2)",
              }}
            >
              <Calendar className="h-3 w-3" />
              {project.date}
            </div>
            <div
              className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs border"
              style={{
                color: "rgb(0,255,255)",
                backgroundColor: "rgba(0,255,255,0.08)",
                borderColor: "rgba(0,255,255,0.2)",
              }}
            >
              <Users className="h-3 w-3" />
              {project.members.length} members
            </div>
          </div>

          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center font-medium text-sm hover:underline"
            style={{ color: "white" }}
          >
            Visit Project <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
