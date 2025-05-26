import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import Papa from "papaparse";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogsFromGoogleSheets = async () => {
      try {
        setLoading(true);
        const googleSheetUrl =
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwGh9D-94lYn9qZNmFwk1vH0kur3kDzCmekA9a0Zv9tauA94SOGDp5ikxQtbthydk9IVyZTAHR-oMe/pub?output=csv";
        const response = await fetch(googleSheetUrl);
        if (!response.ok) throw new Error("Failed to fetch data");
        const csvData = await response.text();

        Papa.parse(csvData, {
          header: true,
          complete: (results) => {
            const formattedBlogs = results.data
              .filter((item) => item.title && item.description)
              .map((item) => ({
                title: item.title,
                description: item.description,
                imageUrl: item.imageUrl || "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070",
                mediumUrl: item.mediumUrl || "#",
                category: item.category || "Technology",
                author: item.author || "Electronics Club",
                date: item.date || "May 19, 2025",
                readTime: item.readTime || "5 min read",
              }));
            setBlogs(formattedBlogs);
            setLoading(false);
          },
          error: (error) => {
            setError("Failed to parse data");
            setLoading(false);
          },
        });
      } catch (err) {
        setError(err.message);
        setLoading(false);
        setBlogs([
          // ... fallback sample data ...
        ]);
      }
    };

    fetchBlogsFromGoogleSheets();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-16 pb-8 px-3 sm:px-6 lg:px-8">
        <section className="pt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-[180px]"
          >
            <h1 className="text-cyan-400 text-3xl sm:text-4xl md:text-6xl font-bold">Our Blog</h1>
            <p className="text-base sm:text-lg mt-4 text-gray-300 max-w-xl mx-auto">
              Deep dives, practical guides, and fresh perspectives—crafted to fuel your curiosity and creativity in electronics and technology.
            </p>
          </motion.div>

          {/* Blog Grid */}
          {loading ? (
            <div className="mt-16 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
            </div>
          ) : error ? (
            <div className="mt-16 text-red-400 text-center">
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
              className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {blogs.map((blog, idx) => (
                <BlogCard {...blog} key={idx} index={idx} />
              ))}
            </motion.div>
          )}
        </section>
      </div>
    </div>
  );
}

const BlogCard = ({
  title,
  description,
  imageUrl,
  mediumUrl,
  category,
  author,
  date,
  readTime,
  index,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
      className="relative group h-[340px] sm:h-[400px] md:h-[420px]"
    >
      <motion.a
        href={mediumUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="block relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800/40 backdrop-blur-sm border border-gray-700 text-white hover:border-cyan-500/50 hover:shadow-cyan-500/20"
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        onTouchStart={() => setFocus(true)}
        onTouchEnd={() => setFocus(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-40 sm:h-48 md:h-56 transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="absolute top-3 left-3 z-20">
          <span className="px-2 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full text-xs font-medium">{category}</span>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20"
          initial={{ y: 0 }}
          animate={{ y: focus ? -32 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white leading-tight">{title}</h2>
          <div className="flex flex-wrap items-center text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3">
            <div className="flex items-center mr-3">
              <User className="h-3 w-3 mr-1" />
              <span>{author}</span>
            </div>
            <div className="flex items-center mr-3">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{readTime}</span>
            </div>
          </div>
          <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">{description}</p>
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
  );
};
