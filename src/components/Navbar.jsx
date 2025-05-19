import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserCircle } from "lucide-react";
import logo from "../assets/logo.png";
const Navbar = () => {
  const location = useLocation().pathname.split("/")[1];
  console.log(location);
  const navItems = [
    "Home",
    "About us",
    "Blogs",
    "Projects",
    "Team",
    
    "Contact Us",
    "Workshop",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/25 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <img className="h-10" src={logo} alt="Ee club logo" />
          </div>

          {/* Center Nav */}
          <nav className="hidden md:flex gap-6 ">
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className={`text-white text-lg font-semibold relative transition-all duration-300 ${
                  location === item.toLowerCase()
                    ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after: after:bg-blue-400"
                    : "hover:text-green-400"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right Icon */}
          {/* <div className="flex items-center">
            <UserCircle className="text-white h-8 w-8" />
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
