import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserCircle, Menu, X } from "lucide-react"; // Hamburger and close icons
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation().pathname.split("/")[1];
  const navItems = [
    "Home",
    "About us",
    "Blogs",
    "Projects",
    "Team",
    "Contact Us",
    "Events",
  ];

  // Helper to create route paths
  const getPath = (item) =>
    item.toLowerCase().replace(/\s+/g, "-"); // "About us" => "about-us"

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/25 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-10" src={logo} alt="Ee club logo" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${getPath(item)}`}
                className={`text-white text-lg font-semibold relative transition-all duration-300 ${
                  location === getPath(item)
                    ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-blue-400"
                    : "hover:text-green-400"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)} // Click outside to close
      >
        <nav
          className={`flex flex-col items-center justify-center h-full gap-8`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on nav
        >
          {navItems.map((item) => (
            <Link
              key={item}
              to={`/${getPath(item)}`}
              className={`text-white text-3xl font-bold px-6 py-2 rounded transition-all duration-200 ${
                location === getPath(item)
                  ? "bg-blue-500/70"
                  : "hover:bg-green-500/40"
              }`}
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
