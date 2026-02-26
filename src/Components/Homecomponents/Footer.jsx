import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSiteSettings } from "../../contexts/SiteSettingsContext";
import { useAuth } from "../../contexts/AuthContext";

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const currentYear = new Date().getFullYear();
  const { location, locationPostcodes, logoUrl, countryDisplayName } =
    useSiteSettings();
  const { user, signOut } = useAuth();

  const handleLogout = () => {
    signOut();
    navigate("/");
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 font-jakarta">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-16 mb-16">
        {/* --- COLUMN 1: BRAND & SOCIALS --- */}
        <div className="space-y-8">
          <Link to="/" className="flex items-center">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="Shine & Span"
                className="h-10 w-auto object-contain"
              />
            ) : (
              <span className="text-xl font-black text-[#1e293b] tracking-tight">
                Shine <span className="text-[#448cff]">&</span> Span
              </span>
            )}
          </Link>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm font-medium">
            {location}
            {locationPostcodes ? ` (${locationPostcodes})` : ""}'s premier
            platform for cleaning professionals.{" "}
            <b>
              <i>Offering flexible</i>
            </b>{" "}
            hours, top industry pay, and a supportive community for our
            self-employed team members.
          </p>
        </div>

        {/* --- COLUMN 2: QUICK LINKS --- */}
        <div>
          <h4 className="font-black uppercase text-xs tracking-[0.2em] text-slate-400 mb-8">
            Navigation
          </h4>
          <ul className="space-y-4 font-bold text-slate-700">
            <li>
              <Link to="/" className="hover:text-[#448cff] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#448cff] transition-colors"
              >
                Our Mission
              </Link>
            </li>
            {isHomePage && (
              <li>
                {user ? (
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="hover:text-[#448cff] transition-colors font-bold text-slate-700"
                    title="Sign out"
                    aria-label="Sign out"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="hover:text-[#448cff] transition-colors"
                  >
                    Office
                  </Link>
                )}
              </li>
            )}
          </ul>
        </div>

        {/* --- COLUMN 3: RECRUITMENT INFO --- */}
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-black uppercase tracking-widest text-slate-400">
        <p>© 2025 Shine & Span Cleaning Services LTD.</p>

        {/* <div className="flex gap-8">
          <Link to="/privacy" className="hover:text-[#448cff]">
            Privacy Policy
          </Link>
          <Link to="/TermsAndConditions" className="hover:text-[#448cff]">
            Terms of Service
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
