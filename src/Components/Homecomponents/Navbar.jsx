import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Mission", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 font-jakarta">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="./websitelogo.png"
            alt="Shine & Span"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[15px] font-bold transition-all hover:text-[#448cff] ${
                  isActive ? "text-[#448cff]" : "text-slate-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-slate-700 font-bold text-sm px-6 py-2 hover:text-[#448cff] transition-all"
          >
            Login
          </Link>
          <Link
            to="/apply"
            className="bg-[#448cff] text-white px-8 py-3 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-blue-100"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-6 space-y-4 animate-in slide-in-from-top duration-300">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-black text-slate-800"
            >
              {link.name}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="py-4 border border-gray-400 rounded-sm text-center font-bold"
            >
              Login
            </Link>
            <Link
              to="/apply"
              onClick={() => setIsOpen(false)}
              className="py-4 bg-[#448cff] text-white rounded-sm text-center font-bold"
            >
              Apply
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
