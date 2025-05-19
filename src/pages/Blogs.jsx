"use client"

import Navbar from "../components/Navbar"
import { motion } from "framer-motion"
import { Calendar, User, Clock, ArrowUpRight } from "lucide-react"
import { useState, useEffect } from "react"
import Papa from "papaparse" // You'll need to install this: npm install papaparse

export default function Blogs() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Function to fetch and parse Google Sheets CSV
    const fetchBlogsFromGoogleSheets = async () => {
      try {
        setLoading(true)
        // Replace with your published Google Sheet CSV URL
        // Make sure your Google Sheet is published to the web as CSV
        const googleSheetUrl =
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwGh9D-94lYn9qZNmFwk1vH0kur3kDzCmekA9a0Zv9tauA94SOGDp5ikxQtbthydk9IVyZTAHR-oMe/pub?output=csv"

        const response = await fetch(googleSheetUrl)
        if (!response.ok) throw new Error("Failed to fetch data")

        const csvData = await response.text()

        Papa.parse(csvData, {
          header: true,
          complete: (results) => {
            // Transform the data to match our blog format
            const formattedBlogs = results.data
              .filter((item) => item.title && item.description) // Filter out incomplete entries
              .map((item) => ({
                title: item.title,
                description: item.description,
                imageUrl: item.imageUrl || "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070",
                mediumUrl: item.mediumUrl || "#",
                category: item.category || "Technology",
                author: item.author || "Electronics Club",
                date: item.date || "May 19, 2025",
                readTime: item.readTime || "5 min read",
              }))

            setBlogs(formattedBlogs)
            setLoading(false)
          },
          error: (error) => {
            console.error("CSV Parsing Error:", error)
            setError("Failed to parse data")
            setLoading(false)
          },
        })
      } catch (err) {
        console.error("Fetch Error:", err)
        setError(err.message)
        setLoading(false)

        // Fallback to sample data if fetch fails
        setBlogs([
          {
            title: "Building an IoT Weather Station",
            description:
              "Learn how to build a complete IoT weather station using Arduino, sensors, and cloud connectivity to monitor environmental conditions in real-time.",
            imageUrl: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070",
            mediumUrl: "#",
            category: "IoT",
            author: "Priya Sharma",
            date: "May 15, 2025",
            readTime: "8 min read",
          },
          {
            title: "PCB Design Best Practices",
            description:
              "Master the fundamentals of PCB design with these industry-standard best practices that will improve your circuit reliability and manufacturing success rate.",
            imageUrl: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2074",
            mediumUrl: "#",
            category: "Hardware",
            author: "Rahul Verma",
            date: "May 10, 2025",
            readTime: "12 min read",
          },
          {
            title: "Introduction to FPGA Programming",
            description:
              "Dive into the world of Field Programmable Gate Arrays and learn how to implement custom digital logic for high-performance computing applications.",
            imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
            mediumUrl: "#",
            category: "Digital Design",
            author: "Ananya Patel",
            date: "May 5, 2025",
            readTime: "15 min read",
          },
          {
            title: "Robotics Competition Guide",
            description:
              "A comprehensive guide to preparing for and competing in collegiate robotics competitions, with tips from our award-winning team members.",
            imageUrl: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?q=80&w=2070",
            mediumUrl: "#",
            category: "Robotics",
            author: "Arjun Singh",
            date: "April 28, 2025",
            readTime: "10 min read",
          },
          {
            title: "Embedded Systems Security",
            description:
              "Explore the critical security vulnerabilities in embedded systems and learn practical techniques to protect your IoT devices from common attacks.",
            imageUrl: "https://images.unsplash.com/photo-1563770660941-10a63607739e?q=80&w=2070",
            mediumUrl: "#",
            category: "Security",
            author: "Vikram Mehta",
            date: "April 20, 2025",
            readTime: "11 min read",
          },
          {
            title: "Machine Learning on Microcontrollers",
            description:
              "Implement TinyML models on resource-constrained microcontrollers to create smart, efficient edge computing solutions for real-world problems.",
            imageUrl: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070",
            mediumUrl: "#",
            category: "AI",
            author: "Neha Gupta",
            date: "April 15, 2025",
            readTime: "14 min read",
          },
        ])
      }
    }

    fetchBlogsFromGoogleSheets()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <section className="pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-[250px]"
          >
            <h1 className="text-cyan-400 text-4xl md:text-6xl font-bold">Our Blog</h1>
            <p className="text-xl mt-8 text-gray-300 max-w-3xl mx-auto">
              Deep dives, practical guides, and fresh perspectives-crafted to fuel your curiosity and creativity in
              electronics and technology.
            </p>
          </motion.div>

          {/* Blog Grid */}
          {loading ? (
            <div className="mt-20 flex justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
            </div>
          ) : error ? (
            <div className="mt-20 text-red-400 text-center">
              <p>Error loading blogs: {error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-full"
              >
                Try Again
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
            >
              {blogs.map((blog, idx) => (
                <BlogCard {...blog} key={idx} index={idx} />
              ))}
            </motion.div>
          )}
        </section>
      </div>
    </div>
  )
}

const BlogCard = ({ title, description, imageUrl, mediumUrl, category, author, date, readTime, index }) => {
  const [focus, setFocus] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
      className="relative group h-[400px] sm:h-[420px] md:h-[450px]"
    >
      <motion.a
        href={mediumUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="block relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800/40 backdrop-blur-sm border border-gray-700 text-white hover:border-cyan-500/50 hover:shadow-cyan-500/20"
        onHoverStart={() => setFocus(true)}
        onHoverEnd={() => setFocus(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full text-xs font-medium">{category}</span>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 z-20"
          initial={{ y: 0 }}
          animate={{ y: focus ? -40 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white leading-tight">{title}</h2>

          <div className="flex flex-wrap items-center text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
            <div className="flex items-center mr-4">
              <User className="h-3.5 w-3.5 mr-1.5" />
              <span>{author}</span>
            </div>
            <div className="flex items-center mr-4">
              <Calendar className="h-3.5 w-3.5 mr-1.5" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1.5" />
              <span>{readTime}</span>
            </div>
          </div>

          <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">{description}</p>

          <motion.div
            className="flex items-center text-cyan-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: focus ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span>Read on Medium</span>
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </motion.div>
        </motion.div>
      </motion.a>
    </motion.div>
  )
}
