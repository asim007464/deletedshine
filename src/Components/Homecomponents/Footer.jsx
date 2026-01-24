import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 font-jakarta">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Brand - 2x Wider */}
        <div className="md:col-span-5 space-y-6">
          <img src="./websitelogo.png" alt="Logo" className="h-10" />
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm">
            London's premier platform for cleaning professionals. We provide
            flexible hours, top industry pay, and a supportive community for our
            self-employed team members.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-sm border border-gray-400 flex items-center justify-center text-slate-400 hover:bg-[#448cff] hover:text-white transition-all hover:border-[#448cff]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h4 className="font-black uppercase text-xs tracking-[0.2em] text-slate-400 mb-8">
            Navigation
          </h4>
          <ul className="space-y-4 font-bold text-slate-700">
            <li>
              <Link to="/" className="hover:text-[#448cff]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#448cff]">
                Our Mission
              </Link>
            </li>
            <li>
              <Link to="/apply" className="hover:text-[#448cff]">
                Apply to Work
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#448cff]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Recruitment Info */}
        <div className="md:col-span-4">
          <h4 className="font-black uppercase text-xs tracking-[0.2em] text-slate-400 mb-8">
            Recruitment
          </h4>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-[#448cff] shrink-0" size={20} />
              <div>
                <p className="text-xs font-black uppercase text-slate-400 mb-1">
                  Email Us
                </p>
                <p className="text-slate-800 font-bold">
                  recruitment@shinespan.co.uk
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-[#448cff] shrink-0" size={20} />
              <div>
                <p className="text-xs font-black uppercase text-slate-400 mb-1">
                  Location
                </p>
                <p className="text-slate-800 font-bold">
                  London, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-black uppercase tracking-widest text-slate-400">
        <p>© 2026 Shine & Span Cleaning Services LTD.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#448cff]">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#448cff]">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
