import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Signup = () => {
  return (
    <div className="flex h-screen bg-white font-jakarta overflow-hidden">
      {/* Visual Side */}
      <div className="hidden lg:flex w-1/2 bg-[#0f1216] relative items-center justify-center p-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80')",
          }}
        ></div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-12 md:px-24 overflow-y-auto">
        <Link
          to="/"
          className="mb-8 inline-flex items-center text-gray-400 font-bold hover:text-[#448cff] transition-all"
        >
          <ArrowLeft className="mr-2" size={18} /> Back to Home
        </Link>

        <h1 className="text-3xl font-black uppercase tracking-tight mb-8">
          Create Account
        </h1>

        <form className="space-y-5">
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-400">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] font-bold text-slate-700"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-400">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] font-bold text-slate-700"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-400">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] font-bold text-slate-700"
              placeholder="email@example.com"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-400">
              Password
            </label>
            <input
              type="password"
              className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] font-bold text-slate-700"
              placeholder="••••••••"
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-400">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] font-bold text-slate-700"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full mt-4 bg-[#448cff] text-white py-4 rounded-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-blue-100">
            Register Account
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-400 font-medium">
          Already have an account?{" "}
          <Link to="/login" className="text-[#448cff] font-black underline">
            Sign In here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
