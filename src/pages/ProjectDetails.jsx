

import { useState, useEffect } from "react"
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  Tag,
  Clock,
  Github,
  ChevronRight,
  Maximize,
  ChevronLeft,
} from "lucide-react"
import { Link, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import ProjectData from "./ProjectData"

export default function ProjectDetails() {
  const { id } = useParams()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeImage, setActiveImage] = useState(0)

  const project = ProjectData.find((proj) => proj.id === id)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % project.gallery.length)
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-2xl">Project not found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
      <Navbar />

      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[120px] opacity-15 animate-pulse"
          style={{
            backgroundColor: "rgb(0,210,255)",
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-[150px] opacity-10 animate-pulse"
          style={{
            backgroundColor: "rgb(0,255,200)",
            animationDelay: "1s",
            transform: `translate(${-mousePosition.x * 0.005}px, ${-mousePosition.y * 0.005}px)`,
            transition: "transform 0.5s ease-out",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        {/* Breadcrumb navigation */}
        <div className="mb-6 mt-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Projects</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-cyan-400">{project.title}</span>
          </Link>
        </div>

        {/* Project header */}
        <div className="mb-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-gray-300">{project.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column - Project details */}
          <div className="lg:col-span-8 order-2 lg:order-1 space-y-6">
            {/* About section */}
            <div className="bg-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-800/50 shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                <span className="inline-block w-1 h-6 bg-cyan-400 mr-3 rounded-full"></span>
                About the Project
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Two column layout for objectives and outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Objectives */}
              <div className="bg-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-800/50 shadow-lg h-full">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                  <span className="inline-block w-1 h-6 bg-cyan-400 mr-3 rounded-full"></span>
                  Objectives
                </h3>
                <ul className="space-y-3">
                  {project.objectives.map((obj, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></div>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div className="bg-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-800/50 shadow-lg h-full">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                  <span className="inline-block w-1 h-6 bg-cyan-400 mr-3 rounded-full"></span>
                  Outcomes
                </h3>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></div>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-800/50 shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                <span className="inline-block w-1 h-6 bg-cyan-400 mr-3 rounded-full"></span>
                Project Gallery
              </h3>

              {/* Main gallery image with navigation */}
              <div className="relative rounded-xl overflow-hidden border border-gray-700/50 shadow-lg mb-4 group">
                <img
                  src={project.gallery[activeImage] || "/placeholder.svg"}
                  alt={`Gallery image ${activeImage + 1}`}
                  className="w-full h-64 object-cover object-center"
                />

                {/* Image navigation controls */}
                <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={prevImage}
                    className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Fullscreen button */}
                <button
                  className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="View fullscreen"
                >
                  <Maximize className="h-4 w-4" />
                </button>

                {/* Image counter */}
                <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100">
                  {activeImage + 1} / {project.gallery.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-5 gap-2">
                {project.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`rounded-lg overflow-hidden transition-all ${
                      activeImage === index
                        ? "ring-2 ring-cyan-400 opacity-100"
                        : "ring-1 ring-gray-700 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-12 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Image and metadata */}
          <div className="lg:col-span-4 order-1 lg:order-2 space-y-6">
            {/* Main image with hover effect - SMALLER SIZE */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-800/50 bg-gray-900/40 backdrop-blur-sm">
              <div className="p-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project links */}
              <div className="flex gap-3 p-4 border-t border-gray-800/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-cyan-400 hover:text-cyan-300 px-3 py-1.5 rounded-lg transition-colors text-sm flex-1 justify-center"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1.5 rounded-lg transition-colors text-sm flex-1 justify-center"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </div>
            </div>

            {/* Project metadata */}
            <div className="bg-gray-900/40 rounded-xl p-5 backdrop-blur-sm border border-gray-800/50 shadow-lg space-y-4">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2 flex items-center">
                <span className="inline-block w-1 h-5 bg-cyan-400 mr-3 rounded-full"></span>
                Project Details
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Date</p>
                    <p className="text-gray-300">{project.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Duration</p>
                    <p className="text-gray-300">{project.duration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Category</p>
                    <p className="text-gray-300">{project.category}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Team</p>
                    <p className="text-gray-300">{project.members.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-900/40 rounded-xl p-5 backdrop-blur-sm border border-gray-800/50 shadow-lg">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                <span className="inline-block w-1 h-5 bg-cyan-400 mr-3 rounded-full"></span>
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800/80 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-900/30 hover:bg-cyan-900/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
