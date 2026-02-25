import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useSiteSettings } from "../../contexts/SiteSettingsContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {
    user,
    isAdmin,
    signOut,
    loading: authLoading,
  } = useAuth();
  const showAuthUI = !authLoading;
  const { logoUrl } = useSiteSettings();
  const logoSrc = logoUrl || "/websitelogo.png";

  const handleLogout = () => {
    signOut();
    setIsOpen(false);
    navigate("/");
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About Mission", path: "/about" },
    { name: "Apply Now", path: "/applyform" },
    // { name: "Contact", path: "/contact" },
    ...(showAuthUI && isAdmin ? [{ name: "Admin", path: "/admin" }] : []),
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 font-jakarta">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img
            src={logoSrc}
            alt="Shine & Span"
            className="h-12 w-auto object-contain"
          />
        </Link>

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

        <div className="hidden md:flex items-center gap-4 min-w-[120px] justify-end">
          {showAuthUI && user && (
            <button
              type="button"
              onClick={handleLogout}
              className="text-slate-700 font-bold text-sm px-6 py-2 hover:text-[#448cff] transition-all flex items-center gap-2"
            >
              <LogOut size={16} /> Logout
            </button>
          )}
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
          <div className="flex flex-wrap gap-4 pt-4">
            {showAuthUI && user && (
              <button
                type="button"
                onClick={handleLogout}
                className="py-4 px-6 border border-gray-400 rounded-sm font-bold flex items-center justify-center gap-2"
              >
                <LogOut size={18} /> Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
