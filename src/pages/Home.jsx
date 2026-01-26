import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Homecomponents/Navbar";
import Footer from "../Components/Homecomponents/Footer";

const Home = () => {
  return (
    <div className="font-jakarta">
      <Navbar />
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-[#0f1216] px-4 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#448cff]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <span className="inline-block px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-[#448cff] text-[13px] font-black uppercase tracking-[0.2em] mb-8">
            Professional Cleaners Wanted – London
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8">
            Seeking Energetic & <br />
            <span className="text-[#448cff]">Reliable Cleaners</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-3xl mx-auto">
            Join a progressive cleaning company Expanding into all borroughs of
            London. We offer flexible daytime hours and the chance to work
            independently while feeling supported by a great team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/apply"
              className="w-full sm:w-auto bg-[#448cff] text-white px-12 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20"
            >
              Apply Now
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto border border-gray-600 text-white px-12 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-white hover:text-slate-900 transition-all"
            >
              About the Role
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
