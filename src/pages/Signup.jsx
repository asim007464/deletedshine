import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home as HomeIcon } from "lucide-react";

const Signup = () => {
  // Ensure page starts at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Changed h-screen to min-h-screen for mobile flexibility
    <div className="flex min-h-screen lg:h-screen w-full bg-white font-jakarta overflow-x-hidden">
      {/* --- LEFT SECTION: Visual Side (Hidden on mobile) --- */}
      <div className="relative hidden w-1/2 lg:block h-full overflow-hidden">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#0f1216]/50" />

        {/* Logo and Text to match Login page */}
        <div className="absolute left-10 top-10">
          <img src="./websitelogo.png" className="w-[120px]" alt="Logo" />
        </div>

        <div className="absolute bottom-10 left-10 right-10 z-10">
          <h2 className="text-4xl font-black uppercase mb-4 text-white tracking-tight">
            Join the <span className="text-[#448cff]">Team</span>
          </h2>
          <p className="text-gray-200 text-lg font-medium max-w-md leading-relaxed">
            Create your worker account to manage your profile, set your own
            schedule, and track your same-day payments.
          </p>
          <p className="mt-12 text-xs text-slate-400 font-bold uppercase tracking-widest">
            © 2025 Shine & Span Cleaning Services Ltd
          </p>
        </div>
      </div>

      {/* --- RIGHT SECTION: Form Side --- */}
      <div className="flex w-full flex-col items-center justify-center px-6 py-10 lg:w-1/2 lg:px-20 bg-white">
        <div className="w-full max-w-[550px]">
          {/* Navigation Header for Mobile/Desktop */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/login"
              className="inline-flex items-center text-xs font-black uppercase tracking-widest text-slate-400 hover:text-[#448cff] transition-all"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Login
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-gray-400 rounded-sm text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-[#448cff] hover:text-white hover:border-[#448cff] transition-all"
            >
              <HomeIcon size={14} /> Home
            </Link>
          </div>

          <h1 className="text-3xl font-black uppercase tracking-tight mb-2 text-[#1e293b]">
            Create Account
          </h1>
          <p className="text-slate-500 mb-10 font-medium">
            Join London's most professional cleaning network.
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] font-bold text-slate-700 bg-white transition-all"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] font-bold text-slate-700 bg-white transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] font-bold text-slate-700 bg-white transition-all"
                placeholder="email@example.com"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Password
              </label>
              <input
                type="password"
                className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] font-bold text-slate-700 bg-white transition-all"
                placeholder="••••••••"
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] font-bold text-slate-700 bg-white transition-all"
                placeholder="••••••••"
              />
            </div>

            <button className="w-full mt-6 bg-[#448cff] text-white py-5 rounded-sm font-black uppercase tracking-[0.2em] text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
              Register Account
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-400 font-medium">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#448cff] font-black underline hover:text-blue-800 transition-colors"
              >
                Sign In here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
