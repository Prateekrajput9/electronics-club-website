import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const blogs = [
  {
    title: "Title",
    description:
      "This is a very very long description of the blog in many lines and probably takes up a lot of space on the screen",
    imageUrl:
      "https://images.unsplash.com/photo-1743961815743-554cf8ce8430?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mediumUrl: "",
  },
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="relative pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <section className="pt-24 text-center">
          <div className="min-h-[250px]">
            <h1 className="text-cyan-400 text-4xl md:text-5xl font-bold">
              Blogs
            </h1>
            <p className="text-xl mt-8 text-gray-300 max-w-3xl mx-auto">
              Deep dives, practical guides, and fresh perspectives—crafted to
              fuel your curiosity and creativity.
            </p>
          </div>
          <div
            className="mt-10 grid gap-5"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            }}
          >
            {[...blogs, ...blogs, ...blogs, ...blogs].map((blog, idx) => (
              <BlogCard {...blog} key={idx} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const BlogCard = ({ title, description, imageUrl, mediumUrl }) => {
  const [focus, setFocus] = useState(false);

  return (
    <motion.a
      href={mediumUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="block relative max-w-md rounded-2xl h-64 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black/40 backdrop-blur-sm border border-gray-800 text-white hover:shadow-cyan-500/20"
      onHoverStart={() => setFocus(true)}
      onHoverEnd={() => setFocus(false)}
    >
      <div className="top-0 left-0 w-full h-full absolute z-0 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <motion.div
        className="z-10 relative top-[85%]"
        animate={{ top: focus ? "46%" : "85%" }}
      >
        <h2 className="text-3xl font-semibold mb-2 text-gray-100">{title}</h2>
        <p className="text-gray-200 text-sm mb-4">{description}</p>
        <div className="flex items-center text-blue-600 font-medium ml-2">
          <span>Read on Medium</span>
          <ExternalLink className="ml-2 h-4 w-4" />
        </div>
      </motion.div>
    </motion.a>
  );
};
