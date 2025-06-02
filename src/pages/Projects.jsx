import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { Cpu, Calendar, Users, CheckCircle, Clock, Star, ArrowRight, Sparkles } from "lucide-react"

export default function ProjectsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeTab, setActiveTab] = useState("completed")
  const [completedFilter, setCompletedFilter] = useState("all")

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const allProjects = [
  {
    id: "1",
    title: "Virtual Piano",
    description:
      "A virtual piano using Arduino that produces different musical notes based on the distance of fingertips from an ultrasonic sensor.",
    image:"/project_images/virtual_piano.jpeg",
    category: "music",
    members: ["Vaidik Shah", "Aryan Jain", "Bhavy Ranka", "Parekh Om Nirav", "Mihir Jain"],
    date: "2024",
    difficulty: "beginner",
    status: "completed",
  },
  {
    id: "2",
    title: "Bluetooth Speaker",
    description:
      "A Bluetooth speaker using ESP32 as a Bluetooth A2DP sink to receive audio, output via I2S, and display song metadata on an OLED screen.",
    image:
      "/project_images/Bluetooth_Speaker.jpg",
    category: "audio",
    members: ["Adithya G", "Adharsh Gopalakrishnan", "Arnav Kumar", "Guru Pranav", "Rucha Gadgil"],
    date: "2025",
    difficulty: "beginner",
    status: "completed",
  },
  {
    id: "4",
    title: "BPM Sensor Machine",
    description:
      "A health monitoring system using Arduino Mega to measure and analyze BPM and blood oxygen levels with real-time alerts.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
    category: "health",
    members: ["Digvijay Pundir", "Aditya Saboo", "Harshitkumar Singh", "Devansh Chaudhary", "Abhishek Mehta"],
    date: "2024",
    difficulty: "beginner",
    status: "completed",
  },
  {
    id: "5",
    title: "LED Game",
    description:
      "A simple LED-based game using Arduino Uno with a 3x8 decoder to create patterns and adjustable speed via a potentiometer.",
    image:
      "/project_images/LED_3.jpg",
    category: "gaming",
    members: ["Karan Hitesh Bagthariya", "Yash Modi", "Ninad Kulkarni", "Vaibhav Sharma", "Viraj Patel", "Priyanshi Mahto"],
    date: "2025",
    difficulty: "beginner",
    status: "completed",
  },
  {
    id: "8",
    title: "Ping Pong Game",
    description:
      "A ping pong and snake game implementation on Arduino using joystick and display interfacing.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
    category: "gaming",
    members: ["Nagalla Abhisri Karthik", "Arjun Dhamdhere", "Dhananjay Dhumal"],
    date: "2024",
    difficulty: "beginner",
    status: "completed",
  },
  {
    id: "6",
    title: "Stroboscope",
    description:
      "A non-contact RPM measurement system using Arduino Nano 33 BLE Sense with LED flashing, gesture control, and Bluetooth monitoring.",
    image:
      "/project_images/breadboard_ckt.jpeg",
    category: "measurement",
    members: ["Prashant Narang", "Arihant Bhandari", "Vigneshwar", "Poorna Sai Reddy", "Atharvakant Chandorikar", "Bhaskar", "Venepally Sathvika", "Prem Pratik"],
    date: "2024",
    difficulty: "intermediate",
    status: "completed",
  },
  {
    id: "7",
    title: "Electronic Voting Machine",
    description:
      "An FPGA-based electronic voting machine using Verilog HDL with polling and counting modes for transparent electoral processes.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
    category: "voting",
    members: ["Prabhat Sati", "Himesh Jha", "Vansh Sabharwal", "Naman Goyal", "Sarvadyee Ghoghare", "Vaidehi Bhat", "Advay Kunte", "Samruddhee Jadhav"],
    date: "2024",
    difficulty: "intermediate",
    status: "completed",
  },
  {
    id: "9",
    title: "Digital Clock",
    description:
      "A 24-hour tunable digital clock built using 7-segment displays, ICs, and a crystal oscillator on a breadboard.",
    image:
      "/project_images/photo2_digital_clock.jpg",
    category: "timekeeping",
    members: ["Nitin Mewara", "Daksh Chandel", "Harshal Rudraksha", "Aniket Goyal", "Kuvam Bhutani", "Mudit Tiwari", "Abhijeet Parmar", "Nishit Rupavatia"],
    date: "2024",
    difficulty: "intermediate",
    status: "completed",
  },
  {
    id: "10",
    title: "Automatic Irrigation System",
    description:
      "A smart irrigation system using ESP8266 and soil moisture sensors to reduce water wastage with IoT-based control.",
    image:
      "/project_images/cover.jpg",
    category: "agriculture",
    members: ["Varad Gaekwad", "Sharik Mansoori", "Vaidehi Bhat"],
    date: "2024",
    difficulty: "intermediate",
    status: "completed",
  },
  {
    id: "11",
    title: "Edge AI",
    description:
      "Deploying a 2-layer neural network model trained on MNIST dataset for inferencing on ESP8266 and ESP32.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
    category: "artificial intelligence",
    members: ["Bhavy Ranka", "Vaidik Shah", "Aryan Jain", "Yash Modi", "Ninad Kulkarni", "Ashmita Sharma", "Arnav Kumar", "Prem Pratik", "Mihir", "Varad Gaekwad"],
    date: "2025",
    difficulty: "intermediate",
    status: "completed",
  },
  {
    id: "12",
    title: "Neural Network on FPGA",
    description:
      "A Verilog-based neural network processor on PYNQ Z2 FPGA using CORDIC algorithm for efficient computation.",
    image:
      "/project_images/istockphoto-1488575697-612x612.jpg",
    category: "artificial intelligence",
    members: ["Advay Kunte", "Prabhat Sati", "Vaidehi Bhat"],
    date: "2025",
    difficulty: "",
    status: "pending",
  },
  {
    id: "13",
    title: "Cluster Computing",
    description:
      "A cluster computing system using ESP32 with FreeRTOS, RabbitMQ, and Mosquitto for parallel task execution.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
    category: "computing",
    members: ["Guru Pranav", "Manthan Gupta", "Harshitkumar Singh", "Digvijay Singh Pundir", "Parekh Om Nirav", "Karan Hitesh Bagthariya", "Priyanshi Mahto", "Nagalla Abhisri Karthik", "Managari Saatvik", "Vaibhav Sharma", "Viraj Samir Patel"],
    date: "2025",
    difficulty: "intermediate",
    status: "completed",
  },
  {
    id: "14",
    title: "Ascon Cipher on FPGA",
    description:
      "A Verilog implementation of the ASCON cipher on FPGA for lightweight cryptographic applications in IoT.",
    image:
      "/project_images/145_2021_9398_Figa_HTML.png  ",
    category: "cryptography",
    members: ["Vansh Sabharwal", "Poorna Sai Reddy", "Harshal Rudraksh", "Venepally Sathwika", "Arihant Bhandari", "Yama Akshay", "Bhaskar", "Hilori Jain", "Atharvakant Chandorikar"],
    date: "2025",
    difficulty: "",
    status: "pending",
  },
  {
    id: "16",
    title: "Morse Code Communication",
    description:
      "A Morse code communication system between two Arduinos using a custom encryption technique and LCD display.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
    category: "communication",
    members: ["Bhasuru Nikhil", "Arjun Dhamdhere", "Shanajay Dhumal"],
    date: "2025",
    difficulty: "intermediate",
    status: "completed",
  },
  {
    id: "19",
    title: "RISC-V Microcontroller",
    description:
      "A 32-bit pipelined RISC-V microcontroller with UART and memory mapping, implemented on FPGA.",
    image:
      "/project_images/RISC.png",
    category: "computer architecture",
    members: ["Nitin Mewara", "Daksh Chandel", "Kuvam Bhutani", "Aniket Goyal", "Aman Choudhary"],
    date: "2025",
    difficulty: "",
    status: "pending",
  },
  {
    id: "20",
    title: "8-Bit Computer",
    description:
      "An 8-bit computer built on a breadboard using ICs to demonstrate basic computer architecture principles.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
    category: "computer architecture",
    members: ["Praneeth Karri"],
    date: "2024",
    difficulty: "intermediate",
    status: "completed",
  },
];
  const navigate = useNavigate()

  const completedProjects = allProjects.filter((project) => project.status === "completed")
  const pendingProjects = allProjects.filter((project) => project.status === "pending")
  const beginnerProjects = completedProjects.filter((project) => project.difficulty === "beginner")
  const intermediateProjects = completedProjects.filter((project) => project.difficulty === "intermediate")

  const getProjectsToShow = () => {
    if (activeTab === "pending") {
      return pendingProjects
    }

    if (activeTab === "completed") {
      switch (completedFilter) {
        case "beginner":
          return beginnerProjects
        case "intermediate":
          return intermediateProjects
        default:
          return completedProjects
      }
    }

    return completedProjects
  }

  const getSectionTitle = () => {
    if (activeTab === "pending") {
      return "Ongoing Projects"
    }

    if (activeTab === "completed") {
      switch (completedFilter) {
        case "beginner":
          return "Beginner Level Projects"
        case "intermediate":
          return "Intermediate Level Projects"
        default:
          return "Completed Projects"
      }
    }

    return "Completed Projects"
  }

  const getSectionDescription = () => {
    if (activeTab === "pending") {
      return "Currently in development and planning phase"
    }

    if (activeTab === "completed") {
      switch (completedFilter) {
        case "beginner":
          return "Perfect starting points for new members"
        case "intermediate":
          return "Advanced projects requiring more experience"
        default:
          return "Successfully completed projects from our team"
      }
    }

    return "Successfully completed projects from our team"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
      <Navbar />

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
            style={{
              background: "radial-gradient(circle, #06b6d4 0%, #3b82f6 30%, #8b5cf6 60%, transparent 80%)",
              top: "5%",
              left: "5%",
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
            style={{
              background: "radial-gradient(circle, #f59e0b 0%, #ef4444 30%, #ec4899 60%, transparent 80%)",
              top: "50%",
              right: "10%",
              transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
          <div
            className="absolute w-[350px] h-[350px] rounded-full opacity-12 blur-3xl"
            style={{
              background: "radial-gradient(circle, #10b981 0%, #06b6d4 40%, #8b5cf6 70%, transparent 90%)",
              bottom: "15%",
              left: "15%",
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
        </div>

        {/* Enhanced grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8 relative z-10 pt-20">
        {/* Enhanced Header */}
        <header className="relative mb-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Icon with enhanced styling */}
            {/* <div className="mb-10 inline-flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-xl opacity-60 animate-pulse" />
                <div className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-5 rounded-full shadow-2xl">
                  <Cpu className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div> */}

            {/* Main title with enhanced typography */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight mt-12">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                Our{" "}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            {/* Enhanced decorative line */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="h-1.5 w-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full" />
                <div className="absolute inset-0 h-1.5 w-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-sm opacity-50" />
              </div>
            </div>

            {/* Subtitle with glow effect */}
            <h2 className="text-3xl md:text-4xl font-light mb-8 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              IIT Indore
            </h2>

            {/* Enhanced description */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Showcasing innovative projects created by our talented members, pushing the boundaries of{" "}
              <span className="text-cyan-400 font-medium">electronics</span> and{" "}
              <span className="text-blue-400 font-medium">technology</span> through creativity and engineering
              excellence.
            </p>
          </div>
        </header>

        {/* Enhanced Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <button
            onClick={() => {
              setActiveTab("completed")
              setCompletedFilter("all")
            }}
            className={`group relative flex items-center gap-3 px-10 py-5 rounded-2xl border transition-all duration-500 overflow-hidden ${
              activeTab === "completed"
                ? "bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 border-cyan-400 text-cyan-300 shadow-2xl shadow-cyan-500/25"
                : "bg-slate-800/40 border-slate-600 text-slate-300 hover:border-cyan-400/50 hover:bg-slate-700/50 hover:shadow-lg"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CheckCircle className="h-6 w-6 relative z-10" />
            <span className="font-semibold text-lg relative z-10">Completed ({completedProjects.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("pending")}
            className={`group relative flex items-center gap-3 px-10 py-5 rounded-2xl border transition-all duration-500 overflow-hidden ${
              activeTab === "pending"
                ? "bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 border-amber-400 text-amber-300 shadow-2xl shadow-amber-500/25"
                : "bg-slate-800/40 border-slate-600 text-slate-300 hover:border-amber-400/50 hover:bg-slate-700/50 hover:shadow-lg"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Clock className="h-6 w-6 relative z-10" />
            <span className="font-semibold text-lg relative z-10">Ongoing ({pendingProjects.length})</span>
          </button>
        </div>

        {/* Enhanced Difficulty Filter */}
        {activeTab === "completed" && (
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <button
              onClick={() => setCompletedFilter("all")}
              className={`px-8 py-4 rounded-xl border text-sm font-semibold transition-all duration-300 ${
                completedFilter === "all"
                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400 text-cyan-300 shadow-lg"
                  : "bg-slate-800/30 border-slate-600 text-slate-400 hover:border-cyan-400/50 hover:text-slate-300"
              }`}
            >
              All ({completedProjects.length})
            </button>
            <button
              onClick={() => setCompletedFilter("beginner")}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl border text-sm font-semibold transition-all duration-300 ${
                completedFilter === "beginner"
                  ? "bg-gradient-to-r from-emerald-500/20 to-green-500/20 border-emerald-400 text-emerald-300 shadow-lg"
                  : "bg-slate-800/30 border-slate-600 text-slate-400 hover:border-emerald-400/50 hover:text-slate-300"
              }`}
            >
              <Star className="h-4 w-4" />
              Beginner ({beginnerProjects.length})
            </button>
            <button
              onClick={() => setCompletedFilter("intermediate")}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl border text-sm font-semibold transition-all duration-300 ${
                completedFilter === "intermediate"
                  ? "bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400 text-orange-300 shadow-lg"
                  : "bg-slate-800/30 border-slate-600 text-slate-400 hover:border-orange-400/50 hover:text-slate-300"
              }`}
            >
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
              Intermediate ({intermediateProjects.length})
            </button>
          </div>
        )}

        {/* Enhanced Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{getSectionTitle()}</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">{getSectionDescription()}</p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {getProjectsToShow().map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 8

    setRotation({ x: rotateX, y: rotateY })
  }

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleViewDetails = (e) => {
    e.preventDefault()
    console.log(`Navigating to project ${project.id}`)
    try {
      navigate(`/projects/${project.id}`)
    } catch (error) {
      console.error("Navigation error:", error)
      alert(`Would navigate to project ${project.title} (ID: ${project.id})`)
    }
  }

  const getDifficultyBadge = () => {
    if (project.difficulty === "beginner") {
      return (
        <div className="absolute top-4 left-4 z-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-500 rounded-full blur-md opacity-70" />
            <div className="relative bg-gradient-to-r from-emerald-400 via-green-400 to-teal-500 px-4 py-2 rounded-full text-xs font-bold text-white flex items-center gap-2 shadow-2xl border border-white/30">
              <Star className="h-3 w-3 fill-current" />
              <span>Beginner</span>
            </div>
          </div>
        </div>
      )
    }
    if (project.difficulty === "intermediate") {
      return (
        <div className="absolute top-4 left-4 z-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 rounded-full blur-md opacity-70" />
            <div className="relative bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 px-4 py-2 rounded-full text-xs font-bold text-white flex items-center gap-2 shadow-2xl border border-white/30">
              <Star className="h-3 w-3 fill-current" />
              <Star className="h-3 w-3 fill-current" />
              <span>Intermediate</span>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  const getStatusBadge = () => {
    if (project.status === "pending") {
      return (
        <div className="absolute top-4 right-4 z-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 rounded-full blur-md opacity-70" />
            <div className="relative bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 px-4 py-2 rounded-full text-xs font-bold text-white flex items-center gap-2 shadow-2xl border border-white/30">
              <Clock className="h-3 w-3" />
              <span>Ongoing</span>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="absolute top-4 right-4 z-20">
        <div className="relative">
          <div className="absolute inset-0 bg-slate-800/80 rounded-full blur-sm" />
          <div className="relative bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-cyan-300 border border-cyan-400/40 shadow-xl">
            {project.category}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={cardRef}
      className="perspective-1000 group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetRotation}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div
        className="relative rounded-3xl overflow-hidden transition-all duration-700 transform-gpu backdrop-blur-sm"
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.03, 1.03, 1.03)`
            : "rotateX(0) rotateY(0) scale3d(1, 1, 1)",
          transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.5s ease",
          boxShadow: isHovered
            ? "0 35px 70px rgba(6, 182, 212, 0.3), 0 0 0 1px rgba(6, 182, 212, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            : "0 15px 35px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(148, 163, 184, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          background: isHovered
            ? "linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)"
            : "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)",
        }}
      >
        {/* Enhanced Image Section */}
        <div className="relative overflow-hidden">
          <div className="w-full h-64 overflow-hidden">
            <img
              src={project.image || "/placeholder.svg?height=256&width=400"}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            {/* Enhanced gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {project.difficulty && getDifficultyBadge()}
          {getStatusBadge()}
        </div>

        {/* Enhanced Content Section */}
        <div className="p-8 space-y-6">
          {/* Title and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
              {project.description}
            </p>
          </div>

          {/* Enhanced Meta Information */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-slate-700/60 to-slate-600/60 border border-slate-500/40 text-xs text-cyan-300 backdrop-blur-sm shadow-lg">
              <Calendar className="h-4 w-4" />
              <span className="font-semibold">{project.date}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-slate-700/60 to-slate-600/60 border border-slate-500/40 text-xs text-cyan-300 backdrop-blur-sm shadow-lg">
              <Users className="h-4 w-4" />
              <span className="font-semibold">{project.members.length} members</span>
            </div>
          </div>

          {/* Enhanced Action Button */}
          <button
            onClick={handleViewDetails}
            className="group/btn relative w-full overflow-hidden rounded-2xl p-[2px] transition-all duration-500 hover:scale-[1.02] focus:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899)",
            }}
          >
            <div className="relative flex items-center justify-center gap-3 rounded-2xl bg-slate-900/90 px-8 py-4 text-white transition-all duration-500 group-hover/btn:bg-slate-900/70">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <span className="relative font-bold text-base">View Details</span>
              <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
