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
    title: "Virtual Piano",
    description: "A virtual piano using Arduino UNO R3 that produces different musical notes based on the distance of fingertips from an ultrasonic sensor.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
    category: "music",
    members: ["Vaidik Shah", "Aryan jain", "bhavya ranka", "parekh om nirav"],
    date: "2024",
  },
  {
    id: "2",
    title: "BT Speaker",
    description: "ESP32 Bluetooth Audio Receiver with OLED Display that receives audio via Bluetooth A2DP and displays song metadata.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvYm90aWNzfGVufDB8fDB8fHww",
    category: "audio",
    members: ["adithya g", "adharsh gopalakrishnan", "arnav kumar", "guru pranav"],
    date: "2024",
  },
  {
    id: "3",
    title: "Home Automation",
    description: "A home automation system project.",
    image: "https://media.istockphoto.com/id/1500558452/photo/component-installation-on-circuit-board-fully-automated-modern-pcb-assembly-line-equipped.webp?a=1&b=1&s=612x612&w=0&k=20&c=xabzrpEHdMnQ7TfxUUv1DHj02ouPjr4kjIIKBL2ZrC4=",
    category: "IoT",
    members: ["manthan gupta", "bhasuru nikhil", "ashmita sharma"],
    date: "2024",
  },
  {
    id: "4",
    title: "Safe Beats",
    description: "A project focused on safe beats technology.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
    category: "health",
    members: ["digvijay pundir", "aditya saboo", "harshitkumar singh", "devansh chaudhary", "abhishek mehta"],
    date: "2024",
  },
  {
    id: "5",
    title: "LED Game",
    description: "A game project using LED technology.",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
    category: "game",
    members: ["karan hitesh bagthariya", "yash modi", "ninad kulkarni", "vaibhav, sharma", "viraj patel"],
    date: "2024",
  },
  {
    id: "6",
    title: "Stroboscope",
    description: "A stroboscope project. It is a great project",
    image: "https://images.unsplash.com/photo-1558137623-ce933996c730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJvYm90aWNzfGVufDB8fDB8fHww",
    category: "electronics",
    members: ["prashant narang", "poorna sai reddy", "prem pratik"],
    date: "2024",
  },
  {
    id: "7",
    title: "EVM",
    description: "Electronic Voting Machine implementation using FPGA and Verilog.",
    image: "https://media.istockphoto.com/id/858053178/photo/digital-electronic-components-circuit-boards-technology-era-india-map.webp?a=1&b=1&s=612x612&w=0&k=20&c=n4BOC6wGjp9Hs7hw119PksFB-x8dHn7jY3e6wgl5PfI=",
    category: "electronics",
    members: ["prabhat sati", "himesh jha", "vansh sabharwal", "naman goyal", "sarvadyee ghoghare", "vaidehi bhat", "advay kunte", "samruddhee jadhav"],
    date: "2024",
  },
  {
    id: "8",
    title: "Arduino Based Games",
    description: "Collection of games implemented on Arduino platform.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
    category: "game",
    members: ["priyanshi mahto", "nagalla abhisri karthik", "arjun dhamdhere", "dhananjay dhumal"],
    date: "2024",
  },
  {
    id: "9",
    title: "Digital Clock",
    description: "A digital clock implementation project.",
    image: "https://images.unsplash.com/photo-1558137623-ce933996c730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJvYm90aWNzfGVufDB8fDB8fHww",
    category: "electronics",
    members: ["nitin mewara", "daksh chandel", "harshal rudraksha", "aniket goyal"],
    date: "2024",
  },
  {
    id: "10",
    title: "Irrigation System",
    description: "Smart irrigation system for automated plant watering.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
    category: "IoT",
    members: ["varad gaekwad", "sharik mansoori", "vaidehi bhat"],
    date: "2024",
  },
  {
    id: "11",
    title: "Edge AI",
    description: "Implementation of AI algorithms on edge devices.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvYm90aWNzfGVufDB8fDB8fHww",
    category: "AI",
    members: ["bhavya ranka", "vaidik shah", "aryan jain", "yash modi", "ninad kulkarni", "ashmita sharma", "arnav kumar", "prem pratik", "mihir", "varad gaekwad"],
    date: "2025",
  },
  {
    id: "12",
    title: "Neural Nets Processor Design",
    description: "CORDIC-based neural network accelerator design.",
    image: "https://media.istockphoto.com/id/858053178/photo/digital-electronic-components-circuit-boards-technology-era-india-map.webp?a=1&b=1&s=612x612&w=0&k=20&c=n4BOC6wGjp9Hs7hw119PksFB-x8dHn7jY3e6wgl5PfI=",
    category: "AI",
    members: ["advay kunte", "prabhat sati", "vaidehi bhat"],
    date: "2025",
  },
  {
    id: "13",
    title: "Cluster Computing",
    description: "Implementation of a cluster computing system.",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
    category: "computing",
    members: ["Manthan Gupta", "Harshitkumar Singh", "Digvijay Singh Pundir", "Parekh Om Nirav", "Karan Hitesh Bagthariya", "Priyanshi Mahto", "Nagalla Abhisri Karthik", "Managari Saatvik", "Vaibhav Sharma", "Viraj Samir Patel"],
    date: "2025",
  },
  {
    id: "14",
    title: "Cryptography (Ascon Cipher)",
    description: "Implementation of Ascon cipher cryptography.",
    image: "https://media.istockphoto.com/id/1500558452/photo/component-installation-on-circuit-board-fully-automated-modern-pcb-assembly-line-equipped.webp?a=1&b=1&s=612x612&w=0&k=20&c=xabzrpEHdMnQ7TfxUUv1DHj02ouPjr4kjIIKBL2ZrC4=",
    category: "security",
    members: ["vansh sabharwal", "poorna sai reddy", "harshal rudraksh", "venepally sathwika", "arihant bhandari", "yama akshay", "bhaskar", "hilori jain", "atharvakant chandorikar"],
    date: "2025",
  },
  {
    id: "15",
    title: "ANC",
    description: "Active Noise Cancellation project.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
    category: "audio",
    members: ["Adithya G", "Devansh Chaudhary", "Abhishek Mehta", "M Sai Krishna", "Aditya Saboo", "Adharsh Gopalakrishnan", "Praneeth K.S.S"],
    date: "2025",
  },
  {
    id: "16",
    title: "Morse Code",
    description: "Implementation of morse code communication protocol.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvYm90aWNzfGVufDB8fDB8fHww",
    category: "communication",
    members: ["bhasuru nikhil", "arjun dhamdhere", "shanajay dhumal"],
    date: "2025",
  },
  {
    id: "17",
    title: "MIDI Synthesizer",
    description: "Development of a MIDI synthesizer for music production.",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
    category: "music",
    members: ["nishit rupavatia", "prashant narang", "samruddhee jadhav"],
    date: "2025",
  },
  {
    id: "18",
    title: "Analog Calculator",
    description: "Development of an analog calculator system.",
    image: "https://media.istockphoto.com/id/1500558452/photo/component-installation-on-circuit-board-fully-automated-modern-pcb-assembly-line-equipped.webp?a=1&b=1&s=612x612&w=0&k=20&c=xabzrpEHdMnQ7TfxUUv1DHj02ouPjr4kjIIKBL2ZrC4=",
    category: "electronics",
    members: ["varad gaekwad", "sharik mansoori", "naman goyal", "sarvadnyee ghoghare", "himesh jha", "yash shrivastava"],
    date: "2025",
  },
  {
    id: "19",
    title: "Microcontroller Development",
    description: "Development of a RISC-V 32-bit microprocessor.",
    image: "https://images.unsplash.com/photo-1558137623-ce933996c730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJvYm90aWNzfGVufDB8fDB8fHww",
    category: "computing",
    members: ["nitin mewara", "daksh chandel", "kuvam bhutani", "aniket goyal"],
    date: "2025",
  },
  {
    id: "20",
    title: "8-bit Computer",
    description: "Implementation of an 8-bit breadboard computer.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
    category: "computing",
    members: ["praneeth karri"],
    date: "Past Years",
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
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
            }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-[120px]"
            style={{
              backgroundColor: "rgb(0,255,255)",
              transform: `translate(${-mousePosition.x * 0.01}px, ${
                -mousePosition.y * 0.01
              }px)`,
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

          <div className="relative min-h-[450px] justify-center z-10 flex flex-col items-center">
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
                  background:
                    "linear-gradient(to bottom right, rgb(0,255,255), rgb(0,255,255))",
                }}
              >
                <Cpu className="h-8 w-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-cyan-400">Projects</span>
            </h1>

            <div
              className="h-1 w-20 rounded-full mb-6"
              style={{
                background:
                  "linear-gradient(to right, rgb(0,255,255), rgb(0,255,255))",
              }}
            ></div>

            <h2
              className="text-2xl font-light mb-4"
              style={{ color: "rgb(0,255,255)" }}
            >
              IIT Indore
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-8">
              Showcasing innovative projects created by our talented members,
              pushing the boundaries of electronics and technology.
            </p>

            <div className="flex gap-4">
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
          <h3 className="text-xl font-semibold text-white mb-1">
            {project.title}
          </h3>
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
